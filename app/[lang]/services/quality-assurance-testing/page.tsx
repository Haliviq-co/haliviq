import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  cypress: { hex: '#69D3A7', path: 'M11.998.0195c-.8642 0-1.6816.1101-2.1445.1934v.002C4.1731 1.2283 0 6.1368 0 12.0018c0 1.1265.1573 2.2328.4648 3.3028.0387.1453.0915.2993.1368.4473 1.607 4.865 6.2245 8.226 11.3925 8.2285.0651 0 .2518-.0003.502-.0118.8564-.0353 1.6228-.5734 1.9512-1.369l.4736-1.1544L20.4258 8.043H18.621l-2.3164 5.871-2.334-5.871h-1.9082l3.2734 8.0117c-.8115 1.9702-1.6252 3.9395-2.4355 5.9101-.0808.1945-.2655.3284-.4727.336-.144.005-.285.0098-.4316.0098-4.5848 0-8.6672-3.0695-9.9277-7.4649a10.3058 10.3058 0 0 1-.3985-2.8437c0-5.0887 3.6521-9.3404 8.6035-10.164.2214-.037.8885-.1446 1.7246-.1446 4.4166 0 8.269 2.732 9.7305 6.8476.0558.144.0977.293.1465.4395.299.9746.4531 1.9887.4531 3.0215 0 4.5696-2.9413 8.5326-7.3164 9.8613l.4863 1.5996c5.085-1.546 8.4995-6.1518 8.502-11.459 0-1.5491-.2983-2.8706-.6504-3.8926-.0432-.1212-.0873-.2422-.1309-.3633h-.002C21.4577 3.0954 17.0444.0195 11.998.0195ZM8.4336 7.8906c-1.1999 0-2.1747.3852-2.9805 1.1758-.8007.7856-1.205 1.7736-1.205 2.9356 0 1.1544.4068 2.1368 1.205 2.9199.8058.7906 1.7806 1.1738 2.9805 1.1738 1.705 0 3.1556-.955 3.7871-2.4883l.0332-.082-1.6289-.5547c-.168.4563-.7552 1.4883-2.1914 1.4883-.6745 0-1.2437-.2344-1.6934-.6992-.4572-.4699-.6875-1.0632-.6875-1.7578 0-.6998.2253-1.2809.6875-1.7735.4522-.4648 1.019-.7012 1.6934-.7012 1.438 0 2.0238 1.0815 2.1934 1.4883l1.627-.5527-.0333-.084c-.629-1.5358-2.082-2.4883-3.7871-2.4883Z' },
  jest: { hex: '#C21325', path: 'M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z' },
  vitest: { hex: '#00FF74', path: 'M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z' },
  selenium: { hex: '#43B02A', path: 'M23.174 3.468l-7.416 8.322a.228.228 0 0 1-.33 0l-3.786-3.9a.228.228 0 0 1 0-.282L12.872 6a.228.228 0 0 1 .366 0l2.106 2.346a.228.228 0 0 0 .342 0l5.94-8.094A.162.162 0 0 0 21.5 0H.716a.174.174 0 0 0-.174.174v23.652A.174.174 0 0 0 .716 24h22.566a.174.174 0 0 0 .174-.174V3.6a.162.162 0 0 0-.282-.132zM6.932 21.366a5.706 5.706 0 0 1-4.05-1.44.222.222 0 0 1 0-.288l.882-1.236a.222.222 0 0 1 .33-.036 4.338 4.338 0 0 0 2.964 1.158c1.158 0 1.722-.534 1.722-1.098 0-1.752-5.7-.552-5.7-4.278 0-1.65 1.428-3 3.756-3a5.568 5.568 0 0 1 3.708 1.242.222.222 0 0 1 0 .3l-.906 1.2a.222.222 0 0 1-.318.036 4.29 4.29 0 0 0-2.706-.936c-.906 0-1.41.402-1.41.996 0 1.572 5.688.522 5.688 4.2.006 1.812-1.284 3.18-3.96 3.18zm12.438-3.432a.192.192 0 0 1-.192.192h-5.202a.06.06 0 0 0-.06.066 1.986 1.986 0 0 0 2.106 1.638 3.264 3.264 0 0 0 1.8-.6.192.192 0 0 1 .276.042l.636.93a.198.198 0 0 1-.042.264 4.71 4.71 0 0 1-2.892.9 3.726 3.726 0 0 1-3.93-3.87 3.744 3.744 0 0 1 3.81-3.852c2.196 0 3.684 1.644 3.684 4.05zm-3.684-2.748a1.758 1.758 0 0 0-1.8 1.56.06.06 0 0 0 .06.066h3.492a.06.06 0 0 0 .06-.066 1.698 1.698 0 0 0-1.812-1.56Z' },
  k6: { hex: '#7D64FF', path: 'M24 23.646H0L7.99 6.603l4.813 3.538L19.08.354Zm-8.8-3.681h.052a2.292 2.292 0 0 0 1.593-.64 2.088 2.088 0 0 0 .685-1.576 1.912 1.912 0 0 0-.66-1.511 2.008 2.008 0 0 0-1.37-.59h-.04a.716.716 0 0 0-.199.027l1.267-1.883-1.01-.705-.477.705-1.22 1.864c-.21.31-.386.582-.495.77-.112.2-.21.41-.29.625a1.942 1.942 0 0 0-.138.719 2.086 2.086 0 0 0 .676 1.558c.422.411.989.641 1.578.64Zm-5.365-2.027 1.398 1.978h1.496l-1.645-2.295 1.46-2.029-.97-.671-.427.565-1.314 1.853v-3.725l-1.31-1.068v7.37h1.31v-1.98Zm5.367.792a.963.963 0 1 1 0-1.927h.009a.941.941 0 0 1 .679.29.897.897 0 0 1 .29.668.978.978 0 0 1-.977.967Z' },
  postman: { hex: '#FF6C37', path: 'M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z' },
  owasp: { hex: '#FFFFFF', path: 'M15.897 20.503c-.384 0-1.782-2.489-1.97-3.198-.393-1.486-.308-2.114-.285-2.314.072-.613.667-.92.703-1.748.01-.256.14-1.535.243-2.534a1.723 1.723 0 0 1-.733-.343c.676.908-.32 1.995-1.767 3.443-1.536 1.536-4.945 2.961-4.945 2.961s1.425-3.41 2.961-4.945c1.13-1.129 2.04-1.983 2.816-1.983.22 0 .427.067.627.216a1.722 1.722 0 0 1-.343-.733c-.999.103-2.278.232-2.534.244-.829.036-1.135.63-1.747.702-.07.008-.194.024-.388.024-.36 0-.963-.054-1.926-.31-.772-.203-3.648-1.84-3.14-2.045.26-.105 1.087-.176 2.175-.176 1.047 0 2.337.066 3.596.23 1.57.205 3.01.463 3.992.656.016-.053.035-.104.058-.154l-1.004-.48s-.8-.92-.715-.984a.02.02 0 0 1 .012-.003c.126 0 .767.733.829.816l.605.202-.284-.249s-.388-1.438-.287-1.472h.004c.106 0 .459 1.25.489 1.34.07.06.303.152.596.32l-.308-.79s.14-1.305.243-1.305h.003c.105.021-.02 1.089-.047 1.221l.51.783a1.31 1.31 0 0 1 .463-.082c.184 0 .374.036.558.107-.236-.502-.218-1.025.095-1.338a.84.84 0 0 1 .353-.209.462.462 0 0 1 .457-.383c.127 0 .254.05.352.148a.497.497 0 0 1 .147.335c.151-.311.329-.73.317-.867-.03-.307-.386-.852-.39-.857a.076.076 0 0 1 .064-.119c.025 0 .05.012.064.035.016.023.381.582.414.927.018.198-.21.696-.333.95a2.227 2.227 0 0 1 .873.874c.245-.12.715-.334.927-.334l.024.001c.345.033.904.399.927.414a.076.076 0 0 1-.084.128c-.005-.004-.55-.36-.857-.39h-.015c-.15 0-.552.171-.852.317.12.004.242.053.335.147a.482.482 0 0 1 .012.681.459.459 0 0 1-.247.128.845.845 0 0 1-.21.354.924.924 0 0 1-.67.255c-.212 0-.441-.055-.667-.16.132.343.142.708.025 1.02l.783.51c.095-.019.666-.088.993-.088.13 0 .222.011.228.04.02.106-1.305.247-1.305.247l-.79-.308c.168.293.26.527.32.596.091.03 1.374.392 1.34.493-.004.012-.026.017-.063.017-.283 0-1.41-.304-1.41-.304l-.248-.284.202.605c.087.065.876.755.813.841-.004.005-.009.007-.016.007-.139 0-.967-.722-.967-.722l-.481-1.004a1.18 1.18 0 0 1-.154.058c.193.982.451 2.422.656 3.992.335 2.569.26 5.261.054 5.77-.016.041-.042.06-.076.06M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-22.153C6.393 1.847 1.847 6.393 1.847 12S6.393 22.153 12 22.153 22.153 17.607 22.153 12 17.607 1.847 12 1.847Z' },
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

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? "QA Engineering & Test Automation, Bangkok | Haliviq"
    : "รับทำ Test Automation และ QA ในทีมพัฒนา | Haliviq"
  const description = isEN
    ? "QA engineers who work inside your sprints in Bangkok: CI-integrated test automation, release gates and performance checks that keep weekly releases stable."
    : "Haliviq ส่ง QA Engineer เข้าไปทำงานในสปรินต์ของทีมคุณ วางระบบ Test Automation ที่เชื่อมกับ CI ด่านตรวจก่อนปล่อย และเช็กประสิทธิภาพ ให้ปล่อยเวอร์ชันได้ถี่แต่นิ่ง"
  const url = `https://www.haliviq.com/${params.lang}/services/quality-assurance-testing`
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
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Engineering / Quality Assurance'  : 'วิศวกรรม / Quality Assurance'
  const title    = isEN ? 'Quality That Scales'  : 'คุณภาพที่โตได้'
  const subtitle = isEN ? 'With Your Release Speed'    : 'ตามจังหวะการปล่อยเวอร์ชัน'
  const heroDesc = isEN ? 'Teams that ship every week cannot wait for a test phase at the end. Haliviq puts QA engineers inside your sprints, next to your developers, to write automated tests that run on every commit, set the release gates that decide whether a build goes out, and keep the suite healthy as the product grows. It suits product teams in Bangkok and across Thailand who release often and want to stop trading speed for stability. We work on a monthly retainer or as an embedded team for a defined period.'  : 'ทีมที่ปล่อยงานทุกสัปดาห์รอช่วงทดสอบตอนท้ายไม่ได้ Haliviq ส่ง QA Engineer เข้าไปทำงานในสปรินต์ของคุณ นั่งข้างทีมพัฒนา เขียนเทสต์อัตโนมัติที่รันทุก commit วางด่านตรวจที่ตัดสินว่าบิลด์ไหนปล่อยได้ และดูแลชุดทดสอบให้ยังใช้ได้ดีเมื่อผลิตภัณฑ์โตขึ้น เหมาะกับทีมผลิตภัณฑ์ในกรุงเทพฯ และทั่วไทยที่ปล่อยเวอร์ชันบ่อยและไม่อยากแลกความเร็วกับความนิ่ง เราทำงานแบบรายเดือน หรือเป็นทีมที่เข้าไปอยู่ร่วมช่วงเวลาที่กำหนด'
  const whyTitle = isEN ? 'Why testing bolted on at the end always costs more'    : 'ทำไมการทดสอบตอนท้ายถึงแพงกว่าเสมอ'
  const whyDesc  = isEN ? 'A bug caught in code review costs minutes. The same bug found in production costs an incident call, an apology to customers and a few engineer-days taken from the roadmap. Most teams know this, yet testing still gets squeezed into the last two days before a release. Building quality into the delivery pipeline moves that effort to where it is cheapest, and it lets releases get faster as the product grows instead of slower.'  : 'บั๊กที่เจอตอนรีวิวโค้ดแก้ไม่กี่นาที แต่บั๊กเดียวกันที่ไปเจอบนระบบจริงต้องแลกด้วยประชุมแก้เหตุด่วน คำขอโทษลูกค้า และเวลาวิศวกรหลายวันที่ควรเอาไปทำตามแผน หลายทีมรู้เรื่องนี้ดี แต่การทดสอบก็ยังถูกอัดไว้ช่วงสองวันสุดท้ายก่อนปล่อยอยู่ดี การฝังคุณภาพไว้ในสายการส่งมอบงานย้ายแรงไปทำในจุดที่ถูกที่สุด และทำให้ปล่อยเวอร์ชันได้เร็วขึ้นเมื่อผลิตภัณฑ์โต แทนที่จะช้าลง'
  const ctaTitle = isEN ? 'Ready for quality that keeps up?'    : 'พร้อมให้คุณภาพตามทันความเร็วหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free test coverage audit. Share your repository access or a walkthrough of your release process, and we will show you which user journeys are unprotected and what to automate first.'   : 'เริ่มจากตรวจความครอบคลุมของการทดสอบฟรี แชร์สิทธิ์เข้า repository หรือพาเราเดินดูขั้นตอนปล่อยเวอร์ชัน เราจะชี้ให้ดูว่าเส้นทางผู้ใช้ไหนยังไม่มีอะไรคุ้มครอง และควรทำอัตโนมัติอะไรก่อน'
  const overviewText = isEN
    ? 'We treat quality as a product capability, not a checkpoint before shipping. Our QA engineers join your team and start with a risk-based test strategy: which journeys earn the most revenue, which ones break most often, and where a failure hurts most. Then we build CI-integrated automation across unit, API and end-to-end layers using tools such as Playwright, Cypress and Jest, add performance and security checks, and define release gates your team agrees on. Exploratory testing by people who understand the product covers what scripts cannot. Every release produces a short report that tells developers what to fix, not a dashboard nobody opens.'
    : 'เรามองคุณภาพเป็นความสามารถหนึ่งของผลิตภัณฑ์ ไม่ใช่ด่านตรวจก่อนส่งมอบ QA Engineer ของเรามาเป็นส่วนหนึ่งของทีมคุณ เริ่มจากวางกลยุทธ์ทดสอบตามความเสี่ยง ว่าเส้นทางไหนทำรายได้มากที่สุด เส้นทางไหนพังบ่อย และตรงไหนที่พังแล้วเจ็บที่สุด จากนั้นเราสร้างระบบทดสอบอัตโนมัติที่เชื่อมกับ CI ทั้งระดับ Unit, API และ End-to-end ด้วยเครื่องมืออย่าง Playwright, Cypress และ Jest เพิ่มการเช็กประสิทธิภาพและความปลอดภัย และกำหนดด่านตรวจก่อนปล่อยที่ทีมตกลงร่วมกัน ส่วนที่สคริปต์ครอบคลุมไม่ถึง ให้คนที่เข้าใจผลิตภัณฑ์ทดสอบแบบสำรวจ ทุกรอบปล่อยมีรายงานสั้นๆ ที่บอกนักพัฒนาว่าต้องแก้อะไร ไม่ใช่ dashboard ที่ไม่มีใครเปิดดู'

  const heroBullets = isEN ? [
      'Test strategy based on risk: your revenue journeys and your most fragile areas come first',
      'CI-native unit, API and end-to-end suites that run on every commit or pull request',
      'Release gates your team agrees on, so a failing build is stopped before it ships',
      'Performance and load checks against realistic traffic, repeated before big releases',
      'Security scans in the pipeline: SAST/DAST and dependency scanning',
      'Exploratory QA for the edge cases, and flaky-test tracking so the suite stays trusted',
    ] : [
      'วางกลยุทธ์ทดสอบตามความเสี่ยง โดยเริ่มจากเส้นทางที่ทำรายได้และจุดที่เปราะบางที่สุด',
      'ชุดทดสอบ Unit, API และ End-to-end ที่เชื่อมกับ CI รันทุก commit หรือ pull request',
      'ด่านตรวจก่อนปล่อยที่ทีมตกลงร่วมกัน บิลด์ที่ไม่ผ่านจะถูกหยุดก่อนขึ้นระบบ',
      'เช็กประสิทธิภาพและโหลดด้วยปริมาณผู้ใช้ใกล้เคียงจริง และรันซ้ำก่อนปล่อยเวอร์ชันใหญ่',
      'สแกนความปลอดภัยในสายส่งมอบงาน ทั้ง SAST/DAST และสแกน Dependency',
      'ทดสอบแบบสำรวจสำหรับเคสแปลกๆ และติดตามเทสต์ที่ไม่นิ่ง เพื่อให้ทีมยังเชื่อถือชุดทดสอบ',
    ]
  const whyPoints   = isEN ? [
      'Automated regression suites let teams ship daily without gambling on stability, because every change is checked against the journeys that matter.',
      'Performance testing before launch exposes scaling problems while they are still cheap to fix, not on the morning of a campaign.',
      'Security scanning inside CI catches known vulnerable dependencies and common web flaws before they reach production.',
      'Exploratory testing by people who understand the product finds what scripts miss: confusing flows, visual glitches and odd combinations of settings.',
      'Clear defect reports with steps to reproduce cut the time between "something is broken" and "it is fixed", and end the back-and-forth between QA and developers.',
      'Developers who trust the suite refactor more boldly and review faster, which pays back in delivery speed over the following months.',
    ] : [
      'ชุด Regression Test อัตโนมัติช่วยให้ทีมปล่อยงานได้ทุกวันโดยไม่ต้องเสี่ยงเรื่องความเสถียร เพราะทุกการเปลี่ยนแปลงถูกเช็กกับเส้นทางที่สำคัญ',
      'ทดสอบประสิทธิภาพก่อนเปิดตัว จะเจอปัญหาเรื่องการรองรับผู้ใช้ตั้งแต่ยังแก้ได้ไม่แพง ไม่ต้องไปเจอตอนเช้าวันแคมเปญ',
      'สแกนความปลอดภัยใน CI จับ dependency ที่มีช่องโหว่และจุดอ่อนทั่วไปของเว็บได้ก่อนขึ้นระบบจริง',
      'ทดสอบแบบสำรวจโดยคนที่เข้าใจผลิตภัณฑ์ เจอสิ่งที่สคริปต์พลาด เช่น ขั้นตอนที่สับสน บั๊กด้านหน้าตา และการตั้งค่าที่ผสมกันแปลกๆ',
      'รายงานบั๊กที่ชัดพร้อมขั้นตอนทำซ้ำ ลดเวลาตั้งแต่ "มีอะไรพัง" จนถึง "แก้เสร็จแล้ว" และจบการถามตอบไปมาระหว่าง QA กับนักพัฒนา',
      'นักพัฒนาที่เชื่อถือชุดทดสอบกล้า refactor มากขึ้นและรีวิวเร็วขึ้น ซึ่งคืนผลเป็นความเร็วในการส่งมอบในหลายเดือนต่อมา',
    ]
  const outcomes    = isEN ? [
      {stat: '90%+', label: 'Automated Coverage', desc: 'Across critical user journeys'},
      {stat: '70%', label: 'Fewer Prod Defects', desc: 'After test strategy overhaul'},
      {stat: '3x', label: 'Faster Release Cycles', desc: 'With CI-integrated automation'},
      {stat: '<1%', label: 'Flaky Test Rate', desc: 'In maintained suites'}
    ] : [
      {stat: '90%+', label: 'Automated Coverage', desc: 'ครอบคลุมเส้นทางผู้ใช้สำคัญ'},
      {stat: '70%', label: 'บั๊กบนระบบจริงลดลง', desc: 'หลังปรับกลยุทธ์ทดสอบใหม่'},
      {stat: '3x', label: 'ปล่อยเวอร์ชันเร็วขึ้น', desc: 'ด้วยระบบอัตโนมัติที่เชื่อมกับ CI'},
      {stat: '<1%', label: 'อัตราเทสต์ที่ไม่นิ่ง (Flaky)', desc: 'ในชุดทดสอบที่ดูแลต่อเนื่อง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-robot', title: 'Test Automation', desc: 'We write unit, API and end-to-end tests that run in your CI pipeline and catch regressions before users do. We begin with the highest-risk journeys such as sign-up, payment and the main back-office flow, then widen coverage a little every sprint.'},
      {icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, stress and soak tests against traffic that looks like your real users, run before launches and big campaigns. You get the capacity limit in plain numbers and a short list of the slowest parts for your developers to fix.'},
      {icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST and DAST scans, dependency checks and targeted manual tests aligned with your threat model, running inside the pipeline. Each finding comes with a severity level and a suggested fix.'},
      {icon: 'ti-user-search', title: 'Exploratory QA', desc: 'A tester who understands your product explores it the way a curious user would: odd inputs, interrupted flows, slow networks. This finds the edge cases and UX friction that automation alone cannot cover.'},
      {icon: 'ti-report', title: 'Actionable Reporting', desc: 'After each release cycle you get a short summary: what was tested, what failed, how serious it is and how to reproduce it. The report goes to the tracker your team already uses, so fixes get assigned straight away.'},
      {icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'We track flaky tests, run time and coverage release by release, and fix the causes of unreliable tests. The suite stays fast and trusted, and it keeps growing in the places where bugs actually appear.'}
    ] : [
      {icon: 'ti-robot', title: 'Test Automation', desc: 'เราเขียนเทสต์ระดับ Unit, API และ End-to-end ที่รันใน CI pipeline ของคุณ จับ Regression ได้ก่อนผู้ใช้เจอ เริ่มจากเส้นทางที่เสี่ยงที่สุด เช่น สมัครสมาชิก ชำระเงิน และงานหลักฝั่งหลังบ้าน แล้วขยายความครอบคลุมขึ้นอีกนิดในทุกสปรินต์'},
      {icon: 'ti-gauge', title: 'Performance & Load', desc: 'ทดสอบ Load, Stress และ Soak ด้วยปริมาณผู้ใช้ที่ใกล้เคียงของจริง รันก่อนเปิดตัวและก่อนแคมเปญใหญ่ คุณจะได้ตัวเลขที่ระบบรับไหวแบบเข้าใจง่าย กับรายการจุดที่ช้าที่สุดให้ทีมพัฒนาไปแก้'},
      {icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'สแกน SAST และ DAST ตรวจ dependency และทดสอบด้วยมือเฉพาะจุดตามความเสี่ยงของระบบ ทำงานอยู่ในสายส่งมอบงาน ทุกข้อที่เจอมีระดับความรุนแรงและวิธีแก้ที่แนะนำ'},
      {icon: 'ti-user-search', title: 'Exploratory QA', desc: 'ผู้ทดสอบที่เข้าใจผลิตภัณฑ์ของคุณลองเล่นแบบที่ผู้ใช้ขี้สงสัยจะทำ ใส่ข้อมูลแปลกๆ ขัดจังหวะขั้นตอน ใช้เน็ตช้า วิธีนี้เจอเคสพิเศษและจุดติดขัดด้าน UX ที่ระบบอัตโนมัติอย่างเดียวครอบคลุมไม่ถึง'},
      {icon: 'ti-report', title: 'Actionable Reporting', desc: 'หลังจบแต่ละรอบปล่อยเวอร์ชัน คุณจะได้สรุปสั้นๆ ว่าทดสอบอะไรไป อะไรไม่ผ่าน ร้ายแรงแค่ไหน และทำซ้ำอย่างไร รายงานเข้า tracker ที่ทีมของคุณใช้อยู่แล้ว งานแก้จึงมีคนรับทันที'},
      {icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'เราติดตามเทสต์ที่ไม่นิ่ง เวลารัน และความครอบคลุมทุกรอบปล่อย แล้วแก้ที่ต้นเหตุของเทสต์ที่เชื่อถือไม่ได้ ชุดทดสอบจึงเร็วและเป็นที่ไว้ใจ และโตต่อในจุดที่บั๊กเกิดจริง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Planning', desc: 'We list your critical journeys and the areas that break most often, then agree a risk-based strategy: what to automate, what to test by hand and what quality bar a release must meet.'},
      {no: '02', title: 'Test Design', desc: 'We write test cases, prepare realistic test data and draw a coverage map, so everyone can see what is protected and what is not yet.'},
      {no: '03', title: 'Automation', desc: 'We build stable CI pipelines and maintainable suites, using page objects and shared fixtures so a small UI change does not break fifty tests.'},
      {no: '04', title: 'Execution', desc: 'Regression runs on every change, exploratory sessions cover new features, and release-gate checks run before anything goes to production.'},
      {no: '05', title: 'Reporting', desc: 'Defects arrive with steps to reproduce, severity and evidence in your tracker, and a short summary tells stakeholders if the release is safe.'},
      {no: '06', title: 'Improve', desc: 'Each cycle we remove flaky tests, speed up the suite and add coverage where bugs actually turned up.'}
    ] : [
      {no: '01', title: 'Planning', desc: 'เราไล่ดูเส้นทางสำคัญและจุดที่พังบ่อย แล้วตกลงกลยุทธ์ตามความเสี่ยง ว่าอะไรควรทำอัตโนมัติ อะไรทดสอบด้วยมือ และเกณฑ์คุณภาพที่เวอร์ชันต้องผ่าน'},
      {no: '02', title: 'Test Design', desc: 'เราเขียน Test Case เตรียมข้อมูลทดสอบที่เหมือนจริง และวาดแผนที่ความครอบคลุม เพื่อให้ทุกคนเห็นว่าอะไรมีอะไรคุ้มครองแล้ว และอะไรยังไม่มี'},
      {no: '03', title: 'Automation', desc: 'เราสร้าง CI pipeline ที่เสถียรและชุดทดสอบที่ดูแลง่าย ใช้ page object และ fixture ที่ใช้ร่วมกัน เพื่อไม่ให้แก้ UI นิดเดียวแล้วเทสต์พังห้าสิบตัว'},
      {no: '04', title: 'Execution', desc: 'Regression รันทุกครั้งที่มีการเปลี่ยนแปลง ฟีเจอร์ใหม่ทดสอบแบบสำรวจ และด่านตรวจก่อนปล่อยจะรันก่อนขึ้นระบบจริงทุกครั้ง'},
      {no: '05', title: 'Reporting', desc: 'บั๊กเข้า tracker พร้อมขั้นตอนทำซ้ำ ระดับความรุนแรง และหลักฐาน และมีสรุปสั้นๆ บอกผู้เกี่ยวข้องว่าเวอร์ชันนี้ปลอดภัยพอไหม'},
      {no: '06', title: 'Improve', desc: 'ทุกรอบเรากำจัดเทสต์ที่ไม่นิ่ง ทำให้ชุดทดสอบเร็วขึ้น และเพิ่มความครอบคลุมในจุดที่เจอบั๊กจริง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Zero Critical Bugs Across 40 Releases', desc: 'Full CI-integrated regression suite covering payment flows end-to-end.', result: 'Release cadence: weekly'},
      {tag: 'E-Commerce · Nationwide', title: 'Checkout Load-Tested for 10x Traffic', desc: 'Performance testing ahead of a major sale event caught 3 bottlenecks.', result: 'Zero downtime on sale day'},
      {tag: 'Healthcare · Bangkok', title: 'Security Gaps Closed Before Launch', desc: 'SAST/DAST scanning integrated into CI caught 12 vulnerabilities pre-launch.', result: '12 vulnerabilities fixed pre-launch'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ไม่มีบั๊กร้ายแรงตลอด 40 รอบปล่อยเวอร์ชัน', desc: 'ชุด Regression Test ที่เชื่อมกับ CI ครอบคลุมขั้นตอนชำระเงินแบบ End-to-end', result: 'ปล่อยเวอร์ชันทุกสัปดาห์'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ทดสอบโหลดหน้า Checkout รองรับผู้ใช้เพิ่ม 10 เท่า', desc: 'ทดสอบประสิทธิภาพก่อนงาน Sale ใหญ่ พบจุดคอขวด 3 จุด', result: 'ไม่มีระบบล่มในวัน Sale'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ปิดช่องโหว่ความปลอดภัยก่อนเปิดตัว', desc: 'สแกน SAST/DAST ที่เชื่อมกับ CI จับช่องโหว่ได้ 12 จุดก่อนเปิดตัว', result: 'แก้ช่องโหว่ 12 จุดก่อนเปิดตัว'}
    ]
  const faqs        = isEN ? [
      {q: 'What testing services do you offer?', a: 'Automated and exploratory testing built into delivery: unit and integration tests, end-to-end suites, performance testing and security scanning, run by QA engineers who work alongside your developers.'},
      {q: 'Which testing tools do you use?', a: 'Playwright, Cypress, Jest and Vitest for functional testing, k6 for performance and OWASP ZAP for security scanning. We choose tools that fit the stack you already have.'},
      {q: 'Can you add automated tests to an existing codebase?', a: 'Yes. We start with the highest-risk user journeys and build an end-to-end safety net first, then add integration and unit tests as the suite earns trust.'},
      {q: 'Do you do manual testing too?', a: 'Yes. We combine exploratory testing with automation, because each finds problems the other misses.'}
    ] : [
      {q: 'รับทดสอบแบบไหนบ้าง?', a: 'ทดสอบอัตโนมัติและทดสอบแบบสำรวจที่ฝังอยู่ในขั้นตอนส่งมอบงาน ได้แก่ Unit และ Integration Test ชุด End-to-end ทดสอบประสิทธิภาพ และสแกนความปลอดภัย โดย QA Engineer ที่ทำงานเคียงข้างนักพัฒนาของคุณ'},
      {q: 'ใช้เครื่องมือทดสอบอะไรบ้าง?', a: 'Playwright, Cypress, Jest และ Vitest สำหรับทดสอบการทำงาน, k6 สำหรับประสิทธิภาพ และ OWASP ZAP สำหรับสแกนความปลอดภัย เราเลือกเครื่องมือให้เข้ากับระบบที่คุณมีอยู่'},
      {q: 'เพิ่มชุดทดสอบอัตโนมัติให้โค้ดเดิมได้ไหม?', a: 'ได้ เราเริ่มจากเส้นทางผู้ใช้ที่เสี่ยงที่สุด สร้างตาข่ายรองรับแบบ End-to-end ก่อน แล้วเพิ่ม Integration และ Unit Test ตามที่ชุดทดสอบเริ่มเชื่อถือได้'},
      {q: 'ทดสอบด้วยมือด้วยไหม?', a: 'ทำ เราใช้การทดสอบแบบสำรวจควบคู่กับระบบอัตโนมัติ เพราะแต่ละแบบเจอปัญหาที่อีกแบบพลาด'}
    ]
  const related     = isEN ? [
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const qaLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>playwright test --ci</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '248 passed · 0 failed · 4.2s' : 'ผ่าน 248 · ล้มเหลว 0 · 4.2s'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>k6 run load-test.js</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'p95 latency 210ms @ 5k VUs' : 'p95 Latency 210ms @ 5k VUs'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'zap-scan --baseline' : 'zap-scan --baseline'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '0 high-risk findings' : 'ไม่พบช่องโหว่ระดับสูง'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>test-run.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {qaLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Test Coverage' : 'Test Coverage'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '95%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '70%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '92%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '92% automated coverage' : 'ทดสอบอัตโนมัติครอบคลุม 92%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-robot', title: 'Test Automation', desc: 'Unit, API and end-to-end suites wired into CI, so every pull request is checked before it merges. We start with sign-up, payment and the main back-office flows, then widen coverage each sprint instead of attempting everything on day one.' },
    { icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, stress and soak tests against traffic shaped like your real users, repeated before launches and big campaigns. The output is a capacity limit in plain numbers and a short list of the slowest parts to fix.' },
    { icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST and DAST scans, dependency checks and targeted manual tests aligned with your threat model, running in the pipeline. Findings arrive with a severity level and a suggested fix.' },
    { icon: 'ti-user-search', title: 'Exploratory QA', desc: 'Human-led testing for edge cases, UX friction and unusual combinations of settings that automation cannot cover alone. Done by testers who learn your product, so they know what normal looks like.' },
    { icon: 'ti-report', title: 'Actionable Reporting', desc: 'A short summary after every release cycle and defects filed in your tracker with steps to reproduce, severity and evidence, so developers can start fixing without asking follow-up questions.' },
    { icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'We watch flaky tests, run time and coverage release by release, and fix root causes, so the suite stays fast, trusted and aimed at the places where bugs really appear.' },
  ] : [
    { icon: 'ti-robot', title: 'Test Automation', desc: 'ชุดทดสอบ Unit, API และ End-to-end ที่เชื่อมกับ CI ทุก pull request จึงถูกเช็กก่อน merge เราเริ่มจากสมัครสมาชิก ชำระเงิน และงานหลักฝั่งหลังบ้าน แล้วขยายความครอบคลุมทุกสปรินต์ ไม่ใช่พยายามทำทุกอย่างตั้งแต่วันแรก' },
    { icon: 'ti-gauge', title: 'Performance & Load', desc: 'ทดสอบ Load, Stress และ Soak ด้วยปริมาณผู้ใช้ที่ใกล้เคียงของจริง และรันซ้ำก่อนเปิดตัวหรือก่อนแคมเปญใหญ่ ผลที่ได้คือตัวเลขที่ระบบรับไหวแบบเข้าใจง่าย กับรายการจุดที่ช้าที่สุดให้ไปแก้' },
    { icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'สแกน SAST และ DAST ตรวจ dependency และทดสอบด้วยมือเฉพาะจุดตามความเสี่ยงของระบบ รันอยู่ใน pipeline ผลที่เจอมาพร้อมระดับความรุนแรงและวิธีแก้ที่แนะนำ' },
    { icon: 'ti-user-search', title: 'Exploratory QA', desc: 'ทดสอบโดยคนสำหรับเคสแปลกๆ จุดติดขัดด้าน UX และการตั้งค่าที่ผสมกันแปลกๆ ซึ่งระบบอัตโนมัติอย่างเดียวครอบคลุมไม่ถึง ทำโดยผู้ทดสอบที่เรียนรู้ผลิตภัณฑ์ของคุณ จึงรู้ว่าแบบปกติหน้าตาเป็นยังไง' },
    { icon: 'ti-report', title: 'Actionable Reporting', desc: 'สรุปสั้นๆ ทุกรอบปล่อยเวอร์ชัน และบั๊กที่เข้า tracker ของคุณพร้อมขั้นตอนทำซ้ำ ความรุนแรง และหลักฐาน นักพัฒนาจึงเริ่มแก้ได้เลยโดยไม่ต้องถามต่อ' },
    { icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'เราดูเทสต์ที่ไม่นิ่ง เวลารัน และความครอบคลุมทุกรอบปล่อย แล้วแก้ที่ต้นเหตุ ชุดทดสอบจึงเร็ว เป็นที่ไว้ใจ และมุ่งไปที่จุดที่บั๊กเกิดจริง' },
  ]

  const techStack = [
    { label: 'Playwright', icon: 'ti-test-pipe' },
    { label: 'Cypress', svg: 'cypress' },
    { label: 'Jest', svg: 'jest' },
    { label: 'Vitest', svg: 'vitest' },
    { label: 'Selenium', svg: 'selenium' },
    { label: 'k6', svg: 'k6' },
    { label: 'Postman', svg: 'postman' },
    { label: 'OWASP ZAP', svg: 'owasp' },
    { label: 'BrowserStack', icon: 'ti-device-desktop-analytics' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Planning', desc: 'Risk-based strategy: what to automate, what to test by hand' },
    { no: '02', title: 'Test Design', desc: 'Cases, realistic data and a visible coverage map' },
    { no: '03', title: 'Automation', desc: 'Stable CI pipelines and suites that are easy to maintain' },
    { no: '04', title: 'Execution', desc: 'Regression on every change, exploratory on new features' },
    { no: '05', title: 'Reporting', desc: 'Defects with steps to reproduce, plus a release summary' },
    { no: '06', title: 'Improve', desc: 'Fewer flaky tests, faster runs, coverage where bugs appear' },
  ] : [
    { no: '01', title: 'Planning', desc: 'กลยุทธ์ตามความเสี่ยง ว่าอะไรทำอัตโนมัติ อะไรทดสอบด้วยมือ' },
    { no: '02', title: 'Test Design', desc: 'เคสทดสอบ ข้อมูลที่เหมือนจริง และแผนที่ความครอบคลุมที่มองเห็นได้' },
    { no: '03', title: 'Automation', desc: 'CI pipeline ที่เสถียรและชุดทดสอบที่ดูแลง่าย' },
    { no: '04', title: 'Execution', desc: 'Regression ทุกครั้งที่เปลี่ยนโค้ด ฟีเจอร์ใหม่ทดสอบแบบสำรวจ' },
    { no: '05', title: 'Reporting', desc: 'บั๊กพร้อมขั้นตอนทำซ้ำ และสรุปความพร้อมของเวอร์ชัน' },
    { no: '06', title: 'Improve', desc: 'เทสต์ไม่นิ่งน้อยลง รันเร็วขึ้น ครอบคลุมจุดที่เจอบั๊ก' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What testing services does Haliviq offer?', a: 'Automated and exploratory testing built into the delivery process: unit and integration tests, end-to-end suites, performance testing and security scanning. Our QA engineers work inside your sprints, so quality keeps pace with release speed instead of slowing it down.' },
    { q: 'Which testing tools do you use?', a: 'Playwright, Cypress, Jest and Vitest for functional and end-to-end testing, k6 for performance, OWASP ZAP for security scanning and BrowserStack for cross-device coverage. We pick the toolset that fits your existing stack rather than pushing a fixed list on every project.' },
    { q: 'Can you add automated tests to an existing codebase with no coverage?', a: 'Yes. We start with the highest-risk user journeys, build an end-to-end safety net first, and then push coverage down into integration and unit tests as the suite earns trust, rather than trying to write every test on day one.' },
    { q: 'Do you do manual testing too, or is it all automated?', a: 'Both. Exploratory testing by people who understand the product finds what scripts miss: confusing flows, visual glitches, edge cases nobody thought to script. We combine it with automation rather than choosing one over the other.' },
    { q: 'How long does it take to build out a test strategy?', a: 'A focused audit of your highest-risk flows and a prioritised coverage plan takes 1-2 weeks. Building the initial automated suite for a mid-size product typically runs 4-8 weeks. After that the suite grows a little with every release instead of needing another big push.' },
    { q: 'How much does ongoing QA cost?', a: 'It scales with the size of the codebase and the depth of coverage you need. A focused test-strategy audit starts in the low five figures (THB). An initial automation build-out for one product area typically starts in the mid five figures. Ongoing QA support is quoted as a monthly retainer sized to your release cadence.' },
    { q: 'Will testing slow down our release cycle?', a: 'The opposite, once the suite is in place. A CI-integrated suite runs in minutes on every commit, so teams ship with more confidence and more often. The slowdown people associate with testing usually comes from manual regression cycles, which is exactly what automation replaces.' },
    { q: 'What happens when tests become flaky or unreliable?', a: 'We treat a flaky test as a defect in the suite, not something to retry until it goes green. We track the flake rate and fix root causes such as timing issues, shared state and environment differences, so the team keeps trusting the suite instead of ignoring it.' },
    { q: 'How does this differ from a one-off pre-launch QA audit?', a: 'A pre-launch audit checks a product at one point in time and ends with a sign-off. This service is ongoing: QA engineers sit with your developers, automation runs on every change and release gates stay in place. If you only need a check before go-live, our QA and testing service is the better fit.' },
  ] : [
    { q: 'Haliviq รับทดสอบแบบไหนบ้าง?', a: 'ทดสอบอัตโนมัติและทดสอบแบบสำรวจที่ฝังอยู่ในขั้นตอนส่งมอบงาน ได้แก่ Unit และ Integration Test ชุด End-to-end ทดสอบประสิทธิภาพ และสแกนความปลอดภัย QA Engineer ของเราทำงานอยู่ในสปรินต์ของคุณ คุณภาพจึงโตทันความเร็วในการปล่อยเวอร์ชัน ไม่ใช่ทำให้ช้าลง' },
    { q: 'ใช้เครื่องมือทดสอบอะไรบ้าง?', a: 'Playwright, Cypress, Jest และ Vitest สำหรับทดสอบการทำงานและ End-to-end, k6 สำหรับประสิทธิภาพ, OWASP ZAP สำหรับสแกนความปลอดภัย และ BrowserStack สำหรับทดสอบข้ามอุปกรณ์ เราเลือกเครื่องมือให้เข้ากับระบบเดิมของคุณ ไม่ได้ใช้ชุดตายตัวกับทุกโปรเจกต์' },
    { q: 'เพิ่มชุดทดสอบอัตโนมัติให้โค้ดเดิมที่ยังไม่มีการทดสอบได้ไหม?', a: 'ได้ เราเริ่มจากเส้นทางผู้ใช้ที่เสี่ยงที่สุด สร้างตาข่ายรองรับแบบ End-to-end ก่อน แล้วค่อยขยายไปถึง Integration และ Unit Test เมื่อชุดทดสอบเริ่มเชื่อถือได้ ไม่ใช่พยายามเขียนทุกอย่างตั้งแต่วันแรก' },
    { q: 'ทดสอบด้วยมือด้วยไหม หรือทำอัตโนมัติอย่างเดียว?', a: 'ทำทั้งสองอย่าง การทดสอบแบบสำรวจโดยคนที่เข้าใจผลิตภัณฑ์จะเจอสิ่งที่สคริปต์พลาด เช่น ขั้นตอนที่สับสน บั๊กด้านหน้าตา หรือเคสแปลกๆ ที่ไม่มีใครคิดจะเขียนสคริปต์ เราใช้ควบคู่กับระบบอัตโนมัติ ไม่ได้เลือกอย่างใดอย่างหนึ่ง' },
    { q: 'วางกลยุทธ์ทดสอบใช้เวลานานแค่ไหน?', a: 'ตรวจเส้นทางที่เสี่ยงที่สุดและวางแผนความครอบคลุมใช้เวลา 1-2 สัปดาห์ ส่วนการสร้างชุดทดสอบอัตโนมัติชุดแรกสำหรับผลิตภัณฑ์ขนาดกลางมักใช้ 4-8 สัปดาห์ หลังจากนั้นชุดทดสอบจะโตขึ้นนิดหน่อยในทุกรอบปล่อยเวอร์ชัน ไม่ต้องเร่งทำก้อนใหญ่อีก' },
    { q: 'งาน QA ต่อเนื่องมีค่าใช้จ่ายเท่าไหร่?', a: 'ขึ้นกับขนาดโค้ดและความลึกของการทดสอบที่ต้องการ การตรวจกลยุทธ์ทดสอบแบบเจาะจงเริ่มที่หลักหมื่นต้นๆ (บาท) การสร้างระบบทดสอบอัตโนมัติเริ่มต้นสำหรับหนึ่งส่วนของผลิตภัณฑ์มักเริ่มที่หลักหมื่นกลางๆ ส่วนงาน QA ต่อเนื่องเสนอราคาเป็นรายเดือนตามความถี่ในการปล่อยเวอร์ชัน' },
    { q: 'การทดสอบจะทำให้ปล่อยเวอร์ชันช้าลงไหม?', a: 'ตรงข้ามเลย เมื่อชุดทดสอบพร้อมแล้ว ระบบอัตโนมัติที่เชื่อมกับ CI รันเสร็จในไม่กี่นาทีทุก commit ทีมจึงปล่อยงานได้มั่นใจขึ้นและบ่อยขึ้น ที่คนมักรู้สึกว่าการทดสอบทำให้ช้า ส่วนใหญ่มาจากการทำ Regression ด้วยมือ ซึ่งระบบอัตโนมัติเข้ามาแทนได้โดยตรง' },
    { q: 'ถ้าเทสต์เริ่มไม่นิ่งหรือเชื่อถือไม่ได้จะทำอย่างไร?', a: 'เรามองเทสต์ที่ไม่นิ่งเป็นข้อบกพร่องของชุดทดสอบเอง ไม่ใช่เรื่องที่รันซ้ำจนผ่านแล้วจบ เราติดตามอัตราที่ไม่นิ่งและแก้ที่ต้นเหตุ เช่น ปัญหาเรื่องจังหวะเวลา สถานะที่ใช้ร่วมกัน หรือความต่างของสภาพแวดล้อม เพื่อให้ทีมยังเชื่อถือชุดทดสอบ ไม่ถูกมองข้าม' },
    { q: 'บริการนี้ต่างจากการตรวจ QA ครั้งเดียวก่อนเปิดตัวยังไง?', a: 'การตรวจก่อนเปิดตัวเช็กผลิตภัณฑ์ ณ จุดเวลาหนึ่งและจบด้วยการอนุมัติ ส่วนบริการนี้ทำต่อเนื่อง QA Engineer นั่งทำงานกับนักพัฒนาของคุณ ระบบอัตโนมัติรันทุกครั้งที่เปลี่ยนโค้ด และด่านตรวจก่อนปล่อยอยู่ตลอด ถ้าคุณแค่ต้องการเช็กก่อนเปิดตัว บริการ QA & Testing ของเราเหมาะกว่า' },
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
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'สิ่งที่เราทำได้จริงในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
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
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven testing tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'เครื่องมือทดสอบที่ผ่านการใช้งานจริง เลือกตามโจทย์งาน ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from strategy to a suite the team trusts — adjusted per codebase, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนตั้งแต่กลยุทธ์ไปจนถึงชุดทดสอบที่ทีมเชื่อถือได้ ปรับตามโค้ดของแต่ละโปรเจกต์ ไม่ใช่สูตรตายตัว'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we test.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราทดสอบ'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
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
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกัน'}
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
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/quality-assurance-testing/why1.jpg"
      whyImg2="/images/services/quality-assurance-testing/why2.jpg"
      featureImg="/images/services/quality-assurance-testing/feature.jpg"
      processImg="/images/services/quality-assurance-testing/process.jpg"
    />
  )
}
