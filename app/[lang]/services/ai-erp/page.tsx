import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'AI + ERP: 8 Ways to Cut Repeated Work | Haliviq' : 'AI + ERP 8 บริการลดงานซ้ำในองค์กร | Haliviq'
  const description = isEN
    ? 'Add AI on top of the ERP you already use: read documents into the system, take orders from chat, ask business data in plain language and more. Start with one job, measure it, then expand.'
    : 'ต่อยอด ERP ที่ใช้อยู่ด้วย AI อ่านเอกสารเข้าระบบ รับออเดอร์จากแชต ถามข้อมูลธุรกิจด้วยภาษาคน และอื่นๆ เริ่มจากหนึ่งงาน วัดผล แล้วค่อยขยาย'
  const url = `https://www.haliviq.com/${params.lang}/services/ai-erp`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'

  const badge = 'AI + ERP'
  const title = isEN ? 'Give Your ERP' : 'ให้ ERP ของคุณ'
  const subtitle = isEN ? 'an AI Assistant' : 'มีผู้ช่วย AI'
  const heroDesc = isEN
    ? 'You do not have to replace your ERP. ERP connects your business data; AI reads, summarises, searches and suggests. Start from the problems your team faces every day: retyping documents, slow order entry, waiting for reports.'
    : 'ไม่ต้องรื้อ ERP ที่ใช้อยู่ ERP เชื่อมข้อมูลธุรกิจ ส่วน AI ช่วยอ่าน สรุป ค้นหา และเสนอทางเลือก เริ่มจากปัญหาที่ทีมเจอทุกวัน เช่น คีย์เอกสารซ้ำ รับออเดอร์ช้า รอรายงานนาน'
  const heroBullets = isEN ? [
    '8 services, from reading documents to an ERP user assistant',
    'Works with the ERP you already run, such as SAP, Oracle, Microsoft Dynamics 365 or Odoo, where it can be connected',
    'A person approves anything important, and every action is logged',
    'Start with one job, measure it for real, then expand',
  ] : [
    '8 บริการ ตั้งแต่อ่านเอกสารเข้าระบบ ไปจนถึงผู้ช่วยใช้งาน ERP',
    'ทำงานกับ ERP ที่ใช้อยู่ เช่น SAP, Oracle, Microsoft Dynamics 365 หรือ Odoo เมื่อมีช่องทางเชื่อมต่อ',
    'รายการสำคัญให้คนอนุมัติเสมอ และบันทึกประวัติทุกการทำงาน',
    'เริ่มจากหนึ่งงาน วัดผลจริง แล้วค่อยขยาย',
  ]
  const whyTitle = isEN ? 'Why add AI to the ERP you have' : 'ทำไมต่อยอด ERP เดิมด้วย AI'
  const whyDesc = isEN
    ? 'Replacing an ERP is slow and risky. Adding one carefully chosen AI job is quick to test, easy to measure, and leaves your core system untouched.'
    : 'การเปลี่ยน ERP ใช้เวลานานและเสี่ยง แต่การเพิ่มงาน AI ที่เลือกมาแล้วหนึ่งงานทดสอบได้เร็ว วัดผลง่าย และไม่แตะระบบหลักของคุณ'
  const whyPoints = isEN ? [
    'Cuts repeated typing and checking, so the team spends time on decisions instead of data entry',
    'Prices, tax, amounts and permissions still follow the rules of your ERP; AI only helps interpret documents and text',
    'We check which AI functions your ERP already offers first, and build only what adds value',
    'Forecasting needs historical data and is tested against your current method before anyone relies on it',
  ] : [
    'ลดการคีย์และตรวจซ้ำ ทีมใช้เวลากับการตัดสินใจแทนการกรอกข้อมูล',
    'ราคา ภาษี ยอดเงิน และสิทธิ์ ยังใช้กฎของ ERP เหมือนเดิม AI ช่วยแค่ตีความเอกสารและข้อความ',
    'เราตรวจก่อนว่า ERP ของคุณมีฟังก์ชัน AI อะไรอยู่แล้ว แล้วพัฒนาเฉพาะส่วนที่เพิ่มคุณค่า',
    'การพยากรณ์ต้องมีข้อมูลย้อนหลัง และทดสอบเทียบกับวิธีเดิมก่อนใช้งานจริง',
  ]
  const ctaTitle = isEN ? 'Which job wastes the most time in your team?' : 'งานไหนในทีมที่เสียเวลาที่สุด?'
  const ctaDesc = isEN
    ? 'Tell us your ERP and the one job you would fix first. We check how it can connect, agree how success is measured, and propose a small trial.'
    : 'บอกเราว่าใช้ ERP อะไร และอยากแก้งานไหนก่อน เราตรวจช่องทางเชื่อมต่อ ตกลงเกณฑ์วัดผลร่วมกัน แล้วเสนอการทดลองขนาดเล็ก'

  const S = (icon: string, th: string, en: string, dth: string, den: string, mth: string, men: string, cth: string, cen: string, start = false) => ({
    icon,
    title: (isEN ? en : th) + (start ? (isEN ? ' (start here)' : ' (เริ่มก่อน)') : ''),
    desc: isEN
      ? `${den} Connects to: ${men}. Measured by: ${cen}.`
      : `${dth} เชื่อมกับ: ${mth} วัดผลจาก: ${cth}`,
  })
  const features = [
    S('ti-file-text', 'อ่านเอกสารเข้าระบบ', 'Read documents into the system', 'อ่านใบแจ้งหนี้และใบสั่งซื้อ แล้วสร้างรายการร่างให้ตรวจ', 'Reads invoices and purchase orders and creates draft entries for checking.', 'จัดซื้อ บัญชี และข้อมูลผู้ขาย', 'purchasing, accounting and supplier data', 'เวลาต่อเอกสารและจำนวนจุดที่ต้องแก้', 'time per document and corrections needed', true),
    S('ti-messages', 'รับออเดอร์จากแชต / อีเมล', 'Take orders from chat / email', 'จับคู่รหัสสินค้า เช็กราคา แล้วร่างคำสั่งขาย', 'Matches product codes, checks prices and drafts the sales order.', 'ขาย ราคา และสต็อก', 'sales, prices and stock', 'เวลารับคำสั่งซื้อจนพร้อมยืนยัน', 'time from order received to ready to confirm', true),
    S('ti-message-search', 'ถามข้อมูลธุรกิจด้วยภาษาคน', 'Ask business data in plain language', 'ถามยอดขาย สต็อก ลูกค้า พร้อมดูรายการต้นทาง', 'Ask about sales, stock and customers, with the source records shown.', 'รายงานและข้อมูลสิทธิ์ผู้ใช้', 'reports and user permission data', 'เวลาค้นคำตอบและความถูกต้อง', 'time to find an answer and accuracy', true),
    S('ti-cash', 'ช่วยติดตามลูกหนี้', 'Debt collection helper', 'สรุปยอดค้าง จัดลำดับ และร่างข้อความทวงถาม', 'Summarises overdue amounts, prioritises and drafts reminder messages.', 'ลูกหนี้และประวัติรับชำระ', 'debtors and payment history', 'เวลาเตรียมงานและยอดเกินกำหนด', 'preparation time and overdue amount'),
    S('ti-shopping-cart', 'ผู้ช่วยจัดซื้อ', 'Purchasing assistant', 'เทียบใบเสนอราคา เงื่อนไข และวันส่ง', 'Compares quotes, terms and delivery dates.', 'ผู้ขาย จัดซื้อ และประวัติราคา', 'suppliers, purchasing and price history', 'เวลาเปรียบเทียบและเตรียมใบขอซื้อ', 'comparison time and time to prepare purchase requests'),
    S('ti-packages', 'ช่วยวางแผนสต็อก', 'Stock planning helper', 'คาดการณ์ยอดขายและเสนอปริมาณสั่งซื้อ', 'Forecasts sales and suggests order quantities.', 'ยอดขาย สต็อก และระยะเวลาส่งของ', 'sales, stock and delivery lead times', 'ของขาด สินค้าค้าง และความแม่นยำ', 'stock-outs, slow stock and accuracy'),
    S('ti-alert-triangle', 'ตรวจรายการผิดปกติ', 'Anomaly checking', 'ชี้บิลอาจซ้ำ ยอดไม่ตรง และรายการควรตรวจ', 'Flags possible duplicate bills, mismatched amounts and items worth checking.', 'ใบแจ้งหนี้ ใบสั่งซื้อ และรับสินค้า', 'invoices, purchase orders and goods received', 'เวลาตรวจและคุณภาพการแจ้งเตือน', 'checking time and quality of alerts'),
    S('ti-help-circle', 'ผู้ช่วยใช้งาน ERP', 'ERP user assistant', 'ตอบจากคู่มือและขั้นตอนบริษัท พร้อมอ้างอิง', 'Answers from company manuals and procedures, with references.', 'คู่มือและฐานความรู้ภายใน', 'internal manuals and knowledge base', 'เวลาแก้ปัญหาและคำถามซ้ำ', 'time to solve problems and repeated questions'),
  ]

  const steps = isEN ? [
    { no: '01', title: 'Trial one job', desc: 'We test one job with sample data first, so you can see the result before committing to anything larger.' },
    { no: '02', title: 'Install', desc: 'We connect your ERP and set the approval steps, access by role and the activity log.' },
    { no: '03', title: 'Monthly care', desc: 'We track quality and usage cost every month, and expand to the next job only when the numbers support it.' },
  ] : [
    { no: '01', title: 'ทดลองหนึ่งงาน', desc: 'ทดสอบหนึ่งงานด้วยข้อมูลตัวอย่างก่อน ให้เห็นผลลัพธ์ก่อนตัดสินใจทำงานที่ใหญ่ขึ้น' },
    { no: '02', title: 'ติดตั้ง', desc: 'เชื่อม ERP ของคุณ ตั้งขั้นตอนอนุมัติ สิทธิ์ตามหน้าที่ และบันทึกประวัติการทำงาน' },
    { no: '03', title: 'ดูแลรายเดือน', desc: 'ติดตามคุณภาพและค่าใช้งานทุกเดือน และขยายไปงานถัดไปเมื่อตัวเลขรองรับเท่านั้น' },
  ]

  const faqs = isEN ? [
    { q: 'Do we have to change our ERP?', a: 'No. We build on the ERP you run today. First we check which ERP and version you use and whether it has a way to connect, and which AI functions it already offers.' },
    { q: 'Which job should we start with?', a: 'Pick the one that wastes the most time. Reading documents, taking orders or asking business data are the usual starting points; the other five services follow once the data is ready.' },
    { q: 'Can AI make mistakes with money or tax?', a: 'AI helps interpret documents, but prices, tax, amounts and permissions follow your system’s rules, and a person approves anything important.' },
    { q: 'How do we know it works?', a: 'We agree the measures up front, such as time per document or corrections needed, and report them during the trial and every month after.' },
    { q: 'What do you need from us before a quote?', a: 'Which ERP and version, whether it can be connected, which jobs waste time and how many per month, the data quality, who has access, who approves, and how success will be measured.' },
    { q: 'Does stock forecasting work right away?', a: 'It needs historical data and is tested against your current method first, so we treat it as a later step.' },
  ] : [
    { q: 'ต้องเปลี่ยน ERP ไหม?', a: 'ไม่ต้อง เราต่อยอด ERP ที่ใช้อยู่ โดยตรวจก่อนว่าใช้ ERP อะไร รุ่นไหน มีช่องทางเชื่อมต่อหรือไม่ และมีฟังก์ชัน AI อะไรอยู่แล้ว' },
    { q: 'ควรเริ่มจากงานไหน?', a: 'เลือกงานที่เสียเวลาที่สุด โดยมากเริ่มจากอ่านเอกสาร รับออเดอร์ หรือถามข้อมูลธุรกิจ อีกห้าบริการตามมาเมื่อข้อมูลพร้อม' },
    { q: 'AI พลาดเรื่องเงินหรือภาษีได้ไหม?', a: 'AI ช่วยตีความเอกสาร แต่ราคา ภาษี ยอดเงิน และสิทธิ์ ใช้กฎของระบบคุณ และรายการสำคัญให้คนอนุมัติเสมอ' },
    { q: 'รู้ได้ยังไงว่าได้ผล?', a: 'เราตกลงเกณฑ์วัดผลก่อนเริ่ม เช่น เวลาต่อเอกสารหรือจำนวนจุดที่ต้องแก้ แล้วรายงานตลอดช่วงทดลองและทุกเดือน' },
    { q: 'ก่อนเสนอราคาต้องใช้ข้อมูลอะไร?', a: 'ERP อะไร รุ่นไหน เชื่อมต่อได้หรือไม่ งานที่เสียเวลาและปริมาณต่อเดือน คุณภาพข้อมูล สิทธิ์เข้าถึง ผู้อนุมัติ และเกณฑ์วัดผล' },
    { q: 'วางแผนสต็อกด้วย AI ใช้ได้ทันทีไหม?', a: 'ต้องมีข้อมูลย้อนหลัง และทดสอบเทียบกับวิธีเดิมก่อน จึงเป็นขั้นที่ทำทีหลัง' },
  ]
  const related = [
    { label: 'ERP / CRM', href: '/services/erp-crm' },
    { label: 'AI', href: '/services/ai' },
    { label: 'Automation', href: '/services/automation' },
    { label: 'Data & Analytics', href: '/services/data-analytics' },
  ]

  const demoTitle = isEN ? 'See it in one minute: from purchase order to sales order' : 'ดูภาพใน 1 นาที: จากใบสั่งซื้อถึงคำสั่งขาย'
  const demo = isEN
    ? ['Receive the PO', 'AI reads the lines', 'Check item and price', 'A person reviews and approves', 'Create the sales order']
    : ['รับใบสั่งซื้อ (PO)', 'AI อ่านรายการ', 'เช็กสินค้าและราคา', 'คนตรวจและอนุมัติ', 'สร้างคำสั่งขาย']
  const demoNote = isEN
    ? 'AI helps interpret the document. Prices, tax, amounts and user permissions follow your system’s rules.'
    : 'AI ช่วยตีความเอกสาร ส่วนราคา ภาษี ยอดเงิน และสิทธิ์ ใช้กฎของระบบ'

  const postHeroSlot = (
    <section style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-16 lg:py-20">
        <h2 className="t-display mb-8" style={{ color: 'var(--ink)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', maxWidth: 820 }}>{demoTitle}</h2>
        <ol className="grid md:grid-cols-5 gap-3">
          {demo.map((d, i) => (
            <li key={d} className="relative p-5 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
              <span className="w-8 h-8 rounded-full flex items-center justify-center mb-3 font-semibold" style={{ background: i === 3 ? '#34D399' : 'var(--accent)', color: '#fff' }}>{i + 1}</span>
              <p style={{ color: 'var(--ink)', fontWeight: 600 }}>{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5" style={{ color: 'rgb(var(--fg) / 0.75)', maxWidth: 780 }}>{demoNote}</p>
        <Link href={`/${params.lang}/contact`} className="inline-block mt-8 px-7 py-3 rounded-full font-semibold" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff' }}>
          {isEN ? 'Talk to the team about AI + ERP' : 'คุยกับทีมเรื่อง AI + ERP'}
        </Link>
      </div>
    </section>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroVisual="ai-erp" heroShowSecondaryCta={false}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps}
      faqs={faqs} related={related}
      color="var(--accent)" bg="var(--purple-bg)"
      whyImg="/images/services/erp-crm/why1.jpg"
      whyImg2="/images/services/erp-crm/why2.jpg"
      featureImg="/images/services/erp-crm/feature.jpg"
      processImg="/images/services/erp-crm/process.jpg"
    />
  )
}
