import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { workProjects, getWorkProject } from '@/lib/work-data'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  const langs: Lang[] = ['th', 'en']
  return langs.flatMap((lang) => workProjects.map((w) => ({ lang, slug: w.slug })))
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Promise<Metadata> {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const project = getWorkProject(params.slug)
  if (!project) return {}
  const c = project[lang]
  const title = `${c.h1} | Haliviq`
  const siteUrl = `https://haliviq.com/${lang}/work/${project.slug}`
  return {
    title,
    description: c.metaDescription,
    alternates: alt(siteUrl),
    openGraph: {
      title,
      description: c.metaDescription,
      images: [c.ogImage],
      url: siteUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: c.metaDescription,
      images: [c.ogImage],
    },
  }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const tr = t[lang] as any
  const project = getWorkProject(params.slug)

  if (!project) {
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

  const c = project[lang]
  const siteUrl = `https://haliviq.com/${lang}/work/${project.slug}`

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.h1,
    description: c.metaDescription,
    image: `https://haliviq.com${c.ogImage}`,
    url: siteUrl,
    provider: {
      '@type': 'Organization',
      name: 'Haliviq',
      url: 'https://haliviq.com',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              href={`/${lang}/work`}
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

            <h1 className="t-display leading-relaxed text-[clamp(2.1rem,4.6vw,3.6rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.h1}
            </h1>

            <p className="max-w-3xl mb-10" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.65 }}>
              {c.intro}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl">
              {c.snapshot.map((s) => (
                <div key={s.label} className="rounded-2xl px-5 py-4" style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.1)' }}>
                  <p className="text-xs mb-1.5" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{s.label}</p>
                  <p style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services provided + cover image */}
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
              <img src={c.ogImage} alt={c.client} className="w-full h-auto block" />
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.5rem,2.8vw,2.1rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.objectivesHeading}
            </h2>
            <div className="rounded-2xl p-8" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
              <ul className="flex flex-col gap-3">
                {c.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--purple-light)' }} />
                    <span style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.7 }}>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.5rem,2.8vw,2.1rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.deliverablesHeading}
            </h2>
            <div className="rounded-2xl p-8" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
              <ul className="flex flex-col gap-3">
                {c.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--lime)' }} />
                    <span style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.7 }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.5rem,2.8vw,2.1rem)] mb-10" style={{ color: 'var(--ink)' }}>
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

        {/* Tech */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.5rem,2.8vw,2.1rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.techHeading}
            </h2>
            <div className="flex flex-wrap gap-3">
              {c.tech.map((tItem) => (
                <span
                  key={tItem}
                  className="px-4 py-2 rounded-full text-sm flex items-center gap-2"
                  style={{ background: 'rgba(196,232,106,0.08)', border: '1px solid rgba(196,232,106,0.25)', color: 'var(--accent-2)', fontWeight: 400 }}
                >
                  <i className="ti ti-cpu" style={{ fontSize: 14 }} aria-hidden="true" />
                  {tItem}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="t-display leading-relaxed text-[clamp(1.5rem,2.8vw,2.1rem)] mb-6" style={{ color: 'var(--ink)' }}>
              {c.resultsHeading}
            </h2>
            <ul className="flex flex-col gap-3">
              {c.results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <i className="ti ti-circle-check" style={{ fontSize: 18, color: 'var(--accent-2)', marginTop: 2 }} aria-hidden="true" />
                  <span style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.7 }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <FAQ embedded lang={lang} h2={c.faqHeading} subtitle={lang === 'en' ? 'Short answers about this project.' : 'คำตอบสั้น ๆ เกี่ยวกับโปรเจกต์นี้'} items={c.faq.map((f) => ({ q: f.question, a: f.answer }))} />

            <div className="mt-14 text-center">
              <Link
                href={`/${lang}/case-studies/${project.slug}`}
                className="inline-flex items-center gap-2 text-base transition-all hover:gap-3"
                style={{ color: 'var(--accent-2)', fontWeight: 500 }}
              >
                {lang === 'en' ? 'Read the Full Case Study' : 'อ่าน Case Study ฉบับเต็ม'}
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
              {lang === 'en' ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {lang === 'en' ? <>Let's build your next project</> : <>มาสร้างโปรเจกต์ถัดไปด้วยกัน</>}
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
