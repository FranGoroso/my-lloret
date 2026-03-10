import { Reveal } from "@/components/reveal"

const services = [
  {
    num: "01",
    title: "Cocktails de Autor",
    description:
      "Cócteles premium elaborados por bartenders expertos. Desde los clásicos de siempre hasta creaciones exclusivas de la casa con ingredientes de primera selección.",
  },
  {
    num: "02",
    title: "Shisha Lounge",
    description:
      "Amplia selección de shishas premium con los mejores sabores. Disfruta en nuestra zona lounge exclusiva, con servicio dedicado y ambiente propio.",
  },
  {
    num: "03",
    title: "Música & DJs",
    description:
      "House, techno, urban y lo mejor del momento. Sesiones de DJs de la escena nacional e internacional. Cada noche tiene su propio sonido.",
  },
  {
    num: "04",
    title: "Mesas VIP",
    description:
      "Acceso preferente, botella reservada y atención personalizada durante toda la noche. La experiencia completa de My Lloret.",
  },
  {
    num: "05",
    title: "Eventos Privados",
    description:
      "Cumpleaños, despedidas, eventos de empresa. Espacios exclusivos con coordinación integral y menú adaptado a tus necesidades.",
  },
  {
    num: "06",
    title: "Noches Temáticas",
    description:
      "Cada semana una propuesta diferente. Géneros especiales, DJs invitados y decoraciones únicas que convierten cada visita en algo irrepetible.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-5">
              Lo que ofrecemos
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(1.8rem,4vw,3rem)] text-muted-foreground/60 font-semibold">Nuestros</span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">Servicios</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right md:pb-1">
            Todo lo que necesitas para una noche perfecta en la Costa Brava
          </p>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 60}>
            <div
              className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_2fr] gap-x-8 md:gap-x-16 gap-y-1 py-7 md:py-8 items-start cursor-default"
            >
              <span className="font-display text-xs font-bold text-primary/35 group-hover:text-primary transition-colors duration-300 pt-1.5 tracking-widest">
                {service.num}
              </span>
              <h3 className="font-display font-bold uppercase text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed col-start-2 md:col-start-3 md:row-start-1 md:self-center pt-1 md:pt-0">
                {service.description}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
