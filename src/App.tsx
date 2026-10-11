import { useTheme } from './hooks/useTheme'
import { useScrollProgress } from './hooks/useScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DataPlayground from './components/DataPlayground'
import Journey from './components/Journey'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollProgress()

  return (
    <>
      <CursorGlow />
      <Navbar theme={theme} onThemeToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DataPlayground />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
