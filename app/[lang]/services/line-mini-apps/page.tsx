import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  nextdotjs: { hex: '#FFFFFF', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  typescript: { hex: '#3178C6', path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
  react: { hex: '#61DAFB', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
  nodedotjs: { hex: '#5FA04E', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'LINE Mini App Development in Bangkok | Haliviq'
    : 'รับทำ LINE Mini App และ LINE OA กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'LINE Mini App and chat commerce development in Thailand: LIFF apps, Flex Message ordering, LINE Pay checkout and backend links to your POS and order system.'
    : 'Haliviq รับทำ LINE Mini App ด้วย LIFF ระบบสั่งซื้อผ่านแชท Flex Message และ LINE Pay เชื่อมกับ POS ระบบออเดอร์ และ CRM ให้ลูกค้าไทยซื้อได้โดยไม่ออกจาก LINE'
  const url = `https://www.haliviq.com/${params.lang}/services/line-mini-apps`
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
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Commerce / LINE Mini Apps'  : 'Commerce / LINE Mini Apps'
  const title    = isEN ? 'Meet Customers'  : 'พบลูกค้าตรงที่'
  const subtitle = isEN ? 'Where They Already Are: LINE'    : 'พวกเขาอยู่แล้ว: LINE'
  const heroDesc = isEN ? 'We build LINE Mini Apps, chat-based ordering, and Official Account setups so Thai customers can browse, ask a question, and pay without leaving the app that is already open on their phone. Behind the chat window we connect your catalog, stock, and order system, so what customers see matches what you can really deliver. It suits retailers, restaurants, clinics, and service brands whose customers already talk to them on LINE.'  : 'เราสร้าง LINE Mini App ระบบสั่งซื้อผ่านแชท และตั้งค่า Official Account ให้ลูกค้าคนไทยเลือกดูสินค้า ถามข้อมูล และจ่ายเงินได้โดยไม่ต้องออกจากแอปที่เปิดอยู่บนมือถืออยู่แล้ว หลังหน้าต่างแชท เราเชื่อมแคตตาล็อก สต็อก และระบบออเดอร์ของคุณ สิ่งที่ลูกค้าเห็นจึงตรงกับที่คุณส่งมอบได้จริง เหมาะกับร้านค้า ร้านอาหาร คลินิก และแบรนด์บริการที่ลูกค้าคุยกับเราทาง LINE อยู่แล้ว'
  const whyTitle = isEN ? 'Why LINE is the platform, not just a channel'    : 'ทำไม LINE ถึงเป็นแพลตฟอร์ม ไม่ใช่แค่ช่องทาง'
  const whyDesc  = isEN ? 'In Thailand people ask a shop a question, send a photo, and pay a friend all in the same chat app. When you treat LINE as just another place to post promotions, customers still have to leave it to open your website or install your app, and many never come back. A Mini App keeps the whole visit, from first look to payment, inside the conversation they already started.'  : 'ในไทย คนถามร้านค้า ส่งรูป และโอนเงินให้เพื่อน ทั้งหมดอยู่ในแอปแชทตัวเดียวกัน ถ้าคุณมอง LINE เป็นแค่ที่ลงโปรโมชัน ลูกค้ายังต้องออกจากแชทไปเปิดเว็บหรือติดตั้งแอปของคุณ และหลายคนไม่กลับมาอีก Mini App ทำให้ทั้งการมาเยี่ยมชม ตั้งแต่เห็นสินค้าครั้งแรกจนถึงจ่ายเงิน จบอยู่ในบทสนทนาที่เขาเริ่มไว้แล้ว'
  const ctaTitle = isEN ? 'Ready to launch inside LINE?'    : 'พร้อมเปิดตัวใน LINE หรือยัง?'
  const ctaDesc  = isEN ? 'Start with a LINE OA and Mini App strategy session. Bring your current Official Account, or none at all, and we will map what customers should be able to do in chat and what is best left on your website.'   : 'เริ่มจากคุยวางกลยุทธ์ LINE OA และ Mini App จะมี Official Account อยู่แล้วหรือยังไม่มีเลยก็พามาได้ เราจะช่วยร่างว่าลูกค้าควรทำอะไรได้ในแชท และอะไรเหมาะจะอยู่บนเว็บไซต์มากกว่า'
  const overviewText = isEN
    ? 'We build LINE Mini Apps, chat commerce experiences, and Official Account integrations that let customers browse, chat, and pay without ever leaving LINE. The work includes Mini Apps built on LIFF, ordering flows made of Flex Messages, LINE Pay checkout, rich menus that keep the main actions one tap away, and backend links to your product and order systems. Everything is designed around how Thai customers already use LINE, with Thai-language wording, and tested inside the LINE app on real phones.'
    : 'เราสร้าง LINE Mini App ประสบการณ์ซื้อขายผ่านแชท และเชื่อม Official Account ให้ลูกค้าเลือกดู แชท และจ่ายเงินได้โดยไม่ต้องออกจาก LINE งานของเราครอบคลุม Mini App ที่สร้างด้วย LIFF ขั้นตอนสั่งซื้อที่ทำจาก Flex Message ชำระเงินด้วย LINE Pay Rich Menu ที่ให้ทำสิ่งหลักได้ในแตะเดียว และการเชื่อม Backend เข้ากับระบบสินค้าและออเดอร์ ทุกอย่างออกแบบตามวิธีที่ลูกค้าคนไทยใช้ LINE อยู่แล้ว ด้วยข้อความภาษาไทยที่อ่านง่าย และทดสอบใน LINE บนมือถือจริง'

  const heroBullets = isEN ? [
      'Mini Apps built on LIFF that open inside LINE and feel like part of it',
      'Chat commerce with Flex Messages, quick replies, and Official Account setup',
      'LINE Pay checkout that finishes within the same conversation',
      'Rich menus and a catalog connected to your real product data',
      'Backend links to your existing order, POS, and CRM systems',
      'Thai-first wording and layouts, tested in the LINE app on real phones',
    ] : [
      'Mini App ที่สร้างด้วย LIFF เปิดในแชท LINE และใช้งานเหมือนเป็นส่วนหนึ่งของ LINE',
      'ขายผ่านแชทด้วย Flex Message, Quick Reply และตั้งค่า Official Account',
      'ชำระเงินด้วย LINE Pay จบในบทสนทนาเดียวกัน',
      'Rich Menu และแคตตาล็อกที่เชื่อมกับข้อมูลสินค้าจริงของคุณ',
      'เชื่อม Backend เข้ากับระบบออเดอร์ POS และ CRM ที่มีอยู่',
      'ข้อความและหน้าจอแบบไทยเป็นหลัก ทดสอบใน LINE บนมือถือจริง',
    ]
  const whyPoints   = isEN ? [
      'LINE reaches almost everyone in Thailand, far more than any single app you could ask people to download.',
      'A Mini App opens straight from a chat or rich menu, so there is no app store listing to find and no install step.',
      'With LINE Pay, the whole purchase stays in a place customers already trust with their money.',
      'Official Account broadcasts and chat ordering turn a casual question into an order within the same thread.',
      'Because the backend is connected, the Mini App shows real stock and real order status instead of a separate copy that goes stale.',
    ] : [
      'LINE เข้าถึงคนไทยเกือบทุกคน มากกว่าแอปเดี่ยวๆ ตัวไหนที่คุณจะขอให้คนดาวน์โหลด',
      'Mini App เปิดตรงจากแชทหรือ Rich Menu ได้เลย ไม่ต้องไปหาในสโตร์ ไม่ต้องติดตั้ง',
      'เมื่อใช้ LINE Pay การซื้อทั้งหมดอยู่ในที่ที่ลูกค้าไว้ใจเรื่องเงินอยู่แล้ว',
      'Broadcast จาก Official Account และการสั่งซื้อผ่านแชท เปลี่ยนคำถามเล่นๆ เป็นออเดอร์ได้ในเธรดเดียวกัน',
      'เพราะเชื่อม Backend ไว้ Mini App จึงแสดงสต็อกและสถานะออเดอร์จริง ไม่ใช่สำเนาแยกที่ล้าสมัยไปเรื่อยๆ',
    ]
  const outcomes    = isEN ? [
      {stat: '50M+', label: 'LINE Users in Thailand', desc: 'Reachable without a new app install'},
      {stat: '0', label: 'App Store Friction', desc: 'Mini Apps launch instantly'},
      {stat: '40%', label: 'Avg. Chat-to-Sale Lift', desc: 'With chat commerce flows'},
      {stat: '<6wk', label: 'Typical Launch', desc: 'From kickoff to go-live'}
    ] : [
      {stat: '50M+', label: 'ผู้ใช้ LINE ในไทย', desc: 'เข้าถึงได้โดยไม่ต้องติดตั้งแอปใหม่'},
      {stat: '0', label: 'ไม่ต้องผ่าน App Store', desc: 'Mini App เปิดใช้ได้ทันที'},
      {stat: '40%', label: 'ยอดขายเพิ่มขึ้นเฉลี่ย', desc: 'จากการขายผ่านแชท'},
      {stat: '<6wk', label: 'ระยะเวลาเปิดตัว', desc: 'ตั้งแต่เริ่มจนถึงใช้งานจริง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'We build Mini Apps on LIFF with LINE Login, so customers are recognised without a sign-up form. Browsing, cart, order history, and checkout all run inside LINE and keep the look of your brand.'},
      {icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'We design ordering flows from Flex Messages, quick replies, and auto-responses, and set up your Official Account for segmented broadcasts. A customer can ask about a product, see it as a card, and order from the chat.'},
      {icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay is built into the chat and the Mini App, so payment happens without redirecting to another site. We handle confirmation messages, failed payments, and refunds so staff are not chasing slips.'},
      {icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'We connect the Mini App to your product catalog, stock, order system, and CRM in real time. A sold-out item disappears, an order status changes when your team updates it, and customer records stay in one place.'},
      {icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'We design rich menus that put the actions customers need, such as order, track, book, or talk to us, one tap away from any chat. Menus can change by customer group, for example members and new followers.'},
      {icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'We track which menu buttons, messages, and screens lead to orders, and where people drop out of checkout. Reports are in plain language, and each month we suggest the next small change to try.'}
    ] : [
      {icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'เราสร้าง Mini App บน LIFF พร้อม LINE Login ลูกค้าจึงถูกจำได้โดยไม่ต้องกรอกฟอร์มสมัคร ตั้งแต่เลือกดู ตะกร้า ประวัติออเดอร์ ไปจนถึงชำระเงิน ทำงานใน LINE ทั้งหมดและยังคงหน้าตาแบรนด์ของคุณ'},
      {icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'เราออกแบบขั้นตอนสั่งซื้อจาก Flex Message, Quick Reply และข้อความตอบอัตโนมัติ และตั้งค่า Official Account ให้ Broadcast แบบแบ่งกลุ่มได้ ลูกค้าถามเรื่องสินค้า เห็นสินค้าเป็นการ์ด แล้วสั่งซื้อจากแชทได้เลย'},
      {icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay ฝังอยู่ในแชทและ Mini App จ่ายเงินได้โดยไม่ต้องเด้งไปเว็บอื่น เราจัดการข้อความยืนยัน กรณีจ่ายไม่ผ่าน และการคืนเงิน ทีมงานจะได้ไม่ต้องตามสลิป'},
      {icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'เราเชื่อม Mini App เข้ากับแคตตาล็อก สต็อก ระบบออเดอร์ และ CRM แบบเรียลไทม์ สินค้าหมดก็หายไปจากหน้า สถานะออเดอร์เปลี่ยนเมื่อทีมคุณอัปเดต และข้อมูลลูกค้าอยู่ที่เดียว'},
      {icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'เราออกแบบ Rich Menu ให้สิ่งที่ลูกค้าต้องทำ เช่น สั่งซื้อ ติดตามพัสดุ จองคิว หรือคุยกับเรา อยู่ห่างแค่แตะเดียวจากทุกแชท และเปลี่ยนเมนูตามกลุ่มลูกค้าได้ เช่น สมาชิกกับคนที่เพิ่งเพิ่มเพื่อน'},
      {icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'เราติดตามว่าปุ่มในเมนู ข้อความ และหน้าจอไหนพาไปสู่ออเดอร์ และคนหลุดจากขั้นตอนชำระเงินตรงไหน รายงานใช้ภาษาอ่านง่าย และทุกเดือนเราเสนอการปรับเล็กๆ ชิ้นต่อไปที่ควรลอง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Discovery', desc: 'We look at how your customers already talk to you on LINE, what questions repeat, where orders get lost, and what your Official Account does today. The result is a short list of journeys worth moving into LINE first.'},
      {no: '02', title: 'Design', desc: 'We map the chat flows, Mini App screens, and rich menus, and write the message wording in natural Thai. You review clickable mock-ups on your own phone before any code is written.'},
      {no: '03', title: 'Development', desc: 'We build the LIFF Mini App and the chat commerce flows, with LINE Login so customers are recognised. You can try a working build inside LINE every sprint.'},
      {no: '04', title: 'Integration', desc: 'We connect LINE Pay, your catalog, stock, and order systems, then test the awkward cases: out-of-stock items, abandoned payments, and customers who switch devices mid-order.'},
      {no: '05', title: 'Review & Launch', desc: 'We prepare the submission for the LINE platform review, fix anything it flags, and take the Mini App live. We also help you announce it to existing followers.'},
      {no: '06', title: 'Growth', desc: 'After launch we run segmented broadcasts, watch where customers drop out, and make steady improvements to conversion and repeat purchases.'}
    ] : [
      {no: '01', title: 'Discovery', desc: 'เราดูว่าตอนนี้ลูกค้าคุยกับคุณทาง LINE อย่างไร คำถามไหนซ้ำๆ ออเดอร์หลุดตรงไหน และ Official Account ทำอะไรอยู่ ได้เป็นรายการสั้นๆ ของเส้นทางที่ควรย้ายเข้า LINE ก่อน'},
      {no: '02', title: 'Design', desc: 'เราร่างขั้นตอนในแชท หน้าจอ Mini App และ Rich Menu และเขียนข้อความเป็นภาษาไทยที่อ่านเป็นธรรมชาติ คุณจะได้ลองแบบจำลองที่กดได้บนมือถือตัวเองก่อนเริ่มเขียนโค้ด'},
      {no: '03', title: 'Development', desc: 'เราสร้าง Mini App ด้วย LIFF และขั้นตอนขายผ่านแชท พร้อม LINE Login ให้จำลูกค้าได้ ทุกสปรินต์คุณลองใช้เวอร์ชันที่ทำงานได้จริงใน LINE ได้เลย'},
      {no: '04', title: 'Integration', desc: 'เราเชื่อม LINE Pay แคตตาล็อก สต็อก และระบบออเดอร์ แล้วทดสอบกรณียุ่งๆ เช่น สินค้าหมด จ่ายเงินค้าง และลูกค้าที่เปลี่ยนเครื่องกลางทาง'},
      {no: '05', title: 'Review & Launch', desc: 'เราเตรียมเอกสารส่งตรวจกับแพลตฟอร์ม LINE แก้จุดที่เขาแจ้ง แล้วเปิดใช้ Mini App จริง และช่วยประกาศให้ผู้ติดตามเดิมของคุณรู้'},
      {no: '06', title: 'Growth', desc: 'หลังเปิดตัว เราส่ง Broadcast แบบแบ่งกลุ่ม ดูว่าลูกค้าหลุดตรงไหน และปรับ Conversion กับการซื้อซ้ำไปเรื่อยๆ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Retail · Bangkok', title: 'Mini App Drives 40% of Mobile Sales', desc: 'A full LIFF Mini App with catalog, cart, and LINE Pay checkout. Customers who used to be sent to a website now order without leaving the chat.', result: '40% of mobile revenue via LINE'},
      {tag: 'F&B · Nationwide', title: 'Chat Commerce Launched in 5 Weeks', desc: 'A Flex Message ordering flow connected to the existing POS, so orders placed in LINE land in the same queue as walk-in orders.', result: 'Zero new app download required'},
      {tag: 'Beauty · Bangkok', title: 'OA Broadcasts Lift Repeat Purchases 40%', desc: 'Segmented broadcast campaigns tied directly to the Mini App catalog, so each message opens the product it talks about.', result: '+40% repeat purchase rate'}
    ] : [
      {tag: 'Retail · กรุงเทพฯ', title: 'Mini App สร้างยอดขายบนมือถือ 40%', desc: 'Mini App ด้วย LIFF เต็มรูปแบบ พร้อมแคตตาล็อก ตะกร้า และชำระเงินด้วย LINE Pay ลูกค้าที่เคยต้องถูกส่งไปเว็บ ตอนนี้สั่งได้โดยไม่ต้องออกจากแชท', result: '40% ของรายได้บนมือถือมาจาก LINE'},
      {tag: 'F&B · ทั่วประเทศ', title: 'เปิดตัวระบบขายผ่านแชทใน 5 สัปดาห์', desc: 'ระบบสั่งอาหารผ่าน Flex Message เชื่อมกับ POS ที่มีอยู่ ออเดอร์จาก LINE เข้าคิวเดียวกับออเดอร์ที่หน้าร้าน', result: 'ไม่ต้องดาวน์โหลดแอปใหม่'},
      {tag: 'Beauty · กรุงเทพฯ', title: 'Broadcast จาก OA เพิ่มการซื้อซ้ำ 40%', desc: 'แคมเปญ Broadcast แบบแบ่งกลุ่ม เชื่อมตรงกับแคตตาล็อกใน Mini App ข้อความแต่ละอันเปิดไปที่สินค้าที่พูดถึงเลย', result: 'อัตราซื้อซ้ำ +40%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is a LINE Mini App?', a: 'A web app built with LIFF that opens instantly inside LINE, with no download and no app store, for browsing, ordering, and paying. Customers reach it from a chat message, a rich menu, or a QR code.'},
      {q: 'Can it connect to our existing e-commerce or POS system?', a: 'Yes. We build backend integrations so the Mini App shows real inventory, pricing, and order status from the systems you already run.'},
      {q: 'Does it support LINE Pay?', a: 'Yes. Checkout can be completed with LINE Pay inside the chat or Mini App, with no redirect to another payment page.'},
      {q: 'Do we need an existing Official Account?', a: 'No. We can set up a new Official Account as part of the project, or build on the one you have, including keeping your current rich menus and auto-replies.'},
      {q: 'How is a Mini App different from a regular LINE chatbot?', a: 'A chatbot answers in text and cards. A Mini App is a full screen with a catalog, cart, and account pages. Most good projects use both: the chat starts the conversation and the Mini App handles the browsing and checkout.'},
      {q: 'Is customer data from LINE handled under PDPA?', a: 'We design the data flow with PDPA in mind: ask only for what is needed, say clearly why, and store it in your own systems. If you need a deeper review, our PDPA compliance service covers it.'},
      {q: 'Can we update products and promotions ourselves?', a: 'Yes. Products and prices come from your catalog or order system, and we set up simple admin tools for banners and campaigns, so your team can change them without a developer.'}
    ] : [
      {q: 'LINE Mini App คืออะไร?', a: 'เว็บแอปที่สร้างด้วย LIFF เปิดใช้ได้ทันทีใน LINE ไม่ต้องดาวน์โหลด ไม่ต้องผ่าน App Store ใช้เลือกดู สั่งซื้อ และชำระเงิน ลูกค้าเข้าได้จากข้อความในแชท Rich Menu หรือ QR Code'},
      {q: 'เชื่อมกับ E-Commerce หรือ POS ที่มีอยู่ได้ไหม?', a: 'ได้ เราสร้างการเชื่อมต่อ Backend ให้ Mini App แสดงสต็อก ราคา และสถานะออเดอร์จริงจากระบบที่คุณใช้อยู่'},
      {q: 'รองรับ LINE Pay ไหม?', a: 'รองรับ ชำระเงินด้วย LINE Pay ได้ในแชทหรือ Mini App โดยไม่ต้องเด้งไปหน้าชำระเงินอื่น'},
      {q: 'ต้องมี Official Account อยู่แล้วไหม?', a: 'ไม่จำเป็น เราตั้ง Official Account ใหม่ให้เป็นส่วนหนึ่งของโปรเจกต์ หรือต่อยอดจากที่คุณมีก็ได้ รวมถึงเก็บ Rich Menu และข้อความตอบอัตโนมัติเดิมไว้'},
      {q: 'Mini App ต่างจากแชทบอท LINE ทั่วไปอย่างไร?', a: 'แชทบอทตอบเป็นข้อความและการ์ด ส่วน Mini App เป็นหน้าจอเต็มที่มีแคตตาล็อก ตะกร้า และหน้าบัญชี โปรเจกต์ที่ดีส่วนใหญ่ใช้ทั้งสองอย่าง แชทเริ่มบทสนทนา ส่วน Mini App รับช่วงเลือกดูและชำระเงิน'},
      {q: 'ข้อมูลลูกค้าจาก LINE จัดการตาม PDPA ไหม?', a: 'เราออกแบบการไหลของข้อมูลโดยคำนึงถึง PDPA ขอเท่าที่จำเป็น บอกชัดว่าขอไปทำไม และเก็บในระบบของคุณเอง ถ้าต้องการตรวจลึกกว่านี้ บริการ PDPA Compliance ของเราช่วยได้'},
      {q: 'ทีมเราอัปเดตสินค้าและโปรโมชันเองได้ไหม?', a: 'ได้ สินค้าและราคามาจากแคตตาล็อกหรือระบบออเดอร์ของคุณ และเราทำเครื่องมือหลังบ้านง่ายๆ สำหรับแบนเนอร์และแคมเปญ ทีมคุณเปลี่ยนเองได้โดยไม่ต้องมีนักพัฒนา'}
    ]
  const related     = isEN ? [
      {label: 'E-Commerce', href: '/services/ecommerce'},
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ] : [
      {label: 'E-Commerce', href: '/services/ecommerce'},
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ]

  const lineLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>liff init --app catalog-mini-app</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Mini App live inside LINE' : 'Mini App พร้อมใช้ใน LINE'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>checkout --provider line-pay</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Payment completed in-chat' : 'ชำระเงินสำเร็จในแชท'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>broadcast --segment repeat-customers</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Repeat purchases +40%' : 'ซื้อซ้ำเพิ่มขึ้น +40%'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>liff-session.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {lineLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgb(var(--fg) / 0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Mini App Reach' : 'Mini App Reach'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <i className="ti ti-brand-line" style={{ fontSize: 22, color: 'var(--ink)' }} aria-hidden="true" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '85%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '40% of mobile sales via LINE' : '40% ของยอดขายบนมือถือมาจาก LINE'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Mini Apps on LIFF with LINE Login, so customers are recognised without a sign-up form. Browse, cart, order history, and checkout all stay inside LINE.' },
    { icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'Ordering flows built from Flex Messages and quick replies, plus Official Account setup for segmented broadcasts that lead straight to a product.' },
    { icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay inside the chat and Mini App, with confirmation messages, failed-payment handling, and refunds covered.' },
    { icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'Real-time links to your catalog, stock, order system, and CRM, so sold-out items vanish and order status is always current.' },
    { icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'Menus that put order, track, book, or contact one tap away, and can differ for members and new followers.' },
    { icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'Tracking from menu tap to order, plain-language reports, and a monthly suggestion for the next improvement to test.' },
  ] : [
    { icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Mini App บน LIFF พร้อม LINE Login ลูกค้าถูกจำได้โดยไม่ต้องกรอกฟอร์มสมัคร เลือกดู ตะกร้า ประวัติออเดอร์ และชำระเงิน อยู่ใน LINE ทั้งหมด' },
    { icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'ขั้นตอนสั่งซื้อที่ทำจาก Flex Message และ Quick Reply พร้อมตั้งค่า Official Account สำหรับ Broadcast แบบแบ่งกลุ่มที่พาไปถึงหน้าสินค้าโดยตรง' },
    { icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay ในแชทและ Mini App พร้อมข้อความยืนยัน การรับมือกรณีจ่ายไม่ผ่าน และการคืนเงิน' },
    { icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'เชื่อมแคตตาล็อก สต็อก ระบบออเดอร์ และ CRM แบบเรียลไทม์ สินค้าหมดก็หายไปจากหน้า และสถานะออเดอร์ตรงเสมอ' },
    { icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'เมนูที่ให้สั่งซื้อ ติดตามพัสดุ จองคิว หรือติดต่อ ได้ในแตะเดียว และเปลี่ยนตามกลุ่มสมาชิกกับคนที่เพิ่งเพิ่มเพื่อนได้' },
    { icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'ติดตามตั้งแต่แตะเมนูจนถึงออเดอร์ รายงานภาษาอ่านง่าย และข้อเสนอรายเดือนว่าควรทดสอบการปรับอะไรต่อ' },
  ]

  const techStack = [
    { label: 'LIFF', icon: 'ti-brand-line' },
    { label: 'LINE Messaging API', icon: 'ti-message-2' },
    { label: 'LINE Login', icon: 'ti-login' },
    { label: 'LINE Pay', icon: 'ti-wallet' },
    { label: 'Flex Messages', icon: 'ti-layout-cards' },
    { label: 'Rich Menus', icon: 'ti-menu-2' },
    { label: 'LINE Official Account', icon: 'ti-speakerphone' },
    { label: 'React', svg: 'react' },
    { label: 'Next.js', svg: 'nextdotjs' },
    { label: 'TypeScript', svg: 'typescript' },
    { label: 'Node.js', svg: 'nodedotjs' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'How customers talk to you on LINE today, and which journeys to move first' },
    { no: '02', title: 'Design', desc: 'Chat flows, screens, rich menus, and Thai wording on a clickable mock-up' },
    { no: '03', title: 'Development', desc: 'LIFF Mini App and chat flows you can try inside LINE every sprint' },
    { no: '04', title: 'Integration', desc: 'LINE Pay, catalog, stock, and orders, tested on awkward cases' },
    { no: '05', title: 'Review & Launch', desc: 'LINE platform review, go-live, and an announcement to followers' },
    { no: '06', title: 'Growth', desc: 'Segmented broadcasts and steady conversion improvements' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'ตอนนี้ลูกค้าคุยกับคุณทาง LINE อย่างไร และควรย้ายเส้นทางไหนก่อน' },
    { no: '02', title: 'Design', desc: 'ขั้นตอนในแชท หน้าจอ Rich Menu และข้อความภาษาไทย บนแบบจำลองที่กดได้' },
    { no: '03', title: 'Development', desc: 'Mini App ด้วย LIFF และขั้นตอนในแชท ลองใช้ใน LINE ได้ทุกสปรินต์' },
    { no: '04', title: 'Integration', desc: 'LINE Pay แคตตาล็อก สต็อก และออเดอร์ ทดสอบกรณียุ่งๆ' },
    { no: '05', title: 'Review & Launch', desc: 'ตรวจกับแพลตฟอร์ม LINE เปิดใช้งาน และประกาศให้ผู้ติดตามรู้' },
    { no: '06', title: 'Growth', desc: 'Broadcast แบบแบ่งกลุ่ม และปรับ Conversion อย่างต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What is a LINE Mini App and how is it different from a regular app?', a: 'A LINE Mini App is a web app built with LIFF that opens instantly inside LINE, with no download and no app store listing to wait on. Customers use it to browse, order, and pay inside a chat window they already have open, and they reach it from a message, a rich menu, or a QR code.' },
    { q: 'Can it connect to our existing e-commerce or POS system?', a: 'Yes. We build backend integrations so the Mini App reflects real inventory, pricing, and order status from your existing systems, instead of maintaining a separate product catalog that someone has to update by hand.' },
    { q: 'Does it support LINE Pay for checkout?', a: 'Yes. Checkout can be completed with LINE Pay directly inside the chat or Mini App, keeping the whole purchase in one flow without sending the customer to an external payment page. We also handle confirmation messages, failed payments, and refunds.' },
    { q: 'Do we need an existing Official Account to start?', a: 'Not necessarily. We can set up and configure a new Official Account as part of the project, or build on top of an OA you already run, including migrating your current rich menus and automation.' },
    { q: 'How long does a LINE Mini App project take?', a: 'A focused Mini App with catalog and checkout typically launches in 5-6 weeks. Projects with deeper backend integration, custom chat commerce flows, or several Official Accounts usually run 8-10 weeks.' },
    { q: 'How much does a LINE Mini App project cost?', a: 'Pricing depends on catalog complexity and the depth of backend integration. A focused Mini App project typically starts in the high five figures (THB). Broader chat commerce and CRM-integrated builds are quoted after a discovery call.' },
    { q: 'Do we own the Mini App code after launch?', a: 'Yes. You own the LIFF application code, the backend integration, and the Official Account configuration. You can extend or maintain it yourselves, or use our ongoing support.' },
    { q: 'Can this reach customers who don’t already follow our Official Account?', a: 'Partly. A Mini App launches from a LINE touchpoint, so it works best alongside Official Account growth: rich menu placement, QR codes in store and on packaging, and ad campaigns. We help plan that acquisition alongside the build.' },
    { q: 'How is a Mini App different from a LINE chatbot?', a: 'A chatbot replies with text and cards. A Mini App is a full-screen app with a catalog, cart, and account pages. The best setups use both: the chat starts the conversation and the Mini App takes over for browsing and checkout.' },
    { q: 'How do you handle customer data and PDPA?', a: 'We design the data flow with PDPA in mind. We ask only for what is needed, explain why in clear Thai, and store data in systems you control. If you want a formal review, our PDPA compliance service can cover the rest.' },
  ] : [
    { q: 'LINE Mini App คืออะไร ต่างจากแอปทั่วไปอย่างไร?', a: 'LINE Mini App คือเว็บแอปที่สร้างด้วย LIFF เปิดใช้ได้ทันทีใน LINE ไม่ต้องดาวน์โหลด ไม่ต้องรอขึ้นสโตร์ ลูกค้าใช้เลือกดู สั่งซื้อ และชำระเงินในหน้าต่างแชทที่เปิดอยู่แล้ว และเข้าได้จากข้อความ Rich Menu หรือ QR Code' },
    { q: 'เชื่อมกับ E-Commerce หรือ POS ที่มีอยู่ได้ไหม?', a: 'ได้ เราสร้างการเชื่อมต่อ Backend ให้ Mini App แสดงสต็อก ราคา และสถานะออเดอร์จริงจากระบบที่มีอยู่ ไม่ต้องดูแลแคตตาล็อกสินค้าแยกอีกชุดที่ต้องมีคนมาอัปเดตด้วยมือ' },
    { q: 'รองรับ LINE Pay สำหรับชำระเงินไหม?', a: 'รองรับ ชำระเงินด้วย LINE Pay ได้ในแชทหรือ Mini App ให้การซื้อทั้งหมดจบในขั้นตอนเดียว ไม่ต้องส่งลูกค้าไปหน้าชำระเงินภายนอก และเราจัดการข้อความยืนยัน กรณีจ่ายไม่ผ่าน และการคืนเงินให้ด้วย' },
    { q: 'ต้องมี Official Account อยู่แล้วก่อนเริ่มไหม?', a: 'ไม่จำเป็น เราตั้ง Official Account ใหม่ให้เป็นส่วนหนึ่งของโปรเจกต์ หรือต่อยอดจาก OA ที่คุณมีอยู่ รวมถึงย้าย Rich Menu และระบบอัตโนมัติเดิมมาด้วย' },
    { q: 'โปรเจกต์ LINE Mini App ใช้เวลานานแค่ไหน?', a: 'Mini App แบบเจาะจงพร้อมแคตตาล็อกและชำระเงินมักเปิดตัวได้ใน 5-6 สัปดาห์ ส่วนโปรเจกต์ที่เชื่อม Backend เชิงลึก ทำขั้นตอนขายผ่านแชทแบบกำหนดเอง หรือมีหลาย Official Account มักใช้ 8-10 สัปดาห์' },
    { q: 'โปรเจกต์ LINE Mini App มีค่าใช้จ่ายเท่าไหร่?', a: 'ราคาขึ้นกับความซับซ้อนของแคตตาล็อกและความลึกของการเชื่อม Backend Mini App แบบเจาะจงมักเริ่มที่หลักหมื่นปลายๆ (บาท) ส่วนระบบขายผ่านแชทที่กว้างขึ้นและเชื่อม CRM จะเสนอราคาหลังคุยสำรวจความต้องการ' },
    { q: 'เราเป็นเจ้าของโค้ดของ Mini App หลังเปิดตัวไหม?', a: 'ใช่ คุณเป็นเจ้าของโค้ด LIFF Application การเชื่อมต่อ Backend และการตั้งค่า Official Account จะต่อยอดหรือดูแลเองก็ได้ หรือใช้บริการดูแลต่อเนื่องจากเรา' },
    { q: 'ช่วยเข้าถึงลูกค้าที่ยังไม่ได้เพิ่มเพื่อน Official Account ของเราได้ไหม?', a: 'ได้บางส่วน Mini App เปิดจากจุดสัมผัสต่างๆ ใน LINE จึงทำงานได้ดีที่สุดเมื่อโต OA ไปพร้อมกัน เช่น วาง Rich Menu, QR Code ที่หน้าร้านและบนบรรจุภัณฑ์ และทำโฆษณา เราช่วยวางแผนการเข้าถึงลูกค้าควบคู่ไปกับการสร้าง' },
    { q: 'Mini App ต่างจากแชทบอท LINE อย่างไร?', a: 'แชทบอทตอบเป็นข้อความและการ์ด ส่วน Mini App เป็นแอปเต็มจอที่มีแคตตาล็อก ตะกร้า และหน้าบัญชี ระบบที่ดีที่สุดใช้ทั้งสองอย่าง แชทเริ่มบทสนทนา แล้ว Mini App รับช่วงตอนเลือกดูและชำระเงิน' },
    { q: 'จัดการข้อมูลลูกค้าและ PDPA อย่างไร?', a: 'เราออกแบบการไหลของข้อมูลโดยคำนึงถึง PDPA ขอเท่าที่จำเป็น อธิบายเหตุผลเป็นภาษาไทยที่เข้าใจง่าย และเก็บข้อมูลในระบบที่คุณควบคุมได้ ถ้าต้องการตรวจอย่างเป็นทางการ บริการ PDPA Compliance ของเราดูแลส่วนที่เหลือได้' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'สิ่งที่เราทำได้จริงในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
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

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'The LINE developer platform paired with a modern web stack for Mini Apps that feel fast and native.'
              : 'LINE Developer Platform ร่วมกับเทคโนโลยีเว็บสมัยใหม่ ให้ Mini App เร็วและใช้งานเหมือนอยู่ใน LINE'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from discovery to a launched Mini App — adjusted per business, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนตั้งแต่สำรวจความต้องการจนถึง Mini App ที่เปิดตัวแล้ว ปรับตามแต่ละธุรกิจ ไม่ใช่สูตรตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about building on LINE.' : 'คำตอบตรงไปตรงมาเกี่ยวกับการสร้างบน LINE'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </div>
    </section>

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
        <h2 className="t-display mb-5 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีฟังว่าคุณกำลังสร้างอะไรอยู่'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกัน'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroMotion heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/line-mini-apps/why1.jpg"
      whyImg2="/images/services/line-mini-apps/why2.jpg"
      featureImg="/images/services/line-mini-apps/feature.jpg"
      processImg="/images/services/line-mini-apps/process.jpg"
    />
  )
}
