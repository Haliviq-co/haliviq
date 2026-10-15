'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

// A free, rule-based assistant. It answers from the FAQ already on the site, so it has no API cost.
// Optional dashboard: set NEXT_PUBLIC_CHAT_LOG_URL to a Google Apps Script web-app URL and each question is
// appended to a Google Sheet (no names, emails or other identifiers are sent).
type Msg = { from: 'bot' | 'me'; text: string; links?: { label: string; href: string }[]; agent?: boolean; meet?: boolean; fresh?: boolean }
type QA = { q: string; a: string; h?: string; k?: string; x?: string; p?: number }

const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/message/TM3WC6DUJAFEK1', bg: '#25D366' },
  { id: 'messenger', label: 'Messenger', href: 'https://m.me/haliviq', bg: 'linear-gradient(135deg,#00B2FF,#7A5CFF 60%,#FF5CA8)' },
  { id: 'line', label: 'LINE', href: 'https://lin.ee/zyTrkx4', bg: '#06C755' },
] as const

const MEET_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE'
const MEET_WANT = /(นัด|จอง)\s*(ประชุม|คุย|โทร|ปรึกษา|ออนไลน์|วิดีโอ|วีดีโอ)|ประชุมออนไลน์|วิดีโอคอล|วีดีโอคอล|google\s*meet|gmeet|video\s*(call|meeting)|(book|schedule|set up|arrange)\s*(a|an|the)?\s*(call|meeting|appointment|consultation|demo)|online\s*meeting/i

function MeetIcon() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="13" height="14" rx="3.5" fill="#FFD414" /><path d="M16 10.2l5.2-3.6c.5-.3 1.1 0 1.1.6v9.6c0 .6-.6.9-1.1.6L16 13.800z" fill="#F9AB00" /><circle cx="5.600" cy="16" r="1.500" fill="#fff" /></svg>)
}

function ChannelIcon({ id }: { id: string }) {
  if (id === 'whatsapp')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 8.5c.3 3.2 2.9 5.8 6 6.2l1.2-1.4-2-1-.9.7a4 4 0 01-1.9-1.9l.7-.9-1-2z" fill="#fff" /></svg>)
  if (id === 'messenger')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.7.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z" fill="#fff" /><path d="M6.6 13.8l3.2-4.4 2.4 2 3.1-2-3.3 4.5-2.4-2z" fill="#7A5CFF" /></svg>)
  return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.8 3 3 6.3 3 10.4c0 3.6 3.2 6.6 7.5 7.2.3.1.7.2.8.5l-.1 1.3c0 .4-.3 1.3 1.1.7s7.4-4.400 7.4-8.700C19.700 6.300 17.500 3 12 3z" fill="#fff" /><text x="12" y="12.600" textAnchor="middle" fontSize="5.200" fontWeight="800" fill="#06C755" fontFamily="Arial,sans-serif">LINE</text></svg>)
}

// Phrases that mean "let me talk to a person". Single words like "agent" or "support" alone are NOT enough,
// because visitors also ask about "AI agents" or "support after launch".
const AGENT_STRONG = /เจ้าหน้าที่|แอดมิน|คนจริง|มนุษย์|ลูกค้าสัมพันธ์|พนักงานขาย|ขอคุยกับคน|live\s*(agent|chat)|human\s+(agent|being|support)|real\s*(person|human)|customer\s*(service|care)|representative|operator|livechat/i
const AGENT_SOFT = /(คุย|ติดต่อ|ขอสาย|โอนสาย|ต่อสาย|ขอพูด|พูดคุย|ปรึกษา|สอบถาม|ทัก|แชท|chat|talk|speak|connect|contact|reach|transfer|message)\s*((กับ|ถึง|หา|with|to|a|an|the|your|me|us)\s*)*(ทีมงาน|ทีม|พนักงาน|คน|ฝ่ายขาย|ฝ่ายซัพพอร์ต|ซัพพอร์ต|เซลส์|ผู้เชี่ยวชาญ|admin|sales|team|staff|someone|somebody|person|people|support|agent|human|rep|expert)/i
// Questions about the bot itself ("who are you", "are you a robot", "ชื่ออะไร", "น้องฮาวี่"...)
const ASKS_IDENTITY = /who\s+are\s+you|what(?:'s|\s+is)?\s+your\s+name|your\s+name|are\s+you\s+(?:a\s+|an\s+)?(?:bot|robot|ai|human|real|person|machine)|\bhavy\b|คุณคือใคร|เธอคือใคร|เป็นใคร|ชื่ออะไร|ชื่อว่าอะไร|น้องฮาวี่|ฮาวี่|เป็นคนหรือ|เป็นบอท|เป็นหุ่นยนต์|คนจริงหรือเปล่า|คนจริงไหม/i
const wantsAgent = (q: string) => q.length < 80 && (AGENT_STRONG.test(q) || AGENT_SOFT.test(q))

const EN_STOP = new Set('a an the and or of to in on for with at by from is are was were be been do does did can could will would should you your we our us i me my it its this that these those what which who how why when where about tell please any there have has had not no yes get got give need want like'.split(' '))
const TH_STOP = /ไหม|ได้|อะไร|คือ|หรือ|ยังไง|อย่างไร|บ้าง|ของ|ครับ|ค่ะ|คะ|นะ|ที่|มี|เป็น|ให้|และ|กับ|ใน|จะ|แล้ว|ด้วย|ช่วย|ขอ|อยาก|ต้องการ/g
// English: whole words. Thai (no spaces): character bigrams. Common filler words are dropped so they never decide a match.
// Pages the bot can point to. A question that mentions one of these topics gets a link to the page,
// even when no written answer matches well (a typo in Thai still finds the page through a bigram check).
type Route = { p: string; th: string; en: string; k: string }
const ROUTES: Route[] = [
  { p: 'industries', th: 'อุตสาหกรรมที่เราทำงานด้วย', en: 'Industries we serve', k: 'อุตสาหกรรม industry industries ภาคธุรกิจ' },
  { p: 'industries/fintech', th: 'ฟินเทค การเงิน', en: 'Fintech', k: 'ฟินเทค การเงิน ธนาคาร ประกัน fintech banking insurance payment' },
  { p: 'industries/healthcare', th: 'สุขภาพ การแพทย์', en: 'Healthcare', k: 'สุขภาพ โรงพยาบาล การแพทย์ คลินิก healthcare hospital medical clinic' },
  { p: 'industries/retail', th: 'ค้าปลีก', en: 'Retail', k: 'ค้าปลีก ร้านค้า retail shop store' },
  { p: 'industries/manufacturing', th: 'การผลิต โรงงาน', en: 'Manufacturing', k: 'โรงงาน การผลิต manufacturing factory' },
  { p: 'industries/logistics', th: 'โลจิสติกส์', en: 'Logistics', k: 'โลจิสติกส์ ขนส่ง คลังสินค้า logistics shipping warehouse' },
  { p: 'industries/education', th: 'การศึกษา', en: 'Education', k: 'การศึกษา โรงเรียน มหาวิทยาลัย education school university' },
  { p: 'industries/government', th: 'ภาครัฐ', en: 'Government', k: 'ภาครัฐ หน่วยงานรัฐ ราชการ government public sector' },
  { p: 'industries/real-estate', th: 'อสังหาริมทรัพย์', en: 'Real estate', k: 'อสังหาริมทรัพย์ อสังหา คอนโด real estate property' },
  { p: 'industries/automotive', th: 'ยานยนต์', en: 'Automotive', k: 'ยานยนต์ รถยนต์ automotive car vehicle' },
  { p: 'industries/energy-utilities', th: 'พลังงาน สาธารณูปโภค', en: 'Energy & utilities', k: 'พลังงาน สาธารณูปโภค energy utilities' },
  { p: 'industries/telecommunications', th: 'โทรคมนาคม', en: 'Telecommunications', k: 'โทรคมนาคม telecom telecommunications' },
  { p: 'industries/hospitality-travel', th: 'ท่องเที่ยว โรงแรม', en: 'Hospitality & travel', k: 'ท่องเที่ยว โรงแรม ที่พัก hospitality travel hotel tourism' },
  { p: 'industries/media-entertainment', th: 'สื่อและบันเทิง', en: 'Media & entertainment', k: 'สื่อ บันเทิง media entertainment' },
  { p: 'industries/agriculture', th: 'เกษตร', en: 'Agriculture', k: 'เกษตร ฟาร์ม agriculture farm' },
  { p: 'industries/consumer-goods', th: 'สินค้าอุปโภคบริโภค', en: 'Consumer goods', k: 'สินค้าอุปโภค บริโภค consumer goods fmcg' },
  { p: 'industries/professional-services', th: 'บริการวิชาชีพ', en: 'Professional services', k: 'บริการวิชาชีพ ที่ปรึกษา สำนักงานกฎหมาย professional services consulting law firm' },
  { p: 'industries/technology', th: 'เทคโนโลยี ซอฟต์แวร์', en: 'Technology', k: 'สตาร์ทอัป startup saas technology company' },
  { p: 'industries/aerospace-defense', th: 'การบินและกลาโหม', en: 'Aerospace & defense', k: 'การบิน กลาโหม aerospace defense' },
  { p: 'services', th: 'บริการทั้งหมด', en: 'All services', k: 'บริการ services' },
  { p: 'services/web-mobile', th: 'เว็บและแอปมือถือ', en: 'Web & mobile apps', k: 'ทำเว็บ เว็บไซต์ แอปมือถือ แอปพลิเคชัน website mobile app ios android' },
  { p: 'services/web-development', th: 'พัฒนาเว็บ', en: 'Web development', k: 'พัฒนาเว็บ เว็บแอป web development web app' },
  { p: 'services/ecommerce', th: 'อีคอมเมิร์ซ', en: 'E-commerce', k: 'อีคอมเมิร์ซ ร้านออนไลน์ ขายของออนไลน์ ecommerce e-commerce online store' },
  { p: 'services/ux-ui-design', th: 'ออกแบบ UX/UI', en: 'UX/UI design', k: 'ออกแบบ ux ui ดีไซน์ design' },
  { p: 'services/user-research', th: 'วิจัยผู้ใช้', en: 'User research', k: 'วิจัยผู้ใช้ user research สัมภาษณ์ผู้ใช้' },
  { p: 'services/design-systems', th: 'Design System', en: 'Design systems', k: 'design system ดีไซน์ซิสเต็ม component' },
  { p: 'services/brand-experience', th: 'แบรนด์', en: 'Brand experience', k: 'แบรนด์ โลโก้ branding brand logo' },
  { p: 'services/product-discovery', th: 'Product Discovery', en: 'Product discovery', k: 'product discovery ค้นหาโจทย์ ไอเดียผลิตภัณฑ์' },
  { p: 'services/rapid-prototyping', th: 'ต้นแบบ Prototype', en: 'Rapid prototyping', k: 'ต้นแบบ prototype prototyping mvp' },
  { p: 'services/ai', th: 'AI ปัญญาประดิษฐ์', en: 'AI', k: 'ปัญญาประดิษฐ์ เอไอ ai chatbot แชตบอท llm machine learning' },
  { p: 'services/ai-voice-agents', th: 'AI Voice Agent', en: 'AI voice agents', k: 'voice agent เสียง โทรอัตโนมัติ ตอบโทรศัพท์ voice ai call center' },
  { p: 'services/automation', th: 'ระบบอัตโนมัติ', en: 'Automation', k: 'อัตโนมัติ ออโตเมชัน automation workflow rpa' },
  { p: 'services/data-analytics', th: 'ข้อมูลและ Analytics', en: 'Data & analytics', k: 'ข้อมูล วิเคราะห์ dashboard แดชบอร์ด data analytics bi' },
  { p: 'services/cloud-devops', th: 'Cloud และ DevOps', en: 'Cloud & DevOps', k: 'คลาวด์ cloud devops aws azure gcp' },
  { p: 'services/cloud-services-migration', th: 'ย้ายขึ้นคลาวด์', en: 'Cloud migration', k: 'ย้ายขึ้นคลาวด์ cloud migration migrate' },
  { p: 'services/cybersecurity', th: 'ความปลอดภัยไซเบอร์', en: 'Cybersecurity', k: 'ความปลอดภัย ไซเบอร์ แฮก cybersecurity security pentest' },
  { p: 'services/pdpa-compliance', th: 'PDPA', en: 'PDPA compliance', k: 'pdpa ข้อมูลส่วนบุคคล compliance privacy' },
  { p: 'services/erp-crm', th: 'ERP / CRM', en: 'ERP / CRM', k: 'erp crm ระบบบริหาร odoo sap' },
  { p: 'services/enterprise-solutions', th: 'ระบบองค์กร', en: 'Enterprise solutions', k: 'ระบบองค์กร enterprise solutions' },
  { p: 'services/backend-api', th: 'Backend และ API', en: 'Backend & API', k: 'backend api เชื่อมระบบ integration หลังบ้าน' },
  { p: 'services/application-modernization', th: 'ปรับปรุงระบบเก่า', en: 'Application modernization', k: 'ระบบเก่า legacy modernization ปรับปรุงระบบ' },
  { p: 'services/digital-transformation', th: 'Digital Transformation', en: 'Digital transformation', k: 'ดิจิทัลทรานส์ฟอร์เมชัน digital transformation ปรับองค์กร' },
  { p: 'services/line-mini-apps', th: 'LINE Mini App', en: 'LINE Mini Apps', k: 'line mini app ไลน์ มินิแอป line oa' },
  { p: 'services/qa-testing', th: 'ทดสอบซอฟต์แวร์', en: 'QA & testing', k: 'ทดสอบ เทสต์ qa testing quality' },
  { p: 'services/support-maintenance', th: 'ดูแลระบบหลังส่งมอบ', en: 'Support & maintenance', k: 'ดูแลระบบ ซัพพอร์ต บำรุงรักษา support maintenance' },
  { p: 'services/seo-aeo-geo', th: 'SEO · AEO · GEO', en: 'SEO, AEO & GEO', k: 'seo aeo geo ติดอันดับ google เสิร์ชเอนจิน ค้นหา ติดหน้าแรก chatgpt perplexity gemini ai search search engine ranking' },
  { p: 'services/growth-strategy', th: 'กลยุทธ์การเติบโต', en: 'Growth strategy', k: 'กลยุทธ์ การตลาด เติบโต growth strategy marketing' },
  { p: 'services/forward-deployed-engineering', th: 'วิศวกรประจำทีมลูกค้า', en: 'Forward-deployed engineering', k: 'วิศวกรประจำ forward deployed engineering embedded' },
  { p: 'services/finish-your-vibe-coded-app', th: 'ต่อยอดแอปที่ใช้ AI เขียน', en: 'Finish your vibe-coded app', k: 'vibe coding vibe-coded cursor lovable bolt แอปที่ใช้ ai เขียน' },
  { p: 'case-studies', th: 'ผลงานและเคสลูกค้า', en: 'Case studies', k: 'ผลงาน เคส ตัวอย่างงาน portfolio case study case studies' },
  { p: 'blog', th: 'บทความ', en: 'Blog', k: 'บทความ บล็อก blog article' },
  { p: 'careers', th: 'ร่วมงานกับเรา', en: 'Careers', k: 'สมัครงาน ร่วมงาน ตำแหน่งงาน รับสมัคร career careers job hiring' },
  { p: 'about', th: 'เกี่ยวกับเรา', en: 'About us', k: 'เกี่ยวกับ ทีมงาน ประวัติบริษัท founder who-are-you' },
  { p: 'partners', th: 'พาร์ทเนอร์', en: 'Partners', k: 'พาร์ทเนอร์ พันธมิตร partner partners' },
  { p: 'contact', th: 'ติดต่อเรา', en: 'Contact', k: 'ติดต่อ ขอใบเสนอราคา ราคา quote contact pricing' },
  { p: 'privacy', th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy policy', k: 'นโยบายความเป็นส่วนตัว privacy policy' },
]
const SHORT_OK = new Set(['ai','ux','ui','erp','crm','api','qa','seo','mvp','rpa','aws','gcp','bi','pdpa'])
const bigrams = (s: string) => { const o = new Set<string>(); const c = Array.from(s.replace(/\s+/g, '')); for (let i = 0; i < c.length - 1; i++) o.add(c[i] + c[i + 1]); return o }
const routeLinks = (q: string, lang: string, skip: string[] = [], max = 3): { label: string; href: string }[] => {
  const ql = q.toLowerCase()
  const qb = bigrams(ql)
  const scored: { r: Route; s: number }[] = []
  ROUTES.forEach((r) => {
    let best = 0
    r.k.split(' ').forEach((w) => {
      if (!w) return
      const thai = /[฀-๿]/.test(w)
      if (!thai && w.length < 4 && !SHORT_OK.has(w)) return // tiny English words like "do" or "you" must not match anything
      if (!thai && w.length <= 3 ? new RegExp('(^|[^a-z])' + w.replace(/[^a-z0-9]/g, '') + '([^a-z]|$)').test(ql) : ql.includes(w)) { best = Math.max(best, 1 + w.length / 100); return }
      if (thai && w.length >= 5) { // tolerate a typo: most of the word's letter pairs appear in the question
        const wb = bigrams(w); let hit = 0; wb.forEach((b) => { if (qb.has(b)) hit++ })
        const cov = hit / wb.size
        if (cov >= 0.5 && hit >= 4) best = Math.max(best, cov * 0.9)
      }
    })
    if (best > 0) scored.push({ r, s: best })
  })
  scored.sort((a, b) => b.s - a.s)
  const out: { label: string; href: string }[] = []
  for (const { r } of scored) {
    const href = `/${lang}/${r.p}`
    if (skip.includes(href) || out.some((o) => o.href === href)) continue
    out.push({ label: lang === 'en' ? r.en : r.th, href })
    if (out.length >= max) break
  }
  return out
}

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

// The robot mascot, in the site colours. Pure SVG + CSS, no image files.
function Mascot() {
  return (
    <span className="chat-mascot" aria-hidden="true">
      <svg viewBox="0 0 160 176" className="chat-robot-svg">
        <defs>
          <linearGradient id="hv-head" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EEEBFF" />
            <stop offset="0.55" stopColor="#C9C2FB" />
            <stop offset="1" stopColor="#A89DF5" />
          </linearGradient>
        </defs>
        <ellipse className="hv-shadow" cx="80" cy="166" rx="34" ry="6" fill="#7B6EF6" fillOpacity="0.28" style={{ transformOrigin: '80px 166px' }} />
        <g className="hv-float">
          <g className="hv-ant" style={{ transformOrigin: '80px 44px' }}>
            <rect x="77" y="20" width="6" height="26" rx="3" fill="#8F86DA" />
            <circle className="hv-ball" cx="80" cy="17" r="10" fill="#7B6EF6" />
          </g>
          <path d="M40 66Q80 28 120 66Z" fill="#8F86DA" />
          <circle cx="80" cy="92" r="47" fill="url(#hv-head)" />
          <rect x="37" y="66" width="86" height="46" rx="23" fill="#141329" stroke="#8F86DA" strokeWidth="5" />
          <g className="hv-blink" style={{ transformOrigin: '80px 88px' }}>
            <path d="M52 90a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M88 90a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="5.5" strokeLinecap="round" />
          </g>
          <g className="hv-phone" style={{ transformOrigin: '76px 112px' }}>
            <rect x="62" y="94" width="28" height="42" rx="7" fill="#231F52" transform="rotate(-3 76 115)" />
            <circle cx="82" cy="102" r="3.2" fill="#53C3D7" />
          </g>
          <g className="hv-hand-l">
            <circle cx="57" cy="119" r="11" fill="#9187E0" transform="translate(3 4)" />
            <circle cx="57" cy="119" r="11" fill="#DCD7FD" />
          </g>
          <g className="hv-hand-r">
            <circle cx="98" cy="130" r="11" fill="#9187E0" transform="translate(3 4)" />
            <circle cx="98" cy="130" r="11" fill="#DCD7FD" />
          </g>
        </g>
      </svg>
    </span>
  )
}

// Bot replies "type" themselves in, then the links / buttons fade in underneath.
function BotBubble({ text, fresh, onTick, children }: { text: string; fresh?: boolean; onTick: () => void; children?: React.ReactNode }) {
  const chars = useMemo(() => Array.from(text), [text])
  const [n, setN] = useState(fresh ? 0 : chars.length)
  useEffect(() => {
    if (!fresh) { setN(chars.length); return }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(chars.length); return }
    setN(0)
    const step = Math.max(1, Math.ceil(chars.length / 110))
    const id = setInterval(() => {
      setN((v) => {
        const next = Math.min(chars.length, v + step)
        if (next >= chars.length) clearInterval(id)
        return next
      })
      onTick()
    }, 22)
    return () => clearInterval(id)
  }, [chars, fresh]) // eslint-disable-line react-hooks/exhaustive-deps
  const done = n >= chars.length
  return (
    <>
      <div className="px-3.5 py-2 text-[13px] rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', borderTopLeftRadius: 6, lineHeight: 1.6 }}>
        {chars.slice(0, n).join('')}{!done && <span className="chat-caret" aria-hidden="true" />}
      </div>
      {done && <div className="chat-fade" ref={(el) => { if (el) onTick() }}>{children}</div>}
    </>
  )
}

// Plain greetings / thanks / goodbyes. These have no topic words, so they used to fall through to "I am not sure".
const GREETING = /^\s*(hi+|hello+|hey+|yo|good\s*(morning|afternoon|evening)|greetings|สวัสดี[\u0e00-\u0e7f]*|หวัดดี[\u0e00-\u0e7f]*|ดีครับ|ดีค่ะ|ดีจ้า|ดี|เฮ้|ฮัลโหล|hola)[\s!.,?ฯ~]*$/i
const THANKS = /^\s*(thanks?|thank you|thx|ty|ขอบคุณ[\u0e00-\u0e7f]*|ขอบใจ|แต๊งค์|ขอบพระคุณ)[\s!.,?ฯ~]*$/i
const BYE = /^\s*(bye+|goodbye|see you|ลาก่อน|บาย|แล้วเจอกัน)[\s!.,?ฯ~]*$/i

// Light small talk, so the bot feels conversational before the question gets to business.
const SMALLTALK: { re: RegExp; en: string; th: string }[] = [
  { re: /^\s*(แนะนำ(หน่อย|ที|หน่อยได้ไหม|ได้ไหม)?|ช่วยแนะนำ(หน่อย)?|recommend( something)?|any (recommendations|suggestions)|suggest( something)?|what do you recommend)[\s!.,?ฯ~]*$/i,
    en: 'Sure! What would you like a recommendation for? For example a service for your business, the right package for your budget, or where to start with an app built with AI.',
    th: 'ได้เลยครับ อยากให้แนะนำเรื่องอะไรดีครับ เช่น บริการที่เหมาะกับธุรกิจ แพ็กเกจตามงบประมาณ หรือเริ่มต้นแก้แอปที่ทำด้วย AI ยังไงดี บอกได้เลยครับ' },
  { re: /(how are you|how'?s it going|what'?s up|sup\b|สบายดี(ไหม|มั้ย|หรือเปล่า)?|เป็นไงบ้าง|เป็นยังไงบ้าง|ทำอะไรอยู่)/i,
    en: 'I am doing great, thanks for asking! What would you like to know about Haliviq?',
    th: 'สบายดีครับ ขอบคุณที่ถามนะครับ แล้วคุณล่ะครับ วันนี้อยากรู้เรื่องอะไรของ Haliviq ไหมครับ' },
  { re: /(what can you do|how can you help|can you help|help me|ทำอะไรได้บ้าง|ช่วยอะไรได้บ้าง|ช่วยอะไรได้|ช่วยหน่อย|ช่วยได้ไหม)/i,
    en: 'I can tell you about our services, pricing, timelines and technology, point you to the right page, or connect you with the team. Try something like "how much does it cost" or "can you fix my Lovable app".',
    th: 'ผมช่วยตอบเรื่องบริการ ราคา ระยะเวลา เทคโนโลยี พาไปหน้าที่เกี่ยวข้อง หรือต่อสายให้ทีมงานได้ครับ ลองถามว่า "ราคาเท่าไหร่" หรือ "รับแก้แอปที่ทำด้วย AI ไหม" ก็ได้ครับ' },
  { re: /(nice to meet|pleased to meet|ยินดีที่ได้รู้จัก|ยินดีที่รู้จัก)/i,
    en: 'Nice to meet you too! I am Havy. What brings you to Haliviq today?',
    th: 'ยินดีที่ได้รู้จักเช่นกันครับ ผมน้องฮาวี่ วันนี้สนใจบริการด้านไหนของ Haliviq ครับ' },
  { re: /(who (made|built|created) you|ใครสร้าง|ใครทำคุณ|ใครเป็นคนทำ)/i,
    en: 'The Haliviq team built me to answer questions about the company. For anything beyond that, a real person on the team will reply within 24 hours.',
    th: 'ทีมงาน Haliviq สร้างผมขึ้นมาเพื่อตอบคำถามเกี่ยวกับบริษัทครับ ถ้าเรื่องไหนเกินกว่านั้น ทีมงานตัวจริงตอบกลับภายใน 24 ชั่วโมงครับ' },
  { re: /(are you (a )?(real|human|bot|robot|ai)|คุณ(เป็น)?คนจริง|เป็นคนหรือบอท|เป็นบอทหรือ)/i,
    en: 'I am Havy, an automated assistant, not a person. If you would like a real person, just say "chat with an agent".',
    th: 'ผมน้องฮาวี่ เป็นผู้ช่วยอัตโนมัติ ไม่ใช่คนจริงครับ ถ้าอยากคุยกับคน พิมพ์ว่า "คุยกับเจ้าหน้าที่" ได้เลยครับ' },
  { re: /(i am|i'?m|my name is|ผมชื่อ|ฉันชื่อ|หนูชื่อ|เราชื่อ)\s*\S{1,20}\s*$/i,
    en: 'Nice to meet you! What can I help you with today?',
    th: 'ยินดีที่ได้รู้จักครับ วันนี้ให้ผมช่วยอะไรดีครับ' },
]

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
  // keep the panel mounted for a moment after closing so it can fade out
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (open) { setMounted(true); return }
    const id = setTimeout(() => setMounted(false), 220)
    return () => clearTimeout(id)
  }, [open])
  const [text, setText] = useState('')
  const hello = isEN
    ? 'Hello! I am Havy, the assistant of Haliviq. I can help with our services, technology, timelines, pricing or how to start a project. Ask me anything, or pick a question below.'
    : 'สวัสดีครับ ผมชื่อน้องฮาวี่ เป็นผู้ช่วยของบริษัท Haliviq ครับ ช่วยตอบเรื่องบริการ เทคโนโลยี ระยะเวลา ราคา หรือวิธีเริ่มโปรเจกต์ได้เลย พิมพ์ถามได้เลย หรือเลือกคำถามด้านล่างครับ'
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: hello }])
  const end = useRef<HTMLDivElement>(null)

  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [msgs, open])
  useEffect(() => { setKb([]) }, [lang]) // drop the other language's knowledge base when the page language changes
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

  const answer = (q: string): { text: string; links?: Msg['links']; idx: number; agent?: boolean } => {
    if (q.length < 60 && ASKS_IDENTITY.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'I am Havy, the assistant robot of Haliviq. I am an automated bot, not a person. I answer from the information on this website, and if you would like a real person, just say "chat with an agent" and I will connect you with the team.'
          : 'ผมน้องฮาวี่ (Havy) หุ่นยนต์ผู้ช่วยของ Haliviq ครับ ผมเป็นบอทอัตโนมัติ ไม่ใช่คนจริง ผมตอบจากข้อมูลในเว็บไซต์นี้ ถ้าอยากคุยกับคน พิมพ์ว่า "คุยกับเจ้าหน้าที่" แล้วผมจะต่อให้ทีมงานครับ',
      }
    }
    if (q.length < 40 && GREETING.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Hello! I am Havy, the assistant of Haliviq. How can I help? You can ask about our services, pricing, timelines or how to start a project.'
          : 'สวัสดีครับ ผมชื่อน้องฮาวี่ เป็นผู้ช่วยของบริษัท Haliviq ครับ มีอะไรให้ช่วยไหมครับ ถามเรื่องบริการ ราคา ระยะเวลา หรือวิธีเริ่มโปรเจกต์ได้เลยครับ',
      }
    }
    if (q.length < 40 && THANKS.test(q)) {
      return { idx: -1, text: isEN ? 'You are welcome! Anything else I can help with?' : 'ยินดีครับ มีอะไรให้ช่วยอีกไหมครับ' }
    }
    if (q.length < 40 && BYE.test(q)) {
      return { idx: -1, text: isEN ? 'Goodbye! Come back any time, or reach the team on the contact page.' : 'แล้วพบกันครับ ถ้ามีคำถามเพิ่มเติม กลับมาถามได้ตลอด หรือติดต่อทีมงานผ่านหน้าติดต่อเราได้ครับ' }
    }
    if (q.length < 50) {
      const st = SMALLTALK.find((x) => x.re.test(q))
      // "I am ..." must not swallow real questions like "I am looking for an ERP", so the name pattern only fires on very short text
      if (st && !(st === SMALLTALK[6] && q.length > 30)) return { idx: -1, text: isEN ? st.en : st.th }
    }
    const g = tokens(q)
    const ql = q.toLowerCase()
    let qtotal = 0
    g.forEach((x) => { qtotal += idf.get(x) || maxIdf })
    let best = -1, bestScore = 0
    index.forEach((e, i) => {
      let hit = 0, qhit = 0
      g.forEach((x) => { const w = idf.get(x) || 0; if (e.g.has(x)) hit += w; if (e.qg.has(x)) qhit += w })
      if (!hit) return
      if (g.size <= 1 && !e.it.p) return // a single bare word is too vague to match a niche answer
      const cov = qtotal ? hit / qtotal : 0
      const qcov = qtotal ? qhit / qtotal : 0
      const kw = e.kl.length > 2 && ql.includes(e.kl) ? 0.12 : 0
      const score = cov * 0.7 + qcov * 0.3 + kw + (e.it.p ? 0.1 : 0)
      if (score > bestScore) { bestScore = score; best = i }
    })
    if (best >= 0 && bestScore >= 0.5) {
      const h = items[best].h
      // Contact-type answers (how to reach us, office, NDA, how to start...) also offer the three chat buttons.
      if (h && h.endsWith('/contact') && items[best].k !== 'faq') {
        return { text: items[best].a, idx: best, agent: true, links: [{ label: isEN ? 'Contact page' : 'ไปหน้าติดต่อเรา', href: h }] }
      }
      const main = h && !h.endsWith('/contact') ? [{ label: isEN ? 'Read more' : 'ดูรายละเอียด', href: h }] : [{ label: isEN ? 'See our work' : 'ดูผลงานของเรา', href: `/${lang}/work` }]
      return { text: items[best].a, idx: best, links: [...main, ...routeLinks(q, lang, [main[0].href, `/${lang}/contact`], 2)].slice(0, 3) }
    }
    const rl = routeLinks(q, lang, [`/${lang}/contact`], 2)
    return {
      idx: -1,
      text: rl.length
        ? (isEN ? 'I do not have a written answer for that, but these pages cover it. For anything specific the team replies within 24 hours.' : 'เรื่องนี้ผมยังไม่มีคำตอบเป็นข้อความ แต่หน้าเหล่านี้น่าจะตอบได้ครับ ถ้าอยากคุยเรื่องเฉพาะ ทีมงานตอบกลับภายใน 24 ชั่วโมง')
        : isEN
        ? 'I am not sure I have a good answer for that one. The team can reply within 24 hours, so please tell us about your project.'
        : 'เรื่องนี้ผมยังตอบได้ไม่ชัดเจน ทีมงานตอบกลับภายใน 24 ชั่วโมง เล่าเรื่องโปรเจกต์ของคุณให้ทีมฟังได้เลยครับ',
      links: [...rl, { label: isEN ? 'Contact the team' : 'ติดต่อทีมงาน', href: `/${lang}/contact` }],
    }
  }

  const ask = (q: string) => {
    const clean = q.trim()
    if (!clean) return
    if (clean.length < 80 && MEET_WANT.test(clean)) {
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, meet: true, text: isEN ? 'Happy to set up a free online meeting. Pick a time that suits you and a Google Meet link is sent to you by email.' : 'ยินดีนัดประชุมออนไลน์ให้ฟรีครับ เลือกเวลาที่สะดวกได้เลย แล้วระบบจะส่งลิงก์ Google Meet ให้ทางอีเมล' }])
      setText('')
      log(clean, -1)
      return
    }
    if (wantsAgent(clean) && !(clean.length < 60 && ASKS_IDENTITY.test(clean))) {
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, agent: true, text: isEN ? 'Happy to connect you with the team. Pick the app you like and we will reply there, or book an online meeting.' : 'ยินดีต่อสายให้คุยกับทีมงานครับ เลือกแอปที่สะดวก หรือนัดประชุมออนไลน์ แล้วทีมจะตอบกลับทางนั้นครับ' }])
      setText('')
      log(clean, -1)
      return
    }
    const r = answer(clean)
    setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, text: r.text, links: r.links, agent: r.agent }])
    setText('')
    log(clean, r.idx)
  }

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[90] flex flex-col items-end" style={{ fontFamily: 'inherit' }}>
      {mounted && (
        <div
          role="dialog"
          aria-label={isEN ? 'Havy, Haliviq assistant' : 'น้องฮาวี่ ผู้ช่วย Haliviq'}
          className={`chat-panel ${open ? 'chat-in' : 'chat-out'} mb-3 flex flex-col overflow-hidden rounded-3xl`}
          style={{ border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 30px 70px -20px rgba(60,50,160,0.45)' }}
        >
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff' }}>
            <span className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'rgba(255,255,255,0.22)' }} aria-hidden="true">
              <svg viewBox="30 48 100 100" width="34" height="34">
                <circle cx="80" cy="96" r="47" fill="#EEEBFF" />
                <rect x="37" y="70" width="86" height="46" rx="23" fill="#141329" stroke="#8F86DA" strokeWidth="5" />
                <path d="M52 94a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="6" strokeLinecap="round" />
                <path d="M88 94a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex-1 leading-tight">
              <p style={{ fontWeight: 600 }}>{isEN ? 'Havy' : 'น้องฮาวี่'}</p>
              <p className="text-xs" style={{ opacity: 0.9 }}>{isEN ? 'Haliviq Assistant · replies instantly' : 'ผู้ช่วย Haliviq · ตอบทันที'}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={isEN ? 'Close' : 'ปิด'} className="text-xl leading-none px-2" style={{ color: '#fff' }}>×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-3.5 py-3.5 flex flex-col gap-2.5" style={{ background: 'var(--bg)' }}>
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'me' ? 'self-end max-w-[85%]' : 'self-start max-w-[90%]'}>
                {m.from === 'me' ? (
                  <div className="px-3.5 py-2 text-[13px] rounded-2xl" style={{ background: 'linear-gradient(135deg, #7B6EF6, #5A4ED4)', color: '#fff', borderTopRightRadius: 6, lineHeight: 1.6 }}>{m.text}</div>
                ) : (
                  <BotBubble text={m.text} fresh={m.fresh} onTick={() => end.current?.scrollIntoView({ block: 'end' })}>
                {(m.agent || m.meet) && (
                  <div className="flex flex-col gap-2 mt-2">
                    {m.agent && CHANNELS.map((c) => (
                      <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-[13px]" style={{ background: c.bg, color: '#fff', fontWeight: 600 }}>
                        <ChannelIcon id={c.id} />{isEN ? `Chat on ${c.label}` : `คุยทาง ${c.label}`}
                      </a>
                    ))}
                    <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-[13px]" style={{ background: '#fff', color: '#1B1A2E', fontWeight: 600 }}>
                      <MeetIcon />{isEN ? 'Book a Google Meet call' : 'นัดประชุมออนไลน์ Google Meet'}
                    </a>
                  </div>
                )}
                {m.links && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-xs px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}>{l.label} →</Link>
                    ))}
                  </div>
                )}
                  </BotBubble>
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
              className="flex-1 px-3.5 py-2 rounded-full text-[13px] outline-none" style={{ background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', border: '1px solid rgb(var(--fg) / 0.1)' }} />
            <button type="submit" aria-label={isEN ? 'Send' : 'ส่ง'} className="w-9 h-9 rounded-full flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg, #7B6EF6, #53C3D7)', color: '#fff' }}>➤</button>
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
          aria-label={open ? (isEN ? 'Close chat' : 'ปิดแชท') : (isEN ? 'Ask Havy about our services' : 'ให้น้องฮาวี่ช่วยสอบถามบริการ')}
          aria-expanded={open}
          title={isEN ? 'Ask Havy about our services' : 'ให้น้องฮาวี่ช่วยสอบถามบริการ'}
          className="chat-mascot-btn"
        >
          {open ? (
            <span className="flex items-center justify-center w-14 h-14 rounded-full text-2xl" style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff', boxShadow: '0 14px 34px -10px rgba(90,78,212,0.7)' }} aria-hidden="true">×</span>
          ) : (
            <span className="flex items-center">
              <span className="flex flex-col items-center">
                <Mascot />
                <span className="chat-name">{isEN ? 'Havy' : 'น้องฮาวี่'}</span>
              </span>
              <span className="chat-pill">
                <span>{isEN ? 'Ask about our services' : 'สอบถามบริการ'}</span>
                <span className="chat-pill-dot" aria-hidden="true" />
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
