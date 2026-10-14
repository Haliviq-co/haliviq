import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Code of Conduct | Haliviq' : 'จรรยาบรรณธุรกิจ | Haliviq'
  const description = isEN ? 'The standards of conduct Haliviq expects from our team, partners, and suppliers.' : 'มาตรฐานความประพฤติที่ Haliviq คาดหวังจากทีมงาน พาร์ทเนอร์ และซัพพลายเออร์'
  const url = `https://www.haliviq.com/${params.lang}/code-of-conduct`
  return { title, description, alternates: alt(url), openGraph: { title, description, url } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const sections = isEN ? [
    { title: '1. Purpose', body: 'This Code of Conduct sets out the standards of behaviour that Haliviq Co., Ltd. expects from every director, employee, contractor, and partner acting on our behalf. It applies in all our work, with clients, and in every country where we operate.' },
    { title: '2. Integrity & Honesty', body: 'We act honestly and transparently in all dealings. We do not misrepresent our capabilities, results, or pricing, and we deliver on the commitments we make to clients and colleagues.' },
    { title: '3. Respect & Inclusion', body: 'We treat everyone with dignity and respect. Discrimination, harassment, bullying, or abuse based on gender, age, race, nationality, religion, disability, sexual orientation, or any other characteristic is not tolerated.' },
    { title: '4. Conflicts of Interest', body: 'We avoid situations where personal interests conflict, or appear to conflict, with the interests of Haliviq or our clients. Any potential conflict must be disclosed to management promptly.' },
    { title: '5. Confidentiality & Data Protection', body: 'We protect client and company information, honour NDAs, and handle personal data in line with Thailand\'s PDPA and our Privacy Policy. Confidential information is used only for the purpose it was shared.' },
    { title: '6. Intellectual Property', body: 'We respect the intellectual property of others. We do not use unlicensed software, images, fonts, or code, and we credit open-source and third-party work in line with its licence.' },
    { title: '7. Responsible Use of AI', body: 'When using AI tools in our work, we protect client data, verify outputs before delivery, are transparent with clients about material AI use, and do not use AI in ways that are deceptive, discriminatory, or unlawful.' },
    { title: '8. Compliance with Law', body: 'We comply with all laws and regulations that apply to our business, including labour, tax, data protection, and anti-corruption laws. See also our Anti-Bribery & Anti-Corruption Policy.' },
    { title: '9. Raising Concerns', body: 'Anyone who sees or suspects a breach of this Code is encouraged to report it to management or to info@haliviq.com. Reports made in good faith will be treated confidentially, and retaliation against anyone who raises a concern is prohibited.' },
    { title: '10. Breaches', body: 'Breaches of this Code may lead to disciplinary action, up to and including termination of employment or contract, and where required, referral to the relevant authorities.' },
  ] : [
    { title: '1. วัตถุประสงค์', body: 'จรรยาบรรณธุรกิจฉบับนี้กำหนดมาตรฐานความประพฤติที่บริษัท ฮาลิวิค จำกัด คาดหวังจากกรรมการ พนักงาน ผู้รับจ้าง และพาร์ทเนอร์ทุกคนที่ทำงานในนามของเรา ใช้กับงานทุกอย่าง รวมถึงงานของลูกค้า และทุกประเทศที่เราทำธุรกิจ' },
    { title: '2. ความซื่อสัตย์และโปร่งใส', body: 'เราซื่อสัตย์และโปร่งใสในทุกการติดต่อ ไม่พูดเกินจริงเรื่องความสามารถ ผลงาน หรือราคา และทำตามที่สัญญาไว้กับลูกค้าและเพื่อนร่วมงาน' },
    { title: '3. ความเคารพและความหลากหลาย', body: 'เราปฏิบัติต่อทุกคนด้วยความเคารพและให้เกียรติ ไม่ยอมรับการเลือกปฏิบัติ การคุกคาม การกลั่นแกล้ง หรือการล่วงละเมิด ไม่ว่าจะเพราะเพศ อายุ เชื้อชาติ สัญชาติ ศาสนา ความพิการ รสนิยมทางเพศ หรือเหตุอื่นใด' },
    { title: '4. ผลประโยชน์ทับซ้อน', body: 'เราหลีกเลี่ยงสถานการณ์ที่ผลประโยชน์ส่วนตัวขัดแย้งหรือดูเหมือนขัดแย้งกับผลประโยชน์ของ Haliviq หรือของลูกค้า หากอาจเกิดผลประโยชน์ทับซ้อน ต้องแจ้งผู้บริหารโดยเร็ว' },
    { title: '5. การรักษาความลับและการคุ้มครองข้อมูล', body: 'เราปกป้องข้อมูลของลูกค้าและของบริษัท ทำตาม NDA และจัดการข้อมูลส่วนบุคคลตาม PDPA และนโยบายความเป็นส่วนตัวของเรา ข้อมูลลับจะใช้เฉพาะตามวัตถุประสงค์ที่ได้รับมาเท่านั้น' },
    { title: '6. ทรัพย์สินทางปัญญา', body: 'เราเคารพทรัพย์สินทางปัญญาของผู้อื่น ไม่ใช้ซอฟต์แวร์ ภาพ ฟอนต์ หรือโค้ดที่เราไม่มีสิทธิ์ใช้ และให้เครดิตผลงาน Open-source และของบุคคลที่สามตามเงื่อนไขสัญญาอนุญาต' },
    { title: '7. การใช้ AI อย่างรับผิดชอบ', body: 'เมื่อใช้เครื่องมือ AI ในการทำงาน เราปกป้องข้อมูลลูกค้า ตรวจผลลัพธ์ก่อนส่งมอบ บอกลูกค้าตรง ๆ เมื่อใช้ AI เป็นส่วนสำคัญของงาน และไม่ใช้ AI เพื่อหลอกลวง เลือกปฏิบัติ หรือทำผิดกฎหมาย' },
    { title: '8. การปฏิบัติตามกฎหมาย', body: 'เราปฏิบัติตามกฎหมายและกฎระเบียบทั้งหมดที่เกี่ยวกับธุรกิจ รวมถึงกฎหมายแรงงาน ภาษี คุ้มครองข้อมูล และต่อต้านการทุจริต ดูเพิ่มเติมที่นโยบายต่อต้านการให้สินบนและการทุจริตของเรา' },
    { title: '9. การแจ้งข้อกังวล', body: 'หากพบเห็นหรือสงสัยว่ามีการฝ่าฝืนจรรยาบรรณนี้ ขอให้แจ้งผู้บริหารหรือที่ info@haliviq.com การแจ้งโดยสุจริตจะถูกเก็บเป็นความลับ และห้ามตอบโต้ผู้ที่แจ้ง' },
    { title: '10. การฝ่าฝืน', body: 'การฝ่าฝืนจรรยาบรรณนี้อาจถูกลงโทษทางวินัย รวมถึงเลิกจ้างหรือยกเลิกสัญญา และหากจำเป็นจะส่งเรื่องให้หน่วยงานที่เกี่ยวข้อง' },
  ]
  return <LegalPage lang={lang} title={isEN ? 'Code of Conduct' : 'จรรยาบรรณธุรกิจ'} sections={sections} />
}
