'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

/*
  Hero laid out like haliviq.app:
  - Desktop: full-bleed team video, pill tag + big headline + buttons bottom-left, short copy bottom-right.
  - Mobile: video on top, copy on a dark block underneath.
  The section is pinned to the dark theme so it reads the same in light mode.
*/
export default function Hero({ lang, tr }: Props) {
  const h = tr.hero
  const prefix = `/${lang}`
  const tag = lang === 'th' ? 'ความคิดของคน · อนาคตที่ฉลาดขึ้น' : 'Human ideas. Intelligent future.'
  const start = lang === 'th' ? 'เริ่มโปรเจกต์' : 'Start a Project'

  return (
    <section className="theme-dark relative overflow-hidden" style={{ background: '#050310' }}>
      {/* Video: full-bleed on desktop, a top block on mobile */}
      <div className="relative w-full aspect-video mt-14 lg:mt-0 lg:aspect-auto lg:absolute lg:inset-0 lg:h-full">
        <video autoPlay muted loop playsInline preload="auto" poster="/images/hero/hero-restores.jpg" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center">
          <source src="/images/hero/hero-restores.webm" type="video/webm" />
          <source src="/images/hero/hero-restores.mp4" type="video/mp4" />
        </video>
        {/* Mobile: fade the bottom of the video into the dark copy block */}
        <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(180deg, rgba(5,3,16,0.35) 0%, rgba(5,3,16,0) 30%, rgba(5,3,16,0) 70%, #050310 100%)' }} />
        {/* Desktop: light shade top and bottom only, so the full frame stays visible (like haliviq.app) */}
        <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(90deg, rgba(5,3,16,0.55) 0%, rgba(5,3,16,0) 32%), linear-gradient(270deg, rgba(5,3,16,0.45) 0%, rgba(5,3,16,0) 25%), linear-gradient(180deg, rgba(5,3,16,0.45) 0%, rgba(5,3,16,0) 14%, rgba(5,3,16,0) 55%, rgba(5,3,16,0.85) 100%)' }} />
      </div>

      <div className="relative lg:min-h-screen lg:flex lg:flex-col lg:justify-end" style={{ zIndex: 3 }}>
        <div className="max-w-7xl w-full mx-auto px-5 lg:px-10 pt-2 pb-12 lg:pb-16 lg:pt-32 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="lg:max-w-[46rem]">
            <span className="inline-block fade-up rounded-full mb-5 lg:mb-6"
              style={{ animationDelay: '0s', background: 'linear-gradient(135deg,#A99CF8 0%,#53C3D7 100%)', color: '#08070F', fontWeight: 700, fontSize: 'clamp(0.7rem,1vw,0.85rem)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '10px 20px' }}>
              {tag}
            </span>

            <h1 className="t-display fade-up mb-5 lg:mb-8 text-[clamp(2.5rem,4.2vw,4.75rem)]" style={{ animationDelay: '0.1s', color: '#fff', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              {h.h1a}{' '}
              <span style={{ background: 'linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{h.h1b}</span>{' '}
              {h.h1c}
            </h1>

            {/* Mobile: copy sits under the headline */}
            <p className="lg:hidden mb-8 fade-up" style={{ animationDelay: '0.2s', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)' }}>
              {h.sub}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 fade-up" style={{ animationDelay: '0.3s' }}>
              <Link href={`${prefix}/contact`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-transform hover:scale-[1.03]"
                style={{ fontSize: '1rem', fontWeight: 600, padding: '15px 22px', background: '#7B6EF6', color: '#fff' }}>
                {start}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href={`${prefix}/work`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-colors hover:bg-white/10"
                style={{ fontSize: '1rem', fontWeight: 500, padding: '15px 22px', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
                {h.btn2}
              </Link>
            </div>
          </div>

          {/* Desktop: short copy bottom-right, like haliviq.app */}
          <p className="hidden lg:block max-w-sm text-right fade-up" style={{ animationDelay: '0.25s', fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            {h.sub}
          </p>
        </div>

        {/* Stats strip under the hero */}
        <div className="border-t border-white/10" style={{ background: 'rgba(5,3,16,0.6)', backdropFilter: 'blur(16px)' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-6">
            {h.statsN.map((n, i) => (
              <div key={i} className="text-center">
                <span className="stat-num" style={{ color: '#fff', fontSize: '1.35rem' }}>{n}</span>
                <span className="ml-2 text-xs" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>{h.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
