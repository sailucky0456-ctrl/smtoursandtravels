import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PackagesGrid } from "@/components/site/PackagesGrid";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages from Bangalore — All-Inclusive · SM Tours" },
      { name: "description", content: "Ready-to-book tour packages from Bangalore. Driver, fuel and toll included. Mysore, Coorg, Ooty, Tirupati, Hampi, airport." },
      { property: "og:title", content: "Tour Packages · SM Tours & Travels" },
      { property: "og:description", content: "All-inclusive packages — no surprises at drop-off." },
    ],
  }),
  component: () => (
    <Layout>
      <section className="bg-gradient-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">Packages</span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            One quote. <em className="italic">Everything included.</em>
          </h1>
        </div>
      </section>
      <PackagesGrid />
      <FinalCTA />
    </Layout>
  ),
});
