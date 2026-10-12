import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Search, Database, BarChart2, Cpu, Wrench } from 'lucide-react'
import { skills as allSkills } from '../data/portfolio'
import styles from './Skills.module.css'

const LEVEL_LABEL: Record<string, string> = {
  working:  'Working Knowledge',
  familiar: 'Familiar & Tested',
  learning: 'Actively Exploring',
}

// Concrete project references for key skills
const SKILL_PROJECT_MAP: Record<string, string> = {
  SQL: 'Customer Shopping & Silver Analytics',
  PostgreSQL: 'Customer Shopping Behavior',
  MySQL: 'Academic Relational DBs',
  Excel: 'Financial Modeling & Pivot Analyses',
  'Power BI': 'Customer Shopping & Silver Analytics',
  DAX: 'Silver Market Dashboard',
  Python: 'Core Project Engine (All Builds)',
  Pandas: 'Data Cleaning & EDA Pipelines',
  NumPy: 'Matrix & Volatility Calculations',
  Matplotlib: 'Distribution & Trend Plots',
  Seaborn: 'Correlation Heatmaps',
  'Scikit-learn': 'Forex Signal Classification',
  'Random Forest': 'Forex Direction Experiments',
  XGBoost: 'Signal Prediction Models',
  LangChain: 'Convexity Agent & ChainShield',
  Streamlit: 'Convexity Risk Interface',
  Docker: 'ChainShield AI Hackathon',
  Git: 'Version Control (All Repos)',
  GitHub: 'Open Source Repositories',
  Blockchain: 'ChainShield Smart Contracts',
}

const PIPELINE_STAGES = [
  { num: '01', title: 'Data Ingestion & SQL', tools: 'Postgres · MySQL · Ingestion Pipelines' },
  { num: '02', title: 'Wrangling & Analysis', tools: 'Pandas · NumPy · Statistical Validation' },
  { num: '03', title: 'Machine Learning & AI', tools: 'Scikit-learn · XGBoost · LangChain' },
  { num: '04', title: 'Executive BI & UI', tools: 'Power BI · Streamlit · Modern Web' },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
})

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const [showAll, setShowAll] = useState(false)

  const categories = Object.keys(allSkills) as (keyof typeof allSkills)[]

  // Flatten skills with category info
  const allFlattened = useMemo(() => {
    const list: { name: string; level: string; category: string }[] = []
    for (const [cat, items] of Object.entries(allSkills)) {
      items.forEach(item => {
        list.push({ ...item, category: cat })
      })
    }
    return list
  }, [])

  // Filtered skills based on category & search
  const filteredSkills = useMemo(() => {
    return allFlattened.filter(s => {
      const matchesCat = activeCategory === 'All' || s.category === activeCategory
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [allFlattened, activeCategory, searchQuery])

  // Visible skills to avoid overwhelming 20-card single-column scrolls on mobile
  const visibleSkills = useMemo(() => {
    if (activeCategory === 'All' && !searchQuery && !showAll) {
      return filteredSkills.slice(0, 10)
    }
    return filteredSkills
  }, [filteredSkills, activeCategory, searchQuery, showAll])

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Technical Toolkit</p>
          <h2 className="section-title">Skills & Analytics Capabilities</h2>
          <p className="section-subtitle">
            Tools, libraries, and frameworks I use to transform raw numbers into production insights.
            No exaggerated percentage bars — just honest, project-tested proficiency.
          </p>
        </motion.div>

        {/* 4-Stage Lifecycle Banner */}
        <motion.div
          className={styles.pipelineBanner}
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PIPELINE_STAGES.map(stage => (
            <div key={stage.num} className={styles.pipelineStep}>
              <div className={styles.pipelineHeader}>
                <span className={styles.stepNum}>{stage.num}</span>
                <span className={styles.stepTitle}>{stage.title}</span>
              </div>
              <span className={styles.stepTools}>{stage.tools}</span>
            </div>
          ))}
        </motion.div>

        {/* Controls: Search + Categories */}
        <motion.div
          className={styles.controlsBar}
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className={styles.searchWrap}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search e.g. SQL, Python, LangChain..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search skills"
            />
          </div>

          <div className={styles.tabs} role="tablist">
            <button
              role="tab"
              aria-selected={activeCategory === 'All'}
              className={`${styles.tab} ${activeCategory === 'All' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span>All</span>
              <span className={styles.tabCount}>{allFlattened.length}</span>
            </button>
            {categories.map(cat => {
              const count = allSkills[cat].length
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className={styles.tabCount}>{count}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            className={styles.grid}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {visibleSkills.map((skill, i) => {
              const projectRef = SKILL_PROJECT_MAP[skill.name]
              return (
                <motion.div
                  key={skill.name}
                  className={styles.card}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.skillName}>{skill.name}</span>
                    {/* Visual 3-block level meter */}
                    <div className={styles.meterWrap} title={LEVEL_LABEL[skill.level]}>
                      <span
                        className={`${styles.meterBlock} ${
                          skill.level === 'working'
                            ? styles.meterBlockFilled
                            : skill.level === 'familiar'
                            ? styles.meterBlockFamiliar
                            : styles.meterBlockLearning
                        }`}
                      />
                      <span
                        className={`${styles.meterBlock} ${
                          skill.level === 'working'
                            ? styles.meterBlockFilled
                            : skill.level === 'familiar'
                            ? styles.meterBlockFamiliar
                            : ''
                        }`}
                      />
                      <span
                        className={`${styles.meterBlock} ${
                          skill.level === 'working' ? styles.meterBlockFilled : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={`skill-badge ${skill.level}`}>
                      {skill.level}
                    </span>
                    {projectRef ? (
                      <span className={styles.projectTag} title={`Used in: ${projectRef}`}>
                        {projectRef.split(' ')[0]}...
                      </span>
                    ) : (
                      <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>{skill.category}</span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Expand / Collapse Button for All Category */}
        {activeCategory === 'All' && !searchQuery && filteredSkills.length > 10 && (
          <div style={{ textAlign: 'center', marginTop: '-1rem', marginBottom: '2.5rem' }}>
            <button
              className="btn btn-outline"
              onClick={() => setShowAll(prev => !prev)}
              style={{ fontSize: '0.84rem', padding: '0.55rem 1.4rem' }}
            >
              {showAll ? 'Show Fewer Skills (Top 10)' : `View All ${filteredSkills.length} Technical Skills`}
            </button>
          </div>
        )}

        {/* Legend */}
        <motion.div
          className={styles.legend}
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className={styles.legendLabel}>Proficiency Key:</span>
          {Object.entries(LEVEL_LABEL).map(([key, label]) => (
            <span key={key} className={`skill-badge ${key}`}>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
