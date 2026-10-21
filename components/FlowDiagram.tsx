import type { Lang } from '@/lib/i18n'
import type { ReactNode } from 'react'

// An animated "idea -> what Haliviq does -> outcomes" diagram. Pure SVG + CSS, no client JS.
const COPY = {
  en: {
    label: 'How we work',
    h2: 'From idea to impact, with one team',
    sub: 'Tell us what you want to build or fix. We take care of the rest, from design to launch and long-term support.',
    from: 'Your idea', fromSub: 'or a problem to solve',
    mid: 'Haliviq',
    services: ['Web & mobile apps', 'AI & automation', 'UX / UI design', 'ERP / CRM', 'Cloud & security', 'SEO / AEO / GEO'],
    out: 'What you get',
    outcomes: ['Live product', 'Happier customers', 'Lower costs', 'Secure by design', 'Ready to scale', 'Ongoing support'],
    pill: 'Technology that actually moves your business forward.',
  },
  th: {
    label: 'วิธีทำงานของเรา',
    h2: 'จากไอเดียสู่ผลลัพธ์ ด้วยทีมเดียว',
    sub: 'เล่าให้เราฟังว่าอยากสร้างหรืออยากแก้อะไร ที่เหลือเราดูแลให้ ตั้งแต่ออกแบบ เปิดใช้งาน ไปจนถึงดูแลต่อเนื่อง',
    from: 'ไอเดียของคุณ', fromSub: 'หรือปัญหาที่อยากแก้',
    mid: 'Haliviq',
    services: ['เว็บและแอปมือถือ', 'AI และระบบอัตโนมัติ', 'ออกแบบ UX / UI', 'ERP / CRM', 'Cloud และความปลอดภัย', 'SEO / AEO / GEO'],
    out: 'สิ่งที่คุณจะได้',
    outcomes: ['ใช้งานได้จริง', 'ลูกค้าพึงพอใจ', 'ลดต้นทุน', 'ปลอดภัย', 'พร้อมขยาย', 'ดูแลต่อเนื่อง'],
    pill: 'เทคโนโลยีที่ช่วยให้ธุรกิจของคุณไปต่อได้จริง',
  },
} as const


// Simple line icons (24x24 grid), one per service / outcome
const ICON_SVC = [
  <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M12 18h.01" /></>,
  <><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>,
  <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></>,
  <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
  <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>,
]
const ICON_OUT = [
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  <><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></>,
  <><path d="M22 17l-8.5-8.5-5 5L2 7" /><path d="M16 17h6v-6" /></>,
  <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  <><path d="M22 7l-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></>,
  <><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></>,
]
const stroke = { fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
function MiniIcon({ children, color, size = 20 }: { children: ReactNode; color: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...stroke} aria-hidden="true" style={{ flex: 'none' }}>{children}</svg>
}

const CSS = `
.fd-dot { fill: #53C3D7; }
.fd-path { fill: none; stroke: rgb(var(--fg) / 0.35); stroke-width: 2; stroke-dasharray: 2 7; stroke-linecap: round; }
.fd-pulse { animation: fd-pulse 2.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
@keyframes fd-pulse { 0%,100% { opacity: .55; transform: scale(1) } 50% { opacity: 1; transform: scale(1.06) } }
.fd-chip { animation: fd-chip 4.2s ease-in-out infinite; }
@keyframes fd-chip { 0%,100% { opacity: .85 } 50% { opacity: 1 } }
.fd-mline { position: relative; width: 2px; height: 44px; margin: 0 auto; background-image: linear-gradient(rgb(var(--fg) / 0.35) 40%, transparent 0); background-size: 2px 8px; }
.fd-mline::after { content: ''; position: absolute; left: -3px; top: 0; width: 8px; height: 8px; border-radius: 50%; background: #53C3D7; animation: fd-down 1.8s linear infinite; }
@keyframes fd-down { from { top: 0; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } to { top: 100%; opacity: 0 } }
@media (prefers-reduced-motion: reduce) {
  .fd-dot, .fd-mline::after { display: none; }
  .fd-pulse, .fd-chip { animation: none; }
}
`

export default function FlowDiagram({ lang }: { lang: Lang }) {
  const c = COPY[lang === 'en' ? 'en' : 'th']
  const card = { fill: 'rgb(var(--fg) / 0.05)', stroke: 'rgb(var(--fg) / 0.14)', strokeWidth: 1.5 } as const
  const ink = 'var(--ink)'
  const soft = 'rgb(var(--fg) / 0.7)'

  // dotted routes with a dot travelling along each
  const routes = [
    { id: 'fd-r1', d: 'M240 215 H340', dur: '2.2s', begin: '0s' },
    { id: 'fd-r2', d: 'M760 215 H860', dur: '2.2s', begin: '1.1s' },
    { id: 'fd-r3', d: 'M140 280 V462 Q140 478 156 478 H300 M800 478 H944 Q960 478 960 462 V330', dur: '6s', begin: '0.4s' },
  ]

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
        <p className="t-label mb-4">{c.label}</p>
        <h2 className="t-display mb-4 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2rem,4.2vw,3.2rem)' }}>{c.h2}</h2>
        <p className="mb-12 max-w-2xl" style={{ color: 'rgb(var(--fg) / 0.8)', fontSize: '1.1rem', fontWeight: 400 }}>{c.sub}</p>

        {/* Desktop: one SVG that scales */}
        <div className="hidden md:block">
          <svg viewBox="0 0 1100 520" role="img" aria-label={c.h2} className="w-full h-auto" style={{ fontFamily: 'inherit' }}>
            <defs>
              <linearGradient id="fd-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7B6EF6" /><stop offset="1" stopColor="#53C3D7" />
              </linearGradient>
            </defs>

            {routes.map((r) => (<path key={r.id} id={r.id} d={r.d} className="fd-path" />))}
            {routes.map((r) => (
              <circle key={r.id + 'd'} r="5" className="fd-dot">
                <animateMotion dur={r.dur} begin={r.begin} repeatCount="indefinite"><mpath href={`#${r.id}`} /></animateMotion>
              </circle>
            ))}

            {/* left card */}
            <rect x="40" y="150" width="200" height="130" rx="26" {...card} />
            <g transform="translate(140 188)">
              <path d="M0 -16 L16 -7 V12 L0 21 L-16 12 V-7 Z" fill="none" stroke="url(#fd-g)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M0 -16 V4 M0 4 L16 -7 M0 4 L-16 -7" fill="none" stroke="url(#fd-g)" strokeWidth="3" strokeLinejoin="round" />
            </g>
            <text x="140" y="238" textAnchor="middle" fontSize="20" fontWeight="600" fill={ink}>{c.from}</text>
            <text x="140" y="260" textAnchor="middle" fontSize="13" fill={soft}>{c.fromSub}</text>

            {/* middle card */}
            <rect x="340" y="70" width="420" height="300" rx="28" {...card} strokeDasharray="5 6" />
            <image href="/haliviq-logo-light.svg" x="440" y="84" width="220" height="45" className="fd-pulse logo-for-dark" />
            <image href="/haliviq-logo.svg" x="440" y="84" width="220" height="45" className="fd-pulse logo-for-light" />
            {c.services.map((s, i) => {
              const col = i % 2, row = Math.floor(i / 2)
              const x = 358 + col * 196, y = 150 + row * 66
              return (
                <g key={s} className="fd-chip" style={{ animationDelay: `${i * 0.5}s` }}>
                  <rect x={x} y={y} width="188" height="48" rx="24" fill="rgb(var(--fg) / 0.07)" stroke="rgb(var(--fg) / 0.14)" />
                  <circle cx={x + 26} cy={y + 24} r="15" fill={i % 2 ? 'rgba(83,195,215,0.18)' : 'rgba(123,110,246,0.22)'} />
                  <g transform={`translate(${x + 15} ${y + 13}) scale(0.9167)`} stroke={i % 2 ? '#53C3D7' : '#9A90FF'} {...stroke}>{ICON_SVC[i]}</g>
                  <text x={x + 49} y={y + 29} fontSize="12.5" fontWeight="500" fill={ink}>{s}</text>
                </g>
              )
            })}

            {/* right card */}
            <rect x="860" y="110" width="200" height="220" rx="26" {...card} />
            <text x="960" y="145" textAnchor="middle" fontSize="15" fontWeight="600" fill={soft}>{c.out}</text>
            {c.outcomes.map((o, i) => (
              <g key={o} className="fd-chip" style={{ animationDelay: `${i * 0.4}s` }}>
                <g transform={`translate(879 ${166 + i * 24}) scale(0.75)`} stroke="#53C3D7" {...stroke}>{ICON_OUT[i]}</g>
                <text x="903" y={180 + i * 24} fontSize="14" fill={ink}>{o}</text>
              </g>
            ))}

            {/* bottom pill */}
            <rect x="300" y="446" width="500" height="64" rx="32" fill="rgb(var(--fg) / 0.08)" stroke="rgb(var(--fg) / 0.16)" strokeWidth="1.5" />
            <text x="550" y="484" textAnchor="middle" fontSize="18" fontWeight="600" fill={ink}>{c.pill}</text>
          </svg>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col items-stretch">
          <div className="rounded-3xl p-6 text-center" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.14)' }}>
            <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{c.from}</p>
            <p className="text-sm" style={{ color: 'rgb(var(--fg) / 0.7)' }}>{c.fromSub}</p>
          </div>
          <div className="fd-mline" aria-hidden="true" />
          <div className="rounded-3xl p-5" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px dashed rgb(var(--fg) / 0.2)' }}>
            <img loading="lazy" decoding="async" src="/haliviq-logo-light.svg" alt="Haliviq" className="logo-for-dark mx-auto mb-4 h-8 w-auto" />
            <img loading="lazy" decoding="async" src="/haliviq-logo.svg" alt="" aria-hidden="true" className="logo-for-light mx-auto mb-4 h-8 w-auto" />
            <div className="flex flex-wrap gap-2 justify-center">
              {c.services.map((s, i) => (
                <span key={s} className="px-3.5 py-2 rounded-full text-sm inline-flex items-center gap-2" style={{ background: 'rgb(var(--fg) / 0.07)', border: '1px solid rgb(var(--fg) / 0.14)', color: 'var(--ink)' }}><MiniIcon color={i % 2 ? '#53C3D7' : '#9A90FF'} size={18}>{ICON_SVC[i]}</MiniIcon>{s}</span>
              ))}
            </div>
          </div>
          <div className="fd-mline" aria-hidden="true" />
          <div className="rounded-3xl p-5" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.14)' }}>
            <p className="mb-3 text-center" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 600 }}>{c.out}</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm" style={{ color: 'var(--ink)' }}>
              {c.outcomes.map((o, i) => (<li key={o} className="flex items-center gap-2"><MiniIcon color="#53C3D7" size={20}>{ICON_OUT[i]}</MiniIcon>{o}</li>))}
            </ul>
          </div>
          <p className="mt-6 rounded-full px-5 py-4 text-center text-sm" style={{ background: 'rgb(var(--fg) / 0.08)', border: '1px solid rgb(var(--fg) / 0.16)', color: 'var(--ink)', fontWeight: 600 }}>{c.pill}</p>
        </div>
      </div>
    </section>
  )
}
