import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { FadeUp } from "./FadeUp";

const EMAIL = "hello@example.com";

export function Connect() {
  return (
    <section className="py-[4.5rem] lg:py-24 section-alt" id="connect">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="card-gradient-top card-ambient-surface border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow)] p-[1.35rem]">
            <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full pill-gradient-subtle text-[0.82rem] font-semibold tracking-wide">
              Let&apos;s connect
            </div>
            <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
              Open to thoughtful conversations and practical ideas
            </h2>
            <p className="m-0 text-[var(--muted)]">
              If you&apos;re exploring how AI could support your work, your organization, or your daily life, I&apos;m always happy
              to share ideas and point you toward practical next steps.
            </p>

            <div className="grid gap-[0.85rem] mt-5">
              <Link
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
              >
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block mb-[0.2rem]">Email</strong>
                  <span className="text-[var(--muted)] text-[0.95rem]">{EMAIL}</span>
                </div>
              </Link>
              <div className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)]">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block mb-[0.2rem]">LinkedIn</strong>
                  <span className="text-[var(--muted)] text-[0.95rem]">Add your LinkedIn profile here</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[0.85rem] mt-5 md:flex-row md:flex-wrap">
              <Link
                href={`mailto:${EMAIL}`}
                className="btn-primary-gradient inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.15rem] rounded-full font-semibold border hover:-translate-y-px transition-all"
              >
                Reach out
              </Link>
              <Link
                href="#top"
                className="inline-flex items-center justify-center gap-2 min-h-[3.15rem] py-[0.95rem] px-[1.15rem] rounded-full font-semibold bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:-translate-y-px transition-all"
              >
                Back to top
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
