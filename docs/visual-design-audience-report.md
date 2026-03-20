# Visual design & audience journey report

**Site:** Chien — Practical AI for Real Life (`/` landing)  
**Captured:** Full-page Playwright screenshots (FadeUp reveal waited ~1.5s after load)  
**Artifacts:**

| Viewport | File |
|----------|------|
| Mobile (390×844) | [`docs/visual/audit-fullpage-mobile-390.png`](visual/audit-fullpage-mobile-390.png) |
| Desktop (1440×900) | [`docs/visual/audit-fullpage-desktop-1440.png`](visual/audit-fullpage-desktop-1440.png) |

---

## 1. Visual design & color system

**Intent (from tokens):** “Peaceful intelligence” — calm, trustworthy, not “AI hype” neon or cyber aesthetics.

| Token | Role | Hex / note |
|-------|------|------------|
| `--text` | Primary copy | `#10212b` — deep blue-gray, strong contrast on light backgrounds |
| `--muted` | Supporting copy | `#52606d` — readable secondary without fighting the headline |
| `--accent` | CTAs, emphasis, nav focus | `#2563eb` — clear, familiar “trust blue” |
| `--accent-hover` | Button hover | `#1d4ed8` |
| `--accent-soft` | Pills, icon wells, subtle fills | `#eaf2ff` — ties sections together without heavy bands |
| `--bg` / body gradient | Page canvas | `#f7fafc` + gradient from `#fbfdff` — airy, not sterile white-only |
| `--warm` | Accent option | `#c08457` — available for human/warm touches (use sparingly if you want more “approachable” vs “corporate”) |
| `--border` | Cards, dividers | `#e6edf3` — light structure without harsh lines |
| Shadow | Card lift | Soft `rgba(16,33,43,0.06)` — premium without drama |

**Section rhythm:** `.section-alt` uses a **light blue wash gradient** instead of flat alternating gray blocks — sections read as related chapters, not disjointed strips.

**Assessment:** Palette is **accessible-minded** (dark text on light ground), **on-brand for “translator / guide”** positioning, and **distinct from flashy AI landing pages**. Opportunity: if you want more warmth for seniors/community audiences, introduce `--warm` in one recurring element (e.g. pill border or a single underline) so the page feels slightly less “SaaS default.”

---

## 2. Typography & visual hierarchy

- **Display:** Sora (`--font-display`) on H1/H2 — modern, slightly friendly authority.
- **Body:** Inter (`--font-sans`) — high legibility for long explanatory copy.
- **Hero H1:** Large clamp + **accent line** (“use AI in real life”) creates an instant **F-pattern** anchor: eye goes headline → blue span → primary paragraph.
- **Section pattern:** Repeated **small uppercase-style pill** (“What I help”, “Who I help”, …) + **Sora heading** + **muted lead** trains the user to scan: *label → promise → detail*.
- **Cards:** White/70 surfaces, border, soft shadow — **content blocks** read as “safe to read one at a time,” which helps anxious or non-technical visitors.

**Hierarchy score (client perspective):** **Strong.** A first-time visitor can answer “who is this?” and “what do I do next?” within one screen on desktop and ~1–2 scrolls on mobile.

---

## 3. Readability & ease of use

**Reading comfort**

- Body `line-height: 1.6` and constrained `max-width` on key paragraphs support **comfortable line length** (especially desktop).
- Muted color for secondary text **reduces wall-of-text fatigue** while keeping WCAG-ish contrast for core messaging (validate with a contrast checker on any future lighter tints).

**Interaction & wayfinding**

- **Sticky nav** with blur + border gives persistent orientation.
- **Desktop:** Inline nav to `#help`, `#audience`, `#approach`, `#use-cases`, `#story`, `#schedule`, `#connect` — logical **story order** matches scroll order.
- **Mobile:** Hamburger + same anchors — good; ensure menu closes on navigate (implemented).
- **Primary actions:** “See how I help” / “Get in touch” in hero; **Book 15 minutes** (when `NEXT_PUBLIC_SCHEDULE_URL` is set) + **Email instead** in schedule; Connect section for LinkedIn/email — **multiple paths without competing noise**.

**Ease of use risks (honest)**

- Long page is **appropriate for trust-building** but can feel long on mobile; the repeated pill/heading pattern helps, but **consider a floating “Book” or “Contact”** on small screens if analytics show drop-off before `#schedule`.
- If scheduling env var is **missing**, users see a **dashed dev-style notice** — fine for staging; **must be set in production** so the journey doesn’t dead-end visually.

---

## 4. Who the target audience is (from the page)

Explicit chips and copy point to:

- Small business owners  
- Designers and creators  
- Teachers and students  
- Seniors learning new tools  
- Community organizations  
- Curious individuals  

**Shared psychographic:** Wants **practical guidance**, **clarity over hype**, and a **human** guide who translates AI into **workflows and real life** — not demos for engineers.

---

## 5. Personas & journeys through the site

### Persona A — **Maya, small business owner (retail / studio)**

**Goal:** Save time without breaking operations; skeptical of AI vendors.  
**Journey:**

1. **Land (Hero)** — Sees “use AI in real life” and “AI translator”; relief that it’s not jargon-heavy. Clicks **See how I help** or scrolls.
2. **What I help** — Maps problems (life, work, creative) to her world; mentally checks “this isn’t only for developers.”
3. **Who I help** — Confirms **Small business owners** chip → *“I belong here.”*
4. **Approach** — “Practical first / No hype / Human in the loop” reduces fear of black-box AI.
5. **Use cases** — Scans cards for a story close to hers (workflow, client comms, etc.).
6. **Story** — Builds trust with background and “what to understand quickly.”
7. **Schedule / Connect** — Books **15 minutes** or uses **email** if she’s not ready to commit.

**Emotional arc:** Skeptical → recognized → calmer → willing to try a small step.

---

### Persona B — **Robert, senior learning new tools**

**Goal:** Understand what’s safe and useful; afraid of “breaking something.”  
**Journey:**

1. **Hero** — Short subhead about “clear, practical steps” is reassuring; headshot humanizes.
2. **Profile card** — “How I like to help” / “Mindset” reinforces patience and listening.
3. **Who I help** — **Seniors learning new tools** chip is direct validation.
4. **Approach** — Numbered, simple steps easier than dense paragraphs.
5. **Use cases** — Pictures + titles support scanning if reading is tiring.
6. **Connect** — May prefer **email** or phone-adjacent comfort; scheduling copy mentions phone/calendar — good alignment.

**Friction to watch:** Small tap targets in dense areas; your **min-height ~3.15rem** buttons are a strength. If feedback says “too much text,” shorten **Story** for mobile or collapse subsections.

---

### Persona C — **Jordan, teacher / community organizer**

**Goal:** Bring AI to others responsibly (classroom, nonprofit); needs ethics-adjacent clarity.  
**Journey:**

1. **Hero footnote** — “students, teachers, seniors, community” signals inclusive scope.
2. **What I help** — Looks for productivity + communication framing (not “replace people”).
3. **Who I help** — **Teachers and students** + **Community organizations** chips.
4. **Use cases** — Looks for scenarios that mirror programming, volunteers, or content workflows.
5. **Story** — Checks credibility and values before advocating internally.
6. **Schedule** — May book to discuss **group** or **workshop**-style needs (copy could later hint at that if offered).

**Opportunity:** One line in **Who I help** or **Schedule** about “groups / workshops” (only if true) would shorten Jordan’s path from interest to contact.

---

## 6. Summary verdict

| Dimension | Rating | Note |
|-----------|--------|------|
| Visual identity | **Strong** | Calm, professional, distinct from hype-driven AI sites |
| Color & contrast | **Strong** | Coherent blues + neutrals; optional warmth for softer audiences |
| Hierarchy | **Strong** | Clear H1 → sections → cards; repeated scan pattern |
| Readability | **Strong** | Type pairing and spacing support skimming and deep read |
| Ease of use | **Good** | Nav + CTAs aligned; mobile length and prod scheduling URL are the main UX caveats |
| Audience fit | **Strong** | Chips and copy explicitly welcome non-technical and community users |

---

## 7. Recommended next checks (optional)

- For a future **short video / motion loop** (when you have assets), see [motion-proof-future.md](motion-proof-future.md).
- Run **Lighthouse** / **axe** on production URL for contrast and focus order; see [a11y-notes.md](a11y-notes.md) for local contrast notes.  
- Set **`NEXT_PUBLIC_SCHEDULE_URL`** in prod and re-capture screenshots with the live button.  
- If bounce is high on mobile before mid-page, A/B a **compact sticky CTA** (Book / Email).

---

*Generated from codebase tokens (`src/app/globals.css`), section copy (`src/components/*`), and full-page captures in `docs/visual/`.*
