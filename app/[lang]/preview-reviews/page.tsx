import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import type { Lang } from '@/lib/i18n'

export const metadata: Metadata = { robots: { index: false, follow: false } }

// Layout preview ONLY. Sample data, clearly labelled, not linked anywhere, noindex.
export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return <Testimonials lang={lang} sample />
}
