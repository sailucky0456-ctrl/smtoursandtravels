import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { DestinationsGrid } from "@/components/site/DestinationsGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { setMeta } from "@/lib/meta";

export default function DestinationsPage() {
  useEffect(() => {
    setMeta({
      title: "Destinations from Bangalore — Mysore, Coorg, Ooty, Tirupati · SM Tours",
      description: "Explore our most-booked routes from Bangalore — Mysore, Coorg, Ooty, Tirupati, Hampi, Nandi Hills.",
    });
  }, []);
  return (
    <Layout>
      <section className="bg-gradient-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">Destinations</span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Roads we know <em className="italic">by heart.</em>
          </h1>
        </div>
      </section>
      <DestinationsGrid />
      <FinalCTA />
    </Layout>
  );
}
