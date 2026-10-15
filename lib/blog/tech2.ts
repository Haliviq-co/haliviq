import type { Article } from '@/lib/blog-types'

export const tech2Articles: Article[] = [
  {
    slug: 'nextjs-perf',
    cat: 'Technology',
    date: '2026-10-02',
    readMin: 9,
    tags: ['Core Web Vitals', 'Next.js', 'Web Performance', 'LCP', 'INP'],
    related: ['legacy-modernization', 'accessibility-wcag', 'why-design-system-matters'],
    th: {
      title: `ทำเว็บให้เร็วจริง: Core Web Vitals อธิบายง่ายๆ และแนวปฏิบัติสำหรับ Next.js`,
      excerpt: `LCP, CLS และ INP วัดอะไร ภาพ ฟอนต์ และ JavaScript กินความเร็วตรงไหน แคชช่วยอย่างไร และทำไมต้องดูข้อมูลจากผู้ใช้จริงควบคู่กับ Lighthouse`,
      metaTitle: `Core Web Vitals คืออะไร LCP CLS INP และการทำเว็บให้เร็ว`,
      metaDescription: `อธิบาย Core Web Vitals (LCP, CLS, INP) แบบเข้าใจง่าย พร้อมวิธีลดน้ำหนักภาพ ฟอนต์ JavaScript ตั้งแคช และแนวปฏิบัติ Next.js ที่ทีมนำไปใช้ได้ทันที`,
      intro: `เว็บที่ช้าทำให้คนปิดหน้าไปก่อนจะเห็นสินค้า และ Google เองก็นำประสบการณ์การใช้งานมาเป็นสัญญาณหนึ่งในการจัดอันดับ บทความนี้อธิบายตัวชี้วัด Core Web Vitals ทั้งสามตัวด้วยภาษาที่ไม่ต้องเป็นสายเทคนิคก็เข้าใจ แล้วไล่ดูว่าอะไรทำให้เว็บหนัก และแก้ได้อย่างไรโดยเฉพาะบน Next.js`,
      sections: [
        {
          h: `Core Web Vitals วัดอะไรบ้าง`,
          p: [
            `Core Web Vitals คือชุดตัวชี้วัดที่ Google กำหนดเพื่อวัดประสบการณ์ของคนที่เปิดเว็บจริงๆ ปัจจุบันมีสามตัว ตัวแรกคือ LCP (Largest Contentful Paint) วัดว่ากว่าองค์ประกอบใหญ่ที่สุดในหน้าจอแรก เช่น ภาพหลักหรือหัวข้อ จะขึ้นครบใช้เวลานานแค่ไหน เกณฑ์ที่ถือว่าดีคือไม่เกิน 2.5 วินาที`,
            `ตัวที่สองคือ CLS (Cumulative Layout Shift) วัดว่าเนื้อหาในหน้าขยับเลื่อนไปมาโดยผู้ใช้ไม่ได้ตั้งใจแค่ไหน ลองนึกถึงตอนกำลังจะกดปุ่ม แล้วโฆษณาหรือภาพโหลดเสร็จดันปุ่มหนีไป เกณฑ์ที่ดีคือไม่เกิน 0.1 ตัวที่สามคือ INP (Interaction to Next Paint) วัดว่าหลังผู้ใช้กด แตะ หรือพิมพ์ หน้าเว็บตอบสนองให้เห็นผลช้าแค่ไหน เกณฑ์ที่ดีคือไม่เกิน 200 มิลลิวินาที`,
            `INP เข้ามาแทน FID (First Input Delay) อย่างเป็นทางการในปี 2024 ความต่างสำคัญคือ FID วัดแค่ความหน่วงของการโต้ตอบครั้งแรก ส่วน INP ดูการโต้ตอบตลอดการใช้งานหน้านั้น จึงจับปัญหาอย่างเมนูที่กดแล้วค้าง หรือฟอร์มที่พิมพ์แล้วกระตุกได้ดีกว่ามาก`,
          ],
        },
        {
          h: `ภาพ ฟอนต์ และ JavaScript: ตัวการน้ำหนักเกิน`,
          p: [
            `ในเว็บส่วนใหญ่ ภาพคือไฟล์ที่ใหญ่ที่สุด และมักเป็นองค์ประกอบ LCP ด้วย ปัญหาที่พบบ่อยคืออัปโหลดภาพจากกล้องหรือดีไซน์ขนาดเต็มมาใช้ตรงๆ แล้วให้เบราว์เซอร์ย่อเอง ควรส่งขนาดที่พอดีกับหน้าจอแต่ละเครื่อง ใช้รูปแบบสมัยใหม่อย่าง WebP หรือ AVIF และกำหนดความกว้างความสูงไว้ล่วงหน้าเพื่อกัน CLS`,
            `ฟอนต์ก็มีผล โดยเฉพาะเว็บภาษาไทยที่ไฟล์ฟอนต์มักใหญ่กว่าฟอนต์ละติน ให้เลือกน้ำหนักตัวอักษรเท่าที่ใช้จริง โหลดจากโดเมนเดียวกับเว็บ และตั้ง font-display ให้ข้อความขึ้นก่อนแล้วค่อยสลับฟอนต์ เพื่อไม่ให้หน้าว่างระหว่างรอ ส่วน JavaScript เป็นต้นเหตุหลักของ INP เพราะเบราว์เซอร์ต้องดาวน์โหลด แปลง และรันก่อนหน้าจึงตอบสนองได้`,
            `สคริปต์ของบุคคลที่สาม เช่น แชตวิดเจ็ต แท็กโฆษณา และเครื่องมือวิเคราะห์ มักถูกลืมนับ ทั้งที่รวมกันแล้วหนักไม่แพ้โค้ดของเราเอง ลองตรวจเป็นระยะว่าตัวไหนยังจำเป็นอยู่`,
          ],
          list: [
            `ภาพ: ขนาดพอดี รูปแบบ WebP หรือ AVIF กำหนด width และ height เสมอ`,
            `ฟอนต์: ใช้เท่าที่จำเป็น โหลดจากโดเมนตัวเอง ตั้ง font-display`,
            `JavaScript: ส่งเฉพาะโค้ดที่หน้านั้นใช้ และแยกส่วนที่ไม่จำเป็นออกไปโหลดทีหลัง`,
            `สคริปต์ภายนอก: โหลดแบบ async หรือหลังผู้ใช้โต้ตอบ และลบตัวที่เลิกใช้`,
          ],
        },
        {
          h: `แคช: ทำให้งานเดิมไม่ต้องทำซ้ำ`,
          p: [
            `วิธีที่เร็วที่สุดในการตอบหน้าเว็บคือไม่ต้องสร้างใหม่ ไฟล์ static อย่างภาพ CSS และ JavaScript ควรตั้ง Cache-Control ให้เบราว์เซอร์เก็บไว้นาน โดยใช้ชื่อไฟล์ที่มี hash ต่อท้าย เมื่อไฟล์เปลี่ยนชื่อก็เปลี่ยนตาม ผู้ใช้จึงได้ของใหม่ทันทีโดยไม่ต้องรอแคชหมดอายุ`,
            `สำหรับหน้าที่เนื้อหาไม่เปลี่ยนทุกวินาที เช่น บทความ หน้าบริการ หรือหน้าสินค้า การสร้างหน้าล่วงหน้าแล้วเสิร์ฟผ่าน CDN ทำให้ผู้ใช้ในกรุงเทพฯ ได้ไฟล์จากเซิร์ฟเวอร์ใกล้ตัว ไม่ต้องวิ่งไปไกลถึงต้นทาง และลดภาระฐานข้อมูลไปด้วย ส่วนข้อมูลที่เปลี่ยนบ่อยค่อยกำหนดอายุแคชสั้นๆ หรือสั่งล้างแคชเมื่อมีการแก้ไข`,
          ],
        },
        {
          h: `แนวปฏิบัติบน Next.js`,
          p: [
            `Next.js มีเครื่องมือที่ช่วยเรื่องข้างต้นอยู่แล้ว คอมโพเนนต์ next/image ปรับขนาดและรูปแบบภาพตามอุปกรณ์ โหลดแบบ lazy และจองพื้นที่กัน CLS ส่วน next/font ฝังฟอนต์ไว้กับเว็บและลดการกระพริบตอนสลับฟอนต์ ภาพที่เป็น LCP ควรตั้ง priority เพื่อให้โหลดก่อน และอย่าใส่ lazy กับภาพบนสุดของหน้า`,
            `เรื่อง JavaScript แนวคิดของ Server Components ใน App Router คือให้คอมโพเนนต์ที่ไม่ต้องโต้ตอบรันบนเซิร์ฟเวอร์ ไม่ถูกส่งไปที่เบราว์เซอร์ ให้ใส่ 'use client' เฉพาะส่วนที่ต้องมีสถานะหรือ event จริงๆ ส่วนที่หนักและไม่ต้องเห็นทันที เช่น แผนที่ หรือกราฟ ใช้ dynamic import แยกออกไป และใช้ Suspense เพื่อให้ส่วนที่พร้อมแล้วแสดงก่อน`,
            `สุดท้ายอย่าลืมดูผลของ library ที่ติดตั้ง บางตัวเพิ่มขนาด bundle มากกว่าที่คิด การดู bundle analyzer สักครั้งก่อนปล่อยงานมักพบของที่ตัดทิ้งได้ง่ายๆ`,
          ],
          quote: `ความเร็วไม่ใช่งานที่ทำครั้งเดียวตอนปิดโปรเจกต์ แต่เป็นนิสัยที่ต้องเช็กทุกครั้งที่เพิ่มของใหม่เข้าหน้า`,
        },
        {
          h: `ข้อมูลจากสนามจริง กับข้อมูลจากห้องแล็บ`,
          p: [
            `Lighthouse และเครื่องมืออย่าง PageSpeed Insights ส่วนที่รันทดสอบเอง เป็น lab data คือจำลองอุปกรณ์และเครือข่ายหนึ่งแบบ รันซ้ำได้ เหมาะกับการหาสาเหตุและเทียบก่อนหลังแก้โค้ด แต่ไม่ได้บอกว่าผู้ใช้จริงพบอะไร เพราะคนเปิดเว็บด้วยมือถือรุ่นต่างๆ ผ่าน 4G ที่แรงไม่เท่ากัน`,
            `field data คือข้อมูลที่เก็บจากผู้เข้าชมจริง เช่น รายงาน Core Web Vitals ใน Search Console หรือ Chrome UX Report ซึ่ง Google ใช้ค่าที่เปอร์เซ็นไทล์ 75 ของผู้เข้าชม และเป็นข้อมูลที่ใกล้เคียงกับสิ่งที่นำไปประเมินจริง INP โดยเฉพาะต้องมีการโต้ตอบจริงจึงวัดได้ ถ้าอยากเห็นข้อมูลละเอียดกว่านั้น ติดตั้งไลบรารี web-vitals ส่งค่ากลับมาที่ระบบวิเคราะห์ของเราเองได้`,
            `วิธีทำงานที่ได้ผลคือใช้ field data หาว่าหน้าไหนมีปัญหา ใช้ lab data หาสาเหตุและลองแก้ แล้วกลับไปดู field data อีกรอบหลังปล่อย ซึ่งอาจต้องรอข้อมูลสะสมสักระยะ`,
          ],
        },
      ],
      takeaways: [
        `Core Web Vitals มีสามตัว: LCP วัดความเร็วการแสดงผล CLS วัดความนิ่ง และ INP วัดการตอบสนอง โดย INP แทน FID ตั้งแต่ปี 2024`,
        `ภาพ ฟอนต์ไทย JavaScript และสคริปต์ภายนอก คือสี่จุดที่ควรตรวจก่อน`,
        `ตั้งแคชให้ไฟล์ static และเสิร์ฟหน้าที่ไม่เปลี่ยนบ่อยผ่าน CDN`,
        `บน Next.js ใช้ next/image, next/font, Server Components และ dynamic import ให้เป็นนิสัย`,
        `ใช้ field data หาปัญหา ใช้ lab data หาสาเหตุ แล้วกลับมาเช็ก field data หลังแก้`,
      ],
      figCaption: `แผนภาพตัวชี้วัด LCP, CLS และ INP ตามช่วงเวลาที่ผู้ใช้เปิดหน้าเว็บและโต้ตอบ`,
      faq: [
        {
          q: `คะแนน Lighthouse 100 แปลว่าเว็บเร็วสำหรับผู้ใช้ทุกคนไหม`,
          a: `ไม่เสมอไป Lighthouse จำลองเครื่องและเครือข่ายแบบเดียว ผู้ใช้จริงอาจใช้มือถือรุ่นเก่าและสัญญาณไม่ดี จึงควรดู field data ใน Search Console ประกอบกันเสมอ`,
        },
        {
          q: `ใช้ Next.js แล้วเว็บจะเร็วอัตโนมัติหรือเปล่า`,
          a: `Next.js ให้เครื่องมือที่ดีมาให้ แต่ไม่ได้ทำแทนทั้งหมด ภาพขนาดใหญ่เกินจำเป็น สคริปต์ภายนอกหนักๆ หรือคอมโพเนนต์ฝั่ง client ที่มากเกินไปยังทำให้ช้าได้เหมือนเดิม`,
        },
        {
          q: `ควรเริ่มแก้จากตัวชี้วัดไหนก่อน`,
          a: `ดูรายงานใน Search Console ว่าตัวไหนไม่ผ่านในหน้าที่มีคนเข้ามากที่สุด แล้วเริ่มจากตรงนั้น ในหลายทีม LCP แก้ได้เร็วที่สุดเพราะมักเกี่ยวกับภาพหลักของหน้า`,
        },
      ],
    },
    en: {
      title: `Making Websites Fast: Core Web Vitals Explained, With Next.js Practices`,
      excerpt: `What LCP, CLS and INP measure, where images, fonts and JavaScript add weight, how caching helps, and why field data from real visitors matters alongside Lighthouse.`,
      metaTitle: `Core Web Vitals Explained: LCP, CLS, INP and Speed Tips`,
      metaDescription: `Core Web Vitals (LCP, CLS, INP) explained in plain language, with ways to trim image, font and JavaScript weight, set up caching and apply Next.js best practices.`,
      intro: `A slow site loses people before they ever see the product, and Google treats page experience as one signal when ranking. This article explains the three Core Web Vitals without assuming you are an engineer. Then it walks through what makes pages heavy and how to fix it, with a focus on Next.js.`,
      sections: [
        {
          h: `What Core Web Vitals actually measure`,
          p: [
            `Core Web Vitals are a set of metrics Google defined to describe what real visitors experience. There are three today. LCP, Largest Contentful Paint, measures how long the biggest element in the first screen, usually a hero image or a headline, takes to appear. A good score is 2.5 seconds or less.`,
            `CLS, Cumulative Layout Shift, measures how much content jumps around without the user asking. Picture reaching for a button just as an image loads and pushes it down. A good score is 0.1 or less. INP, Interaction to Next Paint, measures how long the page takes to show a response after someone taps, clicks or types. A good score is 200 milliseconds or less.`,
            `INP replaced FID, First Input Delay, as an official Core Web Vital in 2024. The difference matters: FID only looked at the delay on the first interaction, while INP considers interactions across the whole visit. That makes it much better at catching a menu that freezes or a form that stutters while you type.`,
          ],
        },
        {
          h: `Images, fonts and JavaScript: where the weight comes from`,
          p: [
            `On most sites images are the largest files, and often the LCP element too. A common mistake is uploading a full-size photo straight from a camera or design tool and letting the browser shrink it. Send a size that fits each screen, use modern formats such as WebP or AVIF, and set width and height up front so the layout does not shift.`,
            `Fonts matter as well, especially for Thai sites, where font files are often larger than Latin ones. Load only the weights you use, serve them from your own domain, and set font-display so text appears first and swaps when the font arrives, rather than leaving a blank gap. JavaScript is the main cause of poor INP, because the browser must download, parse and run it before the page can respond.`,
            `Third-party scripts, such as chat widgets, ad tags and analytics, tend to go uncounted even though together they can weigh as much as your own code. Audit them now and then and remove any that nobody uses.`,
          ],
          list: [
            `Images: right-sized, WebP or AVIF, always set width and height`,
            `Fonts: only the weights you need, self-hosted, with font-display set`,
            `JavaScript: ship only what each page uses and defer the rest`,
            `Third-party scripts: load with async or after interaction, and delete unused ones`,
          ],
        },
        {
          h: `Caching: stop doing the same work twice`,
          p: [
            `The fastest way to serve a page is not to build it again. Static files such as images, CSS and JavaScript should carry a long Cache-Control lifetime and a hash in the file name. When the file changes, the name changes, so visitors get the new version immediately without waiting for an old cache to expire.`,
            `For pages whose content does not change every second, such as articles, service pages or product pages, generating them ahead of time and serving them through a CDN means a visitor in Bangkok gets the file from a nearby server instead of a distant origin. It also takes load off your database. Content that changes often can use a short cache lifetime, or you can purge the cache when an editor saves a change.`,
          ],
        },
        {
          h: `Practical habits in Next.js`,
          p: [
            `Next.js already ships tools for most of the above. The next/image component resizes and converts images per device, lazy-loads them and reserves space to prevent layout shift. next/font bundles fonts with your site and reduces the flash when fonts swap. Set priority on the image that is your LCP element, and never lazy-load the top image on a page.`,
            `For JavaScript, the idea behind Server Components in the App Router is that components needing no interaction run on the server and never reach the browser. Add 'use client' only where you truly need state or event handlers. Heavy parts that are not needed immediately, like a map or a chart, can be split out with dynamic import, and Suspense lets finished parts of a page show first.`,
            `Finally, check what your dependencies cost. Some libraries add far more to the bundle than expected, and opening a bundle analyzer once before launch usually reveals something easy to remove.`,
          ],
          quote: `Speed is not a task you finish at launch; it is a habit you check every time something new goes on the page.`,
        },
        {
          h: `Field data versus lab data`,
          p: [
            `Lighthouse, and the test-run part of PageSpeed Insights, produce lab data: one simulated device and network, repeatable on demand. That is ideal for finding causes and comparing before and after a code change. It does not tell you what your visitors experience, because they open your site on many phones over 4G connections of uneven quality.`,
            `Field data comes from real visits, for example the Core Web Vitals report in Search Console or the Chrome UX Report. Google assesses the 75th percentile of visits, and this is the data closest to what is used for evaluation. INP in particular needs real interactions to be measured. For finer detail you can add the web-vitals library and send the values to your own analytics.`,
            `A workflow that works: use field data to find which pages have a problem, use lab data to find the cause and try fixes, then return to field data after release. That last check may need some time for data to accumulate.`,
          ],
        },
      ],
      takeaways: [
        `Core Web Vitals are three: LCP for loading, CLS for stability and INP for responsiveness, with INP replacing FID in 2024.`,
        `Images, Thai font files, JavaScript and third-party scripts are the first four places to look.`,
        `Cache static files for a long time and serve rarely changing pages through a CDN.`,
        `In Next.js, make next/image, next/font, Server Components and dynamic import part of your routine.`,
        `Use field data to find problems, lab data to find causes, then recheck field data after fixing.`,
      ],
      figCaption: `Diagram of LCP, CLS and INP along the timeline of a visitor loading a page and interacting with it.`,
      faq: [
        {
          q: `Does a Lighthouse score of 100 mean the site is fast for everyone?`,
          a: `Not necessarily. Lighthouse simulates a single device and network, while real visitors may use older phones on weak signal. Always check field data in Search Console as well.`,
        },
        {
          q: `Is a Next.js site automatically fast?`,
          a: `Next.js gives you good tools but does not apply them for you. Oversized images, heavy third-party scripts or too many client components can still slow a page down.`,
        },
        {
          q: `Which metric should we fix first?`,
          a: `Check Search Console to see which one fails on your most visited pages and start there. In many teams LCP is the quickest win because it usually comes down to the main image on the page.`,
        },
      ],
    },
  },
  {
    slug: 'build-vs-buy',
    cat: 'Technology',
    date: '2026-09-18',
    readMin: 9,
    tags: ['Build vs Buy', 'Business Software', 'SaaS', 'Custom Software', 'Integration'],
    related: ['legacy-modernization', 'dx-mistakes', 'thailand-pdpa-guide'],
    th: {
      title: `ซื้อระบบสำเร็จรูปหรือสร้างเอง: เลือกซอฟต์แวร์ธุรกิจอย่างไรไม่ให้เสียใจทีหลัง`,
      excerpt: `เปรียบเทียบการซื้อ SaaS กับการพัฒนาเอง ตั้งแต่ต้นทุนที่มองไม่เห็น การเชื่อมระบบ ความเป็นเจ้าของข้อมูล ไปจนถึง checklist ตัดสินใจและทางสายกลางแบบผสม`,
      metaTitle: `Build vs Buy: ซื้อหรือสร้างซอฟต์แวร์ธุรกิจดี`,
      metaDescription: `ซื้อ SaaS หรือจ้างพัฒนาเอง อะไรคุ้มกว่า ดูต้นทุนที่แฝง การเชื่อมระบบ ความเป็นเจ้าของข้อมูล พร้อม checklist ตัดสินใจและแนวทางผสมที่หลายธุรกิจเลือกใช้`,
      intro: `เกือบทุกธุรกิจที่เริ่มโตจะมาถึงจุดที่ต้องถามว่า ระบบนี้ควรซื้อสำเร็จรูปหรือจ้างทำเอง คำตอบไม่ได้ขึ้นกับว่าอันไหนถูกกว่าตอนเซ็นสัญญา แต่ขึ้นกับว่าระบบนั้นสำคัญกับความได้เปรียบของคุณแค่ไหน และคุณพร้อมดูแลมันได้นานเท่าไร บทความนี้ให้กรอบคิดและ checklist ที่ใช้ตัดสินใจได้จริง`,
      sections: [
        {
          h: `คำถามแรก: ระบบนี้คือจุดแข่งขันของคุณหรือเปล่า`,
          p: [
            `ระบบที่ทุกธุรกิจต้องมีเหมือนกัน เช่น บัญชี เงินเดือน อีเมล หรือ CRM แบบพื้นฐาน มักเหมาะกับการซื้อ เพราะผู้ให้บริการทำมาแล้วหลายพันราย ทั้งฟีเจอร์ ความปลอดภัย และการอัปเดต เราไม่ได้ได้เปรียบอะไรจากการเขียนระบบเงินเดือนเอง`,
            `ส่วนระบบที่สะท้อนวิธีทำงานเฉพาะของคุณ เช่น ขั้นตอนประเมินราคางานซ่อมที่ไม่เหมือนใคร หรือประสบการณ์จองคิวที่เป็นจุดขาย ซอฟต์แวร์สำเร็จรูปมักบังคับให้คุณปรับวิธีทำงานให้เข้ากับมัน ตรงนี้การสร้างเองหรือสร้างบนฐานที่ยืดหยุ่นอาจคุ้มกว่า เพราะระบบคือส่วนหนึ่งของธุรกิจ`,
          ],
        },
        {
          h: `ต้นทุนที่มองไม่เห็นของทั้งสองทาง`,
          p: [
            `คนมักเทียบค่าลิขสิทธิ์รายเดือนกับค่าพัฒนาก้อนเดียว ซึ่งไม่ครบภาพ การสร้างเองมีค่าดูแลต่อเนื่อง ทั้งแก้บั๊ก อัปเดตไลบรารี ปะช่องโหว่ ย้ายเซิร์ฟเวอร์ และต้องมีคนที่เข้าใจโค้ดอยู่เสมอ ถ้าคนเดียวที่รู้ระบบลาออก ธุรกิจจะเสี่ยงทันที`,
            `การซื้อก็มีต้นทุนแฝง ราคามักคิดตามจำนวนผู้ใช้หรือปริมาณข้อมูล เมื่อทีมโตค่าใช้จ่ายโตตาม ฟีเจอร์ที่ขาดอาจต้องซื้อโมดูลเสริมหรือจ้างที่ปรึกษาตั้งค่า ค่าอบรมพนักงาน และเวลาที่เสียไปกับการทำงานอ้อมข้อจำกัดของระบบ ควรคำนวณต้นทุนรวมสามถึงห้าปี ไม่ใช่แค่ปีแรก`,
          ],
          list: [
            `สร้างเอง: ดูแลรักษา อัปเดตความปลอดภัย เอกสาร คนที่เข้าใจระบบ ค่าเซิร์ฟเวอร์`,
            `ซื้อ: ค่าต่อผู้ใช้ที่โตตามทีม โมดูลเสริม ค่าตั้งค่า ค่าอบรม และงานอ้อมข้อจำกัด`,
            `ทั้งคู่: เวลาของทีมภายในที่ต้องมาร่วมกำหนดความต้องการและทดสอบ`,
          ],
        },
        {
          h: `การเชื่อมระบบ: จุดที่โครงการมักสะดุด`,
          p: [
            `ระบบใหม่ไม่ได้อยู่ลำพัง ต้องคุยกับบัญชี คลังสินค้า LINE Official Account ระบบชำระเงินอย่าง PromptPay หรือเครื่อง POS ที่มีอยู่ก่อนแล้ว ก่อนตัดสินใจซื้อ ให้ตรวจว่ามี API ที่เอกสารชัดเจนหรือไม่ จำกัดจำนวนการเรียกไหม และการเชื่อมกับระบบที่คุณใช้อยู่ทำได้จริงหรือแค่ในสไลด์ขาย`,
            `ถ้าสร้างเอง ก็ต้องออกแบบจุดเชื่อมให้ดีตั้งแต่ต้นเช่นกัน ข้อมูลที่ถูกคัดลอกไปมาด้วยมือหรือ Excel คือสัญญาณว่าการเชื่อมระบบยังไม่เสร็จ และเป็นแหล่งของความผิดพลาดที่ตามหายากที่สุด`,
          ],
        },
        {
          h: `ความเป็นเจ้าของข้อมูลและการผูกมัดกับผู้ให้บริการ`,
          p: [
            `ข้อมูลลูกค้าและประวัติธุรกิจคือทรัพย์สินของคุณ ก่อนเซ็นสัญญา SaaS ให้ถามว่าส่งออกข้อมูลทั้งหมดได้ในรูปแบบที่เปิดอ่านได้หรือไม่ ทำได้เองหรือต้องขอ และถ้ายกเลิกบริการข้อมูลจะถูกเก็บหรือลบอย่างไร เรื่องนี้เกี่ยวกับ PDPA ด้วย เพราะคุณยังเป็นผู้ควบคุมข้อมูลส่วนบุคคลของลูกค้า แม้ข้อมูลจะอยู่บนระบบของผู้ให้บริการ จึงควรรู้ว่าเก็บที่ไหนและใครเข้าถึงได้`,
            `การสร้างเองก็มีเรื่องความเป็นเจ้าของที่ต้องเขียนให้ชัด คือสัญญาต้องระบุว่าโค้ดต้นฉบับและสิทธิ์ใช้งานเป็นของใคร และคุณเข้าถึง repository กับระบบโฮสต์ได้โดยตรงหรือไม่ ไม่ใช่ต้องพึ่งผู้รับจ้างรายเดียวตลอดไป`,
          ],
          quote: `ระบบที่ดีคือระบบที่คุณเดินออกมาได้ โดยข้อมูลยังอยู่ในมือและธุรกิจไม่สะดุด`,
        },
        {
          h: `Checklist ตัดสินใจ และทางสายกลางแบบผสม`,
          p: [
            `ลองตอบคำถามต่อไปนี้ให้ตรงกับความจริงของทีม ถ้าคำตอบส่วนใหญ่เอียงไปทางไหน ให้เริ่มคิดจากทางนั้น แล้วทดสอบกับตัวอย่างงานจริงก่อนตกลง ไม่ใช่ดูแค่เดโม`,
          ],
          list: [
            `ระบบนี้เป็นจุดที่ลูกค้าเลือกเราแทนคู่แข่งหรือไม่ (ใช่ เอียงไปสร้าง)`,
            `มีสินค้าสำเร็จรูปที่ตอบโจทย์ได้เกือบทั้งหมดโดยไม่ต้องบิดวิธีทำงานมากหรือไม่ (ใช่ เอียงไปซื้อ)`,
            `ทีมมีคนหรือพาร์ทเนอร์ที่ดูแลระบบได้ต่อเนื่องอย่างน้อยสามถึงห้าปีหรือไม่`,
            `ส่งออกข้อมูลทั้งหมดได้และเชื่อมกับระบบที่ใช้อยู่ผ่าน API ได้จริงหรือไม่`,
            `ต้นทุนรวมสามถึงห้าปี รวมค่าดูแลและค่าผู้ใช้ที่โตขึ้น เป็นเท่าไรเมื่อเทียบกัน`,
          ],
        },
        {
          h: `แนวทางผสม: ซื้อฐาน สร้างส่วนที่ต่าง`,
          p: [
            `หลายธุรกิจไม่ต้องเลือกขั้วใดขั้วหนึ่ง วิธีที่ใช้ได้ดีคือซื้อระบบสำเร็จรูปสำหรับงานมาตรฐาน เช่น บัญชีและอีเมล แล้วสร้างเฉพาะส่วนหน้าบ้านหรือส่วนงานที่เป็นจุดต่างของคุณ โดยเชื่อมกับระบบที่ซื้อผ่าน API เช่น เว็บจองคิวของคุณเองที่ดึงข้อมูลจากระบบ CRM`,
            `ข้อดีคือคุณคุมประสบการณ์ลูกค้าเองในจุดที่สำคัญ แต่ไม่ต้องแบกภาระดูแลระบบทั้งหมด ถ้าวันหนึ่งผู้ให้บริการเปลี่ยนราคาหรือคุณอยากย้ายค่าย ส่วนที่คุณสร้างไว้ก็แค่เปลี่ยนจุดเชื่อม ไม่ต้องเริ่มใหม่ทั้งหมด`,
          ],
        },
      ],
      takeaways: [
        `ซื้อสำหรับงานที่ทุกธุรกิจทำเหมือนกัน สร้างสำหรับงานที่เป็นจุดแข่งขันของคุณ`,
        `เทียบต้นทุนรวมสามถึงห้าปี ไม่ใช่ราคาปีแรก และนับค่าดูแลของระบบที่สร้างเองด้วย`,
        `ตรวจ API และการเชื่อมกับระบบที่ใช้อยู่ให้เห็นกับตาก่อนตัดสินใจ`,
        `ยืนยันให้ได้ว่าส่งออกข้อมูลทั้งหมดได้ และสัญญาระบุความเป็นเจ้าของโค้ดชัดเจน`,
        `แนวทางผสม ซื้อฐาน สร้างส่วนที่ต่าง มักยืดหยุ่นและเสี่ยงน้อยกว่า`,
      ],
      figCaption: `แผนภาพเปรียบเทียบงานมาตรฐานที่ควรซื้อ กับงานจุดแข่งขันที่ควรสร้าง และการเชื่อมกันผ่าน API`,
      faq: [
        {
          q: `ธุรกิจขนาดเล็กควรสร้างระบบเองไหม`,
          a: `โดยทั่วไปควรเริ่มจากของสำเร็จรูปก่อน เพราะเริ่มเร็วและเสี่ยงต่ำ แล้วค่อยสร้างเฉพาะส่วนที่ระบบสำเร็จรูปตอบไม่ได้จริงๆ เมื่อธุรกิจเริ่มชัดว่าอะไรคือจุดต่าง`,
        },
        {
          q: `ซื้อระบบไปแล้วแต่ไม่ตรงใจ ย้ายภายหลังยากไหม`,
          a: `ขึ้นกับว่าส่งออกข้อมูลได้ง่ายแค่ไหน และคุณพึ่งฟีเจอร์เฉพาะของระบบนั้นมากเท่าไร จึงควรทดสอบการส่งออกข้อมูลตั้งแต่ช่วงทดลองใช้ ไม่ใช่รอจนอยากย้าย`,
        },
        {
          q: `ระบบที่สร้างเองต้องมีค่าดูแลต่อปีเท่าไร`,
          a: `ไม่มีตัวเลขตายตัว ขึ้นกับขนาดและความซับซ้อนของระบบ แต่ควรตั้งงบดูแลต่อเนื่องไว้ตั้งแต่ต้น ทั้งอัปเดตความปลอดภัย แก้บั๊ก และปรับปรุงตามธุรกิจ แทนที่จะมองว่าจบเมื่อส่งมอบ`,
        },
      ],
    },
    en: {
      title: `Build vs Buy for Business Software: Choosing Without Regret`,
      excerpt: `Buying SaaS versus building your own, compared on hidden costs, integration and data ownership, with a decision checklist and a hybrid approach many businesses use.`,
      metaTitle: `Build vs Buy Software: How to Decide for Your Business`,
      metaDescription: `Buy SaaS or build custom software? Compare hidden costs, integration and data ownership, then use our decision checklist and the hybrid approach many firms choose.`,
      intro: `Almost every growing business reaches the point of asking whether a system should be bought off the shelf or built. The answer rarely depends on which is cheaper on the day you sign. It depends on how much that system matters to your edge, and how long you can realistically look after it. This article offers a way of thinking and a checklist you can actually use.`,
      sections: [
        {
          h: `First question: is this where you compete?`,
          p: [
            `Systems every business needs in the same form, such as accounting, payroll, email or a basic CRM, usually suit buying. The vendor has built them for thousands of customers, with the features, security work and updates that implies. You gain nothing by writing your own payroll system.`,
            `Systems that express how you uniquely work are different. Think of an unusual way of quoting repair jobs, or a booking experience that is part of your pitch. Off-the-shelf software tends to push you to bend your process around it. There, building, or building on a flexible foundation, may pay off, because the system is part of the business itself.`,
          ],
        },
        {
          h: `Hidden costs on both sides`,
          p: [
            `People often compare a monthly licence with a one-time build quote, which misses most of the picture. Custom software has ongoing costs: bug fixes, library updates, security patches, server moves, and someone who understands the code at all times. If the one person who knows the system leaves, the business is exposed immediately.`,
            `Buying has hidden costs too. Pricing often scales with users or data volume, so the bill grows with your team. Missing features may mean paid add-on modules or a consultant to configure them, plus staff training and the time lost working around the tool's limits. Compare total cost over three to five years, not just the first.`,
          ],
          list: [
            `Build: maintenance, security updates, documentation, people who know the system, hosting`,
            `Buy: per-user fees that grow with the team, add-ons, setup fees, training, workarounds`,
            `Both: internal staff time to define requirements and test`,
          ],
        },
        {
          h: `Integration: where projects tend to stall`,
          p: [
            `A new system never lives alone. It has to talk to accounting, inventory, a LINE Official Account, payment channels such as PromptPay, or a POS that is already in the shop. Before buying, check whether the product has a well-documented API, whether calls are rate-limited, and whether the connection to your existing tools works in practice rather than only on a sales slide.`,
            `If you build, integration needs designing from day one as well. Data being copied by hand between systems or spreadsheets is a sign the integration is unfinished, and it is a source of the hardest errors to track down.`,
          ],
        },
        {
          h: `Data ownership and lock-in`,
          p: [
            `Customer data and business history are your assets. Before signing a SaaS contract, ask whether you can export everything in a readable format, whether you can do it yourself or must file a request, and what happens to your data if you cancel. This touches PDPA too: you remain the controller of customers' personal data even when it sits on a vendor's system, so you should know where it is stored and who can reach it.`,
            `Building has its own ownership question that should be written down. The contract should say who owns the source code and the usage rights, and you should have direct access to the repository and hosting accounts, so you are not dependent on a single contractor forever.`,
          ],
          quote: `A good system is one you can walk away from with your data in hand and your business still running.`,
        },
        {
          h: `A decision checklist`,
          p: [
            `Answer these against how your team really works. If most answers lean one way, start thinking from that side, then test with real sample work before committing, not just a demo.`,
          ],
          list: [
            `Is this a place where customers choose us over competitors? (yes leans build)`,
            `Does an existing product cover nearly everything without bending our process much? (yes leans buy)`,
            `Do we have people or a partner who can maintain it for at least three to five years?`,
            `Can we export all our data, and connect to current tools through a real API?`,
            `What is the total three-to-five-year cost of each, including upkeep and growing user fees?`,
          ],
        },
        {
          h: `The hybrid approach: buy the base, build the difference`,
          p: [
            `Many businesses do not have to pick one extreme. A workable pattern is to buy standard systems for standard jobs, like accounting and email, then build only the front end or the workflow that makes you different, connected to the bought system through its API. An example is your own booking site that reads from and writes to a CRM.`,
            `The benefit is that you control the customer experience where it counts without carrying the burden of maintaining everything. If a vendor changes its pricing or you want to switch, the part you built needs a new connection point, not a restart from zero.`,
          ],
        },
      ],
      takeaways: [
        `Buy for work every business does the same way; build for work where you compete.`,
        `Compare total cost over three to five years, and count upkeep for anything you build.`,
        `Verify the API and the connection to your current tools before you decide.`,
        `Confirm you can export all your data and that the contract states who owns the code.`,
        `A hybrid of bought foundations and a custom differentiating layer is often more flexible and less risky.`,
      ],
      figCaption: `Diagram contrasting standard systems worth buying with competitive ones worth building, linked through APIs.`,
      faq: [
        {
          q: `Should a small business build its own system?`,
          a: `Usually start with off-the-shelf, since it is faster and lower risk. Build only the parts the product genuinely cannot handle once you are clear on what makes your business different.`,
        },
        {
          q: `If we buy a system that does not fit, is it hard to move later?`,
          a: `It depends on how easily you can export data and how much you rely on that product's unique features. Test the export during the trial period rather than waiting until you want to leave.`,
        },
        {
          q: `How much does maintaining custom software cost each year?`,
          a: `There is no fixed figure; it depends on the size and complexity of the system. Budget for ongoing security updates, bug fixes and changes from the start, rather than treating delivery as the finish line.`,
        },
      ],
    },
  },
]
