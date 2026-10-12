import Link from 'next/link'
import TechGlyph from '@/components/TechGlyph'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? "Technology & Hi-Tech Software & Digital Solutions | Haliviq" : "เทคโนโลยีและไฮเทค | โซลูชันดิจิทัล | Haliviq"
  const description = isEN
    ? "Engineering help for startups and tech companies: MVPs, SaaS platforms, APIs, cloud setup, and code reviews that get you ready for investors."
    : "งานวิศวกรรมสำหรับสตาร์ทอัพและบริษัทเทคโนโลยี ตั้งแต่ MVP แพลตฟอร์ม SaaS API การตั้งค่า Cloud ไปจนถึงตรวจโค้ดให้พร้อมรับนักลงทุน"
  const url = `https://haliviq.com/${params.lang}/industries/technology`
  return { title, description, alternates: alt(url), openGraph: { title, description, url }, twitter: { card: 'summary_large_image', title, description } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Technology & Hi-Tech' : 'อุตสาหกรรม / เทคโนโลยีและไฮเทค'
  const heroSubhead = isEN
    ? 'Engineering help for startups and tech companies: MVPs, SaaS platforms, APIs, cloud setup, and code reviews that get you ready for investors.'
    : 'งานวิศวกรรมสำหรับสตาร์ทอัพและบริษัทเทคโนโลยี ตั้งแต่ MVP แพลตฟอร์ม SaaS API การตั้งค่า Cloud ไปจนถึงตรวจโค้ดให้พร้อมรับนักลงทุน'

  const challenges = isEN ? [
    { icon: 'ti-rocket', title: 'Speed-to-Market Pressure', desc: 'A founder with a demo date, a pilot customer waiting, or a funding round to close has a few months to prove that people want the product. The risk is not shipping slowly, it is shipping something that has to be thrown away right after the first customers arrive. We help you decide the smallest version worth testing, pick a stack your next hires already know, and keep the parts that will survive, such as authentication, data model, and deployment, built properly from week one.' },
    { icon: 'ti-users-group', title: 'Scaling Engineering Teams', desc: 'Hiring good engineers in Bangkok takes months, and the first five or six people often write code in five different styles. Shortcuts taken when the team was two people turn into a codebase that only the founders understand. We help set up code review habits, coding conventions, test coverage where it matters, and written documentation, so a new developer can ship something useful in their first week instead of their first quarter.' },
    { icon: 'ti-cloud-computing', title: 'Infrastructure Cost & Complexity', desc: 'Early infrastructure choices are made in an afternoon and paid for for years. A cloud bill that was a few thousand baht at launch can grow faster than revenue, and a setup that nobody has documented becomes a risk the day the one person who built it leaves. We review what you run today, show where money goes, and propose changes in small, reversible steps, including where data should be hosted when Thai customers or PDPA are a factor.' },
    { icon: 'ti-clipboard-check', title: 'Technical Due-Diligence Readiness', desc: 'Before a funding round or an acquisition, investors and buyers send engineers to ask how the product is built, who owns the code, where the customer data lives, and what happens when something breaks. Teams that have been busy shipping often cannot answer quickly. We run the same questions ahead of time, in a friendly way, and give you a short list of gaps ordered by how much they matter, so you can fix the important ones before the call.' },
  ] : [
    { icon: 'ti-rocket', title: 'แรงกดดันให้ออกสู่ตลาดให้เร็ว', desc: 'ผู้ก่อตั้งที่มีวันเดโม ลูกค้าทดลองใช้ที่รออยู่ หรือรอบระดมทุนที่ต้องปิด มีเวลาไม่กี่เดือนในการพิสูจน์ว่าคนอยากใช้ผลิตภัณฑ์จริง ความเสี่ยงไม่ได้อยู่ที่ช้า แต่อยู่ที่ปล่อยของที่ต้องทิ้งทันทีพอลูกค้ากลุ่มแรกเข้ามา เราช่วยตัดสินใจว่าเวอร์ชันเล็กที่สุดที่ควรทดสอบคืออะไร เลือกเทคโนโลยีที่คนที่คุณจะจ้างต่อรู้จักอยู่แล้ว และทำส่วนที่ต้องอยู่ยาว เช่น ระบบล็อกอิน โครงสร้างข้อมูล และการ deploy ให้ถูกต้องตั้งแต่สัปดาห์แรก' },
    { icon: 'ti-users-group', title: 'การขยายทีมวิศวกรรม', desc: 'การหาวิศวกรเก่ง ๆ ในกรุงเทพฯ ใช้เวลาเป็นเดือน และคนห้าหกคนแรกมักเขียนโค้ดกันคนละสไตล์ ทางลัดที่ทำตอนทีมมีแค่สองคนกลายเป็นโค้ดที่มีแต่ผู้ก่อตั้งที่เข้าใจ เราช่วยวางวัฒนธรรมรีวิวโค้ด มาตรฐานการเขียน เทสต์ในจุดที่สำคัญ และเอกสารที่เขียนไว้ให้ครบ คนใหม่จะส่งงานที่ใช้ได้จริงภายในสัปดาห์แรก ไม่ต้องรอไตรมาสแรก' },
    { icon: 'ti-cloud-computing', title: 'ต้นทุนและความซับซ้อนของโครงสร้างพื้นฐาน', desc: 'โครงสร้างพื้นฐานช่วงแรกมักเลือกกันในบ่ายเดียว แต่จ่ายค่าใช้จ่ายกันเป็นปี ค่า Cloud ที่ตอนเปิดตัวแค่ไม่กี่พันบาทโตเร็วกว่ารายได้ได้ และระบบที่ไม่มีใครจดเอกสารไว้คือความเสี่ยง วันที่คนเดียวที่ตั้งมันขึ้นมาลาออก เราช่วยดูว่าตอนนี้คุณรันอะไรอยู่ เงินหมดไปกับอะไร แล้วเสนอการปรับเป็นก้าวเล็ก ๆ ที่ย้อนกลับได้ รวมถึงเรื่องที่เก็บข้อมูลควรอยู่ที่ไหนเมื่อมีลูกค้าไทยหรือเรื่อง PDPA เข้ามาเกี่ยว' },
    { icon: 'ti-clipboard-check', title: 'ความพร้อมรับการตรวจสอบทางเทคนิค', desc: 'ก่อนระดมทุนหรือถูกซื้อกิจการ นักลงทุนและผู้ซื้อจะส่งวิศวกรมาถามว่าผลิตภัณฑ์สร้างยังไง ใครเป็นเจ้าของโค้ด ข้อมูลลูกค้าอยู่ที่ไหน และถ้าระบบพังจะเกิดอะไรขึ้น ทีมที่มัวแต่ส่งงานมักตอบไม่ทัน เราซ้อมถามคำถามเดียวกันให้ล่วงหน้าแบบเป็นกันเอง แล้วสรุปช่องว่างเป็นรายการสั้น ๆ เรียงตามความสำคัญ คุณจะได้แก้เรื่องใหญ่ก่อนวันที่นักลงทุนโทรมา' },
  ]

  const metrics = [
    { value: '$1.3T', label: isEN ? 'Global SaaS Market Size by 2030' : 'ขนาดตลาด SaaS ทั่วโลกภายในปี 2030', source: 'Grand View Research SaaS Market Report, 2024' },
    { value: '67%', label: isEN ? 'Startups Citing Engineering Capacity as Top Bottleneck' : 'สตาร์ทอัพที่บอกว่ากำลังคนด้านวิศวกรรมเป็นคอขวดอันดับหนึ่ง', source: 'CB Insights Startup Failure Report, 2024' },
    { value: '40%', label: isEN ? 'Faster Time-to-Market with Experienced Dev Partners' : 'ออกสู่ตลาดได้เร็วขึ้นเมื่อทำงานกับพันธมิตรพัฒนาที่มีประสบการณ์', source: 'Deloitte Tech Trends Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-code', title: 'MVP Development', desc: 'A first working version of your product built in a few focused sprints, with real users in mind. We start with a short workshop to cut the idea down to the one journey that proves the value, then design, build, and launch it with analytics so you can see what people do. You own the code from day one, and it is structured so that the second version builds on the first instead of replacing it.' },
    { icon: 'ti-users', title: 'Forward-Deployed Engineering Teams', desc: 'Engineers and a designer who join your team\'s stand-ups, work in your repository and your ticket board, and ship against your roadmap. Good when you need extra hands for three to six months without a hiring cycle, or when you need a specific skill such as mobile, data, or DevOps. We agree on a working rhythm up front and write down what we build so your own team can take it over.' },
    { icon: 'ti-cloud', title: 'SaaS Platform Builds', desc: 'The parts every SaaS product needs and nobody enjoys building twice: multi-tenant data separation, sign-up and role-based access, subscription billing, usage tracking, an admin console, and email notifications. We build them so you can add billing in baht or US dollars, invoicing with Thai tax details where needed, and later single sign-on for larger customers.' },
    { icon: 'ti-plug', title: 'API & Infrastructure Design', desc: 'Clear, versioned APIs, a sensible service layout, and cloud infrastructure described in code with Terraform, so environments can be rebuilt and reviewed. We include logging, alerts, backups, and a cost view from the start. It suits teams opening an API to partners, splitting a growing app into services, or tidying infrastructure that grew by accident.' },
    { icon: 'ti-search', title: 'Technical Due-Diligence Audits', desc: 'An independent review of your code, architecture, security practices, and team processes, written for the people who will read it: founders, investors, or an acquirer\'s engineers. You get a plain-language report with findings sorted by severity, what each would cost to fix, and a suggested order. We review and report; we do not offer to certify a result to any third party.' },
    { icon: 'ti-adjustments-alt', title: 'DevOps & Scaling Support', desc: 'Automated builds and deployments with CI/CD, infrastructure as code, monitoring, on-call basics, and load testing before a big launch. We set it up with your team and write a short runbook for the incidents you are most likely to see, so a failed deploy at 11 pm is a ten-minute fix, not a crisis. Works with AWS and other major clouds.' },
  ] : [
    { icon: 'ti-code', title: 'MVP Development', desc: 'ผลิตภัณฑ์เวอร์ชันแรกที่ใช้งานได้จริง สร้างในไม่กี่ Sprint โดยคิดถึงผู้ใช้จริงตั้งแต่ต้น เราเริ่มจากเวิร์กช็อปสั้น ๆ ตัดไอเดียให้เหลือเส้นทางเดียวที่พิสูจน์คุณค่าได้ แล้วออกแบบ สร้าง และปล่อยพร้อมระบบวัดผล คุณจะเห็นว่าคนใช้ยังไง โค้ดเป็นของคุณตั้งแต่วันแรก และจัดโครงสร้างให้เวอร์ชันสองต่อยอดจากเวอร์ชันแรกได้ ไม่ต้องทิ้งแล้วทำใหม่' },
    { icon: 'ti-users', title: 'Forward-Deployed Engineering Teams', desc: 'วิศวกรและดีไซเนอร์ที่เข้าไปนั่งเป็นส่วนหนึ่งของทีมคุณ เข้าประชุมประจำวัน ทำงานใน repository และบอร์ดงานเดียวกัน และส่งงานตาม Roadmap ของคุณ เหมาะเมื่อต้องการกำลังเพิ่มสามถึงหกเดือนโดยไม่ต้องรอรอบจ้างงาน หรือต้องการทักษะเฉพาะ เช่น มือถือ ข้อมูล หรือ DevOps เราตกลงจังหวะการทำงานกันก่อน และจดสิ่งที่สร้างไว้เพื่อให้ทีมคุณรับช่วงต่อได้' },
    { icon: 'ti-cloud', title: 'SaaS Platform Builds', desc: 'ส่วนที่ผลิตภัณฑ์ SaaS ทุกตัวต้องมีและไม่มีใครอยากทำสองรอบ ทั้งการแยกข้อมูลลูกค้าแต่ละราย ระบบสมัครและกำหนดสิทธิ์ตามบทบาท การเก็บค่าสมาชิก การวัดการใช้งาน หน้าแอดมิน และอีเมลแจ้งเตือน เราสร้างให้รองรับการเก็บเงินเป็นบาทหรือดอลลาร์ ใบกำกับภาษีที่มีรายละเอียดตามที่ไทยกำหนดเมื่อจำเป็น และเพิ่ม single sign-on ให้ลูกค้ารายใหญ่ได้ภายหลัง' },
    { icon: 'ti-plug', title: 'API & Infrastructure Design', desc: 'API ที่ชัดเจนและมีเวอร์ชัน การแบ่งบริการอย่างเหมาะสม และโครงสร้าง Cloud ที่เขียนเป็นโค้ดด้วย Terraform ทำให้สร้างสภาพแวดล้อมใหม่และรีวิวได้ เรามีระบบ log การแจ้งเตือน การสำรองข้อมูล และหน้าดูค่าใช้จ่ายให้ตั้งแต่เริ่ม เหมาะกับทีมที่กำลังเปิด API ให้พาร์ตเนอร์ แยกแอปที่โตขึ้นเป็นหลายบริการ หรือจัดระเบียบระบบที่โตมาแบบไม่ได้วางแผน' },
    { icon: 'ti-search', title: 'Technical Due-Diligence Audits', desc: 'การตรวจโค้ด สถาปัตยกรรม แนวปฏิบัติด้านความปลอดภัย และกระบวนการทำงานของทีมโดยผู้ตรวจอิสระ เขียนรายงานให้คนที่ต้องอ่านจริง ทั้งผู้ก่อตั้ง นักลงทุน หรือวิศวกรฝั่งผู้ซื้อ คุณจะได้รายงานภาษาอ่านง่าย แยกข้อพบตามระดับความรุนแรง บอกว่าแก้แต่ละข้อใช้แรงประมาณเท่าไหร่ และเสนอลำดับการแก้ เราตรวจและรายงานเท่านั้น ไม่รับรองผลให้บุคคลที่สาม' },
    { icon: 'ti-adjustments-alt', title: 'DevOps & Scaling Support', desc: 'ระบบ build และ deploy อัตโนมัติด้วย CI/CD โครงสร้างพื้นฐานที่เขียนเป็นโค้ด ระบบติดตาม พื้นฐานการเข้าเวรรับเหตุ และการทดสอบโหลดก่อนเปิดตัวใหญ่ เราตั้งค่าร่วมกับทีมคุณ และเขียนคู่มือสั้น ๆ สำหรับเหตุที่น่าจะเจอบ่อยที่สุด deploy พังตอนสี่ทุ่มจะเป็นงานสิบนาที ไม่ใช่วิกฤต ใช้ได้กับ AWS และ Cloud รายใหญ่อื่น ๆ' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'AWS', 'GraphQL', 'Redis', 'Terraform', 'CI/CD', 'Microservices', 'Docker', 'NestJS', 'Fastify', 'Hono']

  const useCases = isEN ? [
    { no: '01', title: 'Funded Startup MVP Build', desc: 'A seed-to-Series-A startup needs a production-ready product to show customers and investors. We handle technical architecture, cloud setup, and the build itself, working in short sprints with demos every week or two, and reach a production-ready launch in under 12 weeks. The founders end the project with a codebase, documentation, and a deployment they can hand to their first hires.' },
    { no: '02', title: 'SaaS Platform Re-Architecture', desc: 'A monolithic SaaS product that has become slow to change is migrated, piece by piece, to a scalable microservices architecture while customers keep using it. We pick the parts that hurt most first, run old and new side by side, and measure the result. The project cuts infrastructure cost while improving reliability and how often the team can deploy.' },
    { no: '03', title: 'Technical Due-Diligence Engagement', desc: 'An independent codebase, security, and architecture audit ahead of a Series B raise. We interview the engineers, read the code, and check how the system is hosted and backed up, then deliver a remediation roadmap that satisfied investor requirements. Founders can walk into the investor technical session knowing the answers.' },
  ] : [
    { no: '01', title: 'Funded Startup MVP Build', desc: 'สตาร์ทอัพระดับ Seed ถึง Series A ที่ต้องการผลิตภัณฑ์พร้อมใช้งานจริงไว้โชว์ลูกค้าและนักลงทุน เราดูแลตั้งแต่สถาปัตยกรรม การตั้งค่า Cloud ไปจนถึงตัวงาน ทำเป็น Sprint สั้น ๆ มีเดโมทุกหนึ่งถึงสองสัปดาห์ และปล่อยใช้งานจริงได้ภายในไม่ถึง 12 สัปดาห์ จบโปรเจกต์ผู้ก่อตั้งจะได้โค้ด เอกสาร และระบบ deploy ที่ส่งต่อให้พนักงานคนแรก ๆ ได้เลย' },
    { no: '02', title: 'SaaS Platform Re-Architecture', desc: 'ผลิตภัณฑ์ SaaS แบบ Monolithic ที่แก้ทีไรก็ช้า ย้ายไปเป็นสถาปัตยกรรม Microservices ที่ขยายได้ทีละส่วน ระหว่างที่ลูกค้ายังใช้งานอยู่ เราเลือกส่วนที่เป็นปัญหาที่สุดก่อน รันของเก่าคู่กับของใหม่ และวัดผลทุกขั้น โปรเจกต์นี้ลดต้นทุนโครงสร้างพื้นฐาน พร้อมทำให้ระบบเสถียรขึ้นและทีม deploy ได้บ่อยขึ้น' },
    { no: '03', title: 'Technical Due-Diligence Engagement', desc: 'การตรวจ Codebase ความปลอดภัย และสถาปัตยกรรมโดยผู้ตรวจอิสระ ก่อนระดมทุนรอบ Series B เราสัมภาษณ์วิศวกร อ่านโค้ด และตรวจว่าระบบโฮสต์และสำรองข้อมูลยังไง แล้วส่งแผนแก้ไขที่ตรงกับข้อกำหนดของนักลงทุน ผู้ก่อตั้งเดินเข้าห้องคุยเทคนิคกับนักลงทุนโดยรู้คำตอบอยู่แล้ว' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{isEN ? 'Deploy / Pipeline' : 'Deploy / Pipeline'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-xl mb-4 p-4" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <div className="flex items-center gap-2 mb-3">
              <i className="ti ti-terminal-2" style={{ fontSize: 18, color: 'var(--accent-2)', animation: 'iconFloat 3s ease-in-out infinite' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgb(var(--fg) / 0.75)', fontFamily: 'monospace' }}>{isEN ? 'build → test → deploy' : 'build → test → deploy'}</span>
            </div>
            <div className="space-y-2">
              {[
                { label: isEN ? 'Build' : 'Build', w: '100%' },
                { label: isEN ? 'Test Suite' : 'Test Suite', w: '92%' },
                { label: isEN ? 'Deploy' : 'Deploy', w: '78%' },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px]" style={{ color: 'rgb(var(--fg) / 0.6)', fontFamily: 'monospace' }}>{row.label}</span>
                    <i className="ti ti-circle-check" style={{ fontSize: 12, color: 'var(--accent-2)' }} aria-hidden="true" />
                  </div>
                  <div className="w-full h-[4px] rounded-full overflow-hidden" style={{ background: 'rgb(var(--fg) / 0.08)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: row.w, background: 'linear-gradient(90deg, var(--purple-light), var(--lime))', animation: `barGrow 1.6s ease-out ${i * 0.15}s both` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'API Gateway' : 'API Gateway'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? 'Shipped to production.' : 'Shipped to production.'}</p>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Uptime' : 'Uptime'}</span>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-cpu" style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{isEN ? '99.98% · 30d avg' : '99.98% · เฉลี่ย 30 วัน'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Logs →' : 'ดู Logs →'}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Technology &' : 'เทคโนโลยี &'}<br />{isEN ? 'Hi-Tech' : 'ไฮเทค'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgb(var(--fg) / 0.2)', color: 'var(--ink)', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'We work with startups and technology companies that need to build quickly without creating a mess for later. That can mean a first MVP, a SaaS platform that needs billing and multi-tenant access, an API opened to partners, or a code and architecture review before a funding round. Our engineers join your team in your repository and sprint rhythm, and we leave behind documentation and handover notes so you are never dependent on us. We keep Thai-market details in mind where they matter, such as PDPA, baht billing, tax invoices, and where customer data is hosted.'
                : 'เราทำงานกับสตาร์ทอัพและบริษัทเทคโนโลยีที่ต้องการสร้างให้เร็วโดยไม่ทิ้งความยุ่งเหยิงไว้ข้างหลัง อาจเป็น MVP ชิ้นแรก แพลตฟอร์ม SaaS ที่ต้องมีระบบเก็บเงินและแยกข้อมูลลูกค้า API ที่เปิดให้พาร์ตเนอร์ หรือการตรวจโค้ดและสถาปัตยกรรมก่อนระดมทุน วิศวกรของเราเข้าไปทำงานใน repository และจังหวะ Sprint เดียวกับทีมคุณ และทิ้งเอกสารกับโน้ตส่งมอบไว้ให้ คุณจะไม่ต้องพึ่งเราตลอดไป เรื่องเฉพาะของตลาดไทยที่สำคัญ เช่น PDPA การเก็บเงินเป็นบาท ใบกำกับภาษี และที่เก็บข้อมูลลูกค้า เราดูให้ด้วย'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Four pressures founders and engineering leads describe to us most often, and what usually sits behind them.'
                : 'สี่แรงกดดันที่ผู้ก่อตั้งและหัวหน้าทีมวิศวกรรมเล่าให้เราฟังบ่อยที่สุด และสิ่งที่มักอยู่เบื้องหลัง'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
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
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgb(var(--fg) / 0.08)', background: 'var(--bg-1)' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgb(var(--fg) / 0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgb(var(--fg) / 0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'The engineering work we take on for tech teams, and what you hold at the end of each one.' : 'งานวิศวกรรมที่เรารับทำให้ทีมเทคโนโลยี พร้อมบอกว่าจบแต่ละงานคุณจะได้อะไรไว้ในมือ'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--accent-2)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Tools we reach for because they are widely used, well documented, and easy to hire for in Thailand.'
                : 'เครื่องมือที่เราหยิบใช้บ่อย เพราะคนใช้กันแพร่หลาย มีเอกสารครบ และหาคนทำงานด้วยได้ง่ายในไทย'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
                >
                  <TechGlyph name={tag} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Three typical engagements, described by what we do, how long it takes, and what the team has afterwards.' : 'ตัวอย่างงานทั่วไปสามแบบ เล่าให้ฟังว่าเราทำอะไร ใช้เวลาแค่ไหน และจบแล้วทีมจะได้อะไรไว้'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
              {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </h2>
            <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้เลยว่าคุณกำลังทำอะไรอยู่'}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
              >
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
