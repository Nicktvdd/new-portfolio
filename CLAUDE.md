# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nick van den Dungen's personal portfolio, live at https://www.nickvandendungen.com/. Positioning: founder-minded full-stack engineer (targeting CTO / founding-engineer / senior full-stack roles). Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS 4, Motion (`motion/react`).

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
- **Design tokens** are CSS variables in `src/app/globals.css`, exposed to Tailwind via `@theme inline` (`paper`, `card`, `ink`, `muted`, `line`, `accent`, `accent-soft`; `font-display` = Instrument Serif). Dark mode is automatic via `prefers-color-scheme`; use the tokens rather than raw colours so both themes work. `ink` flips to near-white in dark mode, so never use `bg-ink` for large surfaces. Use `bg-slab`/`text-on-slab`, which stay dark in both themes. Use `text-accent-ink` for small accent text (AA contrast); plain `accent` is for fills, dots, underlines and large display text.
- **Motion language**: one motion everywhere, a fade in plus an 8px rise over 300 ms with `cubic-bezier(0.22, 1, 0.36, 1)` and a 50 ms stagger. There are no exit animations. Page changes use `src/app/template.tsx` (which remounts per navigation) with the CSS `.page-enter` class in `globals.css`. `Reveal.tsx` and the Navbar menu variants mirror the same values. View Transitions were tried and dropped: snapshots of pages with different heights get stretched. Keep new motion consistent with this and fast, because the site is skimmed by recruiters. `html` has `scroll-padding-top` so hash links and post-navigation scrolling clear the sticky header, so don't add `scroll-mt-*` on top of it. The Navbar's mobile menu closes itself on route change because its open state is keyed to the pathname.
- **Reveals**: `Reveal` (motion `whileInView`) is for below-the-fold content only. Hero and page headers render without it, since they already get the page-enter animation. A `<noscript>` style in `layout.tsx` un-hides reveal content without JS.
- **Icons**: the favicon (`src/app/icon.png/route.tsx`) and share image (`src/app/og.png/route.tsx`) are `next/og` route handlers exported at build time; the `.png` route folder names give them real file extensions.
- Pages are server components that export `metadata`; client interactivity is isolated in components (`Reveal`, `RotatingBadge`, `ContactForm`, `Typewriter`, `Navbar`, `AboutSVG`).
- **Contact form** uses EmailJS client-side with `NEXT_PUBLIC_SERVICE_ID`, `NEXT_PUBLIC_TEMPLATE_ID`, `NEXT_PUBLIC_PUBLIC_KEY` (in `.env`, gitignored).

## Content rules

- The About bio keeps a warm, personal first-person voice (emoji, "Hey there!"); headings and SEO copy can be crisper.
- Tiny Tarrasque copy follows that app's trademark rule: say "fifth-edition" / "5e SRD", never "D&D". Its repo is private, so there's no code link.
