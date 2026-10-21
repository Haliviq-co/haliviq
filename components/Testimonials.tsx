'use client'
import { useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/i18n'
import type { Review, VideoReview } from '@/lib/testimonials'
import { REVIEWS, VIDEOS } from '@/lib/testimonials'
import { SAMPLE_REVIEWS, SAMPLE_VIDEOS, SAMPLE_REVIEWS_EN, SAMPLE_VIDEOS_EN } from '@/lib/testimonials-sample'

const T = {
  th: { h: 'เสียงจากลูกค้าของเรา', sub: 'รีวิวจากลูกค้าที่ใช้งานจริง', verified: 'ลูกค้าจริง', reply: 'ตอบกลับจาก Haliviq', replyLabel: 'ตอบกลับ:', prev: 'ก่อนหน้า', next: 'ถัดไป', sample: 'ตัวอย่างโครงสร้าง ข้อมูลสมมติ ไม่ใช่รีวิวจริง' },
  en: { h: 'What our clients say', sub: 'Reviews from real clients', verified: 'Verified client', reply: 'Reply from Haliviq', replyLabel: 'Reply:', prev: 'Prev', next: 'Next', sample: 'Layout preview. Sample data, not real reviews' },
}
const PER = 5

function Stars({ n }: { n: number }) {
  return <span aria-label={`${n}/5`} style={{ color: '#DBC575', letterSpacing: 2 }}>{'★'.repeat(n)}<span style={{ opacity: .25 }}>{'★'.repeat(5 - n)}</span></span>
}

export default function Testimonials({ lang, reviews: rv, videos: vd, sample: sm }: { lang?: Lang; reviews?: Review[]; videos?: VideoReview[]; sample?: boolean }) {
  // No real data yet -> show the clearly-labelled placeholder layout
  const noReal = !rv && !vd && !REVIEWS.length && !VIDEOS.length
  const reviews = rv ?? (noReal ? (lang === 'en' ? SAMPLE_REVIEWS_EN : SAMPLE_REVIEWS) : REVIEWS)
  const videos = vd ?? (noReal ? (lang === 'en' ? SAMPLE_VIDEOS_EN : SAMPLE_VIDEOS) : VIDEOS)
  const sample = sm ?? noReal
  const t = lang === 'en' ? T.en : T.th
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState<VideoReview | null>(null)
  const [mob, setMob] = useState(false)
  useEffect(() => { const m = window.matchMedia('(max-width: 639px)'); const f = () => setMob(m.matches); f(); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  const strip = useRef<HTMLDivElement>(null)
  const slide = (d: number) => strip.current && strip.current.scrollBy({ left: d * strip.current.clientWidth * 0.6, behavior: 'smooth' })
  const arrow = (side: 'left' | 'right'): React.CSSProperties => ({ position: 'absolute', top: '50%', [side]: -6, transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', background: 'var(--accent)', color: '#fff', zIndex: 2, fontSize: 20 })
  if (!reviews.length && !videos.length) return null
  const pages = Math.max(1, Math.ceil(reviews.length / PER))
  const avg = reviews.length ? reviews.reduce((a, r) => a + r.stars, 0) / reviews.length : 0
  const shown = mob ? reviews : reviews.slice(page * PER, page * PER + PER)
  const border = 'rgb(var(--fg) / 0.1)'
  return (
    <section className="py-20" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 600 }}>{t.h}</h2>
          {reviews.length > 0 && !sample && (
            <p className="mt-3 text-sm" style={{ color: 'rgb(var(--fg) / 0.7)' }}>
              <Stars n={Math.round(avg)} /> <b>{avg.toFixed(1)}</b> · {reviews.length} {lang === 'en' ? 'reviews' : 'รีวิว'}
            </p>
          )}
          <p className="mt-1 text-sm" style={{ color: 'rgb(var(--fg) / 0.55)' }}>{t.sub}</p>
          {sample && <p className="mt-3 inline-block text-xs px-3 py-1 rounded-full" style={{ background: 'rgb(245 179 1 / .15)', color: '#F5B301' }}>{t.sample}</p>}
        </div>

        {videos.length > 0 && (
          <div className="relative mb-8">
          <button type="button" aria-label="prev" onClick={() => slide(-1)} style={arrow('left')} className="hidden sm:block">‹</button>
          <button type="button" aria-label="next" onClick={() => slide(1)} style={arrow('right')} className="hidden sm:block">›</button>
          <div ref={strip} className="tm-strip flex gap-3 overflow-x-auto pb-4 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.tm-strip::-webkit-scrollbar{display:none}`}</style>
            {videos.map((v, i) => (
              <button key={i} type="button" onClick={() => v.src && setOpen(v)} className="relative shrink-0 grow-0 snap-start overflow-hidden rounded-lg basis-[calc((100%_-_6px)/1.5)] sm:basis-[calc((100%_-_48px)/5)]" style={{ aspectRatio: '150 / 230', border: `1px solid ${border}` }} aria-label={v.name}>
                <img src={v.thumb} alt={v.name} className="w-full h-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center"><span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,.55)', color: '#fff' }}>▶</span></span>
                <span className="absolute bottom-0 inset-x-0 p-2 text-xs text-left" style={{ background: 'linear-gradient(transparent,rgba(0,0,0,.7))', color: '#fff' }}>{v.name}</span>
              </button>
            ))}
          </div>
          </div>
        )}

        <div className="tm-strip flex gap-3 overflow-x-auto snap-x snap-mandatory items-stretch pb-2 sm:block sm:space-y-4 sm:overflow-visible sm:pb-0" style={{ scrollbarWidth: 'none' }}>
          {shown.map((r, i) => (
            <article key={i} className="grid sm:grid-cols-[220px_1fr] gap-y-3 sm:gap-y-5 p-4 sm:p-8 rounded-2xl sm:rounded-3xl text-[13px] sm:text-base shrink-0 snap-start basis-[calc((100%_-_6px)/1.5)] sm:basis-auto" style={{ background: 'rgb(var(--fg) / 0.04)', border: `1px solid ${border}` }}>
              <div className="sm:pr-8 sm:border-r flex sm:block items-center gap-3 sm:gap-4" style={{ borderColor: border }}>
                <div className="w-11 h-11 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 font-semibold text-lg sm:text-2xl" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff' }}>{r.name.replace(/^คุณ/, '').charAt(0)}</div>
                <div className="sm:mt-5">
                  <div className="font-bold text-[13px] sm:text-base leading-tight">{r.name}</div>
                  {r.place && <div className="text-[11px] sm:text-sm" style={{ color: 'rgb(var(--fg) / 0.65)' }}>{r.place}</div>}
                  <div className="mt-1 sm:mt-2 text-[11px] sm:text-sm font-semibold" style={{ color: '#2FB26B' }}>✓ {t.verified}</div>
                  {r.date && <div className="sm:mt-4 sm:pt-4 sm:border-t text-[11px] sm:text-sm" style={{ borderColor: border, color: 'rgb(var(--fg) / 0.55)' }}>{r.date}</div>}
                </div>
              </div>
              <div className="min-w-0 sm:pl-8">
                <div className="text-[16px] sm:text-[26px] tracking-[2px] sm:tracking-[4px]" style={{ color: '#DBC575' }} aria-label={`${r.stars}/5`}>{'★'.repeat(r.stars)}<span style={{ opacity: .25 }}>{'★'.repeat(5 - r.stars)}</span></div>
                <h3 className="mt-2 sm:mt-3 text-[14px] sm:text-[20px]" style={{ fontWeight: 700, lineHeight: 1.4, letterSpacing: 0 }}>{r.title}</h3>
                <p className="mt-1.5 sm:mt-2 leading-relaxed text-[12px] sm:text-base" style={{ color: 'rgb(var(--fg) / 0.8)' }}>{r.text}</p>
                {r.reply && (
                  <div className="mt-3 pt-3 sm:mt-5 sm:pt-5 border-t" style={{ borderColor: border }}>
                    <p className="font-bold text-[13px] sm:text-lg">{t.replyLabel}</p>
                    <p className="mt-1 leading-relaxed text-[12px] sm:text-base" style={{ color: 'rgb(var(--fg) / 0.75)' }}>{r.reply}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && !mob && (
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
          <video src={open.src} controls autoPlay playsInline className="max-h-[85vh] max-w-full rounded-lg" onClick={e => e.stopPropagation()} />
          <button type="button" aria-label="close" className="absolute top-4 right-4 text-white text-3xl">×</button>
        </div>
      )}
    </section>
  )
}
