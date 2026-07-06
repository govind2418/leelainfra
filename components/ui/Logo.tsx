import { cn } from "@/lib/utils";

export function Logo({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const nameSize = size === "lg" ? "text-3xl sm:text-4xl" : size === "md" ? "text-xl sm:text-2xl" : "text-lg";
  const tagSize = size === "lg" ? "text-[0.7rem]" : "text-[0.55rem]";

  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className={cn("font-display tracking-wide text-cream", nameSize)}>
        Leela <span className="font-accent text-gradient-gold italic">Infra</span>
      </span>
      <span className={cn("mt-1 font-semibold tracking-[0.4em] text-gold-400/85 uppercase", tagSize)}>
        Solution
      </span>
    </span>
  );
}
