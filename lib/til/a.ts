import type { TilNote } from '@/lib/til-types'

export const tilA: TilNote[] = [
  // 1
  {
    slug: 'react-usedeferredvalue-vs-debounce',
    topic: 'React',
    date: '2026-02-16',
    th: {
      title: "ใช้ useDeferredValue แทน debounce กับ list ที่ re-render หนัก",
      excerpt: "debounce แค่หน่วงเวลาอัปเดต พอถึงเวลา render หนัก ๆ ก็ยังทำให้หน้าค้างอยู่ดี แต่ useDeferredValue ให้ React หยุด render ตรงกลางได้เมื่อมีการพิมพ์ตัวใหม่เข้ามา พิมพ์เลยลื่นแม้บนตาราง 5,000 แถว เหมาะกับกรณีที่ช่องค้นหาคุม list ใหญ่ ๆ และเราไม่อยากตั้งเวลารอแบบเดาเอา",
      problem: [
        "ในโปรเจกต์หนึ่งของเรา ช่องค้นหาคุมตารางที่มี 5,000 แถว เราใส่ debounce ไว้ที่ input แล้ว ช่วงพิมพ์รู้สึกโอเค แต่พอหมดเวลาหน่วง หน้าเว็บจะค้างไปพักหนึ่งระหว่างที่ตาราง render ใหม่",
        "ปัญหาคือ debounce ไม่ได้ทำให้งานหนักหายไป แค่ย้ายไปทำทีหลัง ทุกครั้งที่ timer ทำงาน ผู้ใช้ก็ยังโดนล็อกหน้าจนกว่า React จะ render เสร็จ",
      ],
      why: [
        "debounce หน่วงแค่จังหวะที่ state ถูกอัปเดต แต่พออัปเดตแล้ว งาน render ก็ใหญ่เท่าเดิม state update ปกติถือเป็นงานเร่งด่วน React จึงทำให้จบโดยไม่หยุดกลางทาง ตัวอักษรที่พิมพ์เข้ามาระหว่างนั้นต้องรออยู่ในคิว",
        "useDeferredValue จะทำเครื่องหมายว่าค่านั้นมีความสำคัญต่ำกว่า React จะ render ด้วยค่าเก่าก่อน (เบา) แล้วค่อยเริ่ม render ด้วยค่าใหม่อยู่เบื้องหลัง ถ้ามีการพิมพ์ตัวใหม่เข้ามา React จะทิ้ง render ที่ทำค้างไว้แล้วเริ่มใหม่ด้วยค่าล่าสุด ช่องพิมพ์เลยตอบสนองทันตลอด",
      ],
      fix: [
        "ตอนนี้เรา bind input กับ state ปกติ แล้วส่ง useDeferredValue(query) ให้ list เท่านั้น และห่อ list ด้วย memo เพราะถ้าไม่ห่อ component ลูกจะ render ซ้ำด้วยค่าเก่าอยู่ดี ก็ไม่ได้อะไรเลย เรายังเทียบ query กับ deferredQuery เพื่อทำให้ list จางลงระหว่างที่ยังตามไม่ทันได้ด้วย",
        "แต่ debounce ยังเป็นเครื่องมือที่ถูกต้องเมื่อทุกการอัปเดตต้องยิง request ไป network เพราะ useDeferredValue ไม่ได้ลดจำนวน request ถ้าปัญหาคือต้นทุนการ render ฝั่ง client ล้วน ๆ มันช่วยตัดเวลารอที่ต้องเดาเองออกไปได้",
      ],
      steps: [
        "เก็บค่าใน input ไว้ใน state ปกติ เพื่อให้การพิมพ์ไม่ถูกหน่วง",
        "สร้าง deferredQuery ด้วย useDeferredValue(query)",
        "ส่ง deferredQuery ให้ list หนัก ๆ และห่อ list ด้วย memo",
        "แสดงสถานะจางลงเมื่อ query ยังไม่เท่ากับ deferredQuery",
      ],
      code: {
        label: "ให้ input ใช้ค่าล่าสุด ส่วน list ใช้ค่าที่ถูกเลื่อนไว้",
        lang: 'tsx',
        text: `const [query, setQuery] = useState('')
const deferredQuery = useDeferredValue(query)
const isStale = query !== deferredQuery

return (
  <>
    <input value={query} onChange={e => setQuery(e.target.value)} />
    <div style={{ opacity: isStale ? 0.6 : 1 }}>
      <HeavyList query={deferredQuery} />
    </div>
  </>
)

// HeavyList ต้องห่อด้วย memo
const HeavyList = memo(function HeavyList({ query }: { query: string }) {
  // render rows ที่ filter ด้วย query
  return null
})`,
      },
      takeaway: "ถ้าอยากให้ render หนัก ๆ ถูกขัดจังหวะได้ ให้ใช้ useDeferredValue ส่วน debounce เก็บไว้ใช้ตอนต้องลดจำนวน request",
    },
    en: {
      title: "Wrap heavy list re-renders with useDeferredValue instead of debouncing",
      excerpt: "Debounce only delays the update, so the expensive render still blocks the page once it fires. useDeferredValue lets React interrupt that render when a new keystroke arrives, so typing stays smooth even on a 5,000-row table. Reach for it when a filter box drives a big list and you do not want to add arbitrary wait times.",
      problem: [
        "On one of our projects, a filter box drove a table of 5,000 rows. We had already put a debounce on the input, and typing felt fine until the delay expired. At that moment the whole page froze for a beat while the table re-rendered.",
        "Debounce had not removed the expensive work, it had only moved it to a later time. Whenever the timer fired, the user was locked out of the page until React finished rendering.",
      ],
      why: [
        "Debounce changes when the state update happens, but once the update runs, the render is exactly as big as before. A normal state update is urgent, so React works through it without interruption, and any keystrokes typed in the meantime wait in the queue.",
        "useDeferredValue marks a value as lower priority. React first re-renders with the old value, which is cheap, then starts a background render with the new value. If another keystroke arrives, React abandons the render in progress and restarts with the latest value, so the input stays responsive.",
      ],
      fix: [
        "We now keep the input bound to the immediate state and pass only useDeferredValue(query) to the list. The list is wrapped in memo, because otherwise the child re-renders with the old value too and nothing is saved. Comparing query with the deferred value also lets us dim the list while it catches up.",
        "Debounce is still the right tool when each update triggers a network request, since useDeferredValue does not reduce the number of requests. When the cost is purely client-side rendering, it removes the arbitrary wait time.",
      ],
      steps: [
        "Keep the input value in normal state so typing is never delayed.",
        "Create deferredQuery with useDeferredValue(query).",
        "Pass deferredQuery to the heavy list and wrap the list in memo.",
        "Show a dimmed state while query differs from deferredQuery.",
      ],
      code: {
        label: "Input uses the live value, the list uses the deferred one",
        lang: 'tsx',
        text: `const [query, setQuery] = useState('')
const deferredQuery = useDeferredValue(query)
const isStale = query !== deferredQuery

return (
  <>
    <input value={query} onChange={e => setQuery(e.target.value)} />
    <div style={{ opacity: isStale ? 0.6 : 1 }}>
      <HeavyList query={deferredQuery} />
    </div>
  </>
)

// HeavyList must be wrapped in memo
const HeavyList = memo(function HeavyList({ query }: { query: string }) {
  // render rows filtered by query
  return null
})`,
      },
      takeaway: "Use useDeferredValue to make an expensive render interruptible, and keep debounce for cutting down network requests.",
    },
  },

  // 2
  {
    slug: 'react-key-index-framer-motion',
    topic: 'React',
    date: '2026-01-20',
    th: {
      title: "key={index} ทำให้ exit animation ของ Framer Motion พังโดยไม่รู้ตัว",
      excerpt: "เวลาเรียงลำดับหรือลบ item ใน list ที่ใช้ index เป็น key React จะจับคู่ node เก่ากับ item ใหม่ผิดตัว animation ตอนลบเลยไปเล่นที่ element ผิดอัน ให้ใช้ id ที่คงที่จากข้อมูลเป็น key แทน ไม่เสียอะไรเลย และช่วยแก้บั๊กแปลก ๆ เรื่อง focus ของช่องกรอกและ state ใน list เดียวกันด้วย",
      problem: [
        "เรามี list ของการ์ดที่ใช้ AnimatePresence และตั้ง key เป็น index ของ array พอผู้ใช้ลบการ์ดตรงกลาง การ์ดใบสุดท้ายกลับเป็นตัวที่เล่น exit animation ส่วนการ์ดที่ถูกลบแค่เปลี่ยนเนื้อหากลายเป็นของใบข้าง ๆ",
        "ข้อมูลถูกต้องทุกอย่าง ที่ผิดมีแค่ animation และบางครั้งก็ focus ของ input ที่อยู่ในการ์ดด้วย",
      ],
      why: [
        "React ใช้ key ตัดสินว่า element เก่าตัวไหนตรงกับตัวใหม่ เมื่อใช้ index เป็น key แล้วลบ item ที่ 2 จาก 5 ใบ key 0 ถึง 3 ยังอยู่ และ key 4 หายไป React จึงสรุปว่าใบสุดท้ายถูกลบ แล้วอัปเดต props ของใบที่เหลือแทน",
        "AnimatePresence ทำงานตามกฎเดียวกัน คือเล่น exit animation ให้ child ที่ key หายไป exit เลยไปเล่นผิด element และด้วยเหตุผลเดียวกัน state ของ component เช่นค่าที่พิมพ์ค้างหรือ focus ก็ผูกอยู่กับตำแหน่ง ไม่ได้ผูกกับ item ส่วน list ที่ไม่เคยเรียงใหม่หรือลบ item ใช้ index เป็น key ได้ไม่มีปัญหา",
      ],
      fix: [
        "ให้ใช้ id ที่คงที่และไม่ซ้ำจากข้อมูลเป็น key เช่น id จากฐานข้อมูล ถ้า item ไม่มี id ให้สร้างตอนสร้าง item ไม่ใช่ตอน render เพราะ key จาก Math.random() ใน render จะเปลี่ยนทุกรอบและทำให้ remount ทั้งหมด",
        "พอใช้ key ที่คงที่ key ของ item ที่ถูกลบจะหายไปจริง AnimatePresence จึง animate ถูกตัว และ item ข้าง ๆ ก็ยังเก็บ state ของตัวเองไว้ได้",
      ],
      steps: [
        "หา list ทุกตัวที่ render อยู่ใน AnimatePresence",
        "เปลี่ยน key={index} เป็น key={item.id}",
        "ถ้าไม่มี id ให้สร้างด้วย crypto.randomUUID() ตอนสร้าง item",
        "ทดสอบด้วยการลบ item ตรงกลางและเรียงลำดับใหม่",
      ],
      code: {
        label: "ใช้ id จากข้อมูลเป็น key",
        lang: 'tsx',
        text: `<AnimatePresence>
  {items.map(item => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.label}
    </motion.li>
  ))}
</AnimatePresence>`,
      },
      takeaway: "ใช้ id ที่คงที่จากข้อมูลเป็น key เสมอ โดยเฉพาะ list ที่ลบหรือเรียงใหม่ได้ อย่าใช้ index",
    },
    en: {
      title: "key={index} silently breaks Framer Motion exit animations",
      excerpt: "When you reorder or remove items in a list keyed by index, React matches the wrong old node to the new item, so the exit animation plays on the wrong element. Use a stable id from your data as the key. It costs nothing and also fixes odd input-focus and state bugs in the same list.",
      problem: [
        "We had a list of cards animated with AnimatePresence, each keyed by its array index. When a user deleted a card from the middle, the last card was the one that played the exit animation, while the deleted card simply changed into its neighbor's content.",
        "The data was correct the whole time. Only the animation looked wrong, and sometimes the focus of inputs inside the cards did too.",
      ],
      why: [
        "React uses the key to decide which old element corresponds to which new one. With index keys, removing item 2 of 5 leaves keys 0 to 3 and drops key 4. React therefore concludes that the last element was removed and updates the props of the remaining ones in place.",
        "AnimatePresence follows the same rule: it plays the exit animation for the child whose key disappeared. So the exit plays on the wrong element. The same mismatch keeps component state, such as a half-typed input value or focus, attached to the position instead of the item. A list that is never reordered or trimmed is fine with index keys.",
      ],
      fix: [
        "Use a stable, unique id from the data as the key, such as a database id. If items have no id, generate one when the item is created, not during render, because a key from Math.random() inside render changes every time and remounts everything.",
        "With stable keys, the removed item's key is the one that vanishes, so AnimatePresence animates the right element and the neighbors keep their own state.",
      ],
      steps: [
        "Find every list rendered inside AnimatePresence.",
        "Replace key={index} with key={item.id}.",
        "If there is no id, assign one with crypto.randomUUID() when the item is created.",
        "Test by deleting from the middle and by reordering.",
      ],
      code: {
        label: "Key by the id from the data",
        lang: 'tsx',
        text: `<AnimatePresence>
  {items.map(item => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.label}
    </motion.li>
  ))}
</AnimatePresence>`,
      },
      takeaway: "Key list items by a stable id from your data, never by index, especially when items can be removed or reordered.",
    },
  },

  // 3
  {
    slug: 'react-strict-mode-double-effect',
    topic: 'React',
    date: '2025-11-03',
    th: {
      title: "useEffect cleanup ทำงาน 2 รอบใน Strict Mode ไม่ใช่บั๊กที่ต้องแก้",
      excerpt: "ตอนพัฒนา React 18 จะ mount, unmount แล้ว mount ซ้ำให้ตั้งใจ เพื่อจับ effect ที่รันซ้ำแล้วให้ผลไม่เหมือนเดิม ถ้ารันสองรอบแล้วพัง เช่น subscribe ซ้ำหรือยิง request สองครั้ง แสดงว่า effect นั้นไม่ปลอดภัยอยู่แล้ว ให้แก้ cleanup ไม่ใช่ปิด Strict Mode",
      problem: [
        "ตอนทำหน้าหนึ่งใน development useEffect ของเรารันสองรอบตั้งแต่โหลดครั้งแรก เปิด subscription ซ้ำสองอัน และยิง request ซ้ำสองครั้ง ความคิดแรกของเราคือปิด Strict Mode เพื่อให้มันหยุด",
        "แต่สุดท้ายพบว่า Strict Mode ไม่ได้ทำให้เกิดบั๊ก มันแค่ทำให้เราเห็นบั๊กที่มีอยู่แล้ว",
      ],
      why: [
        "ใน development ตั้งแต่ React 18 Strict Mode จะจำลองว่า component ถูก unmount แล้ว mount ใหม่ คือรัน effect, รัน cleanup, แล้วรัน effect อีกรอบ โดย state ยังอยู่เหมือนเดิม และเกิดเฉพาะตอน development ไม่มีใน production build",
        "จุดประสงค์คือเช็กว่าทุก effect มี cleanup ที่ย้อนสิ่งที่ setup ไว้ได้ครบ effect ที่เขียนถูกต้องจะทำงานเหมือนกันไม่ว่ารันรอบเดียวหรือ setup, cleanup, setup ถ้าเกิด subscription ซ้ำ แปลว่า cleanup ขาดหรือไม่ครบ และบั๊กเดียวกันจะโผล่ใน production ตอน component ถูก remount จริง เช่นผู้ใช้เปลี่ยนหน้าไปแล้วกลับมา",
      ],
      fix: [
        "เขียน cleanup ให้ย้อนสิ่งที่ effect ทำให้ครบ เช่น unsubscribe, เคลียร์ timer, ปิด connection, ยกเลิก fetch สำหรับการดึงข้อมูล ให้ใช้ AbortController หรือ flag สำหรับข้าม response ที่หมดอายุ request ซ้ำใน dev ก็จะไม่มีผลเสีย และ library อย่าง React Query หรือ SWR ก็ช่วย dedupe ให้ได้",
        "ส่วนงานที่ควรเกิดครั้งเดียวต่อหนึ่งการกระทำของผู้ใช้ เช่นส่งออเดอร์หรือส่ง event การซื้อ ไม่ควรอยู่ใน effect ให้ย้ายไปไว้ใน event handler",
      ],
      steps: [
        "อ่าน effect แล้วลิสต์ทุกอย่างที่มัน setup ไว้",
        "เขียน cleanup ย้อนทีละรายการ",
        "ยกเลิก fetch ที่ยังค้างอยู่ด้วย AbortController",
        "ย้ายงานที่เกิดจากการกระทำของผู้ใช้ไปไว้ใน event handler",
        "เปิด Strict Mode ทิ้งไว้",
      ],
      code: {
        label: "effect ที่ cleanup ครบ รันซ้ำได้อย่างปลอดภัย",
        lang: 'tsx',
        text: `useEffect(() => {
  const controller = new AbortController()

  fetch('/api/items', { signal: controller.signal })
    .then(res => res.json())
    .then(setItems)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err)
    })

  return () => controller.abort()
}, [])`,
      },
      takeaway: "ถ้า effect พังเมื่อรันซ้ำ ให้แก้ cleanup ไม่ใช่ปิด Strict Mode",
    },
    en: {
      title: "useEffect cleanup running twice in Strict Mode isn't a bug to fix",
      excerpt: "In development, React 18 mounts, unmounts and re-mounts your component on purpose to surface effects that are not idempotent. If running it twice breaks something, such as a duplicate subscription or a double request, the effect was already unsafe. Fix the cleanup rather than turning Strict Mode off.",
      problem: [
        "While building a screen in development, our useEffect ran twice on the first load. A subscription was opened two times and a request was sent twice, and our first instinct was to turn off Strict Mode to make it stop.",
        "It turned out that Strict Mode was not causing the bug. It was only showing us one that already existed.",
      ],
      why: [
        "In development, Strict Mode in React 18 and later simulates a component being unmounted and mounted again: it runs the effect, then the cleanup, then the effect once more, with state preserved. This happens only in development and never in production builds.",
        "The purpose is to check that every effect has a cleanup that fully undoes its setup. A correct effect behaves the same whether it runs once or goes through setup, cleanup, setup. A duplicate subscription means the cleanup was missing or incomplete, and the same bug would appear in production whenever the component is genuinely remounted, for example when a user navigates away and comes back.",
      ],
      fix: [
        "Write the cleanup so it reverses exactly what the effect did: unsubscribe, clear timers, close connections, abort fetches. For data fetching, use an AbortController or an ignore flag so a stale response is never applied. The extra request in development is then harmless, and a data library such as React Query or SWR can dedupe it for you.",
        "Things that should happen once per user action, such as submitting an order or sending a purchase event, do not belong in an effect at all. They belong in an event handler.",
      ],
      steps: [
        "Read the effect and list everything it sets up.",
        "Write a cleanup that undoes each item.",
        "Abort in-flight fetches with an AbortController.",
        "Move user-triggered actions into event handlers.",
        "Leave Strict Mode on.",
      ],
      code: {
        label: "An effect with a complete cleanup is safe to run twice",
        lang: 'tsx',
        text: `useEffect(() => {
  const controller = new AbortController()

  fetch('/api/items', { signal: controller.signal })
    .then(res => res.json())
    .then(setItems)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err)
    })

  return () => controller.abort()
}, [])`,
      },
      takeaway: "If an effect breaks when it runs twice, fix its cleanup instead of turning Strict Mode off.",
    },
  },

  // 4
  {
    slug: 'nextjs-server-components-rerender',
    topic: 'Next.js',
    date: '2025-09-22',
    th: {
      title: "Server Components render ใหม่ทุกครั้งที่เปลี่ยนหน้า ไม่ใช่แค่ตอน mount",
      excerpt: "เราเคยเข้าใจว่าผลลัพธ์ของ Server Component ถูก cache ข้ามหน้า แต่จริง ๆ Next.js ดึงใหม่ทุกครั้งที่กดลิงก์เปลี่ยนหน้า เว้นแต่เราตั้งค่า caching เอง ถ้าหน้าไหนช้าหลังกดลิงก์ ให้ดูว่า server component ดึงอะไรอยู่ แล้วตัดสินใจให้ชัดว่าอะไรควร cache และนานแค่ไหน",
      problem: [
        "เราเคยเข้าใจว่าพอ Server Component render เสร็จแล้ว ผลลัพธ์จะถูกใช้ซ้ำเมื่อผู้ใช้เปลี่ยนหน้าไปแล้วกลับมา เหมือนถูก cache ไว้ แต่พอกดลิงก์ในหน้าเว็บ บางหน้ากลับช้า และ log ฝั่ง server แสดงว่าการดึงข้อมูลรันใหม่ทุกครั้งที่เข้าหน้านั้น",
        "ตอนแรกเราไล่หาบั๊กใน client ทั้งที่ต้นเหตุอยู่ที่ฝั่ง server",
      ],
      why: [
        "ผลลัพธ์ของ Server Component ไม่ใช่ cache ในตัวมันเอง เวลา soft navigation ฝั่ง client จะขอ RSC payload ของ route segment ใหม่จาก server และ server ก็ render ใหม่ layout ที่ใช้ร่วมกันระหว่างหน้าเก่ากับหน้าใหม่จะไม่ถูก render ซ้ำ แต่ segment ของ page จะถูก render",
        "ส่วนที่ใช้ซ้ำได้ขึ้นกับเวอร์ชันและการตั้งค่า ใน Next.js 14 Router Cache ฝั่ง client เก็บหน้า dynamic ที่เคยเข้าไว้ 30 วินาที และ Data Cache ของ fetch() เปิดเป็นค่าเริ่มต้น ส่วน Next.js 15 เปลี่ยนค่าเริ่มต้น คือ fetch ไม่ถูก cache และ segment ของ page จะไม่ถูกใช้ซ้ำจาก Router Cache เว้นแต่ตั้ง staleTimes ดังนั้นอย่าสมมติพฤติกรรมเอาเอง",
      ],
      fix: [
        "ตัดสินใจเป็นราย fetch ให้ชัด ข้อมูลที่เปลี่ยนไม่บ่อยให้ cache ไว้พร้อม tag แล้ว revalidate ด้วย revalidateTag ตอนข้อมูลเปลี่ยน ข้อมูลเฉพาะผู้ใช้ให้เป็น dynamic ต่อไป และถ้าหลาย component ใน render เดียวกันอ่านข้อมูลเดียวกัน ให้ใช้ React cache() ช่วยไม่ให้ดึงซ้ำ",
        "เวลาทดสอบให้กดลิงก์เปลี่ยนหน้าจริง ๆ ไม่ใช่แค่ hard refresh เพราะสองแบบนี้เดินคนละเส้นทางของ cache",
      ],
      steps: [
        "เปิดหน้าที่ช้า แล้ว log ว่าแต่ละ Server Component ดึงอะไรบ้าง",
        "เช็กเวอร์ชัน Next.js เพราะค่าเริ่มต้นของ 14 กับ 15 ต่างกัน",
        "ตัดสินใจรายตัวว่า fetch ไหนต้องสดเสมอ, cache จนกว่าจะ revalidate tag หรือ cache เป็นช่วงเวลา",
        "ใช้ React cache() ลดการอ่านข้อมูลซ้ำใน render เดียวกัน",
        "ทดสอบด้วยการคลิกลิงก์ ไม่ใช่แค่ reload",
      ],
      code: {
        label: "cache ไว้จนกว่าจะเรียก revalidateTag('products')",
        lang: 'ts',
        text: `const res = await fetch('https://api.example.com/products', {
  cache: 'force-cache',
  next: { tags: ['products'] },
})
const products = await res.json()`,
      },
      takeaway: "อย่าสมมติว่าผลลัพธ์ของ Server Component ถูก cache ให้ตัดสินใจเรื่อง caching ของแต่ละ fetch ให้ชัดเจน",
    },
    en: {
      title: "Server Components re-render on every navigation, not just mount",
      excerpt: "We assumed the output of a Server Component was cached across route changes. In practice Next.js fetches it again on every soft navigation unless you opt into a caching strategy. If a page feels slow after a client-side link click, check what the server component is fetching and decide explicitly what should be cached and for how long.",
      problem: [
        "We assumed that once a Server Component had rendered, its output would be reused when the user navigated away and back, as if it were cached. After a client-side link click, though, one page felt slow, and the server logs showed its data fetch running again on every visit.",
        "We spent time hunting for a client-side bug when the cause was on the server.",
      ],
      why: [
        "A Server Component's output is not a cache by itself. On a soft navigation, the client asks the server for the RSC payload of the new route segments, and the server renders them again. Layouts shared between the old and new route are not re-rendered, but the page segment is.",
        "What can be reused depends on the version and settings. In Next.js 14, the client Router Cache keeps visited dynamic pages for 30 seconds, and the fetch() Data Cache is on by default. Next.js 15 changed those defaults: fetch requests are not cached by default, and page segments are not reused from the Router Cache unless you configure staleTimes. So it is safest not to assume either behavior.",
      ],
      fix: [
        "Decide explicitly for each fetch. For data that changes rarely, cache it with a tag and call revalidateTag when it changes. Keep per-user data dynamic. When several components in the same render read the same data, wrap the read in React cache() so it is only fetched once.",
        "When testing, click through links rather than only doing a hard refresh, because the two take different paths through the caches.",
      ],
      steps: [
        "Open the slow page and log what each Server Component fetches.",
        "Check the Next.js version, since the defaults differ between 14 and 15.",
        "Decide per fetch: always fresh, cached until a tag is revalidated, or cached for a period.",
        "Use React cache() to avoid repeated reads within one render.",
        "Test by clicking links, not only by reloading.",
      ],
      code: {
        label: "Cached until we call revalidateTag('products')",
        lang: 'ts',
        text: `const res = await fetch('https://api.example.com/products', {
  cache: 'force-cache',
  next: { tags: ['products'] },
})
const products = await res.json()`,
      },
      takeaway: "Never assume a Server Component's output is cached; decide the caching of each fetch explicitly.",
    },
  },

  // 5
  {
    slug: 'nextjs-revalidatepath-router-cache',
    topic: 'Next.js',
    date: '2025-08-04',
    th: {
      title: "revalidatePath ไม่ได้ล้าง router cache ฝั่ง client",
      excerpt: "ข้อมูลบน server ใหม่แล้ว แต่ผู้ใช้ยังเห็นข้อมูลเก่านานถึง 30 วินาที เพราะ browser มี router cache ของตัวเอง ซึ่ง revalidatePath ไปไม่ถึง ถ้าความสดของข้อมูลสำคัญ เช่น หลังส่งฟอร์ม ให้สั่ง refresh router ฝั่ง client ด้วย และทดสอบโดยคลิกเปลี่ยนหน้าจริง ๆ ไม่ใช่แค่ reload",
      problem: [
        "หลังผู้ใช้ส่งฟอร์ม ข้อมูลบน server อัปเดตแล้ว แต่ถ้าผู้ใช้กลับไปหน้า list จะยังเห็นเนื้อหาเก่าอยู่นานถึง 30 วินาที พอ reload แบบ hard ข้อมูลกลับสดตามปกติ เลยทำให้ทำซ้ำเพื่อหาสาเหตุได้ยาก",
      ],
      why: [
        "revalidatePath ล้าง cache ฝั่ง server ของ path นั้น คือ Data Cache และ Full Route Cache แต่ browser ยังมี Router Cache ฝั่ง client ที่เก็บ RSC payload ของหน้าที่เคยเข้าไว้ใน memory ของ browser เอง server จึงสั่งล้างตรง ๆ ไม่ได้ ใน Next.js 14 หน้า dynamic จะอยู่ใน cache นี้ 30 วินาที",
        "มีเงื่อนไขสำคัญคือ ถ้าเรียก revalidatePath ภายใน Server Action Next.js จะ invalidate Router Cache ฝั่ง client ให้ด้วย แต่ถ้า mutation ผ่าน Route Handler หรือ API ภายนอก จะไม่เกิดแบบนั้น และหน้าที่เคยเข้าอาจยังเป็นข้อมูลเก่า ใน Next.js 15 หน้าจะไม่ถูกใช้ซ้ำจาก Router Cache เป็นค่าเริ่มต้น (staleTimes เป็น 0) ปัญหานี้จึงพบน้อยลง แต่การกดย้อนกลับหรือไปข้างหน้าอาจยังเห็นหน้าที่เก็บไว้",
      ],
      fix: [
        "ถ้า mutation ไม่ได้ผ่าน Server Action ให้เรียก router.refresh() จาก useRouter ฝั่ง client หลัง request สำเร็จ มันจะ refresh route ปัจจุบันและดึงข้อมูลใหม่ หรือจะย้าย mutation ไปเป็น Server Action แล้วเรียก revalidatePath ในนั้นก็ได้",
        "เวลาทดสอบให้ลองส่งฟอร์ม กดลิงก์ไปหน้าอื่น แล้วกลับมาดูหน้า list เพราะการ reload จะซ่อนปัญหานี้ไว้",
      ],
      steps: [
        "เช็กว่า mutation ผ่าน Server Action หรือ Route Handler",
        "ถ้าเป็น Route Handler ให้เรียก router.refresh() หลัง request สำเร็จ",
        "ถ้าเป็น Server Action ให้เรียก revalidatePath ในนั้น",
        "ทดสอบโดยคลิกเปลี่ยนหน้าไปมา ไม่ใช่แค่ reload",
      ],
      code: {
        label: "refresh router ฝั่ง client หลัง mutation ที่ไม่ใช่ Server Action",
        lang: 'tsx',
        text: `'use client'
import { useRouter } from 'next/navigation'

export function PostForm() {
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    const res = await fetch('/api/posts', { method: 'POST', body: formData })
    if (res.ok) router.refresh()
  }

  return <form action={onSubmit}>{/* fields */}</form>
}`,
      },
      takeaway: "หลัง mutation ที่ไม่ผ่าน Server Action อย่าพึ่ง revalidatePath อย่างเดียว ให้ refresh router ฝั่ง client ด้วย และทดสอบด้วยการคลิกจริง",
    },
    en: {
      title: "revalidatePath doesn't bust the client-side router cache",
      excerpt: "The server data was fresh, but users still saw stale content for up to 30 seconds because the browser keeps its own router cache that revalidatePath does not touch. When freshness matters, such as after a form submit, trigger a router refresh on the client as well, and test the flow by clicking around rather than only reloading.",
      problem: [
        "After a user submitted a form, the server data was already updated, yet going back to the list page still showed the old content for up to 30 seconds. A hard reload showed fresh data, which made the problem hard to reproduce and easy to dismiss.",
      ],
      why: [
        "revalidatePath purges the server-side caches for that path: the Data Cache and the Full Route Cache. The browser also holds a client-side Router Cache that stores the RSC payloads of pages already visited. It lives in the browser's memory, so the server cannot simply clear it. In Next.js 14, dynamic pages stay in it for 30 seconds.",
        "One condition matters: when revalidatePath is called inside a Server Action, Next.js also invalidates the client Router Cache for you. When the mutation goes through a Route Handler or an external API, that does not happen, and visited pages can stay stale. In Next.js 15, pages are not reused from the Router Cache by default (staleTimes of 0), so this shows up less, though back and forward navigation may still show a stored view.",
      ],
      fix: [
        "When the mutation does not go through a Server Action, call router.refresh() from useRouter on the client after the request succeeds. It refreshes the current route and fetches fresh data. Alternatively, move the mutation into a Server Action and call revalidatePath there.",
        "Test the flow by submitting, following a link to another page, and coming back to the list. A reload hides this problem.",
      ],
      steps: [
        "Check whether the mutation goes through a Server Action or a Route Handler.",
        "For a Route Handler, call router.refresh() after the request succeeds.",
        "For a Server Action, call revalidatePath inside it.",
        "Test by clicking between pages, not only by reloading.",
      ],
      code: {
        label: "Refresh the router on the client after a non-Server-Action mutation",
        lang: 'tsx',
        text: `'use client'
import { useRouter } from 'next/navigation'

export function PostForm() {
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    const res = await fetch('/api/posts', { method: 'POST', body: formData })
    if (res.ok) router.refresh()
  }

  return <form action={onSubmit}>{/* fields */}</form>
}`,
      },
      takeaway: "After a mutation that is not a Server Action, do not rely on revalidatePath alone: refresh the router on the client too, and test by clicking.",
    },
  },

  // 6
  {
    slug: 'typescript-satisfies',
    topic: 'TypeScript',
    date: '2025-07-12',
    th: {
      title: "satisfies เก็บ literal type ไว้ และตรวจ shape ไปพร้อมกัน",
      excerpt: "ถ้าเราระบุ type ให้ตัวแปรตรง ๆ type จะกว้างขึ้นและเสีย literal value จริงไป ส่วน satisfies ตรวจ object ตาม type แต่ยังเก็บ inference แบบแคบไว้ เหมาะกับ config หรือ route map ที่อยากได้ทั้ง autocomplete ของ key จริงและการตรวจ shape ให้ถูกต้อง",
      problem: [
        "เรามี route map ที่เขียนเป็น object แล้วใส่ type ให้ตัวแปรเป็น Record<string, Route> ตรวจ shape ได้ก็จริง แต่ autocomplete ไม่เห็น key จริงอย่าง home หรือ login และพิมพ์ key ผิดก็ไม่ error เพราะ type บอกว่า string ไหนก็ได้",
        "เราอยากได้ทั้งสองอย่าง คือให้ compiler ตรวจว่าทุก entry มี shape ถูก และให้ editor รู้ว่า key ไหนมีอยู่จริง",
      ],
      why: [
        "เมื่อเราเขียน type annotation ตัวแปรจะมี type ตามที่ระบุ ไม่ใช่ตามค่าที่ใส่ จึงเหลือแต่ข้อมูลกว้าง ๆ ของ Record<string, Route> ส่วนข้อมูลเฉพาะของ object ที่เขียนไว้หายไป",
        "satisfies (มาตั้งแต่ TypeScript 4.9) ตรวจ expression เทียบกับ type แล้ว ไม่เปลี่ยน type ของตัวแปร type ที่ได้ยังมาจากค่าที่เขียนจริง key จึงเป็นชุดที่แน่นอน และ property ที่ type เป้าหมายกำหนดเป็น literal union เช่น 'GET' | 'POST' ก็คงเป็น literal เดิม ถ้าอยากให้ทุกค่าเป็น literal ให้ใช้ as const ร่วมด้วย",
      ],
      fix: [
        "ตอนนี้ config และ route map ของเราใช้ satisfies แทน annotation พิมพ์ key ผิดแล้ว compiler เตือนทันที autocomplete เห็นเฉพาะ key จริง และถ้ามี entry ไหนผิด shape ก็ error ที่ entry นั้นเลย",
        "ถ้าต้องการให้ตัวแปรกว้างโดยตั้งใจ เช่นรับค่าได้หลายแบบ ก็ยังใช้ annotation ตามปกติได้ satisfies เหมาะกับ object ที่เรารู้ว่ามีอะไรอยู่ข้างใน",
      ],
      steps: [
        "ลบ type annotation ออกจากตัวแปร",
        "ใส่ satisfies ตามด้วย type ที่ต้องการตรวจท้าย object",
        "ลองพิมพ์ key ผิดเพื่อดูว่า compiler เตือน",
        "ถ้าต้องการ literal ทั้งหมด เพิ่ม as const ก่อน satisfies",
      ],
      code: {
        label: "ตรวจ shape แต่ยังรู้ key จริง",
        lang: 'ts',
        text: `type Route = { path: string; method: 'GET' | 'POST' }

const routes = {
  home: { path: '/', method: 'GET' },
  login: { path: '/login', method: 'POST' },
} satisfies Record<string, Route>

routes.login.method // 'POST'
routes.logn // error: Property 'logn' does not exist`,
      },
      takeaway: "ใช้ satisfies เมื่ออยากให้ compiler ตรวจ shape โดยไม่ทำให้ type ของ object กว้างขึ้น",
    },
    en: {
      title: "satisfies keeps literal types AND checks the shape",
      excerpt: "Annotating a variable with a type widens it, so you lose the exact literal values. The satisfies operator validates the object against the type but keeps the narrow inference, which is handy for config objects and route maps where you want both autocomplete on the real keys and a safety net on the shape.",
      problem: [
        "We had a route map written as an object, with the variable annotated as Record<string, Route>. The shape was checked, but autocomplete did not show the real keys like home or login, and a mistyped key did not error because the type allowed any string.",
        "We wanted both: the compiler checking that every entry has the right shape, and the editor knowing which keys actually exist.",
      ],
      why: [
        "With a type annotation, the variable gets the type you wrote, not the type of the value you assigned. All that remains is the broad information in Record<string, Route>, and the specifics of the object you wrote are gone.",
        "satisfies (available since TypeScript 4.9) checks the expression against a type without changing the variable's type. The inferred type still comes from the actual value, so the keys are exactly the ones you wrote, and properties that the target type declares as literal unions, such as 'GET' | 'POST', stay literal. If you want every value to be a literal, combine it with as const.",
      ],
      fix: [
        "Our config objects and route maps now use satisfies instead of an annotation. A mistyped key is flagged immediately, autocomplete lists only the real keys, and an entry with the wrong shape errors right at that entry.",
        "When you deliberately want a wide variable, for example one that accepts many kinds of values, a normal annotation is still the right choice. satisfies fits objects whose contents you already know.",
      ],
      steps: [
        "Remove the type annotation from the variable.",
        "Add satisfies followed by the type to check against at the end of the object.",
        "Try a mistyped key to confirm the compiler complains.",
        "If you need fully literal values, add as const before satisfies.",
      ],
      code: {
        label: "Check the shape but keep the real keys",
        lang: 'ts',
        text: `type Route = { path: string; method: 'GET' | 'POST' }

const routes = {
  home: { path: '/', method: 'GET' },
  login: { path: '/login', method: 'POST' },
} satisfies Record<string, Route>

routes.login.method // 'POST'
routes.logn // error: Property 'logn' does not exist`,
      },
      takeaway: "Use satisfies when you want the compiler to check a shape without widening the type of the object.",
    },
  },

  // 7
  {
    slug: 'typescript-optional-chaining-typos',
    topic: 'TypeScript',
    date: '2025-05-28',
    th: {
      title: "Optional chaining ซ่อนคำสะกดผิดของชื่อ property จาก compiler",
      excerpt: "ถ้า type หลวมหรือเป็น any คำว่า user?.emial จะคืนค่า undefined เงียบ ๆ แทนที่จะ error คำสะกดผิดเลยหลุดไปถึงระบบจริงโดยไม่มีใครเห็น ให้ type ข้อมูลให้ถูกต้องเพื่อให้ compiler เตือนได้ และถ้าพบ optional chaining เต็มโค้ดไปหมด อาจแปลว่าโครงข้อมูลยังไม่ชัด",
      problem: [
        "เราพบบั๊กที่ email ของผู้ใช้ไม่แสดงในหน้าหนึ่ง ทั้งที่ข้อมูลมาครบ สาเหตุคือโค้ดเขียนว่า user?.emial สะกดผิดหนึ่งตัว ไม่มี error ไม่มี warning และหน้าแค่แสดงค่าว่าง",
        "บั๊กแบบนี้หลุดไปถึง production ได้ง่าย เพราะไม่มีอะไรพังให้เห็น",
      ],
      why: [
        "ถ้า user เป็น any compiler จะยอมให้เข้าถึง property อะไรก็ได้ และผลลัพธ์ก็เป็น any ด้วย ส่วน ?. แค่ช่วยให้ไม่ throw เมื่อค่าเป็น null หรือ undefined ไม่ได้ตรวจชื่อ property และที่ runtime property ที่ไม่มีอยู่ก็แค่ได้ undefined ไม่ใช่ error",
        "ถ้า type ถูกกำหนดไว้ชัด เช่น User | null การเขียน user?.emial จะ error ว่า property นี้ไม่มีอยู่ใน type User ดังนั้นปัญหาจริงไม่ใช่ optional chaining แต่เป็น type ที่หลวมเกินไป และบางครั้งเราก็ใส่ ?. ไว้เต็มโค้ดเพราะไม่แน่ใจว่าข้อมูลหน้าตาเป็นอย่างไร",
      ],
      fix: [
        "ให้ type ข้อมูลที่มาจากภายนอกให้ถูกต้อง เช่นใช้ interface ที่ตรงกับ response หรือ validate ด้วย schema แล้วค่อยใช้ ถ้าไม่รู้ shape จริง ให้ใช้ unknown แทน any เพื่อบังคับให้ตรวจก่อนใช้ และเปิด strict กับ noImplicitAny ไว้",
        "ถ้าพบ ?. ซ้อนกันหลายชั้นในโค้ด ให้ถามตัวเองว่าข้อมูลส่วนนั้นควร optional จริงไหม ถ้าไม่ ให้แก้ที่ type หรือจัดการค่าว่างครั้งเดียวที่ขอบของระบบ",
      ],
      steps: [
        "ค้นหา any ในโค้ดที่เกี่ยวกับข้อมูลผู้ใช้และ response ของ API",
        "แทนที่ด้วย type จริง หรือ unknown แล้ว validate",
        "เปิด strict และ noImplicitAny",
        "ลบ ?. ที่ไม่จำเป็นออกเมื่อ type บอกว่าค่านั้นต้องมีอยู่",
      ],
      code: {
        label: "any ไม่ error แต่ type จริงจับคำสะกดผิดได้",
        lang: 'ts',
        text: `type User = { id: string; email: string; name?: string }

function show(a: any, b: User | null) {
  a?.emial // ไม่ error: any ยอมทุกอย่าง
  b?.emial // error: Property 'emial' does not exist on type 'User'
}`,
      },
      takeaway: "ให้ type ข้อมูลให้ถูกต้องแล้ว compiler จะจับคำสะกดผิดให้ และถ้า ?. มากเกินไป ให้กลับไปดูโครงข้อมูล",
    },
    en: {
      title: "Optional chaining hides typos in property names from the compiler",
      excerpt: "If the type is loose or any, user?.emial quietly returns undefined instead of raising an error, and the typo ships to production unnoticed. Keep the object properly typed so the compiler can flag the misspelling, and treat a lot of optional chaining as a hint that the data model is not well defined.",
      problem: [
        "We hit a bug where a user's email did not show on one screen even though the data was complete. The cause was code that read user?.emial, one letter off. There was no error and no warning, and the screen simply rendered an empty value.",
        "This kind of bug ships easily because nothing visibly breaks.",
      ],
      why: [
        "When user is any, the compiler allows access to any property, and the result is any as well. The ?. operator only prevents a throw when the value is null or undefined. It does not check the property name, and at runtime a missing property just evaluates to undefined rather than raising an error.",
        "When the type is defined, for example User | null, writing user?.emial fails with an error saying the property does not exist on type User. So the real problem is not optional chaining but a type that is too loose. Sometimes we also sprinkle ?. everywhere simply because we are not sure what the data looks like.",
      ],
      fix: [
        "Type data from outside the app properly, either with an interface that matches the response or by validating it with a schema before use. When you do not know the real shape, use unknown instead of any so you are forced to check it first, and keep strict and noImplicitAny turned on.",
        "When you see ?. stacked several levels deep, ask whether that data should really be optional. If not, fix the type, or handle the missing value once at the boundary of the system.",
      ],
      steps: [
        "Search for any in code that handles user data and API responses.",
        "Replace it with a real type, or with unknown plus validation.",
        "Turn on strict and noImplicitAny.",
        "Remove ?. where the type says the value is always present.",
      ],
      code: {
        label: "any stays silent, a real type catches the typo",
        lang: 'ts',
        text: `type User = { id: string; email: string; name?: string }

function show(a: any, b: User | null) {
  a?.emial // no error: any allows everything
  b?.emial // error: Property 'emial' does not exist on type 'User'
}`,
      },
      takeaway: "Type your data properly so the compiler can catch typos, and treat heavy optional chaining as a sign to revisit the data model.",
    },
  },

  // 8
  {
    slug: 'postgres-partial-index-soft-delete',
    topic: 'PostgreSQL',
    date: '2025-09-10',
    th: {
      title: "Partial index ทำให้ query ที่ใช้ soft-delete เร็วขึ้น 40 เท่า",
      excerpt: "เรา index แถวที่ถูก soft-delete ไว้กว่า 2 ล้านแถว ทั้งที่แอปไม่เคย query ถึง พอใช้ partial index แบบ WHERE deleted_at IS NULL มันครอบคลุมเฉพาะแถวที่ยังใช้งาน index เลยเล็กลงและอยู่ใน memory ได้ เวลา query ลดจาก 800ms เหลือ 20ms ตารางไหนที่ query ส่วนใหญ่ไปแตะแค่แถวกลุ่มเล็ก ๆ ที่ระบุได้ชัด ก็น่าลองวิธีนี้",
      problem: [
        "ในโปรเจกต์หนึ่งของเรา ตารางหลักใช้ soft-delete โดยตั้งค่า deleted_at แทนการลบแถวจริง ผ่านไปสักพักมีแถวที่ถูก soft-delete สะสมอยู่กว่า 2 ล้านแถว ขณะที่ query ของแอปทั้งหมดสนใจแค่แถวที่ยังใช้งาน",
        "index ปกติบนตารางนี้ครอบคลุมทุกแถว รวมแถวที่ไม่เคยมีใครถามถึง query ที่ควรเร็วจึงใช้เวลาราว 800ms",
      ],
      why: [
        "index ปกติเก็บรายการของทุกแถวในตาราง แถวที่ถูก soft-delete จึงทำให้ index ใหญ่ขึ้นโดยไม่มีประโยชน์ index ที่ใหญ่กว่าจะอยู่ใน memory ได้ยากกว่า ทำให้ต้องอ่านจาก disk บ่อยขึ้น",
        "partial index เก็บเฉพาะแถวที่ตรงกับเงื่อนไข WHERE ที่ระบุตอนสร้าง ในกรณีนี้คือ deleted_at IS NULL index จึงเล็กลงมากและมีโอกาสอยู่ใน memory ได้เต็ม ๆ สิ่งที่ต้องระวังคือ planner จะเลือกใช้ index นี้ก็ต่อเมื่อ WHERE ของ query รับประกันได้ว่าเข้ากับเงื่อนไขของ index ดังนั้น query ต้องมี deleted_at IS NULL อยู่ด้วย",
      ],
      fix: [
        "เราสร้าง partial index ด้วย CREATE INDEX CONCURRENTLY เพื่อไม่ให้ล็อกการเขียนบนตารางที่ใช้งานอยู่ แล้วเช็กด้วย EXPLAIN ว่า query ใช้ index ตัวใหม่จริง ในเคสนี้เวลา query ลดจาก 800ms เหลือ 20ms หรือเร็วขึ้นราว 40 เท่า ตัวเลขนี้ขึ้นกับข้อมูลและ workload ของเรา ไม่ได้การันตีว่าจะเท่ากันทุกที่",
        "วิธีนี้ใช้ได้กับตารางที่ query ส่วนใหญ่แตะแค่แถวกลุ่มเล็ก ๆ ที่ระบุเงื่อนไขได้ชัด เช่น แถวที่ยังไม่ถูกลบ หรือแถวที่สถานะเป็น active เมื่อมีแถวหลุดออกจากเงื่อนไข มันก็หลุดออกจาก index ไปด้วย",
      ],
      steps: [
        "ดูว่า query หลักกรองแถวด้วยเงื่อนไขอะไรเสมอ เช่น deleted_at IS NULL",
        "สร้าง partial index ด้วย CREATE INDEX CONCURRENTLY และใส่ WHERE เงื่อนไขเดียวกัน",
        "ตรวจด้วย EXPLAIN ว่า query ใช้ index ตัวใหม่",
        "เทียบขนาด index เก่ากับใหม่ แล้วค่อยลบตัวเก่าที่ไม่จำเป็น",
      ],
      code: {
        label: "partial index ที่ครอบคลุมเฉพาะแถวที่ยังไม่ถูกลบ",
        lang: 'sql',
        text: `CREATE INDEX CONCURRENTLY idx_orders_customer_live
  ON orders (customer_id)
  WHERE deleted_at IS NULL;

-- query ต้องมีเงื่อนไขเดียวกัน planner ถึงเลือกใช้ index นี้
SELECT * FROM orders
WHERE customer_id = 42 AND deleted_at IS NULL;`,
      },
      takeaway: "ถ้า query ส่วนใหญ่แตะแค่แถวกลุ่มเล็ก ๆ ที่ระบุได้ชัด ให้ใช้ partial index แทน index ที่ครอบคลุมทุกแถว",
    },
    en: {
      title: "Partial indexes made our soft-delete queries 40x faster",
      excerpt: "We were indexing 2M soft-deleted rows that the app never queries. A partial index with WHERE deleted_at IS NULL covers only live rows, so it is smaller and fits in memory, and it cut query time from 800ms to 20ms. Any table where most queries hit a small, well-defined slice of rows is a good candidate.",
      problem: [
        "On one of our projects, a main table used soft-delete: we set deleted_at instead of removing the row. Over time more than 2M soft-deleted rows piled up, while every query in the app cared only about the live ones.",
        "The regular index on this table covered every row, including the ones nobody ever asked for, and a query that should have been fast took around 800ms.",
      ],
      why: [
        "A regular index stores an entry for every row in the table, so soft-deleted rows make it larger without adding any value. A bigger index is harder to keep in memory, which means more reads from disk.",
        "A partial index stores only the rows that match the WHERE condition given when it was created, here deleted_at IS NULL. It ends up much smaller and has a good chance of fitting entirely in memory. The catch is that the planner only uses it when the query's WHERE clause guarantees the index condition holds, so the query must include deleted_at IS NULL as well.",
      ],
      fix: [
        "We created the partial index with CREATE INDEX CONCURRENTLY so writes on the busy table were not blocked, then confirmed with EXPLAIN that the query used the new index. In our case the query time dropped from 800ms to 20ms, about 40x faster. That number depends on our data and workload and is not a guarantee for every table.",
        "The technique suits tables where most queries touch a small slice of rows that you can describe precisely, such as rows that are not deleted or rows with an active status. When a row stops matching the condition, it also drops out of the index.",
      ],
      steps: [
        "Find the condition your main queries always filter on, such as deleted_at IS NULL.",
        "Create a partial index with CREATE INDEX CONCURRENTLY and the same WHERE condition.",
        "Check with EXPLAIN that the query uses the new index.",
        "Compare the old and new index sizes, then drop the old one if it is no longer needed.",
      ],
      code: {
        label: "A partial index that covers only rows that are not deleted",
        lang: 'sql',
        text: `CREATE INDEX CONCURRENTLY idx_orders_customer_live
  ON orders (customer_id)
  WHERE deleted_at IS NULL;

-- the query must repeat the condition for the planner to use the index
SELECT * FROM orders
WHERE customer_id = 42 AND deleted_at IS NULL;`,
      },
      takeaway: "When most queries touch a small, well-defined slice of a table, index just that slice with a partial index.",
    },
  },

  // 9
  {
    slug: 'postgres-explain-analyze-cold-cache',
    topic: 'PostgreSQL',
    date: '2025-06-30',
    th: {
      title: "EXPLAIN ANALYZE ให้ตัวเลขไม่ตรงเรื่อง buffer cache ในการรันครั้งแรก",
      excerpt: "การรันครั้งแรกต้องดึงข้อมูลที่ยังไม่อยู่ใน cache จาก disk ตัวเลขเลยดูช้ากว่าที่ผู้ใช้จริงจะพบ ให้รันสองรอบเสมอแล้วดูรอบที่สอง และใส่ BUFFERS เพื่อดูว่าอ่านจาก cache เท่าไร การเอาผลรันแรกมาเทียบกับรันหลังเป็นสาเหตุที่ทำให้คนประเมินผิดว่า index ช่วยหรือไม่",
      problem: [
        "เราสร้าง index ใหม่แล้วรัน EXPLAIN ANALYZE เทียบกับ query เดิม ผลรอบแรกของ query ที่ใช้ index ใหม่ดูช้าจนน่าตกใจ เกือบสรุปไปแล้วว่า index นี้ไม่ช่วย",
        "พอรันซ้ำอีกรอบ เวลากลับลดลงมาก ทั้งที่ไม่ได้เปลี่ยนอะไรเลย",
      ],
      why: [
        "EXPLAIN ANALYZE ไม่ได้โกหก แต่มันวัดตามสภาพ cache ของรอบนั้น ถ้าข้อมูลหรือ index ที่ต้องใช้ยังไม่อยู่ใน shared buffers ของ PostgreSQL Postgres จะต้องขออ่านจากระบบปฏิบัติการ ซึ่งอาจต้องไปอ่านจาก disk จริง การรันรอบแรกจึงรวมต้นทุนการโหลดข้อมูลเข้ามาด้วย",
        "รอบถัดไปหน้าเหล่านั้นอยู่ใน cache แล้ว เวลาจึงสั้นลงมาก ปัญหาคือถ้าเราเอาผลรอบแรก (cold) ของ query หนึ่งไปเทียบกับผลรอบหลัง (warm) ของอีก query หนึ่ง เราจะสรุปผิดได้ว่า index ช่วยหรือไม่ช่วย ทั้งที่ความต่างมาจาก cache ไม่ใช่แผนการทำงาน",
      ],
      fix: [
        "เราเปลี่ยนมารันสองรอบเสมอ แล้วอ่านผลรอบที่สอง และใส่ BUFFERS ด้วย เพื่อดู shared hit ซึ่งคือหน้าที่อ่านจาก shared buffers และ read ซึ่งคือหน้าที่ต้องขอจากข้างนอก ถ้ารอบแรกมี read มากแต่รอบสองเป็น hit เกือบทั้งหมด แปลว่าความต่างของเวลามาจาก cache",
        "ควรจำไว้ด้วยว่าค่า read อาจมาจาก page cache ของระบบปฏิบัติการ ไม่ได้แปลว่าไปถึง disk เสมอไป และถ้า production จริงมักพบข้อมูลที่ไม่ได้อยู่ใน cache ผลรอบ warm ก็อาจดูดีเกินจริง จึงควรดูทั้งสองกรณี",
      ],
      steps: [
        "รัน EXPLAIN (ANALYZE, BUFFERS) รอบแรกแล้วจดผลไว้",
        "รันซ้ำอีกรอบแล้วดูรอบที่สอง",
        "เทียบ shared hit กับ read ในแต่ละรอบ",
        "เวลาเทียบก่อนและหลังสร้าง index ให้เทียบรอบ warm กับรอบ warm",
      ],
      code: {
        label: "ใส่ BUFFERS เพื่อดูว่าอ่านจาก cache เท่าไร",
        lang: 'sql',
        text: `EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM orders
WHERE customer_id = 42 AND deleted_at IS NULL;

-- รันซ้ำ แล้วเทียบ "shared hit" กับ "read" ของแต่ละรอบ`,
      },
      takeaway: "รัน EXPLAIN ANALYZE สองรอบพร้อม BUFFERS และเทียบรอบ warm กับ warm เสมอ",
    },
    en: {
      title: "EXPLAIN ANALYZE lies about buffer cache on the first run",
      excerpt: "The first execution pulls cold pages from disk, so the timing looks worse than what users will normally see. Always run it twice and read the second pass, and add BUFFERS to see how much came from cache. Comparing a cold run with a warm one is a common way to misjudge whether an index helped.",
      problem: [
        "We created a new index and ran EXPLAIN ANALYZE to compare it with the old query. The first run of the query using the new index looked alarmingly slow, and we nearly concluded that the index did not help.",
        "Running it again, the time dropped sharply even though nothing had changed.",
      ],
      why: [
        "EXPLAIN ANALYZE is not wrong, but it measures according to the cache state of that particular run. If the data or index pages are not yet in PostgreSQL's shared buffers, Postgres has to request them from the operating system, which may mean a real disk read. The first run therefore includes the cost of loading the data.",
        "On the next run those pages are already cached, so the time shrinks a lot. The trap is comparing the first (cold) run of one query against a later (warm) run of another, which can make an index look helpful or useless when the difference comes from caching, not from the plan.",
      ],
      fix: [
        "We now always run the query twice, read the second result, and add BUFFERS. In the output, shared hit counts pages found in shared buffers and read counts pages that had to be requested from outside. If the first run shows many reads and the second is almost all hits, the time difference is cache.",
        "Keep in mind that a read may be served from the operating system's page cache rather than the disk itself, and that if production often meets uncached data, the warm number can look better than reality, so it is worth looking at both cases.",
      ],
      steps: [
        "Run EXPLAIN (ANALYZE, BUFFERS) once and note the result.",
        "Run it again and read the second result.",
        "Compare shared hit with read in each run.",
        "When comparing before and after an index, compare warm runs with warm runs.",
      ],
      code: {
        label: "Add BUFFERS to see how much came from cache",
        lang: 'sql',
        text: `EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM orders
WHERE customer_id = 42 AND deleted_at IS NULL;

-- run it twice, then compare "shared hit" and "read" in each run`,
      },
      takeaway: "Run EXPLAIN ANALYZE twice with BUFFERS, and always compare warm runs with warm runs.",
    },
  },
]
