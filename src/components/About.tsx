import { useRef } from 'react'
import { Target, Eye, Microscope, Lightbulb, Leaf } from 'lucide-react'

// ============================================
// SECCIÓN 4b: EQUIPO PROFESIONAL
// ============================================
import { Users, Leaf as LeafIcon, Beaker } from 'lucide-react'

type Specialty = 'Ing. Ambiental' | 'Ing. Agrónoma' | 'Ing. Química'

type Professional = {
  name: string
  specialty: Specialty
}

const professionals: Professional[] = [
  { name: 'Ing. Rocío Paredes Gamarra', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Rocío Castañeda Santiago', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Daisy Ventura Huamán', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Karem Condori Alvarez', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Efrén Alverca Ortiz', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Julio Rosel Ignacio', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Hernán Ramos García', specialty: 'Ing. Ambiental' },
  { name: 'Ing. Yolanda Paucar Pérez', specialty: 'Ing. Agrónoma' },
  { name: 'Ing. Zaira Salvador Amaya', specialty: 'Ing. Química' },
  { name: 'Ing. Fredy Gustavo Chambi', specialty: 'Ing. Química' },
]

const specialtyConfig: Record<Specialty, { icon: typeof Leaf; color: string; bg: string; border: string; image: string }> = {
  'Ing. Ambiental': { icon: LeafIcon, color: 'text-emerald-deep', bg: 'bg-emerald-deep/5', border: 'border-emerald-deep/15', image: 'https://i.ibb.co/0VMhGL9X/profelegante.jpg' },
  'Ing. Agrónoma': { icon: Leaf, color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', image: 'https://i.ibb.co/cScH8BFW/profcasual.jpg' },
  'Ing. Química': { icon: Beaker, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', image: 'https://i.ibb.co/QFZ2f79c/grupo-de-trabajadores-ecoserpentis.jpg' },
}

const specialtyOrder: Specialty[] = ['Ing. Ambiental', 'Ing. Agrónoma', 'Ing. Química']

// ============================================
// SECCIÓN 4: NOSOTROS (Quiénes Somos)
// ============================================
// Para editar el texto principal, modifica la constante `aboutText`.
// Para editar Misión o Visión, modifica los arrays `missionVision`.
// Para editar los valores/pilares, modifica el array `values`.
// El vídeo HTML5 se encuentra en el lado derecho de la cuadrícula.
// Para cambiar el vídeo, reemplaza la URL en el atributo `src` de la etiqueta <source>.

const aboutText =
  'En EcoSerpentis Consulting fusionamos la rigurosidad de la ciencia con la innovación tecnológica para ofrecer soluciones ambientales de vanguardia en el Perú. Inspirados en la resiliencia, adaptabilidad y profunda conexión con el entorno que representa nuestra identidad, acompañamos a las industrias clave del país en su transición hacia un modelo de desarrollo verdaderamente sostenible. No solo gestionamos el cumplimiento normativo; diseñamos la viabilidad estratégica de tus inversiones.'

const missionVision = [
  {
    icon: Target,
    title: 'MISIÓN',
    text: 'Garantizar la viabilidad y sostenibilidad de los proyectos de nuestros clientes mediante la elaboración de instrumentos de gestión ambiental de la más alta calidad, el uso de tecnología predictiva y el cumplimiento estricto del marco legal peruano, asegurando la armonía entre la inversión privada y la conservación de los ecosistemas.',
  },
  {
    icon: Eye,
    title: 'VISIÓN',
    text: 'Ser reconocidos al 2030 como la consultora ambiental líder e innovadora del mercado peruano, referentes en la integración de criterios ESG, descarbonización y tecnologías de monitoreo en tiempo real, impulsando una cultura empresarial que transforme los desafíos ambientales en ventajas competitivas globales.',
  },
]

const values = [
  { icon: Microscope, title: 'Rigor Científico y Legal' },
  { icon: Lightbulb, title: 'Innovación de Vanguardia' },
  { icon: Leaf, title: 'Compromiso Ecosistémico' },
]

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    const v = videoRef.current
    if (v) {
      v.muted = false
      v.volume = 1.0
      v.play().catch(() => {})
    }
  }
  const handleMouseLeave = () => {
    videoRef.current?.pause()
  }

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="section-container">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-accent font-semibold text-sm tracking-widest uppercase">
            Nosotros
          </span>
          <h2 className="section-title mt-3">Quiénes Somos</h2>
          <div className="w-20 h-1 bg-emerald-accent rounded-full mx-auto mt-6" />
        </div>

        {/* Cuadrícula de dos columnas: texto + vídeo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Lado izquierdo: texto */}
          <div>
            <p className="text-lg md:text-xl text-slate-tech leading-relaxed">
              {aboutText}
            </p>
          </div>

          {/* Lado derecho: reproductor de vídeo HTML5 */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-emerald-deep/10"
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <video
              ref={videoRef}
              id="v"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="/Video.mp4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ width: '100%', maxWidth: 640, borderRadius: 8 }}
            />
          </div>
        </div>

        {/* Cards de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 card-hover overflow-hidden"
            >
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-deep/5 rounded-full blur-2xl group-hover:bg-emerald-deep/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-emerald-deep flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-emerald-glow" />
                </div>
                <h3 className="font-display text-xl font-bold text-emerald-deep mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-slate-tech leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Valores como Pilares */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-emerald-deep mb-12">
            Nuestros Pilares
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-emerald-deep/5 border border-emerald-deep/10 hover:bg-emerald-deep hover:text-white transition-all duration-500 group cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-deep group-hover:bg-white/10 flex items-center justify-center mb-4 transition-all duration-500">
                  <value.icon className="w-8 h-8 text-emerald-glow" />
                </div>
                <span className="font-display font-semibold text-lg text-emerald-deep group-hover:text-white transition-colors duration-500">
                  {value.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Profesional */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-deep/5 rounded-full mb-4">
              <Users className="w-5 h-5 text-emerald-deep" />
              <span className="text-emerald-deep text-sm font-semibold tracking-wide">Equipo Profesional</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-emerald-deep">
              Especialistas que Impulsan tu Proyecto
            </h3>
            <div className="w-20 h-1 bg-emerald-accent rounded-full mx-auto mt-6" />
          </div>

          {specialtyOrder.map((specialty) => {
            const config = specialtyConfig[specialty]
            const Icon = config.icon
            const members = professionals.filter((p) => p.specialty === specialty)
            return (
              <div key={specialty} className="mb-10">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Imagen del equipo con aspect 16:9 */}
                  <div className="lg:col-span-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-emerald-deep/10 group/img">
                      <div className="aspect-video w-full">
                        <img
                          src={config.image}
                          alt={`Equipo ${specialty}`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-emerald-darker/20 group-hover/img:bg-transparent transition-all duration-500" />
                    </div>
                  </div>
                  {/* Lista de profesionales */}
                  <div className="lg:col-span-2">
                    {/* Encabezado de especialidad */}
                    <div className={`flex items-center gap-3 mb-6 ${config.color}`}>
                      <div className={`w-12 h-12 rounded-xl ${config.bg} ${config.border} border flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold">{specialty}</h4>
                        <span className="text-sm text-slate-gray">{members.length} profesional{members.length > 1 ? 'es' : ''}</span>
                      </div>
                    </div>
                    {/* Grid de tarjetas de profesionales */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {members.map((member, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-default"
                        >
                          {/* Avatar con iniciales */}
                          <div className={`w-12 h-12 rounded-full ${config.bg} ${config.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                            <span className={`font-display font-bold text-sm ${config.color}`}>
                              {member.name.replace('Ing. ', '').split(' ').slice(0, 2).map((n) => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-slate-tech text-sm leading-snug">{member.name}</p>
                            <p className={`text-xs mt-0.5 ${config.color} font-medium`}>{member.specialty}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
