'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

export default function FeaturedWork({ lang, tr }: Props) {
  const fw = (tr as any).featuredWork
  const items = fw.items as { tag: string; title: string; desc: string; img: string }[]
  const prefix = `/${lang}`

  return (
    <section className="relative py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-10">
        <h2 className="t-display mb-14 lg:mb-20" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {fw.h2}
        </h2>

        {/* Sticky stacking cards. Each card is a direct sibling under the shared container
            below (no per-card wrapper) — that's what lets each one hold at `top: 96px`
            while later, higher z-index cards scroll up and cover it. Wrapping each card in
            its own extra-height box (an earlier attempt at this) breaks the effect: it gives
            each card its own separate "release point" so one fully scrolls away before the
            next is close enough to stick, leaving a gap instead of an overlap. */}
        <div>
          {items.map((it, i) => (
            <div
              key={it.title}
              className="sticky mb-6 lg:mb-8"
              style={{ top: '96px', zIndex: i + 1 }}
            >
              <div
                className="theme-dark rounded-3xl grid lg:grid-cols-2 items-stretch gap-8 lg:gap-4 p-6 lg:p-10"
                style={{
                  background: '#141329',
                  border: '1px solid rgb(var(--fg) / 0.08)',
                  boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)',
                }}
              >
                <div className="flex flex-col justify-center order-2 lg:order-1 py-2 lg:py-6">
                  <p
                    className="mb-5"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {it.tag}
                  </p>
                  <h3 className="t-display mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', lineHeight: 1.15 }}>
                    {it.title}
                  </h3>
                  <p className="t-body mb-9" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 460 }}>
                    {it.desc}
                  </p>
                  <div>
                    <Link
                      href={`${prefix}/work`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm"
                      style={{ background: 'rgb(var(--fg) / 0.08)', color: 'var(--ink)', fontWeight: 500 }}
                    >
                      {fw.viewProject}
                      <svg width="15" height="15" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden" style={{ minHeight: 300 }}>
                  {it.img ? (
                    <img loading="lazy" decoding="async" src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)' : 'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)' }}>
                      <i className="ti ti-photo" style={{ fontSize: 36, color: 'var(--ink)', opacity: 0.35 }} aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(20,19,41,0.2) 0%, transparent 30%)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
