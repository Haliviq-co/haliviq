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
    ? "Website & App Support Team in Bangkok | Haliviq"
    : "รับดูแลเว็บไซต์และแอป กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq gives your website or app a named support team in Bangkok: agreed response times, routine updates and fixes, for systems we built or another team built."
    : "Haliviq มีทีมวิศวกรดูแลเว็บไซต์และแอปให้คุณที่กรุงเทพฯ ตกลงเวลาตอบรับชัดเจน อัปเดตและแก้ปัญหาประจำ ทั้งระบบที่เราสร้างและที่ทีมอื่นสร้าง"
  const url = `https://www.haliviq.com/${params.lang}/services/support`
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
  const badge    = isEN ? 'Support / Maintenance & Support'  : 'Support / Maintenance & Support'
  const title    = isEN ? 'Systems You Can'  : 'ระบบที่คุณ'
  const subtitle = isEN ? 'Rely On 24/7'    : 'ไว้ใจได้ตลอด 24/7'
  const heroDesc = isEN ? 'Launch is not the finish line; it is the starting line. Haliviq gives your team a named group of engineers to call when something breaks, plus the routine care that stops things breaking in the first place. We take over support for products we built and for systems built by other teams, with agreed response times, monthly check-ins and a shared list of improvements, so your website or app keeps working while your staff get on with the business.'  : 'วันเปิดตัวไม่ใช่เส้นชัย แต่เป็นจุดเริ่มต้น Haliviq มีทีมวิศวกรที่คุณโทรหาได้เมื่อระบบมีปัญหา และมีงานดูแลประจำที่ช่วยกันไม่ให้ปัญหาเกิดตั้งแต่แรก เรารับดูแลทั้งผลิตภัณฑ์ที่เราสร้างเองและระบบที่ทีมอื่นสร้าง โดยตกลงเวลาตอบรับ นัดคุยสรุปทุกเดือน และมีรายการปรับปรุงที่ดูร่วมกัน เว็บไซต์หรือแอปของคุณจึงใช้งานได้ต่อเนื่อง ขณะที่ทีมของคุณทำธุรกิจได้เต็มที่'
  const whyTitle = isEN ? 'Why support is the most underrated investment'    : 'ทำไมการดูแลระบบถึงเป็นการลงทุนที่คนมองข้ามมากที่สุด'
  const whyDesc  = isEN ? 'Most businesses focus on building and launching. But the value of a product is realised over years, not weeks. Without sustained maintenance and improvement, even great products decay: a certificate expires, a plug-in goes out of date, a payment provider changes its API, and suddenly orders stop. Having someone responsible, with a phone number and an agreed response time, turns those moments from a crisis into a ticket.'  : 'ธุรกิจส่วนใหญ่โฟกัสที่การสร้างและเปิดตัว แต่คุณค่าของผลิตภัณฑ์เกิดขึ้นในช่วงหลายปี ไม่ใช่หลายสัปดาห์ ถ้าไม่ดูแลและพัฒนาต่อเนื่อง ผลิตภัณฑ์ดีแค่ไหนก็ค่อยๆ เสื่อมลง ใบรับรองหมดอายุ ปลั๊กอินเก่า ผู้ให้บริการชำระเงินเปลี่ยน API แล้วออเดอร์ก็หยุดไหลขึ้นมาเฉยๆ การมีคนรับผิดชอบที่มีเบอร์ให้โทรและมีเวลาตอบรับที่ตกลงกันไว้ ทำให้เหตุการณ์เหล่านี้เป็นแค่ ticket หนึ่งใบ ไม่ใช่วิกฤต'
  const ctaTitle = isEN ? 'Ready for a support partner you can trust?'    : 'พร้อมมีพาร์ตเนอร์ดูแลระบบที่ไว้ใจได้หรือยัง?'
  const ctaDesc  = isEN ? 'Talk to us about your current system. We will review how it is built and hosted, then propose a support plan that fits your needs and budget, whether that is basic office-hours cover or a 24/7 package for a critical system.'   : 'คุยกับเราเรื่องระบบปัจจุบันของคุณ เราจะดูว่าระบบสร้างและโฮสต์อยู่ที่ไหนอย่างไร แล้วเสนอแพ็กเกจดูแลที่เหมาะกับความต้องการและงบประมาณ ตั้งแต่ดูแลเฉพาะเวลาทำการไปจนถึง 24/7 สำหรับระบบสำคัญ'
  const heroBullets = isEN ? [
      'SLA-backed monitoring, alerting and incident response with a clear escalation path',
      'Regular security patches, dependency updates and verified backups',
      'Performance monitoring and proactive optimisation before users complain',
      'Bug fixes, small features and iterative improvements from a shared backlog',
      'Monthly report and review session in plain language, in Thai or English',
      'Support for systems we did not build, starting with an audit of how they run',
    ] : [
      'เฝ้าระบบ แจ้งเตือน และรับมือเหตุขัดข้องตาม SLA พร้อมลำดับการส่งต่อที่ชัดเจน',
      'อุดช่องโหว่ อัปเดต Dependency และสำรองข้อมูลสม่ำเสมอ พร้อมทดสอบว่ากู้คืนได้จริง',
      'เฝ้าดูประสิทธิภาพและปรับปรุงล่วงหน้า ก่อนที่ผู้ใช้จะบ่น',
      'แก้บั๊ก เพิ่มฟีเจอร์เล็กๆ และปรับปรุงต่อเนื่องจากรายการงานที่ดูร่วมกัน',
      'รายงานและประชุมทบทวนรายเดือนด้วยภาษาที่เข้าใจง่าย เป็นภาษาไทยหรืออังกฤษ',
      'ดูแลระบบที่เราไม่ได้สร้างเองได้ โดยเริ่มจากตรวจว่าระบบทำงานอย่างไร',
    ]
  const whyPoints   = isEN ? [
      'Systems without active maintenance accumulate security vulnerabilities predictably; it is a matter of when, not if.',
      'Proactive monitoring catches performance degradation before users notice, so you hear about a slow checkout from us and not from a customer.',
      'Regular dependency updates prevent the big-bang migration that happens when you fall too far behind.',
      'An ongoing partnership with the team that built the product is dramatically more efficient than onboarding new developers each time something breaks.',
      'Continuous small improvements compound into significant advantages over 12-24 months.',
      'A named contact and a written escalation path mean nobody is searching for a freelancer at 11pm on a sale day.',
    ] : [
      'ระบบที่ไม่ได้ดูแลจะสะสมช่องโหว่ด้านความปลอดภัยแน่นอน ไม่ใช่ถ้าแต่เมื่อไหร่',
      'การเฝ้าระบบล่วงหน้าจับประสิทธิภาพที่ตกลงได้ก่อนผู้ใช้จะสังเกตเห็น คุณจะรู้เรื่องหน้าชำระเงินช้าจากเรา ไม่ใช่จากลูกค้า',
      'อัปเดต Dependency สม่ำเสมอ ช่วยกันไม่ให้ต้องย้ายระบบครั้งใหญ่ ซึ่งเกิดเมื่อปล่อยให้ตามหลังนานเกินไป',
      'การทำงานต่อกับทีมที่สร้างผลิตภัณฑ์เองได้ผลดีกว่าการให้นักพัฒนาใหม่มาเรียนรู้ระบบใหม่ทุกครั้งที่มีอะไรพัง',
      'การปรับปรุงเล็กๆ น้อยๆ อย่างต่อเนื่อง สะสมเป็นความได้เปรียบสำคัญภายใน 12-24 เดือน',
      'มีผู้ติดต่อที่ระบุชื่อและลำดับการส่งต่อที่เขียนไว้ชัดเจน จะได้ไม่ต้องตามหาฟรีแลนซ์ตอนห้าทุ่มในวัน Sale',
    ]
  const outcomes    = isEN ? [
      {stat: '99.9%', label: 'Uptime Achieved', desc: 'With proactive monitoring'},
      {stat: '<1hr', label: 'Incident Response Time', desc: 'SLA-backed guarantee'},
      {stat: '0', label: 'Known Vulnerabilities', desc: 'With regular security patches'},
      {stat: '24/7', label: 'System Monitoring', desc: 'Automated alerts and escalation'}
    ] : [
      {stat: '99.9%', label: 'Uptime ที่ทำได้จริง', desc: 'ด้วยการเฝ้าระบบล่วงหน้า'},
      {stat: '<1 ชม.', label: 'เวลาตอบรับเหตุขัดข้อง', desc: 'รับประกันตาม SLA'},
      {stat: '0', label: 'ช่องโหว่ที่รู้แล้วและยังไม่ได้แก้', desc: 'ด้วยการอุดช่องโหว่สม่ำเสมอ'},
      {stat: '24/7', label: 'เฝ้าระบบตลอดเวลา', desc: 'แจ้งเตือนอัตโนมัติและส่งต่อผู้รับผิดชอบ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'We watch uptime, response time, error rates and security events around the clock, and send an alert to the right engineer the moment a threshold is crossed. Alerts are tuned so that the team is woken only for things that matter. You get a status page or report that shows how the system has behaved.'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'When something breaks, an on-call engineer picks it up within the response time in your SLA and follows a written runbook for that type of problem. We fix first, communicate as we go, and write a short post-incident note explaining what happened and what we changed so it does not repeat.'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'We apply security patches, update dependencies, renew certificates and run vulnerability scans on a schedule, and we check that backups can actually be restored. It is the quiet routine work that keeps a website out of the news.'},
      {icon: 'ti-chart-line', title: 'Performance Optimisation', desc: 'We track response times, slow database queries and infrastructure load over time, then fix the biggest drags: heavy images, missing indexes, undersized servers. Pages that load faster keep more visitors and cost less to host.'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'Bugs are fixed by priority, and new features are built from a shared backlog under the same support agreement, so small requests do not need a new quotation every time. Larger pieces of work are scoped and agreed before we start.'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'Once a month we send a plain-language report on system health, incidents, performance trends and work completed, and meet to review it with you. Each quarter we use it to plan what to improve next.'}
    ] : [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'เราเฝ้า Uptime เวลาตอบสนอง อัตราข้อผิดพลาด และเหตุด้านความปลอดภัยตลอด 24 ชั่วโมง และส่งแจ้งเตือนถึงวิศวกรที่รับผิดชอบทันทีที่ค่าเกินเกณฑ์ เราปรับการแจ้งเตือนให้ปลุกทีมเฉพาะเรื่องที่สำคัญจริง คุณจะได้หน้า status หรือรายงานที่ให้ดูว่าระบบทำงานเป็นอย่างไร'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'เมื่อมีอะไรพัง วิศวกรเวรจะรับเรื่องภายในเวลาตอบรับที่ระบุใน SLA และทำตามคู่มือรับมือสำหรับปัญหาประเภทนั้น เราแก้ก่อน แจ้งความคืบหน้าไปด้วย และเขียนสรุปสั้นๆ หลังเหตุการณ์ว่าเกิดอะไรขึ้นและเราแก้อะไรไปเพื่อไม่ให้เกิดซ้ำ'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'เราอุดช่องโหว่ อัปเดต Dependency ต่ออายุใบรับรอง และสแกนช่องโหว่ตามรอบ รวมถึงตรวจว่าไฟล์สำรองกู้คืนได้จริง เป็นงานประจำเงียบๆ ที่ช่วยให้เว็บไซต์ของคุณไม่ไปอยู่ในข่าว'},
      {icon: 'ti-chart-line', title: 'Performance Optimization', desc: 'เราติดตามเวลาตอบสนอง query ที่ช้า และโหลดของโครงสร้างพื้นฐานตลอดเวลา แล้วแก้ตัวถ่วงที่ใหญ่ที่สุด เช่น รูปภาพหนัก index ที่ขาด หรือเซิร์ฟเวอร์เล็กเกินไป หน้าเว็บที่โหลดเร็วขึ้นช่วยรักษาผู้เข้าชมและประหยัดค่าโฮสต์'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'บั๊กแก้ตามลำดับความสำคัญ ส่วนฟีเจอร์ใหม่ทำจากรายการงานที่ดูร่วมกัน ภายใต้สัญญาดูแลเดียวกัน งานเล็กๆ จึงไม่ต้องขอใบเสนอราคาใหม่ทุกครั้ง ส่วนงานก้อนใหญ่เราประเมินขอบเขตและตกลงกันก่อนเริ่ม'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'ทุกเดือนเราส่งรายงานที่อ่านเข้าใจง่ายเรื่องสถานะระบบ เหตุขัดข้อง แนวโน้มประสิทธิภาพ และงานที่ทำเสร็จ แล้วนัดคุยทบทวนกับคุณ ทุกไตรมาสเราใช้รายงานนี้วางแผนว่าจะปรับปรุงอะไรต่อ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'System Handover & Audit', desc: 'We receive the system from the dev team, or from you, and audit what is there: code, hosting, accounts, backups, documentation. You get a short report listing risks and quick wins, and we set up basic monitoring right away.'},
      {no: '02', title: 'Monitoring Setup', desc: 'We set up the monitoring tools, alert rules and an on-call schedule so that the right engineer is notified, and we test the alerts end to end before we rely on them.'},
      {no: '03', title: 'SLA & Runbook', desc: 'We agree the service levels with you in writing, covering response times, support hours and escalation contacts, and we write runbooks for each type of incident so response does not depend on one person’s memory.'},
      {no: '04', title: 'Regular Maintenance', desc: 'We carry out scheduled maintenance, security patches and dependency updates according to the plan, in a staging environment first where it makes sense, and tell you before anything that could affect users.'},
      {no: '05', title: 'Review & Plan', desc: 'Each month we review together: incidents, performance, work done and what is in the backlog. Each quarter we plan the next round of improvements and revisit whether the support level still fits.'}
    ] : [
      {no: '01', title: 'System Handover & Audit', desc: 'เรารับระบบจากทีมพัฒนาหรือจากคุณ แล้วตรวจว่ามีอะไรอยู่บ้าง ทั้งโค้ด โฮสติ้ง บัญชีต่างๆ ไฟล์สำรอง และเอกสาร คุณจะได้รายงานสั้นๆ ที่ระบุความเสี่ยงและสิ่งที่แก้ได้ทันที และเราตั้งระบบเฝ้าดูพื้นฐานให้เลย'},
      {no: '02', title: 'Monitoring Setup', desc: 'เราตั้งเครื่องมือเฝ้าดู กฎแจ้งเตือน และตารางเวร เพื่อให้วิศวกรที่ถูกคนได้รับแจ้ง และทดสอบการแจ้งเตือนตั้งแต่ต้นจนจบก่อนจะเชื่อถือมัน'},
      {no: '03', title: 'SLA & Runbook', desc: 'เราตกลง SLA กับคุณเป็นลายลักษณ์อักษร ทั้งเวลาตอบรับ ช่วงเวลาดูแล และผู้ติดต่อเมื่อต้องส่งต่อ และเขียนคู่มือรับมือสำหรับเหตุแต่ละประเภท การแก้ปัญหาจึงไม่ต้องพึ่งความจำของคนใดคนหนึ่ง'},
      {no: '04', title: 'Regular Maintenance', desc: 'เราบำรุงรักษาตามกำหนด อุดช่องโหว่ และอัปเดต Dependency ตามแผน โดยทดลองบน staging ก่อนในกรณีที่เหมาะสม และแจ้งคุณก่อนทำอะไรที่อาจกระทบผู้ใช้'},
      {no: '05', title: 'Review & Plan', desc: 'ทุกเดือนเรานั่งทบทวนร่วมกัน ทั้งเหตุขัดข้อง ประสิทธิภาพ งานที่ทำเสร็จ และรายการงานที่ค้าง ทุกไตรมาสเราวางแผนการปรับปรุงรอบต่อไป และเช็กว่าระดับการดูแลยังเหมาะอยู่ไหม'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: '3 Years of Support with Zero Critical Incidents', desc: 'Proactive monitoring caught 47 issues before users experienced them over 3 years.', result: '99.97% Uptime for 3 years'},
      {tag: 'E-Commerce · Nationwide', title: 'Maintenance Eliminates Security Incidents', desc: 'Monthly patching and vulnerability scanning kept the platform free of security breaches.', result: '0 Security Incidents in 2 years'},
      {tag: 'Healthcare · Bangkok', title: 'Continuous Improvement Triples Performance', desc: '12 months of steady performance work reduced page load from 4.2s to 1.1s.', result: 'Page Load 3x faster'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ดูแล 3 ปี ไม่มีเหตุร้ายแรงเลย', desc: 'การเฝ้าระบบล่วงหน้าจับปัญหาได้ 47 ครั้งก่อนผู้ใช้พบ ในเวลา 3 ปี', result: 'Uptime 99.97% ตลอด 3 ปี'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'การบำรุงรักษาลดเหตุด้านความปลอดภัยเหลือศูนย์', desc: 'อุดช่องโหว่และสแกนทุกเดือน ทำให้แพลตฟอร์มไม่ถูกเจาะระบบเลย', result: 'ไม่มีเหตุด้านความปลอดภัยใน 2 ปี'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ปรับปรุงต่อเนื่อง ประสิทธิภาพเพิ่ม 3 เท่า', desc: 'ทำงานด้านประสิทธิภาพอย่างต่อเนื่อง 12 เดือน ลดเวลาโหลดหน้าจาก 4.2s เหลือ 1.1s', result: 'โหลดหน้าเร็วขึ้น 3 เท่า'}
    ]
  const faqs        = isEN ? [
      {q: 'What does the SLA cover?', a: 'It depends on the package. In general it covers the response time, the target resolution time, the uptime commitment, and whether support runs in business hours or 24/7. We write these down before you sign, so you know exactly what to expect.'},
      {q: 'Can you support a system built by another team?', a: 'Yes. We start with a system audit to understand the architecture, the stack and the codebase before taking responsibility. If we find risks, we tell you what they are and how to fix them first.'},
      {q: 'What if we need new features?', a: 'We handle feature development within the support contract, with a shared backlog and quarterly planning. Small changes are done as part of the plan; bigger features are scoped and agreed separately.'},
      {q: 'How much does support cost?', a: 'We offer packages from basic SME support to premium 24/7 for critical systems. The price depends on the size of the system, the response time you need and the hours covered. Contact us for a quote tailored to your needs.'},
      {q: 'How do we report a problem?', a: 'You can report an issue by email or through the channel we agree at the start, such as a shared LINE group or a ticket form. Each report gets a ticket number, a priority and a named engineer, and you can follow progress until it is closed.'},
      {q: 'Do you look after hosting and backups as well?', a: 'Yes, if you want us to. We can manage the servers or cloud account your system runs on, including Thai or regional hosting where data location matters, and we check regularly that backups can be restored. If you prefer to keep hosting in-house, we work with your IT team.'},
      {q: 'Can we start with a short trial or just a check-up?', a: 'Yes. Many clients begin with a one-off system health check. It shows what condition the system is in and what a sensible support plan would include, with no obligation to continue.'}
    ] : [
      {q: 'SLA ครอบคลุมอะไรบ้าง?', a: 'ขึ้นกับแพ็กเกจที่เลือก โดยทั่วไปครอบคลุมเวลาตอบรับ เป้าหมายเวลาแก้ปัญหา การรับประกัน Uptime และเลือกได้ว่าดูแลเฉพาะเวลาทำการหรือ 24/7 เราเขียนทุกข้อให้ชัดก่อนคุณเซ็น คุณจะรู้ว่าจะได้อะไรบ้าง'},
      {q: 'ดูแลระบบที่ทีมอื่นสร้างได้ไหม?', a: 'ได้ เราเริ่มจากตรวจระบบเพื่อทำความเข้าใจสถาปัตยกรรม เทคโนโลยี และโค้ด ก่อนรับผิดชอบ ถ้าพบความเสี่ยง เราจะบอกว่าคืออะไรและควรแก้อะไรก่อน'},
      {q: 'ถ้าต้องการฟีเจอร์ใหม่ทำอย่างไร?', a: 'เราพัฒนาฟีเจอร์ภายใต้สัญญาดูแลได้ โดยมีรายการงานที่ดูร่วมกันและวางแผนทุกไตรมาส การเปลี่ยนแปลงเล็กๆ ทำตามแผนไปเลย ส่วนฟีเจอร์ใหญ่เราประเมินขอบเขตและตกลงแยกกัน'},
      {q: 'ราคาดูแลระบบเท่าไหร่?', a: 'เรามีตั้งแต่แพ็กเกจ Basic สำหรับ SME ไปถึง Premium 24/7 สำหรับระบบสำคัญ ราคาขึ้นกับขนาดของระบบ เวลาตอบรับที่ต้องการ และช่วงเวลาที่ดูแล ติดต่อเพื่อขอใบเสนอราคาที่ตรงกับความต้องการของคุณ'},
      {q: 'แจ้งปัญหาได้อย่างไร?', a: 'แจ้งผ่านอีเมลหรือช่องทางที่เราตกลงกันตั้งแต่ต้น เช่น กลุ่ม LINE ร่วมกัน หรือฟอร์มแจ้งปัญหา ทุกเรื่องจะมีหมายเลข ticket ระดับความสำคัญ และวิศวกรที่รับผิดชอบ คุณติดตามความคืบหน้าได้จนปิดงาน'},
      {q: 'ดูแลโฮสติ้งและไฟล์สำรองให้ด้วยไหม?', a: 'ดูแลให้ได้ถ้าคุณต้องการ เราจัดการเซิร์ฟเวอร์หรือบัญชี Cloud ที่ระบบรันอยู่ รวมถึงโฮสติ้งในไทยหรือในภูมิภาคเมื่อที่ตั้งของข้อมูลสำคัญ และเช็กเป็นประจำว่าไฟล์สำรองกู้คืนได้จริง ถ้าคุณอยากเก็บโฮสติ้งไว้เอง เราก็ทำงานร่วมกับทีม IT ของคุณ'},
      {q: 'ลองใช้แบบสั้นๆ หรือขอแค่ตรวจสุขภาพระบบก่อนได้ไหม?', a: 'ได้ ลูกค้าหลายรายเริ่มจากการตรวจสุขภาพระบบแบบครั้งเดียว ซึ่งจะเห็นว่าระบบอยู่ในสภาพไหนและแผนดูแลที่เหมาะควรมีอะไรบ้าง โดยไม่มีข้อผูกมัดว่าต้องทำต่อ'}
    ]
  const related     = isEN ? [
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'}
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
      heroImg="/images/services/support/hero.jpg"
      whyImg="/images/services/support/why1.jpg"
      whyImg2="/images/services/support/why2.jpg"
      featureImg="/images/services/support/feature.jpg"
      processImg="/images/services/support/process.jpg"
    />
  )
}
