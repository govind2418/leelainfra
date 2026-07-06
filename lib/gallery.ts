import { WORK_IMAGES } from "./media";

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  tall?: boolean;
};

// Real project & product photography sourced from leelainfra.in
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Wood Floor & Fluted Wall — Burma Teak 578 C", category: "Wooden Flooring", image: WORK_IMAGES.heroLiving, tall: true },
  { id: "g2", title: "Fluted Bar Front — Finish B1", category: "Fluted Panels", image: WORK_IMAGES.barFluted },
  { id: "g3", title: "Fluted Wall Panel — Finish B2", category: "Fluted Panels", image: WORK_IMAGES.livingFluted, tall: true },
  { id: "g4", title: "Fluted Dining Wall — Finish B3", category: "Fluted Panels", image: "/images/work/veneered-flutes-4.jpg" },
  { id: "g5", title: "Fluted Lounge Wall — Finish B4", category: "Fluted Panels", image: "/images/work/veneered-flutes-5.jpg", tall: true },
  { id: "g6", title: "Fluted Bar Wall — Finish B5", category: "Fluted Panels", image: "/images/work/veneered-flutes-6.jpg" },
  { id: "g7", title: "Fluted Staircase Feature — Elewood 1300", category: "Fluted Panels", image: WORK_IMAGES.staircaseFluted, tall: true },
  { id: "g8", title: "Fluted Living Room — Elewood 1500", category: "Wall Panels", image: WORK_IMAGES.elewoodLouvers },
  { id: "g9", title: "Book-Matched Veneer Headboard", category: "Veneers", image: WORK_IMAGES.veneerHeadboard },
  { id: "g10", title: "Regrano Designer Burl Veneer", category: "Veneers", image: WORK_IMAGES.veneerBurl, tall: true },
  { id: "g11", title: "Regrano Console Veneer Panel", category: "Veneers", image: WORK_IMAGES.regranoFour },
  { id: "g12", title: "Textured Panel & Wood Slat Wall", category: "Wall Panels", image: WORK_IMAGES.texturedPanel, tall: true },
  { id: "g13", title: "Dining Room Fluted Panel", category: "Fluted Panels", image: WORK_IMAGES.diningFluted },
  { id: "g14", title: "Manhattan Collection — Slat Wall & Planks", category: "Wooden Flooring", image: WORK_IMAGES.manhattanPlanks },
  { id: "g15", title: "Veneer Plank Detail — Customisable", category: "Veneers", image: WORK_IMAGES.veneerGraphic },
];
