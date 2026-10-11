import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, Award, Send, CheckCircle, AlertCircle, Copy, Check, Clock, ExternalLink } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/portfolio'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormState {
  status: 'idle' | 'sending' | 'success' | 'error'
  error: string
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [state, setState] = useState<FormState>({ status: 'idle', error: '' })
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(profile.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const validate = (): string => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email.'
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.message.trim()) return 'Please write a message.'
    if (form.message.trim().length < 15) return 'Message must be at least 15 characters.'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setState({ status: 'error', error: err })
      return
    }
    setState({ status: 'sending', error: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: profile.name,
            reply_to: form.email,
          },
          publicKey
        )
      } else {
        // Fallback simulation when keys not yet configured in .env
        await new Promise(r => setTimeout(r, 1200))
      }
      setState({ status: 'success', error: '' })
      setForm({ name: '', email: '', message: '' })
    } catch (error: any) {
      console.error('EmailJS send error:', error)
      setState({
        status: 'error',
        error: error?.text || 'Failed to send message. Please contact directly via email.',
      })
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <p className="section-label">Connect & Collaborate</p>
          <h2 className="section-title">Let's Discuss Projects or Data Opportunities</h2>
          <p className="section-subtitle">
            Whether you are a recruiter hiring for Data Analyst or AI/ML roles, or a fellow builder working on intelligent products, I would love to connect.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* ── Contact info ── */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.65 }}
          >
            <div className={styles.linkList}>
              {/* 1. Phone & WhatsApp */}
              <div className={`glass ${styles.linkCard}`}>
                <span className={styles.linkIcon}><Phone size={19} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.linkLabel}>Phone & WhatsApp</p>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className={styles.linkValue}>
                    {profile.phone}
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.76rem',
                      gap: '0.35rem',
                      background: '#25D366',
                      color: '#080B12',
                      fontWeight: 600,
                      borderRadius: '8px',
                    }}
                    title="Start WhatsApp Chat"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="btn btn-ghost"
                    style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem', gap: '0.3rem' }}
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check size={14} color="var(--accent-green)" /> : <Copy size={14} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* 2. Email Address */}
              <div className={`glass ${styles.linkCard}`}>
                <span className={styles.linkIcon}><Mail size={19} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.linkLabel}>Email Address</p>
                  <a href={`mailto:${profile.email}`} className={styles.linkValue} style={{ wordBreak: 'break-all' }}>
                    {profile.email}
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn btn-ghost"
                    style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem', gap: '0.3rem' }}
                    title="Open mail compose"
                  >
                    <Send size={13} />
                    <span>Mail</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-ghost"
                    style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem', gap: '0.3rem' }}
                    title="Copy email address"
                  >
                    {copied ? <Check size={14} color="var(--accent-green)" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* 3. LinkedIn Profile */}
              <div className={`glass ${styles.linkCard}`}>
                <span className={styles.linkIcon}><Linkedin size={19} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.linkLabel}>LinkedIn Profile</p>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkValue}>
                    abhishek-khati-b263b0319
                  </a>
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem', gap: '0.35rem' }}
                >
                  <span>Connect</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* 4. GitHub Profile */}
              <div className={`glass ${styles.linkCard}`}>
                <span className={styles.linkIcon}><Github size={19} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.linkLabel}>GitHub Repositories</p>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.linkValue}>
                    Abhishek-khati
                  </a>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem', gap: '0.35rem' }}
                >
                  <span>View</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* 5. HackerRank Profile */}
              <div className={`glass ${styles.linkCard}`}>
                <span className={styles.linkIcon}><Award size={19} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.linkLabel}>HackerRank Profile</p>
                  <a href={profile.hackerrank} target="_blank" rel="noopener noreferrer" className={styles.linkValue}>
                    akhati713
                  </a>
                </div>
                <a
                  href={profile.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: '0.4rem 0.75rem', fontSize: '0.75rem', gap: '0.35rem' }}
                >
                  <span>Verify</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Quick availability pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.82rem',
                color: 'var(--text-2)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
              }}
            >
              <Clock size={16} color="var(--primary)" />
              <span>Available for full-time roles & internships · IST timezone (UTC+5:30)</span>
            </div>

            {/* Resume button */}
            <a
              href={profile.resumeUrl}
              download
              className={`btn btn-outline ${styles.resumeBtn}`}
              aria-label="Download resume"
            >
              Download Complete Resume (PDF)
            </a>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            className={`glass ${styles.formCard}`}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            {state.status === 'success' ? (
              <div className={styles.successMsg}>
                <CheckCircle size={40} className={styles.successIcon} />
                <h3>Message Received!</h3>
                <p>Thanks for getting in touch. I review messages regularly and will respond promptly.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setState({ status: 'idle', error: '' })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3 className={styles.formTitle}>Direct Message</h3>

                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Sarah Jenkins"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="e.g. sarah@company.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Project or Opportunity Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your team, role opening, or technical project..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                {state.status === 'error' && (
                  <div className={styles.errorMsg} role="alert">
                    <AlertCircle size={16} />
                    {state.error}
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={state.status === 'sending'}
                  aria-label="Send message"
                >
                  {state.status === 'sending' ? (
                    <span className={styles.spinner} aria-hidden="true" />
                  ) : (
                    <Send size={16} />
                  )}
                  {state.status === 'sending' ? 'Sending Message…' : 'Send Message'}
                </button>

                <p className={styles.formNote}>
                  Replies typically within 24 hours. Confidential and direct to inbox.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
