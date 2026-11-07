import type { Lead } from './types'

/* ---------------- Brevo ----------------
 *   BREVO_API_KEY          - same key the website already uses
 *   BREVO_LEADS_LIST_ID    - list for prospects (keep it apart from the newsletter list)
 *   BREVO_LEAD_ATTRIBUTES  - "1" to also send COMPANY, WEBSITE, LEAD_SCORE, LEAD_GRADE
 *                            (create these contact attributes in Brevo first, or Brevo rejects the contact)
 */
export const brevoReady = () => Boolean(process.env.BREVO_API_KEY)
export const brevoListSet = () => Number(process.env.BREVO_LEADS_LIST_ID) > 0

export async function brevoPushLead(lead: Lead): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.BREVO_API_KEY
  if (!key) return { ok: false, error: 'no_brevo_key' }
  const email = (lead.email || '').trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'no_email' }

  const attributes: Record<string, string | number> = {}
  const first = (lead.contact_name || '').trim().split(/\s+/)[0]
  if (first) attributes.FIRSTNAME = first.slice(0, 100)
  if (process.env.BREVO_LEAD_ATTRIBUTES === '1') {
    if (lead.company) attributes.COMPANY = lead.company.slice(0, 200)
    attributes.WEBSITE = lead.website || `https://${lead.domain}`
    if (lead.score !== null) attributes.LEAD_SCORE = lead.score
    if (lead.grade) attributes.LEAD_GRADE = lead.grade
  }
  const list = Number(process.env.BREVO_LEADS_LIST_ID)

  try {
    const r = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': key, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email,
        attributes: Object.keys(attributes).length ? attributes : undefined,
        listIds: list > 0 ? [list] : undefined,
        updateEnabled: true,
      }),
      cache: 'no-store',
    })
    if (r.ok) return { ok: true }
    return { ok: false, error: `brevo ${r.status}: ${(await r.text().catch(() => '')).slice(0, 200)}` }
  } catch (e: any) {
    return { ok: false, error: `brevo: ${String(e?.message || e).slice(0, 120)}` }
  }
}

/* ---------------- n8n (or any webhook) ----------------
 *   N8N_WEBHOOK_URL     - n8n "Webhook" node production URL
 *   N8N_WEBHOOK_SECRET  - optional, sent as header x-haliviq-secret so n8n can check it
 * Events: leads.imported, lead.audited, lead.pushed, lead.status
 * Never throws and never blocks the dashboard for more than 5 seconds.
 */
export const n8nReady = () => Boolean(process.env.N8N_WEBHOOK_URL)

export async function notify(event: string, data: unknown) {
  const url = process.env.N8N_WEBHOOK_URL
  if (!url) return
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), 5000)
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (process.env.N8N_WEBHOOK_SECRET) headers['x-haliviq-secret'] = process.env.N8N_WEBHOOK_SECRET
    await fetch(url, { method: 'POST', headers, body: JSON.stringify({ event, at: new Date().toISOString(), data }), signal: ctl.signal })
  } catch (e) {
    console.error('n8n notify failed', event, e)
  } finally {
    clearTimeout(t)
  }
}

/** The fields worth sending to automations (no raw HTML, no internal notes). */
export function leadPayload(l: Lead) {
  return {
    id: l.id, company: l.company, domain: l.domain, website: l.website || `https://${l.domain}`, industry: l.industry, country: l.country,
    employees: l.employees, email: l.email, contact_name: l.contact_name, contact_title: l.contact_title, phone: l.phone,
    status: l.status, score: l.score, grade: l.grade,
    issues: l.audit?.issues?.map((i) => i.th) || [], summary: l.ai?.summary || '', pitch: l.ai?.pitch || '', services: l.ai?.services || [],
  }
}
