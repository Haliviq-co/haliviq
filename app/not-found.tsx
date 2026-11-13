import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SiteDocument from '@/components/SiteDocument'
import { t } from '@/lib/i18n'

// Site-wide 404. Unknown URLs reach it because every dynamic segment sets
// dynamicParams = false. The language is unknown here, so it is bilingual.
export default function NotFound() {
  const tr = t.en as any
  return (
    <SiteDocument lang="en">
      <Navbar lang="en" tr={tr} transparent />
      <main style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '120px 24px 64px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1 }}>404</h1>
        <p>This page could not be found.</p>
        <p lang="th">ไม่พบหน้าที่คุณต้องการ</p>
        <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
          <Link href="/en" style={{ textDecoration: 'underline' }}>Home</Link>
          <Link href="/th" style={{ textDecoration: 'underline' }} lang="th">หน้าแรก</Link>
        </div>
      </main>
      <Footer lang="en" tr={tr} />
    </SiteDocument>
  )
}
