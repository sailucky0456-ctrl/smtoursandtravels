import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PHONE, PHONE_DISPLAY, wa } from "@/components/site/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SM Tours & Travels — Bangalore Cabs 24/7" },
      { name: "description", content: "Call or WhatsApp SM Tours & Travels in Bangalore. Bookings confirmed in under 5 minutes, 24 hours a day." },
      { property: "og:title", content: "Contact · SM Tours & Travels" },
      { property: "og:description", content: "Call or WhatsApp 24/7 to book your ride." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="bg-gradient-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">Contact</span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            We pick up. <em className="italic">Always.</em>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground">
            A real person answers within three rings. Day, night, weekends, holidays — we're here.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          <Card icon="📞" title="Call us" body={PHONE_DISPLAY} href={`tel:${PHONE}`} cta="Dial now" />
          <Card icon="💬" title="WhatsApp" body="Reply within 5 minutes" href={wa("Hi SM Tours, I'd like to book a ride.")} cta="Open chat" />
          <Card icon="📍" title="Location" body="Bangalore, Karnataka · serving across South India" />
        </div>
      </section>
    </Layout>
  );
}

function Card({ icon, title, body, href, cta }: { icon: string; title: string; body: string; href?: string; cta?: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 font-display text-2xl font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      {href && cta && (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-5 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron-deep">
          {cta}
        </a>
      )}
    </div>
  );
}
