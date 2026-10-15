'use client'
import { useEffect, useRef, useState } from 'react'

type Seg = [string, string?]
type Line = { indent?: boolean; segs: Seg[] }

const P = '#B8A9FA', C = '#53C3D7', Y = '#F5D76E'
const LINES: Line[] = [
  { segs: [['export async function', P], [' '], ['createOrder', C], ['(req) {']] },
  { indent: true, segs: [['const', P], [' user = '], ['await', P], [' '], ['auth', C], ['(req)']] },
  { indent: true, segs: [['const', P], [' order = '], ['await', P], [' db.'], ['insert', C], ['(req.body)']] },
  { indent: true, segs: [['return', P], [' '], ['{ ok: true, order }', Y]] },
  { segs: [['}']] },
]
const TOTAL = LINES.reduce((n, l) => n + l.segs.reduce((m, s) => m + s[0].length, 0), 0)

export default function TypedCode() {
  const ref = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(0)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(TOTAL); return }
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!on) return
    let t: ReturnType<typeof setTimeout>
    let i = 0
    setN(0)
    const tick = () => {
      i++
      setN(i)
      t = setTimeout(i >= TOTAL ? () => { i = 0; setN(0); t = setTimeout(tick, 600) } : tick, i >= TOTAL ? 4000 : 45 + Math.random() * 40)
    }
    t = setTimeout(tick, 500)
    return () => clearTimeout(t)
  }, [on])

  let left = n
  let cursorPlaced = false
  return (
    <div ref={ref} style={{ minHeight: '8.5em' }} aria-label="code example">
      {LINES.map((l, li) => {
        const out: React.ReactNode[] = []
        l.segs.forEach((s, si) => {
          const take = Math.max(0, Math.min(left, s[0].length))
          left -= take
          if (take > 0) out.push(<span key={si} style={s[1] ? { color: s[1] } : undefined}>{s[0].slice(0, take)}</span>)
        })
        const lineDone = left > 0 || (left === 0 && li === LINES.length - 1 && n >= TOTAL)
        const showCursor = !cursorPlaced && !lineDone
        if (showCursor || (li === LINES.length - 1 && !cursorPlaced)) cursorPlaced = true
        const hasText = out.length > 0
        return (
          <div key={li} className={l.indent ? 'pl-4' : undefined} style={{ minHeight: '1.7em' }}>
            {hasText && out}
            {showCursor && <span style={{ animation: 'tooltipPulse 1s step-end infinite' }}>|</span>}
          </div>
        )
      })}
    </div>
  )
}
