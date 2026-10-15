import type { Article } from '@/lib/blog-types'

export const aiBizArticles: Article[] = [
  {
    slug: 'ai-product-2025',
    cat: 'AI',
    date: '2026-10-05',
    readMin: 9,
    tags: ['AI product', 'LLM', 'evaluation', 'human-in-the-loop', 'AI rollout'],
    related: ['rag-in-production', 'ai-agent-guardrails', 'build-vs-buy'],
    th: {
      title: 'สร้างผลิตภัณฑ์ AI ให้ใช้งานได้จริง: คู่มือสำหรับทีมที่เริ่มต้น',
      excerpt: 'เลือกงานเดียวที่แคบพอ เตรียมข้อมูล สร้างชุดทดสอบ ให้คนช่วยตรวจ คุมต้นทุนและความเร็ว แล้วค่อยปล่อยทีละขั้น นี่คือลำดับที่ช่วยให้ AI ไม่จบแค่เดโม',
      metaTitle: 'สร้างผลิตภัณฑ์ AI ให้ใช้งานได้จริง | Haliviq',
      metaDescription: 'คู่มือสร้างผลิตภัณฑ์ AI ที่ใช้งานได้จริง ตั้งแต่เลือกงานให้แคบ เตรียมข้อมูล ทำ evaluation set ให้คนตรวจ คุมต้นทุนและ latency ไปจนถึงการ rollout',
      intro: 'หลายทีมทำเดโม AI ได้สวยภายในหนึ่งสัปดาห์ แต่พอเอาไปให้ลูกค้าหรือพนักงานใช้จริงกลับพบคำตอบแปลก ๆ ค่าใช้จ่ายบานปลาย และไม่มีใครกล้าปล่อยเต็มรูปแบบ บทความนี้เรียงลำดับสิ่งที่ควรทำก่อนหลัง เพื่อให้ผลิตภัณฑ์ AI ของคุณผ่านจากเดโมไปสู่การใช้งานประจำวันได้จริง',
      sections: [
        {
          h: 'เริ่มจากงานเดียวที่แคบและวัดผลได้',
          p: [
            'ความผิดพลาดที่พบบ่อยที่สุดคือเริ่มจากโจทย์กว้าง ๆ เช่น "ทำแชตบอทที่ตอบได้ทุกเรื่อง" โจทย์แบบนี้ไม่มีเส้นชัยที่ชัดเจน เลยไม่รู้ว่าเมื่อไหร่ถึงจะเรียกว่าดีพอ ลองเปลี่ยนเป็นงานเดียวที่มีคนทำอยู่แล้ว เช่น "ร่างคำตอบแรกให้ทีมซัพพอร์ตที่ตอบแชต LINE" หรือ "สรุปใบเสนอราคา PDF ให้ฝ่ายขายอ่านใน 30 วินาที"',
            'งานที่ดีสำหรับเริ่มต้นมักมีลักษณะเดียวกัน คือทำซ้ำบ่อย มีตัวอย่างของงานที่ทำเสร็จแล้วให้เทียบ และถ้าผิดบ้างก็ไม่เสียหายหนัก เพราะมีคนตรวจต่อ พอเลือกงานได้แล้วให้เขียนเกณฑ์สำเร็จเป็นประโยคเดียวที่วัดได้ เช่น ลดเวลาร่างคำตอบจากสิบนาทีเหลือสามนาที โดยหัวหน้าทีมยังรับคำตอบได้เหมือนเดิม',
          ],
          list: [
            'ระบุว่าใครเป็นผู้ใช้ และงานนี้ตอนนี้ทำกันอย่างไร',
            'เขียนเกณฑ์ว่าอะไรคือ "ดีพอ" ก่อนเริ่มเขียนโค้ด',
            'ตัดฟีเจอร์ที่ไม่เกี่ยวกับงานหลักออกไปก่อน เอาไว้เฟสถัดไป',
          ],
        },
        {
          h: 'ข้อมูลพร้อมแค่ไหน ตรวจก่อนลงมือ',
          p: [
            'โมเดลภาษาเก่งแค่ไหนก็ตอบจากสิ่งที่มันเห็น ถ้าเอกสารภายในของคุณกระจัดกระจาย ล้าสมัย หรือขัดแย้งกันเอง ผลลัพธ์ก็จะสะท้อนความรกนั้น ก่อนทำอะไรให้ลองเปิดข้อมูลจริงสักยี่สิบชิ้นมาอ่านเอง แล้วถามตัวเองว่าพนักงานใหม่อ่านแล้วจะตอบลูกค้าได้ถูกไหม',
            'ต้องคิดเรื่องสิทธิ์และความเป็นส่วนตัวตั้งแต่ต้น ข้อมูลลูกค้าที่ส่งออกไปให้บริการโมเดลภายนอกต้องผ่านการพิจารณาตาม PDPA ว่ามีฐานทางกฎหมายและมีการป้องกันที่เหมาะสมหรือยัง ข้อมูลบางประเภทควรถูกตัดหรือปิดบังก่อนส่ง และบางงานอาจเหมาะกับการรันในสภาพแวดล้อมที่คุมได้มากกว่า',
          ],
        },
        {
          h: 'สร้างชุดทดสอบ (evaluation set) ก่อนปรับอะไรทั้งนั้น',
          p: [
            'ถ้าไม่มีชุดทดสอบ ทุกครั้งที่ปรับ prompt จะรู้สึกว่า "ดีขึ้น" แต่พิสูจน์ไม่ได้ และอาจทำของเดิมที่เคยถูกกลับพังโดยไม่รู้ตัว วิธีเริ่มง่ายที่สุดคือเก็บคำถามหรืออินพุตจริงห้าสิบถึงร้อยตัวอย่าง พร้อมคำตอบที่คนในทีมเห็นพ้องว่าถูก แล้วรันซ้ำทุกครั้งที่เปลี่ยนอะไร',
            'อย่าลืมใส่กรณียากเข้าไปด้วย เช่น คำถามที่คลุมเครือ ข้อความภาษาไทยปนอังกฤษ คำสะกดผิด หรือคำถามที่เอกสารไม่มีคำตอบเลย ซึ่งโมเดลควรบอกว่าไม่ทราบแทนที่จะเดา เมื่อเวลาผ่านไป ให้เพิ่มกรณีที่ผู้ใช้จริงทำให้ระบบพลาดลงในชุดนี้ มันจะกลายเป็นหน่วยความจำของทีมว่าเคยพลาดตรงไหน',
          ],
          quote: 'สิ่งที่วัดไม่ได้ ก็ปรับให้ดีขึ้นไม่ได้เช่นกัน มีแต่ความรู้สึกว่าดีขึ้น',
        },
        {
          h: 'ให้คนอยู่ในลูป และออกแบบจุดที่คนเข้ามาตรวจ',
          p: [
            'ในช่วงแรกให้ AI เป็นผู้ร่าง และให้คนเป็นผู้ตัดสิน เช่น AI ร่างอีเมลตอบลูกค้า พนักงานกดแก้หรือส่ง ข้อดีคือคุณได้ข้อมูลว่าพนักงานแก้ตรงไหนบ่อย ซึ่งเป็นสัญญาณที่ดีที่สุดว่าต้องปรับอะไร',
            'UX ของจุดตรวจสำคัญพอ ๆ กับโมเดล ถ้าคนต้องอ่านยาวหรือหาที่มาเอง เขาจะกดอนุมัติโดยไม่อ่านภายในสัปดาห์ที่สอง ลองแสดงแหล่งอ้างอิง ไฮไลต์ส่วนที่โมเดลไม่มั่นใจ และทำให้การแก้ไขใช้เวลาไม่กี่วินาที เมื่อระบบแม่นยำสม่ำเสมอแล้วค่อยพิจารณาให้บางหมวดงานผ่านอัตโนมัติ โดยยังสุ่มตรวจต่อเนื่อง',
          ],
        },
        {
          h: 'ต้นทุนและความเร็ว คำนวณตั้งแต่ก่อนปล่อย',
          p: [
            'ค่าใช้จ่ายของ AI ผูกกับปริมาณข้อความที่ส่งเข้าและออก ดังนั้นเดโมที่ใช้ไม่กี่ร้อยครั้งต่อวันอาจดูถูก แต่เมื่อผู้ใช้เพิ่มเป็นสิบเท่ากลับไม่ใช่ ให้ประมาณต้นทุนต่อหนึ่งงานที่สำเร็จ แล้วเทียบกับเวลาหรือเงินที่ประหยัดได้จริง ถ้าตัวเลขสองฝั่งไม่คุ้ม ก็ควรรู้ตั้งแต่ตอนนี้',
            'ความเร็วก็เป็นส่วนหนึ่งของประสบการณ์ ผู้ใช้ยอมรอได้ถ้าเห็นความคืบหน้า เช่น ข้อความที่ค่อย ๆ ไหลออกมา แต่ไม่ยอมรอหน้าจอว่างสิบวินาที วิธีที่ใช้บ่อยคือเลือกโมเดลเล็กสำหรับงานง่าย โมเดลใหญ่สำหรับงานยาก ใช้ caching กับคำถามซ้ำ และตัด context ที่ไม่จำเป็นออกจากทุกคำขอ',
          ],
        },
        {
          h: 'ปล่อยทีละขั้น และเฝ้าดูหลังปล่อย',
          p: [
            'เริ่มจากกลุ่มเล็ก ๆ ที่เป็นมิตร เช่น ทีมภายในหรือลูกค้าไม่กี่ราย แล้วค่อยขยาย ใส่ปุ่มให้ผู้ใช้ให้คะแนนหรือรายงานคำตอบที่ผิดได้ในคลิกเดียว และเตรียมวิธีปิดฟีเจอร์ทันทีถ้าเกิดปัญหา โดยไม่ต้อง deploy ใหม่',
            'หลังปล่อยงานยังไม่จบ ข้อมูลที่ผู้ใช้ป้อนจะเปลี่ยนไปเรื่อย ๆ โมเดลก็ถูกอัปเดต ดังนั้นควรมี dashboard ดูอัตราที่พนักงานแก้คำตอบ ต้นทุนต่อวัน และเวลาตอบ แล้วรันชุดทดสอบเป็นประจำเพื่อจับความเสื่อมถอยเร็วที่สุด',
          ],
        },
      ],
      takeaways: [
        'เริ่มจากงานเดียวที่แคบ มีคนทำอยู่แล้ว และเขียนเกณฑ์ว่า "ดีพอ" ให้ชัด',
        'ตรวจคุณภาพและสิทธิ์ของข้อมูลก่อน รวมถึงข้อกำหนด PDPA',
        'สร้าง evaluation set จากกรณีจริงและกรณียาก แล้วรันซ้ำทุกครั้งที่ปรับ',
        'ให้ AI ร่างและให้คนตัดสินในช่วงแรก พร้อมออกแบบจุดตรวจให้เร็วและอ่านง่าย',
        'คำนวณต้นทุนต่องาน ปล่อยทีละกลุ่ม และเฝ้าดูหลังปล่อยอย่างต่อเนื่อง',
      ],
      figCaption: 'ลำดับการสร้างผลิตภัณฑ์ AI: เลือกงาน เตรียมข้อมูล ทดสอบ ให้คนตรวจ แล้วปล่อยทีละขั้น',
      faq: [
        {
          q: 'ต้องมีข้อมูลมากแค่ไหนถึงเริ่มทำ AI ได้',
          a: 'หลายงานเริ่มได้ด้วยเอกสารและตัวอย่างจริงไม่กี่สิบถึงไม่กี่ร้อยชิ้น ที่สำคัญกว่าปริมาณคือความถูกต้องและความเป็นปัจจุบันของข้อมูล ลองเริ่มจากชุดเล็กที่คุณมั่นใจ แล้วค่อยขยาย',
        },
        {
          q: 'ควรใช้ API ของผู้ให้บริการโมเดล หรือรันโมเดลเอง',
          a: 'ส่วนใหญ่เริ่มจาก API เพราะเร็วและทดลองง่าย แล้วค่อยพิจารณารันเองถ้ามีข้อจำกัดเรื่องข้อมูลหรือปริมาณใช้งานสูงมาก ควรออกแบบให้เปลี่ยนโมเดลได้ภายหลังโดยไม่ต้องเขียนใหม่ทั้งระบบ',
        },
        {
          q: 'จะรู้ได้อย่างไรว่าถึงเวลาลดการตรวจโดยคน',
          a: 'ดูจากชุดทดสอบและอัตราที่พนักงานแก้คำตอบในงานจริงว่าต่ำและนิ่งต่อเนื่องหลายสัปดาห์ แล้วเริ่มผ่อนเฉพาะหมวดงานความเสี่ยงต่ำก่อน พร้อมสุ่มตรวจต่อ',
        },
      ],
    },
    en: {
      title: 'How to Build an AI Product That Actually Works: A Practical Guide',
      excerpt: 'Pick one narrow job, check your data, build an evaluation set, keep a human in the loop, watch cost and latency, and roll out in steps. That order keeps AI from stalling at the demo.',
      metaTitle: 'How to Build an AI Product That Works | Haliviq',
      metaDescription: 'A practical guide to building AI products that work: pick a narrow job, check your data, build evaluation sets, add human review, control cost and roll out.',
      intro: 'Plenty of teams build a good-looking AI demo in a week, then watch it fall apart with real users: odd answers, a growing bill, and nobody willing to switch it on for everyone. This guide puts the work in the order that tends to carry a product from demo to daily use.',
      sections: [
        {
          h: 'Start with one narrow job you can measure',
          p: [
            'The most common mistake is starting with a broad brief like "build a chatbot that answers everything". There is no finish line, so nobody can say when it is good enough. Swap it for a job someone already does, such as "draft a first reply for the support team answering LINE chats" or "summarise a PDF quotation so sales can read it in 30 seconds".',
            'Good starter jobs share a pattern. They repeat often, there are finished examples to compare against, and a mistake is cheap because a person checks the output next. Once you have the job, write the success test as one measurable sentence, for example: drafting time drops from ten minutes to three, and the team lead accepts the draft as often as before.',
          ],
          list: [
            'Name the user and describe how the job is done today.',
            'Write down what "good enough" means before writing code.',
            'Cut anything unrelated to the core job and save it for a later phase.',
          ],
        },
        {
          h: 'Check data readiness before you build',
          p: [
            'A language model answers from what it can see. If your internal documents are scattered, out of date or contradict each other, the output will reflect that mess. Before building anything, read twenty real documents yourself and ask whether a new hire could answer a customer correctly from them.',
            'Think about permissions and privacy from day one. Customer data sent to an outside model provider needs a PDPA review: is there a lawful basis, and are the safeguards appropriate? Some fields should be removed or masked before sending, and some jobs may suit an environment you control more tightly.',
          ],
        },
        {
          h: 'Build an evaluation set before you tune anything',
          p: [
            'Without a test set, every prompt change feels like an improvement and none can be proven. Worse, a tweak can quietly break something that worked. The simplest start is to collect fifty to a hundred real inputs with answers your team agrees are correct, and rerun them after every change.',
            'Include the hard cases: vague questions, Thai mixed with English, typos, and questions the documents cannot answer, where the right output is "I don\'t know" rather than a guess. Over time, add every case where real users caught the system out. The set becomes the team\'s memory of past failures.',
          ],
          quote: 'What you cannot measure you cannot improve, you can only feel that it improved.',
        },
        {
          h: 'Keep a human in the loop, and design the review step',
          p: [
            'In the early phase, let the AI draft and let a person decide. The model drafts a customer email, and a staff member edits or sends it. The bonus is data: where staff keep editing is the clearest signal of what to fix next.',
            'The review UX matters as much as the model. If people must read long text or hunt for sources, they will click approve without reading by week two. Show citations, highlight the parts the model was unsure about, and make edits take seconds. Once accuracy is steady, consider letting low-risk categories pass automatically while you keep sampling them.',
          ],
        },
        {
          h: 'Work out cost and latency before launch',
          p: [
            'AI cost follows the amount of text going in and out. A demo with a few hundred calls a day looks cheap, and the same product with ten times the users may not be. Estimate the cost per completed job and compare it with the time or money saved; if the two sides do not add up, better to learn that now.',
            'Speed is part of the experience too. Users will wait if they see progress, such as text streaming in, but not for a blank screen. Common tactics are a small model for easy jobs and a larger one for hard jobs, caching repeated questions, and trimming context that the request does not need.',
          ],
        },
        {
          h: 'Roll out in steps and keep watching',
          p: [
            'Start with a small, friendly group, such as an internal team or a few customers, then widen. Add a one-click way to rate or report a bad answer, and have a switch that turns the feature off immediately without a new deployment.',
            'Launch is not the end. User inputs drift and models get updated, so keep a dashboard for how often staff edit answers, daily cost and response time, and rerun the evaluation set on a schedule to catch decline early.',
          ],
        },
      ],
      takeaways: [
        'Start with one narrow job that people already do, with a written definition of "good enough".',
        'Check data quality and permissions first, including PDPA obligations.',
        'Build an evaluation set from real and hard cases, and rerun it after every change.',
        'Let AI draft and people decide at first, with a review step that is quick and readable.',
        'Estimate cost per job, release to small groups, and keep monitoring after launch.',
      ],
      figCaption: 'The order for building an AI product: choose the job, prepare data, test, add human review, roll out in steps',
      faq: [
        {
          q: 'How much data do I need to start?',
          a: 'Many jobs can start with a few dozen to a few hundred real documents and examples. Accuracy and freshness matter more than volume, so begin with a small set you trust and grow it.',
        },
        {
          q: 'Should we use a model provider\'s API or run a model ourselves?',
          a: 'Most teams start with an API because it is fast to try, then consider self-hosting if data rules or very high volume demand it. Design the system so the model can be swapped later without a rewrite.',
        },
        {
          q: 'How do we know when to reduce human review?',
          a: 'Look at your evaluation set and at how often staff edit answers in live use. When both stay low and steady for several weeks, relax review for low-risk categories first and keep sampling.',
        },
      ],
    },
  },
  {
    slug: 'rag-in-production',
    cat: 'AI',
    date: '2026-09-24',
    readMin: 9,
    tags: ['RAG', 'retrieval', 'hybrid search', 'LLM evaluation', 'AI in production'],
    related: ['ai-product-2025', 'ai-agent-guardrails', 'thailand-pdpa-guide'],
    th: {
      title: 'RAG ใน production: สิ่งที่เดโมไม่เคยบอก',
      excerpt: 'RAG ตอบดีในเดโม แต่พอใช้จริงมักพลาดที่การแบ่งเอกสารและการค้นหา เรื่องที่ควรจัดการคือ chunking, hybrid search, การอ้างอิงแหล่งที่มา และวงจรการวัดผล',
      metaTitle: 'RAG ใน production: chunking, search, การวัดผล',
      metaDescription: 'อธิบาย RAG ใน production ตั้งแต่ chunking คุณภาพการค้นหา hybrid search การอ้างอิงแหล่งที่มา วงจร evaluation และความล้มเหลวที่พบบ่อยหลังเดโมแรก',
      intro: 'Retrieval-augmented generation หรือ RAG คือการให้โมเดลภาษาค้นเอกสารของคุณก่อนตอบ เดโมแรก ๆ มักดูดีเพราะใช้เอกสารสะอาดและคำถามง่าย แต่พอพบเอกสารจริงและผู้ใช้จริง ปัญหาจะโผล่ บทความนี้พูดถึงจุดที่ทีมมักสะดุดหลังเดโม และวิธีรับมือแบบลงมือทำได้',
      sections: [
        {
          h: 'RAG ทำงานอย่างไรแบบสั้น ๆ',
          p: [
            'ขั้นตอนพื้นฐานมีสามอย่าง ได้แก่ แบ่งเอกสารเป็นชิ้นเล็ก ๆ แล้วเก็บเป็น index เมื่อผู้ใช้ถามก็ค้นหาชิ้นที่เกี่ยวข้อง และส่งชิ้นเหล่านั้นให้โมเดลเรียบเรียงเป็นคำตอบ ข้อดีคือคำตอบอิงกับเอกสารที่คุณควบคุมได้ และอัปเดตความรู้ได้โดยไม่ต้องฝึกโมเดลใหม่',
            'ข้อที่หลายคนมองข้ามคือ โมเดลตอบได้ดีเท่ากับเอกสารที่ค้นพบเท่านั้น ถ้าค้นไม่พบชิ้นที่ถูก โมเดลที่เก่งที่สุดก็ช่วยไม่ได้ ดังนั้นเวลาแก้ปัญหา ให้ตรวจที่การค้นหาก่อนเสมอ ไม่ใช่เปลี่ยนโมเดลเป็นอย่างแรก',
          ],
        },
        {
          h: 'Chunking: แบ่งเอกสารให้ตรงกับวิธีที่คนถาม',
          p: [
            'ถ้าชิ้นเล็กเกินไป ประโยคสำคัญจะขาดบริบท ถ้าใหญ่เกินไป เนื้อหาไม่เกี่ยวข้องจะปนเข้ามาและทำให้การค้นหาไม่แม่น หลักที่ใช้ได้ดีคือแบ่งตามโครงสร้างของเอกสาร เช่น หัวข้อ ข้อกำหนด หรือแถวในตาราง แล้วแนบหัวข้อและชื่อเอกสารไปกับทุกชิ้นด้วย',
            'ภาษาไทยมีข้อควรระวังเพิ่ม เพราะไม่มีช่องว่างระหว่างคำ ตัวตัดคำหรือ tokenizer ที่ไม่เหมาะจะทำให้การค้นแบบคีย์เวิร์ดพลาดได้ ควรลองค้นด้วยคำถามไทยจริง ๆ หลายแบบ รวมถึงคำสะกดผิดและคำที่ใช้ปนอังกฤษ เช่น "รีเฟรช token" แล้วดูว่าได้ชิ้นที่ต้องการหรือไม่',
          ],
          list: [
            'แบ่งตามหัวข้อหรือโครงสร้างจริง ไม่ใช่ตัดตามจำนวนตัวอักษรอย่างเดียว',
            'แนบชื่อเอกสาร หัวข้อ และวันที่ปรับปรุงไปกับทุก chunk',
            'ทดสอบด้วยคำถามไทยที่ผู้ใช้จริงพิมพ์ ไม่ใช่คำถามที่ทีมเขียนเอง',
          ],
        },
        {
          h: 'คุณภาพการค้นหา: เริ่มจาก hybrid search',
          p: [
            'การค้นด้วย embedding เข้าใจความหมายได้ดี แต่บางครั้งพลาดรหัสสินค้า เลขมาตรา หรือชื่อเฉพาะ ส่วนการค้นแบบคีย์เวิร์ดแม่นเรื่องคำตรงตัวแต่ไม่เข้าใจคำพ้องความหมาย การใช้ทั้งสองแบบร่วมกัน หรือ hybrid search มักให้ผลดีกว่าใช้แบบเดียวในงานจริง',
            'หลังได้ผู้สมัครหลายสิบชิ้น ให้ใช้ขั้น rerank เพื่อคัดเหลือชิ้นที่เกี่ยวข้องที่สุดไม่กี่ชิ้นก่อนส่งให้โมเดล วิธีนี้ช่วยทั้งความแม่นและต้นทุน เพราะส่งข้อความน้อยลง และอย่าลืมใส่ตัวกรองตามสิทธิ์ผู้ใช้ เพื่อไม่ให้คนเห็นเอกสารที่ไม่ควรเห็นผ่านคำตอบของ AI',
          ],
        },
        {
          h: 'การอ้างอิงแหล่งที่มา ทำให้ตรวจสอบได้',
          p: [
            'คำตอบที่ไม่บอกที่มาทำให้ผู้ใช้ต้องเชื่อหรือไม่เชื่อแบบเดาเอา ให้แสดงชื่อเอกสาร หัวข้อ และลิงก์ไปยังต้นฉบับกำกับทุกประโยคหลัก ผู้ใช้จะตรวจเองได้เร็ว และทีมก็ debug ได้ง่ายขึ้นว่าคำตอบมาจากชิ้นไหน',
            'อีกเรื่องที่ต้องทำคือสอนระบบให้ปฏิเสธเป็น ถ้าชิ้นที่ค้นพบไม่มีคำตอบ ควรตอบว่าไม่พบข้อมูลในเอกสารที่มี และชี้ทางไปหาคนที่ช่วยได้ แทนที่จะแต่งคำตอบที่ฟังดูมั่นใจ',
          ],
          quote: 'คำตอบที่ฟังดูมั่นใจแต่ไม่มีที่มา อันตรายกว่าคำว่า "ยังไม่พบข้อมูล"',
        },
        {
          h: 'วงจรการวัดผล: แยกวัดการค้นหากับการตอบ',
          p: [
            'ควรวัดสองชั้นแยกกัน ชั้นแรกคือการค้นหา ว่าชิ้นที่ถูกอยู่ในผลลัพธ์ห้าอันดับแรกหรือไม่ ชั้นที่สองคือคำตอบ ว่าตรงกับเอกสารและครบถ้วนหรือไม่ ถ้ารวมเป็นคะแนนเดียวจะไม่รู้ว่าต้องแก้ตรงไหน',
            'เก็บคำถามจริงจาก log พร้อมปุ่มให้ผู้ใช้กดว่าตอบถูกหรือไม่ แล้วให้คนในทีมทบทวนกรณีที่พลาดเป็นประจำ ทุกกรณีที่พลาดควรกลายเป็นข้อทดสอบใหม่ วงจรนี้คือสิ่งที่ทำให้ระบบดีขึ้นทีละเล็กทีละน้อยแทนที่จะแย่ลงเงียบ ๆ',
          ],
        },
        {
          h: 'ความล้มเหลวที่พบหลังเดโม',
          p: [
            'ปัญหาที่พบบ่อยคือเอกสารซ้ำซ้อนหรือเวอร์ชันเก่าค้างอยู่ใน index ทำให้ระบบตอบนโยบายที่ยกเลิกไปแล้ว ไฟล์ PDF ที่เป็นภาพสแกนหรือตารางซับซ้อนที่แปลงเป็นข้อความผิดเพี้ยน และคำถามที่ต้องรวมข้อมูลจากหลายเอกสารซึ่ง RAG แบบพื้นฐานทำได้ไม่ดี',
            'วิธีรับมือคือกำหนดเจ้าของเอกสารและรอบการอัปเดต index ให้ชัด ตรวจผลการแปลงไฟล์ก่อนนำเข้า และสำหรับคำถามซับซ้อนให้แตกเป็นคำถามย่อยหลายรอบ หรือบอกผู้ใช้ตรง ๆ ว่าควรถามผู้เชี่ยวชาญ พร้อมเฝ้าดูต้นทุนและเวลาตอบ เพราะการค้นหลายรอบทำให้ทั้งสองอย่างเพิ่มขึ้น',
          ],
        },
      ],
      takeaways: [
        'ปัญหาส่วนใหญ่ของ RAG อยู่ที่การค้นหา ไม่ใช่ตัวโมเดล ตรวจตรงนี้ก่อนเสมอ',
        'แบ่ง chunk ตามโครงสร้างเอกสาร แนบบริบท และทดสอบกับคำถามไทยจริง',
        'ใช้ hybrid search ร่วมกับ rerank และกรองตามสิทธิ์ผู้ใช้',
        'แสดงแหล่งอ้างอิงทุกคำตอบ และให้ระบบตอบว่า "ไม่พบ" ได้',
        'วัดการค้นหากับการตอบแยกกัน และเปลี่ยนทุกกรณีที่พลาดเป็นข้อทดสอบ',
      ],
      figCaption: 'ลำดับของ RAG: แบ่งเอกสาร ค้นหา คัดอันดับ ตอบพร้อมอ้างอิง และวัดผลกลับเข้าวงจร',
      faq: [
        {
          q: 'RAG กับการ fine-tune ต่างกันอย่างไร',
          a: 'RAG ดึงความรู้จากเอกสารมาให้โมเดลตอนตอบ จึงอัปเดตง่ายและอ้างอิงที่มาได้ ส่วน fine-tune ปรับพฤติกรรมหรือสไตล์ของโมเดล และไม่เหมาะกับการฝากข้อเท็จจริงที่เปลี่ยนบ่อย หลายทีมใช้ RAG เป็นหลักก่อน',
        },
        {
          q: 'ต้องใช้ vector database โดยเฉพาะไหม',
          a: 'ไม่จำเป็นเสมอไป ถ้าเอกสารไม่มาก ฐานข้อมูลที่ใช้อยู่แล้วที่รองรับการค้นเวกเตอร์และคีย์เวิร์ดก็เพียงพอ ควรเลือกตามขนาดข้อมูลและความสามารถของทีมในการดูแล',
        },
        {
          q: 'จะลดคำตอบที่แต่งขึ้นเองได้อย่างไร',
          a: 'ให้โมเดลตอบจากชิ้นที่ค้นพบเท่านั้น บังคับให้อ้างอิงแหล่งที่มา และกำหนดให้ตอบว่าไม่พบข้อมูลเมื่อหลักฐานไม่พอ พร้อมวัดด้วยชุดทดสอบที่มีคำถามที่เอกสารไม่มีคำตอบ',
        },
      ],
    },
    en: {
      title: 'RAG in Production: What the Demo Never Tells You',
      excerpt: 'RAG answers well in a demo, then stumbles on real documents and real users. Here is how to handle chunking, hybrid search, citations and an evaluation loop that keeps it honest.',
      metaTitle: 'RAG in Production: Chunking, Search, Evaluation',
      metaDescription: 'How to run RAG in production: chunking, retrieval quality, hybrid search, citations, an evaluation loop and the failure modes teams hit after the first demo.',
      intro: 'Retrieval-augmented generation, or RAG, means the model searches your documents before it answers. Early demos look good because the documents are clean and the questions are easy. With real files and real users the problems appear, and this article covers where teams usually trip and what to do about it.',
      sections: [
        {
          h: 'How RAG works, in short',
          p: [
            'There are three basic steps. Split documents into small pieces and store them in an index, find the pieces relevant to a user\'s question, and hand those pieces to the model to write the answer. The benefit is that answers are grounded in documents you control, and you can update knowledge without retraining a model.',
            'What many people miss is that the model can only be as good as what was retrieved. If the right piece is not found, the best model cannot save the answer. So when debugging, check retrieval first rather than swapping the model.',
          ],
        },
        {
          h: 'Chunking: split documents the way people ask questions',
          p: [
            'Pieces that are too small lose context around the key sentence. Pieces that are too large drag in unrelated text and blur the search. A reliable approach is to split along the document\'s own structure, such as headings, clauses or table rows, and attach the heading and document title to every piece.',
            'Thai needs extra care because words are not separated by spaces. A poor word segmenter or tokenizer can break keyword search. Try several real Thai queries, including typos and mixed-language phrases like "รีเฟรช token", and check whether the right piece comes back.',
          ],
          list: [
            'Split by headings or real structure, not by character count alone.',
            'Attach the document title, section heading and last-updated date to each chunk.',
            'Test with questions real users type, not ones the team wrote.',
          ],
        },
        {
          h: 'Retrieval quality: start with hybrid search',
          p: [
            'Embedding search understands meaning but can miss product codes, section numbers and proper names. Keyword search is precise on exact terms but blind to synonyms. Combining the two, usually called hybrid search, tends to beat either one alone on real workloads.',
            'After pulling a few dozen candidates, add a rerank step that keeps only the handful that matter before they reach the model. It improves accuracy and cuts cost because less text is sent. Also filter by the user\'s permissions so nobody sees a document through the AI that they could not open directly.',
          ],
        },
        {
          h: 'Citations make answers checkable',
          p: [
            'An answer with no source forces users to trust or distrust it by guesswork. Show the document name, section and a link to the original next to each main claim. Users can verify quickly, and your team can see which piece produced the answer when something goes wrong.',
            'Also teach the system to decline. If the retrieved pieces do not contain the answer, it should say it found nothing in the available documents and point to a person who can help, instead of writing something that sounds sure.',
          ],
          quote: 'A confident answer with no source is more dangerous than an honest "I found nothing".',
        },
        {
          h: 'The evaluation loop: measure retrieval and answers separately',
          p: [
            'Measure two layers apart. The first is retrieval: is the right piece in the top five results? The second is the answer: is it faithful to the documents and complete? One blended score hides where to fix things.',
            'Collect real questions from your logs, add a thumbs up or down button, and review the misses regularly. Every miss should become a new test case. That loop is what makes the system improve a little each week instead of degrading silently.',
          ],
        },
        {
          h: 'Failure modes after the demo',
          p: [
            'Common ones include duplicate or outdated files left in the index so the system quotes a policy that was withdrawn, scanned PDFs and complex tables that convert to garbled text, and questions that need facts from several documents, which basic RAG handles poorly.',
            'The fixes are plain. Assign an owner and an update schedule for each document set, inspect file conversion before ingesting, split complex questions into sub-questions or tell the user to ask a specialist, and watch cost and response time, since multi-step retrieval raises both.',
          ],
        },
      ],
      takeaways: [
        'Most RAG problems are retrieval problems, so check retrieval before touching the model.',
        'Chunk along document structure, keep context with each piece, and test with real Thai queries.',
        'Use hybrid search with reranking, and filter by user permissions.',
        'Show sources on every answer and let the system say "not found".',
        'Measure retrieval and answers separately, and turn every miss into a test case.',
      ],
      figCaption: 'The RAG flow: split documents, search, rerank, answer with citations, and feed results back into evaluation',
      faq: [
        {
          q: 'How is RAG different from fine-tuning?',
          a: 'RAG fetches knowledge from documents at answer time, so it is easy to update and can cite sources. Fine-tuning changes a model\'s behaviour or style and is a poor place to store facts that change often. Many teams start with RAG.',
        },
        {
          q: 'Do we need a dedicated vector database?',
          a: 'Not always. With a modest document set, a database you already run that supports vector and keyword search may be enough. Choose based on data size and how much your team can maintain.',
        },
        {
          q: 'How do we reduce made-up answers?',
          a: 'Make the model answer only from retrieved pieces, require citations, and instruct it to say nothing was found when evidence is thin. Test this with questions your documents cannot answer.',
        },
      ],
    },
  },
  {
    slug: 'ai-regulation-world',
    cat: 'AI',
    date: '2026-09-10',
    readMin: 9,
    tags: ['AI regulation', 'EU AI Act', 'AI governance', 'Thailand AI', 'PDPA'],
    related: ['thailand-pdpa-guide', 'ai-product-2025', 'ai-agent-guardrails'],
    th: {
      title: 'กฎหมาย AI ทั่วโลกกำลังไปทางไหน และธุรกิจไทยควรเตรียมตัวอย่างไร',
      excerpt: 'แต่ละประเทศคุม AI ต่างกัน แต่แนวคิดหลักคล้ายกัน คือดูตามระดับความเสี่ยง บทความนี้สรุปพื้นฐาน EU AI Act แนวทางรายอุตสาหกรรม และสิ่งที่ธุรกิจไทยควรเริ่มทำ',
      metaTitle: 'กฎหมาย AI ทั่วโลก และสิ่งที่ธุรกิจไทยควรทำ',
      metaDescription: 'สรุปแนวทางควบคุม AI ทั่วโลก แนวคิดตามความเสี่ยงของ EU AI Act แนวทางรายอุตสาหกรรม กรอบสมัครใจ และสิ่งที่ธุรกิจไทยควรเตรียม ทั้งเอกสาร ข้อมูล และคนตรวจ',
      intro: 'ตอนนี้แทบทุกประเทศกำลังหาวิธีดูแลการใช้ AI แต่ไม่ได้ใช้วิธีเดียวกัน บางที่ออกกฎหมายกลาง บางที่ใช้แนวทางรายอุตสาหกรรม บางที่เน้นกรอบที่ทำตามโดยสมัครใจ บทความนี้อธิบายแนวคิดพื้นฐานที่ค่อนข้างนิ่ง เพื่อให้ธุรกิจไทยรู้ว่าควรเตรียมอะไรได้เลย โดยรายละเอียดทางกฎหมายควรตรวจสอบกฎล่าสุดและปรึกษาผู้เชี่ยวชาญอีกครั้ง',
      sections: [
        {
          h: 'แนวคิดร่วมที่หลายประเทศใช้: ดูตามระดับความเสี่ยง',
          p: [
            'แทนที่จะห้ามหรืออนุญาต AI ทั้งหมดเหมือนกันหมด หลายประเทศใช้หลักว่ายิ่งผลกระทบต่อสิทธิ์ ความปลอดภัย หรือโอกาสของคนมาก ยิ่งต้องมีมาตรการเข้มขึ้น ตัวอย่างเช่น AI ที่แนะนำเพลงมีความเสี่ยงต่ำ ส่วน AI ที่ช่วยตัดสินใจเรื่องสินเชื่อหรือการจ้างงานมีผลต่อชีวิตคนโดยตรง จึงควรถูกตรวจสอบมากกว่า',
            'หลักคิดนี้ช่วยให้ธุรกิจจัดลำดับความสำคัญได้ง่าย ไม่ต้องทำเอกสารหนักกับทุกฟีเจอร์ แต่ให้ใช้แรงกับจุดที่ผลกระทบสูงจริง ๆ',
          ],
        },
        {
          h: 'EU AI Act พื้นฐานที่ควรรู้',
          p: [
            'สหภาพยุโรปมีกฎหมาย AI ฉบับกลางที่เรียกว่า EU AI Act ซึ่งแบ่งระบบ AI ตามความเสี่ยงเป็นหลายระดับ ระดับที่ยอมรับไม่ได้ถูกห้าม ระดับความเสี่ยงสูงต้องมีการบริหารความเสี่ยง เอกสารทางเทคนิค ข้อมูลที่มีคุณภาพ และการกำกับดูแลโดยคน ระดับที่มีความเสี่ยงจำกัดมักต้องแจ้งให้ผู้ใช้รู้ว่ากำลังคุยกับ AI และส่วนที่ความเสี่ยงต่ำแทบไม่มีข้อบังคับเพิ่ม',
            'กฎหมายนี้อาจเกี่ยวกับธุรกิจไทยได้ เช่น ถ้าคุณให้บริการหรือส่งผลิตภัณฑ์ที่ใช้ AI ให้ลูกค้าในยุโรป รายละเอียดและกำหนดการบังคับใช้เป็นเรื่องที่ควรตรวจสอบจากแหล่งทางการหรือที่ปรึกษากฎหมายเป็นระยะ เพราะมีการทยอยบังคับใช้ตามหมวด',
          ],
          list: [
            'ความเสี่ยงที่ยอมรับไม่ได้: ห้ามใช้',
            'ความเสี่ยงสูง: ต้องมีเอกสาร การทดสอบ และคนกำกับ',
            'ความเสี่ยงจำกัด: ต้องมีความโปร่งใส เช่น แจ้งว่าเป็น AI',
            'ความเสี่ยงต่ำ: ใช้ได้โดยมีข้อบังคับน้อย',
          ],
        },
        {
          h: 'แนวทางรายอุตสาหกรรม และกรอบที่ทำตามโดยสมัครใจ',
          p: [
            'ไม่ใช่ทุกประเทศที่มีกฎหมาย AI ฉบับเดียว บางประเทศให้หน่วยงานกำกับของแต่ละอุตสาหกรรม เช่น การเงิน สุขภาพ หรือการโฆษณา ออกแนวทางของตัวเอง โดยใช้กฎหมายเดิมที่มีอยู่ เช่น กฎหมายคุ้มครองผู้บริโภคหรือข้อมูลส่วนบุคคลมาบังคับกับ AI ด้วย ธุรกิจที่อยู่ในอุตสาหกรรมที่มีผู้กำกับดูแลอยู่แล้วจึงควรดูแนวทางของหน่วยงานนั้นก่อน',
            'ควบคู่กันมีกรอบสมัครใจที่ได้รับความนิยม เช่น กรอบบริหารความเสี่ยง AI ของหน่วยงานด้านมาตรฐานในสหรัฐฯ และมาตรฐานสากลเรื่องระบบบริหารจัดการ AI แม้ไม่ใช่ข้อบังคับ แต่ช่วยให้ธุรกิจมีโครงสร้างในการจัดการ และตอบคำถามจากลูกค้าองค์กรหรือคู่ค้าได้ดีขึ้น',
          ],
          quote: 'กฎจะเปลี่ยนได้เสมอ แต่ทีมที่จดบันทึกการตัดสินใจของตัวเองไว้ จะปรับตัวได้เร็วกว่า',
        },
        {
          h: 'ธุรกิจไทยควรเริ่มจากเอกสารและบัญชีรายการ AI',
          p: [
            'ขั้นแรกที่ทำได้ทันทีคือทำรายการว่าองค์กรใช้ AI ที่ไหนบ้าง ทั้งที่ทีมพัฒนาเองและเครื่องมือที่พนักงานใช้ เช่น แชตบอท ระบบคัดกรองใบสมัคร หรือเครื่องมือเขียนข้อความ แต่ละรายการให้จดวัตถุประสงค์ ผู้รับผิดชอบ ข้อมูลที่ใช้ ผู้ให้บริการโมเดล และความเสี่ยงที่ประเมินไว้',
            'เอกสารเหล่านี้ไม่ต้องหรูหรา ไฟล์ตารางที่อัปเดตสม่ำเสมอก็เริ่มได้ แต่เมื่อมีคนถามว่าระบบนี้ทำงานอย่างไรและใครรับผิดชอบ คุณจะตอบได้ทันที ซึ่งเป็นสิ่งที่ทั้งผู้กำกับดูแลและลูกค้าองค์กรมักอยากเห็น',
          ],
        },
        {
          h: 'เรื่องข้อมูล: PDPA ยังเป็นฐานสำคัญ',
          p: [
            'ในประเทศไทย กฎหมายที่เกี่ยวกับ AI อย่างตรงที่สุดในทางปฏิบัติตอนนี้ยังเป็น PDPA เพราะ AI ส่วนใหญ่ใช้ข้อมูลส่วนบุคคล ควรทบทวนว่าคุณเก็บข้อมูลอะไรไปป้อนระบบ มีฐานทางกฎหมายหรือความยินยอมหรือไม่ แจ้งวัตถุประสงค์ชัดเจนไหม และส่งข้อมูลให้ผู้ให้บริการภายนอกหรือข้ามประเทศภายใต้เงื่อนไขที่เหมาะสมหรือเปล่า',
            'นอกจากนี้ควรดูที่มาของข้อมูลที่ใช้ปรับหรือทดสอบโมเดล และมีกระบวนการรับคำขอจากเจ้าของข้อมูล เช่น ขอลบหรือขอแก้ไข ซึ่งต้องออกแบบให้ใช้ได้จริงกับระบบ AI ของคุณด้วย',
          ],
        },
        {
          h: 'การกำกับดูแลโดยคน และการติดตามกฎ',
          p: [
            'ทุกกรอบที่กล่าวมาเน้นตรงกันว่าการตัดสินใจที่กระทบคนมากควรมีคนตรวจสอบได้ ให้กำหนดว่าใครมีอำนาจยกเลิกหรือแก้ผลลัพธ์ของ AI ผู้ใช้ปลายทางมีช่องทางโต้แย้งหรือขอให้คนตรวจซ้ำได้อย่างไร และเก็บ log เพื่อย้อนดูเหตุผลได้',
            'สุดท้าย กฎเรื่อง AI ยังเปลี่ยนเร็ว ให้มอบหมายคนหนึ่งคนติดตามประกาศจากหน่วยงานที่เกี่ยวข้องในไทยและตลาดที่คุณขายของ และทบทวนบัญชีรายการ AI อย่างน้อยปีละครั้ง',
          ],
        },
      ],
      takeaways: [
        'หลายประเทศใช้แนวคิดเดียวกัน คือยิ่งกระทบคนมาก ยิ่งต้องควบคุมมาก',
        'EU AI Act แบ่งความเสี่ยงเป็นหลายระดับ และอาจเกี่ยวกับธุรกิจไทยที่ให้บริการในยุโรป',
        'เริ่มทำบัญชีรายการ AI ที่ใช้ในองค์กร พร้อมผู้รับผิดชอบและความเสี่ยง',
        'PDPA ยังเป็นกฎหมายที่เกี่ยวข้องมากที่สุดสำหรับข้อมูลที่ใช้กับ AI',
        'วางจุดที่คนตรวจและแก้ผลของ AI ได้ และตรวจกฎล่าสุดเป็นประจำ',
      ],
      figCaption: 'ระดับความเสี่ยงของ AI ตั้งแต่ความเสี่ยงต่ำไปจนถึงที่ยอมรับไม่ได้ และมาตรการที่เพิ่มขึ้นตามระดับ',
      faq: [
        {
          q: 'ประเทศไทยมีกฎหมาย AI โดยเฉพาะแล้วหรือยัง',
          a: 'สถานการณ์เปลี่ยนเร็ว จึงควรตรวจจากประกาศของหน่วยงานรัฐล่าสุดทุกครั้ง ณ ตอนนี้ในทางปฏิบัติ ธุรกิจยังต้องปฏิบัติตามกฎหมายที่มีอยู่ เช่น PDPA และกฎหมายคุ้มครองผู้บริโภค รวมถึงแนวทางของผู้กำกับดูแลในอุตสาหกรรมของตัวเอง',
        },
        {
          q: 'ธุรกิจขนาดเล็กต้องทำเอกสารมากแค่ไหน',
          a: 'เริ่มจากน้อยได้ ตารางรายการ AI ที่ใช้ ผู้รับผิดชอบ ข้อมูลที่เกี่ยวข้อง และกฎว่าอะไรต้องให้คนตรวจ ก็ถือเป็นพื้นฐานที่ดีแล้ว ปริมาณเอกสารควรเพิ่มตามความเสี่ยงของงานนั้น',
        },
        {
          q: 'ถ้าใช้ AI ของผู้ให้บริการภายนอก ยังต้องรับผิดชอบเองไหม',
          a: 'โดยทั่วไปองค์กรที่นำ AI ไปใช้กับลูกค้าหรือพนักงานยังต้องรับผิดชอบต่อผลที่เกิดขึ้น ควรอ่านเงื่อนไขของผู้ให้บริการเรื่องการใช้ข้อมูล และทำสัญญาให้ชัดเจนว่าใครรับผิดชอบอะไร',
        },
      ],
    },
    en: {
      title: 'How Governments Are Approaching AI Rules, and What Thai Businesses Should Do Now',
      excerpt: 'Countries regulate AI differently, but one idea repeats: scale the rules to the risk. EU AI Act basics, sector guidance, voluntary frameworks and a starting list for Thai teams.',
      metaTitle: 'AI Regulation Worldwide: What Thai Firms Should Do',
      metaDescription: 'How governments regulate AI: risk-based rules, EU AI Act basics, sector guidance, voluntary frameworks, and steps Thai businesses can take now.',
      intro: 'Almost every country is working out how to oversee AI, and they are not doing it the same way. Some write one central law, some lean on sector regulators, and some publish frameworks that companies follow voluntarily. This article covers the fairly stable basics so Thai businesses know what to prepare, and the legal details should always be checked against current rules and a qualified adviser.',
      sections: [
        {
          h: 'The shared idea: match the rules to the risk',
          p: [
            'Rather than treating all AI the same, many governments reason that the more a system can affect people\'s rights, safety or opportunities, the stronger the safeguards should be. A tool that recommends songs is low risk. A tool that helps decide who gets a loan or a job interview affects lives directly and deserves more scrutiny.',
            'This helps businesses set priorities. You do not need heavy paperwork for every feature, only real effort where the impact is highest.',
          ],
        },
        {
          h: 'EU AI Act basics worth knowing',
          p: [
            'The European Union has a central AI law, the EU AI Act, which sorts AI systems into risk tiers. Unacceptable uses are banned. High-risk systems need risk management, technical documentation, good-quality data and human oversight. Limited-risk systems mostly need transparency, such as telling users they are talking to an AI, and minimal-risk uses face little extra regulation.',
            'It can matter to a Thai company, for example if you sell a product with AI features to customers in Europe. Details and timelines are phased in by category, so check official sources or a legal adviser from time to time.',
          ],
          list: [
            'Unacceptable risk: prohibited.',
            'High risk: documentation, testing and human oversight required.',
            'Limited risk: transparency duties, such as disclosing AI.',
            'Minimal risk: few added rules.',
          ],
        },
        {
          h: 'Sector guidance and voluntary frameworks',
          p: [
            'Not every country has a single AI statute. Some let regulators in finance, health or advertising issue their own guidance and apply existing laws, such as consumer protection and data protection, to AI. If you work in a regulated industry, start with what your sector regulator has said.',
            'Alongside this sit voluntary frameworks, such as the AI risk management framework from a US standards body and the international standard for AI management systems. They are not mandatory, but they give you a structure and make it easier to answer questions from corporate customers and partners.',
          ],
          quote: 'Rules will keep changing, but a team that writes down its own decisions adapts faster.',
        },
        {
          h: 'Thai businesses: start with documentation and an AI inventory',
          p: [
            'The first step you can take today is a list of where your organisation uses AI, both what your team builds and tools staff already use, like chatbots, CV screeners or writing assistants. For each, record the purpose, the owner, the data involved, the model provider and the risk you assessed.',
            'This does not have to be fancy. A spreadsheet that is kept current will do. When someone asks how a system works and who is responsible, you can answer at once, and regulators and enterprise customers tend to want exactly that.',
          ],
        },
        {
          h: 'Data: PDPA remains the foundation',
          p: [
            'In Thailand, the law that bites hardest on AI in practice is still the PDPA, since most AI systems touch personal data. Review what data you feed in, whether you have a lawful basis or consent, whether you state the purpose clearly, and whether sending data to outside providers or across borders is done under suitable conditions.',
            'Also look at where data used for tuning or testing came from, and have a process for data subject requests such as deletion or correction. That process must actually work with your AI systems, not only with your main database.',
          ],
        },
        {
          h: 'Human oversight and keeping up with changes',
          p: [
            'Every framework above agrees that decisions with a large effect on people should be reviewable by a person. Decide who can override or correct the AI\'s output, how an affected user can contest a result or ask for human review, and keep logs so you can reconstruct the reasoning.',
            'Finally, AI rules are still moving. Give one person the job of tracking announcements from relevant Thai authorities and from the markets you sell into, and review your AI inventory at least once a year.',
          ],
        },
      ],
      takeaways: [
        'Many countries share one idea: the more a system affects people, the stricter the rules.',
        'The EU AI Act uses risk tiers and can reach Thai companies that serve European customers.',
        'Start an inventory of AI use with owners, data and assessed risk.',
        'PDPA is still the most relevant law for the data used with AI.',
        'Define where humans can review and override AI, and check current rules regularly.',
      ],
      figCaption: 'AI risk tiers from minimal to unacceptable, with obligations growing at each level',
      faq: [
        {
          q: 'Does Thailand have a dedicated AI law yet?',
          a: 'The situation changes quickly, so check the latest announcements from Thai authorities each time. In practice today, businesses still need to follow existing laws such as the PDPA and consumer protection rules, plus guidance from their own sector regulator.',
        },
        {
          q: 'How much documentation does a small business need?',
          a: 'Start small. A table listing each AI tool, its owner, the data involved and a rule for what needs human review is a good base. Add more paperwork as the risk of the use case rises.',
        },
        {
          q: 'If we use a third-party AI service, are we still responsible?',
          a: 'Generally, the organisation that deploys AI to customers or staff remains accountable for the outcome. Read the provider\'s data terms and make your contract clear about who is responsible for what.',
        },
      ],
    },
  },
  {
    slug: 'ai-agent-guardrails',
    cat: 'AI',
    date: '2026-08-27',
    readMin: 9,
    tags: ['AI agents', 'guardrails', 'permissions', 'audit log', 'AI safety'],
    related: ['ai-product-2025', 'rag-in-production', 'passkeys-passwordless'],
    th: {
      title: 'Guardrails สำหรับ AI agent ที่ลงมือทำงานจริง',
      excerpt: 'เมื่อ AI ไม่ได้แค่ตอบ แต่ส่งอีเมล แก้ข้อมูล หรือจ่ายเงินได้ ต้องมีรั้วกั้น บทความนี้พูดถึงสิทธิ์ ขั้นอนุมัติ log การย้อนกลับ สภาพแวดล้อมทดสอบ และการเฝ้าดู',
      metaTitle: 'Guardrails สำหรับ AI agent: สิทธิ์ อนุมัติ log',
      metaDescription: 'วิธีวางระบบกันพลาดให้ AI agent ที่ลงมือทำงานจริง ตั้งแต่จำกัดสิทธิ์ ขั้นอนุมัติ การเก็บ log การทำให้ย้อนกลับได้ สภาพแวดล้อมทดสอบ ไปจนถึงการเฝ้าดู',
      intro: 'AI agent ต่างจากแชตบอททั่วไปตรงที่มันเรียกใช้เครื่องมือได้ เช่น ส่งอีเมล สร้างออเดอร์ หรือแก้ข้อมูลในระบบ นั่นทำให้ความผิดพลาดเดียวมีผลจริง บทความนี้เสนอชุดมาตรการป้องกันที่ใช้ได้กับทีมทั่วไป โดยไม่ต้องรอให้เกิดเหตุก่อน',
      sections: [
        {
          h: 'ให้สิทธิ์น้อยที่สุดเท่าที่งานต้องการ',
          p: [
            'หลักข้อแรกคือ least privilege agent ที่ตอบคำถามเรื่องสถานะออเดอร์ควรอ่านข้อมูลออเดอร์ได้ แต่ไม่ควรมีสิทธิ์ลบหรือคืนเงิน ให้สร้างบัญชีหรือ API key เฉพาะสำหรับ agent แทนการใช้บัญชีของพนักงานคนใดคนหนึ่ง เพื่อจำกัดขอบเขตและตรวจสอบย้อนหลังได้ง่าย',
            'แยกเครื่องมือเป็นกลุ่มอ่านอย่างเดียวกับกลุ่มที่เปลี่ยนแปลงข้อมูล แล้วเปิดกลุ่มที่เปลี่ยนแปลงให้เท่าที่จำเป็น พร้อมวงเงินและเงื่อนไข เช่น คืนเงินได้ไม่เกินจำนวนที่กำหนดต่อรายการ',
          ],
        },
        {
          h: 'ใส่ขั้นอนุมัติตรงจุดที่เสี่ยง',
          p: [
            'ไม่ใช่ทุกการกระทำต้องให้คนกดอนุมัติ ถ้าทุกอย่างต้องรออนุมัติ agent ก็ไม่ช่วยให้เร็วขึ้น ให้จัดกลุ่มตามความเสี่ยง การอ่านและการร่างผ่านได้เลย ส่วนการส่งข้อความออกนอกองค์กร การเปลี่ยนข้อมูลลูกค้า และการเกี่ยวข้องกับเงิน ควรหยุดรอคนยืนยัน',
            'หน้าจออนุมัติควรบอกให้ชัดว่า agent จะทำอะไร กับข้อมูลชิ้นไหน เพราะอะไร และจะเกิดอะไรขึ้นถ้ากดอนุมัติ ถ้าข้อมูลไม่พอให้ตัดสินใจ คนจะกดผ่านตามความเคยชิน และขั้นอนุมัติก็ไร้ความหมาย',
          ],
          list: [
            'ผ่านอัตโนมัติ: อ่านข้อมูล ร่างข้อความ สรุป',
            'ต้องอนุมัติ: ส่งข้อความออกภายนอก แก้ข้อมูลลูกค้า ทำรายการเกี่ยวกับเงิน',
            'ห้ามทำเลย: ลบข้อมูลถาวร เปลี่ยนสิทธิ์ผู้ใช้',
          ],
        },
        {
          h: 'เก็บ log ให้ย้อนดูได้ทุกก้าว',
          p: [
            'ทุกครั้งที่ agent ทำอะไร ให้บันทึกว่าได้รับคำสั่งอะไร คิดอย่างไรโดยสรุป เรียกเครื่องมือไหนด้วยพารามิเตอร์อะไร ได้ผลอย่างไร และใครอนุมัติ เมื่อมีเรื่องผิดปกติคุณจะไล่ย้อนได้ในไม่กี่นาที แทนที่จะเดาจากเหตุการณ์ปลายทาง',
            'ระวังอย่าเก็บข้อมูลส่วนบุคคลใน log เกินความจำเป็น ให้ปิดบังข้อมูลอ่อนไหว กำหนดระยะเวลาเก็บ และจำกัดว่าใครเปิดดู log ได้ ตามหลัก PDPA',
          ],
        },
        {
          h: 'ทำให้การกระทำย้อนกลับได้',
          p: [
            'ออกแบบให้ agent ทำสิ่งที่ย้อนกลับได้ก่อน เช่น ทำเป็นสถานะร่างหรือรอยืนยัน แทนที่จะลบหรือส่งทันที ระบบที่มี soft delete, ประวัติเวอร์ชัน และปุ่มยกเลิกภายในช่วงเวลาหนึ่ง จะเปลี่ยนความผิดพลาดร้ายแรงให้เป็นเรื่องแก้ได้',
            'สำหรับการกระทำที่ย้อนกลับไม่ได้ เช่น อีเมลที่ส่งออกไปแล้ว ให้ถ่วงเวลาสั้น ๆ ก่อนส่ง หรือบังคับให้ผ่านขั้นอนุมัติเสมอ',
          ],
          quote: 'ถ้ากดผิดแล้วย้อนไม่ได้ ให้ถามก่อนทำ ถ้าย้อนได้ ค่อยทำแล้วแจ้งทีหลัง',
        },
        {
          h: 'ทดสอบใน sandbox ก่อนแตะของจริง',
          p: [
            'สร้างสภาพแวดล้อมทดสอบที่มีข้อมูลจำลองและเครื่องมือจำลอง เช่น อีเมลที่ไม่ส่งออกจริง ระบบชำระเงินโหมดทดสอบ แล้วให้ agent รันสถานการณ์หลายแบบ รวมถึงกรณีที่ผู้ใช้พยายามหลอกให้ทำเกินสิทธิ์ หรือเอกสารที่ฝังคำสั่งแอบแฝงไว้ (prompt injection)',
            'ชุดสถานการณ์เหล่านี้ควรรันซ้ำทุกครั้งที่เปลี่ยน prompt เครื่องมือ หรือโมเดล เช่นเดียวกับการทำ regression test ในซอฟต์แวร์ทั่วไป',
          ],
        },
        {
          h: 'เฝ้าดูหลังเปิดใช้ และเตรียมปุ่มหยุดฉุกเฉิน',
          p: [
            'ตั้ง dashboard และการแจ้งเตือนสำหรับสัญญาณผิดปกติ เช่น จำนวนการเรียกเครื่องมือต่อชั่วโมงที่พุ่งขึ้น agent วนทำซ้ำไม่จบ อัตราการถูกปฏิเสธในขั้นอนุมัติที่สูงผิดปกติ หรือค่าใช้จ่ายที่เพิ่มเร็ว พร้อมตั้งเพดานจำนวนก้าวและค่าใช้จ่ายต่อหนึ่งงาน',
            'เตรียมสวิตช์หยุด agent ได้ทันทีโดยไม่ต้อง deploy ใหม่ และฝึกซ้อมว่าใครมีหน้าที่กดและแจ้งใคร เมื่อเกิดเหตุจะได้ไม่ต้องหาวิธีตอนที่กำลังวุ่น',
          ],
        },
      ],
      takeaways: [
        'ให้ agent มีสิทธิ์น้อยที่สุดเท่าที่งานต้องการ ผ่านบัญชีหรือ key เฉพาะของมัน',
        'ใส่ขั้นอนุมัติเฉพาะการกระทำที่เสี่ยง และออกแบบหน้าอนุมัติให้ตัดสินใจได้จริง',
        'บันทึก log ครบทุกก้าว แต่ปิดบังข้อมูลส่วนบุคคลและจำกัดผู้เข้าถึง',
        'ออกแบบให้ย้อนกลับได้ และถ่วงเวลาหรือขออนุมัติก่อนทำสิ่งที่ย้อนไม่ได้',
        'ทดสอบใน sandbox เฝ้าดูหลังเปิดใช้ และมีปุ่มหยุดฉุกเฉิน',
      ],
      figCaption: 'ชั้นป้องกันของ AI agent: สิทธิ์จำกัด ขั้นอนุมัติ log การย้อนกลับ และการเฝ้าดู',
      faq: [
        {
          q: 'prompt injection คืออะไร และป้องกันอย่างไร',
          a: 'คือการซ่อนคำสั่งไว้ในข้อความหรือเอกสารที่ agent อ่าน เพื่อหลอกให้ทำสิ่งที่ไม่ควรทำ การป้องกันที่ได้ผลที่สุดคือจำกัดสิทธิ์และให้คนอนุมัติการกระทำเสี่ยง เพราะการพึ่งให้โมเดลแยกแยะเองอย่างเดียวไม่พอ',
        },
        {
          q: 'ควรให้ agent ทำงานอัตโนมัติเต็มรูปแบบเมื่อไหร่',
          a: 'เมื่อการกระทำนั้นความเสี่ยงต่ำ ย้อนกลับได้ และมีผลทดสอบที่ดีต่อเนื่อง เริ่มจากงานที่คนตรวจผ่านเกือบทุกครั้ง แล้วค่อยขยายทีละประเภท',
        },
        {
          q: 'ทีมเล็กควรเริ่มจากข้อไหนก่อน',
          a: 'เริ่มจากการจำกัดสิทธิ์ ขั้นอนุมัติสำหรับการกระทำที่เสี่ยง และ log เพราะทั้งสามอย่างทำได้ไม่ยากและลดความเสียหายได้มากที่สุด',
        },
      ],
    },
    en: {
      title: 'Guardrails for AI Agents That Take Real Actions',
      excerpt: 'Once an AI can send emails, edit records or move money, it needs fences. This covers permissions, approval steps, logging, reversible actions, test environments and monitoring.',
      metaTitle: 'AI Agent Guardrails: Permissions, Approvals, Logs',
      metaDescription: 'Guardrails for AI agents that act for real: least-privilege permissions, approval steps, audit logs, reversible actions, sandbox testing and monitoring.',
      intro: 'An AI agent differs from an ordinary chatbot because it can call tools: send an email, create an order, change a record. One mistake therefore has real consequences. This article lays out a set of safeguards an ordinary team can put in place before something goes wrong, not after.',
      sections: [
        {
          h: 'Give the minimum permissions the job needs',
          p: [
            'The first rule is least privilege. An agent that answers order-status questions should be able to read orders, but not delete them or issue refunds. Create a dedicated account or API key for the agent rather than borrowing a staff member\'s login, which keeps the scope narrow and makes the trail easy to audit.',
            'Split tools into read-only and state-changing groups, and enable the changing ones only as needed, with limits and conditions attached. For example, refunds up to a set amount per transaction.',
          ],
        },
        {
          h: 'Put approval steps where the risk is',
          p: [
            'Not every action needs a human click. If everything waits for approval, the agent saves no time. Sort actions by risk: reading and drafting go straight through, while sending messages outside the company, changing customer data and anything involving money should pause for a person.',
            'The approval screen should say what the agent will do, to which record, why, and what happens if you approve. When people lack the information to decide, they approve by habit, and the step turns into theatre.',
          ],
          list: [
            'Automatic: read data, draft text, summarise.',
            'Needs approval: send external messages, edit customer records, anything with money.',
            'Never allowed: permanent deletion, changing user permissions.',
          ],
        },
        {
          h: 'Log every step so you can replay it',
          p: [
            'Each time the agent acts, record the instruction it received, a short summary of its reasoning, which tool it called with which parameters, the result, and who approved. When something odd happens you can trace it in minutes instead of guessing from the final symptom.',
            'Be careful not to log more personal data than needed. Mask sensitive fields, set a retention period, and limit who can read the logs, in line with PDPA principles.',
          ],
        },
        {
          h: 'Make actions reversible',
          p: [
            'Design the agent to do reversible things first, such as creating a draft or a pending state instead of deleting or sending at once. Systems with soft delete, version history and an undo window turn a serious mistake into a fixable one.',
            'For actions that cannot be undone, like an email that has left the building, add a short delay before sending or always require approval.',
          ],
          quote: 'If a mistake cannot be undone, ask first. If it can, act and tell afterwards.',
        },
        {
          h: 'Test in a sandbox before touching the real system',
          p: [
            'Build a test environment with fake data and fake tools, such as email that is never delivered and a payment system in test mode. Run the agent through many scenarios, including users who try to push it past its permissions and documents with hidden instructions inside them, known as prompt injection.',
            'Rerun these scenarios whenever you change a prompt, a tool or the model, just as you would run regression tests on ordinary software.',
          ],
        },
        {
          h: 'Monitor after launch and keep an emergency stop',
          p: [
            'Set up dashboards and alerts for warning signs: tool calls per hour spiking, an agent looping without finishing, an unusual rate of rejected approvals, or costs climbing fast. Also cap the number of steps and the spend allowed for a single task.',
            'Keep a switch that stops the agent immediately without a new deployment, and rehearse who presses it and who gets told. During an incident is the wrong moment to work that out.',
          ],
        },
      ],
      takeaways: [
        'Give the agent minimum permissions through its own account or key.',
        'Require approval only for risky actions, and design the approval screen so people can really decide.',
        'Log every step, but mask personal data and restrict who can read the logs.',
        'Prefer reversible actions, and delay or require approval for irreversible ones.',
        'Test in a sandbox, monitor after launch, and keep an emergency stop.',
      ],
      figCaption: 'Layers of protection around an AI agent: limited permissions, approvals, logs, reversibility and monitoring',
      faq: [
        {
          q: 'What is prompt injection and how do we defend against it?',
          a: 'It is hidden instructions placed in text or documents an agent reads, meant to trick it into doing something it should not. The strongest defence is limiting permissions and requiring human approval for risky actions, because relying on the model to spot every trick is not enough.',
        },
        {
          q: 'When can an agent run fully automatically?',
          a: 'When the action is low risk, reversible and has a good, steady test record. Start with tasks that people approve almost every time, then widen one category at a time.',
        },
        {
          q: 'Where should a small team start?',
          a: 'With restricted permissions, approval for risky actions and logging. All three are straightforward and cut the most potential damage.',
        },
      ],
    },
  },
  {
    slug: 'dx-mistakes',
    cat: 'Business',
    date: '2026-09-26',
    readMin: 8,
    tags: ['digital transformation', 'change management', 'data quality', 'business strategy', 'IT budget'],
    related: ['legacy-modernization', 'build-vs-buy', 'ux-research'],
    th: {
      title: '7 ข้อผิดพลาดที่ทำให้ Digital Transformation ล้มเหลว',
      excerpt: 'ซื้อเครื่องมือก่อนรู้ปัญหา ไม่มีเจ้าของ ทำใหญ่ทีเดียว ไม่ฟังพนักงาน ข้อมูลรก วัดผลผิดอย่าง และไม่เผื่องบหลังใช้งาน นี่คือ 7 กับดักที่พบบ่อยและวิธีเลี่ยง',
      metaTitle: '7 ข้อผิดพลาดที่ทำให้ Digital Transformation ล้ม',
      metaDescription: '7 ข้อผิดพลาดที่ทำให้ Digital Transformation ล้มเหลว เช่น ซื้อเครื่องมือก่อนรู้ปัญหา ไม่มีเจ้าของ ทำ big bang ข้อมูลรก และไม่เผื่องบดูแลระบบ พร้อมวิธีเลี่ยง',
      intro: 'โครงการ digital transformation จำนวนมากไม่ได้ล้มเพราะเทคโนโลยีไม่ดี แต่ล้มเพราะการตัดสินใจรอบ ๆ มัน เช่น เริ่มผิดที่ ไม่มีคนรับผิดชอบ หรือหมดงบทันทีที่ระบบขึ้นใช้งาน บทความนี้รวบรวมความผิดพลาดเจ็ดข้อที่พบบ่อยในองค์กรทุกขนาด พร้อมวิธีป้องกันที่ทำได้จริง',
      sections: [
        {
          h: 'ข้อ 1 และ 2: ซื้อเครื่องมือก่อนรู้ปัญหา และไม่มีเจ้าของ',
          p: [
            'ข้อแรกคือเริ่มจากเครื่องมือ เช่น "เราต้องมี ERP" หรือ "เราต้องมี AI" ทั้งที่ยังไม่ได้ระบุว่าปัญหาจริงคืออะไร ผลคือได้ระบบที่ฟีเจอร์มากแต่ไม่ตรงกับงานที่ทีมทำทุกวัน ให้เริ่มจากการเขียนปัญหาเป็นประโยคเดียว เช่น "ใบเสนอราคาใช้เวลาสามวันกว่าจะถึงลูกค้า" แล้วค่อยหาเครื่องมือที่แก้ตรงนั้น',
            'ข้อสองคือไม่มีเจ้าของ โครงการที่ทุกแผนกเป็นเจ้าของร่วมกันมักจบลงด้วยการที่ไม่มีใครเป็นเจ้าของเลย ควรมีคนหนึ่งคนที่มีอำนาจตัดสินใจและรับผิดชอบผลลัพธ์ทางธุรกิจ ไม่ใช่แค่ดูแลทางเทคนิค และต้องได้รับเวลาจากงานประจำเพื่อทำเรื่องนี้จริง ๆ',
          ],
        },
        {
          h: 'ข้อ 3: ทำแบบ big bang',
          p: [
            'การเปลี่ยนทุกระบบพร้อมกันในวันเดียวฟังดูเด็ดขาด แต่ความเสี่ยงสูงมาก ถ้ามีจุดผิดพลาดเพียงจุดเดียว ทั้งองค์กรจะหยุดชะงัก และไม่มีทางถอยกลับง่าย ๆ',
            'ทางที่ปลอดภัยกว่าคือแบ่งเป็นขั้นเล็ก ๆ เลือกแผนกหรือกระบวนการหนึ่งเป็นตัวนำร่อง เรียนรู้จากมัน ปรับ แล้วจึงขยาย ระหว่างนั้นให้ระบบเก่ากับใหม่ทำงานคู่กันช่วงหนึ่ง เพื่อให้มีทางถอยถ้าพบปัญหา',
          ],
          quote: 'ระบบที่คนใช้ครึ่งเดียวทุกวัน ดีกว่าระบบสมบูรณ์แบบที่ไม่มีใครเปิด',
        },
        {
          h: 'ข้อ 4: ไม่ฟังคนที่ต้องใช้งาน',
          p: [
            'พนักงานหน้างานรู้ดีที่สุดว่ากระบวนการจริงเป็นอย่างไร รวมถึงทางลัดและเหตุผลที่ไม่เขียนไว้ในคู่มือ ถ้าระบบใหม่ออกแบบโดยไม่ถามพวกเขา ก็เป็นเรื่องปกติที่จะพบการต่อต้านหรือหาทางหลบไปใช้ Excel และกลุ่ม LINE เหมือนเดิม',
            'ให้เชิญคนใช้งานจริงเข้ามาตั้งแต่ช่วงออกแบบ ทำ prototype ให้ลองใช้ ฟังว่าติดขัดตรงไหน และจัดอบรมที่ใช้ข้อมูลจริงของงานเขา ไม่ใช่สไลด์ทั่วไป การทำ UX research กับพนักงานภายในก็สำคัญเท่ากับกับลูกค้า',
          ],
        },
        {
          h: 'ข้อ 5: ข้อมูลรกแล้วย้ายเข้าระบบใหม่ทั้งอย่างนั้น',
          p: [
            'ระบบใหม่ไม่ได้ทำให้ข้อมูลเก่าสะอาดขึ้นเอง ถ้าลูกค้าคนเดียวมีสามชื่อ รหัสสินค้าไม่ตรงกัน หรือฟิลด์สำคัญว่างอยู่ ก็จะเอาปัญหาเดิมไปอยู่ในระบบที่แพงกว่าเดิม',
            'ก่อนย้ายข้อมูลให้สำรวจคุณภาพ ตัดสินว่าอะไรควรทิ้ง อะไรต้องแก้ และกำหนดเจ้าของข้อมูลแต่ละประเภท รวมถึงดูเรื่อง PDPA ว่าข้อมูลส่วนบุคคลที่เก่าเกินความจำเป็นไม่ควรถูกย้ายตามไปด้วย',
          ],
        },
        {
          h: 'ข้อ 6: วัดผลด้วยตัวเลขที่ดูดีแต่ไม่มีความหมาย',
          p: [
            'ตัวชี้วัดแบบ vanity เช่น จำนวนผู้ใช้ที่ลงทะเบียน จำนวนฟีเจอร์ที่ปล่อย หรือจำนวนหน้าแดชบอร์ด ดูดีในรายงานแต่ไม่ได้บอกว่าธุรกิจดีขึ้นหรือไม่ ให้ผูกตัวชี้วัดกับปัญหาที่ตั้งไว้ตั้งแต่ต้น เช่น เวลาจากรับออเดอร์ถึงส่งของ จำนวนครั้งที่ต้องคีย์ข้อมูลซ้ำ หรือจำนวนเรื่องที่ลูกค้าติดต่อมาถามสถานะ',
            'อย่าลืมวัดก่อนเริ่มโครงการด้วย ถ้าไม่มีตัวเลขก่อนหน้า ก็ไม่มีทางรู้ว่าดีขึ้นจริงหรือแค่รู้สึกว่าดีขึ้น',
          ],
        },
        {
          h: 'ข้อ 7: ไม่เผื่องบหลังขึ้นระบบ และสรุปเป็นเช็กลิสต์',
          p: [
            'หลายองค์กรตั้งงบสำหรับการสร้างระบบ แต่ไม่ได้ตั้งงบสำหรับการใช้งานต่อ ทั้งที่ต้องมีค่าโฮสติ้ง ค่าสมัครใช้บริการ การแก้บั๊ก การปรับตามธุรกิจที่เปลี่ยน และคนดูแล ระบบที่ไม่มีงบดูแลจะเสื่อมลงเงียบ ๆ จนกลายเป็นระบบเก่าตัวใหม่ที่ต้องรื้อในไม่กี่ปี',
            'ให้เผื่องบดูแลรายปีเป็นสัดส่วนที่สมเหตุสมผลของงบสร้างตั้งแต่ตอนอนุมัติโครงการ และกำหนดว่าใครมีหน้าที่ดูแล ก่อนเริ่มโครงการ ลองใช้รายการนี้ตรวจตัวเอง',
          ],
          list: [
            'เรารู้ปัญหาที่จะแก้และเขียนเป็นประโยคเดียวได้ไหม',
            'มีเจ้าของคนเดียวที่มีอำนาจและเวลาไหม',
            'แบ่งเป็นขั้นเล็กและมีทางถอยไหม',
            'คนใช้งานจริงมีส่วนร่วมตั้งแต่ออกแบบไหม',
            'ข้อมูลที่จะย้ายสะอาดพอและมีเจ้าของไหม',
            'ตัวชี้วัดผูกกับปัญหาและวัดก่อนเริ่มไว้แล้วไหม',
            'มีงบและคนดูแลหลังขึ้นระบบไหม',
          ],
        },
      ],
      takeaways: [
        'เริ่มจากปัญหาที่เขียนเป็นประโยคเดียวได้ ไม่ใช่จากชื่อเครื่องมือ',
        'ต้องมีเจ้าของคนเดียวที่มีอำนาจตัดสินใจและมีเวลา',
        'แบ่งเป็นขั้นเล็กพร้อมทางถอย แทนการเปลี่ยนทั้งหมดในวันเดียว',
        'ให้พนักงานที่ใช้งานจริงมีส่วนร่วม และทำความสะอาดข้อมูลก่อนย้าย',
        'วัดผลที่ผูกกับปัญหา และเผื่องบดูแลระบบหลังขึ้นใช้งาน',
      ],
      figCaption: 'เจ็ดกับดักของ digital transformation และคำถามที่ใช้ตรวจก่อนเริ่มโครงการ',
      faq: [
        {
          q: 'องค์กรขนาดเล็กควรเริ่ม digital transformation จากตรงไหน',
          a: 'เริ่มจากงานที่เสียเวลาซ้ำ ๆ มากที่สุดสักหนึ่งอย่าง เช่น การทำใบเสนอราคาหรือการติดตามออเดอร์ แก้ให้ดีขึ้นแล้ววัดผล ก่อนขยายไปเรื่องอื่น ไม่ต้องทำทั้งองค์กรพร้อมกัน',
        },
        {
          q: 'ควรตั้งงบดูแลระบบหลังขึ้นใช้งานเท่าไหร่',
          a: 'ไม่มีตัวเลขตายตัว ขึ้นกับความซับซ้อนและความเร็วที่ธุรกิจเปลี่ยน ให้ประเมินค่าโฮสติ้ง ค่าบริการ การแก้ไข และเวลาของคนดูแลเป็นรายปี แล้วตั้งไว้ในแผนตั้งแต่ก่อนอนุมัติโครงการ',
        },
        {
          q: 'ถ้าพนักงานไม่ยอมใช้ระบบใหม่ ควรทำอย่างไร',
          a: 'ถามหาเหตุผลก่อน ส่วนใหญ่ระบบใหม่ช้ากว่าหรือยุ่งกว่าวิธีเดิมในงานของเขา ปรับให้ใช้ง่ายขึ้น ให้เห็นประโยชน์ต่องานตัวเอง และให้หัวหน้าทีมใช้เป็นตัวอย่าง มากกว่าการบังคับอย่างเดียว',
        },
      ],
    },
    en: {
      title: '7 Mistakes That Make Digital Transformation Fail',
      excerpt: 'Tools before problems, no owner, a big-bang switch, ignoring staff, messy data, vanity metrics and no run budget. Seven common traps and how to avoid each one.',
      metaTitle: '7 Mistakes That Make Digital Transformation Fail',
      metaDescription: 'Seven mistakes that sink digital transformation: tools before problems, no owner, big-bang rollouts, ignored staff, messy data, vanity metrics, no run budget.',
      intro: 'Many digital transformation projects do not fail because the technology is bad. They fail because of the decisions around it: starting in the wrong place, having nobody accountable, or running out of money the day the system goes live. Here are seven mistakes that show up in companies of every size, with ways to avoid them.',
      sections: [
        {
          h: 'Mistakes 1 and 2: tools before problems, and no owner',
          p: [
            'The first is starting from a tool: "we need an ERP" or "we need AI" before anyone has named the actual problem. You end up with a system full of features that does not match what the team does each day. Start by writing the problem as one sentence, such as "quotations take three days to reach the customer", then look for a tool that fixes that.',
            'The second is having no owner. A project that every department co-owns often ends up owned by nobody. Name one person with the authority to decide and accountability for the business result, not only the technical side, and free up their time from regular duties so they can actually do it.',
          ],
        },
        {
          h: 'Mistake 3: the big bang',
          p: [
            'Switching every system on one day sounds decisive, but the risk is high. A single fault can stop the whole company, and there may be no easy way back.',
            'The safer route is small steps. Pick one department or process as a pilot, learn from it, adjust, then widen. Let the old and new systems run side by side for a while so you have a way back if something breaks.',
          ],
          quote: 'A system half the company uses every day beats a perfect one nobody opens.',
        },
        {
          h: 'Mistake 4: ignoring the people who will use it',
          p: [
            'Front-line staff know how the work really happens, including the shortcuts and the reasons that never made it into the manual. If a new system is designed without asking them, expect resistance or a quiet return to Excel and LINE groups.',
            'Bring real users in during design, give them a prototype to try, listen for where they get stuck, and train them using their own work data rather than generic slides. UX research with internal staff matters as much as research with customers.',
          ],
        },
        {
          h: 'Mistake 5: moving messy data into the new system',
          p: [
            'A new system does not clean old data by itself. If one customer exists under three names, product codes do not match, or key fields are blank, you just carry the same problems into a more expensive home.',
            'Before migrating, audit the data quality, decide what to discard and what to fix, and assign an owner for each data type. Check PDPA too: personal data that is no longer needed should not travel along.',
          ],
        },
        {
          h: 'Mistake 6: measuring numbers that look good but mean little',
          p: [
            'Vanity metrics such as registered users, features shipped or number of dashboards look fine in a report but say nothing about whether the business improved. Tie metrics to the problem you named at the start, for example time from order to delivery, how often staff re-key the same data, or how many customers ask for a status update.',
            'Measure before the project starts as well. Without a baseline you cannot tell whether things got better or just feel better.',
          ],
        },
        {
          h: 'Mistake 7: no run budget, plus a checklist',
          p: [
            'Many organisations budget to build a system but not to keep it running, even though hosting, subscriptions, bug fixes, changes as the business moves and people to look after it all cost money. A system with no run budget decays quietly until it becomes the next legacy system, to be replaced in a few years.',
            'Set an annual run budget, as a sensible share of the build cost, when the project is approved, and decide who is responsible for upkeep. Before you start, try this checklist.',
          ],
          list: [
            'Can we state the problem in one sentence?',
            'Is there one owner with authority and time?',
            'Is the rollout in small steps with a way back?',
            'Were real users involved from the design stage?',
            'Is the data to be migrated clean enough, with owners?',
            'Do metrics tie to the problem, with a baseline taken?',
            'Is there a budget and a team for after go-live?',
          ],
        },
      ],
      takeaways: [
        'Start from a problem you can state in one sentence, not from a tool name.',
        'Appoint one owner who has authority to decide and time to do it.',
        'Roll out in small steps with a way back, not a one-day switch.',
        'Involve the people who use the system, and clean data before migrating.',
        'Measure against the problem and budget for running the system after launch.',
      ],
      figCaption: 'Seven traps of digital transformation, with the questions to check before starting',
      faq: [
        {
          q: 'Where should a small company begin?',
          a: 'Pick the one task that wastes the most repeated time, such as producing quotations or tracking orders, improve it and measure the change before moving on. There is no need to change the whole company at once.',
        },
        {
          q: 'How much should we budget to run the system after launch?',
          a: 'There is no fixed number; it depends on complexity and how fast your business changes. Estimate hosting, subscriptions, fixes and the time of the people who maintain it for a year, and put it in the plan before approval.',
        },
        {
          q: 'What if staff refuse to use the new system?',
          a: 'Ask why first. Often the new way is slower or more awkward for their part of the work. Make it easier, show them the benefit to their own job, and have team leads use it visibly, rather than relying on orders alone.',
        },
      ],
    },
  },
  {
    slug: 'mobile-payments-asean',
    cat: 'Business',
    date: '2026-09-12',
    readMin: 8,
    tags: ['QR payment', 'PromptPay', 'ASEAN payments', 'e-commerce checkout', 'reconciliation'],
    related: ['dx-mistakes', 'nextjs-perf', 'accessibility-wcag'],
    th: {
      title: 'QR และ Mobile Payment ในเอเชียตะวันออกเฉียงใต้: ผลต่อ checkout และร้านค้า',
      excerpt: 'ทำไม QR ถึงแพร่หลายในภูมิภาค ตั้งแต่ PromptPay ในไทยไปจนถึงการเชื่อม QR ข้ามประเทศ และสิ่งที่ร้านค้ากับอีคอมเมิร์ซควรปรับ ทั้งหน้า checkout และการกระทบยอด',
      metaTitle: 'QR และ Mobile Payment ในอาเซียน: PromptPay checkout',
      metaDescription: 'เข้าใจว่าทำไม QR payment โตในอาเซียน PromptPay ของไทย QR ข้ามประเทศ และผลต่อการออกแบบ checkout การกระทบยอดบัญชี สำหรับร้านค้าและอีคอมเมิร์ซไทย',
      intro: 'ถ้าคุณเคยจ่ายค่าข้าวแกงหรือซื้อของตลาดนัดด้วยการสแกน QR ก็เห็นแล้วว่าการจ่ายเงินในภูมิภาคนี้เปลี่ยนไปมาก บทความนี้อธิบายพื้นฐานว่าทำไม QR ถึงแพร่หลาย ส่งผลต่อการออกแบบ checkout และงานบัญชีของร้านค้าอย่างไร โดยเน้นความรู้พื้นฐานที่ไม่ล้าสมัยเร็ว',
      sections: [
        {
          h: 'ทำไม QR ถึงแพร่หลายในภูมิภาค',
          p: [
            'เหตุผลหลักคือต้นทุนต่ำและเริ่มได้ง่าย ร้านค้ารายเล็กไม่ต้องซื้อเครื่องรูดบัตร แค่มีบัญชีธนาคารและ QR ที่พิมพ์หรือแสดงบนจอ ก็รับเงินได้ ขณะที่ผู้ซื้อส่วนใหญ่มีสมาร์ตโฟนและแอปธนาคารอยู่แล้ว',
            'อีกเหตุผลคือหลายประเทศในภูมิภาคมีคนจำนวนมากที่ไม่ได้ใช้บัตรเครดิต การจ่ายผ่านบัญชีธนาคารโดยตรงจึงตอบโจทย์กว่าระบบบัตรแบบเดิม และเมื่อร้านค้ารับ QR กันมากขึ้น คนก็ยิ่งสะดวกที่จะจ่ายด้วย QR ซึ่งช่วยกันเป็นวงจร',
          ],
        },
        {
          h: 'PromptPay ในไทย: ระบบกลางที่ทำให้เริ่มง่าย',
          p: [
            'PromptPay เป็นระบบโอนเงินที่ผูกบัญชีกับเลขประจำตัวประชาชน เลขนิติบุคคล หรือเบอร์โทรศัพท์ ทำให้ผู้รับไม่ต้องบอกเลขบัญชี และใช้งานข้ามธนาคารได้ ในทางปฏิบัติร้านค้ามักใช้ QR ที่อิงมาตรฐานของระบบนี้ ซึ่งสแกนได้จากแอปของแทบทุกธนาคารในไทย',
            'ข้อดีสำหรับร้านค้าคือไม่ต้องผูกกับผู้ให้บริการรายเดียว แต่ข้อควรระวังคือต้องเลือกชนิด QR ให้ตรงกับการใช้งาน QR แบบระบุจำนวนเงินสำหรับการขายออนไลน์ กับ QR ทั่วไปที่ให้ลูกค้ากรอกจำนวนเอง ให้ผลต่อความผิดพลาดและการตามยอดต่างกันมาก',
          ],
        },
        {
          h: 'QR ข้ามประเทศ: ภูมิภาคกำลังเชื่อมต่อกัน',
          p: [
            'ธนาคารกลางและผู้ให้บริการในหลายประเทศอาเซียนทยอยเชื่อมระบบ QR เข้าหากัน เพื่อให้นักท่องเที่ยวสแกนจ่ายที่ร้านในประเทศอื่นได้ด้วยแอปธนาคารของตัวเอง โดยแปลงสกุลเงินให้อัตโนมัติ ความครอบคลุมของแต่ละคู่ประเทศไม่เท่ากันและเปลี่ยนต่อไป จึงควรตรวจสอบสถานะล่าสุดก่อนวางแผนรับลูกค้าต่างชาติ',
            'สำหรับร้านค้าในไทย ความหมายคือโอกาสรับลูกค้านักท่องเที่ยวโดยไม่ต้องเปิดรับบัตรต่างประเทศ ส่วนอีคอมเมิร์ซที่ขายข้ามประเทศควรคิดล่วงหน้าเรื่องสกุลเงิน ค่าธรรมเนียม และการแสดงราคา',
          ],
          quote: 'การจ่ายเงินที่ดีคือการจ่ายที่ลูกค้าไม่ต้องคิดว่ากำลังจ่ายอยู่',
        },
        {
          h: 'ผลต่อการออกแบบ checkout',
          p: [
            'บนมือถือ ลูกค้าไม่สามารถสแกน QR บนหน้าจอเครื่องเดียวกันได้ ดังนั้นหน้า checkout ควรมีปุ่ม "บันทึก QR" หรือ "เปิดแอปธนาคาร" ให้ชัด อธิบายขั้นตอนสั้น ๆ และมีตัวนับเวลาหมดอายุของ QR ที่เห็นง่าย ถ้า QR หมดอายุควรสร้างใหม่ได้ในคลิกเดียวโดยไม่ต้องกรอกตะกร้าใหม่',
            'ให้แจ้งสถานะการชำระเงินแบบเรียลไทม์ เมื่อลูกค้าจ่ายแล้วหน้าจอควรเปลี่ยนเองทันที ไม่ต้องให้กดรีเฟรช และส่งใบเสร็จผ่านอีเมลหรือ LINE ด้วย รายละเอียดเหล่านี้คือส่วนที่ทำให้ลูกค้าไม่ต้องทักถามว่า "โอนแล้วนะ ได้รับหรือยัง"',
          ],
          list: [
            'ปุ่มบันทึก QR และปุ่มเปิดแอปธนาคารสำหรับผู้ใช้มือถือ',
            'แสดงเวลาหมดอายุ และสร้าง QR ใหม่ได้ทันที',
            'อัปเดตสถานะหลังชำระเงินอัตโนมัติ',
            'ส่งใบเสร็จและยืนยันออเดอร์ทันที',
          ],
        },
        {
          h: 'การกระทบยอด (reconciliation)',
          p: [
            'ปัญหาที่ร้านค้าพบบ่อยหลังเปิดรับ QR คือเงินเข้าแล้วแต่หาไม่พบว่าเป็นของออเดอร์ไหน โดยเฉพาะเมื่อใช้ QR เดียวให้ลูกค้าหลายคนโอนมา วิธีแก้คือสร้าง QR แยกต่อออเดอร์ที่ผูกรหัสอ้างอิงหรือจำนวนเงินเฉพาะ แล้วใช้ API หรือ webhook ของผู้ให้บริการรับแจ้งชำระเงินเพื่อจับคู่กับออเดอร์อัตโนมัติ',
            'ควรออกแบบรายงานรายวันที่เทียบยอดขายในระบบกับยอดเงินเข้าบัญชี และมีขั้นตอนจัดการกรณีที่ลูกค้าจ่ายเกิน จ่ายขาด หรือจ่ายซ้ำ ซึ่งเกิดได้จริง การกำหนดเจ้าของงานนี้ในทีมบัญชีตั้งแต่ต้นช่วยลดการค้างตามเงินทีหลัง',
          ],
        },
        {
          h: 'สิ่งที่ร้านค้าและอีคอมเมิร์ซควรทำ',
          p: [
            'ถ้าเป็นร้านหน้าร้าน ให้ใช้ QR ที่ติดตั้งเสถียรและแสดงชื่อบัญชีชัดเจน เพื่อให้ลูกค้ามั่นใจก่อนโอน และมีวิธีตรวจสอบยอดเข้าแบบทันที เช่น แจ้งเตือนจากแอปหรือเสียงยืนยัน เพื่อไม่ต้องพึ่งภาพสลิปที่ปลอมได้',
            'ถ้าเป็นอีคอมเมิร์ซ ให้ใช้ผู้ให้บริการรับชำระเงินที่รองรับ QR และส่ง webhook เปิดทางเลือกชำระหลายแบบ เช่น QR บัตร และกระเป๋าเงินอิเล็กทรอนิกส์ แล้วดูข้อมูลว่าลูกค้าเลือกแบบไหนมากที่สุด เพื่อปรับหน้า checkout ให้ตรงกับพฤติกรรมจริง',
          ],
        },
      ],
      takeaways: [
        'QR แพร่หลายเพราะต้นทุนต่ำ เริ่มง่าย และคนส่วนใหญ่มีแอปธนาคารอยู่แล้ว',
        'PromptPay ทำให้รับเงินข้ามธนาคารได้ง่าย แต่ต้องเลือกชนิด QR ให้เหมาะกับงาน',
        'QR ข้ามประเทศกำลังขยาย แต่ความครอบคลุมเปลี่ยนไป ควรตรวจสอบก่อนวางแผน',
        'หน้า checkout ต้องมีทางเลือกบันทึก QR เปิดแอปธนาคาร และอัปเดตสถานะอัตโนมัติ',
        'ใช้ QR แยกต่อออเดอร์ร่วมกับ webhook เพื่อกระทบยอดอัตโนมัติ',
      ],
      figCaption: 'เส้นทางของการจ่ายด้วย QR ตั้งแต่ checkout จนถึงการกระทบยอดกับออเดอร์',
      faq: [
        {
          q: 'ร้านเล็กควรใช้ QR ธรรมดาหรือ QR แบบระบุจำนวนเงิน',
          a: 'ถ้าขายหน้าร้านปริมาณน้อย QR ธรรมดาก็เพียงพอ แต่ถ้าขายออนไลน์หรือมีออเดอร์จำนวนมาก QR แบบระบุจำนวนเงินต่อออเดอร์จะช่วยลดความผิดพลาดและทำให้กระทบยอดอัตโนมัติได้',
        },
        {
          q: 'ต้องรับบัตรเครดิตด้วยไหมถ้ามี QR แล้ว',
          a: 'ขึ้นกับลูกค้าของคุณ ลูกค้าไทยจำนวนมากพอใจกับ QR แต่ลูกค้าต่างประเทศหรือการสมัครสมาชิกแบบตัดบัตรอัตโนมัติมักต้องใช้บัตร การเปิดหลายทางเลือกช่วยไม่ให้เสียการขาย',
        },
        {
          q: 'จะป้องกันสลิปปลอมได้อย่างไร',
          a: 'อย่าใช้ภาพสลิปที่ลูกค้าส่งมาเป็นหลักฐานเพียงอย่างเดียว ให้ยืนยันยอดจากการแจ้งเตือนของผู้ให้บริการรับชำระเงินหรือรายการเข้าบัญชีจริง ซึ่งตรวจสอบได้อัตโนมัติผ่าน webhook',
        },
      ],
    },
    en: {
      title: 'QR and Mobile Payments in Southeast Asia: What It Means for Checkout and Merchants',
      excerpt: 'Why QR payments spread across the region, from PromptPay in Thailand to cross-border QR links, and what shops and e-commerce teams should change in checkout and reconciliation.',
      metaTitle: 'QR and Mobile Payments in ASEAN: PromptPay, Checkout',
      metaDescription: 'Why QR payments grew in Southeast Asia, how PromptPay and cross-border QR links work, and what it means for checkout design, reconciliation and merchants.',
      intro: 'If you have paid for a plate of rice or a market purchase by scanning a QR code, you have seen how much payments in this region have changed. This article covers the basics of why QR spread, and how it affects checkout design and merchants\' accounting, sticking to knowledge that will not go stale quickly.',
      sections: [
        {
          h: 'Why QR spread across the region',
          p: [
            'The main reasons are low cost and an easy start. A small shop does not need a card terminal; a bank account and a printed or on-screen QR code are enough to get paid, while most buyers already carry a smartphone with a banking app.',
            'Another reason is that in many countries in the region large parts of the population do not use credit cards, so paying straight from a bank account fits better than the traditional card model. As more merchants accept QR, more people feel comfortable paying that way, and the loop reinforces itself.',
          ],
        },
        {
          h: 'PromptPay in Thailand: a shared system that makes starting easy',
          p: [
            'PromptPay is a transfer system that links a bank account to a national ID number, a business tax ID or a mobile number, so the recipient does not need to share an account number and transfers work across banks. In practice, merchants use QR codes based on this system\'s standard, and nearly every Thai banking app can scan them.',
            'The advantage for merchants is that they are not tied to a single provider. The caution is choosing the right type of QR. A QR that fixes the amount, suited to online sales, behaves very differently in errors and tracking from a generic QR where the customer types the amount.',
          ],
        },
        {
          h: 'Cross-border QR: the region is linking up',
          p: [
            'Central banks and payment providers in several ASEAN countries have been connecting their QR systems so a traveller can scan at a shop in another country with their own banking app, with currency converted automatically. Coverage differs between country pairs and keeps changing, so check the current status before planning for foreign customers.',
            'For a Thai merchant, this means a chance to accept visiting tourists without enabling foreign cards. For cross-border e-commerce, plan ahead for currency, fees and how prices are displayed.',
          ],
          quote: 'The best payment is the one the customer barely notices making.',
        },
        {
          h: 'What it means for checkout design',
          p: [
            'On mobile, a customer cannot scan a QR displayed on the same phone, so the checkout page needs a clear "save QR" or "open banking app" button, a short explanation, and a visible expiry timer. If the QR expires, the customer should regenerate it in one tap without rebuilding the cart.',
            'Show payment status in real time. Once the customer pays, the screen should update on its own without a refresh, and a receipt should arrive by email or LINE. These details are what stop customers from messaging "I transferred, did you get it?".',
          ],
          list: [
            'Save-QR and open-banking-app buttons for mobile users.',
            'Show the expiry time and allow instant regeneration.',
            'Update status automatically after payment.',
            'Send the receipt and order confirmation at once.',
          ],
        },
        {
          h: 'Reconciliation',
          p: [
            'A common problem after launching QR is money that arrives but cannot be matched to an order, especially when one QR is shared by many customers. The fix is a separate QR per order, carrying a reference or a unique amount, and using the provider\'s API or webhook to get payment notifications and match them to orders automatically.',
            'Build a daily report comparing sales in your system with money received, and a process for customers who overpay, underpay or pay twice, all of which really happen. Give this job to a named person in accounting from the start to avoid chasing money later.',
          ],
        },
        {
          h: 'What merchants and e-commerce teams should do',
          p: [
            'For a physical shop, use a stable QR stand showing the account name clearly so customers feel safe before transferring, and a way to confirm money received instantly, such as an app notification or sound alert, rather than relying on a slip image, which can be faked.',
            'For e-commerce, use a payment provider that supports QR and sends webhooks, offer several methods such as QR, cards and e-wallets, and look at which one customers choose most so the checkout reflects real behaviour.',
          ],
        },
      ],
      takeaways: [
        'QR spread because it is cheap, easy to start and most people already have a banking app.',
        'PromptPay makes cross-bank payments simple, but pick the QR type that fits the use.',
        'Cross-border QR is expanding, but coverage changes, so verify before planning.',
        'Checkout needs save-QR, open-app and automatic status updates.',
        'Use one QR per order plus webhooks to reconcile automatically.',
      ],
      figCaption: 'The path of a QR payment from checkout to matching the order in your books',
      faq: [
        {
          q: 'Should a small shop use a generic QR or one with a fixed amount?',
          a: 'For low-volume in-person sales a generic QR is fine. For online sales or many orders, a per-order QR with a fixed amount cuts mistakes and allows automatic reconciliation.',
        },
        {
          q: 'Do we still need to accept credit cards once we have QR?',
          a: 'It depends on your customers. Many Thai customers are happy with QR, but foreign customers and subscriptions billed automatically usually need cards. Offering several options avoids lost sales.',
        },
        {
          q: 'How do we guard against fake payment slips?',
          a: 'Do not rely on a slip image the customer sends. Confirm the amount from the payment provider\'s notification or the actual bank credit, which can be checked automatically through a webhook.',
        },
      ],
    },
  },
]
