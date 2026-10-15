export type Pkg = { stage: string; name: string; status: string; who: string; what: string; parts: string[] }

const GRAD = { background: 'linear-gradient(135deg,var(--purple),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as const

export default function BrandingPackages({ pkgs, heading, intro, forLabel, partsLabel, situationLabel }: {
  pkgs: Pkg[]; heading: string; intro: string; forLabel: string; partsLabel: string; situationLabel: string; pkgLabel?: string
}) {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>{heading}</h2>
        <p className="mb-10 max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgb(var(--fg) / 0.75)' }}>{intro}</p>

        <nav aria-label={heading} className="flex flex-wrap gap-2 mb-14">
          {pkgs.map((x, k) => (
            <a key={x.name} href={`#pkg-${k}`} className="px-3 py-1.5 rounded-full text-sm" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.1)', color: 'rgb(var(--fg) / 0.85)' }}>
              {x.stage}
            </a>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.12)' }}>
          {pkgs.map((p, k) => (
            <article key={p.name} id={`pkg-${k}`} className="grid lg:grid-cols-[120px_minmax(0,1fr)] gap-x-10 gap-y-4 py-12" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.12)', scrollMarginTop: 100 }}>
              <span aria-hidden="true" style={{ fontWeight: 700, fontSize: '3rem', lineHeight: 1, ...GRAD }}>{String(k + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem,3vw,2.25rem)', lineHeight: 1.3 }}>{p.name}</h3>
                <p className="t-label mb-1.5">{situationLabel}</p>
                <p className="mb-6 max-w-3xl" style={{ color: 'var(--ink)', lineHeight: 1.75, fontSize: '1.05rem' }}>{p.status}</p>
                <p className="mb-2 max-w-3xl" style={{ color: 'var(--ink)', fontWeight: 500 }}>{forLabel} {p.who}</p>
                <p className="mb-5 max-w-3xl" style={{ color: 'rgb(var(--fg) / 0.85)', lineHeight: 1.8 }}>{p.what}</p>
                <p className="t-label mb-2">{partsLabel}</p>
                <div className="flex flex-wrap gap-1.5 max-w-3xl">
                  {p.parts.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full" style={{ fontSize: '0.78rem', background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.1)', color: 'rgb(var(--fg) / 0.85)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
