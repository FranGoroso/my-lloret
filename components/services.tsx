"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="relative py-24 md:py-36 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 90% 30%, oklch(0.68 0.18 215 / 0.07) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-5">
              {t.services.label}
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(1.8rem,4vw,3rem)] text-muted-foreground/60 font-semibold">{t.services.line1}</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">{t.services.line2}</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right md:pb-1">
            {t.services.subtitle}
          </p>
        </div>

        <div className="border-t border-border">
          {t.services.items.map((service, i) => (
            <Reveal key={service.num} delay={i * 60}>
              <div className="group relative border-b border-border overflow-hidden">
                {/* Animated left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                {/* Hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_2fr] gap-x-8 md:gap-x-16 gap-y-1 py-7 md:py-9 items-start cursor-default pl-4 group-hover:pl-6 transition-all duration-300">
                  <span className="font-display text-xs font-bold text-primary/35 group-hover:text-primary transition-colors duration-300 pt-1.5 tracking-widest">
                    {service.num}
                  </span>
                  <h3 className="font-display font-bold uppercase text-lg md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed col-start-2 md:col-start-3 md:row-start-1 md:self-center pt-1 md:pt-0 group-hover:text-foreground/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
