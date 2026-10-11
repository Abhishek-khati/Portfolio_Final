import styles from './Footer.module.css'
import { profile } from '../data/portfolio'
import { Github, Linkedin, Mail, Award, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.logoMark}>A</span>
            {profile.displayName}
          </span>
          <p className={styles.tagline}>{profile.headline}</p>
        </div>

        {/* Center */}
        <p className={styles.copy}>© {year} {profile.name}. All rights reserved.</p>

        {/* Right — social icons */}
        <div className={styles.socials}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.social} title="GitHub Profile">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.social} title="LinkedIn Profile">
            <Linkedin size={18} />
          </a>
          <a href={profile.hackerrank} target="_blank" rel="noopener noreferrer" aria-label="HackerRank" className={styles.social} title="HackerRank Profile">
            <Award size={18} />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.social} title="Chat on WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={styles.social} title="Send Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
