import { timingSafeEqual } from 'crypto'

/** Same staff password as /api/staff-chat (STAFF_PASSWORD), sent in the x-staff-key header. */

const fails = new Map<string, number[]>()
const WINDOW = 10 * 60 * 1000

function recent(ip: string) {
  const now = Date.now()
  return (fails.get(ip) || []).filter((t) => now - t < WINDOW)
}

function same(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export type StaffCheck = { ok: true } | { ok: false; status: number; error: string }

export function checkStaff(req: Request): StaffCheck {
  const pass = process.env.STAFF_PASSWORD
  if (!pass) return { ok: false, status: 503, error: 'not_configured' }
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  if (recent(ip).length >= 8) return { ok: false, status: 429, error: 'rate_limited' }
  if (same(req.headers.get('x-staff-key') || '', pass)) return { ok: true }
  fails.set(ip, [...recent(ip), Date.now()])
  return { ok: false, status: 401, error: 'unauthorized' }
}
