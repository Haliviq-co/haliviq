'use client'
import { useState } from 'react'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

export default function WhatWeDo({ lang, tr }: Props) {
  const w = (tr as any).whatWeDo
  const items = w.items as { heading: string; desc: string }[]
  const [active, setActive] = useState(0)

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'var(--bg-1)' }}
    >
      {/* subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* soft brand glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          right: '-10%',
          width: '55%',
          aspectRatio: '1/1',
          background:
            'radial-gradient(circle, rgba(123,110,246,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-10">
        <h2
          className="t-display mb-14 lg:mb-20"
          style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}
        >
          {w.h2}
        </h2>

        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.12)' }}>
          {items.map((item, i) => {
            const isActive = active === i
            return (
              <div
                key={item.heading}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="cursor-pointer"
                style={{
                  borderBottom: '1px solid rgb(var(--fg) / 0.12)',
                  transition: 'border-color .35s ease',
                  borderTopColor: isActive
                    ? 'transparent'
                    : undefined,
                }}
              >
                {/* gradient highlight line, shown on the active row's top edge */}
                <div
                  style={{
                    height: 2,
                    marginTop: -1,
                    background: isActive
                      ? 'linear-gradient(90deg, var(--purple) 0%, var(--lime) 100%)'
                      : 'transparent',
                    transition: 'background .35s ease',
                  }}
                />
                <div className="flex items-center justify-between gap-6 py-6 lg:py-7">
                  <h3
                    className="t-display leading-snug"
                    style={{
                      fontSize: 'clamp(1.4rem,3vw,2.25rem)',
                      transition: 'color .35s ease, background .35s ease',
                      ...(isActive
                        ? {
                            background:
                              'linear-gradient(90deg, var(--purple) 0%, var(--lime-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : { color: 'rgb(var(--fg) / 0.88)' }),
                    }}
                  >
                    {item.heading}
                  </h3>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                    style={{
                      transform: isActive
                        ? 'rotate(45deg)'
                        : 'rotate(0deg)',
                      transition: 'transform .35s ease, stroke .35s ease',
                    }}
                  >
                    <path
                      d="M5 19L19 5M19 5H9M19 5V15"
                      stroke={isActive ? 'var(--lime)' : 'rgb(var(--fg) / 0.4)'}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* expanding description */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    transition: 'grid-template-rows .4s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      className="t-body"
                      style={{
                        color: 'rgb(var(--fg) / 0.85)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        maxWidth: 760,
                        paddingBottom: 26,
                        paddingTop: 2,
                      }}
                    >
                      {item.desc}
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
