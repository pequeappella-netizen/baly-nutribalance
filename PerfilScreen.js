// PerfilScreen.js — Editable profile.
// All changes immediately update the global state (which persists via AsyncStorage).

import React, { useState } from 'react';
import {
  View, Text, ScrollView, Pressable, TextInput, Alert, StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';

const ACT_VALS = [1.2, 1.55, 1.9];
const ACT_LABELS = ['low', 'mid', 'high'];
const GOAL_PILLS = [
  { id: 'lose',     labelKey: 'gLose' },
  { id: 'maintain', labelKey: 'gKeep' },
  { id: 'gain',     labelKey: 'gGain' },
];

export default function PerfilScreen({ t, lang, state, actions, onBack, onShowToast }) {
  const p = state.profile;
  const [draft, setDraft] = useState({
    name: p.name,
    weight: String(p.weight),
    height: String(p.height),
    age: String(p.age),
  });

  const commitDraft = (key, raw, parser = parseFloat) => {
    const num = parser(String(raw).replace(',', '.'));
    if (!isNaN(num) && num > 0) {
      actions.updateProfile({ [key]: num });
    }
  };

  const handleSave = () => {
    commitDraft('weight', draft.weight);
    commitDraft('height', draft.height);
    commitDraft('age', draft.age, (v) => parseInt(v, 10));
    if (draft.name.trim()) actions.updateProfile({ name: draft.name.trim() });
    onShowToast(t.saved);
  };

  const handleReset = () => {
    Alert.alert(
      t.resetDay,
      t.confirmReset,
      [
        { text: t.cancel, style: 'cancel' },
        {
          text: t.confirm,
          style: 'destructive',
          onPress: () => {
            actions.resetDay();
            onShowToast(t.dayReset);
          },
        },
      ]
    );
  };

  const avatarLetter = (draft.name.trim()[0] || '?').toUpperCase();
  const actIndex = ACT_VALS.indexOf(p.activity);
  const activeAct = actIndex >= 0 ? actIndex : 1;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.4} strokeLinecap="round">
            <Path d="M15 18l-6-6 6-6" />
          </Svg>
        </Pressable>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.kicker}>{t.profKicker}</Text>
          <Text style={styles.title}>{t.profTitle}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollInner}>
        {/* Identity card */}
        <View style={styles.card}>
          <View style={styles.identityRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{avatarLetter}</Text>
            </View>
            <View style={{ flex: 1, minWidth: 0 }}>
              <TextInput
                style={styles.nameInput}
                value={draft.name}
                onChangeText={(v) => {
                  setDraft({ ...draft, name: v });
                  actions.updateProfile({ name: v.trim() || 'Tú' });
                }}
                placeholder="..."
              />
              <Text style={styles.since}>{t.since}</Text>
            </View>
          </View>

          <View style={styles.statsGrid}>
            <Stat val="47" lab={t.sDays} />
            <Stat val="23" lab={t.sRecipes} />
            <Stat val="-3.2 kg" lab={t.sProg} />
          </View>
        </View>

        {/* Last 7 days history */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {lang === 'es' ? '📊 Últimos 7 días' : '📊 Letzte 7 Tage'}
          </Text>
          {(!state.history || state.history.length === 0) ? (
            <Text style={styles.historyEmpty}>
              {lang === 'es'
                ? 'Tu historial empieza desde mañana. Cada día que uses Baly se va guardando acá.'
                : 'Deine Historie beginnt ab morgen. Jeder Tag mit Baly wird hier gespeichert.'}
            </Text>
          ) : (
            <View style={styles.historyList}>
              {state.history.slice(0, 7).map((d) => {
                const pct = Math.min(100, Math.round((d.consumed.kcal / d.goalKcal) * 100));
                const over = d.consumed.kcal > d.goalKcal;
                const barColor = over ? COLORS.coral : pct >= 75 ? COLORS.green600 : COLORS.sun;
                return (
                  <View key={d.date} style={styles.historyRow}>
                    <Text style={styles.historyDate}>{formatDate(d.date, lang)}</Text>
                    <View style={styles.historyBarWrap}>
                      <View style={[styles.historyBarFill, { width: `${pct}%`, backgroundColor: barColor }]} />
                    </View>
                    <Text style={styles.historyKcal}>{d.consumed.kcal}<Text style={styles.historyGoal}>/{d.goalKcal}</Text></Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        {/* Physical data */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.pData}</Text>

          <Row icon="⚖️" label={t.lWeight}>
            <TextInput
              style={styles.input}
              value={draft.weight}
              onChangeText={(v) => setDraft({ ...draft, weight: v })}
              onBlur={() => commitDraft('weight', draft.weight)}
              keyboardType="decimal-pad"
              placeholder="kg"
            />
          </Row>
          <Row icon="📏" label={t.lHeight}>
            <TextInput
              style={styles.input}
              value={draft.height}
              onChangeText={(v) => setDraft({ ...draft, height: v })}
              onBlur={() => commitDraft('height', draft.height)}
              keyboardType="number-pad"
              placeholder="cm"
            />
          </Row>
          <Row icon="🎂" label={t.lAge}>
            <TextInput
              style={styles.input}
              value={draft.age}
              onChangeText={(v) => setDraft({ ...draft, age: v })}
              onBlur={() => commitDraft('age', draft.age, (v) => parseInt(v, 10))}
              keyboardType="number-pad"
            />
          </Row>
          <Row icon="⚡" label={t.lActiv} last>
            <View style={styles.activityRow}>
              {[t.actLow, t.actMid, t.actHigh].map((label, i) => (
                <Pressable
                  key={label}
                  style={[styles.actPill, activeAct === i && styles.actPillActive]}
                  onPress={() => actions.updateProfile({ activity: ACT_VALS[i] })}
                >
                  <Text style={[
                    styles.actPillText,
                    activeAct === i && styles.actPillTextActive,
                  ]}>{label}</Text>
                </Pressable>
              ))}
            </View>
          </Row>
        </View>

        {/* Goal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.pGoal}</Text>
          <Text style={styles.cardSub}>{t.pGoalSub}</Text>
          <View style={styles.goalRow}>
            {GOAL_PILLS.map(g => (
              <Pressable
                key={g.id}
                style={[styles.goalPill, p.goal === g.id && styles.goalPillActive]}
                onPress={() => actions.updateProfile({ goal: g.id })}
              >
                <Text style={[
                  styles.goalPillText,
                  p.goal === g.id && styles.goalPillTextActive,
                ]}>{t[g.labelKey]}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.pPref}</Text>
          <Row icon="🌐" label={t.lLang}>
            <View style={styles.langRow}>
              {['es', 'de'].map(L => (
                <Pressable
                  key={L}
                  style={[styles.langPill, lang === L && styles.langPillActive]}
                  onPress={() => actions.setLang(L)}
                >
                  <Text style={[
                    styles.langPillText,
                    lang === L && styles.langPillTextActive,
                  ]}>{L.toUpperCase()}</Text>
                </Pressable>
              ))}
            </View>
          </Row>
          <Row icon="🔔" label={t.lNotif}>
            <Text style={styles.readonly}>{t.notifOn}</Text>
          </Row>
          <Row icon="🥗" label={t.lDiet} last>
            <View style={styles.dietRow}>
              {[
                { id: 'omni',  label: t.dOmni },
                { id: 'veg',   label: t.dVeg },
                { id: 'vegan', label: t.dVegan },
              ].map(d => (
                <Pressable
                  key={d.id}
                  style={[styles.dietPill, p.diet === d.id && styles.dietPillActive]}
                  onPress={() => actions.updateProfile({ diet: d.id })}
                >
                  <Text style={[
                    styles.dietPillText,
                    p.diet === d.id && styles.dietPillTextActive,
                  ]}>{d.label}</Text>
                </Pressable>
              ))}
            </View>
          </Row>
        </View>

        <Pressable style={styles.save} onPress={handleSave}>
          <Text style={styles.saveText}>{t.save}</Text>
        </Pressable>

        <Pressable style={styles.reset} onPress={handleReset}>
          <Text style={styles.resetText}>{t.resetDay}</Text>
        </Pressable>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

function Row({ icon, label, children, last }) {
  return (
    <View style={[styles.row, last && { borderBottomWidth: 0 }]}>
      <View style={styles.rowLabel}>
        <View style={styles.iconBox}>
          <Text style={{ fontSize: 14 }}>{icon}</Text>
        </View>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.rowValue}>{children}</View>
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

// Format YYYY-MM-DD as a friendly short date in user's language
function formatDate(isoStr, lang) {
  const [yyyy, mm, dd] = isoStr.split('-');
  const day = parseInt(dd, 10);
  const monthIdx = parseInt(mm, 10) - 1;
  const monthsEs = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const monthsDe = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const months = lang === 'de' ? monthsDe : monthsEs;
  return `${day} ${months[monthIdx]}`;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    padding: 20, paddingBottom: 12,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 12,
    backgroundColor: COLORS.paper,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: 'rgba(20,83,45,0.08)',
  },
  kicker: {
    fontSize: 11, fontWeight: '800', color: COLORS.ink500,
    textTransform: 'uppercase', letterSpacing: 0.8,
  },
  title: {
    fontSize: 22, fontWeight: '700', color: COLORS.ink900, marginTop: 2,
  },
  scrollInner: { paddingHorizontal: 20 },

  card: {
    backgroundColor: COLORS.paper,
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    ...SHADOWS.sm,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.04)',
  },
  cardTitle: {
    fontSize: 16, fontWeight: '700',
    color: COLORS.ink900,
    marginBottom: 8,
  },
  cardSub: {
    fontSize: 13, color: COLORS.ink500,
    lineHeight: 18, marginBottom: 10,
  },

  identityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 16,
  },
  avatar: {
    width: 72, height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.green600,
    alignItems: 'center', justifyContent: 'center',
    ...SHADOWS.sm,
  },
  avatarText: {
    fontSize: 28, fontWeight: '700',
    color: '#FFFFFF',
  },
  nameInput: {
    fontSize: 20, fontWeight: '700',
    color: COLORS.ink900,
    paddingVertical: 4, paddingHorizontal: 8,
    marginHorizontal: -8, marginTop: -4,
    borderRadius: 10,
    backgroundColor: 'rgba(20,83,45,0.03)',
  },
  since: {
    fontSize: 13, color: COLORS.ink500,
    fontWeight: '600', marginTop: 2,
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
    fontSize: 18, fontWeight: '700',
    color: COLORS.green700,
    lineHeight: 22,
  },
  statLab: {
    fontSize: 10, fontWeight: '800',
    color: COLORS.ink500,
    marginTop: 4,
    textTransform: 'uppercase',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(20,83,45,0.06)',
  },
  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 0,
  },
  iconBox: {
    width: 32, height: 32,
    borderRadius: 10,
    backgroundColor: COLORS.green50,
    alignItems: 'center', justifyContent: 'center',
  },
  labelText: {
    fontSize: 13.5, fontWeight: '600',
    color: COLORS.ink500,
  },
  rowValue: {
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  input: {
    minWidth: 100,
    maxWidth: 160,
    paddingHorizontal: 12, paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: 'rgba(20,83,45,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.10)',
    fontSize: 14, fontWeight: '700',
    color: COLORS.ink900,
    textAlign: 'right',
  },
  readonly: {
    fontSize: 14, fontWeight: '600',
    color: COLORS.ink500,
    paddingHorizontal: 12, paddingVertical: 9,
  },

  activityRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' },
  actPill: {
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: COLORS.green50,
  },
  actPillActive: { backgroundColor: COLORS.green700 },
  actPillText: { fontSize: 12, fontWeight: '700', color: COLORS.green800 },
  actPillTextActive: { color: '#FFFFFF' },

  goalRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginTop: 4 },
  goalPill: {
    flex: 1,
    paddingHorizontal: 12, paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: COLORS.green50,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  goalPillActive: {
    backgroundColor: COLORS.green700,
    borderColor: COLORS.green700,
  },
  goalPillText: {
    fontSize: 12, fontWeight: '700',
    color: COLORS.green800,
    textAlign: 'center',
  },
  goalPillTextActive: { color: '#FFFFFF' },

  langRow: { flexDirection: 'row', gap: 6 },
  langPill: {
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: COLORS.green50,
  },
  langPillActive: { backgroundColor: COLORS.green700 },
  langPillText: { fontSize: 12, fontWeight: '800', color: COLORS.green800 },
  langPillTextActive: { color: '#FFFFFF' },

  dietRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' },
  dietPill: {
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: COLORS.green50,
  },
  dietPillActive: { backgroundColor: COLORS.green700 },
  dietPillText: { fontSize: 12, fontWeight: '700', color: COLORS.green800 },
  dietPillTextActive: { color: '#FFFFFF' },

  save: {
    backgroundColor: COLORS.green700,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  saveText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },

  reset: {
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  resetText: { color: COLORS.coralDark, fontSize: 13, fontWeight: '700' },

  // History list
  historyEmpty: {
    fontSize: 13,
    color: COLORS.ink500,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  historyList: { gap: 10 },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  historyDate: {
    width: 60,
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.ink700,
  },
  historyBarWrap: {
    flex: 1,
    height: 8,
    borderRadius: 99,
    backgroundColor: COLORS.green50,
    overflow: 'hidden',
  },
  historyBarFill: {
    height: '100%',
    borderRadius: 99,
  },
  historyKcal: {
    width: 80,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.ink900,
  },
  historyGoal: {
    fontWeight: '600',
    color: COLORS.ink500,
  },
});
