import React from 'react'

const Y = '#FFD93D', P = '#7B6EF6', PL = '#B8A9FA', TL = '#53C3D7', G = '#34D399', R = '#F87171'
const CARD = '#1B1A33'
const fg = (a: number) => `rgb(var(--fg) / ${a})`
const dl = (i: number, s = 0.8) => ({ ['--d' as any]: `${(i * s).toFixed(2)}s` })
type X = (th: string, en: string) => string

function Skel({ w = 60, a = 0.2 }: { w?: number; a?: number }) {
  return <i className="block h-1.5 rounded-full" style={{ width: `${w}%`, background: fg(a) }} />
}
function Wrap({ children, float }: { children: React.ReactNode; float?: React.ReactNode }) {
  return (
    <div className="relative pb-10 pr-6" aria-hidden="true">
      {children}
      {float}
    </div>
  )
}
function Win({ url, children, right }: { url: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${fg(0.08)}` }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: R }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: G }} />
        <span className="ml-3 flex-1 rounded-md px-3 py-1 text-[11px]" style={{ background: fg(0.06), color: fg(0.7) }}>{url}</span>
        {right}
      </div>
      <div className="p-4" style={{ minHeight: 300 }}>{children}</div>
    </div>
  )
}
function Phone({ head, color = P, children, w = 250 }: { head: string; color?: string; children: React.ReactNode; w?: number }) {
  return (
    <div className="theme-dark mx-auto rounded-[28px] overflow-hidden" style={{ width: w, background: '#141329', border: '1px solid rgba(123,110,246,0.4)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}>
      <div className="px-4 py-3 flex items-center gap-2" style={{ background: color }}>
        <span className="w-6 h-6 rounded-full" style={{ background: 'rgba(255,255,255,.85)' }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{head}</span>
      </div>
      <div className="p-3 space-y-2.5" style={{ minHeight: 300 }}>{children}</div>
    </div>
  )
}
function Float({ label, children, w = 190 }: { label: string; children: React.ReactNode; w?: number }) {
  return (
    <div className="theme-dark hx-bob absolute -bottom-2 -right-2 rounded-2xl p-4" style={{ width: w, background: CARD, border: `1px solid ${fg(0.1)}`, boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: fg(0.85) }}>{label}</span>
        <span className="w-2 h-2 rounded-full svc-ping" style={{ background: Y }} />
      </div>
      {children}
    </div>
  )
}
function Bars({ v, h = 44 }: { v: number[]; h?: number }) {
  return (
    <div className="flex items-end gap-1.5" style={{ height: h }}>
      {v.map((x, i) => <span key={i} className="flex-1 rounded-sm hs-bar" style={{ height: `${x}%`, background: `linear-gradient(180deg,${Y},${P})`, animationDelay: `${i * 0.25}s` }} />)}
    </div>
  )
}
function Row({ i, ic, t, s, tag, tc = G }: { i: number; ic: string; t: string; s?: string; tag?: string; tc?: string }) {
  return (
    <div className="hx-in flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ ...dl(i), background: CARD, border: `1px solid ${fg(0.08)}` }}>
      <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,.25)' }}><i className={`ti ${ic}`} style={{ color: PL, fontSize: 15 }} /></span>
      <div className="flex-1 min-w-0">
        <div style={{ fontSize: 12, color: fg(0.9) }} className="truncate">{t}</div>
        {s && <div style={{ fontSize: 10, color: fg(0.5) }} className="truncate">{s}</div>}
      </div>
      {tag && <span className="hx-pop rounded-full px-2 py-0.5 shrink-0" style={{ ...dl(i), fontSize: 10, background: `${tc}26`, color: tc }}>{tag}</span>}
    </div>
  )
}
function Meter({ i = 0, c = Y }: { i?: number; c?: string }) {
  return <div className="h-1.5 rounded-full overflow-hidden" style={{ background: fg(0.1) }}><div className="h-full hx-fill" style={{ ...dl(i, 0.5), width: '100%', background: `linear-gradient(90deg,${P},${c})` }} /></div>
}
function Ring({ n, o = 8, size = 84, c = Y, label }: { n: string; o?: number; size?: number; c?: string; label?: string }) {
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 40 40" width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="20" cy="20" r="16" fill="none" stroke={fg(0.12)} strokeWidth="3.5" />
        <circle cx="20" cy="20" r="16" fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round" pathLength={100} className="hx-ring" style={{ ['--o' as any]: o }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span style={{ fontSize: size / 4.2, fontWeight: 700, color: '#fff' }}>{n}</span>
        {label && <span style={{ fontSize: 9, color: fg(0.6) }}>{label}</span>}
      </div>
    </div>
  )
}
function Tile({ i, ic, t, c = PL }: { i: number; ic: string; t: string; c?: string }) {
  return (
    <div className="hx-in rounded-xl p-3 text-center" style={{ ...dl(i), background: CARD, border: `1px solid ${fg(0.08)}` }}>
      <i className={`ti ${ic}`} style={{ color: c, fontSize: 22 }} />
      <div style={{ fontSize: 10, color: fg(0.8), marginTop: 6 }}>{t}</div>
    </div>
  )
}
function Node({ ic, t, c = P, style }: { ic: string; t?: string; c?: string; style?: React.CSSProperties }) {
  return (
    <div className="flex flex-col items-center gap-1.5" style={style}>
      <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${c}33`, border: `1px solid ${c}88` }}><i className={`ti ${ic}`} style={{ color: '#fff', fontSize: 22 }} /></span>
      {t && <span style={{ fontSize: 10, color: fg(0.75) }}>{t}</span>}
    </div>
  )
}
function Link({ i = 0 }: { i?: number }) {
  return (
    <div className="relative flex-1 h-px mx-1" style={{ background: fg(0.25), minWidth: 20 }}>
      <span className="hx-travel absolute rounded-full" style={{ ...dl(i, 0.6), top: -3, width: 8, height: 8, background: Y }} />
    </div>
  )
}
function Bubble({ me, i, children }: { me?: boolean; i: number; children: React.ReactNode }) {
  return (
    <div className={`hx-in flex ${me ? 'justify-end' : ''}`} style={dl(i, 1.1)}>
      <span className="rounded-2xl px-3 py-2 max-w-[80%]" style={{ fontSize: 11, background: me ? P : CARD, color: '#fff', border: me ? 'none' : `1px solid ${fg(0.08)}` }}>{children}</span>
    </div>
  )
}

const SCENES: Record<string, (t: X) => React.ReactNode> = {
  'digital-transformation': (t) => (
    <Wrap float={<Float label={t('ความคืบหน้า', 'Progress')}><Bars v={[30, 45, 60, 75, 90]} /></Float>}>
      <Win url="transform.roadmap">
        <div className="space-y-2.5">
          <Row i={0} ic="ti-building-warehouse" t={t('ระบบเดิม', 'Legacy systems')} s={t('ทำงานแยกกัน', 'Running in silos')} tag="1" tc={R} />
          <Row i={1} ic="ti-cloud" t={t('ย้ายขึ้นคลาวด์', 'Move to cloud')} s={t('ข้อมูลรวมที่เดียว', 'One source of data')} tag="2" tc={TL} />
          <Row i={2} ic="ti-sparkles" t={t('เพิ่ม AI และอัตโนมัติ', 'Add AI & automation')} s={t('งานซ้ำหายไป', 'Repeat work removed')} tag="3" tc={Y} />
          <div className="pt-2"><Meter i={3} /></div>
        </div>
      </Win>
    </Wrap>
  ),
  'backend-api': (t) => (
    <Wrap float={<Float label="Latency"><Bars v={[60, 40, 50, 35, 45, 30]} /></Float>}>
      <Win url="api.yourapp.co.th">
        <div className="space-y-2.5">
          <Row i={0} ic="ti-arrow-down-left" t="GET /products" s="12 ms" tag="200" />
          <Row i={1} ic="ti-arrow-up-right" t="POST /orders" s="48 ms" tag="201" />
          <Row i={2} ic="ti-refresh" t="PUT /customers/42" s="31 ms" tag="200" />
          <Row i={3} ic="ti-shield-check" t="POST /auth/login" s="22 ms" tag="OK" tc={TL} />
        </div>
      </Win>
    </Wrap>
  ),
  'design-systems': (t) => (
    <Wrap float={<Float label="Tokens"><div className="flex gap-1.5">{[P, PL, TL, Y, G].map((c, i) => <span key={i} className="hs-swatch w-5 h-5 rounded-md" style={{ background: c, animationDelay: `${i * 0.3}s` }} />)}</div></Float>}>
      <Win url="design-system / components">
        <div className="grid grid-cols-3 gap-3">
          <Tile i={0} ic="ti-click" t="Button" />
          <Tile i={1} ic="ti-toggle-right" t="Toggle" c={Y} />
          <Tile i={2} ic="ti-forms" t="Input" />
          <Tile i={3} ic="ti-layout-cards" t="Card" c={TL} />
          <Tile i={4} ic="ti-bell" t="Alert" />
          <Tile i={5} ic="ti-menu-2" t="Menu" c={Y} />
        </div>
        <div className="mt-4 flex gap-2"><span className="hx-in rounded-full px-4 py-1.5" style={{ ...dl(6), fontSize: 11, background: P, color: '#fff' }}>Primary</span><span className="hx-in rounded-full px-4 py-1.5" style={{ ...dl(7), fontSize: 11, border: `1px solid ${PL}`, color: PL }}>Outline</span></div>
      </Win>
    </Wrap>
  ),
  'product-discovery': (t) => (
    <Wrap float={<Float label={t('ลำดับความสำคัญ', 'Priority')}><Meter c={Y} /></Float>}>
      <Win url="discovery.board">
        <div className="relative rounded-xl" style={{ height: 260, background: CARD, border: `1px solid ${fg(0.08)}` }}>
          <div className="absolute inset-y-0 left-1/2 w-px" style={{ background: fg(0.12) }} />
          <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: fg(0.12) }} />
          <span className="absolute left-3 top-2" style={{ fontSize: 9, color: fg(0.5) }}>{t('ผลกระทบสูง', 'High impact')}</span>
          <span className="absolute right-3 bottom-2" style={{ fontSize: 9, color: fg(0.5) }}>{t('ทำง่าย', 'Easy')}</span>
          {[[62, 14, Y], [20, 28, P], [70, 62, TL], [28, 68, PL], [44, 40, G]].map(([l, tp, c], i) => <span key={i} className="hx-bob absolute w-7 h-7 rounded-lg" style={{ ...dl(i, 0.4), left: `${l}%`, top: `${tp}%`, background: c as string, opacity: 0.9 }} />)}
        </div>
      </Win>
    </Wrap>
  ),
  'qa-testing': (t) => (
    <Wrap float={<Float label="Coverage"><Ring n="92%" o={8} size={64} /></Float>}>
      <Win url="test-suite.run" right={<span className="text-[10px]" style={{ color: Y }}>42/45</span>}>
        <div className="space-y-2.5">
          <Row i={0} ic="ti-login" t="Login flow" tag="✓" />
          <Row i={1} ic="ti-shopping-cart" t="Checkout" tag="✓" />
          <Row i={2} ic="ti-credit-card" t="Payment edge case" tag="!" tc={Y} />
          <Row i={3} ic="ti-device-mobile" t="Mobile layout" tag="✓" />
          <div className="pt-1"><Meter i={4} /></div>
        </div>
      </Win>
    </Wrap>
  ),
  'rapid-prototyping': (t) => (
    <Wrap float={<Float label={t('เวลา', 'Timeline')}><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>2 {t('สัปดาห์', 'weeks')}</div></Float>}>
      <div className="flex items-center justify-center gap-4 pt-2">
        <Phone w={150} head={t('ร่าง', 'Sketch')} color="#4B4690"><Skel w={80} /><div className="rounded-lg" style={{ height: 70, background: fg(0.08) }} /><Skel w={50} /></Phone>
        <i className="ti ti-arrow-right hx-blink" style={{ color: Y, fontSize: 24 }} />
        <div className="relative"><Phone w={150} head={t('ต้นแบบ', 'Prototype')}><Skel w={80} /><div className="rounded-lg" style={{ height: 70, background: `linear-gradient(135deg,${P},${TL})` }} /><div className="rounded-full text-center py-1" style={{ background: Y, color: '#15112A', fontSize: 10, fontWeight: 600 }}>{t('เริ่มเลย', 'Start')}</div></Phone>
          <span className="svc-ping-ring absolute rounded-full" style={{ width: 26, height: 26, right: 34, bottom: 62, border: `2px solid ${Y}` }} /></div>
      </div>
    </Wrap>
  ),
  support: (t) => (
    <Wrap float={<Float label="SLA"><Ring n="15m" o={20} size={64} label={t('ตอบกลับ', 'reply')} /></Float>}>
      <Win url="support.desk">
        <div className="space-y-2.5">
          <Row i={0} ic="ti-ticket" t="#1042 ระบบชำระเงินช้า" s={t('เร่งด่วน', 'Urgent')} tag={t('รับเรื่อง', 'Open')} tc={R} />
          <Row i={1} ic="ti-user-cog" t={t('วิศวกรรับงาน', 'Engineer assigned')} s="Nok · 15 min" tag={t('กำลังแก้', 'Working')} tc={Y} />
          <Row i={2} ic="ti-circle-check" t={t('แก้เสร็จและแจ้งลูกค้า', 'Resolved & customer notified')} tag={t('ปิดงาน', 'Done')} />
        </div>
      </Win>
    </Wrap>
  ),
  'user-research': (t) => (
    <Wrap float={<Float label="Insight"><Bars v={[80, 55, 35]} h={36} /></Float>}>
      <Win url="research.session">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl flex items-center justify-center" style={{ height: 150, background: `linear-gradient(135deg,${P}55,${TL}33)`, border: `1px solid ${fg(0.1)}` }}><i className="ti ti-player-play-filled hx-blink" style={{ fontSize: 34, color: '#fff' }} /></div>
          <div className="col-span-2 space-y-2">{[t('สับสนตอนสมัคร', 'Confused at signup'), t('ชอบหน้าสินค้า', 'Likes product page'), t('ไม่เจอปุ่มจ่าย', 'Missed pay button')].map((s, i) => <span key={i} className="hx-in block rounded-lg px-2.5 py-1.5" style={{ ...dl(i), fontSize: 10, background: CARD, color: fg(0.85), borderLeft: `3px solid ${[R, G, Y][i]}` }}>{s}</span>)}</div>
        </div>
        <div className="mt-4 space-y-2"><Meter i={1} /><Meter i={2} c={TL} /></div>
      </Win>
    </Wrap>
  ),
  'ux-ui-design': (t) => (
    <Wrap float={<Float label="Figma"><div className="flex -space-x-2">{[P, TL, Y].map((c, i) => <span key={i} className="w-7 h-7 rounded-full border-2" style={{ background: c, borderColor: CARD }} />)}</div></Float>}>
      <Win url="figma.com / your-app">
        <div className="relative rounded-xl" style={{ height: 270, background: `radial-gradient(circle,${fg(0.1)} 1px,transparent 1px) 0 0/16px 16px, ${CARD}` }}>
          {[[6, 8, 90, 120], [36, 8, 90, 160], [66, 8, 90, 100]].map(([l, tp, w, h], i) => <div key={i} className="hx-in absolute rounded-lg" style={{ ...dl(i), left: `${l}%`, top: tp, width: w, height: h, background: `linear-gradient(160deg,${P}88,${TL}55)`, border: `1.5px solid ${PL}` }} />)}
          <i className="ti ti-pointer-filled hx-bob absolute" style={{ left: '55%', top: '55%', color: Y, fontSize: 22 }} />
          <span className="hx-in absolute rounded px-1.5 py-0.5" style={{ ...dl(4), left: '58%', top: '66%', fontSize: 9, background: Y, color: '#15112A' }}>Nok</span>
        </div>
      </Win>
    </Wrap>
  ),
  'web-development': (t) => (
    <Wrap float={<Float label="Lighthouse"><Ring n="98" o={2} size={64} c={G} /></Float>}>
      <Win url="yourbrand.co.th">
        <div className="rounded-xl p-4 hx-in" style={{ ...dl(0), height: 110, background: `linear-gradient(135deg,${P}99,${TL}66)` }}><Skel w={55} a={0.7} /><div className="mt-2"><Skel w={35} a={0.4} /></div><span className="inline-block mt-3 rounded-full px-3 py-1" style={{ fontSize: 10, background: Y, color: '#15112A' }}>{t('เริ่มเลย', 'Start')}</span></div>
        <div className="grid grid-cols-3 gap-3 mt-3">{[1, 2, 3].map((n) => <div key={n} className="hx-in rounded-lg p-2" style={{ ...dl(n), background: CARD, border: `1px solid ${fg(0.08)}` }}><div className="rounded mb-2" style={{ height: 38, background: fg(0.1) }} /><Skel w={80} /></div>)}</div>
      </Win>
    </Wrap>
  ),
  'mobile-apps': (t) => (
    <Wrap float={<Float label={t('แจ้งเตือน', 'Push')}><div style={{ fontSize: 11, color: fg(0.85) }}>{t('ออเดอร์ของคุณกำลังมา', 'Your order is on the way')}</div></Float>}>
      <Phone head="YourApp">
        <Row i={0} ic="ti-home" t={t('หน้าหลัก', 'Home')} />
        <Row i={1} ic="ti-shopping-bag" t={t('ออเดอร์ล่าสุด', 'Recent orders')} tag="3" tc={Y} />
        <Row i={2} ic="ti-gift" t={t('สิทธิพิเศษ', 'Rewards')} tag="NEW" tc={TL} />
        <div className="flex justify-around pt-2" style={{ borderTop: `1px solid ${fg(0.08)}` }}>{['ti-home', 'ti-search', 'ti-heart', 'ti-user'].map((ic, i) => <i key={i} className={`ti ${ic} ${i === 0 ? 'hx-blink' : ''}`} style={{ color: i === 0 ? Y : fg(0.5), fontSize: 18 }} />)}</div>
      </Phone>
    </Wrap>
  ),
  'application-modernization': (t) => (
    <Wrap float={<Float label="Services"><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>1 → 6</div></Float>}>
      <Win url="architecture.map">
        <div className="flex items-center gap-3 pt-6">
          <div className="hx-bob rounded-xl flex flex-col justify-center gap-2 px-4" style={{ width: 110, height: 170, background: CARD, border: `1px solid ${fg(0.15)}` }}><span style={{ fontSize: 10, color: fg(0.6) }}>MONOLITH</span><Skel w={90} /><Skel w={70} /><Skel w={80} /></div>
          <Link />
          <div className="flex-1 space-y-2.5">{['UI', 'API', 'Data', 'Auth'].map((s, i) => <div key={s} className="hx-in rounded-lg px-3 py-2 flex items-center gap-2" style={{ ...dl(i), background: CARD, border: `1px solid ${PL}66`, fontSize: 11, color: '#fff' }}><span className="w-2 h-2 rounded-full" style={{ background: Y }} />{s} service</div>)}</div>
        </div>
      </Win>
    </Wrap>
  ),
  'cloud-services-migration': (t) => (
    <Wrap float={<Float label={t('ประหยัด', 'Saved')}><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>-35%</div></Float>}>
      <Win url="migration.plan">
        <div className="flex items-center gap-1 pt-8">
          <Node ic="ti-server" t={t('เซิร์ฟเวอร์เดิม', 'On-prem')} c="#6B6B90" />
          <Link /><Link i={1} />
          <Node ic="ti-cloud" t="Cloud" c={TL} style={{ transform: 'scale(1.2)' }} />
          <Link i={2} />
          <Node ic="ti-devices" t={t('ผู้ใช้', 'Users')} />
        </div>
        <div className="mt-8 space-y-2"><Meter c={TL} /><Meter i={2} /></div>
      </Win>
    </Wrap>
  ),
  'quality-assurance-testing': (t) => (
    <Wrap float={<Float label="Release"><div style={{ fontSize: 12, color: G }}>✓ {t('พร้อมปล่อย', 'Ready')}</div></Float>}>
      <Win url="device-matrix">
        <div className="grid grid-cols-3 gap-3">{[['ti-brand-chrome', 'Chrome'], ['ti-brand-safari', 'Safari'], ['ti-brand-firefox', 'Firefox'], ['ti-device-mobile', 'iOS'], ['ti-brand-android', 'Android'], ['ti-device-tablet', 'iPad']].map(([ic, n], i) => (
          <div key={n} className="hx-in relative rounded-xl p-3 text-center" style={{ ...dl(i, 0.6), background: CARD, border: `1px solid ${fg(0.08)}` }}>
            <i className={`ti ${ic}`} style={{ color: PL, fontSize: 22 }} /><div style={{ fontSize: 10, color: fg(0.8), marginTop: 4 }}>{n}</div>
            <span className="hx-pop absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ ...dl(i, 0.6), background: G, color: '#06281c', fontSize: 10 }}>✓</span>
          </div>))}</div>
      </Win>
    </Wrap>
  ),
  'finish-your-vibe-coded-app': (t) => (
    <Wrap float={<Float label="Launch"><Ring n="90%" o={10} size={64} /></Float>}>
      <Win url="security-audit">
        <div className="flex gap-4">
          <div className="hx-bob flex items-center justify-center rounded-2xl shrink-0" style={{ width: 90, height: 90, background: `${P}33`, border: `1px solid ${PL}88` }}><i className="ti ti-shield-check" style={{ fontSize: 40, color: '#fff' }} /></div>
          <div className="flex-1 space-y-2.5">
            <Row i={0} ic="ti-key" t={t('API key รั่ว', 'Exposed API key')} tag={t('แก้แล้ว', 'Fixed')} />
            <Row i={1} ic="ti-lock" t={t('สิทธิ์ผู้ใช้', 'Permissions')} tag={t('แก้แล้ว', 'Fixed')} />
            <Row i={2} ic="ti-database" t="Backup" tag={t('พร้อม', 'Ready')} tc={TL} />
          </div>
        </div>
      </Win>
    </Wrap>
  ),
  'forward-deployed-engineering': (t) => (
    <Wrap float={<Float label="Sprint"><Meter /></Float>}>
      <Win url="team.sprint">
        <div className="flex items-center gap-3 mb-4">{[P, TL, Y, PL].map((c, i) => <span key={i} className="hx-bob w-9 h-9 rounded-full" style={{ ...dl(i, 0.3), background: c }} />)}<span style={{ fontSize: 11, color: fg(0.7) }}>{t('ทีมนั่งทำงานในทีมคุณ', 'Embedded in your team')}</span></div>
        <div className="space-y-2.5">{[t('สัปดาห์ 1 · เข้าใจระบบ', 'Week 1 · learn the system'), t('สัปดาห์ 2 · ส่งฟีเจอร์แรก', 'Week 2 · ship first feature'), t('สัปดาห์ 3 · ส่งมอบต่อทีม', 'Week 3 · hand over')].map((s, i) => <div key={i} className="hx-in rounded-lg px-3 py-2.5" style={{ ...dl(i, 1), background: CARD, border: `1px solid ${fg(0.08)}`, fontSize: 11, color: fg(0.9) }}>{s}<div className="mt-1.5"><Meter i={i + 1} /></div></div>)}</div>
      </Win>
    </Wrap>
  ),
  ai: (t) => (
    <Wrap float={<Float label="Accuracy"><Ring n="94%" o={6} size={64} /></Float>}>
      <Phone head="AI Assistant" w={270}>
        <Bubble me i={0}>{t('สรุปยอดขายเดือนนี้ให้หน่อย', 'Summarize this month sales')}</Bubble>
        <Bubble i={1}>{t('ยอดรวม ฿1.2M เพิ่มขึ้น 18% จากเดือนก่อน', 'Total ฿1.2M, up 18% on last month')}</Bubble>
        <Bubble me i={2}>{t('ลูกค้าถามอะไรบ่อยสุด', 'Top customer questions?')}</Bubble>
        <div className="hx-in flex gap-1 pl-2" style={dl(3, 1.1)}>{[0, 1, 2].map((i) => <span key={i} className="hx-blink w-1.5 h-1.5 rounded-full" style={{ ...dl(i, 0.2), background: Y }} />)}</div>
      </Phone>
    </Wrap>
  ),
  'ai-voice-agents': (t) => (
    <Wrap float={<Float label={t('สายที่รับ', 'Calls')}><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>24/7</div></Float>}>
      <Phone head={t('สายเข้า · ร้านของคุณ', 'Incoming · Your shop')} color="#2E7D5B">
        <div className="text-center pt-6"><span className="inline-flex w-16 h-16 rounded-full items-center justify-center" style={{ background: `${G}33`, border: `1px solid ${G}` }}><i className="ti ti-phone-call" style={{ fontSize: 28, color: G }} /></span><div style={{ fontSize: 11, color: fg(0.7), marginTop: 8 }}>00:42</div></div>
        <div className="flex items-center justify-center gap-1" style={{ height: 70 }}>{[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.45, 0.75, 0.55].map((h, i) => <span key={i} className="hx-wave w-1.5 rounded-full" style={{ ...dl(i, 0.12), height: `${h * 100}%`, background: Y }} />)}</div>
        <Bubble i={1}>{t('จองโต๊ะ 4 ท่าน 19:00 เรียบร้อยค่ะ', 'Table for 4 at 19:00 is booked')}</Bubble>
      </Phone>
    </Wrap>
  ),
  'data-analytics': (t) => (
    <Wrap float={<Float label="Revenue"><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>+32%</div></Float>}>
      <Win url="dashboard.yourco">
        <div className="grid grid-cols-3 gap-3 mb-4">{[['฿1.2M', t('ยอดขาย', 'Sales')], ['4.8k', t('ลูกค้า', 'Users')], ['3.1%', 'Conv.']].map(([v, l], i) => <div key={i} className="hx-in rounded-lg p-2.5" style={{ ...dl(i, 0.5), background: CARD, border: `1px solid ${fg(0.08)}` }}><div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{v}</div><div style={{ fontSize: 9, color: fg(0.55) }}>{l}</div></div>)}</div>
        <svg viewBox="0 0 300 110" className="w-full"><path d="M0 95 C40 85 60 70 100 72 S170 40 210 38 S270 14 300 8" fill="none" stroke={Y} strokeWidth="3" strokeLinecap="round" className="hx-draw" /><path d="M0 95 C40 85 60 70 100 72 S170 40 210 38 S270 14 300 8 V110 H0Z" fill={`${P}22`} /></svg>
      </Win>
    </Wrap>
  ),
  'enterprise-solutions': (t) => (
    <Wrap float={<Float label="Systems"><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>12</div></Float>}>
      <Win url="enterprise.map">
        <div className="relative mx-auto" style={{ width: 250, height: 250 }}>
          <div className="absolute inset-0 rounded-full" style={{ border: `1px dashed ${fg(0.25)}` }} />
          <div className="hx-spin absolute inset-0">{['ti-users', 'ti-database', 'ti-credit-card', 'ti-chart-bar', 'ti-cloud'].map((ic, i) => { const a = (i / 5) * Math.PI * 2; return <span key={i} className="absolute w-9 h-9 rounded-lg flex items-center justify-center" style={{ left: 125 + Math.cos(a) * 105 - 18, top: 125 + Math.sin(a) * 105 - 18, background: CARD, border: `1px solid ${PL}88` }}><i className={`ti ${ic}`} style={{ color: PL, fontSize: 17 }} /></span> })}</div>
          <span className="absolute w-16 h-16 rounded-2xl flex items-center justify-center" style={{ left: 93, top: 93, background: `linear-gradient(135deg,${P},${TL})` }}><i className="ti ti-hierarchy-3" style={{ color: '#fff', fontSize: 28 }} /></span>
        </div>
      </Win>
    </Wrap>
  ),
  cybersecurity: (t) => (
    <Wrap float={<Float label="Threats"><div style={{ fontSize: 22, fontWeight: 700, color: G }}>0</div></Float>}>
      <Win url="security.scan">
        <div className="relative mx-auto flex items-center justify-center" style={{ width: 150, height: 150 }}>
          <span className="svc-ping-ring absolute inset-0 rounded-full" style={{ border: `2px solid ${TL}` }} />
          <span className="hx-spin absolute inset-2 rounded-full" style={{ border: `2px dashed ${fg(0.25)}` }} />
          <i className="ti ti-shield-lock" style={{ fontSize: 56, color: '#fff' }} />
        </div>
        <div className="mt-3 space-y-2"><Row i={0} ic="ti-bug" t="SQL injection" tag={t('ปิดแล้ว', 'Blocked')} /><Row i={1} ic="ti-key" t="Secrets" tag={t('ปลอดภัย', 'Safe')} /></div>
      </Win>
    </Wrap>
  ),
  'pdpa-compliance': (t) => (
    <Wrap float={<Float label="PDPA"><Ring n="96%" o={4} size={64} c={G} /></Float>}>
      <Win url="consent.center">
        <div className="space-y-2.5">{[[t('คุกกี้วิเคราะห์', 'Analytics cookies'), 'ti-cookie'], [t('อีเมลการตลาด', 'Marketing email'), 'ti-mail'], [t('ข้อมูลส่วนบุคคล', 'Personal data'), 'ti-id']].map(([s, ic], i) => (
          <div key={i} className="hx-in flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ ...dl(i), background: CARD, border: `1px solid ${fg(0.08)}` }}><i className={`ti ${ic}`} style={{ color: PL, fontSize: 18 }} /><span className="flex-1" style={{ fontSize: 12, color: fg(0.9) }}>{s}</span><span className="relative rounded-full" style={{ width: 34, height: 18, background: fg(0.15) }}><span className="hx-slide absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full" style={{ ...dl(i), ['--dx' as any]: '16px', background: Y }} /></span></div>))}</div>
      </Win>
    </Wrap>
  ),
  'support-maintenance': (t) => (
    <Wrap float={<Float label="Uptime"><div style={{ fontSize: 22, fontWeight: 700, color: G }}>99.9%</div></Float>}>
      <Win url="status.yourapp">
        <div className="flex gap-[3px] mb-4">{Array.from({ length: 30 }).map((_, i) => <span key={i} className="hx-in flex-1 rounded-sm" style={{ ...dl(i, 0.08), height: 38, background: i === 17 ? Y : G, opacity: 0.85 }} />)}</div>
        <div className="space-y-2.5"><Row i={3} ic="ti-activity" t={t('เฝ้าระบบตลอด 24 ชม.', '24/7 monitoring')} tag="OK" /><Row i={4} ic="ti-refresh" t={t('อัปเดตความปลอดภัย', 'Security patch')} tag={t('เสร็จ', 'Done')} tc={TL} /></div>
      </Win>
    </Wrap>
  ),
  automation: (t) => (
    <Wrap float={<Float label={t('ประหยัด', 'Saved')}><div style={{ fontSize: 20, fontWeight: 700, color: Y }}>20 {t('ชม.', 'hrs')}</div></Float>}>
      <Win url="workflow.builder">
        <div className="flex items-center gap-1 pt-6">
          <Node ic="ti-brand-line" t={t('ออเดอร์ใหม่', 'New order')} c={G} /><Link /><Node ic="ti-file-invoice" t={t('ออกบิล', 'Invoice')} /><Link i={1} /><Node ic="ti-mail" t={t('ส่งอีเมล', 'Email')} c={TL} /><Link i={2} /><Node ic="ti-check" t={t('เสร็จ', 'Done')} c={Y} />
        </div>
        <div className="mt-8 space-y-2"><Row i={2} ic="ti-bolt" t={t('ทำงานอัตโนมัติ 142 ครั้ง', 'Ran automatically 142 times')} tag="OK" /></div>
      </Win>
    </Wrap>
  ),
  'brand-experience': (t) => (
    <Wrap float={<Float label="Brand"><div className="flex gap-1.5">{[P, PL, TL, Y].map((c, i) => <span key={i} className="hs-swatch w-5 h-5 rounded-full" style={{ background: c, animationDelay: `${i * 0.3}s` }} />)}</div></Float>}>
      <div className="flex items-end justify-center gap-4 pt-2">
        <div className="hx-in rounded-xl p-4" style={{ ...dl(0), width: 150, height: 190, background: `linear-gradient(160deg,${P},${TL})` }}><span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,.9)', color: P, fontWeight: 800 }}>H</span><div className="mt-14"><Skel w={80} a={0.7} /><div className="mt-2"><Skel w={50} a={0.4} /></div></div></div>
        <div className="space-y-3"><div className="hx-in rounded-xl p-3" style={{ ...dl(1), width: 140, background: CARD, border: `1px solid ${fg(0.1)}` }}><Skel w={70} /><div className="mt-2"><Skel w={45} a={0.12} /></div></div><div className="hx-in rounded-xl p-3 flex items-center gap-2" style={{ ...dl(2), width: 140, background: Y }}><span className="w-6 h-6 rounded-full" style={{ background: '#15112A' }} /><i className="block h-1.5 flex-1 rounded-full" style={{ background: '#15112A66' }} /></div></div>
      </div>
    </Wrap>
  ),
  'cloud-devops': (t) => (
    <Wrap float={<Float label="Uptime"><div style={{ fontSize: 22, fontWeight: 700, color: G }}>99.9%</div></Float>}>
      <Win url="pipeline.run">
        <div className="flex items-center gap-1 pt-6">
          {[['ti-hammer', 'Build'], ['ti-test-pipe', 'Test'], ['ti-rocket', 'Deploy']].map(([ic, n], i) => <React.Fragment key={n}><div className="relative"><Node ic={ic} t={n} c={i === 2 ? Y : P} /><span className="hx-pop absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ ...dl(i, 1), background: G, color: '#06281c', fontSize: 10 }}>✓</span></div>{i < 2 && <Link i={i} />}</React.Fragment>)}
        </div>
        <div className="mt-8 space-y-2"><Meter /><Meter i={2} c={TL} /></div>
      </Win>
    </Wrap>
  ),
  'erp-crm': (t) => (
    <Wrap float={<Float label="Deals"><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>฿2.4M</div></Float>}>
      <Win url="crm.pipeline">
        <div className="grid grid-cols-3 gap-3">{[t('ลีด', 'Lead'), t('เสนอราคา', 'Quote'), t('ปิดการขาย', 'Won')].map((c, i) => (
          <div key={c} className="rounded-xl p-2 space-y-2" style={{ background: fg(0.04), minHeight: 190 }}><div style={{ fontSize: 10, color: fg(0.6) }}>{c}</div>
            {i < 2 && <div className="rounded-lg p-2" style={{ background: CARD, border: `1px solid ${fg(0.08)}` }}><Skel w={70} /><div className="mt-1.5"><Skel w={40} a={0.12} /></div></div>}
            {i === 0 && <div className="hx-slide rounded-lg p-2" style={{ ['--dx' as any]: 'calc(100% + 12px)', background: CARD, border: `1px solid ${Y}` }}><Skel w={60} a={0.35} /><div className="mt-1.5"><Skel w={35} a={0.12} /></div></div>}
            {i === 2 && <div className="hx-in rounded-lg p-2" style={{ ...dl(3), background: `${G}22`, border: `1px solid ${G}` }}><div style={{ fontSize: 11, color: G }}>✓ ฿120k</div></div>}
          </div>))}</div>
      </Win>
    </Wrap>
  ),
  'growth-strategy': (t) => (
    <Wrap float={<Float label="Growth"><Bars v={[25, 40, 55, 70, 95]} /></Float>}>
      <Win url="growth.funnel">
        <div className="space-y-2.5 pt-1">{[[100, t('ผู้เข้าชม', 'Visitors')], [68, t('สนใจ', 'Interested')], [40, t('ใส่ตะกร้า', 'Cart')], [24, t('ซื้อ', 'Buy')]].map(([w, l], i) => <div key={i} className="hx-in mx-auto rounded-lg py-2 text-center" style={{ ...dl(i, 0.8), width: `${w}%`, background: `linear-gradient(90deg,${P},${i === 3 ? Y : TL})`, fontSize: 11, color: i === 3 ? '#15112A' : '#fff', fontWeight: 600 }}>{l}</div>)}</div>
      </Win>
    </Wrap>
  ),
  'seo-aeo-geo': (t) => (
    <Wrap float={<Float label="Rank"><div style={{ fontSize: 22, fontWeight: 700, color: Y }}>#1 ↑</div></Float>}>
      <Win url="search.google.com">
        <div className="rounded-full px-4 py-2 mb-3" style={{ background: CARD, border: `1px solid ${fg(0.12)}`, fontSize: 11, color: fg(0.8) }}><i className="ti ti-search" /> {t('บริษัททำเว็บ กรุงเทพ', 'web design agency bangkok')}</div>
        <div className="hx-in rounded-xl p-3 mb-2.5" style={{ ...dl(0), background: `${P}22`, border: `1px solid ${PL}66` }}><div style={{ fontSize: 10, color: Y }}>AI Overview</div><Skel w={90} a={0.35} /><div className="mt-1.5"><Skel w={70} a={0.25} /></div></div>
        <Row i={1} ic="ti-world" t="yourbrand.co.th" s={t('อันดับ 1', 'Rank 1')} tag="↑" /><div className="mt-2.5"><Row i={2} ic="ti-world" t="competitor.com" s={t('อันดับ 4', 'Rank 4')} tag="↓" tc={R} /></div>
      </Win>
    </Wrap>
  ),
  'web-mobile': (t) => (
    <Wrap float={<Float label={t('โค้ดชุดเดียว', 'One codebase')}><div style={{ fontSize: 12, color: Y }}>Web + iOS + Android</div></Float>}>
      <div className="flex items-end justify-center gap-4 pt-2">
        <div className="theme-dark rounded-xl p-3" style={{ width: 230, height: 190, background: '#141329', border: '1px solid rgba(123,110,246,0.4)' }}><Skel w={50} a={0.6} /><div className="hx-in rounded-lg mt-3" style={{ ...dl(0), height: 80, background: `linear-gradient(135deg,${P},${TL})` }} /><div className="mt-3"><Skel w={80} /></div></div>
        <Phone w={120} head="App"><div className="hx-in rounded-lg" style={{ ...dl(1), height: 70, background: `linear-gradient(135deg,${P},${TL})` }} /><Skel w={80} /><Skel w={50} /></Phone>
      </div>
    </Wrap>
  ),
}

export function hasHeroScene(slug: string) { return !!SCENES[slug] }

export default function HeroScene({ slug, lang = 'th' }: { slug: string; lang?: 'th' | 'en' }) {
  const f = SCENES[slug]
  if (!f) return null
  const t: X = (th, en) => (lang === 'en' ? en : th)
  return <div className="w-full">{f(t)}</div>
}
