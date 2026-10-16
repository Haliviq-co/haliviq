'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { STAFF_KB } from '@/lib/staff-kb'
import { STAFF_KB_EN } from '@/lib/staff-kb-en'

// Staff-only Havy. Free, rule-based assistant in the style of the customer one. It answers from the internal
// handbook (lib/staff-kb.ts in Thai, lib/staff-kb-en.ts in English), so no API cost and no password.
// The user picks Thai or English first and everything after that is in that one language.

type Lang = 'th' | 'en'
type Market = 'th' | 'us'
type Block = { h2: string; lines: string[] }
type Sec = { h1: string; intro: string[]; blocks: Block[] }
type Chip = { key: string; label: string; tone?: 'ghost' }
type PCard = { title: string; price: string; time?: string; scope: string[] }
type Faq = { head?: string; items: { q: string; a: string[] }[] }
type Answer = { text: string; faq?: Faq[] }
type Msg = { from: 'bot' | 'me'; text: string; chips?: Chip[]; cards?: PCard[]; note?: string; faq?: Faq[] }

// Section positions are the same in both handbooks.
const S = { sells: 2, confirmed: 4, brand: 5, web: 6, usa: 7, other: 8, ind: 9, app: 10, erp: 12, wt: 13, q: 14, cases: 15, pkg: 16 }

type Svc = { q: string; pk?: string; kind: 'web' | 'brand' | 'app' | 'fix' | 'erp' | 'wt' | 'other'; key?: string; th: string; en: string; keyEn?: string }
const SERVICES: Svc[] = [
  { q: 'wt-basic', kind: 'wt', th: 'เว็บไซต์ธรรมดา (ไม่มี AI)', en: 'Basic website (no AI)', key: 'ธรรมดา', keyEn: 'Basic website' },
  { q: 'wt-ecom', kind: 'wt', th: 'เว็บไซต์อีคอมเมิร์ซ', en: 'E-commerce website', key: 'อีคอมเมิร์ซ', keyEn: 'E-commerce website' },
  { q: 'web', kind: 'web', th: 'เว็บไซต์ + AI', en: 'Website + AI' },
  { q: 'brand', kind: 'brand', th: 'Branding (แบรนด์)', en: 'Branding' },
  { q: 'app', kind: 'app', th: 'แอปมือถือ (iOS/Android)', en: 'Mobile app (iOS/Android)' },
  { q: 'ai', pk: 'ai', kind: 'other', th: 'AI Assistant / แชตบอต', en: 'AI Assistant / chatbot', key: 'AI Assistant', keyEn: 'AI Assistant' },
  { q: 'voice', pk: 'voice', kind: 'other', th: 'AI Voice Agent', en: 'AI Voice Agent', key: 'AI Voice', keyEn: 'AI Voice' },
  { q: 'erp', kind: 'erp', th: 'ERP / ระบบบริหารองค์กร', en: 'ERP / enterprise system' },
  { q: 'erp', pk: 'ai', kind: 'erp', th: 'AI สำหรับอุตสาหกรรม / ERP', en: 'AI for industry / ERP', key: 'AI', keyEn: 'AI' },
  { q: 'erp', pk: 'crm', kind: 'other', th: 'CRM (จัดการลูกค้า)', en: 'CRM', key: 'ERP', keyEn: 'ERP' },
  { q: 'line', pk: 'line', kind: 'other', th: 'LINE Mini App', en: 'LINE Mini App', key: 'LINE', keyEn: 'LINE' },
  { q: 'ux', pk: 'ux', kind: 'other', th: 'ออกแบบ UX/UI', en: 'UX/UI design', key: 'UX/UI', keyEn: 'UX/UI' },
  { q: 'seo', pk: 'seo', kind: 'other', th: 'SEO / AEO / GEO', en: 'SEO / AEO / GEO', key: 'SEO', keyEn: 'SEO' },
  { q: 'sec', pk: 'sec', kind: 'other', th: 'ความปลอดภัยไซเบอร์ / PDPA', en: 'Cybersecurity / PDPA', key: 'ความปลอดภัย', keyEn: 'Cybersecurity' },
  { q: 'cloud', pk: 'cloud', kind: 'other', th: 'Cloud / DevOps', en: 'Cloud / DevOps', key: 'Cloud', keyEn: 'Cloud' },
  { q: 'data', pk: 'data', kind: 'other', th: 'ข้อมูลและการวิเคราะห์', en: 'Data & Analytics', key: 'ข้อมูลและ', keyEn: 'Data' },
  { q: 'support', pk: 'support', kind: 'other', th: 'ดูแลรักษาระบบ', en: 'Support & Maintenance', key: 'ดูแลรักษา', keyEn: 'Support' },
  { q: 'strategy', pk: 'strategy', kind: 'other', th: 'กลยุทธ์ดิจิทัล', en: 'Digital strategy', key: 'กลยุทธ์', keyEn: 'Strategy' },
  { q: 'fix', kind: 'fix', th: 'แก้แอปที่ AI สร้าง', en: 'Fix AI-built apps' },
]
// same order as the industry blocks in the handbook
const INDUSTRIES: { th: string; en: string }[] = [
  { th: 'คลินิก / โรงพยาบาล / ความงาม', en: 'Clinic / hospital / beauty' },
  { th: 'ร้านอาหาร / คาเฟ่', en: 'Restaurant / cafe' },
  { th: 'ร้านค้าปลีก / ขายออนไลน์', en: 'Retail / online selling' },
  { th: 'อสังหาริมทรัพย์', en: 'Real estate' },
  { th: 'โรงงาน / B2B', en: 'Factory / B2B' },
  { th: 'โรงเรียน / คอร์สออนไลน์', en: 'School / online courses' },
  { th: 'โรงแรม / ท่องเที่ยว', en: 'Hotel / travel' },
  { th: 'บริการวิชาชีพ', en: 'Professional services' },
  { th: 'สตาร์ทอัพ', en: 'Startup' },
  { th: 'การเงิน / องค์กรใหญ่', en: 'Finance / enterprise' },
  { th: 'ก่อสร้าง / ขนส่ง', en: 'Construction / logistics' },
  { th: 'โรงแรมและแบรนด์หรู (USA)', en: 'Luxury hotels and brands (USA)' },
  { th: 'พลังงานทดแทน / โซลาร์ / สิ่งแวดล้อม', en: 'Renewable energy / solar / environment' },
]
const INDUSTRY_ORDER = [12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const TOPIC_KEYS = ['price', 'scope', 'ask', 'sell', 'plain', 'cases'] as const
const INDUSTRY_TAGS = ['health', 'fnb', 'retail', 'realestate', 'factory', 'edu', 'hotel', 'prof', 'startup', 'gov', 'construction', 'luxury', 'energy']
const SVC_TAGS: Record<string, string[]> = { web: ['web'], 'wt-basic': ['web'], 'wt-ecom': ['ecom'], brand: ['brand'], app: ['app'], ai: ['ai'], voice: ['ai'], erp: ['crm', 'ai'], line: ['app'], ux: ['ux'], seo: ['seo', 'web'], fix: ['app'] }

const T = {
  th: {
    title: 'น้องฮาวี่ สำหรับทีมภายใน',
    restart: 'เริ่มใหม่',
    placeholder: 'พิมพ์ถามได้เลย เช่น ลูกค้าบอกแพง ตอบยังไง',
    send: 'ส่ง',
    hello: 'สวัสดีครับ ผมน้องฮาวี่ สำหรับทีมภายใน อยากรู้เรื่องบริการอะไรครับ เลือกจากปุ่ม หรือพิมพ์ถามได้เลย เช่น "ลูกค้าบอกแพง ตอบยังไง"',
    whichService: 'อยากรู้เรื่องบริการอะไรครับ',
    whichMarket: 'ลูกค้าอยู่ตลาดไหนครับ (ราคาไทยกับ USA แยกกัน)',
    markets: { th: 'ไทย (บาท)', us: 'USA (ดอลลาร์)' },
    whatKnow: 'อยากรู้เรื่องอะไรครับ',
    whichIndustry: 'ลูกค้าทำธุรกิจอะไรครับ',
    topics: { price: 'ราคา', scope: 'ขอบเขตงาน (ได้อะไรบ้าง)', ask: 'คำถามที่ควรถามลูกค้า', sell: 'วิธีขายและตอบข้อโต้แย้ง', plain: 'อธิบายให้เข้าใจง่าย', cases: 'ผลงานอ้างอิงที่ใช้ขายได้' },
    byIndustry: 'ถามตามธุรกิจลูกค้า',
    changeService: 'เปลี่ยนบริการ',
    pickForPrice: 'เลือกบริการเพื่อดูราคา',
    otherIndustry: 'ธุรกิจอื่น',
    industryTail: 'ถ้าบอกว่าลูกค้าอยู่ไทยหรือ USA ผมจะบอกราคาตามตลาดนั้นครับ',
    none: 'ยังไม่มีข้อมูลหัวข้อนี้ในคู่มือครับ',
    noneIndustry: 'ยังไม่มีข้อมูลธุรกิจนี้ในคู่มือครับ',
    notFound: 'ยังไม่เจอเรื่องนี้ในคู่มือครับ ลองเลือกบริการจากปุ่ม หรือเปลี่ยนคำถาม เช่น "ราคาเว็บ" "ลูกค้าบอกแพง" "นามบัตร"',
    typeMore: 'พิมพ์ถามเพิ่มได้เลยครับ',
    draft: '(ราคาส่วนใหญ่เป็นประมาณการ ยังไม่ยืนยัน ก่อนเสนอลูกค้าให้เช็กกับหัวหน้าทีม)',
    priceHead: (m: Market) => `ราคา ${m === 'th' ? 'ไทย (บาท)' : 'USA (ดอลลาร์)'}`,
    scopeHead: 'ขอบเขตงาน',
    noQuestions: 'ยังไม่มีชุดคำถามเฉพาะ คำถามพื้นฐานที่ใช้ได้กับทุกงาน:\n1. ปัญหาที่อยากแก้คืออะไร ใครคือผู้ใช้\n2. มีระบบหรือเว็บเดิมไหม\n3. ต้องเชื่อมระบบอะไรบ้าง\n4. งบประมาณคร่าว ๆ และกำหนดเวลา\n5. ใครเป็นผู้ตัดสินใจ',
    sellsHead: 'จุดขายของเรา (เรียงตามลำดับ)',
    casesHead: 'ผลงานจริงที่ใช้อ้างอิงได้ (ส่งลิงก์ให้ลูกค้าดูได้เลย)',
    casesNone: 'ยังไม่มีผลงานตรงกลุ่มนี้ ใช้ผลงานใกล้เคียงด้านล่างแทน',
    tapScope: 'แตะเพื่อดูขอบเขตงาน',
    tapHide: 'แตะเพื่อซ่อน',
    askHead: (n: string) => `คำถามที่ควรถามลูกค้า · ${n}\nแตะที่คำถามเพื่อดูคำตอบเบื้องต้น`,
    askHow: 'วิธีใช้ชุดคำถามนี้',
    indQ: 'คำถามเฉพาะธุรกิจนี้ (แตะดูคำตอบเบื้องต้น)',
    tapHint: 'แตะหัวข้อเพื่อขยาย',
  },
  en: {
    title: 'Havy for the internal team',
    restart: 'Restart',
    placeholder: 'Ask anything, e.g. customer says it is too expensive',
    send: 'Send',
    hello: 'Hi, I am Havy, for the internal team. Which service do you want to know about? Pick a button or just type, e.g. "customer says it is too expensive".',
    whichService: 'Which service?',
    whichMarket: 'Which market is the customer in? (Thai and USA prices are separate)',
    markets: { th: 'Thailand (THB)', us: 'USA (USD)' },
    whatKnow: 'What do you want to know?',
    whichIndustry: 'What business is the customer in?',
    topics: { price: 'Price', scope: 'Scope (what is included)', ask: 'Questions to ask the customer', sell: 'Selling and handling objections', plain: 'Plain explanation', cases: 'Case studies to show' },
    byIndustry: 'By customer industry',
    changeService: 'Change service',
    pickForPrice: 'Pick a service for pricing',
    otherIndustry: 'Other industry',
    industryTail: 'Tell me if the customer is in Thailand or the USA and I will quote that market.',
    none: 'No information on this topic in the handbook yet.',
    noneIndustry: 'No information on this industry in the handbook yet.',
    notFound: 'Not found in the handbook. Pick a service button or rephrase, e.g. "website price", "too expensive", "business card".',
    typeMore: 'Type another question.',
    draft: '(Most prices are estimates, not yet confirmed. Check with the team lead before quoting a customer.)',
    priceHead: (m: Market) => `Price, ${m === 'th' ? 'Thailand (THB)' : 'USA (USD)'}`,
    scopeHead: 'Scope',
    noQuestions: 'No specific question set yet. Basic questions that work for any project:\n1. What problem do they want to solve, who are the users\n2. Is there an existing site or system\n3. Which systems must connect\n4. Rough budget and deadline\n5. Who decides',
    sellsHead: 'Our selling points (in order)',
    casesHead: 'Real work you can reference (send the link to the customer)',
    casesNone: 'No direct case for this yet, use these close ones instead',
    tapScope: 'Tap to see scope',
    tapHide: 'Tap to hide',
    askHead: (n: string) => `Questions to ask the customer · ${n}\nTap a question to see the basic answer`,
    askHow: 'How to use these questions',
    indQ: 'Questions for this industry (tap for the basic answer)',
    tapHint: 'Tap a heading to expand',
  },
}

// language-specific patterns for reading the handbook
const P = {
  th: {
    other: 'USA:', otherTh: 'ไทย:', marketLine: /(^|\| )(ไทย:|USA:)/,
    pkgSkip: /^แพ็กเกจ/, webUsa: 'เว็บไซต์', fixLine: 'แก้แอป',
    pricedBlock: /(แพ็กเกจ|Essential|Growth|Enterprise|Starter|Standard|Premium|Branding|เว็บไซต์|แอปเริ่มต้น|แพลตฟอร์ม|แก้แอป)/,
    moneyLine: /บาท|\$[0-9]/, priceLine: /(บาท|\$[0-9]|ไทย:|USA:|ราคา)/, priceExtra: /(เหมาะกับ|ได้อะไร|เว็บ:|AI:)/,
    scopeLine: /^(เหมาะกับ|ได้อะไร|ไม่ได้อะไร|ไม่รวม|เว็บ:|AI:|ขอบเขต|คืออะไร|ปัจจัยราคา|- )/,
    askBlock: /คำถาม|ขั้นตอนขาย/, sellBlock: /วิธีขาย|ตอบข้อโต้แย้ง|ขั้นตอนขาย/, whatBlock: /คืออะไร/, whatLine: 'คืออะไร',
    skipSec: [0, 1], stop: [] as string[], thPrefix: 'ไทย:', timeLabel: /^ระยะเวลาโดยประมาณ:\s*/,
  },
  en: {
    other: 'USA:', otherTh: 'Thai:', marketLine: /(^|\| )(Thai:|USA:)/,
    pkgSkip: /^Package/, webUsa: 'Website', fixLine: 'AI-built',
    pricedBlock: /(Package|Essential|Growth|Enterprise|Starter|Standard|Premium|Branding|Website|App|Platform|Fixing)/i,
    moneyLine: /THB|\$[0-9]/, priceLine: /(THB|\$[0-9]|Thai:|USA:|price)/i, priceExtra: /(Best for|Includes|Web:|AI:)/,
    scopeLine: /^(Best for|Includes|Excludes|Web:|AI:|Scope|What it is|Price factors|- )/,
    askBlock: /questions|sales steps/i, sellBlock: /selling|objection|sales steps/i, whatBlock: /what is|what are/i, whatLine: 'What it is',
    thPrefix: 'Thai:', timeLabel: /^Typical time:\s*/,
    skipSec: [0, 1], stop: ['the', 'and', 'for', 'with', 'what', 'how', 'can', 'are', 'you', 'our', 'does', 'that', 'this', 'from', 'when', 'about', 'say', 'tell', 'customer'],
  },
}

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

// Keep only the chosen market in lines like "Thai: X | USA: Y | time..."
function forMarket(line: string, m: Market, lang: Lang) {
  const p = P[lang]
  if (!p.marketLine.test(line)) return line
  const drop = m === 'th' ? p.other : p.otherTh
  return line.split(' | ').filter((x) => !x.startsWith(drop)).join(' | ')
}

// Thai users sometimes type English words. Map a few to Thai terms so the Thai handbook still matches.
const EN_TO_TH: [RegExp, string][] = [
  [/price|cost|how much|quote|pricing/i, 'ราคา บาท'], [/website|web site|web\b/i, 'เว็บไซต์'], [/brand|logo/i, 'Branding แบรนด์'],
  [/app\b|mobile|ios|android/i, 'แอป'], [/expensive|too much|discount|cheap/i, 'แพง ลดราคา'], [/clinic|hospital|beauty/i, 'คลินิก'],
  [/restaurant|cafe/i, 'ร้านอาหาร'], [/hotel|resort|luxury/i, 'โรงแรม'], [/chatbot|assistant/i, 'AI Assistant'],
  [/scope|include/i, 'ขอบเขต'], [/business card|namecard/i, 'นามบัตร'], [/sell|pitch|objection/i, 'จุดขาย วิธีขาย'],
  [/timeline|how long|duration/i, 'ระยะเวลา'], [/security|pdpa/i, 'ความปลอดภัย'], [/ecommerce|e-commerce|shop/i, 'อีคอมเมิร์ซ'],
]

function grams(s: string, stop: string[]) {
  const g = new Set<string>()
  const words = s.toLowerCase().split(/[\s,.;:!?()"/]+/).filter((w) => w && !stop.includes(w))
  const t = words.join('')
  for (let i = 0; i + 3 <= t.length; i++) g.add(t.slice(i, i + 3))
  return g
}


function lineItem(l: string): { q: string; a: string[] } {
  const raw = l.replace(/^- /, '')
  const n = raw.match(/^\d+\.\s*(.*?)\s*=>\s*(.*)$/)
  if (n) return { q: n[1], a: [n[2]] }
  if (/^\d+\./.test(raw)) return { q: raw.replace(/^\d+\.\s*/, ''), a: [] }
  const j = raw.indexOf(': ')
  if (j > 0 && j < 70 && !/^https?:/.test(raw)) return { q: raw.slice(0, j), a: [raw.slice(j + 2)] }
  return { q: raw, a: [] }
}

function Linkified({ text }: { text: string }) {
  return <>{text.split(/(https?:\/\/\S+)/g).map((x, i) => (/^https?:/.test(x) ? <a key={i} href={x} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', wordBreak: 'break-all' }}>{x}</a> : <span key={i}>{x}</span>))}</>
}

function FaqView({ groups }: { groups: Faq[] }) {
  const line = '1px solid rgb(var(--fg) / 0.12)'
  return (
    <div style={{ marginTop: 10 }}>
      <style>{'.faq summary{list-style:none}.faq summary::-webkit-details-marker{display:none}.faq details[open] .chev{transform:rotate(180deg)}.faq .chev{transition:transform .15s}'}</style>
      <div className="faq">
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginTop: gi ? 18 : 0 }}>
            {g.head && <div style={{ fontSize: 14, fontWeight: 700, color: '#ECD37D', margin: '0 4px 8px' }}>{g.head}</div>}
            <div style={{ border: line, borderRadius: 16, overflow: 'hidden', background: 'rgb(var(--fg) / 0.03)' }}>
              {g.items.map((it, i) =>
                it.a.length === 0 ? (
                  <div key={i} style={{ padding: '12px 16px', fontSize: 15, lineHeight: 1.65, borderTop: i ? line : 0 }}><Linkified text={it.q} /></div>
                ) : (
                  <details key={i} style={{ borderTop: i ? line : 0 }}>
                    <summary style={{ cursor: 'pointer', padding: '12px 16px', fontSize: 15, lineHeight: 1.55, fontWeight: 600, color: '#B9ADF7', display: 'flex', gap: 12, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span>{it.q}</span>
                      <span className="chev" aria-hidden="true" style={{ color: '#B9ADF7', flex: '0 0 auto' }}>▾</span>
                    </summary>
                    <div style={{ padding: '0 16px 14px', fontSize: 15, lineHeight: 1.7, opacity: 0.92 }}>
                      {it.a.map((x, k) => <div key={k} style={{ marginTop: k ? 8 : 0, whiteSpace: 'pre-wrap' }}><Linkified text={x} /></div>)}
                    </div>
                  </details>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const PALETTE = ['#7B6EF6', '#B9ADF7', '#72C0D4', '#ECD37D', '#E8E7E4']
const HEAD_PRICE = /(\d[\d,]*(?:\s*[–-]\s*\d[\d,]*)?\s*(?:บาท|THB)(?:\s*(?:ขึ้นไป|and up))?)/
const USD_BULLET = /^(.+?): (\$[\d,]+(?:\s*[–-]\s*\$[\d,]+)?(?:\s*(?:ขึ้นไป|and up))?)\s*(.*)$/

function PriceCards({ cards, tapScope, tapHide }: { cards: PCard[]; tapScope: string; tapHide: string }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', padding: '4px 2px 10px', alignItems: 'flex-start' }}>
      {cards.map((c, i) => {
        const on = open === i
        return (
          <button key={i} onClick={() => setOpen(on ? null : i)} style={{ flex: '0 0 auto', width: 'min(78vw, 300px)', scrollSnapAlign: 'start', textAlign: 'left', border: 0, borderRadius: 22, padding: '18px 18px 14px', background: PALETTE[i % PALETTE.length], color: '#14131A', cursor: 'pointer', fontFamily: 'inherit', boxShadow: on ? '0 8px 24px rgba(0,0,0,.35)' : 'none' }}>
            <div style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>{c.title}</div>
            <div style={{ fontSize: c.price.length > 26 ? 15 : 24, fontWeight: 700, lineHeight: 1.25, margin: '6px 0 4px' }}>{c.price}</div>
            {c.time && <div style={{ fontSize: 13, opacity: 0.75 }}>{c.time}</div>}
            {on && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(20,19,26,.2)', fontSize: 14, lineHeight: 1.6 }}>
                {c.scope.map((l, k) => {
                  const j = l.indexOf(': ')
                  const label = j > 0 && j < 22 ? l.slice(0, j) : ''
                  return <div key={k} style={{ marginBottom: 6 }}>{label ? <><b>{label}:</b> {l.slice(j + 2)}</> : l}</div>
                })}
              </div>
            )}
            <div style={{ fontSize: 12, marginTop: 10, opacity: 0.65 }}>{on ? '▲ ' + tapHide : '▼ ' + tapScope}</div>
          </button>
        )
      })}
    </div>
  )
}

const chipStyle: React.CSSProperties = { border: '1px solid rgb(var(--fg) / 0.2)', borderRadius: 999, padding: '8px 14px', fontSize: 14, color: 'var(--ink)', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }

export default function StaffPage() {
  const kb = useMemo(() => ({ th: parse(STAFF_KB), en: parse(STAFF_KB_EN) }), [])
  const [lang, setLang] = useState<Lang | null>(null)
  const ctx = useRef<{ svc?: number; market?: Market; next?: string }>({})
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  function start() {
    ctx.current = {}
    setLang(null)
    setMsgs([{ from: 'bot', text: 'สวัสดีครับ เลือกภาษาที่ต้องการใช้\nHello! Please choose your language.', chips: [{ key: 'lang:th', label: 'ภาษาไทย' }, { key: 'lang:en', label: 'English' }] }])
  }
  useEffect(start, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [msgs])

  const L: Lang = lang || 'th'
  const t = T[L]
  const p = P[L]
  const secs = kb[L]
  const svcLabel = (i: number) => SERVICES[i][L]
  const svcChips: Chip[] = SERVICES.map((s, i) => ({ key: 'svc:' + i, label: s[L] }))
  const topicChips: Chip[] = [
    ...TOPIC_KEYS.map((k) => ({ key: 'topic:' + k, label: t.topics[k] })),
    { key: 'ind', label: t.byIndustry, tone: 'ghost' as const },
    { key: 'svc', label: t.changeService, tone: 'ghost' as const },
  ]

  function blocksFor(): { title: string; blocks: Block[]; intro: string[] } {
    const c = ctx.current
    if (c.svc === undefined) return { title: '', blocks: [], intro: [] }
    const s = SERVICES[c.svc]
    const m = c.market || 'th'
    const usa = secs[S.usa]
    const title = s[L]
    if (s.kind === 'web') {
      const sec = secs[S.web]
      return { title, intro: sec.intro, blocks: m === 'us' ? [...usa.blocks.filter((b) => b.h2.includes(p.webUsa)), ...sec.blocks.filter((b) => !/^(Essential|Growth|Enterprise)/.test(b.h2))] : sec.blocks }
    }
    if (s.kind === 'brand') {
      const sec = secs[S.brand]
      return { title, intro: [], blocks: m === 'us' ? [...usa.blocks.filter((b) => b.h2.includes('Branding')), ...sec.blocks.filter((b) => !p.pkgSkip.test(b.h2))] : sec.blocks }
    }
    if (s.kind === 'app') {
      const sec = secs[S.app]
      return { title, intro: sec.intro, blocks: sec.blocks }
    }
    if (s.kind === 'wt') {
      const key = (L === 'th' ? s.key : s.keyEn) || '___'
      return { title, intro: [], blocks: secs[S.wt].blocks.filter((x) => x.h2.includes(key)) }
    }
    if (s.kind === 'erp') {
      const sec = secs[S.erp]
      return { title, intro: sec.intro, blocks: s.key ? sec.blocks.filter((x) => x.h2.includes(s.key as string)) : sec.blocks }
    }
    if (s.kind === 'fix') {
      const lines = secs[S.confirmed].intro.filter((l) => l.includes(p.fixLine))
      return { title, intro: [], blocks: [{ h2: title, lines }] }
    }
    const key = L === 'th' ? s.key : s.keyEn
    const b = secs[S.other].blocks.find((x) => x.h2.includes(key || '___'))
    return { title, intro: [], blocks: b ? [b] : [] }
  }

  const fmt = (lines: string[], m?: Market) => lines.map((l) => (m ? forMarket(l, m, L) : l)).join('\n')

  function priceCards(): { head: string; cards: PCard[] } | null {
    const c = ctx.current
    if (c.svc === undefined) return null
    const m: Market = c.market || 'th'
    const s = SERVICES[c.svc]
    const base = blocksFor()
    const { title, intro } = base
    const pkBlocks = s.pk ? secs[S.pkg].blocks.filter((b) => b.h2.startsWith('P:' + s.pk + ' ')).map((b) => ({ ...b, h2: b.h2.replace(/^P:\S+\s/, '') })) : []
    const blocks = pkBlocks.length ? pkBlocks : base.blocks
    const cards: PCard[] = []
    const refs = s.kind === 'web' ? secs[S.web].blocks : s.kind === 'brand' ? secs[S.brand].blocks : []
    const refScope = (name: string) => {
      const w = name.split(/[ +]/)[0]
      const b = refs.find((x) => x.h2.includes(w) && x.lines.some((l) => p.scopeLine.test(l)))
      return b ? b.lines.filter((l) => p.scopeLine.test(l) && !l.startsWith('- ')) : []
    }
    if (s.kind === 'fix') {
      const line = secs[S.confirmed].intro.find((l) => l.includes(p.fixLine)) || ''
      const parts = line.slice(line.lastIndexOf('): ') + 3).split(', ')
      for (const x of parts) {
        const mm = x.match(/^(.*?)\s*(\$[\d,]+)$/)
        if (mm) cards.push({ title: mm[1], price: mm[2], scope: [intro.length ? '' : L === 'th' ? 'ราคาเหมาจ่ายเป็นดอลลาร์ ยืนยันแล้ว' : 'Fixed price in USD, confirmed'] })
      }
      return cards.length ? { head: `${title} · ${t.priceHead('us')}`, cards } : null
    }
    for (const b of blocks) {
      if (p.askBlock.test(b.h2) || p.sellBlock.test(b.h2) || p.whatBlock.test(b.h2)) continue
      // 1) price in the heading (Thai-market tiers)
      const hm = m === 'th' ? b.h2.match(HEAD_PRICE) : null
      if (hm && hm.index !== undefined) {
        const name = b.h2.slice(0, hm.index).replace(/[\s(]+$/, '').replace(/^(แพ็กเกจ|Package)\s+/, '')
        const time = b.h2.slice(hm.index + hm[0].length).replace(/\[[^\]]*\]/g, '').trim()
        cards.push({ title: name, price: hm[1], time: time || undefined, scope: b.lines })
        continue
      }
      // 2) "Thai: x | USA: y | time" line
      const pl = b.lines.find((l) => p.marketLine.test(l))
      if (pl) {
        const segs = pl.split(' | ')
        const pre = m === 'th' ? p.thPrefix : 'USA:'
        const seg = segs.find((x) => x.startsWith(pre))
        const tseg = segs.find((x) => p.timeLabel.test(x))
        if (seg) {
          cards.push({ title: b.h2.replace(/\s*\(.*$/, ''), price: seg.slice(pre.length).trim(), time: tseg ? tseg.replace(p.timeLabel, '') : undefined, scope: b.lines.filter((l) => l !== pl) })
          continue
        }
      }
      // 3) bullet lines
      for (const l of b.lines) {
        if (!l.startsWith('- ')) continue
        const body = l.slice(2)
        if (/ \| USA\s*\$/.test(body)) {
          const segs = body.split(' | ')
          const i0 = segs[0].search(/\s(ไทย|Thai)\s/)
          if (i0 < 0) continue
          const name = segs[0].slice(0, i0)
          const thPrice = segs[0].slice(i0).replace(/^\s*(ไทย|Thai)\s*/, '')
          let usPrice = segs[1].replace(/^USA\s*/, '')
          let desc = ''
          let time = ''
          const k = usPrice.indexOf(': ')
          if (k > 0) { desc = usPrice.slice(k + 2); usPrice = usPrice.slice(0, k) }
          if (segs[2]) { const j = segs[2].indexOf(': '); time = j > 0 ? segs[2].slice(0, j) : segs[2]; desc = j > 0 ? segs[2].slice(j + 2) : desc }
          let price = m === 'th' ? thPrice : usPrice
          if (m === 'th' && !/บาท|THB/.test(price)) price += L === 'th' ? ' บาท' : ' THB'
          cards.push({ title: name, price, time: time || undefined, scope: desc ? [desc] : [] })
        } else if (m === 'us') {
          const um = body.match(USD_BULLET)
          if (um) cards.push({ title: um[1], price: um[2], scope: [...(um[3] ? [um[3]] : []), ...refScope(um[1])] })
        }
      }
    }
    return cards.length ? { head: `${title} · ${t.priceHead(m)}`, cards } : null
  }

  function casesFor(tags: string[], max: number): { list: { q: string; a: string[] }[]; direct: boolean } {
    const rows = secs[S.cases].blocks[0].lines.filter((l) => l.startsWith('- ')).map((l) => {
      const [slug, tg, ...rest] = l.slice(2).split('|')
      return { slug, tags: tg.split(','), text: rest.join('|') }
    })
    let hit = rows.map((r) => ({ r, n: r.tags.filter((x) => tags.includes(x)).length })).filter((x) => x.n > 0).sort((a, b) => b.n - a.n).map((x) => x.r)
    const direct = hit.length > 0
    if (!direct) hit = rows
    return {
      direct,
      list: hit.slice(0, max).map((r) => {
        const j = r.text.indexOf('): ')
        const k = j > 0 ? j + 1 : r.text.indexOf(': ')
        const q = k > 0 ? r.text.slice(0, k) : r.text
        const rest = k > 0 ? r.text.slice(k).replace(/^[:\s]+/, '') : ''
        return { q, a: [rest, `https://www.haliviq.com/${L}/case-studies/${r.slug}`].filter(Boolean) }
      }),
    }
  }

  function answerCases(): Answer {
    const sv = SERVICES[ctx.current.svc as number]
    const { direct, list } = casesFor(SVC_TAGS[sv.q] || [], 6)
    return { text: (direct ? '' : t.casesNone + '\n') + t.casesHead, faq: [{ items: list }] }
  }

  function answerTopic(topic: string): Answer {
    const m = ctx.current.market || 'th'
    const { title, blocks, intro } = blocksFor()
    const mk = (ls: string[]) => ls.map((l) => forMarket(l, m, L))
    const sells = secs[S.sells].intro
    if (!blocks.length) return { text: t.none }
    const pick = (re: RegExp) => blocks.filter((b) => re.test(b.h2))
    if (topic === 'cases') return answerCases()
    if (topic === 'price') {
      const priced = blocks.filter((b) => !p.askBlock.test(b.h2) && !p.sellBlock.test(b.h2) && !p.whatBlock.test(b.h2) && b.lines.some((l) => p.moneyLine.test(l)))
      const direct = intro.filter((l) => p.moneyLine.test(l) && !/^(Note|หมายเหตุ)/.test(l))
      const items = [...direct.map((l) => ({ q: l, a: [] as string[] })), ...priced.map((b) => {
        const ls = b.lines.filter((l) => p.priceLine.test(l) || p.priceExtra.test(l))
        return { q: b.h2, a: mk(ls.length ? ls : b.lines.slice(0, 3)) }
      })]
      return { text: `${title} · ${t.priceHead(m)}\n${t.draft}`, faq: [{ items }] }
    }
    if (topic === 'scope') {
      const items = blocks.map((b) => {
        const ls = b.lines.filter((l) => p.scopeLine.test(l))
        return { q: b.h2, a: mk(ls.length ? ls : b.lines) }
      })
      return { text: `${title} · ${t.scopeHead}\n${t.tapHint}`, faq: [{ items }] }
    }
    if (topic === 'ask') {
      const sv = SERVICES[ctx.current.svc as number]
      const strip = (h: string) => h.replace(/^Q:\S+\s/, '')
      const qb = secs[S.q].blocks
      const mine = qb.filter((b) => b.h2.startsWith('Q:' + sv.q + ' '))
      const gen = qb.filter((b) => b.h2.startsWith('Q:g'))
      const all = [...mine, ...gen]
      if (!all.length) return { text: t.noQuestions }
      const groups: Faq[] = []
      if (secs[S.q].intro.length) groups.push({ items: [{ q: t.askHow, a: secs[S.q].intro }] })
      all.forEach((b) => groups.push({ head: strip(b.h2), items: b.lines.map(lineItem) }))
      return { text: t.askHead(title), faq: groups }
    }
    if (topic === 'sell') {
      const bs = pick(p.sellBlock)
      const groups: Faq[] = bs.map((b) => ({ head: b.h2, items: b.lines.map(lineItem) }))
      groups.push({ head: t.sellsHead, items: sells.map(lineItem) })
      return { text: `${title}\n${t.tapHint}`, faq: groups }
    }
    const what = pick(p.whatBlock)
    if (what.length) return { text: `${title}\n${t.tapHint}`, faq: what.map((b) => ({ head: b.h2, items: b.lines.map(lineItem) })) }
    const first = blocks[0]
    const wl = first.lines.filter((l) => l.startsWith(p.whatLine))
    return { text: title, faq: [{ items: (wl.length ? wl : first.lines.slice(0, 3)).map(lineItem) }] }
  }

  function answerIndustry(i: number): Answer {
    const b = secs[S.ind].blocks[i]
    if (!b) return { text: t.noneIndustry }
    const cs = casesFor([INDUSTRY_TAGS[i]], 4)
    const groups: Faq[] = [{ items: b.lines.map(lineItem) }]
    const qb = secs[S.q].blocks.find((x) => x.h2.startsWith('Q:ind' + i + ' '))
    if (qb) groups.push({ head: t.indQ, items: qb.lines.map(lineItem) })
    groups.push({ head: (cs.direct ? '' : t.casesNone + ' · ') + t.casesHead, items: cs.list })
    return { text: `${b.h2}\n${t.industryTail}`, faq: groups }
  }

  function answerFree(q: string): Answer {
    const expanded = L === 'th' ? q + ' ' + EN_TO_TH.filter(([r]) => r.test(q)).map(([, x]) => x).join(' ') : q
    const g = grams(expanded, p.stop)
    if (g.size === 0) return { text: t.typeMore }
    const cand: { score: number; head: string; lines: string[] }[] = []
    secs.forEach((s, si) => {
      if (p.skipSec.includes(si)) return
      const units = [{ head: s.h1.replace(/\s*\(.*$/, ''), lines: s.intro }, ...s.blocks.map((b) => ({ head: b.h2.replace(/^[QP]:\S+\s/, ''), lines: b.lines }))]
      for (const u of units) {
        if (!u.lines.length) continue
        const hit = u.lines.filter((l) => { let n = 0; const lg = grams(l, p.stop); g.forEach((x) => { if (lg.has(x)) n++ }); return n >= Math.min(3, g.size) })
        if (!hit.length) continue
        const bg = grams(u.head + ' ' + u.lines.join(' '), p.stop)
        let score = 0; g.forEach((x) => { if (bg.has(x)) score++ })
        cand.push({ score: score + hit.length, head: u.head, lines: hit })
      }
    })
    cand.sort((a, b) => b.score - a.score)
    const top = cand.slice(0, 3)
    if (!top.length) return { text: t.notFound }
    const m = ctx.current.market
    return { text: t.tapHint, faq: top.map((x) => ({ head: x.head, items: x.lines.slice(0, 6).map((l) => lineItem(m ? forMarket(l, m, L) : l)) })) }
  }

  function push(...add: Msg[]) { setMsgs((prev) => [...prev.map((x) => ({ ...x, chips: undefined })), ...add]) }

  function showPrice(userText: string, chips?: Chip[]) {
    const pc = priceCards()
    if (pc) { push({ from: 'me', text: userText }, { from: 'bot', text: pc.head, cards: pc.cards, note: t.draft, chips: chips || topicChips }); return }
    const ans = answerTopic('price')
    push({ from: 'me', text: userText }, { from: 'bot', text: ans.text, faq: ans.faq, chips: chips || topicChips })
  }

  function onChip(key: string) {
    const c = ctx.current
    if (key.startsWith('lang:')) {
      const l = key.slice(5) as Lang
      setLang(l)
      const tt = T[l]
      push({ from: 'me', text: l === 'th' ? 'ภาษาไทย' : 'English' }, { from: 'bot', text: tt.hello, chips: SERVICES.map((s, i) => ({ key: 'svc:' + i, label: s[l] })) })
      return
    }
    if (key === 'svc') { push({ from: 'bot', text: t.whichService, chips: svcChips }); return }
    if (key === 'ind') { push({ from: 'bot', text: t.whichIndustry, chips: INDUSTRY_ORDER.map((i) => ({ key: 'ind:' + i, label: INDUSTRIES[i][L] })) }); return }
    if (key.startsWith('svc:')) {
      c.svc = Number(key.slice(4))
      push({ from: 'me', text: svcLabel(c.svc) }, { from: 'bot', text: t.whichMarket, chips: [{ key: 'm:th', label: t.markets.th }, { key: 'm:us', label: t.markets.us }] })
      return
    }
    if (key.startsWith('m:')) {
      c.market = key.slice(2) as Market
      if (c.next === 'price') { c.next = undefined; showPrice(t.markets[c.market]); return }
      push({ from: 'me', text: t.markets[c.market] }, { from: 'bot', text: t.whatKnow, chips: topicChips })
      return
    }
    if (key.startsWith('topic:')) {
      const k = key.slice(6) as (typeof TOPIC_KEYS)[number]
      if (!c.market) c.market = 'th'
      if (k === 'price') { showPrice(t.topics[k]); return }
      const ans = answerTopic(k)
      push({ from: 'me', text: t.topics[k] }, { from: 'bot', text: ans.text, faq: ans.faq, chips: topicChips })
      return
    }
    if (key.startsWith('ind:')) {
      const i = Number(key.slice(4))
      const ans = answerIndustry(i)
      push({ from: 'me', text: INDUSTRIES[i][L] }, { from: 'bot', text: ans.text, faq: ans.faq, chips: [{ key: 'svc', label: t.pickForPrice }, { key: 'ind', label: t.otherIndustry, tone: 'ghost' as const }] })
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const q = input.trim()
    if (!q || !lang) return
    setInput('')
    if (/ราคา|แพ็กเกจ|แพคเกจ|แพจเกจ|แพ็คเกจ|package|pricing|price|cost|how much|quote/i.test(q)) {
      const c = ctx.current
      if (c.svc !== undefined && c.market) { showPrice(q); return }
      c.next = 'price'
      push({ from: 'me', text: q }, { from: 'bot', text: c.svc !== undefined ? t.whichMarket : t.pickForPrice, chips: c.svc !== undefined ? [{ key: 'm:th', label: t.markets.th }, { key: 'm:us', label: t.markets.us }] : svcChips })
      return
    }
    const ans = answerFree(q)
    push({ from: 'me', text: q }, { from: 'bot', text: ans.text, faq: ans.faq, chips: ctx.current.svc !== undefined ? topicChips : svcChips })
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 16px 120px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0 14px' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>Haliviq Staff</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{lang ? t.title : 'Havy · น้องฮาวี่'}</div>
          </div>
          <button onClick={start} style={{ ...chipStyle, fontSize: 13 }}>{lang ? t.restart : 'Language · ภาษา'}</button>
        </header>

        {msgs.map((m, i) => (
          <div key={i} style={{ margin: '10px 0' }}>
            {m.text && <div style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
              <div style={{ maxWidth: '90%', padding: '12px 16px', borderRadius: 18, whiteSpace: 'pre-wrap', lineHeight: 1.65, fontSize: 15, ...(m.from === 'me' ? { background: 'var(--accent)', color: '#14131A', borderBottomRightRadius: 6 } : { background: 'rgb(var(--fg) / 0.07)', borderBottomLeftRadius: 6 }) }}>{m.text}</div>
            </div>}
            {m.faq && <FaqView groups={m.faq} />}
            {m.cards && (
              <div style={{ marginTop: 10 }}>
                <PriceCards cards={m.cards} tapScope={T[L].tapScope} tapHide={T[L].tapHide} />
                {m.note && <div style={{ fontSize: 13, opacity: 0.7, marginTop: 2 }}>{m.note}</div>}
              </div>
            )}
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
          <input value={input} disabled={!lang} onChange={(e) => setInput(e.target.value)} placeholder={lang ? t.placeholder : 'เลือกภาษาก่อน · Choose a language first'} style={{ flex: 1, padding: '12px 16px', borderRadius: 999, border: '1px solid rgb(var(--fg) / 0.25)', background: 'transparent', color: 'var(--ink)', fontSize: 16, fontFamily: 'inherit', minWidth: 0 }} />
          <button type="submit" disabled={!input.trim() || !lang} style={{ padding: '0 20px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', opacity: input.trim() && lang ? 1 : 0.5 }}>{lang ? t.send : 'ส่ง · Send'}</button>
        </div>
      </form>
    </main>
  )
}
