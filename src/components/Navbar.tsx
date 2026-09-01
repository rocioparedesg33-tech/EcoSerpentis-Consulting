import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

// ============================================
// SECCIÓN 1: MENÚ DE NAVEGACIÓN (NAVBAR)
// ============================================
// Para editar los enlaces del menú, modifica el array `navLinks`.
// Para editar el botón de WhatsApp, modifica el `href` y el texto.

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Contacto', href: '#contacto' },
]

const whatsappUrl = 'https://wa.link/d7r0t9'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-emerald-deep/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Texto */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <img
              src="https://i.ibb.co/mdMqw6K/INSIGNIA-ECOSERPENTIS.jpg"
              alt="ECOSERPENTIS CONSULTING"
              className="w-14 h-14 rounded-lg object-cover group-hover:rotate-12 transition-transform duration-500"
            />
            <span
              className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-emerald-deep' : 'text-emerald-deep'
              }`}
            >
              ECOSERPENTIS
            </span>
            <span
              className={`hidden sm:inline font-display font-medium text-sm tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-slate-gray' : 'text-slate-gray'
              }`}
            >
              Consulting
            </span>
          </a>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-tech hover:text-emerald-deep transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Botón WhatsApp + Toggle móvil */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Corporativo</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-emerald-deep"
              aria-label="Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md rounded-2xl shadow-xl mb-4 p-6 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-tech hover:text-emerald-deep transition-colors duration-300 py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
