import { Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BUSINESS } from "@/constants/business"

export function Jobs() {
  return (
    <section id="trabaja-con-nosotros" className="py-24 md:py-36 relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.68 0.18 215 / 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="relative border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden p-6 sm:p-10 md:p-16 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            {/* Accent corner line */}
            <div
              className="absolute top-0 left-0 w-24 h-[2px] animate-gradient-x"
              style={{ background: "linear-gradient(90deg, oklch(0.68 0.18 215), oklch(0.80 0.17 80))" }}
            />

            {/* Left */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent mb-5">
                Únete al equipo
              </p>
              <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
                <span className="block text-[clamp(1.8rem,4vw,3rem)] text-muted-foreground/60 font-semibold">
                  ¿Quieres trabajar
                </span>
                <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
                  con nosotros?
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                En {BUSINESS.name} buscamos personas apasionadas por la hostelería,
                la música y los buenos ambientes. Si quieres formar parte de uno de
                los mejores equipos de la Costa Brava, escríbenos o llámanos.
              </p>

              <div className="h-px bg-border/60" />

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${BUSINESS.phone}`} className="btn-disco flex-1">
                  <Phone className="w-3 h-3" />
                  Llámanos
                </a>
                <a
                  href={`${BUSINESS.whatsapp}?text=Hola%2C%20me%20interesa%20trabajar%20en%20${encodeURIComponent(BUSINESS.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-disco-outline flex-1"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
