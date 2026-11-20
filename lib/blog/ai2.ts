import type { Article } from '@/lib/blog-types'

export const ai2Articles: Article[] = [
  {
    slug: 'mcp-explained',
    cat: 'AI',
    date: '2026-11-16',
    readMin: 8,
    tags: ['MCP', 'Model Context Protocol', 'AI Agents', 'Integration', 'Security'],
    related: ['ai-agent-guardrails', 'ai-agents-first-workflow', 'rag-in-production'],
    th: {
      title: `MCP คืออะไร: อธิบายแบบเข้าใจง่ายสำหรับทีมธุรกิจและทีมโปรดักต์`,
      excerpt: `MCP คือมาตรฐานกลางที่ให้ AI ต่อกับระบบและข้อมูลของคุณได้ เหมือนพอร์ต USB-C บทความนี้อธิบายว่าทำอะไรได้ ทำไมสำคัญตอนนี้ และต้องระวังเรื่องสิทธิ์อย่างไร`,
      metaTitle: `MCP คืออะไร อธิบายสำหรับทีมธุรกิจและโปรดักต์`,
      metaDescription: `ทำความเข้าใจ MCP (Model Context Protocol) ว่าช่วยให้ AI ต่อกับ CRM, ERP, LINE OA และระบบสต็อกได้อย่างไร ทำไมสำคัญในตอนนี้ และควรวางเรื่องความปลอดภัยอย่างไร`,
      intro: `ช่วงนี้ถ้าคุยเรื่อง AI กับทีมเทคนิค คำว่า MCP จะโผล่มาบ่อยมาก ฟังดูเหมือนเรื่องของนักพัฒนาล้วนๆ แต่จริงๆ แล้วมันกำลังเปลี่ยนวิธีที่ AI assistant เข้าถึงข้อมูลและระบบของธุรกิจ บทความนี้อธิบาย MCP แบบไม่ใช้ศัพท์เยอะ พร้อมตัวอย่างว่าถ้าธุรกิจของคุณมี MCP server เป็นของตัวเองจะทำอะไรได้ และต้องคิดเรื่องความปลอดภัยตรงไหนบ้าง`,
      sections: [
        {
          h: `MCP คืออะไร อธิบายด้วยภาพพอร์ต USB-C`,
          p: [
            `MCP ย่อมาจาก Model Context Protocol เป็นโปรโตคอลแบบเปิดที่ Anthropic เปิดตัวเมื่อพฤศจิกายน 2024 เพื่อเป็นวิธีมาตรฐานในการเชื่อมแอป AI เข้ากับเครื่องมือและแหล่งข้อมูลต่างๆ ภาพที่คนชอบใช้อธิบายคือพอร์ต USB-C สมัยก่อนอุปกรณ์แต่ละยี่ห้อมีสายชาร์จของตัวเอง พอมีพอร์ตมาตรฐาน อุปกรณ์ไหนก็เสียบกับสายไหนก็ได้`,
            `MCP ทำแบบเดียวกันกับ AI ก่อนหน้านี้ถ้าอยากให้ AI แต่ละตัวอ่านข้อมูลจาก CRM ของคุณ ต้องเขียนตัวเชื่อมแยกสำหรับแต่ละผู้ให้บริการ พอมี MCP คุณเขียน MCP server ครั้งเดียว แล้ว AI app ที่รองรับ MCP ก็เรียกใช้ได้ทั้งหมด`,
            `โครงสร้างหลักมีสองฝั่ง ฝั่ง client คือแอป AI ที่คนใช้งาน เช่น แชตบอตหรือ coding assistant ฝั่ง server คือตัวที่เปิดให้เข้าถึงเครื่องมือ ข้อมูล หรือคำสั่งของระบบหนึ่งๆ เช่น "ค้นหาลูกค้า" "ดูยอดสต็อก" หรือ "สร้างใบเสนอราคาฉบับร่าง"`,
          ],
        },
        {
          h: `ทำไมเรื่องนี้สำคัญขึ้นมากในตอนนี้`,
          p: [
            `เมื่อ 9 ธันวาคม 2025 Anthropic มอบ MCP ให้กับ Agentic AI Foundation (AAIF) ซึ่งเป็นกองทุนภายใต้ Linux Foundation ที่ Anthropic, Block และ OpenAI ร่วมกันก่อตั้ง โดยมี Google, Microsoft, AWS, Cloudflare และ Bloomberg ให้การสนับสนุน โปรเจกต์ตั้งต้นของมูลนิธิได้แก่ MCP, goose ของ Block และ AGENTS.md ของ OpenAI`,
            `ความหมายสำหรับธุรกิจคือ MCP ไม่ได้เป็นของบริษัทใดบริษัทหนึ่งแล้ว แต่อยู่ในองค์กรกลางที่เป็นกลางกว่า ตอนนั้น Anthropic ระบุว่ามี MCP server ที่เผยแพร่แล้วมากกว่า 10,000 ตัว และมีการนำไปใช้ใน Claude, ChatGPT, Gemini, Microsoft Copilot, Cursor และ VS Code ถ้าคุณลงทุนทำ MCP server วันนี้ โอกาสที่จะต้องรื้อทำใหม่เพราะเปลี่ยนผู้ให้บริการ AI จึงน้อยลง`,
          ],
          quote: `MCP ทำให้การเชื่อม AI กับระบบของคุณกลายเป็นงานทำครั้งเดียว ไม่ใช่งานทำใหม่ทุกครั้งที่เปลี่ยนโมเดล`,
        },
        {
          h: `ถ้ามี MCP server ของตัวเอง AI จะทำอะไรได้บ้าง`,
          p: [
            `ลองนึกถึงระบบที่ทีมคุณใช้ทุกวัน แล้วถามว่าถ้า AI assistant เข้าถึงระบบนี้ได้อย่างปลอดภัย พนักงานจะประหยัดเวลาตรงไหน คำตอบมักเป็นงานถามตอบข้อมูลและงานร่างเอกสารที่ต้องสลับหลายหน้าจอ`,
            `ตัวอย่างที่เห็นภาพในธุรกิจไทย มีดังนี้`,
          ],
          list: [
            `CRM: ฝ่ายขายถาม AI ว่า "ลูกค้ารายนี้คุยอะไรไว้ล่าสุด มีดีลค้างอยู่ไหม" แล้วได้สรุปทันที`,
            `ERP: ฝ่ายบัญชีให้ AI ดึงใบสั่งซื้อที่ยังไม่อนุมัติของเดือนนี้ พร้อมสรุปว่าติดที่ใคร`,
            `LINE OA: ทีมแอดมินให้ AI สรุปแชตลูกค้าที่ยังไม่ได้ตอบ และร่างข้อความตอบให้คนตรวจก่อนส่ง`,
            `ระบบสต็อก: ร้านที่ขายบน Shopee, Lazada และ TikTok Shop ถามว่าสินค้าตัวไหนใกล้หมดในคลังจริง`,
            `ปฏิทินนัดหมาย: คลินิกให้ AI ช่วยหาช่วงเวลาว่างของแพทย์ที่ตรงกับคำขอของคนไข้`,
          ],
        },
        {
          h: `ความปลอดภัยและสิทธิ์: ส่วนที่ต้องคิดก่อนเปิดใช้`,
          p: [
            `การให้ AI เข้าถึงระบบจริงเหมือนให้กุญแจพนักงานใหม่ คำถามแรกจึงไม่ใช่ "ทำได้ไหม" แต่เป็น "ควรให้ทำแค่ไหน" เริ่มจากเครื่องมือแบบอ่านอย่างเดียวก่อน ส่วนคำสั่งที่เขียนหรือแก้ข้อมูล เช่น ลบรายการ เปลี่ยนราคา หรือส่งข้อความหาลูกค้า ควรให้คนกดยืนยันทุกครั้ง`,
            `อีกเรื่องที่สำคัญคือ AI ควรเห็นข้อมูลเท่ากับคนที่ใช้งานอยู่ ไม่มากกว่านั้น ถ้าพนักงานขายปกติเห็นเฉพาะลูกค้าของตัวเอง MCP server ก็ต้องเคารพสิทธิ์นั้น อย่าใช้บัญชีแอดมินตัวเดียวเชื่อมทุกอย่าง และระวัง prompt injection คือข้อความในอีเมล เอกสาร หรือแชตลูกค้าที่พยายามสั่ง AI ให้ทำสิ่งที่ไม่ควรทำ`,
          ],
          list: [
            `แยกเครื่องมืออ่านกับเครื่องมือเขียน และเปิดเฉพาะที่จำเป็น`,
            `ใช้สิทธิ์ของผู้ใช้จริง ไม่ใช้บัญชีรวมที่เห็นทุกอย่าง`,
            `ให้คนยืนยันก่อนทุกการกระทำที่ย้อนกลับไม่ได้`,
            `เก็บ log ว่า AI เรียกเครื่องมืออะไร เมื่อไร ด้วยข้อมูลอะไร`,
            `ติดตั้งเฉพาะ MCP server จากแหล่งที่ตรวจสอบได้ และตรวจโค้ดหรือเวอร์ชันก่อนใช้`,
          ],
        },
        {
          h: `เริ่มต้นอย่างไรให้ไม่หลงทาง`,
          p: [
            `อย่าเริ่มจากการเปิดทุกระบบพร้อมกัน เลือกระบบเดียวที่ทีมเปิดดูบ่อยที่สุดและมีความเสี่ยงต่ำ เช่น ค้นหาข้อมูลสินค้าหรือข้อมูลลูกค้าแบบอ่านอย่างเดียว ทำ MCP server เล็กๆ ที่มีเครื่องมือสองสามตัว แล้วให้ทีมกลุ่มเล็กลองใช้จริงสักสองสามสัปดาห์`,
            `ระหว่างนั้นจดว่าคำถามแบบไหนที่ AI ตอบได้ดี แบบไหนที่ยังพลาด และเครื่องมือไหนที่คนอยากได้เพิ่ม ข้อมูลนี้มีค่ากว่าการวางแผนบนกระดาษ ถ้าทีมภายในยังไม่มีคนดูแลเรื่องนี้ สตูดิโออย่าง Haliviq ช่วยออกแบบชุดเครื่องมือและสิทธิ์ให้ตั้งแต่ต้นได้ แต่ไม่ว่าใครทำ หลักการเดียวกันคือเริ่มเล็ก วัดผล แล้วค่อยขยาย`,
          ],
        },
      ],
      takeaways: [
        `MCP คือมาตรฐานเปิดสำหรับเชื่อมแอป AI กับเครื่องมือและข้อมูล เขียนครั้งเดียวใช้ได้กับหลาย AI`,
        `ตั้งแต่ปลายปี 2025 MCP อยู่ภายใต้ Agentic AI Foundation ของ Linux Foundation ทำให้เป็นกลางและมั่นคงขึ้น`,
        `MCP server สำหรับ CRM, ERP, LINE OA หรือสต็อก ช่วยลดงานสลับหน้าจอและงานร่างเอกสาร`,
        `เริ่มจากเครื่องมืออ่านอย่างเดียว ใช้สิทธิ์ของผู้ใช้จริง และให้คนยืนยันก่อนการเขียนข้อมูล`,
        `เริ่มจากระบบเดียว ทดลองกับทีมเล็ก แล้วค่อยขยาย`,
      ],
      figCaption: `แผนภาพ AI app ฝั่ง client เชื่อมกับ MCP server ของ CRM, ERP, LINE OA และระบบสต็อก`,
      faq: [
        {
          q: `MCP ต่างจาก API ธรรมดาอย่างไร`,
          a: `MCP ไม่ได้มาแทน API แต่ครอบ API ของคุณให้อยู่ในรูปแบบที่แอป AI เข้าใจได้เหมือนกันหมด AI จึงรู้ว่ามีเครื่องมืออะไร ต้องส่งข้อมูลอะไร และเรียกใช้ได้เองเมื่อเหมาะ`,
        },
        {
          q: `ธุรกิจขนาดเล็กจำเป็นต้องมี MCP server ไหม`,
          a: `ยังไม่จำเป็นทุกราย ถ้าเครื่องมือที่ใช้อยู่มี MCP server ให้แล้ว เริ่มจากใช้ของที่มีก่อนได้ การทำเองคุ้มเมื่อมีระบบเฉพาะของบริษัทที่ทีมเปิดดูบ่อยและอยากให้ AI ช่วย`,
        },
        {
          q: `ข้อมูลลูกค้าจะรั่วไปที่ผู้ให้บริการ AI ไหม`,
          a: `ข้อมูลที่ AI ดึงผ่าน MCP จะถูกส่งเข้าโมเดลที่คุณใช้ จึงต้องเลือกผู้ให้บริการและแผนการใช้งานที่มีเงื่อนไขเรื่องข้อมูลชัดเจน และเปิดให้เข้าถึงเฉพาะข้อมูลที่จำเป็นตาม PDPA`,
        },
      ],
    },
    en: {
      title: `MCP Explained: A Plain Guide for Business and Product Teams`,
      excerpt: `MCP is a shared standard that lets AI assistants plug into your systems and data, a bit like USB-C. What it does, why it matters now, and how to handle permissions.`,
      metaTitle: `MCP Explained for Business and Product Teams`,
      metaDescription: `What MCP (Model Context Protocol) is, how it lets AI assistants work with your CRM, ERP, LINE OA and stock systems, why it matters now, and how to secure it.`,
      intro: `Talk about AI with any technical team lately and MCP comes up fast. It sounds like a developer-only topic, but it is changing how AI assistants reach business data and systems. This guide explains MCP without heavy jargon, shows what an MCP server for your own systems could do, and covers the security questions to answer first.`,
      sections: [
        {
          h: `What MCP is, using the USB-C picture`,
          p: [
            `MCP stands for Model Context Protocol. It is an open protocol that Anthropic introduced in November 2024 as a standard way to connect AI applications to tools and data sources. The popular comparison is USB-C: devices used to need their own cables, and a shared port meant anything could plug into anything.`,
            `MCP does the same for AI. Before, if you wanted several AI tools to read from your CRM, you built a separate connector for each vendor. With MCP you build one MCP server, and any AI app that speaks MCP can use it.`,
            `There are two sides. The client is the AI app people use, such as a chat assistant or a coding tool. The server exposes the tools, data or actions of one system, such as "find customer", "check stock level" or "draft a quotation".`,
          ],
        },
        {
          h: `Why it matters more now`,
          p: [
            `On 9 December 2025 Anthropic donated MCP to the Agentic AI Foundation (AAIF), a directed fund under the Linux Foundation co-founded by Anthropic, Block and OpenAI, with support from Google, Microsoft, AWS, Cloudflare and Bloomberg. Its founding projects are MCP, Block's goose and OpenAI's AGENTS.md.`,
            `For a business, this means MCP no longer belongs to a single company; it sits with a more neutral body. At the time, Anthropic cited more than 10,000 published MCP servers and adoption by Claude, ChatGPT, Gemini, Microsoft Copilot, Cursor and VS Code. If you invest in an MCP server today, you are less likely to rebuild it when you switch AI providers.`,
          ],
          quote: `MCP turns connecting AI to your systems into a one-time job, not a rebuild every time the model changes.`,
        },
        {
          h: `What your own MCP server could let AI do`,
          p: [
            `Think about the systems your team opens every day, and ask where staff would save time if an AI assistant could reach them safely. The answer is usually lookups and drafting work that means jumping between screens.`,
            `Some concrete examples from Thai businesses:`,
          ],
          list: [
            `CRM: a salesperson asks "what did we last discuss with this customer, and is any deal open?" and gets a summary at once.`,
            `ERP: finance asks for this month's unapproved purchase orders and who each one is waiting on.`,
            `LINE OA: admins have AI summarise unanswered customer chats and draft replies for a person to check.`,
            `Stock: a shop selling on Shopee, Lazada and TikTok Shop asks which items are running low in the real warehouse.`,
            `Bookings: a clinic has AI find open doctor slots that match a patient's request.`,
          ],
        },
        {
          h: `Security and permissions: decide these first`,
          p: [
            `Giving AI access to live systems is like handing keys to a new hire. The first question is not "can it?" but "how much should it?". Start with read-only tools. For anything that writes or changes data, such as deleting records, changing prices or messaging customers, require a person to confirm every time.`,
            `Just as important, the AI should see exactly what the current user can see and no more. If a salesperson normally sees only their own accounts, the MCP server must respect that. Do not wire everything through one admin account, and watch for prompt injection: text in an email, document or customer chat that tries to instruct the AI to do something it should not.`,
          ],
          list: [
            `Separate read tools from write tools, and expose only what is needed.`,
            `Act with the real user's permissions, not a shared all-seeing account.`,
            `Require human confirmation for any action that cannot be undone.`,
            `Log which tools the AI called, when, and with what inputs.`,
            `Install MCP servers only from sources you can verify, and review the code or version first.`,
          ],
        },
        {
          h: `How to start without getting lost`,
          p: [
            `Do not open every system at once. Pick the one your team checks most often that carries little risk, such as read-only product or customer lookups. Build a small MCP server with two or three tools, and let a small group use it for real for a few weeks.`,
            `Along the way, note which questions the AI handles well, where it still slips, and which tools people ask for next. That beats planning on paper. If no one in-house owns this yet, a studio like Haliviq can help design the tool set and permissions from the start, but whoever builds it, the rule is the same: start small, measure, then grow.`,
          ],
        },
      ],
      takeaways: [
        `MCP is an open standard for connecting AI apps to tools and data: build once, use with many assistants.`,
        `Since late 2025 MCP sits under the Linux Foundation's Agentic AI Foundation, which makes it more neutral and stable.`,
        `An MCP server for your CRM, ERP, LINE OA or stock cuts screen-hopping and drafting work.`,
        `Start read-only, use the real user's permissions, and require confirmation before writes.`,
        `Begin with one system and a small team, then expand.`,
      ],
      figCaption: `Diagram of an AI client app connecting to MCP servers for CRM, ERP, LINE OA and stock systems.`,
      faq: [
        {
          q: `How is MCP different from a normal API?`,
          a: `MCP does not replace your API. It wraps it in a format every AI app understands the same way, so the AI knows which tools exist, what inputs they need, and can call them when appropriate.`,
        },
        {
          q: `Does a small business need its own MCP server?`,
          a: `Not always. If the tools you already use offer an MCP server, start there. Building your own pays off when you have company-specific systems your team checks often and wants AI help with.`,
        },
        {
          q: `Will customer data leak to the AI provider?`,
          a: `Data the AI pulls through MCP is sent to the model you use, so choose a provider and plan with clear data terms, and expose only the data that is needed, in line with PDPA.`,
        },
      ],
    },
  },
  {
    slug: 'llm-cost-control',
    cat: 'AI',
    date: '2026-11-09',
    readMin: 8,
    tags: ['LLM', 'AI Cost', 'Prompt Caching', 'Model Routing', 'FinOps'],
    related: ['ai-roi-measure', 'rag-in-production', 'ai-evals-before-launch'],
    th: {
      title: `คุมค่าใช้จ่าย AI API ในระบบจริง: เทคนิคที่ใช้ได้ตั้งแต่วันแรก`,
      excerpt: `ค่า AI API มักไม่แพงตอนทดลอง แต่พุ่งเมื่อมีผู้ใช้จริง รวมเทคนิคเลือกโมเดล cache ตัด context จำกัด output ตั้งงบ และวัดต้นทุนต่องาน`,
      metaTitle: `คุมค่าใช้จ่าย AI API ในระบบจริงให้อยู่หมัด`,
      metaDescription: `วิธีคุมค่าใช้จ่าย LLM และ AI API ในระบบจริง ตั้งแต่ model routing, prompt caching, batching, ตัด context, จำกัด output, cache คำตอบ ตั้งงบ และวัดต้นทุนต่องาน`,
      intro: `หลายทีมเจอสถานการณ์เดียวกัน ตอนทำ prototype ค่า AI API ดูเล็กน้อยจนไม่มีใครสนใจ พอเปิดให้ลูกค้าใช้จริง บิลรายเดือนกลับโตเร็วกว่ารายได้ ข่าวดีคือค่าใช้จ่ายส่วนใหญ่คุมได้ด้วยการออกแบบ ไม่ต้องลดคุณภาพ บทความนี้รวมเทคนิคที่ทีม Haliviq ใช้จริง โดยไม่อ้างราคาเฉพาะ เพราะราคาของแต่ละผู้ให้บริการเปลี่ยนบ่อย`,
      sections: [
        {
          h: `เข้าใจก่อนว่าเงินไหลออกตรงไหน`,
          p: [
            `ค่าใช้จ่าย LLM ส่วนใหญ่คิดตามจำนวน token ทั้งขาเข้า (สิ่งที่ส่งให้โมเดล) และขาออก (สิ่งที่โมเดลตอบ) และโมเดลใหญ่มักแพงกว่าโมเดลเล็กหลายเท่า ต้นทุนจึงขึ้นกับสามเรื่อง คือ เลือกโมเดลไหน ส่งข้อความยาวแค่ไหน และให้ตอบยาวแค่ไหน`,
            `สิ่งที่หลายทีมมองข้ามคือ context ที่แนบไปทุกครั้ง เช่น system prompt ยาวๆ ประวัติแชตทั้งหมด หรือเอกสารที่ดึงมาจาก RAG ทีละหลายชิ้น ข้อความเหล่านี้ถูกคิดเงินซ้ำทุกคำขอ แม้ผู้ใช้จะพิมพ์มาแค่คำว่า "ขอบคุณครับ" ก็ตาม`,
          ],
        },
        {
          h: `เลือกโมเดลให้เหมาะกับงาน (model routing)`,
          p: [
            `ไม่ใช่ทุกงานต้องใช้โมเดลที่เก่งที่สุด งานจัดหมวดข้อความ ดึงข้อมูลจากฟอร์ม หรือตอบคำถามที่พบบ่อย โมเดลเล็กทำได้ดีพอและเร็วกว่า ส่วนโมเดลใหญ่ควรเก็บไว้สำหรับงานที่ต้องคิดหลายขั้น เขียนเนื้อหายาว หรือตัดสินใจที่ซับซ้อน`,
            `วิธีที่ใช้บ่อยคือให้โมเดลเล็กคัดแยกคำขอก่อน ถ้าเป็นเรื่องง่ายก็ตอบเองเลย ถ้ายากค่อยส่งต่อให้โมเดลใหญ่ เช่น แชตบอตร้านค้าบน LINE OA ที่คำถามส่วนมากเป็นเรื่องเวลาเปิดปิด ค่าส่ง หรือสถานะพัสดุ ไม่จำเป็นต้องให้โมเดลใหญ่ตอบทุกข้อความ ข้อสำคัญคือต้องมีชุดทดสอบไว้วัดว่าโมเดลเล็กยังตอบถูกในงานที่มอบให้`,
          ],
          quote: `โมเดลที่ถูกที่สุดคือโมเดลที่เล็กที่สุดซึ่งยังทำงานนั้นได้ดีพอ`,
        },
        {
          h: `ลดสิ่งที่ส่งเข้าและส่งออก`,
          p: [
            `เทคนิคกลุ่มนี้ทำได้เร็วและมักเห็นผลทันที เริ่มจากดูว่าในแต่ละคำขอมีอะไรที่ไม่จำเป็นต้องส่ง แล้วค่อยๆ ตัดออก โดยวัดคุณภาพคำตอบไปพร้อมกัน`,
            `ลำดับก็สำคัญ การตัด context และ prompt caching มักปลอดภัยที่สุดเพราะแทบไม่เปลี่ยนสิ่งที่โมเดลตอบ ส่วนการจำกัด output และ cache คำตอบ ต้องเช็กว่าคำตอบยังครบและข้อมูลยังเป็นปัจจุบัน เช่น ราคาหรือโปรโมชันที่เปลี่ยนบ่อย`,
          ],
          list: [
            `Prompt caching: ผู้ให้บริการหลายรายให้ cache ส่วนต้นของ prompt ที่ซ้ำกัน เช่น system prompt หรือเอกสารคู่มือ จัดส่วนที่คงที่ไว้ด้านหน้าเพื่อให้ cache ได้`,
            `ตัด context: สรุปประวัติแชตเก่าแทนการส่งทั้งหมด และดึงเอกสารจาก RAG เฉพาะชิ้นที่เกี่ยวจริง`,
            `จำกัด output: ตั้งค่าความยาวสูงสุด และบอกรูปแบบที่ต้องการ เช่น ตอบเป็น JSON หรือไม่เกินสามประโยค`,
            `Batching: งานที่ไม่ต้องได้ผลทันที เช่น สรุปรีวิวสินค้าเมื่อคืน ใช้ batch API ที่ผู้ให้บริการบางรายคิดราคาถูกกว่า`,
            `Cache คำตอบ: คำถามที่ซ้ำบ่อยและคำตอบไม่เปลี่ยน เก็บคำตอบไว้ใช้ซ้ำแทนการเรียกโมเดลใหม่`,
          ],
        },
        {
          h: `ตั้งงบ แจ้งเตือน และกันการใช้ผิดปกติ`,
          p: [
            `อย่ารอดูบิลตอนสิ้นเดือน ตั้งงบรายวันหรือรายสัปดาห์ในบัญชีผู้ให้บริการ และตั้งการแจ้งเตือนเมื่อการใช้งานพุ่งผิดปกติ ส่งเข้า LINE หรือ Slack ของทีมที่ดูแล เพื่อให้รู้ตัวภายในชั่วโมง ไม่ใช่ภายในเดือน`,
            `ในระบบควรมีขีดจำกัดต่อผู้ใช้และต่อฟีเจอร์ด้วย เช่น จำนวนข้อความต่อวันสำหรับผู้ใช้ฟรี หรือความยาวเอกสารสูงสุดที่อัปโหลดได้ เพราะบางครั้งต้นทุนที่พุ่งไม่ได้มาจากลูกค้าจริง แต่มาจากบอต สคริปต์ที่วนลูป หรือ agent ที่เรียกเครื่องมือซ้ำไม่หยุด การตั้งจำนวนรอบสูงสุดให้ agent เป็นเรื่องที่ควรทำตั้งแต่แรก`,
          ],
        },
        {
          h: `วัดต้นทุนต่องาน ไม่ใช่แค่ยอดรวม`,
          p: [
            `ยอดบิลรวมบอกแค่ว่าจ่ายเท่าไร แต่ไม่บอกว่าคุ้มไหม ตัวเลขที่มีประโยชน์กว่าคือต้นทุนต่องาน เช่น ต้นทุนต่อหนึ่งบทสนทนาที่ปิดได้ ต่อใบเสนอราคาที่ร่างเสร็จ หรือต่อเอกสารที่ตรวจแล้ว เมื่อมีตัวเลขนี้ คุณเทียบกับต้นทุนเดิมที่ทำด้วยคนได้ และรู้ว่าฟีเจอร์ไหนควรปรับก่อน`,
            `ทำได้โดยติด tag ทุกคำขอว่ามาจากฟีเจอร์ไหน ลูกค้ากลุ่มไหน และใช้โมเดลอะไร แล้วเก็บจำนวน token และเวลาตอบไว้ใน log เมื่อเปลี่ยนโมเดล ปรับ prompt หรือเพิ่ม cache ให้ดูทั้งต้นทุนต่องานและคุณภาพคู่กันเสมอ เพราะการประหยัดที่ทำให้คำตอบแย่ลงมักกลับมาเป็นต้นทุนในรูปของลูกค้าที่ไม่พอใจ`,
          ],
          list: [
            `ติด tag ฟีเจอร์ โมเดล และกลุ่มผู้ใช้ในทุกคำขอ`,
            `เก็บ token ขาเข้า ขาออก และ cache hit ไว้ดูย้อนหลัง`,
            `ทำ dashboard ต้นทุนต่องานแยกตามฟีเจอร์`,
            `ทบทวนทุกเดือนพร้อมผลวัดคุณภาพ`,
          ],
        },
      ],
      takeaways: [
        `ต้นทุน LLM ขึ้นกับโมเดลที่เลือก ความยาวขาเข้า และความยาวขาออก`,
        `ใช้โมเดลเล็กกับงานง่าย และส่งต่อให้โมเดลใหญ่เฉพาะงานยาก`,
        `Prompt caching, ตัด context, จำกัด output, batching และ cache คำตอบ ช่วยลดต้นทุนได้โดยไม่ลดคุณภาพ`,
        `ตั้งงบ แจ้งเตือน และขีดจำกัดต่อผู้ใช้ เพื่อกันค่าใช้จ่ายพุ่งจากบอตหรือ agent วนลูป`,
        `วัดต้นทุนต่องานคู่กับคุณภาพ ไม่ใช่ดูแค่ยอดบิลรวม`,
      ],
      figCaption: `แผนภาพเส้นทางคำขอผ่าน cache และตัวคัดแยกไปยังโมเดลเล็กหรือโมเดลใหญ่`,
      faq: [
        {
          q: `ควรเริ่มลดต้นทุนจากเทคนิคไหนก่อน`,
          a: `เริ่มจากวัดก่อนว่าฟีเจอร์ไหนใช้ token มากที่สุด แล้วลองตัด context ที่ไม่จำเป็นและเปิด prompt caching ซึ่งมักทำได้เร็ว จากนั้นค่อยพิจารณาย้ายงานง่ายไปโมเดลเล็ก`,
        },
        {
          q: `ใช้โมเดลเล็กแล้วคุณภาพจะแย่ลงไหม`,
          a: `ขึ้นกับงาน บางงานแทบไม่ต่าง บางงานต่างมาก จึงต้องมีชุดทดสอบจากเคสจริงไว้เทียบก่อนสลับ และติดตามผลหลังเปลี่ยนด้วย`,
        },
        {
          q: `ควรรันโมเดลเองแทนการใช้ API ไหม`,
          a: `อาจคุ้มเมื่อปริมาณงานสูงและสม่ำเสมอ หรือมีข้อจำกัดเรื่องข้อมูล แต่ต้องรวมค่าเครื่อง ค่าดูแล และเวลาทีมเข้าไปด้วย สำหรับทีมส่วนใหญ่ เริ่มจาก API แล้วคุมต้นทุนให้ดีมักง่ายกว่า`,
        },
      ],
    },
    en: {
      title: `Keeping LLM API Costs Under Control in Production`,
      excerpt: `AI API bills look tiny in a prototype and climb once real users arrive. Practical ways to route models, cache, trim context, cap output, set budgets and track cost per task.`,
      metaTitle: `How to Keep LLM API Costs Under Control`,
      metaDescription: `Control LLM API costs in production with model routing, prompt caching, batching, trimmed context, output limits, answer caching, budgets and cost per task.`,
      intro: `Many teams hit the same wall. During the prototype, AI API costs are too small to notice. Once customers use the feature, the monthly bill grows faster than revenue. The good news is that most of the cost is a design choice, and you can cut it without cutting quality. Here are the techniques we use, with no specific prices, since vendor pricing changes often.`,
      sections: [
        {
          h: `First, see where the money goes`,
          p: [
            `Most LLM pricing is per token, for both input (what you send) and output (what the model writes), and large models usually cost several times more than small ones. So cost comes down to three things: which model, how much you send, and how much it writes back.`,
            `The part teams overlook is the context attached to every call: a long system prompt, the full chat history, several documents pulled in by RAG. You pay for all of it on every request, even when the user only typed "thanks".`,
          ],
        },
        {
          h: `Match the model to the job (model routing)`,
          p: [
            `Not every task needs the strongest model. Classifying messages, extracting fields from a form or answering common questions are jobs a small model does well, and faster. Save the large model for multi-step reasoning, long writing and complex decisions.`,
            `A common pattern is to let a small model triage each request: answer the easy ones itself, and pass hard ones to a larger model. A shop chatbot on LINE OA, where most questions are about opening hours, shipping fees or parcel status, does not need a large model for every message. The key is a test set that proves the small model still gets its assigned jobs right.`,
          ],
          quote: `The cheapest model is the smallest one that still does the job well enough.`,
        },
        {
          h: `Send less, and ask for less back`,
          p: [
            `These techniques are quick and usually pay off immediately. Look at what each request carries that it does not need, remove it step by step, and measure answer quality as you go.`,
            `Order matters. Trimming and caching are usually the safest first moves because they rarely change what the model says, while output limits and answer caching need a quick check that answers are still complete and up to date.`,
          ],
          list: [
            `Prompt caching: many providers can cache a repeated prompt prefix, such as the system prompt or a manual. Put the stable parts first so they can be cached.`,
            `Trim context: summarise older chat turns instead of resending them, and retrieve only the RAG chunks that are truly relevant.`,
            `Limit output: set a maximum length and ask for a format, such as JSON or no more than three sentences.`,
            `Batching: for work that is not urgent, like summarising last night's product reviews, use a batch API, which some providers price lower.`,
            `Cache answers: for frequent questions whose answers do not change, store and reuse the answer instead of calling the model again.`,
          ],
        },
        {
          h: `Budgets, alerts and guarding against runaway use`,
          p: [
            `Do not wait for the month-end bill. Set daily or weekly budgets in your provider account, and alerts for unusual spikes sent to the team's LINE or Slack, so you find out within the hour rather than the month.`,
            `Inside the product, add limits per user and per feature, such as daily messages for free users or a maximum upload size. Sometimes a cost spike comes not from real customers but from bots, a looping script, or an agent calling tools over and over. Setting a maximum number of steps for agents is worth doing from day one.`,
          ],
        },
        {
          h: `Measure cost per task, not just the total`,
          p: [
            `The total bill tells you what you paid, not whether it was worth it. A more useful number is cost per task: per resolved conversation, per drafted quotation, per checked document. With that, you can compare against the cost of doing it by hand and see which feature to tune first.`,
            `Tag every request with its feature, customer segment and model, and log token counts and latency. Whenever you switch models, change a prompt or add caching, look at cost per task and quality together. Savings that make answers worse tend to come back as unhappy customers.`,
          ],
          list: [
            `Tag each request with feature, model and user segment.`,
            `Log input tokens, output tokens and cache hits.`,
            `Build a cost-per-task dashboard by feature.`,
            `Review monthly alongside quality results.`,
          ],
        },
      ],
      takeaways: [
        `LLM cost depends on the model, the input length and the output length.`,
        `Use small models for easy work and route only hard requests to large ones.`,
        `Prompt caching, trimmed context, output limits, batching and answer caching cut cost without cutting quality.`,
        `Budgets, alerts and per-user limits stop spikes from bots or looping agents.`,
        `Track cost per task together with quality, not just the total bill.`,
      ],
      figCaption: `Diagram of a request passing through a cache and a router to a small or large model.`,
      faq: [
        {
          q: `Which technique should we try first?`,
          a: `Measure first to find the feature using the most tokens. Then trim unneeded context and turn on prompt caching, which are usually quick wins. After that, consider moving easy tasks to a smaller model.`,
        },
        {
          q: `Will a smaller model hurt quality?`,
          a: `It depends on the task. For some there is little difference, for others a lot. Keep a test set of real cases to compare before switching, and keep watching after the change.`,
        },
        {
          q: `Should we host our own model instead of using an API?`,
          a: `It can pay off at high, steady volume or with strict data constraints, but include hardware, maintenance and team time. For most teams, starting with an API and controlling cost well is simpler.`,
        },
      ],
    },
  },
  {
    slug: 'ai-agents-first-workflow',
    cat: 'AI',
    date: '2026-11-02',
    readMin: 8,
    tags: ['AI Agents', 'Automation', 'Workflow', 'Human in the Loop', 'AI Strategy'],
    related: ['ai-agent-guardrails', 'mcp-explained', 'ai-roi-measure'],
    th: {
      title: `เลือกงานแรกให้ AI Agent: เกณฑ์ ตัวอย่างธุรกิจไทย และแผน 30-60-90 วัน`,
      excerpt: `งานแรกที่มอบให้ AI agent ตัดสินว่าโปรเจกต์จะไปต่อหรือเงียบหาย เกณฑ์เลือกงาน ตัวอย่างจากธุรกิจไทย และแผน 30-60-90 วันที่ใช้ได้จริง`,
      metaTitle: `เลือกงานแรกให้ AI Agent พร้อมแผน 30-60-90 วัน`,
      metaDescription: `เกณฑ์เลือกงานแรกให้ AI agent ทั้งงานซ้ำ มีกฎชัด วัดผลได้ ความเสี่ยงต่ำ และมีคนตรวจ พร้อมตัวอย่างจาก LINE OA คลินิก และงานจัดซื้อ และแผน 30-60-90 วัน`,
      intro: `หลายบริษัทอยากเริ่มใช้ AI agent แต่ติดอยู่ที่คำถามเดียว คือจะเริ่มจากงานไหนดี ถ้าเลือกงานที่ใหญ่และเสี่ยงเกินไป โปรเจกต์มักสะดุดและทีมเสียความเชื่อมั่น ถ้าเลือกงานที่เล็กเกินไป ก็ไม่มีใครเห็นคุณค่า บทความนี้ให้เกณฑ์เลือกงาน ตัวอย่างที่เห็นภาพในธุรกิจไทย และแผน 30-60-90 วันที่ทีม Haliviq แนะนำ`,
      sections: [
        {
          h: `AI agent ต่างจากแชตบอตอย่างไร`,
          p: [
            `แชตบอตตอบคำถาม ส่วน AI agent ทำงานต่อได้หลายขั้น มันอ่านข้อมูล ตัดสินใจว่าจะใช้เครื่องมือไหน เรียกระบบอื่น แล้วส่งผลลัพธ์ต่อ เช่น อ่านแชตลูกค้า ค้นข้อมูลใน CRM แล้วร่างบันทึกให้พนักงานตรวจ`,
            `ความสามารถนี้มีประโยชน์มาก แต่ก็หมายความว่าความผิดพลาดหนึ่งครั้งอาจส่งผลต่อหลายระบบ การเลือกงานแรกจึงไม่ใช่แค่เลือกงานที่น่าทำ แต่ต้องเลือกงานที่ผิดพลาดแล้วแก้ได้ง่าย และวัดได้ชัดว่าดีขึ้นจริงไหม`,
          ],
        },
        {
          h: `เกณฑ์เลือกงานแรก`,
          p: [
            `ใช้เกณฑ์ห้าข้อนี้ให้คะแนนงานที่ทีมเสนอมา งานที่ผ่านครบทุกข้อคือผู้สมัครที่ดี ถ้าตกข้อไหน ให้ถามว่าปรับขอบเขตงานให้ผ่านได้ไหม ก่อนจะตัดทิ้ง`,
            `เช่น "ตอบลูกค้าทุกเรื่องใน LINE OA" อาจเสี่ยงเกินไป แต่ "สรุปแชตที่จบแล้วเข้า CRM ให้พนักงานยืนยัน" ผ่านทุกข้อ งานเดียวกันแต่ขอบเขตต่างกัน ผลลัพธ์ก็ต่างกันมาก`,
          ],
          list: [
            `ซ้ำบ่อย: เกิดขึ้นทุกวันหรือทุกสัปดาห์ ไม่ใช่นานๆ ครั้ง`,
            `มีกฎชัด: คนที่ทำอยู่อธิบายขั้นตอนเป็นข้อๆ ได้ และมีตัวอย่างงานที่ทำเสร็จให้ดู`,
            `วัดผลได้: รู้ว่าวันนี้ใช้เวลาเท่าไร ผิดบ่อยแค่ไหน เพื่อเทียบหลังใช้ agent`,
            `ความเสี่ยงต่ำ: ถ้า agent พลาด ความเสียหายจำกัดและแก้ได้ ไม่กระทบเงินหรือสุขภาพของลูกค้าโดยตรง`,
            `มีคนตรวจ: มีจุดที่คนดูผลงานก่อนส่งออกไปข้างนอก (human in the loop)`,
          ],
          quote: `งานแรกที่ดีไม่จำเป็นต้องน่าตื่นเต้น แต่ต้องพิสูจน์ได้ว่าช่วยจริงภายในไม่กี่สัปดาห์`,
        },
        {
          h: `ตัวอย่างงานแรกจากธุรกิจไทย`,
          p: [
            `สรุปแชต LINE OA เข้า CRM: ร้านค้าหรือบริษัทอสังหาฯ ที่รับลูกค้าผ่าน LINE OA มักมีบทสนทนาที่ไม่ได้บันทึก agent อ่านแชตที่จบแล้ว สรุปความต้องการ งบ และนัดหมาย แล้วร่างบันทึกใน CRM ให้พนักงานขายกดยืนยัน ตรวจเอกสารจัดซื้อ: โรงงานหรือบริษัทที่มีใบสั่งซื้อ ใบส่งของ และใบแจ้งหนี้จำนวนมาก ให้ agent เทียบสามเอกสารว่าจำนวนและราคาตรงกันไหม แล้วส่งเฉพาะรายการที่ไม่ตรงให้ฝ่ายบัญชีดู`,
            `ร่างใบเสนอราคา: ทีมขายที่ทำใบเสนอราคาจากรายการสินค้าและเงื่อนไขเดิมซ้ำๆ ให้ agent ร่างจากคำขอของลูกค้าและราคาในระบบ แล้วให้คนตรวจก่อนส่ง จัดนัดคลินิก: คลินิกความงามหรือคลินิกทันตกรรมที่รับนัดผ่านแชต ให้ agent หาเวลาว่างของแพทย์และเสนอช่วงเวลาให้คนไข้เลือก แต่เรื่องอาการหรือคำแนะนำทางการแพทย์ให้ส่งต่อเจ้าหน้าที่เสมอ`,
            `สังเกตว่าทุกตัวอย่างมีคนอยู่ในขั้นตอนสุดท้าย agent ทำส่วนที่น่าเบื่อและใช้เวลา ส่วนการตัดสินใจที่มีผลจริงยังเป็นของคน`,
          ],
        },
        {
          h: `แผน 30-60-90 วัน`,
          p: [
            `30 วันแรก: เลือกงานหนึ่งงาน เก็บตัวอย่างงานจริงที่ทำเสร็จแล้ว วัดเวลาและความผิดพลาดปัจจุบัน และสร้าง agent เวอร์ชันแรกที่ทำงานในโหมด "ร่างอย่างเดียว" ให้คนกลุ่มเล็กใช้คู่กับวิธีเดิม 60 วัน: ปรับ prompt และเครื่องมือจากเคสที่พลาด ตั้งชุดทดสอบจากเคสจริง เชื่อมกับระบบจริงแบบอ่านอย่างเดียวหรือร่างรอยืนยัน และเริ่มวัดเวลาที่ประหยัดได้`,
            `90 วัน: ถ้าตัวเลขดี ขยายให้ทีมทั้งหมดใช้ เขียนคู่มือว่าเมื่อไรต้องส่งต่อให้คน ตั้งการติดตามคุณภาพและต้นทุนต่อเนื่อง แล้วค่อยเลือกงานที่สองโดยใช้บทเรียนจากงานแรก ถ้าตัวเลขไม่ดี ก็ไม่ใช่ความล้มเหลว แต่เป็นข้อมูลว่าควรปรับขอบเขตหรือเปลี่ยนงาน`,
          ],
        },
        {
          h: `กับดักที่เจอบ่อย`,
          p: [
            `กับดักแรกคือเริ่มจากงานที่ผู้บริหารอยากเห็นที่สุด ซึ่งมักใหญ่และคลุมเครือ เช่น "ให้ AI ดูแลลูกค้าทั้งหมด" กับดักที่สองคือไม่วัดสถานะก่อนเริ่ม พอผ่านไปสามเดือนก็ไม่มีใครบอกได้ว่าดีขึ้นแค่ไหน`,
            `กับดักที่สามคือให้สิทธิ์ agent มากเกินไปตั้งแต่ต้น เช่น ส่งข้อความหาลูกค้าเองหรือแก้ข้อมูลในระบบโดยไม่มีคนยืนยัน และกับดักสุดท้ายคือลืมคนที่ทำงานนั้นอยู่ ถ้าทีมรู้สึกว่า agent มาแทนที่ พวกเขาจะไม่ช่วยชี้จุดที่ผิด ให้ชวนพวกเขามาเป็นผู้ออกแบบและผู้ตรวจตั้งแต่วันแรก`,
          ],
        },
      ],
      takeaways: [
        `AI agent ทำงานหลายขั้นและเรียกระบบอื่นได้ งานแรกจึงต้องเลือกให้พลาดแล้วแก้ง่าย`,
        `เกณฑ์ห้าข้อ: ซ้ำบ่อย มีกฎชัด วัดผลได้ ความเสี่ยงต่ำ และมีคนตรวจ`,
        `ตัวอย่างที่ดี: สรุปแชต LINE OA เข้า CRM ตรวจเอกสารจัดซื้อ ร่างใบเสนอราคา จัดนัดคลินิก`,
        `ใช้แผน 30-60-90 วัน เริ่มจากโหมดร่าง วัดผล แล้วค่อยขยาย`,
        `วัดสถานะก่อนเริ่ม และชวนคนที่ทำงานนั้นมาร่วมออกแบบ`,
      ],
      figCaption: `ไทม์ไลน์ 30-60-90 วันสำหรับนำ AI agent เข้ามาใช้กับงานแรก`,
      faq: [
        {
          q: `ต้องมีทีม AI ภายในก่อนเริ่มไหม`,
          a: `ไม่จำเป็น แต่ต้องมีเจ้าของงานที่รู้ขั้นตอนจริง และมีคนดูแลเทคนิคที่เชื่อมกับระบบได้ จะเป็นทีมภายในหรือพาร์ตเนอร์ภายนอกก็ได้`,
        },
        {
          q: `เมื่อไรถึงจะให้ agent ทำงานเองโดยไม่มีคนตรวจ`,
          a: `เมื่อมีข้อมูลต่อเนื่องว่าผลงานถูกต้องสม่ำเสมอในงานประเภทนั้น และความเสียหายถ้าพลาดยังรับได้ แม้จะถึงจุดนั้น ก็ควรสุ่มตรวจเป็นระยะ`,
        },
        {
          q: `งานแรกควรใช้เวลานานแค่ไหนถึงเห็นผล`,
          a: `ควรเห็นสัญญาณภายในหนึ่งถึงสองเดือน ถ้าผ่านไปนานกว่านั้นแล้วยังบอกไม่ได้ว่าดีขึ้นไหม มักแปลว่าขอบเขตงานกว้างเกินไปหรือไม่ได้วัดตั้งแต่ต้น`,
        },
      ],
    },
    en: {
      title: `Choosing the First Workflow for an AI Agent: Criteria, Examples and a 30-60-90 Plan`,
      excerpt: `The first job you give an AI agent often decides whether the project grows or fades. Selection criteria, examples from Thai businesses, and a 30-60-90 day plan.`,
      metaTitle: `Picking Your First AI Agent Workflow: 30-60-90`,
      metaDescription: `How to pick the first workflow for an AI agent: repetitive, rule-based, measurable, low-risk, human-checked. Thai examples and a practical 30-60-90 day plan.`,
      intro: `Many companies want to start with AI agents and get stuck on one question: which job first? Pick something too big or risky and the project stalls and the team loses faith. Pick something too small and nobody sees the value. Here are selection criteria, examples from Thai businesses, and the 30-60-90 day plan we recommend.`,
      sections: [
        {
          h: `How an AI agent differs from a chatbot`,
          p: [
            `A chatbot answers questions. An AI agent carries out several steps: it reads data, decides which tool to use, calls other systems and passes the result on. For example, it reads a customer chat, looks up the CRM and drafts a note for a staff member to check.`,
            `That is powerful, but it also means one mistake can touch several systems. So the first workflow is not just one that looks exciting. It should be one where mistakes are easy to fix and improvement is easy to measure.`,
          ],
        },
        {
          h: `Criteria for the first workflow`,
          p: [
            `Score the candidate jobs your team suggests against these five points. A job that passes all five is a strong candidate. If it fails one, ask whether a narrower scope would pass before you drop it.`,
            `For example, "answer every customer on LINE OA" may be too risky, while "summarise finished chats into the CRM for staff to confirm" passes all five. Same area of work, different scope, very different results.`,
          ],
          list: [
            `Repetitive: it happens daily or weekly, not once in a while.`,
            `Rule-based: the person doing it can list the steps and show finished examples.`,
            `Measurable: you know today's time spent and error rate, so you can compare later.`,
            `Low-risk: if the agent slips, the damage is limited and fixable, with no direct effect on customers' money or health.`,
            `Human in the loop: someone reviews the output before it leaves the company.`,
          ],
          quote: `A good first workflow does not need to be exciting. It needs to prove it helps within a few weeks.`,
        },
        {
          h: `First-workflow examples from Thai businesses`,
          p: [
            `Summarising LINE OA chats into the CRM: shops and property developers that take enquiries on LINE OA often have conversations nobody logs. The agent reads finished chats, summarises needs, budget and appointments, and drafts a CRM note for the salesperson to confirm. Checking purchase documents: factories and companies handling many purchase orders, delivery notes and invoices can have the agent match all three on quantity and price, and send only mismatches to accounts.`,
            `Drafting quotations: sales teams that build quotes from the same catalogue and terms can have the agent draft from the customer's request and system prices, with a person checking before sending. Scheduling clinic appointments: aesthetic or dental clinics that book through chat can have the agent find open doctor slots and offer times, while any question about symptoms or medical advice always goes to staff.`,
            `Notice that a person sits at the last step in every example. The agent does the tedious, time-consuming part; decisions with real consequences stay with people.`,
          ],
        },
        {
          h: `The 30-60-90 day plan`,
          p: [
            `First 30 days: pick one workflow, collect real finished examples, measure current time and errors, and build a first agent that only drafts, used by a small group alongside the old way. By 60 days: refine prompts and tools from the cases it got wrong, build a test set from real cases, connect to live systems in read-only or draft-and-confirm mode, and start measuring time saved.`,
            `By 90 days: if the numbers are good, roll it out to the whole team, write down when to hand off to a person, and set up ongoing quality and cost tracking. Then choose the second workflow using what you learned. If the numbers are not good, that is not failure; it tells you to narrow the scope or pick a different job.`,
          ],
        },
        {
          h: `Common traps`,
          p: [
            `The first trap is starting with the job leadership most wants to see, which tends to be big and vague, like "let AI handle all customers". The second is not measuring the starting point, so after three months nobody can say how much better things are.`,
            `The third is giving the agent too much power too soon, such as messaging customers or editing records without confirmation. The last is forgetting the people who do the job today. If they feel replaced, they will not point out mistakes. Bring them in as designers and reviewers from day one.`,
          ],
        },
      ],
      takeaways: [
        `AI agents take multiple steps and call other systems, so the first job should be easy to correct.`,
        `Five criteria: repetitive, rule-based, measurable, low-risk, human in the loop.`,
        `Good starters: LINE OA chat summaries into the CRM, purchase document checks, quote drafts, clinic scheduling.`,
        `Follow a 30-60-90 plan: draft mode first, measure, then expand.`,
        `Measure the baseline before you start, and involve the people who do the work.`,
      ],
      figCaption: `A 30-60-90 day timeline for bringing an AI agent into its first workflow.`,
      faq: [
        {
          q: `Do we need an in-house AI team first?`,
          a: `No, but you need a process owner who knows the real steps and someone technical who can connect the systems. That can be an internal team or an outside partner.`,
        },
        {
          q: `When can the agent work without a human check?`,
          a: `When you have steady evidence that its output is consistently right for that type of task and the cost of a mistake is acceptable. Even then, keep spot-checking.`,
        },
        {
          q: `How long until the first workflow shows results?`,
          a: `You should see signals within one to two months. If you still cannot tell after that, the scope is usually too broad or the baseline was never measured.`,
        },
      ],
    },
  },
  {
    slug: 'ai-evals-before-launch',
    cat: 'AI',
    date: '2026-10-26',
    readMin: 9,
    tags: ['AI Evals', 'LLM Testing', 'LLM-as-Judge', 'Monitoring', 'Thai NLP'],
    related: ['rag-in-production', 'llm-cost-control', 'ux-for-ai-features'],
    th: {
      title: `ประเมินฟีเจอร์ AI ก่อนและหลังเปิดตัว: ทำ evals ให้ใช้ได้จริง`,
      excerpt: `ฟีเจอร์ AI ที่ดูดีในเดโมอาจพลาดกับลูกค้าจริง วิธีสร้างชุดทดสอบจากเคสจริง เกณฑ์ให้คะแนน ใช้ LLM-as-judge อย่างระวัง และเฝ้าดูหลังเปิดตัว`,
      metaTitle: `ประเมินฟีเจอร์ AI ก่อนและหลังเปิดตัว (AI Evals)`,
      metaDescription: `วิธีทำ AI evals ให้ใช้ได้จริง ตั้งแต่สร้างชุดทดสอบจากเคสจริง เขียน rubric ใช้ LLM-as-judge อย่างระวัง ตรวจ regression เฝ้าดูระบบจริง และเรื่องภาษาไทย`,
      intro: `ซอฟต์แวร์ทั่วไปเราทดสอบว่ากดปุ่มแล้วได้ผลตรงตามที่เขียนไว้ไหม แต่ฟีเจอร์ AI ตอบไม่เหมือนเดิมทุกครั้ง และ "ถูก" ก็มักมีหลายแบบ หลายทีมจึงเปิดตัวด้วยความรู้สึกว่า "ลองแล้วก็ดูโอเค" ซึ่งไม่พอเมื่อมีลูกค้าจริงหลายพันข้อความ บทความนี้อธิบายวิธีทำ evals แบบที่ทีมเล็กก็ทำได้ ตั้งแต่ก่อนเปิดตัวจนถึงหลังใช้งานจริง`,
      sections: [
        {
          h: `เริ่มจากชุดทดสอบที่มาจากเคสจริง`,
          p: [
            `ชุดทดสอบที่ดีที่สุดไม่ได้มาจากการนั่งคิดคำถามเอง แต่มาจากข้อมูลจริงของธุรกิจ เช่น แชตลูกค้าใน LINE OA อีเมลสอบถาม หรือเอกสารที่ทีมใช้ประจำ เลือกมาให้ครอบคลุมทั้งเคสทั่วไป เคสยาก และเคสที่ AI ไม่ควรตอบ แล้วลบหรือปิดข้อมูลส่วนบุคคลก่อนนำมาใช้ตาม PDPA`,
            `แต่ละเคสควรมีคำตอบที่คาดหวังหรืออย่างน้อยคำอธิบายว่าคำตอบที่ดีต้องมีอะไร คนที่เขียนส่วนนี้ควรเป็นคนที่ทำงานนั้นจริง เช่น แอดมินที่ตอบลูกค้าทุกวัน ไม่ใช่นักพัฒนาอย่างเดียว เริ่มจากจำนวนไม่มากที่คัดมาอย่างดีก็พอ แล้วค่อยเพิ่มจากเคสที่พลาดในระบบจริง`,
          ],
          list: [
            `เคสทั่วไปที่เจอบ่อยที่สุด`,
            `เคสยากหรือกำกวม ที่คนยังต้องคิด`,
            `เคสที่ควรปฏิเสธหรือส่งต่อคน`,
            `เคสที่มีภาษาพูด สะกดผิด หรือปนภาษาอังกฤษ`,
            `เคสที่เคยพลาดมาแล้ว (เพิ่มทุกครั้งที่เจอ)`,
          ],
        },
        {
          h: `Rubric: เขียนให้ชัดว่า "ดี" คืออะไร`,
          p: [
            `Rubric คือเกณฑ์ให้คะแนนที่แตกเป็นข้อๆ แทนการถามว่า "คำตอบนี้ดีไหม" ให้ถามทีละเรื่อง เช่น ข้อมูลถูกต้องตามเอกสารไหม ตอบตรงคำถามไหม น้ำเสียงเหมาะกับแบรนด์ไหม และมีข้อมูลที่ไม่ควรบอกหลุดออกมาไหม แต่ละข้อควรตอบได้ด้วยใช่หรือไม่ หรือคะแนนช่วงสั้นๆ`,
            `บางเรื่องเช็กด้วยโค้ดได้เลย เช่น คำตอบเป็น JSON ที่ถูกรูปแบบไหม มีลิงก์ที่ไม่ได้อยู่ในรายการที่อนุญาตไหม หรือราคาที่ตอบตรงกับระบบไหม เรื่องเหล่านี้ควรใช้การเช็กแบบตายตัว เพราะเร็ว ถูก และไม่มีความเห็นส่วนตัวมาปน`,
          ],
        },
        {
          h: `LLM-as-judge: ใช้ได้ แต่ต้องตรวจตัวกรรมการด้วย`,
          p: [
            `เมื่อชุดทดสอบใหญ่ขึ้น การให้คนอ่านทุกคำตอบเริ่มไม่ไหว หลายทีมจึงใช้ LLM อีกตัวเป็นกรรมการให้คะแนนตาม rubric วิธีนี้ช่วยได้มาก แต่กรรมการก็พลาดได้ เช่น ให้คะแนนคำตอบยาวสูงกว่าโดยไม่จำเป็น ชอบคำตอบที่ฟังมั่นใจ หรือไม่รู้ว่าข้อมูลเฉพาะของธุรกิจคุณถูกหรือผิด`,
            `วิธีใช้อย่างระวังคือให้คนให้คะแนนเคสชุดหนึ่งก่อน แล้วเทียบว่ากรรมการ AI เห็นตรงกับคนแค่ไหน ถ้าไม่ตรงก็ปรับ prompt ของกรรมการ ให้กรรมการตอบทีละเกณฑ์พร้อมเหตุผลสั้นๆ แนบเอกสารอ้างอิงให้กรรมการดูด้วย และสุ่มให้คนตรวจซ้ำเป็นระยะ`,
          ],
          quote: `กรรมการ AI ที่ไม่เคยถูกเทียบกับคนจริง ก็เป็นแค่อีกความเห็นหนึ่งที่ฟังดูมั่นใจ`,
        },
        {
          h: `Regression: ทดสอบซ้ำทุกครั้งที่มีอะไรเปลี่ยน`,
          p: [
            `ผู้ให้บริการปล่อยโมเดลใหม่และเลิกใช้รุ่นเก่าอยู่เรื่อยๆ ทีมของคุณเองก็ปรับ prompt เปลี่ยนวิธีดึงเอกสาร หรือเพิ่มเครื่องมือใหม่ ทุกการเปลี่ยนแปลงอาจทำให้เคสที่เคยดีกลับพลาด จึงควรรันชุดทดสอบทั้งหมดก่อนเปลี่ยนทุกครั้ง เหมือน regression test ในซอฟต์แวร์ทั่วไป`,
            `ทำให้เป็นขั้นตอนอัตโนมัติใน CI ถ้าทำได้ เก็บผลแต่ละรอบไว้เทียบกัน และตั้งเกณฑ์ว่าคะแนนลดลงแค่ไหนถึงห้ามปล่อย อย่าดูแค่คะแนนเฉลี่ย เพราะคะแนนรวมอาจดีขึ้นขณะที่เคสสำคัญบางกลุ่มแย่ลง ให้ดูแยกตามหมวดด้วย`,
          ],
        },
        {
          h: `หลังเปิดตัว และเรื่องเฉพาะของภาษาไทย`,
          p: [
            `ในระบบจริง ให้เก็บสัญญาณจากผู้ใช้ เช่น ปุ่มถูกใจหรือไม่ถูกใจ จำนวนครั้งที่ขอคุยกับคน และคำถามที่ถามซ้ำหลังได้คำตอบ สุ่มบทสนทนามาให้คนอ่านทุกสัปดาห์ แล้วนำเคสที่พลาดกลับเข้าชุดทดสอบ วงจรนี้ทำให้ evals ดีขึ้นเรื่อยๆ ตามการใช้งานจริง`,
            `ภาษาไทยมีเรื่องที่ต้องใส่ใจเป็นพิเศษ ชุดทดสอบควรมีเคสเหล่านี้ และ rubric ควรมีข้อที่ตรวจเรื่องภาษาด้วย`,
          ],
          list: [
            `ไม่มีเว้นวรรคระหว่างคำ การตัดคำผิดอาจทำให้ค้นเอกสารพลาด`,
            `ภาษาพูด คำสแลง และการสะกดตามเสียง เช่น "ม่าย" "ป่าว"`,
            `ปนภาษาอังกฤษ เช่น "ขอเช็กสต็อก size M หน่อยค่ะ"`,
            `คำลงท้ายและระดับความสุภาพ ครับ/ค่ะ ต้องเหมาะกับแบรนด์และผู้ถาม`,
            `ตัวเลข วันที่ และปี พ.ศ. กับ ค.ศ. ที่อาจสลับกัน`,
          ],
        },
      ],
      takeaways: [
        `สร้างชุดทดสอบจากเคสจริง ครอบคลุมเคสทั่วไป เคสยาก และเคสที่ต้องส่งต่อคน`,
        `เขียน rubric เป็นข้อๆ และใช้การเช็กด้วยโค้ดเมื่อทำได้`,
        `ใช้ LLM-as-judge ได้ แต่ต้องเทียบกับคะแนนของคนก่อนและสุ่มตรวจต่อเนื่อง`,
        `รัน regression ทุกครั้งที่เปลี่ยนโมเดลหรือ prompt และดูผลแยกหมวด`,
        `เฝ้าดูหลังเปิดตัว และใส่ใจเรื่องภาษาไทย ทั้งตัดคำ ภาษาพูด ภาษาปน และปี พ.ศ.`,
      ],
      figCaption: `วงจร evals ตั้งแต่ชุดทดสอบ rubric กรรมการ ไปจนถึงการเฝ้าดูระบบจริง`,
      faq: [
        {
          q: `ชุดทดสอบควรมีกี่เคส`,
          a: `ไม่มีตัวเลขตายตัว เริ่มจากจำนวนที่ทีมอ่านและให้คะแนนได้จริงในวันเดียว ขอให้ครอบคลุมทุกหมวดสำคัญ แล้วเพิ่มจากเคสที่พลาดในระบบจริงเรื่อยๆ`,
        },
        {
          q: `ใช้โมเดลเดียวกันเป็นทั้งผู้ตอบและกรรมการได้ไหม`,
          a: `ทำได้ แต่อาจลำเอียงเข้าข้างคำตอบแบบที่ตัวเองชอบ ถ้าทำได้ให้ใช้โมเดลอื่นเป็นกรรมการ และไม่ว่าจะใช้แบบไหน ต้องเทียบกับคะแนนของคนก่อน`,
        },
        {
          q: `ทีมเล็กไม่มีเครื่องมือ eval เฉพาะ เริ่มยังไง`,
          a: `เริ่มจากสเปรดชีตก็ได้ คอลัมน์หนึ่งเป็นคำถาม อีกคอลัมน์เป็นคำตอบที่คาดหวังและเกณฑ์ แล้วรันสคริปต์เก็บคำตอบมาให้คะแนน เครื่องมือเฉพาะค่อยพิจารณาเมื่อชุดทดสอบใหญ่ขึ้น`,
        },
      ],
    },
    en: {
      title: `Evaluating AI Features Before and After Launch: Practical Evals`,
      excerpt: `An AI feature that shines in a demo can stumble with real customers. How to build test sets from real cases, write rubrics, use LLM-as-judge carefully and monitor after launch.`,
      metaTitle: `AI Evals: Testing AI Features Before and After Launch`,
      metaDescription: `Practical AI evals: test sets from real cases, clear rubrics, careful LLM-as-judge, regression checks when models change, production monitoring and Thai quirks.`,
      intro: `With ordinary software, we test that a button does what the spec says. AI features answer differently each time, and "correct" often has many forms. So teams launch on the feeling that "we tried it and it seemed fine", which is not enough once thousands of real messages arrive. This guide shows how a small team can run evals from before launch through to live use.`,
      sections: [
        {
          h: `Start with a test set built from real cases`,
          p: [
            `The best test sets do not come from brainstorming questions. They come from real business data: LINE OA customer chats, enquiry emails, the documents your team uses every day. Cover common cases, hard cases and cases the AI should not answer, and remove or mask personal data first, in line with PDPA.`,
            `Each case needs an expected answer, or at least a description of what a good answer contains. That should be written by the people who do the job, such as the admin who answers customers daily, not only developers. A small, carefully chosen set is enough to start; grow it from the cases that fail in production.`,
          ],
          list: [
            `The most common everyday cases.`,
            `Hard or ambiguous cases where people still have to think.`,
            `Cases that should be refused or handed to a person.`,
            `Cases with slang, typos or mixed Thai and English.`,
            `Cases that have failed before (add one every time).`,
          ],
        },
        {
          h: `Rubrics: spell out what "good" means`,
          p: [
            `A rubric breaks scoring into separate checks. Instead of asking "is this answer good?", ask one thing at a time: is it accurate to the source, does it answer the question, is the tone right for the brand, did anything leak that should not have? Each check should be a yes or no, or a short score range.`,
            `Some checks need no judgement at all. Is the output valid JSON? Does it contain a link outside the allowed list? Does the quoted price match the system? Use deterministic code for these, because it is fast, cheap and free of opinion.`,
          ],
        },
        {
          h: `LLM-as-judge: useful, but check the judge too`,
          p: [
            `As the test set grows, reading every answer by hand stops scaling, so many teams use a second LLM to score against the rubric. It helps a lot, but judges make mistakes too: favouring longer answers for no reason, preferring confident tone, or not knowing whether a business-specific fact is right.`,
            `To use it carefully, have people score a batch of cases first and compare how often the AI judge agrees. If it does not, adjust the judge's prompt. Ask the judge to score one criterion at a time with a short reason, give it the reference documents, and keep spot-checking with people.`,
          ],
          quote: `An AI judge that has never been compared with people is just another confident opinion.`,
        },
        {
          h: `Regression: re-test whenever something changes`,
          p: [
            `Providers release new models and retire old ones regularly, and your own team tweaks prompts, changes retrieval or adds tools. Any change can break cases that used to work, so run the full test set before every change, just like regression tests in normal software.`,
            `Automate it in CI if you can, keep each run's results for comparison, and set a threshold for how far scores may drop before a release is blocked. Do not look only at the average: the overall score can rise while an important group of cases gets worse, so break results down by category.`,
          ],
        },
        {
          h: `After launch, and the Thai-language quirks`,
          p: [
            `In production, collect user signals such as thumbs up or down, requests to talk to a person, and questions asked again right after an answer. Have someone read a sample of conversations every week, and add failures back into the test set. That loop makes your evals better as real use grows.`,
            `Thai needs special attention. Your test set should include these cases, and your rubric should include language checks.`,
          ],
          list: [
            `No spaces between words, so poor word segmentation can break document search.`,
            `Spoken forms, slang and phonetic spellings that differ from standard Thai.`,
            `Mixed Thai and English, such as asking to check stock in "size M".`,
            `Polite particles and register (khrap/kha) that must suit the brand and the person asking.`,
            `Numbers, dates, and Buddhist Era versus Common Era years getting mixed up.`,
          ],
        },
      ],
      takeaways: [
        `Build test sets from real cases, covering common, hard and hand-off cases.`,
        `Write rubrics as separate checks, and use code checks wherever possible.`,
        `LLM-as-judge works, but calibrate it against human scores and keep spot-checking.`,
        `Run regression checks on every model or prompt change, and read results by category.`,
        `Monitor after launch, and test for Thai segmentation, slang, mixed language and BE years.`,
      ],
      figCaption: `The evals loop: test set, rubric, judge and production monitoring.`,
      faq: [
        {
          q: `How many cases should a test set have?`,
          a: `There is no fixed number. Start with as many as your team can actually read and score in a day, cover every important category, and keep adding cases that fail in production.`,
        },
        {
          q: `Can the same model answer and judge?`,
          a: `It can, but it may favour answers in its own style. Use a different model as judge if you can, and either way, compare it with human scores first.`,
        },
        {
          q: `We are a small team without eval tools. Where do we start?`,
          a: `A spreadsheet is fine: one column for the question, one for the expected answer and criteria, and a script that collects answers to score. Consider dedicated tools once the set grows.`,
        },
      ],
    },
  },
  {
    slug: 'ai-voice-agents-thai',
    cat: 'AI',
    date: '2026-10-19',
    readMin: 8,
    tags: ['Voice AI', 'Call Center', 'Speech Recognition', 'Thai Language', 'PDPA'],
    related: ['ai-agent-guardrails', 'thailand-pdpa-guide', 'ai-evals-before-launch'],
    th: {
      title: `AI Voice Agent สำหรับคอลเซ็นเตอร์และงานรับจองในไทย: ใช้ตรงไหนดี ระวังอะไร`,
      excerpt: `AI ที่รับสายและคุยภาษาไทยได้เริ่มใช้งานจริงแล้ว แต่ไม่ได้เหมาะกับทุกสาย งานที่เหมาะ งานที่ไม่ควรให้ทำ ความท้าทายของเสียงภาษาไทย การส่งต่อคน และ PDPA`,
      metaTitle: `AI Voice Agent ภาษาไทย สำหรับคอลเซ็นเตอร์และรับจอง`,
      metaDescription: `AI voice agent สำหรับคอลเซ็นเตอร์และงานรับจองในไทย งานที่เหมาะและไม่เหมาะ ความท้าทายของเสียงภาษาไทย การส่งต่อคน การบันทึกเสียงตาม PDPA และการวัดผล`,
      intro: `ลูกค้าไทยหลายคนยังชอบโทรมากกว่าพิมพ์ โดยเฉพาะเวลาจองคิว ถามเรื่องด่วน หรือไม่สะดวกพิมพ์ AI voice agent ที่ฟังและพูดภาษาไทยได้จึงน่าสนใจสำหรับคลินิก โรงแรม ร้านอาหาร และธุรกิจที่มีสายเข้าเยอะ แต่เสียงยากกว่าข้อความหลายเท่า บทความนี้ช่วยให้คุณแยกได้ว่างานไหนควรให้ AI รับ งานไหนควรให้คนรับ และต้องเตรียมอะไรก่อนเปิดใช้`,
      sections: [
        {
          h: `งานที่ AI voice agent ทำได้ดี`,
          p: [
            `งานที่เหมาะคืองานที่มีรูปแบบชัด คำถามคาดเดาได้ และคำตอบอยู่ในระบบ AI จะช่วยรับสายในช่วงที่คนไม่พอ ลดเวลารอสาย และให้พนักงานได้ใช้เวลากับเรื่องที่ต้องใช้คนจริงๆ`,
            `ตัวอย่างที่เห็นภาพในธุรกิจไทย มีดังนี้`,
          ],
          list: [
            `รับจองและเลื่อนนัด: คลินิก ร้านอาหาร สปา และโรงแรม ตรวจเวลาว่างจากระบบแล้วยืนยันกับลูกค้า`,
            `ตอบคำถามที่พบบ่อย: เวลาเปิดปิด ที่จอดรถ ราคาแพ็กเกจที่ประกาศไว้ ช่องทางชำระเงิน`,
            `เช็กสถานะคำสั่งซื้อหรือพัสดุ: ลูกค้าบอกเลขคำสั่งซื้อหรือเบอร์โทร แล้วระบบตอบสถานะล่าสุด`,
            `รับสายนอกเวลาทำการ: จดเรื่องที่ลูกค้าต้องการ แล้วส่งสรุปให้ทีมโทรกลับในวันถัดไป`,
          ],
        },
        {
          h: `งานที่ไม่ควรให้ AI รับ`,
          p: [
            `สายร้องเรียน ลูกค้าที่โกรธหรือเสียใจ ต้องการคนที่รับฟังและมีอำนาจแก้ปัญหา ถ้าเจอ AI ที่ตอบวนไปมา ความไม่พอใจจะเพิ่มขึ้นทันที เรื่องอ่อนไหวก็เช่นกัน เช่น อาการป่วยหรือผลตรวจ ปัญหาทางการเงิน เรื่องกฎหมาย หรือสายที่มีสัญญาณว่าผู้โทรอยู่ในอันตราย`,
            `งานที่ต้องตัดสินใจนอกกฎ เช่น ขอคืนเงินกรณีพิเศษ หรือต่อรองราคา ก็ไม่ควรให้ AI ตัดสินเอง แนวทางที่ดีคือออกแบบให้ AI จับสัญญาณเหล่านี้ได้เร็ว แล้วส่งต่อให้คนทันทีพร้อมสรุปเรื่องที่คุยมา ลูกค้าจะได้ไม่ต้องเล่าซ้ำ`,
          ],
          quote: `AI voice agent ที่ดีไม่ใช่ตัวที่รับทุกสายได้ แต่เป็นตัวที่รู้ว่าเมื่อไรควรส่งสายให้คน`,
        },
        {
          h: `ความท้าทายของเสียงภาษาไทย`,
          p: [
            `ภาษาไทยมีวรรณยุกต์ คำที่ออกเสียงคล้ายกันแต่ต่างเสียงสูงต่ำอาจมีความหมายต่างกันมาก ระบบรู้จำเสียงจึงพลาดได้ง่ายเมื่อสายมีเสียงรบกวนหรือผู้พูดพูดเร็ว นอกจากนั้นคนไทยมักพูดปนอังกฤษ เช่น "ขอ book คิวทำ facial วันเสาร์" ซึ่งต้องทดสอบให้ดี`,
            `ชื่อคน ชื่อสินค้า และตัวเลขคือจุดที่พลาดบ่อยที่สุด ชื่อไทยสะกดได้หลายแบบ เบอร์โทรและเลขคำสั่งซื้อต้องถูกทุกหลัก จึงควรให้ AI ทวนข้อมูลสำคัญกลับเสมอ เช่น "ขอทวนนะคะ วันเสาร์ บ่ายสองโมง คุณสมชาย ถูกต้องไหมคะ" และสำหรับข้อมูลยาวๆ อาจส่งลิงก์หรือข้อความยืนยันทาง SMS หรือ LINE แทนการให้ลูกค้าพูดทั้งหมด`,
          ],
        },
        {
          h: `ความหน่วง การส่งต่อคน และ PDPA`,
          p: [
            `ในการคุยทางเสียง ช่วงเงียบเพียงสั้นๆ ก็ทำให้ลูกค้ารู้สึกว่าระบบค้างหรือสายหลุด ทีมต้องออกแบบให้ทั้งการฟัง การคิด และการพูดเร็วพอ ใช้โมเดลที่ตอบไว เปิดให้ลูกค้าพูดแทรกได้ และมีเสียงหรือคำพูดสั้นๆ ระหว่างรอระบบค้นข้อมูล การส่งต่อคนต้องทำได้ทุกเมื่อ ทั้งเมื่อลูกค้าขอและเมื่อ AI ไม่มั่นใจ`,
            `การบันทึกเสียงสายสนทนาเกี่ยวกับข้อมูลส่วนบุคคลตาม PDPA ตั้งแต่เริ่มสายควรแจ้งให้ชัดว่ากำลังคุยกับระบบอัตโนมัติ และสายนี้จะถูกบันทึกเพื่ออะไร แล้วเก็บเฉพาะที่จำเป็นในระยะเวลาที่กำหนด ควรปรึกษาผู้เชี่ยวชาญด้านกฎหมายเรื่องฐานทางกฎหมายที่ใช้ โดยเฉพาะถ้าสายมีข้อมูลสุขภาพ ซึ่งเป็นข้อมูลอ่อนไหว`,
          ],
          list: [
            `แจ้งตั้งแต่ต้นสายว่าเป็น AI และมีการบันทึกเสียง พร้อมวัตถุประสงค์`,
            `มีคำสั่งง่ายๆ ให้ขอคุยกับเจ้าหน้าที่ได้ตลอด`,
            `ส่งต่อพร้อมสรุปเรื่อง ไม่ให้ลูกค้าเล่าซ้ำ`,
            `กำหนดระยะเวลาเก็บเสียงและสิทธิ์เข้าถึงไฟล์`,
            `ระวังเป็นพิเศษเมื่อสายมีข้อมูลสุขภาพหรือข้อมูลอ่อนไหวอื่น`,
          ],
        },
        {
          h: `วัดผลอย่างไรว่าคุ้ม`,
          p: [
            `อย่าวัดแค่ว่า AI รับสายได้กี่สาย ตัวเลขที่บอกคุณค่าจริงคือสัดส่วนสายที่จบเรื่องได้โดยไม่ต้องโทรซ้ำ จำนวนนัดที่จองสำเร็จและมาตามนัด เวลารอสายเฉลี่ย และสัดส่วนสายที่ส่งต่อคนพร้อมเหตุผล นอกจากนั้นควรถามความพึงพอใจสั้นๆ หลังจบสาย หรือส่งแบบสอบถามทาง LINE`,
            `ฟังเสียงสายจริงที่สุ่มมาทุกสัปดาห์ โดยเฉพาะสายที่ลูกค้าวางกลางคันหรือขอคุยกับคน เพราะนั่นคือจุดที่บอกว่าต้องปรับอะไร เริ่มจากเปิดใช้กับงานเดียว เช่น รับจองนอกเวลาทำการ เมื่อตัวเลขดีค่อยขยายไปยังงานอื่น`,
          ],
        },
      ],
      takeaways: [
        `AI voice agent เหมาะกับงานจอง คำถามที่พบบ่อย สถานะคำสั่งซื้อ และสายนอกเวลาทำการ`,
        `สายร้องเรียนและเรื่องอ่อนไหวควรส่งให้คนทันทีพร้อมสรุปเรื่อง`,
        `ภาษาไทยมีวรรณยุกต์ ภาษาปน ชื่อ และตัวเลขที่พลาดง่าย ให้ AI ทวนข้อมูลสำคัญเสมอ`,
        `ออกแบบให้ตอบเร็ว พูดแทรกได้ และแจ้งเรื่อง AI กับการบันทึกเสียงตาม PDPA ตั้งแต่ต้นสาย`,
        `วัดจากสายที่จบเรื่องได้ นัดที่สำเร็จ และความพึงพอใจ ไม่ใช่แค่จำนวนสาย`,
      ],
      figCaption: `ขั้นตอนสายสนทนาของ AI voice agent ตั้งแต่ทักทาย ทวนข้อมูล จนถึงส่งต่อเจ้าหน้าที่`,
      faq: [
        {
          q: `ลูกค้าจะรู้สึกแย่ไหมที่คุยกับ AI`,
          a: `ส่วนใหญ่ขึ้นกับว่าได้เรื่องเร็วไหมและขอคุยกับคนได้ง่ายไหม แจ้งตรงๆ ว่าเป็นระบบอัตโนมัติ ทำงานที่ถนัดให้เร็ว และส่งต่อคนทันทีเมื่อถูกขอ จะช่วยลดความรู้สึกแย่ได้มาก`,
        },
        {
          q: `ต้องบันทึกเสียงทุกสายไหม`,
          a: `ไม่จำเป็นเสมอไป ขึ้นกับวัตถุประสงค์ เช่น ใช้ปรับปรุงคุณภาพหรือยืนยันการจอง ถ้าบันทึก ต้องแจ้งให้ชัด เก็บเท่าที่จำเป็น และกำหนดระยะเวลาเก็บ ควรปรึกษาผู้เชี่ยวชาญด้าน PDPA`,
        },
        {
          q: `ควรเริ่มจากงานไหนก่อน`,
          a: `งานรับจองหรือรับเรื่องนอกเวลาทำการมักเหมาะที่สุด เพราะรูปแบบชัด ความเสี่ยงต่ำ และเห็นผลชัดว่าไม่พลาดสายลูกค้าที่โทรมาหลังร้านปิด`,
        },
      ],
    },
    en: {
      title: `AI Voice Agents for Thai Call Centres and Bookings: Where They Fit and What to Watch`,
      excerpt: `AI that answers calls in Thai is now usable, but not for every call. Where it works, where it should not be used, Thai speech challenges, human handoff and PDPA.`,
      metaTitle: `AI Voice Agents for Thai Call Centres and Bookings`,
      metaDescription: `AI voice agents for Thai call centres and bookings: good and bad use cases, Thai speech, latency, human handoff, PDPA recording consent and measurement.`,
      intro: `Many Thai customers still prefer calling to typing, especially to book, ask something urgent, or when typing is awkward. That makes AI voice agents that listen and speak Thai attractive for clinics, hotels, restaurants and any business with heavy call volume. But voice is much harder than text. This guide helps you decide which calls AI should take, which belong to people, and what to prepare first.`,
      sections: [
        {
          h: `Where AI voice agents work well`,
          p: [
            `The best fit is work with a clear pattern, predictable questions and answers that live in your systems. AI can pick up calls when staff are stretched, cut waiting time, and free people for the calls that really need a human.`,
            `Some concrete examples from Thai businesses:`,
          ],
          list: [
            `Bookings and rescheduling: clinics, restaurants, spas and hotels check availability and confirm with the caller.`,
            `FAQs: opening hours, parking, published package prices, payment options.`,
            `Order or parcel status: the caller gives an order number or phone number and hears the latest status.`,
            `After-hours calls: note what the caller needs and send a summary so the team can call back next day.`,
          ],
        },
        {
          h: `Calls AI should not take`,
          p: [
            `Complaints need someone who listens and has the authority to fix things. An angry or upset caller who meets an AI going in circles gets angrier fast. Sensitive matters are the same: symptoms or test results, financial trouble, legal issues, or any sign the caller is in danger.`,
            `Decisions outside the rules, such as special refunds or price negotiation, should not be left to the AI either. Design it to spot these signals early and hand off immediately with a summary of the call, so the customer does not have to repeat themselves.`,
          ],
          quote: `A good voice agent is not the one that takes every call, but the one that knows when to pass it to a person.`,
        },
        {
          h: `The challenges of Thai speech`,
          p: [
            `Thai is tonal. Words that sound alike but differ in tone can mean very different things, so speech recognition slips easily on noisy lines or with fast speakers. Thai callers also mix in English, for example asking to "book" a "facial" for Saturday, which needs careful testing.`,
            `Names, product names and numbers cause the most errors. Thai names can be spelled several ways, and phone and order numbers must be right to the digit. Have the AI read key details back every time, such as "Just to confirm: Saturday at 2 pm, for Khun Somchai, is that right?", and for long details consider sending a link or confirmation by SMS or LINE instead of making the caller say everything.`,
          ],
        },
        {
          h: `Latency, human handoff and PDPA`,
          p: [
            `On a call, even a short silence makes people think the line has frozen or dropped. Listening, thinking and speaking all need to be fast: use quick models, let callers interrupt, and play a short phrase or sound while the system looks something up. Handoff to a person must be available at any moment, both when the caller asks and when the AI is unsure.`,
            `Call recordings involve personal data under PDPA. Say clearly at the start that the caller is talking to an automated system and that the call is recorded, and why. Keep only what you need for a set period, and get legal advice on the lawful basis you rely on, especially if calls include health information, which is sensitive data.`,
          ],
          list: [
            `State at the start that this is AI and the call is recorded, and for what purpose.`,
            `Offer a simple way to ask for a human at any time.`,
            `Hand off with a summary so callers do not repeat themselves.`,
            `Set retention periods and access rights for recordings.`,
            `Take extra care when calls include health or other sensitive data.`,
          ],
        },
        {
          h: `How to measure whether it pays off`,
          p: [
            `Do not just count how many calls the AI answered. The numbers that show real value are the share of calls resolved without a repeat call, bookings made and kept, average waiting time, and the share handed to people along with the reasons. Add a short satisfaction question after the call, or a survey on LINE.`,
            `Listen to a sample of real calls every week, especially ones where callers hung up midway or asked for a person, because that is where you learn what to fix. Start with one job, such as after-hours bookings, and expand once the numbers look good.`,
          ],
        },
      ],
      takeaways: [
        `Voice agents fit bookings, FAQs, order status and after-hours calls.`,
        `Complaints and sensitive matters should go straight to a person, with a summary.`,
        `Thai tones, mixed English, names and numbers trip systems up, so always read key details back.`,
        `Design for speed and interruption, and disclose AI and recording under PDPA at the start.`,
        `Measure resolved calls, kept bookings and satisfaction, not just call volume.`,
      ],
      figCaption: `Call flow of an AI voice agent, from greeting and read-back to handoff to staff.`,
      faq: [
        {
          q: `Will customers mind talking to AI?`,
          a: `It mostly depends on whether they get what they need quickly and can reach a person easily. Be upfront that it is automated, do the jobs it is good at fast, and hand off as soon as asked.`,
        },
        {
          q: `Do we have to record every call?`,
          a: `Not necessarily; it depends on the purpose, such as quality improvement or booking confirmation. If you record, say so clearly, keep only what you need, and set a retention period. Get PDPA advice.`,
        },
        {
          q: `Which job should we start with?`,
          a: `Bookings or after-hours call capture are usually best: the pattern is clear, the risk is low, and the benefit is obvious when calls after closing time are no longer missed.`,
        },
      ],
    },
  },
]
