# Mobile gradient baseline and opportunities

**Artifact:** [`docs/visual/mobile-gradient-baseline.png`](visual/mobile-gradient-baseline.png) — full-page capture at **390×844** after ~1.2s (FadeUp visible).

## Scroll flow (mobile, single column)

1. **Nav** — fixed; brand name uses `.nav-brand-gradient` (text clip); tagline lowercase.
2. **Hero** — primary card + profile aside (stacked).
3. **What I help** — three equal cards (flat white + border + shadow).
4. **Who I help** — `.section-warm` band; soft chips.
5. **Approach** — flush intro + `.card-soft` divider list.
6. **Use cases** — `.section-alt` band; image cards.
7. **Story** — two stacked cards; warm pull-quote with solid left border.
8. **Schedule** — conversion card; primary booking CTA.
9. **Connect** — `.section-alt`; email blocks + primary **Reach out**.
10. **Footer** — minimal text.

## Mobile-specific observations

- **Single column** emphasizes **vertical repetition**: many blocks share the same white card + border + shadow recipe, so **section bands** (warm / cool) do most of the rhythm work today.
- **Thumb reach:** primary actions are full-width in Hero; Schedule/Connect repeat the pattern — good candidates for **subtle depth** (gradient fill on primary buttons) without adding noise.
- **Flat clusters:** Hero, Schedule, and Connect cards read similarly; **ambient surface gradient** and a **hairline top accent** help separate “story” vs “conversion” without new layout.
- **Pills** (Hero, Schedule, Connect, Story labels) are flat `accent-soft` — a **two-stop soft gradient** adds polish and ties to the brand blues without copying the nav name treatment.

## Gradient inventory (before elevation)

| Location | Implementation |
|----------|----------------|
| `body` | Vertical `#fbfdff` → `--bg` |
| `.section-alt` | Cool “hill” anchored to `--bg` |
| `.section-warm` | Warm “hill” anchored to `--bg` |
| `.nav-brand-gradient` | Text clip: `--text` → `--accent` → accent/warm mix |
| (after this work) | `.btn-primary-gradient`, `.pill-gradient-subtle`, `.card-gradient-top`, `.card-ambient-surface`, `.quote-gradient-edge` — see [`globals.css`](../src/app/globals.css) |

## Principles applied

- **One strong text gradient** stays on the nav brand name.
- Additional gradients are **non-text**: buttons, surfaces, hairlines, quote edge.
- **Static** only (respects reduced-motion ethos; no animated meshes).

## After implementation

- **Post-change capture:** [`docs/visual/mobile-gradient-after.png`](visual/mobile-gradient-after.png) (same viewport as baseline).
- **Contrast:** Primary buttons use `.btn-primary-gradient` (accent → accent-hover); white label `#fff` remains on top of blues that are similar to the previous flat fill—spot-check with Lighthouse on production when convenient.

## What shipped (code reference)

| Utility | Where applied |
|---------|----------------|
| `.card-ambient-surface` + `backdrop-blur-sm` | Hero main card + profile aside |
| `.pill-gradient-subtle` | All section label pills (Hero through Connect) + Schedule icon well |
| `.card-gradient-top` + `.card-ambient-surface` | Schedule + Connect main cards |
| `.btn-primary-gradient` | Hero primary, Schedule booking, Connect Reach out, Nav mobile CTA, MobileStickyCta primaries |
| `.quote-gradient-edge` | Story pull-quote (replaces flat `border-l-4`) |
