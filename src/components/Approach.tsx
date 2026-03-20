import { FadeUp } from "./FadeUp";

const principles = [
  {
    number: 1,
    title: "Start with the real problem",
    description: "The best AI use cases begin with a real friction point, not a trendy tool.",
  },
  {
    number: 2,
    title: "Use the simplest useful workflow",
    description: "The best solution is usually the one people will actually use consistently.",
  },
  {
    number: 3,
    title: "Keep the human in the center",
    description: "AI should support judgment, creativity, and connection — not replace them.",
  },
];

export function Approach() {
  return (
    <section className="py-[4.5rem] lg:py-24" id="approach">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="p-[1.35rem] bg-gradient-to-b from-white/92 to-white/78 border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow)]">
            <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
              My approach
            </div>
            <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
              AI should make life and work feel more clear, not more complicated
            </h2>
            <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
              I&apos;m most interested in the practical layer of AI — not just what a model can do, but how it can genuinely
              help a person, a workflow, or a business. The goal is not more complexity. The goal is more clarity,
              better decisions, and better experiences.
            </p>

            <div className="grid gap-[0.9rem] mt-5">
              {principles.map(({ number, title, description }) => (
                <div
                  key={number}
                  className="grid grid-cols-[40px_1fr] gap-[0.85rem] items-start p-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center font-bold">
                    {number}
                  </div>
                  <div>
                    <h4 className="m-0 mb-[0.2rem] text-base">{title}</h4>
                    <p className="m-0 text-[var(--muted)] text-[0.95rem]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
