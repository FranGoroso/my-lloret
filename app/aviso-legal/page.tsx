import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS } from "@/constants/business"

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Aviso legal de ${BUSINESS.name} conforme a la LSSI-CE.`,
  robots: { index: false },
}

// ─────────────────────────────────────────────────────────────────
//  ⚠️  Pendiente: email y datos registrales (Registro Mercantil)
// -----------------------------------------------------------------
const LEGAL = {
  razonSocial:  "MYLLORET2025 SL",
  nif:          "B22623052",
  forma:        "Sociedad Limitada (S.L.)",
  cnae:         "9031 — Gestión de instalaciones para actividades artísticas y artes escénicas",
  objeto:       "La explotación de negocios de salas de baile y discotecas, y espectáculos en salas y locales.",
  email:        "info@onadabybeach.com",          // ⚠️ Actualiza con el email real
  registro:     "Registro Mercantil de Girona",   // ⚠️ Añade Tomo, Folio y Hoja cuando dispongas de ellos
}
// ─────────────────────────────────────────────────────────────────

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">

        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          ← Volver al inicio
        </Link>

        <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-3">
          Aviso Legal
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
        </p>

        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">1. Datos identificativos del titular</h2>
            <ul className="space-y-2">
              <li><strong className="text-foreground">Razón social:</strong> {LEGAL.razonSocial}</li>
              <li><strong className="text-foreground">Nombre comercial:</strong> {BUSINESS.name}</li>
              <li><strong className="text-foreground">Forma jurídica:</strong> {LEGAL.forma}</li>
              <li><strong className="text-foreground">NIF:</strong> {LEGAL.nif}</li>
              <li><strong className="text-foreground">Domicilio social:</strong> {BUSINESS.address}, {BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.region}, España</li>
              <li><strong className="text-foreground">Actividad (CNAE):</strong> {LEGAL.cnae}</li>
              <li><strong className="text-foreground">Objeto social:</strong> {LEGAL.objeto}</li>
              <li><strong className="text-foreground">Teléfono:</strong>{" "}
                <a href={`tel:${BUSINESS.phone}`} className="text-primary hover:underline">{BUSINESS.phoneDisplay}</a>
              </li>
              <li><strong className="text-foreground">Correo electrónico:</strong>{" "}
                <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline">{LEGAL.email}</a>
              </li>
              <li><strong className="text-foreground">Datos registrales:</strong> {LEGAL.registro}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web accesible en{" "}
              <strong className="text-foreground">onadabybeach.com</strong>{" "}
              (en adelante, "el Sitio Web"), titularidad de {BUSINESS.name}.
            </p>
            <p>
              El acceso al Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones.
              {BUSINESS.name} se reserva el derecho a modificar este Aviso Legal en cualquier momento;
              los cambios serán efectivos desde su publicación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del Sitio Web —textos, imágenes, logotipos, diseño gráfico, código fuente
              y demás elementos— son propiedad de {BUSINESS.name} o de sus legítimos licenciatarios,
              y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p>
              Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación
              sin autorización expresa y por escrito del titular.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">4. Responsabilidad</h2>
            <p>
              {BUSINESS.name} no se hace responsable de los daños derivados del uso del Sitio Web,
              de la imposibilidad de acceso, de interrupciones, virus informáticos o fallos de seguridad
              ajenos a su control razonable.
            </p>
            <p>
              El Sitio Web puede contener enlaces a páginas de terceros.
              {BUSINESS.name} no controla ni se hace responsable de sus contenidos, políticas de privacidad o prácticas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display font-bold uppercase text-lg text-foreground tracking-tight">5. Ley aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española.
              Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web,
              las partes se someten a los Juzgados y Tribunales de{" "}
              <strong className="text-foreground">{BUSINESS.city}</strong>,
              con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section className="space-y-3 border border-border/50 bg-card/50 p-5">
            <h2 className="font-display font-bold uppercase text-base text-foreground tracking-tight">Información adicional</h2>
            <p>
              Para más información sobre el tratamiento de tus datos personales y el uso de cookies, consulta
              nuestra{" "}
              <Link href="/privacidad" className="text-primary hover:underline">
                Política de Privacidad y Cookies
              </Link>.
            </p>
          </section>

          <div className="border-t border-border pt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn-disco inline-flex">
              Volver al inicio
            </Link>
            <Link href="/privacidad" className="btn-disco-outline inline-flex">
              Política de Privacidad
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
