import type { ReactNode } from 'react'

type Bi = { en: string; th: string }
type Spec = { i: string; en: string; th: string }
type Cfg = {
  head: string
  chip: Bi
  scene: string
  title: Bi
  sub: Bi
  pill: Bi
  specs?: Spec[]
  badge: { title: Bi; icon: string; cap: Bi; btn: Bi }
}

const b = (en: string, th?: string): Bi => ({ en, th: th ?? en })

const CFG: Record<string, Cfg> = {
  'aerospace-defense': {
    head: 'Ground Station / Telemetry', chip: b('Live', 'สด'), scene: 'aero',
    title: b('SAT-07'), sub: b('Signal lock acquired.', 'ล็อกสัญญาณสำเร็จ'), pill: b('SAT-07 · Nominal', 'SAT-07 · ปกติ'),
    specs: [{ i: 'ti-shield-check', en: 'Clearance verified', th: 'ยืนยันสิทธิ์แล้ว' }, { i: 'ti-satellite', en: 'Telemetry', th: 'Telemetry' }],
    badge: { title: b('Mission Status', 'สถานะภารกิจ'), icon: 'ti-satellite', cap: b('Clearance verified', 'ยืนยันสิทธิ์แล้ว'), btn: b('Track Telemetry →', 'ติดตาม Telemetry →') },
  },
  agriculture: {
    head: 'Field / Sensor-01', chip: b('Optimal', 'เหมาะสม'), scene: 'farm',
    title: b('Soil Moisture', 'ความชื้นในดิน'), sub: b('38% · Optimal range', '38% · อยู่ในเกณฑ์เหมาะสม'), pill: b('38%'),
    specs: [{ i: 'ti-leaf', en: 'Crop health', th: 'สุขภาพพืช' }, { i: 'ti-droplet', en: 'Soil moisture', th: 'ความชื้นในดิน' }],
    badge: { title: b('Crop Health', 'สุขภาพพืช'), icon: 'ti-leaf', cap: b('Field 12 · 4.2 ha', 'แปลง 12 · 4.2 ไร่'), btn: b('View Report →', 'ดูรายงาน →') },
  },
  automotive: {
    head: 'Studio / Drive', chip: b('Charging', 'กำลังชาร์จ'), scene: 'car',
    title: b('Vehicle Status', 'สถานะยานพาหนะ'), sub: b('Charging · 78% · 22 min left', 'กำลังชาร์จ · 78% · เหลือ 22 นาที'), pill: b('78%'),
    specs: [{ i: 'ti-plug', en: 'Charging', th: 'กำลังชาร์จ' }, { i: 'ti-bolt', en: '150 kW', th: '150 กิโลวัตต์' }],
    badge: { title: b('Charging Session', 'เซสชันชาร์จ'), icon: 'ti-plug', cap: b('Station B4 · 150 kW', 'สถานี B4 · 150 กิโลวัตต์'), btn: b('View Details →', 'ดูรายละเอียด →') },
  },
  'consumer-goods': {
    head: 'Studio / Catalog', chip: b('Synced', 'ซิงก์แล้ว'), scene: 'shelf',
    title: b('Product Catalog'), sub: b('1,248 SKUs synced', 'Sync แล้ว 1,248 SKUs'), pill: b('1,248 SKUs'),
    specs: [{ i: 'ti-award', en: 'Rewards', th: 'คะแนนสะสม' }, { i: 'ti-barcode', en: 'SKU sync', th: 'ซิงก์ SKU' }],
    badge: { title: b('Rewards', 'คะแนนสะสม'), icon: 'ti-award', cap: b('2,450 points · Gold Tier', '2,450 คะแนน · ระดับ Gold'), btn: b('Redeem →', 'แลกคะแนน →') },
  },
  education: {
    head: 'classroom.live', chip: b('Live', 'สด'), scene: 'edu',
    title: b('Live Class', 'สอนสด'), sub: b('Class in session', 'กำลังเรียน'), pill: b('24:18'),
    specs: [{ i: 'ti-clipboard-check', en: 'Assignment 03', th: 'งานที่ 03' }, { i: 'ti-users', en: 'Class', th: 'ห้องเรียน' }],
    badge: { title: b('Assignment 03', 'งานที่ 03'), icon: 'ti-clipboard-check', cap: b('28 / 32 submitted', 'ส่งแล้ว 28 / 32'), btn: b('Review →', 'ตรวจงาน →') },
  },
  'energy-utilities': {
    head: 'Grid / Load Monitor', chip: b('Stable', 'ปกติ'), scene: 'energy',
    title: b('Feeder Load: 82%'), sub: b('Stable · No anomalies detected', 'ปกติ · ไม่พบความผิดปกติ'), pill: b('82%'),
    specs: [{ i: 'ti-sun', en: 'Solar', th: 'โซลาร์' }, { i: 'ti-wind', en: 'Wind', th: 'ลม' }],
    badge: { title: b('Solar Output', 'พลังงานโซลาร์'), icon: 'ti-sun', cap: b('4.2 MWh today', '4.2 MWh วันนี้'), btn: b('View Grid →', 'ดู Grid →') },
  },
  fintech: {
    head: 'wallet.app', chip: b('Secured', 'ปลอดภัย'), scene: 'fin',
    title: b('Account Balance', 'ยอดคงเหลือ'), sub: b('Transfer to Somchai', 'โอนให้สมชาย'), pill: b('Secured', 'ปลอดภัย'),
    specs: [{ i: 'ti-arrow-up-right', en: 'Transfer', th: 'โอนเงิน' }, { i: 'ti-qrcode', en: 'QR Payment', th: 'QR Payment' }, { i: 'ti-arrow-down-left', en: 'Deposit', th: 'เงินเข้า' }],
    badge: { title: b('Fraud Check', 'ตรวจสอบ Fraud'), icon: 'ti-shield-check', cap: b('0 anomalies today', 'วันนี้ไม่พบความผิดปกติ'), btn: b('Review →', 'ดูรายละเอียด →') },
  },
  government: {
    head: 'Portal / Gov', chip: b('Digital ID Verified', 'ยืนยันตัวตนแล้ว'), scene: 'gov',
    title: b('Application', 'คำขอ'), sub: b('Permit application in progress.', 'คำขอใบอนุญาตกำลังดำเนินการ'), pill: b('Permit #GV-2451', 'ใบอนุญาต #GV-2451'),
    specs: [{ i: 'ti-id', en: 'Digital ID', th: 'ตัวตนดิจิทัล' }, { i: 'ti-file-check', en: 'Permit', th: 'ใบอนุญาต' }],
    badge: { title: b('Application', 'คำขอ'), icon: 'ti-file-check', cap: b('Permit #GV-2451', 'ใบอนุญาต #GV-2451'), btn: b('Approved →', 'อนุมัติแล้ว →') },
  },
  healthcare: {
    head: 'vitals.monitor', chip: b('Live', 'สด'), scene: 'health',
    title: b('Connected Care', 'การดูแลแบบเชื่อมต่อ'), sub: b('Prescription synced', 'ยาซิงก์แล้ว'), pill: b('72 bpm'),
    specs: [{ i: 'ti-heart-rate-monitor', en: '72 bpm', th: '72 bpm' }, { i: 'ti-droplet', en: '98% SpO₂', th: '98% SpO₂' }],
    badge: { title: b('Care Plan', 'แผนการรักษา'), icon: 'ti-clipboard-heart', cap: b('Prescription synced', 'ยาซิงก์แล้ว'), btn: b('View plan →', 'ดูแผน →') },
  },
  'hospitality-travel': {
    head: 'guest.key', chip: b('Welcome back', 'ยินดีต้อนรับ'), scene: 'hotel',
    title: b('Room 208', 'ห้อง 208'), sub: b('Tap to unlock', 'แตะเพื่อปลดล็อก'), pill: b('208'),
    specs: [{ i: 'ti-key', en: 'Digital key', th: 'กุญแจดิจิทัล' }, { i: 'ti-bed', en: 'Room', th: 'ห้องพัก' }],
    badge: { title: b('Digital Key', 'กุญแจดิจิทัล'), icon: 'ti-key', cap: b('Tap to unlock', 'แตะเพื่อปลดล็อก'), btn: b('Unlock →', 'ปลดล็อก →') },
  },
  logistics: {
    head: 'Fleet / Tracking', chip: b('On schedule', 'ตรงตามกำหนด'), scene: 'logi',
    title: b('Shipment #HLQ-2291'), sub: b('ETA 14:20 · On schedule', 'ETA 14:20 · ตรงตามกำหนด'), pill: b('ETA 14:20'),
    specs: [{ i: 'ti-truck', en: 'In transit', th: 'กำลังขนส่ง' }, { i: 'ti-route', en: 'Live route', th: 'เส้นทางสด' }],
    badge: { title: b('Fleet Status', 'สถานะยานพาหนะ'), icon: 'ti-truck', cap: b('128 vehicles active', 'รถ 128 คันกำลังวิ่งงาน'), btn: b('View Map →', 'ดูแผนที่ →') },
  },
  manufacturing: {
    head: 'line-04.oee', chip: b('Running', 'กำลังทำงาน'), scene: 'factory',
    title: b('Assembly Line', 'สายการผลิต'), sub: b('Line 04', 'สาย 04'), pill: b('OEE 87.4%'),
    specs: [{ i: 'ti-gauge', en: 'OEE 87.4%', th: 'OEE 87.4%' }, { i: 'ti-settings', en: 'Running', th: 'กำลังทำงาน' }],
    badge: { title: b('OEE'), icon: 'ti-gauge', cap: b('87.4% · Running', '87.4% · กำลังทำงาน'), btn: b('View line →', 'ดูสายผลิต →') },
  },
  'media-entertainment': {
    head: 'Studio / Stream', chip: b('Live', 'ถ่ายทอดสด'), scene: 'media',
    title: b('Season Finale Premiere', 'รอบปฐมทัศน์ตอนจบซีซัน'), sub: b('128K watching now', 'มีผู้ชม 128K คนขณะนี้'), pill: b('128K'),
    specs: [{ i: 'ti-eye', en: 'Viewers', th: 'ผู้ชม' }, { i: 'ti-broadcast', en: 'Live', th: 'สด' }],
    badge: { title: b('Viewers', 'ผู้ชม'), icon: 'ti-eye', cap: b('+12% vs last week', '+12% เทียบสัปดาห์ก่อน'), btn: b('Watch Now →', 'ชมเลย →') },
  },
  'professional-services': {
    head: 'Studio / Matters', chip: b('Contract signed', 'เซ็นสัญญาแล้ว'), scene: 'pro',
    title: b('Acme Advisory Retainer'), sub: b('Due in 6 days', 'ครบกำหนดใน 6 วัน'), pill: b('Engagement 82%', 'ความคืบหน้า 82%'),
    specs: [{ i: 'ti-file-check', en: '3 deliverables pending', th: 'รออนุมัติ 3 รายการ' }],
    badge: { title: b('Billing', 'การเรียกเก็บเงิน'), icon: 'ti-receipt', cap: b('38.5 hrs logged this week', 'บันทึกแล้ว 38.5 ชม. สัปดาห์นี้'), btn: b('Send Invoice →', 'ส่งใบแจ้งหนี้ →') },
  },
  retail: {
    head: 'Studio / Shop', chip: b('New', 'ใหม่'), scene: 'retail',
    title: b('Everyday Runner'), sub: b('Made to move.'), pill: b('Size 42', 'ไซส์ 42'),
    specs: [{ i: 'ti-shopping-bag', en: 'In your bag', th: 'ในตะกร้า' }, { i: 'ti-truck-delivery', en: 'Fast delivery', th: 'จัดส่งไว' }],
    badge: { title: b('Your Bag', 'ตะกร้าของคุณ'), icon: 'ti-shopping-bag', cap: b('1 item · Size 42', '1 ชิ้น · ไซส์ 42'), btn: b('Checkout →', 'ชำระเงิน →') },
  },
  technology: {
    head: 'Deploy / Pipeline', chip: b('build → test → deploy'), scene: 'tech',
    title: b('API Gateway'), sub: b('Shipped to production.'), pill: b('Deployed', 'ขึ้นระบบแล้ว'),
    specs: [{ i: 'ti-git-branch', en: 'Build', th: 'Build' }, { i: 'ti-test-pipe', en: 'Test Suite', th: 'Test Suite' }, { i: 'ti-rocket', en: 'Deploy', th: 'Deploy' }],
    badge: { title: b('Uptime'), icon: 'ti-activity', cap: b('99.98% · 30d avg', '99.98% · เฉลี่ย 30 วัน'), btn: b('View Logs →', 'ดู Logs →') },
  },
  telecommunications: {
    head: 'Network / Status', chip: b('Online', 'ออนไลน์'), scene: 'telecom',
    title: b('National Network', 'เครือข่ายทั่วประเทศ'), sub: b('5G core · 12,480 sites online', '5G Core · เสาสัญญาณ 12,480 แห่ง'), pill: b('5G'),
    specs: [{ i: 'ti-antenna-bars-5', en: '5G core', th: '5G Core' }, { i: 'ti-activity', en: 'Online', th: 'ออนไลน์' }],
    badge: { title: b('Uptime'), icon: 'ti-antenna-bars-5', cap: b('99.98% this month', '99.98% เดือนนี้'), btn: b('View Details →', 'ดูรายละเอียด →') },
  },
}

const Stars = ({ n = 26, h = 120 }: { n?: number; h?: number }) => (
  <g fill="#fff">
    {Array.from({ length: n }).map((_, k) => (
      <circle key={k} cx={(k * 97) % 320} cy={(k * 53) % h} r={k % 5 === 0 ? 1.4 : 0.8} opacity={0.35 + (k % 4) * 0.15}>
        {k % 3 === 0 && <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + (k % 4)}s`} repeatCount="indefinite" />}
      </circle>
    ))}
  </g>
)

const Grad = ({ id, stops, vertical = true }: { id: string; stops: [number, string][]; vertical?: boolean }) => (
  <linearGradient id={id} x1="0" y1="0" x2={vertical ? 0 : 1} y2={vertical ? 1 : 0}>
    {stops.map(([o, c]) => (<stop key={o} offset={`${o}%`} stopColor={c} />))}
  </linearGradient>
)

const Win = ({ x, y, w = 6, h = 5, on }: { x: number; y: number; w?: number; h?: number; on: boolean }) => (
  <rect x={x} y={y} width={w} height={h} rx="1" fill="#FFE9B8" opacity={on ? 0.9 : 0.14} />
)

function scene(kind: string): ReactNode {
  switch (kind) {
    case 'aero':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs>
            <Grad id="ae-bg" stops={[[0, '#0B0825'], [100, '#2A2160']]} />
            <Grad id="ae-earth" stops={[[0, '#53C3D7'], [40, '#6B4FD0'], [100, '#1A1440']]} />
          </defs>
          <rect width="320" height="200" fill="url(#ae-bg)" />
          <Stars />
          <ellipse cx="160" cy="330" rx="260" ry="170" fill="url(#ae-earth)" opacity="0.9" />
          <ellipse cx="160" cy="330" rx="260" ry="170" fill="none" stroke="#B8A9FA" strokeOpacity="0.5" strokeWidth="1.5" />
          <ellipse cx="170" cy="100" rx="120" ry="34" fill="none" stroke="#B8A9FA" strokeOpacity="0.4" strokeDasharray="3 5" transform="rotate(-14 170 100)" />
          <g transform="translate(205 68) rotate(-14)">
            <rect x="-9" y="-7" width="18" height="14" rx="3" fill="#DCD7FD" />
            <rect x="-34" y="-5" width="22" height="10" fill="#6B4FD0" stroke="#B8A9FA" strokeWidth="0.8" />
            <rect x="12" y="-5" width="22" height="10" fill="#6B4FD0" stroke="#B8A9FA" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="3" fill="#53C3D7"><animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" /></circle>
          </g>
          {[0, 1, 2].map((k) => (
            <path key={k} d={`M ${196 - k * 8} ${96 + k * 6} q -${20 + k * 6} 28 -${34 + k * 10} 50`} fill="none" stroke="#53C3D7" strokeWidth="1.4" strokeLinecap="round" opacity={0.8 - k * 0.2} strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.4s" repeatCount="indefinite" />
            </path>
          ))}
          <g transform="translate(120 156)"><path d="M0 0 l14 -16 l14 16 z" fill="#241B5E" stroke="#B8A9FA" strokeWidth="1" /><circle cx="14" cy="-18" r="3" fill="#F5D76E" /></g>
        </svg>
      )
    case 'farm':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs>
            <Grad id="fa-sky" stops={[[0, '#3B2E8F'], [55, '#C07ACF'], [100, '#FFD9A8']]} />
            <Grad id="fa-ground" stops={[[0, '#2E7D5B'], [100, '#12402F']]} />
          </defs>
          <rect width="320" height="200" fill="url(#fa-sky)" />
          <circle cx="90" cy="110" r="26" fill="#FFE9B8" opacity="0.95" />
          <circle cx="90" cy="110" r="46" fill="#FFE9B8" opacity="0.15" />
          <path d="M0 112 Q80 96 160 108 T320 104 V200 H0 Z" fill="#3E8C6B" opacity="0.7" />
          <path d="M0 126 L320 120 V200 H0 Z" fill="url(#fa-ground)" />
          {Array.from({ length: 9 }).map((_, k) => (
            <path key={k} d={`M${160 + (k - 4) * 6} 122 L${-60 + k * 54} 200`} stroke="#8BE0A8" strokeOpacity="0.45" strokeWidth="1.6" />
          ))}
          <g transform="translate(236 70)">
            <rect x="0" y="22" width="26" height="40" fill="#E8E1FF" /><path d="M-2 22 q15 -22 30 0 z" fill="#B8A9FA" />
            <rect x="34" y="40" width="40" height="22" fill="#C9B8FF" /><path d="M30 40 l24 -16 l24 16 z" fill="#8F86DA" />
          </g>
          <g transform="translate(40 128)">
            <rect x="-1.5" y="0" width="3" height="34" fill="#DCD7FD" />
            <circle cx="0" cy="-3" r="5" fill="#53C3D7"><animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" /></circle>
            <circle cx="0" cy="-3" r="14" fill="none" stroke="#53C3D7" strokeOpacity="0.5"><animate attributeName="r" values="8;22;8" dur="2s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      )
    case 'car':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs>
            <Grad id="ca-sky" stops={[[0, '#201650'], [60, '#6B4FD0'], [100, '#F2A6C7']]} />
            <Grad id="ca-body" stops={[[0, '#DCD7FD'], [100, '#8F86DA']]} />
          </defs>
          <rect width="320" height="200" fill="url(#ca-sky)" />
          <g fill="#241B5E" opacity="0.65"><rect x="14" y="96" width="26" height="70" /><rect x="46" y="110" width="22" height="56" /><rect x="260" y="92" width="30" height="74" /><rect x="296" y="108" width="24" height="58" /></g>
          <rect y="160" width="320" height="40" fill="#14102E" />
          <path d="M0 162h320" stroke="#B8A9FA" strokeOpacity="0.4" />
          <path d="M20 182h30M80 182h30M140 182h30M200 182h30M260 182h30" stroke="#FFE9B8" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
          <g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 4 0; 0 0" dur="3s" repeatCount="indefinite" />
            <path d="M92 152 q2 -26 26 -30 l34 -2 q22 -22 50 -22 q26 0 40 22 l12 2 q8 8 8 30 z" fill="url(#ca-body)" />
            <path d="M138 122 q20 -18 40 -18 q22 0 34 18 z" fill="#2A2160" opacity="0.85" />
            <circle cx="126" cy="154" r="15" fill="#14102E" /><circle cx="126" cy="154" r="7" fill="#8F86DA" />
            <circle cx="216" cy="154" r="15" fill="#14102E" /><circle cx="216" cy="154" r="7" fill="#8F86DA" />
            <path d="M246 134 l30 6 l-30 10 z" fill="#FFE9B8" opacity="0.5" />
            <rect x="240" y="132" width="8" height="5" rx="2" fill="#FFE9B8" />
          </g>
          <g transform="translate(46 118)">
            <rect x="0" y="0" width="12" height="46" rx="3" fill="#E8E1FF" /><rect x="3" y="6" width="6" height="8" rx="1.5" fill="#53C3D7"><animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /></rect>
            <path d="M12 30 q34 10 40 26" stroke="#B8A9FA" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
          <path d="M268 112h30M276 124h36M262 136h34" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'shelf':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="sh-bg" stops={[[0, '#2A2160'], [100, '#6B4FD0']]} /></defs>
          <rect width="320" height="200" fill="url(#sh-bg)" />
          {[0, 1].map((r) => (
            <g key={r} transform={`translate(0 ${r * 76})`}>
              <rect x="14" y="78" width="292" height="7" rx="2" fill="#E8E1FF" opacity="0.85" />
              {[['#F2A6C7', 26, 30], ['#53C3D7', 62, 40], ['#F5D76E', 108, 34], ['#B8A9FA', 148, 44], ['#5AD18F', 198, 36], ['#F2A6C7', 240, 42]].map(([c, x, h], k) => (
                <g key={k}>
                  <rect x={x as number} y={78 - (h as number)} width="26" height={h as number} rx="4" fill={c as string} opacity={r === 0 ? 0.95 : 0.8} />
                  <rect x={(x as number) + 4} y={78 - (h as number) + 8} width="18" height="8" rx="2" fill="#fff" opacity="0.7" />
                </g>
              ))}
            </g>
          ))}
          <g transform="translate(244 26)"><rect width="52" height="22" rx="5" fill="#141329" opacity="0.85" /><path d="M8 6v10M12 6v10M15 6v10M20 6v10M24 6v10M29 6v10M33 6v10" stroke="#fff" strokeWidth="1.2" /><circle cx="44" cy="11" r="3" fill="#5AD18F"><animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" /></circle></g>
        </svg>
      )
    case 'edu':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="ed-bg" stops={[[0, '#2A2160'], [100, '#2E7A8C']]} /></defs>
          <rect width="320" height="200" fill="url(#ed-bg)" />
          <rect x="30" y="26" width="150" height="92" rx="6" fill="#1F4B3F" stroke="#E8E1FF" strokeWidth="4" />
          <path d="M46 52h62M46 68h92M46 84h48" stroke="#E8E1FF" strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="146" cy="84" r="12" fill="none" stroke="#F5D76E" strokeWidth="2.5" />
          <path d="M84 168 q38 -14 76 0 q38 -14 76 0 v-28 q-38 -14 -76 0 q-38 -14 -76 0 z" fill="#F2A6C7" />
          <path d="M160 168 v-28" stroke="#B94A82" strokeWidth="2" />
          <g transform="translate(232 40)">
            <animateTransform attributeName="transform" type="translate" values="232 40; 232 34; 232 40" dur="3s" repeatCount="indefinite" />
            <path d="M0 0 l40 -14 l40 14 l-40 14 z" fill="#141329" /><path d="M16 8 v16 q24 12 48 0 v-16" fill="#241B5E" /><path d="M76 3 v22" stroke="#F5D76E" strokeWidth="2.5" /><circle cx="76" cy="27" r="3.5" fill="#F5D76E" />
          </g>
          <g fill="#F5D76E"><path d="M200 120 l3 7 l7 1 l-5 5 l1 7 l-6 -4 l-6 4 l1 -7 l-5 -5 l7 -1 z"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></path></g>
        </svg>
      )
    case 'energy':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="en-sky" stops={[[0, '#2A2160'], [60, '#7B5FD9'], [100, '#FFD9A8']]} /></defs>
          <rect width="320" height="200" fill="url(#en-sky)" />
          <circle cx="250" cy="96" r="22" fill="#FFE9B8" opacity="0.9" />
          <path d="M0 150 Q90 120 180 146 T320 136 V200 H0 Z" fill="#241B5E" />
          {[[70, 70, 0], [150, 56, 1.1], [228, 78, 2.2]].map(([x, y, d], k) => (
            <g key={k} transform={`translate(${x} ${y})`}>
              <path d="M-1.5 0 L-3 86 H3 L1.5 0 Z" fill="#E8E1FF" />
              <g><animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur={`${6 + k}s`} repeatCount="indefinite" />
                {[0, 120, 240].map((a) => (<path key={a} d="M0 0 L-2.5 -30 Q0 -34 2.5 -30 Z" fill="#fff" transform={`rotate(${a})`} />))}
              </g>
              <circle r="4" fill="#B8A9FA" />
            </g>
          ))}
          <g transform="translate(18 150)">
            {[0, 1, 2].map((k) => (<path key={k} d={`M${k * 34} 30 l8 -26 h30 l-8 26 z`} fill="#1B3A78" stroke="#53C3D7" strokeWidth="1.2" />))}
          </g>
          <path d="M282 22 l-10 20 h8 l-6 18 l16 -24 h-9 l7 -14 z" fill="#F5D76E"><animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite" /></path>
        </svg>
      )
    case 'fin':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs>
            <Grad id="fi-bg" stops={[[0, '#14102E'], [100, '#2A2160']]} />
            <linearGradient id="fi-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#53C3D7" stopOpacity="0.4" /><stop offset="100%" stopColor="#53C3D7" stopOpacity="0" /></linearGradient>
          </defs>
          <rect width="320" height="200" fill="url(#fi-bg)" />
          <g stroke="#fff" strokeOpacity="0.07">{[40, 80, 120, 160].map((y) => (<path key={y} d={`M0 ${y}H320`} />))}</g>
          <path d="M10 150 L50 132 L90 140 L130 104 L170 112 L210 72 L250 78 L300 34 V200 H10 Z" fill="url(#fi-area)" />
          {[[24, 130, 24, '#F2A6C7'], [58, 118, 30, '#5AD18F'], [92, 126, 20, '#F2A6C7'], [126, 96, 34, '#5AD18F'], [160, 100, 22, '#5AD18F'], [194, 70, 38, '#5AD18F'], [228, 76, 24, '#F2A6C7'], [262, 44, 42, '#5AD18F']].map(([x, y, h, c], k) => (
            <g key={k}><rect x={(x as number) + 5} y={(y as number) - 8} width="2" height={(h as number) + 16} fill={c as string} opacity="0.7" /><rect x={x as number} y={y as number} width="12" height={h as number} rx="2" fill={c as string} /></g>
          ))}
          <path d="M10 150 L50 132 L90 140 L130 104 L170 112 L210 72 L250 78 L300 34" fill="none" stroke="#B8A9FA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(268 150)"><animateTransform attributeName="transform" type="translate" values="268 150; 268 144; 268 150" dur="2.6s" repeatCount="indefinite" /><circle r="20" fill="#F5D76E" /><circle r="15" fill="none" stroke="#C99A17" strokeWidth="1.5" /><text y="6" textAnchor="middle" fontSize="18" fontWeight="700" fill="#8A6508">฿</text></g>
        </svg>
      )
    case 'gov':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="go-sky" stops={[[0, '#2A2160'], [60, '#8F7BE8'], [100, '#E8D9FF']]} /></defs>
          <rect width="320" height="200" fill="url(#go-sky)" />
          <Stars n={14} h={70} />
          <path d="M70 70 L160 34 L250 70 Z" fill="#E8E1FF" stroke="#B8A9FA" strokeWidth="2" />
          <circle cx="160" cy="58" r="8" fill="#6B4FD0" />
          <rect x="70" y="72" width="180" height="8" fill="#DCD7FD" />
          {[0, 1, 2, 3, 4].map((k) => (<rect key={k} x={86 + k * 34} y="80" width="14" height="62" fill="#F4F0FF" stroke="#B8A9FA" />))}
          <rect x="62" y="142" width="196" height="8" fill="#DCD7FD" /><rect x="54" y="150" width="212" height="8" fill="#C9B8FF" /><rect x="46" y="158" width="228" height="42" fill="#B8A9FA" />
          <g transform="translate(160 34)"><path d="M0 0 V-24" stroke="#fff" strokeWidth="2" /><path d="M0 -24 h20 l-5 6 l5 6 h-20 z" fill="#F2A6C7"><animate attributeName="d" values="M0 -24 h20 l-5 6 l5 6 h-20 z; M0 -24 h20 l-2 6 l2 6 h-20 z; M0 -24 h20 l-5 6 l5 6 h-20 z" dur="2.4s" repeatCount="indefinite" /></path></g>
        </svg>
      )
    case 'health':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="he-bg" stops={[[0, '#2A2160'], [100, '#1F6B7A']]} /></defs>
          <rect width="320" height="200" fill="url(#he-bg)" />
          <g stroke="#fff" strokeOpacity="0.08">{Array.from({ length: 9 }).map((_, k) => (<path key={k} d={`M${k * 40} 0V200`} />))}{[50, 100, 150].map((y) => (<path key={y} d={`M0 ${y}H320`} />))}</g>
          <path d="M0 110 H70 l12 -34 l16 74 l14 -56 l10 16 H190 l12 -26 l12 46 l10 -20 H320" fill="none" stroke="#53C3D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="500" strokeDashoffset="500">
            <animate attributeName="stroke-dashoffset" values="500;0;0;500" keyTimes="0;0.6;0.9;1" dur="4.2s" repeatCount="indefinite" />
          </path>
          <g transform="translate(250 56)"><circle r="30" fill="#141329" opacity="0.7" /><circle r="30" fill="none" stroke="#F2A6C7" strokeWidth="2" /><path d="M-4 -16h8v12h12v8h-12v12h-8v-12h-12v-8h12z" fill="#F2A6C7" /></g>
          <g transform="translate(60 156)"><path d="M0 -4 q-10 -16 -20 -4 q-8 12 20 26 q28 -14 20 -26 q-10 -12 -20 4z" transform="scale(0.8) translate(20 0)" fill="#F2A6C7" opacity="0.9"><animateTransform attributeName="transform" type="scale" additive="sum" values="1;1.12;1" dur="1.2s" repeatCount="indefinite" /></path></g>
        </svg>
      )
    case 'hotel':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="ho-sky" stops={[[0, '#3B2E8F'], [55, '#E0709F'], [100, '#FFD28A']]} /><Grad id="ho-sea" stops={[[0, '#7B5FD9'], [100, '#1A1440']]} /></defs>
          <rect width="320" height="200" fill="url(#ho-sky)" />
          <circle cx="110" cy="118" r="28" fill="#FFE9B8" /><circle cx="110" cy="118" r="50" fill="#FFE9B8" opacity="0.14" />
          <rect y="130" width="320" height="70" fill="url(#ho-sea)" />
          <path d="M70 136h80M60 146h110M80 158h70" stroke="#FFE9B8" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <path d="M200 160 V54 H282 V160 Z" fill="#2B2170" /><rect x="196" y="48" width="90" height="8" fill="#4A3BAA" />
          {[0, 1, 2, 3, 4, 5].map((r) => [0, 1, 2].map((c) => (<Win key={r + '-' + c} x={208 + c * 24} y={64 + r * 15} w={12} h={8} on={(r * 3 + c) % 3 !== 1} />)))}
          <path d="M40 180 Q44 130 50 100" stroke="#14102E" strokeWidth="5" fill="none" />
          {[[-26, 6], [-18, -10], [0, -16], [18, -8], [26, 8]].map(([dx, dy], k) => (<path key={k} d={`M50 100 q${(dx as number) / 2} ${(dy as number) - 12} ${dx} ${dy}`} stroke="#14102E" strokeWidth="5" strokeLinecap="round" fill="none" />))}
          <g transform="translate(236 40)"><animateTransform attributeName="transform" type="translate" values="236 40; 236 34; 236 40" dur="3s" repeatCount="indefinite" /><circle r="10" fill="#F5D76E" /><circle r="4" fill="#2B2170" /><rect x="8" y="-3" width="26" height="6" rx="2" fill="#F5D76E" /><rect x="24" y="2" width="4" height="8" fill="#F5D76E" /><rect x="30" y="2" width="4" height="6" fill="#F5D76E" /></g>
        </svg>
      )
    case 'logi':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="lo-bg" stops={[[0, '#201650'], [100, '#4A3BAA']]} /></defs>
          <rect width="320" height="200" fill="url(#lo-bg)" />
          <g fill="#fff" opacity="0.12">{Array.from({ length: 12 }).map((_, r) => Array.from({ length: 20 }).map((_, c) => (<circle key={r + '-' + c} cx={8 + c * 16} cy={8 + r * 12} r="1" />)))}</g>
          <path d="M30 120 C80 40 130 130 180 70 S270 40 292 60" fill="none" stroke="#53C3D7" strokeWidth="2.4" strokeDasharray="5 6" strokeLinecap="round"><animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.4s" repeatCount="indefinite" /></path>
          <g transform="translate(30 120)"><circle r="7" fill="#F2A6C7" /><circle r="3" fill="#fff" /></g>
          <g transform="translate(292 60)"><path d="M0 0 q-10 -14 0 -24 q10 10 0 24z" fill="#F5D76E" /><circle cy="-14" r="3" fill="#2A2160" /></g>
          <rect y="168" width="320" height="32" fill="#14102E" /><path d="M0 170h320" stroke="#B8A9FA" strokeOpacity="0.4" />
          <g><animateTransform attributeName="transform" type="translate" values="-10 0; 12 0; -10 0" dur="6s" repeatCount="indefinite" />
            <rect x="70" y="124" width="92" height="40" rx="4" fill="#E8E1FF" /><path d="M70 140h92" stroke="#B8A9FA" /><rect x="76" y="130" width="22" height="8" rx="2" fill="#7B6EF6" />
            <path d="M166 164 v-28 h28 l16 16 v12 z" fill="#8F86DA" /><path d="M176 140h14l9 10h-23z" fill="#2A2160" />
            <circle cx="92" cy="166" r="9" fill="#14102E" /><circle cx="92" cy="166" r="4" fill="#8F86DA" /><circle cx="186" cy="166" r="9" fill="#14102E" /><circle cx="186" cy="166" r="4" fill="#8F86DA" />
          </g>
          <g transform="translate(236 140)"><rect width="30" height="24" fill="#F2A6C7" /><rect x="34" width="30" height="24" fill="#53C3D7" /><rect x="14" y="-26" width="30" height="24" fill="#F5D76E" /></g>
        </svg>
      )
    case 'factory':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="fc-sky" stops={[[0, '#2A2160'], [100, '#E0709F']]} /></defs>
          <rect width="320" height="200" fill="url(#fc-sky)" />
          <rect y="164" width="320" height="36" fill="#14102E" />
          <rect x="190" y="52" width="16" height="112" fill="#3B2E8F" /><rect x="224" y="68" width="14" height="96" fill="#3B2E8F" />
          {[0, 1, 2].map((k) => (<circle key={k} cx="198" cy="46" r="8" fill="#fff" opacity="0.5"><animate attributeName="cy" values="46;6" dur="3.6s" begin={`${k * 1.2}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="0.55;0" dur="3.6s" begin={`${k * 1.2}s`} repeatCount="indefinite" /><animate attributeName="r" values="6;14" dur="3.6s" begin={`${k * 1.2}s`} repeatCount="indefinite" /></circle>))}
          <path d="M20 164 V104 l36 -22 v22 l36 -22 v22 l36 -22 v22 l36 -22 V164 Z" fill="#4A3BAA" stroke="#B8A9FA" strokeWidth="1" />
          {[0, 1, 2, 3].map((k) => (<Win key={k} x={34 + k * 32} y={120} w={16} h={12} on={k !== 2} />))}
          <rect x="146" y="124" width="26" height="40" fill="#241B5E" />
          <g transform="translate(262 128)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" /><circle r="22" fill="none" stroke="#F5D76E" strokeWidth="8" strokeDasharray="7.2 7.2" /><circle r="17" fill="#F5D76E" /><circle r="7" fill="#2A2160" /></g></g>
          <g transform="translate(284 78)"><g><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="5s" repeatCount="indefinite" /><circle r="12" fill="none" stroke="#53C3D7" strokeWidth="5" strokeDasharray="4.7 4.7" /><circle r="9" fill="#53C3D7" /><circle r="4" fill="#2A2160" /></g></g>
        </svg>
      )
    case 'media':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="me-bg" stops={[[0, '#0B0825'], [100, '#3B2E8F']]} /><linearGradient id="me-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#B8A9FA" stopOpacity="0.5" /><stop offset="100%" stopColor="#B8A9FA" stopOpacity="0" /></linearGradient></defs>
          <rect width="320" height="200" fill="url(#me-bg)" />
          <path d="M40 0 L10 200 H110 Z" fill="url(#me-beam)" /><path d="M280 0 L210 200 H310 Z" fill="url(#me-beam)" />
          <rect x="70" y="30" width="180" height="104" rx="8" fill="#141329" stroke="#B8A9FA" strokeWidth="2.5" />
          <rect x="76" y="36" width="168" height="92" rx="4" fill="#4A3BAA" />
          <circle cx="160" cy="82" r="24" fill="#fff" opacity="0.16" />
          <path d="M152 68 L176 82 L152 96 Z" fill="#fff"><animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" /></path>
          <rect x="30" y="152" width="260" height="30" rx="4" fill="#141329" />
          {Array.from({ length: 16 }).map((_, k) => (<rect key={k} x={36 + k * 16} y="157" width="9" height="6" rx="1" fill="#2A2160" />))}
          {Array.from({ length: 16 }).map((_, k) => (<rect key={k} x={36 + k * 16} y="171" width="9" height="6" rx="1" fill="#2A2160" />))}
          {[['#F2A6C7', 52], ['#53C3D7', 100], ['#F5D76E', 148], ['#B8A9FA', 196], ['#F2A6C7', 244]].map(([c, x], k) => (<rect key={k} x={x as number} y="162" width="30" height="8" rx="2" fill={c as string} opacity="0.8" />))}
          <g fill="#F2A6C7"><path d="M262 40 q-5 -8 -10 0 q-4 7 10 14 q14 -7 10 -14 q-5 -8 -10 0z"><animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0 6; 0 -10" dur="2.4s" repeatCount="indefinite" /></path></g>
        </svg>
      )
    case 'pro':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="pr-bg" stops={[[0, '#2A2160'], [100, '#6B4FD0']]} /></defs>
          <rect width="320" height="200" fill="url(#pr-bg)" />
          <g transform="translate(28 60)"><rect width="72" height="92" rx="5" fill="#F4F0FF" transform="rotate(-8 36 46)" /><rect width="72" height="92" rx="5" fill="#E8E1FF" />{[14, 28, 42, 56].map((y, k) => (<path key={y} d={`M12 ${y}h${k === 3 ? 30 : 48}`} stroke="#8F86DA" strokeWidth="3" strokeLinecap="round" />))}<circle cx="54" cy="76" r="9" fill="none" stroke="#5AD18F" strokeWidth="2.5" /><path d="M50 76l3 3 6-7" stroke="#5AD18F" strokeWidth="2.5" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(118 70)"><path d="M30 0 v-10 q0 -6 6 -6 h30 q6 0 6 6 v10" fill="none" stroke="#DCD7FD" strokeWidth="5" /><rect y="0" width="102" height="72" rx="10" fill="#B8A9FA" /><rect y="30" width="102" height="6" fill="#6B4FD0" /><rect x="44" y="26" width="14" height="14" rx="3" fill="#F5D76E" /></g>
          <g transform="translate(244 96)">{[[0, 30, '#53C3D7'], [20, 46, '#F2A6C7'], [40, 62, '#5AD18F']].map(([x, h, c], k) => (<rect key={k} x={x as number} y={64 - (h as number)} width="14" height={h as number} rx="3" fill={c as string}><animate attributeName="height" values={`${(h as number) - 8};${h};${(h as number) - 8}`} dur={`${2 + k * 0.4}s`} repeatCount="indefinite" /></rect>))}<path d="M-4 66H60" stroke="#fff" strokeOpacity="0.4" /></g>
        </svg>
      )
    case 'retail':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="rt-bg" stops={[[0, '#2A2160'], [100, '#8F5FD0']]} /></defs>
          <rect width="320" height="200" fill="url(#rt-bg)" />
          <rect x="40" y="70" width="170" height="104" fill="#F4F0FF" />
          {Array.from({ length: 8 }).map((_, k) => (<path key={k} d={`M${40 + k * 21.25} 48 h21.25 v22 q-10.6 12 -21.25 0 z`} fill={k % 2 ? '#F4F0FF' : '#7B6EF6'} />))}
          <rect x="40" y="40" width="170" height="10" fill="#4A3BAA" />
          <rect x="54" y="92" width="76" height="62" rx="4" fill="#2A2160" /><rect x="58" y="96" width="68" height="54" rx="2" fill="#53C3D7" opacity="0.35" />
          <rect x="146" y="92" width="48" height="82" rx="3" fill="#B8A9FA" /><circle cx="186" cy="136" r="2.5" fill="#fff" />
          <rect x="30" y="174" width="190" height="8" rx="2" fill="#14102E" />
          <g transform="translate(236 96)"><animateTransform attributeName="transform" type="translate" values="236 96; 236 88; 236 96" dur="3s" repeatCount="indefinite" /><path d="M16 8 q0 -14 14 -14 q14 0 14 14" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" /><rect y="8" width="60" height="64" rx="6" fill="#F2A6C7" /><path d="M18 40 l9 9 l17 -19" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
          <g transform="translate(222 40)"><rect width="46" height="18" rx="9" fill="#F5D76E" /><circle cx="9" cy="9" r="3" fill="#8A6508" /><path d="M18 9h20" stroke="#8A6508" strokeWidth="2" strokeLinecap="round" /></g>
        </svg>
      )
    case 'tech':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="te-bg" stops={[[0, '#0B0825'], [100, '#2A2160']]} /></defs>
          <rect width="320" height="200" fill="url(#te-bg)" />
          <g stroke="#fff" strokeOpacity="0.06">{Array.from({ length: 14 }).map((_, k) => (<path key={k} d={`M${k * 24} 0V200`} />))}</g>
          <rect x="22" y="26" width="168" height="116" rx="8" fill="#141329" stroke="#B8A9FA" strokeOpacity="0.6" strokeWidth="1.5" />
          <g fill="#FF6B6B" opacity="0.8"><circle cx="34" cy="38" r="3" /></g><g fill="#F5D76E" opacity="0.8"><circle cx="45" cy="38" r="3" /></g><g fill="#5AD18F" opacity="0.8"><circle cx="56" cy="38" r="3" /></g>
          {[[34, 58, 60, '#B8A9FA'], [46, 72, 90, '#53C3D7'], [46, 86, 70, '#F5D76E'], [46, 100, 100, '#F2A6C7'], [34, 114, 40, '#B8A9FA'], [34, 128, 56, '#5AD18F']].map(([x, y, w, c], k) => (<rect key={k} x={x as number} y={y as number} width={w as number} height="5" rx="2.5" fill={c as string} opacity="0.85" />))}
          <rect x="140" y="124" width="2" height="9" fill="#fff"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></rect>
          <path d="M240 70 q-14 0 -14 -12 q0 -12 14 -12 q4 -12 20 -10 q14 2 16 14 q14 2 14 12 q0 8 -12 8 z" fill="#8F86DA" />
          <path d="M190 84 H226 M258 72 V118" stroke="#53C3D7" strokeWidth="1.6" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" /></path>
          {[0, 1, 2].map((k) => (<g key={k} transform={`translate(214 ${92 + k * 24})`}><rect width="84" height="18" rx="4" fill="#1C1836" stroke="#B8A9FA" strokeOpacity="0.5" /><circle cx="12" cy="9" r="3" fill={k === 2 ? '#F5D76E' : '#5AD18F'}><animate attributeName="opacity" values="1;0.2;1" dur={`${1.2 + k * 0.5}s`} repeatCount="indefinite" /></circle><path d="M24 9h46" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" /></g>))}
        </svg>
      )
    case 'telecom':
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <defs><Grad id="tl-bg" stops={[[0, '#0B0825'], [60, '#2A2160'], [100, '#6B4FD0']]} /></defs>
          <rect width="320" height="200" fill="url(#tl-bg)" />
          <Stars n={22} h={90} />
          <g fill="#14102E"><rect x="0" y="150" width="44" height="50" /><rect x="50" y="136" width="36" height="64" /><rect x="236" y="144" width="40" height="56" /><rect x="282" y="130" width="38" height="70" /></g>
          <g stroke="#E8E1FF" strokeWidth="2" fill="none"><path d="M160 36 L138 168 M160 36 L182 168 M146 108 H174 M141 138 H179 M152 72 H168" /><path d="M146 108 L174 138 M174 108 L146 138" strokeWidth="1.2" /></g>
          <circle cx="160" cy="34" r="5" fill="#53C3D7" />
          {[0, 1, 2].map((k) => (<circle key={k} cx="160" cy="34" r="12" fill="none" stroke="#53C3D7" strokeWidth="1.6"><animate attributeName="r" values="8;56" dur="3s" begin={`${k}s`} repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.8;0" dur="3s" begin={`${k}s`} repeatCount="indefinite" /></circle>))}
          <g transform="translate(60 90)"><path d="M0 70 L-8 0 M0 70 L8 0" stroke="#B8A9FA" strokeWidth="1.6" /><circle cy="-2" r="3" fill="#F2A6C7" />{[0, 1].map((k) => (<circle key={k} cy="-2" r="8" fill="none" stroke="#F2A6C7" strokeWidth="1.2"><animate attributeName="r" values="4;26" dur="2.8s" begin={`${k * 1.4}s`} repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.8;0" dur="2.8s" begin={`${k * 1.4}s`} repeatCount="indefinite" /></circle>))}</g>
          <g transform="translate(262 100)"><path d="M0 60 L-7 0 M0 60 L7 0" stroke="#B8A9FA" strokeWidth="1.6" /><circle cy="-2" r="3" fill="#F5D76E" />{[0, 1].map((k) => (<circle key={k} cy="-2" r="8" fill="none" stroke="#F5D76E" strokeWidth="1.2"><animate attributeName="r" values="4;24" dur="2.8s" begin={`${k * 1.4 + 0.7}s`} repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.8;0" dur="2.8s" begin={`${k * 1.4 + 0.7}s`} repeatCount="indefinite" /></circle>))}</g>
        </svg>
      )
    default:
      return null
  }
}

export default function IndustryHero({ kind, isEN }: { kind: string; isEN: boolean }) {
  const c = CFG[kind]
  if (!c) return null
  const L = (x: Bi) => (isEN ? x.en : x.th)
  return (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid rgba(123,110,246,0.35)', boxShadow: '0 30px 70px -24px rgb(var(--shadow-c) / 0.45)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{c.head}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(83,195,215,0.14)', color: 'var(--accent-2)' }}>{L(c.chip)}</span>
        </div>
        <div className="p-4">
          <div className="relative rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16 / 10' }}>
            {scene(c.scene)}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full" style={{ background: 'rgba(20,19,41,0.82)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', backdropFilter: 'blur(6px)' }}>{L(c.pill)}</div>
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              <span className="w-5 h-1.5 rounded-full" style={{ background: '#fff' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.5)' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.5)' }} />
            </div>
          </div>
          <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.2 }}>{L(c.title)}</p>
          <p className="text-xs mt-1 mb-3" style={{ color: 'rgb(var(--fg) / 0.55)' }}>{L(c.sub)}</p>
          {c.specs && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3" style={{ borderTop: '1px solid rgb(var(--fg) / 0.08)' }}>
              {c.specs.map((x) => (
                <span key={x.i} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgb(var(--fg) / 0.7)' }}>
                  <i className={`ti ${x.i}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                  {isEN ? x.en : x.th}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: 'var(--card)', border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 20px 50px -14px rgb(var(--shadow-c) / 0.5)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{L(c.badge.title)}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--accent-2)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className={`ti ${c.badge.icon}`} style={{ fontSize: 16, color: 'var(--accent)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgb(var(--fg) / 0.5)' }}>{L(c.badge.cap)}</p>
        <div className="rounded-lg text-center py-1.5 text-xs" style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}>
          {L(c.badge.btn)}
        </div>
      </div>
    </div>
  )
}
