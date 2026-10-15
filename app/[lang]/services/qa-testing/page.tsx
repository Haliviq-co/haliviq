import type { Metadata } from 'next'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? "Software Testing Services in Bangkok | Haliviq"
    : "รับทดสอบซอฟต์แวร์ กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq tests websites and apps in Bangkok: manual and automated testing, load and security checks on real devices, with clear bug reports before you launch."
    : "Haliviq รับทดสอบเว็บและแอปที่กรุงเทพฯ ทั้งทดสอบด้วยมือและอัตโนมัติ ทดสอบโหลดและความปลอดภัยบนอุปกรณ์จริง พร้อมรายงานบั๊กที่อ่านง่ายก่อนเปิดตัว"
  const url = `https://www.haliviq.com/${params.lang}/services/qa-testing`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Engineering / QA & Testing'  : 'Engineering / QA & Testing'
  const title    = isEN ? 'Software You Can'  : 'ซอฟต์แวร์ที่คุณ'
  const subtitle = isEN ? 'Trust Every Time'    : 'เชื่อใจได้ทุกครั้ง'
  const heroDesc = isEN ? 'Bugs in production cost 100x more to fix than bugs caught in testing. Haliviq runs QA programmes for Thai businesses that are about to launch or have just been burned by a bad release: we check the product the way your customers will use it, on real phones and browsers, and give you a prioritised list of what to fix before go-live. Hire us for a single project, such as a pre-launch audit, or keep us on a monthly retainer as your outsourced QA team.'  : 'บั๊กที่หลุดไปถึงระบบจริงมีต้นทุนแก้สูงกว่าบั๊กที่พบตอนทดสอบถึง 100 เท่า Haliviq วางโปรแกรม QA ให้ธุรกิจในไทยที่กำลังจะเปิดตัว หรือเพิ่งพบปัญหาจากการปล่อยเวอร์ชันที่พลาดมา เราจะลองใช้ผลิตภัณฑ์แบบที่ลูกค้าของคุณใช้จริง บนมือถือและเบราว์เซอร์จริง แล้วส่งรายการสิ่งที่ต้องแก้ก่อนเปิดตัวเรียงตามความสำคัญให้ จะจ้างเป็นโปรเจกต์เดียว เช่น ตรวจก่อนเปิดตัว หรือให้เราเป็นทีม QA ของคุณแบบรายเดือนก็ได้'
  const whyTitle = isEN ? 'Why QA is not optional'    : 'ทำไมต้องมี QA'
  const whyDesc  = isEN ? 'A single critical bug in production can cost more than an entire QA programme. A checkout that fails on one popular Android phone, a form that loses data, or a page that falls over during a campaign all cost sales on the day, and they cost trust for much longer. Beyond the direct cost, the reputational damage from public failures is nearly impossible to quantify, which is why we treat testing as part of the budget and not as an extra.'  : 'บั๊กร้ายแรงตัวเดียวบนระบบจริงอาจเสียหายมากกว่าค่า QA ทั้งโปรแกรม ลองนึกถึงหน้าชำระเงินที่ใช้ไม่ได้บนมือถือ Android รุ่นยอดนิยมรุ่นเดียว ฟอร์มที่ข้อมูลหาย หรือหน้าเว็บที่ล่มตอนมีแคมเปญ ทุกอย่างนี้เสียยอดขายในวันนั้น และเสียความไว้ใจไปอีกนาน ยังไม่นับชื่อเสียงที่เสียไปเมื่อปัญหาเกิดต่อหน้าสาธารณะ ซึ่งแทบวัดเป็นตัวเลขไม่ได้ เราจึงมองว่าการทดสอบเป็นส่วนหนึ่งของงบ ไม่ใช่ของแถม'
  const ctaTitle = isEN ? 'Ready to ship with confidence?'    : 'พร้อมปล่อยระบบอย่างมั่นใจหรือยัง?'
  const ctaDesc  = isEN ? 'Get a free QA Audit. Send us your product or staging link and we will review how much of it is tested today, then point to the biggest risks before you launch.'   : 'ขอตรวจ QA ฟรี ส่งลิงก์ผลิตภัณฑ์หรือเว็บ staging มาให้เรา เราจะดูว่าตอนนี้ทดสอบครอบคลุมแค่ไหน แล้วชี้ความเสี่ยงที่ใหญ่ที่สุดก่อนคุณเปิดตัว'
  const heroBullets = isEN ? [
      'Test strategy, planning and coverage analysis written as a plan your non-technical team can follow',
      'Manual functional testing and exploratory testing on real devices',
      'Automated regression testing and CI/CD integration for the flows you retest every release',
      'Performance, load and stress testing before a campaign or launch',
      'Security testing and vulnerability assessment against the OWASP Top 10',
      'Bug reports with steps to reproduce, screenshots and a priority, in Thai or English',
    ] : [
      'วางกลยุทธ์ แผนทดสอบ และวิเคราะห์ความครอบคลุม เขียนเป็นแผนที่ทีมที่ไม่ใช่สายเทคนิคก็อ่านตามได้',
      'ทดสอบการทำงานด้วยมือ และทดสอบแบบสำรวจหาจุดผิดปกติบนอุปกรณ์จริง',
      'Regression Test อัตโนมัติ เชื่อมกับ CI/CD สำหรับ flow ที่ต้องเทสต์ซ้ำทุกครั้งที่ปล่อยเวอร์ชัน',
      'ทดสอบประสิทธิภาพ รับโหลด และรับภาระหนัก ก่อนแคมเปญหรือวันเปิดตัว',
      'ทดสอบความปลอดภัยและประเมินช่องโหว่ ตามมาตรฐาน OWASP Top 10',
      'รายงานบั๊กที่มีขั้นตอนทำซ้ำ ภาพหน้าจอ และระดับความสำคัญ เขียนเป็นภาษาไทยหรืออังกฤษก็ได้',
    ]
  const whyPoints   = isEN ? [
      'Automated test suites reduce regression testing time 80%, so a release no longer needs a week of people clicking through the same screens.',
      'Load testing before launch identifies capacity limits, which prevents the worst possible first impression on campaign day.',
      'Security testing is now a regulatory requirement in many industries, and a clean test report is easier to show an auditor than a promise.',
      'Shift-left testing costs 10-100x less than finding bugs after release, because the person who wrote the code still remembers it.',
      'A well-tested codebase attracts better engineers who want to work on quality products, and keeps them from burning out on firefighting.',
      'Testing on real devices and browsers finds the problems that only appear on the phones your customers actually own.',
    ] : [
      'ชุดทดสอบอัตโนมัติลดเวลา Regression Test ได้ 80% ปล่อยเวอร์ชันได้โดยไม่ต้องให้คนนั่งกดหน้าเดิมๆ กันทั้งสัปดาห์',
      'ทดสอบโหลดก่อนเปิดตัวจะรู้ว่าระบบรับได้แค่ไหน ไม่ต้องล่มในวันแคมเปญ',
      'การทดสอบความปลอดภัยเป็นข้อบังคับในหลายอุตสาหกรรม และรายงานผลทดสอบที่สะอาดเอาไปแสดงผู้ตรวจสอบได้ง่ายกว่าคำสัญญา',
      'ทดสอบตั้งแต่ต้นทางถูกกว่าไปพบบั๊กหลังปล่อย 10-100 เท่า เพราะคนเขียนโค้ดยังจำโค้ดตัวเองได้',
      'โค้ดที่ทดสอบดีดึงดูดวิศวกรเก่งๆ ที่อยากทำงานกับสินค้าคุณภาพ และไม่ต้องเหนื่อยกับการวิ่งดับไฟทุกสัปดาห์',
      'ทดสอบบนอุปกรณ์และเบราว์เซอร์จริง จะพบปัญหาที่เกิดเฉพาะบนมือถือรุ่นที่ลูกค้าของคุณใช้อยู่จริงๆ',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Faster Regression Testing', desc: 'With test automation'},
      {stat: '100x', label: 'Cheaper to Fix Early', desc: 'vs production bugs'},
      {stat: '0', label: 'Critical Bugs at Launch', desc: 'With full pre-launch QA'},
      {stat: 'OWASP', label: 'Security Standard', desc: 'Top 10 vulnerabilities covered'}
    ] : [
      {stat: '80%', label: 'Regression Test เร็วขึ้น', desc: 'ด้วยการทดสอบอัตโนมัติ'},
      {stat: '100x', label: 'ถูกกว่าแก้บั๊กหลังปล่อยจริง', desc: 'เทียบกับบั๊กบนระบบจริง'},
      {stat: '0', label: 'บั๊กร้ายแรงตอนเปิดตัว', desc: 'เมื่อทำ QA เต็มรูปแบบก่อนเปิดตัว'},
      {stat: 'OWASP', label: 'มาตรฐานความปลอดภัย', desc: 'ครอบคลุมช่องโหว่ 10 อันดับแรก'}
    ]
  const features    = isEN ? [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'A tester works through every function against the requirements, then goes off-script: odd inputs, back buttons, slow connections, interrupted payments. This is how we find the edge cases automated scripts never think of. It suits new products and big changes, and you get a written list of findings ranked by how much they would hurt.'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'We turn the checks you repeat every release into automated tests written with Playwright, Cypress or Selenium, running on every pull request in CI/CD. The point is to stop re-testing login, checkout and sign-up by hand. We pick the flows worth automating first, so the suite pays for itself quickly.'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'Using k6, Locust or JMeter we simulate the number of visitors you expect on a sale day or launch, and then more, to see where the system slows down or breaks. You get the capacity limit in plain numbers and a short list of bottlenecks for your developers to fix before the real traffic arrives.'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'We check against the OWASP Top 10 and probe for SQL injection, XSS, weak authentication and exposed data before production. It is a practical vulnerability assessment, not a penetration test certificate. Findings come with severity levels and a suggested fix for each.'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'We test across browsers, OS versions, screen sizes and real devices, including the mid-range Android phones many Thai users carry. Layout breaks, keyboard problems and slow screens show up here, long before a customer reports them.'},
      {icon: 'ti-api', title: 'API Testing', desc: 'We test your APIs on their own, endpoint by endpoint: the data contract, edge cases, error messages, authentication and permissions. This catches problems that sit under the screen, and it is especially useful when a mobile app and a website share the same backend.'}
    ] : [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'ผู้ทดสอบไล่เช็กทุกฟังก์ชันตามความต้องการ แล้วลองเล่นนอกสคริปต์ ใส่ข้อมูลแปลกๆ กดย้อนกลับ ใช้เน็ตช้า หรือหยุดกลางคันตอนชำระเงิน วิธีนี้ช่วยให้พบเคสพิเศษที่สคริปต์อัตโนมัติคิดไม่ถึง เหมาะกับผลิตภัณฑ์ใหม่และการเปลี่ยนแปลงใหญ่ คุณจะได้รายการสิ่งที่พบเป็นลายลักษณ์อักษร เรียงตามความเสียหายที่อาจเกิดขึ้น'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'เรานำเช็กลิสต์ที่ต้องทำซ้ำทุกครั้งที่ปล่อยเวอร์ชันมาเขียนเป็นชุดทดสอบอัตโนมัติด้วย Playwright, Cypress หรือ Selenium ให้รันทุกครั้งที่มี PR ใน CI/CD จะได้ไม่ต้องนั่งเทสต์ล็อกอิน ชำระเงิน สมัครสมาชิกด้วยมือซ้ำๆ เราเลือก flow ที่คุ้มกับการทำอัตโนมัติก่อน ชุดทดสอบจึงคืนทุนได้เร็ว'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'เราใช้ k6, Locust หรือ JMeter จำลองผู้เข้าใช้เท่ากับที่คุณคาดว่าจะมาในวัน Sale หรือวันเปิดตัว แล้วเพิ่มให้เกินไปอีก เพื่อดูว่าระบบเริ่มช้าหรือล่มตรงไหน คุณจะได้ตัวเลขที่ระบบรับไหวแบบเข้าใจง่าย กับรายการคอขวดให้ทีมพัฒนาแก้ก่อนที่ผู้ใช้จริงจะเข้ามา'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'เราตรวจตาม OWASP Top 10 และลองหา SQL Injection, XSS, ระบบล็อกอินที่อ่อน และข้อมูลที่เปิดโล่งเกินไป ก่อนขึ้นระบบจริง เป็นการประเมินช่องโหว่ที่ใช้ได้จริง ไม่ใช่ใบรับรอง Penetration Test ผลที่พบมีระดับความรุนแรงและวิธีแก้ที่แนะนำให้แต่ละข้อ'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'เราทดสอบข้ามเบราว์เซอร์ เวอร์ชันระบบปฏิบัติการ ขนาดหน้าจอ และอุปกรณ์จริง รวมถึงมือถือ Android ระดับกลางที่คนไทยจำนวนมากใช้ อาการอย่างหน้าตาเพี้ยน คีย์บอร์ดบังช่อง หรือหน้าจอโหลดช้า จะถูกจับได้ที่นี่ ก่อนที่ลูกค้าจะแจ้งเข้ามา'},
      {icon: 'ti-api', title: 'API Testing', desc: 'เราทดสอบ API แยกต่างหากทีละ Endpoint ทั้งรูปแบบข้อมูล เคสพิเศษ ข้อความแจ้ง error การยืนยันตัวตน และสิทธิ์การเข้าถึง ช่วยจับปัญหาที่ซ่อนอยู่หลังหน้าจอ เหมาะมากเมื่อแอปมือถือกับเว็บไซต์ใช้ระบบหลังบ้านเดียวกัน'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Test Planning', desc: 'We read your requirements and walk through the product with you, then agree the test strategy, what counts as done, and the risk areas that deserve the most attention. You get a short plan with scope, timeline and the devices we will cover.'},
      {no: '02', title: 'Test Case Design', desc: 'We write test cases that cover the happy path, edge cases and negative scenarios, such as wrong passwords, empty fields and failed payments. You can review the cases before we run them.'},
      {no: '03', title: 'Test Execution', desc: 'We run manual tests, automated tests, performance tests and security scans in a staging environment, and log what we find as we go, so your developers can start fixing before the round ends.'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'Each bug is reported with steps to reproduce, screenshots or a recording, the device used, and a priority. We keep the list in the tracker your team already uses, and follow each item until it is fixed and verified.'},
      {no: '05', title: 'Regression & Sign-off', desc: 'After fixes, we rerun the affected tests plus a regression pass to make sure nothing else broke. We sign off when all the agreed quality gates pass, and give you a short summary report you can share with management.'}
    ] : [
      {no: '01', title: 'Test Planning', desc: 'เราอ่านความต้องการและลองเดินดูผลิตภัณฑ์ร่วมกับคุณ แล้วตกลงกลยุทธ์ทดสอบ เกณฑ์ที่ถือว่าเสร็จ และจุดเสี่ยงที่ต้องดูเป็นพิเศษ คุณจะได้แผนสั้นๆ ที่ระบุขอบเขต ไทม์ไลน์ และอุปกรณ์ที่เราจะทดสอบ'},
      {no: '02', title: 'Test Case Design', desc: 'เราเขียน Test Case ให้ครอบคลุมทั้งกรณีปกติ กรณีพิเศษ และกรณีที่ควรล้มเหลว เช่น ใส่รหัสผ่านผิด ปล่อยช่องว่าง หรือชำระเงินไม่ผ่าน คุณดู Test Case ก่อนที่เราจะรันได้'},
      {no: '03', title: 'Test Execution', desc: 'เรารันทดสอบด้วยมือ ทดสอบอัตโนมัติ ทดสอบประสิทธิภาพ และสแกนความปลอดภัยบนระบบ staging พร้อมบันทึกสิ่งที่พบไปเรื่อยๆ ทีมพัฒนาจะเริ่มแก้ได้ตั้งแต่ก่อนจบรอบ'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'บั๊กแต่ละตัวมีขั้นตอนทำซ้ำ ภาพหน้าจอหรือคลิปบันทึก อุปกรณ์ที่ใช้ และระดับความสำคัญ เราเก็บรายการไว้ใน tracker ที่ทีมของคุณใช้อยู่แล้ว และตามจนแต่ละข้อแก้เสร็จและตรวจซ้ำแล้ว'},
      {no: '05', title: 'Regression & Sign-off', desc: 'หลังแก้บั๊ก เรารันชุดที่เกี่ยวข้องซ้ำ พร้อม Regression Test อีกรอบเพื่อดูว่าไม่มีอะไรพังเพิ่ม เราอนุมัติเมื่อผ่านเกณฑ์คุณภาพที่ตกลงกันครบ และส่งรายงานสรุปสั้นๆ ให้คุณเอาไปรายงานผู้บริหาร'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Automated Tests Cut Regression Time 80%', desc: 'We built a 500-test suite in 6 weeks that runs on every pull request in 12 minutes, replacing a long manual regression cycle.', result: 'Release cycle reduced from 2 weeks to 3 days'},
      {tag: 'E-Commerce · Nationwide', title: 'Load Test Prevents Flash Sale Crash', desc: 'Before launch we found the system crashed at 500 concurrent users. The team fixed the bottleneck and scaled in time for the sale.', result: '0 Downtime on Flash Sale day'},
      {tag: 'Healthcare · Bangkok', title: 'Security Audit Finds 12 Critical Vulnerabilities', desc: 'An OWASP assessment before launch found and fixed vulnerabilities that could have exposed patient data.', result: '0 Security Incidents after launch'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ทดสอบอัตโนมัติลดเวลา Regression Test 80%', desc: 'เราสร้างชุดทดสอบ 500 รายการใน 6 สัปดาห์ รันทุก PR ใน 12 นาที มาแทนรอบ Regression ด้วยมือที่ใช้เวลานาน', result: 'รอบปล่อยเวอร์ชันลดจาก 2 สัปดาห์ เหลือ 3 วัน'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ทดสอบโหลดกันระบบล่มช่วง Flash Sale', desc: 'ก่อนเปิดตัวเราพบว่าระบบล่มเมื่อมีผู้ใช้พร้อมกัน 500 คน ทีมจึงแก้คอขวดและขยายระบบได้ทันก่อนวัน Sale', result: 'ไม่มีระบบล่มในวัน Flash Sale'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ตรวจความปลอดภัยพบช่องโหว่ร้ายแรง 12 จุด', desc: 'ตรวจตามมาตรฐาน OWASP ก่อนเปิดตัว พบและแก้ช่องโหว่ที่อาจทำให้ข้อมูลผู้ป่วยรั่ว', result: 'ไม่มีเหตุด้านความปลอดภัยหลังเปิดตัว'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between manual and automated testing?', a: 'Manual testing suits exploratory work, UX checks and one-time scenarios, where a human eye and judgement matter. Automated testing suits regression and any check you repeat every release. Most projects need both, and we tell you which parts of your product belong in which group.'},
      {q: 'How long does it take to build automated tests?', a: 'It depends on the coverage you want. Basic unit tests take 1-2 weeks. A full end-to-end suite for a medium-sized app may take 4-8 weeks. We usually start with the five or six most important user journeys, so you get protection early rather than at the end.'},
      {q: 'When should QA start?', a: 'The earlier the better. Shift-left testing means starting at design and development, for example reviewing requirements and mock-ups for gaps, instead of waiting for a separate QA phase at the end. If the product is already built, we can still audit it before launch.'},
      {q: 'Do we need an in-house QA team?', a: 'Not necessarily. We offer QA as a Service, either project-based, such as a pre-launch audit, or as an ongoing monthly retainer. Many small and mid-sized Thai teams use us this way instead of hiring a full-time tester.'},
      {q: 'What do we get at the end of a QA engagement?', a: 'A test plan, the test cases we ran, a tracked list of bugs with steps to reproduce and priorities, a regression result after fixes, and a short sign-off report summarising what was covered and what risks remain.'},
      {q: 'Which devices and browsers do you test on?', a: 'We agree the list with you at the planning stage, based on who your customers are. It normally includes current Chrome, Safari, Edge and Firefox, iOS and Android devices in common screen sizes, and a mid-range Android phone, because problems tend to show up on that kind of device first.'},
      {q: 'Can you test a product that is already live?', a: 'Yes. We can run exploratory and regression testing against production-like data in a staging copy, or carefully on the live product for read-only flows. Many clients ask us to look at a live product after a customer complaint or a failed release.'}
    ] : [
      {q: 'ทดสอบด้วยมือกับทดสอบอัตโนมัติต่างกันอย่างไร?', a: 'ทดสอบด้วยมือเหมาะกับงานสำรวจ งานตรวจ UX และเคสที่ทำครั้งเดียว ซึ่งต้องใช้สายตาและวิจารณญาณของคน ส่วนทดสอบอัตโนมัติเหมาะกับ Regression และเช็กลิสต์ที่ต้องทำซ้ำทุกครั้งที่ปล่อยเวอร์ชัน โปรเจกต์ส่วนใหญ่ต้องใช้ทั้งสองแบบ และเราจะบอกว่าส่วนไหนของผลิตภัณฑ์ควรใช้แบบไหน'},
      {q: 'สร้างชุดทดสอบอัตโนมัติใช้เวลานานแค่ไหน?', a: 'ขึ้นกับว่าต้องการให้ครอบคลุมแค่ไหน Unit Test พื้นฐานใช้ 1-2 สัปดาห์ ชุด E2E เต็มรูปแบบสำหรับแอปขนาดกลางอาจใช้ 4-8 สัปดาห์ เรามักเริ่มจากเส้นทางผู้ใช้สำคัญ 5-6 เส้นทางก่อน คุณจะได้ความคุ้มครองตั้งแต่ช่วงแรก ไม่ต้องรอให้ถึงตอนท้าย'},
      {q: 'ควรเริ่ม QA เมื่อไหร่?', a: 'ยิ่งเร็วยิ่งดี การทดสอบตั้งแต่ต้นทางคือเริ่มตั้งแต่ตอนออกแบบและพัฒนา เช่น ช่วยอ่านความต้องการและแบบหน้าจอเพื่อหาช่องโหว่ ไม่ต้องรอช่วง QA ตอนท้าย แต่ถ้าผลิตภัณฑ์สร้างเสร็จแล้ว เรายังเข้าไปตรวจก่อนเปิดตัวได้'},
      {q: 'ต้องมีทีม QA ในบริษัทไหม?', a: 'ไม่จำเป็น เรารับทำ QA เป็นบริการ ทั้งแบบรายโปรเจกต์ เช่น ตรวจก่อนเปิดตัว และแบบรายเดือนต่อเนื่อง ทีมไทยขนาดเล็กถึงกลางหลายทีมใช้เราแบบนี้แทนการจ้างผู้ทดสอบประจำ'},
      {q: 'จบงาน QA แล้วจะได้อะไรบ้าง?', a: 'คุณจะได้แผนทดสอบ Test Case ที่เรารัน รายการบั๊กที่ติดตามสถานะพร้อมขั้นตอนทำซ้ำและระดับความสำคัญ ผล Regression หลังแก้ และรายงานสรุปการอนุมัติสั้นๆ ว่าทดสอบอะไรไปบ้างและเหลือความเสี่ยงอะไร'},
      {q: 'ทดสอบบนอุปกรณ์และเบราว์เซอร์อะไรบ้าง?', a: 'เราตกลงรายการกับคุณตั้งแต่ช่วงวางแผน โดยดูจากกลุ่มลูกค้าของคุณ โดยปกติจะมี Chrome, Safari, Edge และ Firefox เวอร์ชันล่าสุด อุปกรณ์ iOS และ Android หลายขนาดหน้าจอ และมือถือ Android ระดับกลางอย่างน้อยหนึ่งรุ่น เพราะปัญหามักโผล่บนเครื่องกลุ่มนี้ก่อน'},
      {q: 'ผลิตภัณฑ์ที่เปิดใช้งานแล้วให้ตรวจได้ไหม?', a: 'ได้ เราทดสอบแบบสำรวจและ Regression บนสำเนา staging ที่ใช้ข้อมูลใกล้เคียงระบบจริง หรือทดสอบบนระบบจริงอย่างระมัดระวังเฉพาะ flow ที่แค่ดูข้อมูล ลูกค้าหลายรายให้เราเข้าไปตรวจหลังมีเสียงบ่นจากลูกค้า หรือหลังปล่อยเวอร์ชันที่พลาด'}
    ]
  const related     = isEN ? [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ] : [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
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
      color="var(--accent)" bg="var(--purple-bg)"
      heroImg="/images/services/qa-testing/hero.jpg"
      whyImg="/images/services/qa-testing/why1.jpg"
      whyImg2="/images/services/qa-testing/why2.jpg"
      featureImg="/images/services/qa-testing/feature.jpg"
      processImg="/images/services/qa-testing/process.jpg"
    />
  )
}
