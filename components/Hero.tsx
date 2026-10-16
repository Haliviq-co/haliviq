'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

export default function Hero({ lang, tr }: Props) {
  const h = tr.hero
  const prefix = `/${lang}`

  return (
    <section className="relative overflow-hidden" style={{minHeight:'100vh', background:'#050310'}}>
      {/* Purple dune landscape background — looping muted video (about 80 KB; the old GIF was 4.7 MB). The JPG poster shows instantly. */}
      <video autoPlay muted loop playsInline preload="auto" poster="/images/hero/dune-bg.jpg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover" style={{zIndex:0}}>
        <source src="/images/hero/dune-bg.webm" type="video/webm"/>
        <source src="/images/hero/dune-bg.mp4" type="video/mp4"/>
      </video>
      {/* Light mode: translucent white veil over the dunes so the hero reads as a light surface */}
      <div className="hero-veil absolute inset-0" style={{zIndex:1}}/>
      {/* Soft top-to-bottom overlay for nav + text legibility (dark mode) */}
      <div className="hero-dark-overlay absolute inset-0" style={{background:'linear-gradient(180deg, rgba(5,3,16,0.55) 0%, rgba(5,3,16,0.15) 30%, rgba(5,3,16,0.1) 55%, rgba(5,3,16,0.65) 100%)', zIndex:2}}/>

      <div className="relative flex flex-col" style={{zIndex:3, minHeight:'100vh'}}>
        <div className="flex-1 flex items-center justify-center pt-28 pb-10 lg:pt-24">
          <div className="max-w-5xl mx-auto px-4 lg:px-10 text-center">
            {/* Tagline — thin, wide letter-spacing, brand mark */}
            <p className="fade-up" style={{animationDelay:'0s', fontFamily:'var(--font-main)', fontWeight:400, fontSize:'clamp(0.65rem,1.1vw,0.85rem)', letterSpacing:'clamp(0.12em,0.9vw,0.35em)', lineHeight:1.8, color:'rgb(var(--fg) / 0.8)', textTransform:'uppercase', marginBottom:'1.75rem'}}>
              {lang === 'th' ? 'ความคิดของคน สู่อนาคตที่ฉลาดขึ้น' : 'Human Ideas. Intelligent Future.'}
            </p>

            <h1 className="t-display leading-relaxed text-[clamp(2.75rem,6vw,5.5rem)] mb-6 fade-up" style={{animationDelay:'0.1s', color:'var(--ink)'}}>
              {h.h1a} <span style={{background:'linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{h.h1b}</span> {h.h1c}
            </h1>

            <p className="t-body max-w-xl mx-auto mb-10 fade-up" style={{animationDelay:'0.2s', fontSize:'1.05rem', color: 'rgb(var(--fg) / 0.85)', fontWeight:400}}>
              {h.sub}
            </p>

            <div className="flex justify-center fade-up" style={{animationDelay:'0.3s'}}>
              <Link href={`${prefix}/work`}
                className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                style={{fontSize:'1rem', fontWeight:500, padding:'14px 30px', background:'#2B1764', color:'#fff'}}>
                {h.btn2}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v9M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Wordmark — sits low, glowing over the dune valley like the brand key art */}
        <div className="flex justify-center fade-up pb-10" style={{animationDelay:'0.4s'}}>
          <img src="/haliviq-logo-light.svg" alt="Haliviq"
            className="logo-for-dark hero-wordmark w-auto opacity-90" style={{height:'clamp(24px,4vw,40px)'}}/>
          <img src="/haliviq-logo.svg" alt="" aria-hidden="true"
            className="logo-for-light hero-wordmark w-auto opacity-90" style={{height:'clamp(24px,4vw,40px)'}}/>
        </div>

        {/* Client logo strip — pinned to the bottom edge of the hero, like OOZOU */}
        <div className="border-t border-[color:rgb(var(--fg)/0.1)]" style={{background:'color-mix(in srgb, var(--bg) 55%, transparent)', backdropFilter:'blur(16px)'}}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-7">
            {h.statsN.map((n, i) => (
              <div key={i} className="text-center">
                <span className="stat-num" style={{color:'var(--ink)', fontSize:'1.35rem'}}>{n}</span>
                <span className="ml-2 text-xs" style={{fontWeight:400, color: 'rgb(var(--fg) / 0.85)'}}>{h.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
