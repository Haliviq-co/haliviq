import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  vault: { hex: '#FFEC6E', path: 'M0 0l11.955 24L24 0zm13.366 4.827h1.393v1.38h-1.393zm-2.77 5.569H9.22V8.993h1.389zm0-2.087H9.22V6.906h1.389zm0-2.086H9.22V4.819h1.389zm2.087 6.263h-1.377V11.08h1.388zm0-2.09h-1.377V8.993h1.388zm0-2.087h-1.377V6.906h1.388zm0-2.086h-1.377V4.819h1.388zm.683.683h1.393v1.389h-1.393zm0 3.475V8.993h1.389v1.388Z' },
  snyk: { hex: '#4C4A73', path: 'M17.097 13.344c.143-.37.06-2.117-.222-4.675l-.004-.04.904-2.431v-.05c0-1.06-1.374-3.9-2.186-5.41L15.192 0l-.84 5.854-.503.829-.125-.042c-.351-.118-1.042-.316-1.728-.316-.65 0-1.294.171-1.72.315l-.125.042-.504-.827L8.807 0l-.396.737c-.812 1.51-2.186 4.35-2.186 5.411v.05l.904 2.432-.004.039c-.283 2.558-.366 4.305-.222 4.674.13.332.642 1.041 1.072 1.605l-.619 5.724.617.442.576-5.329c.012.414.064 1.277.275 2.068l-.389 3.592L12 24l4.279-3.067.375-.268-.62-5.73c.428-.561.934-1.262 1.063-1.591zM15.59 2.298c.694 1.408 1.421 3.08 1.471 3.779l-.388 1.045c-.935-1.31-1.228-3.441-1.253-3.636zm-1.124 7.8c.84 0 .212.712.138.792h-1.587c.144-.18.69-.792 1.45-.792zm-.452 1.468a.178.178 0 0 1-.175.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.325 0v-.025h.511l-.008.007c.039.038.06.093.052.15zM12.39 19.29c.097.064.2.115.306.156-.168.19-.399.287-.697.287-.299 0-.53-.097-.697-.288.107-.04.21-.092.306-.156a.573.573 0 0 0 .391.114c.103 0 .255 0 .391-.113zm-2.62-7.724a.178.178 0 0 1-.174.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.326 0v-.025h.511l-.008.007c.039.038.06.093.052.15zm-.374-.676c-.074-.08-.702-.792.138-.792.759 0 1.305.612 1.45.792zM6.948 6.077c.05-.699.778-2.37 1.471-3.78l.185 1.29c-.07.48-.393 2.37-1.257 3.56zM9.473 18.09c-.373-1.02-.377-2.446-.377-2.507v-.097l-.06-.076c-.551-.683-1.477-1.9-1.616-2.257l-.005-.014c-.124-.43.1-2.997.268-4.513l.008-.066-.187-.502.07-.075c.476-.497.88-1.213 1.203-2.126L9 5.223l.118.82.807 1.326.22-.094c.009-.004.934-.4 1.851-.4H12v.44h-.004c-.812 0-1.669.36-1.677.363l-.571.246-.797-1.308c-.27.62-.585 1.137-.94 1.543l.129.347-.019.169c-.24 2.156-.348 4.044-.285 4.332.086.2.523.812 1 1.437l.748-.218 1.17-1.334.184 3.458c-.011.015-.28.393-.28.609 0 .235.344.541.685.786.005-.01.007-.02.013-.03.12-.212.275-.251.346-.087.04.092.028.369.028.369l.005.002v.328c-.013.027-.302.674-1.014.674-.275 0-.948-.089-1.248-.911zm2.536 2.409c-.527 0-1.297-.257-1.374-.952.029.001.057.003.086.003.06 0 .119-.003.177-.01.235.455.665.6 1.102.6.436 0 .865-.146 1.1-.6.059.007.119.01.18.01.029 0 .057-.002.085-.003-.076.695-.835.952-1.356.952zm2.956-5.09l-.061.077v.097c0 .06-.004 1.487-.377 2.507-.3.822-.973.91-1.248.91-.71 0-1.002-.658-1.014-.686V18l.005-.004s-.012-.276.028-.368c.07-.164.226-.126.346.088.006.009.009.02.013.03.34-.246.686-.552.686-.787 0-.216-.269-.593-.28-.61l.183-3.457 1.17 1.334 1.2.35c-.23.304-.463.6-.651.834zm-8.472-1.907c-.22-.563-.022-2.916.187-4.817l-.895-2.409v-.128c0-.312.095-.734.246-1.207-1.177.253-1.808.49-1.808.49v12.996l2.67 1.914.577-5.332c-.538-.718-.868-1.226-.977-1.507zm3.853-7.346c.446-.136 1.042-.27 1.65-.27.61 0 1.21.135 1.658.27l.276-.453.184-1.288s-1.288-.068-2.103-.068c-.759 0-1.467.026-2.125.07l.184 1.286zm7.623-1.217c.151.474.247.896.247 1.21v.127l-.895 2.409c.208 1.901.406 4.253.186 4.818-.109.279-.435.782-.968 1.493l.578 5.337 2.66-1.906V5.432s-.632-.24-1.808-.493Z' },
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

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Security / Cybersecurity'  : 'ความปลอดภัย / ความปลอดภัยไซเบอร์ (Cybersecurity)'
  const title    = isEN ? 'Secure by Design'  : 'ปลอดภัยตั้งแต่การออกแบบ'
  const subtitle = isEN ? 'Not by Accident'    : 'ไม่ใช่เรื่องบังเอิญ'
  const heroDesc = isEN ? 'Haliviq tests your applications, APIs and infrastructure the way an attacker would, then helps your team fix what we find and build the habits that stop the same problems returning. We run security assessments and penetration tests, design access control and secrets handling into your architecture, and prepare you for SOC 2, ISO 27001 and PDPA reviews, written up in plain language your developers and executives can both act on.'  : 'Haliviq ทดสอบแอป API และโครงสร้างพื้นฐานของคุณแบบที่ผู้โจมตีจะทำ แล้วช่วยทีมคุณแก้สิ่งที่เจอ และสร้างนิสัยการทำงานที่ไม่ให้ปัญหาเดิมกลับมาอีก เราตรวจประเมินความปลอดภัยและทดสอบเจาะระบบ ออกแบบการควบคุมสิทธิ์และการจัดการ Secret ไว้ในสถาปัตยกรรม และเตรียมความพร้อมสำหรับการตรวจ SOC 2, ISO 27001 และ PDPA โดยสรุปผลด้วยภาษาที่ทั้งนักพัฒนาและผู้บริหารอ่านแล้วลงมือทำต่อได้'
  const whyTitle = isEN ? 'Why a breach costs far more than prevention'    : 'ทำไมถูกโจมตีข้อมูลถึงแพงกว่าการป้องกันมาก'
  const whyDesc  = isEN ? 'When a security incident happens, the bill arrives in several places at once: systems offline, specialists on emergency rates, notifications to regulators and customers, and a loss of trust that can take years to win back. Most of that is avoidable. Fixing a weak login flow or an exposed storage bucket during design costs a few hours, while fixing it after a leak costs the quarter.'  : 'เมื่อเกิดเหตุด้านความปลอดภัย ค่าใช้จ่ายจะมาพร้อมกันหลายทาง ทั้งระบบหยุดทำงาน ค่าผู้เชี่ยวชาญเรทฉุกเฉิน การแจ้งหน่วยงานกำกับและลูกค้า และความเชื่อมั่นที่อาจใช้เวลาหลายปีกว่าจะกลับมา ส่วนใหญ่ป้องกันได้ ถ้าแก้ระบบล็อกอินที่หละหลวมหรือที่เก็บไฟล์ที่เปิดสาธารณะตั้งแต่ตอนออกแบบ ใช้เวลาไม่กี่ชั่วโมง แต่ถ้าแก้หลังข้อมูลรั่ว อาจต้องใช้ทั้งไตรมาส'
  const ctaTitle = isEN ? 'Ready to find out where you stand?'    : 'พร้อมรู้สถานะความปลอดภัยของคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free security posture review. We look at how your systems are actually set up and show you the real risks in order of priority, instead of handing over a generic checklist.'   : 'เริ่มจากให้เราตรวจสถานะความปลอดภัยให้ฟรี เราจะดูว่าระบบของคุณตั้งค่าไว้ยังไงจริงๆ แล้วชี้ความเสี่ยงที่เกิดขึ้นได้จริงเรียงตามความสำคัญ ไม่ใช่ยื่นเช็กลิสต์ทั่วไปให้'
  const overviewText = isEN
    ? 'We help organisations find and fix security weaknesses before attackers do, and we change how software is built so fewer weaknesses get in at all. The work covers architecture reviews, penetration testing, vulnerability management, identity and access design, and hands-on support for SOC 2, ISO 27001 and GDPR, alongside PDPA in Thailand. We treat these as engineering tasks that run through every sprint, not as an audit exercise once a year. Our clients are typically product teams in fintech, healthcare and e-commerce that handle customer data and need to show buyers and regulators that it is protected.'
    : 'เราช่วยองค์กรหาและแก้จุดอ่อนด้านความปลอดภัยก่อนที่ผู้ไม่หวังดีจะเจอ และปรับวิธีสร้างซอฟต์แวร์ให้จุดอ่อนเล็ดลอดเข้ามาน้อยลงตั้งแต่ต้น งานของเราครอบคลุมการรีวิวสถาปัตยกรรม ทดสอบเจาะระบบ (Penetration Testing) จัดการช่องโหว่ ออกแบบระบบยืนยันตัวตนและสิทธิ์เข้าถึง และช่วยเรื่อง SOC 2, ISO 27001 และ GDPR รวมถึง PDPA ในไทย เรามองทั้งหมดเป็นงานวิศวกรรมที่เดินไปพร้อมทุก Sprint ไม่ใช่การตรวจปีละครั้ง ลูกค้าของเราส่วนใหญ่เป็นทีมผลิตภัณฑ์ในสายฟินเทค สุขภาพ และ e-commerce ที่ดูแลข้อมูลลูกค้า และต้องแสดงให้คู่ค้าและหน่วยงานกำกับเห็นว่าข้อมูลได้รับการปกป้อง'

  const heroBullets = isEN ? [
      'Architecture reviews and risk assessments built around the threats that actually apply to you',
      'Hands-on penetration testing with reproduction steps and clear fix guidance',
      'Practical SOC 2, ISO 27001 and GDPR support, plus PDPA work in Thailand',
      'Incident response playbooks and rehearsals before you need them',
      'Security built into engineering from the first sprint',
    ] : [
      'รีวิวสถาปัตยกรรมและประเมินความเสี่ยงตามภัยคุกคามที่เกิดขึ้นกับคุณจริงๆ',
      'ทดสอบเจาะระบบแบบลงมือทำจริง พร้อมขั้นตอนทำซ้ำปัญหาและแนวทางแก้ไขที่ชัดเจน',
      'ช่วยเรื่อง SOC 2, ISO 27001 และ GDPR แบบนำไปใช้ได้จริง รวมถึงงาน PDPA ในไทย',
      'วางแผนรับมือเหตุ (Incident Response Playbook) และซ้อมก่อนเกิดเหตุจริง',
      'ฝังความปลอดภัยไว้ในงานวิศวกรรมตั้งแต่ Sprint แรก',
    ]
  const whyPoints   = isEN ? [
      'The average data breach costs organisations millions once downtime, legal work and reputational damage are counted together',
      'Zero trust and least-privilege access shrink the blast radius, so one stolen password does not open every system',
      'Frameworks like SOC 2 and ISO 27001 are increasingly asked for in procurement, and can decide whether you win an enterprise deal',
      'Dependency scanning catches most of the known vulnerabilities that attackers actually exploit, before the code ships',
      'A rehearsed incident plan turns a possible crisis into a contained event with clear owners and a clear timeline',
    ] : [
      'ค่าเสียหายเฉลี่ยจากข้อมูลรั่วไหลสูงถึงหลักล้าน เมื่อรวมระบบหยุด งานด้านกฎหมาย และความเสียหายต่อชื่อเสียงเข้าด้วยกัน',
      'Zero Trust และการให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น ช่วยจำกัดวงความเสียหาย รหัสผ่านที่ถูกขโมยหนึ่งตัวจึงไม่เปิดได้ทุกระบบ',
      'มาตรฐานอย่าง SOC 2 และ ISO 27001 ถูกขอในการจัดซื้อมากขึ้นเรื่อยๆ และอาจเป็นตัวตัดสินว่าจะปิดดีลกับองค์กรใหญ่ได้หรือไม่',
      'การสแกน Dependency จับช่องโหว่ที่รู้จักแล้วและถูกใช้โจมตีจริงได้เป็นส่วนใหญ่ ก่อนโค้ดจะขึ้นระบบ',
      'แผนรับมือเหตุที่ซ้อมไว้แล้ว ทำให้วิกฤตที่อาจเกิดกลายเป็นเรื่องที่ควบคุมได้ มีผู้รับผิดชอบและไทม์ไลน์ชัดเจน',
    ]
  const outcomes    = isEN ? [
      {stat: '0', label: 'Critical Incidents', desc: 'Across audited client systems'},
      {stat: '100%', label: 'SOC 2 Pass Rate', desc: 'On first audit attempt'},
      {stat: '<24h', label: 'Incident Response', desc: 'Time to containment'},
      {stat: '40+', label: 'Vulnerabilities Fixed', desc: 'Average per assessment'}
    ] : [
      {stat: '0', label: 'เหตุการณ์ระดับ Critical', desc: 'ในระบบของลูกค้าที่เราตรวจ'},
      {stat: '100%', label: 'อัตราผ่าน SOC 2', desc: 'ตั้งแต่การตรวจครั้งแรก'},
      {stat: '<24h', label: 'เวลารับมือเหตุ', desc: 'ถึงตอนควบคุมสถานการณ์ได้'},
      {stat: '40+', label: 'ช่องโหว่ที่แก้ไข', desc: 'เฉลี่ยต่อการตรวจประเมิน'}
    ]
  const features    = isEN ? [
      {icon: 'ti-shield-search', title: 'Security Assessments', desc: 'We review your architecture, data flows and cloud configuration, build a threat model for what you actually protect, and rank the risks by business impact, so you know what to fix this month and what can wait.'},
      {icon: 'ti-bug', title: 'Penetration Testing', desc: 'Manual testing of web apps, mobile apps, APIs and infrastructure, going beyond automated scanners. Every finding comes with steps to reproduce it and a concrete suggestion for the fix, and we retest after your team patches.'},
      {icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'We map your current controls to SOC 2, ISO 27001, GDPR and PDPA, find the gaps, and help you close them with working controls and evidence instead of a stack of policy documents nobody follows.'},
      {icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbooks that say who does what in the first hour, who to call, what to preserve and how to tell customers. We run a tabletop exercise so the first time your team uses the plan is not a real attack.'},
      {icon: 'ti-lock-access', title: 'Identity & Access', desc: 'Least-privilege IAM, single sign-on, multi-factor authentication and regular access reviews, designed into the architecture so former staff and forgotten service accounts do not keep their keys.'},
      {icon: 'ti-key', title: 'Secrets Management', desc: 'API keys, passwords and certificates move out of source code and chat messages into a vault, with rotation and audit logs. Dependency scanning in the build pipeline blocks known-vulnerable libraries before release.'}
    ] : [
      {icon: 'ti-shield-search', title: 'Security Assessments', desc: 'เรารีวิวสถาปัตยกรรม เส้นทางของข้อมูล และการตั้งค่า Cloud สร้าง Threat Model ของสิ่งที่คุณต้องปกป้องจริงๆ และจัดลำดับความเสี่ยงตามผลกระทบต่อธุรกิจ คุณจะรู้ว่าอะไรต้องแก้เดือนนี้ และอะไรรอได้'},
      {icon: 'ti-bug', title: 'Penetration Testing', desc: 'ทดสอบเว็บแอป แอปมือถือ API และโครงสร้างพื้นฐานด้วยมือ ไม่ได้พึ่งแค่เครื่องสแกนอัตโนมัติ ทุกช่องโหว่ที่เจอมีขั้นตอนทำซ้ำและข้อเสนอการแก้ที่ชัดเจน และเราทดสอบซ้ำหลังทีมคุณแพตช์แล้ว'},
      {icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'เราเทียบมาตรการที่คุณมีกับ SOC 2, ISO 27001, GDPR และ PDPA หาช่องว่าง แล้วช่วยปิดด้วยมาตรการที่ใช้งานได้จริงพร้อมหลักฐาน ไม่ใช่กองเอกสารนโยบายที่ไม่มีใครทำตาม'},
      {icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbook ที่บอกว่าชั่วโมงแรกใครทำอะไร โทรหาใคร ต้องเก็บหลักฐานอะไร และแจ้งลูกค้ายังไง เราจัดการซ้อมบนโต๊ะ (Tabletop Exercise) เพื่อให้ครั้งแรกที่ทีมใช้แผนนี้ไม่ใช่ตอนถูกโจมตีจริง'},
      {icon: 'ti-lock-access', title: 'Identity & Access', desc: 'IAM แบบให้สิทธิ์น้อยที่สุด Single Sign-on การยืนยันตัวตนหลายขั้น (MFA) และการทบทวนสิทธิ์เป็นระยะ ออกแบบไว้ในสถาปัตยกรรม พนักงานที่ออกไปแล้วหรือ Service Account ที่ถูกลืมจะได้ไม่ถือกุญแจต่อ'},
      {icon: 'ti-key', title: 'Secrets Management', desc: 'ย้าย API Key รหัสผ่าน และใบรับรองออกจากซอร์สโค้ดและข้อความแชต ไปไว้ใน Vault พร้อมการหมุนเวียนและ Audit Log การสแกน Dependency ใน Build Pipeline จะกันไลบรารีที่มีช่องโหว่ไม่ให้หลุดขึ้นระบบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Assess', desc: 'We inventory your assets, review the current setup and build a threat model, so we test what matters instead of everything equally.'},
      {no: '02', title: 'Plan', desc: 'We choose the controls and write a remediation roadmap with owners, effort estimates and deadlines your team can agree to.'},
      {no: '03', title: 'Implement', desc: 'We harden systems, fix the findings and put secure delivery practices such as code review, scanning and secrets handling into your pipeline.'},
      {no: '04', title: 'Monitor', desc: 'We set up detection, logging and alerts, and schedule regular reviews and retests so the picture stays current.'},
      {no: '05', title: 'Respond', desc: 'When something happens, we help contain it, preserve evidence, restore service and communicate with customers and regulators.'},
      {no: '06', title: 'Improve', desc: 'Each finding and incident feeds back into the software development lifecycle, so the same class of problem is caught earlier next time.'}
    ] : [
      {no: '01', title: 'Assess', desc: 'เราสำรวจทรัพย์สิน ดูการตั้งค่าที่เป็นอยู่ และสร้าง Threat Model เพื่อทดสอบสิ่งที่สำคัญ ไม่ใช่ทดสอบทุกอย่างเท่ากันหมด'},
      {no: '02', title: 'Plan', desc: 'เลือกมาตรการควบคุม และเขียนแผนแก้ไขที่มีผู้รับผิดชอบ ประมาณแรงที่ใช้ และกำหนดเวลาที่ทีมคุณรับได้'},
      {no: '03', title: 'Implement', desc: 'เสริมความแข็งแรงให้ระบบ แก้สิ่งที่พบ และวางแนวปฏิบัติส่งมอบที่ปลอดภัย เช่น รีวิวโค้ด การสแกน และการจัดการ Secret ไว้ใน Pipeline'},
      {no: '04', title: 'Monitor', desc: 'ตั้งระบบตรวจจับ เก็บ Log และแจ้งเตือน พร้อมนัดทบทวนและทดสอบซ้ำเป็นระยะ เพื่อให้ภาพความปลอดภัยทันสมัยอยู่เสมอ'},
      {no: '05', title: 'Respond', desc: 'เมื่อเกิดเหตุ เราช่วยควบคุมสถานการณ์ เก็บหลักฐาน กู้ระบบกลับมา และสื่อสารกับลูกค้าและหน่วยงานกำกับ'},
      {no: '06', title: 'Improve', desc: 'ทุกช่องโหว่และทุกเหตุการณ์ถูกนำกลับเข้าสู่ขั้นตอนพัฒนาซอฟต์แวร์ (SDLC) ปัญหาประเภทเดียวกันจะถูกจับได้เร็วขึ้นในครั้งหน้า'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'SOC 2 Type II Passed on First Attempt', desc: 'We hardened the architecture and implemented the required controls with evidence collection built in, so the auditors found everything in place on the first pass.', result: 'Zero audit findings'},
      {tag: 'Healthcare · Bangkok', title: '23 Critical Vulnerabilities Found & Fixed', desc: 'A penetration test across the app, API and infrastructure before launch uncovered 23 critical issues, each handed to the developers with reproduction steps and a suggested fix.', result: 'Fixed before go-live'},
      {tag: 'E-Commerce · Nationwide', title: 'Incident Contained in 4 Hours', desc: 'A prepared playbook and live monitoring flagged an intrusion attempt early, and the team followed the plan to contain it before customer data was touched.', result: 'Zero customer data lost'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ผ่าน SOC 2 Type II ตั้งแต่ครั้งแรก', desc: 'เราเสริมความแข็งแรงของสถาปัตยกรรมและติดตั้งมาตรการควบคุมที่จำเป็น พร้อมวางการเก็บหลักฐานไว้ในระบบ ผู้ตรวจจึงเจอทุกอย่างพร้อมตั้งแต่รอบแรก', result: 'ไม่พบข้อบกพร่องจากการตรวจ'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'พบและแก้ช่องโหว่ Critical 23 จุด', desc: 'ทดสอบเจาะระบบทั้งแอป API และโครงสร้างพื้นฐานก่อนเปิดใช้งาน พบปัญหาระดับ Critical 23 จุด และส่งให้นักพัฒนาพร้อมขั้นตอนทำซ้ำและข้อเสนอการแก้ทุกจุด', result: 'แก้ไขเสร็จก่อนเปิดใช้งานจริง'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ควบคุมเหตุการณ์ได้ใน 4 ชั่วโมง', desc: 'Playbook ที่เตรียมไว้และระบบติดตามแบบเรียลไทม์เห็นความพยายามบุกรุกตั้งแต่ต้น ทีมทำตามแผนจนควบคุมได้ก่อนข้อมูลลูกค้าถูกแตะต้อง', result: 'ไม่มีข้อมูลลูกค้าสูญหาย'}
    ]
  const faqs        = isEN ? [
      {q: 'What cybersecurity services do you provide?', a: 'Security assessments, secure-by-design engineering and compliance support: threat modelling, hardening, identity and access management, and monitoring. We can do a one-off test or work alongside your team across several sprints.'},
      {q: 'Can you assess an existing application?', a: 'Yes. We review code, infrastructure, dependencies and access controls, then deliver a ranked list of fixes with the reasoning, so your developers know where to start.'},
      {q: 'Do you help with PDPA and GDPR compliance?', a: 'Yes. We support PDPA compliance in Thailand as a founding partner of PDPA.org, and build controls aligned with GDPR and ISO 27001 where your business needs them.'},
      {q: 'How do you build security into new products?', a: 'Zero trust principles, least-privilege access, secrets management and dependency scanning are part of the engineering process from the first sprint, not a review added just before launch.'},
      {q: 'Do you test mobile apps and APIs as well as websites?', a: 'Yes. Scope can include web apps, iOS and Android apps, REST and GraphQL APIs, cloud configuration and internal networks. We agree the scope and rules of engagement in writing before any testing begins.'},
      {q: 'Will testing disrupt our live systems?', a: 'We plan tests to avoid disruption: safe payloads, agreed time windows and a stop contact on your side. Where a risky test is needed, we run it against a staging copy first.'},
      {q: 'What do we need to prepare before an assessment?', a: 'A list of in-scope systems, test accounts for each user role, architecture diagrams if they exist, and a technical contact. If you have none of these yet, the first step of our assessment is to build them with you.'}
    ] : [
      {q: 'ให้บริการด้านความปลอดภัยไซเบอร์แบบไหนบ้าง?', a: 'ตรวจประเมินความปลอดภัย พัฒนาระบบแบบ Secure-by-design และช่วยเรื่อง Compliance ได้แก่ Threat Modeling การเสริมความแข็งแรงของระบบ ระบบยืนยันตัวตนและสิทธิ์เข้าถึง และการติดตามระบบ จะให้ทดสอบครั้งเดียว หรือให้ทำงานคู่กับทีมคุณหลาย Sprint ก็ได้'},
      {q: 'ตรวจสอบระบบเดิมที่มีอยู่แล้วได้ไหม?', a: 'ได้ เราตรวจโค้ด โครงสร้างพื้นฐาน Dependency และการควบคุมสิทธิ์เข้าถึง แล้วส่งรายการสิ่งที่ต้องแก้เรียงตามลำดับพร้อมเหตุผล นักพัฒนาของคุณจะรู้ว่าต้องเริ่มตรงไหน'},
      {q: 'ช่วยเรื่อง PDPA และ GDPR ได้ไหม?', a: 'ได้ เราช่วยเรื่อง PDPA ในไทยในฐานะ Founding Partner ของ PDPA.org และวางมาตรการให้สอดคล้องกับ GDPR และ ISO 27001 ตามที่ธุรกิจคุณต้องใช้'},
      {q: 'สร้างความปลอดภัยให้ผลิตภัณฑ์ใหม่อย่างไร?', a: 'หลัก Zero Trust การให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น การจัดการ Secret และการสแกน Dependency เป็นส่วนหนึ่งของงานวิศวกรรมตั้งแต่ Sprint แรก ไม่ใช่การรีวิวที่เพิ่มเข้ามาก่อนเปิดตัวไม่นาน'},
      {q: 'ทดสอบแอปมือถือและ API ด้วยไหม ไม่ใช่แค่เว็บไซต์?', a: 'ทดสอบด้วย ขอบเขตครอบคลุมเว็บแอป แอป iOS และ Android, REST และ GraphQL API, การตั้งค่า Cloud และเครือข่ายภายในได้ เราตกลงขอบเขตและกติกาการทดสอบเป็นลายลักษณ์อักษรก่อนเริ่มทดสอบทุกครั้ง'},
      {q: 'การทดสอบจะกระทบระบบที่ใช้งานอยู่ไหม?', a: 'เราวางแผนไม่ให้กระทบ ใช้ Payload ที่ปลอดภัย กำหนดช่วงเวลาที่ตกลงกัน และมีผู้ติดต่อฝั่งคุณที่สั่งหยุดได้ ถ้าต้องทดสอบแบบเสี่ยง เราจะทดสอบกับสำเนาบน Staging ก่อน'},
      {q: 'ต้องเตรียมอะไรก่อนตรวจประเมิน?', a: 'รายการระบบที่อยู่ในขอบเขต บัญชีทดสอบของแต่ละบทบาทผู้ใช้ แผนผังสถาปัตยกรรมถ้ามี และผู้ติดต่อฝั่งเทคนิค ถ้ายังไม่มีสิ่งเหล่านี้ ขั้นแรกของการตรวจคือช่วยกันทำขึ้นมา'}
    ]
  const related     = isEN ? [
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const secLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>snyk test --all-projects</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '0 high-severity vulnerabilities' : 'ไม่พบช่องโหว่ระดับ High'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>pentest --scope app,api,infra</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '23 findings remediated' : 'แก้ไขปัญหาที่พบ 23 จุด'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'audit --framework soc2' : 'audit --framework soc2'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'SOC 2 Type II: passed' : 'SOC 2 Type II: ผ่าน'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>security-scan.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {secLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Security Posture' : 'Security Posture'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '98%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'SOC 2 audit ready' : 'พร้อมสำหรับการตรวจ SOC 2'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-shield-search', title: 'Security Assessments', desc: 'Architecture and cloud-configuration reviews, with a threat model for what you actually protect and risks ranked by business impact, not by scanner score.' },
    { icon: 'ti-bug', title: 'Penetration Testing', desc: 'Manual testing of web apps, mobile apps, APIs and infrastructure. Each finding includes reproduction steps and a suggested fix, and we retest once your team has patched.' },
    { icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'Gap analysis and working controls for SOC 2, ISO 27001, GDPR and PDPA, with the evidence auditors ask for, not just policy documents.' },
    { icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbooks that name who does what in the first hour, plus a tabletop exercise so your team has practised before a real attack.' },
    { icon: 'ti-lock-access', title: 'Identity & Access', desc: 'Least-privilege IAM, single sign-on, multi-factor authentication and regular access reviews designed into the architecture.' },
    { icon: 'ti-key', title: 'Secrets Management', desc: 'Keys and passwords moved into a vault with rotation and audit logs, and dependency scanning in the pipeline to block vulnerable libraries.' },
  ] : [
    { icon: 'ti-shield-search', title: 'Security Assessments', desc: 'รีวิวสถาปัตยกรรมและการตั้งค่า Cloud พร้อม Threat Model ของสิ่งที่คุณต้องปกป้องจริง และจัดลำดับความเสี่ยงตามผลต่อธุรกิจ ไม่ใช่ตามคะแนนของเครื่องสแกน' },
    { icon: 'ti-bug', title: 'Penetration Testing', desc: 'ทดสอบเว็บแอป แอปมือถือ API และโครงสร้างพื้นฐานด้วยมือ ทุกช่องโหว่มีขั้นตอนทำซ้ำและข้อเสนอการแก้ และเราทดสอบซ้ำหลังทีมคุณแพตช์' },
    { icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'วิเคราะห์ช่องว่างและวางมาตรการที่ใช้งานได้จริงสำหรับ SOC 2, ISO 27001, GDPR และ PDPA พร้อมหลักฐานที่ผู้ตรวจขอ ไม่ใช่แค่เอกสารนโยบาย' },
    { icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbook ที่ระบุว่าชั่วโมงแรกใครทำอะไร พร้อมซ้อมบนโต๊ะ (Tabletop) ให้ทีมคุณเคยลองมาก่อนเจอการโจมตีจริง' },
    { icon: 'ti-lock-access', title: 'Identity & Access', desc: 'IAM แบบให้สิทธิ์น้อยที่สุด Single Sign-on การยืนยันตัวตนหลายขั้น (MFA) และการทบทวนสิทธิ์เป็นระยะ ออกแบบไว้ในสถาปัตยกรรมตั้งแต่ต้น' },
    { icon: 'ti-key', title: 'Secrets Management', desc: 'ย้าย Key และรหัสผ่านไปไว้ใน Vault พร้อมการหมุนเวียนและ Audit Log และสแกน Dependency ใน Pipeline เพื่อกันไลบรารีที่มีช่องโหว่' },
  ]

  const techStack = [
    { label: 'SIEM', icon: 'ti-radar' },
    { label: 'WAF', icon: 'ti-shield-check' },
    { label: 'IAM', icon: 'ti-lock-access' },
    { label: 'Zero Trust', icon: 'ti-shield-half' },
    { label: 'SOAR', icon: 'ti-server-cog' },
    { label: 'Vault', svg: 'vault' },
    { label: 'Snyk', svg: 'snyk' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assess', desc: 'Inventory of assets, current posture and a threat model' },
    { no: '02', title: 'Plan', desc: 'Chosen controls and a remediation roadmap with owners' },
    { no: '03', title: 'Implement', desc: 'Hardening, fixes and secure delivery practices' },
    { no: '04', title: 'Monitor', desc: 'Detection, alerts and scheduled retests' },
    { no: '05', title: 'Respond', desc: 'Containment, recovery and communication' },
    { no: '06', title: 'Improve', desc: 'Lessons fed back into the SDLC' },
  ] : [
    { no: '01', title: 'Assess', desc: 'สำรวจทรัพย์สิน สถานะปัจจุบัน และสร้าง Threat Model' },
    { no: '02', title: 'Plan', desc: 'เลือกมาตรการ และแผนแก้ไขที่มีผู้รับผิดชอบ' },
    { no: '03', title: 'Implement', desc: 'เสริมความแข็งแรง แก้ช่องโหว่ และวางแนวส่งมอบที่ปลอดภัย' },
    { no: '04', title: 'Monitor', desc: 'ตรวจจับ แจ้งเตือน และทดสอบซ้ำตามกำหนด' },
    { no: '05', title: 'Respond', desc: 'ควบคุมเหตุ กู้ระบบ และสื่อสารกับผู้เกี่ยวข้อง' },
    { no: '06', title: 'Improve', desc: 'นำบทเรียนกลับเข้าสู่ SDLC' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What cybersecurity services does Haliviq provide?', a: 'Security assessments, secure-by-design engineering, and compliance support for product teams: threat modeling, hardening, identity and access management, and monitoring with SIEM and SOAR tooling. We treat security as engineering work integrated into delivery, not a once-a-year audit exercise.' },
    { q: 'Can you assess the security of an existing application?', a: 'Yes. We conduct comprehensive assessments covering code, infrastructure, dependencies, and access controls, delivering prioritized, actionable remediation rather than a lengthy report that sits unread. You get a ranked list of what to fix first and why it matters.' },
    { q: 'Does Haliviq help with PDPA and other compliance requirements?', a: 'Yes. We support PDPA compliance in Thailand as a founding partner of PDPA.org, and we build controls that align with GDPR and ISO 27001 where your business needs them — practical implementation, not just policy documents.' },
    { q: 'How do you build security into new products from the start?', a: 'Zero trust principles, least-privilege access, secrets management with tools like Vault, and dependency scanning with Snyk are built into our engineering process from the first sprint, not added as a security review before launch.' },
    { q: 'How much does a security assessment cost?', a: 'A focused assessment of one application or system typically starts in the high five figures (THB), scaling with the number of systems in scope and depth of testing required. A full SOC 2 or ISO 27001 readiness program, including control implementation, is quoted after an initial scoping call based on your current gaps.' },
    { q: 'How long does penetration testing take?', a: 'A focused penetration test of a single application typically takes 1-2 weeks including the report and remediation guidance. A comprehensive assessment across app, API, and infrastructure for a larger system usually runs 3-5 weeks.' },
    { q: 'What happens if you find a critical vulnerability during testing?', a: 'We flag critical findings immediately rather than waiting for the final report, so your team can start remediation the same day. Our report includes reproduction steps and concrete fix guidance, not just a severity score.' },
    { q: 'Do you provide ongoing security monitoring, or only point-in-time assessments?', a: 'Both, depending on what you need. A point-in-time assessment gives you a snapshot and a fix list; ongoing monitoring with SIEM and SOAR tooling plus periodic re-testing keeps your posture current as your systems and the threat landscape change.' },
  ] : [
    { q: 'Haliviq ให้บริการด้านความปลอดภัยไซเบอร์แบบไหนบ้าง?', a: 'ตรวจประเมินความปลอดภัย พัฒนาระบบแบบ Secure-by-design และช่วยเรื่อง Compliance สำหรับทีมผลิตภัณฑ์ ได้แก่ Threat Modeling, การเสริมความแข็งแรงของระบบ, ระบบยืนยันตัวตนและสิทธิ์การเข้าถึง และการติดตามระบบด้วย SIEM และ SOAR เรามอง Security เป็นงานวิศวกรรมที่อยู่ในขั้นตอนส่งมอบงาน ไม่ใช่การตรวจสอบปีละครั้ง' },
    { q: 'ตรวจสอบความปลอดภัยของแอปพลิเคชันที่มีอยู่แล้วได้ไหม?', a: 'ได้ เราตรวจประเมินครอบคลุมโค้ด โครงสร้างพื้นฐาน Dependency และการควบคุมสิทธิ์เข้าถึง พร้อมส่งมอบแนวทางแก้ไขที่จัดลำดับความสำคัญและนำไปใช้ได้จริง แทนที่จะเป็นรายงานยาวที่ไม่มีใครอ่าน คุณจะได้รายการที่เรียงว่าควรแก้อะไรก่อนและเพราะอะไร' },
    { q: 'Haliviq ช่วยเรื่อง PDPA และ Compliance อื่นๆ ได้ไหม?', a: 'ได้ เราช่วยเรื่อง PDPA ในไทยในฐานะ Founding Partner ของ PDPA.org และวางมาตรการให้สอดคล้องกับ GDPR และ ISO 27001 ตามที่ธุรกิจต้องการ เป็นการลงมือทำจริง ไม่ใช่แค่เอกสารนโยบาย' },
    { q: 'สร้างความปลอดภัยให้ผลิตภัณฑ์ใหม่ตั้งแต่ต้นอย่างไร?', a: 'หลัก Zero Trust การให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น การจัดการ Secrets ด้วยเครื่องมืออย่าง Vault และการสแกน Dependency ด้วย Snyk ถูกฝังไว้ในขั้นตอนวิศวกรรมตั้งแต่ Sprint แรก ไม่ใช่มาเพิ่มเป็นการรีวิวความปลอดภัยก่อนเปิดใช้งาน' },
    { q: 'ตรวจประเมินความปลอดภัยมีค่าใช้จ่ายเท่าไหร่?', a: 'การตรวจประเมินแบบเจาะจงหนึ่งแอปพลิเคชันหรือระบบ มักเริ่มที่หลักหมื่นปลายๆ (บาท) และปรับตามจำนวนระบบในขอบเขตและความลึกของการทดสอบ ส่วนโปรแกรมเตรียมความพร้อม SOC 2 หรือ ISO 27001 เต็มรูปแบบ รวมการติดตั้งมาตรการควบคุม จะเสนอราคาหลังคุยขอบเขตเบื้องต้นตามช่องว่างที่มีอยู่' },
    { q: 'Penetration Testing ใช้เวลานานแค่ไหน?', a: 'การทดสอบเจาะระบบแบบเจาะจงหนึ่งแอปพลิเคชันมักใช้เวลา 1-2 สัปดาห์ รวมรายงานและแนวทางแก้ไข ส่วนการตรวจประเมินแบบครอบคลุมแอป API และโครงสร้างพื้นฐานสำหรับระบบขนาดใหญ่ มักใช้เวลา 3-5 สัปดาห์' },
    { q: 'ถ้าเจอช่องโหว่ Critical ระหว่างทดสอบจะทำอย่างไร?', a: 'เราแจ้งช่องโหว่ระดับ Critical ทันที ไม่รอจนถึงรายงานสุดท้าย เพื่อให้ทีมคุณเริ่มแก้ได้ตั้งแต่วันนั้น รายงานของเรามีขั้นตอนทำซ้ำปัญหาและแนวทางแก้ไขที่ชัดเจน ไม่ใช่แค่คะแนนความรุนแรง' },
    { q: 'มีการติดตามระบบต่อเนื่องไหม หรือตรวจแค่ครั้งเดียว?', a: 'มีทั้งสองแบบ ขึ้นอยู่กับความต้องการ การตรวจประเมินครั้งเดียวให้ภาพรวมและรายการสิ่งที่ต้องแก้ ส่วนการติดตามต่อเนื่องด้วย SIEM และ SOAR พร้อมทดสอบซ้ำเป็นระยะ ช่วยให้ความปลอดภัยทันสมัยตามระบบและภัยคุกคามที่เปลี่ยนไป' },
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
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
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
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven security tools and practices we apply where they fit — chosen for the threat model, not the trend cycle.'
              : 'เครื่องมือและแนวทางด้านความปลอดภัยที่พิสูจน์แล้ว เลือกใช้ตามภัยคุกคามจริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from assessment to continuous readiness — adjusted per system, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการประเมินไปจนถึงความพร้อมต่อเนื่อง ปรับตามแต่ละระบบ ไม่ใช่สูตรตายตัว'}
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
            {isEN ? 'Straight answers about how we handle security.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแลความปลอดภัย'}
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
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีฟังว่าคุณกำลังสร้างอะไรอยู่'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกับเรา'}
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
      whyImg="/images/services/cybersecurity/why1.jpg"
      whyImg2="/images/services/cybersecurity/why2.jpg"
      featureImg="/images/services/cybersecurity/feature.jpg"
      processImg="/images/services/cybersecurity/process.jpg"
    />
  )
}
