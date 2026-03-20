"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const scheduleUrl = process.env.NEXT_PUBLIC_SCHEDULE_URL?.trim();

function isPastHero(sentinel: HTMLElement | null): boolean {
  if (!sentinel) return false;
  return sentinel.getBoundingClientRect().bottom <= 0;
}

function isPrimaryCtaSectionVisible(): boolean {
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;
  const thresholdTop = vh * 0.22;
  const thresholdBottom = vh * 0.78;

  for (const id of ["schedule", "connect"] as const) {
    const el = document.getElementById(id);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    const overlapsComfort =
      r.top < thresholdBottom && r.bottom > thresholdTop;
    if (overlapsComfort) return true;
  }
  return false;
}

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  const update = useCallback(() => {
    const sentinel = document.getElementById("hero-sentinel");
    const past = isPastHero(sentinel);
    const inCta = isPrimaryCtaSectionVisible();
    setVisible(past && !inCta);
  }, []);

  useEffect(() => {
    let raf = 0;
    const runAfterPaint = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update());
    };
    runAfterPaint();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div
        className={`border-t border-[var(--border)] bg-[rgba(247,250,252,0.95)] backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(16,33,43,0.08)] ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="w-[min(calc(100%),var(--max))] mx-auto flex flex-row items-center justify-between gap-3">
          {scheduleUrl ? (
            <>
              <a
                href={scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3rem] flex-1 items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Book 15 min
              </a>
              <Link
                href="#connect"
                className="inline-flex min-h-[3rem] shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] shadow-[var(--shadow)] hover:border-[var(--accent)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Email
              </Link>
            </>
          ) : (
            <Link
              href="#connect"
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              Get in touch
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
