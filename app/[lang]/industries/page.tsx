import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { alt } from '@/lib/seo'
import IndustryHero from '@/components/industry/IndustryHero'

const HERO_KINDS = new Set(['aerospace-defense','agriculture','automotive','consumer-goods','education','energy-utilities','fintech','government','healthcare','hospitality-travel','logistics','manufacturing','media-entertainment','professional-services','retail','technology','telecommunications'])

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Industries We Serve | Digital Solutions | Haliviq' : 'อุตสาหกรรมที่เราให้บริการ | โซลูชันดิจิทัล | Haliviq'
  const description = isEN
    ? 'From healthcare and fintech to logistics, retail and government, see how Haliviq designs and builds websites, apps and AI tools for each industry in Thailand.'
    : 'ตั้งแต่สุขภาพ ฟินเทค โลจิสติกส์ ค้าปลีก ไปจนถึงภาครัฐ ดูว่า Haliviq ออกแบบและพัฒนา website แอป และระบบ AI ให้แต่ละอุตสาหกรรมในไทยอย่างไร'
  const url = `https://www.haliviq.com/${params.lang}/industries`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

const glass = 'rgb(var(--fg) / 0.05)'
const glassBorder = '1px solid rgb(var(--fg) / 0.1)'
const dim = 'rgb(var(--fg) / 0.4)'

function Panel({ children, style, className }: { children: any; style?: any; className?: string }) {
  return (
    <div className={`rounded-lg px-3 py-2.5 ${className || ''}`} style={{ background: glass, border: glassBorder, ...style }}>
      {children}
    </div>
  )
}

function Bar({ w, color = 'var(--purple-light)' }: { w: number; color?: string }) {
  return <div className="h-1.5 rounded-full" style={{ width: `${w}%`, background: color }} />
}

// Generic animated icon illustration — pulsing rings + floating icon + a floating live-status badge.
// Shared template used by most industries; a few keep a bespoke composition below.
function AnimatedIcon({ icon, badgeLabel, badgeValue, color = 'var(--lime)' }: { icon: string; badgeLabel: string; badgeValue: string; color?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
        <span className="absolute rounded-full" style={{ width: 90, height: 90, border: '1px solid var(--purple-light)', animation: 'ringPulse 2.6s ease-out infinite' }} />
        <span className="absolute rounded-full" style={{ width: 90, height: 90, border: '1px solid var(--purple-light)', animation: 'ringPulse 2.6s ease-out 1.3s infinite' }} />
        <div className="rounded-full flex items-center justify-center" style={{ width: 64, height: 64, background: 'rgba(155,107,255,0.18)', border: '1px solid rgba(155,107,255,0.4)', animation: 'iconFloat 3.4s ease-in-out infinite' }}>
          <i className={`ti ${icon}`} style={{ fontSize: 30, color }} aria-hidden="true" />
        </div>
        <div className="absolute rounded-lg px-2.5 py-1.5 flex items-center gap-1.5" style={{ bottom: -10, right: -38, background: 'rgba(10,8,16,0.9)', border: glassBorder, animation: 'badgeFloat 3.2s ease-in-out infinite' }}>
          <span className="rounded-full shrink-0" style={{ width: 5, height: 5, background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
          <div>
            <div style={{ fontSize: 7, color: dim, whiteSpace: 'nowrap' }}>{badgeLabel}</div>
            <div style={{ fontSize: 10, color: 'var(--ink)', fontWeight: 500, whiteSpace: 'nowrap' }}>{badgeValue}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// One bespoke, animated mini-illustration per industry, in Haliviq's dark / purple / lime visual language
function IndustryVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'fintech':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="rounded-full" style={{ width: 5, height: 5, background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              <span style={{ fontSize: 9, color: dim }}>ACCOUNT BALANCE</span>
            </div>
            <div style={{ fontSize: 20, color: 'var(--ink)', fontWeight: 500, marginBottom: 10 }}>฿1,284,500</div>
            <div className="flex items-end gap-[3px] h-8">
              {[35, 55, 40, 70, 50, 85, 60, 75, 45, 65].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 4, background: 'var(--lime)', borderRadius: 2, opacity: 0.85, transformOrigin: 'bottom', animation: `barGrow 1.8s ease-in-out ${i * 0.12}s infinite` }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'healthcare':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 178 }}>
            <div className="flex items-center gap-1.5 mb-3">
              <i className="ti ti-heartbeat" style={{ color: 'var(--accent-2)', fontSize: 13, animation: 'blinkDot 1.4s ease-in-out infinite' }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: dim }}>PATIENT VITALS</span>
            </div>
            <svg width="100%" height="28" viewBox="0 0 150 28" fill="none">
              <path d="M0 14 L30 14 L38 4 L46 24 L54 14 L150 14" stroke="var(--purple-light)" strokeWidth="2" fill="none" strokeDasharray="6 4" style={{ animation: 'dashFlow 1.2s linear infinite' }} />
            </svg>
            <div className="flex justify-between mt-2">
              <span style={{ fontSize: 8, color: dim }}>HR 72</span>
              <span style={{ fontSize: 8, color: dim }}>SpO2 98%</span>
            </div>
          </Panel>
        </div>
      )
    case 'retail':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 180 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>THE EVERYDAY STORE</div>
            <div className="grid grid-cols-3 gap-2">
              {['ti-shopping-bag', 'ti-shirt', 'ti-device-mobile'].map((ic, i) => (
                <div key={ic} className="rounded-md flex items-center justify-center" style={{ height: 32, background: 'rgba(155,107,255,0.18)', animation: `iconFloat 2.6s ease-in-out ${i * 0.2}s infinite` }}>
                  <i className={`ti ${ic}`} style={{ color: 'var(--accent-2)', fontSize: 15 }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'real-estate':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
          <Panel style={{ width: 150 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>LISTING</div>
            <div className="h-10 rounded-md mb-2 flex items-end justify-center gap-1 p-1.5" style={{ background: 'rgba(155,107,255,0.15)' }}>
              {[40, 65, 50, 80, 55].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 6, background: 'var(--purple-light)', borderRadius: 1, transformOrigin: 'bottom', animation: `barGrow 2s ease-in-out ${i * 0.15}s infinite` }} />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Bar w={50} color="rgb(var(--fg) / 0.2)" />
              <span style={{ fontSize: 9, color: 'var(--accent-2)' }}>฿8.9M</span>
            </div>
          </Panel>
        </div>
      )
    case 'education':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>COURSE PROGRESS</div>
            <div className="space-y-2">
              {[{ l: 'Module 1', w: 100 }, { l: 'Module 2', w: 70 }, { l: 'Module 3', w: 30 }].map((r, i) => (
                <div key={r.l} className="flex items-center gap-2">
                  <span style={{ fontSize: 8, color: dim, width: 46 }}>{r.l}</span>
                  <div className="flex-1" style={{ animation: `blinkDot 2.4s ease-in-out ${i * 0.3}s infinite` }}><Bar w={r.w} color="var(--lime)" /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'logistics':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)', animation: 'iconFloat 2.6s ease-in-out infinite' }}>
            <i className="ti ti-truck-delivery" style={{ color: 'var(--accent-2)', fontSize: 18 }} aria-hidden="true" />
          </div>
          <div className="flex-1 h-px" style={{ backgroundImage: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)', backgroundSize: '26px 1px', animation: 'dashScroll 0.8s linear infinite' }} />
          <Panel style={{ width: 84 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 4 }}>ETA</div>
            <div style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 500 }}>12:40</div>
          </Panel>
        </div>
      )
    case 'aerospace-defense':
      return <AnimatedIcon icon="ti-satellite" badgeLabel="DOWNLINK" badgeValue="Active" />
    case 'agriculture':
      return <AnimatedIcon icon="ti-plant-2" badgeLabel="SOIL MOISTURE" badgeValue="72%" />
    case 'automotive':
      return <AnimatedIcon icon="ti-car" badgeLabel="CHARGE" badgeValue="84%" />
    case 'consumer-goods':
      return <AnimatedIcon icon="ti-package" badgeLabel="ORDERS" badgeValue="1,204" />
    case 'energy-utilities':
      return <AnimatedIcon icon="ti-bolt" badgeLabel="GRID LOAD" badgeValue="92%" />
    case 'government':
      return <AnimatedIcon icon="ti-building-bank" badgeLabel="REQUESTS" badgeValue="Verified" />
    case 'hospitality-travel':
      return <AnimatedIcon icon="ti-bed" badgeLabel="ROOM 208" badgeValue="Unlocked" />
    case 'manufacturing':
      return <AnimatedIcon icon="ti-building-factory" badgeLabel="LINE 04" badgeValue="Running" />
    case 'media-entertainment':
      return <AnimatedIcon icon="ti-movie" badgeLabel="LIVE" badgeValue="4K" />
    case 'professional-services':
      return <AnimatedIcon icon="ti-briefcase" badgeLabel="CASES" badgeValue="38 Active" />
    case 'technology':
      return <AnimatedIcon icon="ti-cpu" badgeLabel="DEPLOYS" badgeValue="12 Today" />
    case 'telecommunications':
      return <AnimatedIcon icon="ti-antenna" badgeLabel="NETWORK" badgeValue="5G" />
    default:
      return <AnimatedIcon icon="ti-sparkles" badgeLabel="STATUS" badgeValue="Online" />
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const prefix = `/${lang}`

  const industries = [
    { slug: 'aerospace-defense', icon: 'ti-satellite', title: isEN ? 'Aerospace & Defense' : 'การบินอวกาศและกลาโหม', href: '/industries/aerospace-defense', desc: isEN ? 'Encrypted communications, satellite and ground-station dashboards, parts traceability and simulation tools for teams that work under export controls, clearance levels and long certification cycles.' : 'ระบบสื่อสารเข้ารหัส แดชบอร์ดดาวเทียมและ Ground Station ระบบตามรอยชิ้นส่วน และเครื่องมือจำลอง สำหรับทีมที่ต้องทำงานภายใต้กฎควบคุมการส่งออก ระดับการเข้าถึงข้อมูล และขั้นตอนขอใบรับรองที่ใช้เวลานาน' },
    { slug: 'agriculture', icon: 'ti-plant-2', title: isEN ? 'Agriculture' : 'เกษตรกรรม', href: '/industries/agriculture', desc: isEN ? 'Farm management apps, soil and crop monitoring, produce traceability and yield forecasting that work in Thai, on a phone, and in fields where the signal comes and goes.' : 'แอปจัดการฟาร์ม ระบบวัดดินและติดตามพืช ระบบตามรอยสินค้าเกษตร และการคาดการณ์ผลผลิต ที่ใช้งานเป็นภาษาไทยบนมือถือได้ แม้ในแปลงที่สัญญาณขาดๆ หายๆ' },
    { slug: 'automotive', icon: 'ti-car', title: isEN ? 'Automotive' : 'ยานยนต์', href: '/industries/automotive', desc: isEN ? 'Connected-car apps, EV charging and fleet platforms, dealer and after-sales systems for carmakers, importers, dealer groups and mobility operators.' : 'แอปรถยนต์เชื่อมต่อ แพลตฟอร์มสถานีชาร์จ EV และบริหารรถยนต์ในกองยาน รวมถึงระบบดีลเลอร์และหลังการขาย สำหรับผู้ผลิตรถ ผู้นำเข้า กลุ่มดีลเลอร์ และผู้ให้บริการด้านการเดินทาง' },
    { slug: 'consumer-goods', icon: 'ti-package', title: isEN ? 'Consumer Goods' : 'สินค้าอุปโภคบริโภค', href: '/industries/consumer-goods', desc: isEN ? 'Direct-to-consumer stores, retailer and distributor portals, demand forecasting and product-data tools for brands that sell through shelves, marketplaces and their own channels.' : 'ร้านค้าออนไลน์ขายตรงถึงลูกค้า พอร์ทัลสำหรับร้านค้าปลีกและตัวแทนจำหน่าย เครื่องมือคาดการณ์ยอดขายและจัดการข้อมูลสินค้า สำหรับแบรนด์ที่ขายทั้งบนชั้นวาง มาร์เก็ตเพลส และช่องทางของตัวเอง' },
    { slug: 'education', icon: 'ti-school', title: isEN ? 'Education' : 'การศึกษา', href: '/industries/education', desc: isEN ? 'Learning platforms, student and parent apps, and admin tools for schools, universities and training companies, designed for Thai learners and the teachers who run the classes.' : 'แพลตฟอร์มการเรียน แอปสำหรับนักเรียนและผู้ปกครอง และระบบหลังบ้านสำหรับโรงเรียน มหาวิทยาลัย และบริษัทฝึกอบรม ออกแบบให้เหมาะกับผู้เรียนชาวไทยและครูที่ดูแลห้องเรียนจริง' },
    { slug: 'energy-utilities', icon: 'ti-bolt', title: isEN ? 'Energy & Utilities' : 'พลังงานและสาธารณูปโภค', href: '/industries/energy-utilities', desc: isEN ? 'Smart-meter dashboards, grid and plant monitoring, field-crew apps and customer billing portals for power, water and renewable-energy operators.' : 'แดชบอร์ดสมาร์ทมิเตอร์ ระบบติดตามโครงข่ายและโรงไฟฟ้า แอปสำหรับทีมภาคสนาม และพอร์ทัลบิลลูกค้า สำหรับผู้ให้บริการไฟฟ้า น้ำประปา และพลังงานหมุนเวียน' },
    { slug: 'fintech', icon: 'ti-building-bank', title: isEN ? 'Financial Services' : 'บริการทางการเงิน', href: '/industries/fintech', desc: isEN ? 'Mobile banking, PromptPay and payment flows, onboarding with eKYC, and lending and insurance systems built around Bank of Thailand rules and PDPA.' : 'โมบายแบงก์กิ้ง ระบบชำระเงินและ PromptPay การเปิดบัญชีด้วย eKYC และระบบสินเชื่อกับประกัน ที่ออกแบบให้ตรงตามข้อกำหนดของ ธปท. และ PDPA' },
    { slug: 'government', icon: 'ti-building-bank', title: isEN ? 'Government & Public Sector' : 'ภาครัฐและหน่วยงานสาธารณะ', href: '/industries/government', desc: isEN ? 'Citizen-facing online services, case-management and internal workflow systems for ministries, local administrations and public agencies, with accessibility and data-protection built in.' : 'บริการออนไลน์สำหรับประชาชน ระบบจัดการเรื่องและเวิร์กโฟลว์ภายใน สำหรับกระทรวง องค์กรปกครองส่วนท้องถิ่น และหน่วยงานรัฐ โดยคำนึงถึงการเข้าถึงของผู้ใช้ทุกกลุ่มและการคุ้มครองข้อมูลตั้งแต่ต้น' },
    { slug: 'healthcare', icon: 'ti-heartbeat', title: isEN ? 'Healthcare & Life Sciences' : 'สุขภาพและวิทยาศาสตร์ชีวภาพ', href: '/industries/healthcare', desc: isEN ? 'Patient apps, appointment and telemedicine flows, clinic and hospital back-office systems, and research data tools that handle health records with care under PDPA.' : 'แอปสำหรับผู้ป่วย ระบบนัดหมายและ telemedicine ระบบหลังบ้านของคลินิกและโรงพยาบาล และเครื่องมือจัดการข้อมูลวิจัย ที่ดูแลข้อมูลสุขภาพอย่างระมัดระวังตาม PDPA' },
    { slug: 'hospitality-travel', icon: 'ti-bed', title: isEN ? 'Hospitality & Travel' : 'การบริการและการท่องเที่ยว', href: '/industries/hospitality-travel', desc: isEN ? 'Direct-booking websites, guest apps, property-management integrations and tour or transfer booking for hotels, resorts and travel businesses serving Thai and international guests.' : 'เว็บไซต์จองตรง แอปสำหรับผู้เข้าพัก การเชื่อมต่อระบบจัดการโรงแรม และระบบจองทัวร์หรือรถรับส่ง สำหรับโรงแรม รีสอร์ต และธุรกิจท่องเที่ยวที่รับลูกค้าทั้งคนไทยและต่างชาติ' },
    { slug: 'manufacturing', icon: 'ti-building-factory', title: isEN ? 'Manufacturing & Industrials' : 'การผลิตและอุตสาหกรรม', href: '/industries/manufacturing', desc: isEN ? 'Production dashboards, machine-data collection, quality and maintenance tracking, and ERP integrations for factories moving from paper and spreadsheets to live shop-floor data.' : 'แดชบอร์ดการผลิต ระบบเก็บข้อมูลจากเครื่องจักร ระบบติดตามคุณภาพและซ่อมบำรุง และการเชื่อมต่อ ERP สำหรับโรงงานที่อยากเลิกจดกระดาษและสเปรดชีต แล้วดูข้อมูลหน้างานได้แบบเรียลไทม์' },
    { slug: 'media-entertainment', icon: 'ti-movie', title: isEN ? 'Media & Entertainment' : 'สื่อและบันเทิง', href: '/industries/media-entertainment', desc: isEN ? 'Streaming and content platforms, creator and fan communities, ticketing and subscription flows for publishers, studios, event organisers and artist teams.' : 'แพลตฟอร์มสตรีมมิงและคอนเทนต์ คอมมูนิตี้สำหรับครีเอเตอร์และแฟนๆ ระบบขายบัตรและสมาชิกรายเดือน สำหรับสำนักพิมพ์ สตูดิโอ ผู้จัดอีเวนต์ และทีมศิลปิน' },
    { slug: 'professional-services', icon: 'ti-briefcase', title: isEN ? 'Professional Services' : 'บริการวิชาชีพ', href: '/industries/professional-services', desc: isEN ? 'Client portals, case and time tracking, proposal and document workflows for consultancies, law firms, accounting and audit practices that sell expertise by the hour.' : 'พอร์ทัลลูกค้า ระบบติดตามงานและบันทึกเวลา และเวิร์กโฟลว์เอกสารกับข้อเสนอ สำหรับบริษัทที่ปรึกษา สำนักงานกฎหมาย และสำนักงานบัญชีที่ขายความเชี่ยวชาญเป็นรายชั่วโมง' },
    { slug: 'real-estate', icon: 'ti-building-skyscraper', title: isEN ? 'Real Estate' : 'อสังหาริมทรัพย์', href: '/industries/real-estate', desc: isEN ? 'Listing and search portals, developer sales sites, CRM for agents and tenant or property management apps for developers, brokers and landlords across Thailand.' : 'พอร์ทัลลงประกาศและค้นหาทรัพย์ เว็บขายโครงการ CRM สำหรับเอเจนต์ และแอปจัดการผู้เช่าและทรัพย์สิน สำหรับผู้พัฒนาโครงการ นายหน้า และเจ้าของให้เช่าทั่วไทย' },
    { slug: 'retail', icon: 'ti-shopping-cart', title: isEN ? 'Retail & E-commerce' : 'ค้าปลีกและอีคอมเมิร์ซ', href: '/industries/retail', desc: isEN ? 'Online stores, mobile shopping apps, omnichannel inventory, loyalty and LINE-connected checkout for Thai retailers who sell in store, online and on marketplaces.' : 'ร้านค้าออนไลน์ แอปช้อปปิ้งบนมือถือ ระบบสต็อกที่เชื่อมทุกช่องทาง โปรแกรมสะสมแต้ม และการชำระเงินที่เชื่อมกับ LINE สำหรับร้านค้าปลีกไทยที่ขายทั้งหน้าร้าน ออนไลน์ และบนมาร์เก็ตเพลส' },
    { slug: 'technology', icon: 'ti-cpu', title: isEN ? 'Technology & Hi-Tech' : 'เทคโนโลยีและไฮเทค', href: '/industries/technology', desc: isEN ? 'Product websites, SaaS onboarding and dashboards, developer documentation and admin tools for software companies and startups that need to ship and keep shipping.' : 'เว็บไซต์โปรดักต์ หน้า onboarding และแดชบอร์ดสำหรับ SaaS เอกสารสำหรับนักพัฒนา และระบบหลังบ้าน สำหรับบริษัทซอฟต์แวร์และสตาร์ทอัพที่ต้องส่งงานให้ทันและส่งต่อเนื่อง' },
    { slug: 'telecommunications', icon: 'ti-antenna', title: isEN ? 'Telecommunications' : 'โทรคมนาคม', href: '/industries/telecommunications', desc: isEN ? 'Self-service apps, billing and top-up flows, network and outage dashboards and partner portals for mobile, broadband and enterprise connectivity providers.' : 'แอปบริการตัวเอง ระบบบิลและเติมเงิน แดชบอร์ดเครือข่ายและเหตุขัดข้อง และพอร์ทัลสำหรับพาร์ทเนอร์ สำหรับผู้ให้บริการมือถือ อินเทอร์เน็ตบ้าน และเครือข่ายองค์กร' },
    { slug: 'logistics', icon: 'ti-truck-delivery', title: isEN ? 'Transportation & Logistics' : 'คมนาคมและโลจิสติกส์', href: '/industries/logistics', desc: isEN ? 'Shipment tracking, route and fleet planning, warehouse and last-mile delivery tools for freight forwarders, carriers and e-commerce fulfilment teams moving goods in and out of Thailand.' : 'ระบบติดตามพัสดุ วางเส้นทางและบริหารกองรถ เครื่องมือคลังสินค้าและส่งของไมล์สุดท้าย สำหรับฟอร์เวิร์ดเดอร์ ผู้ขนส่ง และทีมจัดส่งอีคอมเมิร์ซที่ขนของเข้าออกประเทศไทย' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5">{isEN ? 'Industries' : 'อุตสาหกรรม'}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
              {isEN ? (
                <>Built for Your<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Industry</span></>
              ) : (
                <>ระบบที่เข้าใจ<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ธุรกิจของคุณจริงๆ</span></>
              )}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {isEN
                ? 'A bank, a farm and a hospital do not share rules, users or risks, so they should not share the same software. Below are the 18 industries we build for from Bangkok, with the regulations, workflows and customer habits we plan around in each. Pick yours to see the problems we usually meet, what we build, and how a project typically starts.'
                : 'ธนาคาร ฟาร์ม และโรงพยาบาล มีกฎ ผู้ใช้ และความเสี่ยงไม่เหมือนกัน ซอฟต์แวร์ก็ไม่ควรเหมือนกันด้วย ด้านล่างคือ 18 อุตสาหกรรมที่เรารับทำจากกรุงเทพฯ พร้อมกฎระเบียบ ขั้นตอนงาน และพฤติกรรมลูกค้าที่เราต้องคำนึงถึงในแต่ละสาย กดเข้าไปดูปัญหาที่พบบ่อย สิ่งที่เราทำให้ได้ และโปรเจกต์มักเริ่มจากตรงไหน'}
            </p>
          </div>
        </section>

        {/* Industries grid */}
        <section className="pb-24 pt-4" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {industries.map((it) => (
                <Link key={it.href} href={`${prefix}${it.href}`} className="group flex flex-col">
                  <div
                    className="theme-dark relative h-72 rounded-2xl overflow-hidden mb-6 group-hover:border-[var(--purple-light)]/40 transition-colors"
                    style={{ background: 'linear-gradient(160deg,#171025 0%,#0B0813 100%)', border: '1px solid rgb(var(--fg) / 0.07)' }}
                  >
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                    {HERO_KINDS.has(it.slug)
                      ? <div className="ind-cover" aria-hidden="true"><IndustryHero kind={it.slug} isEN={isEN} /></div>
                      : <IndustryVisual slug={it.slug} />}
                  </div>
                  <h3 className="text-[color:var(--ink)] mb-2.5" style={{ fontWeight: 500, fontSize: '1.2rem' }}>{it.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}>{it.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm mt-auto" style={{ color: 'var(--accent-2)', fontWeight: 500 }}>
                    {isEN ? 'Learn more' : 'ดูเพิ่มเติม'}
                    <i className="ti ti-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 py-24 lg:py-32 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>{isEN ? 'Start Today' : 'เริ่มวันนี้'}</p>
            <h2 className="t-display mb-6 leading-tight" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2rem,4vw,4rem)' }}>
              {isEN ? "Don't See Your Industry?" : 'ไม่เห็นอุตสาหกรรมของคุณ?'}
            </h2>
            <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {isEN ? 'Tell us what your business does and who uses your product. We will tell you honestly whether we have worked in a similar space, and where we would start.' : 'เล่าให้เราฟังว่าธุรกิจคุณทำอะไร และใครเป็นคนใช้ระบบ เราจะบอกตรงๆ ว่าเคยทำงานใกล้เคียงแบบนี้ไหม และถ้าเริ่ม เราจะเริ่มจากตรงไหน'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:wu@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-colors" style={{ border: '1px solid rgb(var(--fg) / 0.3)', color: 'var(--ink)', fontWeight: 400 }}>
                wu@haliviq.com
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
