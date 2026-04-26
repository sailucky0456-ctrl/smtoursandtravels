import { PACKAGES } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

export function PackagesGrid() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Ready Packages"
          title={
            <span className="text-cream">
              Popular <em className="font-display italic text-saffron">tour packages.</em>
            </span>
          }
          intro="All-inclusive trips — driver, fuel and toll covered. WhatsApp us for a custom quote tailored to your dates."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 transition hover:border-saffron/40 hover:bg-cream/[0.07]"
            >
              {p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-warm px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink shadow-warm">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-2xl font-medium text-cream">{p.name}</h3>
              <ul className="mt-5 space-y-2 text-sm text-cream/80">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-saffron" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-5 text-xs text-cream/60">
                <span>{p.duration}</span>
                <span>Seats: {p.seats}</span>
              </div>
              <a
                href={wa(`Hi SM Tours, I'd like a quote for: ${p.name}.`)}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-4 py-3 text-sm font-semibold text-ink transition hover:bg-saffron"
              >
                Get Quote on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
