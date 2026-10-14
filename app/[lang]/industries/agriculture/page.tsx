import Link from 'next/link'
import TechGlyph from '@/components/TechGlyph'
import IndustryHero from '@/components/industry/IndustryHero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? "Agriculture Software & Digital Solutions | Haliviq" : "เกษตรกรรม | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Farm technology built for real fields: soil and crop monitoring, farm management apps, produce traceability and yield forecasting that work in Thai, on a…"
    : "เทคโนโลยีเพื่อการเกษตรที่ใช้งานได้จริงในแปลง ตั้งแต่ระบบวัดความชื้นดินและติดตามพืช แอปจัดการฟาร์ม ระบบตามรอยสินค้าเกษตร ไปจนถึงการคาดการณ์ผลผลิต…"
  const url = `https://haliviq.com/${params.lang}/industries/agriculture`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Agriculture' : 'อุตสาหกรรม / เกษตรกรรม'
  const heroSubhead = isEN
    ? 'Farm technology built for real fields: soil and crop monitoring, farm management apps, produce traceability and yield forecasting that work in Thai, on a phone, even where the signal is weak.'
    : 'เทคโนโลยีเพื่อการเกษตรที่ใช้งานได้จริงในแปลง ตั้งแต่ระบบวัดความชื้นดินและติดตามพืช แอปจัดการฟาร์ม ระบบตามรอยสินค้าเกษตร ไปจนถึงการคาดการณ์ผลผลิต ใช้งานเป็นภาษาไทยบนมือถือได้ แม้สัญญาณจะไม่ค่อยดี'

  const challenges = isEN ? [
    { icon: 'ti-cloud-storm', title: 'Unpredictable Weather & Climate Risk', desc: 'Rainfall that arrives late or all at once, longer dry spells and sudden storms make it harder to decide when to plant, irrigate and harvest. Calendars and experience still matter, but they are no longer enough on their own. We combine your own field readings with weather data so that decisions rest on what is happening on your land.' },
    { icon: 'ti-database', title: 'Fragmented Farm Data', desc: 'Sensor readings, weather feeds, machinery logs, labour records and accounts usually live in separate tools, so nobody sees the whole picture. Questions like "what did this plot cost us per kilo?" take days to answer. We connect these sources into one place with one set of plot, crop and season names.' },
    { icon: 'ti-users-group', title: 'Labor Shortages & Rising Input Costs', desc: 'Fewer young people are entering farm work, while seed, fertiliser, fuel and feed prices keep moving. Teams are asked to do more with fewer hands and tighter margins. We automate the repetitive parts, such as logging, reporting and irrigation scheduling, and show where inputs are being wasted.' },
    { icon: 'ti-barcode', title: 'Traceability Demands from Buyers & Regulators', desc: 'Supermarkets, export buyers and regulators increasingly ask where a lot was grown, what was applied to it and who handled it. Paper logs and photographs are slow to assemble when a buyer or inspector asks. We record each step from the plot to the pack house so that the answer is ready before anyone asks.' },
  ] : [
    { icon: 'ti-cloud-storm', title: 'อากาศแปรปรวนและความเสี่ยงจากสภาพภูมิอากาศ', desc: 'ฝนที่มาช้าหรือมาทีเดียวเยอะ ช่วงแล้งที่ยาวขึ้น และพายุที่มาแบบไม่ทันตั้งตัว ทำให้ตัดสินใจเรื่องเวลาปลูก ให้น้ำ และเก็บเกี่ยวยากขึ้น ปฏิทินและประสบการณ์ยังสำคัญอยู่ แต่เริ่มไม่พอแล้ว เรานำค่าที่วัดได้จากแปลงของคุณมารวมกับข้อมูลสภาพอากาศ เพื่อให้การตัดสินใจอิงกับสิ่งที่เกิดขึ้นบนที่ดินของคุณจริงๆ' },
    { icon: 'ti-database', title: 'ข้อมูลฟาร์มกระจัดกระจาย', desc: 'ค่าจากเซนเซอร์ ข้อมูลอากาศ บันทึกการใช้เครื่องจักร บันทึกแรงงาน และบัญชี มักอยู่คนละเครื่องมือ จึงไม่มีใครเห็นภาพรวม คำถามอย่าง "แปลงนี้ต้นทุนต่อกิโลเท่าไหร่" ต้องใช้เวลาหลายวันกว่าจะได้คำตอบ เรารวมแหล่งข้อมูลเหล่านี้ไว้ที่เดียว โดยใช้ชื่อแปลง ชื่อพืช และชื่อฤดูกาลชุดเดียวกัน' },
    { icon: 'ti-users-group', title: 'ขาดแรงงานและต้นทุนปัจจัยการผลิตที่ผันผวน', desc: 'คนรุ่นใหม่เข้ามาทำงานเกษตรน้อยลง ขณะที่ราคาเมล็ดพันธุ์ ปุ๋ย น้ำมัน และอาหารสัตว์ขึ้นลงตลอด ทีมงานต้องทำงานให้ได้มากขึ้นด้วยคนที่น้อยลงและกำไรที่บางลง เราช่วยทำส่วนที่ต้องทำซ้ำๆ ให้อัตโนมัติ เช่น การจดบันทึก การทำรายงาน และการตั้งเวลารดน้ำ พร้อมชี้ให้เห็นว่าปัจจัยการผลิตสูญเปล่าตรงไหน' },
    { icon: 'ti-barcode', title: 'ผู้ซื้อและผู้กำกับดูแลต้องการตรวจย้อนกลับได้', desc: 'ซูเปอร์มาร์เก็ต ผู้ซื้อต่างประเทศ และหน่วยงานกำกับดูแล ถามมากขึ้นเรื่องผลผลิตล็อตนี้ปลูกที่ไหน ใช้อะไรไปบ้าง และใครจับต้องมาบ้าง สมุดจดและรูปถ่ายใช้เวลารวบรวมนานเมื่อผู้ซื้อหรือผู้ตรวจถามขึ้นมา เราบันทึกทุกขั้นตั้งแต่แปลงจนถึงโรงคัดบรรจุ เพื่อให้คำตอบพร้อมก่อนที่ใครจะถาม' },
  ]

  const metrics = [
    { value: '$41.5B', label: isEN ? 'Global Precision Agriculture Market by 2030' : 'มูลค่าตลาดเกษตรแม่นยำทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Precision Agriculture Report, 2024' },
    { value: '68%', label: isEN ? 'Of Large Farms Adopting IoT & Data-Driven Tools' : 'ของฟาร์มขนาดใหญ่ที่ใช้ IoT และเครื่องมือที่ใช้ข้อมูลช่วยตัดสินใจ', source: 'Deloitte Future of Agriculture Survey, 2024' },
    { value: '25%', label: isEN ? 'Higher Yields with Data-Driven Farming Practices' : 'ผลผลิตที่เพิ่มขึ้นจากการทำเกษตรโดยใช้ข้อมูลช่วยตัดสินใจ', source: 'FAO Digital Agriculture Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-plug-connected', title: 'IoT Soil & Crop Monitoring Platforms', desc: 'Sensor networks and dashboards that track soil moisture, nutrient levels, temperature and crop health plot by plot. They are built for farms with patchy coverage, using low-power networks such as LoRaWAN and gateways that store data until the connection returns. Farm managers get alerts on their phone when a plot drifts out of range.' },
    { icon: 'ti-tractor', title: 'Farm Management Systems', desc: 'A system for planning and recording what happens on the farm: planting and harvest schedules, field tasks, machinery use, input stock and labour. Supervisors assign work from a dashboard, and field staff report back from a simple app in Thai, with photos, and without needing a signal. Owners see cost and output per plot and per season.' },
    { icon: 'ti-barcode', title: 'Produce Traceability & Supply Chain Tools', desc: 'QR-code and blockchain-backed traceability that records planting, inputs, harvest, packing and shipping for every lot. A buyer or consumer can scan the code and see where the produce came from, and your team can answer an inspector in minutes. We set up the data fields with your quality team so they match the standards your buyers ask for.' },
    { icon: 'ti-chart-line', title: 'AI Yield-Prediction Models', desc: 'Machine learning models trained on satellite imagery, weather history and your own harvest records to estimate yield weeks before harvest. Planners use the estimate to schedule labour, transport and buyers. We tell you plainly how accurate the model is on your crops, and it improves as each season adds more of your own data.' },
    { icon: 'ti-building-store', title: 'Farmer-Buyer Marketplace Platforms', desc: 'Online marketplaces where farmers list produce and buyers, processors or exporters place orders directly. Features include grade and volume listings, price history, order confirmation and payment, with PromptPay as an option for local transactions. Cooperatives can use it to sell on behalf of many members from a single account.' },
    { icon: 'ti-droplet', title: 'Irrigation & Resource Optimization Systems', desc: 'Automated irrigation control and planning that waters according to soil readings and forecast rain instead of a fixed timer. It also tracks water and energy use per plot so you can see where the savings are. Staff can still override any schedule from their phone.' },
  ] : [
    { icon: 'ti-plug-connected', title: 'ระบบ IoT ติดตามดินและพืช', desc: 'เครือข่ายเซนเซอร์และแดชบอร์ดที่ติดตามความชื้นดิน ธาตุอาหาร อุณหภูมิ และสุขภาพพืชทีละแปลง ออกแบบให้เหมาะกับฟาร์มที่สัญญาณไม่ครอบคลุม โดยใช้เครือข่ายกินไฟน้อยอย่าง LoRaWAN และ Gateway ที่เก็บข้อมูลไว้ก่อนจนกว่าจะเชื่อมต่อได้อีกครั้ง ผู้จัดการฟาร์มจะได้รับแจ้งเตือนบนมือถือเมื่อแปลงไหนค่าหลุดจากช่วงที่ตั้งไว้' },
    { icon: 'ti-tractor', title: 'ระบบจัดการฟาร์ม', desc: 'ระบบวางแผนและบันทึกงานในฟาร์ม ทั้งตารางปลูกและเก็บเกี่ยว งานในแปลง การใช้เครื่องจักร สต็อกปัจจัยการผลิต และแรงงาน หัวหน้างานมอบหมายงานจากแดชบอร์ด ส่วนคนในแปลงรายงานกลับผ่านแอปง่ายๆ ภาษาไทย แนบรูปได้ และใช้ได้แม้ไม่มีสัญญาณ เจ้าของฟาร์มดูต้นทุนและผลผลิตต่อแปลงต่อฤดูกาลได้' },
    { icon: 'ti-barcode', title: 'ระบบตามรอยสินค้าเกษตรและซัพพลายเชน', desc: 'ระบบตามรอยด้วย QR Code และ Blockchain ที่บันทึกการปลูก ปัจจัยการผลิต การเก็บเกี่ยว การบรรจุ และการจัดส่งของทุกล็อต ผู้ซื้อหรือผู้บริโภคสแกนโค้ดแล้วเห็นว่าผลผลิตมาจากไหน ส่วนทีมของคุณก็ตอบผู้ตรวจได้ในไม่กี่นาที เราตั้งค่าช่องข้อมูลร่วมกับทีมคุณภาพของคุณ ให้ตรงกับมาตรฐานที่ผู้ซื้อต้องการ' },
    { icon: 'ti-chart-line', title: 'โมเดล AI คาดการณ์ผลผลิต', desc: 'โมเดล Machine Learning ที่เรียนรู้จากภาพถ่ายดาวเทียม ประวัติสภาพอากาศ และบันทึกการเก็บเกี่ยวของคุณเอง เพื่อประเมินผลผลิตล่วงหน้าหลายสัปดาห์ ฝ่ายวางแผนใช้ตัวเลขนี้จัดแรงงาน การขนส่ง และผู้ซื้อ เราจะบอกตรงๆ ว่าโมเดลแม่นแค่ไหนกับพืชของคุณ และจะแม่นขึ้นเรื่อยๆ เมื่อมีข้อมูลของคุณเพิ่มในแต่ละฤดู' },
    { icon: 'ti-building-store', title: 'แพลตฟอร์มตลาดเกษตรกรกับผู้ซื้อ', desc: 'ตลาดออนไลน์ที่เกษตรกรลงประกาศผลผลิต และผู้ซื้อ โรงงานแปรรูป หรือผู้ส่งออกสั่งซื้อโดยตรง มีส่วนลงเกรดและปริมาณ ประวัติราคา การยืนยันออเดอร์ และการชำระเงิน โดยเลือกใช้ PromptPay สำหรับธุรกรรมในประเทศได้ สหกรณ์ใช้ขายแทนสมาชิกหลายรายผ่านบัญชีเดียวได้' },
    { icon: 'ti-droplet', title: 'ระบบให้น้ำและบริหารทรัพยากร', desc: 'ระบบควบคุมการให้น้ำอัตโนมัติและวางแผนทรัพยากร ที่รดน้ำตามค่าความชื้นดินและพยากรณ์ฝน แทนการตั้งเวลาตายตัว พร้อมติดตามการใช้น้ำและไฟฟ้าต่อแปลง ให้เห็นว่าประหยัดได้ตรงไหน พนักงานยังสั่งเปลี่ยนตารางจากมือถือได้ตลอด' },
  ]

  const techStack = ['IoT', 'LoRaWAN', 'React', 'React Native', 'Python', 'Machine Learning', 'Satellite Imagery', 'Computer Vision', 'AWS', 'PostgreSQL', 'GraphQL', 'Time Series DBs', 'Flutter', 'Fastify']

  const useCases = isEN ? [
    { no: '01', title: 'IoT Crop-Monitoring Platform', desc: 'A field sensor network with a central dashboard showing soil moisture, temperature and humidity for each plot. Rules trigger alerts or irrigation when a reading crosses a threshold, and history charts help agronomists compare plots. Deliverables include sensor and gateway selection, installation guidance, the dashboard and a mobile app for field staff.' },
    { no: '02', title: 'Produce Traceability System', desc: 'A traceability platform that gives each harvest lot a QR code and a record of every stage from plot to shelf. Buyers scan to see origin and handling, while your team exports the records for audits or export paperwork. It suits fruit and vegetable growers, packing houses and cooperatives who sell to retailers or overseas buyers.' },
    { no: '03', title: 'Yield-Prediction Analytics Tool', desc: 'An analytics tool that combines satellite imagery, weather data and past harvest records to forecast output by plot. Planners compare forecast with actual results every season and use it to set labour, logistics and sales plans. We start with a pilot on one crop so you can judge the value before expanding.' },
  ] : [
    { no: '01', title: 'แพลตฟอร์ม IoT ติดตามพืช', desc: 'เครือข่ายเซนเซอร์ในแปลงพร้อมแดชบอร์ดกลางที่แสดงความชื้นดิน อุณหภูมิ และความชื้นอากาศของแต่ละแปลง ตั้งกฎให้แจ้งเตือนหรือสั่งให้น้ำเมื่อค่าเกินที่กำหนด และมีกราฟย้อนหลังให้นักเกษตรเทียบแปลงกันได้ งานที่ส่งมอบรวมถึงการเลือกเซนเซอร์และ Gateway คำแนะนำการติดตั้ง แดชบอร์ด และแอปมือถือสำหรับคนในแปลง' },
    { no: '02', title: 'ระบบตามรอยสินค้าเกษตร', desc: 'แพลตฟอร์มตามรอยที่ให้ทุกล็อตผลผลิตมี QR Code และบันทึกทุกขั้นตั้งแต่แปลงจนถึงชั้นวางสินค้า ผู้ซื้อสแกนดูที่มาและการจัดการได้ ส่วนทีมของคุณส่งออกข้อมูลไปใช้ตรวจประเมินหรือทำเอกสารส่งออกได้ เหมาะกับผู้ปลูกผักผลไม้ โรงคัดบรรจุ และสหกรณ์ที่ขายให้ร้านค้าปลีกหรือผู้ซื้อต่างประเทศ' },
    { no: '03', title: 'เครื่องมือวิเคราะห์คาดการณ์ผลผลิต', desc: 'เครื่องมือวิเคราะห์ที่รวมภาพถ่ายดาวเทียม ข้อมูลอากาศ และบันทึกการเก็บเกี่ยวย้อนหลัง เพื่อคาดการณ์ผลผลิตรายแปลง ฝ่ายวางแผนเทียบตัวเลขที่คาดกับผลจริงทุกฤดู แล้วใช้วางแผนแรงงาน การขนส่ง และการขาย เราเริ่มจากทดลองกับพืชหนึ่งชนิดก่อน เพื่อให้คุณประเมินความคุ้มค่าได้ก่อนขยาย' },
  ]

  const heroVisual = <IndustryHero kind="agriculture" isEN={isEN} />

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Agriculture &' : 'เกษตรกรรม &'}<br />{isEN ? 'AgTech' : 'AgTech'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgb(var(--fg) / 0.2)', color: 'var(--ink)', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'Farms, cooperatives and agribusinesses collect a lot of data, but it usually sits in notebooks, LINE chats, sensor apps and spreadsheets that never meet. We build IoT monitoring platforms, farm management systems, traceability tools and AI yield-prediction models that bring that data together and turn it into decisions such as when to irrigate, what to plant and which lot to ship. Our systems are designed for rural conditions: offline-first mobile apps, low-power sensor networks, and screens that field staff can read in sunlight and in Thai. We work with your agronomists and farm managers from the start, because the system only helps if it matches how the farm actually runs.'
                  : 'ฟาร์ม สหกรณ์ และบริษัทเกษตรเก็บข้อมูลไว้เยอะมาก แต่ส่วนใหญ่กระจายอยู่ตามสมุดจด กลุ่ม LINE แอปของเซนเซอร์ และสเปรดชีตที่ไม่เคยมารวมกัน เรารับสร้างระบบ IoT สำหรับติดตามแปลง ระบบจัดการฟาร์ม เครื่องมือตามรอยสินค้า และโมเดล AI คาดการณ์ผลผลิต ที่ดึงข้อมูลเหล่านั้นมารวมกัน แล้วช่วยตัดสินใจ เช่น ควรให้น้ำเมื่อไหร่ ควรปลูกอะไร หรือควรส่งล็อตไหนก่อน ระบบของเราออกแบบมาสำหรับพื้นที่ห่างไกล คือแอปมือถือที่ใช้งานได้แม้ไม่มีเน็ต เครือข่ายเซนเซอร์ที่กินไฟน้อย และหน้าจอที่คนทำงานในแปลงอ่านได้ทั้งกลางแดดและเป็นภาษาไทย เราทำงานร่วมกับนักเกษตรและผู้จัดการฟาร์มของคุณตั้งแต่ต้น เพราะระบบจะช่วยได้จริงก็ต่อเมื่อเข้ากับวิธีทำงานของฟาร์ม'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'The problems teams in this industry bring to us most often, and the ones we plan each project around.'
                : 'นี่คือปัญหาที่ทีมในอุตสาหกรรมนี้เล่าให้เราฟังบ่อยที่สุด และเป็นสิ่งที่เราใช้วางแผนแต่ละโปรเจกต์'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
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
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgb(var(--fg) / 0.08)', background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgb(var(--fg) / 0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgb(var(--fg) / 0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'The kinds of systems we build for this industry, what each one does, and who it is for.' : 'ระบบที่เรารับทำให้อุตสาหกรรมนี้ ว่าแต่ละอย่างทำอะไรได้ และเหมาะกับใครบ้าง'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--accent-2)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'The tools and frameworks we reach for most often, chosen because they are stable, well documented and easy to find people to maintain.'
                : 'เครื่องมือและ Framework ที่เราเลือกใช้บ่อย เพราะเสถียร เอกสารครบ และหาคนมาดูแลต่อได้ง่าย'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
                >
                  <TechGlyph name={tag} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Typical projects we take on in this industry, and what each one delivers.' : 'ตัวอย่างโปรเจกต์ที่เรารับทำในอุตสาหกรรมนี้ พร้อมสิ่งที่ลูกค้าจะได้รับ'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
              {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </h2>
            <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
              {isEN ? 'Tell us what you are building, and we will suggest where to start.' : 'เล่าให้เราฟังหน่อยว่าคุณกำลังทำอะไรอยู่ แล้วเราจะช่วยดูว่าควรเริ่มจากตรงไหน'}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
              >
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
