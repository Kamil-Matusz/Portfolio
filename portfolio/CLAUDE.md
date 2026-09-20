# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio / CV site for Kamil Matusz (backend engineer). React 19 + TypeScript + Vite 8, no UI framework, no CSS preprocessor. Interface language is Polish.

## Commands

```bash
npm run dev            # Vite dev server
npm run build          # tsc -b && vite build
npm run preview        # serve dist/ with SPA fallback (use to verify routes)
npm run lint           # oxlint
npx tsc -b             # typecheck only, faster than a full build
```

No test runner is configured. There are no tests to run after a change - verify with `npx tsc -b && npm run lint && npm run build`, and for routing or layout changes smoke-test against `npm run preview`.

## Architecture

Four files carry the whole site. Understand how they divide responsibility before editing.

**`src/content.ts` - the only place content lives.**
Exports `profile` (bio, metrics, work history, projects, stack groups, contact links), `routes` (nav paths and labels) and `pages` (title + lead for each subpage). Everything is `as const`, so components consume `readonly` arrays - props that receive them must be typed `readonly string[]`, not `string[]`. Adding or editing CV content means touching only this file. Much of it is still placeholder text pending real profile data from the user.

**`src/App.tsx` - shell only.**
Top bar (`Rail`) plus `<Routes>`. Holds four hooks: `useClock` (live local time), `useScrollProgress` (rAF-throttled scroll bar), `useScrollReset` and `useReveal`, the last two keyed on `location.pathname` so they re-fire on navigation. `useReveal` is a single `IntersectionObserver` that queries `.reveal` from the DOM and adds `.is-in` - it is not a per-component hook, so any new element that should animate in just needs the `reveal` class.

**`src/pages.tsx` - page components.**
`Home`, `Projects`, `Stack`, `Contact`, `NotFound`, plus the shared `Section`, `PageHead` and `Tags` building blocks. Home is scroll sections (`#about`, `#work`); the other three are separate routes with a `PageHead` instead of the masthead.

**`src/index.css` + `src/App.css` - the design system.**
`index.css` holds every token on `:root` (palette, three font stacks, `--rail-h`, `--gutter`, `--step`) and redefines the palette under `prefers-color-scheme: dark`. `App.css` holds layout only and must reference tokens, never literal colors or font families. Class names are BEM-ish (`.rail__link`, `.entry__points`); there are no utility classes beyond `.mono`.

## Routing

`BrowserRouter` (set up in `src/main.tsx`) with clean URLs: `/`, `/projekty`, `/stack`, `/kontakt`, `*`. Nav uses `NavLink`, and active state is styled via `[aria-current]` - React Router sets that attribute itself, so do not add an `.active` class selector.

Deployment needs an SPA fallback rewrite to `index.html` or direct hits on `/projekty` 404. No host config file is committed yet; the host has not been chosen.

## Design direction

Swiss / editorial, decided with the user - keep new UI consistent with it rather than introducing a second visual language:

- Ink on paper, hairline rules, flush-left ragged-right, no border-radius, no shadows, no gradients.
- One accent, `--signal` (a deep green, not the conventional Swiss red). It carries status meaning only: availability dot, active nav underline, scroll progress, bullet markers, link underline on hover. Do not use it for decoration.
- Three type roles: `Archivo` for display and UI (variable, driven by `font-variation-settings: "wdth"` - the width axis is how headings get their character, not extra weights), `Newsreader` for the few prose moments, `JetBrains Mono` for dates, metrics, labels and nav.
- No `01 / 02 / 03` section numbering - the sections are not a sequence.
- Animation stays minimal: the reveal fade, the pulsing status dot, hover arrow shifts. `prefers-reduced-motion` is honored in `index.css` and in the `.reveal` rule; keep any new motion inside that guard.

## Leftovers

`src/assets/hero.png`, `react.svg`, `vite.svg` and `public/icons.svg` are unreferenced Vite template files. `README.md` is still the unmodified Vite template and does not describe this project.
