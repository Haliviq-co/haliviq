import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Privacy Policy | Haliviq' : 'นโยบายความเป็นส่วนตัว | Haliviq'
  const description = isEN
    ? "How Haliviq collects, uses, shares, and protects your personal data, in line with Thailand's PDPA and applicable data protection laws."
    : 'นโยบายความเป็นส่วนตัวของ Haliviq เรื่องการเก็บ ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคล ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)'
  const siteUrl = `https://www.haliviq.com/${params.lang}/privacy`
  return { title, description, alternates: alt(siteUrl), openGraph: { title, description, url: siteUrl } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'

  const intro = isEN
    ? 'Your trust matters to us. This policy explains in plain language what personal data Haliviq collects, why we collect it, who sees it, how long we keep it, and what rights you have. If anything is unclear, write to us at info@haliviq.com.'
    : 'ความไว้วางใจของท่านสำคัญกับเรา นโยบายนี้อธิบายด้วยภาษาง่าย ๆ ว่า Haliviq เก็บข้อมูลส่วนบุคคลอะไรบ้าง เก็บเพราะอะไร ใครเข้าถึงได้ เก็บนานแค่ไหน และท่านมีสิทธิอะไรบ้าง หากมีข้อสงสัย ติดต่อเราได้ที่ info@haliviq.com'

  const sections: LegalSection[] = isEN ? [
    { title: '1. Who We Are', body: 'Haliviq Co., Ltd. ("Haliviq", "we", "us", "our") is a digital product studio headquartered at Spaces Building, Phaya Thai Rd, 4th Floor, Room 402, Ratchathewi, Bangkok 10400, Thailand, with an office at 2025 Olympic Hwy N Ste 105, Shelton, WA, USA. For personal data collected through this website and our own business activities, Haliviq is the data controller. For personal data we handle on a client\'s behalf while building or running their product, Haliviq acts as a data processor under the client\'s instructions and contract.' },
    { title: '2. Scope of This Policy', body: 'This policy applies to haliviq.com (including the /th and /en versions), our communication channels (email, LINE, WhatsApp, social media), our events and sales conversations, and our recruitment process. It does not cover third-party websites we link to, or the privacy practices of our clients\' own products, which are governed by those clients\' policies.' },
    { title: '3. Personal Data We Collect', body: 'We collect only what we need, grouped as follows:', items: [
      'Identity & contact data: name, email address, phone number, company name, job title.',
      'Enquiry & project data: the content of your messages, project descriptions, budget range, and how you heard about us, when you use our contact form or reach out by email, LINE, or WhatsApp.',
      'Chat assistant data: the questions you type to our website assistant (Havy) are logged without your name. If you choose "Ask the team to contact me", we also receive the contact detail you enter and a short summary of what you asked, only after you tick the consent box. We use it solely to get back to you, and it is sent to our team through LINE.',
      'Subscription data: your email address and preferences if you subscribe to our newsletter.',
      'Technical & usage data: IP address, browser and device type, pages viewed, referring page, and approximate location, collected through cookies and similar technologies (see our Cookie Policy).',
      'Recruitment data: CV, portfolio, work history, and contact details, if you apply for a role with us.',
      'Business relationship data: contract details, invoicing and payment information of clients and suppliers.',
    ] },
    { title: '4. How We Collect It', items: [
      'Directly from you, when you fill in a form, email or message us, subscribe, apply, or meet us.',
      'Automatically, when you use our website, through cookies and analytics tools — optional analytics cookies are only activated if you consent.',
      'From third parties, such as referrals, public business profiles (e.g. LinkedIn), or clients who introduce you as a project contact.',
    ] },
    { title: '5. Why We Use Your Data (Purposes & Legal Bases)', body: 'Under Thailand\'s Personal Data Protection Act B.E. 2562 (2019) ("PDPA") we need a lawful basis for each use:', items: [
      'To respond to enquiries, prepare proposals, and start a project — legal basis: steps taken at your request before entering a contract, and our legitimate interest in running our business.',
      'To deliver, support, and invoice our services — legal basis: performance of a contract.',
      'To send newsletters, insights, and event invitations — legal basis: your consent, which you can withdraw at any time.',
      'To understand and improve our website and marketing, using analytics and advertising measurement — legal basis: your consent (optional cookies).',
      'To keep our systems secure and prevent fraud or abuse — legal basis: our legitimate interest.',
      'To comply with tax, accounting, and other legal obligations — legal basis: legal obligation.',
      'To evaluate job applications — legal basis: steps taken at your request and our legitimate interest in hiring.',
    ] },
    { title: '6. Marketing & Your Choices', body: 'We only send marketing emails if you subscribed or have an existing business relationship with us. Every marketing email includes an unsubscribe link, and you can also write to info@haliviq.com at any time. Unsubscribing does not affect service-related messages about an active project.' },
    { title: '7. Who We Share Data With', body: 'We do not sell your personal data. We share it only as needed with:', items: [
      'Service providers acting on our instructions — for example website hosting, email and communication tools, project management and file-sharing tools, analytics and advertising measurement (Google), and accounting and legal advisers.',
      'Our team members and contractors who need access to do their work, under confidentiality obligations.',
      'Clients and partners, where you are a project contact or have asked us to introduce you.',
      'Authorities, courts, or other parties, where required by law or to establish, exercise, or defend legal claims.',
      'A successor entity, in the event of a merger, acquisition, or restructuring, subject to this policy continuing to apply.',
    ], note: 'Each service provider is expected to protect personal data to a standard consistent with this policy and applicable law.' },
    { title: '8. International Transfers', body: 'Because we operate in Thailand and the USA and use global cloud and software providers, your personal data may be processed outside Thailand. Where we transfer data abroad, we take steps to ensure the destination provides appropriate protection — for example by choosing providers with recognised security and privacy commitments and by using contractual safeguards — in line with the PDPA.' },
    { title: '9. How Long We Keep Data', body: 'We keep personal data only as long as needed for the purposes above, then delete or anonymise it. As a guide:', items: [
      'Enquiries that do not become a project: up to 24 months.',
      'Client project and contract records: for the duration of the relationship plus the period required by tax, accounting, and limitation laws (generally up to 10 years for accounting records).',
      'Newsletter subscriptions: until you unsubscribe.',
      'Job applications: up to 12 months unless you agree that we keep them longer.',
      'Analytics cookies: according to the provider\'s standard schedule, generally up to 13 months.',
    ] },
    { title: '10. Data Security', body: 'We use reasonable technical and organisational measures to protect personal data, including encrypted connections (HTTPS), access controls based on need-to-know, secure storage with reputable providers, and confidentiality obligations for our people. No system is completely secure. If a personal data breach occurs that is likely to put your rights and freedoms at risk, we will notify the Personal Data Protection Committee and affected individuals as required by the PDPA.' },
    { title: '11. Use of AI Tools', body: 'We use AI tools to help with our work (for example drafting, research, and code assistance), and we build AI products for clients. We do not put client confidential data or personal data into AI tools that may use it to train public models, we use enterprise or API tiers that contractually exclude your data from model training where personal data is involved, and we review AI-assisted output before delivery. Any AI system we build for a client is handled under that client\'s contract and instructions.' },
    { title: '12. Your Rights', body: 'Subject to the PDPA and other applicable law, you have the right to:', items: [
      'Access your personal data and request a copy.',
      'Correct data that is inaccurate or incomplete.',
      'Request deletion or anonymisation of data we no longer need or have no basis to keep.',
      'Withdraw consent at any time, without affecting processing already carried out.',
      'Object to or restrict certain processing, including direct marketing.',
      'Request your data in a portable, machine-readable format.',
      'Lodge a complaint with the Personal Data Protection Committee (PDPC) of Thailand if you believe we have not complied with the law.',
    ], note: 'To exercise a right, email info@haliviq.com with enough detail for us to identify you and your request. We may need to verify your identity, and we aim to respond within 30 days.' },
    { title: '13. Cookies & Similar Technologies', body: 'We use essential cookies to run the site and optional analytics and advertising cookies only with your consent. You can change your choice at any time by clearing this site\'s data in your browser. Full details are in our Cookie Policy.' },
    { title: '14. Third-Party Links', body: 'Our website may link to third-party sites and social channels (such as Facebook, Instagram, LinkedIn, LINE, and WhatsApp). We are not responsible for their content or privacy practices, and we encourage you to read their policies.' },
    { title: '15. Children', body: 'Our website and services are intended for businesses and are not directed at children under 16. We do not knowingly collect personal data from children. If you believe a child has given us personal data, contact us and we will delete it.' },
    { title: '16. Changes to This Policy', body: 'We may update this policy from time to time to reflect changes in our practices, technology, or law. We will publish the updated version here with a new "last updated" date, and where changes are significant we will take reasonable steps to let you know.' },
    { title: '17. Contact Us', body: 'Questions, requests, or complaints about privacy: info@haliviq.com. Postal address: Haliviq Co., Ltd., Spaces Building, Phaya Thai Rd, 4th Floor, Room 402, Ratchathewi, Bangkok 10400, Thailand. Phone: +66 90 918 9009.' },
  ] : [
    { title: '1. เราคือใคร', body: 'บริษัท ฮาลิวิก จำกัด ("Haliviq" "เรา") เป็นสตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัล สำนักงานใหญ่อยู่ที่ อาคาร Spaces ถนนพญาไท ชั้น 4 ห้อง 402 เขตราชเทวี กรุงเทพฯ 10400 และมีสำนักงานที่ 2025 Olympic Hwy N Ste 105, Shelton, WA สหรัฐอเมริกา ข้อมูลส่วนบุคคลที่เก็บผ่านเว็บไซต์และกิจกรรมทางธุรกิจของเราเอง Haliviq เป็น "ผู้ควบคุมข้อมูลส่วนบุคคล" ส่วนข้อมูลที่เราดูแลในนามลูกค้าระหว่างพัฒนาหรือดูแลผลิตภัณฑ์ของลูกค้า Haliviq เป็น "ผู้ประมวลผลข้อมูลส่วนบุคคล" ตามคำสั่งและสัญญากับลูกค้า' },
    { title: '2. ขอบเขตของนโยบาย', body: 'นโยบายนี้ใช้กับ haliviq.com (ทั้งเวอร์ชัน /th และ /en) ช่องทางสื่อสารของเรา (อีเมล LINE WhatsApp โซเชียลมีเดีย) งานอีเวนต์ การคุยเรื่องการขาย และการสรรหาบุคลากร ไม่ครอบคลุมเว็บไซต์ของบุคคลที่สามที่เราลิงก์ไป หรือการดูแลความเป็นส่วนตัวในผลิตภัณฑ์ของลูกค้า ซึ่งเป็นไปตามนโยบายของลูกค้านั้น ๆ' },
    { title: '3. ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม', body: 'เราเก็บเท่าที่จำเป็น แบ่งเป็นประเภทดังนี้', items: [
      'ข้อมูลระบุตัวตนและติดต่อ: ชื่อ อีเมล เบอร์โทรศัพท์ ชื่อบริษัท ตำแหน่งงาน',
      'ข้อมูลการสอบถามและโปรเจกต์: ข้อความ รายละเอียดโปรเจกต์ ช่วงงบประมาณ และช่องทางที่รู้จักเรา เมื่อท่านกรอกแบบฟอร์มติดต่อ หรือติดต่อทางอีเมล LINE หรือ WhatsApp',
      'ข้อมูลจากผู้ช่วยแชท: คำถามที่ท่านพิมพ์ถึงน้องฮาวี่บนเว็บไซต์จะถูกบันทึกโดยไม่ระบุชื่อ หากท่านเลือก "ให้ทีมติดต่อกลับ" เราจะได้รับข้อมูลติดต่อที่ท่านกรอกและสรุปสั้น ๆ ของสิ่งที่ท่านสอบถาม หลังจากท่านติ๊กยินยอมแล้วเท่านั้น เราใช้เพื่อติดต่อกลับท่านเท่านั้น และส่งถึงทีมงานผ่าน LINE',
      'ข้อมูลการสมัครรับข่าวสาร: อีเมลและความสนใจของท่าน หากสมัครรับจดหมายข่าว',
      'ข้อมูลทางเทคนิคและการใช้งาน: IP Address ประเภทเบราว์เซอร์และอุปกรณ์ หน้าที่เข้าชม เว็บที่พามาหาเรา และตำแหน่งโดยประมาณ ซึ่งเก็บผ่านคุกกี้และเทคโนโลยีที่คล้ายกัน (ดูนโยบายคุกกี้)',
      'ข้อมูลการสมัครงาน: ประวัติย่อ ผลงาน ประวัติการทำงาน และข้อมูลติดต่อ หากท่านสมัครงานกับเรา',
      'ข้อมูลความสัมพันธ์ทางธุรกิจ: รายละเอียดสัญญา ใบแจ้งหนี้ และการชำระเงินของลูกค้าและซัพพลายเออร์',
    ] },
    { title: '4. วิธีที่เราเก็บข้อมูล', items: [
      'จากท่านโดยตรง เมื่อกรอกแบบฟอร์ม ส่งอีเมลหรือข้อความ สมัครรับข่าวสาร สมัครงาน หรือพบเรา',
      'โดยอัตโนมัติ เมื่อท่านใช้เว็บไซต์ ผ่านคุกกี้และเครื่องมือวิเคราะห์ โดยคุกกี้วิเคราะห์ที่ไม่บังคับจะเปิดใช้เมื่อท่านยินยอมเท่านั้น',
      'จากบุคคลที่สาม เช่น คนที่แนะนำท่านมา โปรไฟล์ธุรกิจสาธารณะ (เช่น LinkedIn) หรือลูกค้าที่ระบุท่านเป็นผู้ประสานงานโปรเจกต์',
    ] },
    { title: '5. เหตุผลที่เราใช้ข้อมูล (วัตถุประสงค์และฐานทางกฎหมาย)', body: 'ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) เราต้องมีฐานทางกฎหมายทุกครั้งที่ใช้ข้อมูล ดังนี้', items: [
      'เพื่อตอบคำถาม จัดทำข้อเสนอ และเริ่มโปรเจกต์ — ฐาน: ทำตามคำขอของท่านก่อนทำสัญญา และประโยชน์โดยชอบด้วยกฎหมายในการดำเนินธุรกิจ',
      'เพื่อส่งมอบ ดูแล และเรียกเก็บค่าบริการ — ฐาน: ปฏิบัติตามสัญญา',
      'เพื่อส่งจดหมายข่าว บทความ และคำเชิญเข้าร่วมงาน — ฐาน: ความยินยอมของท่าน ซึ่งถอนได้ทุกเมื่อ',
      'เพื่อเข้าใจและปรับปรุงเว็บไซต์และการตลาด โดยใช้เครื่องมือวิเคราะห์และวัดผลโฆษณา — ฐาน: ความยินยอมของท่าน (คุกกี้ที่ไม่บังคับ)',
      'เพื่อรักษาความปลอดภัยของระบบและป้องกันการทุจริตหรือการใช้งานที่ผิดวัตถุประสงค์ — ฐาน: ประโยชน์โดยชอบด้วยกฎหมาย',
      'เพื่อทำตามกฎหมายภาษี บัญชี และกฎหมายอื่น — ฐาน: ปฏิบัติตามกฎหมาย',
      'เพื่อพิจารณาใบสมัครงาน — ฐาน: ทำตามคำขอของท่าน และประโยชน์โดยชอบด้วยกฎหมายในการสรรหาบุคลากร',
    ] },
    { title: '6. การตลาดและทางเลือกของท่าน', body: 'เราจะส่งอีเมลการตลาดเฉพาะเมื่อท่านสมัครรับข่าวสาร หรือมีความสัมพันธ์ทางธุรกิจกับเราอยู่แล้ว ทุกอีเมลมีลิงก์ยกเลิกการรับ และท่านส่งอีเมลมาที่ info@haliviq.com ได้ทุกเมื่อ การยกเลิกการรับข่าวสารไม่มีผลกับข้อความเรื่องงานบริการในโปรเจกต์ที่กำลังดำเนินอยู่' },
    { title: '7. เราเปิดเผยข้อมูลให้ใคร', body: 'เราไม่ขายข้อมูลส่วนบุคคลของท่าน เราเปิดเผยเท่าที่จำเป็นแก่:', items: [
      'ผู้ให้บริการที่ทำตามคำสั่งของเรา เช่น ผู้ให้บริการ Hosting เครื่องมืออีเมลและสื่อสาร เครื่องมือบริหารโปรเจกต์และแชร์ไฟล์ เครื่องมือวิเคราะห์และวัดผลโฆษณา (Google) และที่ปรึกษาด้านบัญชีและกฎหมาย',
      'ทีมงานและผู้รับจ้างของเราที่ต้องใช้ข้อมูลในการทำงาน ภายใต้ข้อผูกพันรักษาความลับ',
      'ลูกค้าและพาร์ทเนอร์ เมื่อท่านเป็นผู้ประสานงานโปรเจกต์หรือขอให้เราแนะนำท่าน',
      'หน่วยงานรัฐ ศาล หรือบุคคลอื่น เมื่อกฎหมายกำหนด หรือเพื่อก่อตั้ง ใช้ หรือต่อสู้สิทธิเรียกร้องทางกฎหมาย',
      'ผู้รับช่วงกิจการ ในกรณีควบรวม เข้าซื้อกิจการ หรือปรับโครงสร้าง โดยนโยบายนี้ยังใช้ต่อไป',
    ], note: 'ผู้ให้บริการแต่ละรายต้องปกป้องข้อมูลส่วนบุคคลตามมาตรฐานที่สอดคล้องกับนโยบายนี้และกฎหมายที่เกี่ยวข้อง' },
    { title: '8. การโอนข้อมูลไปต่างประเทศ', body: 'เราทำงานในประเทศไทยและสหรัฐอเมริกา และใช้ผู้ให้บริการ Cloud และซอฟต์แวร์ระดับโลก ข้อมูลส่วนบุคคลของท่านจึงอาจถูกประมวลผลนอกประเทศไทย เมื่อส่งข้อมูลไปต่างประเทศ เราจะดูให้ประเทศปลายทางมีการปกป้องข้อมูลที่เหมาะสม เช่น เลือกผู้ให้บริการที่มีมาตรฐานความปลอดภัยและความเป็นส่วนตัวที่ยอมรับได้ และใช้มาตรการทางสัญญา ตามที่ PDPA กำหนด' },
    { title: '9. ระยะเวลาการเก็บรักษา', body: 'เราเก็บข้อมูลส่วนบุคคลเท่าที่จำเป็นต่อวัตถุประสงค์ข้างต้น จากนั้นจึงลบหรือทำให้ระบุตัวตนไม่ได้ โดยมีแนวทางดังนี้', items: [
      'คำสอบถามที่ไม่ได้เป็นโปรเจกต์: ไม่เกิน 24 เดือน',
      'บันทึกโปรเจกต์และสัญญากับลูกค้า: ตลอดช่วงที่ยังมีความสัมพันธ์ และต่ออีกตามระยะเวลาที่กฎหมายภาษี บัญชี และอายุความกำหนด (โดยทั่วไปเอกสารทางบัญชีเก็บได้ถึง 10 ปี)',
      'การสมัครรับจดหมายข่าว: จนกว่าท่านจะยกเลิก',
      'ใบสมัครงาน: ไม่เกิน 12 เดือน เว้นแต่ท่านตกลงให้เก็บนานกว่านั้น',
      'คุกกี้วิเคราะห์: ตามที่ผู้ให้บริการกำหนด โดยทั่วไปไม่เกิน 13 เดือน',
    ] },
    { title: '10. ความปลอดภัยของข้อมูล', body: 'เราใช้มาตรการทางเทคนิคและการบริหารจัดการที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคล เช่น การเชื่อมต่อแบบเข้ารหัส (HTTPS) การจำกัดสิทธิ์เข้าถึงเท่าที่จำเป็น การเก็บข้อมูลอย่างปลอดภัยกับผู้ให้บริการที่น่าเชื่อถือ และข้อผูกพันรักษาความลับของบุคลากร ไม่มีระบบใดปลอดภัยได้ร้อยเปอร์เซ็นต์ หากเกิดเหตุละเมิดข้อมูลส่วนบุคคลที่เสี่ยงกระทบสิทธิและเสรีภาพของท่าน เราจะแจ้งคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลและผู้ได้รับผลกระทบตามที่ PDPA กำหนด' },
    { title: '11. การใช้เครื่องมือ AI', body: 'เราใช้เครื่องมือ AI ช่วยทำงาน (เช่น ร่างเนื้อหา ค้นคว้า และช่วยเขียนโค้ด) และพัฒนาผลิตภัณฑ์ AI ให้ลูกค้า เราไม่นำข้อมูลลับของลูกค้าหรือข้อมูลส่วนบุคคลไปใส่ในเครื่องมือ AI ที่อาจนำข้อมูลไปฝึกโมเดลสาธารณะ หากเกี่ยวกับข้อมูลส่วนบุคคล เราใช้บริการระดับ Enterprise หรือ API ที่สัญญาระบุว่าไม่นำข้อมูลไปฝึกโมเดล และตรวจผลงานที่ใช้ AI ช่วยก่อนส่งมอบ ระบบ AI ที่เราพัฒนาให้ลูกค้าเป็นไปตามสัญญาและคำสั่งของลูกค้านั้น' },
    { title: '12. สิทธิของท่าน', body: 'ภายใต้ PDPA และกฎหมายที่เกี่ยวข้อง ท่านมีสิทธิ:', items: [
      'เข้าถึงข้อมูลส่วนบุคคลของท่านและขอรับสำเนา',
      'แก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วน',
      'ขอให้ลบหรือทำให้ระบุตัวตนไม่ได้ สำหรับข้อมูลที่เราไม่จำเป็นต้องใช้หรือไม่มีฐานในการเก็บอีกต่อไป',
      'ถอนความยินยอมได้ทุกเมื่อ โดยไม่กระทบการประมวลผลที่ทำไปแล้ว',
      'คัดค้านหรือขอจำกัดการประมวลผลบางอย่าง รวมถึงการตลาดแบบตรง',
      'ขอรับข้อมูลในรูปแบบที่เครื่องอ่านได้และนำไปใช้ต่อได้',
      'ร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) หากท่านเห็นว่าเราไม่ทำตามกฎหมาย',
    ], note: 'หากต้องการใช้สิทธิ ส่งอีเมลมาที่ info@haliviq.com พร้อมรายละเอียดที่พอให้เราระบุตัวท่านและคำขอได้ เราอาจขอยืนยันตัวตน และตั้งเป้าตอบกลับภายใน 30 วัน' },
    { title: '13. คุกกี้และเทคโนโลยีที่คล้ายกัน', body: 'เราใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงาน และใช้คุกกี้วิเคราะห์และโฆษณาที่ไม่บังคับเฉพาะเมื่อท่านยินยอม ท่านเปลี่ยนตัวเลือกได้ทุกเมื่อโดยล้างข้อมูลของเว็บไซต์นี้ในเบราว์เซอร์ ดูรายละเอียดได้ในนโยบายคุกกี้' },
    { title: '14. ลิงก์ไปยังบุคคลที่สาม', body: 'เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์และช่องทางโซเชียลของบุคคลที่สาม (เช่น Facebook Instagram LinkedIn LINE และ WhatsApp) เราไม่รับผิดชอบต่อเนื้อหาหรือการดูแลความเป็นส่วนตัวของเว็บไซต์เหล่านั้น จึงขอให้ท่านอ่านนโยบายของแต่ละแห่ง' },
    { title: '15. เด็ก', body: 'เว็บไซต์และบริการของเราเน้นกลุ่มธุรกิจ ไม่ได้มุ่งไปที่เด็กอายุต่ำกว่า 16 ปี เราไม่เก็บข้อมูลส่วนบุคคลของเด็กโดยเจตนา หากท่านเชื่อว่าเด็กให้ข้อมูลส่วนบุคคลแก่เรา โปรดติดต่อเราเพื่อลบข้อมูลนั้น' },
    { title: '16. การเปลี่ยนแปลงนโยบาย', body: 'เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราวให้ตรงกับการทำงาน เทคโนโลยี หรือกฎหมายที่เปลี่ยนไป เราจะเผยแพร่ฉบับใหม่ไว้ที่นี่พร้อมวันที่ปรับปรุงล่าสุด และหากมีการเปลี่ยนแปลงสำคัญ เราจะพยายามแจ้งให้ท่านทราบตามสมควร' },
    { title: '17. ติดต่อเรา', body: 'คำถาม คำขอ หรือข้อร้องเรียนด้านความเป็นส่วนตัว: info@haliviq.com ที่อยู่: บริษัท ฮาลิวิก จำกัด อาคาร Spaces ถนนพญาไท ชั้น 4 ห้อง 402 เขตราชเทวี กรุงเทพฯ 10400 โทร +66 90 918 9009' },
  ]

  return <LegalPage lang={lang} title={isEN ? 'Privacy Policy' : 'นโยบายความเป็นส่วนตัว'} intro={intro} sections={sections} />
}
