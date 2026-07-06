export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-gold-600/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-gold-400/[0.07] blur-[160px]" />
      <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-gold-900/20 blur-[140px]" />
      <div className="grain absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
