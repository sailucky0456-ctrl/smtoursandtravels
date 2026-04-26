import { useState } from "react";
import { VEHICLES } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

const INITIAL = 6;

export function FleetGrid({ limit }: { limit?: number }) {
  const [expanded, setExpanded] = useState(false);

  const all = limit ? VEHICLES.slice(0, limit) : VEHICLES;
  const visible = expanded ? all : all.slice(0, INITIAL);
  const canExpand = all.length > INITIAL;

  return (
    <section className="relative bg-gradient-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Fleet"
          title={
            <>
              Choose your <em className="font-display italic text-saffron-deep">vehicle.</em>
            </>
          }
          intro="Sedans, MPVs, premium SUVs, tempo travellers and mini buses. Every vehicle is fully AC, regularly serviced, and driven by a verified pro."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((v) => (
            <article
              key={v.slug}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95"
            >
              <div className={`relative aspect-[5/3] overflow-hidden bg-gradient-to-br ${v.bg}`}>
                <img
                  src={v.img}
                  alt={`${v.name} — ${v.type}`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {v.note && (
                  <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream backdrop-blur">
                    {v.note}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight text-ink">{v.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                      {v.type}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-ink">
                    {v.perKm}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{v.seats} · AC</p>

                <a
                  href={wa(`Hi SM Tours, I want to book the ${v.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-cream transition hover:bg-saffron-deep"
                >
                  Book Now
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {canExpand && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-saffron-deep hover:border-saffron-deep"
            >
              {expanded ? "Show Less" : "View More Vehicles"}
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
