import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="sobre-nosotros" className="bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-28 items-start">

          {/* Left */}
          <Reveal><div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-10">
              El lugar
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-muted-foreground/60 font-semibold">Donde</span>
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-foreground">la noche</span>
              <span className="block text-[clamp(2.8rem,6vw,4.8rem)] text-primary">cobra vida.</span>
            </h2>

            <div className="mt-10 md:mt-12 pt-8 border-t border-border grid grid-cols-3 gap-3 md:gap-4">
              {[
                { num: "4", label: "Noches\na la semana" },
                { num: "2", label: "Salas &\nambientes" },
                { num: "1ª", label: "Disco en\nLloret de Mar" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[1.9rem] md:text-[2.6rem] text-primary leading-none mb-1.5">{s.num}</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest whitespace-pre-line leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div></Reveal>

          {/* Right */}
          <Reveal delay={150}><div className="md:pt-20 space-y-6">
            <p className="text-lg text-foreground/85 leading-[1.75]">
              En el corazón de Lloret de Mar, Onada by Beach es más que una discoteca.
              Es el lugar donde cada noche se convierte en un recuerdo que no se olvida.
            </p>
            <p className="text-sm text-muted-foreground leading-[1.85]">
              Cocktails de autor, una zona shisha de lujo y sesiones de los mejores DJs
              de la escena nacional e internacional. Todo en un espacio cuidado hasta el
              último detalle, diseñado para vivir la Costa Brava de noche como merece ser vivida.
            </p>
            <div className="pt-4 space-y-3">
              {[
                "Ambiente selecto y cuidado",
                "Servicio personalizado",
                "Las mejores noches de la Costa Brava",
              ].map((item) => (
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
