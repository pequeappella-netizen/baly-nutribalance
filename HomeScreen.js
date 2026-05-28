// HomeScreen.js — Dashboard with calorie ring, macros, search, and recipe previews.

import React, { useState, useMemo } from 'react';
import {
  View, Text, ScrollView, TextInput, Pressable, Image, StyleSheet,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { RECIPES, calcGoal } from './recipes';
import { computeStreak } from './stats';
import CalorieRing from './CalorieRing';

const MASCOTS = {
  doctor: require('./assets/baly-doctor.png'),
  chef:   require('./assets/baly-chef.png'),
  heart:  require('./assets/baly-heart.png'),
};

const HOME_AR_IDS = ['empanada-salteña', 'milanesa-horno', 'mate-naranja'];
const HOME_DE_IDS = ['brezel-integral', 'sauerkraut-manzana', 'apfelstrudel'];

export default function HomeScreen({ state, actions, t, lang, onLangChange, onOpenRecipe, onGoTo, onShowToast }) {
  const [search, setSearch] = useState('');
  const profile = state.profile;
  const goal = useMemo(() => calcGoal(profile), [profile]);
  const consumed = state.consumed.kcal;
  const streak = useMemo(() => computeStreak(state), [state.history]);

  // Goals for macros (30/45/25 split, in grams)
  const pGoal = Math.max(1, Math.round((goal * 0.30) / 4));
  const cGoal = Math.max(1, Math.round((goal * 0.45) / 4));
  const fGoal = Math.max(1, Math.round((goal * 0.25) / 9));
  const wGoal = 2000;

  const filteredFoods = search.trim().length >= 2
    ? RECIPES.filter(r =>
        r.name.es.toLowerCase().includes(search.toLowerCase()) ||
        r.name.de.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleAddFood = (r) => {
    actions.logFood({ id: r.id, kcal: r.kcal, p: r.p, c: r.c, f: r.f });
    setSearch('');
    const flag = r.country === 'ar' ? '🇦🇷' : '🇩🇪';
    onShowToast(`+${r.kcal} kcal · ${flag} ${r.name[lang]}`);
  };

  const handleUndo = () => {
    const removed = actions.undoLast();
    if (removed) {
      const recipe = RECIPES.find(x => x.id === removed.recipeId);
      const name = recipe ? recipe.name[lang] : (removed.name || '');
      onShowToast(`${t.removed} ${name}`);
    }
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollInner}>
      {/* Top bar: greeting + lang toggle */}
      <View style={styles.topBar}>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.kicker}>{t.good}</Text>
          <Text style={styles.greet}>
            <Text>{t.hello}, </Text>
            <Text style={{ color: COLORS.green700 }}>{profile.name || '?'}</Text>
            <Text> 👋</Text>
          </Text>
        </View>
        <View style={styles.langToggle}>
          <Pressable
            style={[styles.langBtn, lang === 'es' && styles.langBtnActive]}
            onPress={() => onLangChange('es')}
          >
            <Text style={[styles.langBtnText, lang === 'es' && styles.langBtnTextActive]}>ES</Text>
          </Pressable>
          <Pressable
            style={[styles.langBtn, lang === 'de' && styles.langBtnActive]}
            onPress={() => onLangChange('de')}
          >
            <Text style={[styles.langBtnText, lang === 'de' && styles.langBtnTextActive]}>DE</Text>
          </Pressable>
        </View>
      </View>

      {/* HERO — calorie ring + macros */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.heroKicker}>{t.today}</Text>
            <Text style={styles.heroTitle}>{t.balance}</Text>
          </View>
          <View style={styles.streak}>
            <Text style={styles.streakText}>🔥 {streak} {t.days}</Text>
          </View>
        </View>

        <View style={styles.ringRow}>
          <CalorieRing consumed={consumed} goal={goal} remainingLabel={t.remaining} />
          <View style={styles.macros}>
            <MacroBar label={t.macroP} value={state.consumed.p} goal={pGoal} unit="g" color="#FCD34D" />
            <MacroBar label={t.macroC} value={state.consumed.c} goal={cGoal} unit="g" color="#F87171" />
            <MacroBar label={t.macroF} value={state.consumed.f} goal={fGoal} unit="g" color="#86EFAC" />
            <MacroBar label="💧" value={state.consumed.water_ml / 1000} goal={wGoal / 1000} unit="L" color="#93C5FD" />
          </View>
        </View>
      </View>

      {/* Undo button (visible only when log has entries) */}
      {state.log.length > 0 && (
        <View style={styles.undoBar}>
          <Pressable style={styles.undoBtn} onPress={handleUndo}>
            <Text style={styles.undoText}>{t.undoLast}</Text>
          </Pressable>
        </View>
      )}

      {/* COACH BALY */}
      <View style={styles.coach}>
        <Image source={MASCOTS.doctor} style={styles.balyDoc} resizeMode="contain" />
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.coachKicker}>{t.tip}</Text>
          <Text style={styles.coachMsg}>{t.coachMsg}</Text>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>{t.addQ}</Text>
          <Pressable onPress={() => onGoTo('recetario')}>
            <Text style={styles.sectionLink}>{t.history} →</Text>
          </Pressable>
        </View>
        <View style={styles.searchBox}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={COLORS.green600} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <Circle cx={11} cy={11} r={8} />
            <Path d="m21 21-4.3-4.3" />
          </Svg>
          <TextInput
            style={styles.searchInput}
            placeholder={t.searchPh}
            placeholderTextColor={COLORS.ink300}
            value={search}
            onChangeText={setSearch}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        {search.trim().length >= 2 && (
          <View style={styles.searchResults}>
            {filteredFoods.length === 0 ? (
              <Text style={styles.searchEmpty}>
                {t.noResults} "{search}". {t.tryAnother}
              </Text>
            ) : (
              filteredFoods.map(r => (
                <Pressable key={r.id} style={styles.searchResult} onPress={() => handleAddFood(r)}>
                  <View style={styles.searchEmoji}>
                    <Text style={{ fontSize: 22 }}>{r.emoji}</Text>
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <Text style={styles.searchName} numberOfLines={1}>
                      {r.country === 'ar' ? '🇦🇷' : '🇩🇪'} {r.name[lang]}
                    </Text>
                    <Text style={styles.searchMeta}>
                      🔥 {r.kcal} kcal · P {r.p}g · ⏱ {r.time} min
                    </Text>
                  </View>
                  <View style={styles.searchAdd}>
                    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                      <Path d="M12 5v14M5 12h14" />
                    </Svg>
                  </View>
                </Pressable>
              ))
            )}
          </View>
        )}
      </View>

      {/* RECETA DEL DÍA */}
      <View style={styles.section}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>{t.recDay}</Text>
          <Pressable onPress={() => onGoTo('recetario')}>
            <Text style={styles.sectionLink}>{t.seeMore} →</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.recipeHero}
          onPress={() => onOpenRecipe('kartoffelsalat-light')}
        >
          <Image source={MASCOTS.chef} style={styles.chefImg} resizeMode="contain" />
          <View style={{ flex: 1, minWidth: 0 }}>
            <View style={styles.flag}>
              <Text style={styles.flagText}>🇩🇪 {lang === 'es' ? 'Alemana' : 'Deutsch'}</Text>
            </View>
            <Text style={styles.recipeHeroKicker}>{t.forYou}</Text>
            <Text style={styles.recipeHeroTitle}>
              {lang === 'es' ? 'Kartoffelsalat light de Baly' : 'Balys leichter Kartoffelsalat'}
            </Text>
            <Text style={styles.recipeHeroMeta}>⏱ 25 min · 🔥 220 kcal · ⭐ 4.8</Text>
            <View style={styles.cookBtn}>
              <Text style={styles.cookBtnText}>{t.startCooking} →</Text>
            </View>
          </View>
        </Pressable>
      </View>

      {/* AR RECIPES */}
      <RecipeRow
        title={`🇦🇷 ${t.argFlavors}`}
        ids={HOME_AR_IDS}
        lang={lang}
        onOpen={onOpenRecipe}
        onSeeMore={() => onGoTo('recetario')}
        seeMoreText={t.seeMore}
      />

      {/* DE RECIPES */}
      <RecipeRow
        title={`🇩🇪 ${t.gerFlavors}`}
        ids={HOME_DE_IDS}
        lang={lang}
        onOpen={onOpenRecipe}
        onSeeMore={() => onGoTo('recetario')}
        seeMoreText={t.seeMore}
      />

      {/* ACHIEVEMENT */}
      <View style={styles.achievement}>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.achTitle}>{achievement(streak, lang).title}</Text>
          <Text style={styles.achSub}>{achievement(streak, lang).sub}</Text>
        </View>
        <View style={styles.achIcon}>
          <Image source={MASCOTS.heart} style={{ width: 50, height: 50 }} resizeMode="contain" />
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// ====== Sub-components ======

function MacroBar({ label, value, goal, unit, color }) {
  const pct = Math.min(1, value / goal) * 100;
  const displayVal = unit === 'L' ? value.toFixed(1) + ' L' : Math.round(value) + ' g';
  return (
    <View style={styles.macroRow}>
      <Text style={styles.macroLabel}>{label}</Text>
      <View style={styles.macroBarBg}>
        <View style={[styles.macroBarFill, { width: `${pct}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.macroVal}>{displayVal}</Text>
    </View>
  );
}

function RecipeRow({ title, ids, lang, onOpen, onSeeMore, seeMoreText }) {
  const list = ids.map(id => RECIPES.find(r => r.id === id)).filter(Boolean);
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Pressable onPress={onSeeMore}>
          <Text style={styles.sectionLink}>{seeMoreText} →</Text>
        </Pressable>
      </View>
      <View style={styles.recipeGrid}>
        {list.map(r => (
          <Pressable key={r.id} style={styles.recipeCard} onPress={() => onOpen(r.id)}>
            <View style={[styles.recipeImg, bgForRecipe(r)]}>
              <Text style={{ fontSize: 40 }}>{r.emoji}</Text>
              <View style={styles.recipeTag}>
                <Text style={styles.recipeTagText}>{r.kcal} kcal</Text>
              </View>
            </View>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName} numberOfLines={2}>{r.name[lang]}</Text>
              <View style={styles.recipeMeta}>
                <Text style={styles.recipeMetaText}>⏱ {r.time}min</Text>
                <Text style={styles.recipeMetaStrong}>★ {r.rating}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function achievement(streak, lang) {
  if (streak >= 7) {
    return {
      title: lang === 'es' ? '¡Racha de fuego! 🔥' : 'Feuer-Serie! 🔥',
      sub: lang === 'es'
        ? `${streak} días seguidos en tu meta. Baly está orgulloso de vos.`
        : `${streak} Tage in Folge im Ziel. Baly ist stolz auf dich.`,
    };
  }
  if (streak >= 3) {
    return {
      title: lang === 'es' ? '¡Buena racha!' : 'Gute Serie!',
      sub: lang === 'es'
        ? `${streak} días seguidos en tu meta. Seguí así.`
        : `${streak} Tage in Folge im Ziel. Weiter so.`,
    };
  }
  if (streak >= 1) {
    return {
      title: lang === 'es' ? '¡Arrancaste!' : 'Du hast angefangen!',
      sub: lang === 'es'
        ? `${streak} día en meta. Cada día cuenta.`
        : `${streak} Tag im Ziel. Jeder Tag zählt.`,
    };
  }
  return {
    title: lang === 'es' ? 'Empezá tu racha hoy' : 'Starte heute deine Serie',
    sub: lang === 'es'
      ? 'Cumplí tu meta hoy y arrancá una racha con Baly.'
      : 'Erreiche heute dein Ziel und starte eine Serie mit Baly.',
  };
}

function bgForRecipe(r) {
  // Subtle pastel backgrounds for the recipe image area
  const palette = {
    'milanesa-horno':       { backgroundColor: '#FED7AA' },
    'empanada-salteña':     { backgroundColor: '#FEE2E2' },
    'locro-liviano':        { backgroundColor: '#FED7AA' },
    'tarta-acelga':         { backgroundColor: '#FECDD3' },
    'provoleta-asador':     { backgroundColor: '#FEE2E2' },
    'mate-naranja':         { backgroundColor: '#FECDD3' },
    'alfajor-avena':        { backgroundColor: '#FED7AA' },
    'choripan-art':         { backgroundColor: '#FEE2E2' },
    'pizza-espelta':        { backgroundColor: '#FED7AA' },
    'kartoffelsalat-light': { backgroundColor: '#D9F99D' },
    'schnitzel-horno':      { backgroundColor: '#FEF3C7' },
    'bratwurst-pavo':       { backgroundColor: '#FEF3C7' },
    'brezel-integral':      { backgroundColor: '#FEF3C7' },
    'sauerkraut-manzana':   { backgroundColor: '#D9F99D' },
    'apfelstrudel':         { backgroundColor: '#DBEAFE' },
    'spätzle-espinaca':     { backgroundColor: '#D9F99D' },
    'quark-beeren':         { backgroundColor: '#DBEAFE' },
    'rote-grütze':          { backgroundColor: '#DBEAFE' },
    // Home recipes
    'spaghetti-bolognese':     { backgroundColor: '#FECDD3' },
    'carbonara':               { backgroundColor: '#FEF3C7' },
    'milanesa-napolitana':     { backgroundColor: '#FECDD3' },
    'tarta-espinaca-sardinas': { backgroundColor: '#D9F99D' },
    'pollo-papas-crema':       { backgroundColor: '#FED7AA' },
    'salmon-verduras':         { backgroundColor: '#FEE2E2' },
    'flan-casero':             { backgroundColor: '#FEF3C7' },
    'tagliatelle-salmone':     { backgroundColor: '#FECDD3' },
  };
  return palette[r.id] || { backgroundColor: COLORS.green100 };
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  scrollInner: { padding: 20, paddingBottom: 100 },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18,
  },
  kicker: {
    fontSize: 11, fontWeight: '800',
    color: COLORS.ink500,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  greet: {
    fontSize: 22, fontWeight: '700',
    color: COLORS.ink900,
    marginTop: 2,
  },
  langToggle: {
    flexDirection: 'row',
    backgroundColor: COLORS.paper,
    borderRadius: RADIUS.full,
    padding: 4,
    ...SHADOWS.sm,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
  },
  langBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: RADIUS.full,
  },
  langBtnActive: { backgroundColor: COLORS.green600 },
  langBtnText: { fontSize: 12, fontWeight: '700', color: COLORS.ink500 },
  langBtnTextActive: { color: '#FFFFFF' },

  // HERO
  hero: {
    backgroundColor: COLORS.green600,
    borderRadius: 28,
    padding: 22,
    ...SHADOWS.md,
    overflow: 'hidden',
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  heroKicker: {
    fontSize: 10.5, fontWeight: '800',
    color: 'rgba(255,255,255,0.85)',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 17, fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 2,
  },
  streak: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.full,
  },
  streakText: {
    color: '#FFFFFF', fontSize: 12, fontWeight: '800',
  },
  ringRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  macros: { flex: 1, gap: 8 },
  macroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  macroLabel: {
    width: 22, fontSize: 12,
    fontWeight: '800', color: '#FFFFFF',
  },
  macroBarBg: {
    flex: 1, height: 8,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 99,
    overflow: 'hidden',
  },
  macroBarFill: { height: '100%', borderRadius: 99 },
  macroVal: {
    width: 38, textAlign: 'right',
    fontSize: 11, fontWeight: '700',
    color: 'rgba(255,255,255,0.92)',
  },

  undoBar: { alignItems: 'center', marginTop: 6, marginBottom: -8 },
  undoBtn: {
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.10)',
    backgroundColor: 'transparent',
  },
  undoText: { fontSize: 11.5, fontWeight: '700', color: COLORS.ink500 },

  // COACH
  coach: {
    marginTop: 16,
    backgroundColor: '#FFF7E0',
    borderRadius: 24,
    padding: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  balyDoc: { width: 72, height: 84 },
  coachKicker: {
    fontSize: 10.5, fontWeight: '800',
    color: COLORS.sunDark,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  coachMsg: {
    fontSize: 14, lineHeight: 19,
    color: COLORS.ink900,
    fontStyle: 'italic',
    marginTop: 4,
  },

  // SECTIONS
  section: { marginTop: 24 },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17, fontWeight: '700',
    color: COLORS.ink900,
  },
  sectionLink: {
    fontSize: 12, fontWeight: '800',
    color: COLORS.green700,
  },

  // SEARCH
  searchBox: {
    backgroundColor: COLORS.paper,
    borderRadius: 18,
    paddingHorizontal: 14, paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
    ...SHADOWS.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 14, fontWeight: '600',
    color: COLORS.ink900,
    padding: 0,
  },
  searchResults: {
    marginTop: 8,
    backgroundColor: COLORS.paper,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
    ...SHADOWS.sm,
  },
  searchEmpty: {
    padding: 16, textAlign: 'center',
    fontSize: 13, color: COLORS.ink500, fontWeight: '600',
  },
  searchResult: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(20,83,45,0.05)',
  },
  searchEmoji: {
    width: 40, height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.green50,
    alignItems: 'center', justifyContent: 'center',
  },
  searchName: {
    fontSize: 13.5, fontWeight: '700',
    color: COLORS.ink900,
  },
  searchMeta: {
    fontSize: 11.5, fontWeight: '600',
    color: COLORS.ink500,
    marginTop: 2,
  },
  searchAdd: {
    width: 34, height: 34,
    borderRadius: 11,
    backgroundColor: COLORS.green700,
    alignItems: 'center', justifyContent: 'center',
  },

  // RECIPE OF DAY
  recipeHero: {
    backgroundColor: '#FEF3C7',
    borderRadius: 24,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chefImg: { width: 84, height: 96 },
  flag: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: RADIUS.full,
    paddingHorizontal: 9, paddingVertical: 3,
    marginBottom: 4,
    ...SHADOWS.sm,
  },
  flagText: { fontSize: 11, fontWeight: '800', color: COLORS.ink900 },
  recipeHeroKicker: {
    fontSize: 10.5, fontWeight: '800',
    color: COLORS.sunDark,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  recipeHeroTitle: {
    fontSize: 17, fontWeight: '700',
    color: COLORS.ink900,
    marginTop: 2, marginBottom: 4,
    lineHeight: 21,
  },
  recipeHeroMeta: {
    fontSize: 11.5, fontWeight: '700',
    color: COLORS.ink700,
  },
  cookBtn: {
    backgroundColor: COLORS.ink900,
    alignSelf: 'flex-start',
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: RADIUS.full,
    marginTop: 8,
  },
  cookBtnText: { color: '#FFFFFF', fontSize: 12, fontWeight: '800' },

  // RECIPE GRID
  recipeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  recipeCard: {
    width: '47.5%',
    backgroundColor: COLORS.paper,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
    ...SHADOWS.sm,
  },
  recipeImg: {
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeTag: {
    position: 'absolute',
    top: 8, left: 8,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 8, paddingVertical: 2,
    borderRadius: RADIUS.full,
  },
  recipeTagText: {
    fontSize: 10, fontWeight: '800', color: COLORS.ink900,
  },
  recipeInfo: { padding: 12 },
  recipeName: {
    fontSize: 13, fontWeight: '800',
    color: COLORS.ink900,
    marginBottom: 4,
    minHeight: 34,
  },
  recipeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeMetaText: {
    fontSize: 11, fontWeight: '700',
    color: COLORS.ink500,
  },
  recipeMetaStrong: {
    fontSize: 11, fontWeight: '700',
    color: COLORS.green700,
  },

  // ACHIEVEMENT
  achievement: {
    marginTop: 24,
    backgroundColor: '#FCA5A5',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  achTitle: {
    fontSize: 17, fontWeight: '700',
    color: '#7F1D1D',
    marginBottom: 4,
  },
  achSub: {
    fontSize: 12, fontWeight: '600',
    color: '#991B1B',
    lineHeight: 17,
  },
  achIcon: {
    width: 64, height: 64,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', justifyContent: 'center',
    ...SHADOWS.sm,
  },
});
