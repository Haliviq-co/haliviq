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
  const title = isEN ? "Media & Entertainment Software & Digital Solutions | Haliviq" : "สื่อและบันเทิง | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Streaming, content, and audience software for publishers, studios, and creators who want viewers to keep coming back and be willing to pay."
    : "ซอฟต์แวร์สตรีมมิง จัดการคอนเทนต์ และวิเคราะห์ผู้ชม สำหรับสำนักข่าว สตูดิโอ และครีเอเตอร์ที่อยากให้คนดูกลับมาซ้ำและยอมจ่าย"
  const url = `https://haliviq.com/${params.lang}/industries/media-entertainment`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Media & Entertainment' : 'อุตสาหกรรม / สื่อและบันเทิง'
  const heroSubhead = isEN
    ? 'Streaming, content, and audience software for publishers, studios, and creators who want viewers to keep coming back and be willing to pay.'
    : 'ซอฟต์แวร์สตรีมมิง จัดการคอนเทนต์ และวิเคราะห์ผู้ชม สำหรับสำนักข่าว สตูดิโอ และครีเอเตอร์ที่อยากให้คนดูกลับมาซ้ำและยอมจ่าย'

  const challenges = isEN ? [
    { icon: 'ti-server-2', title: 'Streaming Infrastructure & Scaling Costs', desc: 'Video is expensive to deliver: bandwidth, encoding, and storage costs climb with every new viewer, and a live event can multiply traffic in minutes. Many Thai viewers watch on mobile data, so quality has to adapt to the connection or playback stalls and they leave. We design adaptive streaming, caching, and cost reports so you know what each hour of viewing costs and can plan for peaks such as a final, a concert, or a premiere.' },
    { icon: 'ti-users', title: 'Audience-Retention Pressure', desc: 'A viewer can cancel a subscription in a few taps, and there is always another show one swipe away. Churn usually has causes you can find in the data: people who never finish onboarding, who watch once and drift, or who leave after a price change. We build the tracking and dashboards that show where viewers fall away, along with the reminders, recommendations, and win-back offers to try.' },
    { icon: 'ti-shield-lock', title: 'Content-Rights & DRM Complexity', desc: 'Content comes with territories, licence windows, language versions, and takedown obligations, and tracking this in spreadsheets leads to expensive mistakes such as streaming something after its licence ends. We build rights and metadata tools that record where and when each title may be shown, apply the rules automatically, and protect streams with DRM where a licensor requires it.' },
    { icon: 'ti-coin', title: 'Monetization Beyond Subscriptions', desc: 'Monthly fees alone rarely carry a media business. Revenue also comes from ads, one-off ticket and pay-per-view sales, memberships, merchandise, tips to creators, and sponsorships. Each of these needs its own flow, payment method, and reporting. We build these as parts of one platform, so a fan who buys a concert ticket can be offered a membership next, and you can see what each audience is worth.' },
  ] : [
    { icon: 'ti-server-2', title: 'ระบบ Streaming และต้นทุนเมื่อผู้ชมเพิ่ม', desc: 'การส่งวิดีโอมีต้นทุนสูง ทั้งแบนด์วิดท์ การเข้ารหัสวิดีโอ และพื้นที่เก็บ ที่เพิ่มตามจำนวนผู้ชมทุกคน และไลฟ์สดครั้งเดียวทำให้ทราฟฟิกพุ่งหลายเท่าได้ในไม่กี่นาที คนดูไทยหลายคนดูผ่านเน็ตมือถือ คุณภาพจึงต้องปรับตามสัญญาณ ไม่งั้นภาพจะค้างแล้วเขาก็เลิกดู เราออกแบบระบบสตรีมที่ปรับคุณภาพได้เอง การแคช และรายงานต้นทุน คุณจะรู้ว่าการดูหนึ่งชั่วโมงมีต้นทุนเท่าไร และเตรียมรับช่วงพีกอย่างนัดชิง คอนเสิร์ต หรือรอบฉายแรกได้' },
    { icon: 'ti-users', title: 'แรงกดดันในการรักษาผู้ชม', desc: 'ผู้ชมยกเลิกสมาชิกได้ในไม่กี่แตะ และมีรายการอื่นให้ดูอีกแค่ปัดนิ้วเดียว สาเหตุที่คนเลิกมักหาเจอในข้อมูล เช่น คนที่ใช้งานครั้งแรกแล้วไม่ทำต่อ ดูครั้งเดียวแล้วหายไป หรือเลิกหลังปรับราคา เราสร้างระบบติดตามและแดชบอร์ดที่ชี้ว่าคนดูหลุดไปตรงไหน พร้อมข้อความเตือน ระบบแนะนำ และข้อเสนอดึงกลับมาให้ลองใช้' },
    { icon: 'ti-shield-lock', title: 'ความซับซ้อนของลิขสิทธิ์คอนเทนต์และ DRM', desc: 'คอนเทนต์มีเงื่อนไขเรื่องพื้นที่เผยแพร่ ช่วงเวลาของลิขสิทธิ์ เวอร์ชันภาษา และหน้าที่ต้องถอดเมื่อถูกร้องเรียน ถ้าจดไว้ในสเปรดชีต มักพลาดแล้วเสียหายหนัก เช่น ยังฉายต่อหลังลิขสิทธิ์หมดอายุ เราทำเครื่องมือจัดการสิทธิ์และเมตะดาต้าที่บันทึกว่าแต่ละเรื่องฉายได้ที่ไหนและเมื่อไร ใช้กฎให้อัตโนมัติ และป้องกันสตรีมด้วย DRM เมื่อเจ้าของลิขสิทธิ์กำหนด' },
    { icon: 'ti-coin', title: 'หารายได้นอกเหนือจากค่าสมาชิก', desc: 'ค่าสมาชิกรายเดือนอย่างเดียวมักไม่พอเลี้ยงธุรกิจสื่อ รายได้ยังมาจากโฆษณา การขายบัตรและ Pay-per-view สมาชิกแบบต่าง ๆ สินค้า ทิปให้ครีเอเตอร์ และสปอนเซอร์ แต่ละช่องทางต้องมีขั้นตอน วิธีจ่ายเงิน และรายงานของตัวเอง เราสร้างทั้งหมดเป็นส่วนหนึ่งของแพลตฟอร์มเดียว แฟนที่ซื้อบัตรคอนเสิร์ตจะได้รับข้อเสนอสมัครสมาชิกต่อ และคุณเห็นว่าผู้ชมแต่ละกลุ่มมีมูลค่าเท่าไร' },
  ]

  const metrics = [
    { value: '$332B', label: isEN ? 'Global Streaming/OTT Market Size by 2030' : 'ขนาดตลาด Streaming/OTT ทั่วโลกภายในปี 2030', source: 'Grand View Research OTT Market Report, 2024' },
    { value: '41%', label: isEN ? 'Average Annual Subscriber Churn Rate' : 'อัตราสมาชิกยกเลิกเฉลี่ยต่อปี', source: 'Deloitte Digital Media Trends, 2024' },
    { value: '22%', label: isEN ? 'Ad-Revenue Growth from Targeted, Programmatic Ads' : 'การเติบโตของรายได้โฆษณาแบบเจาะกลุ่มและ Programmatic', source: 'PwC Global Entertainment & Media Outlook, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-device-tv', title: 'Streaming & OTT Platforms', desc: 'Apps for web, iOS, Android, and smart TV with a catalogue, search, player, watchlist, and subscription handling. Video is delivered in adaptive quality, with live and on-demand in the same app and DRM where rights holders require it. Thai and English interfaces and subtitles are supported from the start, and payments work with card, PromptPay, and e-wallets.' },
    { icon: 'ti-folders', title: 'Content Management Systems', desc: 'Editorial back-office tools for uploading, tagging, scheduling, and publishing video, articles, and podcasts. Each title carries its rights window, territories, and language versions, so it appears and disappears on the right date. Editors work from a clean workflow with draft, review, and publish stages and a record of who changed what.' },
    { icon: 'ti-chart-bar', title: 'Audience Analytics Dashboards', desc: 'Dashboards that show who is watching, what they finish, where they drop out, and what drives sign-ups and cancellations. Editors see which titles keep people watching; marketing sees which campaigns brought viewers who stayed. Viewer data is handled in line with PDPA, with consent recorded.' },
    { icon: 'ti-ticket', title: 'Ticketing & Event Platforms', desc: 'Online ticket sales, seat maps or general admission, queue handling for high-demand drops, QR entry, and resale or transfer rules. Organisers see sales live and can offer presale, bundles, and add-ons. The booking flow is built for the surge that happens when a popular show goes on sale.' },
    { icon: 'ti-coin', title: 'Creator-Monetization Tools', desc: 'Tools for creators to earn directly from fans: memberships, tips, paid posts, pay-per-view, and merchandise links, with payouts and clear statements. Creators get a simple dashboard for their audience and earnings, and your platform takes its share transparently. We design onboarding so a new creator can publish and receive a first payment quickly.' },
    { icon: 'ti-sparkles', title: 'Recommendation Engines', desc: 'Recommendation models that suggest what to watch next based on viewing history, favourites, time of day, and content similarity, including Thai-language titles and metadata. Editors can pin or exclude titles so promotions and rights are respected. We measure it against a simple baseline so you can see if it increases watch time.' },
  ] : [
    { icon: 'ti-device-tv', title: 'Streaming & OTT Platforms', desc: 'แอปบนเว็บ iOS Android และสมาร์ททีวี ที่มีคลังคอนเทนต์ การค้นหา ตัวเล่นวิดีโอ รายการที่อยากดู และการจัดการสมาชิก ส่งวิดีโอแบบปรับคุณภาพตามสัญญาณ มีทั้งไลฟ์และวิดีโอตามสั่งในแอปเดียว และใช้ DRM เมื่อเจ้าของสิทธิ์กำหนด รองรับหน้าจอและซับไตเติลภาษาไทยและอังกฤษตั้งแต่เริ่ม และจ่ายเงินได้ทั้งบัตร PromptPay และอี-วอลเล็ต' },
    { icon: 'ti-folders', title: 'Content Management Systems', desc: 'เครื่องมือหลังบ้านให้ทีมบรรณาธิการอัปโหลด ติดแท็ก ตั้งเวลา และเผยแพร่ทั้งวิดีโอ บทความ และพอดแคสต์ แต่ละรายการมีช่วงเวลาลิขสิทธิ์ พื้นที่ที่ฉายได้ และเวอร์ชันภาษาติดอยู่ ขึ้นและถอดถูกวันเอง ทีมทำงานตามขั้นตอนที่ชัดเจน ตั้งแต่ร่าง ตรวจ จนถึงเผยแพร่ และมีบันทึกว่าใครแก้อะไร' },
    { icon: 'ti-chart-bar', title: 'Audience Analytics Dashboards', desc: 'แดชบอร์ดที่บอกว่าใครกำลังดู ดูอะไรจนจบ หลุดตรงไหน และอะไรทำให้คนสมัครหรือยกเลิก ทีมบรรณาธิการเห็นว่าเรื่องไหนทำให้คนดูต่อ ทีมการตลาดเห็นว่าแคมเปญไหนพาคนดูที่อยู่ต่อมาให้ ข้อมูลผู้ชมจัดการตาม PDPA และบันทึกความยินยอมไว้' },
    { icon: 'ti-ticket', title: 'Ticketing & Event Platforms', desc: 'ระบบขายบัตรออนไลน์ ทั้งแบบเลือกที่นั่งและแบบไม่ระบุที่นั่ง ระบบจัดคิวเมื่อมีคนแย่งซื้อพร้อมกัน เข้างานด้วย QR และกติกาการขายต่อหรือโอนบัตร ผู้จัดงานเห็นยอดขายสด ตั้งพรีเซลล์ แพ็กเกจ และสินค้าเสริมได้ ขั้นตอนจองสร้างมาให้รับช่วงที่คนทะลักเข้ามาตอนเปิดขายรอบที่คนอยากได้' },
    { icon: 'ti-coin', title: 'Creator-Monetization Tools', desc: 'เครื่องมือให้ครีเอเตอร์หารายได้จากแฟนโดยตรง ทั้งสมาชิก ทิป โพสต์เฉพาะสมาชิก Pay-per-view และลิงก์ขายสินค้า พร้อมการโอนเงินให้และใบสรุปรายได้ที่ชัดเจน ครีเอเตอร์ได้แดชบอร์ดง่าย ๆ ดูผู้ติดตามและรายได้ ส่วนแพลตฟอร์มของคุณหักส่วนแบ่งอย่างโปร่งใส เราออกแบบขั้นตอนสมัครให้ครีเอเตอร์ใหม่เผยแพร่งานและรับเงินก้อนแรกได้เร็ว' },
    { icon: 'ti-sparkles', title: 'Recommendation Engines', desc: 'โมเดลแนะนำว่าควรดูอะไรต่อ จากประวัติการดู รายการโปรด ช่วงเวลา และความคล้ายของคอนเทนต์ รวมถึงชื่อเรื่องและข้อมูลภาษาไทย ทีมบรรณาธิการปักหมุดหรือยกเว้นบางเรื่องได้ เพื่อให้โปรโมชันและสิทธิ์ถูกต้อง เราวัดผลเทียบกับวิธีพื้นฐานง่าย ๆ คุณจะเห็นเองว่าช่วยให้คนดูนานขึ้นจริงหรือไม่' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'WebRTC', 'HLS/DASH', 'AWS Media Services', 'Redis', 'PostgreSQL', 'Machine Learning', 'GraphQL', 'Stripe', 'CDN', 'Elasticsearch', 'Flutter', 'Hono']

  const useCases = isEN ? [
    { no: '01', title: 'Streaming/OTT Platform', desc: 'A full streaming service: apps for web, mobile, and TV, a subscription and payment flow, a catalogue with Thai-language search, and the admin tools to run it. Suitable for a broadcaster, publisher, or sports and music brand moving from social-media distribution to its own audience. We usually launch with a focused catalogue and one or two platforms, then add more devices as viewing data shows where your audience is.' },
    { no: '02', title: 'Creator-Monetization App', desc: 'An app where creators publish, build a fan community, and earn from memberships, tips, and paid content. Fans pay with the methods they use daily, creators see earnings and audience data, and your team has moderation and payout tools. Fits a talent agency, a network of independent creators, or a media brand launching a membership programme.' },
    { no: '03', title: 'Audience-Analytics Dashboard', desc: 'A dashboard for editors and marketing showing viewing time, completion rates, returning viewers, and churn by title, campaign, and channel. It joins data from your player, CRM, and ad platforms into one view, so a discussion about what to commission or promote starts from the same numbers. Handy for teams who have data in several tools and no single place to read it.' },
  ] : [
    { no: '01', title: 'Streaming/OTT Platform', desc: 'บริการสตรีมมิงเต็มรูปแบบ ประกอบด้วยแอปบนเว็บ มือถือ และทีวี ขั้นตอนสมัครสมาชิกและจ่ายเงิน คลังคอนเทนต์ที่ค้นหาภาษาไทยได้ และเครื่องมือแอดมินสำหรับดูแลทั้งหมด เหมาะกับสถานี สำนักพิมพ์ หรือแบรนด์กีฬาและดนตรีที่อยากย้ายจากการกระจายผ่านโซเชียลมามีฐานผู้ชมของตัวเอง ส่วนใหญ่เราเปิดตัวด้วยคลังที่โฟกัสและหนึ่งถึงสองแพลตฟอร์มก่อน แล้วค่อยเพิ่มอุปกรณ์ตามข้อมูลการดูที่บอกว่าผู้ชมของคุณอยู่ที่ไหน' },
    { no: '02', title: 'Creator-Monetization App', desc: 'แอปที่ครีเอเตอร์เผยแพร่งาน สร้างคอมมูนิตี้แฟน และหารายได้จากสมาชิก ทิป และคอนเทนต์แบบเสียเงิน แฟนจ่ายด้วยวิธีที่ใช้ทุกวัน ครีเอเตอร์เห็นรายได้และข้อมูลผู้ติดตาม และทีมคุณมีเครื่องมือดูแลคอนเทนต์และโอนเงินให้ เหมาะกับเอเจนซีศิลปิน เครือข่ายครีเอเตอร์อิสระ หรือแบรนด์สื่อที่จะเปิดโปรแกรมสมาชิก' },
    { no: '03', title: 'Audience-Analytics Dashboard', desc: 'แดชบอร์ดสำหรับทีมบรรณาธิการและการตลาด แสดงเวลาที่ดู อัตราดูจนจบ ผู้ชมที่กลับมา และคนเลิกใช้ แยกตามเรื่อง แคมเปญ และช่องทาง รวมข้อมูลจากตัวเล่นวิดีโอ CRM และแพลตฟอร์มโฆษณาไว้ในมุมมองเดียว เวลาคุยกันว่าจะสร้างหรือโปรโมตอะไร ทุกคนจะเริ่มจากตัวเลขชุดเดียวกัน เหมาะกับทีมที่ข้อมูลกระจายอยู่หลายเครื่องมือและไม่มีที่ไหนให้ดูรวม' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Stream' : 'Studio / Stream'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <rect x="10" y="10" width="110" height="50" rx="8" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <path d="M55 25 L80 35 L55 45 Z" fill="var(--lime)" />
            </svg>
            <span
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase"
              style={{ background: 'rgba(83,195,215,0.14)', color: 'var(--accent-2)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              {isEN ? 'Live' : 'ถ่ายทอดสด'}
            </span>
          </div>
          <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Season Finale Premiere' : 'รอบปฐมทัศน์ตอนจบซีซัน'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '128K watching now' : 'มีผู้ชม 128K คนขณะนี้'}</p>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Viewers' : 'ผู้ชม'}</span>
          <i className="ti ti-broadcast" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-device-tv" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '+12% vs last week' : '+12% เทียบสัปดาห์ก่อน'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Watch Now →' : 'ชมเลย →'}
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
                  {isEN ? 'Media &' : 'สื่อและ'}<br />{isEN ? 'Entertainment' : 'บันเทิง'}
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
                  ? 'We build the platforms that publish and monetise content: streaming and OTT apps, content management systems, audience analytics, ticketing, and tools for creators. A project starts with a plain question: what does a viewer do between discovering your content and paying for it, and where do they leave? From there we design the player, catalogue, sign-up, and payment flow, and the back-office tools your editors and rights team use every day. We build for Thai viewing habits, with mobile-first screens, Thai-language search and subtitles, payment by card, PromptPay, or e-wallet, and capacity planned for the spikes that come with a live event or a viral clip.'
                  : 'เราสร้างแพลตฟอร์มสำหรับเผยแพร่และหารายได้จากคอนเทนต์ ทั้งแอป Streaming และ OTT ระบบจัดการคอนเทนต์ การวิเคราะห์ผู้ชม ระบบจำหน่ายบัตร และเครื่องมือสำหรับครีเอเตอร์ โปรเจกต์เริ่มจากคำถามตรง ๆ ว่าคนดูทำอะไรบ้างตั้งแต่เจอคอนเทนต์ของคุณจนถึงตอนจ่ายเงิน และเขาเลิกไปตรงไหน จากนั้นเราออกแบบทั้งตัวเล่นวิดีโอ หน้าคลังคอนเทนต์ การสมัคร และการจ่ายเงิน รวมถึงเครื่องมือหลังบ้านที่ทีมบรรณาธิการและฝ่ายลิขสิทธิ์ใช้ทุกวัน เราออกแบบให้ตรงกับพฤติกรรมการดูของคนไทย คือเน้นมือถือ ค้นหาและมีซับไตเติลเป็นภาษาไทย จ่ายผ่านบัตร PromptPay หรืออี-วอลเล็ตได้ และเผื่อกำลังรับสำหรับช่วงที่มีไลฟ์สดหรือคลิปที่กลายเป็นไวรัล'}
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
                ? 'Four things that decide whether a media product makes money: delivery cost at scale, viewer loyalty, rights management, and income beyond the subscription.'
                : 'สี่เรื่องที่ตัดสินว่าผลิตภัณฑ์สื่อจะทำเงินได้ไหม คือต้นทุนส่งวิดีโอเมื่อคนดูเยอะ ความภักดีของผู้ชม การจัดการลิขสิทธิ์ และรายได้นอกเหนือจากค่าสมาชิก'}
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
              {isEN ? 'What we build for publishers, broadcasters, and creators, and what each tool does for audiences and for your own team.' : 'ระบบที่เราสร้างให้สำนักพิมพ์ สถานี และครีเอเตอร์ และสิ่งที่แต่ละเครื่องมือทำให้ทั้งผู้ชมและทีมของคุณ'}
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
                ? 'Video delivery, real-time, and web tools we use so playback stays smooth and content reaches viewers on any device.'
                : 'เครื่องมือด้านการส่งวิดีโอ เรียลไทม์ และเว็บที่เราใช้ เพื่อให้เล่นวิดีโอลื่นและคอนเทนต์ไปถึงคนดูได้ทุกอุปกรณ์'}
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
              {isEN ? 'Three typical projects, covering what is built, who uses it, and how it earns or saves money.' : 'ตัวอย่างโปรเจกต์ทั่วไปสามแบบ ว่าสร้างอะไร ใครใช้ และช่วยหาเงินหรือประหยัดเงินได้ยังไง'}
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
