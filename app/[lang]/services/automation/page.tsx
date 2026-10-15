import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'AI & Innovation / Automation'  : 'AI & นวัตกรรม / ระบบอัตโนมัติ (Automation)'
  const title    = isEN ? 'Let Systems'  : 'ให้ระบบ'
  const subtitle = isEN ? 'Do the Work for You'    : 'ทำงานแทนคุณ'
  const heroDesc = isEN ? 'Think about the jobs your team repeats every day: copying figures between spreadsheets, chasing approvals, keying in invoices, sending the same report on Monday morning. Haliviq maps those routines, picks the ones worth automating, and builds the bots, workflows and integrations that take them over. Your people keep the work that needs judgement, and the rest runs on its own, with alerts when something looks off.'  : 'ลองนึกถึงงานที่ทีมคุณทำซ้ำทุกวัน เช่น ก๊อปตัวเลขจากสเปรดชีตไปอีกไฟล์ ตามอนุมัติ คีย์ใบแจ้งหนี้ หรือส่งรายงานเดิมทุกเช้าวันจันทร์ Haliviq จะช่วยดูว่างานพวกนี้ไหลอย่างไร เลือกงานที่คุ้มจะทำให้อัตโนมัติ แล้วสร้างบอต เวิร์กโฟลว์ และการเชื่อมระบบมารับช่วงต่อ คนในทีมจะได้ใช้เวลากับงานที่ต้องคิดและตัดสินใจ ส่วนที่เหลือระบบทำให้เอง และถ้ามีอะไรผิดปกติก็แจ้งเตือนทันที'
  const whyTitle = isEN ? 'Why manual processes are the silent tax on your business'    : 'ทำไมงานที่ทำด้วยมือถึงเป็นต้นทุนที่คุณไม่ค่อยเห็น'
  const whyDesc  = isEN ? 'Manual work rarely shows up as a line item, so it goes unnoticed. But it costs you in slow turnaround, typos that travel downstream, and people who quietly burn out on copy-and-paste. Any task that follows the same rules every time is a good candidate for automation, and the first few usually pay for the rest.'  : 'งานที่ทำด้วยมือไม่ค่อยโผล่เป็นรายการค่าใช้จ่ายในบัญชี เลยไม่ค่อยมีใครสังเกต แต่มันกินเราทั้งทางเวลาที่งานช้าลง ตัวเลขที่พิมพ์ผิดแล้วไหลไปถึงขั้นตอนถัดไป และคนในทีมที่เหนื่อยกับงานก๊อปแปะซ้ำๆ ทุกงานที่ทำตามกฎเดิมทุกครั้งคือตัวเลือกที่ดีสำหรับทำให้อัตโนมัติ และไม่กี่งานแรกมักช่วยจ่ายค่าใช้จ่ายของงานที่เหลือได้'
  const ctaTitle = isEN ? 'Ready to automate?'    : 'อยากให้ระบบช่วยทำงานแล้วหรือยัง?'
  const ctaDesc  = isEN ? 'Book a free Process Audit. In one working session we walk through how your team actually does its daily work and point out the automations that would save the most time, so you leave with a short, ranked list rather than a sales pitch.'   : 'ขอให้เราช่วยตรวจขั้นตอนงานฟรี ในเซสชันเดียวเราจะนั่งดูกับคุณว่าทีมทำงานกันจริงๆ อย่างไร แล้วชี้ว่างานไหนทำอัตโนมัติแล้วประหยัดเวลาที่สุด คุณจะได้รายการเรียงลำดับสั้นๆ กลับไป ไม่ใช่การเสนอขายของ'
  const heroBullets = isEN ? [
      'Process mapping, with a ranked list of tasks worth automating',
      'RPA bots, workflow automation and API integration between your tools',
      'AI OCR that reads invoices, contracts and forms and pulls out the data',
      'Automated reports, alerts and escalation rules that reach the right person',
      'ROI tracking after launch, then fixes and new automations as needs grow',
    ] : [
      'วาดผังขั้นตอนงานและจัดลำดับว่างานไหนควรทำอัตโนมัติก่อน',
      'บอต RPA, Workflow Automation และเชื่อมเครื่องมือต่างๆ เข้าหากันด้วย API',
      'AI OCR อ่านใบแจ้งหนี้ สัญญา และแบบฟอร์ม แล้วดึงข้อมูลออกมาให้',
      'รายงาน การแจ้งเตือน และกฎส่งต่อเรื่องอัตโนมัติ ถึงคนที่ต้องรู้ทันที',
      'ติดตามผลตอบแทน (ROI) หลังใช้งาน แล้วแก้ไขและเพิ่มงานอัตโนมัติตามที่ต้องการ',
    ]
  const whyPoints   = isEN ? [
      'Knowledge workers spend an average of 19% of their week searching for information. Connecting systems and automating lookups gives a good part of that time back',
      'Manual data entry runs at an error rate of roughly 1-5%. Automated validation catches bad values before they reach your finance or inventory systems',
      'An automation that runs 24/7 adds capacity at month-end or during a sale without adding headcount or overtime',
      'Automated steps behave the same way every time and leave a log, which makes audits and compliance checks far easier to pass',
      'Teams freed from repetitive work report higher engagement and lower turnover, because the dull part of the job is gone',
    ] : [
      'พนักงานออฟฟิศใช้เวลาเฉลี่ย 19% ของสัปดาห์ไปกับการหาข้อมูล ถ้าเชื่อมระบบและทำให้การค้นหาเป็นอัตโนมัติ ก็ได้เวลาส่วนนี้คืนมาไม่น้อย',
      'คนที่คีย์ข้อมูลด้วยมือพลาดอยู่ราว 1-5% ระบบตรวจสอบอัตโนมัติจะจับค่าที่ผิดได้ก่อนข้อมูลไปถึงระบบบัญชีหรือสต็อก',
      'ระบบที่ทำงาน 24/7 ช่วยรับงานช่วงปิดบัญชีหรือช่วงแคมเปญใหญ่ได้โดยไม่ต้องเพิ่มคนหรือจ่ายค่าล่วงเวลา',
      'ขั้นตอนที่ทำอัตโนมัติจะทำเหมือนเดิมทุกครั้งและมี Log เก็บไว้ ทำให้ผ่านการตรวจสอบและ Compliance ได้ง่ายขึ้นมาก',
      'ทีมที่ไม่ต้องทำงานซ้ำๆ บอกว่าอยากทำงานมากขึ้นและลาออกน้อยลง เพราะส่วนที่น่าเบื่อของงานหายไป',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Manual Work Eliminated', desc: 'In the processes we automate'},
      {stat: '0%', label: 'Data Entry Errors', desc: 'Where automated validation applies'},
      {stat: '24/7', label: 'Process Availability', desc: 'Runs without waiting on a person'},
      {stat: '6 months', label: 'Average ROI Payback', desc: 'Across all automation projects'}
    ] : [
      {stat: '80%', label: 'ลดงานที่ทำด้วยมือ', desc: 'ในขั้นตอนที่เราทำให้อัตโนมัติ'},
      {stat: '0%', label: 'ความผิดพลาดจากการคีย์ข้อมูล', desc: 'ในจุดที่มีการตรวจสอบอัตโนมัติ'},
      {stat: '24/7', label: 'ทำงานได้ตลอดเวลา', desc: 'ไม่ต้องรอให้มีคนมาทำ'},
      {stat: '6 เดือน', label: 'คืนทุนเฉลี่ย (ROI)', desc: 'จากทุกโปรเจกต์ระบบอัตโนมัติ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'We sit with the people who do the work, write down each step as it really happens, and mark where time is lost to waiting, re-keying or hand-offs. You get a process map and a ranked list of automation candidates with rough effort against payoff.'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'Software bots that use a screen the way a person would: logging in, copying data, filling forms and downloading reports. A good fit for older systems with no API, where you cannot or do not want to change the software underneath.'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'We connect your CRM, accounting, e-commerce, LINE and internal tools through APIs and webhooks, so an order or a form entered once shows up everywhere it is needed, with no second round of typing.'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'AI OCR that reads Thai and English invoices, contracts and forms, pulls out the fields you care about, checks them against your rules, and sends clean data to the next system. Anything it is unsure about goes to a person for review.'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'Rules that watch your KPIs, stock levels or queue times and notify the right person by email, LINE or Slack when a threshold is crossed. If nobody responds in time, the issue moves up to the next person automatically.'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'Reports and dashboards that build themselves from your live data and arrive on schedule, for example a sales summary every morning or a weekly cost report. No more Friday afternoons spent stitching spreadsheets together.'}
    ] : [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'เรานั่งคุยกับคนที่ทำงานจริง จดทุกขั้นตอนตามที่เกิดขึ้นจริง แล้วทำเครื่องหมายจุดที่เสียเวลาไปกับการรอ การคีย์ซ้ำ หรือการส่งต่องาน คุณจะได้ผังขั้นตอนงาน พร้อมรายการงานที่ควรทำอัตโนมัติเรียงตามความคุ้มค่า เทียบแรงที่ต้องใช้กับผลที่ได้คร่าวๆ'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'บอตที่ใช้หน้าจอเหมือนคนใช้ ทั้งล็อกอิน คัดลอกข้อมูล กรอกฟอร์ม และดาวน์โหลดรายงาน เหมาะกับระบบเก่าที่ไม่มี API หรือกรณีที่ไม่อยากแก้ซอฟต์แวร์เดิม'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'เราเชื่อม CRM ระบบบัญชี e-commerce LINE และเครื่องมือภายในเข้าหากันด้วย API และ Webhook ออเดอร์หรือฟอร์มที่กรอกครั้งเดียวจะไปปรากฏทุกที่ที่ต้องใช้เอง ไม่ต้องคีย์ซ้ำอีกรอบ'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'AI OCR อ่านใบแจ้งหนี้ สัญญา และแบบฟอร์มทั้งภาษาไทยและอังกฤษ ดึงช่องข้อมูลที่ต้องใช้ ตรวจกับกฎของคุณ แล้วส่งข้อมูลที่สะอาดไปยังระบบถัดไป ถ้าตรงไหนไม่แน่ใจ ระบบจะส่งให้คนช่วยตรวจ'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'ตั้งกฎให้ระบบคอยดูตัวชี้วัด ระดับสต็อก หรือเวลารอคิว แล้วแจ้งคนที่เกี่ยวข้องทางอีเมล LINE หรือ Slack เมื่อค่าเกินที่กำหนด ถ้าไม่มีใครตอบภายในเวลาที่ตั้งไว้ เรื่องจะถูกส่งต่อให้คนถัดไปอัตโนมัติ'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'รายงานและ Dashboard ที่สร้างเองจากข้อมูลจริงและส่งตรงเวลา เช่น สรุปยอดขายทุกเช้า หรือรายงานต้นทุนรายสัปดาห์ ไม่ต้องเสียบ่ายวันศุกร์ไปนั่งต่อสเปรดชีตอีก'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Process Discovery', desc: 'A workshop with the people who run the process day to day. We map what actually happens, collect examples of messy cases, and shortlist the tasks that are rule-based, frequent and worth the effort.'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'We check what is technically possible with your current systems, estimate build effort against hours saved, and give you an expected payback figure before you commit to anything.'},
      {no: '03', title: 'Build & Test', desc: 'We build in small pieces and test each one with unit tests, integration tests and UAT, where your own staff try it on real cases and tell us what is missing.'},
      {no: '04', title: 'Deploy & Monitor', desc: 'We go live with monitoring switched on and alerts that tell the right person when a run fails, plus a handover so your team knows what to do when it does.'},
      {no: '05', title: 'Measure & Optimize', desc: 'After a few weeks we compare real time saved against the estimate, fix edge cases that only appear in live use, and apply the same approach to the next process on the list.'}
    ] : [
      {no: '01', title: 'Process Discovery', desc: 'จัดเวิร์กช็อปกับคนที่ทำงานนั้นทุกวัน เราจะวาดผังว่างานไหลอย่างไรจริงๆ เก็บตัวอย่างเคสที่ยุ่งยาก แล้วเลือกงานที่มีกฎชัด เกิดบ่อย และคุ้มกับแรงที่ลงไป'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'ดูว่าระบบที่คุณมีตอนนี้ทำอะไรได้บ้างทางเทคนิค ประเมินแรงที่ใช้สร้างเทียบกับชั่วโมงที่ประหยัดได้ แล้วบอกตัวเลขคืนทุนที่คาดไว้ ก่อนที่คุณจะตัดสินใจอะไร'},
      {no: '03', title: 'Build & Test', desc: 'เราทำทีละชิ้นเล็กๆ และทดสอบทุกชิ้นด้วย Unit Test, Integration Test และ UAT ให้พนักงานของคุณลองกับเคสจริง แล้วบอกว่าขาดอะไร'},
      {no: '04', title: 'Deploy & Monitor', desc: 'ขึ้นใช้งานจริงพร้อมระบบติดตามและการแจ้งเตือนถึงคนที่ถูกต้องเมื่อมีรอบที่ทำงานล้มเหลว และสอนทีมคุณว่าต้องทำอย่างไรเมื่อเกิดเหตุแบบนั้น'},
      {no: '05', title: 'Measure & Optimize', desc: 'ผ่านไปสองสามสัปดาห์เราจะเทียบเวลาที่ประหยัดได้จริงกับที่ประเมินไว้ แก้กรณีพิเศษที่พบตอนใช้งานจริง แล้วใช้วิธีเดียวกันกับขั้นตอนถัดไปในลิสต์'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Loan Document Automation, 93% Faster', desc: 'RPA and AI OCR read incoming loan documents, validate the data against the bank\'s rules, and pass clean records to the core systems, so staff only handle the exceptions instead of typing every file.', result: 'Processing Time down 93%'},
      {tag: 'Insurance · Bangkok', title: 'Automated Claims Processing, 73% Faster', desc: 'A workflow that connects 5 systems and removes repeat keying, cutting the manual steps in a claim from 23 to 6 while keeping each decision visible and auditable.', result: 'Claims Time down 73%'},
      {tag: 'Manufacturing · Nationwide', title: 'Daily Automated Inventory Reports', desc: 'A scheduled job pulls stock data from 8 systems, builds one consolidated report and emails it to executives every morning, replacing a spreadsheet exercise someone used to do by hand.', result: '40 hours saved per month'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'ทำเอกสารสินเชื่ออัตโนมัติ ลดเวลาประมวลผล 93%', desc: 'RPA ร่วมกับ AI OCR อ่านเอกสารสินเชื่อที่เข้ามา ตรวจข้อมูลตามกฎของธนาคาร แล้วส่งข้อมูลที่สะอาดไปยังระบบหลัก พนักงานจึงดูเฉพาะเคสที่ผิดปกติ ไม่ต้องนั่งคีย์ทุกไฟล์', result: 'เวลาประมวลผลลด 93%'},
      {tag: 'Insurance · กรุงเทพฯ', title: 'ประมวลผลเคลมอัตโนมัติ ลดเวลา 73%', desc: 'เวิร์กโฟลว์ที่เชื่อม 5 ระบบเข้าด้วยกันและตัดการคีย์ซ้ำ ลดขั้นตอนที่ทำด้วยมือในแต่ละเคลมจาก 23 เหลือ 6 โดยที่ยังเห็นและตรวจย้อนหลังได้ว่าแต่ละการตัดสินใจเกิดขึ้นอย่างไร', result: 'เวลาจัดการเคลมลด 73%'},
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'รายงานสต็อกอัตโนมัติทุกวัน', desc: 'งานที่ตั้งเวลาไว้จะดึงข้อมูลสต็อกจาก 8 ระบบ รวมเป็นรายงานฉบับเดียว แล้วส่งอีเมลให้ผู้บริหารทุกเช้า แทนงานสเปรดชีตที่เมื่อก่อนมีคนทำด้วยมือ', result: 'ประหยัด 40 ชั่วโมง/เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Can every process be automated?', a: 'No, and we will tell you which ones should not be. The best candidates are rule-based, repeated often, high in volume and already digital. Work that depends on judgement, negotiation or creativity still needs a person, though automation can prepare the information for them.'},
      {q: 'Do we need to replace our old systems?', a: 'Usually not. RPA works through the screens of your existing software, so it suits older systems with no API. Where a system does expose an API or database access, we connect to it directly, which is faster and more stable than driving a screen.'},
      {q: 'What happens if the automation fails?', a: 'We plan for failure from the start. Every automation has error handling and a fallback path, an immediate alert to the right person, and a full log so the cause can be found quickly. Items that could not be processed wait in a queue instead of being lost.'},
      {q: 'How is automation maintained?', a: 'Automations depend on the systems they touch, so they need looking after. Our maintenance service covers monitoring, fixes when a source system changes its screen or API, and regular tuning as your process evolves.'},
      {q: 'How do we know which task to automate first?', a: 'We score each candidate on volume, how rule-based it is, error cost and build effort. The sweet spot is a task done often, by several people, with clear rules. Starting there gives a visible win and funds the harder projects.'},
      {q: 'How long does an automation project take?', a: 'It depends on how many systems are involved and how clean the process is. A single workflow between two tools can be small, while document processing across several departments is larger. After the discovery workshop we give you a scoped estimate with the assumptions written out.'},
      {q: 'Will automation replace our staff?', a: 'Our aim is to remove the repetitive parts of the job, not the people. Teams usually move that time into checking exceptions, serving customers and improving the process itself, which are the tasks software handles poorly.'}
    ] : [
      {q: 'ทำให้ทุกขั้นตอนเป็นอัตโนมัติได้ไหม?', a: 'ไม่ได้ทั้งหมด และเราจะบอกตรงๆ ด้วยว่างานไหนไม่ควรทำ งานที่เหมาะคือที่มีกฎชัดเจน ทำบ่อย ปริมาณมาก และข้อมูลอยู่ในรูปดิจิทัลแล้ว ส่วนงานที่ต้องใช้วิจารณญาณ การเจรจา หรือความคิดสร้างสรรค์ ยังต้องใช้คน แต่ระบบช่วยเตรียมข้อมูลให้คนได้'},
      {q: 'ต้องเปลี่ยนระบบเก่าไหม?', a: 'ส่วนใหญ่ไม่ต้อง RPA ทำงานผ่านหน้าจอของซอฟต์แวร์ที่คุณใช้อยู่ จึงเหมาะกับระบบเก่าที่ไม่มี API ถ้าระบบไหนมี API หรือให้เข้าถึงฐานข้อมูลได้ เราจะเชื่อมตรงเลย ซึ่งเร็วและเสถียรกว่าการสั่งงานผ่านหน้าจอ'},
      {q: 'ถ้าระบบอัตโนมัติผิดพลาดทำอย่างไร?', a: 'เราวางแผนเรื่องนี้ตั้งแต่แรก ทุกระบบมีการจัดการข้อผิดพลาดและทางสำรอง แจ้งคนที่เกี่ยวข้องทันที และเก็บ Log ครบเพื่อหาสาเหตุได้เร็ว รายการที่ประมวลผลไม่ได้จะรออยู่ในคิว ไม่หายไปไหน'},
      {q: 'ดูแลรักษาระบบอัตโนมัติอย่างไร?', a: 'ระบบอัตโนมัติพึ่งพาระบบที่มันไปแตะอยู่ จึงต้องมีคนดูแล บริการดูแลรักษาของเรารวมการติดตามระบบ การแก้ไขเมื่อระบบต้นทางเปลี่ยนหน้าจอหรือ API และการปรับจูนเมื่อขั้นตอนงานของคุณเปลี่ยนไป'},
      {q: 'จะรู้ได้อย่างไรว่าควรเริ่มทำงานไหนก่อน?', a: 'เราให้คะแนนแต่ละงานจากปริมาณ ความชัดของกฎ ความเสียหายเมื่อพลาด และแรงที่ต้องใช้สร้าง จุดที่เหมาะจะเริ่มคืองานที่ทำบ่อย มีหลายคนทำ และกฎชัด เริ่มตรงนั้นแล้วเห็นผลเร็ว และช่วยหาทุนไปทำโปรเจกต์ที่ยากกว่าได้'},
      {q: 'โปรเจกต์ระบบอัตโนมัติใช้เวลานานแค่ไหน?', a: 'ขึ้นอยู่กับจำนวนระบบที่เกี่ยวข้องและความเป็นระเบียบของขั้นตอนงาน เวิร์กโฟลว์เดียวระหว่างสองเครื่องมืออาจเป็นงานเล็ก ส่วนการอ่านเอกสารข้ามหลายแผนกจะใหญ่กว่า หลังเวิร์กช็อปแรกเราจะส่งประเมินขอบเขตพร้อมเงื่อนไขที่ใช้ประเมินให้ดู'},
      {q: 'ระบบอัตโนมัติจะมาแทนพนักงานไหม?', a: 'เป้าหมายของเราคือเอาส่วนที่ซ้ำๆ ของงานออกไป ไม่ใช่เอาคนออก ปกติทีมจะเอาเวลานั้นไปตรวจเคสพิเศษ ดูแลลูกค้า และปรับปรุงขั้นตอนงานเอง ซึ่งเป็นงานที่ซอฟต์แวร์ทำได้ไม่ดี'}
    ]
  const related     = isEN ? [
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'ERP & CRM', href: '/services/erp-crm'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ] : [
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'ERP & CRM', href: '/services/erp-crm'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Backend & API', href: '/services/backend-api'}
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
      heroImg="/images/services/automation/hero.jpg"
      whyImg="/images/services/automation/why1.jpg"
      whyImg2="/images/services/automation/why2.jpg"
      featureImg="/images/services/automation/feature.jpg"
      processImg="/images/services/automation/process.jpg"
    />
  )
}
