'use client'
import { useState } from 'react'

export type SvcItem = { title: string; desc: string; icon: string; when: string[] }

export default function BrandingServices({ items, heading, intro, whenLabel }: {
  items: SvcItem[]; heading: string; intro: string; whenLabel: string
}) {
  const [active, setActive] = useState(0)
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'var(--bg-1)' }}>
      <div
        className="absolute pointer-events-none"
        style={{ top: '-20%', right: '-10%', width: '55%', aspectRatio: '1/1', background: 'radial-gradient(circle, rgba(123,110,246,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div className="relative max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>{heading}</h2>
        <p className="mb-14 lg:mb-16 max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgb(var(--fg) / 0.75)' }}>{intro}</p>

        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.12)' }}>
          {items.map((item, i) => {
            const on = active === i
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="cursor-pointer"
                style={{ borderBottom: '1px solid rgb(var(--fg) / 0.12)', borderTopColor: on ? 'transparent' : undefined }}
              >
                <div style={{ height: 2, marginTop: -1, background: on ? 'linear-gradient(90deg, var(--purple) 0%, var(--lime) 100%)' : 'transparent', transition: 'background .35s ease' }} />
                <div className="flex items-center justify-between gap-6 py-6 lg:py-7">
                  <h3
                    className="t-display leading-snug"
                    style={{
                      fontSize: 'clamp(1.4rem,3vw,2.25rem)',
                      transition: 'color .35s ease',
                      ...(on
                        ? { background: 'linear-gradient(90deg, var(--purple) 0%, var(--lime-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                        : { color: 'rgb(var(--fg) / 0.88)' }),
                    }}
                  >
                    {item.title}
                  </h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" style={{ transform: on ? 'rotate(45deg)' : 'none', transition: 'transform .35s ease' }}>
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke={on ? 'var(--lime)' : 'rgb(var(--fg) / 0.4)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .4s ease' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div className="grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-6 lg:gap-14 pb-8" style={{ maxWidth: 960 }}>
                      <p className="t-body" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', lineHeight: 1.75 }}>{item.desc}</p>
                      <div>
                        <p className="t-label mb-2">{whenLabel}</p>
                        <ul className="grid gap-1.5" style={{ color: 'rgb(var(--fg) / 0.85)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                          {item.when.map((w) => (
                            <li key={w} className="flex gap-2"><span aria-hidden="true" style={{ color: 'var(--accent)' }}>–</span><span>{w}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
