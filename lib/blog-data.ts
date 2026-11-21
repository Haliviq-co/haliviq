import type { Article, BlogCat } from './blog-types'
import { techArticles } from './blog/tech'
import { tech2Articles } from './blog/tech2'
import { aiBizArticles } from './blog/aibiz'
import { designArticles } from './blog/design'
import { caseArticles } from './blog/cases'
import { tech3Articles } from './blog/tech3'
import { ai2Articles } from './blog/ai2'
import { design2Articles } from './blog/design2'
import { biz2Articles } from './blog/biz2'

export type { Article, BlogCat }

export const articles: Article[] = [...techArticles, ...tech2Articles, ...aiBizArticles, ...designArticles, ...caseArticles,
  ...tech3Articles, ...ai2Articles, ...design2Articles, ...biz2Articles]
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export const blogCategories: BlogCat[] = ['Technology', 'AI', 'Design', 'Business', 'Case Study']

export const coverOf = (a: Article) => `/images/blog/${a.slug}/cover.jpg`
export const figureOf = (a: Article) => `/images/blog/${a.slug}/figure.jpg`
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)

export function formatDate(iso: string, lang: 'th' | 'en') {
  const d = new Date(iso + 'T00:00:00Z')
  if (lang === 'en') return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
  const m = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.']
  return `${d.getUTCDate()} ${m[d.getUTCMonth()]} ${d.getUTCFullYear() + 543}`
}
