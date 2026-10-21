import { t, type Lang } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CoreSkills from '@/components/CoreSkills'
import WhatWeDo from '@/components/WhatWeDo'
import FlowDiagram from '@/components/FlowDiagram'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import Work from '@/components/Work'
import FeaturedWork from '@/components/FeaturedWork'
import PortfolioGallery from '@/components/PortfolioGallery'
import LatestThinking from '@/components/LatestThinking'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang === 'en' ? 'en' : 'th'
  return { alternates: alt(`https://www.haliviq.com/${lang}`) }
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const tr = t[lang] as any

  const orgLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.haliviq.com/#organization',
        name: 'Haliviq',
        url: 'https://www.haliviq.com',
        logo: 'https://www.haliviq.com/favicon.png',
        image: 'https://www.haliviq.com/og/haliviq-og.png',
        slogan: 'Human Ideas. Intelligent Future.',
        description: lang === 'en'
          ? 'A design and AI studio in Bangkok building UX/UI, websites, mobile apps, LINE mini apps and AI tools.'
          : 'สตูดิโอดีไซน์และ AI ในกรุงเทพฯ ออกแบบและพัฒนา UX/UI, website, แอปมือถือ, LINE mini app และระบบ AI',
        telephone: '+66909189009',
        email: 'info@haliviq.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Spaces Building, Phaya Thai Road, 4th Floor, Room 402, Ratchathewi',
          addressLocality: 'Bangkok',
          postalCode: '10400',
          addressCountry: 'TH',
        },
        areaServed: ['TH', 'SG', 'MY', 'ID', 'VN', 'PH'],
        knowsAbout: ['UX/UI design', 'Artificial intelligence', 'Web development', 'Mobile app development', 'PDPA compliance'],
        sameAs: [lang === 'en' ? 'https://www.facebook.com/haliviqco' : 'https://www.facebook.com/haliviq', 'https://www.instagram.com/haliviq', 'https://lin.ee/zyTrkx4'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.haliviq.com/#website',
        url: 'https://www.haliviq.com',
        name: 'Haliviq',
        inLanguage: ['th', 'en'],
        publisher: { '@id': 'https://www.haliviq.com/#organization' },
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Navbar lang={lang} tr={tr} transparent />
      <Hero lang={lang} tr={tr} />
      <Clients lang={lang} tr={tr} />
      <CoreSkills lang={lang} tr={tr} />
      <FeaturedWork lang={lang} tr={tr} />
      <WhatWeDo lang={lang} tr={tr} />
      <FlowDiagram lang={lang} />
      <Testimonials lang={lang} />
      {/* Services and Work sections removed */}
      <PortfolioGallery lang={lang} tr={tr} />
      <LatestThinking lang={lang} tr={tr} />
      <FAQ lang={lang} tr={tr} />
      <CTA lang={lang} tr={tr} />
      <Footer lang={lang} tr={tr} />
    </main>
  )
}
