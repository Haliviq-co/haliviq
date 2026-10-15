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
    ? "User Research Agency in Bangkok | Haliviq"
    : "รับทำ User Research กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq runs user research in Bangkok and across Thailand: interviews, usability tests and surveys in Thai or English, with findings your team can act on."
    : "Haliviq รับทำ User Research ทั้งสัมภาษณ์ผู้ใช้ ทดสอบการใช้งาน และแบบสอบถาม เป็นภาษาไทยหรืออังกฤษ สรุปผลให้ทีมของคุณเอาไปตัดสินใจต่อได้ทันที"
  const url = `https://www.haliviq.com/${params.lang}/services/user-research`
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
  const badge    = isEN ? 'Strategy / User Research'  : 'กลยุทธ์ / User Research'
  const title    = isEN ? 'Understand Your Users'  : 'เข้าใจผู้ใช้'
  const subtitle = isEN ? 'At a Deep Level'    : 'อย่างลึกซึ้ง'
  const heroDesc = isEN ? 'The best products are built by teams who deeply understand the people they serve. Haliviq runs user research in Bangkok and across Thailand, from five-person interview rounds to larger surveys, and turns what people say and do into findings your team can act on. The aim is simple: replace assumptions with evidence, and opinions in the meeting room with what customers actually told us.'  : 'ผลิตภัณฑ์ที่ดีที่สุดมาจากทีมที่เข้าใจคนที่ตัวเองให้บริการอย่างลึกซึ้ง Haliviq ทำ User Research ที่กรุงเทพฯ และทั่วประเทศ ตั้งแต่สัมภาษณ์รอบละ 5 คนไปจนถึงแบบสำรวจขนาดใหญ่ แล้วแปลงสิ่งที่ผู้ใช้พูดและทำจริงเป็นข้อค้นพบที่ทีมของคุณนำไปลงมือได้ เป้าหมายง่ายๆ คือใช้หลักฐานแทนการเดา และใช้สิ่งที่ลูกค้าบอกจริงแทนความเห็นในห้องประชุม'
  const whyTitle = isEN ? 'Why assumptions are the most expensive thing in product'    : 'ทำไมการเดาถึงแพงที่สุดในการทำผลิตภัณฑ์'
  const whyDesc  = isEN ? 'Every product decision made without user evidence is a bet. Some bets pay off. Most do not. Organisations that win consistently make evidence a prerequisite for investment. Research does not need to be big to help: a handful of well-run conversations often settles arguments that have lasted months inside a team.'  : 'ทุกการตัดสินใจที่ไม่มีหลักฐานจากผู้ใช้คือการเดิมพัน บางครั้งก็ได้ผล แต่ส่วนใหญ่ไม่ องค์กรที่ชนะสม่ำเสมอคือองค์กรที่ถือว่าต้องมีหลักฐานก่อนลงทุน การวิจัยไม่จำเป็นต้องใหญ่ก็ช่วยได้ บางครั้งแค่คุยกับผู้ใช้ไม่กี่คนให้เป็นระบบ ก็ยุติข้อถกเถียงที่ค้างอยู่ในทีมมาหลายเดือนได้'
  const ctaTitle = isEN ? 'Ready to truly understand your users?'    : 'พร้อมเข้าใจผู้ใช้อย่างแท้จริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Research Planning session. Tell us the decisions you are stuck on, and we will propose the smallest study that can answer them, with a timeline and the number of participants.'   : 'เริ่มด้วยการคุยวางแผนวิจัยฟรี เล่าให้ฟังว่าตอนนี้ติดตัดสินใจเรื่องอะไร เราจะเสนอการศึกษาที่เล็กที่สุดที่ตอบคำถามนั้นได้ พร้อมไทม์ไลน์และจำนวนผู้เข้าร่วม'
  const heroBullets = isEN ? [
      'Research planning, recruitment and moderation',
      'Interviews, surveys, diary studies and contextual inquiry',
      'Usability testing: moderated, unmoderated and remote',
      'Synthesis, affinity mapping and insight generation',
      'Personas, journey maps and opportunity frameworks',
      'Research run in Thai or English, with notes and clips your team can reuse',
    ] : [
      'วางแผนวิจัย หาผู้เข้าร่วม และดำเนินการสัมภาษณ์',
      'สัมภาษณ์ แบบสำรวจ บันทึกประจำวันของผู้ใช้ และสังเกตการใช้งานในสถานที่จริง',
      'ทดสอบการใช้งาน ทั้งแบบมีผู้ดำเนินการ ไม่มีผู้ดำเนินการ และทางไกล',
      'สรุปผล จัดกลุ่มข้อมูลแบบ Affinity Mapping และสกัดข้อค้นพบ',
      'Persona, Journey Map และกรอบโอกาส',
      'ทำวิจัยเป็นภาษาไทยหรืออังกฤษ พร้อมโน้ตและคลิปที่ทีมนำกลับไปใช้ต่อได้',
    ]
  const whyPoints   = isEN ? [
      'Products built with user research have 2x the success rate of those built on assumptions.',
      'Early-stage research costs less than 1% of total budget but prevents the most expensive mistakes.',
      'Qualitative interviews reveal the WHY behind behaviour, which quantitative data and analytics cannot explain.',
      'Journey mapping exposes friction points invisible to internal stakeholders who are too close to the product.',
      'Continuous discovery keeps teams aligned with user needs that keep changing.',
      'Recorded sessions give designers, engineers and executives the same first-hand evidence, which is far harder to argue with than a summary.',
    ] : [
      'ผลิตภัณฑ์ที่สร้างจาก User Research มีอัตราสำเร็จเป็น 2 เท่าของผลิตภัณฑ์ที่สร้างจากการเดา',
      'การวิจัยตั้งแต่ต้นใช้งบน้อยกว่า 1% แต่ป้องกันความผิดพลาดที่แพงที่สุดได้',
      'การสัมภาษณ์เชิงคุณภาพเผย "ทำไม" ของพฤติกรรม ซึ่งตัวเลขและ analytics อธิบายไม่ได้',
      'Journey Map เผยจุดติดขัดที่คนในองค์กรมองไม่เห็น เพราะใกล้ชิดผลิตภัณฑ์เกินไป',
      'การทำ Discovery ต่อเนื่องช่วยให้ทีมตามความต้องการของผู้ใช้ที่เปลี่ยนไปเรื่อยๆ ได้ทัน',
      'คลิปบันทึกการทดสอบทำให้ดีไซเนอร์ วิศวกร และผู้บริหารเห็นหลักฐานชิ้นเดียวกันกับตา ซึ่งเถียงยากกว่าบทสรุปมาก',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Product Success Rate', desc: 'Research-led vs assumption-led'},
      {stat: '<1%', label: 'Of Total Budget', desc: 'Prevents the biggest mistakes'},
      {stat: '5', label: 'Interviews to Find Core Insights', desc: 'Efficient qualitative research'},
      {stat: '100%', label: 'Evidence-Based Decisions', desc: 'After a research programme'}
    ] : [
      {stat: '2x', label: 'โอกาสผลิตภัณฑ์สำเร็จ', desc: 'ทำวิจัยก่อน เทียบกับสร้างจากการเดา'},
      {stat: '<1%', label: 'ของงบทั้งหมด', desc: 'ป้องกันความผิดพลาดที่แพงที่สุด'},
      {stat: '5', label: 'สัมภาษณ์เพื่อหาข้อค้นพบหลัก', desc: 'วิจัยเชิงคุณภาพที่คุ้มค่า'},
      {stat: '100%', label: 'ตัดสินใจโดยมีหลักฐาน', desc: 'หลังมีโปรแกรมวิจัย'}
    ]
  const features    = isEN ? [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'One-to-one conversations of 45 to 60 minutes with real users, built around open questions about their goals, frustrations, context and how they think about the problem. Interviews are held in Thai or English, by video or in person. You get transcripts, key quotes and the patterns across participants.'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'A short, well-written survey sent to a larger group, used to check hypotheses from interviews and to measure how common a problem really is. We handle question wording, sampling, analysis and a plain-language summary of what the numbers do and do not prove.'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'We watch people use your website, app or prototype while they think aloud, and note where they hesitate, misread or give up. It works at any stage, from a Figma prototype to a live product. You receive a ranked list of usability issues with clips attached.'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'Participants record their own experiences over days or weeks, through short entries, photos or voice notes, as things happen in real life. This shows habits and moments that people forget or leave out when they are asked in an interview afterwards.'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'We go to where the work or the shopping happens, such as a shop floor, a clinic, an office or a home, and watch people do what they normally do. You see the workarounds, interruptions and sticky notes that never come up in a meeting room.'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'We turn raw notes and recordings into insights using affinity mapping and thematic analysis, then draw personas and journey maps that show where the experience breaks. The result is a set of opportunities your team can prioritise, not a long transcript.'}
    ] : [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'พูดคุยตัวต่อตัวครั้งละ 45-60 นาทีกับผู้ใช้จริง ด้วยคำถามปลายเปิดเรื่องเป้าหมาย ความหงุดหงิด บริบท และวิธีคิดต่อปัญหา สัมภาษณ์เป็นภาษาไทยหรืออังกฤษ ผ่านวิดีโอหรือพบตัวก็ได้ คุณจะได้ถอดเทป คำพูดสำคัญ และรูปแบบที่พบซ้ำในผู้ร่วมวิจัย'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'แบบสำรวจสั้นๆ ที่เขียนคำถามดี ส่งให้คนกลุ่มใหญ่ ใช้ตรวจสมมติฐานจากการสัมภาษณ์ และวัดว่าปัญหานั้นเกิดบ่อยแค่ไหนจริงๆ เราดูแลตั้งแต่เขียนคำถาม เลือกกลุ่มตัวอย่าง วิเคราะห์ผล และสรุปเป็นภาษาง่ายๆ ว่าตัวเลขบอกอะไรได้ และบอกอะไรไม่ได้'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'เรานั่งดูคนใช้เว็บไซต์ แอป หรือต้นแบบของคุณ ขณะที่เขาพูดความคิดออกมา แล้วจดว่าตรงไหนที่เขาลังเล อ่านผิด หรือถอดใจ ทำได้ทุกช่วง ตั้งแต่ต้นแบบใน Figma ไปจนถึงผลิตภัณฑ์ที่เปิดใช้แล้ว คุณจะได้รายการปัญหาการใช้งานเรียงตามลำดับ พร้อมคลิปประกอบ'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'ผู้ร่วมวิจัยบันทึกประสบการณ์ของตัวเองตลอดหลายวันหรือหลายสัปดาห์ ผ่านข้อความสั้นๆ รูปถ่าย หรือเสียง ตามที่เกิดขึ้นในชีวิตจริง วิธีนี้เผยพฤติกรรมและช่วงเวลาที่คนลืมหรือไม่เล่า เมื่อถูกถามในการสัมภาษณ์ทีหลัง'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'เราไปยังสถานที่ที่งานหรือการซื้อเกิดขึ้นจริง เช่น หน้าร้าน คลินิก ออฟฟิศ หรือที่บ้าน แล้วดูคนทำสิ่งที่เขาทำเป็นปกติ คุณจะเห็นวิธีแก้ขัด สิ่งที่มารบกวน และกระดาษโน้ตที่แปะอยู่ ซึ่งไม่เคยมีใครเล่าในห้องประชุม'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'เราเปลี่ยนโน้ตและคลิปดิบเป็นข้อค้นพบด้วย Affinity Mapping และการวิเคราะห์ตามธีม จากนั้นวาด Persona และ Journey Map ให้เห็นว่าประสบการณ์สะดุดตรงไหน ผลลัพธ์คือโอกาสที่ทีมจัดลำดับความสำคัญได้ ไม่ใช่ถอดเทปยาวเหยียด'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Research Planning', desc: 'We start from the decisions you need to make, turn them into research questions, choose the lightest method that can answer them, and plan timing, participant numbers and what you will receive at the end.'},
      {no: '02', title: 'Participant Recruitment', desc: 'We write a screener so only people who match your target user get in, then recruit and schedule them. Incentives and consent forms are handled as part of the plan, and participants are told how their data will be used.'},
      {no: '03', title: 'Data Collection', desc: 'We run the sessions with the method we chose, record them with permission, and take structured notes. Your team can sit in as observers and drop questions into a shared note.'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'We go through the notes and recordings, group them into patterns, test the patterns against the data, and write them up as insights with the evidence beside each one.'},
      {no: '05', title: 'Share & Action', desc: 'We present the findings to your team, make recommendations, and prioritise the next steps with you, so the research leads to decisions rather than a report that sits in a folder.'}
    ] : [
      {no: '01', title: 'Research Planning', desc: 'เราเริ่มจากการตัดสินใจที่คุณต้องทำ แปลงเป็นคำถามวิจัย เลือกวิธีที่เบาที่สุดที่ตอบได้ แล้ววางแผนเวลา จำนวนผู้เข้าร่วม และสิ่งที่คุณจะได้รับเมื่อจบ'},
      {no: '02', title: 'Participant Recruitment', desc: 'เราเขียนแบบคัดกรองให้ได้เฉพาะคนที่ตรงกลุ่มเป้าหมายของคุณ แล้วหาและนัดหมาย ค่าตอบแทนและใบยินยอมอยู่ในแผนด้วย และผู้เข้าร่วมจะรู้ว่าข้อมูลของเขาถูกนำไปใช้อย่างไร'},
      {no: '03', title: 'Data Collection', desc: 'เราดำเนินการตามวิธีที่เลือก บันทึกการสัมภาษณ์เมื่อได้รับอนุญาต และจดโน้ตอย่างเป็นระบบ ทีมของคุณเข้ามานั่งสังเกตได้ และใส่คำถามลงในโน้ตกลางระหว่างนั้น'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'เราไล่ดูโน้ตและคลิปทั้งหมด จัดกลุ่มเป็นรูปแบบ ตรวจรูปแบบเทียบกับข้อมูล แล้วเขียนเป็นข้อค้นพบ โดยมีหลักฐานแนบอยู่ข้างๆ ทุกข้อ'},
      {no: '05', title: 'Share & Action', desc: 'เรานำเสนอข้อค้นพบต่อทีม ให้คำแนะนำ และช่วยจัดลำดับขั้นตอนถัดไปร่วมกับคุณ เพื่อให้งานวิจัยนำไปสู่การตัดสินใจ ไม่ใช่รายงานที่นอนอยู่ในโฟลเดอร์'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Research Reveals Pain Point Cutting Conversion 40%', desc: 'Five user interviews uncovered friction in the verification flow that the team had never noticed.', result: 'Conversion up 40% after fix'},
      {tag: 'Healthcare · Bangkok', title: 'Diary Study Reveals Hidden Workarounds', desc: 'Users were using WhatsApp instead of the hospital app because it was faster. That insight led to an app redesign.', result: 'App Usage up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'Usability Test Cuts Cart Abandonment 45%', desc: 'Testing with 8 users revealed 3 points of confusion in checkout that could be fixed right away.', result: 'Cart Abandonment down 45%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'งานวิจัยเผยปัญหาที่ทำให้ Conversion ตก 40%', desc: 'สัมภาษณ์ผู้ใช้ 5 คน พบจุดติดขัดในขั้นตอนยืนยันตัวตนที่ทีมไม่เคยรู้มาก่อน', result: 'Conversion เพิ่ม 40% หลังแก้ไข'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'บันทึกประจำวันของผู้ใช้เผยวิธีแก้ขัดที่ซ่อนอยู่', desc: 'ผู้ใช้ใช้ WhatsApp แทนแอปของโรงพยาบาล เพราะเร็วกว่า ข้อค้นพบนี้นำไปสู่การออกแบบแอปใหม่', result: 'การใช้แอปเพิ่ม 3 เท่า'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ทดสอบการใช้งานลดการทิ้งตะกร้า 45%', desc: 'ทดสอบกับผู้ใช้ 8 คน พบจุดสับสนในหน้า Checkout 3 จุดที่แก้ได้ทันที', result: 'ทิ้งตะกร้าลด 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'How many users do we need?', a: 'It depends on the method. Qualitative interviews need 5-8 participants before the answers start repeating. Usability tests need 5 to find about 85% of issues. Surveys need hundreds or more, because you are measuring how common something is.'},
      {q: 'How long does research take?', a: 'Lean research such as 5 interviews takes 2-3 weeks. A full programme including synthesis may take 6-8 weeks. Recruitment is usually the part that sets the pace, so the earlier we start finding participants the better.'},
      {q: 'How do you recruit users?', a: 'We recruit through our panel, your customer database, or social recruitment, based on screening criteria we agree with you. If you have hard-to-reach users, such as doctors or shop owners, tell us early so we can plan for it.'},
      {q: 'What are the deliverables?', a: 'A research report with key insights, personas, journey maps, opportunity areas and prioritised recommendations. If you want them, you also get edited clips and the raw notes, so your team can go back to the evidence.'},
      {q: 'Can you run research in Thai?', a: 'Yes. Sessions can be held in Thai or English, and we write the findings in whichever language your team works in. Running interviews in the participant’s own language gets noticeably richer answers.'},
      {q: 'How is research different from analytics?', a: 'Analytics tells you what people did: where they dropped off, what they clicked. Research tells you why. The two work best together, so we often start from your analytics to decide who to talk to and what to ask.'},
      {q: 'What if we only have a small budget?', a: 'Then we pick a smaller study that answers your most important question. Five well-chosen interviews or one round of usability tests can already change a decision. We will tell you honestly if a question needs a bigger sample than you can afford.'}
    ] : [
      {q: 'ต้องใช้ผู้ใช้กี่คน?', a: 'ขึ้นกับวิธี สัมภาษณ์เชิงคุณภาพใช้ 5-8 คนจนคำตอบเริ่มซ้ำ ส่วนทดสอบการใช้งานใช้ 5 คนก็พบปัญหาประมาณ 85% แบบสำรวจต้องใช้หลักร้อยขึ้นไป เพราะเป็นการวัดว่าเรื่องนั้นเกิดบ่อยแค่ไหน'},
      {q: 'วิจัยใช้เวลานานแค่ไหน?', a: 'วิจัยแบบกระชับ เช่น สัมภาษณ์ 5 คน ใช้ 2-3 สัปดาห์ โปรแกรมวิจัยเต็มรูปแบบรวมการสรุปผลอาจใช้ 6-8 สัปดาห์ ส่วนที่กำหนดจังหวะมักเป็นการหาผู้เข้าร่วม ยิ่งเริ่มหาเร็วยิ่งดี'},
      {q: 'หาผู้ใช้มาร่วมวิจัยอย่างไร?', a: 'เราช่วยหาผ่านกลุ่มผู้ร่วมวิจัยของเรา ฐานข้อมูลลูกค้าของคุณ หรือโซเชียล ตามเกณฑ์คัดกรองที่ตกลงกัน ถ้าผู้ใช้ของคุณหาตัวยาก เช่น แพทย์หรือเจ้าของร้าน บอกเราแต่เนิ่นๆ จะได้วางแผนล่วงหน้า'},
      {q: 'จบงานแล้วได้อะไรบ้าง?', a: 'รายงานวิจัยพร้อมข้อค้นพบหลัก Persona, Journey Map, โอกาสที่พบ และข้อเสนอแนะที่จัดลำดับความสำคัญแล้ว ถ้าต้องการ เรายังส่งคลิปที่ตัดต่อแล้วและโน้ตดิบให้ด้วย ทีมของคุณจะกลับไปดูหลักฐานเองได้'},
      {q: 'ทำวิจัยเป็นภาษาไทยได้ไหม?', a: 'ได้ การสัมภาษณ์ทำเป็นภาษาไทยหรืออังกฤษได้ และเราเขียนผลเป็นภาษาที่ทีมของคุณใช้ทำงาน การสัมภาษณ์ด้วยภาษาของผู้ร่วมวิจัยเองทำให้ได้คำตอบที่ลึกกว่าชัดเจน'},
      {q: 'User Research ต่างจาก Analytics อย่างไร?', a: 'Analytics บอกว่าคนทำอะไร เช่น หลุดออกตรงไหน กดอะไร ส่วน Research บอกว่าทำไม สองอย่างนี้ใช้คู่กันดีที่สุด เราจึงมักเริ่มจาก analytics ของคุณเพื่อเลือกว่าจะคุยกับใคร และถามอะไร'},
      {q: 'ถ้ามีงบน้อยทำได้ไหม?', a: 'ได้ เราจะเลือกการศึกษาที่เล็กลงให้ตอบคำถามที่สำคัญที่สุดของคุณ สัมภาษณ์ 5 คนที่เลือกมาดี หรือทดสอบการใช้งานหนึ่งรอบ ก็เปลี่ยนการตัดสินใจได้แล้ว และถ้าคำถามไหนต้องใช้กลุ่มตัวอย่างใหญ่กว่างบที่มี เราจะบอกตรงๆ'}
    ]
  const related     = isEN ? [
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'}
    ] : [
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'}
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
      heroImg="/images/services/user-research/hero.jpg"
      whyImg="/images/services/user-research/why1.jpg"
      whyImg2="/images/services/user-research/why2.jpg"
      featureImg="/images/services/user-research/feature.jpg"
      processImg="/images/services/user-research/process.jpg"
    />
  )
}
