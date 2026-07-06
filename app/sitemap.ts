import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { PROJECTS } from "@/lib/projects";
import { CATALOGUE_ITEMS } from "@/lib/catalogues";
import { VENEER_TYPES } from "@/lib/veneerTypes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/brands", "/projects", "/gallery", "/catalogue", "/contact"].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${SITE.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const catalogueRoutes = CATALOGUE_ITEMS.map((c) => ({
    url: `${SITE.url}/catalogue/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const veneerTypeRoutes = VENEER_TYPES.map((v) => ({
    url: `${SITE.url}/products/veneers/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...catalogueRoutes, ...veneerTypeRoutes];
}
