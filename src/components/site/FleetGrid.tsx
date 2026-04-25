import { VEHICLES } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

export function FleetGrid({ limit }: { limit?: number }) {
  const items = limit ? VEHICLES.slice(0, limit) : VEHICLES;
  return (
    <section className="relative bg-gradient-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Fleet"
          title={
            <>
              Choose your <em className="font-display italic text-saffron-deep">perfect ride.</em>
            </>
          }
          intro="Sedans, MPVs, premium SUVs, tempo travellers and mini buses. Every vehicle is fully AC, regularly serviced, and driven by a verified pro."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((v) => (
            <article key={v.slug} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className={`relative -mx-2 -mt-2 mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${v.bg}`}>
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
                  {v.type}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Seats {v.seats}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">From</span>
                  <span className="font-display text-xl font-semibold text-saffron-deep">{v.perKm}</span>
                </div>
              </div>
              <a
                href={wa(`Hi SM Tours, I want to book the ${v.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-cream transition hover:bg-saffron-deep"
              >
                Enquire & Book
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
