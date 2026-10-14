import type { Metadata } from 'next'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Design System Agency in Bangkok | Haliviq'
    : 'รับทำ Design System กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Haliviq builds design systems in Bangkok: design tokens, Figma and React component libraries, docs, and accessibility, so every screen looks and works the same.'
    : 'Haliviq รับทำ Design System ในกรุงเทพฯ ตั้งแต่ Design Token และ Component Library ใน Figma กับโค้ด ไปจนถึงเอกสารและ Accessibility ให้ทุกหน้าจอใช้งานเหมือนกัน'
  const url = `https://www.haliviq.com/${params.lang}/services/design-systems`
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
  const badge    = isEN ? 'Design / Design Systems'  : 'ดีไซน์ / Design Systems'
  const title    = isEN ? 'Consistent Design'  : 'ดีไซน์ที่สม่ำเสมอ'
  const subtitle = isEN ? 'That Scales'    : 'และรองรับการขยาย'
  const heroDesc = isEN ? 'A design system is the shared kit your whole product is built from: colours, type, spacing, buttons, forms, and patterns, defined once and reused everywhere. We build it in Figma and in code side by side, so designers and developers pick up the same parts instead of redrawing and re-coding them on every project. If your web app, mobile app, and marketing site have started to look like they came from three different companies, this is the fix. It pays off most when a second or third product is about to launch, or when several teams are shipping screens at the same time.'  : 'Design System คือชุดชิ้นส่วนกลางที่ใช้สร้างผลิตภัณฑ์ทั้งตัว ทั้งสี ตัวอักษร ระยะห่าง ปุ่ม ฟอร์ม และ Pattern ต่างๆ ที่กำหนดไว้ที่เดียวแล้วเอาไปใช้ซ้ำได้ทุกที่ เราทำทั้งใน Figma และในโค้ดไปพร้อมกัน ดีไซเนอร์กับนักพัฒนาจะได้หยิบชิ้นส่วนชุดเดียวกันไปใช้ ไม่ต้องวาดใหม่หรือเขียนโค้ดใหม่ทุกโปรเจกต์ ถ้าตอนนี้เว็บแอป โมบายแอป และเว็บการตลาดของคุณเริ่มดูเหมือนมาจากสามบริษัท นี่คือทางแก้ที่ตรงจุด และจะคุ้มที่สุดตอนที่กำลังจะเปิดผลิตภัณฑ์ที่สองหรือที่สาม หรือมีหลายทีมออกแบบหน้าจอพร้อมกัน'
  const whyTitle = isEN ? 'Why inconsistent design creates compounding problems'    : 'ทำไมดีไซน์ที่ไม่สม่ำเสมอถึงสร้างปัญหาสะสมไปเรื่อยๆ'
  const whyDesc  = isEN ? 'Without a design system, every new feature starts from a blank canvas. Designers drift a little further from the original look each sprint, and each developer team builds its own version of the same button, table, and date picker. Users notice before you do: the product feels patched together, support questions go up, and trust slowly drops. The cost is rarely one big failure. It is thousands of small decisions that were made twice.'  : 'ถ้าไม่มี Design System ทุกฟีเจอร์ใหม่ก็ต้องเริ่มจากหน้ากระดาษเปล่า ดีไซเนอร์แต่ละคนค่อยๆ ห่างจากหน้าตาเดิมไปทีละสปรินต์ ส่วนทีมพัฒนาแต่ละทีมก็ทำปุ่ม ตาราง และตัวเลือกวันที่ในแบบของตัวเอง ลูกค้าจะสังเกตเห็นก่อนเราเสียอีก ผลิตภัณฑ์ดูปะติดปะต่อ คำถามที่เข้า support เพิ่มขึ้น และความเชื่อมั่นก็ลดลงช้าๆ ต้นทุนมักไม่ได้มาจากความผิดพลาดครั้งใหญ่ครั้งเดียว แต่มาจากการตัดสินใจเล็กๆ นับพันเรื่องที่ต้องทำซ้ำสองรอบ'
  const ctaTitle = isEN ? 'Ready to build your design system?'    : 'พร้อมเริ่มทำ Design System แล้วหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Design Audit. We go through your live screens, count how many versions of each component exist, and tell you what size of system makes sense for your team.'   : 'เริ่มจากตรวจดีไซน์ (Design Audit) ฟรี เราจะไล่ดูหน้าจอที่ใช้งานอยู่จริง นับว่า Component แต่ละตัวมีกี่เวอร์ชัน แล้วบอกว่าระบบขนาดไหนถึงเหมาะกับทีมของคุณ'
  const heroBullets = isEN ? [
      'Design tokens for colour, typography, spacing, shadow, and motion, shared between Figma and code',
      'A Figma component library with variants and states, plus a matching library in React, Vue, or Angular',
      'Usage guidelines and a documentation site, so people know when to use which component and why',
      'Accessibility checks on every component: contrast, keyboard use, focus order, and screen readers',
      'Thai and English text handled properly, including line height and font fallbacks for Thai script',
      'Versioning, migration notes, and a contribution process so the system keeps up with the product',
    ] : [
      'Design Token สำหรับสี ตัวอักษร ระยะห่าง เงา และ Animation ที่ใช้ร่วมกันทั้งใน Figma และโค้ด',
      'Component Library ใน Figma ที่มี Variant และ State ครบ พร้อมชุดที่ตรงกันใน React, Vue หรือ Angular',
      'แนวปฏิบัติและเว็บเอกสาร ให้ทุกคนรู้ว่าควรใช้ Component ไหนตอนไหน และเพราะอะไร',
      'ตรวจ Accessibility ทุก Component ทั้งคอนทราสต์ การใช้คีย์บอร์ด ลำดับ Focus และ Screen Reader',
      'รองรับข้อความไทยและอังกฤษอย่างถูกต้อง รวมถึงความสูงบรรทัดและ Font สำรองสำหรับตัวอักษรไทย',
      'จัดการเวอร์ชัน เขียนบันทึกการย้ายระบบ และวางขั้นตอนการมีส่วนร่วม เพื่อให้ระบบตามทันผลิตภัณฑ์',
    ]
  const whyPoints   = isEN ? [
      'Teams with design systems ship new features 34% faster than those without, because nobody redraws a dropdown for the tenth time',
      'Shared components remove the most common designer-developer handoff arguments: spacing, states, and what happens on hover or error',
      'Accessibility built into the component means you do not have to audit every new feature from scratch',
      'Tokenised design systems let you rebrand or white-label a product in days, not months, by changing values in one place',
      'A living documentation site keeps designers, developers, QA, and new hires working from the same current standard',
    ] : [
      'ทีมที่มี Design System ออกฟีเจอร์ใหม่ได้เร็วกว่า 34% เพราะไม่มีใครต้องวาด Dropdown ใหม่เป็นรอบที่สิบ',
      'Component ที่ใช้ร่วมกันช่วยตัดข้อถกเถียงที่เจอบ่อยที่สุดตอนส่งงานระหว่างดีไซเนอร์กับนักพัฒนา เช่น ระยะห่าง State และสิ่งที่ต้องเกิดตอน Hover หรือเกิด Error',
      'Accessibility ที่ฝังอยู่ใน Component ทำให้ไม่ต้องไล่ตรวจทุกฟีเจอร์ใหม่ตั้งแต่ต้น',
      'Design System ที่ใช้ Token ช่วยให้เปลี่ยนแบรนด์หรือทำ White-label ได้ในไม่กี่วัน เพราะแก้ค่าที่จุดเดียว',
      'เว็บเอกสารที่อัปเดตอยู่เสมอ ทำให้ดีไซเนอร์ นักพัฒนา QA และคนที่เพิ่งเข้าทีม ใช้มาตรฐานล่าสุดตัวเดียวกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '34%', label: 'Faster Feature Shipping', desc: 'When teams reuse shared components'},
      {stat: '0', label: 'Inconsistent Implementations', desc: 'One source of truth for every screen'},
      {stat: 'Days', label: 'To Rebrand Entirely', desc: 'By changing design tokens'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'Checked on every component'}
    ] : [
      {stat: '34%', label: 'ฟีเจอร์ออกเร็วขึ้น', desc: 'เมื่อทีมใช้ Component ร่วมกัน'},
      {stat: '0', label: 'Inconsistent Implementation', desc: 'ทุกหน้าจออ้างอิงแหล่งเดียวกัน'},
      {stat: 'ไม่กี่วัน', label: 'เปลี่ยนแบรนด์ทั้งระบบ', desc: 'ด้วยการแก้ Design Token'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'ตรวจทุก Component'}
    ]
  const features    = isEN ? [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'We define colour, typography, spacing, shadow, and motion as named tokens, kept in sync between Figma and code. Change a token once and every button, card, and form that uses it updates, which is also what makes theming, dark mode, and white-labelling practical.'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'A Figma library of buttons, inputs, tables, navigation, modals, and the patterns built from them, each with variants, states, and usage notes. Designers get parts that behave like the real thing, so mock-ups stop drifting from what developers can build.'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'The same components implemented in React, Vue, or Angular, matched against Figma and covered by tests. Developers install a package instead of copying code between repos, and fixes reach every product on the next release.'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'A documentation site, built with Storybook or as a custom site, where each component has live examples, props, do and do-not guidance, and accessibility notes. It is where new designers, new developers, and QA look first.'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'Every component is built to WCAG AA: sufficient contrast, ARIA labels, keyboard navigation, visible focus, and screen reader support. Because it lives in the component, each new screen inherits it instead of being fixed by hand later.'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'A contribution process, review workflow, and versioning strategy that decide how new components are proposed, approved, and released. We write it down and train your team, so the system stays alive after we step back.'}
    ] : [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'เรากำหนดสี ตัวอักษร ระยะห่าง เงา และ Animation เป็น Token ที่ตั้งชื่อชัดเจน และซิงก์กันระหว่าง Figma กับโค้ด แก้ Token ตัวเดียว ปุ่ม การ์ด และฟอร์มทุกตัวที่ใช้ค่านั้นก็เปลี่ยนตาม ซึ่งทำให้การทำ Theme, Dark Mode และ White-label ทำได้จริง'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'Library ใน Figma ที่มีปุ่ม ช่องกรอกข้อมูล ตาราง เมนูนำทาง Modal และ Pattern ที่ประกอบจากชิ้นเหล่านี้ แต่ละตัวมี Variant, State และคำอธิบายการใช้ ดีไซเนอร์ได้ชิ้นส่วนที่ทำงานเหมือนของจริง งานออกแบบเลยไม่หลุดจากสิ่งที่นักพัฒนาทำได้'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'Component ชุดเดียวกันที่เขียนด้วย React, Vue หรือ Angular ตรงกับ Figma และมี Test ครอบ นักพัฒนาติดตั้งเป็น Package แทนการก๊อปโค้ดข้าม Repo และเมื่อแก้บั๊ก ทุกผลิตภัณฑ์ก็ได้รับในรอบปล่อยถัดไป'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'เว็บเอกสารที่ทำด้วย Storybook หรือเว็บที่เราทำเอง แต่ละ Component มีตัวอย่างที่ลองใช้ได้จริง Props แนวทางว่าอะไรควรทำและไม่ควรทำ รวมถึงบันทึกเรื่อง Accessibility เป็นที่แรกที่ดีไซเนอร์ นักพัฒนา และ QA ที่เข้าทีมใหม่จะเปิดดู'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'ทุก Component ทำตามมาตรฐาน WCAG AA ทั้งคอนทราสต์ที่พอ ARIA Label การใช้คีย์บอร์ด Focus ที่มองเห็นชัด และรองรับ Screen Reader เมื่อฝังไว้ใน Component หน้าจอใหม่ทุกหน้าก็ได้ส่วนนี้ไปเลย ไม่ต้องมาแก้ด้วยมือทีหลัง'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'ขั้นตอนมีส่วนร่วม การรีวิว และการจัดการเวอร์ชัน ที่กำหนดว่าจะเสนอ อนุมัติ และปล่อย Component ใหม่ยังไง เราเขียนไว้เป็นลายลักษณ์อักษรและอบรมทีมคุณ ระบบจะได้ยังมีชีวิตอยู่หลังเราถอยออกมา'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit & Inventory', desc: 'We screenshot and catalogue what is live: every button style, form field, colour, and font size actually in use. The output is a plain list of duplicates and inconsistencies, ranked by how often users meet them, which tells us where the system should start.'},
      {no: '02', title: 'Token & Foundation Design', desc: 'We settle the foundations first: colour palette with accessible pairings, type scale, spacing scale, grid, elevation, and motion. These become tokens in Figma and code, and we review them with your brand and product leads before any component is built.'},
      {no: '03', title: 'Component Build', desc: 'We build components in priority order, in Figma and in code at the same time, each with its states, edge cases, and tests. You get working releases every few weeks and can start using early components in live projects.'},
      {no: '04', title: 'Documentation', desc: 'We write the guidelines, usage examples, and content rules, then publish the documentation site. Each page answers the question people actually ask: which component do I use here, and how?'},
      {no: '05', title: 'Adoption & Training', desc: 'We run sessions for designers and developers, help move one or two live screens onto the system as a pattern for the rest, and set up the contribution process so your team can extend it without us.'}
    ] : [
      {no: '01', title: 'Audit & Inventory', desc: 'เราจับภาพหน้าจอและจดรายการทุกอย่างที่ใช้งานจริง ทั้งสไตล์ปุ่ม ช่องฟอร์ม สี และขนาดตัวอักษร ผลที่ได้คือรายการตัวซ้ำและจุดที่ไม่สม่ำเสมอ เรียงตามความถี่ที่ผู้ใช้เจอ ซึ่งบอกเราว่าควรเริ่มระบบจากตรงไหน'},
      {no: '02', title: 'Token & Foundation Design', desc: 'เราวางรากฐานก่อน ทั้งชุดสีที่จับคู่แล้วอ่านง่าย สเกลตัวอักษร สเกลระยะห่าง Grid เงา และ Animation แล้วแปลงเป็น Token ใน Figma และโค้ด ก่อนสร้าง Component เราจะคุยทบทวนกับทีมแบรนด์และทีมผลิตภัณฑ์ของคุณก่อน'},
      {no: '03', title: 'Component Build', desc: 'เราสร้าง Component ตามลำดับความสำคัญ ทั้งใน Figma และโค้ดไปพร้อมกัน แต่ละตัวมี State กรณีขอบ และ Test ครบ คุณจะได้ของที่ใช้ได้จริงทุกสองสามสัปดาห์ และเริ่มเอา Component รุ่นแรกๆ ไปใช้ในโปรเจกต์จริงได้เลย'},
      {no: '04', title: 'Documentation', desc: 'เราเขียนแนวปฏิบัติ ตัวอย่างการใช้ และกติกาเรื่องเนื้อหา แล้วเปิดเว็บเอกสาร แต่ละหน้าตอบคำถามที่คนถามกันจริงๆ ว่าตรงนี้ต้องใช้ Component ไหน และใช้ยังไง'},
      {no: '05', title: 'Adoption & Training', desc: 'เราจัดอบรมให้ดีไซเนอร์และนักพัฒนา ช่วยย้ายหน้าจอจริงหนึ่งสองหน้าขึ้นมาอยู่บนระบบเป็นตัวอย่างให้หน้าอื่นทำตาม และวางขั้นตอนการมีส่วนร่วม เพื่อให้ทีมของคุณต่อยอดได้เองโดยไม่ต้องรอเรา'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Design System Cuts Design Time 50%', desc: 'One team built a 120-component library that three separate products now share, so a fix or an improvement lands in all of them at once.', result: 'Feature delivery 50% faster'},
      {tag: 'SaaS · Bangkok', title: 'Rebranded 5 Products in 2 Weeks', desc: 'A token architecture meant a full brand colour change took edits to a handful of tokens rather than a screen-by-screen redesign.', result: 'Rebrand done in 2 weeks'},
      {tag: 'Healthcare · Bangkok', title: 'WCAG AA Compliance Across Every Component', desc: 'We designed an accessible component library for a patient portal, so every screen built from it meets the standard by default.', result: '100% WCAG AA passed'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Design System ลดเวลาออกแบบ 50%', desc: 'ทีมเดียวสร้าง Component Library 120 Component ที่ 3 ผลิตภัณฑ์ใช้ร่วมกัน แก้หรือปรับปรุงทีเดียวก็ถึงทุกผลิตภัณฑ์พร้อมกัน', result: 'ส่งฟีเจอร์เร็วขึ้น 50%'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'รีแบรนด์ 5 ผลิตภัณฑ์ใน 2 สัปดาห์', desc: 'เพราะวางโครงสร้าง Token ไว้ดี การเปลี่ยนสีแบรนด์ทั้งระบบเลยแก้แค่ไม่กี่ Token ไม่ต้องออกแบบใหม่ทีละหน้าจอ', result: 'รีแบรนด์เสร็จใน 2 สัปดาห์'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'WCAG AA ครบทุก Component', desc: 'เราออกแบบ Component Library ที่ทุกคนเข้าถึงได้สำหรับ Patient Portal หน้าจอไหนที่สร้างจากชุดนี้จึงผ่านมาตรฐานตั้งแต่แรก', result: 'ผ่าน WCAG AA 100%'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a design system different from a UI kit?', a: 'A UI kit is a Figma file of pre-drawn components. A design system adds the code version of those components, the tokens that drive them, the written guidelines, and the process for changing them. The kit helps one designer move faster; the system keeps designers, developers, and several products consistent over time.'},
      {q: 'How long does it take to build?', a: 'A first working version covering the foundations and the most-used components usually takes 6-10 weeks. A fuller system that covers all your patterns, with documentation and several framework targets, may take 3-6 months. We release in stages, so teams can start using the early parts while the rest is built.'},
      {q: 'Does a small team need a design system?', a: 'Teams of every size benefit, in different ways. Small teams gain speed because they stop redrawing the same parts. Larger teams gain consistency across products. The earlier you start, the less inconsistent work you have to clean up later. A small team can begin with tokens and ten or fifteen core components rather than a full library.'},
      {q: 'How is a design system maintained after launch?', a: 'We set up governance before we hand over: who can propose a component, how it is reviewed, how versions are numbered, and how breaking changes are announced with migration notes. Your team can run this independently, and we are available for ongoing support if you want a second pair of hands.'},
      {q: 'Can you build on top of the design we already have?', a: 'Yes, and that is the usual starting point. We audit your live product, keep the brand decisions that work, and tidy the ones that clash. You are not forced into a redesign. If a refresh is wanted, we can do it alongside the system.'},
      {q: 'Which frameworks and tools do you support?', a: 'Figma for design, and React, Vue, or Angular for code, with Storybook or a custom documentation site. If your front end mixes frameworks, we can ship the tokens as shared variables and build components per framework where needed.'},
      {q: 'Can the system handle both Thai and English interfaces?', a: 'Yes. We test type scales with real Thai and English text, set line heights that keep Thai tone marks from being clipped, choose fallback fonts for both scripts, and check that buttons and tables still fit when a label gets longer in translation.'}
    ] : [
      {q: 'Design System ต่างจาก UI Kit ยังไง?', a: 'UI Kit คือไฟล์ Figma ที่มี Component วาดไว้ให้ ส่วน Design System คือชุดนั้นบวกเวอร์ชันที่เป็นโค้ด Token ที่ควบคุมหน้าตา แนวปฏิบัติที่เขียนไว้ และขั้นตอนการแก้ไขระบบ UI Kit ช่วยให้ดีไซเนอร์คนเดียวทำงานเร็วขึ้น แต่ Design System ช่วยให้ดีไซเนอร์ นักพัฒนา และหลายผลิตภัณฑ์ทำงานตรงกันในระยะยาว'},
      {q: 'ใช้เวลาสร้างนานแค่ไหน?', a: 'เวอร์ชันแรกที่ใช้งานได้ ครอบคลุมรากฐานและ Component ที่ใช้บ่อยที่สุด ปกติใช้ 6-10 สัปดาห์ ส่วนระบบเต็มรูปแบบที่ครอบคลุมทุก Pattern มีเอกสารและรองรับหลาย Framework อาจใช้ 3-6 เดือน เราปล่อยเป็นช่วงๆ ทีมจึงเริ่มใช้ส่วนแรกๆ ได้ระหว่างที่เราสร้างส่วนที่เหลือ'},
      {q: 'ทีมเล็กต้องมี Design System ไหม?', a: 'ทีมทุกขนาดได้ประโยชน์ แค่ได้คนละแบบ ทีมเล็กได้ความเร็ว เพราะไม่ต้องวาดชิ้นเดิมซ้ำ ทีมใหญ่ได้ความสม่ำเสมอข้ามผลิตภัณฑ์ ยิ่งเริ่มเร็ว งานที่ไม่สม่ำเสมอให้ตามเก็บทีหลังก็ยิ่งน้อย ทีมเล็กเริ่มจาก Token กับ Component หลักสิบกว่าตัวก่อนได้ ไม่ต้องทำ Library เต็มรูปแบบ'},
      {q: 'ดูแล Design System ต่อหลังส่งมอบยังไง?', a: 'เราวางระบบดูแลก่อนส่งมอบ ว่าใครเสนอ Component ใหม่ได้ รีวิวยังไง ตั้งเลขเวอร์ชันแบบไหน และประกาศการเปลี่ยนแปลงที่กระทบของเดิมพร้อมบันทึกวิธีย้ายอย่างไร ทีมคุณเดินต่อเองได้ และถ้าอยากได้คนช่วยเพิ่ม เรามีบริการดูแลต่อให้'},
      {q: 'ต่อยอดจากดีไซน์ที่มีอยู่ได้ไหม?', a: 'ได้ และเป็นจุดเริ่มที่เจอบ่อยที่สุด เราตรวจผลิตภัณฑ์ที่ใช้งานอยู่ เก็บการตัดสินใจเรื่องแบรนด์ที่ใช้ได้ไว้ และจัดการจุดที่ขัดกัน คุณไม่ต้องรีดีไซน์ทั้งหมด แต่ถ้าอยากปรับโฉมด้วย เราทำควบคู่ไปกับระบบได้'},
      {q: 'รองรับ Framework และเครื่องมืออะไรบ้าง?', a: 'ใช้ Figma สำหรับดีไซน์ และ React, Vue หรือ Angular สำหรับโค้ด พร้อม Storybook หรือเว็บเอกสารที่ทำเอง ถ้าหน้าบ้านของคุณใช้หลาย Framework ปนกัน เราส่ง Token เป็นตัวแปรกลางที่ใช้ร่วมกัน แล้วสร้าง Component แยกตาม Framework เท่าที่จำเป็น'},
      {q: 'ระบบรองรับทั้งหน้าจอภาษาไทยและอังกฤษไหม?', a: 'ได้ เราทดสอบสเกลตัวอักษรกับข้อความไทยและอังกฤษจริง ตั้งความสูงบรรทัดไม่ให้วรรณยุกต์ไทยโดนตัด เลือก Font สำรองให้ทั้งสองภาษา และเช็กว่าปุ่มกับตารางยังพอดีเมื่อข้อความยาวขึ้นหลังแปล'}
    ]
  const related     = isEN ? [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Brand Experience', href: '/services/brand-experience'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Brand Experience', href: '/services/brand-experience'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ]
  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--accent)" bg="var(--purple-bg)"
      heroImg="/images/services/design-systems/hero.jpg"
      whyImg="/images/services/design-systems/why1.jpg"
      whyImg2="/images/services/design-systems/why2.jpg"
      featureImg="/images/services/design-systems/feature.jpg"
      processImg="/images/services/design-systems/process.jpg"
    />
  )
}
