// App.js — Main entry point.
// Owns the screen routing and toast; everything else is delegated.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, ActivityIndicator, StatusBar, Animated, Easing,
  SafeAreaView, StyleSheet, Platform,
} from 'react-native';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { STR } from './strings';
import { useAppState } from './storage';

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

  const lang = state.profile.lang || 'es';
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
});
