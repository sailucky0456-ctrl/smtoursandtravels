import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { FleetGrid } from "@/components/site/FleetGrid";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Sedans, SUVs, Tempo Travellers · SM Tours" },
      { name: "description", content: "From Swift Dzire and Innova Crysta to Tempo Travellers and mini buses — all AC, all serviced, all driven by verified pros." },
      { property: "og:title", content: "Our Fleet · SM Tours & Travels" },
      { property: "og:description", content: "Sedans, MPVs, premium SUVs, tempo travellers and mini buses for every kind of trip." },
    ],
  }),
  component: () => (
    <Layout>
      <PageBanner eyebrow="Our Fleet" title="A vehicle for every journey." />
      <FleetGrid />
      <FinalCTA />
    </Layout>
  ),
});

function PageBanner({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-gradient-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
