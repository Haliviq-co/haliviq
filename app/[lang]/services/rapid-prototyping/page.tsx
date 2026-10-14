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
    ? "Rapid Prototyping & Design Sprints in Bangkok | Haliviq"
    : "รับทำ Prototype และ Design Sprint กรุงเทพฯ | Haliviq"
  const description = isEN
    ? "Haliviq builds clickable Figma prototypes and runs design sprints in Bangkok, so you can test an idea with real users in one to four weeks, before any code."
    : "Haliviq ทำต้นแบบที่กดใช้ได้ใน Figma และจัด Design Sprint ที่กรุงเทพฯ ให้คุณทดสอบไอเดียกับผู้ใช้จริงได้ภายใน 1-4 สัปดาห์ ก่อนเริ่มเขียนโค้ด"
  const url = `https://www.haliviq.com/${params.lang}/services/rapid-prototyping`
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
  const badge    = isEN ? 'Design / Rapid Prototyping'  : 'ดีไซน์ / Rapid Prototyping'
  const title    = isEN ? 'Test Your Ideas'  : 'ทดสอบไอเดีย'
  const subtitle = isEN ? 'Before You Build Them'    : 'ก่อนสร้างจริง'
  const heroDesc = isEN ? 'The most expensive mistake in product development is building the wrong thing. Haliviq designs clickable, realistic prototypes in Figma that you can put in front of real customers, investors or your own team before a line of code is written. In a focused design sprint of one to four weeks, a rough idea becomes something people can tap through, react to and tell you honestly whether they would use it.'  : 'ความผิดพลาดที่แพงที่สุดในการพัฒนาผลิตภัณฑ์คือการสร้างสิ่งที่ผิด Haliviq ออกแบบต้นแบบที่กดใช้ได้เหมือนจริงใน Figma เพื่อให้คุณเอาไปให้ลูกค้าจริง นักลงทุน หรือทีมของคุณลองใช้ก่อนที่จะมีโค้ดสักบรรทัด ใน Design Sprint ที่ใช้เวลา 1-4 สัปดาห์ ไอเดียหยาบๆ จะกลายเป็นสิ่งที่คนกดดูได้ ให้ความเห็นได้ และบอกตรงๆ ได้ว่าเขาจะใช้จริงไหม'
  const whyTitle = isEN ? 'Why prototyping is the smartest investment in product'    : 'ทำไมการทำต้นแบบถึงเป็นการลงทุนที่คุ้มที่สุด'
  const whyDesc  = isEN ? 'Changes made in design cost 10x less than changes made during development. Changes after launch cost 100x. Prototyping is not a luxury; it is the cheapest form of risk reduction available. A prototype also ends the debate in the meeting room, because people stop arguing about what a document means and start reacting to something they can actually use.'  : 'การแก้ในขั้นออกแบบถูกกว่าแก้ระหว่างพัฒนา 10 เท่า และถูกกว่าแก้หลังเปิดตัว 100 เท่า ต้นแบบไม่ใช่ของฟุ่มเฟือย แต่เป็นวิธีลดความเสี่ยงที่ถูกที่สุด ต้นแบบยังช่วยจบการเถียงกันในห้องประชุมได้ด้วย เพราะทุกคนเลิกตีความเอกสารคนละแบบ แล้วมาตอบสนองต่อของที่กดใช้ได้จริงแทน'
  const ctaTitle = isEN ? 'Ready to test before you build?'    : 'พร้อมทดสอบก่อนสร้างหรือยัง?'
  const ctaDesc  = isEN ? 'Book a free Design Sprint scoping session. Bring a rough idea or a list of screens, and we will leave the call with a plan for your prototype, who should test it, and how long it will take.'   : 'จองคุยกำหนดขอบเขต Design Sprint ฟรี เอาไอเดียหยาบๆ หรือรายการหน้าจอมาคุยกัน จบการคุยคุณจะได้แผนทำต้นแบบ รู้ว่าควรให้ใครทดสอบ และใช้เวลาเท่าไหร่'
  const heroBullets = isEN ? [
      'Concept exploration and idea mapping in structured workshops',
      'Low-fidelity sketches through to high-fidelity interactive prototypes in Figma',
      'Moderated and unmoderated usability testing sessions, in Thai or English',
      'Synthesis of findings into clear design decisions, not a pile of notes',
      'Handoff-ready designs and developer specifications',
      'Prototypes sized for the job: one key flow, or a whole app',
    ] : [
      'สำรวจแนวคิดและวางผังไอเดียในเวิร์กช็อปที่มีขั้นตอนชัด',
      'ตั้งแต่ร่างคร่าวๆ ไปจนถึงต้นแบบที่กดใช้ได้ละเอียดสูงใน Figma',
      'ทดสอบการใช้งานทั้งแบบมีผู้ดำเนินการและไม่มีผู้ดำเนินการ เป็นภาษาไทยหรืออังกฤษก็ได้',
      'สรุปความเห็นเป็นการตัดสินใจด้านดีไซน์ที่ชัดเจน ไม่ใช่กองโน้ตเฉยๆ',
      'งานดีไซน์พร้อมส่งต่อ พร้อมสเปกสำหรับนักพัฒนา',
      'ทำต้นแบบให้พอดีกับงาน จะเป็น flow สำคัญ flow เดียวหรือทั้งแอปก็ได้',
    ]
  const whyPoints   = isEN ? [
      'Prototyping surfaces assumptions that would otherwise survive all the way to production, such as a button label nobody understands or a step users skip.',
      'User testing with just 5 participants reveals 85% of usability problems, so a small, quick round is already worth doing.',
      'Stakeholders give far more valuable feedback on an interactive prototype than on a document or a slide deck.',
      'Rapid iteration on prototypes compresses months of back-and-forth into focused design sprints.',
      'A validated prototype becomes the north star for the development team, which reduces scope creep and ambiguity when building starts.',
      'A realistic prototype is also useful outside the project: for investor meetings, for pre-sales conversations and for checking a concept with customers.',
    ] : [
      'ต้นแบบเผยสมมติฐานที่ซ่อนอยู่ ซึ่งถ้าไม่เจอก็จะหลุดไปถึงระบบจริง เช่น ชื่อปุ่มที่ไม่มีใครเข้าใจ หรือขั้นตอนที่ผู้ใช้ข้ามไปเลย',
      'ทดสอบการใช้งานกับผู้ใช้เพียง 5 คนก็พบปัญหาได้ถึง 85% ดังนั้นรอบทดสอบเล็กๆ แบบเร็วๆ ก็คุ้มที่จะทำแล้ว',
      'ผู้เกี่ยวข้องให้ความเห็นที่มีประโยชน์กับต้นแบบที่กดใช้ได้มากกว่าเอกสารหรือสไลด์',
      'ปรับต้นแบบซ้ำๆ อย่างรวดเร็ว ย่นการคุยไปมาหลายเดือนให้เหลือ Design Sprint ที่โฟกัส',
      'ต้นแบบที่ผ่านการทดสอบแล้วเป็นแนวทางให้ทีมพัฒนา ลดขอบเขตที่บานปลายและความคลุมเครือตอนเริ่มสร้างจริง',
      'ต้นแบบที่เหมือนจริงยังใช้ประโยชน์นอกโปรเจกต์ได้ด้วย เช่น นำเสนอนักลงทุน คุยกับลูกค้าก่อนขาย หรือเช็กแนวคิดกับกลุ่มลูกค้า',
    ]
  const outcomes    = isEN ? [
      {stat: '10x', label: 'Cheaper Than Dev Changes', desc: 'Design-stage fixes'},
      {stat: '5', label: 'Users to Find 85% of Issues', desc: 'Nielsen Norman research'},
      {stat: '2 weeks', label: 'From Brief to Prototype', desc: 'In a focused design sprint'},
      {stat: '0', label: 'Surprises at Launch', desc: 'Validated before build'}
    ] : [
      {stat: '10x', label: 'ถูกกว่าแก้ตอนพัฒนา', desc: 'เมื่อแก้ในขั้นออกแบบ'},
      {stat: '5 คน', label: 'พบปัญหา 85%', desc: 'ตามงานวิจัยของ Nielsen Norman'},
      {stat: '2 สัปดาห์', label: 'จากบรีฟสู่ต้นแบบ', desc: 'ใน Design Sprint ที่โฟกัส'},
      {stat: '0', label: 'เซอร์ไพรส์ตอนเปิดตัว', desc: 'ทดสอบก่อนสร้าง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'We run a workshop with your team to put every idea on the table, sketch several different concepts, and score them against your goals. You leave with a chosen direction and the reasons behind it. It suits teams who have strong opinions but no shared picture yet.'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'We draw low-fidelity wireframes that show layout, content order and navigation, without spending time on colour or fonts. Because they are quick to change, this is the cheapest moment to argue about structure and the right place to catch missing screens.'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'We build an interactive Figma prototype that looks and feels like the real product on a phone or a desktop browser. Buttons work, screens transition, and the copy is real, in Thai where your users read Thai, so it can be tested with customers the same week.'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'We test with people from your real target group, ask them to complete realistic tasks, and record the sessions with permission. You see where they hesitate and what they misread. The output is a short findings report with clips and a ranked list of fixes.'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'We update the prototype after each round of testing and, where it makes sense, test again with a fresh group. We stop when the main tasks work without help, so you know the direction is right before engineering starts.'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'We hand over a clean Figma file with spacing, colours, components, assets and annotations that explain how each screen behaves, plus edge cases such as empty states and errors. Your developers, ours or an outside team can start building from it directly.'}
    ] : [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'เราจัดเวิร์กช็อปกับทีมของคุณ เอาไอเดียทุกอย่างมากางบนโต๊ะ ร่างแนวคิดหลายแบบ แล้วให้คะแนนเทียบกับเป้าหมาย คุณจะได้ทิศทางที่เลือกแล้วพร้อมเหตุผล เหมาะกับทีมที่ต่างคนต่างมีความเห็นแรง แต่ยังไม่มีภาพร่วมกัน'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'เราวาด Wireframe แบบหยาบที่แสดงโครงหน้า ลำดับเนื้อหา และการนำทาง โดยยังไม่เสียเวลากับสีหรือฟอนต์ เพราะแก้ง่ายและเร็ว จึงเป็นช่วงที่ถูกที่สุดในการเถียงเรื่องโครงสร้าง และจับได้ว่าขาดหน้าจอไหนไปบ้าง'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'เราสร้างต้นแบบใน Figma ที่กดใช้ได้ ดูและรู้สึกเหมือนผลิตภัณฑ์จริงทั้งบนมือถือและเว็บเบราว์เซอร์ ปุ่มกดได้ หน้าเปลี่ยนต่อกัน ข้อความเป็นของจริง และเป็นภาษาไทยถ้าผู้ใช้ของคุณอ่านไทย จึงเอาไปทดสอบกับลูกค้าได้ภายในสัปดาห์เดียวกัน'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'เราทดสอบกับคนในกลุ่มเป้าหมายตัวจริง ให้ลองทำงานที่เหมือนใช้จริง และบันทึกการทดสอบเมื่อได้รับอนุญาต คุณจะเห็นว่าเขาลังเลตรงไหนและเข้าใจผิดตรงไหน ส่งมอบเป็นรายงานสั้นๆ พร้อมคลิปและรายการสิ่งที่ควรแก้เรียงตามลำดับ'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'เราปรับต้นแบบหลังทดสอบแต่ละรอบ และถ้าเหมาะสมก็ทดสอบซ้ำกับกลุ่มใหม่ จนงานหลักๆ ผู้ใช้ทำได้เองโดยไม่ต้องมีคนช่วย คุณจะมั่นใจว่าทิศทางถูกก่อนทีมพัฒนาเริ่มงาน'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'เราส่งไฟล์ Figma ที่จัดเรียบร้อย มีระยะห่าง สี คอมโพเนนต์ ไฟล์ภาพ และคำอธิบายว่าแต่ละหน้าทำงานยังไง รวมถึงกรณีพิเศษอย่างหน้าว่างและหน้า error ทีมพัฒนาของคุณ ของเรา หรือทีมภายนอกเริ่มสร้างต่อจากไฟล์นี้ได้เลย'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brief & Kick-off', desc: 'We agree the goal of the prototype, who it is for, what is fixed (brand, platform, deadlines) and how we will know it worked. We also collect any material you already have: research, competitor screens, old designs.'},
      {no: '02', title: 'Ideation Workshop', desc: 'A working session with your team to generate several concepts, vote on them and choose the best direction. Everyone who will later approve the design should be in the room.'},
      {no: '03', title: 'Wireframe', desc: 'We build wireframes showing the flow and structure before investing in visual detail, then review them with you so structural changes happen while they are still cheap.'},
      {no: '04', title: 'High-fidelity Design', desc: 'We turn the approved wireframes into a clickable, realistic prototype with real content and the main interactions, ready to test with users.'},
      {no: '05', title: 'Test & Iterate', desc: 'We test with 5 or more users, synthesise what we see into clear insights, and refine the design based on the findings. Your team can watch sessions live or as recordings.'},
      {no: '06', title: 'Handoff', desc: 'We deliver the specs, assets and prototype to the dev team, walk them through the logic, and stay available to answer questions while they start building.'}
    ] : [
      {no: '01', title: 'Brief & Kick-off', desc: 'เราตกลงเป้าหมายของต้นแบบ ว่าทำให้ใคร อะไรคือสิ่งที่เปลี่ยนไม่ได้ (แบรนด์ แพลตฟอร์ม เดดไลน์) และเราจะรู้ได้ยังไงว่าสำเร็จ พร้อมรวบรวมของที่คุณมีอยู่แล้ว เช่น งานวิจัย หน้าจอคู่แข่ง หรือดีไซน์เก่า'},
      {no: '02', title: 'Ideation Workshop', desc: 'เวิร์กช็อปกับทีมของคุณเพื่อคิดแนวคิดหลายแบบ โหวต แล้วเลือกทิศทางที่ดีที่สุด คนที่จะเป็นผู้อนุมัติดีไซน์ในภายหลังควรเข้าร่วมด้วย'},
      {no: '03', title: 'Wireframe', desc: 'เราทำ Wireframe ที่แสดงลำดับการใช้งานและโครงสร้าง ก่อนลงทุนกับรายละเอียดภาพ แล้วนั่งรีวิวกับคุณ เพื่อให้การแก้โครงสร้างเกิดขึ้นตอนที่ยังถูกอยู่'},
      {no: '04', title: 'High-fidelity Design', desc: 'เราแปลง Wireframe ที่อนุมัติแล้วเป็นต้นแบบที่กดใช้ได้เหมือนจริง ใส่เนื้อหาจริงและปฏิสัมพันธ์หลักๆ พร้อมทดสอบกับผู้ใช้'},
      {no: '05', title: 'Test & Iterate', desc: 'เราทดสอบกับผู้ใช้ 5 คนขึ้นไป สรุปสิ่งที่เห็นเป็นข้อค้นพบที่ชัดเจน แล้วปรับดีไซน์ตามผล ทีมของคุณนั่งดูแบบสดหรือดูคลิปย้อนหลังก็ได้'},
      {no: '06', title: 'Handoff', desc: 'เราส่งสเปก ไฟล์ภาพ และต้นแบบให้ทีมพัฒนา พาเดินดู logic ของแต่ละหน้า และอยู่ตอบคำถามระหว่างที่ทีมเริ่มสร้าง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Prototype Prevents 6M THB Redesign', desc: 'User testing with a prototype revealed a wrong assumption, so the direction changed before development started.', result: '6M THB saved'},
      {tag: 'Healthcare · Bangkok', title: '2-week Design Sprint Aligns 5 Stakeholders', desc: 'An interactive prototype gave everyone the same picture of the product, which cut meetings and revision rounds.', result: '0 Major Revisions after kick-off'},
      {tag: 'SaaS · Bangkok', title: 'Prototype Test Finds 7 Critical Issues Before Launch', desc: 'A usability test with 8 users found the issues, and the team fixed them before development started.', result: 'On-time launch with no rollback'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ต้นแบบช่วยกันการออกแบบใหม่มูลค่า 6 ล้านบาท', desc: 'ทดสอบต้นแบบกับผู้ใช้แล้วพบว่าสมมติฐานผิด จึงปรับทิศทางก่อนทีมพัฒนาเริ่มงาน', result: 'ประหยัด 6 ล้านบาท'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Design Sprint 2 สัปดาห์ ทำให้ผู้เกี่ยวข้อง 5 ฝ่ายเห็นตรงกัน', desc: 'ต้นแบบที่กดใช้ได้ทำให้ทุกคนเห็นภาพผลิตภัณฑ์เดียวกัน ลดการประชุมและรอบแก้งาน', result: 'ไม่มีการแก้ใหญ่หลังเริ่มโปรเจกต์'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'ทดสอบต้นแบบพบปัญหาร้ายแรง 7 ข้อก่อนเปิดตัว', desc: 'ทดสอบการใช้งานกับผู้ใช้ 8 คนแล้วเจอปัญหา ทีมแก้ได้ก่อนเริ่มพัฒนา', result: 'เปิดตัวตรงเวลา ไม่ต้องย้อนเวอร์ชัน'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a prototype different from a mockup?', a: 'A mockup is a static image showing the visual design. A prototype is interactive: users can click, navigate and complete tasks, so you test the experience and not just the look.'},
      {q: 'How long does it take?', a: 'A lean prototype takes 1-2 weeks. A full design sprint including testing takes 3-4 weeks, depending on the size of the product and how many screens are involved.'},
      {q: 'Do we need a clear spec before prototyping?', a: 'Not at all. Prototyping is ideal for exploring concepts that are still unclear. The more ambiguous the idea, the more a prototype helps, because it forces decisions that a document lets you avoid.'},
      {q: 'Can the prototype be in Figma?', a: 'Yes. We use Figma as our primary tool and deliver a Figma file that your design and development teams can use straight away, including the interactive prototype link for testing.'},
      {q: 'How many screens does a prototype need?', a: 'Only as many as the question you want answered. Often one or two critical flows, such as sign-up and checkout, are enough to learn most of what you need. We agree the scope in the kick-off so the prototype stays quick and focused.'},
      {q: 'Who tests the prototype, and where do the testers come from?', a: 'Testers come from your target group. We can invite your existing customers, or recruit people who match the profile you give us. Sessions can run remotely over video or in person in Bangkok, in Thai or English.'},
      {q: 'Does the prototype turn into the real product?', a: 'The prototype itself is not production code. What carries over is the validated design, the component library and the specs, so developers build the real thing faster and with fewer questions. For some projects we also build the first version, so the same team covers both.'}
    ] : [
      {q: 'ต้นแบบต่างจาก Mockup อย่างไร?', a: 'Mockup คือภาพนิ่งที่แสดงหน้าตา ส่วนต้นแบบกดใช้ได้ เปิดดูหน้าต่างๆ ได้ และลองทำงานจริงได้ คุณจึงทดสอบประสบการณ์การใช้ ไม่ใช่แค่ทดสอบว่าสวยไหม'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'ต้นแบบแบบกระชับใช้ 1-2 สัปดาห์ Design Sprint เต็มรูปแบบรวมการทดสอบใช้ 3-4 สัปดาห์ ขึ้นกับขนาดของผลิตภัณฑ์และจำนวนหน้าจอ'},
      {q: 'ต้องมีสเปกชัดเจนก่อนทำต้นแบบไหม?', a: 'ไม่จำเป็นเลย การทำต้นแบบเหมาะมากกับการสำรวจแนวคิดที่ยังไม่ชัด ยิ่งไอเดียคลุมเครือ ต้นแบบยิ่งช่วย เพราะมันบังคับให้ต้องตัดสินใจ ซึ่งเอกสารปล่อยให้เราเลี่ยงได้'},
      {q: 'ทำต้นแบบด้วย Figma ได้ไหม?', a: 'ได้ เราใช้ Figma เป็นเครื่องมือหลัก และส่งมอบไฟล์ Figma ที่ทีมดีไซน์และทีมพัฒนาของคุณใช้ต่อได้ทันที รวมถึงลิงก์ต้นแบบที่กดใช้ได้สำหรับทดสอบ'},
      {q: 'ต้นแบบต้องมีกี่หน้าจอ?', a: 'เท่าที่จำเป็นต่อคำถามที่อยากได้คำตอบ บ่อยครั้งแค่ 1-2 flow สำคัญ เช่น สมัครสมาชิกกับชำระเงิน ก็ได้ข้อมูลเกือบทั้งหมดที่ต้องใช้แล้ว เราตกลงขอบเขตกันตั้งแต่ kick-off เพื่อให้ต้นแบบเสร็จเร็วและโฟกัส'},
      {q: 'ใครเป็นคนทดสอบต้นแบบ และหาผู้ทดสอบมาจากไหน?', a: 'ผู้ทดสอบมาจากกลุ่มเป้าหมายของคุณ เราชวนลูกค้าเดิมของคุณมาร่วมได้ หรือหาคนที่ตรงกับโปรไฟล์ที่คุณให้มา การทดสอบทำทางไกลผ่านวิดีโอ หรือนัดเจอที่กรุงเทพฯ ก็ได้ เป็นภาษาไทยหรืออังกฤษ'},
      {q: 'ต้นแบบจะกลายเป็นผลิตภัณฑ์จริงเลยไหม?', a: 'ตัวต้นแบบไม่ใช่โค้ดที่ใช้ขึ้นระบบจริง สิ่งที่ส่งต่อได้คือดีไซน์ที่ทดสอบแล้ว ชุดคอมโพเนนต์ และสเปก ทำให้ทีมพัฒนาสร้างของจริงได้เร็วขึ้นและมีคำถามน้อยลง บางโปรเจกต์เราก็สร้างเวอร์ชันแรกให้ด้วย ทีมเดียวกันดูแลได้ทั้งสองช่วง'}
    ]
  const related     = isEN ? [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'Design Systems', href: '/services/design-systems'}
    ] : [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'Design Systems', href: '/services/design-systems'}
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
      heroImg="/images/services/rapid-prototyping/hero.jpg"
      whyImg="/images/services/rapid-prototyping/why1.jpg"
      whyImg2="/images/services/rapid-prototyping/why2.jpg"
      featureImg="/images/services/rapid-prototyping/feature.jpg"
      processImg="/images/services/rapid-prototyping/process.jpg"
    />
  )
}
