import { ArrowRight, Leaf, Cpu, Globe as Globe2, Award, Briefcase } from 'lucide-react'

// ============================================
// SECCIÓN 2: HERO (Bienvenida de Alto Impacto)
// ============================================
// Para editar el titular, subtítulo o CTA, modifica las constantes abajo.
// El botón CTA hace scroll automático a la sección de diagnóstico (#diagnostico).
// La insignia y reseña breve se muestran al inicio de la portada.

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-emerald-darker"
    >
      {/* Fondo: imagen + capa oscura translúcida + grid pattern + blobs */}
      <img
        src="https://i.ibb.co/wNtSFJMF/davinci-a-wide-cinematic-shot-of-a-modern-environmental-en.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-darker/80" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />

      {/* Blobs decorativos animados */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Contenido */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl">
          {/* Insignia al inicio de la portada */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-accent/15 backdrop-blur-sm border border-emerald-glow/30 rounded-full mb-6 animate-fade-in">
            <Award className="w-5 h-5 text-emerald-glow" />
            <span className="text-emerald-glow text-sm font-semibold tracking-wide">
              +10 años de experiencia en consultoría ambiental
            </span>
          </div>

          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-emerald-glow/20 rounded-full mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-emerald-glow" />
            <span className="text-emerald-glow text-sm font-medium tracking-wide">
              Consultora Ambiental de Vanguardia · Perú
            </span>
          </div>

          {/* Titular */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
            EcoSerpentis Consulting
            <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-medium text-emerald-glow">
              Ingeniería Ambiental de Vanguardia para la Gran Inversión en el Perú.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Aseguramos la viabilidad legal y técnica de tus proyectos con innovación tecnológica,
            estrategias ESG y descarbonización eficaz.
          </p>

          {/* Reseña breve de lo que hacemos como consultora */}
          <div className="mt-6 flex items-start gap-3 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Briefcase className="w-5 h-5 text-emerald-glow flex-shrink-0 mt-1" />
            <p className="text-slate-300 leading-relaxed">
              Elaboramos instrumentos de gestión ambiental avalados ante Senace, implementamos
              monitoreo inteligente con sensores IoT y drones, medimos huella de carbono, y
              diseñamos estrategias ESG y de descarbonización para los sectores clave de la industria peruana.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#diagnostico" className="btn-primary group">
              <span>[ Solicitar Diagnóstico Ambiental Express ]</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-glow/30 text-emerald-glow font-semibold rounded-xl
                         hover:bg-emerald-glow/10 transition-all duration-300"
            >
              Conocer Servicios
            </a>
          </div>

          {/* Iconos decorativos inferiores */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-accent/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-emerald-glow" />
              </div>
              <span className="text-sm font-medium">Tecnología IoT</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-accent/10 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-emerald-glow" />
              </div>
              <span className="text-sm font-medium">Estrategias ESG</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-accent/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-glow" />
              </div>
              <span className="text-sm font-medium">Descarbonización</span>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
