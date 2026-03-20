import { FadeUp } from "./FadeUp";
import { UseCaseCard, type UseCaseIconKey } from "./UseCaseCard";

/**
 * One image per scenario — carries “who it’s for” visually without a duplicate section.
 * @see docs/example-stock-images.md
 */
const useCases: {
  number: string;
  iconKey: UseCaseIconKey;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}[] = [
  {
    number: "01",
    iconKey: "palette",
    title: "Helping a design business visualize ideas faster",
    description:
      "Using AI image workflows to show clients finish or style possibilities in their real space before work begins.",
    imageSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Bright interior with furniture and natural light—representing design spaces and visual client conversations",
  },
  {
    number: "02",
    iconKey: "briefcase",
    title: "Helping a small business improve workflow",
    description:
      "Finding simple ways AI can support intake, proposals, content creation, scheduling, or internal organization.",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Customer and staff at a counter—representing local business, service, and day-to-day operations",
  },
  {
    number: "03",
    iconKey: "graduation",
    title: "Helping individuals learn AI with confidence",
    description:
      "Showing students, seniors, or everyday users how to use AI tools in useful, understandable ways.",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Person focused on a laptop in a calm setting—representing everyday learning and one-to-one guidance",
  },
  {
    number: "04",
    iconKey: "workflow",
    title: "Helping creators turn ideas into systems",
    description:
      "Connecting writing, design, automation, and web tools into repeatable creative workflows.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80",
    imageAlt:
      "Small team collaborating around a laptop—representing creative work and repeatable systems",
  },
];

export function UseCases() {
  return (
    <section className="py-[4.5rem] lg:py-24 section-alt" id="use-cases">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 py-2 px-[0.85rem] rounded-full pill-gradient-subtle text-[0.82rem] font-semibold tracking-wide">
            Use cases
          </div>
          <h2 className="m-0 mb-[0.85rem] font-[family-name:var(--font-sora)] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08] tracking-tight">
            What this can look like in practice
          </h2>
          <p className="m-0 max-w-[44rem] text-[var(--muted)] text-base">
            Four real situations—design studios, local businesses, individuals learning at their own pace, and creators
            building systems. Same thread as &ldquo;who I help&rdquo;: practical AI, human speed, no hype.
          </p>
        </FadeUp>

        <div className="grid gap-4 mt-6 sm:grid-cols-2">
          {useCases.map(({ number, iconKey, title, description, imageSrc, imageAlt }) => (
            <FadeUp key={number}>
              <UseCaseCard
                number={number}
                iconKey={iconKey}
                title={title}
                description={description}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
              />
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
          (
          <a
            href="https://unsplash.com/license"
            className="text-[var(--accent)] font-medium underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            license
          </a>
          ).
        </p>
      </div>
    </section>
  );
}
