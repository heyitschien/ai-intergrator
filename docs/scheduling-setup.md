# 15-minute chat — recommended setup

## Recommendation: **Cal.com** (best balance of simple + robust)

| Option | Why |
|--------|-----|
| **Cal.com** | Generous free tier, clean mobile booking, optional embed, works in any browser on phone, email reminders, timezone-aware, you can start with a hosted link in **seconds**. Open-source if you ever self-host. |
| **Calendly** | Equally bulletproof and familiar; slightly more “corporate” defaults. Fine if you already pay or prefer the brand. |
| **Google Appointment Schedules** | Fine if you live in Google Calendar; fewer branding options. |

**Through-proof checklist**

1. Use a **dedicated 15-minute** event type (clear expectation).
2. Paste the **public booking URL** into `NEXT_PUBLIC_SCHEDULE_URL` (Vercel → Environment Variables → Production + Preview).
3. Turn on **email confirmations** and **SMS reminders** in the scheduler (Cal.com / Calendly both support this).
4. Test on **your phone** in a private window: tap “Book 15 minutes” → complete flow → confirm it lands on your calendar.

## Steps (Cal.com)

1. Sign up at [cal.com](https://cal.com).
2. **Event types** → add **15 min** (or rename “Intro / explore ideas”).
3. Copy the public link (e.g. `https://cal.com/yourname/15min`).
4. In this repo, set:

   ```bash
   NEXT_PUBLIC_SCHEDULE_URL=https://cal.com/yourname/15min
   ```

5. Redeploy (or restart `npm run dev` locally).

The site opens this URL in a **new tab**—no fragile iframe, works with Face ID / password managers, and behaves like any other mobile web booking flow.

## If the env var is missing

The **Schedule** section still renders with **Email instead** and instructions so the page never looks “broken” in development.
