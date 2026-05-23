// DetailScreen.js — Full recipe view with portions toggle, ingredients (checkable),
// numbered steps and inline Baly tips.

import React, { useState } from 'react';
import {
  View, Text, ScrollView, Pressable, Image, StyleSheet,
} from 'react-native';
import Svg, { Path, Polyline } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { RECIPES, scaleQty } from './recipes';

const MASCOTS = {
  chef:  require('./assets/baly-chef.png'),
  heart: require('./assets/baly-heart.png'),
};

export default function DetailScreen({ recipeId, t, lang, actions, onBack, onShowToast }) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  const [servings, setServings] = useState(recipe?.servings || 2);
  const [checked, setChecked] = useState(new Set());

  if (!recipe) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.4} strokeLinecap="round">
            <Path d="M15 18l-6-6 6-6" />
          </Svg>
        </Pressable>
        <Text style={{ marginTop: 30, fontSize: 16, color: COLORS.ink500 }}>
          Recipe not found.
        </Text>
      </View>
    );
  }

  const ratio = servings / (recipe.servings || 2);
  const flag = recipe.country === 'ar' ? '🇦🇷' : '🇩🇪';

  const toggleIng = (idx) => {
    const next = new Set(checked);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setChecked(next);
  };

  const handleAddToDay = () => {
    const scaled = {
      id: recipe.id,
      kcal: Math.round(recipe.kcal * ratio),
      p: recipe.p * ratio,
      c: recipe.c * ratio,
      f: recipe.f * ratio,
    };
    actions.logFood(scaled);
    onShowToast(`+${scaled.kcal} kcal · ${recipe.name[lang]}`);
    setTimeout(onBack, 400);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.4} strokeLinecap="round">
            <Path d="M15 18l-6-6 6-6" />
          </Svg>
        </Pressable>
        <Text style={styles.title}>{t.detailTitle}</Text>
        <View style={styles.backBtn}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </Svg>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollInner}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image source={MASCOTS.chef} style={styles.chef} resizeMode="contain" />
          <View style={{ flex: 1, minWidth: 0 }}>
            <View style={styles.flag}>
              <Text style={styles.flagText}>{flag}</Text>
            </View>
            <Text style={styles.heroTitle}>{recipe.name[lang]}</Text>
            <View style={styles.heroMeta}>
              <Text style={styles.heroMetaText}>⏱ {recipe.time} min</Text>
              <Text style={styles.heroMetaText}>🔥 {recipe.kcal} kcal</Text>
              <Text style={styles.heroMetaText}>⭐ {recipe.rating}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.desc}>"{recipe.desc[lang]}"</Text>

        {/* Macros */}
        <View style={styles.macroSection}>
          <Text style={styles.sectionTitle}>{t.sectMacros}</Text>
          <View style={styles.statsGrid}>
            <Stat val={`${Math.round(recipe.p * ratio)}g`} lab={t.protein} />
            <Stat val={`${Math.round(recipe.c * ratio)}g`} lab={t.carbs} />
            <Stat val={`${Math.round(recipe.f * ratio)}g`} lab={t.fat} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>
              {t.sectIng}
              <Text style={styles.count}>  {recipe.ingredients.length}</Text>
            </Text>
          </View>
          <View style={styles.servingsToggle}>
            <Pressable
              style={styles.servBtn}
              onPress={() => setServings(Math.max(1, servings - 1))}
            >
              <Text style={styles.servBtnText}>−</Text>
            </Pressable>
            <Text style={styles.servLabel}>{t.portions}</Text>
            <Text style={styles.servVal}>{servings}</Text>
            <Pressable
              style={styles.servBtn}
              onPress={() => setServings(Math.min(12, servings + 1))}
            >
              <Text style={styles.servBtnText}>+</Text>
            </Pressable>
          </View>
          {recipe.ingredients.map((ing, i) => {
            const isChecked = checked.has(i);
            return (
              <Pressable key={i} style={styles.ingRow} onPress={() => toggleIng(i)}>
                <View style={[styles.ingCheck, isChecked && styles.ingCheckOn]}>
                  {isChecked && (
                    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <Polyline points="20 6 9 17 4 12" />
                    </Svg>
                  )}
                </View>
                <Text style={styles.ingQty}>{scaleQty(ing.qty, ratio)}</Text>
                <Text style={[styles.ingName, isChecked && styles.ingNameChecked]}>
                  {ing[lang]}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Steps */}
        <View style={styles.section}>
          <View style={styles.sectionHead}>
            <Text style={styles.sectionTitle}>
              {t.sectSteps}
              <Text style={styles.count}>  {recipe.steps.length}</Text>
            </Text>
          </View>
          {recipe.steps.map((step, i) => (
            <View key={i} style={styles.step}>
              <View style={styles.stepNum}>
                <Text style={styles.stepNumText}>{i + 1}</Text>
              </View>
              <View style={{ flex: 1, minWidth: 0 }}>
                <Text style={styles.stepText}>{step[lang]}</Text>
                {step.tip && (
                  <View style={styles.tip}>
                    <View style={styles.tipAvatar}>
                      <Image source={MASCOTS.heart} style={{ width: 30, height: 30 }} resizeMode="contain" />
                    </View>
                    <Text style={styles.tipText}>
                      <Text style={styles.tipStrong}>{t.balyTip} </Text>
                      {step.tip[lang]}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <Pressable style={styles.cta} onPress={handleAddToDay}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round">
            <Path d="M12 5v14M5 12h14" />
          </Svg>
          <Text style={styles.ctaText}>
            {t.addToDay} (+{Math.round(recipe.kcal * ratio)} kcal)
          </Text>
        </Pressable>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

function Stat({ val, lab }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statVal}>{val}</Text>
      <Text style={styles.statLab}>{lab}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    paddingBottom: 12,
  },
  backBtn: {
    width: 38, height: 38,
    borderRadius: 12,
    backgroundColor: COLORS.paper,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.08)',
  },
  title: {
    flex: 1,
    fontSize: 20, fontWeight: '700',
    color: COLORS.ink900,
  },
  scrollInner: { paddingHorizontal: 20 },

  hero: {
    backgroundColor: '#FCD34D',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 16,
  },
  chef: { width: 96, height: 110 },
  flag: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: RADIUS.full,
    paddingHorizontal: 9, paddingVertical: 3,
    marginBottom: 6,
    ...SHADOWS.sm,
  },
  flagText: { fontSize: 11, fontWeight: '800' },
  heroTitle: {
    fontSize: 18, fontWeight: '700',
    color: COLORS.ink900,
    lineHeight: 22,
  },
  heroMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  heroMetaText: { fontSize: 11.5, fontWeight: '700', color: COLORS.ink700 },

  desc: {
    fontSize: 14, lineHeight: 21,
    color: COLORS.ink500,
    fontStyle: 'italic',
    paddingHorizontal: 4,
    marginBottom: 20,
  },

  macroSection: { marginBottom: 24 },
  section: { marginBottom: 24 },
  sectionHead: { marginBottom: 12 },
  sectionTitle: {
    fontSize: 16, fontWeight: '700',
    color: COLORS.ink900,
  },
  count: {
    fontSize: 11, fontWeight: '800',
    color: COLORS.green800,
  },

  statsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    flex: 1,
    backgroundColor: COLORS.green50,
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  statVal: {
    fontSize: 20, fontWeight: '700',
    color: COLORS.green700,
    lineHeight: 22,
  },
  statLab: {
    fontSize: 10, fontWeight: '800',
    color: COLORS.ink500,
    marginTop: 4,
    textTransform: 'uppercase',
  },

  servingsToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.paper,
    borderRadius: 14,
    paddingHorizontal: 8, paddingVertical: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
  },
  servBtn: {
    width: 28, height: 28,
    borderRadius: 8,
    backgroundColor: COLORS.green100,
    alignItems: 'center', justifyContent: 'center',
  },
  servBtnText: {
    fontSize: 16, fontWeight: '800',
    color: COLORS.green800,
  },
  servLabel: { fontSize: 12, fontWeight: '700', color: COLORS.ink500 },
  servVal: { fontSize: 14, fontWeight: '800', color: COLORS.ink900, minWidth: 18, textAlign: 'center' },

  ingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(20,83,45,0.06)',
  },
  ingCheck: {
    width: 22, height: 22,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: COLORS.green300,
    alignItems: 'center', justifyContent: 'center',
  },
  ingCheckOn: {
    backgroundColor: COLORS.green600,
    borderColor: COLORS.green600,
  },
  ingQty: {
    fontWeight: '800', fontSize: 13,
    color: COLORS.green700,
    minWidth: 64,
  },
  ingName: {
    flex: 1,
    fontSize: 14, fontWeight: '500',
    color: COLORS.ink900,
  },
  ingNameChecked: {
    textDecorationLine: 'line-through',
    color: COLORS.ink300,
  },

  step: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 20,
  },
  stepNum: {
    width: 34, height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.green600,
    alignItems: 'center', justifyContent: 'center',
  },
  stepNumText: {
    color: '#FFFFFF',
    fontSize: 15, fontWeight: '700',
  },
  stepText: {
    fontSize: 14, lineHeight: 21,
    color: COLORS.ink700,
    paddingTop: 4,
  },
  tip: {
    backgroundColor: '#FFF7E0',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  tipAvatar: {
    width: 38, height: 38,
    borderRadius: 19,
    backgroundColor: '#FEF3C7',
    alignItems: 'center', justifyContent: 'center',
  },
  tipText: {
    flex: 1,
    fontSize: 12.5, lineHeight: 17,
    color: COLORS.sunDark,
    fontWeight: '600',
  },
  tipStrong: {
    fontWeight: '800',
    color: '#92400E',
  },

  cta: {
    backgroundColor: COLORS.green700,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', gap: 8,
    marginBottom: 16,
  },
  ctaText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
});
