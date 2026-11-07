import { NextResponse } from 'next/server'
import { checkStaff } from '@/lib/lead-hunter/auth'
import { dbReady, deleteLead, getLead, insertLeads, isId, listLeads, updateLead } from '@/lib/lead-hunter/db'
import { apolloReady, apolloSearch } from '@/lib/lead-hunter/apollo'
import { auditSite } from '@/lib/lead-hunter/audit'
import { aiReady, aiReview, grade, ruleScore } from '@/lib/lead-hunter/score'
import { brevoListSet, brevoPushLead, brevoReady, leadPayload, n8nReady, notify } from '@/lib/lead-hunter/outbound'
import { LEAD_STATUSES, toDomain, type Lead, type LeadStatus, type NewLead } from '@/lib/lead-hunter/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

/**
 * Staff-only Lead Hunter API (dashboard at /staff/leads).
 * POST { action, ... } with header x-staff-key = STAFF_PASSWORD.
 * Actions: verify, config, list, search (Apollo), add (paste domains), audit, push (Brevo), update, delete.
 */

const fail = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status })
const s = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

function blank(domain: string, source: string): NewLead {
  return { domain, company: null, website: `https://${domain}`, industry: null, country: null, city: null, employees: null, linkedin: null, phone: null, source, apollo_id: null }
}

export async function POST(req: Request) {
  const auth = checkStaff(req)
  if (!auth.ok) return fail(auth.error, auth.status)

  let body: any
  try { body = await req.json() } catch { return fail('bad_request') }
  const action = s(body?.action, 20)

  if (action === 'verify') return NextResponse.json({ ok: true })
  if (action === 'config') {
    return NextResponse.json({ ok: true, config: { db: dbReady(), apollo: apolloReady(), ai: aiReady(), brevo: brevoReady(), brevoList: brevoListSet(), n8n: n8nReady() } })
  }

  if (!dbReady()) return fail('no_db', 503)

  try {
    switch (action) {
      case 'list':
        return NextResponse.json({ ok: true, leads: await listLeads() })

      case 'search': {
        if (!apolloReady()) return fail('no_apollo_key', 503)
        const { total, leads } = await apolloSearch({ keywords: s(body.keywords), location: s(body.location), size: s(body.size, 20), page: Number(body.page) || 1, perPage: Number(body.perPage) || 25 })
        const added = await insertLeads(leads)
        if (added.length) await notify('leads.imported', { source: 'apollo', count: added.length, leads: added.map(leadPayload) })
        return NextResponse.json({ ok: true, total, found: leads.length, added: added.length })
      }

      case 'add': {
        const raw = s(body.text, 20000).split(/[\s,;]+/)
        const domains = Array.from(new Set(raw.map(toDomain).filter((d): d is string => Boolean(d)))).slice(0, 100)
        if (!domains.length) return fail('no_domains')
        const added = await insertLeads(domains.map((d) => blank(d, 'manual')))
        if (added.length) await notify('leads.imported', { source: 'manual', count: added.length, leads: added.map(leadPayload) })
        return NextResponse.json({ ok: true, found: domains.length, added: added.length })
      }

      case 'audit': {
        if (!isId(body.id)) return fail('bad_id')
        const lead = await getLead(body.id)
        if (!lead) return fail('not_found', 404)
        const { audit, text } = await auditSite(lead.domain)
        const email = lead.email || audit.emails[0] || null
        const phone = lead.phone || audit.phones[0] || null
        const rules = ruleScore({ employees: lead.employees, email, phone }, audit)
        const ai = await aiReview({ ...lead, email, phone }, audit, text, rules.score)
        const score = Math.max(0, Math.min(100, rules.score + (ai?.adjust || 0)))
        const patch: Partial<Lead> = {
          audit, ai, score, grade: grade(score), email, phone, audited_at: audit.checkedAt,
          company: lead.company || audit.title?.split(/[|\-–—:]/)[0].trim().slice(0, 120) || null,
          status: lead.status === 'new' ? 'audited' : lead.status,
        }
        const saved = await updateLead(lead.id, patch)
        if (saved) await notify('lead.audited', leadPayload(saved))
        return NextResponse.json({ ok: true, lead: saved })
      }

      case 'push': {
        if (!isId(body.id)) return fail('bad_id')
        const lead = await getLead(body.id)
        if (!lead) return fail('not_found', 404)
        const r = await brevoPushLead(lead)
        if (!r.ok) return fail(r.error || 'brevo_failed', 502)
        const saved = await updateLead(lead.id, { brevo_synced_at: new Date().toISOString() })
        if (saved) await notify('lead.pushed', leadPayload(saved))
        return NextResponse.json({ ok: true, lead: saved })
      }

      case 'update': {
        if (!isId(body.id)) return fail('bad_id')
        const p = body.patch || {}
        const patch: Partial<Lead> = {}
        if (typeof p.status === 'string') {
          if (!(LEAD_STATUSES as readonly string[]).includes(p.status)) return fail('bad_status')
          patch.status = p.status as LeadStatus
        }
        for (const k of ['notes', 'email', 'contact_name', 'contact_title', 'company', 'phone'] as const) {
          if (typeof p[k] === 'string') patch[k] = s(p[k], k === 'notes' ? 4000 : 200) || null
        }
        if (patch.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patch.email)) return fail('bad_email')
        const saved = await updateLead(body.id, patch)
        if (!saved) return fail('not_found', 404)
        if (patch.status) await notify('lead.status', leadPayload(saved))
        return NextResponse.json({ ok: true, lead: saved })
      }

      case 'delete': {
        if (!isId(body.id)) return fail('bad_id')
        await deleteLead(body.id)
        return NextResponse.json({ ok: true })
      }

      default:
        return fail('unknown_action')
    }
  } catch (e: any) {
    console.error('staff-leads', action, e)
    return fail(String(e?.message || 'failed').slice(0, 300), 502)
  }
}
