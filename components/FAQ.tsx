'use client'
import { useState } from 'react'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr?: T; items?: { q: string; a: string }[]; h2?: string; subtitle?: string; gradientHeading?: boolean }

export default function FAQ({ lang, tr, items: itemsProp, h2, subtitle, gradientHeading }: Props) {
  const f = ((tr as any)?.faq || {}) as { h2?: string; subtitle?: string; items?: { q: string; a: string }[] }
  const items = (itemsProp || f.items || []) as { q: string; a: string }[]
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'var(--bg-1)' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', right: '-10%', width: '50%', aspectRatio: '1/1',
          background: 'radial-gradient(circle, rgba(123,110,246,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-10">
        <h2
          className="t-display mb-3"
          style={{
            color: 'var(--ink)',
            fontSize: 'clamp(2.25rem,4.5vw,3.5rem)',
            ...(gradientHeading
              ? {
                  background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  paddingBottom: '0.15em',
                }
              : {}),
          }}
        >
          {h2 ?? f.h2}
        </h2>
        <p
          className="t-display mb-14 lg:mb-16"
          style={{
            fontSize: '1.15rem',
            fontWeight: 500,
            background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {subtitle ?? f.subtitle}
        </p>

        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.12)' }}>
          {items.map((item, i) => {
            const isOpen = active === i
            return (
              <div key={item.q} style={{ borderBottom: '1px solid rgb(var(--fg) / 0.12)' }}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left"
                >
                  <span
                    className="t-display leading-snug transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.05rem,2vw,1.4rem)',
                      color: isOpen ? undefined : 'rgb(var(--fg) / 0.9)',
                      ...(isOpen
                        ? {
                            background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : {}),
                    }}
                  >
                    {item.q}
                  </span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    className="flex-shrink-0"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform .3s ease',
                    }}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke={isOpen ? 'var(--lime)' : 'rgb(var(--fg) / 0.45)'}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .35s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      className="t-body"
                      style={{
                        color: 'rgb(var(--fg) / 0.85)',
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        maxWidth: 720,
                        paddingBottom: 28,
                        paddingTop: 2,
                      }}
                    >
                      {item.a}
                    </p>
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
