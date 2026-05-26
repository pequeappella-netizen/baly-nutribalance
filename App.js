// App.js — Main entry point.
// Owns the screen routing and toast; everything else is delegated.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, ActivityIndicator, StatusBar, Animated, Easing,
  SafeAreaView, StyleSheet, Platform, Alert, Modal, Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { STR } from './strings';
import { useAppState } from './storage';
import { analyzePhoto } from './balyAI';

import HomeScreen from './HomeScreen';
import RecetarioScreen from './RecetarioScreen';
import DetailScreen from './DetailScreen';
import CoachScreen from './CoachScreen';
import PerfilScreen from './PerfilScreen';
import BottomNav from './BottomNav';

export default function App() {
  const { state, actions } = useAppState();
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentRecipeId, setCurrentRecipeId] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const [isAnalyzingPhoto, setIsAnalyzingPhoto] = useState(false);
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastTimer = useRef(null);

  // ===== Toast =====
  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    Animated.timing(toastOpacity, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
    toastTimer.current = setTimeout(() => {
      Animated.timing(toastOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }, 2000);
  }, [toastOpacity]);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  // ===== Navigation helpers =====
  const goTo = useCallback((screen) => {
    setCurrentScreen(screen);
  }, []);

  const openRecipe = useCallback((id) => {
    setCurrentRecipeId(id);
    setCurrentScreen('detail');
  }, []);

  const goBack = useCallback(() => {
    setCurrentScreen('home');
    setCurrentRecipeId(null);
  }, []);

  // ===== Photo analysis =====
  const lang = state?.profile?.lang || 'es';

  const processPhoto = useCallback(async (base64, mediaType) => {
    setIsAnalyzingPhoto(true);
    try {
      const result = await analyzePhoto(base64, mediaType, state, lang);

      // Si Baly detectó comida, la registramos
      if (result.foodsLogged && result.foodsLogged.length > 0) {
        for (const food of result.foodsLogged) {
          actions.logFood({
            id: `photo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            name: food.name,
            kcal: food.kcal || 0,
            p: food.p || 0,
            c: food.c || 0,
            f: food.f || 0,
          });
        }
        const total = result.foodsLogged.reduce((sum, f) => sum + (f.kcal || 0), 0);
        showToast(`📷 +${total} kcal · ${result.foodsLogged.map(f => f.name).join(', ')}`);
      } else {
        // Baly no pudo identificar comida — mostramos su explicación
        Alert.alert(
          lang === 'es' ? '📷 Baly mira tu foto' : '📷 Baly schaut dein Foto an',
          result.text || (lang === 'es' ? 'No pude identificar comida en la foto.' : 'Konnte kein Essen erkennen.'),
        );
      }
    } catch (err) {
      Alert.alert(
        lang === 'es' ? 'Error analizando la foto' : 'Fehler beim Analysieren',
        err.message
      );
    } finally {
      setIsAnalyzingPhoto(false);
    }
  }, [state, lang, actions]);

  const pickFromCamera = useCallback(async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) {
      Alert.alert(
        lang === 'es' ? 'Permiso de cámara' : 'Kamera-Berechtigung',
        lang === 'es' ? 'Necesito permiso para usar la cámara.' : 'Ich brauche die Erlaubnis für die Kamera.'
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      base64: true,
    });
    if (!result.canceled && result.assets?.[0]?.base64) {
      const asset = result.assets[0];
      const mediaType = asset.mimeType || 'image/jpeg';
      processPhoto(asset.base64, mediaType);
    }
  }, [processPhoto, lang]);

  const pickFromLibrary = useCallback(async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert(
        lang === 'es' ? 'Permiso de galería' : 'Galerie-Berechtigung',
        lang === 'es' ? 'Necesito permiso para acceder a la galería.' : 'Ich brauche die Erlaubnis für die Galerie.'
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      base64: true,
    });
    if (!result.canceled && result.assets?.[0]?.base64) {
      const asset = result.assets[0];
      const mediaType = asset.mimeType || 'image/jpeg';
      processPhoto(asset.base64, mediaType);
    }
  }, [processPhoto, lang]);

  const handleAddPress = useCallback(() => {
    Alert.alert(
      lang === 'es' ? '📷 Foto de comida' : '📷 Foto vom Essen',
      lang === 'es' ? '¿De dónde la tomamos?' : 'Woher das Foto?',
      [
        {
          text: lang === 'es' ? 'Tomar foto' : 'Foto machen',
          onPress: pickFromCamera,
        },
        {
          text: lang === 'es' ? 'De la galería' : 'Aus Galerie',
          onPress: pickFromLibrary,
        },
        {
          text: lang === 'es' ? 'Cancelar' : 'Abbrechen',
          style: 'cancel',
        },
      ]
    );
  }, [pickFromCamera, pickFromLibrary, lang]);

  // ===== Loading state =====
  if (!state) {
    return (
      <SafeAreaView style={styles.loadingWrap}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.cream} />
        <ActivityIndicator size="large" color={COLORS.green600} />
        <Text style={styles.loadingText}>Cargando Baly…</Text>
      </SafeAreaView>
    );
  }

  const t = STR[lang];

  // ===== Active screen =====
  let screen = null;
  switch (currentScreen) {
    case 'recetario':
      screen = (
        <RecetarioScreen
          t={t} lang={lang}
          onOpenRecipe={openRecipe}
          onBack={goBack}
        />
      );
      break;
    case 'detail':
      screen = (
        <DetailScreen
          recipeId={currentRecipeId}
          t={t} lang={lang}
          actions={actions}
          onBack={() => setCurrentScreen('recetario')}
          onShowToast={showToast}
        />
      );
      break;
    case 'coach':
      screen = (
        <CoachScreen
          t={t} lang={lang}
          state={state}
          actions={actions}
          onBack={goBack}
        />
      );
      break;
    case 'perfil':
      screen = (
        <PerfilScreen
          t={t} lang={lang}
          state={state}
          actions={actions}
          onBack={goBack}
          onShowToast={showToast}
        />
      );
      break;
    case 'home':
    default:
      screen = (
        <HomeScreen
          state={state}
          actions={actions}
          t={t}
          lang={lang}
          onLangChange={actions.setLang}
          onOpenRecipe={openRecipe}
          onGoTo={goTo}
          onShowToast={showToast}
        />
      );
  }

  // The nav highlights 'recetario' while inside a recipe detail
  const activeTab = currentScreen === 'detail' ? 'recetario' : currentScreen;

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.cream} />
      <View style={styles.screen}>
        {screen}
      </View>

      <BottomNav
        current={activeTab}
        onChange={goTo}
        onAddPress={handleAddPress}
        t={t}
      />

      {/* Toast */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.toast,
          { opacity: toastOpacity },
        ]}
      >
        <Text style={styles.toastText}>{toastMsg}</Text>
      </Animated.View>

      {/* Photo analysis overlay */}
      <Modal
        visible={isAnalyzingPhoto}
        transparent
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={styles.photoOverlay}>
          <View style={styles.photoModal}>
            <ActivityIndicator size="large" color={COLORS.green600} />
            <Text style={styles.photoTitle}>
              {lang === 'es' ? '📷 Baly mira tu plato' : '📷 Baly schaut dein Essen an'}
            </Text>
            <Text style={styles.photoSub}>
              {lang === 'es' ? 'Identificando comida y calculando kcal…' : 'Erkenne Essen und berechne kcal…'}
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  screen: {
    flex: 1,
  },
  loadingWrap: {
    flex: 1,
    backgroundColor: COLORS.cream,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.ink500,
  },
  toast: {
    position: 'absolute',
    bottom: Platform.select({ ios: 96, android: 92 }),
    left: 30,
    right: 30,
    backgroundColor: COLORS.ink900,
    borderRadius: RADIUS.full,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    ...SHADOWS.lg,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  photoOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 42, 26, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  photoModal: {
    backgroundColor: COLORS.paper,
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 28,
    alignItems: 'center',
    gap: 16,
    minWidth: 260,
    ...SHADOWS.lg,
  },
  photoTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.ink900,
    textAlign: 'center',
    marginTop: 4,
  },
  photoSub: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.ink500,
    textAlign: 'center',
    lineHeight: 18,
  },
});
