import { Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BUSINESS } from "@/constants/business"
import { events } from "@/data/events"

export function Events() {
  return (
    <section id="eventos" className="relative bg-card py-24 md:py-36 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.68 0.18 215) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 20%, oklch(0.68 0.18 215 / 0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-5">
              Agenda
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(1.8rem,4vw,3rem)] text-muted-foreground/60 font-semibold">Próximos</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">Eventos</span>
            </h2>
          </div>
          <a href={`tel:${BUSINESS.phone}`} className="btn-disco hidden md:inline-flex self-end">
            <Phone className="w-3 h-3" />
            Consultar entradas
          </a>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {events.map((event, i) => (
            <div
              key={i}
              className={`group flex items-center gap-3 md:gap-10 py-4 md:py-6 hover:bg-secondary/40 px-3 -mx-3 transition-colors ${
                event.featured ? "bg-primary/5" : ""
              }`}
            >
              {/* Date */}
              <div className="text-center w-10 md:w-16 shrink-0">
                <p className="font-display font-bold text-[1.6rem] md:text-[2.4rem] leading-none text-foreground tracking-tight">
                  {event.day}
                </p>
                <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-widest text-muted-foreground mt-0.5">{event.month}</p>
                <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-widest text-primary/60">{event.weekday}</p>
              </div>

              <div className="w-px h-10 bg-border shrink-0" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h3 className={`font-display font-bold uppercase text-base md:text-xl leading-none tracking-tight transition-colors ${
                    event.featured ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {event.title}
                  </h3>
                  {event.featured && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest border border-primary text-primary px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-beat inline-block" />
                      Destacado
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {event.dj} · {event.genre} · Apertura {BUSINESS.hours.opens}
                </p>
              </div>

              <span className="hidden md:block text-[9px] font-bold uppercase tracking-widest border border-border text-muted-foreground px-3 py-1 shrink-0">
                {event.genre}
              </span>

              <a
                href={`tel:${BUSINESS.phone}`}
                className={`shrink-0 ${event.featured ? "btn-disco-sm" : "btn-disco-sm-outline"}`}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Programación sujeta a cambios</p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-disco md:hidden">
            <Phone className="w-3 h-3" />
            Consultar
          </a>
        </div>
      </div>
    </section>
  )
}
