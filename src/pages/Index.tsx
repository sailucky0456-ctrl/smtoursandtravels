import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { DestinationsGrid } from "@/components/site/DestinationsGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { FleetGrid } from "@/components/site/FleetGrid";
import { Reviews } from "@/components/site/Reviews";
import { FinalCTA } from "@/components/site/FinalCTA";
import { setMeta } from "@/lib/meta";

export default function IndexPage() {
  useEffect(() => {
    setMeta({
      title: "SM Tours & Travels — Bangalore Cabs, Outstation & Tour Packages",
      description: "Reliable cabs in Bangalore for airport transfers, outstation trips and tour packages. Verified drivers, AC vehicles, transparent pricing. Book in 5 minutes.",
    });
  }, []);
  return (
    <Layout>
      <Hero />
      <DestinationsGrid />
      <WhyUs />
      <FleetGrid homeMode />
      <Reviews />
      <FinalCTA />
    </Layout>
  );
}
