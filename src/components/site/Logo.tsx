import { Link } from "react-router-dom";

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const text = tone === "cream" ? "text-cream" : "text-ink";
  const sub = tone === "cream" ? "text-cream/60" : "text-muted-foreground";
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-warm shadow-warm">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-cream" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12c2-5 6-7 9-7s7 2 9 7" />
          <circle cx="7" cy="16" r="2.2" />
          <circle cx="17" cy="16" r="2.2" />
          <path d="M9.2 16h5.6" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${text}`}>
          SM Tours <span className="text-saffron-deep">&amp;</span> Travels
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${sub}`}>
          Bangalore · Outstation
        </span>
      </span>
    </Link>
  );
}
