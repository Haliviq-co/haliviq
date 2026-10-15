'use client'
import Link from 'next/link'
import TypedCode from './TypedCode'
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
                {i === 0 ? (
                  /* ── Strategy: roadmap lanes + north-star trend ── */
                  <div
                    className="theme-dark relative rounded-2xl p-5"
                    style={{
                      background: CANVAS_BG,
                      border: '1px solid rgb(var(--fg) / 0.08)',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.07) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px]" style={{ letterSpacing: '0.2em', color: 'rgb(var(--fg) / 0.6)' }}>{lang === 'en' ? 'ROADMAP / 2026' : 'แผนงาน / 2026'}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(123,110,246,0.18)', color: '#B8A9FA' }}>{lang === 'en' ? 'Prioritised' : 'จัดลำดับแล้ว'}</span>
                    </div>
                    <div className="rounded-xl p-3" style={{ background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.08)' }}>
                      <div className="grid grid-cols-4 gap-1 mb-2">
                        {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                          <span key={q} className="text-[9px] text-center" style={{ letterSpacing: '0.12em', color: 'rgb(var(--fg) / 0.4)' }}>{q}</span>
                        ))}
                      </div>
                      {[
                        { l: lang === 'en' ? 'Discovery' : 'ค้นหาโจทย์', from: 0, to: 1.4, c: '#7B6EF6' },
                        { l: lang === 'en' ? 'MVP' : 'ต้นแบบ', from: 0.8, to: 2.4, c: '#B8A9FA' },
                        { l: lang === 'en' ? 'Launch' : 'เปิดตัว', from: 2, to: 3.2, c: '#53C3D7' },
                        { l: lang === 'en' ? 'Scale' : 'ขยาย', from: 2.8, to: 4, c: '#F5D76E' },
                      ].map((r, ri) => (
                        <div key={r.l} className="relative h-6 mb-1.5 rounded-md" style={{ background: 'rgb(var(--fg) / 0.04)' }}>
                          <div
                            className="absolute top-0 bottom-0 rounded-md flex items-center px-2 strat-bar"
                            style={{ left: `${(r.from / 4) * 100}%`, width: `${((r.to - r.from) / 4) * 100}%`, background: r.c, opacity: 0.9, animationDelay: `${ri * 0.35}s` }}
                          >
                            <span className="text-[10px] whitespace-nowrap" style={{ color: '#15112A', fontWeight: 600 }}>{r.l}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-3 rounded-xl p-3" style={{ background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.08)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px]" style={{ letterSpacing: '0.12em', color: 'rgb(var(--fg) / 0.45)' }}>NORTH STAR METRIC</span>
                        <span className="text-[10px]" style={{ color: 'var(--lime)' }}>↗</span>
                      </div>
                      <svg viewBox="0 0 200 54" className="w-full" style={{ height: 64 }}>
                        <defs>
                          <linearGradient id="strat-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7B6EF6" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#7B6EF6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path className="strat-area" d="M0 46 L28 40 L56 42 L84 30 L112 32 L140 18 L168 14 L200 6 L200 54 L0 54 Z" fill="url(#strat-fill)" />
                        <path id="strat-line" className="strat-line" pathLength={1} d="M0 46 L28 40 L56 42 L84 30 L112 32 L140 18 L168 14 L200 6" fill="none" stroke="#B8A9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle className="strat-dot" r="3.5" fill="#53C3D7">
                          <animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.55;1">
                            <mpath href="#strat-line" />
                          </animateMotion>
                        </circle>
                      </svg>
                    </div>
                  </div>
                ) : i === 1 ? (
                  /* ── Design: UX flow (wireframes) on top, polished UI below ── */
                  <div
                    className="theme-dark relative rounded-2xl p-5"
                    style={{
                      background: CANVAS_BG,
                      border: '1px solid rgb(var(--fg) / 0.08)',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.07) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px]" style={{ letterSpacing: '0.2em', color: 'rgb(var(--fg) / 0.6)' }}>UX FLOW</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(83,195,215,0.14)', color: '#53C3D7' }}>{lang === 'en' ? 'Tested with users' : 'ทดสอบกับผู้ใช้จริง'}</span>
                    </div>
                    {/* wireframe row */}
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((n) => (
                        <div key={n} className="flex items-center gap-1.5 flex-1">
                          <div className="flex-1 rounded-lg p-2" style={{ background: CARD_BG, border: '1px dashed rgb(var(--fg) / 0.22)', height: 74 }}>
                            <div className="h-1.5 rounded-full mb-1.5" style={{ width: '70%', background: 'rgb(var(--fg) / 0.25)' }} />
                            <div className="h-6 rounded-md mb-1.5" style={{ background: 'rgb(var(--fg) / 0.07)' }} />
                            <div className="h-1.5 rounded-full" style={{ width: n === 2 ? '100%' : '55%', background: n === 2 ? '#7B6EF6' : 'rgb(var(--fg) / 0.15)' }} />
                          </div>
                          {n < 2 && (
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0"><path d="M1 5h11M8 1l4 4-4 4" stroke="#B8A9FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* UI card */}
                    <div className="flex items-center justify-between mt-4 mb-2">
                      <span className="text-[11px]" style={{ letterSpacing: '0.2em', color: 'rgb(var(--fg) / 0.6)' }}>UI</span>
                      <div className="flex items-center gap-1.5">
                        {SWATCHES.map((c, ci) => (<span key={ci} className="w-3 h-3 rounded-full" style={{ background: c }} />))}
                      </div>
                    </div>
                    <div className="relative rounded-xl p-4" style={{ background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.1)' }}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-[15px] leading-tight" style={{ color: 'var(--ink)', fontWeight: 600 }}>{lang === 'en' ? 'Welcome back' : 'ยินดีต้อนรับกลับมา'}</p>
                          <div className="h-1.5 rounded-full mt-1.5" style={{ width: 110, background: 'rgb(var(--fg) / 0.18)' }} />
                        </div>
                        <span className="w-9 h-9 rounded-full" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)' }} />
                      </div>
                      <div className="rounded-lg px-3 py-2.5 mb-2.5 flex items-center gap-2" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.1)' }}>
                        <span className="w-3 h-3 rounded-full" style={{ border: '1.5px solid rgb(var(--fg) / 0.4)' }} />
                        <span className="text-[11px]" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{lang === 'en' ? 'Search' : 'ค้นหา'}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 rounded-lg py-2 text-center text-[11px]" style={{ background: 'linear-gradient(135deg,#7B6EF6,#5A4ED4)', color: '#fff', fontWeight: 600, boxShadow: '0 6px 16px rgba(90,78,212,0.4)' }}>{lang === 'en' ? 'Get started' : 'เริ่มใช้งาน'}</div>
                        <div className="flex-1 rounded-lg py-2 text-center text-[11px]" style={{ border: '1px solid rgb(var(--fg) / 0.2)', color: 'rgb(var(--fg) / 0.8)' }}>{lang === 'en' ? 'Learn more' : 'ดูเพิ่ม'}</div>
                      </div>
                      <div className="absolute" style={{ right: '16%', bottom: '10px', animation: 'cursorLoop 5s ease-in-out infinite' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}><path d="M2 1l11 6.5-4.8 1.3L6.5 13 2 1z" fill="#fff" /></svg>
                      </div>
                    </div>
                    <div className="theme-dark absolute -bottom-4 -left-3 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: CARD_BG, border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.35)' }}>
                      <span className="text-base" style={{ fontWeight: 700, color: 'var(--ink)' }}>Aa</span>
                      <div className="flex flex-col gap-1"><div className="h-1 w-8 rounded-full" style={{ background: 'rgb(var(--fg) / 0.22)' }} /><div className="h-1 w-5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.14)' }} /></div>
                    </div>
                  </div>
                ) : i === 2 ? (
                  /* ── Engineering: code editor + CI/CD pipeline + platforms ── */
                  <div
                    className="theme-dark relative rounded-2xl p-5"
                    style={{
                      background: '#15112A',
                      backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.08) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      animation: 'floatY 5s ease-in-out infinite',
                    }}
                  >
                    <div className="rounded-xl overflow-hidden" style={{ background: '#1C1836', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b" style={{ borderColor: 'rgb(var(--fg) / 0.08)' }}>
                        <span className="w-2 h-2 rounded-full" style={{ background: '#FF6B6B', opacity: 0.8 }} />
                        <span className="w-2 h-2 rounded-full" style={{ background: '#F5D76E', opacity: 0.8 }} />
                        <span className="w-2 h-2 rounded-full" style={{ background: '#5AD18F', opacity: 0.8 }} />
                        <span className="ml-2 text-[10px]" style={{ letterSpacing: '0.1em', color: 'rgb(var(--fg) / 0.5)', fontFamily: 'monospace' }}>api/orders.ts</span>
                      </div>
                      <div className="px-3.5 py-3 text-[11px] leading-[1.7]" style={{ fontFamily: 'monospace', color: 'rgb(var(--fg) / 0.8)' }}>
                        <TypedCode />
                      </div>
                    </div>
                    {/* CI/CD pipeline */}
                    <div className="mt-3 flex items-center gap-1.5">
                      {[
                        { l: 'Build', st: 'ok' },
                        { l: 'Test', st: 'ok' },
                        { l: 'Deploy', st: 'run' },
                      ].map((st, n) => (
                        <div key={st.l} className="flex items-center gap-1.5 flex-1">
                          <div className="flex-1 flex items-center gap-1.5 rounded-lg px-2.5 py-2" style={{ background: '#1C1836', border: `1px solid ${st.st === 'run' ? '#F0B429' : 'rgb(var(--fg) / 0.1)'}`, animation: st.st === 'run' ? 'tooltipPulse 2.5s ease-in-out infinite' : undefined }}>
                            {st.st === 'ok' ? (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="#5AD18F" fillOpacity="0.2" /><path d="M3.5 6.2l1.7 1.7 3.3-3.6" stroke="#5AD18F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            ) : (
                              <span className="w-3 h-3 rounded-full" style={{ border: '2px solid #F0B429', borderTopColor: 'transparent' }} />
                            )}
                            <span className="text-[10px]" style={{ color: 'rgb(var(--fg) / 0.85)', fontWeight: 500 }}>{st.l}</span>
                          </div>
                          {n < 2 && <span className="w-2 h-px shrink-0" style={{ background: 'rgb(var(--fg) / 0.3)' }} />}
                        </div>
                      ))}
                    </div>
                    {/* platforms */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {['iOS', 'Android', 'Web', 'API'].map((pl, n) => (
                        <span key={pl} className="text-[10px] px-2.5 py-1 rounded-full" style={{ background: ['rgba(123,110,246,0.18)', 'rgba(90,209,143,0.14)', 'rgba(83,195,215,0.14)', 'rgba(245,215,110,0.14)'][n], color: ['#B8A9FA', '#5AD18F', '#53C3D7', '#F5D76E'][n], fontWeight: 500 }}>{pl}</span>
                      ))}
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
                              (li === 2 ? [0, 1] : [0, 1, 2, 3]).map((nj) => (
                                <line
                                  key={`${li}-${ni}-${nj}`}
                                  x1={20 + li * 40} y1={12 + ni * 33}
                                  x2={li === 2 ? 130 : 20 + (li + 1) * 40} y2={li === 2 ? 30 + nj * 50 : 12 + nj * 33}
                                  stroke="rgba(165,119,253,0.22)" strokeWidth="0.6"
                                />
                              ))
                            )
                          )}
                          {/* signals travelling through the network, forward and back */}
                          {[
                            { p: [0, 2, 1, 0], c: '#53C3D7', d: 0 },
                            { p: [3, 1, 3, 1], c: '#B8A9FA', d: 0.7 },
                            { p: [1, 0, 2, 1], c: '#53C3D7', d: 1.4 },
                            { p: [2, 3, 0, 0], c: '#F5D76E', d: 2.1 },
                            { p: [0, 1, 3, 1], c: '#B8A9FA', d: 2.8 },
                          ].map((sg, k) => {
                            const y = [12 + sg.p[0] * 33, 12 + sg.p[1] * 33, 12 + sg.p[2] * 33, 30 + sg.p[3] * 50]
                            return (
                              <circle key={`sig-${k}`} r="2.6" fill={sg.c} opacity="0">
                                <animateMotion
                                  dur="4.2s" begin={`${sg.d}s`} repeatCount="indefinite" calcMode="linear"
                                  keyPoints="0;1;0" keyTimes="0;0.5;1"
                                  path={`M20 ${y[0]} L60 ${y[1]} L100 ${y[2]} L130 ${y[3]}`}
                                />
                                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="4.2s" begin={`${sg.d}s`} repeatCount="indefinite" />
                              </circle>
                            )
                          })}
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
                            <circle key={`n3-${ni}`} cx={130} cy={30 + (ni - 1) * 50} r={3.5} fill="var(--lime)" opacity={0.85}>
                              <animate attributeName="r" values="3.5;5;3.5" dur="2.1s" begin={`${ni * 0.5}s`} repeatCount="indefinite" />
                            </circle>
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
