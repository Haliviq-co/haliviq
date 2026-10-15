import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

type Feature  = { icon: string; title: string; desc: string; detail?: string }
type Step     = { no: string; title: string; desc: string; detail?: string }
type FAQ      = { q: string; a: string }
type Related  = { label: string; href: string }
type Outcome  = { stat: string; label: string; desc?: string }
type CaseStudy = { tag: string; title: string; result: string; desc: string; img?: string }

type Props = {
  lang?: Lang
  badge: string; title: string; subtitle: string; heroDesc?: string; heroBullets?: string[]
  color?: string; bg?: string
  heroImg?: string; whyImg?: string; whyImg2?: string; featureImg?: string; processImg?: string
  heroSlot?: React.ReactNode
  heroDark?: boolean
  heroMotion?: boolean
  heroCtaLabel?: string
  heroShowSecondaryCta?: boolean
  postHeroSlot?: React.ReactNode
  whyTitle?: string; whyDesc?: string; whyPoints?: string[]
  features?: Feature[]; steps?: Step[]; outcomes?: Outcome[]
  caseStudies?: CaseStudy[]; faqs?: FAQ[]; related?: Related[]
  ctaTitle?: string; ctaDesc?: string
}

const IP = ({ label, height=400, color='var(--purple)', bg='var(--purple-bg)' }: {label:string;height?:number;color?:string;bg?:string}) => (
  <div className="w-full rounded-2xl flex flex-col items-center justify-center gap-3"
    style={{background:bg, minHeight:height, border:`2px dashed ${color}25`}}>
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{background:`${color}15`}}>
      <i className="ti ti-photo" style={{fontSize:26, color}} aria-hidden="true"/>
    </div>
    <p className="text-sm" style={{color, opacity:0.5, fontWeight:400}}>{label}</p>
    <p className="text-xs" style={{color, opacity:0.3, fontWeight:400}}>ขนาดที่แนะนำ 1440 × 640px</p>
  </div>
)

export default function ServiceLayout({
  lang: langProp,
  badge, title, subtitle, heroDesc, heroBullets,
  color='var(--purple)', bg='var(--purple-bg)',
  heroImg, whyImg, whyImg2, featureImg, processImg,
  heroSlot, heroDark=false, heroMotion=false, heroCtaLabel, heroShowSecondaryCta=true, postHeroSlot,
  whyTitle, whyDesc, whyPoints,
  features, steps, outcomes, caseStudies, faqs, related,
  ctaTitle='อยากเริ่มโปรเจกต์กับเราไหม?',
  ctaDesc='คุยกับเราครั้งแรกฟรี เราตอบกลับภายใน 24 ชั่วโมง และถ้าต้องการ เราลงนาม NDA ให้ได้เลย',
}: Props) {
  const lang = langProp ?? 'th'
  const tr = t[lang] as any
  const prefix = `/${lang}`

  return (
    <>
      <Navbar lang={lang} tr={tr}/>
      <main>

        {/* Hero */}
        {heroDark ? (
          <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.35]"
              style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
            />
            {heroMotion && (<>
              <div className="svc-orb svc-orb-a" aria-hidden="true" />
              <div className="svc-orb svc-orb-b" aria-hidden="true" />
              <div className="svc-orb svc-orb-c" aria-hidden="true" />
              <div className="svc-sweep" aria-hidden="true" />
            </>)}
            <div
              className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
            />
            <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h1 className={`t-display mb-6 leading-relaxed${heroMotion ? ' svc-rise' : ''}`} style={{ color: 'var(--ink)', fontSize: 'clamp(2.8rem,6vw,5.5rem)' }}>
                    {title}
                    {subtitle && (
                      <>
                        <br />
                        <span className={heroMotion ? 'svc-grad-text' : undefined} style={heroMotion ? undefined : { background: `linear-gradient(135deg,${color},var(--lime))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{subtitle}</span>
                      </>
                    )}
                  </h1>
                  <p className={`leading-relaxed mb-10${heroMotion ? ' svc-rise' : ''}`} style={{ fontSize: '1.15rem', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400, maxWidth: 560, animationDelay: '.15s' }}>{heroDesc}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`${prefix}/contact`}
                      className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                      style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                    >
                      {heroCtaLabel ?? (lang === 'en' ? 'Get Started' : 'เริ่มเลย')}
                      <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    {heroShowSecondaryCta && (
                      <Link href={`${prefix}/work`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgb(var(--fg) / 0.2)', color: 'var(--ink)', fontWeight: 400 }}>
                        {lang === 'en' ? 'View Work' : 'ดูผลงาน'}
                      </Link>
                    )}
                  </div>
                </div>
                <div className={`relative${heroMotion ? ' svc-hero-slot' : ''}`}>
                  {heroSlot}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="pt-[80px] bg-[var(--bg)]">
            <div className="gradient-bar" />
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: bg, color }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: color }} />{badge}
                  </div>
                  <h1 className="t-display text-[clamp(2.8rem,6vw,5.5rem)] text-[color:var(--ink)] mb-6 leading-relaxed">
                    {title}<br />
                    <span style={{ background: `linear-gradient(135deg,${color},var(--purple-light))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{subtitle}</span>
                  </h1>
                  <p className="t-body leading-relaxed mb-8" style={{ fontSize: "1.2rem", color: "rgb(var(--fg) / 0.88)" }}>{heroDesc}</p>
                  {heroBullets && (
                    <ul className="space-y-3 mb-10">
                      {(heroBullets ?? []).map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: bg }}>
                            <i className="ti ti-check" style={{ fontSize: 12, color }} aria-hidden="true" />
                          </div>
                          <span className="leading-relaxed" style={{ fontWeight: 400, fontSize: "1.1rem", color: "rgb(var(--fg) / 0.88)" }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-4">
                    <Link href={`${prefix}/contact`} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                      {lang === 'en' ? 'Free Consultation' : 'ปรึกษาฟรี'}
                      <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    <Link href={`${prefix}/work`} className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                      {lang === 'en' ? 'View Work' : 'ดูผลงาน'}
                    </Link>
                  </div>
                </div>
                {heroImg
                  ? <div className="w-full rounded-2xl overflow-hidden">
                    <img src={heroImg} alt={title} className="w-full h-auto block" />
                  </div>
                  : <IP label="Hero Image / Screenshot" height={440} color={color} bg={bg} />
                }
              </div>
            </div>
          </section>
        )}

        {postHeroSlot}

      </main>
      <Footer lang={lang} tr={tr}/>
    </>
  )
}
