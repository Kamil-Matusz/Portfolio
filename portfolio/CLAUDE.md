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

Four modules carry the whole site. Understand how they divide responsibility before editing.

**`src/content/` - the only place content lives.**
Five files. `types.ts` is the contract: `routeIds`, `IconKey` and the `Content` interface that both languages must satisfy - a field missing from one translation is a `tsc -b` error, which is the whole point of having an explicit interface instead of `as const` inference. `shared.ts` holds what is language-invariant and dangerous to duplicate: `identity`, `links`, `certifications`, `stackGroups`. `pl.ts` and `en.ts` hold every translated string, including the `ui` block for chrome like "Dalej" or "Certyfikaty" - no user-visible string belongs in a component. `index.ts` is the barrel: `content`, `hrefFor`, `currentRouteId`, `LangContext`, `useLang`, `useSite`.

A work entry groups one or more `roles` under a company, so a promotion inside one company stays one entry. `icon` is a sprite key typed as `IconKey` (see below), not a free string. Arrays are `readonly`, so props that receive them must be typed `readonly string[]`. Work history and projects are duplicated across `pl.ts` and `en.ts` by design - nothing catches a project added to one file and not the other, so add them in pairs. Much of it is still placeholder text pending real profile data from the user.

**`src/App.tsx` - shell only.**
`App` is just the language split: `/en/*` and `/*` both render `Site`, which provides `LangContext` and holds the top bar (`Rail`) plus the inner `<Routes>` generated from `nav`. Holds five hooks: `useDocumentHead` (sets `<html lang>`, `document.title` and the `hreflang` alternates - these are injected at runtime because Vite tries to resolve a `<link href>` in `index.html` as a build asset and dies on `href="/"`), `useClock` (live local time, formatted with the active language's `locale`), `useScrollProgress` (rAF-throttled scroll bar), `useScrollReset` and `useReveal`, the last two keyed on `location.pathname` so they re-fire on navigation. `useReveal` is a single `IntersectionObserver` that queries `.reveal` from the DOM and adds `.is-in` - it is not a per-component hook, so any new element that should animate in just needs the `reveal` class.

**`src/pages.tsx` - page components.**
`Home`, `Experience`, `Projects`, `Stack`, `Contact`, `NotFound`, plus the shared `Section`, `PageHead`, `Tags`, `Chips` and `Next` building blocks. Home is the masthead plus one scroll section (`#about`); every other page is its own route with a `PageHead` instead of the masthead. Components take no content props - they call `useSite()` for the active language and `useLang()` + `hrefFor()` for internal links. `Next` takes a `RouteId`, not a path, and is used twice, chaining home -> experience -> projects.

**`src/index.css` + `src/App.css` - the design system.**
`index.css` holds every token on `:root` (palette, three font stacks, `--rail-h`, `--gutter`, `--step`). The site is dark-only by decision of the user - there is no light palette and no `prefers-color-scheme` switch, and `color-scheme: dark` is declared both on `:root` and in the `index.html` meta. Do not reintroduce a light theme. `App.css` holds layout only and must reference tokens, never literal colors or font families. Class names are BEM-ish (`.rail__link`, `.entry__points`); there are no utility classes beyond `.mono`. Two responsive breakpoints, deliberately: 1340px drops `.rail__block--wide` (status + clock) so the six-item nav plus the PL/EN switcher still fits, and 900px is the layout breakpoint that collapses the two-column grids. The first one is sized to the Polish labels, which are the long ones - measure the rail in PL after adding a seventh nav item and raise it again if the nav clips. `.rail__nav` is `overflow-x: auto` with the scrollbar hidden, so an overflowing nav scrolls silently instead of wrapping - it will not look broken, it will just drop items off the right edge. Below 900px it is expected to scroll.

## Routing

`BrowserRouter` (set up in `src/main.tsx`). The language lives in the URL: Polish is the default and unprefixed (`/`, `/doswiadczenie`, `/projekty`, `/stack`, `/kontakt`), English is prefixed and has its own slugs (`/en`, `/en/experience`, ...). Deliberately no localStorage and no `navigator.language` redirect - the site is shared as a link, so the link has to decide the language.

Pages are identified by `RouteId`, never by slug. Build internal links with `hrefFor(lang, id)` and read the current page with `currentRouteId(pathname, lang)`; the language switcher relies on the latter to stay on the same page when you switch. Both the rail nav and `<Routes>` are generated from `routeIds`, so they cannot drift - adding a page means adding an id in `types.ts`, an entry in `views` in `App.tsx`, and `nav` + `pages` entries in both language files, all of which `tsc -b` enforces. Nav uses `NavLink` and active state is styled via `[aria-current]` - React Router sets that attribute itself, so do not add an `.active` class selector. The switcher uses plain `Link` because its "active" means current language, not current page.

Deployment needs an SPA fallback rewrite to `index.html` covering `/en/*` too, or direct hits on `/projekty` and `/en/projects` 404. No host config file is committed yet; the host has not been chosen. The `hreflang` alternates are built from `window.location.origin`, so they need no configuration when the domain is picked.

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
