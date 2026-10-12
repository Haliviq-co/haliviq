'use client'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

export default function CTA({ lang, tr }: Props) {
  const c = (tr as any).ctaSimple

  return (
    <section className="relative overflow-hidden py-28 lg:py-40" style={{ background: 'var(--bg)' }}>
      {/* starfield */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Ccircle cx='14' cy='22' r='1' fill='%237B6EF6' opacity='0.9'/%3E%3Ccircle cx='58' cy='8' r='0.7' fill='%237B6EF6' opacity='0.6'/%3E%3Ccircle cx='97' cy='44' r='1.1' fill='%237B6EF6' opacity='0.8'/%3E%3Ccircle cx='142' cy='16' r='0.6' fill='%237B6EF6' opacity='0.5'/%3E%3Ccircle cx='176' cy='60' r='1' fill='%237B6EF6' opacity='0.7'/%3E%3Ccircle cx='30' cy='90' r='0.8' fill='%237B6EF6' opacity='0.6'/%3E%3Ccircle cx='75' cy='115' r='1.2' fill='%237B6EF6' opacity='0.9'/%3E%3Ccircle cx='120' cy='95' r='0.6' fill='%237B6EF6' opacity='0.4'/%3E%3Ccircle cx='160' cy='130' r='0.9' fill='%237B6EF6' opacity='0.6'/%3E%3Ccircle cx='200' cy='105' r='0.7' fill='%237B6EF6' opacity='0.5'/%3E%3Ccircle cx='10' cy='150' r='0.9' fill='%237B6EF6' opacity='0.7'/%3E%3Ccircle cx='55' cy='175' r='0.6' fill='%237B6EF6' opacity='0.5'/%3E%3Ccircle cx='100' cy='160' r='1' fill='%237B6EF6' opacity='0.8'/%3E%3Ccircle cx='145' cy='190' r='0.7' fill='%237B6EF6' opacity='0.6'/%3E%3Ccircle cx='190' cy='170' r='1.1' fill='%237B6EF6' opacity='0.9'/%3E%3Ccircle cx='210' cy='210' r='0.6' fill='%237B6EF6' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      />
      {/* soft brand glow, off to the right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%', right: '-15%', width: '55%', aspectRatio: '1/1',
          background: 'radial-gradient(circle, rgba(123,110,246,0.16) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-10%', width: '40%', aspectRatio: '1/1',
          background: 'radial-gradient(circle, rgba(83,195,215,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-10">
        <h2
          className="t-display mb-5"
          style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', maxWidth: 720 }}
        >
          {c.h2}
        </h2>
        <p
          className="t-body mb-10"
          style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}
        >
          {c.sub}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
              color: '#fff',
              fontWeight: 500,
              boxShadow: '0 8px 28px rgba(123,110,246,0.35)',
            }}
          >
            {c.btn}
            <svg width="15" height="15" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a
            href={`mailto:${c.email}`}
            className="text-sm"
            style={{ color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
          >
            {c.email}
          </a>
        </div>
      </div>
    </section>
  )
}
