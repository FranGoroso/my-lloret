export function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Primary violet orb — top left */}
      <div className="absolute top-[20%] left-[15%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-30 animate-orb-1"
        style={{ background: "oklch(0.63 0.34 280)" }} />

      {/* Fuchsia orb — right */}
      <div className="absolute top-[40%] right-[10%] w-[280px] h-[280px] rounded-full blur-[90px] opacity-20 animate-orb-2"
        style={{ background: "oklch(0.57 0.31 312)" }} />

      {/* Deep violet orb — bottom center */}
      <div className="absolute bottom-[20%] left-[40%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-15 animate-orb-3"
        style={{ background: "oklch(0.45 0.28 270)" }} />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-[1px] animate-scan pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.34 280 / 0.6), transparent)" }} />
    </div>
  )
}
