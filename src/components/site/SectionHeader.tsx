export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">
        <span className="h-px w-8 bg-saffron-deep" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
