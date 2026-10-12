import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import CookieBanner from '@/components/CookieBanner'
import ChatBot from '@/components/ChatBot'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  return {
    title: isEN ? 'Haliviq | Human Ideas. Intelligent Future.' : 'Haliviq | ความคิดของคน สู่อนาคตที่ฉลาดขึ้น',
    description: isEN
      ? 'Haliviq is a design and AI studio in Bangkok. We turn human ideas into intelligent products: UX/UI design, websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.'
      : 'Haliviq เป็นสตูดิโอดีไซน์และ AI ในกรุงเทพฯ เปลี่ยนความคิดของคนให้เป็นผลิตภัณฑ์ที่ฉลาดขึ้น ทั้งออกแบบ UX/UI, website, แอปมือถือ, LINE mini app และระบบ AI ให้ทีมในไทยและเอเชียตะวันออกเฉียงใต้',
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  return (
    <>
      {children}
      <ChatBot lang={lang} />
      <CookieBanner lang={lang} />
    </>
  )
}
