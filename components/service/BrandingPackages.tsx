export type Pkg = { stage: string; name: string; status: string; who: string; what: string; parts: string[] }

export default function BrandingPackages({ pkgs, heading, intro, forLabel, partsLabel, situationLabel, pkgLabel }: {
  pkgs: Pkg[]; heading: string; intro: string; forLabel: string; partsLabel: string; situationLabel: string; pkgLabel: string
}) {
  return (
    <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', lineHeight: 1.25 }}>{heading}</h2>
          <p style={{ color: 'rgb(var(--fg) / 0.85)', lineHeight: 1.8 }}>{intro}</p>
        </div>

        <nav aria-label={heading} className="flex flex-wrap gap-3 mb-12">
          {pkgs.map((x, k) => (
            <a key={x.name} href={`#pkg-${k}`} className="rounded-full px-5 py-2.5 text-sm"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'var(--purple-bg)' }}>
              {x.stage}
            </a>
          ))}
        </nav>

        <div className="grid gap-6">
          {pkgs.map((p, k) => (
            <article key={p.name} id={`pkg-${k}`} className="rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #150C3C 0%, #3B2D98 55%, #7A68E8 100%)', color: '#fff', scrollMarginTop: 100 }}>
              <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" style={{ fontSize: 44, lineHeight: 1, fontWeight: 600, color: 'transparent', WebkitTextStroke: '1px rgb(255 255 255 / 0.55)' }}>{String(k + 1).padStart(2, '0')}</span>
                    <span className="text-xs" style={{ letterSpacing: '0.06em', color: 'rgb(255 255 255 / 0.78)' }}>{pkgLabel}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 600, lineHeight: 1.3 }}>{p.name}</h3>
                  <div>
                    <p className="text-xs mb-2" style={{ letterSpacing: '0.06em', color: 'rgb(255 255 255 / 0.78)' }}>{situationLabel}</p>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.7, fontWeight: 500 }}>{p.status}</p>
                  </div>
                </div>
                <div className="p-7 md:p-10 flex flex-col justify-center gap-4" style={{ background: 'rgb(255 255 255 / 0.07)', borderLeft: '1px solid rgb(255 255 255 / 0.14)' }}>
                  <p style={{ fontWeight: 500 }}>{forLabel} {p.who}</p>
                  <p style={{ color: 'rgb(255 255 255 / 0.92)', lineHeight: 1.8 }}>{p.what}</p>
                  <div>
                    <p className="text-xs mb-3" style={{ letterSpacing: '0.06em', color: 'rgb(255 255 255 / 0.78)' }}>{partsLabel}</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.parts.map((x) => (
                        <li key={x} className="rounded-full px-4 py-1.5 text-sm" style={{ background: 'rgb(255 255 255 / 0.14)', border: '1px solid rgb(255 255 255 / 0.28)' }}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
