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
  const title = isEN ? "Telecommunications Software & Digital Solutions | Haliviq" : "โทรคมนาคม | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Self-service apps, network dashboards, billing integration, and support automation for mobile, broadband, and IoT connectivity providers."
    : "แอปให้ลูกค้าดูแลบริการเอง แดชบอร์ดเครือข่าย การเชื่อมระบบบิล และระบบซัพพอร์ตอัตโนมัติ สำหรับผู้ให้บริการมือถือ บรอดแบนด์ และการเชื่อมต่อ IoT"
  const url = `https://haliviq.com/${params.lang}/industries/telecommunications`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Telecommunications' : 'อุตสาหกรรม / โทรคมนาคม'
  const heroSubhead = isEN
    ? 'Self-service apps, network dashboards, billing integration, and support automation for mobile, broadband, and IoT connectivity providers.'
    : 'แอปให้ลูกค้าดูแลบริการเอง แดชบอร์ดเครือข่าย การเชื่อมระบบบิล และระบบซัพพอร์ตอัตโนมัติ สำหรับผู้ให้บริการมือถือ บรอดแบนด์ และการเชื่อมต่อ IoT'

  const challenges = isEN ? [
    { icon: 'ti-server-2', title: 'Legacy OSS/BSS Complexity', desc: 'Billing, provisioning, CRM, and order management at most carriers were bought or built in different decades, and they talk to each other through custom scripts that few people still understand. Launching a new package or a simple app feature can mean changes in six systems and a long testing cycle. We map what connects to what, then put an API layer in front of the old systems, so new products can be built without opening up the core every time.' },
    { icon: 'ti-trending-down', title: 'Rising Customer Churn Pressure', desc: 'In Thailand, number portability means a customer can move to another network and keep the same number, and promotions from competitors arrive in their LINE chat every week. By the time someone calls to cancel, it is usually too late. We build the signals that show who is drifting, such as falling usage, repeated failed top-ups, or several support contacts in a row, and tools that let your team reach out with a relevant offer early.' },
    { icon: 'ti-antenna-bars-5', title: 'Network Monitoring at Massive Scale', desc: 'A network operations centre may watch tens of thousands of cell sites, routers, and links, each sending alarms. Operators drown in duplicate alerts and cannot tell a single failed power supply from a regional outage until customers start calling. We build monitoring that groups related alarms, shows impact on customers and areas on a map, and routes each incident to the right field team with the context they need.' },
    { icon: 'ti-router', title: '5G/IoT Rollout Integration Demands', desc: '5G is arriving alongside enterprise IoT, such as meters, vehicles, and factory sensors, and each device needs to be activated, billed, monitored, and sometimes remotely reset. Systems built for voice and data on phones were never designed to handle that many low-traffic connections. We build device onboarding, connectivity management, and usage reporting that sit next to your existing stack and scale to a very large number of connections.' },
  ] : [
    { icon: 'ti-server-2', title: 'ความซับซ้อนของระบบ OSS/BSS รุ่นเก่า', desc: 'ระบบบิล provisioning CRM และออเดอร์ของค่ายส่วนใหญ่ซื้อหรือสร้างกันคนละยุค และคุยกันผ่านสคริปต์เฉพาะที่เหลือไม่กี่คนที่ยังเข้าใจ จะเปิดแพ็กเกจใหม่หรือเพิ่มฟีเจอร์เล็ก ๆ ในแอปก็อาจต้องแก้หกระบบและเทสต์กันนาน เราเริ่มจากทำแผนผังว่าอะไรต่อกับอะไรบ้าง แล้วสร้างชั้น API คั่นหน้าระบบเก่า ผลิตภัณฑ์ใหม่จะสร้างได้โดยไม่ต้องรื้อระบบแกนกลางทุกครั้ง' },
    { icon: 'ti-trending-down', title: 'แรงกดดันจากลูกค้าที่ย้ายค่ายมากขึ้น', desc: 'ในไทยมีบริการย้ายค่ายเบอร์เดิม ลูกค้าย้ายไปเครือข่ายอื่นได้โดยใช้เบอร์เดิม และโปรโมชันของคู่แข่งก็เด้งเข้าแชตทุกสัปดาห์ พอลูกค้าโทรมาขอยกเลิกก็มักสายไปแล้ว เราสร้างสัญญาณที่บอกว่าใครกำลังห่างออกไป เช่น การใช้งานที่ลดลง เติมเงินไม่ผ่านซ้ำ ๆ หรือติดต่อซัพพอร์ตหลายครั้งติดกัน และเครื่องมือให้ทีมคุณเข้าไปคุยพร้อมข้อเสนอที่ตรงตัวได้แต่เนิ่น ๆ' },
    { icon: 'ti-antenna-bars-5', title: 'ติดตามเครือข่ายขนาดใหญ่มาก', desc: 'ศูนย์ควบคุมเครือข่ายอาจต้องเฝ้าเสาสัญญาณ เราเตอร์ และลิงก์เป็นหมื่นจุด ทุกจุดส่งสัญญาณเตือนมาตลอด เจ้าหน้าที่จมอยู่กับแจ้งเตือนซ้ำ และแยกไม่ออกว่าแหล่งจ่ายไฟเสียตัวเดียวหรือล่มทั้งพื้นที่ จนกว่าลูกค้าจะโทรเข้ามา เราสร้างระบบติดตามที่จัดกลุ่มสัญญาณเตือนที่เกี่ยวกัน แสดงผลกระทบต่อลูกค้าและพื้นที่บนแผนที่ และส่งเหตุให้ทีมภาคสนามที่ถูกต้องพร้อมข้อมูลที่ต้องใช้' },
    { icon: 'ti-router', title: 'ต้องเชื่อมระบบสำหรับ 5G/IoT', desc: '5G มาพร้อมกับ IoT ขององค์กร เช่น มิเตอร์ ยานพาหนะ และเซนเซอร์ในโรงงาน ซึ่งทุกอุปกรณ์ต้องเปิดใช้งาน คิดค่าบริการ ติดตามสถานะ และบางครั้งต้องรีเซ็ตจากระยะไกล ระบบที่ออกแบบมาสำหรับเสียงและดาต้าบนมือถือไม่ได้สร้างมาให้รับการเชื่อมต่อที่ใช้ข้อมูลน้อยแต่มีจำนวนมหาศาลขนาดนั้น เราสร้างระบบรับอุปกรณ์เข้าใช้งาน จัดการการเชื่อมต่อ และรายงานการใช้ ที่วางข้างระบบเดิมของคุณและขยายรองรับการเชื่อมต่อจำนวนมากได้' },
  ]

  const metrics = [
    { value: '$1.2T', label: isEN ? 'Global Telecom Software Market by 2030' : 'มูลค่าตลาดซอฟต์แวร์โทรคมนาคมทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Telecom Software Report, 2024' },
    { value: '25%', label: isEN ? 'Reduction in Customer Churn with AI-Powered Support' : 'ลูกค้าย้ายค่ายลดลงเมื่อใช้ฝ่ายซัพพอร์ตที่มี AI ช่วย', source: 'Deloitte Telecom AI Study, 2024' },
    { value: '18B', label: isEN ? 'IoT Connections Worldwide by 2027' : 'จำนวนการเชื่อมต่อ IoT ทั่วโลกภายในปี 2027', source: 'GSMA Mobile Economy Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-device-mobile', title: 'Self-Service Customer Apps', desc: 'A mobile app and web portal where subscribers check balance and usage, change packages, top up with PromptPay QR or a card, pay bills, view their number portability or SIM status, and open support tickets. Thai-language first, with clear screens for people of all ages. Every task moved out of the call centre or the shop counter is a call you do not have to staff.' },
    { icon: 'ti-chart-dots', title: 'Network Monitoring Dashboards', desc: 'Live screens for the operations team showing site health, latency, packet loss, and outages by region, with alarm grouping and drill-down to a single device. Maps and trend views help planners spot weak coverage. Built for control-room use, with views suited to shift handovers and escalation paths that match your own procedures.' },
    { icon: 'ti-file-invoice', title: 'Billing & OSS/BSS Integration', desc: 'An integration layer between your billing, provisioning, CRM, and order systems and the new apps and portals you want to launch. It exposes clean APIs, queues requests so a slow back-end does not freeze the app, and keeps a log of every transaction for audits. This lets you add new digital products without a full replacement of the core, and it handles Thai tax invoice requirements.' },
    { icon: 'ti-message-chatbot', title: 'AI Support Chatbots', desc: 'An assistant on LINE, your app, and your website that answers common questions about bills, packages, roaming, and coverage in Thai and English, and hands over to a human agent with the full conversation when it cannot help. It looks up the subscriber\'s real account details after they verify, instead of giving generic replies. We measure what it resolves and where it fails, and improve it from that.' },
    { icon: 'ti-antenna', title: '5G/IoT Connectivity Tooling', desc: 'A platform for enterprise customers who run fleets of connected devices. It covers bulk SIM and device activation, plan assignment, usage alerts, remote status checks, and a billing view per customer. Suited to providers that sell IoT connectivity for logistics, utilities, smart buildings, or industrial sites, and to the sales engineers who support them.' },
    { icon: 'ti-trending-up', title: 'Customer Churn Prediction Systems', desc: 'Models trained on your own usage, billing, and support history that score each subscriber\'s risk of leaving, with the main reasons shown next to the score. Retention teams get a daily list and can trigger offers by SMS, LINE, or app message. Customer data is handled under PDPA, with consent and purpose limits built into how the lists are used.' },
  ] : [
    { icon: 'ti-device-mobile', title: 'Self-Service Customer Apps', desc: 'แอปมือถือและเว็บพอร์ทัลที่ลูกค้าเช็กยอดและการใช้งาน เปลี่ยนแพ็กเกจ เติมเงินด้วย PromptPay QR หรือบัตร จ่ายบิล ดูสถานะซิมหรือการย้ายค่าย และเปิดเรื่องแจ้งปัญหาได้เอง ออกแบบภาษาไทยเป็นหลัก หน้าจอชัดเจนสำหรับลูกค้าทุกวัย ทุกเรื่องที่ย้ายจากคอลเซ็นเตอร์หรือเคาน์เตอร์ร้านมาทำเองในแอป คือสายโทรเข้าที่คุณไม่ต้องจัดคนรับ' },
    { icon: 'ti-chart-dots', title: 'Network Monitoring Dashboards', desc: 'หน้าจอสดสำหรับทีมปฏิบัติการ แสดงสถานะเสา Latency Packet Loss และเหตุขัดข้องแยกตามภูมิภาค มีการจัดกลุ่มสัญญาณเตือนและเจาะลงไปดูทีละอุปกรณ์ แผนที่และกราฟแนวโน้มช่วยให้ทีมวางแผนเห็นจุดที่สัญญาณอ่อน ออกแบบสำหรับใช้ในห้องควบคุม มีมุมมองที่เหมาะกับการส่งต่อกะ และเส้นทางการแจ้งต่อที่ตรงกับขั้นตอนของคุณ' },
    { icon: 'ti-file-invoice', title: 'Billing & OSS/BSS Integration', desc: 'ชั้นเชื่อมต่อระหว่างระบบบิล provisioning CRM และออเดอร์ของคุณ กับแอปและพอร์ทัลใหม่ที่อยากเปิดตัว มี API ที่สะอาด ใช้คิวรับคำขอเพื่อไม่ให้หลังบ้านที่ช้าทำให้แอปค้าง และเก็บบันทึกทุกธุรกรรมไว้ตรวจสอบ ทำให้เพิ่มผลิตภัณฑ์ดิจิทัลใหม่ได้โดยไม่ต้องเปลี่ยนระบบแกนกลางทั้งหมด รวมถึงรองรับข้อกำหนดใบกำกับภาษีของไทย' },
    { icon: 'ti-message-chatbot', title: 'AI Support Chatbots', desc: 'ผู้ช่วยบน LINE แอป และเว็บไซต์ ที่ตอบคำถามที่พบบ่อยเรื่องบิล แพ็กเกจ โรมมิ่ง และพื้นที่สัญญาณ ทั้งภาษาไทยและอังกฤษ และส่งต่อให้เจ้าหน้าที่พร้อมประวัติการคุยครบเมื่อช่วยไม่ได้ หลังลูกค้ายืนยันตัวตนแล้วมันดึงข้อมูลบัญชีจริงมาตอบ ไม่ตอบแบบกว้าง ๆ เราวัดว่าตอบแก้ปัญหาได้เท่าไหร่ พลาดตรงไหน แล้วปรับปรุงจากตรงนั้น' },
    { icon: 'ti-antenna', title: '5G/IoT Connectivity Tooling', desc: 'แพลตฟอร์มสำหรับลูกค้าองค์กรที่ใช้อุปกรณ์เชื่อมต่อเป็นจำนวนมาก ครอบคลุมการเปิดใช้งานซิมและอุปกรณ์เป็นชุดใหญ่ การกำหนดแพ็กเกจ แจ้งเตือนการใช้ ตรวจสถานะจากระยะไกล และหน้าดูค่าบริการรายลูกค้า เหมาะกับผู้ให้บริการที่ขายการเชื่อมต่อ IoT ให้งานโลจิสติกส์ สาธารณูปโภค อาคารอัจฉริยะ หรือพื้นที่อุตสาหกรรม และวิศวกรฝ่ายขายที่ดูแลลูกค้าเหล่านั้น' },
    { icon: 'ti-trending-up', title: 'Customer Churn Prediction Systems', desc: 'โมเดลที่เรียนรู้จากข้อมูลการใช้งาน บิล และประวัติซัพพอร์ตของคุณเอง ให้คะแนนความเสี่ยงที่ลูกค้าแต่ละรายจะเลิกใช้ พร้อมเหตุผลหลักข้างคะแนน ทีมรักษาลูกค้าได้รายชื่อทุกวัน และส่งข้อเสนอผ่าน SMS LINE หรือข้อความในแอปได้ ข้อมูลลูกค้าจัดการตาม PDPA โดยวางเรื่องความยินยอมและวัตถุประสงค์การใช้ไว้ในวิธีใช้รายชื่อ' },
  ]

  const techStack = ['React', 'React Native', 'Node.js', 'Kafka', 'Kubernetes', 'AWS', 'PostgreSQL', 'GraphQL', 'Machine Learning', '5G', 'IoT', 'Time Series DBs', 'Redis']

  const useCases = isEN ? [
    { no: '01', title: 'Self-Service Customer App', desc: 'A mobile self-care app that lets subscribers view usage, manage plans, top up, and get AI-assisted support without a single call centre interaction. We start with the five or six tasks that generate the most calls and build those first, then add more from the support data. Reduces call volume and gives marketing a direct, consented channel to subscribers.' },
    { no: '02', title: 'Network Monitoring Dashboard', desc: 'A unified observability platform that pulls signal, latency, and outage data from thousands of cell sites into a single real-time operations view. Alarms are grouped by cause, shown on a map with affected customers, and sent to the right field team. Replaces the tangle of separate vendor screens that operators switch between during an incident.' },
    { no: '03', title: 'Churn Prediction System', desc: 'A machine learning platform that scores subscriber churn risk daily and automatically triggers targeted retention offers for at-risk accounts. The retention team sees why each account is flagged, tests which offers work, and tracks whether saved customers stay. We begin with a pilot on one segment, such as prepaid users, before widening it.' },
  ] : [
    { no: '01', title: 'Self-Service Customer App', desc: 'แอปให้ลูกค้าดูแลบริการเองบนมือถือ ดูการใช้งาน จัดการแพ็กเกจ เติมเงิน และรับความช่วยเหลือจากระบบ AI ได้โดยไม่ต้องคุยกับคอลเซ็นเตอร์เลยสักครั้ง เราเริ่มจากห้าหกเรื่องที่ทำให้คนโทรเข้ามาเยอะที่สุดและทำสิ่งนั้นก่อน แล้วค่อยเพิ่มจากข้อมูลซัพพอร์ต ช่วยลดสายเข้า และให้ฝ่ายการตลาดมีช่องทางตรงถึงลูกค้าที่ยินยอมแล้ว' },
    { no: '02', title: 'Network Monitoring Dashboard', desc: 'แพลตฟอร์มติดตามระบบกลางที่ดึงข้อมูลสัญญาณ Latency และเหตุขัดข้องจากเสาสัญญาณนับพันมารวมในหน้าจอเรียลไทม์เดียว สัญญาณเตือนถูกจัดกลุ่มตามสาเหตุ แสดงบนแผนที่พร้อมจำนวนลูกค้าที่ได้รับผลกระทบ และส่งถึงทีมภาคสนามที่ถูกต้อง แทนที่จอของผู้ผลิตอุปกรณ์หลายเจ้าที่เจ้าหน้าที่ต้องสลับดูเวลามีเหตุ' },
    { no: '03', title: 'Churn Prediction System', desc: 'แพลตฟอร์ม Machine Learning ที่คำนวณความเสี่ยงที่ลูกค้าจะเลิกใช้ทุกวัน และส่งข้อเสนอรักษาลูกค้าให้บัญชีกลุ่มเสี่ยงโดยอัตโนมัติ ทีมรักษาลูกค้าเห็นว่าแต่ละบัญชีถูกติดธงเพราะอะไร ทดสอบว่าข้อเสนอไหนได้ผล และติดตามว่าลูกค้าที่รั้งไว้ได้ยังอยู่ต่อไหม เราเริ่มทดลองกับกลุ่มเดียวก่อน เช่น ลูกค้าเติมเงิน แล้วค่อยขยาย' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{isEN ? 'Network / Status' : 'Network / Status'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M65 8 L65 62" stroke="var(--purple-light)" strokeWidth="2" />
              <path d="M65 8 L46 22" stroke="var(--purple-light)" strokeWidth="2" strokeLinecap="round" />
              <path d="M65 8 L84 22" stroke="var(--purple-light)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="65" cy="8" r="4" fill="var(--lime)" />
              <rect x="30" y="46" width="8" height="16" rx="1" fill="rgb(var(--fg) / 0.25)" />
              <rect x="44" y="38" width="8" height="24" rx="1" fill="rgb(var(--fg) / 0.35)" />
              <rect x="58" y="30" width="8" height="32" rx="1" fill="var(--lime)" />
              <rect x="72" y="38" width="8" height="24" rx="1" fill="rgb(var(--fg) / 0.35)" />
              <rect x="86" y="46" width="8" height="16" rx="1" fill="rgb(var(--fg) / 0.25)" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'National Network' : 'เครือข่ายทั่วประเทศ'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '5G core · 12,480 sites online' : '5G Core · เสาสัญญาณ 12,480 แห่ง'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Uptime' : 'Uptime'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-antenna" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '99.98% this month' : '99.98% เดือนนี้'}</p>
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
                  {isEN ? 'Telecom-' : 'โทร'}<br />{isEN ? 'munications' : 'คมนาคม'}
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
                  ? 'We help telecom and connectivity providers build the customer and operations software that sits on top of the network: self-service apps, monitoring dashboards, integration layers for billing and provisioning, AI support, and churn analytics. Our approach is to work alongside the systems you have, with APIs and message queues in between, rather than ask you to replace them in one risky switch-over. We design for the Thai market, with Thai-language support, PromptPay and bank top-ups, SIM registration and number portability journeys, and PDPA-aware handling of subscriber data in line with NBTC requirements.'
                : 'เราช่วยผู้ให้บริการโทรคมนาคมและการเชื่อมต่อสร้างซอฟต์แวร์ฝั่งลูกค้าและฝั่งปฏิบัติการที่วางอยู่บนเครือข่าย ทั้งแอปให้ลูกค้าดูแลบริการเอง แดชบอร์ดติดตามเครือข่าย ชั้นเชื่อมระบบบิลและ provisioning ระบบซัพพอร์ต AI และการวิเคราะห์ลูกค้าที่จะย้ายค่าย แนวทางของเราคือทำงานเคียงข้างระบบที่คุณมีอยู่ โดยใช้ API และคิวข้อความคั่นกลาง ไม่ขอให้คุณเปลี่ยนทั้งระบบในครั้งเดียวที่เสี่ยง เราออกแบบให้เข้ากับตลาดไทย ทั้งซัพพอร์ตภาษาไทย การเติมเงินผ่าน PromptPay และธนาคาร ขั้นตอนลงทะเบียนซิมและย้ายค่ายเบอร์เดิม และการดูแลข้อมูลลูกค้าตาม PDPA ให้สอดคล้องกับข้อกำหนดของ กสทช.'}
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
                ? 'Four problems telecom and connectivity teams raise with us most often, and what is usually behind them.'
                : 'สี่ปัญหาที่ทีมโทรคมนาคมและผู้ให้บริการการเชื่อมต่อเล่าให้เราฟังบ่อยที่สุด และสิ่งที่มักอยู่เบื้องหลัง'}
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
              {isEN ? 'The systems we build for carriers and connectivity providers, and what each changes for operators and subscribers.' : 'ระบบที่เราสร้างให้ค่ายโทรคมนาคมและผู้ให้บริการการเชื่อมต่อ พร้อมบอกว่าแต่ละตัวเปลี่ยนงานของทีมปฏิบัติการและประสบการณ์ลูกค้ายังไง'}
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
                ? 'Tools we choose for streaming data, mobile apps, and large-scale monitoring because they hold up under heavy load and are well supported.'
                : 'เครื่องมือที่เราเลือกใช้กับข้อมูลสตรีมมิง แอปมือถือ และการติดตามระบบขนาดใหญ่ เพราะรับโหลดหนักได้และมีคนดูแลต่อเนื่อง'}
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
              {isEN ? 'Three typical projects, described by what gets built, who uses it, and how work changes afterwards.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ เล่าให้ฟังว่าสร้างอะไร ใครเป็นคนใช้ และงานเปลี่ยนไปยังไงหลังจากนั้น'}
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
