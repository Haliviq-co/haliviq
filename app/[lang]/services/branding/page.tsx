import type { Metadata } from 'next'
import ServiceLayout from '@/components/service/ServiceLayout'
import BrandingPackages from '@/components/service/BrandingPackages'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Brand Strategy & Identity Services in Bangkok | Haliviq'
    : 'บริการสร้างแบรนด์ กลยุทธ์และอัตลักษณ์ กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Haliviq builds brands from research and positioning to logo, identity, guidelines and a website that carries the brand. Choose single services or a package.'
    : 'Haliviq สร้างแบรนด์ตั้งแต่การวิจัย วางตำแหน่ง ออกแบบโลโก้และอัตลักษณ์ คู่มือแบรนด์ ไปจนถึงเว็บไซต์ที่สื่อแบรนด์ เลือกเป็นบริการเดี่ยวหรือแพ็กเกจรวมได้'
  const url = `https://www.haliviq.com/${params.lang}/services/branding`
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
  const badge    = isEN ? 'Design / Brand Strategy & Identity' : 'ดีไซน์ / สร้างแบรนด์'
  const title    = isEN ? 'Build the Brand' : 'สร้างแบรนด์ก่อน'
  const subtitle = isEN ? 'Before You Build the Website' : 'แล้วจึงสร้างเว็บไซต์'
  const heroDesc = isEN
    ? 'A website is the place customers meet your brand, so the brand should be settled first. Haliviq helps you decide who you are for and how you stand apart, designs the identity, and then carries it into the website, app and LINE. Choose individual services or a package.'
    : 'เว็บไซต์คือที่ที่ลูกค้าพบแบรนด์ของคุณ จึงควรกำหนดแบรนด์ให้ชัดก่อน Haliviq ช่วยให้คุณตัดสินใจว่าแบรนด์ทำเพื่อใคร และต่างจากคู่แข่งอย่างไร ออกแบบอัตลักษณ์ แล้วนำไปใช้บนเว็บไซต์ แอป และ LINE เลือกใช้เป็นบริการเดี่ยวหรือแพ็กเกจรวมก็ได้'
  const whyTitle = isEN ? 'Why settle the brand before the website' : 'เหตุผลที่ควรกำหนดแบรนด์ก่อนสร้างเว็บไซต์'
  const whyDesc  = isEN
    ? 'A website built before the brand is decided usually gets redesigned once the brand changes. Settling positioning, voice and identity first means the website is designed once, with the right message, colours and tone from the first page.'
    : 'เว็บไซต์ที่สร้างก่อนกำหนดแบรนด์มักต้องออกแบบใหม่เมื่อแบรนด์เปลี่ยน หากกำหนดตำแหน่งแบรนด์ น้ำเสียง และอัตลักษณ์ให้ชัดก่อน เว็บไซต์จะออกแบบเพียงครั้งเดียว โดยมีข้อความ สี และน้ำเสียงที่ถูกต้องตั้งแต่หน้าแรก'
  const ctaTitle = isEN ? 'Tell us about your business' : 'เล่าเรื่องธุรกิจของคุณให้เราฟัง'
  const ctaDesc  = isEN
    ? 'Book a free first conversation. We listen to where your brand stands today, recommend which services or package fit, and give a quote once the scope is clear.'
    : 'นัดคุยครั้งแรกโดยไม่มีค่าใช้จ่าย เราจะรับฟังสถานะแบรนด์ของคุณในปัจจุบัน แนะนำบริการหรือแพ็กเกจที่เหมาะสม และเสนอราคาเมื่อขอบเขตงานชัดเจน'

  const heroBullets = isEN ? [
      'Research and brand strategy that fix the positioning',
      'Name, logo and visual identity designed as one system',
      'Brand guidelines your team and vendors can follow',
      'Rollout to the website, app and LINE, with team training',
    ] : [
      'การวิจัยและกลยุทธ์แบรนด์ที่กำหนดตำแหน่งให้ชัดเจน',
      'ชื่อ โลโก้ และอัตลักษณ์ด้านภาพ ออกแบบเป็นระบบเดียวกัน',
      'คู่มือแบรนด์ที่ทีมงานและผู้ให้บริการภายนอกใช้ตามได้',
      'นำแบรนด์ไปใช้บนเว็บไซต์ แอป และ LINE พร้อมอบรมทีมงาน',
    ]
  const whyPoints = isEN ? [
      'The website is designed once, with the final message, colours and tone',
      'Every channel says the same thing, so customers recognise you sooner',
      'Briefs to designers, printers and agencies become shorter, because the guideline answers most questions',
      'A clear position makes it easier to explain the price of what you sell',
      'The same identity works on a phone screen, a LINE message and a printed sign',
    ] : [
      'ออกแบบเว็บไซต์เพียงครั้งเดียว ด้วยข้อความ สี และน้ำเสียงที่เป็นฉบับสุดท้าย',
      'ทุกช่องทางสื่อสารตรงกัน ลูกค้าจึงจดจำแบรนด์ได้เร็วขึ้น',
      'การสั่งงานนักออกแบบ โรงพิมพ์ และเอเจนซีสั้นลง เพราะคู่มือตอบคำถามส่วนใหญ่ได้แล้ว',
      'ตำแหน่งแบรนด์ที่ชัดช่วยให้อธิบายราคาของสินค้าและบริการได้ง่ายขึ้น',
      'อัตลักษณ์เดียวกันใช้ได้ทั้งบนจอมือถือ ข้อความใน LINE และป้ายที่พิมพ์',
    ]
  const outcomes = isEN ? [
      {stat: '8', label: 'Individual services', desc: 'From research to team training'},
      {stat: '5', label: 'Ready packages', desc: 'For launch, refresh and growth'},
      {stat: '2', label: 'Languages by design', desc: 'Thai and English from the start'},
      {stat: '1', label: 'System', desc: 'Brand and website built together'},
    ] : [
      {stat: '8', label: 'บริการเดี่ยว', desc: 'ตั้งแต่การวิจัยถึงการอบรมทีม'},
      {stat: '5', label: 'แพ็กเกจรวม', desc: 'สำหรับเปิดตัว ปรับภาพลักษณ์ และเติบโต'},
      {stat: '2', label: 'ภาษาตั้งแต่ต้น', desc: 'ออกแบบรองรับไทยและอังกฤษ'},
      {stat: '1', label: 'ระบบเดียว', desc: 'แบรนด์และเว็บไซต์สร้างไปด้วยกัน'},
    ]
  const features = isEN ? [
      {icon: 'ti-search', title: 'Market & Customer Research', desc: 'Interviews, a review of competitors and a look at your market, so decisions about the brand rest on evidence. Useful before a launch, a rebrand or entering a new market.'},
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'We agree who the brand is for, what it promises and how it differs from competitors, and write it as a short positioning statement and key messages.'},
      {icon: 'ti-tag', title: 'Brand Naming', desc: 'Name directions with reasons, checks for meaning in Thai and English, and a search for domain and trademark conflicts before you commit.'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'Logo, colour, typography, imagery style and patterns designed together. Tested for contrast on screens and for Thai and Latin text.'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'A practical guideline with logo spacing, colour values, type rules and examples of correct and incorrect use, written so a new team member can follow it.'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'Tone of voice, key messages and sample lines for common situations such as a product page, a LINE greeting or an apology email.'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Rollout', desc: 'We apply the brand to the website, mobile app, LINE and social channels, and set up templates so new pages stay consistent.'},
      {icon: 'ti-users', title: 'Team Workshop & Training', desc: 'A working session that explains the brand to your executives and staff, and shows them how to apply the guideline without asking us each time.'},
    ] : [
      {icon: 'ti-search', title: 'วิจัยตลาดและลูกค้า (Market & Customer Research)', desc: 'สัมภาษณ์ลูกค้า ตรวจสอบคู่แข่ง และดูภาพรวมตลาด เพื่อให้การตัดสินใจเรื่องแบรนด์อยู่บนข้อมูลจริง เหมาะก่อนเปิดตัว ปรับแบรนด์ หรือขยายสู่ตลาดใหม่'},
      {icon: 'ti-target', title: 'กลยุทธ์และตำแหน่งแบรนด์ (Brand Strategy)', desc: 'ร่วมกำหนดว่าแบรนด์ทำเพื่อใคร สัญญาอะไรกับลูกค้า และต่างจากคู่แข่งอย่างไร สรุปเป็นข้อความตำแหน่งแบรนด์สั้น ๆ และข้อความหลักสำหรับสื่อสาร'},
      {icon: 'ti-tag', title: 'ตั้งชื่อแบรนด์ (Brand Naming)', desc: 'เสนอทิศทางชื่อพร้อมเหตุผล ตรวจความหมายในภาษาไทยและอังกฤษ และตรวจชื่อโดเมนและเครื่องหมายการค้าที่อาจซ้ำ ก่อนตัดสินใจใช้งานจริง'},
      {icon: 'ti-palette', title: 'ออกแบบอัตลักษณ์ (Visual Identity)', desc: 'โลโก้ สี ตัวอักษร สไตล์ภาพ และลวดลาย ออกแบบไปด้วยกัน ทดสอบความคมชัดบนหน้าจอและการแสดงผลทั้งตัวอักษรไทยและละติน'},
      {icon: 'ti-book-2', title: 'คู่มือแบรนด์ (Brand Guidelines)', desc: 'คู่มือที่ใช้งานได้จริง ระบุระยะรอบโลโก้ ค่าสี กฎการใช้ตัวอักษร และตัวอย่างการใช้ที่ถูกและผิด เขียนให้พนักงานใหม่อ่านแล้วทำตามได้'},
      {icon: 'ti-writing', title: 'น้ำเสียงและข้อความแบรนด์ (Brand Voice)', desc: 'กำหนดน้ำเสียง ข้อความหลัก และตัวอย่างประโยคสำหรับสถานการณ์ทั่วไป เช่น หน้าสินค้า ข้อความทักทายใน LINE หรืออีเมลขออภัยลูกค้า'},
      {icon: 'ti-device-desktop', title: 'นำแบรนด์ไปใช้บนดิจิทัล (Digital Rollout)', desc: 'นำแบรนด์ไปใช้บนเว็บไซต์ แอปมือถือ LINE และโซเชียล พร้อมจัดทำเทมเพลต เพื่อให้หน้าใหม่ที่เพิ่มภายหลังยังคงเป็นแบรนด์เดียวกัน'},
      {icon: 'ti-users', title: 'เวิร์กชอปและอบรมทีมงาน (Team Training)', desc: 'ประชุมเชิงปฏิบัติการที่อธิบายแบรนด์ให้ผู้บริหารและพนักงานเข้าใจ และสอนวิธีใช้คู่มือแบรนด์ด้วยตนเอง โดยไม่ต้องถามทีมของเราทุกครั้ง'},
    ]
  const steps = isEN ? [
      {no: '01', title: 'Discovery Conversation', desc: 'A free first conversation about your business, your customers and what you want the brand to do. We then recommend services or a package.'},
      {no: '02', title: 'Research & Strategy', desc: 'We gather evidence, agree the positioning with your team and write it down so every later design decision can refer to it.'},
      {no: '03', title: 'Identity Design', desc: 'We present visual directions, refine the one you choose, and prepare the logo and identity in every format you need.'},
      {no: '04', title: 'Guidelines & Assets', desc: 'The identity becomes a guideline and an organised set of files and templates, ready for your team and vendors.'},
      {no: '05', title: 'Rollout', desc: 'We carry the brand into the website, app and LINE, and train your team to keep it consistent.'},
    ] : [
      {no: '01', title: 'พูดคุยทำความเข้าใจ', desc: 'พูดคุยครั้งแรกโดยไม่มีค่าใช้จ่าย เกี่ยวกับธุรกิจ ลูกค้า และสิ่งที่คุณต้องการให้แบรนด์ทำ จากนั้นเราแนะนำบริการหรือแพ็กเกจที่เหมาะสม'},
      {no: '02', title: 'วิจัยและวางกลยุทธ์', desc: 'รวบรวมข้อมูลจริง ตกลงตำแหน่งแบรนด์ร่วมกับทีมของคุณ และบันทึกไว้ เพื่อให้การออกแบบทุกขั้นตอนต่อจากนี้อ้างอิงได้'},
      {no: '03', title: 'ออกแบบอัตลักษณ์', desc: 'นำเสนอทิศทางด้านภาพ พัฒนาแบบที่คุณเลือกให้สมบูรณ์ และเตรียมโลโก้และอัตลักษณ์ในรูปแบบไฟล์ที่ต้องใช้ทั้งหมด'},
      {no: '04', title: 'คู่มือและไฟล์ต้นฉบับ', desc: 'อัตลักษณ์ถูกจัดทำเป็นคู่มือ พร้อมชุดไฟล์และเทมเพลตที่จัดเป็นระเบียบ พร้อมให้ทีมงานและผู้ให้บริการใช้'},
      {no: '05', title: 'นำไปใช้งานจริง', desc: 'นำแบรนด์ไปใช้บนเว็บไซต์ แอป และ LINE พร้อมอบรมทีมงานให้รักษาความสม่ำเสมอของแบรนด์ได้ต่อเอง'},
    ]
  const faqs = isEN ? [
      {q: 'Can I buy one service only?', a: 'Yes. Each of the eight services can be bought on its own, for example only a logo and guideline, or only a research and strategy project.'},
      {q: 'What are the packages?', a: 'There are five: Brand Creation & Launch, Rebrand & Refresh, Brand + Website, Brand System for Growth, and Thai-English Localisation. They are described on this page, and we adjust the content to your case.'},
      {q: 'How much does it cost?', a: 'The price depends on the scope, for example whether research and naming are included and how many applications need designing. We give a quote after the first conversation, once the scope is clear.'},
      {q: 'How long does it take?', a: 'A basic identity takes about 8-12 weeks. A full brand system with guidelines and digital applications takes about 16-20 weeks. The pace depends mostly on how quickly feedback comes back.'},
      {q: 'Can you build the website after the brand?', a: 'Yes. Our design and development teams build the website from the finished identity, so the brand and the website match from the first page.'},
      {q: 'Who owns the final files?', a: 'The intent is that the identity belongs to you. Ownership is written into the contract, and at handover you receive the final and editable source files.'},
    ] : [
      {q: 'ซื้อบริการเดียวได้ไหม?', a: 'ได้ บริการทั้ง 8 อย่างซื้อแยกได้ เช่น เฉพาะโลโก้และคู่มือแบรนด์ หรือเฉพาะโครงการวิจัยและกลยุทธ์'},
      {q: 'แพ็กเกจมีอะไรบ้าง?', a: 'มี 5 แพ็กเกจ ได้แก่ สร้างแบรนด์และเปิดตัว, ปรับภาพลักษณ์แบรนด์, แบรนด์พร้อมเว็บไซต์, ระบบแบรนด์สำหรับการเติบโต และการปรับแบรนด์สองภาษา อธิบายไว้ในหน้านี้ และเราปรับเนื้อหาให้ตรงกับกรณีของคุณได้'},
      {q: 'ค่าบริการเท่าไร?', a: 'ราคาขึ้นอยู่กับขอบเขตงาน เช่น รวมการวิจัยและการตั้งชื่อหรือไม่ และต้องออกแบบงานนำไปใช้กี่ชิ้น เราเสนอราคาหลังพูดคุยครั้งแรก เมื่อขอบเขตงานชัดเจนแล้ว'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'อัตลักษณ์พื้นฐานใช้ประมาณ 8-12 สัปดาห์ ระบบแบรนด์เต็มรูปแบบที่มีคู่มือและงานดิจิทัลใช้ประมาณ 16-20 สัปดาห์ ระยะเวลาขึ้นอยู่กับความเร็วในการให้ข้อเสนอแนะเป็นหลัก'},
      {q: 'ทำเว็บไซต์ต่อจากแบรนด์ได้ไหม?', a: 'ได้ ทีมออกแบบและทีมพัฒนาของเราสร้างเว็บไซต์จากอัตลักษณ์ที่เสร็จแล้ว แบรนด์และเว็บไซต์จึงตรงกันตั้งแต่หน้าแรก'},
      {q: 'ใครเป็นเจ้าของไฟล์ฉบับสุดท้าย?', a: 'เจตนาคือให้อัตลักษณ์เป็นของคุณ ความเป็นเจ้าของระบุไว้ในสัญญา และเมื่อส่งมอบ คุณจะได้รับไฟล์ฉบับสุดท้ายและไฟล์ต้นฉบับที่แก้ไขได้'},
    ]
  const related = isEN ? [
      {label: 'Brand Experience', href: '/services/brand-experience'},
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Web Development', href: '/services/web-development'},
    ] : [
      {label: 'ประสบการณ์แบรนด์', href: '/services/brand-experience'},
      {label: 'ระบบดีไซน์', href: '/services/design-systems'},
      {label: 'ออกแบบ UX / UI', href: '/services/ux-ui-design'},
      {label: 'พัฒนาเว็บไซต์', href: '/services/web-development'},
    ]

  const packages = isEN ? [
      {stage: 'Starting a new brand?', name: 'Brand Creation & Launch', status: '“I am launching a new business or product and want to start right.”', who: 'A new business or product line.', what: 'Strategy, name, identity, guideline and a launch website, so the brand is ready before the first customer arrives.', parts: ['Research', 'Strategy', 'Naming', 'Identity', 'Guidelines', 'Launch website']},
      {stage: 'Old brand holding you back?', name: 'Rebrand & Refresh', status: '“My business has outgrown its image, but customers still see the old one.”', who: 'A business that has outgrown its image.', what: 'Research, a new position, a refreshed identity and a plan for moving over without losing the recognition you have built.', parts: ['Research', 'Strategy', 'Identity', 'Guidelines', 'Rollout']},
      {stage: 'Need brand and website?', name: 'Brand + Website', status: '“I need both the brand and the website, and do not want to do it twice.”', who: 'A business that needs both.', what: 'The brand is settled first, then the website is built from it, in one engagement with one team.', parts: ['Strategy', 'Identity', 'Brand voice', 'Website', 'LINE and social']},
      {stage: 'Growing fast?', name: 'Brand System for Growth', status: '“The team is growing fast and our work no longer looks like one brand.”', who: 'A fast-growing team.', what: 'Guidelines, templates and training, so many people can produce work that still looks and sounds like one brand.', parts: ['Guidelines', 'Templates', 'Asset library', 'Team training']},
      {stage: 'Entering a new market?', name: 'Thai-English Localisation', status: '“I want to enter another market, but want to be sure before investing fully.”', who: 'Brands crossing markets.', what: 'An identity and voice that hold up in both Thai and English, for Thai brands going abroad or foreign brands entering Thailand.', parts: ['Market research', 'Voice in two languages', 'Identity check', 'Guidelines']},
    ] : [
      {stage: 'กำลังสร้างแบรนด์ใหม่?', name: 'สร้างแบรนด์และเปิดตัว', status: '“ฉันกำลังจะเปิดธุรกิจหรือสินค้าใหม่ และอยากเริ่มให้ถูกจุด”', who: 'ธุรกิจหรือสายผลิตภัณฑ์ใหม่', what: 'กลยุทธ์ ชื่อ อัตลักษณ์ คู่มือ และเว็บไซต์เปิดตัว เพื่อให้แบรนด์พร้อมก่อนลูกค้าคนแรกมาถึง', parts: ['วิจัย', 'กลยุทธ์', 'ตั้งชื่อ', 'อัตลักษณ์', 'คู่มือแบรนด์', 'เว็บไซต์เปิดตัว']},
      {stage: 'แบรนด์เดิมเริ่มไปต่อไม่ไหว?', name: 'ปรับภาพลักษณ์แบรนด์', status: '“ธุรกิจของฉันโตเกินภาพลักษณ์เดิมแล้ว แต่ลูกค้ายังมองเป็นแบบเก่า”', who: 'ธุรกิจที่เติบโตเกินภาพลักษณ์เดิม', what: 'วิจัย กำหนดตำแหน่งใหม่ ปรับอัตลักษณ์ และวางแผนการเปลี่ยนผ่านโดยไม่ทำให้ลูกค้าจำแบรนด์ที่สร้างมาไม่ได้', parts: ['วิจัย', 'กลยุทธ์', 'อัตลักษณ์', 'คู่มือแบรนด์', 'นำไปใช้งาน']},
      {stage: 'ต้องการแบรนด์และเว็บไซต์?', name: 'แบรนด์พร้อมเว็บไซต์', status: '“ฉันต้องการทั้งแบรนด์และเว็บไซต์ และไม่อยากทำซ้ำสองรอบ”', who: 'ธุรกิจที่ต้องการทั้งสองอย่าง', what: 'กำหนดแบรนด์ให้เสร็จก่อน แล้วสร้างเว็บไซต์จากแบรนด์นั้น ในโครงการเดียวและทีมเดียวกัน', parts: ['กลยุทธ์', 'อัตลักษณ์', 'น้ำเสียงแบรนด์', 'เว็บไซต์', 'LINE และโซเชียล']},
      {stage: 'โตเร็วจนภาพไม่สม่ำเสมอ?', name: 'ระบบแบรนด์สำหรับการเติบโต', status: '“ทีมโตเร็ว และงานที่ออกไปเริ่มดูไม่เหมือนแบรนด์เดียวกัน”', who: 'ทีมที่เติบโตเร็ว', what: 'คู่มือ เทมเพลต และการอบรม เพื่อให้คนจำนวนมากผลิตงานที่ยังดูและฟังเป็นแบรนด์เดียวกัน', parts: ['คู่มือแบรนด์', 'เทมเพลต', 'คลังไฟล์', 'อบรมทีมงาน']},
      {stage: 'กำลังจะเข้าตลาดใหม่?', name: 'การปรับแบรนด์สองภาษา', status: '“ฉันอยากข้ามไปอีกตลาด แต่อยากมั่นใจก่อนลงทุนเต็มตัว”', who: 'แบรนด์ที่ข้ามตลาด', what: 'อัตลักษณ์และน้ำเสียงที่ใช้ได้ดีทั้งไทยและอังกฤษ สำหรับแบรนด์ไทยที่ไปต่างประเทศ หรือแบรนด์ต่างชาติที่เข้าไทย', parts: ['วิจัยตลาด', 'น้ำเสียงสองภาษา', 'ตรวจอัตลักษณ์', 'คู่มือแบรนด์']},
    ]

  const programs = (
    <BrandingPackages
      pkgs={packages}
      heading={isEN ? 'Which stage is your business in?' : 'ธุรกิจของคุณอยู่ในช่วงไหน?'}
      intro={isEN ? 'Each stage needs a different answer about the brand. Pick yours and see the package we would combine for it. We adjust every package to your case.' : 'แต่ละช่วงของธุรกิจต้องการคำตอบเรื่องแบรนด์ไม่เหมือนกัน เลือกช่วงของคุณเพื่อดูแพ็กเกจที่เรารวมไว้ให้ และเราปรับเนื้อหาให้ตรงกับกรณีของคุณ'}
      forLabel={isEN ? 'For:' : 'เหมาะกับ:'}
      partsLabel={isEN ? 'WHAT IS INCLUDED' : 'สิ่งที่รวมอยู่'}
      situationLabel={isEN ? 'YOUR SITUATION' : 'สถานการณ์ของคุณ'}
    />
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps}
      faqs={faqs} related={related}
      postHeroSlot={programs}
      color="var(--accent)" bg="var(--purple-bg)"
      heroImg="/images/services/brand-experience/hero.jpg"
      whyImg="/images/services/brand-experience/why1.jpg"
      whyImg2="/images/services/brand-experience/why2.jpg"
      featureImg="/images/services/brand-experience/feature.jpg"
      processImg="/images/services/brand-experience/process.jpg"
    />
  )
}
