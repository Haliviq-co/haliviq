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
  const title = isEN ? "Automotive Software & Digital Solutions | Haliviq" : "ยานยนต์ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Connected-vehicle and mobility software for car makers, dealers and fleet operators: EV charging apps, telematics dashboards, service booking and predictive…"
    : "ซอฟต์แวร์รถยนต์เชื่อมต่ออินเทอร์เน็ตและบริการ Mobility สำหรับผู้ผลิตรถ ดีลเลอร์ และผู้ดูแลกองยานพาหนะ ตั้งแต่แอปชาร์จ EV แดชบอร์ด Telematics…"
  const url = `https://haliviq.com/${params.lang}/industries/automotive`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Automotive' : 'อุตสาหกรรม / ยานยนต์'
  const heroSubhead = isEN
    ? 'Connected-vehicle and mobility software for car makers, dealers and fleet operators: EV charging apps, telematics dashboards, service booking and predictive maintenance.'
    : 'ซอฟต์แวร์รถยนต์เชื่อมต่ออินเทอร์เน็ตและบริการ Mobility สำหรับผู้ผลิตรถ ดีลเลอร์ และผู้ดูแลกองยานพาหนะ ตั้งแต่แอปชาร์จ EV แดชบอร์ด Telematics ระบบจองคิวเข้าศูนย์ ไปจนถึงการวิเคราะห์เพื่อซ่อมบำรุงล่วงหน้า'

  const challenges = isEN ? [
    { icon: 'ti-plug', title: 'EV Charging Infrastructure Fragmentation', desc: 'Charging networks span dozens of hardware vendors and payment systems with no unified standard, so a driver may need several apps and accounts to charge on one trip. Operators, in turn, struggle to see all their stations in one view. We build a layer that speaks to each vendor\'s charger and presents one consistent experience.' },
    { icon: 'ti-shield-lock', title: 'Connected-Car Data Volume & Security', desc: 'Modern vehicles generate terabytes of telemetry per day, and securing that pipeline from the car to the cloud is as important as storing it. A weak link can expose location history or even vehicle controls. We design data collection with encryption, device identity and clear rules about who may see what, and we plan storage so that costs do not grow out of control.' },
    { icon: 'ti-tool', title: 'Dealer & Service Network Experience Gaps', desc: 'Dealers and service centres often run separate systems for sales, scheduling, parts and warranty, so customers repeat their details at every counter. Booking a service slot can still mean a phone call or a LINE message to a staff member. We link these systems and give customers a booking and status experience that matches what they get from other apps.' },
    { icon: 'ti-cpu', title: 'Software-Defined-Vehicle Complexity', desc: 'As vehicles move from hardware-defined to software-defined designs, makers have to manage over-the-air updates, feature activation and many software versions across models and markets. A single mistake in a release can affect thousands of cars. We help set up release pipelines, version tracking and rollback so that updates stay controlled.' },
  ] : [
    { icon: 'ti-plug', title: 'เครือข่ายสถานีชาร์จ EV กระจัดกระจาย', desc: 'เครือข่ายสถานีชาร์จใช้เครื่องจากผู้ผลิตหลายสิบราย และระบบจ่ายเงินที่ไม่มีมาตรฐานกลาง คนขับจึงอาจต้องมีหลายแอปหลายบัญชีเพื่อชาร์จในทริปเดียว ฝั่งผู้ให้บริการเองก็ดูสถานีทั้งหมดในหน้าจอเดียวไม่ได้ เราสร้างชั้นกลางที่คุยกับเครื่องชาร์จของแต่ละยี่ห้อ แล้วแสดงผลเป็นประสบการณ์เดียวกันให้ผู้ใช้' },
    { icon: 'ti-shield-lock', title: 'ข้อมูลและความปลอดภัยของรถเชื่อมต่อ', desc: 'รถยุคใหม่สร้างข้อมูล Telemetry ระดับเทราไบต์ต่อวัน และการรักษาความปลอดภัยของท่อข้อมูลจากตัวรถขึ้น Cloud สำคัญไม่น้อยกว่าการเก็บข้อมูล จุดอ่อนจุดเดียวอาจทำให้ประวัติตำแหน่งหรือแม้แต่ระบบควบคุมรถรั่วไหลได้ เราออกแบบการเก็บข้อมูลด้วยการเข้ารหัส การยืนยันตัวตนของอุปกรณ์ และกติกาที่ชัดว่าใครดูอะไรได้ พร้อมวางแผนที่เก็บข้อมูลไม่ให้ค่าใช้จ่ายบานปลาย' },
    { icon: 'ti-tool', title: 'ประสบการณ์ของดีลเลอร์และศูนย์บริการยังไม่เชื่อมกัน', desc: 'ดีลเลอร์และศูนย์บริการหลายแห่งยังแยกระบบขาย นัดหมาย อะไหล่ และรับประกัน ลูกค้าจึงต้องบอกข้อมูลเดิมซ้ำทุกเคาน์เตอร์ และการจองคิวซ่อมบางที่ก็ยังต้องโทรหรือทัก LINE หาพนักงาน เราเชื่อมระบบเหล่านี้เข้าด้วยกัน และทำให้ลูกค้าจองคิวและดูสถานะงานได้สะดวกเหมือนแอปอื่นที่ใช้อยู่' },
    { icon: 'ti-cpu', title: 'ความซับซ้อนของรถที่ซอฟต์แวร์เป็นตัวกำหนด', desc: 'เมื่อรถเปลี่ยนจากการกำหนดด้วยฮาร์ดแวร์ไปเป็นการกำหนดด้วยซอฟต์แวร์ ผู้ผลิตต้องจัดการการอัปเดตแบบ Over-the-air การเปิดฟีเจอร์ และซอฟต์แวร์หลายเวอร์ชันข้ามรุ่นและตลาด ความผิดพลาดครั้งเดียวในการปล่อยเวอร์ชันอาจกระทบรถนับพันคัน เราช่วยวางระบบปล่อยเวอร์ชัน การติดตามเวอร์ชัน และการย้อนกลับ เพื่อให้การอัปเดตอยู่ในการควบคุม' },
  ]

  const metrics = [
    { value: '$285B', label: isEN ? 'Global Connected Car Market Size by 2030' : 'ขนาดตลาดรถยนต์เชื่อมต่ออินเทอร์เน็ตทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Connected Car Market Report, 2024' },
    { value: '26%', label: isEN ? 'Projected Annual Growth in Global EV Adoption' : 'อัตราการเติบโตต่อปีที่คาดการณ์ของการใช้รถ EV ทั่วโลก', source: 'IEA Global EV Outlook, 2024' },
    { value: '20%', label: isEN ? 'Cost Savings from Telematics-Driven Fleet Management' : 'ต้นทุนที่ประหยัดได้จากการบริหารกองยานด้วย Telematics', source: 'Deloitte Future of Mobility Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-bolt', title: 'EV Charging Network Apps', desc: 'Apps for drivers and operators that bring together station search, real-time availability, reservation, charging status and payment. Drivers see which chargers are free and what they will pay before they arrive, and operators see uptime and faults per station. Payment can include PromptPay QR and card options, and the app supports Thai and English.' },
    { icon: 'ti-truck', title: 'Fleet Management Platforms', desc: 'A platform for businesses that run vans, trucks, buses or company cars, covering route planning, driver behaviour scoring, fuel and energy use, and service schedules. Dispatchers see every vehicle on a live map, and managers get monthly cost per vehicle. It works with common GPS trackers and OBD devices, so you can often keep the hardware you own.' },
    { icon: 'ti-dashboard', title: 'Connected-Car Telematics Dashboards', desc: 'Live dashboards that take vehicle telemetry and turn it into diagnostics, location, usage patterns and battery health. Engineers use them to investigate faults, and product teams use them to see which features people actually use. We handle the ingestion pipeline and storage so the dashboards stay fast as the fleet grows.' },
    { icon: 'ti-calendar-event', title: 'Dealer & Service Booking Systems', desc: 'Scheduling and workshop-management software that links dealers, service bays, parts and customers. Customers book online or through LINE, receive reminders and approve extra repairs from their phone, while advisers see bay capacity and parts availability. The aim is fewer no-shows, less waiting, and a clear record of every job.' },
    { icon: 'ti-steering-wheel', title: 'In-Car UX & Infotainment Software', desc: 'Infotainment and HMI software built for automotive constraints: glanceable screens, large touch targets, voice input and quick start-up. We test designs for distraction and readability, including Thai text rendering and place-name search. Teams can use it as a full system or as a companion app that mirrors the car on a phone.' },
    { icon: 'ti-chart-dots', title: 'Predictive Vehicle-Maintenance Analytics', desc: 'Models that study sensor and service history to predict which component is likely to fail and when. Workshops can order parts and book the customer in before the breakdown, and fleet managers avoid unplanned downtime. We validate predictions against your historical repair records before they go live, so you know how much to trust them.' },
  ] : [
    { icon: 'ti-bolt', title: 'แอปสถานีชาร์จ EV', desc: 'แอปสำหรับคนขับและผู้ให้บริการที่รวมการค้นหาสถานี สถานะว่างแบบเรียลไทม์ การจอง สถานะการชาร์จ และการจ่ายเงินไว้ด้วยกัน คนขับรู้ก่อนไปถึงว่าเครื่องไหนว่างและต้องจ่ายเท่าไหร่ ส่วนผู้ให้บริการเห็นเวลาออนไลน์และปัญหาของแต่ละสถานี จ่ายเงินได้ทั้ง PromptPay QR และบัตร และรองรับทั้งภาษาไทยและอังกฤษ' },
    { icon: 'ti-truck', title: 'แพลตฟอร์มจัดการกองยานพาหนะ', desc: 'แพลตฟอร์มสำหรับธุรกิจที่มีรถตู้ รถบรรทุก รถบัส หรือรถบริษัท ครอบคลุมการวางเส้นทาง การให้คะแนนพฤติกรรมการขับ การใช้น้ำมันและพลังงาน และตารางซ่อมบำรุง ผู้ควบคุมงานเห็นรถทุกคันบนแผนที่สด ส่วนผู้บริหารเห็นต้นทุนต่อคันรายเดือน ใช้ร่วมกับเครื่อง GPS และอุปกรณ์ OBD ทั่วไปได้ จึงมักใช้ฮาร์ดแวร์ที่มีอยู่ต่อได้' },
    { icon: 'ti-dashboard', title: 'แดชบอร์ด Telematics ของรถเชื่อมต่ออินเทอร์เน็ต', desc: 'แดชบอร์ดสดที่รับข้อมูล Telemetry จากรถ แล้วแสดงเป็นผลวินิจฉัย ตำแหน่ง รูปแบบการใช้งาน และสุขภาพแบตเตอรี่ วิศวกรใช้ไล่หาสาเหตุของปัญหา ส่วนทีมผลิตภัณฑ์ใช้ดูว่าฟีเจอร์ไหนมีคนใช้จริง เราดูแลทั้งท่อรับข้อมูลและที่เก็บข้อมูล เพื่อให้แดชบอร์ดยังเร็วเมื่อจำนวนรถเพิ่มขึ้น' },
    { icon: 'ti-calendar-event', title: 'ระบบจองคิวและบริหารศูนย์บริการ', desc: 'ซอฟต์แวร์นัดหมายและบริหารอู่ที่เชื่อมดีลเลอร์ ช่องซ่อม อะไหล่ และลูกค้าเข้าด้วยกัน ลูกค้าจองผ่านเว็บหรือ LINE ได้ รับแจ้งเตือนล่วงหน้า และกดอนุมัติงานซ่อมเพิ่มจากมือถือ ส่วนที่ปรึกษาบริการเห็นว่าช่องซ่อมและอะไหล่พร้อมแค่ไหน เป้าหมายคือคนผิดนัดน้อยลง รอน้อยลง และมีบันทึกชัดเจนของทุกงาน' },
    { icon: 'ti-steering-wheel', title: 'ซอฟต์แวร์ In-Car UX และ Infotainment', desc: 'ซอฟต์แวร์ Infotainment และ HMI ที่ออกแบบตามข้อจำกัดของงานยานยนต์ คือหน้าจอที่มองปราดเดียวเข้าใจ ปุ่มกดใหญ่ สั่งงานด้วยเสียง และเปิดติดเร็ว เราทดสอบการออกแบบเรื่องการเบี่ยงเบนความสนใจและความชัดของตัวอักษร รวมถึงการแสดงผลภาษาไทยและการค้นหาชื่อสถานที่ ใช้เป็นระบบเต็มรูปแบบหรือเป็นแอปคู่ที่สะท้อนสถานะรถบนมือถือก็ได้' },
    { icon: 'ti-chart-dots', title: 'วิเคราะห์เพื่อซ่อมบำรุงรถล่วงหน้า', desc: 'โมเดลที่ศึกษาข้อมูลเซนเซอร์และประวัติการซ่อม เพื่อทำนายว่าชิ้นส่วนไหนมีแนวโน้มเสียและเมื่อไหร่ ศูนย์ซ่อมสั่งอะไหล่และนัดลูกค้าเข้ามาก่อนรถเสียได้ ส่วนผู้จัดการกองรถก็ลดเวลารถหยุดนอกแผน เราตรวจสอบผลทำนายเทียบกับประวัติซ่อมจริงของคุณก่อนใช้งานจริง คุณจึงรู้ว่าควรเชื่อถือมากแค่ไหน' },
  ]

  const techStack = ['React', 'React Native', 'IoT', 'MQTT', 'Kubernetes', 'AWS', 'PostgreSQL', 'GraphQL', 'Machine Learning', 'Edge Computing', 'gRPC', 'Digital Twin', 'TimescaleDB', 'Flutter', 'Fastify']

  const useCases = isEN ? [
    { no: '01', title: 'EV Charging Network App', desc: 'A mobile app that lets drivers find, reserve and pay for charging across several networks in one place. It shows live availability and pricing, guides them to the station, and keeps one receipt history. Deliverables cover the mobile apps, operator back office, charger integrations and payment setup.' },
    { no: '02', title: 'Fleet Telematics Dashboard', desc: 'A live operations dashboard that brings together vehicle location, driver behaviour and energy or fuel use. Dispatchers react to delays on the day, while managers review weekly and monthly trends to cut idle time and cost. It can start with a few vehicles and grow to the whole fleet.' },
    { no: '03', title: 'Predictive Maintenance Platform', desc: 'A sensor-driven platform that flags at-risk components before they fail and proposes a service slot. Fleet teams see a ranked list of vehicles to inspect, and workshops get parts requirements in advance. We begin with one component type, such as batteries or brakes, then widen the scope as the predictions prove useful.' },
  ] : [
    { no: '01', title: 'แอปชาร์จ EV ข้ามเครือข่าย', desc: 'แอปมือถือที่ให้คนขับค้นหา จอง และจ่ายค่าชาร์จข้ามหลายเครือข่ายในที่เดียว แสดงสถานะว่างและราคาแบบสด นำทางไปสถานี และเก็บประวัติใบเสร็จไว้ที่เดียว งานที่ส่งมอบรวมแอปมือถือ ระบบหลังบ้านของผู้ให้บริการ การเชื่อมเครื่องชาร์จ และการตั้งค่าการชำระเงิน' },
    { no: '02', title: 'แดชบอร์ด Telematics สำหรับกองรถ', desc: 'แดชบอร์ดปฏิบัติการสดที่รวมตำแหน่งรถ พฤติกรรมคนขับ และการใช้พลังงานหรือน้ำมันไว้ด้วยกัน ผู้ควบคุมงานจัดการเรื่องล่าช้าได้ทันทีในวันนั้น ส่วนผู้บริหารดูแนวโน้มรายสัปดาห์และรายเดือนเพื่อลดเวลารถจอดเปล่าและลดต้นทุน เริ่มจากรถไม่กี่คันแล้วขยายเป็นทั้งกองได้' },
    { no: '03', title: 'แพลตฟอร์มซ่อมบำรุงล่วงหน้า', desc: 'แพลตฟอร์มที่ใช้ข้อมูลเซนเซอร์เตือนชิ้นส่วนเสี่ยงก่อนเสียจริง และเสนอช่วงเวลาเข้าซ่อม ทีมกองรถเห็นรายการรถที่ควรตรวจเรียงตามความเสี่ยง และศูนย์ซ่อมรู้ล่วงหน้าว่าต้องใช้อะไหล่อะไร เราเริ่มจากชิ้นส่วนประเภทเดียว เช่น แบตเตอรี่หรือเบรก แล้วขยายขอบเขตเมื่อผลทำนายพิสูจน์แล้วว่ามีประโยชน์' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Drive' : 'Studio / Drive'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M15 45 L20 30 Q24 24 32 24 L92 24 Q100 24 104 30 L109 45" stroke="var(--purple-light)" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="10" y="45" width="104" height="14" rx="6" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <circle cx="32" cy="59" r="7" stroke="var(--lime)" strokeWidth="2" fill="#141329" />
              <circle cx="92" cy="59" r="7" stroke="var(--lime)" strokeWidth="2" fill="#141329" />
              <path d="M60 30 L54 40 L62 40 L56 50" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Vehicle Status' : 'สถานะยานพาหนะ'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? 'Charging · 78% · 22 min left' : 'กำลังชาร์จ · 78% · เหลือ 22 นาที'}</p>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Charging Session' : 'เซสชันชาร์จ'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-plug" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? 'Station B4 · 150 kW' : 'สถานี B4 · 150 กิโลวัตต์'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Details →' : 'ดูรายละเอียด →'}
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
                  {isEN ? 'Automotive &' : 'ยานยนต์ &'}<br />{isEN ? 'Mobility' : 'โมบิลิตี้'}
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
                  ? 'Cars have turned into software on wheels, and the people around them (drivers, dealers, fleet managers, charging operators) now expect apps that work as well as the ones on their phones. We build EV charging apps, fleet management platforms, connected-car telematics dashboards, dealer and service booking systems, and predictive maintenance tools. Thailand is a major vehicle-manufacturing base with a fast-growing EV market, so our designs allow for Thai-language apps, LINE-based notifications, PromptPay payments and the mix of hardware vendors that local fleets and charging networks actually run. We work with your engineering and product teams on data pipelines that cope with constant sensor traffic, and on interfaces that stay simple for a driver at a charging bay.'
                  : 'รถยนต์ทุกวันนี้เป็นเหมือนซอฟต์แวร์ที่มีล้อ และคนรอบตัวรถ ไม่ว่าจะเป็นคนขับ ดีลเลอร์ ผู้จัดการกองรถ หรือผู้ให้บริการสถานีชาร์จ ก็คาดหวังแอปที่ใช้ง่ายเท่าแอปในมือถือ เรารับสร้างแอปชาร์จ EV แพลตฟอร์มจัดการกองรถ แดชบอร์ด Telematics ของรถเชื่อมต่ออินเทอร์เน็ต ระบบจองคิวเข้าศูนย์บริการและดีลเลอร์ และเครื่องมือวิเคราะห์เพื่อซ่อมบำรุงล่วงหน้า ประเทศไทยเป็นฐานผลิตยานยนต์รายใหญ่และตลาด EV กำลังโตเร็ว เราจึงออกแบบให้รองรับแอปภาษาไทย การแจ้งเตือนผ่าน LINE การจ่ายเงินด้วย PromptPay และอุปกรณ์หลายยี่ห้อที่กองรถและเครือข่ายสถานีชาร์จในไทยใช้งานจริง เราทำงานร่วมกับทีมวิศวกรรมและทีมผลิตภัณฑ์ของคุณ ทั้งเรื่อง Data Pipeline ที่รับข้อมูลเซนเซอร์ไหลเข้าตลอดเวลาได้ และหน้าจอที่เรียบง่ายพอให้คนขับใช้ได้ตอนยืนอยู่หน้าเครื่องชาร์จ'}
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
              {isEN ? 'The kinds of systems we build for this industry, what each one does, and who it is for.' : 'ระบบที่เรารับทำให้อุตสาหกรรมนี้ ว่าแต่ละอย่างทำอะไรได้ และเหมาะกับใครบ้าง'}
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
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
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
