import type { Metadata } from 'next'
import type React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { caseStudies, getCaseStudy } from '@/lib/case-studies-data'
import { alt } from '@/lib/seo'
import { getCaseStack } from '@/lib/case-stack'
import { PhoneScreen, BrowserScreen } from '@/components/CaseMock'
import TechGlyph from '@/components/TechGlyph'

// Keep meta descriptions near 155 characters: fill with whole sentences (EN) or cut at a word boundary (TH).
function trimMeta(text: string, max = 158): string {
  if (text.length <= max) return text
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g)
  if (sentences) {
    let out = ''
    for (const s of sentences) {
      if ((out + s).trim().length > max) break
      out += s
    }
    if (out.trim().length >= 100) return out.trim()
  }
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).trim() + '…'
}

// Highlights the opening phrase of a paragraph in light purple to light blue, as in the "job stories" layout.
function Hl({ text }: { text: string }) {
  const m = text.slice(24).search(/[\s.]/)
  const cut = m < 0 ? 0 : 24 + m
  if (!cut) return <>{text}</>
  return (
    <>
      <span style={{ background: 'linear-gradient(90deg, #B9A8FF 0%, #6FD3F5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 500 }}>{text.slice(0, cut)}</span>
      {text.slice(cut)}
    </>
  )
}

// Rough, generic phone mockups used to illustrate an idea. They are not screenshots of the real app.
function Mock({ kind, en, width, style, className }: { kind: 'scan' | 'result' | 'evidence'; en: boolean; width?: number; style?: React.CSSProperties; className?: string }) {
  const blue = '#2E499B'
  const line = (w: string, o = 0.18) => <span className="block h-2 rounded-full" style={{ width: w, background: `rgba(30,40,80,${o})` }} />
  return (
    <div className={`relative ${width ? '' : 'w-[31%] min-w-[118px]'} ${className || ''}`} style={{ width, ...style }}>
      {/* side buttons: action button, volume up/down (left), power (right), as on iPhone 17 Pro */}
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '15%', width: 3, height: '4%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '22%', width: 3, height: '7%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '31%', width: 3, height: '7%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ right: -2.5, top: '26%', width: 3, height: '11%', background: '#3b4666' }} />
      <div className="rounded-[15%/7%] p-[5px]" style={{ background: 'linear-gradient(145deg, #4a5a86 0%, #232b45 45%, #3d4a74 100%)', boxShadow: '0 30px 60px -25px rgb(0 0 0 / 0.65), inset 0 0 0 1px rgb(255 255 255 / 0.18)' }}>
        <div className="rounded-[14%/6.6%] p-[3px]" style={{ background: '#05050a' }}>
      <div className="rounded-[13%/6.2%] overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg,#EEF1FB,#F8F9FD)', aspectRatio: '1206 / 2622', color: '#1c2347' }}>
        <div className="relative flex justify-between items-center px-4 pt-2 text-[8px]" style={{ opacity: 0.85 }}><span>9:41</span><span aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 top-[6px] w-[32%] h-[11px] rounded-full" style={{ background: '#0b0a14' }} /><span>●●●</span></div>
        <div className="text-center text-[10px] py-2" style={{ fontWeight: 600 }}>
          {kind === 'scan' ? (en ? 'Check product' : 'ตรวจสอบสินค้า') : kind === 'result' ? (en ? 'Result' : 'ผลการตรวจ') : (en ? 'Save check' : 'บันทึกผลตรวจ')}
        </div>
        <div className="flex-1 px-3 flex flex-col gap-2">
          {kind === 'scan' && (
            <>
              <div className="relative rounded-xl flex-1 max-h-[55%]" style={{ background: '#1b2140' }}>
                {['top-2 left-2 border-t-2 border-l-2','top-2 right-2 border-t-2 border-r-2','bottom-2 left-2 border-b-2 border-l-2','bottom-2 right-2 border-b-2 border-r-2'].map((c) => <span key={c} className={`absolute w-4 h-4 rounded-sm ${c}`} style={{ borderColor: '#9AB0FF' }} />)}
                <span className="absolute left-4 right-4 top-1/2 h-[2px]" style={{ background: 'linear-gradient(90deg,transparent,#6FD3F5,transparent)' }} />
              </div>
              {line('70%')}{line('45%', 0.12)}
            </>
          )}
          {kind === 'result' && (
            <>
              <div className="flex items-center gap-2 rounded-lg p-2" style={{ background: '#fff', border: '1px solid rgba(30,40,80,0.1)' }}>
                <span className="w-7 h-7 rounded-md" style={{ background: 'rgba(46,73,155,0.2)' }} />
                <div className="flex-1 flex flex-col gap-1.5">{line('80%')}{line('50%', 0.12)}</div>
              </div>
              <div className="rounded-full text-center text-[9px] py-1.5" style={{ background: '#DDF5E5', color: '#1b7a3d', fontWeight: 600 }}>{en ? 'Tax paid' : 'ชำระภาษีแล้ว'}</div>
              <div className="rounded-lg p-2 flex flex-col gap-2" style={{ background: '#fff', border: '1px solid rgba(30,40,80,0.1)' }}>{line('90%')}{line('65%', 0.12)}{line('75%', 0.12)}</div>
            </>
          )}
          {kind === 'evidence' && (
            <>
              <div className="rounded-xl flex-1 max-h-[45%] flex items-center justify-center" style={{ background: 'rgba(46,73,155,0.14)', border: '1px dashed rgba(46,73,155,0.5)' }}>
                <span className="text-[16px]" style={{ color: blue }}>▣</span>
              </div>
              <div className="rounded-lg p-2 flex flex-col gap-2" style={{ background: '#fff', border: '1px solid rgba(30,40,80,0.1)' }}>{line('60%')}{line('85%', 0.12)}</div>
            </>
          )}
        </div>
        <div className="m-3 rounded-lg text-center text-[9px] py-2" style={{ background: blue, color: '#fff', fontWeight: 600 }}>
          {kind === 'scan' ? (en ? 'Scan code' : 'สแกนรหัสสินค้า') : kind === 'result' ? (en ? 'Done' : 'เสร็จสิ้น') : (en ? 'Save' : 'บันทึก')}
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const langs: Lang[] = ['th', 'en']
  return langs.flatMap((lang) => caseStudies.map((c) => ({ lang, slug: c.slug })))
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Promise<Metadata> {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const study = getCaseStudy(params.slug)
  if (!study) return {}
  const c = study[lang]
  const title = `${c.title} | Haliviq`
  const metaDesc = trimMeta(c.desc)
  const siteUrl = `https://haliviq.com/${lang}/case-studies/${study.slug}`
  return {
    title,
    description: metaDesc,
    alternates: alt(siteUrl),
    openGraph: {
      title,
      description: metaDesc,
      images: [c.heroImage],
      url: siteUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDesc,
      images: [c.heroImage],
    },
  }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const tr = t[lang] as any
  const study = getCaseStudy(params.slug)

  if (!study) {
    return (
      <>
        <Navbar lang={lang} tr={tr} transparent />
        <main style={{ background: 'var(--bg)', minHeight: '60vh' }} className="flex items-center justify-center">
          <p style={{ color: 'var(--ink)' }}>Not found</p>
        </main>
        <Footer lang={lang} tr={tr} />
      </>
    )
  }

  const c = study[lang]
  const siteUrl = `https://haliviq.com/${lang}/case-studies/${study.slug}`
  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: c.title,
    description: c.desc,
    image: `https://haliviq.com${c.heroImage}`,
    datePublished: study.year,
    url: siteUrl,
    provider: {
      '@type': 'Organization',
      name: 'Haliviq',
      url: 'https://haliviq.com',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />
      <Navbar lang={lang} tr={tr} transparent />
      <main style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.3]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: -160, right: -120, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgb(123 110 246 / 0.28), transparent 65%)' }} />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-14 pb-16">
            <Link
              href={`/${lang}/case-studies`}
              className="inline-flex items-center gap-2 mb-10 text-sm transition-colors hover:text-[color:var(--ink)]"
              style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400 }}
            >
              <i className="ti ti-arrow-left" style={{ fontSize: 15 }} aria-hidden="true" />
              {c.backLabel}
            </Link>

            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-sm mb-7"
              style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)', fontWeight: 500 }}
            >
              {c.badge}
            </span>

            <h1 className="t-display leading-relaxed text-[clamp(2.25rem,5vw,4rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.title}
            </h1>

            <p className="max-w-3xl mb-10" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.65 }}>
              {c.desc}
            </p>

            <div
              className="inline-flex flex-wrap items-center gap-6 rounded-2xl px-7 py-5"
              style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.1)' }}
            >
              <span className="flex items-center gap-2.5 text-sm" style={{ color: 'rgb(var(--fg) / 0.8)', fontWeight: 400 }}>
                <i className="ti ti-building-store" style={{ fontSize: 17 }} aria-hidden="true" />
                {c.client}
              </span>
              <span className="w-px h-5" style={{ background: 'rgb(var(--fg) / 0.15)' }} />
              <span className="flex items-center gap-2.5 text-sm" style={{ color: 'rgb(var(--fg) / 0.8)', fontWeight: 400 }}>
                <i className="ti ti-clock" style={{ fontSize: 17 }} aria-hidden="true" />
                {study.year} · {c.duration}
              </span>
            </div>
          </div>
        </section>

        {/* About the project + hero image */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-6" style={{ color: 'var(--ink)' }}>
              <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{lang === 'en' ? 'About the project' : 'เกี่ยวกับโปรเจกต์'}
            </h2>
            <p className="max-w-3xl mb-8" style={{ color: 'rgb(var(--fg) / 0.78)', fontWeight: 400, fontSize: 'clamp(1.05rem,1.6vw,1.3rem)', lineHeight: 1.75 }}>
              {c.overview}
            </p>
            <p className="text-sm mb-4" style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400 }}>{c.servicesLabel}</p>
            <div className="flex flex-wrap gap-3 mb-12">
              {c.servicesProvided.map((s, i) => (
                <span
                  key={s}
                  className="px-5 py-2.5 rounded-full text-sm"
                  style={i === 0
                    ? { background: 'linear-gradient(135deg, rgb(123 110 246 / 0.45), rgb(123 110 246 / 0.15))', border: '1px solid rgb(123 110 246 / 0.6)', color: 'var(--ink)', fontWeight: 400 }
                    : { background: 'linear-gradient(150deg, rgb(var(--fg) / 0.08), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.12)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="max-w-md rounded-3xl overflow-hidden" style={{ border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 30px 80px -30px rgb(123 110 246 / 0.5)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.heroImage} alt={c.client} className="w-full h-auto block" />
            </div>
          </div>
        </section>

        {/* The Challenge + Our Solution */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-3" style={{ color: 'var(--ink)' }}>
            <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{lang === 'en' ? 'Challenge & Solution' : 'โจทย์และแนวทาง'}
          </h2>
          <p className="mb-6 max-w-2xl" style={{ color: 'rgb(var(--fg) / 0.6)', fontSize: '1rem', lineHeight: 1.7 }}>
            {lang === 'en' ? 'What the client needed, and how we approached it.' : 'สิ่งที่ลูกค้าต้องการ และวิธีที่เราลงมือแก้'}
          </p>
          <div className="grid md:grid-cols-[minmax(0,280px)_1px_1fr] gap-6 md:gap-10 items-center py-8">
            <div className="flex items-center gap-5">
              <span className="w-20 h-20 rounded-full flex items-center justify-center shrink-0" style={{ background: 'radial-gradient(circle at 30% 25%, rgb(var(--fg) / 0.1), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 0 30px -8px rgb(123 110 246 / 0.5)' }}>
                <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="starGrad1" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#B9A8FF" />
                      <stop offset="1" stopColor="#6FD3F5" />
                    </linearGradient>
                  </defs>
                  <path d="M12 1C12.9 7.3 16.7 11.1 23 12C16.7 12.9 12.9 16.7 12 23C11.1 16.7 7.3 12.9 1 12C7.3 11.1 11.1 7.3 12 1Z" fill="url(#starGrad1)" />
                </svg>
              </span>
              <span className="t-display" style={{ color: 'var(--ink)', fontSize: 'clamp(1.2rem,2vw,1.55rem)', lineHeight: 1.3 }}>{c.challengeHeading}</span>
            </div>
            <span aria-hidden="true" className="hidden md:block self-stretch w-px" style={{ background: 'rgb(var(--fg) / 0.14)' }} />
            <p style={{ color: 'rgb(var(--fg) / 0.78)', fontWeight: 400, fontSize: '1.02rem', lineHeight: 1.8 }}><Hl text={c.challenge} /></p>
          </div>
          <div className="grid md:grid-cols-[minmax(0,280px)_1px_1fr] gap-6 md:gap-10 items-center py-8">
            <div className="flex items-center gap-5">
              <span className="w-20 h-20 rounded-full flex items-center justify-center shrink-0" style={{ background: 'radial-gradient(circle at 30% 25%, rgb(var(--fg) / 0.1), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 0 30px -8px rgb(123 110 246 / 0.5)' }}>
                <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="starGrad2" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#B9A8FF" />
                      <stop offset="1" stopColor="#6FD3F5" />
                    </linearGradient>
                  </defs>
                  <path d="M12 1C12.9 7.3 16.7 11.1 23 12C16.7 12.9 12.9 16.7 12 23C11.1 16.7 7.3 12.9 1 12C7.3 11.1 11.1 7.3 12 1Z" fill="url(#starGrad2)" />
                </svg>
              </span>
              <span className="t-display" style={{ color: 'var(--ink)', fontSize: 'clamp(1.2rem,2vw,1.55rem)', lineHeight: 1.3 }}>{c.solutionHeading}</span>
            </div>
            <span aria-hidden="true" className="hidden md:block self-stretch w-px" style={{ background: 'rgb(var(--fg) / 0.14)' }} />
            <p style={{ color: 'rgb(var(--fg) / 0.78)', fontWeight: 400, fontSize: '1.02rem', lineHeight: 1.8 }}><Hl text={c.solution} /></p>
          </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-10" style={{ color: 'var(--ink)' }}>
              <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{c.approachHeading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {c.approach.map((step, i) => (
                <div key={step.title} className="group relative overflow-hidden rounded-[28px] p-8 flex items-start gap-6 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(150deg, rgb(var(--fg) / 0.07), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: 'inset 0 1px 0 rgb(var(--fg) / 0.06)' }}>
                  <span aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgb(123 110 246 / 0.38), transparent 75%)' }} />
                  <span className="relative t-display leading-none shrink-0" style={{ fontSize: 'clamp(3.4rem,6vw,5.2rem)', fontWeight: 800, background: 'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div className="relative">
                    <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.1rem' }}>{step.title}</p>
                    <p style={{ color: 'rgb(var(--fg) / 0.68)', fontWeight: 400, fontSize: '0.92rem', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UI solutions */}
        {(() => {
          const st = getCaseStack(study.slug)
          if (!st || !st.solutions || !st.solutions.length) return null
          const en = lang === 'en'
          return (
            <section className="pb-16 lg:pb-24">
              <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col gap-20">
                {st.solutions.map((u, i) => (
                  <div key={i} className="relative">
                    <span aria-hidden="true" className="absolute pointer-events-none" style={{ top: -60, right: i % 2 ? 'auto' : -80, left: i % 2 ? -80 : 'auto', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgb(123 110 246 / 0.16), transparent 65%)' }} />
                    <div className={`relative grid gap-10 items-start ${(u.images && u.images.length) ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]' : ''}`}>
                      <div>
                        <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-6" style={{ color: 'var(--ink)' }}>
                          <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{en ? 'UI Solution' : 'โซลูชัน UI'} {String(i + 1).padStart(2, '0')}
                        </h2>
                        <p className="mb-5 max-w-xl" style={{ color: 'var(--ink)', fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', lineHeight: 1.6, fontWeight: 400 }}>{en ? u.problem.en : u.problem.th}</p>
                        {u.list && (
                          <ul className="flex flex-col gap-3 max-w-xl">
                            {(en ? u.list.en : u.list.th).map((b) => (
                              <li key={b} className="flex items-start gap-3" style={{ color: 'rgb(var(--fg) / 0.72)', fontSize: '1rem', lineHeight: 1.65 }}>
                                <span aria-hidden="true" className="star-bullet mt-1 shrink-0" style={{ width: 18, height: 18 }} />{b}
                              </li>
                            ))}
                          </ul>
                        )}
                        {(en ? u.solution.en : u.solution.th) && <p className="max-w-xl" style={{ color: 'rgb(var(--fg) / 0.62)', fontSize: '1rem', lineHeight: 1.75 }}>{en ? u.solution.en : u.solution.th}</p>}
                      </div>
                      {(!u.images || !u.images.length) && u.mock && u.mock.length > 0 && (
                        <div className="relative">
                          <div className="lg:hidden flex items-start justify-center gap-3">
                            {u.mock.slice(0, 3).map((k, ki) => (
                              <div key={k + ki} className="w-full flex justify-center" style={{ marginTop: ki % 2 ? 40 : 0 }}><Mock kind={k} en={en} /></div>
                            ))}
                          </div>
                          <p className="lg:hidden text-center mt-5 text-xs" style={{ color: 'rgb(var(--fg) / 0.45)' }}>{en ? 'Illustration of the idea, not a screenshot' : 'ภาพจำลองเพื่ออธิบายแนวคิด ไม่ใช่หน้าจอจริง'}</p>
                        </div>
                      )}
{u.images && u.images.length > 0 && (
                        <div className="relative flex items-start justify-center gap-4">
                          {u.images.slice(0, 3).map((src, k) => (
                            <div key={src} className="rounded-[34px] p-[7px] w-[30%] min-w-[110px]" style={{ background: '#0b0a14', border: '1px solid rgb(var(--fg) / 0.18)', boxShadow: '0 30px 60px -25px rgb(0 0 0 / 0.6)', marginTop: k % 2 ? 56 : 0 }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={src} alt="" loading="lazy" className="w-full h-auto block rounded-[28px]" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {(!u.images || !u.images.length) && u.mock && u.mock.length > 0 && (
                      <div className="hidden lg:block relative mt-2" style={{ height: 660 }}>
                        <div aria-hidden="true" className="absolute" style={{ left: '44%', top: -150, opacity: 0.35, filter: 'blur(3px)', transform: 'scale(1.35)', transformOrigin: 'top center' }}>
                          <Mock kind={u.mock[0]} en={en} width={200} />
                        </div>
                        <div className="absolute" style={{ left: '12%', top: 20 }}><Mock kind={u.mock[0]} en={en} width={190} /></div>
                        <div className="absolute" style={{ left: '40%', top: 120 }}><Mock kind={u.mock[1]} en={en} width={190} /></div>
                        <div className="absolute" style={{ left: '70%', top: -160 }}><Mock kind={u.mock[2] || u.mock[0]} en={en} width={190} /></div>
                        <p className="absolute left-0 bottom-0 text-xs" style={{ color: 'rgb(var(--fg) / 0.45)' }}>{en ? 'Illustration of the idea, not a screenshot' : 'ภาพจำลองเพื่ออธิบายแนวคิด ไม่ใช่หน้าจอจริง'}</p>
                      </div>
                    )}
                    {(!u.images || !u.images.length) && !u.mock && u.screens && (
                      <>
                        <div className="lg:hidden mt-8 flex items-start justify-center gap-3">
                          {u.screens.device === 'phone'
                            ? u.screens.kinds.slice(0, 3).map((k, ki) => <div key={k + ki} className="w-full flex justify-center" style={{ marginTop: ki % 2 ? 40 : 0 }}><PhoneScreen kind={k} en={en} /></div>)
                            : <BrowserScreen kind={u.screens.kinds[0]} en={en} className="w-full" />}
                        </div>
                        <p className="lg:hidden text-center mt-5 text-xs" style={{ color: 'rgb(var(--fg) / 0.45)' }}>{en ? 'Illustration of the idea, not a screenshot' : 'ภาพจำลองเพื่ออธิบายแนวคิด ไม่ใช่ภาพหน้าจอจริง'}</p>
                        <div className="hidden lg:block relative mt-2" style={{ height: u.screens.device === 'phone' ? 660 : 470 }}>
                          {u.screens.device === 'phone' ? (
                            <>
                              <div aria-hidden="true" className="absolute" style={{ left: '44%', top: -150, opacity: 0.35, filter: 'blur(3px)', transform: 'scale(1.35)', transformOrigin: 'top center' }}><PhoneScreen kind={u.screens.kinds[0]} en={en} width={200} /></div>
                              <div className="absolute" style={{ left: '12%', top: 20 }}><PhoneScreen kind={u.screens.kinds[0]} en={en} width={190} /></div>
                              <div className="absolute" style={{ left: '40%', top: 120 }}><PhoneScreen kind={u.screens.kinds[1]} en={en} width={190} /></div>
                              <div className="absolute" style={{ left: '70%', top: -160 }}><PhoneScreen kind={u.screens.kinds[2]} en={en} width={190} /></div>
                            </>
                          ) : (
                            <>
                              <div className="absolute" style={{ left: '0%', top: 10 }}><BrowserScreen kind={u.screens.kinds[0]} en={en} width={400} /></div>
                              <div className="absolute" style={{ left: '30%', top: 150 }}><BrowserScreen kind={u.screens.kinds[1]} en={en} width={400} /></div>
                              <div className="absolute" style={{ left: '62%', top: -30 }}><BrowserScreen kind={u.screens.kinds[2]} en={en} width={400} /></div>
                            </>
                          )}
                          <p className="absolute left-0 bottom-0 text-xs" style={{ color: 'rgb(var(--fg) / 0.45)' }}>{en ? 'Illustration of the idea, not a screenshot' : 'ภาพจำลองเพื่ออธิบายแนวคิด ไม่ใช่ภาพหน้าจอจริง'}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        })()}

        {/* User flow */}
        {(() => {
          const st = getCaseStack(study.slug)
          if (!st || !st.flow) return null
          const en = lang === 'en'
          const box = { background: 'rgb(var(--fg) / 0.04)', border: '1px solid var(--accent)', color: 'var(--ink)' }
          const line = <span aria-hidden="true" className="block w-px h-7 mx-auto" style={{ background: 'var(--accent)' }} />
          return (
            <section className="pb-16 lg:pb-24">
              <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-3" style={{ color: 'var(--ink)' }}>
                  <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />
                  {st.flowKind === 'project' ? (en ? 'Project Flow' : 'ผังขั้นตอนโครงการ') : (en ? 'User Flow' : 'ผังการใช้งาน (User Flow)')}
                </h2>
                <p className="mb-8" style={{ color: 'rgb(var(--fg) / 0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {st.flowKind === 'project' ? (en ? 'How the project moved from first brief to delivery.' : 'เส้นทางของโปรเจกต์ ตั้งแต่โจทย์แรกจนส่งมอบงาน') : (en ? 'The main path a person takes through the app.' : 'เส้นทางหลักที่ผู้ใช้เดินในแอป')}
                </p>
                <div className="flex flex-col items-center">
                  {st.flow.map((n, i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                      {i > 0 && line}
                      {n.kind === 'decision' ? (
                        <>
                          <div className="px-8 py-4 text-center text-sm" style={{ ...box, borderRadius: 16, transform: 'none' }}>
                            <span aria-hidden="true" className="mr-2" style={{ color: 'var(--accent)' }}>◆</span>{en ? n.en : n.th}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl mt-0">
                            {[{ k: en ? 'Yes' : 'ใช่', v: n.yes }, { k: en ? 'No' : 'ไม่', v: n.no }].map((b) => b.v && (
                              <div key={b.k} className="flex flex-col items-center">
                                {line}
                                <span className="text-xs mb-2" style={{ color: 'var(--accent-2)' }}>{b.k}</span>
                                <div className="px-6 py-3 rounded-full text-sm text-center" style={box}>{en ? b.v.en : b.v.th}</div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className={`px-6 py-3 text-sm text-center max-w-md ${n.kind === 'start' ? 'rounded-full' : 'rounded-2xl'}`} style={n.kind === 'start' ? { ...box, background: 'rgb(123 110 246 / 0.2)' } : box}>{en ? n.en : n.th}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })()}

        {/* Languages & Technology */}
        {(() => {
          const st = getCaseStack(study.slug)
          if (!st) return null
          const en = lang === 'en'
          const groups = [
            { label: en ? 'Languages' : 'ภาษา', items: st.languages },
            { label: en ? 'Frameworks & systems' : 'เฟรมเวิร์กและระบบ', items: [...(st.earlier || []), ...st.frameworks] },
            { label: en ? 'Hosting & delivery' : 'โฮสติ้งและการส่งมอบ', items: st.infra },
          ].filter((g) => g.items.length)
          return (
            <section className="pb-16 lg:pb-24">
              <div className="max-w-5xl mx-auto px-6 lg:px-10">
                {st.built && (
                  <div className="mb-14">
                    <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-6" style={{ color: 'var(--ink)' }}>
                      <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{en ? 'What We Developed' : 'สิ่งที่เราพัฒนา'}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {st.built[lang].map((b) => (
                        <div key={b} className="flex items-start gap-4 rounded-2xl p-5" style={{ background: 'linear-gradient(150deg, rgb(var(--fg) / 0.07), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: 'inset 0 1px 0 rgb(var(--fg) / 0.06)' }}>
                          <span aria-hidden="true" className="star-bullet mt-1" style={{ width: 20, height: 20 }} />
                          <span style={{ color: 'rgb(var(--fg) / 0.8)', fontWeight: 400, fontSize: '0.96rem', lineHeight: 1.6 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-3" style={{ color: 'var(--ink)' }}>
                  <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{en ? 'Languages & Technology' : 'ภาษาและเทคโนโลยีที่ใช้'}
                </h2>
                <p className="mb-8" style={{ color: 'rgb(var(--fg) / 0.6)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {en ? 'What we can share openly. Parts that are confidential to the client are not listed.' : 'เท่าที่เปิดเผยได้ ส่วนที่เป็นความลับของลูกค้าไม่ได้ระบุไว้'}
                </p>
                <div className="flex flex-col gap-6">
                  {groups.map((g) => (
                    <div key={g.label}>
                      <p className="mb-3" style={{ color: 'rgb(var(--fg) / 0.9)', fontWeight: 500, fontSize: '1rem' }}>{g.label}</p>
                      <div className="flex flex-wrap gap-2.5">
                        {g.items.map((it) => (
                          <span key={it} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm" style={{ background: 'linear-gradient(150deg, rgb(var(--fg) / 0.08), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.14)', color: 'var(--ink)' }}><TechGlyph name={it} />{it}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })()}

        {/* Key Features */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-10" style={{ color: 'var(--ink)' }}>
              <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full mr-4 align-middle" style={{ background: 'var(--accent)', boxShadow: '0 0 22px 4px rgb(123 110 246 / 0.55)' }} />{c.keyFeaturesHeading}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.keyFeatures.map((group, gi) => (
                <div key={group.title} className="group relative overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(150deg, rgb(var(--fg) / 0.07), rgb(var(--fg) / 0.02))', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: 'inset 0 1px 0 rgb(var(--fg) / 0.06)' }}>
                  <span aria-hidden="true" className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(circle, rgb(123 110 246 / 0.35), transparent 70%)' }} />
                  <span className="relative w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: 'radial-gradient(circle at 30% 25%, rgb(123 110 246 / 0.4), rgb(var(--fg) / 0.05))', border: '1px solid rgb(var(--fg) / 0.14)', fontWeight: 800 }}>
                    <span style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{String(gi + 1).padStart(2, '0')}</span>
                  </span>
                  <h3 className="relative mb-4" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.15rem', lineHeight: 1.4 }}>{group.title}</h3>
                  <ul className="relative flex flex-col gap-3">
                    {group.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span aria-hidden="true" className="star-bullet mt-1.5" />
                        <span style={{ color: 'rgb(var(--fg) / 0.74)', fontWeight: 400, fontSize: '0.94rem', lineHeight: 1.6 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href={`/${lang}/work/${study.slug}`}
                className="inline-flex items-center gap-2 text-base transition-all hover:gap-3"
                style={{ color: 'var(--accent-2)', fontWeight: 500 }}
              >
                {lang === 'en' ? 'See the Work Summary' : 'ดูผลงานทั้งหมด'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {lang === 'en' ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจไหม?'}
            </p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {lang === 'en' ? <>Let's build your next case study</> : <>มาทำโปรเจกต์ถัดไปด้วยกัน</>}
            </h2>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {lang === 'en' ? 'Talk to Us' : 'คุยกับเรา'}
              <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
