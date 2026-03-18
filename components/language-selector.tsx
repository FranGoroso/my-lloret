"use client"

import { useState, useEffect, useRef } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n"

export function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { locale, setLocale } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(l: Locale) {
    setLocale(l)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Seleccionar idioma"
        className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors px-1 py-1"
      >
        <Globe className="w-3 h-3" />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border shadow-xl py-1 min-w-[150px] z-[60]">
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/60" />
          {LOCALES.map(l => (
            <button
              key={l}
              onClick={() => handleSelect(l)}
              className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors group
                ${locale === l
                  ? 'text-primary bg-primary/5'
                  : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                }`}
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-widest font-mono w-5 shrink-0">
                {l.toUpperCase()}
              </span>
              <span className="text-[0.7rem] font-medium normal-case tracking-wide">
                {LOCALE_NAMES[l]}
              </span>
              {locale === l && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
