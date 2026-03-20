import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { FadeUp } from "./FadeUp";

const scheduleUrl = process.env.NEXT_PUBLIC_SCHEDULE_URL?.trim();

export function ScheduleChat() {
  return (
    <section
      className="py-[4.5rem] lg:py-24"
      id="schedule"
      aria-labelledby="schedule-heading"
    >
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow)] p-[1.35rem] md:p-8 md:flex md:items-center md:gap-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] mb-5 md:mb-0">
              <CalendarClock className="h-7 w-7" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
                15-minute chat
              </div>
              <h2
                id="schedule-heading"
                className="m-0 mt-3 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.5rem,3.5vw,2.15rem)] leading-[1.12] tracking-tight"
              >
                Prefer to talk it through? Book a short call.
              </h2>
              <p className="m-0 text-[var(--muted)] text-base max-w-[40rem]">
                No pitch deck—just a calm conversation about what you&apos;re trying to do (work, community, or daily
                life) and whether practical AI ideas could help. Works great on your phone: opens your scheduler in the
                browser or calendar app.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
                {scheduleUrl ? (
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.25rem] rounded-full font-semibold bg-[var(--accent)] text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition-colors"
                  >
                    Book 15 minutes
                  </a>
                ) : (
                  <p className="m-0 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[0.9rem] text-[var(--muted)] max-w-xl">
                    Add{" "}
                    <code className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 text-[0.8rem] text-[var(--text)]">
                      NEXT_PUBLIC_SCHEDULE_URL
                    </code>{" "}
                    in <strong>.env.local</strong> or Vercel to show the booking button. See{" "}
                    <span className="text-[var(--text)] font-medium">docs/scheduling-setup.md</span> in the repo.
                  </p>
                )}
                <Link
                  href="#connect"
                  className="inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.15rem] rounded-full font-semibold bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Email instead
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
