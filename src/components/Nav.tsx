import Link from "next/link";

export function Nav() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-[18px] bg-[rgba(247,250,252,0.8)] border-b border-[rgba(230,237,243,0.8)]">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto flex items-center justify-between min-h-[4.25rem] gap-4">
        <Link
          href="#top"
          aria-label="Chien home"
          className="flex items-center gap-[0.85rem] font-bold"
        >
          <div className="w-9 h-9 rounded-[0.85rem] grid place-items-center bg-gradient-to-br from-[var(--accent-soft)] to-white border border-[var(--border)] shadow-[var(--shadow)] text-[var(--accent)] font-[family-name:var(--font-sora)]">
            C
          </div>
          <div className="flex flex-col leading-tight">
            <span>Chien</span>
            <small className="mt-[0.15rem] text-[var(--muted)] text-[0.72rem] font-medium">
              Practical AI for real life
            </small>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-5 text-[var(--muted)] text-[0.95rem] [&_a:hover]:text-[var(--text)]"
          aria-label="Main navigation"
        >
          <Link href="#help">What I help with</Link>
          <Link href="#audience">Who I help</Link>
          <Link href="#use-cases">Use cases</Link>
          <Link href="#story">Story</Link>
          <Link href="#connect">Connect</Link>
        </nav>

        <Link
          href="#connect"
          className="inline-flex items-center justify-center py-[0.78rem] px-4 rounded-full border border-[var(--border)] bg-[var(--surface)] font-semibold shadow-[var(--shadow)]"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
