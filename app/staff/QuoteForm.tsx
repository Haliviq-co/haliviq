'use client'

import { useState } from 'react'

// Quotation builder that Havy shows in the staff chat when someone asks for a quote.
// Staff fill it in, then "Print / PDF" opens a clean A4 quotation in a new window to print or save as PDF.
// Nothing is stored on a server.

export type QuoteLang = 'th' | 'en'
export type QuoteMarket = 'th' | 'us'
export type QuoteSeed = { lang: QuoteLang; market: QuoteMarket; items: { desc: string; price: number }[] }
type Item = { desc: string; qty: number; price: number }

const CO = {
  th: { name: 'บริษัท ฮาลิวิก จำกัด', address: ['อาคาร Spaces ถนนพญาไท ชั้น 4 ห้อง 402', 'เขตราชเทวี กรุงเทพฯ 10400'], phone: '+66 90 918 9009' },
  us: { name: 'Haliviq Co., Ltd.', address: ['315 East J. Street,', 'Shelton, WA 98584'], phone: '+1 (206) 379-3643' },
}
const EMAIL = 'info@haliviq.com'
const WEB = 'www.haliviq.com'

const Q = {
  th: {
    title: 'ใบเสนอราคา', docTitle: 'ใบเสนอราคา / Quotation', no: 'เลขที่', date: 'วันที่', valid: 'ยืนราคา (วัน)', validUntil: 'ยืนราคาถึง',
    customer: 'ข้อมูลลูกค้า', custName: 'ชื่อลูกค้า / ผู้ติดต่อ', custCo: 'บริษัท', custAddr: 'ที่อยู่', custTax: 'เลขประจำตัวผู้เสียภาษี', custContact: 'อีเมล / เบอร์โทร',
    items: 'รายการ', desc: 'รายละเอียด', qty: 'จำนวน', price: 'ราคาต่อหน่วย', amount: 'จำนวนเงิน', addItem: '+ เพิ่มรายการ', remove: 'ลบ',
    discount: 'ส่วนลด', vat: 'ภาษีมูลค่าเพิ่ม 7%', subtotal: 'รวมเป็นเงิน', afterDiscount: 'ยอดหลังหักส่วนลด', total: 'ยอดรวมทั้งสิ้น',
    terms: 'เงื่อนไขการชำระเงิน / หมายเหตุ', defaultTerms: 'มัดจำ 50% ก่อนเริ่มงาน และชำระส่วนที่เหลือ 50% เมื่อส่งมอบงาน',
    by: 'ผู้เสนอราคา', byName: 'ชื่อผู้เสนอราคา', print: 'พิมพ์ / บันทึกเป็น PDF', needName: 'ใส่ชื่อลูกค้าและอย่างน้อย 1 รายการก่อนครับ',
    sigCustomer: 'ผู้อนุมัติ (ลูกค้า)', sigCompany: 'ผู้เสนอราคา', sigDate: 'วันที่ ____/____/______', currency: 'บาท', popup: 'เบราว์เซอร์บล็อกหน้าต่างใหม่ กรุณาอนุญาต pop-up แล้วลองอีกครั้ง',
    note: 'ราคาตั้งต้นดึงจากคู่มือ แก้ได้ทุกช่อง เช็กกับหัวหน้าทีมก่อนส่งลูกค้า',
  },
  en: {
    title: 'Quotation', docTitle: 'Quotation', no: 'No.', date: 'Date', valid: 'Valid for (days)', validUntil: 'Valid until',
    customer: 'Customer', custName: 'Customer / contact name', custCo: 'Company', custAddr: 'Address', custTax: 'Tax ID', custContact: 'Email / phone',
    items: 'Items', desc: 'Description', qty: 'Qty', price: 'Unit price', amount: 'Amount', addItem: '+ Add item', remove: 'Remove',
    discount: 'Discount', vat: 'VAT 7%', subtotal: 'Subtotal', afterDiscount: 'After discount', total: 'Total',
    terms: 'Payment terms / notes', defaultTerms: '50% deposit before work starts, remaining 50% on delivery.',
    by: 'Prepared by', byName: 'Prepared by (name)', print: 'Print / save as PDF', needName: 'Add a customer name and at least one item first.',
    sigCustomer: 'Approved by (customer)', sigCompany: 'Prepared by', sigDate: 'Date ____/____/______', currency: 'USD', popup: 'The browser blocked the new window. Allow pop-ups and try again.',
    note: 'Starting prices come from the handbook. Every field can be edited. Check with the team lead before sending.',
  },
}

function quoteNo(d: Date) {
  const p = (n: number) => String(n).padStart(2, '0')
  return `QT-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`
}
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

export function parsePrice(s: string) {
  const m = s.replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? Number(m[0]) : 0
}

export default function QuoteForm({ seed }: { seed: QuoteSeed }) {
  const t = Q[seed.lang]
  const [market, setMarket] = useState<QuoteMarket>(seed.market)
  const [no] = useState(() => quoteNo(new Date()))
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [validDays, setValidDays] = useState(30)
  const [cust, setCust] = useState({ name: '', co: '', addr: '', tax: '', contact: '' })
  const [items, setItems] = useState<Item[]>(() => (seed.items.length ? seed.items.map((x) => ({ desc: x.desc, qty: 1, price: x.price })) : [{ desc: '', qty: 1, price: 0 }]))
  const [discount, setDiscount] = useState(0)
  const [vat, setVat] = useState(seed.market === 'th')
  const [terms, setTerms] = useState(t.defaultTerms)
  const [by, setBy] = useState('')
  const [err, setErr] = useState('')

  const cur = market === 'th' ? 'THB' : 'USD'
  const fmt = (n: number) => n.toLocaleString(seed.lang === 'th' ? 'th-TH' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0)
  const after = Math.max(0, subtotal - discount)
  const vatAmt = vat ? Math.round(after * 7) / 100 : 0
  const total = after + vatAmt
  const until = (() => { const d = new Date(date); d.setDate(d.getDate() + validDays); return d.toISOString().slice(0, 10) })()

  const setItem = (i: number, patch: Partial<Item>) => setItems((xs) => xs.map((x, k) => (k === i ? { ...x, ...patch } : x)))

  function print() {
    const filled = items.filter((x) => x.desc.trim())
    if (!cust.name.trim() || !filled.length) { setErr(t.needName); return }
    setErr('')
    const co = CO[market]
    const rows = filled.map((x, i) => `<tr><td class="c">${i + 1}</td><td>${esc(x.desc).replace(/\n/g, '<br>')}</td><td class="r">${x.qty}</td><td class="r">${fmt(x.price)}</td><td class="r">${fmt(x.qty * x.price)}</td></tr>`).join('')
    const custLines = [cust.co, cust.addr, cust.tax && `${t.custTax}: ${cust.tax}`, cust.contact].filter(Boolean).map((x) => esc(x as string).replace(/\n/g, '<br>')).join('<br>')
    const html = `<!doctype html><html lang="${seed.lang}"><head><meta charset="utf-8"><title>${esc(no)} ${esc(cust.name)}</title>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
<style>
@page{size:A4;margin:16mm}*{box-sizing:border-box}body{font-family:Sarabun,system-ui,sans-serif;color:#14131A;font-size:13px;line-height:1.55;margin:0;padding:24px}
.top{display:flex;justify-content:space-between;gap:24px;border-bottom:3px solid #7B6EF6;padding-bottom:14px}
.brand{font-size:24px;font-weight:700;letter-spacing:.04em;color:#7B6EF6}.muted{color:#555}
h1{font-size:22px;margin:0 0 6px;text-align:right}.meta td{padding:1px 0 1px 12px;text-align:right}
.box{border:1px solid #ddd;border-radius:8px;padding:10px 14px;margin:16px 0}.lab{font-size:11px;color:#777;text-transform:uppercase;letter-spacing:.08em}
table.items{width:100%;border-collapse:collapse;margin-top:8px}.items th{background:#F1EFFE;text-align:left;padding:8px;font-weight:600;border-bottom:1px solid #ccc}
.items td{padding:8px;border-bottom:1px solid #eee;vertical-align:top}.r{text-align:right}.c{text-align:center;width:36px}
.sum{width:300px;margin-left:auto;margin-top:12px;border-collapse:collapse}.sum td{padding:4px 8px}.sum .tot td{font-size:16px;font-weight:700;border-top:2px solid #14131A;padding-top:8px}
.terms{white-space:pre-wrap}.sig{display:flex;gap:40px;margin-top:56px}.sig div{flex:1;text-align:center}.sig .line{border-top:1px solid #333;margin-bottom:6px;padding-top:6px}
@media print{body{padding:0}}
</style></head><body>
<div class="top"><div><div class="brand">HALIVIQ</div><div style="font-weight:600">${esc(co.name)}</div><div class="muted">${co.address.map(esc).join('<br>')}<br>${esc(co.phone)} · ${EMAIL} · ${WEB}</div></div>
<div><h1>${esc(t.docTitle)}</h1><table class="meta"><tr><td class="muted">${t.no}</td><td>${esc(no)}</td></tr><tr><td class="muted">${t.date}</td><td>${esc(date)}</td></tr><tr><td class="muted">${t.validUntil}</td><td>${esc(until)}</td></tr></table></div></div>
<div class="box"><div class="lab">${t.customer}</div><div style="font-weight:600;font-size:15px">${esc(cust.name)}</div>${custLines}</div>
<table class="items"><thead><tr><th class="c">#</th><th>${t.desc}</th><th class="r">${t.qty}</th><th class="r">${t.price}</th><th class="r">${t.amount} (${cur})</th></tr></thead><tbody>${rows}</tbody></table>
<table class="sum"><tr><td>${t.subtotal}</td><td class="r">${fmt(subtotal)}</td></tr>
${discount ? `<tr><td>${t.discount}</td><td class="r">-${fmt(discount)}</td></tr><tr><td>${t.afterDiscount}</td><td class="r">${fmt(after)}</td></tr>` : ''}
${vat ? `<tr><td>${t.vat}</td><td class="r">${fmt(vatAmt)}</td></tr>` : ''}
<tr class="tot"><td>${t.total}</td><td class="r">${fmt(total)} ${cur}</td></tr></table>
${terms.trim() ? `<div class="box"><div class="lab">${t.terms}</div><div class="terms">${esc(terms)}</div></div>` : ''}
<div class="sig"><div><div class="line">${t.sigCustomer}</div><div class="muted">${t.sigDate}</div></div><div><div class="line">${t.sigCompany}${by.trim() ? ': ' + esc(by) : ''}</div><div class="muted">${t.sigDate}</div></div></div>
<script>document.fonts.ready.then(function(){setTimeout(function(){window.print()},300)})</script>
</body></html>`
    const w = window.open('', '_blank')
    if (!w) { setErr(t.popup); return }
    w.document.open()
    w.document.write(html)
    w.document.close()
  }

  const line = '1px solid rgb(var(--fg) / 0.15)'
  const inp: React.CSSProperties = { width: '100%', padding: '9px 12px', borderRadius: 10, border: line, background: 'transparent', color: 'var(--ink)', fontSize: 15, fontFamily: 'inherit', minWidth: 0 }
  const lab: React.CSSProperties = { fontSize: 12, opacity: 0.7, margin: '10px 2px 4px', display: 'block' }
  const head: React.CSSProperties = { fontSize: 16, fontWeight: 700, color: '#ECD37D', margin: '18px 2px 6px' }
  const field = (label: string, el: React.ReactNode) => <label style={{ display: 'block' }}><span style={lab}>{label}</span>{el}</label>

  return (
    <div style={{ marginTop: 10, border: line, borderRadius: 18, padding: '6px 16px 16px', background: 'rgb(var(--fg) / 0.03)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
        <div style={{ fontSize: 19, fontWeight: 700 }}>{t.title} · {no}</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['th', 'us'] as const).map((m) => (
            <button key={m} type="button" onClick={() => { setMarket(m); setVat(m === 'th') }} style={{ border: line, borderRadius: 999, padding: '5px 12px', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer', background: market === m ? 'var(--accent)' : 'transparent', color: market === m ? '#14131A' : 'var(--ink)' }}>{m === 'th' ? 'THB' : 'USD'}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 10px' }}>
        {field(t.date, <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inp} />)}
        {field(t.valid, <input type="number" min={1} value={validDays} onChange={(e) => setValidDays(Math.max(1, Number(e.target.value) || 0))} style={inp} />)}
      </div>

      <div style={head}>{t.customer}</div>
      {field(t.custName + ' *', <input value={cust.name} onChange={(e) => setCust({ ...cust, name: e.target.value })} style={inp} />)}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 10px' }}>
        {field(t.custCo, <input value={cust.co} onChange={(e) => setCust({ ...cust, co: e.target.value })} style={inp} />)}
        {field(t.custContact, <input value={cust.contact} onChange={(e) => setCust({ ...cust, contact: e.target.value })} style={inp} />)}
        {field(t.custTax, <input value={cust.tax} onChange={(e) => setCust({ ...cust, tax: e.target.value })} style={inp} />)}
      </div>
      {field(t.custAddr, <textarea rows={2} value={cust.addr} onChange={(e) => setCust({ ...cust, addr: e.target.value })} style={{ ...inp, resize: 'vertical' }} />)}

      <div style={head}>{t.items}</div>
      {items.map((x, i) => (
        <div key={i} style={{ border: line, borderRadius: 12, padding: '4px 12px 12px', marginBottom: 8 }}>
          {field(`${i + 1}. ${t.desc}`, <textarea rows={2} value={x.desc} onChange={(e) => setItem(i, { desc: e.target.value })} style={{ ...inp, resize: 'vertical' }} />)}
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 10, alignItems: 'end' }}>
            {field(t.qty, <input type="number" min={0} value={x.qty} onChange={(e) => setItem(i, { qty: Math.max(0, Number(e.target.value) || 0) })} style={inp} />)}
            {field(`${t.price} (${cur})`, <input type="number" min={0} value={x.price} onChange={(e) => setItem(i, { price: Math.max(0, Number(e.target.value) || 0) })} style={inp} />)}
            <button type="button" onClick={() => setItems((xs) => (xs.length > 1 ? xs.filter((_, k) => k !== i) : [{ desc: '', qty: 1, price: 0 }]))} style={{ border: line, borderRadius: 10, padding: '9px 12px', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, opacity: 0.75 }}>{t.remove}</button>
          </div>
          <div style={{ textAlign: 'right', fontSize: 13, opacity: 0.7, marginTop: 6 }}>{t.amount}: {fmt(x.qty * x.price)} {cur}</div>
        </div>
      ))}
      <button type="button" onClick={() => setItems((xs) => [...xs, { desc: '', qty: 1, price: 0 }])} style={{ border: line, borderRadius: 999, padding: '8px 14px', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14 }}>{t.addItem}</button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 10px', alignItems: 'end' }}>
        {field(`${t.discount} (${cur})`, <input type="number" min={0} value={discount} onChange={(e) => setDiscount(Math.max(0, Number(e.target.value) || 0))} style={inp} />)}
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 2px', fontSize: 15, cursor: 'pointer' }}>
          <input type="checkbox" checked={vat} onChange={(e) => setVat(e.target.checked)} /> {t.vat}
        </label>
      </div>

      <div style={{ marginTop: 14, padding: '12px 14px', borderRadius: 12, background: 'rgb(var(--fg) / 0.06)', fontSize: 15, lineHeight: 1.8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{t.subtotal}</span><span>{fmt(subtotal)}</span></div>
        {discount > 0 && <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{t.discount}</span><span>-{fmt(discount)}</span></div>}
        {vat && <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{t.vat}</span><span>{fmt(vatAmt)}</span></div>}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 18 }}><span>{t.total}</span><span>{fmt(total)} {cur}</span></div>
      </div>

      {field(t.terms, <textarea rows={3} value={terms} onChange={(e) => setTerms(e.target.value)} style={{ ...inp, resize: 'vertical' }} />)}
      {field(t.byName, <input value={by} onChange={(e) => setBy(e.target.value)} style={inp} />)}

      <div style={{ fontSize: 13, opacity: 0.65, marginTop: 12 }}>{t.note}</div>
      {err && <div style={{ color: '#F28B82', fontSize: 14, marginTop: 8 }}>{err}</div>}
      <button type="button" onClick={print} style={{ marginTop: 12, width: '100%', padding: '13px 20px', borderRadius: 999, border: 0, background: 'var(--accent)', color: '#14131A', fontWeight: 700, fontSize: 16, cursor: 'pointer', fontFamily: 'inherit' }}>{t.print}</button>
    </div>
  )
}
