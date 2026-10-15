import Link from 'next/link'
import FAQ from '@/components/FAQ'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  anthropic: { hex: '#FFFFFF', path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z' },
  nodedotjs: { hex: '#5FA04E', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
  python: { hex: '#3776AB', path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'AI / Voice Agents'  : 'AI / Voice Agents'
  const title    = isEN ? 'AI That Talks'  : 'AI ที่พูดคุยได้จริง'
  const subtitle = isEN ? 'Like a Human, Not a Menu'    : 'เหมือนคุยกับคนจริง ไม่ใช่กดเมนู'
  const heroDesc = isEN ? 'Haliviq builds AI voice agents that pick up real phone calls, work out what the caller needs, and finish the job: checking a booking, looking up an order, updating a record. They do not just read a script and pass the call along. The agent connects to your phone lines over SIP and PSTN, speaks Thai plus 25+ other languages, and answers quickly enough that the conversation keeps its natural rhythm. Because it plugs into the CRM, booking tools, and APIs you already run, the answer a caller hears is the same one your own team would give.'  : 'Haliviq สร้าง Voice Agent ที่รับสายโทรศัพท์จริงให้คุณ ฟังว่าผู้โทรต้องการอะไร แล้วจัดการให้จบ ไม่ว่าจะเช็คการจอง ดูสถานะออเดอร์ หรืออัปเดตข้อมูลลูกค้า ไม่ใช่แค่อ่านสคริปต์แล้วโอนสายต่อ ระบบเชื่อมกับสายโทรศัพท์ของคุณผ่าน SIP และ PSTN คุยได้ทั้งภาษาไทยและอีกกว่า 25 ภาษา และตอบไวพอที่จังหวะการคุยยังเป็นธรรมชาติ ที่สำคัญคือเชื่อมกับ CRM ระบบจอง และ API ที่คุณใช้อยู่แล้ว คำตอบที่ลูกค้าได้ยินจึงเป็นคำตอบเดียวกับที่ทีมของคุณจะตอบเอง'
  const whyTitle = isEN ? 'Why customers still pick up the phone first'    : 'ทำไมลูกค้ายังเลือกโทรหาเราก่อนเสมอ'
  const whyDesc  = isEN ? 'When something goes wrong, a booking changes, or a parcel is late, many people would rather call than type. That makes the phone the fastest route to an answer and also the hardest channel to staff, because every extra call needs another person on the line. A voice agent takes that pressure off your team without making the caller feel they have been handed to a machine.'  : 'พอมีเรื่องด่วน อยากเลื่อนนัด หรือพัสดุมาช้า หลายคนเลือกโทรมากกว่าพิมพ์ โทรศัพท์จึงเป็นช่องทางที่ได้คำตอบเร็วที่สุด แต่ก็เป็นช่องทางที่หาคนมารับยากที่สุดเหมือนกัน เพราะสายที่เพิ่มขึ้นทุกสายต้องมีคนรับเพิ่ม Voice Agent ช่วยแบ่งภาระตรงนี้ให้ทีมคุณ โดยที่คนโทรไม่รู้สึกว่ากำลังถูกโยนให้เครื่อง'
  const ctaTitle = isEN ? 'Ready to let AI answer the phone?'    : 'พร้อมให้ AI รับสายแทนคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a working prototype built on your own call flows, not a generic demo script. Tell us which calls eat most of your team’s day and we will show you what an agent can take off their hands.'   : 'เริ่มจากต้นแบบที่ใช้งานได้จริงบนขั้นตอนการรับสายของคุณเอง ไม่ใช่สคริปต์สาธิตทั่วไป บอกเราว่าสายแบบไหนกินเวลาทีมมากที่สุด แล้วเราจะให้ดูว่า Agent ช่วยรับแทนได้แค่ไหน'
  const overviewText = isEN
    ? 'We build voice agents for businesses whose phones never stop ringing: clinics taking appointments, retailers answering order questions, logistics teams giving status updates, and service desks sorting out the same ten requests all day. Each agent is wired to your phone system over SIP and PSTN, so it answers on your existing numbers. It listens in natural speech, lets the caller interrupt, replies in under half a second, and works in Thai and 25+ other languages. What makes it useful is the plumbing behind the voice. We connect it to your CRM, booking tool, order system, and internal APIs, so it can look things up, make changes, and confirm them back to the caller. When a request is outside what it should handle, it passes the call to a person together with the full conversation so far, and the caller never has to start over. We design the call flows with your team, test them against real caller behaviour, and keep reading transcripts after launch to raise the share of calls the agent can close on its own.'
    : 'เราสร้าง Voice Agent ให้ธุรกิจที่โทรศัพท์ดังไม่หยุด เช่น คลินิกที่รับนัดหมาย ร้านค้าที่ต้องตอบเรื่องออเดอร์ ทีมโลจิสติกส์ที่ต้องแจ้งสถานะพัสดุ หรือฝ่ายบริการที่ต้องตอบคำถามเดิมๆ ทั้งวัน Agent ทุกตัวเชื่อมกับระบบโทรศัพท์ของคุณผ่าน SIP และ PSTN จึงรับสายที่เบอร์เดิมได้เลย ฟังคำพูดธรรมชาติ ให้ผู้โทรพูดแทรกได้ ตอบกลับไม่ถึงครึ่งวินาที และคุยได้ทั้งภาษาไทยและอีกกว่า 25 ภาษา แต่สิ่งที่ทำให้ใช้งานได้จริงคือระบบเบื้องหลังเสียง เราเชื่อม Agent เข้ากับ CRM ระบบจอง ระบบออเดอร์ และ API ภายในของคุณ ให้ค้นข้อมูล แก้ไขรายการ แล้วยืนยันกลับกับผู้โทรได้เลย ถ้าเรื่องไหนไม่ควรให้ Agent จัดการเอง ก็โอนสายให้คนพร้อมส่งบทสนทนาทั้งหมดไปด้วย ผู้โทรไม่ต้องเล่าใหม่ เราออกแบบขั้นตอนการรับสายร่วมกับทีมของคุณ ทดสอบกับพฤติกรรมผู้โทรจริง และอ่านบันทึกการโทรต่อหลังเปิดใช้งาน เพื่อเพิ่มสัดส่วนสายที่ Agent ปิดเรื่องได้เอง'

  const heroBullets = isEN ? [
      'Connects to your phone lines over SIP and PSTN, so it answers on the numbers you already use',
      'Natural, low-latency conversation that lets callers interrupt, like they would with a person',
      'Thai plus 25+ other languages, with natural pronunciation rather than machine-translated replies',
      'Reads and updates your CRM, booking, and internal systems so the answer is the real one',
      'Hands difficult calls to a human with the full conversation attached',
      'Grows from a single-flow pilot to full call-center volume',
    ] : [
      'เชื่อมสายโทรศัพท์ผ่าน SIP และ PSTN รับสายที่เบอร์เดิมที่คุณใช้อยู่ได้เลย',
      'คุยเป็นธรรมชาติ ตอบไว ให้ผู้โทรพูดแทรกได้เหมือนคุยกับคนจริง',
      'คุยได้ทั้งภาษาไทยและอีกกว่า 25 ภาษา ออกเสียงเป็นธรรมชาติ ไม่ใช่คำแปลจากเครื่อง',
      'ดึงและอัปเดตข้อมูลใน CRM ระบบจอง และระบบภายในได้ คำตอบจึงตรงกับของจริง',
      'ถ้าเรื่องยากเกินไป โอนสายให้คนพร้อมส่งบทสนทนาทั้งหมดไปด้วย',
      'เริ่มจากขั้นตอนเดียวแบบทดลองใช้ แล้วขยายถึงปริมาณสายระดับคอลเซ็นเตอร์ได้',
    ]
  const whyPoints   = isEN ? [
      'People call when something has gone wrong and they want it fixed now, so the first thirty seconds decide whether they stay patient.',
      'A quick, natural-sounding agent keeps callers talking instead of hanging up halfway through a menu.',
      'One system can answer in Thai, English, and 25+ other languages, so tourists, expats, and regional customers are covered.',
      'When the agent can read and change records in your systems, it solves the problem instead of only taking a message.',
      'Calls spike after a promotion or an outage. An agent can take them all at once without extra hiring or training.',
    ] : [
      'คนโทรมาตอนมีเรื่องด่วนและอยากให้แก้เลย สามสิบวินาทีแรกจึงเป็นตัวตัดสินว่าเขายังใจเย็นอยู่หรือเปล่า',
      'Agent ที่ตอบไวและฟังเป็นธรรมชาติ ช่วยให้ลูกค้าอยู่คุยต่อ ไม่วางสายกลางเมนู',
      'ระบบเดียวตอบได้ทั้งไทย อังกฤษ และอีกกว่า 25 ภาษา ครอบคลุมทั้งนักท่องเที่ยว ชาวต่างชาติ และลูกค้าในภูมิภาค',
      'ถ้า Agent อ่านและแก้ข้อมูลในระบบของคุณได้ ก็แก้ปัญหาให้เลย ไม่ใช่แค่รับเรื่องไว้',
      'หลังจัดโปรโมชันหรือเวลาระบบมีปัญหา สายจะเข้ามาพร้อมกันมาก Agent รับได้หมดโดยไม่ต้องจ้างหรืออบรมคนเพิ่ม',
    ]
  const outcomes    = isEN ? [
      {stat: '25+', label: 'Languages Supported', desc: 'Thai included'},
      {stat: '<500ms', label: 'Response Latency', desc: 'Keeps the pace of a real conversation'},
      {stat: '70%', label: 'Calls Fully Resolved', desc: 'Without a transfer to a person'},
      {stat: '24/7', label: 'Availability', desc: 'No queue, no hold music'}
    ] : [
      {stat: '25+', label: 'ภาษาที่รองรับ', desc: 'รวมภาษาไทย'},
      {stat: '<500ms', label: 'ตอบกลับภายใน', desc: 'จังหวะการคุยเหมือนคุยกับคนจริง'},
      {stat: '70%', label: 'สายที่ปิดจบได้เอง', desc: 'ไม่ต้องโอนสายหาคน'},
      {stat: '24/7', label: 'พร้อมรับสายตลอดเวลา', desc: 'ไม่มีคิว ไม่มีเพลงรอสาย'}
    ]
  const features    = isEN ? [
      {icon: 'ti-phone-calling', title: 'Phone Line Integration', desc: 'The agent connects to your carrier or PBX over SIP and PSTN and answers real phone lines, on the numbers customers already know. It is not a chat widget with a microphone bolted on.'},
      {icon: 'ti-language', title: 'Thai and 25+ Languages', desc: 'Callers speak the way they normally do and the agent understands and replies in the same language, with natural pronunciation and tone instead of translated text read aloud.'},
      {icon: 'ti-message-2', title: 'Fast, Natural Conversation', desc: 'Replies come back quickly and the caller can talk over the agent at any time, the way they would with a person. That keeps the call moving and stops people hanging up.'},
      {icon: 'ti-plug-connected', title: 'Connected to Your Systems', desc: 'The agent talks to your CRM, booking tool, order system, and internal APIs in real time, so it can check a status, change an appointment, or log a request and then confirm it.'},
      {icon: 'ti-adjustments', title: 'Call Flow Design', desc: 'We write the call flows with your team around the requests you really get: what the agent says, what it asks, when it hands over, and what it does with the odd calls that do not fit.'},
      {icon: 'ti-chart-line', title: 'Transcripts and Tuning', desc: 'You get call transcripts and simple analytics, and we review the calls that failed to find out why. Each round of tuning lets the agent close more calls by itself.'}
    ] : [
      {icon: 'ti-phone-calling', title: 'เชื่อมสายโทรศัพท์', desc: 'Agent ต่อกับผู้ให้บริการหรือ PBX ของคุณผ่าน SIP และ PSTN รับสายจริงที่เบอร์เดิมที่ลูกค้าคุ้นเคย ไม่ใช่แค่แชตบนเว็บที่ใส่ไมค์เพิ่มเข้าไป'},
      {icon: 'ti-language', title: 'ภาษาไทยและอีกกว่า 25 ภาษา', desc: 'ลูกค้าพูดแบบที่พูดอยู่ทุกวันได้เลย Agent เข้าใจและตอบกลับด้วยภาษาเดียวกัน ออกเสียงและใช้น้ำเสียงเป็นธรรมชาติ ไม่ใช่ข้อความแปลที่อ่านออกเสียง'},
      {icon: 'ti-message-2', title: 'ตอบไว คุยเป็นธรรมชาติ', desc: 'ตอบกลับเร็ว และผู้โทรพูดแทรกได้ทุกเมื่อเหมือนคุยกับคน สายจึงเดินต่อไปได้ ไม่มีคนวางสายกลางคัน'},
      {icon: 'ti-plug-connected', title: 'เชื่อมกับระบบของคุณ', desc: 'Agent คุยกับ CRM ระบบจอง ระบบออเดอร์ และ API ภายในแบบเรียลไทม์ จึงเช็คสถานะ เลื่อนนัด หรือบันทึกคำขอแล้วยืนยันกลับกับผู้โทรได้เลย'},
      {icon: 'ti-adjustments', title: 'ออกแบบขั้นตอนการรับสาย', desc: 'เราเขียนขั้นตอนการรับสายร่วมกับทีมของคุณตามเรื่องที่ลูกค้าโทรมาจริง ว่า Agent พูดอะไร ถามอะไร โอนเมื่อไหร่ และจัดการสายแปลกๆ ที่ไม่เข้าแบบอย่างไร'},
      {icon: 'ti-chart-line', title: 'บันทึกการโทรและปรับปรุง', desc: 'คุณได้บันทึกการโทรและรายงานที่อ่านง่าย เราช่วยไล่ดูสายที่ Agent ทำไม่สำเร็จเพื่อหาสาเหตุ ปรับทุกรอบแล้ว Agent ก็ปิดเรื่องเองได้มากขึ้น'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Discovery', desc: 'We look at how many calls you get, what people ask for, which systems hold the answers, and which calls should always go to a person.'},
      {no: '02', title: 'Conversation Design', desc: 'We draft the call flows, the tone of voice, and the handover rules together with the people who answer your phones today.'},
      {no: '03', title: 'Development', desc: 'We build the agent, connect it to your data and systems, and set up the voice and language it will use.'},
      {no: '04', title: 'Phone Line Integration', desc: 'We connect the SIP or PSTN lines so the agent can take real calls on your numbers.'},
      {no: '05', title: 'Testing', desc: 'We try odd accents, background noise, interruptions, and awkward requests before any customer hears it.'},
      {no: '06', title: 'Monitoring', desc: 'After launch we watch live analytics, read the transcripts, and tune the agent as real calls show us what to fix.'}
    ] : [
      {no: '01', title: 'Discovery', desc: 'ดูว่ามีสายเข้าวันละเท่าไหร่ คนโทรมาถามเรื่องอะไร คำตอบอยู่ในระบบไหน และสายแบบไหนควรโอนให้คนเสมอ'},
      {no: '02', title: 'Conversation Design', desc: 'ร่างขั้นตอนการรับสาย น้ำเสียง และกติกาการโอนสาย ร่วมกับคนที่รับสายอยู่ทุกวันตอนนี้'},
      {no: '03', title: 'Development', desc: 'สร้าง Agent เชื่อมกับข้อมูลและระบบของคุณ แล้วตั้งค่าเสียงและภาษาที่จะใช้'},
      {no: '04', title: 'เชื่อมสายโทรศัพท์', desc: 'ต่อสาย SIP หรือ PSTN ให้ Agent รับสายจริงที่เบอร์ของคุณได้'},
      {no: '05', title: 'Testing', desc: 'ลองทั้งสำเนียงแปลกๆ เสียงรบกวน การพูดแทรก และคำขอที่ตอบยาก ก่อนที่ลูกค้าจริงจะได้ยิน'},
      {no: '06', title: 'Monitoring', desc: 'หลังเปิดใช้งาน เราดูรายงานสด อ่านบันทึกการโทร และปรับ Agent ตามสิ่งที่สายจริงบอกเราว่าต้องแก้'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Retail · Bangkok', title: 'AI Agent Handles 70% of Support Calls', desc: 'We connected the agent to a national customer service line. It now answers routine questions such as delivery status and return policy, and closes most of them without a person, so human agents keep the calls that need judgement.', result: '70% resolved without transfer'},
      {tag: 'Healthcare · Bangkok', title: 'Bilingual Booking Line Built in 6 Weeks', desc: 'A Thai and English voice agent wired straight into the clinic booking system, so callers book, move or cancel appointments during the call itself instead of leaving a voicemail for someone to return.', result: 'Zero missed appointments from voicemail'},
      {tag: 'Logistics · Nationwide', title: 'Order Status Line Handles 24/7 Volume', desc: 'The voice agent reads a live tracking API and tells callers where their parcel is, at any hour, which removed the hold queue that used to build up every morning.', result: '24/7 coverage, zero hold time'}
    ] : [
      {tag: 'Retail · กรุงเทพฯ', title: 'AI Agent ปิดเรื่อง Support ได้ 70%', desc: 'เราเชื่อม Agent เข้ากับสายลูกค้าสัมพันธ์ทั่วประเทศ ตอนนี้รับคำถามประจำอย่างสถานะการจัดส่งและนโยบายคืนสินค้า และปิดเรื่องส่วนใหญ่ได้โดยไม่ต้องใช้คน เจ้าหน้าที่จึงได้รับสายที่ต้องใช้วิจารณญาณ', result: 'ปิดเรื่องได้ 70% โดยไม่ต้องโอนสาย'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'สายจองคิวสองภาษา สร้างเสร็จใน 6 สัปดาห์', desc: 'Voice Agent ไทย-อังกฤษที่เชื่อมตรงกับระบบจองคิวของคลินิก ผู้โทรจอง เลื่อน หรือยกเลิกนัดได้ในสายเลย ไม่ต้องฝากข้อความไว้ให้ใครโทรกลับ', result: 'ไม่มีนัดหมายตกหล่นไปอยู่ใน Voicemail'},
      {tag: 'Logistics · ทั่วประเทศ', title: 'สายเช็คสถานะออเดอร์ รองรับ 24 ชั่วโมง', desc: 'Voice Agent ดึงข้อมูลจาก API ติดตามพัสดุแบบสด บอกผู้โทรได้ทุกเวลาว่าพัสดุอยู่ที่ไหน คิวรอสายที่เคยสะสมทุกเช้าจึงหายไป', result: 'รับสาย 24/7 ไม่ต้องรอสาย'}
    ]
  const faqs        = isEN ? [
      {q: 'What can your AI voice agents actually do?', a: 'They answer real phone calls from start to finish. The agent understands natural speech, holds a conversation, and resolves the request by working with your CRM, booking tool, or internal systems, for example checking an order or moving an appointment.'},
      {q: 'Does it support Thai?', a: 'Yes. Thai is a first-class language in our voice setup, alongside 25+ others, with natural pronunciation and understanding rather than a machine-translated feel.'},
      {q: 'Can it work with our existing phone system?', a: 'Yes. We connect over SIP and PSTN to most carriers and PBX systems, so you keep your current numbers and the agent takes over the conversation layer.'},
      {q: 'What happens when the agent cannot help?', a: 'It passes the call to a person along with the full conversation and any details it has collected, so the caller does not have to repeat anything.'},
      {q: 'Will callers know they are talking to an AI?', a: 'We recommend telling them at the start of the call in a short, friendly line. Callers generally accept it when the agent is quick and actually solves the problem, and you can set the greeting wording yourself.'},
      {q: 'Which kinds of calls are a good first target?', a: 'Repetitive, rule-based calls with answers in a system: appointment booking, order or delivery status, opening hours, and simple account questions. We choose one flow, launch it as a pilot, and add others once it works.'},
      {q: 'Can we hear it before we commit?', a: 'Yes. We build a working prototype on one of your own call flows, so you can ring it, interrupt it and try awkward requests before deciding on a wider rollout.'}
    ] : [
      {q: 'AI Voice Agent ของ Haliviq ทำอะไรได้บ้าง?', a: 'รับสายโทรศัพท์จริงได้ตั้งแต่ต้นจนจบ เข้าใจคำพูดธรรมชาติ คุยโต้ตอบได้ และปิดคำขอได้โดยทำงานร่วมกับ CRM ระบบจอง หรือระบบภายในของคุณ เช่น เช็คออเดอร์หรือเลื่อนนัด'},
      {q: 'รองรับภาษาไทยไหม?', a: 'รองรับ ภาษาไทยเป็นภาษาหลักของระบบเสียงเรา ควบคู่กับอีกกว่า 25 ภาษา ทั้งการออกเสียงและความเข้าใจ ฟังเป็นธรรมชาติ ไม่ใช่สำเนียงแปลด้วยเครื่อง'},
      {q: 'ใช้กับระบบโทรศัพท์ที่มีอยู่ได้ไหม?', a: 'ได้ เราเชื่อมผ่าน SIP และ PSTN กับผู้ให้บริการและระบบ PBX ส่วนใหญ่ คุณยังใช้เบอร์เดิมได้ ส่วน Agent จะรับหน้าที่คุยกับผู้โทรแทน'},
      {q: 'ถ้า Agent ช่วยไม่ได้จะเกิดอะไรขึ้น?', a: 'Agent จะโอนสายให้เจ้าหน้าที่ พร้อมส่งบทสนทนาและข้อมูลที่เก็บมาแล้วทั้งหมดไปด้วย ผู้โทรไม่ต้องเล่าซ้ำ'},
      {q: 'ผู้โทรจะรู้ไหมว่ากำลังคุยกับ AI?', a: 'เราแนะนำให้บอกตั้งแต่ต้นสายด้วยประโยคสั้นๆ เป็นกันเอง ผู้โทรส่วนใหญ่ยอมรับได้เมื่อ Agent ตอบไวและแก้ปัญหาได้จริง และคุณกำหนดคำทักทายเองได้'},
      {q: 'สายแบบไหนเหมาะเป็นงานแรก?', a: 'สายที่ซ้ำๆ มีกฎชัด และคำตอบอยู่ในระบบ เช่น จองคิว เช็คสถานะออเดอร์หรือการจัดส่ง เวลาทำการ และคำถามบัญชีง่ายๆ เราเลือกมาหนึ่งขั้นตอน เปิดแบบทดลองใช้ แล้วค่อยเพิ่มเมื่อใช้ได้ดี'},
      {q: 'ขอลองฟังก่อนตัดสินใจได้ไหม?', a: 'ได้ เราสร้างต้นแบบที่ใช้งานได้จริงบนขั้นตอนการรับสายของคุณหนึ่งเรื่อง คุณโทรเข้าไปลอง พูดแทรก และลองขอเรื่องยากๆ ได้ก่อนตัดสินใจขยาย'}
    ]
  const related     = isEN ? [
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const voiceLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>voice-agent --connect sip://line-01</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Telephony line connected' : 'เชื่อมสายโทรศัพท์แล้ว'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>call --lang th-TH --latency-target 400ms</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Response latency: 380ms' : 'Response Latency: 380ms'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>resolve --intent booking.status</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Call resolved, no transfer needed' : 'ปิดเรื่องโดยไม่ต้องโอนสาย'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>call-session.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {voiceLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgb(var(--fg) / 0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Call Resolution' : 'Call Resolution'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '70%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '70% calls resolved without transfer' : 'ปิดเรื่อง 70% โดยไม่โอนสาย'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-phone-calling', title: 'Phone Line Integration', desc: 'The agent connects to your carrier or PBX over SIP and PSTN and answers real phone lines on the numbers customers already call. It is a proper telephony setup, not a web widget with a microphone added.' },
    { icon: 'ti-language', title: 'Thai and 25+ Languages', desc: 'Callers speak normally and the agent replies in the same language, with natural pronunciation and tone. We test with Thai speakers so the result sounds like a person on the line, not translated text read aloud.' },
    { icon: 'ti-message-2', title: 'Fast, Natural Conversation', desc: 'Replies arrive in well under a second, and callers can talk over the agent whenever they like. That keeps the exchange moving and helps people stay on the line instead of hanging up.' },
    { icon: 'ti-plug-connected', title: 'Connected to Your Systems', desc: 'Live links into your CRM, booking tool, order system, and internal APIs let the agent check a status, change an appointment, or log a request, then tell the caller it is done.' },
    { icon: 'ti-adjustments', title: 'Call Flow Design', desc: 'We write the call flows with your team around the requests you really get, including what the agent says, what it asks, when it hands over, and how it treats the odd calls that do not fit.' },
    { icon: 'ti-chart-line', title: 'Transcripts and Tuning', desc: 'Call transcripts and simple analytics show what callers ask for. We review the calls that failed and tune the flows, so the share of calls the agent closes on its own keeps growing.' },
  ] : [
    { icon: 'ti-phone-calling', title: 'เชื่อมสายโทรศัพท์', desc: 'Agent ต่อกับผู้ให้บริการหรือ PBX ของคุณผ่าน SIP และ PSTN รับสายจริงที่เบอร์ที่ลูกค้าโทรอยู่แล้ว เป็นระบบโทรศัพท์จริงจัง ไม่ใช่วิดเจ็ตบนเว็บที่เติมไมค์เข้าไป' },
    { icon: 'ti-language', title: 'ภาษาไทยและอีกกว่า 25 ภาษา', desc: 'ผู้โทรพูดตามปกติ Agent ตอบกลับด้วยภาษาเดียวกัน ออกเสียงและใช้น้ำเสียงเป็นธรรมชาติ เราทดสอบกับคนไทยจริง เพื่อให้ฟังเหมือนมีคนรับสาย ไม่ใช่ข้อความแปลที่อ่านออกเสียง' },
    { icon: 'ti-message-2', title: 'ตอบไว คุยเป็นธรรมชาติ', desc: 'ตอบกลับภายในไม่ถึงวินาที และผู้โทรพูดแทรกได้ทุกเมื่อ บทสนทนาจึงเดินต่อไปได้ และลูกค้าอยู่คุยต่อ ไม่วางสายไปก่อน' },
    { icon: 'ti-plug-connected', title: 'เชื่อมกับระบบของคุณ', desc: 'เชื่อมสดกับ CRM ระบบจอง ระบบออเดอร์ และ API ภายใน ให้ Agent เช็คสถานะ เลื่อนนัด หรือบันทึกคำขอได้ แล้วบอกผู้โทรได้ทันทีว่าเรียบร้อยแล้ว' },
    { icon: 'ti-adjustments', title: 'ออกแบบขั้นตอนการรับสาย', desc: 'เราเขียนขั้นตอนการรับสายร่วมกับทีมของคุณตามเรื่องที่ลูกค้าโทรมาจริง ทั้งสิ่งที่ Agent พูด สิ่งที่ถาม จังหวะที่โอนต่อ และวิธีรับมือสายแปลกๆ ที่ไม่เข้าแบบ' },
    { icon: 'ti-chart-line', title: 'บันทึกการโทรและปรับปรุง', desc: 'บันทึกการโทรและรายงานง่ายๆ ให้เห็นว่าลูกค้าถามเรื่องอะไร เราไล่ดูสายที่ทำไม่สำเร็จแล้วปรับขั้นตอน สัดส่วนสายที่ Agent ปิดเรื่องได้เองจะเพิ่มขึ้นเรื่อยๆ' },
  ]

  const techStack = [
    { label: 'OpenAI Realtime API', icon: 'ti-brand-openai' },
    { label: 'Anthropic Claude', svg: 'anthropic' },
    { label: 'Twilio', icon: 'ti-brand-twilio' },
    { label: 'SIP / PSTN', icon: 'ti-phone' },
    { label: 'LiveKit', icon: 'ti-video' },
    { label: 'Deepgram', icon: 'ti-microphone-2' },
    { label: 'ElevenLabs', icon: 'ti-microphone' },
    { label: 'WebRTC', icon: 'ti-broadcast' },
    { label: 'Node.js', svg: 'nodedotjs' },
    { label: 'Python', svg: 'python' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'We study your call volume, what people ask for, which systems hold the answers, and which calls should always reach a person.' },
    { no: '02', title: 'Conversation Design', desc: 'Call flows, tone of voice, and handover rules, drafted with the people who answer your phones today.' },
    { no: '03', title: 'Development', desc: 'We build the agent and connect it to your data, systems, and the voice and language it will use.' },
    { no: '04', title: 'Phone Line Integration', desc: 'SIP or PSTN lines are connected so the agent can take real calls on your numbers.' },
    { no: '05', title: 'Testing', desc: 'Accents, background noise, interruptions, and awkward requests are tried before any customer calls in.' },
    { no: '06', title: 'Monitoring', desc: 'Live analytics and transcript reviews after launch, with tuning rounds based on what real calls show.' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'ดูจำนวนสาย เรื่องที่คนโทรมาถาม ระบบที่เก็บคำตอบ และสายแบบไหนที่ควรถึงมือคนเสมอ' },
    { no: '02', title: 'Conversation Design', desc: 'ร่างขั้นตอนการรับสาย น้ำเสียง และกติกาการโอนสาย ร่วมกับคนที่รับสายอยู่ทุกวันตอนนี้' },
    { no: '03', title: 'Development', desc: 'สร้าง Agent แล้วเชื่อมกับข้อมูล ระบบ และเสียงกับภาษาที่จะใช้คุยกับลูกค้า' },
    { no: '04', title: 'เชื่อมสายโทรศัพท์', desc: 'ต่อสาย SIP หรือ PSTN ให้ Agent รับสายจริงที่เบอร์ของคุณได้' },
    { no: '05', title: 'Testing', desc: 'ลองกับสำเนียงต่างๆ เสียงรบกวน การพูดแทรก และคำขอที่ตอบยาก ก่อนที่ลูกค้าจริงจะโทรเข้ามา' },
    { no: '06', title: 'Monitoring', desc: 'ดูรายงานสดและอ่านบันทึกการโทรหลังเปิดใช้งาน แล้วปรับเป็นรอบตามสิ่งที่สายจริงบอกเรา' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What can Haliviq’s AI voice agents actually do?', a: 'They answer real phone calls from start to finish. The agent understands natural speech, holds a proper conversation, lets the caller interrupt, and resolves the request by connecting live to your CRM, booking system, or internal APIs. A typical call might be checking an order, moving an appointment, or answering a billing question. It does not simply collect a name and transfer the call.' },
    { q: 'Does it support Thai?', a: 'Yes. Thai is a first-class language in our voice setup, alongside 25+ others. We aim for natural pronunciation, tone, and understanding, and we test with native Thai speakers, so callers do not get a stiff, machine-translated experience.' },
    { q: 'Can it integrate with our existing phone system?', a: 'Yes. We connect over SIP and PSTN to most carriers and PBX systems, so you keep your existing phone numbers and infrastructure while the agent handles the conversation. During discovery we check what your telephony provider supports, how calls are routed today, and where the handover to your staff should happen.' },
    { q: 'What happens when the agent cannot help?', a: 'It hands the call to a person together with the full conversation and anything it has already collected, such as the customer’s name, order number, and the reason for calling. The caller does not have to start again. We agree the handover rules with you up front, for example angry callers, payment disputes, or anything the agent is not allowed to decide.' },
    { q: 'How long does it take to launch a voice agent?', a: 'A focused pilot on one call flow, such as booking or order status, typically launches in 4-6 weeks. Broader deployment across several call types, with full production hardening, usually takes 8-12 weeks depending on how many systems it has to connect to. The biggest factor is usually how quickly we get access to your phone provider and internal APIs.' },
    { q: 'How much does an AI voice agent project cost?', a: 'Pricing depends on call volume, the number of languages, and how deeply the agent connects into your systems. A single-flow pilot typically starts in the low hundred-thousands (THB). Full multi-flow production deployments are scoped after a discovery call, and we include the running costs of speech and phone minutes in the estimate so you can see them before you commit.' },
    { q: 'Do we own the voice agent and its data after the project?', a: 'Yes. You own the conversation designs, the integration code, and all call data and transcripts. We can host and operate the agent for you, or hand over full deployment access so your own team runs it, whichever suits you better.' },
    { q: 'Can the agent handle high call volume, like during a promotion or outage?', a: 'Yes, and this is one of the main reasons to use a voice agent. It takes many simultaneous calls without extra hiring or training, and callers do not get hold queues or busy signals. Where a particular system behind it has limits, such as a booking API, we plan for that during testing.' },
  ] : [
    { q: 'AI Voice Agent ของ Haliviq ทำอะไรได้บ้าง?', a: 'รับสายโทรศัพท์จริงได้ตั้งแต่ต้นจนจบ เข้าใจคำพูดธรรมชาติ คุยโต้ตอบ ให้ผู้โทรพูดแทรกได้ และปิดคำขอได้โดยเชื่อมสดกับ CRM ระบบจอง หรือ API ภายในของคุณ สายทั่วไปอาจเป็นการเช็คออเดอร์ เลื่อนนัด หรือตอบเรื่องบิล ไม่ใช่แค่จดชื่อแล้วโอนสายต่อ' },
    { q: 'รองรับภาษาไทยไหม?', a: 'รองรับ ภาษาไทยเป็นภาษาหลักของระบบเสียงเรา ควบคู่กับอีกกว่า 25 ภาษา เราเน้นให้ออกเสียง น้ำเสียง และความเข้าใจเป็นธรรมชาติ และทดสอบกับคนไทยจริง ผู้โทรจึงไม่พบสำเนียงแข็งๆ แบบแปลด้วยเครื่อง' },
    { q: 'ใช้กับระบบโทรศัพท์ที่มีอยู่ได้ไหม?', a: 'ได้ เราเชื่อมผ่าน SIP และ PSTN กับผู้ให้บริการและระบบ PBX ส่วนใหญ่ คุณยังใช้เบอร์และระบบเดิมได้ ส่วน Agent รับหน้าที่คุยกับผู้โทร ตอนทำ Discovery เราจะเช็คว่าผู้ให้บริการของคุณรองรับอะไร ตอนนี้สายถูกส่งต่อกันอย่างไร และควรโอนให้ทีมคุณตรงจุดไหน' },
    { q: 'ถ้า Agent ช่วยไม่ได้จะเกิดอะไรขึ้น?', a: 'Agent จะโอนสายให้เจ้าหน้าที่ พร้อมส่งบทสนทนาทั้งหมดและข้อมูลที่เก็บไว้แล้ว เช่น ชื่อลูกค้า เลขออเดอร์ และเหตุผลที่โทรมา ผู้โทรไม่ต้องเริ่มเล่าใหม่ เรากำหนดกติกาการโอนสายกับคุณตั้งแต่แรก เช่น ผู้โทรที่กำลังโมโห เรื่องข้อพิพาทการชำระเงิน หรือเรื่องที่ Agent ไม่มีสิทธิ์ตัดสินใจ' },
    { q: 'ใช้เวลานานแค่ไหนกว่าจะเปิดใช้ Voice Agent?', a: 'งานทดลองหนึ่งขั้นตอนการรับสาย เช่น จองคิวหรือเช็คสถานะออเดอร์ มักใช้เวลา 4-6 สัปดาห์ ส่วนการขยายไปหลายประเภทสายและเตรียมระบบให้พร้อมใช้งานจริง มักใช้ 8-12 สัปดาห์ ขึ้นอยู่กับว่าต้องเชื่อมกี่ระบบ ปัจจัยที่กระทบเวลามากที่สุดมักเป็นความเร็วในการให้สิทธิ์เข้าถึงระบบโทรศัพท์และ API ภายในของคุณ' },
    { q: 'โปรเจกต์ AI Voice Agent มีค่าใช้จ่ายเท่าไหร่?', a: 'ราคาขึ้นอยู่กับจำนวนสาย จำนวนภาษา และความลึกของการเชื่อมระบบ งานทดลองแบบขั้นตอนเดียวมักเริ่มที่หลักแสนต้นๆ (บาท) ส่วนการใช้งานจริงหลายขั้นตอนเราจะเสนอราคาหลังคุยทำความเข้าใจโจทย์ โดยใส่ค่าใช้จ่ายต่อเนื่องอย่างค่าประมวลผลเสียงและค่านาทีโทรศัพท์ไว้ในประมาณการด้วย คุณจะเห็นก่อนตัดสินใจ' },
    { q: 'เราเป็นเจ้าของ Voice Agent และข้อมูลหลังโปรเจกต์จบไหม?', a: 'ใช่ คุณเป็นเจ้าของการออกแบบบทสนทนา โค้ดที่เชื่อมระบบ รวมถึงข้อมูลและบันทึกการโทรทั้งหมด เราจะโฮสต์และดูแลให้ก็ได้ หรือส่งมอบสิทธิ์ติดตั้งทั้งหมดให้ทีมของคุณดูแลเองก็ได้ แล้วแต่แบบไหนสะดวกกว่า' },
    { q: 'Agent รับสายจำนวนมากช่วงโปรโมชันหรือระบบล่มได้ไหม?', a: 'ได้ และนี่คือเหตุผลหลักข้อหนึ่งที่ควรใช้ Voice Agent ระบบรับหลายสายพร้อมกันได้โดยไม่ต้องจ้างหรืออบรมคนเพิ่ม ผู้โทรไม่ต้องรอคิวหรือพบสายไม่ว่าง ถ้าระบบเบื้องหลังมีข้อจำกัด เช่น API จองคิว เราจะวางแผนรับมือไว้ตั้งแต่ตอนทดสอบ' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                  <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A modern voice AI stack chosen for latency, accuracy, and reliability at call-center scale.'
              : 'Voice AI Stack ที่ทันสมัย เลือกมาเพื่อให้ตอบไว แม่นยำ และเชื่อถือได้ในระดับคอลเซ็นเตอร์'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from discovery to a production voice agent — adjusted per call flow, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการสำรวจโจทย์ไปจนถึง Voice Agent ที่ใช้งานจริง ปรับตามแต่ละขั้นตอนการรับสาย ไม่ใช่สูตรตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how our voice agents work.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่ Voice Agent ของเราทำงาน'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </div>
    </section>

    <section className="cta-final theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
        <h2 className="t-display mb-5 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีฟังว่าคุณกำลังสร้างอะไรอยู่'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกับเรา'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/ai-voice-agents/why1.jpg"
      whyImg2="/images/services/ai-voice-agents/why2.jpg"
      featureImg="/images/services/ai-voice-agents/feature.jpg"
      processImg="/images/services/ai-voice-agents/process.jpg"
    />
  )
}
