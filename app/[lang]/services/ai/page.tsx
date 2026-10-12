import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  openai: { hex: '#FFFFFF', path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.3968l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4074-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4592a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z' },
  anthropic: { hex: '#FFFFFF', path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z' },
  googlegemini: { hex: '#8E75B2', path: 'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81' },
  langchain: { hex: '#7FC8FF', path: 'M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z' },
  langgraph: { hex: '#7FC8FF', path: 'M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z' },
  python: { hex: '#3776AB', path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z' },
  huggingface: { hex: '#FFD21E', path: 'M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624' },
  vercel: { hex: '#FFFFFF', path: 'm12 1.608 12 20.784H0Z' },
  postgresql: { hex: '#4169E1', path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm1.971-.424l-1.513.398.49-1.266 1.459-.385.02.073Z' },
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

  const badge    = isEN ? 'AI & Innovation / AI Development'  : 'AI & นวัตกรรม / พัฒนา AI'
  const title    = isEN ? 'Smarter Products'  : 'ผลิตภัณฑ์ที่ฉลาดขึ้น'
  const subtitle = isEN ? 'Powered by AI'    : 'ด้วยพลัง AI'
  const heroDesc = isEN ? 'Haliviq is an AI development company in Bangkok. We build AI agents, RAG assistants that answer from your own documents, and LLM features inside your products. Each one starts from a task your team already does by hand, and we measure it against that task before it goes live. The goal is something your staff and customers actually use, not a demo that looks good once in a meeting.'  : 'Haliviq ทำงานพัฒนา AI ที่กรุงเทพฯ เราสร้างเอเจนต์ AI ผู้ช่วยแบบ RAG ที่ตอบจากเอกสารของคุณเอง และฟีเจอร์ LLM ที่ฝังอยู่ในผลิตภัณฑ์ของคุณ ทุกงานเริ่มจากงานที่ทีมคุณทำด้วยมืออยู่ตอนนี้ และเราวัดผลเทียบกับงานนั้นก่อนเปิดใช้งานจริง เป้าหมายคือให้พนักงานและลูกค้าใช้กันจริงๆ ไม่ใช่ตัวอย่างที่ดูดีแค่ตอนเดโมในห้องประชุม'
  const whyTitle = isEN ? 'Why more Thai businesses are putting AI to work now'    : 'ทำไมตอนนี้ธุรกิจถึงเริ่มใช้ AI กันจริงจัง'
  const whyDesc  = isEN ? 'Teams that started early are already answering customers faster, spending less on repetitive work, and tailoring offers to each person in a way no manual process can match. The tools have become cheap and good enough that the question is no longer whether AI works, but which of your tasks it should take on first. Picking that first task well is most of the job.'  : 'ธุรกิจที่เริ่มก่อนตอนนี้ตอบลูกค้าได้เร็วขึ้น เสียเงินกับงานซ้ำๆ น้อยลง และนำเสนอสินค้าให้ตรงกับลูกค้าแต่ละคนได้ในระดับที่ทำด้วยมือไม่ไหว เครื่องมือถูกลงและเก่งขึ้นจนคำถามไม่ใช่ว่า AI ใช้ได้ไหม แต่เป็นว่างานไหนของคุณควรให้ AI ลองก่อน และการเลือกงานแรกให้ถูกคือครึ่งหนึ่งของความสำเร็จ'
  const ctaTitle = isEN ? 'Ready to build with AI?'    : 'พร้อมสร้างด้วย AI หรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free AI Opportunity Workshop. We sit down with your team, list the tasks where AI could help, and rank them by value and effort so you know where to begin.'   : 'เริ่มด้วย AI Opportunity Workshop ฟรี เรานั่งคุยกับทีมของคุณ ไล่ดูงานที่ AI ช่วยได้ แล้วจัดอันดับตามคุณค่าและแรงที่ต้องใช้ คุณจะรู้ว่าควรเริ่มตรงไหนก่อน'
  const overviewText = isEN
    ? 'We build AI that does a defined job inside your business. That includes agents that plan a task, call your tools and APIs, and finish a workflow; RAG assistants that answer from your own manuals, tickets, and databases and show where each answer came from; copilots built into products you already run; and the test sets and monitoring that tell you whether any of it is still working next month. We use OpenAI, Anthropic Claude, and Google Gemini, and pick between them for each task based on speed, cost, and how well they reason on your data. Orchestration is built with LangChain and LangGraph. A project usually begins with an AI audit that maps your data and workflows, moves to agent design and a small pilot on real data, and then continues through integration, launch, and monitoring. Thai-language content is part of the testing from the first week, because a model that works well in English does not automatically work well on Thai documents or Thai customers.'
    : 'เราสร้าง AI ให้ทำงานที่กำหนดชัดเจนในธุรกิจของคุณ เช่น เอเจนต์ที่วางแผนงาน เรียกใช้เครื่องมือและ API แล้วทำขั้นตอนงานให้จบ ผู้ช่วยแบบ RAG ที่ตอบจากคู่มือ Ticket และฐานข้อมูลของคุณเอง พร้อมบอกว่าคำตอบแต่ละข้อมาจากไหน Copilot ที่ฝังอยู่ในผลิตภัณฑ์ที่คุณใช้อยู่แล้ว รวมถึงชุดทดสอบและระบบติดตามที่บอกได้ว่าเดือนหน้าทุกอย่างยังใช้ได้ดีอยู่หรือเปล่า เราใช้ OpenAI, Anthropic Claude และ Google Gemini โดยเลือกให้เหมาะกับแต่ละงาน ดูจากความเร็ว ต้นทุน และความสามารถในการคิดกับข้อมูลของคุณ ส่วนการจัดลำดับขั้นตอนของเอเจนต์ใช้ LangChain และ LangGraph โปรเจกต์ส่วนใหญ่เริ่มจากการตรวจประเมิน AI เพื่อดูข้อมูลและขั้นตอนงาน ต่อด้วยออกแบบเอเจนต์และทำงานนำร่องเล็กๆ กับข้อมูลจริง แล้วค่อยเชื่อมระบบ เปิดใช้งาน และติดตามผล เนื้อหาภาษาไทยอยู่ในชุดทดสอบตั้งแต่สัปดาห์แรก เพราะโมเดลที่เก่งภาษาอังกฤษไม่ได้เก่งกับเอกสารภาษาไทยหรือลูกค้าคนไทยโดยอัตโนมัติ'

  const heroBullets = isEN ? [
      'An AI audit that finds the tasks worth automating and ranks them by value and effort',
      'Agents, RAG assistants, and custom models built around your own data',
      'AI added to the products and workflows you already run, so nobody starts from scratch',
      'Test sets and monitoring that catch drift, cost creep, and wrong answers after launch',
      'Clear limits on what the AI can read and do, with people reviewing the risky decisions',
      'Thai-language testing included, because English results do not carry over',
    ] : [
      'ตรวจประเมิน AI เพื่อหางานที่คุ้มจะทำอัตโนมัติ และจัดอันดับตามคุณค่ากับแรงที่ต้องใช้',
      'สร้างเอเจนต์ ผู้ช่วยแบบ RAG และโมเดลเฉพาะจากข้อมูลของคุณเอง',
      'ใส่ AI เข้าไปในผลิตภัณฑ์และขั้นตอนงานที่ใช้อยู่แล้ว ไม่ต้องเริ่มใหม่ทั้งหมด',
      'มีชุดทดสอบและระบบติดตามที่จับความคลาดเคลื่อน ต้นทุนที่บานปลาย และคำตอบที่ผิดหลังเปิดใช้งาน',
      'กำหนดชัดว่า AI อ่านและทำอะไรได้บ้าง และให้คนตรวจการตัดสินใจที่เสี่ยง',
      'ทดสอบกับภาษาไทยด้วย เพราะผลภาษาอังกฤษเอามาใช้กับไทยตรงๆ ไม่ได้',
    ]
  const whyPoints   = isEN ? [
      'AI-powered companies reduce operational costs by 22% on average in year one, mostly by taking over the routine, repeatable work.',
      'ML-based recommendations lift conversion 3-5x compared with segmenting customers by hand, because each shopper sees what fits them.',
      'AI can handle first-line customer support around the clock, bringing the first reply down from hours to seconds.',
      'Predictive maintenance cuts equipment downtime by up to 50% by flagging a failing part before it stops the line.',
      'Generative AI compresses weeks of content, code, and design drafting into hours, leaving people to review and refine.',
    ] : [
      'บริษัทที่ใช้ AI ลดต้นทุนดำเนินงานได้เฉลี่ย 22% ในปีแรก ส่วนใหญ่มาจากการให้ AI ทำงานประจำที่ทำซ้ำได้',
      'ระบบแนะนำด้วย ML เพิ่มอัตราการซื้อได้ 3-5 เท่าเมื่อเทียบกับการแบ่งกลุ่มลูกค้าด้วยมือ เพราะลูกค้าแต่ละคนเห็นของที่ตรงกับตัวเอง',
      'AI ดูแลงานซัพพอร์ตลูกค้าด่านแรกได้ตลอด 24/7 ลดเวลาตอบครั้งแรกจากหลายชั่วโมงเหลือไม่กี่วินาที',
      'การซ่อมบำรุงเชิงพยากรณ์ช่วยลดเวลาเครื่องจักรหยุดทำงานได้ถึง 50% เพราะเตือนก่อนที่ชิ้นส่วนจะพังจนไลน์หยุด',
      'Generative AI ย่นงานเขียนเนื้อหา โค้ด และดีไซน์ที่เคยใช้หลายสัปดาห์ เหลือไม่กี่ชั่วโมง ให้คนมาตรวจและปรับแต่งต่อ',
    ]
  const outcomes    = isEN ? [
      {stat: '22%', label: 'Operational Cost Reduction', desc: 'Average year-one result'},
      {stat: '5x', label: 'Conversion Rate Uplift', desc: 'With ML personalisation'},
      {stat: '24/7', label: 'AI Customer Support', desc: 'First reply at any hour'},
      {stat: '50%', label: 'Less Downtime', desc: 'With predictive maintenance'}
    ] : [
      {stat: '22%', label: 'ลดต้นทุนดำเนินงาน', desc: 'ผลเฉลี่ยในปีแรก'},
      {stat: '5x', label: 'อัตราการซื้อเพิ่มขึ้น', desc: 'ด้วยระบบแนะนำแบบ ML'},
      {stat: '24/7', label: 'AI ดูแลลูกค้า', desc: 'ตอบครั้งแรกได้ทุกเวลา'},
      {stat: '50%', label: 'ลดเวลาเครื่องหยุดทำงาน', desc: 'ด้วยการซ่อมบำรุงเชิงพยากรณ์'}
    ]
  const features    = isEN ? [
      {icon: 'ti-brain', title: 'AI Strategy & Use Case Discovery', desc: 'We go through your workflows and data, list where AI could help, and rank each idea by expected value, effort, and data readiness. You leave with a short, honest list of what to build first and why.'},
      {icon: 'ti-robot', title: 'Custom ML Model Development', desc: 'When a ready-made model is not accurate enough for your problem, we train one on your own data, check it against held-out examples, and document how it behaves.'},
      {icon: 'ti-message-chatbot', title: 'Conversational AI & Chatbot', desc: 'Assistants that know your products, policies, and tone, answer in Thai and English, and connect to the systems that hold the answers. They hand over to a person when they should.'},
      {icon: 'ti-eye', title: 'Computer Vision', desc: 'Models that look at photos or video to check product quality, count stock, or support security checks. We start from your real images and camera conditions, not stock samples.'},
      {icon: 'ti-file-text-ai', title: 'Document Intelligence', desc: 'Read invoices, contracts, and forms, pull out the fields you need, and send them into your system. Staff review only the unclear ones instead of typing everything.'},
      {icon: 'ti-chart-line', title: 'Predictive Analytics', desc: 'Forecast sales, churn, demand, or risk using your history, and see which factors drive each prediction. Results land in the dashboards or tools your team already uses.'}
    ] : [
      {icon: 'ti-brain', title: 'AI Strategy & Use Case Discovery', desc: 'เราไล่ดูขั้นตอนงานและข้อมูลของคุณ ลิสต์งานที่ AI ช่วยได้ แล้วจัดอันดับแต่ละไอเดียตามคุณค่าที่คาดไว้ แรงที่ต้องใช้ และความพร้อมของข้อมูล คุณจะได้รายการสั้นๆ ที่ตรงไปตรงมาว่าควรทำอะไรก่อนและเพราะอะไร'},
      {icon: 'ti-robot', title: 'Custom ML Model Development', desc: 'ถ้าโมเดลสำเร็จรูปแม่นไม่พอกับปัญหาของคุณ เราฝึกโมเดลจากข้อมูลของคุณเอง ทดสอบกับตัวอย่างที่แยกไว้ และจดไว้ว่าโมเดลทำงานอย่างไร'},
      {icon: 'ti-message-chatbot', title: 'Conversational AI & Chatbot', desc: 'ผู้ช่วยที่รู้จักสินค้า นโยบาย และน้ำเสียงของแบรนด์คุณ ตอบได้ทั้งไทยและอังกฤษ และเชื่อมกับระบบที่เก็บคำตอบ เมื่อถึงเวลาที่ควรให้คนดูต่อ ก็ส่งต่อให้เลย'},
      {icon: 'ti-eye', title: 'Computer Vision', desc: 'โมเดลที่ดูภาพหรือวิดีโอ เพื่อตรวจคุณภาพสินค้า นับสต็อก หรือช่วยงานตรวจความปลอดภัย เราเริ่มจากภาพและสภาพกล้องจริงของคุณ ไม่ใช่ภาพตัวอย่างทั่วไป'},
      {icon: 'ti-file-text-ai', title: 'Document Intelligence', desc: 'อ่านใบแจ้งหนี้ สัญญา และแบบฟอร์ม ดึงข้อมูลที่ต้องใช้ แล้วส่งเข้าระบบของคุณ พนักงานตรวจเฉพาะรายการที่ไม่ชัดเจน ไม่ต้องคีย์เองทุกใบ'},
      {icon: 'ti-chart-line', title: 'Predictive Analytics', desc: 'พยากรณ์ยอดขาย ลูกค้าที่จะเลิกใช้ ความต้องการสินค้า หรือความเสี่ยง จากข้อมูลย้อนหลังของคุณ และดูได้ว่าปัจจัยไหนทำให้ได้ผลแบบนั้น ผลลัพธ์ไปอยู่ใน Dashboard หรือเครื่องมือที่ทีมใช้อยู่แล้ว'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'AI Opportunity Assessment', desc: 'We walk through your processes with the people who do the work and pick the use cases that are both valuable and realistic with the data you have.'},
      {no: '02', title: 'Data Audit & Preparation', desc: 'We check how much data you have, how clean it is, and who is allowed to use it, then prepare the datasets for training and testing.'},
      {no: '03', title: 'Model Development & Testing', desc: 'We build the model or agent, tune it, and measure accuracy on examples it has never seen, including Thai-language cases.'},
      {no: '04', title: 'Integration & Deployment', desc: 'We connect it to your existing systems and release it in stages, so problems show up with a few users rather than everyone.'},
      {no: '05', title: 'Monitor & Improve', desc: 'We track accuracy, drift, and cost after launch and retrain or adjust when the numbers start to slip.'}
    ] : [
      {no: '01', title: 'AI Opportunity Assessment', desc: 'เราไล่ดูขั้นตอนงานกับคนที่ทำงานนั้นจริง แล้วเลือกงานที่ทั้งคุ้มค่าและทำได้จริงกับข้อมูลที่คุณมี'},
      {no: '02', title: 'Data Audit & Preparation', desc: 'เช็คว่ามีข้อมูลเท่าไหร่ สะอาดแค่ไหน และใครมีสิทธิ์ใช้ แล้วเตรียมชุดข้อมูลสำหรับฝึกและทดสอบ'},
      {no: '03', title: 'Model Development & Testing', desc: 'สร้างโมเดลหรือเอเจนต์ ปรับแต่ง และวัดความแม่นยำกับตัวอย่างที่มันไม่เคยเห็น รวมถึงกรณีภาษาไทย'},
      {no: '04', title: 'Integration & Deployment', desc: 'เชื่อมกับระบบที่มีอยู่ แล้วเปิดใช้งานเป็นระยะ ให้ปัญหาไปโผล่กับผู้ใช้กลุ่มเล็กก่อน ไม่ใช่ทุกคนพร้อมกัน'},
      {no: '05', title: 'Monitor & Improve', desc: 'ติดตามความแม่นยำ ความคลาดเคลื่อน (Drift) และต้นทุนหลังเปิดใช้งาน แล้วฝึกใหม่หรือปรับเมื่อตัวเลขเริ่มแย่ลง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'AI Document Processing, 93% Faster', desc: 'An OCR model combined with a rule engine reads incoming loan documents, checks each field against the lender\'s rules, and sends clean records on. Manual work fell by 80%, and staff now look only at the documents the model is unsure about.', result: 'Processing Time down 93%'},
      {tag: 'Healthcare · Bangkok', title: 'Medical Chatbot for Initial Triage', desc: 'The assistant answers basic health questions, screens symptoms and books appointments without staff involvement, and passes the conversation to a person when a case needs one.', result: 'Doctor workload reduced 40%'},
      {tag: 'Retail · Nationwide', title: 'AI Product Recommendation, +32% Revenue', desc: 'A recommendation engine that changes what it shows to each customer based on what they browsed and bought, replacing one fixed list of best-sellers for everyone.', result: 'Revenue up 32%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'AI อ่านเอกสารกู้เงิน ลดเวลาประมวลผล 93%', desc: 'โมเดล OCR ทำงานร่วมกับ Rule Engine อ่านเอกสารสินเชื่อที่เข้ามา ตรวจแต่ละช่องกับกฎของผู้ให้กู้ แล้วส่งข้อมูลที่สะอาดต่อ งานมือลดลง 80% พนักงานดูเฉพาะเอกสารที่โมเดลไม่แน่ใจ', result: 'เวลาประมวลผลลดลง 93%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'แชตบอตคัดกรองเบื้องต้นด้านการแพทย์', desc: 'ผู้ช่วยตอบคำถามสุขภาพเบื้องต้น คัดกรองอาการ และนัดหมายแพทย์ได้เอง โดยไม่ต้องให้เจ้าหน้าที่เข้าไปช่วย และส่งต่อให้คนเมื่อเคสนั้นต้องใช้คน', result: 'ลดภาระงานแพทย์ 40%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'AI แนะนำสินค้า รายได้เพิ่ม 32%', desc: 'ระบบแนะนำสินค้าที่ปรับสิ่งที่แสดงให้ลูกค้าแต่ละคนตามสิ่งที่ดูและซื้อ แทนรายการสินค้าขายดีชุดเดียวที่ทุกคนเห็นเหมือนกัน', result: 'รายได้เพิ่ม 32%'}
    ]
  const faqs        = isEN ? [
      {q: 'How much data do we need to start?', a: 'It depends on the task. Some can begin with a few hundred rows, others need tens of thousands. We check what you have during the assessment and tell you plainly if the data is not ready yet, and what to collect first.'},
      {q: 'Should we use a ready-made AI or a custom model?', a: 'Either. If an off-the-shelf model does the job, we use it and save you the cost. If you need higher accuracy or handle sensitive data, we build a model of your own.'},
      {q: 'Will AI replace our staff?', a: 'The aim is to take repetitive work off people so they can spend time on judgement calls and customer conversations. We usually design it so staff review the decisions that matter.'},
      {q: 'How much does an AI project cost?', a: 'It depends on complexity. A Proof of Concept starts at a few hundred thousand THB, and a full production system can reach several million. Contact us for an estimate.'},
      {q: 'Does it work in Thai?', a: 'Yes, but we do not assume it will. Thai documents, slang and mixed Thai-English messages are part of the test set from the first week, and we measure accuracy on them separately from English.'},
      {q: 'How do you stop the AI from making things up?', a: 'For assistants that answer from your documents we use retrieval, so answers are built from your own material and show their source. We also set the assistant to say it does not know, rather than guess, and test it with questions it should refuse.'},
      {q: 'What do we need to prepare before the first workshop?', a: 'Nothing formal. Bring two or three tasks that eat your team\'s time, a few real examples such as documents, tickets or sheets, and the person who knows how the work is really done. We handle the rest.'}
    ] : [
      {q: 'ต้องมีข้อมูลเท่าไหร่ถึงจะเริ่มได้?', a: 'ขึ้นอยู่กับงานที่ทำ บางงานเริ่มได้ด้วยข้อมูลหลักร้อยแถว บางงานต้องใช้หลักหมื่น เราจะเช็กข้อมูลที่คุณมีตอนประเมินความพร้อม และบอกตรงๆ ถ้าข้อมูลยังไม่พร้อม พร้อมบอกว่าควรเก็บอะไรก่อน'},
      {q: 'ควรใช้ AI สำเร็จรูปหรือสร้างโมเดลเอง?', a: 'ได้ทั้งสองแบบ ถ้าโมเดลสำเร็จรูปทำงานได้ เราก็ใช้เลยและประหยัดงบให้คุณ ถ้าต้องการความแม่นยำสูงกว่านั้นหรือต้องดูแลข้อมูลอ่อนไหว เราสร้างโมเดลเฉพาะให้'},
      {q: 'AI จะมาแทนพนักงานไหม?', a: 'เป้าหมายคือให้ AI รับงานซ้ำๆ ไป เพื่อให้คนมีเวลาไปทำเรื่องที่ต้องใช้วิจารณญาณและคุยกับลูกค้า เรามักออกแบบให้พนักงานเป็นคนตรวจการตัดสินใจที่สำคัญ'},
      {q: 'ค่าใช้จ่ายโปรเจกต์ AI เท่าไหร่?', a: 'ขึ้นอยู่กับความซับซ้อน งานทดลองแนวคิด (Proof of Concept) เริ่มที่ไม่กี่แสนบาท ระบบเต็มรูปแบบอาจถึงหลักล้าน ติดต่อมาเพื่อประเมินราคาได้เลย'},
      {q: 'ใช้กับภาษาไทยได้ไหม?', a: 'ได้ แต่เราไม่ถือเอาเองว่าจะใช้ได้ เอกสารภาษาไทย ภาษาพูด และข้อความที่ผสมไทยกับอังกฤษ อยู่ในชุดทดสอบตั้งแต่สัปดาห์แรก และเราวัดความแม่นยำภาษาไทยแยกจากภาษาอังกฤษ'},
      {q: 'จะกัน AI ไม่ให้แต่งคำตอบขึ้นมาเองได้ยังไง?', a: 'ผู้ช่วยที่ตอบจากเอกสารของคุณ เราใช้การค้นข้อมูล (Retrieval) ให้คำตอบสร้างจากเนื้อหาของคุณเองและโชว์แหล่งที่มา เราตั้งให้ผู้ช่วยบอกว่าไม่รู้แทนการเดา และทดสอบด้วยคำถามที่ควรปฏิเสธ'},
      {q: 'ต้องเตรียมอะไรก่อนเวิร์กช็อปแรก?', a: 'ไม่ต้องเตรียมเป็นทางการ แค่เอางานสองสามอย่างที่กินเวลาทีมมา ตัวอย่างจริงบางส่วน เช่น เอกสาร Ticket หรือชีต และคนที่รู้ว่างานนั้นทำกันจริงๆ ยังไง ที่เหลือเราจัดการเอง'}
    ]
  const related     = isEN ? [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Automation', href: '/services/automation'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ] : [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Automation', href: '/services/automation'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ]

  const agentLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>user</span>&nbsp;{isEN ? '"Summarize this week\'s tickets"' : '"สรุป Ticket สัปดาห์นี้ให้หน่อย"'}</> },
    { n: 2, jsx: <>&nbsp;</> },
    { n: 3, jsx: <><span style={{ color: 'var(--accent-2)' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>calling tool</span> query_tickets()</> },
    { n: 4, jsx: <><span style={{ color: 'var(--accent-2)' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>calling tool</span> analyze_sentiment()</> },
    { n: 5, jsx: <>&nbsp;</> },
    { n: 6, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'grounded in 128 sources' : 'อ้างอิงจาก 128 แหล่งข้อมูล'}</> },
    { n: 7, jsx: <>&nbsp;</> },
    { n: 8, jsx: <><span style={{ color: '#82AAFF' }}>agent</span>&nbsp;{isEN ? '"3 themes this week: billing (42%)…"' : '"สัปดาห์นี้มี 3 ประเด็นหลัก: การเงิน (42%)…"'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>agent.trace</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {agentLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Eval Score' : 'คะแนนการทดสอบ'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 21l-2.4-7.6L3 11l6.6-2.4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '70%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '94%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '94% grounded accuracy' : 'ความแม่นยำ 94%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-robot', title: 'AI Agents & Tool Use', desc: 'Agents that break a task into steps, call your tools and APIs, recover when a step fails, and carry the workflow to the end. We define what each agent may touch before it runs, so it stays inside clear limits.' },
    { icon: 'ti-chart-line', title: 'Predictive Models', desc: 'Forecasting, scoring, and recommendation models trained on your own history, for jobs like demand planning, churn warnings, or next-best-offer. They are monitored after launch so you notice when accuracy drops.' },
    { icon: 'ti-database-search', title: 'RAG & Knowledge Systems', desc: 'Assistants that answer from your documents, tickets, and databases and cite the source passage, so staff can check any answer. Documents stay in storage you control, and Thai and English content are both tested.' },
    { icon: 'ti-adjustments-cog', title: 'Agentic Automation', desc: 'Automations where AI does the routine steps and a person approves the risky ones. It takes manual work off the team while keeping a record of what was decided and by whom.' },
  ] : [
    { icon: 'ti-robot', title: 'AI Agents & Tool Use', desc: 'เอเจนต์ที่แตกงานเป็นขั้นตอน เรียกใช้เครื่องมือและ API ของคุณ แก้ปัญหาเองเมื่อขั้นไหนพลาด และทำงานจนจบ เรากำหนดไว้ก่อนเลยว่าเอเจนต์แต่ละตัวแตะอะไรได้บ้าง จึงทำงานอยู่ในขอบเขตที่ชัดเจน' },
    { icon: 'ti-chart-line', title: 'Predictive Models', desc: 'โมเดลพยากรณ์ ให้คะแนน และแนะนำ ที่ฝึกจากข้อมูลย้อนหลังของคุณเอง ใช้กับงานอย่างวางแผนสต็อก เตือนลูกค้าที่กำลังจะหาย หรือแนะนำข้อเสนอที่เหมาะที่สุด และติดตามผลต่อหลังเปิดใช้ ถ้าความแม่นยำตกคุณจะรู้ทัน' },
    { icon: 'ti-database-search', title: 'RAG & Knowledge Systems', desc: 'ผู้ช่วยที่ตอบจากเอกสาร Ticket และฐานข้อมูลของคุณ พร้อมอ้างอิงข้อความต้นทาง พนักงานจึงเช็คคำตอบได้ทุกข้อ เอกสารเก็บอยู่ในที่ที่คุณควบคุมได้ และทดสอบทั้งเนื้อหาภาษาไทยและอังกฤษ' },
    { icon: 'ti-adjustments-cog', title: 'Agentic Automation', desc: 'ระบบอัตโนมัติที่ให้ AI ทำขั้นตอนประจำ และให้คนอนุมัติขั้นตอนที่เสี่ยง ลดงานมือของทีม และเก็บบันทึกไว้ว่าใครหรืออะไรเป็นคนตัดสินใจเรื่องไหน' },
  ]

  const techStack = [
    { label: 'OpenAI', svg: 'openai' },
    { label: 'Anthropic Claude', svg: 'anthropic' },
    { label: 'Google Gemini', svg: 'googlegemini' },
    { label: 'LangChain', svg: 'langchain' },
    { label: 'LangGraph', svg: 'langgraph' },
    { label: 'Vercel AI SDK', svg: 'vercel' },
    { label: 'LlamaIndex', icon: 'ti-stack-2' },
    { label: 'pgvector', svg: 'postgresql' },
    { label: 'Python', svg: 'python' },
    { label: 'Hugging Face', svg: 'huggingface' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'AI Audit', desc: 'We map your data, your workflows, and the use cases worth the effort, ranked with your team.' },
    { no: '02', title: 'Agent Design', desc: 'We define the tools the agent can use, the limits it works within, and how success will be measured.' },
    { no: '03', title: 'Build & Evaluate', desc: 'Short build cycles, each checked by an automated test set built from your real examples.' },
    { no: '04', title: 'Integration', desc: 'We connect the AI to your existing products, APIs, and data sources.' },
    { no: '05', title: 'Deploy', desc: 'Staged release to production with monitoring running from the first day.' },
    { no: '06', title: 'Monitor', desc: 'We watch drift, cost, and accuracy, and retrain or adjust as your data changes.' },
  ] : [
    { no: '01', title: 'AI Audit', desc: 'สำรวจข้อมูล ขั้นตอนงาน และงานที่คุ้มกับแรงที่ลงไป แล้วจัดอันดับร่วมกับทีมของคุณ' },
    { no: '02', title: 'Agent Design', desc: 'กำหนดเครื่องมือที่เอเจนต์ใช้ได้ ขอบเขตที่ต้องอยู่ในนั้น และวิธีวัดว่าสำเร็จหรือไม่' },
    { no: '03', title: 'Build & Evaluate', desc: 'พัฒนาเป็นรอบสั้นๆ และตรวจทุกรอบด้วยชุดทดสอบอัตโนมัติที่สร้างจากตัวอย่างจริงของคุณ' },
    { no: '04', title: 'Integration', desc: 'เชื่อม AI กับผลิตภัณฑ์ API และแหล่งข้อมูลที่คุณมีอยู่' },
    { no: '05', title: 'Deploy', desc: 'เปิดใช้งานจริงเป็นระยะ พร้อมระบบติดตามตั้งแต่วันแรก' },
    { no: '06', title: 'Monitor', desc: 'ดูความคลาดเคลื่อน (Drift) ต้นทุน และความแม่นยำ แล้วฝึกใหม่หรือปรับเมื่อข้อมูลของคุณเปลี่ยน' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What AI development services does Haliviq offer?', a: 'We build multi-step AI agents that use tools and APIs to finish real workflows, RAG assistants that answer from your private documents and databases, copilots embedded inside products you already run, and the test sets and monitoring that keep them reliable. A typical engagement starts with an AI audit to find where AI saves measurable time or money in your business. It then moves to agent design and a small pilot on real data, followed by human-in-the-loop review design and monitoring after launch, so the result does not turn into a one-off demo that quietly stops being used.' },
    { q: 'Which AI models and frameworks do you work with?', a: 'We build mainly on OpenAI, Anthropic Claude, and Google Gemini, and we choose per task by looking at response speed, cost, and how well the model reasons on your material, rather than defaulting to one vendor. LangChain and LangGraph handle the step-by-step logic and state of agents, LlamaIndex and pgvector cover retrieval and embeddings, and Python with Hugging Face comes in when a task needs a custom or open-source model. Because the pieces are separate, you can swap a model or provider later without rebuilding the whole system.' },
    { q: 'Can you add AI to a product we already have?', a: 'Yes, and most of our AI work is exactly this: putting copilots, assistants, and automation into products that are already live instead of building something new. We begin with a short audit of your product and data to find the use case with the clearest return, then ship that one first as a limited pilot before widening it. You get a working result to judge before committing to a larger plan.' },
    { q: 'How do you keep AI systems reliable in production?', a: 'Every system we ship has a test set that scores outputs against real examples before and after each change. RAG answers carry citations so they can be traced to a source document, risky or irreversible decisions go to a person for review, and monitoring tracks accuracy, response time, and cost as they move over time. We treat AI quality as ongoing engineering work, like uptime or security, rather than a checklist you tick once at launch.' },
    { q: 'How long does an AI project take?', a: 'It depends on scope. As a rough guide, a Proof of Concept for one agent or RAG use case takes 3-6 weeks from audit to a working demo on real data. Adding a copilot to an existing product, with limits and tests in place, usually takes 8-14 weeks. A full multi-agent system with several integrations, human review, and production monitoring can take 3-6 months. We always start with the smallest version that proves value, then grow it from something people are already using.' },
    { q: 'How much does an AI project cost?', a: 'Cost follows scope and integration effort far more than model choice. API fees from OpenAI, Anthropic, or Gemini are usually a small part of the total next to engineering time. A focused Proof of Concept for one use case generally starts in the low six figures (THB). A production agent or RAG system connected to your stack, with testing and monitoring, typically costs several times that. We quote a fixed price per phase after a discovery call, and we include the expected ongoing token and API costs so nothing surprises you after launch.' },
    { q: 'What about data privacy and security with AI systems?', a: "Your data is not used to train public models. We use the enterprise API tiers from OpenAI, Anthropic, and Google, whose terms exclude your data from training. For RAG, sensitive documents stay in a database you control, typically pgvector inside a Postgres instance that is yours, and we set exactly what an agent may read, call, or write before it goes live. If your industry requires it, we can design a deployment that runs on your own servers (on-premise) or inside an isolated VPC." },
    { q: 'Who owns the models, prompts, and code once the project is done?', a: "You do. Custom code, agent configurations, prompt templates, evaluation datasets, and fine-tuned model weights where they apply all transfer to you on final payment, with no lock-in to tools that only Haliviq has. We recommend building inside your own cloud account and GitHub organisation for anything headed to production, so you can see and control everything from day one and carry on without us if you choose." },
  ] : [
    { q: 'Haliviq ให้บริการพัฒนา AI อะไรบ้าง?', a: 'เราสร้างเอเจนต์ AI หลายขั้นตอนที่เรียกใช้เครื่องมือและ API ทำขั้นตอนงานจริงให้จบ ผู้ช่วยแบบ RAG ที่ตอบจากเอกสารและฐานข้อมูลส่วนตัวของคุณ Copilot ที่ฝังอยู่ในผลิตภัณฑ์ที่คุณใช้อยู่แล้ว และชุดทดสอบกับระบบติดตามที่ช่วยให้ทุกอย่างน่าเชื่อถือ โปรเจกต์ทั่วไปเริ่มจากการตรวจประเมิน AI เพื่อหาว่า AI ช่วยประหยัดเวลาหรือเงินได้ชัดๆ ตรงไหนในธุรกิจของคุณ จากนั้นออกแบบเอเจนต์และทำงานนำร่องเล็กๆ กับข้อมูลจริง แล้วต่อด้วยการออกแบบขั้นตอนที่ให้คนร่วมตรวจและติดตามผลหลังเปิดใช้งาน เพื่อไม่ให้จบแค่เป็นตัวอย่างที่ใช้ครั้งเดียวแล้วเงียบหายไป' },
    { q: 'ใช้โมเดลและ Framework อะไรบ้าง?', a: 'เราสร้างบน OpenAI, Anthropic Claude และ Google Gemini เป็นหลัก โดยเลือกตามงาน ดูจากความเร็วในการตอบ ต้นทุน และความสามารถในการคิดกับข้อมูลของคุณ ไม่ยึดผู้ให้บริการรายเดียว LangChain และ LangGraph ใช้ควบคุมลำดับขั้นตอนและสถานะของเอเจนต์ LlamaIndex กับ pgvector ใช้ค้นข้อมูลและทำ Embedding ส่วน Python กับ Hugging Face ใช้เมื่องานต้องการโมเดลเฉพาะหรือโอเพนซอร์ส เพราะแยกส่วนกันแบบนี้ ภายหลังคุณเปลี่ยนโมเดลหรือผู้ให้บริการได้โดยไม่ต้องรื้อระบบทั้งหมด' },
    { q: 'เพิ่ม AI เข้าไปในผลิตภัณฑ์ที่มีอยู่แล้วได้ไหม?', a: 'ได้ และงาน AI ส่วนใหญ่ของเราก็เป็นแบบนี้ คือใส่ Copilot ผู้ช่วย และระบบอัตโนมัติเข้าไปในผลิตภัณฑ์ที่เปิดใช้งานอยู่แล้ว มากกว่าสร้างใหม่ เราเริ่มจากตรวจผลิตภัณฑ์และข้อมูลของคุณสั้นๆ เพื่อหางานที่ให้ผลตอบแทนชัดที่สุด แล้วส่งงานนั้นก่อนเป็นโครงการนำร่องที่จำกัดขอบเขต ก่อนขยายต่อ คุณจะได้เห็นผลจริงก่อนตัดสินใจลงทุนกับแผนที่ใหญ่ขึ้น' },
    { q: 'ทำให้ระบบ AI น่าเชื่อถือเมื่อใช้งานจริงได้อย่างไร?', a: 'ทุกระบบที่เราส่งมอบมีชุดทดสอบที่ให้คะแนนผลลัพธ์เทียบกับตัวอย่างจริง ทั้งก่อนและหลังแก้ไขทุกครั้ง คำตอบแบบ RAG มีการอ้างอิงแหล่งที่มา ย้อนไปดูเอกสารต้นทางได้ การตัดสินใจที่เสี่ยงหรือย้อนกลับไม่ได้จะส่งให้คนตรวจ และมีระบบติดตามความแม่นยำ เวลาตอบ และต้นทุนที่เปลี่ยนไปเรื่อยๆ เรามองว่าคุณภาพของ AI เป็นงานวิศวกรรมที่ต้องดูแลต่อเนื่อง เหมือนเรื่อง Uptime หรือความปลอดภัย ไม่ใช่รายการตรวจที่ติ๊กครั้งเดียวตอนเปิดใช้งาน' },
    { q: 'โปรเจกต์ AI ใช้เวลานานแค่ไหน?', a: 'ขึ้นอยู่กับขอบเขตงาน โดยประมาณ Proof of Concept ของเอเจนต์หรือ RAG หนึ่งงานใช้เวลา 3-6 สัปดาห์ ตั้งแต่ตรวจประเมินจนได้ตัวอย่างที่ใช้กับข้อมูลจริงได้ การใส่ Copilot เข้าไปในผลิตภัณฑ์ที่มีอยู่ พร้อมขอบเขตและชุดทดสอบ มักใช้ 8-14 สัปดาห์ ส่วนระบบหลายเอเจนต์เต็มรูปแบบที่เชื่อมหลายระบบ มีคนร่วมตรวจ และติดตามผลหลังใช้งาน อาจใช้ 3-6 เดือน เราเริ่มจากเวอร์ชันเล็กที่สุดที่พิสูจน์คุณค่าได้ก่อนเสมอ แล้วค่อยต่อยอดจากสิ่งที่คนใช้อยู่แล้ว' },
    { q: 'โปรเจกต์ AI มีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นอยู่กับขอบเขตงานและแรงในการเชื่อมระบบ มากกว่าการเลือกโมเดลมาก ค่า API ของ OpenAI, Anthropic หรือ Gemini มักเป็นส่วนน้อยเมื่อเทียบกับค่าแรงวิศวกร Proof of Concept หนึ่งงานโดยทั่วไปเริ่มที่หลักแสนต้นๆ (บาท) ส่วนเอเจนต์หรือระบบ RAG ที่ใช้งานจริงและเชื่อมกับระบบเดิม พร้อมทดสอบและติดตามผล มักอยู่ที่หลายเท่าของตัวเลขนั้น เราเสนอราคาคงที่เป็นรายเฟสหลังคุยทำความเข้าใจโจทย์ และใส่ประมาณการค่า Token กับ API ที่ต้องจ่ายต่อเนื่องไว้ด้วย คุณจะไม่เจอค่าใช้จ่ายที่คาดไม่ถึงหลังเปิดใช้งาน' },
    { q: 'เรื่องความเป็นส่วนตัวของข้อมูลและความปลอดภัยของระบบ AI เป็นอย่างไร?', a: 'ข้อมูลของคุณไม่ถูกนำไปฝึกโมเดลสาธารณะ เราใช้ Enterprise API ของ OpenAI, Anthropic และ Google ซึ่งในข้อตกลงระบุว่าไม่นำข้อมูลไปฝึกโมเดล สำหรับระบบ RAG เอกสารสำคัญเก็บไว้ในฐานข้อมูลที่คุณควบคุมได้ โดยทั่วไปคือ pgvector ใน Postgres ของคุณเอง และเรากำหนดชัดก่อนเปิดใช้งานว่าเอเจนต์อ่าน เรียกใช้ หรือเขียนอะไรได้บ้าง ถ้าอุตสาหกรรมของคุณต้องการ เราออกแบบให้ติดตั้งบนเซิร์ฟเวอร์ของคุณเอง (On-premise) หรือแยกใน VPC ได้' },
    { q: 'โมเดล Prompt และโค้ดเป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณ โค้ดที่พัฒนา การตั้งค่าเอเจนต์ Prompt Template ชุดข้อมูลทดสอบ และน้ำหนักโมเดลที่ Fine-tune ไว้ (ถ้ามี) โอนให้คุณเมื่อชำระเงินงวดสุดท้าย ไม่มีการผูกติดกับเครื่องมือที่มีแต่ Haliviq เราแนะนำให้ทำบน Cloud Account และ GitHub Organization ของคุณเองสำหรับระบบที่จะใช้งานจริง คุณจะเห็นและควบคุมทุกอย่างได้ตั้งแต่วันแรก และพัฒนาต่อเองได้ถ้าต้องการ' },
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
            {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven models, frameworks, and infrastructure we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'โมเดล เฟรมเวิร์ก และโครงสร้างพื้นฐานที่ผ่านการพิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from problem to production — adjusted per use case, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากปัญหาไปจนถึงใช้งานจริง ปรับตามแต่ละงาน ไม่ใช่สูตรตายตัว'}
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
            {isEN ? 'Straight answers about how we build AI systems.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราสร้างระบบ AI'}
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
      color="var(--accent)" bg="var(--purple-bg)"
      whyImg="/images/services/ai/why1.jpg"
      whyImg2="/images/services/ai/why2.jpg"
      featureImg="/images/services/ai/feature.jpg"
      processImg="/images/services/ai/process.jpg"
    />
  )
}
