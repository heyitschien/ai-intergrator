"use client";

import Image from "next/image";
import { useState } from "react";
import { Briefcase, GraduationCap, Palette, Workflow } from "lucide-react";

const useCaseIcons = {
  palette: Palette,
  briefcase: Briefcase,
  graduation: GraduationCap,
  workflow: Workflow,
} as const;

export type UseCaseIconKey = keyof typeof useCaseIcons;

export type UseCaseCardProps = {
  number: string;
  iconKey: UseCaseIconKey;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function UseCaseCard({
  number,
  iconKey,
  title,
  description,
  imageSrc,
  imageAlt,
}: UseCaseCardProps) {
  const Icon = useCaseIcons[iconKey];
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="use-case-card group flex flex-col h-full overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow)] hover:shadow-[0_12px_40px_rgba(16,33,43,0.09)]">
      <div className="relative aspect-[4/3] border-b border-[var(--border)] bg-[var(--accent-soft)] shrink-0 overflow-hidden">
        <div className="use-case-card-image-wrap relative h-full w-full group-hover:scale-[1.02]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`use-case-card-image object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 560px"
            onLoadingComplete={() => setLoaded(true)}
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
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
      </div>
    </article>
  );
}
