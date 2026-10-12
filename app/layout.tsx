import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haliviq | Human Ideas. Intelligent Future.',
  description: 'Haliviq is a design and AI studio in Bangkok. We turn human ideas into intelligent products: UX/UI design, websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Haliviq | Human Ideas. Intelligent Future.',
    description: 'Haliviq is a design and AI studio in Bangkok. We turn human ideas into intelligent products: UX/UI design, websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
    images: ['/og/haliviq-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haliviq | Human Ideas. Intelligent Future.',
    description: 'Haliviq is a design and AI studio in Bangkok. We turn human ideas into intelligent products: UX/UI design, websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
    images: ['/og/haliviq-og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint so there is no flash. Dark is the default. React does not manage this attribute, so a client re-render cannot reset it. */}
        <script dangerouslySetInnerHTML={{ __html: "var t='dark';try{var s=localStorage.getItem('haliviq-theme');if(s==='light'||s==='dark')t=s}catch(e){}document.documentElement.setAttribute('data-theme',t)" }} />
        <link rel="preload" href="/fonts/LINESeedSansTH_Th.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/LINESeedSansTH_Rg.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/LINESeedSansTH_Bd.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css"/>
      </head>
      <body>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18293218603" strategy="afterInteractive"/>
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', 'AW-18293218603');
        `}</Script>
      </body>
    </html>
  )
}
