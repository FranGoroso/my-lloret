import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Events } from "@/components/events"
import { Gallery } from "@/components/gallery"
import { Vip } from "@/components/vip"
import { Contact } from "@/components/contact"
import { Jobs } from "@/components/jobs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Events />
      <Gallery />
      <Vip />
      <Contact />
      <Jobs />
      <Footer />
    </main>
  )
}
