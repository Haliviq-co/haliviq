import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies-data'
import { articles } from '@/lib/blog-data'
import { tilNotes } from '@/lib/til-data'

const BASE_URL = 'https://www.haliviq.com'

const staticRoutes = [
  '',
  'blog',
  'careers',
  'case-studies',
  'contact',
  'industries',
  'industries/aerospace-defense',
  'industries/agriculture',
  'industries/automotive',
  'industries/consumer-goods',
  'industries/education',
  'industries/energy-utilities',
  'industries/fintech',
  'industries/government',
  'industries/healthcare',
  'industries/hospitality-travel',
  'industries/logistics',
  'industries/manufacturing',
  'industries/media-entertainment',
  'industries/professional-services',
  'industries/real-estate',
  'industries/retail',
  'industries/technology',
  'industries/telecommunications',
  'partners',
  'services',
  'services/ai',
  'services/ai-voice-agents',
  'services/application-modernization',
  'services/automation',
  'services/backend-api',
  'services/brand-experience',
  'services/branding',
  'services/cloud-devops',
  'services/cloud-services-migration',
  'services/cybersecurity',
  'services/data-analytics',
  'services/design-systems',
  'services/digital-transformation',
  'services/ecommerce',
  'services/enterprise-solutions',
  'services/erp-crm',
  'services/finish-your-vibe-coded-app',
  'services/forward-deployed-engineering',
  'services/growth-strategy',
  'services/line-mini-apps',
  'services/mobile-apps',
  'services/pdpa-compliance',
  'services/product-discovery',
  'services/seo-aeo-geo',
  'services/qa-testing',
  'services/quality-assurance-testing',
  'services/rapid-prototyping',
  'services/support',
  'services/support-maintenance',
  'services/user-research',
  'services/ux-ui-design',
  'services/web-development',
  'services/web-mobile',
  'today-i-learned',
  'work',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ['en', 'th'] as const
  const entries: MetadataRoute.Sitemap = []

  for (const lang of langs) {
    for (const route of staticRoutes) {
      const path = route ? `/${lang}/${route}` : `/${lang}`
      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.7,
      })
    }
    for (const n of tilNotes) {
      entries.push({ url: `${BASE_URL}/${lang}/today-i-learned/${n.slug}`, lastModified: new Date(n.date), changeFrequency: 'monthly', priority: 0.5 })
    }
    for (const a of articles) {
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${a.slug}`,
        lastModified: new Date(a.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
    for (const study of caseStudies) {
      entries.push({
        url: `${BASE_URL}/${lang}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
      entries.push({
        url: `${BASE_URL}/${lang}/work/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return entries
}
