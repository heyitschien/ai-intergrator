import Image from "next/image";
import { FadeUp } from "./FadeUp";

/**
 * Curated Unsplash imagery — individuals, small business, community.
 * @see docs/example-stock-images.md
 */
const examples = [
  {
    title: "Individuals & everyday life",
    description:
      "Seniors, students, parents, and curious people who want AI to support learning, planning, and daily tasks—explained in plain language, at a human pace.",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Person focused on a laptop in a bright, calm setting—representing everyday learning with technology",
  },
  {
    title: "Small businesses & local teams",
    description:
      "Owners and lean teams who need clearer workflows, faster client communication, and simple AI wins—without enterprise complexity or endless tool stacks.",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Customer and small business moment at a counter—representing local commerce and practical service",
  },
  {
    title: "Community & shared learning",
    description:
      "Schools, community centers, and groups exploring AI together—workshops, demos, and guidance that meet people where they already gather.",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Small group collaborating and talking together—representing community learning and support",
  },
] as const;

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
            Who this is for
          </div>
          <h2
            id="examples-heading"
            className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight"
          >
            Individuals, small businesses, and community—not hype, just practical help
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            A quick visual snapshot of the people and settings I care about most. Same mission as the rest of the page:
            less confusion, more clarity, and technology that feels usable in real rooms—not just on a slide deck.
          </p>
        </FadeUp>

        <div className="grid gap-4 mt-6 md:grid-cols-3">
          {examples.map(({ title, description, imageSrc, imageAlt }) => (
            <FadeUp key={title}>
              <article className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden">
                <div className="relative aspect-[4/3] border-b border-[var(--border)] bg-[var(--accent-soft)]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 360px"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="m-0 mb-2 text-[1.1rem] leading-tight">{title}</h3>
                  <p className="m-0 text-[var(--muted)] text-[0.96rem] flex-1">{description}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <p className="mt-6 mb-0 text-center text-[0.75rem] text-[var(--muted)] max-w-[40rem] mx-auto leading-relaxed">
          Photography from{" "}
          <a
            href="https://unsplash.com"
            className="text-[var(--accent)] font-medium underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>{" "}
          (free to use under the{" "}
          <a
            href="https://unsplash.com/license"
            className="text-[var(--accent)] font-medium underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash License
          </a>
          ).
        </p>
      </div>
    </section>
  );
}
