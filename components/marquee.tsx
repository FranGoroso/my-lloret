const items = [
  "My Lloret",
  "Discoteca",
  "Lloret de Mar",
  "Cocktails de Autor",
  "Shisha Premium",
  "Live DJs",
  "Mesas VIP",
  "Costa Brava",
  "Noches Únicas",
]

export function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="border-y border-border overflow-hidden bg-card py-4 select-none">
      <div className="flex animate-marquee w-max">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className={`
              px-5 text-[11px] font-bold uppercase tracking-[0.25em] whitespace-nowrap
              ${i % 4 === 0 ? "font-display text-sm text-primary" : "text-muted-foreground"}
            `}>
              {item}
            </span>
            <span className="text-border/50 text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
