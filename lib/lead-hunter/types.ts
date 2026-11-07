export const LEAD_STATUSES = ['new', 'audited', 'qualified', 'contacted', 'replied', 'won', 'lost', 'skip'] as const
export type LeadStatus = (typeof LEAD_STATUSES)[number]

export type Severity = 'high' | 'med' | 'low'
export type AuditIssue = { k: string; sev: Severity; th: string; en: string }

export type Audit = {
  ok: boolean
  error?: string
  url?: string
  status?: number
  https?: boolean
  ttfbMs?: number
  loadMs?: number
  bytes?: number
  title?: string
  description?: string
  platform?: string
  copyrightYear?: number
  emails: string[]
  phones: string[]
  socials: string[]
  hasForm?: boolean
  hasAnalytics?: boolean
  hasSitemap?: boolean
  health: number
  issues: AuditIssue[]
  checkedAt: string
}

export type LeadAI = {
  summary: string
  pitch: string
  services: string[]
  adjust: number
  reason: string
  model?: string
}

export type Lead = {
  id: string
  created_at: string
  updated_at: string
  domain: string
  company: string | null
  website: string | null
  industry: string | null
  country: string | null
  city: string | null
  employees: number | null
  linkedin: string | null
  phone: string | null
  source: string
  apollo_id: string | null
  contact_name: string | null
  contact_title: string | null
  email: string | null
  status: LeadStatus
  score: number | null
  grade: string | null
  audit: Audit | null
  ai: LeadAI | null
  notes: string | null
  audited_at: string | null
  brevo_synced_at: string | null
}

export type NewLead = Pick<Lead, 'domain' | 'company' | 'website' | 'industry' | 'country' | 'city' | 'employees' | 'linkedin' | 'phone' | 'source' | 'apollo_id'>

/** "https://www.Foo.co.th/about" -> "foo.co.th"; null when it is not a usable host name. */
export function toDomain(input: string | null | undefined): string | null {
  let s = (input || '').trim().toLowerCase()
  if (!s) return null
  if (!/^https?:\/\//.test(s)) s = 'https://' + s
  try {
    const h = new URL(s).hostname.replace(/^www\./, '')
    return /^(?=.{4,253}$)([a-z0-9-]+\.)+[a-z0-9-]{2,}$/.test(h) ? h : null
  } catch {
    return null
  }
}
