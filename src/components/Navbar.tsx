import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Sandbox',    href: '#playground' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Contact',    href: '#contact' },
]

interface Props {
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export default function Navbar({ theme, onThemeToggle }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')
  const [menuOpen, setMenuOpen]  = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracker
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => i.href.slice(1))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={e => { e.preventDefault(); handleNavClick('#home') }}
          aria-label="Go to top"
        >
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoName}>{profile.displayName}</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${active === item.href.slice(1) ? styles.navLinkActive : ''}`}
              onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
            >
              {item.label}
              {active === item.href.slice(1) && (
                <motion.span className={styles.activeDot} layoutId="nav-dot" />
              )}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          <button
            className={styles.themeToggle}
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={profile.resumeUrl}
            download
            className={`btn btn-outline ${styles.resumeBtn}`}
            aria-label="Download resume"
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${active === item.href.slice(1) ? styles.mobileLinkActive : ''}`}
                onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className={styles.mobileDivider} />
            <a href={profile.resumeUrl} download className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
