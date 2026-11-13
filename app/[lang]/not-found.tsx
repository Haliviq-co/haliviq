import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24, textAlign: 'center' }}>
      <h1 style={{ fontSize: 48, fontWeight: 700 }}>404</h1>
      <p>This page could not be found. / ไม่พบหน้านี้</p>
      <Link href="/en" style={{ textDecoration: 'underline' }}>Haliviq home</Link>
    </main>
  )
}
