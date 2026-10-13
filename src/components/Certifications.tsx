import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Award, ShieldCheck, CheckCircle2, BookOpen, Sparkles, ExternalLink, X, ZoomIn } from 'lucide-react'
import styles from './Certifications.module.css'

interface CredentialItem {
  id: string
  category: string
  title: string
  issuer: string
  status: 'active' | 'hackathon' | 'academic'
  statusLabel: string
  issueDate?: string
  credentialId?: string
  description: string
  skills: string[]
  verifyUrl?: string
  image?: string
}

const CREDENTIALS: CredentialItem[] = [
  {
    id: 'deloitte-analytics',
    category: 'Certifications & Courses',
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    issuer: 'Deloitte',
    status: 'active',
    statusLabel: 'Completed & Verified',
    issueDate: 'Issued Aug 2026',
    credentialId: '6a6d6fb8a220bc300344ae60',
    description:
      'Completed practical job simulation completing data analytics tasks for Deloitte Australia, including data modeling, demographic data analysis, and executive dashboard communication.',
    skills: ['Data Modeling', 'Data Analysis', 'Tableau', 'Client Communication'],
    verifyUrl:
      'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_z45r9bQHcXpdkCB3G_1786943616286_completion_certificate.pdf',
  },
  {
    id: 'tata-data-viz',
    category: 'Certifications & Courses',
    title: 'Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation',
    issuer: 'Tata Group',
    status: 'active',
    statusLabel: 'Completed & Verified',
    issueDate: 'Issued Aug 2026',
    credentialId: 'WHFYkhqyHnAyjrKxT',
    description:
      'Created executive data visuals for business leadership, framing data questions, analyzing seasonal revenue trends, and structuring dashboard narratives.',
    skills: ['Data Visualization', 'Data Analysis', 'Executive Dashboards', 'Power BI'],
    verifyUrl:
      'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_z45r9bQHcXpdkCB3G_1786790554027_completion_certificate.pdf',
  },
  {
    id: 'advanced-excel',
    category: 'Certifications & Courses',
    title: 'Advance Excel Certification {1 Month Course}',
    issuer: 'Lord Buddha Computer Academy (MSME Regd. · ISO 9001:2015)',
    status: 'active',
    statusLabel: 'Grade A+ Certified',
    issueDate: 'Issued June 13, 2025',
    credentialId: '20bd639e02093e40',
    description:
      'Completed comprehensive Advance Excel course covering Pivot Tables, VLOOKUP/XLOOKUP, nested conditional logic, and financial data modeling. Awarded Grade A+ with official MSME and ISO certification.',
    skills: ['Pivot Tables', 'XLOOKUP / VLOOKUP', 'Data Modeling', 'Conditional Formulas', 'Financial Analysis'],
    image: '/certificates/advance-excel.png',
  },
  {
    id: 'hackerrank-sql-intermediate',
    category: 'Certifications & Courses',
    title: 'HackerRank SQL (Intermediate)',
    issuer: 'HackerRank',
    status: 'academic',
    statusLabel: 'Verified Assessment',
    credentialId: 'akhati713',
    description:
      'Demonstrated intermediate SQL competency solving complex multi-table joins, subqueries, aggregations, and data filtering challenges.',
    skills: ['SQL Joins', 'Subqueries', 'Complex Filtering', 'Aggregations'],
    verifyUrl: 'https://www.hackerrank.com/profile/akhati713',
  },
  {
    id: 'hackerrank-sql-basic',
    category: 'Certifications & Courses',
    title: 'HackerRank SQL (Basic)',
    issuer: 'HackerRank',
    status: 'academic',
    statusLabel: 'Verified Assessment',
    credentialId: 'akhati713',
    description:
      'Core relational database query assessments covering relational algebra, relational operators, sorting, and grouping.',
    skills: ['SQL Syntax', 'Relational Queries', 'Group By', 'Data Extraction'],
    verifyUrl: 'https://www.hackerrank.com/profile/akhati713',
  },
  {
    id: 'hackindia-2026',
    category: 'Hackathons',
    title: "HackIndia 2026 — India's Biggest Web3 & AI Hackathon",
    issuer: 'HackIndia · MIET Kumaon (Spark 10 Uttarakhand Region)',
    status: 'hackathon',
    statusLabel: 'Official Participant',
    issueDate: 'Issued Sept 27, 2026',
    credentialId: 'HI-2026-E0034-U012095-UZG9',
    description:
      'Competed in HackIndia Spark 10 at MIET Kumaon as a member of Team Hack. Built ChainShield AI — a hybrid smart-contract security scanner combining AST static checks with LLM contextual explanations, pitched live to technical jury.',
    skills: ['Web3 & Solidity', 'AI & LLM Integration', 'Smart Contract Security', 'Fast Prototyping', 'Jury Pitch & Defense'],
    image: '/certificates/hackindia-certificate.png',
    verifyUrl: 'https://chainshieldai-client.vercel.app/',
  },
  {
    id: 'miet-hackathon-runner-up',
    category: 'Hackathons',
    title: 'MIET Kumaon Technical Hackathon — 2nd Place 🥈',
    issuer: 'MIET Kumaon, Haldwani',
    status: 'hackathon',
    statusLabel: '2nd Place / Runner Up 🥈',
    issueDate: 'Campus Technical Hackathon',
    description:
      'Awarded 2nd Place (1st Runner Up) competing against inter-departmental teams at MIET Kumaon. Evaluated and commended by senior college faculty and evaluators for clean technical architecture, live problem-solving, and system defense.',
    skills: ['Rapid Prototyping', 'System Design', 'Team Collaboration', 'Live Jury Defense'],
    image: '/hackathon/miet-hackathon-2nd-place.png',
  },
  {
    id: 'smart-crop-advisory-hackathon',
    category: 'Hackathons',
    title: 'Smart Crop Advisory System — AgriTech Hackathon',
    issuer: 'MIET Kumaon, Haldwani',
    status: 'hackathon',
    statusLabel: 'AgriTech Hackathon',
    issueDate: 'AgriTech & Data Track',
    description:
      'Engineered an intelligent crop advisory prototype recommending optimal crops, soil nutrient management (N-P-K), and seasonal planting strategies based on environmental and weather parameters.',
    skills: ['AgriTech Analytics', 'Decision Rules', 'Python', 'Data Modeling', 'UI Dashboard'],
    verifyUrl: 'https://github.com/Abhishek-khati',
  },
  {
    id: 'sql-learning-platform-gehu',
    category: 'Hackathons',
    title: 'Interactive SQL Learning Platform — GEHU Hackathon',
    issuer: 'Graphic Era Hill University (Haldwani Campus)',
    status: 'hackathon',
    statusLabel: 'EdTech Hackathon',
    issueDate: 'EdTech & Database Track',
    description:
      'Designed and built an interactive SQL learning platform at Graphic Era Hill University (Haldwani), featuring progressive query challenges, real-time SQL execution sandbox, and schema visualizations.',
    skills: ['SQL Query Execution', 'EdTech Systems', 'Relational Databases', 'Web Architecture', 'User Experience'],
    verifyUrl: 'https://github.com/Abhishek-khati',
  },
  {
    id: 'bca-curriculum',
    category: 'Academics',
    title: 'Database Management Systems & Statistics',
    issuer: 'Bachelor of Computer Applications (MIET Kumaon)',
    status: 'academic',
    statusLabel: 'Academic Core',
    description:
      'Formal academic coursework in relational database design (3NF normalization, ACID properties, indexing) and statistical methods for computer applications.',
    skills: ['RDBMS', 'SQL Schema Design', 'Probability & Stats', 'Data Structures'],
  },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
})

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('All')
  const [selectedCert, setSelectedCert] = useState<CredentialItem | null>(null)

  useEffect(() => {
    if (!selectedCert) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCert])

  const categories = ['All', 'Certifications & Courses', 'Hackathons', 'Academics']

  const filtered = filter === 'All'
    ? CREDENTIALS
    : CREDENTIALS.filter(c => c.category === filter)

  return (
    <section id="certifications" className={`section ${styles.certs}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Continuous Learning</p>
          <h2 className="section-title">Credentials & Achievements</h2>
          <p className="section-subtitle">
            Curated coursework, hackathon submissions, and academic specialization.
            Reflects dedication to structured skill-building alongside hands-on projects.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className={styles.filterBar}
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.card}
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className={styles.cardTop}>
                <span className="chip" style={{ fontSize: '0.72rem' }}>{item.category}</span>
                <span
                  className={`${styles.statusBadge} ${
                    item.status === 'active'
                      ? styles.statusActive
                      : item.status === 'hackathon'
                      ? styles.statusHackathon
                      : styles.statusAcademic
                  }`}
                >
                  <span className={styles.statusDot} />
                  <span>{item.statusLabel}</span>
                </span>
              </div>

              <div>
                <h3 className={styles.certTitle}>{item.title}</h3>
                <p className={styles.certIssuer}>{item.issuer}</p>

                {(item.issueDate || item.credentialId) && (
                  <div className={styles.credentialMeta}>
                    {item.issueDate && <span className={styles.issueDate}>{item.issueDate}</span>}
                    {item.issueDate && item.credentialId && <span className={styles.metaDivider}>·</span>}
                    {item.credentialId && (
                      <span className={styles.credentialId}>
                        Credential ID: <code>{item.credentialId}</code>
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className={styles.certDesc}>{item.description}</p>

              <div className={styles.tagRow}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', flex: 1, alignItems: 'center' }}>
                  {item.skills.map(s => (
                    <span key={s} className="chip" style={{ fontSize: '0.72rem' }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {item.image && (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className={styles.showCredentialBtn}
                      title="Show certificate"
                    >
                      <span>Show credential</span>
                      <ExternalLink size={13} />
                    </button>
                  )}
                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.showCredentialBtn}
                      title={item.image ? 'View live project' : 'Show credential'}
                    >
                      <span>{item.image ? 'Live Project' : 'Show credential'}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authenticity notice */}
        <motion.div
          className={styles.authenticityNotice}
          variants={fadeUp(0.35)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <ShieldCheck size={22} className={styles.noticeIcon} />
          <p className={styles.noticeText}>
            <strong>Authenticity Pledge:</strong> In alignment with professional ethics, verified credential URLs and digital certificates will be populated here as final exam criteria are completed. No phantom certifications or inflated claims.
          </p>
        </motion.div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                className={styles.modalCard}
                initial={{ scale: 0.94, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
              >
                <div className={styles.modalHeader}>
                  <div>
                    <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
                    <p className={styles.modalIssuer}>{selectedCert.issuer}</p>
                  </div>
                  <button
                    className={styles.modalClose}
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                  >
                    <X size={18} />
                  </button>
                </div>
                {selectedCert.image && (
                  <div className={styles.modalImgWrap}>
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className={styles.modalImg}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
