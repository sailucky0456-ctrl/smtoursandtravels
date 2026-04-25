import { PHONE, wa } from "./constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm py-24 lg:py-28">
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-ink lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]">
          Ready when you are
        </span>
        <h2 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          Need a ride <em className="italic">today?</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-ink/80">
          Call or WhatsApp now — most bookings are confirmed within five minutes.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE}`}
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream shadow-lift transition hover:bg-clay"
          >
            Call Now
          </a>
          <a
            href={wa("Hi SM Tours, I'd like to book a ride.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-ink px-7 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
