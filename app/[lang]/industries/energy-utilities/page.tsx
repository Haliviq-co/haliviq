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
  const title = isEN ? "Energy & Utilities Software & Digital Solutions | Haliviq" : "พลังงานและสาธารณูปโภค | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Smart-meter dashboards, grid and solar monitoring, outage response and billing systems for power, water and renewable-energy operators, built for…"
    : "แดชบอร์ด Smart Meter ระบบติดตามโครงข่ายและโซลาร์ ระบบรับมือไฟดับและคิดบิล สำหรับผู้ให้บริการไฟฟ้า น้ำประปา และพลังงานหมุนเวียน…"
  const url = `https://www.haliviq.com/${params.lang}/industries/energy-utilities`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Energy & Utilities' : 'อุตสาหกรรม / พลังงานและสาธารณูปโภค'
  const heroSubhead = isEN
    ? 'Smart-meter dashboards, grid and solar monitoring, outage response and billing systems for power, water and renewable-energy operators, built for control-room staff, field crews and customers.'
    : 'แดชบอร์ด Smart Meter ระบบติดตามโครงข่ายและโซลาร์ ระบบรับมือไฟดับและคิดบิล สำหรับผู้ให้บริการไฟฟ้า น้ำประปา และพลังงานหมุนเวียน สร้างให้ใช้ได้จริงทั้งกับเจ้าหน้าที่ห้องควบคุม ทีมช่างภาคสนาม และลูกค้า'

  const challenges = isEN ? [
    { icon: 'ti-building-factory', title: 'Ageing Grid Equipment', desc: 'Transformers, switchgear and meters that went in decades ago are now being asked to carry rooftop solar, EV chargers and higher air-conditioning load. Replacing them takes years and money, and the lights still have to stay on while it happens. We help you see which assets are most at risk from the data you already have, then plan upgrades in phases that do not interrupt supply.' },
    { icon: 'ti-solar-panel', title: 'Variable Solar and Wind Supply', desc: 'Solar output drops when clouds roll in and peaks at midday, while demand in Thai cities often peaks in the evening. Operators need short-term forecasts and clear views of how much generation is behind the meter. We build the forecasting and load-balancing screens around the decisions your control-room staff actually make each shift.' },
    { icon: 'ti-bolt-off', title: 'Slow Outage Detection', desc: 'In many areas an outage is still discovered when customers phone the call centre or post on social media. By then crews have lost time and customers are frustrated. Meter last-gasp signals, feeder sensors and customer reports can be combined to locate the fault faster, send crews to the right place and tell people when power is expected back.' },
    { icon: 'ti-file-certificate', title: 'Changing Regulation and Reporting', desc: 'Energy regulators, tariff structures and carbon-reporting requirements keep shifting, and each change means new reports and new evidence. Staff often rebuild these from spreadsheets every quarter. We keep one clean source of operating data with change history, so the report is a query rather than a project.' },
  ] : [
    { icon: 'ti-building-factory', title: 'อุปกรณ์โครงข่ายที่เก่าแล้ว', desc: 'หม้อแปลง สวิตช์เกียร์ และมิเตอร์ที่ติดตั้งมาหลายสิบปี ตอนนี้ต้องรับโซลาร์รูฟท็อป เครื่องชาร์จ EV และโหลดแอร์ที่สูงขึ้น การเปลี่ยนอุปกรณ์ใช้เวลาหลายปีและงบประมาณมาก แต่ระหว่างนั้นไฟก็ต้องไม่ดับ เราช่วยดูจากข้อมูลที่คุณมีอยู่แล้วว่าอุปกรณ์ตัวไหนเสี่ยงที่สุด แล้ววางแผนอัปเกรดทีละช่วงที่ไม่กระทบการจ่ายไฟ' },
    { icon: 'ti-solar-panel', title: 'ไฟจากโซลาร์และลมที่ไม่คงที่', desc: 'โซลาร์ผลิตได้น้อยลงเมื่อเมฆมา และสูงสุดช่วงเที่ยง ขณะที่การใช้ไฟในเมืองไทยมักพุ่งสูงตอนเย็น ผู้ปฏิบัติงานจึงต้องการการพยากรณ์ระยะสั้น และต้องเห็นว่ามีไฟที่ผลิตหลังมิเตอร์อยู่เท่าไหร่ เราสร้างหน้าจอพยากรณ์และสมดุลโหลดตามการตัดสินใจจริงที่เจ้าหน้าที่ห้องควบคุมต้องทำในแต่ละกะ' },
    { icon: 'ti-bolt-off', title: 'รู้ว่าไฟดับช้า', desc: 'หลายพื้นที่ยังรู้ว่าไฟดับตอนลูกค้าโทรเข้าคอลเซ็นเตอร์หรือโพสต์ในโซเชียล ซึ่งทีมช่างเสียเวลาไปแล้ว และลูกค้าก็หงุดหงิด สัญญาณจากมิเตอร์ เซนเซอร์บนสายป้อน และรายงานของลูกค้า เอามารวมกันเพื่อหาจุดเสียได้เร็วขึ้น ส่งช่างไปถูกที่ และบอกลูกค้าได้ว่าคาดว่าไฟจะกลับมาเมื่อไหร่' },
    { icon: 'ti-file-certificate', title: 'กฎระเบียบและรายงานที่เปลี่ยนอยู่เรื่อยๆ', desc: 'ผู้กำกับดูแลด้านพลังงาน โครงสร้างค่าไฟ และข้อกำหนดการรายงานคาร์บอนปรับเปลี่ยนอยู่เสมอ และทุกครั้งที่เปลี่ยนก็ต้องมีรายงานและหลักฐานชุดใหม่ เจ้าหน้าที่มักต้องรวบรวมจากสเปรดชีตใหม่ทุกไตรมาส เราทำให้มีแหล่งข้อมูลปฏิบัติการที่สะอาดแหล่งเดียวพร้อมประวัติการแก้ไข รายงานจึงเป็นแค่การดึงข้อมูล ไม่ใช่โปรเจกต์ใหม่ทุกรอบ' },
  ]

  const metrics = [
    { value: '$145B', label: isEN ? 'Global Smart Grid Market Size by 2030' : 'ขนาดตลาด Smart Grid ทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Smart Grid Report, 2024' },
    { value: '38%', label: isEN ? 'Growth in Global Renewable Generation Capacity' : 'การเติบโตของกำลังผลิตไฟฟ้าจากพลังงานหมุนเวียนทั่วโลก', source: 'IEA Renewables Outlook, 2024' },
    { value: '45%', label: isEN ? 'Reduction in Outage Duration with Predictive Analytics' : 'ระยะเวลาไฟฟ้าดับที่ลดลงเมื่อใช้ Predictive Analytics', source: 'Deloitte Power & Utilities Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-gauge', title: 'Smart Grid Monitoring Dashboards', desc: 'Live views of load, voltage and feeder status built from smart-meter and sensor data, for control-room operators and planning engineers. We design them for night shifts and large wall screens as much as for a laptop. Data is stored as time series so you can replay what happened before a fault.' },
    { icon: 'ti-battery', title: 'Solar & Battery Management Platforms', desc: 'Monitoring and scheduling for rooftop and ground-mounted solar and battery storage across many sites. Owners and operators see output, state of charge and faults in one place and decide when to charge or discharge. It suits factories, solar-rooftop providers and microgrid operators.' },
    { icon: 'ti-bell-ringing', title: 'Outage Reporting & Response Systems', desc: 'A system that groups outage signals, shows the likely fault area on a map, dispatches crews and sends updates to customers by SMS or LINE. Customers stop calling to ask what is happening, and dispatchers stop juggling radios and spreadsheets. We include a field app so crews can update status from the site.' },
    { icon: 'ti-receipt-2', title: 'Usage Analytics & Billing Platforms', desc: 'Billing and usage tools that read meter data, apply tariffs and produce bills and usage breakdowns customers can understand. Customers see when they use the most and what it costs; billing staff see fewer disputes. We pay close attention to estimated reads, corrections and edge cases in the tariff.' },
    { icon: 'ti-adjustments-horizontal', title: 'Demand-Response Optimization Tools', desc: 'Tools that signal customers or equipment to reduce or shift use during peak hours, with rewards or tariff signals. Industrial sites and large buildings can join with their own controls, and households through an app. We measure what was actually saved so payments are fair.' },
    { icon: 'ti-arrows-exchange', title: 'Energy Trading & Marketplace Systems', desc: 'Platforms that record energy exchanged between producers and buyers, settle the amounts and show transparent prices. They suit pilots of peer-to-peer trading among neighbouring buildings and certificate or credit trading. Rules on who may trade and at what price are configurable, because they depend on the regulatory sandbox you operate in.' },
  ] : [
    { icon: 'ti-gauge', title: 'Smart Grid Monitoring Dashboards', desc: 'หน้าจอแสดงโหลด แรงดัน และสถานะสายป้อนแบบสด จากข้อมูล Smart Meter และเซนเซอร์ สำหรับผู้ปฏิบัติงานห้องควบคุมและวิศวกรวางแผน เราออกแบบให้ใช้ได้ทั้งกะดึกและจอวิดีโอวอลล์ ไม่ใช่แค่บนแล็ปท็อป ข้อมูลเก็บเป็น Time Series เพื่อเปิดย้อนดูได้ว่าก่อนเกิดเหตุเกิดอะไรขึ้น' },
    { icon: 'ti-battery', title: 'Solar & Battery Management Platforms', desc: 'ระบบติดตามและตั้งตารางการทำงานของโซลาร์บนหลังคา โซลาร์ฟาร์ม และแบตเตอรี่ในหลายไซต์ เจ้าของและผู้ดูแลเห็นกำลังผลิต ระดับประจุ และข้อผิดพลาดในที่เดียว แล้วตัดสินใจได้ว่าจะชาร์จหรือจ่ายไฟตอนไหน เหมาะกับโรงงาน ผู้ให้บริการโซลาร์รูฟท็อป และผู้ดูแลไมโครกริด' },
    { icon: 'ti-bell-ringing', title: 'Outage Reporting & Response Systems', desc: 'ระบบที่รวมสัญญาณไฟดับ แสดงพื้นที่ที่น่าจะเสียบนแผนที่ ส่งทีมช่าง และแจ้งความคืบหน้าลูกค้าผ่าน SMS หรือ LINE ลูกค้าจะได้ไม่ต้องโทรถามว่าเกิดอะไรขึ้น และผู้สั่งงานไม่ต้องสลับระหว่างวิทยุกับสเปรดชีต เรามีแอปสำหรับช่างให้อัปเดตสถานะจากหน้างานด้วย' },
    { icon: 'ti-receipt-2', title: 'Usage Analytics & Billing Platforms', desc: 'เครื่องมือคิดบิลและวิเคราะห์การใช้ที่อ่านข้อมูลมิเตอร์ ใช้อัตราค่าไฟ และออกบิลกับสรุปการใช้ที่ลูกค้าอ่านเข้าใจ ลูกค้าเห็นว่าใช้ไฟมากช่วงไหนและเสียเงินเท่าไหร่ ส่วนเจ้าหน้าที่ก็เจอข้อโต้แย้งน้อยลง เราใส่ใจเรื่องการประมาณค่ามิเตอร์ การแก้ไขบิล และกรณีพิเศษของอัตราค่าไฟเป็นพิเศษ' },
    { icon: 'ti-adjustments-horizontal', title: 'Demand-Response Optimization Tools', desc: 'เครื่องมือที่ส่งสัญญาณให้ลูกค้าหรืออุปกรณ์ลดหรือเลื่อนการใช้ไฟช่วงพีค พร้อมรางวัลหรือสัญญาณค่าไฟ โรงงานและอาคารใหญ่เข้าร่วมผ่านระบบควบคุมของตัวเอง ส่วนครัวเรือนเข้าร่วมผ่านแอป เราวัดว่าประหยัดได้จริงเท่าไหร่ เพื่อให้การจ่ายผลตอบแทนเป็นธรรม' },
    { icon: 'ti-arrows-exchange', title: 'Energy Trading & Marketplace Systems', desc: 'แพลตฟอร์มที่บันทึกพลังงานที่แลกเปลี่ยนระหว่างผู้ผลิตกับผู้ซื้อ คำนวณยอดชำระ และแสดงราคาอย่างโปร่งใส เหมาะกับโครงการนำร่องซื้อขายไฟระหว่างอาคารใกล้กัน และการซื้อขายใบรับรองหรือเครดิต กฎว่าใครซื้อขายได้และราคาเท่าไหร่ปรับตั้งค่าได้ เพราะขึ้นกับกรอบกำกับดูแลที่คุณทำงานอยู่' },
  ]

  const techStack = ['IoT', 'MQTT', 'Time Series DBs', 'React', 'Node.js', 'Python', 'Machine Learning', 'AWS IoT Core', 'Kafka', 'PostgreSQL', 'GraphQL', 'Edge Computing', 'Grafana', 'Fastify']

  const useCases = isEN ? [
    { no: '01', title: 'Smart Grid Monitoring Dashboard', desc: 'A control-room dashboard that pulls telemetry from substations, feeders and smart meters into one live view with alarms and trend charts. Operators see where load is building and which feeder is misbehaving before customers call. We deliver the data pipeline, screens, alarm rules and training for the shift teams.' },
    { no: '02', title: 'Solar & Battery Management Platform', desc: 'A multi-site platform that shows production, battery state and faults for a portfolio of solar installations. Operators schedule charging around tariffs and weather forecasts, and owners get monthly performance reports. Sites are added with a standard connector kit so rollout stays predictable.' },
    { no: '03', title: 'Outage Response System', desc: 'An outage platform that clusters meter and customer signals, maps the affected area, sends the nearest crew and updates customers as repairs progress. Control-room staff get a clear view of open jobs, and customers get honest estimates. Post-event reports show how long each stage took so you can improve next time.' },
  ] : [
    { no: '01', title: 'Dashboard ติดตาม Smart Grid', desc: 'Dashboard สำหรับห้องควบคุม ที่ดึง Telemetry จากสถานีไฟฟ้า สายป้อน และ Smart Meter มาไว้ในหน้าเดียว มีแจ้งเตือนและกราฟแนวโน้ม ผู้ปฏิบัติงานเห็นว่าโหลดกำลังสูงตรงไหนและสายป้อนไหนผิดปกติก่อนที่ลูกค้าจะโทรมา เราส่งมอบ Data Pipeline หน้าจอ กฎแจ้งเตือน และอบรมทีมประจำกะ' },
    { no: '02', title: 'แพลตฟอร์มจัดการโซลาร์และแบตเตอรี่', desc: 'แพลตฟอร์มหลายไซต์ที่แสดงกำลังผลิต สถานะแบตเตอรี่ และข้อผิดพลาดของระบบโซลาร์ทั้งพอร์ต ผู้ดูแลตั้งเวลาชาร์จตามอัตราค่าไฟและพยากรณ์อากาศ ส่วนเจ้าของได้รายงานประสิทธิภาพรายเดือน เพิ่มไซต์ใหม่ด้วยชุดเชื่อมต่อมาตรฐาน การขยายงานจึงคาดการณ์ได้' },
    { no: '03', title: 'ระบบรับมือไฟดับ', desc: 'แพลตฟอร์มไฟดับที่จัดกลุ่มสัญญาณจากมิเตอร์และลูกค้า แสดงพื้นที่ที่ได้รับผลกระทบ ส่งทีมช่างที่ใกล้ที่สุด และแจ้งความคืบหน้าให้ลูกค้า เจ้าหน้าที่ห้องควบคุมเห็นงานที่ค้างอยู่ชัดเจน ส่วนลูกค้าได้เวลาประมาณที่ตรงไปตรงมา รายงานหลังเหตุการณ์แสดงว่าแต่ละขั้นใช้เวลาเท่าไหร่ เพื่อนำไปปรับปรุงครั้งต่อไป' },
  ]

  const heroVisual = <IndustryHero kind="energy-utilities" isEN={isEN} />

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
                  {isEN ? 'Energy &' : 'พลังงาน &'}<br />{isEN ? 'Utilities' : 'สาธารณูปโภค'}
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
                  ? 'We build software for power utilities, water providers, solar and battery operators and energy start-ups: monitoring dashboards, outage and field-crew tools, billing and usage portals. Projects start with the data you already collect from meters, SCADA and sensors, because what is reliably available decides what can be built. We design for control-room staff on long shifts and for field crews working with patchy signal, and we can host on-premise or in a Thai data centre where operational data may not leave the country.'
                  : 'เรารับสร้างซอฟต์แวร์ให้การไฟฟ้า ผู้ให้บริการน้ำประปา ผู้ดูแลโซลาร์และแบตเตอรี่ และสตาร์ทอัพด้านพลังงาน ตั้งแต่ Dashboard ติดตามระบบ เครื่องมือรับมือไฟดับและทีมภาคสนาม ไปจนถึงระบบบิลและพอร์ทัลดูการใช้ไฟ โปรเจกต์เริ่มจากข้อมูลที่คุณเก็บอยู่แล้วจากมิเตอร์ SCADA และเซนเซอร์ เพราะข้อมูลที่ได้มาอย่างน่าเชื่อถือเป็นตัวกำหนดว่าจะสร้างอะไรได้บ้าง เราออกแบบให้เหมาะกับเจ้าหน้าที่ห้องควบคุมที่ทำงานกะยาว และทีมภาคสนามที่สัญญาณไม่ค่อยดี และติดตั้งในองค์กรหรือใน Data Center ในไทยได้ ถ้าข้อมูลปฏิบัติการออกนอกประเทศไม่ได้'}
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
                ? 'The problems teams in this industry bring to us most often, and the ones we plan each project around.'
                : 'นี่คือปัญหาที่ทีมในอุตสาหกรรมนี้เล่าให้เราฟังบ่อยที่สุด และเป็นสิ่งที่เราใช้วางแผนแต่ละโปรเจกต์'}
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
              {isEN ? 'The kinds of systems we build for this industry, what each one does, and who it is for.' : 'ระบบที่เราสร้างและใช้งานได้จริง เพื่อแก้ปัญหาสำคัญของอุตสาหกรรมคุณ'}
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
                ? 'The tools and frameworks we reach for most often, chosen because they are stable, well documented and easy to find people to maintain.'
                : 'เครื่องมือและ Framework ที่เราเลือกใช้บ่อย เพราะเสถียร เอกสารครบ และหาคนมาดูแลต่อได้ง่าย'}
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
              {isEN ? 'Typical projects we take on in this industry, and what each one delivers.' : 'ตัวอย่างโปรเจกต์ที่เรารับทำในอุตสาหกรรมนี้ พร้อมสิ่งที่ลูกค้าจะได้รับ'}
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
              {isEN ? 'Tell us what you are building, and we will suggest where to start.' : 'เล่าให้เราฟังหน่อยว่าคุณกำลังทำอะไรอยู่ แล้วเราจะช่วยดูว่าควรเริ่มจากตรงไหน'}
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
