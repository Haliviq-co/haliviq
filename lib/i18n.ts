export type Lang = 'th' | 'en'
export const langs: Lang[] = ['th', 'en']
export const defaultLang: Lang = 'th'

export const t = {
  th: {
    // ── NAV ──
    nav: {
      home: 'หน้าหลัก', services: 'บริการ', industries: 'อุตสาหกรรม', work: 'ผลงาน', partners: 'พาร์ทเนอร์',
      careers: 'ร่วมงาน', blog: 'บทความ', contact: 'ติดต่อ', cta: 'เริ่มโปรเจกต์',
      servicesNotSure: 'ยังไม่แน่ใจว่าจะเริ่มตรงไหน?', talkToUs: 'คุยกับเรา →',
      allIndustries: 'อุตสาหกรรมทั้งหมด', insights: 'บทความและแนวคิด',
    },
    // ── HERO ──
    hero: {
      badge: 'ความคิดของคน สู่อนาคตที่ฉลาดขึ้น',
      h1a: 'เราสร้าง', h1b: 'ผลิตภัณฑ์ดิจิทัล', h1c: 'ที่สร้างความต่าง',
      sub: 'เราช่วยดูให้ตั้งแต่วางกลยุทธ์ ออกแบบ ไปจนถึงเขียนโค้ดและเปิดใช้งานจริง ทั้งหมดอยู่ในทีมเดียวที่กรุงเทพฯ ทำงานด้านนี้มากว่า 8 ปี เน้นสร้างผลิตภัณฑ์ที่ธุรกิจเอาไปใช้แล้วเห็นผลจริง ไม่ว่าจะเป็นเว็บไซต์ แอป ระบบ AI หรือระบบหลังบ้านขององค์กร',
      btn1: 'เริ่มโปรเจกต์', btn2: 'ดูผลงานของเรา',
      currentProject: 'โปรเจกต์ปัจจุบัน', mobileApp: 'ออกแบบแอปธนาคาร\nมือถือใหม่',
      stats: ['โปรเจกต์ที่ส่งมอบ', 'ประสบการณ์ในวงการ', 'ทีมผู้เชี่ยวชาญ', 'ลูกค้าที่กลับมาใช้อีก'],
      statsN: ['120+', '8 ปี', '40+', '95%'],
    },
    // ── CLIENTS ──
    clients: { label: 'แบรนด์และองค์กรชั้นนำทั่วเอเชียไว้วางใจให้เราช่วยดูแล' },
    // ── CORE SKILLS ──
    coreSkills: {
      h2: 'Core Skills',
      subtitle: 'Core disciplines. One integrated team.',
      desc: 'ทุกโปรเจกต์ของ Haliviq ทำโดยทีมของเราเอง ทั้งวิศวกร คนทำ AI คนทำข้อมูล และดีไซเนอร์ ทำงานร่วมกันในทีมเดียว และคุณคุยกับทีมเดียวได้ตลอดทาง งานเลยไม่ตกหล่นตอนส่งต่อกันระหว่างทีม เราดูแลผลิตภัณฑ์ตั้งแต่แรกเริ่ม จนถึงวันที่มีคนใช้จำนวนมาก',
      exploreLabel: 'ดูเพิ่ม',
      categories: [
        {
          heading: 'กลยุทธ์',
          desc: 'งานกลยุทธ์ของเราเริ่มจากทำความเข้าใจก่อนว่าธุรกิจคุณหารายได้อย่างไร และลูกค้าคือใคร ก่อนจะแนะนำอะไรสักอย่าง เรารวมการสัมภาษณ์ ข้อมูลตลาดและคู่แข่ง Analytics และแผนการเติบโตเข้าด้วยกัน ออกมาเป็นทิศทางผลิตภัณฑ์และ Roadmap ที่ทีมคุณหยิบไปทำต่อได้เลย คุณจะได้แผนที่เรียงลำดับความสำคัญไว้แล้ว และมีข้อมูลรองรับ ไม่ใช่การเดา',
          tags: ['กลยุทธ์ดิจิทัล', 'กลยุทธ์การเติบโต', 'วิจัยผู้ใช้งาน', 'ข้อมูลและการวิเคราะห์'],
        },
        {
          heading: 'สร้างแบรนด์',
          desc: 'งานสร้างแบรนด์ของเราเริ่มจากกำหนดจุดยืนว่าธุรกิจของคุณเป็นใคร และแตกต่างจากคู่แข่งอย่างไร แล้วจึงออกแบบโลโก้ สี ตัวอักษร และน้ำเสียงให้เป็นระบบเดียวกัน ส่งมอบพร้อมคู่มือการใช้งาน เพื่อให้ทุกสื่อ ตั้งแต่เว็บไซต์ไปจนถึงเอกสารนำเสนอขาย สื่อสารออกมาเป็นแบรนด์เดียวกัน',
          tags: ['กลยุทธ์แบรนด์', 'ออกแบบโลโก้', 'อัตลักษณ์ภาพ', 'น้ำเสียงและข้อความ', 'คู่มือแบรนด์'],
        },
        {
          heading: 'ดีไซน์',
          desc: 'งานดีไซน์ของเราเริ่มจากทำความเข้าใจปัญหาก่อนจะเปิด Figma เราทำทั้งการวิจัยผู้ใช้งาน การออกแบบประสบการณ์ใช้งาน (UX) และหน้าจอ (UI) เพื่อให้ผลิตภัณฑ์ใช้งานง่ายตั้งแต่วันแรก ทุกไอเดียเราเอาไปลองกับผู้ใช้จริงก่อนเขียนโค้ดบรรทัดแรก คุณเลยเห็นหน้าตาและวิธีใช้งานชัดๆ ก่อนจะลงทุนพัฒนา และที่ออกแบบไว้ยังต่อยอดเป็น Design System ให้ทีมใช้ซ้ำได้',
          tags: ['ออกแบบประสบการณ์ (UX)', 'ออกแบบหน้าจอ (UI)', 'วิจัยผู้ใช้งาน', 'ทำ Prototype', 'ระบบดีไซน์', 'ตรวจคุณภาพงานดีไซน์'],
        },
        {
          heading: 'วิศวกรรม',
          desc: 'เราสร้างเว็บและแอปมือถือที่เปิดใช้งานจริงได้ ตั้งแต่แอป iOS และ Android แบบ Native, Frontend ด้วย React และ Next.js ไปจนถึง Backend API ที่ปลอดภัยและรองรับผู้ใช้ที่เพิ่มขึ้นได้ การทดสอบอัตโนมัติ CI/CD และ Cloud Infrastructure เราใส่ไว้ในทุกงานตั้งแต่แรก ไม่ได้มาเพิ่มทีหลัง พอส่งมอบ ทีมของคุณจึงรับไปดูแลต่อได้ไม่ยาก',
          tags: ['iOS & Android', 'Web Frontend', 'Backend & APIs', 'React / Next.js / Flutter', 'Cloud & DevOps', 'Automated Testing'],
        },
        {
          heading: 'AI และนวัตกรรม',
          desc: 'เราใช้ AI ในจุดที่ช่วยได้จริง ไม่ได้ใช้เพราะกำลังเป็นกระแส ตั้งแต่ Agent ที่ทำงานหลายขั้นตอนและ Copilot ที่เรียกใช้เครื่องมือได้ ไปจนถึงระบบความรู้แบบ RAG โมเดลพยากรณ์ และระบบแนะนำ เราช่วยดูให้ทุกขั้น ได้แก่ ตรวจความพร้อมด้าน AI เตรียมข้อมูล ออกแบบ Agent และโมเดล วัดผลว่าคำตอบแม่นพอ เชื่อมเข้ากับระบบที่ใช้อยู่ และติดตามผลหลังเปิดใช้',
          tags: ['AI Agents & Tool Use', 'RAG & Knowledge Systems', 'Generative AI & LLMs', 'Copilots & Assistants', 'Predictive Analytics', 'AI Audits, Evals & Strategy'],
        },
      ],
    },
    // ── WHAT WE DO ──
    whatWeDo: {
      h2: 'สิ่งที่เราทำ',
      items: [
        {
          heading: 'วิศวกรรมเว็บและมือถือ',
          desc: 'เว็บและแอปมือถือด้วย React, Next.js, React Native และ Flutter ที่เปิดใช้งานจริงได้ และรองรับผู้ใช้ที่เพิ่มขึ้น เราช่วยตั้งแต่เลือกเทคโนโลยี เขียนโค้ด ทดสอบ ไปจนถึงขึ้นระบบ ทีมเดียวดูแลทั้งฝั่งหน้าบ้านและหลังบ้าน ทั้ง API การเชื่อมต่อกับระบบที่คุณใช้อยู่ การชำระเงิน และการแจ้งเตือน เราเขียนโค้ดให้อ่านง่ายและมีการทดสอบ เพื่อให้คนอื่นรับช่วงต่อได้ง่าย และหลังเปิดใช้งานเรายังดูแลแก้ไขและเพิ่มฟีเจอร์ต่อให้ได้',
        },
        {
          heading: 'AI Agents และ Generative AI',
          desc: 'Agent ที่ทำงานหลายขั้นตอน RAG pipeline ที่ตอบจากเอกสารของคุณเอง และการเอา LLM ไปใช้กับงานจริงของธุรกิจ เราเริ่มจากหางานที่คุ้มจะทำก่อน แล้วค่อยลงมือสร้าง ตัวอย่างงานที่ทำ เช่น แชทบอทตอบลูกค้าจากคู่มือและเอกสารของบริษัท ผู้ช่วยค้นข้อมูลภายในองค์กร ระบบสรุปเอกสารและอีเมล และ Agent ที่เชื่อมกับเครื่องมือที่ทีมใช้อยู่ เรากำหนดวิธีวัดผลก่อนเริ่ม ทดสอบกับข้อมูลจริง และมีคนตรวจในจุดที่ผิดพลาดไม่ได้',
        },
        {
          heading: 'Data Engineering และ Analytics',
          desc: 'รวบรวมข้อมูลที่กระจายอยู่หลายที่มาไว้ใน Data Warehouse เดียว ทำ Pipeline ให้ข้อมูลอัปเดตเอง แล้วสร้าง Dashboard ที่ทีมเปิดดูแล้วตัดสินใจต่อได้เลย เราช่วยตั้งแต่ออกแบบโครงสร้างข้อมูล เชื่อมต่อแหล่งข้อมูลอย่างระบบขาย บัญชี เว็บไซต์ และโฆษณา ไปจนถึงตรวจคุณภาพข้อมูลให้ตัวเลขตรงกันทุกที่ เพื่อให้ผู้บริหารและทีมดูตัวเลขชุดเดียวกัน แทนการรวมไฟล์เองทุกสัปดาห์',
        },
        {
          heading: 'Product Design',
          desc: 'เราคุยกับผู้ใช้จริง ออกแบบหน้าจอ แล้วจัดระเบียบเป็น Design System เพื่อให้ผลิตภัณฑ์ใช้งานง่ายตั้งแต่วันแรก และทีมของคุณต่อยอดหน้าใหม่ได้โดยหน้าตาไม่เพี้ยน ขั้นตอนเริ่มจากสัมภาษณ์ผู้ใช้และดูวิธีใช้งานจริง ทำ Wireframe และ Prototype ให้ทดลองคลิกก่อนเขียนโค้ด แล้วส่งมอบไฟล์ออกแบบที่นักพัฒนาใช้ต่อได้ทันที รวมถึงดูเรื่องการเข้าถึงสำหรับผู้ใช้ทุกกลุ่ม และการแสดงผลบนมือถือและจอใหญ่',
        },
        {
          heading: 'Cloud และ Infrastructure',
          desc: 'วางและดูแลระบบบน AWS, GCP และ Azure ให้เสถียร ปลอดภัย และขยายได้เมื่อผู้ใช้เพิ่ม รวมถึงตั้ง CI/CD และระบบแจ้งเตือน เพื่อให้ทีมรู้ปัญหาก่อนที่ลูกค้าจะรู้ เราดูเรื่องสำรองข้อมูล การกำหนดสิทธิ์ การควบคุมค่าใช้จ่ายคลาวด์ และแผนรับมือเมื่อระบบมีปัญหา สามารถย้ายระบบจากเซิร์ฟเวอร์เดิมขึ้นคลาวด์ หรือปรับระบบที่มีอยู่ให้เสถียรและประหยัดขึ้นโดยไม่ต้องสร้างใหม่ทั้งหมด',
        },
        {
          heading: 'Digital Transformation',
          desc: 'เอาระบบเก่า ไฟล์ Excel และขั้นตอนที่ยังทำด้วยมือ มาเชื่อมเป็นแพลตฟอร์มเดียวที่ขยายต่อได้ เราช่วยดูว่าควรเริ่มปรับตรงไหนก่อน และค่อยๆ เปลี่ยนโดยไม่ให้งานประจำวันสะดุด เริ่มจากคุยกับคนที่ใช้งานจริงเพื่อดูว่าเวลาหายไปตรงไหน แล้วจัดลำดับว่างานไหนคุ้มที่จะทำก่อน อาจเป็นระบบจัดการลูกค้า ระบบอนุมัติเอกสาร หรือแดชบอร์ดกลาง ทำเป็นขั้นๆ ให้เห็นผลเร็ว และฝึกทีมให้ใช้งานคล่องก่อนเปลี่ยนทั้งหมด',
        },
      ],
    },
    // ── FEATURED WORK ──
    featuredWork: {
      h2: 'ผลงานเด่น',
      viewProject: 'ดูโปรเจกต์',
      viewAll: 'ดูผลงานทั้งหมด',
      items: [
        {
          tag: 'อสังหาริมทรัพย์ · กลยุทธ์',
          title: 'ADMiRE Digital Strategy',
          desc: 'เราช่วยวางกลยุทธ์ดิจิทัลและ Roadmap การเติบโตให้ ADMiRE เริ่มจากวิจัยตลาดและกลุ่มลูกค้า ไปจนถึงแผนการตลาดดิจิทัลที่วัดผลได้ ช่วยให้ขายได้มากขึ้น และทำให้กลุ่มลูกค้าเป้าหมายรู้จักแบรนด์',
          img: '/images/work/project-1.jpg',
        },
        {
          tag: 'อสังหาริมทรัพย์ · UX/UI',
          title: 'Sea Hills Riracha Website',
          desc: 'ออกแบบและพัฒนาเว็บไซต์ระดับพรีเมียมให้ Sea Hills Riracha เราดูแลตั้งแต่ Brand Experience ที่ทำให้เว็บไซต์ดูสมกับตัวโครงการ ไปจนถึงระบบจองเข้าชมโครงการออนไลน์ ที่ลูกค้านัดวันเข้าไปดูโครงการได้เอง',
          img: '/images/work/design-3.jpg',
        },
        {
          tag: 'AI · องค์กร',
          title: 'ITAGC Platform',
          desc: 'พัฒนาแพลตฟอร์ม AI สำหรับองค์กร โดยเชื่อม Agent อัตโนมัติเข้ากับขั้นตอนการทำงานที่ทีมใช้อยู่เดิม ไม่ต้องเปลี่ยนวิธีทำงานทั้งหมด ช่วยลดงานซ้ำซ้อน และช่วยให้ตัดสินใจแม่นยำขึ้น',
          img: '/images/work/ai-4.jpg',
        },
        {
          tag: 'PropTech · อสังหาริมทรัพย์',
          title: 'Canapaya Residences',
          desc: 'สร้างแพลตฟอร์ม PropTech ให้ Canapaya Residences ตั้งแต่เครื่องมือจัดการโครงการฝั่งทีมงาน ไปจนถึงประสบการณ์ออนไลน์ฝั่งลูกค้า ให้ลูกค้าใช้งานต่อเนื่องไม่สะดุด',
          img: '/images/work/ai-new-2.jpg',
        },
        {
          tag: 'ค้าปลีก · Enterprise',
          title: 'MBK Retail Platform',
          desc: 'พัฒนาระบบ POS และแพลตฟอร์มค้าปลีกให้ MBK ใช้ได้หลายสาขาพร้อมกัน ทีมดูข้อมูลสต๊อกกับยอดขายแบบเรียลไทม์ได้จากทุกสาขาในที่เดียว',
          img: '/images/work/ent-2.jpg',
        },
      ],
    },
    // ── PORTFOLIO GALLERY ──
    portfolioGallery: {
      h2: 'ผลงานอื่นๆ ของเรา',
      viewAll: 'ดูผลงานทั้งหมด',
      items: [
        { tag: 'อาหาร · ไทย', title: 'dsk Growth Roadmap', img: '/images/work/project-2.jpg' },
        { tag: 'Brand · โรงแรม', title: 'Shanghai Mansion Brand', img: '/images/work/design-1.jpg' },
        { tag: 'eService · ภาครัฐ', title: 'IMMIGRATION eServices', img: '/images/work/ai-2.jpg' },
        { tag: 'ท่องเที่ยว · Travel', title: 'World Surprise Travel', img: '/images/work/ai-new-4.jpg' },
        { tag: 'E-Commerce · Fashion', title: 'VERA E-Commerce', img: '/images/work/ent-4.jpg' },
        { tag: 'Consulting · Fitness', title: 'BASE Training Platform', img: '/images/work/sup-2.jpg' },
      ],
    },
    // ── LATEST THINKING ──
    latestThinking: {
      h2: 'บทความล่าสุด',
      subtitle: 'มุมมองและแนวคิดจากทีมของเรา',
      readArticle: 'อ่านบทความ',
      readMore: 'ดูทั้งหมด',
      items: [
        {
          slug: 'ai-product-2025',
          img: '/images/blog/post-1.jpg',
          title: 'คู่มือสร้างผลิตภัณฑ์ AI ในปี 2025 ที่ใช้งานได้จริง',
          excerpt: 'สร้างผลิตภัณฑ์ AI ไม่ได้ยากอย่างที่คิด ถ้าเริ่มจากโจทย์ที่ชัดเจน',
        },
        {
          slug: 'ux-research',
          img: '/images/blog/post-2.jpg',
          title: 'เปรียบเทียบวิธีวิจัยผู้ใช้งาน 8 วิธี ควรใช้เมื่อไหร่',
          excerpt: 'สัมภาษณ์ สำรวจ หรือทดสอบการใช้งาน แต่ละวิธีมีจุดแข็งต่างกัน',
        },
        {
          slug: 'nextjs-perf',
          img: '/images/blog/post-3.jpg',
          title: 'Next.js Performance จาก PageSpeed 45 ขึ้น 98 ใน 3 สัปดาห์',
          excerpt: 'ปรับรูปภาพ แยกโค้ด และใช้ Edge Caching ที่ได้ผลจริงในระบบที่ใช้งานอยู่',
        },
        {
          slug: 'dx-mistakes',
          img: '/images/blog/post-4.jpg',
          title: '7 ข้อผิดพลาดที่ทำให้ Digital Transformation ล้มเหลว',
          excerpt: '70% ของโครงการ DX ไม่ถึงเป้า และส่วนใหญ่สาเหตุไม่ใช่เรื่องเทคโนโลยี',
        },
        {
          slug: 'banking-case',
          img: '/images/blog/post-5.jpg',
          title: 'Case Study: แอปธนาคารทำให้ DAU เพิ่ม 62% ได้อย่างไร',
          excerpt: 'เบื้องหลังการออกแบบ Mobile Banking ใหม่ ที่มีผู้ใช้ 4 ล้านคน',
        },
      ],
    },
    // ── FAQ ──
    faq: {
      h2: 'คำถามที่พบบ่อย',
      subtitle: 'คำตอบสั้นๆ ก่อนที่คุณจะถาม',
      items: [
        {
          q: 'Haliviq ทำอะไรบ้าง?',
          a: 'Haliviq เป็นสตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ เราช่วยดูตั้งแต่วางกลยุทธ์ ออกแบบ UX/UI พัฒนาเว็บและแอป ไปจนถึงงาน AI และระบบหลังบ้านขององค์กร ถ้าคุณมีแค่ไอเดีย เราช่วยทำให้เป็นผลิตภัณฑ์ที่ใช้งานได้จริง ถ้ามีระบบอยู่แล้ว เราช่วยปรับให้ดีขึ้นและขยายต่อได้',
        },
        {
          q: 'Haliviq เคยทำงานร่วมกับบริษัทไหนบ้าง?',
          a: 'เราเคยทำงานกับแบรนด์และองค์กรหลายอุตสาหกรรมทั่วเอเชีย ตั้งแต่ Startup ที่ได้รับเงินทุนไปจนถึงองค์กรขนาดใหญ่ ทั้งอสังหาริมทรัพย์ ค้าปลีก ท่องเที่ยว และหน่วยงานภาครัฐ ดูตัวอย่างผลงานได้ที่หน้า Work',
        },
        {
          q: 'Haliviq ตั้งอยู่ที่ไหน?',
          a: 'สำนักงานหลักอยู่ที่กรุงเทพฯ ประเทศไทย ที่อาคาร Spaces ถนนพญาไท (เขตราชเทวี) และมีที่อยู่สำนักงานในสหรัฐอเมริกาด้วย เราทำงานกับลูกค้าทั่วเอเชียและทั่วโลกได้แบบทางไกล คุยได้ทั้งทางโทรศัพท์ LINE WhatsApp และอีเมล',
        },
        {
          q: 'Haliviq ใช้เทคโนโลยีอะไรบ้าง?',
          a: 'ฝั่งหน้าบ้านเราใช้ React, Next.js, React Native และ Flutter ฝั่งระบบหลังบ้านและ Cloud ใช้ AWS, GCP หรือ Azure ตามที่เหมาะกับงาน ส่วนงาน AI ใช้เครื่องมืออย่าง OpenAI, LangChain และ RAG Pipeline เราเลือกเทคโนโลยีจากสิ่งที่ทีมของคุณดูแลต่อได้ ไม่ได้เลือกเพราะกำลังฮิต',
        },
        {
          q: 'โปรเจกต์ใช้เวลานานแค่ไหน และราคาขึ้นอยู่กับอะไร?',
          a: 'โดยทั่วไปช่วงค้นหาและกำหนดทิศทางใช้ประมาณ 1–2 สัปดาห์ ออกแบบและทำ Prototype ประมาณ 2–4 สัปดาห์ และช่วงพัฒนาประมาณ 8–24 สัปดาห์ แล้วเราดูแลต่อเนื่องหลังเปิดตัว ส่วนราคาขึ้นอยู่กับขอบเขตงาน เช่น จำนวนหน้าจอและฟีเจอร์ ระบบที่ต้องเชื่อมต่อ ข้อมูลที่ต้องย้าย และความเร่งด่วน หลังคุยกันแล้วเราจะประเมินให้เป็นรายโปรเจกต์',
        },
        {
          q: 'เริ่มต้นโปรเจกต์กับ Haliviq ได้อย่างไร?',
          a: 'กดปุ่ม "เริ่มโปรเจกต์" เพื่อนัดคุยกับทีมเราได้ฟรี ครั้งแรกเราจะฟังก่อนว่าคุณอยากแก้ปัญหาอะไร ช่วยประเมินขอบเขตงาน และแนะนำแนวทางที่เหมาะกับธุรกิจของคุณ เราตอบกลับภายใน 24 ชั่วโมง และถ้าคุณต้องการ เราลงนาม NDA ให้ก่อนได้',
        },
      ],
    },
    // ── SERVICES ──
    services: {
      label: 'สิ่งที่เราทำ', h2a: 'บริการดิจิทัล', h2b: 'ครบในที่เดียว',
      sub: 'ตั้งแต่กลยุทธ์ ดีไซน์ พัฒนาซอฟต์แวร์ AI ระบบองค์กร ไปจนถึงงานดูแลหลังเปิดใช้ ทุกอย่างทำในทีมเดียว คุณไม่ต้องคอยประสานงานกับหลายเจ้า',
      more: 'ดูเพิ่มเติม', seeAll: 'ดูบริการทั้งหมด',
      platform: 'Tools We Use', platformSub: 'เครื่องมือที่เราใช้จริงในทุกโปรเจกต์',
      groups: [
        { heading: 'กลยุทธ์', items: [
          { title: 'วางกลยุทธ์ดิจิทัล', desc: 'เราค้นคว้าเชิงลึก วิเคราะห์ตลาดและคู่แข่ง แล้วช่วยกำหนดทิศทางผลิตภัณฑ์ ก่อนลงมือออกแบบหรือเขียนโค้ด คุณจะได้แผนที่มีข้อมูลรองรับ' },
          { title: 'กลยุทธ์การเติบโต', desc: 'ช่วยวางแผนการเติบโตระยะยาว โดยดูตั้งแต่ลูกค้าเข้ามา ซื้อ ไปจนถึงกลับมาซื้อซ้ำ และใช้ข้อมูลเป็นตัวนำ' },
          { title: 'วิจัยผู้ใช้งาน', desc: 'เราคุยและสังเกตผู้ใช้จริง เพื่อให้รู้ว่าเขาทำอะไร ติดตรงไหน และต้องการอะไร แล้วเอามาใช้ตัดสินใจแทนการเดา' },
          { title: 'ข้อมูลและการวิเคราะห์', desc: 'วางระบบ Analytics ติดตาม KPI และสรุปข้อมูลให้เป็นข้อสรุปที่ทีมนำไปใช้ต่อได้เลย' },
        ]},
        { heading: 'ดีไซน์', items: [
          { title: 'ออกแบบ UX / UI', desc: 'ตั้งแต่ระบบดีไซน์ที่ต่อยอดได้ ไปจนถึงหน้าจอที่ละเอียดครบทุกสถานะ ให้ผู้ใช้ทำสิ่งที่ต้องการได้ง่ายและดูน่าเชื่อถือ' },
          { title: 'ทำ Prototype อย่างรวดเร็ว', desc: 'ทำต้นแบบให้ลองกดใช้จริง แล้วเอาไปทดสอบกับผู้ใช้ก่อนพัฒนา ช่วยลดความเสี่ยงและประหยัดงบ' },
          { title: 'ออกแบบ Brand Experience', desc: 'สร้างอัตลักษณ์แบรนด์ให้ชัดและเป็นหนึ่งเดียวกันในทุกจุดที่ลูกค้าพบ ทั้งเว็บไซต์ แอป และสื่อต่างๆ' },
          { title: 'Motion & Animation', desc: 'ใส่ Micro-interaction ที่มีความหมาย ให้ผู้ใช้เข้าใจว่าเกิดอะไรขึ้นบนหน้าจอ และรู้สึกว่าใช้งานลื่น' },
        ]},
        { heading: 'พัฒนาซอฟต์แวร์', items: [
          { title: 'พัฒนาเว็บและแอปมือถือ', desc: 'ทำเว็บไซต์ เว็บแอป และแอปมือถือทั้ง iOS และ Android ด้วยเทคโนโลยีที่ทีมคุณดูแลต่อได้' },
          { title: 'Backend, API & Cloud', desc: 'ระบบหลังบ้านที่มั่นคง ปลอดภัย รองรับผู้ใช้จำนวนมาก พร้อมโครงสร้างพื้นฐานบน Cloud' },
          { title: 'Database & Architecture', desc: 'ออกแบบฐานข้อมูลและโครงสร้างระบบให้รองรับการเติบโตในระยะยาว ไม่ต้องรื้อใหม่เมื่อธุรกิจโตขึ้น' },
          { title: 'QA & Security Testing', desc: 'ทดสอบรอบด้าน ทั้งการทำงานของฟีเจอร์ ความเร็ว และความปลอดภัย ก่อนระบบถึงมือผู้ใช้' },
        ]},
        { heading: 'AI & นวัตกรรม', items: [
          { title: 'พัฒนาผลิตภัณฑ์ AI', desc: 'ใช้ AI และ Machine Learning ในผลิตภัณฑ์ตรงจุดที่ช่วยได้จริง เพื่อให้ธุรกิจคุณมีข้อได้เปรียบในการแข่งขัน' },
          { title: 'ระบบอัตโนมัติ', desc: 'ให้ระบบทำงานซ้ำๆ แทนคน ลดต้นทุนและความผิดพลาด และทำให้ทีมใช้เวลากับงานที่สำคัญกว่า' },
          { title: 'AI Chatbot & Assistant', desc: 'Chatbot ที่เข้าใจภาษาพูด ดูแลลูกค้าได้ตลอด 24 ชั่วโมง และส่งต่อให้ทีมงานเมื่อเรื่องซับซ้อน' },
          { title: 'Data Intelligence', desc: 'วิเคราะห์ข้อมูลขนาดใหญ่ สร้าง Dashboard อัตโนมัติ ให้ตัดสินใจได้แม่นยำขึ้น' },
        ]},
        { heading: 'ระบบองค์กร', items: [
          { title: 'ระบบ ERP', desc: 'วางระบบบริหารจัดการองค์กรตั้งแต่ต้นจนจบ ลดขั้นตอนซ้ำซ้อนและช่วยให้ทีมทำงานได้เร็วขึ้น' },
          { title: 'ระบบ CRM', desc: 'ดูแลความสัมพันธ์กับลูกค้าอย่างเป็นระบบ ติดตาม Lead ทุกราย และช่วยให้ทีมขายปิดการขายได้มากขึ้น' },
          { title: 'ระบบ POS & E-Commerce', desc: 'เชื่อมหน้าร้านกับออนไลน์ให้ขายได้ทุกช่องทาง พร้อม Payment Gateway' },
          { title: 'ระบบเอกสารและ Workflow', desc: 'เปลี่ยนขั้นตอนอนุมัติและการจัดการเอกสารเป็นดิจิทัล ลดกระดาษ และตรวจสอบย้อนหลังได้ชัดเจน' },
        ]},
        { heading: 'ดูแลและซัพพอร์ต', items: [
          { title: 'บำรุงรักษาระบบ', desc: 'ดูแลระบบต่อเนื่องหลังเปิดใช้งาน แก้ปัญหาไว และอัปเดตให้สม่ำเสมอ' },
          { title: 'อัปเกรดและ Migration', desc: 'ปรับปรุงระบบเก่าให้ทันสมัย หรือย้ายไปแพลตฟอร์มใหม่อย่างปลอดภัย โดยพยายามไม่ให้งานของคุณสะดุด' },
          { title: 'Technical Consulting', desc: 'เป็นที่ปรึกษาด้านเทคโนโลยี ช่วยเลือกเทคโนโลยีที่เหมาะกับงานและวาง Roadmap' },
          { title: 'ฝึกอบรมทีม', desc: 'อบรมทีมของคุณให้ใช้ระบบและเทคโนโลยีใหม่ได้คล่อง และดูแลต่อได้เอง' },
        ]},
      ],
    },
    // ── WORK ──
    work: {
      label: 'ผลงานที่คัดมา', h2a: 'ผลงานที่เรา', h2b: 'ภูมิใจ',
      seeAll: 'ดูทุก Case Study',
    },
    // ── PROCESS ──
    process: {
      label: 'วิธีทำงานของเรา', h2a: 'ขั้นตอนที่วางไว้', h2b: 'เพื่อให้ได้ผลจริง',
      steps: [
        { no:'01', title:'ค้นหาและกำหนดทิศทาง', desc:'เราเริ่มจากทำความเข้าใจธุรกิจ ผู้ใช้งาน และตลาดให้ลึกพอ ผ่าน Workshop การวิจัย และการวางกลยุทธ์ จบช่วงนี้คุณจะได้ขอบเขตงานและลำดับความสำคัญที่ตกลงร่วมกันแล้ว', time:'1–2 สัปดาห์' },
        { no:'02', title:'ออกแบบและทำ Prototype', desc:'ตั้งแต่ Wireframe จนถึง Prototype ที่ละเอียดสูง คุณลองกดใช้ได้เหมือนของจริง และเรานำไปทดสอบกับผู้ใช้จริงก่อนเริ่มพัฒนา เพื่อแก้ตั้งแต่ตอนที่ยังไม่แพง', time:'2–4 สัปดาห์' },
        { no:'03', title:'พัฒนาและปรับปรุง', desc:'เราทำงานเป็น Sprint แบบ Agile และโชว์งานให้ดูทุกสัปดาห์ คุณเห็นความคืบหน้าและปรับทิศทางได้ตลอด โค้ดที่ได้สะอาดและต่อยอดได้ง่าย', time:'8–24 สัปดาห์' },
        { no:'04', title:'เปิดตัวและเติบโต', desc:'เราช่วยดูการเปิดใช้งานให้ราบรื่น ติดตามประสิทธิภาพหลังเปิดตัว และพัฒนาต่อเนื่องตามข้อมูลการใช้งานจริง', time:'ต่อเนื่อง' },
      ],
    },
    // ── ABOUT ──
    about: {
      label: 'เกี่ยวกับ Haliviq', h2a: 'ความคิดของคน', h2b: 'สู่อนาคตที่ฉลาดขึ้น',
      p1: 'Haliviq เป็นสตูดิโอดีไซน์และ AI ในกรุงเทพฯ เราเริ่มจากความคิดของคนก่อนเสมอ คือดูว่าคนใช้งานคิดอย่างไร ตัดสินใจอย่างไร และติดตรงไหน แล้วค่อยเลือกเทคโนโลยีที่ช่วยให้ไอเดียของเขาไปได้ไกลขึ้น ไม่ใช่เอาเทคโนโลยีมาตั้งแล้วให้คนปรับตัวตาม',
      p2: 'เรามีทีมกว่า 40 คน ทั้งนักกลยุทธ์ ดีไซเนอร์ และวิศวกร งานของเราคือ UX/UI ที่คนใช้แล้วเข้าใจง่าย กับ AI ที่ช่วยงานจริง ตั้งแต่ค้นหาข้อมูล สรุปเอกสาร ไปจนถึงตอบลูกค้า ทุกโปรเจกต์คุณจะได้คุยกับคนที่ลงมือทำงานเอง และรู้ตลอดว่างานไปถึงไหนแล้ว',
      stats: ['โปรเจกต์', 'ประสบการณ์', 'ลูกค้ากลับมา'],
      pillars: [
        { title: 'เริ่มจากคน', desc: 'เราถามก่อนว่าคนใช้งานคิดและทำงานกันอย่างไร แล้วค่อยเลือกวิธีแก้ ทุกโปรเจกต์เลยเริ่มจากการคุยกับผู้ใช้และทีมของคุณ ไม่ใช่เริ่มจากเทคโนโลยีที่กำลังฮิต' },
        { title: 'วิศวกรรมที่นำด้วยดีไซน์', desc: 'ดีไซเนอร์กับวิศวกรทำงานเป็นทีมเดียวกัน ไม่ต้องส่งต่องานข้ามทีม รายละเอียดที่ออกแบบไว้เลยไม่หายระหว่างทาง' },
        { title: 'AI ที่มีเหตุผล', desc: 'เราใช้ AI ตรงที่มันช่วยประหยัดเวลาหรือช่วยให้ตัดสินใจได้ดีขึ้นจริง และออกแบบให้มีคนตรวจคำตอบเสมอ ถ้างานไหนแค่ฟอร์มดี ๆ หรือหน้าเว็บที่ออกแบบใหม่ก็พอ เราก็จะบอกตรง ๆ' },
        { title: 'พาร์ทเนอร์ที่แท้จริง', desc: 'เราไม่ได้มาแค่รับจ้างทำงาน แต่ทำตัวเป็นส่วนหนึ่งของทีมคุณ ร่วมรับผิดชอบผลลัพธ์และอยู่ช่วยกันต่อในระยะยาว' },
      ],
    },
    // ── CTA ──
    cta: {
      label: 'เริ่มวันนี้', h2: 'มาเปลี่ยนไอเดียของคุณ\nให้เป็นผลิตภัณฑ์จริง',
      sub: 'ไม่ว่าคุณจะเป็น Startup ที่มีไอเดียใหม่ หรือองค์กรที่อยากปรับสู่ดิจิทัล เล่าให้เราฟังได้เลยว่าอยากแก้ปัญหาอะไร เราจะช่วยดูว่าควรเริ่มจากตรงไหน',
      btn1: 'เริ่มโปรเจกต์', btn2: 'info@haliviq.com',
      trust: ['ปรึกษาครั้งแรกฟรี', 'ตอบกลับภายใน 24 ชั่วโมง', 'มี NDA ให้ลงนามได้'],
    },
    // ── CTA (simple / starry) ──
    ctaSimple: {
      h2: 'มีโปรเจกต์ในใจไหม?',
      sub: 'เล่าให้เราฟังหน่อยว่าคุณกำลังสร้างอะไรอยู่ จะเป็นแค่ไอเดียคร่าวๆ หรือมีรายละเอียดครบแล้วก็ได้',
      btn: 'เริ่มคุยกัน',
      email: 'info@haliviq.com',
    },
    // ── FOOTER ──
    footer: {
      desc: 'สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ เราออกแบบและพัฒนาซอฟต์แวร์ที่ช่วยให้ธุรกิจของคุณแข่งขันได้จริง ตั้งแต่เว็บไซต์ แอป ไปจนถึงระบบ AI',
      sections: {
        'บริการ': [
          {l:'หน้าหลัก',h:''},
          {l:'กลยุทธ์และที่ปรึกษา',h:'/services/digital-transformation'},
          {l:'สร้างแบรนด์ Branding',h:'/services/branding'},
          {l:'ออกแบบ UX / UI',h:'/services/ux-ui-design'},
          {l:'พัฒนาเว็บไซต์',h:'/services/web-development'},
          {l:'แอปมือถือ',h:'/services/mobile-apps'},
          {l:'ระบบ AI',h:'/services/ai'},
        ],
        'บริษัท': [
          {l:'เกี่ยวกับเรา',h:'/about'},
          {l:'ผลงาน',h:'/work'},
          {l:'ร่วมงานกับเรา',h:'/careers'},
          {l:'บทความ',h:'/blog'},
          {l:'พาร์ทเนอร์',h:'/partners'},
        ],
        'อุตสาหกรรม': [
          {l:'FinTech & ธนาคาร',h:'/industries/fintech'},
          {l:'สุขภาพ',h:'/industries/healthcare'},
          {l:'ค้าปลีก & อีคอมเมิร์ซ',h:'/industries/retail'},
          {l:'อสังหาริมทรัพย์',h:'/industries/real-estate'},
          {l:'การศึกษา',h:'/industries/education'},
        ],
      },
      rights: 'บริษัท Haliviq จำกัด สงวนลิขสิทธิ์',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'เงื่อนไขการใช้งาน',
      locations: 'ความคิดของคน สู่อนาคตที่ฉลาดขึ้น',
      legalName: 'บริษัท ฮาลิวิก จำกัด',
      addressLines: ['อาคาร Spaces ถนนพญาไท ชั้น 4 ห้อง 402', 'เขตราชเทวี กรุงเทพฯ 10400'],
      thailandLabel: 'ประเทศไทย',
      usaLabel: 'สหรัฐอเมริกา',
      usaAddressLines: ['315 East J. Street,', 'Shelton, WA 98584'],
      usaPhone: '+1 (206) 379-3643',
      phone: '+66 90 918 9009',
      whatsapp: '+66 90 914 9236',
      line: '@haliviq',
      website: 'www.haliviq.com',
      langLabel: 'ภาษา',
      salesLabel: 'ฝ่ายขาย', supportLabel: 'ซัพพอร์ต',
    },
  },

  en: {
    nav: {
      home: 'Home', services: 'Services', industries: 'Industries', work: 'Work', partners: 'Partners',
      careers: 'Careers', blog: 'Blog', contact: 'Contact', cta: 'Start a Project',
      servicesNotSure: 'Not sure where to start?', talkToUs: 'Talk to us →', insights: 'Insights',
      allIndustries: 'All Industries',
    },
    hero: {
      badge: 'Human Ideas. Intelligent Future.',
      h1a: 'We Build', h1b: 'Digital Products', h1c: 'That Matter.',
      sub: 'Strategy, design and engineering sit in one Bangkok team, so the people who shape your idea are still in the room when it ships. We have spent 8+ years building websites, apps, AI tools and internal systems for businesses and organizations across Thailand and Asia.',
      btn1: 'Start a Project', btn2: 'View Our Work',
      currentProject: 'Current Project', mobileApp: 'Mobile Banking\nApp Redesign',
      stats: ['Products Shipped', 'Industry Experience', 'Expert Team', 'Client Retention'],
      statsN: ['120+', '8 yrs', '40+', '95%'],
    },
    clients: { label: 'Trusted by leading brands and organizations across Asia' },
    // ── CORE SKILLS ──
    coreSkills: {
      h2: 'Core Skills',
      subtitle: 'Core disciplines. One integrated team.',
      desc: 'Every Haliviq project is built by our own people: engineers, AI specialists, data engineers and designers working as a single team. The same group follows your product from the first sketch to the day it serves a large audience, so what was decided in discovery is not lost when development starts. For you that means one team to talk to and far fewer gaps between hand-offs.',
      exploreLabel: 'Explore',
      categories: [
        {
          heading: 'Strategy',
          desc: 'Strategy at Haliviq starts with understanding how your business earns money and who your users are, before we recommend anything. We combine interviews, market and competitor research, analytics and growth planning into a product direction and roadmap your team can act on. You get a prioritised plan backed by evidence, not a list of guesses.',
          tags: ['Digital Strategy', 'Growth Strategy', 'User Research', 'Data & Analytics'],
        },
        {
          heading: 'Branding',
          desc: 'Our branding work starts by defining who your business is and how it differs from competitors, then turns that into one system: logo, colour, typography and tone of voice. It is delivered with usage guidelines so every channel, from the website to the sales deck, speaks as the same brand.',
          tags: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Tone of Voice', 'Brand Guidelines'],
        },
        {
          heading: 'Design',
          desc: 'Design at Haliviq means understanding the problem before opening Figma. We combine user research, experience design and interface design so a product is easy to use from day one, and we test every concept with real users before a line of code is written. You see how the product will look and behave before you commit to building it, and the result is organised into a design system your team can reuse.',
          tags: ['Experience (UX) Design', 'Interface (UI) Design', 'User Research', 'Rapid Prototyping', 'Design Systems', 'Design QA'],
        },
        {
          heading: 'Engineering',
          desc: 'We build web and mobile products that are ready for real users: native iOS and Android apps, React and Next.js frontends, and secure backend APIs that cope as your audience grows. Automated testing, CI/CD and cloud infrastructure go into every build from the start rather than being bolted on later. When we hand over, your own team can pick the code up and keep going.',
          tags: ['iOS & Android', 'Web Frontend', 'Backend & APIs', 'React / Next.js / Flutter', 'Cloud & DevOps', 'Automated Testing'],
        },
        {
          heading: 'AI & Innovation',
          desc: 'We use AI where it helps with a real task, not because it is the topic of the year. That covers multi-step agents, copilots that call your tools, RAG knowledge systems, predictive models and recommendation engines. We look after each stage: an AI readiness audit, data preparation, agent and model design, evaluation of answer quality, integration with the systems you already run, and monitoring after launch.',
          tags: ['AI Agents & Tool Use', 'RAG & Knowledge Systems', 'Generative AI & LLMs', 'Copilots & Assistants', 'Predictive Analytics', 'AI Audits, Evals & Strategy'],
        },
      ],
    },
    // ── WHAT WE DO ──
    whatWeDo: {
      h2: 'What We Do',
      items: [
        {
          heading: 'Web & Mobile Engineering',
          desc: 'Websites and mobile apps built with React, Next.js, React Native and Flutter, ready for real traffic and able to grow with your user base. We help from choosing the stack through coding and testing to going live. One team covers both front end and back end, including APIs, integrations with the tools you already use, payments and notifications. We write readable, tested code so others can take it over, and after launch we stay on to fix, improve and add features.',
        },
        {
          heading: 'AI Agents & Generative AI',
          desc: 'Multi-step agents, RAG pipelines that answer from your own documents, and LLM features that fit actual business tasks. We start by finding the jobs worth automating, then build and measure. Typical work includes chatbots that answer from your manuals and policies, internal knowledge search, document and email summarising, and agents wired into the tools your team already uses. We agree how success is measured before we start, test on your real data, and keep a person in the loop where mistakes are costly.',
        },
        {
          heading: 'Data Engineering & Analytics',
          desc: 'We pull data scattered across tools into one warehouse, keep it fresh with automated pipelines, and build dashboards your team can open and act on the same day. We help with data modelling, connecting sources such as sales, accounting, your website and ads, and checking quality so the numbers match everywhere. Leadership and teams look at one version of the truth instead of stitching spreadsheets together every week.',
        },
        {
          heading: 'Product Design',
          desc: 'We talk to real users, design the screens, then organise everything into a design system. Products feel clear from day one, and your team can add new pages without the look drifting. We start with user interviews and watching real usage, build wireframes and clickable prototypes before any code, and hand developers files they can use straight away. We also cover accessibility and how everything looks on phones and large screens.',
        },
        {
          heading: 'Cloud & Infrastructure',
          desc: 'Architecture and day-to-day care for systems on AWS, GCP and Azure, built for uptime, security and growth. That includes CI/CD and alerting so your team hears about a problem before customers do. We handle backups, access control, cloud cost control and an incident plan. We can move you from an old server to the cloud, or make an existing system steadier and cheaper to run without rebuilding it from scratch.',
        },
        {
          heading: 'Digital Transformation',
          desc: 'We take aging systems, Excel files and manual steps and connect them into one platform you can keep extending. We help decide what to change first, and move over gradually so daily operations keep running. We begin by talking to the people who use the systems to see where time is lost, then rank what is worth fixing first. That might be a customer system, a document approval flow or a single dashboard. We deliver in steps so results show early, and train your team before anything is switched over.',
        },
      ],
    },
    // ── FEATURED WORK ──
    featuredWork: {
      h2: 'Featured Work',
      viewProject: 'View Project',
      viewAll: 'View All Work',
      items: [
        {
          tag: 'Property · Strategy',
          title: 'ADMiRE Digital Strategy',
          desc: 'We built a digital strategy and growth roadmap for ADMiRE, starting with market and audience research and ending in a measurable digital marketing plan. It grew qualified leads and made the brand better known to the right buyers.',
          img: '/images/work/project-1.jpg',
        },
        {
          tag: 'Property · UX/UI',
          title: 'Sea Hills Riracha Website',
          desc: 'A premium website for Sea Hills Riracha, covering the brand experience that makes the site feel right for the project and an online booking system that lets visitors arrange a viewing of the development themselves.',
          img: '/images/work/design-3.jpg',
        },
        {
          tag: 'AI · Enterprise',
          title: 'ITAGC Platform',
          desc: 'An enterprise AI platform that plugs automated agents into the workflows teams already use, so nobody has to relearn their whole job. It cut repetitive work and helped people make more accurate decisions.',
          img: '/images/work/ai-4.jpg',
        },
        {
          tag: 'PropTech · Property',
          title: 'Canapaya Residences',
          desc: 'A PropTech platform for Canapaya Residences, from project management tools used by the sales team to the online experience customers see, built so customers can keep moving through it without hitting dead ends.',
          img: '/images/work/ai-new-2.jpg',
        },
        {
          tag: 'Retail · Enterprise',
          title: 'MBK Retail Platform',
          desc: 'A POS and retail platform for MBK that runs across multiple branches at once. Teams can see inventory and sales for every location in real time, in one place.',
          img: '/images/work/ent-2.jpg',
        },
      ],
    },
    // ── PORTFOLIO GALLERY ──
    portfolioGallery: {
      h2: 'More From Our Work',
      viewAll: 'View All Work',
      items: [
        { tag: 'F&B · Thailand', title: 'dsk Growth Roadmap', img: '/images/work/project-2.jpg' },
        { tag: 'Brand · Hotel', title: 'Shanghai Mansion Brand', img: '/images/work/design-1.jpg' },
        { tag: 'eService · Gov', title: 'IMMIGRATION eServices', img: '/images/work/ai-2.jpg' },
        { tag: 'Travel · Tourism', title: 'World Surprise Travel', img: '/images/work/ai-new-4.jpg' },
        { tag: 'E-Commerce · Fashion', title: 'VERA E-Commerce', img: '/images/work/ent-4.jpg' },
        { tag: 'Consulting · Fitness', title: 'BASE Training Platform', img: '/images/work/sup-2.jpg' },
      ],
    },
    // ── LATEST THINKING ──
    latestThinking: {
      h2: 'Latest Thinking',
      subtitle: 'Notes and opinions from the people who do the work.',
      readArticle: 'Read article',
      readMore: 'Read More',
      items: [
        {
          slug: 'ai-product-2025',
          img: '/images/blog/post-1.jpg',
          title: 'The 2025 Guide to Building AI Products That Actually Work',
          excerpt: 'AI product development is not as hard as you think if you start with a clear use case.',
        },
        {
          slug: 'ux-research',
          img: '/images/blog/post-2.jpg',
          title: 'Comparing 8 User Research Methods — When to Use Each',
          excerpt: 'Interviews, surveys, usability tests — each method has different strengths.',
        },
        {
          slug: 'nextjs-perf',
          img: '/images/blog/post-3.jpg',
          title: 'Next.js Performance: From PageSpeed 45 to 98 in 3 Weeks',
          excerpt: 'Image optimization, code splitting, edge caching that actually work in production.',
        },
        {
          slug: 'dx-mistakes',
          img: '/images/blog/post-4.jpg',
          title: '7 Mistakes That Make Digital Transformation Fail',
          excerpt: '70% of DX initiatives miss their targets. Most of the time it is not a technology problem.',
        },
        {
          slug: 'banking-case',
          img: '/images/blog/post-5.jpg',
          title: 'Case Study: How We Grew Banking App DAU by 62%',
          excerpt: 'The story behind a mobile banking redesign serving 4 million users.',
        },
      ],
    },
    // ── FAQ ──
    faq: {
      h2: 'FAQ',
      subtitle: 'The short answers, before you even ask.',
      items: [
        {
          q: 'What does Haliviq do?',
          a: 'Haliviq is a digital product studio in Bangkok. We handle strategy, UX/UI design, web and mobile development, AI, and the back-office systems companies run on. If you only have an idea, we help turn it into something people can use. If you already have a system, we help improve it and make it easier to grow.',
        },
        {
          q: 'Which companies has Haliviq worked with?',
          a: 'We have worked with brands and organizations across Asia, from funded startups to large enterprises, in property, retail, travel, food and beverage, and government services. See examples on the Work page.',
        },
        {
          q: 'Where is Haliviq located?',
          a: 'Our main office is in Bangkok, Thailand, at the Spaces Building on Phaya Thai Road in Ratchathewi district, and we also keep an office address in the USA. We work remotely with clients across Asia and around the world, and you can reach us by phone, LINE, WhatsApp or email.',
        },
        {
          q: 'What technologies does Haliviq use?',
          a: 'On the frontend we use React, Next.js, React Native and Flutter. Backend and cloud work runs on AWS, GCP or Azure, depending on what suits the project. For AI we work with tools such as OpenAI, LangChain and RAG pipelines. We choose technology your own team can maintain, not whatever happens to be fashionable.',
        },
        {
          q: 'How long does a project take, and what affects the price?',
          a: 'As a rule of thumb, discovery takes about 1–2 weeks, design and prototyping 2–4 weeks, and development 8–24 weeks, followed by ongoing support after launch. Price depends on scope: the number of screens and features, the systems we have to connect to, how much data has to be migrated, and how tight the deadline is. After we talk, we estimate each project individually.',
        },
        {
          q: 'How do I start a project with Haliviq?',
          a: 'Click "Start a Project" to book a free call with our team. On the first call we listen to the problem you want to solve, help scope the work, and suggest an approach that fits your business. We reply within 24 hours, and we can sign an NDA first if you would like.',
        },
      ],
    },
    services: {
      label: 'What We Do', h2a: 'Digital Services', h2b: 'In One Studio',
      sub: 'Strategy, design, engineering, AI, business systems and ongoing support, all handled by one team so you do not have to coordinate several vendors.',
      more: 'Explore', seeAll: 'See All Services',
      platform: 'Tools We Use', platformSub: 'The tools we use on every project',
      groups: [
        { heading: 'Strategy', items: [
          { title: 'Digital Strategy', desc: 'Research, market and competitor analysis, and a clear product direction before we design a single screen. You get a plan backed by data.' },
          { title: 'Growth Strategy', desc: 'Long-term growth planning that follows the whole funnel, from first visit to retention and lifetime value, with data guiding each decision.' },
          { title: 'User Research', desc: 'We talk to and observe real users to learn what they do, where they get stuck and what they need, then use that in place of guesswork.' },
          { title: 'Data & Analytics', desc: 'We set up analytics, define the KPIs worth tracking, and turn the numbers into findings your team can act on.' },
        ]},
        { heading: 'Design', items: [
          { title: 'UX / UI Design', desc: 'From a reusable design system to detailed screens covering every state, so people can finish their task easily and trust what they see.' },
          { title: 'Rapid Prototyping', desc: 'Clickable prototypes tested with real users before development starts, which lowers risk and saves budget.' },
          { title: 'Brand Experience', desc: 'A clear brand identity applied consistently across your website, app and every other place customers meet you.' },
          { title: 'Motion & Animation', desc: 'Small, purposeful micro-interactions that show users what just happened on screen and make the product feel smooth.' },
        ]},
        { heading: 'Engineering', items: [
          { title: 'Web & Mobile Apps', desc: 'Websites, web apps, and iOS and Android apps built on technology your own team can maintain.' },
          { title: 'Backend, API & Cloud', desc: 'Secure, dependable backend systems that handle a growing number of users, with the cloud infrastructure to run them.' },
          { title: 'Database & Architecture', desc: 'Database and system design planned for long-term growth, so you do not rebuild from scratch when the business gets bigger.' },
          { title: 'QA & Security Testing', desc: 'Testing for features, speed and security before the system reaches your users.' },
        ]},
        { heading: 'AI & Innovation', items: [
          { title: 'AI Product Development', desc: 'AI and machine learning built into your product exactly where they help, to give your business an edge over competitors.' },
          { title: 'Process Automation', desc: 'Let software handle the repetitive tasks, cutting cost and errors, and free your team to spend time on work that matters more.' },
          { title: 'AI Chatbot & Assistant', desc: 'Chatbots that understand natural language, look after customers around the clock, and hand over to your staff when a question gets complicated.' },
          { title: 'Data Intelligence', desc: 'Analysis of large datasets and automatically updated dashboards, so decisions rest on current numbers.' },
        ]},
        { heading: 'Enterprise Systems', items: [
          { title: 'ERP System', desc: 'Company-wide management systems that remove duplicated steps and help teams work faster, from planning through to rollout.' },
          { title: 'CRM System', desc: 'A structured way to look after customer relationships, follow every lead, and help your sales team close more deals.' },
          { title: 'POS & E-Commerce', desc: 'Connect physical stores with online sales so you can sell on every channel, including payment gateway integration.' },
          { title: 'Document & Workflow', desc: 'Move approvals and document handling online, use less paper, and keep a clear record of who approved what.' },
        ]},
        { heading: 'Support', items: [
          { title: 'System Maintenance', desc: 'Continuing care after launch: quick fixes when something breaks and regular updates to keep the system healthy.' },
          { title: 'Upgrade & Migration', desc: 'Bring an old system up to date, or move to a new platform safely, while keeping your day-to-day work running.' },
          { title: 'Technical Consulting', desc: 'Independent technical advice to help you choose the right stack for the job and plan a roadmap.' },
          { title: 'Team Training', desc: 'Training so your team can use new systems and technology confidently and look after them on their own.' },
        ]},
      ],
    },
    work: {
      label: 'Selected Work', h2a: 'Products We\'re', h2b: 'Proud Of',
      seeAll: 'View All Case Studies',
    },
    process: {
      label: 'How We Work', h2a: 'A Process Built for', h2b: 'Real Results',
      steps: [
        { no:'01', title:'Discover & Define', desc:'We learn your business, your users and your market through workshops, research and strategy. By the end you have an agreed scope and a clear order of priorities.', time:'1–2 weeks' },
        { no:'02', title:'Design & Prototype', desc:'From wireframes to detailed prototypes you can click through like the real thing. We test them with real users before building, while changes are still cheap.', time:'2–4 weeks' },
        { no:'03', title:'Build & Iterate', desc:'We work in agile sprints and show working software every week, so you can see progress and steer as we go. The code we write is clean and easy to extend.', time:'8–24 weeks' },
        { no:'04', title:'Launch & Grow', desc:'We help the launch go smoothly, watch performance once real people are using the product, and keep improving it based on what the usage data shows.', time:'Ongoing' },
      ],
    },
    about: {
      label: 'About Haliviq', h2a: 'Human Ideas.', h2b: 'Intelligent Future.',
      p1: 'Haliviq is a design and AI studio in Bangkok. We start with people: how your users think, how they decide, and where they get stuck. Only then do we pick the technology that helps their ideas go further, instead of asking people to bend around whatever tool is fashionable.',
      p2: 'Our team of 40+ strategists, designers and engineers focuses on two things: UX/UI that people understand at first glance, and AI that does real work, from finding information and summarizing documents to answering customers. On every project you talk to the people doing the work and always know where things stand.',
      stats: ['Projects', 'Experience', 'Retention'],
      pillars: [
        { title: 'Start With People', desc: 'We ask how your users think and work before we decide what to build. Every project begins with conversations with your users and your team, not with whatever technology happens to be trending.' },
        { title: 'Design-Led Engineering', desc: 'Designers and engineers work as one team, with no hand-offs between departments, so the details that were designed are the details that ship.' },
        { title: 'AI With a Purpose', desc: 'We use AI where it saves real time or sharpens a decision, and we design it so a person can always check the answer. When a well-made form or a redesigned page does the job, we will tell you so.' },
        { title: 'True Partnership', desc: 'We are not here just to take a brief and invoice. We act as part of your team, share responsibility for the result, and stay on to help over the long term.' },
      ],
    },
    cta: {
      label: 'Start Today', h2: 'Let\'s turn your idea\ninto a real product.',
      sub: 'Whether you are a startup with a new idea or an established organization going digital, tell us what problem you want to solve. We will help work out where to begin.',
      btn1: 'Start a Project', btn2: 'info@haliviq.com',
      trust: ['Free first consultation', 'Response within 24 hours', 'NDA available on request'],
    },
    // ── CTA (simple / starry) ──
    ctaSimple: {
      h2: 'Have a project in mind?',
      sub: 'Tell us what you are building. A rough idea is fine, and so is a full brief.',
      btn: 'Start a Conversation',
      email: 'info@haliviq.com',
    },
    footer: {
      desc: 'A digital product studio in Bangkok. We design and build software, from websites and apps to AI systems, that helps your business compete.',
      sections: {
        'Services': [
          {l:'Home',h:''},
          {l:'Strategy & Consulting',h:'/services/digital-transformation'},
          {l:'Branding',h:'/services/branding'},
          {l:'UX / UI Design',h:'/services/ux-ui-design'},
          {l:'Web Development',h:'/services/web-development'},
          {l:'Mobile Apps',h:'/services/mobile-apps'},
          {l:'AI Solutions',h:'/services/ai'},
        ],
        'Company': [
          {l:'About Us',h:'/about'},
          {l:'Our Work',h:'/work'},
          {l:'Careers',h:'/careers'},
          {l:'Blog',h:'/blog'},
          {l:'Partners',h:'/partners'},
        ],
        'Industries': [
          {l:'FinTech & Banking',h:'/industries/fintech'},
          {l:'Healthcare',h:'/industries/healthcare'},
          {l:'Retail & E-Commerce',h:'/industries/retail'},
          {l:'Real Estate',h:'/industries/real-estate'},
          {l:'Education',h:'/industries/education'},
        ],
      },
      rights: 'Haliviq Co., Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      locations: 'Human Ideas. Intelligent Future.',
      legalName: 'Haliviq Co., Ltd.',
      addressLines: ['Spaces Building, Phaya Thai Rd,', '4th Floor, Room 402, Ratchathewi, Bangkok 10400'],
      thailandLabel: 'Thailand',
      usaLabel: 'USA',
      usaAddressLines: ['315 East J. Street,', 'Shelton, WA 98584'],
      usaPhone: '+1 (206) 379-3643',
      phone: '+66 90 918 9009',
      whatsapp: '+66 90 914 9236',
      line: '@haliviq',
      website: 'www.haliviq.com',
      langLabel: 'Language',
      salesLabel: 'Sales', supportLabel: 'Support',
    },
  },
} as const

export type T = (typeof t)[Lang]
