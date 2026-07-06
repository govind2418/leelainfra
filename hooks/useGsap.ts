"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function registerGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function useGsapContext<T extends HTMLElement = HTMLDivElement>(
  callback: (scope: RefObject<T | null>) => (() => void) | void,
  deps: React.DependencyList = []
) {
  const scope = useRef<T | null>(null);

  useLayoutEffect(() => {
    registerGsap();
    let cleanup: (() => void) | void;
    const ctx = gsap.context(() => {
      cleanup = callback(scope);
    }, scope);
    return () => {
      cleanup?.();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}

export { gsap, ScrollTrigger };
