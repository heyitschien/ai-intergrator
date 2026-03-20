"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADSHOT_PATH, SECTION_LINKS } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-[18px] bg-[rgba(247,250,252,0.88)] border-b border-[rgba(230,237,243,0.8)]">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto flex items-center justify-between min-h-[4.25rem] gap-3">
        <Link
          href="#top"
          aria-label="Chien home"
          className="flex items-center gap-[0.85rem] font-bold min-w-0"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[0.85rem] border border-[var(--border)] shadow-[var(--shadow)] ring-2 ring-white/80 bg-[var(--accent-soft)]">
            <Image
              src={HEADSHOT_PATH}
              alt=""
              fill
              className="object-cover object-top"
              sizes="36px"
              priority
              aria-hidden
            />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="truncate">Chien</span>
            <small className="mt-[0.15rem] text-[var(--muted)] text-[0.72rem] font-medium truncate">
              Practical AI for real life
            </small>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-5 text-[var(--muted)] text-[0.95rem] [&_a:hover]:text-[var(--text)] [&_a:focus-visible]:outline-none [&_a:focus-visible]:ring-2 [&_a:focus-visible]:ring-[var(--accent)] [&_a:focus-visible]:ring-offset-2 [&_a:focus-visible]:rounded-sm"
          aria-label="Main navigation"
        >
          {SECTION_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] hover:bg-[var(--accent-soft)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open section menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>

          <Link
            href="#connect"
            className="hidden sm:inline-flex items-center justify-center py-[0.78rem] px-4 rounded-full border border-[var(--border)] bg-[var(--surface)] font-semibold shadow-[var(--shadow)] hover:border-[var(--accent)]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t border-[var(--border)] bg-[rgba(247,250,252,0.98)] backdrop-blur-md max-h-[min(70vh,calc(100dvh-4.5rem))] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Page sections"
        >
          <nav
            className="w-[min(calc(100%-2rem),var(--max))] mx-auto py-4 flex flex-col gap-1"
            aria-label="Mobile section links"
          >
            {SECTION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl px-4 py-3 text-[var(--text)] font-medium hover:bg-[var(--accent-soft)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#connect"
              className="mt-2 mx-4 mb-2 inline-flex items-center justify-center py-3 px-4 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
