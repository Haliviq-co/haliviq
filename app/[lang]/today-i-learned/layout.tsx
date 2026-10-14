import type { Metadata } from 'next'
import type { Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Today I Learned | Dev & Design Notes | Haliviq' : 'Today I Learned | บันทึกสาย Dev และ Design | Haliviq'
  const description = isEN
    ? 'Short, practical notes from a Bangkok product studio on React, Next.js, TypeScript, PostgreSQL, Docker, Figma and security, with the reason behind each fix.'
    : 'บันทึกสั้น ๆ ที่ใช้ได้จริงจากสตูดิโอในกรุงเทพฯ เรื่อง React, Next.js, TypeScript, PostgreSQL, Docker, Figma และ security พร้อมเหตุผลของแต่ละวิธีแก้'
  const url = `https://www.haliviq.com/${params.lang}/today-i-learned`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
