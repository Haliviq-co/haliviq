import type { Metadata } from 'next'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'ERP & CRM Implementation Company in Bangkok | Haliviq'
    : 'รับติดตั้ง ERP และ CRM กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'ERP and CRM implementation in Thailand: platform selection, Odoo, SAP, Salesforce or HubSpot setup, data migration, workflow automation, and staff training.'
    : 'Haliviq รับติดตั้งและปรับแต่ง ERP กับ CRM ในไทย ช่วยเลือกแพลตฟอร์ม ตั้งค่า Odoo SAP Salesforce HubSpot ย้ายข้อมูลเก่า ทำ Workflow อนุมัติ และอบรมทีม'
  const url = `https://www.haliviq.com/${params.lang}/services/erp-crm`
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

  const badge    = isEN ? 'Enterprise Systems / ERP & CRM'  : 'Enterprise Systems / ERP & CRM'
  const title    = isEN ? 'Manage Your Business'  : 'บริหารธุรกิจด้วย'
  const subtitle = isEN ? 'With Intelligent Systems'    : 'ระบบอัจฉริยะ'
  const heroDesc = isEN ? 'When finance keeps one spreadsheet, sales keeps another, and the warehouse relies on a third, nobody is looking at the same numbers. Haliviq sets up and tailors ERP and CRM systems so orders, stock, invoices, customers, and approvals all live in one place. We help you choose between platforms such as Odoo, SAP, Microsoft Dynamics, Salesforce, HubSpot, or Zoho, configure the one that fits, move your old data across, and train your people until they are comfortable using it.'  : 'ถ้าฝ่ายการเงินมี Spreadsheet ชุดหนึ่ง ฝ่ายขายมีอีกชุด และคลังสินค้าก็ใช้อีกไฟล์ ก็ไม่มีใครได้ดูตัวเลขชุดเดียวกันจริงๆ Haliviq ช่วยติดตั้งและปรับแต่ง ERP กับ CRM ให้ออเดอร์ สต็อก ใบแจ้งหนี้ ข้อมูลลูกค้า และการอนุมัติ อยู่ที่เดียวกันทั้งหมด เราช่วยเทียบแพลตฟอร์มอย่าง Odoo, SAP, Microsoft Dynamics, Salesforce, HubSpot หรือ Zoho ว่าตัวไหนเหมาะกับคุณ ตั้งค่าตัวที่เลือก ย้ายข้อมูลเก่าเข้ามา แล้วอยู่ช่วยสอนจนทีมใช้งานได้คล่อง'
  const whyTitle = isEN ? 'Why disconnected systems limit your potential'    : 'ทำไมระบบที่ไม่เชื่อมกันถึงดึงธุรกิจให้ช้าลง'
  const whyDesc  = isEN ? 'Finance, sales, operations, and HR each tend to grow their own tools and spreadsheets. The result is the same customer typed in three places, month-end figures that take days to reconcile, and managers deciding on reports that were already out of date when they opened them. None of it looks urgent on any single day, but it adds up to hours of lost time per person every week.'  : 'ฝ่ายการเงิน ฝ่ายขาย ฝ่ายปฏิบัติการ และ HR มักค่อยๆ มีเครื่องมือกับ Spreadsheet ของตัวเองขึ้นมา ผลที่ตามมาคือลูกค้าคนเดียวถูกพิมพ์ลงสามที่ ตัวเลขปิดงวดต้องใช้หลายวันกว่าจะกระทบยอดตรงกัน และผู้บริหารต้องตัดสินใจจากรายงานที่ล้าหลังตั้งแต่ตอนเปิดดู ไม่มีวันไหนที่ดูเป็นเรื่องด่วน แต่รวมกันแล้วทำให้แต่ละคนเสียเวลาไปหลายชั่วโมงทุกสัปดาห์'
  const ctaTitle = isEN ? 'Ready to unify your business systems?'    : 'พร้อมรวมระบบธุรกิจให้อยู่ที่เดียวหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Systems Audit. We list the tools and spreadsheets you use today, trace how data moves between them, and sketch the integration that makes sense.'   : 'เริ่มจากตรวจระบบ (Systems Audit) ฟรี เราจะไล่ดูว่าตอนนี้ใช้เครื่องมือและ Spreadsheet อะไรบ้าง ข้อมูลไหลจากที่ไหนไปที่ไหน แล้วร่างให้ดูว่าควรเชื่อมระบบกันยังไง'

  const heroBullets = isEN ? [
      'ERP and CRM needs assessment, plus a straight comparison of the platforms that could fit',
      'Configuration and custom modules for the steps your business does differently',
      'Data migration from old systems or spreadsheets, with checks and a rollback plan',
      'Role-based access, workflows, and approval chains that follow your real org chart',
      'Links to accounting, e-commerce, HR, logistics, and LINE or email so data is entered once',
      'Training, go-live support, and ongoing administration after launch',
    ] : [
      'ประเมินความต้องการ ERP และ CRM พร้อมเทียบแพลตฟอร์มที่เป็นไปได้ตามตรง',
      'ตั้งค่าระบบ และพัฒนา Module เพิ่มสำหรับขั้นตอนที่ธุรกิจคุณทำไม่เหมือนใคร',
      'ย้ายข้อมูลจากระบบเก่าหรือ Spreadsheet พร้อมตรวจความถูกต้องและแผนย้อนกลับ',
      'กำหนดสิทธิ์ตามบทบาท Workflow และสายอนุมัติให้ตรงกับโครงสร้างองค์กรจริง',
      'เชื่อมกับระบบบัญชี E-commerce HR โลจิสติกส์ รวมถึง LINE และอีเมล ให้กรอกข้อมูลครั้งเดียว',
      'อบรมผู้ใช้ ช่วยตอนเปิดใช้งานจริง และดูแลระบบต่อเนื่องหลังเปิด',
    ]
  const whyPoints   = isEN ? [
      'A unified ERP eliminates an average 3.5 hours per employee per week spent reconciling data between files and systems',
      'Real-time inventory reduces stock-outs by 40% and overstock by 30%, because purchasing sees what sales and the warehouse see',
      'CRM automation increases sales team productivity by 29% by removing manual data entry after every call and meeting',
      'Automated approval workflows cut processing time by 70%, since requests no longer wait in someone’s inbox or LINE chat',
      'A single customer record across all teams means sales, support, and billing speak to the customer with the same facts',
    ] : [
      'ERP ระบบเดียวช่วยประหยัดเวลาเฉลี่ย 3.5 ชั่วโมงต่อพนักงานต่อสัปดาห์ ที่เคยเสียไปกับการกระทบยอดระหว่างไฟล์และระบบ',
      'Inventory แบบ Real-time ลดสินค้าขาดสต็อก 40% และสินค้าล้นสต็อก 30% เพราะฝ่ายจัดซื้อเห็นสิ่งเดียวกับที่ฝ่ายขายและคลังเห็น',
      'CRM อัตโนมัติช่วยให้ทีมขายทำงานได้มากขึ้น 29% เพราะไม่ต้องนั่งกรอกข้อมูลมือหลังโทรหรือประชุมทุกครั้ง',
      'Workflow อนุมัติอัตโนมัติลดเวลาดำเนินการ 70% เพราะคำขอไม่ต้องไปรอในอีเมลหรือแชต LINE ของใครคนใดคนหนึ่งอีก',
      'ข้อมูลลูกค้าชุดเดียวทุกทีม ทำให้ฝ่ายขาย ฝ่ายซัพพอร์ต และฝ่ายบัญชี คุยกับลูกค้าด้วยข้อเท็จจริงชุดเดียวกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '3.5h', label: 'Saved Per Employee Per Week', desc: 'No more manual reconciliation'},
      {stat: '40%', label: 'Fewer Stock-Outs', desc: 'With real-time inventory'},
      {stat: '29%', label: 'Sales Productivity Gain', desc: 'With CRM automation'},
      {stat: '70%', label: 'Faster Approvals', desc: 'With automated workflows'}
    ] : [
      {stat: '3.5h', label: 'ประหยัดต่อคนต่อสัปดาห์', desc: 'ไม่ต้องกระทบยอดด้วยมืออีก'},
      {stat: '40%', label: 'สินค้าขาดสต็อกลดลง', desc: 'ด้วย Inventory แบบ Real-time'},
      {stat: '29%', label: 'ทีมขายทำงานได้มากขึ้น', desc: 'ด้วย CRM อัตโนมัติ'},
      {stat: '70%', label: 'อนุมัติเร็วขึ้น', desc: 'ด้วย Workflow อัตโนมัติ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'We install and configure ERP such as SAP, Oracle, Odoo, or Microsoft Dynamics around your finance, purchasing, inventory, production, and HR steps. You get chart of accounts, units, taxes, and document flows set up for how a Thai business actually books and ships, not the vendor’s demo defaults.'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'We set up Salesforce, HubSpot, or Zoho CRM with the fields, pipeline stages, workflows, and reports your sales team will really use. Leads, quotes, follow-ups, and customer history end up in one record that anyone on the team can open.'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'We connect ERP and CRM to the tools around them: e-commerce, accounting, HR, logistics, and customer channels. The aim is that an order, a payment, or a new customer is typed once and shows up everywhere it is needed.'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'We move customers, products, open orders, and balances out of old systems and spreadsheets. Data is cleaned and mapped first, tested in a staging copy, checked against the source, and cut over with a rollback plan ready.'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'We turn approvals, notifications, and task hand-offs into automatic flows, such as purchase requests, leave, discounts, and invoice sign-off. Each step has an owner, a deadline, and a record of who approved what.'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'We train users by role, work with a few champions in each department, and stay close in the first weeks after launch. A system only pays off when people really use it, so adoption gets as much planning as the configuration.'}
    ] : [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'เราติดตั้งและตั้งค่า ERP เช่น SAP, Oracle, Odoo หรือ Microsoft Dynamics ให้เข้ากับขั้นตอนการเงิน จัดซื้อ สต็อก การผลิต และ HR ของคุณ ทั้งผังบัญชี หน่วยนับ ภาษี และลำดับเอกสาร ตั้งตามวิธีลงบัญชีและส่งของของธุรกิจไทยจริงๆ ไม่ใช่ค่าเริ่มต้นจากเดโมของผู้ขาย'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'เราตั้งค่า Salesforce, HubSpot หรือ Zoho CRM พร้อมฟิลด์ ขั้นตอนใน Pipeline Workflow และรายงานที่ทีมขายใช้จริง ลีด ใบเสนอราคา การติดตามผล และประวัติลูกค้าจะอยู่ในเรคคอร์ดเดียวที่ใครในทีมก็เปิดดูได้'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'เราเชื่อม ERP และ CRM เข้ากับเครื่องมือรอบข้าง ทั้ง E-commerce ระบบบัญชี HR โลจิสติกส์ และช่องทางติดต่อลูกค้า เป้าหมายคือออเดอร์ การชำระเงิน หรือลูกค้าใหม่ พิมพ์ครั้งเดียวแล้วไปปรากฏทุกที่ที่ต้องใช้'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'เราย้ายลูกค้า สินค้า ออเดอร์ที่ค้างอยู่ และยอดคงเหลือ จากระบบเก่าและ Spreadsheet โดยทำความสะอาดและจับคู่ข้อมูลก่อน ทดสอบในชุดจำลอง ตรวจเทียบกับต้นทาง แล้วค่อยสลับระบบ พร้อมแผนย้อนกลับที่เตรียมไว้'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'เราเปลี่ยนการอนุมัติ การแจ้งเตือน และการส่งต่องาน ให้ทำงานเองอัตโนมัติ เช่น ใบขอซื้อ การลา ส่วนลด และการเซ็นอนุมัติใบแจ้งหนี้ ทุกขั้นมีผู้รับผิดชอบ กำหนดเวลา และบันทึกว่าใครอนุมัติอะไร'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'เราอบรมผู้ใช้ตามบทบาท ทำงานร่วมกับตัวแทนในแต่ละแผนก และอยู่ใกล้ชิดช่วงสัปดาห์แรกๆ หลังเปิดใช้ ระบบจะคุ้มก็ต่อเมื่อคนใช้จริง เราจึงวางแผนเรื่องนี้จริงจังพอๆ กับการตั้งค่าระบบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Current State Assessment', desc: 'We sit with each department, follow a real order or invoice from start to finish, and note where people re-key data, wait for approvals, or keep side spreadsheets. This gives us the list of problems the system must actually solve before any platform is chosen.'},
      {no: '02', title: 'Solution Design', desc: 'We compare the platforms that could fit, then design the architecture: which modules you need, how data flows between them, and which steps need customisation. You receive a written blueprint with scope, assumptions, and what affects cost.'},
      {no: '03', title: 'Configuration & Development', desc: 'We configure the system, build the custom modules and integrations, and show working builds to your key users every couple of weeks, so surprises come early and are cheap to fix.'},
      {no: '04', title: 'Data Migration & Testing', desc: 'We migrate data into a test copy, run through every scenario from your list, and hold user acceptance testing (UAT) with the people who will use the system daily. Issues found here are fixed before anyone relies on the system.'},
      {no: '05', title: 'Go-live & Support', desc: 'We launch in phases, by department or module, watch closely in the first weeks, and answer questions fast. We stay until the team is confident, then agree on an ongoing support arrangement if you want one.'}
    ] : [
      {no: '01', title: 'Current State Assessment', desc: 'เรานั่งคุยกับแต่ละแผนก ตามออเดอร์หรือใบแจ้งหนี้จริงใบหนึ่งตั้งแต่ต้นจนจบ แล้วจดว่าตรงไหนที่คนต้องคีย์ซ้ำ รออนุมัติ หรือแอบเก็บ Spreadsheet ไว้เอง ได้รายการปัญหาที่ระบบต้องแก้จริงๆ ก่อนจะเลือกแพลตฟอร์มใด'},
      {no: '02', title: 'Solution Design', desc: 'เราเทียบแพลตฟอร์มที่เป็นไปได้ แล้วออกแบบโครงสร้างระบบ ว่าต้องใช้ Module ไหน ข้อมูลไหลระหว่างกันยังไง และขั้นตอนไหนต้องปรับแต่ง คุณจะได้เอกสารแบบแปลนที่ระบุขอบเขต สมมติฐาน และสิ่งที่มีผลต่อค่าใช้จ่าย'},
      {no: '03', title: 'Configuration & Development', desc: 'เราตั้งค่าระบบ พัฒนา Module เฉพาะและการเชื่อมต่อ และเอาของที่ใช้ได้จริงมาให้ผู้ใช้หลักลองทุกสองสามสัปดาห์ เรื่องไม่คาดคิดจะเจอเร็วและแก้ได้ถูก'},
      {no: '04', title: 'Data Migration & Testing', desc: 'เราย้ายข้อมูลเข้าชุดทดสอบ ไล่ทดสอบทุกสถานการณ์ในรายการ และทำ UAT กับคนที่จะใช้ระบบทุกวัน ปัญหาที่เจอตรงนี้จะถูกแก้ก่อนที่ใครจะต้องพึ่งพาระบบจริง'},
      {no: '05', title: 'Go-live & Support', desc: 'เราเปิดใช้ทีละระยะ ตามแผนกหรือตาม Module ดูแลใกล้ชิดในช่วงสัปดาห์แรกๆ และตอบคำถามให้เร็ว เราอยู่จนทีมมั่นใจ แล้วค่อยตกลงการดูแลต่อเนื่องถ้าคุณต้องการ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Manufacturing · Nationwide', title: 'ERP Connecting 5 Factories in Real-time', desc: 'Odoo ERP brought inventory, production, finance, and HR for five plants into one system, so head office reads the same figures the plants do.', result: 'OpEx down 28%'},
      {tag: 'Retail · Nationwide', title: 'CRM Boosting Sales Team Productivity 29%', desc: 'Salesforce was reshaped around the real sales process, with dashboards the team opens every morning rather than reports nobody reads.', result: 'Revenue up 18%'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Hospital Management System', desc: 'An ERP linking HIS, pharmacy, finance, and HR, cutting the manual hand-offs between hospital departments.', result: 'Manual Work down 60%'}
    ] : [
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'ERP เชื่อม 5 โรงงานแบบ Real-time', desc: 'Odoo ERP รวม Inventory, Production, Finance และ HR ของห้าโรงงานไว้ในระบบเดียว สำนักงานใหญ่เห็นตัวเลขชุดเดียวกับที่โรงงานเห็น', result: 'OpEx ลด 28%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'CRM เพิ่มประสิทธิภาพทีมขาย 29%', desc: 'ปรับ Salesforce ให้ตรงกับขั้นตอนขายจริง พร้อม Dashboard ที่ทีมเปิดดูทุกเช้า ไม่ใช่รายงานที่ไม่มีใครอ่าน', result: 'รายได้เพิ่ม 18%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ระบบบริหารโรงพยาบาลตั้งแต่ต้นจนจบ', desc: 'ERP ที่เชื่อม HIS ร้านยา การเงิน และ HR ลดการส่งต่องานด้วยมือระหว่างแผนกในโรงพยาบาล', result: 'งานมือลด 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which ERP is best?', a: 'There is no single best one. SAP suits large enterprises with complex needs, Odoo suits growing SMEs that want flexibility and a lower licence cost, and Microsoft Dynamics fits organisations already living in the Microsoft ecosystem. We compare them against your processes, budget, and team, and recommend whichever fits, whoever the vendor is.'},
      {q: 'How long does implementation take?', a: 'A basic ERP covering finance, sales, and inventory takes about 3-6 months. A full enterprise implementation across several entities or plants can take 12-18 months, depending on scope and how clean your existing data is. We phase the work by module so you get value early.'},
      {q: 'Can you migrate our old data?', a: 'Yes. We map old fields to the new ones, write migration scripts, test them in a staging copy, reconcile totals against the source, and keep a rollback plan ready for cut-over day. Messy data is normal, and cleaning it is part of the job.'},
      {q: 'Will staff adopt the new system?', a: 'Adoption is planned from week one. We train by role, work with a champion in each department, and stay close during the first weeks after launch. We also build the workflows around how people already work wherever we can, so the new system feels like a shortcut and not extra homework.'},
      {q: 'Should we pick an ERP or a CRM first?', a: 'It depends where the pain is. If the problem is orders, stock, and month-end, start with ERP. If it is lost leads and unclear sales pipeline, start with CRM. Either way we design the first one so the second can plug in later without redoing your data.'},
      {q: 'Can the system connect to our accounting software, e-commerce store, or LINE?', a: 'Usually yes. We connect through APIs or standard connectors, and where none exist we build a small integration. Common links include accounting packages, online stores, payment gateways, shipping providers, and LINE or email for customer messages.'},
      {q: 'What does it cost?', a: 'Cost depends on the platform licences, number of modules and users, the amount of customisation, and how much data has to be migrated. We scope after the assessment and give a written estimate with the assumptions behind it, so you can see what moves the price.'}
    ] : [
      {q: 'ERP ตัวไหนดีที่สุด?', a: 'ไม่มีตัวที่ดีที่สุดตัวเดียว SAP เหมาะกับองค์กรใหญ่ที่ความต้องการซับซ้อน Odoo เหมาะกับ SME ที่กำลังโตและอยากได้ความยืดหยุ่นกับค่าลิขสิทธิ์ที่ต่ำกว่า ส่วน Microsoft Dynamics เหมาะกับองค์กรที่ใช้ผลิตภัณฑ์ Microsoft เป็นหลักอยู่แล้ว เราเทียบให้ตามขั้นตอนทำงาน งบประมาณ และทีมของคุณ แล้วแนะนำตัวที่เหมาะที่สุด ไม่ว่าจะเป็นของเจ้าไหน'},
      {q: 'ใช้เวลาติดตั้งนานแค่ไหน?', a: 'ERP พื้นฐานที่ครอบคลุมการเงิน การขาย และสต็อก ใช้ราว 3-6 เดือน ระบบระดับองค์กรเต็มรูปแบบที่ครอบคลุมหลายนิติบุคคลหรือหลายโรงงานอาจถึง 12-18 เดือน ขึ้นอยู่กับขอบเขตและความสะอาดของข้อมูลเดิม เราแบ่งงานตาม Module คุณจะได้เห็นประโยชน์ตั้งแต่เนิ่นๆ'},
      {q: 'ย้ายข้อมูลเก่าได้ไหม?', a: 'ได้ เราจับคู่ฟิลด์เก่ากับฟิลด์ใหม่ เขียนสคริปต์ย้ายข้อมูล ทดสอบในชุดจำลอง กระทบยอดรวมกับต้นทาง และเตรียมแผนย้อนกลับไว้ในวันสลับระบบ ข้อมูลรกเป็นเรื่องปกติ และการทำความสะอาดก็เป็นส่วนหนึ่งของงาน'},
      {q: 'พนักงานจะยอมใช้ระบบใหม่ไหม?', a: 'เราวางแผนเรื่องนี้ตั้งแต่สัปดาห์แรก อบรมตามบทบาท มีตัวแทนในแต่ละแผนกคอยช่วย และอยู่ใกล้ชิดช่วงสัปดาห์แรกๆ หลังเปิดใช้ เรายังออกแบบ Workflow ให้ใกล้กับวิธีที่คนทำงานอยู่แล้วเท่าที่ทำได้ ระบบใหม่จะรู้สึกเป็นทางลัด ไม่ใช่การบ้านเพิ่ม'},
      {q: 'ควรเริ่มจาก ERP หรือ CRM ก่อน?', a: 'ดูว่าปัญหาอยู่ตรงไหน ถ้าปัญหาคือออเดอร์ สต็อก และการปิดงวดบัญชี เริ่มที่ ERP ถ้าปัญหาคือลีดหาย และไม่เห็นภาพ Pipeline การขาย เริ่มที่ CRM ไม่ว่าเริ่มตัวไหน เราออกแบบให้อีกตัวต่อเข้ามาทีหลังได้โดยไม่ต้องทำข้อมูลใหม่'},
      {q: 'เชื่อมกับโปรแกรมบัญชี ร้านออนไลน์ หรือ LINE ได้ไหม?', a: 'ส่วนใหญ่ได้ เราเชื่อมผ่าน API หรือ Connector มาตรฐาน และถ้าไม่มีให้ใช้ ก็เขียนตัวเชื่อมเล็กๆ ขึ้นมา ที่เชื่อมบ่อยคือโปรแกรมบัญชี ร้านออนไลน์ Payment Gateway ผู้ให้บริการขนส่ง รวมถึง LINE หรืออีเมลสำหรับส่งข้อความหาลูกค้า'},
      {q: 'ค่าใช้จ่ายประมาณเท่าไหร่?', a: 'ขึ้นอยู่กับค่าลิขสิทธิ์ของแพลตฟอร์ม จำนวน Module และผู้ใช้ ปริมาณงานปรับแต่ง และปริมาณข้อมูลที่ต้องย้าย เราประเมินหลังขั้นตอนตรวจสถานะปัจจุบัน และให้ใบประเมินเป็นลายลักษณ์อักษรพร้อมสมมติฐาน คุณจะเห็นว่าอะไรทำให้ราคาขยับ'}
    ]
  const related     = isEN ? [
      {label: 'Automation', href: '/services/automation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ] : [
      {label: 'Automation', href: '/services/automation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ]

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--accent)" bg="var(--purple-bg)"
      heroImg="/images/services/erp-crm/hero.jpg"
      whyImg="/images/services/erp-crm/why1.jpg"
      whyImg2="/images/services/erp-crm/why2.jpg"
      featureImg="/images/services/erp-crm/feature.jpg"
      processImg="/images/services/erp-crm/process.jpg"
    />
  )
}
