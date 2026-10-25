'use client'
import Link from 'next/link'

// Small sticky "book a call" pill for showcase pages (case studies / work) whose full-width
// sections do not leave room for a sidebar. Desktop only; hidden on mobile so it never covers content.
export default function FloatingCta({ lang, href }: { lang: 'en' | 'th'; href: string }) {
  const en = lang === 'en'
  return (
    <div className="hidden lg:block fixed z-40" style={{ right: 24, bottom: 96 }}>
      <Link href={href} className="btn-primary" style={{ boxShadow: '0 12px 30px -10px rgb(109 93 240 / .6)' }}>
        {en ? 'Book a free call →' : 'นัดคุยฟรี →'}
      </Link>
    </div>
  )
}
