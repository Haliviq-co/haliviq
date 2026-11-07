import { toDomain, type NewLead } from './types'

/**
 * Apollo.io company search. Needs APOLLO_API_KEY (Apollo > Settings > Integrations > API)
 * on a plan that includes API access. Company search does not use email credits.
 */
export const apolloReady = () => Boolean(process.env.APOLLO_API_KEY)

export type ApolloQuery = { keywords?: string; location?: string; size?: string; page?: number; perPage?: number }

const list = (s?: string) => (s || '').split(',').map((x) => x.trim()).filter(Boolean).slice(0, 10)
const str = (v: unknown, max = 200) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null)

export async function apolloSearch(q: ApolloQuery): Promise<{ total: number; leads: NewLead[] }> {
  const key = process.env.APOLLO_API_KEY
  if (!key) throw new Error('no_apollo_key')

  const body: Record<string, unknown> = {
    page: Math.min(Math.max(Math.floor(q.page || 1), 1), 500),
    per_page: Math.min(Math.max(Math.floor(q.perPage || 25), 1), 100),
  }
  if (list(q.keywords).length) body.q_organization_keyword_tags = list(q.keywords)
  if (list(q.location).length) body.organization_locations = list(q.location)
  if (q.size && /^\d+,\d+$/.test(q.size)) body.organization_num_employees_ranges = [q.size]

  const r = await fetch('https://api.apollo.io/api/v1/mixed_companies/search', {
    method: 'POST',
    headers: { 'x-api-key': key, 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', accept: 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
  const text = await r.text()
  if (!r.ok) throw new Error(`apollo ${r.status}: ${text.slice(0, 200)}`)

  let data: any
  try { data = JSON.parse(text) } catch { throw new Error('apollo: bad response') }
  const orgs: any[] = [...(Array.isArray(data?.organizations) ? data.organizations : []), ...(Array.isArray(data?.accounts) ? data.accounts : [])]

  const seen = new Set<string>()
  const leads: NewLead[] = []
  for (const o of orgs) {
    const domain = toDomain(o?.primary_domain || o?.website_url || o?.domain)
    if (!domain || seen.has(domain)) continue
    seen.add(domain)
    const emp = Number(o?.estimated_num_employees)
    leads.push({
      domain,
      company: str(o?.name),
      website: str(o?.website_url, 300) || `https://${domain}`,
      industry: str(o?.industry),
      country: str(o?.country),
      city: str(o?.city),
      employees: Number.isFinite(emp) && emp > 0 ? Math.round(emp) : null,
      linkedin: str(o?.linkedin_url, 300),
      phone: str(o?.phone || o?.primary_phone?.number || o?.sanitized_phone, 60),
      source: 'apollo',
      apollo_id: str(o?.id, 60),
    })
  }
  const total = Number(data?.pagination?.total_entries)
  return { total: Number.isFinite(total) ? total : leads.length, leads }
}
