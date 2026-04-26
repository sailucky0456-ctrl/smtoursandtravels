import { DESTINATIONS } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

export function DestinationsGrid({ limit }: { limit?: number }) {
  const items = limit ? DESTINATIONS.slice(0, limit) : DESTINATIONS;
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeader
            eyebrow="Popular Destinations"
            title={
              <>
                Where will you <em className="font-display italic text-saffron-deep">go next?</em>
              </>
            }
            intro="Hand-picked routes our customers book most often. Transparent pricing, on-time pickups, and a driver who actually knows the road."
          />
          <a
            href={wa("Hi SM Tours, I'd like a custom destination quote.")}
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="hidden rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream md:inline-flex"
          >
            Custom trip →
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <a
              key={d.slug}
              href={wa(`Hi SM Tours, I want to book a trip to ${d.name}.`)}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-lift ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/12] lg:aspect-[16/14]" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink">
                  {d.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream lg:p-6">
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-cream/70">
                    <span>{d.km}</span>
                    <span className="h-1 w-1 rounded-full bg-cream/50" />
                    <span>{d.hrs}</span>
                  </div>
                  <h3 className={`mt-2 font-display ${i === 0 ? "text-3xl lg:text-5xl" : "text-2xl"} font-medium leading-tight`}>
                    {d.name}
                  </h3>
                  {i === 0 && (
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">{d.blurb}</p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-saffron">
                    Book this trip
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
