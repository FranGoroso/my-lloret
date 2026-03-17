import Image from "next/image"
import { Phone } from "lucide-react"
import { HeroOrbs } from "@/components/hero-orbs"
import { BUSINESS } from "@/constants/business"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt={`${BUSINESS.name} — Discoteca Lloret de Mar`}
          fill
          sizes="100vw"
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
          style={{ background: "linear-gradient(90deg, oklch(0.68 0.18 215), oklch(0.80 0.17 80), oklch(0.68 0.18 215))" }}
        />

        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary/80 mb-5">
          Lloret de Mar · Costa Brava
        </p>

        <h1 className="font-display font-extrabold uppercase leading-[0.88] mb-6 tracking-tight">
          <span className="block text-[clamp(4.5rem,14vw,10.5rem)] text-foreground">
            ONADA
          </span>
          <span className="block text-[clamp(4.5rem,14vw,10.5rem)] text-primary animate-neon-pulse">
            BY BEACH
          </span>
        </h1>

        <p className="font-display font-semibold text-[clamp(1rem,2.5vw,1.5rem)] text-foreground/70 italic tracking-wide mb-8">
          {BUSINESS.slogan}
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
            La discoteca de referencia en la Costa Brava.
            Cocktails de autor, shisha premium y los mejores DJs de la escena.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-disco">
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
          <div className="flex flex-wrap items-center gap-4 md:gap-12 py-3 md:py-4">
            {[
              ["Horario",   BUSINESS.hours.display],
              ["Dirección", BUSINESS.address],
              ["Teléfono",  BUSINESS.phoneDisplay],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-2 md:gap-3">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary/80 font-semibold shrink-0">{label}</span>
                <span className="text-xs md:text-sm tracking-wide text-foreground/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
