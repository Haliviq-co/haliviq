'use client'
import { useEffect, useState } from 'react'

/** Fills the contact form's message box with the recap of the visitor's chat with Havy, if there is one. */
export default function ChatPrefill({ lang }: { lang: string }) {
  const [used, setUsed] = useState(false)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('hv_chat')
      if (!raw) return
      const d = JSON.parse(raw)
      if (!d?.text || Date.now() - (d.ts || 0) > 6 * 60 * 60 * 1000) return
      const ta = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null
      if (!ta || ta.value.trim()) return
      const set = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set
      set?.call(ta, d.text + '\n\n')
      ta.dispatchEvent(new Event('input', { bubbles: true }))
      setUsed(true)
    } catch {}
  }, [])
  if (!used) return null
  return (
    <p className="text-xs mt-2" style={{ color: 'rgb(var(--fg) / 0.55)' }}>
      {lang === 'en' ? 'We added a summary of your chat with Havy so you do not have to retype it. Feel free to edit.' : 'ใส่สรุปที่คุยกับน้องฮาวี่ไว้ให้แล้ว ไม่ต้องพิมพ์ใหม่ แก้ไขเพิ่มได้เลยครับ'}
    </p>
  )
}
