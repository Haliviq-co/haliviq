'use client'

import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant'; content: string }
type Ctx = { service?: string; market?: string; industry?: string; topic?: string }
type Step = 'service' | 'market' | 'industry' | 'topic' | 'chat'

const SERVICES = ['เว็บไซต์', 'Branding', 'แอปมือถือ (iOS/Android)', 'AI Assistant / แชตบอต', 'AI Voice Agent', 'ERP / CRM', 'อีคอมเมิร์ซ', 'LINE Mini App', 'ออกแบบ UX/UI', 'SEO / AEO / GEO', 'ความปลอดภัยไซเบอร์ / PDPA', 'Cloud / DevOps', 'ข้อมูลและการวิเคราะห์', 'ดูแลรักษาระบบ', 'กลยุทธ์ดิจิทัล', 'แก้แอปที่ AI สร้าง']
const MARKETS = ['ไทย (บาท)', 'USA (ดอลลาร์)']
const INDUSTRIES = ['คลินิก / โรงพยาบาล / ความงาม', 'ร้านอาหาร / คาเฟ่', 'ร้านค้าปลีก / ขายออนไลน์', 'อสังหาริมทรัพย์', 'โรงงาน / B2B', 'โรงเรียน / คอร์สออนไลน์', 'โรงแรม / ท่องเที่ยว', 'บริการวิชาชีพ', 'สตาร์ทอัพ', 'การเงิน / องค์กรใหญ่', 'ก่อสร้าง / ขนส่ง']
const TOPICS = ['ราคา', 'ขอบเขตงาน (ได้อะไรบ้าง)', 'คำถามที่ควรถามลูกค้า', 'วิธีขายและตอบข้อโต้แย้ง', 'อธิบายให้เข้าใจง่าย']

const KEY = 'haliviq-staff-key'

const box: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.14)', borderRadius: 16 }
const chip: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.2)', borderRadius: 999, padding: '8px 14px', fontSize: 14, color: 'var(--ink)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }

export default function StaffPage() {
  const [key, setKey] = useState<string | null>(null)
  const [pw, setPw] = useState('')
  const [authErr, setAuthErr] = useState('')
  const [checking, setChecking] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [ctx, setCtx] = useState<Ctx>({})
  const [step, setStep] = useState<Step>('service')
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try { const k = sessionStorage.getItem(KEY); if (k) setKey(k) } catch { /* ignore */ }
  }, [])
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [msgs, step, busy])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    if (!pw.trim()) return
    setChecking(true); setAuthErr('')
    try {
      const r = await fetch('/api/staff-chat', { method: 'POST', headers: { 'content-type': 'application/json', 'x-staff-key': pw }, body: JSON.stringify({ action: 'verify' }) })
      if (r.ok) { try { sessionStorage.setItem(KEY, pw) } catch { /* ignore */ } setKey(pw) }
      else if (r.status === 503) setAuthErr('ยังไม่ได้ตั้งรหัสผ่านหน้านี้บนเซิร์ฟเวอร์')
      else if (r.status === 429) setAuthErr('ลองผิดหลายครั้ง รอสักครู่แล้วลองใหม่')
      else setAuthErr('รหัสผ่านไม่ถูกต้อง')
    } catch { setAuthErr('เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง') }
    setChecking(false)
  }

  async function send(history: Msg[], c: Ctx) {
    setMsgs(history); setBusy(true)
    try {
      const r = await fetch('/api/staff-chat', { method: 'POST', headers: { 'content-type': 'application/json', 'x-staff-key': key || '' }, body: JSON.stringify({ messages: history, ctx: c }) })
      if (r.status === 401) { try { sessionStorage.removeItem(KEY) } catch { /* ignore */ } setKey(null); setBusy(false); return }
      const d = await r.json().catch(() => null)
      const reply = d?.ok ? d.reply : d?.error === 'no_ai_key' ? 'ระบบ AI ยังไม่ได้ตั้งค่าบนเซิร์ฟเวอร์ครับ' : 'ขออภัยครับ ตอบไม่ได้ตอนนี้ ลองใหม่อีกครั้ง'
      setMsgs([...history, { role: 'assistant', content: reply }])
    } catch {
      setMsgs([...history, { role: 'assistant', content: 'ขออภัยครับ เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง' }])
    }
    setBusy(false)
  }

  function compose(c: Ctx) {
    const bits = [c.service && `บริการ ${c.service}`, c.industry && `ลูกค้าทำธุรกิจ ${c.industry}`, c.market && `ลูกค้าอยู่ตลาด ${c.market}`].filter(Boolean).join(' · ')
    return `${bits ? bits + ' · ' : ''}ขอข้อมูลเรื่อง ${c.topic || 'ภาพรวม'}`
  }

  function pick(kind: Step, v: string) {
    const c: Ctx = { ...ctx }
    if (kind === 'service') { c.service = v; setCtx(c); setStep('market') }
    else if (kind === 'market') { c.market = v; setCtx(c); setStep('industry') }
    else if (kind === 'industry') { if (v !== '__skip') c.industry = v; setCtx(c); setStep('topic') }
    else if (kind === 'topic') { c.topic = v; setCtx(c); setStep('chat'); send([...msgs, { role: 'user', content: compose(c) }], c) }
  }

  function submitText(e: React.FormEvent) {
    e.preventDefault()
    const t = input.trim()
    if (!t || busy) return
    setInput('')
    if (step === 'service') { const c = { ...ctx, service: t }; setCtx(c); setStep('market'); return }
    if (step === 'industry') { const c = { ...ctx, industry: t }; setCtx(c); setStep('topic'); return }
    setStep('chat')
    send([...msgs, { role: 'user', content: t }], ctx)
  }

  function reset() { setMsgs([]); setCtx({}); setStep('service'); setInput('') }

  const page: React.CSSProperties = { minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'inherit' }

  if (!key) {
    return (
      <main style={{ ...page, display: 'grid', placeItems: 'center', padding: 16 }}>
        <form onSubmit={login} style={{ ...box, padding: 28, width: '100%', maxWidth: 380 }}>
          <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
          <h1 style={{ fontSize: 22, margin: '8px 0 4px' }}>น้องฮาวี่ สำหรับทีมภายใน</h1>
          <p style={{ fontSize: 14, opacity: 0.7, margin: '0 0 18px' }}>ใส่รหัสผ่านเพื่อเข้าใช้งาน</p>
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus placeholder="รหัสผ่าน" style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid rgb(var(--fg) / 0.25)', background: 'transparent', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', boxSizing: 'border-box' }} />
          {authErr && <div style={{ color: '#ff8a7a', fontSize: 13, marginTop: 8 }}>{authErr}</div>}
          <button type="submit" disabled={checking} style={{ width: '100%', marginTop: 14, padding: '12px 14px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>{checking ? 'กำลังตรวจสอบ…' : 'เข้าใช้งาน'}</button>
        </form>
      </main>
    )
  }

  const bubble = (m: Msg, i: number) => (
    <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', margin: '10px 0' }}>
      <div style={{ maxWidth: '88%', padding: '12px 16px', borderRadius: 18, whiteSpace: 'pre-wrap', lineHeight: 1.65, fontSize: 15, ...(m.role === 'user' ? { background: 'var(--accent)', color: '#14131A', borderBottomRightRadius: 6 } : { background: 'rgb(var(--fg) / 0.07)', borderBottomLeftRadius: 6 }) }}>{m.content}</div>
    </div>
  )

  const prompts: Record<Exclude<Step, 'chat'>, { q: string; opts: string[]; skip?: boolean }> = {
    service: { q: 'สวัสดีครับ วันนี้อยากรู้เรื่องบริการอะไรครับ', opts: SERVICES },
    market: { q: 'ลูกค้าอยู่ตลาดไหนครับ (ราคาไทยกับ USA แยกกัน)', opts: MARKETS },
    industry: { q: 'ลูกค้าทำธุรกิจอะไรครับ (เลือกหรือพิมพ์เองได้ ข้ามก็ได้)', opts: INDUSTRIES, skip: true },
    topic: { q: 'อยากรู้เรื่องอะไรครับ', opts: TOPICS },
  }

  return (
    <main style={page}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 16px 120px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0 14px' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>น้องฮาวี่ สำหรับทีมภายใน</div>
          </div>
          <button onClick={reset} style={{ ...chip, fontSize: 13 }}>เริ่มใหม่</button>
        </header>

        {msgs.map(bubble)}

        {step !== 'chat' && (
          <div style={{ margin: '10px 0' }}>
            <div style={{ display: 'inline-block', maxWidth: '88%', padding: '12px 16px', borderRadius: 18, borderBottomLeftRadius: 6, background: 'rgb(var(--fg) / 0.07)', fontSize: 15, lineHeight: 1.6 }}>{prompts[step].q}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
              {prompts[step].opts.map((o) => <button key={o} style={chip} onClick={() => pick(step, o)}>{o}</button>)}
              {prompts[step].skip && <button style={{ ...chip, opacity: 0.7 }} onClick={() => pick('industry', '__skip')}>ข้ามขั้นนี้</button>}
            </div>
            {Object.keys(ctx).length > 0 && <div style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>เลือกไว้: {[ctx.service, ctx.market, ctx.industry].filter(Boolean).join(' · ')}</div>}
          </div>
        )}

        {busy && <div style={{ opacity: 0.6, fontSize: 14, margin: '10px 0' }}>น้องฮาวี่กำลังตอบ…</div>}
        <div ref={endRef} />
      </div>

      <form onSubmit={submitText} style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'var(--bg)', borderTop: '1px solid rgb(var(--fg) / 0.12)', padding: '12px 16px calc(12px + env(safe-area-inset-bottom))' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 8 }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={step === 'chat' ? 'ถามต่อได้เลย เช่น ลูกค้าบอกแพง ตอบยังไง' : 'หรือพิมพ์เองได้เลย'} style={{ flex: 1, padding: '12px 16px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.25)', background: 'transparent', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', minWidth: 0 }} />
          <button type="submit" disabled={busy || !input.trim()} style={{ padding: '0 20px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', opacity: busy || !input.trim() ? 0.5 : 1 }}>ส่ง</button>
        </div>
      </form>
    </main>
  )
}
