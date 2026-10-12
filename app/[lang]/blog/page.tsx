import type { Lang } from '@/lib/i18n'
import BlogClient from './BlogClient'

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  return (
    <BlogClient
      lang={lang}
      newsletter={
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>{isEN ? 'Newsletter' : 'จดหมายข่าว'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Get Insights Every Two Weeks</> : <>รับบทความใหม่ทุกสองสัปดาห์</>}
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: 'var(--ink)', fontWeight:400 }}>
              {isEN ? 'One email every two weeks with new articles, case studies and practical tools from the Haliviq team. No spam, and you can unsubscribe anytime.' : 'ส่งอีเมลทุกสองสัปดาห์ รวมบทความใหม่ กรณีศึกษา และเครื่องมือที่เอาไปใช้ได้จริงจากทีม Haliviq ไม่ส่งสแปม และยกเลิกได้ตลอด'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder={isEN ? 'your@email.com' : 'อีเมลของคุณ'} className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-colors" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.15)', color: 'var(--ink)', fontWeight:400 }} />
              <button className="px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight:500 }}>
                {isEN ? 'Subscribe' : 'สมัครรับ'}
              </button>
            </div>
          </div>
        </section>
      }
    />
  )
}
