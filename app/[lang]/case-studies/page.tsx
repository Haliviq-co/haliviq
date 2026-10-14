import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import CaseStudiesPageClient from './CaseStudiesPageClient'
import { alt } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Web & App Case Studies in Thailand | Haliviq'
    : 'Case Study เว็บไซต์และแอปมือถือ | Haliviq'
  const description = isEN
    ? 'Case studies from Haliviq, a Bangkok digital studio: websites, mobile apps and CRM systems built for restaurants, government bodies, developers and retailers.'
    : 'รวม Case Study ของ Haliviq สตูดิโอดิจิทัลในกรุงเทพฯ ทั้งเว็บไซต์ แอปมือถือ และระบบ CRM ที่ทำให้ร้านอาหาร หน่วยงานรัฐ ผู้พัฒนาอสังหาฯ และธุรกิจค้าปลีก'
  const siteUrl = `https://www.haliviq.com/${params.lang}/case-studies`
  return {
    title,
    description,
    alternates: alt(siteUrl),
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  return <CaseStudiesPageClient params={params} />
}
