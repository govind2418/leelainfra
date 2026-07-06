"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch, visible, x, y]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div
        className="absolute rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 7,
          height: 7,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #ecd8a3, #c39a4c)",
          boxShadow: "0 0 12px 2px rgba(211,171,95,0.7)",
        }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute flex items-center justify-center rounded-full border"
        animate={{
          width: hovering ? 68 : 32,
          height: hovering ? 68 : 32,
          borderColor: hovering ? "rgba(211,171,95,0.8)" : "rgba(211,171,95,0.4)",
          backgroundColor: hovering ? "rgba(211,171,95,0.12)" : "rgba(211,171,95,0)",
          backdropFilter: hovering ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.6 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight size={18} className="text-gold-200" />
        </motion.div>
      </motion.div>
    </div>
  );
}
