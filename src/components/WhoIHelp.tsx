import { FadeUp } from "./FadeUp";

const chips = [
  "Small business owners",
  "Designers and creators",
  "Teachers and students",
  "Seniors learning new tools",
  "Community organizations",
  "Curious individuals",
];

export function WhoIHelp() {
  return (
    <section className="py-[4.5rem] lg:py-24 section-alt" id="audience">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-[0.82rem] font-semibold tracking-wide">
            Who I help
          </div>
          <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
            For people who want practical guidance, not hype
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            This is especially for people who are curious about AI and want help understanding what is actually useful.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid gap-4 mt-6 sm:grid-cols-3 lg:grid-cols-6">
            {chips.map((label) => (
              <div
                key={label}
                className="inline-flex items-center justify-center py-[0.95rem] px-4 text-center bg-[var(--surface)] border border-[var(--border)] rounded-full shadow-[var(--shadow)] font-medium"
              >
                {label}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
