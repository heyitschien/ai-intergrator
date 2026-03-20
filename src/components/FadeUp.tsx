"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-in reveal. Important: content must never stay invisible if IO fails
 * (mobile Safari quirks, headless Playwright with a short viewport, etc.).
 */
function reveal(el: HTMLElement) {
  el.classList.add("visible");
}

export function FadeUp({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      reveal(el);
      return;
    }

    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    /** True if the block is already on-screen (or just above the fold). */
    const isLikelyInView = () => {
      const rect = el.getBoundingClientRect();
      const h = vh();
      return rect.top < h + 80 && rect.bottom > -40;
    };

    if (isLikelyInView()) {
      reveal(el);
      return;
    }

    // Large bottom margin so long pages still “intersect” on first paint (fixes MCP / full-page screenshots).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        // Tall pages: expand root downward so below-the-fold blocks still intersect on first check
        // (fixes headless screenshots + some mobile IO edge cases). 8000px ≈ several mobile scroll heights.
        rootMargin: "0px 0px 8000px 0px",
      }
    );

    observer.observe(el);

    // Last resort: never leave users (or tools) on a blank page.
    const fallback = window.setTimeout(() => {
      reveal(el);
      observer.disconnect();
    }, 600);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="fade-up">{children}</div>;
}
