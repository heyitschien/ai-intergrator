# Production checklist

Use this before and right after you point a **real domain** at the app (e.g. Vercel). Check boxes as you go.

## Pre-deploy (code & CI)

- [ ] **`npm run lint`** and **`npm run build`** pass locally (or rely on GitHub Actions on `main`).
- [ ] Latest changes are **committed and pushed** to the branch Vercel deploys (usually `main`).
- [ ] **No secrets** in the repo (only `.env.example` documents vars; real values live in Vercel / `.env.local`).

## Environment variables (Vercel → Project → Settings → Environment Variables)

Set for **Production** (and Preview if you want OG URLs correct on preview deploys):

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** for production | Canonical URL for Open Graph / Twitter cards (e.g. `https://yourdomain.com`). Must match your live domain (no trailing slash). |
| `NEXT_PUBLIC_SCHEDULE_URL` | Recommended | Cal.com / Calendly **15‑min** link; powers **Book 15 min** in nav-adjacent sections and sticky mobile CTA. |
| `ALLOWED_DEV_ORIGINS` | Dev only | Not needed in production. |

After changing env vars, trigger a **redeploy** (Redeploy in Vercel or an empty commit).

## Content & contact

- [ ] **[`src/components/Connect.tsx`](../src/components/Connect.tsx)** — real **email** and **LinkedIn** (replace placeholders).
- [ ] **`public/asset/chien_head_shot.jpg`** — final headshot for Hero, nav, and OG image.
- [ ] **Display name** — [`src/lib/site.ts`](../src/lib/site.ts) `SITE_DISPLAY_NAME` matches how you want to appear publicly.

## Vercel / hosting

- [ ] Project **connected to GitHub**; **Production Branch** = `main` (or your choice).
- [ ] **Custom domain** added (see [Vercel domains](https://vercel.com/docs/concepts/projects/domains)); DNS records applied and **SSL** shows valid.
- [ ] **`NEXT_PUBLIC_SITE_URL`** updated to the **same** custom domain you configured.

## Post-deploy smoke test (production URL)

- [ ] Home loads; **no** obvious console errors (open DevTools).
- [ ] **Nav**: scroll down/up (hide/show), mobile menu, skip link, focus trap.
- [ ] **Book 15 min** / **Get in touch** / **Email** paths work; scheduler opens if URL set.
- [ ] **Social preview**: share debugger — [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or X equivalent) — image and title look correct.
- [ ] **Mobile**: sticky bottom CTA, safe area, tap targets.
- [ ] Optional: **Lighthouse** (Performance / Accessibility) on the live URL.

## Optional hardening

- [ ] GitHub **branch protection** on `main` (require CI): [github-branch-protection.md](github-branch-protection.md).
- [ ] **Analytics** (Vercel Analytics, Plausible, etc.) if you want traffic data.
- [ ] **Privacy policy / contact** page if you collect data or run ads.

---

## Domain name ideas (suggestions)

Pick something **short, sayable, and easy to spell**. Prefer **`.com`** or **`.com` + your brand** if available.

| Direction | Examples (check availability) |
|-----------|-------------------------------|
| Personal brand | `chienescalera.com`, `chien-duong.com`, `chienescaleraduong.com` (longer) |
| Matches GitHub vibe | `heyitschien.com` |
| Topic + clarity | `practicalairealife.com`, `useaiirl.com`, `aireallife.com` |
| Short + tech | `chien.ai`, `chien.dev`, `chien.works` (TLD availability varies) |
| Initials / combo | `ced.ai`, `cedconsulting.com` (only if it fits your positioning) |

**Tip:** Buy the domain from your registrar, then in Vercel **Settings → Domains** add it and follow DNS instructions. Set `NEXT_PUBLIC_SITE_URL` to `https://` + that exact hostname.

---

## Checklist run log (fill in when you ship)

| Date | Deploy URL | Checked by | Notes |
|------|------------|------------|-------|
|      |            |            |       |
