export type VeneerType = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  process: string;
  applications: string;
  specs: { label: string; value: string }[];
  varieties: string[];
  heroImage: string;
  images: string[];
};

const STANDARD_SPECS = [
  { label: "Veneer Thickness", value: "0.5 mm" },
  { label: "Grain Pattern", value: "Horizontal & Vertical" },
  { label: "Veneer Cut", value: "Rift, Flowery & Quarter" },
  { label: "Base Material", value: "4 mm Ply, Fleece Back" },
  { label: "Sizes Available", value: "8×4 / 10×4 / 12×4 ft" },
];

function gallery(slug: string) {
  return Array.from({ length: 9 }, (_, i) => `/images/veneer-types/${slug}/${i + 1}.jpg`);
}

export const VENEER_TYPES: VeneerType[] = [
  {
    slug: "natural",
    name: "Natural",
    tagline: "Timeless elegance in every grain.",
    description:
      "Natural Veneer brings the warmth and authenticity of real wood to modern interiors. Crafted from the finest natural wood, our veneers showcase unique grains, rich textures and premium finishes that elevate every space — built for furniture, wall applications and custom design projects that balance aesthetic sophistication with sustainable sourcing and durability.",
    process:
      "Sliced directly from carefully selected natural logs to preserve each species' inherent grain character, then laid onto a stabilised backing for consistent sheet-to-sheet performance.",
    applications: "Furniture fronts, feature walls, doors and bespoke joinery where authentic wood character is the goal.",
    specs: STANDARD_SPECS,
    varieties: [
      "Burma Teak Crown",
      "Burma Teak (Quarter)",
      "Brazilian Rexino",
      "Bacote",
      "Anigre",
      "American Walnut (Quarter-cut)",
      "Afromosia Crown",
      "American Walnut Crown",
      "Cello Walnut",
    ],
    heroImage: "/images/veneer-types/natural/hero.png",
    images: gallery("natural"),
  },
  {
    slug: "fumed",
    name: "Fumed",
    tagline: "Where innovation meets organic beauty.",
    description:
      "Fumed Veneer transforms natural wood through a special fuming process, enriching its colour and character from within. The result is a deeper, darker and more luxurious finish that highlights the wood's natural grain with striking contrast and elegance — a bold, sophisticated touch for high-end interiors, furniture and feature walls.",
    process:
      "Raw wood is exposed to a controlled fuming process that reacts with the tannins in the timber, deepening its tone from the inside out rather than through surface-level staining.",
    applications: "High-end interiors, statement furniture and feature walls that call for a darker, more dramatic timber tone.",
    specs: STANDARD_SPECS,
    varieties: [
      "Ash",
      "Aspean",
      "Australian Ebony",
      "Beach",
      "Buckoak",
      "Chestnut Crown",
      "Chestnut Quarter",
      "Cocobolo",
      "Cocobolo Quarter",
    ],
    heroImage: "/images/veneer-types/fumed/hero.png",
    images: gallery("fumed"),
  },
  {
    slug: "dyed",
    name: "Dyed",
    tagline: "Vibrant colour, natural beauty, endless possibilities.",
    description:
      "Dyed Veneer combines premium wood with rich, lasting colour through an advanced dyeing process that penetrates deep into the grain. This method maintains the wood's natural texture while delivering uniform, vivid hues — ideal for modern interiors, statement furniture and custom design projects that blend creative freedom with natural elegance.",
    process:
      "Natural veneer sheets are deep-dyed under controlled conditions so colour penetrates through the grain rather than sitting on the surface, keeping the timber's texture and figure fully visible.",
    applications: "Statement furniture, accent walls and design-led interiors that need a specific, consistent colour story.",
    specs: STANDARD_SPECS,
    varieties: [
      "Armani Beige",
      "Earth Oak",
      "Figured Bosse",
      "Koto Walnut",
      "Oak Beige QC",
      "Oak Dark Grey",
      "Oak Dune",
      "Oak Earth QC",
      "Oak Essen",
    ],
    heroImage: "/images/veneer-types/dyed/hero.png",
    images: gallery("dyed"),
  },
  {
    slug: "chevron",
    name: "Chevron",
    tagline: "Where geometry meets elegance.",
    description:
      "Chevron Veneer brings structure and sophistication to wood surfaces with its signature V-shaped pattern, created by expertly joining angled veneer cuts to achieve rhythm, movement and visual interest. Built on symmetry and precision, it suits feature walls, cabinetry and upscale interiors — in natural tones or bold finishes — for a refined, architectural statement that's both classic and contemporary.",
    process:
      "Individual veneer leaves are cut at a precise angle and book-matched in sequence so the grain lines meet edge-to-edge, forming the continuous V pattern across the full panel.",
    applications: "Feature walls, cabinetry fronts and floors where a strong architectural pattern is the centrepiece.",
    specs: STANDARD_SPECS,
    varieties: [
      "Chevron Natural",
      "White Oak",
      "SMK Hazelwood",
      "American Walnut",
      "Zaza Crown",
      "Dyed White Armani",
      "Dyed Grey Zaza",
      "Macassar Ebony",
      "SMK Fig Eucalyptus",
    ],
    heroImage: "/images/veneer-types/chevron/hero.png",
    images: gallery("chevron"),
  },
  {
    slug: "metalic",
    name: "Metallic",
    tagline: "Sleek shine, modern edge, timeless appeal.",
    description:
      "Metallic Veneer combines natural wood beauty with metallic finishes through an innovative surface treatment. Each sheet offers a subtle lustre or bold reflectivity — available in brushed, burnished or polished options — transforming ordinary surfaces into statement features for luxury interiors, boutique spaces and modern furniture design.",
    process:
      "A fine metallic layer is fused to the veneer face and finished in a brushed, burnished or polished texture, pairing organic wood grain with an industrial-grade sheen.",
    applications: "Luxury retail, boutique hospitality and feature furniture that need a reflective, contemporary edge.",
    specs: STANDARD_SPECS,
    varieties: [
      "Metallic Natural",
      "Arbor Oak",
      "Copper Ash Burl",
      "Elite",
      "Eucalyptus",
      "Flacky Oak",
      "Gold Wenge",
      "Kossippo",
      "Limedoak",
    ],
    heroImage: "/images/veneer-types/metalic/hero.png",
    images: gallery("metalic"),
  },
  {
    slug: "ligno",
    name: "Ligno",
    tagline: "Where nature speaks for itself.",
    description:
      "Ligno Veneer celebrates the raw, authentic essence of wood in its most refined form. Carefully selected and minimally treated, it preserves natural grain, texture and warmth, bringing quiet sophistication and organic charm to any design. Built on a balance of timeless beauty, honest materials and subtle impact, it suits serene interiors, minimalist furniture and spaces that value simplicity with soul.",
    process:
      "Timber is selected for its natural figure and given a minimal-treatment finish, so the sheet retains as much of the wood's raw, unaltered character as possible.",
    applications: "Minimalist furniture and serene, pared-back interiors where understated natural texture is the priority.",
    specs: STANDARD_SPECS,
    varieties: ["1003", "1004", "1006", "1009", "1010", "1011", "1014", "1019", "2003"],
    heroImage: "/images/veneer-types/ligno/hero.png",
    images: gallery("ligno"),
  },
  {
    slug: "hybrid",
    name: "Hybrid",
    tagline: "Natural wood meets advanced technology.",
    description:
      "Hybrid Veneer merges the best of natural wood and advanced technology to create a material that's both beautiful and highly functional. Combining natural veneers with a performance-enhancing substrate, it offers authentic wood aesthetics with improved durability and design adaptability — a contemporary option for commercial interiors, custom furniture and high-traffic spaces.",
    process:
      "A natural veneer face is bonded to an engineered, performance-enhanced substrate, improving stability and wear resistance without compromising the authentic wood surface.",
    applications: "Commercial interiors, custom furniture and high-traffic spaces that need real wood looks with added durability.",
    specs: STANDARD_SPECS,
    varieties: [
      "Ammara Ebony",
      "Anigre",
      "Austin Ash",
      "Brown Linear",
      "Dyed Oak Grey",
      "Elbrus Elder",
      "Geva Ash Brown",
      "Geva Ash Green",
      "Geva Ash Grey",
    ],
    heroImage: "/images/veneer-types/hybrid/hero.png",
    images: gallery("hybrid"),
  },
  {
    slug: "emboss",
    name: "Emboss",
    tagline: "Texture that speaks, design that inspires.",
    description:
      "Emboss Veneer uses precision embossing techniques to imprint intricate patterns onto the wood surface, enhancing its organic grain with added dimension, texture and depth. Ranging from geometric motifs to nature-inspired reliefs, it's a fusion of craftsmanship and innovation designed to elevate modern interiors, bespoke furniture and architectural features.",
    process:
      "Veneer sheets are pressed under a patterned die that imprints a raised or recessed texture into the surface, adding tactile depth on top of the natural grain.",
    applications: "Bespoke furniture, architectural feature panels and any surface designed to be felt as much as seen.",
    specs: STANDARD_SPECS,
    varieties: [
      "Emboss Natural",
      "Linen Zephyr",
      "Pixel Eriko White",
      "Pixel Eyong Latte",
      "Pixel Koto Beige",
      "Pixel White Oak",
      "Pixel Koto Walnut",
      "Pixel Natural Teak",
      "Pixel Oaklyn",
    ],
    heroImage: "/images/veneer-types/emboss/hero.png",
    images: gallery("emboss"),
  },
];

export function getVeneerTypeBySlug(slug: string) {
  return VENEER_TYPES.find((v) => v.slug === slug);
}

// Display order requested for the "Types of Veneers" tabs
export const VENEER_TYPE_ORDER = [
  "dyed",
  "natural",
  "fumed",
  "chevron",
  "metalic",
  "ligno",
  "hybrid",
  "emboss",
];

export const ORDERED_VENEER_TYPES = VENEER_TYPE_ORDER.map((slug) => getVeneerTypeBySlug(slug)!);
