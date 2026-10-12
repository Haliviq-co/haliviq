'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

// A free, rule-based assistant. It answers from the FAQ already on the site, so it has no API cost.
// Optional dashboard: set NEXT_PUBLIC_CHAT_LOG_URL to a Google Apps Script web-app URL and each question is
// appended to a Google Sheet (no names, emails or other identifiers are sent).
type Msg = { from: 'bot' | 'me'; text: string; links?: { label: string; href: string }[]; agent?: boolean }
type QA = { q: string; a: string; h?: string; k?: string; x?: string; p?: number }

const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/message/TM3WC6DUJAFEK1', bg: '#25D366' },
  { id: 'messenger', label: 'Messenger', href: 'https://m.me/haliviq', bg: 'linear-gradient(135deg,#00B2FF,#7A5CFF 60%,#FF5CA8)' },
  { id: 'line', label: 'LINE', href: 'https://lin.ee/zyTrkx4', bg: '#06C755' },
] as const

function ChannelIcon({ id }: { id: string }) {
  if (id === 'whatsapp')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 8.5c.3 3.2 2.9 5.8 6 6.2l1.2-1.4-2-1-.9.7a4 4 0 01-1.9-1.9l.7-.9-1-2z" fill="#fff" /></svg>)
  if (id === 'messenger')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.7.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z" fill="#fff" /><path d="M6.6 13.8l3.2-4.4 2.4 2 3.1-2-3.3 4.5-2.4-2z" fill="#7A5CFF" /></svg>)
  return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.8 3 3 6.3 3 10.4c0 3.6 3.2 6.6 7.5 7.2.3.1.7.2.8.5l-.1 1.3c0 .4-.3 1.3 1.1.7s7.4-4.400 7.4-8.700C19.700 6.300 17.500 3 12 3z" fill="#fff" /><text x="12" y="12.600" textAnchor="middle" fontSize="5.200" fontWeight="800" fill="#06C755" fontFamily="Arial,sans-serif">LINE</text></svg>)
}

// Phrases that mean "let me talk to a person". Single words like "agent" or "support" alone are NOT enough,
// because visitors also ask about "AI agents" or "support after launch".
const AGENT_STRONG = /เจ้าหน้าที่|แอดมิน|คนจริง|มนุษย์|ลูกค้าสัมพันธ์|พนักงานขาย|ขอคุยกับคน|live\s*(agent|chat)|human\s*(agent|being)?|real\s*(person|human)|customer\s*(service|care)|representative|operator|livechat/i
const AGENT_SOFT = /(คุย|ติดต่อ|ขอสาย|โอนสาย|ต่อสาย|ขอพูด|พูดคุย|ปรึกษา|สอบถาม|ทัก|แชท|chat|talk|speak|connect|contact|reach|transfer|message)\s*((กับ|ถึง|หา|with|to|a|an|the|your|me|us)\s*)*(ทีมงาน|ทีม|พนักงาน|คน|ฝ่ายขาย|ฝ่ายซัพพอร์ต|ซัพพอร์ต|เซลส์|ผู้เชี่ยวชาญ|admin|sales|team|staff|someone|somebody|person|people|support|agent|human|rep|expert)/i
const wantsAgent = (q: string) => q.length < 80 && (AGENT_STRONG.test(q) || AGENT_SOFT.test(q))

const EN_STOP = new Set('a an the and or of to in on for with at by from is are was were be been do does did can could will would should you your we our us i me my it its this that these those what which who how why when where about tell please any there have has had not no yes get got give need want like'.split(' '))
const TH_STOP = /ไหม|ได้|อะไร|คือ|หรือ|ยังไง|อย่างไร|บ้าง|ของ|ครับ|ค่ะ|คะ|นะ|ที่|มี|เป็น|ให้|และ|กับ|ใน|จะ|แล้ว|ด้วย|ช่วย|ขอ|อยาก|ต้องการ/g
// English: whole words. Thai (no spaces): character bigrams. Common filler words are dropped so they never decide a match.
const tokens = (s: string) => {
  const out = new Set<string>()
  const c = s.toLowerCase().replace(TH_STOP, ' ').replace(/[^a-z0-9฀-๿]+/g, ' ').trim()
  for (const w of c.split(' ')) {
    if (!w) continue
    if (/[฀-๿]/.test(w)) {
      if (w.length === 1) out.add(w)
      for (let i = 0; i < w.length - 1; i++) out.add(w.slice(i, i + 2))
    } else if (!EN_STOP.has(w) && w.length > 1) out.add(w.length > 4 ? w.replace(/(ing|es|s)$/, '') : w)
  }
  return out
}

export default function ChatBot({ lang }: { lang: Lang }) {
  const isEN = lang === 'en'
  const faqItems = useMemo(() => (((t[lang] as any)?.faq?.items || []) as QA[]), [lang])
  // The large knowledge base (public/chat-kb-<lang>.json) is fetched the first time the chat opens, so it never weighs on page load.
  const [kb, setKb] = useState<QA[]>([])
  const items = useMemo(() => (kb.length ? kb : faqItems), [kb, faqItems])
  const index = useMemo(() => items.map((it) => ({ it, g: tokens(it.q + ' ' + (it.x || '')), qg: tokens(it.q), kl: (it.k || '').toLowerCase() })), [items])
  // Rarer words count for more, so "ERP" matters more than "services".
  const { idf, maxIdf } = useMemo(() => {
    const df = new Map<string, number>()
    index.forEach((e) => e.g.forEach((x) => df.set(x, (df.get(x) || 0) + 1)))
    const m = new Map<string, number>()
    df.forEach((n, x) => m.set(x, Math.log(1 + index.length / n)))
    return { idf: m, maxIdf: Math.log(1 + index.length) }
  }, [index])
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const hello = isEN
    ? 'Hi! I am the Haliviq assistant. Ask me about our services, technology, timelines or how to start a project, or pick a question below.'
    : 'สวัสดีครับ ผมคือผู้ช่วยของ Haliviq ถามเรื่องบริการ เทคโนโลยี ระยะเวลา หรือวิธีเริ่มโปรเจกต์ได้เลย หรือเลือกคำถามด้านล่าง'
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: hello }])
  const end = useRef<HTMLDivElement>(null)

  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [msgs, open])
  useEffect(() => {
    if (!open) return
    let dead = false
    fetch(`/chat-kb-${lang}.json`).then((r) => (r.ok ? r.json() : [])).then((d: QA[]) => { if (!dead && Array.isArray(d)) setKb(d) }).catch(() => {})
    return () => { dead = true }
  }, [open, lang])
  useEffect(() => { setMsgs([{ from: 'bot', text: hello }]) }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  const log = (question: string, matched: number) => {
    const url = process.env.NEXT_PUBLIC_CHAT_LOG_URL
    if (!url) return
    try {
      fetch(url, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ ts: new Date().toISOString(), lang, page: location.pathname, question: question.slice(0, 300), matched: matched >= 0 ? items[matched].q : '' }) })
    } catch {}
  }

  const answer = (q: string): { text: string; links?: Msg['links']; idx: number } => {
    const g = tokens(q)
    const ql = q.toLowerCase()
    let qtotal = 0
    g.forEach((x) => { qtotal += idf.get(x) || maxIdf })
    let best = -1, bestScore = 0
    index.forEach((e, i) => {
      let hit = 0, qhit = 0
      g.forEach((x) => { const w = idf.get(x) || 0; if (e.g.has(x)) hit += w; if (e.qg.has(x)) qhit += w })
      if (!hit) return
      const cov = qtotal ? hit / qtotal : 0
      const qcov = qtotal ? qhit / qtotal : 0
      const kw = e.kl.length > 2 && ql.includes(e.kl) ? 0.12 : 0
      const score = cov * 0.7 + qcov * 0.3 + kw + (e.it.p ? 0.1 : 0)
      if (score > bestScore) { bestScore = score; best = i }
    })
    if (best >= 0 && bestScore >= 0.5) {
      const h = items[best].h
      return { text: items[best].a, idx: best, links: h && !h.endsWith('/contact') ? [{ label: isEN ? 'Read more' : 'ดูรายละเอียด', href: h }] : [{ label: isEN ? 'See our work' : 'ดูผลงานของเรา', href: `/${lang}/work` }] }
    }
    return {
      idx: -1,
      text: isEN
        ? 'I am not sure I have a good answer for that one. The team can reply within 24 hours, so please tell us about your project.'
        : 'เรื่องนี้ผมยังตอบได้ไม่ชัดเจน ทีมงานตอบกลับภายใน 24 ชั่วโมง เล่าเรื่องโปรเจกต์ของคุณให้ทีมฟังได้เลยครับ',
      links: [{ label: isEN ? 'Contact the team' : 'ติดต่อทีมงาน', href: `/${lang}/contact` }],
    }
  }

  const ask = (q: string) => {
    const clean = q.trim()
    if (!clean) return
    if (wantsAgent(clean)) {
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', agent: true, text: isEN ? 'Happy to connect you with the team. Pick the app you like and we will reply there.' : 'ยินดีต่อสายให้คุยกับทีมงานครับ เลือกแอปที่สะดวก แล้วทีมจะตอบกลับทางนั้น' }])
      setText('')
      log(clean, -1)
      return
    }
    const r = answer(clean)
    setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', text: r.text, links: r.links }])
    setText('')
    log(clean, r.idx)
  }

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[90] flex flex-col items-end" style={{ fontFamily: 'inherit' }}>
      {open && (
        <div
          role="dialog"
          aria-label={isEN ? 'Haliviq assistant' : 'ผู้ช่วย Haliviq'}
          className="chat-panel mb-3 flex flex-col overflow-hidden rounded-3xl"
          style={{ width: 'min(380px, calc(100vw - 32px))', height: 'min(560px, calc(100vh - 120px))', border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 30px 70px -20px rgba(60,50,160,0.45)' }}
        >
          <div className="flex items-center gap-3 px-5 py-4" style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff' }}>
            <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.22)' }} aria-hidden="true">✦</span>
            <div className="flex-1 leading-tight">
              <p style={{ fontWeight: 600 }}>{isEN ? 'Haliviq Assistant' : 'ผู้ช่วย Haliviq'}</p>
              <p className="text-xs" style={{ opacity: 0.9 }}>{isEN ? 'Answers from our FAQ · replies instantly' : 'ตอบจากคำถามที่พบบ่อย · ตอบทันที'}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={isEN ? 'Close' : 'ปิด'} className="text-xl leading-none px-2" style={{ color: '#fff' }}>×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ background: 'var(--bg)' }}>
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'me' ? 'self-end max-w-[85%]' : 'self-start max-w-[88%]'}>
                <div className="px-4 py-2.5 text-sm rounded-2xl" style={m.from === 'me'
                  ? { background: 'linear-gradient(135deg, #7B6EF6, #5A4ED4)', color: '#fff', borderTopRightRadius: 6, lineHeight: 1.65 }
                  : { background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', borderTopLeftRadius: 6, lineHeight: 1.65 }}>{m.text}</div>
                {m.agent && (
                  <div className="flex flex-col gap-2 mt-2">
                    {CHANNELS.map((c) => (
                      <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm" style={{ background: c.bg, color: '#fff', fontWeight: 600 }}>
                        <ChannelIcon id={c.id} />{isEN ? `Chat on ${c.label}` : `คุยทาง ${c.label}`}
                      </a>
                    ))}
                  </div>
                )}
                {m.links && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-xs px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>{l.label} →</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 mt-1">
                <button type="button" onClick={() => ask(isEN ? 'Chat with an agent' : 'คุยกับเจ้าหน้าที่')} className="text-xs px-3 py-2 rounded-full" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff', fontWeight: 600 }}>{isEN ? '💬 Chat with an agent' : '💬 คุยกับเจ้าหน้าที่'}</button>
                {faqItems.slice(0, 5).map((it) => (
                  <button key={it.q} type="button" onClick={() => ask(it.q)} className="text-xs px-3 py-2 rounded-full text-left" style={{ background: 'rgba(123,110,246,0.10)', border: '1px solid rgba(123,110,246,0.35)', color: 'var(--ink)' }}>{it.q}</button>
                ))}
              </div>
            )}
            <div ref={end} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); ask(text) }} className="flex items-center gap-2 px-3 py-3" style={{ background: 'var(--bg)', borderTop: '1px solid rgb(var(--fg) / 0.1)' }}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder={isEN ? 'Type your question…' : 'พิมพ์คำถามของคุณ…'} aria-label={isEN ? 'Your question' : 'คำถามของคุณ'}
              className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none" style={{ background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', border: '1px solid rgb(var(--fg) / 0.1)' }} />
            <button type="submit" aria-label={isEN ? 'Send' : 'ส่ง'} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7B6EF6, #53C3D7)', color: '#fff' }}>➤</button>
          </form>
          <p className="text-[10px] px-4 pb-2.5 text-center" style={{ background: 'var(--bg)', color: 'rgb(var(--fg) / 0.5)' }}>
            {isEN ? 'Questions may be saved to improve this site. Do not share personal details here.' : 'คำถามอาจถูกบันทึกเพื่อปรับปรุงเว็บไซต์ โปรดอย่าใส่ข้อมูลส่วนตัวในแชทนี้'}
          </p>
        </div>
      )}
      <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={isEN ? 'Chat with us' : 'แชทกับเรา'}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full px-5 py-3.5 transition-transform hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff', fontWeight: 600, boxShadow: '0 14px 34px -10px rgba(90,78,212,0.7)' }}
      >
        <span aria-hidden="true">{open ? '×' : '✦'}</span>
        <span className="text-sm">{open ? (isEN ? 'Close' : 'ปิด') : (isEN ? 'Ask us' : 'ถามเรา')}</span>
      </button>
      </div>
    </div>
  )
}
