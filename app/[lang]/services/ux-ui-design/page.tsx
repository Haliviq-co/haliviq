import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  figma: { hex: '#F24E1E', path: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z' },
  storybook: { hex: '#FF4785', path: 'M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z' },
  maze: { hex: '#FFFFFF', path: 'M1.126 16.547c-1.5013-1.4881-1.5013-3.9009 0-5.389l4.0778-4.042c1.2692-1.258 3.205-1.4525 4.6803-.5836.4564.2687.4524.8852.077 1.2573-.3753.372-.988.34-1.4975.1923-.6524-.1891-1.386-.0287-1.9006.4813l-4.0777 4.0419a1.8935 1.8935 0 0 0 0 2.6945c.7506.744 1.9678.744 2.7184 0l8.1555-8.0836c1.5014-1.4882 3.9355-1.4882 5.437 0l4.0778 4.0418c1.5013 1.4881 1.5013 3.901 0 5.389-1.5014 1.4882-3.9356 1.4882-5.437 0l-1.3593-1.3472-1.699 1.684c-1.2692 1.258-3.205 1.4526-4.6804.5837-.4563-.2687-.4523-.8852-.077-1.2573.3754-.372.988-.34 1.4975-.1923.6524.1892 1.386.0287 1.9006-.4813l1.7476-1.7322c.724-.7175 1.8975-.7175 2.6214 0l1.4078 1.3954c.7507.744 1.9678.744 2.7186 0a1.8936 1.8936 0 0 0 0-2.6945l-4.0779-4.0419c-.7507-.744-1.9678-.744-2.7185 0L6.563 16.5471c-1.5014 1.4882-3.9356 1.4881-5.437 0' },
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

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? "UX/UI Design Agency in Bangkok, Thailand | Haliviq"
    : "รับออกแบบ UX/UI เว็บและแอป กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq is a UX/UI design agency in Bangkok. We research users, design flows and screens in Figma, test with real people and hand over files developers can use."
    : "Haliviq รับออกแบบ UX/UI เว็บและแอปที่กรุงเทพฯ วิจัยผู้ใช้ ออกแบบเส้นทางและหน้าจอใน Figma ทดสอบกับคนจริง แล้วส่งไฟล์ที่ทีมพัฒนาใช้ต่อได้ทันที"
  const url = `https://www.haliviq.com/${params.lang}/services/ux-ui-design`
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

  const badge    = isEN ? 'Design / UX & UI Design'  : 'ดีไซน์ / UX & UI Design'
  const title    = isEN ? 'Beautiful Design'  : 'ดีไซน์ที่สวย'
  const subtitle = isEN ? 'That Actually Works'    : 'และใช้งานได้จริง'
  const heroDesc = isEN ? 'A screen can look good and still lose customers at the third step. Haliviq designs web and mobile products in Bangkok starting from how people actually use them: we talk to your users, map the journey, sketch the flow, design the interface in Figma and test it before developers touch it. The result is a product that feels simple even when the subject is not, such as insurance, logistics or a hospital booking system, and a design file your engineers can build from without guessing.'  : 'หน้าจอสวยแต่ลูกค้าหลุดไปตั้งแต่ขั้นตอนที่สามก็มีให้เห็นบ่อย Haliviq ออกแบบเว็บและแอปที่กรุงเทพฯ โดยเริ่มจากวิธีที่คนใช้จริง เราคุยกับผู้ใช้ของคุณ วาดเส้นทาง ร่างลำดับการใช้งาน ออกแบบหน้าจอใน Figma และทดสอบก่อนที่นักพัฒนาจะเริ่มงาน ผลที่ได้คือผลิตภัณฑ์ที่ใช้ง่ายแม้เรื่องที่ทำจะซับซ้อน เช่น ประกัน โลจิสติกส์ หรือระบบจองคิวโรงพยาบาล และไฟล์ดีไซน์ที่วิศวกรสร้างต่อได้โดยไม่ต้องเดา'
  const whyTitle = isEN ? 'Why bad UX costs more than you think'    : 'ทำไม UX ที่ไม่ดีถึงมีต้นทุนสูงกว่าที่คิด'
  const whyDesc  = isEN ? 'Every point of friction in a product is a user who gave up on a task, a customer who did not buy and a support ticket that should never have been written. These losses are quiet: nobody reports them, they just show up as a weak conversion rate or a busy help desk. Fixing them in design is far cheaper than fixing them in code, and the improvement can be measured, in completed tasks, sign-ups and fewer calls to your team.'  : 'ทุกจุดติดขัดในผลิตภัณฑ์คือผู้ใช้ที่ทำงานไม่สำเร็จแล้วเลิกกลางทาง ลูกค้าที่ไม่ซื้อ และ ticket ขอความช่วยเหลือที่ไม่ควรมีใครต้องเขียน ความสูญเสียพวกนี้เงียบมาก ไม่มีใครมารายงาน เห็นแค่ conversion ต่ำหรือฝ่ายซัพพอร์ตที่ยุ่งตลอด การแก้ตั้งแต่ขั้นออกแบบถูกกว่าแก้ในโค้ดมาก และวัดผลได้ ทั้งจำนวนคนทำงานสำเร็จ จำนวนสมัครสมาชิก และสายที่โทรเข้าทีมคุณน้อยลง'
  const ctaTitle = isEN ? 'Ready to design something great?'    : 'พร้อมออกแบบสิ่งที่ดีจริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free UX Audit. Send us a link to your site or app, and we will walk through the main journeys, point out the biggest friction points and tell you what to fix first.'   : 'เริ่มด้วยการตรวจ UX ฟรี ส่งลิงก์เว็บหรือแอปมาให้เรา เราจะเดินดูเส้นทางหลักๆ ชี้จุดติดขัดที่ใหญ่ที่สุด และบอกว่าควรแก้อะไรก่อน'
  const overviewText = isEN
    ? 'We start by understanding the problem, not by opening a design tool. A typical project begins with interviews and a review of how your product is used today, then moves through user journeys, information architecture, wireframes and an interactive prototype that real users try before any visual polish. Once the flow works, we design the interface in Figma, build the components into a design system so screens stay consistent across web and mobile, and hand developers specs, tokens and assets. Each decision is checked against evidence, so what gets built serves your users and is not a guess dressed up as a mockup.'
    : 'เราเริ่มจากทำความเข้าใจปัญหาก่อน ไม่ใช่เปิดโปรแกรมออกแบบทันที โปรเจกต์ทั่วไปเริ่มจากสัมภาษณ์และดูว่าตอนนี้ผู้ใช้ใช้ผลิตภัณฑ์ของคุณอย่างไร แล้วไล่ไปที่เส้นทางผู้ใช้ โครงสร้างข้อมูล Wireframe และต้นแบบที่กดใช้ได้ให้ผู้ใช้จริงลองก่อนเริ่มตกแต่งภาพ เมื่อลำดับการใช้งานเวิร์กแล้ว เราออกแบบหน้าจอใน Figma สร้างคอมโพเนนต์เป็น Design System เพื่อให้หน้าจอสอดคล้องกันทั้งเว็บและมือถือ และส่งสเปก token และไฟล์ภาพให้นักพัฒนา ทุกการตัดสินใจเทียบกับหลักฐาน สิ่งที่สร้างจึงตอบโจทย์ผู้ใช้ ไม่ใช่การเดาที่ห่อด้วย Mockup สวยๆ'

  const heroBullets = isEN ? [
      'User research and personas drawn from real interviews, not workshop guesses',
      'Information architecture and user flows that show every step from first visit to goal',
      'Wireframes, clickable prototypes and usability tests with people from your target group',
      'High-fidelity UI design in Figma, with specs developers can build from',
      'A design system so new screens reuse the same parts, on web and mobile',
      'Thai and English layouts designed together, with accessibility built in from the start',
    ] : [
      'วิจัยผู้ใช้และสร้าง Persona จากการสัมภาษณ์จริง ไม่ใช่การเดาในเวิร์กช็อป',
      'วางโครงสร้างข้อมูลและเส้นทางการใช้งาน ให้เห็นทุกขั้นตั้งแต่เข้าครั้งแรกจนถึงเป้าหมาย',
      'ทำ Wireframe ต้นแบบที่กดใช้ได้ และทดสอบการใช้งานกับคนในกลุ่มเป้าหมาย',
      'ออกแบบ UI ละเอียดใน Figma พร้อมสเปกที่นักพัฒนาสร้างต่อได้',
      'สร้าง Design System ให้หน้าจอใหม่ใช้ชิ้นส่วนเดิมซ้ำได้ ทั้งเว็บและมือถือ',
      'ออกแบบเลย์เอาต์ไทยและอังกฤษไปพร้อมกัน และฝังเรื่องการเข้าถึงสำหรับทุกคนตั้งแต่ต้น',
    ]
  const whyPoints   = isEN ? [
      'Every 1 invested in UX returns 100 on average, a 9,900% ROI, so even a small design fix tends to repay itself quickly.',
      'Cutting task completion time by 20% through better UX has the same effect as adding staff, for internal tools and customer-facing apps alike.',
      'Good onboarding shortens time-to-value for new users, which directly lifts Day-1 and Day-7 retention.',
      'Accessible design reaches a wider audience, including older users and people with low vision, and lowers legal risk.',
      'A design system cuts design and development time by 30-50% for every new feature, because screens are assembled from parts that already exist.',
      'Testing a prototype with five users before development finds most of the serious usability problems while they are still cheap to change.',
    ] : [
      'ทุก 1 บาทที่ลงทุนใน UX ให้ผลตอบแทนเฉลี่ย 100 บาท คิดเป็น ROI 9,900% การแก้ดีไซน์เล็กๆ ก็มักคุ้มค่าเร็ว',
      'ลดเวลาทำงานของผู้ใช้ 20% ด้วย UX ที่ดีขึ้น มีผลเท่ากับการจ้างพนักงานเพิ่ม ทั้งกับเครื่องมือภายในและแอปที่ลูกค้าใช้',
      'ขั้นตอนเริ่มใช้งานที่ดีช่วยให้ผู้ใช้ใหม่เห็นคุณค่าเร็วขึ้น ส่งผลโดยตรงต่อการกลับมาใช้ในวันที่ 1 และวันที่ 7',
      'การออกแบบให้ทุกคนเข้าถึงได้ ขยายกลุ่มผู้ใช้ รวมถึงผู้สูงวัยและคนสายตาไม่ดี และลดความเสี่ยงทางกฎหมาย',
      'Design System ช่วยลดเวลาออกแบบและพัฒนาฟีเจอร์ใหม่ 30-50% เพราะหน้าจอประกอบจากชิ้นส่วนที่มีอยู่แล้ว',
      'ทดสอบต้นแบบกับผู้ใช้ 5 คนก่อนพัฒนา ก็เจอปัญหาการใช้งานร้ายแรงเกือบทั้งหมดตอนที่ยังแก้ได้ไม่แพง',
    ]
  const outcomes    = isEN ? [
      {stat: '9,900%', label: 'Average UX ROI', desc: 'Forrester Research benchmark'},
      {stat: '20%', label: 'Task Completion Improvement', desc: 'After UX redesign'},
      {stat: '50%', label: 'Faster Feature Delivery', desc: 'With a design system'},
      {stat: '4.8★', label: 'Average Usability Score', desc: 'Post-launch user testing'}
    ] : [
      {stat: '9,900%', label: 'ROI เฉลี่ยจาก UX', desc: 'อ้างอิง Forrester Research'},
      {stat: '20%', label: 'ผู้ใช้ทำงานสำเร็จมากขึ้น', desc: 'หลังปรับ UX ใหม่'},
      {stat: '50%', label: 'ส่งมอบฟีเจอร์เร็วขึ้น', desc: 'ด้วย Design System'},
      {stat: '4.8★', label: 'คะแนนความง่ายในการใช้งานเฉลี่ย', desc: 'จากการทดสอบหลังเปิดตัว'}
    ]
  const features    = isEN ? [
      {icon: 'ti-user-search', title: 'User Research', desc: 'We interview real users, run short surveys and watch usability tests to understand what people are trying to do and where they get stuck. You get personas, journey maps and a ranked list of problems, based on what we heard.'},
      {icon: 'ti-sitemap', title: 'Information Architecture', desc: 'We organise content, menus and labels so people find what they need without thinking about your org chart. Card sorting and tree testing show whether the structure makes sense to your users before it is built.'},
      {icon: 'ti-pencil', title: 'Wireframing & Prototyping', desc: 'Wireframes show structure and flow, and clickable prototypes let users try it. Changes at this stage take hours, not sprints, so this is the cheapest place to find out something is wrong.'},
      {icon: 'ti-palette', title: 'Visual UI Design', desc: 'We design interfaces that fit your brand, read well in Thai and English, and meet accessibility basics such as colour contrast and touch-target size. Every screen is designed in its states too: empty, loading, error and success.'},
      {icon: 'ti-components', title: 'Design System', desc: 'A shared library of components, tokens and guidelines, kept in Figma and in code, so designers and developers work from the same parts and new screens are faster to build.'},
      {icon: 'ti-device-mobile-check', title: 'Usability Testing', desc: 'We test with people from your target group at each stage, in Thai or English, and change the design based on what they do rather than what the team prefers. You see short clips of real struggles, which end many arguments.'}
    ] : [
      {icon: 'ti-user-search', title: 'User Research', desc: 'เราสัมภาษณ์ผู้ใช้จริง ทำแบบสำรวจสั้นๆ และดูการทดสอบการใช้งาน เพื่อเข้าใจว่าคนพยายามทำอะไรและติดตรงไหน คุณจะได้ Persona แผนผังเส้นทาง และรายการปัญหาเรียงลำดับ จากสิ่งที่เราได้ยินจริง'},
      {icon: 'ti-sitemap', title: 'Information Architecture', desc: 'เราจัดเนื้อหา เมนู และชื่อเรียกให้คนหาสิ่งที่ต้องการเจอโดยไม่ต้องคิดถึงผังองค์กรของคุณ ใช้ card sorting และ tree testing ดูว่าโครงสร้างสมเหตุสมผลกับผู้ใช้ไหม ก่อนจะสร้างจริง'},
      {icon: 'ti-pencil', title: 'Wireframing & Prototyping', desc: 'Wireframe แสดงโครงสร้างและลำดับการใช้งาน ส่วนต้นแบบที่กดใช้ได้ให้ผู้ใช้ลองเล่น การแก้ในช่วงนี้ใช้เวลาเป็นชั่วโมง ไม่ใช่เป็นสปรินต์ จึงเป็นจุดที่ถูกที่สุดที่จะรู้ว่ามีอะไรผิด'},
      {icon: 'ti-palette', title: 'Visual UI Design', desc: 'เราออกแบบหน้าจอให้เข้ากับแบรนด์ อ่านง่ายทั้งไทยและอังกฤษ และได้ตามพื้นฐานการเข้าถึง เช่น ความต่างของสีและขนาดปุ่มที่แตะได้ ทุกหน้าออกแบบครบทุกสถานะด้วย ทั้งหน้าว่าง กำลังโหลด error และสำเร็จ'},
      {icon: 'ti-components', title: 'Design System', desc: 'ชุดคอมโพเนนต์ token และแนวทางที่ใช้ร่วมกัน เก็บทั้งใน Figma และในโค้ด นักออกแบบกับนักพัฒนาจึงใช้ชิ้นส่วนเดียวกัน และหน้าจอใหม่สร้างได้เร็วขึ้น'},
      {icon: 'ti-device-mobile-check', title: 'Usability Testing', desc: 'เราทดสอบกับคนในกลุ่มเป้าหมายทุกช่วง เป็นภาษาไทยหรืออังกฤษ แล้วปรับดีไซน์ตามสิ่งที่เขาทำจริง ไม่ใช่ตามที่ทีมชอบ คุณจะเห็นคลิปสั้นๆ ตอนผู้ใช้ติดขัดจริง ซึ่งช่วยจบข้อถกเถียงได้หลายเรื่อง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Research & Discovery', desc: 'We interview users, review competitors, run a heuristic evaluation of what exists today and read your analytics, so we start from facts about the context.'},
      {no: '02', title: 'Define & Architect', desc: 'We turn what we learned into user journeys, personas and an information architecture, and agree with you which problems to solve first.'},
      {no: '03', title: 'Design & Prototype', desc: 'We draw wireframes, then high-fidelity screens, and link them into a clickable prototype that behaves like the real product.'},
      {no: '04', title: 'Test & Validate', desc: 'We test with real users, fix what they struggle with and check again, until the main tasks work without help.'},
      {no: '05', title: 'Handoff & Support', desc: 'We deliver specs, assets and the design system, walk your developers through the logic and answer questions while they build.'}
    ] : [
      {no: '01', title: 'Research & Discovery', desc: 'เราสัมภาษณ์ผู้ใช้ ดูคู่แข่ง ประเมินระบบปัจจุบันตามหลัก Heuristic และอ่านข้อมูล analytics เพื่อเริ่มจากข้อเท็จจริงของบริบท'},
      {no: '02', title: 'Define & Architect', desc: 'เรานำสิ่งที่เรียนรู้มาเป็นเส้นทางผู้ใช้ Persona และโครงสร้างข้อมูล แล้วตกลงกับคุณว่าจะแก้ปัญหาไหนก่อน'},
      {no: '03', title: 'Design & Prototype', desc: 'เราวาด Wireframe แล้วทำหน้าจอความละเอียดสูง ต่อเป็นต้นแบบที่กดใช้ได้และทำงานเหมือนผลิตภัณฑ์จริง'},
      {no: '04', title: 'Test & Validate', desc: 'เราทดสอบกับผู้ใช้จริง แก้จุดที่เขาติดขัด แล้วตรวจซ้ำ จนงานหลักๆ ทำได้เองโดยไม่ต้องมีคนช่วย'},
      {no: '05', title: 'Handoff & Support', desc: 'เราส่งสเปก ไฟล์ภาพ และ Design System พาทีมพัฒนาเดินดู logic และอยู่ตอบคำถามระหว่างที่เขาสร้าง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Mobile Banking Redesign, +62% DAU', desc: 'Research with 200 users, full UX redesign, improved task completion rate.', result: 'DAU up 62%'},
      {tag: 'Healthcare · Bangkok', title: 'Most Usable Patient App in Thailand', desc: 'Designed end-to-end patient journey from appointment to results.', result: 'App Store Rating 4.9★'},
      {tag: 'E-Commerce · Nationwide', title: 'Checkout Redesign, -45% Abandonment', desc: 'Single-page checkout tested with real users, reduced steps from 7 to 3.', result: 'Cart Abandonment down 45%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ออกแบบ Mobile Banking ใหม่ DAU เพิ่ม 62%', desc: 'วิจัยกับผู้ใช้ 200 คน ออกแบบ UX ใหม่ทั้งหมด ผู้ใช้ทำงานสำเร็จมากขึ้น', result: 'DAU เพิ่ม 62%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'แอปผู้ป่วยที่ใช้งานง่ายที่สุดในไทย', desc: 'ออกแบบเส้นทางผู้ป่วยตั้งแต่นัดหมายถึงรับผลตรวจ', result: 'App Store Rating 4.9★'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ออกแบบหน้า Checkout ใหม่ ลดการทิ้งตะกร้า 45%', desc: 'Checkout หน้าเดียวที่ทดสอบกับผู้ใช้จริง ลดขั้นตอนจาก 7 เหลือ 3', result: 'ทิ้งตะกร้าลด 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between UX and UI?', a: 'UX is the whole experience: the flow, the structure and how it feels to get something done. UI is the visual interface people see and touch. We do both so they fit together.'},
      {q: 'Do we always need research before design?', a: 'Research reduces risk. The scope depends on your time and budget, but even five user interviews before designing make a clear difference.'},
      {q: 'How long does it take?', a: 'A UX Audit takes 1-2 weeks. A full UX/UI project takes 6-12 weeks, depending on size and complexity.'},
      {q: 'What do we get at handoff?', a: 'A complete Figma file, design tokens, a component library, the prototype, a spec document and export-ready assets.'}
    ] : [
      {q: 'UX กับ UI ต่างกันอย่างไร?', a: 'UX คือประสบการณ์ทั้งหมด ตั้งแต่ลำดับการใช้งาน โครงสร้าง จนถึงความรู้สึกเวลาทำงานให้สำเร็จ ส่วน UI คือหน้าจอที่คนมองเห็นและแตะ เราทำทั้งสองอย่างให้เข้ากัน'},
      {q: 'ต้องวิจัยก่อนออกแบบทุกครั้งไหม?', a: 'การวิจัยช่วยลดความเสี่ยง ขอบเขตขึ้นกับเวลาและงบของคุณ แต่แค่สัมภาษณ์ผู้ใช้ 5 คนก่อนออกแบบ ก็ต่างอย่างเห็นได้ชัด'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'ตรวจ UX ใช้ 1-2 สัปดาห์ โปรเจกต์ UX/UI เต็มรูปแบบใช้ 6-12 สัปดาห์ ขึ้นกับขนาดและความซับซ้อน'},
      {q: 'ส่งมอบอะไรบ้าง?', a: 'ไฟล์ Figma ครบถ้วน, Design Token, ชุดคอมโพเนนต์, ต้นแบบ, เอกสารสเปก และไฟล์ภาพพร้อมใช้'}
    ]
  const related     = isEN ? [
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ] : [
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ]

  const designLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>Frame</span>&nbsp;{isEN ? 'Onboarding / Sign up' : 'เริ่มใช้งาน / สมัครสมาชิก'}</> },
    { n: 2, jsx: <>&nbsp;&nbsp;<span style={{ color: '#C792EA' }}>Button/Primary</span></> },
    { n: 3, jsx: <>&nbsp;&nbsp;<span style={{ color: '#C792EA' }}>Input/Email</span></> },
    { n: 4, jsx: <>&nbsp;</> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '5 usability tests passed' : 'ทดสอบการใช้งานผ่าน 5 คน'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'exporting design tokens' : 'Export Design Token'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Synced to Storybook' : 'ซิงก์กับ Storybook สำเร็จ'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>design.fig</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {designLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Usability Score' : 'คะแนนความง่ายในการใช้งาน'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 21l-2.4-7.6L3 11l6.6-2.4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '92%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '68%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '96%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '4.9/5 avg task success' : 'ผู้ใช้ทำสำเร็จเฉลี่ย 4.9/5'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-user-search', title: 'User Research', desc: 'Interviews, usability tests and behavioural evidence gathered in Thai or English, so product decisions rest on what users do. You receive personas, journey maps and a ranked list of problems to fix.' },
    { icon: 'ti-sitemap', title: 'UX & Information Architecture', desc: 'Flows, navigation and interaction design that make complex subjects understandable. We check labels and structure with card sorting and tree testing before anything is drawn in detail.' },
    { icon: 'ti-click', title: 'Prototyping & Validation', desc: 'Clickable Figma prototypes that people can try, used to test ideas with real users before expensive engineering begins. Changes at this stage take hours instead of sprints.' },
    { icon: 'ti-components', title: 'Design Systems', desc: 'Component libraries, tokens and documentation kept in Figma and in code, so product screens stay consistent across web and mobile and new features are quicker to design and build.' },
    { icon: 'ti-palette', title: 'Visual UI Design', desc: 'Interfaces that match your brand, read well in Thai and English, and meet accessibility basics. Every screen is designed in its empty, loading, error and success states, not only the happy path.' },
    { icon: 'ti-file-code', title: 'Developer Handoff', desc: 'A tidy Figma file with specs, spacing, tokens and export-ready assets, plus a walkthrough with your developers and answers to their questions while they build.' },
  ] : [
    { icon: 'ti-user-search', title: 'User Research', desc: 'สัมภาษณ์ ทดสอบการใช้งาน และหลักฐานเชิงพฤติกรรม เป็นภาษาไทยหรืออังกฤษ ให้การตัดสินใจเรื่องผลิตภัณฑ์อิงสิ่งที่ผู้ใช้ทำจริง คุณจะได้ Persona แผนผังเส้นทาง และรายการปัญหาที่ควรแก้เรียงตามลำดับ' },
    { icon: 'ti-sitemap', title: 'UX & Information Architecture', desc: 'ลำดับการใช้งาน เมนู และการออกแบบการโต้ตอบ ที่ทำให้เรื่องซับซ้อนเข้าใจง่ายขึ้น เราเช็กชื่อเรียกและโครงสร้างด้วย card sorting และ tree testing ก่อนจะวาดรายละเอียด' },
    { icon: 'ti-click', title: 'Prototyping & Validation', desc: 'ต้นแบบใน Figma ที่กดใช้ได้ ให้คนลองเล่น ไว้ทดสอบไอเดียกับผู้ใช้จริงก่อนเริ่มงานวิศวกรรมที่มีต้นทุนสูง การแก้ในช่วงนี้ใช้เวลาเป็นชั่วโมง ไม่ใช่เป็นสปรินต์' },
    { icon: 'ti-components', title: 'Design Systems', desc: 'ชุดคอมโพเนนต์ token และเอกสาร ที่เก็บทั้งใน Figma และในโค้ด ให้หน้าจอของผลิตภัณฑ์สอดคล้องกันทั้งเว็บและมือถือ และฟีเจอร์ใหม่ออกแบบและสร้างได้เร็วขึ้น' },
    { icon: 'ti-palette', title: 'Visual UI Design', desc: 'หน้าจอที่เข้ากับแบรนด์ อ่านง่ายทั้งไทยและอังกฤษ และได้ตามพื้นฐานการเข้าถึง ทุกหน้าออกแบบครบสถานะ ทั้งหน้าว่าง กำลังโหลด error และสำเร็จ ไม่ใช่แค่กรณีที่ทุกอย่างราบรื่น' },
    { icon: 'ti-file-code', title: 'Developer Handoff', desc: 'ไฟล์ Figma ที่จัดเรียบร้อย มีสเปก ระยะห่าง token และไฟล์ภาพพร้อมส่งออก พร้อมพาทีมพัฒนาเดินดูและตอบคำถามระหว่างที่เขาสร้าง' },
  ]

  const techStack = [
    { label: 'Figma', svg: 'figma' },
    { label: 'FigJam', svg: 'figma' },
    { label: 'Storybook', svg: 'storybook' },
    { label: 'UserTesting', icon: 'ti-user-check' },
    { label: 'Maze', svg: 'maze' },
    { label: 'Principle', icon: 'ti-player-play' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Research', desc: 'Interviews, evidence and behavioural insight' },
    { no: '02', title: 'UX Design', desc: 'Journeys, structure and interactions agreed with you' },
    { no: '03', title: 'UI Design', desc: 'Visual language, components and brand fit' },
    { no: '04', title: 'Prototype', desc: 'A clickable version that behaves like the real thing' },
    { no: '05', title: 'Test', desc: 'Real users try it, we fix it, we check again' },
    { no: '06', title: 'Handoff', desc: 'Specs, tokens and a design system developers can use' },
  ] : [
    { no: '01', title: 'Research', desc: 'สัมภาษณ์ หลักฐาน และข้อค้นพบเชิงพฤติกรรม' },
    { no: '02', title: 'UX Design', desc: 'เส้นทาง โครงสร้าง และการโต้ตอบที่ตกลงร่วมกับคุณ' },
    { no: '03', title: 'UI Design', desc: 'ภาษาภาพ คอมโพเนนต์ และความเข้ากับแบรนด์' },
    { no: '04', title: 'Prototype', desc: 'เวอร์ชันที่กดใช้ได้ ทำงานเหมือนของจริง' },
    { no: '05', title: 'Test', desc: 'ผู้ใช้จริงลอง เราแก้ แล้วตรวจซ้ำ' },
    { no: '06', title: 'Handoff', desc: 'สเปก token และ Design System ที่นักพัฒนาใช้ต่อได้' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What does product design at Haliviq include?', a: 'User research, UX and information architecture, interface design, rapid prototyping and design systems. We understand the problem before opening Figma, and every design is validated with real users before development begins, so nothing reaches engineering as an untested guess.' },
    { q: 'Do you run user research in Thailand?', a: 'Yes. We run research and usability testing with real users in Thai and English, and we design for Southeast Asian audiences as well as global ones. This matters for the details a generic template misses, such as local payment flows, address formats and reading patterns that differ from Western UX conventions.' },
    { q: 'Which design tools do you use?', a: 'Figma and FigJam for design and workshops, Storybook for design systems in code (not just static Figma files), and UserTesting and Maze for research and validation. We choose the toolset around your team\'s workflow so handoff is smooth, not a file-format migration project of its own.' },
    { q: 'Can you work within our existing design system?', a: 'Yes. We extend an existing design system where it works and build new parts where it does not. Either way the system lives in code with Storybook as well as in Figma, so designers and engineers look at the same source of truth instead of two versions that slowly drift apart.' },
    { q: 'How long does a design project take?', a: 'A focused UX Audit takes 1-2 weeks and gives you a prioritised list of friction points. A full UX/UI project for one product area typically runs 6-12 weeks from research to handoff, depending on complexity and how much existing research we can build on. A complete design system for an organisation with several products usually runs 3-4 months.' },
    { q: 'How much does design work cost?', a: 'Cost follows the number of screens, the depth of research and whether a design system is in scope. A scoped UX Audit generally starts in the low five figures (THB). A full UX/UI redesign for one product typically starts in the mid six figures, and a complete design system with component library and documentation costs several times that. We quote a fixed price per phase after an initial scoping call.' },
    { q: 'Who owns the Figma files, design system and assets afterwards?', a: 'You do, entirely. The complete Figma file, design tokens, component library, prototypes and all exported assets transfer to you on final payment, with no ongoing licence and no dependency on us. We recommend working inside your own Figma organisation from day one, so you have full ownership and edit access throughout the project, not only at handoff.' },
    { q: 'Do you design for accessibility and for both Thai and English content?', a: 'Yes, on both counts. Accessibility (colour contrast, touch-target size, screen reader support, keyboard navigation) is part of the design process, not a check at the end. Designs that must support both languages are built with bilingual content in mind from the start. Thai text runs longer than English in most UI contexts, so we make layouts that hold up in both, not only in the language we drafted first.' },
    { q: 'How is this different from your user research or rapid prototyping services?', a: 'This is the full design practice: research, flows, interface and handoff in one project. User research and rapid prototyping are narrower services for teams that only need one part, such as interviews to settle a decision, or a quick clickable prototype for investors. They can also be added to a design project when you need more depth.' },
  ] : [
    { q: 'งานออกแบบผลิตภัณฑ์ของ Haliviq ครอบคลุมอะไรบ้าง?', a: 'วิจัยผู้ใช้ ออกแบบ UX และโครงสร้างข้อมูล ออกแบบหน้าจอ ทำต้นแบบอย่างรวดเร็ว และทำ Design System เราเข้าใจปัญหาก่อนเปิด Figma และทุกดีไซน์ถูกตรวจกับผู้ใช้จริงก่อนเริ่มพัฒนา ไม่มีสิ่งที่ยังไม่ผ่านการทดสอบหลุดไปถึงทีมวิศวกร' },
    { q: 'ทำวิจัยผู้ใช้ในประเทศไทยได้ไหม?', a: 'ได้ เราวิจัยและทดสอบการใช้งานกับผู้ใช้จริงทั้งภาษาไทยและอังกฤษ และออกแบบให้ผู้ใช้ในเอเชียตะวันออกเฉียงใต้ เช่นเดียวกับผู้ใช้ทั่วโลก ซึ่งสำคัญกับรายละเอียดที่แม่แบบทั่วไปมักพลาด เช่น ขั้นตอนชำระเงินแบบท้องถิ่น รูปแบบที่อยู่ และพฤติกรรมการอ่านที่ต่างจากหลัก UX แบบตะวันตก' },
    { q: 'ใช้เครื่องมือออกแบบอะไรบ้าง?', a: 'Figma และ FigJam สำหรับงานออกแบบและเวิร์กช็อป, Storybook สำหรับ Design System ในรูปแบบโค้ด (ไม่ใช่แค่ไฟล์ Figma นิ่งๆ) และ UserTesting กับ Maze สำหรับงานวิจัยและตรวจสอบผล เราเลือกเครื่องมือตามวิธีทำงานของทีมคุณ ให้ส่งมอบได้ราบรื่น ไม่ต้องมีโปรเจกต์แปลงไฟล์แยกต่างหาก' },
    { q: 'ทำงานบน Design System ที่เรามีอยู่แล้วได้ไหม?', a: 'ได้ เราต่อยอด Design System ที่มีอยู่ในส่วนที่ยังใช้ดี และสร้างส่วนใหม่ในจุดที่ยังไม่ตอบโจทย์ ไม่ว่าแบบไหน ระบบจะอยู่ทั้งใน Figma และในโค้ดผ่าน Storybook เพื่อให้นักออกแบบและวิศวกรมองแหล่งข้อมูลเดียวกันเสมอ ไม่ใช่มีสองเวอร์ชันที่ค่อยๆ ต่างกันไปเรื่อยๆ' },
    { q: 'โปรเจกต์ออกแบบใช้เวลานานแค่ไหน?', a: 'การตรวจ UX ที่กำหนดขอบเขตชัดเจนใช้ 1-2 สัปดาห์ และได้รายการจุดติดขัดที่จัดลำดับแล้ว โปรเจกต์ UX/UI เต็มรูปแบบสำหรับหนึ่งส่วนของผลิตภัณฑ์โดยทั่วไปใช้ 6-12 สัปดาห์ ตั้งแต่วิจัยจนถึงส่งมอบ ขึ้นกับความซับซ้อนและงานวิจัยเดิมที่มี ส่วน Design System เต็มรูปแบบสำหรับองค์กรที่มีหลายผลิตภัณฑ์มักใช้ 3-4 เดือน' },
    { q: 'งานออกแบบมีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นกับจำนวนหน้าจอ ความลึกของงานวิจัย และว่ามี Design System อยู่ในขอบเขตหรือไม่ การตรวจ UX ที่กำหนดขอบเขตชัดเจนโดยทั่วไปเริ่มที่หลักหมื่นต้นๆ (บาท) การออกแบบ UX/UI ใหม่เต็มรูปแบบสำหรับหนึ่งผลิตภัณฑ์โดยทั่วไปเริ่มที่หลักแสนกลางๆ และ Design System เต็มรูปแบบพร้อมชุดคอมโพเนนต์และเอกสารมักอยู่ที่หลายเท่าของตัวเลขนั้น เราเสนอราคาคงที่แบ่งตามช่วงงานหลังคุยขอบเขตเบื้องต้น' },
    { q: 'ไฟล์ Figma, Design System และไฟล์ภาพเป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณทั้งหมด ไฟล์ Figma ฉบับสมบูรณ์ Design Token ชุดคอมโพเนนต์ ต้นแบบ และไฟล์ภาพที่ส่งออกทั้งหมดจะโอนเป็นของคุณเมื่อชำระเงินงวดสุดท้าย ไม่มีค่าลิขสิทธิ์ต่อเนื่องและไม่ต้องพึ่งเรา เราแนะนำให้ทำงานบน Figma Organization ของคุณเองตั้งแต่วันแรก คุณจะเป็นเจ้าของและแก้ไขได้เต็มที่ตลอดโปรเจกต์ ไม่ใช่แค่ตอนส่งมอบ' },
    { q: 'ออกแบบให้รองรับการเข้าถึงสำหรับทุกคนและเนื้อหาทั้งไทย-อังกฤษไหม?', a: 'รองรับทั้งสองเรื่อง การเข้าถึงสำหรับทุกคน (ความต่างของสี ขนาดปุ่มที่แตะได้ การรองรับโปรแกรมอ่านหน้าจอ การใช้งานด้วยคีย์บอร์ด) เป็นส่วนหนึ่งของขั้นตอนออกแบบตั้งแต่ต้น ไม่ใช่มาตรวจทีหลัง และงานที่ต้องรองรับสองภาษาจะออกแบบโดยคำนึงถึงเนื้อหาสองภาษาตั้งแต่แรก ข้อความภาษาไทยมักยาวกว่าภาษาอังกฤษใน UI ส่วนใหญ่ เราจึงทำเลย์เอาต์ให้ใช้ได้ดีทั้งสองภาษา ไม่ใช่แค่ภาษาที่ร่างไว้ก่อน' },
    { q: 'บริการนี้ต่างจาก User Research และ Rapid Prototyping ของคุณยังไง?', a: 'นี่คืองานออกแบบเต็มรูปแบบ ตั้งแต่วิจัย ลำดับการใช้งาน หน้าจอ ไปจนถึงส่งมอบ ในโปรเจกต์เดียว ส่วน User Research และ Rapid Prototyping เป็นบริการที่แคบกว่า สำหรับทีมที่ต้องการแค่ส่วนใดส่วนหนึ่ง เช่น สัมภาษณ์เพื่อตัดสินใจเรื่องหนึ่ง หรือทำต้นแบบกดใช้ได้เร็วๆ ไว้โชว์นักลงทุน และเพิ่มเข้ามาในโปรเจกต์ออกแบบได้ถ้าต้องการความลึกกว่านั้น' },
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
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven design and research tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'เครื่องมือออกแบบและวิจัยที่ผ่านการใช้งานจริง เลือกตามโจทย์งาน ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from problem to production — adjusted per product, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากโจทย์ปัญหาสู่ระบบจริง ปรับตามแต่ละผลิตภัณฑ์ ไม่ใช่สูตรตายตัว'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we design products.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราออกแบบผลิตภัณฑ์'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
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
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--accent)" bg="var(--purple-bg)"
      whyImg="/images/services/ux-ui-design/why1.jpg"
      whyImg2="/images/services/ux-ui-design/why2.jpg"
      featureImg="/images/services/ux-ui-design/feature.jpg"
      processImg="/images/services/ux-ui-design/process.jpg"
    />
  )
}
