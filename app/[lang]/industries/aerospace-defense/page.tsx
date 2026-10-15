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
  const title = isEN ? "Aerospace & Defense Software & Digital Solutions | Haliviq" : "การบินอวกาศและกลาโหม | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Secure software for aerospace and defense teams: encrypted communications, satellite and ground-station dashboards, parts traceability and simulation tools…"
    : "ซอฟต์แวร์ที่ปลอดภัยสำหรับงานการบินอวกาศและกลาโหม ตั้งแต่ระบบสื่อสารเข้ารหัส แดชบอร์ดดาวเทียมและ Ground Station…"
  const url = `https://www.haliviq.com/${params.lang}/industries/aerospace-defense`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Aerospace & Defense' : 'อุตสาหกรรม / การบินอวกาศและกลาโหม'
  const heroSubhead = isEN
    ? 'Secure software for aerospace and defense teams: encrypted communications, satellite and ground-station dashboards, parts traceability and simulation tools, built so your certification and security rules stay intact.'
    : 'ซอฟต์แวร์ที่ปลอดภัยสำหรับงานการบินอวกาศและกลาโหม ตั้งแต่ระบบสื่อสารเข้ารหัส แดชบอร์ดดาวเทียมและ Ground Station ไปจนถึงระบบตามรอยชิ้นส่วนและเครื่องมือจำลอง โดยไม่ทำให้ใบรับรองและกฎความปลอดภัยของคุณเสียไป'

  const challenges = isEN ? [
    { icon: 'ti-world-check', title: 'Export-Control Compliance Complexity', desc: 'ITAR, EAR and other export-control regimes decide who may see which drawing, dataset or line of code, and the answer can change by person, country and project. Meeting them takes strict access separation and a clean audit trail, yet many engineering teams still track this in spreadsheets and shared folders. We start by mapping who needs what, then turn those rules into permissions that the system enforces and logs.' },
    { icon: 'ti-shield-lock', title: 'Secure Multi-Domain Data Handling', desc: 'Classified, controlled-unclassified and commercial data often sit on separate networks with different clearance levels. Moving information between them safely needs encryption, isolation, and a record of where each file came from at every boundary. We design those crossing points on purpose instead of leaving them to ad-hoc file transfers.' },
    { icon: 'ti-tool', title: 'Legacy & Long-Lifecycle Systems Integration', desc: 'Aircraft, satellites and ground systems are built to stay in service for decades, and their avionics interfaces and safety cases were written long before modern APIs and cloud services existed. Any change has to leave certification and safety evidence untouched. We connect old systems through well-defined interfaces and change them in small steps that can be reviewed.' },
    { icon: 'ti-barcode', title: 'Supply-Chain & Parts-Traceability Assurance', desc: 'Every part has to be genuine, bought from an approved vendor and traceable through its whole life, because one counterfeit component can ground an aircraft. The records are usually scattered across supplier portals, paper certificates and maintenance logs. We pull them into one traceable record per part.' },
  ] : [
    { icon: 'ti-world-check', title: 'กฎควบคุมการส่งออกที่ซับซ้อน', desc: 'กฎอย่าง ITAR และ EAR กำหนดว่าใครดูแบบ ข้อมูล หรือโค้ดชิ้นไหนได้บ้าง และคำตอบอาจต่างกันไปตามตัวบุคคล ประเทศ และโปรเจกต์ การทำตามกฎต้องแบ่งสิทธิ์เข้าถึงให้ชัดและเก็บ Audit Trail ให้ครบ แต่ทีมวิศวกรรมจำนวนมากยังจดตามสเปรดชีตหรือโฟลเดอร์แชร์อยู่ เราช่วยดูตั้งแต่ว่าใครต้องใช้ข้อมูลอะไร แล้วแปลงกฎเหล่านั้นเป็นสิทธิ์ที่ระบบบังคับใช้และบันทึกให้เอง' },
    { icon: 'ti-shield-lock', title: 'จัดการข้อมูลหลายระดับความลับอย่างปลอดภัย', desc: 'ข้อมูลชั้นความลับ ข้อมูลควบคุมที่ไม่จัดชั้นความลับ และข้อมูลเชิงพาณิชย์ มักอยู่คนละเครือข่ายและมีระดับการเข้าถึงต่างกัน การย้ายข้อมูลข้ามกันอย่างปลอดภัยต้องมีการเข้ารหัส การแยกเครือข่าย และบันทึกที่มาของไฟล์ทุกจุดที่ข้าม เราออกแบบจุดข้ามเหล่านี้ให้ชัดเจน แทนที่จะปล่อยให้ส่งไฟล์กันแบบเฉพาะกิจ' },
    { icon: 'ti-tool', title: 'เชื่อมระบบเก่าที่ต้องใช้งานยาวนาน', desc: 'เครื่องบิน ดาวเทียม และระบบภาคพื้นดินถูกออกแบบมาให้ใช้งานกันเป็นสิบๆ ปี ส่วนอินเทอร์เฟซ Avionics และ Safety Case ก็เขียนขึ้นก่อนยุคที่มี API และ Cloud สมัยใหม่ ทุกการเปลี่ยนแปลงจึงต้องไม่กระทบใบรับรองและหลักฐานด้านความปลอดภัย เราเชื่อมระบบเก่าผ่านอินเทอร์เฟซที่กำหนดชัดเจน และแก้ไขทีละขั้นเล็กๆ ที่ตรวจสอบได้' },
    { icon: 'ti-barcode', title: 'ตามรอยห่วงโซ่อุปทานและชิ้นส่วน', desc: 'ทุกชิ้นส่วนต้องเป็นของแท้ ซื้อจากผู้ผลิตที่ได้รับอนุมัติ และตรวจย้อนกลับได้ตลอดอายุการใช้งาน เพราะชิ้นส่วนปลอมแค่ชิ้นเดียวก็ทำให้เครื่องบินต้องหยุดบินได้ แต่ข้อมูลมักกระจายอยู่ตามพอร์ทัลซัพพลายเออร์ ใบรับรองกระดาษ และบันทึกซ่อมบำรุง เรารวมทุกอย่างให้เหลือประวัติเดียวต่อชิ้นส่วน' },
  ]

  const metrics = [
    { value: '$650B', label: isEN ? 'Global Aerospace & Defense Software Market by 2030' : 'ตลาดซอฟต์แวร์การบินอวกาศและกลาโหมทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Aerospace & Defense Software Forecast, 2024' },
    { value: '12.4%', label: isEN ? 'CAGR in Defense IT Modernization Spending' : 'CAGR ของการลงทุนปรับปรุงระบบ IT ด้านกลาโหม', source: 'Gartner Defense IT Modernization Report, 2024' },
    { value: '68%', label: isEN ? 'Defense Contractors Investing in Digital-Twin Technology' : 'ผู้รับเหมาด้านกลาโหมที่ลงทุนในเทคโนโลยี Digital Twin', source: 'Deloitte Aerospace & Defense Industry Outlook, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shield-lock', title: 'Secure Communications Platforms', desc: 'Encrypted messaging, voice and command channels built on zero-trust principles, where every user and device is verified on each request. It suits operations centres, field teams and partner organisations that cannot rely on a trusted network. You get defined roles, key management and logs that your security team can review.' },
    { icon: 'ti-satellite', title: 'Satellite & Ground-Station Dashboards', desc: 'Live telemetry, orbit and pass-schedule views plus command interfaces for the operators who watch the satellite every day. We design the screens around real operator tasks: spotting an anomaly quickly, confirming that a command went through, and handing over a shift. Data comes from your ground-station software and is stored as time series so past passes can be replayed.' },
    { icon: 'ti-truck-loading', title: 'Supply-Chain & Parts-Traceability Systems', desc: 'A system that records each part from purchase order through inspection, installation and removal, and checks vendor approval status along the way. Quality and procurement teams are alerted when a certificate is missing or a source is not approved, and can pull an audit-ready history on demand. It connects to the ERP and maintenance tools you already run.' },
    { icon: 'ti-cube-3d-sphere', title: 'Simulation & Digital-Twin Tooling', desc: 'Digital models of aircraft, satellites or ground systems that you can run through mission scenarios, failure cases and maintenance plans before touching real hardware. Engineers use them to rehearse, and trainers use them to teach operators without risk. We agree up front on which behaviours the model must reproduce accurately, because that decides the cost and effort.' },
    { icon: 'ti-world-check', title: 'Export-Control & Compliance Automation', desc: 'Tools that classify documents and data, assign access by user status, project and clearance, and keep a tamper-resistant log of who opened what. This replaces manual review queues and email approvals, which are slow and hard to audit. Your compliance officer stays in charge of the rules, and the system applies them the same way every time.' },
    { icon: 'ti-tool', title: 'Mission-Critical Systems Modernization', desc: 'Step-by-step upgrades to legacy avionics and command software that keep existing certification and safety cases valid. We usually begin with an inventory of interfaces and a thin integration layer, then replace one component at a time with a rollback plan for each. You end up with modern interfaces and cloud connectivity without a risky big-bang rewrite.' },
  ] : [
    { icon: 'ti-shield-lock', title: 'ระบบสื่อสารที่ปลอดภัย', desc: 'ระบบส่งข้อความ เสียง และคำสั่งที่เข้ารหัส สร้างบนแนวคิด Zero-trust คือตรวจสอบผู้ใช้และอุปกรณ์ทุกครั้งที่ขอเข้าใช้ เหมาะกับศูนย์ปฏิบัติการ ทีมภาคสนาม และองค์กรพันธมิตรที่เชื่อใจเครือข่ายอย่างเดียวไม่ได้ คุณจะได้ระบบที่มีบทบาทผู้ใช้ การจัดการ Key และ Log ที่ทีมความปลอดภัยของคุณตรวจสอบได้' },
    { icon: 'ti-satellite', title: 'แดชบอร์ดดาวเทียมและ Ground Station', desc: 'หน้าจอ Telemetry วงโคจร ตารางช่วงที่ดาวเทียมผ่าน และส่วนสั่งการ สำหรับผู้ปฏิบัติงานที่ดูดาวเทียมกันทุกวัน เราออกแบบหน้าจอตามงานจริงของผู้ใช้ คือเห็นความผิดปกติได้เร็ว ยืนยันได้ว่าคำสั่งส่งสำเร็จ และส่งต่องานระหว่างกะได้ง่าย ข้อมูลดึงจากซอฟต์แวร์ Ground Station ที่คุณใช้อยู่ และเก็บเป็น Time Series เพื่อเปิดดูย้อนหลังได้' },
    { icon: 'ti-truck-loading', title: 'ระบบตามรอยชิ้นส่วนและซัพพลายเชน', desc: 'ระบบที่บันทึกแต่ละชิ้นส่วนตั้งแต่ใบสั่งซื้อ การตรวจรับ การติดตั้ง จนถึงการถอด พร้อมเช็กสถานะอนุมัติของผู้ผลิตระหว่างทาง ทีมคุณภาพและจัดซื้อจะได้รับแจ้งเตือนเมื่อใบรับรองหายหรือแหล่งที่มาไม่ได้รับอนุมัติ และเรียกประวัติที่พร้อมให้ตรวจสอบได้ทันที เชื่อมกับ ERP และเครื่องมือซ่อมบำรุงที่คุณใช้อยู่ได้' },
    { icon: 'ti-cube-3d-sphere', title: 'เครื่องมือจำลองและ Digital Twin', desc: 'โมเดลดิจิทัลของอากาศยาน ดาวเทียม หรือระบบภาคพื้นดิน ที่เอามาลองสถานการณ์ภารกิจ กรณีระบบขัดข้อง และแผนซ่อมบำรุงได้ก่อนแตะของจริง วิศวกรใช้ซ้อมงาน ส่วนผู้ฝึกใช้สอนผู้ปฏิบัติงานได้โดยไม่เสี่ยง เราจะตกลงกันตั้งแต่ต้นว่าโมเดลต้องจำลองพฤติกรรมไหนให้แม่นแค่ไหน เพราะเรื่องนี้เป็นตัวกำหนดงบและแรงที่ใช้' },
    { icon: 'ti-world-check', title: 'ระบบควบคุมการส่งออกอัตโนมัติ', desc: 'เครื่องมือที่จัดหมวดหมู่เอกสารและข้อมูล กำหนดสิทธิ์ตามสถานะของผู้ใช้ โปรเจกต์ และระดับการเข้าถึง และเก็บ Log ที่แก้ไขย้อนหลังไม่ได้ว่าใครเปิดอะไรบ้าง แทนการตรวจด้วยมือและอนุมัติทางอีเมลที่ช้าและตรวจสอบยาก เจ้าหน้าที่ Compliance ยังเป็นคนกำหนดกฎเหมือนเดิม ส่วนระบบจะบังคับใช้กฎให้เหมือนกันทุกครั้ง' },
    { icon: 'ti-tool', title: 'ปรับปรุงระบบสำคัญรุ่นเก่า', desc: 'ปรับปรุงซอฟต์แวร์ Avionics และระบบสั่งการรุ่นเก่าทีละขั้น โดยยังรักษาใบรับรองและ Safety Case ที่มีอยู่ไว้ เรามักเริ่มจากสำรวจอินเทอร์เฟซทั้งหมดและทำชั้นเชื่อมต่อบางๆ ก่อน แล้วค่อยเปลี่ยนทีละส่วนพร้อมแผนย้อนกลับของแต่ละส่วน ผลที่ได้คืออินเทอร์เฟซสมัยใหม่และการเชื่อมต่อ Cloud โดยไม่ต้องรื้อเขียนใหม่ทั้งหมดแบบเสี่ยงๆ' },
  ]

  const techStack = ['React', 'Node.js', 'Rust', 'Kubernetes', 'AWS GovCloud', 'PostgreSQL', 'gRPC', 'MQTT', 'Digital Twin', 'Machine Learning', 'Zero Trust', 'FIPS 140-2', 'DO-178C', 'NestJS', 'Tauri']

  const useCases = isEN ? [
    { no: '01', title: 'Secure Communications Platform', desc: 'A messaging and command system for teams that operate across hostile or unreliable networks. Identity is verified for every session, messages are encrypted from sender to recipient, and admins can revoke a lost device immediately. Typical deliverables are web and mobile clients, an admin console, key-management setup and a security test report.' },
    { no: '02', title: 'Supply-Chain & Parts-Traceability System', desc: 'A traceability system for a maintenance shop or manufacturer that has to prove where every part came from. Each part gets a digital record that collects vendor approval, certificates and inspection results, and the system flags suspect parts before they reach an aircraft. Auditors can pull a complete history for any serial number in a few clicks.' },
    { no: '03', title: 'Mission Simulation & Digital-Twin Platform', desc: 'A digital-twin environment for rehearsing missions, forecasting maintenance and training operators. Engineers feed in telemetry and configuration, run scenarios such as a sensor failure or a changed orbit, and compare the result with what the real system did. Training teams use the same model so operators practise on something close to the real thing.' },
  ] : [
    { no: '01', title: 'ระบบสื่อสารที่ปลอดภัย', desc: 'ระบบส่งข้อความและคำสั่งสำหรับทีมที่ต้องทำงานบนเครือข่ายที่ไม่ปลอดภัยหรือไม่เสถียร ยืนยันตัวตนทุกเซสชัน เข้ารหัสข้อความจากผู้ส่งถึงผู้รับ และแอดมินตัดสิทธิ์อุปกรณ์ที่หายได้ทันที งานที่ส่งมอบมักมี Client บนเว็บและมือถือ หน้าคอนโซลสำหรับแอดมิน การตั้งค่าการจัดการ Key และรายงานผลทดสอบด้านความปลอดภัย' },
    { no: '02', title: 'ระบบตามรอยชิ้นส่วนและซัพพลายเชน', desc: 'ระบบตามรอยชิ้นส่วนสำหรับโรงซ่อมบำรุงหรือผู้ผลิตที่ต้องพิสูจน์ได้ว่าทุกชิ้นส่วนมาจากไหน แต่ละชิ้นจะมีบันทึกดิจิทัลที่รวมสถานะอนุมัติผู้ผลิต ใบรับรอง และผลตรวจรับ และระบบจะแจ้งเตือนชิ้นส่วนที่น่าสงสัยก่อนถึงเครื่องบิน ผู้ตรวจสอบเรียกประวัติเต็มของ Serial Number ไหนก็ได้ในไม่กี่คลิก' },
    { no: '03', title: 'แพลตฟอร์มจำลองภารกิจและ Digital Twin', desc: 'สภาพแวดล้อม Digital Twin สำหรับซ้อมภารกิจ คาดการณ์การซ่อมบำรุง และฝึกผู้ปฏิบัติงาน วิศวกรป้อนข้อมูล Telemetry และค่าคอนฟิก แล้วลองสถานการณ์ เช่น เซนเซอร์เสียหรือวงโคจรเปลี่ยน จากนั้นเทียบผลกับที่ระบบจริงทำ ทีมฝึกอบรมใช้โมเดลเดียวกัน ผู้ปฏิบัติงานจึงได้ฝึกกับของที่ใกล้เคียงของจริง' },
  ]

  const heroVisual = <IndustryHero kind="aerospace-defense" isEN={isEN} />

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
                  {isEN ? 'Aerospace &' : 'การบินอวกาศ &'}<br />{isEN ? 'Defense' : 'กลาโหม'}
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
                  ? 'Aerospace and defense software lives under rules most commercial projects never meet: export controls, security clearances, certification evidence, and parts that stay in service for decades. We build secure communications platforms, satellite and ground-station dashboards, parts-traceability systems and digital-twin simulation tools for organisations working under those rules. Each project starts by mapping which data, users and networks are involved and which standards apply, so the design respects them from the first sprint. For Thai and Southeast Asian organisations we can also plan on-premise or locally hosted deployment where policy says data has to stay in the country.'
                  : 'งานด้านการบินอวกาศและกลาโหมมีกฎที่โปรเจกต์ทั่วไปไม่ค่อยพบ ทั้งการควบคุมการส่งออก ระดับการเข้าถึงข้อมูล หลักฐานสำหรับขอใบรับรอง และชิ้นส่วนที่ต้องใช้งานกันเป็นสิบๆ ปี เรารับสร้างระบบสื่อสารที่ปลอดภัย แดชบอร์ดสำหรับดาวเทียมและ Ground Station ระบบตามรอยชิ้นส่วน และเครื่องมือจำลอง Digital Twin ให้องค์กรที่ทำงานภายใต้กฎเหล่านี้ ทุกโปรเจกต์เราจะเริ่มจากนั่งดูด้วยกันก่อนว่ามีข้อมูล ผู้ใช้ และเครือข่ายอะไรเกี่ยวข้องบ้าง และต้องทำตามมาตรฐานข้อไหน เพื่อให้การออกแบบรองรับกฎเหล่านั้นตั้งแต่สปรินต์แรก ถ้าองค์กรของคุณต้องเก็บข้อมูลไว้ในประเทศ เราก็วางแผนให้ติดตั้งบนระบบของคุณเองหรือโฮสต์ในไทยได้'}
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
