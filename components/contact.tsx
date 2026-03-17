import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-5">
            Encuéntranos
          </p>
          <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
            <span className="block text-[clamp(1.8rem,4vw,3rem)] text-muted-foreground/60 font-semibold">Contacto &</span>
            <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">Reservas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Teléfono de reservas
              </p>
              <a
                href="tel:+34670525431"
                className="font-display font-bold uppercase text-[clamp(2.2rem,5vw,3.6rem)] text-primary leading-none hover:text-primary/80 transition-colors tracking-tight"
              >
                +34 670 52 54 31
              </a>
              <p className="text-sm text-muted-foreground mt-2">Llama o escríbenos, respondemos rápido</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Dirección
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  C/ Josep de Togores, 7<br />Lloret de Mar, Girona
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Horario
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Jueves — Domingo<br />23:00 — 06:00
                </p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex gap-3">
              <a href="tel:+34670525431" className="btn-disco flex-1">
                <Phone className="w-3 h-3" />
                Llamar
              </a>
              <a href="https://wa.me/34670525431" target="_blank" rel="noopener noreferrer" className="btn-disco-outline flex-1">
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-0 overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.5!2d2.8447!3d41.6994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb1a7c0f8a8d0d%3A0x0!2sC%2F%20Josep%20de%20Togores%2C%207%2C%20Lloret%20de%20Mar!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) saturate(0.4) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Lloret — Ubicación"
              className="absolute inset-0 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
