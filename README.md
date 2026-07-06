# Leela Infra Solution — Website

A premium, dark-luxury marketing site for Leela Infra Solution, rebuilt from the original
[leelainfra.in](https://leelainfra.in) with a modern stack and original design system.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme in `styles/globals.css`)
- **Framer Motion** — entrance animations, hover/tap micro-interactions, page transitions
- **GSAP** (+ ScrollTrigger) — hero parallax and scroll-driven effects
- **Lenis** — smooth inertial scrolling, wired to the GSAP ticker

## Folder structure

```
app/            Routes (App Router) — one folder per page, plus sitemap/robots/not-found
components/     Reusable UI + layout primitives (Button, GlassCard, Navbar, CustomCursor…)
sections/       Page-specific composed sections, grouped by page (home/, about/, products/…)
hooks/          useLenis, useGsap, useReveal, useMousePosition, useMediaQuery
lib/            Content data (products, collections, projects, gallery, testimonials),
                constants, cn() utility, SEO helpers
styles/         Design tokens & global CSS (imported by app/globals.css)
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```

## Content notes

- **Product, collection, project and gallery visuals** are procedurally generated SVG "art
  plates" (`components/ui/ArtPlate.tsx`) — a deliberate stand-in for real photography so the
  site never ships with broken image links. Drop real photos into `public/images/...` and swap
  the `<ArtPlate>` usages for `next/image` once photography is available; the rest of the layout
  (aspect ratios, overlays, hover states) is already built to accept either.
- **Collections** (`/brands`) are presented as Leela's own in-house material lines (Leela Wood,
  Leela Flute, etc.) rather than third-party brand names, since the original site did not name
  specific manufacturing partners.
- Contact form submits via `mailto:`; WhatsApp deep links are used throughout for instant
  enquiries. Swap in a real form backend/API route when one is available.
- Company details (address, phone, email) are sourced from the live site and centralised in
  `lib/constants.ts` — update there to propagate everywhere.
