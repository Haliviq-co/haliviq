import type { Article } from '@/lib/blog-types'

export const design2Articles: Article[] = [
  {
    slug: 'ux-for-ai-features',
    cat: 'Design',
    date: '2026-11-17',
    readMin: 9,
    tags: ['AI UX', 'trust', 'citations', 'streaming', 'product design'],
    related: ['ai-product-2025', 'ai-evals-before-launch', 'ai-prototyping-design'],
    th: {
      title: `UX สำหรับฟีเจอร์ AI ที่คนกล้าใช้: 8 แพทเทิร์นที่ทำให้ผู้ใช้ไว้ใจ`,
      excerpt: `ใส่ AI ลงในผลิตภัณฑ์ไม่ยาก แต่ทำให้คนไว้ใจและใช้ซ้ำนั้นยากกว่า มาดูแพทเทิร์น UX ตั้งแต่การบอกความคาดหวัง แหล่งอ้างอิง ไปจนถึงการรับมือตอน AI ตอบผิด`,
      metaTitle: `UX สำหรับฟีเจอร์ AI: แพทเทิร์นที่ทำให้ผู้ใช้ไว้ใจ`,
      metaDescription: `รวมแพทเทิร์น UX สำหรับฟีเจอร์ AI ทั้งการบอกความคาดหวัง streaming การแสดงแหล่งอ้างอิง ปุ่มแก้ไขและย้อนกลับ การยอมรับว่าไม่รู้ และเมื่อไรไม่ควรทำเป็นแชต`,
      intro: `ช่วงนี้แทบทุกแอปมีปุ่มรูปประกายดาวที่เขียนว่า "ถาม AI" แต่ผู้ใช้จำนวนมากลองครั้งเดียวแล้วไม่กลับมาอีก ไม่ใช่เพราะโมเดลไม่เก่ง แต่เพราะไม่รู้ว่ามันทำอะไรได้ ไม่รู้ว่าควรเชื่อแค่ไหน และพอผิดก็ไม่รู้จะแก้อย่างไร บทความนี้รวมแพทเทิร์น UX ที่ทีม Haliviq ใช้เวลาออกแบบฟีเจอร์ AI ให้คนกล้าใช้งานจริง`,
      sections: [
        {
          h: `เริ่มจากบอกความคาดหวังให้ชัด`,
          p: [
            `ช่องพิมพ์ว่างๆ กับคำว่า "ถามอะไรก็ได้" ฟังดูเป็นมิตร แต่จริงๆ ทำให้ผู้ใช้งง เพราะไม่รู้ขอบเขต ลองเปลี่ยนเป็นบอกตรงๆ ว่าฟีเจอร์นี้ทำอะไรได้ เช่น "สรุปรีวิวสินค้าจากลูกค้าใน Shopee และ Lazada ของร้านคุณ" แล้วให้ตัวอย่างคำถามสามสี่ข้อที่กดได้ทันที`,
            `สิ่งที่ควรบอกพอๆ กันคือสิ่งที่ทำไม่ได้ เช่น ผู้ช่วยตอบคำถามของคลินิกไม่วินิจฉัยโรค หรือผู้ช่วยในเว็บอสังหาฯ ไม่ยืนยันราคาสุดท้ายแทนเซลส์ การบอกขอบเขตตั้งแต่แรกช่วยลดความผิดหวัง และทำให้ผู้ใช้ประเมินคำตอบได้ถูกต้องกว่า`,
          ],
        },
        {
          h: `Streaming, ความคืบหน้า และแหล่งอ้างอิง`,
          p: [
            `งาน AI มักใช้เวลานานกว่าคลิกปกติ ถ้าหน้าจอนิ่งไปหลายวินาที ผู้ใช้จะคิดว่าค้าง การแสดงข้อความทีละส่วนแบบ streaming ช่วยให้รู้สึกว่าระบบกำลังทำงาน ส่วนงานที่มีหลายขั้น เช่น ค้นเอกสาร อ่าน แล้วสรุป ให้บอกสถานะเป็นคำที่เข้าใจได้ เช่น "กำลังค้นในคู่มือพนักงาน 3 ฉบับ" และมีปุ่มหยุดเสมอ`,
            `คำตอบที่มีแหล่งอ้างอิงน่าเชื่อกว่าคำตอบที่ลอยมาเฉยๆ ถ้าระบบดึงข้อมูลจากเอกสารของบริษัท ให้แสดงลิงก์หรือหมายเลขอ้างอิงติดกับประโยคนั้น กดแล้วเปิดตรงย่อหน้าที่ใช้ ผู้ใช้จะตรวจเองได้ในไม่กี่วินาที และทีมคุณก็เห็นว่าคำตอบผิดเพราะโมเดลหรือเพราะเอกสารต้นทางล้าสมัย`,
          ],
          list: [
            `แสดงผลแบบ streaming สำหรับข้อความยาว และบอกสถานะเป็นภาษาคนสำหรับงานหลายขั้น`,
            `มีปุ่มหยุดและปุ่มลองใหม่ที่มองเห็นได้ตลอด`,
            `ใส่แหล่งอ้างอิงติดกับประโยค ไม่ใช่กองรวมไว้ท้ายคำตอบ`,
            `กดแหล่งอ้างอิงแล้วพาไปจุดที่ใช้จริง ไม่ใช่หน้าแรกของเอกสาร`,
          ],
        },
        {
          h: `แก้ไขง่าย ย้อนกลับได้ และกล้าบอกว่าไม่รู้`,
          p: [
            `AI ควรเป็นคนร่างให้ ไม่ใช่คนตัดสินใจแทน เมื่อ AI เขียนข้อความตอบลูกค้าใน LINE OA หรือร่างคำบรรยายสินค้า ให้ผลลัพธ์อยู่ในช่องที่แก้ไขได้ทันที มีปุ่ม "ทำให้สั้นลง" หรือ "สุภาพขึ้น" และทุกการกระทำที่เปลี่ยนข้อมูลจริง เช่น ส่งข้อความหรืออัปเดตสต็อก ต้องให้คนกดยืนยันและย้อนกลับได้`,
            `ผู้ใช้ไว้ใจระบบที่ยอมรับว่าไม่แน่ใจมากกว่าระบบที่มั่นใจทุกเรื่อง ออกแบบให้ AI ตอบว่า "ไม่พบข้อมูลนี้ในเอกสารที่มี" ได้ แล้วเสนอทางไปต่อ เช่น ส่งต่อให้เจ้าหน้าที่ หรือแนะนำคำค้นใหม่ การแสดงตัวเลขความมั่นใจเป็นเปอร์เซ็นต์มักทำให้งงมากกว่าช่วย ใช้ป้ายสั้นๆ อย่าง "ควรตรวจสอบอีกครั้ง" ในจุดที่เสี่ยงจะดีกว่า`,
          ],
          quote: `คำตอบว่า "ไม่รู้" ที่ซื่อตรง สร้างความไว้ใจได้มากกว่าคำตอบผิดที่ฟังดูมั่นใจ`,
        },
        {
          h: `ปุ่ม feedback และการรับมือกับ error`,
          p: [
            `ปุ่มนิ้วโป้งขึ้นลงมีประโยชน์ก็ต่อเมื่อมีคนเอาไปใช้ ถ้าผู้ใช้กดไม่ชอบ ให้ถามต่อแบบเลือกได้ เช่น "ข้อมูลผิด" "ไม่ตรงคำถาม" "ยาวเกินไป" แล้วส่งเข้าไปในชุดทดสอบของทีม เพื่อให้รู้ว่าควรแก้ prompt แก้ข้อมูล หรือแก้ดีไซน์`,
            `Error ของฟีเจอร์ AI มีหลายแบบ ทั้งระบบล่ม ตอบช้าเกินไป หรือตอบได้แต่ผิด แต่ละแบบต้องมีข้อความที่ต่างกัน และต้องไม่ทำให้ผู้ใช้เสียงานที่พิมพ์ไว้ เก็บข้อความที่ผู้ใช้พิมพ์ไว้เสมอ และให้ทางเลือกที่ไม่ต้องพึ่ง AI เช่น ฟอร์มปกติหรือการติดต่อเจ้าหน้าที่ ฟีเจอร์ AI ที่ดีควรเป็นทางลัด ไม่ใช่ทางเดียว`,
          ],
        },
        {
          h: `ไม่ใช่ทุกอย่างต้องเป็นกล่องแชต`,
          p: [
            `แชตเหมาะกับงานที่ผู้ใช้ไม่รู้ว่าจะถามอะไรล่วงหน้า แต่งานส่วนใหญ่ในธุรกิจชัดเจนกว่านั้น เช่น จัดหมวดคำสั่งซื้อ สรุปเคสลูกค้า หรือแปลคำบรรยายสินค้า งานแบบนี้ทำเป็นปุ่มเดียวในหน้าที่ผู้ใช้อยู่แล้วจะใช้ง่ายกว่าการให้พิมพ์สั่งทุกครั้ง`,
            `ลองถามว่าผู้ใช้กำลังทำอะไรอยู่ และ AI ช่วยลดขั้นตอนตรงไหนได้ บางครั้งคำตอบคือคำแนะนำที่โผล่ในฟอร์ม บางครั้งคือการเติมช่องให้อัตโนมัติ หรือสรุปสั้นๆ บนหัวตาราง แชตยังมีที่ทาง แต่ควรเป็นตัวเลือกหนึ่ง ไม่ใช่คำตอบของทุกโจทย์`,
          ],
          list: [
            `ปุ่มทำงานเฉพาะ เช่น "สรุปเคสนี้" หรือ "ร่างคำตอบ" ในหน้าที่ผู้ใช้อยู่`,
            `คำแนะนำในบริบท เช่น เสนอหมวดสินค้าตอนลงสินค้าใหม่`,
            `การเติมข้อมูลอัตโนมัติที่ผู้ใช้ตรวจและแก้ได้`,
            `แชต สำหรับงานสำรวจที่คำถามเปลี่ยนไปเรื่อยๆ`,
          ],
        },
      ],
      takeaways: [
        `บอกให้ชัดว่า AI ทำอะไรได้และทำอะไรไม่ได้ พร้อมตัวอย่างที่กดได้ทันที`,
        `ใช้ streaming สถานะที่อ่านเข้าใจ และแหล่งอ้างอิงที่ตรวจได้`,
        `ให้ AI เป็นคนร่าง คนตัดสินใจ ทุกการกระทำสำคัญต้องยืนยันและย้อนกลับได้`,
        `ออกแบบให้ AI บอกว่าไม่รู้ได้ และเก็บ feedback ไปปรับระบบจริง`,
        `เลือกรูปแบบตามงาน ไม่ใช่ทุกฟีเจอร์ต้องเป็นกล่องแชต`,
      ],
      figCaption: `ตัวอย่างหน้าจอฟีเจอร์ AI ที่มีแหล่งอ้างอิง ปุ่มแก้ไข และปุ่ม feedback`,
      faq: [
        {
          q: `ควรแสดงคะแนนความมั่นใจของ AI เป็นตัวเลขไหม`,
          a: `ส่วนใหญ่ไม่จำเป็น ผู้ใช้ทั่วไปตีความตัวเลขแบบนี้ได้ยาก ใช้ป้ายข้อความหรือการแสดงแหล่งอ้างอิงจะช่วยให้ตัดสินใจได้ดีกว่า ยกเว้นกรณีผู้ใช้เป็นผู้เชี่ยวชาญที่เข้าใจความหมายของตัวเลข`,
        },
        {
          q: `ต้องบอกผู้ใช้ไหมว่าข้อความนี้สร้างโดย AI`,
          a: `ควรบอก โดยเฉพาะเมื่อผู้ใช้อาจเข้าใจว่ากำลังคุยกับคน หรือเมื่อเนื้อหาใช้ตัดสินใจเรื่องสำคัญ ป้ายเล็กๆ ที่ชัดเจนช่วยสร้างความไว้ใจมากกว่าทำให้กลัว`,
        },
        {
          q: `ฟีเจอร์ AI ตัวแรกควรเริ่มที่ไหน`,
          a: `เริ่มจากงานที่ทำซ้ำบ่อย ผลลัพธ์ตรวจง่าย และถ้าผิดก็แก้ได้ไม่เสียหายมาก เช่น ร่างคำตอบให้แอดมินตรวจก่อนส่ง แล้วค่อยขยายไปงานที่เสี่ยงขึ้นเมื่อมีข้อมูลการใช้งานจริง`,
        },
      ],
    },
    en: {
      title: `UX for AI Features People Trust: 8 Patterns That Earn Confidence`,
      excerpt: `Adding AI to a product is easy. Getting people to trust it and come back is harder. Here are UX patterns, from setting expectations and citations to handling wrong answers.`,
      metaTitle: `UX for AI Features: Patterns That Build User Trust`,
      metaDescription: `UX patterns for AI features: clear expectations, streaming, citations, edit and undo, saying "I don't know", feedback buttons, and when not to use chat.`,
      intro: `Almost every app now has a sparkle button that says "Ask AI", yet many people try it once and never return. The model is rarely the problem. Users do not know what it can do, how far to trust it, or how to recover when it gets something wrong. These are the UX patterns the Haliviq team leans on when designing AI features people actually use.`,
      sections: [
        {
          h: `Start by setting clear expectations`,
          p: [
            `An empty box that says "Ask me anything" sounds friendly but leaves people guessing about scope. Say plainly what the feature does, for example "Summarise customer reviews of your shop on Shopee and Lazada", and offer three or four example prompts people can tap straight away.`,
            `Saying what it will not do matters just as much. A clinic assistant does not diagnose, and a real estate site assistant does not confirm final prices on behalf of sales staff. Stating the limits up front reduces disappointment and helps people judge answers correctly.`,
          ],
        },
        {
          h: `Streaming, progress and sources`,
          p: [
            `AI work usually takes longer than a normal click. If the screen sits still for several seconds, people assume it froze. Streaming text as it is generated shows the system is working. For multi-step jobs, such as searching documents, reading and then summarising, show the status in plain words like "Searching 3 staff handbooks", and always offer a stop button.`,
            `Answers with sources are more believable than answers that appear from nowhere. If the system draws on company documents, put a link or reference number right next to the sentence it supports, opening at the exact paragraph used. Users can check in seconds, and your team can see whether a wrong answer came from the model or from an outdated source document.`,
          ],
          list: [
            `Stream long responses and describe multi-step progress in human language.`,
            `Keep stop and retry buttons visible at all times.`,
            `Attach citations to the sentence they support, not in a pile at the end.`,
            `Make citations open at the passage used, not the first page of the document.`,
          ],
        },
        {
          h: `Easy editing, undo, and the courage to say "I don't know"`,
          p: [
            `AI should draft, not decide. When it writes a reply for a LINE OA chat or a product description, put the result in an editable field with quick actions like "Shorter" or "More polite". Any action that changes real data, such as sending a message or updating stock, should need a human click to confirm and be reversible.`,
            `People trust a system that admits uncertainty more than one that is confident about everything. Design for answers like "I couldn't find this in the available documents", followed by a next step such as handing over to staff or suggesting a new search. Percentage confidence scores usually confuse more than they help; a short label like "Worth double-checking" in risky spots works better.`,
          ],
          quote: `An honest "I don't know" builds more trust than a confident wrong answer.`,
        },
        {
          h: `Feedback buttons and error handling`,
          p: [
            `Thumbs up and down are only useful if someone acts on them. When a user taps thumbs down, offer quick reasons such as "Wrong information", "Didn't answer my question" or "Too long", and feed them into your team's test set so you know whether to fix the prompt, the data or the design.`,
            `AI features fail in several ways: the service is down, the response is too slow, or the answer arrives but is wrong. Each needs different wording, and none should lose what the user typed. Always preserve the input, and offer a path that does not depend on AI, such as a normal form or a way to reach staff. A good AI feature is a shortcut, not the only road.`,
          ],
        },
        {
          h: `Not everything needs to be a chat box`,
          p: [
            `Chat suits tasks where people do not know in advance what they will ask. Most business tasks are more defined than that: tagging orders, summarising a customer case, translating a product description. These work better as a single button on the screen the user is already on than as something they must type out each time.`,
            `Ask what the user is doing and where AI can remove a step. Sometimes the answer is a suggestion inside a form, sometimes an auto-filled field, sometimes a short summary at the top of a table. Chat still has its place, but it should be one option, not the answer to every brief.`,
          ],
          list: [
            `Task buttons such as "Summarise this case" or "Draft a reply" in context.`,
            `Inline suggestions, for example proposing a category when listing a new product.`,
            `Auto-fill that the user can review and correct.`,
            `Chat, for open-ended exploration where the questions keep changing.`,
          ],
        },
      ],
      takeaways: [
        `State what the AI can and cannot do, with example prompts people can tap.`,
        `Use streaming, readable progress and checkable sources.`,
        `Let AI draft and humans decide; important actions need confirmation and undo.`,
        `Design for "I don't know" and turn feedback into real fixes.`,
        `Pick the pattern that fits the task; not every feature should be chat.`,
      ],
      figCaption: `Example AI feature screen with inline citations, edit controls and feedback buttons`,
      faq: [
        {
          q: `Should we show the AI's confidence as a number?`,
          a: `Usually not. Most people find these numbers hard to interpret. Text labels and visible sources help them decide better, unless your users are specialists who understand what the score means.`,
        },
        {
          q: `Do we need to tell users that content is AI-generated?`,
          a: `Yes, especially where people might think they are talking to a person, or where the content feeds an important decision. A small, clear label builds trust rather than fear.`,
        },
        {
          q: `Where should our first AI feature start?`,
          a: `Pick a task that is frequent, easy to check, and cheap to fix if wrong, such as drafting replies for an admin to review before sending. Expand into riskier areas once you have real usage data.`,
        },
      ],
    },
  },
  {
    slug: 'checkout-ux-promptpay',
    cat: 'Design',
    date: '2026-11-10',
    readMin: 8,
    tags: ['checkout UX', 'PromptPay', 'e-commerce', 'mobile payments', 'booking'],
    related: ['mobile-payments-asean', 'thai-ux-writing', 'dark-patterns-consent'],
    th: {
      title: `ออกแบบหน้า Checkout สำหรับเว็บขายของและจองบริการในไทย: PromptPay, ที่อยู่ และความน่าเชื่อถือ`,
      excerpt: `หน้า checkout คือจุดที่ลูกค้าตัดสินใจจริง บทความนี้พาดู flow จ่ายด้วย QR PromptPay บนมือถือ ฟอร์มที่อยู่แบบไทย ตัวเลือกจัดส่ง และวิธีตัดขั้นตอนที่ไม่จำเป็น`,
      metaTitle: `Checkout UX สำหรับเว็บไทย: PromptPay และฟอร์มที่อยู่`,
      metaDescription: `แนวทางออกแบบหน้า checkout สำหรับร้านออนไลน์และเว็บจองในไทย ทั้ง flow QR PromptPay บนมือถือ guest checkout ฟอร์มที่อยู่แบบไทย การจัดส่ง และสัญญาณความน่าเชื่อถือ`,
      intro: `ลูกค้าเลือกสินค้าเสร็จ กดสั่งซื้อ แล้วหายไปกลางทาง เป็นเรื่องที่เจ้าของร้านออนไลน์และเว็บจองแทบทุกเจ้าเคยเจอ หลายครั้งปัญหาไม่ได้อยู่ที่ราคา แต่อยู่ที่หน้า checkout ที่ยาวเกินไป ถามข้อมูลซ้ำ หรือจ่ายเงินบนมือถือยาก บทความนี้รวมแนวทางที่ใช้ได้จริงกับบริบทไทย โดยเฉพาะการจ่ายผ่าน PromptPay`,
      sections: [
        {
          h: `Flow จ่ายด้วย QR PromptPay บนมือถือ`,
          p: [
            `PromptPay เป็นระบบชำระเงินทันทีและ QR ระดับประเทศของไทย ที่คนคุ้นเคยมาก ปัญหาคือ QR ถูกออกแบบมาให้สแกนจากอีกเครื่อง แต่ลูกค้าส่วนใหญ่ช้อปบนมือถือเครื่องเดียวกับที่ใช้แอปธนาคาร จึงสแกนหน้าจอตัวเองไม่ได้ หน้า checkout ต้องช่วยตรงนี้`,
            `ทางแก้ที่ใช้ได้คือมีปุ่ม "บันทึก QR ลงเครื่อง" ที่เซฟเป็นรูปได้จริง พร้อมคำแนะนำสั้นๆ ว่าให้เปิดแอปธนาคาร เลือกสแกนจากรูปในเครื่อง แล้วกลับมาหน้านี้ แสดงยอดเงินและเวลาหมดอายุของ QR ให้เห็นชัด และจำสถานะคำสั่งซื้อไว้ เพื่อให้ลูกค้าสลับแอปไปมาแล้วกลับมาเจอหน้าเดิม ไม่ใช่ตะกร้าว่าง`,
          ],
          list: [
            `ปุ่มบันทึก QR เป็นรูปภาพ และข้อความ "หรือแคปหน้าจอนี้ไว้ก็ได้"`,
            `ยอดเงิน ชื่อผู้รับ และเวลาหมดอายุ อยู่ในภาพ QR ที่บันทึกด้วย`,
            `คำแนะนำ 3 ขั้นสั้นๆ ว่าจะสแกนจากรูปในแอปธนาคารอย่างไร`,
            `หน้ารอชำระที่กลับมาเปิดได้จากลิงก์ในอีเมลหรือ LINE`,
          ],
        },
        {
          h: `ยืนยันอัตโนมัติ หรือให้แนบสลิป`,
          p: [
            `ถ้าระบบรับชำระของคุณยืนยันยอดได้อัตโนมัติผ่านผู้ให้บริการชำระเงินหรือธนาคาร ลูกค้าจะได้ประสบการณ์ที่ดีที่สุด จ่ายเสร็จแล้วหน้าเว็บเปลี่ยนเป็น "ชำระแล้ว" เอง ไม่ต้องทำอะไรเพิ่ม และร้านก็ไม่ต้องให้แอดมินนั่งเช็กสลิปทีละใบ`,
            `ร้านเล็กหลายร้านยังใช้การแนบสลิป ซึ่งไม่ผิด แต่ต้องออกแบบให้ลื่น เช่น ปุ่มอัปโหลดที่เปิดคลังรูปได้ทันที บอกว่าจะตรวจภายในเวลาเท่าไร และส่งข้อความยืนยันทาง LINE OA หรืออีเมลเมื่อตรวจเสร็จ ที่สำคัญคืออย่าให้ลูกค้าต้องพิมพ์ยอดเงินหรือเวลาโอนซ้ำ ในเมื่อข้อมูลอยู่ในสลิปแล้ว`,
          ],
          quote: `ลูกค้าไม่ได้อยากจ่ายเงินยาก เขาแค่ไม่อยากเดาว่าจ่ายแล้วต้องทำอะไรต่อ`,
        },
        {
          h: `Guest checkout และฟอร์มที่อยู่แบบไทย`,
          p: [
            `บังคับสมัครสมาชิกก่อนซื้อเป็นอุปสรรคที่ไม่จำเป็น ให้ลูกค้าซื้อแบบ guest ได้ด้วยเบอร์โทรหรืออีเมล แล้วเสนอให้สร้างบัญชีหลังจ่ายเสร็จ เช่น "บันทึกที่อยู่ไว้ใช้ครั้งหน้าไหม" หรือให้ล็อกอินด้วย LINE ซึ่งคนไทยส่วนใหญ่มีบัญชีอยู่แล้ว`,
            `ฟอร์มที่อยู่ไทยมีลำดับที่ต่างจากฟอร์มสำเร็จรูปของต่างประเทศ ทั้งตำบล/แขวง อำเภอ/เขต จังหวัด และรหัสไปรษณีย์ วิธีที่ลดการพิมพ์ได้มากคือให้พิมพ์รหัสไปรษณีย์ก่อน แล้วเสนอตำบลและอำเภอที่ตรงกันให้เลือก ส่วนบ้านเลขที่ หมู่บ้าน ซอย และถนน ให้เป็นช่องข้อความที่ยืดหยุ่น เพราะที่อยู่จริงในไทยหลากหลายมาก`,
          ],
        },
        {
          h: `ตัวเลือกจัดส่งและสัญญาณความน่าเชื่อถือ`,
          p: [
            `ลูกค้าอยากรู้สองเรื่องก่อนจ่าย คือรวมแล้วต้องจ่ายเท่าไร และจะได้ของเมื่อไร แสดงค่าส่งตั้งแต่หน้าตะกร้า อย่าเพิ่งมาเฉลยในขั้นสุดท้าย และบอกช่วงวันที่คาดว่าจะได้รับ สำหรับเว็บจอง เช่น โรงแรมหรือคลินิก ให้สรุปวัน เวลา สาขา และเงื่อนไขการยกเลิกไว้ในหน้าเดียวก่อนกดยืนยัน`,
            `ความน่าเชื่อถือสร้างจากรายละเอียดเล็กๆ เช่น ชื่อบริษัทที่ตรงกับชื่อบัญชีผู้รับ PromptPay ช่องทางติดต่อที่ใช้งานได้จริง นโยบายคืนสินค้าที่อ่านเข้าใจ และหน้าเว็บที่โหลดเร็วไม่มีป๊อปอัปแปลกๆ ทุกอย่างนี้ช่วยให้ลูกค้ามั่นใจว่าโอนเงินไปแล้วจะไม่หาย`,
          ],
          list: [
            `ชื่อผู้รับเงินบน QR ตรงกับชื่อร้านหรือบริษัทที่แสดงบนเว็บ`,
            `ค่าส่งและยอดรวมแสดงตั้งแต่ตะกร้า`,
            `นโยบายคืนสินค้าหรือยกเลิกการจองเขียนเป็นภาษาง่ายๆ`,
            `ช่องทางติดต่อ เช่น LINE OA และเบอร์โทร อยู่ในหน้า checkout`,
          ],
        },
        {
          h: `ตัดขั้นตอนที่ไม่จำเป็น`,
          p: [
            `ลองไล่ checkout ของคุณบนมือถือจริงตั้งแต่ตะกร้าจนเห็นหน้าขอบคุณ แล้วนับว่าต้องแตะกี่ครั้ง พิมพ์กี่ช่อง ทุกช่องที่ถามควรตอบได้ว่าใช้ทำอะไร ถ้าตอบไม่ได้ให้ตัดออก เช่น วันเกิดหรือเพศ ที่ไม่เกี่ยวกับการส่งของ ซึ่งยังลดความเสี่ยงด้าน PDPA จากการเก็บข้อมูลเกินจำเป็นด้วย`,
            `อีกจุดที่มักถูกมองข้ามคือคีย์บอร์ด ช่องเบอร์โทรควรเปิดแป้นตัวเลข ช่องอีเมลควรเปิดแป้นที่มี @ และเปิด autofill ให้เบราว์เซอร์เติมข้อมูลได้ รายละเอียดแบบนี้ดูเล็ก แต่รวมกันแล้วทำให้หน้า checkout สั้นลงอย่างรู้สึกได้ ทีม Haliviq มักเริ่มงาน checkout ด้วยการนั่งดูผู้ใช้จริงจ่ายเงินสักห้าคน ซึ่งเห็นปัญหาได้เร็วกว่าการเดา`,
          ],
        },
      ],
      takeaways: [
        `ลูกค้าส่วนใหญ่จ่ายบนมือถือเครื่องเดียวกัน ต้องมีปุ่มบันทึก QR และคำแนะนำสแกนจากรูป`,
        `ยืนยันการชำระอัตโนมัติถ้าทำได้ ถ้าใช้สลิป ให้อัปโหลดง่ายและแจ้งผลชัดเจน`,
        `เปิด guest checkout และให้สมัครสมาชิกหลังจ่ายเสร็จ`,
        `ออกแบบฟอร์มที่อยู่ตามลำดับแบบไทย เริ่มจากรหัสไปรษณีย์`,
        `แสดงค่าส่งและยอดรวมตั้งแต่ต้น และตัดทุกช่องที่ไม่จำเป็น`,
      ],
      figCaption: `ขั้นตอน checkout บนมือถือ ตั้งแต่ตะกร้า ที่อยู่ ไปจนถึงการบันทึก QR PromptPay`,
      faq: [
        {
          q: `ควรมีวิธีจ่ายอื่นนอกจาก PromptPay ไหม`,
          a: `ขึ้นกับลูกค้าของคุณ ถ้ามีลูกค้าต่างชาติหรือลูกค้าองค์กร บัตรเครดิตหรือการโอนแบบอื่นอาจจำเป็น แต่ควรเรียงตัวเลือกตามที่ลูกค้าใช้จริง และไม่ใส่ตัวเลือกมากจนต้องเลื่อนหา`,
        },
        {
          q: `ใช้การแนบสลิปต่อไปได้ไหม ถ้ายังไม่พร้อมทำระบบอัตโนมัติ`,
          a: `ได้ แต่ควรบอกเวลาตรวจที่ชัดเจน แจ้งผลทันทีเมื่อตรวจเสร็จ และเก็บสลิปอย่างปลอดภัยเพราะมีข้อมูลส่วนบุคคล เมื่อยอดสั่งซื้อเพิ่มขึ้น การยืนยันอัตโนมัติจะช่วยลดภาระแอดมินได้มาก`,
        },
      ],
    },
    en: {
      title: `Checkout UX for Thai E-commerce and Booking Sites: PromptPay, Addresses and Trust`,
      excerpt: `Checkout is where buyers really decide. A look at the PromptPay QR flow on mobile, Thai address forms, delivery options, trust signals and cutting needless steps.`,
      metaTitle: `Checkout UX for Thai Sites: PromptPay and Addresses`,
      metaDescription: `Designing checkout for Thai shops and booking sites: the PromptPay QR flow on mobile, guest checkout, Thai address forms, delivery options and trust cues.`,
      intro: `A customer picks their items, taps "Order", then disappears halfway. Nearly every Thai online shop and booking site has seen it. Often the cause is not price but a checkout that is too long, asks for things twice, or makes paying on a phone awkward. This guide collects practical patterns for the Thai context, with a focus on paying by PromptPay.`,
      sections: [
        {
          h: `The PromptPay QR flow on mobile`,
          p: [
            `PromptPay is Thailand's national instant payment and QR scheme, and people know it well. The catch is that a QR code is designed to be scanned from another device, while most shoppers browse on the same phone that holds their banking app. They cannot scan their own screen, so checkout has to help.`,
            `A workable fix is a "Save QR to phone" button that genuinely saves an image, plus a short note: open your banking app, choose scan from photo, then come back here. Show the amount and the QR expiry time clearly, and keep the order state so that switching apps and returning lands on the same page, not an empty cart.`,
          ],
          list: [
            `A button to save the QR as an image, plus "or just take a screenshot".`,
            `Amount, payee name and expiry printed inside the saved QR image.`,
            `Three short steps on scanning from a photo in a banking app.`,
            `A payment-pending page the buyer can reopen from an email or LINE link.`,
          ],
        },
        {
          h: `Auto-confirmation or slip upload`,
          p: [
            `If your payment setup can confirm transfers automatically through a payment provider or bank, buyers get the best experience: they pay, the page flips to "Paid" by itself, and nobody on your team has to check slips one by one.`,
            `Many small shops still ask for a transfer slip, which is fine if the flow is smooth. The upload button should open the photo library directly, the page should say how soon the slip will be checked, and a confirmation should arrive via LINE OA or email once it is. Above all, do not make buyers retype the amount or transfer time when that information is already on the slip.`,
          ],
          quote: `Customers are not afraid of paying. They are afraid of not knowing what happens after they pay.`,
        },
        {
          h: `Guest checkout and Thai address forms`,
          p: [
            `Forcing sign-up before purchase is an unnecessary hurdle. Let people buy as a guest with a phone number or email, then offer an account after payment, such as "Save this address for next time?", or let them sign in with LINE, which most Thai shoppers already have.`,
            `Thai addresses follow a different order from off-the-shelf foreign forms: sub-district (tambon/khwaeng), district (amphoe/khet), province and postcode. A big time saver is asking for the postcode first and then suggesting the matching sub-districts and districts. Keep house number, village, soi and road as flexible text fields, because real Thai addresses vary a lot.`,
          ],
        },
        {
          h: `Delivery options and trust signals`,
          p: [
            `Buyers want two answers before paying: the total, and when it will arrive. Show shipping from the cart rather than revealing it at the last step, and give an expected delivery window. For booking sites such as hotels or clinics, put date, time, branch and cancellation terms in one summary before the confirm button.`,
            `Trust comes from small details: a company name that matches the PromptPay payee name, contact channels that actually answer, a readable returns policy, and a fast page without strange pop-ups. Together these reassure buyers that their transfer will not vanish.`,
          ],
          list: [
            `The payee name on the QR matches the shop or company name on the site.`,
            `Shipping and the total are visible from the cart onward.`,
            `Returns or cancellation terms written in plain language.`,
            `Contact options such as LINE OA and phone shown on the checkout page.`,
          ],
        },
        {
          h: `Cut every step you can`,
          p: [
            `Walk through your checkout on a real phone, from cart to thank-you page, and count the taps and fields. Every field should have a clear reason to exist; if it does not, remove it. Birthdays or gender rarely matter for delivery, and dropping them also lowers PDPA risk from collecting more data than you need.`,
            `Keyboards are often overlooked. Phone fields should open a number pad, email fields a keyboard with @, and autofill should be enabled so the browser can fill details. Each fix looks tiny, but together they make checkout feel noticeably shorter. At Haliviq we usually start checkout work by watching five real people pay, which reveals problems faster than guessing.`,
          ],
        },
      ],
      takeaways: [
        `Most buyers pay on the same phone, so offer a save-QR button and scan-from-photo guidance.`,
        `Confirm payments automatically if you can; if you use slips, make upload easy and results clear.`,
        `Allow guest checkout and offer an account after payment.`,
        `Design address forms in Thai order, starting from the postcode.`,
        `Show shipping and totals early, and remove every field you do not need.`,
      ],
      figCaption: `A mobile checkout flow from cart and address to saving the PromptPay QR`,
      faq: [
        {
          q: `Should we offer payment methods besides PromptPay?`,
          a: `It depends on your customers. Foreign or corporate buyers may need cards or other transfers. Order the options by what customers actually use, and avoid so many choices that people have to scroll.`,
        },
        {
          q: `Can we keep using slip uploads if we are not ready for automation?`,
          a: `Yes, but state a clear checking time, notify buyers as soon as it is checked, and store slips securely because they contain personal data. As order volume grows, automatic confirmation saves a lot of admin time.`,
        },
      ],
    },
  },
  {
    slug: 'thai-ux-writing',
    cat: 'Design',
    date: '2026-11-03',
    readMin: 8,
    tags: ['UX writing', 'microcopy', 'Thai language', 'voice and tone', 'content design'],
    related: ['thai-typography', 'checkout-ux-promptpay', 'why-design-system-matters'],
    th: {
      title: `UX Writing ภาษาไทย: เขียนปุ่ม ข้อความ error และ microcopy ให้คนอ่านแล้วทำต่อได้ทันที`,
      excerpt: `คำบนหน้าจอเป็นส่วนหนึ่งของดีไซน์ บทความนี้ว่าด้วยการเลือกน้ำเสียง ครับ/ค่ะ การเขียนปุ่มให้สั้น ข้อความ error ที่ช่วยได้จริง และการทำ voice and tone guide ภาษาไทย`,
      metaTitle: `UX Writing ภาษาไทย: ปุ่ม error และ microcopy ที่ดี`,
      metaDescription: `แนวทางเขียน UX writing และ microcopy ภาษาไทย ทั้งน้ำเสียง ครับ/ค่ะ ปุ่มที่สั้นชัด ข้อความ error ที่ช่วยผู้ใช้ การผสมคำอังกฤษ และการตัดบรรทัดภาษาไทยใน UI`,
      intro: `หลายทีมใช้เวลาเลือกสีปุ่มเป็นวัน แต่เขียนคำบนปุ่มในห้านาทีก่อนส่งงาน ทั้งที่คำเหล่านั้นคือสิ่งที่ผู้ใช้อ่านเพื่อตัดสินใจว่าจะกดหรือไม่ ภาษาไทยยังมีโจทย์เฉพาะ ทั้งคำลงท้าย การผสมคำอังกฤษ และการตัดบรรทัด บทความนี้รวมหลักคิดพร้อมตัวอย่างก่อนและหลังแก้ ที่หยิบไปใช้ได้ทันที`,
      sections: [
        {
          h: `เลือกน้ำเสียง: ครับ/ค่ะ หรือกลางๆ`,
          p: [
            `คำถามแรกที่ทีมไทยมักเถียงกันคือจะใส่ครับหรือค่ะไหม คำลงท้ายทำให้ฟังสุภาพและเป็นกันเอง แต่ก็ผูกแบรนด์กับเพศของผู้พูด และทำให้ข้อความยาวขึ้น แบรนด์ส่วนใหญ่ในแอปและเว็บจึงเลือกน้ำเสียงกลางที่สุภาพโดยไม่ต้องมีคำลงท้าย แล้วเก็บครับ/ค่ะ ไว้ใช้ในแชต LINE OA หรือข้อความที่มีคนตอบจริง`,
            `ไม่ว่าเลือกแบบไหน หัวใจคือความสม่ำเสมอ ถ้าหน้าหนึ่งเขียน "กรุณากรอกอีเมลค่ะ" อีกหน้าเขียน "ใส่อีเมลสิ" ผู้ใช้จะรู้สึกเหมือนคุยกับคนละคน คลินิกความงามหรือโรงแรมอาจเลือกน้ำเสียงอบอุ่นและสุภาพมาก ส่วนแอปการเงินอาจเลือกชัดและนิ่ง สิ่งสำคัญคือเลือกให้ตรงกับแบรนด์และใช้ให้เหมือนกันทุกจุด`,
          ],
        },
        {
          h: `ปุ่มที่สั้นและบอกผลลัพธ์`,
          p: [
            `ปุ่มที่ดีบอกว่ากดแล้วจะเกิดอะไรขึ้น ไม่ใช่แค่ "ตกลง" หรือ "ถัดไป" ใช้คำกริยานำ และถ้าเป็นไปได้ให้ใส่สิ่งที่จะเกิด เช่น "ชำระเงิน 1,250 บาท" ชัดกว่า "ยืนยัน" ในหน้าต่างยืนยันการลบ ปุ่มควรเขียนว่า "ลบที่อยู่นี้" กับ "เก็บไว้" แทน "ใช่" กับ "ไม่ใช่" ที่ต้องย้อนไปอ่านคำถามอีกรอบ`,
            `ภาษาไทยไม่มีเว้นวรรคระหว่างคำ ปุ่มยาวๆ จึงอ่านยากกว่าภาษาอังกฤษที่ยาวเท่ากัน ตั้งเป้าให้ปุ่มส่วนใหญ่อยู่ที่สองถึงสี่คำ และตัดคำฟุ่มเฟือยอย่าง "กรุณา" "ทำการ" หรือ "ดำเนินการ" ออก`,
          ],
          list: [
            `ก่อน: "ทำการบันทึกข้อมูล" หลัง: "บันทึก"`,
            `ก่อน: "ตกลง" (ในหน้าต่างลบ) หลัง: "ลบรายการนี้"`,
            `ก่อน: "ดำเนินการต่อ" หลัง: "ไปหน้าชำระเงิน"`,
            `ก่อน: "Submit" หลัง: "ส่งคำขอนัดหมาย"`,
          ],
        },
        {
          h: `ข้อความ error ที่ช่วยได้จริง`,
          p: [
            `ข้อความ error ที่แย่ที่สุดคือข้อความที่บอกว่าผิดแต่ไม่บอกว่าผิดอะไรและต้องทำอะไรต่อ เช่น "เกิดข้อผิดพลาด กรุณาลองใหม่" ข้อความที่ดีมีสามส่วน คือเกิดอะไรขึ้น ทำไม ถ้ารู้ และผู้ใช้ทำอะไรต่อได้ โดยไม่โทษผู้ใช้`,
            `วาง error ไว้ใกล้ช่องที่มีปัญหา อย่ารวมไว้บนหัวฟอร์มจนผู้ใช้ต้องไล่หา และเก็บข้อมูลที่กรอกแล้วไว้เสมอ ข้อความ error ระดับระบบก็ควรมีทางไปต่อ เช่น ช่องทางติดต่อหรือเลขอ้างอิงเคสที่บอกเจ้าหน้าที่ได้`,
          ],
          list: [
            `ก่อน: "ข้อมูลไม่ถูกต้อง" หลัง: "เบอร์โทรต้องมี 10 หลัก เช่น 0812345678"`,
            `ก่อน: "Error 500" หลัง: "ระบบขัดข้องชั่วคราว ข้อมูลของคุณยังอยู่ ลองกดส่งอีกครั้งในอีกสักครู่"`,
            `ก่อน: "รหัสผ่านผิด!" หลัง: "อีเมลหรือรหัสผ่านไม่ตรงกัน ลองอีกครั้งหรือกด ลืมรหัสผ่าน"`,
          ],
          quote: `ข้อความ error ที่ดีไม่ได้บอกแค่ว่าผิด แต่พาผู้ใช้ไปถึงทางออก`,
        },
        {
          h: `ผสมไทยกับอังกฤษ และการตัดบรรทัด`,
          p: [
            `คำอย่าง "แชต" "โค้ดส่วนลด" "ล็อกอิน" หรือ "แอป" คนไทยใช้จนชินแล้ว การบังคับแปลเป็นคำไทยแท้อาจทำให้ฟังแข็งและเข้าใจยากกว่า หลักง่ายๆ คือใช้คำที่ลูกค้าของคุณพูดจริง ถ้าไม่แน่ใจให้ฟังจากแชตลูกค้าหรือการสัมภาษณ์ แล้วเลือกว่าจะเขียนเป็นอักษรไทยหรืออังกฤษ และใช้แบบเดียวกันทั้งระบบ`,
            `เรื่องความยาวต้องเผื่อไว้เสมอ ข้อความไทยกับอังกฤษความหมายเดียวกันมักยาวไม่เท่ากัน ดีไซน์ที่ทำเป็นภาษาอังกฤษก่อนจึงล้นเมื่อใส่ภาษาไทย นอกจากนี้ภาษาไทยไม่มีเว้นวรรคระหว่างคำ เบราว์เซอร์ต้องเดาตำแหน่งตัดคำ ซึ่งบางครั้งตัดกลางคำจนอ่านผิดความหมาย ควรทดสอบกับข้อความจริงบนจอแคบ ใช้ non-breaking space หรือแท็กช่วยตัดคำในจุดที่สำคัญ เช่น หัวข้อและปุ่ม`,
          ],
        },
        {
          h: `ทำ voice and tone guide ของทีม`,
          p: [
            `เมื่อมีคนเขียนหลายคน ทั้งดีไซเนอร์ นักพัฒนา แอดมิน และการตลาด คำบนหน้าจอจะเริ่มไม่เหมือนกัน Voice and tone guide คือเอกสารสั้นๆ ที่บอกว่าแบรนด์พูดอย่างไร ไม่ต้องยาว ห้าถึงสิบหน้าก็ใช้ได้ ถ้ามีตัวอย่างจริงเยอะพอ`,
            `ให้ guide นี้อยู่ใกล้ design system เพื่อให้ component อย่างปุ่มหรือ error state มีคำตัวอย่างมาพร้อม และทบทวนทุกครั้งที่มีฟีเจอร์ใหม่หรือพบคำที่ลูกค้าถามซ้ำๆ ใน LINE OA`,
          ],
          list: [
            `บุคลิกของแบรนด์ 3 คำ พร้อมคำอธิบายว่า "เป็น" และ "ไม่เป็น" อะไร`,
            `นโยบายคำลงท้าย สรรพนาม และการเรียกลูกค้า`,
            `คลังคำศัพท์: คำที่ใช้ คำที่ไม่ใช้ และการสะกดคำอังกฤษ`,
            `ตัวอย่างก่อนและหลังสำหรับปุ่ม error หน้าว่าง และการแจ้งเตือน`,
            `น้ำเสียงตามสถานการณ์ เช่น ตอนสำเร็จ ตอนผิดพลาด และเรื่องเงิน`,
          ],
        },
      ],
      takeaways: [
        `เลือกน้ำเสียงหนึ่งแบบให้ตรงกับแบรนด์ แล้วใช้ให้สม่ำเสมอทุกหน้าจอ`,
        `ปุ่มควรสั้น นำด้วยคำกริยา และบอกผลลัพธ์ของการกด`,
        `ข้อความ error บอกว่าเกิดอะไรขึ้นและทำอะไรต่อได้ โดยไม่โทษผู้ใช้`,
        `ใช้คำที่ลูกค้าพูดจริง และทดสอบความยาวกับการตัดบรรทัดภาษาไทย`,
        `เขียน voice and tone guide สั้นๆ ที่มีตัวอย่างจริงเยอะๆ`,
      ],
      figCaption: `ตัวอย่างปุ่มและข้อความ error ภาษาไทยแบบก่อนและหลังปรับ`,
      faq: [
        {
          q: `ควรเขียน UI ภาษาไทยก่อนหรือภาษาอังกฤษก่อน`,
          a: `ถ้าผู้ใช้หลักเป็นคนไทย ควรเขียนภาษาไทยก่อนหรือเขียนคู่กันตั้งแต่ขั้นดีไซน์ เพื่อให้ layout รองรับความยาวและการตัดบรรทัดของภาษาไทยจริง ไม่ใช่แปลทีหลังแล้วค่อยแก้ที่ล้น`,
        },
        {
          q: `UX writer ต้องเป็นตำแหน่งแยกไหม`,
          a: `ทีมเล็กไม่จำเป็น ดีไซเนอร์หรือ product owner รับผิดชอบได้ถ้ามี guide และมีการรีวิวคำเหมือนรีวิวดีไซน์ เมื่อผลิตภัณฑ์ใหญ่ขึ้นค่อยพิจารณาคนที่ดูแลเรื่องนี้โดยตรง`,
        },
        {
          q: `ใช้ AI ช่วยเขียน microcopy ได้ไหม`,
          a: `ได้ ใช้ร่างหลายแบบให้เลือกได้ดี แต่ต้องมีคนตรวจว่าตรงน้ำเสียงแบรนด์ ตรงกับคลังคำศัพท์ และอ่านเป็นธรรมชาติสำหรับคนไทย`,
        },
      ],
    },
    en: {
      title: `Thai UX Writing: Buttons, Error Messages and Microcopy People Can Act On`,
      excerpt: `Words on screen are part of the design. Choosing a tone, polite particles or neutral, short button labels, helpful errors, and building a Thai voice-and-tone guide.`,
      metaTitle: `Thai UX Writing: Buttons, Errors and Microcopy`,
      metaDescription: `UX writing and microcopy in Thai: tone and polite particles, short clear buttons, helpful errors, mixing in English terms, and Thai line breaking in UI.`,
      intro: `Many teams spend a day choosing a button colour and five minutes writing the label before handoff, even though the label is what users read to decide whether to tap. Thai adds its own puzzles: polite particles, mixing in English, and line breaking. This guide gathers the principles, with before-and-after examples you can use right away.`,
      sections: [
        {
          h: `Choosing a tone: polite particles or neutral`,
          p: [
            `The first debate in most Thai teams is whether to end sentences with khrap or kha. These particles sound polite and warm, but they tie the brand to the speaker's gender and make text longer. Most app and web brands therefore choose a neutral, polite voice with no particles in the interface, and keep khrap/kha for LINE OA chats or messages where a real person replies.`,
            `Whichever you choose, consistency is what matters. If one screen says the formal equivalent of "Kindly enter your email" and another says "Pop your email in", users feel they are talking to different people. A beauty clinic or hotel may pick a warm, very polite voice, while a finance app may choose calm and direct. Match the brand, then use it everywhere.`,
          ],
        },
        {
          h: `Buttons that are short and say what happens`,
          p: [
            `A good button says what will happen, not just "OK" or "Next". Lead with a verb and, where possible, the outcome: "Pay 1,250 baht" is clearer than "Confirm". In a delete dialog, use "Delete this address" and "Keep it" rather than "Yes" and "No", which force people to reread the question.`,
            `Thai has no spaces between words, so a long Thai label is harder to scan than an English one of the same length. Aim for two to four words on most buttons, and cut filler words such as the Thai equivalents of "please", "perform" or "proceed with".`,
          ],
          list: [
            `Before: "Perform data save". After: "Save".`,
            `Before: "OK" (in a delete dialog). After: "Delete this item".`,
            `Before: "Continue". After: "Go to payment".`,
            `Before: "Submit". After: "Request appointment".`,
          ],
        },
        {
          h: `Error messages that actually help`,
          p: [
            `The worst error says something went wrong without saying what or what to do, such as "An error occurred, please try again". A good one has three parts: what happened, why if you know, and what the user can do next, without blaming them.`,
            `Place errors next to the field with the problem instead of stacking them at the top of the form, and never clear what the user already typed. System-level errors also need a way forward, such as a contact channel or a case reference to give to staff.`,
          ],
          list: [
            `Before: "Invalid data". After: "Phone numbers need 10 digits, for example 0812345678".`,
            `Before: "Error 500". After: "We're having a temporary problem. Your details are saved; try sending again in a moment".`,
            `Before: "Wrong password!". After: "Email and password don't match. Try again or tap Forgot password".`,
          ],
          quote: `A good error message does not just say something is wrong; it walks people to the way out.`,
        },
        {
          h: `Mixing Thai and English, and line breaks`,
          p: [
            `Words like chat, discount code, log in and app are so familiar in Thai that forcing pure Thai equivalents can sound stiff and be harder to understand. The simple rule is to use the words your customers actually say. If unsure, listen to customer chats or interviews, decide whether to write the term in Thai script or English, and apply it the same way everywhere.`,
            `Always allow for length. Thai and English versions of the same message rarely match in length, so layouts designed in English often overflow in Thai. And because Thai has no spaces between words, browsers must guess where to break lines, sometimes splitting a word in a way that changes the meaning. Test with real copy on narrow screens, and use non-breaking spaces or word-break hints where it matters most, such as headings and buttons.`,
          ],
        },
        {
          h: `Build your team's voice-and-tone guide`,
          p: [
            `Once several people write copy, designers, developers, admins and marketing, the words on screen start to drift. A voice-and-tone guide is a short document that describes how the brand speaks. Five to ten pages is enough, as long as it is full of real examples.`,
            `Keep it close to your design system so components such as buttons and error states come with sample copy, and review it whenever you ship a new feature or notice the same customer question repeating in LINE OA.`,
          ],
          list: [
            `Three words for the brand personality, with what it is and is not.`,
            `Rules for particles, pronouns and how to address customers.`,
            `A glossary: words to use, words to avoid, and how to spell English terms.`,
            `Before-and-after examples for buttons, errors, empty states and notifications.`,
            `Tone by situation: success, failure, and anything involving money.`,
          ],
        },
      ],
      takeaways: [
        `Pick one tone that fits the brand and use it consistently on every screen.`,
        `Buttons should be short, verb-first and describe the result.`,
        `Errors explain what happened and what to do next, without blame.`,
        `Use the words customers really say, and test length and Thai line breaks.`,
        `Write a short voice-and-tone guide packed with real examples.`,
      ],
      figCaption: `Before-and-after examples of Thai buttons and error messages`,
      faq: [
        {
          q: `Should we write the Thai UI first or the English first?`,
          a: `If most users are Thai, write Thai first or both together during design, so layouts handle real Thai length and line breaks rather than being fixed after a late translation.`,
        },
        {
          q: `Do we need a dedicated UX writer?`,
          a: `Not for a small team. A designer or product owner can own it with a guide and a copy review, just like a design review. Consider a dedicated role as the product grows.`,
        },
        {
          q: `Can AI help write microcopy?`,
          a: `Yes, it is good for drafting several options. A person still needs to check the brand voice, the glossary and whether it reads naturally to Thai users.`,
        },
      ],
    },
  },
  {
    slug: 'dark-patterns-consent',
    cat: 'Design',
    date: '2026-10-20',
    readMin: 8,
    tags: ['dark patterns', 'cookie consent', 'PDPA', 'ethical design', 'subscriptions'],
    related: ['thailand-pdpa-guide', 'pdpa-enforcement-fines', 'accessibility-wcag'],
    th: {
      title: `Dark Patterns กับการออกแบบที่ซื่อตรง: แบนเนอร์คุกกี้ PDPA ยกเลิกสมาชิก และความเร่งปลอม`,
      excerpt: `ติ๊กถูกไว้ให้ก่อน ปุ่มปฏิเสธที่หาไม่เจอ ยกเลิกสมาชิกยากกว่าสมัคร แพทเทิร์นเหล่านี้อาจได้ตัวเลขระยะสั้น แต่เสียความไว้ใจและเพิ่มความเสี่ยงทางกฎหมายในระยะยาว`,
      metaTitle: `Dark Patterns และแบนเนอร์คุกกี้ภายใต้ PDPA`,
      metaDescription: `รู้จัก dark patterns ที่พบบ่อย ทั้งแบนเนอร์คุกกี้ที่ปฏิเสธยาก ช่องติ๊กไว้ก่อน confirmshaming ยกเลิกสมาชิกยาก และความเร่งปลอม พร้อมทางออกที่ซื่อตรงตาม PDPA`,
      intro: `Dark pattern คือการออกแบบที่จงใจพาผู้ใช้ไปทำสิ่งที่ไม่ได้ตั้งใจ เช่น ยอมรับคุกกี้ทั้งหมด สมัครรับข่าวสาร หรือจ่ายค่าสมาชิกต่อโดยไม่รู้ตัว ในระยะสั้นอาจดูเหมือนได้ผล แต่ลูกค้าจำได้ว่าถูกหลอก และในไทยที่ PDPA บังคับใช้จริงแล้ว การขอความยินยอมแบบไม่ซื่อตรงก็เป็นความเสี่ยงทางกฎหมายด้วย บทความนี้พาดูแพทเทิร์นที่พบบ่อยและทางเลือกที่ดีกว่า`,
      sections: [
        {
          h: `แบนเนอร์คุกกี้และความยินยอมภายใต้ PDPA`,
          p: [
            `แบนเนอร์คุกกี้เป็นที่ที่พบ dark pattern บ่อยที่สุด ปุ่ม "ยอมรับทั้งหมด" ใหญ่และสีสด ส่วนทางปฏิเสธซ่อนอยู่หลังลิงก์ตัวเล็ก "ตั้งค่า" ที่ต้องกดอีกสองสามชั้น หรือปิดแบนเนอร์แล้วถือว่ายินยอม ทั้งที่ผู้ใช้แค่อยากอ่านบทความ`,
            `หลักของ PDPA คือความยินยอมต้องเป็นอิสระ ชัดเจน และเจาะจงวัตถุประสงค์ และต้องถอนความยินยอมได้ง่ายเท่ากับตอนให้ แบนเนอร์ที่ซื่อตรงจึงควรมีปุ่ม "ยอมรับ" และ "ปฏิเสธ" ที่เด่นเท่ากันในชั้นแรก แยกหมวดคุกกี้ที่จำเป็นออกจากคุกกี้การตลาด และมีลิงก์กลับมาเปลี่ยนการตั้งค่าได้ตลอด`,
          ],
          list: [
            `ปุ่มยอมรับและปฏิเสธอยู่ชั้นแรก ขนาดและความเด่นใกล้เคียงกัน`,
            `คุกกี้ที่ไม่จำเป็นปิดไว้ก่อนจนกว่าผู้ใช้จะเลือกเปิด`,
            `อธิบายแต่ละหมวดเป็นภาษาง่ายๆ ว่าใช้ทำอะไร`,
            `มีลิงก์ตั้งค่าคุกกี้ในส่วนท้ายเว็บให้เปลี่ยนใจได้ตลอด`,
          ],
        },
        {
          h: `ช่องติ๊กไว้ให้ก่อนและ confirmshaming`,
          p: [
            `ช่อง "ยินดีรับข่าวสารและโปรโมชันจากพันธมิตร" ที่ติ๊กไว้ให้แล้วในฟอร์มสมัครสมาชิก เป็นอีกแพทเทิร์นที่พบบ่อย ผู้ใช้ส่วนใหญ่ไม่ได้อ่าน จึงไม่ได้ตัดสินใจจริง ความยินยอมแบบนี้ทั้งอ่อนในทางกฎหมาย และทำให้ฐานรายชื่อการตลาดเต็มไปด้วยคนที่ไม่ได้อยากฟังคุณ`,
            `Confirmshaming คือการเขียนปุ่มปฏิเสธให้ผู้ใช้รู้สึกผิด เช่น "ไม่ล่ะ ฉันไม่อยากประหยัดเงิน" อาจดูขำ แต่ส่งสารว่าแบรนด์ไม่เคารพการตัดสินใจของลูกค้า ทางเลือกที่ดีกว่าคือเขียนทั้งสองปุ่มแบบตรงไปตรงมา เช่น "รับส่วนลดทางอีเมล" กับ "ไม่ใช่ตอนนี้"`,
          ],
        },
        {
          h: `สมัครง่าย ยกเลิกยาก และความเร่งปลอม`,
          p: [
            `บริการสมาชิกรายเดือนหลายเจ้าให้สมัครได้ในคลิกเดียว แต่ตอนยกเลิกต้องโทรหาคอลเซ็นเตอร์ ส่งอีเมล หรือผ่านหน้าข้อเสนอพิเศษหลายรอบ ลูกค้าที่ยกเลิกไม่ได้จะไม่กลับมาเป็นลูกค้าที่ดี เขาจะไปแจ้งธนาคาร รีวิวแย่ หรือร้องเรียน หลักง่ายๆ คือยกเลิกควรทำได้ในช่องทางเดียวกับที่สมัคร และใช้ขั้นตอนใกล้เคียงกัน`,
            `ความเร่งปลอมคือนาฬิกานับถอยหลังที่รีเซ็ตทุกครั้งที่รีเฟรช หรือป้าย "เหลือห้องสุดท้าย" ที่ขึ้นทุกวัน เว็บโรงแรมและร้านค้าออนไลน์ใช้กันเยอะ ถ้าโปรโมชันหมดเวลาจริงหรือสต็อกเหลือน้อยจริง บอกได้เลย แต่ถ้าไม่จริง ลูกค้าที่จับได้ครั้งเดียวจะไม่เชื่อป้ายของคุณอีก`,
          ],
          quote: `ถ้าคุณจะอายเมื่อลูกค้ารู้ว่าหน้าจอนี้ออกแบบมาอย่างไร นั่นคือสัญญาณว่าควรออกแบบใหม่`,
        },
        {
          h: `ทำไมความซื่อตรงคุ้มทั้งต่อแบรนด์และความเสี่ยง`,
          p: [
            `Dark pattern มักถูกวัดผลด้วยตัวเลขระยะสั้น เช่น อัตรายอมรับคุกกี้หรือยอดสมัครรับข่าวสาร แต่ต้นทุนไม่ได้อยู่ในแดชบอร์ดเดียวกัน ทั้งเรื่องร้องเรียน การขอคืนเงิน รีวิวแย่ ภาระฝ่ายบริการลูกค้า และรายชื่อการตลาดที่ไม่มีใครเปิดอ่าน`,
            `ในด้านกฎหมาย PDPC ของไทยเริ่มออกค่าปรับทางปกครองแล้วตั้งแต่ปี 2024 และโทษปรับทางปกครองสูงได้ถึง 5 ล้านบาทต่อการฝ่าฝืน นอกจากความเสียหายทางแพ่งและโทษทางอาญาในบางกรณี ความยินยอมที่ได้มาด้วยการหลอกล่อจึงเป็นหลักฐานที่อ่อน ถ้าวันหนึ่งต้องพิสูจน์ว่าได้รับความยินยอมโดยชอบ`,
          ],
        },
        {
          h: `ทิศทางโลก: ออกแบบให้เป็นธรรมและเข้าถึงได้`,
          p: [
            `ไม่ใช่แค่ไทย หน่วยงานกำกับดูแลในหลายประเทศหันมาสนใจว่าหน้าจอออกแบบมาเป็นธรรมกับผู้บริโภคหรือไม่ ทั้งเรื่องความยินยอม การยกเลิก และการแสดงราคา ตัวอย่างหนึ่งคือ European Accessibility Act ที่มีผลตั้งแต่ 28 มิถุนายน 2025 กับบริการดิจิทัลสำหรับผู้บริโภคหลายประเภทรวมถึงอีคอมเมิร์ซ และครอบคลุมธุรกิจนอกยุโรปที่ขายให้ผู้บริโภคในยุโรปด้วย โดยมี WCAG 2.2 เป็นเกณฑ์อ้างอิงที่ใช้กันในทางปฏิบัติ`,
            `ดีไซน์ที่ซื่อตรงกับดีไซน์ที่เข้าถึงได้มักไปด้วยกัน ปุ่มที่ชัด ข้อความที่อ่านเข้าใจ และไม่ซ่อนทางเลือก ช่วยทั้งคนทั่วไปและคนที่ใช้โปรแกรมอ่านหน้าจอ ทีม Haliviq มักใส่การตรวจ dark pattern ไว้ในรีวิวดีไซน์ปกติ ควบคู่กับการตรวจ accessibility`,
          ],
          list: [
            `ปฏิเสธง่ายเท่ากับยอมรับหรือไม่`,
            `มีช่องไหนติ๊กไว้ให้ก่อนโดยผู้ใช้ไม่ได้เลือกหรือไม่`,
            `ยกเลิกได้ในช่องทางและจำนวนขั้นใกล้เคียงกับตอนสมัครหรือไม่`,
            `ป้ายเร่งรัด ราคา และส่วนลดเป็นความจริงหรือไม่`,
            `คนที่ใช้คีย์บอร์ดหรือโปรแกรมอ่านหน้าจอเลือกได้ครบทุกทางหรือไม่`,
          ],
        },
      ],
      takeaways: [
        `แบนเนอร์คุกกี้ต้องให้ปฏิเสธได้ง่ายเท่ายอมรับ และปิดคุกกี้ที่ไม่จำเป็นไว้ก่อน`,
        `อย่าติ๊กช่องยินยอมไว้ให้ และเขียนปุ่มปฏิเสธอย่างให้เกียรติ`,
        `ยกเลิกสมาชิกควรง่ายพอๆ กับสมัคร`,
        `ใช้ความเร่งเฉพาะเมื่อเป็นความจริง`,
        `ความซื่อตรงลดความเสี่ยงด้าน PDPA และไปทางเดียวกับทิศทางการกำกับดูแลทั่วโลก`,
      ],
      figCaption: `เปรียบเทียบแบนเนอร์คุกกี้แบบ dark pattern กับแบบที่ให้ทางเลือกเท่ากัน`,
      faq: [
        {
          q: `เว็บเล็กๆ ต้องมีแบนเนอร์คุกกี้ไหม`,
          a: `ถ้าเว็บใช้คุกกี้หรือเครื่องมือติดตามที่ไม่จำเป็นต่อการทำงานของเว็บ เช่น pixel โฆษณาหรือ analytics บางประเภท ควรขอความยินยอมก่อน ถ้าใช้แต่คุกกี้ที่จำเป็นจริงๆ อาจแค่แจ้งในนโยบาย ควรปรึกษาที่ปรึกษากฎหมายสำหรับกรณีของคุณ`,
        },
        {
          q: `การเสนอข้อเสนอพิเศษตอนลูกค้ากดยกเลิกผิดไหม`,
          a: `เสนอได้หนึ่งครั้งอย่างชัดเจน แต่ต้องมีปุ่มยืนยันการยกเลิกที่หาง่าย และไม่บังคับให้ผ่านหลายหน้า หรือต้องติดต่อช่องทางอื่นจึงจะยกเลิกได้`,
        },
      ],
    },
    en: {
      title: `Dark Patterns vs Honest Design: PDPA Cookie Banners, Cancellations and Fake Urgency`,
      excerpt: `Pre-ticked boxes, hidden reject buttons, subscriptions harder to cancel than to start. These patterns may lift short-term numbers, but cost trust and add legal risk.`,
      metaTitle: `Dark Patterns and Cookie Consent Under Thai PDPA`,
      metaDescription: `Common dark patterns, from cookie banners that hide reject to pre-ticked boxes, confirmshaming, hard cancellation and fake urgency, with honest PDPA fixes.`,
      intro: `A dark pattern is a design that deliberately steers people into something they did not mean to do: accepting every cookie, joining a mailing list, or renewing a subscription without noticing. It can look effective in the short run, but customers remember being tricked, and with Thailand's PDPA now actively enforced, manipulative consent is also a legal risk. Here are the common patterns and better alternatives.`,
      sections: [
        {
          h: `Cookie banners and consent under PDPA`,
          p: [
            `Cookie banners are where dark patterns show up most. "Accept all" is big and bright, while rejecting hides behind a small "Settings" link two or three layers deep, or closing the banner is treated as consent when the user only wanted to read an article.`,
            `The PDPA principle is that consent must be freely given, clear and specific to a purpose, and withdrawing it should be as easy as giving it. An honest banner therefore puts "Accept" and "Reject" with equal weight on the first layer, separates essential cookies from marketing ones, and offers a link to change the choice at any time.`,
          ],
          list: [
            `Accept and reject on the first layer, with similar size and prominence.`,
            `Non-essential cookies off by default until the user turns them on.`,
            `Each category explained in plain language.`,
            `A cookie settings link in the footer so people can change their mind.`,
          ],
        },
        {
          h: `Pre-ticked boxes and confirmshaming`,
          p: [
            `A box reading "I'd like news and offers from partners", already ticked on a sign-up form, is another common pattern. Most people never read it, so they have not really decided. Consent like this is weak legally and fills your marketing list with people who do not want to hear from you.`,
            `Confirmshaming means wording the decline option to make people feel bad, such as "No thanks, I don't like saving money". It may seem playful, but it tells customers the brand does not respect their choice. Write both options plainly instead, for example "Get discounts by email" and "Not now".`,
          ],
        },
        {
          h: `Easy to join, hard to leave, and fake urgency`,
          p: [
            `Many subscriptions take one click to start but require a phone call, an email or several retention screens to cancel. A customer who cannot cancel does not become a loyal one; they dispute the charge with their bank, leave bad reviews or complain. The simple rule: cancellation should be available in the same channel as sign-up, with a similar number of steps.`,
            `Fake urgency is a countdown that resets on refresh, or a "last room left" badge that appears every day. Hotel and shopping sites use these a lot. If a promotion really ends or stock really is low, say so. If not, a customer who catches you once will never believe your badges again.`,
          ],
          quote: `If you would be embarrassed for customers to learn how a screen was designed, it needs redesigning.`,
        },
        {
          h: `Why honesty pays for brand and risk`,
          p: [
            `Dark patterns are usually judged by short-term numbers such as cookie acceptance or newsletter sign-ups. The costs sit on other dashboards: complaints, refunds, bad reviews, support workload, and marketing lists nobody opens.`,
            `Legally, Thailand's PDPC began issuing administrative fines in 2024, and administrative fines can reach THB 5 million per violation, on top of civil damages and criminal penalties for some breaches. Consent obtained by manipulation is weak evidence if you ever need to show it was validly given.`,
          ],
        },
        {
          h: `The global direction: fair and accessible design`,
          p: [
            `This is not only a Thai trend. Regulators in many places are paying closer attention to whether interfaces treat consumers fairly, from consent and cancellation to how prices are shown. One example is the European Accessibility Act, which applies from 28 June 2025 to many consumer digital services including e-commerce, and also covers non-EU businesses selling to EU consumers, with WCAG 2.2 as the common practical benchmark.`,
            `Honest design and accessible design tend to go together. Clear buttons, readable text and no hidden options help everyone, including screen reader users. At Haliviq we build a dark-pattern check into ordinary design reviews, alongside accessibility checks.`,
          ],
          list: [
            `Is rejecting as easy as accepting?`,
            `Is any box ticked that the user did not choose?`,
            `Can people cancel in the same channel and roughly as many steps as sign-up?`,
            `Are urgency badges, prices and discounts true?`,
            `Can keyboard and screen reader users reach every option?`,
          ],
        },
      ],
      takeaways: [
        `Cookie banners should make rejecting as easy as accepting, with non-essential cookies off by default.`,
        `Never pre-tick consent boxes, and word decline options respectfully.`,
        `Cancelling should be about as easy as subscribing.`,
        `Use urgency only when it is true.`,
        `Honest design lowers PDPA risk and matches the direction regulators are moving globally.`,
      ],
      figCaption: `A dark-pattern cookie banner compared with one that gives equal choices`,
      faq: [
        {
          q: `Does a small website need a cookie banner?`,
          a: `If the site uses cookies or trackers that are not needed for it to work, such as ad pixels or some analytics, it should ask for consent first. If it only uses strictly necessary cookies, a notice in the policy may be enough. Check your specific case with a legal adviser.`,
        },
        {
          q: `Is it wrong to show a special offer when someone cancels?`,
          a: `Offering once, clearly, is fine. There must still be an easy-to-find button to confirm cancellation, without forcing people through several screens or a different channel.`,
        },
      ],
    },
  },
  {
    slug: 'ai-prototyping-design',
    cat: 'Design',
    date: '2026-10-13',
    readMin: 8,
    tags: ['AI prototyping', 'design sprint', 'product design', 'UX', 'rapid prototyping'],
    related: ['ux-research', 'ux-for-ai-features', 'vibe-coded-app-to-production'],
    th: {
      title: `ใช้ AI ทำ Prototype จากไอเดียเป็นของที่กดได้ในไม่กี่วัน: ตรงไหนเร็วขึ้น ตรงไหนยังต้องใช้คน`,
      excerpt: `เครื่องมือ AI ทำให้ทีมได้ prototype ที่คลิกได้เร็วกว่าเดิมมาก แต่ความเร็วไม่ใช่ทุกอย่าง มาดูว่า AI ช่วยตรงไหน ตรงไหนยังต้องใช้วิจารณญาณของดีไซเนอร์ พร้อมแผนสปรินต์ 1 สัปดาห์`,
      metaTitle: `ใช้ AI ทำ Prototype ให้เร็ว พร้อมแผนสปรินต์ 1 สัปดาห์`,
      metaDescription: `วิธีใช้ AI ช่วยออกแบบตั้งแต่ไอเดียจนได้ prototype ที่คลิกได้ ทั้งการทำ variation ร่าง copy และโค้ดต้นแบบ จุดที่ยังต้องใช้คน และแผนสปรินต์ 1 สัปดาห์ที่ทำตามได้`,
      intro: `เมื่อก่อนกว่าจะได้ prototype ที่ลูกค้ากดลองได้ ทีมต้องใช้เวลาหลายสัปดาห์ ทั้งวาด wireframe ทำ mockup และต่อ flow ทีละหน้า วันนี้เครื่องมือ AI ร่างหน้าจอ เขียนข้อความ และสร้างโค้ดต้นแบบได้ในเวลาไม่นาน แต่ prototype ที่เร็วแต่แก้โจทย์ผิดก็ยังเป็นงานที่เสียเปล่า บทความนี้แยกให้เห็นว่า AI ช่วยตรงไหน คนยังต้องคุมตรงไหน และวางแผนหนึ่งสัปดาห์อย่างไร`,
      sections: [
        {
          h: `AI ช่วยให้เร็วขึ้นตรงไหนบ้าง`,
          p: [
            `จุดที่ AI ช่วยได้ชัดที่สุดคืองานที่ต้องการปริมาณ เช่น ร่างหน้าจอหลายแบบจากโจทย์เดียว ลองหลาย layout ของหน้าแรกคลินิก หรือหลายทางเลือกของหน้าเลือกห้องพักโรงแรม ดีไซเนอร์เปลี่ยนจากคนวาดทุกแบบ เป็นคนคัดและปรับแบบที่ดีที่สุด`,
            `อีกจุดคือข้อความและข้อมูลตัวอย่าง prototype ที่ใช้ข้อความ lorem ipsum ทำให้ทดสอบกับผู้ใช้ได้ไม่ดี AI ร่างหัวข้อ คำบรรยายสินค้า หรือรายชื่อสินค้าตัวอย่างที่ดูสมจริงได้เร็ว และเครื่องมือสร้างโค้ดช่วยให้ได้ prototype ที่รันในเบราว์เซอร์จริง กดได้ พิมพ์ได้ และเปิดบนมือถือได้ ซึ่งทดสอบได้สมจริงกว่าภาพนิ่งที่ต่อลิงก์กัน`,
          ],
          list: [
            `ร่าง layout หลายแบบจากโจทย์เดียว แล้วให้ดีไซเนอร์คัด`,
            `ร่าง copy และข้อมูลตัวอย่างที่สมจริงแทน lorem ipsum`,
            `สร้าง prototype แบบโค้ดที่เปิดบนมือถือจริงได้`,
            `สรุปบันทึกการสัมภาษณ์ผู้ใช้เป็นธีมให้ทีมตรวจต่อ`,
          ],
        },
        {
          h: `ตรงไหนยังต้องใช้วิจารณญาณของคน`,
          p: [
            `AI ไม่รู้ว่าลูกค้าของคุณติดปัญหาอะไร ถ้าไม่มีใครไปคุยกับผู้ใช้จริง สิ่งที่ได้คือหน้าจอสวยที่ตอบโจทย์ที่ทีมเดาเอาเอง การวิจัยผู้ใช้ การเลือกว่าจะแก้ปัญหาไหนก่อน และการออกแบบ flow ทั้งเส้นทางตั้งแต่ลูกค้าเห็นโฆษณาจนจ่ายเงิน ยังเป็นงานที่ต้องใช้คนคิด`,
            `แบรนด์และ accessibility เป็นอีกสองเรื่องที่ AI มักทำได้แค่กลางๆ งานที่ AI สร้างมักออกมาหน้าตาคล้ายกันหมด ไม่มีบุคลิกของแบรนด์ และมักพลาดเรื่อง contrast ลำดับหัวข้อ การใช้งานด้วยคีย์บอร์ด หรือการรองรับตัวอักษรไทยที่สูงกว่าภาษาอังกฤษ ดีไซเนอร์ต้องเป็นคนตรวจและตัดสินใจ`,
          ],
          quote: `AI ทำให้เราได้คำตอบเร็วขึ้น แต่การเลือกคำถามที่ถูกยังเป็นงานของคน`,
        },
        {
          h: `แผนสปรินต์ 1 สัปดาห์ จากไอเดียสู่ prototype ที่ทดสอบแล้ว`,
          p: [
            `แผนนี้เหมาะกับไอเดียฟีเจอร์ใหม่หรือบริการใหม่ที่ยังไม่แน่ใจว่าลูกค้าจะใช้ เช่น ระบบจองคิวผ่าน LINE ของคลินิก หรือหน้าขอใบเสนอราคาออนไลน์ของโรงงาน ทีมเล็กๆ สามถึงห้าคนทำได้ โดยมีคนตัดสินใจฝั่งธุรกิจเข้าร่วมอย่างน้อยวันแรกและวันสุดท้าย`,
            `กุญแจคือนัดผู้ใช้จริงสำหรับวันศุกร์ไว้ตั้งแต่วันจันทร์ เพราะเส้นตายที่มีคนรออยู่ทำให้ทีมไม่ขัดเกลา prototype จนเกินจำเป็น`,
          ],
          list: [
            `จันทร์: คุยกับผู้ใช้หรือฝ่ายขาย 3-5 คน สรุปปัญหาหลักหนึ่งข้อ และนัดผู้ทดสอบวันศุกร์`,
            `อังคาร: วาด flow หลักบนกระดาษหรือไวต์บอร์ด แล้วใช้ AI ร่างหน้าจอหลายแบบ`,
            `พุธ: คัดแบบเดียว ปรับให้ตรงแบรนด์ และเขียน copy จริงด้วยภาษาของลูกค้า`,
            `พฤหัส: สร้าง prototype ที่คลิกได้บนมือถือ ตรวจ accessibility เบื้องต้น และซ้อมสคริปต์ทดสอบ`,
            `ศุกร์: ทดสอบกับผู้ใช้ 5 คน สรุปสิ่งที่เรียนรู้ และตัดสินใจว่าจะไปต่อ ปรับ หรือหยุด`,
          ],
        },
        {
          h: `Prototype ไม่ใช่ production`,
          p: [
            `โค้ดที่ AI สร้างให้ใน prototype มีไว้ตอบคำถามว่าแนวคิดนี้ใช้ได้ไหม ไม่ได้ออกแบบมาให้ปลอดภัย ดูแลง่าย หรือรองรับผู้ใช้จำนวนมาก ถ้าทีมตื่นเต้นจนเอา prototype ไปเปิดให้ลูกค้าใช้จริง มักเจอปัญหาเรื่องข้อมูลส่วนบุคคล การล็อกอิน และประสิทธิภาพตามมา`,
            `ควรบอกทุกคนตั้งแต่แรกว่า prototype จะถูกทิ้งหรือเขียนใหม่ สิ่งที่เก็บไว้คือการเรียนรู้ flow ที่ผ่านการทดสอบ และ copy ที่ใช้ได้ แล้วค่อยส่งต่อให้ทีมพัฒนาทำของจริงบน design system และสถาปัตยกรรมที่เหมาะสม`,
          ],
        },
        {
          h: `ตั้งทีมและกติกาให้ AI เป็นผู้ช่วยที่ดี`,
          p: [
            `ทีมที่ใช้ AI ได้ดีมักมีกติกาง่ายๆ เช่น ทุกหน้าจอที่ AI ร่างต้องมีดีไซเนอร์รีวิว ไม่ใส่ข้อมูลลูกค้าจริงลงในเครื่องมือที่ไม่ได้อนุมัติ และบันทึกว่า prompt หรือ input แบบไหนให้ผลดี เพื่อให้คนอื่นในทีมใช้ซ้ำได้`,
            `อย่าวัดความสำเร็จจากจำนวนหน้าจอที่ทำได้ แต่วัดจากความเร็วที่ทีมเรียนรู้ว่าไอเดียไหนควรไปต่อ ทีม Haliviq ใช้วิธีนี้กับลูกค้าที่อยากทดสอบไอเดียก่อนลงทุนพัฒนาเต็มรูปแบบ ผลที่ได้ไม่ใช่แค่ prototype แต่คือความมั่นใจว่ากำลังสร้างสิ่งที่ลูกค้าต้องการ`,
          ],
          list: [
            `ดีไซเนอร์รีวิวทุกหน้าจอที่ AI ร่างก่อนนำไปทดสอบ`,
            `ห้ามใส่ข้อมูลส่วนบุคคลของลูกค้าจริงในเครื่องมือที่ไม่ได้อนุมัติ`,
            `เก็บ prompt และ input ที่ได้ผลดีไว้เป็นคลังของทีม`,
            `วัดผลจากสิ่งที่เรียนรู้ ไม่ใช่จำนวนหน้าจอ`,
          ],
        },
      ],
      takeaways: [
        `AI เร่งงานที่ต้องการปริมาณ เช่น variation, copy, ข้อมูลตัวอย่าง และโค้ดต้นแบบ`,
        `การวิจัยผู้ใช้ การออกแบบ flow แบรนด์ และ accessibility ยังต้องใช้คนตัดสินใจ`,
        `สปรินต์ 1 สัปดาห์ได้ผลดีที่สุดเมื่อนัดผู้ใช้ทดสอบวันศุกร์ไว้ตั้งแต่วันจันทร์`,
        `Prototype มีไว้เรียนรู้ อย่าเอาไปเปิดใช้จริงโดยไม่สร้างใหม่ให้ถูกต้อง`,
        `ตั้งกติกาการใช้ AI ในทีม โดยเฉพาะเรื่องการรีวิวและข้อมูลส่วนบุคคล`,
      ],
      figCaption: `แผนสปรินต์ 1 สัปดาห์ ตั้งแต่คุยกับผู้ใช้จนถึงทดสอบ prototype`,
      faq: [
        {
          q: `ใช้ AI แล้วยังต้องมีดีไซเนอร์ไหม`,
          a: `ยังต้องมี AI ช่วยลดงานที่ทำซ้ำ แต่การเข้าใจผู้ใช้ การเลือก flow การรักษาบุคลิกแบรนด์ และการตรวจ accessibility ยังต้องใช้วิจารณญาณของคน บทบาทของดีไซเนอร์เปลี่ยนไปเป็นผู้คัดเลือกและตัดสินใจมากขึ้น`,
        },
        {
          q: `ทดสอบกับผู้ใช้กี่คนถึงพอ`,
          a: `สำหรับ prototype ในระยะแรก ราวห้าคนต่อรอบก็มักเห็นปัญหาใหญ่ๆ ซ้ำกันแล้ว ทำหลายรอบเล็กๆ ดีกว่ารอบเดียวใหญ่ๆ`,
        },
        {
          q: `เอาโค้ด prototype ไปต่อยอดเป็นของจริงได้ไหม`,
          a: `บางส่วนอาจใช้ได้ แต่ส่วนใหญ่ควรเขียนใหม่หรือรีวิวอย่างละเอียด เพราะ prototype มักข้ามเรื่องความปลอดภัย การจัดการข้อมูล และการดูแลระยะยาว`,
        },
      ],
    },
    en: {
      title: `Using AI to Go From Idea to Clickable Prototype in Days: What Speeds Up and What Still Needs People`,
      excerpt: `AI tools get teams to a clickable prototype far faster, but speed is not everything. Where AI helps, where design judgement still matters, and a one-week sprint plan.`,
      metaTitle: `AI Prototyping: From Idea to Clickable in One Week`,
      metaDescription: `Use AI to go from idea to clickable prototype: variations, copy drafts and code prototypes, where design judgement still matters, and a one-week sprint plan.`,
      intro: `Getting a prototype customers could actually tap used to take weeks of wireframes, mockups and stitching flows together screen by screen. Today AI tools can draft screens, write copy and generate prototype code in very little time. But a fast prototype that solves the wrong problem is still wasted work. This article separates where AI helps, where people must stay in charge, and how to plan a single week.`,
      sections: [
        {
          h: `Where AI speeds things up`,
          p: [
            `AI helps most with work that needs volume: drafting several screens from one brief, trying different layouts for a clinic home page, or several options for a hotel room picker. Designers shift from drawing every version to choosing and refining the best one.`,
            `Copy and sample data are another win. Prototypes full of lorem ipsum test poorly with users. AI can quickly draft realistic headings, product descriptions or sample catalogues, and code-generation tools can produce a prototype that runs in a real browser, with tapping, typing and a mobile view, which tests far more realistically than linked static images.`,
          ],
          list: [
            `Draft multiple layouts from one brief, then let a designer choose.`,
            `Draft realistic copy and sample data instead of lorem ipsum.`,
            `Build code prototypes that open on a real phone.`,
            `Summarise user interview notes into themes for the team to check.`,
          ],
        },
        {
          h: `Where human judgement still matters`,
          p: [
            `AI does not know what your customers struggle with. If nobody talks to real users, you get attractive screens answering a problem the team guessed at. User research, choosing which problem to solve first, and designing the whole journey from seeing an ad to paying are still human thinking work.`,
            `Brand and accessibility are two more areas where AI tends to be merely average. Generated work often looks alike, lacks brand personality, and frequently misses contrast, heading order, keyboard use, or the extra line height Thai script needs compared with English. A designer has to review and decide.`,
          ],
          quote: `AI gets us answers faster, but choosing the right question is still our job.`,
        },
        {
          h: `A one-week sprint from idea to tested prototype`,
          p: [
            `This plan suits a new feature or service idea you are unsure customers will use, such as LINE-based queue booking for a clinic or an online quote request page for a factory. A small team of three to five can run it, with a business decision-maker present at least on the first and last days.`,
            `The key is booking real users for Friday on Monday. A deadline with people waiting stops the team from over-polishing the prototype.`,
          ],
          list: [
            `Monday: talk to 3-5 users or sales staff, agree one core problem, and book Friday's testers.`,
            `Tuesday: sketch the main flow on paper or a whiteboard, then use AI to draft several screen options.`,
            `Wednesday: pick one direction, align it with the brand, and write real copy in customers' language.`,
            `Thursday: build a clickable mobile prototype, run a basic accessibility check, and rehearse the test script.`,
            `Friday: test with five users, write up what you learned, and decide to continue, adjust or stop.`,
          ],
        },
        {
          h: `A prototype is not production`,
          p: [
            `AI-generated prototype code exists to answer whether an idea works. It is not designed to be secure, maintainable or ready for many users. Teams that get excited and open a prototype to real customers usually run into problems with personal data, sign-in and performance.`,
            `Tell everyone from the start that the prototype will be thrown away or rebuilt. What you keep is the learning, the tested flow and the copy that works. Then hand it to the development team to build properly on a design system and suitable architecture.`,
          ],
        },
        {
          h: `Set team rules so AI is a good assistant`,
          p: [
            `Teams that use AI well usually have simple rules: a designer reviews every AI-drafted screen, no real customer data goes into unapproved tools, and the team records which prompts or inputs work well so others can reuse them.`,
            `Do not measure success by the number of screens produced. Measure how quickly the team learns which ideas deserve to continue. Haliviq uses this approach with clients who want to test an idea before committing to full development, and the result is not just a prototype but confidence that you are building what customers want.`,
          ],
          list: [
            `A designer reviews every AI-drafted screen before testing.`,
            `No real customer personal data in unapproved tools.`,
            `Keep a shared library of prompts and inputs that worked.`,
            `Measure learning, not screen count.`,
          ],
        },
      ],
      takeaways: [
        `AI accelerates volume work: variations, copy, sample data and prototype code.`,
        `User research, flow design, brand and accessibility still need human decisions.`,
        `A one-week sprint works best when Friday's test users are booked on Monday.`,
        `Prototypes are for learning; do not launch one without rebuilding it properly.`,
        `Agree team rules for AI use, especially around review and personal data.`,
      ],
      figCaption: `A one-week sprint plan from user conversations to prototype testing`,
      faq: [
        {
          q: `Do we still need designers if we use AI?`,
          a: `Yes. AI cuts repetitive work, but understanding users, choosing flows, keeping the brand's character and checking accessibility still take human judgement. The designer's role shifts towards curating and deciding.`,
        },
        {
          q: `How many users should we test with?`,
          a: `For an early prototype, around five per round usually surfaces the big problems repeatedly. Several small rounds beat one large one.`,
        },
        {
          q: `Can the prototype code become the real product?`,
          a: `Some parts may be reusable, but most should be rewritten or carefully reviewed, because prototypes usually skip security, data handling and long-term maintainability.`,
        },
      ],
    },
  },
]
