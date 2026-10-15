import type { Article } from '@/lib/blog-types'

export const techArticles: Article[] = [
  {
    slug: 'passkeys-passwordless',
    cat: 'Technology',
    date: '2026-09-04',
    readMin: 8,
    tags: ['Passkeys', 'WebAuthn', 'FIDO2', 'Passwordless', 'Authentication'],
    related: ['thailand-pdpa-guide', 'ai-agent-guardrails', 'nextjs-perf'],
    th: {
      title: `Passkeys และการล็อกอินแบบไม่ใช้รหัสผ่าน: ทำความเข้าใจและวางแผนเปิดใช้ในแอป`,
      excerpt: `Passkey คืออะไร ทำไมกัน phishing ได้ดีกว่ารหัสผ่าน และทีมพัฒนาควรเปิดใช้ทีละขั้นอย่างไร พร้อมแนวทางกู้บัญชีและ UX`,
      metaTitle: `Passkeys คืออะไร วางแผนล็อกอินไร้รหัสผ่านในแอป`,
      metaDescription: `ทำความเข้าใจ Passkeys, WebAuthn และ FIDO ว่าทำไมกัน phishing ได้ พร้อมขั้นตอนเปิดใช้ในแอป ช่องทางสำรองเมื่อเข้าไม่ได้ และเคล็ดลับ UX ที่ผู้ใช้เข้าใจง่าย`,
      intro: `รหัสผ่านเป็นจุดอ่อนที่ทุกทีมรู้ดี คนใช้ซ้ำ จำยาก และโดนหลอกเอาไปได้ง่าย Passkey คือทางเลือกที่ผู้ให้บริการใหญ่ๆ ทั้งฝั่งมือถือและเบราว์เซอร์รองรับแล้ว บทความนี้อธิบายหลักการแบบไม่ลงลึกเกินไป และแนะนำลำดับการเปิดใช้ในแอปของคุณ`,
      sections: [
        {
          h: `Passkey คืออะไร และ WebAuthn เกี่ยวอย่างไร`,
          p: [
            `Passkey คือข้อมูลยืนยันตัวตนที่ใช้แทนรหัสผ่าน ทำงานบนมาตรฐาน WebAuthn ของ W3C ร่วมกับข้อกำหนดของ FIDO Alliance เมื่อผู้ใช้สร้าง passkey อุปกรณ์จะสร้างกุญแจสองดอกเป็นคู่ คือ public key ที่เก็บไว้ที่เซิร์ฟเวอร์ของคุณ และ private key ที่อยู่ในอุปกรณ์ของผู้ใช้เท่านั้น`,
            `ตอนล็อกอิน เซิร์ฟเวอร์ส่งโจทย์สุ่มมาให้ อุปกรณ์เซ็นโจทย์ด้วย private key หลังจากผู้ใช้ปลดล็อกด้วยลายนิ้วมือ ใบหน้า หรือ PIN ของเครื่อง แล้วเซิร์ฟเวอร์ตรวจลายเซ็นด้วย public key จึงไม่มีความลับที่ใช้ร่วมกันส่งผ่านเครือข่ายเลย`,
            `ที่ผู้ใช้เห็นคือแค่ปลดล็อกเครื่องตามปกติ เหมือนตอนเปิดแอปธนาคาร ผู้ให้บริการอย่าง Apple, Google และ Microsoft ซิงก์ passkey ข้ามอุปกรณ์ในบัญชีเดียวกันได้ ผู้ใช้จึงไม่ต้องตั้งค่าใหม่ทุกครั้งที่เปลี่ยนเครื่อง`,
          ],
        },
        {
          h: `ทำไมถึงทนต่อ phishing`,
          p: [
            `รหัสผ่านโดนหลอกได้เพราะผู้ใช้พิมพ์เองบนเว็บปลอมที่หน้าตาเหมือนจริง ส่วน passkey ผูกกับโดเมนที่สร้างไว้ เบราว์เซอร์จะไม่ยอมใช้ passkey ของ yourbank.co.th บนเว็บอย่าง yourbank-login.example ต่อให้ผู้ใช้ตั้งใจจะกดก็ตาม`,
            `นอกจากนั้นไม่มีรหัสผ่านเก็บอยู่ที่เซิร์ฟเวอร์ให้โดนขโมย ถ้าฐานข้อมูลรั่ว สิ่งที่ผู้โจมตีได้คือ public key ซึ่งเอาไปล็อกอินไม่ได้ และไม่มีรหัส OTP ทาง SMS ที่ถูกดักหรือหลอกถามได้ แต่ passkey ไม่ได้แก้ทุกอย่าง เช่น ถ้าเครื่องผู้ใช้ถูกควบคุมจากมัลแวร์ หรือกระบวนการกู้บัญชีของคุณอ่อน ผู้โจมตีก็ยังอ้อมเข้ามาได้`,
          ],
        },
        {
          h: `ขั้นตอนเปิดใช้ในแอปของคุณ`,
          p: [
            `ไม่จำเป็นต้องเลิกใช้รหัสผ่านทันที วิธีที่ปลอดภัยคือเพิ่ม passkey เป็นตัวเลือกควบคู่ก่อน แล้วค่อยๆ ลดบทบาทของรหัสผ่านเมื่อผู้ใช้ส่วนใหญ่เปลี่ยนมาใช้แล้ว`,
            `ควรใช้ไลบรารี WebAuthn ที่มีคนดูแลอยู่แล้วทั้งฝั่งเซิร์ฟเวอร์และเบราว์เซอร์ แทนการเขียนการตรวจลายเซ็นเอง เพราะรายละเอียดเล็กน้อยผิดไปนิดเดียวก็เป็นช่องโหว่ได้ และเก็บ credential ID กับ public key แยกตามผู้ใช้ โดยให้ผู้ใช้หนึ่งคนมีได้หลาย passkey`,
          ],
          list: [
            `เลือกไลบรารีหรือผู้ให้บริการยืนยันตัวตนที่รองรับ WebAuthn และทดสอบบนมือถือและเบราว์เซอร์ที่ลูกค้าใช้จริง`,
            `เพิ่มปุ่มสร้าง passkey หลังล็อกอินสำเร็จ เช่น หลังกรอกรหัสผ่านหรือยืนยันทางอีเมล`,
            `รองรับ conditional UI ให้เบราว์เซอร์เสนอ passkey ในช่องกรอกอีเมลอัตโนมัติ`,
            `ติดตามสัดส่วนผู้ใช้ที่ล็อกอินสำเร็จด้วย passkey และจุดที่ผู้ใช้เลิกกลางทาง`,
            `เมื่อพร้อมแล้ว ค่อยเสนอให้ผู้ใช้ปิดการใช้รหัสผ่านของตัวเอง`,
          ],
        },
        {
          h: `ช่องทางสำรองและการกู้บัญชี`,
          p: [
            `ผู้ใช้ทำเครื่องหาย เปลี่ยนมือถือ หรือใช้เครื่องที่ไม่รองรับ ได้เสมอ ถ้าไม่มีทางออกที่ปลอดภัย ฝ่ายซัพพอร์ตจะเต็มไปด้วยคนที่เข้าบัญชีไม่ได้ และปลายทางมักจบที่ช่องทางกู้บัญชีที่อ่อนที่สุด ซึ่งผู้โจมตีจะเลือกเข้าทางนั้น`,
            `แนวทางที่ใช้ได้คือให้ผู้ใช้ลงทะเบียน passkey มากกว่าหนึ่งอัน เก็บวิธีสำรอง เช่น ลิงก์ยืนยันทางอีเมลที่ทำให้ยาก หรือรหัสกู้คืนที่ให้ผู้ใช้เก็บเอง และกำหนดขั้นตอนยืนยันตัวตนกับฝ่ายบริการที่ชัดเจนสำหรับบัญชีสำคัญ ทุกการกู้บัญชีควรแจ้งเตือนผู้ใช้ทางอีเมลหรือ LINE และมีช่วงรอก่อนเปลี่ยนวิธียืนยันตัวตน`,
          ],
          quote: `ระบบล็อกอินจะแข็งแรงเท่ากับทางกู้บัญชีที่อ่อนที่สุดของมัน`,
        },
        {
          h: `เคล็ดลับ UX ที่ทำให้ผู้ใช้เข้าใจ`,
          p: [
            `คำว่า passkey ยังใหม่สำหรับผู้ใช้ทั่วไป ใช้ภาษาที่เห็นภาพ เช่น "ล็อกอินด้วยลายนิ้วมือหรือการปลดล็อกเครื่อง" แล้วค่อยบอกว่าเรียกว่า passkey ใส่ข้อความสั้นๆ บอกว่าข้อมูลไม่ได้ถูกส่งไปที่ไหน และเพิ่มภาพประกอบหน้าจอที่ผู้ใช้จะพบ`,
            `เลือกเวลาเสนออย่างเหมาะสม อย่าเด้งหน้าต่างให้สร้าง passkey ตั้งแต่ก่อนผู้ใช้ทำอะไรเสร็จ ให้เสนอหลังล็อกอินหรือชำระเงินสำเร็จ และเก็บปุ่ม "ใช้วิธีอื่น" ไว้เสมอ ตั้งชื่อ passkey ในหน้าบัญชี เช่น "iPhone ของฉัน" เพื่อให้ผู้ใช้จัดการหรือลบได้เอง`,
          ],
        },
      ],
      takeaways: [
        `Passkey ใช้คู่กุญแจ public/private บนมาตรฐาน WebAuthn ไม่มีความลับร่วมที่ต้องส่งหรือเก็บ`,
        `ผูกกับโดเมน จึงทนต่อเว็บปลอมได้ดีกว่ารหัสผ่านและ OTP ทาง SMS`,
        `เปิดเป็นตัวเลือกควบคู่ก่อน แล้วค่อยลดบทบาทรหัสผ่าน`,
        `วางทางสำรองและการกู้บัญชีให้ดี เพราะเป็นจุดที่ผู้โจมตีมักเลือกเข้า`,
        `สื่อสารด้วยภาษาง่ายๆ เสนอ passkey ในจังหวะที่เหมาะ และมีทางเลือกอื่นเสมอ`,
      ],
      figCaption: `แผนภาพการสร้างและการใช้ passkey ระหว่างอุปกรณ์ผู้ใช้กับเซิร์ฟเวอร์`,
      faq: [
        {
          q: `ถ้าผู้ใช้ทำมือถือหาย จะเข้าบัญชีได้อย่างไร`,
          a: `ถ้า passkey ซิงก์กับบัญชีของระบบอย่าง Apple หรือ Google ผู้ใช้ล็อกอินบัญชีนั้นบนเครื่องใหม่ก็ได้ passkey คืน ถ้าไม่ได้ ต้องมีทางสำรองที่คุณออกแบบไว้ เช่น passkey อีกอัน หรือรหัสกู้คืน`,
        },
        {
          q: `Passkey ปลอดภัยกว่า OTP ทาง SMS จริงไหม`,
          a: `โดยทั่วไปใช่ เพราะ OTP ทาง SMS ถูกหลอกถามหรือดักได้ ส่วน passkey ผูกกับโดเมนและไม่มีรหัสให้ผู้ใช้บอกใคร อย่างไรก็ตามความปลอดภัยรวมยังขึ้นกับทางกู้บัญชีด้วย`,
        },
        {
          q: `ต้องใช้ฮาร์ดแวร์พิเศษไหม`,
          a: `ไม่จำเป็น มือถือและคอมพิวเตอร์รุ่นปัจจุบันส่วนใหญ่รองรับอยู่แล้ว ผู้ใช้ปลดล็อกด้วยวิธีที่ใช้ปลดล็อกเครื่องอยู่ แต่ควรทดสอบกับอุปกรณ์รุ่นเก่าที่ลูกค้าคุณใช้จริง`,
        },
      ],
    },
    en: {
      title: `Passkeys and Passwordless Sign-In: What They Are and How to Roll Them Out`,
      excerpt: `What a passkey is, why it resists phishing better than passwords, and how an app team can roll it out step by step, with recovery and UX advice.`,
      metaTitle: `Passkeys Explained: Passwordless Sign-In for Your App`,
      metaDescription: `Passkeys, WebAuthn and FIDO explained: why they resist phishing, how to roll them out in your app, what to do about recovery, and UX tips users understand.`,
      intro: `Passwords are the weak point every team knows about. People reuse them, forget them, and get tricked into handing them over. Passkeys are the alternative that major phone, browser and platform vendors now support. This article explains the idea without too much jargon and suggests an order for adding them to your app.`,
      sections: [
        {
          h: `What a passkey is, and where WebAuthn fits`,
          p: [
            `A passkey is a credential that replaces a password. It is built on the W3C WebAuthn standard together with FIDO Alliance specifications. When a user creates one, their device generates a matched pair of keys: a public key stored on your server, and a private key that stays on the user's device.`,
            `At sign-in the server sends a random challenge. The device signs it with the private key after the user unlocks with a fingerprint, face or the device PIN, and the server checks the signature with the public key. No shared secret ever travels over the network.`,
            `For the user it feels like the normal screen unlock they already do to open a banking app. Platform vendors such as Apple, Google and Microsoft can sync passkeys across devices on the same account, so people do not start from zero each time they change phones.`,
          ],
        },
        {
          h: `Why it resists phishing`,
          p: [
            `Passwords get phished because users type them into a convincing fake site. A passkey is bound to the domain it was created for. The browser will not offer a passkey for yourbank.co.th on a site like yourbank-login.example, even if the user wants to continue.`,
            `There is also no password sitting on your server to steal. If the database leaks, an attacker gets public keys, which cannot be used to sign in, and there is no SMS code that can be intercepted or talked out of someone. Passkeys do not fix everything, though: if the user's device is controlled by malware, or your account recovery is weak, attackers can still get around them.`,
          ],
        },
        {
          h: `Rolling it out in your app`,
          p: [
            `You do not need to remove passwords on day one. The safer path is to add passkeys as an option next to them, then reduce the role of passwords as most users move over.`,
            `Use maintained WebAuthn libraries on both server and browser rather than writing signature checks yourself, since a small mistake in the details can become a vulnerability. Store the credential ID and public key per user, and allow each user to hold several passkeys.`,
          ],
          list: [
            `Pick a library or identity provider that supports WebAuthn, and test on the phones and browsers your customers really use.`,
            `Offer passkey creation right after a successful sign-in, for example after a password or email verification.`,
            `Support conditional UI so the browser can suggest a passkey in the email field automatically.`,
            `Track the share of sign-ins completed with passkeys, and where users abandon the flow.`,
            `Once adoption is solid, let users choose to turn off their own password.`,
          ],
        },
        {
          h: `Fallback and account recovery`,
          p: [
            `Users lose devices, change phones and use browsers that do not support passkeys. Without a safe way out, support fills up with locked-out people, and recovery ends up being the weakest path, which is exactly where attackers will go.`,
            `A workable pattern is to encourage registering more than one passkey, keep a hard-to-abuse backup such as an email link or a recovery code the user stores, and define a clear identity check for high-value accounts. Notify users by email or LINE on every recovery, and add a waiting period before changing how an account verifies identity.`,
          ],
          quote: `A sign-in system is only as strong as its weakest way back in.`,
        },
        {
          h: `UX tips that help people understand`,
          p: [
            `The word passkey is still new to most users. Describe it in pictures and plain words, such as "sign in with your fingerprint or device unlock", and then mention the name. Add a short note that nothing secret is sent anywhere, and show screenshots of the prompts they will see.`,
            `Time the offer carefully. Do not pop up a passkey prompt before the user has finished what they came to do. Offer it after a successful sign-in or checkout, always keep a "use another method" link, and let people name their passkeys in account settings, such as "My iPhone", so they can manage or remove them.`,
          ],
        },
      ],
      takeaways: [
        `A passkey is a public/private key pair on the WebAuthn standard, with no shared secret to send or store.`,
        `Because it is bound to the domain, it resists fake sites better than passwords or SMS codes.`,
        `Add it alongside passwords first, then reduce the role of passwords over time.`,
        `Design fallback and recovery carefully, since attackers target the weakest route.`,
        `Explain it in plain words, offer it at the right moment, and always keep another option.`,
      ],
      figCaption: `Diagram of how a passkey is created and used between the user's device and the server.`,
      faq: [
        {
          q: `What if a user loses their phone?`,
          a: `If the passkey syncs through a platform account such as Apple or Google, signing in to that account on a new device restores it. If not, you need a backup you designed, such as a second passkey or a recovery code.`,
        },
        {
          q: `Are passkeys really safer than SMS codes?`,
          a: `Generally yes, since SMS codes can be intercepted or talked out of users, while a passkey is bound to the domain and there is nothing for the user to read out. Overall safety still depends on your recovery path.`,
        },
        {
          q: `Do users need special hardware?`,
          a: `No. Most current phones and computers support passkeys, and users unlock the way they already unlock the device. Still, test against the older devices your customers actually use.`,
        },
      ],
    },
  },
  {
    slug: 'thailand-pdpa-guide',
    cat: 'Technology',
    date: '2026-08-21',
    readMin: 10,
    tags: ['PDPA', 'Thailand', 'Data privacy', 'Compliance', 'Product teams'],
    related: ['passkeys-passwordless', 'ai-regulation-world', 'build-vs-buy'],
    th: {
      title: `PDPA สำหรับทีมโปรดักต์: สิ่งที่ต้องรู้และเช็กลิสต์ที่ทำได้จริง`,
      excerpt: `ฐานทางกฎหมาย การขอความยินยอม privacy notice สิทธิเจ้าของข้อมูล ระยะเวลาเก็บ ผู้ให้บริการภายนอก และการรับมือข้อมูลรั่ว สำหรับทีมที่ทำแอปและเว็บ`,
      metaTitle: `PDPA ไทยสำหรับทีมพัฒนาแอปและเว็บ เช็กลิสต์`,
      metaDescription: `สรุป PDPA ไทยสำหรับทีมโปรดักต์: ฐานทางกฎหมาย ความยินยอม privacy notice สิทธิเจ้าของข้อมูล การเก็บรักษา ผู้ให้บริการ และเช็กลิสต์ที่นำไปใช้ได้`,
      intro: `พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล หรือ PDPA ของไทย มีผลบังคับใช้เต็มรูปแบบตั้งแต่ปี 2022 ทีมที่ทำแอปหรือเว็บมักรู้สึกว่าเป็นเรื่องของฝ่ายกฎหมาย แต่จริงๆ การตัดสินใจเรื่องฟอร์ม ฐานข้อมูล และเครื่องมือภายนอก เกิดขึ้นในทีมโปรดักต์ บทความนี้สรุปหลักพื้นฐานและเช็กลิสต์ให้ทีมเริ่มต้นได้ โดยไม่ใช่คำปรึกษาทางกฎหมาย`,
      sections: [
        {
          h: `เริ่มจากรู้ว่าเก็บข้อมูลอะไร ไปทำอะไร`,
          p: [
            `ข้อมูลส่วนบุคคลคือข้อมูลที่ระบุตัวบุคคลได้ ไม่ว่าทางตรงหรือทางอ้อม เช่น ชื่อ เบอร์โทร อีเมล ที่อยู่ รวมถึง IP address, cookie ID และ LINE user ID ที่โยงกลับถึงตัวคนได้ ข้อมูลบางประเภทที่ละเอียดอ่อน เช่น สุขภาพ ศาสนา หรือข้อมูลชีวภาพ มีเงื่อนไขเข้มงวดกว่า`,
            `ก่อนอ่านข้อกฎหมาย ให้ทีมทำแผนผังข้อมูลง่ายๆ ว่าเก็บอะไร จากช่องทางไหน เก็บไว้ที่ไหน ใครเข้าถึงได้ และส่งต่อให้ใคร ซึ่งมักพบว่าฟอร์มบางช่องไม่มีใครใช้ แต่ยังเก็บอยู่ และกฎหมายนี้ให้เก็บเท่าที่จำเป็นกับวัตถุประสงค์`,
          ],
        },
        {
          h: `ฐานทางกฎหมายและการขอความยินยอม`,
          p: [
            `PDPA ไม่ได้บอกว่าต้องขอความยินยอมทุกครั้ง การเก็บและใช้ข้อมูลต้องมีฐานทางกฎหมายอย่างใดอย่างหนึ่ง เช่น ความยินยอม การปฏิบัติตามสัญญา หน้าที่ตามกฎหมาย ประโยชน์สำคัญต่อชีวิต ภารกิจของรัฐ หรือประโยชน์โดยชอบด้วยกฎหมาย ตัวอย่างเช่น การเก็บที่อยู่เพื่อส่งสินค้าที่ลูกค้าสั่ง ใช้ฐานสัญญาได้ ไม่ต้องขอความยินยอม`,
            `ความยินยอมจำเป็นกับกรณีอย่างการส่งการตลาดหรือข้อมูลละเอียดอ่อน และต้องขอแบบชัดเจน แยกจากข้อตกลงอื่น ไม่ติ๊กไว้ล่วงหน้า บอกวัตถุประสงค์ และถอนได้ง่ายเท่ากับตอนให้ ควรเก็บบันทึกว่าใครยินยอมเมื่อไรและในข้อความเวอร์ชันไหน`,
          ],
        },
        {
          h: `Privacy notice และสิทธิของเจ้าของข้อมูล`,
          p: [
            `ต้องแจ้งผู้ใช้ก่อนหรือขณะเก็บข้อมูลว่า เก็บอะไร เพื่ออะไร ใช้ฐานทางกฎหมายใด เก็บนานเท่าไร เปิดเผยให้ใคร และติดต่อใครเมื่อมีคำถาม เขียนเป็นภาษาไทยที่อ่านรู้เรื่อง ไม่ใช่ข้อความทางกฎหมายยาวหลายหน้าที่ไม่มีใครอ่าน และวางลิงก์ไว้ตรงจุดที่เก็บข้อมูลจริง เช่น ใต้ฟอร์ม`,
            `เจ้าของข้อมูลมีสิทธิหลายอย่าง และทีมต้องมีวิธีรับมือในทางปฏิบัติ ตั้งแต่ใครรับคำขอ ยืนยันตัวตนอย่างไร และต้องค้นข้อมูลจากระบบไหนบ้าง การมีช่องทางรับคำขอที่ชัดเจนตั้งแต่ต้นถูกกว่าการวุ่นวายตอนมีคนยื่นคำขอจริง`,
          ],
          list: [
            `สิทธิเข้าถึงและขอสำเนาข้อมูล`,
            `สิทธิแก้ไขข้อมูลให้ถูกต้อง`,
            `สิทธิขอลบหรือทำให้ไม่สามารถระบุตัวตนได้`,
            `สิทธิคัดค้านและขอจำกัดการใช้`,
            `สิทธิขอรับหรือโอนย้ายข้อมูล และสิทธิถอนความยินยอม`,
          ],
        },
        {
          h: `ระยะเวลาเก็บและการใช้ผู้ให้บริการภายนอก`,
          p: [
            `ควรกำหนดว่าข้อมูลแต่ละประเภทเก็บนานเท่าไรและเพราะอะไร เช่น ข้อมูลบัญชีที่ต้องเก็บตามกฎหมายภาษีเก็บตามนั้น ข้อมูลผู้สมัครงานที่ไม่ได้รับเข้าทำงานอาจเก็บสั้นกว่า แล้วทำให้ระบบลบหรือทำให้ไม่ระบุตัวตนอัตโนมัติ แทนการหวังว่าจะมีคนมานั่งลบ`,
            `เมื่อใช้ผู้ให้บริการภายนอก เช่น ระบบอีเมล คลาวด์ เครื่องมือ analytics หรือ CRM บริษัทของคุณยังเป็นผู้รับผิดชอบหลักต่อข้อมูลลูกค้า ควรมีข้อตกลงประมวลผลข้อมูล (DPA) ตรวจว่าผู้ให้บริการเก็บข้อมูลไว้ที่ใด และถ้าส่งข้อมูลไปต่างประเทศ ต้องดูเงื่อนไขการโอนข้อมูลข้ามประเทศด้วย`,
          ],
          quote: `ข้อมูลที่ไม่ได้เก็บไว้ คือข้อมูลที่ไม่มีวันรั่ว`,
        },
        {
          h: `เตรียมพร้อมรับมือข้อมูลรั่วและเช็กลิสต์`,
          p: [
            `PDPA กำหนดให้ผู้ควบคุมข้อมูลแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPC) ภายใน 72 ชั่วโมงนับจากรู้เหตุ หากเหตุนั้นมีความเสี่ยงต่อสิทธิและเสรีภาพของบุคคล และต้องแจ้งเจ้าของข้อมูลด้วยถ้าความเสี่ยงสูง ดังนั้นควรเขียนแผนล่วงหน้าว่าใครตัดสินใจ ใครสื่อสาร และเก็บ log อะไรไว้สืบสวน`,
            `สรุปเป็นเช็กลิสต์ที่ทีมใช้ได้ทันที โปรดตรวจรายละเอียดตามกฎหมายและประกาศล่าสุดของ PDPC กับที่ปรึกษากฎหมายของคุณ บทความนี้ให้ข้อมูลทั่วไป ไม่ใช่คำแนะนำทางกฎหมาย`,
          ],
          list: [
            `มีแผนผังข้อมูลว่าเก็บอะไร ที่ไหน ใครเข้าถึง`,
            `ทุกการเก็บข้อมูลมีฐานทางกฎหมายและวัตถุประสงค์ที่เขียนไว้`,
            `ความยินยอมแยกชัดเจน ไม่ติ๊กล่วงหน้า ถอนได้ และมีบันทึก`,
            `มี privacy notice ภาษาไทยที่อ่านง่าย วางตรงจุดเก็บข้อมูล`,
            `มีขั้นตอนรับและตอบคำขอใช้สิทธิของเจ้าของข้อมูล`,
            `กำหนดระยะเวลาเก็บและระบบลบอัตโนมัติ`,
            `มี DPA กับผู้ให้บริการภายนอก และตรวจเรื่องการส่งข้อมูลไปต่างประเทศ`,
            `มีแผนรับมือข้อมูลรั่ว ระบุผู้รับผิดชอบและขั้นตอนแจ้ง`,
          ],
        },
      ],
      takeaways: [
        `เริ่มจากแผนผังข้อมูล รู้ว่าเก็บอะไรและเพราะอะไร`,
        `ความยินยอมไม่ใช่ฐานเดียว ใช้ฐานที่เหมาะกับแต่ละการใช้งาน และขอแบบชัดเจนเมื่อจำเป็น`,
        `Privacy notice ต้องอ่านง่ายและอยู่ตรงจุดเก็บข้อมูล`,
        `ออกแบบวิธีรับคำขอใช้สิทธิ กำหนดระยะเวลาเก็บ และทำข้อตกลงกับผู้ให้บริการภายนอก`,
        `เตรียมแผนรับมือข้อมูลรั่วไว้ก่อนเกิดเหตุ และปรึกษาที่ปรึกษากฎหมายสำหรับรายละเอียด`,
      ],
      figCaption: `แผนภาพวงจรข้อมูลส่วนบุคคล ตั้งแต่เก็บ ใช้ ส่งต่อ จนถึงลบ`,
      faq: [
        {
          q: `ต้องขอความยินยอมจากผู้ใช้ทุกครั้งที่เก็บข้อมูลไหม`,
          a: `ไม่จำเป็น PDPA มีฐานทางกฎหมายหลายอย่าง เช่น สัญญาและประโยชน์โดยชอบด้วยกฎหมาย ความยินยอมใช้ในกรณีที่ไม่มีฐานอื่นรองรับ เช่น การตลาดบางประเภทหรือข้อมูลละเอียดอ่อน ควรให้ที่ปรึกษากฎหมายช่วยตรวจกรณีของคุณ`,
        },
        {
          q: `ใช้ Google Analytics หรือเครื่องมือต่างประเทศได้ไหม`,
          a: `ใช้ได้ แต่ควรแจ้งไว้ใน privacy notice ตั้งค่าให้เก็บเท่าที่จำเป็น ตรวจข้อตกลงกับผู้ให้บริการ และดูเงื่อนไขการโอนข้อมูลไปต่างประเทศตามที่กฎหมายและประกาศปัจจุบันกำหนด`,
        },
        {
          q: `ธุรกิจเล็กๆ ต้องทำตาม PDPA ด้วยไหม`,
          a: `โดยหลักการ PDPA ใช้กับผู้ที่เก็บ ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคนในไทย แม้บางกิจกรรมหรือธุรกิจขนาดเล็กอาจได้รับยกเว้นบางหน้าที่ตามประกาศ ควรตรวจประกาศล่าสุดหรือถามที่ปรึกษากฎหมาย`,
        },
      ],
    },
    en: {
      title: `PDPA for Product Teams: What to Know and a Checklist You Can Use`,
      excerpt: `Lawful basis, consent, privacy notices, data subject rights, retention, vendors and breach readiness, written for teams building apps and websites in Thailand.`,
      metaTitle: `Thailand PDPA for App and Web Teams: A Checklist`,
      metaDescription: `Thailand PDPA for product teams: lawful basis, consent, privacy notice, data subject rights, retention, vendors, breach response and a practical checklist.`,
      intro: `Thailand's Personal Data Protection Act, known as PDPA, has been fully in force since 2022. Teams building apps and websites often treat it as a legal department matter, yet decisions about forms, databases and third-party tools are made inside the product team. This article covers the basics and a starter checklist. It is not legal advice.`,
      sections: [
        {
          h: `Start by knowing what you collect and why`,
          p: [
            `Personal data is anything that identifies a person, directly or indirectly: name, phone number, email, address, and also IP addresses, cookie IDs and LINE user IDs that can be traced back to someone. Some categories, such as health, religion or biometric data, are sensitive and carry stricter conditions.`,
            `Before reading any legal text, have the team draw a simple data map: what is collected, through which channel, where it is stored, who can access it, and who it is passed to. Teams often find form fields nobody uses but that are still collected, and the law expects you to collect only what is needed for your stated purpose.`,
          ],
        },
        {
          h: `Lawful basis and consent`,
          p: [
            `PDPA does not say you need consent every time. Collecting and using data needs one lawful basis, such as consent, performing a contract, a legal obligation, protecting someone's life, a public task, or legitimate interests. Collecting an address to deliver what a customer ordered rests on the contract, so no separate consent is needed.`,
            `Consent matters for things like marketing messages and sensitive data. It should be asked for clearly, separate from other terms, never pre-ticked, tied to a stated purpose, and as easy to withdraw as to give. Keep a record of who agreed, when, and to which version of the text.`,
          ],
        },
        {
          h: `Privacy notice and data subject rights`,
          p: [
            `Users must be told, before or when you collect data, what you collect, why, which lawful basis applies, how long you keep it, who receives it, and who to contact. Write it in readable Thai rather than several pages of legal text nobody opens, and place the link where data is actually collected, such as under the form.`,
            `People have several rights, and the team needs a practical way to honour them: who receives a request, how identity is verified, and which systems must be searched. Setting up a clear request channel early is cheaper than scrambling when the first real request arrives.`,
          ],
          list: [
            `Right to access and obtain a copy of their data`,
            `Right to correct inaccurate data`,
            `Right to erasure or anonymisation`,
            `Right to object and to restrict use`,
            `Right to data portability and to withdraw consent`,
          ],
        },
        {
          h: `Retention and vendors`,
          p: [
            `Decide how long each type of data is kept and why. Accounting records that tax law requires you to keep follow that period, while data from rejected job applicants may be kept for far less. Then make deletion or anonymisation automatic instead of hoping someone remembers to do it.`,
            `When you use vendors such as email platforms, cloud hosting, analytics tools or a CRM, your company still carries the main responsibility for customer data. Put a data processing agreement in place, check where the vendor stores data, and if data goes abroad, look at the cross-border transfer conditions too.`,
          ],
          quote: `Data you never collected is data that can never leak.`,
        },
        {
          h: `Breach readiness and a checklist`,
          p: [
            `PDPA requires the data controller to notify the Personal Data Protection Committee (PDPC) within 72 hours of becoming aware of a breach, unless it is unlikely to risk people's rights and freedoms, and to inform the affected individuals too when the risk is high. So write the plan beforehand: who decides, who communicates, and which logs are kept for investigation.`,
            `Here is a checklist a team can start using right away. Check the details against the law, the latest PDPC announcements and your own legal counsel. This article is general information, not legal advice.`,
          ],
          list: [
            `A data map of what is collected, where, and who has access`,
            `A written lawful basis and purpose for every collection point`,
            `Consent that is separate, not pre-ticked, withdrawable and recorded`,
            `A readable Thai privacy notice placed at the point of collection`,
            `A process for receiving and answering data subject requests`,
            `Retention periods with automatic deletion`,
            `Data processing agreements with vendors, and a check on overseas transfers`,
            `A breach response plan naming owners and notification steps`,
          ],
        },
      ],
      takeaways: [
        `Start with a data map so you know what you collect and why.`,
        `Consent is not the only basis; use the one that fits each use and ask clearly when needed.`,
        `A privacy notice must be readable and sit where data is collected.`,
        `Plan for rights requests, retention periods and vendor agreements.`,
        `Prepare a breach plan before an incident, and use legal counsel for the details.`,
      ],
      figCaption: `Diagram of the personal data lifecycle, from collection and use to sharing and deletion.`,
      faq: [
        {
          q: `Do we need user consent every time we collect data?`,
          a: `No. PDPA offers several lawful bases, such as contract and legitimate interests. Consent applies where nothing else covers the use, such as some marketing or sensitive data. Have counsel review your case.`,
        },
        {
          q: `Can we use Google Analytics or other overseas tools?`,
          a: `Yes, but disclose them in your privacy notice, configure them to collect only what is needed, review the vendor terms, and follow the cross-border transfer conditions set by the law and current announcements.`,
        },
        {
          q: `Does PDPA apply to small businesses?`,
          a: `In principle it applies to anyone who collects, uses or discloses personal data of people in Thailand. Some small businesses or activities may be exempt from certain duties under announcements, so check the latest rules or ask counsel.`,
        },
      ],
    },
  },
  {
    slug: 'legacy-modernization',
    cat: 'Technology',
    date: '2026-08-07',
    readMin: 9,
    tags: ['Legacy modernization', 'Strangler pattern', 'API layer', 'Data migration', 'Refactoring'],
    related: ['build-vs-buy', 'nextjs-perf', 'dx-mistakes'],
    th: {
      title: `ปรับปรุงระบบเก่าโดยไม่ต้องรื้อทำใหม่ทั้งหมด`,
      excerpt: `ใช้แนวทาง strangler ค่อยๆ เปลี่ยนทีละส่วน หา seam วางชั้น API ย้ายข้อมูลอย่างระวัง และให้ระบบเก่ากับใหม่ทำงานคู่กันได้`,
      metaTitle: `ปรับปรุงระบบเก่าโดยไม่ rewrite ใหม่ทั้งหมด`,
      metaDescription: `วิธีปรับปรุง legacy system แบบทีละส่วนโดยไม่ rewrite ทั้งหมด: strangler approach หา seam วางชั้น API ย้ายข้อมูล และรันระบบเก่าคู่กับระบบใหม่อย่างปลอดภัย`,
      intro: `ระบบเก่าที่ยังทำเงินอยู่ มักเป็นระบบที่แก้ยากและไม่มีใครกล้าแตะ ความคิดแรกที่หลายทีมนึกถึงคือรื้อเขียนใหม่ทั้งหมด แต่โครงการแบบนี้มักใช้เวลานานกว่าที่วางไว้ และระหว่างนั้นระบบเดิมยังต้องแก้ต่อ บทความนี้เสนอทางที่เสี่ยงน้อยกว่า คือเปลี่ยนทีละชิ้นขณะที่ระบบยังใช้งานได้ตลอด`,
      sections: [
        {
          h: `ทำไม big-bang rewrite ถึงเสี่ยง`,
          p: [
            `ระบบเก่าสะสมกฎธุรกิจไว้มากกว่าที่ใครจำได้ เช่น กรณีพิเศษของลูกค้ารายหนึ่ง หรือวิธีปัดเศษที่บัญชีใช้อยู่ ซึ่งมักไม่มีเอกสาร อยู่แค่ในโค้ด พอเขียนใหม่ทั้งหมด กฎเหล่านี้หายไปตอนไหนก็ไม่รู้ และจะรู้ตัวหลังเปิดใช้งานแล้ว`,
            `อีกปัญหาคือระหว่างที่ทีมเขียนใหม่ ระบบเดิมยังต้องแก้บั๊กและเพิ่มฟีเจอร์ ทำให้ต้องทำสองที่ ส่วนธุรกิจต้องรอหลายเดือนโดยไม่เห็นผลอะไรเลย และถ้างบหรือความอดทนหมดกลางทาง ก็ไม่เหลืออะไรใช้ได้`,
          ],
        },
        {
          h: `แนวทาง strangler: ค่อยๆ ให้ของใหม่เข้ามาแทน`,
          p: [
            `ชื่อมาจากต้นไทรที่เจริญเติบโตรอบต้นไม้เดิม ค่อยๆ ห่อจนต้นเก่าถูกแทนที่ ในงานซอฟต์แวร์หมายถึงการสร้างความสามารถใหม่ข้างๆ ระบบเดิม แล้วย้ายการใช้งานไปทีละส่วน จนเมื่อไม่มีอะไรใช้ระบบเก่าแล้วจึงปิดมันลง`,
            `วางตัวกลางไว้หน้าระบบ เช่น reverse proxy หรือ API gateway ที่ตัดสินว่า request ไหนไประบบเก่า ไหนไประบบใหม่ เริ่มจากส่วนที่แยกออกง่ายและเห็นผลชัด เช่น หน้าค้นหาสินค้า หรือหน้าสถานะคำสั่งซื้อ ไม่ใช่ส่วนที่ผูกกับทุกอย่างอย่างการคิดราคา`,
          ],
        },
        {
          h: `หา seam และวางชั้น API`,
          p: [
            `seam คือรอยต่อในระบบที่เปลี่ยนพฤติกรรมได้โดยไม่ต้องแก้โค้ดทั้งก้อน เช่น ขอบเขตระหว่างโมดูล ตาราง ฐานข้อมูลที่แยกกันได้ หรือไฟล์ที่ระบบอื่นอ่านเข้ามา เริ่มจากไล่ดูว่าใครเรียกใคร ข้อมูลไหลจากไหนไปไหน แล้วเลือกจุดที่ตัดได้สะอาดที่สุด`,
            `จากนั้นวางชั้น API ครอบระบบเก่า เพื่อให้หน้าจอใหม่ แอปมือถือ หรือระบบอื่นเรียกผ่านชั้นนี้แทนการเข้าฐานข้อมูลตรงๆ ชั้น API จะซ่อนความยุ่งเหยิงด้านหลัง และเปิดทางให้เปลี่ยนด้านหลังภายหลังโดยผู้เรียกไม่ต้องรู้`,
            `ก่อนแตะโค้ดเก่า ควรเขียนเทสต์ที่ยืนยันพฤติกรรมปัจจุบันก่อน แม้พฤติกรรมนั้นจะแปลก เพื่อให้รู้ทันทีเมื่อของใหม่ตอบไม่เหมือนเดิม`,
          ],
          list: [
            `ไล่ดูการพึ่งพาระหว่างโมดูลและฐานข้อมูลที่ใช้ร่วมกัน`,
            `เลือกส่วนแรกที่แยกง่ายและเห็นผลต่อผู้ใช้ชัด`,
            `เขียนเทสต์บันทึกพฤติกรรมปัจจุบันก่อนเปลี่ยน`,
            `วางชั้น API หรือ gateway เป็นประตูเดียว`,
          ],
        },
        {
          h: `การย้ายข้อมูลอย่างระวัง`,
          p: [
            `ข้อมูลมักเป็นส่วนที่ยากที่สุด เพราะข้อมูลเก่ามีรูปแบบที่ไม่สม่ำเสมอ เช่น เบอร์โทรที่พิมพ์ต่างกันสิบแบบ หรือชื่อภาษาไทยที่เข้ารหัสผิด ควรทำความสะอาดและกำหนดรูปแบบกลางก่อนย้าย และทดลองย้ายกับข้อมูลชุดจริงหลายรอบก่อนวันจริง`,
            `วิธีที่ปลอดภัยคือให้ระบบเก่ายังเป็นแหล่งข้อมูลหลักไปก่อน ซิงก์ข้อมูลไปที่ระบบใหม่ แล้วเทียบผลลัพธ์ทั้งสองฝั่งจนมั่นใจ จึงสลับให้ระบบใหม่เป็นแหล่งหลัก เมื่อย้ายแล้วควรเก็บระบบเก่าแบบอ่านอย่างเดียวไว้ช่วงหนึ่ง เผื่อต้องย้อนกลับ`,
          ],
          quote: `การเปลี่ยนที่ย้อนกลับได้ ถูกกว่าการเปลี่ยนที่ต้องถูกต้องตั้งแต่ครั้งแรก`,
        },
        {
          h: `รันระบบเก่าและใหม่คู่กัน`,
          p: [
            `ช่วงที่สองระบบอยู่ด้วยกันคือช่วงที่เสี่ยงที่สุด และมักยาวกว่าที่คาด ใช้ feature flag เปิดฟีเจอร์ใหม่ให้ผู้ใช้กลุ่มเล็กก่อน แล้วค่อยๆ ขยาย ถ้ามีปัญหาก็สลับกลับได้ในไม่กี่นาที โดยไม่ต้อง deploy ใหม่`,
            `ควรมี monitoring ที่เทียบสองฝั่ง เช่น ยอดคำสั่งซื้อ จำนวน error เวลาตอบ และกำหนดวันปิดระบบเก่าเป็นเป้าหมายจริง ไม่เช่นนั้นทั้งสองระบบจะอยู่คู่กันไปตลอดและต้นทุนดูแลเพิ่มเป็นสองเท่า`,
          ],
        },
      ],
      takeaways: [
        `Big-bang rewrite เสี่ยงเพราะกฎธุรกิจที่ซ่อนในโค้ดเก่าหายไปโดยไม่รู้ตัว`,
        `Strangler approach คือสร้างของใหม่ข้างๆ แล้วย้ายการใช้งานทีละส่วน`,
        `หา seam และวางชั้น API ก่อน พร้อมเทสต์ที่บันทึกพฤติกรรมเดิม`,
        `ย้ายข้อมูลโดยซิงก์และเทียบผลก่อนสลับแหล่งข้อมูลหลัก`,
        `ใช้ feature flag และตั้งวันปิดระบบเก่าให้ชัด`,
      ],
      figCaption: `แผนภาพ gateway ที่ส่ง request ไปยังระบบเก่าหรือระบบใหม่ตามส่วนที่ย้ายแล้ว`,
      faq: [
        {
          q: `บางกรณีการเขียนใหม่ทั้งหมดก็เหมาะใช่ไหม`,
          a: `ได้ ถ้าระบบเล็กพอ ความต้องการชัด และเทคโนโลยีเดิมหาคนดูแลไม่ได้แล้ว แต่ควรแบ่งเป็นช่วงที่ส่งมอบได้จริงเป็นระยะ แทนการรอส่งครั้งเดียว`,
        },
        {
          q: `ควรเริ่มส่วนไหนก่อน`,
          a: `เลือกส่วนที่แยกจากส่วนอื่นได้ง่าย เห็นผลต่อผู้ใช้หรือธุรกิจชัด และพลาดแล้วไม่เสียหายมาก เพื่อให้ทีมได้เรียนรู้ก่อนไปแตะส่วนหลักอย่างการคิดราคาหรือบัญชี`,
        },
        {
          q: `ใช้เวลานานแค่ไหน`,
          a: `ขึ้นกับขนาดและสภาพระบบ จึงไม่ควรเชื่อใครที่รับปากตัวเลขตายตัวก่อนสำรวจ ข้อดีของแนวทางนี้คือเห็นผลทีละช่วง และปรับแผนได้ระหว่างทาง`,
        },
      ],
    },
    en: {
      title: `Modernizing Legacy Systems Without a Big-Bang Rewrite`,
      excerpt: `Use the strangler approach to replace a system piece by piece: find seams, add an API layer, migrate data carefully, and run old and new side by side.`,
      metaTitle: `Modernize Legacy Systems Without a Full Rewrite`,
      metaDescription: `How to modernize a legacy system without a big-bang rewrite: the strangler approach, seams, an API layer, data migration and running old and new together.`,
      intro: `A legacy system that still earns money is usually the one nobody dares to touch. The first idea many teams reach for is a full rewrite, but those projects tend to run long, and the old system still needs changes in the meantime. This article describes a lower-risk path: replace it piece by piece while it keeps working.`,
      sections: [
        {
          h: `Why a big-bang rewrite is risky`,
          p: [
            `Old systems hold more business rules than anyone remembers: a special case for one customer, or the rounding method accounting relies on. These are rarely documented and live only in the code. In a full rewrite they get lost at some point, and you find out after launch.`,
            `Another problem is that while the team rewrites, the old system still needs bug fixes and features, so work is done twice. The business waits months without seeing anything, and if budget or patience runs out halfway, there is nothing usable to show for it.`,
          ],
        },
        {
          h: `The strangler approach: let the new grow around the old`,
          p: [
            `The name comes from strangler fig trees that grow around a host tree and gradually replace it. In software it means building new capabilities beside the existing system and moving usage over one slice at a time, until nothing depends on the old system and you can switch it off.`,
            `Put a routing layer in front, such as a reverse proxy or API gateway, that decides which requests go to the old system and which go to the new one. Start with a slice that separates easily and shows clear value, such as product search or an order status page, rather than something tied to everything, like pricing.`,
          ],
        },
        {
          h: `Finding seams and adding an API layer`,
          p: [
            `A seam is a join in the system where behaviour can be changed without editing everything around it: a boundary between modules, a separable set of database tables, or a file another system reads. Start by tracing who calls whom and where data flows, then pick the point where you can cut most cleanly.`,
            `Next, wrap the old system in an API layer so new screens, mobile apps and other systems call that layer instead of reaching into the database directly. The layer hides the mess behind it and lets you change the back end later without callers noticing.`,
            `Before touching old code, write tests that capture current behaviour, even where it looks odd, so you know immediately when the new version answers differently.`,
          ],
          list: [
            `Map dependencies between modules and shared database tables.`,
            `Choose a first slice that is easy to separate and visible to users.`,
            `Write tests recording current behaviour before changing anything.`,
            `Add an API layer or gateway as the single front door.`,
          ],
        },
        {
          h: `Migrating data carefully`,
          p: [
            `Data is often the hardest part, because old data is inconsistent: phone numbers typed ten different ways, or Thai names stored with the wrong encoding. Clean it and define a target format before moving, and rehearse the migration on real data several times before the actual day.`,
            `A safe pattern is to keep the old system as the source of truth at first, sync data to the new one, and compare results on both sides until you trust it. Only then switch the new system to be the source. After the move, keep the old system read-only for a while in case you need to go back.`,
          ],
          quote: `A change you can undo is cheaper than a change that must be right the first time.`,
        },
        {
          h: `Running old and new side by side`,
          p: [
            `The period when both systems coexist is the riskiest, and it usually lasts longer than planned. Use feature flags to show the new feature to a small group of users first and widen it gradually. If something goes wrong, you can switch back in minutes without deploying again.`,
            `Set up monitoring that compares both sides, such as order totals, error counts and response times, and set a real date for shutting down the old system. Otherwise both stay forever and you pay to maintain two of everything.`,
          ],
        },
      ],
      takeaways: [
        `Big-bang rewrites are risky because business rules hidden in old code get lost unnoticed.`,
        `The strangler approach builds new beside old and moves usage over one slice at a time.`,
        `Find seams and add an API layer first, backed by tests that record existing behaviour.`,
        `Migrate data by syncing and comparing before switching the source of truth.`,
        `Use feature flags and set a clear shutdown date for the old system.`,
      ],
      figCaption: `Diagram of a gateway routing requests to the old or new system depending on which parts have moved.`,
      faq: [
        {
          q: `Is a full rewrite ever the right choice?`,
          a: `Sometimes, when the system is small, requirements are clear, and nobody can maintain the old technology. Even then, deliver in stages that are actually usable rather than one big release at the end.`,
        },
        {
          q: `Which part should we replace first?`,
          a: `Pick a slice that separates easily from the rest, has clear value to users or the business, and would not do much damage if it went wrong. That lets the team learn before touching core areas like pricing or accounting.`,
        },
        {
          q: `How long does it take?`,
          a: `It depends on size and condition, so be wary of anyone promising a fixed number before looking at the system. The benefit of this approach is that you see results in stages and can adjust the plan along the way.`,
        },
      ],
    },
  },
]
