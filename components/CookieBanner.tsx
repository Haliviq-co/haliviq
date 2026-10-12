'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { type Lang } from '@/lib/i18n'

const KEY = 'haliviq_cookie_consent'

declare global {
  interface Window { gtag?: (...args: any[]) => void }
}

function applyConsent(analytics: boolean) {
  try {
    window.gtag?.('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: analytics ? 'granted' : 'denied',
      ad_user_data: analytics ? 'granted' : 'denied',
      ad_personalization: analytics ? 'granted' : 'denied',
    })
  } catch {}
}

export default function CookieBanner({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false)
  const isEN = lang === 'en'

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'all') applyConsent(true)
      else if (saved === 'essential') applyConsent(false)
      else setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (v: 'all' | 'essential') => {
    try { localStorage.setItem(KEY, v) } catch {}
    applyConsent(v === 'all')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label={isEN ? 'Cookie consent' : 'ความยินยอมใช้คุกกี้'}
      className="theme-dark fixed left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[100] rounded-2xl p-5"
      style={{ background: '#141329', border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
    >
      <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1rem' }}>
        {isEN ? 'We use cookies' : 'เว็บไซต์นี้ใช้คุกกี้'}
      </p>
      <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400 }}>
        {isEN
          ? 'We use essential cookies to keep this site working, and optional analytics cookies to see which pages people visit and how they use them. You can accept all of them or keep only the essential ones, and the choice is yours. '
          : 'เราใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงานได้ และคุกกี้วิเคราะห์ (ไม่บังคับ) เพื่อดูว่ามีคนเข้าหน้าไหนและใช้เว็บไซต์กันอย่างไร จะกดยอมรับทั้งหมด หรือเลือกเฉพาะที่จำเป็นก็ได้ ตัดสินใจได้เลย '}
        <Link href={`/${lang}/cookies`} style={{ color: 'var(--accent-2)', textDecoration: 'underline' }}>
          {isEN ? 'Cookie Policy' : 'นโยบายคุกกี้'}
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => choose('essential')}
          className="flex-1 py-2.5 rounded-full text-xs"
          style={{ border: '1px solid rgb(var(--fg) / 0.25)', color: 'var(--ink)', fontWeight: 400 }}
        >
          {isEN ? 'Essential only' : 'เฉพาะที่จำเป็น'}
        </button>
        <button
          onClick={() => choose('all')}
          className="flex-1 py-2.5 rounded-full text-xs"
          style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
        >
          {isEN ? 'Accept all' : 'ยอมรับทั้งหมด'}
        </button>
      </div>
    </div>
  )
}
