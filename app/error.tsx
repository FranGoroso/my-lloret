'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-primary mb-6">
        Algo salió mal
      </p>
      <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mb-6">
        <span className="block text-[clamp(3rem,10vw,7rem)] text-foreground/20">ERROR</span>
        <span className="block text-[clamp(3rem,10vw,7rem)] text-primary">INESPERADO</span>
      </h1>
      <p className="text-base text-muted-foreground max-w-sm leading-relaxed mb-10">
        Ha ocurrido un error. Por favor, inténtalo de nuevo.
      </p>
      <button onClick={reset} className="btn-disco">
        Reintentar
      </button>
    </main>
  )
}
