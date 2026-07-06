import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { CATALOGUE_ITEMS, getCatalogueBySlug } from "@/lib/catalogues";
import { CatalogueDetail } from "@/sections/catalogue/CatalogueDetail";
import { CTASection } from "@/sections/shared/CTASection";

export function generateStaticParams() {
  return CATALOGUE_ITEMS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCatalogueBySlug(slug);
  if (!item) return buildMetadata({ title: "Catalogue Not Found", path: `/catalogue/${slug}` });

  return buildMetadata({
    title: `${item.name} Catalogue`,
    description: `View or download the ${item.name} e-catalogue — part of Leela Infra Solution's ${item.category}.`,
    path: `/catalogue/${item.slug}`,
  });
}

export default async function CatalogueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCatalogueBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <CatalogueDetail item={item} />
      <CTASection />
    </>
  );
}
