/**
 * Tailwind config: design tokens from:
 * docs/BRAND_COLORS.md, docs/COLOR_TOKENS.md, docs/COLOR_TOKENS_QUICK_REFERENCE.md, apps/web/src/types.ts
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Primary brand (BRAND_COLORS)
        brand: {
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
        },
        // Dark mode surfaces (COLOR_TOKENS)
        surface: {
          dark: '#121212',
          raised: '#2a2a2a',
        },
        /* Hand-drawn: pencil/paper palette */
        pencil: '#2d2d2d',
        paper: '#fdfbf7',
        paperMuted: '#e5e0d8',
      },
      fontFamily: {
        heading: ['Kalam', 'cursive'],
        body: ['Nunito Sans', 'sans-serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
      /* Design system: large and readable; headings vary dramatically in size */
      fontSize: {
        'body': ['1.125rem', { lineHeight: '1.6' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(0,0,0,0.05)',
        'card-dark': '0 25px 50px -12px rgba(0,0,0,0.25)',
        hard: '4px 4px 0px 0px #2d2d2d',
        'hard-md': '6px 6px 0px 0px #2d2d2d',
        'hard-lg': '8px 8px 0px 0px #2d2d2d',
        'hard-hover': '2px 2px 0px 0px #2d2d2d',
        'hard-card': '3px 3px 0px 0px rgba(45,45,45,0.12)',
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.5rem',
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        wobblyMd: '240px 20px 220px 20px / 20px 220px 20px 240px',
      },
      transitionDuration: {
        100: '100ms',
      },
    },
  },
  plugins: [],
};
