import Link from 'next/link'
import FAQ from '@/components/FAQ'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  googlecloud: { hex: '#4285F4', path: 'M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z' },
  kubernetes: { hex: '#326CE5', path: 'M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z' },
  docker: { hex: '#2496ED', path: 'M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z' },
  terraform: { hex: '#844FBA', path: 'M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z' },
  pulumi: { hex: '#8A3391', path: 'M11.997 0C10.226 0 8.79.83 8.79 1.856c0 1.025 1.436 1.856 3.207 1.856 1.772 0 3.208-.831 3.208-1.856C15.205.83 13.77 0 11.997 0zM5.95 3.488c-1.772 0-3.208.83-3.208 1.856C2.742 6.369 4.178 7.2 5.95 7.2c1.771 0 3.207-.831 3.207-1.856 0-1.025-1.436-1.856-3.207-1.856zm12.103 0c-1.772 0-3.208.83-3.208 1.856 0 1.025 1.436 1.856 3.208 1.856 1.771 0 3.207-.831 3.207-1.856 0-1.025-1.436-1.856-3.207-1.856zm-6.056 3.495c-1.771 0-3.207.831-3.207 1.856 0 1.025 1.436 1.856 3.207 1.856 1.772 0 3.208-.83 3.208-1.856 0-1.025-1.436-1.856-3.208-1.856zm-10.127.67a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.534 2.324 2.362 3.211 1.85.888-.513.89-2.171.003-3.706-.72-1.246-1.803-2.027-2.66-2zm20.257.004c-.857-.026-1.941.754-2.661 2-.886 1.535-.884 3.194.003 3.707.888.512 2.325-.316 3.211-1.85.886-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-6.048 3.492c-.857-.026-1.94.754-2.66 2-.886 1.535-.885 3.194.003 3.706.887.513 2.325-.316 3.21-1.85.887-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-8.16.001a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.535 2.324 2.363 3.211 1.85.888-.512.89-2.171.003-3.705-.72-1.247-1.803-2.028-2.66-2.002zm-6.047 3.494a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.534 2.324 2.362 3.212 1.85.887-.513.888-2.172.003-3.706-.72-1.246-1.804-2.027-2.661-2.001zm20.258.002c-.857-.026-1.941.755-2.66 2.001-.887 1.535-.885 3.193.003 3.706.887.512 2.325-.316 3.21-1.85.886-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-6.047 3.492c-.858-.026-1.942.754-2.661 2-.886 1.535-.885 3.194.003 3.706.888.513 2.325-.315 3.21-1.85.887-1.533.885-3.193-.002-3.705a1.157 1.157 0 0 0-.55-.151zm-8.163.003a1.157 1.157 0 0 0-.55.151c-.887.513-.889 2.172-.003 3.706.886 1.534 2.323 2.363 3.211 1.85.888-.512.89-2.171.004-3.706-.72-1.246-1.804-2.027-2.662-2z' },
  helm: { hex: '#3971E3', path: 'M12.337 0c-.475 0-.861 1.016-.861 2.269 0 .527.069 1.011.183 1.396a8.514 8.514 0 0 0-3.961 1.22 5.229 5.229 0 0 0-.595-1.093c-.606-.866-1.34-1.436-1.79-1.43a.381.381 0 0 0-.217.066c-.39.273-.123 1.326.596 2.353.267.381.559.705.84.948a8.683 8.683 0 0 0-1.528 1.716h1.734a7.179 7.179 0 0 1 5.381-2.421 7.18 7.18 0 0 1 5.382 2.42h1.733a8.687 8.687 0 0 0-1.32-1.53c.35-.249.735-.643 1.078-1.133.719-1.027.986-2.08.596-2.353a.382.382 0 0 0-.217-.065c-.45-.007-1.184.563-1.79 1.43a4.897 4.897 0 0 0-.676 1.325 8.52 8.52 0 0 0-3.899-1.42c.12-.39.193-.887.193-1.429 0-1.253-.386-2.269-.862-2.269zM1.624 9.443v5.162h1.358v-1.968h1.64v1.968h1.357V9.443H4.62v1.838H2.98V9.443zm5.912 0v5.162h3.21v-1.108H8.893v-.95h1.64v-1.142h-1.64v-.84h1.853V9.443zm4.698 0v5.162h3.218v-1.362h-1.86v-3.8zm4.706 0v5.162h1.364v-2.643l1.357 1.225 1.35-1.232v2.65h1.365V9.443h-.614l-2.1 1.914-2.109-1.914zm-11.82 7.28a8.688 8.688 0 0 0 1.412 1.548 5.206 5.206 0 0 0-.841.948c-.719 1.027-.985 2.08-.596 2.353.39.273 1.289-.338 2.007-1.364a5.23 5.23 0 0 0 .595-1.092 8.514 8.514 0 0 0 3.961 1.219 5.01 5.01 0 0 0-.183 1.396c0 1.253.386 2.269.861 2.269.476 0 .862-1.016.862-2.269 0-.542-.072-1.04-.193-1.43a8.52 8.52 0 0 0 3.9-1.42c.121.4.352.865.675 1.327.719 1.026 1.617 1.637 2.007 1.364.39-.273.123-1.326-.596-2.353-.343-.49-.727-.885-1.077-1.135a8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252z' },
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

  const badge    = isEN ? 'Infrastructure / Cloud Services'  : 'โครงสร้างพื้นฐาน / Cloud Services'
  const title    = isEN ? 'Cloud Architecture'  : 'สถาปัตยกรรม Cloud'
  const subtitle = isEN ? 'That Scales With You'    : 'ที่เติบโตไปพร้อมธุรกิจคุณ'
  const heroDesc = isEN ? 'If your systems still live in a server room, or are spread across several cloud accounts that nobody fully understands, this is where we start. Haliviq plans and carries out the move to AWS, Google Cloud or Azure, tidies the architecture, and sets up cost tracking so the monthly bill stays predictable. Migrations are done in phases with a way back at every step, and everything is monitored from the first day.'  : 'ถ้าระบบของคุณยังอยู่ในห้องเซิร์ฟเวอร์ หรือกระจายอยู่หลายบัญชี Cloud ที่ไม่มีใครเข้าใจครบ เราเริ่มต้นจากตรงนั้น Haliviq วางแผนและย้ายระบบไป AWS, Google Cloud หรือ Azure จัดสถาปัตยกรรมให้เป็นระเบียบ และตั้งระบบติดตามค่าใช้จ่ายให้บิลรายเดือนคาดเดาได้ เราย้ายเป็นเฟส มีทางย้อนกลับทุกขั้น และติดตามระบบตั้งแต่วันแรก'
  const whyTitle = isEN ? 'Why unmanaged cloud spend quietly bleeds your business'    : 'ทำไม Cloud ที่ไม่มีคนดูแลถึงค่อยๆ เผาเงินคุณ'
  const whyDesc  = isEN ? 'Most companies overspend on cloud by 30% or more without noticing. Test servers nobody switched off, storage from projects that ended last year, and databases sized for a peak that never came all keep billing quietly. When nobody owns the invoice, the waste only shows up when finance asks why it doubled.'  : 'ธุรกิจส่วนใหญ่จ่ายค่า Cloud เกินจริง 30% ขึ้นไปโดยไม่รู้ตัว เซิร์ฟเวอร์ทดสอบที่ไม่มีใครปิด พื้นที่เก็บข้อมูลของโปรเจกต์ที่จบไปเมื่อปีก่อน และฐานข้อมูลที่ตั้งขนาดรองรับช่วงพีกที่ไม่เคยมาถึง ทั้งหมดยังคิดเงินเงียบๆ ทุกเดือน พอไม่มีใครรับผิดชอบใบแจ้งหนี้ ความสิ้นเปลืองจะโผล่ก็ต่อเมื่อฝ่ายการเงินถามว่าทำไมค่าใช้จ่ายเพิ่มขึ้นเท่าตัว'
  const ctaTitle = isEN ? 'Ready to fix your cloud?'    : 'พร้อมจัดระเบียบ Cloud ของคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free cloud cost and architecture review. Give us read-only access to your billing and account structure, and we will show you where the money is leaking and which risks deserve attention first.'   : 'เริ่มจากให้เราตรวจค่าใช้จ่ายและสถาปัตยกรรม Cloud ให้ฟรี ให้สิทธิ์อ่านอย่างเดียวกับบิลและโครงสร้างบัญชี เราจะชี้ให้เห็นว่าเงินรั่วตรงไหน และความเสี่ยงข้อไหนควรดูก่อน'
  const overviewText = isEN
    ? 'We design and run cloud platforms that scale and keep costs predictable from the first day. The work includes moving off on-premises systems, merging scattered multi-cloud accounts into one governed environment, and operating production Kubernetes. Security, compliance, infrastructure automation, networking, identity, observability and cost control are part of the architecture itself rather than patches applied after an outage. Typical clients are Thai companies with a data centre contract coming up for renewal, a cloud bill that keeps growing, or a product team that has outgrown its first deployment setup.'
    : 'เราออกแบบและดูแลแพลตฟอร์ม Cloud ที่ขยายได้และคุมต้นทุนได้ตั้งแต่วันแรก งานของเรารวมถึงการย้ายออกจากระบบ On-premises การรวมบัญชี Multi-cloud ที่กระจัดกระจายให้เป็นสภาพแวดล้อมเดียวที่ควบคุมได้ และการดูแล Kubernetes ระดับใช้งานจริง ความปลอดภัย Compliance ระบบอัตโนมัติ เครือข่าย การจัดการสิทธิ์ผู้ใช้ การติดตามระบบ และการคุมต้นทุน เป็นส่วนหนึ่งของสถาปัตยกรรมเอง ไม่ใช่แพตช์ที่ใส่ทีหลังหลังระบบล่ม ลูกค้าทั่วไปของเราคือบริษัทไทยที่สัญญาดาต้าเซ็นเตอร์ใกล้หมด บิล Cloud ที่โตขึ้นเรื่อยๆ หรือทีมผลิตภัณฑ์ที่โตเกินวิธี Deploy แบบแรกที่เคยตั้งไว้'

  const heroBullets = isEN ? [
      'Cloud migration in phases, with a rollback point at every cutover',
      'Multi-cloud and hybrid designs that avoid needless vendor lock-in',
      'FinOps routines that make spend visible and predictable each month',
      'Identity, network and secrets set up securely by default',
      'Kubernetes operations for teams running production workloads',
    ] : [
      'ย้ายระบบขึ้น Cloud เป็นเฟส มีจุดย้อนกลับทุกครั้งที่สลับใช้งาน',
      'ออกแบบ Multi-cloud และ Hybrid โดยไม่ผูกติดผู้ให้บริการเกินจำเป็น',
      'วางกิจวัตร FinOps ให้เห็นค่าใช้จ่ายชัดและคาดการณ์ได้ทุกเดือน',
      'ตั้งค่าสิทธิ์ผู้ใช้ เครือข่าย และ Secret ให้ปลอดภัยตั้งแต่ค่าเริ่มต้น',
      'ดูแล Kubernetes สำหรับทีมที่รันงานจริงบน Production',
    ]
  const whyPoints   = isEN ? [
      'Idle instances and over-provisioned services routinely account for 30% or more of a typical cloud bill, and they are usually the quickest savings to claim',
      'Phased migrations with rollback checkpoints keep disruption to the business close to zero, because a failed step is reversed instead of pushed through',
      'Multi-cloud sprawl with no clear architecture creates blind spots for both cost and security, since each account has its own rules and its own owner',
      'A well-run Kubernetes platform takes deployment from days of manual work to minutes, and recovers failed services by itself',
      'Security designed into the architecture on day one costs far less than retrofitting it after an incident',
    ] : [
      'เครื่องที่ว่างอยู่และบริการที่เปิดไว้เกินจำเป็นมักเป็น 30% ขึ้นไปของบิล Cloud ทั่วไป และมักเป็นส่วนที่ประหยัดได้เร็วที่สุด',
      'การย้ายเป็นเฟสพร้อมจุดย้อนกลับ ทำให้ธุรกิจแทบไม่สะดุด เพราะถ้าขั้นไหนพลาดก็ย้อนกลับได้ ไม่ต้องดันต่อ',
      'Multi-cloud ที่กระจัดกระจายโดยไม่มีสถาปัตยกรรมชัดเจน สร้างจุดบอดทั้งเรื่องต้นทุนและความปลอดภัย เพราะแต่ละบัญชีมีกฎและเจ้าของของตัวเอง',
      'แพลตฟอร์ม Kubernetes ที่ดูแลดี ลดการ Deploy จากงานมือหลายวันเหลือไม่กี่นาที และกู้บริการที่ล้มให้เองได้',
      'ออกแบบความปลอดภัยไว้ในสถาปัตยกรรมตั้งแต่วันแรก ถูกกว่าการมาแก้ย้อนหลังหลังเกิดเหตุมาก',
    ]
  const outcomes    = isEN ? [
      {stat: '30%', label: 'Average Cost Reduction', desc: 'After FinOps review and right-sizing'},
      {stat: '99.9%', label: 'Uptime SLA', desc: 'Multi-AZ redundant architecture'},
      {stat: '0', label: 'Downtime Migrations', desc: 'With rollback-safe cutover plans'},
      {stat: '24/7', label: 'Platform Monitoring', desc: 'Observability from day one'}
    ] : [
      {stat: '30%', label: 'ลดต้นทุนเฉลี่ย', desc: 'หลังรีวิว FinOps และปรับขนาดให้พอดี'},
      {stat: '99.9%', label: 'Uptime SLA', desc: 'สถาปัตยกรรมสำรองข้าม Multi-AZ'},
      {stat: '0', label: 'ระบบหยุดจากการย้าย', desc: 'ด้วยแผนสลับระบบที่ย้อนกลับได้'},
      {stat: '24/7', label: 'ติดตามแพลตฟอร์ม', desc: 'วางระบบติดตามตั้งแต่วันแรก'}
    ]
  const features    = isEN ? [
      {icon: 'ti-cloud-upload', title: 'Migration & Cutover', desc: 'Applications move in planned waves. Data is validated after each transfer, the old and new systems run side by side until the numbers match, and every wave has a documented rollback.'},
      {icon: 'ti-topology-star-3', title: 'Multi-Cloud & Hybrid', desc: 'We use more than one provider only when there is a real reason, such as regulation, vendor risk or a service one cloud does better. Otherwise we keep the design simple, with portable tooling to limit lock-in.'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Control', desc: 'Right-sizing, reserved capacity and storage tiering, plus tagging and monthly reporting by team and product, so each part of the business can see what it spends and why.'},
      {icon: 'ti-shield-lock', title: 'Cloud Security Posture', desc: 'Least-privilege identity, network segmentation, secrets management and audit logging in the base design, with automated checks that flag drift from your compliance rules.'},
      {icon: 'ti-brand-kubernetes', title: 'Kubernetes Operations', desc: 'Managed clusters with autoscaling and self-healing, plus the upgrade, security-patching and on-call routines that keep production steady. We containerise in stages and only the services that benefit.'},
      {icon: 'ti-chart-dots', title: 'Observability', desc: 'Metrics, logs and traces with alerts that go to the right person, so problems are spotted and often fixed before customers notice.'}
    ] : [
      {icon: 'ti-cloud-upload', title: 'Migration & Cutover', desc: 'ย้ายแอปเป็นรอบตามแผน ตรวจข้อมูลหลังย้ายทุกครั้ง รันระบบเก่าคู่กับระบบใหม่จนตัวเลขตรงกัน และทุกรอบมีแผนย้อนกลับที่เขียนไว้'},
      {icon: 'ti-topology-star-3', title: 'Multi-Cloud & Hybrid', desc: 'เราใช้มากกว่าหนึ่งผู้ให้บริการเมื่อมีเหตุผลจริง เช่น กฎหมาย การกระจายความเสี่ยง หรือบริการที่เจ้าหนึ่งทำได้ดีกว่า นอกนั้นเราออกแบบให้เรียบง่าย ใช้เครื่องมือที่ย้ายข้ามเจ้าได้เพื่อลดการผูกติด'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Control', desc: 'ปรับขนาดเครื่อง จองทรัพยากรล่วงหน้า แบ่งชั้นที่เก็บข้อมูล พร้อมติดแท็กและทำรายงานรายเดือนแยกตามทีมและผลิตภัณฑ์ ทุกส่วนของธุรกิจจะเห็นว่าตัวเองใช้เงินเท่าไหร่และเพราะอะไร'},
      {icon: 'ti-shield-lock', title: 'Cloud Security Posture', desc: 'สิทธิ์ผู้ใช้แบบน้อยที่สุดที่จำเป็น แยกส่วนเครือข่าย จัดการ Secret และเก็บ Audit Log ไว้ในดีไซน์พื้นฐาน พร้อมการตรวจอัตโนมัติที่เตือนเมื่อการตั้งค่าหลุดจากกฎ Compliance ของคุณ'},
      {icon: 'ti-brand-kubernetes', title: 'Kubernetes Operations', desc: 'Cluster แบบ Managed ที่มี Autoscaling และซ่อมตัวเอง (Self-healing) พร้อมขั้นตอนอัปเกรด แพตช์ความปลอดภัย และเข้าเวร ที่ทำให้ Production นิ่ง เราทำเป็น Container เป็นระยะ และเฉพาะบริการที่ได้ประโยชน์'},
      {icon: 'ti-chart-dots', title: 'Observability', desc: 'Metrics, Log และ Trace พร้อมการแจ้งเตือนถึงคนที่ถูกต้อง เพื่อให้เห็นปัญหาและมักแก้ได้ก่อนที่ลูกค้าจะรู้ตัว'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Assessment', desc: 'We list the workloads you run, map which depends on which, and rate each by migration risk and business importance.'},
      {no: '02', title: 'Planning', desc: 'We design the landing zone (accounts, network, identity) and sequence the migration waves, with a rollback for each.'},
      {no: '03', title: 'Migration', desc: 'We transfer systems wave by wave, check data integrity after each, and switch users over only after the new side is verified.'},
      {no: '04', title: 'Optimize', desc: 'With real usage data we tune cost, throughput and resilience, and retire what is no longer needed.'},
      {no: '05', title: 'Observe', desc: 'We set up monitoring, alerting and operational runbooks, so your team knows what normal looks like and what to do when it is not.'},
      {no: '06', title: 'Support', desc: 'We can keep operating the platform for you, or train your team and stay on call for the hard parts.'}
    ] : [
      {no: '01', title: 'Assessment', desc: 'เราลิสต์งานที่คุณรันอยู่ วาดว่าอะไรพึ่งอะไร แล้วให้คะแนนแต่ละตัวตามความเสี่ยงในการย้ายและความสำคัญต่อธุรกิจ'},
      {no: '02', title: 'Planning', desc: 'ออกแบบ Landing Zone (บัญชี เครือข่าย สิทธิ์ผู้ใช้) และลำดับรอบการย้าย โดยทุกรอบมีแผนย้อนกลับ'},
      {no: '03', title: 'Migration', desc: 'ย้ายระบบทีละรอบ ตรวจความถูกต้องของข้อมูลหลังแต่ละรอบ และสลับผู้ใช้ไปใช้ฝั่งใหม่เมื่อตรวจแล้วว่าไม่มีปัญหา'},
      {no: '04', title: 'Optimize', desc: 'จากข้อมูลการใช้งานจริง เราปรับต้นทุน ปริมาณงานที่รับได้ และความทนทาน และปิดสิ่งที่ไม่จำเป็นแล้ว'},
      {no: '05', title: 'Observe', desc: 'วางระบบติดตาม การแจ้งเตือน และ Runbook ให้ทีมคุณรู้ว่าสภาพปกติเป็นอย่างไร และต้องทำอะไรเมื่อไม่ปกติ'},
      {no: '06', title: 'Support', desc: 'เราดูแลแพลตฟอร์มต่อให้ได้ หรือสอนทีมคุณแล้วเป็นตัวสำรองในส่วนที่ยาก'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'On-prem to AWS Migration, Zero Downtime', desc: 'Core banking workloads moved in phases. Each wave had a tested rollback plan and ran in parallel with the old system until the results matched.', result: 'Cost down 34%'},
      {tag: 'Retail · Nationwide', title: 'Multi-Cloud Consolidation to GCP', desc: 'Six scattered cloud accounts, each with its own owner and rules, were merged into one governed platform with shared networking, identity and cost reporting.', result: 'Ops overhead down 50%'},
      {tag: 'Logistics · Bangkok', title: 'Kubernetes Platform for 40+ Microservices', desc: 'A self-healing, autoscaling platform replaced hand-built VM deployments, so engineers ship through a pipeline instead of a manual checklist.', result: 'Deploy time: days to minutes'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ย้าย On-prem สู่ AWS โดยไม่มีระบบหยุด', desc: 'ย้ายระบบธนาคารหลักเป็นเฟส แต่ละรอบมีแผนย้อนกลับที่ทดสอบแล้ว และรันคู่ขนานกับระบบเก่าจนผลลัพธ์ตรงกัน', result: 'ต้นทุนลดลง 34%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'รวม Multi-Cloud เข้าสู่ GCP', desc: 'รวม Cloud Account 6 บัญชีที่กระจัดกระจาย ซึ่งแต่ละบัญชีมีเจ้าของและกฎของตัวเอง ให้เป็นแพลตฟอร์มเดียวที่ควบคุมได้ พร้อมเครือข่าย สิทธิ์ผู้ใช้ และรายงานต้นทุนร่วมกัน', result: 'งานดูแลระบบลดลง 50%'},
      {tag: 'Logistics · กรุงเทพฯ', title: 'แพลตฟอร์ม Kubernetes สำหรับ 40+ Microservices', desc: 'แพลตฟอร์มที่ซ่อมตัวเองและขยายอัตโนมัติ มาแทนการ Deploy VM ที่ทำด้วยมือ วิศวกรปล่อยงานผ่าน Pipeline แทนเช็กลิสต์ที่ทำเอง', result: 'เวลา Deploy: จากหลักวันเหลือหลักนาที'}
    ]
  const faqs        = isEN ? [
      {q: 'Which cloud platforms do you support?', a: 'AWS, Google Cloud and Azure, with Kubernetes, Docker, Terraform and Helm for infrastructure as code. We recommend the platform that suits your team\'s skills and workload, not one we prefer for every client.'},
      {q: 'Can you migrate without business disruption?', a: 'Yes. Phased migration plans include rollback checkpoints, a rehearsal before cutover, and parallel running until validation confirms the new side is working.'},
      {q: 'Will this reduce our cloud bill?', a: 'Usually. We review cost first and look for savings from right-sizing and removing unused resources before changing any structure, so the quick wins arrive early.'},
      {q: 'How do you approach security?', a: 'Secure by default: least-privilege IAM, network isolation, secrets management and audit logging are part of the first design, not added later.'},
      {q: 'We already have several cloud accounts. Can you tidy them up?', a: 'Yes. We start by mapping every account, owner and bill, then propose a structure with shared networking, identity and tagging, and migrate workloads into it step by step.'},
      {q: 'Can we keep some systems on-premises?', a: 'Yes. A hybrid design is common when a system is tied to special hardware, a licence or a data rule. We connect it securely to the cloud side and revisit the decision when it makes sense.'},
      {q: 'Do you cover Thai data and PDPA needs?', a: 'We design with PDPA in mind: knowing where personal data is stored, who can reach it, and how it is backed up and deleted. Where you need data kept in a specific region, we choose services and regions accordingly.'}
    ] : [
      {q: 'รองรับ Cloud Platform ไหนบ้าง?', a: 'AWS, Google Cloud และ Azure พร้อม Kubernetes, Docker, Terraform และ Helm สำหรับ Infrastructure as Code เราแนะนำแพลตฟอร์มที่เหมาะกับทักษะของทีมและลักษณะงาน ไม่ใช่เจ้าที่เราชอบแล้วเสนอให้ลูกค้าทุกราย'},
      {q: 'ย้ายได้โดยไม่กระทบธุรกิจไหม?', a: 'ได้ แผนย้ายแบบเป็นเฟสมีจุดย้อนกลับ ซ้อมก่อนสลับระบบจริง และรันคู่ขนานจนกว่าจะตรวจสอบแล้วว่าฝั่งใหม่ใช้งานได้'},
      {q: 'จะช่วยลดค่า Cloud ได้ไหม?', a: 'โดยทั่วไปได้ เราตรวจค่าใช้จ่ายก่อน แล้วหาจุดประหยัดจากการปรับขนาดให้พอดีและปิดทรัพยากรที่ไม่ได้ใช้ ก่อนจะแตะโครงสร้างระบบ ผลที่เห็นเร็วจึงมาตั้งแต่ต้น'},
      {q: 'ดูแลความปลอดภัยอย่างไร?', a: 'ปลอดภัยโดยค่าเริ่มต้น มีการให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น (Least-privilege) แยกเครือข่าย จัดการ Secret และเก็บ Audit Log เป็นส่วนหนึ่งของดีไซน์แรก ไม่ใช่มาเพิ่มทีหลัง'},
      {q: 'เรามีหลายบัญชี Cloud อยู่แล้ว ช่วยจัดระเบียบได้ไหม?', a: 'ได้ เราเริ่มจากสำรวจทุกบัญชี เจ้าของ และบิล แล้วเสนอโครงสร้างที่มีเครือข่าย สิทธิ์ผู้ใช้ และการติดแท็กร่วมกัน จากนั้นย้ายงานเข้าไปทีละขั้น'},
      {q: 'เก็บบางระบบไว้ On-premises ได้ไหม?', a: 'ได้ แบบ Hybrid พบบ่อยเมื่อระบบผูกกับฮาร์ดแวร์เฉพาะ ไลเซนส์ หรือกฎเรื่องข้อมูล เราเชื่อมกับฝั่ง Cloud อย่างปลอดภัย แล้วกลับมาทบทวนเมื่อถึงเวลาที่เหมาะ'},
      {q: 'รองรับข้อมูลในไทยและ PDPA ไหม?', a: 'เราออกแบบโดยคำนึงถึง PDPA คือรู้ว่าข้อมูลส่วนบุคคลเก็บที่ไหน ใครเข้าถึงได้ และสำรองและลบอย่างไร ถ้าคุณต้องเก็บข้อมูลใน Region เฉพาะ เราเลือกบริการและ Region ให้ตรงกับข้อกำหนดนั้น'}
    ]
  const related     = isEN ? [
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const cloudLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>terraform apply --target=prod</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '14 resources migrated · 0 errors' : 'ย้าย 14 Resource · 0 Error'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>kubectl rollout status</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'deployment "api" rolled out' : 'deployment "api" สำเร็จ'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'finops --report monthly' : 'finops --report monthly'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Spend down 34% vs last cycle' : 'ค่าใช้จ่ายลด 34% จากรอบก่อน'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>deploy.sh</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {cloudLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Cloud Spend' : 'ค่าใช้จ่าย Cloud'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8M21 7v6h-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '80%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '55%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '66%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '34% cost reduction' : 'ลดต้นทุน 34%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-cloud-upload', title: 'Migration & Cutover', desc: 'Planned waves with data validation, side-by-side running and a written rollback for every cutover.' },
    { icon: 'ti-topology-star-3', title: 'Multi-Cloud & Hybrid', desc: 'More than one provider only where regulation, risk or a specific service justifies it, with portable tooling to limit lock-in.' },
    { icon: 'ti-currency-dollar', title: 'FinOps & Cost Control', desc: 'Right-sizing, reserved capacity and tagging, with monthly reports by team and product so spend is visible and owned.' },
    { icon: 'ti-shield-lock', title: 'Cloud Security Posture', desc: 'Least-privilege identity, segmented networks, secrets management and automated checks for configuration drift.' },
    { icon: 'ti-brand-kubernetes', title: 'Kubernetes Operations', desc: 'Managed clusters with autoscaling and self-healing, plus the patching and on-call routines that keep production steady.' },
    { icon: 'ti-chart-dots', title: 'Observability', desc: 'Metrics, logs and traces with alerts routed to the right person before customers notice a problem.' },
  ] : [
    { icon: 'ti-cloud-upload', title: 'Migration & Cutover', desc: 'ย้ายเป็นรอบตามแผน ตรวจข้อมูล รันคู่ขนาน และมีแผนย้อนกลับที่เขียนไว้ทุกครั้งที่สลับระบบ' },
    { icon: 'ti-topology-star-3', title: 'Multi-Cloud & Hybrid', desc: 'ใช้มากกว่าหนึ่งผู้ให้บริการเฉพาะเมื่อกฎหมาย ความเสี่ยง หรือบริการเฉพาะทางเป็นเหตุผล และเลือกเครื่องมือที่ย้ายข้ามเจ้าได้เพื่อลดการผูกติด' },
    { icon: 'ti-currency-dollar', title: 'FinOps & Cost Control', desc: 'ปรับขนาดเครื่อง จองทรัพยากร ติดแท็ก และทำรายงานรายเดือนแยกตามทีมและผลิตภัณฑ์ ค่าใช้จ่ายจึงมองเห็นและมีเจ้าของ' },
    { icon: 'ti-shield-lock', title: 'Cloud Security Posture', desc: 'สิทธิ์ผู้ใช้แบบน้อยที่สุดที่จำเป็น แยกส่วนเครือข่าย จัดการ Secret และตรวจอัตโนมัติว่าการตั้งค่าหลุดจากกฎหรือไม่' },
    { icon: 'ti-brand-kubernetes', title: 'Kubernetes Operations', desc: 'Cluster แบบ Managed ที่มี Autoscaling และซ่อมตัวเอง พร้อมขั้นตอนแพตช์และเข้าเวรที่ทำให้ Production นิ่ง' },
    { icon: 'ti-chart-dots', title: 'Observability', desc: 'Metrics, Log และ Trace พร้อมการแจ้งเตือนถึงคนที่ถูกต้อง ก่อนที่ลูกค้าจะรู้ว่ามีปัญหา' },
  ]

  const techStack = [
    { label: 'AWS', icon: 'ti-brand-aws' },
    { label: 'Google Cloud', svg: 'googlecloud' },
    { label: 'Azure', icon: 'ti-brand-azure' },
    { label: 'Kubernetes', svg: 'kubernetes' },
    { label: 'Docker', svg: 'docker' },
    { label: 'Terraform', svg: 'terraform' },
    { label: 'Pulumi', svg: 'pulumi' },
    { label: 'Helm', svg: 'helm' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assessment', desc: 'Workloads, dependencies and migration risk' },
    { no: '02', title: 'Planning', desc: 'Landing zone and wave-by-wave sequence' },
    { no: '03', title: 'Migration', desc: 'Transfer, verify, then switch over' },
    { no: '04', title: 'Optimize', desc: 'Cost, throughput and resilience' },
    { no: '05', title: 'Observe', desc: 'Monitoring and operational runbooks' },
    { no: '06', title: 'Support', desc: 'Ongoing platform operations' },
  ] : [
    { no: '01', title: 'Assessment', desc: 'งานที่รันอยู่ ความเชื่อมโยงของระบบ และความเสี่ยงในการย้าย' },
    { no: '02', title: 'Planning', desc: 'Landing Zone และลำดับการย้ายทีละรอบ' },
    { no: '03', title: 'Migration', desc: 'ย้าย ตรวจสอบ แล้วค่อยสลับใช้งาน' },
    { no: '04', title: 'Optimize', desc: 'ปรับต้นทุน ปริมาณงานที่รับได้ และความทนทาน' },
    { no: '05', title: 'Observe', desc: 'ระบบติดตามและ Runbook สำหรับดูแลระบบ' },
    { no: '06', title: 'Support', desc: 'ดูแลแพลตฟอร์มอย่างต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'Which cloud platforms does Haliviq support?', a: 'AWS, Google Cloud, and Azure, with Kubernetes, Docker, Terraform, Pulumi, and Helm for infrastructure as code. We pick the platform and toolset pragmatically based on your team\'s existing skills and workload requirements — not a house preference we push on every client.' },
    { q: 'Can you migrate us without business disruption?', a: 'Yes. Every migration plan includes predetermined rollback checkpoints, pre-cutover rehearsals, and a period of parallel system operation until validation confirms the new environment is stable. If something goes wrong mid-cutover, we roll back to the known-good state rather than pushing through.' },
    { q: 'Will this actually reduce our cloud bill?', a: 'In almost every engagement, yes. Cost considerations inform every architecture decision from the start, and our FinOps reviews typically identify 20-40% in savings through instance right-sizing, unused resource elimination, and storage tier optimization before we even propose any structural changes.' },
    { q: 'How do you approach cloud security?', a: 'Secure by default: least-privilege IAM, network isolation, secrets management, and audit logging are part of the initial architecture, not bolted on afterward. We build in comprehensive monitoring from day one so anomalies get caught early, not discovered during an incident review.' },
    { q: 'Do you support hybrid or multi-cloud setups?', a: 'Yes, when there is a real business reason for it — regulatory requirements, vendor risk diversification, or workload-specific strengths. We are explicit about the added operational complexity multi-cloud brings, and we do not recommend it just because it sounds more resilient on paper.' },
    { q: 'How long does a typical migration take?', a: 'A single-application migration with moderate complexity usually takes 6-10 weeks from assessment to cutover. A full data-center exit or large-scale multi-cloud consolidation can run 4-9 months, phased so that each application group is validated in production before the next one begins.' },
    { q: 'What happens to our systems during Kubernetes adoption?', a: 'We containerize incrementally, starting with stateless services that benefit most from autoscaling, and build the platform around your existing CI/CD rather than forcing a rewrite. Legacy systems that are not good Kubernetes candidates stay on their current infrastructure until it makes sense to move them.' },
    { q: 'Who owns the infrastructure code and cloud accounts afterward?', a: 'You do, entirely. All Terraform/Pulumi code, CI/CD pipelines, and documentation live in your own repositories and cloud accounts from day one — we work inside your environment rather than a separate one we control, so there is no migration needed at handover.' },
  ] : [
    { q: 'Haliviq รองรับ Cloud Platform ไหนบ้าง?', a: 'AWS, Google Cloud และ Azure พร้อม Kubernetes, Docker, Terraform, Pulumi และ Helm สำหรับ Infrastructure as Code เราเลือกแพลตฟอร์มและเครื่องมือตามความเหมาะสมจริง ทั้งทักษะของทีมคุณและความต้องการของงาน ไม่ใช่ตามความชอบส่วนตัวที่เอาไปยัดให้ลูกค้าทุกราย' },
    { q: 'ย้ายได้โดยไม่กระทบธุรกิจใช่ไหม?', a: 'ใช่ ทุกแผนย้ายมีจุดย้อนกลับที่กำหนดไว้ล่วงหน้า ซ้อมสลับระบบก่อนทำจริง และให้ระบบเก่าใหม่รันคู่ขนานกันจนกว่าจะแน่ใจว่าเสถียร หากมีปัญหาระหว่างสลับระบบ เราจะย้อนกลับไปสถานะที่ปลอดภัย ไม่ฝืนดันต่อ' },
    { q: 'จะช่วยลดค่าใช้จ่าย Cloud ได้จริงไหม?', a: 'เกือบทุกโปรเจกต์ทำได้ เราคิดเรื่องต้นทุนในทุกการตัดสินใจด้านสถาปัตยกรรมตั้งแต่ต้น และการรีวิว FinOps ของเรามักพบโอกาสประหยัด 20-40% จากการปรับขนาดให้พอดี ตัดทรัพยากรที่ไม่ได้ใช้ และปรับชั้นเก็บข้อมูล ก่อนจะเสนอให้ปรับโครงสร้างใดๆ ด้วยซ้ำ' },
    { q: 'ดูแลความปลอดภัยของ Cloud อย่างไร?', a: 'ปลอดภัยโดยค่าเริ่มต้น มีการให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น (Least-privilege) แยกเครือข่าย จัดการ Secrets และเก็บ Audit Log เป็นส่วนหนึ่งของสถาปัตยกรรมตั้งแต่ต้น ไม่ใช่มาติดตั้งเพิ่มทีหลัง เรามีระบบติดตามครอบคลุมตั้งแต่วันแรก เพื่อจับความผิดปกติได้เร็ว ไม่ใช่ไปพบตอนสอบสวนเหตุการณ์' },
    { q: 'รองรับ Hybrid หรือ Multi-cloud ไหม?', a: 'รองรับ เมื่อมีเหตุผลทางธุรกิจจริง เช่น ข้อกำหนดทางกฎหมาย การกระจายความเสี่ยงจากผู้ให้บริการรายเดียว หรือจุดแข็งเฉพาะของแต่ละงาน เราจะบอกตรงๆ ถึงภาระการดูแลที่เพิ่มขึ้นจาก Multi-cloud และไม่แนะนำเพียงเพราะฟังดูทนทานกว่าบนกระดาษ' },
    { q: 'การย้ายทั่วไปใช้เวลานานแค่ไหน?', a: 'ย้ายแอปพลิเคชันเดียวที่ความซับซ้อนปานกลาง มักใช้เวลา 6-10 สัปดาห์ ตั้งแต่ประเมินระบบจนสลับใช้งาน ส่วนการปิด Data Center ทั้งหมดหรือรวม Multi-cloud ขนาดใหญ่ อาจใช้เวลา 4-9 เดือน โดยแบ่งเป็นเฟส ให้แต่ละกลุ่มแอปพลิเคชันผ่านการตรวจสอบบนระบบจริงก่อนเริ่มกลุ่มถัดไป' },
    { q: 'ระหว่างใช้ Kubernetes ระบบเดิมจะเป็นอย่างไร?', a: 'เราทำเป็น Container ทีละส่วน เริ่มจากบริการแบบ Stateless ที่ได้ประโยชน์จาก Autoscaling มากที่สุด และสร้างแพลตฟอร์มรอบ CI/CD เดิมของคุณ แทนที่จะบังคับให้เขียนใหม่ ระบบเก่าที่ไม่เหมาะกับ Kubernetes จะอยู่บนโครงสร้างเดิมจนกว่าจะถึงเวลาที่ควรย้าย' },
    { q: 'Infrastructure Code และ Cloud Account เป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณทั้งหมด โค้ด Terraform/Pulumi, CI/CD Pipeline และเอกสารทั้งหมดอยู่ใน Repository และ Cloud Account ของคุณเองตั้งแต่วันแรก เราทำงานในสภาพแวดล้อมของคุณ ไม่ใช่สภาพแวดล้อมแยกที่เราควบคุม จึงไม่ต้องย้ายอะไรตอนส่งมอบ' },
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
              ? 'Proven cloud platforms and infrastructure tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'Cloud Platform และเครื่องมือ Infrastructure ที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from assessment to steady-state operations — adjusted per platform, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการประเมินไปจนถึงการดูแลระบบที่มั่นคง ปรับตามแต่ละแพลตฟอร์ม ไม่ใช่สูตรตายตัว'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how we run cloud platforms.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแล Cloud Platform'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
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
      heroDark heroVisual="cloud-services-migration" heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/cloud-services-migration/why1.jpg"
      whyImg2="/images/services/cloud-services-migration/why2.jpg"
      featureImg="/images/services/cloud-services-migration/feature.jpg"
      processImg="/images/services/cloud-services-migration/process.jpg"
    />
  )
}
