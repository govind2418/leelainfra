import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { BrandsGrid } from "@/sections/brands/BrandsGrid";
import { CTASection } from "@/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Collections",
  description:
    "Meet the six house collections behind Leela Infra Solution — Leela Wood, Flute, Panel, Surface, Metal and Aqua.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Collections"
        title="Six house collections, one design language."
        description="Rather than reselling generic stock, we curate every category into a named Leela collection — so specification stays consistent from flooring to fittings."
        crumb="Collections"
        art="hardware"
      />
      <BrandsGrid />
      <CTASection />
    </>
  );
}
