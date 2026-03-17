import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary mb-6">
        Error 404
      </p>
      <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mb-6">
        <span className="block text-[clamp(4rem,12vw,9rem)] text-foreground/20">PÁGINA</span>
        <span className="block text-[clamp(4rem,12vw,9rem)] text-primary">NO ENCONTRADA</span>
      </h1>
      <p className="text-base text-muted-foreground max-w-sm leading-relaxed mb-10">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link href="/" className="btn-disco">
        Volver al inicio
      </Link>
    </main>
  )
}
