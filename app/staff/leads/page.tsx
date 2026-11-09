'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LEAD_STATUSES, type Lead, type LeadStatus } from '@/lib/lead-hunter/types'

type Config = { db: boolean; apollo: boolean; ai: boolean; brevo: boolean; brevoList: boolean; n8n: boolean }

const KEY = 'hv_staff_key'

const STATUS_TH: Record<LeadStatus, string> = {
  new: 'ใหม่', audited: 'ตรวจแล้ว', qualified: 'น่าสนใจ', contacted: 'ติดต่อแล้ว', replied: 'ตอบกลับ', won: 'ปิดได้', lost: 'ไม่สำเร็จ', skip: 'ข้าม',
}

const ERR_TH: Record<string, string> = {
  unauthorized: 'รหัสผ่านไม่ถูกต้อง',
  rate_limited: 'ใส่รหัสผิดหลายครั้ง รอ 10 นาทีแล้วลองใหม่',
  not_configured: 'ยังไม่ได้ตั้ง STAFF_PASSWORD บน Vercel',
  no_db: 'ยังไม่ได้เชื่อม Supabase (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)',
  no_apollo_key: 'ยังไม่ได้ใส่ APOLLO_API_KEY',
  no_brevo_key: 'ยังไม่ได้ใส่ BREVO_API_KEY',
  no_email: 'lead นี้ยังไม่มีอีเมล ใส่อีเมลก่อนส่งเข้า Brevo',
  no_domains: 'ไม่พบโดเมนที่ใช้ได้ ใส่บรรทัดละ 1 เว็บ เช่น example.co.th',
  bad_email: 'รูปแบบอีเมลไม่ถูกต้อง',
  network: 'เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง',
}
const errText = (e: string) => ERR_TH[e] || e

const SIZES = [
  ['', 'ทุกขนาด'], ['1,10', '1-10 คน'], ['11,50', '11-50 คน'], ['51,200', '51-200 คน'], ['201,500', '201-500 คน'], ['501,1000', '501-1,000 คน'], ['1001,10000', '1,000+ คน'],
] as const

const GRADE_BG: Record<string, string> = { A: '#7BE495', B: '#B9ADF7', C: '#F5D06F', D: 'rgb(var(--fg) / 0.25)' }
const SEV_COLOR = { high: '#FF7A7A', med: '#F5C26B', low: 'rgb(var(--fg) / 0.45)' }

const box: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.12)', borderRadius: 16, padding: 16, background: 'rgb(var(--fg) / 0.03)' }
const input: React.CSSProperties = { width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid rgb(var(--fg) / 0.22)', background: 'transparent', color: 'var(--ink)', fontSize: 15, fontFamily: 'inherit', minWidth: 0 }
const btn: React.CSSProperties = { padding: '9px 16px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.22)', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, whiteSpace: 'nowrap' }
const primary: React.CSSProperties = { ...btn, border: 0, background: 'var(--accent)', color: 'var(--on-accent)', fontWeight: 600 }
const label: React.CSSProperties = { fontSize: 12, opacity: 0.65, marginBottom: 4, display: 'block' }

function fmtDate(iso: string | null) {
  if (!iso) return ''
  try { return new Date(iso).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) } catch { return iso }
}

export default function LeadHunterPage() {
  const [key, setKey] = useState<string | null>(null)
  const [pass, setPass] = useState('')
  const [loginErr, setLoginErr] = useState('')
  const [config, setConfig] = useState<Config | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<{ tone: 'ok' | 'err'; text: string } | null>(null)
  const [busy, setBusy] = useState<Record<string, string>>({})
  const [open, setOpen] = useState<string | null>(null)

  const [tab, setTab] = useState<'apollo' | 'manual'>('manual')
  const [q, setQ] = useState({ keywords: '', location: 'Thailand', size: '11,50', page: 1, perPage: 25 })
  const [paste, setPaste] = useState('')

  const [filter, setFilter] = useState({ text: '', status: '', grade: '', sort: 'score' })
  const [bulk, setBulk] = useState<{ done: number; total: number } | null>(null)
  const stopBulk = useRef(false)

  const api = useCallback(async (action: string, data: Record<string, unknown> = {}, k = key) => {
    try {
      const r = await fetch('/api/staff-leads', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-staff-key': k || '' }, body: JSON.stringify({ action, ...data }) })
      const j = await r.json().catch(() => ({ ok: false, error: `HTTP ${r.status}` }))
      if (r.status === 401 && k === key) { try { sessionStorage.removeItem(KEY) } catch {} ; setKey(null) }
      return j as { ok: boolean; error?: string; [k: string]: any }
    } catch {
      return { ok: false, error: 'network' }
    }
  }, [key])

  const refresh = useCallback(async () => {
    setLoading(true)
    const [c, l] = await Promise.all([api('config'), api('list')])
    if (c.ok) setConfig(c.config)
    if (l.ok) setLeads(l.leads)
    else if (l.error && l.error !== 'no_db') setMsg({ tone: 'err', text: errText(l.error) })
    setLoading(false)
  }, [api])

  useEffect(() => {
    try { const k = sessionStorage.getItem(KEY); if (k) setKey(k) } catch {}
  }, [])
  useEffect(() => { if (key) refresh() }, [key, refresh])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoginErr('')
    const r = await api('verify', {}, pass)
    if (!r.ok) return setLoginErr(errText(r.error || 'unauthorized'))
    try { sessionStorage.setItem(KEY, pass) } catch {}
    setKey(pass)
    setPass('')
  }

  const replace = (l: Lead) => setLeads((prev) => prev.map((x) => (x.id === l.id ? l : x)))
  const mark = (id: string, what: string | null) => setBusy((b) => { const n = { ...b }; if (what) n[id] = what; else delete n[id]; return n })

  async function find(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    const r = tab === 'apollo' ? await api('search', q) : await api('add', { text: paste })
    if (!r.ok) return setMsg({ tone: 'err', text: errText(r.error || 'failed') })
    const extra = tab === 'apollo' ? ` (Apollo มีทั้งหมด ${Number(r.total).toLocaleString()} บริษัท หน้านี้ ${r.found})` : ''
    setMsg({ tone: 'ok', text: `เพิ่ม lead ใหม่ ${r.added} รายการ${r.found - r.added > 0 ? ` (ซ้ำกับที่มีอยู่ ${r.found - r.added})` : ''}${extra}` })
    if (tab === 'manual') setPaste('')
    await refresh()
  }

  async function audit(id: string) {
    mark(id, 'audit')
    const r = await api('audit', { id })
    mark(id, null)
    if (r.ok && r.lead) replace(r.lead)
    else setMsg({ tone: 'err', text: errText(r.error || 'failed') })
    return r.ok
  }

  async function auditAll() {
    const todo = leads.filter((l) => !l.audited_at && l.status !== 'skip')
    if (!todo.length) return
    stopBulk.current = false
    setBulk({ done: 0, total: todo.length })
    for (let i = 0; i < todo.length; i++) {
      if (stopBulk.current) break
      await audit(todo[i].id)
      setBulk({ done: i + 1, total: todo.length })
    }
    setBulk(null)
  }

  async function push(id: string) {
    mark(id, 'push')
    const r = await api('push', { id })
    mark(id, null)
    if (r.ok && r.lead) { replace(r.lead); setMsg({ tone: 'ok', text: 'ส่งเข้า Brevo แล้ว' }) }
    else setMsg({ tone: 'err', text: errText(r.error || 'failed') })
  }

  async function update(id: string, patch: Partial<Lead>) {
    mark(id, 'save')
    const r = await api('update', { id, patch })
    mark(id, null)
    if (r.ok && r.lead) replace(r.lead)
    else setMsg({ tone: 'err', text: errText(r.error || 'failed') })
    return r.ok
  }

  async function remove(id: string) {
    if (!confirm('ลบ lead นี้ออกจากระบบ? ลบแล้วกู้คืนไม่ได้')) return
    mark(id, 'delete')
    const r = await api('delete', { id })
    mark(id, null)
    if (r.ok) setLeads((prev) => prev.filter((x) => x.id !== id))
    else setMsg({ tone: 'err', text: errText(r.error || 'failed') })
  }

  const shown = useMemo(() => {
    const t = filter.text.trim().toLowerCase()
    const out = leads.filter((l) =>
      (!filter.status || l.status === filter.status) &&
      (!filter.grade || l.grade === filter.grade) &&
      (!t || [l.company, l.domain, l.industry, l.email, l.city, l.country].some((v) => (v || '').toLowerCase().includes(t))))
    if (filter.sort === 'new') out.sort((a, b) => b.created_at.localeCompare(a.created_at))
    else out.sort((a, b) => (b.score ?? -1) - (a.score ?? -1))
    return out
  }, [leads, filter])

  const stats = useMemo(() => ({
    total: leads.length,
    a: leads.filter((l) => l.grade === 'A').length,
    b: leads.filter((l) => l.grade === 'B').length,
    pending: leads.filter((l) => !l.audited_at && l.status !== 'skip').length,
    synced: leads.filter((l) => l.brevo_synced_at).length,
    active: leads.filter((l) => ['contacted', 'replied'].includes(l.status)).length,
    won: leads.filter((l) => l.status === 'won').length,
  }), [leads])

  /* ---------------- login ---------------- */
  if (!key) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)', display: 'grid', placeItems: 'center', padding: 16 }}>
        <form onSubmit={login} style={{ ...box, width: '100%', maxWidth: 380 }}>
          <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
          <h1 style={{ fontSize: 22, fontWeight: 600, margin: '4px 0 16px' }}>AI Lead Hunter</h1>
          <label style={label} htmlFor="pw">รหัสผ่านพนักงาน</label>
          <input id="pw" type="password" autoComplete="current-password" value={pass} onChange={(e) => setPass(e.target.value)} style={input} />
          {loginErr && <div style={{ color: SEV_COLOR.high, fontSize: 14, marginTop: 8 }}>{loginErr}</div>}
          <button type="submit" disabled={!pass} style={{ ...primary, width: '100%', marginTop: 14, opacity: pass ? 1 : 0.5 }}>เข้าสู่ระบบ</button>
        </form>
      </main>
    )
  }

  /* ---------------- dashboard ---------------- */
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '16px 16px 80px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0 16px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
            <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>AI Lead Hunter</h1>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a href="/staff" style={{ ...btn, textDecoration: 'none' }}>น้องฮาวี่</a>
            <button style={btn} onClick={refresh} disabled={loading}>{loading ? 'กำลังโหลด…' : 'รีเฟรช'}</button>
            <button style={btn} onClick={() => { try { sessionStorage.removeItem(KEY) } catch {} ; setKey(null) }}>ออกจากระบบ</button>
          </div>
        </header>

        {config && <ConfigBar c={config} />}

        {config && !config.db ? (
          <SetupDb />
        ) : (
          <>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, margin: '14px 0' }}>
              <Stat n={stats.total} t="lead ทั้งหมด" />
              <Stat n={stats.a + stats.b} t="เกรด A + B" hint={`A ${stats.a} · B ${stats.b}`} />
              <Stat n={stats.pending} t="รอตรวจเว็บ" />
              <Stat n={stats.synced} t="ส่งเข้า Brevo" />
              <Stat n={stats.active} t="กำลังคุย" />
              <Stat n={stats.won} t="ปิดได้" />
            </section>

            <section style={box}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <button style={tab === 'manual' ? primary : btn} onClick={() => setTab('manual')}>วางรายชื่อเว็บ</button>
                <button style={tab === 'apollo' ? primary : btn} onClick={() => setTab('apollo')}>ค้นจาก Apollo</button>
              </div>
              <form onSubmit={find}>
                {tab === 'manual' ? (
                  <>
                    <label style={label} htmlFor="paste">ใส่เว็บไซต์บริษัทเป้าหมาย บรรทัดละ 1 เว็บ (ได้ครั้งละไม่เกิน 100)</label>
                    <textarea id="paste" value={paste} onChange={(e) => setPaste(e.target.value)} rows={4} placeholder={'example.co.th\nhttps://www.company.com'} style={{ ...input, resize: 'vertical' }} />
                  </>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                    <div><label style={label}>คีย์เวิร์ดธุรกิจ (คั่นด้วย ,)</label><input style={input} value={q.keywords} onChange={(e) => setQ({ ...q, keywords: e.target.value })} placeholder="restaurant, clinic, logistics" /></div>
                    <div><label style={label}>ประเทศ/เมือง (คั่นด้วย ,)</label><input style={input} value={q.location} onChange={(e) => setQ({ ...q, location: e.target.value })} placeholder="Thailand, Bangkok" /></div>
                    <div><label style={label}>จำนวนพนักงาน</label>
                      <select style={input} value={q.size} onChange={(e) => setQ({ ...q, size: e.target.value })}>{SIZES.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ flex: 1 }}><label style={label}>หน้า</label><input style={input} type="number" min={1} value={q.page} onChange={(e) => setQ({ ...q, page: Math.max(1, Number(e.target.value) || 1) })} /></div>
                      <div style={{ flex: 1 }}><label style={label}>ต่อหน้า</label><input style={input} type="number" min={1} max={100} value={q.perPage} onChange={(e) => setQ({ ...q, perPage: Math.min(100, Math.max(1, Number(e.target.value) || 25)) })} /></div>
                    </div>
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <button type="submit" style={primary} disabled={tab === 'manual' ? !paste.trim() : !config?.apollo}>{tab === 'manual' ? 'เพิ่มเข้ารายการ' : 'ค้นหาและเพิ่ม'}</button>
                  {tab === 'apollo' && config && !config.apollo && <span style={{ fontSize: 13, opacity: 0.7 }}>ต้องใส่ APOLLO_API_KEY บน Vercel ก่อน</span>}
                </div>
              </form>
            </section>

            {msg && <div style={{ margin: '12px 0', padding: '10px 14px', borderRadius: 12, fontSize: 14, background: msg.tone === 'ok' ? 'rgba(123,228,149,.12)' : 'rgba(255,122,122,.12)', color: msg.tone === 'ok' ? 'inherit' : SEV_COLOR.high }}>{msg.text}</div>}

            <section style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', margin: '16px 0 10px' }}>
              <input style={{ ...input, flex: '1 1 200px', width: 'auto' }} placeholder="ค้นชื่อบริษัท โดเมน อีเมล" value={filter.text} onChange={(e) => setFilter({ ...filter, text: e.target.value })} />
              <select style={{ ...input, width: 'auto' }} value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
                <option value="">ทุกสถานะ</option>
                {LEAD_STATUSES.map((s) => <option key={s} value={s}>{STATUS_TH[s]}</option>)}
              </select>
              <select style={{ ...input, width: 'auto' }} value={filter.grade} onChange={(e) => setFilter({ ...filter, grade: e.target.value })}>
                <option value="">ทุกเกรด</option>
                {['A', 'B', 'C', 'D'].map((g) => <option key={g} value={g}>เกรด {g}</option>)}
              </select>
              <select style={{ ...input, width: 'auto' }} value={filter.sort} onChange={(e) => setFilter({ ...filter, sort: e.target.value })}>
                <option value="score">คะแนนสูงสุด</option>
                <option value="new">เพิ่มล่าสุด</option>
              </select>
              {bulk ? (
                <button style={btn} onClick={() => { stopBulk.current = true }}>หยุด ({bulk.done}/{bulk.total})</button>
              ) : (
                <button style={primary} disabled={!stats.pending} onClick={auditAll}>ตรวจเว็บที่ยังไม่ตรวจ ({stats.pending})</button>
              )}
            </section>

            {!shown.length && !loading && (
              <div style={{ ...box, textAlign: 'center', opacity: 0.75 }}>{leads.length ? 'ไม่มี lead ที่ตรงกับตัวกรอง' : 'ยังไม่มี lead เริ่มจากวางรายชื่อเว็บด้านบน หรือค้นจาก Apollo'}</div>
            )}

            <div style={{ display: 'grid', gap: 10 }}>
              {shown.map((l) => (
                <LeadCard key={l.id} l={l} open={open === l.id} busy={busy[l.id]} config={config}
                  onToggle={() => setOpen(open === l.id ? null : l.id)}
                  onAudit={() => audit(l.id)} onPush={() => push(l.id)} onDelete={() => remove(l.id)} onUpdate={(p) => update(l.id, p)} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}

function Stat({ n, t, hint }: { n: number; t: string; hint?: string }) {
  return (
    <div style={{ ...box, padding: '12px 14px' }}>
      <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.1 }}>{n.toLocaleString()}</div>
      <div style={{ fontSize: 13, opacity: 0.7 }}>{t}</div>
      {hint && <div style={{ fontSize: 12, opacity: 0.5 }}>{hint}</div>}
    </div>
  )
}

function ConfigBar({ c }: { c: Config }) {
  const items: [string, boolean, string?][] = [
    ['Supabase', c.db], ['Apollo', c.apollo], ['Claude AI', c.ai], ['Brevo', c.brevo, c.brevo && !c.brevoList ? 'ยังไม่ตั้ง list' : undefined], ['n8n', c.n8n],
  ]
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {items.map(([name, ok, note]) => (
        <span key={name} title={ok ? 'เชื่อมแล้ว' : 'ยังไม่ได้ตั้งค่า'} style={{ fontSize: 13, padding: '4px 10px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.15)', opacity: ok ? 1 : 0.6 }}>
          <span style={{ color: ok ? '#7BE495' : SEV_COLOR.high }}>{ok ? '●' : '○'}</span> {name}{note ? ` · ${note}` : ''}
        </span>
      ))}
    </div>
  )
}

function SetupDb() {
  return (
    <section style={{ ...box, marginTop: 14, lineHeight: 1.7 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 8px' }}>ต้องเชื่อมฐานข้อมูลก่อนเริ่มใช้</h2>
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        <li>สร้างโปรเจกต์ที่ supabase.com (แพ็กเกจฟรีใช้ได้)</li>
        <li>เปิด SQL Editor แล้วรันไฟล์ <code>supabase/lead-hunter.sql</code> ในโปรเจกต์เว็บ</li>
        <li>ไปที่ Project Settings → API คัดลอก Project URL และ service_role key (หรือ secret key)</li>
        <li>ใส่ใน Vercel → Settings → Environment Variables เป็น <code>SUPABASE_URL</code> และ <code>SUPABASE_SERVICE_ROLE_KEY</code> แล้ว Redeploy</li>
      </ol>
    </section>
  )
}

function LeadCard({ l, open, busy, config, onToggle, onAudit, onPush, onDelete, onUpdate }: {
  l: Lead; open: boolean; busy?: string; config: Config | null
  onToggle: () => void; onAudit: () => void; onPush: () => void; onDelete: () => void; onUpdate: (p: Partial<Lead>) => Promise<boolean>
}) {
  const [form, setForm] = useState({ email: l.email || '', contact_name: l.contact_name || '', contact_title: l.contact_title || '', phone: l.phone || '', notes: l.notes || '' })
  const [copied, setCopied] = useState(false)
  useEffect(() => { setForm({ email: l.email || '', contact_name: l.contact_name || '', contact_title: l.contact_title || '', phone: l.phone || '', notes: l.notes || '' }) }, [l])
  const dirty = form.email !== (l.email || '') || form.contact_name !== (l.contact_name || '') || form.contact_title !== (l.contact_title || '') || form.phone !== (l.phone || '') || form.notes !== (l.notes || '')
  const a = l.audit
  const site = l.website || `https://${l.domain}`
  const meta = [l.industry, [l.city, l.country].filter(Boolean).join(', '), l.employees ? `${l.employees.toLocaleString()} คน` : '', a?.platform].filter(Boolean).join(' · ')

  return (
    <article style={{ ...box, padding: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', flexWrap: 'wrap' }}>
        <div title={l.score === null ? 'ยังไม่ตรวจ' : `คะแนน ${l.score}`} style={{ width: 52, height: 52, borderRadius: 14, display: 'grid', placeItems: 'center', background: l.grade ? GRADE_BG[l.grade] : 'rgb(var(--fg) / 0.08)', color: l.grade && l.grade !== 'D' ? '#14131A' : 'inherit', flex: '0 0 auto' }}>
          <div style={{ textAlign: 'center', lineHeight: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{l.grade || '–'}</div>
            <div style={{ fontSize: 11, marginTop: 2 }}>{l.score ?? ''}</div>
          </div>
        </div>
        <button onClick={onToggle} style={{ flex: '1 1 220px', minWidth: 0, textAlign: 'left', background: 'none', border: 0, color: 'inherit', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }} aria-expanded={open}>
          <div style={{ fontWeight: 600, fontSize: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.company || l.domain}</div>
          <div style={{ fontSize: 13, opacity: 0.65, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.domain}{meta ? ` · ${meta}` : ''}</div>
          {a && <div style={{ fontSize: 13, marginTop: 2, opacity: 0.85 }}>{a.ok ? `สุขภาพเว็บ ${a.health}/100 · พบ ${a.issues.length} ปัญหา` : 'เปิดเว็บไม่ได้'}{l.email ? ` · ${l.email}` : ''}</div>}
        </button>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <select aria-label="สถานะ" value={l.status} disabled={!!busy} onChange={(e) => onUpdate({ status: e.target.value as LeadStatus })} style={{ ...input, width: 'auto', padding: '7px 10px', fontSize: 14 }}>
            {LEAD_STATUSES.map((s) => <option key={s} value={s}>{STATUS_TH[s]}</option>)}
          </select>
          <button style={btn} disabled={!!busy} onClick={onAudit}>{busy === 'audit' ? 'กำลังตรวจ…' : l.audited_at ? 'ตรวจใหม่' : 'ตรวจเว็บ'}</button>
          <button style={btn} onClick={onToggle}>{open ? 'ย่อ' : 'ดูรายละเอียด'}</button>
        </div>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.1)', padding: 14, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>ผลตรวจเว็บไซต์</h3>
            {!a && <div style={{ fontSize: 14, opacity: 0.7 }}>ยังไม่ได้ตรวจ กด “ตรวจเว็บ” ด้านบน</div>}
            {a && (
              <>
                <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 8 }}>
                  <a href={site} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>{a.url || site}</a>
                  {a.ok && ` · ${a.https ? 'HTTPS' : 'ไม่มี HTTPS'} · ${((a.loadMs || 0) / 1000).toFixed(1)} วิ`}
                  {a.copyrightYear ? ` · © ${a.copyrightYear}` : ''} · ตรวจเมื่อ {fmtDate(l.audited_at)}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                  {a.issues.map((i) => (
                    <li key={i.k} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: SEV_COLOR[i.sev], flex: '0 0 auto' }} aria-label={i.sev}>●</span>{i.th}
                    </li>
                  ))}
                  {a.ok && !a.issues.length && <li style={{ fontSize: 14 }}>ไม่พบปัญหาจากการตรวจเบื้องต้น</li>}
                </ul>
                {(a.socials.length > 0 || a.phones.length > 0) && <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>ช่องทางที่พบ: {[...a.phones, ...a.socials].join(' · ')}</div>}
              </>
            )}

            {l.ai && (
              <div style={{ marginTop: 16 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 6px' }}>AI วิเคราะห์</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, margin: '0 0 8px' }}>{l.ai.summary}</p>
                {l.ai.reason && <p style={{ fontSize: 13, opacity: 0.7, margin: '0 0 8px' }}>คะแนน {l.ai.adjust >= 0 ? '+' : ''}{l.ai.adjust}: {l.ai.reason}</p>}
                {l.ai.services.length > 0 && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                    {l.ai.services.map((s) => <a key={s} href={`/th/services/${s}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, padding: '3px 10px', borderRadius: 999, background: 'rgb(var(--fg) / 0.08)', color: 'inherit', textDecoration: 'none' }}>{s}</a>)}
                  </div>
                )}
                {l.ai.pitch && (
                  <div style={{ ...box, padding: 12, fontSize: 14, lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontSize: 12, opacity: 0.65 }}>ข้อความเปิดการขาย (ตรวจก่อนส่ง)</span>
                      <button style={{ ...btn, padding: '4px 12px', fontSize: 12 }} onClick={() => { navigator.clipboard?.writeText(l.ai!.pitch).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }).catch(() => {}) }}>{copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</button>
                    </div>
                    {l.ai.pitch}
                  </div>
                )}
              </div>
            )}
            {a && !l.ai && config && !config.ai && <div style={{ fontSize: 13, opacity: 0.7, marginTop: 12 }}>ยังไม่มีบทวิเคราะห์ AI (ต้องตั้ง ANTHROPIC_API_KEY)</div>}
          </div>

          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>ผู้ติดต่อและบันทึก</h3>
            <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ gridColumn: '1 / -1' }}><label style={label}>อีเมล</label><input style={input} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div><label style={label}>ชื่อผู้ติดต่อ</label><input style={input} value={form.contact_name} onChange={(e) => setForm({ ...form, contact_name: e.target.value })} /></div>
              <div><label style={label}>ตำแหน่ง</label><input style={input} value={form.contact_title} onChange={(e) => setForm({ ...form, contact_title: e.target.value })} /></div>
              <div style={{ gridColumn: '1 / -1' }}><label style={label}>โทรศัพท์</label><input style={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              <div style={{ gridColumn: '1 / -1' }}><label style={label}>บันทึก</label><textarea style={{ ...input, resize: 'vertical' }} rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
            </div>
            {a && a.emails.length > 1 && <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>อีเมลที่พบในเว็บ: {a.emails.join(', ')}</div>}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12, alignItems: 'center' }}>
              <button style={primary} disabled={!dirty || !!busy} onClick={() => onUpdate(form)}>{busy === 'save' ? 'กำลังบันทึก…' : 'บันทึก'}</button>
              <button style={btn} disabled={!!busy || !l.email || !config?.brevo} onClick={onPush} title={!l.email ? 'ต้องมีอีเมลก่อน' : !config?.brevo ? 'ยังไม่ได้ตั้ง BREVO_API_KEY' : ''}>{busy === 'push' ? 'กำลังส่ง…' : l.brevo_synced_at ? 'ส่งเข้า Brevo อีกครั้ง' : 'ส่งเข้า Brevo'}</button>
              <button style={{ ...btn, color: SEV_COLOR.high, borderColor: 'rgba(255,122,122,.4)' }} disabled={!!busy} onClick={onDelete}>ลบ</button>
            </div>
            <div style={{ fontSize: 12, opacity: 0.55, marginTop: 10, lineHeight: 1.6 }}>
              ที่มา: {l.source === 'apollo' ? 'Apollo' : 'เพิ่มเอง'} · เพิ่มเมื่อ {fmtDate(l.created_at)}
              {l.brevo_synced_at && <> · ส่ง Brevo {fmtDate(l.brevo_synced_at)}</>}
              {l.linkedin && <> · <a href={l.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>LinkedIn</a></>}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
