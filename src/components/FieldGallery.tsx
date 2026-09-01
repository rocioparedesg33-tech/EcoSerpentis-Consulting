// ============================================
// SECCIÓN 5b: GALERÍA DE TRABAJO DE CAMPO
// ============================================
// Cuadrícula de fotos de operaciones de campo de consultoría ambiental.
// Para editar las fotos, modifica el array `galleryImages`.
// 3 columnas en escritorio, 1 en móvil. Efecto de zoom suave al hover.

const galleryImages = [
  { src: 'https://i.ibb.co/DHm7j162/01-Sensores-Io-T-de-calidad-de-aire-y-agua.png', alt: 'Sensores IoT de calidad de aire y agua' },
  { src: 'https://i.ibb.co/dwjb0RrS/02-Mapeo-satelital-y-con-drones.png', alt: 'Mapeo satelital y con drones' },
  { src: 'https://i.ibb.co/v620d5rW/03-Monitoreo-automatizado-en-tiempo-real.png', alt: 'Monitoreo automatizado en tiempo real' },
  { src: 'https://i.ibb.co/RxKYgtr/04-Reportes-tecnicos-para-OEFA.png', alt: 'Reportes técnicos para OEFA' },
  { src: 'https://i.ibb.co/dsrPNfLb/05-Dashboards-de-datos-ambientales.png', alt: 'Dashboards de datos ambientales' },
  { src: 'https://i.ibb.co/ymcf4VQx/06-Monitoreo-de-pasivos-ambientales.png', alt: 'Monitoreo de pasivos ambientales' },
  { src: 'https://i.ibb.co/Cp1jt35y/07-Gestion-de-residuos-mineros.png', alt: 'Gestión de residuos mineros' },
]

export default function FieldGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-accent font-semibold text-sm tracking-widest uppercase">
            Galería
          </span>
          <h2 className="section-title mt-3">Galería de Trabajo de Campo</h2>
          <div className="w-20 h-1 bg-emerald-accent rounded-full mx-auto mt-6" />
          <p className="text-slate-gray text-lg mt-6">
            Operaciones de monitoreo, mapeo y gestión ambiental en terreno.
          </p>
        </div>

        {/* Cuadrícula de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50 cursor-pointer"
            >
              {/* Imagen con efecto de zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Texto descriptivo al hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
