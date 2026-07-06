import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { ProductsGrid } from "@/sections/products/ProductsGrid";
import { CTASection } from "@/sections/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Explore our seven premium product categories — wooden flooring, wall panels, fluted panels, veneers, laminates, hardware and bath fittings.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Seven categories. One uncompromising standard."
        description="Every material we carry is sampled, tested and specified for Indian conditions before it earns a place in our catalogue."
        crumb="Products"
        art="laminate"
      />
      <ProductsGrid />
      <CTASection
        title="Not sure which material fits your space?"
        description="Send us your floor plan and we'll shortlist the right categories and finishes for your budget."
      />
    </>
  );
}
