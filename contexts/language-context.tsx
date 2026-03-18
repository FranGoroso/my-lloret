"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n"
import { translations } from "@/messages"

type Translations = typeof translations['es']

interface LanguageContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: DEFAULT_LOCALE,
  t: translations[DEFAULT_LOCALE],
  setLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    // 1. Check localStorage (user explicit preference)
    const saved = localStorage.getItem('onada-locale') as Locale | null
    if (saved && (LOCALES as string[]).includes(saved)) {
      setLocaleState(saved)
      return
    }

    // 2. Check cookie set by middleware (geo detection)
    const cookieMatch = document.cookie.match(/(?:^|;\s*)onada-locale=([^;]+)/)
    const cookieLocale = cookieMatch?.[1] as Locale | undefined
    if (cookieLocale && (LOCALES as string[]).includes(cookieLocale)) {
      setLocaleState(cookieLocale)
      return
    }

    // 3. Fallback: parse browser language
    const lang = navigator.language.toLowerCase()
    if (lang.startsWith('ca')) setLocaleState('ca')
    else if (lang.startsWith('en')) setLocaleState('en')
    else if (lang.startsWith('ru')) setLocaleState('ru')
    else if (lang.startsWith('pt')) setLocaleState('pt')
    else if (lang.startsWith('fr')) setLocaleState('fr')
    else setLocaleState('es')
  }, [])

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale)
    localStorage.setItem('onada-locale', newLocale)
    document.cookie = `onada-locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
