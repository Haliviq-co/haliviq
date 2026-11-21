'use client'
import { useEffect, useRef } from 'react'
import { type Lang } from '@/lib/i18n'

/*
  Brand film under the client logos. The video only loads and plays once it
  scrolls into view, so it adds nothing to the first page load.
*/
export default function AdVideo({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (v.preload !== 'auto') { v.preload = 'auto'; v.load() }
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    }, { threshold: 0.35 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const th = lang === 'th'
  return (
    <section className="theme-dark relative overflow-hidden py-20 lg:py-28" style={{ background: '#050310' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(91,78,212,0.28) 0%, rgba(5,3,16,0) 70%)' }} />
      <div className="relative max-w-6xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block rounded-full mb-5"
            style={{ background: 'linear-gradient(135deg,#A99CF8 0%,#53C3D7 100%)', color: '#08070F', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '8px 18px' }}>
            {th ? 'ดูวิธีทำงานของเรา' : 'See how we work'}
          </span>
          <h2 className="t-display text-[clamp(2rem,4.2vw,3.5rem)]" style={{ color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            {th ? 'จากความวุ่นวาย ' : 'From chaos '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(135deg,var(--accent) 0%,var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {th ? 'สู่ระบบที่ชัดเจน' : 'to clarity.'}
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}>
            {th ? 'ทีมเดียวที่ดูแลกลยุทธ์ ดีไซน์ พัฒนาระบบ และ AI จนงานใช้ได้จริง' : 'One team for strategy, design, engineering and AI, in the room until it ships.'}
          </p>
        </div>

        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-video"
          style={{ border: '1px solid rgba(169,156,248,0.25)', boxShadow: '0 40px 120px -30px rgba(91,78,212,0.55)' }}>
          <video ref={ref} muted loop playsInline preload="none" poster="/videos/haliviq-ad.jpg" controls
            className="absolute inset-0 w-full h-full object-cover" aria-label={th ? 'วิดีโอแนะนำ HALIVIQ' : 'HALIVIQ brand film'}>
            {/* AV1 first (~4.8 MB), H.264 fallback */}
            <source src="/videos/haliviq-ad-av1.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
            <source src="/videos/haliviq-ad.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
