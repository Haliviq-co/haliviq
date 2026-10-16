import React from 'react'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

// SVG icons — unique shape per service, gradient #6C60FF → #AEDC1B, navy bg
const GRAD_ID = 'xg'
const GradDef = () => (
  <defs>
    <linearGradient id={GRAD_ID} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6C60FF"/>
      <stop offset="100%" stopColor="#AEDC1B"/>
    </linearGradient>
  </defs>
)
const g = `url(#${GRAD_ID})`

const svgIcons: Record<string, React.ReactNode> = {
  // กลยุทธ์ — PNG icons
  '0-0': 'png:/icons/strategy/s1.png',
  '0-1': 'png:/icons/strategy/s2.png',
  '0-2': 'png:/icons/strategy/s3.png',
  '0-3': 'png:/icons/strategy/s4.png',

  // ดีไซน์ — PNG icons
  '1-0': 'png:/icons/design/d1.png',
  '1-1': 'png:/icons/design/d2.png',
  '1-2': 'png:/icons/design/d3.png',
  '1-3': 'png:/icons/design/d4.png',

  // Engineering
  // 2-0: browser window filled
  '2-0': <svg viewBox="0 0 48 48"><GradDef/>
    <rect x="4" y="8" width="40" height="32" rx="4" fill={g} opacity="0.2"/>
    <rect x="4" y="8" width="40" height="13" rx="4" fill={g} opacity="0.5"/>
    <circle cx="11" cy="14.5" r="2.5" fill="#10122A" opacity="0.6"/>
    <circle cx="18" cy="14.5" r="2.5" fill="#10122A" opacity="0.4"/>
    <circle cx="25" cy="14.5" r="2.5" fill="#10122A" opacity="0.25"/>
    <rect x="10" y="27" width="14" height="3" rx="1.5" fill={g} opacity="0.6"/>
    <rect x="10" y="33" width="22" height="3" rx="1.5" fill={g} opacity="0.35"/>
  </svg>,
  // 2-1: stacked cylinders (backend/db)
  '2-1': <svg viewBox="0 0 48 48"><GradDef/>
    <ellipse cx="24" cy="36" rx="16" ry="6" fill={g} opacity="0.3"/>
    <rect x="8" y="18" width="32" height="18" rx="0" fill={g} opacity="0.2"/>
    <ellipse cx="24" cy="18" rx="16" ry="6" fill={g} opacity="0.6"/>
    <ellipse cx="24" cy="10" rx="16" ry="6" fill={g}/>
  </svg>,
  // 2-2: code brackets </>
  '2-2': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M18 10L6 24L18 38" fill={g} opacity="0.4"/>
    <path d="M18 10L8 24L18 38L14 38L4 24L14 10Z" fill={g} opacity="0.6"/>
    <path d="M30 10L42 24L30 38L34 38L44 24L34 10Z" fill={g}/>
    <rect x="21" y="20" width="6" height="8" rx="1" fill={g} opacity="0.5" transform="rotate(-15 24 24)"/>
  </svg>,
  // 2-3: shield with checkmark (QA/security)
  '2-3': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M24 4L8 11V25C8 34.4 15.2 43.1 24 45C32.8 43.1 40 34.4 40 25V11Z" fill={g} opacity="0.25"/>
    <path d="M24 9L13 14.5V25C13 31.8 17.8 38.3 24 40C30.2 38.3 35 31.8 35 25V14.5Z" fill={g} opacity="0.5"/>
    <path d="M17 25L22 30L31 19" fill="none" stroke={g} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // AI
  // 3-0: brain/neural nodes
  '3-0': <svg viewBox="0 0 48 48"><GradDef/>
    <circle cx="24" cy="24" r="5" fill={g}/>
    <circle cx="10" cy="14" r="4" fill={g} opacity="0.5"/>
    <circle cx="38" cy="14" r="4" fill={g} opacity="0.5"/>
    <circle cx="10" cy="34" r="4" fill={g} opacity="0.5"/>
    <circle cx="38" cy="34" r="4" fill={g} opacity="0.5"/>
    <circle cx="24" cy="6" r="3.5" fill={g} opacity="0.65"/>
    <circle cx="24" cy="42" r="3.5" fill={g} opacity="0.65"/>
    <line x1="24" y1="19" x2="24" y2="9.5" stroke={g} strokeWidth="1.8" opacity="0.5"/>
    <line x1="19.5" y1="21" x2="13.5" y2="17" stroke={g} strokeWidth="1.8" opacity="0.5"/>
    <line x1="28.5" y1="21" x2="34.5" y2="17" stroke={g} strokeWidth="1.8" opacity="0.5"/>
    <line x1="19.5" y1="27" x2="13.5" y2="31" stroke={g} strokeWidth="1.8" opacity="0.5"/>
    <line x1="28.5" y1="27" x2="34.5" y2="31" stroke={g} strokeWidth="1.8" opacity="0.5"/>
    <line x1="24" y1="29" x2="24" y2="38.5" stroke={g} strokeWidth="1.8" opacity="0.5"/>
  </svg>,
  // 3-1: star burst (automation)
  '3-1': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M24 4L27.5 20.5L44 24L27.5 27.5L24 44L20.5 27.5L4 24L20.5 20.5Z" fill={g}/>
    <circle cx="24" cy="24" r="5" fill="#10122A" opacity="0.4"/>
  </svg>,
  // 3-2: chat bubble filled (chatbot)
  '3-2': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M6 8H42C43.1 8 44 8.9 44 10V32C44 33.1 43.1 34 42 34H28L20 44V34H6C4.9 34 4 33.1 4 32V10C4 8.9 4.9 8 6 8Z" fill={g} opacity="0.25"/>
    <path d="M8 10H40C41.1 10 42 10.9 42 12V30C42 31.1 41.1 32 40 32H26L20 40V32H8C6.9 32 6 31.1 6 30V12C6 10.9 6.9 10 8 10Z" fill={g} opacity="0.5"/>
    <circle cx="16" cy="21" r="3" fill={g}/>
    <circle cx="24" cy="21" r="3" fill={g}/>
    <circle cx="32" cy="21" r="3" fill={g}/>
  </svg>,
  // 3-3: pie/donut chart (data)
  '3-3': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M24 6V24L38.4 32.5C41.5 27.9 42.5 22.1 41 16.4C39.4 10.7 35.3 6.1 24 6Z" fill={g}/>
    <path d="M24 24L38.4 32.5C35.5 37.4 30.1 40.5 24 40.5C14.3 40.5 6.5 32.7 6.5 24C6.5 15.3 14.3 7.5 24 7.5" fill={g} opacity="0.4"/>
    <circle cx="24" cy="24" r="8" fill="#10122A" opacity="0.7"/>
    <circle cx="24" cy="24" r="4" fill={g} opacity="0.8"/>
  </svg>,

  // Enterprise — PNG icons
  '4-0': 'ent', '4-1': 'ent', '4-2': 'ent', '4-3': 'ent',

  // Support
  // 5-0: gear/cog filled
  '5-0': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M20 4H28L29.5 10.5C31.2 11.2 32.8 12.2 34.2 13.4L40.5 11.5L44.5 18.5L39.5 23C39.7 23.9 39.8 24.9 39.8 25.9C39.8 26.9 39.7 27.8 39.5 28.7L44.5 33.2L40.5 40.2L34.2 38.3C32.8 39.5 31.2 40.5 29.5 41.2L28 47.7H20L18.5 41.2C16.8 40.5 15.2 39.5 13.8 38.3L7.5 40.2L3.5 33.2L8.5 28.7C8.3 27.8 8.2 26.8 8.2 25.8C8.2 24.8 8.3 23.9 8.5 23L3.5 18.5L7.5 11.5L13.8 13.4C15.2 12.2 16.8 11.2 18.5 10.5Z" fill={g} opacity="0.3"/>
    <circle cx="24" cy="25" r="9" fill={g}/>
    <circle cx="24" cy="25" r="4.5" fill="#10122A" opacity="0.7"/>
  </svg>,
  // 5-1: hexagon filled (migration)
  '5-1': <svg viewBox="0 0 48 48"><GradDef/>
    <path d="M24 4L42 14V34L24 44L6 34V14Z" fill={g} opacity="0.2"/>
    <path d="M24 10L38 18V30L24 38L10 30V18Z" fill={g} opacity="0.45"/>
    <path d="M16 24L22 29L32 19" fill="none" stroke={g} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 5-2: two people/circles overlapping (consulting)
  '5-2': <svg viewBox="0 0 48 48"><GradDef/>
    <circle cx="17" cy="19" r="11" fill={g} opacity="0.5"/>
    <circle cx="31" cy="29" r="11" fill={g} opacity="0.7"/>
    <path d="M22 24C22 24 24 21 26 24C28 27 26 30 24 30" fill={g} opacity="0.4"/>
  </svg>,
  // 5-3: monitor with checkmark (training)
  '5-3': <svg viewBox="0 0 48 48"><GradDef/>
    <rect x="4" y="8" width="40" height="28" rx="4" fill={g} opacity="0.2"/>
    <rect x="4" y="8" width="40" height="28" rx="4" fill={g} opacity="0.15"/>
    <rect x="6" y="10" width="36" height="24" rx="3" fill={g} opacity="0.2"/>
    <path d="M15 24L22 31L33 18" fill="none" stroke={g} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="38" width="16" height="4" rx="2" fill={g} opacity="0.5"/>
    <rect x="20" y="36" width="8" height="3" rx="1.5" fill={g} opacity="0.35"/>
  </svg>,
}

const enterpriseImgs = [
  '/icons/enterprise/ent-1.png',
  '/icons/enterprise/ent-2.png',
  '/icons/enterprise/ent-3.png',
  '/icons/enterprise/ent-4.png',
]

const IconBox = ({ gi, ii }: { gi: number; ii: number }) => {
  const key = `${gi}-${ii}`
  const icon = svgIcons[key]
  const isEnt = gi === 4
  const isPng = typeof icon === 'string' && (icon as string).startsWith('png:')
  const pngSrc = isPng ? (icon as string).replace('png:', '') : ''
  return (
    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 overflow-hidden flex-shrink-0"
      style={{ background: isPng ? 'transparent' : '#10122A' }}>
      {isEnt
        ? <img loading="lazy" decoding="async" src={enterpriseImgs[ii]} alt="" style={{ width: 38, height: 38, objectFit: 'contain' }}/>
        : isPng
          ? <img loading="lazy" decoding="async" src={pngSrc} alt="" style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 16 }}/>
          : <div style={{ width: 36, height: 36 }}>{icon}</div>
      }
    </div>
  )
}

// Platform logos via CDN — ไม่ต้องใช้ไฟล์
const platformLogos: Record<string, string> = {
  // กลยุทธ์ — Project & Strategy tools
  'Notion':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg',
  'Miro':      'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/miro.svg',
  'ClickUp':   'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/clickup.svg',
  'Asana':     'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/asana.svg',
  'Trello':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/trello.svg',
  // ดีไซน์ — Design tools
  'Figma':     'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg',
  'Webflow':   'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webflow.svg',
  'Framer':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg',
  'Storybook': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/storybook.svg',
  // Engineering
  'React':     'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg',
  'Next.js':   'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg',
  'Flutter':   'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flutter.svg',
  'AWS':       'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg',
  'Docker':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/docker.svg',
  // AI
  'OpenAI':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'Python':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg',
  'TensorFlow':'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tensorflow.svg',
  'Hugging Face':'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg',
  'LangChain': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg',
  // Enterprise
  'Salesforce':'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg',
  'SAP':       'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg',
  'Odoo':      'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/odoo.svg',
  'Shopify':   'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg',
  // Support
  'GitHub':    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
  'Jira':      'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jira.svg',
  'Slack':     'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg',
}

const PlatformLogo = ({ name }: { name: string }) => {
  const src = platformLogos[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt={name}
      width={22} height={22}
      style={{
        filter: 'brightness(0) invert(1)',
        opacity: 0.75,
      }}
    />
  )
}

const colors = ['var(--purple)','var(--purple-light)','var(--purple)','var(--purple-light)','var(--purple)','var(--purple-light)']
const bgs = ['var(--purple-bg)','var(--purple-bg)','var(--purple-bg)','var(--purple-bg)','var(--purple-bg)','var(--purple-bg)']
const platformGroups = [
  ['Notion','Miro','ClickUp','Asana','Trello'],
  ['Figma','Webflow','Framer','Storybook'],
  ['React','Next.js','Flutter','AWS','Docker'],
  ['OpenAI','Python','TensorFlow','LangChain'],
  ['Salesforce','SAP','Odoo','Shopify'],
  ['GitHub','Jira','Slack'],
]

// Work cases — gi=0 รูปจริง, กลุ่มอื่น placeholder พร้อมคำแนะนำ
const workCasesByGroup: Record<number, { tag_th: string; tag_en: string; title_th: string; title_en: string; img: string; placeholder?: string }[]> = {
  0: [
    { tag_th:'อสังหาฯ · ไทย', tag_en:'Property · Thailand', title_th:'ADMiRE Digital Strategy', title_en:'ADMiRE Digital Strategy', img:'/images/work/project-1.jpg' },
    { tag_th:'ร้านอาหาร · ไทย', tag_en:'F&B · Thailand', title_th:'dsk Growth Roadmap', title_en:'dsk Growth Roadmap', img:'/images/work/project-2.jpg' },
    { tag_th:'อาหาร · ไทย', tag_en:'F&B · Thailand', title_th:'Baan Khanitha Digital Plan', title_en:'Baan Khanitha Digital Plan', img:'/images/work/project-3.jpg' },
    { tag_th:'โลจิสติกส์ · ไทย', tag_en:'Logistics · Thailand', title_th:'Prima Marine Analytics', title_en:'Prima Marine Analytics', img:'/images/work/project-4.jpg' },
    { tag_th:'Retail · ไทย', tag_en:'Retail · Thailand', title_th:'Jampha Market Strategy', title_en:'Jampha Market Strategy', img:'/images/work/project-5.jpg' },
  ],
  1: [
    { tag_th:'Brand · โรงแรม', tag_en:'Brand · Hotel', title_th:'Shanghai Mansion Brand', title_en:'Shanghai Mansion Brand', img:'/images/work/design-1.jpg' },
    { tag_th:'Brand · Wellness', tag_en:'Brand · Wellness', title_th:'Panpuri Brand Experience', title_en:'Panpuri Brand Experience', img:'/images/work/design-2.jpg' },
    { tag_th:'UX/UI · อสังหาฯ', tag_en:'UX/UI · Property', title_th:'Sea Hills Riracha Website', title_en:'Sea Hills Riracha Website', img:'/images/work/design-3.jpg' },
    { tag_th:'Brand · พลังงาน', tag_en:'Brand · Energy', title_th:'กระทรวงพลังงาน Campaign', title_en:'Energy Ministry Campaign', img:'/images/work/design-4.jpg' },
    { tag_th:'Brand · F&B', tag_en:'Brand · F&B', title_th:'BKK. Restaurant Branding', title_en:'BKK. Restaurant Branding', img:'/images/work/design-5.jpg' },
  ],
  2: [
    { tag_th:'AR · วัฒนธรรม', tag_en:'AR · Culture', title_th:'Cultural Map AR', title_en:'Cultural Map AR', img:'/images/work/ai-1.jpg' },
    { tag_th:'eService · ภาครัฐ', tag_en:'eService · Gov', title_th:'IMMIGRATION eServices', title_en:'IMMIGRATION eServices', img:'/images/work/ai-2.jpg' },
    { tag_th:'Data · ทรัพยากรน้ำ', tag_en:'Data · Water', title_th:'Dept. of Water Resources', title_en:'Dept. of Water Resources', img:'/images/work/ai-3.jpg' },
    { tag_th:'AI · องค์กร', tag_en:'AI · Enterprise', title_th:'ITAGC Platform', title_en:'ITAGC Platform', img:'/images/work/ai-4.jpg' },
    { tag_th:'Smart Service · ภาษี', tag_en:'Smart Tax · Gov', title_th:'Excise Smart Services', title_en:'Excise Smart Services', img:'/images/work/ai-5.jpg' },
  ],
  3: [
    { tag_th:'IoT · สื่อสาร', tag_en:'IoT · Telecom', title_th:'Radio Frequency System', title_en:'Radio Frequency System', img:'/images/work/ai-new-1.jpg' },
    { tag_th:'PropTech · อสังหาฯ', tag_en:'PropTech · Property', title_th:'Canapaya Residences', title_en:'Canapaya Residences', img:'/images/work/ai-new-2.jpg' },
    { tag_th:'PropTech · อสังหาฯ', tag_en:'PropTech · Property', title_th:'AWII House Platform', title_en:'AWII House Platform', img:'/images/work/ai-new-3.jpg' },
    { tag_th:'Travel · ท่องเที่ยว', tag_en:'Travel · Tourism', title_th:'World Surprise Travel', title_en:'World Surprise Travel', img:'/images/work/ai-new-4.jpg' },
    { tag_th:'F&B · ร้านอาหาร', tag_en:'F&B · Restaurant', title_th:'Sra Bua by Kiin Kiin', title_en:'Sra Bua by Kiin Kiin', img:'/images/work/ai-new-5.jpg' },
  ],
  4: [
    { tag_th:'ERP · พาณิชย์', tag_en:'ERP · Trade', title_th:'DITP Enterprise System', title_en:'DITP Enterprise System', img:'/images/work/ent-1.jpg' },
    { tag_th:'POS · Retail', tag_en:'POS · Retail', title_th:'MBK Retail Platform', title_en:'MBK Retail Platform', img:'/images/work/ent-2.jpg' },
    { tag_th:'QC · อุตสาหกรรม', tag_en:'QC · Industry', title_th:'NFI Smart Factory', title_en:'NFI Smart Factory', img:'/images/work/ent-3.jpg' },
    { tag_th:'E-Commerce · Fashion', tag_en:'E-Commerce · Fashion', title_th:'VERA E-Commerce', title_en:'VERA E-Commerce', img:'/images/work/ent-4.jpg' },
    { tag_th:'ERP · โรงงาน', tag_en:'ERP · Manufacturing', title_th:'Thai Metal Aluminium ERP', title_en:'Thai Metal Aluminium ERP', img:'/images/work/ent-5.jpg' },
  ],
  5: [
    { tag_th:'Maintenance · คลินิก', tag_en:'Maintenance · Clinic', title_th:'Blue Bear Clinic Support', title_en:'Blue Bear Clinic Support', img:'/images/work/sup-1.jpg' },
    { tag_th:'Consulting · Fitness', tag_en:'Consulting · Fitness', title_th:'BASE Training Platform', title_en:'BASE Training Platform', img:'/images/work/sup-2.jpg' },
    { tag_th:'Migration · F&B', tag_en:'Migration · F&B', title_th:'OVO System Migration', title_en:'OVO System Migration', img:'/images/work/sup-3.jpg' },
    { tag_th:'Support · F&B', tag_en:'Support · F&B', title_th:'Savelberg Tech Support', title_en:'Savelberg Tech Support', img:'/images/work/sup-4.jpg' },
    { tag_th:'Consulting · สุขภาพ', tag_en:'Consulting · Health', title_th:'MEKO Hospital Consulting', title_en:'MEKO Hospital Consulting', img:'/images/work/sup-5.jpg' },
  ],
}

export default function Services({ lang, tr }: Props) {
  const s = tr.services
  const isEN = lang === 'en'

  return (
    <section id="services" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="t-label mb-5" style={{background:'linear-gradient(135deg,var(--purple) 0%,var(--lime) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',fontWeight:500}}>{s.label}</p>
          <h2 className="t-display text-[clamp(2.4rem,5vw,4.5rem)] mb-6">
            {s.h2a}<br/>
            <span style={{background:'linear-gradient(135deg,var(--purple),var(--lime))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{s.h2b}</span>
          </h2>
          <p className="t-body text-base lg:text-lg">{s.sub}</p>
        </div>

        <div className="divide-y divide-[#E4E4EC] border-y border-[#E4E4EC]">
          {s.groups.map((group, gi) => (
            <div key={gi} className="py-16 lg:py-12">
              <div className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 mb-8">
                <div className="lg:sticky lg:top-28 self-start">
                  <h3 className="t-display text-[clamp(2.2rem,3.5vw,3.5rem)] mb-4 whitespace-pre-line" style={{fontWeight:400,background:'linear-gradient(135deg,var(--purple) 0%,var(--lime) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{group.heading}</h3>
                  <div className="w-10 h-1 rounded-full" style={{background:colors[gi]}}/>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {group.items.map((item, ii) => (
                    <Link key={item.title} href="#" className="group flex flex-col gap-0">
                      <IconBox gi={gi} ii={ii}/>
                      <h4 className="text-[var(--purple)] group-hover:text-[var(--purple-dark)] transition-colors leading-snug mb-1" style={{fontWeight:600,fontSize:'1.25rem'}}>{item.title}</h4>
                      <p className="t-body leading-tight mb-0" style={{fontSize:'1.05rem',fontWeight:400}}>{item.desc}</p>
                      <div className="flex items-center gap-1 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{color:colors[gi],fontWeight:400}}>
                        {s.more}
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href={`/${lang}/services`} className="btn-outline" style={{fontSize:'1rem',padding:'14px 36px'}}>
            {s.seeAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
