import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SocialIcons from '@/components/SocialIcons'
import ContactFields from '@/components/ContactFields'
import ContactFormShell from '@/components/ContactFormShell'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Contact Haliviq | Web & App Studio in Bangkok' : 'ติดต่อ Haliviq | สตูดิโอ Web และแอปในกรุงเทพฯ'
  const description = isEN
    ? 'Talk to Haliviq about a website, app, LINE mini app or AI project. Free first consultation, NDA on request, and a reply within 24 hours from our Bangkok team.'
    : 'คุยกับ Haliviq เรื่อง website แอป LINE mini app หรือระบบ AI ปรึกษาครั้งแรกฟรี มี NDA ให้เมื่อต้องการ และทีมในกรุงเทพฯ ตอบกลับภายใน 24 ชั่วโมง'
  const url = `https://www.haliviq.com/${params.lang}/contact`
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

  const faqs = isEN ? [
    { q: 'How much does a project cost?', a: 'Pricing depends on scope, complexity and team size. Small projects start around THB 300,000, while larger or enterprise projects are quoted once we understand what needs to be built. The things that move the price most are the number of screens or page types, how many systems we have to connect to (payments, CRM, ERP, LINE and so on), and how much design and research is needed up front. Contact us for a free estimate.' },
    { q: 'How long does a project take?', a: 'A simple website usually takes 4-8 weeks. A full product takes 3-6 months. We always begin with a Discovery phase, where we agree on the goal, the scope and the order of work, so the timeline we give you is based on a real plan rather than a guess.' },
    { q: 'Do you work with startups?', a: 'Yes. We work with funded startups, SMEs and larger organizations. What matters most is that you have a clear goal and are ready to make decisions during the project. If your idea is still rough, a short Discovery or prototype phase is a good way to test it before committing to a full build.' },
    { q: 'Do you handle maintenance after launch?', a: 'Yes. We offer maintenance packages that cover bug fixes, updates, performance monitoring and new feature work. A launch is rarely the end of a product, so we would rather stay on and keep it healthy than hand over a system nobody is looking after.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely. We can sit alongside your team and take on specific roles such as UX/UI design, front-end or back-end development, or we can own the whole product build. We use your tools and meeting rhythm where we can, so it does not feel like a separate vendor.' },
    { q: 'What should I prepare before the first conversation?', a: 'Nothing formal is needed. It helps to know what problem you are trying to solve, who the users are, any deadline or event driving the timing, and roughly what budget range you have in mind. If you already have documents, screenshots, an old website or a competitor you like, bring them along. We will help shape the rest in the first call.' },
    { q: 'Can we sign an NDA first, and who owns the work?', a: 'Yes, we can sign an NDA before you share anything sensitive. Ownership, handover and what you receive at the end (source code, design files, documentation) are agreed in the project contract, so both sides know the terms before work starts.' },
    { q: 'Do you build for Thai users and Thai-market needs?', a: 'Yes. We are based in Bangkok and regularly work on Thai-language interfaces, LINE integrations, PromptPay and local payment flows, and PDPA-conscious data handling. We also build bilingual Thai and English products when your audience spans more than one market.' },
  ] : [
    { q: 'ราคาเริ่มต้นเท่าไหร่?', a: 'ราคาขึ้นอยู่กับขอบเขตงาน ความซับซ้อน และขนาดทีม โปรเจกต์เล็กเริ่มราว 300,000 บาท ส่วนโปรเจกต์ระดับองค์กร (Enterprise) เราจะประเมินให้หลังจากเข้าใจว่าต้องสร้างอะไรบ้าง สิ่งที่ทำให้ราคาขึ้นลงมากที่สุดคือจำนวนหน้าจอหรือประเภทหน้า จำนวนระบบที่ต้องเชื่อมต่อ (เช่น ระบบชำระเงิน CRM ERP หรือ LINE) และงานออกแบบกับงานวิจัยที่ต้องทำก่อนเริ่มพัฒนา ติดต่อเราเพื่อขอใบเสนอราคาฟรีได้เลย' },
    { q: 'ใช้เวลานานแค่ไหน?', a: 'เว็บไซต์ทั่วไปใช้เวลา 4-8 สัปดาห์ ส่วนผลิตภัณฑ์เต็มรูปแบบใช้ 3-6 เดือน เราจะเริ่มจากช่วงสำรวจความต้องการ (Discovery) ก่อนทุกครั้ง เพื่อคุยให้ชัดว่าเป้าหมายคืออะไร ขอบเขตแค่ไหน และทำอะไรก่อนหลัง ระยะเวลาที่บอกจึงมาจากแผนงานจริง ไม่ใช่การเดา' },
    { q: 'รับงาน Startup ไหม?', a: 'รับ เราทำงานกับ Startup ที่ได้รับเงินทุนแล้ว SME และองค์กรใหญ่ สิ่งที่สำคัญที่สุดคือคุณมีเป้าหมายชัดเจนและพร้อมช่วยตัดสินใจระหว่างโปรเจกต์ ถ้าไอเดียยังไม่นิ่ง การทำ Discovery สั้น ๆ หรือ Prototype ก่อนเป็นวิธีที่ดีในการลองไอเดียก่อนลงทุนสร้างจริง' },
    { q: 'ดูแลหลัง Launch ด้วยไหม?', a: 'ดูแล เรามีแพ็กเกจดูแลรักษาระบบ ครอบคลุมการแก้บั๊ก การอัปเดต การเช็กประสิทธิภาพ และการพัฒนาฟีเจอร์เพิ่ม เพราะหลังเปิดตัวงานยังไม่จบ เราอยากอยู่ช่วยดูแลต่อ มากกว่าส่งมอบระบบแล้วไม่มีใครดูแล' },
    { q: 'ทำงานร่วมกับทีมที่มีอยู่ได้ไหม?', a: 'ได้เลย เราเข้าไปเป็นส่วนเสริมของทีมคุณได้ จะรับเฉพาะบางหน้าที่ เช่น ออกแบบ UX/UI งาน front-end หรือ back-end หรือดูแลทั้งผลิตภัณฑ์ก็ได้ และเราพยายามใช้เครื่องมือและจังหวะการประชุมแบบเดียวกับทีมคุณ เพื่อให้ทำงานด้วยกันได้เหมือนทีมเดียว' },
    { q: 'ต้องเตรียมอะไรก่อนคุยครั้งแรก?', a: 'ไม่ต้องเตรียมเป็นทางการ แต่ถ้ารู้ว่ากำลังแก้ปัญหาอะไร ผู้ใช้คือใคร มีกำหนดส่งหรืออีเวนต์ที่ต้องเปิดตัวไหม และพอมีงบประมาณคร่าว ๆ อยู่ในใจไหม ก็จะช่วยให้คุยกันได้เร็วขึ้น ถ้ามีเอกสาร ภาพหน้าจอ เว็บไซต์เดิม หรือคู่แข่งที่ชอบ เอามาให้ดูได้เลย ที่เหลือเราจะช่วยจัดให้ชัดในการคุยครั้งแรก' },
    { q: 'เซ็น NDA ก่อนได้ไหม แล้วงานเป็นของใคร?', a: 'ได้ เราเซ็น NDA ก่อนที่คุณจะส่งข้อมูลสำคัญให้ดูได้ เรื่องความเป็นเจ้าของงาน การส่งมอบ และสิ่งที่คุณจะได้รับตอนจบ (เช่น source code ไฟล์ออกแบบ เอกสาร) จะระบุไว้ในสัญญาโปรเจกต์ เพื่อให้ทั้งสองฝ่ายเข้าใจตรงกันก่อนเริ่มงาน' },
    { q: 'ทำงานให้ผู้ใช้ในไทยโดยเฉพาะได้ไหม?', a: 'ได้ เราอยู่กรุงเทพฯ และทำงานกับหน้าจอภาษาไทย การเชื่อมต่อ LINE PromptPay และระบบชำระเงินในไทย รวมถึงการดูแลข้อมูลให้สอดคล้องกับ PDPA อยู่เป็นประจำ ถ้ากลุ่มลูกค้าของคุณอยู่หลายตลาด เราก็ทำผลิตภัณฑ์สองภาษา ไทยและอังกฤษ ได้เช่นกัน' },
  ]

  const channels = isEN ? [
    { icon: 'ti-video', title: 'Book a call', value: 'Free 30-min video call', sub: 'Pick a time, Google Meet', href: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE' },
    { icon: 'ti-phone', title: 'Call', value: '+66 90 918 9009', sub: 'Direct line', href: 'tel:+66909189009' },
    { icon: 'ti-mail', title: 'Sales', value: 'wu@haliviq.com', sub: 'New projects & partnerships', href: 'mailto:wu@haliviq.com' },
    { icon: 'ti-headset', title: 'Support', value: 'info@haliviq.com', sub: 'Existing clients & support', href: 'mailto:info@haliviq.com' },
    { icon: 'ti-brand-whatsapp', title: 'WhatsApp', value: '+1 (206) 849 6901', sub: 'US team', href: 'https://wa.me/message/TM3WC6DUJAFEK1' },
    { icon: 'ti-brand-line', title: 'LINE OA', value: '@haliviq', sub: 'Fastest response', href: 'https://lin.ee/zyTrkx4' },
    { icon: 'ti-map-pin', title: 'Office — Thailand', value: '111 Sukhumvit Rd, Bang Chak,', sub: 'Phra Khanong, Bangkok 10260', href: '#' },
    { icon: 'ti-map-pin', title: 'Office — USA', value: '2025 Olympic Hwy N Ste 105,', sub: 'Shelton, WA', href: '#' },
  ] : [
    { icon: 'ti-video', title: 'จองนัดคุย', value: 'วิดีโอคอลฟรี 30 นาที', sub: 'เลือกเวลาได้เอง ผ่าน Google Meet', href: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE' },
    { icon: 'ti-phone', title: 'โทร', value: '+66 90 918 9009', sub: 'ติดต่อโดยตรง', href: 'tel:+66909189009' },
    { icon: 'ti-mail', title: 'ฝ่ายขาย', value: 'wu@haliviq.com', sub: 'โปรเจกต์ใหม่และพาร์ทเนอร์', href: 'mailto:wu@haliviq.com' },
    { icon: 'ti-headset', title: 'ฝ่ายซัพพอร์ต', value: 'info@haliviq.com', sub: 'ลูกค้าเดิมและงานซัพพอร์ต', href: 'mailto:info@haliviq.com' },
    { icon: 'ti-brand-whatsapp', title: 'WhatsApp', value: '+1 (206) 849 6901', sub: 'ทีมสหรัฐฯ', href: 'https://wa.me/message/TM3WC6DUJAFEK1' },
    { icon: 'ti-brand-line', title: 'LINE OA', value: '@haliviq', sub: 'ตอบไวที่สุด', href: 'https://lin.ee/zyTrkx4' },
    { icon: 'ti-map-pin', title: 'ออฟฟิศ — ไทย', value: '111 ถนนสุขุมวิท แขวงบางจาก,', sub: 'เขตพระโขนง กรุงเทพฯ 10260', href: '#' },
    { icon: 'ti-map-pin', title: 'ออฟฟิศ — สหรัฐฯ', value: '2025 Olympic Hwy N Ste 105,', sub: 'Shelton, WA', href: '#' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="t-label mb-5">{isEN ? 'Get in Touch' : 'ติดต่อเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,6vw,5.5rem)] leading-relaxed mb-8" style={{ color: 'var(--ink)' }}>
                  {isEN
                    ? <>Let&apos;s build<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>something great</span></>
                    : <>มาสร้าง<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>สิ่งดี ๆ ด้วยกัน</span></>}
                </h1>
                <p className="leading-relaxed mb-12" style={{ fontSize: '1.15rem', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400, maxWidth: 520 }}>
                  {isEN ? 'Tell us about your project, even if it is still a rough idea. We will get back to you within 24 hours with our first thoughts and a suggested next step. If you would rather talk, call us or message us on LINE, and we can set up a first consultation at no cost.' : 'เล่าเรื่องโปรเจกต์ของคุณให้เราฟังได้เลย แม้จะเป็นแค่ไอเดียคร่าว ๆ เราจะตอบกลับภายใน 24 ชั่วโมง พร้อมความเห็นเบื้องต้นและขั้นตอนถัดไปที่เราแนะนำ ถ้าอยากคุยเลย โทรหาเราหรือทักทาง LINE ได้ แล้วเรานัดปรึกษาครั้งแรกให้ฟรี'}
                </p>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-8 px-8 py-4 rounded-xl text-base transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
                >
                  <i className="ti ti-video" style={{ fontSize: 18 }} aria-hidden="true" />
                  {isEN ? 'Book a free call on Google Meet' : 'จองคุยฟรีผ่าน Google Meet'}
                </a>
                <div className="space-y-4 mb-12">
                  {channels.map(c => (
                    <a key={c.title} href={c.href}
                      className="flex items-center gap-5 p-5 rounded-2xl transition-all group"
                      style={{ border: '1px solid rgb(var(--fg) / 0.1)', background: 'rgb(var(--fg) / 0.03)' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{ background: 'rgba(123,110,246,0.15)' }}>
                        <i className={`ti ${c.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm mb-0.5" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>{c.title}</p>
                        <p style={{ fontWeight: 500, fontSize: '1.15rem', color: 'var(--ink)' }}>{c.value}</p>
                        <p className="text-sm" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>{c.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <SocialIcons lang={lang} className="mb-8" />
                <div className="flex items-center gap-3 flex-wrap">
                  {(isEN ? ['Free first consultation', 'NDA on request', 'Response within 24 hours'] : ['ปรึกษาครั้งแรกฟรี', 'มี NDA พร้อมให้ลงนาม', 'ตอบกลับภายใน 24 ชั่วโมง']).map(txt => (
                    <div key={txt} className="flex items-center gap-1.5">
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
                      <span className="text-sm" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.6)' }}>{txt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-card rounded-3xl p-8 lg:p-10 lg:sticky lg:top-24" style={{ border: '1px solid rgb(var(--fg) / 0.08)' }}>
                <h2 className="mb-8" style={{ fontWeight: 500, fontSize: '1.3rem', color: 'var(--ink)' }}>{isEN ? 'Tell us about your project' : 'เล่าเรื่องโปรเจกต์ของคุณ'}</h2>
                <ContactFormShell lang={lang}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>
                        {isEN ? 'Name' : 'ชื่อ'} <span style={{ color: '#F87171' }}>*</span>
                      </label>
                      <input type="text" name="name" autoComplete="name" placeholder={isEN ? 'Your name' : 'ชื่อของคุณ'} required
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors"
                        style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'var(--ink)', fontWeight: 400 }} />
                    </div>
                    <div>
                      <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>
                        Email <span style={{ color: '#F87171' }}>*</span>
                      </label>
                      <input type="email" name="email" autoComplete="email" placeholder="your@email.com" required
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors"
                        style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'var(--ink)', fontWeight: 400 }} />
                    </div>
                  </div>

                  <ContactFields lang={lang} part="phone" />

                  <ContactFields lang={lang} part="interest" />

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>
                      {isEN ? 'Message' : 'ข้อความ'} <span style={{ color: '#F87171' }}>*</span>
                    </label>
                    <textarea name="message" rows={5} placeholder={isEN ? 'Tell us about your project...' : 'เล่าเรื่องโปรเจกต์ของคุณ...'} required
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors resize-none"
                      style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'var(--ink)', fontWeight: 400 }} />
                  </div>

                  <ContactFields lang={lang} part="budget" />

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>
                      {isEN ? 'How did you hear about Haliviq?' : 'คุณรู้จัก Haliviq จากช่องทางไหน?'} <span style={{ color: 'rgb(var(--fg) / 0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
                    </label>
                    <select name="source"
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none appearance-none"
                      style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'rgb(var(--fg) / 0.6)', fontWeight: 400 }}
                      defaultValue=""
                    >
                      <option value="" style={{ color: '#000' }}>{isEN ? 'Please select...' : 'กรุณาเลือก...'}</option>
                      {(isEN ? [
                        'Google Search', 'LinkedIn', 'AI Chatbot', 'Referral / Word of mouth', 'Social Media (Facebook, X, etc.)', 'Event / Conference', 'News / Press', 'Other',
                      ] : [
                        'ค้นหาจาก Google', 'LinkedIn', 'AI Chatbot', 'คนรู้จักแนะนำ', 'โซเชียลมีเดีย (Facebook, X ฯลฯ)', 'งานอีเวนต์ / สัมมนา', 'ข่าว / สื่อ', 'อื่นๆ',
                      ]).map(opt => <option key={opt} value={opt} style={{ color: '#000' }}>{opt}</option>)}
                    </select>
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-xl cursor-pointer" style={{ border: '1px solid rgb(var(--fg) / 0.1)', background: 'rgb(var(--fg) / 0.02)' }}>
                    <input type="checkbox" name="newsletter" defaultChecked
                      className="mt-0.5 shrink-0"
                      style={{ width: 18, height: 18, accentColor: 'var(--purple)' }} />
                    <span>
                      <span className="block text-sm mb-1" style={{ fontWeight: 500, color: 'var(--ink)' }}>{isEN ? 'Subscribe to our newsletter' : 'สมัครรับข่าวสารจากเรา'}</span>
                      <span className="block text-xs leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>
                        {isEN ? 'Get the latest insights, articles, and updates about digital transformation and technology trends.' : 'รับบทความและข่าวสารล่าสุดเรื่องการปรับธุรกิจสู่ดิจิทัล (Digital Transformation) และเทคโนโลยี'}
                      </span>
                    </span>
                  </label>

                  <button type="submit" className="w-full justify-center py-4 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-[1.02]"
                    style={{ fontSize: '1rem', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}>
                    {isEN ? 'Send Message' : 'ส่งข้อความ'}
                    <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgb(var(--fg) / 0.4)', fontWeight: 400 }}>
                    {isEN ? (
                      <>By submitting this form, you agree to our <a href={`/${lang}/privacy`} className="hover:text-[color:var(--ink)] transition-colors" style={{ color: 'var(--accent-2)', textDecoration: 'underline' }}>Privacy Policy</a>.</>
                    ) : (
                      <>เมื่อส่งแบบฟอร์มนี้ ถือว่าคุณยอมรับ<a href={`/${lang}/privacy`} className="hover:text-[color:var(--ink)] transition-colors" style={{ color: 'var(--accent-2)', textDecoration: 'underline' }}>นโยบายความเป็นส่วนตัว</a>ของเรา</>
                    )}
                  </p>
                </ContactFormShell>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          lang={lang}
          items={faqs}
          gradientHeading
          h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'}
          subtitle={isEN ? 'Answers to what people usually ask before we start' : 'คำตอบสำหรับสิ่งที่ลูกค้ามักถามก่อนเริ่มงาน'}
        />
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
