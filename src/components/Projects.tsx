import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
})

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0]
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const hasGithub = project.github && !project.github.startsWith('EDITABLE')
  const hasDemo = project.demo && !project.demo.startsWith('EDITABLE')

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      style={{ '--card-color': project.color } as React.CSSProperties}
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Color accent bar */}
      <div className={styles.colorBar} style={{ background: project.color }} />

      {/* Project Image Preview */}
      {project.image && (
        <div className={styles.imageWrapper} onClick={onClick}>
          <img src={project.image} alt={project.name} className={styles.projectImage} loading="lazy" />
        </div>
      )}

      <div className={styles.cardBody}>
        {/* Category chip */}
        <span className={`chip ${styles.category}`}>{project.category}</span>

        {/* Title */}
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.summary}>{project.summary}</p>

        {/* Highlight Bullets */}
        <div className={styles.highlightsList}>
          {project.highlights.slice(0, 3).map(h => (
            <div key={h} className={styles.highlightItem}>
              <span className={styles.highlightDot} style={{ background: project.color }} />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className={styles.techRow}>
          {project.technologies.slice(0, 4).map(t => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="chip">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Note */}
        {project.note && <p className={styles.noteText}>⚠ {project.note}</p>}

        {/* Actions */}
        <div className={styles.actions}>
          <button className="btn btn-ghost" onClick={onClick} style={{ paddingLeft: 0 }}>
            <span>Case Study</span>
            <ArrowRight size={15} />
          </button>
          <div className={styles.links}>
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label={`GitHub: ${project.name}`}
              >
                <Github size={16} />
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label={`Live demo: ${project.name}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const hasGithub = project.github && !project.github.startsWith('EDITABLE')
  const hasDemo = project.demo && !project.demo.startsWith('EDITABLE')

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.name}`}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className={styles.modalHeader}>
            <div
              className={styles.colorBar}
              style={{
                background: project.color,
                position: 'static',
                width: '100%',
                borderRadius: '20px 20px 0 0',
              }}
            />
            <div className={styles.modalHeaderInner}>
              <span className="chip">{project.category}</span>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close case study">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className={styles.modalBody}>
            {/* Gallery with multiple pages if available */}
            {project.images && project.images.length > 0 ? (
              <div className={styles.modalGallery}>
                <div className={styles.galleryTabs}>
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`${styles.galleryTab} ${activeImageIdx === idx ? styles.galleryTabActive : ''}`}
                      onClick={() => setActiveImageIdx(idx)}
                    >
                      <span>{img.tabLabel || `Page ${idx + 1}`}</span>
                    </button>
                  ))}
                </div>

                <div className={styles.modalImageWrapper}>
                  <img
                    src={project.images[activeImageIdx].src}
                    alt={project.images[activeImageIdx].title}
                    className={styles.modalProjectImage}
                  />
                </div>

                <div className={styles.imageCaptionBox}>
                  <h5 className={styles.imageCaptionTitle}>{project.images[activeImageIdx].title}</h5>
                  <p className={styles.imageCaptionDesc}>{project.images[activeImageIdx].desc}</p>
                </div>
              </div>
            ) : project.image ? (
              <div className={styles.modalImageWrapper}>
                <img src={project.image} alt={project.name} className={styles.modalProjectImage} />
              </div>
            ) : null}

            <h2 className={styles.modalTitle}>{project.name}</h2>
            <p className={styles.modalTagline}>{project.tagline}</p>

            <p className={styles.modalDesc}>{project.description}</p>

            <div className={styles.modalSection}>
              <h4>Core Objectives & Achievements</h4>
              <ul className={styles.modalHighlightsList}>
                {project.highlights.map(h => (
                  <li key={h}>
                    <span className={styles.bullet} style={{ background: project.color }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4>Technologies & Libraries Applied</h4>
              <div className={styles.techRow}>
                {project.technologies.map(t => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.note && (
              <div className={styles.noteBox}>
                <strong>Integrity & Scope Notice:</strong> {project.note}
              </div>
            )}

            <div className={styles.modalActions}>
              {hasDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  // Featured projects
  const featuredList = useMemo(() => projects.filter(p => p.featured), [])
  const [activeFeaturedId, setActiveFeaturedId] = useState<string>(featuredList[0]?.id || projects[0].id)
  const featured = featuredList.find(p => p.id === activeFeaturedId) || featuredList[0] || projects[0]

  // Filter categories
  const categories = ['All', 'Data Analytics', 'Financial Analytics', 'AI / ML', 'Web3 / Security']

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    if (activeCategory === 'Data Analytics') {
      return projects.filter(p => p.category.includes('Analytics') || p.category.includes('Data') || p.category.includes('SQL'))
    }
    if (activeCategory === 'Financial Analytics') {
      return projects.filter(
        p =>
          p.category.includes('Financial') ||
          p.category.includes('Market') ||
          p.category.includes('Commodities') ||
          p.category.includes('Quantitative') ||
          p.category.includes('Forex')
      )
    }
    if (activeCategory === 'AI / ML') {
      return projects.filter(p => p.category.includes('AI') || p.category.includes('ML'))
    }
    if (activeCategory === 'Web3 / Security') {
      return projects.filter(p => p.category.includes('Blockchain') || p.category.includes('Security'))
    }
    return projects
  }, [activeCategory])

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Selected Portfolio</p>
          <h2 className="section-title">Things I've Built & Analyzed</h2>
          <p className="section-subtitle">
            End-to-end analytical solutions, machine learning experiments, and intelligent tools.
            Every project represents practical execution and verified learning.
          </p>
        </motion.div>

        {/* Featured Project Spotlight */}
        {featured && (
          <motion.div
            className={styles.featuredSpotlight}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={styles.spotlightAccent} />
            <div>
              <div className={styles.featuredHeaderRow}>
                <div className={styles.featuredBadge}>
                  <Sparkles size={13} />
                  <span>Featured Case Study</span>
                </div>
                {featuredList.length > 1 && (
                  <div className={styles.featuredSwitcher}>
                    {featuredList.map(f => {
                      const label =
                        f.id === 'silver-analytics'
                          ? '📈 Silver Forecasting'
                          : f.id === 'forex-signal'
                          ? '🤖 Forex AI Suite'
                          : f.id === 'convexity-agent'
                          ? '🏛️ BondIQ Fixed Income'
                          : f.id === 'credit-risk-ifrs9'
                          ? '💳 Credit Risk (IFRS 9)'
                          : f.name
                      return (
                        <button
                          key={f.id}
                          className={`${styles.featuredSwitchBtn} ${f.id === featured.id ? styles.featuredSwitchBtnActive : ''}`}
                          onClick={() => setActiveFeaturedId(f.id)}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
              <h3 className={styles.spotlightTitle}>{featured.name}</h3>
              <p className={styles.spotlightTagline}>{featured.tagline}</p>
              <p className={styles.spotlightSummary}>{featured.summary}</p>

              {featured.spotlightMetrics && featured.spotlightMetrics.length > 0 && (
                <div className={styles.spotlightMetrics}>
                  {featured.spotlightMetrics.map((m, idx) => (
                    <div key={idx} className={styles.spotlightMetricBox}>
                      <span className={styles.spotlightMetricVal}>{m.val}</span>
                      <span className={styles.spotlightMetricLbl}>{m.lbl}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.spotlightActions}>
                <button className="btn btn-primary" onClick={() => setSelected(featured)}>
                  <span>Explore Case Study</span>
                  <ArrowRight size={15} />
                </button>
                <div className={styles.techRow}>
                  {featured.technologies.map(t => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side visual highlight box */}
            <div className={styles.spotlightVisual}>
              {featured.image && (
                <div
                  className={styles.spotlightImgBox}
                  onClick={() => setSelected(featured)}
                  title="Click to view full case study"
                >
                  <img src={featured.image} alt={featured.name} className={styles.spotlightImg} />
                </div>
              )}
              {featured.spotlightArchitecture && featured.spotlightArchitecture.length > 0 && (
                <>
                  <div className={styles.spotlightVisualTitle}>
                    <Layers size={15} />
                    <span>Pipeline Architecture</span>
                  </div>
                  <div className={styles.spotlightList}>
                    {featured.spotlightArchitecture.map((item, idx) => (
                      <div key={idx} className={styles.spotlightListItem}>
                        <span className={styles.spotlightBullet} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Filter buttons */}
        <motion.div
          className={styles.filterBar}
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
