"use client"

import { useState, useEffect } from "react"
import { Phone, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#inicio",         label: "Inicio",     num: "01" },
  { href: "#servicios",      label: "Servicios",  num: "02" },
  { href: "#eventos",        label: "Eventos",    num: "03" },
  { href: "#galeria",        label: "Galería",    num: "04" },
  { href: "#contacto",       label: "Contacto",   num: "05" },
]

export function Header() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      {/* Brand line — animated gradient */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] animate-gradient-x"
        style={{ background: "linear-gradient(90deg, oklch(0.68 0.18 215), oklch(0.80 0.17 80), oklch(0.45 0.12 230), oklch(0.68 0.18 215))" }}
      />

      {/* ─── Header bar ─────────────────────────────── */}
      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "bg-transparent border-transparent"
            : isScrolled
              ? "bg-background/95 backdrop-blur-md border-b border-border"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between h-[4.5rem] md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center leading-none z-50 relative"
              onClick={() => setMenuOpen(false)}
            >
              <span className={`font-display font-extrabold text-[1.25rem] sm:text-[1.55rem] tracking-tighter transition-colors duration-300 ${menuOpen ? "text-foreground" : "text-foreground"}`}>
                ONADA
              </span>
              <span className="font-display font-extrabold text-[1.25rem] sm:text-[1.55rem] tracking-tighter ml-[0.2em] text-primary animate-neon-pulse">
                BY BEACH
              </span>
            </Link>


            {/* Right side */}
            <div className="flex items-center gap-4 z-50 relative">
              {/* Reservar — desktop, only when menu closed */}
              {!menuOpen && (
                <a href="tel:+34670525431" className="btn-disco hidden md:inline-flex !py-2.5 !px-5">
                  <Phone className="w-3 h-3" />
                  Reservar
                </a>
              )}

              {/* Menu toggle button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                className="flex items-center gap-2.5 group"
              >
                {/* Animated hamburger lines */}
                <div className="flex flex-col gap-[5px] w-6">
                  <span className={`block h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`block h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </div>
                <span className="font-display font-bold text-[0.68rem] uppercase tracking-[0.22em] text-foreground hidden sm:block">
                  {menuOpen ? "Cerrar" : "Menú"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Full-screen overlay menu ────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-background animate-overlay-in flex flex-col">

          {/* Top padding to clear the header bar */}
          <div className="h-[calc(4.5rem+3px)] md:h-[calc(5rem+3px)] shrink-0" />

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8 md:py-12 h-full">
              <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 h-full items-start md:items-center">

                {/* Nav links — big */}
                <nav className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-3 md:gap-6 py-3 md:py-4 border-b border-border/30 hover:border-primary/40 transition-all duration-200 animate-nav-in"
                      style={{ animationDelay: `${i * 0.06 + 0.05}s` }}
                    >
                      {/* Number */}
                      <span className="font-display text-[0.65rem] font-bold text-muted-foreground/40 group-hover:text-primary/60 tracking-widest transition-colors w-6 shrink-0">
                        {link.num}
                      </span>

                      {/* Label */}
                      <span className="font-display font-extrabold uppercase text-[clamp(1.9rem,7vw,5.5rem)] leading-none tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                        {link.label}
                      </span>

                      {/* Arrow indicator */}
                      <span className="ml-auto font-display text-xl text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-200 pb-1 self-center">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Right column — contact info */}
                <div
                  className="flex flex-col gap-8 md:min-w-[200px] animate-nav-in"
                  style={{ animationDelay: "0.35s" }}
                >
                  {/* Divider — mobile only */}
                  <div className="h-px bg-border md:hidden" />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                      Reservas
                    </p>
                    <a
                      href="tel:+34670525431"
                      className="font-display font-extrabold text-xl text-primary hover:text-primary/80 transition-colors tracking-tight block"
                    >
                      +34 670 52 54 31
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                      Horario
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      Jue — Dom<br />
                      23:00 — 06:00
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-3">
                      Dirección
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      C/ Josep de Togores, 7<br />
                      Lloret de Mar
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>

                  <a href="tel:+34670525431" className="btn-disco mt-2">
                    <Phone className="w-3 h-3" />
                    Reservar Mesa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bar inside overlay */}
          <div
            className="border-t border-border/30 animate-nav-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                © {new Date().getFullYear()} Onada by Beach
              </p>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Abierto esta semana
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
