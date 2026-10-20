// Real client reviews only. Leave empty until real quotes/videos are added:
// the homepage section hides itself when both lists are empty.
export type Review = {
  stars: 1 | 2 | 3 | 4 | 5
  title: string
  text: string
  name: string        // e.g. "คุณสมชาย" or "เจ้าของธุรกิจ"
  place?: string      // company / city
  date?: string       // e.g. "2 เดือนที่แล้ว"
  reply?: string      // reply from Haliviq
}
export type VideoReview = { name: string; thumb: string; src: string }

export const REVIEWS: Review[] = []
export const VIDEOS: VideoReview[] = []
