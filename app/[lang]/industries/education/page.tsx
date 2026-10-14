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
  const title = isEN ? "Education Software & Digital Solutions | Haliviq" : "การศึกษา | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Learning technology for schools, universities, training providers and EdTech startups: LMS, virtual classrooms, adaptive learning, assessment and analytics…"
    : "เทคโนโลยีการเรียนรู้สำหรับโรงเรียน มหาวิทยาลัย ศูนย์ฝึกอบรม และสตาร์ทอัพ EdTech ตั้งแต่ LMS ห้องเรียนออนไลน์ ระบบเรียนรู้ที่ปรับตามผู้เรียน…"
  const url = `https://www.haliviq.com/${params.lang}/industries/education`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Education' : 'อุตสาหกรรม / การศึกษา'
  const heroSubhead = isEN
    ? 'Learning technology for schools, universities, training providers and EdTech startups: LMS, virtual classrooms, adaptive learning, assessment and analytics, built to hold up at real classroom scale.'
    : 'เทคโนโลยีการเรียนรู้สำหรับโรงเรียน มหาวิทยาลัย ศูนย์ฝึกอบรม และสตาร์ทอัพ EdTech ตั้งแต่ LMS ห้องเรียนออนไลน์ ระบบเรียนรู้ที่ปรับตามผู้เรียน ไปจนถึงระบบวัดผลและวิเคราะห์ข้อมูล ที่ใช้งานจริงได้เมื่อมีผู้เรียนจำนวนมาก'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Digital Access Divide', desc: 'Learners do not all have the same devices, data plans or digital skills, and a platform designed for fast laptops leaves some of them behind. Rural schools and low-income households feel this most. We design for small screens, low bandwidth and offline access, and keep the interface simple enough for first-time users.' },
    { icon: 'ti-mood-sad', title: 'Engagement & Retention', desc: 'Keeping learners motivated is much harder online or in a blended course, where nobody notices when someone quietly stops logging in. Completion rates drop when lessons are long, feedback is slow and progress is invisible. We add short lessons, quick feedback, progress that learners can see, and early alerts when someone falls behind.' },
    { icon: 'ti-stack-2', title: 'Content Scalability', desc: 'Writing, translating and updating good learning content strains even well-staffed teams, especially when the same course exists in Thai and English and in several versions. Content ends up in slide decks, shared drives and different tools. We set up authoring, review and versioning in one place so updates reach every class.' },
    { icon: 'ti-shield-check', title: 'Assessment Integrity', desc: 'Fair assessment in remote and hybrid settings needs more than a camera and a timer. Question banks leak, answers get shared, and teachers lose hours on marking. We build question banks with randomisation, sensible proctoring options, and grading tools that save teachers time while keeping the results defensible.' },
  ] : [
    { icon: 'ti-affiliate', title: 'ช่องว่างในการเข้าถึงดิจิทัล', desc: 'ผู้เรียนแต่ละคนมีอุปกรณ์ แพ็กเกจเน็ต และทักษะดิจิทัลไม่เท่ากัน แพลตฟอร์มที่ออกแบบมาสำหรับโน้ตบุ๊กแรงๆ จึงทิ้งบางคนไว้ข้างหลัง โรงเรียนในต่างจังหวัดและครอบครัวรายได้น้อยจะรู้สึกมากที่สุด เราออกแบบให้ใช้ได้บนจอเล็ก เน็ตช้า และเปิดเรียนแบบออฟไลน์ได้ พร้อมทำหน้าจอให้ง่ายพอสำหรับคนที่ใช้ครั้งแรก' },
    { icon: 'ti-mood-sad', title: 'ทำให้ผู้เรียนมีส่วนร่วมและไม่เลิกกลางคัน', desc: 'การรักษาแรงจูงใจของผู้เรียนยากกว่ามากในคอร์สออนไลน์หรือแบบผสม เพราะไม่มีใครสังเกตเห็นเมื่อมีคนเงียบๆ เลิกล็อกอินไป อัตราเรียนจบจะตกเมื่อบทเรียนยาว ฟีดแบ็กช้า และมองไม่เห็นความคืบหน้า เราเพิ่มบทเรียนสั้นๆ ฟีดแบ็กที่เร็ว ความคืบหน้าที่ผู้เรียนเห็นเอง และแจ้งเตือนล่วงหน้าเมื่อมีใครเริ่มตามไม่ทัน' },
    { icon: 'ti-stack-2', title: 'สร้างและดูแลเนื้อหาจำนวนมาก', desc: 'การเขียน แปล และอัปเดตเนื้อหาที่ดีเป็นภาระหนักแม้ทีมจะใหญ่ โดยเฉพาะเมื่อคอร์สเดียวมีทั้งฉบับไทยและอังกฤษ และหลายเวอร์ชัน เนื้อหามักกระจายอยู่ในไฟล์สไลด์ ไดรฟ์แชร์ และเครื่องมือหลายตัว เราตั้งระบบเขียน ตรวจ และจัดเวอร์ชันไว้ที่เดียว เพื่อให้เนื้อหาที่อัปเดตไปถึงทุกห้องเรียน' },
    { icon: 'ti-shield-check', title: 'ความน่าเชื่อถือของการวัดผล', desc: 'การวัดผลที่เป็นธรรมในการเรียนทางไกลหรือแบบผสมต้องมากกว่ากล้องกับนาฬิกาจับเวลา ข้อสอบรั่ว คำตอบถูกแชร์ และครูเสียเวลาตรวจเป็นชั่วโมง เราสร้างคลังข้อสอบที่สุ่มลำดับได้ ตัวเลือกการคุมสอบที่เหมาะสม และเครื่องมือตรวจที่ช่วยประหยัดเวลาครู โดยผลที่ออกมายังอธิบายและยืนยันได้' },
  ]

  const metrics = [
    { value: '$400B', label: isEN ? 'Global EdTech Market Size by 2028' : 'ขนาดตลาด EdTech ทั่วโลกภายในปี 2028', source: 'HolonIQ, 2024' },
    { value: '12%', label: isEN ? 'Annual Growth Rate of Online Learning Enrollment' : 'อัตราการเติบโตต่อปีของผู้เรียนออนไลน์', source: 'UNESCO, 2024' },
    { value: '60%', label: isEN ? 'Educational Institutions Planning AI Integration by 2027' : 'สถาบันการศึกษาที่วางแผนใช้ AI ภายในปี 2027', source: 'EDUCAUSE, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-book', title: 'Learning Management Systems', desc: 'A full LMS for delivering courses, tracking progress and issuing certificates. Administrators manage classes, cohorts and enrolments, teachers build lessons and quizzes, and learners pick up where they stopped on any device. It connects to your student records, single sign-on and payment tools, and can import existing SCORM content.' },
    { icon: 'ti-device-gamepad-2', title: 'Interactive Learning Experiences', desc: 'Gamified lessons, simulations and adaptive content that keep learners working instead of just watching. Exercises respond to what the learner does, hints appear when they get stuck, and harder material unlocks as they improve. We design these with teachers so the activities support the learning goal rather than distract from it.' },
    { icon: 'ti-chart-dots-3', title: 'Analytics & Assessment Tools', desc: 'Dashboards and reports showing learner progress, assessment results and early signs that a student is at risk. Teachers see which topics a class struggled with, and programme leads see trends across cohorts. Data is shown in plain language with clear privacy controls for student information.' },
    { icon: 'ti-video', title: 'Virtual Classroom Platforms', desc: 'Live video classes with breakout rooms, a shared whiteboard, polls, chat and recordings, designed for real teaching rather than generic meetings. Teachers can hand out work in the session and see who has finished. Sessions are tuned for unreliable home connections, with audio prioritised over video when bandwidth drops.' },
    { icon: 'ti-folders', title: 'Educational Content Management', desc: 'Authoring and publishing tools for lessons, videos and documents, with review steps, version history and translation workflows. Teams reuse blocks across courses, and a change to one lesson reaches every class that uses it. Content can be exported in standard formats so you keep ownership.' },
    { icon: 'ti-device-mobile', title: 'Mobile Learning Apps', desc: 'Native or cross-platform apps that let learners study in short sessions during the day, with offline downloads, push reminders and progress that syncs back to the LMS. Parents and teachers can follow along where that suits your school. We build them in React Native or with native SDKs depending on your needs.' },
  ] : [
    { icon: 'ti-book', title: 'ระบบจัดการการเรียนรู้ (LMS)', desc: 'LMS ครบชุดสำหรับสอนคอร์ส ติดตามความคืบหน้า และออกใบประกาศนียบัตร แอดมินจัดการชั้นเรียน กลุ่มผู้เรียน และการลงทะเบียน ครูสร้างบทเรียนและแบบทดสอบ ผู้เรียนเรียนต่อจากจุดที่ค้างไว้ได้ทุกอุปกรณ์ เชื่อมกับระบบทะเบียนนักเรียน Single Sign-on และระบบชำระเงินที่ใช้อยู่ และนำเนื้อหา SCORM เดิมเข้ามาใช้ได้' },
    { icon: 'ti-device-gamepad-2', title: 'ประสบการณ์เรียนแบบโต้ตอบ', desc: 'บทเรียนแบบเกม การจำลองสถานการณ์ และเนื้อหาที่ปรับตามผู้เรียน ที่ทำให้ผู้เรียนได้ลงมือทำจริงแทนการนั่งดูเฉยๆ แบบฝึกหัดตอบสนองตามที่ผู้เรียนทำ มีคำใบ้เมื่อติด และเนื้อหายากขึ้นเมื่อทำได้ดีขึ้น เราออกแบบร่วมกับครู เพื่อให้กิจกรรมช่วยให้ถึงเป้าหมายการเรียนรู้ ไม่ใช่แค่ทำให้ตื่นเต้น' },
    { icon: 'ti-chart-dots-3', title: 'เครื่องมือวัดผลและวิเคราะห์', desc: 'แดชบอร์ดและรายงานที่แสดงความคืบหน้าของผู้เรียน ผลการวัดผล และสัญญาณเริ่มต้นว่านักเรียนคนไหนมีความเสี่ยง ครูเห็นว่าห้องเรียนติดหัวข้อไหน และผู้บริหารหลักสูตรเห็นแนวโน้มข้ามกลุ่มผู้เรียน ข้อมูลแสดงเป็นภาษาที่เข้าใจง่าย พร้อมการควบคุมความเป็นส่วนตัวของข้อมูลนักเรียนอย่างชัดเจน' },
    { icon: 'ti-video', title: 'แพลตฟอร์มห้องเรียนออนไลน์', desc: 'คลาสเรียนสดผ่านวิดีโอ มีห้องย่อย กระดานไวต์บอร์ดร่วม โพล แชต และบันทึกการสอน ออกแบบมาสำหรับการสอนจริงมากกว่าการประชุมทั่วไป ครูแจกงานระหว่างคลาสและดูได้ว่าใครทำเสร็จแล้ว ปรับให้ทนต่ออินเทอร์เน็ตที่บ้านไม่เสถียร โดยให้เสียงมาก่อนภาพเมื่อสัญญาณตก' },
    { icon: 'ti-folders', title: 'ระบบจัดการเนื้อหาการเรียนรู้', desc: 'เครื่องมือเขียนและเผยแพร่บทเรียน วิดีโอ และเอกสาร พร้อมขั้นตอนตรวจ ประวัติเวอร์ชัน และกระบวนการแปล ทีมนำส่วนประกอบมาใช้ซ้ำข้ามคอร์สได้ และการแก้บทเรียนหนึ่งจะไปถึงทุกคลาสที่ใช้บทเรียนนั้น ส่งออกเนื้อหาในรูปแบบมาตรฐานได้ คุณจึงยังเป็นเจ้าของเนื้อหาของคุณเอง' },
    { icon: 'ti-device-mobile', title: 'แอปเรียนบนมือถือ', desc: 'แอป Native หรือ Cross-platform ที่ให้ผู้เรียนเรียนเป็นช่วงสั้นๆ ระหว่างวัน มีดาวน์โหลดไว้เรียนออฟไลน์ แจ้งเตือนผ่านมือถือ และซิงก์ความคืบหน้ากลับเข้า LMS ผู้ปกครองและครูติดตามได้ถ้าโรงเรียนของคุณต้องการ เราสร้างด้วย React Native หรือ Native SDK ตามความเหมาะสมกับงานของคุณ' },
  ]

  const techStack = ['React', 'WebRTC', 'Canvas API', 'WebSocket', 'AI/ML', 'Cloud Platforms', 'Mobile SDKs', 'LTI', 'SCORM', 'xAPI', 'Flutter', 'Vue']

  const useCases = isEN ? [
    { no: '01', title: 'Adaptive Learning Platform', desc: 'AI adjusts difficulty, pace and content format to each learner\'s progress and preferences. A student who masters a topic moves on, and one who struggles gets extra practice and a different explanation. Teachers keep control and can see why the system made each recommendation.' },
    { no: '02', title: 'Virtual Classroom Solution', desc: 'Live video, interactive whiteboards, breakout rooms, polling and session recording in one place. Teachers run a lesson, then share the recording and follow-up tasks automatically with learners who were absent. It fits schools, tutoring centres and corporate training teams alike.' },
    { no: '03', title: 'Student Analytics Dashboard', desc: 'Real-time engagement, performance and at-risk indicators that help teachers step in early. A teacher can open one screen, see who has not logged in this week and who is stuck on the same topic, and message them directly. Administrators view anonymised trends to improve the programme.' },
  ] : [
    { no: '01', title: 'แพลตฟอร์มเรียนรู้ที่ปรับตามผู้เรียน', desc: 'AI ปรับระดับความยาก จังหวะ และรูปแบบเนื้อหาตามความก้าวหน้าและความชอบของผู้เรียนแต่ละคน คนที่เข้าใจแล้วก็ไปต่อ ส่วนคนที่ติดจะได้ฝึกเพิ่มและได้คำอธิบายอีกแบบ ครูยังควบคุมได้เองและดูได้ว่าทำไมระบบถึงแนะนำแบบนั้น' },
    { no: '02', title: 'ห้องเรียนออนไลน์', desc: 'วิดีโอสด ไวต์บอร์ดแบบโต้ตอบ ห้องย่อย โพล และบันทึกคลาส รวมอยู่ในที่เดียว ครูสอนจบแล้วระบบส่งวิดีโอย้อนหลังและงานต่อเนื่องให้คนที่ขาดเรียนโดยอัตโนมัติ เหมาะกับทั้งโรงเรียน สถาบันกวดวิชา และทีมฝึกอบรมในองค์กร' },
    { no: '03', title: 'แดชบอร์ดวิเคราะห์ผู้เรียน', desc: 'ตัวชี้วัดการมีส่วนร่วม ผลการเรียน และผู้เรียนที่เสี่ยง แบบเรียลไทม์ ช่วยให้ครูเข้าไปช่วยได้ทันเวลา ครูเปิดหน้าเดียวก็เห็นว่าสัปดาห์นี้ใครยังไม่ล็อกอิน ใครติดหัวข้อเดิม และส่งข้อความถึงคนนั้นได้ทันที ฝ่ายบริหารดูแนวโน้มแบบไม่ระบุตัวตนเพื่อพัฒนาหลักสูตร' },
  ]

  const heroVisual = <IndustryHero kind="education" isEN={isEN} />

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
                  {isEN ? 'Education' : 'การศึกษา'}
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
                  ? 'A learning platform has to work on the cheap laptop at home, the shared tablet in a classroom and the phone on a bus, and it has to keep working when a whole cohort logs in at once for an exam. We help schools, universities, training companies and EdTech startups build learning management systems, virtual classrooms, AI tutors, adaptive lessons and learning analytics that hold up under that load, not just in a demo. Our designs take Thai-language content, mixed device quality and uneven home internet into account, and follow open standards such as LTI, SCORM and xAPI so you are not locked into one vendor. We sit down with teachers and learners early, because the platform succeeds only if people actually use it every week.'
                  : 'แพลตฟอร์มการเรียนรู้ต้องใช้ได้ทั้งบนโน้ตบุ๊กราคาประหยัดที่บ้าน แท็บเล็ตที่ใช้ร่วมกันในห้องเรียน และมือถือระหว่างนั่งรถ และต้องไม่ล่มตอนที่ผู้เรียนทั้งรุ่นล็อกอินพร้อมกันเพื่อสอบ เราช่วยโรงเรียน มหาวิทยาลัย บริษัทฝึกอบรม และสตาร์ทอัพ EdTech สร้างระบบ LMS ห้องเรียนออนไลน์ AI ติวเตอร์ บทเรียนที่ปรับตามผู้เรียน และระบบวิเคราะห์การเรียนรู้ ที่รับโหลดจริงได้ ไม่ใช่แค่ใช้ได้ตอนเดโม เราออกแบบโดยคำนึงถึงเนื้อหาภาษาไทย อุปกรณ์ที่คุณภาพต่างกัน และอินเทอร์เน็ตที่บ้านไม่เท่ากัน และใช้มาตรฐานเปิดอย่าง LTI, SCORM และ xAPI คุณจึงไม่ต้องผูกติดกับผู้ให้บริการรายเดียว เราจะนั่งคุยกับครูและผู้เรียนตั้งแต่ช่วงแรก เพราะแพลตฟอร์มจะสำเร็จก็ต่อเมื่อคนใช้งานกันทุกสัปดาห์จริงๆ'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'What Education Providers Are Up Against' : 'สิ่งที่สถาบันการศึกษาต้องเจอ'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Building for education means solving problems no generic software vendor has to think about.'
                : 'การทำซอฟต์แวร์เพื่อการศึกษาต้องแก้ปัญหาที่ผู้ขายซอฟต์แวร์ทั่วไปไม่ต้องเจอ'}
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
              {isEN ? 'Everything needed to build a modern education platform, end to end.' : 'ทุกอย่างที่ต้องใช้สร้างแพลตฟอร์มการศึกษายุคใหม่'}
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
                ? 'Proven tools and frameworks chosen for reliability at classroom scale.'
                : 'เครื่องมือและ Framework ที่เชื่อถือได้ ใช้งานจริงในระดับห้องเรียนได้'}
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
              {isEN ? 'What We Build for Education' : 'สิ่งที่เราสร้างให้วงการการศึกษา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Real systems shipped for real learners, not proof-of-concept demos.' : 'ระบบที่ใช้งานจริงกับผู้เรียนจริง ไม่ใช่แค่ Proof of Concept'}
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
