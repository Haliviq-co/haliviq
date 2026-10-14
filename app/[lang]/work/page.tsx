import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import WorkPageClient from './WorkPageClient'
import { alt } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Website & App Portfolio, Bangkok | Haliviq'
    : 'ผลงานเว็บไซต์และแอปมือถือ กรุงเทพฯ | Haliviq'
  const description = isEN
    ? 'Portfolio of a Bangkok digital product studio: restaurant websites, government apps, real-estate CRM and e-commerce stores, grouped by industry with scope for each.'
    : 'ผลงานของ Haliviq สตูดิโอดิจิทัลในกรุงเทพฯ ทั้งเว็บไซต์ร้านอาหาร แอปหน่วยงานรัฐ CRM อสังหาฯ และร้านอีคอมเมิร์ซ แยกตามประเภทธุรกิจ พร้อมขอบเขตงาน'
  const siteUrl = `https://www.haliviq.com/${params.lang}/work`
  return {
    title,
    description,
    alternates: alt(siteUrl),
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  return <WorkPageClient params={params} />
}
