import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Clock,
  Sparkles,
  Database,
  BarChart3,
  Cpu,
  Boxes,
  Download,
  ArrowRight,
} from 'lucide-react'
import { profile } from '../data/portfolio'
import styles from './About.module.css'

const STRENGTHS = [
  {
    icon: Database,
    title: 'SQL & Data Modeling',
    desc: 'Schema design, complex aggregations, window functions, and query optimization across PostgreSQL and MySQL.',
  },
  {
    icon: BarChart3,
    title: 'Exploratory Analytics & BI',
    desc: 'Transforming raw transaction logs into executive Power BI dashboards with cohort segmentation and DAX metrics.',
  },
  {
    icon: Cpu,
    title: 'Applied AI & ML Pipelines',
    desc: 'Feature engineering, Random Forest / XGBoost classification, and LangChain LLM orchestration for decision tools.',
  },
  {
    icon: Boxes,
    title: 'Systems & Prototyping',
    desc: 'Rapidly shipping interactive prototypes using Streamlit, Python, Docker, and modern React interfaces.',
  },
]

const TABS = [
  { id: 'story', label: 'Background & Journey' },
  { id: 'methodology', label: 'Analytical Approach' },
  { id: 'goals', label: 'Career Goals' },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
})

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('story')
  const [imgFailed, setImgFailed] = useState(false)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* ── Left: Visual Profile Card ── */}
          <motion.div
            className={styles.visual}
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={styles.profileCard}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatarRing} aria-hidden="true" />
                <div className={styles.avatar}>
                  {profile.avatarUrl && !imgFailed ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className={styles.avatarImg}
                      onError={() => setImgFailed(true)}
                    />
                  ) : (
                    <span className={styles.monogram}>
                      {profile.name.charAt(0) || 'A'}
                    </span>
                  )}
                </div>
              </div>

              <h3 className={styles.name}>{profile.name}</h3>
              <p className={styles.handle}>@{profile.displayName.toLowerCase().replace(/\s+/g, '')} · Developer & Analyst</p>

              <div className={styles.badgeRow}>
                <div className={styles.badgeItem}>
                  <GraduationCap size={16} />
                  <span>{profile.education}</span>
                </div>
                <div className={styles.badgeItem}>
                  <MapPin size={16} />
                  <span>{profile.location}</span>
                </div>
                <div className={styles.badgeItem}>
                  <Clock size={16} />
                  <span>Timezone: IST (UTC+5:30)</span>
                </div>
                <div className={styles.badgeItem}>
                  <Sparkles size={16} />
                  <span>Focus: Data Analytics & AI</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Editorial Content ── */}
          <div className={styles.content}>
            <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <p className="section-label">Profile & Perspective</p>
              <h2 className="section-title">
                Driven by Curiosity.<br />
                <span className="gradient-text">Grounded in Practical Execution.</span>
              </h2>
            </motion.div>

            {/* Story Tabs */}
            <motion.div
              className={styles.tabs}
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Tab Panels */}
            <motion.div
              className={styles.tabPanel}
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className={styles.bio}>{profile.about}</p>
                  </motion.div>
                )}

                {activeTab === 'methodology' && (
                  <motion.div
                    key="methodology"
                    className={styles.principleList}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.principleItem}>
                      <span className={styles.principleNum}>01</span>
                      <p className={styles.principleText}>
                        <strong>Formulate Hypotheses First:</strong> Every query or script starts with a business question: "Where is the drop-off?" or "Which variable drives risk?"
                      </p>
                    </div>
                    <div className={styles.principleItem}>
                      <span className={styles.principleNum}>02</span>
                      <p className={styles.principleText}>
                        <strong>Rigorous Ingestion & Validation:</strong> Clean data yields trustworthy decisions. Handling outliers, null values, and inconsistent schemas is non-negotiable.
                      </p>
                    </div>
                    <div className={styles.principleItem}>
                      <span className={styles.principleNum}>03</span>
                      <p className={styles.principleText}>
                        <strong>Deliver Actionable Dashboards:</strong> Numbers only matter if stakeholders can act on them. I design visual interfaces with clear executive hierarchy.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'goals' && (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className={styles.bio}>
                      I am in my final year of BCA and actively looking for <strong>Junior Data Analyst</strong>, <strong>Data Science Intern</strong>, or <strong>AI/ML Engineering</strong> roles. I want to contribute to high-impact teams where I can write clean SQL pipelines, build automated analytical workflows, and learn alongside experienced professionals.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Philosophy quote */}
            <motion.div
              className={styles.philosophyCard}
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <p className={styles.quote}>
                "Learn a concept → Apply it in a real project → Identify the limitations → Improve the result."
              </p>
            </motion.div>

            {/* Strengths Grid */}
            <motion.div
              className={styles.strengthsGrid}
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {STRENGTHS.map(st => {
                const Icon = st.icon
                return (
                  <div key={st.title} className={styles.strengthCard}>
                    <div className={styles.strengthIcon}>
                      <Icon size={19} />
                    </div>
                    <div>
                      <h4 className={styles.strengthTitle}>{st.title}</h4>
                      <p className={styles.strengthDesc}>{st.desc}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            <motion.div variants={fadeUp(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <button className="btn btn-outline" onClick={scrollToContact}>
                <span>Get In Touch For Collaborations</span>
                <ArrowRight size={15} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
