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
  const title = isEN ? "Retail & E-commerce Software & Digital Solutions | Haliviq" : "ค้าปลีกและอีคอมเมิร์ซ | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Online stores, stock systems, loyalty programmes, and marketplaces for retailers and brands that sell across web, app, LINE, and physical shops."
    : "หน้าร้านออนไลน์ ระบบสต็อก โปรแกรมสะสมแต้ม และ Marketplace สำหรับผู้ค้าปลีกและแบรนด์ที่ขายทั้งบนเว็บ แอป LINE และหน้าร้านจริง"
  const url = `https://www.haliviq.com/${params.lang}/industries/retail`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Retail & E-commerce' : 'อุตสาหกรรม / ค้าปลีกและอีคอมเมิร์ซ'
  const heroSubhead = isEN
    ? 'Online stores, stock systems, loyalty programmes, and marketplaces for retailers and brands that sell across web, app, LINE, and physical shops.'
    : 'หน้าร้านออนไลน์ ระบบสต็อก โปรแกรมสะสมแต้ม และ Marketplace สำหรับผู้ค้าปลีกและแบรนด์ที่ขายทั้งบนเว็บ แอป LINE และหน้าร้านจริง'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Omnichannel Complexity', desc: 'A Thai shop often sells through its own website, a LINE Official Account, Shopee and Lazada, social media chats, and a few physical branches. Each channel keeps its own stock count, price, and customer list, so a product sells out on one and stays listed on another. We connect these channels around one inventory and one customer record, so staff stop updating five places and customers see the same price and availability wherever they shop.' },
    { icon: 'ti-user-check', title: 'Customer Retention Pressure', desc: 'Ads cost more every year, and shoppers compare prices across marketplaces in seconds, so the customers you already have are your cheapest source of sales. Yet many shops cannot say who bought twice, who has gone quiet for three months, or what a loyal customer usually buys. We build the customer record and the follow-up tools, such as points, LINE messages timed to the last purchase, and restock reminders, so repeat buying becomes something you plan, not something you hope for.' },
    { icon: 'ti-atom-2', title: 'Inventory Management Complexity', desc: 'Stock is spread over a central warehouse, branch shelves, and boxes waiting at a courier. Sales spike around payday, double-date campaigns such as 11.11 and 12.12, and holidays, and then the wrong sizes are left in the wrong shops. We build stock tracking that updates with every sale and return, flags items about to run out, and suggests moving stock between branches before you lose the sale.' },
    { icon: 'ti-truck', title: 'Last-Mile Delivery Expectations', desc: 'Shoppers in Thailand are used to fast and cheap delivery and cash on delivery, and they judge a shop by how quickly the parcel arrives. Meanwhile failed deliveries and returns eat into margin. We connect checkout to the couriers you use, such as Kerry, Flash, J&T, or Thailand Post, with live rates, label printing, and tracking links sent by LINE, and we add COD handling and a clear return flow.' },
  ] : [
    { icon: 'ti-affiliate', title: 'ความซับซ้อนของการขายหลายช่องทาง', desc: 'ร้านในไทยหลายร้านขายผ่านเว็บไซต์ของตัวเอง LINE Official Account Shopee กับ Lazada แชตโซเชียล และสาขาหน้าร้านพร้อมกัน แต่ละช่องทางเก็บสต็อก ราคา และรายชื่อลูกค้าแยกกัน ของหมดที่ช่องหนึ่งแต่อีกช่องยังขายอยู่ เราเชื่อมทุกช่องทางเข้ากับสต็อกชุดเดียวและข้อมูลลูกค้าชุดเดียว พนักงานจะไม่ต้องไล่แก้ห้าที่ และลูกค้าเห็นราคากับสต็อกตรงกันไม่ว่าจะซื้อที่ไหน' },
    { icon: 'ti-user-check', title: 'แรงกดดันในการรักษาลูกค้า', desc: 'ค่าโฆษณาแพงขึ้นทุกปี ลูกค้าก็เทียบราคาข้ามแพลตฟอร์มได้ในไม่กี่วินาที ลูกค้าเดิมของคุณจึงเป็นทางขายที่ถูกที่สุด แต่หลายร้านยังบอกไม่ได้เลยว่าใครซื้อซ้ำ ใครเงียบไปสามเดือน หรือลูกค้าประจำมักซื้ออะไร เราสร้างข้อมูลลูกค้าและเครื่องมือตามต่อให้ ทั้งแต้มสะสม ข้อความ LINE ที่ส่งตามช่วงหลังซื้อครั้งล่าสุด และแจ้งเตือนสั่งของซ้ำ การซื้อซ้ำจะเป็นสิ่งที่วางแผนได้ ไม่ใช่รอลุ้น' },
    { icon: 'ti-atom-2', title: 'ความซับซ้อนของการจัดการสต็อก', desc: 'สต็อกกระจายอยู่ทั้งคลังกลาง ชั้นวางหน้าร้านแต่ละสาขา และกล่องที่รอขนส่งมารับ ยอดขายพุ่งช่วงวันเงินเดือนออก แคมเปญวันเลขเบิ้ลอย่าง 11.11 กับ 12.12 และวันหยุดยาว พอจบก็เหลือไซส์ผิดอยู่ผิดสาขา เราทำระบบสต็อกที่อัปเดตทุกครั้งที่ขายและรับคืน เตือนสินค้าที่ใกล้หมด และแนะนำให้ย้ายของระหว่างสาขาก่อนจะเสียยอดขายไป' },
    { icon: 'ti-truck', title: 'ความคาดหวังเรื่องการส่งช่วงสุดท้าย', desc: 'ลูกค้าไทยชินกับการส่งเร็ว ราคาถูก และเก็บเงินปลายทาง แล้วตัดสินร้านจากความเร็วที่พัสดุมาถึง ขณะที่พัสดุตีกลับและของรับคืนกินกำไรไปเรื่อย ๆ เราเชื่อมหน้าชำระเงินกับขนส่งที่คุณใช้ เช่น Kerry Flash J&T หรือไปรษณีย์ไทย ดึงค่าส่งสด พิมพ์ใบปะหน้า ส่งลิงก์ติดตามพัสดุทาง LINE พร้อมจัดการเก็บเงินปลายทางและขั้นตอนรับคืนสินค้าให้ชัดเจน' },
  ]

  const metrics = [
    { value: '$8.1T', label: isEN ? 'Global E-commerce Sales by 2026' : 'ยอดขาย E-commerce ทั่วโลกภายในปี 2026', source: 'eMarketer Global E-commerce Forecast, 2024' },
    { value: '3.5x', label: isEN ? 'Higher Conversion Rate with Personalized Shopping Experiences' : 'Conversion Rate ที่สูงขึ้นเมื่อประสบการณ์ช้อปปิ้งตรงใจลูกค้า', source: 'McKinsey Retail Personalization, 2024' },
    { value: '30%', label: isEN ? 'Higher Customer Lifetime Value for Omnichannel Shoppers' : 'Customer Lifetime Value ที่สูงขึ้นของลูกค้าที่ซื้อหลายช่องทาง', source: 'Harvard Business Review Retail Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shopping-cart', title: 'Headless Commerce Platforms', desc: 'A commerce backend that holds products, prices, carts, and orders, with a separate storefront on top built with Next.js. It suits brands that want a fast, distinctive site, plus an app or a LINE shopping page, all drawing from one catalogue. You keep the freedom to change the design later without rebuilding the order system underneath.' },
    { icon: 'ti-package', title: 'Inventory Management Systems', desc: 'Stock tracking by warehouse, branch, and batch, with barcode scanning for receiving and picking. It updates after every online and in-store sale, handles returns, and warns when a product reaches its reorder point. Buyers and store managers see the numbers they need on their phones.' },
    { icon: 'ti-sparkles', title: 'Personalization Engines', desc: 'Product recommendations, "bought together" suggestions, and search that learns from what customers click and buy. We start with simple rules and your own sales data, and add machine learning only when there is enough traffic for it to help. The result is a shop where the first products a shopper sees are more likely to be ones they want.' },
    { icon: 'ti-affiliate', title: 'Omnichannel Integration', desc: 'Connectors that sync stock, prices, promotions, and orders between your store, Shopee, Lazada, your POS, and your accounting system. Orders from every channel land in one queue for packing, and customers get one profile whether they buy online or at the counter. We also support Thai tax invoices and e-Tax invoice requirements where your business needs them.' },
    { icon: 'ti-gift', title: 'Loyalty Program Platforms', desc: 'Points, member tiers, birthday offers, and coupons that work across web, app, and in-store, with members identified by phone number or a LINE login. You set the rules, for example points per baht, expiry, and tier thresholds, and see which offers actually bring members back. Built with PDPA consent for marketing messages from the start.' },
    { icon: 'ti-building-store', title: 'Multi-Vendor Marketplaces', desc: 'A marketplace where many sellers list products under one storefront. It covers seller sign-up and verification, product approval, split orders, commission rules, payouts, and an admin console for disputes and refunds. Suitable for mall operators, community-commerce groups, and brands that want to open their platform to partners.' },
  ] : [
    { icon: 'ti-shopping-cart', title: 'Headless Commerce Platforms', desc: 'ระบบหลังบ้านที่เก็บสินค้า ราคา ตะกร้า และออเดอร์ โดยมีหน้าร้านแยกอีกชั้นที่สร้างด้วย Next.js เหมาะกับแบรนด์ที่อยากได้เว็บเร็วและมีเอกลักษณ์ รวมถึงแอปหรือหน้าช้อปบน LINE ที่ดึงสินค้าจากแคตตาล็อกเดียวกัน ภายหลังอยากเปลี่ยนดีไซน์ก็ทำได้ โดยไม่ต้องรื้อระบบออเดอร์ข้างใต้' },
    { icon: 'ti-package', title: 'Inventory Management Systems', desc: 'ติดตามสต็อกแยกตามคลัง สาขา และล็อต สแกนบาร์โค้ดตอนรับของและหยิบสินค้า อัปเดตทุกครั้งที่ขายทั้งออนไลน์และหน้าร้าน รองรับของรับคืน และเตือนเมื่อสินค้าถึงจุดที่ต้องสั่งเพิ่ม ฝ่ายจัดซื้อและผู้จัดการร้านเปิดดูตัวเลขที่ต้องใช้บนมือถือได้' },
    { icon: 'ti-sparkles', title: 'Personalization Engines', desc: 'ระบบแนะนำสินค้า ชุดสินค้าที่คนมักซื้อด้วยกัน และการค้นหาที่เรียนรู้จากสิ่งที่ลูกค้ากดและซื้อ เราเริ่มจากกฎง่าย ๆ กับข้อมูลยอดขายของคุณเอง แล้วค่อยเพิ่ม Machine Learning เมื่อมีทราฟฟิกมากพอจนช่วยได้จริง ลูกค้าจะเห็นสินค้าที่น่าจะอยากได้เป็นอย่างแรก ๆ ตั้งแต่เข้าร้าน' },
    { icon: 'ti-affiliate', title: 'Omnichannel Integration', desc: 'ตัวเชื่อมที่ซิงค์สต็อก ราคา โปรโมชัน และออเดอร์ ระหว่างหน้าร้านออนไลน์ Shopee Lazada ระบบ POS และระบบบัญชี ออเดอร์จากทุกช่องทางเข้าคิวแพ็กของเดียวกัน และลูกค้าจะมีโปรไฟล์เดียวไม่ว่าจะซื้อออนไลน์หรือที่เคาน์เตอร์ เรายังรองรับใบกำกับภาษีและ e-Tax invoice ตามที่ธุรกิจคุณต้องใช้' },
    { icon: 'ti-gift', title: 'Loyalty Program Platforms', desc: 'แต้มสะสม ระดับสมาชิก ข้อเสนอวันเกิด และคูปอง ที่ใช้ได้ทั้งเว็บ แอป และหน้าร้าน ระบุตัวสมาชิกด้วยเบอร์โทรหรือล็อกอินผ่าน LINE คุณกำหนดกติกาเองได้ เช่น กี่บาทต่อหนึ่งแต้ม แต้มหมดอายุเมื่อไหร่ และต้องใช้จ่ายเท่าไหร่ถึงขึ้นระดับ แล้วดูได้ว่าข้อเสนอไหนดึงสมาชิกกลับมาจริง เราวางระบบขอความยินยอมตาม PDPA สำหรับข้อความการตลาดไว้ตั้งแต่ต้น' },
    { icon: 'ti-building-store', title: 'Multi-Vendor Marketplaces', desc: 'Marketplace ที่มีผู้ขายหลายรายลงสินค้าภายใต้หน้าร้านเดียว ครอบคลุมการสมัครและตรวจสอบผู้ขาย การอนุมัติสินค้า การแยกออเดอร์ ค่าคอมมิชชัน การโอนเงินให้ผู้ขาย และหน้าแอดมินสำหรับจัดการข้อพิพาทและคืนเงิน เหมาะกับผู้ดำเนินการห้างสรรพสินค้า กลุ่มชุมชนที่ขายของร่วมกัน และแบรนด์ที่อยากเปิดแพลตฟอร์มให้พาร์ตเนอร์มาขาย' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Medusa.js', 'Shopify APIs', 'Stripe', 'Algolia', 'Redis', 'PostgreSQL', 'Machine Learning', 'AWS', 'Elasticsearch', 'GraphQL', 'Flutter', 'Hono']

  const useCases = isEN ? [
    { no: '01', title: 'Headless Commerce Platform', desc: 'One commerce backend feeding a Next.js website, a mobile app, and a LINE shopping page. Catalogue, stock, pricing rules, and checkout live in one place, so a price change or a new campaign goes live on every storefront together. Fits brands that have outgrown a templated store and want control over speed and design.' },
    { no: '02', title: 'Personalized Shopping Experience', desc: 'A storefront that reorders products, search results, and banners based on what each visitor has viewed and bought, and a returning customer sees a "buy again" row on the home page. We test each change against the plain version, so you can see whether it raised orders or just looked clever. Good for stores with a wide catalogue and a lot of repeat buyers, such as beauty, grocery, and fashion.' },
    { no: '03', title: 'Inventory Optimization System', desc: 'A forecasting and allocation tool that looks at sales by branch, season, and campaign, then suggests how much to order and where to send it. It highlights slow stock to mark down, and fast stock to protect. Starting with a clear dashboard and a weekly suggestion list works better than a black box, so buyers can check the reasoning before acting.' },
  ] : [
    { no: '01', title: 'Headless Commerce Platform', desc: 'ระบบหลังบ้านเดียวที่ป้อนข้อมูลให้เว็บไซต์ Next.js แอปมือถือ และหน้าช้อปบน LINE แคตตาล็อก สต็อก กฎราคา และขั้นตอนชำระเงินอยู่ที่เดียว เปลี่ยนราคาหรือเปิดแคมเปญใหม่แล้วขึ้นพร้อมกันทุกหน้าร้าน เหมาะกับแบรนด์ที่โตเกินเทมเพลตสำเร็จรูปและอยากคุมทั้งความเร็วและดีไซน์เอง' },
    { no: '02', title: 'Personalized Shopping Experience', desc: 'หน้าร้านที่สลับลำดับสินค้า ผลการค้นหา และแบนเนอร์ตามสิ่งที่ผู้เข้าชมแต่ละคนเคยดูและเคยซื้อ ลูกค้าเก่ากลับมาก็เห็นแถว "ซื้อซ้ำ" ตั้งแต่หน้าแรก เราทดสอบทุกการเปลี่ยนแปลงเทียบกับแบบปกติ คุณจะเห็นว่าออเดอร์เพิ่มขึ้นจริงหรือแค่ดูเก๋ เหมาะกับร้านที่มีสินค้าหลากหลายและมีลูกค้าซื้อซ้ำมาก เช่น ความงาม ของใช้ในครัวเรือน และแฟชั่น' },
    { no: '03', title: 'Inventory Optimization System', desc: 'เครื่องมือพยากรณ์และจัดสรรสต็อกที่ดูยอดขายแยกสาขา ฤดูกาล และแคมเปญ แล้วแนะนำว่าควรสั่งเท่าไหร่และส่งไปไหน ชี้ของที่ขายช้าให้ลดราคา และของที่ขายเร็วให้เก็บไว้ให้พอ เราเริ่มจากแดชบอร์ดที่อ่านง่ายกับรายการแนะนำรายสัปดาห์ ซึ่งดีกว่ากล่องดำ เพราะฝ่ายจัดซื้อตรวจเหตุผลได้ก่อนตัดสินใจ' },
  ]

  const heroVisual = <IndustryHero kind="retail" isEN={isEN} />

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
                  {isEN ? 'Retail &' : 'ค้าปลีก &'}<br />{isEN ? 'E-commerce' : 'อีคอมเมิร์ซ'}
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
                  ? 'We build the systems behind online and omnichannel retail: headless storefronts, stock and order management, loyalty programmes, and marketplaces. Most projects start by listing every place a sale can happen, such as your website, LINE, Shopee, Lazada, and branches, and every place the same product is counted. From there we design checkout around how Thai shoppers pay and receive, with PromptPay QR, cards, cash on delivery, and the couriers you already use. You end up with one view of stock and customers, a storefront that loads fast on a mid-range phone, and a team that no longer updates five systems by hand.'
                : 'เราสร้างระบบเบื้องหลังร้านค้าปลีกออนไลน์และหลายช่องทาง ทั้งหน้าร้านแบบ Headless ระบบสต็อกและออเดอร์ โปรแกรมสะสมแต้ม และ Marketplace โปรเจกต์ส่วนใหญ่เริ่มจากไล่ดูกับคุณว่าขายได้ที่ไหนบ้าง เช่น เว็บไซต์ LINE Shopee Lazada และสาขา และสินค้าชิ้นเดียวกันถูกนับอยู่กี่ที่ จากนั้นเราออกแบบหน้าชำระเงินให้ตรงกับวิธีจ่ายและรับของของคนไทย ทั้ง PromptPay QR บัตร เก็บเงินปลายทาง และขนส่งที่คุณใช้อยู่แล้ว ผลที่ได้คือมองเห็นสต็อกและลูกค้าในที่เดียว หน้าร้านที่โหลดเร็วบนมือถือรุ่นกลาง ๆ และทีมที่ไม่ต้องไล่อัปเดตห้าระบบด้วยมืออีก'}
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
                ? 'Four things retail and e-commerce teams in Thailand tell us hold them back, and what is behind each one.'
                : 'สี่เรื่องที่ทีมค้าปลีกและอีคอมเมิร์ซในไทยบอกเราว่าเป็นตัวถ่วง และสาเหตุเบื้องหลังของแต่ละเรื่อง'}
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
              {isEN ? 'The systems we build for shops and brands, and what each one changes for your team and your shoppers.' : 'ระบบที่เราสร้างให้ร้านค้าและแบรนด์ พร้อมอธิบายว่าแต่ละตัวช่วยเปลี่ยนงานของทีมและประสบการณ์ของลูกค้าอย่างไร'}
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
                ? 'Tools we pick for storefronts, search, payments, and data because they are well supported and easy to hand over to your own developers.'
                : 'เครื่องมือที่เราเลือกใช้กับหน้าร้าน การค้นหา การชำระเงิน และข้อมูล เพราะมีคนใช้มาก หาความช่วยเหลือง่าย และส่งต่อให้ทีมพัฒนาของคุณดูแลต่อได้สะดวก'}
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
              {isEN ? 'Three typical projects, described by what gets built, who uses it, and what changes on the shop floor and in the warehouse.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ เล่าให้ฟังว่าสร้างอะไร ใครเป็นคนใช้ และงานหน้าร้านกับหลังร้านเปลี่ยนไปอย่างไร'}
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
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้เลยว่าคุณกำลังทำอะไรอยู่'}
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
              <a href="mailto:info@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                info@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
