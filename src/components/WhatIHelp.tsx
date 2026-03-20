import { Sparkles, Building2, Palette } from "lucide-react";
import { FadeUp } from "./FadeUp";

const cards = [
  {
    icon: Sparkles,
    title: "AI for everyday life",
    description:
      "I help people understand how AI can support learning, planning, communication, and daily tasks without making it feel overwhelming.",
  },
  {
    icon: Building2,
    title: "AI for small businesses",
    description:
      "I look for practical ways AI can improve workflows, client communication, content, organization, and decision-making.",
  },
  {
    icon: Palette,
    title: "AI for creative and technical projects",
    description:
      "I enjoy connecting design, web, automation, and emerging tools to build things that are clear, useful, and beautiful.",
  },
];

export function WhatIHelp() {
  return (
    <section className="py-[4.5rem] lg:py-24" id="help">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
            What I help with
          </div>
          <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
            Practical support across life, work, and creative projects
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            I&apos;m most interested in the practical layer of AI — how it can reduce friction, improve clarity, and help
            people move forward in real situations.
          </p>
        </FadeUp>

        <div className="grid gap-4 mt-6 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <FadeUp key={title}>
              <article className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow)]">
                <div className="w-11 h-11 grid place-items-center rounded-[0.95rem] bg-[var(--accent-soft)] text-[var(--accent)] mb-[0.9rem]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="m-0 mb-[0.45rem] text-[1.1rem] leading-tight">{title}</h3>
                <p className="m-0 text-[var(--muted)] text-[0.96rem]">{description}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
