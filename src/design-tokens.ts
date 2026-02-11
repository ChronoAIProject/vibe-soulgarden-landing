/**
 * Design tokens for landing-page.
 * Source: docs/BRAND_COLORS.md, docs/COLOR_TOKENS.md, docs/COLOR_TOKENS_QUICK_REFERENCE.md, apps/web/src/types.ts
 */

export const BRAND_COLORS = {
  rose: '#ECBCC8',
  lightBlue: '#C6D4F3',
  cream: '#F9ECC4',
  lavender: '#E3CAF9',
  roseAccent: '#F3D3DB',
  lightBlueAccent: '#D9E4F7',
  creamAccent: '#FBF5E4',
  lavenderAccent: '#EDDCFB',
  green: '#98BB96',
  greenAccent: '#DCEADB',
  pearlWhite: '#F9FAFC',
  white: '#FFFFFF',
  black: '#000000',
  roseDark: '#B18D96',
  lightBlueDark: '#949FB6',
  creamDark: '#BBB193',
  lavenderDark: '#AA97BB',
  greenDark: '#91A48F',
} as const;

/** Hand-drawn: wobbly border-radius (CSS value for inline style) */
export const WOBBLY_RADIUS = '255px 15px 225px 15px / 15px 225px 15px 255px';
export const WOBBLY_RADIUS_MD = '240px 20px 220px 20px / 20px 220px 20px 240px';

/** Hand-drawn: hard offset shadow (no blur), cut-paper effect */
export const HARD_SHADOW = '4px 4px 0px 0px #2d2d2d';
export const HARD_SHADOW_HOVER = '2px 2px 0px 0px #2d2d2d';
export const HARD_SHADOW_LG = '8px 8px 0px 0px #2d2d2d';
export const HARD_SHADOW_CARD = '3px 3px 0px 0px rgba(45,45,45,0.12)';

export const BRAND_LOGO_GRADIENT = `
  radial-gradient(circle at 10% 20%, rgba(236, 188, 200, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 45% 35%, rgba(198, 212, 243, 0.9) 0%, transparent 60%),
  radial-gradient(circle at 80% 18%, rgba(249, 236, 196, 0.9) 0%, transparent 58%),
  radial-gradient(circle at 20% 25%, rgba(227, 202, 249, 0.7) 0%, rgba(236, 188, 200, 0.5) 30%, transparent 65%),
  radial-gradient(circle at 55% 32%, rgba(198, 212, 243, 0.8) 0%, rgba(249, 236, 196, 0.5) 32%, transparent 74%),
  white
`;

export type ThemeKey = 'modern_light' | 'modern_dark';

export interface ThemeConfig {
  key: ThemeKey;
  name: string;
  bgClass: string;
  textClass: string;
  subTextClass: string;
  cardClass: string;
  accentClass: string;
  buttonClass: string;
  borderClass: string;
  isDark: boolean;
}

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  modern_light: {
    key: 'modern_light',
    name: 'Daylight',
    bgClass: 'bg-transparent',
    textClass: 'text-black',
    subTextClass: 'text-black/70',
    cardClass:
      'bg-white border-transparent shadow-card rounded-card-lg',
    accentClass: 'text-brand-lightBlue',
    buttonClass:
      'bg-brand-lightBlue text-white hover:opacity-90 shadow-md shadow-brand-lightBlue/30',
    borderClass: 'border-transparent',
    isDark: false,
  },
  modern_dark: {
    key: 'modern_dark',
    name: 'Midnight',
    bgClass: 'bg-surface-dark',
    textClass: 'text-white',
    subTextClass: 'text-white/70',
    cardClass: 'bg-surface-dark border-white/20 shadow-card-dark rounded-card-lg',
    accentClass: 'text-brand-lightBlue',
    buttonClass:
      'bg-brand-lightBlue text-black hover:opacity-90 shadow-md shadow-brand-lightBlue/30',
    borderClass: 'border-white/20',
    isDark: true,
  },
};
