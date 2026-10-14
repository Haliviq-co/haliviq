import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  reactNative: { hex: '#61DAFB', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
  flutter: { hex: '#02569B', path: 'M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z' },
  swift: { hex: '#F05138', path: 'M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z' },
  kotlin: { hex: '#7F52FF', path: 'M24 24H0V0h24L12 12Z' },
  firebase: { hex: '#DD2C00', path: 'M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z' },
  expo: { hex: '#FFFFFF', path: 'M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z' },
  appstore: { hex: '#0D96F6', path: 'M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z' },
  googleplay: { hex: '#FFFFFF', path: 'M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z' },
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
    ? 'Mobile App Development Company in Bangkok | Haliviq'
    : 'รับพัฒนาแอปมือถือ iOS Android กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Mobile app development in Thailand: native iOS and Android, React Native and Flutter. MVP in 6-10 weeks, store launch, offline support and PDPA-aware data.'
    : 'Haliviq รับพัฒนาแอปมือถือ iOS และ Android ทั้ง Native, React Native และ Flutter ตั้งแต่ MVP ใน 6-10 สัปดาห์ จนถึงส่งขึ้น Store รองรับออฟไลน์และ PDPA'
  const url = `https://www.haliviq.com/${params.lang}/services/mobile-apps`
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

  const badge    = isEN ? 'Engineering / Mobile Apps'  : 'Engineering / Mobile Apps'
  const title    = isEN ? 'Apps Users'  : 'แอปที่ผู้ใช้'
  const subtitle = isEN ? 'Love and Use Every Day'    : 'รักและเปิดใช้ทุกวัน'
  const heroDesc = isEN ? 'We design and build iOS and Android apps, in Swift and Kotlin or in React Native and Flutter, and pick the approach that suits your product rather than our habits. We start from who will use the app and what they need in the first minute, then build something quick to open, easy to learn, and structured so your team can keep adding to it. From a first MVP to an app with a custom backend and payments, we stay with you through the store release.'  : 'เราออกแบบและสร้างแอป iOS และ Android ด้วย Swift กับ Kotlin หรือ React Native กับ Flutter และเลือกแนวทางที่เหมาะกับผลิตภัณฑ์ของคุณ ไม่ใช่ตามความเคยชินของเรา เราเริ่มจากว่าใครจะใช้แอป และเขาต้องการอะไรในนาทีแรก แล้วสร้างแอปที่เปิดเร็ว เรียนรู้ง่าย และวางโครงสร้างไว้ให้ทีมคุณเพิ่มของต่อได้ ตั้งแต่ MVP ตัวแรกไปจนถึงแอปที่มี Backend เฉพาะและระบบชำระเงิน เราอยู่กับคุณจนถึงตอนปล่อยขึ้น Store'
  const whyTitle = isEN ? 'Why most apps fail within 90 days'    : 'ทำไมแอปส่วนใหญ่ล้มเหลวใน 90 วันแรก'
  const whyDesc  = isEN ? 'The average app loses 77% of users within 3 days. The reasons repeat: a sign-up that asks for too much before showing any value, screens that take seconds to load on an ordinary phone, and features built because someone in a meeting suggested them. Fixing these early costs a fraction of what it takes to win back users who already deleted the app.'  : 'แอปทั่วไปสูญเสียผู้ใช้ 77% ภายใน 3 วันแรก สาเหตุซ้ำๆ เดิมๆ คือขั้นตอนสมัครที่ขอข้อมูลเยอะก่อนให้เห็นประโยชน์ หน้าจอที่โหลดหลายวินาทีบนมือถือธรรมดา และฟีเจอร์ที่สร้างขึ้นเพราะมีใครสักคนในที่ประชุมเสนอ การแก้ตั้งแต่เนิ่นๆ ใช้ต้นทุนแค่เศษเสี้ยวของการเรียกผู้ใช้ที่ลบแอปไปแล้วกลับมา'
  const ctaTitle = isEN ? 'Ready to build your app?'    : 'พร้อมสร้างแอปของคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Product Discovery session. Tell us who the app is for and what it must do first, and we will sketch an MVP scope, a timeline, and the platform choice that fits.'   : 'เริ่มด้วยการคุยสำรวจผลิตภัณฑ์ฟรี บอกเราว่าแอปนี้ทำให้ใคร และต้องทำอะไรได้ก่อน แล้วเราจะร่างขอบเขต MVP ไทม์ไลน์ และแนวทางเลือกแพลตฟอร์มที่เหมาะให้'
  const overviewText = isEN
    ? 'We deliver iOS and Android products using React Native, Flutter, Swift, and Kotlin, choosing the stack from your product requirements rather than a house preference. Every project covers offline-first architecture, engagement features such as push notifications and deep links, app store preparation, and secure API integration. What ships is quick to open, safe with user data, and ready to grow from the first release to millions of users.'
    : 'เราพัฒนาแอป iOS และ Android ด้วย React Native, Flutter, Swift และ Kotlin โดยเลือกเทคโนโลยีจากความต้องการของผลิตภัณฑ์ ไม่ใช่ตามความชอบของทีม ทุกโปรเจกต์ครอบคลุมสถาปัตยกรรมแบบ Offline-first ฟีเจอร์ที่ช่วยให้ผู้ใช้กลับมาอย่าง Push Notification และ Deep Link การเตรียมขึ้น Store และการเชื่อมต่อ API อย่างปลอดภัย แอปที่ออกไปจึงเปิดเร็ว ดูแลข้อมูลผู้ใช้อย่างปลอดภัย และพร้อมโตตั้งแต่เวอร์ชันแรกไปจนถึงผู้ใช้หลักล้าน'

  const heroBullets = isEN ? [
      'Product strategy and feature prioritisation before the first line of code',
      'Native iOS and Android, or cross-platform with React Native or Flutter',
      'Performance tuning for mid-range phones and patchy mobile networks',
      'App Store and Google Play submission, listing copy, and review handling',
      'Secure login, data encryption, and PDPA-aware data handling',
      'Updates, crash monitoring, and OS-version support after launch',
    ] : [
      'วางกลยุทธ์ผลิตภัณฑ์และเลือกฟีเจอร์ก่อนเขียนโค้ดบรรทัดแรก',
      'พัฒนา Native iOS และ Android หรือ Cross-platform ด้วย React Native หรือ Flutter',
      'ปรับประสิทธิภาพให้เหมาะกับมือถือรุ่นกลางๆ และเครือข่ายมือถือที่ไม่นิ่ง',
      'ส่งขึ้น App Store และ Google Play พร้อมเตรียมข้อความหน้าแอปและจัดการเรื่องการตรวจ',
      'ระบบล็อกอินที่ปลอดภัย เข้ารหัสข้อมูล และจัดการข้อมูลโดยคำนึงถึง PDPA',
      'อัปเดต เฝ้าดูแอปค้าง และรองรับ OS เวอร์ชันใหม่หลังเปิดตัว',
    ]
  const whyPoints   = isEN ? [
      'Apps built on user research have 3x better 30-day retention, because the first screens answer what people actually came for.',
      '53% of users abandon apps that take more than 3 seconds to load, so speed work belongs in the plan from the start.',
      'Offline-first design keeps the app useful on a train, in a lift, or anywhere the signal drops.',
      'A considered push notification strategy increases daily active users by 20-40%, as long as messages are useful and not constant.',
      'App Store Optimisation can double organic downloads without raising ad spend, and it starts with a clear listing.',
    ] : [
      'แอปที่สร้างจาก User Research มี 30-day Retention ดีกว่า 3 เท่า เพราะหน้าจอแรกๆ ตอบสิ่งที่คนเข้ามาหาจริงๆ',
      'ผู้ใช้ 53% เลิกใช้แอปที่โหลดนานกว่า 3 วินาที งานเรื่องความเร็วจึงต้องอยู่ในแผนตั้งแต่แรก',
      'ออกแบบแบบ Offline-first ให้แอปยังใช้ได้บนรถไฟฟ้า ในลิฟต์ หรือที่ไหนก็ตามที่สัญญาณหาย',
      'กลยุทธ์ Push Notification ที่คิดมาแล้ว เพิ่มผู้ใช้ที่ใช้งานรายวันได้ 20-40% ตราบใดที่ข้อความมีประโยชน์และไม่ส่งถี่เกินไป',
      'การปรับหน้าแอปใน Store (ASO) เพิ่มยอดดาวน์โหลดแบบธรรมชาติได้เป็นเท่าตัวโดยไม่เพิ่มค่าโฆษณา และเริ่มจากหน้าแสดงแอปที่ชัดเจน',
    ]
  const outcomes    = isEN ? [
      {stat: '3x', label: 'Better Retention', desc: 'vs. non-research-led apps'},
      {stat: '<2s', label: 'App Load Time', desc: 'Optimised for all networks'},
      {stat: '40%', label: 'DAU Increase', desc: 'With smart push strategy'},
      {stat: '4.7★', label: 'Average App Store Rating', desc: 'Across our published apps'}
    ] : [
      {stat: '3x', label: 'Retention ดีกว่า', desc: 'เทียบกับแอปที่ไม่ได้ทำ Research'},
      {stat: '<2s', label: 'App Load Time', desc: 'ปรับให้เหมาะกับทุกเครือข่าย'},
      {stat: '40%', label: 'DAU เพิ่มขึ้น', desc: 'ด้วยกลยุทธ์ Push ที่ดี'},
      {stat: '4.7★', label: 'คะแนน App Store เฉลี่ย', desc: 'จากแอปที่เราพัฒนา'}
    ]
  const features    = isEN ? [
      {icon: 'ti-device-mobile', title: 'Native iOS & Android', desc: 'Separate apps in Swift for iOS and Kotlin for Android, for products that need the smoothest animation, camera or sensor access, or the newest platform features. Each app follows its platform’s habits, so users feel at home.'},
      {icon: 'ti-brand-react-native', title: 'React Native', desc: 'One codebase for iOS and Android, which lowers cost and keeps both apps in step. It is a good fit for content, commerce, booking, and internal apps, and we add native modules for the few screens that need them.'},
      {icon: 'ti-rocket', title: 'MVP & Rapid Development', desc: 'We cut the idea down to the smallest version that proves it, and ship a working MVP in 6-10 weeks. You test it with real users first and decide what to build next from their behaviour, not guesses.'},
      {icon: 'ti-chart-arrows-vertical', title: 'Performance Optimization', desc: 'We profile startup time, scrolling, memory, and battery on real mid-range phones, then fix the slow parts with lazy loading, caching, and lighter images. We set a speed target at the start and check it every sprint.'},
      {icon: 'ti-bell', title: 'Push & Engagement', desc: 'We plan which messages are worth sending, to whom, and when, and add in-app messages and deep links that open the exact screen. Users can choose what they receive, so notifications bring them back instead of getting the app muted.'},
      {icon: 'ti-shield-check', title: 'Security & Compliance', desc: 'Secure sign-in, encrypted storage, protected API calls, and data collection kept to what the app needs. We build with PDPA in mind from day one, including consent screens and account deletion.'}
    ] : [
      {icon: 'ti-device-mobile', title: 'Native iOS & Android', desc: 'แอปแยกกัน ใช้ Swift สำหรับ iOS และ Kotlin สำหรับ Android เหมาะกับผลิตภัณฑ์ที่ต้องการแอนิเมชันลื่นที่สุด เข้าถึงกล้องหรือเซนเซอร์ หรือใช้ฟีเจอร์ใหม่ล่าสุดของแพลตฟอร์ม แต่ละแอปทำตามความเคยชินของแพลตฟอร์มตัวเอง ผู้ใช้จึงรู้สึกคุ้นมือ'},
      {icon: 'ti-brand-react-native', title: 'React Native', desc: 'โค้ดชุดเดียวสำหรับ iOS และ Android ช่วยลดต้นทุนและทำให้สองแอปเดินไปพร้อมกัน เหมาะกับแอปคอนเทนต์ คอมเมิร์ซ จองคิว และแอปภายใน และเราใส่ Native Module เฉพาะไม่กี่หน้าจอที่ต้องใช้'},
      {icon: 'ti-rocket', title: 'MVP & Rapid Development', desc: 'เราตัดไอเดียให้เหลือเวอร์ชันเล็กที่สุดที่พิสูจน์ได้ และส่ง MVP ที่ใช้งานได้จริงใน 6-10 สัปดาห์ คุณทดสอบกับผู้ใช้จริงก่อน แล้วตัดสินใจว่าจะสร้างอะไรต่อจากพฤติกรรมของเขา ไม่ใช่การเดา'},
      {icon: 'ti-chart-arrows-vertical', title: 'Performance Optimization', desc: 'เราวัดเวลาเปิดแอป การเลื่อนหน้าจอ หน่วยความจำ และแบตเตอรี่บนมือถือรุ่นกลางๆ จริง แล้วแก้ส่วนที่ช้าด้วย Lazy Loading, Cache และรูปที่เบาลง เราตั้งเป้าความเร็วตั้งแต่เริ่มและเช็กทุกสปรินต์'},
      {icon: 'ti-bell', title: 'Push & Engagement', desc: 'เราวางแผนว่าข้อความไหนควรส่ง ส่งถึงใคร และตอนไหน พร้อมข้อความในแอปและ Deep Link ที่เปิดตรงหน้าจอที่ต้องการ ผู้ใช้เลือกได้ว่าจะรับอะไร การแจ้งเตือนจึงพาเขากลับมา ไม่ใช่ทำให้ถูกปิดเสียง'},
      {icon: 'ti-shield-check', title: 'Security & Compliance', desc: 'ล็อกอินปลอดภัย เก็บข้อมูลแบบเข้ารหัส ป้องกัน API และเก็บข้อมูลเท่าที่แอปต้องใช้ เราสร้างโดยคำนึงถึง PDPA ตั้งแต่วันแรก รวมถึงหน้าขอความยินยอมและการลบบัญชี'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Product Discovery', desc: 'We talk to your team and, where possible, your users, to understand the audience, the market, and the business goal. You leave with a prioritised feature list and a clear MVP boundary.'},
      {no: '02', title: 'UX Design & Prototype', desc: 'We design the flows and screens as a clickable prototype that you can run on your own phone. We test it with a few real users before any development starts, when changes cost the least.'},
      {no: '03', title: 'Development Sprints', desc: 'We build in 2-week sprints and end each one with a demo and an installable build. You always see what is done, what is next, and what it affects.'},
      {no: '04', title: 'QA & Testing', desc: 'We test across devices, OS versions, screen sizes, and poor-network conditions, including the edge cases, then run a beta with real testers before submission.'},
      {no: '05', title: 'Launch & Iterate', desc: 'We prepare the store listings, submit the app, and handle review feedback. After launch we watch crashes and key metrics, and plan improvements from real usage.'}
    ] : [
      {no: '01', title: 'Product Discovery', desc: 'เราคุยกับทีมของคุณ และกับผู้ใช้จริงถ้าเป็นไปได้ เพื่อเข้าใจกลุ่มเป้าหมาย ตลาด และเป้าหมายธุรกิจ คุณจะได้รายการฟีเจอร์เรียงความสำคัญและขอบเขต MVP ที่ชัดเจน'},
      {no: '02', title: 'UX Design & Prototype', desc: 'เราออกแบบขั้นตอนและหน้าจอเป็นต้นแบบที่กดได้ รันบนมือถือของคุณเองได้ แล้วทดสอบกับผู้ใช้จริงไม่กี่คนก่อนเริ่มพัฒนา ตอนที่การแก้ไขยังถูกที่สุด'},
      {no: '03', title: 'Development Sprints', desc: 'เราพัฒนาเป็น Sprint ละ 2 สัปดาห์ และจบทุก Sprint ด้วยการสาธิตและ Build ที่ติดตั้งได้ คุณเห็นเสมอว่าอะไรเสร็จแล้ว อะไรต่อไป และกระทบอะไรบ้าง'},
      {no: '04', title: 'QA & Testing', desc: 'เราทดสอบข้ามอุปกรณ์ เวอร์ชัน OS ขนาดหน้าจอ และสภาพเครือข่ายไม่ดี รวมถึงกรณีพิเศษ แล้วเปิดรุ่นทดลองให้ผู้ทดสอบจริงก่อนส่งตรวจ'},
      {no: '05', title: 'Launch & Iterate', desc: 'เราเตรียมหน้าแสดงแอปบน Store ส่งตรวจ และจัดการข้อเสนอแนะจากการตรวจ หลังเปิดตัวเราเฝ้าดูแอปค้างและตัวเลขหลัก แล้ววางแผนปรับปรุงจากการใช้งานจริง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Mobile Banking App for 4 Million Users', desc: 'A full UX redesign, new features, and performance tuning so the app holds up under heavy daily use by millions of customers.', result: 'DAU up 62%'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Telemedicine App', desc: 'Video consultation, prescriptions, and lab results in a single app, so patients do not need to switch between services.', result: '92% Completion Rate'},
      {tag: 'Retail · Nationwide', title: 'Grocery Delivery in 30 Minutes', desc: 'Real-time inventory, route optimisation, and in-app payment working together to make a 30-minute promise realistic.', result: '4.8★ App Store Rating'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'แอป Mobile Banking สำหรับ 4 ล้านคน', desc: 'ออกแบบ UX ใหม่ทั้งหมด เพิ่มฟีเจอร์ และปรับประสิทธิภาพ ให้แอปรับการใช้งานหนักทุกวันของลูกค้าหลายล้านคนได้', result: 'DAU เพิ่ม 62%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'แอป Telemedicine ครบในแอปเดียว', desc: 'ปรึกษาแพทย์ผ่านวิดีโอ ใบสั่งยา และผลตรวจแล็บ ในแอปเดียว ผู้ป่วยไม่ต้องสลับไปมาระหว่างหลายบริการ', result: '92% Completion Rate'},
      {tag: 'Retail · ทั่วประเทศ', title: 'ส่งของชำใน 30 นาที', desc: 'สต็อกเรียลไทม์ การจัดเส้นทางส่งให้เหมาะสม และชำระเงินในแอป ทำงานร่วมกันให้คำสัญญา 30 นาทีทำได้จริง', result: 'Rating 4.8★ App Store'}
    ]
  const faqs        = isEN ? [
      {q: 'React Native or Native, which is better?', a: 'It depends on the product. React Native is faster and more economical for most apps. Native is better when you need top performance, heavy animation, or deep hardware features. We explain the trade-off for your case before you commit.'},
      {q: 'How long does development take?', a: 'An MVP takes 6-10 weeks and a full-featured app 3-6 months, depending on the number of features and how complex they are.'},
      {q: 'Is App Store submission difficult?', a: 'There are a lot of small steps, so we handle them for you: screenshots, store descriptions, privacy policy, data-use disclosures, and the review itself, including a resubmission if a build is rejected.'},
      {q: 'How do you support the app after launch?', a: 'We offer maintenance packages covering bug fixes, updates for new iOS and Android versions, crash and performance monitoring, and new features.'},
      {q: 'Can you take over an app someone else built?', a: 'Yes. We audit the code first, then agree whether to improve it step by step or rebuild parts of it. We recommend a full rewrite only when it really costs less.'},
      {q: 'Do we need both an iOS and an Android app from the start?', a: 'Not always. Many teams launch on one platform to test the idea, or use React Native to cover both at lower cost. We recommend based on where your users are.'},
      {q: 'What do you need from us at the start?', a: 'A short description of the idea or problem, who will use it, any existing designs or systems it must connect to, and a rough deadline. A rough idea is enough, and discovery turns it into a plan.'}
    ] : [
      {q: 'React Native หรือ Native ดีกว่ากัน?', a: 'ขึ้นกับผลิตภัณฑ์ React Native เร็วกว่าและประหยัดกว่าสำหรับแอปส่วนใหญ่ ส่วน Native เหมาะเมื่อต้องการประสิทธิภาพสูงสุด แอนิเมชันหนัก หรือฟีเจอร์ฮาร์ดแวร์เชิงลึก เราจะอธิบายข้อดีข้อเสียของกรณีคุณให้ก่อนตัดสินใจ'},
      {q: 'ใช้เวลาพัฒนานานแค่ไหน?', a: 'MVP ใช้ 6-10 สัปดาห์ แอปเต็มรูปแบบ 3-6 เดือน ขึ้นกับจำนวนฟีเจอร์และความซับซ้อน'},
      {q: 'ส่งขึ้น App Store ยากไหม?', a: 'มีขั้นตอนย่อยเยอะ เราเลยจัดการให้ ทั้งภาพหน้าจอ คำอธิบายแอป นโยบายความเป็นส่วนตัว การเปิดเผยการใช้ข้อมูล และขั้นตอนตรวจของ Store รวมถึงส่งใหม่ถ้า Build ถูกปฏิเสธ'},
      {q: 'หลังเปิดตัวดูแลยังไง?', a: 'เรามีแพ็กเกจดูแลระบบ ครอบคลุมแก้บั๊ก อัปเดตตาม iOS และ Android เวอร์ชันใหม่ เฝ้าดูแอปค้างและประสิทธิภาพ และพัฒนาฟีเจอร์ใหม่'},
      {q: 'รับช่วงต่อแอปที่คนอื่นทำไว้ได้ไหม?', a: 'ได้ เราตรวจโค้ดก่อน แล้วตกลงกันว่าจะปรับปรุงทีละขั้นหรือสร้างบางส่วนใหม่ เราแนะนำให้เขียนใหม่ทั้งหมดเมื่อคุ้มกว่าจริงๆ เท่านั้น'},
      {q: 'ต้องทำทั้ง iOS และ Android ตั้งแต่แรกไหม?', a: 'ไม่เสมอไป หลายทีมเปิดตัวแพลตฟอร์มเดียวก่อนเพื่อทดสอบไอเดีย หรือใช้ React Native ครอบคลุมทั้งสองด้วยต้นทุนต่ำกว่า เราแนะนำตามว่าผู้ใช้ของคุณอยู่ที่ไหน'},
      {q: 'ต้องเตรียมอะไรให้เราตอนเริ่ม?', a: 'คำอธิบายสั้นๆ ของไอเดียหรือปัญหา ใครจะเป็นผู้ใช้ ดีไซน์หรือระบบเดิมที่ต้องเชื่อม และกำหนดเวลาคร่าวๆ แค่ไอเดียคร่าวๆ ก็พอ ขั้นสำรวจจะทำให้เป็นแผน'}
    ]
  const related     = isEN ? [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ] : [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ]

  const buildLines = [
    { n: 1, jsx: <><span style={{ color: 'var(--accent-2)' }}>$</span>&nbsp;eas build --platform all</> },
    { n: 2, jsx: <>&nbsp;</> },
    { n: 3, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'iOS build succeeded' : 'Build iOS สำเร็จ'}</> },
    { n: 4, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Android build succeeded' : 'Build Android สำเร็จ'}</> },
    { n: 5, jsx: <>&nbsp;</> },
    { n: 6, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'submitting to review' : 'ส่งเข้าตรวจสอบ'}</span></> },
    { n: 7, jsx: <>&nbsp;</> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Approved · Live in 48h' : 'ผ่านการอนุมัติ · ขึ้น Store ใน 48 ชม.'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>build.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {buildLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Store Rating' : 'คะแนน App Store'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 21l-2.4-7.6L3 11l6.6-2.4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '95%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '96%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-star" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '4.8★ average rating' : 'คะแนนเฉลี่ย 4.8★'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-git-merge', title: 'Cross-Platform Delivery', desc: 'Shared React Native or Flutter codebases when speed and consistency matter most, and native code when a product needs the platform’s full power.' },
    { icon: 'ti-bolt', title: 'Native-Grade Performance', desc: 'Smooth animation, efficient long lists, and platform conventions that feel at home on iOS and Android, profiled on real mid-range phones.' },
    { icon: 'ti-cloud-off', title: 'Offline-First Architecture', desc: 'Local storage, a sync strategy, and graceful behaviour when the signal drops, so people can keep working on a train or in a lift.' },
    { icon: 'ti-link', title: 'Engagement & Deep Links', desc: 'Push, in-app messages, and deep links designed to bring people back with something useful, not a stream of notifications.' },
    { icon: 'ti-rocket', title: 'MVP & Store Launch', desc: 'A focused first release in 6-10 weeks, plus store listings, privacy disclosures, and review handling taken care of for you.' },
    { icon: 'ti-shield-check', title: 'Security & PDPA-Aware Data', desc: 'Secure sign-in, encrypted storage, consent screens, and account deletion built in from the first version.' },
  ] : [
    { icon: 'ti-git-merge', title: 'Cross-Platform Delivery', desc: 'ใช้โค้ดชุดเดียวด้วย React Native หรือ Flutter เมื่อความเร็วและความสม่ำเสมอสำคัญที่สุด และใช้ Native เมื่อผลิตภัณฑ์ต้องการพลังเต็มของแพลตฟอร์ม' },
    { icon: 'ti-bolt', title: 'Native-Grade Performance', desc: 'แอนิเมชันลื่น รายการยาวที่เลื่อนไหล และรูปแบบการใช้งานตามแต่ละแพลตฟอร์ม ให้รู้สึกเป็นธรรมชาติทั้ง iOS และ Android ตรวจวัดบนมือถือรุ่นกลางๆ จริง' },
    { icon: 'ti-cloud-off', title: 'Offline-First Architecture', desc: 'เก็บข้อมูลในเครื่อง มีกลยุทธ์ซิงก์ และทำงานต่อได้อย่างนุ่มนวลเมื่อสัญญาณหาย ผู้ใช้ทำงานต่อบนรถไฟฟ้าหรือในลิฟต์ได้' },
    { icon: 'ti-link', title: 'Engagement & Deep Links', desc: 'Push Notification ข้อความในแอป และ Deep Link ที่ออกแบบให้ผู้ใช้กลับมาเพราะมีประโยชน์ ไม่ใช่เพราะถูกแจ้งเตือนรัวๆ' },
    { icon: 'ti-rocket', title: 'MVP & Store Launch', desc: 'เวอร์ชันแรกที่โฟกัสใน 6-10 สัปดาห์ พร้อมหน้าแสดงแอป การเปิดเผยข้อมูลความเป็นส่วนตัว และการจัดการเรื่องการตรวจที่เราดูแลให้' },
    { icon: 'ti-shield-check', title: 'Security & PDPA-Aware Data', desc: 'ล็อกอินปลอดภัย เก็บข้อมูลแบบเข้ารหัส หน้าขอความยินยอม และการลบบัญชี ทำไว้ตั้งแต่เวอร์ชันแรก' },
  ]

  const techStack = [
    { label: 'React Native', svg: 'reactNative' },
    { label: 'Flutter', svg: 'flutter' },
    { label: 'Swift', svg: 'swift' },
    { label: 'Kotlin', svg: 'kotlin' },
    { label: 'Firebase', svg: 'firebase' },
    { label: 'Expo', svg: 'expo' },
    { label: 'App Store', svg: 'appstore' },
    { label: 'Google Play', svg: 'googleplay' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'Users, goals, platforms, and a clear MVP boundary' },
    { no: '02', title: 'Design', desc: 'Mobile UX flows and a clickable prototype tested with real users' },
    { no: '03', title: 'Development', desc: 'Two-week sprints with a demo and an installable build' },
    { no: '04', title: 'Testing', desc: 'Device matrix, poor networks, automation, and a beta' },
    { no: '05', title: 'Store Launch', desc: 'Listings, privacy disclosures, and review handling' },
    { no: '06', title: 'Support', desc: 'Updates, crash triage, and new OS versions' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'ผู้ใช้ เป้าหมาย แพลตฟอร์ม และขอบเขต MVP ที่ชัดเจน' },
    { no: '02', title: 'Design', desc: 'ขั้นตอน UX บนมือถือ และต้นแบบที่กดได้ ทดสอบกับผู้ใช้จริง' },
    { no: '03', title: 'Development', desc: 'Sprint ละสองสัปดาห์ พร้อมสาธิตและ Build ที่ติดตั้งได้' },
    { no: '04', title: 'Testing', desc: 'ทดสอบข้ามอุปกรณ์ เครือข่ายไม่ดี ทดสอบอัตโนมัติ และรุ่นทดลอง' },
    { no: '05', title: 'Store Launch', desc: 'หน้าแสดงแอป การเปิดเผยข้อมูลความเป็นส่วนตัว และจัดการเรื่องการตรวจ' },
    { no: '06', title: 'Support', desc: 'อัปเดต แก้แอปค้าง และรองรับ OS เวอร์ชันใหม่' },
  ]

  const darkFaqs = isEN ? [
    { q: 'Does Haliviq build native or cross-platform mobile apps?', a: 'Both. We build native apps in Swift and Kotlin, and cross-platform apps in React Native and Flutter. We recommend an approach per product based on performance needs, team plans, and budget, not on a house preference. A trading app with heavy animation and camera access usually goes native. A content or e-commerce app with a small team usually ships faster and cheaper in React Native or Flutter, with no noticeable difference in UX.' },
    { q: 'Which technologies do you use for mobile development?', a: 'Swift and Kotlin for native work, React Native with Expo and Flutter for cross-platform, Firebase for common backend needs such as sign-in, push, and analytics, and full App Store and Google Play release management. We also mix per feature: a native module can sit inside a React Native app for the one screen that truly needs raw hardware performance.' },
    { q: 'Can you take over an app we already have?', a: 'Yes. We audit the codebase first, looking at dependency health, crash rates, architecture, and technical debt, and then agree a plan to steady your releases and improve the app step by step, whether we built it or someone else did. We say so plainly if a rewrite would cost less than patching a fragile codebase, but we default to gradual improvement wherever possible.' },
    { q: 'How long does it take to build a mobile app?', a: 'It depends on scope, but most first releases take a few months from kickoff. An MVP usually takes 6-10 weeks and a full-featured app 3-6 months. We start with discovery and design and then build in 2-week sprints, so you are testing real builds on a real phone within the first few weeks.' },
    { q: 'How much does a mobile app cost?', a: 'Cost depends mostly on feature count, number of platforms, and backend complexity. A focused MVP on one platform typically starts in the low-to-mid six figures (THB). A full-featured app on iOS and Android with a custom backend, payments, and offline support usually costs several times that. We quote a fixed price per phase after discovery, so there is no open-ended hourly bill.' },
    { q: 'Do you handle App Store and Google Play submission, including rejections?', a: 'Yes. We manage the whole release: screenshots, listing copy, privacy policy and data-use disclosures, age ratings, and the review submission. If a store rejects a build, which happens even to experienced teams, we find the guideline involved and resubmit. This is part of the launch phase, not a surprise extra.' },
    { q: 'What happens when users have a poor or no internet connection?', a: 'For apps where it matters, we design offline-first from the start: key data is stored on the device, actions queue and sync automatically when the signal returns, and the screen degrades gracefully instead of showing an empty error page. We scope this during discovery, because it changes both the architecture and the testing plan.' },
    { q: 'Who owns the code, design files, and App Store listing after launch?', a: 'You do, entirely. Source code, design files, and ownership of the store accounts pass to you on final payment. We recommend building and submitting under your own Apple Developer and Google Play accounts from day one, so you have full control and visibility the moment the app goes live and no dependency on us to keep it running.' },
    { q: 'Do you build apps that meet Thai PDPA requirements?', a: 'We design for PDPA from the first sprint: collecting only the data the app needs, showing clear consent screens in Thai, allowing users to delete their account and data, and protecting data in storage and in transit. For a formal compliance review we can involve our PDPA compliance service.' },
    { q: 'What do you need from us to start?', a: 'A short description of the idea or problem, who will use the app, any existing designs or systems it must connect to, and a rough deadline. A rough idea is enough. The discovery session turns it into a scope, a timeline, and a platform recommendation.' },
  ] : [
    { q: 'Haliviq พัฒนาแอป Native หรือ Cross-platform?', a: 'ทำทั้งสองแบบ เราพัฒนาแอป Native ด้วย Swift และ Kotlin และแอป Cross-platform ด้วย React Native และ Flutter โดยแนะนำตามความต้องการของแต่ละผลิตภัณฑ์ ทั้งเรื่องประสิทธิภาพ แผนของทีม และงบประมาณ ไม่ยึดติดกับแนวทางใดแนวทางหนึ่ง แอปเทรดที่มีแอนิเมชันหนักและใช้กล้องเยอะมักไปทาง Native ส่วนแอปคอนเทนต์หรือ E-commerce ที่ทีมเล็ก มักออกได้เร็วและประหยัดกว่าด้วย React Native หรือ Flutter โดย UX ไม่ต่างกันจนสังเกตได้' },
    { q: 'ใช้เทคโนโลยีอะไรพัฒนาแอปมือถือ?', a: 'Swift และ Kotlin สำหรับงาน Native, React Native ร่วมกับ Expo และ Flutter สำหรับ Cross-platform, Firebase สำหรับความต้องการ Backend ทั่วไปอย่างล็อกอิน Push และ Analytics และดูแลการปล่อยเวอร์ชันทั้ง App Store และ Google Play ให้ครบ เรายังเลือกใช้แบบผสมในระดับฟีเจอร์ได้ เช่น ใส่ Native Module ไว้ในแอป React Native เฉพาะหน้าที่ต้องการประสิทธิภาพระดับฮาร์ดแวร์จริงๆ' },
    { q: 'รับช่วงดูแลแอปที่มีอยู่แล้วได้ไหม?', a: 'ได้ เราตรวจโค้ดก่อน ดูทั้งสุขภาพของ Dependency อัตราแอปค้าง สถาปัตยกรรม และหนี้ทางเทคนิค แล้วตกลงแผนทำให้การปล่อยเวอร์ชันนิ่งและพัฒนาแอปต่อทีละขั้น ไม่ว่าเราหรือคนอื่นจะเป็นคนสร้างไว้ ถ้าเขียนใหม่ถูกกว่าการปะโค้ดที่เปราะบาง เราจะบอกตรงๆ แต่โดยทั่วไปเราเลือกปรับปรุงแบบค่อยเป็นค่อยไปมากกว่า' },
    { q: 'พัฒนาแอปมือถือใช้เวลานานแค่ไหน?', a: 'ขึ้นกับขอบเขตงาน แต่เวอร์ชันแรกส่วนใหญ่ใช้เวลาไม่กี่เดือนนับจากเริ่มโปรเจกต์ โดย MVP มักใช้ 6-10 สัปดาห์ และแอปเต็มรูปแบบ 3-6 เดือน เราเริ่มจากสำรวจความต้องการและออกแบบ แล้วพัฒนาเป็น Sprint ละ 2 สัปดาห์ คุณจะได้ลอง Build จริงบนมือถือจริงภายในไม่กี่สัปดาห์แรก' },
    { q: 'แอปมือถือมีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นกับจำนวนฟีเจอร์ จำนวนแพลตฟอร์ม และความซับซ้อนของ Backend เป็นหลัก MVP ที่โฟกัสแพลตฟอร์มเดียวโดยทั่วไปเริ่มที่หลักแสนกลางๆ (บาท) ส่วนแอปเต็มรูปแบบทั้ง iOS และ Android พร้อม Backend ที่ทำเอง ระบบชำระเงิน และใช้งานออฟไลน์ได้ มักอยู่ที่หลายเท่าของตัวเลขนั้น เราเสนอราคาคงที่แบ่งตามช่วงงานหลังสำรวจความต้องการ เพื่อไม่ให้มีบิลรายชั่วโมงแบบไม่มีเพดาน' },
    { q: 'ดูแลเรื่องส่งขึ้น App Store และ Google Play รวมถึงกรณีถูกปฏิเสธไหม?', a: 'ดูแล เราจัดการขั้นตอนปล่อยแอปทั้งหมด ตั้งแต่ภาพหน้าจอ ข้อความหน้าแสดงแอป นโยบายความเป็นส่วนตัวและการเปิดเผยการใช้ข้อมูล การจัดเรตอายุ จนถึงส่งเข้าตรวจ ถ้า Store ไหนปฏิเสธ ซึ่งเกิดได้แม้กับทีมที่มีประสบการณ์ เราจะหาว่าขัดกับข้อกำหนดข้อไหนแล้วส่งใหม่ให้ ซึ่งรวมอยู่ในขั้นตอนเปิดตัวแล้ว ไม่ใช่ค่าใช้จ่ายเพิ่มที่ไม่คาดคิด' },
    { q: 'ถ้าผู้ใช้เน็ตไม่ดีหรือไม่มีเน็ตเลยจะเป็นยังไง?', a: 'สำหรับแอปที่เรื่องนี้สำคัญ เราออกแบบแบบ Offline-first ตั้งแต่ต้น ข้อมูลสำคัญเก็บไว้ในเครื่อง คำสั่งต่างๆ เข้าคิวและซิงก์เองเมื่อสัญญาณกลับมา และหน้าจอลดความสามารถลงอย่างนุ่มนวล ไม่ใช่ขึ้นหน้า Error ว่างเปล่า เราจะกำหนดขอบเขตเรื่องนี้ตั้งแต่ขั้นสำรวจ เพราะมีผลต่อทั้งสถาปัตยกรรมและแผนการทดสอบ' },
    { q: 'โค้ด ไฟล์ดีไซน์ และหน้าแสดงแอปบน App Store เป็นของใครหลังเปิดตัว?', a: 'เป็นของคุณทั้งหมด ซอร์สโค้ด ไฟล์ดีไซน์ และความเป็นเจ้าของบัญชี Store จะโอนให้คุณเมื่อชำระเงินงวดสุดท้าย เราแนะนำให้พัฒนาและส่งแอปภายใต้บัญชี Apple Developer และ Google Play ของคุณเองตั้งแต่วันแรก คุณจะควบคุมและเห็นทุกอย่างได้เต็มที่ทันทีที่แอปออนไลน์ และไม่ต้องพึ่งเราเพื่อให้แอปทำงานต่อ' },
    { q: 'ทำแอปให้เป็นไปตาม PDPA ของไทยได้ไหม?', a: 'เราออกแบบโดยคำนึงถึง PDPA ตั้งแต่สปรินต์แรก เก็บเฉพาะข้อมูลที่แอปต้องใช้ มีหน้าขอความยินยอมเป็นภาษาไทยที่ชัดเจน ให้ผู้ใช้ลบบัญชีและข้อมูลได้ และปกป้องข้อมูลทั้งตอนเก็บและตอนส่ง ถ้าต้องการตรวจความสอดคล้องอย่างเป็นทางการ เราดึงบริการ PDPA Compliance เข้ามาช่วยได้' },
    { q: 'ต้องเตรียมอะไรให้เราตอนเริ่ม?', a: 'คำอธิบายสั้นๆ ของไอเดียหรือปัญหา ใครจะเป็นผู้ใช้แอป ดีไซน์หรือระบบเดิมที่ต้องเชื่อม และกำหนดเวลาคร่าวๆ แค่ไอเดียคร่าวๆ ก็พอ ขั้นสำรวจจะทำให้เป็นขอบเขตงาน ไทม์ไลน์ และคำแนะนำเรื่องแพลตฟอร์ม' },
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
            {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven mobile stacks and services we apply where they fit — chosen for the product, not the trend cycle.'
              : 'เทคโนโลยีและบริการสำหรับมือถือที่ผ่านการใช้งานจริง เลือกตามโจทย์ของผลิตภัณฑ์จริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from problem to production — adjusted per product, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากโจทย์ปัญหาสู่ระบบจริง ปรับตามแต่ละผลิตภัณฑ์ ไม่ใช่สูตรตายตัว'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we build mobile apps.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราพัฒนาแอปมือถือ'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
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
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/mobile-apps/why1.jpg"
      whyImg2="/images/services/mobile-apps/why2.jpg"
      featureImg="/images/services/mobile-apps/feature.jpg"
      processImg="/images/services/mobile-apps/process.jpg"
    />
  )
}
