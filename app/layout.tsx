import type { Metadata, Viewport } from 'next'
import { Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { BUSINESS } from '@/constants/business'
import { cookies } from 'next/headers'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  preload: true,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://onadabybeach.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a2a3a',
}

type LocaleMeta = { title: string; description: string; ogLocale: string }

const META: Record<string, LocaleMeta> = {
  es: {
    title: `${BUSINESS.name} — Discoteca & Club Nocturno | Lloret de Mar`,
    description: 'La discoteca de referencia en la Costa Brava. Cocktails de autor, shisha premium y los mejores DJs de la escena.',
    ogLocale: 'es_ES',
  },
  ca: {
    title: `${BUSINESS.name} — Discoteca & Club Nocturn | Lloret de Mar`,
    description: 'La discoteca de referència a la Costa Brava. Còctels d\'autor, shisha premium i els millors DJs de l\'escena.',
    ogLocale: 'ca_ES',
  },
  en: {
    title: `${BUSINESS.name} — Nightclub | Lloret de Mar`,
    description: 'The reference nightclub on the Costa Brava. Signature cocktails, premium shisha and the best DJs on the scene.',
    ogLocale: 'en_GB',
  },
  ru: {
    title: `${BUSINESS.name} — Ночной Клуб | Льорет-де-Мар`,
    description: 'Лучший ночной клуб Коста Бравы. Авторские коктейли, премиум кальян и лучшие диджеи сцены.',
    ogLocale: 'ru_RU',
  },
  pt: {
    title: `${BUSINESS.name} — Discoteca | Lloret de Mar`,
    description: 'A discoteca de referência na Costa Brava. Coquetéis autorais, shisha premium e os melhores DJs da cena.',
    ogLocale: 'pt_BR',
  },
  fr: {
    title: `${BUSINESS.name} — Discothèque | Lloret de Mar`,
    description: 'La discothèque de référence sur la Costa Brava. Cocktails signature, shisha premium et les meilleurs DJs de la scène.',
    ogLocale: 'fr_FR',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const locale = cookieStore.get('onada-locale')?.value ?? 'es'
  const m = META[locale] ?? META.es

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: m.title,
      template: `%s | ${BUSINESS.name}`,
    },
    description: m.description,
    keywords: [
      'discoteca lloret de mar',
      'club nocturno costa brava',
      'onada by beach',
      'shisha lounge lloret',
      'cocktails lloret de mar',
      'djs costa brava',
      'mesas vip lloret',
      'fiesta lloret de mar',
    ],
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: m.ogLocale,
      url: siteUrl,
      siteName: BUSINESS.name,
      title: m.title,
      description: m.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — Lloret de Mar`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: ['/og-image.jpg'],
    },
    icons: {
      icon: [
        { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NightClub',
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: siteUrl,
  telephone: BUSINESS.phone,
  image: `${siteUrl}/og-image.jpg`,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.coordinates.lat,
    longitude: BUSINESS.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
  ],
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const locale = cookieStore.get('onada-locale')?.value ?? 'es'

  return (
    <html lang={locale} className={syne.variable}>
      <body className="font-sans antialiased">
        {/* Skip to content — accesibilidad */}
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:rounded"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
