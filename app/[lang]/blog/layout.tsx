import type { Metadata } from 'next'
import type { Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Blog | Product, UX Design & AI Insights | Haliviq' : 'บทความ | Product, UX Design และ AI | Haliviq'
  const description = isEN
    ? 'Practical articles from our Bangkok team on product discovery, UX/UI design, Next.js engineering, AI in production and digital strategy, plus project case studies.'
    : 'บทความจากทีมในกรุงเทพฯ เรื่อง Product Discovery, UX/UI, การพัฒนาด้วย Next.js, AI บนระบบจริง และกลยุทธ์ดิจิทัล พร้อมกรณีศึกษาจากโปรเจกต์'
  const url = `https://www.haliviq.com/${params.lang}/blog`
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
