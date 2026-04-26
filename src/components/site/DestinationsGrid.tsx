import { useState } from "react";
import { DESTINATIONS } from "./data";
import { wa } from "./constants";
import { SectionHeader } from "./SectionHeader";

const INITIAL = 6;

export function DestinationsGrid({ limit }: { limit?: number }) {
  const [expanded, setExpanded] = useState(false);

  // When `limit` is passed (e.g. on the homepage section embed) we still respect it,
  // but always default to showing the first 6 with a View More toggle.
  const all = limit ? DESTINATIONS.slice(0, limit) : DESTINATIONS;
  const visible = expanded ? all : all.slice(0, INITIAL);
  const canExpand = all.length > INITIAL;

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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => (
            <a
              key={d.slug}
              href={wa(`Hi SM Tours, I want to book a trip to ${d.name}.`)}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-card shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95"
            >
              <img
                src={d.img}
                alt={`${d.name} — travel destination from Bangalore`}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink backdrop-blur">
                {d.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-cream/70">
                  <span>{d.km}</span>
                  <span className="h-1 w-1 rounded-full bg-cream/50" />
                  <span>{d.hrs}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium leading-tight">
                  {d.name}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-saffron opacity-0 transition group-hover:opacity-100">
                  Book this trip
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {canExpand && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-saffron-deep hover:border-saffron-deep"
            >
              {expanded ? "Show Less" : "View More Destinations"}
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
