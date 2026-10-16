import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { STAFF_KB } from '@/lib/staff-kb'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Staff-only Havy. Needs ANTHROPIC_API_KEY and STAFF_PASSWORD (set on the host).
 * Optional: STAFF_MODEL (default claude-sonnet-5-5, falls back to claude-haiku-4-5-20251001).
 * Never linked from the public site; /staff is noindex and disallowed in robots.txt.
 */

const fails = new Map<string, number[]>()
function tooManyFails(ip: string) {
  const now = Date.now()
  return (fails.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000).length >= 8
}
function noteFail(ip: string) {
  const now = Date.now()
  const arr = (fails.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000)
  arr.push(now)
  fails.set(ip, arr)
}

function sameKey(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  if (x.length !== y.length) return false
  return timingSafeEqual(x, y)
}

type Msg = { role: 'user' | 'assistant'; content: string }

async function ask(key: string, model: string, ctx: string, msgs: Msg[]) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 45000)
  try {
    return await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model,
        max_tokens: 1400,
        temperature: 0.3,
        system: [
          { type: 'text', text: STAFF_KB, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: ctx || 'ยังไม่ได้เลือกบริการ ตลาด หรือธุรกิจของลูกค้า' },
        ],
        messages: msgs,
      }),
    })
  } finally {
    clearTimeout(timer)
  }
}

export async function POST(req: Request) {
  const pass = process.env.STAFF_PASSWORD
  if (!pass) return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 })

  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  if (tooManyFails(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })

  const given = req.headers.get('x-staff-key') || ''
  if (!sameKey(given, pass)) {
    noteFail(ip)
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  let body: any
  try { body = await req.json() } catch { return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 }) }
  if (body?.action === 'verify') return NextResponse.json({ ok: true })

  const key = process.env.ANTHROPIC_API_KEY
  if (!key) return NextResponse.json({ ok: false, error: 'no_ai_key' }, { status: 503 })

  const raw: unknown[] = Array.isArray(body?.messages) ? body.messages.slice(-10) : []
  const msgs: Msg[] = []
  for (const m of raw as any[]) {
    const role = m?.role === 'assistant' ? 'assistant' : m?.role === 'user' ? 'user' : null
    const content = typeof m?.content === 'string' ? m.content.trim().slice(0, 1500) : ''
    if (role && content) msgs.push({ role, content })
  }
  while (msgs.length && msgs[0].role !== 'user') msgs.shift()
  if (!msgs.length || msgs[msgs.length - 1].role !== 'user') return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })

  const c = body?.ctx || {}
  const clip = (v: unknown) => (typeof v === 'string' ? v.slice(0, 80) : '')
  const parts = [
    clip(c.service) && `บริการที่เลือก: ${clip(c.service)}`,
    clip(c.market) && `ตลาดของลูกค้า: ${clip(c.market)}`,
    clip(c.industry) && `ธุรกิจของลูกค้า: ${clip(c.industry)}`,
    clip(c.topic) && `หัวข้อที่อยากรู้: ${clip(c.topic)}`,
  ].filter(Boolean)
  const ctx = parts.length ? `บริบทที่เจ้าหน้าที่เลือกไว้ (ใช้ตอบ และอย่าถามซ้ำสิ่งที่เลือกไว้แล้ว): ${parts.join(' | ')}` : ''

  try {
    const first = process.env.STAFF_MODEL || 'claude-sonnet-5-5'
    let r = await ask(key, first, ctx, msgs)
    if (!r.ok && first !== 'claude-haiku-4-5-20251001') r = await ask(key, 'claude-haiku-4-5-20251001', ctx, msgs)
    if (!r.ok) return NextResponse.json({ ok: false, error: 'upstream' }, { status: 502 })
    const data: any = await r.json()
    const reply: string = (data?.content || []).map((x: any) => x?.text || '').join('').trim()
    if (!reply) return NextResponse.json({ ok: false, error: 'empty' }, { status: 502 })
    return NextResponse.json({ ok: true, reply: reply.slice(0, 6000) })
  } catch {
    return NextResponse.json({ ok: false, error: 'failed' }, { status: 502 })
  }
}
