import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="border-y border-line bg-ink-1/60 py-16">
      <div className="container-luxe grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl text-cream sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} className="text-gradient-gold" />
            </p>
            <p className="mt-2 text-xs tracking-wide text-cream-dim sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
