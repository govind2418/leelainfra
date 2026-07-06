import { WORK_IMAGES } from "./media";

export type Project = {
  slug: string;
  title: string;
  typology: string;
  location: string;
  year: string;
  art: "wood" | "panel" | "fluted" | "veneer" | "laminate" | "hardware" | "bath";
  image?: string;
  description: string;
  scope: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "bandra-west-residence",
    title: "Private Residence",
    typology: "3,400 sq.ft Residence",
    location: "Bandra West, Mumbai",
    year: "2025",
    art: "wood",
    image: WORK_IMAGES.manhattanPlanks,
    description:
      "A full interior fit-out anchored by wide-plank smoked oak flooring and book-matched veneer panelling across the living core.",
    scope: ["Wooden Flooring", "Veneers", "Hardware"],
  },
  {
    slug: "alibaug-villa",
    title: "Weekend Villa",
    typology: "6,200 sq.ft Villa",
    location: "Alibaug, Maharashtra",
    year: "2024",
    art: "fluted",
    image: WORK_IMAGES.flutesFour,
    description:
      "Fluted panel facades and outdoor-grade hardware specified for a coastal villa built for indoor-outdoor living.",
    scope: ["Fluted Panels", "Wall Panels", "Bath Fittings"],
  },
  {
    slug: "bkc-corporate-hq",
    title: "Corporate Headquarters",
    typology: "18,000 sq.ft Office",
    location: "BKC, Mumbai",
    year: "2024",
    art: "panel",
    image: WORK_IMAGES.texturedPanel,
    description:
      "Acoustic wall panelling and durable laminate surfaces specified across reception, boardrooms and open-plan floors.",
    scope: ["Wall Panels", "Laminates", "Hardware"],
  },
  {
    slug: "goa-boutique-hotel",
    title: "Boutique Hotel",
    typology: "24-Key Property",
    location: "Assagao, Goa",
    year: "2023",
    art: "bath",
    image: WORK_IMAGES.bathRainShower,
    description:
      "Spa-grade bath fittings and warm timber veneers used across all guest suites and the ground-floor lobby.",
    scope: ["Bath Fittings", "Veneers", "Wooden Flooring"],
  },
  {
    slug: "powai-penthouse",
    title: "Skyline Penthouse",
    typology: "5,100 sq.ft Duplex",
    location: "Powai, Mumbai",
    year: "2023",
    art: "veneer",
    image: WORK_IMAGES.veneerBurl,
    description:
      "A duplex penthouse finished with rift-cut ash veneers, brushed brass hardware and a fully custom wardrobe system.",
    scope: ["Veneers", "Hardware", "Wall Panels"],
  },
  {
    slug: "juhu-showroom",
    title: "Flagship Showroom",
    typology: "3,800 sq.ft Retail",
    location: "Juhu, Mumbai",
    year: "2022",
    art: "laminate",
    image: WORK_IMAGES.flutesSix,
    description:
      "A retail fit-out using stone-visual laminates and fluted display walls to stage a premium fashion label.",
    scope: ["Laminates", "Fluted Panels", "Hardware"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
