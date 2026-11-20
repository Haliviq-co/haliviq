import type { Article } from '@/lib/blog-types'

export const tech3Articles: Article[] = [
  {
    slug: 'line-mini-app-guide',
    cat: 'Technology',
    date: '2026-11-18',
    readMin: 8,
    tags: ['LINE MINI App', 'LIFF', 'LINE OA', 'Thailand', 'Mobile'],
    related: ['pwa-vs-native-2026', 'mobile-payments-asean', 'thailand-pdpa-guide'],
    th: {
      title: `LINE MINI App, เว็บไซต์ หรือแอป native: ธุรกิจไทยควรเลือกแบบไหน`,
      excerpt: `เทียบ LINE MINI App กับเว็บและแอป native ว่าเหมาะกับงานแบบไหน ทำอะไรได้บ้าง ต่างกันอย่างไรระหว่าง verified กับ unverified และขั้นตอนขออนุมัติในไทย`,
      metaTitle: `LINE MINI App คืออะไร เทียบเว็บและแอป สำหรับธุรกิจไทย`,
      metaDescription: `LINE MINI App เหมาะกับธุรกิจแบบไหน ทำบัตรสมาชิก จองคิว สั่งอาหาร แจกคูปองได้อย่างไร verified ต่างจาก unverified ตรงไหน และขั้นตอนขออนุมัติบน LIFF ในไทย`,
      intro: `คนไทยใช้ LINE ราว 54-56 ล้านคน ลูกค้าของคุณจึงอยู่ในแอปนี้แทบทุกวันอยู่แล้ว คำถามที่เจ้าของธุรกิจถามเราบ่อยคือ ควรทำ LINE MINI App ทำเว็บ หรือลงทุนทำแอปของตัวเอง บทความนี้ช่วยเทียบแบบตรงไปตรงมา พร้อมเล่าว่า MINI App ทำอะไรได้ และต้องผ่านขั้นตอนอะไรบ้างในไทย`,
      sections: [
        {
          h: `LINE MINI App คืออะไร และต่างจาก LINE OA อย่างไร`,
          p: [
            `LINE OA คือบัญชีทางการที่ใช้แชต บรอดแคสต์ และทำ rich menu ส่วน LINE MINI App คือเว็บแอปที่เปิดอยู่ข้างในแอป LINE ลูกค้าไม่ต้องดาวน์โหลดอะไรเพิ่ม กดลิงก์หรือปุ่มใน rich menu ก็เข้าใช้ได้ทันที และระบบดึงข้อมูลโปรไฟล์ LINE มาใช้ได้เมื่อผู้ใช้อนุญาต จึงไม่ต้องให้ลูกค้าสมัครสมาชิกใหม่`,
            `ในทางเทคนิค MINI App สร้างบน LIFF (LINE Front-end Framework) ซึ่งก็คือเว็บที่เขียนด้วย HTML, CSS และ JavaScript ตามปกติ บวกกับ SDK ที่ให้เรียกความสามารถของ LINE ได้ เช่น ดึงโปรไฟล์ ส่งข้อความเข้าแชต หรือเปิดกล้องสแกน QR ทีมเว็บทั่วไปจึงพัฒนาได้โดยไม่ต้องเรียนภาษาใหม่`,
          ],
        },
        {
          h: `เมื่อไรควรเลือก MINI App เว็บ หรือแอป native`,
          p: [
            `ไม่มีตัวเลือกไหนดีที่สุดเสมอ ขึ้นกับว่าลูกค้าเจอคุณที่ไหนและใช้บ่อยแค่ไหน ถ้าลูกค้าส่วนใหญ่คุยกับร้านผ่าน LINE OA อยู่แล้ว เช่น คลินิกความงาม ร้านอาหาร หรือร้านค้าปลีก MINI App มักคุ้มที่สุด เพราะต่อยอดจากช่องทางที่มีอยู่ ไม่ต้องจ่ายค่าโฆษณาให้คนโหลดแอป`,
            `เว็บไซต์ยังจำเป็นสำหรับคนที่หาคุณจาก Google หรือ AI search และสำหรับลูกค้าต่างชาติที่ไม่ได้ใช้ LINE ส่วนแอป native คุ้มเมื่อผู้ใช้ใช้ทุกวัน ต้องใช้ฟีเจอร์ลึกของเครื่อง หรือแบรนด์ต้องการพื้นที่ของตัวเองเต็มๆ เช่น แอปธนาคารหรือแอปฟิตเนสที่ซิงก์กับอุปกรณ์`,
          ],
          list: [
            `เลือก MINI App เมื่อลูกค้าอยู่ใน LINE อยู่แล้ว และงานหลักคือสมาชิก จอง สั่ง หรือแลกคูปอง`,
            `เลือกเว็บไซต์เมื่อต้องการให้คนค้นเจอ ขายของออนไลน์แบบเปิด หรือมีลูกค้าต่างชาติ`,
            `เลือกแอป native เมื่อใช้งานถี่มาก ต้องใช้ฟีเจอร์เครื่องเชิงลึก หรือทำงานออฟไลน์จริงจัง`,
            `ธุรกิจส่วนใหญ่ใช้เว็บคู่กับ MINI App ได้ และเริ่มจากสองอย่างนี้ก่อนค่อยพิจารณาแอป`,
          ],
        },
        {
          h: `MINI App ทำอะไรได้บ้างในธุรกิจจริง`,
          p: [
            `งานที่เห็นผลชัดคือบัตรสมาชิกดิจิทัล ลูกค้าเปิดใน LINE แล้วโชว์ QR ให้พนักงานสแกนเก็บแต้ม ไม่ต้องพกบัตรพลาสติก งานจองคิวและนัดหมายก็เหมาะ เช่น คลินิกให้เลือกแพทย์และเวลา หรือร้านซ่อมรถให้จองช่วงเวลาเข้าศูนย์ แล้วระบบส่งข้อความยืนยันกลับเข้าแชต`,
            `ร้านอาหารใช้ทำระบบสั่งอาหารที่โต๊ะผ่าน QR และรับคิว takeaway โรงแรมใช้เช็กอินล่วงหน้าหรือสั่ง room service ส่วนงานการตลาดใช้แจกคูปองที่ผูกกับตัวลูกค้า จึงวัดได้ว่าใครใช้จริง การรับชำระเงินต่อกับ payment gateway ที่รองรับ PromptPay QR หรือบัตรได้เหมือนเว็บทั่วไป`,
          ],
        },
        {
          h: `Verified กับ unverified และขั้นตอนขออนุมัติในไทย`,
          p: [
            `ในไทย การสร้างช่อง LINE MINI App ต้องได้รับอนุมัติจากบริษัท LINE ในประเทศ และต้องมีการยอมรับนโยบายความเป็นส่วนตัวตามที่กำหนด แอปที่ผ่านการอนุมัติขั้นแรกจะใช้งานได้แบบ unverified คือเปิดผ่านลิงก์ได้ แต่ยังไม่ได้สิทธิพิเศษบางอย่าง`,
            `ถ้าต้องการเป็น verified MINI App ช่องนั้นต้องอยู่ภายใต้ provider ที่ได้รับการรับรองเท่านั้น จึงจะยื่นขอตรวจได้ แอปที่ผ่านจะได้ความสามารถเพิ่ม เช่น ปรากฏในผลค้นหาของ LINE ส่ง service message อย่างใบยืนยันการจอง ใช้ custom path และมีขั้นตอนขอความยินยอมที่ง่ายขึ้น เงื่อนไขละเอียดเปลี่ยนได้ จึงควรเช็กเอกสารล่าสุดของ LINE ก่อนวางแผนเวลาเปิดตัว`,
          ],
          quote: `อย่าวางวันเปิดตัวแคมเปญก่อนรู้ว่าแอปผ่านการอนุมัติเมื่อไร`,
        },
        {
          h: `สร้างบน LIFF ให้ถูกตั้งแต่แรก`,
          p: [
            `ข้อผิดพลาดที่เจอบ่อยคือทีมทำ LIFF app ไว้ใต้ช่อง LINE Login ก่อน แล้วคิดว่าจะย้ายไปเป็น MINI App ทีหลัง ซึ่งทำไม่ได้ LIFF app ที่สร้างใต้ LINE Login channel ย้ายเข้า LINE MINI App channel ไม่ได้ ถ้ามีแผนจะเป็น MINI App ให้สร้างในช่อง MINI App ตั้งแต่วันแรก`,
            `ด้านเทคนิค ให้ออกแบบแอปให้โหลดเร็วบนมือถือระดับกลาง เพราะผู้ใช้เปิดจากแชตและพร้อมปิดทิ้งทันทีถ้าช้า ตรวจ ID token ของผู้ใช้ที่ฝั่งเซิร์ฟเวอร์ทุกครั้ง อย่าเชื่อข้อมูลโปรไฟล์ที่ส่งมาจากหน้าเว็บตรงๆ และเก็บ LINE user ID เป็นข้อมูลส่วนบุคคลตาม PDPA ทีมอย่าง Haliviq มักเริ่มจากหนึ่งงานหลัก เช่น บัตรสมาชิก ให้ลูกค้าใช้จริงก่อน แล้วค่อยเพิ่มฟีเจอร์`,
          ],
          list: [
            `สร้าง provider และ MINI App channel ให้ถูกบัญชีบริษัทตั้งแต่ต้น`,
            `เตรียม privacy policy ภาษาไทยที่อ่านเข้าใจ`,
            `ตรวจ ID token ที่ฝั่งเซิร์ฟเวอร์ ไม่เชื่อข้อมูลจากฝั่ง client`,
            `ทดสอบบนมือถือ Android และ iPhone รุ่นที่ลูกค้าใช้จริง`,
            `เผื่อเวลาสำหรับรอบตรวจและแก้ไขก่อนวันเปิดตัว`,
          ],
        },
      ],
      takeaways: [
        `LINE MINI App คือเว็บแอปบน LIFF ที่เปิดใน LINE ลูกค้าไม่ต้องโหลดแอปเพิ่ม`,
        `เหมาะกับบัตรสมาชิก จองคิว สั่งอาหาร และคูปอง เมื่อลูกค้าคุยกับคุณผ่าน LINE อยู่แล้ว`,
        `ในไทยต้องได้รับอนุมัติจาก LINE ประเทศไทย และ verified ต้องอยู่ใต้ provider ที่ได้รับการรับรอง`,
        `LIFF app ใต้ LINE Login channel ย้ายเป็น MINI App ไม่ได้ จึงต้องเลือกช่องให้ถูกตั้งแต่แรก`,
        `เว็บไซต์ยังจำเป็นสำหรับการค้นหาและลูกค้าที่ไม่ใช้ LINE`,
      ],
      figCaption: `ภาพเปรียบเทียบเส้นทางลูกค้าผ่าน LINE MINI App เว็บไซต์ และแอป native`,
      faq: [
        {
          q: `ทำ MINI App แล้วยังต้องมีเว็บไซต์ไหม`,
          a: `ส่วนใหญ่ควรมี เพราะเว็บคือสิ่งที่คนค้นเจอใน Google และ AI search และเป็นช่องทางสำหรับคนที่ไม่ใช้ LINE ส่วน MINI App เหมาะกับลูกค้าที่รู้จักคุณแล้วและกลับมาใช้บริการซ้ำ`,
        },
        {
          q: `ไม่เป็น verified ใช้งานได้ไหม`,
          a: `ใช้ได้ผ่านลิงก์ หรือปุ่มใน rich menu ของ LINE OA ซึ่งพอสำหรับหลายธุรกิจ แต่จะไม่ได้สิทธิอย่างการปรากฏในผลค้นหาของ LINE และ service message`,
        },
        {
          q: `ใช้ทีมเว็บเดิมพัฒนาได้หรือเปล่า`,
          a: `ได้ เพราะ MINI App คือเว็บที่ใช้ LIFF SDK เพิ่ม ทีมควรศึกษาเงื่อนไขของ LINE เรื่องการตรวจ การจัดการ token และ UX บนหน้าจอใน LINE เพิ่มเติม`,
        },
      ],
    },
    en: {
      title: `LINE MINI App, Website or Native App: What Thai Businesses Should Choose`,
      excerpt: `How a LINE MINI App compares with a website and a native app, what it can do, how verified differs from unverified, and what approval looks like in Thailand.`,
      metaTitle: `LINE MINI App vs Website vs Native App in Thailand`,
      metaDescription: `When a LINE MINI App beats a website or native app for Thai businesses, what it can do for memberships, booking and coupons, and how verification and LIFF work.`,
      intro: `Roughly 54 to 56 million people in Thailand use LINE, so your customers are probably in it every day. Business owners often ask us whether to build a LINE MINI App, a website, or their own app. This guide compares the three honestly, explains what a MINI App can do, and walks through what it takes to get one approved in Thailand.`,
      sections: [
        {
          h: `What a LINE MINI App is, and how it differs from LINE OA`,
          p: [
            `A LINE Official Account is for chat, broadcasts and rich menus. A LINE MINI App is a web app that runs inside LINE. Customers install nothing: they tap a link or a rich menu button and they are in. With their permission, the app can use their LINE profile, so there is no separate sign-up form.`,
            `Technically, a MINI App is built on LIFF, the LINE Front-end Framework. It is an ordinary web app in HTML, CSS and JavaScript, plus an SDK that unlocks LINE features such as reading the profile, sending a message into the chat or scanning a QR code. Any competent web team can build one without learning a new language.`,
          ],
        },
        {
          h: `When to choose a MINI App, a website or a native app`,
          p: [
            `No option wins every time. It depends on where customers meet you and how often they come back. If most customers already talk to you through LINE OA, as many clinics, restaurants and retailers do, a MINI App is often the best value because it builds on a channel you already have, with no app install campaign.`,
            `A website is still essential for people who find you through Google or AI search, and for overseas customers who do not use LINE. A native app earns its cost when people use it daily, need deep device features, or the brand needs its own space, like a banking app or a fitness app that syncs with wearables.`,
          ],
          list: [
            `Pick a MINI App when customers already live in LINE and the job is membership, booking, ordering or coupons.`,
            `Pick a website when you need to be found, sell openly online, or serve customers outside LINE.`,
            `Pick a native app for very frequent use, deep device features or serious offline work.`,
            `Most businesses can run a website plus a MINI App first and decide on a native app later.`,
          ],
        },
        {
          h: `What a MINI App can do for a real business`,
          p: [
            `The clearest win is a digital membership card. The customer opens it in LINE and shows a QR code for staff to scan for points, with no plastic card to carry. Booking and queues fit well too: a clinic lets patients choose a doctor and a time slot, a car service centre lets drivers book a bay, and a confirmation arrives back in the chat.`,
            `Restaurants use MINI Apps for table ordering by QR and takeaway queues. Hotels use them for pre-arrival check-in or room service. Marketing teams issue coupons tied to a specific customer, so redemption is measurable. Payments connect to a gateway that supports PromptPay QR or cards, just like a normal website.`,
          ],
        },
        {
          h: `Verified vs unverified, and the approval process in Thailand`,
          p: [
            `In Thailand, creating a LINE MINI App channel needs approval from LINE's local subsidiary, and a privacy policy acknowledgement is required. Once approved, the app can run as unverified: people can open it from a link, but some extras are not available.`,
            `To become a verified MINI App, the channel must sit under a certified provider, and only then can it apply for verification review. Verified apps get extras such as appearing in LINE search, sending service messages like booking confirmations, custom paths and a simpler consent flow. Details can change, so check LINE's current documentation before you fix a launch date.`,
          ],
          quote: `Do not set a campaign launch date before you know when the app will be approved.`,
        },
        {
          h: `Build on LIFF the right way from day one`,
          p: [
            `A common mistake is building a LIFF app under a LINE Login channel first, planning to turn it into a MINI App later. That does not work: a LIFF app created under a LINE Login channel cannot be migrated into a LINE MINI App channel. If a MINI App is the goal, create it in a MINI App channel from the start.`,
            `On the technical side, make the app load fast on mid-range phones, because people open it from a chat and close it the moment it feels slow. Verify the user's ID token on your server every time rather than trusting profile data sent from the page, and treat the LINE user ID as personal data under PDPA. Teams like ours at Haliviq usually start with one core job, such as the membership card, get real customers using it, then add features.`,
          ],
          list: [
            `Create the provider and MINI App channel under the right company account from the start.`,
            `Prepare a clear privacy policy in Thai.`,
            `Verify ID tokens on the server and never trust client-side profile data.`,
            `Test on the Android phones and iPhones your customers really use.`,
            `Leave time for review rounds and fixes before launch day.`,
          ],
        },
      ],
      takeaways: [
        `A LINE MINI App is a LIFF web app that runs inside LINE, with nothing extra to install.`,
        `It suits memberships, booking, ordering and coupons when customers already talk to you on LINE.`,
        `In Thailand it needs approval from LINE's local subsidiary, and verified status needs a certified provider.`,
        `A LIFF app under a LINE Login channel cannot become a MINI App, so choose the channel carefully.`,
        `You still need a website for search and for customers who do not use LINE.`,
      ],
      figCaption: `Comparison of customer journeys through a LINE MINI App, a website and a native app.`,
      faq: [
        {
          q: `If we build a MINI App, do we still need a website?`,
          a: `Usually yes. The website is what people find on Google and AI search, and it serves people who do not use LINE. The MINI App is best for customers who already know you and come back.`,
        },
        {
          q: `Can an unverified MINI App still be useful?`,
          a: `Yes. It works through links and rich menu buttons in your LINE OA, which is enough for many businesses. You miss extras such as appearing in LINE search and service messages.`,
        },
        {
          q: `Can our existing web team build it?`,
          a: `Yes, since a MINI App is a web app with the LIFF SDK added. They should also learn LINE's review rules, token handling and UX conventions for screens inside LINE.`,
        },
      ],
    },
  },
  {
    slug: 'vibe-coded-app-to-production',
    cat: 'Technology',
    date: '2026-11-11',
    readMin: 9,
    tags: ['Vibe coding', 'AI coding', 'Production readiness', 'Security', 'PDPA'],
    related: ['ai-prototyping-design', 'npm-supply-chain-security', 'thailand-pdpa-guide'],
    th: {
      title: `จากแอปที่ vibe coding มา สู่ระบบที่ให้ลูกค้าใช้จริงได้อย่างปลอดภัย`,
      excerpt: `ต้นแบบที่สร้างด้วย AI ทำงานได้ในเดโม แต่ยังไม่พร้อมรับลูกค้าจริง สรุปช่องโหว่ที่เจอบ่อย เช็กลิสต์ก่อนเปิดใช้ และวิธีตัดสินใจว่าจะเสริมหรือเขียนใหม่`,
      metaTitle: `Vibe coding สู่ production: เช็กลิสต์ก่อนเปิดให้ลูกค้าใช้`,
      metaDescription: `แอปต้นแบบจาก AI coding tools ต้องเสริมอะไรก่อนเปิดใช้จริง ทั้ง auth, secrets, data model, tests, PDPA, monitoring และต้นทุน พร้อมวิธีเลือกเสริมหรือเขียนใหม่`,
      intro: `ทุกวันนี้เจ้าของธุรกิจหรือทีมการตลาดหลายคนสร้างแอปต้นแบบได้เองในไม่กี่วันด้วยเครื่องมือ AI coding หรือที่เรียกกันว่า vibe coding ซึ่งเป็นเรื่องดีมาก เพราะได้ทดสอบไอเดียเร็ว แต่แอปที่ทำงานได้บนเครื่องตัวเองกับแอปที่รับข้อมูลลูกค้าจริงเป็นคนละเรื่องกัน บทความนี้รวบรวมช่องว่างที่เราเจอบ่อยเวลาลูกค้านำต้นแบบมาให้ช่วยต่อยอด`,
      sections: [
        {
          h: `ทำไมต้นแบบที่ทำงานได้ ยังไม่พร้อมใช้จริง`,
          p: [
            `เครื่องมือ AI เก่งมากในการทำให้หน้าจอแสดงผลถูกและปุ่มกดแล้วมีอะไรเกิดขึ้น แต่สิ่งที่สำคัญใน production มักมองไม่เห็นจากหน้าจอ เช่น ใครเห็นข้อมูลของใครได้บ้าง เกิดอะไรขึ้นเมื่อมีคนใช้พร้อมกันหลายร้อยคน หรือเมื่อ API ภายนอกล่ม`,
            `อีกปัญหาคือโค้ดที่ AI สร้างทีละ prompt มักไม่มีโครงสร้างร่วมกัน ฟังก์ชันเดียวกันเขียนซ้ำหลายที่ การตรวจสิทธิ์อยู่บ้างไม่อยู่บ้าง และไม่มีใครในทีมเข้าใจทั้งระบบ แอปจึงดูดีในเดโม แต่แก้ไขยากและเสี่ยงเมื่อขยาย`,
          ],
        },
        {
          h: `ช่องโหว่ที่เจอบ่อยที่สุด`,
          p: [
            `จุดแรกคือการยืนยันตัวตนและสิทธิ์ หลายแอปตรวจสิทธิ์แค่ฝั่งหน้าเว็บ เช่น ซ่อนปุ่มไว้ แต่ API ยังเปิดให้ใครเรียกก็ได้ ถ้าใช้ฐานข้อมูลแบบ backend-as-a-service ต้องเปิดและเขียนกฎสิทธิ์ระดับแถว (row level security) ให้ครบ ไม่อย่างนั้นลูกค้าคนหนึ่งอาจดูข้อมูลของอีกคนได้`,
            `จุดที่สองคือ secrets เช่น API key ของผู้ให้บริการ AI หรือ payment ที่ถูกฝังไว้ในโค้ดฝั่ง client หรือ commit ขึ้น repository ใครเปิดดู source ของเว็บก็เอาไปใช้ได้ และอาจทำให้เกิดค่าใช้จ่ายที่คุณต้องจ่ายเอง จุดอื่นที่ตามมาคือ data model ที่ไม่ได้คิดเรื่องความสัมพันธ์และ index การจัดการ error ที่ปล่อยให้แอปค้างเงียบๆ และการไม่มี test เลย`,
          ],
          list: [
            `Auth และสิทธิ์: ตรวจที่เซิร์ฟเวอร์ทุก request ไม่ใช่แค่ซ่อนปุ่ม`,
            `Secrets: ย้ายไป environment variables ฝั่งเซิร์ฟเวอร์ และเปลี่ยน key ที่เคยหลุด`,
            `Data model: ทบทวนตาราง ความสัมพันธ์ index และแผน migration`,
            `Error handling: แสดงข้อความที่ผู้ใช้เข้าใจ และบันทึก error ให้ทีมเห็น`,
            `Tests: อย่างน้อยครอบคลุม flow ที่เกี่ยวกับเงินและข้อมูลลูกค้า`,
          ],
        },
        {
          h: `PDPA, monitoring และต้นทุนที่มักลืม`,
          p: [
            `ถ้าแอปเก็บชื่อ เบอร์โทร หรือ LINE user ID ของลูกค้า คุณมีหน้าที่ตาม PDPA ทันที ต้องมี privacy notice เก็บเท่าที่จำเป็น ควบคุมการเข้าถึง และถ้าข้อมูลรั่วและมีความเสี่ยงต่อเจ้าของข้อมูล ต้องแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลภายใน 72 ชั่วโมง โทษปรับทางปกครองสูงสุด 5 ล้านบาทต่อกรณี จึงไม่ใช่เรื่องที่ควรเสี่ยงกับต้นแบบที่ยังไม่ได้ตรวจ`,
            `Monitoring คือสิ่งที่บอกคุณว่าระบบพังก่อนลูกค้าจะโทรมาบอก อย่างน้อยควรมีการเก็บ error log, uptime check และการแจ้งเตือนเข้า LINE หรืออีเมลของทีม ส่วนต้นทุนต้องดูให้ดี โดยเฉพาะแอปที่เรียกโมเดล AI ทุกครั้งที่ผู้ใช้กด ควรตั้ง rate limit งบประมาณสูงสุด และการแจ้งเตือนค่าใช้จ่ายไว้กับทุกผู้ให้บริการ`,
          ],
          quote: `เดโมพิสูจน์ว่าไอเดียใช้ได้ ส่วน production ต้องพิสูจน์ว่าระบบพังได้อย่างปลอดภัย`,
        },
        {
          h: `เช็กลิสต์ก่อนเปิดให้ลูกค้าจริงใช้`,
          p: [
            `ให้ใช้รายการนี้เป็นจุดเริ่มต้นในการคุยกับทีมหรือผู้รับจ้าง ไม่จำเป็นต้องทำทุกข้อให้สมบูรณ์แบบในวันแรก แต่ควรรู้ว่าข้อไหนยังขาดและยอมรับความเสี่ยงอะไรอยู่`,
            `ทุกข้อควรมีคนรับผิดชอบที่ชัดเจน และบันทึกไว้ในที่ที่ทั้งทีมเห็น เมื่อมีคนใหม่เข้ามาดูแลระบบ จะได้ไม่ต้องเดาว่าอะไรทำไปแล้ว`,
          ],
          list: [
            `ทดสอบว่าผู้ใช้ A เข้าถึงข้อมูลของผู้ใช้ B ไม่ได้ ทั้งผ่านหน้าเว็บและเรียก API ตรง`,
            `ค้นหา key และรหัสผ่านใน repository และในโค้ดฝั่ง client แล้วย้ายออกและเปลี่ยนใหม่`,
            `แยก environment สำหรับทดสอบกับใช้จริง พร้อมสำรองฐานข้อมูลอัตโนมัติและลองกู้คืนจริง`,
            `เขียน test ให้ flow สมัคร ล็อกอิน ชำระเงิน และแก้ไขข้อมูลส่วนตัว`,
            `อัปเดต dependency และใช้ lockfile`,
            `มี privacy notice ช่องทางรับคำขอของเจ้าของข้อมูล และแผนรับมือข้อมูลรั่ว`,
            `ตั้ง error tracking, uptime check และการแจ้งเตือนค่าใช้จ่าย`,
          ],
        },
        {
          h: `เมื่อไรควรเสริม เมื่อไรควรเขียนใหม่`,
          p: [
            `เสริม (harden) เมื่อโครงสร้างหลักยังพอใช้ได้ เช่น ใช้ framework ที่ทีมรู้จัก data model สมเหตุสมผล และปัญหาส่วนใหญ่เป็นเรื่องที่แก้เป็นจุดได้อย่างสิทธิ์ secrets และ test แนวทางนี้เร็วกว่าและรักษาสิ่งที่ผู้ใช้ชอบไว้ได้`,
            `เขียนใหม่เมื่อแก้จุดหนึ่งแล้วพังอีกสามจุด data model ผิดตั้งแต่ฐาน หรือไม่มีใครอธิบายได้ว่าโค้ดส่วนใหญ่ทำอะไร ในกรณีนี้ให้มองต้นแบบเป็นสเปกที่มีชีวิต ใช้มันเป็นตัวอ้างอิงเรื่องหน้าจอและ flow แล้วสร้างระบบใหม่บนโครงที่ดูแลต่อได้ ซึ่งมักเร็วกว่าที่คิดเพราะการตัดสินใจเรื่องโปรดักต์ทำไปแล้ว`,
          ],
        },
      ],
      takeaways: [
        `ต้นแบบจาก AI coding tools ดีสำหรับทดสอบไอเดีย แต่ยังไม่ใช่ระบบ production`,
        `จุดเสี่ยงหลักคือการตรวจสิทธิ์ที่เซิร์ฟเวอร์ และ secrets ที่หลุดในโค้ด`,
        `เก็บข้อมูลลูกค้าเมื่อไร มีหน้าที่ตาม PDPA ทันที รวมถึงแจ้งเหตุรั่วภายใน 72 ชั่วโมง`,
        `ต้องมี monitoring และเพดานค่าใช้จ่าย โดยเฉพาะแอปที่เรียกโมเดล AI`,
        `เสริมเมื่อโครงหลักดี เขียนใหม่เมื่อแก้จุดเดียวแล้วพังหลายจุด`,
      ],
      figCaption: `เส้นทางจากต้นแบบ vibe coding สู่ระบบ production พร้อมจุดตรวจสำคัญ`,
      faq: [
        {
          q: `ใช้ AI ช่วยแก้ช่องโหว่เหล่านี้ได้ไหม`,
          a: `ช่วยได้มาก ทั้งการหาจุดเสี่ยงและเขียน test แต่ต้องมีคนที่เข้าใจระบบตรวจผลและตัดสินใจ เพราะ AI ไม่รู้ว่าข้อมูลไหนของคุณอ่อนไหว หรือใครควรเห็นอะไร`,
        },
        {
          q: `ถ้ามีลูกค้าใช้อยู่แล้ว ควรหยุดระบบก่อนไหม`,
          a: `ไม่จำเป็นเสมอไป ให้เริ่มจากเรื่องเร่งด่วนก่อน คือตรวจสิทธิ์ เปลี่ยน key ที่หลุด และสำรองข้อมูล แล้วค่อยเสริมเรื่องอื่นตามลำดับความเสี่ยง`,
        },
      ],
    },
    en: {
      title: `From Vibe-Coded Prototype to an App Real Customers Can Safely Use`,
      excerpt: `Your AI-built prototype works in the demo, but it is not ready for real customers. The common gaps, a pre-launch checklist, and how to decide between hardening and rewriting.`,
      metaTitle: `Vibe-Coded App to Production: A Pre-Launch Checklist`,
      metaDescription: `What an AI-built prototype needs before real users: auth, secrets, data model, errors, tests, PDPA, monitoring and cost, plus when to harden or rewrite.`,
      intro: `Many founders and marketing teams can now build a working prototype in a few days with AI coding tools, the style people call vibe coding. That is great for testing ideas quickly. But an app that runs on your laptop and an app that holds real customer data are very different things. This article collects the gaps we see most often when clients bring us a prototype to take further.`,
      sections: [
        {
          h: `Why a working prototype is not production-ready`,
          p: [
            `AI tools are very good at making screens look right and buttons do something. What matters in production is often invisible on screen: who can see whose data, what happens when hundreds of people use it at once, and what happens when an outside API goes down.`,
            `There is also a structural problem. Code generated one prompt at a time rarely shares a design. The same logic appears in several places, permission checks exist in some routes and not others, and nobody on the team understands the whole system. The app shines in a demo but is hard to change and risky to scale.`,
          ],
        },
        {
          h: `The most common gaps`,
          p: [
            `The first is authentication and authorisation. Many apps only check permissions in the front end, for example by hiding a button, while the API underneath answers anyone. If you use a backend-as-a-service database, row level security must be switched on and its rules written properly, or one customer may be able to read another's records.`,
            `The second is secrets. API keys for AI or payment providers end up in client-side code or committed to the repository, where anyone viewing the page source can take them and run up costs you will pay. After that come a data model with no thought for relationships or indexes, error handling that lets the app hang silently, and no tests at all.`,
          ],
          list: [
            `Auth and permissions: check on the server for every request, not just by hiding buttons.`,
            `Secrets: move them to server-side environment variables and rotate any that leaked.`,
            `Data model: review tables, relationships, indexes and a migration plan.`,
            `Error handling: show users clear messages and log errors where the team sees them.`,
            `Tests: at minimum, cover flows that touch money and customer data.`,
          ],
        },
        {
          h: `PDPA, monitoring and the costs people forget`,
          p: [
            `If the app stores customers' names, phone numbers or LINE user IDs, you have PDPA duties from day one: a privacy notice, collecting only what you need, access control, and, if a breach puts people at risk, notifying the PDPC within 72 hours. Administrative fines reach THB 5 million per violation, which is not a risk worth taking on an unreviewed prototype.`,
            `Monitoring tells you something broke before a customer calls. At minimum, have error logging, an uptime check and alerts to the team's LINE or email. Watch costs closely too, especially if the app calls an AI model on every tap. Set rate limits, spending caps and billing alerts with every provider.`,
          ],
          quote: `A demo proves the idea works. Production has to prove the system can fail safely.`,
        },
        {
          h: `A checklist before real customers arrive`,
          p: [
            `Use this list to start the conversation with your team or vendor. Not every item has to be perfect on day one, but you should know which ones are missing and which risks you are accepting.`,
            `Give each item a clear owner and record the status somewhere the whole team can see. When someone new takes over the system, they will not have to guess what was done.`,
          ],
          list: [
            `Test that user A cannot reach user B's data, through the UI and by calling the API directly.`,
            `Search the repository and client code for keys and passwords, move them out and rotate them.`,
            `Separate test and live environments, with automatic database backups and a real restore test.`,
            `Write tests for sign-up, sign-in, payment and editing personal details.`,
            `Update dependencies and commit a lockfile.`,
            `Publish a privacy notice, a channel for data subject requests and a breach plan.`,
            `Set up error tracking, uptime checks and billing alerts.`,
          ],
        },
        {
          h: `When to harden and when to rewrite`,
          p: [
            `Harden when the core structure is sound: a framework the team knows, a sensible data model, and problems that can be fixed in place, such as permissions, secrets and tests. It is faster and keeps what users already like.`,
            `Rewrite when fixing one thing breaks three others, the data model is wrong at its foundation, or nobody can explain what most of the code does. In that case treat the prototype as a living spec. Use it as the reference for screens and flows, and build the real system on a structure you can maintain. That is often quicker than expected, because the product decisions are already made.`,
          ],
        },
      ],
      takeaways: [
        `AI-built prototypes are excellent for testing ideas, but they are not production systems.`,
        `The biggest risks are missing server-side permission checks and leaked secrets.`,
        `Once you store customer data you have PDPA duties, including breach notice within 72 hours.`,
        `Add monitoring and spending caps, especially for apps that call AI models.`,
        `Harden when the core is sound; rewrite when every fix breaks something else.`,
      ],
      figCaption: `The path from a vibe-coded prototype to a production system, with the key checkpoints.`,
      faq: [
        {
          q: `Can AI help fix these gaps?`,
          a: `A lot, from spotting risks to writing tests. But someone who understands the system must review the output and make the calls, because the AI does not know which of your data is sensitive or who should see what.`,
        },
        {
          q: `If customers are already using it, should we take it offline?`,
          a: `Not necessarily. Do the urgent items first: server-side permission checks, rotating leaked keys and backups. Then work through the rest in order of risk.`,
        },
      ],
    },
  },
  {
    slug: 'inp-core-web-vitals',
    cat: 'Technology',
    date: '2026-11-04',
    readMin: 8,
    tags: ['INP', 'Core Web Vitals', 'Performance', 'JavaScript', 'SEO'],
    related: ['nextjs-perf', 'checkout-ux-promptpay', 'pwa-vs-native-2026'],
    th: {
      title: `INP คืออะไร ทำไมเว็บที่กดแล้วช้าทำให้เสียยอดขาย และแก้อย่างไร`,
      excerpt: `INP คือค่าที่วัดว่าเว็บตอบสนองต่อการกดเร็วแค่ไหน อธิบายสำหรับเจ้าของธุรกิจและนักพัฒนา วิธีวัดจากผู้ใช้จริง และวิธีแก้ที่ได้ผล`,
      metaTitle: `INP คืออะไร วัดและแก้ Core Web Vitals ให้เว็บกดลื่น`,
      metaDescription: `INP แทน FID ใน Core Web Vitals ตั้งแต่มีนาคม 2024 อธิบายเกณฑ์ 200 ms การวัดที่ 75th percentile ข้อมูล field กับ lab และวิธีแก้ long tasks สคริปต์ภายนอก`,
      intro: `ลูกค้ากดปุ่ม "เพิ่มลงตะกร้า" แล้วหน้าจอนิ่งไปครู่หนึ่ง หลายคนกดซ้ำ บางคนปิดหน้าไปเลย อาการนี้มีชื่อเรียกและวัดได้ คือ INP หรือ Interaction to Next Paint บทความนี้อธิบายว่า INP คืออะไร ทำไมเจ้าของธุรกิจควรสนใจ และทีมพัฒนาจะวัดและแก้อย่างไร`,
      sections: [
        {
          h: `INP คืออะไร อธิบายแบบไม่ใช้ศัพท์เทคนิค`,
          p: [
            `INP วัดระยะเวลาตั้งแต่ผู้ใช้กด แตะ หรือพิมพ์ จนหน้าจอแสดงผลตอบกลับครั้งถัดไป เช่น เมนูเปิด ตัวเลขในตะกร้าเปลี่ยน หรือมีวงหมุนบอกว่ากำลังโหลด ถ้าช่วงนี้นาน ผู้ใช้จะรู้สึกว่าเว็บค้างหรือกดไม่ติด`,
            `Google ใช้ INP แทน FID (First Input Delay) เป็นหนึ่งใน Core Web Vitals ตั้งแต่วันที่ 12 มีนาคม 2024 ความต่างสำคัญคือ FID ดูแค่การกดครั้งแรก แต่ INP พิจารณาการโต้ตอบทั้งหมดตลอดเวลาที่ผู้ใช้อยู่บนหน้านั้น จึงสะท้อนประสบการณ์จริงได้ดีกว่ามาก เช่น การกดตัวกรองสินค้าครั้งที่สิบ หรือการกดปุ่มชำระเงินตอนท้าย`,
          ],
          list: [
            `ดี: ไม่เกิน 200 มิลลิวินาที`,
            `ต้องปรับปรุง: มากกว่า 200 ถึง 500 มิลลิวินาที`,
            `แย่: มากกว่า 500 มิลลิวินาที`,
          ],
        },
        {
          h: `ทำไมการกดที่ช้าถึงเสียยอดขาย`,
          p: [
            `การโต้ตอบที่ช้ามักเกิดในจุดที่สำคัญที่สุดของธุรกิจ คือหน้าสินค้า ตะกร้า ฟอร์มจอง และหน้าชำระเงิน เมื่อกดแล้วไม่มีอะไรเกิดขึ้น ผู้ใช้จะกดซ้ำจนเพิ่มสินค้าสองชิ้น หรือคิดว่าระบบพังแล้วกลับไปซื้อจาก Shopee หรือ Lazada ที่คุ้นมือกว่า`,
            `ปัญหานี้หนักบนมือถือระดับกลางและรุ่นเก่า ซึ่งเป็นเครื่องที่ลูกค้าจำนวนมากใช้จริง ทีมพัฒนาที่ทดสอบบนแล็ปท็อปแรงๆ อาจไม่เคยเห็นอาการเลย นอกจากเรื่องยอดขาย Core Web Vitals ยังเป็นส่วนหนึ่งของสัญญาณประสบการณ์หน้าเว็บที่ Google ใช้ด้วย แม้จะไม่ใช่ปัจจัยหลักเทียบกับเนื้อหาที่ดี`,
          ],
          quote: `ผู้ใช้ไม่รู้จักคำว่า INP แต่รู้ทันทีว่าเว็บไหนกดแล้วไม่ตอบ`,
        },
        {
          h: `วัดอย่างไร: ข้อมูล field กับ lab และ 75th percentile`,
          p: [
            `ข้อมูล field คือค่าที่วัดจากผู้ใช้จริงบนอุปกรณ์และเครือข่ายจริง เช่น ข้อมูลใน Chrome User Experience Report ที่เห็นได้ใน PageSpeed Insights และ Search Console หรือข้อมูลที่คุณเก็บเองด้วยไลบรารี web-vitals ส่งเข้าระบบ analytics ส่วนข้อมูล lab คือการทดสอบในสภาพแวดล้อมที่ควบคุม เช่น Lighthouse หรือ Chrome DevTools`,
            `INP เป็นค่าที่ต้องดูจาก field เป็นหลัก เพราะขึ้นกับว่าผู้ใช้กดอะไร บนเครื่องแบบไหน เกณฑ์ใช้ค่าที่ 75th percentile ของการโหลดหน้าจากผู้ใช้จริง แปลว่าอย่างน้อยสามในสี่ของการเข้าชมต้องอยู่ในเกณฑ์ดี ค่าเฉลี่ยที่ดูดีจึงยังซ่อนผู้ใช้กลุ่มที่เจอปัญหาหนักได้ ใน lab ให้ใช้ Total Blocking Time เป็นตัวชี้วัดใกล้เคียง และใช้แท็บ Performance ของ DevTools บันทึกการกดจริงเพื่อหาว่าอะไรทำให้ช้า`,
          ],
        },
        {
          h: `สาเหตุหลักและวิธีแก้`,
          p: [
            `เบราว์เซอร์มี main thread เส้นเดียวที่ทั้งรัน JavaScript และวาดหน้าจอ ถ้ามีงานยาว (long task) ที่ใช้เวลาเกิน 50 มิลลิวินาทีขวางอยู่ การกดของผู้ใช้ต้องรอคิว สาเหตุที่เจอบ่อยคือ JavaScript ที่ทำงานหนักใน event handler, สคริปต์ภายนอกอย่าง tag โฆษณา แชตบอต และเครื่องมือวิเคราะห์ที่ติดตั้งสะสมไว้ และ hydration ของ framework ที่ทำให้หน้าแสดงผลแล้วแต่ยังกดไม่ได้`,
            `หลักการแก้คือทำให้ main thread ว่างเร็วขึ้น และให้ผู้ใช้เห็นผลตอบกลับก่อน แล้วค่อยทำงานหนักทีหลัง`,
          ],
          list: [
            `แสดงผลตอบกลับทันที เช่น เปลี่ยนสถานะปุ่ม แล้วค่อยเรียก API หรือคำนวณ`,
            `แบ่งงานยาวเป็นชิ้นเล็ก และ yield ให้ main thread เช่น ใช้ scheduler.yield() ในเบราว์เซอร์ที่รองรับ หรือ setTimeout เป็นทางสำรอง`,
            `ทบทวนสคริปต์ภายนอกทุกตัว ถอดที่ไม่ได้ใช้ และโหลดที่เหลือแบบหน่วงเวลา`,
            `ลด JavaScript ที่ส่งไปฝั่ง client ใช้ server components หรือ partial hydration เมื่อ framework รองรับ`,
            `หลีกเลี่ยงการ re-render ทั้งหน้าเมื่อเปลี่ยนแค่ส่วนเล็กๆ และระวัง DOM ที่ใหญ่เกินไป`,
          ],
        },
        {
          h: `ลำดับการทำงานที่ใช้ได้จริง`,
          p: [
            `เริ่มจากดูข้อมูล field ว่าหน้าไหนมี INP แย่ที่สุด แล้วเลือกหน้าที่สำคัญต่อรายได้ก่อน เช่น หน้าสินค้าและตะกร้า จากนั้นเก็บข้อมูล attribution ด้วยไลบรารี web-vitals เพื่อรู้ว่าการกดที่ช้าคือการกดอะไร บน element ไหน`,
            `แก้ทีละจุด แล้ววัดซ้ำจากผู้ใช้จริง เพราะข้อมูล field ต้องใช้เวลาสะสมสักระยะ ตั้งเกณฑ์ใน CI ด้วย Lighthouse หรือ performance budget เพื่อไม่ให้ปัญหากลับมา และให้ฝ่ายการตลาดรู้ว่าการเพิ่มสคริปต์ใหม่แต่ละตัวมีต้นทุนด้านความเร็ว ทีมอย่าง Haliviq มักเริ่มจากการตรวจสคริปต์ภายนอก เพราะเป็นจุดที่แก้ได้เร็วที่สุดโดยไม่ต้องแตะโค้ดหลัก`,
          ],
        },
      ],
      takeaways: [
        `INP วัดเวลาตั้งแต่ผู้ใช้กดจนหน้าจอตอบสนอง และแทน FID ตั้งแต่ 12 มีนาคม 2024`,
        `ดีคือไม่เกิน 200 ms แย่คือเกิน 500 ms วัดที่ 75th percentile ของผู้ใช้จริง`,
        `ดูข้อมูล field เป็นหลัก ใช้ lab ช่วยหาสาเหตุ`,
        `ตัวการหลักคือ long tasks สคริปต์ภายนอก และ hydration`,
        `ให้ผลตอบกลับทันที แบ่งงานยาว และ yield ให้ main thread`,
      ],
      figCaption: `แผนภาพช่วงเวลาตั้งแต่ผู้ใช้กดจนหน้าจอแสดงผลถัดไป และจุดที่ long task ขวางอยู่`,
      faq: [
        {
          q: `คะแนน Lighthouse ดีแล้ว ทำไม INP ยังแย่`,
          a: `Lighthouse ทดสอบการโหลดหน้าใน lab และไม่ได้กดใช้งานแบบผู้ใช้จริง INP มาจากการโต้ตอบจริงบนอุปกรณ์จริง จึงต้องดูข้อมูล field ประกอบเสมอ`,
        },
        {
          q: `เว็บเล็กๆ ต้องสนใจ INP ไหม`,
          a: `ควรดู โดยเฉพาะถ้ามีฟอร์มจอง ตะกร้า หรือติดตั้งสคริปต์ภายนอกหลายตัว เว็บเล็กมักแก้ได้ง่ายกว่าเว็บใหญ่ และผลต่อความรู้สึกของลูกค้าชัดเจน`,
        },
        {
          q: `ใช้ Next.js หรือ React แล้วจะ INP แย่ไหม`,
          a: `ไม่จำเป็น ขึ้นกับว่าส่ง JavaScript ไปฝั่ง client มากแค่ไหน และจัดการ state อย่างไร การใช้ server components และลดงานใน event handler ช่วยได้มาก`,
        },
      ],
    },
    en: {
      title: `INP Explained: Why Slow Taps Lose Sales and How to Fix Them`,
      excerpt: `INP measures how quickly a page responds when people tap or click. A guide for business owners and developers on measuring it with real users and fixing it.`,
      metaTitle: `INP Explained: Measure and Fix Core Web Vitals`,
      metaDescription: `INP replaced FID as a Core Web Vital in March 2024. The 200 ms target, field vs lab data, the 75th percentile, and fixes for long tasks, scripts and hydration.`,
      intro: `A customer taps "Add to cart" and the screen freezes for a moment. Some tap again, some give up and leave. That feeling has a name and a number: INP, or Interaction to Next Paint. This article explains what INP is, why business owners should care, and how developers can measure and fix it.`,
      sections: [
        {
          h: `What INP is, in plain words`,
          p: [
            `INP measures the time from a user's tap, click or key press until the screen shows the next visual response, such as a menu opening, the cart count changing or a spinner appearing. When that gap is long, the site feels frozen or unresponsive.`,
            `Google replaced FID (First Input Delay) with INP as a Core Web Vital on 12 March 2024. The key difference is that FID looked only at the first interaction, while INP considers every interaction during the page's lifetime. That makes it far closer to real experience, such as the tenth tap on a product filter or the final tap on the pay button.`,
          ],
          list: [
            `Good: 200 milliseconds or less.`,
            `Needs improvement: over 200 and up to 500 milliseconds.`,
            `Poor: over 500 milliseconds.`,
          ],
        },
        {
          h: `Why slow taps cost you sales`,
          p: [
            `Slow interactions tend to happen at the moments that matter most: product pages, the cart, booking forms and checkout. When a tap does nothing, people tap again and add two items, or assume the site is broken and go back to Shopee or Lazada, which feel familiar.`,
            `The problem is worst on mid-range and older phones, which is what many customers actually carry. Developers testing on fast laptops may never see it. Beyond sales, Core Web Vitals are part of the page experience signals Google uses, although they matter less than genuinely useful content.`,
          ],
          quote: `Users have never heard of INP, but they know instantly when a site ignores their tap.`,
        },
        {
          h: `How to measure: field vs lab, and the 75th percentile`,
          p: [
            `Field data comes from real users on real devices and networks, for example the Chrome User Experience Report shown in PageSpeed Insights and Search Console, or data you collect yourself with the web-vitals library and send to analytics. Lab data comes from controlled tests such as Lighthouse or Chrome DevTools.`,
            `INP is mainly a field metric, because it depends on what people tap and on which devices. The threshold is assessed at the 75th percentile of real-user page loads, so at least three in four visits must be good. A healthy-looking average can hide a group of users who suffer badly. In the lab, use Total Blocking Time as a proxy, and record real taps in the DevTools Performance panel to see what is slow.`,
          ],
        },
        {
          h: `The main causes and how to fix them`,
          p: [
            `The browser has a single main thread that runs JavaScript and paints the screen. If a long task, meaning work over 50 milliseconds, is in the way, the user's tap waits in line. Common culprits are heavy JavaScript in event handlers, third-party scripts such as ad tags, chat widgets and analytics tools that pile up over time, and framework hydration that leaves a page visible but not yet usable.`,
            `The principle is simple: free the main thread sooner, show the user a response first, and do the heavy work afterwards.`,
          ],
          list: [
            `Give instant feedback, such as changing the button state, then call the API or run calculations.`,
            `Break long tasks into smaller chunks and yield to the main thread, for example with scheduler.yield() where supported, or setTimeout as a fallback.`,
            `Audit every third-party script, remove unused ones and defer the rest.`,
            `Ship less client JavaScript, using server components or partial hydration where your framework supports it.`,
            `Avoid re-rendering the whole page for a small change, and watch out for very large DOMs.`,
          ],
        },
        {
          h: `A practical order of work`,
          p: [
            `Start with field data to find the pages with the worst INP, and prioritise the ones that drive revenue, such as product and cart pages. Then collect attribution data with the web-vitals library so you know which interaction, on which element, is slow.`,
            `Fix one thing at a time and re-measure with real users, since field data takes a while to accumulate. Add Lighthouse checks or a performance budget to CI so problems do not creep back, and make sure marketing knows every new script has a speed cost. At Haliviq we usually begin with the third-party script audit, because it is the fastest win and needs no changes to core code.`,
          ],
        },
      ],
      takeaways: [
        `INP measures the time from a tap to the next paint, and replaced FID on 12 March 2024.`,
        `Good is 200 ms or less, poor is over 500 ms, judged at the 75th percentile of real users.`,
        `Rely on field data first and use lab tools to find causes.`,
        `The usual culprits are long tasks, third-party scripts and hydration.`,
        `Respond instantly, split long work and yield to the main thread.`,
      ],
      figCaption: `Diagram of the time from a user's tap to the next paint, with a long task blocking the main thread.`,
      faq: [
        {
          q: `Our Lighthouse score is good, so why is INP poor?`,
          a: `Lighthouse tests page load in a lab and does not interact like a real user. INP comes from real interactions on real devices, so always check field data alongside it.`,
        },
        {
          q: `Does a small business site need to care about INP?`,
          a: `Yes, especially with booking forms, carts or several third-party scripts. Small sites are usually easier to fix, and customers notice the difference.`,
        },
        {
          q: `Will using Next.js or React make INP worse?`,
          a: `Not necessarily. It depends on how much JavaScript you ship to the client and how you manage state. Server components and lighter event handlers help a great deal.`,
        },
      ],
    },
  },
  {
    slug: 'npm-supply-chain-security',
    cat: 'Technology',
    date: '2026-10-21',
    readMin: 8,
    tags: ['npm', 'Supply chain security', 'Shai-Hulud', 'CI/CD', 'DevSecOps'],
    related: ['vibe-coded-app-to-production', 'dx-mistakes', 'passkeys-passwordless'],
    th: {
      title: `บทเรียนจากเวิร์ม Shai-Hulud: ป้องกัน npm supply chain สำหรับบริษัทที่ทำเว็บแอป`,
      excerpt: `เวิร์ม Shai-Hulud แพร่ผ่านแพ็กเกจ npm หลายร้อยตัวในปี 2025 สรุปว่าเกิดอะไรขึ้น และสิ่งที่ทุกทีมควรทำ ตั้งแต่ lockfile, token, CI ไปจนถึงแผนรับมือเหตุ`,
      metaTitle: `บทเรียน Shai-Hulud: ป้องกัน npm supply chain attack`,
      metaDescription: `สรุปเหตุเวิร์ม Shai-Hulud บน npm ปี 2025 และแนวทางป้องกันสำหรับทีมเว็บ ทั้ง lockfile การ pin เวอร์ชัน 2FA, trusted publishing, token, CI secrets และแผนรับมือ`,
      intro: `เว็บแอปทุกวันนี้ประกอบจากแพ็กเกจโอเพนซอร์สหลายร้อยตัว โค้ดที่ทีมเขียนเองเป็นแค่ส่วนเล็กๆ เมื่อกลางเดือนกันยายน 2025 เวิร์มชื่อ Shai-Hulud แสดงให้เห็นว่าจุดนี้อันตรายแค่ไหน บทความนี้สรุปเหตุการณ์แบบสั้นๆ และแปลงเป็นสิ่งที่ทีมของคุณทำได้ตั้งแต่สัปดาห์นี้`,
      sections: [
        {
          h: `เกิดอะไรขึ้นกับ Shai-Hulud`,
          p: [
            `Shai-Hulud คือเวิร์มที่แพร่ตัวเองได้บน npm ถูกพบช่วงกลางเดือนกันยายน 2025 โดยเริ่มจากแพ็กเกจ @ctrl/tinycolor เมื่อติดตั้งเวอร์ชันที่ติดเชื้อ มันจะขโมย npm token ของนักพัฒนา แล้วใช้ token นั้นเผยแพร่เวอร์ชันติดเชื้อของแพ็กเกจอื่นที่คนคนนั้นดูแลอยู่โดยอัตโนมัติ พร้อมเก็บ credentials ต่างๆ แล้วส่งขึ้น GitHub repository สาธารณะ`,
            `แพ็กเกจที่ได้รับผลกระทบมีหลายร้อยตัว ประกาศเตือนของ CISA เมื่อ 23 กันยายน 2025 ระบุว่ามากกว่า 500 แพ็กเกจ จุดเริ่มต้นที่มีรายงานคืออีเมล phishing ที่ปลอมเป็นการแจ้งเตือนความปลอดภัยจาก npm และเหตุนี้เกิดตามหลังการเจาะ Nx ที่เรียกว่า s1ngularity ในเดือนสิงหาคม 2025 CISA แนะนำให้ pin เวอร์ชัน dependency และเปลี่ยน credentials ทั้งหมดที่อาจหลุด`,
          ],
          quote: `โค้ดที่คุณไม่ได้เขียนเอง ก็ยังรันด้วยสิทธิ์ของคุณ`,
        },
        {
          h: `ล็อกสิ่งที่ติดตั้ง: lockfile และการ pin เวอร์ชัน`,
          p: [
            `บทเรียนแรกคือควบคุมให้ได้ว่าติดตั้งอะไรเข้ามา commit lockfile อย่าง package-lock.json หรือ pnpm-lock.yaml ทุกครั้ง และใน CI ให้ใช้คำสั่งที่ติดตั้งตาม lockfile เท่านั้น เช่น npm ci แทน npm install เพื่อไม่ให้เวอร์ชันใหม่ที่เพิ่งถูกเผยแพร่หลุดเข้ามาเองระหว่าง build`,
            `ช่วงเวลาอันตรายที่สุดคือไม่กี่ชั่วโมงหรือไม่กี่วันหลังเวอร์ชันติดเชื้อถูกปล่อย ก่อนชุมชนจะตรวจพบ ทีมจึงควรหน่วงการรับเวอร์ชันใหม่ เช่น ตั้งเครื่องมืออัปเดต dependency ให้รอสักระยะก่อนเสนอเวอร์ชันใหม่ และพิจารณาปิด install scripts ของแพ็กเกจที่ไม่จำเป็น เพราะเป็นช่องทางหลักที่มัลแวร์ใช้รันโค้ดตอนติดตั้ง`,
          ],
          list: [
            `Commit lockfile และใช้ npm ci หรือคำสั่งเทียบเท่าใน CI`,
            `Pin เวอร์ชันของ dependency สำคัญ และรีวิวทุกครั้งที่ lockfile เปลี่ยน`,
            `ตั้งเครื่องมืออัปเดตให้รอระยะหนึ่งก่อนรับเวอร์ชันที่เพิ่งออก`,
            `ปิด install scripts เป็นค่าเริ่มต้น แล้วเปิดเฉพาะแพ็กเกจที่จำเป็นจริง`,
          ],
        },
        {
          h: `ปกป้องบัญชีและ token`,
          p: [
            `Shai-Hulud แพร่ได้เพราะได้ token ที่มีสิทธิ์เผยแพร่แพ็กเกจ ถ้าบริษัทคุณเผยแพร่แพ็กเกจของตัวเอง ทุกบัญชีที่มีสิทธิ์ต้องเปิด 2FA และควรใช้ trusted publishing ที่ให้ระบบ CI เผยแพร่ผ่านการยืนยันตัวตนแบบ OIDC แทนการเก็บ token อายุยาวไว้ในเครื่องหรือใน secrets`,
            `แม้ไม่ได้เผยแพร่แพ็กเกจเลย เครื่องนักพัฒนาก็ยังมี token ของ GitHub, cloud และ API ต่างๆ ที่มัลแวร์อยากได้ ให้ใช้ token แบบสิทธิ์น้อยที่สุดเท่าที่งานต้องการ กำหนดวันหมดอายุ และแยก token ตามงาน อบรมทีมด้วยว่าอีเมลที่อ้างว่ามาจาก npm หรือ GitHub และเร่งให้รีบล็อกอิน คือรูปแบบที่ใช้ในเหตุนี้`,
          ],
        },
        {
          h: `CI secrets และการรีวิว dependency`,
          p: [
            `ระบบ CI คือเป้าหมายที่คุ้มที่สุดสำหรับผู้โจมตี เพราะมักมี secrets สำหรับ deploy และเข้าถึง production ได้ ให้แยก job ที่ติดตั้งและทดสอบโค้ดออกจาก job ที่ deploy ให้ secrets เข้าถึงได้เฉพาะ job ที่จำเป็น และใช้ OIDC เชื่อม cloud แทน key ถาวรเมื่อทำได้`,
            `การรีวิว dependency ไม่ได้แปลว่าต้องอ่านโค้ดทุกบรรทัด แต่ควรมีขั้นตอนตรวจ pull request ที่เปลี่ยน lockfile ใช้เครื่องมือตรวจช่องโหว่และแพ็กเกจที่เป็นมัลแวร์ และตั้งคำถามทุกครั้งก่อนเพิ่มแพ็กเกจใหม่ว่าจำเป็นไหม มีคนดูแลจริงไหม ฟังก์ชันเล็กๆ บางอย่างเขียนเองไม่กี่บรรทัดยังปลอดภัยกว่า`,
          ],
        },
        {
          h: `เตรียมแผนรับมือเหตุไว้ก่อน`,
          p: [
            `เมื่อมีข่าวแพ็กเกจติดเชื้อ ทีมต้องตอบได้เร็วว่าเราใช้แพ็กเกจนั้นไหม เวอร์ชันไหน อยู่ในโปรเจกต์ใด ถ้าไม่มีรายการ dependency (SBOM) หรือค้นข้ามทุก repository ได้ ชั่วโมงแรกจะหมดไปกับการเดา`,
            `เขียนแผนสั้นๆ ไว้ล่วงหน้า และซ้อมสักครั้ง ถ้าระบบเก็บข้อมูลส่วนบุคคลและมีความเสี่ยงว่าข้อมูลรั่ว อย่าลืมหน้าที่ตาม PDPA ที่ต้องแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลภายใน 72 ชั่วโมง ทีมอย่าง Haliviq ใส่ขั้นตอนเหล่านี้ไว้ใน handover ของทุกโปรเจกต์ เพื่อให้ลูกค้ารู้ว่าต้องทำอะไรเมื่อเกิดเหตุ`,
          ],
          list: [
            `ค้นหาว่าใช้แพ็กเกจและเวอร์ชันที่ได้รับผลกระทบที่ไหนบ้าง`,
            `หยุด build และ deploy ที่อาจติดตั้งเวอร์ชันนั้น`,
            `เปลี่ยน credentials ทั้งหมดบนเครื่องและ CI ที่อาจสัมผัส ไม่ใช่แค่ npm token`,
            `ตรวจหา repository หรือ workflow แปลกๆ ในบัญชี GitHub ขององค์กร`,
            `บันทึกเหตุการณ์ ประเมินผลต่อข้อมูลส่วนบุคคล และแจ้งผู้เกี่ยวข้องตามกฎหมาย`,
          ],
        },
      ],
      takeaways: [
        `Shai-Hulud ขโมย npm token แล้วใช้เผยแพร่เวอร์ชันติดเชื้อของแพ็กเกจอื่นโดยอัตโนมัติ`,
        `Commit lockfile ใช้ npm ci และหน่วงการรับเวอร์ชันที่เพิ่งออก`,
        `เปิด 2FA ใช้ trusted publishing และ token สิทธิ์น้อยที่สุดที่มีวันหมดอายุ`,
        `จำกัด secrets ใน CI ให้เฉพาะ job ที่จำเป็น และรีวิวทุกการเปลี่ยน lockfile`,
        `มีแผนรับมือเหตุที่ระบุชัดว่าต้องเปลี่ยน credentials อะไรบ้าง`,
      ],
      figCaption: `แผนภาพการแพร่ของเวิร์มผ่าน npm token และจุดที่ทีมตัดวงจรได้`,
      faq: [
        {
          q: `บริษัทเราไม่ได้เผยแพร่แพ็กเกจ npm เลย ต้องกังวลไหม`,
          a: `ต้องกังวล เพราะความเสี่ยงหลักคือการติดตั้งแพ็กเกจที่ติดเชื้อ ซึ่งอาจขโมย credentials บนเครื่องนักพัฒนาและใน CI ได้ แม้คุณจะไม่ได้เผยแพร่อะไรก็ตาม`,
        },
        {
          q: `Pin เวอร์ชันแล้วจะพลาดแพตช์ความปลอดภัยไหม`,
          a: `ไม่ถ้ามีกระบวนการอัปเดตที่สม่ำเสมอ ให้เครื่องมือเสนอการอัปเดตเป็น pull request รีวิว แล้วค่อยรวม ดีกว่าปล่อยให้เวอร์ชันใหม่เข้ามาเองโดยไม่มีใครเห็น`,
        },
      ],
    },
    en: {
      title: `Lessons from the Shai-Hulud Worm: npm Supply Chain Security for Web Teams`,
      excerpt: `The Shai-Hulud worm spread through hundreds of npm packages in 2025. What happened, and what every web team should do, from lockfiles and tokens to CI and an incident plan.`,
      metaTitle: `Shai-Hulud Lessons: Securing Your npm Supply Chain`,
      metaDescription: `What the 2025 Shai-Hulud npm worm teaches web teams: lockfiles, pinning, 2FA, trusted publishing, least-privilege tokens, CI secrets and incident plans.`,
      intro: `A modern web app is assembled from hundreds of open-source packages, and the code your team writes is only a small part of it. In mid-September 2025, a worm called Shai-Hulud showed how dangerous that can be. This article sums up what happened and turns it into steps your team can take this week.`,
      sections: [
        {
          h: `What happened with Shai-Hulud`,
          p: [
            `Shai-Hulud was a self-replicating worm on npm, found in mid-September 2025 and starting with the @ctrl/tinycolor package. When an infected version was installed, it stole the developer's npm tokens, then used them to automatically publish infected versions of the other packages that person maintained. It also harvested credentials and pushed them to public GitHub repositories.`,
            `Hundreds of packages were affected; a CISA alert on 23 September 2025 put the number at over 500. The reported entry point was a phishing email posing as an npm security alert, and it came on the heels of the August 2025 "s1ngularity" compromise of Nx. CISA advised pinning dependencies and rotating any credentials that might have been exposed.`,
          ],
          quote: `Code you did not write still runs with your permissions.`,
        },
        {
          h: `Lock what you install: lockfiles and pinning`,
          p: [
            `The first lesson is to control exactly what gets installed. Always commit a lockfile such as package-lock.json or pnpm-lock.yaml, and in CI use commands that install strictly from it, such as npm ci rather than npm install, so a freshly published version cannot slip into a build on its own.`,
            `The most dangerous window is the hours or days after an infected version goes out, before the community spots it. Slow down how quickly you adopt new versions, for example by configuring your dependency update tool to wait before proposing them. Consider disabling install scripts for packages that do not need them, since they are the main way malware runs code at install time.`,
          ],
          list: [
            `Commit the lockfile and use npm ci or its equivalent in CI.`,
            `Pin versions of critical dependencies and review every lockfile change.`,
            `Configure update tools to wait before accepting newly released versions.`,
            `Disable install scripts by default and allow them only where truly needed.`,
          ],
        },
        {
          h: `Protect accounts and tokens`,
          p: [
            `Shai-Hulud spread because it got hold of tokens that could publish packages. If your company publishes its own packages, every account with publish rights needs 2FA, and you should use trusted publishing, where CI publishes through OIDC-based identity instead of long-lived tokens stored on laptops or in secrets.`,
            `Even if you never publish, developer machines hold GitHub, cloud and API tokens that malware wants. Use the least privilege each job needs, set expiry dates and keep tokens separate per task. Train the team too: an email claiming to be from npm or GitHub that urges you to sign in right now is exactly the pattern used here.`,
          ],
        },
        {
          h: `CI secrets and dependency review`,
          p: [
            `CI is the most valuable target for attackers because it usually holds deploy secrets with access to production. Separate jobs that install and test code from jobs that deploy, expose secrets only to the jobs that need them, and use OIDC to connect to cloud providers instead of permanent keys where you can.`,
            `Reviewing dependencies does not mean reading every line. It means having a review step for pull requests that change the lockfile, using tools that flag known vulnerabilities and malicious packages, and asking before adding any new package whether you need it and whether anyone actually maintains it. Some small helpers are safer as a few lines you write yourself.`,
          ],
        },
        {
          h: `Have an incident plan ready`,
          p: [
            `When news breaks of an infected package, the team must quickly answer: do we use it, which version, and in which projects? Without a dependency inventory (SBOM) or a way to search across all repositories, the first hour goes on guessing.`,
            `Write a short plan in advance and rehearse it once. If the system holds personal data and a leak is possible, remember your PDPA duty to notify the PDPC within 72 hours where there is risk. At Haliviq we include these steps in every project handover so clients know what to do if it happens.`,
          ],
          list: [
            `Find every place the affected package and versions are used.`,
            `Pause builds and deploys that could install them.`,
            `Rotate all credentials on machines and CI that may be exposed, not just npm tokens.`,
            `Look for unfamiliar repositories or workflows in your GitHub organisation.`,
            `Log the incident, assess the impact on personal data, and notify as the law requires.`,
          ],
        },
      ],
      takeaways: [
        `Shai-Hulud stole npm tokens and used them to auto-publish infected versions of other packages.`,
        `Commit lockfiles, use npm ci, and wait before adopting freshly released versions.`,
        `Turn on 2FA, use trusted publishing and short-lived, least-privilege tokens.`,
        `Limit CI secrets to the jobs that need them and review every lockfile change.`,
        `Keep an incident plan that spells out which credentials to rotate.`,
      ],
      figCaption: `Diagram of how the worm spread through npm tokens, and where a team can break the chain.`,
      faq: [
        {
          q: `We never publish npm packages. Should we still worry?`,
          a: `Yes. The main risk is installing an infected package, which can steal credentials from developer machines and CI even if you publish nothing.`,
        },
        {
          q: `If we pin versions, will we miss security patches?`,
          a: `Not if you have a steady update routine. Let a tool propose updates as pull requests, review them, then merge. That beats new versions arriving unseen.`,
        },
      ],
    },
  },
  {
    slug: 'pwa-vs-native-2026',
    cat: 'Technology',
    date: '2026-10-14',
    readMin: 8,
    tags: ['PWA', 'Native apps', 'React Native', 'Flutter', 'Mobile strategy'],
    related: ['line-mini-app-guide', 'build-vs-buy', 'inp-core-web-vitals'],
    th: {
      title: `PWA, แอป native หรือ cross-platform: คู่มือเลือกให้เหมาะกับธุรกิจในปี 2026`,
      excerpt: `เทียบ PWA, native และ React Native หรือ Flutter ตามลักษณะงาน งบประมาณ และทีม พร้อมข้อดีข้อเสียแบบตรงไปตรงมา รวมถึงข้อจำกัดบน iOS`,
      metaTitle: `PWA vs Native vs Cross-platform: เลือกแบบไหนในปี 2026`,
      metaDescription: `ควรทำ PWA แอป native หรือ React Native และ Flutter คู่มือตัดสินใจตามลักษณะงาน งบ และทีม พร้อมข้อแลกเปลี่ยนที่ควรรู้ ทั้งเรื่อง App Store การดูแลระยะยาว และ iOS`,
      intro: `"เราควรมีแอปไหม" เป็นคำถามที่เจ้าของธุรกิจถามบ่อยพอๆ กับ "ทำแอปแบบไหนดี" ปี 2026 มีตัวเลือกหลักสามแบบ คือ PWA ที่เป็นเว็บติดตั้งได้ แอป native ที่เขียนแยกแต่ละแพลตฟอร์ม และ cross-platform อย่าง React Native หรือ Flutter บทความนี้ไม่ได้บอกว่าแบบไหนดีที่สุด แต่ช่วยให้เลือกได้ตามงานจริง`,
      sections: [
        {
          h: `สามทางเลือกต่างกันอย่างไร`,
          p: [
            `PWA (Progressive Web App) คือเว็บที่ออกแบบให้ทำงานคล้ายแอป เพิ่มลงหน้าจอหลักได้ ทำงานออฟไลน์บางส่วนได้ด้วย service worker และอัปเดตทันทีโดยไม่ต้องผ่าน App Store ใช้โค้ดชุดเดียวกับเว็บ ทีมเว็บจึงดูแลได้`,
            `แอป native เขียนด้วยภาษาของแต่ละแพลตฟอร์ม เช่น Swift สำหรับ iOS และ Kotlin สำหรับ Android ได้ประสิทธิภาพและการเข้าถึงฟีเจอร์ของเครื่องเต็มที่ แต่ต้องดูแลสองโค้ดเบส ส่วน cross-platform อย่าง React Native และ Flutter เขียนครั้งเดียวแล้วออกเป็นแอปทั้งสองระบบ ได้แอปที่ลงสโตร์จริง ใช้ฟีเจอร์เครื่องได้เกือบทั้งหมด และใช้ทีมเดียว`,
          ],
        },
        {
          h: `เลือกตามลักษณะงาน`,
          p: [
            `เริ่มจากถามว่าลูกค้าจะใช้บ่อยแค่ไหน และต้องการอะไรจากตัวเครื่อง ถ้าใช้เป็นครั้งคราว เช่น ดูเมนู จองห้อง หรือเช็กสถานะคำสั่งซื้อ ลูกค้าส่วนใหญ่ไม่อยากโหลดแอปเพิ่ม PWA หรือเว็บที่เร็ว และ LINE MINI App มักเหมาะกว่า`,
            `ถ้าใช้ทุกวัน ต้องใช้ฟีเจอร์เครื่องเชิงลึก เช่น Bluetooth กับอุปกรณ์เฉพาะ การทำงานเบื้องหลังที่ต่อเนื่อง หรือความเร็วระดับเกมและกราฟิกหนัก ให้ไปทาง native หรือ cross-platform`,
          ],
          list: [
            `ร้านค้า คลินิก โรงแรม ที่ลูกค้ามาเป็นครั้งคราว: เว็บเร็วๆ หรือ PWA คู่กับ LINE`,
            `แอปสมาชิกหรือ loyalty ที่ใช้ถี่และต้องการ push notification: cross-platform`,
            `แอปภาคสนามสำหรับพนักงานโรงงานหรือทีมขาย: PWA หรือ cross-platform ตามความต้องการออฟไลน์`,
            `แอปที่ต้องคุยกับฮาร์ดแวร์ หรือกราฟิกหนัก: native หรือ cross-platform ที่มีโมดูล native`,
            `เครื่องมือภายในองค์กร: PWA มักคุ้มที่สุด เพราะไม่ต้องผ่านสโตร์`,
          ],
        },
        {
          h: `งบประมาณ ทีม และต้นทุนระยะยาว`,
          p: [
            `ค่าพัฒนาครั้งแรกเป็นแค่ส่วนหนึ่ง ต้นทุนจริงอยู่ที่การดูแลหลายปี แอปที่ลงสโตร์ต้องอัปเดตตามเวอร์ชันระบบปฏิบัติการใหม่ทุกปี ผ่านการรีวิวของสโตร์ทุกครั้งที่ปล่อยเวอร์ชัน และต้องมีคนดูแลบัญชีนักพัฒนา ใบรับรอง และการตอบรีวิว`,
            `ถ้าทีมของคุณเป็นทีมเว็บอยู่แล้ว PWA ใช้ทักษะเดิมได้เกือบทั้งหมด React Native เหมาะกับทีมที่ใช้ React และ TypeScript ส่วน Flutter ใช้ภาษา Dart และมีระบบ UI ของตัวเองที่ให้หน้าตาเหมือนกันทุกแพลตฟอร์ม การเขียน native สองชุดเหมาะเมื่อมีงบและทีมเฉพาะทางที่ดูแลต่อได้ระยะยาว`,
          ],
          quote: `เลือกสิ่งที่ทีมของคุณดูแลได้ในปีที่สาม ไม่ใช่แค่สิ่งที่สร้างเสร็จได้ในเดือนแรก`,
        },
        {
          h: `ข้อแลกเปลี่ยนที่ควรรู้ตรงๆ รวมถึง iOS`,
          p: [
            `PWA มีข้อดีเรื่องต้นทุนและความเร็วในการปล่อยอัปเดต แต่ลูกค้าหลายคนยังไม่รู้วิธีเพิ่มเว็บลงหน้าจอหลัก และการค้นพบผ่าน App Store แทบไม่มี ที่สำคัญคือการรองรับฟีเจอร์ PWA บน iOS จำกัดกว่าบน Android มาโดยตลอด และเปลี่ยนไปตามเวอร์ชันและนโยบายของแต่ละภูมิภาค จึงไม่ควรวางแผนจากรายการฟีเจอร์ที่อ่านเจอ ให้ทดสอบฟีเจอร์ที่จำเป็นบน iPhone จริงก่อนตัดสินใจ`,
            `Cross-platform ประหยัดกว่าการเขียน native สองชุด แต่บางครั้งต้องเขียนโมดูล native เพิ่มสำหรับฟีเจอร์เฉพาะ และต้องคอยอัปเดตไลบรารีตามระบบปฏิบัติการ native ให้ผลดีที่สุดบนแต่ละแพลตฟอร์ม แต่ใช้เวลาและงบมากที่สุด และทุกแบบที่ลงสโตร์ต้องเผื่อเวลาสำหรับการรีวิว`,
          ],
        },
        {
          h: `กรอบตัดสินใจแบบง่าย`,
          p: [
            `ถ้ายังไม่แน่ใจว่าลูกค้าต้องการแอปจริงไหม ให้เริ่มจากเว็บที่เร็วและใช้งานบนมือถือดี หรือ PWA แล้ววัดว่าคนกลับมาใช้ซ้ำบ่อยแค่ไหน ข้อมูลนี้ช่วยตัดสินใจลงทุนแอปได้ดีกว่าการเดา ส่วนโค้ดฝั่ง backend และ API ที่ทำไว้ยังใช้ต่อกับแอปได้`,
            `ทีมอย่าง Haliviq มักแนะนำให้ลูกค้าเขียนเหตุผลเป็นข้อๆ ว่าแอปจะทำอะไรที่เว็บทำไม่ได้ ถ้าตอบได้ชัดและเป็นสิ่งที่ลูกค้าใช้บ่อย การลงทุนแอปก็คุ้ม ถ้าตอบไม่ได้ เว็บที่ดีมักให้ผลตอบแทนมากกว่า`,
          ],
          list: [
            `ลูกค้าจะใช้บ่อยแค่ไหน รายวัน รายสัปดาห์ หรือนานๆ ครั้ง`,
            `ต้องใช้ฟีเจอร์เครื่องอะไรบ้าง และทดสอบบน iPhone กับ Android จริงแล้วหรือยัง`,
            `ทีมที่จะดูแลในระยะยาวถนัดเทคโนโลยีไหน`,
            `ต้องอยู่ใน App Store และ Google Play เพื่อความน่าเชื่อถือหรือไม่`,
            `งบดูแลรายปีพอสำหรับอัปเดตตามระบบปฏิบัติการใหม่หรือเปล่า`,
          ],
        },
      ],
      takeaways: [
        `PWA ถูกและอัปเดตเร็ว เหมาะกับงานที่ใช้เป็นครั้งคราวและเครื่องมือภายใน`,
        `React Native และ Flutter ให้แอปลงสโตร์จริงด้วยทีมเดียว`,
        `Native ให้ประสิทธิภาพและการเข้าถึงเครื่องสูงสุด แต่แพงที่สุดในการดูแล`,
        `ฟีเจอร์ PWA บน iOS จำกัดกว่าและเปลี่ยนได้ ต้องทดสอบบนเครื่องจริงก่อนตัดสินใจ`,
        `คิดต้นทุนการดูแลหลายปี ไม่ใช่แค่ค่าสร้างครั้งแรก`,
      ],
      figCaption: `ตารางเปรียบเทียบ PWA, cross-platform และ native ตามความถี่การใช้งาน ฟีเจอร์เครื่อง และต้นทุน`,
      faq: [
        {
          q: `PWA ลงใน App Store ได้ไหม`,
          a: `โดยทั่วไป PWA ติดตั้งจากเบราว์เซอร์ ไม่ได้ผ่านสโตร์ มีวิธีห่อเว็บเป็นแอปเพื่อลงสโตร์ได้ แต่ต้องผ่านกฎการรีวิวของสโตร์ และแอปที่เป็นแค่เว็บห่อไว้อาจไม่ผ่าน`,
        },
        {
          q: `React Native กับ Flutter อันไหนดีกว่า`,
          a: `ทั้งคู่ใช้ทำแอปจริงได้ดี เลือกตามทีม ถ้าทีมถนัด React และ TypeScript ให้ดู React Native ถ้าต้องการ UI ที่ควบคุมได้เหมือนกันทุกแพลตฟอร์มและพร้อมเรียน Dart ให้ดู Flutter`,
        },
        {
          q: `เริ่มจาก PWA แล้วค่อยทำแอปทีหลังได้ไหม`,
          a: `ได้ และมักเป็นทางที่ดี เพราะ backend และ API ใช้ต่อได้ และคุณจะมีข้อมูลการใช้งานจริงมาประกอบการตัดสินใจ`,
        },
      ],
    },
    en: {
      title: `PWA, Native or Cross-Platform: A 2026 Decision Guide for Businesses`,
      excerpt: `Comparing PWAs, native apps and React Native or Flutter by use case, budget and team, with honest trade-offs, including the limits you meet on iOS.`,
      metaTitle: `PWA vs Native vs Cross-Platform: How to Choose in 2026`,
      metaDescription: `PWA, native app, or React Native and Flutter? A decision guide by use case, budget and team, with honest trade-offs on app stores, upkeep and iOS limits.`,
      intro: `"Do we need an app?" comes up as often as "What kind of app should we build?" In 2026 there are three main routes: a PWA, which is an installable website; native apps written separately for each platform; and cross-platform frameworks such as React Native or Flutter. This guide does not crown a winner. It helps you choose based on the job in front of you.`,
      sections: [
        {
          h: `How the three options differ`,
          p: [
            `A PWA (Progressive Web App) is a website built to behave like an app. It can be added to the home screen, work partly offline through a service worker, and update instantly without going through an app store. It shares code with your website, so a web team can maintain it.`,
            `Native apps are written in each platform's own language, such as Swift for iOS and Kotlin for Android. They give full performance and full access to device features, but you maintain two codebases. Cross-platform frameworks such as React Native and Flutter let you write once and ship to both, producing real store apps with access to nearly all device features, run by one team.`,
          ],
        },
        {
          h: `Choose by use case`,
          p: [
            `Start by asking how often customers will use it and what they need from the device. For occasional tasks, such as checking a menu, booking a room or tracking an order, most people do not want another app. A fast website or PWA, plus a LINE MINI App, is often the better fit.`,
            `For daily use, deep device features such as Bluetooth with specific hardware, sustained background work, or game-level speed and heavy graphics, go native or cross-platform.`,
          ],
          list: [
            `Shops, clinics and hotels with occasional visitors: a fast website or PWA alongside LINE.`,
            `Membership or loyalty apps used often and needing push notifications: cross-platform.`,
            `Field apps for factory staff or sales teams: PWA or cross-platform, depending on offline needs.`,
            `Apps that talk to hardware or need heavy graphics: native, or cross-platform with native modules.`,
            `Internal tools: a PWA is often the best value, with no store in the way.`,
          ],
        },
        {
          h: `Budget, team and long-term cost`,
          p: [
            `The first build is only part of the bill. The real cost is years of upkeep. A store app must keep up with new operating system versions every year, pass store review on every release, and have someone managing developer accounts, certificates and review replies.`,
            `If your team is already a web team, a PWA reuses almost all of their skills. React Native suits teams working in React and TypeScript. Flutter uses Dart and its own UI system, which gives a consistent look on every platform. Two native codebases make sense when you have the budget and a specialist team that will stay for the long run.`,
          ],
          quote: `Choose what your team can still maintain in year three, not just what it can ship in month one.`,
        },
        {
          h: `Honest trade-offs, including iOS`,
          p: [
            `PWAs win on cost and update speed, but many customers do not know how to add a site to the home screen, and there is little discovery through app stores. Importantly, support for PWA features on iOS has historically been more limited than on Android, and it changes with OS versions and regional policies. Do not plan from a feature list you read somewhere: test the features you need on real iPhones before deciding.`,
            `Cross-platform costs less than two native apps, but sometimes you need custom native modules for specific features, and libraries must keep pace with each OS. Native gives the best result on each platform, at the highest cost and time. Every option that goes through a store needs time set aside for review.`,
          ],
        },
        {
          h: `A simple decision framework`,
          p: [
            `If you are not sure customers really need an app, start with a fast, mobile-friendly website or a PWA and measure how often people come back. That data is a better basis for investing in an app than guesswork, and the backend and APIs you build carry straight over to an app later.`,
            `At Haliviq we often ask clients to list, point by point, what the app will do that the web cannot. If the answers are clear and customers would use them often, the app is worth it. If not, a great website usually pays back more.`,
          ],
          list: [
            `How often will customers use it: daily, weekly or rarely?`,
            `Which device features do you need, and have you tested them on real iPhones and Android phones?`,
            `Which technology does the long-term team know best?`,
            `Do you need to be in the App Store and Google Play for credibility?`,
            `Is the yearly maintenance budget enough to keep up with new OS releases?`,
          ],
        },
      ],
      takeaways: [
        `PWAs are cheap and quick to update, ideal for occasional use and internal tools.`,
        `React Native and Flutter deliver real store apps with a single team.`,
        `Native gives top performance and device access, but costs the most to maintain.`,
        `PWA features on iOS are more limited and can change, so test on real devices first.`,
        `Budget for years of upkeep, not just the first build.`,
      ],
      figCaption: `Comparison of PWA, cross-platform and native by frequency of use, device features and cost.`,
      faq: [
        {
          q: `Can a PWA go in the App Store?`,
          a: `Usually a PWA is installed from the browser, not a store. You can wrap a website as a store app, but it must pass store review, and an app that is only a thin wrapper may be rejected.`,
        },
        {
          q: `React Native or Flutter: which is better?`,
          a: `Both are solid for real apps. Choose by team: React and TypeScript skills point to React Native; wanting tightly controlled, identical UI across platforms and being ready to learn Dart points to Flutter.`,
        },
        {
          q: `Can we start with a PWA and build an app later?`,
          a: `Yes, and it is often the smart route. The backend and APIs carry over, and you will have real usage data to guide the decision.`,
        },
      ],
    },
  },
]
