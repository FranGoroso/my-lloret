"use client"

import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { BUSINESS } from "@/constants/business"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: "#inicio",    label: t.nav.home },
    { href: "#servicios", label: t.nav.services },
    { href: "#eventos",   label: t.nav.events },
    { href: "#galeria",   label: t.nav.gallery },
    { href: "#contacto",  label: t.nav.contact },
  ]

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      {/* Brand gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] animate-gradient-x"
        style={{ background: "linear-gradient(90deg, oklch(0.68 0.18 215), oklch(0.80 0.17 80), oklch(0.45 0.12 230), oklch(0.68 0.18 215))" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-12 md:py-16">

          <div>
            <Link href="/" className="inline-flex gap-0.5 mb-5">
              <span className="font-display font-extrabold text-2xl tracking-tight text-foreground">ONADA</span>
              <span className="font-display font-extrabold text-2xl tracking-tight text-primary ml-2 animate-neon-pulse">BY BEACH</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed sm:max-w-[18rem]">
              Discoteca & Club Nocturno en {BUSINESS.city}.<br />
              Cocktails · Shisha · Music
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all rounded-sm" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all rounded-sm" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-5">
              {t.footer.pages}
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
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
              {t.footer.contact}
            </p>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <a href={`tel:${BUSINESS.phone}`} className="block hover:text-primary transition-colors font-semibold text-foreground/80">
                {BUSINESS.phoneDisplay}
              </a>
              <p>{BUSINESS.address}<br />{BUSINESS.city}, {BUSINESS.region}</p>
              <p className="pt-1">{BUSINESS.hours.days} · {BUSINESS.hours.opens} — {BUSINESS.hours.closes}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} {BUSINESS.name} · {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/aviso-legal" className="text-[10px] text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">
              {t.footer.legal}
            </Link>
            <span className="text-border text-xs">·</span>
            <Link href="/privacidad" className="text-[10px] text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-beat" />
            {t.footer.open}
          </div>
        </div>
      </div>
    </footer>
  )
}
