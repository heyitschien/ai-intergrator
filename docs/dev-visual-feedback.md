# Visual feedback loop for this project

Use this when you want the model (or yourself) to **see** the UI, not just read code.

## 1. Cursor IDE Browser MCP (`cursor-ide-browser`)

Best for **interactive** checks inside Cursor.

1. Run `npm run dev`.
2. Ask the agent to: navigate → `http://localhost:3000` → **snapshot** (accessibility tree + element refs) → optional **screenshot** if the tool supports it.
3. Resize the viewport (mobile vs desktop) and repeat.

**Pros:** Tight loop with the editor. **Cons:** Depends on the MCP server being enabled and a browser tab.

## 2. Playwright MCP (`user-playwright`)

Best for **saved screenshots** and automation.

1. Start dev server (`npm run dev`).
2. Use tools such as **`browser_navigate`** → **`browser_resize`** (e.g. iPhone / 1280px) → **`browser_take_screenshot`** (`fullPage: true` for the whole landing page).
3. Save artifacts under something like `docs/qa-screenshots/` (gitignored if you prefer) for before/after comparisons.

**Pros:** Full-page PNGs, repeatable. **Cons:** Requires Playwright browser install if not already done (`browser_install` if the server exposes it).

## 3. Production-style checks

- **`npm run build` + `npm run start`** — verify optimized images and prod behavior.
- **Lighthouse** (Chrome DevTools) — LCP, CLS, performance — after deploying or locally on `:3000`.

## 4. Optional CI (later)

Add Playwright or a screenshot diff tool in GitHub Actions for regression testing on PRs — heavier setup, good once the design stabilizes.

## Suggested agent prompt

> Dev server is on port 3000. Open the home page, take a full-page screenshot at 390px and 1280px width, then suggest concrete UI improvements aligned with “calm, human-centered, mobile-first.”
