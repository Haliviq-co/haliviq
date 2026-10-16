'use client'

import { useMemo, useState } from 'react'
import { STAFF_KB } from '@/lib/staff-kb'

type Block = { h2: string; lines: string[] }
type Sec = { h1: string; intro: string[]; blocks: Block[] }
type Market = 'th' | 'us'

const SERVICES: { label: string; kind: 'web' | 'brand' | 'app' | 'fix' | 'other'; key?: string }[] = [
  { label: 'เว็บไซต์', kind: 'web' },
  { label: 'Branding', kind: 'brand' },
  { label: 'แอปมือถือ (iOS/Android)', kind: 'app' },
  { label: 'AI Assistant / แชตบอต', kind: 'other', key: 'AI Assistant' },
  { label: 'AI Voice Agent', kind: 'other', key: 'AI Voice' },
  { label: 'ERP / CRM', kind: 'other', key: 'ERP' },
  { label: 'อีคอมเมิร์ซ', kind: 'other', key: 'อีคอมเมิร์ซ' },
  { label: 'LINE Mini App', kind: 'other', key: 'LINE' },
  { label: 'ออกแบบ UX/UI', kind: 'other', key: 'UX/UI' },
  { label: 'SEO / AEO / GEO', kind: 'other', key: 'SEO' },
  { label: 'ความปลอดภัยไซเบอร์ / PDPA', kind: 'other', key: 'ความปลอดภัย' },
  { label: 'Cloud / DevOps', kind: 'other', key: 'Cloud' },
  { label: 'ข้อมูลและการวิเคราะห์', kind: 'other', key: 'ข้อมูลและ' },
  { label: 'ดูแลรักษาระบบ', kind: 'other', key: 'ดูแลรักษา' },
  { label: 'กลยุทธ์ดิจิทัล', kind: 'other', key: 'กลยุทธ์' },
  { label: 'แก้แอปที่ AI สร้าง', kind: 'fix' },
]
const INDUSTRIES = ['คลินิก / โรงพยาบาล / ความงาม', 'ร้านอาหาร / คาเฟ่', 'ร้านค้าปลีก / ขายออนไลน์', 'อสังหาริมทรัพย์', 'โรงงาน / B2B', 'โรงเรียน / คอร์สออนไลน์', 'โรงแรม / ท่องเที่ยว', 'บริการวิชาชีพ', 'สตาร์ทอัพ', 'การเงิน / องค์กรใหญ่', 'ก่อสร้าง / ขนส่ง']

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

const card: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.14)', borderRadius: 16, padding: '18px 20px', margin: '14px 0' }
const chip: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.2)', borderRadius: 999, padding: '8px 14px', fontSize: 14, color: 'var(--ink)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }
const chipOn: React.CSSProperties = { ...chip, background: 'var(--accent)', color: '#14131A', borderColor: 'var(--accent)', fontWeight: 600 }

function Lines({ lines, m }: { lines: string[]; m?: Market }) {
  return (
    <>
      {lines.map((l, i) => {
        const t = m ? forMarket(l, m) : l
        const isDraft = t.includes('[ประมาณการ')
        return <div key={i} style={{ margin: '6px 0', lineHeight: 1.7, fontSize: 15, paddingLeft: /^(- |\d+\. )/.test(t) ? 0 : 0, opacity: isDraft ? 0.95 : 1 }}>{t}</div>
      })}
    </>
  )
}

function BlockView({ b, m }: { b: Block; m?: Market }) {
  return (
    <div style={card}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6, color: 'var(--accent)' }}>{b.h2}</div>
      <Lines lines={b.lines} m={m} />
    </div>
  )
}

export default function StaffPage() {
  const secs = useMemo(() => parse(STAFF_KB), [])
  const [svc, setSvc] = useState<number | null>(null)
  const [market, setMarket] = useState<Market>('th')
  const [ind, setInd] = useState<string | null>(null)
  const [q, setQ] = useState('')
  const [extra, setExtra] = useState<'sell' | 'terms' | 'company' | null>(null)

  const find = (k: string) => secs.find((s) => s.h1.includes(k))
  const usa = find('ตลาดสหรัฐฯ (USA)')
  const other = find('บริการอื่น ๆ')
  const industries = find('ถามธุรกิจ')
  const confirmed = find('ราคาที่ยืนยันแล้ว')

  const results = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (t.length < 2) return []
    const out: { h: string; line: string }[] = []
    for (const s of secs) {
      if (s.h1.startsWith('บทบาท') || s.h1.startsWith('กฎเรื่องตลาด')) continue
      const push = (h: string, line: string) => { if (line.toLowerCase().includes(t)) out.push({ h, line }) }
      s.intro.forEach((l) => push(s.h1, l))
      s.blocks.forEach((b) => b.lines.forEach((l) => push(`${s.h1} › ${b.h2}`, l)))
    }
    return out.slice(0, 40)
  }, [q, secs])

  function serviceContent() {
    if (svc === null) return null
    const s = SERVICES[svc]
    const view: React.ReactNode[] = []
    if (s.kind === 'web') {
      const sec = find('เว็บไซต์ + AI')
      sec?.intro.length ? view.push(<div key="i" style={card}><Lines lines={sec.intro} /></div>) : null
      if (market === 'us') usa?.blocks.filter((b) => b.h2.includes('เว็บไซต์')).forEach((b, i) => view.push(<BlockView key={'u' + i} b={b} />))
      else sec?.blocks.forEach((b, i) => view.push(<BlockView key={i} b={b} />))
    } else if (s.kind === 'brand') {
      const sec = find('Branding (ราคา')
      if (market === 'us') {
        usa?.blocks.filter((b) => b.h2.includes('Branding')).forEach((b, i) => view.push(<BlockView key={'u' + i} b={b} />))
        sec?.blocks.filter((b) => !b.h2.startsWith('แพ็กเกจ')).forEach((b, i) => view.push(<BlockView key={'s' + i} b={b} />))
      } else sec?.blocks.forEach((b, i) => view.push(<BlockView key={i} b={b} />))
    } else if (s.kind === 'app') {
      const sec = find('แอปบน App Store')
      sec?.intro.length ? view.push(<div key="i" style={card}><Lines lines={sec.intro} /></div>) : null
      sec?.blocks.forEach((b, i) => view.push(<BlockView key={i} b={b} />))
    } else if (s.kind === 'fix') {
      const lines = (confirmed?.intro || []).filter((l) => l.includes('แก้แอป'))
      view.push(<div key="f" style={card}><div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: 6 }}>แก้แอปที่ AI สร้าง (ราคายืนยันแล้ว ดอลลาร์ เหมาจ่าย)</div><Lines lines={lines} /></div>)
    } else {
      const b = other?.blocks.find((x) => x.h2.includes(s.key || '___'))
      if (b) view.push(<BlockView key="o" b={b} m={market} />)
      if (b) view.push(<div key="n" style={{ fontSize: 13, opacity: 0.65, margin: '6px 2px' }}>ราคาทุกตัวเป็นประมาณการ ยังไม่ยืนยัน</div>)
    }
    return view
  }

  const industryBlock = ind ? industries?.blocks.find((b) => b.h2.includes(ind.split(' / ')[0])) : null

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '16px 16px 80px' }}>
        <header style={{ padding: '8px 0 14px' }}>
          <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
          <h1 style={{ fontSize: 22, margin: '4px 0 2px' }}>คู่มือขายสำหรับทีมภายใน</h1>
          <div style={{ fontSize: 13, opacity: 0.65 }}>เลือกบริการและตลาด แล้วอ่านรายละเอียด ราคา และวิธีขาย (ราคาส่วนใหญ่เป็นประมาณการ ยังไม่ยืนยัน)</div>
        </header>

        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ค้นหาในคู่มือ เช่น แพง, นามบัตร, AEO" style={{ width: '100%', boxSizing: 'border-box', padding: '12px 16px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.25)', background: 'transparent', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit' }} />

        {q.trim().length >= 2 ? (
          <div style={{ marginTop: 14 }}>
            {results.length === 0 ? <div style={{ opacity: 0.7, padding: 12 }}>ไม่พบในคู่มือ</div> : results.map((r, i) => (
              <div key={i} style={card}>
                <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4 }}>{r.h}</div>
                <div style={{ lineHeight: 1.7, fontSize: 15 }}>{r.line}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div style={{ margin: '18px 0 8px', fontWeight: 600 }}>1. เลือกบริการ</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SERVICES.map((s, i) => <button key={s.label} style={svc === i ? chipOn : chip} onClick={() => { setSvc(i); setExtra(null) }}>{s.label}</button>)}
            </div>

            <div style={{ margin: '18px 0 8px', fontWeight: 600 }}>2. ลูกค้าอยู่ตลาดไหน</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={market === 'th' ? chipOn : chip} onClick={() => setMarket('th')}>ไทย (บาท)</button>
              <button style={market === 'us' ? chipOn : chip} onClick={() => setMarket('us')}>USA (ดอลลาร์)</button>
            </div>

            <div style={{ margin: '18px 0 8px', fontWeight: 600 }}>3. ลูกค้าทำธุรกิจอะไร (ไม่บังคับ)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {INDUSTRIES.map((x) => <button key={x} style={ind === x ? chipOn : chip} onClick={() => setInd(ind === x ? null : x)}>{x}</button>)}
            </div>

            {svc === null && !ind && !extra && <div style={{ ...card, opacity: 0.75, marginTop: 20 }}>เลือกบริการด้านบนเพื่อดูรายละเอียด</div>}
            <div style={{ marginTop: 10 }}>{serviceContent()}</div>
            {industryBlock && <BlockView b={{ h2: `ธุรกิจลูกค้า: ${industryBlock.h2}`, lines: industryBlock.lines }} />}

            <div style={{ margin: '24px 0 8px', fontWeight: 600 }}>เพิ่มเติม</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <button style={extra === 'sell' ? chipOn : chip} onClick={() => setExtra(extra === 'sell' ? null : 'sell')}>จุดขายของเรา</button>
              <button style={extra === 'terms' ? chipOn : chip} onClick={() => setExtra(extra === 'terms' ? null : 'terms')}>อธิบายศัพท์</button>
              <button style={extra === 'company' ? chipOn : chip} onClick={() => setExtra(extra === 'company' ? null : 'company')}>ข้อมูลบริษัท</button>
            </div>
            {extra && (
              <div style={card}>
                <Lines lines={(find(extra === 'sell' ? 'จุดขาย' : extra === 'terms' ? 'อธิบายศัพท์' : 'ข้อมูลบริษัท')?.intro) || []} />
                {find(extra === 'sell' ? 'จุดขาย' : extra === 'terms' ? 'อธิบายศัพท์' : 'ข้อมูลบริษัท')?.blocks.map((b, i) => <div key={i}><div style={{ fontWeight: 600, marginTop: 10 }}>{b.h2}</div><Lines lines={b.lines} /></div>)}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
