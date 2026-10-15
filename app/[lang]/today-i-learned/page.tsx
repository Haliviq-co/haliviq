'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { tilNotes } from '@/lib/til-data'
import { formatDate } from '@/lib/blog-data'

const topicColors: Record<string, string> = {
  React: 'var(--purple-light)',
  'Next.js': 'var(--purple)',
  TypeScript: 'var(--purple-light)',
  PostgreSQL: 'var(--lime)',
  Docker: 'var(--purple)',
  Figma: 'var(--lime)',
  CLI: 'var(--purple-light)',
  macOS: 'var(--lime)',
  Design: 'var(--purple)',
  Security: 'var(--lime)',
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const notes = tilNotes.map((n) => ({ slug: n.slug, topic: n.topic, date: formatDate(n.date, lang), title: n[lang].title, excerpt: n[lang].excerpt }))
  const [active, setActive] = useState<string>('all')

  const topics = useMemo(() => {
    const counts: Record<string, number> = {}
    notes.forEach(n => { counts[n.topic] = (counts[n.topic] || 0) + 1 })
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([label, count]) => ({ label, count }))
  }, [notes])

  const visibleNotes = active === 'all' ? notes : notes.filter(n => n.topic === active)

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="pt-[112px] pb-16 lg:pb-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--accent)', fontWeight: 400, letterSpacing: '0.2em' }}>{isEN ? 'Insights' : 'Insights'}</p>
            <h1 className="t-display text-[clamp(2.6rem,6vw,4.5rem)] leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
              {isEN ? 'Today I Learned' : 'Today I Learned'}
            </h1>
            <p className="max-w-2xl mb-10" style={{ color: 'rgb(var(--fg) / 0.6)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.6 }}>
              {isEN ? 'Short, practical notes from the Haliviq team: quick lessons from daily engineering and design work. Each one is something we ran into while building, with the reason it happens and what we do about it now. Filter by topic to find notes on React, Next.js, PostgreSQL, Docker, Figma, security and more.' : 'บันทึกสั้น ๆ ที่ใช้ได้จริงจากทีม Haliviq เป็นบทเรียนเล็ก ๆ จากงานวิศวกรรมและดีไซน์ในแต่ละวัน แต่ละเรื่องคือสิ่งที่เราพบระหว่างลงมือทำ พร้อมอธิบายว่าทำไมถึงเกิดขึ้น และตอนนี้เราแก้อย่างไร เลือกกรองตามหัวข้อได้ ทั้ง React, Next.js, PostgreSQL, Docker, Figma, security และอื่น ๆ'}
            </p>

            {/* Topic filter pills — horizontal slider instead of wrapping into many rows */}
            <div className="flex flex-nowrap gap-2.5 mb-14 overflow-x-auto no-scrollbar -mx-1 px-1" style={{ scrollSnapType: 'x proximity' }}>
              <button
                onClick={() => setActive('all')}
                className="shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors"
                style={active === 'all'
                  ? { border: '1px solid var(--purple-light)', color: 'var(--accent)', fontWeight: 400, scrollSnapAlign: 'start' }
                  : { border: '1px solid rgb(var(--fg) / 0.15)', color: 'rgb(var(--fg) / 0.7)', fontWeight: 400, scrollSnapAlign: 'start' }}
              >
                {isEN ? 'All Topics' : 'ทั้งหมด'}
              </button>
              {topics.map(tp => (
                <button
                  key={tp.label}
                  onClick={() => setActive(tp.label)}
                  className="shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors"
                  style={active === tp.label
                    ? { border: '1px solid var(--purple-light)', color: 'var(--accent)', fontWeight: 400, scrollSnapAlign: 'start' }
                    : { border: '1px solid rgb(var(--fg) / 0.15)', color: 'rgb(var(--fg) / 0.7)', fontWeight: 400, scrollSnapAlign: 'start' }}
                >
                  {tp.label} <span style={{ color: 'rgb(var(--fg) / 0.35)' }}>{tp.count}</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleNotes.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${lang}/today-i-learned/${n.slug}`}
                  className="group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-widest uppercase" style={{ color: topicColors[n.topic] || 'var(--purple-light)', fontWeight: 500, letterSpacing: '0.08em' }}>{n.topic}</span>
                    <span className="text-xs" style={{ color: 'rgb(var(--fg) / 0.4)', fontWeight: 400 }}>{n.date}</span>
                  </div>
                  <h3 className="mb-3 group-hover:text-[color:var(--accent)] transition-colors" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.5 }}>{n.title}</h3>
                  <p style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.6 }}>{n.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm group-hover:gap-2.5 transition-all" style={{ color: 'var(--accent)' }}>{isEN ? 'Read note' : 'อ่านโน้ต'} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? "We'd love to hear what you're building." : 'เราอยากฟังว่าคุณกำลังสร้างอะไรอยู่'}
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400 }}>
              {isEN ? 'These notes come from our daily design and engineering work in Bangkok. If you are planning a website, app or AI tool and want a team that pays attention to details like these, tell us about it.' : 'บันทึกเหล่านี้มาจากงานออกแบบและพัฒนาที่ทีมเราทำกันทุกวันในกรุงเทพฯ ถ้าคุณกำลังวางแผนทำ website แอป หรือระบบ AI และอยากได้ทีมที่ใส่ใจรายละเอียดแบบนี้ เล่าให้เราฟังได้เลย'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
                {isEN ? 'Start a Conversation' : 'เริ่มคุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" className="text-sm transition-colors" style={{ color: 'var(--ink)', fontWeight: 400 }}>wu@haliviq.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
