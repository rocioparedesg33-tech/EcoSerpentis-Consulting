import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredentialsBar from './components/CredentialsBar'
import About from './components/About'
import Services from './components/Services'
import FieldGallery from './components/FieldGallery'
import Sectors from './components/Sectors'
import DiagnosticForm from './components/DiagnosticForm'
import Footer from './components/Footer'

// ============================================
// APP PRINCIPAL - ECOSERPENTIS CONSULTING
// ============================================
// Estructura de secciones:
// 1. Navbar          - Menú de navegación fijo
// 2. Hero            - Bienvenida de alto impacto
// 3. CredentialsBar  - Franja de credenciales legales
// 4. About           - Quiénes somos (Misión, Visión, Valores)
// 5. Services        - Servicios de vanguardia
// 6. Sectors         - Sectores clave (pestañas interactivas)
// 7. DiagnosticForm  - Formulario de diagnóstico express
// 8. Footer          - Contacto y pie de página

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CredentialsBar />
        <About />
        <Services />
        <FieldGallery />
        <Sectors />
        <DiagnosticForm />
      </main>
      <Footer />
    </div>
  )
}
