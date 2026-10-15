import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Digital Transformation Consulting in Bangkok | Haliviq'
    : 'ที่ปรึกษา Digital Transformation กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Digital transformation for Thai businesses: maturity assessment, 1-3 year roadmap, process redesign, and change management delivered by one team that also builds.'
    : 'Haliviq ช่วยองค์กรไทยทำ Digital Transformation ตั้งแต่ประเมินความพร้อม วางแผนระยะ 1-3 ปี ปรับขั้นตอนทำงาน ไปจนถึงลงมือสร้างระบบและบริหารการเปลี่ยนแปลงในทีมเดียว'
  const url = `https://www.haliviq.com/${params.lang}/services/digital-transformation`
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

  const badge    = isEN ? 'Strategy / Digital Transformation'  : 'กลยุทธ์ / Digital Transformation'
  const title    = isEN ? 'Transform Your Business'  : 'ปรับธุรกิจสู่'
  const subtitle = isEN ? 'Into the Digital Age'    : 'ยุคดิจิทัลอย่างมีกลยุทธ์'
  const heroDesc = isEN ? 'Digital transformation should leave you with working software and faster processes, not a thick report. We begin by finding out how work actually flows through your company today, choose the few changes that will matter most, and build the first one while the plan is still fresh. Strategy, design, and engineering sit in one team, so the roadmap we draw is the roadmap we can deliver. Whether you run an SME in Bangkok or an enterprise with branches across Thailand, we size the programme to what your people can absorb.'  : 'Digital Transformation ควรจบด้วยซอฟต์แวร์ที่ใช้ได้จริงและขั้นตอนที่เร็วขึ้น ไม่ใช่รายงานเล่มหนา เราเริ่มจากดูว่างานในบริษัทคุณไหลอย่างไรอยู่ตอนนี้ เลือกการเปลี่ยนแปลงไม่กี่เรื่องที่สำคัญที่สุด แล้วลงมือสร้างเรื่องแรกตอนที่แผนยังสดอยู่ ทีมกลยุทธ์ ดีไซน์ และวิศวกรรมอยู่ในทีมเดียวกัน แผนที่เราวาดจึงเป็นแผนที่เราทำส่งมอบได้จริง ไม่ว่าคุณจะเป็น SME ในกรุงเทพฯ หรือองค์กรที่มีสาขาทั่วประเทศ เราปรับขนาดโปรแกรมให้พอดีกับที่คนของคุณรับไหว'
  const whyTitle = isEN ? 'Why businesses that resist change fall behind'    : 'ทำไมธุรกิจที่ไม่ยอมเปลี่ยนถึงค่อยๆ ตามหลัง'
  const whyDesc  = isEN ? 'Companies that run on manual hand-offs and gut feeling lose ground a little every day: slower quotes, longer queues, and decisions made from last month’s numbers. Customers now expect fast, easy service that remembers who they are, while competitors use data and AI to decide in hours instead of weeks. The gap rarely shows up as one dramatic loss. It shows up as customers who quietly go elsewhere.'  : 'บริษัทที่ยังทำงานด้วยการส่งต่อด้วยมือและความรู้สึก จะเสียเปรียบไปทีละนิดทุกวัน ใบเสนอราคาช้ากว่า คิวยาวกว่า และต้องตัดสินใจจากตัวเลขของเดือนก่อน ลูกค้าตอนนี้คาดหวังบริการที่เร็ว ง่าย และจำได้ว่าเขาเป็นใคร ขณะที่คู่แข่งใช้ข้อมูลและ AI ตัดสินใจกันเป็นชั่วโมงแทนที่จะเป็นสัปดาห์ ช่องว่างนี้ไม่ค่อยโผล่มาเป็นความเสียหายก้อนใหญ่ แต่โผล่มาเป็นลูกค้าที่เงียบๆ ย้ายไปที่อื่น'
  const ctaTitle = isEN ? 'Ready to transform your business?'    : 'พร้อมเริ่มปรับธุรกิจของคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Every transformation starts with a conversation. Tell us where work gets stuck, and we will tell you honestly what is worth changing first. The first call is free and carries no commitment.'   : 'ทุกการเปลี่ยนแปลงเริ่มจากการคุยกัน เล่าให้เราฟังว่างานติดตรงไหน แล้วเราจะบอกตามตรงว่าอะไรควรเปลี่ยนก่อน คุยครั้งแรกไม่มีค่าใช้จ่ายและไม่มีข้อผูกมัด'
  const overviewText = isEN
    ? "We help organisations replace outdated processes and systems with digital products that people actually use. A typical programme starts with workshops and interviews to understand current work, produces a capability roadmap and a redesigned process, and then moves straight into building. Product thinkers and engineers work side by side, so ideas are tested as working software instead of staying on slides. Training and change management run from the first week, because a new system only pays off once the people who use it are comfortable with it. If you are not sure whether you need a roadmap, a pilot, or just one well-built tool, the first conversation is meant to answer that."
    : 'เราช่วยองค์กรเปลี่ยนขั้นตอนและระบบเก่าที่ล้าสมัยให้เป็นผลิตภัณฑ์ดิจิทัลที่คนใช้งานจริง โดยปกติเราเริ่มจาก Workshop และการสัมภาษณ์เพื่อเข้าใจวิธีทำงานตอนนี้ แล้วออกมาเป็นแผนพัฒนาขีดความสามารถกับขั้นตอนทำงานแบบใหม่ จากนั้นก็ลงมือสร้างต่อทันที คนที่คิดเรื่องผลิตภัณฑ์กับวิศวกรทำงานเคียงกัน ไอเดียจึงถูกทดสอบเป็นซอฟต์แวร์ที่ใช้ได้จริง ไม่ได้ค้างอยู่บนสไลด์ การอบรมและการบริหารการเปลี่ยนแปลงเดินไปด้วยกันตั้งแต่สัปดาห์แรก เพราะระบบใหม่จะคุ้มก็ต่อเมื่อคนที่ใช้รู้สึกคล่อง ถ้ายังไม่แน่ใจว่าตอนนี้ต้องการแผนระยะยาว โครงการนำร่อง หรือแค่เครื่องมือดีๆ สักตัว การคุยครั้งแรกมีไว้เพื่อตอบเรื่องนี้'

  const heroBullets = isEN ? [
      'Digital maturity assessment across six dimensions, with the biggest gaps ranked',
      'A 1-3 year digital roadmap with Quick Wins you can see in the first weeks',
      'Process, technology, and culture changed together, not one at a time',
      'KPIs agreed up front and reported on a regular rhythm',
      'Workshops and training for leaders, managers, and the people on the front line',
      'Documentation and pairing so your team can keep the work going without us',
    ] : [
      'ประเมินความพร้อมดิจิทัลใน 6 ด้าน พร้อมจัดอันดับช่องว่างที่ใหญ่ที่สุด',
      'วางแผนดิจิทัลระยะ 1-3 ปี พร้อมงานที่เห็นผลเร็วภายในไม่กี่สัปดาห์แรก',
      'ปรับขั้นตอนทำงาน เทคโนโลยี และวัฒนธรรมองค์กรไปพร้อมกัน ไม่ทำทีละอย่าง',
      'ตกลง KPI กันตั้งแต่ต้น และรายงานความคืบหน้าเป็นจังหวะสม่ำเสมอ',
      'จัด Workshop และอบรมให้ผู้บริหาร ผู้จัดการ และพนักงานหน้างาน',
      'เขียนเอกสารและทำงานคู่กับทีมคุณ เพื่อให้ทำต่อได้เองโดยไม่ต้องมีเรา',
    ]
  const whyPoints   = isEN ? [
      '70% of DX initiatives fail due to unclear strategy and poor change management. We plan for both from the first week so you can avoid those traps.',
      'Data-driven organisations grow 23x faster than competitors, because they see problems and chances earlier.',
      'The cost of delay is higher than it looks: every month of inaction hands competitors a little more ground.',
      'Good transformation starts with people before technology, since tools only work when teams agree to use them.',
      'Phased delivery outperforms big-bang change, so we begin with high-impact, low-risk initiatives and build confidence from there.',
    ] : [
      '70% ของโครงการเปลี่ยนผ่านดิจิทัลล้มเหลว เพราะกลยุทธ์ไม่ชัดและบริหารการเปลี่ยนแปลงไม่ดี เราวางแผนทั้งสองเรื่องตั้งแต่สัปดาห์แรก คุณจะได้หลบกับดักเหล่านี้',
      'องค์กรที่ใช้ข้อมูลนำทางเติบโตเร็วกว่าคู่แข่ง 23 เท่า เพราะเห็นปัญหาและโอกาสเร็วกว่า',
      'การรอมีต้นทุนมากกว่าที่เห็น ทุกเดือนที่ไม่ลงมือทำ คู่แข่งก็ได้เปรียบเพิ่มขึ้นอีกนิด',
      'การเปลี่ยนแปลงที่ดีเริ่มจากคนก่อนเทคโนโลยี เพราะเครื่องมือจะใช้ได้ก็ต่อเมื่อทีมยอมใช้',
      'ทำทีละระยะได้ผลดีกว่าเปลี่ยนทั้งหมดในครั้งเดียว เราจึงเริ่มจากโครงการที่ผลสูงและเสี่ยงต่ำ แล้วสร้างความมั่นใจต่อจากนั้น',
    ]
  const outcomes    = isEN ? [
      {stat: '3x', label: 'Operational Efficiency', desc: 'Average across all client segments'},
      {stat: '60%', label: 'Process Cost Reduction', desc: 'By automating manual work'},
      {stat: '8 weeks', label: 'First Quick Win', desc: 'Counted from project kick-off'},
      {stat: '95%', label: 'Client Referral Rate', desc: 'Net Promoter Score'}
    ] : [
      {stat: '3x', label: 'ประสิทธิภาพการทำงาน', desc: 'เฉลี่ยทุกกลุ่มลูกค้า'},
      {stat: '60%', label: 'ลดต้นทุนขั้นตอนทำงาน', desc: 'ด้วยการทำงานมือให้เป็นอัตโนมัติ'},
      {stat: '8 สัปดาห์', label: 'งานที่เห็นผลเร็วชิ้นแรก', desc: 'นับจากวันเริ่มโปรเจกต์'},
      {stat: '95%', label: 'ลูกค้าแนะนำต่อ', desc: 'Net Promoter Score'}
    ]
  const features    = isEN ? [
      {icon: 'ti-map', title: 'Digital Maturity Assessment', desc: 'We score your readiness across six dimensions through interviews, document review, and a look at your current tools. You receive a clear map of where you are strong, where you are exposed, and which gaps cost the most.'},
      {icon: 'ti-road', title: 'Digital Roadmap & Strategy', desc: 'A 1-3 year roadmap with milestones, owners, and rough investment per phase, ranked by impact against effort. It is written so executives can approve it and delivery teams can start from it.'},
      {icon: 'ti-settings-2', title: 'Process Redesign & Automation', desc: 'We trace how work moves today, remove the steps that exist only out of habit, and automate what is left where it pays off. Typical targets are approvals, document checks, hand-offs between departments, and reporting.'},
      {icon: 'ti-database', title: 'Data Strategy & Analytics', desc: 'A plan for what data you collect, where it is stored, who can see it, and how it turns into dashboards and, where useful, AI and machine-learning models. We account for PDPA from the start.'},
      {icon: 'ti-users', title: 'Change Management', desc: 'Stakeholder mapping, clear messages, and hands-on training that run next to every technical rollout. We find the people who will resist and the people who will champion, and plan for both.'},
      {icon: 'ti-cloud', title: 'Technology Modernization', desc: 'We assess your current stack and propose upgrades in a sensible order: cloud migration, retiring legacy systems, and replacing brittle integrations with APIs. We aim for a stack you can keep changing, not a one-off rebuild.'}
    ] : [
      {icon: 'ti-map', title: 'Digital Maturity Assessment', desc: 'เราให้คะแนนความพร้อมขององค์กรใน 6 ด้าน จากการสัมภาษณ์ ดูเอกสาร และตรวจเครื่องมือที่ใช้อยู่ คุณจะได้แผนที่ชัดเจนว่าตรงไหนแข็งแรง ตรงไหนเสี่ยง และช่องว่างไหนทำให้เสียเงินมากที่สุด'},
      {icon: 'ti-road', title: 'Digital Roadmap & Strategy', desc: 'แผนระยะ 1-3 ปีที่มี Milestone ผู้รับผิดชอบ และประมาณการลงทุนคร่าวๆ ของแต่ละระยะ จัดลำดับตามผลที่ได้เทียบกับแรงที่ใช้ เขียนให้ผู้บริหารอนุมัติได้และทีมส่งมอบเริ่มลงมือต่อได้ทันที'},
      {icon: 'ti-settings-2', title: 'Process Redesign & Automation', desc: 'เราไล่ดูว่างานเดินอย่างไรตอนนี้ ตัดขั้นตอนที่มีอยู่แค่เพราะความเคยชินออก แล้วทำส่วนที่เหลือให้อัตโนมัติเฉพาะจุดที่คุ้ม เป้าหมายที่พบบ่อยคือการอนุมัติ การตรวจเอกสาร การส่งต่องานข้ามแผนก และการทำรายงาน'},
      {icon: 'ti-database', title: 'Data Strategy & Analytics', desc: 'แผนว่าจะเก็บข้อมูลอะไร เก็บที่ไหน ใครเปิดดูได้ และแปลงเป็น Dashboard รวมถึง AI และ Machine Learning ในจุดที่มีประโยชน์อย่างไร เราคิดเรื่อง PDPA ตั้งแต่ต้น'},
      {icon: 'ti-users', title: 'Change Management', desc: 'วิเคราะห์ผู้เกี่ยวข้อง สื่อสารให้ชัด และอบรมแบบลงมือทำ ควบคู่ไปกับทุกการเปิดใช้งานทางเทคนิค เราหาให้พบว่าใครน่าจะต่อต้านและใครน่าจะเป็นตัวช่วย แล้ววางแผนรับมือทั้งสองฝั่ง'},
      {icon: 'ti-cloud', title: 'Technology Modernization', desc: 'เราประเมิน Tech Stack ที่ใช้อยู่ และเสนอลำดับการอัปเกรดที่สมเหตุสมผล ทั้งการย้ายขึ้น Cloud การเลิกใช้ระบบเก่า และการเปลี่ยนการเชื่อมต่อที่เปราะบางมาใช้ API เป้าหมายคือ Stack ที่ปรับเปลี่ยนต่อได้เรื่อยๆ ไม่ใช่การสร้างใหม่ครั้งเดียวจบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Digital Audit & Discovery', desc: 'We interview stakeholders at every level, walk through real processes, and review the technology you use. You get an honest picture of how work flows and where it gets stuck.'},
      {no: '02', title: 'Strategy & Roadmap Workshop', desc: 'A working session with leadership to agree a vision, priorities, and Quick Wins. We leave with a draft roadmap that the room has already debated, not one handed over afterwards.'},
      {no: '03', title: 'Pilot & Prove', desc: 'We pick initiatives with high impact and low risk, and run them as pilots with a small group of users. Value is shown with real numbers before any large investment is made.'},
      {no: '04', title: 'Scale & Integrate', desc: 'Pilots that worked roll out across the organisation, and the systems involved are connected so they share data. Rollout is staged to protect day-to-day operations.'},
      {no: '05', title: 'Measure & Optimize', desc: 'We track the agreed KPIs, review results every quarter, and adjust the roadmap using real data. Initiatives that underperform are changed or stopped.'},
      {no: '06', title: 'Sustain & Evolve', desc: 'Knowledge moves to your internal teams through documentation, training, and pairing, and we help set up governance so the organisation can keep improving by itself.'}
    ] : [
      {no: '01', title: 'Digital Audit & Discovery', desc: 'เราสัมภาษณ์ผู้เกี่ยวข้องทุกระดับ ลองไล่ดูขั้นตอนทำงานจริง และตรวจเทคโนโลยีที่ใช้อยู่ คุณจะได้ภาพที่ตรงไปตรงมาว่างานไหลอย่างไร และไปติดอยู่ตรงไหน'},
      {no: '02', title: 'Strategy & Roadmap Workshop', desc: 'จัด Workshop ทำงานร่วมกับทีมผู้บริหารเพื่อตกลงวิสัยทัศน์ ลำดับความสำคัญ และงานที่เห็นผลเร็ว เราจะออกจากห้องพร้อมร่าง Roadmap ที่ทุกคนในห้องช่วยกันถกมาแล้ว ไม่ใช่ส่งให้ทีหลัง'},
      {no: '03', title: 'Pilot & Prove', desc: 'เราเลือกโครงการที่ผลสูงและเสี่ยงต่ำ แล้วทดลองกับผู้ใช้กลุ่มเล็กก่อน เพื่อพิสูจน์คุณค่าด้วยตัวเลขจริงก่อนลงทุนก้อนใหญ่'},
      {no: '04', title: 'Scale & Integrate', desc: 'โครงการนำร่องที่ได้ผลจะขยายไปทั่วองค์กร และเชื่อมระบบที่เกี่ยวข้องให้ใช้ข้อมูลร่วมกัน การเปิดใช้แบ่งเป็นช่วงเพื่อไม่ให้กระทบงานประจำวัน'},
      {no: '05', title: 'Measure & Optimize', desc: 'เราติดตาม KPI ที่ตกลงกันไว้ ทบทวนผลทุกไตรมาส และปรับ Roadmap ตามข้อมูลจริง โครงการที่ผลไม่ดีจะถูกปรับหรือหยุด'},
      {no: '06', title: 'Sustain & Evolve', desc: 'ความรู้ถูกถ่ายทอดให้ทีมภายในผ่านเอกสาร การอบรม และการทำงานคู่กัน และเราช่วยวางแนวทางกำกับดูแล เพื่อให้องค์กรพัฒนาต่อได้เอง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Loan Approval from 7 Days to 4 Hours', desc: 'AI-based OCR now reads and verifies loan documents automatically, cutting manual work by 80%.', result: 'Processing Time down 93%'},
      {tag: 'Retail · Nationwide', title: 'Unified Commerce connecting 500 branches', desc: 'One source of truth for inventory, customer data, and orders across every branch and channel.', result: 'Revenue up 2.4× in 12 months'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Digital Patient Journey', desc: 'Fully paperless, from booking the appointment through to billing.', result: 'No-show Rate down 40%'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'ลดเวลาอนุมัติสินเชื่อจาก 7 วันเหลือ 4 ชั่วโมง', desc: 'ใช้ AI OCR อ่านและตรวจเอกสารสินเชื่ออัตโนมัติ ลดงานมือ 80%', result: 'เวลาดำเนินการลดลง 93%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'ระบบ Unified Commerce เชื่อม 500 สาขา', desc: 'แหล่งข้อมูลกลางเดียวสำหรับสินค้าคงคลัง ข้อมูลลูกค้า และคำสั่งซื้อ ครอบคลุมทุกสาขาและทุกช่องทาง', result: 'รายได้เพิ่ม 2.4× ใน 12 เดือน'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Digital Patient Journey ตั้งแต่ต้นจนจบ', desc: 'เปลี่ยนจากเอกสารกระดาษเป็นดิจิทัลทั้งหมด ตั้งแต่นัดหมายจนถึงชำระเงิน', result: 'ผู้ไม่มาตามนัดลดลง 40%'}
    ]
  const faqs        = isEN ? [
      {q: 'How long does it take?', a: 'We draw up 1-3 year roadmaps, but the first Quick Wins are delivered within 8-12 weeks, so you see value long before the plan ends.'},
      {q: 'Do we need to change everything at once?', a: 'No. We recommend phasing the work and starting with the initiatives that have the highest impact and lowest risk. Later phases build on what has already proven itself.'},
      {q: 'Do we need an internal IT team?', a: 'Not necessarily. We work with a small IT team or none at all, and we transfer knowledge as we go so that your staff can run what we build.'},
      {q: 'Do you work with SMEs and enterprises?', a: 'Yes. We work with SMEs at the start of their digital journey and with enterprises modernising legacy systems, and we scale the programme to suit each.'},
      {q: 'What does the first conversation cover?', a: 'We ask what is slowing the business down, which systems and spreadsheets are involved, and what a good result would look like for you. You leave with an honest view of whether you need an assessment, a pilot, or a single tool.'},
      {q: 'How do you measure success?', a: 'We agree on a handful of KPIs before starting, such as processing time, cost per transaction, error rate, or customer wait time. We record a baseline first and report against it regularly.'}
    ] : [
      {q: 'ใช้เวลานานแค่ไหน?', a: 'เราวางแผนระยะ 1-3 ปี แต่งานที่เห็นผลเร็วชิ้นแรกส่งมอบภายใน 8-12 สัปดาห์ คุณจะเห็นผลก่อนแผนจะจบอีก'},
      {q: 'ต้องเปลี่ยนระบบทั้งหมดพร้อมกันไหม?', a: 'ไม่ต้อง เราแนะนำให้ทำทีละระยะ เริ่มจากโครงการที่ผลสูงและเสี่ยงต่ำก่อน ระยะต่อไปค่อยต่อยอดจากสิ่งที่พิสูจน์แล้ว'},
      {q: 'ต้องมีทีม IT ไหม?', a: 'ไม่จำเป็น เราทำงานกับทีม IT ขนาดเล็กหรือไม่มีเลยก็ได้ และถ่ายทอดความรู้ไปเรื่อยๆ ระหว่างทำงาน ให้พนักงานของคุณดูแลสิ่งที่เราสร้างได้เอง'},
      {q: 'รับทั้ง SME และ Enterprise ไหม?', a: 'รับทั้งสองแบบ ทั้ง SME ที่เพิ่งเริ่มเดินทางดิจิทัล และ Enterprise ที่อยากปรับระบบเก่าให้ทันสมัย เราปรับขนาดโปรแกรมให้เหมาะกับแต่ละที่'},
      {q: 'การคุยครั้งแรกคุยเรื่องอะไรบ้าง?', a: 'เราถามว่าอะไรทำให้ธุรกิจช้าลง มีระบบและ Spreadsheet อะไรเกี่ยวข้อง และผลลัพธ์ที่ดีสำหรับคุณหน้าตาเป็นอย่างไร คุณจะได้ความเห็นตรงๆ ว่าควรเริ่มจากการประเมิน โครงการนำร่อง หรือเครื่องมือตัวเดียว'},
      {q: 'วัดความสำเร็จอย่างไร?', a: 'เราตกลง KPI ไม่กี่ตัวก่อนเริ่ม เช่น เวลาดำเนินการ ต้นทุนต่อรายการ อัตราความผิดพลาด หรือเวลาที่ลูกค้ารอ เราบันทึกค่าตั้งต้นก่อน แล้วรายงานเทียบกับค่านั้นสม่ำเสมอ'}
    ]
  const related     = isEN ? [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'ERP & CRM', href: '/services/erp-crm'}
    ] : [
      {label: 'วิจัยผู้ใช้งาน', href: '/services/user-research'},
      {label: 'ข้อมูลและการวิเคราะห์', href: '/services/data-analytics'},
      {label: 'กลยุทธ์การเติบโต', href: '/services/growth-strategy'},
      {label: 'ระบบ ERP / CRM', href: '/services/erp-crm'}
    ]

  const roadmapLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'assess --current-state' : 'assess --current-state'}</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '6 dimensions scanned · 14 gaps found' : 'สแกน 6 ด้าน · พบช่องว่าง 14 จุด'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'roadmap --build --range 3y' : 'roadmap --build --range 3y'}</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '3 phases · 9 initiatives prioritised' : '3 ระยะ · จัดลำดับ 9 โครงการ'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'deploy --quick-win phase-1' : 'deploy --quick-win phase-1'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Live in production · week 8' : 'ใช้งานจริงแล้ว · สัปดาห์ที่ 8'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>roadmap.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {roadmapLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Maturity Score' : 'คะแนนความพร้อม'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20v-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '85%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '60%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '90%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'First win in 8 weeks' : 'ผลแรกใน 8 สัปดาห์'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-route', title: 'Strategy & Roadmapping', desc: 'We turn business goals into a prioritised digital roadmap: what to do first, what to leave for later, who owns each initiative, and how success will be measured. Every item ties back to an outcome such as shorter lead times or lower cost, never technology for its own sake.' },
    { icon: 'ti-settings-2', title: 'Process Redesign', desc: 'We map how a process runs today, remove steps that add no value, and simplify before anything is automated. That way the software speeds up a good process and does not lock in a bad one. Typical results are fewer approvals, less re-typing, and clearer ownership.' },
    { icon: 'ti-users', title: 'Change & Adoption', desc: 'Training plans, internal communication, and staged rollouts designed with the people who will use the new system. We identify champions in each team and stay close during the first weeks, because adoption is where most programmes quietly fail.' },
    { icon: 'ti-adjustments', title: 'Technology Selection', desc: 'We help you decide what to build, what to buy, and which vendor to pick, using clear criteria such as fit, cost over time, integration effort, and lock-in. The architecture we recommend stays flexible, so you can swap a component later without starting over.' },
  ] : [
    { icon: 'ti-route', title: 'Strategy & Roadmapping', desc: 'เราแปลงเป้าหมายธุรกิจเป็น Digital Roadmap ที่จัดลำดับแล้ว ว่าทำอะไรก่อน อะไรเก็บไว้ทีหลัง ใครรับผิดชอบแต่ละโครงการ และจะวัดความสำเร็จอย่างไร ทุกข้อผูกกับผลลัพธ์ เช่น เวลาทำงานที่สั้นลงหรือต้นทุนที่ลดลง ไม่ใช่ใช้เทคโนโลยีเพื่อเทคโนโลยี' },
    { icon: 'ti-settings-2', title: 'Process Redesign', desc: 'เราวาดแผนที่ว่าขั้นตอนทำงานเดินอย่างไรตอนนี้ ตัดขั้นตอนที่ไม่เพิ่มคุณค่า และทำให้เรียบง่ายก่อนจะทำอัตโนมัติ ซอฟต์แวร์จะได้ช่วยให้ขั้นตอนที่ดีเร็วขึ้น ไม่ใช่ตอกย้ำขั้นตอนที่ไม่ดี ผลที่พบบ่อยคือขั้นอนุมัติน้อยลง คีย์ซ้ำน้อยลง และเจ้าของงานชัดขึ้น' },
    { icon: 'ti-users', title: 'Change & Adoption', desc: 'แผนอบรม การสื่อสารภายใน และการเปิดใช้เป็นช่วงๆ ที่ออกแบบร่วมกับคนที่จะใช้ระบบใหม่ เราหาตัวแทนในแต่ละทีมและอยู่ใกล้ชิดช่วงสัปดาห์แรกๆ เพราะเรื่องนี้คือจุดที่โครงการส่วนใหญ่ล้มแบบเงียบๆ' },
    { icon: 'ti-adjustments', title: 'Technology Selection', desc: 'เราช่วยตัดสินใจว่าอะไรควรสร้างเอง อะไรควรซื้อ และควรเลือกผู้ให้บริการเจ้าไหน โดยดูเกณฑ์ที่ชัดเจน เช่น ความเหมาะสม ต้นทุนระยะยาว แรงที่ต้องใช้เชื่อมระบบ และการผูกติดผู้ให้บริการ โครงสร้างระบบที่เราแนะนำจะยืดหยุ่น สลับชิ้นส่วนทีหลังได้โดยไม่ต้องเริ่มใหม่' },
  ]

  const techStack = [
    { label: 'Agile', icon: 'ti-refresh' },
    { label: 'DevOps', icon: 'ti-infinity' },
    { label: isEN ? 'Cloud Platforms' : 'Cloud Platforms', icon: 'ti-cloud' },
    { label: 'Enterprise Architecture', icon: 'ti-building-skyscraper' },
    { label: 'API Management', icon: 'ti-api' },
    { label: 'Microservices', icon: 'ti-topology-star' },
    { label: 'Product Operating Model', icon: 'ti-layout-grid' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assessment', desc: 'Interviews and process walk-throughs to map where you are today and where the opportunities sit' },
    { no: '02', title: 'Strategy', desc: 'A shared vision, guiding principles, and priorities agreed with leadership' },
    { no: '03', title: 'Roadmap', desc: 'Phased initiatives, each with an owner, a budget range, and a measure of success' },
    { no: '04', title: 'Delivery', desc: 'Products and process changes built and shipped in short cycles' },
    { no: '05', title: 'Adoption', desc: 'Training, staged rollout, and support until the team is comfortable' },
    { no: '06', title: 'Optimize', desc: 'Outcomes measured against the baseline and the plan adjusted' },
  ] : [
    { no: '01', title: 'Assessment', desc: 'สัมภาษณ์และไล่ดูขั้นตอนทำงาน เพื่อวาดแผนที่ว่าตอนนี้อยู่ตรงไหน และโอกาสอยู่ที่ไหน' },
    { no: '02', title: 'Strategy', desc: 'ตกลงวิสัยทัศน์ หลักการ และลำดับความสำคัญร่วมกับผู้บริหาร' },
    { no: '03', title: 'Roadmap', desc: 'แบ่งโครงการเป็นระยะ แต่ละโครงการมีผู้รับผิดชอบ ช่วงงบประมาณ และตัวชี้วัดความสำเร็จ' },
    { no: '04', title: 'Delivery', desc: 'สร้างและส่งมอบผลิตภัณฑ์กับการเปลี่ยนขั้นตอนทำงานเป็นรอบสั้นๆ' },
    { no: '05', title: 'Adoption', desc: 'อบรม เปิดใช้เป็นช่วงๆ และดูแลจนทีมคล่อง' },
    { no: '06', title: 'Optimize', desc: 'วัดผลเทียบกับค่าตั้งต้น แล้วปรับแผนตามผลที่ได้' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What does a digital transformation engagement with Haliviq look like?', a: 'It is a practical modernisation programme that lines up technology, process, and people around outcomes that matter, not a slide deck. We combine strategy with delivery, and the same team plans the roadmap and builds the software. In practice that means interviews and a maturity assessment first, a workshop with leadership next, then one or two pilots running in production while the longer roadmap is refined.' },
    { q: 'How is Haliviq different from a large consulting firm?', a: 'We build what we recommend. Our strategy work draws on what our engineers and designers ship every week, so a recommendation arrives with working software and delivery dates, not as a handover for someone else to implement months later. You also work with the people doing the work, not only with a partner who fronts the pitch.' },
    { q: 'Where should we start with digital transformation?', a: 'Start with the outcome that matters most, then modernise only as much as it takes to reach it. We usually begin with a digital maturity assessment, choose one high-impact workflow, and deliver visible improvements within the first 8-12 weeks, instead of a multi-year plan with nothing to show early on.' },
    { q: 'Has Haliviq delivered transformation work for large enterprises?', a: 'Yes. We have delivered digital transformation programmes for banks, retailers, and healthcare providers across telecom, financial services, retail, and energy sectors, from loan-approval automation to unified commerce platforms connecting hundreds of branches.' },
    { q: 'How long does a transformation programme take?', a: 'We build 1-3 year roadmaps, but you should not wait three years to see value. Quick Wins are typically live in the first 8-12 weeks, and later phases scale what has already proven to work, rather than one big-bang rollout at the end.' },
    { q: 'How much does a digital transformation programme cost?', a: 'Cost depends on how many workflows are in scope, how deep the process redesign goes, and whether new systems must be built or existing ones modernised. We usually start with a fixed-price Digital Maturity Assessment, then quote each roadmap phase separately, so you invest step by step as value is proven, not everything upfront.' },
    { q: 'Do we need an internal IT or transformation team?', a: 'Not necessarily. We can work alongside a small internal team or with none at all. Knowledge transfer is built into every phase, through documentation, training sessions, and pairing with your staff, so your organisation can sustain and extend the work after handover.' },
    { q: 'What if our organisation resists change?', a: 'That is normal, and it is why change management is one of our four core capabilities rather than an afterthought. We run stakeholder alignment, clear communication, and hands-on training next to every technical rollout, because a system nobody adopts delivers no return, however well it was built.' },
    { q: 'What should we prepare before the first workshop?', a: 'A list of the processes that hurt most, a rough picture of your current systems, and the names of a few people who know the daily work. If you have last quarter’s numbers, such as processing times, error rates, or complaints, bring those too. You do not need a finished brief.' },
  ] : [
    { q: 'การทำงานร่วมกับ Haliviq ด้าน Digital Transformation เป็นอย่างไร?', a: 'เป็นโปรแกรมปรับปรุงระบบให้ทันสมัยที่ทำได้จริง จัดเทคโนโลยี ขั้นตอนทำงาน และคนให้มุ่งไปที่ผลลัพธ์ที่สำคัญ ไม่ใช่แค่สไลด์ เรารวมกลยุทธ์เข้ากับการลงมือทำ ทีมเดียวกันทั้งวางแผนและสร้างซอฟต์แวร์ ในทางปฏิบัติคือเริ่มจากสัมภาษณ์และประเมินความพร้อม ตามด้วย Workshop กับผู้บริหาร แล้วเดินโครงการนำร่องหนึ่งสองอันบนระบบจริง ระหว่างที่ Roadmap ระยะยาวถูกปรับให้ชัดขึ้น' },
    { q: 'Haliviq ต่างจากบริษัทที่ปรึกษาขนาดใหญ่อย่างไร?', a: 'เราสร้างสิ่งที่เราแนะนำ งานกลยุทธ์ของเราอิงจากสิ่งที่วิศวกรและดีไซเนอร์ส่งมอบจริงทุกสัปดาห์ ข้อเสนอจึงมาพร้อมซอฟต์แวร์ที่ใช้ได้และกำหนดส่งที่ชัดเจน ไม่ใช่ส่งต่อให้คนอื่นไปทำอีกหลายเดือนข้างหน้า และคุณจะได้ทำงานกับคนที่ลงมือทำจริง ไม่ใช่แค่ผู้บริหารที่มานำเสนอ' },
    { q: 'ควรเริ่ม Digital Transformation จากตรงไหน?', a: 'เริ่มจากผลลัพธ์ที่สำคัญที่สุดก่อน แล้วปรับระบบเท่าที่จำเป็นเพื่อไปถึงจุดนั้น ปกติเราเริ่มจากประเมินความพร้อมด้านดิจิทัล เลือกขั้นตอนงานที่ส่งผลสูงหนึ่งจุด และส่งมอบผลที่เห็นได้จริงภายใน 8-12 สัปดาห์แรก ไม่ใช่แผนหลายปีที่ช่วงแรกไม่มีอะไรให้ดู' },
    { q: 'Haliviq เคยทำงานเปลี่ยนผ่านให้องค์กรขนาดใหญ่ไหม?', a: 'เคย เราส่งมอบโปรแกรมเปลี่ยนผ่านดิจิทัลให้ธนาคาร ธุรกิจค้าปลีก และผู้ให้บริการด้านสุขภาพ ครอบคลุมธุรกิจโทรคมนาคม การเงิน ค้าปลีก และพลังงาน ตั้งแต่ระบบอนุมัติสินเชื่ออัตโนมัติ ไปจนถึงระบบ Unified Commerce ที่เชื่อมหลายร้อยสาขาเข้าด้วยกัน' },
    { q: 'โปรแกรมเปลี่ยนผ่านใช้เวลานานแค่ไหน?', a: 'เราวางแผนระยะ 1-3 ปี แต่คุณไม่ต้องรอสามปีกว่าจะเห็นผล งานที่เห็นผลเร็วมักขึ้นใช้งานจริงภายใน 8-12 สัปดาห์แรก ระยะถัดไปคือขยายสิ่งที่พิสูจน์แล้วว่าได้ผล ไม่ใช่เปลี่ยนทั้งหมดพร้อมกันครั้งเดียวตอนท้าย' },
    { q: 'โปรแกรม Digital Transformation มีค่าใช้จ่ายเท่าไหร่?', a: 'ค่าใช้จ่ายขึ้นอยู่กับจำนวนขั้นตอนงานในขอบเขต ความลึกของการออกแบบขั้นตอนใหม่ และว่าต้องสร้างระบบใหม่หรือปรับระบบเดิม ปกติเราเริ่มจากการประเมินความพร้อมดิจิทัลในราคาคงที่ก่อน แล้วเสนอราคาแต่ละระยะของแผนแยกกัน คุณจะลงทุนทีละขั้นตามผลที่พิสูจน์แล้ว ไม่ต้องจ่ายทั้งหมดล่วงหน้า' },
    { q: 'ต้องมีทีม IT หรือทีมเปลี่ยนผ่านภายในไหม?', a: 'ไม่จำเป็น เราทำงานเคียงข้างทีมภายในขนาดเล็ก หรือไม่มีทีมเลยก็ได้ และถ่ายทอดความรู้ทุกระยะ ทั้งเอกสาร การอบรม และการทำงานคู่กับพนักงานของคุณ องค์กรจะดูแลและต่อยอดเองได้หลังส่งมอบ' },
    { q: 'ถ้าคนในองค์กรไม่อยากเปลี่ยนล่ะ?', a: 'เป็นเรื่องปกติ และเป็นเหตุผลที่การบริหารการเปลี่ยนแปลงเป็นหนึ่งใน 4 ความสามารถหลักของเรา ไม่ใช่เรื่องรอง เราทำให้ผู้เกี่ยวข้องเห็นตรงกัน สื่อสารชัด และอบรมแบบลงมือทำควบคู่กับทุกการเปิดใช้ เพราะระบบที่ไม่มีใครใช้ก็ไม่ให้ผลตอบแทนอะไร ต่อให้สร้างมาดีแค่ไหน' },
    { q: 'ควรเตรียมอะไรก่อน Workshop ครั้งแรก?', a: 'รายการขั้นตอนที่เจ็บที่สุด ภาพรวมคร่าวๆ ของระบบที่ใช้อยู่ และชื่อคนที่รู้งานประจำวันจริงๆ สักสองสามคน ถ้ามีตัวเลขไตรมาสที่แล้ว เช่น เวลาดำเนินการ อัตราผิดพลาด หรือเรื่องร้องเรียน ก็เอามาด้วย ไม่ต้องมีโจทย์ที่เสร็จสมบูรณ์' },
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
          {isEN ? 'What we actually do on a transformation programme, described plainly, with what you get from each.' : 'สิ่งที่เราลงมือทำจริงในโปรแกรมเปลี่ยนผ่าน เล่าให้ฟังตรงๆ พร้อมบอกว่าคุณจะได้อะไรจากแต่ละเรื่อง'}
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
            {isEN ? 'Frameworks We Use' : 'แนวทางที่เราใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies & Frameworks' : 'เทคโนโลยีและแนวทางที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Operating models and architecture patterns we use where they fit the problem. We choose them for the job in front of us, not because they are fashionable this year.'
              : 'รูปแบบการทำงานและโครงสร้างระบบที่เราเลือกใช้ตามโจทย์ตรงหน้า ไม่ใช่เพราะกำลังเป็นกระแส'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
              >
                {t.label}
                <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} aria-hidden="true" />
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
              ? 'A clear path from the first assessment to change that lasts. We adjust it for each organisation, and we never hand over a template.'
              : 'เส้นทางที่ชัดเจนตั้งแต่ประเมินครั้งแรกไปจนถึงการเปลี่ยนแปลงที่อยู่ต่อได้ เราปรับตามแต่ละองค์กร ไม่ได้ส่งสูตรสำเร็จให้'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we run transformation programmes.' : 'คำตอบตรงๆ เรื่องวิธีที่เราทำ Digital Transformation'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </div>
    </section>

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
        <h2 className="t-display mb-5 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้เลยว่าคุณกำลังสร้างอะไรอยู่'}
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
          <a href="mailto:info@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            info@haliviq.com
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
      heroDark heroVisual="digital-transformation" heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/digital-transformation/why1.jpg"
      whyImg2="/images/services/digital-transformation/why2.jpg"
      featureImg="/images/services/digital-transformation/feature.jpg"
      processImg="/images/services/digital-transformation/process.jpg"
    />
  )
}
