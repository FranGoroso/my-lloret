export function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Celeste orb — top left */}
      <div className="absolute top-[20%] left-[15%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-30 animate-orb-1"
        style={{ background: "oklch(0.68 0.18 215)" }} />

      {/* Dorado orb — right */}
      <div className="absolute top-[40%] right-[10%] w-[280px] h-[280px] rounded-full blur-[90px] opacity-20 animate-orb-2"
        style={{ background: "oklch(0.80 0.17 80)" }} />

      {/* Deep navy orb — bottom center */}
      <div className="absolute bottom-[20%] left-[40%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-15 animate-orb-3"
        style={{ background: "oklch(0.40 0.12 235)" }} />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-[1px] animate-scan pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.16 220 / 0.6), transparent)" }} />
    </div>
  )
}
