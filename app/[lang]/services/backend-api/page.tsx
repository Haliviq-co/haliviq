import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'

  const badge    = isEN ? 'Engineering / Backend & API'  : 'Engineering / Backend & API'
  const title    = isEN ? 'Rock-Solid Backend'  : 'Backend ที่แข็งแกร่ง'
  const subtitle = isEN ? 'That Scales and Stays Secure'    : 'รองรับการขยายและปลอดภัย'
  const heroDesc = isEN ? 'Users judge a product by its screens, but whether it stays fast and correct depends on the server behind it. Haliviq designs and builds the APIs, databases and background jobs that sit under your web or mobile app, with authentication, logging and load testing planned in from the first sprint. The aim is a system your team can read, extend and hand to the next developer without fear.'  : 'ผู้ใช้ตัดสินแอปจากหน้าจอ แต่การที่แอปเร็วและข้อมูลถูกต้องตลอด ขึ้นอยู่กับเซิร์ฟเวอร์ที่อยู่หลังบ้าน Haliviq ออกแบบและสร้าง API ฐานข้อมูล และงานเบื้องหลังที่รองรับเว็บหรือแอปของคุณ โดยวางระบบยืนยันตัวตน การเก็บ Log และการทดสอบภาระงานไว้ตั้งแต่สปรินต์แรก เป้าหมายคือระบบที่ทีมคุณอ่านเข้าใจ ต่อยอดได้ และส่งต่อให้นักพัฒนาคนถัดไปได้โดยไม่ต้องกังวล'
  const whyTitle = isEN ? 'Why backend quality determines your ceiling'    : 'ทำไมคุณภาพ Backend ถึงเป็นเพดานของธุรกิจคุณ'
  const whyDesc  = isEN ? 'A backend that was rushed ends up limiting everything built on top of it: each new feature takes longer, each traffic spike is a gamble, and each partner integration turns into a custom job. Untangling it later typically costs around ten times more than designing it properly at the start, because by then real customer data and live traffic are involved.'  : 'Backend ที่ทำแบบเร่งๆ จะกลายเป็นตัวจำกัดทุกอย่างที่สร้างต่อบนมัน ฟีเจอร์ใหม่ทำนานขึ้น ช่วงทราฟฟิกพุ่งต้องลุ้น และทุกครั้งที่เชื่อมกับพาร์ทเนอร์ก็กลายเป็นงานเฉพาะกิจ การแก้ทีหลังมักแพงกว่าออกแบบให้ดีตั้งแต่แรกราว 10 เท่า เพราะตอนนั้นมีข้อมูลลูกค้าจริงและผู้ใช้จริงอยู่ในระบบแล้ว'
  const ctaTitle = isEN ? 'Ready to build a backend that lasts?'    : 'พร้อมสร้าง Backend ที่ใช้ได้ยาวหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free architecture review. Share your current setup or your plan, and we will point out the bottlenecks and risks we see, in plain language, before they turn into outages.'   : 'เริ่มจากให้เรารีวิวสถาปัตยกรรมให้ฟรี ส่งโครงสร้างระบบที่มีอยู่หรือแผนที่คิดไว้มาให้ดู เราจะบอกคอขวดและความเสี่ยงที่เห็น ด้วยภาษาที่เข้าใจง่าย ก่อนที่มันจะกลายเป็นระบบล่ม'

  const heroBullets = isEN ? [
      'RESTful and GraphQL API design and development, with documentation your partners can follow',
      'Microservices and event-driven architecture, only where the size of the system calls for it',
      'Database design, query tuning and data migration from legacy systems',
      'Login, permissions and security hardening against common attacks',
      'Load testing, profiling and a capacity plan before launch',
    ] : [
      'ออกแบบและพัฒนา RESTful และ GraphQL API พร้อมเอกสารที่พาร์ทเนอร์อ่านแล้วทำตามได้',
      'Microservices และ Event-driven Architecture เฉพาะในจุดที่ขนาดระบบต้องใช้จริง',
      'ออกแบบฐานข้อมูล ปรับ Query ให้เร็ว และย้ายข้อมูลจากระบบเก่า',
      'ระบบล็อกอิน สิทธิ์การเข้าถึง และเสริมความปลอดภัยให้ทนการโจมตีที่พบบ่อย',
      'ทดสอบภาระงาน วัดประสิทธิภาพ และวางแผนรองรับผู้ใช้ก่อนเปิดใช้งานจริง',
    ]
  const whyPoints   = isEN ? [
      'An API designed along REST principles is easy for outside developers to pick up, so the next partner or mobile app plugs in without a rewrite',
      'The right indexes and a few rewritten queries can cut response times 10-100x with no new hardware, which is often the cheapest speed-up available',
      'Zero-downtime deployments let you ship fixes during working hours, because users never see the switch',
      'Rate limiting, input validation and encryption close off the attacks seen most often against public APIs',
      'Event-driven design separates services, so a slow report or email job cannot hold up checkout and each part can scale on its own',
    ] : [
      'API ที่ออกแบบตามหลัก REST ทำให้นักพัฒนาภายนอกหยิบไปใช้ได้ง่าย พาร์ทเนอร์รายถัดไปหรือแอปมือถือตัวใหม่ก็เสียบต่อได้โดยไม่ต้องเขียนใหม่',
      'การทำ Index ให้ถูกและเขียน Query ใหม่ไม่กี่จุด ลดเวลาตอบสนองได้ 10-100 เท่าโดยไม่ต้องซื้อฮาร์ดแวร์เพิ่ม และมักเป็นวิธีเร่งความเร็วที่ถูกที่สุด',
      'Deploy แบบไม่มี Downtime ทำให้ปล่อยแก้บั๊กในเวลาทำงานได้เลย เพราะผู้ใช้ไม่เห็นว่ามีการสลับเวอร์ชัน',
      'การจำกัดจำนวนคำขอ ตรวจสอบข้อมูลขาเข้า และเข้ารหัส ช่วยปิดช่องการโจมตีที่พบบ่อยที่สุดกับ API สาธารณะ',
      'Event-driven Architecture แยกบริการออกจากกัน งานรายงานหรืออีเมลที่ช้าจะไม่ดึงหน้าชำระเงินให้ช้าตามไปด้วย และแต่ละส่วนขยายได้อิสระ',
    ]
  const outcomes    = isEN ? [
      {stat: '<100ms', label: 'API Response Time', desc: 'P95 under normal load'},
      {stat: '100x', label: 'Query Speedup', desc: 'With proper indexing'},
      {stat: '0', label: 'Planned Downtime', desc: 'Blue-green deployments'},
      {stat: 'SOC 2', label: 'Security Standard', desc: 'Ready architecture'}
    ] : [
      {stat: '<100ms', label: 'เวลาตอบสนองของ API', desc: 'P95 ภายใต้ภาระงานปกติ'},
      {stat: '100x', label: 'Query เร็วขึ้น', desc: 'ด้วยการทำ Index ที่เหมาะสม'},
      {stat: '0', label: 'Downtime ที่วางแผนไว้', desc: 'Deploy แบบ Blue-green'},
      {stat: 'SOC 2', label: 'มาตรฐานความปลอดภัย', desc: 'สถาปัตยกรรมที่พร้อมรองรับ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-api', title: 'RESTful & GraphQL API', desc: 'Clear, versioned APIs with an OpenAPI or GraphQL schema and worked examples. Your own front-end teams and outside partners can integrate without a call to the developer who wrote it.'},
      {icon: 'ti-database', title: 'Database Design & Optimization', desc: 'We pick the database that fits your data (relational, document or cache), design schemas that survive growth, and tune slow queries using real query plans rather than guesswork.'},
      {icon: 'ti-shield-lock', title: 'Security & Authentication', desc: 'JWT and OAuth 2.0 login, role-based access control so each user sees only what they should, and encryption for data both at rest and in transit, built with PDPA obligations in mind.'},
      {icon: 'ti-topology-star', title: 'Microservices Architecture', desc: 'Where one codebase has grown too heavy, we split it into small services that deploy and scale on their own, with clear boundaries so teams stop stepping on each other.'},
      {icon: 'ti-brand-kafka', title: 'Event-driven & Queue', desc: 'Kafka, RabbitMQ or AWS SQS to handle payments, notifications, imports and other slow work in the background, so the user gets a fast response and nothing is lost if a service restarts.'},
      {icon: 'ti-activity', title: 'Performance & Load Testing', desc: 'We rehearse launch day with k6 or Locust, find where the system bends, and give you a capacity number and a fix list before real customers arrive.'}
    ] : [
      {icon: 'ti-api', title: 'RESTful & GraphQL API', desc: 'API ที่ชัดเจน แยกเวอร์ชันได้ มี OpenAPI หรือ GraphQL Schema พร้อมตัวอย่างการเรียกใช้ ทีม Front-end ของคุณและพาร์ทเนอร์ภายนอกเชื่อมได้เลยโดยไม่ต้องโทรถามคนเขียน'},
      {icon: 'ti-database', title: 'Database Design & Optimization', desc: 'เราเลือกฐานข้อมูลที่เหมาะกับข้อมูลของคุณ (relational, document หรือ cache) ออกแบบ Schema ที่โตต่อไปได้ และปรับ Query ที่ช้าโดยดูจาก Query Plan จริง ไม่ใช่เดา'},
      {icon: 'ti-shield-lock', title: 'Security & Authentication', desc: 'ล็อกอินด้วย JWT และ OAuth 2.0 ควบคุมสิทธิ์ตามบทบาท (RBAC) ให้ผู้ใช้เห็นเฉพาะข้อมูลที่ควรเห็น และเข้ารหัสทั้งตอนเก็บและตอนส่งข้อมูล โดยคำนึงถึงข้อกำหนด PDPA ตั้งแต่ตอนออกแบบ'},
      {icon: 'ti-topology-star', title: 'Microservices Architecture', desc: 'ถ้า Codebase เดียวโตจนหนักเกินไป เราแตกเป็นบริการย่อยที่ Deploy และขยายได้เอง พร้อมขอบเขตที่ชัด ทีมต่างๆ จะได้ไม่ต้องเหยียบเท้ากัน'},
      {icon: 'ti-brand-kafka', title: 'Event-driven & Queue', desc: 'Kafka, RabbitMQ หรือ AWS SQS รับงานช้าๆ อย่างการชำระเงิน การแจ้งเตือน และการนำเข้าข้อมูลไปทำเบื้องหลัง ผู้ใช้ได้คำตอบเร็ว และไม่มีอะไรหายถ้าบริการรีสตาร์ต'},
      {icon: 'ti-activity', title: 'Performance & Load Testing', desc: 'เราซ้อมวันเปิดตัวด้วย k6 หรือ Locust ดูว่าระบบเริ่มรับไม่ไหวตรงไหน แล้วให้ตัวเลขความจุกับรายการที่ต้องแก้ ก่อนลูกค้าจริงจะเข้ามา'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'We list what the system must do, how many users and requests to expect, and what you can spend, then propose an architecture sized to that, not to a conference talk.'},
      {no: '02', title: 'API Design & Documentation', desc: 'The API contract is written first as an OpenAPI spec, so front-end, mobile and partner teams can review it and start working against mock responses while the server is still being built.'},
      {no: '03', title: 'Development & Testing', desc: 'We build with TDD, write integration tests for the paths that matter, and require code review on every pull request, so knowledge is never locked in one person\'s head.'},
      {no: '04', title: 'Security Audit', desc: 'We check against the OWASP Top 10, run penetration tests, and fix what turns up before launch. You receive a short report of what was found and what changed.'},
      {no: '05', title: 'Deploy & Monitor', desc: 'We set up CI/CD, monitoring and alerts, and write on-call runbooks that tell whoever is on duty what to check first when something breaks at 2 a.m.'}
    ] : [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'เราจดว่าระบบต้องทำอะไรบ้าง คาดว่ามีผู้ใช้และคำขอเท่าไหร่ และมีงบเท่าไหร่ แล้วเสนอสถาปัตยกรรมที่พอดีกับขนาดนั้น ไม่ใช่แบบที่เห็นในงานสัมมนา'},
      {no: '02', title: 'API Design & Documentation', desc: 'เขียน API Contract เป็น OpenAPI Spec ก่อน ทีม Front-end มือถือ และพาร์ทเนอร์จะได้รีวิวและเริ่มทำงานกับข้อมูลจำลองได้ระหว่างที่เซิร์ฟเวอร์ยังสร้างอยู่'},
      {no: '03', title: 'Development & Testing', desc: 'พัฒนาด้วย TDD เขียน Integration Test ในเส้นทางที่สำคัญ และบังคับรีวิวโค้ดทุก Pull Request ความรู้จะได้ไม่ติดอยู่ในหัวคนใดคนหนึ่ง'},
      {no: '04', title: 'Security Audit', desc: 'ตรวจตาม OWASP Top 10 ทำ Penetration Test แล้วแก้ช่องโหว่ที่พบก่อนเปิดใช้งาน คุณจะได้รายงานสั้นๆ ว่าพบอะไรและแก้อะไรไป'},
      {no: '05', title: 'Deploy & Monitor', desc: 'ตั้งค่า CI/CD ระบบติดตามและแจ้งเตือน พร้อมเขียน On-call Runbook บอกคนเข้าเวรว่าถ้าระบบมีปัญหาตอนตีสองให้เช็กอะไรก่อน'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Payment API Handling 500K Transactions/Day', desc: 'A microservices payment backend that scales with load. Each service can be added or restarted independently, which kept the transaction success rate at 99.97%.', result: '99.97% Transaction Success'},
      {tag: 'Healthcare · Bangkok', title: 'Healthcare API Connecting 15 Systems', desc: 'An integration layer that translates data from many legacy systems into one consistent format, so new applications connect once instead of fifteen times.', result: 'Integration Time reduced 80%'},
      {tag: 'E-Commerce · Nationwide', title: 'API That Never Drops During Flash Sales', desc: 'Auto-scaling plus a queue in front of the order service absorbed traffic spikes of 50x normal, so orders waited in line instead of failing.', result: '0 Downtime for 12 months'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Payment API รองรับ 500K ธุรกรรม/วัน', desc: 'Backend ชำระเงินแบบ Microservices ที่ขยายตามภาระงาน เพิ่มหรือรีสตาร์ตทีละบริการได้ ทำให้อัตราธุรกรรมสำเร็จอยู่ที่ 99.97%', result: '99.97% ธุรกรรมสำเร็จ'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Healthcare API เชื่อม 15 ระบบเข้าด้วยกัน', desc: 'ชั้นเชื่อมระบบที่แปลงข้อมูลจากระบบเก่าหลายตัวให้เป็นรูปแบบเดียวกัน แอปใหม่จึงเชื่อมครั้งเดียว ไม่ต้องเชื่อมสิบห้าครั้ง', result: 'เวลาเชื่อมระบบลด 80%'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'API ที่ไม่ล่มแม้ช่วง Flash Sale', desc: 'Auto-scaling กับคิวที่วางหน้าบริการออเดอร์ รับทราฟฟิกที่พุ่งสูงกว่าปกติ 50 เท่าได้ ออเดอร์จึงรอในคิวแทนที่จะล้มเหลว', result: '0 Downtime ตลอด 12 เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Node.js or Python — which is better?', a: 'Neither wins everywhere. Node.js is a good fit for real-time features and APIs with many concurrent connections, while Python is stronger for data processing and machine-learning work. We choose by what the product does and what your team can maintain, and we will explain the reasoning.'},
      {q: 'SQL or NoSQL?', a: 'There is no single answer. SQL suits data with clear relationships that must stay consistent, such as orders and payments. NoSQL suits flexible document shapes and very heavy write loads. Many systems use both, each for the job it does best.'},
      {q: 'Monolith or Microservices?', a: 'We usually recommend starting with a well-organised monolith and splitting out services once a real need appears, such as one part scaling very differently. Microservices bring deployment, monitoring and networking overhead that a small team often cannot afford.'},
      {q: 'Can you migrate from our existing system?', a: 'Yes. We commonly use the Strangler Pattern: new services take over one function at a time behind the old system, traffic moves across gradually, and there is no big-bang cutover or downtime.'},
      {q: 'Do you build APIs for partners and third-party integrations?', a: 'Yes. For partner-facing APIs we add API keys or OAuth, rate limits, versioning and written documentation with examples, so another company\'s developers can integrate without our help.'},
      {q: 'How do you keep customer data safe and PDPA-ready?', a: 'We encrypt data at rest and in transit, limit access by role, log who touches personal data, and keep only what is needed. For PDPA we help you map where personal data lives so consent and deletion requests can actually be carried out.'},
      {q: 'Can you take over a backend someone else wrote?', a: 'Often, yes. We start with a code and architecture review, add tests around the risky parts, and then improve it step by step. You get a written list of problems ranked by severity before any rebuild is proposed.'}
    ] : [
      {q: 'Node.js หรือ Python ดีกว่ากัน?', a: 'ไม่มีตัวไหนชนะทุกงาน Node.js เหมาะกับฟีเจอร์ Real-time และ API ที่มีการเชื่อมต่อพร้อมกันมาก ส่วน Python แข็งแรงกว่าในงานประมวลผลข้อมูลและ Machine Learning เราเลือกตามหน้าที่ของผลิตภัณฑ์และสิ่งที่ทีมคุณดูแลต่อได้ และจะอธิบายเหตุผลให้ฟัง'},
      {q: 'SQL หรือ NoSQL?', a: 'ไม่มีคำตอบตายตัว SQL เหมาะกับข้อมูลที่มีความสัมพันธ์ชัดและต้องสอดคล้องกันตลอด เช่น ออเดอร์และการชำระเงิน ส่วน NoSQL เหมาะกับข้อมูลรูปแบบยืดหยุ่นและงานเขียนข้อมูลปริมาณสูงมาก หลายระบบใช้ทั้งสองแบบ โดยให้แต่ละตัวทำงานที่ถนัด'},
      {q: 'Monolith หรือ Microservices?', a: 'ปกติเราแนะนำให้เริ่มจาก Monolith ที่จัดโครงสร้างดี แล้วค่อยแยกเป็นบริการเมื่อมีเหตุจริง เช่น ส่วนใดส่วนหนึ่งต้องขยายต่างจากส่วนอื่นมาก เพราะ Microservices มีภาระเรื่อง Deploy การติดตามระบบ และเครือข่าย ที่ทีมเล็กมักแบกไม่ไหว'},
      {q: 'ย้ายจากระบบเก่าได้ไหม?', a: 'ได้ เรามักใช้ Strangler Pattern คือให้บริการใหม่รับช่วงทีละฟังก์ชันอยู่หลังระบบเก่า แล้วค่อยๆ ย้ายทราฟฟิกมา ไม่ต้องสลับระบบทีเดียวและไม่มี Downtime'},
      {q: 'ทำ API ให้พาร์ทเนอร์หรือระบบภายนอกเชื่อมได้ไหม?', a: 'ได้ สำหรับ API ที่เปิดให้พาร์ทเนอร์ใช้ เราเพิ่ม API Key หรือ OAuth จำกัดจำนวนคำขอ แยกเวอร์ชัน และเขียนเอกสารพร้อมตัวอย่าง นักพัฒนาของบริษัทอื่นจึงเชื่อมได้เองโดยไม่ต้องรอเรา'},
      {q: 'ดูแลข้อมูลลูกค้าให้ปลอดภัยและพร้อม PDPA อย่างไร?', a: 'เราเข้ารหัสข้อมูลทั้งตอนเก็บและตอนส่ง จำกัดสิทธิ์ตามบทบาท บันทึกว่าใครเข้าถึงข้อมูลส่วนบุคคลบ้าง และเก็บเท่าที่จำเป็น เรื่อง PDPA เราช่วยทำแผนผังว่าข้อมูลส่วนบุคคลอยู่ตรงไหนบ้าง เพื่อให้คำขอเรื่องความยินยอมและการลบข้อมูลทำได้จริง'},
      {q: 'รับช่วงต่อ Backend ที่คนอื่นเขียนไว้ได้ไหม?', a: 'หลายกรณีได้ เราเริ่มจากรีวิวโค้ดและสถาปัตยกรรม เพิ่มเทสต์ครอบส่วนที่เสี่ยง แล้วปรับปรุงทีละขั้น คุณจะได้รายการปัญหาที่เรียงตามความรุนแรงเป็นลายลักษณ์อักษร ก่อนที่เราจะเสนอให้สร้างใหม่'}
    ]
  const related     = isEN ? [
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'}
    ] : [
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'}
    ]

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/backend-api/hero.jpg"
      whyImg="/images/services/backend-api/why1.jpg"
      whyImg2="/images/services/backend-api/why2.jpg"
      featureImg="/images/services/backend-api/feature.jpg"
      processImg="/images/services/backend-api/process.jpg"
    />
  )
}
