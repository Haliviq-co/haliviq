import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { tilNotes, getTil } from '@/lib/til-data'
import { formatDate } from '@/lib/blog-data'

export function generateStaticParams() {
  return ['en', 'th'].flatMap((lang) => tilNotes.map((n) => ({ lang, slug: n.slug })))
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  const n = getTil(params.slug)
  if (!n) return {}
  const lang = params.lang === 'en' ? 'en' : 'th'
  const l = n[lang]
  const title = `${l.title} | Today I Learned | Haliviq`
  const url = `https://www.haliviq.com/${lang}/today-i-learned/${n.slug}`
  return {
    title,
    description: l.excerpt,
    alternates: { canonical: url, languages: { en: `https://www.haliviq.com/en/today-i-learned/${n.slug}`, th: `https://www.haliviq.com/th/today-i-learned/${n.slug}` } },
    openGraph: { title, description: l.excerpt, url, type: 'article', publishedTime: n.date },
    twitter: { card: 'summary', title, description: l.excerpt },
  }
}

const card = { background: 'rgb(var(--fg) / 0.035)', border: '1px solid rgb(var(--fg) / 0.1)' } as const
const h2s = { color: 'var(--ink)', fontWeight: 600, fontSize: 'clamp(1.25rem,2.2vw,1.6rem)', lineHeight: 1.5, marginTop: '2.75rem', marginBottom: '1rem' } as const
const ps = { color: 'rgb(var(--fg) / 0.75)', fontSize: '1.02rem', lineHeight: 1.95, marginBottom: '1.1rem' } as const

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const n = getTil(params.slug)
  if (!n) notFound()
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const l = n[lang]
  const more = tilNotes.filter((x) => x.topic === n.topic && x.slug !== n.slug).concat(tilNotes.filter((x) => x.topic !== n.topic && x.slug !== n.slug)).slice(0, 3)
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: l.title, description: l.excerpt, datePublished: n.date, inLanguage: lang,
    author: { '@type': 'Organization', name: 'Haliviq' }, publisher: { '@type': 'Organization', name: 'Haliviq', url: 'https://www.haliviq.com' },
    mainEntityOfPage: `https://www.haliviq.com/${lang}/today-i-learned/${n.slug}`,
  }
  const blocks: [string, string[]][] = [
    [isEN ? 'What happened' : 'เกิดอะไรขึ้น', l.problem],
    [isEN ? 'Why it happens' : 'ทำไมถึงเป็นแบบนั้น', l.why],
    [isEN ? 'What we do now' : 'ตอนนี้เราทำยังไง', l.fix],
  ]
  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: 'var(--bg)' }}>
        <section className="relative overflow-hidden pt-[80px]">
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-8" style={{ color: 'rgb(var(--fg) / 0.5)' }}>
              <Link href={`/${lang}/today-i-learned`} className="hover:text-[color:var(--ink)] transition-colors">Today I Learned</Link>
              <i className="ti ti-chevron-right" style={{ fontSize: 12 }} aria-hidden="true" />
              <span>{n.topic}</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)' }}>{n.topic}</span>
              <time className="text-xs" style={{ color: 'rgb(var(--fg) / 0.5)' }} dateTime={n.date}>{formatDate(n.date, lang)}</time>
            </div>
            <h1 className="t-display text-[clamp(1.9rem,4.2vw,3rem)] mb-6" style={{ color: 'var(--ink)', lineHeight: 1.4 }}>{l.title}</h1>
            <p style={{ color: 'rgb(var(--fg) / 0.7)', fontSize: '1.1rem', lineHeight: 1.85 }}>{l.excerpt}</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-16">
          {blocks.map(([h, ps_]) => (
            <section key={h}>
              <h2 className="t-display" style={{ ...h2s, color: 'var(--ink)' }}>{h}</h2>
              {ps_.map((p, i) => <p key={i} style={ps}>{p}</p>)}
              {h === blocks[2][0] && l.code && (
                <div className="my-6 rounded-2xl overflow-hidden" style={{ border: '1px solid rgb(var(--fg) / 0.12)', background: '#0D0C1A' }}>
                  <div className="flex items-center justify-between px-5 py-2.5 text-xs" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.5)' }}>
                    <span>{l.code.label}</span><span style={{ letterSpacing: '0.1em' }}>{l.code.lang}</span>
                  </div>
                  <pre className="p-5 overflow-x-auto text-[13px]" style={{ color: '#DCD8FF', lineHeight: 1.7, fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace' }}><code>{l.code.text}</code></pre>
                </div>
              )}
            </section>
          ))}

          {l.steps && l.steps.length > 0 && (
            <div className="mt-10 p-6 rounded-2xl" style={card}>
              <p className="t-label mb-4" style={{ color: 'var(--accent-2)' }}>{isEN ? 'Quick checklist' : 'เช็กลิสต์สั้น ๆ'}</p>
              <ol className="space-y-3">
                {l.steps.map((s, i) => (
                  <li key={i} className="flex gap-3" style={{ color: 'rgb(var(--fg) / 0.8)', lineHeight: 1.8 }}>
                    <span className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: 'rgba(123,110,246,0.18)', color: 'var(--accent)', marginTop: 2 }}>{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-10 p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))', border: '1px solid rgba(169,156,248,0.3)' }}>
            <p className="t-label mb-3" style={{ color: 'var(--accent)' }}>{isEN ? 'Rule of thumb' : 'จำไว้สั้น ๆ'}</p>
            <p style={{ color: 'var(--ink)', fontSize: '1.1rem', lineHeight: 1.75, fontWeight: 500 }}>{l.takeaway}</p>
          </div>

          <div className="mt-10">
            <Link href={`/${lang}/today-i-learned`} className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--accent)' }}>
              <i className="ti ti-arrow-left" aria-hidden="true" /> {isEN ? 'All notes' : 'โน้ตทั้งหมด'}
            </Link>
          </div>
        </article>

        <section className="py-16" style={{ background: 'var(--bg-1)', borderTop: '1px solid rgb(var(--fg) / 0.06)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="t-label mb-8">{isEN ? 'More notes' : 'โน้ตอื่น ๆ'}</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {more.map((m) => (
                <Link key={m.slug} href={`/${lang}/today-i-learned/${m.slug}`} className="group block rounded-2xl p-6 transition-all hover:-translate-y-1" style={card}>
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--accent)', fontWeight: 500 }}>{m.topic}</span>
                  <h3 className="mt-3 group-hover:text-[color:var(--accent)] transition-colors" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1rem', lineHeight: 1.55 }}>{m[lang].title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="absolute left-0 right-0 bottom-0 pointer-events-none" style={{ height: 220, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.3) 0%, transparent 75%)' }} />
          <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
            <h2 className="t-display text-[clamp(1.5rem,3.4vw,2.4rem)] mb-5" style={{ color: 'var(--ink)', lineHeight: 1.4 }}>{isEN ? "We'd love to hear what you're building." : 'เราอยากฟังว่าคุณกำลังสร้างอะไรอยู่'}</h2>
            <Link href={`/${lang}/contact`} className="btn-primary">{isEN ? 'Talk to us' : 'คุยกับเรา'}</Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
