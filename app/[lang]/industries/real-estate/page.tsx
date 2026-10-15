import Link from 'next/link'
import TechGlyph from '@/components/TechGlyph'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? "Real Estate Software & Digital Solutions | Haliviq" : "อสังหาริมทรัพย์ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Listing sites, virtual tours, rental management, and digital deal paperwork for developers, brokerages, and landlords who want fewer spreadsheets and faster…"
    : "เว็บประกาศขายและเช่า ทัวร์เสมือนจริง ระบบดูแลห้องเช่า และเอกสารดีลแบบดิจิทัล สำหรับผู้พัฒนาโครงการ นายหน้า และเจ้าของที่ปล่อยเช่า…"
  const url = `https://www.haliviq.com/${params.lang}/industries/real-estate`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Real Estate' : 'อุตสาหกรรม / อสังหาริมทรัพย์'
  const heroSubhead = isEN
    ? 'Listing sites, virtual tours, rental management, and digital deal paperwork for developers, brokerages, and landlords who want fewer spreadsheets and faster closings.'
    : 'เว็บประกาศขายและเช่า ทัวร์เสมือนจริง ระบบดูแลห้องเช่า และเอกสารดีลแบบดิจิทัล สำหรับผู้พัฒนาโครงการ นายหน้า และเจ้าของที่ปล่อยเช่า ที่อยากมีสเปรดชีตน้อยลงและปิดดีลได้เร็วขึ้น'

  const challenges = isEN ? [
    { icon: 'ti-building-skyscraper', title: 'Fragmented Listing Data', desc: 'One unit often lives in a developer\'s price list, a sales agent\'s LINE group, three listing portals, and a spreadsheet at the sales gallery, and each shows a slightly different price or availability. Buyers notice when a condo they saw as available turns out to be reserved. We set up a single source of truth for units, prices, floor plans, and status, then publish from it to your website and partner portals, so a change made once shows up everywhere.' },
    { icon: 'ti-file-invoice', title: 'Paper-Heavy Transactions', desc: 'A sale involves a reservation form, ID copies, a sale-and-purchase agreement, payment slips, and later a transfer at the Land Department, which still has to be done in person. The steps before that, such as reservations, document collection, and contract signing, are where paper and back-and-forth slow things down. We move those steps online with e-signature (Thailand\'s Electronic Transactions Act recognises it), a checklist for each buyer, and secure storage for ID copies in line with PDPA.' },
    { icon: 'ti-building-community', title: 'Property Management Complexity', desc: 'Once you manage dozens of rooms or a few condo buildings, rent reminders, repair requests, meter readings, common-area fees, and move-in and move-out inspections stop fitting into a notebook and a chat group. Tenants send photos of a leaking tap at midnight and nobody knows who picked it up. We build a management system where every request becomes a ticket with an owner and a status, and rent and utility bills go out and get matched to payments automatically.' },
    { icon: 'ti-shield-check', title: 'Trust & Transparency Expectations', desc: 'Buying a home is likely the biggest payment most people make, so buyers and tenants look hard for signs of trust: real photos, prices that match the contract, clear fees, and honest availability. Fake or outdated listings are a common complaint on Thai portals. We help you show verified details, construction or handover progress for off-plan projects, and a clear record of who said what, so your brand earns confidence before the first site visit.' },
  ] : [
    { icon: 'ti-building-skyscraper', title: 'ข้อมูลประกาศขายและเช่ากระจัดกระจาย', desc: 'ห้องหนึ่งห้องอาจอยู่ในไพรซ์ลิสต์ของโครงการ กลุ่ม LINE ของเซลส์ เว็บประกาศสามเจ้า และสเปรดชีตที่ออฟฟิศขาย แล้วแต่ละที่ก็ราคาหรือสถานะไม่ตรงกันนิดหน่อย ลูกค้าเห็นว่าห้องว่างแต่พอติดต่อไปกลับโดนจองแล้ว ซึ่งเสียความรู้สึกมาก เราช่วยทำแหล่งข้อมูลกลางเก็บยูนิต ราคา แปลน และสถานะ แล้วส่งไปเว็บไซต์กับพอร์ทัลพาร์ตเนอร์จากที่เดียว แก้ครั้งเดียวก็ขึ้นตรงกันทุกที่' },
    { icon: 'ti-file-invoice', title: 'ขั้นตอนทำธุรกรรมที่ยังใช้กระดาษ', desc: 'การซื้อขายหนึ่งดีลมีใบจอง สำเนาบัตร สัญญาจะซื้อจะขาย สลิปโอนเงิน และสุดท้ายต้องไปโอนกรรมสิทธิ์ที่กรมที่ดินด้วยตัวเอง ช่วงก่อนวันโอนนี่แหละที่กระดาษกับการส่งเอกสารกลับไปกลับมาทำให้ช้า เราย้ายขั้นตอนเหล่านั้นขึ้นออนไลน์ ทั้งจอง เก็บเอกสาร และเซ็นสัญญา ด้วยลายเซ็นอิเล็กทรอนิกส์ที่กฎหมายไทยรับรอง มีเช็กลิสต์ให้ลูกค้าแต่ละคนว่าขาดอะไร และเก็บสำเนาบัตรอย่างปลอดภัยตาม PDPA' },
    { icon: 'ti-building-community', title: 'ความซับซ้อนของการบริหารอสังหาฯ', desc: 'พอดูแลห้องเป็นหลักสิบ หรืออาคารชุดหลายตึก การทวงค่าเช่า แจ้งซ่อม จดมิเตอร์ ค่าส่วนกลาง และตรวจห้องตอนย้ายเข้า-ออก ก็ไม่ไหวจะจดสมุดกับตามในกลุ่มแชต ผู้เช่าส่งรูปก๊อกน้ำรั่วมาตอนเที่ยงคืนแล้วไม่มีใครรู้ว่าใครรับเรื่อง เราสร้างระบบที่ทุกคำขอเป็นตั๋วงาน มีคนรับผิดชอบและสถานะชัดเจน ส่วนบิลค่าเช่าค่าน้ำค่าไฟก็ออกและจับคู่กับยอดโอนให้อัตโนมัติ' },
    { icon: 'ti-shield-check', title: 'ความคาดหวังเรื่องความน่าไว้ใจและความโปร่งใส', desc: 'การซื้อบ้านเป็นก้อนเงินใหญ่ที่สุดของคนส่วนใหญ่ ผู้ซื้อและผู้เช่าเลยดูหาสัญญาณความน่าเชื่อถืออย่างละเอียด ทั้งรูปจริง ราคาที่ตรงกับสัญญา ค่าธรรมเนียมที่ชัด และสถานะห้องที่จริงใจ ประกาศปลอมหรือหมดอายุคือเรื่องที่คนบ่นบ่อยในเว็บประกาศไทย เราช่วยแสดงข้อมูลที่ตรวจสอบแล้ว ความคืบหน้าก่อสร้างหรือกำหนดส่งมอบสำหรับโครงการที่ยังไม่เสร็จ และบันทึกว่าใครตกลงอะไรไว้ แบรนด์คุณจะได้ความเชื่อใจตั้งแต่ก่อนลูกค้ามาดูโครงการ' },
  ]

  const metrics = [
    { value: '$106.6B', label: isEN ? 'Global Proptech Market Size by 2029' : 'มูลค่าตลาด Proptech ทั่วโลกภายในปี 2029', source: 'MarketsandMarkets Proptech Forecast, 2024' },
    { value: '40%', label: isEN ? 'Faster Leasing Cycles with Digital Property Tools' : 'เวลาปล่อยเช่าที่เร็วขึ้นเมื่อใช้เครื่องมือดิจิทัล', source: 'JLL Digital Real Estate Report, 2024' },
    { value: '97%', label: isEN ? 'Of Buyers Who Start Their Property Search Online' : 'ของผู้ซื้อที่เริ่มหาอสังหาริมทรัพย์ทางออนไลน์', source: 'NAR Real Estate in a Digital Age, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-home-search', title: 'Property Listing & Search Platforms', desc: 'A listing website or marketplace with search that fits how Thais look for property: by BTS or MRT station, project name, school zone, price range, and bedrooms, with a map view and saved searches. Agents and owners manage their own listings, photos, and enquiries. We also handle Thai and English content, Thai address formats, and fast loading on mobile, where most searching happens.' },
    { icon: 'ti-view-360', title: 'Virtual Tour & 3D Visualization Tools', desc: '360-degree tours, 3D floor plans, and virtual staging so a buyer can walk through a unit before it is built, or from another country. Useful for off-plan condos, overseas buyers, and busy people who want to shortlist before spending a Saturday on site visits. We embed tours into your listing pages and track which rooms people linger on, so your sales team knows what to talk about.' },
    { icon: 'ti-building-community', title: 'Property Management Systems', desc: 'A back office for landlords, condo juristic persons, and managers of rental portfolios. It covers unit and lease records, rent and common-fee billing, repair tickets, meter readings, and inspection checklists. Each building manager sees their own units, while the owner sees occupancy and income across the whole portfolio. We can build it new or connect to the accounting software you already use.' },
    { icon: 'ti-signature', title: 'Digital Transaction & E-Signature Workflows', desc: 'A guided flow for reservation, document upload, contract preparation, and e-signature, with a clear status for each buyer or tenant and reminders for whatever is missing. Payment of reservation money can be matched to the deal through PromptPay QR. Documents are stored with access logs. Note that the final ownership transfer is still done at the Land Department, so we design the flow to get everyone fully ready by that day.' },
    { icon: 'ti-users-group', title: 'Tenant & Landlord Portals', desc: 'A web portal, or a LINE-based page if your tenants prefer chat, where tenants see their bill, pay by QR, report a repair with a photo, and read their lease. Owners get their own view of rent received, upcoming expiries, and the status of repairs on their units. It cuts the daily "is it paid yet?" and "who is fixing it?" messages for your staff.' },
    { icon: 'ti-chart-bar', title: 'Market Analytics Dashboards', desc: 'Dashboards that bring together your own sales and leasing data with market prices, so you can see price per square metre by area, how long units take to sell or rent, and which projects or unit types move fastest. Useful for developers setting launch prices and for investors comparing yields. We are clear about where each number comes from, and we do not present estimates as facts.' },
  ] : [
    { icon: 'ti-home-search', title: 'Property Listing & Search Platforms', desc: 'เว็บประกาศหรือ Marketplace ที่ค้นหาตรงกับวิธีที่คนไทยหาที่อยู่ ทั้งค้นตามสถานี BTS หรือ MRT ชื่อโครงการ ย่านโรงเรียน ช่วงราคา และจำนวนห้องนอน มีมุมมองแผนที่และบันทึกการค้นหาไว้ได้ นายหน้าและเจ้าของจัดการประกาศ รูป และข้อความสอบถามเองได้ เรารองรับเนื้อหาไทย-อังกฤษ รูปแบบที่อยู่ไทย และโหลดเร็วบนมือถือที่คนส่วนใหญ่ใช้ค้นหา' },
    { icon: 'ti-view-360', title: 'Virtual Tour & 3D Visualization Tools', desc: 'ทัวร์ 360 องศา แปลน 3 มิติ และการจัดห้องเสมือน ให้ผู้ซื้อเดินดูห้องได้ก่อนสร้างเสร็จ หรือดูจากต่างประเทศก็ได้ เหมาะกับคอนโดที่ยังไม่สร้างเสร็จ ลูกค้าต่างชาติ และคนที่ไม่ว่างอยากคัดตัวเลือกก่อนเสียวันเสาร์ไปดูห้องจริง เราฝังทัวร์ไว้ในหน้าประกาศ และดูได้ว่าคนใช้เวลากับห้องไหนนาน ทีมขายจะได้รู้ว่าควรคุยเรื่องอะไร' },
    { icon: 'ti-building-community', title: 'Property Management Systems', desc: 'ระบบหลังบ้านสำหรับเจ้าของห้องเช่า นิติบุคคลอาคารชุด และผู้ดูแลพอร์ตห้องเช่า ครอบคลุมข้อมูลยูนิตและสัญญา การออกบิลค่าเช่าและค่าส่วนกลาง ตั๋วแจ้งซ่อม จดมิเตอร์ และเช็กลิสต์ตรวจห้อง ผู้จัดการแต่ละตึกเห็นเฉพาะห้องของตัวเอง ส่วนเจ้าของเห็นภาพรวมห้องว่างและรายได้ทั้งพอร์ต เราสร้างใหม่หรือเชื่อมกับโปรแกรมบัญชีที่ใช้อยู่ก็ได้' },
    { icon: 'ti-signature', title: 'Digital Transaction & E-Signature Workflows', desc: 'ขั้นตอนที่พาลูกค้าไปทีละก้าว ตั้งแต่จอง อัปโหลดเอกสาร ทำสัญญา ไปจนถึงเซ็นอิเล็กทรอนิกส์ มีสถานะของผู้ซื้อหรือผู้เช่าแต่ละคน และแจ้งเตือนว่ายังขาดอะไร เงินจองจ่ายผ่าน PromptPay QR แล้วจับคู่กับดีลได้เลย เอกสารเก็บพร้อมบันทึกว่าใครเปิดดู ส่วนการโอนกรรมสิทธิ์ขั้นสุดท้ายยังต้องทำที่กรมที่ดิน เราจึงออกแบบให้ทุกฝ่ายพร้อมครบก่อนวันนั้น' },
    { icon: 'ti-users-group', title: 'Tenant & Landlord Portals', desc: 'พอร์ทัลบนเว็บ หรือหน้าบน LINE ถ้าผู้เช่าของคุณชอบคุยผ่านแชต ผู้เช่าดูบิล จ่ายด้วย QR แจ้งซ่อมพร้อมแนบรูป และเปิดสัญญาได้เอง ส่วนเจ้าของห้องมีหน้าจอของตัวเอง ดูค่าเช่าที่ได้รับ สัญญาที่ใกล้หมด และสถานะงานซ่อมของห้องตัวเอง ช่วยลดข้อความถามว่า "โอนแล้วหรือยัง" กับ "ใครมาซ่อม" ที่พนักงานต้องตอบทุกวัน' },
    { icon: 'ti-chart-bar', title: 'Market Analytics Dashboards', desc: 'แดชบอร์ดที่รวมข้อมูลขายและเช่าของคุณเข้ากับราคาตลาด ให้เห็นราคาต่อตารางเมตรแยกตามย่าน ห้องใช้เวลาขายหรือเช่านานแค่ไหน และโครงการหรือแบบห้องไหนขายเร็ว เหมาะกับผู้พัฒนาที่ต้องตั้งราคาเปิดขาย และนักลงทุนที่เทียบผลตอบแทน เราบอกชัดว่าตัวเลขแต่ละตัวมาจากไหน และไม่เอาตัวเลขประมาณการมาแสดงเหมือนข้อเท็จจริง' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Google Maps API', 'PostgreSQL', 'GraphQL', 'AWS', 'DocuSign API', 'Machine Learning', 'Redis', 'Elasticsearch', 'WebGL', 'Stripe', 'Flutter', 'Nuxt']

  const useCases = isEN ? [
    { no: '01', title: 'Property Listing Marketplace', desc: 'A listing site where buyers and renters filter by area, station, price, and unit type, view photos and tours, save searches, and message the agent directly or through LINE. Agents get a dashboard for their listings and enquiries, and admins can flag duplicate or outdated posts. Suited to brokerages, developers with several projects, and niche portals, for example serviced apartments or land.' },
    { no: '02', title: 'Virtual Tour Platform', desc: 'A tour platform for sales galleries and project websites. It combines 360-degree rooms, interactive floor plans with measurements, and optional furniture layouts so buyers can picture the space. The sales team can send a tour link in a LINE chat and see who opened it. Good for off-plan launches where the show unit is limited and for buyers abroad.' },
    { no: '03', title: 'Property Management System', desc: 'An operations system for a landlord or management company with many rooms. It handles leases, monthly rent and utility bills, payment matching from PromptPay transfers, repair tickets, inspection photos, and renewal reminders. Staff work from one list instead of a chat group, and owners receive a monthly summary they can read in a couple of minutes.' },
  ] : [
    { no: '01', title: 'Property Listing Marketplace', desc: 'เว็บประกาศที่ผู้ซื้อและผู้เช่ากรองตามย่าน สถานี ราคา และประเภทห้อง ดูรูปและทัวร์ บันทึกการค้นหา และส่งข้อความหานายหน้าได้โดยตรงหรือผ่าน LINE ฝั่งนายหน้ามีแดชบอร์ดจัดการประกาศและดูข้อความสอบถาม ส่วนแอดมินตรวจจับประกาศซ้ำหรือหมดอายุได้ เหมาะกับบริษัทนายหน้า ผู้พัฒนาที่มีหลายโครงการ และพอร์ทัลเฉพาะทาง เช่น เซอร์วิสอพาร์ตเมนต์หรือที่ดิน' },
    { no: '02', title: 'Virtual Tour Platform', desc: 'แพลตฟอร์มทัวร์สำหรับออฟฟิศขายและเว็บไซต์โครงการ รวมห้อง 360 องศา แปลนที่โต้ตอบได้พร้อมขนาด และตัวเลือกจัดเฟอร์นิเจอร์ให้ลูกค้าเห็นภาพ ทีมขายส่งลิงก์ทัวร์ทางแชต LINE แล้วดูได้ว่าใครเปิด เหมาะกับการเปิดขายโครงการที่ห้องตัวอย่างมีจำกัด และลูกค้าที่อยู่ต่างประเทศ' },
    { no: '03', title: 'Property Management System', desc: 'ระบบปฏิบัติการสำหรับเจ้าของหรือบริษัทที่ดูแลห้องจำนวนมาก จัดการสัญญา บิลค่าเช่าและค่าน้ำค่าไฟรายเดือน จับคู่ยอดโอนผ่าน PromptPay ตั๋วแจ้งซ่อม รูปตรวจห้อง และแจ้งเตือนต่อสัญญา พนักงานทำงานจากรายการเดียวแทนกลุ่มแชต และเจ้าของได้สรุปรายเดือนที่อ่านจบในไม่กี่นาที' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)', boxShadow: '0 30px 70px -20px rgba(90,78,212,0.45)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>Studio / Listing</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(83,195,215,0.14)', color: '#53C3D7' }}>{isEN ? 'For sale' : 'ขาย'}</span>
          </div>
        </div>
        <div className="p-4">
          {/* illustrated skyline photo */}
          <div className="relative rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16 / 10' }}>
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="re-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A2160" />
                  <stop offset="55%" stopColor="#6B4FD0" />
                  <stop offset="100%" stopColor="#F2A6C7" />
                </linearGradient>
                <linearGradient id="re-river" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B2E8F" />
                  <stop offset="100%" stopColor="#1A1440" />
                </linearGradient>
                <linearGradient id="re-tower" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A3BAA" />
                  <stop offset="100%" stopColor="#241B5E" />
                </linearGradient>
              </defs>
              <rect width="320" height="200" fill="url(#re-sky)" />
              <circle cx="250" cy="62" r="24" fill="#FFE9B8" opacity="0.9" />
              <circle cx="250" cy="62" r="40" fill="#FFE9B8" opacity="0.12" />
              <g fill="#2B2170" opacity="0.7">
                <rect x="10" y="100" width="30" height="70" /><rect x="44" y="84" width="24" height="86" /><rect x="236" y="96" width="28" height="74" /><rect x="268" y="110" width="40" height="60" />
              </g>
              <g>
                <rect x="84" y="46" width="52" height="124" rx="3" fill="url(#re-tower)" />
                <rect x="140" y="70" width="44" height="100" rx="3" fill="url(#re-tower)" />
                <rect x="188" y="30" width="40" height="140" rx="3" fill="url(#re-tower)" />
                <rect x="204" y="22" width="8" height="10" fill="#B8A9FA" />
              </g>
              <g fill="#FFE9B8">
                {[0,1,2,3,4,5,6,7,8,9,10,11].map((r) => [0,1,2].map((c) => (
                  <rect key={'a'+r+c} x={91 + c * 14} y={54 + r * 9.5} width="7" height="5" rx="1" opacity={(r * 3 + c * 5) % 4 === 0 ? 0.95 : (r + c) % 3 === 0 ? 0.55 : 0.12}>
                    {(r + c * 2) % 5 === 0 && <animate attributeName="opacity" values="0.15;0.95;0.15" dur={`${3 + ((r + c) % 3)}s`} repeatCount="indefinite" />}
                  </rect>
                )))}
                {[0,1,2,3,4,5,6,7].map((r) => [0,1,2].map((c) => (
                  <rect key={'b'+r+c} x={146 + c * 12} y={78 + r * 11} width="6" height="5" rx="1" opacity={(r * 2 + c) % 4 === 1 ? 0.9 : (r + c) % 3 === 0 ? 0.5 : 0.12} />
                )))}
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((r) => [0,1,2].map((c) => (
                  <rect key={'c'+r+c} x={195 + c * 11} y={38 + r * 9.8} width="6" height="5" rx="1" opacity={(r + c * 3) % 4 === 2 ? 0.95 : (r * c) % 3 === 1 ? 0.5 : 0.12} />
                )))}
              </g>
              <rect y="168" width="320" height="32" fill="url(#re-river)" />
              <g stroke="#B8A9FA" strokeWidth="1" opacity="0.35" strokeLinecap="round">
                <path d="M20 178h40M90 184h60M170 176h50M240 183h50" />
              </g>
              <g opacity="0.25" fill="#FFE9B8"><rect x="95" y="170" width="30" height="2" /><rect x="198" y="170" width="18" height="2" /></g>
            </svg>
            {/* location pin */}
            <div className="absolute" style={{ left: '34%', top: '16%', animation: 'iconFloat 3s ease-in-out infinite' }}>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px]" style={{ background: 'rgba(20,19,41,0.85)', color: '#fff', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)' }}>
                <i className="ti ti-map-pin" style={{ fontSize: 12, color: '#53C3D7' }} aria-hidden="true" />
                {isEN ? 'Near the BTS' : 'ใกล้รถไฟฟ้า'}
              </div>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(20,19,41,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <i className="ti ti-heart" style={{ fontSize: 15, color: '#F2A6C7' }} aria-hidden="true" />
            </div>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full" style={{ background: 'rgba(20,19,41,0.82)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, fontSize: '0.95rem', backdropFilter: 'blur(6px)' }}>฿6.9M</div>
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              <span className="w-5 h-1.5 rounded-full" style={{ background: '#fff' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.5)' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.5)' }} />
            </div>
          </div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.2 }}>Riverside Loft 12B</p>
              <p className="text-xs mt-1" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? 'Condo · Riverside' : 'คอนโด · ริมแม่น้ำ'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid rgb(var(--fg) / 0.08)' }}>
            {[
              { i: 'ti-bed', t: isEN ? '2 bed' : '2 ห้องนอน' },
              { i: 'ti-bath', t: isEN ? '2 bath' : '2 ห้องน้ำ' },
              { i: 'ti-ruler-2', t: isEN ? '88 sqm' : '88 ตร.ม.' },
            ].map((x) => (
              <span key={x.i} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgb(var(--fg) / 0.7)' }}>
                <i className={`ti ${x.i}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                {x.t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Virtual Tour' : 'ทัวร์เสมือนจริง'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-view-360" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '360° · Ready to view' : '360° · พร้อมเข้าชม'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Book Viewing →' : 'จองเข้าชม →'}
        </div>
      </div>
    </div>
  )

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
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Real' : 'อสังหา'}<br />{isEN ? 'Estate' : 'ริมทรัพย์'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgb(var(--fg) / 0.2)', color: 'var(--ink)', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'We build the software side of property: listing marketplaces, virtual tour platforms, rental and condo management systems, and online deal workflows. A typical project begins with one question, which is where a buyer or tenant waits on you today, whether for an answer from an agent, a document, or a repair. We then design around Thai realities such as LINE as the main chat channel, PromptPay for payments, Thai and English content, PDPA-safe handling of ID copies, and the fact that the Land Department transfer still happens in person. You get tools your sales and property teams can run daily, and customers who can see what is happening without chasing anyone.'
                : 'เราทำซอฟต์แวร์ฝั่งอสังหาริมทรัพย์ ทั้งเว็บประกาศขายและเช่า แพลตฟอร์มทัวร์เสมือนจริง ระบบดูแลห้องเช่าและคอนโด และขั้นตอนทำดีลออนไลน์ โปรเจกต์ส่วนใหญ่เริ่มจากคำถามเดียวว่าตอนนี้ลูกค้าต้องรอคุณตรงไหน จะเป็นคำตอบจากนายหน้า เอกสาร หรืองานซ่อมก็ตาม แล้วเราออกแบบให้เข้ากับความจริงของไทย ทั้ง LINE ที่เป็นช่องแชตหลัก PromptPay สำหรับจ่ายเงิน เนื้อหาไทย-อังกฤษ การเก็บสำเนาบัตรให้ปลอดภัยตาม PDPA และการโอนที่กรมที่ดินที่ยังต้องไปเอง ผลที่ได้คือเครื่องมือที่ทีมขายและทีมดูแลทรัพย์ใช้ได้ทุกวัน และลูกค้าที่เห็นความคืบหน้าเองโดยไม่ต้องตามใคร'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Four problems we see again and again with developers, brokers, and landlords in Thailand, and why they are harder than they look.'
                : 'สี่ปัญหาที่พบบ่อยกับผู้พัฒนาโครงการ นายหน้า และเจ้าของห้องเช่าในไทย และเหตุผลที่มันแก้ยากกว่าที่คิด'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                      <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                      <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgb(var(--fg) / 0.08)', background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgb(var(--fg) / 0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgb(var(--fg) / 0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'The systems we build for property teams, and what each one changes in your daily work.' : 'ระบบที่เราสร้างให้ทีมอสังหาฯ พร้อมอธิบายว่าแต่ละตัวช่วยเปลี่ยนงานประจำวันของคุณอย่างไร'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--accent-2)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Tools we pick for search, maps, documents, and payments because they are well documented and easy for your team to maintain.'
                : 'เครื่องมือที่เราเลือกใช้กับงานค้นหา แผนที่ เอกสาร และการชำระเงิน เพราะมีเอกสารครบ และทีมของคุณดูแลต่อได้ง่าย'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
                >
                  <TechGlyph name={tag} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Three typical projects, described by what gets built, who uses it, and what changes day to day.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ เล่าให้ฟังว่าสร้างอะไร ใครเป็นคนใช้ และงานประจำวันเปลี่ยนไปอย่างไร'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-final theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
              {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </h2>
            <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้เลยว่าคุณกำลังทำอะไรอยู่'}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
              >
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
