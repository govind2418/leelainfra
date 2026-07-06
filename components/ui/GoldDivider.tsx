import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return <div className={cn("hairline", className)} />;
}
