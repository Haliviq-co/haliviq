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
  const title = isEN ? "Healthcare & Life Sciences Software & Digital Solutions | Haliviq" : "สุขภาพและวิทยาศาสตร์ชีวภาพ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Telemedicine, patient apps, hospital and clinic back-office systems and clinical data tools for Thai healthcare providers, built to handle health records…"
    : "Telemedicine แอปสำหรับผู้ป่วย ระบบหลังบ้านของโรงพยาบาลและคลินิก และเครื่องมือจัดการข้อมูลทางคลินิก สำหรับผู้ให้บริการสุขภาพในไทย…"
  const url = `https://haliviq.com/${params.lang}/industries/healthcare`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Healthcare & Life Sciences' : 'อุตสาหกรรม / สุขภาพและวิทยาศาสตร์ชีวภาพ'
  const heroSubhead = isEN
    ? 'Telemedicine, patient apps, hospital and clinic back-office systems and clinical data tools for Thai healthcare providers, built to handle health records carefully under PDPA and to talk to the systems you already run.'
    : 'Telemedicine แอปสำหรับผู้ป่วย ระบบหลังบ้านของโรงพยาบาลและคลินิก และเครื่องมือจัดการข้อมูลทางคลินิก สำหรับผู้ให้บริการสุขภาพในไทย ดูแลเวชระเบียนอย่างระมัดระวังตาม PDPA และเชื่อมกับระบบที่คุณใช้อยู่ได้'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Data Interoperability', desc: 'A patient in Thailand may have a record in a hospital information system, another in a lab system, another in a clinic chain and a fourth in an insurer portal, each using its own codes and formats. Doctors end up re-asking questions or re-ordering tests because they cannot see the full picture. We map the data first, then connect systems through HL7 FHIR or plain APIs so the right fields reach the right screen.' },
    { icon: 'ti-scale', title: 'Health-Data Regulation', desc: 'Under PDPA, health information is sensitive personal data, which means explicit consent, tight access control and a clear reason for every use. Hospitals and clinics also have their own rules on medical-record retention and on who may open a chart. We build role-based access, consent records and access logs into the product, and we help you document them for your data-protection officer.' },
    { icon: 'ti-heart-handshake', title: 'Patient Experience', desc: 'Patients want to book a slot, see a lab result and ask a nurse a question without waiting on a phone line, and many already do their banking and shopping in LINE or an app. Most hospital portals feel far behind that. We design in Thai with large text and plain wording, because the users include elderly patients and relatives managing care for them.' },
    { icon: 'ti-shield-lock', title: 'Cybersecurity for Health Systems', desc: 'Medical records are valuable to attackers, and ransomware that takes a hospital system offline can delay surgery and medication, not just leak data. Many clinical systems also run old software that is hard to patch. We separate networks, encrypt data at rest and in transit, keep tested backups and agree a downtime procedure with clinical staff before launch.' },
  ] : [
    { icon: 'ti-affiliate', title: 'ข้อมูลผู้ป่วยกระจายอยู่หลายระบบ', desc: 'ผู้ป่วยคนหนึ่งอาจมีประวัติอยู่ในระบบ HIS ของโรงพยาบาล ระบบแล็บ เครือคลินิก และพอร์ทัลของบริษัทประกัน แต่ละที่ใช้รหัสและรูปแบบข้อมูลของตัวเอง หมอจึงต้องถามซ้ำหรือสั่งตรวจซ้ำเพราะมองไม่เห็นภาพรวม เราเริ่มจากทำแผนผังข้อมูลก่อน แล้วเชื่อมระบบผ่าน HL7 FHIR หรือ API ธรรมดา เพื่อให้ข้อมูลที่ถูกต้องไปถึงหน้าจอที่ต้องใช้' },
    { icon: 'ti-scale', title: 'กฎหมายข้อมูลสุขภาพ', desc: 'ภายใต้ PDPA ข้อมูลสุขภาพถือเป็นข้อมูลส่วนบุคคลที่อ่อนไหว ต้องขอความยินยอมอย่างชัดเจน คุมสิทธิ์เข้าถึงให้รัดกุม และบอกได้ว่าใช้เพื่ออะไร โรงพยาบาลและคลินิกยังมีระเบียบเรื่องการเก็บเวชระเบียนและใครเปิดแฟ้มได้อีกชั้นหนึ่ง เราใส่การกำหนดสิทธิ์ตามบทบาท บันทึกความยินยอม และ Log การเข้าถึงไว้ในตัวระบบ และช่วยทำเอกสารให้เจ้าหน้าที่คุ้มครองข้อมูลของคุณใช้ต่อได้' },
    { icon: 'ti-heart-handshake', title: 'ประสบการณ์ของผู้ป่วย', desc: 'คนไข้อยากนัดหมอ ดูผลแล็บ และถามพยาบาลโดยไม่ต้องรอสายโทรศัพท์ และหลายคนก็จ่ายเงินช้อปปิ้งผ่าน LINE หรือแอปกันเป็นปกติอยู่แล้ว แต่พอร์ทัลของโรงพยาบาลส่วนใหญ่ยังห่างจากระดับนั้นมาก เราออกแบบเป็นภาษาไทย ตัวอักษรใหญ่ ใช้คำเข้าใจง่าย เพราะผู้ใช้มีทั้งผู้สูงอายุและญาติที่ช่วยดูแลแทน' },
    { icon: 'ti-shield-lock', title: 'ความปลอดภัยของระบบสุขภาพ', desc: 'เวชระเบียนมีค่ากับคนร้าย และ Ransomware ที่ทำให้ระบบโรงพยาบาลใช้ไม่ได้อาจทำให้ผ่าตัดหรือจ่ายยาล่าช้า ไม่ใช่แค่ข้อมูลรั่ว ระบบคลินิกหลายตัวยังใช้ซอฟต์แวร์เก่าที่อัปเดตยาก เราแยกเครือข่าย เข้ารหัสข้อมูลทั้งตอนเก็บและตอนส่ง ทำ Backup ที่ทดสอบกู้คืนจริง และตกลงขั้นตอนตอนระบบล่มกับบุคลากรทางการแพทย์ก่อนเปิดใช้' },
  ]

  const metrics = [
    { value: '$286B', label: isEN ? 'Global Telehealth Market by 2030' : 'ขนาดตลาด Telehealth ทั่วโลกภายในปี 2030', source: 'Grand View Research, 2024' },
    { value: '$45.2B', label: isEN ? 'Healthcare AI Market Size by 2028' : 'ขนาดตลาด Healthcare AI ภายในปี 2028', source: 'Statista Health AI Report, 2024' },
    { value: '73%', label: isEN ? 'Patients Actively Using Digital Health Portals' : 'ผู้ป่วยที่ใช้ Digital Health Portal เป็นประจำ', source: 'ONC Health IT Dashboard, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-stethoscope', title: 'Telemedicine Platforms', desc: 'Video consultation, appointment booking, e-prescription and visit notes in one flow, for clinics and hospitals that want follow-up visits to happen from home. Patients join from a phone with no app install, and doctors see the chart beside the video. We connect payment and insurance steps so the front desk does not re-key anything.' },
    { icon: 'ti-clipboard-plus', title: 'EHR Integration Solutions', desc: 'An integration layer built on HL7 FHIR and standard APIs that lets a hospital information system, lab, imaging and pharmacy exchange data. It suits hospital groups and health-tech teams that run several systems from different vendors. You get documented interfaces, data mapping and monitoring that tells you when a message fails.' },
    { icon: 'ti-heartbeat', title: 'Clinical Analytics Platforms', desc: 'Dashboards that show patient flow, readmissions, lab turnaround or the patients most likely to need follow-up, and models that point to them. Clinicians and quality teams use them to spot patterns they would never find by scrolling through charts. We agree with your doctors how each number is defined, and every prediction shows the data behind it.' },
    { icon: 'ti-user', title: 'Patient Engagement Portals', desc: 'A patient app or LINE-connected portal for booking, reminders, lab results, medication lists and secure messages to the care team. It reduces phone calls to the front desk and missed appointments. We test it with older users and non-technical staff before it goes live.' },
    { icon: 'ti-activity', title: 'Remote Patient Monitoring', desc: 'A platform that collects readings such as blood pressure, glucose or heart rate from home devices and wearables and alerts a nurse when a value crosses an agreed limit. It is useful for chronic-disease programmes and post-discharge follow-up. Thresholds are set by your clinicians, and we design for missing or noisy readings.' },
    { icon: 'ti-file-invoice', title: 'Billing & Insurance Workflows', desc: 'Tools that prepare claims, check coverage and track payment status across self-pay, insurer and government-scheme patients. Billing teams spend less time re-keying and chasing rejections. We model your actual rejection reasons so the system can catch them before submission.' },
  ] : [
    { icon: 'ti-stethoscope', title: 'Telemedicine Platforms', desc: 'ปรึกษาแพทย์ผ่านวิดีโอ นัดหมาย สั่งยาอิเล็กทรอนิกส์ และบันทึกการตรวจ รวมอยู่ในขั้นตอนเดียว สำหรับคลินิกและโรงพยาบาลที่อยากให้การติดตามอาการทำได้จากที่บ้าน คนไข้เข้าร่วมจากมือถือได้โดยไม่ต้องติดตั้งแอป และหมอเห็นแฟ้มข้างวิดีโอ เราเชื่อมขั้นตอนการจ่ายเงินและประกัน เพื่อให้เจ้าหน้าที่ไม่ต้องคีย์ข้อมูลซ้ำ' },
    { icon: 'ti-clipboard-plus', title: 'EHR Integration Solutions', desc: 'ชั้นเชื่อมต่อที่สร้างบน HL7 FHIR และ API มาตรฐาน ให้ระบบ HIS แล็บ ภาพถ่ายทางการแพทย์ และเภสัชกรรม แลกเปลี่ยนข้อมูลกันได้ เหมาะกับกลุ่มโรงพยาบาลและทีม Health-tech ที่ใช้หลายระบบจากหลายผู้ผลิต คุณจะได้อินเทอร์เฟซที่มีเอกสาร การแมปข้อมูล และระบบเฝ้าดูที่บอกเมื่อข้อความส่งไม่สำเร็จ' },
    { icon: 'ti-heartbeat', title: 'Clinical Analytics Platforms', desc: 'Dashboard ที่แสดงการไหลของผู้ป่วย การกลับมานอนซ้ำ เวลารอผลแล็บ หรือผู้ป่วยที่มีแนวโน้มต้องติดตามต่อ พร้อมโมเดลที่ช่วยชี้เป้า แพทย์และทีมคุณภาพใช้เห็นรูปแบบที่ไล่เปิดแฟ้มเองไม่มีทางเจอ เราตกลงกับแพทย์ของคุณก่อนว่าตัวเลขแต่ละตัวนิยามอย่างไร และทุกคำทำนายแสดงข้อมูลที่ใช้อ้างอิงเสมอ' },
    { icon: 'ti-user', title: 'Patient Engagement Portals', desc: 'แอปหรือพอร์ทัลที่เชื่อมกับ LINE สำหรับนัดหมาย แจ้งเตือน ดูผลแล็บ รายการยา และส่งข้อความถึงทีมดูแลอย่างปลอดภัย ช่วยลดสายโทรเข้าที่เคาน์เตอร์และการผิดนัด เราทดสอบกับผู้ใช้สูงอายุและเจ้าหน้าที่ที่ไม่ถนัดเทคโนโลยีก่อนเปิดใช้จริง' },
    { icon: 'ti-activity', title: 'Remote Patient Monitoring', desc: 'แพลตฟอร์มที่เก็บค่าอย่างความดัน น้ำตาล หรืออัตราการเต้นของหัวใจ จากอุปกรณ์ที่บ้านและ Wearable แล้วแจ้งพยาบาลเมื่อค่าเกินเกณฑ์ที่ตกลงกัน มีประโยชน์กับโครงการดูแลโรคเรื้อรังและการติดตามหลังออกจากโรงพยาบาล เกณฑ์ตั้งโดยแพทย์ของคุณ และเราออกแบบให้รับมือกับค่าที่ขาดหรือมีสัญญาณรบกวนได้' },
    { icon: 'ti-file-invoice', title: 'ระบบเบิกจ่ายและประกัน', desc: 'เครื่องมือเตรียมเอกสารเคลม ตรวจความคุ้มครอง และติดตามสถานะการจ่ายเงิน ทั้งผู้ป่วยจ่ายเอง ผู้ป่วยประกัน และผู้ป่วยตามสิทธิ์ของรัฐ ทีมการเงินใช้เวลาคีย์ซ้ำและตามเคลมที่ถูกตีกลับน้อยลง เราเอาเหตุผลที่ถูกตีกลับจริงของคุณมาสร้างเป็นกฎ เพื่อให้ระบบจับได้ก่อนส่งเบิก' },
  ]

  const techStack = ['React', 'React Native', 'FHIR', 'HL7', 'AWS HealthLake', 'HIPAA', 'Python', 'TensorFlow', 'IoT', 'WebRTC', 'PostgreSQL', 'Redis', 'NestJS', 'Flutter']

  const useCases = isEN ? [
    { no: '01', title: 'Telemedicine Platform', desc: 'A virtual care service for a clinic or hospital, covering booking, video visits, e-prescriptions, visit notes and payment. We deliver the patient app or web page, a clinician workspace and the connection to your records system. The first release is usually limited to one specialty so staff can adjust before wider rollout.' },
    { no: '02', title: 'Clinical Decision Support Tool', desc: 'A tool that gathers a patient\'s history, labs and current medication in one view and raises prompts for the doctor to consider, such as a possible drug interaction. It supports the clinician and never replaces their decision. Every prompt shows its source, and your medical team reviews the rules before they go live.' },
    { no: '03', title: 'Remote Patient Monitoring', desc: 'A monitoring programme for patients with long-term conditions, using home devices and a patient app. Nurses get a prioritised list of who needs attention today, and patients get simple reminders in Thai. We set it up for one condition first, such as hypertension, then add others.' },
  ] : [
    { no: '01', title: 'แพลตฟอร์ม Telemedicine', desc: 'บริการ Virtual Care สำหรับคลินิกหรือโรงพยาบาล ตั้งแต่นัดหมาย พบแพทย์ผ่านวิดีโอ สั่งยาอิเล็กทรอนิกส์ บันทึกการตรวจ ไปจนถึงชำระเงิน เราส่งมอบแอปหรือหน้าเว็บสำหรับคนไข้ พื้นที่ทำงานของแพทย์ และการเชื่อมกับระบบเวชระเบียนของคุณ รุ่นแรกมักจำกัดไว้ที่แผนกเดียว เพื่อให้เจ้าหน้าที่ปรับตัวก่อนขยาย' },
    { no: '02', title: 'เครื่องมือช่วยการตัดสินใจทางคลินิก', desc: 'เครื่องมือที่รวมประวัติ ผลแล็บ และยาที่ใช้อยู่ของผู้ป่วยไว้ในหน้าเดียว แล้วเตือนให้แพทย์พิจารณา เช่น ยาที่อาจตีกัน เป็นตัวช่วยของแพทย์ ไม่ได้มาแทนการตัดสินใจ ทุกคำเตือนระบุแหล่งที่มา และทีมแพทย์ของคุณตรวจกฎก่อนเปิดใช้จริง' },
    { no: '03', title: 'ติดตามผู้ป่วยทางไกล', desc: 'โครงการติดตามผู้ป่วยโรคเรื้อรังด้วยอุปกรณ์ที่บ้านและแอปสำหรับคนไข้ พยาบาลจะได้รายชื่อที่จัดลำดับว่าวันนี้ใครต้องดูเป็นพิเศษ ส่วนคนไข้ได้รับการเตือนง่ายๆ เป็นภาษาไทย เราเริ่มจากโรคเดียวก่อน เช่น ความดันโลหิตสูง แล้วค่อยเพิ่มโรคอื่น' },
  ]

  const heroVisual = <IndustryHero kind="healthcare" isEN={isEN} />

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
                  {isEN ? 'Healthcare &' : 'สุขภาพและ'}<br />{isEN ? 'Life Sciences' : 'วิทยาศาสตร์ชีวภาพ'}
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
                  ? 'We work with hospitals, clinics, health-tech start-ups and pharmaceutical teams on telemedicine, system integration, patient apps and monitoring tools. Every project begins with a walk through the clinical workflow with the people who use it, because a screen that is correct on paper can still slow down a ward. Health data is sensitive under PDPA, so consent, access control and audit logs are designed in from the first sprint, and we speak HL7 FHIR when your systems need to exchange records.'
                  : 'เราทำงานกับโรงพยาบาล คลินิก สตาร์ทอัพ Health-tech และทีมบริษัทยา ในงาน Telemedicine การเชื่อมระบบ แอปสำหรับผู้ป่วย และเครื่องมือติดตามอาการ ทุกโปรเจกต์เริ่มจากเดินดูขั้นตอนการทำงานทางคลินิกกับคนที่ใช้งานจริง เพราะหน้าจอที่ถูกต้องบนกระดาษก็ยังทำให้งานบนวอร์ดช้าลงได้ ข้อมูลสุขภาพเป็นข้อมูลอ่อนไหวตาม PDPA เราจึงออกแบบเรื่องความยินยอม การคุมสิทธิ์ และ Audit Log ตั้งแต่สปรินต์แรก และใช้ HL7 FHIR เมื่อระบบของคุณต้องแลกเปลี่ยนเวชระเบียนกัน'}
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
