import { Link } from "react-router-dom";
import { VEHICLES, VEHICLE_CATEGORY_ORDER, type Vehicle } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

const HOME_LIMIT = 6;

export function FleetGrid({ homeMode = false }: { homeMode?: boolean }) {
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

        {homeMode ? (
          <>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VEHICLES.slice(0, HOME_LIMIT).map((v) => (
                <VehicleCard key={v.slug} v={v} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                to="/fleet"
                className="group inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-saffron-deep hover:border-saffron-deep"
              >
                View Full Fleet
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-14 space-y-16">
            {VEHICLE_CATEGORY_ORDER.map((cat) => {
              const list = VEHICLES.filter((v) => v.category === cat);
              if (list.length === 0) return null;
              return (
                <div key={cat}>
                  <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                      {cat}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">
                      {list.length} {list.length === 1 ? "vehicle" : "vehicles"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((v) => (
                      <VehicleCard key={v.slug} v={v} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
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
        <div>
          <h3 className="font-display text-2xl font-medium leading-tight text-ink">{v.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-saffron-deep">
            {v.type}
          </p>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {v.seats} Seater · AC Available
        </p>

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
  );
}
