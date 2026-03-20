import { Boxes, Heart, Languages } from "lucide-react";
import { FadeUp } from "./FadeUp";

const snapshotItems = [
  {
    icon: Boxes,
    title: "Builder mindset",
    body: "I like turning ideas into clear, usable systems and experiences.",
  },
  {
    icon: Heart,
    title: "Human-centered",
    body: "I care about technology that genuinely helps people, not just impresses them.",
  },
  {
    icon: Languages,
    title: "Practical translator",
    body: "I enjoy taking complex tools and making them understandable and usable.",
  },
];

export function Story() {
  return (
    <section className="py-[4.5rem] lg:py-24" id="story">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeUp>
          <article className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow)] p-[1.35rem]">
            <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full pill-gradient-subtle text-[0.82rem] font-semibold tracking-wide">
              A little about me
            </div>
            <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
              Creative, technical, and deeply interested in useful technology
            </h2>
            <p className="m-0 text-[var(--muted)]">
              My background spans creative work, technology, and hands-on real-world experience. I care deeply about
              learning, design, human potential, and using technology in ways that genuinely improve life.
            </p>
            <p className="mt-4 m-0 text-[var(--muted)]">
              Over time, AI has become one of the most exciting areas for me because it can help people think more clearly,
              work more effectively, and open new possibilities across everyday life and business.
            </p>
            <div className="quote-gradient-edge mt-4 py-4 pl-5 pr-4 bg-[#fffaf6] rounded-r-2xl text-[var(--text)] font-medium">
              I&apos;m especially drawn to the translation layer — helping people move from &quot;I&apos;ve heard about AI&quot; to
              &quot;I can actually use this in a way that helps me.&quot;
            </div>
          </article>
        </FadeUp>

        <FadeUp>
          <aside
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow)] p-[1.35rem]"
            aria-label="Quick snapshot"
          >
            <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full pill-gradient-subtle text-[0.82rem] font-semibold tracking-wide">
              Quick snapshot
            </div>
            <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.5rem,3.5vw,2rem)] leading-[1.08] tracking-tight">
              What people should understand quickly
            </h2>
            <div className="grid gap-3 grid-cols-1">
              {snapshotItems.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <strong className="block mb-1 text-[0.95rem]">{title}</strong>
                    <p className="m-0 text-[var(--muted)] text-[0.92rem]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </FadeUp>
      </div>
    </section>
  );
}
