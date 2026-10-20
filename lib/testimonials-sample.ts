// Clearly-labelled placeholder data (NOT real reviews). Shown only while lib/testimonials.ts is empty.
const BASE = [
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', place: 'บริษัทตัวอย่าง', date: '1 เดือนที่แล้ว', reply: 'ตัวอย่างข้อความตอบกลับจากทีม Haliviq' },
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', place: 'บริษัทตัวอย่าง', date: '2 เดือนที่แล้ว' },
  { stars: 4 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', date: '3 เดือนที่แล้ว', reply: 'ตัวอย่างข้อความตอบกลับจากทีม Haliviq' },
  { stars: 5 as const, title: 'ตัวอย่างหัวข้อรีวิว', text: 'ข้อความตัวอย่างสำหรับดูเลย์เอาต์ ไม่ใช่คำรีวิวจริงจากลูกค้า', name: 'ชื่อลูกค้า (ตัวอย่าง)', date: '4 เดือนที่แล้ว' },
]
// 25 sample items = 5 pages of 5, to preview the pager
export const SAMPLE_REVIEWS = Array.from({ length: 25 }, (_, i) => ({ ...BASE[i % BASE.length], date: `${i + 1} เดือนที่แล้ว` }))
const ph = (n: number) => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='150' height='230'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#7B6EF6'/><stop offset='1' stop-color='#53C3D7'/></linearGradient></defs><rect width='150' height='230' fill='url(#g)'/><text x='75' y='120' fill='white' font-size='13' text-anchor='middle'>VIDEO ${n}</text></svg>`)}`
export const SAMPLE_VIDEOS = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ name: `วิดีโอตัวอย่าง ${n}`, thumb: ph(n), src: '' }))

