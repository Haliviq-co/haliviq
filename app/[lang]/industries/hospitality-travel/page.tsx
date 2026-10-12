import Link from 'next/link'
import TechGlyph from '@/components/TechGlyph'
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
  const title = isEN ? "Hospitality & Travel Software & Digital Solutions | Haliviq" : "การบริการและการท่องเที่ยว | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Booking, front-desk, and guest-service software for hotels, resorts, and travel brands that want more direct bookings and fewer manual steps."
    : "ซอฟต์แวร์จอง งานหน้าเคาน์เตอร์ และบริการผู้เข้าพัก สำหรับโรงแรม รีสอร์ต และแบรนด์ท่องเที่ยวที่อยากได้ยอดจองตรงมากขึ้น และมีงานพิมพ์มือน้อยลง"
  const url = `https://haliviq.com/${params.lang}/industries/hospitality-travel`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Hospitality & Travel' : 'อุตสาหกรรม / การบริการและการท่องเที่ยว'
  const heroSubhead = isEN
    ? 'Booking, front-desk, and guest-service software for hotels, resorts, and travel brands that want more direct bookings and fewer manual steps.'
    : 'ซอฟต์แวร์จอง งานหน้าเคาน์เตอร์ และบริการผู้เข้าพัก สำหรับโรงแรม รีสอร์ต และแบรนด์ท่องเที่ยวที่อยากได้ยอดจองตรงมากขึ้น และมีงานพิมพ์มือน้อยลง'

  const challenges = isEN ? [
    { icon: 'ti-star', title: 'Elevated Guest Expectations', desc: 'Guests book on a phone, compare three sites, and expect the hotel to know who they are when they arrive. They want to check in without queuing, ask for towels or a late checkout by message, and pay the way they prefer, whether that is a card, PromptPay, or a wallet. When any of these steps needs a phone call or a paper form, it tends to end up in a review. We begin by finding the two or three moments where your guests currently wait or repeat themselves, and fix those first.' },
    { icon: 'ti-refresh', title: 'Operational Inefficiency', desc: 'Plenty of properties run the booking engine, PMS, channel manager, housekeeping notes, and guest chat as separate tools, so the same booking is typed in two or three times. The front desk reconciles numbers by hand, housekeeping hears about a late checkout through a shouted message, and finance closes the month from several spreadsheets. We map every place where data is copied manually and either connect or replace those points, so each fact is entered once and everyone sees the same thing.' },
    { icon: 'ti-calendar', title: 'Seasonal Demand Volatility', desc: 'Occupancy in Thailand moves with high season, long weekends, school holidays, and festivals such as Songkran, so a room priced the same all year either sells out too cheaply or sits empty. Rates, promotions, minimum stays, and staff rosters all need to follow demand. We build pricing rules and booking-pace reports that compare this year with last, so your revenue manager can adjust weeks ahead instead of reacting on the day.' },
    { icon: 'ti-user', title: 'Persistent Staff Shortages', desc: 'Hotels find it hard to hire and keep front-desk, reservation, and housekeeping staff, especially in peak months. Self-service for routine requests, such as check-in, invoices, extra amenities, and luggage storage, frees your team for the guests who really need a person. We design these flows in Thai and English, and in other languages where your guest mix calls for it, so staff are not translating all day.' },
  ] : [
    { icon: 'ti-star', title: 'ผู้เข้าพักคาดหวังสูงขึ้น', desc: 'แขกจองผ่านมือถือ เปรียบเทียบสามเว็บ แล้วคาดหวังว่าโรงแรมจะรู้ว่าเขาคือใครตอนมาถึง เขาอยากเช็กอินโดยไม่ต้องต่อคิว ขอผ้าเช็ดตัวหรือเลทเช็กเอาต์ผ่านแชต และจ่ายเงินแบบที่สะดวก จะเป็นบัตร PromptPay หรือวอลเล็ตก็ตาม ถ้าขั้นตอนไหนต้องโทรหรือกรอกกระดาษ มักไปจบที่รีวิว เราเริ่มจากหาให้เจอว่าแขกของคุณต้องรอหรือต้องบอกซ้ำตรงจุดไหนบ้าง แล้วแก้สองสามจุดนั้นก่อน' },
    { icon: 'ti-refresh', title: 'การทำงานที่ไม่คล่องตัว', desc: 'หลายที่พักใช้ระบบจอง PMS Channel Manager โน้ตแม่บ้าน และแชตกับแขกแยกกัน การจองรายการเดียวเลยถูกพิมพ์สองสามรอบ เคาน์เตอร์ต้องนั่งเทียบตัวเลขเอง แม่บ้านรู้ว่ามีเลทเช็กเอาต์จากข้อความที่ตะโกนบอก และฝ่ายบัญชีปิดเดือนจากสเปรดชีตหลายไฟล์ เราไล่ดูทุกจุดที่ต้องคัดลอกข้อมูลด้วยมือ แล้วเชื่อมหรือเปลี่ยนจุดเหล่านั้น เพื่อให้กรอกข้อมูลครั้งเดียวและทุกคนเห็นตรงกัน' },
    { icon: 'ti-calendar', title: 'ความต้องการที่ขึ้นลงตามฤดูกาล', desc: 'ห้องพักในไทยเต็มไม่เท่ากันตลอดปี ขึ้นกับไฮซีซัน วันหยุดยาว ปิดเทอม และเทศกาลอย่างสงกรานต์ ถ้าตั้งราคาเท่ากันทั้งปี ห้องก็จะขายหมดเร็วเกินไปในราคาถูก หรือไม่ก็ว่างเปล่า ราคา โปรโมชัน จำนวนคืนขั้นต่ำ และตารางพนักงานต้องขยับตามความต้องการ เราทำกฎการตั้งราคาและรายงานจังหวะการจอง ที่เทียบปีนี้กับปีก่อน เพื่อให้ฝ่ายดูแลรายได้ปรับราคาล่วงหน้าได้เป็นสัปดาห์ ไม่ต้องมานั่งแก้กันหน้างาน' },
    { icon: 'ti-user', title: 'ขาดแคลนพนักงานเรื้อรัง', desc: 'โรงแรมหาและรักษาพนักงานเคาน์เตอร์ ฝ่ายจอง และแม่บ้านได้ยาก โดยเฉพาะช่วงไฮซีซัน ถ้างานที่ทำซ้ำทุกวัน เช่น เช็กอิน ขอใบเสร็จ ขอของเพิ่ม หรือฝากกระเป๋า ให้แขกทำเองได้ ทีมก็มีเวลาดูแลแขกที่ต้องการคนจริง ๆ มากขึ้น เราออกแบบขั้นตอนเหล่านี้ให้ใช้ได้ทั้งไทยและอังกฤษ และภาษาอื่นถ้ากลุ่มแขกของคุณต้องการ พนักงานจะได้ไม่ต้องเป็นล่ามทั้งวัน' },
  ]

  const metrics = [
    { value: '$24.3B', label: isEN ? 'Global Hospitality Technology Market by 2028' : 'ขนาดตลาดเทคโนโลยีธุรกิจโรงแรมและท่องเที่ยวทั่วโลกภายในปี 2028', source: 'Mordor Intelligence, 2024' },
    { value: '72%', label: isEN ? 'Hotel Bookings Made on Mobile Devices' : 'การจองโรงแรมที่ทำผ่านมือถือ', source: 'Phocuswright Travel Research, 2024' },
    { value: '23%', label: isEN ? 'Revenue Uplift from Personalized Guest Experiences' : 'รายได้ที่เพิ่มขึ้นจากการดูแลผู้เข้าพักแบบเฉพาะบุคคล', source: 'Deloitte Hospitality Insights, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-calendar-event', title: 'Booking Engine Platforms', desc: 'A booking engine on your own website, so guests can book at your best rate without going through an agent. It shows live availability, supports packages and promo codes, handles deposits and full payment by card or PromptPay, and sends confirmations in the guest\'s language. Built for phones first, since that is where most hotel searches begin.' },
    { icon: 'ti-building', title: 'Property Management Systems', desc: 'A central PMS covering reservations, room assignment, housekeeping status, maintenance tickets, guest profiles, and invoicing, for one property or several. Front desk, housekeeping, and finance each see the screens they need, and a manager can look across all properties at once. We can build it new or extend the PMS you already run.' },
    { icon: 'ti-bell', title: 'Guest Engagement Tools', desc: 'Apps and web tools that let guests message the hotel, request services, see opening hours, and get local tips, with requests landing in the right staff queue. Where guests already use LINE, we can offer the same service there, so nobody has to download an app for a three-night stay.' },
    { icon: 'ti-trending-up', title: 'Revenue Optimization Systems', desc: 'Pricing and revenue tools that look at booking pace, past seasons, local events, and competitor rates, then suggest room rates and minimum stays. Your revenue manager stays in charge: the system explains each suggestion, and you decide whether to accept it.' },
    { icon: 'ti-wifi', title: 'Contactless Experience Solutions', desc: 'Online check-in, digital room keys, and cashless payment so a guest can go straight to the room. Staff still have a clear screen for ID checks and special cases, and the flow works with the lock hardware your property already has where it supports it.' },
    { icon: 'ti-plug-connected', title: 'Channel Manager & OTA Integration', desc: 'Many Thai hotels sell most of their rooms through online travel agents, each with its own extranet, rate plans, and cancellation rules. We connect your PMS and booking engine to the channel manager you already use, or build the connection if you do not have one, so availability and rates stay in step across every channel. That cuts overbookings, removes the nightly copy-and-paste, and makes it clear which channel is actually earning you money after commission.' },
  ] : [
    { icon: 'ti-calendar-event', title: 'Booking Engine Platforms', desc: 'ระบบจองบนเว็บไซต์ของคุณเอง ให้แขกจองได้ในราคาดีที่สุดโดยไม่ต้องผ่านเอเจนต์ แสดงห้องว่างตามจริง รองรับแพ็กเกจและโค้ดส่วนลด รับมัดจำหรือชำระเต็มจำนวนผ่านบัตรหรือ PromptPay และส่งใบยืนยันเป็นภาษาของแขก ออกแบบเพื่อมือถือเป็นหลัก เพราะคนส่วนใหญ่เริ่มหาโรงแรมจากมือถือ' },
    { icon: 'ti-building', title: 'Property Management Systems', desc: 'PMS กลางที่ดูแลการจอง การจัดห้อง สถานะห้องของแม่บ้าน งานแจ้งซ่อม ข้อมูลแขก และใบแจ้งหนี้ ได้ทั้งที่พักเดียวและหลายที่พัก ฝ่ายเคาน์เตอร์ แม่บ้าน และบัญชีเห็นหน้าจอที่ตัวเองต้องใช้ ส่วนผู้จัดการดูภาพรวมทุกที่พักพร้อมกันได้ เราสร้างใหม่ให้ หรือต่อยอดจาก PMS ที่คุณใช้อยู่ก็ได้' },
    { icon: 'ti-bell', title: 'Guest Engagement Tools', desc: 'แอปและเว็บให้แขกส่งข้อความหาโรงแรม ขอบริการ ดูเวลาเปิดของสิ่งอำนวยความสะดวก และดูคำแนะนำร้านหรือที่เที่ยวใกล้ที่พัก โดยคำขอจะไปเข้าคิวของพนักงานที่รับผิดชอบเลย ถ้าแขกของคุณใช้ LINE อยู่แล้ว เราทำบริการแบบเดียวกันบน LINE ได้ แขกที่พักสามคืนจะได้ไม่ต้องโหลดแอป' },
    { icon: 'ti-trending-up', title: 'Revenue Optimization Systems', desc: 'เครื่องมือตั้งราคาและดูแลรายได้ที่ดูจังหวะการจอง ฤดูกาลปีก่อน อีเวนต์ในพื้นที่ และราคาคู่แข่ง แล้วแนะนำราคาห้องและจำนวนคืนขั้นต่ำ คนตัดสินใจยังเป็นฝ่ายรายได้ของคุณ ระบบจะอธิบายเหตุผลของทุกคำแนะนำ แล้วคุณเลือกเองว่าจะใช้หรือไม่' },
    { icon: 'ti-wifi', title: 'Contactless Experience Solutions', desc: 'เช็กอินออนไลน์ กุญแจห้องดิจิทัล และจ่ายเงินแบบไม่ใช้เงินสด แขกเดินขึ้นห้องได้เลย ส่วนพนักงานยังมีหน้าจอที่ชัดเจนไว้ตรวจบัตรและจัดการกรณีพิเศษ และถ้าระบบล็อกประตูที่โรงแรมใช้อยู่รองรับ เราก็เชื่อมให้ใช้งานร่วมกันได้' },
    { icon: 'ti-plug-connected', title: 'Channel Manager & OTA Integration', desc: 'โรงแรมในไทยหลายแห่งขายห้องผ่านเอเจนต์ออนไลน์เป็นหลัก ซึ่งแต่ละเจ้ามีหน้าแอดมิน แผนราคา และเงื่อนไขยกเลิกไม่เหมือนกัน เราเชื่อม PMS และระบบจองของคุณเข้ากับ Channel Manager ที่ใช้อยู่แล้ว หรือทำตัวเชื่อมให้ถ้ายังไม่มี เพื่อให้ห้องว่างและราคาตรงกันทุกช่องทาง ลดปัญหาห้องซ้อน เลิกนั่งคัดลอกตัวเลขทุกคืน และเห็นชัดว่าช่องทางไหนทำเงินให้จริงหลังหักค่าคอมมิชชัน' },
  ]

  const techStack = ['React', 'React Native', 'Node.js', 'Redis', 'Elasticsearch', 'AWS', 'Stripe', 'Google Maps API', 'IoT', 'Machine Learning']

  const useCases = isEN ? [
    { no: '01', title: 'Direct Booking Engine', desc: 'A booking site built to turn visitors into reservations. Guests pick dates, see live rates for each room type, add breakfast or airport transfers, apply a promo code, and pay, with every step readable on a small screen. Reservations flow straight into your PMS, and your team gets a report showing how many people dropped off at which step. Best suited to independent hotels and resorts that want to rely less on agent commission.' },
    { no: '02', title: 'Guest Experience Mobile App', desc: 'A branded app or LINE-based experience for guests. Before arrival they complete check-in details; during the stay they open the door, request housekeeping, book a spa slot, or message staff; after checkout they receive the invoice. Staff see requests in one queue with timestamps, so nothing gets lost between shifts. Suitable for a single resort or a group of properties that share a guest base.' },
    { no: '03', title: 'Revenue Management System', desc: 'A pricing assistant for the person who sets your rates. It combines your booking history, current pace, local events, and competitor prices into a daily view with suggested rates, and keeps a log of what was changed and why. It is built to support revenue managers, not replace them, and it can start small, with a pricing dashboard, before moving to automatic rate pushes.' },
  ] : [
    { no: '01', title: 'Direct Booking Engine', desc: 'เว็บจองที่สร้างมาเพื่อเปลี่ยนคนเข้าชมให้เป็นการจองจริง แขกเลือกวันที่ ดูราคาสดของห้องแต่ละประเภท เพิ่มอาหารเช้าหรือรถรับส่งสนามบิน ใส่โค้ดส่วนลด แล้วจ่ายเงิน ทุกขั้นตอนอ่านง่ายบนจอเล็ก การจองไหลเข้า PMS เลย และทีมคุณจะได้รายงานว่ามีคนหลุดออกไปที่ขั้นตอนไหนมากที่สุด เหมาะกับโรงแรมและรีสอร์ตอิสระที่อยากพึ่งค่าคอมมิชชันเอเจนต์ให้น้อยลง' },
    { no: '02', title: 'Guest Experience Mobile App', desc: 'แอปแบรนด์ของคุณเองหรือบริการบน LINE สำหรับแขก ก่อนมาถึงแขกกรอกข้อมูลเช็กอินไว้ก่อน ระหว่างพักก็เปิดประตู ขอแม่บ้าน จองคิวสปา หรือส่งข้อความหาพนักงานได้ พอเช็กเอาต์ก็ได้รับใบแจ้งหนี้ ฝั่งพนักงานเห็นคำขอทั้งหมดในคิวเดียวพร้อมเวลา งานจึงไม่หลุดระหว่างเปลี่ยนกะ เหมาะกับรีสอร์ตแห่งเดียวหรือกลุ่มที่พักที่มีฐานแขกร่วมกัน' },
    { no: '03', title: 'Revenue Management System', desc: 'ผู้ช่วยตั้งราคาสำหรับคนที่ดูแลเรื่องราคาห้องของคุณ รวมประวัติการจอง จังหวะการจองตอนนี้ อีเวนต์ในพื้นที่ และราคาคู่แข่งมาไว้ในหน้าจอรายวัน พร้อมราคาที่แนะนำ และเก็บบันทึกว่าเปลี่ยนอะไรเพราะอะไร ระบบนี้ช่วยฝ่ายรายได้ ไม่ได้มาแทนเขา และเริ่มจากของเล็ก ๆ อย่างแดชบอร์ดราคาก่อน แล้วค่อยขยับไปส่งราคาอัตโนมัติทีหลังก็ได้' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>guest.key</span>
        </div>
        <div className="px-6 py-10 flex items-center justify-center gap-6">
          <div className="w-[150px] rounded-2xl p-5" style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
            <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: 'var(--lime)' }} />
            <p className="text-xs mb-1" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? 'Welcome back' : 'ยินดีต้อนรับ'}</p>
            <p className="mb-5" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.1rem' }}>{isEN ? 'Room 208' : 'ห้อง 208'}</p>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(123,110,246,0.25)' }}>
              <i className="ti ti-key" style={{ fontSize: 18, color: 'var(--accent)' }} aria-hidden="true" />
            </div>
            <p className="text-[10px] tracking-wide" style={{ color: 'rgb(var(--fg) / 0.4)' }}>{isEN ? 'Tap to unlock' : 'แตะเพื่อปลดล็อก'}</p>
          </div>
          <div className="relative w-[110px] h-[180px] rounded-lg" style={{ border: '2px solid var(--lime)', background: 'rgba(83,195,215,0.05)' }}>
            <span className="absolute top-3 left-0 right-0 text-center" style={{ color: 'var(--ink)', fontSize: '1.5rem', fontWeight: 600 }}>208</span>
            <i className="ti ti-wifi" style={{ position: 'absolute', left: 8, top: 60, fontSize: 22, color: 'var(--accent-2)', animation: 'iconFloat 2.2s ease-in-out infinite' }} aria-hidden="true" />
            <i className="ti ti-lock-open" style={{ position: 'absolute', right: 14, bottom: 20, fontSize: 22, color: 'var(--accent-2)' }} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )

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
                  {isEN ? 'Hospitality' : 'การบริการและ'}<br />{isEN ? '& Travel' : 'การท่องเที่ยว'}
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
                  ? 'We build the software behind a hotel or travel brand: direct booking engines, property management systems (PMS), guest apps, and pricing tools. A project usually starts by tracing how one reservation travels today, from your website or an online travel agent, through the front desk and housekeeping, to checkout, and then fixing the steps where staff retype data or guests have to ask twice. We design for how travel works in Thailand: high and low seasons, guests booking in several languages, payment by card or PromptPay, and teams that run more than one property from a single back office. What you get is a system your staff can learn in a shift and your guests can use without calling the front desk.'
                  : 'เราสร้างซอฟต์แวร์ที่อยู่เบื้องหลังโรงแรมและแบรนด์ท่องเที่ยว ทั้งระบบจองตรง ระบบจัดการที่พัก (PMS) แอปสำหรับผู้เข้าพัก และเครื่องมือช่วยตั้งราคา โปรเจกต์ส่วนใหญ่เริ่มจากการนั่งไล่ดูกับคุณว่าการจองหนึ่งรายการเดินทางผ่านใครบ้าง ตั้งแต่เว็บไซต์หรือเอเจนต์ออนไลน์ ไปจนถึงเคาน์เตอร์ แม่บ้าน และเช็กเอาต์ แล้วค่อยแก้จุดที่พนักงานต้องพิมพ์ข้อมูลซ้ำหรือแขกต้องถามซ้ำ เราออกแบบให้เข้ากับการท่องเที่ยวของไทย ทั้งไฮซีซันและโลว์ซีซัน แขกที่จองหลายภาษา การจ่ายผ่านบัตรหรือ PromptPay และทีมที่ดูแลหลายที่พักจากหลังบ้านเดียว ผลที่ได้คือระบบที่พนักงานเรียนรู้ได้ภายในไม่กี่กะ และแขกใช้เองได้โดยไม่ต้องโทรถามเคาน์เตอร์'}
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
                ? 'Four problems we hear from hotel and travel teams again and again, and why they keep coming back.'
                : 'สี่ปัญหาที่ทีมโรงแรมและธุรกิจท่องเที่ยวเล่าให้เราฟังบ่อยที่สุด และเหตุผลที่มันวนกลับมาเรื่อย ๆ'}
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
              {isEN ? 'The systems we build for hotels, resorts, and tour companies, and what each one changes for your team.' : 'ระบบที่เราสร้างให้โรงแรม รีสอร์ต และบริษัททัวร์ พร้อมอธิบายว่าแต่ละตัวช่วยเปลี่ยนวิธีทำงานของทีมคุณยังไง'}
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
                ? 'Tools we choose for booking, mobile, and data work because they are well documented and easy for your own team to take over later.'
                : 'เครื่องมือที่เราเลือกใช้กับงานจอง แอปมือถือ และข้อมูล เพราะมีเอกสารครบ และทีมของคุณรับช่วงดูแลต่อได้ง่าย'}
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
              {isEN ? 'Three typical projects, described by what gets built, who uses it, and what changes day to day.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ เล่าให้ฟังว่าสร้างอะไร ใครเป็นคนใช้ และการทำงานประจำวันเปลี่ยนไปยังไง'}
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
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
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
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังหน่อยว่าคุณกำลังทำอะไรอยู่'}
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
