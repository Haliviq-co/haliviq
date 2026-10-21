import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'About Haliviq | Human Ideas. Intelligent Future.'
    : 'เกี่ยวกับ Haliviq | ความคิดของคน สู่อนาคตที่ฉลาดขึ้น'
  const description = isEN
    ? 'Meet the Bangkok team behind Haliviq. Human Ideas. Intelligent Future. We combine UX/UI design and AI to build products for Thai and Southeast Asian businesses.'
    : 'รู้จักทีม Haliviq ความคิดของคน สู่อนาคตที่ฉลาดขึ้น เรารวมงานออกแบบ UX/UI กับ AI เพื่อสร้างผลิตภัณฑ์ให้ธุรกิจในไทยและเอเชียตะวันออกเฉียงใต้'
  const siteUrl = `https://www.haliviq.com/${params.lang}/about`
  return {
    title,
    description,
    alternates: alt(siteUrl),
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const team = [
  {
    photo: '/images/team/thanapoom.jpg',
    name: 'Thanapoom Utoxpach',
    nickname: 'WU',
    titleEN: 'Business Development Director',
    titleTH: 'ผู้อำนวยการฝ่ายพัฒนาธุรกิจ',
  },
  {
    photo: '/images/team/shalisa.jpg',
    name: 'Shalisa Sangthada',
    nickname: 'AM',
    titleEN: 'Chief Executive Officer',
    titleTH: 'ประธานเจ้าหน้าที่บริหาร',
  },
  {
    photo: '/images/team/padol.jpg',
    name: 'Padol Thamsirisakul',
    nickname: 'DOL',
    titleEN: 'Project Manager',
    titleTH: 'ผู้จัดการโครงการ',
  },
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const a = tr.about
  const prefix = `/${lang}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isEN ? 'About Haliviq' : 'เกี่ยวกับ Haliviq',
    url: `https://www.haliviq.com/${lang}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Haliviq',
      url: 'https://www.haliviq.com',
      employee: team.map((m) => ({
        '@type': 'Person',
        name: m.name,
        jobTitle: isEN ? m.titleEN : m.titleTH,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{a.label}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
              {a.h2a}
              <br />
              <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {a.h2b}
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {a.p1}
            </p>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {a.p2}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14 pt-10" style={{ borderTop: '1px solid rgb(var(--fg) / 0.1)' }}>
              {['120+', isEN ? '8 yrs' : '8 ปี', '95%'].map((n, idx) => (
                <div key={idx}>
                  <div className="t-display" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'var(--ink)' }}>{n}</div>
                  <p className="text-xs mt-1" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{a.stats[idx]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="pb-24 pt-4" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {a.pillars.map((p: { title: string; desc: string }, i: number) => (
                <div key={i} className="rounded-2xl p-6" style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm mb-4" style={{ fontWeight: 700, background: 'rgba(155,107,255,0.18)', color: 'var(--accent)' }}>
                    0{i + 1}
                  </span>
                  <h4 className="text-[color:var(--ink)] mb-2" style={{ fontWeight: 500, fontSize: '1.1rem' }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story — AI philosophy */}
        <section className="relative overflow-hidden py-24" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.3]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.22) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>
                {isEN ? 'Our Story' : 'ความเป็นมาของเรา'}
              </p>
              <h2 className="t-display text-[clamp(2rem,4.2vw,3.4rem)] mb-2" style={{ color: 'var(--ink)' }}>
                {isEN ? 'Haliviq and ' : 'HALIVIQ กับ'}
                <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Our Approach to AI' : 'แนวคิดด้าน AI'}
                </span>
              </h2>
            </div>

            <div className="space-y-6 mb-16">
              {(isEN
                ? [
                    'Haliviq believes AI can help a business run with less friction: finding the right information faster, summarizing long documents, answering customer questions, and giving teams a clearer read on their own data before they make a decision. We pair AI with our strategy, design and engineering work, so the tool we build fits the way your people already work instead of asking them to change everything.',
                    'This view comes from years of sitting next to clients. Again and again we watched teams lose hours to copying information between systems, digging through old files, and repeating the same manual steps every week. So we started looking for places where AI could take that load off, leaving people more time for the work that needs judgment, experience and a human touch.',
                    'We are also careful about where AI does not belong. Before we suggest a feature we ask what problem it solves, what data it would touch, and who checks its answers. In Thailand that includes thinking about PDPA, Thai-language quality, and whether sensitive data should stay on local infrastructure. If a simple form or a better-designed page does the job, we will say so.',
                    'For Haliviq, "Human Ideas. Intelligent Future." means a future where people can take their ideas further, backed by tools that help them find, understand and act without the busywork.',
                  ]
                : [
                    'HALIVIQ เชื่อว่า AI ช่วยให้ธุรกิจทำงานคล่องตัวขึ้นได้จริง ไม่ว่าจะเป็นการหาข้อมูลให้เร็วขึ้น สรุปเอกสารยาว ๆ ตอบคำถามลูกค้า หรือช่วยทีมดูข้อมูลของตัวเองให้ชัดก่อนตัดสินใจ เรานำ AI มาทำงานร่วมกับงานกลยุทธ์ งานออกแบบ และงานพัฒนาระบบ เพื่อให้เครื่องมือที่ได้เข้ากับวิธีทำงานของทีมคุณ ไม่ต้องให้ทุกคนมาปรับตัวใหม่หมด',
                    'แนวคิดนี้มาจากการที่เราได้ทำงานใกล้ชิดกับลูกค้ามาตลอด เราเห็นบ่อย ๆ ว่าหลายทีมเสียเวลาเป็นชั่วโมงไปกับการคัดลอกข้อมูลข้ามระบบ ไล่หาไฟล์เก่า และทำขั้นตอนเดิมซ้ำทุกสัปดาห์ เราเลยเริ่มมองหาจุดที่ AI ช่วยแบ่งเบางานเหล่านี้ได้ เพื่อให้คนในทีมมีเวลาไปทำงานที่ต้องใช้วิจารณญาณ ประสบการณ์ และความใส่ใจมากขึ้น',
                    'ในทางกลับกัน เราก็บอกตรง ๆ ว่างานไหนไม่ควรใช้ AI ก่อนจะเสนอฟีเจอร์ใด เราจะถามก่อนว่ามันแก้ปัญหาอะไร ต้องแตะข้อมูลอะไรบ้าง และใครเป็นคนตรวจคำตอบ สำหรับงานในไทย เรายังดูเรื่อง PDPA คุณภาพของภาษาไทย และดูว่าข้อมูลสำคัญควรอยู่บนเซิร์ฟเวอร์ในประเทศหรือไม่ ถ้าฟอร์มธรรมดาหรือหน้าเว็บที่ออกแบบดีขึ้นก็แก้ปัญหาได้ เราก็จะแนะนำแบบนั้น',
                    'สำหรับ HALIVIQ ประโยค "Human Ideas. Intelligent Future." หมายถึงอนาคตที่คนนำความคิดของตัวเองไปได้ไกลขึ้น โดยมีเครื่องมือช่วยค้นหา ทำความเข้าใจ และลงมือทำ โดยไม่ต้องเสียเวลากับงานจุกจิก',
                  ]
              ).map((para, i) => (
                <p key={i} className="text-lg leading-relaxed max-w-3xl mx-auto text-center" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400 }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="text-center mb-10">
              <p className="t-label mb-4" style={{ color: 'rgb(var(--fg) / 0.6)' }}>
                {isEN ? 'Where We Stand' : 'จุดยืนของเรา'}
              </p>
              <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400 }}>
                {isEN
                  ? 'Our core strength is UX/UI design. We start there because most digital products succeed or fail on how clear they are to use, and then we carry the same thinking through to website development, application development and AI design, so the design is still intact when the product ships.'
                  : 'จุดแข็งหลักของเราคือการออกแบบ UX/UI เพราะผลิตภัณฑ์ดิจิทัลส่วนใหญ่ได้หรือเสียกันที่ว่าคนใช้แล้วเข้าใจง่ายแค่ไหน จากนั้นเราก็ต่อยอดแนวคิดเดียวกันไปถึงการพัฒนา website การพัฒนาแอป และการออกแบบ AI เพื่อให้งานที่ออกแบบไว้ถูกทำออกมาตรงตามที่วางไว้'}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mb-16">
              {[
                { icon: 'ti-palette', titleEN: 'UX/UI Design', titleTH: 'ออกแบบ UX/UI' },
                { icon: 'ti-world', titleEN: 'Website Development', titleTH: 'พัฒนาเว็บไซต์' },
                { icon: 'ti-device-mobile', titleEN: 'Application Development', titleTH: 'พัฒนาแอปพลิเคชัน' },
                { icon: 'ti-sparkles', titleEN: 'AI Design', titleTH: 'ออกแบบ AI' },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl p-6 text-center" style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: 'rgba(123,110,246,0.15)' }}>
                    <i className={`ti ${f.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} aria-hidden="true" />
                  </div>
                  <h4 className="text-[color:var(--ink)]" style={{ fontWeight: 500, fontSize: '0.98rem' }}>{isEN ? f.titleEN : f.titleTH}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <p className="t-label mb-4" style={{ color: 'rgb(var(--fg) / 0.6)' }}>
                {isEN ? 'Our AI Services' : 'บริการด้าน AI ของเรา'}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  icon: 'ti-message-chatbot',
                  titleEN: 'AI Assistants & Knowledge Search',
                  titleTH: 'AI Assistants & Knowledge Search',
                  descEN: 'Assistants that search your own documents and answer from them, showing which file each answer came from so your team can check it.',
                  descTH: 'ทำผู้ช่วยที่ค้นหาและตอบคำถามจากเอกสารของคุณเอง ตอบพร้อมบอกว่าอ้างอิงจากไฟล์ไหน ให้ทีมตรวจสอบย้อนกลับได้',
                },
                {
                  icon: 'ti-microphone',
                  titleEN: 'AI Voice Agents',
                  titleTH: 'AI Voice Agents',
                  descEN: 'Voice assistants that answer calls, handle routine questions in Thai or English, and pass the harder ones to a person.',
                  descTH: 'ผู้ช่วยด้วยเสียงที่รับสายและตอบคำถามทั่วไปเป็นภาษาไทยหรืออังกฤษ ส่วนเรื่องที่ซับซ้อนก็ส่งต่อให้เจ้าหน้าที่',
                },
                {
                  icon: 'ti-settings-automation',
                  titleEN: 'Workflow Automation',
                  titleTH: 'ระบบ Automation',
                  descEN: 'Automations that move data between your tools, draft routine documents and flag exceptions, so repeat tasks stop eating your team\'s week.',
                  descTH: 'ระบบที่ย้ายข้อมูลระหว่างเครื่องมือต่าง ๆ ร่างเอกสารที่ทำซ้ำ และแจ้งเตือนเมื่อมีเคสผิดปกติ ทีมจะได้ไม่ต้องเสียเวลากับงานซ้ำ ๆ',
                },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-6" style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(123,110,246,0.15)' }}>
                    <i className={`ti ${s.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} aria-hidden="true" />
                  </div>
                  <h4 className="text-[color:var(--ink)] mb-2" style={{ fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? s.titleEN : s.titleTH}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>{isEN ? s.descEN : s.descTH}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href={`${prefix}/services/ai`}
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--accent-2)', fontWeight: 500 }}
              >
                {isEN ? 'See all AI services' : 'ดูบริการ AI ทั้งหมด'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Team / Leadership */}
        <section className="relative overflow-hidden py-24" style={{ background: 'var(--bg-1)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.25]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.22) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>
                {isEN ? 'Leadership' : 'ทีมผู้บริหาร'}
              </p>
              <h2 className="t-display text-[clamp(2rem,4.2vw,3.4rem)] mb-5" style={{ color: 'var(--ink)' }}>
                {isEN ? 'The People Behind ' : 'คนที่อยู่เบื้องหลัง '}
                <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Haliviq
                </span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>
                {isEN
                  ? 'We keep the team small on purpose. The people you meet at the start are the ones who stay close to your project through planning, design, build and handover, so nothing gets lost between departments.'
                  : 'เราตั้งใจให้ทีมเล็ก คนที่คุยกับคุณตั้งแต่วันแรกจะเป็นคนที่ดูแลโปรเจกต์ต่อไปตลอด ทั้งตอนวางแผน ออกแบบ พัฒนา และส่งมอบ งานเลยไม่หลุดระหว่างแผนก'}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="group rounded-3xl overflow-hidden transition-colors"
                  style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.08)' }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      width={1122}
                      height={1402}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,8,18,0.7) 100%)' }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[color:var(--ink)] mb-1" style={{ fontWeight: 500, fontSize: '1.25rem' }}>
                      {m.name} <span style={{ color: 'var(--accent-2)', fontWeight: 500 }}>&ldquo;{m.nickname}&rdquo;</span>
                    </h3>
                    <p className="text-sm" style={{ color: 'rgb(var(--fg) / 0.6)', fontWeight: 400 }}>
                      {isEN ? m.titleEN : m.titleTH}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 py-24 lg:py-32 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {isEN ? 'Start Today' : 'เริ่มต้นวันนี้'}
            </p>
            <h2
              className="t-display mb-6 leading-tight"
              style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2rem,4vw,4rem)' }}
            >
              {isEN ? "Let's Build Something Together" : 'มาสร้างสิ่งดี ๆ ด้วยกัน'}
            </h2>
            <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {isEN ? 'Tell us what you are working on, even if it is only a rough idea. We will reply with an honest view of where we can help and what a sensible first step looks like.' : 'เล่าให้ฟังว่าตอนนี้คุณกำลังทำอะไรอยู่ แม้จะเป็นแค่ไอเดียคร่าว ๆ ก็ได้ เราจะตอบกลับตรง ๆ ว่าช่วยตรงไหนได้บ้าง และก้าวแรกที่เหมาะควรเป็นอะไร'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:info@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-colors" style={{ border: '1px solid rgb(var(--fg) / 0.3)', color: 'var(--ink)', fontWeight: 400 }}>
                info@haliviq.com
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
