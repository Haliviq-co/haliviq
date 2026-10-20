'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { type Lang, type T } from '@/lib/i18n'
import SocialIcons from '@/components/SocialIcons'
type Props = { lang: Lang; tr: T }

export default function Footer({ lang, tr }: Props) {
  const f = tr.footer as any
  const prefix = `/${lang}`
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()

  const switchLang = (target: Lang) => {
    if (target === lang) return
    const segments = pathname.split('/')
    const rest = segments.slice(2).join('/')
    router.push(`/${target}${rest ? '/' + rest : ''}`)
  }

  return (
    <footer style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Our Global Offices */}
        <div className="pt-20 lg:pt-24 pb-4 text-center">
          <h2 className="t-display mb-3" style={{ color: 'var(--accent)', fontSize: 'clamp(1.8rem,3.2vw,2.8rem)' }}>
            {lang === 'en' ? 'Our Global Offices' : 'สำนักงานของเรา'}
          </h2>
          <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.65)', fontSize: '1.05rem', fontWeight: 400 }}>
            {lang === 'en' ? 'Our main studio is in Bangkok, with an office address in the USA as well. Call us, message us on LINE or WhatsApp, or send an email, and we will get back to you within 24 hours.' : 'สำนักงานหลักของเราอยู่ที่กรุงเทพฯ และมีที่อยู่สำนักงานในสหรัฐอเมริกาด้วย โทรหาเรา ทักผ่าน LINE หรือ WhatsApp หรือส่งอีเมลมาก็ได้ เราตอบกลับภายใน 24 ชั่วโมง'}
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { label: f.thailandLabel, lines: f.addressLines as string[], phone: f.phone, tel: 'tel:+66909189009', icon: 'ti-phone' },
              { label: f.usaLabel, lines: f.usaAddressLines as string[], phone: f.whatsapp, tel: 'https://wa.me/66909149236', icon: 'ti-brand-whatsapp' },
            ].map(o => (
              <a key={o.label} href={o.tel} {...(o.tel.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="glass-hover block rounded-xl p-8" style={{ border: '1px solid rgb(var(--fg) / 0.1)' }}>
                <p className="mb-4 uppercase" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '0.04em' }}>{o.label}</p>
                <div className="mb-5" style={{ color: 'rgb(var(--fg) / 0.7)', fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.8 }}>
                  {o.lines.map((line: string) => <p key={line}>{line}</p>)}
                </div>
                <span className="inline-flex items-center gap-2" style={{ color: 'var(--accent-2)', fontWeight: 500, fontSize: '0.95rem' }}>
                  <i className={`ti ${o.icon}`} style={{ fontSize: 16 }} aria-hidden="true" />
                  {o.phone}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: 'rgb(var(--fg) / 0.45)', fontWeight: 400 }}>{f.legalName}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 py-16 lg:py-20">
          {/* Brand column */}
          <div className="col-span-2">
            <img loading="lazy" decoding="async" src="/haliviq-logo-light.svg" alt="Haliviq" className="logo-for-dark h-9 w-auto mb-4" />
            <img loading="lazy" decoding="async" src="/haliviq-logo.svg" alt="Haliviq" className="logo-for-light h-9 w-auto mb-4" />
            <p style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '0.9rem', fontWeight: 400 }}>
              {f.locations}
            </p>

            <SocialIcons tone="accent" lang={lang} className="mt-5 mb-8" />

            <div className="mt-3" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.8 }}>
              <p>{f.phone}</p>
              <p>WhatsApp: <a href="https://wa.me/66909149236" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--ink)] transition-colors">{f.whatsapp}</a></p>
              <p>LINE: {f.line}</p>
              <p>{f.salesLabel}: info@haliviq.com</p>
              <p>{f.supportLabel}: info@haliviq.com</p>
            </div>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-xl text-sm transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
            >
              <i className="ti ti-video" style={{ fontSize: 17 }} aria-hidden="true" />
              {lang === 'en' ? 'Book a free call on Google Meet' : 'จองคุยฟรีผ่าน Google Meet'}
            </a>
          </div>

          {Object.entries(f.sections).map(([heading, items]) => (
            <div key={heading}>
              <p className="mb-4" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)' }}>{heading}</p>
              <ul className="space-y-0">
                {(items as { l: string; h: string }[]).map(i => (
                  <li key={i.h}>
                    <Link href={`${prefix}${i.h}`}
                      className="block py-1.5 hover:text-[color:var(--accent)] transition-colors"
                      style={{ fontWeight: 400, fontSize: '0.9rem', color: 'rgb(var(--fg) / 0.85)' }}>{i.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Language switcher row */}
        <div className="flex items-center gap-3 pb-8" style={{ borderTop: '1px solid rgb(var(--fg) / 0.08)', paddingTop: 28 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--fg) / 0.45)" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M2.5 12h19M12 2.5c2.5 2.7 3.8 6 3.8 9.5s-1.3 6.8-3.8 9.5c-2.5-2.7-3.8-6-3.8-9.5S9.5 5.2 12 2.5z" />
          </svg>
          {(['en', 'th'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              className="text-xs transition-colors"
              style={{
                fontWeight: lang === l ? 500 : 300,
                color: lang === l ? 'var(--ink)' : 'rgb(var(--fg) / 0.62)',
              }}
            >
              {l === 'th' ? 'ไทย' : 'English'}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6" style={{ borderTop: '1px solid rgb(var(--fg) / 0.08)' }}>
          <p className="text-xs" style={{ color: 'rgb(var(--fg) / 0.4)', fontWeight: 400 }}>© {year} {f.rights}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { h: '/privacy', l: f.privacy },
              { h: '/terms', l: f.terms },
              { h: '/cookies', l: lang === 'en' ? 'Cookie Policy' : 'นโยบายคุกกี้' },
              { h: '/code-of-conduct', l: lang === 'en' ? 'Code of Conduct' : 'จรรยาบรรณธุรกิจ' },
              { h: '/anti-corruption', l: lang === 'en' ? 'ABAC Policy' : 'นโยบายต่อต้านการทุจริต (ABAC)' },
            ].map(i => (
              <Link key={i.h} href={`${prefix}${i.h}`} className="text-xs hover:text-[color:var(--ink)] transition-colors" style={{ color: 'rgb(var(--fg) / 0.4)', fontWeight: 400 }}>{i.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
