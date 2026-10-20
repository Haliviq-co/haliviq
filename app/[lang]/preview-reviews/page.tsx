import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import type { Lang } from '@/lib/i18n'

export const metadata: Metadata = { robots: { index: false, follow: false } }

// Layout preview ONLY. Sample data, clearly labelled, not linked anywhere, noindex.
const BASE = [
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', place: 'บริษัทตัวอย่าง', date: '1 เดือนที่แล้ว', reply: 'ตัวอย่างข้อความตอบกลับจากทีม Haliviq' },
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', place: 'บริษัทตัวอย่าง', date: '2 เดือนที่แล้ว' },
  { stars: 4 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', date: '3 เดือนที่แล้ว', reply: 'ตัวอย่างข้อความตอบกลับจากทีม Haliviq' },
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', date: '4 เดือนที่แล้ว' },
]
// 15 sample items = 5 pages of 3, to preview the pager
const SAMPLE = Array.from({ length: 15 }, (_, i) => ({ ...BASE[i % BASE.length], date: `${i + 1} เดือนที่แล้ว` }))
const ph = (n: number) => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='150' height='230'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#7B6EF6'/><stop offset='1' stop-color='#53C3D7'/></linearGradient></defs><rect width='150' height='230' fill='url(#g)'/><text x='75' y='120' fill='white' font-size='13' text-anchor='middle'>VIDEO ${n}</text></svg>`)}`
const VID = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ name: `วิดีโอตัวอย่าง ${n}`, thumb: ph(n), src: '' }))

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return <Testimonials lang={lang} reviews={SAMPLE} videos={VID} sample />
}
