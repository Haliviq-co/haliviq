import type { Metadata } from 'next'
import SiteDocument, { siteMetadata } from '@/components/SiteDocument'

export const metadata: Metadata = {
  ...siteMetadata,
  title: 'Haliviq Staff',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="th">{children}</SiteDocument>
}
