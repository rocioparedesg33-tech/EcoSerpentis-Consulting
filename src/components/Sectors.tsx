import { useState } from 'react'
import { Mountain, Building2, Factory, Wheat } from 'lucide-react'

// ============================================
// SECCIÓN 6: SECTORES CLAVE
// ============================================
// Para editar los sectores, modifica el array `sectors`.
// Cada sector tiene: icono, título, descripción y lista de servicios.

const sectors = [
  {
    icon: Mountain,
    title: 'Minería y Energía',
    description: 'Gestión ambiental integral para proyectos mineros y energéticos de gran escala.',
    services: [
      'EIAs para proyectos mineros',
      'Planes de cierre de minas',
      'Monitoreo de pasivos ambientales',
      'Gestión de residuos mineros',
    ],
  },
  {
    icon: Building2,
    title: 'Infraestructura y Transportes',
    description: 'Viabilidad ambiental para carreteras, puertos, aeropuertos y obras civiles.',
    services: [
      'EIAs para infraestructura vial',
      'Planes de manejo de tráfico',
      'Gestión de impacto social',
      'Monitoreo de calidad durante construcción',
    ],
  },
  {
    icon: Factory,
    title: 'Industria y Manufactura',
    description: 'Cumplimiento normativo y eficiencia para plantas industriales y manufactureras.',
    services: [
      'DIAs para instalaciones industriales',
      'Gestión de emisiones y efluentes',
      'Auditorías ambientales',
      'Optimización de procesos sostenibles',
    ],
  },
  {
    icon: Wheat,
    title: 'Agroindustria',
    description: 'Soluciones ambientales para proyectos agrícolas, agroexportadores y piscícolas.',
    services: [
      'EIAs para proyectos agroindustriales',
      'Gestión de recursos hídricos',
      'Manejo de agroquímicos y residuos',
      'Certificaciones de sostenibilidad',
    ],
  },
]

export default function Sectors() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="section-container">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-accent font-semibold text-sm tracking-widest uppercase">
            Sectores
          </span>
          <h2 className="section-title mt-3">Sectores Clave</h2>
          <div className="w-20 h-1 bg-emerald-accent rounded-full mx-auto mt-6" />
          <p className="text-slate-gray text-lg mt-6">
            Acompañamos a las industrias más estratégicas del Perú en su transición sostenible.
          </p>
        </div>

        {/* Pestañas de sectores */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === index
                  ? 'bg-emerald-deep text-white shadow-lg shadow-emerald-deep/30'
                  : 'bg-slate-100 text-slate-tech hover:bg-slate-200'
              }`}
            >
              <sector.icon className="w-5 h-5" />
              {sector.title}
            </button>
          ))}
        </div>

        {/* Contenido del sector activo */}
        <div className="max-w-4xl mx-auto">
          {sectors.map((sector, index) => (
            activeTab === index && (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-12 animate-fade-in-up"
              >
                {/* Lado izquierdo: icono grande */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-3xl bg-emerald-deep flex items-center justify-center mb-6">
                    <sector.icon className="w-12 h-12 text-emerald-glow" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-emerald-deep mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-slate-gray leading-relaxed">{sector.description}</p>
                </div>

                {/* Lado derecho: lista de servicios */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-emerald-deep text-lg mb-4">
                    Servicios especializados:
                  </h4>
                  {sector.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-emerald-accent/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="w-8 h-8 rounded-lg bg-emerald-deep/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-deep font-bold text-sm">{i + 1}</span>
                      </span>
                      <span className="text-slate-tech text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
