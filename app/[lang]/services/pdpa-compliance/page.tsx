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
    ? "PDPA Compliance Consulting in Bangkok | Haliviq"
    : "ที่ปรึกษา PDPA และระบบ Consent กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq, a founding partner of PDPA.org, handles PDPA audits, consent and cookie flows, DSAR workflows and data security for Thai companies in Bangkok."
    : "Haliviq ผู้ก่อตั้งร่วมของ PDPA.org ช่วยตรวจ PDPA ทำระบบ Consent และ Cookie ระบบรับคำขอ DSAR และวางความปลอดภัยของข้อมูล ให้บริษัทในไทยที่กรุงเทพฯ"
  const url = `https://www.haliviq.com/${params.lang}/services/pdpa-compliance`
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

  const badge    = isEN ? 'Compliance / PDPA'  : 'Compliance / PDPA'
  const title    = isEN ? 'PDPA Compliance'  : 'PDPA Compliance'
  const subtitle = isEN ? 'Built In, Not Bolted On'    : 'ฝังเข้าไป ไม่ใช่แปะทีหลัง'
  const heroDesc = isEN ? 'A privacy policy on the website is the easy part. The hard part is what happens when a customer emails to say: please delete my data. Haliviq is a founding partner of PDPA.org, and we help Thai companies close that gap. We map where personal data really sits in your systems, fix the consent and cookie flow, build the request process your team will follow, and add the encryption and access control that PDPA expects. You end up with compliance your team can run every day, not a folder on a shelf.'  : 'นโยบายความเป็นส่วนตัวบนเว็บไซต์เป็นส่วนที่ทำง่ายที่สุด แต่พอลูกค้าอีเมลมาขอให้ลบข้อมูล ทีมรู้ไหมว่าต้องทำอะไรต่อ Haliviq เป็น Founding Partner ของ PDPA.org เราช่วยบริษัทในไทยปิดช่องว่างตรงนี้ ตั้งแต่ไล่ดูว่าข้อมูลส่วนบุคคลอยู่ตรงไหนในระบบจริง แก้หน้าขอ Consent และ Cookie ทำขั้นตอนรับคำขอที่ทีมของคุณทำตามได้ ไปจนถึงใส่การเข้ารหัสและการควบคุมสิทธิ์เข้าถึงที่ PDPA คาดหวัง ผลที่ได้คือระบบที่ทีมใช้งานได้ทุกวัน ไม่ใช่แฟ้มเอกสารที่เก็บไว้บนชั้น'
  const whyTitle = isEN ? 'Why PDPA compliance is engineering, not paperwork'    : 'ทำไมการทำตาม PDPA เป็นงานวิศวกรรม ไม่ใช่แค่งานเอกสาร'
  const whyDesc  = isEN ? 'A policy document cannot stop a data leak or delete a customer record. Only the systems behind it can. If your sign-up form has no proper consent step, if nobody knows which database holds a customer\'s phone number, or if staff can open files they have no reason to see, the policy on your website does not protect you. PDPA asks you to show how personal data is collected, used, kept and removed, and that is a question for engineers as much as for lawyers.'  : 'เอกสารนโยบายกันข้อมูลรั่วไม่ได้ และลบข้อมูลลูกค้าให้เราก็ไม่ได้ ต้องเป็นระบบที่อยู่เบื้องหลังเท่านั้น ถ้าฟอร์มสมัครสมาชิกไม่มีขั้นตอนขอ Consent ที่ถูกต้อง ถ้าไม่มีใครรู้ว่าเบอร์โทรลูกค้าอยู่ในฐานข้อมูลไหน หรือพนักงานเปิดไฟล์ที่ไม่มีเหตุผลต้องเห็นได้ นโยบายบนเว็บไซต์ก็ไม่ได้ปกป้องคุณ PDPA ต้องการให้แสดงได้ว่าข้อมูลส่วนบุคคลถูกเก็บ ใช้ เก็บรักษา และลบอย่างไร ซึ่งเป็นคำถามสำหรับวิศวกรไม่น้อยกว่านักกฎหมาย'
  const ctaTitle = isEN ? 'Ready to get a real compliance picture?'    : 'พร้อมรู้สถานะการทำตามกฎหมายที่แท้จริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a PDPA gap analysis. We go through your real data flows and tell you in plain language where you stand today, what is risky, and what to fix first.'   : 'เริ่มจากวิเคราะห์ช่องว่าง PDPA เราจะไล่ดูการไหลของข้อมูลจริงของคุณ แล้วบอกเป็นภาษาที่เข้าใจง่ายว่าตอนนี้อยู่ตรงไหน อะไรเสี่ยง และควรแก้อะไรก่อน'
  const overviewText = isEN
    ? 'As a founding partner of PDPA.org, we help organizations move from a policy document to compliance that actually runs. That starts with an audit and gap analysis built on your real data flows, not a generic checklist. From there we build consent and cookie management into your website and apps, set up data subject access request (DSAR) workflows so a request for access, correction or deletion has an owner and a process, and add privacy and security engineering such as encryption, access control and audit logging inside your systems. We work with your legal or DPO team where you have one, and with your developers where you do not, so the controls stay in place after we leave.'
    : 'ในฐานะ Founding Partner ของ PDPA.org เราช่วยองค์กรก้าวจากเอกสารนโยบายไปสู่ระบบที่ทำงานตาม PDPA ได้จริง เริ่มจากตรวจและวิเคราะห์ช่องว่างโดยดูการไหลของข้อมูลจริงของคุณ ไม่ใช่เช็กลิสต์ทั่วไป จากนั้นเราสร้างระบบจัดการ Consent และ Cookie ไว้ในเว็บไซต์และแอป วางขั้นตอนรับคำขอสิทธิ์ของเจ้าของข้อมูล (DSAR) เพื่อให้ทุกคำขอเข้าถึง แก้ไข หรือลบข้อมูล มีคนรับผิดชอบและมีขั้นตอนชัดเจน และใส่ความเป็นส่วนตัวกับความปลอดภัยเข้าไปในระบบ เช่น การเข้ารหัส การควบคุมสิทธิ์เข้าถึง และบันทึกการใช้งาน เราทำงานร่วมกับทีมกฎหมายหรือ DPO ของคุณถ้ามี และร่วมกับทีมพัฒนาถ้ายังไม่มี เพื่อให้มาตรการอยู่ต่อได้หลังเราส่งงาน'

  const heroBullets = isEN ? [
      'PDPA audit and gap analysis built on your real data flows, not a generic checklist',
      'Consent and cookie banners that record what each visitor agreed to, on web and mobile',
      'Request workflows for access, correction and deletion, with an owner and a deadline for each',
      'Data mapping that shows where personal data is stored, who touches it and where it goes',
      'Encryption, role-based access and audit logs added inside your systems',
      'Team training and a review schedule, so the setup keeps working after we leave',
    ] : [
      'ตรวจ PDPA และวิเคราะห์ช่องว่างจากการไหลของข้อมูลจริง ไม่ใช่เช็กลิสต์ทั่วไป',
      'แบนเนอร์ Consent และ Cookie ที่บันทึกว่าผู้เข้าชมแต่ละคนยอมรับอะไรไว้ ทั้งบนเว็บและมือถือ',
      'ขั้นตอนรับคำขอเข้าถึง แก้ไข และลบข้อมูล โดยทุกคำขอมีเจ้าของและกำหนดเวลา',
      'ทำแผนผังข้อมูลให้เห็นว่าข้อมูลส่วนบุคคลเก็บที่ไหน ใครแตะต้องบ้าง และส่งต่อไปไหน',
      'ใส่การเข้ารหัส การให้สิทธิ์ตามบทบาท และบันทึกการใช้งาน เข้าไปในระบบของคุณ',
      'อบรมทีมและตั้งรอบทบทวน เพื่อให้ระบบที่วางไว้ใช้ได้ต่อหลังเราส่งงาน',
    ]
  const whyPoints   = isEN ? [
      'PDPA non-compliance carries real fines and reputational risk, not just a warning letter, so it belongs on the same risk list as security and finance.',
      'A written policy does not fulfil a data subject request. Someone has to find the data in every system, check the request is genuine, act on it and keep a record.',
      'Consent handled well builds trust: visitors see what you collect and why, and you can prove what each person agreed to and when.',
      'Data mapping usually turns up copies of personal data that nobody planned for, such as spreadsheets in shared drives, exports sent by email and old test databases.',
      'Encryption and access control protect personal data whether or not a request ever arrives, and they limit the damage if an account is compromised.',
      'Customers and enterprise partners increasingly ask how you handle personal data. A clear, working answer shortens security questionnaires and sales cycles.',
    ] : [
      'การไม่ทำตาม PDPA มีค่าปรับจริงและเสี่ยงต่อชื่อเสียง ไม่ใช่แค่จดหมายเตือน จึงควรอยู่ในรายการความเสี่ยงเดียวกับเรื่องความปลอดภัยและการเงิน',
      'นโยบายที่เขียนไว้ทำตามคำขอของเจ้าของข้อมูลให้ไม่ได้ ต้องมีคนหาข้อมูลในทุกระบบ เช็กว่าคำขอเป็นของจริง ดำเนินการ และเก็บบันทึกไว้',
      'การจัดการ Consent ที่ดีสร้างความไว้ใจได้ เพราะผู้เข้าชมเห็นว่าคุณเก็บอะไรและเก็บไปทำไม และคุณพิสูจน์ได้ว่าแต่ละคนยอมรับอะไรไว้เมื่อไหร่',
      'การทำแผนผังข้อมูลมักพบสำเนาข้อมูลส่วนบุคคลที่ไม่มีใครวางแผนไว้ เช่น สเปรดชีตใน shared drive ไฟล์ export ที่ส่งทางอีเมล และฐานข้อมูลทดสอบเก่า',
      'การเข้ารหัสและการควบคุมสิทธิ์เข้าถึงปกป้องข้อมูลส่วนบุคคลได้ไม่ว่าจะมีคำขอเข้ามาหรือไม่ และช่วยจำกัดความเสียหายถ้าบัญชีใดบัญชีหนึ่งถูกเจาะ',
      'ลูกค้าและพาร์ตเนอร์องค์กรถามมากขึ้นว่าคุณดูแลข้อมูลส่วนบุคคลอย่างไร คำตอบที่ชัดและทำงานได้จริงช่วยให้แบบสอบถามด้านความปลอดภัยและรอบการขายจบเร็วขึ้น',
    ]
  const outcomes    = isEN ? [
      {stat: '100%', label: 'DSAR Fulfillment Rate', desc: 'Across implemented workflows'},
      {stat: '0', label: 'Compliance Fines', desc: 'Across audited client organizations'},
      {stat: '<48h', label: 'DSAR Response Time', desc: 'From request to action'},
      {stat: '20+', label: 'Systems Data-Mapped', desc: 'Average per full audit'}
    ] : [
      {stat: '100%', label: 'อัตราทำตามคำขอ DSAR', desc: 'ในทุกระบบรับคำขอที่เราสร้าง'},
      {stat: '0', label: 'ค่าปรับจากการไม่ทำตามกฎหมาย', desc: 'ในองค์กรลูกค้าที่ตรวจสอบ'},
      {stat: '<48h', label: 'เวลาตอบคำขอ DSAR', desc: 'ตั้งแต่รับคำขอถึงดำเนินการ'},
      {stat: '20+', label: 'ระบบที่ทำแผนผังข้อมูล', desc: 'เฉลี่ยต่อการตรวจเต็มรูปแบบ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'We review where personal data comes in, where it is stored, who can see it and what you tell people about it, then compare that with PDPA requirements. Suits companies that have a policy but are not sure it matches reality. You get a ranked list of gaps with the reason each one matters.'},
      {icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'We build consent capture and a cookie banner into your site and apps, with a preference centre where people can change their mind. Each choice is stored with a timestamp, so you can show what a visitor agreed to. Tags and trackers only fire after consent.'},
      {icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'A working process for access, correction and deletion requests: where requests arrive, who checks identity, which systems are searched and how the answer is sent back. Built for the teams who will actually handle requests, with deadlines and a log.'},
      {icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'We add encryption for data at rest and in transit, role-based access, and audit logs that record who opened or changed personal data. These are changes in your systems, made together with your developers, not recommendations in a PDF.'},
      {icon: 'ti-map', title: 'Data Mapping', desc: 'We trace personal data across your apps, databases, SaaS tools and spreadsheets and record what is collected, why, how long it is kept and who receives it. The map is the base for the audit and for records of processing activities.'},
      {icon: 'ti-certificate', title: 'Training & Governance', desc: 'Short, practical sessions for the people who handle data every day, plus a simple governance routine: who owns what, how new projects get a privacy check, and when the setup is reviewed. It keeps compliance from fading after the project ends.'}
    ] : [
      {icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'เราดูว่าข้อมูลส่วนบุคคลเข้ามาทางไหน เก็บที่ไหน ใครเห็นได้ และคุณบอกผู้ใช้ไว้ว่าอะไร แล้วเทียบกับข้อกำหนด PDPA เหมาะกับบริษัทที่มีนโยบายแล้วแต่ไม่แน่ใจว่าตรงกับความเป็นจริงไหม คุณจะได้รายการช่องว่างเรียงตามลำดับ พร้อมเหตุผลว่าแต่ละข้อสำคัญอย่างไร'},
      {icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'เราสร้างระบบเก็บ Consent และแบนเนอร์ Cookie ไว้ในเว็บไซต์และแอป พร้อมหน้าให้ผู้ใช้เปลี่ยนใจได้ ทุกตัวเลือกถูกบันทึกพร้อมเวลา คุณจึงแสดงได้ว่าผู้เข้าชมยอมรับอะไรไว้ และ tag กับ tracker จะทำงานหลังได้รับ Consent แล้วเท่านั้น'},
      {icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'ขั้นตอนรับคำขอเข้าถึง แก้ไข และลบข้อมูลที่ใช้ได้จริง ว่าคำขอเข้ามาทางไหน ใครตรวจยืนยันตัวตน ต้องค้นระบบไหนบ้าง และตอบกลับอย่างไร ออกแบบให้เหมาะกับทีมที่ต้องรับคำขอจริง มีกำหนดเวลาและบันทึกทุกขั้น'},
      {icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'เราเพิ่มการเข้ารหัสทั้งตอนเก็บและตอนส่งข้อมูล การให้สิทธิ์ตามบทบาท และบันทึกการใช้งานว่าใครเปิดหรือแก้ข้อมูลส่วนบุคคล ทั้งหมดเป็นการแก้ในระบบจริง ทำร่วมกับทีมพัฒนาของคุณ ไม่ใช่ข้อเสนอแนะในไฟล์ PDF'},
      {icon: 'ti-map', title: 'Data Mapping', desc: 'เราไล่ตามข้อมูลส่วนบุคคลผ่านแอป ฐานข้อมูล เครื่องมือ SaaS และสเปรดชีต แล้วจดไว้ว่าเก็บอะไร เก็บไปทำไม เก็บนานแค่ไหน และส่งให้ใคร แผนผังนี้เป็นฐานของการตรวจและของบันทึกกิจกรรมการประมวลผล'},
      {icon: 'ti-certificate', title: 'Training & Governance', desc: 'อบรมสั้นๆ เน้นใช้งานจริงสำหรับคนที่แตะข้อมูลทุกวัน พร้อมวางรูทีนกำกับดูแลง่ายๆ ว่าใครดูแลอะไร โปรเจกต์ใหม่ผ่านการตรวจเรื่องข้อมูลส่วนบุคคลอย่างไร และทบทวนระบบเมื่อไหร่ เพื่อไม่ให้การทำตามกฎหมายจางหายไปหลังโปรเจกต์จบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit', desc: 'We interview the people who handle data, review your systems and forms, and trace how personal data flows through the business.'},
      {no: '02', title: 'Gap Analysis', desc: 'We compare what we found with PDPA requirements and write down each gap, how serious it is and what it would take to close.'},
      {no: '03', title: 'Roadmap', desc: 'We rank the fixes by risk and effort, agree an order with you and split them into quick wins and bigger pieces of work.'},
      {no: '04', title: 'Implementation', desc: 'We build the consent flow, the request workflow and the security controls, working with your developers and legal team.'},
      {no: '05', title: 'Training', desc: 'We walk your staff through the new processes and tools with real examples, and leave short guides they can refer back to.'},
      {no: '06', title: 'Monitoring', desc: 'We review the setup at agreed intervals as your systems and the rules change, and update what needs updating.'}
    ] : [
      {no: '01', title: 'Audit', desc: 'เราคุยกับคนที่ดูแลข้อมูล ตรวจระบบและฟอร์มต่างๆ และไล่ดูว่าข้อมูลส่วนบุคคลไหลผ่านธุรกิจของคุณอย่างไร'},
      {no: '02', title: 'Gap Analysis', desc: 'เรานำสิ่งที่พบมาเทียบกับข้อกำหนด PDPA แล้วจดแต่ละช่องว่าง ว่าร้ายแรงแค่ไหน และต้องทำอะไรถึงจะปิดได้'},
      {no: '03', title: 'Roadmap', desc: 'เราจัดลำดับสิ่งที่ต้องแก้ตามความเสี่ยงและความยาก ตกลงลำดับกับคุณ และแยกเป็นงานที่ทำได้เร็วกับงานก้อนใหญ่'},
      {no: '04', title: 'Implementation', desc: 'เราสร้างระบบ Consent ขั้นตอนรับคำขอ และมาตรการความปลอดภัย โดยทำงานร่วมกับทีมพัฒนาและทีมกฎหมายของคุณ'},
      {no: '05', title: 'Training', desc: 'เราพาทีมของคุณลองใช้ขั้นตอนและเครื่องมือใหม่ด้วยตัวอย่างจริง และทิ้งคู่มือสั้นๆ ไว้ให้กลับมาเปิดดู'},
      {no: '06', title: 'Monitoring', desc: 'เราทบทวนระบบตามรอบที่ตกลงกัน เมื่อระบบของคุณหรือกฎเปลี่ยน และอัปเดตส่วนที่ต้องแก้'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Full PDPA Compliance in 10 Weeks', desc: 'Audit, gap analysis, and implementation of consent and DSAR workflows.', result: 'Zero findings on external review'},
      {tag: 'Healthcare · Bangkok', title: 'DSAR Response Time Cut from Weeks to 48 Hours', desc: 'Automated data subject request workflow across 8 internal systems.', result: '100% requests fulfilled on time'},
      {tag: 'Retail · Nationwide', title: 'Cookie Consent Rebuilt for Real Compliance', desc: 'Consent management platform integrated across web and mobile properties.', result: 'Full consent audit trail'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ทำตาม PDPA ครบถ้วนใน 10 สัปดาห์', desc: 'ตรวจ วิเคราะห์ช่องว่าง และสร้างระบบ Consent และ DSAR', result: 'ไม่พบข้อบกพร่องจากการตรวจสอบภายนอก'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ลดเวลาตอบ DSAR จากหลักสัปดาห์เหลือ 48 ชั่วโมง', desc: 'ทำระบบรับคำขอสิทธิ์เจ้าของข้อมูลให้ทำงานอัตโนมัติ ครอบคลุม 8 ระบบภายใน', result: 'ตอบคำขอทันเวลา 100%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'สร้างระบบ Cookie Consent ใหม่ให้ทำตามกฎหมายจริง', desc: 'เชื่อมแพลตฟอร์มจัดการ Consent ครอบคลุมเว็บและมือถือ', result: 'มีบันทึกการให้ Consent ครบถ้วน'}
    ]
  const faqs        = isEN ? [
      {q: 'What is a PDPA gap analysis?', a: 'A structured review of your actual data flows, consent points and controls compared with PDPA requirements. The output is a prioritised list of gaps, each with a plain-language explanation and a suggested fix, rather than a generic checklist.'},
      {q: 'Can you help fulfil data subject requests we already receive?', a: 'Yes. We design and build the workflow so your team can handle access, correction and deletion requests reliably and within the required timeframe, across whichever systems hold the data.'},
      {q: 'Are you a certified PDPA partner?', a: 'We are a founding partner of PDPA.org and bring hands-on implementation experience across audits, consent systems and request workflows, not just policy templates.'},
      {q: 'Does this cover GDPR as well as PDPA?', a: 'Yes. Many controls overlap, so we build with both frameworks in mind where your business has customers or operations outside Thailand.'}
    ] : [
      {q: 'PDPA Gap Analysis คืออะไร?', a: 'คือการตรวจการไหลของข้อมูลจริง จุดขอ Consent และมาตรการของคุณ เทียบกับข้อกำหนด PDPA อย่างเป็นระบบ ผลที่ได้คือรายการช่องว่างเรียงตามความสำคัญ พร้อมคำอธิบายที่อ่านง่ายและวิธีแก้ที่แนะนำ ไม่ใช่เช็กลิสต์ทั่วไป'},
      {q: 'ช่วยทำตามคำขอเจ้าของข้อมูลที่เรารับอยู่แล้วได้ไหม?', a: 'ได้ เราออกแบบและสร้างขั้นตอนให้ทีมของคุณรับมือคำขอเข้าถึง แก้ไข และลบข้อมูลได้อย่างเชื่อถือได้ และทันกรอบเวลาที่กำหนด ไม่ว่าข้อมูลจะอยู่ในระบบไหน'},
      {q: 'เป็นพาร์ตเนอร์ PDPA ที่ได้รับการรับรองไหม?', a: 'เราเป็น Founding Partner ของ PDPA.org และมีประสบการณ์ลงมือทำจริง ทั้งงานตรวจ ระบบ Consent และขั้นตอนรับคำขอ ไม่ใช่แค่แม่แบบนโยบาย'},
      {q: 'ครอบคลุม GDPR ด้วยไหม?', a: 'ครอบคลุม มาตรการหลายอย่างซ้อนทับกัน เราจึงทำโดยคำนึงถึงทั้งสองกรอบ ถ้าธุรกิจของคุณมีลูกค้าหรือดำเนินงานนอกประเทศไทย'}
    ]
  const related     = isEN ? [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const pdpaLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>pdpa-audit --scope all-systems</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '18 gaps identified, prioritized' : 'พบ 18 ช่องว่าง จัดลำดับแล้ว'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>dsar --request access,delete</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Fulfilled in 36h, within SLA' : 'ดำเนินการเสร็จใน 36 ชม. ตาม SLA'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>audit-log --verify encryption</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'All PII encrypted at rest' : 'ข้อมูลส่วนบุคคลถูกเข้ารหัสทั้งหมด'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>compliance-audit.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {pdpaLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Compliance Status' : 'Compliance Status'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '100%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '100% DSAR fulfillment rate' : 'อัตราทำตามคำขอ DSAR 100%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'We trace how personal data enters, moves through and leaves your business, and compare it with PDPA requirements. You receive a ranked list of gaps, each with the reason it matters and a practical fix. It suits companies with a policy on paper who want to know whether it holds up in practice.' },
    { icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'A cookie banner and consent flow built into your website and apps, with a preference centre where visitors can change their choices. Every choice is saved with a timestamp, and analytics and ad tags only run once consent is given.' },
    { icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'A defined process for access, correction and deletion requests: where they arrive, who verifies identity, which systems are searched, and how the reply and the record are kept. Your team gets a clear checklist and deadlines instead of improvising each time.' },
    { icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'Encryption at rest and in transit, role-based access, and audit logs that show who viewed or changed personal data. We build these into your systems alongside your developers, so protection exists in the product and not only in a document.' },
    { icon: 'ti-map', title: 'Data Mapping', desc: 'A clear map of where personal data lives across apps, databases, SaaS tools and shared files: what is collected, the purpose, how long it is kept and who receives it. It is the foundation for the audit and for your records of processing.' },
    { icon: 'ti-certificate', title: 'Training & Governance', desc: 'Practical training for staff who handle personal data every day, and a light governance routine covering owners, privacy checks for new projects and scheduled reviews, so compliance keeps working after the engagement ends.' },
  ] : [
    { icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'เราไล่ดูว่าข้อมูลส่วนบุคคลเข้ามา ไหลผ่าน และออกจากธุรกิจของคุณอย่างไร แล้วเทียบกับข้อกำหนด PDPA คุณจะได้รายการช่องว่างเรียงลำดับ พร้อมเหตุผลว่าทำไมสำคัญและวิธีแก้ที่ทำได้จริง เหมาะกับบริษัทที่มีนโยบายบนกระดาษและอยากรู้ว่าใช้งานได้จริงไหม' },
    { icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'แบนเนอร์ Cookie และขั้นตอนขอ Consent ที่ฝังอยู่ในเว็บไซต์และแอป พร้อมหน้าให้ผู้เข้าชมเปลี่ยนตัวเลือกได้ ทุกตัวเลือกถูกบันทึกพร้อมเวลา และแท็กวิเคราะห์หรือโฆษณาจะทำงานหลังผู้ใช้ให้ Consent แล้วเท่านั้น' },
    { icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'ขั้นตอนที่ชัดเจนสำหรับคำขอเข้าถึง แก้ไข และลบข้อมูล ว่าคำขอเข้ามาทางไหน ใครตรวจยืนยันตัวตน ต้องค้นระบบไหน และเก็บคำตอบกับบันทึกไว้อย่างไร ทีมของคุณมีเช็กลิสต์และกำหนดเวลาชัดเจน ไม่ต้องคิดใหม่ทุกครั้ง' },
    { icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'การเข้ารหัสทั้งตอนเก็บและตอนส่งข้อมูล การให้สิทธิ์ตามบทบาท และบันทึกการใช้งานที่บอกได้ว่าใครเปิดหรือแก้ข้อมูลส่วนบุคคล เราสร้างเข้าไปในระบบร่วมกับทีมพัฒนาของคุณ ให้การปกป้องอยู่ในผลิตภัณฑ์จริง ไม่ใช่แค่ในเอกสาร' },
    { icon: 'ti-map', title: 'Data Mapping', desc: 'แผนผังที่ชัดเจนว่าข้อมูลส่วนบุคคลอยู่ที่ไหนบ้างในแอป ฐานข้อมูล เครื่องมือ SaaS และไฟล์ที่แชร์กัน เก็บอะไร เก็บเพื่ออะไร เก็บนานแค่ไหน และส่งให้ใคร เป็นฐานของการตรวจและของบันทึกกิจกรรมการประมวลผล' },
    { icon: 'ti-certificate', title: 'Training & Governance', desc: 'อบรมแบบเน้นใช้จริงสำหรับคนที่ดูแลข้อมูลส่วนบุคคลทุกวัน พร้อมรูทีนกำกับดูแลแบบเบาๆ ได้แก่ ผู้รับผิดชอบ การตรวจเรื่องข้อมูลส่วนบุคคลของโปรเจกต์ใหม่ และการทบทวนตามกำหนด เพื่อให้ระบบที่วางไว้ใช้ต่อได้หลังงานจบ' },
  ]

  const techStack = [
    { label: 'PDPA (Thailand)', icon: 'ti-shield-lock' },
    { label: 'GDPR', icon: 'ti-world' },
    { label: 'Consent Management', icon: 'ti-checkbox' },
    { label: 'Cookie Compliance', icon: 'ti-cookie' },
    { label: 'Data Mapping', icon: 'ti-map' },
    { label: 'DSAR Workflows', icon: 'ti-file-check' },
    { label: 'Encryption', icon: 'ti-lock' },
    { label: 'Access Control & IAM', icon: 'ti-lock-access' },
    { label: 'Audit Logging', icon: 'ti-list-check' },
    { label: 'ISO 27001', icon: 'ti-certificate' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Audit', desc: 'Interviews and a review of your systems, forms and data flows' },
    { no: '02', title: 'Gap Analysis', desc: 'Each gap written down with its severity and the effort to close it' },
    { no: '03', title: 'Roadmap', desc: 'Fixes ranked by risk and effort, with quick wins first' },
    { no: '04', title: 'Implementation', desc: 'Consent flow, request workflow and security controls built with your team' },
    { no: '05', title: 'Training', desc: 'Hands-on sessions and short guides for the people who handle data' },
    { no: '06', title: 'Monitoring', desc: 'Scheduled reviews as your systems and the rules change' },
  ] : [
    { no: '01', title: 'Audit', desc: 'สัมภาษณ์และตรวจระบบ ฟอร์ม และการไหลของข้อมูล' },
    { no: '02', title: 'Gap Analysis', desc: 'จดแต่ละช่องว่าง พร้อมความร้ายแรงและแรงที่ต้องใช้ปิด' },
    { no: '03', title: 'Roadmap', desc: 'จัดลำดับการแก้ตามความเสี่ยงและความยาก เริ่มจากงานที่ได้ผลเร็ว' },
    { no: '04', title: 'Implementation', desc: 'สร้างระบบ Consent ขั้นตอนรับคำขอ และมาตรการความปลอดภัยร่วมกับทีมคุณ' },
    { no: '05', title: 'Training', desc: 'อบรมแบบลงมือทำและคู่มือสั้นๆ สำหรับคนที่ดูแลข้อมูล' },
    { no: '06', title: 'Monitoring', desc: 'ทบทวนตามรอบเมื่อระบบหรือกฎเปลี่ยน' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What is a PDPA gap analysis and what do we get from it?', a: 'It is a structured review of your actual data flows, consent points and existing controls, compared against PDPA requirements. You get a prioritised, actionable list of gaps to close, each with a plain explanation and a suggested fix. It is based on how your business really handles data, not on a generic checklist.' },
    { q: 'Can you help fulfil data subject requests we already receive?', a: 'Yes. We design and build the workflow so your team can handle access, correction and deletion requests reliably and inside the required timeframe, across whichever internal systems hold the data. That includes who verifies identity, how the data is found and how each request is logged.' },
    { q: 'Are you a certified PDPA partner?', a: 'We are a founding partner of PDPA.org and bring hands-on implementation experience across audits, consent systems and request workflows, not just policy templates.' },
    { q: 'Does this cover GDPR as well as PDPA?', a: 'Yes. Many controls overlap between the two frameworks, and we build with both in mind wherever your business has customers or operations outside Thailand.' },
    { q: 'How long does a full PDPA compliance program take?', a: 'A focused audit and gap analysis typically takes 2-3 weeks. A full remediation program that includes consent management, request workflows and security controls usually runs 8-12 weeks, depending on how many systems are involved.' },
    { q: 'How much does a PDPA compliance engagement cost?', a: 'A standalone audit and gap analysis typically starts in the low five figures (THB). A full implementation program is quoted after the audit, based on the number of systems and gaps that need work. We give you the range before you commit to the larger phase.' },
    { q: 'What if we already have a privacy policy but no real process behind it?', a: 'That is one of the most common situations we see. The gap analysis checks whether what the policy promises can actually be done. We then build the missing workflows and controls instead of only editing the document.' },
    { q: 'Do you provide ongoing compliance monitoring, not just a one-time audit?', a: 'Yes, as an option. Data flows and systems change over time, so we offer periodic re-reviews to keep your setup current, rather than accurate only on the day of the first audit.' },
    { q: 'What do we need to prepare before an audit?', a: 'A list of the systems and tools that hold customer or employee data, your current privacy policy and consent wording, and a few people who can explain how data is handled day to day, such as marketing, HR, IT and customer service. We take it from there.' },
  ] : [
    { q: 'PDPA Gap Analysis คืออะไร และได้อะไรบ้าง?', a: 'คือการตรวจการไหลของข้อมูลจริง จุดขอ Consent และมาตรการที่มีอยู่ เทียบกับข้อกำหนด PDPA อย่างเป็นระบบ คุณจะได้รายการช่องว่างที่เรียงตามความสำคัญและเอาไปทำต่อได้จริง แต่ละข้อมีคำอธิบายที่อ่านง่ายและวิธีแก้ที่แนะนำ อิงจากวิธีที่ธุรกิจของคุณจัดการข้อมูลจริง ไม่ใช่เช็กลิสต์ทั่วไป' },
    { q: 'ช่วยทำตามคำขอเจ้าของข้อมูลที่เรารับอยู่แล้วได้ไหม?', a: 'ได้ เราออกแบบและสร้างขั้นตอนให้ทีมของคุณรับมือคำขอเข้าถึง แก้ไข และลบข้อมูลได้อย่างเชื่อถือได้ และทันกรอบเวลาที่กำหนด ไม่ว่าข้อมูลจะอยู่ในระบบภายในตัวไหน รวมถึงว่าใครตรวจยืนยันตัวตน หาข้อมูลอย่างไร และบันทึกแต่ละคำขออย่างไร' },
    { q: 'เป็นพาร์ตเนอร์ PDPA ที่ได้รับการรับรองไหม?', a: 'เราเป็น Founding Partner ของ PDPA.org และมีประสบการณ์ลงมือทำจริง ทั้งงานตรวจ ระบบ Consent และขั้นตอนรับคำขอ ไม่ใช่แค่แม่แบบนโยบาย' },
    { q: 'ครอบคลุม GDPR ด้วยไหม นอกเหนือจาก PDPA?', a: 'ครอบคลุม มาตรการหลายอย่างซ้อนทับกันระหว่างสองกรอบ เราจึงทำโดยคำนึงถึงทั้งคู่ ถ้าธุรกิจของคุณมีลูกค้าหรือดำเนินงานนอกประเทศไทย' },
    { q: 'โปรแกรมทำตาม PDPA เต็มรูปแบบใช้เวลานานแค่ไหน?', a: 'การตรวจและวิเคราะห์ช่องว่างแบบเจาะจงมักใช้ 2-3 สัปดาห์ ส่วนโปรแกรมแก้ไขเต็มรูปแบบ ที่รวมระบบ Consent ขั้นตอนรับคำขอ และมาตรการความปลอดภัย มักใช้ 8-12 สัปดาห์ ขึ้นกับจำนวนระบบที่เกี่ยวข้อง' },
    { q: 'งาน PDPA มีค่าใช้จ่ายเท่าไหร่?', a: 'การตรวจและวิเคราะห์ช่องว่างแบบเดี่ยวมักเริ่มที่หลักหมื่นต้นๆ (บาท) ส่วนโปรแกรมลงมือแก้เต็มรูปแบบจะเสนอราคาหลังตรวจ ตามจำนวนระบบและช่องว่างที่ต้องแก้ เราบอกช่วงราคาให้ก่อนที่คุณจะตัดสินใจทำช่วงใหญ่' },
    { q: 'ถ้าเรามีนโยบายความเป็นส่วนตัวแล้วแต่ไม่มีขั้นตอนจริงรองรับ ต้องทำอย่างไร?', a: 'นี่คือสถานการณ์ที่เราพบบ่อยที่สุด การวิเคราะห์ช่องว่างจะเช็กว่าสิ่งที่นโยบายสัญญาไว้ทำได้จริงไหม แล้วเราสร้างขั้นตอนและมาตรการที่ขาดไป ไม่ใช่แค่แก้เอกสาร' },
    { q: 'มีการเฝ้าดูการทำตามกฎหมายต่อเนื่องไหม หรือตรวจครั้งเดียว?', a: 'มีเป็นตัวเลือก เพราะการไหลของข้อมูลและระบบเปลี่ยนตลอด เราจึงมีบริการทบทวนเป็นระยะ ให้ระบบที่วางไว้ทันสมัยอยู่เสมอ ไม่ใช่แค่ถูกต้องในวันที่ตรวจครั้งแรก' },
    { q: 'ต้องเตรียมอะไรก่อนเริ่มตรวจ?', a: 'รายชื่อระบบและเครื่องมือที่เก็บข้อมูลลูกค้าหรือพนักงาน นโยบายความเป็นส่วนตัวและข้อความขอ Consent ที่ใช้อยู่ และคนไม่กี่คนที่อธิบายได้ว่าข้อมูลถูกจัดการอย่างไรในแต่ละวัน เช่น ฝ่ายการตลาด HR IT และดูแลลูกค้า ที่เหลือเราจัดการต่อเอง' },
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
            {isEN ? 'Areas We Cover' : 'ขอบเขตที่เราครอบคลุม'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frameworks & Controls' : 'กรอบกฎหมายและมาตรการ'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'The compliance frameworks and technical controls we implement, chosen to match your actual risk profile.'
              : 'กรอบกฎหมายและมาตรการทางเทคนิคที่เราลงมือทำ เลือกให้ตรงกับความเสี่ยงจริงของคุณ'}
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
              ? 'A clear path from audit to real, sustained compliance — adjusted per organization, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการตรวจไปสู่การทำตามกฎหมายอย่างแท้จริงและยั่งยืน ปรับตามแต่ละองค์กร ไม่ใช่สูตรตายตัว'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we handle PDPA compliance.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแลเรื่อง PDPA'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
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
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีฟังว่าคุณกำลังสร้างอะไรอยู่'}
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
      heroDark heroVisual="pdpa-compliance" heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/pdpa-compliance/why1.jpg"
      whyImg2="/images/services/pdpa-compliance/why2.jpg"
      featureImg="/images/services/pdpa-compliance/feature.jpg"
      processImg="/images/services/pdpa-compliance/process.jpg"
    />
  )
}
