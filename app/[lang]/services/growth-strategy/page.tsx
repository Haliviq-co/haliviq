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
    ? 'Growth Strategy Consulting for Thai Startups | Haliviq'
    : 'ที่ปรึกษา Growth Strategy สำหรับธุรกิจดิจิทัล | Haliviq'
  const description = isEN
    ? 'Growth strategy for SaaS, e-commerce and mobile apps in Thailand: funnel and cohort analysis, A/B testing, retention and channel strategy led by real data.'
    : 'Haliviq ช่วยวางกลยุทธ์การเติบโตให้ SaaS อีคอมเมิร์ซ และโมบายแอปในไทย ตั้งแต่ Funnel และ Cohort Analysis A/B Test ไปจนถึงรักษาลูกค้าและวางช่องทางด้วยข้อมูลจริง'
  const url = `https://www.haliviq.com/${params.lang}/services/growth-strategy`
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
  const badge    = isEN ? 'Strategy / Growth Strategy'  : 'กลยุทธ์ / Growth Strategy'
  const title    = isEN ? 'Grow Faster'  : 'เติบโตเร็วขึ้น'
  const subtitle = isEN ? 'With Real Data'    : 'ด้วยข้อมูลจริง'
  const heroDesc = isEN ? 'Spending more on ads is not a growth strategy. We start by reading your funnel, cohorts, and channels to find where users drop off and which customers actually stay and pay. From there we pick the two or three levers worth pulling, set up experiments to test them properly, and keep what works. The work suits SaaS, e-commerce, and mobile apps in Thailand and across Southeast Asia that already have users and want growth they can explain and repeat.'  : 'การเทเงินโฆษณาเพิ่มไม่ใช่กลยุทธ์การเติบโต เราเริ่มจากอ่าน Funnel, Cohort และช่องทางของคุณ ดูว่าผู้ใช้หลุดไปตรงไหน และลูกค้ากลุ่มไหนอยู่ต่อและจ่ายเงินจริง จากนั้นเลือกสองสามเรื่องที่คุ้มที่จะลงแรง ตั้งการทดลองเพื่อพิสูจน์อย่างมีหลักการ แล้วเก็บสิ่งที่ได้ผลไว้ เหมาะกับธุรกิจ SaaS อีคอมเมิร์ซ และโมบายแอปในไทยและเอเชียตะวันออกเฉียงใต้ ที่มีผู้ใช้อยู่แล้วและอยากเติบโตแบบที่อธิบายได้และทำซ้ำได้'
  const whyTitle = isEN ? 'Why most growth efforts plateau'    : 'ทำไมการเติบโตของหลายธุรกิจถึงตัน'
  const whyDesc  = isEN ? 'Growth usually stalls for one of three reasons. The team keeps buying new customers while existing ones quietly leave. Experiments run on too little traffic, so wins are noise and losses are never learned from. Or everyone watches vanity numbers such as followers, installs, and page views while revenue stays flat. Fixing any one of these tends to free up more growth than a bigger budget would.'  : 'การเติบโตมักตันด้วยหนึ่งในสามเหตุผล ทีมเอาแต่หาลูกค้าใหม่ ในขณะที่ลูกค้าเดิมค่อยๆ เดินจากไป หรือทดลองด้วย Traffic น้อยเกินไป ผลที่ชนะก็เป็นแค่สัญญาณรบกวน ส่วนผลที่แพ้ก็ไม่ได้เรียนรู้อะไร หรือทุกคนจ้องแต่ตัวเลขที่ดูดีอย่างยอดฟอลโลว์ ยอดติดตั้ง และยอดเข้าชม ในขณะที่รายได้ไม่ขยับ การแก้แค่ข้อใดข้อหนึ่งมักปลดล็อกการเติบโตได้มากกว่าการเพิ่มงบ'
  const ctaTitle = isEN ? 'Ready to grow with intention?'    : 'พร้อมเติบโตแบบมีเป้าหมายหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Growth Audit. Bring your analytics and a few numbers, and in one session we will point to the biggest leaks and the most promising levers.'   : 'เริ่มจาก Growth Audit ฟรี เอา Analytics และตัวเลขหลักๆ มาด้วย แล้วในการคุยครั้งเดียวเราจะชี้ให้เห็นว่าตรงไหนรั่วมากที่สุด และคันโยกไหนน่าลองที่สุด'
  const heroBullets = isEN ? [
      'Growth audit covering funnel analysis, cohort analysis, and benchmarking against similar products',
      'Channel strategy across organic search, paid, partnerships, LINE, and product-led growth',
      'Conversion rate optimisation and a structured A/B testing programme',
      'Retention work: onboarding, lifecycle messages, and win-back campaigns',
      'A North Star Metric and OKRs that every team can read and act on',
      'Growth team structure, tooling, and a weekly rhythm for experiments',
    ] : [
      'Growth Audit ครอบคลุม Funnel Analysis, Cohort Analysis และการเทียบ Benchmark กับผลิตภัณฑ์ใกล้เคียง',
      'วางกลยุทธ์ช่องทาง ทั้ง Organic Search, Paid, พาร์ตเนอร์, LINE และ Product-led Growth',
      'เพิ่ม Conversion Rate และวางโปรแกรม A/B Testing อย่างเป็นระบบ',
      'งานด้านรักษาลูกค้า ทั้ง Onboarding ข้อความตามช่วงชีวิตลูกค้า และแคมเปญดึงลูกค้ากลับมา',
      'ตั้ง North Star Metric และ OKR ที่ทุกทีมอ่านแล้วเอาไปทำต่อได้',
      'วางโครงสร้างทีม Growth เครื่องมือ และจังหวะการทำงานรายสัปดาห์สำหรับการทดลอง',
    ]
  const whyPoints   = isEN ? [
      'A 5% increase in retention has 25-95x the revenue impact of an equivalent acquisition investment, so the leaking bucket is usually the first place to look',
      'Companies with structured experimentation grow 2x faster than those without, because they learn from every test, not only the winners',
      'Product-led growth compounds organic growth without a linear increase in marketing spend',
      'Cohort analysis reveals which user segments deliver lifetime value, often a surprisingly small group worth serving first',
      'A shared North Star Metric keeps product, marketing, and sales pulling in the same direction',
    ] : [
      'Retention เพิ่ม 5% ส่งผลต่อรายได้ 25-95 เท่า เทียบกับการลงทุนหาลูกค้าใหม่ในปริมาณเท่ากัน ถังที่รั่วจึงมักเป็นที่แรกที่ควรดู',
      'บริษัทที่ทดลองอย่างเป็นระบบเติบโตเร็วกว่า 2 เท่า เพราะเรียนรู้จากทุกการทดสอบ ไม่ใช่แค่ตัวที่ชนะ',
      'Product-led Growth ทำให้ผู้ใช้เพิ่มขึ้นเองแบบทบต้น โดยไม่ต้องเพิ่มงบการตลาดเป็นเส้นตรง',
      'Cohort Analysis บอกว่ากลุ่มผู้ใช้ไหนสร้าง Lifetime Value ซึ่งมักเป็นกลุ่มเล็กที่ควรดูแลก่อน',
      'การตั้ง North Star Metric ร่วมกัน ทำให้ทีมผลิตภัณฑ์ การตลาด และฝ่ายขายไปในทิศทางเดียวกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Faster Growth Rate', desc: 'With structured experimentation'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: 'From a 5% retention improvement'},
      {stat: '30%', label: 'CAC Reduction', desc: 'With PLG and channel optimisation'},
      {stat: '3 months', label: 'To See Measurable Results', desc: 'From strategy to execution'}
    ] : [
      {stat: '2x', label: 'อัตราเติบโตเร็วขึ้น', desc: 'ด้วยการทดลองอย่างเป็นระบบ'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: 'จากการเพิ่ม Retention 5%'},
      {stat: '30%', label: 'ลด CAC', desc: 'ด้วย PLG และการปรับช่องทาง'},
      {stat: '3 เดือน', label: 'เห็นผลที่วัดได้', desc: 'จากกลยุทธ์ไปถึงการลงมือทำ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'We map every stage from first visit to paid, find the steps where most people drop, and test fixes with A/B experiments sized to your traffic. You get a ranked list of what to change, with expected impact and effort.'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'We group users by sign-up week and channel, then compare how long each group stays and how much it spends. This shows which channels bring people who last, so budget can follow quality instead of volume.'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'We build a channel mix that fits your stage and budget, covering search, content, social, partnerships, and paid media. For each channel we set a clear goal, a cost ceiling, and a point at which we stop or scale.'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'We design the product so users can find it, try it, reach value, and invite others without a salesperson in the loop. That covers free tiers, trials, onboarding, in-product upgrade prompts, and referral loops.'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'We plan the messages users receive after sign-up, after a purchase, and when they go quiet, across email, push, LINE, and in-app. Each message is triggered by behaviour, so people hear from you when it is useful to them.'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'We set up the way your team runs experiments: a backlog, hypothesis template, sample-size check, review rhythm, and shared log of results. Learning builds up, whether a test wins or loses.'}
    ] : [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'เราไล่ดูทุกขั้นตั้งแต่เข้าเว็บครั้งแรกจนถึงจ่ายเงิน หาขั้นที่คนหลุดมากที่สุด แล้วทดสอบวิธีแก้ด้วย A/B Test ที่ขนาดตัวอย่างพอดีกับ Traffic ของคุณ คุณจะได้รายการสิ่งที่ควรเปลี่ยนเรียงตามลำดับ พร้อมผลที่คาดว่าจะได้และแรงที่ต้องใช้'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'เราแบ่งผู้ใช้ตามสัปดาห์ที่สมัครและช่องทางที่เข้ามา แล้วเทียบว่าแต่ละกลุ่มอยู่ได้นานแค่ไหนและใช้จ่ายเท่าไหร่ ทำให้เห็นว่าช่องทางไหนพาคนที่อยู่ต่อมา งบจะได้ตามคุณภาพ ไม่ใช่ตามปริมาณ'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'เราวางสัดส่วนช่องทางให้เหมาะกับระยะของธุรกิจและงบประมาณ ทั้ง Search, Content, Social, พาร์ตเนอร์ และสื่อ Paid แต่ละช่องทางมีเป้าหมายชัดเจน เพดานต้นทุน และจุดที่ตัดสินใจว่าจะหยุดหรือขยาย'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'เราออกแบบผลิตภัณฑ์ให้ผู้ใช้หาพบ ลองใช้ ไปถึงจุดที่เห็นคุณค่า และชวนคนอื่นต่อได้ โดยไม่ต้องมีเซลส์คอยดูแล ครอบคลุมแพ็กเกจฟรี การทดลองใช้ Onboarding ข้อความชวนอัปเกรดในผลิตภัณฑ์ และระบบแนะนำเพื่อน'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'เราวางแผนข้อความที่ผู้ใช้ควรได้รับหลังสมัคร หลังซื้อ และเมื่อเงียบหายไป ผ่านอีเมล Push LINE และในแอป ทุกข้อความส่งตามพฤติกรรมจริง ผู้ใช้จึงได้ยินจากคุณในจังหวะที่มีประโยชน์กับเขา'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'เราจัดวิธีทำการทดลองของทีมคุณ ตั้งแต่ Backlog เทมเพลตสมมติฐาน การเช็กขนาดตัวอย่าง รอบรีวิว และบันทึกผลกลางที่ทุกคนเปิดดูได้ ความรู้จะสะสมต่อเนื่อง ไม่ว่าการทดสอบจะชนะหรือแพ้'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Growth Audit', desc: 'We go through your analytics, funnel, cohorts, and current channels, and talk to the people who run them. You get a short report on the biggest gaps and the opportunities with the best return for the effort.'},
      {no: '02', title: 'Strategy Design', desc: 'We define a growth model, choose a North Star Metric, and turn it into OKRs for each team. Everyone knows what number they are moving and why it matters to revenue.'},
      {no: '03', title: 'Experiment Roadmap', desc: 'We build a backlog of experiments, each with a hypothesis, expected impact, and how much evidence supports it. The list is ranked so the first tests are the ones most likely to pay off.'},
      {no: '04', title: 'Execute & Measure', desc: 'We run experiments in short cycles, check results with proper statistics, and write down what we learned, including from tests that fail. Results go to a shared dashboard your team can open at any time.'},
      {no: '05', title: 'Scale & Iterate', desc: 'We scale what worked, stop what did not, and revisit the model every quarter with fresh data. Where it helps, we hand the process to your in-house team.'}
    ] : [
      {no: '01', title: 'Growth Audit', desc: 'เราไล่ดู Analytics, Funnel, Cohort และช่องทางปัจจุบัน และคุยกับคนที่ดูแลแต่ละส่วน คุณจะได้รายงานสั้นๆ ว่าช่องว่างใหญ่ที่สุดคืออะไร และโอกาสไหนคุ้มแรงที่สุด'},
      {no: '02', title: 'Strategy Design', desc: 'เรากำหนดโมเดลการเติบโต เลือก North Star Metric แล้วแตกเป็น OKR ของแต่ละทีม ทุกคนรู้ว่าตัวเองกำลังขยับตัวเลขอะไร และมันเกี่ยวกับรายได้อย่างไร'},
      {no: '03', title: 'Experiment Roadmap', desc: 'เราสร้าง Backlog ของการทดลอง แต่ละอันมีสมมติฐาน ผลที่คาดว่าจะได้ และหลักฐานที่สนับสนุน เรียงลำดับให้การทดสอบชุดแรกเป็นตัวที่น่าจะให้ผลมากที่สุด'},
      {no: '04', title: 'Execute & Measure', desc: 'เราทดลองเป็นรอบสั้นๆ เช็กผลด้วยสถิติที่ถูกต้อง และจดสิ่งที่ได้เรียนรู้ รวมถึงจากการทดสอบที่ไม่เวิร์ก ผลทั้งหมดขึ้น Dashboard กลางที่ทีมของคุณเปิดดูได้ตลอด'},
      {no: '05', title: 'Scale & Iterate', desc: 'เราขยายสิ่งที่ได้ผล หยุดสิ่งที่ไม่ได้ผล และกลับมาทบทวนโมเดลทุกไตรมาสด้วยข้อมูลใหม่ ถ้าเหมาะ เราส่งต่อกระบวนการนี้ให้ทีมภายในของคุณดูแลต่อ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'PLG Strategy Grows MRR 3x in 9 Months', desc: 'We designed a freemium model, a viral loop, and an in-product upsell flow tuned to convert free users into paying ones.', result: 'MRR up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'CRO Lifts Conversion from 1.2% to 3.8%', desc: 'Twenty-four A/B experiments over three months across checkout, product pages, and the cart.', result: 'Conversion up 3.2x'},
      {tag: 'Mobile App · Bangkok', title: 'Retention Improvement Grows LTV 2.4x', desc: 'A redesigned onboarding, a rethought push strategy, and lifecycle emails that were tested before rollout.', result: 'Day-30 Retention up 85%'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'PLG Strategy เพิ่ม MRR 3x ใน 9 เดือน', desc: 'เราออกแบบโมเดล Freemium, Viral Loop และขั้นตอนชวนอัปเกรดในผลิตภัณฑ์ ที่ปรับให้เปลี่ยนผู้ใช้ฟรีเป็นผู้ใช้จ่ายเงิน', result: 'MRR เพิ่ม 3x'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'CRO เพิ่ม Conversion จาก 1.2% เป็น 3.8%', desc: 'A/B Test 24 การทดลองใน 3 เดือน ครอบคลุม Checkout หน้าสินค้า และตะกร้า', result: 'Conversion เพิ่ม 3.2x'},
      {tag: 'Mobile App · กรุงเทพฯ', title: 'ปรับปรุง Retention เพิ่ม LTV 2.4x', desc: 'ออกแบบ Onboarding ใหม่ คิดกลยุทธ์ Push ใหม่ และทดสอบอีเมลตามช่วงชีวิตลูกค้าก่อนใช้จริง', result: 'Retention วันที่ 30 เพิ่ม 85%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which channel should we start with?', a: 'It depends on your stage and your ideal customer profile (ICP). Early-stage products often start with content, community, and partnerships because they are cheap to test, and add paid once product-market fit shows in retention. The growth audit tells us which applies to you.'},
      {q: 'How much traffic do we need for A/B tests?', a: 'It depends on your baseline conversion rate and the size of change you want to detect. As a rule of thumb you need at least 100-200 conversions per variant per week to reach statistical significance. With less traffic we use bigger changes, longer tests, or qualitative research instead.'},
      {q: 'Does PLG work for B2B?', a: 'Very well. B2B products such as Slack, Notion, and Figma grow through product-led motions. The common thread is a short time to first value, and value that is visible to the user without a sales call.'},
      {q: 'Who should be on a growth team?', a: 'A core team of a Growth PM, a Data Analyst, and an Engineer covers most of the work. A Designer, a Marketer, and a CRO specialist join as extended members. Smaller companies often start with one or two of these roles and borrow the rest.'},
      {q: 'What do you need from us to start a growth audit?', a: 'Read access to your analytics (for example GA4 or Mixpanel), your funnel definitions, recent campaign spend by channel, and ideally a customer or revenue export. If tracking is incomplete, fixing it becomes our first task.'},
      {q: 'How is this different from hiring a digital marketing agency?', a: 'A marketing agency usually runs campaigns in one or two channels. Growth strategy looks across the whole journey: acquisition, activation, retention, and revenue, including changes to the product itself. We work with your marketers and agencies, not instead of them.'},
      {q: 'When will we see results?', a: 'Quick fixes from the audit, such as broken tracking or an obvious checkout drop-off, can show up within weeks. Measurable gains from the experiment programme usually appear within about three months, and they compound as the team learns.'}
    ] : [
      {q: 'เริ่มจากช่องทางไหนก่อนดี?', a: 'ขึ้นอยู่กับระยะของธุรกิจและกลุ่มลูกค้าเป้าหมาย (ICP) ผลิตภัณฑ์ช่วงเริ่มต้นมักเริ่มจาก Content, Community และพาร์ตเนอร์ เพราะทดสอบถูก แล้วค่อยเพิ่ม Paid เมื่อเห็น Product-market Fit จาก Retention ซึ่ง Growth Audit จะบอกว่าคุณเข้ากรณีไหน'},
      {q: 'A/B Test ต้องมี Traffic เท่าไหร่?', a: 'ขึ้นอยู่กับ Conversion พื้นฐานและขนาดการเปลี่ยนแปลงที่อยากวัด โดยทั่วไปควรมี Conversion อย่างน้อย 100-200 ต่อกลุ่มทดสอบต่อสัปดาห์ถึงจะมีนัยสำคัญทางสถิติ ถ้า Traffic น้อยกว่านั้น เราจะใช้การเปลี่ยนที่ใหญ่ขึ้น ทดสอบนานขึ้น หรือใช้งานวิจัยเชิงคุณภาพแทน'},
      {q: 'PLG เหมาะกับ B2B ไหม?', a: 'เหมาะมาก ผลิตภัณฑ์ B2B อย่าง Slack, Notion และ Figma โตผ่านแนวทาง Product-led จุดร่วมคือผู้ใช้เห็นคุณค่าครั้งแรกเร็ว และเห็นคุณค่านั้นได้เองโดยไม่ต้องคุยกับเซลส์'},
      {q: 'ทีม Growth ควรมีใครบ้าง?', a: 'ทีมหลักที่มี Growth PM, Data Analyst และ Engineer ครอบคลุมงานส่วนใหญ่ได้ ส่วน Designer, Marketer และ CRO Specialist เป็นสมาชิกเสริม บริษัทเล็กมักเริ่มจากสองสามตำแหน่งก่อนแล้วขอยืมตำแหน่งที่เหลือ'},
      {q: 'ต้องเตรียมอะไรให้เราก่อนเริ่ม Growth Audit?', a: 'สิทธิ์อ่าน Analytics ของคุณ (เช่น GA4 หรือ Mixpanel) นิยามของ Funnel งบแคมเปญล่าสุดแยกตามช่องทาง และถ้าได้ ไฟล์ข้อมูลลูกค้าหรือรายได้ ถ้าการติดตามข้อมูลยังไม่ครบ การแก้ตรงนี้จะเป็นงานแรกของเรา'},
      {q: 'ต่างจากการจ้างเอเจนซี่การตลาดดิจิทัลอย่างไร?', a: 'เอเจนซี่การตลาดมักรันแคมเปญในหนึ่งสองช่องทาง ส่วน Growth Strategy มองทั้งเส้นทางลูกค้า ตั้งแต่การหาลูกค้า การเริ่มใช้งาน การรักษาลูกค้า ไปจนถึงรายได้ รวมถึงการแก้ตัวผลิตภัณฑ์เอง เราทำงานร่วมกับนักการตลาดและเอเจนซี่ของคุณ ไม่ได้มาแทนที่'},
      {q: 'เมื่อไหร่จะเห็นผล?', a: 'จุดที่แก้ได้เร็วจาก Audit เช่น การติดตามข้อมูลที่พัง หรือจุดที่คนหลุดชัดเจนตอน Checkout อาจเห็นผลภายในไม่กี่สัปดาห์ ส่วนผลที่วัดได้จากโปรแกรมการทดลองมักเริ่มเห็นภายในราว 3 เดือน และทบต้นขึ้นเรื่อยๆ เมื่อทีมเรียนรู้'}
    ]
  const related     = isEN ? [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Product Discovery', href: '/services/product-discovery'}
    ] : [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Product Discovery', href: '/services/product-discovery'}
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
      heroImg="/images/services/growth-strategy/hero.jpg"
      whyImg="/images/services/growth-strategy/why1.jpg"
      whyImg2="/images/services/growth-strategy/why2.jpg"
      featureImg="/images/services/growth-strategy/feature.jpg"
      processImg="/images/services/growth-strategy/process.jpg"
    />
  )
}
