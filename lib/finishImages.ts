// Real photography for individual product finish swatches, sourced from
// manufacturer/retailer product pages since no first-party photo existed
// for these specific finishes. Keyed as "productSlug:FinishName".
export const FINISH_IMAGES: Record<string, string> = {
  "wall-panels:Linen Weave": "/images/finishes/wall-panels/linen-weave.jpg",
  "wall-panels:Brushed Concrete": "/images/finishes/wall-panels/brushed-concrete.jpg",
  "wall-panels:Onyx Stone": "/images/finishes/wall-panels/onyx-stone.jpg",
  "wall-panels:Warm Oak": "/images/finishes/wall-panels/warm-oak.jpg",

  "fluted-panels:Charcoal Fluted": "/images/finishes/fluted-panels/charcoal-fluted.jpg",
  "fluted-panels:Champagne Oak": "/images/finishes/fluted-panels/champagne-oak.jpg",
  "fluted-panels:Ivory Groove": "/images/finishes/fluted-panels/ivory-groove.jpg",
  "fluted-panels:Walnut Line": "/images/finishes/fluted-panels/walnut-line.jpg",

  "laminates:Calacatta Stone": "/images/finishes/laminates/calacatta-stone.jpg",
  "laminates:Suede Slate": "/images/finishes/laminates/suede-slate.jpg",
  "laminates:Golden Teak": "/images/finishes/laminates/golden-teak.jpg",
  "laminates:Textile Linen": "/images/finishes/laminates/textile-linen.jpg",

  "hardware:Brushed Brass": "/images/finishes/hardware/brushed-brass.jpg",
  "hardware:Gunmetal": "/images/finishes/hardware/gunmetal.jpg",
  "hardware:Matte Black": "/images/finishes/hardware/matte-black.jpg",
  "hardware:Champagne Steel": "/images/finishes/hardware/champagne-steel.jpg",

  "bath-fittings:Brushed Gold": "/images/finishes/bath-fittings/brushed-gold.jpg",
  "bath-fittings:Matte Black": "/images/finishes/bath-fittings/matte-black.jpg",
  "bath-fittings:Chrome": "/images/finishes/bath-fittings/chrome.jpg",
  "bath-fittings:Brushed Nickel": "/images/finishes/bath-fittings/brushed-nickel.jpg",
};

export function getFinishImage(productSlug: string, finish: string) {
  return FINISH_IMAGES[`${productSlug}:${finish}`];
}
