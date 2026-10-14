import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Technology Partner Program | Haliviq Bangkok' : 'โปรแกรมพาร์ทเนอร์ | Haliviq กรุงเทพฯ'
  const description = isEN
    ? 'Partner with Haliviq, a Bangkok digital product studio. Cloud, platform, consulting and data/AI companies get a delivery team in Thailand and Southeast Asia.'
    : 'ร่วมเป็นพาร์ทเนอร์กับ Haliviq สตูดิโอผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ สำหรับบริษัท Cloud, Platform, ที่ปรึกษา และ Data/AI ที่ต้องการทีมส่งมอบงานในไทยและอาเซียน'
  const url = `https://www.haliviq.com/${params.lang}/partners`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const tiers = [
  { key:'platinum', color:'var(--purple)', bg:'var(--purple-bg)' },
  { key:'gold', color:'var(--accent)', bg:'var(--purple-bg)' },
  { key:'technology', color:'var(--accent-2)', bg:'#F0FFF4' },
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const benefits = isEN ? [
    { icon:'ti-users', title:'Co-selling', desc:'We take your product to market together with the Haliviq team. When a client of ours has a need your technology fits, we bring you into the conversation, and when you meet a client who needs design and engineering, you can bring us in.' },
    { icon:'ti-certificate', title:'Co-branding', desc:'Joint case studies, blog articles and a shared presence at events. We write about the work we do together, so your brand is seen by Thai and Southeast Asian buyers in a real project context.' },
    { icon:'ti-discount', title:'Partner Pricing', desc:'Special pricing on Haliviq services for the clients you refer or work with, so a combined proposal is easier to approve. Terms are agreed per partnership.' },
    { icon:'ti-school', title:'Training & Enablement', desc:'Your team trains ours on your product: how it works, who it suits and where it does not fit. That lets us position and implement your technology accurately instead of guessing.' },
    { icon:'ti-chart-bar', title:'Deal Registration', desc:'Register the deals you bring us so they are protected. You can see the status of each one, from first conversation to signed contract, and how revenue sharing works.' },
    { icon:'ti-headset', title:'Dedicated Support', desc:'A Partner Success Manager is your single contact for technical questions, escalations and account management, so you never have to work out who to ask.' },
  ] : [
    { icon:'ti-users', title:'Co-selling', desc:'เราพาผลิตภัณฑ์ของคุณไปเสนอลูกค้าร่วมกับทีม Haliviq ถ้าลูกค้าของเรามีความต้องการที่เทคโนโลยีของคุณตอบได้ เราจะแนะนำให้รู้จักกัน และถ้าคุณเจอลูกค้าที่ต้องการงานออกแบบและพัฒนา ก็ชวนเราเข้าไปคุยได้เหมือนกัน' },
    { icon:'ti-certificate', title:'Co-branding', desc:'ทำกรณีศึกษาและบทความร่วมกัน และไปออกงานอีเวนต์ด้วยกัน เราเล่างานที่ทำร่วมกันจริง ทำให้ผู้ซื้อในไทยและเอเชียตะวันออกเฉียงใต้เห็นแบรนด์ของคุณในบริบทของโปรเจกต์จริง' },
    { icon:'ti-discount', title:'Partner Pricing', desc:'ราคาพิเศษสำหรับบริการของ Haliviq ที่ใช้กับลูกค้าที่คุณแนะนำหรือทำงานด้วยกัน ทำให้ข้อเสนอรวมอนุมัติง่ายขึ้น เงื่อนไขตกลงกันเป็นรายพาร์ทเนอร์' },
    { icon:'ti-school', title:'Training & Enablement', desc:'ทีมของคุณมาอบรมทีมเราเรื่องผลิตภัณฑ์ ว่าทำงานอย่างไร เหมาะกับใคร และไม่เหมาะกับงานแบบไหน เราจะได้นำเสนอและติดตั้งเทคโนโลยีของคุณให้ลูกค้าได้ถูกต้อง ไม่ต้องเดา' },
    { icon:'ti-chart-bar', title:'Deal Registration', desc:'ลงทะเบียนดีลที่คุณนำมาให้เรา เพื่อให้ดีลนั้นได้รับการคุ้มครอง คุณดูสถานะของแต่ละดีลได้ตั้งแต่เริ่มคุยจนถึงเซ็นสัญญา รวมถึงดูวิธีแบ่งรายได้ได้อย่างชัดเจน' },
    { icon:'ti-headset', title:'Dedicated Support', desc:'มี Partner Success Manager เป็นผู้ติดต่อหลักคนเดียวของคุณ ทั้งเรื่องคำถามด้านเทคนิค การส่งต่อปัญหา และการดูแลบัญชี ไม่ต้องมาเดาว่าต้องถามใคร' },
  ]

  const partnerTypes = isEN ? [
    { icon:'ti-cloud', title:'Cloud & Infrastructure', desc:'AWS, GCP, Azure and other cloud providers who want a delivery partner in Southeast Asia. We build and migrate workloads onto your platform, and can set up hosting that keeps data in Thailand when a client needs it.' },
    { icon:'ti-code', title:'Technology Platforms', desc:'SaaS, API and platform companies that need integration and implementation know-how. We connect your product to a client\'s website, app, CRM or back office and design the screens people actually use.' },
    { icon:'ti-building', title:'Consulting Firms', desc:'Strategy and management consultancies that have a recommendation but need a team to build it. We turn a roadmap into a working website, app or internal tool, and report back in a way your client can follow.' },
    { icon:'ti-device-analytics', title:'Data & AI Providers', desc:'Data, analytics and AI vendors who need a product team to put their solution in front of users. We design the interface, connect the data and handle rollout, including Thai-language needs and PDPA considerations.' },
  ] : [
    { icon:'ti-cloud', title:'Cloud & Infrastructure', desc:'AWS, GCP, Azure และ Cloud Provider อื่น ๆ ที่ต้องการพาร์ทเนอร์ส่งมอบงานในเอเชียตะวันออกเฉียงใต้ เราสร้างและย้ายระบบขึ้นแพลตฟอร์มของคุณ และตั้งค่าโฮสติ้งให้ข้อมูลอยู่ในไทยได้เมื่อลูกค้าต้องการ' },
    { icon:'ti-code', title:'Technology Platforms', desc:'บริษัท SaaS, API และ Platform ที่ต้องการผู้เชี่ยวชาญด้านการเชื่อมต่อระบบและการติดตั้งใช้งาน เราเชื่อมผลิตภัณฑ์ของคุณเข้ากับ website แอป CRM หรือระบบหลังบ้านของลูกค้า และออกแบบหน้าจอที่คนใช้งานจริง' },
    { icon:'ti-building', title:'Consulting Firms', desc:'บริษัทที่ปรึกษาด้านกลยุทธ์และการจัดการที่มีข้อเสนอแนะแล้ว แต่ต้องการทีมมาลงมือสร้าง เราเปลี่ยน roadmap ให้เป็น website แอป หรือเครื่องมือภายในที่ใช้งานได้จริง และรายงานความคืบหน้าให้ลูกค้าของคุณตามได้ง่าย' },
    { icon:'ti-device-analytics', title:'Data & AI Providers', desc:'ผู้ให้บริการด้าน Data, Analytics และ AI ที่ต้องการทีมผลิตภัณฑ์มาช่วยนำโซลูชันไปถึงมือผู้ใช้ เราออกแบบหน้าจอ เชื่อมข้อมูล และดูแลการเปิดใช้งาน รวมถึงเรื่องภาษาไทยและ PDPA' },
  ]

  const tierLabels = isEN
    ? { platinum: 'Platinum Partner', gold: 'Gold Partner', technology: 'Technology Partner' }
    : { platinum: 'Platinum Partner', gold: 'Gold Partner', technology: 'Technology Partner' }

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[80px] bg-[var(--bg)]">
          <div className="h-1 w-full" style={{ background:'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
            <div className="max-w-3xl">
              <p className="t-label mb-5">{isEN ? 'Partner Program' : 'โปรแกรมพาร์ทเนอร์'}</p>
              <h1 className="t-display text-[clamp(3rem,6.5vw,6rem)] text-[color:var(--ink)] leading-relaxed mb-8">
                {isEN ? <>Grow Together<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>with Haliviq</span></> : <>เติบโตไปด้วยกัน<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>กับ Haliviq</span></>}
              </h1>
              <p className="t-body text-lg leading-relaxed max-w-2xl">
                {isEN ? 'We partner with technology platforms, cloud providers, consulting firms and data or AI vendors who care about building products that actually help a business. Haliviq is a Bangkok studio, so we are a practical delivery partner for companies that want a team on the ground in Thailand and Southeast Asia.' : 'เราเป็นพาร์ทเนอร์กับ Technology Platform, Cloud Provider, บริษัทที่ปรึกษา และผู้ให้บริการด้าน Data หรือ AI ที่อยากสร้างผลิตภัณฑ์ที่ช่วยธุรกิจได้จริงเหมือนกัน Haliviq เป็นสตูดิโอในกรุงเทพฯ เราจึงเป็นพาร์ทเนอร์ส่งมอบงานที่ใช้งานได้จริงสำหรับบริษัทที่ต้องการทีมในพื้นที่ทั้งในไทยและเอเชียตะวันออกเฉียงใต้'}
              </p>
              <p className="t-body text-lg leading-relaxed max-w-2xl mt-5">
                {isEN ? 'The idea is simple: you bring the technology or the client relationship, we bring product strategy, UX/UI design and engineering, and we agree up front who does what, how deals are tracked and how we talk to the client.' : 'หลักคิดของเราง่ายมาก คุณมีเทคโนโลยีหรือความสัมพันธ์กับลูกค้า ส่วนเราดูแลกลยุทธ์ผลิตภัณฑ์ การออกแบบ UX/UI และการพัฒนา แล้วเรามาตกลงกันตั้งแต่ต้นว่าใครทำอะไร ติดตามดีลอย่างไร และคุยกับลูกค้าอย่างไร'}
              </p>
            </div>
          </div>
        </section>

        <div className="border-y border-[color:var(--line)] bg-[var(--bg-1)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[color:var(--line)]">
              {(isEN
                ? [{ n:'40+',l:'Active Partners' },{ n:'12',l:'Countries' },{ n:'300+',l:'Joint Projects' },{ n:'95%',l:'Partner Retention' }]
                : [{ n:'40+',l:'พาร์ทเนอร์ที่ทำงานร่วมกันอยู่' },{ n:'12',l:'ประเทศ' },{ n:'300+',l:'โปรเจกต์ร่วมกัน' },{ n:'95%',l:'พาร์ทเนอร์ที่ร่วมงานต่อ' }]
              ).map(s => (
                <div key={s.l} className="px-6 lg:px-10 py-8">
                  <div className="text-[clamp(2rem,3.5vw,2.8rem)] leading-none mb-1" style={{ fontFamily:'var(--font-main)', fontWeight:500, color:'var(--purple)' }}>{s.n}</div>
                  <p className="text-base text-[color:var(--text-3)]" style={{ fontWeight:400 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[var(--bg)] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5">{isEN ? 'Who We Partner With' : 'เราเป็นพาร์ทเนอร์กับใคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)] text-[color:var(--ink)]">
                {isEN ? 'Built for the Right Fit' : 'เลือกพาร์ทเนอร์ที่เข้ากัน'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partnerTypes.map(p => (
                <div key={p.title} className="p-7 border border-[color:var(--line)] rounded-2xl hover:border-[var(--purple)]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-5">
                    <i className={`ti ${p.icon}`} style={{ fontSize:22, color:'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[color:var(--ink)] mb-2" style={{ fontWeight:500, fontSize:'1.3rem' }}>{p.title}</h3>
                  <p className="t-body text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-1)] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5">{isEN ? 'Partner Benefits' : 'สิทธิประโยชน์'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)] text-[color:var(--ink)]">
                {isEN ? <>What You Get<br />as a Partner</> : <>สิ่งที่คุณได้รับ<br />ในฐานะพาร์ทเนอร์</>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(b => (
                <div key={b.title} className="bg-[var(--bg)] p-7 border border-[color:var(--line)] rounded-2xl hover:border-[var(--purple)]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-5">
                    <i className={`ti ${b.icon}`} style={{ fontSize:22, color:'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[color:var(--ink)] mb-2" style={{ fontWeight:500, fontSize:'1.3rem' }}>{b.title}</h3>
                  <p className="t-body text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band theme-dark py-24 relative overflow-hidden">
          <div className="cta-dots absolute inset-0 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-[color:rgb(var(--fg)/0.6)] text-xs tracking-widest uppercase mb-6 font-mono">{isEN ? 'Become a Partner' : 'เป็นพาร์ทเนอร์'}</p>
            <h2 className="t-display text-[color:var(--ink)] text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight">
              {isEN ? <>Ready to grow<br />together?</> : <>พร้อมเติบโต<br />ไปด้วยกันไหม?</>}
            </h2>
            <p className="text-[color:rgb(var(--fg)/0.85)] mb-10 max-w-lg mx-auto" style={{ fontWeight:400 }}>
              {isEN ? 'Tell us about your company, what you sell or advise on, and how you would like to work with us. A few lines is enough to start. We will get back to you within 48 hours and suggest a first call.' : 'เล่าให้เราฟังว่าบริษัทของคุณทำอะไร ขายหรือให้คำปรึกษาเรื่องอะไร และอยากร่วมมือกับเราแบบไหน เขียนสั้น ๆ ก็เริ่มคุยได้แล้ว เราจะตอบกลับภายใน 48 ชั่วโมง พร้อมนัดคุยครั้งแรก'}
            </p>
            <Link href={`/${lang}/contact`} className="cta-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-colors" style={{ fontWeight:500 }}>
              {isEN ? 'Apply to Partner' : 'สมัครเป็นพาร์ทเนอร์'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
