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
    ? "Product Discovery Agency in Bangkok | Haliviq"
    : "รับทำ Product Discovery กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq runs product discovery in Bangkok: problem framing, user interviews, concept tests, MVP scope and a business case, so you decide before you build."
    : "Haliviq ช่วยทำ Product Discovery ที่กรุงเทพฯ ตั้งแต่กำหนดโจทย์ สัมภาษณ์ผู้ใช้ ทดสอบแนวคิด ไปจนถึงขอบเขต MVP และแผนธุรกิจ ให้คุณตัดสินใจก่อนลงทุนสร้าง"
  const url = `https://www.haliviq.com/${params.lang}/services/product-discovery`
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
  const badge    = isEN ? 'Strategy / Product Discovery'  : 'กลยุทธ์ / Product Discovery'
  const title    = isEN ? 'Find the Right Answer'  : 'หาคำตอบที่ถูกต้อง'
  const subtitle = isEN ? 'Before You Invest in Building'    : 'ก่อนลงทุนสร้าง'
  const heroDesc = isEN ? 'Most expensive product mistakes are made in the first month, when a team decides what to build without checking whether anyone needs it. Haliviq runs product discovery for Bangkok and Thai startups, SMEs and larger companies, so the decision to build rests on evidence. In two to six weeks we frame the problem, talk to real users, test rough concepts and hand you a clear MVP scope, a roadmap and a business case your team and your investors can read.'  : 'ความผิดพลาดที่แพงที่สุดของผลิตภัณฑ์มักเกิดตั้งแต่เดือนแรก ตอนที่ทีมตัดสินใจว่าจะสร้างอะไร โดยยังไม่ได้เช็กว่ามีคนต้องการจริงไหม Haliviq ทำ Product Discovery ให้สตาร์ทอัพ SME และบริษัทขนาดใหญ่ในไทย เพื่อให้การตัดสินใจสร้างมีข้อมูลรองรับ ภายใน 2-6 สัปดาห์ เราช่วยกำหนดโจทย์ให้ชัด คุยกับผู้ใช้จริง ทดสอบแนวคิดแบบหยาบๆ แล้วส่งมอบขอบเขต MVP โรดแมป และแผนธุรกิจที่ทั้งทีมและนักลงทุนอ่านเข้าใจ'
  const whyTitle = isEN ? 'Why building without discovery is gambling'    : 'ทำไมสร้างก่อนทำ Discovery ถึงเหมือนเสี่ยงโชค'
  const whyDesc  = isEN ? 'The number-one reason products fail is not technical failure. It is building something nobody wants. Discovery is the short, cheap stage where you find out what people actually need, which parts of your idea are guesses, and what the smallest useful version looks like. The money and the engineering time only start after that. For a team in Thailand, it also means checking local habits early, such as how customers pay, which channels they already use, and how they expect to be served in Thai.'  : 'สาเหตุอันดับหนึ่งที่ผลิตภัณฑ์ล้มเหลวไม่ใช่เรื่องเทคนิค แต่คือการสร้างสิ่งที่ไม่มีใครต้องการ Discovery คือช่วงสั้นๆ ที่ใช้เงินน้อย ไว้หาว่าคนต้องการอะไรจริงๆ ส่วนไหนของไอเดียยังเป็นแค่การเดา และเวอร์ชันเล็กที่สุดที่ยังใช้ประโยชน์ได้หน้าตาเป็นอย่างไร ค่าใช้จ่ายก้อนใหญ่และเวลาของทีมพัฒนาค่อยเริ่มหลังจากนั้น ถ้าทำธุรกิจในไทย เรายังช่วยเช็กพฤติกรรมคนไทยตั้งแต่ต้นด้วย เช่น ลูกค้าจ่ายเงินยังไง ใช้ช่องทางไหนอยู่แล้ว และอยากให้ดูแลเป็นภาษาไทยแบบไหน'
  const ctaTitle = isEN ? 'Ready to discover before you build?'    : 'พร้อมทำ Discovery ก่อนสร้างหรือยัง?'
  const ctaDesc  = isEN ? 'Book a free Discovery Sprint scoping call. Tell us what you are thinking of building, and we will suggest the right length and depth of discovery for your stage and budget.'   : 'จองคุยเรื่องขอบเขต Discovery Sprint ได้ฟรี เล่าให้เราฟังว่าอยากสร้างอะไร เราจะช่วยดูว่าควรทำนานแค่ไหน ลึกแค่ไหน ให้เหมาะกับช่วงธุรกิจและงบของคุณ'
  const heroBullets = isEN ? [
      'Problem framing and opportunity sizing, written down in plain language',
      'Competitive landscape and market positioning, including Thai and regional players',
      'User interviews and Jobs-To-Be-Done research with your real target customers',
      'Solution ideation, prioritisation and feasibility checks with our engineers in the room',
      'Business case, MVP definition and go-to-market planning',
      'A clear decision at the end: build, change direction, or stop',
    ] : [
      'กำหนดโจทย์ปัญหาและประเมินขนาดโอกาส เขียนออกมาเป็นภาษาที่ทุกคนอ่านเข้าใจ',
      'ดูภาพรวมคู่แข่งและวางตำแหน่งในตลาด ทั้งเจ้าตลาดในไทยและในภูมิภาค',
      'สัมภาษณ์ผู้ใช้และวิจัยแบบ Jobs-To-Be-Done กับกลุ่มลูกค้าเป้าหมายตัวจริง',
      'คิดแนวทางแก้ปัญหา จัดลำดับความสำคัญ และประเมินความเป็นไปได้ โดยมีวิศวกรของเรานั่งร่วมด้วย',
      'วางแผนธุรกิจ กำหนด MVP และวางแผนเข้าสู่ตลาด',
      'จบด้วยการตัดสินใจที่ชัดเจนว่าจะสร้างต่อ เปลี่ยนทิศทาง หรือหยุด',
    ]
  const whyPoints   = isEN ? [
      '42% of startups fail because there is no market need. Discovery surfaces this before you build, when changing course still costs very little.',
      'A clearly defined problem statement keeps the whole team pointed at the same target and stops scope creep during development.',
      'Jobs-To-Be-Done research shows the functional, social and emotional needs behind the features customers ask for, which are often different from the features themselves.',
      'Prioritisation frameworks like RICE, ICE or Kano put the highest-value features first, so the first release carries the parts that matter.',
      'A well-run discovery process typically cuts MVP scope by 40% while improving the chance the product lands.',
      'The written outputs become a shared reference for designers, engineers, sales and investors, so nobody has to re-explain the idea later.',
    ] : [
      'Startup 42% ล้มเหลวเพราะไม่มีความต้องการในตลาด Discovery ช่วยให้เห็นความจริงข้อนี้ก่อนลงมือสร้าง ตอนที่เปลี่ยนทางยังแทบไม่เสียอะไร',
      'โจทย์ปัญหาที่ชัดทำให้ทั้งทีมมองเป้าหมายเดียวกัน และกันไม่ให้ขอบเขตงานบานปลายระหว่างพัฒนา',
      'วิจัยแบบ Jobs-To-Be-Done ทำให้เห็นว่าเบื้องหลังฟีเจอร์ที่ลูกค้าขอ มีความต้องการด้านการใช้งาน ด้านสังคม และด้านความรู้สึกอะไรอยู่ ซึ่งมักไม่ตรงกับฟีเจอร์ที่เขาพูดถึงเลย',
      'กรอบจัดลำดับความสำคัญอย่าง RICE, ICE หรือ Kano ช่วยให้ฟีเจอร์ที่มีคุณค่าสูงสุดได้สร้างก่อน เวอร์ชันแรกเลยมีแต่ส่วนที่สำคัญจริง',
      'Discovery ที่ทำดีมักลดขอบเขต MVP ลงได้ 40% และเพิ่มโอกาสที่ผลิตภัณฑ์จะไปได้',
      'เอกสารที่ส่งมอบกลายเป็นข้อมูลอ้างอิงกลางของดีไซเนอร์ วิศวกร ทีมขาย และนักลงทุน ไม่ต้องมานั่งอธิบายไอเดียซ้ำทีหลัง',
    ]
  const outcomes    = isEN ? [
      {stat: '40%', label: 'Smaller MVP Scope', desc: 'With clear discovery output'},
      {stat: '2x', label: 'Launch Success Rate', desc: 'Discovery-led vs assumption-led'},
      {stat: '3 weeks', label: 'Discovery Sprint', desc: 'From brief to validated concept'},
      {stat: '100%', label: 'Stakeholder Alignment', desc: 'Before development begins'}
    ] : [
      {stat: '40%', label: 'ลดขอบเขต MVP', desc: 'เมื่อมีผล Discovery ที่ชัดเจน'},
      {stat: '2x', label: 'โอกาสเปิดตัวสำเร็จ', desc: 'ทำ Discovery ก่อน เทียบกับสร้างจากการเดา'},
      {stat: '3 สัปดาห์', label: 'Discovery Sprint', desc: 'จากบรีฟไปถึงแนวคิดที่ผ่านการทดสอบ'},
      {stat: '100%', label: 'ทุกฝ่ายเห็นตรงกัน', desc: 'ก่อนเริ่มพัฒนา'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'We sit down with founders, product owners and the people who talk to customers every day, then write one problem statement everyone signs off on. We scope the opportunity and size the addressable market so you know how big the prize is. It suits teams that have many ideas and no agreed starting point.'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'We map the competitors your customers actually compare you with, local and regional, and note what each does well and where it falls short. The result is a clear view of the white space and a positioning you can defend. You get a short report and a one-page map, not a 60-slide deck.'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'We interview people in your target group using the Jobs-To-Be-Done approach: what they are trying to get done, what they use today, and what makes them switch. Interviews run in Thai or English as needed. You get quotes, patterns and a ranked list of the jobs worth solving.'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'We turn the findings into several different solution concepts, sketch them quickly, and put them in front of real users. Their reactions decide which direction survives. It is a cheap way to kill weak ideas before anyone writes code.'},
      {icon: 'ti-list-check', title: 'Prioritisation & Roadmap', desc: 'We score features and initiatives with RICE, ICE or Kano, discuss the scores with your team, and agree what goes into the MVP and what waits. You leave with a phased roadmap and a short list of things you are deliberately not building yet.'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'We pull the evidence into a business case with a simple financial model and a go-to-market plan: who you sell to first, through which channels, at what price points to test. It is written so you can use it with your board, your investors or your finance team.'}
    ] : [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'เรานั่งคุยกับผู้ก่อตั้ง เจ้าของผลิตภัณฑ์ และคนที่คุยกับลูกค้าทุกวัน แล้วสรุปเป็นโจทย์ปัญหาข้อเดียวที่ทุกคนเห็นด้วย จากนั้นประเมินโอกาสและขนาดตลาดให้เห็นว่าก้อนนี้ใหญ่แค่ไหน เหมาะกับทีมที่มีไอเดียเต็มไปหมดแต่ยังไม่มีจุดเริ่มต้นที่ตกลงกันได้'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'เราไล่ดูคู่แข่งที่ลูกค้าใช้เทียบกับคุณจริงๆ ทั้งในไทยและต่างประเทศ ว่าแต่ละเจ้าเก่งตรงไหน พลาดตรงไหน แล้วสรุปให้เห็นช่องว่างในตลาดและตำแหน่งที่คุณยืนได้อย่างมั่นใจ ที่ส่งมอบเป็นรายงานสั้นๆ กับแผนที่หน้าเดียว ไม่ใช่สไลด์ 60 หน้า'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'เราสัมภาษณ์คนในกลุ่มเป้าหมายด้วยกรอบ Jobs-To-Be-Done คือถามว่าเขากำลังพยายามทำอะไรให้สำเร็จ ตอนนี้ใช้อะไรอยู่ และอะไรทำให้เขายอมเปลี่ยน จะสัมภาษณ์เป็นภาษาไทยหรืออังกฤษก็ได้ คุณจะได้คำพูดจริงของผู้ใช้ รูปแบบที่เจอซ้ำ และรายการงานที่คุ้มจะแก้เรียงตามลำดับ'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'เรานำข้อค้นพบมาคิดเป็นแนวทางแก้ปัญหาหลายแบบที่ต่างกัน ร่างอย่างเร็ว แล้วเอาไปให้ผู้ใช้จริงดู ปฏิกิริยาของเขาจะบอกว่าทางไหนไปต่อได้ เป็นวิธีที่ถูกมากในการตัดไอเดียที่ไม่ใช่ทิ้ง ก่อนจะมีใครเขียนโค้ดสักบรรทัด'},
      {icon: 'ti-list-check', title: 'Prioritization & Roadmap', desc: 'เราให้คะแนนฟีเจอร์และโครงการด้วย RICE, ICE หรือ Kano คุยผลกับทีมของคุณ แล้วตกลงกันว่าอะไรเข้า MVP และอะไรรอไปก่อน สุดท้ายคุณจะได้โรดแมปเป็นเฟส พร้อมรายการสิ่งที่ตั้งใจจะยังไม่ทำ'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'เรารวบรวมหลักฐานทั้งหมดเป็นแผนธุรกิจ พร้อมแบบจำลองการเงินง่ายๆ และแผนเข้าสู่ตลาด ว่าจะขายให้ใครก่อน ผ่านช่องทางไหน และควรลองราคาช่วงไหน เขียนให้เอาไปใช้คุยกับบอร์ด นักลงทุน หรือทีมการเงินได้เลย'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Kick-off & Framing', desc: 'We spend the first days with your team learning the business context: what you sell, who to, what has been tried, and what you already believe. Together we define what success looks like and agree the scope, the people to interview and the dates.'},
      {no: '02', title: 'Research & Learn', desc: 'We interview target users, review competitors and pull together whatever data you already hold, such as sales figures, support tickets and analytics. Your team is welcome to sit in on interviews.'},
      {no: '03', title: 'Synthesise & Ideate', desc: 'We cluster what we heard into clear insights, turn the biggest problems into How Might We questions, and run a workshop to produce several solution concepts.'},
      {no: '04', title: 'Validate & Decide', desc: 'We test the strongest concepts with users, ask our engineers to check feasibility and rough effort, and then help you choose one direction, with the reasons written down.'},
      {no: '05', title: 'Define & Plan', desc: 'We define the MVP scope, build the roadmap and write the business case. The final session walks stakeholders through the evidence so the decision is shared before any build budget is committed.'}
    ] : [
      {no: '01', title: 'Kick-off & Framing', desc: 'ช่วงแรกเราใช้เวลากับทีมของคุณเพื่อทำความเข้าใจธุรกิจ ขายอะไร ขายให้ใคร เคยลองอะไรมาแล้ว และตอนนี้เชื่อเรื่องอะไรอยู่ จากนั้นกำหนดร่วมกันว่าความสำเร็จหน้าตาเป็นอย่างไร ตกลงขอบเขต คนที่จะไปสัมภาษณ์ และกำหนดการ'},
      {no: '02', title: 'Research & Learn', desc: 'เราสัมภาษณ์ผู้ใช้กลุ่มเป้าหมาย ดูคู่แข่ง และรวบรวมข้อมูลที่คุณมีอยู่แล้ว เช่น ยอดขาย ticket จากฝ่ายซัพพอร์ต และข้อมูล analytics ทีมของคุณเข้ามานั่งฟังสัมภาษณ์ด้วยได้'},
      {no: '03', title: 'Synthesize & Ideate', desc: 'เรานำสิ่งที่ได้ยินมาจัดกลุ่มเป็นข้อค้นพบที่ชัดเจน แปลงปัญหาใหญ่เป็นคำถามแบบ How Might We แล้วจัดเวิร์กช็อปคิดแนวทางแก้ปัญหาออกมาหลายแบบ'},
      {no: '04', title: 'Validate & Decide', desc: 'เราเอาแนวคิดที่ดีที่สุดไปทดสอบกับผู้ใช้ ให้วิศวกรของเราช่วยประเมินความเป็นไปได้และแรงที่ต้องใช้คร่าวๆ แล้วช่วยคุณเลือกทิศทาง พร้อมจดเหตุผลไว้ให้'},
      {no: '05', title: 'Define & Plan', desc: 'เรากำหนดขอบเขต MVP ทำโรดแมป และเขียนแผนธุรกิจ ปิดท้ายด้วยการพาผู้เกี่ยวข้องดูหลักฐานทั้งหมด เพื่อให้ทุกฝ่ายตัดสินใจร่วมกันก่อนจะใช้งบพัฒนา'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'Discovery Changes Direction Before Wasting 12 Months', desc: 'A 3-week discovery showed that the core assumption behind the product was wrong. The team changed direction on paper, before any code existed.', result: '12 months of development saved'},
      {tag: 'Healthcare · Bangkok', title: 'MVP Scope Reduced 60% While Achieving Business Goals', desc: 'Discovery identified 3 core jobs users needed done. We built the MVP around those three and left everything else for later.', result: 'Launched 6 months earlier'},
      {tag: 'FinTech · Bangkok', title: 'Discovery Aligns 5 Stakeholders in 3 Weeks', desc: 'Structured workshops and decisions backed by evidence got five stakeholder groups committed to one direction.', result: '0 Scope Changes throughout the project'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'Discovery เปลี่ยนทิศทางก่อนเสียเวลา 12 เดือน', desc: 'Discovery 3 สัปดาห์ชี้ว่าสมมติฐานหลักของผลิตภัณฑ์ผิด ทีมจึงเปลี่ยนทางตั้งแต่ยังอยู่บนกระดาษ ก่อนจะมีโค้ดสักบรรทัด', result: 'ประหยัดเวลาพัฒนา 12 เดือน'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ลดขอบเขต MVP 60% แต่ยังได้ตามเป้าธุรกิจ', desc: 'Discovery ระบุงานหลักที่ผู้ใช้ต้องการ 3 ข้อ เราสร้าง MVP รอบ 3 ข้อนี้ ส่วนที่เหลือเก็บไว้ทำทีหลัง', result: 'เปิดตัวเร็วขึ้น 6 เดือน'},
      {tag: 'FinTech · กรุงเทพฯ', title: 'Discovery ทำให้ผู้เกี่ยวข้อง 5 ฝ่ายเห็นตรงกันใน 3 สัปดาห์', desc: 'เวิร์กช็อปที่มีขั้นตอนชัดและการตัดสินใจที่อิงหลักฐาน ทำให้ทั้ง 5 ฝ่ายเดินไปทางเดียวกัน', result: 'ไม่มีการเปลี่ยนขอบเขตตลอดโปรเจกต์'}
    ]
  const faqs        = isEN ? [
      {q: 'How long does product discovery take?', a: 'An initial discovery sprint takes 2-3 weeks. A fuller discovery with deeper research may take 4-6 weeks, depending on how big and how unclear the problem is. We agree the length with you in the scoping call, so you know the timeline before you commit.'},
      {q: 'Do we need an idea before starting discovery?', a: 'No. Discovery works best when it starts from a problem rather than a solution. If you already have an idea, discovery checks whether it is the right direction and, if it is, which version to build first.'},
      {q: 'What do we receive at the end of discovery?', a: 'A written problem statement, validated insights from user research, a chosen solution concept, an MVP scope, a roadmap, and a business case for stakeholders. You own all of it and can take it to any development team, including your own.'},
      {q: 'Is discovery necessary for every project?', a: 'It is recommended for high-investment projects, when the problem or the market is unclear, or when several stakeholders need to agree. For a small, well-understood change, a short scoping workshop is usually enough, and we will tell you if that is the case.'},
      {q: 'How is discovery different from user research or prototyping?', a: 'User research is one input to discovery. Discovery is wider: it also covers the market, the business case, prioritisation and the MVP decision. Prototyping is often used inside discovery to test concepts. If you only need one of these, we offer them as separate services.'},
      {q: 'Who from our side needs to be involved?', a: 'Ideally a decision maker, someone who knows the product or business day to day, and someone who talks to customers. We ask for a few workshop sessions and a weekly check-in. We recruit and schedule the interview participants, or work with the customers you introduce to us.'},
      {q: 'What happens if discovery shows the idea will not work?', a: 'Then discovery has done its job, because you found out for the cost of a few weeks rather than a full build. We will show you the evidence, suggest the options that look more promising, and you decide whether to adjust, pivot or stop.'}
    ] : [
      {q: 'Discovery ใช้เวลานานแค่ไหน?', a: 'Discovery Sprint เบื้องต้นใช้ 2-3 สัปดาห์ ส่วน Discovery เต็มรูปแบบที่วิจัยลึกอาจใช้ 4-6 สัปดาห์ ขึ้นกับว่าปัญหาใหญ่และยังไม่ชัดแค่ไหน เราจะตกลงระยะเวลากับคุณในรอบคุยขอบเขต คุณจะรู้ไทม์ไลน์ก่อนตัดสินใจ'},
      {q: 'ต้องมีไอเดียก่อนถึงจะทำ Discovery ได้ไหม?', a: 'ไม่จำเป็น Discovery ได้ผลดีที่สุดเมื่อเริ่มจากปัญหา ไม่ใช่เริ่มจากคำตอบ ถ้าคุณมีไอเดียอยู่แล้ว เราจะช่วยเช็กว่ามาถูกทางไหม และถ้าใช่ ควรสร้างเวอร์ชันไหนก่อน'},
      {q: 'จบ Discovery แล้วจะได้อะไรบ้าง?', a: 'คุณจะได้โจทย์ปัญหาที่เขียนไว้ชัดเจน ข้อค้นพบจากการวิจัยผู้ใช้ แนวคิดที่เลือกแล้ว ขอบเขต MVP โรดแมป และแผนธุรกิจสำหรับผู้เกี่ยวข้อง ทั้งหมดเป็นของคุณ เอาไปให้ทีมพัฒนาที่ไหนทำต่อก็ได้ รวมถึงทีมของคุณเอง'},
      {q: 'ทุกโปรเจกต์ต้องทำ Discovery ไหม?', a: 'เราแนะนำสำหรับโปรเจกต์ที่ลงทุนสูง ตอนที่ยังไม่แน่ใจเรื่องปัญหาหรือตลาด หรือต้องทำให้หลายฝ่ายเห็นตรงกัน ถ้าเป็นงานเล็กที่เข้าใจโจทย์ชัดแล้ว แค่เวิร์กช็อปกำหนดขอบเขตสั้นๆ ก็พอ และเราจะบอกตรงๆ ถ้าเป็นแบบนั้น'},
      {q: 'Discovery ต่างจาก User Research และการทำ Prototype ยังไง?', a: 'User Research เป็นส่วนหนึ่งของ Discovery ส่วน Discovery กว้างกว่า เพราะรวมเรื่องตลาด แผนธุรกิจ การจัดลำดับความสำคัญ และการตัดสินใจเรื่อง MVP ด้วย ส่วน Prototype มักใช้ในช่วง Discovery เพื่อทดสอบแนวคิด ถ้าคุณอยากได้แค่อย่างใดอย่างหนึ่ง เราก็แยกทำให้ได้'},
      {q: 'ฝั่งเราต้องมีใครเข้าร่วมบ้าง?', a: 'ควรมีผู้ตัดสินใจ คนที่รู้เรื่องผลิตภัณฑ์หรือธุรกิจในแต่ละวัน และคนที่คุยกับลูกค้า เราขอเวลาเข้าเวิร์กช็อปไม่กี่รอบ กับเช็กอินทุกสัปดาห์ ส่วนผู้ให้สัมภาษณ์ เราช่วยหาและนัดให้ หรือทำกับลูกค้าที่คุณแนะนำก็ได้'},
      {q: 'ถ้า Discovery บอกว่าไอเดียไม่เวิร์กจะเป็นยังไง?', a: 'ก็ถือว่า Discovery ทำหน้าที่แล้ว เพราะคุณรู้ด้วยค่าใช้จ่ายแค่ไม่กี่สัปดาห์ ไม่ต้องรอสร้างเสร็จก่อน เราจะแสดงหลักฐานให้ดู เสนอทางเลือกที่ดูมีโอกาสกว่า แล้วคุณค่อยตัดสินใจว่าจะปรับ เปลี่ยนทิศทาง หรือหยุด'}
    ]
  const related     = isEN ? [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'}
    ] : [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'}
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
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/product-discovery/hero.jpg"
      whyImg="/images/services/product-discovery/why1.jpg"
      whyImg2="/images/services/product-discovery/why2.jpg"
      featureImg="/images/services/product-discovery/feature.jpg"
      processImg="/images/services/product-discovery/process.jpg"
    />
  )
}
