import type { Article } from '@/lib/blog-types'

export const biz2Articles: Article[] = [
  {
    slug: 'seo-aeo-geo-ai-search',
    cat: 'Business',
    date: '2026-11-19',
    readMin: 9,
    tags: ['SEO', 'AEO', 'GEO', 'AI Search', 'Structured Data', 'Google AI Mode'],
    related: ['inp-core-web-vitals', 'nextjs-perf', 'thai-ux-writing'],
    th: {
      title: `จาก SEO สู่ AEO และ GEO: ทำอย่างไรให้ธุรกิจถูกพบ เมื่อลูกค้าถาม AI แทนการค้นหา`,
      excerpt: `ลูกค้าเริ่มถาม AI Overviews, AI Mode, ChatGPT, Gemini และ Perplexity แทนการไล่คลิกลิงก์ นี่คือวิธีทำให้ธุรกิจของคุณเป็นคำตอบ และวิธีวัดผลเมื่อคลิกลดลง`,
      metaTitle: `SEO, AEO, GEO: ทำให้ธุรกิจถูกพบในยุค AI Search`,
      metaDescription: `อธิบาย AEO และ GEO แบบเข้าใจง่าย ตั้งแต่การเขียนคำตอบให้ชัด structured data, FAQ ความสม่ำเสมอของชื่อและที่อยู่ รีวิว ไปจนถึงการวัดผลเมื่อคลิกจาก Google ลดลง`,
      intro: `ตั้งแต่ Google ขยาย AI Mode มารองรับภาษาไทยในช่วงปลายปี 2025 และ AI Overviews ขึ้นบนหน้าผลค้นหาบ่อยขึ้น พฤติกรรมลูกค้าก็เปลี่ยนไป หลายคนพิมพ์คำถามยาวๆ แล้วอ่านคำตอบที่ AI สรุปให้ โดยไม่คลิกเข้าเว็บไหนเลย อีกกลุ่มถาม ChatGPT, Gemini หรือ Perplexity ตรงๆ ว่า "คลินิกฟอกสีฟันแถวอารีย์ที่ไหนดี" บทความนี้อธิบายว่า SEO แบบเดิมยังสำคัญอยู่ตรงไหน และต้องเพิ่มอะไรเพื่อให้ AI หยิบธุรกิจคุณไปเป็นคำตอบ`,
      sections: [
        {
          h: `SEO, AEO และ GEO ต่างกันอย่างไร`,
          p: [
            `SEO คือการทำให้เว็บติดอันดับในผลค้นหาแบบรายการลิงก์ AEO (Answer Engine Optimization) คือการทำให้เนื้อหาของเราถูกหยิบไปเป็น "คำตอบ" ตรงๆ เช่น ใน featured snippet หรือผู้ช่วยเสียง ส่วน GEO (Generative Engine Optimization) คือการทำให้ระบบ AI ที่สร้างคำตอบเอง เช่น AI Overviews, AI Mode หรือแชตบอต อ้างถึงแบรนด์หรือลิงก์ของเรา`,
            `ทั้งสามคำไม่ได้แยกขาดจากกัน ระบบ AI ส่วนใหญ่ยังดึงข้อมูลจากเว็บที่ถูก index และน่าเชื่อถือ เว็บที่ช้า โครงสร้างพัง หรือเนื้อหาบาง มักไม่ถูกเลือกไม่ว่าจะเป็นผลค้นหาแบบไหน สิ่งที่เปลี่ยนคือเป้าหมาย จากเดิมที่มุ่งให้คนคลิก มาเป็นการทำให้แบรนด์ถูกพูดถึงอย่างถูกต้องในคำตอบ แม้คนจะไม่ได้คลิกก็ตาม`,
          ],
        },
        {
          h: `เขียนคำตอบให้ชัด ตั้งแต่ประโยคแรก`,
          p: [
            `AI ชอบเนื้อหาที่ตอบคำถามได้ตรงและสั้นในย่อหน้าแรก แล้วค่อยขยายความ ลองดูหน้าบริการของคุณ ถ้าลูกค้าถามว่า "รีโนเวตคอนโดราคาเริ่มต้นเท่าไร ใช้เวลากี่สัปดาห์" หน้าเว็บตอบได้ในสองสามประโยคหรือไม่ หรือต้องอ่านคำโฆษณายาวๆ ก่อน`,
            `ใช้หัวข้อที่เป็นคำถามจริงของลูกค้า เก็บจากแชต LINE OA, คอมเมนต์ใน TikTok หรือคำถามที่ทีมขายตอบซ้ำทุกวัน แล้วทำเป็นหน้า FAQ หรือหัวข้อย่อยในหน้าบริการ เขียนแบบที่คนพูดจริง ไม่ต้องยัดคีย์เวิร์ด และระบุเงื่อนไขให้ชัด เช่น พื้นที่ให้บริการ เวลาทำการ หรือข้อจำกัดของบริการ`,
          ],
          list: [
            `ตอบคำถามหลักในย่อหน้าแรก ไม่เกินสองสามประโยค`,
            `ใช้หัวข้อเป็นคำถามที่ลูกค้าถามจริง`,
            `ใส่ตัวเลือก เงื่อนไข และขั้นตอนเป็นรายการ อ่านง่ายทั้งคนและเครื่อง`,
            `ระบุวันที่อัปเดตเนื้อหา โดยเฉพาะหน้าราคาและโปรโมชัน`,
            `เขียนภาษาไทยที่เป็นธรรมชาติ ไม่แปลตรงจากภาษาอังกฤษ`,
          ],
        },
        {
          h: `Structured data และความสม่ำเสมอของตัวตนธุรกิจ`,
          p: [
            `Structured data คือโค้ดแบบ schema.org ที่บอกเครื่องค้นหาตรงๆ ว่าหน้านี้คืออะไร เช่น LocalBusiness, Product, FAQPage หรือ Article ไม่ได้รับประกันว่าจะติดอันดับ แต่ช่วยให้ระบบเข้าใจเนื้อหาได้แม่นขึ้น ควรใส่ให้ตรงกับสิ่งที่แสดงบนหน้าจริงเท่านั้น`,
            `อีกเรื่องที่ธุรกิจไทยมักพลาดคือ entity consistency หรือการที่ข้อมูลตัวตนตรงกันทุกที่ ชื่อร้าน ที่อยู่ เบอร์โทร เวลาเปิดปิด และลิงก์ LINE OA บนเว็บ, Google Business Profile, Facebook Page, Shopee หรือ Lazada ต้องเหมือนกัน ถ้าสาขาหนึ่งสะกดชื่อสามแบบ AI ก็อาจคิดว่าเป็นสามธุรกิจ หรือไม่มั่นใจพอจะแนะนำเลย`,
            `สำหรับธุรกิจที่มีหน้าร้าน เช่น คลินิก โรงแรม หรือโชว์รูม Google Business Profile ที่อัปเดตสม่ำเสมอเป็นสิ่งที่คุ้มค่าที่สุดอย่างหนึ่ง ใส่หมวดหมู่ให้ถูก รูปจริง เวลาทำการวันหยุด และตอบรีวิวทุกครั้ง`,
          ],
        },
        {
          h: `เนื้อหาต้นฉบับ ข้อมูลของตัวเอง และรีวิว`,
          p: [
            `เมื่อ AI สรุปเนื้อหาทั่วไปได้เอง บทความแบบ "10 เคล็ดลับ" ที่เหมือนทุกเว็บจะมีค่าน้อยลง สิ่งที่ AI ยังต้องอ้างแหล่งคือข้อมูลที่หาที่อื่นไม่ได้ เช่น ประสบการณ์ตรงจากหน้างาน ขั้นตอนจริงของบริษัท ภาพก่อนและหลัง ตารางเปรียบเทียบที่ทีมทำเอง หรือข้อมูลที่เก็บจากลูกค้าของตัวเอง (โดยไม่เปิดเผยข้อมูลส่วนบุคคล)`,
            `รีวิวก็เป็นสัญญาณสำคัญ ทั้งบน Google, แพลตฟอร์มขายของ และเว็บรีวิวในอุตสาหกรรม ขอรีวิวจากลูกค้าจริงอย่างสม่ำเสมอ ตอบทั้งรีวิวดีและไม่ดีอย่างสุภาพ และอย่าซื้อรีวิวปลอม เพราะนอกจากผิดนโยบายแพลตฟอร์มแล้ว ยังทำให้ความน่าเชื่อถือพังเมื่อถูกจับได้`,
          ],
          quote: `AI ไม่ได้มองหาเว็บที่พูดดังที่สุด แต่มองหาแหล่งที่ตอบได้ชัดและเชื่อถือได้ที่สุด`,
        },
        {
          h: `พื้นฐานทางเทคนิค และการวัดผลเมื่อคลิกลดลง`,
          p: [
            `พื้นฐานยังเหมือนเดิม เว็บต้องโหลดเร็ว ตอบสนองไว (ดู Core Web Vitals รวมถึง INP) ใช้งานบนมือถือได้ดี มี sitemap ไม่บล็อกหน้าสำคัญใน robots.txt และเนื้อหาหลักต้องอ่านได้โดยไม่ต้องรอ JavaScript หนักๆ ถ้าต้องการให้ AI crawler บางตัวเข้าถึงหรือไม่ ให้ตัดสินใจอย่างตั้งใจ ไม่ใช่ปล่อยตามค่าเริ่มต้นของ hosting`,
            `เรื่องวัดผล ให้ยอมรับก่อนว่าคลิกจากผลค้นหาอาจลดลงแม้แบรนด์ถูกเห็นมากขึ้น จึงควรดูหลายตัวชี้วัดประกอบกัน เช่น impressions ใน Google Search Console, การค้นหาด้วยชื่อแบรนด์, การเพิ่มเพื่อน LINE OA, การโทรและขอเส้นทางจาก Google Business Profile และถามลูกค้าใหม่ตรงๆ ว่ารู้จักเราจากไหน เพิ่มตัวเลือก "ถาม AI" ในแบบฟอร์มด้วย`,
            `อีกวิธีที่ทำได้ทันทีคือลองถาม AI เองเป็นประจำ เก็บชุดคำถามสำคัญสิบยี่สิบข้อ ถามใน AI Mode, ChatGPT, Gemini และ Perplexity ทุกเดือน แล้วจดว่าแบรนด์ถูกพูดถึงไหม ข้อมูลถูกต้องหรือเปล่า ถ้าผิด ให้กลับไปแก้แหล่งข้อมูลต้นทาง`,
          ],
        },
      ],
      takeaways: [
        `SEO ยังเป็นฐาน AEO และ GEO คือการทำให้ AI หยิบเราไปเป็นคำตอบ`,
        `ตอบคำถามลูกค้าให้ชัดในย่อหน้าแรก และใช้คำถามจริงเป็นหัวข้อ`,
        `ชื่อ ที่อยู่ เบอร์ และ LINE OA ต้องตรงกันทุกแพลตฟอร์ม`,
        `เนื้อหาต้นฉบับ ข้อมูลของตัวเอง และรีวิวจริง คือสิ่งที่ AI ยังต้องอ้างถึง`,
        `วัดผลหลายมิติ ไม่ดูแค่คลิก และตรวจคำตอบของ AI เป็นประจำ`,
      ],
      figCaption: `เส้นทางจากคำถามของลูกค้า ผ่านผลค้นหาและคำตอบของ AI ไปสู่ธุรกิจ`,
      faq: [
        {
          q: `ต้องทำ SEO แยกสำหรับ ChatGPT หรือ Gemini ไหม`,
          a: `ส่วนใหญ่ไม่ต้องแยก หลักการเดียวกันใช้ได้ คือเนื้อหาชัด เชื่อถือได้ ข้อมูลตรงกันทุกที่ และเว็บเข้าถึงง่าย สิ่งที่ควรทำเพิ่มคือทดลองถามแต่ละระบบเป็นประจำ เพื่อดูว่าข้อมูลของคุณถูกนำเสนออย่างไร`,
        },
        {
          q: `ใส่ FAQ schema แล้วจะขึ้น AI Overviews เลยหรือเปล่า`,
          a: `ไม่มีอะไรรับประกันได้ structured data ช่วยให้ระบบเข้าใจหน้าเว็บแม่นขึ้น แต่การถูกเลือกขึ้นอยู่กับคุณภาพเนื้อหา ความน่าเชื่อถือ และความตรงกับคำถามด้วย`,
        },
        {
          q: `ธุรกิจเล็กที่มีแค่ LINE OA กับ Facebook ควรเริ่มตรงไหน`,
          a: `เริ่มจาก Google Business Profile ให้ครบและถูกต้อง แล้วทำเว็บไซต์หน้าเดียวที่ตอบคำถามหลักของลูกค้า มีข้อมูลติดต่อตรงกับ LINE OA และ Facebook แค่นี้ก็ช่วยให้ทั้งคนและ AI หาคุณเจอง่ายขึ้นมาก`,
        },
      ],
    },
    en: {
      title: `From SEO to AEO and GEO: Getting Found When Customers Ask AI`,
      excerpt: `Customers now ask AI Overviews, AI Mode, ChatGPT, Gemini and Perplexity instead of clicking links. Here is how to become the answer, and how to measure when clicks fall.`,
      metaTitle: `SEO to AEO and GEO: Getting Found in AI Search`,
      metaDescription: `A practical guide to AEO and GEO: clear answers, structured data, FAQs, consistent business details, original content, reviews, and measuring as clicks fall.`,
      intro: `Since Google's AI Mode expanded to Thai in late 2025 and AI Overviews began appearing on more searches, customer behaviour has shifted. Many people type a long question and read the AI summary without clicking anything. Others ask ChatGPT, Gemini or Perplexity directly, something like "which teeth-whitening clinic near Ari is good?". This article explains where classic SEO still matters and what to add so AI systems pick your business as the answer.`,
      sections: [
        {
          h: `SEO, AEO and GEO: what is the difference?`,
          p: [
            `SEO is about ranking in the familiar list of links. AEO (Answer Engine Optimization) is about having your content used as the direct answer, for example in featured snippets or voice assistants. GEO (Generative Engine Optimization) is about getting AI systems that write their own answers, such as AI Overviews, AI Mode and chatbots, to mention your brand or cite your page.`,
            `They overlap heavily. Most AI systems still draw on indexed, trustworthy web pages, so a slow site with broken structure or thin content rarely gets picked in any format. What changes is the goal: from earning the click to being represented accurately in the answer, even when nobody clicks.`,
          ],
        },
        {
          h: `Write a clear answer in the first lines`,
          p: [
            `AI systems favour content that answers the question directly and briefly up front, then expands. Look at your service page. If a customer asks "how much does a condo renovation start at and how many weeks does it take?", can the page answer in two or three sentences, or do they have to wade through marketing copy first?`,
            `Use the real questions customers ask as headings. Collect them from LINE OA chats, TikTok comments and whatever your sales team answers every day, then turn them into an FAQ page or subheadings on service pages. Write the way people talk, skip keyword stuffing, and state conditions plainly: service area, opening hours, and what the service does not include.`,
          ],
          list: [
            `Answer the main question in the first paragraph, in two or three sentences`,
            `Use real customer questions as headings`,
            `Put options, conditions and steps in lists that both people and machines can parse`,
            `Show when content was last updated, especially pricing and promotions`,
            `Write natural Thai rather than translating word for word from English`,
          ],
        },
        {
          h: `Structured data and a consistent business identity`,
          p: [
            `Structured data is schema.org markup that tells search engines what a page is about, such as LocalBusiness, Product, FAQPage or Article. It does not guarantee rankings, but it helps systems understand your content more precisely. Only mark up what is actually visible on the page.`,
            `A common gap for Thai businesses is entity consistency. Your name, address, phone number, hours and LINE OA link should match everywhere: your website, Google Business Profile, Facebook Page, Shopee or Lazada store. If one branch is spelled three different ways, an AI may treat it as three businesses, or simply not feel confident enough to recommend any of them.`,
            `For businesses with a physical location, such as clinics, hotels and showrooms, a well-maintained Google Business Profile is one of the best investments you can make. Choose the right categories, post real photos, keep holiday hours current, and reply to every review.`,
          ],
        },
        {
          h: `Original content, your own data, and reviews`,
          p: [
            `Now that AI can summarise generic advice by itself, the usual "10 tips" article that every site publishes is worth less. What AI still needs to cite is information it cannot find elsewhere: first-hand experience from the field, your actual process, before-and-after photos, comparison tables your team built, or insights from your own customer base (without exposing personal data).`,
            `Reviews are an important signal too, on Google, marketplaces and industry review sites. Ask real customers for reviews consistently, reply politely to both good and bad ones, and never buy fake reviews. Beyond breaking platform rules, it destroys trust the moment it is discovered.`,
          ],
          quote: `AI is not looking for the loudest website. It is looking for the clearest and most trustworthy source.`,
        },
        {
          h: `Technical basics, and measuring when clicks fall`,
          p: [
            `The basics have not changed. Your site needs to load fast and respond quickly (watch Core Web Vitals, including INP), work well on mobile, have a sitemap, avoid blocking important pages in robots.txt, and render its main content without waiting on heavy JavaScript. Decide deliberately whether to allow specific AI crawlers instead of leaving it to your hosting defaults.`,
            `On measurement, accept that search clicks may fall even as your brand is seen more. Track several signals together: impressions in Google Search Console, branded searches, new LINE OA friends, calls and direction requests from Google Business Profile, and simply asking new customers how they found you. Add "asked an AI" as an option on your forms.`,
            `You can also start checking AI answers yourself right away. Keep a set of ten to twenty important questions, ask them in AI Mode, ChatGPT, Gemini and Perplexity every month, and note whether your brand appears and whether the details are correct. When they are wrong, fix the source information.`,
          ],
        },
      ],
      takeaways: [
        `SEO is still the foundation; AEO and GEO are about being chosen as the answer`,
        `Answer customer questions clearly up front and use real questions as headings`,
        `Keep your name, address, phone and LINE OA identical across every platform`,
        `Original content, your own data and genuine reviews are what AI still needs to cite`,
        `Measure beyond clicks and audit AI answers about your brand regularly`,
      ],
      figCaption: `How a customer question travels through search results and AI answers to a business`,
      faq: [
        {
          q: `Do I need separate SEO for ChatGPT or Gemini?`,
          a: `Mostly no. The same principles apply: clear, trustworthy content, consistent details everywhere and an accessible website. What is worth adding is testing each system regularly to see how your business is presented.`,
        },
        {
          q: `Will FAQ schema get me into AI Overviews?`,
          a: `Nothing guarantees it. Structured data helps systems understand a page, but selection also depends on content quality, trustworthiness and how well the page matches the question.`,
        },
        {
          q: `Where should a small business with only LINE OA and Facebook start?`,
          a: `Start with a complete, accurate Google Business Profile, then a simple one-page website that answers your customers' main questions with contact details matching your LINE OA and Facebook. That alone makes you much easier for both people and AI to find.`,
        },
      ],
    },
  },
  {
    slug: 'pdpa-enforcement-fines',
    cat: 'Business',
    date: '2026-11-05',
    readMin: 8,
    tags: ['PDPA', 'Data Protection', 'Compliance', 'Data Breach', 'DPO'],
    related: ['thailand-pdpa-guide', 'dark-patterns-consent', 'npm-supply-chain-security'],
    th: {
      title: `PDPA ไม่ใช่ทฤษฎีอีกต่อไป: บทเรียนจากค่าปรับของ สคส. และเช็กลิสต์ 10 ข้อสำหรับเว็บและแอป`,
      excerpt: `ตั้งแต่ปี 2024 สคส. เริ่มลงโทษปรับทางปกครองจริง ค่าปรับสะสมเกิน 21 ล้านบาท บทความนี้สรุปว่าธุรกิจพลาดตรงไหนบ่อย และเว็บกับแอปควรเช็กอะไรบ้าง`,
      metaTitle: `บทเรียนค่าปรับ PDPA และเช็กลิสต์ 10 ข้อสำหรับเว็บ`,
      metaDescription: `สรุปสิ่งที่ค่าปรับ PDPA ของ สคส. ตั้งแต่ปี 2024 บอกธุรกิจ ทั้งมาตรการความปลอดภัย DPO การแจ้งเหตุภายใน 72 ชั่วโมง สัญญากับผู้ประมวลผล และเช็กลิสต์ 10 ข้อ`,
      intro: `หลายปีที่ผ่านมา ธุรกิจไทยจำนวนไม่น้อยมอง PDPA เป็นเรื่องติดป้าย cookie banner แล้วจบ แต่ตั้งแต่ปี 2024 คณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) เริ่มสั่งปรับทางปกครองจริง และต่อเนื่องเข้าสู่ปี 2025 บทความนี้สรุปว่าการลงโทษเหล่านั้นบอกอะไรเรา จุดที่ธุรกิจพลาดบ่อย และเช็กลิสต์ 10 ข้อที่ทีมเว็บและแอปเริ่มทำได้เลย`,
      sections: [
        {
          h: `ค่าปรับที่เกิดขึ้นจริงแล้ว`,
          p: [
            `ตามประกาศของ สคส. ค่าปรับทางปกครองครั้งแรกเกิดขึ้นในเดือนสิงหาคม 2024 เป็นเงิน 7 ล้านบาท กับผู้ค้าปลีกสินค้าไอทีออนไลน์รายหนึ่ง หลังเกิดข้อมูลรั่ว โดยมีรายงานว่าประเด็นหลักคือมาตรการรักษาความปลอดภัยของข้อมูลที่ไม่เพียงพอ และเรื่องเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)`,
            `ต่อมาในวันที่ 1 สิงหาคม 2025 สคส. ประกาศค่าปรับทางปกครองอีก 8 รายการจาก 5 กรณี รวมราว 14.5 ล้านบาท ทำให้ยอดค่าปรับสะสมเกิน 21 ล้านบาท ข้อความที่ชัดคือ หน่วยงานกำกับเอาจริงแล้ว และไม่ได้ดูเฉพาะบริษัทยักษ์ใหญ่`,
            `อย่าลืมว่าค่าปรับทางปกครองเป็นเพียงส่วนหนึ่ง กฎหมายกำหนดค่าปรับทางปกครองได้สูงสุด 5 ล้านบาทต่อการฝ่าฝืน ยังมีความรับผิดทางแพ่งซึ่งศาลอาจสั่งค่าเสียหายเชิงลงโทษได้ถึงสองเท่า และโทษทางอาญาสำหรับการฝ่าฝืนบางลักษณะ ยังไม่นับความเสียหายต่อชื่อเสียงเมื่อข่าวข้อมูลรั่วออกไป`,
          ],
        },
        {
          h: `จุดที่ธุรกิจพลาดบ่อย`,
          p: [
            `จากลักษณะกรณีที่ถูกลงโทษ ปัญหาไม่ได้อยู่ที่ไม่มีนโยบายความเป็นส่วนตัว แต่อยู่ที่สิ่งที่เกิดขึ้นหลังบ้าน เช่น ระบบที่เก็บข้อมูลลูกค้าไม่มีการควบคุมสิทธิ์เข้าถึงที่ดี ไม่มีใครรับผิดชอบเรื่องข้อมูลอย่างจริงจัง หรือเมื่อเกิดเหตุแล้วไม่รู้ว่าต้องทำอะไร`,
            `ลองไล่ดูสี่เรื่องนี้ในองค์กรของคุณ ถ้าตอบได้ไม่ชัดสักข้อ นั่นคือจุดที่ควรเริ่มก่อน`,
          ],
          list: [
            `มาตรการความปลอดภัย: การเข้ารหัส การจำกัดสิทธิ์ การเก็บ log และการแพตช์ระบบ สอดคล้องกับความเสี่ยงของข้อมูลหรือไม่`,
            `DPO: องค์กรที่เข้าเกณฑ์ต้องแต่งตั้ง DPO ได้แต่งตั้งแล้ว และคนนั้นมีเวลากับอำนาจทำงานจริงหรือไม่`,
            `การแจ้งเหตุละเมิด: ถ้ามีความเสี่ยงต่อสิทธิของเจ้าของข้อมูล ต้องแจ้ง สคส. ภายใน 72 ชั่วโมงนับจากทราบเหตุ ทีมรู้ขั้นตอนนี้หรือยัง`,
            `สัญญากับผู้ประมวลผล: agency, ผู้ให้บริการ cloud, CRM หรือระบบส่ง SMS ที่จับข้อมูลลูกค้า มีข้อตกลงการประมวลผลข้อมูลที่ชัดเจนหรือไม่`,
          ],
        },
        {
          h: `72 ชั่วโมงสั้นกว่าที่คิด`,
          p: [
            `เมื่อเกิดเหตุจริง 72 ชั่วโมงผ่านไปเร็วมาก ต้องรู้ว่าข้อมูลอะไรรั่ว กระทบกี่คน มาจากช่องโหว่ไหน หยุดการรั่วไหลแล้วหรือยัง และใครเป็นคนตัดสินใจแจ้ง ถ้าไม่เคยซ้อมมาก่อน เวลาส่วนใหญ่จะหมดไปกับการหาว่าใครดูแลระบบอะไร`,
            `ให้เขียน incident response plan สั้นๆ หนึ่งหน้า ระบุผู้ติดต่อ ช่องทางแจ้งภายใน วิธีเก็บหลักฐาน และแม่แบบหนังสือแจ้ง สคส. กับแจ้งลูกค้า แล้วซ้อมปีละครั้งกับสถานการณ์สมมติ เช่น ไฟล์ Excel รายชื่อลูกค้าคลินิกถูกแชร์ลิงก์สาธารณะโดยไม่ตั้งใจ`,
          ],
          quote: `แผนรับมือเหตุที่ดีที่สุด คือแผนที่ทีมเคยซ้อมแล้วอย่างน้อยหนึ่งครั้ง`,
        },
        {
          h: `เช็กลิสต์ 10 ข้อสำหรับเว็บไซต์และแอป`,
          p: [
            `เว็บไซต์และแอปเป็นจุดที่เก็บข้อมูลลูกค้ามากที่สุด และมักมีโค้ดหรือบริการภายนอกที่ทีมธุรกิจมองไม่เห็น เช็กลิสต์นี้ไม่ใช่คำแนะนำทางกฎหมาย แต่เป็นจุดตั้งต้นที่ทีมพัฒนาและทีมการตลาดใช้คุยกันได้`,
          ],
          list: [
            `ทำรายการข้อมูลส่วนบุคคลที่เก็บ ทุกฟอร์ม ทุกตาราง ทุกระบบหลังบ้าน`,
            `เก็บเฉพาะที่จำเป็น เลิกถามเลขบัตรประชาชนหรือวันเกิดถ้าไม่ได้ใช้จริง`,
            `นโยบายความเป็นส่วนตัวตรงกับสิ่งที่ระบบทำจริง และเข้าถึงได้จากทุกหน้าที่เก็บข้อมูล`,
            `Cookie banner และการขอความยินยอมให้เลือกปฏิเสธได้ง่ายพอๆ กับการยอมรับ`,
            `เข้ารหัสข้อมูลระหว่างส่ง (HTTPS) และข้อมูลสำคัญที่จัดเก็บ`,
            `จำกัดสิทธิ์หลังบ้านตามหน้าที่ ปิดบัญชีพนักงานที่ลาออก และเปิดใช้ MFA`,
            `ตรวจ third-party script, SDK และ dependency ที่ส่งข้อมูลออกไปภายนอก`,
            `มีสัญญาหรือข้อตกลงประมวลผลข้อมูลกับผู้ให้บริการทุกราย`,
            `มีช่องทางให้ลูกค้าขอดู แก้ไข หรือลบข้อมูล และมีคนรับผิดชอบตอบ`,
            `มีแผนรับมือเหตุละเมิดที่รองรับกรอบ 72 ชั่วโมง พร้อม log ที่ใช้ตรวจย้อนได้`,
          ],
        },
        {
          h: `เริ่มจากตรงไหนถ้าทรัพยากรน้อย`,
          p: [
            `ธุรกิจขนาดกลางและเล็กไม่จำเป็นต้องทำทุกอย่างในเดือนเดียว เริ่มจากสามเรื่องที่ลดความเสี่ยงได้มาก คือรู้ว่าข้อมูลอยู่ที่ไหน ปิดช่องทางเข้าถึงที่ไม่จำเป็น และเขียนแผนรับมือเหตุหนึ่งหน้า จากนั้นค่อยไล่เรื่องสัญญาและกระบวนการตอบคำขอของเจ้าของข้อมูล`,
            `ทุกครั้งที่สร้างฟีเจอร์ใหม่ เช่น ระบบสะสมแต้มผ่าน LINE OA หรือฟอร์มนัดหมายคลินิก ให้ถามคำถาม PDPA ตั้งแต่ตอนออกแบบ จะถูกกว่าการตามแก้ทีหลังมาก ทีมพัฒนาอย่าง Haliviq มักใส่ขั้นตอนนี้ไว้ในการวางสเปกตั้งแต่แรก และควรปรึกษาที่ปรึกษากฎหมายสำหรับคำถามที่เป็นข้อกฎหมายโดยตรง`,
          ],
        },
      ],
      takeaways: [
        `สคส. ลงโทษปรับทางปกครองจริงแล้วตั้งแต่ปี 2024 ยอดสะสมเกิน 21 ล้านบาท`,
        `ปัญหาหลักอยู่ที่มาตรการความปลอดภัยและการมี DPO ไม่ใช่แค่ cookie banner`,
        `เตรียมแผนแจ้งเหตุภายใน 72 ชั่วโมง และซ้อมจริงอย่างน้อยปีละครั้ง`,
        `ผู้ประมวลผลภายนอกทุกรายควรมีข้อตกลงการประมวลผลข้อมูลที่ชัด`,
        `ใช้เช็กลิสต์ 10 ข้อเป็นจุดเริ่ม และคิดเรื่อง PDPA ตั้งแต่ตอนออกแบบฟีเจอร์`,
      ],
      figCaption: `ลำดับเหตุการณ์ค่าปรับ PDPA และจุดตรวจสอบสำคัญในระบบเว็บและแอป`,
      faq: [
        {
          q: `ธุรกิจเล็กๆ จะโดนปรับ PDPA ด้วยหรือ`,
          a: `กฎหมายใช้กับผู้ควบคุมข้อมูลทุกขนาด แม้หน่วยงานกำกับอาจพิจารณาความร้ายแรงและบริบทของแต่ละกรณี ธุรกิจเล็กที่เก็บข้อมูลลูกค้าผ่านเว็บหรือ LINE OA ก็ควรมีมาตรการพื้นฐานให้ครบ`,
        },
        {
          q: `ทุกองค์กรต้องมี DPO ไหม`,
          a: `ไม่ใช่ทุกองค์กร กฎหมายกำหนดเงื่อนไขไว้ เช่น การประมวลผลข้อมูลจำนวนมากอย่างสม่ำเสมอ หรือข้อมูลอ่อนไหวเป็นกิจกรรมหลัก ควรตรวจกับที่ปรึกษากฎหมายว่าองค์กรของคุณเข้าเกณฑ์หรือไม่`,
        },
      ],
    },
    en: {
      title: `PDPA Is No Longer Theory: Lessons From PDPC Fines and a 10-Point Checklist`,
      excerpt: `Since 2024 Thailand's PDPC has issued real administrative fines, now above THB 21 million in total. Here is where businesses fall short and what websites and apps should check.`,
      metaTitle: `PDPA Fine Lessons and a 10-Point Website Checklist`,
      metaDescription: `What Thailand's PDPC fines since 2024 tell businesses: security, DPOs, 72-hour breach notice, processor contracts, plus a 10-point web and app checklist.`,
      intro: `For years many Thai businesses treated the PDPA as a cookie banner and little else. That changed in 2024, when the Personal Data Protection Committee (PDPC) began issuing administrative fines, and the enforcement continued into 2025. This article looks at what those decisions tell us, where businesses commonly fall short, and a 10-point checklist your web and app teams can start on today.`,
      sections: [
        {
          h: `The fines have already happened`,
          p: [
            `According to PDPC announcements, the first administrative fine came in August 2024: THB 7 million against an online IT-products retailer after a data leak. The reported issues centred on inadequate data-security measures and failures around the Data Protection Officer (DPO).`,
            `Then on 1 August 2025 the PDPC announced eight more administrative fines across five cases, about THB 14.5 million in total, taking the cumulative figure above THB 21 million. The message is clear: the regulator is enforcing, and not only against the largest companies.`,
            `Administrative fines are only part of the exposure. They can reach THB 5 million per violation, and on top of that there is civil liability, where courts may award punitive damages of up to twice the actual damages, plus criminal penalties for certain breaches. Then there is the reputational damage when a leak makes the news.`,
          ],
        },
        {
          h: `Where businesses commonly fall short`,
          p: [
            `Judging by the kinds of cases penalised, the problem is rarely a missing privacy policy. It is what happens behind the scenes: customer data in systems with weak access control, nobody genuinely responsible for data protection, or no idea what to do once an incident occurs.`,
            `Run through these four areas in your organisation. Any you cannot answer clearly is where to start.`,
          ],
          list: [
            `Security measures: do encryption, access control, logging and patching match the sensitivity of the data?`,
            `DPO: if your organisation is required to appoint one, have you, and does that person have real time and authority?`,
            `Breach notification: where there is a risk to people's rights, the PDPC must be notified within 72 hours of becoming aware. Does your team know the steps?`,
            `Processor contracts: do agencies, cloud providers, CRMs and SMS gateways that touch customer data have clear data processing agreements?`,
          ],
        },
        {
          h: `72 hours is shorter than you think`,
          p: [
            `In a real incident, 72 hours disappears quickly. You need to know what leaked, how many people are affected, which weakness was exploited, whether the leak has stopped, and who decides to notify. Without prior practice, most of that time goes on working out who owns which system.`,
            `Write a one-page incident response plan with contacts, internal escalation channels, how to preserve evidence, and templates for notifying the PDPC and customers. Rehearse it once a year with a realistic scenario, such as a clinic's customer spreadsheet accidentally shared via a public link.`,
          ],
          quote: `The best incident plan is the one your team has rehearsed at least once.`,
        },
        {
          h: `A 10-point checklist for websites and apps`,
          p: [
            `Websites and apps collect more customer data than anything else, and they often run code or third-party services the business side never sees. This checklist is not legal advice, but it gives developers and marketers a shared starting point.`,
          ],
          list: [
            `Map the personal data you collect: every form, table and back-office system`,
            `Collect only what you need; stop asking for national ID or birth dates you never use`,
            `Make sure the privacy policy matches what systems actually do, linked from every data-collecting page`,
            `Make refusing cookies and consent as easy as accepting`,
            `Encrypt data in transit (HTTPS) and sensitive data at rest`,
            `Limit admin access by role, remove leavers promptly and turn on MFA`,
            `Review third-party scripts, SDKs and dependencies that send data elsewhere`,
            `Have a contract or data processing agreement with every service provider`,
            `Offer a way for customers to access, correct or delete their data, with someone accountable for replies`,
            `Keep a breach response plan that fits the 72-hour window, backed by logs you can audit`,
          ],
        },
        {
          h: `Where to start with limited resources`,
          p: [
            `Small and mid-sized businesses do not need to do everything in one month. Start with three moves that cut the most risk: know where your data lives, close unnecessary access, and write a one-page incident plan. Then work through contracts and the process for handling data subject requests.`,
            `Whenever you build something new, such as a LINE OA loyalty programme or a clinic booking form, ask the PDPA questions at design time. It is far cheaper than fixing things later. Development teams like Haliviq usually build this step into the spec from the start, and for questions of law itself you should consult legal counsel.`,
          ],
        },
      ],
      takeaways: [
        `The PDPC has issued real administrative fines since 2024, now above THB 21 million in total`,
        `The core failures are security measures and DPO duties, not just cookie banners`,
        `Prepare for 72-hour breach notification and rehearse at least once a year`,
        `Every external processor should have a clear data processing agreement`,
        `Use the 10-point checklist as a start and think about PDPA when designing features`,
      ],
      figCaption: `Timeline of PDPA fines and the key checkpoints in a web and app stack`,
      faq: [
        {
          q: `Can small businesses be fined under the PDPA?`,
          a: `The law applies to data controllers of any size, although the regulator may weigh the seriousness and context of each case. A small business collecting customer data through a website or LINE OA should still have the basic safeguards in place.`,
        },
        {
          q: `Does every organisation need a DPO?`,
          a: `No. The law sets conditions, such as regular large-scale processing or sensitive data as a core activity. Check with legal counsel whether your organisation meets them.`,
        },
      ],
    },
  },
  {
    slug: 'thailand-draft-ai-act',
    cat: 'Business',
    date: '2026-10-29',
    readMin: 8,
    tags: ['AI Regulation', 'Thailand AI Act', 'ETDA', 'EU AI Act', 'AI Governance'],
    related: ['ai-regulation-world', 'ai-agent-guardrails', 'ai-evals-before-launch'],
    th: {
      title: `ร่างกฎหมาย AI ของไทย: ธุรกิจที่ใช้หรือสร้าง AI ควรเตรียมอะไรตั้งแต่วันนี้`,
      excerpt: `ETDA เปิดรับฟังความเห็นร่างกฎหมาย AI เมื่อกรกฎาคม 2026 แนวทางอิงความเสี่ยงคล้าย EU AI Act ยังไม่ใช่กฎหมาย แต่มีหลายอย่างที่ธุรกิจเริ่มทำได้เลยโดยไม่ต้องรอ`,
      metaTitle: `ร่างกฎหมาย AI ไทย: ธุรกิจควรเตรียมอะไรตอนนี้`,
      metaDescription: `สรุปร่างกฎหมาย AI ของไทยที่ ETDA เปิดรับฟังความเห็นปี 2026 เทียบ EU AI Act และสิ่งที่ธุรกิจทำได้ทันที ตั้งแต่ทำบัญชี AI จัดระดับความเสี่ยง ถึงคำถามถึงผู้ขาย`,
      intro: `ในเดือนกรกฎาคม 2026 สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์ (ETDA) เผยแพร่ร่างกฎหมายว่าด้วย AI เพื่อรับฟังความคิดเห็น และปิดรับความเห็นเมื่อ 14 สิงหาคม 2026 ต้องย้ำก่อนว่านี่ยังเป็นร่าง ยังไม่มีผลบังคับ และยังไม่ชัดว่าจะออกเป็นกฎหมายเมื่อไร หรือเนื้อหาสุดท้ายจะเปลี่ยนไปแค่ไหน แต่ทิศทางเริ่มชัดพอที่ธุรกิจจะเตรียมตัวได้ บทความนี้สรุปสาระระดับภาพรวม และสิ่งที่ทำได้เลยโดยไม่ต้องรอ`,
      sections: [
        {
          h: `ร่างนี้มาจากไหน และอยู่ในขั้นไหน`,
          p: [
            `ประเทศไทยเริ่มเปิดรับฟังความเห็นเรื่องหลักการของกฎหมาย AI ตั้งแต่มิถุนายน 2025 จากนั้น ETDA จึงเผยแพร่ตัวร่างเพื่อรับฟังความเห็นในเดือนกรกฎาคม 2026 (วันที่มักอ้างถึงคือ 9 กรกฎาคม) และปิดรับความเห็นเมื่อ 14 สิงหาคม 2026`,
            `ขั้นต่อไปตามกระบวนการปกติคือการปรับร่างจากความเห็นที่ได้รับ และผ่านขั้นตอนนิติบัญญัติ ซึ่งยังไม่มีกำหนดเวลาที่แน่นอน ดังนั้นอย่าใช้ร่างนี้เป็นเช็กลิสต์ทางกฎหมายแบบตายตัว ให้มองเป็นสัญญาณทิศทางว่าหน่วยงานกำกับคาดหวังอะไรจากผู้ใช้และผู้พัฒนา AI`,
          ],
        },
        {
          h: `แนวคิดหลัก: กำกับตามระดับความเสี่ยง`,
          p: [
            `ร่างของไทยใช้แนวทางอิงความเสี่ยง (risk-based) ซึ่งได้แรงบันดาลใจจาก EU AI Act อย่างหลวมๆ มีการแบ่งกลุ่ม AI ที่มีความเสี่ยงต้องห้าม และกลุ่มความเสี่ยงสูงที่ต้องมีหน้าที่เพิ่มเติม ส่วนการใช้งานทั่วไปที่ความเสี่ยงต่ำไม่ได้ถูกกำกับเข้มเท่า`,
            `อีกประเด็นที่ธุรกิจต่างชาติและผู้ให้บริการ SaaS ควรสนใจคือขอบเขตนอกอาณาเขต ร่างครอบคลุมระบบ AI ที่อยู่นอกประเทศไทยแต่ส่งผลต่อคนในประเทศไทย และผู้ให้บริการ AI ความเสี่ยงสูงที่อยู่ต่างประเทศจะต้องมีตัวแทนในประเทศ`,
          ],
          quote: `กฎหมายยังเป็นร่าง แต่คำถามว่า "เราใช้ AI ตรงไหน และถ้ามันผิดใครรับผิดชอบ" ไม่ต้องรอใครอนุมัติ`,
        },
        {
          h: `เทียบกับไทม์ไลน์ EU AI Act แบบภาพรวม`,
          p: [
            `EU AI Act มีผลบังคับตั้งแต่สิงหาคม 2024 และค่อยๆ ทยอยใช้หน้าที่แต่ละส่วน หน้าที่สำหรับโมเดล AI อเนกประสงค์ (general-purpose AI) เริ่มใช้ตั้งแต่ 2 สิงหาคม 2025 ส่วนหน้าที่สำหรับระบบความเสี่ยงสูง ภายใต้ข้อตกลงเบื้องต้นของ Digital Omnibus เมื่อ 7 พฤษภาคม 2026 มีแผนเลื่อนไปเป็น 2 ธันวาคม 2027 สำหรับระบบแบบ standalone และ 2 สิงหาคม 2028 สำหรับระบบที่ฝังอยู่ในผลิตภัณฑ์ที่มีการกำกับอยู่แล้ว`,
            `บทเรียนจากยุโรปคือ แม้กฎหมายผ่านแล้ว การบังคับใช้ก็ทยอยเป็นช่วงและอาจถูกปรับเวลา ไทยยังอยู่ในขั้นก่อนหน้านั้นมาก ธุรกิจที่ขายบริการให้ลูกค้าในยุโรปควรติดตาม EU AI Act ไปพร้อมกัน เพราะหลักการพื้นฐานคล้ายกัน งานเตรียมตัวชุดเดียวจึงใช้ได้กับทั้งสองฝั่ง`,
          ],
        },
        {
          h: `สิ่งที่ทำได้ตั้งแต่วันนี้ โดยไม่ต้องรอกฎหมาย`,
          p: [
            `ไม่ว่ากฎหมายสุดท้ายจะออกมาแบบไหน งานเหล่านี้เป็นการกำกับดูแล AI ที่ดีอยู่แล้ว และช่วยลดความเสี่ยงทางธุรกิจได้ทันที เช่น แชตบอตที่ตอบข้อมูลยาผิด หรือระบบคัดกรองใบสมัครงานที่ลำเอียงโดยไม่มีใครรู้`,
          ],
          list: [
            `ทำบัญชี AI (AI inventory): ระบบไหนใช้ AI ใช้ทำอะไร ข้อมูลมาจากไหน ใครเป็นเจ้าของ รวมถึงเครื่องมือที่พนักงานใช้เอง`,
            `จัดระดับความเสี่ยง: แยกงานที่กระทบสิทธิหรือโอกาสของคน เช่น การให้สินเชื่อ การจ้างงาน การแพทย์ ออกจากงานทั่วไปอย่างสรุปเอกสารภายใน`,
            `กำหนดการกำกับโดยมนุษย์ (human oversight): จุดไหนต้องมีคนตรวจก่อนตัดสินใจ และคนนั้นมีสิทธิ์ยกเลิกผลของ AI ได้`,
            `จัดทำเอกสาร: วัตถุประสงค์ ข้อมูลที่ใช้ ผลการทดสอบ ข้อจำกัดที่รู้ และบันทึกการเปลี่ยนแปลงเวอร์ชัน`,
            `เตรียมคำถามถึงผู้ขาย: โมเดลมาจากไหน ข้อมูลลูกค้าถูกใช้เทรนหรือไม่ เก็บไว้ที่ไหน ทดสอบเรื่องความถูกต้องและอคติอย่างไร`,
          ],
        },
        {
          h: `ผู้ใช้ AI กับผู้สร้าง AI เตรียมต่างกันอย่างไร`,
          p: [
            `ถ้าคุณเป็นผู้ใช้ เช่น โรงแรมที่ใช้แชตบอตตอบลูกค้า หรือโรงงานที่ใช้ AI ตรวจคุณภาพสินค้า งานหลักคือรู้ว่าใช้อะไรอยู่ เลือกผู้ขายที่ตอบคำถามได้ และมีคนกำกับในจุดสำคัญ รวมถึงบอกลูกค้าให้ชัดว่ากำลังคุยกับ AI`,
            `ถ้าคุณเป็นผู้สร้าง เช่น สตาร์ทอัปที่ขายระบบคัดกรองเอกสารสินเชื่อ หรือทีมที่พัฒนาฟีเจอร์ AI ในแอปให้ลูกค้า ภาระจะหนักกว่า ต้องมีการทดสอบก่อนปล่อย ระบบติดตามหลังใช้งาน และเอกสารที่อธิบายได้ว่าระบบทำงานอย่างไร การวางรากฐานนี้ตั้งแต่ตอนออกแบบ ถูกกว่าการรื้อทีหลังเมื่อกฎหมายมีผลจริงมาก`,
          ],
        },
      ],
      takeaways: [
        `ร่างกฎหมาย AI ของไทยยังไม่ใช่กฎหมาย และยังไม่มีกำหนดเวลาบังคับใช้ที่แน่นอน`,
        `แนวทางอิงความเสี่ยง มีกลุ่มต้องห้ามและกลุ่มความเสี่ยงสูง และมีขอบเขตนอกอาณาเขต`,
        `EU AI Act ทยอยบังคับใช้ และมีแผนเลื่อนหน้าที่ระบบความเสี่ยงสูงไปปี 2027-2028`,
        `เริ่มจากบัญชี AI การจัดระดับความเสี่ยง และการกำกับโดยมนุษย์`,
        `เอกสารและคำถามถึงผู้ขายที่ดี ใช้ได้กับทั้งกฎหมายไทยและยุโรป`,
      ],
      figCaption: `ไทม์ไลน์ร่างกฎหมาย AI ของไทยเทียบกับ EU AI Act และขั้นตอนเตรียมตัวของธุรกิจ`,
      faq: [
        {
          q: `กฎหมาย AI ของไทยบังคับใช้แล้วหรือยัง`,
          a: `ยัง ณ ตอนนี้เป็นร่างที่ผ่านการรับฟังความคิดเห็นแล้ว ยังต้องผ่านขั้นตอนปรับปรุงและนิติบัญญัติ และยังไม่มีกำหนดเวลาที่แน่นอน`,
        },
        {
          q: `บริษัทที่ใช้ ChatGPT หรือ Gemini ในงานภายในต้องกังวลไหม`,
          a: `การใช้งานทั่วไปที่ความเสี่ยงต่ำมักไม่ใช่เป้าหมายหลักของการกำกับแบบอิงความเสี่ยง แต่ควรมีนโยบายการใช้งาน ระวังการใส่ข้อมูลลูกค้า และบันทึกไว้ในบัญชี AI ขององค์กร`,
        },
        {
          q: `ผู้ให้บริการ AI ต่างประเทศเกี่ยวด้วยไหม`,
          a: `ตามร่าง ระบบ AI นอกประเทศที่ส่งผลต่อคนในไทยอยู่ในขอบเขต และผู้ให้บริการความเสี่ยงสูงในต่างประเทศจะต้องมีตัวแทนในไทย แต่รายละเอียดอาจเปลี่ยนในร่างสุดท้าย`,
        },
      ],
    },
    en: {
      title: `Thailand's Draft AI Act: What Businesses Using or Building AI Should Do Now`,
      excerpt: `ETDA opened a draft AI law for public hearing in July 2026, risk-based and loosely modelled on the EU AI Act. It is not law yet, but there is plenty you can do without waiting.`,
      metaTitle: `Thailand's Draft AI Act: What to Prepare Now`,
      metaDescription: `A summary of Thailand's draft AI Act from ETDA's 2026 hearing, how it compares with the EU AI Act, and what to do now: AI inventory, risk tiers and oversight.`,
      intro: `In July 2026 Thailand's Electronic Transactions Development Agency (ETDA) published a draft AI law for public hearing, and the consultation closed on 14 August 2026. To be clear from the start: this is a draft. It is not in force, and nobody can say yet when it will become law or how much the final text will change. Still, the direction is clear enough to prepare for. This article summarises the draft at a high level and lists what you can do now without waiting.`,
      sections: [
        {
          h: `Where the draft comes from and where it stands`,
          p: [
            `Thailand first held a public hearing on the principles of an AI law in June 2025. ETDA then released the draft itself for public hearing in July 2026 (commonly cited as 9 July), with comments closing on 14 August 2026.`,
            `The normal next steps are revising the draft based on feedback and taking it through the legislative process, with no fixed timeline. So do not treat the draft as a fixed legal checklist. Read it as a signal of what regulators will expect from those who use and build AI.`,
          ],
        },
        {
          h: `The core idea: regulate by level of risk`,
          p: [
            `The Thai draft takes a risk-based approach, loosely modelled on the EU AI Act. It sets out prohibited-risk AI and high-risk AI that carries extra obligations, while ordinary low-risk uses face far lighter treatment.`,
            `Foreign businesses and SaaS providers should note its extraterritorial reach. The draft covers AI systems located outside Thailand that affect people in Thailand, and offshore providers of high-risk AI would need a local representative.`,
          ],
          quote: `The law is still a draft, but the question "where do we use AI, and who is accountable when it goes wrong?" needs nobody's approval.`,
        },
        {
          h: `How it compares with the EU AI Act timeline`,
          p: [
            `The EU AI Act entered into force in August 2024 and phases in its obligations over time. Obligations for general-purpose AI models have applied since 2 August 2025. For high-risk systems, the provisional Digital Omnibus agreement of 7 May 2026 plans to push obligations back to 2 December 2027 for standalone systems and 2 August 2028 for systems embedded in already regulated products.`,
            `The European lesson is that even after a law passes, enforcement arrives in stages and the dates can move. Thailand is at a much earlier step. If you sell to customers in Europe, follow the EU AI Act alongside the Thai draft. The underlying principles are similar, so one set of preparation work serves both.`,
          ],
        },
        {
          h: `What to do now, without waiting for the law`,
          p: [
            `Whatever the final law looks like, the steps below are simply good AI governance, and they cut business risk straight away: a chatbot giving wrong medication information, say, or a CV-screening tool that is quietly biased.`,
          ],
          list: [
            `Build an AI inventory: which systems use AI, for what, with what data, owned by whom, including tools staff adopted on their own`,
            `Classify risk: separate uses that affect people's rights or opportunities, such as lending, hiring or healthcare, from routine work like summarising internal documents`,
            `Define human oversight: where a person must review before a decision, with the authority to override the AI`,
            `Document: purpose, data used, test results, known limitations, and a change log across versions`,
            `Prepare vendor questions: where does the model come from, is customer data used for training, where is it stored, and how are accuracy and bias tested?`,
          ],
        },
        {
          h: `Users of AI and builders of AI prepare differently`,
          p: [
            `If you use AI, say a hotel answering guests with a chatbot or a factory using AI for quality inspection, the main work is knowing what you run, choosing vendors who can answer your questions, keeping people in the loop at key points, and telling customers clearly when they are talking to AI.`,
            `If you build AI, such as a startup selling loan-document screening or a team shipping AI features in a customer app, the load is heavier: testing before launch, monitoring after, and documentation that explains how the system works. Laying that groundwork at design time is far cheaper than rebuilding once the law takes effect.`,
          ],
        },
      ],
      takeaways: [
        `Thailand's AI Act is still a draft with no confirmed date for taking effect`,
        `It is risk-based, with prohibited and high-risk categories and extraterritorial reach`,
        `The EU AI Act is phasing in, with high-risk duties planned for 2027-2028`,
        `Start with an AI inventory, risk classification and human oversight`,
        `Good documentation and vendor questions serve both Thai and EU requirements`,
      ],
      figCaption: `Timeline of Thailand's draft AI Act alongside the EU AI Act, with business preparation steps`,
      faq: [
        {
          q: `Is Thailand's AI law in force yet?`,
          a: `No. It is a draft that has completed public hearing. It still needs revision and the legislative process, and there is no fixed timeline.`,
        },
        {
          q: `Should a company using ChatGPT or Gemini internally worry?`,
          a: `Ordinary low-risk use is generally not the main focus of risk-based regulation. You should still have a usage policy, be careful about entering customer data, and record these tools in your AI inventory.`,
        },
        {
          q: `Are foreign AI providers covered?`,
          a: `Under the draft, AI systems outside Thailand that affect people in Thailand are in scope, and offshore high-risk providers would need a local representative. Details may change in the final text.`,
        },
      ],
    },
  },
  {
    slug: 'software-project-brief',
    cat: 'Business',
    date: '2026-10-22',
    readMin: 8,
    tags: ['Project Brief', 'TOR', 'Software Agency', 'Requirements', 'Procurement'],
    related: ['build-vs-buy', 'dx-mistakes', 'ux-research'],
    th: {
      title: `เขียน Project Brief หรือ TOR อย่างไรให้ได้ใบเสนอราคาที่แม่นจากเอเจนซีซอฟต์แวร์และดีไซน์`,
      excerpt: `ใบเสนอราคาที่ต่างกันหลายเท่ามักมาจาก brief ที่ไม่ชัด นี่คือหัวข้อที่ควรมี ตั้งแต่เป้าหมาย ผู้ใช้ ขอบเขต ไปจนถึงเกณฑ์ตรวจรับ พร้อมแม่แบบและสัญญาณอันตรายในใบเสนอราคา`,
      metaTitle: `เขียน Project Brief ให้ได้ใบเสนอราคาที่แม่นยำ`,
      metaDescription: `วิธีเขียน project brief หรือ TOR สำหรับจ้างทำเว็บ แอป หรือดีไซน์ ครอบคลุมเป้าหมาย ผู้ใช้ ขอบเขต must/should/could ระบบที่เชื่อม งบ เวลา เกณฑ์ตรวจรับ และแม่แบบ`,
      intro: `เคยส่งคำขอใบเสนอราคาทำแอปไปสามเจ้า แล้วได้ตัวเลขที่ต่างกันหลายเท่าไหม ส่วนใหญ่ไม่ใช่เพราะเจ้าใดเจ้าหนึ่งโก่งราคา แต่เพราะแต่ละเจ้าตีความโจทย์ไม่เหมือนกัน brief ที่ดีทำให้ทุกเจ้าประเมินงานชิ้นเดียวกัน เปรียบเทียบได้จริง และลดการเถียงกันตอนส่งมอบ บทความนี้คือแนวทางที่ทีม Haliviq อยากให้ลูกค้าทุกคนมีก่อนเริ่มคุย`,
      sections: [
        {
          h: `เริ่มจากเป้าหมายธุรกิจและผู้ใช้ ไม่ใช่รายการฟีเจอร์`,
          p: [
            `ย่อหน้าแรกของ brief ควรตอบว่าโครงการนี้ทำไปเพื่ออะไร และวัดความสำเร็จอย่างไร เช่น "ลดเวลาที่พนักงานคลินิกใช้ยืนยันนัดผ่าน LINE" หรือ "ให้ลูกค้าโครงการบ้านจัดสรรติดตามความคืบหน้างานก่อสร้างได้เอง" เป้าหมายที่ชัดทำให้เอเจนซีเสนอทางออกที่ง่ายกว่าได้ ถ้ามี`,
            `จากนั้นอธิบายผู้ใช้ว่าเป็นใคร ใช้งานบนอุปกรณ์อะไร คุ้นกับเทคโนโลยีแค่ไหน และมีกี่กลุ่ม เช่น ลูกค้า พนักงานหน้าร้าน และผู้ดูแลระบบหลังบ้าน แต่ละกลุ่มต้องการหน้าจอและสิทธิ์ต่างกัน ซึ่งส่งผลกับขนาดงานโดยตรง`,
          ],
        },
        {
          h: `ขอบเขตแบบ Must, Should, Could`,
          p: [
            `ปัญหาที่พบบ่อยที่สุดคือทุกฟีเจอร์ถูกเขียนว่าสำคัญเท่ากัน ให้แบ่งเป็นสามกลุ่ม Must คือถ้าไม่มี เปิดใช้ไม่ได้ Should คือควรมีในเวอร์ชันแรกถ้างบพอ Could คือดีถ้ามี แต่รอเฟสสองได้ การแบ่งแบบนี้ทำให้เอเจนซีเสนอราคาแยกเป็นส่วน และคุณตัดสินใจเรื่องงบได้ง่ายขึ้น`,
            `เขียนฟีเจอร์เป็นสิ่งที่ผู้ใช้ทำได้ ไม่ใช่ชื่อเทคโนโลยี เช่น "ลูกค้าจ่ายมัดจำผ่าน PromptPay QR และได้ใบเสร็จทาง LINE" ชัดกว่า "มีระบบ payment" มาก และอย่าลืมงานที่มองไม่เห็น เช่น หน้าหลังบ้าน รายงาน การแจ้งเตือน และการรองรับภาษาไทยกับอังกฤษ`,
          ],
        },
        {
          h: `ระบบที่ต้องเชื่อมต่อ เนื้อหา และข้อจำกัด`,
          p: [
            `การเชื่อมต่อกับระบบอื่นมักเป็นจุดที่ประเมินพลาดมากที่สุด ให้ระบุให้ครบว่าต้องคุยกับอะไรบ้าง เช่น LINE OA, payment gateway, ระบบบัญชี, ERP, ระบบหลังร้านของ Shopee หรือ Lazada และบอกด้วยว่าระบบเหล่านั้นมี API หรือเอกสารหรือไม่ ใครเป็นผู้ดูแล`,
            `เรื่องเนื้อหาก็สำคัญ ใครเป็นคนเขียนข้อความ ถ่ายรูป แปลภาษา และย้ายข้อมูลเก่า ถ้าคาดหวังให้เอเจนซีทำ ต้องเขียนไว้ สุดท้ายคือข้อจำกัด เช่น ต้องใช้ cloud ในประเทศ ต้องสอดคล้อง PDPA ต้องรองรับ accessibility ต้องใช้ design system เดิม หรือทีมไอทีภายในต้องดูแลต่อได้`,
          ],
          list: [
            `ระบบที่ต้องเชื่อมต่อ พร้อมสถานะ API และผู้ติดต่อ`,
            `ใครรับผิดชอบเนื้อหา รูปภาพ การแปล และการย้ายข้อมูล`,
            `ข้อจำกัดด้านเทคนิค ความปลอดภัย กฎหมาย และ hosting`,
            `ใครจะดูแลระบบหลังส่งมอบ`,
          ],
        },
        {
          h: `งบประมาณ เวลา และเกณฑ์ตรวจรับ`,
          p: [
            `หลายธุรกิจไม่อยากบอกงบเพราะกลัวถูกเสนอราคาเต็มงบ แต่การบอกเป็นช่วงกว้างๆ ช่วยได้มาก เอเจนซีจะรู้ว่าควรเสนอทางออกระดับไหน แทนที่จะเดาแล้วเสนอสิ่งที่เกินหรือต่ำกว่าความต้องการ เรื่องเวลาให้แยกวันที่ต้องได้จริง (เช่น ผูกกับงานเปิดตัวโครงการ) ออกจากวันที่อยากได้`,
            `เกณฑ์ตรวจรับคือสิ่งที่ป้องกันการเถียงกันตอนจบงาน เขียนว่าแบบไหนถือว่าเสร็จ เช่น ใช้งานได้บนเบราว์เซอร์และมือถือรุ่นไหน หน้าเว็บผ่านเกณฑ์ Core Web Vitals ระดับใด ผ่านการทดสอบกับผู้ใช้จริงกี่รอบ ส่งมอบซอร์สโค้ดและเอกสารอะไรบ้าง และมีช่วงรับประกันแก้บั๊กหลังส่งมอบหรือไม่`,
          ],
          quote: `Brief ที่ดีไม่ได้ทำให้งานถูกลงเสมอไป แต่ทำให้ราคาที่ได้ "จริง" ตั้งแต่แรก`,
        },
        {
          h: `แม่แบบ brief และสัญญาณอันตรายในใบเสนอราคา`,
          p: [
            `ใช้หัวข้อตามลำดับนี้เป็นโครงได้เลย ไม่ต้องยาวมาก สองถึงห้าหน้าก็พอสำหรับโครงการส่วนใหญ่: 1) ภาพรวมธุรกิจและปัญหา 2) เป้าหมายและตัวชี้วัด 3) ผู้ใช้แต่ละกลุ่ม 4) ขอบเขต Must/Should/Could 5) ระบบที่เชื่อมต่อ 6) เนื้อหาและข้อมูล 7) ข้อจำกัด 8) ช่วงงบประมาณ 9) ไทม์ไลน์ 10) เกณฑ์ตรวจรับและสิ่งที่ส่งมอบ 11) การดูแลหลังส่งมอบ 12) วิธีส่งข้อเสนอและผู้ติดต่อ`,
            `เมื่อได้ใบเสนอราคากลับมา ให้ระวังสัญญาณเหล่านี้ ไม่ได้แปลว่าเจ้านั้นไม่ดีเสมอไป แต่ควรถามให้ชัดก่อนเซ็น`,
          ],
          list: [
            `ราคาก้อนเดียวไม่แยกส่วนงาน หรือไม่อ้างอิงขอบเขตใน brief`,
            `ไม่ถามคำถามกลับเลย ทั้งที่ brief ยังมีจุดไม่ชัด`,
            `ไม่ระบุว่าใครเป็นเจ้าของซอร์สโค้ด บัญชี cloud และโดเมน`,
            `ไม่มีขั้นตอนทดสอบ การตรวจรับ หรือการรับประกันหลังส่งมอบ`,
            `สัญญาว่าทำได้ทุกอย่างในเวลาสั้นมาก โดยไม่พูดถึงความเสี่ยง`,
          ],
        },
      ],
      takeaways: [
        `เริ่ม brief จากเป้าหมายธุรกิจและผู้ใช้ ไม่ใช่รายการฟีเจอร์`,
        `แบ่งขอบเขตเป็น Must, Should, Could เพื่อให้เทียบราคาและตัดสินใจได้`,
        `ระบบที่ต้องเชื่อมต่อและงานเนื้อหาคือจุดที่ประเมินพลาดบ่อยที่สุด`,
        `บอกช่วงงบและเขียนเกณฑ์ตรวจรับให้ชัด ลดการเถียงกันตอนจบงาน`,
        `ใบเสนอราคาที่ไม่แยกส่วนงานและไม่พูดถึงความเป็นเจ้าของโค้ด ควรถามให้ชัดก่อนเซ็น`,
      ],
      figCaption: `โครงสร้าง project brief 12 หัวข้อ จากเป้าหมายธุรกิจไปถึงเกณฑ์ตรวจรับ`,
      faq: [
        {
          q: `ควรส่ง brief ให้เอเจนซีกี่เจ้า`,
          a: `โดยทั่วไปสามถึงห้าเจ้าก็พอเปรียบเทียบได้ มากเกินไปจะใช้เวลาตอบคำถามและอ่านข้อเสนอนานโดยไม่ได้ข้อมูลเพิ่ม ให้ทุกเจ้าได้ brief ฉบับเดียวกันและคำตอบของคำถามเดียวกัน`,
        },
        {
          q: `ถ้ายังไม่รู้ว่าต้องการอะไรแน่ ควรทำอย่างไร`,
          a: `แยกจ้างเฟส discovery สั้นๆ ก่อน เพื่อคุยกับผู้ใช้ ทำ prototype และสรุปขอบเขต แล้วค่อยใช้ผลนั้นเป็น brief สำหรับงานพัฒนาจริง วิธีนี้มักได้ราคาที่แม่นกว่าการเดาขอบเขตตั้งแต่ต้น`,
        },
      ],
    },
    en: {
      title: `How to Write a Project Brief or TOR That Gets Accurate Quotes From Agencies`,
      excerpt: `Quotes that differ wildly usually come from an unclear brief. Here is what to include, from goals and users to scope and acceptance criteria, plus a template and red flags.`,
      metaTitle: `Write a Project Brief That Gets Accurate Quotes`,
      metaDescription: `How to write a brief or TOR for a website, app or design project: goals, users, must/should/could scope, integrations, budget, timeline, acceptance criteria.`,
      intro: `Have you ever asked three agencies to quote on an app and received numbers that were miles apart? Usually nobody is overcharging. Each agency simply read the brief differently. A good brief means everyone quotes the same project, so you can genuinely compare, and it heads off arguments at handover. This is the guidance the Haliviq team wishes every client had before the first conversation.`,
      sections: [
        {
          h: `Start with business goals and users, not a feature list`,
          p: [
            `The first paragraph of your brief should say why the project exists and how you will measure success, such as "cut the time clinic staff spend confirming appointments over LINE" or "let housing-estate buyers track construction progress themselves". A clear goal frees agencies to propose a simpler solution if one exists.`,
            `Then describe the users: who they are, what devices they use, how comfortable they are with technology, and how many groups there are. Customers, store staff and back-office admins need different screens and permissions, and that directly affects the size of the job.`,
          ],
        },
        {
          h: `Scope as Must, Should and Could`,
          p: [
            `The most common problem is that every feature is written as equally important. Split them into three groups. Must means you cannot launch without it. Should means it belongs in version one if the budget allows. Could means nice to have, but it can wait for phase two. This lets agencies price each part separately and makes your budget decisions easier.`,
            `Describe features as things users can do, not technology names. "Customers pay a deposit by PromptPay QR and receive a receipt in LINE" is far clearer than "has a payment system". And remember the invisible work: admin screens, reports, notifications, and Thai and English support.`,
          ],
        },
        {
          h: `Integrations, content and constraints`,
          p: [
            `Integrations are where estimates go wrong most often. List everything the system must talk to, such as LINE OA, a payment gateway, accounting software, an ERP, or your Shopee and Lazada seller back end, and say whether each has an API or documentation and who maintains it.`,
            `Content matters too: who writes the copy, takes the photos, translates and migrates old data. If you expect the agency to do it, write it down. Finally, list constraints, such as in-country cloud hosting, PDPA compliance, accessibility requirements, an existing design system, or an internal IT team that must maintain the system afterwards.`,
          ],
          list: [
            `Systems to integrate, with API status and a contact person`,
            `Who owns copy, images, translation and data migration`,
            `Technical, security, legal and hosting constraints`,
            `Who will maintain the system after handover`,
          ],
        },
        {
          h: `Budget, timeline and acceptance criteria`,
          p: [
            `Many businesses avoid stating a budget for fear the quote will simply match it. But a rough range helps a great deal. Agencies learn what level of solution to propose instead of guessing and pitching something too big or too small. On timing, separate hard deadlines, such as a project launch event, from preferred dates.`,
            `Acceptance criteria are what prevent arguments at the end. Spell out what counts as done: which browsers and phones it must work on, which Core Web Vitals level pages should meet, how many rounds of testing with real users, which source code and documents are handed over, and whether there is a bug-fix warranty period after launch.`,
          ],
          quote: `A good brief does not always make the project cheaper, but it makes the first price a real one.`,
        },
        {
          h: `A brief template, and red flags in quotes`,
          p: [
            `Use these headings in order as your outline. It does not need to be long; two to five pages suits most projects: 1) Business overview and problem 2) Goals and metrics 3) User groups 4) Must/Should/Could scope 5) Integrations 6) Content and data 7) Constraints 8) Budget range 9) Timeline 10) Acceptance criteria and deliverables 11) Post-launch support 12) How to submit a proposal, and contacts.`,
            `When quotes come back, watch for these signs. They do not always mean a bad agency, but they are worth clarifying before you sign.`,
          ],
          list: [
            `A single lump-sum price with no breakdown, or no reference to your scope`,
            `No questions asked back, even though parts of the brief are unclear`,
            `No mention of who owns the source code, cloud accounts and domain`,
            `No testing, acceptance process or post-launch warranty`,
            `Promises to deliver everything in a very short time with no mention of risk`,
          ],
        },
      ],
      takeaways: [
        `Open the brief with business goals and users, not a feature list`,
        `Split scope into Must, Should and Could so quotes are comparable`,
        `Integrations and content are where estimates most often go wrong`,
        `Share a budget range and clear acceptance criteria to avoid end-of-project disputes`,
        `Clarify quotes with no breakdown or no word on code ownership before signing`,
      ],
      figCaption: `A 12-part project brief structure, from business goals to acceptance criteria`,
      faq: [
        {
          q: `How many agencies should receive the brief?`,
          a: `Three to five is usually enough to compare. More than that means a lot of time answering questions and reading proposals without much extra insight. Give every agency the same brief and the same answers to questions.`,
        },
        {
          q: `What if we are not sure exactly what we need yet?`,
          a: `Commission a short discovery phase first to talk to users, build a prototype and settle the scope. Then use that output as the brief for the build. This usually produces more accurate pricing than guessing the scope up front.`,
        },
      ],
    },
  },
  {
    slug: 'ai-roi-measure',
    cat: 'Business',
    date: '2026-10-15',
    readMin: 9,
    tags: ['AI ROI', 'AI Strategy', 'Business Case', 'Metrics', 'AI Pilot'],
    related: ['llm-cost-control', 'ai-evals-before-launch', 'ai-product-2025'],
    th: {
      title: `วัด ROI ของโครงการ AI อย่างตรงไปตรงมา: จาก baseline ถึงการตัดสินใจหยุด pilot`,
      excerpt: `โครงการ AI หลายตัวถูกบอกว่า "ช่วยประหยัดเวลา" แต่ไม่มีใครวัดได้จริง นี่คือวิธีตั้ง baseline นับต้นทุนให้ครบ คำนวณแบบง่าย และรู้ว่าเมื่อไรควรหยุด`,
      metaTitle: `วัด ROI โครงการ AI อย่างตรงไปตรงมา`,
      metaDescription: `วิธีวัด ROI ของโครงการ AI ตั้งแต่ตั้ง baseline แยกเวลาที่ประหยัดกับมูลค่าที่เกิดจริง นับต้นทุนคุณภาพและต้นทุนรวม พร้อมสูตรง่ายๆ ตัวอย่าง และเกณฑ์หยุด pilot`,
      intro: `ช่วงนี้แทบทุกองค์กรมี pilot AI สักตัว แชตบอตตอบลูกค้าใน LINE OA ระบบสรุปเอกสาร หรือผู้ช่วยเขียนคำบรรยายสินค้า แต่พอผู้บริหารถามว่า "คุ้มไหม" คำตอบมักเป็นความรู้สึก บทความนี้เสนอวิธีวัด ROI ที่ตรงไปตรงมา ไม่ได้ซับซ้อน แต่ต้องซื่อสัตย์กับตัวเลข ทั้งด้านดีและด้านที่ไม่อยากเห็น`,
      sections: [
        {
          h: `วัด baseline ก่อนเริ่ม ไม่อย่างนั้นไม่มีอะไรให้เทียบ`,
          p: [
            `ข้อผิดพลาดที่พบบ่อยที่สุดคือเริ่ม pilot ก่อนวัดว่าตอนนี้ทำงานอย่างไร ถ้าไม่รู้ว่าพนักงานใช้เวลาตอบแชตลูกค้าเฉลี่ยกี่นาที ผิดพลาดบ่อยแค่ไหน หรือลูกค้ารอนานเท่าไร ก็ไม่มีทางพิสูจน์ว่า AI ทำให้ดีขึ้น`,
            `ใช้เวลาหนึ่งถึงสองสัปดาห์เก็บตัวเลขของกระบวนการเดิม จากระบบที่มีอยู่ เช่น ประวัติแชต ticket หรือ log ของระบบ ถ้าไม่มี ให้สุ่มจับเวลาจริงจากงานตัวอย่าง ตัวเลขที่ไม่สมบูรณ์แต่เก็บจริง ดีกว่าการประมาณจากความรู้สึกเสมอ`,
          ],
        },
        {
          h: `เวลาที่ประหยัด ไม่เท่ากับมูลค่าที่เกิดขึ้น`,
          p: [
            `"ประหยัดเวลาพนักงานวันละหนึ่งชั่วโมง" ฟังดูดี แต่ต้องถามต่อว่าหนึ่งชั่วโมงนั้นไปไหน ถ้าพนักงานเอาไปทำงานที่สร้างรายได้มากขึ้น ตอบลูกค้าได้มากขึ้น หรือองค์กรไม่ต้องจ้างคนเพิ่มตอนธุรกิจโต นั่นคือมูลค่าจริง ถ้าเวลานั้นหายไปเฉยๆ มูลค่าทางการเงินก็แทบเป็นศูนย์`,
            `ให้แยกผลลัพธ์เป็นสองกลุ่ม คือเวลาที่ประหยัด (efficiency) กับมูลค่าที่สร้างใหม่ (value) เช่น ยอดขายที่เพิ่มเพราะตอบแชตนอกเวลาทำการได้ อัตราการจองห้องพักที่สูงขึ้น หรือการลดของเสียในสายการผลิต แล้วเลือกตัวชี้วัดที่ผูกกับกลุ่มที่สองให้ได้อย่างน้อยหนึ่งตัว`,
          ],
          quote: `ชั่วโมงที่ประหยัดได้จะมีค่า ก็ต่อเมื่อมีคนรู้ว่าจะเอามันไปใช้ทำอะไร`,
        },
        {
          h: `คุณภาพ ความผิดพลาด การใช้งานจริง และต้นทุนรวม`,
          p: [
            `AI ที่เร็วแต่ผิดบ่อยอาจทำให้ต้นทุนสูงขึ้น เช่น แชตบอตที่ตอบราคาผิดจนต้องชดเชยลูกค้า หรือสรุปเอกสารที่พนักงานต้องตรวจซ้ำทุกบรรทัด ให้วัดอัตราความผิดพลาด เวลาที่คนใช้ตรวจและแก้ และต้นทุนของความผิดพลาดแต่ละครั้งด้วย`,
            `อีกตัวที่มักถูกลืมคือการใช้งานจริง (adoption) ระบบที่ดีแต่ทีมใช้แค่ส่วนน้อยก็ไม่ได้ผลตามแผน ส่วนต้นทุนให้นับครบทุกก้อน ไม่ใช่แค่ค่าพัฒนา`,
          ],
          list: [
            `ค่าสร้างและเชื่อมต่อระบบ (build)`,
            `ค่า API หรือค่าโมเดลที่แปรตามการใช้งาน`,
            `ค่าดูแล ติดตาม ปรับ prompt และทดสอบซ้ำเมื่อโมเดลเปลี่ยน`,
            `เวลาของคน: อบรม ตรวจผล แก้ไข และเจ้าของโครงการ`,
            `ค่าความผิดพลาด: การชดเชย การแก้งาน และความเสี่ยงด้านชื่อเสียง`,
          ],
        },
        {
          h: `สูตรง่ายๆ และตัวอย่างสมมติ`,
          p: [
            `สูตรพื้นฐานคือ ROI = (มูลค่าที่ได้ - ต้นทุนรวม) / ต้นทุนรวม โดยมูลค่าที่ได้ = มูลค่าเวลาที่ประหยัดและนำไปใช้จริง + มูลค่าใหม่ที่สร้างขึ้น - ต้นทุนความผิดพลาดที่เพิ่มขึ้น คิดเป็นรายเดือนหรือรายปีให้ตรงกันทั้งสองฝั่ง และคิดจุดคุ้มทุน = ค่าสร้างครั้งแรก / (มูลค่าสุทธิต่อเดือน - ค่าใช้จ่ายรายเดือน)`,
            `ตัวอย่างสมมติเพื่ออธิบายวิธีคิดเท่านั้น ตัวเลขไม่ได้มาจากโครงการจริง: ร้านออนไลน์ใช้ AI ช่วยร่างคำตอบแชต ประหยัดเวลาทีมได้ 100 ชั่วโมงต่อเดือน แต่นำไปใช้งานอื่นจริงเพียงครึ่งหนึ่ง คือ 50 ชั่วโมง ตีมูลค่าชั่วโมงละ 200 บาท ได้ 10,000 บาท บวกยอดขายเพิ่มจากการตอบนอกเวลา 15,000 บาท หักค่าแก้คำตอบผิด 3,000 บาท มูลค่าสุทธิเดือนละ 22,000 บาท ค่าใช้จ่ายรายเดือน (API และดูแล) 8,000 บาท ค่าสร้างครั้งแรก 84,000 บาท จุดคุ้มทุนจึงอยู่ที่ 84,000 / (22,000 - 8,000) = 6 เดือน`,
            `สังเกตว่าถ้าเรานับเวลาที่ประหยัดทั้ง 100 ชั่วโมงและไม่หักค่าความผิดพลาด ตัวเลขจะดูดีกว่านี้มาก ซึ่งเป็นกับดักที่ทำให้หลายโครงการดูคุ้มบนสไลด์ แต่ไม่คุ้มในบัญชีจริง`,
          ],
        },
        {
          h: `เมื่อไรควรหยุด pilot`,
          p: [
            `กำหนดเกณฑ์หยุดตั้งแต่ก่อนเริ่ม ไม่ใช่ตอนที่ลงทุนไปเยอะแล้ว เช่น ถ้าครบสามเดือนแล้วอัตราความผิดพลาดยังสูงกว่าเกณฑ์ ทีมใช้งานไม่ถึงเป้า หรือจุดคุ้มทุนไกลเกินที่ยอมรับได้ ให้หยุดหรือเปลี่ยนแนวทาง การหยุดอย่างมีข้อมูลไม่ใช่ความล้มเหลว แต่คือการใช้เงินอย่างรับผิดชอบ`,
            `บางครั้งผลไม่ถึงเป้าเพราะเลือกงานผิด ไม่ใช่เพราะ AI ใช้ไม่ได้ ลองถามว่างานนี้มีปริมาณมากพอไหม ข้อมูลพร้อมหรือเปล่า และความผิดพลาดยอมรับได้แค่ไหน แล้วเลือก pilot ตัวต่อไปที่ตอบโจทย์เหล่านี้ได้ดีกว่า`,
          ],
          list: [
            `ไม่มี baseline หรือวัดผลเทียบไม่ได้หลังผ่านไปหลายสัปดาห์`,
            `อัตราความผิดพลาดหรือเวลาตรวจแก้ไม่ลดลงตามแผน`,
            `ทีมใช้งานต่ำกว่าเป้าแม้อบรมและปรับแล้ว`,
            `ต้นทุนรายเดือนโตเร็วกว่ามูลค่าที่ได้`,
          ],
        },
      ],
      takeaways: [
        `วัด baseline ของกระบวนการเดิมก่อนเริ่ม pilot ทุกครั้ง`,
        `แยกเวลาที่ประหยัดออกจากมูลค่าที่เกิดจริง และนับเฉพาะเวลาที่ถูกนำไปใช้`,
        `นับต้นทุนให้ครบ ทั้งค่าสร้าง API การดูแล เวลาของคน และความผิดพลาด`,
        `ใช้สูตร ROI และจุดคุ้มทุนแบบง่าย โดยไม่ตกแต่งตัวเลข`,
        `กำหนดเกณฑ์หยุด pilot ตั้งแต่ก่อนเริ่ม`,
      ],
      figCaption: `กรอบการวัด ROI ของ AI จาก baseline มูลค่า ต้นทุนรวม ไปสู่การตัดสินใจขยายหรือหยุด`,
      faq: [
        {
          q: `pilot AI ควรใช้เวลานานแค่ไหนถึงจะวัดผลได้`,
          a: `ขึ้นกับปริมาณงาน งานที่เกิดทุกวันอย่างตอบแชตมักเห็นแนวโน้มในไม่กี่สัปดาห์ ส่วนงานที่นานๆ เกิดครั้งอาจต้องนานกว่านั้น สิ่งสำคัญคือกำหนดระยะเวลาและเกณฑ์ไว้ล่วงหน้า`,
        },
        {
          q: `ถ้ามูลค่าของ AI วัดเป็นเงินยาก เช่น ความพึงพอใจลูกค้า ควรทำอย่างไร`,
          a: `ใช้ตัวชี้วัดแทนที่ผูกกับธุรกิจได้ เช่น คะแนนความพึงพอใจหลังแชต อัตราการกลับมาซื้อซ้ำ หรือจำนวนเรื่องร้องเรียน และรายงานแยกจากตัวเลขการเงิน โดยไม่แปลงเป็นเงินแบบฝืนๆ`,
        },
        {
          q: `ค่า API ของ AI คาดการณ์ได้ไหม`,
          a: `ประมาณได้จากปริมาณการใช้งานและขนาดข้อความ แต่ควรติดตามจริงทุกเดือนและตั้งเพดานค่าใช้จ่าย เพราะเมื่อมีผู้ใช้มากขึ้นหรือเปลี่ยนโมเดล ต้นทุนก็เปลี่ยนตาม`,
        },
      ],
    },
    en: {
      title: `Measuring AI ROI Honestly: From Baseline to Knowing When to Stop a Pilot`,
      excerpt: `Many AI projects are said to "save time", but nobody can prove it. Here is how to set a baseline, count every cost, run simple numbers and know when to stop.`,
      metaTitle: `How to Measure AI Project ROI Honestly`,
      metaDescription: `How to measure AI project ROI: set a baseline, separate time saved from value created, count quality and total cost, use simple formulas, and know when to stop.`,
      intro: `Almost every organisation now has an AI pilot or two: a LINE OA chatbot for customers, a document summariser, or an assistant drafting product descriptions. Yet when leadership asks "is it worth it?", the answer is often a gut feeling. This article offers an honest way to measure ROI. It is not complicated, but it does require being straight with the numbers, including the ones you would rather not see.`,
      sections: [
        {
          h: `Measure the baseline first, or you have nothing to compare`,
          p: [
            `The most common mistake is starting a pilot before measuring how the work is done today. If you do not know how many minutes staff spend per customer chat, how often mistakes happen, or how long customers wait, you cannot prove the AI improved anything.`,
            `Spend one or two weeks gathering numbers on the current process from systems you already have: chat history, tickets or system logs. If those do not exist, time a sample of real tasks. Imperfect numbers you actually collected always beat estimates based on feel.`,
          ],
        },
        {
          h: `Time saved is not the same as value created`,
          p: [
            `"Saves each person an hour a day" sounds great, but ask where that hour goes. If staff spend it on revenue-generating work, handle more customers, or the business avoids hiring as it grows, that is real value. If the hour simply evaporates, the financial value is close to zero.`,
            `Split outcomes into two groups: time saved (efficiency) and new value created, such as extra sales from answering chats after hours, a higher hotel booking rate, or less waste on a production line. Tie at least one metric to the second group.`,
          ],
          quote: `A saved hour is only worth something when someone knows what it will be used for.`,
        },
        {
          h: `Quality, errors, adoption and total cost`,
          p: [
            `Fast but frequently wrong AI can raise costs: a chatbot quoting the wrong price that you then have to honour, or summaries staff must re-check line by line. Measure the error rate, the time people spend reviewing and fixing, and the cost of each mistake.`,
            `Adoption is the other metric people forget. A good system used by only a small part of the team will not deliver the plan. And count every cost, not just development.`,
          ],
          list: [
            `Build and integration costs`,
            `API or model costs that scale with usage`,
            `Maintenance: monitoring, prompt tuning and re-testing when models change`,
            `People's time: training, reviewing output, corrections and a project owner`,
            `Cost of errors: compensation, rework and reputational risk`,
          ],
        },
        {
          h: `Simple formulas and a hypothetical example`,
          p: [
            `The basic formula is ROI = (value gained - total cost) / total cost, where value gained = value of time saved and actually redeployed + new value created - additional cost of errors. Use the same period, monthly or yearly, on both sides. Payback period = upfront build cost / (net monthly value - monthly running cost).`,
            `Here is a hypothetical example to show the method; the numbers are illustrative, not from a real project. An online shop uses AI to draft chat replies and saves the team 100 hours a month, but only half, 50 hours, is actually redeployed. At THB 200 an hour that is THB 10,000. Add THB 15,000 in extra sales from after-hours replies and subtract THB 3,000 for fixing wrong answers, for a net value of THB 22,000 a month. Running costs (API and maintenance) are THB 8,000 a month and the upfront build was THB 84,000, so payback is 84,000 / (22,000 - 8,000) = 6 months.`,
            `Notice that if we had counted all 100 hours and ignored error costs, the result would look much better. That is the trap that makes many projects look profitable on a slide and not in the accounts.`,
          ],
        },
        {
          h: `When to stop a pilot`,
          p: [
            `Set stop criteria before you start, not after you have invested heavily. For example, if after three months the error rate is still above the threshold, adoption is below target, or payback is further out than you can accept, stop or change course. Stopping on evidence is not failure. It is spending money responsibly.`,
            `Sometimes results fall short because the wrong task was chosen, not because AI cannot help. Ask whether the task has enough volume, whether the data is ready, and how much error is tolerable, then pick a next pilot that fits those conditions better.`,
          ],
          list: [
            `No baseline, or results still cannot be compared after several weeks`,
            `Error rates or review time are not falling as planned`,
            `Adoption stays below target even after training and adjustments`,
            `Monthly costs grow faster than the value delivered`,
          ],
        },
      ],
      takeaways: [
        `Always measure a baseline of the current process before a pilot`,
        `Separate time saved from value created, and count only redeployed time`,
        `Count every cost: build, API, maintenance, people's time and errors`,
        `Use simple ROI and payback formulas without dressing up the numbers`,
        `Set the criteria for stopping a pilot before it starts`,
      ],
      figCaption: `An AI ROI framework from baseline, value and total cost to the decision to scale or stop`,
      faq: [
        {
          q: `How long should an AI pilot run before we can measure it?`,
          a: `It depends on volume. Daily tasks like chat replies often show a trend within a few weeks, while infrequent tasks take longer. What matters is fixing the duration and criteria in advance.`,
        },
        {
          q: `What if the value is hard to express in money, like customer satisfaction?`,
          a: `Use proxy metrics tied to the business, such as post-chat satisfaction scores, repeat purchase rate or complaint volume, and report them alongside the financial figures rather than forcing a conversion into money.`,
        },
        {
          q: `Can AI API costs be predicted?`,
          a: `You can estimate them from usage volume and message length, but track actual spend monthly and set a budget cap, because costs shift as usage grows or models change.`,
        },
      ],
    },
  },
]
