"use client"

import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-nosotros" className="relative bg-card py-24 md:py-36 overflow-hidden">
      {/* Fondo: gradiente radial náutico + patrón de puntos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 15% 50%, oklch(0.68 0.18 215 / 0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 80%, oklch(0.80 0.17 80 / 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.68 0.18 215) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-28 items-start">

          {/* Left */}
          <Reveal><div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-10">
              {t.about.label}
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-muted-foreground/60 font-semibold">{t.about.line1}</span>
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-foreground">{t.about.line2}</span>
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-primary">{t.about.line3}</span>
            </h2>

            <div className="mt-10 md:mt-12 pt-8 border-t border-border grid grid-cols-3 gap-3 md:gap-4">
              {[
                { to: 4,  suffix: "",  label: t.about.nights },
                { to: 2,  suffix: "",  label: t.about.rooms },
                { to: 1,  suffix: "ª", label: t.about.disco },
              ].map((s) => (
                <div key={s.label} className="group">
                  <p className="font-display font-bold text-[2.2rem] md:text-[3rem] text-primary leading-none mb-2 group-hover:scale-105 transition-transform origin-left">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest whitespace-pre-line leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div></Reveal>

          {/* Right */}
          <Reveal delay={150}><div className="md:pt-20 space-y-6">
            <p className="text-lg text-foreground/85 leading-[1.75]">
              {t.about.p1}
            </p>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              {t.about.p2}
            </p>
            <div className="pt-4 space-y-3">
              {[t.about.feat1, t.about.feat2, t.about.feat3].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-px bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div></Reveal>
        </div>
      </div>
    </section>
  )
}
