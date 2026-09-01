import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, Shield, MessageCircle } from 'lucide-react'

// ============================================
// SECCIÓN 8: CONTACTO Y PIE DE PÁGINA
// ============================================
// Para editar los datos de contacto, modifica el array `contactInfo`.
// Para editar las redes sociales, modifica el array `socialLinks`.
// Para editar el texto legal, modifica la sección de políticas.

const contactInfo = [
  { icon: MapPin, label: 'Dirección', value: 'Av. Javier Prado Este 1234, San Isidro, Lima, Perú' },
  { icon: Phone, label: 'Teléfono', value: '+51 1 234 5678' },
  { icon: Mail, label: 'Correo', value: 'ecoserpentisconsulting@gmail.com', href: 'mailto:ecoserpentisconsulting@gmail.com' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ecoserpentis-consulting-939a99432' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ecoserpentisconsulting/' },
]

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Diagnóstico', href: '#diagnostico' },
]

const whatsappUrl = 'https://wa.link/d7r0t9'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-emerald-darker text-white">
      {/* Sección de contacto principal */}
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna 1: Logo + descripción */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://i.ibb.co/HfrGdvvt/Gemini-Generated-Image-oxapshoxapshoxap.jpg"
                alt="ECOSERPENTIS CONSULTING"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <span className="font-display font-bold text-lg">ECOSERPENTIS</span>
                <span className="block text-xs text-emerald-glow tracking-widest uppercase">
                  Consulting
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Ingeniería Ambiental de Vanguardia para la Gran Inversión en el Perú.
              Aseguramos la viabilidad legal y técnica de tus proyectos con innovación tecnológica,
              estrategias ESG y descarbonización eficaz.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-emerald-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Botón WhatsApp Corporativo */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-emerald-accent text-white font-semibold rounded-lg hover:bg-emerald-glow transition-all duration-300 hover:shadow-lg hover:shadow-emerald-accent/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Corporativo
            </a>
          </div>

          {/* Columna 2: Datos de contacto */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-emerald-glow">Contacto</h3>
            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-glow" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 text-sm hover:text-emerald-glow transition-colors duration-300">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-200 text-sm">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Navegación rápida */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-emerald-glow">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-emerald-glow transition-colors duration-300 text-sm group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Credencial */}
            <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-emerald-glow/10">
              <Shield className="w-5 h-5 text-emerald-glow flex-shrink-0" />
              <span className="text-xs text-slate-300 leading-relaxed">
                Inscritos en el RNCA - Senace
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior: políticas y copyright */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} ECOSERPENTIS CONSULTING. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-slate-400 hover:text-emerald-glow transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-xs text-slate-400 hover:text-emerald-glow transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="text-xs text-slate-400 hover:text-emerald-glow transition-colors duration-300">
                Política de Cookies
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            Diseñado y desarrollado por Ing. Rocío Paredes Gamarra - Casa SERPENTIS.
          </p>
        </div>
      </div>
    </footer>
  )
}
