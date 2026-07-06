import { WORK_IMAGES } from "./media";

export type Collection = {
  slug: string;
  name: string;
  category: string;
  description: string;
  art: "wood" | "panel" | "fluted" | "veneer" | "laminate" | "hardware" | "bath";
  image?: string;
  pieces: number;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "leela-wood",
    name: "Leela Wood",
    category: "Flooring & Veneers",
    description:
      "Our founding collection — engineered timber floors and book-matched veneers milled for architectural scale.",
    art: "wood",
    image: WORK_IMAGES.manhattanPlanks,
    pieces: 18,
  },
  {
    slug: "leela-flute",
    name: "Leela Flute",
    category: "Fluted Panels",
    description: "Precision-grooved panel systems that sculpt light across walls, islands and shutters.",
    art: "fluted",
    image: WORK_IMAGES.staircaseFluted,
    pieces: 12,
  },
  {
    slug: "leela-panel",
    name: "Leela Panel",
    category: "Wall Panels",
    description: "Modular acoustic and stone-veneered panelling engineered for tool-free installation.",
    art: "panel",
    image: WORK_IMAGES.livingFluted,
    pieces: 14,
  },
  {
    slug: "leela-surface",
    name: "Leela Surface",
    category: "Laminates",
    description: "High-pressure laminate surfaces fusing photographic realism with everyday durability.",
    art: "laminate",
    image: WORK_IMAGES.merinoLaminateCover,
    pieces: 26,
  },
  {
    slug: "leela-metal",
    name: "Leela Metal",
    category: "Hardware",
    description: "Jewellery-grade hinges, channels and sliding systems finished in PVD and brushed metal.",
    art: "hardware",
    image: WORK_IMAGES.hardwareTowelBar,
    pieces: 9,
  },
  {
    slug: "leela-aqua",
    name: "Leela Aqua",
    category: "Bath Fittings",
    description: "Spa-grade faucets and shower systems designed to anchor the modern luxury bathroom.",
    art: "bath",
    image: WORK_IMAGES.bathRainShower,
    pieces: 11,
  },
];
