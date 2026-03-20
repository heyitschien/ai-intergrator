"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-in reveal. Content must never stay invisible if IO fails.
 * Safari/WebKit can throw on oversized rootMargin — we try smaller margins, then observer-less fallback.
 */
function reveal(el: HTMLElement) {
  el.classList.add("visible");
}

function tryCreateObserver(
  callback: IntersectionObserverCallback,
  rootMargins: string[]
): IntersectionObserver | null {
  for (const rootMargin of rootMargins) {
    try {
      return new IntersectionObserver(callback, { threshold: 0, rootMargin });
    } catch {
      /* next */
    }
  }
  return null;
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

    const isLikelyInView = () => {
      const rect = el.getBoundingClientRect();
      const h = vh();
      return rect.top < h + 80 && rect.bottom > -40;
    };

    if (isLikelyInView()) {
      reveal(el);
      return;
    }

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    };

    // Smaller margins first for Safari; % is valid where px caps fail.
    const observer =
      tryCreateObserver(onIntersect, [
        "0px 0px 200% 0px",
        "0px 0px 1500px 0px",
        "0px 0px 500px 0px",
        "0px 0px 0px 0px",
      ]) ?? null;

    if (observer) {
      observer.observe(el);
    }

    const fallback = window.setTimeout(() => {
      reveal(el);
      observer?.disconnect();
    }, 600);

    return () => {
      window.clearTimeout(fallback);
      observer?.disconnect();
    };
  }, []);

  return <div ref={ref} className="fade-up">{children}</div>;
}
