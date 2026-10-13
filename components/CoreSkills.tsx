'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

const accents = ['#7B6EF6', '#5A4ED4', '#7B6EF6', '#5A4ED4']
const SWATCHES = ['#F2A6C7', '#B8A9FA', '#F5D76E', '#F7F4EF']
const SECTION_BG = 'var(--bg-1)'
const CARD_BG = '#171232'
const CANVAS_BG = '#15112A'

export default function CoreSkills({ lang, tr }: Props) {
  const cs = (tr as any).coreSkills
  const categories = cs.categories
  const prefix = `/${lang}`

  return (
    <section style={{ background: SECTION_BG }} className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mb-20 fade-up">
        <h2 className="t-display text-[clamp(2.25rem,4.5vw,3.5rem)] mb-3" style={{ color: 'var(--ink)' }}>{cs.h2}</h2>
        <p className="mb-6" style={{ fontFamily: 'var(--font-main)', fontWeight: 500, fontSize: '1.15rem', color: 'var(--accent-2)' }}>{cs.subtitle}</p>
        <p className="max-w-2xl" style={{ fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.75, color: 'rgb(var(--fg) / 0.75)' }}>{lang === 'th' ? String(cs.desc).split(' ').map((w: string, i: number, a: string[]) => (<span key={i}><span className="inline-block">{w}</span>{i < a.length - 1 ? ' ' : ''}</span>)) : cs.desc}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-20 lg:gap-24">
        {categories.map((g: any, i: number) => {
          const accent = accents[i % accents.length]
          const reverse = i % 2 === 1
          const tags = g.tags as string[]

          return (
            <div key={g.heading} className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-12 fade-up ${reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Illustration panel */}
              <div className="w-full lg:w-[400px] lg:shrink-0 pb-7">
                {i === 2 ? (
                  /* ── Engineering: dark sprint board mockup ── */
                  <div
                    className="theme-dark relative rounded-2xl p-5"
                    style={{
                      background: '#15112A',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.08) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden" style={{ background: '#1C1836', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                      <div className="px-4 py-3 border-b" style={{ borderColor: 'rgb(var(--fg) / 0.08)' }}>
                        <span className="text-[11px]" style={{ letterSpacing: '0.2em', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}>SPRINT / 024</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 p-3">
                        {/* To Do */}
                        <div className="rounded-lg p-2.5" style={{ background: 'rgb(var(--fg) / 0.03)' }}>
                          <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.35)' }} />
                            <span className="text-[9px]" style={{ letterSpacing: '0.1em', color: 'rgb(var(--fg) / 0.45)' }}>TO DO</span>
                          </div>
                          <div className="rounded-md p-2" style={{ background: 'rgb(var(--fg) / 0.04)' }}>
                            <div className="h-1 rounded-full mb-1.5" style={{ width: '80%', background: 'rgb(var(--fg) / 0.14)' }} />
                            <div className="h-1 rounded-full" style={{ width: '55%', background: 'rgb(var(--fg) / 0.1)' }} />
                          </div>
                        </div>
                        {/* In Progress */}
                        <div className="rounded-lg p-2.5" style={{ background: 'rgb(var(--fg) / 0.03)' }}>
                          <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F0B429' }} />
                            <span className="text-[9px]" style={{ letterSpacing: '0.1em', color: 'rgb(var(--fg) / 0.45)' }}>IN PROGRESS</span>
                          </div>
                          <div
                            className="rounded-md p-2"
                            style={{ background: 'rgba(240,180,41,0.08)', border: '1px solid #F0B429', animation: 'tooltipPulse 2.5s ease-in-out infinite' }}
                          >
                            <div className="h-1 rounded-full mb-2" style={{ width: '70%', background: '#F0B429' }} />
                            <p className="text-[11px] mb-2" style={{ color: 'var(--ink)', fontWeight: 500 }}>Ship feature</p>
                            <div className="h-1 rounded-full mb-1.5" style={{ width: '85%', background: 'rgb(var(--fg) / 0.14)' }} />
                            <div className="h-1 rounded-full" style={{ width: '60%', background: 'rgb(var(--fg) / 0.1)' }} />
                          </div>
                        </div>
                        {/* Done */}
                        <div className="rounded-lg p-2.5" style={{ background: 'rgb(var(--fg) / 0.03)' }}>
                          <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
                            <span className="text-[9px]" style={{ letterSpacing: '0.1em', color: 'rgb(var(--fg) / 0.45)' }}>DONE</span>
                          </div>
                          <div className="rounded-md p-2" style={{ background: 'rgb(var(--fg) / 0.04)' }}>
                            <div className="h-1 rounded-full mb-1.5" style={{ width: '75%', background: 'rgb(var(--fg) / 0.14)' }} />
                            <div className="h-1 rounded-full" style={{ width: '45%', background: 'rgb(var(--fg) / 0.1)' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : i === 3 ? (
                  /* ── AI & Innovation: neural network + copilot chat mockup ── */
                  <div
                    className="relative rounded-2xl p-5"
                    style={{
                      background: '#0D0A1A',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.07) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    <div className="flex gap-3">
                      {/* Neural network panel */}
                      <div className="theme-dark flex-1 rounded-xl p-3" style={{ background: '#171232', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                        <span className="text-[9px]" style={{ letterSpacing: '0.15em', color: 'rgb(var(--fg) / 0.45)' }}>NEURAL NETWORK</span>
                        <svg viewBox="0 0 140 130" className="w-full mt-2" style={{ height: 150 }}>
                          {[0, 1, 2].map((li) =>
                            [0, 1, 2, 3].map((ni) =>
                              [0, 1, 2, 3].map((nj) => (
                                <line
                                  key={`${li}-${ni}-${nj}`}
                                  x1={20 + li * 40} y1={12 + ni * 33}
                                  x2={20 + (li + 1) * 40} y2={12 + nj * 33}
                                  stroke="rgba(165,119,253,0.18)" strokeWidth="0.6"
                                />
                              ))
                            )
                          )}
                          {[0, 1, 2, 3].map((ni) => (
                            <circle key={`n0-${ni}`} cx={20} cy={12 + ni * 33} r={4} fill="var(--purple-light)" opacity={0.9}>
                              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${ni * 0.3}s`} repeatCount="indefinite" />
                            </circle>
                          ))}
                          {[0, 1, 2, 3].map((ni) => (
                            <circle key={`n1-${ni}`} cx={60} cy={12 + ni * 33} r={3.5} fill="#B8A9FA" opacity={0.75} />
                          ))}
                          {[0, 1, 2, 3].map((ni) => (
                            <circle key={`n2-${ni}`} cx={100} cy={12 + ni * 33} r={3.5} fill="#B8A9FA" opacity={0.75} />
                          ))}
                          {[1, 2].map((ni) => (
                            <circle key={`n3-${ni}`} cx={130} cy={30 + (ni - 1) * 50} r={3.5} fill="var(--lime)" opacity={0.85} />
                          ))}
                        </svg>
                      </div>

                      {/* Copilot chat panel */}
                      <div className="theme-dark flex-1 rounded-xl p-3 flex flex-col" style={{ background: '#171232', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                        <div className="flex items-center gap-1.5 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
                          <span className="text-[9px]" style={{ letterSpacing: '0.12em', color: 'rgb(var(--fg) / 0.85)' }}>HALIVIQ / COPILOT</span>
                        </div>
                        <div
                          className="rounded-lg px-3 py-2 mb-3 self-start"
                          style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.06)' }}
                        >
                          <span className="text-[11px]" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>Can you check Q4 numbers?</span>
                        </div>
                        <div
                          className="rounded-lg px-3 py-2.5"
                          style={{ background: 'rgba(123,110,246,0.14)', border: '1px solid rgba(165,119,253,0.4)' }}
                        >
                          <span className="text-[11px]" style={{ color: 'var(--ink)', fontFamily: 'monospace' }}>
                            Re
                            <span style={{ animation: 'tooltipPulse 1s step-end infinite' }}>|</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="theme-dark relative rounded-2xl p-4"
                    style={{
                      background: CANVAS_BG,
                      border: '1px solid rgb(var(--fg) / 0.08)',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.07) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    {/* window bar */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)' }} />
                      <span className="ml-3 text-[11px]" style={{ letterSpacing: '0.15em', color: 'rgb(var(--fg) / 0.45)', fontWeight: 400 }}>
                        {g.heading.toUpperCase()} CANVAS
                      </span>
                    </div>

                    {/* canvas frame — overflow visible so the swatch/tooltip/Aa chip can peek outside it */}
                    <div className="relative rounded-xl" style={{ height: 290, background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.08)' }}>
                      {/* title bars */}
                      <div className="px-5 pt-5">
                        <div className="h-2.5 rounded-full mb-2" style={{ width: '62%', background: 'rgb(var(--fg) / 0.28)' }} />
                        <div className="h-2 rounded-full" style={{ width: '38%', background: 'rgb(var(--fg) / 0.14)' }} />
                      </div>

                      {/* content blocks: icon + text lines */}
                      <div className="flex gap-3 px-5 mt-4">
                        {[accent, 'var(--purple-light)'].map((c, bi) => (
                          <div key={bi} className="flex-1 flex items-start gap-2.5 rounded-lg p-3" style={{ background: 'rgb(var(--fg) / 0.04)' }}>
                            <span className="w-7 h-7 rounded-md shrink-0" style={{ background: c, opacity: 0.85 }} />
                            <div className="flex flex-col gap-1.5 flex-1 pt-0.5">
                              <div className="h-1.5 rounded-full" style={{ width: '90%', background: 'rgb(var(--fg) / 0.22)' }} />
                              <div className="h-1.5 rounded-full" style={{ width: '75%', background: 'rgb(var(--fg) / 0.14)' }} />
                              <div className="h-1.5 rounded-full" style={{ width: '55%', background: 'rgb(var(--fg) / 0.14)' }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* wave illustration, clipped to bottom rounded corners */}
                      <div className="absolute left-0 right-0 bottom-0 rounded-b-xl overflow-hidden" style={{ height: '44%' }}>
                        <div
                          className="absolute"
                          style={{
                            inset: '-40%',
                            background: `radial-gradient(circle at 30% 45%, ${accent}66, transparent 60%), radial-gradient(circle at 72% 55%, var(--lime) 0%, transparent 55%)`,
                            animation: 'blobPulse 6s ease-in-out infinite',
                            filter: 'blur(10px)',
                            opacity: 0.55,
                          }}
                        />
                      </div>

                      {/* floating swatch tray — peeks outside the top-right corner */}
                      <div
                        className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-2 rounded-xl"
                        style={{ background: CARD_BG, animation: 'floatY 4s ease-in-out infinite', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.35)' }}
                      >
                        {SWATCHES.map((c, ci) => (
                          <span key={ci} className="w-3.5 h-3.5 rounded-full" style={{ background: c }} />
                        ))}
                      </div>

                      {/* animated cursor + tooltip, over the wave, peeking past the bottom-right edge */}
                      <div className="absolute" style={{ right: '10%', bottom: '-10px', animation: 'cursorLoop 5s ease-in-out infinite' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}>
                          <path d="M2 1l11 6.5-4.8 1.3L6.5 13 2 1z" fill="#fff" />
                        </svg>
                        <div
                          className="mt-1 ml-3 px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap"
                          style={{ background: accent, color: 'var(--ink)', fontWeight: 600, animation: 'tooltipPulse 2.5s ease-in-out infinite', boxShadow: '0 4px 12px rgba(0,0,0,0.35)' }}
                        >
                          {lang === 'en' ? 'Create.' : 'สร้าง.'}
                        </div>
                      </div>

                      {/* Aa typography chip — peeks outside the bottom-left corner */}
                      <div
                        className="theme-dark absolute -bottom-5 -left-4 flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{ background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.35)' }}
                      >
                        <span className="text-base" style={{ fontWeight: 700, color: 'var(--ink)' }}>Aa</span>
                        <div className="flex flex-col gap-1">
                          <div className="h-1 w-8 rounded-full" style={{ background: 'rgb(var(--fg) / 0.22)' }} />
                          <div className="h-1 w-5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.14)' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="flex-1 w-full pt-1">
                <h3 className="t-display text-[clamp(1.4rem,2.2vw,1.85rem)] mb-3" style={{ color: 'var(--ink)' }}>{g.heading}</h3>
                <p className="mb-4 max-w-xl" style={{ fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.7, color: 'rgb(var(--fg) / 0.75)' }}>
                  {g.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4 max-w-xl">
                  {tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full"
                      style={{ fontSize: '0.75rem', background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.1)', color: 'rgb(var(--fg) / 0.8)', fontWeight: 400 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`${prefix}/services`}
                  className="inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400, fontSize: '0.9rem' }}
                >
                  {cs.exploreLabel} {g.heading}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
