import { useState } from "react";
import hero from "@/assets/hero-highway.jpg";
import { wa } from "./constants";

export function Hero() {
  const [trip, setTrip] = useState("Outstation");
  const [from, setFrom] = useState("Bangalore");
  const [to, setTo] = useState("Mysore");
  const [date, setDate] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi SM Tours, I'd like a quote.\nTrip: ${trip}\nFrom: ${from}\nTo: ${to}\nDate: ${date || "ASAP"}`;
    window.open(wa(msg), "_blank");
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="A white SUV cruising a misty Karnataka highway at sunrise"
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pb-40 lg:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Headline */}
          <div className="text-cream">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-jade" />
              Available 24 / 7 across Bangalore
            </span>
            <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Your road,
              <br />
              <span className="italic text-saffron">beautifully</span> arranged.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/85 sm:text-lg">
              Airport transfers, outstation trips, weekend getaways and corporate travel —
              booked in minutes with verified drivers and clean, AC vehicles.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <Stat label="rides delivered" value="2,000+" />
              <span className="hidden h-6 w-px bg-cream/20 sm:block" />
              <Stat label="rating" value="★ 4.9 / 5" />
              <span className="hidden h-6 w-px bg-cream/20 sm:block" />
              <Stat label="on-time pickup" value="99%" />
            </div>
          </div>

          {/* Quote card */}
          <form
            onSubmit={submit}
            className="relative rounded-3xl border border-border/50 bg-card/95 p-6 shadow-lift backdrop-blur lg:p-7"
          >
            <div className="absolute -top-3 left-6 rounded-full bg-gradient-warm px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink shadow-warm">
              Instant Quote
            </div>

            <div className="mb-4 grid grid-cols-3 gap-1 rounded-full bg-muted p-1 text-xs font-medium">
              {(["Outstation", "Local", "Airport"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTrip(t)}
                  className={`rounded-full px-3 py-2 transition ${
                    trip === t ? "bg-ink text-cream shadow-soft" : "text-muted-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <Field label="Pickup city">
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-muted-foreground"
                placeholder="Bangalore"
              />
            </Field>
            <Field label={trip === "Airport" ? "Terminal / Address" : "Destination"}>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-ink outline-none"
                placeholder="Mysore"
              />
            </Field>
            <Field label="Travel date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-ink outline-none"
              />
            </Field>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-warm px-5 py-3.5 text-sm font-semibold text-ink shadow-warm transition hover:brightness-105"
            >
              Get WhatsApp Quote →
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Most quotes confirmed in under 5 minutes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold text-cream">{value}</span>
      <span className="text-xs uppercase tracking-widest text-cream/60">{label}</span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-2 block rounded-xl border border-border bg-background/60 px-4 py-2.5 transition focus-within:border-saffron-deep">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-0.5">{children}</div>
    </label>
  );
}
