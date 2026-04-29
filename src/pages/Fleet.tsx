import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { FleetGrid } from "@/components/site/FleetGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { setMeta } from "@/lib/meta";

export default function FleetPage() {
  useEffect(() => {
    setMeta({
      title: "Our Fleet — Sedans, SUVs, Tempo Travellers · SM Tours",
      description: "From Swift Dzire and Innova Crysta to Tempo Travellers and mini buses — all AC, all serviced, all driven by verified pros.",
    });
  }, []);
  return (
    <Layout>
      <section className="bg-gradient-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">Our Fleet</span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">A vehicle for every journey.</h1>
        </div>
      </section>
      <FleetGrid />
      <FinalCTA />
    </Layout>
  );
}
