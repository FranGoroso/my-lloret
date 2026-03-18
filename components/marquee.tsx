import { BUSINESS } from "@/constants/business"

const rowA = [
  { text: BUSINESS.name, accent: true },
  { text: "Cocktails de Autor", accent: false },
  { text: "◆", accent: true, small: true },
  { text: "Live DJs", accent: false },
  { text: "Costa Brava", accent: false },
  { text: "◆", accent: true, small: true },
  { text: "Shisha Premium", accent: false },
  { text: "Mesas VIP", accent: "gold" },
  { text: "◆", accent: true, small: true },
  { text: "Lloret de Mar", accent: false },
  { text: "Noches Únicas", accent: "gold" },
  { text: "◆", accent: true, small: true },
]

const rowB = [
  { text: "Open Bar", accent: false },
  { text: "◆", accent: true, small: true },
  { text: "Discoteca", accent: "gold" },
  { text: "◆", accent: true, small: true },
  { text: "Costa Brava", accent: false },
  { text: "Reserva tu Mesa", accent: true },
  { text: "◆", accent: true, small: true },
  { text: "Every Weekend", accent: false },
  { text: "◆", accent: true, small: true },
  { text: BUSINESS.name, accent: "gold" },
  { text: "Club Nocturno", accent: false },
  { text: "◆", accent: true, small: true },
]

type Item = { text: string; accent: boolean | string; small?: boolean }

function MarqueeRow({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max items-center"
        style={{ animation: `marquee ${reverse ? "25s" : "30s"} linear infinite ${reverse ? "reverse" : ""}` }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`
              px-4 whitespace-nowrap font-display font-bold uppercase tracking-[0.22em]
              ${item.small
                ? "text-[10px] text-primary/60"
                : item.accent === "gold"
                  ? "text-[11px] text-accent"
                  : item.accent
                    ? "text-[11px] text-primary"
                    : "text-[11px] text-muted-foreground/70"
              }
            `}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <div className="relative border-y border-border/60 overflow-hidden select-none bg-background/80 backdrop-blur-sm">
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Glow line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="py-3 space-y-2.5">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </div>
  )
}
