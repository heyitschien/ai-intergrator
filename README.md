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

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Replacing Placeholders

### Profile Photo

1. Add your profile image to `public/profile.jpg` (or another path).
2. Update the Hero component to use the image:

```tsx
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Chien"
  width={132}
  height={132}
  className="rounded-2xl object-cover"
/>
```

### Contact Details

- **Email**: Edit `EMAIL` in `src/components/Connect.tsx`.
- **LinkedIn**: Replace the placeholder div with a Link component and your profile URL.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/ai-intergrator)

Or connect your GitHub repo in the [Vercel dashboard](https://vercel.com) for automatic deploys on push.

## CI

GitHub Actions runs on push/PR to `main`:

- Lint
- Build
