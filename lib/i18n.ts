export type Locale = 'es' | 'ca' | 'en' | 'ru' | 'pt' | 'fr'

export const LOCALES: Locale[] = ['es', 'ca', 'en', 'ru', 'pt', 'fr']

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
  ru: 'Русский',
  pt: 'Português',
  fr: 'Français',
}

// Country code (x-vercel-ip-country) → locale
export const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  // Spanish-speaking
  MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', BO: 'es', PY: 'es', UY: 'es',
  GT: 'es', HN: 'es', SV: 'es', NI: 'es', CR: 'es',
  PA: 'es', CU: 'es', DO: 'es', PR: 'es',
  // English-speaking
  GB: 'en', US: 'en', CA: 'en', AU: 'en', NZ: 'en',
  IE: 'en', ZA: 'en', IN: 'en', SG: 'en', PH: 'en',
  // Russian-speaking
  RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'ru', UZ: 'ru',
  KG: 'ru', TJ: 'ru', AM: 'ru', AZ: 'ru', GE: 'ru',
  // Portuguese-speaking
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt',
  // French-speaking
  FR: 'fr', BE: 'fr', CH: 'fr', MC: 'fr', LU: 'fr',
  SN: 'fr', CI: 'fr', CM: 'fr', MA: 'fr', TN: 'fr',
}

export const DEFAULT_LOCALE: Locale = 'es'
