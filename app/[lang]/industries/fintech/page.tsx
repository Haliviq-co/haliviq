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
  const title = isEN ? "Financial Services Software & Digital Solutions | Haliviq" : "บริการทางการเงิน | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Banking apps, PromptPay and payment flows, eKYC onboarding and fraud monitoring for Thai banks, lenders, insurers and fintechs, designed around Bank of…"
    : "แอปธนาคาร ระบบชำระเงินและ PromptPay การเปิดบัญชีด้วย eKYC และระบบเฝ้าระวังการทุจริต สำหรับธนาคาร ผู้ให้สินเชื่อ บริษัทประกัน และ Fintech ในไทย…"
  const url = `https://www.haliviq.com/${params.lang}/industries/fintech`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Financial Services' : 'อุตสาหกรรม / บริการทางการเงิน'
  const heroSubhead = isEN
    ? 'Banking apps, PromptPay and payment flows, eKYC onboarding and fraud monitoring for Thai banks, lenders, insurers and fintechs, designed around Bank of Thailand expectations and PDPA from day one.'
    : 'แอปธนาคาร ระบบชำระเงินและ PromptPay การเปิดบัญชีด้วย eKYC และระบบเฝ้าระวังการทุจริต สำหรับธนาคาร ผู้ให้สินเชื่อ บริษัทประกัน และ Fintech ในไทย ออกแบบให้ตรงตามแนวทางของ ธปท. และ PDPA ตั้งแต่วันแรก'

  const challenges = isEN ? [
    { icon: 'ti-scale', title: 'Regulatory Complexity', desc: 'A financial product in Thailand can answer to the Bank of Thailand, the SEC, the OIC and PDPA at the same time, and the circulars on e-payments, eKYC and outsourcing keep being revised. Many teams still check each release against those documents by hand. We turn the rules that apply to your licence into checks and approval steps inside the product, with a log your compliance team can hand straight to an auditor.' },
    { icon: 'ti-server-2', title: 'Legacy Core Systems', desc: 'Many core banking systems were written decades ago and still process millions of transactions a day, so there is no quiet weekend when it is safe to switch them off. Replacing everything at once is too risky and too expensive. We build new apps and services beside the core, connect them through APIs or a message layer, and move one product line at a time, each with a rollback plan.' },
    { icon: 'ti-shield-exclamation', title: 'Fraud and Cyber Threats', desc: 'Phishing links, SIM-swap, mule accounts and fake QR codes are familiar scams to Thai bank customers, and attackers also go after APIs and internal admin tools. Security needs several layers: device checks, step-up authentication, transaction monitoring and a clear incident procedure. We plan these with your security team from the first sprint instead of adding them in the week before launch.' },
    { icon: 'ti-star', title: 'Customer Expectations', desc: 'Thai customers are used to scanning a PromptPay QR and watching the money land within seconds, and they compare every financial app with the smoothest one on their phone. A long sign-up form, a branch visit for a simple request or an interface that only makes sense in English will lose them. We design in Thai first, keep each flow short, and test it with real users before development starts.' },
  ] : [
    { icon: 'ti-scale', title: 'กฎระเบียบที่ซับซ้อน', desc: 'ผลิตภัณฑ์การเงินในไทยอาจต้องอยู่ภายใต้ ธปท. ก.ล.ต. คปภ. และ PDPA พร้อมกัน และประกาศเรื่อง e-payment, eKYC กับการใช้บริการภายนอกก็ถูกปรับอยู่เรื่อยๆ หลายทีมยังต้องนั่งเทียบแต่ละรุ่นของระบบกับเอกสารเหล่านี้ด้วยมือ เราเอากฎที่เกี่ยวกับใบอนุญาตของคุณมาทำเป็นขั้นตรวจและขั้นอนุมัติในตัวระบบ พร้อมเก็บ Log ให้ทีม Compliance ส่งต่อให้ผู้ตรวจสอบได้เลย' },
    { icon: 'ti-server-2', title: 'ระบบ Core เก่าที่หยุดไม่ได้', desc: 'ระบบ Core Banking หลายแห่งเขียนมาตั้งแต่หลายสิบปีก่อนและยังประมวลผลธุรกรรมหลายล้านรายการต่อวัน จึงไม่มีช่วงเสาร์อาทิตย์ไหนที่ปิดระบบได้สบายใจ จะรื้อเปลี่ยนทีเดียวก็เสี่ยงและแพงเกินไป เราสร้างแอปและบริการใหม่ไว้ข้างๆ ระบบ Core เชื่อมกันผ่าน API หรือชั้น Message แล้วค่อยย้ายทีละผลิตภัณฑ์ โดยแต่ละขั้นมีแผนย้อนกลับเสมอ' },
    { icon: 'ti-shield-exclamation', title: 'ภัยหลอกลวงและภัยไซเบอร์', desc: 'ลิงก์ฟิชชิง SIM-swap บัญชีม้า และ QR ปลอม เป็นมิจฉาชีพที่ลูกค้าธนาคารไทยคุ้นหูกันดี และผู้โจมตียังพุ่งเป้าไปที่ API กับระบบหลังบ้านด้วย ความปลอดภัยจึงต้องมีหลายชั้น ทั้งตรวจอุปกรณ์ ยืนยันตัวตนเพิ่มเมื่อทำรายการเสี่ยง เฝ้าดูธุรกรรม และมีขั้นตอนรับมือเหตุการณ์ที่ชัดเจน เราวางเรื่องนี้ร่วมกับทีม Security ของคุณตั้งแต่สปรินต์แรก ไม่ใช่มาเพิ่มในสัปดาห์ก่อนเปิดตัว' },
    { icon: 'ti-star', title: 'ลูกค้าคาดหวังสูงขึ้น', desc: 'คนไทยชินกับการสแกน PromptPay แล้วเงินเข้าภายในไม่กี่วินาที และเอาแอปการเงินทุกตัวไปเทียบกับแอปที่ใช้ลื่นที่สุดในมือถือ ถ้าฟอร์มสมัครยาว ต้องไปสาขาเพื่อเรื่องง่ายๆ หรือหน้าจอที่อ่านรู้เรื่องแค่ภาษาอังกฤษ ลูกค้าก็พร้อมไปใช้เจ้าอื่น เราออกแบบเป็นภาษาไทยก่อน ทำให้แต่ละขั้นสั้นที่สุด และลองกับผู้ใช้จริงก่อนเริ่มพัฒนา' },
  ]

  const metrics = [
    { value: '$15.2B', label: isEN ? 'Global Digital Banking Platform Market by 2028' : 'ขนาดตลาดแพลตฟอร์มธนาคารดิจิทัลทั่วโลกภายในปี 2028', source: 'Grand View Research, 2024' },
    { value: '$164B', label: isEN ? 'Global Fintech Investment in 2024' : 'เงินลงทุนใน Fintech ทั่วโลกในปี 2024', source: 'CB Insights State of Fintech, 2024' },
    { value: '78%', label: isEN ? 'Consumers Using Mobile Payments Regularly in Southeast Asia' : 'ผู้บริโภคในเอเชียตะวันออกเฉียงใต้ที่ใช้ Mobile Payment เป็นประจำ', source: 'McKinsey Digital Payments, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-building-bank', title: 'Digital Banking Platforms', desc: 'Mobile-first banking apps covering account opening, balances, transfers, bill payment, card controls and spending summaries. They suit banks, savings co-operatives and digital-only lenders that want a better app than the one customers complain about today. We deliver the app, the admin tools behind it and the integration with your core.' },
    { icon: 'ti-credit-card', title: 'Payment Solutions', desc: 'Payment flows for PromptPay QR, card, wallets and bank transfer, with reconciliation and refund handling built in. Merchants, platforms and payment providers use them to accept money without losing track of what was settled and when. We pay particular attention to timeouts, duplicate payments and failed callbacks, because that is where real money goes missing.' },
    { icon: 'ti-shield-check', title: 'Risk & Compliance Platforms', desc: 'Tools for KYC checks, AML screening, transaction limits and regulatory reports, with every decision recorded. Compliance and risk officers can see why a case was flagged, who reviewed it and what they decided. This cuts repeated manual checking and keeps you ready when an inspection arrives.' },
    { icon: 'ti-pig-money', title: 'Wealth Management Tools', desc: 'Portfolio views, suitability questionnaires, advisor workspaces and market data screens for asset managers, securities firms and advisory teams. Investors see their holdings clearly, and advisors see which clients need a call. We build to the way your firm already classifies risk, not to a generic template.' },
    { icon: 'ti-api', title: 'Open Banking APIs', desc: 'A managed API layer with authentication, consent, rate limits and a developer portal, so partners can connect to your services safely. It helps banks and fintechs share data and trigger payments with partners without handing over database access. You get versioned APIs, clear documentation and monitoring of who calls what.' },
    { icon: 'ti-fingerprint', title: 'Digital Onboarding & eKYC', desc: 'Sign-up flows that read a Thai national ID, run a face match and liveness check, and screen the applicant before an account opens. Lenders, insurers and wallets use them to turn a branch visit into a few minutes on a phone. We design the steps so people who fail a check get a clear way to retry or reach a human.' },
  ] : [
    { icon: 'ti-building-bank', title: 'Digital Banking Platforms', desc: 'แอปธนาคารที่เน้นมือถือเป็นหลัก ตั้งแต่เปิดบัญชี ดูยอด โอนเงิน จ่ายบิล ควบคุมบัตร ไปจนถึงสรุปรายจ่าย เหมาะกับธนาคาร สหกรณ์ออมทรัพย์ และผู้ให้สินเชื่อดิจิทัลที่อยากได้แอปที่ดีกว่าตัวที่ลูกค้าบ่นอยู่ตอนนี้ เราส่งมอบทั้งแอป ระบบหลังบ้าน และการเชื่อมกับ Core ของคุณ' },
    { icon: 'ti-credit-card', title: 'Payment Solutions', desc: 'ระบบรับชำระเงินผ่าน PromptPay QR บัตร Wallet และโอนเงินผ่านธนาคาร พร้อมระบบกระทบยอดและคืนเงินในตัว เหมาะกับร้านค้า แพลตฟอร์ม และผู้ให้บริการชำระเงินที่อยากรับเงินได้โดยไม่ต้องเดาว่ายอดไหนเคลียร์แล้วเมื่อไหร่ เราให้ความสำคัญเป็นพิเศษกับกรณี Timeout การจ่ายซ้ำ และ Callback ที่ล้มเหลว เพราะตรงนี้คือจุดที่เงินจริงหาย' },
    { icon: 'ti-shield-check', title: 'Risk & Compliance Platforms', desc: 'เครื่องมือตรวจ KYC คัดกรอง AML ตั้งวงเงินธุรกรรม และออกรายงานตามกฎ โดยบันทึกทุกการตัดสินใจไว้ เจ้าหน้าที่ Compliance และ Risk เปิดดูได้ว่าเคสนี้ถูกติดธงเพราะอะไร ใครตรวจ และสรุปว่าอย่างไร ช่วยลดงานตรวจซ้ำด้วยมือ และทำให้พร้อมเมื่อมีการเข้าตรวจ' },
    { icon: 'ti-pig-money', title: 'Wealth Management Tools', desc: 'หน้าดูพอร์ต แบบประเมินความเหมาะสมในการลงทุน พื้นที่ทำงานของที่ปรึกษา และหน้าข้อมูลตลาด สำหรับบริษัทจัดการกองทุน บริษัทหลักทรัพย์ และทีมที่ปรึกษา นักลงทุนเห็นสิ่งที่ถืออยู่ชัดเจน ส่วนที่ปรึกษาก็รู้ว่าลูกค้าคนไหนควรโทรหา เราสร้างตามวิธีที่บริษัทคุณจัดระดับความเสี่ยงอยู่แล้ว ไม่ใช่เทมเพลตสำเร็จรูป' },
    { icon: 'ti-api', title: 'Open Banking APIs', desc: 'ชั้น API ที่จัดการครบทั้งการยืนยันตัวตน การขอความยินยอม การจำกัดจำนวนครั้ง และพอร์ทัลสำหรับนักพัฒนา เพื่อให้พาร์ทเนอร์เชื่อมต่อกับบริการของคุณได้อย่างปลอดภัย ช่วยให้ธนาคารและ Fintech แชร์ข้อมูลและสั่งชำระเงินกับพาร์ทเนอร์ได้โดยไม่ต้องเปิดฐานข้อมูลให้ คุณจะได้ API ที่มีเวอร์ชัน เอกสารชัดเจน และเห็นว่าใครเรียกอะไรบ้าง' },
    { icon: 'ti-fingerprint', title: 'การเปิดบัญชีออนไลน์และ eKYC', desc: 'ขั้นตอนสมัครที่อ่านบัตรประชาชนไทย เทียบใบหน้า ตรวจว่าเป็นคนจริง และคัดกรองผู้สมัครก่อนเปิดบัญชี ผู้ให้สินเชื่อ บริษัทประกัน และ Wallet ใช้เปลี่ยนการไปสาขาให้เหลือไม่กี่นาทีบนมือถือ เราออกแบบให้คนที่ตรวจไม่ผ่านรู้ว่าต้องลองใหม่อย่างไร หรือติดต่อเจ้าหน้าที่ได้ทางไหน' },
  ]

  const techStack = ['React', 'Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Blockchain', 'AI/ML', 'GraphQL', 'OAuth 2.0', 'PCI DSS', 'NestJS', 'Flutter']

  const useCases = isEN ? [
    { no: '01', title: 'Mobile Banking Application', desc: 'A full retail banking app with biometric login, instant transfers, card management and spending insights. A bank or lender gets a design system, the app for iOS and Android, an admin console and integration with its existing core. We usually launch to a small group of staff and customers first, then widen.' },
    { no: '02', title: 'Fraud Detection Engine', desc: 'A transaction-monitoring service that scores payments as they happen, using rules plus machine learning on patterns such as new devices, unusual amounts and rapid repeat transfers. Analysts get a queue of flagged cases with the reasons shown. The aim is to catch more real fraud without blocking good customers.' },
    { no: '03', title: 'Open Banking Integration', desc: 'An API gateway and developer portal that lets partners read account data with customer consent and start payments. Partners can sign up, test in a sandbox and go live under your rules. You keep control of access, limits and monitoring in one place.' },
  ] : [
    { no: '01', title: 'แอป Mobile Banking', desc: 'แอปธนาคารรายย่อยเต็มรูปแบบ ล็อกอินด้วยชีวมิติ โอนเงินทันที จัดการบัตร และดูสรุปรายจ่าย ธนาคารหรือผู้ให้สินเชื่อจะได้ Design System แอปบน iOS และ Android หน้าคอนโซลหลังบ้าน และการเชื่อมกับ Core เดิม เรามักเปิดให้พนักงานกับลูกค้ากลุ่มเล็กใช้ก่อน แล้วค่อยขยาย' },
    { no: '02', title: 'ระบบตรวจจับการทุจริต', desc: 'บริการเฝ้าดูธุรกรรมที่ให้คะแนนความเสี่ยงของการจ่ายเงินทันทีที่เกิดขึ้น ใช้ทั้งกฎและ Machine Learning กับรูปแบบอย่างอุปกรณ์ใหม่ ยอดผิดปกติ และการโอนซ้ำถี่ๆ นักวิเคราะห์จะได้คิวเคสที่ติดธง พร้อมเหตุผลที่แสดงไว้ เป้าหมายคือจับการทุจริตจริงให้ได้มากขึ้นโดยไม่ไปบล็อกลูกค้าปกติ' },
    { no: '03', title: 'การเชื่อมต่อ Open Banking', desc: 'API Gateway และพอร์ทัลนักพัฒนาที่ให้พาร์ทเนอร์ดูข้อมูลบัญชีเมื่อลูกค้ายินยอม และสั่งชำระเงินได้ พาร์ทเนอร์สมัคร ทดสอบใน Sandbox แล้วขึ้นใช้งานจริงภายใต้กฎของคุณ ส่วนคุณคุมสิทธิ์ วงเงิน และการเฝ้าดูได้ที่เดียว' },
  ]

  const heroVisual = <IndustryHero kind="fintech" isEN={isEN} />

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
                  {isEN ? 'Financial' : 'บริการ'}<br />{isEN ? 'Services' : 'ทางการเงิน'}
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
                  ? 'We work with banks, insurers, asset managers, lenders and fintech start-ups on the software their customers touch every day: mobile banking, payments, onboarding and fraud monitoring. Projects start by listing which licences, regulators and data you are responsible for, so compliance becomes part of the design instead of a late review. Delivery runs in short cycles with working builds, security testing and a clear handover to your own engineers or ours.'
                  : 'เราทำงานกับธนาคาร บริษัทประกัน บริษัทจัดการสินทรัพย์ ผู้ให้สินเชื่อ และสตาร์ทอัพ Fintech ในซอฟต์แวร์ที่ลูกค้าของคุณใช้ทุกวัน ทั้งโมบายแบงก์กิ้ง ระบบชำระเงิน การเปิดบัญชี และการเฝ้าระวังการทุจริต โปรเจกต์จะเริ่มจากการไล่ดูว่าคุณถือใบอนุญาตอะไร อยู่ภายใต้หน่วยงานไหน และดูแลข้อมูลอะไรบ้าง เพื่อให้ Compliance เป็นส่วนหนึ่งของการออกแบบ ไม่ใช่ด่านตรวจตอนท้าย เราส่งงานเป็นรอบสั้นๆ ที่มี Build ใช้งานได้จริง ทดสอบความปลอดภัย และส่งมอบให้ทีมวิศวกรของคุณหรือของเราดูแลต่อได้ชัดเจน'}
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
