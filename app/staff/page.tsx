'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { STAFF_KB } from '@/lib/staff-kb'

// Staff-only Havy. A free, rule-based assistant like the customer one: it answers from the internal handbook
// (lib/staff-kb.ts), so it has no API cost and no password. The page is noindex and not linked anywhere.

type Block = { h2: string; lines: string[] }
type Sec = { h1: string; intro: string[]; blocks: Block[] }
type Market = 'th' | 'us'
type Msg = { from: 'bot' | 'me'; text: string; chips?: { key: string; label: string; tone?: 'ghost' }[] }

const SERVICES: { label: string; kind: 'web' | 'brand' | 'app' | 'fix' | 'other'; key?: string }[] = [
  { label: 'เว็บไซต์ · Website', kind: 'web' },
  { label: 'Branding · แบรนด์', kind: 'brand' },
  { label: 'แอปมือถือ · Mobile app (iOS/Android)', kind: 'app' },
  { label: 'AI Assistant · แชตบอต Chatbot', kind: 'other', key: 'AI Assistant' },
  { label: 'AI Voice Agent · ผู้ช่วยเสียง', kind: 'other', key: 'AI Voice' },
  { label: 'ERP / CRM · ระบบหลังบ้าน', kind: 'other', key: 'ERP' },
  { label: 'อีคอมเมิร์ซ · E-commerce', kind: 'other', key: 'อีคอมเมิร์ซ' },
  { label: 'LINE Mini App · แอปบน LINE', kind: 'other', key: 'LINE' },
  { label: 'ออกแบบ UX/UI · Design', kind: 'other', key: 'UX/UI' },
  { label: 'SEO / AEO / GEO · ติดอันดับ', kind: 'other', key: 'SEO' },
  { label: 'ความปลอดภัย · Cybersecurity / PDPA', kind: 'other', key: 'ความปลอดภัย' },
  { label: 'Cloud / DevOps · คลาวด์', kind: 'other', key: 'Cloud' },
  { label: 'ข้อมูล · Data & Analytics', kind: 'other', key: 'ข้อมูลและ' },
  { label: 'ดูแลระบบ · Maintenance', kind: 'other', key: 'ดูแลรักษา' },
  { label: 'กลยุทธ์ · Digital strategy', kind: 'other', key: 'กลยุทธ์' },
  { label: 'แก้แอปที่ AI สร้าง · Fix AI-built apps', kind: 'fix' },
]
const INDUSTRIES = ['คลินิก / โรงพยาบาล / ความงาม · Clinic & Beauty', 'ร้านอาหาร / คาเฟ่ · Restaurant & Cafe', 'ร้านค้าปลีก / ขายออนไลน์ · Retail', 'อสังหาริมทรัพย์ · Real estate', 'โรงงาน / B2B · Manufacturing', 'โรงเรียน / คอร์สออนไลน์ · Education', 'โรงแรม / ท่องเที่ยว · Hospitality', 'บริการวิชาชีพ · Professional services', 'สตาร์ทอัพ · Startup', 'การเงิน / องค์กรใหญ่ · Finance & Enterprise', 'ก่อสร้าง / ขนส่ง · Construction & Logistics']
const TOPICS = ['ราคา · Price', 'ขอบเขตงาน · Scope (ได้อะไรบ้าง)', 'คำถามที่ควรถามลูกค้า · Questions to ask', 'วิธีขายและตอบข้อโต้แย้ง · Selling & objections', 'อธิบายให้เข้าใจง่าย · Plain explanation']

function parse(text: string): Sec[] {
  const secs: Sec[] = []
  let sec: Sec | null = null
  let blk: Block | null = null
  for (const raw of text.split('\n')) {
    const line = raw.replace(/\s+$/, '')
    if (line.startsWith('## ')) { blk = { h2: line.slice(3), lines: [] }; sec?.blocks.push(blk); continue }
    if (line.startsWith('# ')) { sec = { h1: line.slice(2), intro: [], blocks: [] }; blk = null; secs.push(sec); continue }
    if (!line.trim()) continue
    if (blk) blk.lines.push(line)
    else sec?.intro.push(line)
  }
  return secs
}

// Keep only the chosen market in lines like "ไทย: X บาท | USA: Y | ระยะเวลา..."
function forMarket(line: string, m: Market) {
  const other = m === 'th' ? 'USA:' : 'ไทย:'
  if (!/(^|\| )(ไทย:|USA:)/.test(line)) return line
  return line.split(' | ').filter((p) => !p.startsWith(other)).join(' | ')
}
const grams = (s: string) => { const g = new Set<string>(); const t = s.toLowerCase().replace(/\s+/g, ''); for (let i = 0; i + 3 <= t.length; i++) g.add(t.slice(i, i + 3)); return g }

const chipStyle: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.2)', borderRadius: 999, padding: '8px 14px', fontSize: 14, color: 'var(--ink)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }

export default function StaffPage() {
  const secs = useMemo(() => parse(STAFF_KB), [])
  const find = (k: string) => secs.find((s) => s.h1.includes(k))
  const ctx = useRef<{ svc?: number; market?: Market; ind?: string; step: 'svc' | 'market' | 'ind' | 'topic' | 'free' }>({ step: 'svc' })
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  const svcChips = SERVICES.map((s, i) => ({ key: 'svc:' + i, label: s.label }))
  const topicChips = [
    ...TOPICS.map((t) => ({ key: 'topic:' + t, label: t })),
    { key: 'ind', label: 'ถามตามธุรกิจลูกค้า · By industry', tone: 'ghost' as const },
    { key: 'svc', label: 'เปลี่ยนบริการ · Change service', tone: 'ghost' as const },
  ]

  function start() {
    ctx.current = { step: 'svc' }
    setMsgs([{ from: 'bot', text: 'สวัสดีครับ ผมน้องฮาวี่ สำหรับทีมภายใน อยากรู้เรื่องบริการอะไรครับ เลือกจากปุ่ม หรือพิมพ์ถามได้เลย เช่น "ลูกค้าบอกแพง ตอบยังไง"
Hi, I'm Havy for the internal team. Which service do you want to know about? Pick a button or just type, e.g. "customer says it's too expensive".', chips: svcChips }])
  }
  useEffect(start, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [msgs])

  // blocks that belong to the chosen service and market
  function blocksFor(): { title: string; blocks: Block[]; intro: string[] } {
    const c = ctx.current
    if (c.svc === undefined) return { title: '', blocks: [], intro: [] }
    const s = SERVICES[c.svc]
    const m = c.market || 'th'
    const usa = find('ตลาดสหรัฐฯ (USA)')
    if (s.kind === 'web') {
      const sec = find('เว็บไซต์ + AI')
      return { title: s.label, intro: sec?.intro || [], blocks: m === 'us' ? [...(usa?.blocks.filter((b) => b.h2.includes('เว็บไซต์')) || []), ...(sec?.blocks.filter((b) => !/^(Essential|Growth|Enterprise)/.test(b.h2)) || [])] : sec?.blocks || [] }
    }
    if (s.kind === 'brand') {
      const sec = find('Branding (ราคา')
      return { title: s.label, intro: [], blocks: m === 'us' ? [...(usa?.blocks.filter((b) => b.h2.includes('Branding')) || []), ...(sec?.blocks.filter((b) => !b.h2.startsWith('แพ็กเกจ')) || [])] : sec?.blocks || [] }
    }
    if (s.kind === 'app') {
      const sec = find('แอปบน App Store')
      return { title: s.label, intro: sec?.intro || [], blocks: sec?.blocks || [] }
    }
    if (s.kind === 'fix') {
      const lines = (find('ราคาที่ยืนยันแล้ว')?.intro || []).filter((l) => l.includes('แก้แอป'))
      return { title: s.label, intro: [], blocks: [{ h2: 'แก้แอปที่ AI สร้าง (ราคายืนยันแล้ว ดอลลาร์ เหมาจ่าย)', lines }] }
    }
    const b = find('บริการอื่น ๆ')?.blocks.find((x) => x.h2.includes(s.key || '___'))
    return { title: s.label, intro: [], blocks: b ? [b] : [] }
  }

  const fmt = (lines: string[], m?: Market) => lines.map((l) => (m ? forMarket(l, m) : l)).join('\n')

  function answerTopic(topic: string): string {
    const c = ctx.current
    const m = c.market || 'th'
    const { title, blocks, intro } = blocksFor()
    const mark = (s: string) => s + (/\[ประมาณการ/.test(s) || /ประมาณการ/.test(s) ? '' : '')
    const draftNote = '\n\n(ราคาส่วนใหญ่เป็นประมาณการ ยังไม่ยืนยัน)\n(Most prices are estimates, not yet confirmed.)'
    const sells = find('จุดขาย')?.intro.join('\n') || ''
    if (!blocks.length) return 'ยังไม่มีข้อมูลหัวข้อนี้ในคู่มือครับ\nNo information on this topic in the handbook yet.'
    const pick = (re: RegExp) => blocks.filter((b) => re.test(b.h2))
    if (topic.startsWith('ราคา')) {
      const priced = blocks.filter((b) => /(แพ็กเกจ|Essential|Growth|Enterprise|Starter|Standard|Premium|Branding|เว็บไซต์|แอปเริ่มต้น|แพลตฟอร์ม|แก้แอป)/.test(b.h2) || b.lines.some((l) => /บาท|\$[0-9]/.test(l)))
      const out: string[] = []
      for (const b of priced) {
        const ls = b.lines.filter((l) => /(บาท|\$[0-9]|ไทย:|USA:|ราคา)/.test(l) || /(เหมาะกับ|ได้อะไร|เว็บ:|AI:)/.test(l))
        out.push(`${b.h2}\n${fmt(ls.length ? ls : b.lines.slice(0, 3), m)}`)
      }
      const direct = intro.filter((l) => /บาท|\$[0-9]/.test(l))
      return mark(`${title} · ราคา Price ${m === 'th' ? 'ไทย Thailand (THB)' : 'USA (USD)'}\n\n${[...direct, ...out].join('\n\n')}` + draftNote)
    }
    if (topic.startsWith('ขอบเขต')) {
      const out = blocks.map((b) => {
        const ls = b.lines.filter((l) => /^(เหมาะกับ|ได้อะไร|ไม่ได้อะไร|ไม่รวม|เว็บ:|AI:|ขอบเขต|คืออะไร|ปัจจัยราคา|- )/.test(l))
        return ls.length ? `${b.h2}\n${fmt(ls, m)}` : ''
      }).filter(Boolean)
      return out.length ? `${title} · ขอบเขตงาน\n\n${out.join('\n\n')}` : `${title}\n\n${blocks.map((b) => `${b.h2}\n${fmt(b.lines, m)}`).join('\n\n')}`
    }
    if (topic.startsWith('คำถาม')) {
      const bs = pick(/คำถาม|ขั้นตอนขาย/)
      return bs.length ? bs.map((b) => `${b.h2}\n${fmt(b.lines)}`).join('\n\n') : `ยังไม่มีชุดคำถามเฉพาะของ ${title} ครับ คำถามพื้นฐานที่ใช้ได้กับทุกงาน:\n1. ปัญหาที่อยากแก้คืออะไร ใครคือผู้ใช้\n2. มีระบบหรือเว็บเดิมไหม\n3. ต้องเชื่อมระบบอะไรบ้าง\n4. งบประมาณคร่าว ๆ และกำหนดเวลา\n5. ใครเป็นผู้ตัดสินใจ`
    }
    if (topic.startsWith('วิธีขาย')) {
      const bs = pick(/วิธีขาย|ตอบข้อโต้แย้ง|ขั้นตอนขาย/)
      return `${bs.length ? bs.map((b) => `${b.h2}\n${fmt(b.lines)}`).join('\n\n') + '\n\n' : ''}จุดขายของเรา (เรียงตามลำดับ)\n${sells}`
    }
    const intro2 = pick(/คืออะไร/)
    if (intro2.length) return intro2.map((b) => `${b.h2}\n${fmt(b.lines)}`).join('\n\n')
    const first = blocks[0]
    return `${title}\n\n${first.lines.filter((l) => l.startsWith('คืออะไร')).join('\n') || fmt(first.lines.slice(0, 3))}`
  }

  function answerIndustry(label: string): string {
    const b = find('ถามธุรกิจ')?.blocks.find((x) => x.h2.includes(label.split(' · ')[0].split(' / ')[0]))
    return b ? `${b.h2}\n${fmt(b.lines)}\n\nถ้าบอกว่าลูกค้าอยู่ไทยหรือ USA ผมจะบอกราคาตามตลาดนั้นครับ\nTell me if the customer is in Thailand or the USA and I'll quote that market.` : 'ยังไม่มีข้อมูลธุรกิจนี้ในคู่มือครับ ลองบอกปัญหาหลักของธุรกิจ แล้วผมแนะนำบริการให้'
  }

  function answerFree(q: string): string {
    const g = grams(q)
    if (g.size === 0) return 'พิมพ์ถามเพิ่มได้เลยครับ'
    const cand: { score: number; head: string; lines: string[] }[] = []
    for (const s of secs) {
      if (s.h1.startsWith('บทบาท') || s.h1.startsWith('กฎเรื่องตลาด')) continue
      const units: { head: string; lines: string[] }[] = [{ head: s.h1.replace(/\s*\(.*$/, ''), lines: s.intro }, ...s.blocks.map((b) => ({ head: b.h2, lines: b.lines }))]
      for (const u of units) {
        if (!u.lines.length) continue
        const hit = u.lines.filter((l) => { let n = 0; const lg = grams(l); g.forEach((x) => { if (lg.has(x)) n++ }); return n >= Math.min(3, g.size) })
        if (!hit.length) continue
        const bg = grams(u.head + ' ' + u.lines.join(' '))
        let score = 0; g.forEach((x) => { if (bg.has(x)) score++ })
        cand.push({ score: score + hit.length, head: u.head, lines: hit })
      }
    }
    cand.sort((a, b) => b.score - a.score)
    const top = cand.slice(0, 3)
    if (!top.length) return 'ยังไม่เจอเรื่องนี้ในคู่มือครับ ลองเลือกบริการจากปุ่ม หรือเปลี่ยนคำถาม เช่น "ราคาเว็บ" "ลูกค้าบอกแพง" "นามบัตร"\nNot found in the handbook. Pick a service button or rephrase, e.g. "website price", "too expensive", "business card".'
    const m = ctx.current.market
    return top.map((t) => `${t.head}\n${t.lines.slice(0, 4).map((l) => (m ? forMarket(l, m) : l)).join('\n')}`).join('\n\n')
  }

  function push(...add: Msg[]) { setMsgs((p) => [...p.map((x) => ({ ...x, chips: undefined })), ...add]) }

  function onChip(key: string) {
    const c = ctx.current
    if (key === 'svc') { c.step = 'svc'; push({ from: 'bot', text: 'อยากรู้เรื่องบริการอะไรครับ\nWhich service?', chips: svcChips }); return }
    if (key === 'ind') { c.step = 'ind'; push({ from: 'bot', text: 'ลูกค้าทำธุรกิจอะไรครับ\nWhat business is the customer in?', chips: INDUSTRIES.map((x) => ({ key: 'ind:' + x, label: x })) }); return }
    if (key.startsWith('svc:')) {
      c.svc = Number(key.slice(4)); c.step = 'market'
      push({ from: 'me', text: SERVICES[c.svc].label }, { from: 'bot', text: 'ลูกค้าอยู่ตลาดไหนครับ (ราคาไทยกับ USA แยกกัน)\nWhich market? (Thai and USA prices are separate)', chips: [{ key: 'm:th', label: 'ไทย · Thailand (THB)' }, { key: 'm:us', label: 'USA · United States (USD)' }] })
      return
    }
    if (key.startsWith('m:')) {
      c.market = key.slice(2) as Market; c.step = 'topic'
      push({ from: 'me', text: c.market === 'th' ? 'ไทย · Thailand (THB)' : 'USA · United States (USD)' }, { from: 'bot', text: 'อยากรู้เรื่องอะไรครับ\nWhat do you want to know?', chips: topicChips })
      return
    }
    if (key.startsWith('topic:')) {
      const t = key.slice(6)
      if (!ctx.current.market) ctx.current.market = 'th'
      push({ from: 'me', text: t }, { from: 'bot', text: answerTopic(t), chips: topicChips })
      return
    }
    if (key.startsWith('ind:')) {
      const l = key.slice(4)
      push({ from: 'me', text: l }, { from: 'bot', text: answerIndustry(l), chips: svcChips.length ? [{ key: 'svc', label: 'เลือกบริการเพื่อดูราคา · Pick a service for pricing' }, { key: 'ind', label: 'ธุรกิจอื่น · Other industry', tone: 'ghost' }] : undefined })
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    setInput('')
    const chips = ctx.current.svc !== undefined ? topicChips : svcChips
    push({ from: 'me', text: q }, { from: 'bot', text: answerFree(q), chips })
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 16px 120px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0 14px' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>น้องฮาวี่ สำหรับทีมภายใน · Havy for the internal team</div>
          </div>
          <button onClick={start} style={{ ...chipStyle, fontSize: 13 }}>เริ่มใหม่</button>
        </header>

        {msgs.map((m, i) => (
          <div key={i} style={{ margin: '10px 0' }}>
            <div style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
              <div style={{ maxWidth: '90%', padding: '12px 16px', borderRadius: 18, whiteSpace: 'pre-wrap', lineHeight: 1.65, fontSize: 15, ...(m.from === 'me' ? { background: 'var(--accent)', color: '#14131A', borderBottomRightRadius: 6 } : { background: 'rgb(var(--fg) / 0.07)', borderBottomLeftRadius: 6 }) }}>{m.text}</div>
            </div>
            {m.chips && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {m.chips.map((c) => <button key={c.key} style={{ ...chipStyle, ...(c.tone === 'ghost' ? { opacity: 0.7 } : {}) }} onClick={() => onChip(c.key)}>{c.label}</button>)}
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={submit} style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'var(--bg)', borderTop: '1px solid rgb(var(--fg) / 0.12)', padding: '12px 16px calc(12px + env(safe-area-inset-bottom))' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 8 }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="พิมพ์ถามได้เลย เช่น ลูกค้าบอกแพง ตอบยังไง" style={{ flex: 1, padding: '12px 16px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.25)', background: 'transparent', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', minWidth: 0 }} />
          <button type="submit" disabled={!input.trim()} style={{ padding: '0 20px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', opacity: input.trim() ? 1 : 0.5 }}>ส่ง · Send</button>
        </div>
      </form>
    </main>
  )
}
