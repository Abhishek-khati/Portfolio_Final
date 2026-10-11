import { useEffect, useRef, lazy, Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Download, ChevronRight, Sparkles, Terminal, Activity } from 'lucide-react'
import { profile } from '../data/portfolio'
import styles from './Hero.module.css'

const HeroScene = lazy(() => import('./HeroScene'))

const ROLES = [
  'Data Analytics & BI',
  'Predictive AI & Machine Learning',
  'Intelligent Systems & Automation',
  'SQL, Python & Statistical Insights',
]

const CORE_STACK = [
  { name: 'Python', color: '#5CE1FF' },
  { name: 'SQL / Postgres', color: '#9B8CFF' },
  { name: 'Power BI', color: '#FFB347' },
  { name: 'Scikit-learn', color: '#3DFFC0' },
  { name: 'LangChain', color: '#FF6B9D' },
  { name: 'Docker', color: '#5CE1FF' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // Rotating roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  // Parallax on mouse move
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth: W, innerHeight: H } = window
      const xPct = (clientX / W - 0.5) * 2
      const yPct = (clientY / H - 0.5) * 2
      el.style.setProperty('--mouse-x', xPct.toFixed(3))
      el.style.setProperty('--mouse-y', yPct.toFixed(3))
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPlayground = () => {
    document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero} ref={containerRef} aria-label="Hero">
      {/* Ambient blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.blob3} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* ── Left: text ── */}
        <div className={styles.content}>
          {/* Eyebrow & Status */}
          <motion.div
            className={styles.eyebrow}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>{profile.eyebrow}</span>
          </motion.div>

          {/* Headline with dynamic typewriter/rotator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h1 className={styles.headline}>
              Turning Data Into Insight.{' '}
              <br />
              <span className={styles.roleRotator}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className={styles.roleHighlight}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className={styles.typeCursor} aria-hidden="true" />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className={styles.description}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {profile.heroDescription}
          </motion.p>

          {/* Availability badge */}
          <motion.div
            className={styles.availBadge}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.3}
          >
            <span className={styles.availDot} />
            <span>Open to Data Analytics & AI/ML Opportunities · India</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <button
              className="btn btn-primary"
              onClick={scrollToProjects}
              aria-label="Explore my projects"
            >
              <Sparkles size={16} />
              Explore Projects
            </button>

            <button
              className="btn btn-outline"
              onClick={scrollToPlayground}
              aria-label="Test interactive data sandbox"
            >
              <Terminal size={15} />
              Interactive SQL Sandbox
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="btn btn-ghost"
              aria-label="Download resume PDF"
            >
              <Download size={15} />
              Resume
            </a>
          </motion.div>

          {/* Tech stack badge row */}
          <motion.div
            className={styles.techStrip}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3.5}
          >
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginRight: '0.2rem' }}>
              Core Tools:
            </span>
            {CORE_STACK.map(tech => (
              <span key={tech.name} className={styles.techPill}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: tech.color }} />
                {tech.name}
              </span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className={styles.statsRow}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {[
              { value: '5+', label: 'End-to-End Builds' },
              { value: 'BCA', label: 'Final Year · Data Focus' },
              { value: 'SQL · Py · BI', label: 'Production Toolkit' },
              { value: '100%', label: 'Honest Milestones' },
            ].map(stat => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D scene ── */}
        <motion.div
          className={styles.canvas}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <Suspense fallback={<div className={styles.canvasPlaceholder} />}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className={styles.scrollBtn}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={18} />
        </button>
      </motion.div>
    </section>
  )
}
