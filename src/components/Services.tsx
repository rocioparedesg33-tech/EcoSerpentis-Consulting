import { FileCheck, Cpu, Leaf } from 'lucide-react'

// ============================================
// SECCIÓN 5: SERVICIOS DE VANGUARDIA
// ============================================
// Para editar los servicios, modifica el array `services`.
// Cada bloque tiene: icono, título, descripción, imagen e items.
// Debajo del grid de servicios se muestran imágenes complementarias.

const services = [
  {
    icon: FileCheck,
    title: 'Instrumentos de Gestión Ambiental (IGA)',
    description:
      'Elaboración y tramitación de instrumentos de gestión ambiental avalados ante Senace y ministerios.',
    image: 'https://i.ibb.co/CKkXFjq4/Gemini-Generated-Image-hnfahjhnfahjhnfa.jpg',
    items: [
      'EIA-d (Estudio de Impacto Ambiental detallado)',
      'EIA-sd (Estudio de Impacto Ambiental semidetallado)',
      'DIA (Declaración de Impacto Ambiental)',
      'ITS (Informes Técnico Sustentatorios)',
      'Planes de Cierre avalados',
    ],
  },
  {
    icon: Cpu,
    title: 'Inteligencia Ambiental & IoT',
    description:
      'Monitoreo automatizado en tiempo real con sensores IoT y mapeo satelital/drones para OEFA.',
    image: 'https://i.ibb.co/600Cfd3P/Gemini-Generated-Image-3in5sq3in5sq3in5.jpg',
    items: [
      'Sensores IoT de calidad de aire y agua',
      'Mapeo satelital y con drones',
      'Monitoreo automatizado en tiempo real',
      'Reportes técnicos para OEFA',
      'Dashboards de datos ambientales',
    ],
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad ESG & Carbono',
    description:
      'Medición de Huella de Carbono Perú (Minam), estrategias Net-Zero y consultoría de Economía Circular corporativa.',
    image: 'https://i.ibb.co/twxfMpTv/Gemini-Generated-Image-w8vsmew8vsmew8vs.jpg',
    items: [
      'Medición de Huella de Carbono Perú (Minam)',
      'Estrategias Net-Zero',
      'Consultoría de Economía Circular corporativa',
      'Reportes ESG para inversionistas',
      'Descarbonización eficaz de operaciones',
    ],
  },
]

// Imágenes complementarias debajo de cada sección de servicio
const supplementaryImages = [
  { src: 'https://i.ibb.co/W4YQLGHm/01-sensores-iot.png', alt: 'Sensores IoT', label: 'Sensores IoT' },
  { src: 'https://i.ibb.co/Z6ShQKpf/02-mapeo-satelital-drones.png', alt: 'Mapeo satelital y drones', label: 'Mapeo satelital y drones' },
  { src: 'https://i.ibb.co/MkYFM374/03-monitoreo-tiempo-real.png', alt: 'Monitoreo en tiempo real', label: 'Monitoreo en tiempo real' },
  { src: 'https://i.ibb.co/JRjrVYfg/04-reportes-tecnicos-oefa.png', alt: 'Reportes técnicos OEFA', label: 'Reportes técnicos OEFA' },
  { src: 'https://i.ibb.co/qMC0xqCG/05-dashboards-datos-ambientales.png', alt: 'Dashboards de datos ambientales', label: 'Dashboards ambientales' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="section-container">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-accent font-semibold text-sm tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="section-title mt-3">Servicios de Vanguardia</h2>
          <div className="w-20 h-1 bg-emerald-accent rounded-full mx-auto mt-6" />
          <p className="text-slate-gray text-lg mt-6">
            Soluciones integrales que combinan rigor científico, cumplimiento normativo e innovación tecnológica.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg shadow-slate-200/50 card-hover border border-slate-100 overflow-hidden"
            >
              {/* Imagen de fondo del servicio con capa oscura translúcida */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-emerald-darker/70" />
                {/* Icono sobre la imagen */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-emerald-glow/20">
                    <service.icon className="w-8 h-8 text-emerald-glow" />
                  </div>
                </div>
              </div>

              {/* Barra superior decorativa */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-deep to-emerald-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Contenido textual */}
              <div className="p-8">
                {/* Título */}
                <h3 className="font-display text-xl font-bold text-emerald-deep mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-slate-gray mb-6 leading-relaxed">{service.description}</p>

                {/* Lista de items */}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-tech">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Imágenes complementarias debajo de las secciones de servicios */}
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-emerald-deep mb-8">
            Detalles de nuestros servicios
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supplementaryImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md cursor-default"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-darker/40 group-hover:bg-emerald-darker/20 transition-colors duration-500" />
                </div>
                <p className="text-center text-xs font-medium text-slate-tech mt-2 mb-1">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
