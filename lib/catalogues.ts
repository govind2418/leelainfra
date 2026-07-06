export type CatalogueCategory = "Veneers Collection" | "Stylish Fluted Panels" | "Hardware & Bath Fittings";

export type CatalogueItem = {
  slug: string;
  name: string;
  category: CatalogueCategory;
  image: string;
  pdf: string;
};

// Sourced directly from leelainfra.in/catalogue/ — real cover art + real PDF links.
export const CATALOGUE_ITEMS: CatalogueItem[] = [
  { slug: "lis-cutura", name: "LIS Cutura", category: "Veneers Collection", image: "/images/catalogues/lis-cutura.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Cutura-Series-FluTed.pdf" },
  { slug: "lis-embosh-veneer", name: "LIS Embosh Veneer", category: "Veneers Collection", image: "/images/catalogues/lis-embosh-veneer.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Embosh-Textured-Veneer.pdf.pdf" },
  { slug: "lis-natura-remixed", name: "LIS Natura Remixed", category: "Veneers Collection", image: "/images/catalogues/lis-natura-remixed.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-NATURA-REMIXED.pdf" },
  { slug: "lis-regrano-designer-i", name: "LIS Regrano Designer I", category: "Veneers Collection", image: "/images/catalogues/lis-regrano-designer-i.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-REGRANO-DESIGNER-SERIES.pdf" },
  { slug: "lis-regrano-designer-ii", name: "LIS Regrano Designer II", category: "Veneers Collection", image: "/images/catalogues/lis-regrano-designer-ii.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Regrano-Series.pdf" },
  { slug: "lis-pre-polished-veneers", name: "LIS Pre Polished Veneers", category: "Veneers Collection", image: "/images/catalogues/lis-pre-polished-veneers.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-PRE-Polished-Veneers.pdf" },
  { slug: "lis-zero-gravity-veneers", name: "LIS Zero Gravity Veneers", category: "Veneers Collection", image: "/images/catalogues/lis-zero-gravity-veneers.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-ZERO-GRAVITY.pdf" },
  { slug: "lis-wood-grains-veneers", name: "LIS Wood Grains Veneers", category: "Veneers Collection", image: "/images/catalogues/lis-wood-grains-veneers.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-WOODGRAINS-.pdf" },
  { slug: "lis-wooden-synchro", name: "LIS Wooden Synchro", category: "Veneers Collection", image: "/images/catalogues/lis-wooden-synchro.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-wooden-synchro-SNC-500-.pdf" },
  { slug: "lis-tivora", name: "LIS Tivora", category: "Veneers Collection", image: "/images/catalogues/lis-tivora.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-TIVORA_INTERACTIVE.pdf" },
  { slug: "lis-bb-veneer", name: "LIS B&B Veneers", category: "Veneers Collection", image: "/images/catalogues/lis-bb-veneer.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-BB-4X10-.pdf" },

  { slug: "lis-elewood", name: "LIS Elewood", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-elewood.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Elewood-12-mm-HDF-Louvers.pdf" },
  { slug: "lis-veneered-flute-panels", name: "LIS Veneered Flute Panels", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-veneered-flute-panels.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Veneered-Flutes.pdf" },
  { slug: "lis-profiles-fluted-wood-panels", name: "LIS Profiles Fluted Wood Panels", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-profiles-fluted-wood-panels.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-PROFILES-Fluted-Wood-Panels.pdf" },
  { slug: "lis-sculpt-embossed", name: "LIS Sculpt Embossed", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-sculpt-embossed.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Sculpt-1-FT-EMBOSSED-PANELS.pdf" },
  { slug: "lis-sculpt-1ft", name: "LIS Sculpt 1FT", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-sculpt-1ft.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Sculpt-1-FT-PRECISELY-EMBOSSED-PS-PANELS-E_Catalogue.pdf" },
  { slug: "lis-edgex", name: "LIS Edgex", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-edgex.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Edgex-1-FT-Panels-With-Engraved-Metal-Grooves-For-Jointless-Interior-Spaces.pdf" },
  { slug: "lis-ceil-up", name: "LIS Ceil Up", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-ceil-up.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Ceil-Up-Panel-in-9.5-ft-Height-E-Catalogue_compressed.pdf" },
  { slug: "lis-louvers", name: "LIS Louvers", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-louvers.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Louvers-OG-PS-PANELS-MASTER-COLLECTION-2026-E-Catalogue_compressed-1.pdf" },
  { slug: "lis-flutes-profile", name: "LIS Flutes Profile", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-flutes-profile.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LEELA-INFRA-SOLUTION-PROFILE.pdf" },
  { slug: "lis-flow-10inch", name: "LIS Flow 10 Inch", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-flow-10inch.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Flow-10-Inch-PS-Parametric-Louvers.pdf" },
  { slug: "lis-rv-fluted-panels", name: "LIS RV Fluted Panels", category: "Stylish Fluted Panels", image: "/images/catalogues/lis-rv-fluted-panels.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-RV-FLUTED-PANELS-E-CATALOGUE.pdf" },

  { slug: "lis-bathroom-accessories", name: "LIS Bathroom Accessories", category: "Hardware & Bath Fittings", image: "/images/catalogues/lis-bathroom-accessories.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-bath-fitting-brochure.pdf" },
  { slug: "lis-bath-fitting-brochure", name: "LIS Bath Fitting Brochure", category: "Hardware & Bath Fittings", image: "/images/catalogues/lis-bath-fitting-brochure.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Bath-accessories-Brochure-.pdf" },
  { slug: "lis-aluminum-door-handle", name: "LIS Aluminium Door Handle", category: "Hardware & Bath Fittings", image: "/images/catalogues/lis-aluminum-door-handle.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Aluminum-Door-Handle-With-MRP-.pdf" },
  { slug: "lis-zinc-cabinet", name: "LIS Zinc Cabinet", category: "Hardware & Bath Fittings", image: "/images/catalogues/lis-zinc-cabinet.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Zinc-Cabinet-Catalog-New-MRP.pdf" },
  { slug: "lis-zinc-brass-mortile-handle", name: "LIS Zinc & Brass Mortise Handle", category: "Hardware & Bath Fittings", image: "/images/catalogues/lis-zinc-brass-mortile-handle.png", pdf: "https://leelainfra.in/wp-content/uploads/2026/05/LIS-Zinc-Brass-Mortise-Handle-with-MRP.pdf" },
];

export const CATALOGUE_CATEGORIES: CatalogueCategory[] = [
  "Veneers Collection",
  "Stylish Fluted Panels",
  "Hardware & Bath Fittings",
];

export function getCatalogueBySlug(slug: string) {
  return CATALOGUE_ITEMS.find((c) => c.slug === slug);
}

export function getCataloguesByCategory(category: CatalogueCategory) {
  return CATALOGUE_ITEMS.filter((c) => c.category === category);
}
