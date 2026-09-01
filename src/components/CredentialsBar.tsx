import { ShieldCheck } from 'lucide-react'

// ============================================
// SECCIÓN 3: FRANJA DE CREDENCIALES (Confianza Legal)
// ============================================
// Cintillo con fondo gris claro que muestra el registro en RNCA - Senace
// y logotipos reales de Senace, OEFA y Minam en escala de grises.
// Al pasar el cursor, los logotipos cambian a color pleno.
// Para editar las imágenes, modifica las URLs en el array `logos`.

const logos = [
  { src: 'https://i.ibb.co/whsSHXjw/medalla-senace.jpg', alt: 'SENACE' },
  { src: 'https://i.ibb.co/nNL1Xw60/medalla-oefa.jpg', alt: 'OEFA' },
  { src: 'https://i.ibb.co/5hb4p029/medalla-minam.jpg', alt: 'MINAM' },
]

export default function CredentialsBar() {
  return (
    <section className="bg-slate-100 py-10 border-b border-slate-200">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Texto de credencial */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <ShieldCheck className="w-6 h-6 text-emerald-deep flex-shrink-0" />
            <p className="text-sm md:text-base font-medium text-slate-tech leading-relaxed">
              Consultora inscrita en el Registro Nacional de Consultoras Ambientales (RNCA) - Senace
            </p>
          </div>

          {/* Separador */}
          <div className="hidden lg:block w-px h-12 bg-slate-300" />

          {/* Logotipos reales en escala de grises, color al hover */}
          <div className="flex items-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
