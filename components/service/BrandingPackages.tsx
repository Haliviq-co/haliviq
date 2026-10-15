'use client'
import { useState } from 'react'

export type Pkg = { stage: string; name: string; status: string; who: string; what: string; parts: string[] }

export default function BrandingPackages({ pkgs, heading, intro, forLabel, partsLabel, situationLabel }: {
  pkgs: Pkg[]; heading: string; intro: string; forLabel: string; partsLabel: string; situationLabel: string
}) {
  const [i, setI] = useState(0)
  const p = pkgs[i]
  return (
    <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', lineHeight: 1.25 }}>{heading}</h2>
          <p style={{ color: 'rgb(var(--fg) / 0.85)', lineHeight: 1.8 }}>{intro}</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-10 items-stretch">
          <div role="tablist" aria-label={heading} className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {pkgs.map((x, k) => {
              const on = k === i
              return (
                <button
                  key={x.name}
                  role="tab"
                  id={`pkg-tab-${k}`}
                  aria-selected={on}
                  aria-controls="pkg-panel"
                  onClick={() => setI(k)}
                  className="text-left rounded-2xl px-5 py-4 shrink-0 lg:shrink transition-colors"
                  style={{
                    minWidth: 220,
                    border: `1px solid ${on ? 'var(--accent)' : 'rgb(var(--fg) / 0.14)'}`,
                    background: on ? 'var(--purple-bg)' : 'transparent',
                    color: 'var(--ink)',
                  }}
                >
                  <span className="block text-xs mb-1" style={{ color: on ? 'var(--accent)' : 'rgb(var(--fg) / 0.65)', letterSpacing: '0.03em' }}>{x.stage}</span>
                  <span className="block" style={{ fontWeight: 600, lineHeight: 1.35 }}>{x.name}</span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id="pkg-panel"
            aria-labelledby={`pkg-tab-${i}`}
            className="rounded-3xl p-7 md:p-10 flex flex-col gap-6"
            style={{ background: 'linear-gradient(145deg, #150C3C 0%, #3B2D98 55%, #6B5AE0 100%)', color: '#fff', minHeight: 380 }}
          >
            <div>
              <p className="text-xs mb-3" style={{ letterSpacing: '0.06em', color: 'rgb(255 255 255 / 0.75)' }}>{situationLabel}</p>
              <p style={{ fontSize: 'clamp(1.15rem,2vw,1.5rem)', lineHeight: 1.55, fontWeight: 500 }}>{p.status}</p>
            </div>
            <div style={{ height: 1, background: 'rgb(255 255 255 / 0.22)' }} />
            <div>
              <h3 className="mb-2" style={{ fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', fontWeight: 600 }}>{p.name}</h3>
              <p className="mb-1 text-sm" style={{ color: 'rgb(255 255 255 / 0.8)' }}>{forLabel} {p.who}</p>
              <p style={{ color: 'rgb(255 255 255 / 0.92)', lineHeight: 1.8 }}>{p.what}</p>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ letterSpacing: '0.06em', color: 'rgb(255 255 255 / 0.75)' }}>{partsLabel}</p>
              <ul className="flex flex-wrap gap-2">
                {p.parts.map((x) => (
                  <li key={x} className="rounded-full px-4 py-1.5 text-sm" style={{ background: 'rgb(255 255 255 / 0.14)', border: '1px solid rgb(255 255 255 / 0.28)' }}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
