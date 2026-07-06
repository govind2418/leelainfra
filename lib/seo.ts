import type { Metadata } from "next";
import { SITE } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? SITE.description;
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    keywords: SITE.keywords,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+91-9321495610",
    email: "leela.infrasolution@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-75/303, Sector 9, Shanti Nagar, Mira Road",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1400",
    },
  };
}
