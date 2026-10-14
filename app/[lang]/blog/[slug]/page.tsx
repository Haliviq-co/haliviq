import Link from 'next/link'
import FAQ from '@/components/FAQ'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { articles, getArticle, coverOf, figureOf, formatDate, type BlogCat } from '@/lib/blog-data'

const catLabel: Record<BlogCat, { en: string; th: string }> = {
  Technology: { en: 'Technology', th: 'เทคโนโลยี' },
  AI: { en: 'AI', th: 'AI' },
  Design: { en: 'Design & UX', th: 'ดีไซน์และ UX' },
  Business: { en: 'Business', th: 'ธุรกิจ' },
  'Case Study': { en: 'Case Study', th: 'กรณีศึกษา' },
}

const svcLabel: Record<string, { en: string; th: string }> = {
  'web-development': { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
  'enterprise-solutions': { en: 'Enterprise Solutions', th: 'ระบบองค์กร' },
  cybersecurity: { en: 'Cybersecurity', th: 'ความปลอดภัยไซเบอร์' },
  'pdpa-compliance': { en: 'PDPA Compliance', th: 'PDPA Compliance' },
  'application-modernization': { en: 'Application Modernization', th: 'ปรับปรุงระบบเก่า' },
  ai: { en: 'AI Services', th: 'บริการ AI' },
  'ai-voice-agents': { en: 'AI Voice Agents', th: 'AI Voice Agents' },
  automation: { en: 'Workflow Automation', th: 'ระบบ Automation' },
  'design-systems': { en: 'Design Systems', th: 'Design System' },
  'user-research': { en: 'User Research', th: 'วิจัยผู้ใช้' },
  'ux-ui-design': { en: 'UX/UI Design', th: 'ออกแบบ UX/UI' },
  'digital-transformation': { en: 'Digital Transformation', th: 'Digital Transformation' },
  ecommerce: { en: 'E-commerce', th: 'E-commerce' },
  'erp-crm': { en: 'ERP & CRM', th: 'ระบบ ERP และ CRM' },
  'brand-experience': { en: 'Brand Experience', th: 'ประสบการณ์แบรนด์' },
}
const svcFor: Record<string, string[]> = {
  'nextjs-perf': ['web-development'],
  'build-vs-buy': ['enterprise-solutions', 'erp-crm'],
  'passkeys-passwordless': ['cybersecurity'],
  'thailand-pdpa-guide': ['pdpa-compliance', 'cybersecurity'],
  'legacy-modernization': ['application-modernization'],
  'ai-product-2025': ['ai', 'automation'],
  'rag-in-production': ['ai'],
  'ai-regulation-world': ['ai', 'pdpa-compliance'],
  'ai-agent-guardrails': ['ai', 'ai-voice-agents'],
  'why-design-system-matters': ['design-systems', 'ux-ui-design'],
  'ux-research': ['user-research', 'ux-ui-design'],
  'thai-typography': ['ux-ui-design'],
  'accessibility-wcag': ['ux-ui-design', 'web-development'],
  'dx-mistakes': ['digital-transformation'],
  'mobile-payments-asean': ['ecommerce'],
  'case-prima-marine': ['web-development', 'ux-ui-design'],
  'case-baan-khanitha': ['ux-ui-design', 'web-development'],
  'case-dsk-aesthetics': ['ai', 'ux-ui-design'],
  'case-admire-homes': ['erp-crm', 'ux-ui-design'],
  'case-meko-hospital': ['brand-experience', 'ux-ui-design'],
}

export function generateStaticParams() {
  return ['en', 'th'].flatMap((lang) => articles.map((a) => ({ lang, slug: a.slug })))
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  const lang = params.lang === 'en' ? 'en' : 'th'
  const l = a[lang]
  const url = `https://www.haliviq.com/${lang}/blog/${a.slug}`
  const img = `https://www.haliviq.com${coverOf(a)}`
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    keywords: a.tags,
    alternates: { canonical: url, languages: { en: `https://www.haliviq.com/en/blog/${a.slug}`, th: `https://www.haliviq.com/th/blog/${a.slug}` } },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url, type: 'article', publishedTime: a.date, images: [{ url: img, width: 1600, height: 900 }] },
    twitter: { card: 'summary_large_image', title: l.metaTitle, description: l.metaDescription, images: [img] },
  }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const l = a[lang]
  const related = a.related.map(getArticle).filter(Boolean) as typeof articles
  const topPos = a.cat === 'Case Study' ? 'center top' : 'center'
  const figAt = Math.min(1, l.sections.length - 1)
  const h2 = { fontSize: 'clamp(1.5rem,2.6vw,2rem)', lineHeight: 1.45, marginTop: '3rem', marginBottom: '1.25rem' } as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: l.title,
    description: l.metaDescription,
    image: `https://www.haliviq.com${coverOf(a)}`,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: lang,
    author: { '@type': 'Organization', name: 'Haliviq' },
    publisher: { '@type': 'Organization', name: 'Haliviq', url: 'https://www.haliviq.com' },
    mainEntityOfPage: `https://www.haliviq.com/${lang}/blog/${a.slug}`,
  }
  const faqLd = l.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: l.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <main>
        <section className="pt-[80px] bg-[var(--bg)]">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[color:var(--text-3)] mb-8">
              <Link href={`/${lang}/blog`} className="hover:text-[var(--purple)] transition-colors">{isEN ? 'Insights' : 'บทความ'}</Link>
              <i className="ti ti-chevron-right" style={{ fontSize: 12 }} aria-hidden="true" />
              <span>{catLabel[a.cat][lang]}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>{catLabel[a.cat][lang]}</span>
              <span className="text-xs text-[color:var(--text-3)]">{a.readMin} {isEN ? 'min read' : 'นาที'}</span>
              <span className="text-xs text-[color:var(--text-3)]">·</span>
              <time className="text-xs text-[color:var(--text-3)]" dateTime={a.date}>{formatDate(a.date, lang)}</time>
            </div>
            <h1 className="t-display text-[clamp(2rem,4.6vw,3.4rem)] text-[color:var(--ink)] mb-7" style={{ lineHeight: 1.35 }}>{l.title}</h1>
            <p className="text-lg text-[color:var(--text-2)] mb-9" style={{ lineHeight: 1.85 }}>{l.intro}</p>
            <div className="flex items-center gap-4 pb-8 border-b border-[color:var(--line)]">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm" style={{ background: 'var(--purple)' }}>H</div>
              <div>
                <p className="text-sm text-[color:var(--ink)]">{isEN ? 'Haliviq Team' : 'ทีม Haliviq'}</p>
                <p className="text-xs text-[color:var(--text-3)]">{isEN ? 'Digital product studio, Bangkok' : 'สตูดิโอผลิตภัณฑ์ดิจิทัล กรุงเทพฯ'}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-14">
          <div className="relative w-full rounded-3xl overflow-hidden bg-[var(--bg)]" style={{ aspectRatio: '16/8' }}>
            <img src={coverOf(a)} alt={l.title} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: topPos }} />
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-16">
          {l.sections.map((s, i) => (
            <section key={s.h}>
              <h2 className="t-display text-[color:var(--ink)]" style={h2}>{s.h}</h2>
              {s.p.map((para, j) => (
                <p key={j} className="text-base text-[color:var(--text-2)] mb-5" style={{ lineHeight: 1.95 }}>{para}</p>
              ))}
              {s.list && (
                <ul className="space-y-3 mb-6">
                  {s.list.map((it) => (
                    <li key={it} className="flex gap-3 text-[color:var(--text-2)]" style={{ lineHeight: 1.85 }}>
                      <span className="mt-[0.7em] shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--purple)' }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.quote && (
                <blockquote className="my-8 pl-6 border-l-4 py-2" style={{ borderColor: 'var(--purple)' }}>
                  <p className="text-xl text-[color:var(--ink)]" style={{ lineHeight: 1.7 }}>{s.quote}</p>
                </blockquote>
              )}
              {i === figAt && (
                <figure className="my-10">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[var(--bg)]" style={{ aspectRatio: '16/8' }}>
                    <img src={figureOf(a)} alt={l.figCaption} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <figcaption className="text-xs text-[color:var(--text-3)] text-center mt-3">{l.figCaption}</figcaption>
                </figure>
              )}
            </section>
          ))}

          <div className="mt-14 p-7 rounded-2xl border border-[color:var(--line)] bg-[var(--bg-1)]">
            <p className="t-label mb-4" style={{ color: 'var(--purple)' }}>{isEN ? 'Key takeaways' : 'สรุปสั้น ๆ'}</p>
            <ul className="space-y-3">
              {l.takeaways.map((k) => (
                <li key={k} className="flex gap-3 text-[color:var(--ink)]" style={{ lineHeight: 1.8 }}>
                  <i className="ti ti-check" style={{ color: 'var(--purple)', marginTop: 5 }} aria-hidden="true" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>

          {l.faq && l.faq.length > 0 && (
            <div className="mt-14">
              <FAQ embedded lang={lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} items={l.faq.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          )}

          {a.caseSlug && (
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={`/${lang}/case-studies/${a.caseSlug}`} className="btn-primary">{isEN ? 'See the full case study' : 'ดูกรณีศึกษาฉบับเต็ม'}</Link>
              <Link href={`/${lang}/work/${a.caseSlug}`} className="btn-outline">{isEN ? 'Project details' : 'รายละเอียดโปรเจกต์'}</Link>
            </div>
          )}

          {(svcFor[a.slug] || []).length > 0 && (
            <div className="mt-12">
              <p className="t-label mb-4" style={{ color: 'var(--purple)' }}>{isEN ? 'Related services' : 'บริการที่เกี่ยวข้อง'}</p>
              <div className="flex flex-wrap gap-3">
                {(svcFor[a.slug] || []).map((sv) => (
                  <Link key={sv} href={`/${lang}/services/${sv}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-[color:var(--line)] text-[color:var(--ink)] hover:border-[var(--purple)] hover:text-[var(--purple)] transition-colors">
                    {svcLabel[sv][lang]} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-12 pt-10 border-t border-[color:var(--line)]">
            {a.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-xs border border-[color:var(--line)] text-[color:var(--text-3)]">{tag}</span>
            ))}
          </div>

          <div className="theme-dark mt-10 p-8 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg,#1B1740 0%,#2B2370 100%)' }}>
            <p className="text-xl mb-2" style={{ fontWeight: 600, lineHeight: 1.5 }}>{isEN ? 'Have a project like this in mind?' : 'มีโปรเจกต์แบบนี้อยู่ในใจไหม'}</p>
            <p className="text-sm mb-5" style={{ color: 'rgb(var(--fg) / 0.8)', lineHeight: 1.8 }}>{isEN ? 'Tell us where you are today and we will suggest a sensible first step, with no obligation.' : 'เล่าให้เราฟังว่าตอนนี้อยู่ตรงไหน เดี๋ยวเราแนะนำก้าวแรกที่เหมาะให้ โดยไม่มีข้อผูกมัด'}</p>
            <Link href={`/${lang}/contact`} className="btn-primary">{isEN ? 'Talk to us' : 'คุยกับเรา'}</Link>
          </div>
        </article>

        <section className="bg-[var(--bg-1)] border-t border-[color:var(--line)] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="t-label mb-8">{isEN ? 'Related articles' : 'บทความที่เกี่ยวข้อง'}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/${lang}/blog/${r.slug}`} className="group border border-[color:var(--line)] bg-[var(--bg)] rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img src={coverOf(r)} alt={r[lang].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: r.cat === 'Case Study' ? 'center top' : 'center' }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>{catLabel[r.cat][lang]}</span>
                      <span className="text-xs text-[color:var(--text-3)]">{r.readMin} {isEN ? 'min' : 'นาที'}</span>
                    </div>
                    <h3 className="text-[color:var(--ink)] group-hover:text-[var(--purple)] transition-colors" style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.55 }}>{r[lang].title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
