import { useState, FormEvent } from 'react'
import { Send, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react'

// ============================================
// SECCIÓN 7: DIAGNÓSTICO AMBIENTAL EXPRESS (Formulario interactivo)
// ============================================
// Para editar los campos del formulario, modifica el JSX abajo.
// Los datos se guardan en Supabase (tabla: diagnostic_requests).
// Para editar el mensaje de éxito, modifica la constante `successMessage`.

const sectorOptions = [
  'Minería y Energía',
  'Infraestructura y Transportes',
  'Industria y Manufactura',
  'Agroindustria',
  'Otros',
]

type FormState = {
  name: string
  email: string
  company: string
  sector: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  sector: '',
  message: '',
}

export default function DiagnosticForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const formData = new FormData()
      // Reemplaza esta línea con la nueva clave:
      formData.append('access_key', 'ed748af4-6d7d-4d31-a84d-eeea42d568e5')
      formData.append('Nombre', form.name)
      formData.append('Correo', form.email)
      formData.append('Empresa', form.company)
      formData.append('Sector', form.sector)
      formData.append('Mensaje', form.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Error al enviar el formulario')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Ocurrió un error al enviar el formulario.'
      )
    }
  }
  return (
    <section id="diagnostico" className="py-24 bg-emerald-darker relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-light/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-glow font-semibold text-sm tracking-widest uppercase">
            Diagnóstico
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3">
            Diagnóstico Ambiental Express
          </h2>
          <div className="w-20 h-1 bg-emerald-glow rounded-full mx-auto mt-6" />
          <p className="text-slate-300 text-lg mt-6">
            Completa el formulario y recibe un diagnóstico inicial gratuito para tu proyecto.
          </p>
        </div>

        {/* Formulario */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-emerald-deep/20 p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-8 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-emerald-deep mb-3">
                  ¡Solicitud Recibida!
                </h3>
                <p className="text-slate-gray leading-relaxed mb-6">
                  Hemos registrado tu solicitud de diagnóstico ambiental. Nuestro equipo de
                  especialistas se pondrá en contacto contigo en breve para coordinar los siguientes pasos.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-tech mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 outline-none transition-all duration-300 text-slate-tech"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-tech mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 outline-none transition-all duration-300 text-slate-tech"
                    placeholder="ecoserpentisconsulting@gmail.com"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-tech mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 outline-none transition-all duration-300 text-slate-tech"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Sector (Dropdown) */}
                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-slate-tech mb-2">
                    Sector *
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    value={form.sector}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 outline-none transition-all duration-300 text-slate-tech bg-white"
                  >
                    <option value="">Selecciona un sector</option>
                    {sectorOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-tech mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 outline-none transition-all duration-300 text-slate-tech resize-none"
                    placeholder="Cuéntanos brevemente sobre tu proyecto o consulta..."
                  />
                </div>

                {/* Mensaje de error */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald-deep text-white font-semibold rounded-xl
                             hover:bg-emerald-dark transition-all duration-300 hover:shadow-lg hover:shadow-emerald-deep/30
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Generar Diagnóstico Inicial Gratuito
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
