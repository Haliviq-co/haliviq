import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { caseStudies, getCaseStudy } from '@/lib/case-studies-data'
import { alt } from '@/lib/seo'
import { getCaseStack } from '@/lib/case-stack'

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

        {/* Services provided + hero image */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <p className="text-sm mb-4" style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400 }}>{c.servicesLabel}</p>
            <div className="flex flex-wrap gap-3 mb-12">
              {c.servicesProvided.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.1)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="max-w-md rounded-3xl overflow-hidden" style={{ border: '1px solid rgb(var(--fg) / 0.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.heroImage} alt={c.client} className="w-full h-auto block" />
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.challengeHeading}
            </h2>
            <div className="rounded-2xl p-8" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
              <p style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.75 }}>
                {c.challenge}
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.solutionHeading}
            </h2>
            <div className="rounded-2xl p-8" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
              <p style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.75 }}>
                {c.solution}
              </p>
            </div>

            <h3 className="t-display leading-relaxed text-[clamp(1.3rem,2.4vw,1.75rem)] mt-14 mb-5" style={{ color: 'rgb(var(--fg) / 0.85)' }}>
              {c.overviewHeading}
            </h3>
            <p style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.75 }}>
              {c.overview}
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-10" style={{ color: 'var(--ink)' }}>
              {c.approachHeading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {c.approach.map((step, i) => (
                <div key={step.title} className="rounded-2xl p-7" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full mb-4 text-sm"
                    style={{ background: 'rgba(123,110,246,0.18)', color: 'var(--accent)', fontWeight: 600 }}
                  >
                    {i + 1}
                  </span>
                  <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{step.title}</p>
                  <p style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400, fontSize: '0.92rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <h2 className="t-display leading-relaxed text-[clamp(1.6rem,3vw,2.3rem)] mb-3" style={{ color: 'var(--ink)' }}>
                  {en ? 'Languages & Technology' : 'ภาษาและเทคโนโลยีที่ใช้'}
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
                          <span key={it} className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'var(--ink)' }}>{it}</span>
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
              {c.keyFeaturesHeading}
            </h2>
            <div className="flex flex-col gap-10">
              {c.keyFeatures.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4" style={{ color: 'rgb(var(--fg) / 0.9)', fontWeight: 500, fontSize: '1.15rem' }}>{group.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--lime)' }} />
                        <span style={{ color: 'rgb(var(--fg) / 0.72)', fontWeight: 400, fontSize: '0.98rem', lineHeight: 1.6 }}>{b}</span>
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
        <section className="theme-dark relative overflow-hidden" style={{ background: '#050308' }}>
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
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
