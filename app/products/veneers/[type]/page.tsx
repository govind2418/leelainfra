import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { VENEER_TYPES, getVeneerTypeBySlug } from "@/lib/veneerTypes";
import { VeneerTypeDetail } from "@/sections/products/VeneerTypeDetail";
import { CTASection } from "@/sections/shared/CTASection";

export function generateStaticParams() {
  return VENEER_TYPES.map((v) => ({ type: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type: slug } = await params;
  const type = getVeneerTypeBySlug(slug);
  if (!type) return buildMetadata({ title: "Veneer Type Not Found", path: `/products/veneers/${slug}` });

  return buildMetadata({
    title: `${type.name} Veneers`,
    description: type.description,
    path: `/products/veneers/${type.slug}`,
  });
}

export default async function VeneerTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type: slug } = await params;
  const type = getVeneerTypeBySlug(slug);
  if (!type) notFound();

  return (
    <>
      <VeneerTypeDetail type={type} />
      <CTASection
        title={`Ready to specify ${type.name} veneers?`}
        description="Share your space dimensions and preferred variety — we'll revert with samples and a quote within 24 hours."
      />
    </>
  );
}
