import type { Metadata, Viewport } from 'next'
import { Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { BUSINESS } from '@/constants/business'
import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BUSINESS.name} — Discoteca & Club Nocturno | Lloret de Mar`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
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
    locale: 'es_ES',
    url: siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — Discoteca & Club Nocturno | Lloret de Mar`,
    description: BUSINESS.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Discoteca en Lloret de Mar`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} — Discoteca | Lloret de Mar`,
    description: 'La discoteca de referencia en la Costa Brava. Cocktails · Shisha · DJs.',
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={syne.variable}>
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
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
