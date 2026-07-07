import { WORK_IMAGES } from "./media";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  art: "wood" | "panel" | "fluted" | "veneer" | "laminate" | "hardware" | "bath";
  image?: string;
  video?: string;
  highlights: string[];
  specs: ProductSpec[];
  finishes: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "wooden-flooring",
    name: "Wooden Flooring",
    short: "Engineered & solid timber floors with a couture finish.",
    description:
      "Engineered and solid timber flooring milled for dimensional stability and finished to a couture standard — warm underfoot, resilient to Mumbai's humidity, and available pre-finished or site-polished to match any interior palette. Trusted wooden flooring in Mumbai for homes and studios alike.",
    art: "wood",
    image: WORK_IMAGES.manhattanPlanks,
    highlights: [
      "Kiln-dried, moisture-stabilised engineered core",
      "UV-cured lacquer or hand-oiled matte finish",
      "Underfloor heating compatible",
      "Herringbone, chevron & wide-plank layouts",
    ],
    specs: [
      { label: "Plank width", value: "120 – 240 mm" },
      { label: "Wear layer", value: "3 – 6 mm" },
      { label: "Finish", value: "Matte, oiled, UV lacquer" },
      { label: "Warranty", value: "Up to 25 years" },
    ],
    finishes: ["Smoked Oak", "Natural Walnut", "Ivory Ash", "Ebonised Teak"],
  },
  {
    slug: "wall-panels",
    name: "Wall Panels",
    short: "Sculptural surfaces that turn a wall into architecture.",
    description:
      "Modular wall panels for Mumbai homes and offices, engineered for fast, dust-free installation — from upholstered acoustic panels to stone-veneered slabs — giving every wall the depth and tactility of bespoke joinery.",
    art: "panel",
    image: WORK_IMAGES.texturedPanel,
    video: "/videos/wall-panels-hero.mp4",
    highlights: [
      "Tool-free click & clip installation system",
      "Acoustic core options for home theatres & studies",
      "Fire-rated substrates available",
      "Seamless backlighting channels",
    ],
    specs: [
      { label: "Panel size", value: "600 × 2400 mm" },
      { label: "Thickness", value: "10 – 18 mm" },
      { label: "Core", value: "MDF / WPC / Acoustic foam" },
      { label: "Installation", value: "Clip-lock, adhesive or batten" },
    ],
    finishes: ["Linen Weave", "Brushed Concrete", "Onyx Stone", "Warm Oak"],
  },
  {
    slug: "fluted-panels",
    name: "Fluted Panels",
    short: "Rhythmic grooves that sculpt light across every wall.",
    description:
      "Precision-milled fluted panels in Mumbai that carve continuous vertical rhythm into walls, islands and wardrobe shutters — a signature of the modern luxury interior, engineered for razor-sharp groove consistency.",
    art: "fluted",
    image: WORK_IMAGES.solidWoodFlutedPanels,
    highlights: [
      "Consistent 10–30 mm groove profiles",
      "PU / laminate / veneer face options",
      "Curves & radius panels on request",
      "Termite and warp resistant WPC core",
    ],
    specs: [
      { label: "Groove profile", value: "10, 20, 30 mm" },
      { label: "Panel height", value: "Up to 3000 mm" },
      { label: "Core", value: "WPC / MDF" },
      { label: "Face finish", value: "PU, veneer, laminate" },
    ],
    finishes: ["Charcoal Fluted", "Champagne Oak", "Ivory Groove", "Walnut Line"],
  },
  {
    slug: "veneers",
    name: "Veneers",
    short: "Natural wood grain, engineered for architectural scale.",
    description:
      "Rare-cut natural and reconstituted veneers, supplied across Mumbai, that bring authentic wood grain to doors, panelling and furniture at architectural scale — book-matched and balanced for a seamless, gallery-grade finish.",
    art: "veneer",
    image: WORK_IMAGES.veneerBurl,
    highlights: [
      "Book-matched & slip-matched layouts",
      "Natural, dyed & reconstituted ranges",
      "FR & moisture-resistant backing available",
      "Face thickness engineered for re-polishing",
    ],
    specs: [
      { label: "Sheet size", value: "8 × 4 ft" },
      { label: "Face thickness", value: "0.6 mm" },
      { label: "Backing", value: "MR / BWP ply, MDF" },
      { label: "Matching", value: "Book, slip, radial" },
    ],
    finishes: ["Teak Natural", "Grey Oak", "Wenge Dark", "Rift Cut Ash"],
  },
  {
    slug: "laminates",
    name: "Laminates",
    short: "High-pressure surfaces built for daily luxury.",
    description:
      "High-pressure and FRD laminates engineered for realism and depth — stone, wood and textile visuals fused with scratch and stain resistance so everyday surfaces survive family life without losing their shine.",
    art: "laminate",
    image: WORK_IMAGES.merinoLaminateCover,
    highlights: [
      "High-pressure (HPL) & compact grades",
      "Anti-fingerprint & anti-scratch topcoats",
      "Matt, suede, gloss & textured finishes",
      "Post-form grade sheets for curved edges",
    ],
    specs: [
      { label: "Sheet size", value: "8 × 4 ft" },
      { label: "Thickness", value: "0.8 – 1.2 mm" },
      { label: "Finish", value: "Matt, suede, gloss" },
      { label: "Grade", value: "HPL, compact, post-form" },
    ],
    finishes: ["Calacatta Stone", "Suede Slate", "Golden Teak", "Textile Linen"],
  },
  {
    slug: "hardware",
    name: "Hardware",
    short: "Precision fittings where function meets jewellery.",
    description:
      "Soft-close hinges, channel handles, sliding systems and structural fittings machined to a jewellery-grade finish — the hardware layer that decides whether a luxury interior actually feels luxurious to use.",
    art: "hardware",
    image: WORK_IMAGES.hardwareTowelBar,
    video: "/videos/hardware-hero.webm",
    highlights: [
      "Soft-close & push-to-open mechanisms",
      "PVD finishes resistant to tarnishing",
      "Heavy-duty sliding & pocket door systems",
      "Modular wardrobe & kitchen fitting kits",
    ],
    specs: [
      { label: "Finish", value: "PVD Gold, Gunmetal, Matte Black" },
      { label: "Load rating", value: "Up to 80 kg per channel" },
      { label: "Mechanism", value: "Soft-close, push-open" },
      { label: "Warranty", value: "10 years" },
    ],
    finishes: ["Brushed Brass", "Gunmetal", "Matte Black", "Champagne Steel"],
  },
  {
    slug: "bath-fittings",
    name: "Bath Fittings",
    short: "Spa-grade fixtures finished like fine jewellery.",
    description:
      "Faucets, showers and sanitaryware engineered for spa-grade comfort — ceramic disc cartridges, corrosion-proof finishes and silhouettes designed to anchor a bathroom as a genuine wellness space.",
    art: "bath",
    image: WORK_IMAGES.bathRainShower,
    highlights: [
      "Ceramic disc ⅓-turn ceramic cartridges",
      "PVD & nano-coated corrosion resistance",
      "Rain, waterfall & thermostatic shower systems",
      "Water-saving aerators across the range",
    ],
    specs: [
      { label: "Cartridge", value: "Ceramic disc, ⅓ turn" },
      { label: "Finish", value: "PVD, chrome, brushed nickel" },
      { label: "Pressure", value: "0.5 – 5 bar" },
      { label: "Warranty", value: "12 years" },
    ],
    finishes: ["Brushed Gold", "Matte Black", "Chrome", "Brushed Nickel"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
