import type { ReactNode } from 'react'

export const socialLinks: { name: string; url: string; svg: ReactNode }[] = [
                { name: 'Facebook', url: 'https://www.facebook.com/haliviq', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(var(--fg) / 0.7)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { name: 'Instagram', url: 'https://www.instagram.com/haliviq', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--fg) / 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                { name: 'Line', url: 'https://lin.ee/zyTrkx4', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(var(--fg) / 0.7)"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg> },
                { name: 'WhatsApp', url: 'https://wa.me/message/TM3WC6DUJAFEK1', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(var(--fg) / 0.7)"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/></svg> },
]

export default function SocialIcons({ className = '', tone, lang }: { className?: string; tone?: 'accent'; lang?: string }) {
  return (
    <div className={`flex gap-3 ${tone === 'accent' ? 'social-accent' : ''} ${className}`}>
      {socialLinks.filter((l) => l.url && l.url !== '#').map(({ name, url: baseUrl, svg }) => {
        // The English pages point to the English Facebook page; Thai pages keep the original one.
        const url = name === 'Facebook' && lang === 'en' ? 'https://www.facebook.com/haliviqco' : baseUrl
        return (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgb(var(--fg) / 0.06)', border: '1px solid rgb(var(--fg) / 0.1)' }}>
          {svg}
        </a>
        )
      })}
      {[
        { name: 'Phone', url: 'tel:+66909189009', icon: 'ti-phone' },
        { name: 'Email', url: 'mailto:info@haliviq.com', icon: 'ti-mail' },
      ].map(({ name, url, icon }) => (
        <a key={name} href={url} aria-label={name}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgb(var(--fg) / 0.06)', border: '1px solid rgb(var(--fg) / 0.1)' }}>
          <i className={`ti ${icon}`} style={{ fontSize: 16, color: 'rgb(var(--fg) / 0.7)' }} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
