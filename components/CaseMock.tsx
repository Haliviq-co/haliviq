// Generic device mockups used to illustrate an idea on case study pages. They are drawn from simple shapes
// in the Haliviq palette, carry no client branding, and are not screenshots of the real product.
import type React from 'react'

export type ScreenKind = 'hero' | 'booking' | 'shop' | 'dash' | 'search' | 'chat' | 'gallery' | 'article' | 'form'

const A = '#7B6EF6'
const C = '#53C3D7'
const ink = 'rgba(28,35,71,'
const grad = `linear-gradient(135deg, ${A} 0%, ${C} 100%)`

const bar = (w: string, o = 0.16, h = 6) => <span className="block rounded-full" style={{ width: w, height: h, background: `${ink}${o})` }} />
const btn = (label: string, w = 'auto') => (
  <span className="inline-block rounded-full text-[7px] px-3 py-[5px]" style={{ background: grad, color: '#fff', fontWeight: 600, width: w, textAlign: 'center' }}>{label}</span>
)
const card = (children: React.ReactNode, style?: React.CSSProperties) => (
  <div className="rounded-lg p-2" style={{ background: '#fff', border: `1px solid ${ink}0.08)`, boxShadow: '0 4px 14px -8px rgba(40,50,110,0.35)', ...style }}>{children}</div>
)
const pic = (h: number, tone = 0) => (
  <span className="block rounded-md w-full" style={{ height: h, background: tone % 3 === 0 ? 'linear-gradient(135deg,#D9D3FF,#BFE8F2)' : tone % 3 === 1 ? 'linear-gradient(135deg,#BFE8F2,#E9E5FF)' : 'linear-gradient(135deg,#E9E5FF,#CFC7FF)' }} />
)

function Screen({ kind, en }: { kind: ScreenKind; en: boolean }) {
  const t = (a: string, b: string) => (en ? a : b)
  switch (kind) {
    case 'hero':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="flex items-center justify-between"><span className="w-10 h-2 rounded-full" style={{ background: grad }} /><div className="flex gap-1.5">{bar('14px', 0.2)}{bar('14px', 0.2)}{bar('14px', 0.2)}</div></div>
          <div className="rounded-xl flex-1 p-3 flex flex-col justify-center gap-2" style={{ background: 'linear-gradient(135deg,#ECE8FF,#DDF3F8)' }}>
            {bar('70%', 0.55, 9)}{bar('50%', 0.4, 9)}{bar('60%', 0.14)}
            <div className="mt-1">{btn(t('Get started', 'เริ่มเลย'))}</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => card(<>{pic(26, i)}<div className="mt-1.5">{bar('80%', 0.2)}</div></>, { padding: 5 }))}</div>
        </div>
      )
    case 'booking':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          {pic(70, 1)}
          {card(
            <div className="flex flex-col gap-1.5">
              <div className="grid grid-cols-7 gap-[3px]">{Array.from({ length: 14 }).map((_, i) => <span key={i} className="rounded-[3px] h-3" style={{ background: i === 9 ? A : i % 5 === 0 ? 'rgba(83,195,215,0.35)' : `${ink}0.07)` }} />)}</div>
              <div className="flex gap-1.5">{['9:00', '11:30', '14:00'].map((x, i) => <span key={x} className="rounded-md text-[7px] px-1.5 py-1" style={{ border: `1px solid ${i === 1 ? A : ink + '0.15)'}`, color: i === 1 ? A : `${ink}0.6)` }}>{x}</span>)}</div>
              {btn(t('Book now', 'จองเลย'), '100%')}
            </div>
          )}
        </div>
      )
    case 'shop':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="flex items-center justify-between">{bar('34%', 0.3, 7)}<span className="text-[8px]" style={{ color: A }}>🛒 2</span></div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            {[0, 1, 2, 3].map((i) => card(<><span className="block">{pic(i < 2 ? 40 : 34, i)}</span><div className="mt-1.5 flex flex-col gap-1">{bar('75%', 0.22)}<div className="flex items-center justify-between"><span className="text-[7px]" style={{ color: A, fontWeight: 700 }}>฿ ···</span><span className="w-3 h-3 rounded-full" style={{ background: grad }} /></div></div></>, { padding: 5 }))}
          </div>
        </div>
      )
    case 'dash':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => card(<><span className="text-[10px]" style={{ color: i === 1 ? C : A, fontWeight: 800 }}>{['128', '86%', '24'][i]}</span><div className="mt-1">{bar('70%', 0.16, 4)}</div></>, { padding: 5 }))}</div>
          {card(
            <div className="flex items-end gap-1.5 h-14">
              {[40, 62, 48, 80, 58, 92, 70].map((h, i) => <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? grad : 'rgba(123,110,246,0.25)' }} />)}
            </div>, { flex: 1 }
          )}
          <div className="flex flex-col gap-1.5">{[0, 1].map((i) => <div key={i} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: 'rgba(83,195,215,0.4)' }} />{bar(i ? '60%' : '75%', 0.16)}</div>)}</div>
        </div>
      )
    case 'search':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="rounded-full px-3 py-1.5 flex items-center gap-2" style={{ background: '#fff', border: `1px solid ${A}`, boxShadow: '0 0 0 3px rgba(123,110,246,0.12)' }}><span className="text-[8px]" style={{ color: A }}>⌕</span>{bar('45%', 0.2)}</div>
          <div className="flex gap-1.5">{['', '', ''].map((_, i) => <span key={i} className="rounded-full px-2 py-[3px] text-[6px]" style={{ background: i === 0 ? grad : `${ink}0.07)`, color: i === 0 ? '#fff' : `${ink}0.5)` }}>{[t('All', 'ทั้งหมด'), t('Near me', 'ใกล้ฉัน'), t('New', 'ใหม่')][i]}</span>)}</div>
          {[0, 1, 2].map((i) => card(<div className="flex items-center gap-2"><span className="w-9 h-9 rounded-md shrink-0" style={{ background: i % 2 ? 'linear-gradient(135deg,#BFE8F2,#E9E5FF)' : 'linear-gradient(135deg,#D9D3FF,#BFE8F2)' }} /><div className="flex-1 flex flex-col gap-1.5">{bar('80%', 0.26)}{bar('55%', 0.14)}</div></div>, { padding: 5 }))}
        </div>
      )
    case 'chat':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="flex items-center gap-1.5"><span className="w-4 h-4 rounded-full" style={{ background: grad }} />{bar('30%', 0.3, 6)}</div>
          <div className="self-start rounded-xl rounded-tl-sm px-2.5 py-2 max-w-[75%]" style={{ background: `${ink}0.07)` }}>{bar('100%', 0.22)}<div className="mt-1.5">{bar('70%', 0.16)}</div></div>
          <div className="self-end rounded-xl rounded-tr-sm px-2.5 py-2 max-w-[65%]" style={{ background: grad }}>{<span className="block h-[6px] rounded-full w-16" style={{ background: 'rgba(255,255,255,0.75)' }} />}</div>
          <div className="self-start rounded-xl rounded-tl-sm px-2.5 py-2 max-w-[80%]" style={{ background: `${ink}0.07)` }}>{bar('100%', 0.22)}<div className="mt-1.5">{bar('85%', 0.16)}</div><div className="mt-1.5">{bar('40%', 0.16)}</div></div>
          <div className="mt-auto rounded-full px-3 py-1.5 flex items-center justify-between" style={{ background: '#fff', border: `1px solid ${ink}0.12)` }}>{bar('40%', 0.12)}<span className="w-4 h-4 rounded-full" style={{ background: grad }} /></div>
        </div>
      )
    case 'gallery':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="flex items-center justify-between">{bar('28%', 0.3, 7)}<div className="flex gap-1.5">{bar('12px', 0.2)}{bar('12px', 0.2)}</div></div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1.5 flex-1">
            <span className="col-span-2 row-span-2 rounded-md" style={{ background: 'linear-gradient(135deg,#D9D3FF,#BFE8F2)' }} />
            <span className="rounded-md" style={{ background: 'linear-gradient(135deg,#BFE8F2,#E9E5FF)' }} />
            <span className="rounded-md" style={{ background: 'linear-gradient(135deg,#E9E5FF,#CFC7FF)' }} />
            <span className="rounded-md" style={{ background: 'linear-gradient(135deg,#CFC7FF,#BFE8F2)' }} />
            <span className="rounded-md" style={{ background: 'linear-gradient(135deg,#BFE8F2,#D9D3FF)' }} />
            <span className="col-span-2 rounded-md" style={{ background: 'linear-gradient(135deg,#E9E5FF,#BFE8F2)' }} />
          </div>
        </div>
      )
    case 'article':
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          {pic(60, 2)}
          {bar('70%', 0.5, 8)}
          {bar('95%', 0.14)}{bar('88%', 0.14)}{bar('92%', 0.14)}
          <div className="mt-1 grid grid-cols-2 gap-1.5">{card(<>{pic(24, 0)}<div className="mt-1.5">{bar('70%', 0.2)}</div></>, { padding: 5 })}{card(<>{pic(24, 1)}<div className="mt-1.5">{bar('60%', 0.2)}</div></>, { padding: 5 })}</div>
        </div>
      )
    case 'form':
    default:
      return (
        <div className="flex flex-col gap-2 p-3 h-full">
          {bar('45%', 0.5, 8)}
          {[t('Name', 'ชื่อ'), t('Email', 'อีเมล')].map((l) => (
            <div key={l}><span className="block text-[6px] mb-0.5" style={{ color: `${ink}0.5)` }}>{l}</span><span className="block rounded-md h-4" style={{ background: '#fff', border: `1px solid ${ink}0.14)` }} /></div>
          ))}
          <div><span className="block text-[6px] mb-0.5" style={{ color: `${ink}0.5)` }}>{t('Message', 'ข้อความ')}</span><span className="block rounded-md h-9" style={{ background: '#fff', border: `1px solid ${ink}0.14)` }} /></div>
          <div className="mt-auto">{btn(t('Send', 'ส่ง'), '100%')}</div>
        </div>
      )
  }
}

export function PhoneScreen({ kind, en, width, style, className }: { kind: ScreenKind; en: boolean; width?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={`relative ${width ? '' : 'w-[31%] min-w-[118px]'} ${className || ''}`} style={{ width, ...style }}>
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '15%', width: 3, height: '4%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '22%', width: 3, height: '7%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ left: -2.5, top: '31%', width: 3, height: '7%', background: '#3b4666' }} />
      <span aria-hidden="true" className="absolute rounded-sm" style={{ right: -2.5, top: '26%', width: 3, height: '11%', background: '#3b4666' }} />
      <div className="rounded-[15%/7%] p-[5px]" style={{ background: 'linear-gradient(145deg, #4a5a86 0%, #232b45 45%, #3d4a74 100%)', boxShadow: '0 30px 60px -25px rgb(0 0 0 / 0.65), inset 0 0 0 1px rgb(255 255 255 / 0.18)' }}>
        <div className="rounded-[14%/6.6%] p-[3px]" style={{ background: '#05050a' }}>
          <div className="rounded-[13%/6.2%] overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg,#F4F2FF,#FBFBFF)', aspectRatio: '1206 / 2622', color: '#1c2347' }}>
            <div className="relative flex justify-between items-center px-4 pt-2 text-[8px]" style={{ opacity: 0.85 }}><span>9:41</span><span aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 top-[6px] w-[32%] h-[11px] rounded-full" style={{ background: '#0b0a14' }} /><span>●●●</span></div>
            <div className="flex-1 min-h-0 pt-2"><Screen kind={kind} en={en} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BrowserScreen({ kind, en, width, style, className }: { kind: ScreenKind; en: boolean; width?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={`relative ${className || ''}`} style={{ width, ...style }}>
      <div className="rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgb(255 255 255 / 0.18)', boxShadow: '0 30px 60px -25px rgb(0 0 0 / 0.55), 0 0 0 1px rgba(40,50,110,0.25)' }}>
        <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: 'linear-gradient(180deg,#EEF0F8,#E4E7F3)' }}>
          {['#FF6B6B', '#FFC857', '#5BD38A'].map((c) => <span key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />)}
          <span className="ml-3 flex-1 h-3.5 rounded-full" style={{ background: 'rgba(255,255,255,0.9)' }} />
        </div>
        <div style={{ aspectRatio: '16 / 10', background: 'linear-gradient(180deg,#F7F6FF,#FFFFFF)', color: '#1c2347' }}><Screen kind={kind} en={en} /></div>
      </div>
    </div>
  )
}
