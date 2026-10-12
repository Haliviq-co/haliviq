import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  kubernetes: { hex: '#326CE5', path: 'M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z' },
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

  const badge    = isEN ? 'Engineering / Application Modernization'  : 'วิศวกรรม / ปรับปรุงระบบเดิม (Application Modernization)'
  const title    = isEN ? 'Modernize Legacy Systems'  : 'ปรับปรุงระบบเดิม'
  const subtitle = isEN ? 'Without Stopping the Business'    : 'โดยไม่หยุดธุรกิจ'
  const heroDesc = isEN ? 'Many Thai companies run on software that was written ten or fifteen years ago and still holds the business together. It works, but every change is slow, nobody wants to touch it, and new channels such as a mobile app or a partner integration are hard to add. Haliviq modernizes these systems one piece at a time: we put an API layer in front, move individual functions to newer services, and keep the old system running until each replacement has proven itself. Your staff and customers keep working throughout.'  : 'บริษัทไทยหลายแห่งยังใช้ซอฟต์แวร์ที่เขียนไว้เมื่อสิบถึงสิบห้าปีก่อน และมันยังแบกธุรกิจอยู่ ระบบยังใช้งานได้ แต่แก้อะไรทีก็ช้า ไม่มีใครอยากแตะ และการเพิ่มช่องทางใหม่อย่างแอปมือถือหรือการเชื่อมกับพาร์ทเนอร์ก็ทำได้ยาก Haliviq ปรับปรุงระบบแบบนี้ทีละส่วน เราวางชั้น API ไว้ด้านหน้า ย้ายฟังก์ชันทีละอย่างไปอยู่บนบริการใหม่ และให้ระบบเดิมทำงานต่อจนกว่าส่วนใหม่จะพิสูจน์ตัวเองแล้ว พนักงานและลูกค้าของคุณทำงานต่อได้ตลอด'
  const whyTitle = isEN ? 'Why old systems slow you down without anyone noticing'    : 'ทำไมระบบเก่าถึงค่อยๆ ฉุดธุรกิจโดยไม่มีใครรู้ตัว'
  const whyDesc  = isEN ? 'A feature that takes weeks instead of days, an outage caused by one fragile dependency, an engineer who avoids "that module" because nobody remembers how it works: these are the visible signs of legacy debt. The cost grows quietly because each workaround makes the next change harder. Modernizing in small, tested steps stops that growth without the risk of a big-bang rewrite.'  : 'ฟีเจอร์ที่ต้องใช้เป็นสัปดาห์แทนที่จะเป็นวัน ระบบล่มเพราะส่วนที่เปราะบางจุดเดียว วิศวกรที่เลี่ยง "โมดูลนั้น" เพราะไม่มีใครจำได้แล้วว่ามันทำงานยังไง ทั้งหมดนี้คือสัญญาณของหนี้ทางเทคนิคที่สะสมมานาน ต้นทุนเพิ่มขึ้นแบบเงียบๆ เพราะทุกการแก้ขัดทำให้การแก้ครั้งต่อไปยากขึ้น การปรับปรุงเป็นขั้นเล็กๆ ที่ทดสอบแล้วช่วยหยุดสิ่งนี้ได้ โดยไม่ต้องเสี่ยงกับการเขียนใหม่ทั้งระบบรวดเดียว'
  const ctaTitle = isEN ? 'Ready to modernize without the risk?'    : 'พร้อมปรับปรุงระบบโดยไม่เสี่ยงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free legacy system assessment. We will tell you plainly which parts to rewrite, which to wrap in an API, and which to leave alone.'   : 'เริ่มด้วยการประเมินระบบเดิมฟรี เราจะบอกตรงๆ ว่าส่วนไหนควรเขียนใหม่ ส่วนไหนควรครอบด้วย API และส่วนไหนปล่อยไว้ตามเดิมได้'
  const overviewText = isEN
    ? "We modernize business-critical applications without the long, risky rewrite. The work starts with an assessment of your code, data, and how the system is really used, so we can sort each part into rewrite, wrap, replace, or leave alone. From there we use the strangler-fig approach: new services take over one capability at a time behind an API gateway while the old system keeps serving users. Depending on what we find, that can mean splitting a monolith along its natural seams, adding APIs and event-driven messaging, moving workloads into containers, and migrating data with checks that prove the old and new records match before each cutover. Every step can be rolled back. We also write tests around the existing behaviour first, because a system with no tests turns every change into a gamble. The result is a platform your team can understand, change quickly, and run at lower cost, reached without a six-month period when the business waits for the new version."
    : 'เราปรับปรุงแอปพลิเคชันที่ธุรกิจพึ่งพาโดยไม่ต้องเขียนใหม่ยาวๆ ที่เสี่ยงสูง งานเริ่มจากประเมินโค้ด ข้อมูล และวิธีที่ระบบถูกใช้งานจริง เพื่อจัดแต่ละส่วนเป็น เขียนใหม่ ครอบด้วย API เปลี่ยนตัว หรือปล่อยไว้ จากนั้นเราใช้แนวทาง Strangler-fig คือให้บริการใหม่เข้ามารับหน้าที่ทีละอย่างผ่าน API Gateway ขณะที่ระบบเดิมยังให้บริการผู้ใช้ต่อไป ขึ้นอยู่กับสิ่งที่เจอ อาจต้องแตก Monolith ตามรอยต่อตามธรรมชาติ เพิ่ม API และการส่งข้อความแบบ Event-driven ย้ายงานเข้า Container และย้ายข้อมูลโดยตรวจให้แน่ใจก่อนสลับระบบทุกครั้งว่าข้อมูลเก่ากับใหม่ตรงกัน ทุกขั้นย้อนกลับได้ เราเขียน Test ครอบพฤติกรรมของระบบเดิมไว้ก่อนด้วย เพราะระบบที่ไม่มี Test ทำให้ทุกการแก้เป็นการเสี่ยงโชค ผลที่ได้คือแพลตฟอร์มที่ทีมของคุณเข้าใจ แก้ได้เร็ว และดูแลได้ถูกลง โดยไม่ต้องมีช่วงหลายเดือนที่ธุรกิจต้องรอระบบใหม่'

  const heroBullets = isEN ? [
      'Step-by-step modernization with the strangler-fig pattern, so the old system keeps running',
      'Monoliths split into services at their natural seams, behind an API gateway',
      'Workloads moved into containers and onto Kubernetes where that makes sense',
      'Data migrations that compare old and new records before every cutover',
      'Tests written around current behaviour before anything is changed',
      'A rollback path for every step, and no rewrite blackout',
    ] : [
      'ปรับปรุงทีละขั้นด้วย Strangler-fig Pattern ระบบเดิมจึงทำงานต่อได้',
      'แตก Monolith เป็นบริการย่อยตามรอยต่อตามธรรมชาติ ผ่าน API Gateway',
      'ย้ายงานเข้า Container และขึ้น Kubernetes เมื่อเหมาะสม',
      'ย้ายข้อมูลโดยเทียบข้อมูลเก่ากับใหม่ก่อนสลับระบบทุกครั้ง',
      'เขียน Test ครอบพฤติกรรมปัจจุบันก่อนเริ่มแก้อะไร',
      'ทุกขั้นมีทางย้อนกลับ และไม่ต้องหยุดระบบรอเขียนใหม่',
    ]
  const whyPoints   = isEN ? [
      'Legacy systems with no tests make every change a gamble, so modernization starts by locking in current behaviour.',
      'The strangler pattern lets new services take over one capability at a time, with a rollback always ready.',
      'A full rewrite is rarely the right answer. It is usually slower, riskier, and more expensive than changing the system in steps.',
      'An API-first design opens new channels such as mobile, partners, and AI without touching the legacy core.',
      'Total cost of ownership falls once hosting, licensing, and maintenance move to modern setups.',
    ] : [
      'ระบบเดิมที่ไม่มี Test ทำให้ทุกการแก้เป็นการเสี่ยงโชค เราจึงเริ่มจากล็อกพฤติกรรมปัจจุบันของระบบไว้ก่อน',
      'Strangler Pattern ให้บริการใหม่รับหน้าที่ทีละอย่าง และมีทางย้อนกลับพร้อมเสมอ',
      'การเขียนใหม่ทั้งหมดมักไม่ใช่คำตอบ เพราะมักช้ากว่า เสี่ยงกว่า และแพงกว่าการเปลี่ยนทีละส่วน',
      'การออกแบบแบบ API-first เปิดช่องทางใหม่อย่างแอปมือถือ พาร์ทเนอร์ และ AI ได้ โดยไม่ต้องแตะแกนหลักของระบบเดิม',
      'ต้นทุนรวมในการเป็นเจ้าของระบบลดลงเมื่อค่าโฮสติ้ง ค่าไลเซนส์ และค่าดูแลรักษาย้ายมาใช้แนวทางสมัยใหม่',
    ]
  const outcomes    = isEN ? [
      {stat: '5x', label: 'Faster Feature Delivery', desc: 'After decomposition and API layer'},
      {stat: '0', label: 'Business Downtime', desc: 'Across all modernization cutovers'},
      {stat: '45%', label: 'Lower TCO', desc: 'Hosting, licensing, and maintenance combined'},
      {stat: '100%', label: 'Data Parity Verified', desc: 'Before every cutover'}
    ] : [
      {stat: '5x', label: 'ส่งฟีเจอร์ได้เร็วขึ้น', desc: 'หลังแตกเป็นบริการย่อยและเพิ่มชั้น API'},
      {stat: '0', label: 'ธุรกิจหยุดชะงัก', desc: 'ในทุกครั้งที่สลับระบบ'},
      {stat: '45%', label: 'ต้นทุนรวม (TCO) ลดลง', desc: 'รวมค่าโฮสติ้ง ค่าไลเซนส์ และค่าดูแลรักษา'},
      {stat: '100%', label: 'ตรวจความตรงกันของข้อมูล', desc: 'ก่อนสลับระบบทุกครั้ง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-search', title: 'Legacy Assessment', desc: 'We read the code, inspect the data, and talk to the people who use the system, then give each part a clear verdict: rewrite, wrap, replace, or keep. You get a plan with reasons, not a default recommendation to rebuild.'},
      {icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'We tidy the structure and add tests a section at a time, while the team keeps releasing. Each change is small enough to review and to undo.'},
      {icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Containers, microservices, serverless, and event-driven designs are used only where they solve a real problem such as scaling or release speed. Where a simpler setup works, we keep it simple.'},
      {icon: 'ti-api', title: 'API Modernization', desc: 'A stable API layer in front of the old system lets a mobile app, a partner, or an AI tool use your data without touching the core. It is often the fastest first step.'},
      {icon: 'ti-database-export', title: 'Data Migration', desc: 'We move data in stages, compare old and new records before each cutover, and keep a way back. Mismatches are fixed before users ever see them.'},
      {icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'We split a monolith where the business already draws a line, such as orders, billing, or inventory, instead of cutting it into arbitrary pieces that then have to talk constantly.'}
    ] : [
      {icon: 'ti-search', title: 'Legacy Assessment', desc: 'เราอ่านโค้ด ดูข้อมูล และคุยกับคนที่ใช้ระบบ แล้วให้ผลชัดเจนกับแต่ละส่วนว่าควรเขียนใหม่ ครอบด้วย API เปลี่ยนตัว หรือคงไว้ คุณจะได้แผนพร้อมเหตุผล ไม่ใช่คำแนะนำให้สร้างใหม่แบบอัตโนมัติ'},
      {icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'เราจัดโครงสร้างและเพิ่ม Test ทีละส่วน ขณะที่ทีมยังปล่อยงานต่อได้ แต่ละการเปลี่ยนแปลงเล็กพอที่จะตรวจและย้อนกลับได้'},
      {icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Container, Microservices, Serverless และ Event-driven Design จะใช้เฉพาะเมื่อแก้ปัญหาจริง เช่น ขยายระบบหรือปล่อยงานให้เร็วขึ้น ถ้าแบบง่ายกว่าก็พอ เราก็เลือกแบบง่าย'},
      {icon: 'ti-api', title: 'API Modernization', desc: 'ชั้น API ที่มั่นคงหน้าระบบเดิม ช่วยให้แอปมือถือ พาร์ทเนอร์ หรือเครื่องมือ AI ใช้ข้อมูลของคุณได้โดยไม่ต้องแตะแกนหลัก มักเป็นก้าวแรกที่เร็วที่สุด'},
      {icon: 'ti-database-export', title: 'Data Migration', desc: 'เราย้ายข้อมูลเป็นช่วง เทียบข้อมูลเก่ากับใหม่ก่อนสลับทุกครั้ง และเก็บทางย้อนกลับไว้ ถ้าข้อมูลไม่ตรงก็แก้ก่อนที่ผู้ใช้จะเห็น'},
      {icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'เราแตก Monolith ตรงที่ธุรกิจแบ่งเส้นอยู่แล้ว เช่น ออเดอร์ การเรียกเก็บเงิน หรือสต็อก ไม่ใช่หั่นเป็นชิ้นตามใจแล้วต้องคุยกันตลอดเวลา'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Assess', desc: 'We examine the code, data, and how the system behaves in daily use, including the parts nobody documented.'},
      {no: '02', title: 'Strategy', desc: 'We decide, part by part, whether to rewrite, refactor, wrap, or replace, and agree an order that protects revenue.'},
      {no: '03', title: 'Modernize', desc: 'We restructure in small steps, with tests around the old behaviour so changes can be checked straight away.'},
      {no: '04', title: 'Migrate', desc: 'We move platforms and data in stages, with a rollback ready at each cutover.'},
      {no: '05', title: 'Verify', desc: 'We confirm that data matches, performance holds up, and nothing that worked before has stopped working.'},
      {no: '06', title: 'Optimize', desc: 'We tune hosting cost, scaling, and day-to-day operation so the new setup is cheaper to run than the old one.'}
    ] : [
      {no: '01', title: 'Assess', desc: 'ตรวจโค้ด ข้อมูล และพฤติกรรมของระบบในการใช้งานประจำวัน รวมถึงส่วนที่ไม่มีใครเขียนเอกสารไว้'},
      {no: '02', title: 'Strategy', desc: 'ตัดสินใจทีละส่วนว่าจะเขียนใหม่ ปรับโครงสร้าง ครอบด้วย API หรือเปลี่ยนตัว และตกลงลำดับที่ไม่กระทบรายได้'},
      {no: '03', title: 'Modernize', desc: 'ปรับโครงสร้างทีละขั้นเล็กๆ โดยมี Test ครอบพฤติกรรมเดิม ตรวจผลการเปลี่ยนแปลงได้ทันที'},
      {no: '04', title: 'Migrate', desc: 'ย้ายแพลตฟอร์มและข้อมูลเป็นช่วง และเตรียมทางย้อนกลับไว้ทุกครั้งที่สลับ'},
      {no: '05', title: 'Verify', desc: 'ยืนยันว่าข้อมูลตรงกัน ประสิทธิภาพยังดี และสิ่งที่เคยใช้ได้ยังใช้ได้'},
      {no: '06', title: 'Optimize', desc: 'ปรับต้นทุนโฮสติ้ง การขยายระบบ และการดูแลประจำวัน ให้ระบบใหม่ถูกกว่าระบบเดิมในการดูแล'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Monolith to Microservices, Zero Downtime', desc: 'We moved core banking over 8 months using the strangler-fig pattern, one capability at a time behind a gateway. Customers and branch staff never saw an outage, and each finished piece shortened the release cycle.', result: 'Feature delivery: 5x faster'},
      {tag: 'Retail · Nationwide', title: 'Legacy ERP Wrapped with Modern APIs', desc: 'New mobile and partner channels went live on top of a modern API layer, and the core ERP, which the finance team relied on every day, was left untouched.', result: '3 new channels in 4 months'},
      {tag: 'Logistics · Bangkok', title: '15-Year-Old System Moved to Kubernetes', desc: 'The system was containerized and migrated in stages, with data parity checked for every part before cutover so dispatch and billing kept running.', result: 'Infra cost down 45%'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'จาก Monolith สู่ Microservices โดยไม่มีระบบหยุด', desc: 'เราย้ายระบบธนาคารหลักด้วย Strangler-fig ตลอด 8 เดือน ทีละความสามารถ ผ่านเกตเวย์ ลูกค้าและพนักงานสาขาไม่เจอระบบล่มเลย และทุกส่วนที่เสร็จทำให้รอบการปล่อยงานสั้นลง', result: 'ส่งฟีเจอร์เร็วขึ้น 5 เท่า'},
      {tag: 'Retail · ทั่วประเทศ', title: 'ครอบ ERP เดิมด้วย API สมัยใหม่', desc: 'ช่องทางมือถือและพาร์ทเนอร์ใหม่เปิดใช้งานบนชั้น API สมัยใหม่ โดยไม่ต้องแตะ ERP หลักเดิมที่ทีมการเงินใช้ทุกวัน', result: 'เปิด 3 ช่องทางใหม่ใน 4 เดือน'},
      {tag: 'Logistics · กรุงเทพฯ', title: 'ย้ายระบบอายุ 15 ปีขึ้น Kubernetes', desc: 'ย้ายเข้า Container และสลับระบบทีละช่วง โดยตรวจความตรงกันของข้อมูลทุกส่วนก่อนสลับ งานจัดส่งและการเรียกเก็บเงินจึงเดินต่อได้', result: 'ต้นทุนโครงสร้างพื้นฐานลดลง 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'How do you modernize without stopping the business?', a: 'In steps, using the strangler pattern. New services take over one capability at a time while the legacy system keeps running, and traffic moves across only once the new piece has proven itself.'},
      {q: 'What does the legacy system become?', a: 'A maintainable, API-first, cloud-ready platform. Typically that means services in containers on Kubernetes, with event-driven messaging where it helps.'},
      {q: 'Our system has no documentation. Can you still work with it?', a: 'Yes, it is a common starting point. We map what the system actually does from its code, data, and traffic, and write tests around current behaviour before changing anything.'},
      {q: 'When is a full rewrite the right choice?', a: 'Rarely. It makes sense only when changing the system in steps would cost more than rebuilding it. We tell you honestly after the assessment.'},
      {q: 'Can you work with the original developers or an outside vendor?', a: 'Yes. If the original developers or the vendor are still around, we involve them early to learn the reasons behind odd decisions in the code. If they are gone, we rebuild that knowledge from the system itself.'},
      {q: 'Will we need to retrain our users?', a: 'Not at first. Because the old screens and workflows keep running while pieces are replaced behind them, users see little change. When a screen does change, we release it to a small group first and gather feedback.'},
      {q: 'What do we need to give you to start the assessment?', a: 'Read access to the source code and a copy of the database schema, a short walkthrough from someone who knows the system, and a list of what hurts most today. Test or staging access helps if you have it.'}
    ] : [
      {q: 'ปรับปรุงระบบโดยไม่หยุดธุรกิจได้อย่างไร?', a: 'ทำทีละขั้นด้วย Strangler Pattern บริการใหม่รับหน้าที่ทีละอย่างขณะที่ระบบเดิมยังทำงานต่อ และย้าย Traffic ไปเมื่อส่วนใหม่พิสูจน์ตัวเองแล้วเท่านั้น'},
      {q: 'ระบบเดิมจะกลายเป็นอะไร?', a: 'แพลตฟอร์มที่ดูแลง่าย เป็น API-first และพร้อมใช้บน Cloud โดยทั่วไปคือบริการใน Container บน Kubernetes และใช้ Event-driven เมื่อช่วยได้'},
      {q: 'ระบบเราไม่มีเอกสารเลย ทำได้ไหม?', a: 'ได้ เจอบ่อยมาก เราเริ่มจากทำแผนที่สิ่งที่ระบบทำจริงจากโค้ด ข้อมูล และ Traffic แล้วเขียน Test ครอบพฤติกรรมปัจจุบันก่อนแก้อะไร'},
      {q: 'เมื่อไหร่ควรเขียนใหม่ทั้งหมด?', a: 'น้อยครั้งมาก เฉพาะเมื่อการเปลี่ยนทีละส่วนมีต้นทุนสูงกว่าการสร้างใหม่ เราจะบอกตรงๆ หลังประเมินระบบ'},
      {q: 'ทำงานร่วมกับทีมที่เขียนระบบเดิมหรือเวนเดอร์ภายนอกได้ไหม?', a: 'ได้ ถ้าทีมที่เขียนเดิมหรือเวนเดอร์ยังอยู่ เราชวนมาตั้งแต่ต้นเพื่อเข้าใจเหตุผลของโค้ดแปลกๆ ถ้าไม่อยู่แล้ว เราสร้างความรู้ส่วนนั้นขึ้นใหม่จากตัวระบบเอง'},
      {q: 'ต้องอบรมผู้ใช้ใหม่ไหม?', a: 'ช่วงแรกไม่ต้อง เพราะหน้าจอและขั้นตอนเดิมยังทำงานต่อขณะที่เปลี่ยนชิ้นส่วนอยู่ข้างหลัง ผู้ใช้เห็นความเปลี่ยนแปลงน้อย ถ้าหน้าไหนเปลี่ยนจริง เราปล่อยให้กลุ่มเล็กลองก่อนและเก็บฟีดแบ็ก'},
      {q: 'ต้องเตรียมอะไรให้ก่อนเริ่มประเมิน?', a: 'สิทธิ์อ่านซอร์สโค้ดและสำเนา Schema ของฐานข้อมูล คนที่รู้จักระบบมาอธิบายสั้นๆ และรายการสิ่งที่เจ็บที่สุดตอนนี้ ถ้ามีสภาพแวดล้อมทดสอบหรือ Staging ให้เข้าได้ก็ช่วยมาก'}
    ]
  const related     = isEN ? [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'}
    ] : [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'}
    ]

  const modLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>strangler --route orders-v2</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '12% traffic on new service' : 'Traffic 12% เข้าบริการใหม่'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>diff --parity legacy vs new</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '0 discrepancies found' : 'ไม่พบความแตกต่าง'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'cutover --module orders' : 'cutover --module orders'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Legacy module retired safely' : 'ปิดโมดูลเดิมได้อย่างปลอดภัย'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>migrate.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {modLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Migration Progress' : 'ความคืบหน้าการย้ายระบบ'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '88%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '62%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '75%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'Zero downtime maintained' : 'ไม่มีระบบหยุดตลอดโปรเจกต์'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-search', title: 'Legacy Assessment', desc: 'We review the code, the data, and how people really use the system, then give each part a verdict: rewrite, wrap, replace, or keep. You receive a written plan with reasons and an order of work that protects revenue.' },
    { icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'Structure is cleaned up and tests are added one section at a time while your team keeps shipping. Each change is small enough to review and to roll back.' },
    { icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Containers, microservices, serverless, and event-driven designs are used where they fix a real problem, such as slow releases or scaling limits. Where a simpler design is enough, we keep it.' },
    { icon: 'ti-api', title: 'API Modernization', desc: 'A stable API layer in front of the old system lets a mobile app, a partner, or an AI tool use your data without a rewrite. It is often the quickest first step and starts paying back early.' },
    { icon: 'ti-database-export', title: 'Data Migration', desc: 'Data moves in stages, with old and new records compared before each cutover and a way back kept open, so mismatches are fixed before users ever see them.' },
    { icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'A monolith is split where the business already draws a line, such as orders, billing or inventory, instead of into arbitrary pieces that then talk to each other constantly.' },
  ] : [
    { icon: 'ti-search', title: 'Legacy Assessment', desc: 'เราตรวจโค้ด ข้อมูล และวิธีที่คนใช้ระบบจริง แล้วให้ผลกับแต่ละส่วนว่าควรเขียนใหม่ ครอบด้วย API เปลี่ยนตัว หรือคงไว้ คุณจะได้แผนเป็นลายลักษณ์อักษรพร้อมเหตุผลและลำดับงานที่ไม่กระทบรายได้' },
    { icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'จัดโครงสร้างและเพิ่ม Test ทีละส่วน ขณะที่ทีมของคุณยังปล่อยงานต่อได้ แต่ละการเปลี่ยนแปลงเล็กพอที่จะตรวจและย้อนกลับได้' },
    { icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'ใช้ Container, Microservices, Serverless และ Event-driven Design เมื่อช่วยแก้ปัญหาจริง เช่น ปล่อยงานช้าหรือขยายระบบไม่ไหว ถ้าแบบที่ง่ายกว่าพอ เราก็ใช้แบบนั้น' },
    { icon: 'ti-api', title: 'API Modernization', desc: 'ชั้น API ที่มั่นคงหน้าระบบเดิมช่วยให้แอปมือถือ พาร์ทเนอร์ หรือเครื่องมือ AI ใช้ข้อมูลของคุณได้โดยไม่ต้องเขียนใหม่ มักเป็นก้าวแรกที่เร็วที่สุดและเริ่มคืนทุนได้เร็ว' },
    { icon: 'ti-database-export', title: 'Data Migration', desc: 'ย้ายข้อมูลเป็นช่วง เทียบข้อมูลเก่ากับใหม่ก่อนสลับทุกครั้ง และเปิดทางย้อนกลับไว้ ถ้าข้อมูลไม่ตรงก็แก้ก่อนที่ผู้ใช้จะเห็น' },
    { icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'แตก Monolith ตรงที่ธุรกิจแบ่งเส้นอยู่แล้ว เช่น ออเดอร์ การเรียกเก็บเงิน หรือสต็อก ไม่ใช่หั่นเป็นชิ้นตามใจแล้วต้องคุยกันตลอดเวลา' },
  ]

  const techStack = [
    { label: 'Microservices', icon: 'ti-topology-star-3' },
    { label: 'Containers', icon: 'ti-box' },
    { label: 'Kubernetes', svg: 'kubernetes' },
    { label: 'API Gateway', icon: 'ti-api' },
    { label: 'Event-Driven Architecture', icon: 'ti-bolt' },
    { label: 'Serverless', icon: 'ti-cloud-bolt' },
    { label: 'CQRS', icon: 'ti-arrows-split' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assess', desc: 'Code, data, and how the system behaves in daily use, including undocumented corners.' },
    { no: '02', title: 'Strategy', desc: 'A verdict for each part (rewrite, refactor, wrap, or replace) and an order that protects revenue.' },
    { no: '03', title: 'Modernize', desc: 'Small structural changes, with tests around the old behaviour so each one can be checked.' },
    { no: '04', title: 'Migrate', desc: 'Platform and data moved in stages, with a rollback ready at every cutover.' },
    { no: '05', title: 'Verify', desc: 'Data matches, performance holds, and nothing that used to work has broken.' },
    { no: '06', title: 'Optimize', desc: 'Hosting cost, scaling, and daily operation tuned so the new setup is cheaper to run.' },
  ] : [
    { no: '01', title: 'Assess', desc: 'ตรวจโค้ด ข้อมูล และพฤติกรรมของระบบในการใช้งานประจำวัน รวมถึงส่วนที่ไม่มีเอกสาร' },
    { no: '02', title: 'Strategy', desc: 'ให้ผลทีละส่วนว่าจะเขียนใหม่ ปรับโครงสร้าง ครอบด้วย API หรือเปลี่ยนตัว และจัดลำดับที่ไม่กระทบรายได้' },
    { no: '03', title: 'Modernize', desc: 'ปรับโครงสร้างทีละขั้นเล็กๆ มี Test ครอบพฤติกรรมเดิม จึงตรวจได้ทุกขั้น' },
    { no: '04', title: 'Migrate', desc: 'ย้ายแพลตฟอร์มและข้อมูลเป็นช่วง พร้อมทางย้อนกลับทุกครั้งที่สลับ' },
    { no: '05', title: 'Verify', desc: 'ข้อมูลตรงกัน ประสิทธิภาพยังดี และสิ่งที่เคยใช้ได้ไม่พัง' },
    { no: '06', title: 'Optimize', desc: 'ปรับต้นทุนโฮสติ้ง การขยายระบบ และการดูแลประจำวัน ให้ระบบใหม่ดูแลถูกกว่า' },
  ]

  const darkFaqs = isEN ? [
    { q: 'How do you modernize legacy applications without stopping the business?', a: 'In small steps, using the strangler pattern. New services take over one capability at a time behind an API gateway while the legacy system keeps running, so nobody waits for a big rewrite to finish. Traffic moves across gradually, only after each new piece has proven itself in production, and every step has a way back if something looks wrong.' },
    { q: 'What does Haliviq modernize legacy systems into?', a: 'Into maintainable, API-first, cloud-ready platforms. Typically that means services in containers on Kubernetes, with event-driven messaging where it helps and serverless where it is simpler. The target design follows your team and your workloads, not fashion. We do not choose microservices by default just because the word sounds modern, and for some systems a well-structured monolith behind a good API is the right answer.' },
    { q: 'Our legacy system has no documentation. Can you still work with it?', a: 'Yes. It is a common starting point, not a blocker. We map what the system really does from its code, its data, and its production traffic, and we talk to the people who use it every day. Before changing anything we write tests that lock in current behaviour, so we find out immediately if a change breaks something.' },
    { q: 'When is a full rewrite the right choice instead of incremental modernization?', a: 'Rarely. It makes sense only when changing the system in steps would genuinely cost more than rebuilding it, for example when the underlying technology is no longer supported by anyone or the data model is wrong at its core. After the assessment we tell you which side of that line your system sits on. We do not sell a rewrite by default.' },
    { q: 'How long does a typical modernization project take?', a: 'A single-module strangler migration usually takes 2-4 months from assessment to full cutover. Decomposing a large monolith is phased over 6-18 months, and each phase delivers working software and measurable progress, so you see results along the way instead of waiting for one long project to end. The size of the system and how well it is understood are the biggest factors.' },
    { q: 'How much does application modernization cost?', a: 'It depends on the size and complexity of the legacy system and how much of it has to change. A focused assessment typically starts in the high five figures (THB). A phased program is quoted phase by phase after that assessment, so you can see the value of one stage before agreeing to the next. Hosting and licence savings from the new setup are part of the business case we put in front of you.' },
    { q: 'What happens to our team during the modernization process?', a: 'We work alongside your engineers, not in a separate corner. We pair with them on the parts of the system they know best and hand over knowledge as we go. By handover your team understands the new architecture because they helped build it, not because they were given a document at the end.' },
    { q: 'Who owns the code and infrastructure after the project?', a: 'You do. New services, infrastructure code, and documentation sit in your own repositories and cloud accounts from the first day. Because we work inside your environment, there is no separate system to move out of at handover.' },
  ] : [
    { q: 'ปรับปรุงระบบเดิมโดยไม่หยุดธุรกิจได้อย่างไร?', a: 'ทำเป็นขั้นเล็กๆ ด้วย Strangler Pattern บริการใหม่จะรับหน้าที่ทีละอย่างผ่าน API Gateway ขณะที่ระบบเดิมยังทำงานต่อ ไม่มีใครต้องรอให้เขียนใหม่เสร็จก่อน Traffic จะค่อยๆ ย้ายไปเมื่อแต่ละส่วนใหม่พิสูจน์ตัวเองบนระบบจริงแล้วเท่านั้น และทุกขั้นมีทางย้อนกลับถ้าเห็นว่าผิดปกติ' },
    { q: 'Haliviq ปรับระบบเดิมให้กลายเป็นอะไร?', a: 'ให้เป็นแพลตฟอร์มที่ดูแลง่าย เป็น API-first และพร้อมใช้บน Cloud โดยทั่วไปคือบริการใน Container บน Kubernetes ใช้ Event-driven เมื่อช่วยได้จริง และใช้ Serverless เมื่อง่ายกว่า สถาปัตยกรรมปลายทางดูตามทีมและงานของคุณ ไม่ใช่ตามกระแส เราไม่เลือก Microservices เป็นค่าเริ่มต้นเพราะคำนี้ฟังดูทันสมัย บางระบบ Monolith ที่โครงสร้างดีและมี API ที่ดีหน้าระบบก็เป็นคำตอบที่ถูกแล้ว' },
    { q: 'ระบบเดิมของเราไม่มีเอกสารเลย ยังทำงานด้วยได้ไหม?', a: 'ได้ เจอบ่อยมากและไม่ใช่อุปสรรค เราทำแผนที่สิ่งที่ระบบทำจริงจากโค้ด ข้อมูล และ Traffic บนระบบจริง และคุยกับคนที่ใช้ระบบทุกวัน ก่อนแก้อะไรเราเขียน Test ที่ล็อกพฤติกรรมปัจจุบันไว้ก่อน ถ้าการแก้ไขทำให้อะไรพัง เราจะรู้ทันที' },
    { q: 'เมื่อไหร่ควรเลือก Rewrite ทั้งหมดแทนการปรับปรุงทีละขั้น?', a: 'น้อยครั้งมาก ควรทำเฉพาะเมื่อการเปลี่ยนทีละส่วนมีต้นทุนสูงกว่าการสร้างใหม่จริงๆ เช่น เทคโนโลยีเดิมไม่มีใครรองรับแล้ว หรือโครงสร้างข้อมูลผิดมาตั้งแต่แก่น หลังประเมินระบบ เราจะบอกว่าระบบของคุณอยู่ฝั่งไหน เราไม่ขายการเขียนใหม่เป็นค่าเริ่มต้น' },
    { q: 'โปรเจกต์ Modernization ทั่วไปใช้เวลานานแค่ไหน?', a: 'ย้ายหนึ่งโมดูลด้วย Strangler Pattern มักใช้เวลา 2-4 เดือน ตั้งแต่ประเมินระบบจนสลับใช้ระบบใหม่เต็มรูปแบบ ส่วนการแตก Monolith ขนาดใหญ่จะแบ่งเป็นเฟสตลอด 6-18 เดือน แต่ละเฟสส่งมอบซอฟต์แวร์ที่ใช้งานได้จริงและความคืบหน้าที่วัดได้ คุณจึงเห็นผลระหว่างทาง ไม่ต้องรอโปรเจกต์ยาวๆ จบก่อน ปัจจัยหลักคือขนาดของระบบและระดับที่เราเข้าใจระบบนั้น' },
    { q: 'Application Modernization มีค่าใช้จ่ายเท่าไหร่?', a: 'ขึ้นอยู่กับขนาดและความซับซ้อนของระบบเดิม และปริมาณที่ต้องเปลี่ยน การประเมินระบบแบบเจาะจงมักเริ่มที่หลักหมื่นปลายๆ (บาท) ส่วนโปรแกรมที่แบ่งเป็นเฟสจะเสนอราคาเป็นรายเฟสหลังประเมิน คุณจะเห็นคุณค่าของเฟสหนึ่งก่อนตัดสินใจเฟสต่อไป และเราใส่ส่วนที่ประหยัดได้จากค่าโฮสติ้งและไลเซนส์ไว้ในแผนธุรกิจที่เสนอด้วย' },
    { q: 'ทีมของเราจะเป็นอย่างไรระหว่างทำ Modernization?', a: 'เราทำงานเคียงข้างทีมวิศวกรของคุณ ไม่ได้แยกไปทำเงียบๆ เราจับคู่ทำงานกับพวกเขาในส่วนที่เขารู้ดีที่สุด และถ่ายทอดความรู้ไปเรื่อยๆ พอส่งมอบ ทีมของคุณเข้าใจสถาปัตยกรรมใหม่เพราะช่วยสร้างมันมา ไม่ใช่เพราะได้เอกสารตอนท้าย' },
    { q: 'Code และ Infrastructure เป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณทั้งหมด บริการใหม่ โค้ดโครงสร้างพื้นฐาน และเอกสารอยู่ใน Repository และ Cloud Account ของคุณเองตั้งแต่วันแรก เราทำงานในสภาพแวดล้อมของคุณ ตอนส่งมอบจึงไม่มีระบบแยกที่ต้องย้ายออกจากเรา' },
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
            {isEN ? 'Patterns We Use' : 'แนวทางที่เราใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven architecture patterns we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'รูปแบบสถาปัตยกรรมที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from legacy to modern — adjusted per system, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากระบบเดิมสู่ระบบสมัยใหม่ ปรับตามแต่ละระบบ ไม่ใช่สูตรตายตัว'}
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
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--accent-2)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how we modernize systems.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราปรับปรุงระบบ'}
          </p>

          <div style={{ borderTop: '1px solid rgb(var(--fg) / 0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: 'var(--ink)', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgb(var(--fg) / 0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
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
      whyImg="/images/services/application-modernization/why1.jpg"
      whyImg2="/images/services/application-modernization/why2.jpg"
      featureImg="/images/services/application-modernization/feature.jpg"
      processImg="/images/services/application-modernization/process.jpg"
    />
  )
}
