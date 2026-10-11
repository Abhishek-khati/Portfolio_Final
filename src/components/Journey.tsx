import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { journey } from '../data/portfolio'
import styles from './Journey.module.css'

export default function Journey() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="journey" className={`section ${styles.journey}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Learning Path</p>
          <h2 className="section-title">My Journey So Far</h2>
          <p className="section-subtitle">
            A snapshot of how I've been growing — no fabricated dates, just honest milestones.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {journey.map((milestone, i) => (
            <motion.div
              key={milestone.id}
              className={`${styles.item} ${milestone.isNext ? styles.isNext : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Connector line */}
              {i < journey.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}

              {/* Icon node */}
              <div className={`${styles.node} ${milestone.isNext ? styles.nodeNext : ''}`}>
                <span className={styles.nodeIcon}>{milestone.icon}</span>
              </div>

              {/* Content */}
              <div className={`glass ${styles.content}`}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                  {milestone.date && (
                    <span className={styles.date}>{milestone.date}</span>
                  )}
                  {!milestone.date && !milestone.isNext && (
                    <span className={styles.datePlaceholder}>Date TBA</span>
                  )}
                  {milestone.isNext && (
                    <span className={styles.nextBadge}>Coming Up</span>
                  )}
                </div>
                <p className={styles.milestoneDetail}>{milestone.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
