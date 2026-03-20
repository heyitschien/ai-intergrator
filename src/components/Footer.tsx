export function Footer() {
  return (
    <footer className="py-8 pb-12">
      <div className="w-[min(calc(100%-2rem),var(--max))] mx-auto pt-5 border-t border-[var(--border)] flex flex-col gap-2 text-[var(--muted)] text-[0.92rem]">
        <div>
          <strong className="text-[var(--text)]">Chien</strong> — Helping people and businesses use AI in real life
        </div>
        <div>Designed to feel clear, calm, useful, and human.</div>
      </div>
    </footer>
  );
}
