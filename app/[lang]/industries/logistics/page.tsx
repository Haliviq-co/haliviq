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
  const title = isEN ? "Transportation & Logistics Software & Digital Solutions | Haliviq" : "คมนาคมและโลจิสติกส์ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Tracking, routing, and warehouse software for carriers, 3PLs, and shippers who are tired of chasing shipment status by phone and spreadsheet."
    : "ซอฟต์แวร์ติดตามพัสดุ วางเส้นทาง และจัดการคลังสินค้า สำหรับบริษัทขนส่ง 3PL และผู้ส่งสินค้าที่เบื่อการนั่งตามสถานะของด้วยโทรศัพท์และสเปรดชีต"
  const url = `https://www.haliviq.com/${params.lang}/industries/logistics`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Transportation & Logistics' : 'อุตสาหกรรม / คมนาคมและโลจิสติกส์'
  const heroSubhead = isEN
    ? 'Tracking, routing, and warehouse software for carriers, 3PLs, and shippers who are tired of chasing shipment status by phone and spreadsheet.'
    : 'ซอฟต์แวร์ติดตามพัสดุ วางเส้นทาง และจัดการคลังสินค้า สำหรับบริษัทขนส่ง 3PL และผู้ส่งสินค้าที่เบื่อการนั่งตามสถานะของด้วยโทรศัพท์และสเปรดชีต'

  const challenges = isEN ? [
    { icon: 'ti-truck-delivery', title: 'Last-Mile Delivery Cost Pressure', desc: 'Delivery to the customer\'s door is usually the most expensive leg of the trip, and costs go up with fuel, driver wages, and the online shopper\'s habit of expecting free or same-day shipping. Dense cities like Bangkok add traffic, narrow sois, and failed first attempts that mean a second run. Better stop sequencing, delivery time windows customers can trust, and a way to reschedule from a LINE message all cut cost per parcel without touching service quality.' },
    { icon: 'ti-radar', title: 'Real-Time Visibility Gaps', desc: 'Shippers, carriers, and customers each want to know where a shipment is right now, but tracking data is often spread across a GPS provider, a carrier\'s website, and a driver\'s phone call. Multi-leg journeys, such as truck to hub to last-mile rider, leave blind spots in between. We pull these sources into one status view with clear milestones, so customer service answers in seconds and exceptions are flagged before the customer notices.' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Capacity & Labor Volatility', desc: 'Volume swings with campaigns like 11.11 and 12.12, month-end billing cycles, and harvest or holiday peaks. At the same time, warehouse labour is hard to find and storage space is costly. Planning shifts, dock slots, and floor space without a forecast means either paying for idle people or running behind on orders. We build planning views based on your own order history, plus WMS flows that make a new temporary picker productive on day one.' },
    { icon: 'ti-plug-connected', title: 'Fragmented Multi-Carrier Integrations', desc: 'A shipper in Thailand may work with a dozen carriers, each with a different API, tracking format, label size, and service promise. Custom connections to each one break when the carrier changes something, and adding the next carrier takes weeks. We build one integration layer that translates all of them into a single format, so your team adds or swaps a carrier without touching the rest of the system.' },
  ] : [
    { icon: 'ti-truck-delivery', title: 'แรงกดดันด้านต้นทุนการส่งช่วงสุดท้าย', desc: 'การส่งถึงหน้าบ้านลูกค้ามักเป็นช่วงที่แพงที่สุดของทั้งเส้นทาง และยิ่งแพงขึ้นตามราคาน้ำมัน ค่าแรงคนขับ และนิสัยคนซื้อออนไลน์ที่คาดหวังส่งฟรีหรือส่งวันเดียวถึง เมืองหนาแน่นอย่างกรุงเทพฯ เพิ่มทั้งรถติด ซอยแคบ และการส่งครั้งแรกไม่สำเร็จจนต้องออกรอบสอง ถ้าเรียงลำดับจุดส่งให้ดีขึ้น ให้ช่วงเวลาส่งที่ลูกค้าเชื่อถือได้ และให้ลูกค้านัดส่งใหม่ผ่านข้อความ LINE ต้นทุนต่อชิ้นก็ลดลงโดยที่บริการไม่แย่ลง' },
    { icon: 'ti-radar', title: 'มองไม่เห็นสถานะสินค้าแบบเรียลไทม์', desc: 'ทั้งผู้ส่ง ผู้ขนส่ง และลูกค้า อยากรู้ว่าของอยู่ตรงไหนตอนนี้ แต่ข้อมูลติดตามมักกระจายอยู่ที่ผู้ให้บริการ GPS เว็บไซต์ของผู้ขนส่ง และโทรศัพท์ที่คุยกับคนขับ เส้นทางที่ต่อหลายช่วง เช่น รถบรรทุกไปศูนย์กระจาย แล้วต่อไรเดอร์ส่งช่วงสุดท้าย จะมีจุดบอดระหว่างทาง เราดึงข้อมูลเหล่านี้มารวมเป็นหน้าสถานะเดียวที่มีหมุดเวลาชัดเจน ฝ่ายบริการลูกค้าตอบได้ในไม่กี่วินาที และเห็นงานที่มีปัญหาก่อนลูกค้าจะรู้' },
    { icon: 'ti-building-warehouse', title: 'กำลังรับของในคลังและแรงงานไม่แน่นอน', desc: 'ปริมาณงานขึ้นลงตามแคมเปญอย่าง 11.11 และ 12.12 รอบวางบิลสิ้นเดือน และช่วงเก็บเกี่ยวหรือเทศกาล ขณะเดียวกันแรงงานคลังก็หายาก และค่าพื้นที่เก็บของก็สูงขึ้น ถ้าวางแผนกะ คิวจอดรถที่ท่า และพื้นที่คลังโดยไม่มีตัวพยากรณ์ ก็จะจ่ายค่าแรงให้คนว่าง หรือไม่ก็ทำออเดอร์ไม่ทัน เราทำหน้าจอวางแผนจากประวัติออเดอร์ของคุณเอง และขั้นตอนใน WMS ที่ทำให้พนักงานหยิบของชั่วคราวคนใหม่ทำงานได้ตั้งแต่วันแรก' },
    { icon: 'ti-plug-connected', title: 'เชื่อมต่อผู้ขนส่งหลายรายที่กระจัดกระจาย', desc: 'ผู้ส่งในไทยอาจทำงานกับผู้ขนส่งเป็นสิบราย แต่ละรายมี API รูปแบบสถานะ ขนาดใบปะหน้า และคำสัญญาด้านบริการไม่เหมือนกัน ถ้าต่อแบบเขียนเฉพาะรายทีละราย พอผู้ขนส่งเปลี่ยนอะไรสักอย่างก็พัง และการเพิ่มเจ้าถัดไปใช้เวลาเป็นสัปดาห์ เราทำชั้นเชื่อมต่อกลางที่แปลงทุกเจ้าให้เป็นรูปแบบเดียว ทีมคุณเพิ่มหรือเปลี่ยนผู้ขนส่งได้โดยไม่ต้องไปแตะส่วนอื่นของระบบ' },
  ]

  const metrics = [
    { value: '$47.9B', label: isEN ? 'Global Supply Chain Tech Market by 2032' : 'ตลาดเทคโนโลยีซัพพลายเชนทั่วโลกภายในปี 2032', source: 'Fortune Business Insights Supply Chain Management Software Report, 2024' },
    { value: '25%', label: isEN ? 'Reduction in Last-Mile Delivery Costs Through Route Optimization' : 'ลดต้นทุนการส่งช่วงสุดท้ายด้วยการวางเส้นทางที่ดีขึ้น', source: 'McKinsey Future of Logistics, 2024' },
    { value: '20%', label: isEN ? 'Higher Fleet Utilization With Telematics-Driven Dispatch' : 'ใช้รถได้เต็มที่ขึ้นด้วยการจ่ายงานโดยใช้ข้อมูล Telematics', source: 'Gartner Supply Chain Technology Survey, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-map-pin', title: 'Real-Time Shipment Tracking', desc: 'A tracking platform that gathers GPS pings, carrier scans, driver app updates, and sensor readings into one timeline per shipment. Customers get a tracking link or LINE notification, and your support team sees the same timeline and a list of late or stuck shipments. We define milestones with you, such as picked up, at hub, out for delivery, and delivered, so the data means the same thing to everyone.' },
    { icon: 'ti-route', title: 'Route Optimization Systems', desc: 'Planning tools that group stops into routes and sequence them to cut distance and time, while respecting delivery windows, vehicle capacity, driver hours, and no-go areas. Dispatchers can drag stops between vehicles and see the effect on the day\'s plan before they commit. Re-planning when a van breaks down or an order is added takes minutes, not an hour of phone calls.' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Management Systems', desc: 'A WMS for receiving, put-away, picking, packing, cycle counting, and dispatch, for one warehouse or a network of them. Pickers work from a handheld or phone with scan confirmation, and supervisors see stock accuracy and pick rates per person and per shift. We connect it to your ERP or online store so stock levels match what is actually on the shelf.' },
    { icon: 'ti-gauge', title: 'Fleet Telematics Dashboards', desc: 'Dashboards that show where each vehicle is, how drivers are driving, how much fuel is used, and when maintenance is due, based on the telematics devices already on your trucks. Fleet managers get alerts for idling, harsh braking, or route deviations, and a monthly view of cost per kilometre. We work with the devices you own rather than requiring new hardware.' },
    { icon: 'ti-plug-connected', title: 'Multi-Carrier Integration Platforms', desc: 'One integration layer that normalises rates, labels, pickup requests, and tracking events from all your carriers behind a single API. Your sales site or ERP talks to one interface, and rules decide which carrier to use by price, speed, or service area. Adding a new carrier becomes a configuration task instead of a development project.' },
    { icon: 'ti-trending-up', title: 'Demand & Capacity Forecasting', desc: 'Forecasting tools trained on your order and shipment history, with seasonality, campaigns, and holidays included, to estimate parcel volumes and warehouse space a few weeks ahead. Planners use them to set staffing, book extra vehicles, and decide how much stock to pre-position. We show the forecast beside what actually happened, so you can see how far to trust it.' },
  ] : [
    { icon: 'ti-map-pin', title: 'Real-Time Shipment Tracking', desc: 'แพลตฟอร์มติดตามที่รวมตำแหน่งจาก GPS การสแกนของผู้ขนส่ง การอัปเดตจากแอปคนขับ และค่าจากเซนเซอร์ ให้เป็นไทม์ไลน์เดียวต่อพัสดุหนึ่งชิ้น ลูกค้าได้ลิงก์ติดตามหรือการแจ้งเตือนผ่าน LINE ส่วนทีมซัพพอร์ตเห็นไทม์ไลน์เดียวกัน พร้อมรายการพัสดุที่ล่าช้าหรือค้าง เราตกลงกับคุณก่อนว่าแต่ละสถานะหมายถึงอะไร เช่น รับของแล้ว ถึงศูนย์กระจาย ออกส่ง และส่งสำเร็จ ข้อมูลจะได้มีความหมายเดียวกันสำหรับทุกคน' },
    { icon: 'ti-route', title: 'Route Optimization Systems', desc: 'เครื่องมือวางแผนที่จัดกลุ่มจุดส่งเป็นเส้นทางและเรียงลำดับเพื่อลดระยะทางและเวลา โดยคำนึงถึงช่วงเวลาส่ง ความจุรถ ชั่วโมงทำงานของคนขับ และพื้นที่ห้ามเข้า คนจัดคิวรถลากจุดส่งย้ายระหว่างรถ แล้วดูผลต่อแผนทั้งวันก่อนยืนยันได้ พอรถเสียหรือมีออเดอร์แทรก การจัดแผนใหม่ใช้เวลาไม่กี่นาที ไม่ต้องโทรประสานกันเป็นชั่วโมง' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Management Systems', desc: 'WMS ที่ดูแลการรับของเข้า จัดเก็บ หยิบ บรรจุ นับสต็อก และจ่ายออก ทั้งคลังเดียวและหลายคลัง พนักงานหยิบของทำงานจากเครื่องมือถือหรือมือถือพร้อมสแกนยืนยัน ส่วนหัวหน้าเห็นความแม่นยำของสต็อกและความเร็วในการหยิบรายคนรายกะ เราเชื่อมกับ ERP หรือร้านค้าออนไลน์ของคุณ เพื่อให้จำนวนสต็อกตรงกับของที่อยู่บนชั้นจริง' },
    { icon: 'ti-gauge', title: 'Fleet Telematics Dashboards', desc: 'แดชบอร์ดที่แสดงว่ารถแต่ละคันอยู่ไหน คนขับขับยังไง ใช้น้ำมันเท่าไร และถึงรอบซ่อมบำรุงเมื่อไร โดยใช้อุปกรณ์ Telematics ที่ติดอยู่บนรถของคุณอยู่แล้ว ผู้จัดการฝูงรถได้รับการแจ้งเตือนเมื่อรถจอดติดเครื่อง เบรกกะทันหัน หรือออกนอกเส้นทาง และดูต้นทุนต่อกิโลเมตรรายเดือนได้ เราทำงานกับอุปกรณ์ที่คุณมีอยู่ ไม่จำเป็นต้องซื้อฮาร์ดแวร์ใหม่' },
    { icon: 'ti-plug-connected', title: 'Multi-Carrier Integration Platforms', desc: 'ชั้นเชื่อมต่อกลางที่ทำให้ค่าขนส่ง ใบปะหน้า การเรียกรถเข้ารับ และสถานะติดตามจากผู้ขนส่งทุกเจ้าอยู่ในรูปแบบเดียว ผ่าน API เดียว เว็บขายของหรือ ERP ของคุณคุยกับอินเทอร์เฟซเดียว แล้วกฎที่ตั้งไว้จะเลือกผู้ขนส่งให้ตามราคา ความเร็ว หรือพื้นที่ให้บริการ การเพิ่มผู้ขนส่งรายใหม่จึงเป็นแค่การตั้งค่า ไม่ต้องเปิดโปรเจกต์พัฒนาใหม่' },
    { icon: 'ti-trending-up', title: 'Demand & Capacity Forecasting', desc: 'เครื่องมือพยากรณ์ที่เรียนรู้จากประวัติออเดอร์และการส่งของคุณ โดยนับฤดูกาล แคมเปญ และวันหยุดเข้าไปด้วย เพื่อประเมินปริมาณพัสดุและพื้นที่คลังล่วงหน้าสองสามสัปดาห์ ฝ่ายวางแผนใช้ตั้งกำลังคน จองรถเพิ่ม และตัดสินใจว่าจะเตรียมสต็อกไว้ใกล้ลูกค้าแค่ไหน เราแสดงตัวเลขที่พยากรณ์เทียบกับที่เกิดขึ้นจริงให้ดูควบคู่กัน คุณจะเห็นเองว่าควรเชื่อมันได้แค่ไหน' },
  ]

  const techStack = ['React', 'Node.js', 'GPS/Telematics', 'Google Maps API', 'Kafka', 'PostgreSQL', 'Redis', 'Machine Learning', 'AWS', 'GraphQL', 'IoT', 'Elasticsearch', 'Docker', 'Fastify', 'Flutter']

  const useCases = isEN ? [
    { no: '01', title: 'Real-Time Shipment Tracking Platform', desc: 'One tracking application for shippers, carriers, and end customers. It ingests GPS, hub scans, and driver app events, shows the ETA at each stage, and sends updates through LINE or SMS. Support agents search by order or phone number and see the full timeline in one place. A good fit for a 3PL or an e-commerce shipper that currently answers where-is-my-parcel questions by phone.' },
    { no: '02', title: 'Route Optimization System', desc: 'A planning system that takes tomorrow\'s orders and produces routes for each vehicle, checking delivery windows, load limits, and driver hours. Dispatchers adjust before the trucks leave, and drivers receive the sequence on their phone with navigation and proof-of-delivery capture. After a few weeks of data, the system compares planned and actual times so you can tune the assumptions.' },
    { no: '03', title: 'Warehouse Management Platform', desc: 'A multi-site WMS that handles inbound, put-away, picking, packing, and dispatch with barcode scanning, plus live stock accuracy and labour productivity reports. Supervisors see which orders are late and which zones are congested. It can start with one warehouse as a pilot and roll out to others once the process settles.' },
  ] : [
    { no: '01', title: 'Real-Time Shipment Tracking Platform', desc: 'แอปติดตามกลางสำหรับผู้ส่ง ผู้ขนส่ง และลูกค้าปลายทาง รับข้อมูลจาก GPS การสแกนที่ศูนย์กระจาย และแอปคนขับ แสดงเวลาถึงโดยประมาณในแต่ละช่วง และส่งการอัปเดตทาง LINE หรือ SMS เจ้าหน้าที่ซัพพอร์ตค้นด้วยเลขออเดอร์หรือเบอร์โทรแล้วเห็นไทม์ไลน์ครบในที่เดียว เหมาะกับ 3PL หรือผู้ส่งฝั่งอีคอมเมิร์ซที่ตอนนี้ยังตอบคำถามว่าของอยู่ไหนด้วยโทรศัพท์' },
    { no: '02', title: 'Route Optimization System', desc: 'ระบบวางแผนที่รับออเดอร์ของพรุ่งนี้แล้วจัดเส้นทางให้รถแต่ละคัน โดยเช็กช่วงเวลาส่ง น้ำหนักบรรทุก และชั่วโมงทำงานของคนขับ คนจัดคิวรถปรับแผนได้ก่อนรถออก ส่วนคนขับได้ลำดับจุดส่งบนมือถือพร้อมระบบนำทางและถ่ายหลักฐานการส่งมอบ พอมีข้อมูลสักหลายสัปดาห์ ระบบจะเทียบเวลาที่วางแผนกับเวลาที่ใช้จริง ให้คุณปรับสมมติฐานให้แม่นขึ้น' },
    { no: '03', title: 'Warehouse Management Platform', desc: 'WMS สำหรับหลายคลัง ดูแลรับของเข้า จัดเก็บ หยิบ บรรจุ และจ่ายออกด้วยการสแกนบาร์โค้ด พร้อมรายงานความแม่นยำของสต็อกและผลิตภาพแรงงานแบบสด หัวหน้าเห็นว่าออเดอร์ไหนล่าช้าและโซนไหนแออัด เริ่มจากคลังเดียวเป็นโครงการนำร่อง แล้วขยายไปคลังอื่นเมื่อขั้นตอนนิ่งแล้วก็ได้' },
  ]

  const heroVisual = <IndustryHero kind="logistics" isEN={isEN} />

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
                  {isEN ? 'Transportation &' : 'คมนาคมและ'}<br />{isEN ? 'Logistics' : 'โลจิสติกส์'}
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
                  ? 'We build the operational software that moves goods: shipment tracking platforms, route planning tools, warehouse management systems (WMS), and fleet dashboards. Most logistics teams in Thailand already have pieces of this, such as a GPS vendor, an ERP, a carrier portal, and a few spreadsheets, so our first job is to see where the data stops flowing and connect it. We work with dispatchers, warehouse supervisors, and drivers to learn how a day really runs, from morning loading to proof of delivery. The aim is simple: your team knows where every parcel is, and customers stop calling to ask.'
                  : 'เราสร้างซอฟต์แวร์หน้างานที่ช่วยให้ของเดินทางไปถึงที่หมาย ทั้งแพลตฟอร์มติดตามพัสดุ เครื่องมือวางเส้นทาง ระบบจัดการคลังสินค้า (WMS) และแดชบอร์ดดูรถ ทีมโลจิสติกส์ในไทยส่วนใหญ่มีบางส่วนอยู่แล้ว เช่น ผู้ให้บริการ GPS ระบบ ERP พอร์ทัลของผู้ขนส่ง และสเปรดชีตอีกหลายไฟล์ งานแรกของเราคือดูว่าข้อมูลหยุดไหลตรงไหนแล้วต่อมันเข้าด้วยกัน เรานั่งคุยกับคนจัดคิวรถ หัวหน้าคลัง และคนขับ เพื่อเข้าใจว่าหนึ่งวันทำงานจริงเป็นยังไง ตั้งแต่ขึ้นของตอนเช้าจนถึงหลักฐานการส่งมอบ เป้าหมายง่าย ๆ คือทีมคุณรู้ว่าพัสดุทุกชิ้นอยู่ไหน และลูกค้าไม่ต้องโทรมาถามอีก'}
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
                ? 'Where logistics operations lose money and time, and the gaps that keep customers calling to ask where their goods are.'
                : 'จุดที่งานโลจิสติกส์เสียเงินและเสียเวลา และช่องว่างที่ทำให้ลูกค้าต้องโทรมาถามว่าของอยู่ไหน'}
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
              {isEN ? 'What we build for carriers, 3PLs, and shippers, and how each piece fits into the daily work of dispatch, warehouse, and customer service.' : 'ระบบที่เราสร้างให้ผู้ขนส่ง 3PL และผู้ส่งสินค้า พร้อมอธิบายว่าแต่ละส่วนเข้ากับงานประจำวันของฝ่ายจัดรถ คลัง และบริการลูกค้ายังไง'}
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
                ? 'Tools we use for live location data, event streams, and route calculation, picked for reliability under heavy daily volume.'
                : 'เครื่องมือที่เราใช้กับข้อมูลตำแหน่งแบบสด สตรีมเหตุการณ์ และการคำนวณเส้นทาง เลือกเพราะทนปริมาณงานหนักในแต่ละวันได้'}
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
              {isEN ? 'Three typical projects, covering what we build, who uses it each day, and what gets easier.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ ว่าเราสร้างอะไร ใครใช้ทุกวัน และอะไรที่ทำง่ายขึ้น'}
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
