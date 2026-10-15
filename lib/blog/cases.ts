import type { Article } from '@/lib/blog-types'

export const caseArticles: Article[] = [
  // ---------------------------------------------------------------- Prima Marine
  {
    slug: 'case-prima-marine',
    cat: 'Case Study',
    date: '2026-10-06',
    readMin: 7,
    tags: ['corporate website', 'marine logistics', 'investor relations', 'UX/UI', 'CMS handover'],
    related: ['nextjs-perf', 'accessibility-wcag', 'why-design-system-matters'],
    caseSlug: 'prima-marine',
    th: {
      title: `กรณีศึกษา: เว็บไซต์องค์กร Prima Marine บริษัทมหาชนด้านขนส่งทางทะเล`,
      excerpt: `เล่าเบื้องหลังการทำเว็บไซต์องค์กรให้ Prima Marine ที่ต้องตอบทั้งลูกค้า พันธมิตร และนักลงทุน โดยไม่รก พร้อมบทเรียนที่ธุรกิจโลจิสติกส์นำไปใช้ต่อได้`,
      metaTitle: `กรณีศึกษา Prima Marine เว็บไซต์องค์กรขนส่งทางทะเล`,
      metaDescription: `เรื่องจริงของโปรเจกต์ออกแบบ UX/UI และพัฒนาเว็บไซต์องค์กรให้ Prima Marine บริษัทมหาชนขนส่งทางทะเล พร้อมบทเรียนสำหรับธุรกิจโลจิสติกส์ที่อยากทำเว็บองค์กร`,
      intro: `Prima Marine เป็นบริษัทมหาชนด้านขนส่งทางทะเล และเป็นหนึ่งในโปรเจกต์เว็บไซต์องค์กรของ Haliviq ในปี 2025 บทความนี้เล่าเป็นเรื่องราวว่าเราพบอะไร ตัดสินใจอะไร และส่งมอบอะไรไปบ้าง ส่วนท้ายเป็นบทเรียนทั่วไปที่ธุรกิจในอุตสาหกรรมเดียวกันนำไปใช้ได้ โดยแยกออกจากข้อเท็จจริงของโปรเจกต์ให้ชัดเจน`,
      sections: [
        {
          h: `สถานการณ์ตอนเริ่มต้น`,
          p: [
            `Prima Marine เป็นบริษัทมหาชนด้านขนส่งทางทะเล ต้องการเว็บไซต์ที่แสดงขนาดธุรกิจ ความปลอดภัย และความน่าเชื่อถือ คนที่จะเปิดเว็บนี้มีอย่างน้อยสามกลุ่ม คือลูกค้า พันธมิตร และนักลงทุน`,
            `โจทย์ที่ยากคือแต่ละกลุ่มมองหาข้อมูลคนละแบบ เว็บจึงต้องตอบได้ทุกกลุ่มโดยไม่รก โปรเจกต์นี้ใช้เวลา 3 เดือน และเราดูแลสองส่วนหลัก คือออกแบบ UX/UI และพัฒนาเว็บไซต์`,
          ],
        },
        {
          h: `สิ่งที่เราสังเกตเห็น`,
          p: [
            `ข้อแรกคือผู้อ่านส่วนใหญ่เป็นคนทำงาน ที่เปิดเว็บมาเพื่อหาข้อมูลตรงประเด็น ไม่ได้มาอ่านเรื่องเล่ายาว ๆ เราจึงมองว่าเนื้อหาต้องเรียบง่ายและเป็นระเบียบมากกว่าต้องหวือหวา`,
            `ข้อที่สองคือความน่าเชื่อถือของบริษัทมหาชน ไม่ได้มาจากถ้อยคำสวยหรู แต่มาจากการจัดข้อมูลให้ครบ ชัด และหน้าตาที่เป็นแนวเดียวกันทุกหน้า`,
          ],
        },
        {
          h: `สิ่งที่เราตัดสินใจ และเหตุผล`,
          p: [
            `เราตัดสินใจทำเว็บไซต์องค์กรที่ดูมืออาชีพ แสดงบริการและการดำเนินงานอย่างเป็นระเบียบ มีช่องทางสอบถามสำหรับลูกค้าที่หาง่าย และมีส่วนข้อมูลบริษัทสำหรับพันธมิตรและนักลงทุนแยกไว้ให้ชัด เพื่อให้แต่ละกลุ่มเดินไปหาของที่ต้องการได้เอง`,
            `อีกเรื่องที่เราตั้งใจตั้งแต่ต้นคือให้ทีมงานของ Prima Marine ดูแลเนื้อหาต่อเองได้ เพราะข่าวสารและบริการใหม่เกิดขึ้นเรื่อย ๆ ถ้าทุกครั้งต้องรอนักพัฒนา เว็บก็จะค่อย ๆ ล้าสมัย`,
          ],
          quote: `เว็บไซต์องค์กรที่ดีไม่ได้พูดทุกอย่าง แต่พาแต่ละคนไปพบสิ่งที่เขาตามหาได้เร็วที่สุด`,
        },
        {
          h: `งานดำเนินไปอย่างไร`,
          p: [
            `เราเริ่มจากศึกษาธุรกิจ กลุ่มเป้าหมาย และเป้าหมายของบริษัท เพื่อกำหนดขอบเขตงานและวิธีวัดผลร่วมกับทีม จากนั้นจึงออกแบบ Wireframe และหน้าตาเว็บไซต์ ให้ชัดเจนและใช้ง่ายทุกหน้า ตั้งแต่ภาพรวมบริการจนถึงช่องทางติดต่อ`,
            `ขั้นพัฒนา เราทำเว็บที่เร็วและใช้ได้ทุกอุปกรณ์ แล้วทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ก่อนเปิดใช้งาน เมื่อส่งมอบ เราแนะนำทีมงานว่าอัปเดตเนื้อหาอย่างไร`,
          ],
          list: [
            `ศึกษาธุรกิจและกลุ่มเป้าหมาย พร้อมกำหนดวิธีวัดผล`,
            `ออกแบบ Wireframe และหน้าตาเว็บไซต์`,
            `พัฒนาเว็บไซต์ให้เร็วและรองรับทุกอุปกรณ์`,
            `ทดสอบข้ามอุปกรณ์และเบราว์เซอร์ แล้วส่งมอบพร้อมสอนอัปเดตเนื้อหา`,
          ],
        },
        {
          h: `สิ่งที่ส่งมอบ`,
          p: [
            `ผลลัพธ์คือเว็บไซต์องค์กรที่แสดงภาพรวมบริการขนส่งทางทะเล กองเรือและการดำเนินงานด้วยภาพที่แข็งแรง มีช่องทางสอบถามและติดต่อที่หาง่าย และมีข้อมูลบริษัทที่จัดไว้สำหรับพันธมิตรและนักลงทุน`,
            `เลย์เอาต์และงานภาพเป็นแนวเดียวกันทั้งเว็บ เหมาะกับบริษัทมหาชน ส่วนทีมงานอัปเดตเนื้อหาได้เอง และเพิ่มบริการหรือข่าวสารใหม่ได้โดยโครงสร้างไม่ต้องรื้อ`,
          ],
        },
        {
          h: `บทเรียนที่ธุรกิจขนส่งและโลจิสติกส์นำไปใช้ได้`,
          p: [
            `ส่วนนี้เป็นคำแนะนำทั่วไป ไม่ใช่ข้อเท็จจริงของโปรเจกต์ ถ้าธุรกิจของคุณมีผู้อ่านหลายกลุ่ม ให้ลองเขียนก่อนว่าแต่ละกลุ่มอยากรู้อะไรเป็นอย่างแรก แล้วจัดเมนูและหน้าแรกตามนั้น แทนที่จะจัดตามโครงสร้างองค์กรภายใน`,
            `และอย่าลืมถามตัวเองว่าใครจะอัปเดตเว็บในเดือนที่หกหลังเปิดตัว ถ้าคำตอบคือ ต้องรอนักพัฒนา ให้แก้ตั้งแต่ตอนออกแบบ`,
          ],
          list: [
            `เขียนคำถามแรกของแต่ละกลุ่มผู้อ่านก่อนออกแบบเมนู`,
            `ใช้ภาพจริงของเรือและการดำเนินงาน มากกว่าภาพสต็อกทั่วไป`,
            `แยกข้อมูลนักลงทุนและพันธมิตรให้หาพบโดยไม่ปนกับหน้าบริการ`,
            `ให้ทีมในองค์กรแก้ข่าวและบริการเองได้โดยไม่ต้องเขียนโค้ด`,
          ],
        },
      ],
      takeaways: [
        `เว็บองค์กรที่มีผู้อ่านหลายกลุ่ม ต้องจัดทางเดินข้อมูลให้แต่ละกลุ่มก่อนเลือกสีหรือฟอนต์`,
        `ความน่าเชื่อถือมาจากความเป็นระเบียบและความสม่ำเสมอของข้อมูลและภาพ`,
        `ผู้อ่านที่เป็นคนทำงานอยากได้ข้อมูลตรงประเด็น ไม่ใช่เนื้อหายาว`,
        `วางแผนเรื่องคนอัปเดตเนื้อหาตั้งแต่ก่อนเขียนโค้ดบรรทัดแรก`,
        `ทดสอบข้ามอุปกรณ์และเบราว์เซอร์ก่อนเปิดใช้งานทุกครั้ง`,
      ],
      figCaption: `ภาพประกอบ: เว็บไซต์องค์กรที่แยกทางเดินข้อมูลสำหรับลูกค้า พันธมิตร และนักลงทุน`,
      faq: [
        {
          q: `โปรเจกต์ Prima Marine ใช้เวลานานเท่าไร`,
          a: `ใช้เวลา 3 เดือน ครอบคลุมการออกแบบ UX/UI และการพัฒนาเว็บไซต์ รวมถึงการทดสอบและส่งมอบ`,
        },
        {
          q: `ทีมของลูกค้าอัปเดตเนื้อหาเองได้หรือไม่`,
          a: `ได้ เว็บไซต์ถูกสร้างให้ทีมงานอัปเดตข่าวสารและบริการใหม่ได้เอง และเราแนะนำวิธีอัปเดตตอนส่งมอบ`,
        },
        {
          q: `เว็บองค์กรของบริษัทมหาชนต่างจากเว็บบริษัททั่วไปอย่างไร`,
          a: `ผู้อ่านมีหลายกลุ่มมากขึ้น เช่นนักลงทุนและพันธมิตร จึงต้องจัดข้อมูลบริษัทให้หาง่ายและดูเป็นระเบียบกว่าเว็บที่มีผู้อ่านกลุ่มเดียว`,
        },
      ],
    },
    en: {
      title: `Case study: Prima Marine, a corporate website for a listed marine logistics company`,
      excerpt: `How we built a corporate website for Prima Marine that serves customers, partners and investors without clutter, plus lessons other logistics businesses can reuse.`,
      metaTitle: `Case study: Prima Marine corporate website`,
      metaDescription: `A story-style case study of the UX/UI design and corporate website we built for Prima Marine, a listed marine firm, plus lessons for logistics teams.`,
      intro: `Prima Marine is a publicly listed marine logistics company, and its corporate website was one of our 2025 projects. This article tells it as a story: what we found, what we decided and what we delivered. The last section holds general lessons for businesses in the same industry, kept apart from the project facts.`,
      sections: [
        {
          h: `The situation`,
          p: [
            `Prima Marine is a publicly listed marine logistics company that needed a website conveying scale, safety and reliability. At least three groups would visit it: customers, partners and investors.`,
            `The hard part was that each group looks for different information, so the site had to answer all of them without feeling cluttered. The project ran for 3 months, and we handled two things: UX/UI design and website development.`,
          ],
        },
        {
          h: `What we noticed`,
          p: [
            `First, most readers are working people who open the site to find information that is to the point. They are not there for long stories, so we treated simple, well-ordered content as more important than anything flashy.`,
            `Second, a listed company earns credibility less through polished wording and more through complete, clearly organised information and a visual language that stays the same on every page.`,
          ],
        },
        {
          h: `What we decided, and why`,
          p: [
            `We chose to build a professional corporate site that presents services and operations in an orderly way, makes enquiries easy for customers, and keeps a clearly separate section of company information for partners and investors. That way each group can walk to what it needs on its own.`,
            `We also decided early that Prima Marine's own team should be able to maintain the content. News and new services keep arriving, and if every change waits for a developer, a site slowly goes stale.`,
          ],
          quote: `A good corporate website does not say everything; it gets each visitor to what they came for as fast as possible.`,
        },
        {
          h: `How the work ran`,
          p: [
            `We began with discovery: the business, its audiences and its goals, so that scope and success criteria were set together with the team. Then we designed the structure, wireframes and visual interface so every page is clear and easy to use, from the services overview to the contact route.`,
            `In development we built a fast site that is responsive on every device, and tested it across devices and browsers before launch. At handover we showed the team how to update content.`,
          ],
          list: [
            `Discovery of business, audiences and success criteria`,
            `Wireframes and visual interface design`,
            `Fast, responsive development`,
            `Cross-device and cross-browser testing, then handover with content training`,
          ],
        },
        {
          h: `What we delivered`,
          p: [
            `The result is a corporate website with a clear overview of the marine logistics services, the fleet and operations shown with strong imagery, and easy paths to enquire or contact the team. Company information is organised for partners and investors.`,
            `The layout and imagery are consistent across the site and suit a listed company. The team can update content independently and add new services or news without restructuring the site.`,
          ],
        },
        {
          h: `Lessons for logistics and marine businesses`,
          p: [
            `This section is general advice, not project fact. If your business has several audiences, write down what each one wants to know first, and shape the menu and home page around those answers rather than around your internal org chart.`,
            `Also ask who will update the site six months after launch. If the answer is that someone has to wait for a developer, fix that during design, not afterwards.`,
          ],
          list: [
            `Write each audience's first question before designing navigation`,
            `Prefer real photos of vessels and operations over generic stock images`,
            `Keep investor and partner information easy to find but separate from service pages`,
            `Let your own team edit news and services without writing code`,
          ],
        },
      ],
      takeaways: [
        `A site with several audiences needs an information path per audience before any colour or font choice`,
        `Credibility comes from order and consistency in both information and imagery`,
        `Working readers want content to the point, not long copy`,
        `Plan who maintains the content before the first line of code`,
        `Test across devices and browsers before every launch`,
      ],
      figCaption: `Illustration: a corporate site with separate information paths for customers, partners and investors`,
      faq: [
        {
          q: `How long did the Prima Marine project take?`,
          a: `It took 3 months, covering UX/UI design and website development, including testing and handover.`,
        },
        {
          q: `Can the client's team update the content themselves?`,
          a: `Yes. The site was built so the team can update news and new services on its own, and we showed them how at handover.`,
        },
        {
          q: `How does a listed company's website differ from an ordinary company site?`,
          a: `It has more audiences, such as investors and partners, so company information needs to be easier to find and more orderly than on a site with a single audience.`,
        },
      ],
    },
  },

  // ---------------------------------------------------------------- Baan Khanitha
  {
    slug: 'case-baan-khanitha',
    cat: 'Case Study',
    date: '2026-09-22',
    readMin: 7,
    tags: ['restaurant website', 'Thai cuisine', 'mobile first', 'local SEO', 'UX/UI'],
    related: ['thai-typography', 'nextjs-perf', 'ux-research'],
    caseSlug: 'baan-khanitha',
    th: {
      title: `กรณีศึกษา: เว็บไซต์ Baan Khanitha Thai Cuisine ร้านอาหารไทยชื่อดัง`,
      excerpt: `เรื่องราวการออกแบบเว็บไซต์ให้ร้านอาหารไทยที่ขึ้นชื่อเรื่องบรรยากาศ ให้ดูเมนู หาสาขา และจองโต๊ะได้ง่ายบนมือถือ พร้อมบทเรียนสำหรับร้านอาหาร`,
      metaTitle: `กรณีศึกษา Baan Khanitha เว็บไซต์ร้านอาหารไทย`,
      metaDescription: `เรื่องจริงของการออกแบบ UX/UI และพัฒนาเว็บไซต์ให้ร้านอาหารไทย Baan Khanitha ให้ดูเมนู ดูสาขา และจองโต๊ะได้ง่าย พร้อมบทเรียนที่ร้านอาหารนำไปใช้ต่อได้`,
      intro: `Baan Khanitha Thai Cuisine เป็นร้านอาหารไทยชื่อดังที่ชื่อเสียงมาจากบรรยากาศและอาหาร เราได้ออกแบบ UX/UI และพัฒนาเว็บไซต์ให้ร้านในปี 2025 บทความนี้เล่าเรื่องการทำงานตามลำดับ ตั้งแต่สถานการณ์จนถึงสิ่งที่ส่งมอบ แล้วปิดด้วยบทเรียนทั่วไปสำหรับร้านอาหารที่แยกจากข้อเท็จจริงของโปรเจกต์`,
      sections: [
        {
          h: `สถานการณ์ตอนเริ่มต้น`,
          p: [
            `ร้านอาหารไทยชื่อดังแห่งนี้เป็นที่รู้จักเพราะบรรยากาศและตัวอาหาร เว็บไซต์จึงต้องสะท้อนประสบการณ์แบบนั้น และต้องให้คนดูเมนูกับหาทางไปร้านได้ง่ายด้วย`,
            `โปรเจกต์ใช้เวลา 2 เดือน เราดูแลการออกแบบ UX/UI และการพัฒนาเว็บไซต์`,
          ],
        },
        {
          h: `สิ่งที่เราสังเกตเห็น`,
          p: [
            `คนที่เปิดเว็บร้านอาหารส่วนใหญ่กำลังตัดสินใจว่าจะไปทานที่ไหน และมักเปิดจากมือถือ นั่นแปลว่าเมนู สาขา เวลาเปิด และการจอง ต้องอยู่ในที่ที่หาพบทันที`,
            `ขณะเดียวกัน ถ้าเว็บเป็นแค่หน้าข้อมูลร้านที่แห้ง ๆ ก็จะขัดกับสิ่งที่ร้านเป็น เราจึงตั้งเป้าให้ผู้เข้าชมรู้สึกเหมือนได้รับการต้อนรับ`,
          ],
        },
        {
          h: `สิ่งที่เราตัดสินใจ และเหตุผล`,
          p: [
            `เราออกแบบตามเอกลักษณ์ของร้านเอง โดยใช้ตัวอักษรประณีตและโทนสีอบอุ่นเล่าเรื่องอาหารและวัฒนธรรมไทย แต่จัดโครงสร้างให้เรียบง่าย เพราะเว็บที่สวยแต่หาเมนูไม่พบ ไม่ช่วยให้ใครตัดสินใจมาทาน`,
            `เรายังเลือกให้ทีมงานของร้านแก้เมนูและข้อมูลสาขาได้เอง เพราะเมนูกับสาขาเป็นข้อมูลที่เปลี่ยนบ่อยที่สุด และไม่ควรต้องรอใคร`,
          ],
          quote: `เว็บร้านอาหารที่ดีคือเว็บที่คนบนมือถือรู้สึกว่าได้รับการต้อนรับ แล้วพบเมนูภายในไม่กี่วินาที`,
        },
        {
          h: `งานดำเนินไปอย่างไร`,
          p: [
            `เราเริ่มด้วยการคุยกับทีมร้านว่าลูกค้ามาด้วยโอกาสแบบไหน และอยากให้เว็บตอบอะไรเป็นอย่างแรก แล้วกำหนดขอบเขตงานและวิธีวัดผล จากนั้นออกแบบ Wireframe และหน้าตาเว็บ ให้เมนู สาขา และการจองอยู่ในที่ที่หาพบทันที โดยยังคงบรรยากาศอบอุ่นของร้าน`,
            `ขั้นพัฒนา เราทำให้เว็บเร็วบนมือถือและใช้ได้ทุกอุปกรณ์ ก่อนเปิดใช้งานเราทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ และตรวจ SEO พื้นฐานสำหรับการค้นหาในพื้นที่`,
          ],
          list: [
            `คุยกับทีมร้านเรื่องโอกาสที่ลูกค้ามาและคำถามแรกที่เว็บต้องตอบ`,
            `ออกแบบ Wireframe และหน้าตาเว็บไซต์`,
            `พัฒนาให้เร็วบนมือถือและให้ทีมแก้ข้อมูลเองได้`,
            `ทดสอบข้ามอุปกรณ์ ตรวจ SEO พื้นฐาน แล้วเปิดใช้งาน`,
          ],
        },
        {
          h: `สิ่งที่ส่งมอบ`,
          p: [
            `เว็บไซต์ที่ภาพและเลย์เอาต์สะท้อนประสบการณ์การทานอาหาร ใช้ตัวอักษรประณีตและโทนสีอบอุ่น เล่าเรื่องอาหารและวัฒนธรรมไทย มีเมนูที่ดูชัดเจน`,
            `ผู้เข้าชมดูสาขา เวลา และช่องทางติดต่อได้ทันที และจองโต๊ะได้ง่าย เว็บเร็วบนมือถือ ทีมงานอัปเดตเนื้อหาได้ และมีการตั้งค่า SEO พื้นฐานสำหรับการค้นหาในพื้นที่`,
          ],
        },
        {
          h: `บทเรียนที่ร้านอาหารนำไปใช้ได้`,
          p: [
            `ส่วนนี้เป็นคำแนะนำทั่วไป ไม่ใช่ข้อเท็จจริงของโปรเจกต์ ลองเปิดเว็บร้านของตัวเองบนมือถือ แล้วจับเวลาว่าใช้กี่วินาทีกว่าจะพบเมนู เวลาเปิด และปุ่มจอง ถ้าต้องไล่หา แปลว่ายังปรับได้อีก`,
            `เรื่องบรรยากาศก็ทำได้โดยไม่ต้องใช้เอฟเฟกต์มาก ภาพที่เล่าเรื่องจริง ตัวอักษรที่อ่านสบาย และสีที่ใช้สม่ำเสมอ ก็พอให้เว็บมีเสน่ห์ได้`,
          ],
          list: [
            `ทดสอบเว็บบนมือถือจริงก่อนทุกอย่าง เพราะลูกค้าส่วนใหญ่เปิดจากเครื่องนั้น`,
            `วางเมนู สาขา เวลาเปิด และปุ่มจอง ไว้ในสายตาตั้งแต่หน้าแรก`,
            `ใช้ตัวอักษรไทยที่อ่านง่ายและโทนสีที่เข้ากับบรรยากาศร้าน`,
            `ให้ทีมแก้เมนูและข้อมูลสาขาเองได้ จะได้ไม่มีข้อมูลเก่าค้างบนเว็บ`,
          ],
        },
      ],
      takeaways: [
        `คนเปิดเว็บร้านอาหารมักกำลังตัดสินใจว่าจะไปทานที่ไหน และมักใช้มือถือ`,
        `เมนู สาขา เวลาเปิด และการจอง ต้องหาพบทันที`,
        `บรรยากาศแบรนด์สร้างได้จากภาพ ตัวอักษร และสี ไม่ต้องพึ่งเอฟเฟกต์`,
        `ข้อมูลที่เปลี่ยนบ่อยอย่างเมนูและสาขา ควรให้ทีมแก้เองได้`,
        `SEO พื้นฐานสำหรับการค้นหาในพื้นที่ช่วยให้คนใกล้ร้านพบเว็บง่ายขึ้น`,
      ],
      figCaption: `ภาพประกอบ: หน้าเว็บร้านอาหารที่วางเมนู สาขา และการจองไว้ในสายตาบนมือถือ`,
      faq: [
        {
          q: `โปรเจกต์เว็บไซต์ Baan Khanitha ใช้เวลานานเท่าไร`,
          a: `ใช้เวลา 2 เดือน ครอบคลุมออกแบบ UX/UI พัฒนาเว็บไซต์ ทดสอบ และเปิดใช้งาน`,
        },
        {
          q: `ทีมร้านแก้เมนูหรือข้อมูลสาขาเองได้ไหม`,
          a: `ได้ เว็บไซต์ถูกพัฒนาให้ทีมงานแก้เมนูและข้อมูลสาขาได้เองโดยไม่ต้องพึ่งนักพัฒนา`,
        },
        {
          q: `มีการทำ SEO ด้วยหรือเปล่า`,
          a: `มีการตั้งค่า SEO พื้นฐานและตรวจก่อนเปิดใช้งาน เพื่อให้คนในพื้นที่ค้นพบร้านได้ง่ายขึ้น`,
        },
      ],
    },
    en: {
      title: `Case study: Baan Khanitha Thai Cuisine, a website for a renowned Thai restaurant`,
      excerpt: `How we designed a website for a Thai restaurant known for its atmosphere, so guests can read the menu, find a branch and book a table on a phone, with lessons for restaurants.`,
      metaTitle: `Case study: Baan Khanitha restaurant website`,
      metaDescription: `A story-style case study of the UX/UI and website we built for Baan Khanitha Thai Cuisine: menu, locations and booking made easy, with lessons for restaurants.`,
      intro: `Baan Khanitha Thai Cuisine is a well-known Thai restaurant whose reputation rests on its atmosphere and its cooking. We designed the UX/UI and built its website in 2025. This article follows the work in order, from the situation to the delivery, and ends with general lessons for restaurants, kept apart from the project facts.`,
      sections: [
        {
          h: `The situation`,
          p: [
            `The restaurant is known for its atmosphere and its food, so the website had to reflect that experience while making it easy to see the menu and find the way there.`,
            `The project took 2 months, and we handled the UX/UI design and the website development.`,
          ],
        },
        {
          h: `What we noticed`,
          p: [
            `Most people opening a restaurant website are deciding where to eat, and many are on a phone. That means the menu, locations, opening hours and booking must be found at once.`,
            `At the same time, a dry page of facts would clash with what the restaurant is. So we aimed for a site that feels like being welcomed.`,
          ],
        },
        {
          h: `What we decided, and why`,
          p: [
            `We designed around the restaurant's own character, using refined typography and a warm palette to tell the story of the food and Thai culture, but kept the structure simple. A beautiful site where nobody can find the menu does not help anyone choose to come.`,
            `We also decided the restaurant's team should be able to edit menus and branch details themselves, since those change most often and should not wait on anyone.`,
          ],
          quote: `A good restaurant website makes a person on a phone feel welcomed and puts the menu in front of them within seconds.`,
        },
        {
          h: `How the work ran`,
          p: [
            `We started by talking with the restaurant team about the occasions guests visit for and what the site should answer first, then set the scope and the way success will be judged. Next we designed wireframes and the visual interface so the menu, locations and booking are found at once, while keeping the warm feeling of the restaurant.`,
            `In development we made the site quick on mobile and working on every device. Before launch we tested across devices and browsers and checked the SEO basics for local search.`,
          ],
          list: [
            `Talk with the team about visit occasions and the first question the site must answer`,
            `Design wireframes and the visual interface`,
            `Build for speed on mobile, with content the team can edit`,
            `Test across devices, check SEO basics, then launch`,
          ],
        },
        {
          h: `What we delivered`,
          p: [
            `The result is a website whose imagery and layout echo the dining experience, with refined typography, a warm palette, storytelling about the cuisine and heritage, and a clearly presented menu.`,
            `Visitors see location, hours and contact details at a glance and have an easy path to book a table. The site is fast on mobile, the team can update the content, and SEO foundations for local search are in place.`,
          ],
        },
        {
          h: `Lessons for restaurants`,
          p: [
            `This section is general advice, not project fact. Open your own restaurant site on a phone and time how long it takes to find the menu, the opening hours and the booking button. If you have to hunt, there is room to improve.`,
            `Atmosphere does not need heavy effects. Photos that tell something true, type that is comfortable to read and colours used consistently are enough to give a site character.`,
          ],
          list: [
            `Test on a real phone first, because that is where most guests look`,
            `Keep menu, branches, hours and booking visible from the home page`,
            `Choose Thai and Latin type that reads easily and a palette that fits the room`,
            `Let staff edit menus and branch details so old information never lingers`,
          ],
        },
      ],
      takeaways: [
        `People on a restaurant site are usually deciding where to eat, often on a phone`,
        `Menu, locations, hours and booking must be found immediately`,
        `Atmosphere comes from photos, type and colour, not from effects`,
        `Frequently changing details such as menus and branches should be editable by staff`,
        `Basic local SEO helps nearby diners find the site`,
      ],
      figCaption: `Illustration: a restaurant page that keeps menu, branches and booking within reach on a phone`,
      faq: [
        {
          q: `How long did the Baan Khanitha website take?`,
          a: `It took 2 months, covering UX/UI design, development, testing and launch.`,
        },
        {
          q: `Can the restaurant team change menus or branch details?`,
          a: `Yes. The site was built so the team can edit menus and branch information without relying on a developer.`,
        },
        {
          q: `Was SEO part of the project?`,
          a: `Basic SEO was set up and checked before launch, so people nearby can find the restaurant more easily.`,
        },
      ],
    },
  },

  // ---------------------------------------------------------------- DSK
  {
    slug: 'case-dsk-aesthetics',
    cat: 'Case Study',
    date: '2026-09-08',
    readMin: 8,
    tags: ['aesthetic clinic', 'AI CRM', 'customer journey', 'business consulting', 'website design'],
    related: ['ai-product-2025', 'thailand-pdpa-guide', 'dx-mistakes'],
    caseSlug: 'dsk',
    th: {
      title: `กรณีศึกษา: DSK เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจศัลยกรรมความงาม`,
      excerpt: `เรื่องราวโปรเจกต์ 4 เดือนที่เริ่มจากให้คำปรึกษาธุรกิจ ก่อนออกแบบเว็บไซต์และทำ CRM ที่มี AI ช่วยติดตามลูกค้า พร้อมบทเรียนสำหรับคลินิกความงาม`,
      metaTitle: `กรณีศึกษา DSK เว็บไซต์และ AI CRM ธุรกิจความงาม`,
      metaDescription: `เรื่องจริงของ DSK ธุรกิจศัลยกรรมความงาม ที่เริ่มจากคำปรึกษาธุรกิจ สู่เว็บไซต์ UX/UI และ AI CRM ช่วยติดตามลูกค้า พร้อมบทเรียนสำหรับคลินิกความงาม`,
      intro: `DSK เป็นธุรกิจศัลยกรรมความงามที่ต้องการภาพลักษณ์ออนไลน์ที่น่าไว้ใจ และวิธีติดตามลูกค้าที่สนใจให้ดีขึ้น เราทำงานกับ DSK ในปี 2025 เป็นเวลา 4 เดือน บทความนี้เล่าเป็นเรื่องราวตั้งแต่โจทย์จนถึงสิ่งที่ส่งมอบ ส่วนบทเรียนท้ายบทความเป็นคำแนะนำทั่วไป แยกจากข้อเท็จจริงของโปรเจกต์`,
      sections: [
        {
          h: `สถานการณ์ตอนเริ่มต้น`,
          p: [
            `DSK ต้องการภาพลักษณ์ออนไลน์ที่ประณีตและน่าไว้ใจ พร้อมวิธีจัดการและติดตามลูกค้าที่สนใจ งานที่เรารับครอบคลุมสี่ส่วน คือให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์ ออกแบบ UX/UI และทำ CRM ที่มี AI ช่วย`,
            `โปรเจกต์ใช้เวลา 4 เดือน`,
          ],
        },
        {
          h: `สิ่งที่เราสังเกตเห็น`,
          p: [
            `การศัลยกรรมเป็นเรื่องที่คนคิดนาน ระหว่างนั้นลูกค้าอาจถามหลายที่ ถ้าตอบช้าหรือลืมติดตาม ลูกค้าก็ไปหาที่อื่นได้ง่าย`,
            `เราจึงมองว่าเว็บไซต์ที่สวยอย่างเดียวไม่พอ ต้องมีวิธีรับคำถามและติดตามต่ออย่างเป็นระบบอยู่ข้างหลังด้วย ไม่อย่างนั้นความไว้ใจที่เว็บสร้างไว้จะหายไปตอนที่ลูกค้าทักเข้ามาแล้วไม่มีใครตอบทัน`,
          ],
        },
        {
          h: `สิ่งที่เราตัดสินใจ และเหตุผล`,
          p: [
            `เราตัดสินใจเริ่มจากคำปรึกษาธุรกิจก่อนลงมือออกแบบ คือคุยเรื่องแผนดิจิทัล เป้าหมายของเว็บไซต์ และจุดที่ลูกค้าอาจหลุดระหว่างทาง เพราะถ้ายังไม่ชัดว่าเว็บต้องช่วยเป้าหมายตรงไหน การออกแบบก็จะเป็นแค่การทำให้สวย`,
            `จากนั้นจึงออกแบบเว็บไซต์ที่ดูสง่างามและอ่านง่าย พร้อมเพิ่ม CRM ที่มี AI ช่วยรวมคำถามของลูกค้าไว้ที่เดียว คัดแยก และจัดลำดับว่าควรติดตามใครก่อน`,
          ],
          quote: `ความไว้ใจของลูกค้าสร้างได้จากหน้าเว็บ แต่รักษาไว้ได้ด้วยการตอบและตามต่ออย่างสม่ำเสมอ`,
        },
        {
          h: `งานดำเนินไปอย่างไร`,
          p: [
            `เราเริ่มจากให้คำปรึกษาเรื่องแผนดิจิทัลและบทบาทของเว็บไซต์ต่อเป้าหมายธุรกิจ จากนั้นศึกษาบริการ กลุ่มลูกค้า และคำถามที่ลูกค้าถามบ่อย เพื่อกำหนดขอบเขตงานและวิธีวัดผล`,
            `ขั้นออกแบบ เราทำ Wireframe และหน้าตาเว็บให้ดูสง่างามและอ่านง่าย วางช่องทางสอบถามไว้ในจุดที่ลูกค้ากดได้ทันที แล้วพัฒนาเว็บให้เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาบริการได้เอง`,
          ],
          list: [
            `ให้คำปรึกษาธุรกิจ: แผนดิจิทัล บทบาทของเว็บ จุดที่ลูกค้าอาจหลุด`,
            `ศึกษาบริการ กลุ่มลูกค้า และคำถามที่ถูกถามบ่อย`,
            `ออกแบบ Wireframe และ UX/UI พร้อมช่องทางสอบถามที่กดได้ทันที`,
            `พัฒนาเว็บไซต์และ CRM ที่มี AI ช่วย`,
          ],
        },
        {
          h: `สิ่งที่ส่งมอบ`,
          p: [
            `ส่วนแรกคือเว็บไซต์ที่สร้างความไว้ใจ ด้วยอัตลักษณ์ภาพที่สง่างามเหมาะกับธุรกิจความงาม แสดงบริการและข้อมูลอย่างชัดเจน และมีช่องทางสอบถามหรือปรึกษาที่ใช้ง่าย`,
            `ส่วนที่สองคือ CRM ที่มี AI ช่วย รวมลูกค้าที่สนใจไว้ในที่เดียว ช่วยคัดแยกและจัดลำดับการติดตาม และช่วยให้ติดต่อลูกค้าอย่างสม่ำเสมอ ส่วนที่สามคือคำปรึกษาธุรกิจ ที่ให้แผนดิจิทัลตรงกับเป้าหมาย คำแนะนำเรื่อง Customer Journey และแผนพัฒนาต่อยอดในอนาคต`,
          ],
        },
        {
          h: `บทเรียนที่คลินิกและธุรกิจความงามนำไปใช้ได้`,
          p: [
            `ส่วนนี้เป็นคำแนะนำทั่วไป ไม่ใช่ข้อเท็จจริงของโปรเจกต์ ลองไล่ดูเส้นทางของคนที่สนใจบริการคุณ ตั้งแต่เห็นเว็บ ส่งข้อความ รอคำตอบ จนถึงนัดปรึกษา แล้วหาว่าจุดไหนที่คำถามอาจค้างอยู่นานที่สุด`,
            `เครื่องมืออย่าง CRM หรือ AI ช่วยได้ต่อเมื่อทีมมีกติกาว่าใครตามใคร เมื่อไร และพูดอะไร ส่วนข้อมูลลูกค้าในธุรกิจนี้เป็นเรื่องอ่อนไหว ควรกำหนดตั้งแต่แรกว่าใครเข้าถึงอะไรได้ และเก็บเท่าที่จำเป็น`,
          ],
          list: [
            `เขียนเส้นทางลูกค้าออกมาเป็นขั้น แล้วทำเครื่องหมายจุดที่ตอบช้า`,
            `ตั้งกติกาการติดตามก่อนเลือกเครื่องมือ`,
            `ให้ AI ช่วยจัดลำดับ แต่ให้คนเป็นผู้คุยกับลูกค้า`,
            `เก็บข้อมูลลูกค้าเท่าที่จำเป็น และจำกัดคนที่เข้าถึงได้`,
          ],
        },
      ],
      takeaways: [
        `ธุรกิจที่ลูกค้าตัดสินใจนาน แพ้ชนะกันที่ความเร็วและความสม่ำเสมอในการตอบและติดตาม`,
        `คุยเป้าหมายและเส้นทางลูกค้าให้ชัดก่อนลงมือออกแบบ`,
        `เว็บสร้างความไว้ใจ ส่วน CRM ช่วยรักษาความไว้ใจนั้นไว้`,
        `AI เหมาะกับงานคัดแยกและจัดลำดับ ส่วนการคุยกับลูกค้าควรเป็นคน`,
        `ข้อมูลลูกค้าด้านความงามอ่อนไหว ควรเก็บเท่าที่จำเป็นและควบคุมการเข้าถึง`,
      ],
      figCaption: `ภาพประกอบ: เส้นทางลูกค้าจากหน้าเว็บ สู่ CRM ที่ช่วยจัดลำดับการติดตาม`,
      faq: [
        {
          q: `โปรเจกต์ DSK ทำอะไรบ้าง`,
          a: `ให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์ ออกแบบ UX/UI และทำ CRM ที่มี AI ช่วยคัดแยกและจัดลำดับการติดตามลูกค้า ใช้เวลา 4 เดือน`,
        },
        {
          q: `ทำไมเริ่มจากคำปรึกษาธุรกิจ ไม่ใช่ออกแบบเลย`,
          a: `เพราะต้องชัดก่อนว่าเว็บต้องช่วยเป้าหมายตรงไหน และลูกค้าอาจหลุดระหว่างทางที่จุดไหน การออกแบบจะได้ตอบเรื่องนั้นจริง ๆ`,
        },
        {
          q: `AI ใน CRM ทำหน้าที่อะไร`,
          a: `ช่วยคัดแยกและจัดลำดับการติดตามลูกค้าที่สนใจ ส่วนการติดต่อและพูดคุยกับลูกค้ายังเป็นหน้าที่ของทีมงาน`,
        },
      ],
    },
    en: {
      title: `Case study: DSK, a website, UX/UI and AI-assisted CRM for an aesthetic surgery business`,
      excerpt: `A 4-month project that began with business consulting before the website design and an AI-assisted CRM for follow-ups, with lessons for aesthetic clinics.`,
      metaTitle: `Case study: DSK website and AI-assisted CRM`,
      metaDescription: `A story-style case study of DSK, an aesthetic surgery business: business consulting, website and UX/UI, and an AI-assisted CRM, with lessons for clinics.`,
      intro: `DSK is an aesthetic surgery business that wanted a polished online presence people can trust and a better way to follow up interested customers. We worked with DSK in 2025 over 4 months. This article tells the story from the brief to the delivery, and its closing lessons are general advice kept apart from the project facts.`,
      sections: [
        {
          h: `The situation`,
          p: [
            `DSK wanted a refined, trustworthy online image and a better way to manage and follow up interested customers. Our work covered four things: business consulting, website design, UX/UI design and an AI-assisted CRM.`,
            `The project ran for 4 months.`,
          ],
        },
        {
          h: `What we noticed`,
          p: [
            `Cosmetic surgery is a decision people think about for a long time, and during that time they may ask several providers. A slow reply or a forgotten follow-up sends them elsewhere.`,
            `So a good-looking website alone would not be enough. There also had to be an orderly way of receiving questions and following up behind it, otherwise the trust the site builds is lost the moment an enquiry goes unanswered.`,
          ],
        },
        {
          h: `What we decided, and why`,
          p: [
            `We decided to start with business consulting before designing anything: the digital plan, what the website should achieve, and where prospective customers tend to drop away. Without clarity on what the site is meant to serve, design turns into decoration.`,
            `Then we designed an elegant, easy-to-read website and added an AI-assisted CRM that gathers every enquiry in one place, sorts them and helps rank who should be followed up first.`,
          ],
          quote: `A website can earn a customer's trust, but only steady replies and follow-ups keep it.`,
        },
        {
          h: `How the work ran`,
          p: [
            `We began by advising on digital strategy and the role of the website in the business goals. Then we looked at the services, the audience and the questions customers ask most often, to set the scope and the success measures.`,
            `In design we produced wireframes and a visual interface that look elegant and read easily, with the enquiry route within one tap of wherever a visitor is. Then we built a fast, responsive site with service content the team can update on its own.`,
          ],
          list: [
            `Business consulting on digital plan, the website's role and drop-off points`,
            `Research into services, audience and frequent questions`,
            `Wireframes and UX/UI with an enquiry route one tap away`,
            `Website and AI-assisted CRM development`,
          ],
        },
        {
          h: `What we delivered`,
          p: [
            `The first part is a trust-building website: an elegant visual identity suited to aesthetics, a clear presentation of services and information, and a simple path to enquire or consult.`,
            `The second is an AI-assisted CRM that captures enquiries in one place, helps sort and prioritise follow-ups and supports consistent customer communication. The third is business guidance: a digital strategy aligned with business goals, recommendations on the customer journey and a roadmap for future improvements.`,
          ],
        },
        {
          h: `Lessons for clinics and beauty businesses`,
          p: [
            `This section is general advice, not project fact. Walk through the path of someone interested in your service, from seeing the site to sending a message, waiting for a reply and booking a consultation, and find the point where a question is most likely to sit unanswered.`,
            `A CRM or AI only helps when the team has rules about who follows up with whom, when and with what message. Customer data in this field is sensitive, so decide early who can see what and collect only what you need.`,
          ],
          list: [
            `Write the customer journey as steps and mark where replies are slow`,
            `Agree follow-up rules before choosing a tool`,
            `Let AI help with ranking, and keep people in the conversation with customers`,
            `Collect only the customer data you need and limit who can access it`,
          ],
        },
      ],
      takeaways: [
        `Where customers decide slowly, the winner is whoever replies and follows up quickly and consistently`,
        `Settle goals and the customer journey before designing`,
        `The website builds trust; the CRM helps keep it`,
        `AI suits sorting and prioritising, while conversations with customers should stay human`,
        `Aesthetic customer data is sensitive: collect only what is needed and control access`,
      ],
      figCaption: `Illustration: a customer path from the website into a CRM that helps rank follow-ups`,
      faq: [
        {
          q: `What did the DSK project include?`,
          a: `Business consulting, website design, UX/UI design and an AI-assisted CRM that helps sort and prioritise follow-ups. It took 4 months.`,
        },
        {
          q: `Why start with consulting instead of design?`,
          a: `Because it needs to be clear what the website should achieve and where customers might drop away, so the design answers those points.`,
        },
        {
          q: `What does the AI in the CRM do?`,
          a: `It helps sort and prioritise follow-ups for interested customers. Contacting and talking with customers remains the team's job.`,
        },
      ],
    },
  },

  // ---------------------------------------------------------------- Admire
  {
    slug: 'case-admire-homes',
    cat: 'Case Study',
    date: '2026-08-25',
    readMin: 8,
    tags: ['home builder', 'AI CRM', 'lead follow-up', 'real estate website', 'UX/UI'],
    related: ['ai-product-2025', 'dx-mistakes', 'build-vs-buy'],
    caseSlug: 'admire',
    th: {
      title: `กรณีศึกษา: Admire เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน`,
      excerpt: `เรื่องราวการทำเว็บไซต์โชว์แบบบ้านและ CRM ที่มี AI ช่วยติดตามลูกค้า ให้ทีมขายรู้ว่าใครควรโทรกลับก่อน พร้อมบทเรียนสำหรับธุรกิจรับสร้างบ้าน`,
      metaTitle: `กรณีศึกษา Admire เว็บไซต์และ AI CRM รับสร้างบ้าน`,
      metaDescription: `เรื่องจริงของ Admire ธุรกิจรับสร้างบ้าน กับเว็บไซต์โชว์แบบบ้านและ CRM ที่มี AI ช่วยติดตามลูกค้า พร้อมบทเรียนสำหรับธุรกิจก่อสร้างและอสังหาริมทรัพย์`,
      intro: `Admire เป็นธุรกิจรับสร้างบ้านที่ลูกค้าใช้เวลานานในการเลือกแบบและเปรียบเทียบผู้รับเหมา เราออกแบบ UX/UI พัฒนาเว็บไซต์ใหม่ และเพิ่ม CRM ที่มี AI ช่วย ในปี 2025 บทความนี้เล่าเรื่องการทำงาน แล้วปิดด้วยบทเรียนทั่วไปสำหรับธุรกิจก่อสร้าง ซึ่งแยกจากข้อเท็จจริงของโปรเจกต์ให้ชัด`,
      sections: [
        {
          h: `สถานการณ์ตอนเริ่มต้น`,
          p: [
            `Admire รับสร้างบ้าน ผู้ซื้อต้องใช้เวลาดูแบบบ้านและเปรียบเทียบผู้รับเหมาอยู่นาน ธุรกิจต้องการเว็บไซต์ที่โชว์ผลงาน และระบบที่ไม่ปล่อยให้ลูกค้าที่สนใจหลุดมือ`,
            `โปรเจกต์ใช้เวลา 4 เดือน เราดูแลการออกแบบ UX/UI การพัฒนาเว็บไซต์ และ CRM ที่มี AI ช่วย`,
          ],
        },
        {
          h: `สิ่งที่เราสังเกตเห็น`,
          p: [
            `ระหว่างที่ลูกค้ากำลังเทียบหลายเจ้า เจ้าไหนตามต่ออย่างสม่ำเสมอ เจ้านั้นก็ได้เปรียบ นั่นแปลว่างานของเว็บไซต์ไม่ได้จบที่การสร้างความประทับใจ แต่ต้องส่งต่อให้ทีมขายตามต่อได้ไม่ตกหล่น`,
            `เราจึงแบ่งหน้าที่ให้ชัด เว็บไซต์ทำหน้าที่โชว์ฝีมือ ส่วน CRM ทำหน้าที่ดูแลต่อหลังลูกค้าติดต่อเข้ามา`,
          ],
        },
        {
          h: `สิ่งที่เราตัดสินใจ และเหตุผล`,
          p: [
            `เราออกแบบ UX/UI ให้ภาพแบบบ้านและผลงานจริงเป็นพระเอก และวางปุ่มขอคำปรึกษาในทุกหน้าสำคัญ เพราะคนที่ดูแบบบ้านแล้วถูกใจ ไม่ควรต้องไล่หาว่าจะติดต่ออย่างไร`,
            `หลังจากนั้นเราเพิ่ม CRM ที่มี AI ช่วยเก็บและติดตามทุกคำถามจากลูกค้า ตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา เพื่อให้ทีมขายเห็นสถานะและรู้ว่าใครควรโทรกลับก่อน`,
          ],
          quote: `ลูกค้าที่กำลังเทียบหลายเจ้า มักเลือกเจ้าที่ตามต่ออย่างสม่ำเสมอ ไม่ใช่เจ้าที่ตอบเร็วแค่ครั้งแรก`,
        },
        {
          h: `งานดำเนินไปอย่างไร`,
          p: [
            `เราเริ่มจากคุยกับทีมเรื่องแบบบ้านที่ขายดี คำถามที่ลูกค้าถามก่อนตัดสินใจ และวิธีที่ทีมขายตามลูกค้าอยู่ แล้วกำหนดขอบเขตงานและวิธีวัดผล จากนั้นออกแบบ Wireframe และหน้าตาเว็บ`,
            `ขั้นพัฒนา เราทำเว็บที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมเพิ่มแบบบ้านหรือโครงการใหม่ได้เอง สุดท้ายเชื่อม CRM ที่มี AI ช่วยเก็บ จัดการ ติดตามลูกค้าอย่างสม่ำเสมอ และเตือนเมื่อถึงเวลาตามต่อ`,
          ],
          list: [
            `คุยเรื่องแบบบ้านที่ขายดี คำถามของลูกค้า และวิธีติดตามของทีมขาย`,
            `ออกแบบ Wireframe และหน้าตาเว็บให้ภาพแบบบ้านเป็นพระเอก`,
            `พัฒนาเว็บให้ทีมเพิ่มแบบบ้านและโครงการเองได้`,
            `เชื่อม CRM ที่มี AI ช่วยเก็บ จัดการ และเตือนการติดตาม`,
          ],
        },
        {
          h: `สิ่งที่ส่งมอบ`,
          p: [
            `ฝั่งเว็บไซต์ เป็นหน้าที่โชว์ภาพใหญ่ของแบบบ้านและผลงานจริง เลือกดูตามสไตล์และโครงการได้ง่าย มีช่องทางขอคำปรึกษาที่ชัดเจน และตั้งค่า SEO พื้นฐานสำหรับการค้นหาบริการรับสร้างบ้าน`,
            `ฝั่ง CRM ทุกคำถามจากลูกค้ารวมอยู่ในที่เดียว AI ช่วยจัดลำดับความสำคัญและเตือนให้ติดตาม และเห็นสถานะตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา ทีมงานเพิ่มแบบบ้านและโครงการใหม่ได้ง่าย เว็บรวดเร็วและรองรับทุกอุปกรณ์`,
          ],
        },
        {
          h: `บทเรียนที่ธุรกิจก่อสร้างและอสังหาริมทรัพย์นำไปใช้ได้`,
          p: [
            `ส่วนนี้เป็นคำแนะนำทั่วไป ไม่ใช่ข้อเท็จจริงของโปรเจกต์ ลองนับดูว่าคำถามจากลูกค้าในแต่ละสัปดาห์ถูกจดไว้ที่ไหนบ้าง ถ้ากระจายอยู่ในแชท สมุดโน้ต และความจำของเซลส์ ก็มีโอกาสที่บางคนจะหลุดไป`,
            `ธุรกิจที่ขายของราคาสูงและใช้เวลาตัดสินใจนาน ควรมีสถานะลูกค้าให้ชัดว่าตอนนี้อยู่ขั้นไหน และมีกติกาว่าต้องตามต่อเมื่อไร AI ช่วยจัดลำดับได้ แต่กติกานี้ทีมต้องตกลงกันเอง`,
          ],
          list: [
            `รวมทุกช่องทางที่ลูกค้าถามมาไว้ในที่เดียว`,
            `กำหนดสถานะลูกค้าตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา`,
            `ตั้งรอบการตามต่อ เช่น หลังส่งแบบหรือใบเสนอราคา แล้วให้ระบบเตือน`,
            `แสดงผลงานจริงด้วยภาพใหญ่ และมีปุ่มขอคำปรึกษาในทุกหน้าสำคัญ`,
          ],
        },
      ],
      takeaways: [
        `ในการเทียบผู้รับเหมาหลายเจ้า การตามต่ออย่างสม่ำเสมอเป็นข้อได้เปรียบ`,
        `เว็บทำหน้าที่โชว์ฝีมือ CRM ทำหน้าที่ดูแลต่อหลังลูกค้าติดต่อเข้ามา`,
        `ทุกคำถามของลูกค้าควรรวมอยู่ในที่เดียวและเห็นสถานะชัด`,
        `AI ช่วยจัดลำดับและเตือนได้ แต่กติกาการติดตามต้องมาจากทีม`,
        `ให้ทีมเพิ่มแบบบ้านและโครงการเองได้ เว็บจะไม่ล้าสมัย`,
      ],
      figCaption: `ภาพประกอบ: เส้นทางลูกค้าจากการดูแบบบ้าน สู่ CRM ที่เตือนให้ทีมขายตามต่อ`,
      faq: [
        {
          q: `โปรเจกต์ Admire ใช้เวลานานเท่าไร`,
          a: `ใช้เวลา 4 เดือน ครอบคลุมออกแบบ UX/UI พัฒนาเว็บไซต์ และ CRM ที่มี AI ช่วย`,
        },
        {
          q: `CRM ที่มี AI ช่วยทำอะไรให้ทีมขาย`,
          a: `เก็บทุกคำถามจากลูกค้าไว้ในที่เดียว ช่วยจัดลำดับความสำคัญ เตือนให้ติดตาม และแสดงสถานะตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา`,
        },
        {
          q: `ทีมงานเพิ่มแบบบ้านใหม่เองได้ไหม`,
          a: `ได้ เว็บไซต์ถูกพัฒนาให้ทีมเพิ่มแบบบ้านหรือโครงการใหม่ได้เอง`,
        },
      ],
    },
    en: {
      title: `Case study: Admire, a website, UX/UI and AI-assisted CRM for a home builder`,
      excerpt: `How we built a website that shows house designs and an AI-assisted CRM that tells the sales team who to call back first, with lessons for home builders.`,
      metaTitle: `Case study: Admire home builder website and CRM`,
      metaDescription: `A story-style case study of Admire, a custom home builder: a website that shows its designs and an AI-assisted CRM for follow-up, with lessons for builders.`,
      intro: `Admire is a custom home builder whose buyers spend a long time studying designs and comparing builders. In 2025 we designed the UX/UI, built a new website and added an AI-assisted CRM. This article tells the story of the work and closes with general lessons for construction businesses, kept apart from the project facts.`,
      sections: [
        {
          h: `The situation`,
          p: [
            `Admire builds custom homes, and buyers take a long time to study designs and compare builders. The business needed a website that shows its work and a system that does not let promising leads slip away.`,
            `The project lasted 4 months. We handled UX/UI design, website development and the AI-assisted CRM.`,
          ],
        },
        {
          h: `What we noticed`,
          p: [
            `While a customer is weighing several builders, the one that follows up steadily has the advantage. So the website's job could not end at making a good impression; it had to hand people over to a sales team that follows up without gaps.`,
            `We therefore split the roles clearly: the website shows the craft, and the CRM looks after people once they get in touch.`,
          ],
        },
        {
          h: `What we decided, and why`,
          p: [
            `We designed the UX/UI so house photography takes the lead and a consultation button sits on every important page. Someone who likes a design should not have to hunt for how to get in touch.`,
            `After that we added an AI-assisted CRM to capture and follow up every enquiry from first interest through to a signed contract, so the sales team can see status and know who to call back first.`,
          ],
          quote: `A customer comparing several builders tends to choose the one that keeps following up, not the one that replied fast once.`,
        },
        {
          h: `How the work ran`,
          p: [
            `We started by talking with the team about the designs that sell best, the questions customers ask before deciding and how the sales team follows up today, then set the scope and success measures. Next came wireframes and the visual interface.`,
            `In development we built a fast, responsive site where the team can add new designs and projects on its own. Finally we added the CRM with AI assistance that captures, organises and follows up enquiries consistently and reminds the team when a follow-up is due.`,
          ],
          list: [
            `Discuss best-selling designs, customer questions and the current follow-up routine`,
            `Design wireframes and the interface with house photography in the lead`,
            `Build a site the team can extend with new designs and projects`,
            `Add the AI-assisted CRM to capture, organise and remind`,
          ],
        },
        {
          h: `What we delivered`,
          p: [
            `On the website side: large imagery of house designs and finished homes, easy browsing by style and project, a clear way to request a consultation, and SEO foundations for home-building searches.`,
            `On the CRM side: every enquiry captured in one place, AI that helps prioritise and remind follow-ups, and visibility from lead to contract. The team can add new designs and projects easily, and the site is fast and responsive on every device.`,
          ],
        },
        {
          h: `Lessons for construction and real estate businesses`,
          p: [
            `This section is general advice, not project fact. Count the places where customer questions are recorded in a typical week. If they are scattered across chats, notebooks and a salesperson's memory, some people will be forgotten.`,
            `A business selling expensive things with long decision times needs a clear lead status and a rule for when to follow up. AI can help with ranking, but the rule is something the team has to agree on itself.`,
          ],
          list: [
            `Bring every channel where customers ask into one place`,
            `Define lead stages from first interest to signed contract`,
            `Set follow-up rhythms, such as after sending a design or a quote, and let the system remind you`,
            `Show real work in large photos, with a consultation button on every key page`,
          ],
        },
      ],
      takeaways: [
        `When buyers compare several builders, steady follow-up is an advantage`,
        `The website shows the craft; the CRM looks after people once they get in touch`,
        `Every enquiry should live in one place with a visible status`,
        `AI can rank and remind, but follow-up rules must come from the team`,
        `Letting the team add designs and projects themselves keeps the site current`,
      ],
      figCaption: `Illustration: a buyer's path from browsing house designs to a CRM that reminds sales to follow up`,
      faq: [
        {
          q: `How long did the Admire project take?`,
          a: `It took 4 months, covering UX/UI design, website development and the AI-assisted CRM.`,
        },
        {
          q: `What does the AI-assisted CRM do for the sales team?`,
          a: `It keeps every customer enquiry in one place, helps prioritise, reminds the team to follow up and shows status from first interest to signed contract.`,
        },
        {
          q: `Can the team add new house designs themselves?`,
          a: `Yes. The website was built so the team can add new designs or projects on its own.`,
        },
      ],
    },
  },

  // ---------------------------------------------------------------- MEKO
  {
    slug: 'case-meko-hospital',
    cat: 'Case Study',
    date: '2026-08-11',
    readMin: 8,
    tags: ['brand identity', 'hospital website', 'CI guidelines', 'graphic templates', 'UX/UI'],
    related: ['why-design-system-matters', 'thai-typography', 'ux-research'],
    caseSlug: 'meko-international-hospital',
    th: {
      title: `กรณีศึกษา: MEKO International Hospital แบรนด์ เว็บไซต์ และกราฟิก`,
      excerpt: `เรื่องราวโปรเจกต์ 5 เดือนที่วางแบรนด์และ CI ก่อน แล้วขยายไปสู่เว็บไซต์และกราฟิก ให้คนไข้พบหน้าตาเดียวกันทุกช่องทาง พร้อมบทเรียนสำหรับโรงพยาบาลและคลินิก`,
      metaTitle: `กรณีศึกษา MEKO Hospital แบรนด์ CI และเว็บไซต์`,
      metaDescription: `เรื่องจริงของ MEKO International Hospital กับงานแบรนด์ CI เว็บไซต์ UX/UI และกราฟิกที่เป็นแนวเดียวกันทุกช่องทาง พร้อมบทเรียนสำหรับโรงพยาบาลและคลินิกความงาม`,
      intro: `MEKO International Hospital เป็นโรงพยาบาลศัลยกรรมความงามที่เป็นที่รู้จัก เราทำงานกับโรงพยาบาลเป็นเวลา 5 เดือนในปี 2025 ครอบคลุมเว็บไซต์ UX/UI กราฟิก และ Brand CI บทความนี้เล่าเป็นเรื่องราวตั้งแต่โจทย์ถึงสิ่งที่ส่งมอบ แล้วปิดด้วยบทเรียนทั่วไปที่แยกจากข้อเท็จจริงของโปรเจกต์`,
      sections: [
        {
          h: `สถานการณ์ตอนเริ่มต้น`,
          p: [
            `MEKO เป็นชื่อที่รู้จักในวงการศัลยกรรมความงาม ภาพลักษณ์ดิจิทัลและสื่อแบรนด์จึงต้องประณีตและน่าเชื่อถือเท่ากับบริการ`,
            `งานของเราคือออกแบบเว็บไซต์ ออกแบบ UX/UI ออกแบบกราฟิก และทำ Brand & CI โปรเจกต์ใช้เวลา 5 เดือน`,
          ],
        },
        {
          h: `สิ่งที่เราสังเกตเห็น`,
          p: [
            `ถ้าหน้าตาของเว็บไซต์ โซเชียล และสื่อพิมพ์ไม่ไปทางเดียวกัน คนไข้จะรู้สึกว่ามาตรฐานไม่คงที่ ซึ่งเป็นความรู้สึกที่โรงพยาบาลไม่อยากให้เกิดขึ้นเลย`,
            `ปัญหานี้แก้ด้วยการตกแต่งแต่ละชิ้นให้สวยไม่ได้ เพราะต่อให้แต่ละชิ้นดี ถ้าไม่ได้อ้างอิงกติกาชุดเดียวกัน ภาพรวมก็ยังไม่เป็นหนึ่งเดียว`,
          ],
        },
        {
          h: `สิ่งที่เราตัดสินใจ และเหตุผล`,
          p: [
            `เราตัดสินใจเริ่มจากวางแบรนด์ให้ชัดก่อน แล้วค่อยขยายไปสู่เว็บไซต์และสื่อต่าง ๆ เพื่อให้ทุกอย่างอ้างอิงจากกติกาชุดเดียว ทั้งโลโก้ สี และตัวอักษร`,
            `เรายังเลือกทำงานกราฟิกเป็นเทมเพลตที่ทีมงานนำไปใช้ซ้ำได้เอง เพราะแบรนด์ที่ดีต้องอยู่รอดหลังจากเราส่งมอบ ไม่ใช่เพี้ยนไปเมื่อมีคนทำสื่อใหม่`,
          ],
          quote: `แบรนด์ที่ดูประณีตคือแบรนด์ที่ทุกชิ้นงานอ้างอิงกติกาเดียวกัน ไม่ใช่แค่แต่ละชิ้นสวย`,
        },
        {
          h: `งานดำเนินไปอย่างไร`,
          p: [
            `เราเริ่มจากทำความเข้าใจบริการ กลุ่มคนไข้ และสื่อที่โรงพยาบาลใช้อยู่ เพื่อกำหนดขอบเขตงานและวิธีวัดผล จากนั้นทำอัตลักษณ์แบรนด์และแนวทางการใช้งาน ทั้งโลโก้ สี และตัวอักษร`,
            `เมื่อแบรนด์ชัดแล้ว เราออกแบบ Wireframe และหน้าตาเว็บให้แสดงบริการและการรักษาอย่างชัดเจน พร้อมช่องทางนัดปรึกษาที่หาพบง่าย แล้วพัฒนาเว็บที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาเองได้ ส่วนงานกราฟิกทำเป็นเทมเพลตให้ใช้ซ้ำ`,
          ],
          list: [
            `ศึกษาบริการ กลุ่มคนไข้ และสื่อที่ใช้อยู่`,
            `พัฒนาแบรนด์และ CI พร้อมแนวทางการใช้งาน`,
            `ออกแบบ UX/UI ให้แสดงการรักษาชัดและนัดปรึกษาง่าย`,
            `พัฒนาเว็บไซต์ และทำกราฟิกเป็นเทมเพลตให้ใช้ซ้ำ`,
          ],
        },
        {
          h: `สิ่งที่ส่งมอบ`,
          p: [
            `ส่วนแบรนด์ คือแนวทางแบรนด์ทั้งโลโก้ สี และตัวอักษร หน้าตาที่เป็นแนวเดียวกันทั้งดิจิทัลและสื่อพิมพ์ และโทนภาพที่ประณีตน่าเชื่อถือ`,
            `ส่วนเว็บไซต์ แสดงบริการและการรักษาอย่างชัดเจน มีช่องทางสอบถามและนัดปรึกษาที่ใช้ง่าย และรวดเร็วทุกอุปกรณ์ ส่วนงานกราฟิก มีกราฟิกแคมเปญและโซเชียลมีเดีย สื่อที่เข้ากับแนวทางแบรนด์ และเทมเพลตที่ทีมงานนำไปใช้ซ้ำได้`,
          ],
        },
        {
          h: `บทเรียนที่โรงพยาบาลและคลินิกนำไปใช้ได้`,
          p: [
            `ส่วนนี้เป็นคำแนะนำทั่วไป ไม่ใช่ข้อเท็จจริงของโปรเจกต์ ลองวางป้าย เว็บ โพสต์โซเชียล และใบปลิวของคุณไว้ข้างกัน แล้วถามว่าถ้าไม่มีโลโก้ จะรู้ไหมว่าเป็นแบรนด์เดียวกัน ถ้าไม่ แสดงว่ายังขาดกติกากลาง`,
            `เอกสารแนวทางแบรนด์ไม่จำเป็นต้องหนา แต่ควรตอบให้ได้ว่าใช้สีอะไร ตัวอักษรอะไร โลโก้วางอย่างไร และคนที่ทำสื่อใหม่จะหยิบอะไรไปใช้ได้ทันที`,
          ],
          list: [
            `วางสื่อทุกช่องทางไว้ข้างกัน แล้วดูว่ารู้สึกเป็นแบรนด์เดียวกันไหม`,
            `กำหนดโลโก้ สี และตัวอักษรให้เป็นลายลักษณ์อักษร`,
            `ทำเทมเพลตสำหรับสื่อที่ใช้บ่อย เช่นโพสต์โซเชียลและแคมเปญ`,
            `วางช่องทางนัดปรึกษาไว้ให้หาพบง่ายทั้งบนเว็บและสื่ออื่น`,
          ],
        },
      ],
      takeaways: [
        `ความไม่สอดคล้องของสื่อ ทำให้คนไข้รู้สึกว่ามาตรฐานไม่คงที่`,
        `วางแบรนด์และ CI ให้ชัดก่อน แล้วค่อยขยายไปเว็บและสื่ออื่น`,
        `ให้ทุกสื่ออ้างอิงกติกาชุดเดียว ทั้งโลโก้ สี และตัวอักษร`,
        `เทมเพลตช่วยให้แบรนด์คงเดิมหลังส่งมอบ เมื่อทีมทำสื่อใหม่เอง`,
        `ช่องทางนัดปรึกษาควรหาพบง่ายในทุกจุดสัมผัส`,
      ],
      figCaption: `ภาพประกอบ: เว็บไซต์ โซเชียล และสื่อพิมพ์ที่อ้างอิงกติกาแบรนด์ชุดเดียวกัน`,
      faq: [
        {
          q: `โปรเจกต์ MEKO ครอบคลุมอะไรบ้าง`,
          a: `ออกแบบเว็บไซต์ ออกแบบ UX/UI ออกแบบกราฟิก และทำ Brand & CI ใช้เวลา 5 เดือน`,
        },
        {
          q: `ทำไมเริ่มจากแบรนด์ ไม่เริ่มจากเว็บ`,
          a: `เพื่อให้เว็บไซต์และสื่ออื่นอ้างอิงกติกาชุดเดียวกัน ทั้งโลโก้ สี และตัวอักษร ภาพรวมจะได้เป็นหนึ่งเดียว`,
        },
        {
          q: `ทีมโรงพยาบาลทำสื่อใหม่เองได้ไหม`,
          a: `ได้ งานกราฟิกถูกทำเป็นเทมเพลตให้ทีมงานนำไปใช้ซ้ำได้เอง และเว็บไซต์ก็อัปเดตเนื้อหาเองได้`,
        },
      ],
    },
    en: {
      title: `Case study: MEKO International Hospital, brand, website and graphics`,
      excerpt: `A 5-month project that fixed the brand and CI first, then extended it into the website and graphics so patients meet one identity everywhere, with lessons for hospitals and clinics.`,
      metaTitle: `Case study: MEKO Hospital brand, CI and website`,
      metaDescription: `A story-style case study of MEKO International Hospital: brand CI, website UX/UI and graphics that look like one identity, plus lessons for clinics.`,
      intro: `MEKO International Hospital is a well-known aesthetic surgery hospital. We worked with it for 5 months in 2025, covering the website, UX/UI, graphics and Brand CI. This article tells the story from brief to delivery, and its closing lessons are general advice kept apart from the project facts.`,
      sections: [
        {
          h: `The situation`,
          p: [
            `MEKO is a well-known name in aesthetic surgery, so its digital presence and brand materials had to feel as refined and trustworthy as the care it provides.`,
            `Our work covered website design, UX/UI design, graphic design and Brand & CI. The project ran for 5 months.`,
          ],
        },
        {
          h: `What we noticed`,
          p: [
            `If the website, social channels and print do not look alike, patients sense that the standard is uneven, which is exactly what a hospital does not want them to feel.`,
            `Polishing each piece separately does not fix that. Even if every piece is good, the whole stays fragmented unless they all refer back to the same set of rules.`,
          ],
        },
        {
          h: `What we decided, and why`,
          p: [
            `We decided to fix the brand first and then extend it into the website and other media, so that everything refers to a single set of rules covering logo, colour and typography.`,
            `We also chose to turn the graphics work into templates the team can reuse on its own, because a brand has to survive after handover rather than drift whenever someone makes new material.`,
          ],
          quote: `A polished brand is one where every piece follows the same rules, not one where each piece is merely pretty.`,
        },
        {
          h: `How the work ran`,
          p: [
            `We began by studying the services, the patient audience and the materials the hospital already uses, to set the scope and the success measures. Then we developed the brand identity and its usage guidelines, covering logo, colour and typography.`,
            `With the brand settled, we designed wireframes and a visual interface that present treatments and services clearly with an easy-to-find route to book a consultation. We built a fast, responsive website the team can update, and turned the graphics work into reusable templates.`,
          ],
          list: [
            `Study of services, patient audience and existing materials`,
            `Brand identity and CI with usage guidelines`,
            `UX/UI that presents treatments clearly and makes booking easy`,
            `Website development and reusable graphic templates`,
          ],
        },
        {
          h: `What we delivered`,
          p: [
            `On brand: guidelines for logo, colour and typography, a consistent look across digital and print, and a refined, trustworthy visual tone.`,
            `On the website: a clear presentation of treatments and services, simple paths to enquire and book a consultation, and a site that is responsive and fast on every device. On graphics: campaign and social graphics, materials aligned with the brand guidelines, and reusable templates for the team.`,
          ],
        },
        {
          h: `Lessons for hospitals and clinics`,
          p: [
            `This section is general advice, not project fact. Lay your signage, website, social posts and leaflets side by side and ask whether, without the logo, anyone would know they come from the same place. If not, a shared rulebook is missing.`,
            `A brand guideline does not have to be thick, but it should answer which colours, which typefaces, how the logo is placed, and what someone making new material can pick up and use straight away.`,
          ],
          list: [
            `Put every channel side by side and check that it feels like one brand`,
            `Write down logo, colour and typography rules`,
            `Make templates for frequent materials such as social posts and campaigns`,
            `Keep the route to book a consultation easy to find on the web and elsewhere`,
          ],
        },
      ],
      takeaways: [
        `Inconsistent materials make patients feel the standard is uneven`,
        `Fix brand and CI first, then extend into the website and other media`,
        `Let every material refer to one rulebook for logo, colour and typography`,
        `Templates keep the brand intact after handover when the team makes new material`,
        `Make the route to book a consultation easy to find at every touchpoint`,
      ],
      figCaption: `Illustration: website, social and print materials following a single set of brand rules`,
      faq: [
        {
          q: `What did the MEKO project cover?`,
          a: `Website design, UX/UI design, graphic design and Brand & CI, over 5 months.`,
        },
        {
          q: `Why start with the brand instead of the website?`,
          a: `So the website and other media all follow one set of rules for logo, colour and typography, and the whole reads as one identity.`,
        },
        {
          q: `Can the hospital team make new materials themselves?`,
          a: `Yes. The graphics were turned into reusable templates the team can use on its own, and the website content can be updated by the team.`,
        },
      ],
    },
  },
]
