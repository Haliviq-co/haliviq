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
    ? 'Web & Mobile App Developer in Bangkok | Haliviq'
    : 'รับทำเว็บและแอปมือถือ กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Haliviq builds websites and mobile apps in Bangkok with one team, 8+ years of experience and 120+ projects delivered, from first prototype to launch and support.'
    : 'Haliviq รับทำเว็บไซต์และแอปมือถือที่กรุงเทพฯ ด้วยทีมเดียว ประสบการณ์กว่า 8 ปี ทำมาแล้วกว่า 120 โปรเจกต์ ตั้งแต่ต้นแบบแรกจนถึงเปิดตัวและดูแลต่อ'
  const url = `https://www.haliviq.com/${params.lang}/services/web-mobile`
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
  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={isEN ? 'Engineering / Web & Mobile' : 'Engineering / Web & Mobile'}
      title={isEN ? 'Reliable Code' : 'โค้ดที่เชื่อถือได้'}
      subtitle={isEN ? 'Built to Scale with You' : 'สร้างให้โตไปพร้อมกับคุณ'}
      heroDesc={isEN
        ? 'If you need a website and a mobile app that look and behave like one product, it helps to have one team build both. Haliviq designs and develops web and mobile products in Bangkok, backed by 8+ years of experience and 120+ projects delivered. We share design, APIs and logic between the two where it makes sense, test on real phones, and stay on after launch to fix and improve what we built.'
        : 'ถ้าคุณอยากได้เว็บไซต์กับแอปมือถือที่หน้าตาและการทำงานเหมือนเป็นผลิตภัณฑ์เดียวกัน การให้ทีมเดียวสร้างทั้งสองอย่างช่วยได้มาก Haliviq ออกแบบและพัฒนาเว็บกับแอปมือถือที่กรุงเทพฯ ด้วยประสบการณ์กว่า 8 ปี และทำมาแล้วกว่า 120 โปรเจกต์ เราใช้ดีไซน์ API และ logic ร่วมกันระหว่างสองฝั่งเท่าที่เหมาะสม ทดสอบบนมือถือจริง และอยู่ดูแลหลังเปิดตัวเพื่อแก้และปรับปรุงสิ่งที่เราสร้าง'}
      heroBullets={isEN ? [
        'Websites and web apps built with React, Next.js and TypeScript',
        'iOS and Android apps, native or cross-platform, chosen to fit your product',
        'Shared design system and backend APIs, so web and mobile stay consistent',
        'Testing on real devices before every release, including mid-range Android phones',
        'Launch support for the App Store, Google Play and your production hosting',
        'Warranty after launch, with monthly support if you want it',
      ] : [
        'เว็บไซต์และเว็บแอปด้วย React, Next.js และ TypeScript',
        'แอป iOS และ Android แบบ native หรือ cross-platform เลือกให้เหมาะกับผลิตภัณฑ์ของคุณ',
        'ใช้ Design System และ Backend API ร่วมกัน เว็บกับมือถือจึงสอดคล้องกัน',
        'ทดสอบบนอุปกรณ์จริงก่อนปล่อยทุกเวอร์ชัน รวมถึง Android ระดับกลาง',
        'ช่วยเรื่องขึ้น App Store, Google Play และ hosting ระบบจริง',
        'รับประกันหลังเปิดตัว และมีแพ็กเกจดูแลรายเดือนถ้าต้องการ',
      ]}
      ctaTitle={isEN ? 'Ready to get started?' : 'พร้อมเริ่มหรือยัง?'}
      ctaDesc={isEN
        ? 'Tell us what you want to build and who will use it. We will suggest whether web, mobile or both fits best, and what a sensible first version looks like. No commitment.'
        : 'เล่าให้เราฟังว่าอยากสร้างอะไรและใครจะเป็นคนใช้ เราจะแนะนำว่าควรเป็นเว็บ มือถือ หรือทั้งสองอย่าง และเวอร์ชันแรกที่เหมาะสมหน้าตาเป็นอย่างไร ไม่มีข้อผูกมัด'}
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/web-mobile/hero.jpg"
      whyImg="/images/services/web-mobile/why1.jpg"
      whyImg2="/images/services/web-mobile/why2.jpg"
      featureImg="/images/services/web-mobile/feature.jpg"
      processImg="/images/services/web-mobile/process.jpg"
    />
  )
}
