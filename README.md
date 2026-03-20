# Chien | Practical AI for Real Life

A personal clarity page — "AI Translator for Real Life." Answers: Who are you? What do you do? Who do you help? How do you think? How can someone reach out?

**Design**: Calm, modern, human-centered tech. Soft near-white background, deep slate/navy text, restrained blue accent. Mobile-first vertical scroll.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Testing on iPhone / same Wi‑Fi (dev)

The dev server listens on all interfaces by default (`0.0.0.0`). On your phone, open **`http://<your-mac-lan-ip>:3000`** (the “Network” URL Next prints in the terminal).

`allowedDevOrigins` in [`next.config.ts`](next.config.ts) includes **`localhost`**, **`127.0.0.1`**, and private LAN patterns (`192.168.*.*`, `10.*.*.*`). If your LAN uses another range (e.g. `172.16.x.x`), set hosts in `.env.local`:

```bash
ALLOWED_DEV_ORIGINS=172.16.0.5,another-host.local
```

Restart `npm run dev` after changing config or env.

### Visual QA (MCP / screenshots)

See **[docs/dev-visual-feedback.md](docs/dev-visual-feedback.md)** for using **Cursor IDE Browser** or **Playwright MCP** to navigate the running app, capture full-page screenshots, and tighten the design loop.

### Dev console / terminal noise

See **[docs/dev-console-notes.md](docs/dev-console-notes.md)** for what HMR, hydration, and Fast Refresh messages mean (and what you can ignore).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Replacing Placeholders

### Profile photo (Hero + social preview)

The headshot lives at **`public/asset/chien_head_shot.jpg`**. The Hero uses **`next/image`** with `priority` and a tight `sizes` attribute so the browser requests only ~104–132px-wide variants in the sidebar; in production Next serves **WebP/AVIF** automatically. Swap the file in place to update—no manual conversion needed.

For correct **Open Graph / Twitter** absolute URLs in production, set in Vercel (or `.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 15-minute booking (Cal.com / Calendly)

1. Create a **15-minute** event in [Cal.com](https://cal.com) or [Calendly](https://calendly.com).
2. Set in `.env.local` or Vercel:

   ```bash
   NEXT_PUBLIC_SCHEDULE_URL=https://cal.com/yourusername/15min
   ```

3. Redeploy. The **Schedule** section (before **Connect**) shows **Book 15 minutes** and opens in a new tab (works on phone).

Full walkthrough: **[docs/scheduling-setup.md](docs/scheduling-setup.md)**. Copy **[.env.example](.env.example)** to `.env.local` as a starting point.

### Use case imagery

Each **use case** card includes an **Unsplash** photo (four scenarios). Swap URLs in `src/components/UseCases.tsx` if you want different stock. See **[docs/example-stock-images.md](docs/example-stock-images.md)**.

### Contact Details

- **Email**: Edit `EMAIL` in `src/components/Connect.tsx`.
- **LinkedIn**: Replace the placeholder div with a Link component and your profile URL.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/heyitschien/ai-intergrator)

Or connect your GitHub repo in the [Vercel dashboard](https://vercel.com) for automatic deploys on push.

## CI

GitHub Actions runs on **every pull request** and on **pushes to `main`**: install, lint, build.

To **require CI before merging** into `main`, enable branch protection in GitHub (see **[docs/github-branch-protection.md](docs/github-branch-protection.md)**).

Screenshot-based design notes: **[docs/visual-analysis-from-screenshots.md](docs/visual-analysis-from-screenshots.md)**.
