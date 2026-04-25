import { SectionHeader } from "./SectionHeader";

const FEATURES = [
  { title: "Verified Drivers", body: "Background-checked, well-mannered drivers who actually know the routes — no Maps fumbling at midnight.", icon: "M12 1l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" },
  { title: "Transparent Pricing", body: "Clear quote before you confirm. No silent surge, no surprise toll charges, no shifting goalposts.", icon: "M12 1v22M5 8h11a3 3 0 010 6H8a3 3 0 000 6h11" },
  { title: "Spotless Vehicles", body: "Sanitised interiors, working AC, clean upholstery — checked after every single trip.", icon: "M3 13l4-8h10l4 8M5 13h14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" },
  { title: "On-Time, Always", body: "We track your flight, plan for traffic, and call before your pickup. 99% of rides arrive on time.", icon: "M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "24 / 7 Support", body: "Day, night, holidays. A real person picks up the call within three rings.", icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z" },
  { title: "Family-Safe Travel", body: "Courteous drivers, child-friendly cars, careful night travel. Your grandparents are in good hands.", icon: "M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m13-5.13a4 4 0 11-8 0 4 4 0 018 0zM12 7a4 4 0 110-8 4 4 0 010 8z" },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={
            <>
              Trusted by <em className="font-display italic text-saffron-deep">10,000+</em> travellers
              from across South India.
            </>
          }
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="group relative bg-card p-7 transition hover:bg-muted">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-saffron/10 text-saffron-deep">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
