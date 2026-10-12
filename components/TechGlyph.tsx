// Small inline icons for programming languages and frameworks. Drawn as simple marks (no icon font,
// no network request), so they always render. Items without a mark fall back to a Tabler icon.
import type React from 'react'
import { techIcon } from '@/lib/tech-icons'

const S = 20

function Badge({ bg, fg = '#fff', text, r = 4, size = 9 }: { bg: string; fg?: string; text: string; r?: number; size?: number }) {
  return (
    <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx={r} fill={bg} />
      <text x="12" y="16" textAnchor="middle" fontSize={size + 3} fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill={fg}>{text}</text>
    </svg>
  )
}

export default function TechGlyph({ name }: { name: string }) {
  const k = name.trim().toLowerCase()
  switch (k) {
    case 'html':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2l1.7 18.5L12 23l7.3-2.5L21 2z" fill="#E44D26" /><path d="M12 4v17.7l5.9-2 1.4-15.7z" fill="#F16529" /><text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">5</text></svg>
    case 'css':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2l1.7 18.5L12 23l7.3-2.5L21 2z" fill="#1572B6" /><path d="M12 4v17.7l5.9-2 1.4-15.7z" fill="#33A9DC" /><text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">3</text></svg>
    case 'javascript':
      return <Badge bg="#F7DF1E" fg="#222" text="JS" />
    case 'typescript':
      return <Badge bg="#3178C6" text="TS" />
    case 'php':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB3" /><text x="12" y="15" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">php</text></svg>
    case 'python':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C7.5 2 7.8 4 7.8 4v2.2h4.4v.7H5.9S3 6.5 3 11.2s2.5 4.5 2.5 4.5H7v-2.2s-.1-2.5 2.5-2.5h4.3s2.4 0 2.4-2.3V4.4S16.7 2 12 2zm-2.4 1.4a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB" /><path d="M12 22c4.5 0 4.2-2 4.2-2v-2.2h-4.4v-.7h6.3s2.9.4 2.9-4.3-2.5-4.5-2.5-4.5H17v2.2s.1 2.5-2.5 2.5h-4.3s-2.4 0-2.4 2.3v3.9S7.3 22 12 22zm2.4-1.4a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B" /></svg>
    case 'sql':
    case 'relational database':
    case 'mysql':
    case 'postgresql':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#6FD3F5" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13c0 1.7-3.6 3-8 3s-8-1.3-8-3z" fill="#4A8FD6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.2" /></svg>
    case 'bootstrap':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="2" width="22" height="20" rx="5" fill="#7952B3" /><path d="M8.5 17V7h4c1.9 0 3 .9 3 2.5 0 1-.6 1.8-1.5 2.1 1.2.3 1.9 1.1 1.9 2.3 0 1.8-1.3 3.1-3.4 3.1zm1.6-5.9h2.2c1 0 1.5-.5 1.5-1.2s-.5-1.2-1.5-1.2h-2.2zm0 4.6h2.5c1.1 0 1.7-.5 1.7-1.4s-.6-1.4-1.7-1.4h-2.5z" fill="#fff" /></svg>
    case 'react':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#61DAFB" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" /></svg>
    case 'next.js':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#111" stroke="#fff" strokeOpacity=".5" /><path d="M8.5 7.5v9M8.5 7.5l7 9.2M15.5 7.5v5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>
    case 'angularjs':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5L2.5 5l1.5 12.5L12 22l8-4.5L21.5 5z" fill="#DD0031" /><path d="M12 4.2L6 17.3h2.3l1.2-3h5l1.2 3H18zm0 4.3l1.8 4.3h-3.6z" fill="#fff" /></svg>
    case 'jquery':
      return <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#0868AC" /><path d="M6 8c-1.5 3.2.2 7.6 4.3 8.6 3 .7 6-.9 7.2-3.6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
    case 'laravel':
      return <Badge bg="#FF2D20" text="L" />
    case 'node.js':
      return <Badge bg="#3C873A" text="N" />
    case 'flutter':
      return <Badge bg="#02569B" text="F" />
    case 'swift':
      return <Badge bg="#F05138" text="S" />
    case 'kotlin':
      return <Badge bg="#7F52FF" text="K" />
    default: {
      const ic = techIcon(name).ti || 'code'
      const c = '#9FB4FF'
      const wrap = (inner: React.ReactNode) => <svg width={S} height={S} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{inner}</svg>
      if (ic === 'device-mobile') return wrap(<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>)
      if (ic === 'cloud') return wrap(<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 10.5 3.75 3.75 0 0117.25 18z" />)
      if (ic === 'world') return wrap(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>)
      if (ic === 'api') return wrap(<><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /><path d="M13.5 5l-3 14" /></>)
      if (ic === 'layout-dashboard' || ic === 'layout-list') return wrap(<><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M9 9.5V20" /></>)
      if (ic === 'users') return wrap(<><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.2 3.2 0 010 5.6M18 14.8c1.7.6 3 2.2 3 4.5" /></>)
      if (ic === 'sparkles') return wrap(<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />)
      if (ic === 'lock') return wrap(<><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 018 0v3" /></>)
      if (ic === 'shopping-cart') return wrap(<><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M3 4h2.5l2 11h11L20 8H6.5" /></>)
      return wrap(<path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />)
    }
  }
}
