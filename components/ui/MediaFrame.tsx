import Image from "next/image";
import { ArtPlate, type ArtVariant } from "./ArtPlate";
import { cn } from "@/lib/utils";

export function MediaFrame({
  image,
  art,
  seed = 1,
  alt,
  className,
  label,
  priority,
  sizes,
}: {
  image?: string;
  art: ArtVariant;
  seed?: number;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!image) {
    return <ArtPlate variant={art} seed={seed} className={className} label={label} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-ink-2", className)}>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {label && <span className="eyebrow absolute bottom-4 left-5 z-10 text-gold-200/80">{label}</span>}
    </div>
  );
}
