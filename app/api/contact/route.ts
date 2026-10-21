import { NextResponse } from 'next/server'
import { brevoUpsert } from '@/lib/brevo'

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

  // Capture the lead in Brevo first (no-op unless BREVO_API_KEY is set), so it is saved even if the notification email below fails. Awaited so the serverless function does not exit early; never fails the form.
  await brevoUpsert({ email: data.email, name: data.name, newsletter: data.newsletter })

  try {
    const key = process.env.RESEND_API_KEY
    const to = 'info@haliviq.com'
    const hook = process.env.CONTACT_WEBHOOK_URL
    if (key && to) {
      const row = ([k, v]: (string)[]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #E6E4F4;width:132px;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#6B6890;vertical-align:top">${k}</td><td style="padding:10px 0;border-bottom:1px solid #E6E4F4;font-size:15px;color:#0A0A0F;vertical-align:top">${k === 'Email' ? `<a href="mailto:${esc(v)}" style="color:#0A0A0F;font-weight:600">${esc(v)}</a>` : esc(v)}</td></tr>`
      const html = `<!doctype html><html><head><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"></head><body style="margin:0;padding:0;background:#F1F0FA"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F0FA;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;font-family:-apple-system,'Segoe UI',Helvetica,Arial,'Noto Sans Thai',sans-serif"><tr><td style="height:5px;line-height:5px;font-size:0;background:#5A4ED4;background-image:linear-gradient(90deg,#5A4ED4,#53C3D7)">&nbsp;</td></tr><tr><td style="background:#08070F;padding:26px 32px"><img src="https://www.haliviq.com/haliviq-logo-email.png" width="130" height="27" alt="Haliviq" style="display:block;border:0;height:27px;width:auto"><div style="font-size:22px;font-weight:700;color:#FFFFFF;margin-top:14px">มีคนติดต่อเข้ามาใหม่ · New enquiry</div></td></tr><tr><td style="padding:26px 32px 8px"><div style="font-size:20px;font-weight:700;color:#0A0A0F">${esc(data.name)}</div><div style="font-size:14px;color:#6B6890;margin-top:2px">${esc(data.email)}${data.phone ? ' · ' + esc(`${data.phoneCountry} ${data.phone}`) : ''}</div></td></tr><tr><td style="padding:8px 32px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${lines.map((l) => row(l as string[])).join('')}</table></td></tr><tr><td style="padding:22px 32px 6px"><div style="font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#6B6890;margin-bottom:8px">Message</div><div style="background:#F1F0FA;border-left:4px solid #5A4ED4;border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.65;color:#0A0A0F">${esc(data.message).replace(/\n/g, '<br>')}</div></td></tr><tr><td style="padding:22px 32px 30px"><a href="mailto:${esc(data.email)}?subject=${encodeURIComponent('Re: Haliviq enquiry')}" style="display:inline-block;background:#5A4ED4;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:14px;padding:12px 24px;border-radius:999px">ตอบกลับ · Reply</a></td></tr></table><div style="font-size:12px;color:#6B6890;margin-top:14px">ส่งจากแบบฟอร์ม haliviq.com${data.page ? ' · ' + esc(data.page) : ''}</div></td></tr></table></body></html>`
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
