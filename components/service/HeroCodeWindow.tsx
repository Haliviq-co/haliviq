type L = ['c' | 'o' | 'b', string, string]
type D = { file: string; lines: L[]; card: [string, string, string, string] }

const b: L = ['b', '', '']
const DATA: Record<string, D> = {
  automation: { file: 'workflow.yml', lines: [['c', 'trigger: new_order', ''], ['o', 'ดึงข้อมูลจาก LINE และ Sheets', 'Pulled data from LINE and Sheets'], b, ['c', 'run: invoice --auto', ''], ['o', 'ออกใบแจ้งหนี้ ส่งอีเมลแล้ว', 'Invoice created and emailed'], b, ['c', 'notify --team ops', ''], ['o', 'ทีมได้รับแจ้งเตือนครบ', 'Team notified']], card: ['Time Saved', 'Time Saved', 'ประหยัดงานซ้ำ 20 ชม./สัปดาห์', 'Saves 20 hrs of repeat work / week'] },
  'backend-api': { file: 'api/orders.ts', lines: [['c', 'POST /v1/orders', ''], ['o', '201 Created · 48ms', '201 Created · 48ms'], b, ['c', 'auth --verify token', ''], ['o', 'สิทธิ์ถูกต้อง ผ่านการตรวจ', 'Permissions verified'], b, ['c', 'load-test --rps 500', ''], ['o', 'อัตราสำเร็จ 99.98%', 'Success rate 99.98%']], card: ['API Health', 'API Health', 'ออนไลน์ตลอด 24/7', 'Online 24/7'] },
  'brand-experience': { file: 'brand.guide', lines: [['c', 'define --voice --tone', ''], ['o', 'น้ำเสียงแบรนด์พร้อมใช้', 'Brand voice defined'], b, ['c', 'apply --touchpoints all', ''], ['o', 'เว็บ แอป LINE และสื่อพิมพ์ตรงกัน', 'Web, app, LINE and print aligned'], b, ['c', 'review --consistency', ''], ['o', 'ประสบการณ์ลูกค้าเป็นหนึ่งเดียว', 'One consistent experience']], card: ['Brand Score', 'Brand Score', 'ความสม่ำเสมอแบรนด์ 96%', 'Brand consistency 96%'] },
  'cloud-devops': { file: 'deploy.sh', lines: [['c', 'build --prod', ''], ['o', 'สร้างสำเร็จใน 42 วินาที', 'Built in 42 seconds'], b, ['c', 'deploy --region asia-se1', ''], ['o', 'ขึ้นระบบจริงไม่มี downtime', 'Live with zero downtime'], b, ['c', 'monitor --alerts on', ''], ['o', 'เฝ้าระวังและแจ้งเตือนอัตโนมัติ', 'Monitoring and alerts active']], card: ['Uptime', 'Uptime', 'ระบบพร้อมใช้ 99.9%', 'System uptime 99.9%'] },
  'design-systems': { file: 'tokens.json', lines: [['c', 'tokens --export', ''], ['o', 'สี ฟอนต์ ระยะห่าง 128 ค่า', '128 color, type and spacing tokens'], b, ['c', 'build components', ''], ['o', 'Button Input Card พร้อมใช้', 'Button, Input, Card ready'], b, ['c', 'sync --storybook', ''], ['o', 'ดีไซน์และโค้ดตรงกัน', 'Design and code in sync']], card: ['Components', 'Components', 'ใช้ซ้ำได้ 64 ชิ้น', '64 reusable components'] },
  'erp-crm': { file: 'crm.sync', lines: [['c', 'connect --erp --crm', ''], ['o', 'เชื่อมระบบบัญชีและลูกค้าแล้ว', 'Accounting and customers connected'], b, ['c', 'sync --customers', ''], ['o', 'ข้อมูลลูกค้า 12,480 รายการตรงกัน', '12,480 customer records matched'], b, ['c', 'report --monthly', ''], ['o', 'รายงานยอดขายส่งถึงผู้บริหาร', 'Sales report sent to leadership']], card: ['Data Sync', 'Data Sync', 'ข้อมูลตรงกันทุกแผนก', 'All teams on one source'] },
  'growth-strategy': { file: 'growth.plan', lines: [['c', 'analyze --funnel', ''], ['o', 'พบจุดหลุด 3 จุดในกรวยลูกค้า', 'Found 3 funnel drop-offs'], b, ['c', 'experiment --ab-test', ''], ['o', 'ทดลองสำเร็จ อัตราซื้อ +24%', 'Test won, conversion +24%'], b, ['c', 'scale --channel best', ''], ['o', 'ขยายช่องทางที่ได้ผลดีที่สุด', 'Scaling the best channel']], card: ['Growth', 'Growth', 'รายได้โตขึ้น +32%', 'Revenue up +32%'] },
  'product-discovery': { file: 'discovery.md', lines: [['c', 'interview --users 8', ''], ['o', 'พบปัญหาหลัก 3 ข้อ', 'Found 3 core problems'], b, ['c', 'prioritize --impact', ''], ['o', 'จัดลำดับฟีเจอร์ตามผลลัพธ์', 'Features ranked by impact'], b, ['c', 'roadmap --build', ''], ['o', 'แผนงาน 12 สัปดาห์พร้อม', '12-week roadmap ready']], card: ['Clarity', 'Clarity', 'รู้ชัดว่าควรสร้างอะไรก่อน', 'Clear what to build first'] },
  'qa-testing': { file: 'test-run.log', lines: [['c', 'test --suite regression', ''], ['o', 'ผ่าน 42 จาก 45 เคส', '42 of 45 cases passed'], b, ['c', 'fix --payment-edge', ''], ['o', 'แก้บั๊กการชำระเงินแล้ว', 'Payment bug fixed'], b, ['c', 'test --all', ''], ['o', 'ผ่านครบ พร้อมปล่อยเวอร์ชัน', 'All green, ready to release']], card: ['Quality Gate', 'Quality Gate', 'ผ่านด่านตรวจก่อนปล่อย', 'Release gate passed'] },
  'rapid-prototyping': { file: 'prototype.fig', lines: [['c', 'sketch --flow signup', ''], ['o', 'วางผังหน้าจอ 6 หน้า', '6 screens mapped'], b, ['c', 'prototype --interactive', ''], ['o', 'กดทดลองใช้งานได้เหมือนจริง', 'Clickable and realistic'], b, ['c', 'test --users 5', ''], ['o', 'ได้ฟีดแบ็กใน 1 สัปดาห์', 'Feedback within 1 week']], card: ['Prototype', 'Prototype', 'ทดสอบไอเดียได้ใน 2 สัปดาห์', 'Idea tested in 2 weeks'] },
  'seo-aeo-geo': { file: 'visibility.report', lines: [['c', 'audit --seo --aeo --geo', ''], ['o', 'พบโอกาสติดอันดับ 18 คำ', 'Found 18 ranking opportunities'], b, ['c', 'optimize --content', ''], ['o', 'AI ตอบอ้างอิงเว็บคุณแล้ว', 'AI answers now cite your site'], b, ['c', 'track --rank weekly', ''], ['o', 'อันดับดีขึ้นต่อเนื่อง', 'Rankings rising steadily']], card: ['Visibility', 'Visibility', 'ผู้เข้าชมเพิ่ม +41%', 'Traffic up +41%'] },
  support: { file: 'support.queue', lines: [['c', 'ticket --open', ''], ['o', 'รับเรื่องและจัดลำดับแล้ว', 'Received and prioritized'], b, ['c', 'assign --engineer', ''], ['o', 'วิศวกรรับงานใน 15 นาที', 'Engineer on it in 15 minutes'], b, ['c', 'resolve --notify', ''], ['o', 'แก้เสร็จ แจ้งลูกค้าแล้ว', 'Resolved, customer notified']], card: ['Response', 'Response', 'ตอบกลับเฉลี่ย 15 นาที', 'Avg response 15 min'] },
  'user-research': { file: 'insights.md', lines: [['c', 'recruit --participants 10', ''], ['o', 'นัดสัมภาษณ์ครบแล้ว', 'Interviews scheduled'], b, ['c', 'synthesize --themes', ''], ['o', 'สรุปพฤติกรรม 5 กลุ่ม', '5 behavior themes found'], b, ['c', 'recommend --actions', ''], ['o', 'ข้อเสนอแนะพร้อมลงมือ', 'Actionable recommendations']], card: ['Insights', 'Insights', 'เข้าใจผู้ใช้จริงจากข้อมูล', 'Real users, real insight'] },
  'web-mobile': { file: 'app.config', lines: [['c', 'build --web --ios --android', ''], ['o', 'สร้างครบทุกแพลตฟอร์ม', 'Built for every platform'], b, ['c', 'test --devices 24', ''], ['o', 'ใช้งานลื่นบนอุปกรณ์ 24 รุ่น', 'Smooth on 24 devices'], b, ['c', 'release --stores', ''], ['o', 'ส่งขึ้นสโตร์เรียบร้อย', 'Submitted to the stores']], card: ['Release', 'Release', 'เว็บและแอปใช้โค้ดชุดเดียว', 'Web and app, one codebase'] },
}

export function hasHeroCode(slug: string) { return !!DATA[slug] }

export default function HeroCodeWindow({ slug, lang = 'th' }: { slug: string; lang?: 'th' | 'en' }) {
  const d = DATA[slug]
  if (!d) return null
  const en = lang === 'en'
  return (
    <div className="hcw relative pb-10 pr-6" aria-hidden="true">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>{d.file}</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {d.lines.map(([k, th, e], i) => (
            <div key={i} className="flex gap-4">
              <span style={{ color: 'rgb(var(--fg) / 0.25)', width: 16, textAlign: 'right' }}>{i + 1}</span>
              <span className="hcw-line" style={{ ['--i' as any]: i }}>
                {k === 'c' && <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{th}</span></>}
                {k === 'o' && <><span style={{ color: '#FFD93D' }}>✓</span>&nbsp;{en ? e : th}</>}
                {k === 'b' && <>&nbsp;</>}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hcw-card theme-dark absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4" style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{en ? d.card[1] : d.card[0]}</span>
          <span className="hcw-dot w-2 h-2 rounded-full" style={{ background: '#FFD93D' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="hcw-bar h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),#FFD93D)', width: '90%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {en ? d.card[3] : d.card[2]}
        </div>
      </div>
    </div>
  )
}
