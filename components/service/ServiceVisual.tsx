// Shared visual tokens for the service illustrations
const glass = 'rgb(var(--fg) / 0.05)'
const glassBorder = '1px solid rgb(var(--fg) / 0.1)'
const dim = 'rgb(var(--fg) / 0.35)'

function Panel({ children, style, className }: { children: any; style?: any; className?: string }) {
  return (
    <div className={`rounded-lg px-3 py-2.5 ${className || ''}`} style={{ background: glass, border: glassBorder, backdropFilter: 'blur(2px)', ...style }}>
      {children}
    </div>
  )
}

function Bar({ w, color = 'var(--purple-light)' }: { w: number; color?: string }) {
  return <div className="h-1.5 rounded-full" style={{ width: `${w}%`, background: color }} />
}

function Check({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <i className="ti ti-check" style={{ color: 'var(--accent-2)', fontSize: 11 }} aria-hidden="true" />
      <span style={{ fontSize: 10, color: 'rgb(var(--fg) / 0.85)' }}>{label}</span>
    </div>
  )
}

// One bespoke mini-illustration per service, in Haliviq's dark / purple / lime visual language
export function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'digital-transformation':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
          <Panel style={{ width: 74 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>MANUAL</div>
            <Bar w={70} color="rgb(var(--fg) / 0.2)" />
            <div className="h-1.5" />
            <Bar w={45} color="rgb(var(--fg) / 0.2)" />
          </Panel>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
            <i className="ti ti-bolt" style={{ color: 'var(--accent-2)', fontSize: 16 }} aria-hidden="true" />
          </div>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <Panel style={{ width: 74 }} className="flex flex-col gap-2">
            <Check label="Approvals" />
            <Check label="Operations" />
          </Panel>
        </div>
      )
    case 'branding':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <div className="rounded-2xl flex items-center justify-center" style={{ width: 84, height: 84, background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', animation: 'floatY 5s ease-in-out infinite' }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: '#15112A', lineHeight: 1 }}>H</span>
          </div>
          <div className="flex flex-col gap-2">
            <Panel style={{ width: 96 }}>
              <div style={{ fontSize: 9, color: dim, marginBottom: 5 }}>PALETTE</div>
              <div className="flex gap-1">
                {['#7B6EF6', '#B8A9FA', '#53C3D7', '#F5D76E'].map((c) => (<span key={c} className="flex-1 h-4 rounded" style={{ background: c }} />))}
              </div>
            </Panel>
            <Panel style={{ width: 96 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>Aa</span>
              <div className="mt-1.5"><Bar w={70} color="rgb(var(--fg) / 0.2)" /></div>
            </Panel>
          </div>
        </div>
      )
    case 'backend-api':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
          <Panel style={{ width: 128 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>API</div>
            {[['GET', '/orders', '200'], ['POST', '/pay', '201'], ['GET', '/users', '200']].map(([m, r, c], i) => (
              <div key={r} className="flex items-center gap-1.5 mb-1.5" style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.8)', fontFamily: 'monospace' }}>
                <span className="svc-ping" style={{ width: 5, height: 5, borderRadius: 9, background: 'var(--lime)', animationDelay: `${i * 0.5}s` }} />
                <span style={{ color: 'var(--purple-light)' }}>{m}</span><span>{r}</span><span style={{ marginLeft: 'auto', color: 'var(--lime)' }}>{c}</span>
              </div>
            ))}
          </Panel>
          <div className="h-px w-5" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 8px)' }} />
          <div className="w-12 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(155,107,255,0.2)', border: glassBorder }}>
            <i className="ti ti-database" style={{ color: 'var(--accent-2)', fontSize: 22 }} aria-hidden="true" />
          </div>
        </div>
      )
    case 'design-systems':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 200 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>COMPONENTS</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-7 rounded-md flex items-center justify-center svc-tile" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))', fontSize: 9, color: '#fff' }}>Button</div>
              <div className="h-7 rounded-md flex items-center px-2 svc-tile" style={{ border: glassBorder, animationDelay: '.4s' }}><Bar w={60} color="rgb(var(--fg) / 0.2)" /></div>
              <div className="h-7 rounded-md flex items-center px-2 svc-tile" style={{ border: glassBorder, animationDelay: '.8s' }}><span className="w-6 h-3 rounded-full" style={{ background: 'var(--lime)' }} /></div>
              <div className="h-7 rounded-md flex items-center justify-center gap-1 svc-tile" style={{ animationDelay: '1.2s', border: glassBorder }}>
                {['var(--purple)', 'var(--lime)', '#53C3D7'].map((c) => (<span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />))}
              </div>
            </div>
          </Panel>
        </div>
      )
    case 'product-discovery':
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
          <div className="flex items-center gap-2 w-full justify-center">
            {['PROBLEM', 'TEST', 'DECIDE'].map((l, i) => (
              <div key={l} className="flex items-center gap-2">
                <Panel style={{ padding: '6px 10px', animationDelay: `${i * 0.5}s` }} className="svc-tile"><span style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.85)' }}>{l}</span></Panel>
                {i < 2 && <i className="ti ti-arrow-right" style={{ color: 'var(--lime)', fontSize: 12 }} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {[['BUILD', 'var(--lime)'], ['PIVOT', 'var(--purple-light)'], ['STOP', 'rgb(var(--fg) / 0.35)']].map(([l, c], i) => (
              <span key={l} className="svc-tile" style={{ fontSize: 9, padding: '3px 10px', borderRadius: 99, border: `1px solid ${c}`, color: c, animationDelay: `${i * 0.7}s` }}>{l}</span>
            ))}
          </div>
        </div>
      )
    case 'qa-testing':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 190 }}>
            <div className="flex items-center justify-between mb-2"><span style={{ fontSize: 9, color: dim }}>TEST RUN</span><span style={{ fontSize: 9, color: 'var(--lime)' }}>42 / 45</span></div>
            <div className="h-1.5 rounded-full overflow-hidden mb-3" style={{ background: 'rgb(var(--fg) / 0.1)' }}><div className="h-full svc-fill" style={{ width: '90%', background: 'linear-gradient(90deg,var(--purple),var(--lime))', transformOrigin: 'left' }} /></div>
            <div className="flex flex-col gap-1.5">
              <Check label="Login flow" /><Check label="Checkout" />
              <div className="flex items-center gap-1.5"><i className="ti ti-bug svc-ping" style={{ color: '#FF8A8A', fontSize: 11 }} aria-hidden="true" /><span style={{ fontSize: 10, color: 'rgb(var(--fg) / 0.85)' }}>Payment edge case</span></div>
            </div>
          </Panel>
        </div>
      )
    case 'rapid-prototyping':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {[0, 1].map((n) => (
            <div key={n} className="rounded-xl relative svc-tile" style={{ width: 70, height: 112, padding: 7, background: 'rgb(var(--fg) / 0.06)', border: glassBorder, animationDelay: `${n * 0.8}s` }}>
              <div className="h-1.5 rounded-full mb-2" style={{ width: '60%', background: 'rgb(var(--fg) / 0.25)' }} />
              <div className="rounded-md mb-2" style={{ height: 40, background: n ? 'linear-gradient(135deg,var(--lime),var(--purple-light))' : 'linear-gradient(135deg,var(--purple),var(--purple-light))', opacity: 0.6 }} />
              <div className="h-4 rounded-md" style={{ background: 'rgb(var(--fg) / 0.1)' }} />
              {n === 0 && <span className="absolute svc-ping" style={{ right: 10, bottom: 12, width: 14, height: 14, borderRadius: 99, border: '2px solid var(--lime)' }} />}
            </div>
          ))}
          <i className="ti ti-arrow-right" style={{ position: 'absolute', color: 'var(--lime)', fontSize: 16 }} aria-hidden="true" />
        </div>
      )
    case 'support':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
          <div className="rounded-full flex items-center justify-center svc-ping-ring" style={{ width: 62, height: 62, background: 'rgba(155,107,255,0.2)', border: '1px solid var(--purple-light)' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>24/7</span>
          </div>
          <Panel style={{ width: 116 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>UPTIME 99.9%</div>
            <div className="flex items-end gap-0.5" style={{ height: 26 }}>
              {Array.from({ length: 14 }).map((_, i) => (<span key={i} className="flex-1 rounded-sm svc-tile" style={{ height: `${i === 8 ? 55 : 100}%`, background: i === 8 ? '#F5D76E' : 'var(--lime)', opacity: 0.8, animationDelay: `${i * 0.12}s` }} />))}
            </div>
          </Panel>
        </div>
      )
    case 'user-research':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <div className="flex flex-col gap-2">
            <Panel style={{ width: 96, padding: '6px 8px' }}><Bar w={80} color="rgb(var(--fg) / 0.22)" /><div className="h-1" /><Bar w={50} color="rgb(var(--fg) / 0.15)" /></Panel>
            <Panel style={{ width: 96, padding: '6px 8px', marginLeft: 16, animationDelay: '.5s' }} className="svc-tile"><Bar w={65} color="var(--purple-light)" /><div className="h-1" /><Bar w={40} color="rgb(var(--fg) / 0.15)" /></Panel>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {['#F5D76E', '#B8A9FA', '#53C3D7', '#B8A9FA', '#F5D76E', '#53C3D7'].map((c, i) => (<span key={i} className="rounded svc-tile" style={{ width: 22, height: 22, background: c, opacity: 0.85, animationDelay: `${i * 0.25}s` }} />))}
          </div>
        </div>
      )
    case 'ux-ui-design':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 190 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>DESIGN CANVAS</div>
            <div className="flex gap-1.5 mb-2">
              {['var(--purple)', 'var(--purple-light)', 'var(--lime)', '#fff'].map((c, i) => (
                <span key={i} className="w-3.5 h-3.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="h-10 rounded-md mb-2" style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 100%)', opacity: 0.6 }} />
            <Bar w={80} color="rgb(var(--fg) / 0.2)" />
          </Panel>
        </div>
      )
    case 'web-development':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 120 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>product.tsx</div>
            {[60, 85, 40, 70].map((w, i) => (
              <div key={i} className="mb-1.5"><Bar w={w} color="rgb(var(--fg) / 0.18)" /></div>
            ))}
          </Panel>
          <Panel style={{ width: 88 }} className="self-end">
            <div className="flex items-center gap-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
              <span style={{ fontSize: 9, color: dim }}>LIVE PREVIEW</span>
            </div>
            <div className="h-6 rounded flex items-end gap-0.5 px-1" style={{ background: 'rgba(155,107,255,0.15)' }}>
              {[40, 70, 50, 90, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 4, background: 'var(--lime)', borderRadius: 2 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'mobile-apps':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl relative" style={{ width: 92, height: 150, background: 'rgb(var(--fg) / 0.06)', border: glassBorder, padding: 8 }}>
            <div className="w-8 h-1 rounded-full mx-auto mb-3" style={{ background: 'rgb(var(--fg) / 0.25)' }} />
            <div style={{ fontSize: 9, color: 'var(--ink)', marginBottom: 6 }}>Your app</div>
            <div className="rounded-lg mb-2" style={{ height: 34, background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 100%)', opacity: 0.55 }} />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-md h-8" style={{ background: 'rgb(var(--fg) / 0.08)' }} />
              <div className="rounded-md h-8" style={{ background: 'rgb(var(--fg) / 0.08)' }} />
            </div>
            <div className="absolute rounded-full flex items-center justify-center" style={{ width: 20, height: 20, background: 'var(--lime)', bottom: -8, right: -8 }}>
              <i className="ti ti-check" style={{ fontSize: 12, color: 'var(--ink)' }} aria-hidden="true" />
            </div>
          </div>
        </div>
      )
    case 'application-modernization':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <Panel style={{ width: 76 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>MONOLITH</div>
            <div className="space-y-1.5">
              <Bar w={90} color="rgb(var(--fg) / 0.18)" />
              <Bar w={65} color="rgb(var(--fg) / 0.18)" />
              <Bar w={80} color="rgb(var(--fg) / 0.18)" />
            </div>
          </Panel>
          <i className="ti ti-arrow-right" style={{ color: 'var(--accent-2)', fontSize: 16 }} aria-hidden="true" />
          <div className="flex flex-col gap-1.5">
            {['UI', 'API', 'Data'].map((s) => (
              <div key={s} className="rounded px-2 py-1 flex items-center gap-1.5" style={{ background: glass, border: glassBorder }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
                <span style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.85)' }}>{s} service</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cloud-services-migration':
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <i className="ti ti-cloud" style={{ color: 'var(--accent)', fontSize: 42 }} aria-hidden="true" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md flex flex-col items-center justify-center gap-1" style={{ width: 34, height: 26, background: glass, border: glassBorder }}>
                <span className="w-3.5 h-0.5 rounded-full" style={{ background: 'var(--lime)' }} />
                <span className="w-3.5 h-0.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.25)' }} />
              </div>
            ))}
          </div>
        </div>
      )
    case 'quality-assurance-testing':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 150 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>TEST SUITE</div>
            <div className="space-y-2">
              <Check label="Unit tests" />
              <Check label="API integration" />
              <Check label="End-to-end" />
              <Check label="Performance" />
            </div>
          </Panel>
        </div>
      )
    case 'finish-your-vibe-coded-app':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 96 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>AI PROTOTYPE</div>
            <div style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.4)' }} className="font-mono">const app = build()</div>
            <div className="mt-2 rounded px-1.5 py-1" style={{ background: 'rgba(155,107,255,0.15)' }}>
              <span style={{ fontSize: 9, color: 'var(--accent)' }}>3 issues found</span>
            </div>
          </Panel>
          <i className="ti ti-arrow-right" style={{ color: 'var(--accent-2)', fontSize: 16 }} aria-hidden="true" />
          <Panel style={{ width: 96 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>PRODUCTION</div>
            <Check label="Tests passing" />
            <div className="h-1.5" />
            <Check label="Secured" />
          </Panel>
        </div>
      )
    case 'forward-deployed-engineering':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 72 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>YOUR SYSTEMS</div>
            <div className="space-y-1.5">
              <Bar w={70} color="rgb(var(--fg) / 0.18)" />
              <Bar w={55} color="rgb(var(--fg) / 0.18)" />
            </div>
          </Panel>
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
            <i className="ti ti-user-code" style={{ color: 'var(--accent-2)', fontSize: 18 }} aria-hidden="true" />
          </div>
          <Panel style={{ width: 72 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>PRODUCTION</div>
            <Check label="Pilot live" />
          </Panel>
        </div>
      )
    case 'ai':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <div className="grid grid-rows-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(155,107,255,0.4)', border: '1px solid var(--purple-light)' }} />
            ))}
          </div>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,rgb(var(--fg) / 0.2) 0 3px,transparent 3px 7px)' }} />
          <Panel style={{ width: 118 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>ASSISTANT</div>
            <div className="rounded px-1.5 py-1 mb-1.5" style={{ background: 'rgb(var(--fg) / 0.08)' }}>
              <span style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.85)' }}>Check Q4 numbers?</span>
            </div>
            <div className="rounded px-1.5 py-1" style={{ background: 'rgba(155,107,255,0.2)' }}>
              <span style={{ fontSize: 9, color: 'var(--accent-2)' }}>Revenue up 18%</span>
            </div>
          </Panel>
        </div>
      )
    case 'ai-voice-agents':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div className="flex items-center gap-1.5 mb-3">
              <i className="ti ti-microphone" style={{ color: 'var(--accent-2)', fontSize: 13 }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: dim }}>LISTENING &amp; RESPONDING</span>
            </div>
            <div className="flex items-end gap-[3px] h-8">
              {[40, 70, 30, 90, 55, 75, 35, 60, 45, 80, 30, 65].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 3, background: i % 2 ? 'var(--purple-light)' : 'var(--lime)', borderRadius: 2, opacity: 0.85 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'data-analytics':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 168 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>SALES BY REGION</div>
            <div className="space-y-1.5">
              {[{ l: 'APAC', w: 82 }, { l: 'EMEA', w: 55 }, { l: 'NA', w: 91 }, { l: 'LATAM', w: 38 }].map((r) => (
                <div key={r.l} className="flex items-center gap-2">
                  <span style={{ fontSize: 8, color: dim, width: 30 }}>{r.l}</span>
                  <div className="flex-1"><Bar w={r.w} color="var(--lime)" /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'ecommerce':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 180 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>THE EVERYDAY STORE</div>
            <div className="grid grid-cols-3 gap-2">
              {['ti-shopping-bag', 'ti-bottle', 'ti-shirt'].map((ic) => (
                <div key={ic} className="rounded-md flex items-center justify-center" style={{ height: 32, background: 'rgba(155,107,255,0.18)' }}>
                  <i className={`ti ${ic}`} style={{ color: 'var(--accent-2)', fontSize: 15 }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'line-mini-apps':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl" style={{ width: 96, height: 130, background: 'rgb(var(--fg) / 0.06)', border: glassBorder, padding: 9 }}>
            <div style={{ fontSize: 9, color: 'var(--ink)', marginBottom: 8 }}>LINE / Mini App</div>
            <div className="rounded-lg flex items-center justify-center mb-2" style={{ height: 40, background: 'rgba(0,180,90,0.18)', border: '1px solid rgba(0,200,100,0.35)' }}>
              <i className="ti ti-brand-line" style={{ color: 'var(--accent-2)', fontSize: 20 }} aria-hidden="true" />
            </div>
            <div className="rounded-md px-2 py-1.5 flex items-center gap-1.5" style={{ background: 'rgba(155,107,255,0.2)' }}>
              <i className="ti ti-check" style={{ color: 'var(--accent-2)', fontSize: 11 }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: 'var(--ink)' }}>Booked!</span>
            </div>
          </div>
        </div>
      )
    case 'enterprise-solutions':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: 190, height: 130 }}>
            <div className="absolute rounded-lg flex flex-col items-center justify-center gap-1" style={{ width: 50, top: '38%', left: '50%', transform: 'translate(-50%,-50%)', height: 44, background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
              <i className="ti ti-building-factory" style={{ color: 'var(--accent-2)', fontSize: 16 }} aria-hidden="true" />
              <span style={{ fontSize: 8, color: 'var(--ink)' }}>ERP</span>
            </div>
            {[
              { l: 'CRM', top: 0, left: 0 },
              { l: 'POS', top: 0, right: 0 },
              { l: 'FINANCE', bottom: 0, left: 0 },
              { l: 'INVENTORY', bottom: 0, right: 0 },
            ].map((b: any) => (
              <div key={b.l} className="absolute rounded-md px-2 py-1" style={{ ...b, background: glass, border: glassBorder }}>
                <span style={{ fontSize: 8, color: 'rgb(var(--fg) / 0.85)' }}>{b.l}</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cybersecurity':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
            <div className="absolute rounded-full" style={{ width: 80, height: 80, border: '1px dashed rgb(var(--fg) / 0.15)' }} />
            <i className="ti ti-shield-check" style={{ color: 'var(--accent)', fontSize: 44 }} aria-hidden="true" />
            <div className="absolute rounded-md px-1.5 py-1 flex items-center gap-1" style={{ bottom: -6, right: -14, background: 'rgba(0,0,0,0.4)', border: glassBorder }}>
              <i className="ti ti-check" style={{ color: 'var(--accent-2)', fontSize: 10 }} aria-hidden="true" />
              <span style={{ fontSize: 8, color: 'var(--ink)' }}>Protected</span>
            </div>
          </div>
        </div>
      )
    case 'pdpa-compliance':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 168 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>YOUR DATA. YOUR CHOICE.</div>
            <div className="space-y-2">
              {[{ l: 'Essential services', on: true }, { l: 'Analytics', on: false }, { l: 'Personalization', on: false }].map((r) => (
                <div key={r.l} className="flex items-center justify-between">
                  <span style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.85)' }}>{r.l}</span>
                  <span className="rounded-full relative" style={{ width: 22, height: 12, background: r.on ? 'var(--lime)' : 'rgb(var(--fg) / 0.15)' }}>
                    <span className="absolute rounded-full bg-white" style={{ width: 9, height: 9, top: 1.5, left: r.on ? 11 : 2 }} />
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'support-maintenance':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 178 }}>
            <div className="flex justify-between mb-3">
              {[{ l: 'UPTIME', v: '99.99%' }, { l: 'LATENCY', v: '42ms' }, { l: 'ERRORS', v: '0' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 7, color: dim }}>{s.l}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink)', fontWeight: 500 }}>{s.v}</div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-[2px] h-6">
              {[30, 55, 40, 70, 45, 85, 50, 65, 35, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 3, background: 'var(--lime)', borderRadius: 1, opacity: 0.8 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'automation':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-5">
          <Panel style={{ width: 70 }} className="text-center"><i className="ti ti-mail" style={{ color: 'var(--accent-2)', fontSize: 18 }} aria-hidden="true" /><div style={{ fontSize: 9, color: dim, marginTop: 3 }}>TRIGGER</div></Panel>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,217,61,0.18)', border: '1px solid var(--lime)' }}><i className="ti ti-settings" style={{ color: 'var(--lime)', fontSize: 20 }} aria-hidden="true" /></div>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <Panel style={{ width: 70 }} className="flex flex-col gap-1.5"><Check label="Sheet" /><Check label="LINE" /><Check label="CRM" /></Panel>
        </div>
      )
    case 'brand-experience':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          {[['ti-id-badge-2', 'CARD'], ['ti-shopping-bag', 'PACK'], ['ti-signboard', 'SIGN']].map(([ic, l], i) => (
            <div key={l} className="rounded-xl flex flex-col items-center justify-center gap-2 svc-tile" style={{ width: 62, height: 96, background: i === 1 ? 'linear-gradient(135deg,var(--purple),var(--purple-light))' : 'rgb(var(--fg) / 0.06)', border: glassBorder, animationDelay: `${i * 0.6}s` }}>
              <i className={`ti ${ic}`} style={{ fontSize: 24, color: i === 1 ? '#fff' : 'var(--lime)' }} aria-hidden="true" />
              <span style={{ fontSize: 8, color: i === 1 ? '#fff' : dim }}>{l}</span>
            </div>
          ))}
        </div>
      )
    case 'cloud-devops':
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5">
          <div className="flex items-center gap-1.5">
            {['COMMIT', 'BUILD', 'DEPLOY', 'LIVE'].map((l, i) => (
              <div key={l} className="flex items-center gap-1.5">
                <span className="svc-tile rounded-md px-2 py-1" style={{ fontSize: 8, border: `1px solid ${i === 3 ? 'var(--lime)' : 'rgb(var(--fg) / 0.15)'}`, color: i === 3 ? 'var(--lime)' : 'rgb(var(--fg) / 0.8)', animationDelay: `${i * 0.5}s` }}>{l}</span>
                {i < 3 && <i className="ti ti-chevron-right" style={{ fontSize: 10, color: dim }} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <i className="ti ti-cloud" style={{ fontSize: 40, color: 'var(--accent-2)' }} aria-hidden="true" />
            <div className="flex flex-col gap-1.5">{[70, 50, 85].map((w, i) => (<div key={i} className="h-2 rounded-full svc-fill" style={{ width: w, background: 'linear-gradient(90deg,var(--purple),var(--lime))', transformOrigin: 'left', animationDelay: `${i * 0.4}s` }} />))}</div>
          </div>
        </div>
      )
    case 'erp-crm':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: 190, height: 130 }}>
            <div className="absolute w-12 h-12 rounded-xl flex items-center justify-center svc-ping-ring" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(255,217,61,0.18)', border: '1px solid var(--lime)' }}><i className="ti ti-database" style={{ color: 'var(--lime)', fontSize: 20 }} aria-hidden="true" /></div>
            {[['Sales', 0, 0], ['Stock', 1, 0], ['Money', 0, 1], ['HR', 1, 1]].map(([l, x, y], i) => (
              <Panel key={String(l)} className="absolute svc-tile" style={{ width: 58, padding: '5px 7px', [x ? 'right' : 'left']: 0, [y ? 'bottom' : 'top']: 0, animationDelay: `${i * 0.5}s` }}><span style={{ fontSize: 9, color: 'rgb(var(--fg) / 0.85)' }}>{l}</span></Panel>
            ))}
          </div>
        </div>
      )
    case 'growth-strategy':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 200 }}>
            <div className="flex items-center justify-between mb-2"><span style={{ fontSize: 9, color: dim }}>GROWTH</span><span style={{ fontSize: 10, color: 'var(--lime)' }}>↗ +128%</span></div>
            <div className="flex items-end gap-1.5" style={{ height: 70 }}>
              {[22, 30, 38, 46, 58, 72, 92].map((h, i) => (<span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 6 ? 'var(--lime)' : 'linear-gradient(180deg,var(--purple-light),var(--purple))' }} />))}
            </div>
          </Panel>
        </div>
      )
    case 'seo-aeo-geo':
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-6">
          <Panel style={{ width: 200 }} className="flex items-center gap-2"><i className="ti ti-search" style={{ color: 'var(--accent-2)', fontSize: 12 }} aria-hidden="true" /><span style={{ fontSize: 10, color: 'rgb(var(--fg) / 0.85)' }}>best service in bangkok</span><span className="svc-ping" style={{ width: 1, height: 11, background: 'var(--lime)' }} /></Panel>
          <Panel style={{ width: 200, borderColor: 'var(--lime)' }} className="flex items-center gap-2 svc-tile"><span style={{ fontSize: 10, fontWeight: 700, color: 'var(--lime)' }}>#1</span><Bar w={70} color="rgb(var(--fg) / 0.3)" /></Panel>
          <Panel style={{ width: 200 }} className="flex items-center gap-2"><i className="ti ti-sparkles svc-ping" style={{ color: 'var(--lime)', fontSize: 12 }} aria-hidden="true" /><span style={{ fontSize: 9, color: dim }}>AI answer cites you</span></Panel>
        </div>
      )
    case 'web-mobile':
      return (
        <div className="absolute inset-0 flex items-end justify-center gap-4 pb-8">
          <div className="rounded-lg" style={{ width: 150, height: 98, border: glassBorder, background: 'rgb(var(--fg) / 0.06)', padding: 7 }}>
            <div className="h-1.5 rounded-full mb-2" style={{ width: '40%', background: 'rgb(var(--fg) / 0.25)' }} />
            <div className="rounded-md mb-1.5" style={{ height: 38, background: 'linear-gradient(135deg,var(--purple),var(--purple-light))', opacity: 0.6 }} />
            <div className="flex gap-1.5">{[0, 1, 2].map((i) => (<div key={i} className="flex-1 h-4 rounded svc-tile" style={{ background: i === 1 ? 'var(--lime)' : 'rgb(var(--fg) / 0.1)', opacity: 0.8, animationDelay: `${i * 0.4}s` }} />))}</div>
          </div>
          <div className="rounded-xl" style={{ width: 54, height: 90, border: glassBorder, background: 'rgb(var(--fg) / 0.06)', padding: 6 }}>
            <div className="rounded-md mb-1.5" style={{ height: 34, background: 'linear-gradient(135deg,var(--purple),var(--purple-light))', opacity: 0.6 }} />
            <div className="h-3 rounded svc-tile" style={{ background: 'var(--lime)', opacity: 0.8 }} />
          </div>
        </div>
      )
    default:
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(155,107,255,0.2)', border: glassBorder }}>
            <i className="ti ti-sparkles" style={{ color: 'var(--accent-2)', fontSize: 20 }} aria-hidden="true" />
          </div>
        </div>
      )
  }
}


export function CodeStrip({ text }: { text: string }) {
  return (
    <div className="svc-code" aria-hidden="true">
      <span style={{ ['--n' as any]: text.length }}>{text}</span>
    </div>
  )
}
