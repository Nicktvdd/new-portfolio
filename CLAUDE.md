# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nick van den Dungen's personal portfolio, live at https://www.nickvandendungen.com/. Positioning: founder-minded full-stack engineer (targeting CTO / founding-engineer / full-stack roles; never describe Nick as "senior"). Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS 4, Motion (`motion/react`).

## Commands

```bash
npm run dev        # dev server (Turbopack)
npm run build      # static export to out/
npm run lint       # ESLint 9 flat config (eslint.config.mjs); ESLint 10 breaks eslint-plugin-react
npm run typecheck  # tsc --noEmit
```

There is no test suite. Verify UI changes by building and viewing `out/` in a browser at mobile (390px) and desktop widths, in light and dark mode.

## Architecture

- **Static export**: `next.config.ts` sets `output: 'export'` + `images.unoptimized`. No server runtime: no API routes, server actions or runtime image optimisation. Pre-compress images to WebP (see `public/projects/`). Metadata routes (`sitemap.ts`, `robots.ts`) and the `src/app/og.png/route.tsx` OG image need `export const dynamic = "force-static"`.
- **Content lives in `src/content/`** (`site.ts`, `projects.ts`, `experience.ts`) and is shared by pages. Edit facts there, not in JSX.
- **Design tokens** are CSS variables in `src/app/globals.css`, exposed to Tailwind via `@theme inline`. The palette is autumn "amber gold", built around the teal/olive hero arch. Every pairing below passes WCAG AA in both themes; the axe scan checks it.
  - Base colours: `paper`, `card`, `ink`, `muted`, `line`. Dark mode is automatic via `prefers-color-scheme`. `ink` flips to near-white in dark mode, so never use it as a background behind text that must stay dark.
  - Amber:
    - `accent` for fills, dots and underlines
    - `accent-display` for large text such as the hero "end to end"
    - `accent-ink` for small text such as eyebrows and dates
    - `on-accent` for text on amber
    - `accent-on-slab` for amber on the teal slab
  - Teal: `teal`/`on-teal` for primary buttons, the active nav item, focus rings and selection; `teal-ink` for teal text and hovers.
  - Olive: `olive-soft`/`olive-ink` for tags and the project-card visual panels.
  - `slab`/`on-slab`: the deep-teal closing band.
  - `hero-a`/`hero-b`: the portrait arch gradient.
  - Fonts: `font-display` = Instrument Serif.
- **Motion language**: one motion everywhere, a fade in plus an 8px rise over 300 ms with `cubic-bezier(0.22, 1, 0.36, 1)` and a 50 ms stagger. There are no exit animations. Page changes use `src/app/template.tsx` (which remounts per navigation) with the CSS `.page-enter` class in `globals.css`. `Reveal.tsx` and the Navbar menu variants mirror the same values. View Transitions were tried and dropped: snapshots of pages with different heights get stretched. Keep new motion consistent with this and fast, because the site is skimmed by recruiters. `html` has `scroll-padding-top` so hash links and post-navigation scrolling clear the sticky header, so don't add `scroll-mt-*` on top of it. The Navbar's mobile menu closes itself on route change because its open state is keyed to the pathname.
- **Reveals**: `Reveal` (motion `whileInView`) is for below-the-fold content only. Hero and page headers render without it, since they already get the page-enter animation. A `<noscript>` style in `layout.tsx` un-hides reveal content without JS.
- **Hero portrait**: `public/portrait.webp` is a transparent cutout (background removed, lightly warmed and sharpened). The arch shape and autumn teal-to-olive gradient are CSS (`rounded-t-full` + `from-hero-a to-hero-b` tokens with dark-mode values) so the colours can change without re-editing the photo. Nick's palette direction is autumn: warm, earthy, muted colours.
- **Icons**: the favicon (`src/app/icon.png/route.tsx`) and share image (`src/app/og.png/route.tsx`) are `next/og` route handlers exported at build time; the `.png` route folder names give them real file extensions.
- Pages are server components that export `metadata`; client interactivity is isolated in components (`Reveal`, `RotatingBadge`, `ContactForm`, `CopyEmail`, `Navbar`). Every page except Contact ends with the shared `ClosingCta` band; case studies use `FactList` and `BackLink` from `ui.tsx`.
- **Contact form** uses EmailJS client-side with `NEXT_PUBLIC_SERVICE_ID`, `NEXT_PUBLIC_TEMPLATE_ID`, `NEXT_PUBLIC_PUBLIC_KEY` (in `.env`, gitignored).

## CV

`cv/cv.tex` is the CV source (AltaCV class, portfolio fonts in `cv/fonts/`, colours matched to the site). `cv/altacv.cls` is patched to skip `pdfx`, which Tectonic can't handle. Build with [Tectonic](https://tectonic-typesetting.github.io): `cd cv && tectonic -X compile cv.tex && cp cv.pdf ../public/nick-van-den-dungen-cv.pdf`. The public CV must not contain Nick's phone number. `cv/private/` (gitignored) holds his private versions.

## Content rules

- The About bio keeps a warm, personal first-person voice (emoji, "Hey there!"); headings and SEO copy can be crisper.
- No testimonials or quotes from other people. Nick doesn't want them.
- Tiny Tarrasque copy follows that app's trademark rule: say "fifth-edition" / "5e SRD", never "D&D". Its repo is private, so there's no code link.
