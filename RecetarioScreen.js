// RecetarioScreen.js — All 18 recipes with filter chips.

import React, { useState } from 'react';
import {
  View, Text, ScrollView, Pressable, StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { RECIPES, recipeMatchesFilter } from './recipes';

const FILTERS = [
  { id: 'all',   labelKey: 'fAll' },
  { id: 'ar',    labelKey: 'fAr' },
  { id: 'de',    labelKey: 'fDe' },
  { id: 'casa',  labelKey: 'fCasa' },
  { id: 'quick', labelKey: 'fQuick' },
  { id: 'veg',   labelKey: 'fVeg' },
  { id: 'low',   labelKey: 'fLow' },
];

export default function RecetarioScreen({ t, lang, onOpenRecipe, onBack }) {
  const [filter, setFilter] = useState('all');
  const list = RECIPES.filter(r => recipeMatchesFilter(r, filter));

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.4} strokeLinecap="round">
            <Path d="M15 18l-6-6 6-6" />
          </Svg>
        </Pressable>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.kicker}>{t.recKicker}</Text>
          <Text style={styles.title}>{t.recTitle}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map(f => (
          <Pressable
            key={f.id}
            style={[styles.filterPill, filter === f.id && styles.filterPillActive]}
            onPress={() => setFilter(f.id)}
          >
            <Text style={[styles.filterText, filter === f.id && styles.filterTextActive]}>
              {f.id === 'ar' && '🇦🇷 '}{f.id === 'de' && '🇩🇪 '}{t[f.labelKey]}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.gridWrap}>
        <View style={styles.grid}>
          {list.length === 0 ? (
            <Text style={styles.empty}>{t.noRecipes}</Text>
          ) : (
            list.map(r => (
              <Pressable
                key={r.id}
                style={styles.card}
                onPress={() => onOpenRecipe(r.id)}
              >
                <View style={[styles.cardImg, bgForRecipe(r)]}>
                  <Text style={{ fontSize: 42 }}>{r.emoji}</Text>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{r.kcal} kcal</Text>
                  </View>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardName} numberOfLines={2}>
                    {r.country === 'ar' ? '🇦🇷' : '🇩🇪'} {r.name[lang]}
                  </Text>
                  <View style={styles.cardMeta}>
                    <Text style={styles.cardMetaText}>⏱ {r.time}min</Text>
                    <Text style={styles.cardMetaStrong}>★ {r.rating}</Text>
                  </View>
                </View>
              </Pressable>
            ))
          )}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

function bgForRecipe(r) {
  // Same palette as Home for visual consistency
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
  kicker: {
    fontSize: 11, fontWeight: '800',
    color: COLORS.ink500,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 22, fontWeight: '700',
    color: COLORS.ink900,
    marginTop: 2,
  },
  filterRow: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 8,
  },
  filterPill: {
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.08)',
    borderRadius: RADIUS.full,
    paddingHorizontal: 16, paddingVertical: 9,
  },
  filterPillActive: {
    backgroundColor: COLORS.green700,
    borderColor: COLORS.green700,
  },
  filterText: {
    fontSize: 12.5, fontWeight: '700',
    color: COLORS.ink700,
  },
  filterTextActive: { color: '#FFFFFF' },

  scroll: { flex: 1 },
  gridWrap: { paddingHorizontal: 20 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  empty: {
    width: '100%',
    textAlign: 'center',
    padding: 30,
    fontSize: 13,
    color: COLORS.ink500,
    fontWeight: '600',
  },

  card: {
    width: '47.5%',
    backgroundColor: COLORS.paper,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
    ...SHADOWS.sm,
  },
  cardImg: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    position: 'absolute',
    top: 8, left: 8,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 8, paddingVertical: 2,
    borderRadius: RADIUS.full,
  },
  tagText: { fontSize: 10, fontWeight: '800', color: COLORS.ink900 },
  cardInfo: { padding: 12 },
  cardName: {
    fontSize: 13, fontWeight: '800',
    color: COLORS.ink900,
    marginBottom: 4,
    minHeight: 34,
  },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardMetaText: { fontSize: 11, fontWeight: '700', color: COLORS.ink500 },
  cardMetaStrong: { fontSize: 11, fontWeight: '700', color: COLORS.green700 },
});
