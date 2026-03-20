# Accessibility notes

## Contrast (spot check)

- **`--text` (`#10212b`) on `--surface` / `--bg`:** strong; suitable for body and headings.
- **`--muted` (`#52606d`) on `#ffffff`:** ~5.7:1 for normal text — passes WCAG 2.1 AA for body copy (~4.5:1).
- Re-check if you lighten `--muted` or place small muted text on tinted backgrounds (e.g. `--accent-soft`).

## What we added

- **Skip link** to `#top` on `main` (with `tabIndex={-1}` so the target can receive focus after activation).
- **Mobile nav:** focus moves to the first link when the menu opens; **Tab** cycles within the panel; **Shift+Tab** wraps; **Escape** closes and focus returns to the menu button.

## Ongoing checks

- Run **Lighthouse** (Accessibility) on `/` after meaningful UI changes.
- Test with **VoiceOver** / **TalkBack** on mobile nav and sticky CTA.
