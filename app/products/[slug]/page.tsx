import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { ProductDetailHero } from "@/sections/products/ProductDetailHero";
import { ProductFeatures } from "@/sections/products/ProductFeatures";
import { TeakVeneerSeries } from "@/sections/products/TeakVeneerSeries";
import { VeneerTypesTabs } from "@/sections/products/VeneerTypesTabs";
import { AGTFlooringShowcase } from "@/sections/products/AGTFlooringShowcase";
import { FlutedPanelsCatalogue } from "@/sections/products/FlutedPanelsCatalogue";
import { RelatedProducts } from "@/sections/products/RelatedProducts";
import { CTASection } from "@/sections/shared/CTASection";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return buildMetadata({ title: "Product Not Found", path: `/products/${slug}` });

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <ProductDetailHero product={product} />
      {product.slug === "veneers" && <VeneerTypesTabs />}
      <ProductFeatures product={product} />
      {product.slug === "veneers" && <TeakVeneerSeries />}
      {product.slug === "wooden-flooring" && <AGTFlooringShowcase />}
      {product.slug === "fluted-panels" && <FlutedPanelsCatalogue />}
      <RelatedProducts currentSlug={product.slug} />
      <CTASection
        title={`Ready to specify ${product.name.toLowerCase()}?`}
        description="Share your space dimensions and preferred finish — we'll revert with samples and a quote within 24 hours."
      />
    </>
  );
}
