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
  const title = isEN ? "Government & Public Sector Software & Digital Solutions | Haliviq" : "ภาครัฐและหน่วยงานสาธารณะ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Citizen-facing online services, licence and case workflows and secure data exchange for Thai ministries, local administrations and public agencies, built to…"
    : "บริการออนไลน์สำหรับประชาชน ระบบขอใบอนุญาตและติดตามเรื่อง และการแลกเปลี่ยนข้อมูลอย่างปลอดภัย สำหรับกระทรวง องค์กรปกครองส่วนท้องถิ่น…"
  const url = `https://www.haliviq.com/${params.lang}/industries/government`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Government & Public Sector' : 'อุตสาหกรรม / ภาครัฐและหน่วยงานสาธารณะ'
  const heroSubhead = isEN
    ? 'Citizen-facing online services, licence and case workflows and secure data exchange for Thai ministries, local administrations and public agencies, built to be accessible to everyone and careful with personal data.'
    : 'บริการออนไลน์สำหรับประชาชน ระบบขอใบอนุญาตและติดตามเรื่อง และการแลกเปลี่ยนข้อมูลอย่างปลอดภัย สำหรับกระทรวง องค์กรปกครองส่วนท้องถิ่น และหน่วยงานรัฐในไทย ออกแบบให้ทุกคนใช้ได้และดูแลข้อมูลส่วนบุคคลอย่างรอบคอบ'

  const challenges = isEN ? [
    { icon: 'ti-server-cog', title: 'Old Systems That Cannot Stop', desc: 'Many agencies still run registries, payment and licensing on mainframes or large single-block applications that were written long before mobile or APIs. They cannot simply be switched off, because people queue for the services they provide every day. We put an API layer in front of the old system first, then move services one at a time, so citizens keep getting served throughout.' },
    { icon: 'ti-shield-lock', title: 'Citizen Data and Security Rules', desc: 'Agencies hold national ID numbers, addresses, tax and health details, and are expected to follow PDPA together with their own security policies. Every officer should see only what the job needs, and every access should be traceable. We build role-based permissions, encryption and audit logs into each service and document them for your data-protection officer and security reviewers.' },
    { icon: 'ti-accessible', title: 'Services That Everyone Can Use', desc: 'People who use public services include older citizens, people with low vision, users on cheap phones and people with weak mobile data in provincial areas. A form that only works on a new laptop excludes them. We build to WCAG, use plain Thai wording, keep pages light, and test with screen readers and low-end devices before launch.' },
    { icon: 'ti-topology-star-3', title: 'Agencies That Do Not Share Data', desc: 'A citizen applying for one permit is often asked to bring the same documents from several offices, because each agency keeps its own records. Connecting them takes agreed data definitions, consent from the citizen and secure interfaces, not just technology. We work with each agency to define what is shared, who approves it, and how errors are corrected.' },
  ] : [
    { icon: 'ti-server-cog', title: 'ระบบเก่าที่หยุดไม่ได้', desc: 'หลายหน่วยงานยังใช้ทะเบียน ระบบรับชำระ และระบบใบอนุญาตที่อยู่บน Mainframe หรือแอปก้อนใหญ่ก้อนเดียว ซึ่งเขียนมาก่อนยุคมือถือและ API จะปิดทิ้งเลยก็ไม่ได้ เพราะทุกวันมีคนมารอรับบริการอยู่ เราจึงทำชั้น API ครอบหน้าระบบเก่าก่อน แล้วค่อยย้ายบริการทีละตัว ประชาชนจะได้ใช้บริการต่อเนื่องตลอดช่วงเปลี่ยน' },
    { icon: 'ti-shield-lock', title: 'กฎเรื่องข้อมูลประชาชนและความปลอดภัย', desc: 'หน่วยงานเก็บเลขบัตรประชาชน ที่อยู่ ข้อมูลภาษี และข้อมูลสุขภาพ และต้องทำตาม PDPA ควบคู่กับนโยบายความปลอดภัยของตัวเอง เจ้าหน้าที่แต่ละคนควรเห็นเฉพาะข้อมูลที่งานต้องใช้ และทุกการเข้าถึงต้องตรวจสอบย้อนหลังได้ เราใส่การกำหนดสิทธิ์ตามบทบาท การเข้ารหัส และ Audit Log ไว้ในทุกบริการ และทำเอกสารให้เจ้าหน้าที่คุ้มครองข้อมูลกับผู้ตรวจด้านความปลอดภัยของคุณใช้ได้' },
    { icon: 'ti-accessible', title: 'บริการที่ทุกคนใช้ได้', desc: 'คนที่ใช้บริการภาครัฐมีทั้งผู้สูงอายุ ผู้มีปัญหาด้านสายตา คนที่ใช้มือถือราคาไม่แพง และคนต่างจังหวัดที่เน็ตมือถือไม่แรง ถ้าฟอร์มใช้ได้แค่บนแล็ปท็อปรุ่นใหม่ ก็เท่ากับกันคนกลุ่มนี้ออกไป เราสร้างตามมาตรฐาน WCAG ใช้ภาษาไทยที่อ่านง่าย ทำหน้าเว็บให้เบา และทดสอบกับ Screen Reader และมือถือรุ่นเล็กก่อนเปิดใช้' },
    { icon: 'ti-topology-star-3', title: 'หน่วยงานที่ไม่ได้แชร์ข้อมูลกัน', desc: 'ประชาชนที่มายื่นขอใบอนุญาตเรื่องเดียวมักถูกขอเอกสารชุดเดิมจากหลายที่ เพราะแต่ละหน่วยงานเก็บข้อมูลของตัวเอง การเชื่อมกันต้องอาศัยการตกลงนิยามข้อมูล ความยินยอมของประชาชน และช่องทางเชื่อมต่อที่ปลอดภัย ไม่ได้ขึ้นกับเทคโนโลยีอย่างเดียว เราคุยกับแต่ละหน่วยงานเพื่อกำหนดว่าจะแชร์อะไร ใครเป็นผู้อนุมัติ และถ้าข้อมูลผิดจะแก้ไขอย่างไร' },
  ]

  const metrics = [
    { value: '$1.2T', label: isEN ? 'Global GovTech & E-Government Market by 2030' : 'มูลค่าตลาด GovTech และ E-Government ทั่วโลกภายในปี 2030', source: 'MarketsandMarkets GovTech Forecast, 2024' },
    { value: '68%', label: isEN ? 'Citizen Adoption Rate of Digital Government Services' : 'สัดส่วนประชาชนที่ใช้บริการภาครัฐดิจิทัล', source: 'OECD Digital Government Index, 2024' },
    { value: '40%', label: isEN ? 'Cost Savings from Digitized Public Services' : 'ต้นทุนที่ลดลงจากบริการภาครัฐที่ทำเป็นดิจิทัล', source: 'Deloitte Public Sector Digital Transformation, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-building-bank', title: 'E-Government Portals', desc: 'One citizen-facing site or app that brings forms, fee payment and status tracking from several agencies together. It suits ministries and provincial or municipal offices that want people to stop hunting for the right counter. We organise the content by what people need to do, not by how the organisation chart looks.' },
    { icon: 'ti-id-badge-2', title: 'Digital-ID & Permit Systems', desc: 'Identity verification and online permit or licence applications, with document upload, officer review and e-signature. Citizens apply from home; officers see a complete file instead of a stack of paper. We connect to the national digital-ID options your agency is allowed to use.' },
    { icon: 'ti-accessible', title: 'Accessibility-Compliant Public Websites', desc: 'Public websites and apps built to WCAG with clear Thai writing, readable contrast and full keyboard use. Agencies get sites that work for older users and for people using assistive tools. We include an accessibility check in every release, not as a one-off audit.' },
    { icon: 'ti-lock-square', title: 'Secure Citizen-Data Platforms', desc: 'Data stores and services designed on Zero Trust principles, with encryption in storage and transit, key management and full audit logging. They suit agencies holding registries, benefits or case files. We can plan for government cloud or on-premise hosting when policy requires data to stay inside the country.' },
    { icon: 'ti-affiliate', title: 'Cross-Agency Data-Integration Systems', desc: 'Shared APIs and an integration layer that let agencies exchange verified data with citizen consent. A person no longer has to carry the same certificate from office to office. We start with one real service that spans two agencies, prove it works, and then widen.' },
    { icon: 'ti-layout-dashboard', title: 'Digital-Service Delivery Dashboards', desc: 'Dashboards that show how many requests came in, how long each step takes, where cases get stuck and how citizens rate the service. Directors and service owners use them to decide where to add staff or simplify a process. Definitions are agreed with your team so numbers match what people expect.' },
  ] : [
    { icon: 'ti-building-bank', title: 'E-Government Portals', desc: 'เว็บไซต์หรือแอปกลางสำหรับประชาชน ที่รวมแบบฟอร์ม การจ่ายค่าธรรมเนียม และการติดตามสถานะ จากหลายหน่วยงานไว้ด้วยกัน เหมาะกับกระทรวงและสำนักงานระดับจังหวัดหรือเทศบาล ที่อยากให้ประชาชนไม่ต้องเดินหาว่าต้องไปเคาน์เตอร์ไหน เราจัดเนื้อหาตามสิ่งที่ประชาชนต้องการทำ ไม่ใช่ตามผังโครงสร้างองค์กร' },
    { icon: 'ti-id-badge-2', title: 'Digital-ID และระบบใบอนุญาต', desc: 'ระบบยืนยันตัวตนและยื่นขอใบอนุญาตออนไลน์ พร้อมอัปโหลดเอกสาร ให้เจ้าหน้าที่ตรวจ และลงนามอิเล็กทรอนิกส์ ประชาชนยื่นเรื่องได้จากที่บ้าน ส่วนเจ้าหน้าที่เห็นแฟ้มครบในหน้าเดียวแทนกองกระดาษ เราเชื่อมกับตัวเลือก Digital ID ระดับชาติที่หน่วยงานของคุณใช้ได้' },
    { icon: 'ti-accessible', title: 'เว็บไซต์ภาครัฐที่ได้มาตรฐาน Accessibility', desc: 'เว็บไซต์และแอปภาครัฐที่สร้างตามมาตรฐาน WCAG เขียนภาษาไทยชัดเจน สีตัดกันอ่านง่าย และใช้ด้วยคีย์บอร์ดได้ครบ หน่วยงานจะได้เว็บที่ผู้สูงอายุและผู้ใช้เครื่องมือช่วยเหลือใช้งานได้ เราตรวจ Accessibility ในทุกรุ่นที่ปล่อย ไม่ใช่ตรวจครั้งเดียวแล้วจบ' },
    { icon: 'ti-lock-square', title: 'แพลตฟอร์มข้อมูลประชาชนที่ปลอดภัย', desc: 'ระบบเก็บและให้บริการข้อมูลที่ออกแบบตามแนวคิด Zero Trust เข้ารหัสทั้งตอนเก็บและตอนส่ง มีการจัดการ Key และ Audit Log ครบ เหมาะกับหน่วยงานที่ดูแลทะเบียน สวัสดิการ หรือแฟ้มคดี เราวางแผนให้ใช้ Cloud ของรัฐหรือติดตั้งในองค์กรได้ ถ้านโยบายกำหนดให้ข้อมูลอยู่ในประเทศ' },
    { icon: 'ti-affiliate', title: 'ระบบเชื่อมข้อมูลข้ามหน่วยงาน', desc: 'API กลางและชั้นเชื่อมต่อที่ให้หน่วยงานแลกเปลี่ยนข้อมูลที่ยืนยันแล้วเมื่อประชาชนยินยอม คนหนึ่งคนไม่ต้องถือใบรับรองใบเดิมไปทุกที่อีกต่อไป เราเริ่มจากบริการจริงหนึ่งตัวที่คร่อมสองหน่วยงาน พิสูจน์ว่าใช้ได้ แล้วค่อยขยาย' },
    { icon: 'ti-layout-dashboard', title: 'Dashboard ติดตามการให้บริการดิจิทัล', desc: 'Dashboard ที่แสดงว่ามีคำขอเข้ามากี่เรื่อง แต่ละขั้นใช้เวลาเท่าไหร่ เรื่องไปติดอยู่ตรงไหน และประชาชนให้คะแนนบริการอย่างไร ผู้อำนวยการและเจ้าของบริการใช้ตัดสินใจว่าควรเพิ่มคนหรือลดขั้นตอนตรงไหน เรากำหนดนิยามตัวเลขร่วมกับทีมของคุณ เพื่อให้ตัวเลขตรงกับที่ทุกคนเข้าใจ' },
  ]

  const techStack = ['React', 'Node.js', 'PostgreSQL', 'AWS GovCloud', 'OAuth 2.0', 'Zero Trust', 'GraphQL', 'Kubernetes', 'Digital ID', 'WCAG', 'Elasticsearch', 'Redis', 'NestJS', 'Angular']

  const useCases = isEN ? [
    { no: '01', title: 'Citizen Services Portal', desc: 'A single account where residents request documents, pay fees and track applications handled by different agencies. We deliver the portal, the officer back office and the connections to each agency system. Services are added in waves, starting with the ones that generate the most counter visits.' },
    { no: '02', title: 'Digital Permit & Licensing System', desc: 'An online permit workflow with upload, officer review, automatic completeness checks, payment and a downloadable certificate. Applicants know where their file is, and officers stop chasing missing pages. We map your actual approval steps first so the system matches the regulation, not an idealised version.' },
    { no: '03', title: 'Cross-Agency Data Platform', desc: 'A secure exchange layer so one agency can request verified information from another with the citizen\'s consent. Every request is logged and can be reviewed. It removes repeated document collection while keeping each agency in control of its own data.' },
  ] : [
    { no: '01', title: 'พอร์ทัลบริการประชาชน', desc: 'บัญชีเดียวที่ประชาชนใช้ขอเอกสาร จ่ายค่าธรรมเนียม และติดตามคำขอที่หลายหน่วยงานดูแลอยู่ เราส่งมอบพอร์ทัล ระบบหลังบ้านสำหรับเจ้าหน้าที่ และการเชื่อมกับระบบของแต่ละหน่วยงาน บริการจะทยอยเพิ่มเป็นรอบ โดยเริ่มจากบริการที่คนมาที่เคาน์เตอร์มากที่สุด' },
    { no: '02', title: 'ระบบขอใบอนุญาตดิจิทัล', desc: 'ขั้นตอนขอใบอนุญาตออนไลน์ มีอัปโหลดเอกสาร เจ้าหน้าที่ตรวจ ตรวจความครบถ้วนอัตโนมัติ ชำระเงิน และดาวน์โหลดใบอนุญาต ผู้ยื่นรู้ว่าเรื่องอยู่ที่ไหน เจ้าหน้าที่ไม่ต้องตามเอกสารที่ขาด เราเริ่มจากเขียนแผนผังขั้นตอนอนุมัติจริงของคุณ เพื่อให้ระบบตรงกับกฎระเบียบ ไม่ใช่เวอร์ชันในอุดมคติ' },
    { no: '03', title: 'แพลตฟอร์มข้อมูลข้ามหน่วยงาน', desc: 'ชั้นแลกเปลี่ยนข้อมูลที่ปลอดภัย ให้หน่วยงานหนึ่งขอข้อมูลที่ยืนยันแล้วจากอีกหน่วยงานได้เมื่อประชาชนยินยอม ทุกคำขอมี Log ตรวจย้อนหลังได้ ช่วยตัดการเก็บเอกสารซ้ำ โดยที่แต่ละหน่วยงานยังควบคุมข้อมูลของตัวเองได้' },
  ]

  const heroVisual = <IndustryHero kind="government" isEN={isEN} />

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
                  {isEN ? 'Government &' : 'ภาครัฐ &'}<br />{isEN ? 'Public Sector' : 'หน่วยงานสาธารณะ'}
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
                  ? 'We help ministries, provincial and municipal offices and public organisations move services that people currently do in person, by paper or by phone onto reliable digital channels. Work starts by walking the real process with the officers who run it, so the online version follows the regulation and not an assumption. Accessibility, PDPA and the agency security policy are treated as requirements from the first sprint, and we can plan for government cloud or on-premise hosting where data must remain in Thailand. We also write handover documentation so your own team, or a later vendor, can maintain the system.'
                  : 'เราช่วยกระทรวง สำนักงานจังหวัด เทศบาล และองค์กรสาธารณะ ย้ายบริการที่ประชาชนยังต้องไปทำด้วยตัวเอง ทางกระดาษ หรือทางโทรศัพท์ ขึ้นมาอยู่บนช่องทางดิจิทัลที่เชื่อถือได้ งานเริ่มจากเดินดูขั้นตอนจริงกับเจ้าหน้าที่ที่ทำอยู่ เพื่อให้เวอร์ชันออนไลน์ตรงกับระเบียบ ไม่ใช่การคาดเดา เรื่อง Accessibility PDPA และนโยบายความปลอดภัยของหน่วยงานเราถือเป็นข้อกำหนดตั้งแต่สปรินต์แรก และวางแผนใช้ Cloud ของรัฐหรือติดตั้งในองค์กรได้ ถ้าข้อมูลต้องอยู่ในประเทศไทย เรายังเขียนเอกสารส่งมอบให้ทีมของคุณหรือผู้รับเหมารายถัดไปดูแลระบบต่อได้ด้วย'}
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
