import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Engineering / Cloud & DevOps'  : 'Engineering / Cloud & DevOps'
  const title    = isEN ? 'Infrastructure That Is'  : 'Infrastructure ที่'
  const subtitle = isEN ? 'Secure and Ready to Scale'    : 'ปลอดภัยและพร้อม Scale'
  const heroDesc = isEN ? 'A good cloud setup is mostly invisible: releases go out on a Tuesday afternoon without drama, traffic spikes do not wake anyone up, and the monthly bill holds no surprises. Haliviq designs the cloud foundation, builds the deployment pipelines, writes the infrastructure as code, and runs the monitoring that keeps your product reliable. We work on AWS, GCP and Azure, and we pick based on your workload rather than on a favourite vendor.'  : 'Cloud ที่ตั้งไว้ดีแทบไม่มีใครรู้สึกถึงมัน ปล่อยเวอร์ชันใหม่บ่ายวันอังคารได้สบายๆ ทราฟฟิกพุ่งก็ไม่ต้องมีใครตื่นมากลางดึก และบิลสิ้นเดือนไม่มีเซอร์ไพรส์ Haliviq ออกแบบรากฐาน Cloud สร้าง Deployment Pipeline เขียน Infrastructure as Code และดูแลระบบติดตามที่ทำให้ผลิตภัณฑ์ของคุณเสถียร เราทำงานบน AWS, GCP และ Azure และเลือกตามลักษณะงานของคุณ ไม่ได้เลือกเจ้าที่เราชอบเป็นพิเศษ'
  const whyTitle = isEN ? 'Why on-premise is holding your team back'    : 'ทำไม On-premise ถึงฉุดรั้งทีมของคุณ'
  const whyDesc  = isEN ? 'Owning servers means paying for hardware before you know how much you will need, patching machines by hand, and waiting weeks to add capacity when a campaign takes off. Cloud turns that into something you can resize in minutes and pay for by use, so your engineers spend their time on the product instead of on the server room.'  : 'การมีเซิร์ฟเวอร์เป็นของตัวเองหมายถึงต้องจ่ายค่าเครื่องก่อนจะรู้ว่าต้องใช้เท่าไหร่ ต้องแพตช์เครื่องด้วยมือ และต้องรอเป็นสัปดาห์กว่าจะเพิ่มกำลังได้ตอนแคมเปญเริ่มติด Cloud เปลี่ยนเรื่องพวกนี้ให้ปรับขนาดได้ในไม่กี่นาทีและจ่ายตามที่ใช้ วิศวกรของคุณจะได้ใช้เวลากับผลิตภัณฑ์ ไม่ใช่กับห้องเซิร์ฟเวอร์'
  const ctaTitle = isEN ? 'Ready to move to the cloud?'    : 'พร้อมย้ายไป Cloud หรือยัง?'
  const ctaDesc  = isEN ? 'Ask for a free Cloud Readiness Assessment. We review what you run today, sketch a migration path in order of risk, and give you a first estimate of what you could save each month.'   : 'ขอให้เราประเมินความพร้อมขึ้น Cloud ให้ฟรี เราจะดูว่าตอนนี้คุณรันอะไรอยู่ วางเส้นทางย้ายเรียงตามความเสี่ยง และประเมินคร่าวๆ ว่าจะประหยัดได้เดือนละเท่าไหร่'
  const heroBullets = isEN ? [
      'Cloud architecture design on AWS, GCP or Azure, matched to your workload and budget',
      'Legacy system migration to cloud with zero data loss',
      'CI/CD pipeline setup and a release routine your whole team can follow',
      'Infrastructure as Code with Terraform or Pulumi, so every environment can be rebuilt',
      '24/7 monitoring, alerting and incident response',
    ] : [
      'ออกแบบสถาปัตยกรรม Cloud บน AWS, GCP หรือ Azure ให้ตรงกับงานและงบของคุณ',
      'ย้ายระบบเก่าขึ้น Cloud โดยไม่สูญเสียข้อมูล',
      'ตั้งค่า CI/CD Pipeline และวางขั้นตอนปล่อยงานที่ทั้งทีมทำตามได้',
      'Infrastructure as Code ด้วย Terraform หรือ Pulumi ทำให้สร้างทุกสภาพแวดล้อมขึ้นมาใหม่ได้',
      'ติดตามระบบ แจ้งเตือน และรับมือเหตุขัดข้อง ตลอด 24/7',
    ]
  const whyPoints   = isEN ? [
      'Auto-scaling adds servers when traffic climbs and removes them when it falls, so you neither crash under load nor pay for idle machines',
      'Managed services for databases, queues and storage remove whole categories of chores such as patching, backups and failover',
      'GitOps and Infrastructure as Code keep your environment in version control, so a lost region or a mistaken change can be rebuilt from the repository',
      'Running in more than one region reduces latency for overseas users and keeps the business running if one data centre has a bad day',
      'FinOps habits such as right-sizing and reserved capacity typically bring cloud spend down by 20-35%',
    ] : [
      'Auto-scaling เพิ่มเซิร์ฟเวอร์เมื่อทราฟฟิกขึ้นและลดเมื่อลง ระบบไม่ล่มตอนคนเข้ามาก และไม่ต้องจ่ายค่าเครื่องที่ว่างอยู่',
      'Managed Service สำหรับฐานข้อมูล คิว และที่เก็บไฟล์ ตัดงานจุกจิกไปทั้งหมวด ทั้งการแพตช์ การสำรองข้อมูล และ Failover',
      'GitOps และ Infrastructure as Code เก็บสภาพแวดล้อมไว้ใน Version Control ถ้า Region ล่มหรือมีคนแก้ผิด ก็สร้างกลับจาก Repository ได้',
      'การรันมากกว่าหนึ่ง Region ลดความหน่วงให้ผู้ใช้ต่างประเทศ และทำให้ธุรกิจเดินต่อได้แม้ดาต้าเซ็นเตอร์หนึ่งมีปัญหา',
      'นิสัยแบบ FinOps เช่น ปรับขนาดเครื่องให้พอดีและจองทรัพยากรล่วงหน้า มักลดค่า Cloud ได้ 20-35%',
    ]
  const outcomes    = isEN ? [
      {stat: '99.99%', label: 'Uptime SLA', desc: 'Multi-AZ architecture'},
      {stat: '35%', label: 'Cloud Cost Reduction', desc: 'With FinOps optimisation'},
      {stat: '<5min', label: 'Deployment Time', desc: 'Automated CI/CD pipeline'},
      {stat: '0', label: 'Manual Server Patches', desc: 'Fully automated updates'}
    ] : [
      {stat: '99.99%', label: 'Uptime SLA', desc: 'สถาปัตยกรรม Multi-AZ'},
      {stat: '35%', label: 'ลดค่า Cloud', desc: 'ด้วยการปรับแบบ FinOps'},
      {stat: '<5 นาที', label: 'เวลา Deploy', desc: 'CI/CD Pipeline อัตโนมัติ'},
      {stat: '0', label: 'แพตช์เซิร์ฟเวอร์ด้วยมือ', desc: 'อัปเดตอัตโนมัติทั้งหมด'}
    ]
  const features    = isEN ? [
      {icon: 'ti-cloud', title: 'Cloud Architecture Design', desc: 'We choose services, network layout and account structure on AWS, GCP or Azure to fit your traffic pattern, budget and compliance needs, and we document the reasons so future engineers understand why it looks the way it does.'},
      {icon: 'ti-arrows-move', title: 'Cloud Migration', desc: 'Moving from on-premise or from another cloud by lift-and-shift when speed matters, re-platform when a managed service saves effort, or re-architect when the old design is the real problem. We recommend one per system, not one for everything.'},
      {icon: 'ti-code-asterisk', title: 'Infrastructure as Code', desc: 'Servers, networks and permissions are described in Terraform or Pulumi files, reviewed like application code, and applied by a pipeline. Staging and production stay identical, and nobody has to remember which console button they clicked.'},
      {icon: 'ti-git-branch', title: 'CI/CD Pipeline', desc: 'Every commit is built and tested automatically, and approved changes are deployed with a single step or none at all. Small, frequent releases are easier to review and easier to roll back than one big monthly drop.'},
      {icon: 'ti-activity', title: 'Monitoring & Observability', desc: 'Prometheus, Grafana, CloudWatch or Datadog dashboards and alerts that tell you something is wrong before customers do, together with runbooks that say what to check first.'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Optimisation', desc: 'We tag resources by team and product, find idle and oversized machines, and use reserved or spot capacity where it is safe. You receive a regular cost report you can actually read.'}
    ] : [
      {icon: 'ti-cloud', title: 'Cloud Architecture Design', desc: 'เราเลือกบริการ ผังเครือข่าย และโครงสร้างบัญชีบน AWS, GCP หรือ Azure ให้เข้ากับรูปแบบทราฟฟิก งบ และข้อกำหนด Compliance ของคุณ พร้อมจดเหตุผลไว้ วิศวกรรุ่นต่อไปจะได้เข้าใจว่าทำไมออกแบบแบบนี้'},
      {icon: 'ti-arrows-move', title: 'Cloud Migration', desc: 'ย้ายจาก On-premise หรือ Cloud เจ้าอื่น ด้วย Lift-and-shift เมื่อต้องการความเร็ว Re-platform เมื่อ Managed Service ช่วยลดงาน หรือ Re-architect เมื่อปัญหาจริงคือดีไซน์เดิม เราแนะนำเป็นรายระบบ ไม่ใช่วิธีเดียวกับทุกอย่าง'},
      {icon: 'ti-code-asterisk', title: 'Infrastructure as Code', desc: 'เซิร์ฟเวอร์ เครือข่าย และสิทธิ์ ถูกเขียนเป็นไฟล์ Terraform หรือ Pulumi รีวิวเหมือนโค้ดแอป และ Apply ผ่าน Pipeline Staging กับ Production จึงเหมือนกัน และไม่ต้องมานั่งจำว่าเมื่อก่อนกดปุ่มไหนใน Console'},
      {icon: 'ti-git-branch', title: 'CI/CD Pipeline', desc: 'ทุก Commit ถูก Build และทดสอบอัตโนมัติ และการเปลี่ยนแปลงที่อนุมัติแล้วจะ Deploy ด้วยขั้นตอนเดียวหรือไม่ต้องกดเลย การปล่อยทีละน้อยบ่อยๆ รีวิวง่ายและย้อนกลับง่ายกว่าปล่อยก้อนใหญ่เดือนละครั้ง'},
      {icon: 'ti-activity', title: 'Monitoring & Observability', desc: 'Dashboard และการแจ้งเตือนด้วย Prometheus, Grafana, CloudWatch หรือ Datadog ให้คุณรู้ว่ามีอะไรผิดปกติก่อนลูกค้าจะรู้ พร้อมคู่มือรับมือเหตุ (Runbook) ที่บอกว่าต้องเช็กอะไรก่อน'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Optimization', desc: 'เราติดแท็กทรัพยากรตามทีมและผลิตภัณฑ์ หาเครื่องที่ว่างหรือใหญ่เกินจำเป็น และใช้ Reserved หรือ Spot Instance ในที่ที่ปลอดภัย คุณจะได้รายงานค่าใช้จ่ายเป็นระยะที่อ่านแล้วเข้าใจจริงๆ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Cloud Assessment', desc: 'We inventory the workloads you run today, trace which systems depend on which, and rank them by migration risk so the plan starts with the easy wins.'},
      {no: '02', title: 'Architecture Design', desc: 'We draw the target architecture, network layout and security boundaries, and review it with your team before anything is built.'},
      {no: '03', title: 'IaC Setup', desc: 'We write the infrastructure as code and the first CI/CD pipelines, so the landing zone exists and can be rebuilt on demand.'},
      {no: '04', title: 'Migration & Testing', desc: 'Workloads move in small batches. Each batch is tested layer by layer, and its performance is compared with the old system before the old one is switched off.'},
      {no: '05', title: 'Optimise & Monitor', desc: 'After the move we tune cost, speed and security using real usage data, and keep 24/7 monitoring running with alerts that reach a person.'}
    ] : [
      {no: '01', title: 'Cloud Assessment', desc: 'เราสำรวจงานที่คุณรันอยู่ตอนนี้ ไล่ดูว่าระบบไหนพึ่งระบบไหน แล้วจัดอันดับตามความเสี่ยงในการย้าย แผนจะได้เริ่มจากตัวที่ง่ายก่อน'},
      {no: '02', title: 'Architecture Design', desc: 'วาดสถาปัตยกรรมปลายทาง ผังเครือข่าย และขอบเขตความปลอดภัย แล้วรีวิวกับทีมคุณก่อนเริ่มสร้างอะไร'},
      {no: '03', title: 'IaC Setup', desc: 'เขียน Infrastructure as Code และ CI/CD Pipeline ชุดแรก เพื่อให้พื้นที่รองรับระบบพร้อมและสร้างใหม่ได้ทุกเมื่อ'},
      {no: '04', title: 'Migration & Testing', desc: 'ย้ายงานทีละชุดเล็กๆ ทดสอบทีละชั้น และเทียบประสิทธิภาพกับระบบเดิมก่อนปิดระบบเดิม'},
      {no: '05', title: 'Optimize & Monitor', desc: 'หลังย้ายเสร็จ เราปรับต้นทุน ความเร็ว และความปลอดภัยจากข้อมูลการใช้งานจริง และให้ระบบติดตาม 24/7 ทำงานต่อ โดยการแจ้งเตือนถึงคนจริงๆ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'E-Commerce · Nationwide', title: 'AWS Migration Cuts Infrastructure Cost 40%', desc: 'The shop ran as one monolith on virtual machines. We re-architected it into containerised microservices on EKS, so each part scales on its own and unused capacity is no longer paid for.', result: 'Cost down 40%, Uptime 99.99%'},
      {tag: 'FinTech · Bangkok', title: 'CI/CD Pipeline Cuts Deployment Time 95%', desc: 'Releases used to be a 2-hour manual checklist done by a senior engineer. A tested pipeline now deploys in 5 minutes and rolls back automatically if checks fail.', result: 'Deployment Time down 95%'},
      {tag: 'Healthcare · Nationwide', title: 'Multi-region Setup for 20 Hospitals', desc: 'A disaster recovery design with a recovery time objective under 1 hour and controls aligned to HIPAA, so hospital systems can fail over without losing patient records.', result: '99.99% Availability'}
    ] : [
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ย้ายไป AWS ลดต้นทุน Infrastructure 40%', desc: 'ร้านค้าออนไลน์เดิมเป็น Monolith บน Virtual Machine เรา Re-architect เป็น Microservices บน Container ใน EKS ให้แต่ละส่วนขยายได้เอง และไม่ต้องจ่ายค่ากำลังที่ไม่ได้ใช้', result: 'ต้นทุนลด 40%, Uptime 99.99%'},
      {tag: 'FinTech · กรุงเทพฯ', title: 'CI/CD Pipeline ลดเวลา Deploy 95%', desc: 'เมื่อก่อนการปล่อยเวอร์ชันคือเช็กลิสต์ด้วยมือ 2 ชั่วโมงที่ต้องให้วิศวกรอาวุโสทำ ตอนนี้ Pipeline ที่ผ่านการทดสอบ Deploy ได้ใน 5 นาที และย้อนกลับเองถ้าตรวจไม่ผ่าน', result: 'เวลา Deploy ลด 95%'},
      {tag: 'Healthcare · ทั่วประเทศ', title: 'ตั้งค่าหลาย Region สำหรับ 20 โรงพยาบาล', desc: 'ออกแบบระบบกู้คืนจากภัยพิบัติที่ RTO ต่ำกว่า 1 ชั่วโมง พร้อมมาตรการที่สอดคล้องกับ HIPAA ระบบโรงพยาบาลสลับไปใช้อีกฝั่งได้โดยไม่เสียเวชระเบียน', result: '99.99% Availability'}
    ]
  const faqs        = isEN ? [
      {q: 'AWS, GCP, or Azure — which is better?', a: 'It depends on what you run and what you already use. AWS has the widest range of services, GCP is strong for data and machine learning, and Azure fits companies already built around Microsoft products. We compare them against your workload and cost, and show you the numbers.'},
      {q: 'Does migration require downtime?', a: 'Often not. We use blue-green and canary releases and database replication, so the new environment runs alongside the old one and traffic is switched over once it has been verified. Some systems still need a short maintenance window, and we will say so up front.'},
      {q: 'Is cloud more secure than on-premise?', a: 'The big providers spend on physical and platform security far beyond what most companies can. But security is a shared responsibility: the provider secures the data centre, and you secure your configuration, access and data. We set up the second part correctly and check it regularly.'},
      {q: 'Is cloud expensive?', a: 'It depends on how it is used. An unmanaged cloud account can cost more than a server room, while a well-tuned one is usually cheaper once you count hardware, power, cooling and staff time. That is why we include cost review in every project.'},
      {q: 'Can we keep data in Thailand?', a: 'Yes, where it matters. We can place data and workloads in a region or local provider that meets your residency or PDPA requirements, and design backups and failover around that choice.'},
      {q: 'What is Infrastructure as Code and why does it matter?', a: 'It means your servers and networks are defined in files instead of clicked together in a console. You can review changes, see who changed what, and rebuild the whole environment in a new account if something goes wrong.'},
      {q: 'Do you provide support after migration?', a: 'Yes. We offer monitoring, incident response, patching and monthly cost and performance reviews, or we can train your own team and hand over the runbooks if you prefer to run it in-house.'}
    ] : [
      {q: 'AWS, GCP หรือ Azure ดีกว่ากัน?', a: 'ขึ้นอยู่กับสิ่งที่คุณรันและสิ่งที่ใช้อยู่แล้ว AWS มีบริการหลากหลายที่สุด GCP แข็งด้านข้อมูลและ Machine Learning ส่วน Azure เหมาะกับบริษัทที่ใช้ผลิตภัณฑ์ Microsoft เป็นหลัก เราเทียบทั้งสามเจ้ากับงานและต้นทุนของคุณ แล้วโชว์ตัวเลขให้ดู'},
      {q: 'การย้ายต้องหยุดระบบไหม?', a: 'หลายครั้งไม่ต้อง เราใช้ Blue-green, Canary และ Database Replication ให้สภาพแวดล้อมใหม่รันคู่กับของเดิม แล้วสลับทราฟฟิกเมื่อตรวจแล้วว่าใช้ได้ บางระบบยังต้องมีช่วงปิดปรับปรุงสั้นๆ ซึ่งเราจะบอกล่วงหน้า'},
      {q: 'ปลอดภัยกว่า On-premise ไหม?', a: 'ผู้ให้บริการรายใหญ่ลงทุนด้านความปลอดภัยทั้งทางกายภาพและแพลตฟอร์มมากกว่าที่บริษัทส่วนใหญ่ทำได้ แต่ความปลอดภัยเป็นความรับผิดชอบร่วมกัน ผู้ให้บริการดูแลดาต้าเซ็นเตอร์ ส่วนคุณดูแลการตั้งค่า สิทธิ์เข้าถึง และข้อมูล เราช่วยตั้งส่วนหลังให้ถูกและตรวจเป็นประจำ'},
      {q: 'ค่าใช้จ่าย Cloud แพงไหม?', a: 'ขึ้นอยู่กับวิธีใช้ บัญชี Cloud ที่ไม่มีใครดูแลอาจแพงกว่าห้องเซิร์ฟเวอร์ แต่ถ้าปรับให้ดีมักถูกกว่า เมื่อนับค่าเครื่อง ค่าไฟ ค่าทำความเย็น และเวลาของพนักงานด้วย เราจึงใส่การรีวิวต้นทุนไว้ในทุกโปรเจกต์'},
      {q: 'เก็บข้อมูลไว้ในประเทศไทยได้ไหม?', a: 'ได้ ในกรณีที่จำเป็น เราวางข้อมูลและระบบไว้ใน Region หรือผู้ให้บริการในประเทศที่ตรงกับข้อกำหนดเรื่องที่เก็บข้อมูลหรือ PDPA ของคุณ แล้วออกแบบการสำรองข้อมูลและ Failover ตามตัวเลือกนั้น'},
      {q: 'Infrastructure as Code คืออะไร และสำคัญอย่างไร?', a: 'คือการเขียนเซิร์ฟเวอร์และเครือข่ายเป็นไฟล์ แทนการคลิกตั้งค่าใน Console คุณรีวิวการเปลี่ยนแปลงได้ ดูได้ว่าใครแก้อะไร และสร้างทั้งสภาพแวดล้อมขึ้นใหม่ในบัญชีอื่นได้ถ้าเกิดเหตุ'},
      {q: 'หลังย้ายเสร็จมีบริการดูแลต่อไหม?', a: 'มี เรามีบริการติดตามระบบ รับมือเหตุ แพตช์ และรีวิวต้นทุนกับประสิทธิภาพรายเดือน หรือถ้าคุณอยากดูแลเองก็ฝึกทีมและส่งมอบ Runbook ให้ได้'}
    ]
  const related     = isEN ? [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Automation', href: '/services/automation'}
    ] : [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Automation', href: '/services/automation'}
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
      heroImg="/images/services/cloud-devops/hero.jpg"
      whyImg="/images/services/cloud-devops/why1.jpg"
      whyImg2="/images/services/cloud-devops/why2.jpg"
      featureImg="/images/services/cloud-devops/feature.jpg"
      processImg="/images/services/cloud-devops/process.jpg"
    />
  )
}
