'use client'

import { useEffect, useState } from 'react'

// Quotation builder that Havy shows in the staff chat when someone asks for a quote.
// The printed layout follows the company quotation template (Haliviq-Quotation PDF): numbered sections with a price,
// each split into Steps with bullet points and days, then TOTAL, Withholding TAX 3%, the payment split and GRAND TOTAL.
// "Print / PDF" opens it in a new window to print or save as PDF. Nothing is stored on a server.

export type QuoteLang = 'th' | 'en'
export type QuoteMarket = 'th' | 'us'
export type QuoteSeed = { lang: QuoteLang; market: QuoteMarket; items: { desc: string; price: number; bullets?: string[]; days?: string }[] }
type Step = { title: string; bullets: string; days: string }
type Section = { title: string; price: number; included: boolean; steps: Step[] }

const CO = {
  th: { name: 'บริษัท ฮาลิวิก จำกัด (Haliviq Co., Ltd.)', address: ['อาคาร Spaces ถนนพญาไท ชั้น 4 ห้อง 402', 'เขตราชเทวี กรุงเทพฯ 10400'], phone: '+66 90 918 9009' },
  us: { name: 'Haliviq Co., Ltd.', address: ['315 East J. Street,', 'Shelton, WA 98584'], phone: '+1 (206) 379-3643' },
}
const EMAIL = 'info@haliviq.com'
const WEB = 'www.haliviq.com'

const Q = {
  th: {
    title: 'ใบเสนอราคา', no: 'เลขที่', date: 'วันที่',
    to: 'ลูกค้า (To)', custName: 'ชื่อลูกค้า / บริษัท', custAddr: 'ที่อยู่',
    sections: 'รายการ', section: 'หัวข้อ', secTitle: 'ชื่อหัวข้อ เช่น ออกแบบ UX UI DESIGNER', price: 'ราคา', included: 'รวมในราคาแล้ว (Included)',
    step: 'Step', stepTitle: 'ชื่อ Step เช่น Home, Quiz, Calendar (เว้นว่างได้)', bullets: 'รายละเอียด (บรรทัดละ 1 ข้อ)', days: 'จำนวนวัน',
    addStep: '+ เพิ่ม Step', addSection: '+ เพิ่มหัวข้อ', remove: 'ลบ', removeSection: 'ลบหัวข้อนี้',
    discount: 'ส่วนลด', vat: 'VAT 7%', wht: 'หัก ณ ที่จ่าย 3%', pays: 'งวดชำระ', presetLast: 'งวดสุดท้าย 50%', presetDeposit: 'แยกมัดจำ 50/50', presetFull: 'จ่ายเต็ม', addPay: '+ เพิ่มงวด', grandIs: 'ยอด GRAND TOTAL = งวดนี้', grandFull: 'GRAND TOTAL = ยอดเต็ม', pctWarn: (n: number) => `งวดรวมกันได้ ${n}% (ยังไม่ครบ 100%)`, print: 'พิมพ์ / บันทึกเป็น PDF', need: 'ใส่ชื่อลูกค้าและอย่างน้อย 1 หัวข้อก่อนครับ',
    popup: 'เบราว์เซอร์บล็อกหน้าต่างใหม่ กรุณาอนุญาต pop-up แล้วลองอีกครั้ง',
    note: 'ราคาตั้งต้นดึงจากคู่มือ แก้ได้ทุกช่อง เช็กกับหัวหน้าทีมก่อนส่งลูกค้า',
  },
  en: {
    title: 'Quotation', no: 'No.', date: 'Date',
    to: 'Customer (To)', custName: 'Customer / company', custAddr: 'Address',
    sections: 'Sections', section: 'Section', secTitle: 'Section title, e.g. UX UI DESIGN', price: 'Price', included: 'Included (no charge)',
    step: 'Step', stepTitle: 'Step name, e.g. Home, Quiz, Calendar (optional)', bullets: 'Details (one per line)', days: 'Days',
    addStep: '+ Add step', addSection: '+ Add section', remove: 'Remove', removeSection: 'Remove section',
    discount: 'Discount', vat: 'VAT 7%', wht: 'Withholding tax 3%', pays: 'Payment schedule', presetLast: 'Last payment 50%', presetDeposit: 'Deposit 50/50', presetFull: 'Full payment', addPay: '+ Add installment', grandIs: 'GRAND TOTAL = this installment', grandFull: 'GRAND TOTAL = full amount', pctWarn: (n: number) => `Installments add up to ${n}% (not 100%)`, print: 'Print / save as PDF', need: 'Add a customer name and at least one section first.',
    popup: 'The browser blocked the new window. Allow pop-ups and try again.',
    note: 'Starting prices come from the handbook. Every field can be edited. Check with the team lead before sending.',
  },
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
// 449000 -> "449,000.-", 13470.5 -> "13,470.50"
const money = (n: number) => (Number.isInteger(Math.round(n * 100) / 100) ? Math.round(n).toLocaleString('en-US') + '.-' : n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
// toPrecision first so 37.035 rounds to 37.04 (plain Math.round sees 3703.4999...)
const round2 = (n: number) => Math.round(Number((n * 100).toPrecision(12))) / 100
// Thai market uses the Buddhist year like the template (HLQ-2569-001, 20/10/2569)
const yearOf = (d: Date, m: QuoteMarket) => d.getFullYear() + (m === 'th' ? 543 : 0)
const showDate = (iso: string, m: QuoteMarket) => { const d = new Date(iso); const p = (n: number) => String(n).padStart(2, '0'); return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${yearOf(d, m)}` }
const showDays = (s: string) => (/^\s*\d+(\s*[–-]\s*\d+)?\s*$/.test(s) ? `−${s.trim()} Days` : s.trim())
const seqKey = (y: number) => 'hlq-seq-' + y
function readSeq(y: number) { try { return Number(localStorage.getItem(seqKey(y))) || 0 } catch { return 0 } }
function writeSeq(y: number, n: number) { try { if (n > readSeq(y)) localStorage.setItem(seqKey(y), String(n)) } catch {} }

export function parsePrice(s: string) {
  const m = s.replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? Number(m[0]) : 0
}

type Pay = { pct: number; label: string }
// Payment presets. The template's own layout is a single "50% Last payment on the contract date" line.
// With two or more installments the printout shows the per-installment table (pre-tax, VAT, net, WHT 3%, received).
const PRESETS: Record<'last' | 'deposit' | 'full', { pays: (lang: QuoteLang) => Pay[]; grand: number }> = {
  last: { pays: () => [{ pct: 50, label: 'Last payment on the contract date' }], grand: 0 },
  deposit: { pays: (l) => [{ pct: 50, label: l === 'th' ? 'มัดจำ' : 'Deposit' }, { pct: 50, label: l === 'th' ? 'งวดสุดท้าย' : 'Final payment' }], grand: 0 },
  full: { pays: () => [], grand: -1 },
}

const emptyStep = (): Step => ({ title: '', bullets: '', days: '' })
const emptySection = (): Section => ({ title: '', price: 0, included: false, steps: [emptyStep()] })

export default function QuoteForm({ seed }: { seed: QuoteSeed }) {
  const t = Q[seed.lang]
  const [market, setMarket] = useState<QuoteMarket>(seed.market)
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [seq, setSeq] = useState(1)
  const [no, setNo] = useState('')
  const [cust, setCust] = useState({ name: '', addr: '' })
  const [sections, setSections] = useState<Section[]>(() =>
    seed.items.length
      ? seed.items.map((x) => ({ title: x.desc, price: x.price, included: false, steps: [{ title: '', bullets: (x.bullets || []).join('\n'), days: x.days || '' }] }))
      : [emptySection()],
  )
  const [discount, setDiscount] = useState(0)
  const [vat, setVat] = useState(false)
  const [wht, setWht] = useState(seed.market === 'th')
  const [pays, setPays] = useState<Pay[]>(PRESETS.last.pays(seed.lang))
  // index of the installment shown as GRAND TOTAL, or -1 for the full amount
  const [grand, setGrand] = useState(PRESETS.last.grand)
  const [err, setErr] = useState('')

  // running number per year, kept in this browser: HLQ-2569-001, -002, ...
  const year = yearOf(new Date(date), market)
  useEffect(() => { const n = readSeq(year) + 1; setSeq(n); setNo(`HLQ-${year}-${String(n).padStart(3, '0')}`) }, [year])

  const cur = market === 'th' ? 'THB' : 'USD'
  const total = sections.reduce((s, x) => s + (x.included ? 0 : x.price), 0)
  const after = Math.max(0, total - discount)
  const vatAmt = vat ? round2(after * 0.07) : 0
  const whtAmt = wht ? round2(after * 0.03) : 0
  const net = round2(after + vatAmt - whtAmt)
  const pctSum = pays.reduce((s, x) => s + x.pct, 0)
  // when the installments add up to 100%, the last one takes the rounding remainder so they sum to the total exactly
  // each installment: its share of the pre-tax amount, then its own VAT and withholding
  const bases = pays.map((x, i) => (pctSum === 100 && i === pays.length - 1 ? round2(after - pays.slice(0, -1).reduce((s, y) => s + round2((after * y.pct) / 100), 0)) : round2((after * x.pct) / 100)))
  const inst = bases.map((b) => { const v = vat ? round2(b * 0.07) : 0; const w = wht ? round2(b * 0.03) : 0; return { base: b, vat: v, gross: round2(b + v), wht: w, net: round2(b + v - w) } })
  const payAmt = inst.map((x) => x.net)
  const due = grand >= 0 && grand < pays.length ? payAmt[grand] : net
  const setPay = (i: number, patch: Partial<Pay>) => setPays((xs) => xs.map((x, k) => (k === i ? { ...x, ...patch } : x)))
  const preset = (k: keyof typeof PRESETS) => { setPays(PRESETS[k].pays(seed.lang)); setGrand(PRESETS[k].grand) }

  const setSec = (i: number, patch: Partial<Section>) => setSections((xs) => xs.map((x, k) => (k === i ? { ...x, ...patch } : x)))
  const setStep = (i: number, j: number, patch: Partial<Step>) => setSections((xs) => xs.map((x, k) => (k === i ? { ...x, steps: x.steps.map((s, l) => (l === j ? { ...s, ...patch } : s)) } : x)))

  function print() {
    const secs = sections.filter((x) => x.title.trim())
    if (!cust.name.trim() || !secs.length) { setErr(t.need); return }
    setErr('')
    const origin = window.location.origin
    const co = CO[market]
    const body = secs.map((s, i) => {
      let n = 0
      const steps = s.steps.filter((st) => st.title.trim() || st.bullets.trim()).map((st) => {
        const head = st.title.trim() ? `<div class="st"><b>Step ${++n}</b> ${esc(st.title.trim())}</div>` : ''
        const lis = st.bullets.split('\n').map((l) => l.replace(/^\s*[-•]\s*/, '').trim()).filter(Boolean).map((l) => `<li>${esc(l)}</li>`).join('')
        return `<tr class="step"><td></td><td class="d">${head}${lis ? `<ul>${lis}</ul>` : ''}</td><td class="days">${esc(showDays(st.days))}</td><td></td></tr>`
      }).join('')
      const price = s.included ? '<span class="inc">Included</span>' : money(s.price)
      return `<tbody><tr class="sec"><td class="no">${i + 1}</td><td colspan="2" class="sect">${esc(s.title.trim())}</td><td class="pr${s.included ? ' incc' : ''}">${price}</td></tr>${steps}</tbody>`
    }).join('')
    const rows: [string, string][] = [['TOTAL', money(total)]]
    if (discount) rows.push(['Discount', '-' + money(discount)], ['TOTAL', money(after)])
    const split = pays.length > 1
    if (!split) {
      if (vat) rows.push(['VAT 7%', money(vatAmt)])
      if (wht) rows.push(['Withholding TAX 3%', money(whtAmt)])
      if (vat || wht) rows.push(['TOTAL', money(net)])
      pays.forEach((x, i) => rows.push([`${x.pct}% ${x.label.trim()}`, money(payAmt[i])]))
    }
    const n2 = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const instRows: [string, (x: (typeof inst)[number]) => string, string][] = [
      ['ยอดก่อนหักภาษี', (x) => n2(x.base), 'mid'],
      ...(vat ? [['ภาษีมูลค่าเพิ่ม', (x: (typeof inst)[number]) => n2(x.vat), 'sm'] as [string, (x: (typeof inst)[number]) => string, string], ['ยอดสุทธิ', (x: (typeof inst)[number]) => n2(x.gross), 'big'] as [string, (x: (typeof inst)[number]) => string, string]] : []),
      ...(wht ? [['หักภาษี ณ ที่จ่าย (3%)', (x: (typeof inst)[number]) => `(${n2(x.wht)})`, 'sm'] as [string, (x: (typeof inst)[number]) => string, string]] : []),
      ['ยอดสุทธิที่ได้รับ', (x) => n2(x.net), 'big'],
    ]
    // Two installments sit inside the items table under Item / Price, like the company layout; more than two get their own table.
    const inTable = pays.length === 2
    const instRowsInTable = inTable ? `<tbody class="pay"><tr class="ph"><td></td><td></td>${pays.map((x, i) => `<td>งวดที่ ${i + 1}: ${esc(x.label.trim())} (${x.pct}%)</td>`).join('')}</tr>${instRows.map(([label, f, cls]) => `<tr><td></td><td class="pl ${cls}">${label}</td>${inst.map((x, i) => `<td class="${cls} c${i}">${f(x)}</td>`).join('')}</tr>`).join('')}</tbody>` : ''
    const instTable = split && !inTable ? `<table class="inst"><thead><tr><th></th>${pays.map((x, i) => `<th>งวดที่ ${i + 1}: ${esc(x.label.trim())} (${x.pct}%)</th>`).join('')}</tr></thead><tbody>${instRows.map(([label, f, cls]) => `<tr><td class="il ${cls}">${label}</td>${inst.map((x, i) => `<td class="${cls} c${i % 2}">${f(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''
    const font = (w: string, f: string) => `@font-face{font-family:'LINE Seed Sans TH';src:url(${origin}/fonts/LINESeedSansTH_${f}.woff2) format('woff2');font-weight:${w}}`
    const html = `<!doctype html><html lang="${seed.lang}"><head><meta charset="utf-8"><title>${esc(no)} ${esc(cust.name)}</title>
<style>
${font('400', 'Rg')}${font('700', 'Bd')}
@page{size:A4;margin:14mm 14mm 16mm}*{box-sizing:border-box}
body{font-family:'LINE Seed Sans TH',system-ui,sans-serif;color:#14132B;font-size:12.5px;line-height:1.55;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.top{display:flex;justify-content:space-between;gap:24px}
.logo{height:26px;margin:6px 0 22px}.coname{font-weight:700;font-size:16px}.muted{color:#5A5870}
.qt{text-align:right}.qt h1{font-size:40px;letter-spacing:.06em;margin:0;line-height:1.1;font-weight:700}
.bar{height:3px;background:linear-gradient(90deg,#7B6EF6,#2A9BB0);margin:6px 0 16px;border-radius:2px}
.to{background:#F3F2FC;border-radius:12px;padding:12px 16px;margin:18px 0 16px;font-size:14px}.to b{color:#5B4FE0}
table.items{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #DCDAF0;border-radius:12px;overflow:hidden}
.items thead th{background:#11102A;color:#fff;font-weight:700;padding:11px 10px;font-size:13.5px}
.items thead{display:table-header-group}
.items td{border-top:1px solid #E2E0F2;vertical-align:middle}
.sec td{background:#F3F2FC;padding:10px}.no{width:44px;text-align:center;font-weight:700;font-size:16px}
.sect{font-weight:700;font-size:16px}.pr{width:120px;text-align:center;font-weight:700;font-size:16px;border-left:1px solid #E2E0F2}
.incc{font-weight:400}.inc{color:#6E6C85;font-size:13px}
.step td{padding:8px 10px;page-break-inside:avoid}.d{vertical-align:top}.step td:nth-child(3){border-left:1px solid #E2E0F2}.step td:nth-child(4){border-left:1px solid #E2E0F2}
.st{color:#5B4FE0;font-size:14.5px;margin-bottom:2px}.st b{font-weight:700}
ul{margin:2px 0 2px;padding-left:20px}li{margin:1px 0}
.days{width:96px;text-align:center;color:#1E8C9E;font-weight:700;white-space:nowrap}
tr{page-break-inside:avoid}
.sum{width:56%;margin:14px 0 0 auto;border-collapse:collapse;page-break-inside:avoid}
.sum td{padding:9px 14px;border-bottom:1px solid #E2E0F2;font-size:14px}.sum td:last-child{text-align:right;font-weight:700}
.inst{width:100%;margin:16px 0 0;border-collapse:collapse;border:1px solid #DCDAF0;page-break-inside:avoid}
.inst th{background:#fff;color:#5B4FE0;font-weight:700;font-size:12.5px;padding:18px 10px 8px;text-align:center;vertical-align:bottom;border-left:1px solid #DCDAF0;border-bottom:1px solid #DCDAF0}.inst th:first-child{border-left:0}
.inst td{padding:8px 14px;border-bottom:1px solid #E2E0F2;border-left:1px solid #DCDAF0;text-align:center;font-size:14px}.inst .il{background:#fff;font-size:13px;border-left:0;width:36%;text-align:left}
.inst .c0{background:#F3F2FC}.inst .c1{background:#E8E5FB}
.split .days,.split .pr{width:170px}
.pay td{border-top:1px solid #E2E0F2;padding:8px 14px}.pay .ph td{text-align:center;font-size:12.5px;font-weight:700;color:#5B4FE0;padding:22px 8px 8px;vertical-align:bottom}
.pay .ph td:nth-child(n+3),.pay td:nth-child(n+3){border-left:1px solid #DCDAF0}
.pay .pl{text-align:right;font-size:13px;padding-right:40px}.pay .c0{background:#F3F2FC}.pay .c1{background:#E8E5FB}
.pay .big,.pay .mid,.pay .sm{font-size:14px;color:#14132B;text-align:center}.pay .pl{text-align:right}
.pay .big,.inst .big{font-weight:700}.pay .mid,.pay .sm,.inst .mid,.inst .sm{font-weight:400}
.pay td.mid:not(.pl),.inst td.mid:not(.il){font-weight:700}
.grand{width:56%;margin:10px 0 0 auto;background:#11102A;color:#fff;border-radius:12px;display:flex;justify-content:space-between;align-items:center;padding:14px 18px;font-size:20px;page-break-inside:avoid}
.grand b{font-size:22px}
.foot{border-top:1px solid #DCDAF0;margin-top:22px;padding-top:10px;text-align:center;color:#5A5870;font-size:11.5px}
</style></head><body>
<div class="top"><div><img class="logo" src="${origin}/haliviq-logo.svg" alt="HALIVIQ"><div class="coname">${esc(co.name)}</div><div class="muted">${co.address.map(esc).join('<br>')}<br>Tel: ${esc(co.phone)} · ${EMAIL} · ${WEB}</div></div>
<div class="qt"><h1>QUOTATION</h1><div class="bar"></div><div class="muted">No. ${esc(no)}<br>Date. ${showDate(date, market)}</div></div></div>
<div class="to"><b>To:</b> ${esc(cust.name)}${cust.addr.trim() ? '<br>' + esc(cust.addr).replace(/\n/g, '<br>') : ''}</div>
<table class="items${inTable ? ' split' : ''}"><thead><tr><th>NO.</th><th>Description</th><th>Item</th><th>Price (${cur})</th></tr></thead>${body}${instRowsInTable}</table>
${split ? (discount ? `<table class="sum">${rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${b}</td></tr>`).join('')}</table>` : '') : `<table class="sum">${rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${b}</td></tr>`).join('')}</table>`}${instTable}
${split ? '' : `<div class="grand"><span>GRAND TOTAL</span><b>${money(due)}</b></div>`}
<div class="foot">Haliviq Co., Ltd. · ${co.address.map(esc).join(' ')} · ${EMAIL} · ${WEB}</div>
<script>Promise.all([document.fonts.ready,new Promise(function(r){var i=document.querySelector('.logo');if(i.complete)r();else{i.onload=r;i.onerror=r}})]).then(function(){setTimeout(function(){window.print()},300)})</script>
</body></html>`
    const w = window.open('', '_blank')
    if (!w) { setErr(t.popup); return }
    w.document.open()
    w.document.write(html)
    w.document.close()
    if (no === `HLQ-${year}-${String(seq).padStart(3, '0')}`) writeSeq(year, seq)
  }

  const line = '1px solid rgb(var(--fg) / 0.15)'
  const inp: React.CSSProperties = { width: '100%', padding: '9px 12px', borderRadius: 10, border: line, background: 'transparent', color: 'var(--ink)', fontSize: 15, fontFamily: 'inherit', minWidth: 0 }
  const lab: React.CSSProperties = { fontSize: 12, opacity: 0.7, margin: '10px 2px 4px', display: 'block' }
  const head: React.CSSProperties = { fontSize: 16, fontWeight: 700, color: '#ECD37D', margin: '18px 2px 6px' }
  const small: React.CSSProperties = { border: line, borderRadius: 999, padding: '7px 13px', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13 }
  const field = (label: string, el: React.ReactNode) => <label style={{ display: 'block' }}><span style={lab}>{label}</span>{el}</label>
  const num = (v: string) => Math.max(0, Number(v) || 0)
  const check = (label: string, on: boolean, set: (v: boolean) => void) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 2px', fontSize: 15, cursor: 'pointer' }}><input type="checkbox" checked={on} onChange={(e) => set(e.target.checked)} /> {label}</label>
  )
  const row = (a: string, b: string, strong?: boolean) => <div style={{ display: 'flex', justifyContent: 'space-between', ...(strong ? { fontWeight: 700, fontSize: 18 } : {}) }}><span>{a}</span><span>{b}</span></div>

  return (
    <div style={{ marginTop: 10, border: line, borderRadius: 18, padding: '6px 16px 16px', background: 'rgb(var(--fg) / 0.03)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
        <div style={{ fontSize: 19, fontWeight: 700 }}>{t.title}</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['th', 'us'] as const).map((m) => (
            <button key={m} type="button" onClick={() => { setMarket(m); setWht(m === 'th'); if (m === 'us') setVat(false) }} style={{ ...small, background: market === m ? 'var(--accent)' : 'transparent', color: market === m ? '#14131A' : 'var(--ink)' }}>{m === 'th' ? 'THB' : 'USD'}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 10px' }}>
        {field(t.no, <input value={no} onChange={(e) => setNo(e.target.value)} style={inp} />)}
        {field(t.date, <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inp} />)}
      </div>

      <div style={head}>{t.to}</div>
      {field(t.custName + ' *', <input value={cust.name} onChange={(e) => setCust({ ...cust, name: e.target.value })} style={inp} />)}
      {field(t.custAddr, <textarea rows={2} value={cust.addr} onChange={(e) => setCust({ ...cust, addr: e.target.value })} style={{ ...inp, resize: 'vertical' }} />)}

      <div style={head}>{t.sections}</div>
      {sections.map((s, i) => (
        <div key={i} style={{ border: line, borderRadius: 14, padding: '4px 12px 12px', marginBottom: 10 }}>
          {field(`${t.section} ${i + 1}`, <input value={s.title} placeholder={t.secTitle} onChange={(e) => setSec(i, { title: e.target.value })} style={{ ...inp, fontWeight: 700 }} />)}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 10, alignItems: 'end' }}>
            {field(`${t.price} (${cur})`, <input type="number" min={0} value={s.price} disabled={s.included} onChange={(e) => setSec(i, { price: num(e.target.value) })} style={{ ...inp, opacity: s.included ? 0.5 : 1 }} />)}
            {check(t.included, s.included, (v) => setSec(i, { included: v }))}
          </div>
          {s.steps.map((st, j) => (
            <div key={j} style={{ borderLeft: '3px solid #7B6EF6', padding: '0 0 6px 10px', marginTop: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px', gap: 10 }}>
                {field(`${t.step} ${j + 1}`, <input value={st.title} placeholder={t.stepTitle} onChange={(e) => setStep(i, j, { title: e.target.value })} style={inp} />)}
                {field(t.days, <input value={st.days} placeholder="4" onChange={(e) => setStep(i, j, { days: e.target.value })} style={inp} />)}
              </div>
              {field(t.bullets, <textarea rows={4} value={st.bullets} onChange={(e) => setStep(i, j, { bullets: e.target.value })} style={{ ...inp, resize: 'vertical' }} />)}
              {s.steps.length > 1 && <button type="button" onClick={() => setSec(i, { steps: s.steps.filter((_, l) => l !== j) })} style={{ ...small, marginTop: 6, opacity: 0.7 }}>{t.remove} {t.step} {j + 1}</button>}
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
            <button type="button" onClick={() => setSec(i, { steps: [...s.steps, emptyStep()] })} style={small}>{t.addStep}</button>
            {sections.length > 1 && <button type="button" onClick={() => setSections((xs) => xs.filter((_, k) => k !== i))} style={{ ...small, opacity: 0.7 }}>{t.removeSection}</button>}
          </div>
        </div>
      ))}
      <button type="button" onClick={() => setSections((xs) => [...xs, emptySection()])} style={{ ...small, fontSize: 14, padding: '8px 14px' }}>{t.addSection}</button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0 10px', alignItems: 'end', marginTop: 6 }}>
        {field(`${t.discount} (${cur})`, <input type="number" min={0} value={discount} onChange={(e) => setDiscount(num(e.target.value))} style={inp} />)}
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {check(t.wht, wht, setWht)}
        {check(t.vat, vat, setVat)}
      </div>

      <div style={head}>{t.pays}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {(['last', 'deposit', 'full'] as const).map((k) => <button key={k} type="button" onClick={() => preset(k)} style={small}>{k === 'last' ? t.presetLast : k === 'deposit' ? t.presetDeposit : t.presetFull}</button>)}
      </div>
      {pays.map((x, i) => (
        <div key={i} style={{ border: line, borderRadius: 12, padding: '0 12px 10px', marginTop: 8 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 10 }}>
            {field('%', <input type="number" min={1} max={100} value={x.pct} onChange={(e) => setPay(i, { pct: Math.min(100, num(e.target.value)) })} style={inp} />)}
            {field(`${i + 1}. ${money(payAmt[i])} ${cur}`, <input value={x.label} onChange={(e) => setPay(i, { label: e.target.value })} style={inp} />)}
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {pays.length < 2 && <label style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 8, fontSize: 14, cursor: 'pointer' }}><input type="radio" checked={grand === i} onChange={() => setGrand(i)} /> {t.grandIs}</label>}
            <button type="button" onClick={() => { setPays((xs) => xs.filter((_, k) => k !== i)); setGrand((g) => (g === i ? -1 : g > i ? g - 1 : g)) }} style={{ ...small, marginTop: 8, opacity: 0.7 }}>{t.remove}</button>
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 8 }}>
        <button type="button" onClick={() => setPays((xs) => [...xs, { pct: Math.max(0, 100 - pctSum) || 50, label: '' }])} style={small}>{t.addPay}</button>
        {pays.length < 2 && <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, cursor: 'pointer' }}><input type="radio" checked={grand < 0 || grand >= pays.length} onChange={() => setGrand(-1)} /> {t.grandFull}</label>}
      </div>
      {pays.length > 1 && pctSum !== 100 && <div style={{ color: '#ECD37D', fontSize: 13, marginTop: 6 }}>{t.pctWarn(pctSum)}</div>}

      <div style={{ marginTop: 10, padding: '12px 14px', borderRadius: 12, background: 'rgb(var(--fg) / 0.06)', fontSize: 15, lineHeight: 1.8 }}>
        {row('TOTAL', money(total))}
        {discount > 0 && row('Discount', '-' + money(discount))}
        {vat && row('VAT 7%', money(vatAmt))}
        {wht && row('Withholding TAX 3%', money(whtAmt))}
        {(vat || wht || discount > 0) && row('TOTAL', money(net))}
        {pays.map((x, i) => <div key={i}>{row(`${x.pct}% ${x.label}`, money(payAmt[i]))}</div>)}
        {pays.length < 2 && row('GRAND TOTAL', `${money(due)} ${cur}`, true)}
      </div>

      <div style={{ fontSize: 13, opacity: 0.65, marginTop: 12 }}>{t.note}</div>
      {err && <div style={{ color: '#F28B82', fontSize: 14, marginTop: 8 }}>{err}</div>}
      <button type="button" onClick={print} style={{ marginTop: 12, width: '100%', padding: '13px 20px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'inherit' }}>{t.print}</button>
    </div>
  )
}
