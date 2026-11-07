import type { Lead, NewLead } from './types'

/**
 * Supabase through its REST API (no extra package).
 *   SUPABASE_URL                - https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY   - service_role key (eyJ...) or the newer secret key (sb_secret_...)
 * Server only. Never expose these to the browser.
 */
const base = () => (process.env.SUPABASE_URL || '').replace(/\/+$/, '')
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY || ''
export const dbReady = () => Boolean(base() && key())

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
export const isId = (v: unknown): v is string => typeof v === 'string' && UUID.test(v)

async function req(path: string, init: { method?: string; body?: unknown; prefer?: string } = {}) {
  const k = key()
  const headers: Record<string, string> = { apikey: k, 'Content-Type': 'application/json' }
  // Legacy keys are JWTs and also go in Authorization; the newer sb_secret_ keys must not.
  if (k.startsWith('eyJ')) headers.Authorization = `Bearer ${k}`
  if (init.prefer) headers.Prefer = init.prefer
  const r = await fetch(`${base()}/rest/v1/${path}`, {
    method: init.method || 'GET',
    headers,
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
    cache: 'no-store',
  })
  const text = await r.text()
  if (!r.ok) throw new Error(`db ${r.status}: ${text.slice(0, 200)}`)
  return text ? JSON.parse(text) : null
}

export async function listLeads(): Promise<Lead[]> {
  return (await req('leads?select=*&order=score.desc.nullslast,created_at.desc&limit=1000')) || []
}

export async function getLead(id: string): Promise<Lead | null> {
  const rows = await req(`leads?id=eq.${id}&select=*`)
  return rows?.[0] || null
}

/** Inserts new domains; domains already in the table are skipped (their status and notes stay). */
export async function insertLeads(rows: NewLead[]): Promise<Lead[]> {
  if (!rows.length) return []
  return (await req('leads?on_conflict=domain', { method: 'POST', body: rows, prefer: 'resolution=ignore-duplicates,return=representation' })) || []
}

export async function updateLead(id: string, patch: Partial<Lead>): Promise<Lead | null> {
  const rows = await req(`leads?id=eq.${id}`, { method: 'PATCH', body: { ...patch, updated_at: new Date().toISOString() }, prefer: 'return=representation' })
  return rows?.[0] || null
}

export async function deleteLead(id: string) {
  await req(`leads?id=eq.${id}`, { method: 'DELETE' })
}
