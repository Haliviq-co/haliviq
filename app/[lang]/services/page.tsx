import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'
import { ServiceVisual } from '@/components/service/ServiceVisual'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Web, App, UX/UI & AI Services in Bangkok | Haliviq'
    : 'บริการทำเว็บ แอป UX/UI และ AI กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Haliviq is a Bangkok digital product studio. One team for product strategy, UX/UI design, web and mobile development, AI, data, security and PDPA compliance.'
    : 'Haliviq สตูดิโอผลิตภัณฑ์ดิจิทัลที่กรุงเทพฯ ทีมเดียวดูแลทั้งกลยุทธ์ผลิตภัณฑ์ ออกแบบ UX/UI พัฒนาเว็บและแอป AI ข้อมูล ความปลอดภัย และ PDPA'
  const url = `https://www.haliviq.com/${params.lang}/services`
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
  const prefix = `/${lang}`

  const categories = [
    {
      key: 'strategy-design',
      label: isEN ? 'Strategy & Design' : 'กลยุทธ์และดีไซน์',
      items: [
        { icon: 'ti-palette', title: isEN ? 'Brand Strategy & Identity' : 'สร้างแบรนด์ กลยุทธ์และอัตลักษณ์', href: '/services/branding', desc: isEN ? 'Positioning, naming, logo, visual identity and brand guidelines, so your business looks and sounds like one brand before the website is built.' : 'วางจุดยืน ตั้งชื่อ ออกแบบโลโก้ อัตลักษณ์ภาพ และคู่มือแบรนด์ เพื่อให้ธุรกิจของคุณเป็นแบรนด์เดียวกันทุกสื่อ ก่อนเริ่มสร้างเว็บไซต์' },
        { icon: 'ti-map', title: isEN ? 'Digital Transformation' : 'ปรับองค์กรสู่ดิจิทัล', href: '/services/digital-transformation', desc: isEN ? 'We look at how your teams really work, find the processes and systems holding you back, and modernise them in stages. A good fit if you still run on spreadsheets, paper approvals or tools that do not talk to each other.' : 'เราดูว่าทีมของคุณทำงานกันจริงๆ อย่างไร หาขั้นตอนและระบบที่ถ่วงอยู่ แล้วปรับให้ทันสมัยทีละช่วง เหมาะกับบริษัทที่ยังใช้สเปรดชีต เอกสารอนุมัติแบบกระดาษ หรือเครื่องมือที่ไม่เชื่อมกัน' },
        { icon: 'ti-user-search', title: isEN ? 'UI/UX & Product Design' : 'ออกแบบ UI/UX และผลิตภัณฑ์', href: '/services/ux-ui-design', desc: isEN ? 'User research, flows and interface design in Figma, tested with real people before developers start. It suits products that feel complicated to use today.' : 'วิจัยผู้ใช้ ออกแบบลำดับการใช้งานและหน้าจอใน Figma แล้วทดสอบกับคนจริงก่อนทีมพัฒนาเริ่มงาน เหมาะกับผลิตภัณฑ์ที่ตอนนี้ใช้ยากหรือซับซ้อนเกินไป' },
        { icon: 'ti-bulb', title: isEN ? 'Product Discovery' : 'Product Discovery', href: '/services/product-discovery', desc: isEN ? 'Two to six weeks of problem framing, user interviews and concept testing that ends in a clear decision: build it, change direction, or stop.' : 'ช่วง 2-6 สัปดาห์สำหรับกำหนดโจทย์ สัมภาษณ์ผู้ใช้ และทดสอบแนวคิด จบด้วยการตัดสินใจที่ชัดว่าจะสร้างต่อ เปลี่ยนทิศทาง หรือหยุด' },
        { icon: 'ti-users', title: isEN ? 'User Research' : 'User Research', href: '/services/user-research', desc: isEN ? 'Interviews, usability tests and surveys in Thai or English, turned into findings your team can act on the next day.' : 'สัมภาษณ์ผู้ใช้ ทดสอบการใช้งาน และทำแบบสอบถามเป็นภาษาไทยหรืออังกฤษ แล้วสรุปเป็นข้อค้นพบที่ทีมของคุณเอาไปทำต่อได้ทันที' },
        { icon: 'ti-device-desktop', title: isEN ? 'Rapid Prototyping' : 'Rapid Prototyping', href: '/services/rapid-prototyping', desc: isEN ? 'Clickable Figma prototypes in one to four weeks, ready to put in front of customers, investors or your own team before any code exists.' : 'ต้นแบบใน Figma ที่กดใช้ได้ภายใน 1-4 สัปดาห์ เอาไปให้ลูกค้า นักลงทุน หรือทีมของคุณลองได้ก่อนจะมีโค้ดสักบรรทัด' },
        { icon: 'ti-components', title: isEN ? 'Design Systems' : 'Design Systems', href: '/services/design-systems', desc: isEN ? 'A shared kit of components, tokens and guidelines kept in Figma and in code, so every screen looks and works the same.' : 'ชุดคอมโพเนนต์ token และแนวทางกลางที่เก็บทั้งใน Figma และในโค้ด ให้ทุกหน้าจอหน้าตาและการใช้งานเหมือนกัน' },
      ],
    },
    {
      key: 'engineering',
      label: isEN ? 'Engineering' : 'พัฒนาซอฟต์แวร์',
      items: [
        { icon: 'ti-code', title: isEN ? 'Web Development' : 'พัฒนาเว็บไซต์', href: '/services/web-development', desc: isEN ? 'Next.js websites and web apps that load fast, rank on Google and can be edited by your own team through a CMS.' : 'เว็บไซต์และเว็บแอปด้วย Next.js ที่โหลดเร็ว ติดอันดับ Google ได้ และให้ทีมของคุณแก้เนื้อหาเองผ่าน CMS' },
        { icon: 'ti-device-mobile', title: isEN ? 'Mobile App Development' : 'พัฒนาแอปมือถือ', href: '/services/mobile-apps', desc: isEN ? 'iOS and Android apps, native or cross-platform, tested on real phones and ready for the App Store and Google Play.' : 'แอป iOS และ Android แบบ native หรือ cross-platform ทดสอบบนมือถือจริง พร้อมขึ้น App Store และ Google Play' },
        { icon: 'ti-server', title: isEN ? 'Backend & API' : 'Backend และ API', href: '/services/backend-api', desc: isEN ? 'The server side your web and mobile products depend on: APIs, databases and integrations built to stay fast and easy to change.' : 'ฝั่งเซิร์ฟเวอร์ที่เว็บและแอปของคุณพึ่งพา ทั้ง API ฐานข้อมูล และการเชื่อมระบบ สร้างให้เร็วและแก้ไขต่อได้ง่าย' },
        { icon: 'ti-refresh-dot', title: isEN ? 'Application Modernization' : 'ปรับปรุงระบบเดิม', href: '/services/application-modernization', desc: isEN ? 'We update an ageing system piece by piece while it keeps running, so the business never has to stop for a big-bang rewrite.' : 'เราปรับปรุงระบบเก่าทีละส่วนโดยที่ระบบยังใช้งานอยู่ ธุรกิจไม่ต้องหยุดเพื่อรอเขียนใหม่ทั้งก้อน' },
        { icon: 'ti-cloud-cog', title: isEN ? 'Cloud Services & Migration' : 'Cloud Services & Migration', href: '/services/cloud-services-migration', desc: isEN ? 'Move workloads to the cloud, tidy up what is already there and bring the monthly bill down.' : 'ย้ายระบบขึ้น Cloud จัดระเบียบสิ่งที่มีอยู่ และลดค่าใช้จ่ายรายเดือนลง' },
        { icon: 'ti-checklist', title: isEN ? 'Quality Assurance & Testing' : 'ทดสอบระบบ QA', href: '/services/quality-assurance-testing', desc: isEN ? 'QA engineers who work inside your sprints, with test automation in CI and release gates for teams that ship often.' : 'QA Engineer ที่ทำงานในสปรินต์ของคุณ พร้อมระบบทดสอบอัตโนมัติใน CI และด่านตรวจก่อนปล่อย สำหรับทีมที่ปล่อยเวอร์ชันบ่อย' },
        { icon: 'ti-bug', title: isEN ? 'QA & Software Testing' : 'ทดสอบซอฟต์แวร์ก่อนเปิดตัว', href: '/services/qa-testing', desc: isEN ? 'A one-off test round before launch, or after a bad release: real devices, a prioritised bug list and a sign-off report.' : 'รอบทดสอบครั้งเดียวก่อนเปิดตัว หรือหลังปล่อยเวอร์ชันที่พลาด บนอุปกรณ์จริง พร้อมรายการบั๊กเรียงตามความสำคัญและรายงานอนุมัติ' },
        { icon: 'ti-code-dots', title: isEN ? 'Finish Your Vibe-Coded App' : 'ช่วยทำแอปที่สร้างด้วย AI ให้เสร็จ', href: '/services/finish-your-vibe-coded-app', desc: isEN ? 'Built an app with an AI tool and it is nearly there? We harden the security and set up the production infrastructure it needs to go live.' : 'สร้างแอปด้วยเครื่องมือ AI จนเกือบเสร็จแล้วใช่ไหม เราช่วยเสริมความปลอดภัยและวางโครงสร้างระบบจริงที่ต้องใช้ก่อนเปิดใช้งาน' },
        { icon: 'ti-users', title: isEN ? 'Forward Deployed Engineering' : 'Forward Deployed Engineering', href: '/services/forward-deployed-engineering', desc: isEN ? 'Senior engineers who join your team directly and work on your problem until the AI feature is running in production.' : 'วิศวกรระดับ Senior ที่เข้ามาทำงานในทีมของคุณโดยตรง ทำงานกับโจทย์ของคุณจนฟีเจอร์ AI ใช้งานจริงบน production' },
      ],
    },
    {
      key: 'ai-data',
      label: isEN ? 'AI & Data' : 'AI และข้อมูล',
      items: [
        { icon: 'ti-robot', title: isEN ? 'AI Agents & Generative AI' : 'AI Agent และ Generative AI', href: '/services/ai', desc: isEN ? 'AI agents and retrieval (RAG) systems that take over real tasks, built to run in production and not just in a demo.' : 'AI Agent และระบบ RAG ที่รับงานจริงแทนคนได้ สร้างให้ใช้งานจริงบน production ไม่ใช่แค่โชว์ Demo' },
        { icon: 'ti-phone-calling', title: isEN ? 'AI Voice Agents' : 'AI Voice Agents', href: '/services/ai-voice-agents', desc: isEN ? 'Voice agents that sound natural, answer quickly and handle real phone calls, with a hand-off to your staff when needed.' : 'Voice Agent ที่พูดคุยเป็นธรรมชาติ ตอบเร็ว รับสายโทรศัพท์จริงได้ และส่งต่อให้พนักงานเมื่อจำเป็น' },
        { icon: 'ti-layout-dashboard', title: isEN ? 'Data Analytics & Engineering' : 'ข้อมูลและการวิเคราะห์', href: '/services/data-analytics', desc: isEN ? 'Data pipelines and dashboards that every team can read, so decisions come from numbers people trust.' : 'Data Pipeline และ Dashboard ที่ทุกทีมอ่านเข้าใจ ให้การตัดสินใจมาจากตัวเลขที่ทุกคนเชื่อถือ' },
      ],
    },
    {
      key: 'commerce',
      label: isEN ? 'Commerce' : 'Commerce',
      items: [
        { icon: 'ti-shopping-cart', title: isEN ? 'E-Commerce Development' : 'พัฒนา E-Commerce', href: '/services/ecommerce', desc: isEN ? 'Online stores built API-first with a storefront designed around your brand, connected to payments, stock and delivery.' : 'ร้านค้าออนไลน์แบบ API-first พร้อมหน้าร้านที่ออกแบบรอบแบรนด์ของคุณ เชื่อมระบบชำระเงิน สต๊อก และการจัดส่ง' },
        { icon: 'ti-brand-line', title: isEN ? 'LINE Mini App Development' : 'พัฒนา LINE Mini App', href: '/services/line-mini-apps', desc: isEN ? 'Mini Apps, chat-based selling and payments inside LINE, where many Thai customers already spend their day.' : 'Mini App ระบบขายผ่านแชท และการชำระเงินใน LINE ที่ลูกค้าคนไทยจำนวนมากใช้อยู่ทุกวัน' },
      ],
    },
    {
      key: 'enterprise-security',
      label: isEN ? 'Enterprise & Security' : 'องค์กรและความปลอดภัย',
      items: [
        { icon: 'ti-building-factory', title: isEN ? 'Enterprise Solutions (ERP / CRM / POS)' : 'ระบบองค์กร (ERP / CRM / POS)', href: '/services/enterprise-solutions', desc: isEN ? 'We select, set up and configure ERP, CRM and POS systems around how your business actually runs.' : 'เราช่วยเลือก ติดตั้ง และปรับแต่งระบบ ERP, CRM และ POS ให้ตรงกับวิธีทำงานจริงของธุรกิจคุณ' },
        { icon: 'ti-shield-search', title: isEN ? 'Cybersecurity' : 'Cybersecurity', href: '/services/cybersecurity', desc: isEN ? 'Security assessments, secure-by-design engineering and help meeting compliance requirements.' : 'ประเมินความปลอดภัย วางระบบให้ปลอดภัยตั้งแต่ออกแบบ และช่วยให้ทำตามข้อกำหนดได้' },
        { icon: 'ti-shield-lock', title: isEN ? 'PDPA Compliance' : 'PDPA Compliance', href: '/services/pdpa-compliance', desc: isEN ? 'PDPA audits, consent and cookie management, and request workflows built into your systems, from a founding partner of PDPA.org.' : 'ตรวจ PDPA ทำระบบ Consent และ Cookie และขั้นตอนรับคำขอเจ้าของข้อมูลในระบบจริง โดย Founding Partner ของ PDPA.org' },
      ],
    },
    {
      key: 'support',
      label: isEN ? 'Support' : 'ดูแลและซัพพอร์ต',
      items: [
        { icon: 'ti-headset', title: isEN ? 'Managed Services & Support' : 'บำรุงรักษาและซัพพอร์ต', href: '/services/support-maintenance', desc: isEN ? 'Monitoring, on-call response and scheduled upkeep for production systems, with SLAs up to 24/7.' : 'เฝ้าระบบ วิศวกรเวรรับเหตุขัดข้อง และดูแลตามกำหนดสำหรับระบบ production พร้อม SLA ถึง 24/7' },
        { icon: 'ti-lifebuoy', title: isEN ? 'Website & App Support' : 'ดูแลเว็บไซต์และแอป', href: '/services/support', desc: isEN ? 'A named group of engineers to call when something breaks, plus routine updates and small changes for your website or app.' : 'ทีมวิศวกรที่คุณโทรหาได้เมื่อมีอะไรพัง พร้อมอัปเดตประจำและแก้ไขเล็กๆ น้อยๆ ให้เว็บไซต์หรือแอปของคุณ' },
      ],
    },
  ]

  const segments = isEN ? [
    { href: '/services/enterprise-solutions', icon: 'ti-building-skyscraper', title: 'Enterprise', desc: 'Full delivery teams for complex platforms, working to the security, compliance and approval processes that large organisations require, with the documentation to match.' },
    { href: '/contact', icon: 'ti-rocket', title: 'Small Business & Startups', desc: 'Lean, focused builds that get the essentials right. We help you cut scope, not quality, so a modest budget still ships a solid first version that you can grow.' },
  ] : [
    { href: '/services/enterprise-solutions', icon: 'ti-building-skyscraper', title: 'Enterprise', desc: 'ทีมครบทุกสายงานสำหรับแพลตฟอร์มซับซ้อน ทำงานตามมาตรฐานความปลอดภัย การทำตามข้อกำหนด และขั้นตอนอนุมัติที่องค์กรใหญ่ต้องการ พร้อมเอกสารที่ครบ' },
    { href: '/contact', icon: 'ti-rocket', title: 'ธุรกิจขนาดเล็กและ Startup', desc: 'งานกระชับตรงจุด เราช่วยตัดขอบเขตที่ไม่จำเป็นออก ไม่ใช่ตัดคุณภาพ งบไม่มากก็ได้เวอร์ชันแรกที่แข็งแรงและโตต่อได้' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        {/* Hero */}
        <section className="svc-hero relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div className="svc-orb svc-orb-a" aria-hidden="true" />
          <div className="svc-orb svc-orb-b" aria-hidden="true" />
          <div className="svc-orb svc-orb-c" aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.09) 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)' }} />
          <div className="svc-sweep" aria-hidden="true" />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-14 text-center">
            <p className="t-label mb-5 svc-rise" style={{ animationDelay: '0s' }}>{isEN ? 'Services' : 'บริการ'}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-relaxed mb-6 svc-rise" style={{ color: 'var(--ink)', animationDelay: '.1s' }}>
              {isEN ? (
                <>Everything You Need,<br /><span className="svc-grad-text">In One Studio</span></>
              ) : (
                <>ทุกความสามารถที่คุณต้องการ<br /><span className="svc-grad-text">ในสตูดิโอเดียว</span></>
              )}
            </h1>
            <p className="t-body text-lg leading-relaxed max-w-2xl mx-auto svc-rise" style={{ color: 'rgb(var(--fg) / 0.8)', animationDelay: '.2s' }}>
              {isEN
                ? 'Brand strategy, product design, web and mobile development, AI, data and security. One team looks after the whole product, so you do not have to coordinate a different vendor for each part.'
                : 'ตั้งแต่สร้างแบรนด์ ออกแบบผลิตภัณฑ์ พัฒนาเว็บและแอปมือถือ ไปจนถึง AI ข้อมูล และความปลอดภัย ทีมเดียวดูแลทั้งผลิตภัณฑ์ คุณจึงไม่ต้องประสานงานกับผู้ให้บริการหลายราย'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-9 svc-rise" style={{ animationDelay: '.3s' }}>
              <Link href={`${prefix}/services/branding`} className="px-6 py-3 rounded-full text-sm" style={{ background: 'linear-gradient(135deg,#7B6EF6,#5A4ED4)', color: '#fff', fontWeight: 600 }}>
                {isEN ? 'Start with your brand' : 'เริ่มจากสร้างแบรนด์'}
              </Link>
              <Link href={`${prefix}/contact`} className="px-6 py-3 rounded-full text-sm" style={{ border: '1px solid rgb(var(--fg) / 0.3)', color: 'var(--ink)', fontWeight: 500 }}>
                {isEN ? 'Talk to us' : 'ปรึกษาโครงการ'}
              </Link>
            </div>
          </div>
          <div className="relative pb-12 svc-marquees" aria-hidden="true">
            {[0, 1].map((row) => {
              const all = categories.flatMap((c) => c.items.map((i) => i.title))
              const list = all.filter((_, n) => n % 2 === row)
              const loop = [...list, ...list]
              return (
                <div key={row} className="svc-track-wrap">
                  <div className={`svc-track ${row ? 'svc-track-rev' : ''}`}>
                    {loop.map((t, n) => (
                      <span key={n} className="svc-chip">{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,#7B6EF6,#53C3D7,transparent)' }} />
        </section>

        {/* Category sections */}
        <section className="pb-24 pt-4" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {categories.map((cat, ci) => (
              <div key={cat.key} className={`py-12 ${ci !== 0 ? 'border-t' : ''}`} style={{ borderColor: 'rgb(var(--fg) / 0.06)' }}>
                <h2 className="mb-8" style={{ fontWeight: 500, fontSize: '1.4rem', color: 'var(--accent-2)' }}>{cat.label}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                  {cat.items.map((it, ix) => {
                    const slug = it.href.split('/').pop() as string
                    return (
                      <Link key={it.href} href={`${prefix}${it.href}`} className="group flex flex-col">
                        {/* Visual mockup thumbnail */}
                        <div
                          className="svc-thumb relative h-56 rounded-2xl overflow-hidden mb-6 group-hover:border-[var(--purple-light)]/40 transition-colors"
                          style={{ ['--d' as any]: `${((ix + ci * 3) % 6) * 0.7}s`, background: 'linear-gradient(160deg,var(--bg-1) 0%,var(--bg-deep) 100%)', border: '1px solid var(--line)' }}
                        >
                          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,rgb(var(--fg)) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                          <ServiceVisual slug={slug} />
                        </div>
                        {/* Content */}
                        <h3 className="text-[color:var(--ink)] mb-2.5" style={{ fontWeight: 500, fontSize: '1.2rem' }}>{it.title}</h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}>{it.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm mt-auto" style={{ color: 'var(--accent-2)', fontWeight: 500 }}>
                          {isEN ? 'Learn more' : 'ดูเพิ่มเติม'}
                          <i className="ti ti-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Segments */}
        <section className="py-20" style={{ background: 'var(--bg-1)' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <p className="t-label mb-5">{isEN ? 'Who We Work With' : 'เราทำงานกับใคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3rem)] text-[color:var(--ink)]">
                {isEN ? 'Built for Your Scale' : 'ออกแบบให้เหมาะกับขนาดธุรกิจคุณ'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {segments.map((seg) => (
                <Link key={seg.title} href={`${prefix}${seg.href}`} className="group bg-[var(--bg)] border border-[color:var(--line)] rounded-2xl p-8 block transition-colors hover:border-[var(--purple-light)]/50">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-6">
                    <i className={`ti ${seg.icon}`} style={{ fontSize: 22, color: 'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[color:var(--ink)] mb-3" style={{ fontWeight: 500, fontSize: '1.3rem' }}>{seg.title}</h3>
                  <p className="t-body text-sm leading-relaxed mb-5">{seg.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'var(--accent-2)', fontWeight: 500 }}>
                    {seg.href === '/contact' ? (isEN ? 'Talk to us' : 'คุยกับเรา') : (isEN ? 'Learn more' : 'ดูเพิ่มเติม')}
                    <i className="ti ti-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band theme-dark py-24 lg:py-32 relative overflow-hidden">
          <div className="cta-dots absolute inset-0 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 text-center">
            <p className="mb-6" style={{ color: 'var(--ink)', fontSize: '0.85rem', fontWeight: 400 }}>{isEN ? 'Start Today' : 'เริ่มวันนี้'}</p>
            <h2 className="t-display mb-4 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 500 }}>
              {isEN ? 'Not Sure Where to Start?' : 'ไม่แน่ใจว่าจะเริ่มจากตรงไหน?'}
            </h2>
            <p className="text-[color:var(--ink)] text-base mb-10 max-w-lg mx-auto" style={{ fontWeight: 400 }}>
              {isEN ? 'Tell us what you are working on and where you are stuck. We will point you to the right service, and tell you honestly if another approach would suit you better.' : 'เล่าให้เราฟังว่าคุณกำลังทำอะไรอยู่และติดตรงไหน เราจะแนะนำบริการที่เหมาะ และบอกตรงๆ ถ้ามีวิธีอื่นที่เหมาะกว่า'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="cta-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-colors" style={{ fontWeight: 500 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:info@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 border border-[color:rgb(var(--fg)/0.3)] text-[color:var(--ink)] rounded-full text-sm hover:border-[color:rgb(var(--fg)/0.6)] transition-colors" style={{ fontWeight: 400 }}>
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
