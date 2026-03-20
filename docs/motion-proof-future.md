# Motion proof (future)

**Motion proof** means showing—briefly—that *something happens*: a workflow, a before/after, or an outcome (e.g. rough notes → clear client summary). It answers “what does working together *look* like?” faster than a static image alone.

## When you’re ready

- Prefer **short WebM or MP4** (with a **poster** frame) over heavy GIFs for quality and file size.
- Aim for roughly **8–15 seconds** per loop, **muted**, **`playsInline`**, and consider **lazy loading** below the fold.
- **One** global clip (“how a call works”) or **one loop per use case**—pick what you can maintain.

## Accessibility

- Respect **`prefers-reduced-motion: reduce`**: do **not** autoplay loops; show the **poster / first frame** only, or hide the video and keep static imagery.
- The site already reduces motion for scroll and `FadeUp` in `src/app/globals.css`; future video should follow the same rule.

## Not required for launch

Static Unsplash (or other) imagery plus clear copy is enough to ship. Add motion proof when you have a real clip worth showing—not as a blocker.
