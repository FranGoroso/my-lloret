import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-10 md:py-14">

          <div>
            <Link href="/" className="inline-flex gap-0.5 mb-4">
              <span className="font-display font-extrabold text-2xl tracking-tight text-foreground">ONADA</span>
              <span className="font-display font-extrabold text-2xl tracking-tight text-primary ml-2">BY BEACH</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed sm:max-w-[18rem] mt-3">
              Discoteca & Club Nocturno en Lloret de Mar.<br />
              Cocktails · Shisha · Music
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Páginas
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#eventos", label: "Eventos" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Contacto
            </p>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <a href="tel:+34670525431" className="block hover:text-primary transition-colors">
                +34 670 52 54 31
              </a>
              <p>C/ Josep de Togores, 7<br />Lloret de Mar, Girona</p>
              <p className="pt-1">Jue — Dom · 23:00 — 06:00</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Onada by Beach · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            Abierto esta semana
          </div>
        </div>
      </div>
    </footer>
  )
}
