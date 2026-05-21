# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start Next.js dev server on :3000
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # ESLint via next lint
```

No test suite is configured in this repo.

## Environment

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<key from Medusa admin>
NEXT_PUBLIC_SITE_URL=https://www.valutin.com.br
```

## Architecture

Next.js 14 App Router storefront for the Valutin children's fashion brand, backed by a Medusa v2 API.

### Route structure

```
src/app/
  layout.tsx              # root layout — mounts all global UI (Header, Footer, drawers, SplashOverlay)
  page.tsx                # homepage
  (main)/[category]/      # dynamic PLP — resolves category by handle from Medusa, filters products by category_id
  sitemap.ts / robots.ts
```

### Medusa integration

`src/lib/medusa.ts` exports a singleton `medusa` (`@medusajs/js-sdk`) configured from `NEXT_PUBLIC_MEDUSA_BACKEND_URL` and `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`.

`src/lib/map-product-card.ts` maps raw Medusa store products to the internal `ProductCard` type. Products without a calculated price are filtered out. Prices from Medusa may arrive in minor units (cents) — `toMajorUnits()` handles the conversion. `isNew` is set for products created within the last 30 days.

Category pages (`[category]/page.tsx`) follow a two-step pattern: fetch the category by handle to get its `id` and display name, then list products filtered by `category_id`.

### State management

Three Zustand stores in `src/store/`:

- `cartStore` — cart items + open/close state, uses `immer` middleware for mutations
- `drawerStore` — controls cart and account drawer visibility (only one open at a time)
- `regionStore` — selected country/currency/locale, persisted to `localStorage` as `valutin-region-store`

### Navigation

`src/config/navigation.ts` is the single source of truth for the nav bar. `navItems` drives both the `Header` category bar and the `MegaMenu`. Each item with a `megaMenu` key gets a hover-triggered dropdown with two link columns and a themed image grid. Nav item handles match the Medusa category handles (bebe, crianca, calcados, acessorios, ocasioes, quarto).

### Typography & styling

Two fonts loaded via `next/font/google` in the root layout and exposed as CSS variables:
- `--font-display` → Playfair Display (used via `font-display` Tailwind class) — headings, logo, italic accents
- `--font-body` → Inter (used via `font-body` Tailwind class) — all UI text

Tailwind CSS with custom tokens: `text-brand` (accent colour), `text-promo` (sale/promo colour).

### Global UI shell

`SplashOverlay` (`src/components/splash/SplashOverlay.tsx`) is a full-screen region selector shown on the first visit. It reads/writes `regionStore` and animates out on country selection. A plain `#splash-backdrop` div in the layout prevents a flash before the overlay mounts.

`Header` is a client component that reads `navItems` from the config and manages `activeMenu` state for the MegaMenu. Adding a new top-level nav category requires only adding an entry to `navItems` in `src/config/navigation.ts`.
