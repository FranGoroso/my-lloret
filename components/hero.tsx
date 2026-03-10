import Image from "next/image"
import { Phone } from "lucide-react"
import { HeroOrbs } from "@/components/hero-orbs"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="My Lloret — Discoteca Lloret de Mar"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      </div>

      {/* Floating light orbs + scan line */}
      <HeroOrbs />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pb-16 w-full">
        {/* Animated accent line */}
        <div
          className="w-14 h-[3px] mb-8 animate-gradient-x rounded-full"
          style={{ background: "linear-gradient(90deg, oklch(0.63 0.34 280), oklch(0.57 0.31 312), oklch(0.63 0.34 280))" }}
        />

        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary/80 mb-5">
          Lloret de Mar · Costa Brava
        </p>

        <h1 className="font-display font-extrabold uppercase leading-[0.88] mb-8 tracking-tight">
          <span className="block text-[clamp(4.5rem,14vw,10.5rem)] text-foreground">
            MY
          </span>
          <span className="block text-[clamp(4.5rem,14vw,10.5rem)] text-primary animate-neon-pulse">
            LLORET
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
            La discoteca de referencia en la Costa Brava.
            Cocktails de autor, shisha premium y los mejores DJs de la escena.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+34674807249" className="btn-disco">
              <Phone className="w-3 h-3" />
              Reservar Mesa
            </a>
            <a href="#eventos" className="btn-disco-outline">
              Ver Eventos
            </a>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="relative z-10 bg-background/60 backdrop-blur-sm border-t border-border/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-6 md:gap-12 py-4">
            {[
              ["Horario", "Jue — Dom · 23:00 — 06:00"],
              ["Dirección", "C/ Josep de Togores, 7"],
              ["Teléfono", "+34 674 80 72 49"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/70">{label}</span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
