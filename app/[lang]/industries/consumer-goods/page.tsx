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
  const title = isEN ? "Consumer Goods Software & Digital Solutions | Haliviq" : "สินค้าอุปโภคบริโภค | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Software for consumer product brands: direct-to-consumer stores, loyalty apps, sell-in and sell-out dashboards, demand forecasting and product data…"
    : "ซอฟต์แวร์สำหรับแบรนด์สินค้าอุปโภคบริโภค ตั้งแต่ร้านค้าออนไลน์ของแบรนด์เอง แอปสะสมแต้ม แดชบอร์ดยอดขาย การพยากรณ์ความต้องการซื้อ…"
  const url = `https://haliviq.com/${params.lang}/industries/consumer-goods`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Consumer Goods' : 'อุตสาหกรรม / สินค้าอุปโภคบริโภค'
  const heroSubhead = isEN
    ? 'Software for consumer product brands: direct-to-consumer stores, loyalty apps, sell-in and sell-out dashboards, demand forecasting and product data management across marketplaces, retailers and your own channels.'
    : 'ซอฟต์แวร์สำหรับแบรนด์สินค้าอุปโภคบริโภค ตั้งแต่ร้านค้าออนไลน์ของแบรนด์เอง แอปสะสมแต้ม แดชบอร์ดยอดขาย การพยากรณ์ความต้องการซื้อ ไปจนถึงระบบจัดการข้อมูลสินค้า ที่ครอบคลุมทั้งมาร์เก็ตเพลส ร้านค้าปลีก และช่องทางของคุณเอง'

  const challenges = isEN ? [
    { icon: 'ti-network', title: 'Fragmented DTC & Distribution Data', desc: 'Direct-to-consumer sales, retail partners and distributors each produce their own data on customers, orders and stock, in different formats and on different schedules. Marketing, sales and supply teams then argue over whose numbers are right. We build one shared model of products, channels and customers so everyone starts from the same figures.' },
    { icon: 'ti-chart-line', title: 'Demand-Forecasting Volatility', desc: 'Seasonal peaks, viral trends, promotions and changing tastes make demand hard to predict, and the cost of getting it wrong is either empty shelves or stock that has to be discounted. Spreadsheet forecasts struggle to keep up with SKU-by-channel detail. We bring in sales history, promotion calendars and external signals to forecast at the level your planners actually work.' },
    { icon: 'ti-currency-dollar', title: 'Rising Customer-Acquisition Costs', desc: 'Advertising costs keep climbing while privacy changes and consent rules limit how precisely you can target, so brands need customers who come back. That means knowing who your repeat buyers are and giving them a reason to return. We build first-party data capture, with clear PDPA consent, and loyalty and CRM flows that run on LINE and email.' },
    { icon: 'ti-barcode', title: 'Product-Information Management at Scale', desc: 'Keeping names, descriptions, images, prices, barcodes and compliance details consistent across thousands of SKUs and a dozen sales channels is slow and error-prone. Each marketplace and retailer also wants the data in its own template. We centralise the data so you edit once and publish to every channel.' },
  ] : [
    { icon: 'ti-network', title: 'ข้อมูล DTC และการกระจายสินค้าแยกส่วน', desc: 'ยอดขายออนไลน์ของแบรนด์ ร้านค้าปลีกที่เป็นพาร์ทเนอร์ และตัวแทนจำหน่าย ต่างสร้างข้อมูลลูกค้า ออเดอร์ และสต็อกของตัวเอง คนละรูปแบบและคนละรอบเวลา ทีมการตลาด ทีมขาย และทีมซัพพลายจึงมักเถียงกันว่าตัวเลขของใครถูก เราสร้างโมเดลข้อมูลกลางของสินค้า ช่องทางขาย และลูกค้า เพื่อให้ทุกคนเริ่มจากตัวเลขชุดเดียวกัน' },
    { icon: 'ti-chart-line', title: 'ความต้องการซื้อที่คาดเดายาก', desc: 'ช่วงเทศกาล กระแสไวรัล โปรโมชัน และรสนิยมที่เปลี่ยนไป ทำให้ทำนายความต้องการซื้อได้ยาก และถ้าพลาดก็เสียทั้งของขาดชั้นหรือของค้างที่ต้องลดราคา การพยากรณ์ด้วยสเปรดชีตตามรายละเอียดระดับ SKU แยกตามช่องทางไม่ทัน เรารวมประวัติยอดขาย ปฏิทินโปรโมชัน และสัญญาณจากภายนอก เพื่อพยากรณ์ในระดับที่ทีมวางแผนของคุณใช้งานจริง' },
    { icon: 'ti-currency-dollar', title: 'ต้นทุนหาลูกค้าใหม่ที่สูงขึ้น', desc: 'ค่าโฆษณาสูงขึ้นเรื่อยๆ ขณะที่กฎความเป็นส่วนตัวและเรื่องความยินยอมทำให้ยิงโฆษณาแม่นๆ ได้ยากขึ้น แบรนด์จึงต้องมีลูกค้าที่กลับมาซื้อซ้ำ ซึ่งหมายถึงต้องรู้ว่าใครคือลูกค้าประจำ และมีเหตุผลให้เขากลับมา เราช่วยสร้างการเก็บข้อมูลลูกค้าของแบรนด์เอง พร้อมการขอความยินยอมตาม PDPA ที่ชัดเจน และระบบสะสมแต้มกับ CRM ที่ทำงานผ่าน LINE และอีเมล' },
    { icon: 'ti-barcode', title: 'จัดการข้อมูลสินค้าจำนวนมาก', desc: 'การทำให้ชื่อ รายละเอียด รูปภาพ ราคา บาร์โค้ด และข้อมูลตามข้อกำหนดตรงกันทั้งหมด ข้ามสินค้าหลายพัน SKU และช่องทางขายหลายสิบช่องทาง ทำได้ช้าและพลาดง่าย แต่ละมาร์เก็ตเพลสและร้านค้าปลีกก็ต้องการข้อมูลตามเทมเพลตของตัวเอง เรารวมข้อมูลไว้ที่เดียว คุณแก้ครั้งเดียวแล้วส่งไปทุกช่องทางได้' },
  ]

  const metrics = [
    { value: '$212B', label: isEN ? 'Global DTC E-commerce Market Size by 2028' : 'ขนาดตลาด DTC E-commerce ทั่วโลกภายในปี 2028', source: 'Grand View Research CPG & DTC Report, 2024' },
    { value: '64%', label: isEN ? 'Consumers More Loyal to Brands with Strong Loyalty Programs' : 'ผู้บริโภคที่ภักดีต่อแบรนด์ซึ่งมีโปรแกรมสะสมแต้มที่ดี', source: 'Deloitte Consumer Loyalty Survey, 2024' },
    { value: '35%', label: isEN ? 'Improvement in Forecast Accuracy from AI-Driven Demand Planning' : 'ความแม่นยำในการพยากรณ์ที่เพิ่มขึ้นจากการวางแผนความต้องการซื้อด้วย AI', source: 'McKinsey Consumer Goods Analytics, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shopping-cart', title: 'DTC E-commerce Platforms', desc: 'Fast storefronts for selling directly to your customers, with flexible checkout, subscriptions, bundles and promotions. Checkout supports PromptPay QR, cards and cash on delivery, and order data flows to your warehouse or fulfilment partner. The site is built for mobile shoppers and for search, so product pages can rank on their own.' },
    { icon: 'ti-gift', title: 'Loyalty & Membership Apps', desc: 'Points, tiers, referrals and member-only offers in an app or LINE mini-experience, linked to your sales data. Customers collect points from online orders and in-store purchases, and the team sends offers based on what each person actually buys. Rules and campaigns can be changed by the marketing team without a developer.' },
    { icon: 'ti-report-analytics', title: 'Retail-Distribution Dashboards', desc: 'Reporting that combines sell-in and sell-out figures from retail partners and distributors with your own e-commerce sales. Sales managers see which stores and regions are moving stock and which are sitting on it. Data arrives by file upload, partner portals or APIs, and we clean it so it is comparable.' },
    { icon: 'ti-chart-line', title: 'AI Demand-Forecasting Systems', desc: 'Machine learning models that forecast demand by SKU and channel, taking account of seasons, promotions, pricing and past stock-outs. Planners get a forecast with a confidence range and can adjust it with their own market knowledge. We measure accuracy against your history first, so the value is clear before it drives purchasing.' },
    { icon: 'ti-database', title: 'Product Information Management (PIM)', desc: 'A central product information system holding names in Thai and English, descriptions, images, specifications, barcodes, pricing and regulatory details. Approval steps make sure nothing goes live without a review, and exports match each marketplace and retailer template. New launches take less time because the data is already structured.' },
    { icon: 'ti-tag', title: 'Trade-Promotion & Pricing Optimization', desc: 'Planning tools that model how a discount or trade promotion affects volume and margin before you commit. Teams compare scenarios, see post-promotion results against the plan and learn which offers pay back. It is meant for category and revenue managers who currently do this in spreadsheets.' },
  ] : [
    { icon: 'ti-shopping-cart', title: 'แพลตฟอร์ม DTC E-commerce', desc: 'หน้าร้านที่โหลดเร็วสำหรับขายตรงถึงลูกค้า มีระบบชำระเงินที่ยืดหยุ่น การสั่งซื้อแบบสมัครสมาชิกรายเดือน ชุดสินค้า และโปรโมชัน รองรับ PromptPay QR บัตร และเก็บเงินปลายทาง ข้อมูลออเดอร์ส่งต่อถึงคลังสินค้าหรือผู้ให้บริการจัดส่งได้ เว็บออกแบบมาสำหรับคนซื้อบนมือถือและการค้นหา เพื่อให้หน้าสินค้าติดอันดับได้เอง' },
    { icon: 'ti-gift', title: 'แอปสะสมแต้มและสมาชิก', desc: 'ระบบแต้ม ระดับสมาชิก การชวนเพื่อน และข้อเสนอเฉพาะสมาชิก ผ่านแอปหรือบน LINE เชื่อมกับข้อมูลยอดขายของคุณ ลูกค้าสะสมแต้มได้ทั้งจากออเดอร์ออนไลน์และการซื้อหน้าร้าน และทีมส่งข้อเสนอตามสิ่งที่ลูกค้าแต่ละคนซื้อจริง ทีมการตลาดแก้กฎและแคมเปญเองได้โดยไม่ต้องรอนักพัฒนา' },
    { icon: 'ti-report-analytics', title: 'แดชบอร์ดการขายปลีกและการกระจายสินค้า', desc: 'รายงานที่รวมตัวเลข Sell-in และ Sell-out จากร้านค้าปลีกและตัวแทนจำหน่าย เข้ากับยอดขายออนไลน์ของคุณ ผู้จัดการฝ่ายขายเห็นว่าร้านและภูมิภาคไหนขายออก ที่ไหนสต็อกค้าง ข้อมูลเข้ามาได้ทั้งแบบอัปโหลดไฟล์ พอร์ทัลของพาร์ทเนอร์ หรือ API และเรามีขั้นตอนทำความสะอาดข้อมูลให้เทียบกันได้' },
    { icon: 'ti-chart-line', title: 'ระบบ AI พยากรณ์ความต้องการซื้อ', desc: 'โมเดล Machine Learning ที่พยากรณ์ความต้องการซื้อรายสินค้าและรายช่องทาง โดยคำนึงถึงฤดูกาล โปรโมชัน ราคา และช่วงที่ของเคยขาด ทีมวางแผนได้ตัวเลขพร้อมช่วงความมั่นใจ และปรับด้วยความรู้เรื่องตลาดของตัวเองได้ เราวัดความแม่นเทียบกับข้อมูลย้อนหลังของคุณก่อน เพื่อให้เห็นคุณค่าชัดเจนก่อนนำไปใช้สั่งของจริง' },
    { icon: 'ti-database', title: 'ระบบจัดการข้อมูลสินค้า (PIM)', desc: 'ระบบข้อมูลสินค้ากลางที่เก็บชื่อภาษาไทยและอังกฤษ รายละเอียด รูปภาพ สเปก บาร์โค้ด ราคา และข้อมูลตามข้อกำหนด มีขั้นตอนอนุมัติเพื่อไม่ให้อะไรขึ้นระบบโดยไม่ผ่านการตรวจ และส่งออกตามเทมเพลตของแต่ละมาร์เก็ตเพลสและร้านค้าปลีก เปิดตัวสินค้าใหม่ได้เร็วขึ้นเพราะข้อมูลถูกจัดเป็นระเบียบไว้แล้ว' },
    { icon: 'ti-tag', title: 'เครื่องมือจัดโปรโมชันและราคา', desc: 'เครื่องมือวางแผนที่จำลองว่าส่วนลดหรือโปรโมชันกับร้านค้าจะกระทบยอดขายและกำไรอย่างไร ก่อนตัดสินใจจริง ทีมเทียบหลายสถานการณ์ ดูผลหลังจบโปรโมชันเทียบกับแผน และเรียนรู้ว่าข้อเสนอแบบไหนคุ้ม เหมาะกับผู้จัดการหมวดสินค้าและฝ่ายรายได้ที่ตอนนี้ทำเรื่องนี้ในสเปรดชีต' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Shopify APIs', 'Algolia', 'Machine Learning', 'PostgreSQL', 'Redis', 'AWS', 'GraphQL', 'Stripe', 'Elasticsearch', 'NestJS']

  const useCases = isEN ? [
    { no: '01', title: 'DTC Storefront Platform', desc: 'A DTC storefront built to convert, with subscriptions, bundles and loyalty built in. Orders sync to inventory, and customers can check out with PromptPay or a card in a few taps. Deliverables include design, the storefront, payment and shipping integrations, and analytics set up for your marketing team.' },
    { no: '02', title: 'Loyalty & Rewards App', desc: 'A tiered membership app with points, referrals and offers tailored to each member. It connects to your point-of-sale and online orders so points appear no matter where the purchase happened. The team sees redemption and repeat-purchase reports to judge which rewards work.' },
    { no: '03', title: 'Demand-Forecasting System', desc: 'A forecasting platform that predicts demand by SKU across DTC, retail and distributor channels. It feeds production and purchasing plans, highlights items at risk of running out or overstocking, and records how each forecast compares with reality. We usually pilot on your top-selling products before widening the range.' },
  ] : [
    { no: '01', title: 'แพลตฟอร์มหน้าร้านออนไลน์ของแบรนด์', desc: 'หน้าร้านออนไลน์ของแบรนด์ที่ออกแบบให้ปิดการขายได้ดี มีระบบสมัครสั่งซื้อประจำ ชุดสินค้า และสะสมแต้มในตัว ออเดอร์ซิงก์เข้าสต็อก และลูกค้าจ่ายด้วย PromptPay หรือบัตรได้ในไม่กี่แตะ งานที่ส่งมอบรวมงานออกแบบ ตัวหน้าร้าน การเชื่อมระบบชำระเงินและขนส่ง และการตั้งค่า Analytics ให้ทีมการตลาด' },
    { no: '02', title: 'แอปสะสมแต้มและรางวัล', desc: 'แอปสมาชิกแบบแบ่งระดับที่มีแต้ม การชวนเพื่อน และข้อเสนอที่ปรับให้เหมาะกับสมาชิกแต่ละคน เชื่อมกับระบบ POS และออเดอร์ออนไลน์ แต้มจึงเข้าไม่ว่าจะซื้อที่ไหน ทีมดูรายงานการแลกรางวัลและการซื้อซ้ำเพื่อประเมินว่ารางวัลแบบไหนได้ผล' },
    { no: '03', title: 'ระบบพยากรณ์ความต้องการซื้อ', desc: 'แพลตฟอร์มพยากรณ์ที่ทำนายความต้องการซื้อรายสินค้าข้ามช่องทาง DTC ร้านค้าปลีก และตัวแทนจำหน่าย ส่งข้อมูลเข้าแผนผลิตและจัดซื้อ ชี้สินค้าที่เสี่ยงขาดหรือล้นสต็อก และบันทึกว่าแต่ละครั้งที่พยากรณ์ผลต่างจากความจริงเท่าไหร่ เรามักเริ่มทดลองกับสินค้าขายดีก่อนแล้วค่อยขยาย' },
  ]

  const heroVisual = <IndustryHero kind="consumer-goods" isEN={isEN} />

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
                  {isEN ? 'Consumer' : 'สินค้า'}<br />{isEN ? 'Goods' : 'อุปโภคบริโภค'}
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
                  ? 'A consumer brand rarely sells through one door. The same product moves through your own website, marketplaces, convenience and hypermarket chains, and distributors, and each channel reports its own numbers in its own format. We build DTC e-commerce platforms, loyalty and membership apps, retail and distribution dashboards, AI demand-forecasting systems, product information management and pricing tools that pull those pieces together. In Thailand that usually means working with LINE Official Account, PromptPay and cash-on-delivery habits, marketplace feeds, PDPA-compliant consent for marketing, and a mix of modern and traditional trade. We begin with the decisions your team makes every week and build the data flow backwards from there.'
                  : 'แบรนด์สินค้าอุปโภคบริโภคแทบไม่เคยขายผ่านช่องทางเดียว สินค้าตัวเดียวกันไปได้ทั้งเว็บไซต์ของแบรนด์เอง มาร์เก็ตเพลส ร้านสะดวกซื้อและไฮเปอร์มาร์เก็ต และตัวแทนจำหน่าย แต่ละช่องทางก็รายงานตัวเลขในรูปแบบของตัวเอง เรารับสร้างแพลตฟอร์ม DTC E-commerce แอปสะสมแต้มและสมาชิก แดชบอร์ดการขายปลีกและการกระจายสินค้า ระบบ AI พยากรณ์ความต้องการซื้อ ระบบจัดการข้อมูลสินค้า (PIM) และเครื่องมือจัดการราคา ที่ดึงทุกอย่างมารวมกัน ในไทยงานแบบนี้มักต้องทำงานกับ LINE Official Account การจ่ายด้วย PromptPay และการเก็บเงินปลายทาง ฟีดสินค้าจากมาร์เก็ตเพลส การขอความยินยอมทางการตลาดตาม PDPA และช่องทางขายทั้งแบบโมเดิร์นเทรดและเทรดดิชันนัล เราเริ่มจากการตัดสินใจที่ทีมของคุณทำทุกสัปดาห์ แล้วไล่ออกแบบการไหลของข้อมูลย้อนกลับไปจากตรงนั้น'}
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
