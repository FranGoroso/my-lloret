import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { BUSINESS } from "@/constants/business"

const includes = [
  "Acceso sin cola garantizado",
  "Mesa reservada toda la noche",
  "Botella de bienvenida incluida",
  "Servicio de camarero exclusivo",
  "Zona lounge shisha disponible",
]

export function Vip() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Background image with primary tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_55%] brightness-[0.55] saturate-[1.3]"
        />
        {/* Primary cyan overlay */}
        <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
        {/* Bottom fade to background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
      </div>

      {/* Diagonal shine sweep */}
      <div
        className="absolute top-0 bottom-0 w-[200px] skew-x-[-20deg] pointer-events-none animate-vip-shine opacity-20 z-10"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-28 items-center">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60 mb-8">
              Experiencia exclusiva
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight mb-8">
              <span className="block text-[clamp(1.8rem,4vw,3rem)] text-white/60 font-semibold">Reserva tu</span>
              <span className="block text-[clamp(3rem,7vw,5.5rem)] text-white" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}>Mesa VIP</span>
            </h2>
            <p className="text-sm text-white/70 leading-[1.85] max-w-sm">
              Porque algunas noches merecen algo más. Disfruta de {BUSINESS.name}
              {" "}sin límites, con todo el servicio que mereces.
            </p>
          </div>

          <div>
            <div className="border border-white/20 bg-black/20 backdrop-blur-sm p-5 md:p-8 mb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-6">
                Lo que incluye
              </p>
              <ul className="space-y-3.5">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-white/80">
                    <span className="w-5 h-px bg-white/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 font-display font-bold text-[0.7rem] uppercase tracking-[0.2em] px-5 py-4 rounded-md bg-white text-primary hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-3 h-3" />
                Llamar
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 font-display font-bold text-[0.7rem] uppercase tracking-[0.2em] px-5 py-4 rounded-md border-2 border-white/50 text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
