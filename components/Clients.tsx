'use client'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang?: Lang; tr: T }

const clients = [
  { name: 'NFI สถาบันอาหาร', name_en: 'NFI (National Food Institute)', img: '/images/clients/nfi.png' },
  { name: 'กระทรวงพาณิชย์', name_en: 'Ministry of Commerce', img: '/images/clients/ministry-commerce.png' },
  { name: 'กระทรวงพลังงาน', name_en: 'Ministry of Energy', img: '/images/clients/ministry-energy.png' },
  { name: 'กระทรวงแรงงาน', name_en: 'Ministry of Labour', img: '/images/clients/ministry-labour.png' },
  { name: 'DITP', name_en: 'DITP', img: '/images/clients/ditp.png' },
]

export default function Clients({ lang, tr }: Props) {
  return (
    <section className="py-16 border-y overflow-hidden" style={{ background: 'var(--bg-1)', borderColor: 'rgb(var(--fg) / 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mb-12 text-center">
        <p style={{
          fontFamily: 'var(--font-main)',
          fontWeight: 400,
          fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
          color: 'rgb(var(--fg) / 0.85)',
          letterSpacing: '-0.01em',
        }}>
          {tr.clients.label}
        </p>
      </div>

      <div className="marquee-wrap relative">
        <div className="absolute left-0 inset-y-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-1), transparent)' }}/>
        <div className="absolute right-0 inset-y-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-1), transparent)' }}/>
        <div className="marquee-inner marquee-slow">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center justify-center px-12 shrink-0">
              <img
                src={c.img}
                alt={lang === 'en' ? c.name_en : c.name}
                className="h-14 w-auto object-contain client-logo"
                style={{ maxWidth: '180px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .client-logo {
          opacity: 0.75;
          filter: grayscale(1) brightness(1.8);
          transition: opacity 0.3s, filter 0.3s;
        }
        html[data-theme="light"] .client-logo { filter: grayscale(1) brightness(0.4); opacity: 0.65; }
        html[data-theme="light"] .client-logo:hover { filter: grayscale(1) brightness(0.2); opacity: 1; }
        .client-logo:hover {
          opacity: 1;
          filter: grayscale(1) brightness(2);
        }
      ` }} />
    </section>
  )
}
