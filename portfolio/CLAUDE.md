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
Exports `profile` (bio, metrics, work history, projects, stack groups, certifications, contact links), `routes` (nav paths and labels) and `pages` (title + lead for each subpage). A work entry groups one or more `roles` under a company, so a promotion inside one company stays one entry. `stack` and `certifications` items are `{ name, icon }`, where `icon` is a sprite key (see below) - not a free string. Everything is `as const`, so components consume `readonly` arrays - props that receive them must be typed `readonly string[]`, not `string[]`. Adding or editing CV content means touching only this file. Much of it is still placeholder text pending real profile data from the user.

**`src/App.tsx` - shell only.**
Top bar (`Rail`) plus `<Routes>`. Holds four hooks: `useClock` (live local time), `useScrollProgress` (rAF-throttled scroll bar), `useScrollReset` and `useReveal`, the last two keyed on `location.pathname` so they re-fire on navigation. `useReveal` is a single `IntersectionObserver` that queries `.reveal` from the DOM and adds `.is-in` - it is not a per-component hook, so any new element that should animate in just needs the `reveal` class.

**`src/pages.tsx` - page components.**
`Home`, `Experience`, `Projects`, `Stack`, `Contact`, `NotFound`, plus the shared `Section`, `PageHead`, `Tags`, `Chips` and `Next` building blocks. Home is the masthead plus one scroll section (`#about`); every other page is its own route with a `PageHead` instead of the masthead. `Next` renders the "Dalej" footer link and is used twice, chaining Start -> Doswiadczenie -> Projekty.

**`src/index.css` + `src/App.css` - the design system.**
`index.css` holds every token on `:root` (palette, three font stacks, `--rail-h`, `--gutter`, `--step`). The site is dark-only by decision of the user - there is no light palette and no `prefers-color-scheme` switch, and `color-scheme: dark` is declared both on `:root` and in the `index.html` meta. Do not reintroduce a light theme. `App.css` holds layout only and must reference tokens, never literal colors or font families. Class names are BEM-ish (`.rail__link`, `.entry__points`); there are no utility classes beyond `.mono`. Two responsive breakpoints, deliberately: 1100px drops `.rail__block--wide` (status + clock) so the five-item nav still fits, and 900px is the layout breakpoint that collapses the two-column grids. Adding a sixth nav item means re-checking the 1100px one.

## Routing

`BrowserRouter` (set up in `src/main.tsx`) with clean URLs: `/`, `/doswiadczenie`, `/projekty`, `/stack`, `/kontakt`, `*`. Paths are unaccented even though the labels are not. Route order in `App.tsx` mirrors `routes` in `content.ts` - keep the two in step, since the rail nav is generated from `routes`. Nav uses `NavLink`, and active state is styled via `[aria-current]` - React Router sets that attribute itself, so do not add an `.active` class selector.

Deployment needs an SPA fallback rewrite to `index.html` or direct hits on `/projekty` 404. No host config file is committed yet; the host has not been chosen.

## Design direction

Swiss / editorial, decided with the user - keep new UI consistent with it rather than introducing a second visual language:

- Ink on paper, hairline rules, flush-left ragged-right, no border-radius, no shadows, no gradients.
- One accent, `--signal` (a deep green, not the conventional Swiss red). It carries status meaning only: availability dot, active nav underline, scroll progress, bullet markers, link underline on hover. Do not use it for decoration.
- Three type roles: `Archivo` for display and UI (variable, driven by `font-variation-settings: "wdth"` - the width axis is how headings get their character, not extra weights), `Newsreader` for the few prose moments, `JetBrains Mono` for dates, metrics, labels and nav.
- No `01 / 02 / 03` section numbering - the sections are not a sequence.
- Animation stays minimal: the reveal fade, the pulsing status dot, hover arrow shifts. `prefers-reduced-motion` is honored in `index.css` and in the `.reveal` rule; keep any new motion inside that guard.

## Icons

`index.html` carries an inline `<svg class="sprite">` of `<symbol id="i-*">` brand marks, hidden by a small `<style>` in `<head>` (width/height 0, never `display: none` - that breaks `<use>`). `Chips` in `pages.tsx` renders `<use href="#i-KEY">`, and the symbols carry no `fill`, so they inherit `currentColor` from `.chip`. Monochrome is deliberate: colored brand logos would break the one-accent rule. Keeping it inline rather than in `public/icons.svg` costs ~20 kB gzip on the document but avoids the external-`<use>` + `currentColor` bugs in older Safari.

Marks come from [devicon](https://github.com/devicons/devicon) (MIT), `-plain` variant where it exists, `-original` otherwise. To add one: take its SVG, strip every `fill="..."` attribute (leave `fill-rule`), keep the `viewBox`, and paste it as a new `<symbol>`.

## Leftovers

`src/assets/hero.png`, `react.svg`, `vite.svg` and `public/icons.svg` are unreferenced Vite template files. `README.md` is still the unmodified Vite template and does not describe this project.
