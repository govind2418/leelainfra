import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { CatalogueDownload } from "@/sections/catalogue/CatalogueDownload";

export const metadata: Metadata = buildMetadata({
  title: "E-Catalogue",
  description:
    "Browse named Leela Infra Solution catalogues across Veneers, Fluted Panels and Hardware & Bath Fittings — request any collection instantly on WhatsApp.",
  path: "/catalogue",
});

export default function CataloguePage() {
  return (
    <>
      <PageHero
        eyebrow="E-Catalogue"
        title="27 named collections, in one place."
        description="Tap any cover to open its own page with the full flip-book PDF — or request the complete catalogue on WhatsApp."
        crumb="Catalogue"
        art="wood"
      />
      <CatalogueDownload />
    </>
  );
}
