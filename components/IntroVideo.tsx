import type { Lang } from '@/lib/i18n'

// Short brand intro. Made with AI from real Haliviq work (disclosed on the video itself).
export default function IntroVideo({ lang }: { lang?: Lang }) {
  const en = lang === 'en'
  return (
    <section className="py-16" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-md mx-auto px-4 text-center">
        <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 600 }}>{en ? 'Haliviq in 20 seconds' : 'Haliviq ใน 20 วินาที'}</h2>
        <video
          src="/videos/haliviq-intro.mp4"
          poster="/videos/haliviq-intro-poster.jpg"
          controls
          playsInline
          preload="none"
          className="mt-6 w-full"
          style={{ aspectRatio: '9 / 16', background: '#0B0A16' }}
        />
        <p className="mt-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{en ? 'This video was made with AI from our real work.' : 'วิดีโอนี้สร้างด้วย AI จากผลงานจริงของเรา'}</p>
      </div>
    </section>
  )
}
