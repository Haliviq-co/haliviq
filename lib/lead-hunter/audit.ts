import { lookup } from 'dns/promises'
import net from 'net'
import type { Audit, AuditIssue, Severity } from './types'

/**
 * Fetches a company's home page and checks the things a prospect would notice:
 * HTTPS, speed, mobile, SEO basics, freshness, contact channels.
 * Only public http(s) hosts on ports 80/443 are fetched (no internal addresses).
 */

const UA = 'Mozilla/5.0 (compatible; HaliviqAudit/1.0; +https://www.haliviq.com)'
const MAX_BYTES = 1_500_000

function privateIp(ip: string): boolean {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number)
    return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127)
  }
  const x = ip.toLowerCase()
  if (x.startsWith('::ffff:')) return privateIp(x.slice(7))
  return x === '::' || x === '::1' || x.startsWith('fc') || x.startsWith('fd') || x.startsWith('fe80')
}

async function publicHost(host: string): Promise<boolean> {
  const h = host.replace(/^\[|\]$/g, '')
  if (net.isIP(h)) return !privateIp(h)
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return false
  try {
    const addrs = await lookup(h, { all: true })
    return addrs.length > 0 && addrs.every((a) => !privateIp(a.address))
  } catch {
    return false
  }
}

async function readCapped(r: Response, max: number) {
  if (!r.body) return { text: '', bytes: 0 }
  const reader = r.body.getReader()
  const chunks: Uint8Array[] = []
  let bytes = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    bytes += value.byteLength
    if (bytes >= max) { await reader.cancel().catch(() => {}); break }
  }
  const all = new Uint8Array(bytes)
  let o = 0
  for (const c of chunks) { all.set(c.subarray(0, Math.min(c.byteLength, bytes - o)), o); o += c.byteLength }
  return { text: new TextDecoder('utf-8', { fatal: false }).decode(all), bytes }
}

type Got = { url: string; status: number; body: string; bytes: number; ttfb: number; ms: number; length: number | null }

async function get(start: string, timeoutMs: number, maxBytes = MAX_BYTES): Promise<Got> {
  const t0 = Date.now()
  let current = start
  for (let hop = 0; hop < 6; hop++) {
    const u = new URL(current)
    if (u.protocol !== 'http:' && u.protocol !== 'https:') throw new Error('bad_protocol')
    if (u.port && u.port !== '80' && u.port !== '443') throw new Error('bad_port')
    if (!(await publicHost(u.hostname))) throw new Error('blocked_host')
    const ctl = new AbortController()
    const timer = setTimeout(() => ctl.abort(), Math.max(1000, timeoutMs - (Date.now() - t0)))
    try {
      const r = await fetch(current, { redirect: 'manual', signal: ctl.signal, cache: 'no-store', headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml,*/*;q=0.8', 'Accept-Language': 'th,en;q=0.8' } })
      const loc = r.headers.get('location')
      if (r.status >= 300 && r.status < 400 && loc) {
        await r.body?.cancel().catch(() => {})
        current = new URL(loc, current).toString()
        continue
      }
      const ttfb = Date.now() - t0
      const len = Number(r.headers.get('content-length'))
      const { text, bytes } = await readCapped(r, maxBytes)
      return { url: current, status: r.status, body: text, bytes, ttfb, ms: Date.now() - t0, length: Number.isFinite(len) && len > 0 ? len : null }
    } finally {
      clearTimeout(timer)
    }
  }
  throw new Error('too_many_redirects')
}

/* ---------- tiny HTML helpers (regex based; good enough for a first look) ---------- */

function attrs(tag: string): Record<string, string> {
  const out: Record<string, string> = {}
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g
  let m: RegExpExecArray | null
  while ((m = re.exec(tag))) out[m[1].toLowerCase()] = m[3] ?? m[4] ?? m[5] ?? ''
  return out
}
const tags = (html: string, name: string) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) || []
function meta(html: string, key: string): string {
  for (const t of tags(html, 'meta')) {
    const a = attrs(t)
    if ((a.name || a.property || '').toLowerCase() === key) return (a.content || '').trim()
  }
  return ''
}
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()

export function pageText(html: string, max = 1500): string {
  return decode(html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ').replace(/<[^>]+>/g, ' ')).slice(0, max)
}

function platformOf(html: string): string | undefined {
  const h = html.toLowerCase()
  if (h.includes('wp-content') || h.includes('wp-includes')) return 'WordPress'
  if (h.includes('static.wixstatic.com') || h.includes('wix.com')) return 'Wix'
  if (h.includes('cdn.shopify.com')) return 'Shopify'
  if (h.includes('squarespace')) return 'Squarespace'
  if (h.includes('webflow')) return 'Webflow'
  if (h.includes('weebly')) return 'Weebly'
  if (h.includes('readyplanet') || h.includes('ready planet')) return 'ReadyPlanet'
  if (h.includes('lnwshop')) return 'LnwShop'
  if (h.includes('joomla')) return 'Joomla'
  if (h.includes('__next_data__') || h.includes('/_next/')) return 'Next.js'
  if (h.includes('data-reactroot') || h.includes('id="root"')) return 'React'
  const gen = meta(html, 'generator')
  return gen ? gen.slice(0, 40) : undefined
}

const BAD_EMAIL = /\.(png|jpe?g|gif|webp|svg)$|example\.|sentry|wixpress|domain\.com|email\.com|yourdomain|mystunningwebsite|yoursite|company\.com/i

function contacts(html: string) {
  const emails = new Set<string>()
  for (const m of Array.from(html.matchAll(/mailto:([^"'?\s>]+)/gi))) emails.add(decodeURIComponent(m[1]).toLowerCase())
  for (const m of Array.from(pageText(html, 200_000).matchAll(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi))) emails.add(m[0].toLowerCase())
  const phones = new Set<string>()
  for (const m of Array.from(html.matchAll(/tel:([+\d\s().-]{6,20})/gi))) phones.add(m[1].trim())
  const socials = new Set<string>()
  for (const m of Array.from(html.matchAll(/https?:\/\/(?:www\.)?(line\.me|lin\.ee|facebook\.com|fb\.com|instagram\.com|tiktok\.com|linkedin\.com|youtube\.com)\/[^"'\s<>]*/gi))) socials.add(m[1].toLowerCase().replace('fb.com', 'facebook.com').replace('lin.ee', 'line.me'))
  return {
    emails: Array.from(emails).filter((e) => !BAD_EMAIL.test(e) && e.length < 80).slice(0, 5),
    phones: Array.from(phones).slice(0, 3),
    socials: Array.from(socials).slice(0, 8),
  }
}

/* ---------- the audit ---------- */

const issue = (k: string, sev: Severity, th: string, en: string): AuditIssue => ({ k, sev, th, en })
const PENALTY: Record<Severity, number> = { high: 15, med: 7, low: 3 }

export async function auditSite(domain: string): Promise<{ audit: Audit; text: string }> {
  const checkedAt = new Date().toISOString()
  let got: Got | null = null
  let lastErr = ''
  for (const start of [`https://${domain}/`, `https://www.${domain}/`, `http://${domain}/`]) {
    try { got = await get(start, 12_000); break } catch (e: any) { lastErr = e?.name === 'AbortError' ? 'timeout' : String(e?.message || e) }
  }

  if (!got) {
    return {
      text: '',
      audit: {
        ok: false, error: lastErr || 'unreachable', emails: [], phones: [], socials: [], health: 0, checkedAt,
        issues: [issue('down', 'high', 'เปิดเว็บไม่ได้ (เว็บล่ม โดเมนหมดอายุ หรือช้าเกินไป)', 'Website does not load (down, expired domain or too slow)')],
      },
    }
  }

  const html = got.body
  const lower = html.toLowerCase()
  const issues: AuditIssue[] = []
  const finalUrl = new URL(got.url)
  const https = finalUrl.protocol === 'https:'

  if (got.status >= 400) issues.push(issue('status', 'high', `หน้าเว็บตอบกลับด้วยข้อผิดพลาด ${got.status}`, `Home page returns HTTP ${got.status}`))
  if (!https) issues.push(issue('https', 'high', 'ไม่มี HTTPS (เบราว์เซอร์ขึ้นว่าไม่ปลอดภัย)', 'No HTTPS: browsers show "Not secure"'))

  if (got.ms > 6000) issues.push(issue('slow', 'high', `โหลดช้ามาก (${(got.ms / 1000).toFixed(1)} วินาที)`, `Very slow to load (${(got.ms / 1000).toFixed(1)}s)`))
  else if (got.ttfb > 2000 || got.ms > 3500) issues.push(issue('slow', 'med', `โหลดค่อนข้างช้า (${(got.ms / 1000).toFixed(1)} วินาที)`, `Slow to load (${(got.ms / 1000).toFixed(1)}s)`))
  const size = got.length || got.bytes
  if (size >= MAX_BYTES) issues.push(issue('heavy', 'med', 'หน้าแรกหนักมาก (HTML เกิน 1.5 MB)', 'Home page HTML is very heavy (over 1.5 MB)'))

  if (!meta(html, 'viewport')) issues.push(issue('mobile', 'high', 'ไม่รองรับมือถือ (ไม่มี viewport)', 'Not mobile friendly (no viewport tag)'))

  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '')).slice(0, 160)
  const description = meta(html, 'description').slice(0, 300)
  if (title.length < 10) issues.push(issue('title', 'med', 'ไม่มีชื่อหน้า (title) หรือสั้นเกินไป', 'Missing or very short page title'))
  if (!description) issues.push(issue('desc', 'med', 'ไม่มีคำอธิบายสำหรับ Google (meta description)', 'No meta description for Google'))

  const h1 = (lower.match(/<h1[\s>]/g) || []).length
  if (h1 === 0) issues.push(issue('h1', 'low', 'ไม่มีหัวข้อหลัก (H1)', 'No main heading (H1)'))

  const imgs = tags(html, 'img')
  const noAlt = imgs.filter((t) => !(attrs(t).alt || '').trim()).length
  if (imgs.length >= 4 && noAlt / imgs.length > 0.3) issues.push(issue('alt', 'low', `รูปภาพ ${noAlt}/${imgs.length} รูปไม่มีคำอธิบาย (alt)`, `${noAlt} of ${imgs.length} images have no alt text`))

  if (!meta(html, 'og:image')) issues.push(issue('og', 'low', 'แชร์ลิงก์ลง LINE/Facebook แล้วไม่มีรูปตัวอย่าง', 'No preview image when shared on social media'))
  if (!lower.includes('application/ld+json')) issues.push(issue('schema', 'low', 'ไม่มีข้อมูลโครงสร้าง (Schema) ให้ Google และ AI', 'No structured data (schema) for Google and AI search'))
  if (!/<html[^>]*\blang=/i.test(html)) issues.push(issue('lang', 'low', 'ไม่ได้ระบุภาษาของหน้าเว็บ', 'Page language is not declared'))

  const years = Array.from(html.matchAll(/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?((?:19|20)\d{2})/gi)).map((m) => Number(m[1]))
  const copyrightYear = years.length ? Math.max(...years) : undefined
  const thisYear = new Date().getFullYear()
  if (copyrightYear && copyrightYear < thisYear - 1) issues.push(issue('stale', 'med', `เว็บดูไม่ได้อัปเดต (ลิขสิทธิ์ปี ${copyrightYear})`, `Looks outdated (copyright ${copyrightYear})`))

  const jq = lower.match(/jquery[.-]?(?:min[.-])?(\d)\.(\d+)/)
  if (jq && Number(jq[1]) < 3) issues.push(issue('jquery', 'low', `ใช้ jQuery รุ่นเก่า (${jq[1]}.${jq[2]}) มีช่องโหว่ที่รู้กันแล้ว`, `Old jQuery ${jq[1]}.${jq[2]} with known vulnerabilities`))
  if (https && /\b(?:src|href)=["']http:\/\/(?!www\.w3\.org)/i.test(html.replace(/<a\b[^>]*>/gi, ''))) issues.push(issue('mixed', 'med', 'โหลดไฟล์ผ่าน http ปนในหน้า https (mixed content)', 'Mixed content: loads http files on an https page'))

  const hasAnalytics = /googletagmanager|gtag\(|google-analytics|fbq\(|clarity\.ms|plausible|umami/.test(lower)
  if (!hasAnalytics) issues.push(issue('analytics', 'low', 'ไม่มีระบบวัดผล (Google Analytics / Pixel)', 'No analytics or ad pixel installed'))

  const c = contacts(html)
  const hasForm = /<form\b/i.test(html)
  if (!c.emails.length && !c.phones.length && !hasForm && !c.socials.some((s) => s === 'line.me')) issues.push(issue('contact', 'med', 'หน้าแรกไม่มีช่องทางติดต่อที่กดได้ทันที', 'No clickable contact option on the home page'))

  const text = pageText(html, 200_000)
  if (text.length < 500) issues.push(issue('thin', 'low', 'เนื้อหาน้อยมาก Google และ AI เข้าใจธุรกิจได้ยาก', 'Very little text, hard for Google and AI to understand the business'))

  let hasSitemap = false
  try {
    const s = await get(`${finalUrl.origin}/sitemap.xml`, 5000, 20_000)
    hasSitemap = s.status === 200 && /<(urlset|sitemapindex)\b/i.test(s.body)
  } catch {}
  if (!hasSitemap) issues.push(issue('sitemap', 'low', 'ไม่มี sitemap.xml', 'No sitemap.xml'))

  const rank: Record<Severity, number> = { high: 0, med: 1, low: 2 }
  issues.sort((a, b) => rank[a.sev] - rank[b.sev])
  const health = Math.max(0, Math.min(100, 100 - issues.reduce((s, i) => s + PENALTY[i.sev], 0)))

  return {
    text: text.slice(0, 1500),
    audit: {
      ok: true, url: got.url, status: got.status, https, ttfbMs: got.ttfb, loadMs: got.ms, bytes: size,
      title, description, platform: platformOf(html), copyrightYear,
      emails: c.emails, phones: c.phones, socials: c.socials, hasForm, hasAnalytics, hasSitemap,
      health, issues, checkedAt,
    },
  }
}
