import { useEffect, useRef } from 'react'

export function useScrollProgress() {
  const progressRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bar = document.createElement('div')
    bar.className = 'scroll-indicator'
    document.body.appendChild(bar)
    progressRef.current = bar

    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      bar.style.width = `${pct}%`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      bar.remove()
    }
  }, [])
}
