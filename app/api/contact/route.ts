import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

/**
 * Temporary back end for the contact form.
 * Delivery (first one configured wins), set as environment variables on the host:
 *   1. RESEND_API_KEY  (optional CONTACT_TO_EMAIL, default info@haliviq.com; optional CONTACT_FROM) -> email via Resend
 *   2. CONTACT_WEBHOOK_URL                                          -> POST JSON (Slack, Zapier, Make, Google Apps Script...)
 *   3. nothing configured                                           -> logged to the server console only
 */

const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  arr.push(now)
  hits.set(ip, arr)
  return arr.length > 5
}

const clean = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string))

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try { body = await req.json() } catch { return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 }) }

  if (clean(body.website)) return NextResponse.json({ ok: true }) // honeypot: pretend success

  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })

  const data = {
    name: clean(body.name, 200),
    email: clean(body.email, 200),
    phone: clean(body.phone, 60),
    phoneCountry: clean(body.phoneCountry, 4),
    message: clean(body.message, 5000),
    currency: clean(body.currency, 4),
    budget: clean(body.budget, 80),
    source: clean(body.source, 120),
    interests: Array.isArray(body.interests) ? body.interests.slice(0, 20).map((v) => clean(v, 80)).filter(Boolean) : [],
    newsletter: body.newsletter === true,
    lang: clean(body.lang, 4),
    page: clean(body.page, 300),
    receivedAt: new Date().toISOString(),
  }
  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  const lines = [
    ['Name', data.name], ['Email', data.email], ['Phone', data.phone ? `${data.phoneCountry} ${data.phone}` : ''],
    ['Interested in', data.interests.join(', ')], ['Budget', data.budget ? `${data.budget} (${data.currency})` : ''], ['Heard about us', data.source],
    ['Newsletter', data.newsletter ? 'yes' : 'no'], ['Language', data.lang], ['Page', data.page],
  ].filter(([, v]) => v)

  try {
    const key = process.env.RESEND_API_KEY
    const to = 'info@haliviq.com'
    const hook = process.env.CONTACT_WEBHOOK_URL
    if (key && to) {
      const html = `<h2>New website enquiry</h2>${lines.map(([k, v]) => `<p><b>${k}:</b> ${esc(v as string)}</p>`).join('')}<p><b>Message:</b></p><p>${esc(data.message).replace(/\n/g, '<br>')}</p>`
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || 'Haliviq Website <onboarding@resend.dev>',
          to: to.split(',').map((s) => s.trim()),
          reply_to: data.email,
          subject: `New enquiry from ${data.name}`,
          html,
        }),
      })
      if (!r.ok) throw new Error(`resend ${r.status}`)
    } else if (hook) {
      const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: `New enquiry from ${data.name} <${data.email}>\n${data.message}`, ...data }) })
      if (!r.ok) throw new Error(`webhook ${r.status}`)
    } else {
      console.log('[contact-form] no delivery configured; enquiry:', JSON.stringify(data))
    }
  } catch (e) {
    console.error('[contact-form] delivery failed', e)
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
