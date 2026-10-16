'use client'
import { useEffect, useRef, useState } from 'react'

// Fires a lead conversion. Consent Mode (set in app/layout.tsx) keeps this cookieless until the visitor accepts.
// Optional: set NEXT_PUBLIC_ADS_CONVERSION_LABEL (the part after "AW-18293218603/" in Google Ads) to report it as an Ads conversion.
function trackLead() {
  try {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
    if (!g) return
    g('event', 'generate_lead', { form: 'contact' })
    const label = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL
    if (label) g('event', 'conversion', { send_to: `AW-18293218603/${label}` })
  } catch {}
}

export default function ContactFormShell({ lang, children }: { lang: 'en' | 'th'; children: React.ReactNode }) {
  const isEN = lang === 'en'
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const busy = useRef(false)
  const saved = useRef<Record<string, unknown> | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy.current) return
    busy.current = true
    setState('sending')
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone'), phoneCountry: fd.get('phoneCountry'),
      message: fd.get('message'), currency: fd.get('currency'), budget: fd.get('budget'), source: fd.get('source'), interests: fd.getAll('interest'),
      newsletter: fd.get('newsletter') === 'on', website: fd.get('website'), lang, page: window.location.pathname,
    }
    // Show the thank-you screen right away so the form feels instant, and deliver in the background.
    // If delivery fails (after one automatic retry) we go back to the form with the text restored.
    saved.current = payload as Record<string, unknown>
    setState('ok')
    const send = () => fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    try {
      let r = await send().catch(() => null)
      if (!r || !r.ok) { await new Promise((res) => setTimeout(res, 800)); r = await send() }
      if (!r.ok) throw new Error(String(r.status))
      trackLead()
      saved.current = null
    } catch {
      setState('error')
    } finally {
      busy.current = false
    }
  }

  useEffect(() => {
    if (state !== 'error' || !saved.current || !formRef.current) return
    const f = formRef.current
    for (const k of ['name', 'email', 'phone', 'message', 'budget']) {
      const el = f.elements.namedItem(k) as HTMLInputElement | null
      const v = saved.current[k]
      if (el && typeof v === 'string' && 'value' in el) el.value = v
    }
  }, [state])

  if (state === 'ok') {
    return (
      <div role="status" className="text-center py-10">
        <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(83,195,215,0.15)' }}>
          <i className="ti ti-check" style={{ fontSize: 26, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{isEN ? 'Thank you, we got your message.' : 'ขอบคุณ เราได้รับข้อความแล้ว'}</p>
        <p style={{ color: 'rgb(var(--fg) / 0.65)', lineHeight: 1.8 }}>{isEN ? 'We will reply within 24 hours with our first thoughts and a suggested next step.' : 'เราจะตอบกลับภายใน 24 ชั่วโมง พร้อมความเห็นเบื้องต้นและขั้นตอนที่แนะนำ'}</p>
        <button type="button" onClick={() => setState('idle')} className="mt-6 text-sm underline" style={{ color: 'var(--accent)' }}>{isEN ? 'Send another message' : 'ส่งข้อความอีกครั้ง'}</button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-5" aria-busy={state === 'sending'}>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {children}
      {state === 'sending' && <p role="status" className="text-center text-sm" style={{ color: 'rgb(var(--fg) / 0.7)' }}>{isEN ? 'Sending...' : 'กำลังส่ง...'}</p>}
      {state === 'error' && (
        <p role="alert" className="text-center text-sm" style={{ color: '#F87171' }}>
          {isEN ? 'Sorry, that did not go through. Please try again or email info@haliviq.com.' : 'ขออภัย ส่งไม่สำเร็จ ลองใหม่อีกครั้ง หรืออีเมลมาที่ info@haliviq.com'}
        </p>
      )}
    </form>
  )
}
