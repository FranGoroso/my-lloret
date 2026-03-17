import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS } from "@/constants/business"

export const metadata: Metadata = {
  title: "Política de Privacidad y Cookies",
  description: `Política de privacidad y cookies de ${BUSINESS.name}.`,
  robots: { index: false },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">

        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          ← Volver al inicio
        </Link>

        <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-3">
          Política de Privacidad
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert max-w-none space-y-10 text-sm text-muted-foreground leading-relaxed">

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">1. Responsable del tratamiento</h2>
            <p>
              <strong className="text-foreground">{BUSINESS.name}</strong><br />
              {BUSINESS.address}, {BUSINESS.city}, {BUSINESS.region}<br />
              Teléfono: <a href={`tel:${BUSINESS.phone}`} className="text-primary hover:underline">{BUSINESS.phoneDisplay}</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">2. Datos que recogemos</h2>
            <p>Solo recogemos los datos que tú nos facilitas voluntariamente a través de:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>El formulario de contacto (nombre, teléfono y mensaje).</li>
              <li>Las llamadas telefónicas o mensajes de WhatsApp.</li>
            </ul>
            <p>No recogemos datos de forma automática más allá de las cookies técnicas necesarias para el funcionamiento del sitio.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">3. Finalidad y base legal</h2>
            <p>
              Los datos se utilizan exclusivamente para atender tu consulta o gestionar tu reserva
              (base legal: ejecución de un contrato / interés legítimo, según el art. 6.1.b y 6.1.f del RGPD).
              No cedemos datos a terceros salvo obligación legal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">4. Conservación de datos</h2>
            <p>
              Los datos se conservan el tiempo necesario para gestionar tu solicitud y,
              si existe relación comercial, durante el período legalmente exigido.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">5. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los derechos de:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-foreground">Acceso</strong> — conocer qué datos tenemos sobre ti.</li>
              <li><strong className="text-foreground">Rectificación</strong> — corregir datos inexactos.</li>
              <li><strong className="text-foreground">Supresión</strong> — solicitar que eliminemos tus datos.</li>
              <li><strong className="text-foreground">Oposición y limitación</strong> — oponerte a ciertos tratamientos.</li>
              <li><strong className="text-foreground">Portabilidad</strong> — recibir tus datos en formato estructurado.</li>
            </ul>
            <p>
              Contacta con nosotros por teléfono o WhatsApp para ejercer cualquiera de estos derechos.
              Si no obtienes respuesta, puedes reclamar ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">6. Política de cookies</h2>
            <p>
              Este sitio web utiliza cookies. A continuación te explicamos qué son y cómo las usamos.
            </p>

            <h3 className="font-semibold text-foreground mt-4">¿Qué son las cookies?</h3>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una web.
              Permiten que el sitio recuerde tus preferencias y mejore tu experiencia.
            </p>

            <h3 className="font-semibold text-foreground mt-4">Tipos de cookies que usamos</h3>
            <div className="border border-border overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="text-left px-4 py-3 text-foreground font-semibold">Cookie</th>
                    <th className="text-left px-4 py-3 text-foreground font-semibold">Tipo</th>
                    <th className="text-left px-4 py-3 text-foreground font-semibold">Finalidad</th>
                    <th className="text-left px-4 py-3 text-foreground font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3">cookie-consent</td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">Guardar tu preferencia de cookies</td>
                    <td className="px-4 py-3">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">_vercel_*</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">Estadísticas anónimas de visitas (Vercel Analytics)</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-foreground mt-4">Cómo gestionar las cookies</h3>
            <p>
              Puedes aceptar o rechazar las cookies no esenciales mediante el banner que aparece al entrar por primera vez.
              También puedes eliminarlas o bloquearlas desde la configuración de tu navegador.
            </p>
          </section>

          <div className="border-t border-border pt-8">
            <Link href="/" className="btn-disco inline-flex">
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
