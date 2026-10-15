import type { Article } from '@/lib/blog-types'

export const designArticles: Article[] = [
  {
    slug: 'why-design-system-matters',
    cat: 'Design',
    date: '2026-09-30',
    readMin: 9,
    tags: ['design system', 'design tokens', 'component library', 'UI consistency', 'product design'],
    related: ['accessibility-wcag', 'ux-research', 'thai-typography'],
    th: {
      title: 'ทำไมทีมที่กำลังโตถึงต้องมี Design System และเริ่มอย่างไรใน 5 ขั้นตอน',
      excerpt: 'Design system ไม่ใช่แค่ชุดปุ่มสวยๆ แต่คือข้อตกลงร่วมของทีม ทั้ง token, component, pattern และเอกสาร มาดูว่าทำไมสำคัญและเริ่มจากตรงไหนดี',
      metaTitle: 'Design System คืออะไร ทำไมทีมที่กำลังโตต้องมี',
      metaDescription: 'อธิบาย design system ว่าประกอบด้วยอะไร ทั้ง design token, component, pattern และเอกสาร พร้อมวิธีเริ่มทำ 5 ขั้นตอนสำหรับทีมผลิตภัณฑ์ดิจิทัลที่กำลังโต',
      intro: 'ตอนทีมมีดีไซเนอร์สองคนกับเว็บเดียว ทุกอย่างยังจัดการได้ด้วยการคุยกัน แต่พอมีหลายผลิตภัณฑ์ หลายทีม และมีคนเข้าใหม่ทุกไตรมาส ปุ่มสีน้ำเงินจะเริ่มมีสามเฉดและฟอร์มจะหน้าตาไม่เหมือนกันสักหน้า นี่คือจุดที่ design system เข้ามาช่วย บทความนี้อธิบายว่ามันคืออะไร ประกอบด้วยอะไร และทีมเล็กๆ เริ่มได้อย่างไรโดยไม่ต้องหยุดงานเดิมเพื่อทำมัน',
      sections: [
        {
          h: 'Design system คืออะไรกันแน่',
          p: [
            'หลายคนเข้าใจว่า design system คือไฟล์ Figma ที่รวมปุ่มกับช่องกรอกข้อมูล จริงๆ แล้วนั่นเป็นแค่ส่วนที่มองเห็นง่ายที่สุด Design system คือชุดข้อตกลงที่ทั้งดีไซเนอร์และนักพัฒนาใช้ร่วมกัน ว่าสี ตัวอักษร ระยะห่าง และพฤติกรรมของหน้าจอควรเป็นอย่างไร พร้อมของจริงที่หยิบไปใช้ได้ทั้งในดีไซน์และในโค้ด',
            'ลองนึกถึงภาษาของทีม ถ้าทุกคนใช้คำว่า "ปุ่มหลัก" แล้วหมายถึงสิ่งเดียวกัน การคุยงานจะเร็วขึ้นมาก ไม่ต้องไล่ถามว่าเฉดไหน ขอบมนเท่าไร Design system ทำหน้าที่เป็นพจนานุกรมของภาษานั้น',
          ],
          quote: 'ระบบที่ดีไม่ได้ทำให้ทุกหน้าเหมือนกัน แต่ทำให้ความต่างเกิดขึ้นเพราะตั้งใจ ไม่ใช่เพราะบังเอิญ',
        },
        {
          h: 'องค์ประกอบหลัก 4 ส่วน',
          p: [
            'Design system ที่ใช้งานได้จริงมักมีสี่ชั้นซ้อนกัน ชั้นล่างสุดคือ design token ซึ่งเป็นค่าพื้นฐานที่ตั้งชื่อไว้ เช่น สีหลัก ขนาดตัวอักษร ระยะห่าง และความโค้งของมุม ชั้นถัดมาคือ component เช่น ปุ่ม ช่องกรอก และการ์ด ที่ประกอบจาก token',
            'ชั้นที่สามคือ pattern หรือแบบแผนการใช้งาน เช่น หน้าฟอร์มสมัครสมาชิก การแสดง error หรือหน้าว่างที่ยังไม่มีข้อมูล ซึ่งบอกว่าจะเอา component หลายตัวมาประกอบกันอย่างไรในสถานการณ์ที่พบบ่อย ชั้นสุดท้ายคือเอกสาร ที่บอกว่าเมื่อไรควรใช้ เมื่อไรไม่ควรใช้ และตัวอย่างที่ถูกต้อง',
          ],
          list: [
            'Token: สี ตัวอักษร ระยะห่าง เงา และมุมโค้ง ตั้งชื่อตามหน้าที่ เช่น "สีพื้นหลังหลัก" แทนที่จะเป็น "เทา 200"',
            'Component: ปุ่ม ช่องกรอก dropdown โมดัล พร้อมสถานะครบ ทั้งปกติ hover focus ปิดใช้งาน และ error',
            'Pattern: วิธีประกอบ component สำหรับงานที่พบซ้ำ เช่น ฟอร์ม ตาราง การค้นหา',
            'เอกสาร: หลักการใช้ ตัวอย่างที่ถูกและผิด และแนวทางด้านการเข้าถึง',
          ],
        },
        {
          h: 'ทำไมทีมที่โตขึ้นถึงเริ่มรู้สึกว่าขาด',
          p: [
            'สัญญาณที่พบบ่อยคือดีไซเนอร์ใช้เวลากับการวาดปุ่มและฟอร์มซ้ำๆ มากกว่าการคิดแก้ปัญหาผู้ใช้ นักพัฒนาก็เขียนโค้ดปุ่มใหม่ทุกครั้งที่ทำฟีเจอร์ใหม่ เพราะไม่แน่ใจว่าของเดิมอยู่ตรงไหน เมื่อเวลาผ่านไป หน้าจอจะเริ่มไม่ตรงกันและการแก้ทีละจุดก็เหนื่อยขึ้นเรื่อยๆ',
            'ประโยชน์ที่ทีมมักรู้สึกได้เป็นเชิงคุณภาพมากกว่าตัวเลข คือ ส่งมอบงานระหว่างดีไซน์กับโค้ดสะดวกขึ้น คนใหม่เข้าใจงานได้เร็วขึ้น การรีวิวคุยกันเรื่องปัญหาผู้ใช้แทนที่จะเถียงเรื่องเฉดสี และเมื่อต้องการเปลี่ยนแบรนด์หรือเพิ่มโหมดมืด การแก้ที่ token ครั้งเดียวก็ไหลไปทุกหน้า',
            'อีกข้อที่คนมักมองข้ามคือเรื่องการเข้าถึง ถ้า component ปุ่มหนึ่งตัวผ่านเกณฑ์คอนทราสต์และรองรับคีย์บอร์ดแล้ว ทุกหน้าที่ใช้ปุ่มนั้นก็ได้ประโยชน์ไปด้วย',
          ],
        },
        {
          h: 'เริ่มทำใน 5 ขั้นตอน',
          p: [
            'ข้อผิดพลาดที่พบบ่อยคือพยายามสร้างระบบสมบูรณ์แบบก่อนใช้งานจริง ซึ่งมักใช้เวลานานจนทีมหมดแรง วิธีที่ได้ผลกว่าคือค่อยๆ สกัดระบบออกมาจากงานที่ทำอยู่ แล้วขยายตามความต้องการจริง',
            'ลำดับด้านล่างเหมาะกับทีมขนาดเล็กถึงกลาง และทำคู่ไปกับงานฟีเจอร์ปกติได้ ไม่ต้องหยุดโปรเจกต์',
          ],
          list: [
            'ขั้นที่ 1 ตรวจของที่มีอยู่: จับภาพหน้าจอทุกหน้าหลัก แล้วจัดกลุ่มปุ่ม สี และตัวอักษรที่ซ้ำหรือเกือบซ้ำกัน จะเห็นทันทีว่าความไม่สม่ำเสมอเกิดตรงไหน',
            'ขั้นที่ 2 กำหนด token พื้นฐาน: เลือกชุดสี ขนาดตัวอักษร และระยะห่างที่จะใช้จริง ตั้งชื่อตามหน้าที่ แล้วเก็บเป็นตัวแปรทั้งในดีไซน์และโค้ด',
            'ขั้นที่ 3 ทำ component ที่ใช้บ่อยที่สุดก่อน: มักเป็นปุ่ม ช่องกรอก และการ์ด ทำให้ครบทุกสถานะและทดสอบกับคีย์บอร์ดตั้งแต่แรก',
            'ขั้นที่ 4 เขียนเอกสารสั้นๆ: บอกว่าใช้เมื่อไร ห้ามใช้เมื่อไร พร้อมตัวอย่าง เอกสารสั้นที่คนอ่านดีกว่าเอกสารยาวที่ไม่มีใครเปิด',
            'ขั้นที่ 5 ตั้งเจ้าของและกระบวนการปรับปรุง: ระบุว่าใครรับคำขอเพิ่ม component และตกลงกันว่าถ้าใครต้องการของใหม่ จะเสนอเข้าระบบอย่างไร',
          ],
        },
        {
          h: 'ข้อควรระวังและเรื่องภาษาไทย',
          p: [
            'Design system ต้องมีคนดูแล ถ้าไม่มีเจ้าของ มันจะค่อยๆ ล้าสมัยจนทีมกลับไปทำเองเหมือนเดิม และอย่ากำหนดกฎเข้มจนทีมรู้สึกว่าสร้างสรรค์อะไรไม่ได้ ควรเปิดช่องให้มีข้อยกเว้นที่มีเหตุผล แล้วย้อนกลับมาดูว่าข้อยกเว้นไหนควรกลายเป็นส่วนหนึ่งของระบบ',
            'สำหรับผลิตภัณฑ์ที่ใช้ภาษาไทย ควรใส่เรื่องตัวอักษรไทยเข้าไปใน token ตั้งแต่ต้น เช่น ระยะบรรทัดที่เผื่อสระและวรรณยุกต์ และการทดสอบ component กับข้อความไทยที่ยาวจริง ไม่ใช่แค่ข้อความตัวอย่างภาษาอังกฤษ',
          ],
        },
      ],
      takeaways: [
        'Design system คือข้อตกลงร่วมของดีไซเนอร์และนักพัฒนา ไม่ใช่แค่ไฟล์ UI kit',
        'มี 4 ส่วนหลัก: token, component, pattern และเอกสาร',
        'เริ่มจากการสกัดจากงานที่มีอยู่ ไม่ต้องรอระบบสมบูรณ์แบบ',
        'ต้องมีเจ้าของและกระบวนการปรับปรุง ไม่อย่างนั้นระบบจะล้าสมัยเร็ว',
        'ใส่เรื่องการเข้าถึงและตัวอักษรไทยลงใน component ตั้งแต่ต้น จะได้ประโยชน์ทุกหน้า',
      ],
      figCaption: 'ภาพแสดงชั้นของ design system ตั้งแต่ token ขึ้นไปถึง component, pattern และเอกสาร',
      faq: [
        {
          q: 'ทีมเล็กๆ ที่มีดีไซเนอร์คนเดียวจำเป็นต้องมี design system ไหม',
          a: 'ไม่ต้องทำเต็มรูปแบบ แต่การมี token และ component พื้นฐานไม่กี่ตัวช่วยได้มากแล้ว เริ่มจากชุดสีกับตัวอักษรที่ตั้งชื่อชัดเจนและปุ่มกับช่องกรอกที่ใช้ซ้ำได้ แล้วค่อยขยายเมื่อทีมโตขึ้น',
        },
        {
          q: 'ควรใช้ library สำเร็จรูปหรือสร้างเองดี',
          a: 'ขึ้นกับความต้องการของแบรนด์และขนาดทีม หลายทีมเริ่มจาก library ที่มีอยู่แล้วปรับ token ให้เข้ากับแบรนด์ จากนั้นสร้างเองเฉพาะ component ที่เป็นเอกลักษณ์ของผลิตภัณฑ์ วิธีนี้ประหยัดเวลาและยังคงความเป็นตัวเองได้',
        },
        {
          q: 'ต้องใช้เวลานานแค่ไหนกว่าจะเริ่มเห็นประโยชน์',
          a: 'ถ้าเริ่มจากของที่ใช้บ่อยที่สุด ทีมมักเห็นความต่างตั้งแต่ฟีเจอร์ถัดไปที่ใช้ component ร่วมกัน ส่วนระบบที่ครบถ้วนขึ้นเรื่อยๆ ตามการใช้งานจริง ไม่มีเส้นชัยตายตัว',
        },
      ],
    },
    en: {
      title: 'Why Growing Teams Need a Design System, and How to Start in Five Steps',
      excerpt: 'A design system is more than a kit of nice buttons. It is a shared agreement made of tokens, components, patterns and docs. Here is why it matters and where to begin.',
      metaTitle: 'Why Growing Teams Need a Design System',
      metaDescription: 'What a design system is, its four parts (tokens, components, patterns, docs), why growing product teams need one, and how to start in five practical steps.',
      intro: 'With two designers and one website, a team can keep everything consistent just by talking. Once there are several products, several squads and new hires every quarter, the blue button quietly turns into three blues and no two forms look alike. A design system is the fix. This article explains what it is, what it contains, and how a small team can start without pausing its regular work.',
      sections: [
        {
          h: 'What a design system actually is',
          p: [
            'Many people picture a Figma file full of buttons and input fields. That is only the most visible part. A design system is a set of agreements that designers and developers share about colour, type, spacing and behaviour, plus real building blocks that can be picked up in both the design tool and the code.',
            'Think of it as the team vocabulary. When everyone says "primary button" and means the same thing, conversations get shorter. Nobody has to ask which shade or how rounded. The design system is the dictionary for that language.',
          ],
          quote: 'A good system does not make every screen identical; it makes every difference deliberate instead of accidental.',
        },
        {
          h: 'The four parts',
          p: [
            'A working design system usually has four layers. At the bottom are design tokens: named base values such as the main colour, a font size, a spacing step or a corner radius. On top of those sit components like buttons, inputs and cards, built from the tokens.',
            'The third layer is patterns: recommended ways to combine components for situations that come up again and again, such as a sign-up form, an error message or an empty state. The last layer is documentation that says when to use something, when not to, and what a correct example looks like.',
          ],
          list: [
            'Tokens: colour, type, spacing, shadow and radius, named by purpose such as "surface-default" rather than "grey-200".',
            'Components: buttons, inputs, dropdowns and modals with every state covered: default, hover, focus, disabled and error.',
            'Patterns: how to assemble components for repeat jobs like forms, tables and search.',
            'Documentation: usage rules, do and don\'t examples, and accessibility notes.',
          ],
        },
        {
          h: 'Why growing teams start to feel the gap',
          p: [
            'A common sign is designers spending their days redrawing buttons and forms instead of solving user problems. Developers rebuild a button for each new feature because they are not sure where the old one lives. Over time screens drift apart, and fixing them one by one gets more tiring.',
            'The benefits teams notice tend to be qualitative. Handoff between design and code is smoother, new people understand the product sooner, reviews focus on user problems instead of shades of blue, and when the brand changes or dark mode arrives, editing a token once flows through every screen.',
            'One benefit is often overlooked: accessibility. If a single button component already meets contrast guidance and works with a keyboard, every page that uses it inherits that quality.',
          ],
        },
        {
          h: 'Start in five steps',
          p: [
            'The classic mistake is trying to build a perfect system before using it, which takes so long that the team loses energy. A better way is to extract the system from work already in progress and grow it as real needs appear.',
            'The sequence below suits small and mid-sized teams, and it can run alongside normal feature work without stopping a project.',
          ],
          list: [
            'Step 1, audit what exists: screenshot every main screen and group the buttons, colours and type styles that are duplicates or near-duplicates. The inconsistency becomes obvious.',
            'Step 2, define base tokens: pick the colours, type sizes and spacing steps you will really use, name them by purpose, and store them as variables in both design and code.',
            'Step 3, build the most used components first: usually buttons, inputs and cards. Cover every state and test with a keyboard from day one.',
            'Step 4, write short docs: say when to use each component, when not to, and show an example. A short page people read beats a long one nobody opens.',
            'Step 5, assign an owner and a process: decide who accepts requests for new components and how anyone can propose an addition.',
          ],
        },
        {
          h: 'Pitfalls, and a note on Thai',
          p: [
            'A design system needs maintainers. Without an owner it slowly goes stale and teams drift back to doing their own thing. Equally, rules that are too strict make people feel they cannot create anything, so allow reasoned exceptions and review them later to see which should become part of the system.',
            'For products that use Thai, put Thai typography into the tokens from the start: line height that leaves room for stacked vowels and tone marks, and components tested with long, realistic Thai text rather than short English placeholders.',
          ],
        },
      ],
      takeaways: [
        'A design system is a shared agreement between designers and developers, not just a UI kit file.',
        'It has four parts: tokens, components, patterns and documentation.',
        'Start by extracting it from existing work instead of waiting for a perfect system.',
        'Give it an owner and a process, or it will go stale quickly.',
        'Build accessibility and Thai typography into components early so every page benefits.',
      ],
      figCaption: 'Diagram of the design system layers, from tokens up to components, patterns and documentation',
      faq: [
        {
          q: 'Does a small team with one designer need a design system?',
          a: 'Not a full one, but a few tokens and basic components already help a lot. Start with named colours and type styles plus reusable buttons and inputs, then expand as the team grows.',
        },
        {
          q: 'Should we use an existing library or build our own?',
          a: 'It depends on brand needs and team size. Many teams start from an existing library, adjust the tokens to match the brand, and build only the components that are unique to their product. That saves time and still feels like your own.',
        },
        {
          q: 'How long before we see the benefit?',
          a: 'If you begin with the most used pieces, the difference often shows up in the very next feature that reuses them. The system keeps growing with real use, so there is no fixed finish line.',
        },
      ],
    },
  },
  {
    slug: 'ux-research',
    cat: 'Design',
    date: '2026-09-16',
    readMin: 10,
    tags: ['UX research', 'user interviews', 'usability testing', 'card sorting', 'A/B testing'],
    related: ['why-design-system-matters', 'accessibility-wcag', 'ai-product-2025'],
    th: {
      title: 'เปรียบเทียบ 8 วิธีทำ User Research และเลือกใช้ตอนไหนดี',
      excerpt: 'สัมภาษณ์ แบบสอบถาม usability test card sorting diary study analytics A/B test และการสังเกตหน้างาน แต่ละวิธีตอบคำถามต่างกัน มาดูว่าควรเลือกอะไรเมื่อไร',
      metaTitle: '8 วิธีทำ User Research และเลือกใช้ให้ถูกงาน',
      metaDescription: 'เปรียบเทียบ 8 วิธีทำ UX research ได้แก่ สัมภาษณ์ แบบสอบถาม usability test card sorting diary study analytics A/B test และการสังเกตหน้างาน พร้อมเคล็ดลับ',
      intro: 'หลายทีมรู้ว่าควรคุยกับผู้ใช้ แต่ติดที่ไม่แน่ใจว่าจะใช้วิธีไหน เพราะวิธีที่เหมาะกับคำถามหนึ่งอาจให้คำตอบที่ไร้ประโยชน์กับอีกคำถามหนึ่งเลย บทความนี้เปรียบเทียบ 8 วิธีที่ใช้กันบ่อย บอกว่าแต่ละวิธีตอบอะไรได้ ข้อจำกัดคืออะไร และถ้าหาผู้ร่วมวิจัยได้ไม่กี่คนจะทำอย่างไรให้ยังได้ข้อมูลที่เชื่อถือได้พอ',
      sections: [
        {
          h: 'เริ่มจากคำถาม ไม่ใช่วิธี',
          p: [
            'ก่อนเลือกวิธี ให้เขียนคำถามที่อยากรู้ให้ชัดก่อน คำถามส่วนใหญ่แบ่งได้เป็นสองแบบ แบบแรกคือ "ทำไม" และ "อย่างไร" เช่น ทำไมลูกค้าถึงทิ้งตะกร้าสินค้า ซึ่งต้องใช้ข้อมูลเชิงคุณภาพ แบบที่สองคือ "เท่าไร" และ "บ่อยแค่ไหน" ซึ่งต้องใช้ข้อมูลเชิงปริมาณ',
            'อีกมิติที่ต้องแยกคือ สิ่งที่ผู้ใช้พูดกับสิ่งที่ผู้ใช้ทำ คนมักตอบแบบสอบถามไม่ตรงกับพฤติกรรมจริง เพราะลืมหรือเกรงใจ ถ้าอยากรู้พฤติกรรมจริง ควรสังเกตหรือดูข้อมูลการใช้งาน ถ้าอยากรู้ความรู้สึกและเหตุผล ควรคุยโดยตรง',
          ],
        },
        {
          h: '4 วิธีแรก: คุยและทดสอบกับคน',
          p: [
            'การสัมภาษณ์ผู้ใช้เหมาะกับช่วงที่ยังไม่แน่ใจว่าปัญหาจริงคืออะไร ใช้เวลาประมาณครึ่งชั่วโมงถึงหนึ่งชั่วโมงต่อคน ให้ถามเรื่องประสบการณ์ในอดีต เช่น "ครั้งล่าสุดที่คุณสั่งอาหารผ่านแอปเป็นอย่างไร" มากกว่าถามความเห็นสมมติ ข้อจำกัดคือได้เสียงจากคนไม่กี่คน จึงไม่ควรเอาไปสรุปเป็นสัดส่วนของผู้ใช้ทั้งหมด',
            'แบบสอบถามช่วยเก็บข้อมูลจากคนจำนวนมากด้วยต้นทุนต่ำ เหมาะกับการยืนยันสิ่งที่ได้จากการสัมภาษณ์ แต่ถ้าเขียนคำถามไม่ดีจะได้คำตอบที่เบี้ยว Usability test คือให้ผู้ใช้ลองทำงานจริงบนต้นแบบหรือผลิตภัณฑ์ แล้วเราดูว่าติดตรงไหน ส่วน card sorting ให้ผู้ใช้จัดกลุ่มหัวข้อเนื้อหาเอง เหมาะกับการออกแบบเมนูและโครงสร้างข้อมูล',
          ],
          list: [
            'สัมภาษณ์: ใช้เมื่อต้องเข้าใจเหตุผลและบริบท ข้อจำกัดคือจำนวนคนน้อย',
            'แบบสอบถาม: ใช้เมื่อต้องการภาพกว้างหรือยืนยันสมมติฐาน ข้อจำกัดคือขึ้นกับคุณภาพคำถาม',
            'Usability test: ใช้เมื่อมีต้นแบบแล้วอยากรู้ว่าติดตรงไหน ข้อจำกัดคือบอกว่า "ติดตรงไหน" แต่ไม่ได้บอกเสมอว่า "คนทั่วไปติดบ่อยแค่ไหน"',
            'Card sorting: ใช้เมื่อออกแบบโครงสร้างเมนูหรือหมวดหมู่ ข้อจำกัดคือไม่ได้บอกว่าผู้ใช้จะหาของพบจริงหรือไม่ ควรตามด้วยการทดสอบการค้นหา',
          ],
        },
        {
          h: '4 วิธีหลัง: ดูพฤติกรรมในชีวิตจริง',
          p: [
            'Diary study ให้ผู้ใช้บันทึกประสบการณ์ของตัวเองเป็นช่วงๆ เช่น หนึ่งสัปดาห์ เหมาะกับพฤติกรรมที่เกิดนอกเวลานัดสัมภาษณ์ เช่น การจัดการเงินรายวันหรือการใช้แอปส่งของ ข้อเสียคือผู้ร่วมวิจัยต้องใช้ความอดทนและมีคนหลุดกลางทาง การทบทวน analytics คือการดูข้อมูลที่ระบบเก็บอยู่แล้ว เช่น หน้าไหนคนออกมาก เหมาะกับการหาว่า "เกิดอะไรขึ้นที่ไหน" แต่ไม่บอกว่า "ทำไม"',
            'A/B test เปรียบเทียบสองเวอร์ชันกับผู้ใช้จริงเพื่อดูว่าอันไหนให้ผลดีกว่าตามเป้าหมายที่ตั้งไว้ ต้องมีผู้ใช้มากพอและเวลาพอ ถ้าทราฟฟิกน้อย ผลมักไม่นิ่ง ส่วน field observation คือไปดูผู้ใช้ทำงานในสถานที่จริง เช่น ร้านค้า คลินิก หรือโกดัง เห็นสิ่งที่ผู้ใช้ไม่เคยคิดจะเล่า เช่น ใบจดบันทึกที่แปะข้างจอเพราะระบบใช้ยาก',
          ],
          quote: 'คำตอบที่ผู้ใช้พูดกับสิ่งที่ผู้ใช้ทำ มักไม่ตรงกันเสมอ จึงควรมีทั้งสองอย่างในมือ',
        },
        {
          h: 'จะเลือกวิธีไหนดี',
          p: [
            'ถ้ายังไม่รู้ว่าปัญหาคืออะไร ให้เริ่มจากสัมภาษณ์ หรือสังเกตหน้างาน ถ้ามีต้นแบบแล้วและอยากรู้ว่าใช้งานติดตรงไหน ให้ทำ usability test ถ้าสงสัยเรื่องโครงสร้างเมนู ให้ทำ card sorting และถ้าผลิตภัณฑ์ออกไปแล้วและมีผู้ใช้มากพอ ให้ดู analytics เพื่อหาจุดที่ผิดปกติ แล้วค่อยใช้ A/B test พิสูจน์ว่าวิธีแก้ได้ผล',
            'วิธีที่ทีมหลายแห่งใช้ได้ผลคือผสมสองแบบ ใช้ข้อมูลเชิงปริมาณบอกว่าปัญหาอยู่ตรงไหน ใช้ข้อมูลเชิงคุณภาพอธิบายว่าทำไม แล้วย้อนกลับมาวัดอีกครั้งหลังแก้',
          ],
        },
        {
          h: 'เคล็ดลับเมื่อมีผู้ร่วมวิจัยไม่กี่คน',
          p: [
            'ไม่จำเป็นต้องมีผู้ใช้เป็นร้อยถึงจะเริ่มได้ สำหรับ usability test แบบเจาะปัญหา การทดสอบกับห้าคนในแต่ละกลุ่มผู้ใช้มักเผยปัญหาหลักๆ ได้แล้วในหลายโปรเจกต์ แต่นี่เป็นแนวทางคร่าวๆ ไม่ใช่กฎตายตัว ถ้าผู้ใช้ต่างกันมาก เช่น ลูกค้าทั่วไปกับเจ้าหน้าที่หลังบ้าน ควรทดสอบแยกกลุ่ม',
            'ทำเป็นรอบเล็กๆ ดีกว่าทำรอบเดียวใหญ่ๆ ทดสอบสามถึงห้าคน แก้ปัญหา แล้วทดสอบรอบต่อไป และอย่ารายงานเป็นเปอร์เซ็นต์เมื่อมีคนไม่กี่คน ให้เล่าเป็นเรื่องที่เห็นและระบุว่ากี่คนจากกี่คน จัดคนที่ตรงกับกลุ่มเป้าหมายจริง คุยกับเพื่อนร่วมทีมแล้วให้ผลที่เอนเอียงมาก',
          ],
        },
      ],
      takeaways: [
        'เริ่มจากคำถามที่อยากรู้ แล้วค่อยเลือกวิธี ไม่ใช่เลือกวิธีก่อน',
        'ข้อมูลเชิงคุณภาพตอบว่า "ทำไม" ส่วนเชิงปริมาณตอบว่า "เท่าไร"',
        'สิ่งที่ผู้ใช้พูดกับสิ่งที่ผู้ใช้ทำอาจไม่ตรงกัน ควรใช้ทั้งสองอย่าง',
        'ผู้ร่วมวิจัยไม่กี่คนก็เริ่มได้ ทำเป็นรอบเล็กๆ และไม่สรุปเป็นเปอร์เซ็นต์',
        'ผสมวิธีเข้าด้วยกัน เช่น analytics หาจุดปัญหา สัมภาษณ์อธิบายสาเหตุ แล้ววัดซ้ำหลังแก้',
      ],
      figCaption: 'ตารางเปรียบเทียบ 8 วิธีทำ user research ตามคำถามที่ตอบได้และข้อจำกัด',
      faq: [
        {
          q: 'ควรสัมภาษณ์ผู้ใช้กี่คนถึงจะพอ',
          a: 'ไม่มีตัวเลขตายตัว หลายทีมสัมภาษณ์ประมาณห้าถึงแปดคนต่อกลุ่มผู้ใช้ แล้วหยุดเมื่อเริ่มได้ยินเรื่องเดิมซ้ำๆ ถ้ากลุ่มผู้ใช้ต่างกันชัด ให้แยกสัมภาษณ์เป็นกลุ่ม',
        },
        {
          q: 'ทำ A/B test ได้ไหมถ้าเว็บมีผู้เข้าชมน้อย',
          a: 'ทำได้แต่ผลมักไม่นิ่ง ถ้าทราฟฟิกน้อย การทำ usability test กับคนไม่กี่คนและแก้ปัญหาที่เห็นชัดมักคุ้มกว่า เก็บ A/B test ไว้เมื่อมีผู้ใช้มากพอ',
        },
        {
          q: 'ไม่มีงบทำวิจัย เริ่มอย่างไรดี',
          a: 'เริ่มจากสิ่งที่มีอยู่ เช่น ดูข้อความที่ลูกค้าส่งเข้ามาทาง LINE หรืออีเมล คุยกับลูกค้าจริงสามถึงห้าคนครึ่งชั่วโมง และนั่งดูพวกเขาลองใช้งานโดยไม่ช่วยตอบ แค่นี้ก็ได้ข้อมูลที่เปลี่ยนการตัดสินใจได้แล้ว',
        },
      ],
    },
    en: {
      title: 'Eight User Research Methods Compared, and When to Use Each',
      excerpt: 'Interviews, surveys, usability tests, card sorting, diary studies, analytics, A/B tests and field observation each answer different questions. Here is how to choose.',
      metaTitle: '8 User Research Methods and When to Use Each',
      metaDescription: 'Eight UX research methods compared: interviews, surveys, usability tests, card sorting, diary studies, analytics, A/B tests, field work, and small-sample tips.',
      intro: 'Most teams know they should talk to users but are unsure which method to pick, and a method that suits one question can be useless for another. This article compares eight common methods, says what each can and cannot tell you, and shows how to keep your findings trustworthy when you can only reach a handful of participants.',
      sections: [
        {
          h: 'Start with the question, not the method',
          p: [
            'Before choosing a method, write down what you want to know. Most questions fall into two families. "Why" and "how" questions, such as why customers abandon a cart, need qualitative data. "How many" and "how often" questions need quantitative data.',
            'Separate what people say from what people do. Survey answers often differ from real behaviour because people forget or want to be polite. If you need actual behaviour, observe it or read usage data. If you need feelings and reasons, talk to people directly.',
          ],
        },
        {
          h: 'Four methods where you talk to people or test with them',
          p: [
            'User interviews suit the early stage, when you are not sure what the real problem is. Plan for thirty to sixty minutes each and ask about past experience ("Tell me about the last time you ordered food through an app") rather than hypothetical opinions. The limit is that you hear from only a few people, so do not turn the results into percentages of your whole user base.',
            'Surveys reach many people cheaply and work well for confirming what interviews suggested, though badly written questions produce skewed answers. A usability test asks people to complete real tasks on a prototype or live product while you watch where they struggle. Card sorting lets people group content topics in their own way, which helps with menus and information structure.',
          ],
          list: [
            'Interviews: use for reasons and context. Limit: small number of voices.',
            'Surveys: use for a broad picture or to confirm a hunch. Limit: only as good as the questions.',
            'Usability tests: use once you have a prototype. Limit: show where people get stuck but not always how common it is.',
            'Card sorting: use when designing menus or categories. Limit: does not prove people will find things, so follow with a findability test.',
          ],
        },
        {
          h: 'Four methods that show real-life behaviour',
          p: [
            'A diary study asks participants to log their own experience over a period such as a week. It fits behaviour that happens outside a scheduled session, like daily money management or using a delivery app. The cost is participant effort and some drop-outs. An analytics review looks at data your product already collects, such as which page people leave most. It tells you what happened and where, but not why.',
            'An A/B test compares two versions with real users to see which does better against a goal you set in advance. It needs enough users and enough time; with low traffic the result usually wobbles. Field observation means watching people work in their own place, such as a shop, a clinic or a warehouse. You see things nobody thinks to mention, like a sticky note on a monitor because the system is hard to use.',
          ],
          quote: 'What users say and what users do rarely match, so keep both in your hands.',
        },
        {
          h: 'Choosing between them',
          p: [
            'If you do not yet know what the problem is, start with interviews or field observation. If you have a prototype and want to find where it breaks, run usability tests. If the menu structure worries you, try card sorting. Once the product is live and busy enough, review analytics to spot anomalies, then use an A/B test to prove a fix works.',
            'Many teams get the best results by pairing the two kinds of data: quantitative data shows where the problem is, qualitative data explains why, and a second round of measurement checks the fix.',
          ],
        },
        {
          h: 'Small-sample tips',
          p: [
            'You do not need hundreds of participants to begin. For problem-finding usability tests, five people per user group often reveals the main issues in many projects. Treat that as a rough guide, not a rule. When user groups differ a lot, such as shoppers and back-office staff, test them separately.',
            'Run small rounds rather than one big study: test three to five people, fix what you found, then test again. Avoid reporting percentages from a handful of people; describe what you saw and say how many of how many. Recruit people who match your real audience, because colleagues give very biased results.',
          ],
        },
      ],
      takeaways: [
        'Start from the question you need answered, then pick the method.',
        'Qualitative methods answer "why"; quantitative methods answer "how many".',
        'What people say and what they do can differ, so use both kinds of evidence.',
        'A few participants is enough to start: run small rounds and avoid percentages.',
        'Combine methods: analytics to find the problem, interviews to explain it, then measure again.',
      ],
      figCaption: 'Comparison table of eight user research methods by the questions they answer and their limits',
      faq: [
        {
          q: 'How many interviews are enough?',
          a: 'There is no fixed number. Many teams talk to roughly five to eight people per user group and stop when they keep hearing the same things. If groups differ clearly, interview them separately.',
        },
        {
          q: 'Can we run an A/B test on a low-traffic site?',
          a: 'You can, but results usually wobble. With low traffic, usability tests with a few people and fixing the obvious problems is often a better use of time. Save A/B tests for when you have enough visitors.',
        },
        {
          q: 'We have no research budget. Where do we start?',
          a: 'Use what you already have: read the messages customers send through LINE or email, talk to three to five real customers for half an hour each, and watch them try your product without helping. That alone can change decisions.',
        },
      ],
    },
  },
  {
    slug: 'thai-typography',
    cat: 'Design',
    date: '2026-09-02',
    readMin: 9,
    tags: ['Thai typography', 'Thai fonts', 'line height', 'web typography', 'Thai UI design'],
    related: ['why-design-system-matters', 'accessibility-wcag', 'ux-research'],
    th: {
      title: 'ออกแบบตัวอักษรไทยให้อ่านง่าย ระยะบรรทัด การตัดคำ และการจับคู่ฟอนต์',
      excerpt: 'ตัวอักษรไทยมีสระและวรรณยุกต์ซ้อนกัน ไม่เว้นวรรคระหว่างคำ และดูเล็กกว่าอังกฤษที่ขนาดเท่ากัน มาดูหลักออกแบบที่ช่วยให้อ่านสบายตา',
      metaTitle: 'หลักออกแบบตัวอักษรไทยบนเว็บและแอปให้อ่านง่าย',
      metaDescription: 'แนวทางออกแบบ typography ภาษาไทย ทั้งระยะบรรทัดสำหรับสระและวรรณยุกต์ การตัดคำ การจับคู่ฟอนต์ไทยกับละติน ขนาด น้ำหนัก ตัวเลข และข้อผิดพลาดที่พบบ่อย',
      intro: 'ตัวอักษรไทยไม่ได้เหมือนภาษาอังกฤษที่แค่เปลี่ยนฟอนต์แล้วจบ เรามีสระบนล่าง วรรณยุกต์ที่ซ้อนอยู่เหนือสระ และข้อความที่เขียนติดกันโดยไม่เว้นวรรคระหว่างคำ ถ้านำค่าที่ตั้งไว้สำหรับอักษรละตินมาใช้ตรงๆ ผลที่ได้คือบรรทัดอึดอัด วรรณยุกต์ชนกับบรรทัดบน หรือข้อความขาดกลางคำ บทความนี้รวบรวมหลักที่ทีมออกแบบเว็บและแอปควรรู้',
      sections: [
        {
          h: 'ระยะบรรทัดต้องเผื่อสระและวรรณยุกต์',
          p: [
            'อักษรไทยมีส่วนที่ยื่นขึ้นและลงจากแนวฐานมากกว่าละติน เช่น สระอิ สระอี ที่อยู่เหนือพยัญชนะ แล้วยังมีไม้เอกและไม้โทซ้อนอยู่ข้างบนอีกชั้น รวมถึงสระอุ สระอู ที่ห้อยลงล่าง ถ้าระยะบรรทัดแน่นเกินไป ส่วนเหล่านี้จะชนกับบรรทัดข้างเคียงและอ่านยาก',
            'โดยทั่วไปเนื้อหายาวภาษาไทยมักต้องการ line-height ประมาณ 1.5 ถึง 1.8 เท่าของขนาดตัวอักษร ซึ่งหลวมกว่าที่นิยมใช้กับอังกฤษ ส่วนหัวข้อขนาดใหญ่ลดลงได้ แต่ควรทดสอบกับคำที่มีวรรณยุกต์ซ้อนจริง เช่น "ผู้ใหญ่" "กี่" "น้ำ" อย่าทดสอบแค่คำสั้นๆ',
          ],
          list: [
            'เนื้อความยาว: เริ่มทดลองที่ line-height ประมาณ 1.6 แล้วปรับตามฟอนต์',
            'หัวข้อใหญ่: ลดได้บ้าง แต่ต้องดูว่าสระบนและล่างไม่ชนบรรทัดข้างเคียง',
            'ปุ่มและ label บรรทัดเดียว: อย่ากำหนดความสูงตายตัวจนตัดสระหรือวรรณยุกต์',
          ],
        },
        {
          h: 'ไม่มีช่องว่างระหว่างคำ แล้วตัดบรรทัดอย่างไร',
          p: [
            'ภาษาไทยเว้นวรรคตามประโยคหรือวลี ไม่ได้เว้นระหว่างคำ เบราว์เซอร์สมัยใหม่ส่วนใหญ่มีพจนานุกรมสำหรับตัดคำไทยอยู่แล้ว ถ้าตั้ง attribute lang="th" ให้ถูกต้อง ข้อความจะขึ้นบรรทัดใหม่ตามขอบเขตคำได้ในหลายกรณี แต่ผลอาจต่างกันเล็กน้อยระหว่างเบราว์เซอร์และอุปกรณ์',
            'ปัญหาที่พบบ่อยคือข้อความในพื้นที่แคบ เช่น ปุ่ม การ์ด หรือหน้าจอมือถือ ที่คำถูกตัดกลางแล้วอ่านเพี้ยน ถ้าต้องควบคุมจริงจัง ให้แทรกตัวอักษรความกว้างศูนย์ (zero-width space) ในตำแหน่งที่อนุญาตให้ขึ้นบรรทัดใหม่ หรือใช้การตัดคำฝั่งเซิร์ฟเวอร์สำหรับข้อความที่มาจากระบบ และอย่าลืมทดสอบกับข้อความยาวที่ไม่มีที่เว้นเลย',
          ],
          quote: 'ตัวอักษรที่ดีคือตัวอักษรที่ผู้อ่านไม่ต้องคิดถึงมันเลย',
        },
        {
          h: 'จับคู่ฟอนต์ไทยกับละติน',
          p: [
            'ผลิตภัณฑ์ส่วนใหญ่ต้องแสดงทั้งไทยและอังกฤษในหน้าเดียวกัน ถ้าใช้ฟอนต์ละตินที่สวยแต่ไม่มีอักษรไทย ระบบจะดึงฟอนต์สำรองมาใช้โดยอัตโนมัติ ซึ่งมักมีน้ำหนัก ขนาด และสัดส่วนไม่เข้ากัน จึงควรเลือกฟอนต์ไทยเองและจัดลำดับ fallback ให้ชัดเจน',
            'ทางลัดที่ปลอดภัยคือเลือกตระกูลฟอนต์ที่ออกแบบชุดไทยและละตินมาด้วยกัน เช่น Noto Sans Thai, IBM Plex Sans Thai หรือ Sarabun แต่ถ้าจะจับคู่ฟอนต์ต่างตระกูล ให้ดูที่ความสูงตัวพิมพ์เล็ก น้ำหนักเส้น และความรู้สึกโดยรวม แล้วทดลองวางข้อความผสมไทยอังกฤษในประโยคเดียวกัน',
          ],
        },
        {
          h: 'ขนาด น้ำหนัก และตัวเลข',
          p: [
            'ที่ขนาดเท่ากัน อักษรไทยมักดูเล็กกว่าละติน เพราะตัวพยัญชนะมีความสูงช่วงลำตัวต่ำกว่า ดังนั้นเนื้อความภาษาไทยบนหน้าจอควรขยับขึ้นอีกหนึ่งถึงสองพิกเซลเมื่อเทียบกับอังกฤษ หลายทีมเริ่มที่ 16 พิกเซลขึ้นไป และไม่ควรเล็กกว่านี้สำหรับเนื้อความหลัก',
            'เรื่องน้ำหนัก เส้นบางมากๆ ทำให้สระและวรรณยุกต์เล็กๆ หายไปบนจอความละเอียดต่ำ ควรใช้น้ำหนักปกติสำหรับเนื้อความ และหลีกเลี่ยงตัวบางบนพื้นหลังสี ส่วนตัวเลข ผลิตภัณฑ์ดิจิทัลส่วนใหญ่ใช้เลขอารบิก เช่น ราคา วันที่ และเบอร์โทร เพราะผู้ใช้คุ้นเคยและสแกนอ่านง่าย เลขไทยเหมาะกับบริบทเฉพาะ เช่น งานเอกสารพิธีการ ถ้าใช้ควรใช้ให้สม่ำเสมอทั้งหน้า',
          ],
        },
        {
          h: 'ข้อผิดพลาดที่พบบ่อย',
          p: [
            'ข้อผิดพลาดอันดับต้นๆ คือออกแบบด้วยข้อความละตินสมมติ แล้วค่อยแทนด้วยภาษาไทยตอนท้าย ทำให้ความสูงของปุ่ม การ์ด และหัวข้อพัง อีกข้อคือจัดข้อความแบบชิดสองข้าง (justify) ซึ่งในภาษาไทยทำให้ช่องไฟกระโดดเพราะไม่มีช่องว่างระหว่างคำให้ปรับ',
            'ข้อที่เหลือคือใช้ตัวเอียงกับตัวหนา ซึ่งหลายฟอนต์ไทยไม่ได้ออกแบบมาให้ดี ใช้ตัวพิมพ์ใหญ่สำหรับละตินแล้วลืมว่าไทยไม่มีแนวคิดนี้ และไม่ทดสอบกับอุปกรณ์จริง การดูบนมือถือสองสามรุ่นก่อนส่งมอบช่วยจับปัญหาได้มาก',
          ],
        },
      ],
      takeaways: [
        'เนื้อความไทยมักต้องการ line-height ราว 1.5 ถึง 1.8 เพื่อเผื่อสระและวรรณยุกต์',
        'ตั้ง lang="th" และทดสอบการตัดบรรทัดในพื้นที่แคบ ใช้ zero-width space เมื่อต้องควบคุม',
        'เลือกฟอนต์ไทยเองและจัด fallback อย่าปล่อยให้ระบบเลือกให้',
        'อักษรไทยดูเล็กกว่าละติน ขยับขนาดขึ้นและใช้น้ำหนักปกติสำหรับเนื้อความ',
        'ออกแบบด้วยข้อความไทยจริงตั้งแต่แรก และหลีกเลี่ยงการจัดชิดสองข้าง',
      ],
      figCaption: 'ภาพเปรียบเทียบระยะบรรทัดแน่นกับหลวมของข้อความไทยที่มีสระและวรรณยุกต์ซ้อนกัน',
      faq: [
        {
          q: 'ใช้ฟอนต์ภาษาอังกฤษสวยๆ กับข้อความไทยได้ไหม',
          a: 'ได้ในแง่ที่ฟอนต์อังกฤษใช้กับตัวอักษรละตินในหน้าเดียวกัน แต่ส่วนที่เป็นไทยต้องมีฟอนต์ไทยกำกับเอง ไม่เช่นนั้นระบบจะใช้ฟอนต์สำรองที่อาจไม่เข้ากัน ลองดูตัวอย่างข้อความผสมก่อนตัดสินใจ',
        },
        {
          q: 'ควรใช้เลขไทยหรือเลขอารบิกบนเว็บ',
          a: 'ผลิตภัณฑ์ส่วนใหญ่ใช้เลขอารบิกเพราะสแกนอ่านง่ายและคุ้นเคย โดยเฉพาะราคา วันที่ และเบอร์โทร เลขไทยเหมาะกับงานที่ต้องการบรรยากาศทางการหรือประเพณี และควรใช้ให้สม่ำเสมอ',
        },
        {
          q: 'ทำไมข้อความไทยของเราขึ้นบรรทัดใหม่กลางคำ',
          a: 'ตรวจว่าตั้ง lang="th" แล้ว และดูว่าพื้นที่แคบเกินไปไหม ถ้ายังเพี้ยน ให้แทรก zero-width space ในจุดที่ตัดได้ หรือจัดการตัดคำฝั่งเซิร์ฟเวอร์สำหรับข้อความที่มาจากระบบ',
        },
      ],
    },
    en: {
      title: 'Designing for Thai Script: Line Height, Line Breaking and Font Pairing',
      excerpt: 'Thai has stacked vowels and tone marks, no spaces between words, and looks smaller than Latin at the same size. These are the typography rules that keep it comfortable to read.',
      metaTitle: 'Thai Typography Guide for Web and App Design',
      metaDescription: 'A practical Thai typography guide: line height for stacked vowels and tone marks, line breaking without word spaces, font pairing with Latin, size and numerals.',
      intro: 'Thai is not a case of swapping the font and moving on. It has vowels above and below the consonant, tone marks stacked over those vowels, and sentences written without spaces between words. Apply settings tuned for Latin script and you get cramped lines, tone marks colliding with the line above, or words split in the wrong place. This article collects what web and app designers should know.',
      sections: [
        {
          h: 'Line height has to leave room for vowels and tone marks',
          p: [
            'Thai letters reach further above and below the baseline than Latin ones. Vowels such as the ones that sit on top of a consonant can carry a tone mark above them, and other vowels hang below. If line spacing is too tight, these marks hit the neighbouring lines and become hard to read.',
            'As a starting point, long Thai body text usually needs a line height of about 1.5 to 1.8 times the font size, looser than the setting often used for English. Large headings can be tighter, but test them with words that really stack marks, not just short, simple ones.',
          ],
          list: [
            'Long body text: start around 1.6 and adjust for the font.',
            'Large headings: you may tighten them, but check that upper and lower vowels do not touch adjacent lines.',
            'Single-line buttons and labels: do not fix a height so tight that it clips vowels or tone marks.',
          ],
        },
        {
          h: 'No spaces between words: how lines break',
          p: [
            'Thai uses spaces between phrases or sentences, not between words. Most modern browsers include a Thai word dictionary, so when the lang="th" attribute is set correctly, text can wrap at word boundaries in many cases. Results can still differ slightly between browsers and devices.',
            'Trouble shows up in narrow spaces such as buttons, cards and phone screens, where a word may split in an awkward spot. When you need firm control, insert a zero-width space at the positions where a break is allowed, or segment text on the server for system-generated content. Always test with long strings that have no natural break point.',
          ],
          quote: 'Good type is type the reader never has to think about.',
        },
        {
          h: 'Pairing Thai with Latin fonts',
          p: [
            'Most products show Thai and English on the same screen. If you choose a handsome Latin font that has no Thai glyphs, the system silently pulls in a fallback font whose weight, size and proportions rarely match. Choose the Thai font deliberately and set the fallback order yourself.',
            'The safe shortcut is a family designed with Thai and Latin together, such as Noto Sans Thai, IBM Plex Sans Thai or Sarabun. If you pair fonts from different families, compare x-height, stroke weight and overall feel, and test a sentence that mixes Thai and English.',
          ],
        },
        {
          h: 'Size, weight and numerals',
          p: [
            'At the same nominal size Thai usually looks smaller than Latin because the main body of the consonants is lower in height. Thai body text on screen often needs one or two more pixels than English, and many teams start at 16 pixels or larger for main content.',
            'On weight, very thin strokes make small vowels and tone marks disappear on low-resolution screens. Use a regular weight for body text and avoid light weights on coloured backgrounds. For numerals, most digital products use Arabic digits for prices, dates and phone numbers because users know them and can scan them quickly. Thai digits suit particular contexts such as formal or ceremonial material; if you use them, be consistent across the page.',
          ],
        },
        {
          h: 'Common mistakes',
          p: [
            'The most common mistake is designing with placeholder Latin text and swapping in Thai at the end, which breaks button heights, cards and headings. Another is justified alignment, which in Thai produces uneven spacing because there are no word gaps to stretch.',
            'Others include relying on italics and bold that many Thai fonts do not render well, using uppercase styling for Latin and forgetting Thai has no such concept, and skipping real-device checks. Looking at a few phones before handoff catches a lot.',
          ],
        },
      ],
      takeaways: [
        'Thai body text usually needs a line height of roughly 1.5 to 1.8 to protect vowels and tone marks.',
        'Set lang="th", test wrapping in narrow spaces, and use zero-width spaces when you need control.',
        'Choose the Thai font yourself and define the fallback order instead of letting the system pick.',
        'Thai looks smaller than Latin: raise the size a little and use regular weight for body text.',
        'Design with real Thai text from the start, and avoid justified alignment.',
      ],
      figCaption: 'Comparison of tight and comfortable line spacing for Thai text with stacked vowels and tone marks',
      faq: [
        {
          q: 'Can I use a stylish English font alongside Thai text?',
          a: 'Yes for the Latin letters, but the Thai portion needs its own chosen font. Otherwise the system supplies a fallback that may not match. Preview mixed Thai and English text before you commit.',
        },
        {
          q: 'Should a website use Thai or Arabic numerals?',
          a: 'Most products use Arabic numerals because they are quick to scan and familiar, especially for prices, dates and phone numbers. Thai numerals fit formal or traditional contexts, and should be used consistently if chosen.',
        },
        {
          q: 'Why does our Thai text break in the middle of a word?',
          a: 'Check that lang="th" is set and whether the container is too narrow. If it still breaks badly, insert zero-width spaces at allowed break points or segment words on the server for system-generated text.',
        },
      ],
    },
  },
  {
    slug: 'accessibility-wcag',
    cat: 'Design',
    date: '2026-08-19',
    readMin: 10,
    tags: ['accessibility', 'WCAG 2.2', 'color contrast', 'keyboard navigation', 'inclusive design'],
    related: ['why-design-system-matters', 'ux-research', 'thai-typography'],
    th: {
      title: 'Accessibility สำหรับเว็บและแอป พื้นฐาน WCAG 2.2 และเช็กลิสต์ที่ทำได้ภายในสัปดาห์นี้',
      excerpt: 'เว็บและแอปที่คนใช้ได้หลากหลายขึ้นไม่ใช่แค่เรื่องกฎหมาย มาดูพื้นฐาน WCAG 2.2 เรื่องคอนทราสต์ คีย์บอร์ด label ขนาดปุ่ม พร้อมเช็กลิสต์ให้ทีมเริ่มได้เลย',
      metaTitle: 'WCAG 2.2 คืออะไร พื้นฐาน Accessibility สำหรับเว็บและแอป',
      metaDescription: 'สรุปพื้นฐาน WCAG 2.2 ทั้งสี่หลักการ คอนทราสต์ คีย์บอร์ด label และขนาดพื้นที่แตะ พร้อมเหตุผลที่ต้องทำทั่วโลกและเช็กลิสต์ที่ทีมทำได้ภายในสัปดาห์นี้',
      intro: 'Accessibility หมายถึงการทำให้คนใช้เว็บและแอปของเราได้หลากหลายที่สุด ไม่ว่าจะมองเห็นไม่ชัด ใช้เมาส์ไม่ได้ ได้ยินไม่ชัด หรือแค่เปิดจอกลางแดด หลายทีมคิดว่าเป็นงานใหญ่ที่ทำทีหลัง แต่ส่วนใหญ่เริ่มได้จากงานเล็กๆ ที่ทำได้ภายในไม่กี่วัน บทความนี้สรุปพื้นฐานของ WCAG 2.2 ซึ่งเป็นแนวทางที่ใช้อ้างอิงกันทั่วโลก พร้อมเช็กลิสต์ที่ทีมลงมือได้ทันที',
      sections: [
        {
          h: 'WCAG 2.2 คืออะไร และสี่หลักการ',
          p: [
            'WCAG ย่อมาจาก Web Content Accessibility Guidelines เป็นแนวทางที่จัดทำโดย W3C เพื่อบอกว่าเนื้อหาเว็บควรเป็นอย่างไรจึงจะใช้ได้กับคนหลากหลาย เวอร์ชัน 2.2 เพิ่มเกณฑ์ใหม่บางข้อต่อจากเวอร์ชันก่อนหน้า เช่น เรื่องขนาดพื้นที่แตะและการช่วยเหลือผู้ใช้ที่ใช้งานฟอร์มยาก เกณฑ์แบ่งเป็นระดับ A, AA และ AAA โดยหลายองค์กรตั้งเป้าที่ระดับ AA',
            'โครงสร้างทั้งหมดอยู่บนสี่หลักการที่จำง่าย คือ Perceivable ผู้ใช้รับรู้เนื้อหาได้ Operable ผู้ใช้ควบคุมได้ Understandable ผู้ใช้เข้าใจได้ และ Robust เนื้อหาทำงานได้กับเบราว์เซอร์และเทคโนโลยีช่วยเหลือหลากหลาย',
          ],
          list: [
            'Perceivable: ข้อความทางเลือกสำหรับภาพ คำบรรยายสำหรับวิดีโอ และคอนทราสต์ที่เพียงพอ',
            'Operable: ใช้งานด้วยคีย์บอร์ดได้ มีเวลาอ่านเพียงพอ และไม่มีสิ่งที่กะพริบจนเป็นอันตราย',
            'Understandable: ภาษาชัดเจน พฤติกรรมคาดเดาได้ และข้อความ error ที่บอกวิธีแก้',
            'Robust: ใช้ HTML ที่ถูกความหมายเพื่อให้ screen reader และเครื่องมืออื่นตีความได้',
          ],
        },
        {
          h: 'คอนทราสต์ และการไม่พึ่งสีอย่างเดียว',
          p: [
            'ข้อความต้องมีความต่างระหว่างสีตัวอักษรกับพื้นหลังมากพอ เกณฑ์ระดับ AA กำหนดอัตราส่วนอย่างน้อย 4.5 ต่อ 1 สำหรับข้อความทั่วไป และ 3 ต่อ 1 สำหรับข้อความขนาดใหญ่ รวมถึงองค์ประกอบ UI เช่น เส้นขอบของช่องกรอกและไอคอนที่สื่อความหมาย เครื่องมือตรวจคอนทราสต์ฟรีมีให้ใช้มากมาย ทั้งใน Figma และเบราว์เซอร์',
            'อย่าใช้สีเป็นตัวสื่อสารเพียงอย่างเดียว เช่น ช่องที่กรอกผิดแสดงเป็นสีแดงอย่างเดียว ผู้ที่มองสีไม่ครบจะไม่เห็นความต่าง ควรเพิ่มไอคอนหรือข้อความอธิบายด้วย',
          ],
          quote: 'ถ้าทางลาดช่วยคนเข็นรถเข็น และคนถือของหนักด้วย accessibility ที่ดีก็ช่วยเราทุกคนในวันที่ไม่สะดวก',
        },
        {
          h: 'คีย์บอร์ด และการโฟกัส',
          p: [
            'ผู้ใช้จำนวนไม่น้อยใช้คีย์บอร์ด สวิตช์ หรืออุปกรณ์เสริมแทนเมาส์ ทดสอบง่ายๆ คือวางเมาส์ไว้ข้างๆ แล้วใช้ปุ่ม Tab เดินผ่านทั้งหน้า ทุกลิงก์ ปุ่ม และช่องกรอกต้องเข้าถึงได้ ลำดับต้องสมเหตุสมผล และต้องเห็นชัดว่าตอนนี้โฟกัสอยู่ที่ไหน',
            'อย่าลบเส้นโฟกัส (focus outline) โดยไม่มีของใหม่มาแทน และระวัง modal กับเมนูแบบเลื่อนลงที่โฟกัสหลุดออกไปหลังหน้าจอ WCAG 2.2 ยังเพิ่มเรื่องที่โฟกัสไม่ควรถูกบังโดยองค์ประกอบที่ลอยอยู่ เช่น แถบ header ติดบนหน้า',
          ],
        },
        {
          h: 'Label ข้อความทางเลือก และขนาดพื้นที่แตะ',
          p: [
            'ช่องกรอกทุกช่องต้องมี label ที่เชื่อมกับช่องนั้นจริงๆ ด้วยแท็ก label หรือ aria-label ไม่ใช่แค่ placeholder ซึ่งหายไปทันทีที่พิมพ์ ภาพที่สื่อความหมายต้องมีข้อความทางเลือก ส่วนภาพตกแต่งควรให้ alt เป็นค่าว่างเพื่อให้ screen reader ข้ามไป',
            'เรื่องขนาดพื้นที่แตะ WCAG 2.2 ระดับ AA กำหนดขั้นต่ำประมาณ 24 คูณ 24 พิกเซล CSS สำหรับเป้าหมายที่แตะได้ โดยมีข้อยกเว้นบางกรณี แนวปฏิบัติของแพลตฟอร์มมือถือมักแนะนำขนาดใหญ่กว่านั้น เพราะนิ้วมือไม่แม่นเท่าเมาส์ จึงควรเผื่อระยะห่างระหว่างปุ่มด้วย',
          ],
        },
        {
          h: 'ทำไมเรื่องนี้สำคัญทั่วโลก และเช็กลิสต์สัปดาห์นี้',
          p: [
            'หลายประเทศมีกฎหมายหรือข้อกำหนดที่เกี่ยวกับการเข้าถึงดิจิทัล ตัวอย่างที่พูดถึงบ่อยคือ European Accessibility Act ของสหภาพยุโรป ซึ่งโดยทั่วไปครอบคลุมผลิตภัณฑ์และบริการดิจิทัลหลายประเภทที่ขายให้ผู้บริโภคในยุโรป ถ้าธุรกิจของคุณมีลูกค้าหรือแผนขยายไปต่างประเทศ ควรตรวจกับที่ปรึกษากฎหมายว่าข้อกำหนดใดเกี่ยวข้อง นอกจากนี้ ประชากรสูงวัยในหลายประเทศ รวมถึงไทย ก็ทำให้ผู้ใช้ที่ต้องการตัวอักษรชัดและปุ่มใหญ่เพิ่มขึ้น',
            'เช็กลิสต์ด้านล่างทีมเริ่มได้ในสัปดาห์นี้ ไม่ต้องรอโปรเจกต์ใหญ่',
          ],
          list: [
            'ตรวจคอนทราสต์ของสีหลักและข้อความบนปุ่ม ด้วยเครื่องมือตรวจฟรี',
            'ใช้ Tab เดินผ่านหน้าสำคัญสามหน้า แล้วจดว่าติดตรงไหน',
            'ตรวจว่าทุกช่องกรอกมี label จริง ไม่ใช่แค่ placeholder',
            'เพิ่ม alt ให้ภาพที่สื่อความหมาย และปล่อยว่างสำหรับภาพตกแต่ง',
            'ตรวจว่าเส้นโฟกัสมองเห็นชัดและไม่ถูกลบ',
            'ปรับปุ่มและลิงก์บนมือถือให้พื้นที่แตะไม่เล็กเกินไป',
            'ตรวจข้อความ error ว่าบอกวิธีแก้ ไม่ใช่แค่สีแดง',
            'ทดลองใช้ screen reader ของเครื่อง เช่น VoiceOver หรือ TalkBack กับหน้า checkout หรือหน้าสมัคร',
          ],
        },
      ],
      takeaways: [
        'WCAG 2.2 ตั้งอยู่บนสี่หลักการ: Perceivable, Operable, Understandable, Robust',
        'ระดับ AA ต้องการคอนทราสต์ 4.5 ต่อ 1 สำหรับข้อความทั่วไป และไม่พึ่งสีอย่างเดียว',
        'ทดสอบคีย์บอร์ดง่ายๆ ด้วยปุ่ม Tab และดูว่าเห็นโฟกัสชัดเจน',
        'ทุกช่องกรอกต้องมี label จริง และพื้นที่แตะบนมือถือควรไม่เล็กเกินไป',
        'เริ่มจากเช็กลิสต์เล็กๆ ในสัปดาห์นี้ แล้วค่อยฝังไว้ใน design system',
      ],
      figCaption: 'ภาพสรุปสี่หลักการของ WCAG พร้อมตัวอย่างการตรวจสอบที่ทีมทำได้เอง',
      faq: [
        {
          q: 'ต้องทำถึงระดับ AA เลยไหม',
          a: 'ระดับ AA เป็นเป้าหมายที่หลายองค์กรและข้อกำหนดอ้างอิง เพราะสมดุลระหว่างประโยชน์และความเป็นไปได้ ถ้ายังใหม่ ให้เริ่มจากข้อที่ทำง่ายและกระทบมาก เช่น คอนทราสต์ label และคีย์บอร์ด แล้วค่อยขยาย',
        },
        {
          q: 'เครื่องมืออัตโนมัติตรวจครบทุกอย่างไหม',
          a: 'ไม่ครบ เครื่องมือช่วยจับปัญหาพื้นฐานได้ เช่น คอนทราสต์หรือ label ที่ขาด แต่หลายเรื่องต้องใช้คนตรวจ เช่น ลำดับการโฟกัสหรือความชัดเจนของข้อความ ควรผสมทั้งสองอย่าง',
        },
        {
          q: 'ธุรกิจในไทยที่ไม่ได้ขายในยุโรปต้องสนใจไหม',
          a: 'ควรสนใจ เพราะผู้ใช้ในไทยก็มีทั้งผู้สูงอายุ ผู้ที่สายตาไม่ดี และคนที่ใช้งานในสภาพแวดล้อมไม่เหมาะ นอกจากนี้ยังช่วยให้ SEO และคุณภาพโค้ดดีขึ้นในหลายกรณี หากมีแผนขยายต่างประเทศ ควรตรวจข้อกำหนดของตลาดนั้นด้วย',
        },
      ],
    },
    en: {
      title: 'Accessibility for Websites and Apps: WCAG 2.2 Basics and a Checklist for This Week',
      excerpt: 'Accessible sites work for more people, and it is not only about the law. Here are the WCAG 2.2 basics on contrast, keyboard, labels and target size, plus a checklist to start now.',
      metaTitle: 'WCAG 2.2 Basics: Web and App Accessibility Guide',
      metaDescription: 'WCAG 2.2 basics in plain terms: the four principles, contrast, keyboard use, labels and target size, why it matters worldwide, and a checklist to do this week.',
      intro: 'Accessibility means making sure as many people as possible can use your website or app, whether they have low vision, cannot use a mouse, struggle to hear, or are simply looking at a phone in bright sun. Many teams treat it as a big job for later, yet much of it starts with small tasks that fit into a few days. This article covers the basics of WCAG 2.2, the reference most of the world uses, and ends with a checklist your team can act on immediately.',
      sections: [
        {
          h: 'What WCAG 2.2 is, and its four principles',
          p: [
            'WCAG stands for Web Content Accessibility Guidelines, published by the W3C to describe how web content can work for a wide range of people. Version 2.2 adds a few criteria to earlier versions, including ones about target size and about helping people who find forms difficult. Criteria are grouped into levels A, AA and AAA, and many organisations aim for AA.',
            'Everything sits on four easy-to-remember principles: Perceivable, meaning people can take in the content; Operable, meaning people can control it; Understandable, meaning people can make sense of it; and Robust, meaning it works across browsers and assistive technology.',
          ],
          list: [
            'Perceivable: text alternatives for images, captions for video, enough contrast.',
            'Operable: works with a keyboard, gives enough time to read, avoids content that flashes dangerously.',
            'Understandable: clear language, predictable behaviour, error messages that explain the fix.',
            'Robust: meaningful HTML so screen readers and other tools can interpret the page.',
          ],
        },
        {
          h: 'Contrast, and not relying on colour alone',
          p: [
            'Text needs enough difference from its background. At level AA the contrast ratio should be at least 4.5 to 1 for regular text and 3 to 1 for large text, and 3 to 1 also applies to UI parts such as input borders and meaningful icons. Free contrast checkers are plentiful, in Figma and in browser tools.',
            'Do not let colour be the only signal. If an invalid field is marked only by turning red, people who cannot distinguish certain colours will miss it. Add an icon or a short message as well.',
          ],
          quote: 'A ramp helps the wheelchair user and the person carrying boxes; good accessibility helps all of us on our less convenient days.',
        },
        {
          h: 'Keyboard and focus',
          p: [
            'Plenty of people use a keyboard, a switch or other hardware instead of a mouse. A quick test: put the mouse aside and press Tab through the whole page. Every link, button and field should be reachable, in a sensible order, and it should be obvious where focus currently is.',
            'Do not remove the focus outline unless you replace it with something just as clear, and watch for modals and dropdown menus that let focus escape behind the screen. WCAG 2.2 also adds that focus should not be hidden by floating elements such as a sticky header.',
          ],
        },
        {
          h: 'Labels, alternatives and target size',
          p: [
            'Every input needs a label truly connected to it, using a label element or aria-label, not just placeholder text that vanishes as soon as someone types. Images that carry meaning need text alternatives, while decorative images should have an empty alt so screen readers skip them.',
            'For target size, WCAG 2.2 at level AA sets a minimum of roughly 24 by 24 CSS pixels for tappable targets, with some exceptions. Mobile platform guidance usually recommends larger, since fingers are less precise than a mouse pointer, so leave breathing room between buttons as well.',
          ],
        },
        {
          h: 'Why it matters worldwide, and a checklist for this week',
          p: [
            'Many countries have laws or rules about digital accessibility. A frequently cited example is the European Accessibility Act, which in general terms covers a range of digital products and services offered to consumers in Europe. If your business has customers abroad or plans to expand, check with legal advisers which rules apply. Beyond law, ageing populations in many countries, Thailand included, mean more people who need clear type and bigger buttons.',
            'The checklist below can start this week without waiting for a large project.',
          ],
          list: [
            'Check contrast on your brand colours and on button text with a free checker.',
            'Tab through your three most important pages and note where you get stuck.',
            'Confirm every input has a real label, not just a placeholder.',
            'Add alt text to meaningful images and leave it empty on decorative ones.',
            'Make sure the focus outline is visible and has not been removed.',
            'Check that buttons and links on mobile have tap areas that are not too small.',
            'Review error messages so they explain the fix and do not rely on red alone.',
            'Try the built-in screen reader, VoiceOver or TalkBack, on your checkout or sign-up page.',
          ],
        },
      ],
      takeaways: [
        'WCAG 2.2 rests on four principles: Perceivable, Operable, Understandable and Robust.',
        'Level AA asks for 4.5 to 1 contrast for regular text and does not rely on colour alone.',
        'Test the keyboard by pressing Tab and make sure focus is clearly visible.',
        'Give every input a real label and keep tap targets from being too small.',
        'Start with a small checklist this week, then build it into your design system.',
      ],
      figCaption: 'Summary of the four WCAG principles with checks a team can run on its own',
      faq: [
        {
          q: 'Do we have to reach level AA?',
          a: 'AA is the level many organisations and regulations refer to because it balances benefit and effort. If you are new to this, start with high-impact, easy fixes like contrast, labels and keyboard use, then widen your scope.',
        },
        {
          q: 'Do automated tools catch everything?',
          a: 'No. Tools find basics such as missing labels or low contrast, but many issues need human judgement, like focus order or whether wording is clear. Use both.',
        },
        {
          q: 'Does a Thai business that does not sell in Europe need to care?',
          a: 'Yes. Users in Thailand include older people, people with low vision and people using phones in poor conditions. It also tends to improve SEO and code quality. If you plan to expand abroad, check the rules of that market too.',
        },
      ],
    },
  },
]
