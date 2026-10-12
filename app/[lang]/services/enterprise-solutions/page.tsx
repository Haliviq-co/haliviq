import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  sap: { hex: '#0FAAFF', path: 'M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z' },
  hubspot: { hex: '#FF7A59', path: 'M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z' },
  odoo: { hex: '#714B67', path: 'M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'ERP, CRM & POS Implementation in Thailand | Haliviq'
    : 'รับติดตั้ง ERP CRM POS สำหรับองค์กรไทย | Haliviq'
  const description = isEN
    ? 'Haliviq implements and customizes ERP, CRM and POS systems in Thailand, connects them to your store, warehouse and finance, and trains your team to use them.'
    : 'Haliviq รับติดตั้งและปรับแต่ง ERP, CRM และ POS ให้เข้ากับวิธีทำงานจริง เชื่อมกับร้านออนไลน์ คลังสินค้า และระบบบัญชี พร้อมอบรมทีมให้ใช้งานได้คล่อง'
  const url = `https://haliviq.com/${params.lang}/services/enterprise-solutions`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Enterprise / ERP · CRM · POS'  : 'Enterprise / ERP · CRM · POS'
  const title    = isEN ? 'Enterprise Systems'  : 'ระบบ Enterprise'
  const subtitle = isEN ? 'That Fit How You Work'    : 'ที่เข้ากับวิธีทำงานจริง'
  const heroDesc = isEN ? 'Most companies do not need a new way of working, they need software that follows the one they already have. We implement ERP, CRM, and POS platforms, tune them to your own steps, and join them to your online store, warehouse, and accounting. Where a standard package cannot do something your business depends on, we write a small extension for that gap instead of asking you to change the process.'  : 'หลายบริษัทไม่ได้ต้องการวิธีทำงานใหม่ แต่ต้องการซอฟต์แวร์ที่ทำตามวิธีที่ใช้อยู่แล้ว เราติดตั้ง ERP, CRM และ POS ปรับให้ตรงกับขั้นตอนของคุณ แล้วเชื่อมเข้ากับร้านออนไลน์ คลังสินค้า และระบบบัญชี ถ้าชุดมาตรฐานทำบางอย่างที่ธุรกิจคุณต้องพึ่งไม่ได้ เราเขียนส่วนเสริมเล็กๆ มาเติมตรงนั้น แทนที่จะขอให้คุณเปลี่ยนวิธีทำงาน'
  const whyTitle = isEN ? 'Why off-the-shelf software fails without the right fit'    : 'ทำไมซอฟต์แวร์สำเร็จรูปถึงล้มเหลวถ้าไม่เหมาะกับงานจริง'
  const whyDesc  = isEN ? 'A new system usually fails quietly. Nobody refuses to use it; people just keep a private spreadsheet for the step the software handles badly, then another, until the real process lives outside the system. Reports stop matching, stock counts drift between the shop and the warehouse, and the purchase turns into an expensive login screen. Fitting the system to the work before rollout is far cheaper than chasing those workarounds afterwards.'  : 'ระบบใหม่มักล้มเหลวแบบเงียบๆ ไม่มีใครปฏิเสธที่จะใช้ แต่ทุกคนแอบเก็บ Spreadsheet ส่วนตัวไว้สำหรับขั้นตอนที่ซอฟต์แวร์ทำได้ไม่ดี แล้วก็เพิ่มไฟล์ที่สอง ที่สาม จนงานจริงๆ ไปอยู่นอกระบบ รายงานเริ่มไม่ตรงกัน จำนวนสต็อกหน้าร้านกับคลังเริ่มเพี้ยน และระบบที่ซื้อมากลายเป็นแค่หน้าล็อกอินราคาแพง การปรับระบบให้เข้ากับงานก่อนเปิดใช้ถูกกว่าการตามแก้ทางเลี่ยงเหล่านั้นทีหลังมาก'
  const ctaTitle = isEN ? 'Ready for systems that fit your business?'    : 'พร้อมใช้ระบบที่เข้ากับธุรกิจคุณจริงๆ ไหม?'
  const ctaDesc  = isEN ? 'Start with a free process mapping session. We sit with the people who do the work, draw how an order or a customer really moves through your company, and show you where your current systems and reality part ways.'   : 'เริ่มด้วยการร่างแผนผังขั้นตอนทำงาน (Process Mapping) ฟรี เรานั่งคุยกับคนที่ทำงานจริง วาดให้ดูว่าออเดอร์หรือลูกค้าหนึ่งคนเดินทางผ่านบริษัทคุณยังไง แล้วชี้ว่าระบบที่ใช้อยู่กับงานจริงต่างกันตรงไหน'
  const overviewText = isEN
    ? 'Off-the-shelf enterprise software works when it is shaped around the way you already operate, not the other way round. We implement and customize ERP, CRM, and POS platforms, join them to e-commerce, logistics, finance, and reporting, and train your team as each part goes live. When a standard package hits a real limit, we build a targeted extension or API for that one gap. The same team also builds customer-facing apps and websites, so your internal systems and your public products can share data without a third vendor in between.'
    : 'ซอฟต์แวร์องค์กรสำเร็จรูปจะใช้ได้ดีเมื่อถูกปรับให้เข้ากับวิธีทำงานที่มีอยู่ ไม่ใช่ให้คุณปรับตามซอฟต์แวร์ เราติดตั้งและปรับแต่ง ERP, CRM และ POS เชื่อมเข้ากับ E-commerce ระบบขนส่ง การเงิน และรายงาน และอบรมทีมทุกครั้งที่แต่ละส่วนเปิดใช้ ถ้าชุดมาตรฐานติดข้อจำกัดจริง เราสร้างส่วนเสริมหรือ API เฉพาะจุดนั้น ทีมเดียวกันยังสร้างแอปและเว็บไซต์ฝั่งลูกค้าด้วย ระบบภายในกับผลิตภัณฑ์ที่ลูกค้าใช้จึงแชร์ข้อมูลกันได้ โดยไม่ต้องมีผู้ให้บริการรายที่สามมาคั่นกลาง'

  const heroBullets = isEN ? [
      'ERP implementation across finance, purchasing, stock, and day-to-day operations',
      'CRM connected to the channels customers really use, including email and LINE',
      'POS tied to inventory and your online store, so every shop sells from the same stock',
      'Custom extensions and APIs for the steps a standard package cannot do',
      'Fit-gap review before you buy, so you know what needs changing and what does not',
      'Training by role in every rollout, with support in the first weeks of live use',
    ] : [
      'ติดตั้ง ERP ครอบคลุมการเงิน จัดซื้อ สต็อก และงานปฏิบัติการประจำวัน',
      'CRM ที่เชื่อมกับช่องทางที่ลูกค้าใช้จริง รวมถึงอีเมลและ LINE',
      'POS ที่ผูกกับสต็อกและร้านออนไลน์ ทุกสาขาขายจากสต็อกชุดเดียวกัน',
      'ส่วนเสริมและ API เฉพาะ สำหรับขั้นตอนที่ชุดมาตรฐานทำไม่ได้',
      'ตรวจช่องว่างระหว่างระบบกับงานจริงก่อนซื้อ ให้รู้ว่าอะไรต้องปรับ อะไรไม่ต้อง',
      'อบรมตามบทบาททุกครั้งที่เปิดใช้ และดูแลต่อในช่วงสัปดาห์แรกๆ ที่ใช้งานจริง',
    ]
  const whyPoints   = isEN ? [
      'Typing the same data into two disconnected systems is one of the biggest hidden costs in a company, and nobody ever sees it on an invoice.',
      'A CRM that does not follow your real sales steps is usually abandoned within a few months, however good the software is.',
      'POS and inventory that share one set of numbers stop the stock-outs and overselling that cost you real sales.',
      'A small custom extension costs far less than redesigning how a whole department works to suit rigid software.',
      'Training given during rollout, department by department, does more for adoption than a single session at the end.',
    ] : [
      'การคีย์ข้อมูลเดียวกันลงสองระบบที่ไม่เชื่อมกัน เป็นต้นทุนแอบแฝงที่ใหญ่มากอย่างหนึ่งของบริษัท และไม่เคยโผล่ในใบแจ้งหนี้ใบไหน',
      'CRM ที่ไม่ตามขั้นตอนขายจริง มักถูกทิ้งภายในไม่กี่เดือน ต่อให้ซอฟต์แวร์ดีแค่ไหนก็ตาม',
      'POS กับสต็อกที่ใช้ตัวเลขชุดเดียวกัน ช่วยตัดปัญหาสินค้าหมดและขายเกินจำนวนที่ทำให้เสียยอดขายจริง',
      'ส่วนเสริมเล็กๆ เฉพาะจุดถูกกว่าการออกแบบวิธีทำงานของทั้งแผนกใหม่เพื่อให้เข้ากับซอฟต์แวร์ที่ตายตัวมาก',
      'การอบรมระหว่างเปิดใช้ ทีละแผนก ช่วยให้คนใช้งานจริงได้มากกว่าการอบรมรอบเดียวตอนท้าย',
    ]
  const outcomes    = isEN ? [
      {stat: '60%', label: 'Less Manual Entry', desc: 'After system integration'},
      {stat: '100%', label: 'Data Visibility', desc: 'Across sales, inventory, finance'},
      {stat: '3x', label: 'Faster Reporting', desc: 'With connected data sources'},
      {stat: '90%+', label: 'Team Adoption Rate', desc: 'With rollout-embedded training'}
    ] : [
      {stat: '60%', label: 'ลดการคีย์ข้อมูลด้วยมือ', desc: 'หลังเชื่อมต่อระบบ'},
      {stat: '100%', label: 'Data Visibility', desc: 'ครอบคลุมฝ่ายขาย สต็อก และการเงิน'},
      {stat: '3x', label: 'ทำรายงานเร็วขึ้น', desc: 'ด้วยแหล่งข้อมูลที่เชื่อมกัน'},
      {stat: '90%+', label: 'อัตราการใช้งานจริง', desc: 'ด้วยการอบรมที่ทำไปพร้อมการเปิดใช้'}
    ]
  const features    = isEN ? [
      {icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'We configure and deploy the ERP modules you need, such as general ledger, purchasing, inventory, and production planning. Master data, approval rules, and document numbering are set up around your current paperwork, so finance and operations recognise their own process on day one.'},
      {icon: 'ti-users-group', title: 'CRM Platforms', desc: 'Sales, service, and marketing tools set up with your real pipeline stages and customer fields. Enquiries from email, web forms, and LINE land in one customer record, so the next person to talk to a client sees what was already said.'},
      {icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'We join shop tills, stock, payments, and the online store so every channel sells from one set of numbers. Useful for retailers with several branches, where a sale in one shop must show up in stock everywhere within moments.'},
      {icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'When a package cannot handle a step your business relies on, such as an unusual pricing rule or a delivery schedule, we build an extension or API for just that gap. It is documented, upgrade-safe, and kept small, so the core system stays standard.'},
      {icon: 'ti-transfer', title: 'System Integration', desc: 'We connect finance, operations, logistics, and sales channels so a figure is entered once and reused everywhere. Each link is monitored and logged, so when a sync fails someone is told, instead of the numbers quietly drifting apart.'},
      {icon: 'ti-school', title: 'Team Training', desc: 'We train by role as each module goes live, write short guides in plain language, and stay available in the first weeks. The aim is a team that can run the system on its own, not a thick handover document that nobody reads.'}
    ] : [
      {icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'เราตั้งค่าและติดตั้งโมดูล ERP ที่คุณต้องใช้ เช่น บัญชีแยกประเภท จัดซื้อ สต็อก และวางแผนการผลิต ข้อมูลหลัก กฎการอนุมัติ และเลขที่เอกสาร ตั้งตามเอกสารที่คุณใช้อยู่ ฝ่ายบัญชีและฝ่ายปฏิบัติการจะเห็นขั้นตอนของตัวเองตั้งแต่วันแรก'},
      {icon: 'ti-users-group', title: 'CRM Platforms', desc: 'เครื่องมืองานขาย งานบริการ และการตลาด ตั้งตามขั้นตอนใน Pipeline และฟิลด์ลูกค้าจริงของคุณ คำถามจากอีเมล ฟอร์มบนเว็บ และ LINE เข้ามารวมในเรคคอร์ดลูกค้าเดียว คนต่อไปที่คุยกับลูกค้าจะเห็นว่าก่อนหน้านี้คุยอะไรไปแล้ว'},
      {icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'เราเชื่อมเครื่อง POS หน้าร้าน สต็อก การชำระเงิน และร้านออนไลน์ ให้ทุกช่องทางขายจากตัวเลขชุดเดียวกัน มีประโยชน์กับธุรกิจค้าปลีกที่มีหลายสาขา เพราะขายที่สาขาหนึ่งแล้ว สต็อกทุกที่ต้องเห็นภายในไม่กี่วินาที'},
      {icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'ถ้าชุดสำเร็จรูปทำขั้นตอนที่ธุรกิจพึ่งไม่ได้ เช่น กติการาคาแปลกๆ หรือตารางจัดส่ง เราสร้างส่วนเสริมหรือ API เฉพาะช่องว่างนั้น มีเอกสาร อัปเกรดระบบได้ไม่พัง และทำให้เล็กไว้ ตัวระบบหลักจะได้ยังเป็นแบบมาตรฐาน'},
      {icon: 'ti-transfer', title: 'System Integration', desc: 'เราเชื่อมการเงิน งานปฏิบัติการ โลจิสติกส์ และช่องทางขาย ให้ตัวเลขกรอกครั้งเดียวแล้วใช้ซ้ำได้ทุกที่ ทุกตัวเชื่อมมีการเฝ้าดูและเก็บ Log ถ้าซิงก์พลาดจะมีคนได้รับแจ้ง ไม่ปล่อยให้ตัวเลขเพี้ยนห่างกันไปเงียบๆ'},
      {icon: 'ti-school', title: 'Team Training', desc: 'เราอบรมตามบทบาทเมื่อแต่ละโมดูลเปิดใช้ เขียนคู่มือสั้นๆ ด้วยภาษาที่อ่านง่าย และอยู่ช่วยในช่วงสัปดาห์แรกๆ เป้าหมายคือให้ทีมใช้ระบบได้เอง ไม่ใช่เอกสารส่งมอบหนาๆ ที่ไม่มีใครเปิดอ่าน'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Requirements', desc: 'We map your processes with the people who do them, from quote to cash or from purchase to stock, and agree what success looks like in numbers you already track. This becomes the checklist every later decision is tested against.'},
      {no: '02', title: 'Selection', desc: 'We run a fit-gap review of the platforms on your shortlist, or help you build one, scoring each against your mapped processes. You get a plain comparison and a recommendation, including cases where a cheaper option is enough.'},
      {no: '03', title: 'Implement', desc: 'We configure the system, migrate master data and open balances, and deploy in phases. Each phase is tested with your staff using their own real documents before it goes live.'},
      {no: '04', title: 'Customize', desc: 'Where the fit-gap showed a genuine gap, we build the extension, report, or screen needed. Each one is small, documented, and kept apart from the core so upgrades stay safe.'},
      {no: '05', title: 'Integrate', desc: 'We connect finance, operations, shops, and online channels, then test the hand-offs between them: a sale, a return, a stock transfer, and a month-end close.'},
      {no: '06', title: 'Train', desc: 'We train each department as its module goes live and support users in the first weeks. We also leave behind admin know-how, so your team can add users and change settings without calling us.'}
    ] : [
      {no: '01', title: 'Requirements', desc: 'เราร่างแผนผังขั้นตอนทำงานร่วมกับคนที่ทำงานจริง ตั้งแต่ใบเสนอราคาจนถึงรับเงิน หรือตั้งแต่สั่งซื้อจนถึงสต็อก และตกลงกันว่าความสำเร็จวัดด้วยตัวเลขอะไรที่คุณติดตามอยู่แล้ว ตรงนี้จะเป็นเช็กลิสต์ที่ทุกการตัดสินใจหลังจากนั้นต้องผ่านการเทียบ'},
      {no: '02', title: 'Selection', desc: 'เราทำ Fit-gap Review ของแพลตฟอร์มในรายชื่อที่คุณสนใจ หรือช่วยคัดรายชื่อให้ แล้วให้คะแนนเทียบกับขั้นตอนที่ร่างไว้ คุณจะได้ตารางเทียบที่อ่านง่ายพร้อมคำแนะนำ รวมถึงกรณีที่ตัวถูกกว่าก็เพียงพอ'},
      {no: '03', title: 'Implement', desc: 'เราตั้งค่าระบบ ย้ายข้อมูลหลักและยอดคงเหลือ แล้วเปิดใช้ทีละระยะ แต่ละระยะทดสอบกับทีมของคุณด้วยเอกสารจริงของพวกเขาเองก่อนขึ้นระบบ'},
      {no: '04', title: 'Customize', desc: 'ตรงที่ Fit-gap เจอช่องว่างจริง เราสร้างส่วนเสริม รายงาน หรือหน้าจอที่ต้องใช้ แต่ละอันเล็ก มีเอกสาร และแยกจากระบบหลัก การอัปเกรดจึงปลอดภัย'},
      {no: '05', title: 'Integrate', desc: 'เราเชื่อมการเงิน งานปฏิบัติการ หน้าร้าน และช่องทางออนไลน์ แล้วทดสอบจุดส่งต่อระหว่างกัน ทั้งการขาย การคืนสินค้า การโอนสต็อก และการปิดงวดสิ้นเดือน'},
      {no: '06', title: 'Train', desc: 'เราอบรมแต่ละแผนกเมื่อโมดูลของเขาเปิดใช้ และช่วยผู้ใช้ในสัปดาห์แรกๆ รวมถึงส่งต่อความรู้ด้านการดูแลระบบ ทีมคุณจะเพิ่มผู้ใช้หรือเปลี่ยนค่าตั้งต้นได้เองโดยไม่ต้องโทรหาเรา'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Manufacturing · Bangkok', title: 'SAP Rollout Across 4 Plants', desc: 'Finance, supply chain, and production modules were unified into one system, so four plants book, buy, and report on the same set of master data.', result: 'Manual entry down 60%'},
      {tag: 'Retail · Nationwide', title: 'CRM + POS Unified for 200 Stores', desc: 'Real-time inventory and customer data now flow across every location, so head office and each branch work from the same figures.', result: 'Stockouts down 45%'},
      {tag: 'Logistics · Bangkok', title: 'Custom ERP Extension for Fleet Ops', desc: 'A standard ERP was extended with fleet-specific scheduling and tracking, so dispatchers plan inside the ERP rather than in side spreadsheets.', result: 'Dispatch time cut in half'}
    ] : [
      {tag: 'Manufacturing · กรุงเทพฯ', title: 'ติดตั้ง SAP ครอบคลุม 4 โรงงาน', desc: 'รวมโมดูลการเงิน ซัพพลายเชน และการผลิตเข้าเป็นระบบเดียว ทั้งสี่โรงงานลงบัญชี สั่งซื้อ และทำรายงานจากข้อมูลหลักชุดเดียวกัน', result: 'การคีย์ข้อมูลด้วยมือลดลง 60%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'รวม CRM + POS สำหรับ 200 สาขา', desc: 'ข้อมูลสต็อกและลูกค้าแบบ Real-time ไหลถึงกันทุกสาขา สำนักงานใหญ่และแต่ละสาขาทำงานจากตัวเลขชุดเดียวกัน', result: 'สินค้าหมดสต็อกลดลง 45%'},
      {tag: 'Logistics · กรุงเทพฯ', title: 'ส่วนเสริม ERP เฉพาะสำหรับงานจัดการรถ', desc: 'ต่อยอด ERP มาตรฐานด้วยการจัดตารางและติดตามที่เฉพาะกับงานรถ ฝ่ายจัดส่งวางแผนในตัว ERP เลย ไม่ต้องใช้ Spreadsheet แยก', result: 'เวลาจัดส่งลดลงครึ่งหนึ่ง'}
    ]
  const faqs        = isEN ? [
      {q: 'Which ERP, CRM, and POS platforms do you work with?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo, and Oracle, plus custom integrations between them and your other systems. We recommend whichever fits your operations and budget.'},
      {q: 'Do you customize off-the-shelf software?', a: 'Yes. We tailor platforms to how your business really operates and build integrations for clean data exchange. Customization stays small and documented, so upgrades do not break it.'},
      {q: 'Can you connect ERP or CRM to customer-facing products?', a: 'Yes. One team builds both enterprise systems and customer-facing apps and websites, so orders, accounts, and stock can flow between them without a third vendor.'},
      {q: 'Should we buy off-the-shelf or build custom?', a: 'Buy off-the-shelf for standard workflows such as accounting and HR. Build custom only where your process is a real competitive advantage. Most companies end up with a mix of both.'},
      {q: 'How long does a rollout take?', a: 'A CRM for one department usually takes 6-10 weeks, and a full ERP for a mid-size business 4-8 months, phased by module. We give a firmer timeline after process mapping.'},
      {q: 'What happens to our existing data?', a: 'We map your current data, rehearse the migration in a test environment, check totals against the source, and keep the old system read-only until the new one is proven.'},
      {q: 'Can you support multi-branch retail with POS?', a: 'Yes. We connect POS terminals, branch stock, and the online store so every branch sells from shared inventory, and we plan for what happens when a branch loses its internet connection.'}
    ] : [
      {q: 'รองรับระบบ ERP, CRM, POS ตัวไหนบ้าง?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo และ Oracle พร้อมเขียนตัวเชื่อมระหว่างระบบเหล่านี้กับระบบอื่นของคุณ เราแนะนำตัวที่เหมาะกับการทำงานและงบของคุณ'},
      {q: 'ปรับแต่งซอฟต์แวร์สำเร็จรูปได้ไหม?', a: 'ได้ เราปรับแพลตฟอร์มให้เข้ากับวิธีทำงานจริงของธุรกิจ และสร้างตัวเชื่อมให้แลกเปลี่ยนข้อมูลได้เป็นระเบียบ งานปรับแต่งจะเล็กและมีเอกสาร อัปเกรดระบบแล้วไม่พัง'},
      {q: 'เชื่อม ERP หรือ CRM กับผลิตภัณฑ์ที่ลูกค้าใช้ได้ไหม?', a: 'ได้ ทีมเดียวสร้างทั้งระบบองค์กรและแอปกับเว็บไซต์ฝั่งลูกค้า ออเดอร์ บัญชีผู้ใช้ และสต็อกจึงไหลถึงกันได้ โดยไม่ต้องมีผู้ให้บริการรายที่สาม'},
      {q: 'ควรซื้อสำเร็จรูปหรือสร้างเอง?', a: 'ซื้อสำเร็จรูปสำหรับงานมาตรฐานอย่างบัญชีและ HR และสร้างเองเฉพาะจุดที่ขั้นตอนของคุณเป็นความได้เปรียบจริงๆ ส่วนใหญ่ลงเอยที่การใช้ผสมกัน'},
      {q: 'ใช้เวลาเปิดใช้ระบบนานแค่ไหน?', a: 'CRM สำหรับหนึ่งแผนกมักใช้ 6-10 สัปดาห์ ส่วน ERP เต็มรูปแบบสำหรับธุรกิจขนาดกลางใช้ 4-8 เดือน แบ่งเป็นระยะตามโมดูล เรายืนยันไทม์ไลน์ที่แน่นอนกว่านี้ได้หลังร่างแผนผังขั้นตอนทำงาน'},
      {q: 'ข้อมูลเดิมของเราจะเป็นยังไง?', a: 'เราจับคู่ข้อมูลเดิมกับโครงสร้างใหม่ ซ้อมย้ายในสภาพแวดล้อมทดสอบ ตรวจยอดรวมเทียบกับต้นทาง และเก็บระบบเดิมไว้แบบอ่านอย่างเดียวจนกว่าระบบใหม่จะผ่านการใช้งานจริง'},
      {q: 'รองรับธุรกิจค้าปลีกหลายสาขาที่ใช้ POS ไหม?', a: 'ได้ เราเชื่อมเครื่อง POS สต็อกของแต่ละสาขา และร้านออนไลน์ ให้ทุกสาขาขายจากสต็อกร่วมกัน และวางแผนไว้ด้วยว่าถ้าสาขาไหนอินเทอร์เน็ตหลุดจะทำงานต่อยังไง'}
    ]
  const related     = isEN ? [
      {label: 'E-Commerce Development', href: '/services/ecommerce'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Data Analytics & Engineering', href: '/services/data-analytics'},
      {label: 'Application Modernization', href: '/services/application-modernization'}
    ] : [
      {label: 'E-Commerce Development', href: '/services/ecommerce'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'}
    ]

  const entLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>sync --erp-crm --realtime</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '4 systems connected · 0 conflicts' : 'เชื่อม 4 ระบบ · ไม่มีข้อขัดแย้ง'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>migrate --inventory --stores=200</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Inventory synced across all stores' : 'ซิงก์สต็อกครบทุกสาขา'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'training --rollout finance-team' : 'training --rollout finance-team'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '92% adoption in week 1' : 'อัตราใช้งาน 92% สัปดาห์แรก'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>integration.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {entLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgb(var(--fg) / 0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'System Visibility' : 'ภาพรวมของระบบ'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '68%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '100%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '100% data visibility' : 'Data Visibility 100%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'Finance, purchasing, inventory, and production modules configured around your current paperwork and approval rules, with master data cleaned before it is loaded.' },
    { icon: 'ti-users-group', title: 'CRM Platforms', desc: 'A pipeline that mirrors your real sales steps, with email, web form, and LINE enquiries landing in one customer record that the whole team can see.' },
    { icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'Shop tills, branch stock, payments, and the online store tied to one set of numbers, built for retailers running several branches.' },
    { icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'Small, documented extensions and APIs for the steps a standard package cannot do, kept apart from the core so upgrades stay safe.' },
    { icon: 'ti-transfer', title: 'System Integration', desc: 'Finance, operations, logistics, and sales channels joined so data is entered once, with monitoring that flags a failed sync early.' },
    { icon: 'ti-school', title: 'Team Training', desc: 'Role-based training as each module goes live, plain-language guides, and admin know-how handed over so your team runs the system itself.' },
  ] : [
    { icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'โมดูลการเงิน จัดซื้อ สต็อก และการผลิต ตั้งตามเอกสารและกฎอนุมัติที่คุณใช้อยู่ พร้อมทำความสะอาดข้อมูลหลักก่อนโหลดเข้าระบบ' },
    { icon: 'ti-users-group', title: 'CRM Platforms', desc: 'Pipeline ที่ตรงกับขั้นตอนขายจริง คำถามจากอีเมล ฟอร์มเว็บ และ LINE เข้ามารวมในเรคคอร์ดลูกค้าเดียวที่ทั้งทีมเห็นพร้อมกัน' },
    { icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'เครื่อง POS หน้าร้าน สต็อกแต่ละสาขา การชำระเงิน และร้านออนไลน์ ผูกกับตัวเลขชุดเดียวกัน สร้างมาเพื่อธุรกิจค้าปลีกที่มีหลายสาขา' },
    { icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'ส่วนเสริมและ API เล็กๆ ที่มีเอกสาร สำหรับขั้นตอนที่ชุดมาตรฐานทำไม่ได้ แยกจากระบบหลักเพื่อให้อัปเกรดได้อย่างปลอดภัย' },
    { icon: 'ti-transfer', title: 'System Integration', desc: 'เชื่อมการเงิน งานปฏิบัติการ โลจิสติกส์ และช่องทางขาย ให้กรอกข้อมูลครั้งเดียว พร้อมระบบเฝ้าดูที่แจ้งเร็วเมื่อซิงก์พลาด' },
    { icon: 'ti-school', title: 'Team Training', desc: 'อบรมตามบทบาทเมื่อแต่ละโมดูลเปิดใช้ มีคู่มือภาษาง่ายๆ และส่งต่อความรู้ด้านการดูแลระบบ ให้ทีมคุณใช้และดูแลเองได้' },
  ]

  const techStack = [
    { label: 'SAP', svg: 'sap' },
    { label: 'Salesforce', icon: 'ti-cloud' },
    { label: 'Microsoft Dynamics', icon: 'ti-chart-infographic' },
    { label: 'HubSpot', svg: 'hubspot' },
    { label: 'Odoo', svg: 'odoo' },
    { label: 'Oracle', icon: 'ti-database' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Requirements', desc: 'Process mapping and success measures' },
    { no: '02', title: 'Selection', desc: 'Fit-gap review and platform recommendation' },
    { no: '03', title: 'Implement', desc: 'Configuration, data migration, phased go-live' },
    { no: '04', title: 'Customize', desc: 'Small extensions for genuine gaps' },
    { no: '05', title: 'Integrate', desc: 'Finance, operations, shops, online channels' },
    { no: '06', title: 'Train', desc: 'By role, with support in the first weeks' },
  ] : [
    { no: '01', title: 'Requirements', desc: 'ร่างแผนผังขั้นตอนทำงาน และตัวชี้วัดความสำเร็จ' },
    { no: '02', title: 'Selection', desc: 'ทำ Fit-gap Review และแนะนำแพลตฟอร์ม' },
    { no: '03', title: 'Implement', desc: 'ตั้งค่า ย้ายข้อมูล และเปิดใช้ทีละระยะ' },
    { no: '04', title: 'Customize', desc: 'ส่วนเสริมเล็กๆ ตรงช่องว่างที่เกิดขึ้นจริง' },
    { no: '05', title: 'Integrate', desc: 'การเงิน งานปฏิบัติการ หน้าร้าน ช่องทางออนไลน์' },
    { no: '06', title: 'Train', desc: 'อบรมตามบทบาท และดูแลต่อในสัปดาห์แรกๆ' },
  ]

  const darkFaqs = isEN ? [
    { q: 'Which ERP, CRM, and POS platforms does Haliviq work with?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo, and Oracle, plus custom integrations between them and the rest of your systems. We recommend the platform that fits your operations and budget, not the one with the biggest name, and we do not mark up licences.' },
    { q: 'Does Haliviq customize off-the-shelf enterprise software?', a: 'Yes. We tailor platforms to how your business actually operates and build integrations for clean data exchange with your other systems, rather than making you redesign your processes around an unmodified package. We keep each customization small and documented so future upgrades do not break it.' },
    { q: 'Can you connect our ERP or CRM to customer-facing products?', a: 'Yes. Because one team builds both enterprise systems and customer-facing apps and websites, orders, accounts, and stock can be shared between them from the start. You deal with one team instead of two vendors who each point at the other when something breaks.' },
    { q: 'Should we buy off-the-shelf software or build something custom?', a: 'Buy off-the-shelf for commodity workflows such as accounting, standard HR, and generic sales pipelines. Build custom where your process is a real competitive advantage. Most businesses need a mix, and the fit-gap review shows which parts belong in which group.' },
    { q: 'How long does a typical ERP or CRM implementation take?', a: 'A focused CRM rollout for one department typically takes 6-10 weeks. A full ERP implementation across finance, supply chain, and operations for a mid-size business usually runs 4-8 months, phased by module so the business sees value before the whole system goes live.' },
    { q: 'How much does an enterprise system implementation cost?', a: 'Cost depends on the platform licence itself (which we do not mark up), the number of modules in scope, and how much customization and data migration is needed. Implementation services typically start in the low six figures (THB) for a focused CRM rollout, with full ERP programmes quoted after the requirements and process-mapping phase.' },
    { q: 'What happens to our existing data during migration?', a: 'We map your existing data structures first, rehearse the migration in a staging environment, and validate the results against the source system. The legacy system stays available in read-only mode until the new one is proven in production, so nothing is lost in the changeover.' },
    { q: 'How do you make sure the team actually uses the new system?', a: 'Training is part of the rollout, not a single session at the end. We train department by department as each module goes live, and we configure the system around how people already work, so they are not asked to relearn their job to match generic software defaults.' },
    { q: 'Can you support retail with many branches and POS?', a: 'Yes. We connect POS terminals, branch stock, promotions, and the online store so every branch sells from shared inventory. We also plan for branches with a weak or interrupted internet connection, so a sale is never lost and syncs once the line is back.' },
    { q: 'What do we need to prepare before the process mapping session?', a: 'Bring the people who do the work, a few real documents such as a recent order, invoice, and stock report, and a list of the systems and spreadsheets you use now. You do not need to prepare a specification. Writing it down is what the session is for.' },
  ] : [
    { q: 'Haliviq รองรับระบบ ERP, CRM, POS ตัวไหนบ้าง?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo และ Oracle พร้อมเขียนตัวเชื่อมระหว่างระบบเหล่านี้กับระบบอื่นของคุณ เราแนะนำแพลตฟอร์มที่เหมาะกับการทำงานและงบประมาณ ไม่ใช่ตัวที่ชื่อดังที่สุด และเราไม่บวกราคาค่าลิขสิทธิ์เพิ่ม' },
    { q: 'Haliviq ปรับแต่งซอฟต์แวร์องค์กรสำเร็จรูปได้ไหม?', a: 'ได้ เราปรับแพลตฟอร์มให้เข้ากับวิธีทำธุรกิจจริง และสร้างตัวเชื่อมให้แลกเปลี่ยนข้อมูลกับระบบอื่นของคุณได้เป็นระเบียบ แทนที่จะให้คุณต้องปรับขั้นตอนทำงานตามชุดที่ไม่ได้ปรับแต่ง เราทำงานปรับแต่งแต่ละอย่างให้เล็กและมีเอกสาร การอัปเกรดในอนาคตจะไม่ทำให้พัง' },
    { q: 'เชื่อม ERP หรือ CRM กับผลิตภัณฑ์ที่ลูกค้าใช้ได้ไหม?', a: 'ได้ เพราะทีมเดียวสร้างทั้งระบบองค์กรและแอปกับเว็บไซต์ฝั่งลูกค้า ออเดอร์ บัญชีผู้ใช้ และสต็อกจึงแชร์ถึงกันได้ตั้งแต่ต้น คุณคุยกับทีมเดียว ไม่ใช่ผู้ให้บริการสองเจ้าที่ต่างฝ่ายต่างชี้ไปที่อีกฝ่ายเมื่อมีปัญหา' },
    { q: 'ควรซื้อซอฟต์แวร์สำเร็จรูปหรือสร้างเอง?', a: 'ซื้อสำเร็จรูปสำหรับงานทั่วไป เช่น บัญชี งาน HR มาตรฐาน และขั้นตอนขายทั่วไป ส่วนสร้างเองสำหรับจุดที่ขั้นตอนของคุณเป็นความได้เปรียบทางธุรกิจจริงๆ ธุรกิจส่วนใหญ่ต้องใช้ผสมกัน และ Fit-gap Review จะบอกว่าส่วนไหนควรอยู่กลุ่มไหน' },
    { q: 'ติดตั้ง ERP หรือ CRM ทั่วไปใช้เวลานานแค่ไหน?', a: 'การเปิดใช้ CRM ที่เจาะจงหนึ่งแผนก มักใช้ 6-10 สัปดาห์ ส่วนการติดตั้ง ERP เต็มรูปแบบครอบคลุมการเงิน ซัพพลายเชน และงานปฏิบัติการสำหรับธุรกิจขนาดกลาง มักใช้ 4-8 เดือน แบ่งเป็นระยะตามโมดูล ธุรกิจจะเห็นประโยชน์ก่อนที่ระบบทั้งหมดจะเปิดใช้' },
    { q: 'ติดตั้งระบบองค์กรมีค่าใช้จ่ายเท่าไหร่?', a: 'ขึ้นอยู่กับค่าลิขสิทธิ์ของแพลตฟอร์มเอง (ซึ่งเราไม่บวกราคาเพิ่ม) จำนวนโมดูลในขอบเขต และปริมาณงานปรับแต่งกับย้ายข้อมูล ค่าบริการติดตั้งมักเริ่มที่หลักแสนต้นๆ (บาท) สำหรับ CRM ที่เจาะจง ส่วนโปรแกรม ERP เต็มรูปแบบจะเสนอราคาหลังขั้นตอนกำหนดความต้องการและร่างแผนผังขั้นตอนทำงาน' },
    { q: 'ข้อมูลเดิมของเราจะเป็นอย่างไรระหว่างย้ายระบบ?', a: 'เราจับคู่โครงสร้างข้อมูลเดิมก่อน ซ้อมย้ายในสภาพแวดล้อมทดสอบ และตรวจผลเทียบกับระบบต้นทาง ระบบเดิมจะเปิดไว้แบบอ่านอย่างเดียวจนกว่าระบบใหม่จะผ่านการใช้งานจริง ข้อมูลจึงไม่หายระหว่างเปลี่ยนระบบ' },
    { q: 'มั่นใจได้ยังไงว่าทีมจะใช้ระบบใหม่จริง?', a: 'การอบรมเป็นส่วนหนึ่งของการเปิดใช้ ไม่ใช่นัดรอบเดียวตอนท้าย เราอบรมทีละแผนกเมื่อแต่ละโมดูลเปิดใช้ และตั้งค่าระบบตามวิธีที่คนทำงานอยู่แล้ว เขาจะได้ไม่ต้องเรียนรู้งานใหม่เพื่อให้เข้ากับค่าเริ่มต้นทั่วไปของซอฟต์แวร์' },
    { q: 'รองรับธุรกิจค้าปลีกหลายสาขาที่ใช้ POS ไหม?', a: 'ได้ เราเชื่อมเครื่อง POS สต็อกแต่ละสาขา โปรโมชัน และร้านออนไลน์ ให้ทุกสาขาขายจากสต็อกร่วมกัน และวางแผนสำหรับสาขาที่อินเทอร์เน็ตไม่เสถียรหรือหลุดด้วย ยอดขายจะไม่หาย และซิงก์ให้เองเมื่อสัญญาณกลับมา' },
    { q: 'ต้องเตรียมอะไรก่อนมาร่างแผนผังขั้นตอนทำงาน?', a: 'พาคนที่ทำงานจริงมาด้วย เอกสารจริงสักสองสามใบ เช่น ออเดอร์ ใบแจ้งหนี้ และรายงานสต็อกล่าสุด และรายการระบบกับ Spreadsheet ที่ใช้อยู่ ไม่ต้องเตรียมสเปกมาก่อน การเขียนมันออกมาคือสิ่งที่เราทำกันในการคุยครั้งนั้น' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'สิ่งที่เราทำได้จริงในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
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

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'Platforms We Use' : 'แพลตฟอร์มที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven enterprise platforms we apply where they fit — chosen for your operations, not the biggest name.'
              : 'แพลตฟอร์มองค์กรที่ผ่านการใช้งานจริง เลือกใช้ตามการทำงานจริงของคุณ ไม่ใช่ตามชื่อที่ใหญ่ที่สุด'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from requirements to real adoption — adjusted per business, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการกำหนดความต้องการไปสู่การใช้งานจริง ปรับตามแต่ละธุรกิจ ไม่ใช่สูตรสำเร็จ'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'FAQ' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--accent-2)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how we build enterprise systems.' : 'คำตอบตรงๆ เรื่องวิธีที่เราสร้างระบบองค์กร'}
          </p>

          <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: 'var(--ink)', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgb(var(--fg) / 0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

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
        <h2 className="t-display mb-5 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? 'Tell us which systems you run today and where they let you down.' : 'เล่าให้เราฟังได้เลยว่าตอนนี้ใช้ระบบอะไรอยู่ และติดขัดตรงไหน'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกัน'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/enterprise-solutions/why1.jpg"
      whyImg2="/images/services/enterprise-solutions/why2.jpg"
      featureImg="/images/services/enterprise-solutions/feature.jpg"
      processImg="/images/services/enterprise-solutions/process.jpg"
    />
  )
}
