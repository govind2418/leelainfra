"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { LenisContext } from "@/hooks/useLenis";
import { gsap, ScrollTrigger, registerGsap } from "@/hooks/useGsap";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    registerGsap();

    const instance = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    lenisRef.current = instance;
    setLenis(instance);

    instance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
