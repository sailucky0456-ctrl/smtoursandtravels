import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { DestinationsGrid } from "@/components/site/DestinationsGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { FleetGrid } from "@/components/site/FleetGrid";

import { Reviews } from "@/components/site/Reviews";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SM Tours & Travels — Bangalore Cabs, Outstation & Tour Packages" },
      { name: "description", content: "Reliable cabs in Bangalore for airport transfers, outstation trips and tour packages. Verified drivers, AC vehicles, transparent pricing. Book in 5 minutes." },
      { property: "og:title", content: "SM Tours & Travels — Bangalore Cabs & Outstation" },
      { property: "og:description", content: "Airport transfers, outstation trips, weekend getaways. 24/7, verified drivers, transparent pricing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <DestinationsGrid limit={6} />
      <WhyUs />
      <FleetGrid limit={6} />
      <Reviews />
      <FinalCTA />
    </Layout>
  );
}
