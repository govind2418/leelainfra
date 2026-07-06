import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-4xl leading-[1.08] font-medium text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-cream-dim sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
