import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Design / Brand Experience'  : 'ดีไซน์ / แบรนด์ (Brand Experience)'
  const title    = isEN ? 'A Brand That Is'  : 'แบรนด์ที่'
  const subtitle = isEN ? 'Remembered Everywhere'    : 'จดจำได้ทุกที่'
  const heroDesc = isEN ? 'A logo is only the first thing people see. The brand is what they feel when the website loads, when a LINE reply arrives, when the packaging is opened and when an invoice lands in their inbox. Haliviq works out what your company stands for, turns that into a visual identity and a voice, and then makes sure the same personality shows up on your website, app, social channels and print. You finish with a system your team can use without calling us each time.'  : 'โลโก้เป็นแค่สิ่งแรกที่คนเห็น แบรนด์คือความรู้สึกที่เขามีตอนเว็บไซต์โหลดขึ้นมา ตอนได้ข้อความตอบกลับใน LINE ตอนเปิดกล่องสินค้า และตอนใบแจ้งหนี้เข้าอีเมล Haliviq ช่วยหาให้ชัดว่าบริษัทคุณยืนอยู่ตรงไหน แปลงเป็นตัวตนด้านภาพและน้ำเสียง แล้วทำให้บุคลิกเดียวกันไปปรากฏบนเว็บไซต์ แอป โซเชียล และสิ่งพิมพ์ สุดท้ายคุณจะได้ระบบแบรนด์ที่ทีมหยิบไปใช้เองได้ ไม่ต้องโทรถามเราทุกครั้ง'
  const whyTitle = isEN ? 'Why brand is a strategic business asset'    : 'ทำไมแบรนด์ถึงเป็นสินทรัพย์สำคัญของธุรกิจ'
  const whyDesc  = isEN ? 'When competitors sell similar products at similar prices, the brand is often the only thing that is hard to copy. Customers pick, trust and return to brands rather than to specifications. A brand that people recognise and believe lets you hold your price when others discount, and it shortens the sales conversation because trust has already been built.'  : 'เมื่อคู่แข่งขายของคล้ายกันในราคาใกล้กัน แบรนด์มักเป็นสิ่งเดียวที่ลอกกันยาก ลูกค้าเลือก เชื่อ และกลับมาซื้อเพราะแบรนด์ ไม่ใช่เพราะสเปก แบรนด์ที่คนจำได้และเชื่อถือ ช่วยให้คุณคงราคาไว้ได้ตอนคนอื่นลดราคา และทำให้คุยขายสั้นลง เพราะความเชื่อใจเกิดขึ้นก่อนแล้ว'
  const ctaTitle = isEN ? 'Ready to build a brand that lasts?'    : 'พร้อมสร้างแบรนด์ที่อยู่ได้นานหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Brand Audit. We look at how your brand appears today across your website, social channels and materials, and tell you what is working, what is inconsistent and where the opportunities are.'   : 'เริ่มจากให้เราตรวจแบรนด์ให้ฟรี เราจะดูว่าแบรนด์ของคุณปรากฏอย่างไรบนเว็บไซต์ โซเชียล และสื่อต่างๆ ตอนนี้ แล้วบอกว่าอะไรได้ผล อะไรยังไม่สม่ำเสมอ และมีโอกาสตรงไหนบ้าง'
  const heroBullets = isEN ? [
      'Brand strategy, market positioning and a messaging framework',
      'Visual identity: logo, colour, typography and illustration style',
      'Brand guidelines and an asset library for every touchpoint',
      'Digital experience design that carries the brand into your website and app',
      'Rollout across web, mobile, print and social, with team training',
    ] : [
      'วางกลยุทธ์แบรนด์ ตำแหน่งในตลาด และกรอบการสื่อสาร',
      'ตัวตนแบรนด์ด้านภาพ: โลโก้ สี ตัวอักษร และสไตล์ภาพประกอบ',
      'คู่มือแบรนด์และคลังไฟล์สำหรับทุกจุดที่ลูกค้าพบแบรนด์',
      'ออกแบบประสบการณ์ดิจิทัลที่พาแบรนด์ไปอยู่บนเว็บไซต์และแอปของคุณ',
      'นำแบรนด์ไปใช้บน Web, Mobile, สิ่งพิมพ์ และ Social พร้อมอบรมทีม',
    ]
  const whyPoints   = isEN ? [
      'Presenting the brand the same way on every channel can lift revenue by up to 23%, because customers recognise you before they read a word',
      'A trusted brand lowers the cost of winning customers, since part of the persuasion is done before the first conversation',
      'A clearly stated purpose attracts better candidates, because people want to join companies they can explain to their friends',
      'Brand equity builds up year after year, which makes it one of the few assets that gains value with use',
      'Designing for digital first means the identity works on a 6-inch phone screen as well as on a billboard, instead of being squeezed down later',
    ] : [
      'การนำเสนอแบรนด์แบบเดียวกันทุกช่องทางเพิ่มรายได้ได้ถึง 23% เพราะลูกค้าจำคุณได้ตั้งแต่ก่อนอ่านข้อความ',
      'แบรนด์ที่คนเชื่อถือช่วยลดต้นทุนการหาลูกค้า เพราะการโน้มน้าวส่วนหนึ่งเกิดขึ้นก่อนได้คุยกันครั้งแรก',
      'จุดมุ่งหมายที่ชัดเจนดึงดูดคนเก่งได้ดีกว่า เพราะคนอยากเข้าบริษัทที่เล่าให้เพื่อนฟังได้ว่าทำอะไร',
      'คุณค่าของแบรนด์สะสมปีต่อปี จึงเป็นสินทรัพย์ไม่กี่อย่างที่ยิ่งใช้ยิ่งมีมูลค่า',
      'ออกแบบโดยคิดถึงดิจิทัลก่อน ตัวตนของคุณจึงใช้ได้ทั้งบนหน้าจอมือถือ 6 นิ้วและป้ายโฆษณา ไม่ต้องมาบีบให้เล็กลงทีหลัง',
    ]
  const outcomes    = isEN ? [
      {stat: '23%', label: 'Revenue from Consistency', desc: 'Cross-channel brand alignment'},
      {stat: '40%', label: 'Lower Acquisition Cost', desc: 'With strong brand trust'},
      {stat: '3x', label: 'Better Talent Attraction', desc: 'With clear brand purpose'},
      {stat: '10+ yrs', label: 'Brand System Lifespan', desc: 'Built to evolve, not expire'}
    ] : [
      {stat: '23%', label: 'รายได้เพิ่มจากความสม่ำเสมอ', desc: 'แบรนด์ตรงกันทุกช่องทาง'},
      {stat: '40%', label: 'ลดต้นทุนการหาลูกค้า', desc: 'จากความเชื่อมั่นในแบรนด์'},
      {stat: '3x', label: 'ดึงดูดคนเก่งได้ดีกว่า', desc: 'จากจุดมุ่งหมายของแบรนด์ที่ชัดเจน'},
      {stat: '10+ ปี', label: 'อายุการใช้งานของระบบแบรนด์', desc: 'สร้างให้พัฒนาต่อได้ ไม่ใช่หมดอายุ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'We pin down why the company exists, who it is for, what it offers and how it behaves, then find a position competitors are not already occupying. The result is a short positioning statement and key messages for each audience.'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'Logo, colour palette, typography, illustration style and photo direction designed together, so they feel like one family. Colours are tested for contrast on screen, and the type works for both Thai and Latin text.'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'A practical guideline document covering logo spacing, colour values, type sizes and examples of right and wrong use. Written so an agency, printer or new hire can follow it without asking.'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'We apply the identity to the places customers meet you online: website, app, email templates and social posts. Layouts, motion and microcopy follow the brand instead of generic templates.'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'Tone of voice, key messages and the brand story, with sample lines for common situations such as a product page, an apology email or a LINE greeting, in both Thai and English where needed.'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'One organised brand hub that holds the logos, templates, fonts, icons and photos, so the team always downloads the current version rather than an old file from someone\'s inbox.'}
    ] : [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'เราช่วยจับให้ชัดว่าบริษัทมีอยู่เพื่ออะไร ทำเพื่อใคร เสนออะไร และมีบุคลิกอย่างไร แล้วหาจุดยืนที่คู่แข่งยังไม่ได้ยึด ผลที่ได้คือประโยคตำแหน่งแบรนด์สั้นๆ และข้อความหลักสำหรับลูกค้าแต่ละกลุ่ม'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'ออกแบบโลโก้ ชุดสี ตัวอักษร สไตล์ภาพประกอบ และแนวทางภาพถ่ายไปพร้อมกัน ให้ดูเป็นครอบครัวเดียวกัน ทดสอบคอนทราสต์ของสีบนหน้าจอ และเลือกตัวอักษรที่ใช้ได้ทั้งภาษาไทยและละติน'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'คู่มือที่ใช้งานได้จริง ครอบคลุมระยะรอบโลโก้ ค่าสี ขนาดตัวอักษร และตัวอย่างการใช้ที่ถูกและผิด เขียนให้เอเจนซี่ โรงพิมพ์ หรือพนักงานใหม่ทำตามได้เลยโดยไม่ต้องถาม'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'เรานำตัวตนแบรนด์ไปใช้ในจุดที่ลูกค้าพบคุณออนไลน์ ทั้งเว็บไซต์ แอป เทมเพลตอีเมล และโพสต์โซเชียล เลย์เอาต์ การเคลื่อนไหว และข้อความสั้นๆ ในหน้าจอเป็นไปตามแบรนด์ ไม่ใช่เทมเพลตสำเร็จรูป'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'กำหนดน้ำเสียง ข้อความหลัก และเรื่องราวของแบรนด์ พร้อมตัวอย่างประโยคสำหรับสถานการณ์ที่พบบ่อย เช่น หน้าสินค้า อีเมลขอโทษลูกค้า หรือข้อความทักทายใน LINE ทั้งภาษาไทยและอังกฤษเมื่อจำเป็น'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'รวมโลโก้ เทมเพลต ฟอนต์ ไอคอน และรูปภาพไว้ใน Brand Hub ที่จัดไว้เป็นระเบียบ ทีมจะได้โหลดเวอร์ชันล่าสุดเสมอ ไม่ต้องใช้ไฟล์เก่าที่ค้างอยู่ในอีเมลของใครสักคน'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brand Discovery', desc: 'We learn your business goals, who you want to reach, who you compete with, and where you want the brand to be in a few years, through interviews, an audit of existing materials and a competitor review.'},
      {no: '02', title: 'Strategy & Positioning', desc: 'With your stakeholders we agree the positioning, the value proposition and the messaging framework, and write them down so every later design decision can be checked against them.'},
      {no: '03', title: 'Identity Design', desc: 'We present several visual directions, test them with your team and, where useful, with real customers, then refine the strongest one into a finished identity.'},
      {no: '04', title: 'System & Guidelines', desc: 'The identity becomes a complete system: logo variants, colour and type rules, templates and a guideline that says how to use it at each touchpoint.'},
      {no: '05', title: 'Rollout & Activation', desc: 'We apply the brand to your website, social channels and printed items, and run a training session so your team can keep it consistent after we leave.'}
    ] : [
      {no: '01', title: 'Brand Discovery', desc: 'เราทำความเข้าใจเป้าหมายธุรกิจ กลุ่มลูกค้าที่อยากเข้าถึง คู่แข่ง และภาพที่อยากให้แบรนด์เป็นในอีกไม่กี่ปี ผ่านการสัมภาษณ์ ตรวจสื่อที่มีอยู่ และดูคู่แข่ง'},
      {no: '02', title: 'Strategy & Positioning', desc: 'ร่วมกับผู้ที่เกี่ยวข้องเพื่อตกลงตำแหน่งแบรนด์ คุณค่าที่เสนอ และกรอบการสื่อสาร แล้วจดไว้ เพื่อให้การตัดสินใจด้านดีไซน์ต่อจากนี้ย้อนกลับมาเช็กได้'},
      {no: '03', title: 'Identity Design', desc: 'เรานำเสนอทิศทางภาพหลายแบบ ทดสอบกับทีมคุณ และกับลูกค้าจริงถ้าเหมาะ แล้วปรับแนวทางที่แข็งแรงที่สุดให้เป็นตัวตนแบรนด์ที่เสร็จสมบูรณ์'},
      {no: '04', title: 'System & Guidelines', desc: 'ตัวตนแบรนด์ถูกพัฒนาเป็นระบบครบชุด ทั้งโลโก้เวอร์ชันต่างๆ กฎการใช้สีและตัวอักษร เทมเพลต และคู่มือที่บอกวิธีใช้ในแต่ละจุดที่ลูกค้าพบแบรนด์'},
      {no: '05', title: 'Rollout & Activation', desc: 'เรานำแบรนด์ไปใช้บนเว็บไซต์ โซเชียล และสิ่งพิมพ์ และจัดอบรมให้ทีมคุณ เพื่อให้ดูแลแบรนด์ให้เป็นหนึ่งเดียวต่อได้หลังเราจบงาน'}
    ]
  const caseStudies = isEN ? [
      {tag: 'F&B · Bangkok', title: 'Restaurant Rebrand Grows Revenue 35%', desc: 'We repositioned the restaurant, designed a new visual identity and applied it to the menu, signage, packaging and social channels, so guests met one clear personality at every step.', result: 'Revenue up 35% in 6 months'},
      {tag: 'SaaS · Bangkok', title: 'Brand That Attracts Series A Funding', desc: 'We built a credible, premium-looking brand and pitch language that helped investors see the company vision more clearly.', result: 'Series A successfully closed'},
      {tag: 'Healthcare · Bangkok', title: 'Brand Unification Across 5 Hospitals', desc: 'We created a master brand with a sub-brand structure, so each hospital keeps its own character while the network reads as one.', result: 'Brand recognition up 60%'}
    ] : [
      {tag: 'F&B · กรุงเทพฯ', title: 'Rebrand ร้านอาหาร รายได้เพิ่ม 35%', desc: 'เราวางตำแหน่งร้านใหม่ ออกแบบตัวตนด้านภาพ แล้วนำไปใช้บนเมนู ป้ายร้าน บรรจุภัณฑ์ และโซเชียล ลูกค้าจึงพบบุคลิกเดียวกันทุกขั้นตอน', result: 'รายได้เพิ่ม 35% ใน 6 เดือน'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'แบรนด์ที่ดึงดูดเงินทุน Series A', desc: 'เราสร้างแบรนด์ที่น่าเชื่อถือและดูพรีเมียม พร้อมภาษาที่ใช้ในการนำเสนอ ช่วยให้นักลงทุนเห็นวิสัยทัศน์ของบริษัทชัดขึ้น', result: 'ระดมทุน Series A สำเร็จ'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'รวมแบรนด์ 5 โรงพยาบาลให้เป็นหนึ่งเดียว', desc: 'เราสร้างแบรนด์หลักพร้อมโครงสร้างแบรนด์ย่อย แต่ละโรงพยาบาลยังมีเอกลักษณ์ของตัวเอง ขณะที่ทั้งเครือข่ายดูเป็นหนึ่งเดียว', result: 'คนจำแบรนด์ได้เพิ่ม 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between a rebrand and a refresh?', a: 'A rebrand changes the identity from the strategy level up: positioning, name or messaging may change along with the visuals. A refresh keeps the existing strategy and recognition and modernises the logo, colours or type. We assess which one fits before quoting.'},
      {q: 'How long does it take?', a: 'A basic brand identity takes 8-12 weeks. A full brand system, including guidelines and digital applications, takes 16-20 weeks. Timing depends mostly on how quickly feedback and approvals come back from your side.'},
      {q: 'Do we need research first?', a: 'We highly recommend it. Good discovery includes customer interviews, a competitor review and internal workshops, so the strategy is built on what people actually think rather than on what the leadership team assumes.'},
      {q: 'What are the deliverables?', a: 'Logo files in every format you need, a brand guideline PDF, an organised asset library, typography licensing, and templates for social posts, presentations and documents.'},
      {q: 'Will the brand work in both Thai and English?', a: 'Yes, and we design for it from the start. We choose typefaces that look right in Thai and Latin together, check line height and weight for both scripts, and write voice guidance for each language.'},
      {q: 'Can you help roll the brand out on our website and app?', a: 'Yes. Our design and development teams apply the identity to the website and app, and set up a design system so new pages and features stay on brand without redesigning each time.'},
      {q: 'Who owns the final files and the identity?', a: 'Ownership is written into the contract, and the intent is that the identity is yours. At handover you receive the editable source files, final exports and guidelines. Fonts keep their own licences, and we tell you exactly which ones need to be purchased or are free to use.'}
    ] : [
      {q: 'Rebrand กับ Refresh ต่างกันอย่างไร?', a: 'Rebrand คือการเปลี่ยนตัวตนตั้งแต่ระดับกลยุทธ์ ตำแหน่งแบรนด์ ชื่อ หรือข้อความอาจเปลี่ยนไปพร้อมกับภาพ ส่วน Refresh คือเก็บกลยุทธ์และการรับรู้เดิมไว้ แล้วปรับโลโก้ สี หรือตัวอักษรให้ทันสมัย เราจะประเมินว่าแบบไหนเหมาะก่อนเสนอราคา'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'ตัวตนแบรนด์พื้นฐานใช้ 8-12 สัปดาห์ ระบบแบรนด์เต็มรูปแบบรวมคู่มือและงานดิจิทัลใช้ 16-20 สัปดาห์ ระยะเวลาขึ้นอยู่กับว่าฝั่งคุณส่งฟีดแบ็กและอนุมัติงานได้เร็วแค่ไหนเป็นหลัก'},
      {q: 'ต้องทำรีเสิร์ชก่อนไหม?', a: 'แนะนำอย่างยิ่ง การสำรวจแบรนด์ที่ดีมีการสัมภาษณ์ลูกค้า ดูคู่แข่ง และเวิร์กช็อปภายในองค์กร กลยุทธ์จะได้ตั้งอยู่บนสิ่งที่คนคิดจริงๆ ไม่ใช่สิ่งที่ผู้บริหารคิดเอาเอง'},
      {q: 'ส่งมอบอะไรบ้าง?', a: 'ไฟล์โลโก้ทุกรูปแบบที่ต้องใช้ คู่มือแบรนด์แบบ PDF คลังไฟล์ที่จัดเป็นระเบียบ สิทธิ์ใช้ฟอนต์ และเทมเพลตสำหรับโพสต์โซเชียล งานนำเสนอ และเอกสาร'},
      {q: 'แบรนด์ใช้ได้ทั้งภาษาไทยและอังกฤษไหม?', a: 'ได้ และเราออกแบบโดยคิดเรื่องนี้ตั้งแต่ต้น เลือกฟอนต์ที่ดูดีทั้งไทยและละตินเมื่อวางคู่กัน เช็กระยะบรรทัดและน้ำหนักของทั้งสองภาษา และเขียนแนวทางน้ำเสียงแยกตามภาษา'},
      {q: 'ช่วยนำแบรนด์ไปใช้บนเว็บไซต์และแอปได้ไหม?', a: 'ได้ ทีมดีไซน์และทีมพัฒนาของเรานำตัวตนแบรนด์ไปใช้บนเว็บไซต์และแอป และตั้ง Design System ไว้ให้ หน้าใหม่หรือฟีเจอร์ใหม่จะยังคงอยู่ในแบรนด์โดยไม่ต้องออกแบบใหม่ทุกครั้ง'},
      {q: 'ใครเป็นเจ้าของไฟล์สุดท้ายและตัวตนแบรนด์?', a: 'เรื่องความเป็นเจ้าของระบุไว้ในสัญญา และเจตนาคือให้ตัวตนแบรนด์เป็นของคุณ ตอนส่งมอบคุณจะได้ไฟล์ต้นฉบับที่แก้ไขได้ ไฟล์ส่งออกสุดท้าย และคู่มือ ฟอนต์ยังเป็นไปตามลิขสิทธิ์ของเจ้าของฟอนต์ เราจะบอกชัดเจนว่าตัวไหนต้องซื้อและตัวไหนใช้ฟรีได้'}
    ]
  const related     = isEN ? [
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
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
      heroImg="/images/services/brand-experience/hero.jpg"
      whyImg="/images/services/brand-experience/why1.jpg"
      whyImg2="/images/services/brand-experience/why2.jpg"
      featureImg="/images/services/brand-experience/feature.jpg"
      processImg="/images/services/brand-experience/process.jpg"
    />
  )
}
