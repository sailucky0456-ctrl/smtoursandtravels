import { REVIEWS } from "./data";
import { SectionHeader } from "./SectionHeader";

export function Reviews() {
  return (
    <section className="relative bg-gradient-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Reviews"
          title={
            <>
              What our <em className="font-display italic text-saffron-deep">customers</em> say.
            </>
          }
          intro="A few notes from family trips, corporate runs and pilgrimages."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span aria-hidden className="absolute -top-6 left-6 font-display text-7xl leading-none text-saffron-deep/30">"</span>
              <blockquote className="relative font-display text-xl leading-snug text-ink">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm font-display text-sm font-semibold text-ink">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.trip}</div>
                </div>
                <div className="ml-auto text-sm text-saffron-deep">★★★★★</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
