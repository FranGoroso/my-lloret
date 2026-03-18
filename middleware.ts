import { NextRequest, NextResponse } from 'next/server'
import type { Locale } from '@/lib/i18n'
import { COUNTRY_TO_LOCALE, DEFAULT_LOCALE, LOCALES } from '@/lib/i18n'

export function middleware(req: NextRequest) {
  // Skip static files and api routes
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/_next') || pathname.includes('.')) return NextResponse.next()

  // If user already has a preference cookie, respect it
  const existing = req.cookies.get('onada-locale')?.value as Locale | undefined
  if (existing && (LOCALES as string[]).includes(existing)) return NextResponse.next()

  let locale: Locale = DEFAULT_LOCALE

  // Try Vercel geo header (available on Vercel deployment)
  const country = req.headers.get('x-vercel-ip-country') ?? ''
  if (country && COUNTRY_TO_LOCALE[country]) {
    locale = COUNTRY_TO_LOCALE[country]
    // Spain: check for Catalan in Accept-Language
    if (country === 'ES') {
      const acceptLang = req.headers.get('accept-language') ?? ''
      if (/\bca\b/i.test(acceptLang)) locale = 'ca'
    }
  } else {
    // Fallback: parse Accept-Language header
    const acceptLang = req.headers.get('accept-language') ?? ''
    const primary = acceptLang.split(',')[0]?.split(';')[0]?.trim().toLowerCase() ?? ''
    if (primary.startsWith('ca')) locale = 'ca'
    else if (primary.startsWith('en')) locale = 'en'
    else if (primary.startsWith('ru')) locale = 'ru'
    else if (primary.startsWith('pt')) locale = 'pt'
    else if (primary.startsWith('fr')) locale = 'fr'
    else locale = 'es'
  }

  const res = NextResponse.next()
  res.cookies.set('onada-locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false, // needs to be readable by JS context
  })
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
