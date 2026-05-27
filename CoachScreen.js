// CoachScreen.js — Baly coach with weekly challenges and chat interface.

import React, { useState, useRef } from 'react';
import {
  View, Text, ScrollView, TextInput, Pressable, Image, StyleSheet,
} from 'react-native';
import Svg, { Path, Polygon, Line } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';
import { askBaly } from './balyAI';

const MASCOTS = { phone: require('./assets/baly-phone.png') };

export default function CoachScreen({ t, lang, state, actions, onBack }) {
  const [bubbles, setBubbles] = useState([
    { from: 'baly', text: t.b1 },
    { from: 'user', text: t.b2 },
    { from: 'baly', text: t.b3 },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef(null);

  // Reset bubbles whenever lang changes
  React.useEffect(() => {
    setBubbles([
      { from: 'baly', text: t.b1 },
      { from: 'user', text: t.b2 },
      { from: 'baly', text: t.b3 },
    ]);
  }, [lang]);

  const send = async () => {
    const text = input.trim();
    if (!text || isThinking) return;

    // Add user bubble immediately
    const currentBubbles = bubbles;
    setBubbles(prev => [...prev, { from: 'user', text }]);
    setInput('');
    setIsThinking(true);
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 50);

    try {
      const result = await askBaly(text, currentBubbles, state, lang);
      setBubbles(prev => [...prev, { from: 'baly', text: result.text }]);

      // Si Baly llamó a log_food, registramos cada comida en el contador
      if (result.foodsLogged && result.foodsLogged.length > 0 && actions?.logFood) {
        for (const food of result.foodsLogged) {
          actions.logFood({
            id: `baly-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            name: food.name,
            kcal: food.kcal || 0,
            p: food.p || 0,
            c: food.c || 0,
            f: food.f || 0,
          });
        }
      }
    } catch (err) {
      const errMsg = `⚠️ ${err.message}`;
      setBubbles(prev => [...prev, { from: 'baly', text: errMsg, isError: true }]);
    } finally {
      setIsThinking(false);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={COLORS.ink700} strokeWidth={2.4} strokeLinecap="round">
            <Path d="M15 18l-6-6 6-6" />
          </Svg>
        </Pressable>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text style={styles.kicker}>{t.coachKicker}</Text>
          <Text style={styles.title}>{t.coachTitle}</Text>
        </View>
      </View>

      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollInner}>
        {/* Greeting */}
        <View style={styles.greeting}>
          <Image source={MASCOTS.phone} style={styles.balyImg} resizeMode="contain" />
          <Text style={styles.greetingTitle}>{t.coachH}</Text>
          <Text style={styles.greetingSub}>{t.coachSub}</Text>
        </View>

        {/* Challenges */}
        <Text style={styles.sectionTitle}>{t.challenges}</Text>

        <Challenge
          bg="#DCFCE7"
          progressBg="rgba(255,255,255,0.6)"
          icon="💧"
          tag={t.ch1Tag}
          tagColor={COLORS.green800}
          title={t.ch1}
          titleColor={COLORS.green900}
          progressColor={COLORS.green700}
          progressPct={72}
          counter="5/7"
          counterColor={COLORS.green800}
        />
        <Challenge
          bg="#FEF3C7"
          progressBg="rgba(255,255,255,0.8)"
          icon="🥬"
          tag={t.ch2Tag}
          tagColor={COLORS.sunDark}
          title={t.ch2}
          titleColor="#78350F"
          progressColor={COLORS.sunDark}
          progressPct={48}
          counter="3/7"
          counterColor="#78350F"
        />
        <Challenge
          bg="#FEE2E2"
          progressBg="rgba(255,255,255,0.8)"
          icon="🏃"
          tag={t.ch3Tag}
          tagColor={COLORS.coralDark}
          title={t.ch3}
          titleColor="#7F1D1D"
          progressColor={COLORS.coralDark}
          progressPct={86}
          counter="6/7"
          counterColor="#7F1D1D"
        />

        {/* Conversation */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>{t.conv}</Text>
        <View style={styles.conv}>
          {bubbles.map((b, i) => (
            <View
              key={i}
              style={[
                styles.bubble,
                b.from === 'user' ? styles.bubbleUser : styles.bubbleBaly,
              ]}
            >
              <Text
                style={[
                  styles.bubbleText,
                  b.from === 'user' && { color: '#FFFFFF', fontWeight: '600' },
                ]}
              >
                {b.text}
              </Text>
            </View>
          ))}
          {isThinking && (
            <View style={[styles.bubble, styles.bubbleBaly, styles.bubbleThinking]}>
              <Text style={styles.thinkingText}>
                {lang === 'es' ? 'Baly está escribiendo' : 'Baly schreibt'}
                <Text style={styles.thinkingDots}> · · ·</Text>
              </Text>
            </View>
          )}
        </View>

        <View style={styles.askRow}>
          <TextInput
            style={styles.askInput}
            placeholder={t.askPh}
            placeholderTextColor={COLORS.ink300}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={send}
            returnKeyType="send"
            editable={!isThinking}
          />
          <Pressable
            style={[styles.sendBtn, isThinking && { opacity: 0.5 }]}
            onPress={send}
            disabled={isThinking}
          >
            <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <Line x1={22} y1={2} x2={11} y2={13} />
              <Polygon points="22 2 15 22 11 13 2 9 22 2" />
            </Svg>
          </Pressable>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

function Challenge({ bg, progressBg, icon, tag, tagColor, title, titleColor, progressColor, progressPct, counter, counterColor }) {
  return (
    <View style={[styles.challenge, { backgroundColor: bg }]}>
      <View style={styles.chIcon}>
        <Text style={{ fontSize: 22 }}>{icon}</Text>
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text style={[styles.chTag, { color: tagColor }]}>{tag}</Text>
        <Text style={[styles.chTitle, { color: titleColor }]}>{title}</Text>
        <View style={[styles.chProgressBg, { backgroundColor: progressBg }]}>
          <View
            style={[
              styles.chProgressFill,
              { width: `${progressPct}%`, backgroundColor: progressColor },
            ]}
          />
        </View>
      </View>
      <Text style={[styles.chCounter, { color: counterColor }]}>{counter}</Text>
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

  scrollInner: { paddingHorizontal: 20 },

  greeting: { alignItems: 'center', paddingVertical: 10, marginBottom: 8 },
  balyImg: { width: 150, height: 170 },
  greetingTitle: {
    fontSize: 20, fontWeight: '700',
    color: COLORS.ink900,
    marginTop: 6,
    textAlign: 'center',
  },
  greetingSub: {
    fontSize: 13, fontWeight: '600',
    color: COLORS.ink500,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 16, fontWeight: '700',
    color: COLORS.ink900,
    marginBottom: 12,
  },

  challenge: {
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chIcon: {
    width: 46, height: 46,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center', justifyContent: 'center',
  },
  chTag: {
    fontSize: 10.5, fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  chTitle: {
    fontSize: 14, fontWeight: '700',
    marginTop: 2,
  },
  chProgressBg: {
    height: 6, borderRadius: 99,
    marginTop: 6, overflow: 'hidden',
  },
  chProgressFill: {
    height: '100%', borderRadius: 99,
  },
  chCounter: {
    fontSize: 13, fontWeight: '800',
  },

  conv: { gap: 10 },
  bubble: {
    maxWidth: '78%',
    paddingHorizontal: 14, paddingVertical: 12,
    borderRadius: 18,
  },
  bubbleBaly: {
    backgroundColor: COLORS.paper,
    borderBottomLeftRadius: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.06)',
  },
  bubbleUser: {
    backgroundColor: COLORS.green700,
    borderBottomRightRadius: 4,
    alignSelf: 'flex-end',
  },
  bubbleText: {
    fontSize: 13.5, lineHeight: 19,
    color: COLORS.ink900,
  },
  bubbleThinking: {
    paddingVertical: 10,
  },
  thinkingText: {
    fontSize: 12.5,
    fontStyle: 'italic',
    color: COLORS.ink500,
    fontWeight: '600',
  },
  thinkingDots: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.green600,
  },

  askRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.paper,
    borderRadius: 18,
    paddingLeft: 16, paddingRight: 6, paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.08)',
    ...SHADOWS.sm,
  },
  askInput: {
    flex: 1,
    fontSize: 14, fontWeight: '600',
    color: COLORS.ink900,
    paddingVertical: 8,
  },
  sendBtn: {
    width: 40, height: 40,
    borderRadius: 14,
    backgroundColor: COLORS.green700,
    alignItems: 'center', justifyContent: 'center',
  },
});
