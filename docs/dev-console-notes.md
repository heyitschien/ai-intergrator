# What you’re seeing in the console (dev)

## Terminal (`npm run dev`)

| Message | Meaning |
|--------|---------|
| **`GET / 200`** | Normal — page served OK. |
| **`Blocked cross-origin request … /_next/webpack-hmr` from `127.0.0.1`** | You opened the app as **`localhost`** but HMR used **`127.0.0.1`**. Fixed in `next.config.ts` via **`allowedDevOrigins`** (`127.0.0.1`, `localhost`, plus LAN patterns). Restart dev after config changes. |
| **`Reload env: .env`** | Next picked up env changes — normal. |
| **`Fast Refresh … full reload` (e.g. `image-component.js`)** | Dev-only: some dependency edits force a full reload. Not a production issue. |

## Browser (DevTools)

| Message | Meaning |
|--------|---------|
| **Hydration mismatch on `<html>` + `__gchrome_remoteframetoken`** | Almost always a **Chrome extension** injecting an attribute before React hydrates. **Not from your app code.** Try Incognito with extensions off to confirm. Production visitors without that extension won’t see it. |
| **`IntersectionObserver`: `rootMargin must be…`** | Was caused by a **Safari/WebKit** quirk with very large pixel margins. **`FadeUp`** now tries **percent + smaller px** margins and falls back safely. |

## Production (`npm run build` + `npm start` or Vercel)

You should **not** see HMR, Fast Refresh, or most hydration dev overlay noise. Use **Lighthouse** or **Safari Web Inspector** on the deployed URL for real checks.
