import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { CultureArt, OfficeArt, ActivityArt, WorkspaceArt, DrinksArt, HackathonArt } from '@/components/CareersArt'
import { alt } from '@/lib/seo'

const openings = [
  { dept: 'Engineering', color: 'var(--purple)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Senior Frontend Engineer', type: 'Full-time', level: 'Senior', skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { title: 'Backend Engineer (Node.js)', type: 'Full-time', level: 'Mid-Senior', skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'] },
    { title: 'Mobile Developer (React Native)', type: 'Full-time', level: 'Mid', skills: ['React Native', 'iOS', 'Android', 'TypeScript'] },
    { title: 'DevOps / Cloud Engineer', type: 'Full-time', level: 'Senior', skills: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform'] },
  ]},
  { dept: 'Design', color: 'var(--accent)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Senior UX/UI Designer', type: 'Full-time', level: 'Senior', skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'] },
    { title: 'Product Designer', type: 'Full-time', level: 'Mid', skills: ['Figma', 'UX Strategy', 'Interaction Design', 'Usability Testing'] },
    { title: 'Motion Designer', type: 'Full-time', level: 'Mid', skills: ['After Effects', 'Lottie', 'Figma', 'CSS Animation'] },
  ]},
  { dept: 'Strategy & Product', color: 'var(--purple)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Product Manager', type: 'Full-time', level: 'Senior', skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Stakeholder Management'] },
    { title: 'Business Analyst / Consultant', type: 'Full-time', level: 'Mid-Senior', skills: ['Requirements Gathering', 'Process Analysis', 'SQL', 'Presentation'] },
    { title: 'AI/ML Engineer', type: 'Full-time', level: 'Senior', skills: ['Python', 'LLM', 'MLOps', 'TensorFlow/PyTorch'] },
  ]},
  { dept: 'Project Management', color: 'var(--accent)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Technical Project Manager', type: 'Full-time', level: 'Senior', skills: ['Agile/Scrum', 'JIRA', 'Risk Management', 'Client Communication'] },
    { title: 'Scrum Master', type: 'Full-time', level: 'Mid', skills: ['Scrum', 'Kanban', 'Facilitation', 'Agile Coaching'] },
  ]},
]

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Careers at Haliviq | AI & Design Jobs in Bangkok' : 'ร่วมงานกับ Haliviq | งานสาย AI และ Design กรุงเทพฯ'
  const description = isEN
    ? 'Join Haliviq in Bangkok and help build the intelligent future. Open roles in AI, design, engineering, product and project management, with hybrid work and a clear hiring process.'
    : 'ร่วมสร้างอนาคตที่ฉลาดขึ้นกับ Haliviq ที่กรุงเทพฯ ดูตำแหน่งงานสาย AI, Design, Engineering, Product และ Project Management พร้อมสวัสดิการ ทำงานแบบไฮบริด และขั้นตอนสมัครงานที่ชัดเจน'
  const url = `https://www.haliviq.com/${params.lang}/careers`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const benefits = isEN ? [
    { icon: 'ti-home-2', title: 'Hybrid Work', desc: 'Work remotely 3 days a week, so you do not have to be in the office every day. Use the days at home for focused work and the office days for workshops, reviews and time with the team.' },
    { icon: 'ti-clock', title: 'Flexible Hours', desc: 'Core hours are 10:00–16:00, which is when we schedule meetings and reviews. Outside that window you organize your own day, whether that means an early start or a long lunch.' },
    { icon: 'ti-school', title: 'Learning Budget', desc: 'THB 20,000 a year for your own learning. Spend it on courses, conference tickets or books that are relevant to your craft; you pick what is useful to you.' },
    { icon: 'ti-heart', title: 'Health Insurance', desc: 'Private health insurance covering both inpatient (IPD) and outpatient (OPD) care, active from your first day.' },
    { icon: 'ti-airplane', title: 'Vacation', desc: '15 days of annual leave a year, on top of all public holidays, so you have real time to rest and plan trips.' },
    { icon: 'ti-device-laptop', title: 'Work Equipment', desc: 'You get a MacBook Pro, a monitor and an ergonomic chair, so you can work comfortably on day one without buying your own kit.' },
    { icon: 'ti-trophy', title: 'Performance Bonus', desc: 'An annual bonus based on both your individual performance and how the company does that year.' },
    { icon: 'ti-users', title: 'Team Activities', desc: 'Team outings, hackathons and Friday drinks every month. They are a relaxed way to get to know people outside of project work.' },
  ] : [
    { icon: 'ti-home-2', title: 'ทำงานแบบไฮบริด', desc: 'ทำงานจากที่บ้านได้ 3 วันต่อสัปดาห์ ไม่ต้องเข้าออฟฟิศทุกวัน วันที่อยู่บ้านใช้โฟกัสกับงาน ส่วนวันที่เข้าออฟฟิศก็ใช้ทำเวิร์กช็อป รีวิวงาน และใช้เวลากับทีม' },
    { icon: 'ti-clock', title: 'เวลาทำงานยืดหยุ่น', desc: 'ช่วงเวลาหลักคือ 10.00–16.00 น. ซึ่งเป็นช่วงที่เรานัดประชุมและรีวิวงานกัน นอกเหนือจากนั้นจัดเวลาเองได้ จะเริ่มเช้าหรือพักเที่ยงยาวหน่อยก็ได้' },
    { icon: 'ti-school', title: 'งบพัฒนาตัวเอง', desc: 'งบเรียนรู้ 20,000 บาทต่อปี เอาไปใช้กับคอร์สเรียน บัตรงานสัมมนา หรือหนังสือที่เกี่ยวกับสายงานของคุณได้ เลือกเองว่าอะไรมีประโยชน์กับตัวเอง' },
    { icon: 'ti-heart', title: 'ประกันสุขภาพ', desc: 'ประกันสุขภาพเอกชน คุ้มครองทั้งผู้ป่วยใน (IPD) และผู้ป่วยนอก (OPD) เริ่มใช้ได้ตั้งแต่วันแรกที่เข้างาน' },
    { icon: 'ti-airplane', title: 'วันหยุดพักร้อน', desc: 'พักร้อน 15 วันต่อปี และหยุดวันนักขัตฤกษ์ครบด้วย จะได้มีเวลาพักและวางแผนไปเที่ยวจริง ๆ' },
    { icon: 'ti-device-laptop', title: 'อุปกรณ์ทำงาน', desc: 'เราจัดให้ครบ ทั้ง MacBook Pro จอภาพ และเก้าอี้เพื่อสุขภาพ วันแรกก็เริ่มทำงานได้สบาย ไม่ต้องซื้ออุปกรณ์เอง' },
    { icon: 'ti-trophy', title: 'โบนัสประจำปี', desc: 'ได้โบนัสประจำปี คิดจากผลงานของแต่ละคนและผลประกอบการของบริษัทในปีนั้น' },
    { icon: 'ti-users', title: 'กิจกรรมทีม', desc: 'มีทริปกับทีม แฮ็กกาธอน และสังสรรค์วันศุกร์ทุกเดือน เป็นโอกาสทำความรู้จักกันนอกเหนือจากงานโปรเจกต์' },
  ]

  const values = isEN ? [
    { icon: 'ti-rocket', title: 'Ship Fast, Learn Fast', desc: 'We prefer to put a small version in front of real users and improve it, rather than polish in private for months. Experiments are welcome, and a mistake is useful when we write down what we learned from it.' },
    { icon: 'ti-users', title: 'Team Above All', desc: 'No ego here. We win and lose together, and when a teammate is stuck we help first and sort out whose task it was later.' },
    { icon: 'ti-eye', title: 'Craft with Care', desc: 'We take pride in the details, from the spacing on a screen to the clarity of a commit message. We do not ship work we would not be happy to show, and we keep sharpening our skills.' },
    { icon: 'ti-shield', title: 'Honest & Transparent', desc: 'We speak plainly with the team, with clients and with ourselves. If a deadline is at risk or an idea will not work, we say so early. No politics, no hidden information.' },
  ] : [
    { icon: 'ti-rocket', title: 'ลงมือเร็ว เรียนรู้เร็ว', desc: 'เราชอบเอาของเวอร์ชันเล็ก ๆ ไปให้ผู้ใช้จริงลองแล้วปรับต่อ มากกว่านั่งขัดเกลาคนเดียวเป็นเดือน ๆ ใครอยากลองอะไรใหม่ก็ลองได้ ความผิดพลาดมีประโยชน์เมื่อเราจดไว้ว่าได้เรียนรู้อะไรจากมัน' },
    { icon: 'ti-users', title: 'ทีมมาก่อน', desc: 'ที่นี่ไม่มีอีโก้ เราชนะและพลาดไปด้วยกัน ถ้าเพื่อนติดปัญหาเราช่วยกันก่อน แล้วค่อยมาดูทีหลังว่างานนั้นเป็นของใคร' },
    { icon: 'ti-eye', title: 'ใส่ใจในงาน', desc: 'เราใส่ใจในรายละเอียด ตั้งแต่ระยะห่างบนหน้าจอไปจนถึงข้อความ commit ที่อ่านแล้วเข้าใจ งานที่เราเองยังไม่อยากโชว์ เราจะไม่ส่งออกไป และเรายังฝึกฝีมือกันต่อเนื่อง' },
    { icon: 'ti-shield', title: 'ตรงไปตรงมา', desc: 'เราพูดกันตรง ๆ ทั้งกับทีม ลูกค้า และตัวเอง ถ้างานเสี่ยงจะส่งไม่ทันหรือไอเดียไหนใช้ไม่ได้ ก็บอกกันตั้งแต่เนิ่น ๆ ไม่เล่นการเมือง ไม่ปิดบังข้อมูล' },
  ]

  const stats = isEN
    ? [{ n:'40+',l:'Team Members',d:'And growing' },{ n:'8 yrs',l:'Company Age',d:'Founded 2017' },{ n:'120+',l:'Projects',d:'Delivered' },{ n:'4.9★',l:'Glassdoor Score',d:'From real employees' }]
    : [{ n:'40+',l:'คนในทีม',d:'และกำลังเติบโต' },{ n:'8 ปี',l:'อายุบริษัท',d:'ก่อตั้งปี 2017' },{ n:'120+',l:'โปรเจกต์',d:'ส่งมอบแล้ว' },{ n:'4.9★',l:'คะแนน Glassdoor',d:'จากพนักงานจริง' }]

  const steps = isEN ? [
    { no:'01', icon:'ti-mail', title:'Apply', desc:'Send your CV and portfolio to info@haliviq.com, or fill in the form below. A short note about what you want to work on helps us read your CV in context. We reply within 3 business days.', time:'~1 day' },
    { no:'02', icon:'ti-video', title:'Intro Call', desc:'A 30-minute chat with HR so we can get to know each other. We talk about the role, what you are looking for, and what we expect, and you can ask anything about how we work.', time:'~30 min' },
    { no:'03', icon:'ti-code', title:'Technical Round', desc:'A technical interview or a take-home assignment, depending on the role. It is built to show how you really work on a problem, not to catch you out with trick questions.', time:'~1-2 hrs' },
    { no:'04', icon:'ti-users', title:'Team Meet', desc:'You meet the people you would work with every day and can ask them anything. The conversation goes both ways, because you are evaluating us as much as we are evaluating you.', time:'~1 hr' },
  ] : [
    { no:'01', icon:'ti-mail', title:'สมัครงาน', desc:'ส่ง CV และผลงานมาที่ info@haliviq.com หรือกรอกแบบฟอร์มด้านล่าง ถ้าเขียนสั้น ๆ มาด้วยว่าอยากทำงานแบบไหน เราจะอ่าน CV ได้เข้าใจบริบทมากขึ้น เราจะตอบกลับภายใน 3 วันทำการ', time:'~1 วัน' },
    { no:'02', icon:'ti-video', title:'คุยเบื้องต้น', desc:'คุยกับฝ่ายบุคคลประมาณ 30 นาที เพื่อทำความรู้จักกัน เราจะคุยเรื่องตำแหน่ง สิ่งที่คุณมองหา และสิ่งที่เราคาดหวัง และคุณถามเรื่องวิธีทำงานของเราได้เต็มที่', time:'~30 นาที' },
    { no:'03', icon:'ti-code', title:'สัมภาษณ์เชิงเทคนิค', desc:'เป็นการสัมภาษณ์ หรือโจทย์ให้ทำที่บ้าน แล้วแต่ตำแหน่ง ออกแบบมาเพื่อดูว่าคุณคิดและแก้ปัญหาจริง ๆ อย่างไร ไม่ใช่ข้อสอบหลอกให้พลาด', time:'1–2 ชั่วโมง' },
    { no:'04', icon:'ti-users', title:'พบทีม', desc:'ได้พบคนที่จะทำงานด้วยกันทุกวัน ถามได้ทุกเรื่อง คุยกันสองทาง เพราะคุณก็ประเมินเราเหมือนกับที่เราประเมินคุณ', time:'~1 ชั่วโมง' },
  ]

  const ctaTrust = isEN
    ? ['No application fee', 'We reply to every application', 'Feedback given every round']
    : ['ไม่มีค่าสมัคร', 'ตอบกลับทุกใบสมัคร', 'แจ้งผลทุกรอบการสัมภาษณ์']

  const G = { background: 'linear-gradient(135deg,#A99CF8 0%,#7B6EF6 45%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as const
  const card = { background: 'rgb(var(--fg) / 0.035)', border: '1px solid rgb(var(--fg) / 0.1)' } as const
  const muted = { color: 'rgb(var(--fg) / 0.68)', fontWeight: 400 } as const
  const dots = { backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' } as const
  const Tile = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-2xl overflow-hidden ${className}`} style={{ border: '1px solid rgb(var(--fg) / 0.1)' }}>{children}</div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={dots} />
          <div className="absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.3) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'rgba(123,110,246,0.15)', border: '1px solid rgba(123,110,246,0.35)' }}>
                  <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse inline-block" />
                  <span className="t-label" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>{isEN ? 'Now Hiring 12 Positions' : 'กำลังเปิดรับ 12 ตำแหน่ง'}</span>
                </div>
                <h1 className="t-display text-[clamp(3rem,6.5vw,5.6rem)] leading-relaxed mb-8" style={{ color: 'var(--ink)' }}>
                  {isEN ? <>Bring human ideas.<br /><span style={G}>Build the intelligent</span><br />future with us</> : <>เอาความคิดของคนมาเป็นตัวตั้ง<br /><span style={G}>แล้วสร้างอนาคต</span><br />ที่ฉลาดขึ้นด้วยกัน</>}
                </h1>
                <p className="text-lg leading-relaxed mb-10 max-w-lg" style={muted}>
                  {isEN ? 'Human Ideas. Intelligent Future. is how we work at Haliviq. We are a Bangkok studio that puts design and AI side by side: designers shape how a product feels, AI engineers make it smarter, and strategists keep both pointed at a real business problem. Whether you design screens, build AI features, write code or run projects, you will work on real client products from first sketch to launch, and learn from people who care about the craft.' : 'Human Ideas. Intelligent Future. หรือ "ความคิดของคน สู่อนาคตที่ฉลาดขึ้น" คือวิธีที่เราทำงานที่ Haliviq เราเป็นสตูดิโอในกรุงเทพฯ ที่เอางานดีไซน์กับ AI มาไว้ข้างกัน ดีไซเนอร์ดูว่าผลิตภัณฑ์ควรให้ความรู้สึกแบบไหน วิศวกร AI ทำให้มันฉลาดขึ้น ส่วนนักกลยุทธ์คอยดูว่าทั้งสองอย่างยังตอบโจทย์ธุรกิจจริง ไม่ว่าคุณจะออกแบบหน้าจอ สร้างฟีเจอร์ AI เขียนโค้ด หรือดูแลโปรเจกต์ คุณจะได้ทำงานกับลูกค้าจริงตั้งแต่ภาพร่างแรกจนถึงวันเปิดตัว และได้เรียนรู้จากคนที่ใส่ใจงานฝีมือจริง ๆ'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#openings" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                    {isEN ? 'View Open Roles' : 'ดูตำแหน่งงาน'}
                    <i className="ti ti-arrow-down" style={{ fontSize: 15 }} aria-hidden="true" />
                  </a>
                  <a href="mailto:info@haliviq.com" className="inline-flex items-center gap-2 rounded-full transition-colors hover:bg-[rgb(var(--fg)/0.1)]" style={{ fontSize: '1rem', padding: '13px 32px', border: '1.5px solid rgb(var(--fg) / 0.25)', color: 'var(--ink)', fontWeight: 400 }}>
                    {isEN ? 'Send Your CV' : 'ส่ง CV มาก่อน'}
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <Tile className="aspect-[4/5] max-w-[540px] ml-auto relative"><img src="/images/careers/hero.jpg" alt={isEN ? 'Haliviq careers' : 'ร่วมงานกับ Haliviq'} className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,7,15,0) 55%, rgba(8,7,15,0.55) 100%)' }} /></Tile>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.08)', borderBottom: '1px solid rgb(var(--fg) / 0.08)', background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.l} className="px-6 lg:px-10 py-8" style={{ borderLeft: i ? '1px solid rgb(var(--fg) / 0.08)' : undefined }}>
                  <div className="text-[clamp(2rem,3.5vw,2.8rem)] leading-none mb-1" style={{ fontFamily: 'var(--font-main)', fontWeight: 500, ...G }}>{s.n}</div>
                  <p className="text-base mb-0.5" style={{ color: 'var(--ink)', fontWeight: 400 }}>{s.l}</p>
                  <p className="text-sm" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture */}
        <section className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
              <div>
                <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Our Culture' : 'วัฒนธรรมองค์กร'}</p>
                <h2 className="t-display text-[clamp(2.2rem,4.5vw,4rem)] leading-tight mb-8" style={{ color: 'var(--ink)' }}>
                  {isEN ? <>No<br /><span style={G}>Micromanagement</span></> : <>ที่นี่ไว้ใจกัน<br /><span style={G}>ไม่ตามจี้งาน</span></>}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={muted}>
                  {isEN ? 'We believe people do their best work when they are trusted, free to make decisions in their own area, and surrounded by teammates who care about the craft. So we set clear goals and deadlines, then leave it to you to decide how to get there, instead of checking in on your task list every day.' : 'เราเชื่อว่าคนทำงานได้ดีที่สุดเมื่อมีคนไว้ใจ มีอิสระตัดสินใจในงานของตัวเอง และได้ทำงานกับเพื่อนร่วมทีมที่ใส่ใจในฝีมือ เราเลยตั้งเป้าหมายและกำหนดส่งให้ชัด แล้วให้คุณเลือกเองว่าจะไปถึงจุดนั้นอย่างไร ไม่ได้คอยตามเช็กงานทุกวัน'}
                </p>
                <p className="text-sm leading-relaxed" style={muted}>
                  {isEN ? 'At Haliviq you will work on products that real customers use, learn from experienced teammates in your field, and grow alongside a company that is still growing. You will see your work go live, hear how users react, and have a say in how we do things next time.' : 'ที่ Haliviq คุณจะได้ทำงานกับผลิตภัณฑ์ที่ลูกค้าใช้จริง ได้เรียนรู้จากเพื่อนร่วมทีมที่มีประสบการณ์ในสายงาน และเติบโตไปพร้อมกับบริษัทที่ยังขยายตัวอยู่ คุณจะเห็นงานของตัวเองขึ้นใช้งานจริง ได้ฟังว่าผู้ใช้รู้สึกอย่างไร และมีส่วนช่วยกำหนดว่าครั้งต่อไปเราจะทำงานกันอย่างไร'}
                </p>
              </div>
              <Tile className="aspect-[4/3]"><CultureArt /></Tile>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(v => (
                <div key={v.title} className="p-7 rounded-2xl group hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(123,110,246,0.18)' }}>
                    <i className={`ti ${v.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.3rem' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life */}
        <section className="py-24" style={{ background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="t-label mb-4" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Life at Haliviq' : 'ชีวิตที่ Haliviq'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)]" style={{ color: 'var(--ink)' }}>
                {isEN ? <>Great Work,<br /><span style={G}>Great Life</span></> : <>งานดี<br /><span style={G}>ชีวิตก็ดี</span></>}
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[170px] lg:auto-rows-[210px]">
              <Tile className="col-span-2 row-span-2"><OfficeArt /></Tile>
              <Tile><ActivityArt /></Tile>
              <Tile><WorkspaceArt /></Tile>
              <Tile><DrinksArt /></Tile>
              <Tile><HackathonArt /></Tile>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Benefits' : 'สวัสดิการ'}</p>
              <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] leading-tight" style={{ color: 'var(--ink)' }}>
                {isEN ? <>We care for our team<br /><span style={G}>like we care for clients</span></> : <>ดูแลทีม<br /><span style={G}>เหมือนดูแลลูกค้า</span></>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map(b => (
                <div key={b.title} className="p-7 rounded-2xl hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(83,195,215,0.15)' }}>
                    <i className={`ti ${b.icon}`} style={{ fontSize: 22, color: 'var(--accent-2)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.25rem' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="py-24 lg:py-32 scroll-mt-20" style={{ background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Open Roles' : 'ตำแหน่งงาน'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] leading-tight" style={{ color: 'var(--ink)' }}>
                  {isEN ? <>12 open positions<br /><span style={G}>Starting now</span></> : <>เปิดรับ 12 ตำแหน่ง<br /><span style={G}>สมัครได้เลย</span></>}
                </h2>
              </div>
              <p className="text-sm max-w-xs" style={muted}>
                {isEN ? <>No role that fits? Send your CV to <a href="mailto:info@haliviq.com" className="hover:underline" style={{ color: 'var(--accent)' }}>info@haliviq.com</a></> : <>ไม่พบตำแหน่งที่ตรงกับคุณ? ส่ง CV มาได้ที่ <a href="mailto:info@haliviq.com" className="hover:underline" style={{ color: 'var(--accent)' }}>info@haliviq.com</a></>}
              </p>
            </div>
            <div className="space-y-8">
              {openings.map(dept => (
                <div key={dept.dept}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(123,110,246,0.18)', color: 'var(--accent)', fontWeight: 400 }}>{dept.dept}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgb(var(--fg) / 0.08)' }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {dept.jobs.map(job => (
                      <a key={job.title} href={`mailto:info@haliviq.com?subject=${encodeURIComponent(job.title)}`} className="group block rounded-2xl p-7 hover:-translate-y-0.5 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="mb-2 group-hover:text-[color:var(--accent)] transition-colors" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.3rem' }}>{job.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-sm px-2.5 py-1 rounded-full" style={{ background: 'rgb(var(--fg) / 0.07)', color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>{job.type}</span>
                              <span className="text-sm px-2.5 py-1 rounded-full" style={{ background: 'rgba(83,195,215,0.15)', color: 'var(--accent-2)', fontWeight: 400 }}>{job.level}</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all" style={{ border: '1px solid var(--purple)' }}>
                            <i className="ti ti-arrow-up-right" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map(s => (
                            <span key={s} className="text-sm px-3 py-1 rounded-full" style={{ border: '1px solid rgb(var(--fg) / 0.14)', color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>{s}</span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Application Process' : 'ขั้นตอนการสมัคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)]" style={{ color: 'var(--ink)' }}>
                {isEN ? <>Straightforward<br /><span style={G}>No Time Wasted</span></> : <>ตรงไปตรงมา<br /><span style={G}>ไม่เสียเวลา</span></>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(step => (
                <div key={step.no} className="rounded-2xl p-7 hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(123,110,246,0.18)' }}>
                      <i className={`ti ${step.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-mono" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{step.time}</span>
                  </div>
                  <span className="text-sm font-mono block mb-2" style={{ color: 'var(--accent-2)' }}>{step.no}</span>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.3rem' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="absolute inset-0 opacity-[0.3]" style={dots} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 65%)' }} />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-xs tracking-widest uppercase mb-6 font-mono" style={{ color: 'rgb(var(--fg) / 0.55)' }}>{isEN ? 'No role that fits?' : 'ยังไม่พบตำแหน่งที่ใช่?'}</p>
            <h2 className="t-display text-[clamp(2.2rem,5vw,4.6rem)] mb-8 leading-tight" style={{ color: 'var(--ink)' }}>
              {isEN ? <>Send your CV first.<br /><span style={G}>We will find a place for you.</span></> : <>ส่ง CV มาก่อน<br /><span style={G}>แล้วเราจะหาที่ให้</span></>}
            </h2>
            <p className="text-base mb-6 max-w-xl mx-auto" style={muted}>
              {isEN ? 'If you are good at what you do and care about the work, we would like to talk, whether or not that exact role is open right now. Send your CV and portfolio, tell us what you would like to work on, and we will keep it in mind when a fitting position comes up.' : 'ถ้าคุณเก่งในสายงานและใส่ใจในสิ่งที่ทำ เราอยากคุยกับคุณ ไม่ว่าตำแหน่งนั้นจะเปิดรับอยู่ตอนนี้หรือไม่ ส่ง CV และผลงานมา เล่าให้ฟังว่าอยากทำงานแบบไหน แล้วเราจะเก็บไว้พิจารณาเมื่อมีตำแหน่งที่เหมาะ'}
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              {ctaTrust.map(txt => (
                <div key={txt} className="flex items-center gap-2">
                  <i className="ti ti-circle-check" style={{ fontSize: 15, color: 'var(--accent-2)' }} aria-hidden="true" />
                  <span className="text-base" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>{txt}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@haliviq.com" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
                <i className="ti ti-mail" style={{ fontSize: 15 }} aria-hidden="true" />
                info@haliviq.com
              </a>
              <a href="#openings" className="inline-flex items-center gap-2 rounded-full transition-colors hover:bg-[rgb(var(--fg)/0.1)]" style={{ fontSize: '1rem', padding: '13px 36px', border: '1.5px solid rgb(var(--fg) / 0.25)', color: 'var(--ink)', fontWeight: 400 }}>
                {isEN ? 'View Open Roles' : 'ดูตำแหน่งงาน'}
                <i className="ti ti-arrow-down" style={{ fontSize: 15 }} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
