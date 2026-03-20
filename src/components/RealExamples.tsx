import { FadeUp } from "./FadeUp";
import { ImageIcon, LayoutGrid, Sparkles } from "lucide-react";

const examples = [
  {
    icon: ImageIcon,
    title: "Before / after visuals",
    description:
      "Show clients a clear visual direction — finish options, layout ideas, or style directions — before committing time and budget.",
    caption: "Placeholder: swap in your real before/after frames.",
  },
  {
    icon: LayoutGrid,
    title: "Simple repeatable workflows",
    description:
      "Turn scattered steps into a calm sequence: intake → draft → review → deliver — with AI supporting each step without adding noise.",
    caption: "Placeholder: screenshot or diagram of a workflow.",
  },
  {
    icon: Sparkles,
    title: "Real situations, not hype",
    description:
      "Each example ties to a person or business outcome: less confusion, faster alignment, more confidence using the tools.",
    caption: "Placeholder: photo or UI snippet from a real project.",
  },
];

export function RealExamples() {
  return (
    <section
      className="py-[4.5rem] lg:py-24 section-alt"
      id="examples"
      aria-labelledby="examples-heading"
    >
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
            Real examples
          </div>
          <h2
            id="examples-heading"
            className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight"
          >
            What “practical AI” looks like in the wild
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            A few visual slots for real outcomes — workflows, client visuals, and everyday wins. Replace placeholders
            when you have assets; the story stays the same: clarity, usefulness, and a human pace.
          </p>
        </FadeUp>

        <div className="grid gap-4 mt-6 md:grid-cols-3">
          {examples.map(({ icon: Icon, title, description, caption }) => (
            <FadeUp key={title}>
              <article className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--accent-soft)] via-white to-[#f3e9df]/80 border-b border-[var(--border)] flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[var(--border)] shadow-sm grid place-items-center text-[var(--accent)]">
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <span className="text-[0.78rem] font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Image placeholder
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="m-0 mb-2 text-[1.1rem] leading-tight">{title}</h3>
                  <p className="m-0 text-[var(--muted)] text-[0.96rem] flex-1">{description}</p>
                  <p className="mt-3 m-0 text-[0.82rem] text-[var(--accent)] font-medium">{caption}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
