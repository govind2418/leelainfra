"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type ArtVariant = "wood" | "panel" | "fluted" | "veneer" | "laminate" | "hardware" | "bath";

const GOLD = ["#d3ab5f", "#ecd8a3", "#a37f3b", "#f4efe3"];

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Values are precomputed into a plain array (not pulled one-at-a-time from a
// stateful generator) so reading values[i] is a pure, side-effect-free
// operation. That keeps server and client output byte-identical even when
// React double-invokes a component render (e.g. Strict Mode in dev) — a
// mutable `rnd()` closure shared across such invocations would otherwise
// drift and trigger a hydration mismatch.
function WoodArt({ values }: { values: number[] }) {
  const lines = Array.from({ length: 9 }).map((_, i) => {
    const base = i * 5;
    const y = 20 + i * 22 + values[base] * 8;
    const amp = 10 + values[base + 1] * 14;
    const d = `M -20 ${y} C ${100 + values[base + 2] * 60} ${y - amp}, ${220 - values[base + 3] * 60} ${y + amp}, ${420} ${y}`;
    return <path key={i} d={d} stroke={GOLD[i % GOLD.length]} strokeOpacity={0.16 + values[base + 4] * 0.22} strokeWidth={1.2} fill="none" />;
  });
  return <>{lines}</>;
}

function FlutedArt({ values }: { values: number[] }) {
  const count = 16;
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const x = i * (400 / count);
        const lit = i % 3 === 0;
        return (
          <rect
            key={i}
            x={x}
            y={0}
            width={400 / count - 3}
            height={400}
            rx={6}
            fill={lit ? "url(#fluteLight)" : "rgba(244,239,227,0.045)"}
            opacity={lit ? 0.5 + values[i] * 0.2 : 1}
          />
        );
      })}
    </>
  );
}

function PanelArt() {
  return (
    <>
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => {
          const active = row === 1 && col === 1;
          return (
            <rect
              key={`${row}-${col}`}
              x={20 + col * 190}
              y={20 + row * 128}
              width={170}
              height={108}
              rx={4}
              fill={active ? "url(#panelGlow)" : "transparent"}
              stroke={active ? "#d3ab5f" : "rgba(244,239,227,0.14)"}
              strokeWidth={1}
            />
          );
        })
      )}
    </>
  );
}

function VeneerArt({ values }: { values: number[] }) {
  const chevrons = Array.from({ length: 7 });
  return (
    <>
      {chevrons.map((_, i) => {
        const x = i * 60 - 20;
        return (
          <g key={i} opacity={0.2 + values[i] * 0.25}>
            <path d={`M ${x} 400 L ${x + 60} 0`} stroke="#ecd8a3" strokeWidth={1.4} />
            <path d={`M ${x + 60} 400 L ${x} 0`} stroke="#a37f3b" strokeWidth={1.4} />
          </g>
        );
      })}
    </>
  );
}

function LaminateArt({ values }: { values: number[] }) {
  const veins = Array.from({ length: 5 }).map((_, i) => {
    const base = i * 3;
    const y = 40 + i * 70 + values[base] * 30;
    return (
      <path
        key={i}
        d={`M -20 ${y} Q 100 ${y - 60 - values[base + 1] * 40} 200 ${y - 10} T 420 ${y + 20}`}
        stroke={GOLD[i % GOLD.length]}
        strokeWidth={0.9 + values[base + 2]}
        strokeOpacity={0.22}
        fill="none"
      />
    );
  });
  return <>{veins}</>;
}

function HardwareArt() {
  return (
    <>
      <circle cx={130} cy={140} r={46} fill="none" stroke="#d3ab5f" strokeOpacity={0.5} strokeWidth={1} />
      <circle cx={130} cy={140} r={6} fill="#d3ab5f" fillOpacity={0.6} />
      <rect x={210} y={60} width={14} height={280} rx={7} fill="rgba(244,239,227,0.08)" stroke="#a37f3b" strokeOpacity={0.5} />
      <line x1={20} y1={260} x2={380} y2={260} stroke="rgba(244,239,227,0.15)" strokeWidth={1} strokeDasharray="2 6" />
      <path d="M 260 140 h 90" stroke="#ecd8a3" strokeOpacity={0.4} strokeWidth={1} />
      <circle cx={360} cy={140} r={4} fill="#ecd8a3" fillOpacity={0.6} />
    </>
  );
}

function BathArt({ values }: { values: number[] }) {
  return (
    <>
      {[1, 2, 3, 4].map((r, i) => (
        <circle key={r} cx={200} cy={210} r={r * 34 + values[i] * 6} fill="none" stroke="#d3ab5f" strokeOpacity={0.28 - r * 0.04} strokeWidth={1} />
      ))}
      <path d="M 140 40 v 60 q 0 26 26 26 h 68" stroke="#ecd8a3" strokeOpacity={0.55} strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={234} cy={126} r={5} fill="#ecd8a3" fillOpacity={0.6} />
    </>
  );
}

export function ArtPlate({
  variant,
  seed = 1,
  className,
  label,
}: {
  variant: ArtVariant;
  seed?: number;
  className?: string;
  label?: string;
}) {
  const values = useMemo(() => {
    const rnd = seededRandom(seed * 97 + 13);
    return Array.from({ length: 48 }, () => rnd());
  }, [seed]);

  return (
    <div className={cn("relative overflow-hidden bg-ink-2", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 0%, rgba(211,171,95,0.14), transparent 55%), radial-gradient(90% 90% at 100% 100%, rgba(163,127,59,0.12), transparent 60%), var(--ink-2)",
        }}
      />
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="fluteLight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d3ab5f" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#ecd8a3" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d3ab5f" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="panelGlow" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#d3ab5f" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d3ab5f" stopOpacity="0" />
          </radialGradient>
        </defs>
        {variant === "wood" && <WoodArt values={values} />}
        {variant === "fluted" && <FlutedArt values={values} />}
        {variant === "panel" && <PanelArt />}
        {variant === "veneer" && <VeneerArt values={values} />}
        {variant === "laminate" && <LaminateArt values={values} />}
        {variant === "hardware" && <HardwareArt />}
        {variant === "bath" && <BathArt values={values} />}
      </svg>
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {label && (
        <span className="eyebrow absolute bottom-4 left-5 text-gold-200/80">{label}</span>
      )}
    </div>
  );
}
