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
  const title = isEN ? "Professional Services Software & Digital Solutions | Haliviq" : "บริการวิชาชีพ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Client, document, and time-billing software for consultancies, law firms, accountants, and other firms that sell expertise by the hour or by the project."
    : "ซอฟต์แวร์ดูแลลูกค้า จัดการเอกสาร และบันทึกเวลาออกบิล สำหรับบริษัทที่ปรึกษา สำนักงานกฎหมาย สำนักงานบัญชี…"
  const url = `https://haliviq.com/${params.lang}/industries/professional-services`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Professional Services' : 'อุตสาหกรรม / บริการวิชาชีพ'
  const heroSubhead = isEN
    ? 'Client, document, and time-billing software for consultancies, law firms, accountants, and other firms that sell expertise by the hour or by the project.'
    : 'ซอฟต์แวร์ดูแลลูกค้า จัดการเอกสาร และบันทึกเวลาออกบิล สำหรับบริษัทที่ปรึกษา สำนักงานกฎหมาย สำนักงานบัญชี และธุรกิจที่ขายความเชี่ยวชาญเป็นรายชั่วโมงหรือรายโปรเจกต์'

  const challenges = isEN ? [
    { icon: 'ti-files', title: 'Manual Document-Heavy Workflows', desc: 'Engagement letters, proposals, contracts, and reports are often drafted from an old file with the client name changed by hand, then emailed back and forth for approval. Mistakes creep in, such as a wrong date, a clause from another client, or an out-of-date template, and nobody can say which version is final. Document automation fills in standard documents from client data, routes them for approval, and stores the signed version where the team can find it.' },
    { icon: 'ti-eye-search', title: 'Inconsistent Client-Engagement Visibility', desc: 'Partners want to know where every engagement stands: who is working on it, what has been delivered, what is overdue, and what has been billed. In many firms that picture lives in individual inboxes and spreadsheets, so a status question means asking three people. We build an engagement view that pulls contacts, deadlines, documents, and fees together, and tells you which clients have not heard from you in a while.' },
    { icon: 'ti-clock-dollar', title: 'Time-Tracking & Billing Accuracy', desc: 'Time is the product, and it leaks. Hours are remembered on Friday afternoon rather than recorded when they happen, write-offs are decided late, and invoices go out weeks after the work. Thai billing also has its own paperwork, such as tax invoices and withholding-tax certificates. We build timers and quick-entry tools that fit into the day, link time to matters and rates, and prepare invoices for review instead of starting from a blank sheet.' },
    { icon: 'ti-network', title: 'Knowledge Silos Across Teams & Offices', desc: 'A firm\'s best know-how is usually in the heads of a few senior people, or buried in old folders on someone\'s laptop. When they are busy or leave, juniors start from scratch. We build a searchable knowledge portal for templates, precedents, past proposals, and how-to notes, with permissions so confidential client material stays restricted, and search that works on both Thai and English text.' },
  ] : [
    { icon: 'ti-files', title: 'งานเอกสารที่ยังทำด้วยมือ', desc: 'จดหมายตกลงจ้างงาน ข้อเสนอ สัญญา และรายงาน มักร่างจากไฟล์เก่าแล้วแก้ชื่อลูกค้าด้วยมือ ก่อนส่งอีเมลไปมาเพื่อขออนุมัติ ความผิดพลาดแทรกเข้ามาได้ง่าย เช่น วันที่ผิด ข้อสัญญาของลูกค้าอีกราย หรือแม่แบบที่ล้าสมัย และไม่มีใครบอกได้ว่าฉบับไหนคือฉบับสุดท้าย ระบบสร้างเอกสารอัตโนมัติจะเติมข้อมูลลูกค้าลงเอกสารมาตรฐาน ส่งเข้าสายอนุมัติ และเก็บฉบับที่เซ็นแล้วไว้ในที่ที่ทีมหาเจอ' },
    { icon: 'ti-eye-search', title: 'มองเห็นสถานะงานลูกค้าไม่สม่ำเสมอ', desc: 'พาร์ตเนอร์อยากรู้ว่างานแต่ละเรื่องอยู่ตรงไหน ใครทำอยู่ ส่งอะไรไปแล้ว อะไรเลยกำหนด และเรียกเก็บเงินไปเท่าไรแล้ว หลายบริษัทภาพนี้กระจายอยู่ในอีเมลของแต่ละคนและสเปรดชีต พอจะถามสถานะก็ต้องถามสามคน เราสร้างหน้ารวมงานที่ดึงผู้ติดต่อ กำหนดส่ง เอกสาร และค่าบริการมาไว้ด้วยกัน และบอกด้วยว่าลูกค้ารายไหนไม่ได้ติดต่อมานานแล้ว' },
    { icon: 'ti-clock-dollar', title: 'บันทึกเวลาและออกบิลให้แม่นยำ', desc: 'เวลาคือสิ่งที่เราขาย และมันรั่วไหลได้ง่าย หลายคนจำชั่วโมงทำงานได้ตอนบ่ายวันศุกร์แทนที่จะบันทึกตอนทำ ตัดสินใจเรื่องตัดชั่วโมงที่เรียกเก็บไม่ได้ช้า และใบแจ้งหนี้ออกหลังงานเสร็จหลายสัปดาห์ การออกบิลในไทยยังมีเอกสารเฉพาะ เช่น ใบกำกับภาษีและหนังสือรับรองการหักภาษี ณ ที่จ่าย เราทำตัวจับเวลาและช่องบันทึกเร็วที่เข้ากับวันทำงาน โยงเวลากับงานและเรตค่าบริการ และเตรียมใบแจ้งหนี้ให้ตรวจ แทนการเริ่มจากหน้าว่าง' },
    { icon: 'ti-network', title: 'ความรู้ถูกเก็บแยกกันระหว่างทีมและสำนักงาน', desc: 'ความรู้ที่ดีที่สุดของบริษัทมักอยู่ในหัวของผู้อาวุโสไม่กี่คน หรือฝังอยู่ในโฟลเดอร์เก่าบนโน้ตบุ๊กของใครสักคน พอเขาไม่ว่างหรือลาออก น้อง ๆ ก็ต้องเริ่มจากศูนย์ เราสร้างคลังความรู้ที่ค้นหาได้ สำหรับแม่แบบ ตัวอย่างงานเก่า ข้อเสนอที่เคยทำ และบันทึกวิธีทำงาน พร้อมกำหนดสิทธิ์ให้เอกสารลับของลูกค้าเข้าถึงได้เฉพาะคนที่เกี่ยวข้อง และค้นหาได้ทั้งข้อความภาษาไทยและอังกฤษ' },
  ]

  const metrics = [
    { value: '$122B', label: isEN ? 'Global Legal & Professional Services Software Market by 2030' : 'มูลค่าตลาดซอฟต์แวร์สำหรับบริการวิชาชีพและกฎหมายทั่วโลกภายในปี 2030', source: 'Grand View Research Professional Services Software Report, 2024' },
    { value: '25%', label: isEN ? 'Improvement in Billable-Hour Recovery from Automation' : 'ชั่วโมงงานที่เรียกเก็บเงินได้เพิ่มขึ้นจากระบบอัตโนมัติ', source: 'Deloitte Professional Services Automation Study, 2024' },
    { value: '61%', label: isEN ? 'Of Firms Now Piloting AI-Assisted Document Tools' : 'ของบริษัทที่กำลังทดลองใช้เครื่องมือเอกสารที่มี AI ช่วย', source: 'Thomson Reuters Future of Professionals Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-address-book', title: 'Client-Engagement CRM Dashboards', desc: 'A client-centred CRM for firms: one record per client with contacts, engagements, documents, notes, and fees, plus reminders for renewals, deadlines, and check-ins. Partners get a dashboard of the relationships that need attention; business development sees the pipeline of proposals. Built around how professional firms actually sell, which is mostly through relationships, not a sales funnel.' },
    { icon: 'ti-signature', title: 'Document Automation & E-Signature Systems', desc: 'Templates for engagement letters, contracts, and reports that fill in from client data, route for review and approval, and collect e-signatures. Every version is stored with a record of who changed and approved it. Which documents may be signed electronically is a question for your own legal advisers, and we configure the flow to match their answer.' },
    { icon: 'ti-clock-hour-4', title: 'Time-Tracking & Billing Platforms', desc: 'Timers, calendar suggestions, and mobile entry that make recording time quick, with rates and budgets per engagement. Managers see utilisation, unbilled work, and engagements nearing budget. Invoices are drafted from approved time, with Thai tax invoice and withholding-tax details handled in the layout your accountant expects.' },
    { icon: 'ti-books', title: 'Knowledge-Management Portals', desc: 'A portal for precedents, templates, past work, and how-we-do-it guides, with tagging, permissions, and fast search in Thai and English. New joiners find answers without interrupting a senior colleague. We can add an internal question-and-answer assistant that cites the document it used, so people can check the source.' },
    { icon: 'ti-briefcase', title: 'Project & Matter-Management Systems', desc: 'Matter and project workspaces with tasks, deadlines, document folders, team assignments, and a clear audit trail. Standard workflows, such as company registration or an audit engagement, can be saved as templates so each new job starts with the right steps. Clients can be given a limited view of progress when you want them to be.' },
    { icon: 'ti-robot', title: 'AI-Assisted Research Tools', desc: 'Assistants that summarise long documents, extract key dates and clauses, and help draft first versions, always showing the source passage so a professional can verify it. They run on your own document store with confidentiality controls. They are meant to save reading time, not to replace professional judgement.' },
  ] : [
    { icon: 'ti-address-book', title: 'Client-Engagement CRM Dashboards', desc: 'CRM ที่ยึดลูกค้าเป็นศูนย์กลางสำหรับบริษัทวิชาชีพ มีประวัติลูกค้าหนึ่งรายต่อหนึ่งหน้า รวมผู้ติดต่อ งาน เอกสาร โน้ต และค่าบริการ พร้อมแจ้งเตือนเรื่องต่ออายุ กำหนดส่ง และการติดต่อหาลูกค้า พาร์ตเนอร์ได้แดชบอร์ดของลูกค้าที่ควรดูแลเป็นพิเศษ ส่วนทีมพัฒนาธุรกิจเห็นข้อเสนอที่อยู่ระหว่างทาง ออกแบบตามวิธีที่บริษัทวิชาชีพขายงานจริง ซึ่งส่วนใหญ่มาจากความสัมพันธ์ ไม่ใช่ฟันเนลขาย' },
    { icon: 'ti-signature', title: 'Document Automation & E-Signature Systems', desc: 'แม่แบบจดหมายตกลงจ้างงาน สัญญา และรายงาน ที่เติมข้อมูลจากลูกค้าเอง ส่งตรวจและอนุมัติตามสาย และรับลายเซ็นอิเล็กทรอนิกส์ ทุกเวอร์ชันเก็บไว้พร้อมบันทึกว่าใครแก้และใครอนุมัติ เอกสารประเภทไหนเซ็นอิเล็กทรอนิกส์ได้หรือไม่ ควรถามที่ปรึกษากฎหมายของคุณเอง แล้วเราตั้งขั้นตอนให้ตรงกับคำตอบนั้น' },
    { icon: 'ti-clock-hour-4', title: 'Time-Tracking & Billing Platforms', desc: 'ตัวจับเวลา ข้อเสนอแนะจากปฏิทิน และช่องบันทึกบนมือถือที่ทำให้บันทึกเวลาได้เร็ว พร้อมเรตและงบต่องาน ผู้จัดการเห็นอัตราการใช้เวลา งานที่ยังไม่ได้เรียกเก็บ และงานที่ใกล้เกินงบ ใบแจ้งหนี้ร่างจากเวลาที่อนุมัติแล้ว โดยจัดรายละเอียดใบกำกับภาษีและการหักภาษี ณ ที่จ่ายตามรูปแบบที่นักบัญชีของคุณใช้' },
    { icon: 'ti-books', title: 'Knowledge-Management Portals', desc: 'คลังสำหรับตัวอย่างงานเก่า แม่แบบ งานที่เคยทำ และคู่มือวิธีทำงาน ติดแท็กได้ กำหนดสิทธิ์ได้ และค้นหาเร็วทั้งภาษาไทยและอังกฤษ คนเข้าใหม่หาคำตอบเองได้โดยไม่ต้องไปขัดจังหวะรุ่นพี่ เราเพิ่มผู้ช่วยตอบคำถามภายในที่อ้างอิงเอกสารที่ใช้ตอบได้ด้วย คนใช้จะตรวจแหล่งที่มาเองได้' },
    { icon: 'ti-briefcase', title: 'Project & Matter-Management Systems', desc: 'พื้นที่ทำงานรายคดีหรือรายโปรเจกต์ มีงานย่อย กำหนดส่ง โฟลเดอร์เอกสาร การมอบหมายทีม และบันทึกการเข้าถึงที่ตรวจย้อนหลังได้ ขั้นตอนมาตรฐาน เช่น จดทะเบียนบริษัท หรืองานตรวจสอบบัญชี เซฟเป็นแม่แบบไว้ได้ งานใหม่แต่ละเรื่องจะเริ่มพร้อมขั้นตอนที่ถูกต้อง และถ้าต้องการ ก็เปิดให้ลูกค้าดูความคืบหน้าแบบจำกัดสิทธิ์ได้' },
    { icon: 'ti-robot', title: 'AI-Assisted Research Tools', desc: 'ผู้ช่วยที่สรุปเอกสารยาว ดึงวันที่และข้อสัญญาสำคัญ และช่วยร่างฉบับแรก โดยแสดงข้อความต้นฉบับที่ใช้อ้างอิงเสมอ เพื่อให้ผู้เชี่ยวชาญตรวจสอบได้ ทำงานบนคลังเอกสารของคุณเองพร้อมการควบคุมความลับ ตั้งใจให้ประหยัดเวลาอ่าน ไม่ได้มาแทนวิจารณญาณของผู้เชี่ยวชาญ' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'DocuSign API', 'AI/ML', 'GraphQL', 'AWS', 'Redis', 'Elasticsearch', 'OAuth 2.0', 'Stripe', 'PDF Processing', 'NestJS', 'Vue']

  const useCases = isEN ? [
    { no: '01', title: 'Client-Engagement CRM', desc: 'A single place for client contacts, engagements, proposals, documents, and fees. Partners open a client and see what is active, what is overdue, and what was last discussed; managers see the pipeline of proposals and renewals. It can sync with the email and calendar your team already uses, so people do not need to log everything twice.' },
    { no: '02', title: 'Document Automation Platform', desc: 'A system that produces engagement letters, contracts, and standard reports from templates, fills them from the client record, sends them for approval, and gathers signatures. Staff see where each document is stuck. It is a good first project for a firm that drafts the same ten documents again and again.' },
    { no: '03', title: 'Time-Tracking & Billing System', desc: 'A time and billing system with quick entry, rate cards, budgets, approval, and invoice drafts, plus reports on utilisation and unbilled work. Finance gets clean data for tax invoices and withholding-tax certificates. Firms often find forgotten hours in the first month, simply because recording becomes easy.' },
  ] : [
    { no: '01', title: 'Client-Engagement CRM', desc: 'ที่เดียวสำหรับผู้ติดต่อ งาน ข้อเสนอ เอกสาร และค่าบริการของลูกค้า พาร์ตเนอร์เปิดหน้าลูกค้าแล้วเห็นว่าอะไรกำลังทำอยู่ อะไรเลยกำหนด และคุยอะไรกันล่าสุด ผู้จัดการเห็นข้อเสนอและงานต่ออายุที่อยู่ระหว่างทาง เชื่อมกับอีเมลและปฏิทินที่ทีมใช้อยู่ได้ ไม่ต้องบันทึกสองรอบ' },
    { no: '02', title: 'Document Automation Platform', desc: 'ระบบที่สร้างจดหมายตกลงจ้างงาน สัญญา และรายงานมาตรฐานจากแม่แบบ เติมข้อมูลจากประวัติลูกค้า ส่งขออนุมัติ และเก็บลายเซ็น พนักงานเห็นว่าเอกสารแต่ละฉบับค้างอยู่ตรงไหน เป็นโปรเจกต์แรกที่ดีสำหรับบริษัทที่ร่างเอกสารสิบแบบเดิมซ้ำแล้วซ้ำอีก' },
    { no: '03', title: 'Time-Tracking & Billing System', desc: 'ระบบบันทึกเวลาและออกบิล มีช่องบันทึกเร็ว เรตค่าบริการ งบ การอนุมัติ และร่างใบแจ้งหนี้ พร้อมรายงานอัตราการใช้เวลาและงานที่ยังไม่ได้เรียกเก็บ ฝ่ายการเงินได้ข้อมูลที่สะอาดสำหรับใบกำกับภาษีและหนังสือรับรองการหักภาษี ณ ที่จ่าย หลายบริษัทเจอชั่วโมงที่ลืมเรียกเก็บตั้งแต่เดือนแรก เพียงเพราะการบันทึกง่ายขึ้น' },
  ]

  const heroVisual = <IndustryHero kind="professional-services" isEN={isEN} />

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
                  {isEN ? 'Professional' : 'บริการ'}<br />{isEN ? 'Services' : 'วิชาชีพ'}
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
                  ? 'We build internal systems for firms that sell expertise: client-engagement CRMs, document automation with e-signature, time tracking and billing, knowledge portals, and matter or project management. Our starting point is the way your partners, managers, and juniors already work, such as how an engagement is opened, how documents are drafted and approved, and how hours turn into an invoice. We then remove the retyping and chasing in between, without forcing the firm into a rigid template. Because client material is confidential, we build with access control, audit trails, and PDPA in mind, and we can keep data in Thailand when a client requires it.'
                  : 'เราสร้างระบบภายในให้บริษัทที่ขายความเชี่ยวชาญ ทั้ง CRM ดูแลลูกค้า ระบบสร้างเอกสารอัตโนมัติพร้อมลายเซ็นอิเล็กทรอนิกส์ ระบบบันทึกเวลาและออกบิล คลังความรู้ และระบบจัดการคดีหรือโปรเจกต์ เราเริ่มจากวิธีทำงานที่พาร์ตเนอร์ ผู้จัดการ และน้อง ๆ ทำอยู่จริง เช่น เปิดงานใหม่ยังไง ร่างและอนุมัติเอกสารยังไง และชั่วโมงทำงานกลายเป็นใบแจ้งหนี้ได้ยังไง แล้วค่อยตัดงานพิมพ์ซ้ำและงานตามทวงระหว่างทางออก โดยไม่บังคับให้ทั้งบริษัทต้องใช้แม่แบบที่แข็งเกินไป เพราะเอกสารลูกค้าเป็นความลับ เราจึงสร้างโดยคำนึงถึงการกำหนดสิทธิ์ การเก็บประวัติการเข้าถึง และ PDPA และเก็บข้อมูลไว้ในไทยได้ถ้าลูกค้าของคุณต้องการ'}
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
                ? 'The everyday friction we find in consulting, legal, and advisory firms: paperwork, scattered client information, lost billable time, and knowledge locked in individuals.'
                : 'ปัญหากวนใจประจำวันที่เราเจอในบริษัทที่ปรึกษา สำนักงานกฎหมาย และสำนักงานบัญชี คืองานเอกสาร ข้อมูลลูกค้าที่กระจาย ชั่วโมงเรียกเก็บที่หลุดหาย และความรู้ที่อยู่แต่ในหัวคนบางคน'}
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
              {isEN ? 'What we build for professional firms, and how each tool saves time for partners, fee-earners, and the back office.' : 'ระบบที่เราสร้างให้บริษัทวิชาชีพ และวิธีที่แต่ละเครื่องมือช่วยประหยัดเวลาให้พาร์ตเนอร์ ทีมที่ทำงานเรียกเก็บเงิน และฝ่ายหลังบ้าน'}
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
                ? 'Document, search, and security tools we use for systems that handle confidential client information.'
                : 'เครื่องมือด้านเอกสาร การค้นหา และความปลอดภัยที่เราใช้กับระบบที่ต้องดูแลข้อมูลลับของลูกค้า'}
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
              {isEN ? 'Three typical projects for professional firms, with what gets built, who uses it, and what improves.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบสำหรับบริษัทวิชาชีพ ว่าสร้างอะไร ใครใช้ และอะไรดีขึ้น'}
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
