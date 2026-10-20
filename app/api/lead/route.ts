import { NextResponse } from 'next/server'
import { brevoUpsert } from '@/lib/brevo'

export const runtime = 'nodejs'

/**
 * Chat hand-off: the visitor agreed to let the team contact them, so push a short summary to LINE.
 * Needs LINE_CHANNEL_TOKEN (Messaging API long-lived token) and LINE_NOTIFY_TO (comma-separated user/group IDs).
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
  // kind 'tap': the visitor tapped a chat channel (the page tells them the team gets the recap). No contact details are sent.
  const tap = b?.kind === 'tap'
  if (!tap && b?.consent !== true) return NextResponse.json({ ok: false, error: 'consent' }, { status: 400 })

  const contact = tap ? '' : clip(b.contact, 120)
  if (!tap && contact.length < 5) return NextResponse.json({ ok: false, error: 'contact' }, { status: 400 })
  const channel = clip(b.channel, 30)
  const topics = Array.isArray(b.topics) ? b.topics.slice(0, 6).map((t: unknown) => clip(t, 60)).filter(Boolean) : []
  const lines = Array.isArray(b.lines) ? b.lines.slice(0, 10).map((t: unknown) => '- ' + clip(t, 240)) : []

  const text = [
    tap ? `👆 ลูกค้ากำลังจะทักทาง ${channel || 'ช่องทางแชต'} (จากน้องฮาวี่)` : '🔔 ลูกค้าขอให้ทีมติดต่อกลับ (จากน้องฮาวี่)',
    tap ? 'ยังไม่ได้ฝากเบอร์ ให้รอข้อความจากลูกค้าทางช่องทางนี้ สรุปด้านล่างคือสิ่งที่ลูกค้าจะวางให้' : `ช่องทางติดต่อ: ${contact}`,
    `สนใจ: ${topics.length ? topics.join(', ') : 'ยังไม่ระบุ'}`,
    lines.length ? 'ที่คุยกัน:\n' + lines.join('\n') : '',
    `ภาษา: ${clip(b.lang, 5)} | หน้า: ${clip(b.page, 100)}`,
    tap ? '' : 'ลูกค้ายินยอมให้ติดต่อกลับแล้ว',
  ].filter(Boolean).join('\n')

  const lineText = text.slice(0, 4900)

  // If the visitor left an email as their contact, add it to Brevo (no-op unless BREVO_API_KEY is set)
  if (!tap && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) await brevoUpsert({ email: contact })

  // LINE_NOTIFY_TO may hold user IDs (U...), group IDs (C...) and room IDs (R...) separated by commas.
  // The multicast endpoint only accepts user IDs, so groups/rooms are pushed one by one.
  // Returns true when at least one LINE request succeeded.
  async function sendLine(): Promise<{ ok: boolean; status?: number; detail?: string }> {
    const ids = Array.from(new Set((to || '').split(',').map((x) => x.trim()).filter(Boolean)))
    const users = ids.filter((id) => id.startsWith('U'))
    const others = ids.filter((id) => !id.startsWith('U'))
    const call = async (path: 'push' | 'multicast', dest: string | string[]) => {
      const r = await fetch(`https://api.line.me/v2/bot/message/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ to: dest, messages: [{ type: 'text', text: lineText }] }),
      })
      if (!r.ok) {
        const body = await r.text().catch(() => '')
        console.error('LINE', path, 'failed', r.status, body.slice(0, 300))
        return { ok: false, status: r.status, detail: body.slice(0, 200) }
      }
      return { ok: true as const }
    }
    const jobs: Promise<{ ok: boolean; status?: number; detail?: string }>[] = []
    if (users.length === 1) jobs.push(call('push', users[0]))
    else if (users.length > 1) jobs.push(call('multicast', users.slice(0, 500)))
    for (const id of others.slice(0, 20)) jobs.push(call('push', id))
    if (!jobs.length) return { ok: false, detail: 'no_ids' }
    const results = await Promise.all(jobs.map((j) => j.catch(() => ({ ok: false as boolean, status: undefined, detail: 'net' }))))
    const good = results.some((r) => r.ok)
    const bad = results.find((r) => !r.ok)
    return good ? { ok: true } : { ok: false, status: bad?.status, detail: bad?.detail }
  }

  async function sendEmail(): Promise<boolean> {
    if (!resendKey) return false
    const esc = (x: string) => x.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string))
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'Haliviq Website <onboarding@resend.dev>',
        to: ['info@haliviq.com'],
        subject: tap ? `ลูกค้ากำลังทักทาง ${channel} (จากน้องฮาวี่)` : `ลูกค้าขอให้ติดต่อกลับ (จากน้องฮาวี่): ${contact}`,
        html: `<div style="font-family:-apple-system,Segoe UI,Arial,'Noto Sans Thai',sans-serif;font-size:15px;line-height:1.7;white-space:pre-wrap">${esc(text)}</div>`,
      }),
    })
    if (!r.ok) console.error('lead email failed', r.status, (await r.text().catch(() => '')).slice(0, 300))
    return r.ok
  }

  async function sendHook(): Promise<boolean> {
    if (!hook) return false
    const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text, contact, topics }) })
    return r.ok
  }

  // Delivery: LINE and email (Resend) are both sent when configured, so info@haliviq.com always has a copy.
  // The webhook is only a last resort when neither of them got through.
  let line: { ok: boolean; status?: number; detail?: string } | null = null
  try {
    const [lineRes, emailOk] = await Promise.all([
      token && to ? sendLine() : Promise.resolve(null),
      sendEmail().catch((e) => { console.error('lead email error', e); return false }),
    ])
    line = lineRes
    if (line?.ok || emailOk) return NextResponse.json({ ok: true })
    try { if (await sendHook()) return NextResponse.json({ ok: true }) } catch (e) { console.error('lead webhook error', e) }
    if (line) return NextResponse.json({ ok: false, error: 'line', status: line.status, detail: line.detail }, { status: 502 })
    return NextResponse.json({ ok: false, error: 'delivery' }, { status: 502 })
  } catch {
    return NextResponse.json({ ok: false, error: 'net' }, { status: 502 })
  }
}
