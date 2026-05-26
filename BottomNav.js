// BottomNav.js — Fixed bottom navigation bar (5 buttons, center is +).

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line, Polyline } from 'react-native-svg';
import { COLORS, FONTS, SHADOWS, RADIUS } from './theme';

function Icon({ name, color, size = 22, strokeWidth = 2.2 }) {
  const common = {
    width: size, height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home':
      return (
        <Svg {...common}>
          <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </Svg>
      );
    case 'book':
      return (
        <Svg {...common}>
          <Path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <Line x1={6} y1={17} x2={18} y2={17} />
        </Svg>
      );
    case 'plus':
      return (
        <Svg {...common} strokeWidth={2.6}>
          <Path d="M12 5v14M5 12h14" />
        </Svg>
      );
    case 'heart':
      return (
        <Svg {...common}>
          <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </Svg>
      );
    case 'user':
      return (
        <Svg {...common}>
          <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <Circle cx={12} cy={7} r={4} />
        </Svg>
      );
    default:
      return null;
  }
}

const TABS = [
  { id: 'home',      icon: 'home', labelKey: 'navHome' },
  { id: 'recetario', icon: 'book', labelKey: 'navRec' },
  { id: 'add',       icon: 'plus', labelKey: '', center: true },
  { id: 'coach',     icon: 'heart', labelKey: 'navCoach' },
  { id: 'perfil',    icon: 'user', labelKey: 'navProfile' },
];

export default function BottomNav({ current, onChange, onAddPress, t }) {
  return (
    <View style={styles.bar} pointerEvents="box-none">
      {TABS.map((tab) => {
        const isCenter = !!tab.center;
        const isActive = current === tab.id;

        if (isCenter) {
          return (
            <Pressable
              key={tab.id}
              style={styles.centerBtn}
              onPress={() => onAddPress && onAddPress()}
              android_ripple={{ color: 'rgba(255,255,255,0.2)', borderless: false }}
            >
              <Icon name="plus" color="#FFFFFF" size={24} strokeWidth={2.8} />
            </Pressable>
          );
        }

        return (
          <Pressable
            key={tab.id}
            style={styles.btn}
            onPress={() => onChange(tab.id)}
            android_ripple={{ color: 'rgba(20,83,45,0.08)', borderless: true }}
          >
            <Icon
              name={tab.icon}
              color={isActive ? COLORS.green700 : COLORS.ink500}
              strokeWidth={isActive ? 2.4 : 2.2}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {t[tab.labelKey]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: RADIUS.xxl,
    paddingVertical: 10,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(20,83,45,0.08)',
    ...SHADOWS.md,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    gap: 2,
  },
  label: {
    fontFamily: FONTS.body,
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.ink500,
    marginTop: 2,
  },
  labelActive: {
    color: COLORS.green700,
  },
  centerBtn: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: COLORS.green600,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -22,
    marginHorizontal: 4,
    ...SHADOWS.md,
    shadowColor: COLORS.green700,
  },
});
