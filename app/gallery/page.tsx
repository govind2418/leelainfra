import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { GalleryMasonry } from "@/sections/gallery/GalleryMasonry";
import { CTASection } from "@/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A closer look at Leela Infra Solution's finish quality across flooring, panelling, veneers and fittings.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Showcasing our successful projects."
        description="Click any plate to view it full-screen — LIS Veneered Flutes, Elewood HDF Louvers, Regrano Designer Series and more, straight from our completed work."
        crumb="Gallery"
        art="bath"
      />
      <GalleryMasonry />
      <CTASection />
    </>
  );
}
