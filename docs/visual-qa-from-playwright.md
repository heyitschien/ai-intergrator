# Visual QA (Playwright + accessibility snapshot)

Captured after this update with Playwright against `http://127.0.0.1:3000` (local dev). Full-page PNGs:

- [`docs/visual/qa-desktop-1280.png`](visual/qa-desktop-1280.png) — 1280×900 viewport  
- [`docs/visual/qa-mobile-390.png`](visual/qa-mobile-390.png) — 390×844 viewport  

> **Note:** Automated “describe this screenshot” models often misread long, narrow full-page PNGs (hallucinated nav labels). The **accessibility tree** from the same session was used as the source of truth below.

### Why full-page MCP screenshots looked “empty” (fixed)

`FadeUp` used `opacity: 0` until `IntersectionObserver` fired. In **headless Playwright**, the **viewport** is short (e.g. 844px tall) while the **document** is much taller. Blocks **below the fold** never intersected the viewport, so they **never got `.visible`** — the screenshot looked like a blank strip between header and footer, while the Unsplash footnote (outside `FadeUp`) still showed.

**Fix:** `useLayoutEffect` in-view reveal, IO with **Safari-safe `rootMargin` fallbacks** (percent + stepped px; very large px threw in WebKit), and a **600ms fallback** that always adds `.visible`.

## What verified correctly (tree)

- **Landmarks:** `banner`, `main`, `contentinfo`; region for Schedule (Examples merged into use cases).
- **Use cases:** Four articles, each with **photo + scenario** (`img` alt text per card).
- **Schedule:** `h2` “Prefer to talk it through? Book a short call.” + primary/secondary actions (env-driven booking vs **Email instead** → `#connect`).
- **Connect:** Email + LinkedIn block + CTAs unchanged.
- **Nav (mobile width):** Menu button + **Get in touch**; desktop snapshot shows full inline section links including **Book 15 min** → `#schedule`.

## Console noise (dev only)

- `WebSocket` errors to Turbopack HMR on `127.0.0.1` — expected in dev when the tooling expects a different host; **not** a production concern.
- React DevTools info message — benign.

## Recommended visual / UX polish (next iteration)

1. **Schedule fallback (no env):** On narrow screens, the dashed “add `NEXT_PUBLIC_SCHEDULE_URL`” copy is long. Consider a **single-line** version under `sm` or collapsible “Setup” `<details>` so the block stays scannable.
2. **Use case photos:** Four images; **CLS** stays low with fixed `aspect-[4/3]` + `fill`. Optional hairline above the Unsplash footnote.
3. **Conversion path:** After `SCHEDULE_URL` is set, mirror **Book 15 minutes** once in the **Connect** card as a tertiary link for people who scroll straight to the bottom.
4. **Performance:** If Lighthouse flags LCP, add `priority` only to the **first** use case image (keep others default lazy).

## Psychological flow (sanity check)

Identity (Hero) → Capability (What I help) → Audience → Approach → **Use cases (scenarios + photos)** → Story → **Schedule** → **Connect**. Matches “clarity engine” intent: understand → trust → act.
