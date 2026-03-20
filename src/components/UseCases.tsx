import { Briefcase, GraduationCap, Palette, Workflow } from "lucide-react";
import { FadeUp } from "./FadeUp";

const useCases = [
  {
    number: "01",
    icon: Palette,
    title: "Helping a design business visualize ideas faster",
    description:
      "Using AI image workflows to show clients finish or style possibilities in their real space before work begins.",
  },
  {
    number: "02",
    icon: Briefcase,
    title: "Helping a small business improve workflow",
    description:
      "Finding simple ways AI can support intake, proposals, content creation, scheduling, or internal organization.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Helping individuals learn AI with confidence",
    description:
      "Showing students, seniors, or everyday users how to use AI tools in useful, understandable ways.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Helping creators turn ideas into systems",
    description:
      "Connecting writing, design, automation, and web tools into repeatable creative workflows.",
  },
];

export function UseCases() {
  return (
    <section className="py-[4.5rem] lg:py-24" id="use-cases">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
            Use cases
          </div>
          <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
            What this can look like in practice
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            A few examples of the kinds of practical support and ideas I enjoy sharing.
          </p>
        </FadeUp>

        <div className="grid gap-4 mt-6 sm:grid-cols-2">
          {useCases.map(({ number, icon: Icon, title, description }) => (
            <FadeUp key={number}>
              <article className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow)]">
                <div className="flex items-center gap-3 mb-[0.9rem]">
                  <div className="w-11 h-11 grid place-items-center rounded-[0.95rem] bg-[var(--accent-soft)] text-[var(--accent)] font-bold">
                    {number}
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--accent)]">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
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
