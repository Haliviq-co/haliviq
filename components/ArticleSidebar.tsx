'use client'
import Link from 'next/link'
import { useEffect, useState, type CSSProperties } from 'react'

type Item = { href: string; title: string; meta?: string }
type Topic = { label: string; href: string }

// Sticky right-hand column for article pages: booking CTA, auto table of contents
// (built from the <h2> elements inside the page's <article>), latest posts and topics.
// On mobile it stacks under the article and the table of contents is hidden.
export default function ArticleSidebar({
  lang, ctaHref, latest, latestTitle, topics, topicsTitle,
}: {
  lang: 'en' | 'th'
  ctaHref: string
  latest: Item[]
  latestTitle: string
  topics?: Topic[]
  topicsTitle?: string
}) {
  const en = lang === 'en'
  const [toc, setToc] = useState<{ id: string; text: string }[]>([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('article h2')) as HTMLElement[]
    const list = hs.map((h, i) => {
      if (!h.id) h.id = `sec-${i + 1}`
      h.style.scrollMarginTop = '100px'
      return { id: h.id, text: h.textContent || '' }
    })
    setToc(list)
    if (!('IntersectionObserver' in window) || !hs.length) return
    const io = new IntersectionObserver(
      (es) => { const v = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (v) setActive(v.target.id) },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    hs.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [])

  const card: CSSProperties = { border: '1px solid var(--line)', background: 'var(--bg-1)', borderRadius: 20, padding: 22 }
  const label: CSSProperties = { fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--purple)', fontWeight: 600, marginBottom: 14 }

  return (
    <aside className="mt-12 lg:mt-0 lg:sticky lg:top-[100px] lg:self-start flex flex-col gap-5" aria-label={en ? 'Sidebar' : 'แถบข้าง'}>
      <div className="theme-dark" style={{ borderRadius: 20, padding: 24, background: 'linear-gradient(135deg,#1B1740 0%,#2B2370 100%)', color: '#fff' }}>
        <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.45, marginBottom: 6 }}>{en ? 'Talk to us for free' : 'คุยกับเราฟรี'}</p>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgb(255 255 255 / .8)', marginBottom: 16 }}>{en ? '30-minute video call. No obligation.' : 'วิดีโอคอล 30 นาที ไม่มีข้อผูกมัด'}</p>
        <Link href={ctaHref} className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>{en ? 'Book a free call →' : 'นัดคุยฟรี →'}</Link>
      </div>

      {toc.length > 1 && (
        <nav className="hidden lg:block" style={card} aria-label={en ? 'On this page' : 'ในหน้านี้'}>
          <p style={label}>{en ? 'On this page' : 'ในหน้านี้'}</p>
          <ul className="flex flex-col gap-2.5" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {toc.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} style={{ fontSize: 14, lineHeight: 1.5, color: active === s.id ? 'var(--purple)' : 'var(--text-2)', fontWeight: active === s.id ? 600 : 400, textDecoration: 'none' }}>{s.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {latest.length > 0 && (
        <div style={card}>
          <p style={label}>{latestTitle}</p>
          <ul className="flex flex-col gap-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {latest.map((it) => (
              <li key={it.href}>
                <Link href={it.href} style={{ textDecoration: 'none' }}>
                  {it.meta && <span style={{ display: 'block', fontSize: 12, color: 'var(--text-3)', marginBottom: 2 }}>{it.meta}</span>}
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink)', fontWeight: 500 }}>{it.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topics && topics.length > 0 && (
        <div style={card}>
          <p style={label}>{topicsTitle || (en ? 'Topics' : 'หัวข้อ')}</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((tp) => (
              <Link key={tp.label} href={tp.href} style={{ fontSize: 13, padding: '7px 14px', borderRadius: 999, border: '1px solid var(--line)', color: 'var(--text-2)', textDecoration: 'none' }}>{tp.label}</Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
