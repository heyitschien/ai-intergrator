# Visual analysis (mobile screenshots in `docs/visual/`)

Synthesis of your captures (Connect, Approach, Use cases, Story, Quick snapshot) against the goal: **calm, human-centered, scannable, psychologically coherent** — “who is this, do I trust them, is this for me?”

## What’s already strong (industry-aligned)

| Pattern | Why it works |
|--------|----------------|
| **Sticky header + single primary CTA** | Familiar SaaS/landing pattern; low decision fatigue. |
| **Eyebrow pills + H2 + gray body** | Clear hierarchy; matches how people scan in an F-pattern. |
| **Card-based sections** | Chunking reduces cognitive load (Miller / progressive disclosure). |
| **Warm quote strip** | Breaks “cold tech” tone; supports *parasocial trust* before contact. |
| **Generous spacing** | Reads as premium and intentional, not cluttered. |

## Gaps the screenshots surfaced

1. **Mobile wayfinding** — Long one-pagers work, but without section links users rely on scroll alone. A lightweight **menu** (or sticky mini-nav) answers “where am I?” and supports **task-based visitors** (jump to Connect). *Implemented: mobile section menu + full nav links including Approach & Examples.*

2. **Avatar = “C”** — Abstract letter reads as placeholder, not identity. A **real headshot** in the bar increases *recognition and trust* (consistent with executive brief: human, not corporate). *Implemented: same headshot as Hero.*

3. **Visual sameness mid-page** — Numbered blocks and text-only snapshot cards are clear but **uniform**. Differentiating with **small, meaningful icons** improves scan speed without adding noise. *Implemented: icons on use cases, approach, snapshot.*

4. **“Proof” before contact** — Overview doc stresses *real examples*. Screens showed strong copy but **no visual proof strip**. A dedicated **Examples** block with image placeholders creates a slot for before/after or workflow shots. *Implemented: `RealExamples` section.*

5. **Motion & accessibility** — Fade-on-scroll is nice; some users need **reduced motion**. *Implemented: `prefers-reduced-motion` for scroll + fade-up.*

## Coherence checklist (ongoing)

- [ ] Replace example placeholders with 2–3 real images when ready.
- [ ] Set real **email + LinkedIn** in Connect.
- [ ] Optional: dedicated **1200×630 OG image** for link previews (cropped hero or branded panel).
- [ ] Optional: one **short testimonial** line under snapshot or Connect.

## One-page vs mobile nav (answer)

**Scrolling alone is valid** for a short story arc. **Section navigation still helps** when people arrive with intent (“I only want contact”) or when the page grows. A compact **menu** is low cost and matches user mental models for long mobile pages.
