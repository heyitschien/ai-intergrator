"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADSHOT_PATH, SECTION_LINKS, SITE_DISPLAY_NAME } from "@/lib/site";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
  );
}

const navLinkClass =
  "uppercase tracking-[0.08em] text-[0.68rem] font-semibold text-[var(--muted)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:rounded-sm";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevOpenRef = useRef(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPrefersReducedMotion(mq.matches);
    queueMicrotask(apply);
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--header-pad", "4.75rem");
      return;
    }
    const pad = hidden ? "0px" : "4.75rem";
    document.documentElement.style.setProperty("--header-pad", pad);
  }, [hidden, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastScrollY.current;

        if (open) {
          setHidden(false);
        } else if (y < 40) {
          setHidden(false);
        } else if (delta > 10) {
          setHidden(true);
        } else if (delta < -8) {
          setHidden(false);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, prefersReducedMotion]);

  useEffect(() => {
    if (!open) {
      if (prevOpenRef.current) {
        menuButtonRef.current?.focus();
      }
      prevOpenRef.current = false;
      return;
    }

    prevOpenRef.current = true;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = getFocusable(panel);
    const first = focusable[0];
    queueMicrotask(() => first?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = getFocusable(panel);
      if (nodes.length === 0) return;

      const firstEl = nodes[0];
      const lastEl = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === firstEl || !panel.contains(active)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else if (active === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barHidden = hidden && !open && !prefersReducedMotion;
  const headerMotionClass = prefersReducedMotion ? "" : "transition-transform duration-300 ease-out";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-[18px] bg-[rgba(247,250,252,0.92)] border-b border-[rgba(230,237,243,0.85)] ${headerMotionClass} ${
        barHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto flex items-center justify-between min-h-[4.75rem] gap-2 sm:gap-3">
        <Link
          href="#top"
          aria-label={`${SITE_DISPLAY_NAME} home`}
          className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink pr-1"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-[0.9rem] border border-[var(--border)] shadow-[var(--shadow)] ring-2 ring-white/80 bg-[var(--accent-soft)]">
            <Image
              src={HEADSHOT_PATH}
              alt=""
              fill
              className="object-cover object-top"
              sizes="44px"
              priority
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center min-w-0 gap-0.5">
            <span className="nav-brand-gradient text-[0.95rem] leading-[1.15] font-bold tracking-tight sm:text-[1.05rem] lg:text-[1.125rem] xl:text-[1.1875rem] line-clamp-2 min-[380px]:line-clamp-none min-[380px]:whitespace-nowrap">
              {SITE_DISPLAY_NAME}
            </span>
            <small className="text-[var(--muted)] text-[0.7rem] sm:text-[0.75rem] lg:text-[0.8125rem] font-medium leading-snug tracking-normal truncate">
              practical ai for real life
            </small>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-4 xl:gap-5"
          aria-label="Main navigation"
        >
          {SECTION_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            ref={menuButtonRef}
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
            className="hidden sm:inline-flex items-center justify-center py-[0.78rem] px-4 rounded-full border border-[var(--border)] bg-[var(--surface)] font-semibold shadow-[var(--shadow)] hover:border-[var(--accent)]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 uppercase tracking-[0.07em] text-[0.72rem]"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-nav-panel"
          className="lg:hidden border-t border-[var(--border)] bg-[rgba(247,250,252,0.98)] backdrop-blur-md max-h-[min(70vh,calc(100dvh-4.75rem))] overflow-y-auto"
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
                className="rounded-xl px-4 py-3 text-[var(--text)] font-semibold uppercase tracking-[0.08em] text-[0.75rem] hover:bg-[var(--accent-soft)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#connect"
              className="btn-primary-gradient mt-2 mx-4 mb-2 inline-flex items-center justify-center py-3 px-4 rounded-full font-semibold uppercase tracking-[0.07em] text-[0.75rem] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
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
