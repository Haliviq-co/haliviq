import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

const cases = [
  { tag_th:'FinTech · Mobile App', tag_en:'FinTech · Mobile App', title_th:'Digital Banking Super App', title_en:'Digital Banking Super App', img:'/images/work/project-1.jpg', href:'/work' },
  { tag_th:'ค้าปลีก · E-Commerce', tag_en:'Retail · E-Commerce', title_th:'Omnichannel Retail Platform', title_en:'Omnichannel Retail Platform', img:'/images/work/project-2.jpg', href:'/work' },
  { tag_th:'สุขภาพ · Web Platform', tag_en:'Healthcare · Web', title_th:'Patient Digital Ecosystem', title_en:'Patient Digital Ecosystem', img:'/images/work/project-3.jpg', href:'/work' },
  { tag_th:'AI · Enterprise', tag_en:'AI · Enterprise', title_th:'AI Document Intelligence', title_en:'AI Document Intelligence', img:'/images/work/project-4.jpg', href:'/work' },
  { tag_th:'FinTech · Payment', tag_en:'FinTech · Payment', title_th:'Payment Gateway Platform', title_en:'Payment Gateway Platform', img:'/images/work/project-5.jpg', href:'/work' },
]

export default function Work({ lang, tr }: Props) {
  const w = tr.work
  const prefix = `/${lang}`
  const isEN = lang === 'en'

  return (
    <section id="work" className="bg-[var(--bg)] py-16 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="t-display text-[clamp(1.8rem,4vw,3rem)] text-[color:var(--ink)]">
            <span style={{fontWeight:400}}>{w.label}</span>
            {' '}
            <span style={{fontWeight:400, color:'var(--text-3)', fontSize:'clamp(0.9rem,1.8vw,1.3rem)'}}>
              — {isEN ? 'Our Work' : 'ผลงานของเรา'}
            </span>
          </h2>
          <Link href={`${prefix}/work`}
            className="text-sm border-b pb-0.5 hover:text-[var(--purple)] hover:border-[var(--purple)] transition-colors whitespace-nowrap"
            style={{fontWeight:400, color:'var(--ink)', borderColor:'var(--ink)'}}>
            {w.seeAll}
          </Link>
        </div>

        {/* 5-card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {cases.map((c, i) => (
            <Link key={i} href={`${prefix}${c.href}`}
              className="group relative overflow-hidden rounded-2xl"
              style={{aspectRatio:'3/4'}}>

              {/* BG placeholder */}
              <div className="absolute inset-0" style={{background:'var(--purple-bg)'}}>
                <div className="w-full h-full flex items-center justify-center opacity-20">
                  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                    <rect x="3" y="8" width="34" height="24" rx="4" stroke="var(--purple)" strokeWidth="1.5"/>
                    <circle cx="13" cy="18" r="3" stroke="var(--purple)" strokeWidth="1.5"/>
                    <path d="M3 28l9-7 7 5 7-9 11 11" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Image */}
              {c.img && <img loading="lazy" decoding="async" src={c.img} alt={isEN ? c.title_en : c.title_th}
                className="absolute inset-0 w-full h-full object-cover"/>}

              {/* Gradient */}
              <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)'}}/>

              {/* Hover tint */}
              <div className="absolute inset-0 bg-[var(--purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>

              {/* Text */}
              <div className="theme-dark absolute bottom-0 left-0 right-0 p-4" style={{ background: 'transparent' }}>
                <h3 className="text-[color:var(--ink)] leading-snug mb-1" style={{fontWeight:400, fontSize:'0.95rem'}}>
                  {isEN ? c.title_en : c.title_th}
                </h3>
                <p className="text-[color:rgb(var(--fg)/0.55)] text-xs" style={{fontWeight:400}}>
                  {isEN ? c.tag_en : c.tag_th}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[rgb(var(--fg)/0.2)] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
