import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Cookie Policy | Haliviq' : 'นโยบายคุกกี้ | Haliviq'
  const description = isEN
    ? 'How Haliviq uses cookies and similar technologies, and how you can manage your preferences.'
    : 'Haliviq ใช้คุกกี้และเทคโนโลยีที่คล้ายกันอย่างไร และท่านตั้งค่าได้อย่างไร'
  const siteUrl = `https://www.haliviq.com/${params.lang}/cookies`
  return { title, description, alternates: alt(siteUrl), openGraph: { title, description, url: siteUrl } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const lastUpdated = isEN ? 'Last updated: October 5, 2026' : 'ปรับปรุงล่าสุด: 5 ตุลาคม 2569'

  const sections = isEN ? [
    { title: '1. What Are Cookies?', body: 'Cookies are small text files stored on your device when you visit a website. They help the site work properly, remember your preferences, and provide information to the site owner. Similar technologies, such as local storage, are covered by this policy too.' },
    { title: '2. Cookies We Use', body: 'Essential cookies and storage: required for the site to function, such as remembering your language and your cookie choice. These cannot be switched off. Analytics and advertising cookies (optional): set by Google (Google Tag / Google Ads) to measure visits, understand which pages are useful, and measure the effectiveness of our campaigns. These are only enabled if you choose "Accept all".' },
    { title: '3. Your Choices', body: 'When you first visit, you can choose "Accept all" or "Essential only". Your choice is stored in your browser, and you can change it at any time by clearing this site\'s data in your browser settings, after which the banner will appear again. You can also block or delete cookies through your browser settings; some features may not work as intended if you do.' },
    { title: '4. Third-Party Cookies', body: 'Optional analytics and advertising cookies are provided by Google. Their handling of data is described in Google\'s own privacy policy. We do not control third-party cookies directly.' },
    { title: '5. Retention', body: 'Your cookie preference is kept in your browser until you clear it. Analytics cookies expire according to the provider\'s standard schedule, typically up to 13 months.' },
    { title: '6. Legal Basis', body: 'We use essential cookies based on our legitimate interest in operating the site. Optional cookies are used only with your consent, in line with Thailand\'s Personal Data Protection Act B.E. 2562 (PDPA) and other applicable laws. See our Privacy Policy for more detail on how personal data is handled.' },
    { title: '7. Changes and Contact', body: 'We may update this Cookie Policy from time to time and will revise the date above. Questions can be sent to info@haliviq.com.' },
  ] : [
    { title: '1. คุกกี้คืออะไร', body: 'คุกกี้คือไฟล์ข้อความขนาดเล็กที่เก็บไว้ในอุปกรณ์ของท่านเมื่อเข้าเว็บไซต์ ช่วยให้เว็บไซต์ทำงานได้ถูกต้อง จำการตั้งค่าของท่าน และส่งข้อมูลให้เจ้าของเว็บไซต์ นโยบายนี้ครอบคลุมเทคโนโลยีที่คล้ายกัน เช่น Local Storage ด้วย' },
    { title: '2. คุกกี้ที่เราใช้', body: 'คุกกี้และพื้นที่จัดเก็บที่จำเป็น: เว็บไซต์ต้องใช้เพื่อทำงาน เช่น จำภาษาและตัวเลือกคุกกี้ของท่าน ปิดไม่ได้ คุกกี้วิเคราะห์และโฆษณา (ไม่บังคับ): ตั้งโดย Google (Google Tag / Google Ads) เพื่อนับผู้เข้าชม ดูว่าหน้าใดมีประโยชน์ และวัดผลแคมเปญของเรา จะเปิดใช้ก็ต่อเมื่อท่านเลือก "ยอมรับทั้งหมด" เท่านั้น' },
    { title: '3. ทางเลือกของท่าน', body: 'เมื่อเข้าเว็บไซต์ครั้งแรก ท่านเลือกได้ว่าจะ "ยอมรับทั้งหมด" หรือ "เฉพาะที่จำเป็น" ตัวเลือกจะถูกเก็บไว้ในเบราว์เซอร์ ท่านเปลี่ยนได้ทุกเมื่อโดยล้างข้อมูลของเว็บไซต์นี้ในการตั้งค่าเบราว์เซอร์ แล้วแบนเนอร์จะขึ้นมาอีกครั้ง ท่านยังบล็อกหรือลบคุกกี้ผ่านเบราว์เซอร์ได้ แต่บางฟีเจอร์อาจใช้งานไม่ได้เต็มที่' },
    { title: '4. คุกกี้ของบุคคลที่สาม', body: 'คุกกี้วิเคราะห์และโฆษณาที่ไม่บังคับให้บริการโดย Google ซึ่งดูแลข้อมูลตามนโยบายความเป็นส่วนตัวของ Google เราควบคุมคุกกี้ของบุคคลที่สามโดยตรงไม่ได้' },
    { title: '5. ระยะเวลาการเก็บรักษา', body: 'ตัวเลือกคุกกี้ของท่านจะอยู่ในเบราว์เซอร์จนกว่าท่านจะล้างข้อมูล คุกกี้วิเคราะห์จะหมดอายุตามที่ผู้ให้บริการกำหนด โดยทั่วไปไม่เกิน 13 เดือน' },
    { title: '6. ฐานทางกฎหมาย', body: 'เราใช้คุกกี้ที่จำเป็นโดยอาศัยประโยชน์โดยชอบด้วยกฎหมายในการดำเนินงานเว็บไซต์ ส่วนคุกกี้ที่ไม่บังคับจะใช้เมื่อท่านยินยอมเท่านั้น ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) และกฎหมายอื่นที่เกี่ยวข้อง ดูวิธีจัดการข้อมูลส่วนบุคคลเพิ่มเติมได้ที่นโยบายความเป็นส่วนตัว' },
    { title: '7. การเปลี่ยนแปลงและการติดต่อ', body: 'เราอาจปรับปรุงนโยบายคุกกี้นี้เป็นครั้งคราว และจะแก้วันที่ด้านบนให้ตรงกัน หากมีคำถามติดต่อได้ที่ info@haliviq.com' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Legal' : 'กฎหมาย'}</p>
            <h1 className="t-display text-[clamp(2.4rem,5vw,4rem)] leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>{isEN ? 'Cookie Policy' : 'นโยบายคุกกี้'}</h1>
            <p className="text-sm" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{lastUpdated}</p>
          </div>
        </section>
        <section className="pb-24 pt-4" style={{ background: 'var(--bg)' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.3rem' }}>{s.title}</h2>
                <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.7)', fontSize: '1rem', fontWeight: 400 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
