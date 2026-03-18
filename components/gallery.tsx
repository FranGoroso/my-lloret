"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BUSINESS } from "@/constants/business"
import { useLanguage } from "@/contexts/language-context"

const images = [
  { src: "/gallery-1.jpeg", alt: "Ambiente interior" },
  { src: "/gallery-2.jpg", alt: "VIP Lounge" },
  { src: "/gallery-3.jpg", alt: "Cocktails" },
  { src: "/gallery-4.jpg", alt: "DJ Booth" },
]

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="galeria" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary mb-5">
              {t.gallery.label}
            </p>
            <h2 className="font-display leading-none">
              <span className="block font-light text-[clamp(2rem,5vw,3.5rem)] text-muted-foreground">{t.gallery.line1}</span>
              <span className="block font-semibold italic text-[clamp(2.5rem,6.5vw,5rem)] text-foreground">{t.gallery.line2}</span>
            </h2>
          </div>
          <p className="hidden md:block font-display italic text-muted-foreground text-lg pb-2">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Grid */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {/* Left tall image */}
            <div className="col-span-2 md:col-span-5 md:row-span-2 relative aspect-[4/5] md:aspect-auto md:min-h-[520px] overflow-hidden group">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 font-display italic text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images[0].alt}
              </p>
            </div>

            {/* Top right */}
            <div className="col-span-1 md:col-span-4 relative aspect-[4/3] md:aspect-auto overflow-hidden group">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 font-display italic text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images[1].alt}
              </p>
            </div>

            {/* Top right 2 */}
            <div className="col-span-1 md:col-span-3 relative aspect-[4/3] md:aspect-auto overflow-hidden group">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 font-display italic text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images[2].alt}
              </p>
            </div>

            {/* Bottom right wide */}
            <div className="col-span-2 md:col-span-7 relative aspect-[16/9] md:aspect-[16/7] overflow-hidden group">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 font-display italic text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images[3].alt}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Instagram CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground uppercase tracking-widest">
            <span className="w-5 h-px bg-primary" />
            {t.gallery.follow}
          </div>
          <a
            href={BUSINESS.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-display font-bold text-[0.7rem] uppercase tracking-[0.2em] px-6 py-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            {t.gallery.instagram}
          </a>
        </div>
      </div>
    </section>
  )
}
