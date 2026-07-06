import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
  speed = "normal",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}) {
  const duration = speed === "slow" ? "50s" : speed === "fast" ? "20s" : "34s";

  return (
    <div className={cn("group flex overflow-hidden", className)} style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn("flex shrink-0 items-center", reverse ? "animate-marquee-reverse" : "animate-marquee")}
          style={{ animationDuration: duration }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
