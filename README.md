# SoulGarden Landing Page

React + Vite + Tailwind CSS + PostCSS landing project.

## Design tokens

Design specs and tokens are sourced from:

- **docs/BRAND_COLORS.md** : Brand palette, dark surfaces, usage
- **docs/COLOR_TOKENS.md** : Theme colors, growth stages, UI components
- **docs/COLOR_TOKENS_QUICK_REFERENCE.md** : Quick lookup
- **apps/web/src/types.ts** : `THEMES`, `BRAND_COLORS`, `BRAND_LOGO_GRADIENT`

This app mirrors those tokens in:

- **src/design-tokens.ts** : `BRAND_COLORS`, `BRAND_LOGO_GRADIENT`, `THEMES` (for runtime/className usage)
- **tailwind.config.js** : `theme.extend.colors.brand`, `theme.extend.colors.surface`, shadows, radius

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:3001
pnpm build
pnpm preview
```

## Tailwind usage

Use design token classes:

- **Brand**: `bg-brand-rose`, `text-brand-lightBlue`, `bg-brand-cream`, `border-brand-lavender`, etc.
- **Surfaces**: `bg-surface-dark`, `bg-surface-raised`
- **Card**: `shadow-card`, `shadow-card-dark`, `rounded-card`, `rounded-card-lg`

Use `THEMES.modern_light` / `THEMES.modern_dark` from `src/design-tokens.ts` for theme-based class names (e.g. `theme.cardClass`, `theme.textClass`).
