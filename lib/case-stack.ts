// Languages and technology shown on each case study, derived from the "Technology & Tools"
// lists in lib/work-data.ts. Only what can be stated openly; client-confidential parts are left out.
// To mention older front-end frameworks on a project (for example AngularJS on work done before React
// was adopted), add them to that slug's `earlier` list.
import type { ScreenKind } from '@/components/CaseMock'
import { caseStudies } from '@/lib/case-studies-data'

export type FlowStep = { kind: 'start' | 'step' | 'decision' | 'end'; th: string; en: string; yes?: { th: string; en: string }; no?: { th: string; en: string } }
export type Bi = { th: string; en: string }
// One UI solution block: the problem, what we did, and (optionally) app screens saved under
// public/images/case-studies/<slug>/ and listed here, for example ['/images/case-studies/<slug>/ui-01-a.png'].
export type MockKind = 'scan' | 'result' | 'evidence'
export type UiSolution = { problem: Bi; solution: Bi; images?: string[]; mock?: MockKind[]; list?: { th: string[]; en: string[] }; screens?: { device: 'phone' | 'browser'; kinds: ScreenKind[] } }
export type CaseStack = { languages: string[]; frameworks: string[]; infra: string[]; earlier?: string[]; built?: { th: string[]; en: string[] }; flow?: FlowStep[]; flowKind?: 'user' | 'project'; solutions?: UiSolution[] }

export const caseStacks: Record<string, CaseStack> = {
  "savelberg": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS",
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "ovo": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "base": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "blue-bear": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "thai-metal-aluminium": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "vera": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "nfi": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "mbk": {
    "languages": [],
    "frameworks": [
      "Cross-platform mobile framework (iOS + Android)",
      "CMS",
      "APIs"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "ditp": {
    "languages": [],
    "frameworks": [
      "Cross-platform mobile framework (iOS + Android)",
      "CMS",
      "APIs"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "sra-bua": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS",
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "world-surprise-travel": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS",
      "CRM",
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "awii-house": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS",
      "CRM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "canapaya-residences": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS",
      "CRM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "rfs": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS",
      "CRM",
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "excise-department": {
    "languages": [],
    "frameworks": [
      "Cross-platform mobile framework (iOS + Android)",
      "CMS",
      "APIs"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "itagc": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "department-of-water-resources": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "immigration-bureau": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "ministry-of-culture": {
    "languages": [],
    "frameworks": [
      "Cross-platform mobile framework (iOS + Android)",
      "CMS",
      "APIs"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "bbk-menu": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "sena-development": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CRM",
      "AI / LLM",
      "APIs",
      "Relational database",
      "Role-based access control"
    ],
    "infra": [
      "Cloud hosting"
    ]
  },
  "panpuri": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript",
      "Liquid"
    ],
    "frameworks": [
      "Shopify"
    ],
    "infra": []
  },
  "shanghai-mansion-bangkok": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "jampha-shopping-mall": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "AI / LLM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "prima-marine": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "baan-khanitha": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "dsk": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CRM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "admire": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "CMS",
      "CRM"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "meko-international-hospital": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "React",
      "Next.js",
      "Headless CMS"
    ],
    "infra": [
      "Cloud hosting",
      "CDN"
    ]
  },
  "dede": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [
      "Cross-platform mobile framework (iOS + Android)",
      "CMS"
    ],
    "infra": []
  },
  "suda": {
    "languages": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "frameworks": [],
    "infra": []
  }
}

// What was developed, in plain words. Start with one project as a model, then add the rest.
// Draft for review: the extra languages below come from the examples the team gave (PHP, Python, SQL,
// Bootstrap), not from a project record. Confirm or edit before relying on them.
Object.assign(caseStacks['excise-department'], {
  languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'SQL'],
  frameworks: ['Bootstrap', 'Cross-platform mobile framework (iOS + Android)', 'CMS', 'APIs'],
})

caseStacks['excise-department'].built = {
  en: [
    'iOS and Android mobile app, built once and shipped to both stores',
    'Tax verification feature inside the app',
    'Integration with data held by other government agencies, read through APIs instead of copying records',
    'Secure sign-in for the parts of the app that need it',
    'Backend service and cloud hosting behind the verification',
    'Content tools so the department can update content itself',
    'Reusable, accessible UI components for consistent, readable screens',
  ],
  th: [
    'แอปมือถือ iOS และ Android พัฒนาครั้งเดียวใช้ได้ทั้งสองระบบ',
    'ระบบตรวจสอบภาษีในแอป',
    'เชื่อมข้อมูลกับหน่วยงานรัฐอื่นผ่าน API โดยไม่ต้องคัดลอกข้อมูลมาเก็บซ้ำ',
    'ระบบยืนยันตัวตนที่ปลอดภัยสำหรับส่วนที่ต้องป้องกัน',
    'ระบบหลังบ้านและคลาวด์โฮสติ้งรองรับการตรวจสอบ',
    'เครื่องมือจัดการเนื้อหา ให้กรมอัปเดตข้อมูลเองได้',
    'ชุดคอมโพเนนต์ UI ที่ใช้ซ้ำได้และเข้าถึงง่าย ให้ทุกหน้าจออ่านง่ายและเป็นแบบเดียวกัน',
  ],
}

// Draft user flow, to be confirmed with the team before it is treated as final.
caseStacks['excise-department'].flow = [
  { kind: 'start', th: 'เปิดแอป', en: 'Open the app' },
  { kind: 'step', th: 'สแกนรหัสสินค้า', en: 'Scan the product code' },
  { kind: 'step', th: 'แอปตรวจกับข้อมูลของหน่วยงานที่เกี่ยวข้อง', en: 'The app checks data held by the agencies' },
  { kind: 'decision', th: 'พบข้อมูลหรือไม่', en: 'Record found?',
    yes: { th: 'แสดงผลตรวจสอบภาษีด้วยภาษาที่อ่านง่าย', en: 'Show the tax result in plain language' },
    no: { th: 'แจ้งว่าไม่พบข้อมูล และให้ลองสแกนใหม่', en: 'Say nothing was found and offer another scan' } },
]

caseStacks['excise-department'].solutions = [
  {
    problem: { th: 'เจ้าหน้าที่ภาคสนามต้องเช็กข้อมูลจากหลายหน่วยงานแยกกัน ใช้เวลานานและพลาดง่าย', en: 'Field officers had to check several agencies separately, which was slow and easy to get wrong.' },
    solution: { th: 'เราให้สแกนรหัสสินค้าแล้วดูสถานะภาษีได้ทันทีในหน้าเดียว โดยเชื่อมข้อมูลจากหน่วยงานที่เกี่ยวข้อง', en: 'We let officers scan a product code and see its tax status on one screen, with data connected from the agencies involved.' },
    mock: ['scan', 'result', 'evidence'],
  },
  {
    problem: { th: 'ผู้ใช้ต้องอ่านผลการตรวจแล้วเข้าใจได้ทันที แม้ไม่คุ้นกับกระบวนการทางภาษี', en: 'People need to read a result and understand it at once, even if they do not know the tax process.' },
    solution: { th: 'เราออกแบบปุ่มใหญ่ อ่านผลได้ทันที และใช้มือเดียวได้ แสดงผลด้วยภาษาที่อ่านง่าย', en: 'We designed large buttons, results that read at a glance, and one-handed use, with results in plain language.' },
    mock: ['result', 'evidence', 'scan'],
  },
  {
    problem: { th: 'ภาคสนามสัญญาณอินเทอร์เน็ตไม่นิ่ง แต่ผลตรวจต้องมีหลักฐาน', en: 'Signal in the field is unreliable, but every check needs evidence.' },
    solution: { th: 'แอปใช้งานต่อได้เมื่อสัญญาณไม่นิ่ง และบันทึกผลตรวจพร้อมภาพถ่ายเป็นหลักฐาน', en: 'The app keeps working when the signal drops and saves each result with a photo as evidence.' },
    mock: ['evidence', 'scan', 'result'],
  },
]

// For every case study except the hand-written Excise one, "What we developed", the project flow and the UI
// solutions are built from what is already written on that case study (services provided, approach steps and
// key features). Nothing new is claimed about the client; the device mockups are generic illustrations.
const APP_SLUGS = new Set(['mbk', 'ditp', 'department-of-water-resources', 'immigration-bureau', 'ministry-of-culture'])
const rules: [RegExp, ScreenKind][] = [
  [/chat|assistant|concierge|\bai\b|bot/, 'chat'],
  [/book|reserv|appointment|schedule|class|room/, 'booking'],
  [/search|find|discover|directory|filter|locat|map/, 'search'],
  [/shop|cart|checkout|order|commerce|product|catalog|menu|store|promotion|collection/, 'shop'],
  [/dashboard|crm|report|analytic|data|monitor|member|reward|assess|review|lead/, 'dash'],
  [/form|inquiry|contact|apply|register|quote/, 'form'],
  [/gallery|photo|portfolio|image|visual|design|showcase/, 'gallery'],
  [/content|story|article|news|blog|culture|history|about/, 'article'],
]
const pool: ScreenKind[] = ['hero', 'gallery', 'dash', 'search', 'shop', 'article']
function kindFor(text: string): ScreenKind {
  const t = text.toLowerCase()
  for (const [re, k] of rules) if (re.test(t)) return k
  return 'hero'
}

const cache: Record<string, CaseStack> = {}
export function getCaseStack(slug: string): CaseStack | undefined {
  const base = caseStacks[slug]
  if (!base) return undefined
  if (slug === 'excise-department') return base
  if (cache[slug]) return cache[slug]
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return base
  const device = APP_SLUGS.has(slug) ? 'phone' : 'browser'
  const built = base.built || { th: cs.th.servicesProvided, en: cs.en.servicesProvided }
  const ap = cs.en.approach
  const flow: FlowStep[] | undefined = base.flow || (ap.length >= 2
    ? ap.map((a, i) => ({ kind: i === 0 ? 'start' : i === ap.length - 1 ? 'end' : 'step', th: cs.th.approach[i]?.title || a.title, en: a.title }) as FlowStep)
    : undefined)
  const solutions: UiSolution[] | undefined = base.solutions || cs.en.keyFeatures.slice(0, 3).map((g, i) => {
    const k = kindFor(`${g.title} ${g.bullets.join(' ')}`)
    const others = pool.filter((p) => p !== k)
    const kinds: ScreenKind[] = [k, others[i % others.length], others[(i + 2) % others.length]]
    const th = cs.th.keyFeatures[i]
    return {
      problem: { th: th?.title || g.title, en: g.title },
      solution: { th: '', en: '' },
      list: { th: th?.bullets || g.bullets, en: g.bullets },
      screens: { device, kinds },
    }
  })
  const out: CaseStack = { ...base, built, flow, flowKind: base.flowKind || (base.flow ? 'user' : 'project'), solutions }
  cache[slug] = out
  return out
}
