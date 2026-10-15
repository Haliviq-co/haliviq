import Link from 'next/link'
import TechGlyph from '@/components/TechGlyph'
import IndustryHero from '@/components/industry/IndustryHero'
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
  const title = isEN ? "Manufacturing & Industrials Software & Digital Solutions | Haliviq" : "การผลิตและอุตสาหกรรม | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Software that connects machines, quality checks, and supply data so plant managers see problems while there is still time to fix them."
    : "ซอฟต์แวร์ที่เชื่อมเครื่องจักร การตรวจคุณภาพ และข้อมูลซัพพลายเข้าด้วยกัน ให้ผู้จัดการโรงงานเห็นปัญหาตั้งแต่ยังแก้ทัน"
  const url = `https://www.haliviq.com/${params.lang}/industries/manufacturing`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Manufacturing & Industrials' : 'อุตสาหกรรม / การผลิตและอุตสาหกรรม'
  const heroSubhead = isEN
    ? 'Software that connects machines, quality checks, and supply data so plant managers see problems while there is still time to fix them.'
    : 'ซอฟต์แวร์ที่เชื่อมเครื่องจักร การตรวจคุณภาพ และข้อมูลซัพพลายเข้าด้วยกัน ให้ผู้จัดการโรงงานเห็นปัญหาตั้งแต่ยังแก้ทัน'

  const challenges = isEN ? [
    { icon: 'ti-activity', title: 'Supply Chain Volatility', desc: 'Plants depend on parts and materials that arrive from several countries, and a delayed shipment or a price jump can stop a line within days. Many teams only learn about a shortage when the warehouse runs out. We bring purchase orders, supplier confirmations, and stock levels into one view, with alerts when a delivery slips, so planners can reorder or reschedule while there is still time.' },
    { icon: 'ti-robot', title: 'Workforce & Automation Balance', desc: 'Factories want more automation, but they also depend on experienced operators who know each machine\'s quirks, and finding and keeping people is hard. Automation works best when it takes over repetitive recording and checking, not the judgment. We build tools that capture data without extra typing and give operators clear guidance on the screen, so new staff become productive sooner and veterans spend less time on paperwork.' },
    { icon: 'ti-circle-check', title: 'Quality Assurance at Scale', desc: 'Quality checks done on paper or at the end of the line find defects after hundreds of units have already been made. Export customers also ask for traceability: which batch, which machine, which operator, which material lot. We build in-line inspection records, batch tracing, and early-warning charts, so the team sees drift in a process before it becomes scrap and can answer a customer audit in minutes.' },
    { icon: 'ti-leaf', title: 'Sustainability Requirements', desc: 'Overseas buyers increasingly ask their suppliers for energy use, waste, and emissions data, and rising electricity cost makes the same numbers matter to your own margin. Most factories only have these figures as monthly totals from the utility bill. We install metering and reporting that attribute energy and scrap to a line, product, or shift, so you can see where it is going and prepare the reports customers ask for.' },
  ] : [
    { icon: 'ti-activity', title: 'ซัพพลายเชนที่ผันผวน', desc: 'โรงงานพึ่งพาชิ้นส่วนและวัตถุดิบที่มาจากหลายประเทศ ถ้าของล่าช้าหรือราคาพุ่ง ไลน์ผลิตอาจหยุดได้ภายในไม่กี่วัน หลายทีมกว่าจะรู้ว่าของขาดก็ตอนคลังหมดแล้ว เรารวมใบสั่งซื้อ การยืนยันจากซัพพลายเออร์ และระดับสต็อกไว้ในหน้าจอเดียว พร้อมแจ้งเตือนเมื่อของส่งช้า ฝ่ายวางแผนจะได้สั่งใหม่หรือเลื่อนแผนผลิตได้ทัน' },
    { icon: 'ti-robot', title: 'สมดุลระหว่างแรงงานกับระบบอัตโนมัติ', desc: 'โรงงานอยากได้ระบบอัตโนมัติมากขึ้น แต่ก็ยังพึ่งพนักงานที่ชำนาญและรู้นิสัยเครื่องแต่ละตัว ซึ่งหายากและรักษาไว้ได้ยาก ระบบอัตโนมัติทำงานได้ดีที่สุดเมื่อมารับงานบันทึกและตรวจซ้ำ ๆ ไม่ใช่งานที่ต้องใช้วิจารณญาณ เราสร้างเครื่องมือที่เก็บข้อมูลโดยไม่ต้องพิมพ์เพิ่ม และมีคำแนะนำชัดเจนบนหน้าจอ พนักงานใหม่จะเริ่มทำงานได้เร็วขึ้น ส่วนคนเก่งก็เสียเวลากับกระดาษน้อยลง' },
    { icon: 'ti-circle-check', title: 'รักษาคุณภาพเมื่อผลิตปริมาณมาก', desc: 'ถ้าตรวจคุณภาพด้วยกระดาษหรือตรวจตอนท้ายไลน์ กว่าจะพบของเสียก็ผลิตไปหลายร้อยชิ้นแล้ว ลูกค้าส่งออกยังขอการสืบย้อนกลับด้วยว่าเป็นล็อตไหน เครื่องไหน ใครทำ และใช้วัตถุดิบล็อตใด เราทำบันทึกตรวจระหว่างผลิต การสืบย้อนกลับรายล็อต และกราฟเตือนล่วงหน้า ทีมจะเห็นว่ากระบวนการเริ่มเพี้ยนก่อนจะกลายเป็นของเสีย และตอบการตรวจประเมินของลูกค้าได้ในไม่กี่นาที' },
    { icon: 'ti-leaf', title: 'ข้อกำหนดด้านความยั่งยืน', desc: 'ผู้ซื้อต่างประเทศถามหาข้อมูลการใช้พลังงาน ของเสีย และการปล่อยคาร์บอนจากซัพพลายเออร์มากขึ้น และค่าไฟที่สูงขึ้นก็ทำให้ตัวเลขชุดเดียวกันกระทบกำไรของคุณเองด้วย โรงงานส่วนใหญ่มีตัวเลขเหล่านี้แค่ยอดรวมรายเดือนจากบิลค่าไฟ เราติดตั้งการวัดและรายงานที่แยกพลังงานและของเสียตามไลน์ สินค้า หรือกะ คุณจะเห็นว่ามันหายไปที่ไหน และเตรียมรายงานที่ลูกค้าขอได้' },
  ]

  const metrics = [
    { value: '$525B', label: isEN ? 'Global Industrial IoT Market by 2028' : 'ขนาดตลาด Industrial IoT ทั่วโลกภายในปี 2028', source: 'Fortune Business Insights, 2024' },
    { value: '30%', label: isEN ? 'Maintenance Cost Reduction with Predictive Analytics' : 'ต้นทุนบำรุงรักษาที่ลดลงด้วย Predictive Analytics', source: 'Deloitte Industry 4.0 Report, 2024' },
    { value: '48%', label: isEN ? 'Manufacturers Implementing Digital Twin Technology' : 'ผู้ผลิตที่ใช้เทคโนโลยี Digital Twin', source: 'Gartner Manufacturing Survey, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-cpu', title: 'IoT Production Monitoring', desc: 'Sensors and gateways that read output, cycle time, temperature, vibration, and downtime from your machines, and display them on a live board for each line. Supervisors see which machine is stopped and why, and OEE-style figures are calculated automatically. Works with new machines and, through add-on sensors, with older ones that have no network connection.' },
    { icon: 'ti-tool', title: 'Predictive Maintenance Systems', desc: 'Models that watch vibration, temperature, and current draw and flag a machine that is drifting away from normal, so the maintenance team can plan a stop instead of reacting to a breakdown. We begin with the one or two assets whose failures cost the most, and show the alerts next to your maintenance history so you can judge whether they are worth trusting.' },
    { icon: 'ti-cube', title: 'Supply Chain Visibility', desc: 'A control view of purchase orders, inbound shipments, supplier lead times, and stock, across plants and warehouses. Planners can see which orders are at risk, which supplier is slipping, and what the shortage will do to production. Data is pulled from your ERP, including SAP, rather than re-keyed.' },
    { icon: 'ti-shield-check', title: 'Quality Management Systems', desc: 'Digital inspection plans, defect logging, corrective-action tracking, and batch traceability, linked to the line so a defect points back to the shift, machine, and material lot. Quality managers get trend charts and ready audit records. Photos and measurements can be attached from a phone at the station.' },
    { icon: 'ti-stack-2', title: 'Digital Twin Platforms', desc: 'A virtual model of a machine, line, or plant, fed by live data, where you can test a schedule change, a new layout, or a faster cycle time before touching the real equipment. We start with the narrow question you need to answer, such as where the bottleneck is, rather than trying to model the whole factory at once.' },
    { icon: 'ti-clipboard-list', title: 'Shop-Floor Apps & Digital Work Instructions', desc: 'Digital work instructions, checklists, and production reporting on tablets or phones at the line, replacing paper travellers and end-of-shift handwritten logs. Operators log output, downtime reasons, and scrap with a few taps, in Thai, and supervisors see the numbers while the shift is still running. We design the screens with the operators who will use them, because a form that is slow to fill in simply will not be filled in.' },
  ] : [
    { icon: 'ti-cpu', title: 'IoT Production Monitoring', desc: 'เซนเซอร์และเกตเวย์ที่อ่านยอดผลิต เวลาต่อรอบ อุณหภูมิ การสั่นสะเทือน และเวลาที่เครื่องหยุด แล้วแสดงบนบอร์ดสดของแต่ละไลน์ หัวหน้างานเห็นว่าเครื่องไหนหยุดเพราะอะไร และตัวเลขแบบ OEE ถูกคำนวณให้อัตโนมัติ ใช้ได้กับเครื่องใหม่ และกับเครื่องเก่าที่ไม่มีเครือข่ายก็ติดเซนเซอร์เสริมเพื่ออ่านค่าได้' },
    { icon: 'ti-tool', title: 'Predictive Maintenance Systems', desc: 'โมเดลที่เฝ้าดูการสั่นสะเทือน อุณหภูมิ และกระแสไฟของเครื่อง แล้วเตือนเมื่อเครื่องเริ่มเพี้ยนจากปกติ ทีมซ่อมบำรุงจะได้วางแผนหยุดเครื่องเอง ไม่ต้องรอให้เสียก่อนแล้วค่อยวิ่งแก้ เราเริ่มจากเครื่องหนึ่งถึงสองตัวที่เสียแล้วเสียหายหนักที่สุด และแสดงการแจ้งเตือนเทียบกับประวัติซ่อมของคุณ คุณจะตัดสินได้เองว่าเชื่อถือได้แค่ไหน' },
    { icon: 'ti-cube', title: 'Supply Chain Visibility', desc: 'หน้าจอควบคุมใบสั่งซื้อ ของที่กำลังส่งเข้า เวลานำส่งของซัพพลายเออร์ และสต็อก ข้ามหลายโรงงานและหลายคลัง ฝ่ายวางแผนเห็นว่าออเดอร์ไหนเสี่ยง ซัพพลายเออร์เจ้าไหนส่งช้าลง และของขาดจะกระทบการผลิตอย่างไร ข้อมูลดึงมาจาก ERP ของคุณรวมถึง SAP โดยไม่ต้องพิมพ์ซ้ำ' },
    { icon: 'ti-shield-check', title: 'Quality Management Systems', desc: 'แผนตรวจคุณภาพแบบดิจิทัล การบันทึกของเสีย การติดตามการแก้ไข และการสืบย้อนกลับรายล็อต เชื่อมกับไลน์ผลิต เมื่อพบของเสียก็ย้อนไปดูได้ว่ากะไหน เครื่องไหน วัตถุดิบล็อตไหน ผู้จัดการคุณภาพได้กราฟแนวโน้มและบันทึกที่พร้อมใช้ตอนถูกตรวจประเมิน ถ่ายรูปและแนบค่าที่วัดได้จากมือถือที่สถานีงานได้เลย' },
    { icon: 'ti-stack-2', title: 'Digital Twin Platforms', desc: 'แบบจำลองเสมือนของเครื่อง ไลน์ หรือทั้งโรงงานที่รับข้อมูลสดเข้ามา ใช้ลองเปลี่ยนตารางผลิต เลย์เอาต์ใหม่ หรือเวลาต่อรอบที่เร็วขึ้นได้ก่อนไปแตะเครื่องจริง เราเริ่มจากคำถามแคบ ๆ ที่คุณอยากได้คำตอบ เช่น คอขวดอยู่ตรงไหน ไม่ได้พยายามจำลองทั้งโรงงานในครั้งเดียว' },
    { icon: 'ti-clipboard-list', title: 'Shop-Floor Apps & Digital Work Instructions', desc: 'ใบสั่งงาน เช็กลิสต์ และการรายงานผลผลิตบนแท็บเล็ตหรือมือถือที่หน้าไลน์ แทนใบกำกับงานกระดาษและสมุดจดตอนท้ายกะ พนักงานบันทึกยอดผลิต สาเหตุที่เครื่องหยุด และของเสียได้ด้วยการแตะไม่กี่ครั้งเป็นภาษาไทย ส่วนหัวหน้างานเห็นตัวเลขตั้งแต่กะยังไม่จบ เราออกแบบหน้าจอร่วมกับคนที่จะใช้จริง เพราะฟอร์มที่กรอกช้าก็คือฟอร์มที่ไม่มีใครกรอก' },
  ]

  const techStack = ['IoT', 'MQTT', 'AWS IoT Core', 'Time Series DBs', 'Machine Learning', 'Edge Computing', 'Digital Twin', 'React', 'Python', 'Kafka', 'SAP Integration', 'Fastify', 'Electron']

  const useCases = isEN ? [
    { no: '01', title: 'Production Monitoring Dashboard', desc: 'A live board for each line showing output against target, current speed, downtime by reason, and scrap, readable from a screen on the floor and from a phone in the office. Operators tag the reason for a stop in two taps. After a few weeks, the data shows which three causes account for most lost time, which is usually where the first improvement project should go.' },
    { no: '02', title: 'Predictive Quality Analytics', desc: 'Analytics that connect process settings, material lots, and inspection results to find which combinations produce defects. Operators and quality staff see a warning when a process drifts toward the range where problems have appeared before. It begins with one product line and the data you already collect, and grows as more measurements are added.' },
    { no: '03', title: 'Supply Chain Control Tower', desc: 'A single dashboard for buyers and planners showing open purchase orders, supplier performance, stock cover in days, and shipments in transit. Risks are highlighted, such as a supplier delivering late three times in a row or a component with only a week of stock. It is built on top of your ERP data so you do not have to change how purchasing works.' },
  ] : [
    { no: '01', title: 'Production Monitoring Dashboard', desc: 'บอร์ดสดของแต่ละไลน์ แสดงยอดผลิตเทียบเป้า ความเร็วปัจจุบัน เวลาที่เครื่องหยุดแยกตามสาเหตุ และของเสีย ดูได้จากจอที่หน้าไลน์และจากมือถือในออฟฟิศ พนักงานระบุสาเหตุที่เครื่องหยุดได้ด้วยการแตะสองครั้ง พอผ่านไปสักสองสามสัปดาห์ ข้อมูลจะบอกว่าสามสาเหตุไหนทำให้เสียเวลามากที่สุด ซึ่งมักเป็นจุดที่ควรเริ่มโปรเจกต์ปรับปรุงงานแรก' },
    { no: '02', title: 'Predictive Quality Analytics', desc: 'ระบบวิเคราะห์ที่โยงค่าตั้งของกระบวนการ ล็อตวัตถุดิบ และผลตรวจ เพื่อหาว่าส่วนผสมแบบไหนทำให้เกิดของเสีย พนักงานและฝ่ายคุณภาพจะเห็นคำเตือนเมื่อกระบวนการเริ่มเลื่อนไปทางช่วงที่เคยมีปัญหา เริ่มจากไลน์สินค้าหนึ่งไลน์และข้อมูลที่คุณเก็บอยู่แล้ว แล้วค่อยขยายเมื่อมีการวัดค่าเพิ่ม' },
    { no: '03', title: 'Supply Chain Control Tower', desc: 'แดชบอร์ดเดียวสำหรับฝ่ายจัดซื้อและฝ่ายวางแผน แสดงใบสั่งซื้อที่ค้างอยู่ ผลงานของซัพพลายเออร์ สต็อกที่ใช้ได้กี่วัน และของที่กำลังขนส่ง จุดเสี่ยงจะถูกไฮไลต์ เช่น ซัพพลายเออร์ที่ส่งช้าสามครั้งติด หรือชิ้นส่วนที่เหลือสต็อกแค่สัปดาห์เดียว สร้างบนข้อมูล ERP ของคุณ จึงไม่ต้องเปลี่ยนวิธีทำงานของฝ่ายจัดซื้อ' },
  ]

  const heroVisual = <IndustryHero kind="manufacturing" isEN={isEN} />

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
                  {isEN ? 'Manufacturing &' : 'การผลิตและ'}<br />{isEN ? 'Industrials' : 'อุตสาหกรรม'}
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
                  ? 'We build monitoring, maintenance, quality, and supply chain software for manufacturers, from a single-line workshop to a multi-plant group. Our engineers connect to the equipment you already run through industrial protocols such as OPC-UA and MQTT, then turn raw machine signals into dashboards a supervisor can read at a glance. We spend time on the floor early in a project, watching how shifts hand over, where paper still lives, and which stoppages cost the most, because that decides what is worth building first. The result is data from the line reaching the office the same day, not at month end.'
                  : 'เราสร้างซอฟต์แวร์ติดตามการผลิต ซ่อมบำรุง คุณภาพ และซัพพลายเชนให้โรงงานตั้งแต่เวิร์กช็อปไลน์เดียวไปจนถึงกลุ่มที่มีหลายโรงงาน วิศวกรของเราเชื่อมกับเครื่องจักรที่คุณใช้อยู่ผ่านโปรโตคอลอุตสาหกรรมอย่าง OPC-UA และ MQTT แล้วแปลงสัญญาณดิบจากเครื่องให้เป็นแดชบอร์ดที่หัวหน้างานดูแวบเดียวก็เข้าใจ ช่วงต้นโปรเจกต์เราจะลงไปดูหน้างานจริง ดูว่าแต่ละกะส่งงานกันอย่างไร กระดาษยังอยู่ตรงไหน และเครื่องหยุดตรงไหนเสียเงินมากที่สุด เพราะสิ่งเหล่านี้ตัดสินว่าควรสร้างอะไรก่อน ผลที่ได้คือข้อมูลจากไลน์ถึงออฟฟิศภายในวันเดียวกัน ไม่ต้องรอปิดเดือน'}
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
                ? 'The pressures plant managers describe most often: unstable supply, a mix of people and automation, quality at volume, and sustainability asks from buyers.'
                : 'แรงกดดันที่ผู้จัดการโรงงานเล่าให้ฟังบ่อยที่สุด คือซัพพลายที่ไม่นิ่ง การผสมคนกับระบบอัตโนมัติ คุณภาพเมื่อผลิตมาก และข้อเรียกร้องด้านความยั่งยืนจากผู้ซื้อ'}
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
              {isEN ? 'What we build for factories, and what each system gives the operator, the maintenance team, and the plant manager.' : 'ระบบที่เราสร้างให้โรงงาน และสิ่งที่แต่ละระบบให้กับพนักงานหน้าไลน์ ทีมซ่อมบำรุง และผู้จัดการโรงงาน'}
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
                ? 'Industrial protocols, time-series storage, and cloud tools we use to bring machine data into usable software.'
                : 'โปรโตคอลอุตสาหกรรม ฐานข้อมูลอนุกรมเวลา และเครื่องมือคลาวด์ที่เราใช้เปลี่ยนข้อมูลจากเครื่องจักรให้กลายเป็นซอฟต์แวร์ที่ใช้งานได้'}
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
              {isEN ? 'Three typical manufacturing projects, with what gets built, who uses it, and what it changes on the floor.' : 'ตัวอย่างโปรเจกต์โรงงานทั่วไปสามแบบ ว่าสร้างอะไร ใครใช้ และเปลี่ยนอะไรบนหน้างาน'}
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
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังหน่อยว่าคุณกำลังทำอะไรอยู่'}
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
              <a href="mailto:info@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                info@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
