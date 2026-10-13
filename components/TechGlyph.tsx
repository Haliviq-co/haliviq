// Small inline icons for programming languages and frameworks. Drawn as simple marks (no icon font,
// no network request), so they always render. Items without a mark fall back to a Tabler icon.
import type React from 'react'
import { techIcon } from '@/lib/tech-icons'

const S = 20

function Badge({ bg, fg = '#fff', text, r = 4, size = 9 }: { bg: string; fg?: string; text: string; r?: number; size?: number }) {
  return (
    <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx={r} fill={bg} />
      <text x="12" y="16" textAnchor="middle" fontSize={size + 3} fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill={fg}>{text}</text>
    </svg>
  )
}


const BRANDS: Record<string, [string, string, string?]> = {
  'hono': ['#E36002', 'Hn'], 'adonisjs': ['#5A45FF', 'Ad'], 'adonis': ['#5A45FF', 'Ad'], 'express': ['#1F2937', 'Ex'], 'express.js': ['#1F2937', 'Ex'],
  'hapi': ['#F26D21', 'hapi'], 'koa': ['#33333D', 'Koa'], 'angular': ['#DD0031', 'A'], 'sveltekit': ['#FF3E00', 'SK'], '.net maui': ['#512BD4', '.NET'],
  'maui': ['#512BD4', 'MAUI'], 'dart': ['#0175C2', 'Dt'], 'c#': ['#68217A', 'C#'], 'flutter / dart': ['#02569B', 'Fl'], 'compose multiplatform': ['#4285F4', 'CM'],
  'aws': ['#232F3E', 'aws', '#FF9900'], 'azure': ['#0078D4', 'Az'], 'google cloud': ['#4285F4', 'GC'], 'docker': ['#2496ED', 'Dk'],
  'kubernetes': ['#326CE5', 'K8'], 'helm': ['#0F1689', 'He'], 'terraform': ['#7B42BC', 'Tf'], 'pulumi': ['#8A3391', 'Pu'],
  'redis': ['#DC382D', 'Rd'], 'graphql': ['#E10098', 'GQ'], 'figma': ['#1E1E1E', 'Fg', '#F24E1E'], 'figjam': ['#1E1E1E', 'FJ', '#A259FF'],
  'stripe': ['#635BFF', 'S'], 'vue': ['#41B883', 'V', '#35495E'], 'nuxt': ['#00DC82', 'N', '#003543'], 'svelte': ['#FF3E00', 'Sv'],
  'rust': ['#B7410E', 'Rs'], 'tensorflow': ['#FF6F00', 'TF'], 'firebase': ['#FFCA28', 'Fb', '#C2410C'], 'vercel': ['#000000', '▲'],
  'tailwind css': ['#06B6D4', 'Tw'], 'supabase': ['#3ECF8E', 'Sb', '#0B3B26'], 'openai': ['#10A37F', 'AI'], 'anthropic claude': ['#D97757', 'C'],
  'claude code': ['#D97757', 'C'], 'google gemini': ['#4285F4', 'G'], 'langchain': ['#1C3C3C', 'LC'], 'langgraph': ['#1C3C3C', 'LG'],
  'llamaindex': ['#7C3AED', 'LI'], 'hugging face': ['#FFD21E', 'HF', '#222'], 'kafka': ['#231F20', 'Kf'], 'apache kafka': ['#231F20', 'Kf'],
  'apache spark': ['#E25A1C', 'Sp'], 'airflow': ['#017CEE', 'Af'], 'databricks': ['#FF3621', 'Db'], 'snowflake': ['#29B5E8', 'Sn'],
  'bigquery': ['#4285F4', 'BQ'], 'datadog': ['#632CA6', 'Dd'], 'grafana': ['#F46800', 'Gf'], 'prometheus': ['#E6522C', 'Pm'],
  'sentry': ['#362D59', 'Se'], 'new relic': ['#008C99', 'NR'], 'pagerduty': ['#06AC38', 'PD'], 'opentelemetry': ['#425CC7', 'Ot'],
  'jest': ['#C21325', 'Je'], 'vitest': ['#6E9F18', 'Vt'], 'cypress': ['#17202C', 'Cy', '#69D3A7'], 'playwright': ['#2EAD33', 'Pw'],
  'selenium': ['#43B02A', 'Se'], 'postman': ['#FF6C37', 'Pm'], 'storybook': ['#FF4785', 'Sb'], 'browserstack': ['#F26B21', 'BS'],
  'nestjs': ['#E0234E', 'Ns'], 'fastify': ['#202020', 'Fy'], 'expo': ['#000020', 'Ex'], 'react native': ['#20232A', 'RN', '#61DAFB'],
  'electron': ['#2B2E3A', 'El', '#9FEAF9'], 'tauri': ['#24C8DB', 'Ta', '#10333A'], 'ionic + capacitor': ['#3880FF', 'Io'],
  'kotlin multiplatform': ['#7F52FF', 'K'], 'salesforce': ['#00A1E0', 'SF'], 'hubspot': ['#FF7A59', 'Hs'], 'sap': ['#0FAAFF', 'SAP'],
  'sap integration': ['#0FAAFF', 'SAP'], 'oracle': ['#C74634', 'Or'], 'microsoft dynamics': ['#002050', 'Dy'], 'odoo': ['#714B67', 'Od'],
  'power bi': ['#F2C811', 'BI', '#222'], 'tableau': ['#1F77B4', 'Tb'], 'twilio': ['#F22F46', 'Tw'], 'elasticsearch': ['#005571', 'ES', '#FED10A'],
  'algolia': ['#003DFF', 'Al'], 'timescaledb': ['#FDB515', 'TS', '#222'], 'mqtt': ['#660066', 'MQ'], 'webrtc': ['#333333', 'RTC', '#6FD3F5'],
  'websocket': ['#4B5563', 'WS'], 'webgl': ['#990000', 'GL'], 'livekit': ['#1F2937', 'LK'], 'elevenlabs': ['#111827', 'XI'], 'deepgram': ['#13EF93', 'Dg', '#0B3B26'],
  'medusa.js': ['#7C3AED', 'Me'], 'shopify apis': ['#95BF47', 'Sh', '#1F2A0A'], 'docusign api': ['#FFCC22', 'DS', '#222'], 'google maps api': ['#34A853', 'Maps'],
  'line messaging api': ['#06C755', 'LINE'], 'line login': ['#06C755', 'LINE'], 'line pay': ['#06C755', 'LINE'], 'line official account': ['#06C755', 'LINE'],
  'liff': ['#06C755', 'LIFF'], 'flex messages': ['#06C755', 'Flex'], 'rich menus': ['#06C755', 'Menu'], 'app store': ['#0D96F6', 'App'], 'google play': ['#01875F', 'Play'],
  'lovable': ['#E11D74', 'Lv'], 'bolt': ['#1F2937', '⚡'], 'replit': ['#F26207', 'Rp'], 'cursor': ['#111827', 'Cu'], 'v0': ['#000000', 'v0'],
  'vercel ai sdk': ['#000000', 'AI'], 'maze': ['#6C47FF', 'Mz'], 'usertesting': ['#2C2C54', 'UT'], 'principle': ['#FF6B6B', 'Pr'],
  'snyk': ['#4C4A73', 'Sk'], 'owasp zap': ['#00549E', 'ZAP'], 'vault': ['#000000', 'V', '#FFD814'], 'dbt': ['#FF694B', 'dbt'], 'pgvector': ['#336791', 'pgv'],
  'machine learning': ['#6D28D9', 'ML'], 'ai/ml': ['#6D28D9', 'AI'], 'computer vision': ['#0E7490', 'CV'], 'iot': ['#0F766E', 'IoT'], 'grpc': ['#244C5A', 'gRPC'],
}
function norm(k: string) { return k.replace(/\s+/g, ' ').trim() }

export default function TechGlyph({ name }: { name: string }) {
  const k = name.trim().toLowerCase()
  switch (k) {
    case 'html':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2l1.7 18.5L12 23l7.3-2.5L21 2z" fill="#E44D26" /><path d="M12 4v17.7l5.9-2 1.4-15.7z" fill="#F16529" /><text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">5</text></svg>
    case 'css':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2l1.7 18.5L12 23l7.3-2.5L21 2z" fill="#1572B6" /><path d="M12 4v17.7l5.9-2 1.4-15.7z" fill="#33A9DC" /><text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">3</text></svg>
    case 'javascript':
      return <Badge bg="#F7DF1E" fg="#222" text="JS" />
    case 'typescript':
      return <Badge bg="#3178C6" text="TS" />
    case 'php':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB3" /><text x="12" y="15" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">php</text></svg>
    case 'python':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C7.5 2 7.8 4 7.8 4v2.2h4.4v.7H5.9S3 6.5 3 11.2s2.5 4.5 2.5 4.5H7v-2.2s-.1-2.5 2.5-2.5h4.3s2.4 0 2.4-2.3V4.4S16.7 2 12 2zm-2.4 1.4a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB" /><path d="M12 22c4.5 0 4.2-2 4.2-2v-2.2h-4.4v-.7h6.3s2.9.4 2.9-4.3-2.5-4.5-2.5-4.5H17v2.2s.1 2.5-2.5 2.5h-4.3s-2.4 0-2.4 2.3v3.9S7.3 22 12 22zm2.4-1.4a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B" /></svg>
    case 'sql':
    case 'relational database':
    case 'mysql':
    case 'postgresql':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#6FD3F5" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13c0 1.7-3.6 3-8 3s-8-1.3-8-3z" fill="#4A8FD6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.2" /></svg>
    case 'bootstrap':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="2" width="22" height="20" rx="5" fill="#7952B3" /><path d="M8.5 17V7h4c1.9 0 3 .9 3 2.5 0 1-.6 1.8-1.5 2.1 1.2.3 1.9 1.1 1.9 2.3 0 1.8-1.3 3.1-3.4 3.1zm1.6-5.9h2.2c1 0 1.5-.5 1.5-1.2s-.5-1.2-1.5-1.2h-2.2zm0 4.6h2.5c1.1 0 1.7-.5 1.7-1.4s-.6-1.4-1.7-1.4h-2.5z" fill="#fff" /></svg>
    case 'react':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#61DAFB" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" /></svg>
    case 'next.js':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#111" stroke="#fff" strokeOpacity=".5" /><path d="M8.5 7.5v9M8.5 7.5l7 9.2M15.5 7.5v5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>
    case 'angularjs':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5L2.5 5l1.5 12.5L12 22l8-4.5L21.5 5z" fill="#DD0031" /><path d="M12 4.2L6 17.3h2.3l1.2-3h5l1.2 3H18zm0 4.3l1.8 4.3h-3.6z" fill="#fff" /></svg>
    case 'jquery':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#0868AC" /><path d="M6 8c-1.5 3.2.2 7.6 4.3 8.6 3 .7 6-.9 7.2-3.6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
    case 'laravel':
      return <Badge bg="#FF2D20" text="L" />
    case 'node.js':
      return <Badge bg="#3C873A" text="N" />
    case 'flutter':
      return <Badge bg="#02569B" text="F" />
    case 'swift':
      return <Badge bg="#F05138" text="S" />
    case 'kotlin':
      return <Badge bg="#7F52FF" text="K" />
    default: {
      const br = BRANDS[norm(k)]
      if (br) {
        const t = br[1]
        return <Badge bg={br[0]} fg={br[2] || '#fff'} text={t} r={5} size={t.length > 3 ? 5 : t.length > 2 ? 6 : t.length > 1 ? 8 : 11} />
      }
      let ic = techIcon(name).ti || ''
      if (!ic || ic === 'code') {
        if (/hipaa|gdpr|pdpa|iso|pci|fips|do-178|wcag|owasp|waf|siem|soar|iam|oauth|sso|zero trust|encrypt|access|audit|consent|cookie|dsar|digital id|compliance/.test(k)) ic = 'shield'
        else if (/cloud|serverless|cdn|container|edge|govcloud/.test(k)) ic = 'cloud'
        else if (/api|rest|grpc|gateway|sdk|lti|scorm|xapi/.test(k)) ic = 'api'
        else if (/database|db|sql|time series|data mapping|snowflake|warehouse/.test(k)) ic = 'database'
        else if (/ai|ml|learning|vision|agent|llm|gpt/.test(k)) ic = 'sparkles'
        else if (/test|qa|agile|ci\/cd|devops|operating/.test(k)) ic = 'check'
        else if (/microservice|event|cqrs|architecture|digital twin|blockchain|stack/.test(k)) ic = 'layers'
        else if (/gps|telematics|satellite|lora|5g|sip|hls|iot|mqtt|socket/.test(k)) ic = 'world'
      }
      const c = '#7B6EF6'
      const wrap = (inner: React.ReactNode) => <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{inner}</svg>
      if (ic === 'device-mobile') return wrap(<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>)
      if (ic === 'cloud') return wrap(<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 10.5 3.75 3.75 0 0117.25 18z" />)
      if (ic === 'world') return wrap(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>)
      if (ic === 'api') return wrap(<><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path d="M13.5 5l-3 14" /></>)
      if (ic === 'layout-dashboard' || ic === 'layout-list') return wrap(<><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M9 9.5V20" /></>)
      if (ic === 'users') return wrap(<><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.2 3.2 0 010 5.6M18 14.8c1.7.6 3 2.2 3 4.5" /></>)
      if (ic === 'sparkles') return wrap(<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />)
      if (ic === 'shield') return wrap(<path d="M12 3l8 3v5.5c0 4.7-3.2 8.4-8 9.5-4.8-1.1-8-4.8-8-9.5V6z" />)
      if (ic === 'database') return wrap(<><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" /></>)
      if (ic === 'check') return wrap(<><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></>)
      if (ic === 'layers') return wrap(<><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5M3 16.5l9 5 9-5" /></>)
      if (ic === 'lock') return wrap(<><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 018 0v3" /></>)
      if (ic === 'shopping-cart') return wrap(<><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M3 4h2.5l2 11h11L20 8H6.5" /></>)
      return wrap(<path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />)
    }
  }
}
