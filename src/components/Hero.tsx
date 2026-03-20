import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "./FadeUp";
import { HEADSHOT_PATH, SITE_DISPLAY_NAME } from "@/lib/site";

export function Hero() {
  return (
    <section className="py-8 pb-16 md:py-10 md:pb-20">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <FadeUp>
          <div className="p-5 md:p-7 card-ambient-surface backdrop-blur-sm border border-[var(--border)] shadow-[var(--shadow)] rounded-[var(--radius-xl)]">
            <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full pill-gradient-subtle text-[0.82rem] font-semibold tracking-wide">
              AI, technology, and practical problem solving
            </div>
            <h1 className="mt-4 mb-2 font-[family-name:var(--font-sora)] text-[clamp(2.25rem,9vw,4rem)] leading-[0.98] tracking-tight">
              Helping people and businesses{" "}
              <span className="block text-[var(--accent)]">use AI in real life</span>
            </h1>
            <p className="m-0 mb-4 text-[var(--text)] text-[1.05rem] font-medium max-w-[38rem] leading-snug">
              AI translator for real life — I help turn complex tools into clear, practical steps you can actually use.
            </p>
            <p className="m-0 text-[var(--muted)] text-[1.02rem] max-w-[38rem]">
              I&apos;m {SITE_DISPLAY_NAME} — a technologist who enjoys turning AI into practical, helpful tools for everyday life,
              creative work, and small business workflows. I care about making technology feel clear, useful,
              and human.
            </p>

            <div className="flex flex-col gap-[0.85rem] mt-6 md:flex-row md:flex-wrap">
              <Link
                href="#help"
                className="btn-primary-gradient inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.15rem] rounded-full font-semibold border hover:-translate-y-px transition-all"
              >
                See how I help
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.15rem] rounded-full font-semibold bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:-translate-y-px transition-all"
              >
                Get in touch
              </Link>
            </div>

            <p className="mt-4 text-[var(--muted)] text-[0.92rem]">
              Practical ideas for business owners, students, teachers, seniors, and curious people trying to use AI well.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <aside
            className="p-5 md:p-7 card-ambient-surface backdrop-blur-sm border border-[var(--border)] shadow-[var(--shadow)] rounded-[var(--radius-xl)] grid gap-4"
            aria-label="Profile summary card"
          >
            <div className="grid grid-cols-[104px_1fr] lg:grid-cols-[132px_1fr] items-center gap-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] bg-[var(--accent-soft)]">
                <Image
                  src={HEADSHOT_PATH}
                  alt={`${SITE_DISPLAY_NAME} — technologist helping people use AI in practical, human ways`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 104px, 132px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h2 className="m-0 text-lg sm:text-xl leading-snug">{SITE_DISPLAY_NAME}</h2>
                <p className="m-[0.35rem_0_0] text-[var(--muted)] text-[0.95rem]">
                  Technologist, builder, and translator of AI into practical workflows people can actually use.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]">
                <strong className="block mb-1 text-[0.95rem]">What I&apos;m strong at</strong>
                <p className="m-0 text-[var(--muted)] text-[0.92rem]">
                  Turning AI ideas into useful workflows, clear communication, and real-world application.
                </p>
              </div>
              <div className="p-4 rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]">
                <strong className="block mb-1 text-[0.95rem]">How I like to help</strong>
                <p className="m-0 text-[var(--muted)] text-[0.92rem]">
                  By listening, simplifying, exploring tools, and finding approaches that feel practical and human.
                </p>
              </div>
              <div className="p-4 rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]">
                <strong className="block mb-1 text-[0.95rem]">Where this is useful</strong>
                <p className="m-0 text-[var(--muted)] text-[0.92rem]">
                  Small businesses, community learning, creative work, personal productivity, and everyday life.
                </p>
              </div>
              <div className="p-4 rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]">
                <strong className="block mb-1 text-[0.95rem]">Mindset</strong>
                <p className="m-0 text-[var(--muted)] text-[0.92rem]">
                  Less hype. More clarity, usefulness, beauty, and better decisions.
                </p>
              </div>
            </div>
          </aside>
        </FadeUp>
      </div>
      {/* Sentinel for MobileStickyCta: show bar only after user scrolls past hero */}
      <div
        id="hero-sentinel"
        className="h-px w-full shrink-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
