import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/staff', '/api/staff-chat'],
    },
    sitemap: 'https://www.haliviq.com/sitemap.xml',
  }
}
