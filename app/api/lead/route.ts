import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

/**
 * Chat hand-off: the visitor agreed to let the team contact them, so push a short summary to LINE.
 * Needs LINE_CHANNEL_TOKEN (Messaging API long-lived token) and LINE_NOTIFY_TO (user or group ID).
 * Without them this returns 503 and the widget tells the visitor to use the contact channels instead.
 */

const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  arr.push(now)
  hits.set(ip, arr)
  return arr.length > 5
}

const clip = (v: unknown, n: number) => String(v ?? '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, n)

export async function POST(req: Request) {
  const token = process.env.LINE_CHANNEL_TOKEN
  const to = process.env.LINE_NOTIFY_TO
  const resendKey = process.env.RESEND_API_KEY
  const hook = process.env.CONTACT_WEBHOOK_URL
  if (!(token && to) && !resendKey && !hook) return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 })

  const ip = (req.headers.get('x-forwarded-for') || 'x').split(',')[0].trim()
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'rate' }, { status: 429 })

  let b: any
  try { b = await req.json() } catch { return NextResponse.json({ ok: false }, { status: 400 }) }
  if (b?.consent !== true) return NextResponse.json({ ok: false, error: 'consent' }, { status: 400 })

  const contact = clip(b.contact, 120)
  if (contact.length < 5) return NextResponse.json({ ok: false, error: 'contact' }, { status: 400 })
  const topics = Array.isArray(b.topics) ? b.topics.slice(0, 6).map((t: unknown) => clip(t, 60)).filter(Boolean) : []
  const lines = Array.isArray(b.lines) ? b.lines.slice(0, 10).map((t: unknown) => '- ' + clip(t, 240)) : []

  const text = [
    '🔔 ลูกค้าขอให้ทีมติดต่อกลับ (จากน้องฮาวี่)',
    `ช่องทางติดต่อ: ${contact}`,
    `สนใจ: ${topics.length ? topics.join(', ') : 'ยังไม่ระบุ'}`,
    lines.length ? 'ที่คุยกัน:\n' + lines.join('\n') : '',
    `ภาษา: ${clip(b.lang, 5)} | หน้า: ${clip(b.page, 100)}`,
    'ลูกค้ายินยอมให้ติดต่อกลับแล้ว',
  ].filter(Boolean).join('\n')

  // Delivery: LINE first if configured, otherwise email (Resend), otherwise the webhook.
  try {
    if (token && to) {
      const r = await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ to, messages: [{ type: 'text', text: text.slice(0, 4900) }] }),
      })
      if (!r.ok) {
        const body = await r.text().catch(() => '')
        console.error('LINE push failed', r.status, body.slice(0, 300))
        return NextResponse.json({ ok: false, error: 'line', status: r.status, detail: body.slice(0, 200) }, { status: 502 })
      }
    } else if (resendKey) {
      const esc = (x: string) => x.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string))
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || 'Haliviq Website <onboarding@resend.dev>',
          to: ['info@haliviq.com'],
          subject: `ลูกค้าขอให้ติดต่อกลับ (จากน้องฮาวี่): ${contact}`,
          html: `<div style="font-family:-apple-system,Segoe UI,Arial,'Noto Sans Thai',sans-serif;font-size:15px;line-height:1.7;white-space:pre-wrap">${esc(text)}</div>`,
        }),
      })
      if (!r.ok) {
        console.error('lead email failed', r.status, (await r.text().catch(() => '')).slice(0, 300))
        return NextResponse.json({ ok: false, error: 'email' }, { status: 502 })
      }
    } else if (hook) {
      const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text, contact, topics }) })
      if (!r.ok) return NextResponse.json({ ok: false, error: 'webhook' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'net' }, { status: 502 })
  }
}
