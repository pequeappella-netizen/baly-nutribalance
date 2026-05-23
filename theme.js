// theme.js — Design tokens for Baly NutriBalance
// Single source of truth for colors, typography, and shadows.

export const COLORS = {
  // Greens — the mascot palette
  green50:  '#F0FDF4',
  green100: '#DCFCE7',
  green200: '#BBF7D0',
  green300: '#86EFAC',
  green400: '#4ADE80',
  green500: '#22C55E',
  green600: '#16A34A',
  green700: '#15803D',
  green800: '#166534',
  green900: '#14532D',

  // Accents
  coral:     '#F87171',
  coralDark: '#DC2626',
  heart:     '#EF4444',
  sun:       '#FBBF24',
  sunDark:   '#D97706',
  sky:       '#60A5FA',

  // Surfaces
  cream:  '#FFFBF0',
  cream2: '#FDF6E3',
  paper:  '#FFFFFF',

  // Text
  ink900: '#0F2A1A',
  ink700: '#1F3D2A',
  ink500: '#516B5C',
  ink300: '#9CB1A4',
  ink100: '#E5EBE7',
};

export const FONTS = {
  // Using system fonts. If you want Fraunces (display) + Nunito (body),
  // load them with expo-font in App.js and replace these names.
  display: 'System',
  body:    'System',
  mono:    'Menlo',
};

export const SHADOWS = {
  sm: {
    shadowColor: '#14532D',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1, // Android
  },
  md: {
    shadowColor: '#14532D',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 4,
  },
  lg: {
    shadowColor: '#14532D',
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 24,
    elevation: 8,
  },
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
};
