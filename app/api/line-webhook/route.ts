import { NextResponse } from 'next/server'
import crypto from 'crypto'

export const runtime = 'nodejs'

/**
 * LINE webhook, used only to find LINE user IDs / group IDs for LINE_NOTIFY_TO.
 * Someone sends the word "id" (or "ไอดี") to the official account and the bot replies with their own ID.
 * A group's ID is replied when the account is added to a group. Nothing is stored.
 * Needs LINE_CHANNEL_TOKEN. If LINE_CHANNEL_SECRET is set, the request signature is verified.
 */
export async function POST(req: Request) {
  const raw = await req.text()
  const secret = process.env.LINE_CHANNEL_SECRET
  if (secret) {
    const sig = req.headers.get('x-line-signature') || ''
    const mac = crypto.createHmac('sha256', secret).update(raw).digest('base64')
    if (sig.length !== mac.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(mac))) {
      return NextResponse.json({ ok: false }, { status: 401 })
    }
  }
  const token = process.env.LINE_CHANNEL_TOKEN
  let body: any
  try { body = JSON.parse(raw) } catch { return NextResponse.json({ ok: true }) }
  const events: any[] = Array.isArray(body?.events) ? body.events.slice(0, 5) : []
  if (!token) return NextResponse.json({ ok: true })

  for (const ev of events) {
    if (!ev?.replyToken) continue
    const src = ev.source || {}
    let text = ''
    if (ev.type === 'join' && src.groupId) {
      text = `Group ID ของกลุ่มนี้:\n${src.groupId}`
    } else if (ev.type === 'message' && ev.message?.type === 'text' && /^\s*(id|ไอดี|user id)\s*$/i.test(ev.message.text || '')) {
      text = src.groupId ? `Group ID ของกลุ่มนี้:\n${src.groupId}` : `User ID ของคุณ:\n${src.userId || '-'}`
    }
    if (!text) continue
    await fetch('https://api.line.me/v2/bot/message/reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ replyToken: ev.replyToken, messages: [{ type: 'text', text }] }),
    }).catch(() => {})
  }
  return NextResponse.json({ ok: true })
}

export async function GET() { return NextResponse.json({ ok: true }) }
