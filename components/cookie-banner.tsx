"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent")
    if (!choice) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-6 py-4 md:py-5"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.
          Puedes aceptarlas o rechazar las no esenciales.{" "}
          <Link href="/privacidad" className="text-primary hover:underline underline-offset-2">
            Política de privacidad
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[0.65rem] font-bold uppercase tracking-[0.15em] px-4 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Solo necesarias
          </button>
          <button
            onClick={accept}
            className="btn-disco-sm"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
