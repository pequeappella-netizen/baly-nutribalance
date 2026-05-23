// CalorieRing.js — Circular progress ring rendered with react-native-svg.
// Animates the dashoffset when `consumed` changes.

import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SIZE = 130;
const STROKE = 12;
const R = (SIZE - STROKE) / 2;
const C = 2 * Math.PI * R;

export default function CalorieRing({ consumed, goal, remainingLabel }) {
  const remaining = Math.max(0, Math.round(goal - consumed));
  const pct = Math.min(1, consumed / goal);
  const targetOffset = C * (1 - pct);

  const offsetAnim = useRef(new Animated.Value(C)).current; // start empty

  useEffect(() => {
    Animated.timing(offsetAnim, {
      toValue: targetOffset,
      duration: 1100,
      easing: Easing.bezier(0.6, 0.2, 0.2, 1),
      useNativeDriver: false, // strokeDashoffset can't use native driver
    }).start();
  }, [targetOffset, offsetAnim]);

  // Color shifts: under 85% green, 85-100% amber, over 100% coral
  let strokeColor = '#86EFAC';
  if (consumed > goal) strokeColor = '#F87171';
  else if (consumed / goal > 0.85) strokeColor = '#FCD34D';

  return (
    <View style={styles.wrap}>
      <Svg width={SIZE} height={SIZE}>
        {/* Rotate -90° so the ring starts from the top */}
        <G rotation={-90} origin={`${SIZE / 2}, ${SIZE / 2}`}>
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={STROKE}
            fill="none"
          />
          <AnimatedCircle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            stroke={strokeColor}
            strokeWidth={STROKE}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${C}, ${C}`}
            strokeDashoffset={offsetAnim}
          />
        </G>
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text style={styles.big}>{remaining}</Text>
        <Text style={styles.lab}>{remainingLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: SIZE,
    height: SIZE,
    position: 'relative',
  },
  center: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 34,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 36,
  },
  lab: {
    fontSize: 10,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.85)',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 2,
  },
});
