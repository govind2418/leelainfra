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
  const ogImage = `${SITE.url}/opengraph-image`;

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
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
    image: `${SITE.url}/images/logo.png`,
    logo: `${SITE.url}/images/logo.png`,
    telephone: "+91-9321495610",
    email: "leela.infrasolution@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-75/303, Sector 9, Shanti Nagar, Mira Road",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      postalCode: "401107",
      addressCountry: "IN",
    },
    areaServed: ["Mumbai", "Thane", "Navi Mumbai", "Mumbai Metropolitan Region"],
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:30",
      },
    ],
  };
}
