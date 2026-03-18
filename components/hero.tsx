"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { HeroOrbs } from "@/components/hero-orbs"
import { BUSINESS } from "@/constants/business"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt={`${BUSINESS.name} — Discoteca Lloret de Mar`}
          fill
          sizes="100vw"
          className="object-cover object-[50%_40%] brightness-[0.85] saturate-[1.4] contrast-[1.1]"
          priority
        />
        {/* Tinte azul marino sutil para coherencia con la marca */}
        <div className="absolute inset-0 bg-[oklch(0.16_0.08_235/0.35)] mix-blend-multiply" />
        {/* Gradient bottom — para fundir con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
      </div>

      {/* Floating light orbs + scan line */}
      <HeroOrbs />

      {/* Spacer que empuja el contenido por debajo del navbar */}
      <div className="shrink-0 h-[calc(4.5rem+3px)] md:h-[calc(5rem+3px)]" />

      {/* Content — centrado verticalmente en el espacio restante */}
      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-12 w-full pb-4">
        {/* Animated accent line */}
        <div
          className="w-14 h-[3px] mb-6 animate-gradient-x rounded-full"
          style={{ background: "linear-gradient(90deg, oklch(0.68 0.18 215), oklch(0.80 0.17 80), oklch(0.68 0.18 215))" }}
        />

        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary/80 mb-4">
          {t.hero.location}
        </p>

        <h1 className="font-display font-extrabold uppercase leading-[0.9] mb-5 tracking-tight">
          <span
            className="block text-[clamp(3rem,8vw,7rem)] text-foreground animate-glitch"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)" }}
          >
            ONADA
          </span>
          <span
            className="block text-[clamp(3rem,8vw,7rem)] text-primary animate-neon-pulse"
            style={{ textShadow: "0 0 32px oklch(0.68 0.18 215 / 0.7), 0 2px 20px rgba(0,0,0,0.8)" }}
          >
            BY BEACH
          </span>
        </h1>

        <p className="font-display font-semibold text-[clamp(0.95rem,2vw,1.35rem)] text-foreground/70 italic tracking-wide mb-7">
          {BUSINESS.slogan}
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14">
          <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="relative inline-flex">
              <span className="absolute inset-0 rounded-[6px] bg-primary/40 animate-ring-out pointer-events-none" />
              <span className="absolute inset-0 rounded-[6px] bg-primary/20 animate-ring-out pointer-events-none" style={{ animationDelay: "1.1s" }} />
              <a href={`tel:${BUSINESS.phone}`} className="btn-disco relative z-10">
                <Phone className="w-3 h-3" />
                {t.hero.bookTable}
              </a>
            </div>
            <a href="#eventos" className="btn-disco-outline">
              {t.hero.seeEvents}
            </a>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="relative z-10 bg-background/70 backdrop-blur-md border-t border-border/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 md:gap-0 md:flex md:items-center md:gap-12 py-4 md:py-4">
            {[
              [t.hero.hours,   BUSINESS.hours.display],
              [t.hero.phone,   BUSINESS.phoneDisplay],
              [t.hero.address, BUSINESS.address],
            ].map(([label, value]) => (
              <div key={label} className={`flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 ${label === t.hero.address ? "col-span-2 md:col-span-1" : ""}`}>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-primary/80 font-bold shrink-0">{label}</span>
                <span className="text-[11px] md:text-sm tracking-wide text-foreground/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
