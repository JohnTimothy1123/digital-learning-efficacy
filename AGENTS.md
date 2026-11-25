# AGENTS.md

Guidance for AI agents and developers working on this codebase.

## Project overview

A static, research-based academic website for the study “Assessing the Efficacy of Digital Learning Aids for Freshmen Computer Engineering Students at Batangas State University – Alangilan Campus.” Content comes from the group’s paper (downloadable at `public/docs/digital-learning-aids-research-paper.pdf`). It has no backend, database, or forms. All interactivity is client-side React state.

Stack: TanStack Start (React 19, TanStack Router, file-based routes), Vite 8, Tailwind CSS 4, shadcn/ui (`src/components/ui`), lucide-react, deployed on Netlify via `@netlify/vite-plugin-tanstack-start`.

## Key directories

```
src/
├── content/research.ts        # SINGLE SOURCE for all copy, study data, references, team, nav
├── components/site/
│   ├── site-header.tsx        # Sticky header, desktop nav, mobile Sheet menu, skip link
│   ├── site-footer.tsx        # PageStepper (prev/next section) + dark footer
│   ├── page-hero.tsx          # PageHero, SectionHeading, Cite helpers
│   ├── charts.tsx             # EngagementDumbbell, DeviceBars, ReliabilityBars, CorrelationMeter
│   ├── tool-wheel.tsx         # Interactive Figure 1 (Education 4.0 tools)
│   ├── cdn-image.tsx          # <img> with srcset via Netlify Image CDN
│   ├── reveal.tsx             # Scroll-reveal wrapper (IntersectionObserver)
│   └── logo.tsx               # Chip logo mark (also public/favicon.svg)
├── routes/                    # index, introduction, discussion, significance, developers, references
└── styles.css                 # Theme variables, fonts, blueprint grid, motion utilities
public/img/                    # AI-generated topic photos (hero-lab, background-desk, significance-classroom)
public/docs/                   # The original research paper PDF
```

## Conventions and decisions

- **Content lives in `src/content/research.ts`.** Pages import data from it; don't hard-code study numbers in components. Chart data mirrors the paper’s tables exactly (Delos Reyes Table 1.1, Tapio & Gapol Table 1, Siega Table 2, Dancsa Figure 1).
- **Theme**: warm paper background, ink navy (`--ink`) bands, crimson primary (BatStateU red), solder-gold accent. Fonts: Bricolage Grotesque (headings), IBM Plex Sans (body), IBM Plex Mono (labels), loaded from Google Fonts in `__root.tsx`.
- **Chart colors**: Before = `--chart-2` (#3d6fb0), After/single series = `--chart-1` (#b8323a). The pair was checked for colorblind separation. Every chart has a legend or a self-describing title, and the multi-value charts have a Table view.
- **Images**: always render through `CdnImage` (Netlify Image CDN, WebP, srcset). Never link raw PNGs.
- **References**: the paper cited Ariza & Hernández Hernández (2026) and Anwar et al. (2025) in its text but left them out of its reference list. Both were added with full, DOI-verified citations. All DOIs were checked against Crossref.
- **Team roster** in `research.ts` holds placeholder names until the group fills it in.
- **Accessibility**: one `<main>` (in `__root.tsx`), skip link, `aria-pressed` toggles, `role="tab"` selectors, `prefers-reduced-motion` respected for all animation, visible focus rings.
- `Reveal` only animates content that starts below the fold, so server-rendered content above the fold never flashes.
- `src/routeTree.gen.ts` is generated at build time. Don't edit it.

## Commands

```bash
npm run dev        # Vite dev server on :3000
netlify dev        # With Netlify Image CDN emulation
npm run typecheck
npm run lint
```
