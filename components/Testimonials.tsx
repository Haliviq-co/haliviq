'use client'
import { useState } from 'react'
import type { Lang } from '@/lib/i18n'
import type { Review, VideoReview } from '@/lib/testimonials'
import { REVIEWS, VIDEOS } from '@/lib/testimonials'

const T = {
  th: { h: 'เสียงจากลูกค้าของเรา', sub: 'รีวิวจากลูกค้าที่ใช้งานจริง', verified: 'ลูกค้าจริง', reply: 'ตอบกลับจาก Haliviq', prev: 'ก่อนหน้า', next: 'ถัดไป', sample: 'ตัวอย่างโครงสร้าง ข้อมูลสมมติ ไม่ใช่รีวิวจริง' },
  en: { h: 'What our clients say', sub: 'Reviews from real clients', verified: 'Verified client', reply: 'Reply from Haliviq', prev: 'Prev', next: 'Next', sample: 'Layout preview. Sample data, not real reviews' },
}
const PER = 3

function Stars({ n }: { n: number }) {
  return <span aria-label={`${n}/5`} style={{ color: '#F5B301', letterSpacing: 2 }}>{'★'.repeat(n)}<span style={{ opacity: .25 }}>{'★'.repeat(5 - n)}</span></span>
}

export default function Testimonials({ lang, reviews = REVIEWS, videos = VIDEOS, sample = false }: { lang?: Lang; reviews?: Review[]; videos?: VideoReview[]; sample?: boolean }) {
  const t = lang === 'en' ? T.en : T.th
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState<VideoReview | null>(null)
  if (!reviews.length && !videos.length) return null
  const pages = Math.max(1, Math.ceil(reviews.length / PER))
  const avg = reviews.length ? reviews.reduce((a, r) => a + r.stars, 0) / reviews.length : 0
  const shown = reviews.slice(page * PER, page * PER + PER)
  const border = 'rgb(var(--fg) / 0.1)'
  return (
    <section className="py-20" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 600 }}>{t.h}</h2>
          {reviews.length > 0 && (
            <p className="mt-3 text-sm" style={{ color: 'rgb(var(--fg) / 0.7)' }}>
              <Stars n={Math.round(avg)} /> <b>{avg.toFixed(1)}</b> · {reviews.length} {lang === 'en' ? 'reviews' : 'รีวิว'}
            </p>
          )}
          <p className="mt-1 text-sm" style={{ color: 'rgb(var(--fg) / 0.55)' }}>{t.sub}</p>
          {sample && <p className="mt-3 inline-block text-xs px-3 py-1 rounded-full" style={{ background: 'rgb(245 179 1 / .15)', color: '#F5B301' }}>{t.sample}</p>}
        </div>

        {videos.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 snap-x" style={{ scrollbarWidth: 'thin' }}>
            {videos.map((v, i) => (
              <button key={i} type="button" onClick={() => setOpen(v)} className="relative shrink-0 snap-start rounded-xl overflow-hidden" style={{ width: 150, height: 230, border: `1px solid ${border}` }} aria-label={v.name}>
                <img src={v.thumb} alt={v.name} className="w-full h-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center"><span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,.55)', color: '#fff' }}>▶</span></span>
                <span className="absolute bottom-0 inset-x-0 p-2 text-xs text-left" style={{ background: 'linear-gradient(transparent,rgba(0,0,0,.7))', color: '#fff' }}>{v.name}</span>
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {shown.map((r, i) => (
            <article key={i} className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgb(var(--fg) / 0.04)', border: `1px solid ${border}` }}>
              <div className="flex gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center shrink-0 font-semibold" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff' }}>{r.name.replace(/^คุณ/, '').charAt(0)}</div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <Stars n={r.stars} />
                    <b>{r.name}</b>
                    {r.place && <span style={{ color: 'rgb(var(--fg) / 0.55)' }}>{r.place}</span>}
                    <span className="text-xs" style={{ color: '#2FB26B' }}>✓ {t.verified}</span>
                    {r.date && <span className="text-xs" style={{ color: 'rgb(var(--fg) / 0.45)' }}>{r.date}</span>}
                  </div>
                  <h3 className="mt-2 font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.8)' }}>{r.text}</p>
                  {r.reply && (
                    <div className="mt-4 pl-4 text-sm" style={{ borderLeft: '2px solid var(--accent-2)' }}>
                      <p className="font-semibold text-xs mb-1" style={{ color: 'var(--accent-2)' }}>{t.reply}</p>
                      <p style={{ color: 'rgb(var(--fg) / 0.7)' }}>{r.reply}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 text-sm">
            <button type="button" disabled={page === 0} onClick={() => setPage(page - 1)} className="px-3 py-1 rounded-full disabled:opacity-30">‹ {t.prev}</button>
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} type="button" onClick={() => setPage(i)} className="w-8 h-8 rounded-full" style={i === page ? { background: 'var(--accent)', color: '#fff' } : { border: `1px solid ${border}` }}>{i + 1}</button>
            ))}
            <button type="button" disabled={page === pages - 1} onClick={() => setPage(page + 1)} className="px-3 py-1 rounded-full disabled:opacity-30">{t.next} ›</button>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,.85)' }} onClick={() => setOpen(null)}>
          <video src={open.src} controls autoPlay playsInline className="max-h-[85vh] max-w-full rounded-xl" onClick={e => e.stopPropagation()} />
          <button type="button" aria-label="close" className="absolute top-4 right-4 text-white text-3xl">×</button>
        </div>
      )}
    </section>
  )
}
