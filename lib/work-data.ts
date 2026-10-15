// AUTO-GENERATED content file. Edit the prose here directly if needed — this is a
// one-time generation, not re-run automatically.
//
// Work pages (/work/[slug]) are the deliverables/technical/SEO-oriented counterpart
// to the narrative case studies in lib/case-studies-data.ts. Same slug, 1:1 mapping,
// deliberately different prose, structure, and angle from the matching case study.

export type WorkSnapshotItem = { label: string; value: string }
export type WorkFaqItem = { question: string; answer: string }
export type WorkApproachStep = { title: string; desc: string }

export type WorkContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  client: string
  badge: string
  servicesProvided: string[]
  intro: string
  snapshot: WorkSnapshotItem[]
  objectivesHeading: string
  objectives: string[]
  deliverablesHeading: string
  deliverables: string[]
  approachHeading: string
  approach: WorkApproachStep[]
  techHeading: string
  tech: string[]
  resultsHeading: string
  results: string[]
  faqHeading: string
  faq: WorkFaqItem[]
  backLabel: string
  servicesLabel: string
  ogImage: string
}

export type WorkProject = {
  slug: string
  industryTag: string
  year: string
  th: WorkContent
  en: WorkContent
}

export const workProjects: WorkProject[] = [
  {
    "slug": "savelberg",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ร้านอาหารไฟน์ไดนิ่ง กรุงเทพฯ | Savelberg",
      "metaDescription": "ดูงานเว็บไซต์สองภาษาของ Savelberg Restaurant ที่ Haliviq ทำ มีระบบจองโต๊ะออนไลน์ หน้าเมนูชิม กำกับภาพถ่าย และแชทบอท AI ตอบลูกค้า",
      "h1": "Savelberg Restaurant: เว็บไซต์สองภาษาของร้านไฟน์ไดนิ่ง พร้อมจองโต๊ะออนไลน์",
      "client": "Savelberg Restaurant",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับภาพถ่ายและคอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์",
        "แชทบอท AI ตอบคำถามลูกค้า"
      ],
      "intro": "Savelberg Restaurant เป็นร้านไฟน์ไดนิ่ง แต่เว็บไซต์เดิมไม่ได้ให้ความรู้สึกแบบนั้นเลย เราเลยทำเว็บไซต์สองภาษา ไทยและอังกฤษ ให้ภาพถ่าย สัดส่วนพื้นที่ และตัวอักษรบอกระดับของร้านได้ตั้งแต่แรกเห็น แล้ววางสิ่งที่ลูกค้าอยากรู้จริงๆ ทั้งเมนูชิม ไวน์ลิสต์ และปุ่มจองโต๊ะ ไว้ให้กดถึงได้ง่าย หลังบ้านเป็นระบบคอนเทนต์ที่ทีมครัวและทีมหน้าร้านแก้เองได้ และมีแชทบอท AI ช่วยตอบเรื่องเมนูกับการจองได้ทุกเวลา หน้านี้สรุปให้ดูว่าเราส่งมอบอะไร ทำงานกันยังไง และร้านได้อะไรกลับไป ทั้งมุมคนที่ดูแลร้านและมุมคนที่ดูแลเว็บ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "5"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เปลี่ยนเว็บไซต์เดิมที่ล้าสมัยหรือยังไม่มี ให้เป็นเว็บที่เหมาะกับระดับราคาและมาตรฐานการบริการที่ลูกค้าได้รับที่โต๊ะ",
        "ลดการจองทางโทรศัพท์ ด้วยการวางทางจองออนไลน์ไว้ที่หน้าแรก และให้กดถึงได้ภายในสองคลิกจากทุกหน้า",
        "แสดงเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลให้ชัดทั้งไทยและอังกฤษ นักท่องเที่ยวกับลูกค้าคนไทยจะได้ข้อมูลคุณภาพเท่ากัน",
        "ให้ทีมครัวและทีมหน้าร้านมีโครงสร้างคอนเทนต์ที่อัปเดตเองได้เวลาเปลี่ยนเมนูหรือเปลี่ยนฤดู",
        "ตอบคำถามเรื่องเมนูและการจองนอกเวลาทำการ โดยที่พนักงานไม่ต้องรับภาระเพิ่ม",
        "วางพื้นฐาน SEO ทั้งด้านเทคนิคและบนหน้าเว็บ สำหรับคำค้นหาไฟน์ไดนิ่งในกรุงเทพฯ ที่แข่งขันสูง เว็บที่ช้าหรือข้อมูลบางจะจมหายไปเร็ว"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สองภาษา (ไทย/อังกฤษ) ที่อ่านสบายทั้งบนมือถือที่ถือดูตอนนั่งโต๊ะ และบนจอคอมที่ออฟฟิศ",
        "หน้าแรกและแกลเลอรีเมนูที่ใช้ภาพถ่ายเป็นตัวนำ ปรับขนาดภาพให้ภาพอาหารใหญ่ๆ ยังโหลดเร็ว",
        "หน้าเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาล จัดให้ลูกค้ากวาดตาดูคอร์สกับไวน์ที่เข้ากันได้ในเวลาไม่ถึงนาที",
        "ระบบจองโต๊ะออนไลน์ที่กดได้จากหน้าแรกและหน้าสำคัญอื่นๆ",
        "หน้าเรื่องราวของเชฟและแบรนด์ เขียนให้นำไปใช้ต่อกับงานสื่อและประชาสัมพันธ์ได้",
        "แชทบอท AI ตอบคำถามเรื่องเมนูและการจองได้ตลอด 24 ชั่วโมง",
        "โครงสร้างคอนเทนต์ที่แก้ไขเองได้ พร้อมอบรมสั้นๆ ให้ทีม เปลี่ยนเมนูและภาพได้โดยไม่ต้องมีนักพัฒนา"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ไปดูหน้างานที่ร้าน",
          "desc": "เราไปนั่งดูที่ร้านจริง ทั้งจังหวะการเสิร์ฟ การจัดจาน และการเดินของลูกค้าในร้าน แล้วเอาสิ่งที่เห็นมาตัดสินใจเรื่องเลย์เอาต์และภาพ ไม่ได้เดาจาก mood board อย่างเดียว"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราไล่ดูว่าลูกค้าที่กำลังจะมาต้องใช้หน้าไหนบ้าง ทั้งเมนู การจอง ที่ตั้ง และเรื่องราวของครัว แล้วจัดให้กดถึงได้ด้วยจำนวนคลิกน้อยที่สุด โดยปุ่มจองต้องเห็นอยู่เสมอ"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "เราพัฒนาหน้าเว็บ ต่อระบบจองโต๊ะ และปรับการโหลดภาพ เพราะเว็บที่เต็มไปด้วยภาพใหญ่ยังต้องเปิดเร็วบนเน็ตมือถือ ขั้นตอนนี้เลยใส่ใจเป็นพิเศษ"
        },
        {
          "title": "ตั้งค่าแชทบอทและคอนเทนต์",
          "desc": "เราสอนแชทบอท AI ด้วยข้อมูลเมนูและการจองของร้านเอง แล้วตั้งค่า CMS ให้แต่ละคอร์ส ไวน์ และเมนูตามฤดูกาลมีที่แก้ไขชัดเจน"
        },
        {
          "title": "เปิดตัวและส่งมอบ",
          "desc": "เราเปิดเว็บไซต์ แล้วอบรมสั้นๆ ให้ทีมอัปเดตเมนูและภาพ ทีมจะดูแลเว็บเองต่อได้ ไม่ต้องติดต่อเราทุกครั้งที่อยากแก้อะไร"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ทำให้หน้าเว็บโหลดเร็ว และ URL อ่านง่ายสำหรับเสิร์ชเอนจิน",
        "Headless CMS แก้เมนูและคอนเทนต์ผ่านตัวแก้ไขง่ายๆ ไม่ต้องแตะโค้ด",
        "Cloud hosting และ CDN ส่งภาพอาหารขนาดใหญ่จากจุดที่ใกล้ผู้เข้าชม",
        "ระบบจองโต๊ะออนไลน์ ต่อจากหน้าแรกและหน้าสำคัญ",
        "โครงสร้างคอนเทนต์สองภาษา ให้เวอร์ชันไทยกับอังกฤษของแต่ละหน้าตรงกันเสมอ",
        "พื้นฐาน SEO บนหน้าเว็บ ทั้งชื่อหน้า หัวข้อ โครงสร้างเนื้อหา และการปรับภาพ",
        "แชทบอท AI ตอบเรื่องเมนูและการจอง สอนจากข้อมูลของร้านเอง"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนด มาแทนเว็บเดิมที่ไม่เหมาะกับภาพลักษณ์ของแบรนด์",
        "ลูกค้ากดถึงขั้นตอนจองโต๊ะได้ภายในสองคลิกจากทุกหน้า ทำให้การจองทางโทรศัพท์ลดลง",
        "ทางร้านปรับเมนูตามฤดูกาลและเปลี่ยนภาพได้เอง งานแก้ประจำไม่ต้องรอนักพัฒนา",
        "ลูกค้าไทยและต่างชาติได้ข้อมูลเมนูและไวน์ที่จัดไว้อ่านง่ายในคุณภาพเดียวกัน",
        "มีพื้นฐาน SEO ทั้งด้านเทคนิคและบนหน้าเว็บ พร้อมต่อยอดในคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Savelberg Restaurant ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่เน้นภาพถ่ายแบบนี้ ปกติใช้เวลาประมาณสองถึงสามเดือน นับจากวันแรกที่เราไปดูหน้างานจนถึงเปิดตัว ที่ทำให้เวลาขยับได้มากสุดคือความพร้อมของภาพถ่ายกับข้อความเมนู ถ้าเตรียมไว้ก่อนจะช่วยให้งานเสร็จเร็วขึ้น"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บทำด้วย Next.js ใช้ Headless CMS จัดการคอนเทนต์ วางบน Cloud hosting ที่มี CDN ให้ภาพโหลดเร็ว และมีระบบจองโต๊ะโดยเฉพาะ พร้อมแชทบอท AI ไว้ตอบคำถามลูกค้า"
        },
        {
          "question": "ทางร้านอัปเดตเมนูเองได้ไหม ต้องมีนักพัฒนาไหม",
          "answer": "ได้เลย เมนู ไวน์ลิสต์ เมนูตามฤดูกาล และภาพ เก็บอยู่ใน CMS ที่มีตัวแก้ไขง่ายๆ และเรามีอบรมสั้นๆ ให้ทีมครัวกับทีมหน้าร้านรู้ว่าแต่ละส่วนอยู่ตรงไหน"
        },
        {
          "question": "เว็บไซต์ใช้ได้ทั้งภาษาไทยและอังกฤษไหม",
          "answer": "ได้ ทุกหน้ามีทั้งสองภาษา และจัดโครงสร้างให้สองเวอร์ชันตรงกันเสมอ นักท่องเที่ยวกับชาวต่างชาติจะอ่านเมนูเป็นอังกฤษได้ ส่วนลูกค้าคนไทยอ่านเป็นไทย"
        },
        {
          "question": "แชทบอท AI ทำอะไรได้บ้าง",
          "answer": "ตอบคำถามที่ถามบ่อยเรื่องเมนูและการจองได้ทุกเวลา ลูกค้าไม่ต้องรอคนรับสาย แชทบอทตอบจากข้อมูลของร้านเอง ถ้าเป็นเรื่องที่ไม่มีในข้อมูล ก็ส่งต่อให้ทีมงานดูแล"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ การใช้เมนูเป็นเส้นทางหลักในการนำทาง มีระบบจอง คอนเทนต์สองภาษา และแชทบอท AI เสริม ใช้ได้ดีกับร้านไฟน์ไดนิ่งหรือร้านหลายสาขา เราจะปรับเลย์เอาต์ ระบบจอง และโครงสร้างคอนเทนต์ให้เข้ากับแต่ละร้าน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/savelberg/cover.jpg"
    },
    "en": {
      "metaTitle": "Fine-Dining Restaurant Website, Bangkok | Savelberg",
      "metaDescription": "How Haliviq built Savelberg Restaurant's bilingual website: online table booking, tasting-menu pages, photography direction and an AI chatbot for guests.",
      "h1": "Savelberg Restaurant: Bilingual Fine-Dining Website with Online Table Booking",
      "client": "Savelberg Restaurant",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Photography & Content Direction",
        "Digital Marketing Support",
        "AI Concierge Chatbot"
      ],
      "intro": "Savelberg Restaurant is a fine-dining room, and its old web presence did not look like one. We built a bilingual (Thai and English) website where the photography, spacing and typography set the tone before anyone reads a line, then put the things guests actually come for, the tasting menu, the wine list and a booking button, one tap away. Behind the pages sits a content setup the kitchen and front-of-house team can edit themselves, plus an AI chatbot that answers menu and reservation questions at any hour. This page walks through what we delivered, how we worked and what the restaurant ended up with, from the viewpoint of someone running a dining room and someone maintaining a website.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "5"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Replace an outdated or missing website with one that matches the restaurant's price point and the standard of service guests receive at the table.",
        "Cut down on phone reservations by putting an online booking path on the homepage and within two clicks of every other page.",
        "Present tasting menus, wine lists and seasonal dishes clearly in both Thai and English, so visiting guests and locals read the same quality of information.",
        "Give the kitchen and the front-of-house team a content structure they can update on their own when the season or the menu changes.",
        "Handle common guest questions about menus and bookings outside opening hours, without adding work for the staff.",
        "Set up the technical and on-page SEO groundwork for Bangkok fine-dining searches, a crowded field where a slow or thin site gets buried."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A fully responsive bilingual (Thai/English) website that reads well on a phone held at the dinner table and on a desktop at the office",
        "A photography-led homepage and menu gallery, with image sizes tuned so large food photos still load quickly",
        "Tasting menu, wine list and seasonal specials pages laid out so a guest can scan courses and pairings in under a minute",
        "An online table reservation flow linked from the homepage and other key pages",
        "A chef and brand story page written to be reused for press, PR and media enquiries",
        "An AI concierge chatbot that answers menu and booking questions around the clock",
        "An editable content structure with a short handover session, so menus and photos can be changed without a developer"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "On-site discovery",
          "desc": "We spent time in the restaurant watching the pace of service, the plating and the way guests move through the room. Those observations shaped the layout and the choice of imagery, instead of us guessing from a mood board."
        },
        {
          "title": "Information architecture",
          "desc": "We listed every page a prospective guest needs: menu, reservations, location, the story behind the kitchen. Then we arranged them so each one is reachable in as few clicks as possible, with booking always in sight."
        },
        {
          "title": "Build and integration",
          "desc": "We built the front end, connected the reservation flow and tuned image delivery. A site made of large photographs still has to open quickly on mobile data, so this step got real attention."
        },
        {
          "title": "Chatbot and content setup",
          "desc": "We trained the AI concierge on the restaurant's own menu and booking information. We also set up the CMS so each course, wine and seasonal change has an obvious place to be edited."
        },
        {
          "title": "Launch and handover",
          "desc": "We launched the site and ran a short session with the team on updating menus and photos. They left able to keep the site current without calling us for every change."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast page loads and clean URLs that search engines can read",
        "Headless CMS, so menu and content edits are made in a simple editor rather than in code",
        "Cloud hosting with a CDN, which serves the heavy food photography from a location near the visitor",
        "Online table reservation integration, connected from the homepage and key pages",
        "Bilingual content architecture, with Thai and English versions of each page kept in sync",
        "On-page SEO foundation: page titles, headings, structured content and image optimization",
        "AI chatbot for menu and booking questions, trained on the restaurant's own information"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website launched on schedule and replaced a web presence that could not carry the restaurant's positioning.",
        "Guests can reach the reservation flow within two clicks from every page, which reduces the number of bookings that have to go through the phone.",
        "The restaurant changes seasonal menus and photos itself, with no developer in the loop for routine updates.",
        "Thai and English visitors get the same quality of menu and wine information, laid out for easy reading.",
        "The technical and on-page SEO groundwork is in place, ready to build on over time in fine-dining search terms."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did the Savelberg Restaurant project take?",
          "answer": "A bilingual, photography-led restaurant website like this typically takes two to three months, from the first visit to launch. The main variable is how quickly the photography and menu copy are finalized, so having those ready early is the best way to keep the schedule short."
        },
        {
          "question": "What technologies were used?",
          "answer": "The site is built with Next.js on the front end and a headless CMS for content. It runs on cloud hosting with a CDN so the photos load quickly, and it has a dedicated table reservation integration plus an AI chatbot for guest questions."
        },
        {
          "question": "Can the restaurant update menus without a developer?",
          "answer": "Yes. Menus, wine lists, seasonal dishes and photos are stored in a CMS with a simple editor, and we run a short handover session so the kitchen and front-of-house team know where each item lives."
        },
        {
          "question": "Does the website work in both Thai and English?",
          "answer": "Yes. Every page exists in both languages, and the content is structured so the two versions stay in step. That helps tourists and expats find the menu in English while local guests read it in Thai."
        },
        {
          "question": "What does the AI chatbot actually do?",
          "answer": "It answers common questions about the menu and about reservations at any hour, so guests get an answer without waiting for someone to pick up the phone. It works from the restaurant's own information, and anything outside that is passed back to the team."
        },
        {
          "question": "Can this approach be adapted for other restaurant brands?",
          "answer": "Yes. Menu-first navigation, a booking flow, bilingual content and an optional AI concierge suit other fine-dining rooms and multi-location F&B brands. We adjust the layout, the booking tool and the content structure to each restaurant."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/savelberg/cover.jpg"
    }
  },
  {
    "slug": "ovo",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์แบรนด์อาหารพร้อมสั่งซื้อออนไลน์ | OVO",
      "metaDescription": "ดูงานเว็บไซต์แบรนด์ OVO ที่ Haliviq ทำ เน้นมือถือเป็นหลัก ภาพสินค้าโทนอบอุ่น ขั้นตอนสั่งซื้อสั้น และทีมอัปเดตเมนูได้เอง",
      "h1": "OVO: เว็บไซต์แบรนด์สำหรับมือถือ พร้อมระบบสั่งซื้อออนไลน์",
      "client": "OVO",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับภาพถ่ายและคอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์"
      ],
      "intro": "OVO ขายตรงถึงผู้บริโภค เว็บไซต์เลยต้องทำสองหน้าที่พร้อมกัน คือบอกว่าแบรนด์เป็นใคร และพาคนที่กำลังหิวจากหน้าสินค้าไปถึงขั้นจ่ายเงินโดยไม่อ้อม เราทำเว็บที่ออกแบบสำหรับมือถือเป็นหลัก ใช้ภาพสินค้าโทนอบอุ่นถ่ายใกล้ๆ ให้เห็นรายละเอียด ทำขั้นตอนสั่งซื้อให้แตะน้อยที่สุดเท่าที่ทำได้ และวางโครงสร้างสินค้ากับเมนูให้ทีมภายในดูแลเองได้ ด้านล่างเป็นสรุปว่าเราส่งมอบอะไร ข้างใต้เว็บใช้อะไรบ้าง และทำไมเราถึงเลือกแบบนี้ ทั้งในมุมงานที่ส่งมอบและมุม SEO",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สร้างช่องทางขายตรงถึงผู้บริโภคของ OVO เอง ไม่ต้องพึ่งการลงขายบนมาร์เก็ตเพลสอย่างเดียว",
        "ย่นขั้นตอนจากการดูเมนูไปจนถึงสั่งซื้อสำเร็จให้เหลือการแตะน้อยที่สุด เพราะคนส่วนใหญ่เข้ามาทางมือถือ",
        "แสดงสินค้าและราคาให้ชัด ลูกค้าจะได้ไม่ต้องถามว่าอันนี้ราคาเท่าไหร่",
        "ให้ทีมภายในแก้รายการสินค้า คำอธิบาย และราคาได้เอง โดยไม่ต้องพึ่งนักพัฒนา",
        "ถ่ายภาพชุดเดียวที่เอาไปใช้บนโซเชียลต่อได้ ให้การถ่ายภาพมีประโยชน์มากกว่าแค่เปิดเว็บ",
        "วางพื้นฐานด้านเทคนิคให้ติดอันดับในผลค้นหาธรรมชาติ สำหรับคำค้นหาอาหารและเครื่องดื่มในพื้นที่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์แบรนด์และสั่งซื้อที่ออกแบบจากจอมือถือก่อน แล้วขยายขึ้นไปถึงจอคอม",
        "แนวภาพสินค้าโทนอบอุ่น และการจัดแกลเลอรีที่ให้เมนูเป็นพระเอกของหน้า",
        "ระบบสั่งซื้อออนไลน์ที่เรียบง่าย แสดงราคาให้เห็นชัดทุกขั้นตอน",
        "โครงสร้างข้อมูลสินค้าและเมนูที่ทีมภายในแก้ไขเองได้",
        "หน้าสินค้าที่มีชื่อหน้า คำอธิบาย และหัวข้อของตัวเอง เพื่อให้ค้นหาเจอใน Google",
        "คลังภาพถ่ายพร้อมใช้บนโซเชียลมีเดีย นำกลับมาใช้ซ้ำได้หลายช่องทาง",
        "อบรมสั้นๆ ให้ทีมรู้วิธีเพิ่มสินค้า เปลี่ยนราคา และเปลี่ยนรูป"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาแบรนด์และกลุ่มลูกค้า",
          "desc": "ก่อนเริ่มออกแบบหน้าจอ เราเก็บข้อมูลเรื่องโทนภาพ ระดับราคา และกลุ่มลูกค้าที่แบรนด์อยากเข้าถึง เพื่อใช้เป็นจุดอ้างอิงเวลาตัดสินใจเรื่องภาพ น้ำเสียง และเลย์เอาต์"
        },
        {
          "title": "ออกแบบ UX ให้สั่งซื้อง่าย",
          "desc": "เราออกแบบเส้นทางสั่งซื้อก่อน แล้วจัดหน้าอื่นๆ รอบเส้นทางนั้น เป้าหมายคือจากหน้าสินค้าถึงสั่งซื้อสำเร็จให้สั้นที่สุด ไม่มีขั้นตอนที่มีไว้เพราะระบบอยากได้ข้อมูล"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "เราทำเว็บจากมือถือก่อนและคุมให้หน้าเบา เปิดเร็วบนเน็ตมือถือ จากนั้นต่อระบบสั่งซื้อเข้ามา ลูกค้าจะซื้อให้จบได้ในหน้าเว็บเดียวกัน"
        },
        {
          "title": "คอนเทนต์และส่งมอบงาน",
          "desc": "เราจัดภาพถ่ายและข้อความให้อยู่ในโครงสร้างที่ทีมดูแลต่อได้หลังเปิดตัว และพาทำงานที่ต้องทำบ่อย เช่น เพิ่มสินค้า เปลี่ยนราคา เปลี่ยนรูป"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บโหลดเร็วบนมือถือ",
        "เลย์เอาต์ที่ออกแบบสำหรับมือถือเป็นหลัก แล้วค่อยขยายไปจอคอม",
        "ระบบสั่งซื้อออนไลน์ ต่อกับหน้าสินค้า",
        "Cloud hosting และ CDN ให้ภาพสินค้าไปถึงลูกค้าเร็วไม่ว่าอยู่ตรงไหน",
        "CMS แบบเบาสำหรับจัดการสินค้าและเมนู มีหน้าแก้ไขที่ใช้ง่าย",
        "พื้นฐาน SEO บนหน้าเว็บ ทั้งชื่อหน้า หัวข้อ และคำอธิบายของแต่ละหน้าสินค้า"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่ทำหน้าที่เป็นหน้าร้านออนไลน์หลักของแบรนด์",
        "ขั้นตอนสั่งซื้อสั้นโดยการออกแบบ ลดจุดที่ลูกค้าอาจเลิกซื้อระหว่างดูสินค้ากับชำระเงิน",
        "แบรนด์มีคลังภาพถ่ายที่นำไปใช้ต่อได้ทั้งบนโซเชียลและโฆษณา",
        "ทีมอัปเดตสินค้าและราคาได้เอง ทำให้เมนูถูกต้องอยู่เสมอ",
        "มีพื้นฐาน SEO ด้านเทคนิคไว้ต่อยอดให้ติดอันดับธรรมชาติในระยะยาว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์แบรนด์พร้อมระบบสั่งซื้อแบบนี้ ปกติใช้เวลาราวสองเดือนตั้งแต่เริ่มงานจนเปิดตัว สิ่งที่ทำให้เวลาขยับมากสุดคือการถ่ายภาพ และจำนวนเนื้อหาสินค้า"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บให้รองรับมือถือ ใช้ CMS แบบเบาสำหรับอัปเดตสินค้าและคอนเทนต์ ต่อระบบสั่งซื้อออนไลน์ และวางบน Cloud hosting ที่มี CDN ช่วยส่งภาพ"
        },
        {
          "question": "ทำไมไม่ขายผ่านมาร์เก็ตเพลสอย่างเดียว",
          "answer": "มาร์เก็ตเพลสช่วยให้คนเห็นสินค้าได้เยอะ แต่แบรนด์คุมหน้าตาและความสัมพันธ์กับลูกค้าเองไม่ได้ เว็บไซต์ของตัวเองทำให้ OVO มีหน้าร้าน มีภาพถ่าย และมีลิงก์ของตัวเองไว้แชร์บนโซเชียล"
        },
        {
          "question": "ทีมแก้สินค้าและราคาเองได้ไหม",
          "answer": "ได้ สินค้า คำอธิบาย ราคา และรูป เก็บอยู่ใน CMS แบบเบา และเราพาทีมทำงานแก้ไขที่ใช้บ่อยตอนส่งมอบงาน"
        },
        {
          "question": "เว็บออกแบบสำหรับมือถือไหม",
          "answer": "ใช่ เราออกแบบเลย์เอาต์และขั้นตอนสั่งซื้อจากจอมือถือก่อน แล้วค่อยขยายไปจอคอม เพราะคนส่วนใหญ่ดูและสั่งอาหารผ่านมือถือ"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์อาหารหรือสินค้าอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่ให้การสั่งซื้อเป็นหลักและมีระบบคอนเทนต์ที่แก้เองได้ เหมาะกับร้านขนม คาเฟ่ หรือแบรนด์สินค้าบรรจุภัณฑ์ที่ขายตรงถึงลูกค้า เราปรับระบบสั่งซื้อและโครงสร้างหน้าให้เข้ากับสินค้าแต่ละแบบ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ovo/cover.jpg"
    },
    "en": {
      "metaTitle": "F&B Brand Website with Online Ordering, Bangkok | OVO",
      "metaDescription": "OVO's mobile-first brand website by Haliviq: warm product photography, a short online ordering flow and menu content the team can update on its own.",
      "h1": "OVO: Mobile-First Brand Website with Online Ordering",
      "client": "OVO",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Photography & Content Direction",
        "Digital Marketing Support"
      ],
      "intro": "OVO sells directly to consumers, so its website has two jobs at once. It has to say who the brand is, and it has to get a hungry visitor from looking at a product to paying for it without a detour. We built a mobile-first site around warm, close-up product photography, an ordering flow trimmed to the fewest taps we could manage, and a product and menu setup the in-house team maintains. The notes below cover what shipped, what sits underneath it and why we made those choices, with an eye on both deliverables and search visibility.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give OVO a direct-to-consumer channel of its own, so sales do not depend only on third-party marketplace listings.",
        "Shorten the path from browsing the menu to a confirmed order to as few taps as possible, since most visitors arrive on a phone.",
        "Show products and prices clearly enough that a customer never has to ask what something costs.",
        "Let the internal team keep the product list, descriptions and prices accurate without developer help.",
        "Produce a set of photographs that can also be used on social media, so the shoot works harder than a single website launch.",
        "Lay the technical groundwork for organic search visibility on local food and drink searches."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A mobile-first brand and ordering website that works on small screens first and scales up to desktop",
        "Warm, product-first photography direction and a gallery layout that keeps dishes in focus",
        "A simplified online ordering flow with prices shown plainly at each step",
        "An editable product and menu structure the internal team can change themselves",
        "Product pages with their own titles, descriptions and headings for organic search",
        "A library of social-ready photos that can be reused across channels",
        "A short handover so the team knows how to add products, change prices and swap images"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand and audience research",
          "desc": "Before drawing any screens we collected the brand's visual language, its price range and who it is trying to reach. That gave us a clear reference for photography, tone and layout decisions."
        },
        {
          "title": "UX built for ordering",
          "desc": "We designed the order path first and the rest of the site around it. The aim was the shortest route from a product page to a confirmed order, with no steps that exist only because the system needs them."
        },
        {
          "title": "Development and integration",
          "desc": "We built the site mobile-first and kept pages light so they open quickly on mobile data. We then connected the ordering flow so a customer can complete a purchase inside the same experience."
        },
        {
          "title": "Content and handover",
          "desc": "We sorted photos and copy into a structure the team can maintain after launch. A short walkthrough covers the everyday tasks: adding a product, changing a price, replacing a photo."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for quick page loads on phones",
        "Mobile-first responsive layout, designed on a small screen before desktop",
        "Online ordering integration, connected to the product pages",
        "Cloud hosting and CDN, so product photos arrive fast wherever the customer is",
        "Lightweight CMS for product and menu content, with a simple editing screen",
        "On-page SEO foundation: titles, headings and descriptions on each product page"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website now works as the brand's main online storefront.",
        "The ordering flow is short by design, which cuts down the places where a customer might give up between browsing and checkout.",
        "OVO has a photography library it reuses on social and paid channels.",
        "The team updates products and prices on its own, keeping the menu accurate.",
        "A technical SEO foundation is in place for long-term organic growth."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A focused brand and ordering website like this usually takes around two months from kickoff to launch. The photography and the amount of product content are what move that number most."
        },
        {
          "question": "What technologies were used?",
          "answer": "A responsive Next.js front end, a lightweight CMS for product and content updates, an ordering integration, and cloud hosting with CDN delivery for the images."
        },
        {
          "question": "Why build a direct website instead of relying on marketplaces?",
          "answer": "A marketplace listing is useful for reach, but the brand does not control the page, the presentation or the customer relationship. A direct site gives OVO its own storefront, its own photography and its own link to share on social media."
        },
        {
          "question": "Can the team change products and prices without a developer?",
          "answer": "Yes. Products, descriptions, prices and photos are held in a lightweight CMS, and we show the team how to make the common edits during handover."
        },
        {
          "question": "Is the site designed for phones?",
          "answer": "Yes. Layout and ordering flow were designed on a small screen first and then expanded for desktop, because most people browse and order food from a phone."
        },
        {
          "question": "Can this be adapted for other F&B or consumer brands?",
          "answer": "Yes. An ordering-first structure and an editable content system suit dessert shops, cafes and packaged-goods brands that sell directly to consumers. We adjust the ordering tool and page structure to match the product."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ovo/cover.jpg"
    }
  },
  {
    "slug": "base",
    "industryTag": "Fitness & Wellness",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ฟิตเนสสตูดิโอ จองคลาสออนไลน์ | BASE",
      "metaDescription": "ดูงานเว็บไซต์ฟิตเนสสตูดิโอ BASE ที่ Haliviq ทำ จองคลาสออนไลน์ มีหน้าโปรไฟล์เทรนเนอร์ ตารางคลาสอัปเดตจากที่เดียว และใช้ง่ายบนมือถือ",
      "h1": "BASE: เว็บไซต์ฟิตเนสสตูดิโอ พร้อมระบบจองคลาสออนไลน์",
      "client": "BASE",
      "badge": "Fitness & Wellness",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบจองคลาสออนไลน์",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "คนมาเรียนที่ BASE เพราะเทรนเนอร์และบรรยากาศในคลาส แต่เว็บไซต์เดิมไม่มีทางให้คนใหม่ดูตารางหรือจองคลาสทดลองได้ง่ายๆ เราเลยทำเว็บโทนเข้มดูมั่นใจ แล้วต่อกับระบบจองคลาสที่ใช้งานได้จริง ให้คนที่ดูแล้วถูกใจกดจองได้ในหน้าจอเดียวกัน เทรนเนอร์แต่ละคนมีหน้าโปรไฟล์ของตัวเอง ส่วนตารางคลาสดึงจากแหล่งเดียว ไม่ต้องไล่แก้ทีละหน้าเอง สรุปด้านล่างเป็นงานที่ส่งมอบ ขั้นตอนทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Fitness & Wellness"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ตัดช่องว่างระหว่างการเจอสตูดิโอทางออนไลน์ กับการจองคลาสทดลอง",
        "ให้เทรนเนอร์แต่ละคนมีหน้าของตัวเอง สมาชิกใหม่จะเลือกคลาสตามคนสอนได้",
        "แสดงตารางคลาสที่ถูกต้องอยู่เสมอ โดยไม่ต้องมีใครไล่แก้หน้าเว็บด้วยมือ",
        "ออกแบบจากมือถือก่อน เพราะคนที่สนใจส่วนใหญ่ดูและจองจากมือถือ",
        "ใช้ภาพถ่ายและแนวออกแบบที่สื่อบรรยากาศของสตูดิโอให้เข้ากับคลาสที่สอน",
        "วางโครงสร้างหน้าให้ชัด เพื่อให้คลาสและเทรนเนอร์ถูกค้นเจอผ่านการค้นหา"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สตูดิโอที่ออกแบบสำหรับมือถือเป็นหลัก ใช้โทนสีเข้ม",
        "ระบบจองคลาสออนไลน์ที่ต่ออยู่ในเว็บไซต์",
        "หน้าโปรไฟล์เทรนเนอร์แต่ละคน พร้อมคลาสที่คนนั้นสอน",
        "ตารางคลาสที่อัปเดตจากแหล่งข้อมูลกลาง",
        "กำกับภาพถ่ายและคอนเทนต์สำหรับสตูดิโอและเทรนเนอร์",
        "หน้าคลาสและหน้าเทรนเนอร์ที่มีชื่อหน้าและหัวข้อชัดเจน เพื่อให้ค้นหาเจอ",
        "อบรมสั้นๆ เรื่องการเปลี่ยนตารางและแก้คอนเทนต์เทรนเนอร์"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาสตูดิโอและกลุ่มสมาชิก",
          "desc": "เราเริ่มจากทำความเข้าใจรูปแบบคลาส รายชื่อเทรนเนอร์ และสมาชิกแบบที่ BASE อยากได้ เพื่อตัดสินว่าข้อมูลไหนควรขึ้นก่อนบนหน้าแรก"
        },
        {
          "title": "ออกแบบ UX ให้จองก่อน",
          "desc": "เราออกแบบตารางและขั้นตอนจองให้เป็นเส้นทางหลักของเว็บ ไม่ใช่ฟีเจอร์ที่เพิ่มมาตอนท้าย หน้าอื่นทุกหน้าพาคนกลับไปที่คลาส"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "เราพัฒนาเว็บที่โหลดเร็ว แล้วต่อกับระบบจองคลาสให้ครบตั้งแต่ดูตารางจนถึงได้การจอง"
        },
        {
          "title": "จัดคอนเทนต์และเปิดตัว",
          "desc": "เราจัดภาพถ่ายเทรนเนอร์และสตูดิโอ วางโครงหน้าสำหรับคลาสและโค้ช แล้วส่งมอบตารางที่แก้เองได้ หลังเปิดตัวสตูดิโอปรับตารางได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บโหลดเร็วบนเน็ตมือถือ",
        "ต่อกับระบบจองคลาส ครอบคลุมทั้งตารางและตัวการจอง",
        "เลย์เอาต์ที่ออกแบบสำหรับมือถือเป็นหลัก ตามหน้าจอที่สมาชิกใช้บ่อยที่สุด",
        "Cloud hosting และ CDN ให้ภาพสตูดิโอและเทรนเนอร์โหลดเร็ว",
        "CMS แบบเบาสำหรับตารางและคอนเทนต์เทรนเนอร์ มีหน้าแก้ไขที่ใช้ง่าย",
        "พื้นฐาน SEO บนหน้าเว็บสำหรับหน้าคลาสและหน้าเทรนเนอร์"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่เปิดตัวพร้อมระบบจองคลาสใช้งานได้ตั้งแต่วันแรก",
        "บนมือถือ ผู้เข้าชมกดเข้าขั้นตอนจองได้ภายในไม่กี่แตะจากหน้าแรก",
        "หน้าเทรนเนอร์ช่วยให้สมาชิกใหม่เลือกคลาสแรกจากคนสอนได้",
        "สตูดิโออัปเดตตารางได้เอง ไม่ต้องพึ่งนักพัฒนา",
        "โครงสร้างหน้าที่ชัดเป็นพื้นฐานให้คลาสและเทรนเนอร์ถูกค้นเจอ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บสตูดิโอที่มีระบบจองต่ออยู่แบบนี้ ปกติใช้เวลาราวสองเดือน ถ้าเตรียมรายการคลาส ข้อมูลเทรนเนอร์ และภาพถ่ายไว้ก่อน งานจะเสร็จเร็วขึ้น"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำเว็บให้รองรับมือถือ ต่อกับระบบจองคลาส ใช้ CMS แบบเบาสำหรับอัปเดตตารางและข้อมูลเทรนเนอร์ และวางบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "สมาชิกจองจากมือถือได้ไหม",
          "answer": "ได้ เราออกแบบเว็บจากมือถือก่อน และจากหน้าแรกกดเข้าขั้นตอนจองได้ภายในไม่กี่แตะ"
        },
        {
          "question": "ตารางคลาสอัปเดตยังไง",
          "answer": "ตารางดึงมาจากแหล่งกลาง ไม่ได้พิมพ์ลงในหน้าเว็บทีละหน้า เวลาสตูดิโอเปลี่ยนเวลาคลาสหรือเพิ่มรอบ เว็บจะแสดงข้อมูลใหม่โดยไม่ต้องให้นักพัฒนาแก้"
        },
        {
          "question": "ทำไมเทรนเนอร์แต่ละคนต้องมีหน้าของตัวเอง",
          "answer": "สตูดิโอแบบนี้หลายคนเลือกคลาสเพราะโค้ช หน้าโปรไฟล์ทำให้คนใหม่เห็นว่าใครสอนอะไรก่อนจอง การมาครั้งแรกจึงไม่รู้สึกเสี่ยงเกินไป"
        },
        {
          "question": "ใช้แนวทางนี้กับฟิตเนสหรือเวลเนสแบรนด์อื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่ให้การจองเป็นหลักและมีโปรไฟล์เทรนเนอร์ เหมาะกับยิม สตูดิโอโยคะ และธุรกิจเวลเนสที่ขายเป็นคลาส เราปรับระบบจอง รูปแบบตาราง และดีไซน์ให้เข้ากับแต่ละสตูดิโอ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/base/cover.jpg"
    },
    "en": {
      "metaTitle": "Fitness Studio Website with Class Booking | BASE",
      "metaDescription": "BASE's fitness studio website by Haliviq: online class booking, trainer profile pages and a schedule that updates from one place, built for phones.",
      "h1": "BASE: Fitness Studio Website with Online Class Booking",
      "client": "BASE",
      "badge": "Fitness & Wellness",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Class Booking System",
        "Photography & Content Direction"
      ],
      "intro": "People join BASE for its trainers and the energy in the room, yet the old website gave a newcomer no easy way to see what was on or book a trial class. We built a dark, confident site and connected it to a working class-booking system, so a visitor can go from \"this looks good\" to \"I'm booked for Thursday\" on the same screen. Each trainer gets a profile page, and the schedule is fed from one central source so it stays correct without hand edits. What follows describes the deliverables, the process and the technology behind them.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Fitness & Wellness"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Remove the gap between finding the studio online and booking a trial class.",
        "Give each trainer their own page, so a new member can choose a class based on who teaches it.",
        "Show the class schedule in a way that stays accurate without anyone editing web pages by hand.",
        "Design for the phone first, because most prospective members browse and book from one.",
        "Convey the studio's atmosphere with photography and a design language that matches the classes.",
        "Put a clear page structure in place so classes and trainers can be found through search."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive, mobile-first studio website with a dark-toned design language",
        "An online class-booking system integrated into the site",
        "Individual trainer profile pages with the classes each trainer leads",
        "A class schedule that updates from a central source",
        "Photography and content direction for studio and trainer imagery",
        "Class and trainer pages with clear titles and headings so they can be found in search",
        "A handover covering how to change the schedule and edit trainer content"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Studio and audience research",
          "desc": "We started by learning the studio's class formats, the trainer roster and the type of member BASE wants to attract. That decided which information goes first on the homepage."
        },
        {
          "title": "Booking-first UX design",
          "desc": "We designed the schedule and booking flow as the main route through the site rather than a feature added at the end. Every other page points back toward a class."
        },
        {
          "title": "Development and integration",
          "desc": "We built a fast site and connected it to the class-booking system from start to finish, from browsing the timetable to receiving a booking."
        },
        {
          "title": "Content and launch",
          "desc": "We organized trainer and studio photography, wrote the page structure for classes and coaches, and handed over an editable schedule. The studio can adjust timetables itself once the site is live."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for pages that open quickly on mobile data",
        "Class-booking system integration, covering the timetable and the booking itself",
        "Mobile-first responsive layout, designed for the screen members use most",
        "Cloud hosting and CDN, so studio and trainer photos load fast",
        "Lightweight CMS for schedule and trainer content, with a simple editing screen",
        "On-page SEO foundation for class and trainer pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website launched with class booking working from day one.",
        "On mobile, a visitor reaches the booking flow in a couple of taps from the homepage.",
        "Trainer pages give new members a way to pick a first class by who is leading it.",
        "The studio keeps the schedule current without developer help.",
        "Clear page structure gives classes and trainers a foundation for search visibility."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A studio website with a working booking integration like this typically takes around two months. Getting the class list, trainer details and photography ready early keeps that timeline short."
        },
        {
          "question": "What technologies were used?",
          "answer": "A responsive Next.js site connected to a class-booking system, with a lightweight CMS for schedule and trainer updates, deployed on a cloud host with a CDN."
        },
        {
          "question": "Can members book from their phone?",
          "answer": "Yes. The site was designed mobile-first, and the booking flow is reachable within a couple of taps from the homepage."
        },
        {
          "question": "How does the schedule stay up to date?",
          "answer": "The schedule is fed from a central source instead of being typed into web pages. When the studio changes a class time or adds a session, the website shows the new information without a developer."
        },
        {
          "question": "Why does each trainer have their own page?",
          "answer": "At a studio like this, people often choose a class because of the coach. A profile page lets a newcomer see who teaches what before booking, which makes the first visit feel less like a leap."
        },
        {
          "question": "Can this be adapted for other fitness or wellness brands?",
          "answer": "Yes. A booking-first structure with trainer profiles suits gyms, yoga studios and other class-based wellness businesses. We adapt the booking tool, the schedule format and the design to each studio."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/base/cover.jpg"
    }
  },
  {
    "slug": "blue-bear",
    "industryTag": "Apparel & Uniforms",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์แคตตาล็อก B2B ยูนิฟอร์ม | Blue Bear",
      "metaDescription": "ดูงานเว็บไซต์ B2B ของ Blue Bear ที่ Haliviq ทำ มีแคตตาล็อกสินค้าแยกหมวด และฟอร์มขอใบเสนอราคาสำหรับฝ่ายจัดซื้อโรงพยาบาลและคลินิก",
      "h1": "Blue Bear: เว็บไซต์ B2B พร้อมแคตตาล็อกสินค้าและฟอร์มขอใบเสนอราคา",
      "client": "Blue Bear",
      "badge": "Apparel & Uniforms",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบแคตตาล็อกสินค้า",
        "ฟอร์มติดต่อสั่งซื้อสำหรับองค์กร (B2B)"
      ],
      "intro": "โรงพยาบาลและคลินิกไม่ได้ซื้อยูนิฟอร์มแบบคนซื้อเสื้อทั่วไป ฝ่ายจัดซื้อต้องดูสินค้าทั้งหมด เช็กเนื้อผ้ากับไซซ์ แล้วส่งคำขอราคา เว็บไซต์ของ Blue Bear จึงออกแบบตามขั้นตอนนี้ มีแคตตาล็อกแยกตามหมวดและการใช้งาน หน้าสินค้าที่ให้รายละเอียดครบ และฟอร์มสอบถามสั่งซื้อแทนตะกร้าสินค้า ดีไซน์เรียบและดูเป็นมืออาชีพโดยตั้งใจ เพราะคนที่อ่านกำลังเทียบซัพพลายเออร์อยู่ ด้านล่างสรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Apparel & Uniforms"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้ผู้ซื้อระดับองค์กรเลือกดูสินค้าทั้งหมดตามหมวดได้เอง ไม่ต้องโทรขอแคตตาล็อก",
        "เปลี่ยนการรับออเดอร์แบบเดิมที่ทำเป็นครั้งๆ ไป ให้เป็นฟอร์มสอบถามและขอใบเสนอราคาที่เป็นระบบ",
        "แสดงเนื้อผ้า ไซซ์ และสเปกให้ชัดพอที่จะย่นการคุยกับฝ่ายขาย",
        "ให้ฝ่ายจัดซื้อมีข้อมูลพอสำหรับตรวจสอบซัพพลายเออร์ ทั้งมาตรฐานคุณภาพและขั้นตอนการผลิต",
        "สร้างความน่าเชื่อถือกับคณะกรรมการจัดซื้อของโรงพยาบาล ด้วยดีไซน์แบบมืออาชีพที่เหมาะกับ B2B",
        "ช่วยทีมขายให้มีลิงก์เดียวส่งให้ลูกค้า แทนการส่ง PDF และอีเมลยาวๆ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ B2B และแคตตาล็อกที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "แคตตาล็อกสินค้าจัดตามหมวดและการใช้งาน",
        "ฟอร์มสอบถามสั่งซื้อและขอใบเสนอราคาสำหรับผู้ซื้อระดับองค์กรโดยเฉพาะ",
        "หน้ารายละเอียดสินค้าที่มีข้อมูลเนื้อผ้า ไซซ์ และสเปก",
        "หน้ามาตรฐานคุณภาพและกระบวนการผลิต สำหรับฝ่ายจัดซื้อใช้ตรวจสอบ",
        "SEO บนหน้าเว็บตามคำค้นหาที่ผู้ซื้อระดับองค์กรใช้",
        "โครงสร้างข้อมูลสินค้าที่แก้ไขเองได้ พร้อมส่งมอบให้ทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและผู้ซื้อ",
          "desc": "เราศึกษาสายสินค้า โครงสร้างหมวด และวิธีที่ฝ่ายจัดซื้อของโรงพยาบาลกับคลินิกตัดสินใจเลือกซัพพลายเออร์จริงๆ เพื่อรู้ว่าข้อมูลไหนต้องเห็นก่อนที่ผู้ซื้อจะขอใบเสนอราคา"
        },
        {
          "title": "ออกแบบ UX ของแคตตาล็อก",
          "desc": "เราออกแบบการเลือกหมวดและตัวกรอง ให้ผู้ซื้อหาสินค้าที่ใช่ได้เอง ไม่ต้องโทรถามฝ่ายขายไปมา และทุกหน้าสินค้าพาไปที่ฟอร์มขอราคา"
        },
        {
          "title": "พัฒนาและต่อฟอร์ม",
          "desc": "เราพัฒนาแคตตาล็อกและต่อฟอร์มสอบถามสำหรับลูกค้าองค์กร ฟอร์มเก็บข้อมูลที่ฝ่ายขายต้องใช้ ตอบเป็นใบเสนอราคาได้เลย"
        },
        {
          "title": "จัดคอนเทนต์ให้น่าเชื่อถือ",
          "desc": "เราจัดภาพถ่ายสินค้ากับสเปก และเขียนหน้ามาตรฐานคุณภาพให้ช่วยการคุยกับฝ่ายขาย ฝ่ายจัดซื้ออ่านได้ก่อนติดต่อ Blue Bear"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้แคตตาล็อกโหลดเร็วและเสิร์ชเอนจินอ่านง่าย",
        "โครงสร้างแคตตาล็อกสินค้าที่เป็นระบบ ให้หมวด สเปก และตัวเลือกสินค้าเป็นรูปแบบเดียวกัน",
        "ฟอร์มสอบถามและขอใบเสนอราคาแบบ B2B แทนตะกร้าสินค้าแบบขายปลีก",
        "Cloud hosting และ CDN ให้ภาพสินค้าโหลดเร็ว",
        "ระบบจัดการข้อมูลสินค้า ทีมเพิ่มหรือแก้สินค้าได้โดยไม่ต้องพึ่งนักพัฒนา",
        "SEO บนหน้าเว็บตามคำค้นหาของผู้ซื้อระดับองค์กร ครอบคลุมหน้าสินค้าและหน้าหมวด"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่ทีมขายส่งลิงก์ให้ผู้ซื้อระดับองค์กรได้ทันที",
        "ฟอร์มขอใบเสนอราคาเข้ามาแทนการรับออเดอร์ทางโทรศัพท์และอีเมลแบบเดิม",
        "หน้าสินค้ามีรายละเอียดมากพอจะตอบคำถามที่ฝ่ายจัดซื้อถามบ่อยได้ตั้งแต่แรก",
        "ดีไซน์เหมาะกับคณะกรรมการจัดซื้อของโรงพยาบาลและคลินิก",
        "ทีมเพิ่มหรืออัปเดตสินค้าได้เอง ไม่ต้องรอนักพัฒนา"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ B2B ที่เป็นแคตตาล็อกแบบนี้ ปกติใช้เวลาราวสองเดือน ที่ทำให้เวลาขยับมากสุดคือปริมาณข้อมูลสินค้าที่ต้องรวบรวมและจัดให้เป็นระบบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มีโครงสร้างแคตตาล็อกสินค้าที่เป็นระบบ ฟอร์มสอบถาม B2B และวางบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ทำไมใช้ฟอร์มขอใบเสนอราคา ไม่ทำร้านค้าออนไลน์",
          "answer": "ผู้ซื้อระดับองค์กรมักสั่งเป็นจำนวนมาก เทียบหลายเจ้า และบางครั้งต้องยืนยันสเปกก่อน การขอใบเสนอราคาจึงเหมาะกว่าตะกร้าและชำระเงิน และฝ่ายขายได้คำขอที่พร้อมตอบกลับทันที"
        },
        {
          "question": "ผู้ซื้อจะเห็นอะไรในหน้าสินค้าบ้าง",
          "answer": "แต่ละหน้ามีข้อมูลเนื้อผ้า ไซซ์ สเปก และภาพถ่าย ผู้ซื้อเช็กความเหมาะสมได้เองโดยไม่ต้องถาม ส่วนหน้ามาตรฐานคุณภาพตอบคำถามที่ฝ่ายจัดซื้อมักถามตอนตรวจสอบซัพพลายเออร์"
        },
        {
          "question": "ทีมจัดการแคตตาล็อกเองได้ไหม",
          "answer": "ได้ ข้อมูลสินค้าอยู่ในระบบจัดการคอนเทนต์ที่ทีมแก้ไขเองได้ จะเพิ่มสินค้าหรือแก้สเปกก็ไม่ต้องใช้นักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับผู้ผลิตรายอื่นที่ขายแบบ B2B ได้ไหม",
          "answer": "ได้ แคตตาล็อกแยกตามหมวดที่มีฟอร์มขอใบเสนอราคา เหมาะกับผู้ผลิตที่ขายให้องค์กรหรือหน่วยงาน เราปรับโครงสร้างหมวดและฟอร์มสอบถามให้เข้ากับสายสินค้าของแต่ละเจ้า"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/blue-bear/cover.jpg"
    },
    "en": {
      "metaTitle": "B2B Catalog Website for Hospital Uniforms | Blue Bear",
      "metaDescription": "Blue Bear's B2B website by Haliviq: category-based product catalog and a quote-request flow for hospital and clinic procurement teams in Thailand.",
      "h1": "Blue Bear: B2B Product Catalog Website with Quote Requests",
      "client": "Blue Bear",
      "badge": "Apparel & Uniforms",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Product Catalog System",
        "B2B Order Inquiry Forms"
      ],
      "intro": "Hospitals and clinics do not buy uniforms the way a shopper buys a shirt. A procurement team wants to see the whole range, check fabric and sizing, and send a request for a quote. Blue Bear's website was built around that routine, with a catalog sorted by category and use, detailed product pages, and a structured order-inquiry form in place of a shopping cart. The design is plain and professional on purpose, since the people reading it are comparing suppliers. Below is a breakdown of what we delivered, how we worked and the technology behind it.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Apparel & Uniforms"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Let institutional buyers browse the full range by category without having to phone for a catalog.",
        "Replace an ad hoc ordering process with a structured inquiry and quote-request flow.",
        "Show fabric, sizing and specification details clearly enough to shorten the sales conversation.",
        "Give procurement teams what they need for due diligence, including quality standards and the manufacturing process.",
        "Look credible to a hospital buying committee, using a professional design suited to B2B.",
        "Help the sales team by giving them one link to send to buyers instead of PDFs and long emails."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive B2B marketing and catalog website",
        "A product catalog organized by category and use case",
        "A dedicated order-inquiry and quote-request form for institutional buyers",
        "Product detail pages with fabric, sizing and specification information",
        "A quality-standards and manufacturing-process page for procurement due diligence",
        "On-page SEO set up for the search terms institutional buyers use",
        "An editable product data structure with a handover for the team"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business and buyer research",
          "desc": "We learned the product line and its category structure, and how hospital and clinic procurement teams actually judge a supplier. This told us which details have to be visible before a buyer will ask for a quote."
        },
        {
          "title": "Catalog UX design",
          "desc": "We designed category navigation and filtering so a buyer can reach the right product without going back and forth with the sales team. Every product page leads to the quote request."
        },
        {
          "title": "Development and form integration",
          "desc": "We built the catalog and connected a structured inquiry flow for institutional customers. The form collects the information sales needs to reply with a proper quote."
        },
        {
          "title": "Content and credibility",
          "desc": "We organized product photography and specifications, and wrote a quality-standards page that supports the sales conversation. Procurement teams can read it before they ever contact Blue Bear."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for a fast catalog that is easy for search engines to read",
        "Structured product catalog architecture, with categories, specifications and variants kept consistent",
        "B2B inquiry and quote form integration, in place of a consumer shopping cart",
        "Cloud hosting and CDN, so product photos load quickly",
        "Content management for product data, so the team can add or change items without a developer",
        "On-page SEO for institutional search terms, covering product and category pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website gives the sales team a link to point institutional buyers to directly.",
        "A quote-request flow now replaces ad hoc phone and email order intake.",
        "Product pages are detailed enough to answer the common procurement questions up front.",
        "The design suits hospital and clinic buying committees.",
        "The team can add or update products without waiting for a developer."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A catalog-driven B2B website like this typically takes around two months. The biggest factor is how much product data has to be gathered and organized."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a structured product catalog, a dedicated B2B inquiry form integration, and cloud hosting with CDN delivery."
        },
        {
          "question": "Why a quote request instead of an online shop?",
          "answer": "Institutional buyers usually order in volume, compare suppliers and sometimes need specifications confirmed. A quote request fits that routine better than a basket and checkout, and it hands the sales team a ready-made inquiry."
        },
        {
          "question": "What do buyers see on a product page?",
          "answer": "Each page carries fabric, sizing and specification information along with photography, so a buyer can check suitability without asking. The quality-standards page covers the due diligence questions that procurement teams tend to raise."
        },
        {
          "question": "Can the team manage the catalog themselves?",
          "answer": "Yes. Product data is held in a content-management structure the team can edit, so adding a product or revising a specification does not need a developer."
        },
        {
          "question": "Can this be adapted for other B2B manufacturers?",
          "answer": "Yes. A category-based catalog with a quote-request flow suits other manufacturers who sell to institutional or enterprise buyers. We adapt the category structure and the inquiry form to the product line."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/blue-bear/cover.jpg"
    }
  },
  {
    "slug": "thai-metal-aluminium",
    "industryTag": "Manufacturing",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์โรงงานอุตสาหกรรม | Thai Metal Aluminium",
      "metaDescription": "ดูงานเว็บไซต์องค์กรของ Thai Metal Aluminium ที่ Haliviq ทำ มีหน้าเครื่องจักรและความสามารถ มาตรฐานคุณภาพ ผลงานอ้างอิง สำหรับผู้ซื้อที่ส่ง RFQ",
      "h1": "Thai Metal Aluminium: เว็บไซต์องค์กรที่โชว์ความสามารถด้านอุตสาหกรรม",
      "client": "Thai Metal Aluminium",
      "badge": "Manufacturing",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับคอนเทนต์เชิงเทคนิค",
        "SEO สำหรับลูกค้าอุตสาหกรรม"
      ],
      "intro": "ก่อนที่วิศวกรหรือฝ่ายจัดซื้อจะส่ง RFQ ให้ผู้ผลิตชิ้นส่วนโลหะและอะลูมิเนียม เขามักหาหลักฐานก่อน ว่าใช้เครื่องอะไร ทำกระบวนการไหนได้ ได้มาตรฐานอะไร และมีใครเคยซื้อบ้าง เว็บไซต์เดิมของ Thai Metal Aluminium ตอบเรื่องพวกนี้ไม่ได้ เราเลยทำใหม่ให้เอาความสามารถขึ้นก่อน มีหน้าเครื่องจักรและกระบวนการ ส่วนมาตรฐานคุณภาพกับใบรับรอง และส่วนผลงานอ้างอิง เขียนด้วยภาษาเทคนิคแบบที่ผู้ซื้อในวงการคุ้นเคย พร้อมวางโครงสร้างเพื่อให้ค้นเจอด้วยคำที่ผู้ซื้อพิมพ์จริง หน้านี้สรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Manufacturing"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้วิศวกรและฝ่ายจัดซื้อตรวจสอบความสามารถการกลึงและสเปกเครื่องจักรออนไลน์ได้เอง ก่อนจะยกโทรศัพท์",
        "แสดงใบรับรองและมาตรฐานคุณภาพให้ชัด ย่นเวลาที่ลูกค้าใช้ประเมินซัพพลายเออร์",
        "สร้างส่วนผลงานอ้างอิงและลูกค้าที่เคยทำงานด้วย ให้ทีมพัฒนาธุรกิจส่งให้ลูกค้าใหม่ดูได้",
        "จัดกระบวนการผลิตให้ผู้ซื้อเห็นว่าชิ้นงานเดินจากแบบไปถึงส่งมอบยังไง",
        "จัดโครงสร้างคอนเทนต์เทคนิคให้เว็บติดอันดับในคำค้นหาเฉพาะทางที่ผู้ซื้อใช้",
        "เปลี่ยนน้ำเสียงจากการตลาดทั่วไป มาเป็นภาษาเทคนิคที่น่าเชื่อถือและเหมาะกับกลุ่มผู้อ่าน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์องค์กรสำหรับผู้ซื้อ B2B ในภาคอุตสาหกรรม ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าแสดงเครื่องจักร กระบวนการ และกำลังการผลิตอย่างเป็นระบบ",
        "หน้ามาตรฐานคุณภาพและใบรับรอง",
        "ส่วนแสดงผลงานอ้างอิงและลูกค้าที่เคยทำงานด้วย",
        "คอนเทนต์เทคนิคที่จัดตามวิธีค้นหาของผู้ซื้อภาคอุตสาหกรรม",
        "Metadata และ structured data ช่วยให้บริษัทดูน่าเชื่อถือในผลการค้นหา",
        "โครงสร้างที่ทีมเพิ่มผลงานอ้างอิงและอัปเดตใบรับรองได้เอง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและความสามารถ",
          "desc": "เราเก็บข้อมูลกระบวนการผลิต รายการเครื่องจักร และโปรไฟล์ลูกค้าอุตสาหกรรมที่บริษัทอยากได้ รายการสิ่งที่บริษัททำได้จริงกลายเป็นแกนหลักของเนื้อหา"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราจัดให้ความสามารถ ใบรับรอง และผลงานเก่า แต่ละส่วนอยู่ห่างหน้าแรกแค่หนึ่งคลิก ผู้ซื้อต้องตรวจสอบสิ่งที่เราบอกได้โดยไม่ต้องเสียเวลาค้นหา"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและเรียบ เหมาะกับผู้อ่านในวงการอุตสาหกรรม มีตารางและเลย์เอาต์สเปกที่อ่านง่าย คนที่เข้ามาต้องการเช็กรายละเอียด ดีไซน์จึงไม่ควรเกะกะ"
        },
        {
          "title": "วางแผน SEO ด้านเทคนิค",
          "desc": "เราวางเนื้อหาและ metadata ตามคำที่ผู้ซื้อค้นหาจริง เช่น กระบวนการ วัสดุ และประเภทชิ้นงาน แต่ละความสามารถมีหน้าของตัวเอง ไม่ได้รวมเป็นรายการยาวหน้าเดียว"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บเร็วและ URL สะอาด ให้บอทค้นหาอ่านได้",
        "โครงสร้างคอนเทนต์เทคนิค แยกหน้าตามความสามารถ กระบวนการ หรือกลุ่มเครื่องจักร",
        "Cloud hosting และ CDN ส่งภาพและเอกสารได้เร็ว",
        "CMS แบบเบาสำหรับอัปเดตผลงานอ้างอิง ทีมแก้เองได้โดยไม่ต้องใช้นักพัฒนา",
        "SEO ด้านเทคนิคบนหน้าเว็บ ครอบคลุมชื่อหน้า หัวข้อ และเนื้อหาสเปก",
        "Structured data เพื่อความน่าเชื่อถือขององค์กร ให้เสิร์ชเอนจินอ่านได้ว่าบริษัทคือใคร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่วางตำแหน่งบริษัทให้พร้อมรับ RFQ จากลูกค้าอุตสาหกรรมรายใหม่",
        "ข้อมูลความสามารถและใบรับรองตรวจสอบได้ทางออนไลน์ ก่อนจะคุยกับฝ่ายขาย",
        "ทีมพัฒนาธุรกิจมีส่วนผลงานอ้างอิงให้ส่งให้ลูกค้าเป้าหมายดูได้เลย",
        "แต่ละความสามารถและกระบวนการมีหน้าของตัวเอง ทำให้เสิร์ชเอนจินมีเนื้อหาชัดเจนให้จัดทำดัชนี",
        "มีพื้นฐาน SEO ด้านเทคนิคสำหรับคำค้นหาเฉพาะที่ผู้ซื้อภาคอุตสาหกรรมใช้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์องค์กรที่เน้นความสามารถแบบนี้ ปกติใช้เวลาราวสองเดือน ที่ทำให้เวลาขยับมากสุดคือความเร็วในการรวบรวมรายการเครื่องจักร ใบรับรอง และผลงานอ้างอิง"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มี CMS แบบเบาสำหรับอัปเดตผลงานและใบรับรอง วางบน Cloud hosting ที่มี CDN และจัดโครงสร้าง SEO ด้านเทคนิคบนหน้าเว็บ"
        },
        {
          "question": "ทำไมจัดเว็บตามความสามารถ ไม่ใช่ตามสินค้า",
          "answer": "ผู้ซื้อภาคอุตสาหกรรมมักถือแบบมาแล้วอยากรู้ว่าซัพพลายเออร์ทำชิ้นงานนี้ได้ไหม หน้าเครื่องจักร กระบวนการ และมาตรฐาน ตอบเรื่องนี้ได้ตรงกว่าแคตตาล็อกสินค้า"
        },
        {
          "question": "เว็บช่วยเรื่อง RFQ ยังไง",
          "answer": "ผู้ซื้อตรวจสอบเครื่องจักร ใบรับรอง และผลงานเก่าได้ก่อน คำขอที่เข้ามาจึงมีข้อมูลมากขึ้น ทีมขายก็ส่งลิงก์ผลงานอ้างอิงลิงก์เดียวได้ ไม่ต้องทำสไลด์ใหม่ทุกครั้ง"
        },
        {
          "question": "บริษัทเพิ่มผลงานและใบรับรองใหม่เองได้ไหม",
          "answer": "ได้ เนื้อหาผลงานและใบรับรองอยู่ใน CMS แบบเบา ทีมเพิ่มรายการใหม่ได้เองโดยไม่ต้องพึ่งนักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับโรงงานรายอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เอาความสามารถและใบรับรองขึ้นก่อน ใช้ได้โดยตรงกับผู้ผลิตงานความแม่นยำสูงหรือธุรกิจจำหน่ายวัสดุอุตสาหกรรม เราปรับประเภทหน้าและเนื้อหาเทคนิคให้ตรงกับกระบวนการของแต่ละบริษัท"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/thai-metal-aluminium/cover.jpg"
    },
    "en": {
      "metaTitle": "Manufacturer Website, Thailand | Thai Metal Aluminium",
      "metaDescription": "Thai Metal Aluminium's corporate website by Haliviq: machinery and capability pages, certifications and reference work, written for industrial RFQ buyers.",
      "h1": "Thai Metal Aluminium: Corporate Website Built Around Industrial Capability",
      "client": "Thai Metal Aluminium",
      "badge": "Manufacturing",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Technical Content Direction",
        "SEO for Industrial Customers"
      ],
      "intro": "Before an engineer or purchasing manager sends an RFQ to a metal and aluminium parts maker, they look for proof: which machines, what processes, which standards, who else has bought from them. Thai Metal Aluminium's old website did not answer those questions. We rebuilt it as a capability-first corporate site, with machinery and process pages, a certifications and quality-standards section, and a reference-work area, all written in a technical register that industrial buyers recognise. Search structure was planned alongside the content so that the site can be found for the specific terms buyers type. This page describes the deliverables, the way we worked and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Manufacturing"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Let engineers and procurement teams verify machining capability and equipment specifications online, before anyone picks up the phone.",
        "Present quality certifications and standards in a way that shortens vendor-qualification time.",
        "Build a reference-work and past-client section that business development can point new prospects to.",
        "Organize the manufacturing process so a buyer can see how a part moves from drawing to delivery.",
        "Structure technical content so the site can rank for the specific industrial search terms buyers use.",
        "Replace a generic brand-marketing tone with a technical, credible one that suits the audience."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive corporate website built for B2B industrial buyers",
        "Systematic presentation of machinery, processes and production capability",
        "A quality-standards and certifications page",
        "A reference-work and past-client showcase",
        "Technical content structured around industrial-buyer search behaviour",
        "Metadata and structured data to support the company's credibility in search results",
        "An editable structure for adding new reference work and certification updates"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business and capability research",
          "desc": "We gathered the manufacturing process, the machine inventory and the profile of the industrial customers Thai Metal Aluminium wants to win. That list of what the company can actually do became the backbone of the content."
        },
        {
          "title": "Information architecture",
          "desc": "We structured the site so capability, certifications and past work are each one click from the homepage. A buyer should be able to verify any claim without hunting for it."
        },
        {
          "title": "Development",
          "desc": "We built a fast, restrained website that suits an industrial audience, with clean tables and specification layouts. Readers are here to check details, so the design stays out of their way."
        },
        {
          "title": "Technical SEO planning",
          "desc": "We planned content and metadata around the terms industrial buyers actually search, such as processes, materials and part types. Each capability has its own page rather than sharing one long list."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast pages and clean, crawlable URLs",
        "Technical content architecture, with one page per capability, process or machine group",
        "Cloud hosting and CDN for quick delivery of photos and documents",
        "Lightweight CMS for case and reference updates, edited without a developer",
        "Technical on-page SEO covering titles, headings and specification content",
        "Structured data for organization credibility, so search engines can read who the company is"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website positions the company for new industrial RFQs.",
        "Capability and certification information can now be verified online before a sales call.",
        "Business development has a reference-work section to send prospects to directly.",
        "Each capability and process has its own page, which gives search engines clear material to index.",
        "A technical SEO foundation is in place for the specific terms industrial buyers search."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A corporate capability website like this typically takes around two months. How quickly the machine list, certifications and reference work are collected has the biggest effect on the schedule."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a lightweight CMS for case studies and certifications, deployed on a CDN-backed cloud host, with a technical on-page SEO structure."
        },
        {
          "question": "Why organize the site around capability instead of products?",
          "answer": "Industrial buyers often come with a drawing and need to know whether a supplier can make the part. Pages for machinery, processes and standards answer that directly, which a product catalog does not."
        },
        {
          "question": "How does the site help with RFQs?",
          "answer": "It lets a buyer check equipment, certifications and past work online first, so the enquiries that arrive are better informed. The sales team can also send one reference-work link instead of assembling a deck each time."
        },
        {
          "question": "Can the company add new reference work and certifications?",
          "answer": "Yes. Case and certification content lives in a lightweight CMS, so new entries can be added by the team without developer involvement."
        },
        {
          "question": "Can this be adapted for other industrial manufacturers?",
          "answer": "Yes. A capability-first, certification-forward structure applies directly to other precision manufacturing or industrial-supply businesses. The page types and technical content are adjusted to each company's processes."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/thai-metal-aluminium/cover.jpg"
    }
  },
  {
    "slug": "vera",
    "industryTag": "E-Commerce",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ E-commerce ครบทั้งตะกร้าและชำระเงิน | VERA",
      "metaDescription": "ดูงานเว็บ E-commerce ของแบรนด์ VERA ที่ Haliviq ทำ มีตะกร้า ชำระเงินได้หลายช่องทาง ติดตามสถานะออเดอร์ และระบบจัดการออเดอร์ ขายเองโดยไม่ง้อมาร์เก็ตเพลส",
      "h1": "VERA: เว็บไซต์ E-commerce พร้อมตะกร้า ชำระเงิน และระบบจัดการออเดอร์",
      "client": "VERA",
      "badge": "E-Commerce",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "กำกับภาพถ่ายสินค้า",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์"
      ],
      "intro": "VERA ผลิตและขายสินค้าของตัวเอง แต่ยอดขายส่วนใหญ่ไปอยู่บนมาร์เก็ตเพลส ซึ่งทำให้กำไรต่อชิ้นลดลง และคนที่รู้ว่าลูกค้าคือใครก็เป็นมาร์เก็ตเพลส ไม่ใช่แบรนด์ เราเลยสร้างเว็บ E-commerce ของ VERA เอง มีตะกร้า หน้าชำระเงิน ช่องทางจ่ายหลายแบบ การติดตามออเดอร์สำหรับลูกค้า และหน้าจัดการออเดอร์สำหรับทีม ดีไซน์เรียบและดูพรีเมียมให้เข้ากับสินค้า ใช้ภาพถ่ายหลายมุม สรุปด้านล่างคืองานที่ส่งมอบ ขั้นตอนที่เราทำ และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "E-Commerce"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ลดการพึ่งพามาร์เก็ตเพลส ด้วยช่องทางขายตรงถึงผู้บริโภคของแบรนด์เอง",
        "สร้างตะกร้าและขั้นตอนชำระเงินที่ลื่นพอจะสู้ความสะดวกที่ลูกค้าได้จากมาร์เก็ตเพลส",
        "ให้ทีมเห็นภาพรวมออเดอร์เองได้ ไม่ต้องพึ่งหน้าจอผู้ขายของมาร์เก็ตเพลส",
        "ให้ลูกค้าดูสถานะออเดอร์ได้หลังชำระเงิน ไม่ต้องทักมาถาม",
        "นำเสนอสินค้าแบบพรีเมียมที่สมกับคุณภาพและราคาจริง",
        "อัปเดตคอลเลกชันตามฤดูกาลผ่านหน้าที่ทีมภายในแก้ไขเองได้"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ E-commerce ครบ มีตะกร้า หน้าชำระเงิน และระบบจัดการออเดอร์",
        "ดีไซน์มินิมอลแบบพรีเมียม พร้อมภาพสินค้าหลายมุม",
        "หน้าคอลเลกชันตามฤดูกาลที่ทีมภายในอัปเดตเองได้",
        "เชื่อมระบบชำระเงินหลายช่องทาง",
        "การติดตามสถานะออเดอร์สำหรับลูกค้าหลังซื้อ",
        "หน้าสินค้าที่เตรียมชื่อหน้า คำอธิบาย และหัวข้อไว้สำหรับการค้นหา",
        "ส่งมอบงานคอนเทนต์และการตลาด ให้ทีมทำแคมเปญเองได้หลายช่องทาง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาแบรนด์และสินค้า",
          "desc": "เราเก็บข้อมูลสายสินค้า โทนภาพ และกลุ่มลูกค้า ก่อนวางโครงสร้างร้าน ข้อมูลพวกนี้ใช้ตัดสินใจว่าจะจัดกลุ่มสินค้ายังไง และภาพถ่ายต้องรับภาระมากแค่ไหน"
        },
        {
          "title": "ออกแบบ UX ให้ปิดการขายได้",
          "desc": "เราออกแบบการเลือกดูและการชำระเงินให้มีขั้นตอนน้อยที่สุด และทำให้ลูกค้าหลุดระหว่างทางน้อยที่สุด ทุกหน้าจอเราถามตัวเองว่า ลูกค้าจำเป็นต้องทำขั้นตอนนี้ไหม"
        },
        {
          "title": "พัฒนาระบบ E-commerce",
          "desc": "เราสร้างตะกร้า หน้าชำระเงิน การเชื่อมระบบจ่ายเงิน และระบบจัดการออเดอร์ ทุกส่วนต่อกัน ออเดอร์ที่ลูกค้าสั่งจึงขึ้นให้ทีมเห็นโดยไม่ต้องกรอกซ้ำ"
        },
        {
          "title": "ส่งมอบคอนเทนต์และการตลาด",
          "desc": "เราจัดภาพถ่ายสินค้าและแนวคอนเทนต์ที่ทีมนำไปใช้บนช่องทางของตัวเองได้ และสอนทีมเรื่องการเผยแพร่คอลเลกชันและการดูแลออเดอร์"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าสินค้าและหน้าชำระเงินโหลดเร็ว",
        "ระบบตะกร้าและชำระเงินที่สร้างให้เหมาะกับแคตตาล็อกของแบรนด์",
        "เชื่อม payment gateway ให้ลูกค้าเลือกจ่ายได้หลายวิธี",
        "ระบบจัดการออเดอร์ ที่ทีมใช้ดูและดำเนินการออเดอร์",
        "Cloud hosting และ CDN ให้ภาพสินค้าหลายมุมโหลดเร็ว",
        "พื้นฐาน SEO บนหน้าเว็บ ครอบคลุมหน้าสินค้าและหน้าคอลเลกชัน"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่ให้แบรนด์มีช่องทางขายตรง ไม่ต้องพึ่งมาร์เก็ตเพลส",
        "ขั้นตอนชำระเงินแบบไหลเดียว ออกแบบมาเพื่อลดการทิ้งตะกร้า",
        "ลูกค้าดูสถานะออเดอร์ได้เอง ช่วยลดคำถามที่ถึงทีมบริการลูกค้า",
        "การนำเสนอสินค้าดูพรีเมียม ตรงกับระดับราคาจริงของแบรนด์",
        "ทีมดูและจัดการออเดอร์ได้ในระบบของตัวเอง แทนการเข้าหน้าจอของมาร์เก็ตเพลส"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บ E-commerce ครบชุดที่มีตะกร้า ชำระเงิน และจัดการออเดอร์แบบนี้ ปกติใช้เวลาราวสามเดือน ปัจจัยหลักคือการตั้งค่าระบบชำระเงินและจำนวนสินค้า"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าร้าน เชื่อม payment gateway มีระบบจัดการออเดอร์ และวางบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "มาร์เก็ตเพลสก็พาคนเข้ามาอยู่แล้ว ทำไมต้องมีเว็บของตัวเอง",
          "answer": "มาร์เก็ตเพลสพาคนมาเห็นสินค้าได้เยอะ แต่หักส่วนแบ่งจากทุกออเดอร์ และเก็บความสัมพันธ์กับลูกค้าไว้เอง เว็บของตัวเองทำให้แบรนด์คุมหน้าตา เห็นออเดอร์ และคุยกับลูกค้าได้โดยตรง"
        },
        {
          "question": "ร้านรองรับการชำระเงินแบบไหนบ้าง",
          "answer": "หน้าชำระเงินเชื่อมช่องทางจ่ายหลายแบบผ่าน payment gateway ส่วนว่าจะมีช่องทางไหนบ้าง เราเลือกร่วมกับลูกค้า ตามกลุ่มลูกค้าและวิธีจ่ายที่เขาถนัด"
        },
        {
          "question": "ลูกค้าติดตามออเดอร์ได้ไหม",
          "answer": "ได้ หลังซื้อ ลูกค้าเช็กสถานะออเดอร์ในเว็บได้เอง ไม่ต้องทักมาถามทีมงาน"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์สินค้าอื่นได้ไหม",
          "answer": "ได้ ชุดตะกร้า ชำระเงิน และจัดการออเดอร์แบบนี้เหมาะกับผู้ผลิตที่ขายตรงถึงลูกค้า และอยากก้าวออกจากการขายบนมาร์เก็ตเพลสอย่างเดียว เราปรับโครงสร้างแคตตาล็อกและช่องทางจ่ายเงินให้เข้ากับแต่ละแบรนด์"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/vera/cover.jpg"
    },
    "en": {
      "metaTitle": "E-Commerce Website Development, Thailand | VERA",
      "metaDescription": "VERA's own e-commerce website by Haliviq: cart, checkout, several payment methods, order tracking and order management, built to sell beyond marketplaces.",
      "h1": "VERA: E-Commerce Website with Cart, Checkout and Order Management",
      "client": "VERA",
      "badge": "E-Commerce",
      "servicesProvided": [
        "UX/UI Design",
        "E-Commerce Development",
        "Product Photography Direction",
        "Digital Marketing Support"
      ],
      "intro": "VERA makes and sells its own products, yet most of its sales ran through marketplaces. That limits margin and means the marketplace, not the brand, knows who the customers are. We built VERA a full e-commerce website of its own, with a cart, a checkout, several ways to pay, order tracking for customers and an order-management view for the team. The look is minimal and premium to match the product, with photography shot from several angles. Here is what we delivered, the steps we took and the technology that runs it.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "E-Commerce"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reduce dependence on third-party marketplaces by giving the brand a direct-to-consumer channel.",
        "Build a cart and checkout smooth enough to compete with the convenience shoppers get on marketplaces.",
        "Give the team visibility of orders without relying on a marketplace seller dashboard.",
        "Let customers see where their order is after paying, so they do not have to message to ask.",
        "Present the products in a premium way that matches their real quality and price.",
        "Keep seasonal collections current through pages the internal team edits itself."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A full e-commerce website with cart, checkout and order management",
        "A minimal, premium design language with multi-angle product photography",
        "Seasonal collection pages kept current by the internal team",
        "Several payment method integrations",
        "Order-status tracking for customers after purchase",
        "Product pages with titles, descriptions and headings prepared for search",
        "A content and marketing handover so the team can run campaigns across channels"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand and product research",
          "desc": "We gathered the product line, the visual tone and the target customer before structuring the shop. These decided how products are grouped and how much the photography has to carry."
        },
        {
          "title": "Conversion-focused UX",
          "desc": "We designed browsing and checkout to use as few steps as possible and to lose as few shoppers as possible along the way. Each screen was checked against the question: does the customer need to do this?"
        },
        {
          "title": "E-commerce development",
          "desc": "We built the cart, the checkout, the payment integrations and the order-management system. These pieces are connected so an order placed by a customer shows up for the team without re-entry."
        },
        {
          "title": "Content and marketing handover",
          "desc": "We organized product photography and a content direction the team can use on its own channels. The team also learns how to publish collections and manage orders."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast product and checkout pages",
        "E-commerce cart and checkout system, built for the brand's own catalog",
        "Payment gateway integration, offering customers several ways to pay",
        "Order management system, where the team sees and processes orders",
        "Cloud hosting and CDN, so multi-angle product photos load quickly",
        "On-page SEO foundation across product and collection pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website gives the brand a direct sales channel that does not depend on marketplaces.",
        "A single-flow checkout is designed to reduce cart abandonment.",
        "Customers can see their order status, which cuts down customer-service enquiries.",
        "The product presentation is premium, matched to the brand's real price point.",
        "The team sees and manages orders in its own system instead of a marketplace dashboard."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A full e-commerce build with cart, checkout and order management like this typically takes around three months. Payment set-up and the number of products are the main factors."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js e-commerce front end with payment gateway integration, an order management system and cloud hosting with a CDN."
        },
        {
          "question": "Why build a store when marketplaces already bring traffic?",
          "answer": "Marketplaces bring reach, but they take a share of each sale and keep the customer relationship. An own store lets the brand set its presentation, see its orders and speak to its customers directly."
        },
        {
          "question": "Which payment methods does the store support?",
          "answer": "The checkout connects to several payment methods through a payment gateway. The exact set is chosen with the client, based on who their customers are and what they prefer to pay with."
        },
        {
          "question": "Can customers track their orders?",
          "answer": "Yes. After purchase, customers can check the status of their order on the site, which spares them from messaging the team to ask."
        },
        {
          "question": "Can this be adapted for other product brands?",
          "answer": "Yes. The cart, checkout and order-management set-up fits other direct-to-consumer manufacturers that want to move beyond marketplace-only selling. We adapt the catalog structure and payment options to each brand."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/vera/cover.jpg"
    }
  },
  {
    "slug": "nfi",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์หน่วยงานรัฐ ค้นหาบริการได้ | NFI",
      "metaDescription": "ดูงานเว็บไซต์สถาบันอาหาร (NFI) ที่ Haliviq ทำ จัดบริการเป็นหมวดชัดเจน มีระบบค้นหาบริการที่ใช้ได้จริง และมีข้อมูลขั้นตอนกับระยะเวลาดำเนินการ",
      "h1": "NFI – สถาบันอาหาร: เว็บไซต์หน่วยงานรัฐ พร้อมระบบค้นหาบริการ",
      "client": "NFI สถาบันอาหาร",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบค้นหาบริการห้องปฏิบัติการ",
        "จัดระเบียบเนื้อหางานวิจัย"
      ],
      "intro": "สถาบันอาหาร (NFI) มีบริการให้ทั้งภาคธุรกิจและนักวิจัยหลายอย่าง ตั้งแต่ตรวจสอบไปจนถึงสนับสนุนงานวิจัย แต่เว็บเดิมซ่อนบริการเหล่านี้ไว้หลังเมนูที่ตามยาก เราเลยทำเว็บใหม่ โดยตั้งโจทย์ว่า คนที่เข้ามาครั้งแรกต้องหาบริการที่ต้องการเจอภายในหนึ่งนาที คำตอบคือโครงสร้างหมวดที่ชัดเจน ระบบค้นหาบริการที่ใช้ได้จริง และหน้าที่อธิบายขั้นตอนกับระยะเวลาของแต่ละบริการ เว็บจึงเป็นเครื่องมือที่ผู้ใช้ใช้ได้จริง ไม่ใช่แค่โบรชัวร์ออนไลน์ ด้านล่างสรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้คนที่เข้ามาครั้งแรกหาบริการที่ต้องการเจอภายในไม่ถึงหนึ่งนาที",
        "จัดบริการของสถาบันที่มีหลากหลาย ให้อยู่ในหมวดที่ชัดและเดินตามง่าย",
        "อธิบายขั้นตอนและระยะเวลาดำเนินการให้ชัด เพื่อลดสายโทรเข้ามาสอบถาม",
        "ทำให้เนื้อหางานวิจัยและเอกสารสาธารณะหาง่ายและดาวน์โหลดได้",
        "สร้างเว็บไซต์หน่วยงานรัฐที่ทันสมัยและน่าเชื่อถือ",
        "ให้อ่านง่ายสำหรับผู้เข้าชมที่คุ้นเคยกับสถาบันและเทคโนโลยีไม่เท่ากัน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์หน่วยงานรัฐที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "เนื้อหาบริการและงานวิจัยที่จัดเป็นหมวดชัดเจน",
        "ระบบค้นหาบริการของสถาบันที่ใช้งานได้จริง",
        "หน้าข้อมูลขั้นตอนและระยะเวลาดำเนินการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับทรัพยากรสาธารณะ",
        "เทมเพลตหน้าเว็บที่รองรับการเข้าถึง และทำตามมาตรฐานเว็บ",
        "ระบบจัดการเนื้อหาที่สถาบันอัปเดตเองได้เวลาบริการเปลี่ยน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาข้อมูลของสถาบัน",
          "desc": "เราเก็บรายการบริการทั้งหมด และกลุ่มผู้ใช้ที่แต่ละบริการตั้งใจให้ การเห็นทุกบริการพร้อมกันทำให้เราเห็นว่าเมนูเดิมซ่อนอะไรไว้ตรงไหน"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราจัดบริการและงานวิจัยเป็นหมวดที่คนไม่ใช่ผู้เชี่ยวชาญก็เดินตามได้ ชื่อหมวดใช้คำที่ผู้เข้าชมใช้จริง ไม่ใช้ชื่อฝ่ายภายในองค์กร"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและเข้าถึงง่าย สำหรับผู้ใช้ทั้งภาคธุรกิจและงานวิจัย ระบบค้นหาและตัวกรองสร้างพร้อมกับโครงสร้างหมวด ให้สองส่วนนี้ตรงกัน"
        },
        {
          "title": "จัดระเบียบเนื้อหา",
          "desc": "เราจัดเนื้อหาบริการและงานวิจัยให้แต่ละรายการครบและค้นหาได้ ขั้นตอน ระยะเวลา และเอกสารดาวน์โหลด มีที่อยู่ของตัวเองเป็นรูปแบบเดียวกัน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บเร็วและ URL สะอาด",
        "ระบบค้นหาและกรองบริการ ให้ผู้เข้าชมย่อรายการยาวๆ ให้แคบลงได้เร็ว",
        "Cloud hosting และ CDN ส่งหน้าเว็บและเอกสารได้เสถียร",
        "ระบบจัดการเนื้อหาสำหรับอัปเดตข้อมูลของสถาบัน เจ้าหน้าที่แก้เองได้",
        "โค้ดหน้าเว็บตามมาตรฐานที่รองรับการเข้าถึง ใช้ได้กับผู้เข้าชมที่หลากหลาย",
        "พื้นฐาน SEO บนหน้าเว็บสำหรับหน้าบริการและหน้างานวิจัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่จัดบริการให้ผู้เข้าชมหาเจอเองได้",
        "ระบบค้นหาที่ใช้ได้จริงช่วยลดการสอบถามทางโทรศัพท์",
        "ข้อมูลขั้นตอนและระยะเวลาดำเนินการถูกเผยแพร่อย่างชัดเจนเป็นครั้งแรก",
        "เว็บทันสมัย เหมาะกับความน่าเชื่อถือที่หน่วยงานรัฐต้องมี",
        "เอกสารดาวน์โหลดอยู่ในโครงสร้างเดียวกัน ดูแลง่าย"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์หน่วยงานรัฐที่มีระบบค้นหาบริการแบบนี้ ปกติใช้เวลาราวสามเดือน ส่วนที่ใช้เวลามากสุดคือการรวบรวมและจัดระเบียบข้อมูลบริการ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มีระบบค้นหาและกรองโดยเฉพาะ มีระบบจัดการเนื้อหาสำหรับอัปเดตข้อมูลของสถาบัน และวางบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ระบบค้นหาบริการช่วยผู้เข้าชมยังไง",
          "answer": "ผู้เข้าชมพิมพ์สิ่งที่ต้องการ หรือเลือกกรองตามหมวด ก็เห็นบริการที่ตรงกันทันที ไม่ต้องเลื่อนหาในหน้ายาวๆ หรือโทรไปถาม"
        },
        {
          "question": "ทำไมต้องเผยแพร่ข้อมูลขั้นตอนและระยะเวลา",
          "answer": "สายที่โทรเข้ามาที่สถาบันจำนวนมากคือคนถามว่าบริการทำยังไงและใช้เวลานานแค่ไหน การเอาคำตอบพวกนี้ขึ้นเว็บช่วยลดสายเหล่านั้น และช่วยให้ผู้เข้าชมวางแผนก่อนติดต่อ"
        },
        {
          "question": "เจ้าหน้าที่อัปเดตเว็บเองได้ไหม",
          "answer": "ได้ บริการ เนื้อหางานวิจัย และเอกสาร อยู่ในโครงสร้างระบบจัดการเนื้อหาที่เจ้าหน้าที่แก้ไขเองได้ ไม่ต้องใช้นักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานรัฐอื่นได้ไหม",
          "answer": "ได้ โครงสร้างการจัดหมวดบริการและระบบค้นหาแบบนี้ใช้ได้กับหน่วยงานรัฐหรือสถาบันที่มีบริการหลากหลาย เราปรับหมวดและตัวกรองให้เข้ากับแต่ละองค์กร"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/nfi/cover.jpg"
    },
    "en": {
      "metaTitle": "Public Sector Website with Service Search | NFI Thailand",
      "metaDescription": "National Food Institute's website by Haliviq: services sorted into clear categories, a working service search, and process and turnaround information.",
      "h1": "NFI – National Food Institute: Public-Sector Website with Service Search",
      "client": "NFI – National Food Institute",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Lab Service Search System",
        "Research Content Organization"
      ],
      "intro": "The National Food Institute offers many services to businesses and researchers, from testing to research support, but the old site hid that range behind navigation that was hard to follow. We rebuilt the site around one question: can a first-time visitor find the service they need within a minute? The answer was a clear category structure, a working service search, and pages that spell out how each process runs and how long it takes. The result serves the people who actually use it, not only as an online brochure. Below we describe what we delivered, how we worked and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Let a first-time visitor find the specific service they need in under a minute.",
        "Organize a wide range of institutional services into clear, navigable categories.",
        "Explain process and turnaround time clearly enough to reduce inbound inquiry calls.",
        "Make research content and public resources easy to find and download.",
        "Build a modern, credible web presence for a public institution.",
        "Keep the site readable for visitors with different levels of familiarity with the institute and with technology."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive public-sector website",
        "Service and research content organized into clear categories",
        "A working search system for institutional services",
        "Process and turnaround-time information pages",
        "A downloadable-document structure for public resources",
        "Accessible, standards-based page templates",
        "A content management setup the institute can update as services change"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Institutional research",
          "desc": "We gathered the full list of services and the user groups each one is meant for. Seeing the whole range in one place showed us where the old navigation had been hiding things."
        },
        {
          "title": "Information architecture",
          "desc": "We organized services and research into categories a non-expert visitor can follow. Names and groupings use the words visitors use, not internal department labels."
        },
        {
          "title": "Development",
          "desc": "We built a fast, accessible website for a mixed audience of business and research users. The search and filter system was built together with the category structure so the two agree with each other."
        },
        {
          "title": "Content organization",
          "desc": "We structured service and research content so each entry is complete and searchable. Process steps, turnaround times and downloadable documents all have a consistent place."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for quick pages and clean URLs",
        "Service search and filtering system, so visitors can narrow a long list quickly",
        "Cloud hosting and CDN for reliable delivery of pages and documents",
        "Content management for institutional updates, edited by the institute's own staff",
        "Accessible, standards-based markup that works for a broad public audience",
        "On-page SEO foundation for service and research pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website organizes services so visitors can find them on their own.",
        "A working search system reduces reliance on phone-based inquiries.",
        "Process and turnaround information is published clearly for the first time.",
        "The web presence is modern and suited to the credibility a public institution needs.",
        "Downloadable resources sit in a consistent structure that is simple to maintain."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector website with a service-search system like this typically takes around three months. Gathering and organizing the service information is the part that takes longest."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a dedicated search and filtering system, content management for institutional updates, and cloud hosting with a CDN."
        },
        {
          "question": "How does the service search help visitors?",
          "answer": "It lets a visitor type what they need, or narrow by category, and see matching services at once. This replaces scrolling through long pages or calling the institute to ask."
        },
        {
          "question": "Why publish process and turnaround information?",
          "answer": "Many calls to an institute are people asking how a service works and how long it takes. Putting those answers on the site reduces those calls and helps visitors plan before they get in touch."
        },
        {
          "question": "Can institute staff update the site themselves?",
          "answer": "Yes. Services, research content and documents sit in a content management structure that staff can edit without a developer."
        },
        {
          "question": "Can this be adapted for other public institutions?",
          "answer": "Yes. The service-categorization and search structure applies to other government bodies and institutes with a wide catalog of services. We adapt the categories and the search filters to each organization."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/nfi/cover.jpg"
    }
  },
  {
    "slug": "mbk",
    "industryTag": "Retail & Shopping Mall",
    "year": "2025",
    "th": {
      "metaTitle": "ทำแอปมือถือห้างสรรพสินค้า | MBK Center",
      "metaDescription": "ดูงานแอป iOS และ Android ของ MBK Center ที่ Haliviq ทำ ค้นหาร้านค้าและโปรโมชัน ระบบสมาชิกและสะสมแต้ม พร้อมหลังบ้านให้ทีมการตลาดอัปเดตเอง",
      "h1": "MBK Center: แอปมือถือค้นหาร้านค้าและระบบสมาชิก",
      "client": "MBK Center",
      "badge": "Retail & Shopping Mall",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบค้นหาร้านค้าและโปรโมชัน",
        "ระบบสมาชิกและสิทธิพิเศษ"
      ],
      "intro": "คนที่มาเดินห้างมักมีคำถามสองข้อ คือร้านนั้นอยู่ตรงไหน และวันนี้มีโปรอะไร MBK Center อยากได้แอปที่ตอบทั้งสองข้อได้เร็ว และทำให้สมาชิกอยากเปิดใช้ทุกครั้งที่มาห้าง เราออกแบบและพัฒนาแอป iOS และ Android ที่มีระบบค้นหาร้านและโปรโมชัน ระบบสมาชิกและสะสมแต้ม และหลังบ้านที่ทีมการตลาดลงรายการร้านกับโปรโมชันเองได้ แอปนี้ตั้งใจให้ใช้ตอนอยู่ในห้าง มือเดียว ระหว่างเดิน หน้านี้สรุปงานที่ส่งมอบ ขั้นตอนทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Retail & Shopping Mall"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้ลูกค้าหาร้านหรือโปรโมชันที่ต้องการในห้างขนาดใหญ่ได้เร็ว",
        "ทำให้สิทธิประโยชน์สมาชิกเป็นสิ่งที่ลูกค้าเปิดดูเอง ไม่ใช่บัตรที่ลืมอยู่ในกระเป๋า",
        "ลดการพึ่งป้ายไดเรกทอรีแบบตายตัวสำหรับข้อมูลร้านและโปรโมชัน",
        "ให้ทีมการตลาดของห้างส่งข้อเสนอถึงลูกค้าผ่านแอปได้โดยตรง",
        "ออกแบบให้ใช้ระหว่างเดิน ขั้นตอนสั้น ทำจบได้ระหว่างอยู่ในห้าง",
        "อัปเดตข้อมูลร้านและโปรโมชันผ่านหลังบ้านง่ายๆ ไม่ต้องส่งเรื่องให้ทีมวิศวกร"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นแบบแอปเนทีฟ ทั้ง iOS และ Android",
        "ระบบค้นหาร้านและโปรโมชัน ข้อมูลอัปเดตแบบเรียลไทม์",
        "ระบบสมาชิกและสะสมแต้มที่รวมอยู่ในแอป",
        "งานออกแบบ UX/UI ตั้งแต่ onboarding การค้นหา จนถึงหน้าบัญชีสมาชิก",
        "รองรับ push notification สำหรับข้อเสนอและข่าวสาร",
        "โครงสร้างหลังบ้านให้ทีมการตลาดของห้างจัดการเนื้อหาเอง",
        "แนะนำทีมวิธีจัดการรายการร้านและโปรโมชันหลังเปิดตัว"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้ใช้และผู้เกี่ยวข้อง",
          "desc": "เราดูว่าลูกค้าค้นหาร้านและโปรโมชันตอนอยู่ในห้างจริงๆ ยังไง และทีมห้างจัดการข้อมูลร้านกันยังไงอยู่ ดีไซน์จะได้ผูกกับพฤติกรรมจริงในตัวอาคาร"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบการค้นหา การเลือกดูโปรโมชัน และระบบสมาชิก ให้ใช้ได้ทันทีตอนอยู่ในห้าง แต่ละขั้นตอนสั้นพอจะทำจบระหว่างเดิน และสิ่งที่คนทำบ่อยที่สุดคือหาร้าน ก็อยู่หน้าแรก"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "เราพัฒนาแอปพร้อมระบบค้นหาร้านและโปรโมชัน และเชื่อมระบบสมาชิก ข้อมูลดึงมาจากหลังบ้านที่ทีมการตลาดควบคุมได้เอง"
        },
        {
          "title": "สนับสนุนตอนเปิดใช้งาน",
          "desc": "เราส่งมอบหลังบ้านให้ทีมการตลาดจัดการรายการร้านและโปรโมชันเอง และพาทีมลองเผยแพร่ข้อเสนอและแก้ข้อมูลร้านจริง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Cross-platform mobile app framework ใช้โค้ดชุดเดียวทำได้ทั้ง iOS และ Android",
        "ระบบค้นหาร้านและโปรโมชัน ปรับให้ค้นหาได้เร็ว",
        "เชื่อมระบบสมาชิกและสะสมแต้มจาก backend",
        "Cloud hosting และ API infrastructure ที่อยู่หลังแอป",
        "รองรับ push notification สำหรับข้อเสนอ",
        "แผงจัดการเนื้อหาหลังบ้านสำหรับทีมการตลาด"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่ให้ลูกค้ามีทางเลือกตรงๆ แทนป้ายไดเรกทอรีแบบตายตัว",
        "ระบบค้นหาที่พาไปถึงร้านและโปรโมชันได้ในไม่กี่วินาที",
        "ระบบสมาชิกที่ออกแบบให้คนเปิดดู ไม่ใช่ลืมทิ้งไว้",
        "ทีมการตลาดทำงานกับคอนเทนต์เองได้โดยไม่ต้องพึ่งทีมวิศวกร",
        "ข้อเสนอส่งถึงสมาชิกได้ผ่าน push notification"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือที่มีระบบค้นหาและสมาชิกแบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน ส่วนที่กระทบเวลามากสุดคือการเชื่อมกับข้อมูลสมาชิกเดิมของห้าง"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ cross-platform mobile app framework มีระบบค้นหาร้านและโปรโมชันโดยเฉพาะ และมี backend สมาชิกที่เชื่อมกับระบบเดิมของห้าง"
        },
        {
          "question": "แอปใช้ได้ทั้ง iPhone และ Android ไหม",
          "answer": "ได้ เราใช้ cross-platform framework ทำสองเวอร์ชันจากโค้ดชุดเดียว ฟีเจอร์และการแก้บั๊กจึงถึงทั้งสองระบบพร้อมกัน"
        },
        {
          "question": "ใครเป็นคนอัปเดตร้านค้าและโปรโมชัน",
          "answer": "ทีมการตลาดของห้างทำเองผ่านแผงหลังบ้าน เพิ่มหรือแก้รายการร้านและเผยแพร่ข้อเสนอได้โดยไม่ต้องส่งเรื่องให้นักพัฒนา"
        },
        {
          "question": "ระบบสมาชิกทำงานยังไง",
          "answer": "สมาชิกเปิดแอปดูบัญชีและสิทธิประโยชน์ที่ใช้ได้ในตอนนั้น อยู่ติดกับหน้าค้นหาร้าน การเช็กสิทธิจึงเป็นส่วนหนึ่งของการมาห้าง ไม่ใช่เรื่องแยกต่างหาก"
        },
        {
          "question": "ใช้แนวทางนี้กับห้างหรือกลุ่มค้าปลีกอื่นได้ไหม",
          "answer": "ได้ การออกแบบค้นหาร้านและระบบสมาชิกแบบนี้เหมาะกับผู้ประกอบการห้างหรือค้าปลีกที่มีหลายร้านเช่า เราปรับแหล่งข้อมูล กติกาสมาชิก และเครื่องมือหลังบ้านให้เข้ากับแต่ละราย"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/mbk/cover.jpg"
    },
    "en": {
      "metaTitle": "Shopping Mall Mobile App Development | MBK Center",
      "metaDescription": "MBK Center's iOS and Android app by Haliviq: store and promotion search, a membership and rewards layer, and an admin panel for the marketing team.",
      "h1": "MBK Center: Mobile App for Store Discovery and Membership",
      "client": "MBK Center",
      "badge": "Retail & Shopping Mall",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Store & Promotion Search System",
        "Membership & Rewards System"
      ],
      "intro": "A mall visitor usually has two questions: where is that shop, and what deals are on today? MBK Center asked us for an app that answers both quickly, and that gives its members a reason to open it each time they visit. We designed and built an iOS and Android app with a store and promotion search, a membership and rewards layer, and an admin side where the marketing team publishes listings and offers itself. The app is meant to be used on-site, one-handed, in the middle of a walk. This page covers the deliverables, the process and the technology.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Retail & Shopping Mall"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give shoppers a fast way to find a specific store or a current promotion inside a large mall.",
        "Turn membership perks into something shoppers check on purpose, not a card they forget in a wallet.",
        "Reduce reliance on static directory signage for store and promotion information.",
        "Let the mall's marketing team push offers to shoppers directly through the app.",
        "Design for use on the move, with short flows that work in the middle of a visit.",
        "Keep store and promotion data current through a simple admin tool instead of engineering requests."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A native-feeling mobile app for iOS and Android",
        "A store and promotion search system with real-time content",
        "A membership and rewards system integrated into the app",
        "UX/UI design covering onboarding, search and member account flows",
        "Push notification support for offers and updates",
        "An admin-side content structure for the mall's marketing team",
        "Guidance for the team on managing listings and promotions after launch"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "User and stakeholder research",
          "desc": "We looked at how shoppers actually search for stores and promotions while on-site, and how the mall team manages store data today. This kept the design tied to real behaviour in the building."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed search, promotion browsing and membership flows for in-the-moment use. Each flow is short enough to finish while walking, and the most common task, finding a store, is first on the screen."
        },
        {
          "title": "Mobile app development",
          "desc": "We built the app with the store and promotion search and the membership integration. The data comes from a backend that the marketing team controls."
        },
        {
          "title": "Rollout support",
          "desc": "We delivered an admin content structure so marketing can manage listings and promotions directly. We also walked the team through publishing an offer and updating a store entry."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework, so iOS and Android share one codebase",
        "Store and promotion search system, tuned for quick lookups",
        "Membership and rewards backend integration",
        "Cloud hosting and API infrastructure behind the app",
        "Push notification support for offers",
        "Admin content management panel for the marketing team"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app gives shoppers a direct alternative to static directory signage.",
        "A search system finds stores and promotions in seconds.",
        "A membership layer is designed to be checked, not forgotten.",
        "The marketing team runs a content pipeline without needing engineering involvement.",
        "Offers can reach members through push notifications."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A mobile app with search and membership systems like this typically takes around two to three months. Integration with the mall's existing membership data affects the schedule most."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework, a dedicated store and promotion search system, and a membership backend connected to the mall's existing systems."
        },
        {
          "question": "Does the app work on both iPhone and Android?",
          "answer": "Yes. A cross-platform framework lets us deliver both versions from one codebase, so features and fixes reach both at the same time."
        },
        {
          "question": "Who updates the stores and promotions?",
          "answer": "The mall's marketing team does, through an admin panel. They add or change listings and publish offers without sending a request to developers."
        },
        {
          "question": "How does the membership part work?",
          "answer": "Members use the app to see their account and the perks currently available to them. It sits next to the store search, so checking a reward becomes part of the visit rather than a separate task."
        },
        {
          "question": "Can this be adapted for other malls or retail groups?",
          "answer": "Yes. The store-search and membership design suits other multi-tenant retail or shopping-mall operators. We adapt the data sources, the membership rules and the admin tools to each operator."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/mbk/cover.jpg"
    }
  },
  {
    "slug": "ditp",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ทำแอปมือถือหน่วยงานรัฐ ข้อมูลตลาดส่งออก | DITP",
      "metaDescription": "ดูงานแอป iOS และ Android ของ DITP ที่ Haliviq ทำ มีข้อมูลตลาดส่งออก เชื่อมฐานข้อมูลภาครัฐที่มีอยู่ และหน้าจอที่คนทั่วไปใช้ง่าย",
      "h1": "DITP: แอปมือถือบริการภาครัฐ พร้อมข้อมูลตลาดส่งออก",
      "client": "DITP กรมส่งเสริมการค้าระหว่างประเทศ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบข้อมูลตลาดส่งออก",
        "เชื่อมฐานข้อมูลผู้ประกอบการ"
      ],
      "intro": "กรมส่งเสริมการค้าระหว่างประเทศ (DITP) มีข้อมูลที่ผู้ประกอบการอยากได้ไว้ในมือ แต่แอปภาครัฐแทบไม่เคยเริ่มจากหน้ากระดาษเปล่า ต้องต่อกับข้อมูลและระบบภาครัฐที่มีอยู่ และต้องใช้ง่ายสำหรับคนที่ไม่ได้คุ้นกับเทคโนโลยี Haliviq ออกแบบและพัฒนาแอป iOS และ Android ของ DITP รวมถึงงานเชื่อมข้อมูลที่ทำให้แอปใช้ได้จริงตั้งแต่วันเปิด หน้าจอเน้นความชัดเจนมากกว่าใส่ข้อมูลแน่น หน่วยงานดูแลเนื้อหาเองได้ และโครงสร้างเผื่อเพิ่มฟีเจอร์ในอนาคต ด้านล่างสรุปงานที่ส่งมอบและวิธีทำงาน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำบริการและเนื้อหาของหน่วยงาน ไปถึงผู้ใช้ทั่วไปที่ใช้มือถือเป็นหลัก",
        "เชื่อมกับแหล่งข้อมูลภาครัฐที่มีอยู่ แทนการทำข้อมูลซ้ำ",
        "ออกแบบให้คนหลายกลุ่มใช้ได้ รวมถึงคนที่ไม่ค่อยคุ้นกับแอป",
        "ทำให้ข้อมูลตลาดส่งออกและฐานข้อมูลธุรกิจ เปิดดูจากมือถือได้สะดวก",
        "ให้หน่วยงานอัปเดตเนื้อหาเองได้โดยไม่ต้องพึ่งนักพัฒนา",
        "สร้างแพลตฟอร์มที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในภายหลัง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นแบบแอปเนทีฟ ทั้ง iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้ทั่วไปหลากหลายกลุ่ม ไม่ต้องมีพื้นความรู้เทคนิค",
        "เชื่อมกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "ระบบข้อมูลตลาดส่งออกที่จัดแสดงให้อ่านง่าย",
        "โครงสร้างเนื้อหาที่หน่วยงานอัปเดตเองได้",
        "รูปแบบหน้าจอที่คำนึงถึงการเข้าถึงสำหรับผู้ใช้ทุกกลุ่ม",
        "โครงสร้างการเข้าสู่ระบบที่ปลอดภัย สำหรับส่วนที่ต้องล็อกอิน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "เราไล่ดูว่าแอปต้องเชื่อมกับระบบและแหล่งข้อมูลไหนบ้าง และใครเป็นเจ้าของแต่ละอัน งานภาครัฐส่วนใหญ่ตัดสินเรื่องเวลาและความเสี่ยงกันที่ขั้นตอนนี้"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบให้ประชาชนทั่วไปใช้ได้ และเลือกความชัดเจนมากกว่าข้อมูลแน่น ปุ่มกดใหญ่ ชื่อเมนูใช้คำง่าย และทางไปถึงข้อมูลที่คนมาหาสั้น"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "เราพัฒนาแอปและเชื่อมกับข้อมูลและระบบเดิมของหน่วยงาน พร้อมการยืนยันตัวตนที่ปลอดภัยในส่วนที่ต้องใช้ การอ่านจากต้นทางโดยตรงทำให้ไม่ต้องเก็บข้อมูลซ้ำอีกชุด"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "เราส่งมอบแอปในโครงสร้างที่หน่วยงานเพิ่มฟีเจอร์ได้ ระบบจัดการเนื้อหาและชั้นเชื่อมข้อมูลมีเอกสารกำกับ งานใหม่จะไม่ต้องเริ่มจากศูนย์"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Cross-platform mobile app framework ใช้โค้ดชุดเดียวทำได้ทั้ง iOS และ Android",
        "เชื่อมข้อมูลและ API ภาครัฐ อ่านจากระบบเดิมที่มีอยู่",
        "Cloud hosting และ backend infrastructure ของแอป",
        "ชุด UI component ที่รองรับการเข้าถึง ใช้ซ้ำทุกหน้าจอเพื่อให้หน้าตาสม่ำเสมอ",
        "ระบบจัดการเนื้อหาสำหรับอัปเดตโดยหน่วยงาน",
        "โครงสร้างการยืนยันตัวตนที่ปลอดภัยสำหรับฟีเจอร์ที่ต้องป้องกัน"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่ขยายบริการของหน่วยงานไปสู่ผู้ใช้ที่ใช้มือถือเป็นหลัก",
        "การเชื่อมข้อมูลช่วยให้ไม่ต้องเก็บข้อมูลซ้ำซ้อนหลายระบบ",
        "หน้าจอออกแบบให้ผู้ใช้ทั่วไปที่ไม่ได้เชี่ยวชาญเทคโนโลยีใช้ได้",
        "แพลตฟอร์มจัดโครงสร้างไว้ให้หน่วยงานเพิ่มความสามารถใหม่ได้ต่อไป",
        "หน่วยงานดูแลเนื้อหาเองภายใน"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือหน่วยงานรัฐที่ต้องเชื่อมระบบแบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน ปัจจัยที่กระทบมากสุดคือการเข้าถึงแหล่งข้อมูลเดิมและขั้นตอนอนุมัติที่เกี่ยวข้อง"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ cross-platform mobile app framework เชื่อมกับฐานข้อมูลเดิมของหน่วยงาน วางบน cloud infrastructure พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ทำไมเชื่อมกับระบบเดิมแทนการคัดลอกข้อมูล",
          "answer": "ข้อมูลที่คัดลอกมาจะเก่าไปเรื่อยๆ และกลายเป็นว่ามีข้อมูลสองเวอร์ชัน การอ่านจากต้นทางทำให้แอปตรงกับสิ่งที่หน่วยงานดูแลอยู่แล้ว"
        },
        {
          "question": "ทำให้คนที่ไม่ถนัดเทคโนโลยีใช้ได้ยังไง",
          "answer": "เราใช้ชื่อเมนูง่ายๆ โครงสร้างที่ชัด และรูปแบบหน้าจอที่คำนึงถึงการเข้าถึง ไม่ใส่ข้อมูลทุกอย่างลงหน้าเดียว ผู้ใช้ครั้งแรกจะเห็นว่าต้องทำอะไรต่อ"
        },
        {
          "question": "หน่วยงานเพิ่มฟีเจอร์ภายหลังได้ไหม",
          "answer": "ได้ แอปและชั้นเชื่อมข้อมูลวางโครงสร้างไว้ให้ต่อยอด บริการใหม่เพิ่มบนแพลตฟอร์มเดียวกันได้ ไม่ต้องทำแอปใหม่อีกตัว"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานรัฐอื่นได้ไหม",
          "answer": "ได้ แนวทางเชื่อมข้อมูลและออกแบบให้เข้าถึงง่ายแบบนี้ใช้ได้กับหน่วยงานรัฐอื่นที่อยากนำบริการขึ้นมือถือ เราประเมินงานเชื่อมตามระบบของแต่ละหน่วยงาน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ditp/cover.jpg"
    },
    "en": {
      "metaTitle": "Government Mobile App Development in Thailand | DITP",
      "metaDescription": "DITP's iOS and Android app by Haliviq: export market data, integration with existing government databases, and an interface that works for the public.",
      "h1": "DITP: Public-Service Mobile App with Export Market Data",
      "client": "DITP",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Export Market Data System",
        "Business Database Integration"
      ],
      "intro": "The Department of International Trade Promotion has information that businesses want in their hands, but a public-sector app is rarely a blank slate. It has to sit on top of existing government data and systems and still be easy for people who are not technical. Haliviq designed and built DITP's iOS and Android app, including the integration work that decides whether the app is useful on its first day. Screens put clarity ahead of density, content can be maintained by the agency, and the structure leaves room for new features later. Below is what we delivered and how.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring an institutional service and content set to a mobile-first public audience.",
        "Connect to existing government data sources instead of duplicating them.",
        "Design for a broad range of users, including people less familiar with apps.",
        "Make export market data and business database information usable from a phone.",
        "Let the agency keep content current without developer involvement.",
        "Build a platform the agency can extend with new features over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A native-feeling mobile app for iOS and Android",
        "UX/UI design suited to a broad, non-technical public audience",
        "Integration with existing government databases and systems",
        "An export market data system presented in a readable format",
        "A content structure the agency can keep current internally",
        "Accessibility-conscious interface patterns",
        "A secure sign-in structure for the parts of the app that need it"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder and data discovery",
          "desc": "We mapped the systems and data sources the app needs to connect to, and who owns each of them. In public-sector work this mapping is usually where schedule and risk are decided."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed for a wide public audience and chose clarity over density. Screens use plain labels, large touch targets and short paths to the information people came for."
        },
        {
          "title": "Mobile app development",
          "desc": "We built the app and connected it to the agency's existing data and systems, with secure authentication where needed. Reading from the source avoids keeping a second copy of the records."
        },
        {
          "title": "Handover and extension planning",
          "desc": "We delivered the app with a structure that the agency can extend with future features. Content management and the integration layer are documented so new work does not start from scratch."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework, delivering iOS and Android from one codebase",
        "Government data and API integration, reading from existing systems",
        "Cloud hosting and backend infrastructure for the app",
        "Accessible UI component library, reused across screens for consistency",
        "Content management for agency updates",
        "Secure authentication architecture for protected features"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app extends the agency's service to a mobile-first audience.",
        "Data integration avoids duplicating records across systems.",
        "The interface is designed for a broad, non-technical public user base.",
        "The platform is structured so the agency can add new capability over time.",
        "The agency maintains content internally."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically takes around two to three months. Access to existing data sources and the approvals around them influence the timeline most."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with the agency's existing databases, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "Why integrate with existing systems instead of copying the data?",
          "answer": "Copied data goes stale and creates two versions of the truth. Reading from the source keeps the app consistent with what the agency already maintains."
        },
        {
          "question": "How is the app made usable for non-technical people?",
          "answer": "We use plain labels, clear structure and interface patterns that account for accessibility. Screens avoid cramming in everything at once so a first-time user can see what to do next."
        },
        {
          "question": "Can the agency add features later?",
          "answer": "Yes. The app and its integration layer are structured for extension, so new services can be added to the same platform rather than building another app."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes. The data-integration and accessible-UX approach applies to other public agencies bringing services to mobile. The integration work is scoped around each agency's own systems."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ditp/cover.jpg"
    }
  },
  {
    "slug": "sra-bua",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ร้านอาหาร พร้อมระบบจองโต๊ะ | Sra Bua",
      "metaDescription": "ดูงานเว็บไซต์สองภาษาของ Sra Bua by Kiin Kiin ที่ Haliviq ทำ มีหน้าเมนูชิม ระบบจองโต๊ะออนไลน์ และแบบฟอร์มสอบถามสำหรับงานอีเวนต์และกรุ๊ปใหญ่",
      "h1": "Sra Bua by Kiin Kiin: เว็บไซต์ร้านอาหารสองภาษา พร้อมระบบจองโต๊ะออนไลน์",
      "client": "Sra Bua by Kiin Kiin",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบจองโต๊ะออนไลน์",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "ร้านอาหารระดับนี้ถูกตัดสินจากเว็บไซต์ตั้งแต่ก่อนลูกค้าจะมานั่งที่โต๊ะ Sra Bua by Kiin Kiin จึงต้องการเว็บที่หน้าตาและการใช้งานให้ความรู้สึกเหมือนในร้าน เราออกแบบและพัฒนาเว็บไซต์สองภาษา ไทยและอังกฤษ ใช้ภาพอาหารขนาดใหญ่เป็นตัวนำ จัดเมนูชิมให้อ่านทีละคอร์ส และมีปุ่มจองโต๊ะที่อยู่ห่างแค่คลิกหรือสองคลิก ส่วนงานอีเวนต์ส่วนตัวและกรุ๊ปใหญ่ มีช่องทางสอบถามแยกต่างหาก เพราะฟอร์มจองโต๊ะธรรมดาเก็บข้อมูลไม่พอ หน้านี้สรุปงานที่ส่งมอบ วิธีที่เราสร้าง และเทคโนโลยีที่ใช้ สำหรับคนที่ดูแลร้านและคนที่ดูแลเว็บ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เปลี่ยนเว็บเดิมที่ล้าสมัยหรือยังไม่มี ให้เป็นเว็บที่เหมาะกับระดับราคาและมาตรฐานการบริการของร้าน",
        "ทำให้จองง่าย ด้วยทางจองออนไลน์ที่หน้าแรก ให้การจองไม่ต้องพึ่งโทรศัพท์มากเหมือนเดิม",
        "ให้งานอีเวนต์ส่วนตัวและกรุ๊ปใหญ่มีช่องทางสอบถามของตัวเอง เพราะต้องการข้อมูลมากกว่าการจองโต๊ะปกติ",
        "แสดงเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลทั้งไทยและอังกฤษ ด้วยความใส่ใจเท่ากัน",
        "ให้ทีมครัวและทีมหน้าร้านอัปเดตคอนเทนต์เองได้ โดยไม่ต้องพึ่งนักพัฒนา",
        "วางพื้นฐานให้ค้นเจอในคำค้นหาไฟน์ไดนิ่งในกรุงเทพฯ ที่แข่งขันสูง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดสองภาษา (ไทย/อังกฤษ) ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าแรกและแกลเลอรีเมนูที่ใช้ภาพถ่ายความละเอียดสูงเป็นตัวนำ",
        "เมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาล จัดเป็นหมวดที่กวาดตาดูได้ง่าย",
        "ระบบจองโต๊ะออนไลน์ที่เชื่อมจากหน้าสำคัญ",
        "ช่องทางติดต่อและแบบฟอร์มสอบถามสำหรับงานอีเวนต์ส่วนตัวและการจองแบบกรุ๊ป",
        "หน้าเรื่องราวของเชฟและแบรนด์ ใช้ประกอบงานสื่อและประชาสัมพันธ์ได้",
        "โครงสร้างคอนเทนต์ที่แก้ไขเองได้ พร้อมอบรมสั้นๆ ให้ทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ไปดูหน้างานที่ร้าน",
          "desc": "เราไปที่ Sra Bua by Kiin Kiin เพื่อดูจังหวะการเสิร์ฟ วิธีจัดจาน และการเดินของลูกค้าในร้าน แล้วเอาสิ่งที่เห็นไปใช้ตัดสินใจเรื่องเลย์เอาต์และภาพโดยตรง"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราไล่หน้าที่ลูกค้าต้องใช้ ทั้งเมนู การจอง ที่ตั้ง และเรื่องราวของร้าน แล้วจัดให้กดถึงได้ในไม่กี่คลิก ส่วนการสอบถามงานอีเวนต์ส่วนตัวมีเส้นทางของตัวเองและป้ายชื่อที่ชัด"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "เราพัฒนาหน้าเว็บ ต่อระบบจองโต๊ะและฟอร์มสอบถาม และปรับการส่งภาพ เว็บที่ใช้ภาพใหญ่ต้องเปิดเร็วบนมือถือด้วย"
        },
        {
          "title": "เปิดตัวและส่งมอบคอนเทนต์",
          "desc": "เราส่งมอบโครงสร้างคอนเทนต์ที่แก้ไขเองได้ และอบรมสั้นๆ ให้ทีม หลังจากนั้นทีมเปลี่ยนเมนูและภาพได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บโหลดเร็วและเสิร์ชเอนจินอ่านง่าย",
        "Headless CMS ใช้อัปเดตเมนูและคอนเทนต์ โดยไม่ต้องแตะโค้ด",
        "Cloud hosting และ CDN ส่งภาพความละเอียดสูงได้อย่างมีประสิทธิภาพ",
        "ระบบจองโต๊ะออนไลน์ ต่อจากหน้าสำคัญ",
        "โครงสร้างคอนเทนต์สองภาษา ให้หน้าไทยกับหน้าอังกฤษตรงกันเสมอ",
        "พื้นฐาน SEO บนหน้าเว็บ ครอบคลุมชื่อหน้า หัวข้อ และการจัดการภาพ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนด มาแทนเว็บเดิมที่ไม่เหมาะกับภาพลักษณ์ของแบรนด์",
        "ลูกค้ากดถึงขั้นตอนจองโต๊ะได้ภายในสองคลิกจากทุกหน้า ลดการจองทางโทรศัพท์",
        "งานอีเวนต์ส่วนตัวและกรุ๊ปใหญ่เข้ามาทางฟอร์มสอบถามโดยเฉพาะ ไม่กระจายไปตามข้อความต่างๆ",
        "ทางร้านอัปเดตคอนเทนต์ตามฤดูกาลได้เอง ไม่ต้องรอนักพัฒนา",
        "มีพื้นฐาน SEO ทั้งด้านเทคนิคและบนหน้าเว็บ สำหรับคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Sra Bua by Kiin Kiin ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่ใช้ภาพถ่ายเป็นหลักแบบนี้ ปกติใช้เวลาสองถึงสามเดือน ตั้งแต่เริ่มศึกษาจนถึงเปิดตัว ภาพถ่ายขั้นสุดท้ายและข้อความเมนูเป็นตัวกำหนดว่างานจะเดินเร็วแค่ไหน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มี Headless CMS จัดการคอนเทนต์ วางบน Cloud hosting หลัง CDN ให้ภาพโหลดเร็ว และมีระบบจองโต๊ะโดยเฉพาะ"
        },
        {
          "question": "งานอีเวนต์ส่วนตัวกับกรุ๊ปใหญ่จัดการยังไง",
          "answer": "ใช้ช่องทางติดต่อและฟอร์มสอบถามแยกต่างหาก เพราะงานอีเวนต์ต้องรู้ข้อมูล เช่น จำนวนคนและความต้องการ ซึ่งฟอร์มจองโต๊ะทั่วไปเก็บไม่ได้ ทางร้านจะได้รับเป็นคำขอที่มีรายละเอียดครบ"
        },
        {
          "question": "ทีมแก้เมนูและรูปเองได้ไหม",
          "answer": "ได้ คอนเทนต์จัดการผ่าน CMS และเรามีอบรมตอนส่งมอบ ให้ทีมรู้วิธีอัปเดตเมนู รายการตามฤดูกาล และรูปภาพ"
        },
        {
          "question": "เว็บไซต์มีทั้งภาษาไทยและอังกฤษไหม",
          "answer": "มี ทั้งสองภาษาอยู่ในโครงสร้างคอนเทนต์ ผู้เข้าชมจะได้ข้อมูลเดียวกันไม่ว่าเลือกภาษาไหน"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ การนำทางด้วยเมนูเป็นหลัก ระบบจอง เนื้อหาสองภาษา และช่องทางสอบถามสำหรับอีเวนต์ เหมาะกับร้านไฟน์ไดนิ่งและแบรนด์ F&B หลายสาขา เราปรับรายละเอียดให้เข้ากับแต่ละร้าน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/sra-bua/cover.jpg"
    },
    "en": {
      "metaTitle": "Restaurant Website with Online Reservations | Sra Bua",
      "metaDescription": "Sra Bua by Kiin Kiin's bilingual website by Haliviq: tasting-menu pages, an online reservation system and an enquiry form for private events and groups.",
      "h1": "Sra Bua by Kiin Kiin: Bilingual Restaurant Website with Online Reservations",
      "client": "Sra Bua by Kiin Kiin",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Online Reservation System",
        "Photography & Content Direction"
      ],
      "intro": "A restaurant at this level is judged on its website before anyone sits down, so Sra Bua by Kiin Kiin needed a site that looked and behaved like the dining room. We designed and built a bilingual Thai and English website led by large food photography, with the tasting menu laid out course by course and a reservation button that is never more than a click or two away. A separate enquiry route handles private events and group bookings, which do not fit a standard table form. This write-up covers the deliverables, the build and the technology, written for restaurant operators and for the people who will maintain the site.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Replace an outdated or missing web presence with a site that fits the restaurant's price point and service standard.",
        "Make booking easy by placing an online reservation path on the homepage, so fewer bookings depend on a phone call.",
        "Give private events and group bookings their own enquiry route, because they need more detail than a table reservation.",
        "Present tasting menus, wine lists and seasonal specials in Thai and English with equal care.",
        "Give the kitchen and front-of-house team a way to keep content current without a developer.",
        "Prepare the ground for search visibility in competitive Bangkok fine-dining queries."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A fully responsive, bilingual (Thai/English) marketing website",
        "A photography-led homepage and menu gallery, using high-resolution images",
        "Tasting menus, wine lists and seasonal specials presented in a structured, scannable way",
        "An online table-reservation integration connected from key pages",
        "A contact and inquiry flow for private events and group bookings",
        "A chef and brand-story page that can support press and PR use",
        "An editable content structure and a short handover session for the team"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery and on-site audit",
          "desc": "We spent time at Sra Bua by Kiin Kiin watching the pace of service, how dishes are plated and how guests move through the space. Those observations went straight into layout and image choices."
        },
        {
          "title": "Information architecture",
          "desc": "We listed every page a prospective guest needs, including menu, reservations, location and story, and placed them within the fewest clicks. Private-event enquiries got their own clearly labelled route."
        },
        {
          "title": "Build and integration",
          "desc": "We implemented the front end, wired up the reservation flow and the enquiry form, and tuned how images are delivered. A site built on large photographs has to stay quick on a phone."
        },
        {
          "title": "Launch and content handover",
          "desc": "We delivered an editable content structure and ran a short session with the team. They can now change menus and photos on their own."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for quick page loads and search-friendly pages",
        "Headless CMS for menu and content updates, edited without touching code",
        "Cloud hosting and CDN, which delivers high-resolution images efficiently",
        "Online reservation integration, linked from key pages",
        "Bilingual content architecture, keeping the Thai and English pages aligned",
        "On-page SEO foundation covering titles, headings and image handling"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website was delivered on schedule, replacing a web presence that could not support the brand's positioning.",
        "Guests can reach the reservation flow within two clicks from every page, which reduces reliance on phone bookings.",
        "Private events and group bookings come in through a dedicated enquiry form rather than scattered messages.",
        "The restaurant can keep seasonal content current without ongoing developer involvement.",
        "A technical and on-page SEO foundation is in place for fine-dining search terms."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did the Sra Bua by Kiin Kiin project take?",
          "answer": "A bilingual, photography-led restaurant website like this typically takes two to three months from discovery to launch. Final photography and menu copy decide how quickly it moves."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a headless CMS for content, hosted in the cloud behind a CDN for fast image delivery, plus a dedicated reservation integration."
        },
        {
          "question": "How are private events and group bookings handled?",
          "answer": "They use a separate contact and enquiry flow, since an event needs details such as group size and requirements that a standard table booking form does not capture. The restaurant receives them as structured enquiries."
        },
        {
          "question": "Can the team change menus and photos themselves?",
          "answer": "Yes. Content is managed in a CMS, and a handover session shows the team how to update menus, seasonal items and images."
        },
        {
          "question": "Is the website available in Thai and English?",
          "answer": "Yes, both languages are built into the content structure, so visitors read the same information whichever language they choose."
        },
        {
          "question": "Can this approach be adapted for other restaurant brands?",
          "answer": "Yes. Menu-first navigation, reservations, bilingual content and an enquiry route for events suit other fine-dining and multi-location F&B brands. We tailor the details to each restaurant."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/sra-bua/cover.jpg"
    }
  },
  {
    "slug": "world-surprise-travel",
    "industryTag": "Travel & Tourism",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ แบรนด์ และ CRM บริษัททัวร์ | World Surprise Travel",
      "metaDescription": "ดูงานออกแบบแบรนด์ เว็บไซต์ขายแพ็กเกจทัวร์ และ AI CRM ของ World Surprise Travel ที่ Haliviq ทำให้เป็นระบบเดียวกันสำหรับบริษัททัวร์ไทย",
      "h1": "World Surprise Travel: แบรนด์ เว็บไซต์จองทัวร์ และ AI CRM",
      "client": "World Surprise Travel",
      "badge": "Travel & Tourism",
      "servicesProvided": [
        "ออกแบบแบรนด์",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM"
      ],
      "intro": "บริษัททัวร์ส่วนใหญ่ลงเอยด้วยโลโก้จากเจ้าหนึ่ง เว็บจากอีกเจ้า และสเปรดชีตที่มีแต่คนเดียวที่เข้าใจ World Surprise Travel เลยอยากให้ทำทั้งสามอย่างให้เข้ากัน Haliviq ทำอัตลักษณ์แบรนด์ เว็บไซต์ที่นำเสนอและขายแพ็กเกจทัวร์ และ AI CRM สำหรับติดตามลูกค้าที่สนใจ การจอง และความสัมพันธ์กับลูกค้า เพราะทีมเดียวกันทำทั้งสาม หน้าตา หน้าแพ็กเกจ และข้อมูลลูกค้าจึงใช้ตรรกะเดียวกัน หน้านี้อธิบายว่าเราส่งมอบอะไร ทำงานลำดับไหน และใช้เทคโนโลยีอะไร",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Travel & Tourism"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้บริษัทมีอัตลักษณ์แบรนด์ชุดเดียวที่ใช้ได้ทั้งบนเว็บและสื่อออฟไลน์",
        "สร้างเว็บที่นำเสนอและขายแพ็กเกจทัวร์ได้ชัดเจน ไม่ใช่แค่เล่าเรื่องบริษัท",
        "เปลี่ยนการติดตามลูกค้าด้วยสเปรดชีต มาเป็น CRM ที่เหมาะกับวิธีขายทัวร์จริงๆ",
        "เชื่อมแบรนด์ เว็บ และ CRM เข้าด้วยกัน ลูกค้าที่เข้ามาจากเว็บจะเข้า CRM พร้อมข้อมูลครบ",
        "ให้แพ็กเกจ โปรโมชัน และข้อเสนอตามฤดูกาลอัปเดตได้ผ่านโครงสร้างที่ทีมแก้เองได้",
        "ใช้ AI ใน CRM ช่วยทีมจัดการคำถามและการติดตามลูกค้า"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "งานออกแบบอัตลักษณ์แบรนด์เต็มชุด ทั้งโลโก้ ระบบสี และภาษาภาพ",
        "เว็บไซต์ที่แสดงผลได้ดีทุกขนาดหน้าจอ นำเสนอและขายแพ็กเกจทัวร์",
        "AI CRM สำหรับจัดการลูกค้าที่สนใจ การจอง และความสัมพันธ์กับลูกค้า",
        "งานออกแบบ UX/UI ที่เชื่อมประสบการณ์ของเว็บและ CRM เข้าด้วยกัน",
        "โครงสร้างคอนเทนต์สำหรับแพ็กเกจ โปรโมชัน และข้อเสนอตามฤดูกาล",
        "SEO บนหน้าเว็บ สำหรับหน้าแพ็กเกจและหน้าจุดหมายปลายทาง",
        "ส่งมอบงาน สอนทีมแก้แพ็กเกจและใช้ CRM"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วางกลยุทธ์และออกแบบอัตลักษณ์แบรนด์",
          "desc": "เราพัฒนาอัตลักษณ์ที่สะท้อนว่าบริษัทอยากให้ตลาดท่องเที่ยวมองเป็นแบบไหน โลโก้ สี และภาษาภาพกำหนดก่อน เว็บและ CRM จะได้ใช้ต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบเว็บและ CRM ให้เป็นประสบการณ์ต่อเนื่องกัน คำเรียก สี และรูปแบบหน้าจอใช้ร่วมกัน พนักงานสลับไปมาระหว่างสองระบบไม่ต้องเรียนรู้ใหม่"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราสร้างเว็บรอบการเลือกดูและซื้อแพ็กเกจทัวร์ แต่ละแพ็กเกจมีหน้าชัดเจนของตัวเอง ส่วนโปรโมชันและข้อเสนอตามฤดูกาลอยู่ในโครงสร้างที่ทีมอัปเดตได้"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "เราสร้าง CRM ให้เข้ากับวิธีที่บริษัททัวร์จัดการลูกค้าที่สนใจและการจอง ฟีเจอร์ AI ช่วยรับมือคำถามของลูกค้า ทีมจะมีเวลาคุยกับนักเดินทางมากขึ้น"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบอัตลักษณ์แบรนด์ ครอบคลุมโลโก้ สี และกติกาการใช้งาน",
        "Next.js front-end ให้หน้าแพ็กเกจและจุดหมายโหลดเร็ว",
        "แพลตฟอร์ม CRM ที่มี AI ช่วย สำหรับลูกค้าที่สนใจ การจอง และความสัมพันธ์กับลูกค้า",
        "Cloud hosting และ CDN ส่งภาพท่องเที่ยวได้เร็ว",
        "ระบบจัดการคอนเทนต์การจองและแพ็กเกจ ทีมแก้ไขเองได้",
        "พื้นฐาน SEO บนหน้าเว็บ ครอบคลุมหน้าแพ็กเกจและหน้าจุดหมาย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ใหม่พร้อมอัตลักษณ์แบรนด์ใหม่ และ AI CRM",
        "เว็บไซต์สร้างมาเพื่อขายแพ็กเกจโดยตรง ไม่ใช่แค่เล่าเรื่องบริษัท",
        "CRM เข้ามาแทนการติดตามลูกค้าและการจองด้วยสเปรดชีต",
        "แบรนด์ เว็บ และ CRM ทำงานเป็นระบบเดียวกัน ไม่ใช่สามเครื่องมือแยกกัน",
        "ทีมอัปเดตแพ็กเกจและข้อเสนอตามฤดูกาลได้เอง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานรวมแบรนด์ เว็บไซต์ และ AI CRM แบบนี้ ปกติใช้เวลาสามถึงสี่เดือน การทำทั้งสามอย่างพร้อมกันประหยัดเวลากว่าทำแยกเป็นสามโปรเจกต์"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้เว็บไซต์ Next.js เชื่อมกับแพลตฟอร์ม CRM ที่มี AI ช่วย วางบน Cloud hosting ที่ส่งผ่าน CDN"
        },
        {
          "question": "ทำไมต้องทำแบรนด์ เว็บ และ CRM พร้อมกัน",
          "answer": "พอแยกกันหลายเจ้า โลโก้ หน้าจองทัวร์ และข้อมูลลูกค้ามักไม่เข้ากัน การทำเป็นโปรเจกต์เดียวทำให้ลูกค้าที่เข้ามาทางเว็บไหลเข้า CRM ในรูปแบบที่ทีมคุ้นเคย"
        },
        {
          "question": "ส่วน AI ใน CRM ทำอะไร",
          "answer": "ช่วยทีมจัดการลูกค้าที่สนใจและคำถามในกระบวนการขายทัวร์ ตั้งใจให้ทีมไม่ต้องเสียแรงกับงานซ้ำๆ จะได้มีเวลาอยู่กับลูกค้ามากขึ้น"
        },
        {
          "question": "อัปเดตแพ็กเกจและโปรโมชันเองได้ไหม",
          "answer": "ได้ แพ็กเกจ โปรโมชัน และข้อเสนอตามฤดูกาล อยู่ในโครงสร้างคอนเทนต์ที่ทีมแก้ไขเองได้ ทริปใหม่ขึ้นเว็บได้โดยไม่ต้องมีนักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับบริษัททัวร์หรือตัวแทนท่องเที่ยวอื่นได้ไหม",
          "answer": "ได้ การทำแบรนด์ เว็บ และ CRM ให้ทำงานด้วยกัน เหมาะกับบริษัททัวร์และตัวแทนท่องเที่ยวที่ต้องการทั้งสามอย่าง เราปรับอัตลักษณ์ หน้าแพ็กเกจ และขั้นตอนใน CRM ให้เข้ากับแต่ละบริษัท"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/world-surprise-travel/cover.jpg"
    },
    "en": {
      "metaTitle": "Travel Brand, Website and CRM | World Surprise Travel",
      "metaDescription": "World Surprise Travel's brand identity, package-selling website and AI CRM, designed together by Haliviq so leads, bookings and branding follow one system.",
      "h1": "World Surprise Travel: Brand Identity, Booking Website and AI CRM",
      "client": "World Surprise Travel",
      "badge": "Travel & Tourism",
      "servicesProvided": [
        "Brand Identity Design",
        "UX/UI Design",
        "Web Development",
        "AI CRM Development"
      ],
      "intro": "Most tour operators end up with a logo from one supplier, a website from another and a spreadsheet nobody else understands. World Surprise Travel asked for the three to be designed together. Haliviq built a brand identity, a website that presents and sells travel packages, and an AI CRM for tracking leads, bookings and the relationships around them. Because the same team shaped all three, the look, the package pages and the customer records follow one logic. This page explains what we delivered, the order we worked in and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Travel & Tourism"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give the company one coherent brand identity that works on the web and in offline materials.",
        "Build a website that presents and sells travel packages clearly, rather than only describing the company.",
        "Replace spreadsheet-based customer tracking with a CRM suited to how travel sales actually run.",
        "Connect brand, website and CRM so a lead from the site arrives in the CRM with its context intact.",
        "Keep packages, promotions and seasonal offers current through a structure the team can edit.",
        "Use AI inside the CRM to help the team deal with enquiries and follow-ups."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A full brand identity design: logo, colour system and visual language",
        "A responsive website that presents and sells travel packages",
        "An AI CRM for managing leads, bookings and customer relationships",
        "UX/UI design that ties the website and CRM experience together",
        "A content structure for packages, promotions and seasonal offers",
        "On-page SEO set up on package and destination pages",
        "A handover for the team on editing packages and using the CRM"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand strategy and identity design",
          "desc": "We developed an identity that reflects how the company wants to be seen in the travel market. Logo, colours and visual language were set first so the website and CRM could inherit them."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the website and the CRM as one connected experience. Terms, colours and patterns are shared, so staff moving between the two do not have to relearn anything."
        },
        {
          "title": "Website development",
          "desc": "We built the site around browsing and buying travel packages, with a clear page for each package. Promotions and seasonal offers sit in a structure the team can update."
        },
        {
          "title": "AI CRM development",
          "desc": "We built a CRM tuned to how travel companies manage leads and bookings. AI features help with handling enquiries so the team can focus on conversations with travellers."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Brand identity system, covering logo, colours and usage rules",
        "Next.js front end, for fast package and destination pages",
        "AI-assisted CRM platform for leads, bookings and customer relationships",
        "Cloud hosting and CDN for quick delivery of travel photography",
        "Booking and package content management, edited by the team",
        "On-page SEO foundation across package and destination pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "A new website launched together with a new brand identity and an AI CRM.",
        "The website is built to sell packages directly, not only describe the company.",
        "A CRM now replaces spreadsheet-based customer and booking tracking.",
        "Brand, website and CRM work as one connected system instead of three separate tools.",
        "The team keeps packages and seasonal offers current on its own."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A combined brand, website and AI CRM build like this typically takes three to four months. Running the three together saves time compared with three separate projects."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js website connected to an AI-assisted CRM platform, deployed on cloud hosting with CDN-backed delivery."
        },
        {
          "question": "Why build the brand, website and CRM together?",
          "answer": "When they come from separate suppliers, the logo, the booking pages and the customer records rarely line up. Doing them as one project means a lead that arrives on the website lands in the CRM in the form the team expects."
        },
        {
          "question": "What does the AI part of the CRM do?",
          "answer": "It helps the team handle leads and enquiries in a travel sales cycle. The goal is to save the staff routine effort so they have more time with customers."
        },
        {
          "question": "Can we update packages and promotions ourselves?",
          "answer": "Yes. Packages, promotions and seasonal offers are held in a content structure the team can edit, so new trips can go live without a developer."
        },
        {
          "question": "Can this be adapted for other travel or tour companies?",
          "answer": "Yes. The brand, website and CRM combination suits other tour operators and travel agencies that need all three working together. We adapt the identity, package pages and CRM stages to each company."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/world-surprise-travel/cover.jpg"
    }
  },
  {
    "slug": "awii-house",
    "industryTag": "Construction & Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์และ CRM ผู้รับสร้างบ้าน | Awii House",
      "metaDescription": "ดูงานเว็บไซต์และ CRM อสังหาริมทรัพย์ของ Awii House ที่ Haliviq ทำ มีแกลเลอรีแบบบ้าน ฟอร์มเก็บลูกค้าที่สนใจ และ pipeline ตั้งแต่สอบถามจนถึงทำสัญญา",
      "h1": "Awii House: เว็บไซต์ผลงานแบบบ้าน พร้อม CRM ติดตามลูกค้า",
      "client": "Awii House",
      "badge": "Construction & Real Estate",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนาระบบ CRM",
        "แกลเลอรีแบบบ้านและผลงาน"
      ],
      "intro": "ผู้รับสร้างบ้านไม่ค่อยปิดการขายได้ตั้งแต่ครั้งแรกที่ลูกค้าเข้าเว็บ ลูกค้าจะดูแบบบ้าน กลับมาดูอีก ส่งข้อความสอบถาม ขอเข้าชม แล้วค่อยเซ็นสัญญาหลังจากนั้นหลายสัปดาห์ Awii House ต้องการวิธีตามเส้นทางนี้ และเว็บการตลาดอย่างเดียวทำไม่ได้ เราเลยสร้างเว็บที่มีแกลเลอรีแบบบ้านและผลงาน แล้วต่อฟอร์มสอบถามเข้า CRM ลูกค้าทุกคนจึงถูกบันทึก ติดตามต่อ และเลื่อนไปตาม pipeline ที่ทีมขายทั้งทีมเห็นได้ ด้านล่างสรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Construction & Real Estate"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เก็บและติดตามลูกค้าที่สนใจทุกราย ตั้งแต่เข้าเว็บครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายมี CRM ใช้ทำงาน แทนสเปรดชีตและแชทที่กระจัดกระจาย",
        "นำเสนอแบบบ้านและผลงานด้วยภาพถ่ายและเลย์เอาต์ที่สมกับราคาของสินค้า",
        "ให้ผู้เข้าชมเลือกดูแบบบ้านในแกลเลอรี และสอบถามแบบที่ถูกใจได้ในไม่กี่ขั้นตอน",
        "เพิ่มแบบบ้านและโปรเจกต์ใหม่ลงเว็บได้ง่ายเมื่อผลงานเพิ่มขึ้น",
        "ให้ระบบใช้ต่อได้เมื่อมีโปรเจกต์หรือยูนิตเพิ่ม"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดสำหรับแบบบ้านและผลงาน ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "CRM อสังหาริมทรัพย์สำหรับติดตามลูกค้าและ pipeline โดยเฉพาะ",
        "แกลเลอรีและผลงาน แสดงแบบบ้าน ยูนิต และงานที่เคยทำ",
        "ฟอร์มเก็บข้อมูลลูกค้าที่สนใจ ต่อเข้า CRM โดยตรง",
        "โครงสร้างคอนเทนต์สำหรับอัปเดตโปรเจกต์และยูนิตต่อเนื่อง",
        "SEO บนหน้าเว็บ สำหรับหน้าแบบบ้านและหน้าโปรเจกต์",
        "ส่งมอบงาน สอนทีมอัปเดตแกลเลอรีและใช้ CRM"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกระบวนการขาย",
          "desc": "ก่อนออกแบบอะไร เราไล่ดู pipeline การขายจริงตั้งแต่สอบถามจนถึงทำสัญญา ขั้นตอนใน CRM จึงเดินตามสิ่งที่ทีมทำจริง"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบเว็บและ CRM ให้ใช้ขั้นตอนเก็บและติดตามลูกค้าชุดเดียวกัน สิ่งที่ผู้เข้าชมกรอกบนเว็บคือสิ่งที่ทีมขายเห็นใน CRM ตรงๆ"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราสร้างเว็บการตลาดที่ใช้ภาพถ่ายเป็นตัวนำ สำหรับแบบบ้านและโปรเจกต์ หน้าแกลเลอรีทำให้ดูรายละเอียดแต่ละแบบ และสอบถามได้จากหน้านั้นเลย"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "เราสร้าง CRM ให้เข้ากับ pipeline ขายอสังหาริมทรัพย์ และเชื่อมกับฟอร์มเก็บลูกค้าบนเว็บ คำสอบถามใหม่เข้า pipeline เองโดยไม่ต้องมีใครพิมพ์ซ้ำ"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าแกลเลอรีโหลดเร็ว",
        "พัฒนา CRM อสังหาริมทรัพย์ โดยยึดขั้นตอนใน pipeline ของทีมขายเอง",
        "เชื่อมฟอร์มเก็บข้อมูลลูกค้า ส่งคำสอบถามเข้า CRM โดยตรง",
        "Cloud hosting และ CDN ส่งภาพแบบบ้านได้เร็ว",
        "ระบบจัดการแกลเลอรีและผลงาน ทีมเพิ่มแบบบ้านใหม่ได้เอง",
        "พื้นฐาน SEO บนหน้าเว็บ สำหรับหน้าแบบบ้านและโปรเจกต์"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่จับคู่กับ CRM ติดตามลูกค้าตั้งแต่เข้าเว็บครั้งแรกจนถึงทำสัญญา",
        "ทีมขายเห็นและจัดการ pipeline ได้ในที่เดียว",
        "การนำเสนอแกลเลอรีสมกับระดับราคาและตำแหน่งของโปรเจกต์",
        "คำสอบถามจากเว็บเข้า CRM ได้โดยตรง ไม่ต้องกรอกซ้ำด้วยมือ",
        "ระบบสร้างมาให้ต่อยอดได้เมื่อมียูนิตหรือโปรเจกต์ใหม่"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์พร้อม CRM แบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน การไล่ดู pipeline การขายตั้งแต่ต้นช่วยให้งาน CRM เดินตามกำหนด"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้เว็บการตลาด Next.js เชื่อมตรงกับ CRM อสังหาริมทรัพย์โดยเฉพาะ วางบน Cloud hosting พร้อม CDN"
        },
        {
          "question": "ผู้รับสร้างบ้านต้องใช้ CRM ทำไม",
          "answer": "การซื้อบ้านใช้เวลาหลายสัปดาห์และคุยกันหลายครั้ง CRM เก็บประวัติของลูกค้าแต่ละคนไว้ที่เดียว การติดตามจะไม่หลุดเวลาข้อความไปจมอยู่ในแชท"
        },
        {
          "question": "คำสอบถามจากเว็บเข้า CRM ได้ยังไง",
          "answer": "ฟอร์มบนเว็บส่งข้อมูลเข้า CRM โดยตรง ทีมขายเห็นคำสอบถามใน pipeline ได้เลย ไม่ต้องคัดลอกต่อ"
        },
        {
          "question": "เพิ่มแบบบ้านและโปรเจกต์ใหม่เองได้ไหม",
          "answer": "ได้ เนื้อหาแกลเลอรีและผลงานจัดการผ่านโครงสร้างที่ทีมแก้เองได้ แบบบ้านใหม่ขึ้นเว็บได้โดยไม่ต้องมีนักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับผู้พัฒนาอสังหาฯ หรือผู้รับสร้างบ้านรายอื่นได้ไหม",
          "answer": "ได้ การจับคู่เว็บไซต์กับ CRM แบบนี้เหมาะกับผู้พัฒนาอสังหาฯ และผู้รับสร้างบ้านที่ต้องติดตามลูกค้าตั้งแต่สอบถามจนถึงทำสัญญา เราปรับแกลเลอรีและขั้นตอนใน CRM ให้เข้ากับแต่ละธุรกิจ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/awii-house/cover.jpg"
    },
    "en": {
      "metaTitle": "Home Builder Website and CRM, Thailand | Awii House",
      "metaDescription": "Awii House's website and real estate CRM by Haliviq: a house-design portfolio gallery, lead-capture forms and a pipeline from first enquiry to contract.",
      "h1": "Awii House: House Design Portfolio Website and Lead-Tracking CRM",
      "client": "Awii House",
      "badge": "Construction & Real Estate",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "CRM Development",
        "House Design & Portfolio Gallery"
      ],
      "intro": "A house builder rarely sells on the first visit. A buyer looks at designs, comes back, sends an enquiry, asks for a visit and signs weeks later. Awii House needed a way to follow that path, and a marketing site alone cannot do it. We built a website with a house-design and portfolio gallery, then connected its enquiry forms to a CRM so every lead is recorded, followed up and moved along a pipeline the whole sales team can see. Below you will find the deliverables, how we worked and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Construction & Real Estate"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Capture and track every lead, from the first website visit through to a signed contract.",
        "Give the sales team a CRM to work from instead of scattered spreadsheets and chat threads.",
        "Show house designs and past work with photography and layout that match the price of the product.",
        "Let a visitor browse designs in a gallery and enquire about a specific one in a few steps.",
        "Add new designs and projects to the site easily as the portfolio grows.",
        "Have the system keep working as more projects or units are added."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive marketing website for the house designs and portfolio",
        "A dedicated real estate CRM for lead and pipeline tracking",
        "A gallery and portfolio presentation of designs, units and past work",
        "Lead-capture forms connected straight into the CRM",
        "A content structure for ongoing project and unit updates",
        "On-page SEO on design and project pages",
        "A handover so the team can update the gallery and use the CRM"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business and sales-process research",
          "desc": "Before designing anything, we mapped the real sales pipeline from enquiry to contract. The CRM stages follow the steps the team actually goes through."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the website and CRM to share a single lead-capture and tracking flow. What a visitor submits on the site is exactly what the sales team reads in the CRM."
        },
        {
          "title": "Website development",
          "desc": "We built a photography-forward marketing site for the designs and projects. Gallery pages are made so each design can be viewed in detail and enquired about directly."
        },
        {
          "title": "CRM development",
          "desc": "We built a CRM tuned to the real estate sales pipeline and connected it to the website's lead capture. New enquiries arrive in the pipeline without anyone retyping them."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast gallery pages",
        "Real estate CRM development, built around the team's own pipeline stages",
        "Lead-capture form integration, sending enquiries directly into the CRM",
        "Cloud hosting and CDN for quick delivery of design photography",
        "Gallery and portfolio content management, so the team adds designs themselves",
        "On-page SEO foundation for design and project pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website is paired with a CRM that tracks leads from first visit to contract.",
        "The sales team can see and manage the pipeline in one place.",
        "The gallery presentation matches the project's price point and positioning.",
        "Enquiries from the website reach the CRM directly with no manual re-entry.",
        "The system is built to extend as new units or projects launch."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A website-plus-CRM build like this typically takes around two to three months. Mapping the sales pipeline early helps keep the CRM work on schedule."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js marketing website connected directly to a dedicated real estate CRM, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "Why does a house builder need a CRM?",
          "answer": "Home buying takes weeks and several contacts. A CRM keeps each lead's history in one place so follow-ups are not dropped when messages get buried in chat apps."
        },
        {
          "question": "How do website enquiries reach the CRM?",
          "answer": "The lead-capture forms on the site send their data straight into the CRM. The sales team sees the enquiry in the pipeline without copying it over."
        },
        {
          "question": "Can we add new designs and projects ourselves?",
          "answer": "Yes. The gallery and portfolio content is managed through a content structure the team can edit, so new designs can be published without a developer."
        },
        {
          "question": "Can this be adapted for other developers or home builders?",
          "answer": "Yes. The website-and-CRM pairing suits other real estate developers and home builders who need to track a lead from enquiry to contract. We adjust the gallery and CRM stages to each business."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/awii-house/cover.jpg"
    }
  },
  {
    "slug": "canapaya-residences",
    "industryTag": "Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ แบรนด์ และ CRM โครงการอสังหาฯ | Canapaya",
      "metaDescription": "ดูงานออกแบบแบรนด์ CI เว็บไซต์โครงการ และ CRM อสังหาริมทรัพย์ของ Canapaya Residences ที่ Haliviq ทำ เชื่อมทุกคำสอบถามบนเว็บเข้า pipeline การขาย",
      "h1": "Canapaya Residences: แบรนด์ CI เว็บไซต์โครงการ และ CRM ทีมขาย",
      "client": "Canapaya Residences",
      "badge": "Real Estate",
      "servicesProvided": [
        "ออกแบบ Brand CI",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา CRM อสังหาริมทรัพย์"
      ],
      "intro": "โครงการที่อยู่อาศัยขายกันเป็นสัปดาห์ และทุกขั้นตอน ตั้งแต่สอบถาม เข้าชมโครงการ จนถึงทำสัญญา ต้องมีคนตามให้ครบ Canapaya Residences อยากได้อัตลักษณ์ภาพของโครงการ เว็บไซต์ และเครื่องมือที่ทีมขายใช้ตามลูกค้า Haliviq ทำ CI แบรนด์ เว็บไซต์โครงการ และ CRM อสังหาริมทรัพย์ โดยฟอร์มสอบถามบนเว็บส่งตรงเข้า pipeline ลูกค้าที่เริ่มจากการกรอกฟอร์มจึงถูกตามต่อได้จนถึงวันเซ็น ด้วยข้อมูลที่ทั้งทีมใช้ร่วมกัน หน้านี้สรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Real Estate"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เก็บและติดตามลูกค้าที่สนใจทุกราย ตั้งแต่เข้าเว็บครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายเห็นข้อมูลใน CRM แทนสเปรดชีตและแอปแชทที่กระจัดกระจาย",
        "สร้าง CI แบรนด์ให้โครงการ ให้เว็บและสื่อขายดูเป็นชุดเดียวกัน",
        "นำเสนอโครงการด้วยภาพถ่ายและเลย์เอาต์ที่สมกับระดับราคา",
        "ให้ผู้เข้าชมสอบถามยูนิตจากเว็บได้ในไม่กี่ขั้นตอน",
        "สร้างระบบที่รองรับเมื่อมียูนิตหรือเฟสใหม่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "งานออกแบบ CI แบรนด์สำหรับโครงการที่อยู่อาศัย",
        "เว็บไซต์การตลาดของโครงการที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "CRM อสังหาริมทรัพย์สำหรับติดตามลูกค้าและ pipeline โดยเฉพาะ",
        "แกลเลอรีและผลงาน แสดงยูนิต แบบ และงานที่เคยทำ",
        "ฟอร์มเก็บข้อมูลลูกค้าที่สนใจ ต่อเข้า CRM โดยตรง",
        "โครงสร้างคอนเทนต์สำหรับอัปเดตโครงการและยูนิตต่อเนื่อง",
        "ส่งมอบงาน สอนใช้ CRM และแก้คอนเทนต์โครงการ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกระบวนการขาย",
          "desc": "เราไล่ดู pipeline การขายจริง ตั้งแต่สอบถามจนถึงทำสัญญา ก่อนออกแบบ CRM ขั้นตอนในเครื่องมือจึงตรงกับวิธีที่ทีมขายอยู่แล้ว"
        },
        {
          "title": "ออกแบบ CI แบรนด์และ UX/UI",
          "desc": "เรากำหนดอัตลักษณ์ภาพของโครงการก่อน แล้วออกแบบเว็บและ CRM ให้ใช้ขั้นตอนเก็บและติดตามลูกค้าแบบเดียวกัน อัตลักษณ์เดียวกันเดินผ่านทั้งสองระบบ"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราสร้างเว็บการตลาดที่ใช้ภาพถ่ายเป็นตัวนำสำหรับโครงการ หน้ายูนิตและแกลเลอรีออกแบบให้ผู้ซื้ออยู่กับหน้านั้นนานและนำไปสู่การสอบถาม"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "เราสร้าง CRM ให้เข้ากับ pipeline ขายอสังหาริมทรัพย์ และต่อกับฟอร์มเก็บลูกค้าบนเว็บโดยตรง ทุกคำสอบถามกลายเป็นรายการที่ทีมลงมือต่อได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าโครงการและแกลเลอรีโหลดเร็ว",
        "พัฒนา CRM อสังหาริมทรัพย์ มีขั้นตอนที่สะท้อนกระบวนการขาย",
        "เชื่อมฟอร์มเก็บข้อมูลลูกค้า ส่งทุกคำสอบถามเข้า CRM โดยตรง",
        "Cloud hosting และ CDN ส่งภาพโครงการได้ไว",
        "ระบบจัดการแกลเลอรีและผลงาน ทีมแก้ไขเองได้",
        "พื้นฐาน SEO บนหน้าเว็บ ครอบคลุมหน้าโครงการและหน้ายูนิต"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่จับคู่กับ CRM ติดตามลูกค้าตั้งแต่เข้าเว็บครั้งแรกจนถึงทำสัญญา",
        "ทีมขายเห็นและจัดการ pipeline ได้ในที่เดียว",
        "การนำเสนอแกลเลอรีสมกับระดับราคาและตำแหน่งของโครงการ",
        "CI แบรนด์ เว็บไซต์ และ CRM ใช้ตรรกะภาพและข้อมูลเดียวกัน",
        "ระบบต่อยอดได้เมื่อมียูนิตหรือเฟสใหม่"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานแบรนด์ เว็บไซต์ และ CRM แบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน การตกลงขั้นตอนใน pipeline การขายตั้งแต่ต้นช่วยให้งาน CRM เดินต่อเนื่อง"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้เว็บการตลาด Next.js เชื่อมตรงกับ CRM อสังหาริมทรัพย์โดยเฉพาะ วางบน Cloud hosting พร้อม CDN"
        },
        {
          "question": "CI แบรนด์ครอบคลุมอะไรบ้าง",
          "answer": "CI กำหนดอัตลักษณ์ภาพของโครงการ ให้เว็บกับ CRM ดูเป็นชุดเดียวกัน และเป็นที่อ้างอิงว่าโครงการควรปรากฏยังไงบนสื่อดิจิทัลและสื่อขาย"
        },
        {
          "question": "ทีมขายตามลูกค้าแต่ละคนยังไง",
          "answer": "ทุกคำสอบถามจากเว็บกลายเป็นรายการใน CRM ที่เลื่อนไปตามขั้นของ pipeline ทีมเห็นว่าลูกค้าแต่ละคนอยู่ตรงไหนและขั้นต่อไปคืออะไร"
        },
        {
          "question": "เพิ่มยูนิตและเฟสใหม่เองได้ไหม",
          "answer": "ได้ เนื้อหายูนิตและโครงการจัดการในโครงสร้างที่ทีมแก้ไขเองได้ และ CRM รองรับโครงการใหม่ได้โดยไม่ต้องสร้างใหม่"
        },
        {
          "question": "ใช้แนวทางนี้กับผู้พัฒนาอสังหาฯ รายอื่นได้ไหม",
          "answer": "ได้ การทำแบรนด์ เว็บ และ CRM คู่กันเหมาะกับผู้พัฒนาอสังหาฯ ที่ต้องติดตามลูกค้าตั้งแต่สอบถามจนถึงทำสัญญา เราปรับอัตลักษณ์ แกลเลอรี และขั้นตอนใน CRM ให้เข้ากับแต่ละโครงการ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/canapaya-residences/cover.jpg"
    },
    "en": {
      "metaTitle": "Real Estate Website, Branding and CRM | Canapaya Residences",
      "metaDescription": "Canapaya Residences' brand CI, project website and real estate CRM by Haliviq, linking each web enquiry to a sales pipeline from visit to contract.",
      "h1": "Canapaya Residences: Brand CI, Project Website and Sales CRM",
      "client": "Canapaya Residences",
      "badge": "Real Estate",
      "servicesProvided": [
        "Brand CI Design",
        "UX/UI Design",
        "Web Development",
        "Real Estate CRM Development"
      ],
      "intro": "A residential project is sold over weeks, and each stage, from enquiry to site visit to contract, needs someone to keep track. Canapaya Residences asked for the project's visual identity, its website and the tool the sales team would use to follow buyers. Haliviq produced a brand CI, a project website and a real estate CRM, with the site's enquiry forms feeding straight into the pipeline. That way a lead that begins as a form submission can be followed to a signature using records the team shares. This page covers the deliverables, the way we worked and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Capture and track every lead, from the first website visit through to contract signing.",
        "Give the sales team CRM visibility instead of scattered spreadsheets and messaging apps.",
        "Create a brand CI for the project so web and sales materials look like one family.",
        "Present the project with photography and layout that fit its price point.",
        "Let visitors enquire about units from the website in a few steps.",
        "Build a system that scales as new units or phases are added."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A brand CI design for the residential project",
        "A responsive marketing website for the project",
        "A dedicated real estate CRM for lead and pipeline tracking",
        "A gallery and portfolio presentation for units, designs and past work",
        "Lead-capture forms connected directly into the CRM",
        "A content structure for ongoing project and unit updates",
        "A handover on using the CRM and editing project content"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business and sales-process research",
          "desc": "We mapped the actual sales pipeline, from inquiry to contract, before designing the CRM. The stages in the tool match how the team already sells."
        },
        {
          "title": "Brand CI and UX/UI design",
          "desc": "We set the project's visual identity, then designed the website and CRM to share a consistent lead-capture and tracking flow. The identity runs through both."
        },
        {
          "title": "Website development",
          "desc": "We built a photography-forward marketing site for the project. Unit and gallery pages are designed to hold a buyer's attention and lead to an enquiry."
        },
        {
          "title": "CRM development",
          "desc": "We built a CRM tuned to the real estate sales pipeline and connected it directly to the site's lead capture. Each enquiry becomes a record the team can act on."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast project and gallery pages",
        "Real estate CRM development, with stages that mirror the sales process",
        "Lead-capture form integration, passing each enquiry directly to the CRM",
        "Cloud hosting and CDN for responsive delivery of project imagery",
        "Gallery and portfolio content management, edited by the team",
        "On-page SEO foundation across project and unit pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website is paired with a CRM that tracks leads from first visit to contract.",
        "The sales team can see and manage the pipeline in one place.",
        "The gallery presentation fits the project's price point and positioning.",
        "Brand CI, website and CRM share one visual and data logic.",
        "The system can be extended as new units or phases launch."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A brand, website and CRM build like this typically takes around two to three months. Early agreement on the sales pipeline stages keeps the CRM work moving."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js marketing website connected directly to a dedicated real estate CRM, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "What does the brand CI cover?",
          "answer": "It sets the project's visual identity so the website and CRM share one look. The CI is the reference for how the project appears across digital and sales materials."
        },
        {
          "question": "How does the sales team follow a buyer?",
          "answer": "Each website enquiry becomes a CRM record that moves through the pipeline stages. The team sees where every buyer is and what the next step is."
        },
        {
          "question": "Can we add new units and phases ourselves?",
          "answer": "Yes. Unit and project content is managed in a structure the team can edit, and the CRM can take on new projects without a rebuild."
        },
        {
          "question": "Can this be adapted for other developers?",
          "answer": "Yes. The brand, website and CRM combination suits other real estate developers who need to track a lead from enquiry to contract. We adapt the identity, gallery and CRM stages to each project."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/canapaya-residences/cover.jpg"
    }
  },
  {
    "slug": "rfs",
    "industryTag": "Telecommunications",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ B2B โทรคมนาคม พร้อม AI CRM | RFS",
      "metaDescription": "ดูงานเว็บไซต์ B2B และ AI CRM ของ RFS ที่ Haliviq ทำ จัดโซลูชันตามการใช้งานและประเภทผู้ซื้อ พร้อม pipeline สำหรับดีลยาวของลูกค้าองค์กรและภาครัฐ",
      "h1": "RFS: เว็บไซต์โซลูชัน B2B และ AI CRM สำหรับงานขายองค์กร",
      "client": "RFS",
      "badge": "Telecommunications",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM",
        "จัดระเบียบเนื้อหาโซลูชัน"
      ],
      "intro": "RFS ขายโครงสร้างพื้นฐานโทรคมนาคมและโซลูชัน smart city ให้ลูกค้าองค์กรและหน่วยงานรัฐ ดีลเหล่านี้ใช้เวลานาน มีคณะกรรมการมาเกี่ยวข้อง และต้องใช้เนื้อหาที่ทั้งวิศวกรและคนที่ไม่ใช่วิศวกรอ่านเข้าใจ เราสร้างเว็บไซต์ B2B ที่จัดพอร์ตโซลูชันตามการใช้งานและประเภทผู้ซื้อ และ AI CRM ที่ช่วยทีมขายจัดการและจัดลำดับความสำคัญของดีลแบบปรึกษายาวๆ สองส่วนนี้ใช้ลูกค้าที่สนใจชุดเดียวกัน คำสอบถามบนเว็บจึงกลายเป็นรายการที่ทีมลงมือต่อได้ทันที หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Telecommunications"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอพอร์ตโซลูชันด้านเทคนิคให้ผู้ซื้อองค์กรและภาครัฐเข้าใจได้ชัด",
        "เปลี่ยนการติดตาม pipeline ด้วยมือ มาเป็น CRM ที่เหมาะกับรอบการขาย B2B ที่ยาวและต้องให้คำปรึกษา",
        "ให้ทีมขายมีเครื่องมือที่มี AI ช่วยจัดการและจัดลำดับลูกค้าองค์กรที่สนใจ",
        "เขียนเนื้อหาเทคนิคให้คณะกรรมการจัดซื้อที่ไม่ใช่สายเทคนิคอ่านเข้าใจ เท่าๆ กับวิศวกร",
        "สร้างความน่าเชื่อถือกับผู้ซื้อที่กำลังประเมินผู้ให้บริการโครงสร้างพื้นฐานและ smart city",
        "จัดเนื้อหาให้เหมาะกับการหาข้อมูลของฝ่ายจัดซื้อ ผู้ซื้อจะได้เจอคำตอบก่อนติดต่อทีมขาย"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ B2B ที่แสดงผลได้ดีทุกขนาดหน้าจอ นำเสนอพอร์ตโซลูชัน",
        "AI CRM สำหรับจัดการลูกค้าองค์กรที่สนใจและ pipeline",
        "เนื้อหาโซลูชันที่จัดตามการใช้งานและประเภทผู้ซื้อ",
        "ฟอร์มเก็บข้อมูลและสอบถามที่ต่อเข้า CRM",
        "เนื้อหาเทคนิคที่จัดโครงสร้างให้เหมาะกับการหาข้อมูลของฝ่ายจัดซื้อองค์กร",
        "SEO บนหน้าเว็บ ตามคำที่ผู้ซื้อองค์กรค้นหา",
        "ส่งมอบงาน สอนทีมขายใช้ CRM และฟีเจอร์ AI"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและโซลูชัน",
          "desc": "เรารวบรวมพอร์ตโซลูชันทั้งหมด และศึกษาว่าลูกค้าองค์กรและภาครัฐประเมินผู้ขายยังไง ทำให้รู้ว่าควรจัดกลุ่มโซลูชันแบบไหน และผู้ซื้อถามอะไรก่อน"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบเว็บให้อธิบายโซลูชันเทคนิคชัดสำหรับคณะกรรมการที่ไม่ใช่สายเทคนิค และสำหรับวิศวกรด้วย แต่ละหน้าโซลูชันเริ่มจากปัญหาที่แก้ แล้วค่อยลงรายละเอียด"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราสร้างเว็บ B2B ที่ดูมืออาชีพ จัดโครงสร้างตามพอร์ตโซลูชัน เข้าถึงโซลูชันได้ทั้งทางการใช้งานหรือทางประเภทผู้ซื้อ ตามแบบที่ผู้เข้าชมคิด"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "เราสร้าง CRM ให้เข้ากับรอบการขายองค์กรและการจัดลำดับลูกค้าที่สนใจ AI ช่วยให้ทีมเห็นว่าโอกาสไหนควรให้ความสนใจก่อน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าโซลูชันเร็วและเป็นระเบียบ",
        "แพลตฟอร์ม CRM ที่มี AI ช่วย สำหรับจัดการ pipeline องค์กร",
        "เชื่อมฟอร์มเก็บข้อมูล ส่งคำสอบถามเข้า CRM",
        "Cloud hosting และ CDN ส่งเนื้อหาได้เสถียร",
        "ระบบจัดการเนื้อหาโซลูชัน ทีมอัปเดตพอร์ตได้เอง",
        "SEO บนหน้าเว็บ ตามคำค้นหาของผู้ซื้อองค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่จับคู่กับ AI CRM จัดการ pipeline องค์กร",
        "พอร์ตโซลูชันถูกนำเสนอชัดเจนทั้งต่อผู้ซื้อสายเทคนิคและไม่ใช่สายเทคนิค",
        "การจัดลำดับลูกค้าด้วย AI เข้ามาแทนการติดตาม pipeline ด้วยมือ",
        "การนำเสนอน่าเชื่อถือ เหมาะกับการจัดซื้อโครงสร้างพื้นฐานและ smart city",
        "คำสอบถามจากเว็บไหลเข้า pipeline เดียวที่ทีมขายทั้งทีมใช้ร่วมกัน"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์พร้อม AI CRM แบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน ขนาดของพอร์ตโซลูชันเป็นปัจจัยหลักของเวลา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้เว็บไซต์ Next.js เชื่อมกับแพลตฟอร์ม CRM ที่มี AI ช่วย วางบน Cloud hosting พร้อม CDN"
        },
        {
          "question": "ทำไมจัดโซลูชันตามการใช้งานและประเภทผู้ซื้อ",
          "answer": "ผู้ซื้อองค์กรและภาครัฐมักเริ่มจากปัญหาหรือบทบาทของตัวเอง ไม่ใช่จากชื่อผลิตภัณฑ์ การจัดตามการใช้งานและประเภทผู้ซื้อทำให้เขาถึงโซลูชันที่เกี่ยวข้องได้โดยไม่ต้องรู้ศัพท์ของเรา"
        },
        {
          "question": "AI ใน CRM ทำอะไร",
          "answer": "ช่วยทีมขายจัดลำดับลูกค้าที่สนใจใน pipeline ยาวๆ ให้ความสนใจไปที่โอกาสที่ต้องดูก่อน AI ช่วยประกอบวิจารณญาณของทีม และเข้ามาแทนการติดตามด้วยมือ"
        },
        {
          "question": "เนื้อหาเหมาะกับคนที่ไม่ใช่สายเทคนิคไหม",
          "answer": "เหมาะ เนื้อหาเขียนให้คณะกรรมการจัดซื้อที่ไม่ใช่สายเทคนิคอ่านตามได้ และมีรายละเอียดเทคนิคให้วิศวกรที่อยากรู้ลึก"
        },
        {
          "question": "ใช้แนวทางนี้กับบริษัทโครงสร้างพื้นฐาน B2B อื่นได้ไหม",
          "answer": "ได้ การจับคู่เว็บพอร์ตโซลูชันกับ AI CRM ใช้ได้กับผู้ให้บริการโครงสร้างพื้นฐานหรือ smart city อื่น เราปรับโครงสร้างเนื้อหาและขั้นตอนใน pipeline ให้เข้ากับวิธีขายของแต่ละบริษัท"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/rfs/cover.jpg"
    },
    "en": {
      "metaTitle": "B2B Telecom Website and AI CRM, Thailand | RFS",
      "metaDescription": "RFS's B2B website and AI CRM by Haliviq: solution pages organised by use case and buyer type, plus a pipeline for long enterprise and government deals.",
      "h1": "RFS: B2B Solutions Website and AI CRM for Enterprise Sales",
      "client": "RFS",
      "badge": "Telecommunications",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "AI CRM Development",
        "Solution Content Organization"
      ],
      "intro": "RFS sells telecom infrastructure and smart-city solutions to enterprises and government agencies. These deals are long, involve committees, and depend on content that engineers and non-engineers can both follow. We built a B2B website that organizes the solution portfolio by use case and buyer type, and an AI CRM that helps the sales team manage and prioritize a pipeline of long, consultative deals. The two share the same lead flow, so an enquiry on the website becomes an item the team can act on straight away. This page describes what we delivered and how.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Telecommunications"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present a technical solution portfolio clearly to enterprise and government buyers.",
        "Replace manual pipeline tracking with a CRM suited to long, consultative B2B sales cycles.",
        "Give the sales team AI-assisted tools for managing and prioritizing enterprise leads.",
        "Write technical content so it makes sense to a non-technical buying committee as well as to engineers.",
        "Build credibility with buyers who are evaluating infrastructure and smart-city vendors.",
        "Organize content for procurement research, so buyers find answers before they contact sales."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive B2B website presenting the solution portfolio",
        "An AI CRM for enterprise lead and pipeline management",
        "Solution content organized by use case and buyer type",
        "Lead-capture and enquiry forms connected to the CRM",
        "Technical content structured for enterprise procurement research",
        "On-page SEO set up for the terms enterprise buyers search",
        "A handover for the sales team on using the CRM and its AI features"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business and solution research",
          "desc": "We gathered the full solution portfolio and learned how enterprise and government buyers evaluate vendors. That told us how to group solutions and which questions a buyer asks first."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the site to explain technical solutions clearly to a non-technical buying committee as well as to engineers. Each solution page leads with the problem it solves, then moves into detail."
        },
        {
          "title": "Website development",
          "desc": "We built a professional B2B website structured around the solution portfolio. Solutions can be reached by use case or by the type of buyer, whichever way the visitor thinks."
        },
        {
          "title": "AI CRM development",
          "desc": "We built a CRM tuned to enterprise sales cycles and lead prioritization. AI helps the team see which opportunities deserve attention first."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast and structured solution pages",
        "AI-assisted CRM platform for enterprise pipeline management",
        "Lead-capture form integration, sending enquiries into the CRM",
        "Cloud hosting and CDN for reliable delivery",
        "Solution content management, so the team can update the portfolio",
        "On-page SEO for enterprise search terms"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website is paired with an AI CRM managing the enterprise pipeline.",
        "The solution portfolio is presented clearly to both technical and non-technical buyers.",
        "AI-assisted lead prioritization replaces manual pipeline tracking.",
        "The presentation is credible for infrastructure and smart-city procurement.",
        "Enquiries from the site flow into one pipeline the whole sales team shares."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A combined website and AI CRM build like this typically takes around two to three months. The size of the solution portfolio is the main factor in the timeline."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js website connected to an AI-assisted CRM platform, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "Why organize solutions by use case and buyer type?",
          "answer": "Enterprise and government buyers usually start from a problem or their own role, not a product name. Grouping by use case and buyer type lets them reach the relevant solutions without knowing our terminology."
        },
        {
          "question": "What does the AI in the CRM do?",
          "answer": "It helps the sales team prioritize leads in a long pipeline, so attention goes to the opportunities that need it first. It supports the team's judgement and replaces manual tracking."
        },
        {
          "question": "Does the content work for non-technical readers?",
          "answer": "Yes. Content is written so a non-technical buying committee can follow it, with technical detail available for engineers who want it."
        },
        {
          "question": "Can this be adapted for other B2B infrastructure companies?",
          "answer": "Yes. The solution-portfolio website and AI CRM pairing applies to other enterprise infrastructure or smart-city solution providers. We adapt the content structure and the pipeline stages to each company's way of selling."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/rfs/cover.jpg"
    }
  },
  {
    "slug": "excise-department",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ทำแอปตรวจสอบภาษีสำหรับหน่วยงานรัฐ | กรมสรรพสามิต",
      "metaDescription": "ดูงานแอปมือถือของกรมสรรพสามิตที่ Haliviq ทำ มีระบบตรวจสอบภาษี เชื่อมข้อมูลข้ามหน่วยงาน และหน้าจอที่ประชาชนทั่วไปใช้ได้ ทั้ง iOS และ Android",
      "h1": "กรมสรรพสามิต: แอปตรวจสอบภาษี พร้อมเชื่อมข้อมูลข้ามหน่วยงาน",
      "client": "กรมสรรพสามิต",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "เชื่อมข้อมูลระหว่างหน่วยงาน",
        "ระบบตรวจสอบและยืนยันภาษี"
      ],
      "intro": "กรมสรรพสามิตอยากนำบริการตรวจสอบภาษีขึ้นมือถือ งานนี้ไม่ได้หนักที่หน้าจอ แต่หนักที่การเชื่อมกับข้อมูลที่อยู่ในระบบของหน่วยงานอื่น และทำให้ผลลัพธ์อ่านง่าย Haliviq ออกแบบและพัฒนาแอป iOS และ Android รวมถึงงานเชื่อมข้อมูลข้ามหน่วยงานที่ทำให้แอปตอบคำถามได้ตั้งแต่วันเปิด เราตั้งใจให้หน้าจอชัดโดยไม่ต้องมีพื้นความรู้เทคนิค มีระบบเนื้อหาที่กรมดูแลเองได้ และมีโครงสร้างที่เพิ่มบริการในภายหลังได้ ด้านล่างสรุปงานที่ส่งมอบ ขั้นตอนทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำบริการตรวจสอบภาษีของกรมไปถึงประชาชนที่ใช้มือถือเป็นหลัก",
        "เชื่อมข้อมูลที่หน่วยงานอื่นถืออยู่ ด้วยการเชื่อมระบบ ไม่ใช่การคัดลอกข้อมูล",
        "ทำให้ผลการตรวจสอบอ่านเข้าใจง่าย สำหรับคนที่ไม่คุ้นกับกระบวนการสรรพสามิต",
        "ออกแบบให้ประชาชนทั่วไปใช้ได้ รวมถึงคนที่ไม่ค่อยใช้แอป",
        "ให้กรมอัปเดตเนื้อหาเองได้โดยไม่ต้องพึ่งนักพัฒนา",
        "สร้างแพลตฟอร์มที่กรมเพิ่มบริการใหม่ได้ในภายหลัง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นแบบแอปเนทีฟ ทั้ง iOS และ Android",
        "ระบบตรวจสอบภาษีในแอป",
        "เชื่อมข้อมูลข้ามหน่วยงานกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "งานออกแบบ UX/UI ที่เหมาะกับประชาชนทั่วไป ไม่ต้องมีพื้นความรู้เทคนิค",
        "โครงสร้างเนื้อหาที่กรมอัปเดตเองได้",
        "รูปแบบหน้าจอที่คำนึงถึงการเข้าถึง",
        "เอกสารส่งมอบเรื่องการเชื่อมระบบและเครื่องมือจัดการเนื้อหา"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "เราไล่ดูว่าหน่วยงานไหนถือข้อมูลที่การตรวจสอบต้องใช้ และแต่ละที่เปิดให้ใช้ข้อมูลทางไหน การเข้าใจการเชื่อมต่อก่อนทำให้ตอนพัฒนาเจอเรื่องไม่คาดคิดน้อยลง"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราเลือกความชัดเจนมากกว่าข้อมูลแน่น ขั้นตอนตรวจสอบถามเฉพาะสิ่งที่จำเป็น และแสดงผลด้วยภาษาที่คนทั่วไปอ่านตามได้"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "เราพัฒนาแอปและต่อการตรวจสอบเข้ากับแหล่งข้อมูลเดิมข้ามหน่วยงาน มีการยืนยันตัวตนที่ปลอดภัยในส่วนที่ต้องใช้"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "เราส่งมอบแอปในโครงสร้างที่กรมเพิ่มบริการภายหลังได้ พร้อมเครื่องมือจัดการเนื้อหาและบันทึกการเชื่อมระบบ กรมจะไม่ต้องพึ่งเราทุกครั้งที่มีการแก้ประจำ"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Cross-platform mobile app framework ใช้โค้ดชุดเดียวทำได้ทั้ง iOS และ Android",
        "เชื่อมข้อมูลและ API ข้ามหน่วยงาน อ่านจากระบบที่เป็นเจ้าของข้อมูล",
        "Cloud hosting และ backend infrastructure สำหรับบริการตรวจสอบ",
        "ชุด UI component ที่รองรับการเข้าถึง ให้หน้าจอสม่ำเสมอและอ่านง่าย",
        "ระบบจัดการเนื้อหาสำหรับอัปเดตโดยกรม",
        "โครงสร้างการยืนยันตัวตนที่ปลอดภัยสำหรับฟังก์ชันที่ต้องป้องกัน"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่นำบริการตรวจสอบของกรมไปถึงผู้ใช้ที่ใช้มือถือเป็นหลัก",
        "การเชื่อมข้อมูลข้ามหน่วยงานช่วยให้ไม่ต้องเก็บข้อมูลซ้ำหลายระบบ",
        "ผลการตรวจสอบแสดงบนหน้าจอที่ออกแบบให้ผู้ใช้ทั่วไปเข้าใจ",
        "แพลตฟอร์มจัดโครงสร้างไว้ให้กรมเพิ่มความสามารถได้ต่อไป",
        "กรมอัปเดตเนื้อหาได้เอง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือหน่วยงานรัฐที่ต้องเชื่อมระบบแบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน เวลาที่ต้องใช้ในการเข้าถึงและทดสอบข้อมูลของแต่ละหน่วยงานเป็นตัวกระทบมากสุด"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ cross-platform mobile app framework เชื่อมกับฐานข้อมูลเดิมของหน่วยงาน วางบน cloud infrastructure พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "เชื่อมข้อมูลข้ามหน่วยงานหมายความว่ายังไง",
          "answer": "แอปอ่านข้อมูลที่เป็นของหน่วยงานอื่นโดยตรง แทนที่จะเก็บสำเนาของตัวเอง ผลที่ได้ตรงกับต้นทางเสมอ และกรมไม่ต้องดูแลข้อมูลซ้ำซ้อน"
        },
        {
          "question": "ใครใช้ฟีเจอร์ตรวจสอบได้บ้าง",
          "answer": "หน้าจอออกแบบสำหรับประชาชนทั่วไป ใช้คำง่ายและขั้นตอนสั้น คนที่ไม่มีพื้นความรู้เรื่องกระบวนการสรรพสามิตก็ใช้ได้"
        },
        {
          "question": "กรมเพิ่มฟีเจอร์ภายหลังได้ไหม",
          "answer": "ได้ แอปและชั้นเชื่อมข้อมูลวางโครงสร้างไว้ให้เพิ่มบริการใหม่บนแพลตฟอร์มเดียวกันได้"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานรัฐอื่นได้ไหม",
          "answer": "ได้ แนวทางเชื่อมข้อมูลและออกแบบให้เข้าถึงง่ายแบบนี้ ใช้ได้กับหน่วยงานรัฐอื่นที่อยากนำบริการขึ้นมือถือ เราประเมินงานเชื่อมระบบตามระบบของแต่ละหน่วยงาน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/excise-department/cover.jpg"
    },
    "en": {
      "metaTitle": "Tax Verification Mobile App for Government | Excise Department",
      "metaDescription": "Excise Department's mobile app by Haliviq: tax verification, cross-agency data integration and an interface for public users on iOS and Android.",
      "h1": "Excise Department: Tax Verification Mobile App with Cross-Agency Data",
      "client": "Excise Department",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Cross-Agency Data Integration",
        "Tax Verification System"
      ],
      "intro": "The Excise Department wanted to bring a tax verification service to people's phones. The work was less about screens than about connecting to data that already lives in other government systems and making the result easy to read. Haliviq designed and developed the iOS and Android app, including the cross-agency integration that lets it answer a question on the day it launches. We aimed for a clear interface that does not assume technical knowledge, a content setup the department can maintain, and a base it can add to later. Read on for the deliverables, process and technology.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring the department's tax verification service to a mobile-first public audience.",
        "Connect to data held by other agencies through integration rather than copying records.",
        "Make verification results readable for people who are not familiar with excise processes.",
        "Design for a broad public, including users who do not use apps often.",
        "Let the department keep content up to date without developer involvement.",
        "Build a platform the department can extend with further services over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A native-feeling mobile app for iOS and Android",
        "A tax verification system inside the app",
        "Cross-agency data integration with existing government databases and systems",
        "UX/UI design suited to a broad, non-technical public audience",
        "A content structure the department can keep current internally",
        "Accessibility-conscious interface patterns",
        "Handover material covering the integration and the content tools"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder and data discovery",
          "desc": "We identified which agencies hold the data the verification depends on and how each exposes it. Understanding those connections first meant fewer surprises during development."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed for clarity over density. The verification flow asks only for what it needs and shows a result in language a member of the public can follow."
        },
        {
          "title": "Mobile app development",
          "desc": "We built the app and wired the verification to the existing data sources across agencies. Secure authentication protects the parts that need it."
        },
        {
          "title": "Handover and extension planning",
          "desc": "We delivered the app in a structure that lets the department add services later. Content tools and integration notes were handed over so the department is not dependent on us for routine changes."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework, covering iOS and Android from one codebase",
        "Cross-agency data and API integration, reading from the systems that own the data",
        "Cloud hosting and backend infrastructure for the verification service",
        "Accessible UI component library, for consistent and readable screens",
        "Content management for department updates",
        "Secure authentication architecture for protected functions"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app brings the department's verification service to a mobile-first audience.",
        "Cross-agency integration avoids duplicating records across systems.",
        "Verification results are presented in an interface designed for non-technical users.",
        "The platform is structured so the department can add capability over time.",
        "The department updates content on its own."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically takes around two to three months. The time needed to access and test each agency's data affects the schedule most."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with existing agency databases, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "What does cross-agency integration mean here?",
          "answer": "The app reads data that belongs to other government bodies instead of keeping its own copy. The result stays consistent with the source and the department does not maintain duplicate records."
        },
        {
          "question": "Who can use the verification feature?",
          "answer": "The interface is designed for a broad public audience, with plain wording and a short flow, so people without a background in excise processes can use it."
        },
        {
          "question": "Can the department add new features later?",
          "answer": "Yes. The app and its integration layer are structured so that new services can be added to the same platform."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes. The data-integration and accessible-UX approach applies to other public agencies taking services to mobile. We scope the integration work around each agency's systems."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/excise-department/cover.jpg"
    }
  },
  {
    "slug": "itagc",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์สถาบัน พร้อมระบบประเมินและทบทวน | ITAGC",
      "metaDescription": "ดูงานเว็บไซต์หน่วยงานรัฐของ ITAGC ที่ Haliviq ทำ จัดบริการเป็นหมวดชัดเจน มีระบบประเมินและทบทวน และกำกับเนื้อหาให้น่าเชื่อถือ",
      "h1": "ITAGC: เว็บไซต์หน่วยงานรัฐ พร้อมระบบประเมินและทบทวน",
      "client": "ITAGC",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบตรวจสอบและประเมินผล",
        "กำกับเนื้อหาและความน่าเชื่อถือ"
      ],
      "intro": "ITAGC ให้บริการหลากหลายทั้งธุรกิจและนักวิจัย แต่เว็บไซต์เดิมทำให้ดูยากว่ามีบริการอะไรบ้าง เราเลยสร้างใหม่ให้บริการอยู่ในหมวดชัดเจน มีระบบค้นหาที่ใช้ได้จริง และมีระบบประเมินและทบทวนที่ให้ผู้ยื่นขอมีเส้นทางที่แน่นอน ควบคู่กันเราช่วยกำกับเนื้อหาและความน่าเชื่อถือ เพราะเว็บของหน่วยงานถูกตัดสินจากความน่าเชื่อถือพอๆ กับความง่ายในการใช้ หน้านี้สรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ให้คนที่เข้ามาครั้งแรกหาบริการที่ต้องการเจอภายในไม่ถึงหนึ่งนาที",
        "จัดบริการที่หลากหลายให้อยู่ในหมวดที่ชัดและเดินตามง่าย",
        "มีระบบประเมินและทบทวน ให้ผู้ยื่นขอและผู้ตรวจทำงานผ่านขั้นตอนเดียวกัน",
        "อธิบายขั้นตอนและระยะเวลาให้ชัด เพื่อลดสายสอบถาม",
        "นำเสนอเนื้อหาในแบบที่ช่วยสร้างความน่าเชื่อถือให้สถาบัน",
        "สร้างเว็บที่ทันสมัยและเหมาะกับหน่วยงานรัฐ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์หน่วยงานรัฐที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "เนื้อหาบริการและงานวิจัยที่จัดเป็นหมวดชัดเจน",
        "ระบบค้นหาบริการที่ใช้งานได้จริง",
        "ระบบประเมินและทบทวน",
        "หน้าข้อมูลขั้นตอนและระยะเวลาดำเนินการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับทรัพยากรสาธารณะ",
        "กำกับเนื้อหาและความน่าเชื่อถือในหน้าสำคัญ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาข้อมูลของสถาบัน",
          "desc": "เราเก็บโครงสร้างบริการทั้งหมด และกลุ่มผู้ใช้ของแต่ละบริการ เมื่อรู้ว่าใครขออะไร ก็ตัดสินใจเรื่องชื่อและการจัดกลุ่มบริการได้"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราจัดบริการและงานวิจัยเป็นหมวดที่คนไม่ใช่ผู้เชี่ยวชาญก็เดินตามได้ เส้นทางประเมินและทบทวนออกแบบเป็นส่วนหนึ่งของโครงสร้างเดียวกัน ไม่ได้เพิ่มมาทีหลัง"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและเข้าถึงง่าย สำหรับผู้ใช้ทั้งภาคธุรกิจและงานวิจัย ระบบประเมินและทบทวนสร้างคู่กับระบบค้นหา ผู้ยื่นขอจึงไปจากการหาบริการสู่การเริ่มขั้นตอนได้"
        },
        {
          "title": "กำกับเนื้อหาและความน่าเชื่อถือ",
          "desc": "เราจัดเนื้อหาบริการและงานวิจัยให้ครบและค้นหาได้ พร้อมกำกับน้ำเสียงและการนำเสนอ ให้เว็บอ่านแล้วน่าเชื่อถือ ไม่ใช่โบรชัวร์"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บเร็วและเสิร์ชเอนจินอ่านง่าย",
        "ระบบค้นหาและกรองบริการ",
        "ระบบประเมินและทบทวนสำหรับคำขอ",
        "Cloud hosting และ CDN ส่งเนื้อหาได้เสถียร",
        "ระบบจัดการเนื้อหาสำหรับอัปเดตโดยสถาบัน",
        "โค้ดหน้าเว็บตามมาตรฐานที่รองรับการเข้าถึง และพื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ที่จัดบริการให้หาเจอเองได้โดยไม่ต้องมีคนช่วย",
        "ระบบค้นหาที่ใช้ได้จริงช่วยลดการสอบถามทางโทรศัพท์",
        "ข้อมูลขั้นตอนและระยะเวลาดำเนินการถูกเผยแพร่ชัดเจนเป็นครั้งแรก",
        "ระบบประเมินและทบทวนทำให้ผู้ยื่นขอและผู้ตรวจมีเส้นทางที่แน่นอน",
        "เว็บทันสมัย เหมาะกับความน่าเชื่อถือที่หน่วยงานรัฐต้องมี"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์หน่วยงานรัฐที่มีระบบค้นหาบริการแบบนี้ ปกติใช้เวลาราวสามเดือน ขั้นตอนที่ใช้เวลามากสุดคือการรวบรวมและจัดระเบียบข้อมูลบริการ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มีระบบค้นหาและกรอง ระบบประเมินและทบทวน ระบบจัดการเนื้อหา และวางบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ระบบประเมินและทบทวนทำอะไร",
          "answer": "ให้ผู้ยื่นขอและผู้ตรวจมีเส้นทางที่ชัดเจนในแต่ละการประเมินหรือการทบทวน แทนการจัดการตามแต่ละครั้ง กลายเป็นขั้นตอนที่มองเห็นและเหมือนกันทุกราย"
        },
        {
          "question": "การกำกับเนื้อหาและความน่าเชื่อถือคืออะไร",
          "answer": "คือการช่วยดูคำที่ใช้ โครงสร้าง และการนำเสนอของหน้าสำคัญ ให้อ่านแล้วถูกต้องและน่าไว้ใจ สำหรับหน่วยงานรัฐ ความน่าเชื่อถือของเว็บเป็นส่วนหนึ่งของบริการ"
        },
        {
          "question": "เจ้าหน้าที่อัปเดตเว็บเองได้ไหม",
          "answer": "ได้ บริการ เนื้อหางานวิจัย และเอกสาร อยู่ในระบบจัดการเนื้อหาที่เจ้าหน้าที่แก้เองได้โดยไม่ต้องใช้นักพัฒนา"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานรัฐอื่นได้ไหม",
          "answer": "ได้ โครงสร้างการจัดหมวดบริการ ค้นหา และทบทวนแบบนี้ ใช้ได้กับหน่วยงานรัฐหรือสถาบันที่มีบริการหลากหลาย เราปรับหมวดและขั้นตอนทบทวนให้เข้ากับแต่ละองค์กร"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/itagc/cover.jpg"
    },
    "en": {
      "metaTitle": "Institute Website with Assessment System | ITAGC",
      "metaDescription": "ITAGC's public-sector website by Haliviq: services sorted into clear categories, an assessment and review system, and credibility-led content.",
      "h1": "ITAGC: Public-Sector Website with an Assessment and Review System",
      "client": "ITAGC",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Assessment & Review System",
        "Content & Credibility Direction"
      ],
      "intro": "ITAGC provides a broad set of services to businesses and researchers, but the previous website made it hard to see what was on offer. We rebuilt it so that services sit in clear categories, with a search that works and an assessment and review system that gives applicants a defined route. Content and credibility direction ran in parallel, since an institution's website is judged on how trustworthy it looks as much as on how easy it is to use. This page sets out the deliverables, how we worked and the technology behind them.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Make it possible for a first-time visitor to find the specific service they need in under a minute.",
        "Organize a wide range of services into clear, navigable categories.",
        "Provide an assessment and review system so applicants and reviewers work through one defined process.",
        "Explain process and turnaround so fewer enquiry calls are needed.",
        "Present content in a way that supports the institute's credibility.",
        "Build a modern web presence suited to a public institution."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive public-sector website",
        "Service and research content organized into clear categories",
        "A working search system for institutional services",
        "An assessment and review system",
        "Process and turnaround-time information pages",
        "A downloadable-document structure for public resources",
        "Content and credibility direction across the key pages"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Institutional research",
          "desc": "We collected the full service structure and the user groups each service is for. Understanding who asks for what let us decide how to name and group each service."
        },
        {
          "title": "Information architecture",
          "desc": "We organized services and research into categories a non-expert visitor can navigate. The assessment and review route was designed as part of the same structure rather than added on."
        },
        {
          "title": "Development",
          "desc": "We built a fast, accessible website for a wide range of business and research users. The assessment and review system was built alongside the search so applicants can move from finding a service to starting a process."
        },
        {
          "title": "Content and credibility direction",
          "desc": "We structured service and research content so it is complete and searchable. We also directed the tone and presentation so the site reads as authoritative rather than as a brochure."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for quick and search-friendly pages",
        "Service search and filtering system",
        "Assessment and review system for applications",
        "Cloud hosting and CDN for dependable delivery",
        "Content management for institutional updates",
        "Accessible, standards-based markup and an on-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website organizes services so they can be found without help.",
        "A working search system reduces reliance on phone-based enquiries.",
        "Process and turnaround information is now published clearly for the first time.",
        "An assessment and review system gives applicants and reviewers a defined route.",
        "A modern web presence suits the credibility a public institution needs."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector website with a service-search system like this typically takes around three months. Collecting and organizing the service information is the longest step."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a dedicated search and filtering system, an assessment and review system, content management for institutional updates, and CDN-backed cloud hosting."
        },
        {
          "question": "What does the assessment and review system do?",
          "answer": "It gives applicants and reviewers a defined route through each assessment or review. This replaces ad hoc handling with a process that is visible and consistent."
        },
        {
          "question": "What is content and credibility direction?",
          "answer": "It means guiding the wording, structure and presentation of key pages so they read as accurate and trustworthy. For a public institution, the credibility of the site is part of the service."
        },
        {
          "question": "Can staff update the site?",
          "answer": "Yes. Services, research content and documents sit in a content management structure staff can edit without a developer."
        },
        {
          "question": "Can this be adapted for other public institutions?",
          "answer": "Yes. The service-categorization, search and review structure applies to other government bodies and institutes with a wide catalog of services. We adapt the categories and the review steps to each organization."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/itagc/cover.jpg"
    }
  },
  {
    "slug": "department-of-water-resources",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "พัฒนาโมดูล AI ในแอปภาครัฐ | กรมทรัพยากรน้ำ",
      "metaDescription": "ดูงานโมดูล AI และแอปมือถือของกรมทรัพยากรน้ำที่ Haliviq ทำ วิเคราะห์ข้อมูลทรัพยากรน้ำ และต่อยอดระบบเดิมให้เจ้าหน้าที่ภาคสนามใช้",
      "h1": "กรมทรัพยากรน้ำ: โมดูล AI ในแอปมือถือสำหรับเจ้าหน้าที่ภาคสนาม",
      "client": "กรมทรัพยากรน้ำ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI",
        "วิเคราะห์ข้อมูลทรัพยากรน้ำ",
        "ต่อยอดระบบเดิม"
      ],
      "intro": "กรมทรัพยากรน้ำใช้แอปมือถืออยู่แล้ว และอยากเพิ่ม AI เข้าไป งานนี้จึงไม่ใช่การทำแอปใหม่ แต่เป็นเรื่องการต่อโมเดลเข้ากับข้อมูลจริงของหน่วยงาน โดยไม่ทำให้ระบบที่คนใช้อยู่ทุกวันมีปัญหา Haliviq พัฒนาโมดูล AI ต่อยอดระบบเดิมที่อยู่หลังแอป และเชื่อมเข้ากับขั้นตอนที่เจ้าหน้าที่ภาคสนามใช้ เราทำงานกับข้อมูลทรัพยากรน้ำของกรมเอง และทดสอบกับสถานการณ์ใช้งานจริง ด้านล่างสรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เพิ่มความสามารถ AI เฉพาะด้านเข้าไปในขั้นตอนงานภาครัฐที่ใช้งานจริง",
        "วิเคราะห์ข้อมูลทรัพยากรน้ำด้วยโมดูล AI โดยใช้ข้อมูลสดของหน่วยงาน ไม่ใช่ชุดข้อมูลตายตัว",
        "ต่อยอดระบบเดิมของกรม แทนการเปลี่ยนใหม่ทั้งหมด",
        "ทำระบบให้เสถียรพอที่เจ้าหน้าที่ภาคสนามจะพึ่งพาได้ทุกวัน",
        "ออกแบบหน้าจอแอปตามวิธีทำงานภาคสนามจริง",
        "สร้างโมดูลที่ต่อยอดหรือเทรนใหม่ได้เมื่อข้อกำหนดเปลี่ยน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ที่สร้างสำหรับงานวิเคราะห์หรือตรวจสอบเฉพาะอย่าง",
        "การเชื่อมโมดูล AI เข้ากับแอปมือถือ ให้อยู่ในขั้นตอนงานภาคสนาม",
        "ความสามารถวิเคราะห์ข้อมูลทรัพยากรน้ำในแอป",
        "เชื่อมกับระบบข้อมูลเดิมและระบบเก่าของกรม",
        "ทดสอบความเสถียรและความแม่นยำกับข้อมูลใช้งานจริง",
        "ออกแบบ UX สำหรับงานภาคสนาม บนหน้าจอที่เจ้าหน้าที่ใช้",
        "เอกสารและส่งมอบงาน ให้กรมดูแลต่อได้เอง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษางานและข้อมูล",
          "desc": "เราศึกษาขั้นตอนงานตามที่เป็นอยู่ และข้อมูลที่โมดูล AI ต้องอ่าน การเข้าใจว่าเจ้าหน้าที่ทำอะไรในพื้นที่ ทำให้ตัดสินใจได้ว่า AI ช่วยตรงไหนโดยไม่เกะกะ"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "เราสร้างและปรับโมเดลสำหรับงานวิเคราะห์เฉพาะที่ต้องการ และจำกัดให้ทำงานชัดเจนเรื่องเดียว เพื่อให้ตรวจสอบและอธิบายพฤติกรรมของโมเดลได้"
        },
        {
          "title": "เชื่อมเข้าแอปมือถือ",
          "desc": "เราต่อโมดูลเข้ากับแอปที่เจ้าหน้าที่ภาคสนามใช้อยู่ทุกวัน และเชื่อมกับระบบข้อมูลของกรม เจ้าหน้าที่ยังทำงานอยู่ในที่เดิม"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "เราทดสอบกับสถานการณ์ใช้งานจริง และส่งมอบเอกสาร กรมดูแล เทรนใหม่ และต่อยอดโมดูลได้เองหลังจากนั้น"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "พัฒนาโมดูล AI/ML สร้างสำหรับงานวิเคราะห์ที่กำหนดไว้ชัด",
        "ชั้นเชื่อมแอปมือถือ ต่อโมดูลเข้ากับแอปของเจ้าหน้าที่",
        "เชื่อมระบบเก่าและฐานข้อมูล ต่อยอดระบบเดิมที่มีอยู่",
        "Cloud infrastructure สำหรับรันโมเดล (inference)",
        "โครงสร้างการจัดการข้อมูลที่ปลอดภัยสำหรับข้อมูลของหน่วยงาน",
        "ออกแบบ UX สำหรับงานภาคสนาม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่เพิ่มความสามารถ AI ให้ระบบที่เจ้าหน้าที่ภาคสนามใช้งานจริง",
        "โมดูล AI ทำงานกับข้อมูลสดของหน่วยงาน ไม่ได้ทดสอบแยกโดดเดี่ยว",
        "ขั้นตอนงานสร้างมาให้เสถียรพอสำหรับใช้ภาคสนามทุกวัน",
        "ระบบเก่าถูกต่อยอดอยู่ที่เดิม ไม่ได้ถูกเปลี่ยนทิ้ง",
        "กรมเทรนใหม่หรือขยายโมดูลได้เองในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์แอปมือถือภาครัฐที่เพิ่ม AI แบบนี้ ปกติใช้เวลาสองถึงสี่เดือน ขึ้นกับว่างานเชื่อมระบบซับซ้อนแค่ไหน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้โมดูล AI/ML ที่สร้างเฉพาะงาน ต่อเข้ากับแอปมือถือ และเชื่อมกับระบบเดิมของกรมผ่านโครงสร้างจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "ทำไมต่อยอดระบบเดิมแทนการสร้างใหม่",
          "answer": "กรมต้องพึ่งระบบปัจจุบันทุกวัน การต่อยอดทำให้เก็บส่วนที่ใช้ได้ดีไว้ เลี่ยงความเสี่ยงของการเปลี่ยนระบบทั้งหมด และได้ความสามารถใหม่เร็วขึ้น"
        },
        {
          "question": "ตรวจสอบความเสถียรยังไง",
          "answer": "เราทดสอบโมดูลกับสถานการณ์และข้อมูลใช้งานจริง ไม่ใช่แค่ข้อมูลตัวอย่าง เพราะเจ้าหน้าที่ภาคสนามใช้ผลลัพธ์ในงานจริง ความแม่นยำและความเสถียรจึงสำคัญ"
        },
        {
          "question": "เทรนโมดูล AI ใหม่ภายหลังได้ไหม",
          "answer": "ได้ โมดูลสร้างมาให้ต่อยอดหรือเทรนใหม่ได้เมื่อข้อกำหนดเปลี่ยน และเราส่งมอบเอกสารให้กรมดูแลเอง"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานที่มีระบบเก่าได้ไหม",
          "answer": "ได้ การเพิ่มโมดูล AI บนระบบเดิม เหมาะกับหน่วยงานที่อยากปรับปรุงจากของเดิม แทนการสร้างใหม่ทั้งหมด ขอบเขตงานขึ้นกับข้อมูลและขั้นตอนงานของแต่ละหน่วยงาน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/department-of-water-resources/cover.jpg"
    },
    "en": {
      "metaTitle": "AI Module for Government Mobile App | Dept. of Water Resources",
      "metaDescription": "AI module and mobile app work for Thailand's Department of Water Resources by Haliviq: water data analysis and legacy system extension for field officers.",
      "h1": "Department of Water Resources: AI Module for a Field-Officer Mobile App",
      "client": "Department of Water Resources",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "AI Module Development",
        "Water Resource Data Analysis",
        "Legacy System Extension"
      ],
      "intro": "The Department of Water Resources already relies on a mobile app and wanted AI added to it. That makes this less a new-app project and more a question of connecting a model to live agency data without breaking something people depend on every day. Haliviq built the AI module, extended the existing systems behind the app and integrated the result into the workflow field officers use. We worked from the department's own water resource data and tested on real operating scenarios. Here is what we delivered, how we worked and the technology involved.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Add a specific AI capability to an operational government workflow.",
        "Analyse water resource data with the AI module, using live agency data in place of a static dataset.",
        "Extend the department's legacy systems instead of replacing them.",
        "Keep the system reliable enough for field officers to depend on every day.",
        "Design the app screens around how field work is actually done.",
        "Make the module extendable and retrainable as requirements change."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "An AI module built for a specific analysis or verification task",
        "Mobile app integration connecting the AI module to field workflows",
        "A water resource data analysis capability within the app",
        "Integration with the department's existing and legacy data systems",
        "Reliability and accuracy testing against real operational data",
        "Field-operations UX design for the screens officers use",
        "Documentation and handover for ongoing maintenance by the department"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Operational and data discovery",
          "desc": "We studied the workflow as it exists and the data the AI module needs to read. Understanding what officers do in the field decided where AI could help without getting in the way."
        },
        {
          "title": "AI module development",
          "desc": "We built and tuned the model for the specific analysis task required. We kept it scoped to one clear job so its behaviour can be checked and explained."
        },
        {
          "title": "Mobile integration",
          "desc": "We integrated the module into the app that field officers already use daily, and connected it to the department's data systems. Officers keep working in the same place."
        },
        {
          "title": "Validation and handover",
          "desc": "We tested against real operational scenarios and handed over documentation. The department can maintain, retrain and extend the module afterwards."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "AI/ML module development, built for one defined analysis task",
        "Mobile app integration layer, connecting the module to the officers' app",
        "Legacy system and database integration, extending existing systems",
        "Cloud infrastructure for model inference",
        "Secure data-handling architecture for agency data",
        "Field-operations UX design"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app adds AI capability to a system field officers use operationally.",
        "The AI module works with live agency data rather than being tested in isolation.",
        "The workflow is built to be reliable enough for daily field use.",
        "Legacy systems are extended in place, not replaced.",
        "The module can be retrained or expanded by the department over time."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "AI-enabled government mobile projects like this typically take two to four months, depending on how complex the integration is."
        },
        {
          "question": "What technologies were used?",
          "answer": "A purpose-built AI/ML module integrated into a mobile app and connected to the department's existing systems through a secure data-handling architecture."
        },
        {
          "question": "Why extend the existing system instead of rebuilding it?",
          "answer": "The department depends on its current systems every day. Extending them keeps what works, avoids a risky switchover and lets the new capability arrive sooner."
        },
        {
          "question": "How was reliability checked?",
          "answer": "We tested the module against real operational scenarios and data, not only sample data. Accuracy and reliability matter because field officers use the results in their work."
        },
        {
          "question": "Can the AI module be retrained later?",
          "answer": "Yes. It was built to be extended or retrained as requirements change, and documentation was handed over for the department's own maintenance."
        },
        {
          "question": "Can this be adapted for other agencies with legacy systems?",
          "answer": "Yes. Adding an AI module on top of an existing system suits agencies that want to modernize in place instead of rebuilding from scratch. The scope depends on each agency's data and workflow."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/department-of-water-resources/cover.jpg"
    }
  },
  {
    "slug": "immigration-bureau",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "แอปยืนยันตัวตนด้วย AI ใบหน้าและเอกสาร | สตม.",
      "metaDescription": "โมดูล AI ตรวจสอบเอกสารและใบหน้าในแอปมือถือของสำนักงานตรวจคนเข้าเมือง ที่ Haliviq ทำ พร้อมเชื่อมฐานข้อมูลผู้เดินทาง",
      "h1": "สำนักงานตรวจคนเข้าเมือง: โมดูล AI ยืนยันตัวตนในแอปมือถือ",
      "client": "สำนักงานตรวจคนเข้าเมือง",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า",
        "ระบบยืนยันตัวตน",
        "เชื่อมฐานข้อมูลผู้เดินทาง"
      ],
      "intro": "สำหรับสำนักงานตรวจคนเข้าเมือง สำนักงานตำรวจแห่งชาติ จุดประสงค์ของ AI คือช่วยตรวจเอกสารและใบหน้า และจุดประสงค์ของแอปคือให้เจ้าหน้าที่ถือการตรวจนี้ไว้ในมือ Haliviq พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า ระบบยืนยันตัวตนที่ครอบอยู่รอบโมดูล และการเชื่อมกับฐานข้อมูลผู้เดินทาง งานนี้อยู่ระหว่างการนำโมเดลไปใช้กับการเชื่อมระบบ เพราะผลตรวจจะมีประโยชน์ก็ต่อเมื่อมาเร็ว จากข้อมูลสด ในแอปที่คนไว้ใจ หน้านี้สรุปงานที่ส่งมอบ ขั้นตอนทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เพิ่มการตรวจสอบเอกสารและใบหน้าด้วย AI เข้าไปในขั้นตอนงานภาครัฐที่ใช้งานจริง",
        "นำการยืนยันตัวตนมาไว้ในแอปมือถือที่เจ้าหน้าที่ใช้อยู่ ไม่ต้องใช้เครื่องมือแยก",
        "เชื่อมฐานข้อมูลผู้เดินทาง ให้การตรวจสอบทำงานกับข้อมูลสดของหน่วยงาน",
        "ทำระบบให้เสถียรพอสำหรับเจ้าหน้าที่ใช้ทุกวัน",
        "จัดการข้อมูลระบุตัวตนอย่างระมัดระวัง ด้วยโครงสร้างจัดการข้อมูลที่ปลอดภัย",
        "สร้างโมดูลที่ต่อยอดหรือเทรนใหม่ได้เมื่อข้อกำหนดเปลี่ยน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ตรวจสอบเอกสารและใบหน้า",
        "ระบบยืนยันตัวตนที่สร้างรอบโมดูล AI",
        "การเชื่อมเข้ากับแอปมือถือ ให้การตรวจอยู่ในขั้นตอนงานของเจ้าหน้าที่",
        "เชื่อมฐานข้อมูลผู้เดินทางและระบบเดิมของสำนักงาน",
        "ทดสอบความเสถียรและความแม่นยำกับข้อมูลใช้งานจริง",
        "การจัดการข้อมูลระบุตัวตนอย่างปลอดภัย",
        "เอกสารและส่งมอบงาน ให้สำนักงานดูแลต่อได้เอง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษางานและข้อมูล",
          "desc": "เราศึกษาว่าเจ้าหน้าที่ยืนยันตัวตนกันยังไงอยู่ และโมดูลต้องเข้าถึงข้อมูลอะไร ช่วยกำหนดขอบเขตงานของ AI ให้ชัดก่อนเริ่มงานด้านโมเดล"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "เราสร้างและปรับ AI ให้ตรวจสอบเอกสารและใบหน้าสำหรับงานเฉพาะที่ต้องการ จำกัดขอบเขตให้แคบ เพื่อให้ตรวจผลและไว้วางใจได้"
        },
        {
          "title": "เชื่อมเข้าแอปมือถือ",
          "desc": "เราต่อการตรวจสอบเข้ากับแอปที่เจ้าหน้าที่ใช้ทุกวัน และเชื่อมกับฐานข้อมูลผู้เดินทาง การตรวจเริ่มและจบในแอป"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "เราทดสอบกับสถานการณ์ใช้งานจริง และส่งมอบเอกสาร สำนักงานดูแล เทรนใหม่ และต่อยอดโมดูลได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "โมดูล AI/ML สำหรับตรวจสอบเอกสารและใบหน้า",
        "ชั้นเชื่อมแอปมือถือ ผูกการตรวจสอบเข้ากับแอป",
        "เชื่อมฐานข้อมูลผู้เดินทางและระบบเก่า",
        "Cloud infrastructure สำหรับรันโมเดล (inference)",
        "โครงสร้างการจัดการข้อมูลที่ปลอดภัยสำหรับข้อมูลระบุตัวตน",
        "ออกแบบ UX สำหรับงานภาคสนาม บนหน้าจอที่เจ้าหน้าที่ใช้"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่เพิ่มการตรวจสอบด้วย AI ให้ระบบที่เจ้าหน้าที่ใช้งานจริง",
        "โมดูล AI เชื่อมกับข้อมูลสดของหน่วยงาน ไม่ได้ทดสอบแยกโดดเดี่ยว",
        "ขั้นตอนงานสร้างมาให้เสถียรพอสำหรับใช้ภาคสนามทุกวัน",
        "การตรวจสอบอยู่ในแอปของเจ้าหน้าที่เอง ไม่ต้องใช้เครื่องมือแยก",
        "สำนักงานเทรนใหม่หรือขยายโมดูลได้เองในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์แอปมือถือภาครัฐที่เพิ่ม AI แบบนี้ ปกติใช้เวลาสองถึงสี่เดือน ขึ้นกับว่างานเชื่อมระบบซับซ้อนแค่ไหน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้โมดูล AI/ML ที่สร้างเฉพาะสำหรับตรวจสอบเอกสารและใบหน้า ต่อเข้ากับแอปมือถือ และเชื่อมกับระบบของสำนักงานผ่านโครงสร้างจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "โมดูลตรวจสอบอะไรบ้าง",
          "answer": "รองรับการตรวจสอบเอกสารและใบหน้า เป็นส่วนหนึ่งของการยืนยันตัวตน สร้างมาสำหรับงานที่กำหนดไว้ชัด ไม่ใช่เครื่องมือทั่วไป"
        },
        {
          "question": "ข้อมูลระบุตัวตนได้รับการปกป้องยังไง",
          "answer": "โมดูลออกแบบด้วยโครงสร้างจัดการข้อมูลที่ปลอดภัย เพราะข้อมูลระบุตัวตนเป็นข้อมูลอ่อนไหว การเข้าถึงเป็นไปตามระบบควบคุมข้อมูลเดิมของสำนักงาน"
        },
        {
          "question": "เทรนโมดูลใหม่ภายหลังได้ไหม",
          "answer": "ได้ โมดูลสร้างมาให้ต่อยอดหรือเทรนใหม่ได้เมื่อข้อกำหนดเปลี่ยน และเราส่งมอบเอกสารให้สำนักงานดูแลเอง"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานที่มีระบบเก่าได้ไหม",
          "answer": "ได้ การเพิ่มโมดูล AI บนระบบเดิม เหมาะกับหน่วยงานที่อยากปรับปรุงจากของเดิม แทนการสร้างใหม่ทั้งหมด ข้อมูลและกฎของแต่ละหน่วยงานเป็นตัวกำหนดขอบเขตงาน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/immigration-bureau/cover.jpg"
    },
    "en": {
      "metaTitle": "AI Face and Document Verification App | Immigration Bureau",
      "metaDescription": "AI document and facial verification module for the Royal Thai Police Immigration Bureau's mobile app, built by Haliviq with traveler database integration.",
      "h1": "Royal Thai Police Immigration Bureau: AI Verification Module in a Mobile App",
      "client": "Royal Thai Police Immigration Bureau",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "AI Document & Facial Verification Module",
        "Identity Verification System",
        "Traveler Database Integration"
      ],
      "intro": "For the Royal Thai Police Immigration Bureau, the point of AI was to help check documents and faces, and the point of the app was to put that check in officers' hands. Haliviq developed an AI document and facial verification module, an identity verification system around it and the integration with the traveler database. The work sits between model deployment and systems integration, since a verification result is only useful if it comes quickly, from live data, in an app people trust. This page lists the deliverables, the process and the technology used.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Add AI-based document and facial verification to an operational government workflow.",
        "Bring identity verification into the mobile app officers use, rather than a separate tool.",
        "Connect to the traveler database so verification works against live agency data.",
        "Keep the system reliable enough for daily use by field officers.",
        "Handle identity data with care through a secure data-handling design.",
        "Build the module so it can be extended or retrained as requirements evolve."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "An AI document and facial verification module",
        "An identity verification system built around the AI module",
        "Mobile app integration connecting verification to officers' workflows",
        "Integration with the traveler database and the bureau's existing systems",
        "Reliability and accuracy testing against real operational data",
        "Secure data handling for identity information",
        "Documentation and handover for the bureau's own maintenance"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Operational and data discovery",
          "desc": "We studied how officers verify identity today and what data the module has to reach. This fixed the boundaries of the AI's task before any model work began."
        },
        {
          "title": "AI module development",
          "desc": "We built and tuned the AI to verify documents and faces for the specific task required. Its scope was kept narrow so results can be checked and trusted."
        },
        {
          "title": "Mobile integration",
          "desc": "We integrated verification into the app officers use daily and connected it to the traveler database. A check starts and finishes inside the app."
        },
        {
          "title": "Validation and handover",
          "desc": "We tested against real operational scenarios and handed over documentation. The bureau can maintain, retrain and extend the module on its own."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "AI/ML module for document and facial verification",
        "Mobile app integration layer, tying verification into the app",
        "Traveler database and legacy system integration",
        "Cloud infrastructure for model inference",
        "Secure data-handling architecture for identity data",
        "Field-operations UX design for the officer-facing screens"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app adds AI verification to a system officers use operationally.",
        "The AI module is integrated with live agency data rather than tested in isolation.",
        "The workflow is built to be reliable enough for daily field use.",
        "Verification lives inside the officers' own app rather than a separate tool.",
        "The module can be retrained or expanded by the bureau over time."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "AI-enabled government mobile projects like this typically take two to four months, depending on integration complexity."
        },
        {
          "question": "What technologies were used?",
          "answer": "A purpose-built AI/ML module for document and facial verification, integrated into a mobile app and connected to the bureau's systems through a secure data-handling architecture."
        },
        {
          "question": "What does the verification module check?",
          "answer": "It supports verification of documents and of faces as part of an identity check. It is built for that defined task rather than as a general-purpose tool."
        },
        {
          "question": "How is identity data protected?",
          "answer": "The module was designed with a secure data-handling architecture, because identity information is sensitive. Access to it follows the bureau's existing data and system controls."
        },
        {
          "question": "Can the module be retrained later?",
          "answer": "Yes. It was built to be extended or retrained as requirements change, and documentation was handed over so the bureau can maintain it."
        },
        {
          "question": "Can this be adapted for other agencies with legacy systems?",
          "answer": "Yes. Adding an AI module on top of an existing system suits agencies modernizing in place instead of rebuilding from scratch. Each agency's data and rules shape the scope."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/immigration-bureau/cover.jpg"
    }
  },
  {
    "slug": "ministry-of-culture",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ทำแอปมือถือเนื้อหาวัฒนธรรม | กระทรวงวัฒนธรรม",
      "metaDescription": "ดูงานแอป iOS และ Android ของกระทรวงวัฒนธรรมที่ Haliviq ทำ คัดสรรเนื้อหาวัฒนธรรม ดึงข้อมูลจากเว็บไซต์เก่า และใช้ง่ายสำหรับประชาชนทั่วไป",
      "h1": "กระทรวงวัฒนธรรม: แอปมือถือรวมเนื้อหาวัฒนธรรมที่คัดสรรแล้ว",
      "client": "กระทรวงวัฒนธรรม",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "ออกแบบ UX/UI",
        "รวบรวมและจัดระเบียบเนื้อหาวัฒนธรรม",
        "เชื่อมฐานข้อมูลจากเว็บไซต์เดิม"
      ],
      "intro": "กระทรวงวัฒนธรรมมีเนื้อหาด้านวัฒนธรรมจำนวนมาก และหลายส่วนอยู่บนเว็บไซต์รุ่นเก่าที่ไม่ได้ทำมาสำหรับมือถือ เราออกแบบและพัฒนาแอป iOS และ Android ที่รวบรวมเนื้อหาเหล่านั้น คัดสรรให้ผู้ใช้เจอสิ่งที่น่าอ่านก่อน และเชื่อมกับข้อมูลต้นทาง ไม่ได้คัดลอกมา หน้าจอออกแบบสำหรับคนทั่วไป ตั้งแต่นักเรียนจนถึงคนที่ไม่ค่อยใช้แอป หน้านี้สรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเนื้อหาวัฒนธรรมของกระทรวงไปถึงประชาชนที่ใช้มือถือเป็นหลัก",
        "ดึงข้อมูลจากเว็บไซต์เก่าที่มีอยู่ โดยไม่ต้องคัดลอกซ้ำด้วยมือ",
        "คัดสรรเนื้อหาให้เปิดแอปดูแล้วน่าสนใจ ไม่ใช่แค่รายการลิงก์",
        "ออกแบบให้ประชาชนทั่วไปใช้ได้ รวมถึงคนที่ไม่ค่อยคุ้นกับแอป",
        "ให้กระทรวงอัปเดตเนื้อหาเองได้โดยไม่ต้องพึ่งนักพัฒนา",
        "สร้างแพลตฟอร์มที่กระทรวงเพิ่มฟีเจอร์ใหม่ได้ในภายหลัง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นแบบแอปเนทีฟ ทั้ง iOS และ Android",
        "การคัดสรรเนื้อหาวัฒนธรรม ให้แอปมีโครงสร้างที่คิดมาแล้ว",
        "เชื่อมข้อมูลจากเว็บไซต์เก่า",
        "งานออกแบบ UX/UI ที่เหมาะกับประชาชนทั่วไป ไม่ต้องมีพื้นความรู้เทคนิค",
        "โครงสร้างเนื้อหาที่กระทรวงอัปเดตเองได้",
        "รูปแบบหน้าจอที่คำนึงถึงการเข้าถึง",
        "เอกสารส่งมอบเรื่องเนื้อหาและการเชื่อมข้อมูล"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "เราไล่ดูเว็บไซต์และแหล่งข้อมูลที่เก็บเนื้อหาวัฒนธรรมอยู่ การรู้ว่ามีอะไรและอยู่ในรูปแบบไหน ตัดสินว่าดึงเข้ามาอัตโนมัติได้มากแค่ไหน"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบสำหรับประชาชนทั่วไปและให้ความชัดเจนมาก่อนข้อมูลแน่น เนื้อหาจัดตามสิ่งที่ผู้ใช้อยากสำรวจ ไม่ได้จัดตามว่าหน่วยงานไหนเป็นคนเผยแพร่"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "เราพัฒนาแอปและเชื่อมกับข้อมูลจากเว็บไซต์เก่า เนื้อหาใหม่และที่แก้ไขจากแหล่งเหล่านั้นเข้าแอปโดยไม่ต้องพิมพ์ซ้ำ"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "เราส่งมอบแอปในโครงสร้างที่กระทรวงเพิ่มฟีเจอร์ภายหลังได้ พร้อมเครื่องมือคัดสรรและจัดการเนื้อหา ให้บรรณาธิการดูแลแอปให้สดใหม่ได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Cross-platform mobile app framework ใช้โค้ดชุดเดียวทำได้ทั้ง iOS และ Android",
        "เชื่อมข้อมูลและ API จากเว็บไซต์เก่า",
        "Cloud hosting และ backend infrastructure สำหรับส่งเนื้อหา",
        "ชุด UI component ที่รองรับการเข้าถึง",
        "ระบบจัดการเนื้อหาสำหรับอัปเดตและคัดสรรโดยกระทรวง",
        "โครงสร้างการยืนยันตัวตนที่ปลอดภัยในส่วนที่ต้องใช้"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้แอปใหม่ที่ขยายเนื้อหาวัฒนธรรมของกระทรวงไปถึงผู้ใช้ที่ใช้มือถือเป็นหลัก",
        "การเชื่อมข้อมูลช่วยให้ไม่ต้องคัดลอกข้อมูลจากเว็บไซต์เก่าซ้ำ",
        "เนื้อหาที่คัดสรรแล้วทำให้ผู้ใช้มีสิ่งน่าสำรวจ",
        "หน้าจอออกแบบให้ผู้ใช้ทั่วไปที่ไม่ได้เชี่ยวชาญเทคโนโลยีใช้ได้",
        "กระทรวงขยายแพลตฟอร์มและดูแลเนื้อหาได้เอง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือหน่วยงานรัฐที่ต้องเชื่อมระบบแบบนี้ ปกติใช้เวลาราวสองถึงสามเดือน สภาพของข้อมูลในระบบเก่าเป็นปัจจัยหลัก"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ cross-platform mobile app framework เชื่อมกับข้อมูลจากเว็บไซต์เก่า วางบน cloud infrastructure พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "การคัดสรรเนื้อหาในโปรเจกต์นี้หมายความว่ายังไง",
          "answer": "คือการเลือกและจัดเรียงเนื้อหาของกระทรวง ให้ผู้ใช้เจอจุดเริ่มต้นที่มีความหมาย ไม่ต้องเจอทุกอย่างพร้อมกัน เราออกแบบการคัดสรรกับโครงสร้างไปด้วยกัน"
        },
        {
          "question": "แอปใช้ข้อมูลจากเว็บไซต์เก่ายังไง",
          "answer": "เชื่อมกับข้อมูลของเว็บเหล่านั้นโดยตรง ไม่ได้คัดลอกด้วยมือ เนื้อหาจึงตรงกับต้นทาง"
        },
        {
          "question": "กระทรวงเพิ่มฟีเจอร์ภายหลังได้ไหม",
          "answer": "ได้ แอปวางโครงสร้างไว้ให้ต่อยอด เพิ่มฟีเจอร์ใหม่บนแพลตฟอร์มเดียวกันได้"
        },
        {
          "question": "ใช้แนวทางนี้กับหน่วยงานรัฐอื่นได้ไหม",
          "answer": "ได้ การเชื่อมข้อมูลเก่าและทำหน้าจอให้เข้าถึงง่าย ใช้ได้กับหน่วยงานรัฐอื่นที่อยากนำเนื้อหาหรือบริการขึ้นมือถือ เราประเมินงานตามแหล่งข้อมูลของแต่ละหน่วยงาน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ministry-of-culture/cover.jpg"
    },
    "en": {
      "metaTitle": "Cultural Heritage Mobile App Development | Ministry of Culture",
      "metaDescription": "Ministry of Culture's iOS and Android app by Haliviq: curated cultural content, data from legacy websites and an interface for the general public.",
      "h1": "Ministry of Culture: Mobile App for Curated Cultural Content",
      "client": "Ministry of Culture",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "UX/UI Design",
        "Cultural Content Curation",
        "Legacy Website Data Integration"
      ],
      "intro": "The Ministry of Culture holds a large amount of cultural content, and much of it sits on older websites that were not built for phones. We designed and built an iOS and Android app that gathers that material, curates it so a visitor sees something worth reading first, and keeps it connected to the original data rather than copying it. The interface assumes a general audience, from students to people who rarely use apps. This page lists what we delivered, how we worked and the technology behind it.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring the Ministry's cultural content to a mobile-first public audience.",
        "Pull data from existing legacy websites without duplicating it by hand.",
        "Curate the content so that browsing the app is rewarding, not just a list of links.",
        "Design for a broad public, including people less familiar with apps.",
        "Let the Ministry keep content current without developer involvement.",
        "Provide a platform the Ministry can extend with new features over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A native-feeling mobile app for iOS and Android",
        "Cultural content curation, so the app has a considered structure",
        "Integration with data from legacy websites",
        "UX/UI design suited to a broad, non-technical public audience",
        "A content structure the Ministry can keep current internally",
        "Accessibility-conscious interface patterns",
        "Handover documentation for content and integration"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder and data discovery",
          "desc": "We mapped the websites and data sources holding the cultural content. Knowing what exists and in what form decided how much could be pulled in automatically."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed for a broad public audience and put clarity before density. Content is organized by what a visitor wants to explore, not by which department published it."
        },
        {
          "title": "Mobile app development",
          "desc": "We built the app and integrated it with the legacy website data. New and updated content from those sources reaches the app without retyping."
        },
        {
          "title": "Handover and extension planning",
          "desc": "We delivered the app with a structure the Ministry can extend with future features. Curation and content tools were handed over so editors can keep the app fresh."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework, covering iOS and Android from one codebase",
        "Legacy website data and API integration",
        "Cloud hosting and backend infrastructure for content delivery",
        "Accessible UI component library",
        "Content management for Ministry updates and curation",
        "Secure authentication architecture where it is needed"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new app extends the Ministry's cultural content to a mobile-first audience.",
        "Data integration avoids duplicating records from legacy websites.",
        "Curated content gives visitors something worth exploring.",
        "The interface is designed for a broad, non-technical public user base.",
        "The Ministry can extend the platform and maintain content on its own."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically takes around two to three months. The condition of the legacy data is the main factor."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with legacy website data, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "What does content curation mean in this project?",
          "answer": "It means choosing and arranging the Ministry's material so a visitor finds a meaningful starting point, rather than facing every item at once. Curation and structure were designed together."
        },
        {
          "question": "How does the app use data from old websites?",
          "answer": "It integrates with data from those sites instead of copying it by hand. Content stays aligned with its source."
        },
        {
          "question": "Can the Ministry add features later?",
          "answer": "Yes. The app is structured for extension, so new features can be added to the same platform."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes. Combining legacy-data integration with an accessible interface suits other public agencies taking content or services to mobile. We scope each project around the agency's own sources."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ministry-of-culture/cover.jpg"
    }
  },
  {
    "slug": "bbk-menu",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์แนะนำร้านอาหาร กรุงเทพฯ | BBK Menu",
      "metaDescription": "ดูงานเว็บไซต์ค้นหาร้านอาหารและเมนูเด็ดของ BBK Menu ที่ Haliviq ทำ กรองรายการได้ ทีมบรรณาธิการเผยแพร่เอง และวาง SEO สำหรับคำค้นร้านเด็ดในกรุงเทพฯ",
      "h1": "BBK Menu: แพลตฟอร์มค้นหาร้านอาหารและเมนูเด็ด ออกแบบ UX และพัฒนาเว็บไซต์",
      "client": "BBK Menu",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบแนะนำร้านอาหาร",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "BBK Menu ช่วยให้คนตัดสินใจว่าจะกินที่ไหนในกรุงเทพฯ และเมนูไหนน่าสั่ง เมื่อมีร้านและเมนูเป็นร้อยๆ รายการ ส่วนที่ยากไม่ใช่สไตล์ภาพ แต่เป็นวิธีจัดเนื้อหา ค้นหา และเผยแพร่ Haliviq เริ่มจากช่วงออกแบบ UX/UI ก่อน ทดสอบรูปแบบการเลือกดู การกรอง และหน้ารายการกับข้อมูลร้านและเมนูจริง แล้วค่อยพัฒนาเว็บไซต์ เรายังตั้ง workflow การเผยแพร่ ให้ทีมบรรณาธิการเพิ่มรายการได้โดยไม่ต้องรอนักพัฒนา หน้านี้สรุปงานที่ส่งมอบ ขั้นตอนทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ออกแบบโครงสร้างข้อมูลที่ยังเลือกดูง่าย แม้จะโตไปถึงร้านและเมนูเป็นร้อยรายการ",
        "ช่วยให้ผู้อ่านจากอาการอยากกินแบบกว้างๆ ไปถึงร้านที่แนะนำชัดๆ ได้ในไม่กี่ขั้นตอน",
        "ให้ทีมบรรณาธิการมีระบบเนื้อหาสำหรับเผยแพร่รายการใหม่ โดยไม่ต้องพึ่งนักพัฒนา",
        "จัดหมวด ย่าน และประเภทอาหาร ไม่ให้เนื้อหากลายเป็นเขาวงกต",
        "วางพื้นฐานด้านเทคนิคที่เหมาะกับคำค้นหาร้านและเมนูแบบเจาะจง (long-tail)",
        "ใช้การกำกับภาพถ่ายและเนื้อหา ทำให้แต่ละหน้ารายการมีประโยชน์ ไม่ใช่แค่กรอกข้อมูลให้ครบ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบออกแบบ UX/UI สำหรับแพลตฟอร์มคอนเทนต์ค้นหาร้านอาหาร",
        "เว็บไซต์ที่แสดงผลได้ดีทุกขนาดหน้าจอ มีรายการร้านและเมนูที่กรองได้",
        "ระบบเลือกดูและแนะนำร้านอาหาร",
        "โครงสร้างเนื้อหาบรรณาธิการสำหรับเผยแพร่ต่อเนื่อง",
        "กำกับภาพถ่ายและเนื้อหาของหน้ารายการ",
        "โครงสร้างหมวด ย่าน และประเภทอาหาร สำหรับการนำทางและการค้นหา",
        "ส่งมอบ workflow การเผยแพร่ให้ทีมบรรณาธิการ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ช่วงออกแบบ UX/UI",
          "desc": "เราออกแบบรูปแบบการเลือกดู การกรอง และหน้ารายการก่อนเขียนโค้ด และเทียบโครงสร้างกับข้อมูลร้านและเมนูจริง ปัญหาของเลย์เอาต์จึงโผล่บนกระดาษ ไม่ใช่ตอนใช้งานจริง"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "เราจัดหมวด ย่าน และประเภทอาหาร ให้เนื้อหาโตได้โดยไม่กลายเป็นเขาวงกต ผู้อ่านจะเข้ามาทางไหนก็ถึงรายการเดียวกันได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ บนระบบดีไซน์ที่อนุมัติแล้ว ระบบค้นหาและกรองใช้โครงสร้างที่วางไว้พร้อมโมเดลเนื้อหา"
        },
        {
          "title": "ส่งมอบให้ทีมบรรณาธิการ",
          "desc": "เราส่งมอบ workflow การเผยแพร่ที่ทีมบรรณาธิการใช้เองได้ การเพิ่มรายการพร้อมรูปและหมวด ไม่ต้องมีนักพัฒนา"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบออกแบบ UX/UI ใช้ร่วมกันทั้งหน้ารายการ หน้าหมวด และหน้าค้นหา",
        "Next.js front-end ให้หน้าเว็บเร็วและ URL สะอาด",
        "Headless CMS สำหรับรายการ ให้บรรณาธิการเผยแพร่ร้านและเมนูเอง",
        "โครงสร้างการค้นหาและกรอง วางแผนไปพร้อมโมเดลเนื้อหา",
        "Cloud hosting และ CDN ส่งภาพได้เร็ว",
        "พื้นฐาน SEO บนหน้าเว็บสำหรับคำค้นแบบเจาะจง"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ใหม่พร้อมระบบเนื้อหาที่สร้างมาให้โตเกินรายการชุดแรก",
        "การเลือกดูและกรองเดินตามวิธีที่คนหาที่กินจริง",
        "ทีมบรรณาธิการเผยแพร่ได้โดยไม่ต้องรอเวลาของนักพัฒนา",
        "โครงสร้าง SEO ตั้งเป้าที่คำค้นแบบ best X in Bangkok",
        "หมวด ย่าน และประเภทอาหาร ทำให้แคตตาล็อกที่โตขึ้นยังเดินง่าย"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "ช่วงออกแบบ UX/UI รวมกับการพัฒนาเว็บไซต์ค้นหาแบบนี้ ปกติใช้เวลารวมกันไม่กี่เดือน ขนาดของรายการชุดแรกมีผลต่อเวลา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ใช้ Next.js ทำหน้าเว็บ มี Headless CMS สำหรับรายการร้านและเมนู สร้างบนโครงสร้างค้นหาและกรอง และวางบน host ที่มี CDN"
        },
        {
          "question": "ทำไมต้องออกแบบก่อนพัฒนา",
          "answer": "เว็บค้นหาแบบนี้ โครงสร้างคือตัวสินค้า การทดสอบรูปแบบกับข้อมูลจริงก่อน ช่วยเลี่ยงการรื้อระบบนำทางทีหลังเมื่อมีรายการเป็นร้อยแล้ว"
        },
        {
          "question": "เว็บรับมือกับรายการเป็นร้อยได้ยังไง",
          "answer": "รายการจัดตามหมวด ย่าน และประเภทอาหาร และกรองได้ โครงสร้างเดียวกันนี้ใช้ได้ทั้งผู้อ่านที่เลือกดู และเสิร์ชเอนจินที่จัดทำดัชนี"
        },
        {
          "question": "บรรณาธิการเผยแพร่เองได้ไหม",
          "answer": "ได้ Headless CMS และ workflow การเผยแพร่ทำให้ทีมบรรณาธิการเพิ่มและแก้รายการได้เอง"
        },
        {
          "question": "ใช้แนวทางนี้กับแพลตฟอร์มค้นหาหรือไดเรกทอรีอื่นได้ไหม",
          "answer": "ได้ โครงสร้างรายการ ตัวกรอง และการเผยแพร่แบบบรรณาธิการ ใช้ได้กับแพลตฟอร์มค้นหาท้องถิ่นอื่นนอกจากร้านอาหาร เราปรับหมวดและรูปแบบรายการให้เข้ากับเรื่องที่ทำ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/bbk-menu/cover.jpg"
    },
    "en": {
      "metaTitle": "Restaurant Discovery Website, Bangkok | BBK Menu",
      "metaDescription": "BBK Menu's restaurant and dish discovery website by Haliviq: filterable listings, an editorial publishing workflow and SEO for 'best in Bangkok' searches.",
      "h1": "BBK Menu: Restaurant and Dish Discovery Platform, UX Design and Web Build",
      "client": "BBK Menu",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Restaurant Discovery System",
        "Photography & Content Direction"
      ],
      "intro": "BBK Menu helps people decide where to eat in Bangkok and which dishes are worth ordering. With hundreds of restaurant and dish entries, the hard part is not the visual style but how the content is organized, searched and published. Haliviq led a UX/UI design phase first, testing the browsing, filtering and listing patterns against real restaurant and dish data, and only then built the website. We also set up a publishing workflow so the editorial team can add listings without waiting for a developer. This page covers the deliverables, process and technology.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Design an information architecture that stays easy to browse as it grows to hundreds of restaurant and dish listings.",
        "Help readers go from a vague craving to a specific recommendation in a few steps.",
        "Give the editorial team a content system for publishing new listings without developer involvement.",
        "Organize categories, neighborhoods and cuisines so the content does not turn into a maze.",
        "Build a technical foundation suited to long-tail restaurant and dish searches.",
        "Use photography and content direction to make each listing page useful, not just filled in."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A UX/UI design system for a restaurant-discovery content platform",
        "A responsive website with filterable restaurant and dish listings",
        "A restaurant discovery and recommendation browsing system",
        "An editorial content structure for ongoing publishing",
        "Photography and content direction for listing pages",
        "Category, neighborhood and cuisine structures for navigation and search",
        "A publishing workflow handover for the editorial team"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "UX/UI design phase",
          "desc": "We designed the browsing, filtering and listing patterns before writing code, and checked the structure against real restaurant and dish data. Problems with the layout showed up on paper instead of in production."
        },
        {
          "title": "Information architecture",
          "desc": "We organized categories, neighborhoods and cuisines so the content can grow without turning into a maze. A reader can come in through any of them and reach the same listing."
        },
        {
          "title": "Development",
          "desc": "We built a fast, responsive website on top of the approved design system. Search and filtering run on a structure planned alongside the content model."
        },
        {
          "title": "Editorial handover",
          "desc": "We delivered a publishing workflow that the editorial team runs on its own. Adding a listing, with photos and categories, does not need a developer."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "UX/UI design system, shared across listing, category and search pages",
        "Next.js front end, for fast pages and clean URLs",
        "Headless CMS for listings, where editors publish restaurant and dish entries",
        "Search and filter architecture, planned together with the content model",
        "Cloud hosting and CDN for quick image delivery",
        "On-page SEO foundation for long-tail queries"
      ],
      "resultsHeading": "Results",
      "results": [
        "The new website launched with a content system built to grow past its first listings.",
        "Browsing and filtering follow the way people actually look for a place to eat.",
        "The editorial team publishes without waiting on developer time.",
        "The SEO structure targets long-tail 'best X in Bangkok' searches.",
        "Categories, neighborhoods and cuisines keep a growing catalog easy to navigate."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "The UX/UI design phase and the website build for a discovery platform like this typically take a few months together. The size of the first batch of listings affects the timeline."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a headless CMS for restaurant and dish listings, built on a search-and-filter architecture and deployed on a CDN-backed host."
        },
        {
          "question": "Why design before building?",
          "answer": "For a discovery site, the structure is the product. Testing patterns against real data first avoids rebuilding the navigation once hundreds of listings are in."
        },
        {
          "question": "How does the site handle hundreds of listings?",
          "answer": "Listings are organized by category, neighborhood and cuisine and can be filtered. The same structure serves both readers browsing and search engines indexing."
        },
        {
          "question": "Can editors publish without a developer?",
          "answer": "Yes. The headless CMS and publishing workflow let the editorial team add and edit listings on their own."
        },
        {
          "question": "Can this be adapted for other discovery or directory platforms?",
          "answer": "Yes. The listing, filtering and editorial publishing architecture applies to other local discovery platforms beyond restaurants. We adapt the categories and the listing format to the subject."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/bbk-menu/cover.jpg"
    }
  },
  {
    "slug": "sena-development",
    "industryTag": "Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "พัฒนา CRM อสังหาริมทรัพย์ ในไทย | Sena Development",
      "metaDescription": "CRM แบบเฉพาะและโมดูล AI ที่ Haliviq พัฒนาให้ Sena Development รวมลูกค้า โครงการ และการติดตามไว้ในระบบเดียว มีสิทธิ์เข้าถึงตามบทบาททีมขาย",
      "h1": "Sena Development: CRM อสังหาริมทรัพย์และงานพัฒนา AI สำหรับทีมขาย",
      "client": "Sena Development",
      "badge": "อสังหาริมทรัพย์",
      "servicesProvided": [
        "พัฒนาระบบ CRM",
        "พัฒนา AI"
      ],
      "intro": "ผู้พัฒนาอสังหาริมทรัพย์คุยกับลูกค้าหลายโครงการ ผ่านหลายช่องทาง และกว่าลูกค้าจะตัดสินใจอาจใช้เวลาเป็นเดือน เมื่อรายละเอียดกระจายอยู่ในสเปรดชีตกับแชท ทีมขายต้องใช้แรงไปกับการหาข้อมูลมากกว่าการลงมือขาย สำหรับ Sena Development (sena.co.th) Haliviq สร้าง CRM ที่รวมลูกค้าที่สนใจ โครงการ และการติดตามไว้ที่เดียว แล้วเพิ่มงานพัฒนา AI มาช่วยลดงานซ้ำๆ ของทีม เราทำเป็นระยะๆ ร่วมกับคนที่ใช้งานจริง หน้านี้สรุปงานที่ส่งมอบ วิธีทำงาน และเทคโนโลยีที่ใช้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "อสังหาริมทรัพย์"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "ระบบ CRM บนเว็บ และโมดูล AI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "รวมข้อมูลลูกค้าที่สนใจและประวัติการติดต่อจากหลายช่องทางเข้าไว้ในระบบเดียว",
        "ให้ทีมขายเห็นภาพของแต่ละโอกาสและงานติดตามที่ต้องทำ",
        "แยกข้อมูลตามโครงการและบทบาทผู้ใช้ ให้แต่ละทีมเห็นเฉพาะส่วนที่เกี่ยวข้อง",
        "ติดตามยูนิตและข้อมูลที่เกี่ยวกับการขายแยกตามโครงการ ไม่ใช่รายชื่อติดต่อแบบแบนๆ",
        "ใช้ AI ลดงานซ้ำๆ และช่วยให้ทีมลงมือกับข้อมูลที่เก็บไว้ได้เร็วขึ้น",
        "ให้ทีมภายในดูแลและปรับปรุงระบบต่อเองได้หลังส่งมอบ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบ CRM แบบเฉพาะสำหรับงานขายอสังหาริมทรัพย์",
        "ฐานข้อมูลลูกค้าที่สนใจ พร้อมประวัติการติดต่อและการติดตามขั้นตอนการขาย",
        "การจัดการข้อมูลโครงการ ยูนิต และข้อมูลที่เกี่ยวกับการขาย",
        "การควบคุมสิทธิ์เข้าถึงตามบทบาทและตามทีม",
        "โมดูล AI ช่วยวิเคราะห์และงานซ้ำๆ ของทีม",
        "อบรมผู้ใช้ทีมขายสำหรับระบบใหม่",
        "เอกสารและส่งมอบงาน ให้ทีมภายในดูแลระบบได้เอง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจกระบวนการขาย",
          "desc": "เราสัมภาษณ์ทีมเพื่อเขียนเส้นทางของผู้ซื้อ ตั้งแต่สนใจครั้งแรกจนตัดสินใจ และหาว่าข้อมูลหลุดหายตรงไหนในตอนนี้ แผนที่นั้นกลายเป็นฐานของขั้นตอนใน CRM"
        },
        {
          "title": "ออกแบบโมเดลข้อมูลและ workflow",
          "desc": "เรากำหนดโมเดลของลูกค้า โครงการ และการติดตามก่อนพัฒนา ให้ระบบตรงกับวิธีที่ทีมทำงาน แก้แผนผังง่ายกว่าแก้ฐานข้อมูล"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "เราพัฒนาเป็นระยะ ให้ทีมลองเวอร์ชันแรกๆ แล้วให้ความเห็น แทนที่จะส่งมอบทีเดียวตอนท้าย ซึ่งถ้าเจอเรื่องไม่คาดคิดจะเสียค่าใช้จ่ายสูง"
        },
        {
          "title": "พัฒนาและเชื่อม AI",
          "desc": "เราเพิ่มความสามารถ AI บนข้อมูลที่ CRM เก็บไว้ จำกัดขอบเขตให้ช่วยทีม ไม่ได้มาแทนวิจารณญาณของคน"
        },
        {
          "title": "ส่งมอบและพัฒนาต่อเนื่อง",
          "desc": "เราส่งมอบเอกสาร อบรมผู้ใช้ และวางแนวทางปรับปรุงต่อเนื่อง ระบบควรเปลี่ยนไปตามกระบวนการขายที่เปลี่ยน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "CRM บนเว็บแบบเฉพาะ สร้างตามกระบวนการขายของผู้พัฒนา",
        "Next.js และ TypeScript front-end",
        "API และฐานข้อมูลเชิงสัมพันธ์ เก็บลูกค้า โครงการ ยูนิต และกิจกรรม",
        "Role-based access control (RBAC) แยกข้อมูลตามโครงการและบทบาท",
        "โมดูล AI และ LLM สำหรับวิเคราะห์และงานซ้ำๆ",
        "Cloud hosting และการสำรองข้อมูล"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ข้อมูลลูกค้าที่สนใจและการติดตามอยู่ในระบบเดียว ไม่กระจัดกระจายอีก",
        "ทีมขายเห็นสถานะโอกาสและงานค้างได้ชัดขึ้น",
        "ทีมของแต่ละโครงการเข้าถึงข้อมูลตามบทบาทของตัวเอง",
        "โมดูล AI ช่วยลดงานซ้ำๆ ของทีม",
        "ทีมภายในดูแลและต่อยอดระบบได้ จากเอกสารที่ส่งมอบ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "CRM สำหรับผู้พัฒนาอสังหาฯ ต่างจาก CRM ทั่วไปยังไง",
          "answer": "การขายอสังหาฯ มีหลายโครงการ หลายยูนิต และรอบตัดสินใจยาว ระบบจึงติดตามผู้ซื้อตามโครงการและขั้นตอนการขาย ไม่ใช่รายชื่อติดต่อแบบแบนๆ"
        },
        {
          "question": "AI ในระบบนี้ช่วยเรื่องอะไร",
          "answer": "AI ช่วยวิเคราะห์ข้อมูลและงานซ้ำๆ ของทีม โดยทำงานบนข้อมูลที่ CRM มีอยู่แล้ว และออกแบบให้คนเป็นผู้ตัดสินใจสุดท้าย"
        },
        {
          "question": "ทำไมต้องใช้ role-based access control",
          "answer": "แต่ละทีมและแต่ละโครงการควรเห็นข้อมูลไม่เหมือนกัน การควบคุมสิทธิ์ตามบทบาททำให้หน้าจอของแต่ละคนตรงกับงาน และลดการเปิดเผยข้อมูลที่ไม่จำเป็น"
        },
        {
          "question": "ทำไมพัฒนา CRM เป็นระยะ",
          "answer": "เวอร์ชันแรกๆ ให้ทีมขายลองใช้และให้ความเห็นตอนที่การแก้ยังไม่แพง ทำให้ระบบสุดท้ายใกล้เคียงวิธีทำงานจริงของคน"
        },
        {
          "question": "ใครดูแลระบบหลังส่งมอบ",
          "answer": "ทีมภายในดูแลได้ ด้วยเอกสารและการอบรมที่เราให้ และเรายังวางแนวทางปรับปรุงต่อเนื่องไว้ เผื่อกระบวนการขายเปลี่ยน"
        },
        {
          "question": "ใช้แนวทางนี้กับผู้พัฒนาอสังหาฯ รายอื่นได้ไหม",
          "answer": "ได้ สถาปัตยกรรมและวิธีส่งมอบปรับให้เข้ากับกระบวนการขายของแต่ละองค์กรได้ หลังจากทำช่วงสำรวจร่วมกัน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/sena-development/cover.jpg"
    },
    "en": {
      "metaTitle": "Real Estate CRM Development in Thailand | Sena Development",
      "metaDescription": "Custom CRM and AI modules Haliviq built for Sena Development: leads, projects and follow-ups in one system, with role-based access for sales teams.",
      "h1": "Sena Development: Real Estate CRM and AI Development for Sales Teams",
      "client": "Sena Development",
      "badge": "Real Estate",
      "servicesProvided": [
        "CRM System Development",
        "AI Development"
      ],
      "intro": "A property developer talks to prospects across several projects and many channels, and a decision can take months. When the details live in spreadsheets and chat threads, the sales team spends more effort finding information than acting on it. For Sena Development (sena.co.th), Haliviq built a CRM that brings leads, projects and follow-ups into one place, then added AI development to take some of the repetitive work off the team. We built it in phases with the people who use it. This page summarizes the deliverables, the way we worked and the technology behind it.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate"
        },
        {
          "label": "Platform",
          "value": "Web-based CRM + AI modules"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Consolidate leads and contact history from multiple channels into one system.",
        "Give the sales team a clear view of each opportunity and the follow-up it needs.",
        "Separate data by project and user role, so each team sees what is relevant to it.",
        "Track units and sales-related data by project, instead of keeping a flat list of contacts.",
        "Use AI to reduce repetitive work and help the team act faster on the data already captured.",
        "Leave the in-house team able to run and improve the system after handover."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A custom CRM system for real estate sales operations",
        "A lead database with contact history and sales-stage tracking",
        "Project, unit and sales-related data management",
        "Role- and team-based access control",
        "AI modules supporting analysis and repetitive team tasks",
        "Training for the sales users on the new system",
        "Documentation and handover so the in-house team can run the system"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand the sales process",
          "desc": "We interviewed the team to map the buyer journey from first interest to decision and to find where information gets lost today. That map became the basis for the CRM's stages."
        },
        {
          "title": "Design the data model and workflows",
          "desc": "We defined the lead, project and follow-up models before development, so the system matches how the team works. It is easier to change a diagram than a database."
        },
        {
          "title": "Build the CRM",
          "desc": "We developed it in phases, with the team trying early versions and giving feedback. This avoids a single handover at the end where surprises are expensive."
        },
        {
          "title": "Develop and integrate AI",
          "desc": "We added AI capabilities on top of the data the CRM captures. They are scoped to assist the team, not to replace human judgment."
        },
        {
          "title": "Handover and iteration",
          "desc": "We delivered documentation, trained users and set up a path for continuous improvement. The system is expected to change as the sales process does."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Custom web-based CRM, built around the developer's sales process",
        "Next.js and TypeScript front end",
        "API and relational database, holding leads, projects, units and activity",
        "Role-based access control (RBAC), separating data by project and role",
        "AI and LLM modules for analysis and repetitive tasks",
        "Cloud hosting and data backup"
      ],
      "resultsHeading": "Results",
      "results": [
        "Lead and follow-up data now lives in one system instead of being scattered.",
        "The sales team has clearer visibility of opportunity status and pending work.",
        "Each project team accesses data according to its role.",
        "AI modules help reduce repetitive work for the team.",
        "The in-house team can run and extend the system using the handover material."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How is a CRM for real estate developers different from a generic CRM?",
          "answer": "Property sales involve multiple projects, units and long decision cycles, so the system tracks buyers by project and sales stage instead of as a flat contact list."
        },
        {
          "question": "What does the AI in this system help with?",
          "answer": "AI supports data analysis and repetitive team tasks, working on the data the CRM already holds. It is designed so people make the final call."
        },
        {
          "question": "Why use role-based access control?",
          "answer": "Different teams and projects should see different data. Role-based access keeps each person's view relevant and limits exposure of information they do not need."
        },
        {
          "question": "Why build the CRM in phases?",
          "answer": "Early versions let the sales team try the system and give feedback while changes are still cheap. It makes the final system closer to how people actually work."
        },
        {
          "question": "Who maintains the system after handover?",
          "answer": "The in-house team can, with the documentation and training we provide. We also set up a path for continued improvement if the sales process changes."
        },
        {
          "question": "Can this approach be adapted for other property developers?",
          "answer": "Yes. The architecture and delivery approach can be tailored to each organization's sales process after a joint discovery phase."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/sena-development/cover.jpg"
    }
  },
  {
    "slug": "panpuri",
    "industryTag": "Wellness",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ Shopify แบรนด์เวลเนสไทย | PAÑPURI",
      "metaDescription": "งานออกแบบ UX/UI และเว็บไซต์ Shopify ที่ปรับแต่งเอง สำหรับ PAÑPURI แบรนด์เวลเนสและสกินแคร์ไทยระดับลักซ์ชัวรี ฝีมือ Haliviq กรุงเทพฯ",
      "h1": "PAÑPURI: ออกแบบ UX/UI และทำเว็บไซต์ Shopify สำหรับแบรนด์เวลเนส",
      "client": "PAÑPURI",
      "badge": "เวลเนส",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify"
      ],
      "intro": "แบรนด์เวลเนสและสกินแคร์ระดับลักซ์ชัวรีขายความรู้สึกก่อนขายสินค้า เว็บไซต์จึงต้องบอกคุณภาพของแบรนด์ได้ในแวบเดียว แล้วพาลูกค้าไปชำระเงินอย่างนุ่มนวล Haliviq ทำทั้งการออกแบบ UX/UI และการพัฒนา Shopify ให้ PAÑPURI โดยออกแบบประสบการณ์ก่อน แล้วสร้างตามดีไซน์ที่อนุมัติ ผลคือร้านที่หน้าตาเหมือนแบรนด์ และทีมแบรนด์ดูแลเองได้ แบรนด์ที่กำลังเทียบตัวเลือกสำหรับการพัฒนาเว็บ Shopify ในประเทศไทย ดูงานที่ส่งมอบและเทคโนโลยีที่เลือกได้ด้านล่าง",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "เวลเนสและสกินแคร์"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์อีคอมเมิร์ซ (Shopify)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ถ่ายทอดตำแหน่งลักซ์ชัวรีของแบรนด์ ผ่านโครงสร้างและเลย์เอาต์ของเว็บ",
        "ออกแบบเส้นทางจากการเลือกดูไปถึงชำระเงินให้ลื่น ทั้งบนมือถือและบนจอคอม",
        "จัดสินค้าและคอลเลกชันให้ลูกค้าหาสิ่งที่ต้องการเจอได้ง่าย",
        "ให้ทีมแบรนด์จัดการสินค้า คอนเทนต์ และโปรโมชันบน Shopify ได้เอง",
        "คุมความเร็วของหน้าเว็บ เพราะภาพหนักๆ ทำให้ร้านลักซ์ชัวรีช้าได้",
        "เผื่อพื้นที่สำหรับสินค้าและคอลเลกชันใหม่เมื่อสายสินค้าโตขึ้น"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบออกแบบ UX/UI สำหรับเว็บไซต์อีคอมเมิร์ซของแบรนด์",
        "เว็บไซต์อีคอมเมิร์ซบน Shopify ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าสินค้า คอลเลกชัน และขั้นตอนชำระเงินเฉพาะของแบรนด์",
        "โครงสร้างสินค้าและการจัดหมวดหมู่",
        "ธีมและ component แบบเฉพาะ ปรับให้โหลดเร็ว",
        "ตั้งค่าหลังบ้านให้ทีมแบรนด์ดูแลร้านเองได้",
        "อบรมทีมแบรนด์เรื่องสินค้า คอนเทนต์ และโปรโมชัน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เรากำหนดประสบการณ์โดยรวม แผนผังหน้า และเส้นทางลูกค้า แล้วออกแบบหน้าจอสำคัญให้สะท้อนแบรนด์ก่อนเริ่มพัฒนา เรื่องความรู้สึกตัดสินใจกันบนหน้าจอ ไม่ใช่ระหว่างสร้าง"
        },
        {
          "title": "วางโครงสร้างสินค้า",
          "desc": "เราจัดหมวดหมู่ คอลเลกชัน และคุณสมบัติของสินค้า ให้ค้นหาและเปรียบเทียบง่าย ลูกค้าควรรู้ว่าสินค้าอยู่หมวดไหนก่อนจะเปิดดู"
        },
        {
          "title": "พัฒนาบน Shopify",
          "desc": "เราสร้างธีมและ component ตามดีไซน์ที่อนุมัติ ปรับให้เข้ากับแบรนด์ โดยคำนึงถึงความเร็วหน้าเว็บ ภาพถูกจัดการอย่างระวังให้ร้านยังเร็ว"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "เราทดสอบข้ามอุปกรณ์และทดสอบขั้นตอนสั่งซื้อก่อนส่งมอบและอบรม จากนั้นทีมแบรนด์รับช่วงดูแลสินค้า คอนเทนต์ และโปรโมชัน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Shopify เป็นแพลตฟอร์มร้านค้า สำหรับสินค้า การชำระเงิน และสต็อก",
        "ธีมและ component แบบเฉพาะด้วย Liquid",
        "ระบบออกแบบ UX/UI ที่ใช้ต่อลงในธีม",
        "ออกแบบจากมือถือเป็นหลัก",
        "ความเร็วหน้าเว็บและการปรับภาพ",
        "พื้นฐาน SEO สำหรับอีคอมเมิร์ซ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บอีคอมเมิร์ซที่ถ่ายทอดตำแหน่งลักซ์ชัวรีของแบรนด์",
        "เส้นทางการซื้อออกแบบให้ลื่นทั้งบนมือถือและจอคอม",
        "ทีมแบรนด์จัดการสินค้าและคอนเทนต์ผ่าน Shopify ได้เอง",
        "โครงสร้างพร้อมรองรับสินค้าและคอลเลกชันใหม่",
        "คำนึงถึงความเร็วหน้าเว็บและการจัดการภาพตั้งแต่เริ่มสร้าง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ทำไมต้องออกแบบ UX/UI ก่อนสร้างบน Shopify",
          "answer": "การออกแบบก่อนทำให้ทุกหน้าสะท้อนแบรนด์และเส้นทางซื้อชัดตั้งแต่ต้น ลดการแก้งานซ้ำระหว่างพัฒนา"
        },
        {
          "question": "Shopify เหมาะกับแบรนด์สกินแคร์และเวลเนสไหม",
          "answer": "เหมาะ Shopify รองรับแคตตาล็อกหลากหลาย การชำระเงิน และสต็อก และปรับให้เข้ากับอัตลักษณ์เฉพาะของแบรนด์ได้"
        },
        {
          "question": "ทีมแบรนด์จัดการเว็บเองได้ไหม",
          "answer": "ได้ เราตั้งค่าหลังบ้านและอบรมทีมให้เพิ่มสินค้า แก้คอนเทนต์ และจัดโปรโมชันเองได้"
        },
        {
          "question": "ธีม Shopify แบบเฉพาะได้อะไรเพิ่ม",
          "answer": "ธีมเฉพาะทำให้เลย์เอาต์เดินตามดีไซน์ของแบรนด์ ไม่ใช่เทมเพลต และเราคุมได้ว่าแต่ละหน้าโหลดอะไร ซึ่งช่วยเรื่องความเร็ว"
        },
        {
          "question": "ร้านที่ใช้ภาพหนักทำให้เร็วได้ยังไง",
          "answer": "เราปรับภาพและวางแผนความเร็วหน้าเว็บไว้ในธีมตั้งแต่ต้น ได้หน้าตาลักซ์ชัวรีโดยที่หน้าแรกไม่โหลดช้า"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์อื่นได้ไหม",
          "answer": "ได้ การออกแบบก่อนแล้วสร้างบน Shopify เหมาะกับแบรนด์ที่อยากได้ร้านเอกลักษณ์ที่ทีมดูแลเองได้ เราปรับธีมและโครงสร้างให้เข้ากับแต่ละแบรนด์"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/panpuri/cover.jpg"
    },
    "en": {
      "metaTitle": "Shopify Store Development for a Thai Wellness Brand | PAÑPURI",
      "metaDescription": "UX/UI design and a custom Shopify e-commerce site for PAÑPURI, a Thai luxury wellness and skincare brand, designed and built by Haliviq in Bangkok.",
      "h1": "PAÑPURI: UX/UI Design and Shopify E-commerce for a Wellness Brand",
      "client": "PAÑPURI",
      "badge": "Wellness",
      "servicesProvided": [
        "UX/UI Design",
        "Shopify E-commerce Website Development"
      ],
      "intro": "A luxury wellness and skincare brand sells a feeling before it sells a product, so its website has to show quality at a glance and then lead shoppers calmly to checkout. Haliviq handled both the UX/UI design and the Shopify development for PAÑPURI, designing the experience first and building to the approved design. The result is a store that looks like the brand and that the brand team can run on its own. Brands comparing options for Shopify e-commerce development in Thailand will find the deliverables and technical choices below.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Wellness & Skincare"
        },
        {
          "label": "Platform",
          "value": "E-commerce Website (Shopify)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Express the brand's luxury positioning through the structure and layout of the site.",
        "Design a smooth path from browsing to checkout on both mobile and desktop.",
        "Organize products and collections so shoppers find what they need without effort.",
        "Let the brand team manage products, content and promotions on Shopify independently.",
        "Keep pages fast, since heavy imagery can slow a luxury store down.",
        "Leave room for new products and collections as the range grows."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A UX/UI design system for the brand's e-commerce site",
        "A responsive Shopify e-commerce website",
        "Brand-specific product, collection and checkout flow pages",
        "Product structure and categorization",
        "A custom theme and components tuned for page speed",
        "Back-office setup so the brand team can run the store itself",
        "Training for the brand team on products, content and promotions"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "UX/UI design",
          "desc": "We defined the overall experience, the page map and the customer journey, then designed the key screens to reflect the brand before development began. Decisions about feel were made on screen, not mid-build."
        },
        {
          "title": "Product structure",
          "desc": "We organized categories, collections and product attributes so searching and comparing is easy. A shopper should know where a product belongs before looking."
        },
        {
          "title": "Shopify development",
          "desc": "We built the theme and components to the approved design, tailored to the brand, with page speed in mind. Images are handled carefully so the store stays quick."
        },
        {
          "title": "Testing and handover",
          "desc": "We tested across devices and tested the order flow before handover and training. The brand team then took over products, content and promotions."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Shopify, as the store platform for products, payments and inventory",
        "Custom theme and components in Liquid",
        "UX/UI design system carried through to the theme",
        "Mobile-first design",
        "Page speed and image optimization",
        "E-commerce SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "An e-commerce site launched that conveys the brand's luxury positioning.",
        "The purchase path is designed to feel smooth on mobile and desktop.",
        "The brand team manages products and content independently through Shopify.",
        "The structure is ready to take new products and collections.",
        "Page speed and image handling were considered from the start of the build."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "Why design UX/UI before building on Shopify?",
          "answer": "Designing first makes every page reflect the brand and the purchase path clear from the start, which reduces rework during development."
        },
        {
          "question": "Is Shopify a good fit for skincare and wellness brands?",
          "answer": "Yes. Shopify supports varied catalogs, payments and inventory, and it can be customized to a distinctive brand identity."
        },
        {
          "question": "Can the brand team manage the site themselves?",
          "answer": "Yes. We set up the back office and train the team to add products, edit content and run promotions independently."
        },
        {
          "question": "What does a custom Shopify theme add?",
          "answer": "A custom theme lets the layout follow the brand's design rather than a template. It also lets us control what loads on each page, which helps speed."
        },
        {
          "question": "How do you keep a store with heavy imagery fast?",
          "answer": "We optimize images and plan page speed into the theme from the start. This keeps the luxury look without a slow first load."
        },
        {
          "question": "Can this be adapted for other brands?",
          "answer": "Yes. The design-first approach and Shopify build suit other brands that need a distinctive store the team can run itself. We tailor the theme and structure to each brand."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/panpuri/cover.jpg"
    }
  },
  {
    "slug": "shanghai-mansion-bangkok",
    "industryTag": "Travel & Hospitality",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์โรงแรม จองห้องออนไลน์ กรุงเทพฯ | Shanghai Mansion",
      "metaDescription": "เว็บไซต์โรงแรมพร้อมระบบจองห้องออนไลน์ของ Shanghai Mansion Bangkok ที่ Haliviq ทำ มีแกลเลอรีห้อง เลือกวันที่ และรับการจองตรงจากเว็บ",
      "h1": "Shanghai Mansion Bangkok: เว็บไซต์โรงแรมพร้อมระบบจองห้องออนไลน์",
      "client": "Shanghai Mansion Bangkok",
      "badge": "ท่องเที่ยวและโรงแรม",
      "servicesProvided": [
        "ออกแบบและพัฒนาเว็บไซต์โรงแรม",
        "ระบบจองห้องพักออนไลน์"
      ],
      "intro": "โรงแรมบูติกต้องแข่งกับแพลตฟอร์มจองห้องขนาดใหญ่ แต่แขกที่จองผ่านเว็บของโรงแรมเอง ทำให้โรงแรมมีความสัมพันธ์กับแขกดีกว่าและคุมการเข้าพักได้มากกว่า Haliviq สร้างเว็บไซต์ Shanghai Mansion Bangkok พร้อมระบบจองห้องออนไลน์ ให้ผู้เข้าชมดูห้อง เลือกวันที่ และจองได้ในที่เดียว ภายใต้บรรยากาศของโรงแรมเอง มีหลังบ้านให้ทีมโรงแรมจัดการข้อมูลห้องและการจอง ถ้าคุณกำลังหาเว็บไซต์จองห้องพักสำหรับโรงแรมในกรุงเทพฯ หน้านี้สรุปงานที่ส่งมอบและแนวทางด้านเทคนิค",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "โรงแรมและการท่องเที่ยว"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์โรงแรมและระบบจองห้อง"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอบรรยากาศ ห้องพัก และอัตลักษณ์ของโรงแรมให้ชัดตั้งแต่หน้าแรก",
        "ให้แขกเช็กห้องและจองได้ง่ายบนมือถือ",
        "กระตุ้นให้จองตรงผ่านเว็บไซต์ของโรงแรม",
        "ให้ทีมโรงแรมจัดการข้อมูลห้องและการจองได้สะดวก",
        "แจ้งทีมทันทีเมื่อมีการจองเข้ามา จะได้ไม่มีการจองที่รอโดยไม่มีคนเห็น",
        "วางโครงสร้างเว็บให้เสิร์ชเอนจินอ่านออกว่าเป็นโรงแรมในกรุงเทพฯ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์โรงแรมที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าห้องพักที่มีรายละเอียดและแกลเลอรีภาพ",
        "ระบบจองออนไลน์ เลือกวันที่และประเภทห้อง",
        "เครื่องมือหลังบ้านสำหรับข้อมูลห้องและการจอง",
        "อีเมลแจ้งเตือนการจองไปยังทีมโรงแรม",
        "โครงสร้างเว็บที่เป็นมิตรกับ SEO สำหรับธุรกิจโรงแรม",
        "อบรมพนักงานโรงแรมเรื่องการใช้หลังบ้าน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจแขกและการจอง",
          "desc": "เราวิเคราะห์ว่าแขกตัดสินใจกันยังไง ตั้งแต่ดูห้องจนถึงยืนยันการจอง และข้อมูลไหนที่แขกต้องเห็นก่อน ใช้ตัดสินว่าแต่ละหน้าควรวางอะไรไว้ก่อน"
        },
        {
          "title": "ออกแบบเว็บไซต์",
          "desc": "เราออกแบบหน้าและการเล่าเรื่องให้สะท้อนบรรยากาศของโรงแรม โดยให้ปุ่มจองกดถึงได้จากทุกหน้า แขกที่พร้อมจองไม่ควรต้องมานั่งหาปุ่ม"
        },
        {
          "title": "พัฒนาระบบจอง",
          "desc": "เราสร้างขั้นตอนเลือกวันที่ ประเภทห้อง และข้อมูลแขก พร้อมแจ้งเตือนทีมโรงแรม ทุกการจองที่ส่งเข้ามาถึงพนักงานทางอีเมล เพื่อติดตามต่อ"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "เราทดสอบขั้นตอนจองข้ามอุปกรณ์ก่อนส่งมอบ และอบรมพนักงาน ทีมจึงจัดการห้องและการจองในหลังบ้านได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าห้องและหน้าจองโหลดเร็ว",
        "ระบบจองห้องออนไลน์ ครอบคลุมวันที่ ประเภทห้อง และข้อมูลแขก",
        "ระบบจัดการเนื้อหาห้องพัก พนักงานแก้ข้อมูลห้องเองได้",
        "อีเมลแจ้งเตือนการจองไปยังทีมโรงแรม",
        "Cloud hosting และ CDN ส่งภาพห้องพักได้เร็ว",
        "พื้นฐาน SEO สำหรับโรงแรม ทั้งชื่อหน้า หัวข้อ และโครงสร้างสำหรับคำค้นโรงแรมในพื้นที่"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่ถ่ายทอดอัตลักษณ์ของโรงแรม พร้อมช่องทางจองตรง",
        "แขกดูห้องและจองได้ในเว็บเดียว",
        "ทีมโรงแรมจัดการห้องและการจองได้สะดวกขึ้น",
        "การจองใหม่ถึงทีมผ่านอีเมลแจ้งเตือน",
        "โครงสร้างพร้อมสำหรับคำค้นโรงแรมในกรุงเทพฯ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ระบบจองบนเว็บไซต์ทำงานยังไง",
          "answer": "แขกเลือกวันที่และประเภทห้อง กรอกข้อมูล แล้วส่งการจอง ระบบจะแจ้งทีมโรงแรมให้ติดตามต่อ"
        },
        {
          "question": "ทำไมโรงแรมควรมีเว็บไซต์ที่จองตรงได้",
          "answer": "การจองตรงทำให้โรงแรมคุมประสบการณ์ของแขกและข้อมูลแขกได้เอง ไม่ต้องพึ่งแพลตฟอร์มภายนอกอย่างเดียว"
        },
        {
          "question": "พนักงานโรงแรมจัดการห้องเองได้ไหม",
          "answer": "ได้ ข้อมูลห้องและการจองจัดการผ่านเครื่องมือหลังบ้าน และเราอบรมพนักงานให้ใช้งานเป็น"
        },
        {
          "question": "เว็บใช้ดีบนมือถือไหม",
          "answer": "ดี แขกดูห้องและจองบนมือถือได้ และเราทดสอบขั้นตอนจองข้ามอุปกรณ์แล้ว"
        },
        {
          "question": "โรงแรมรู้ได้ยังไงว่ามีการจองเข้ามา",
          "answer": "ระบบส่งอีเมลแจ้งเตือนการจองไปยังทีมโรงแรมทันทีที่มีการส่งการจอง"
        },
        {
          "question": "ใช้แนวทางนี้กับโรงแรมหรือที่พักอื่นได้ไหม",
          "answer": "ได้ โครงสร้างเว็บและขั้นตอนจองปรับให้เข้ากับโรงแรมบูติก รีสอร์ต และที่พักขนาดเล็กได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/shanghai-mansion-bangkok/cover.jpg"
    },
    "en": {
      "metaTitle": "Hotel Website with Online Booking, Bangkok | Shanghai Mansion",
      "metaDescription": "Hotel website and online room booking system for Shanghai Mansion Bangkok by Haliviq: room galleries, date selection and direct reservations.",
      "h1": "Shanghai Mansion Bangkok: Hotel Website with Online Room Booking",
      "client": "Shanghai Mansion Bangkok",
      "badge": "Travel & Hospitality",
      "servicesProvided": [
        "Hotel Website Design & Development",
        "Online Room Booking System"
      ],
      "intro": "A boutique hotel competes with large booking platforms, but a guest who books on the hotel's own website gives the hotel a better relationship and more control over the stay. Haliviq built the Shanghai Mansion Bangkok website together with an online room booking system, so a visitor can look at rooms, pick dates and reserve in one place, all within the hotel's own atmosphere. A back office lets the hotel team manage room information and reservations. If you are looking for a hotel booking website in Bangkok, this page sets out the deliverables and technical approach.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Hospitality & Travel"
        },
        {
          "label": "Platform",
          "value": "Hotel Website + Booking Engine"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present the hotel's atmosphere, rooms and identity clearly, starting on the homepage.",
        "Let guests check rooms and book easily on a phone.",
        "Encourage direct bookings through the hotel's own website.",
        "Give the hotel team a convenient way to manage room information and reservations.",
        "Notify the team promptly when a booking comes in, so no reservation waits unseen.",
        "Build a site structure that search engines can read as a hotel in Bangkok."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive hotel website",
        "Room pages with details and photo galleries",
        "An online booking system for dates and room types",
        "Back-office tools for room information and reservations",
        "Booking email notifications to the hotel team",
        "An SEO-friendly site structure for a hotel business",
        "Training for hotel staff on the back office"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand guests and bookings",
          "desc": "We analyzed how guests decide, from viewing rooms to confirming a booking, and which information they need first. That decided what comes first on each page."
        },
        {
          "title": "Website design",
          "desc": "We designed pages and storytelling to reflect the hotel's atmosphere, with the booking action reachable from every page. A guest who is ready should never have to search for the button."
        },
        {
          "title": "Booking system development",
          "desc": "We built the flow for dates, room types and guest details, with notifications to the hotel team. Each submitted reservation reaches staff as an email so it can be followed up."
        },
        {
          "title": "Testing and handover",
          "desc": "We tested the booking flow across devices before handover and trained hotel staff. The team can now manage rooms and reservations in the back office."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast room and booking pages",
        "Online room booking engine, covering dates, room types and guest details",
        "Room content management, so staff can edit room information",
        "Booking email notifications to the hotel team",
        "Cloud hosting and CDN for quick delivery of room photography",
        "Hotel SEO foundations: titles, headings and structure for local hotel searches"
      ],
      "resultsHeading": "Results",
      "results": [
        "A website launched that conveys the hotel's identity and offers a direct booking channel.",
        "Guests can view rooms and book within a single site.",
        "The hotel team manages rooms and reservations more conveniently.",
        "New reservations reach the team by email notification.",
        "The structure is ready for Bangkok hotel search queries."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How does the booking system on the website work?",
          "answer": "Guests choose dates and a room type, enter their details and submit a reservation. The system notifies the hotel team so they can follow up."
        },
        {
          "question": "Why should a hotel have a direct-booking website?",
          "answer": "Direct bookings let the hotel control the guest experience and the guest data, instead of relying only on third-party platforms."
        },
        {
          "question": "Can hotel staff manage rooms themselves?",
          "answer": "Yes. Room information and reservations are handled in back-office tools, and we trained staff to use them."
        },
        {
          "question": "Does the site work well on mobile?",
          "answer": "Yes. Guests can view rooms and book on a phone, and we tested the booking flow across devices."
        },
        {
          "question": "How does the hotel know a booking came in?",
          "answer": "The system sends a booking email notification to the hotel team when a reservation is submitted."
        },
        {
          "question": "Can this be adapted for other hotels or accommodations?",
          "answer": "Yes. The site structure and booking flow can be tailored to boutique hotels, resorts and small properties."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/shanghai-mansion-bangkok/cover.jpg"
    }
  },
  {
    "slug": "jampha-shopping-mall",
    "industryTag": "Retail & SME",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ E-commerce และระบบ AI ค้าปลีก | Jampha",
      "metaDescription": "เว็บไซต์ E-commerce และผู้ช่วย AI ของ Jampha Shopping Mall ที่ Haliviq ทำ จัดสินค้าหลายร้าน สั่งซื้อบนมือถือง่าย และ AI ตอบคำถามลูกค้า",
      "h1": "Jampha Shopping Mall: เว็บไซต์ E-commerce และระบบ AI สำหรับค้าปลีก",
      "client": "Jampha Shopping Mall",
      "badge": "ค้าปลีกและ SME",
      "servicesProvided": [
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "ระบบ AI ช่วยงานปฏิบัติการและงานลูกค้า"
      ],
      "intro": "ห้างที่รวมร้านค้าและสินค้าท้องถิ่นไว้หลายร้าน เจอปัญหาที่ร้านเดียวไม่เจอ ทั้งการแสดงสินค้าจากหลายเจ้าให้ดูเข้าใจง่าย และการตอบคำถามสารพัดแบบจากลูกค้า Haliviq สร้างเว็บไซต์ E-commerce ให้ Jampha Shopping Mall พร้อมระบบ AI ที่ช่วยทั้งลูกค้าและทีมงาน ลูกค้าหาสินค้าเจอโดยไม่ต้องควานหา และพนักงานเสียเวลากับคำถามซ้ำๆ น้อยลง ถ้าธุรกิจของคุณกำลังคิดจะทำเว็บ E-commerce หรือผู้ช่วย AI สำหรับค้าปลีก หน้านี้สรุปงานที่เราส่งมอบและวิธีทำ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ค้าปลีกและชุมชน"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์อีคอมเมิร์ซและระบบ AI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอร้านค้าและสินค้าของห้างอย่างเป็นระเบียบ ค้นหาและซื้อได้ง่าย",
        "สร้างขั้นตอนสั่งซื้อที่ทำจบได้ง่ายบนมือถือ",
        "ใช้ AI ตอบคำถามลูกค้าและลดงานปฏิบัติการที่ซ้ำๆ",
        "จัดการสินค้าจากหลายร้านภายใต้โครงสร้างที่ยังชัดเจน",
        "ให้ทีมจัดการสินค้าและคอนเทนต์เองได้เมื่อเวลาผ่านไป",
        "ทำให้เว็บใช้ง่ายสำหรับลูกค้าหลายกลุ่ม รวมถึงคนที่คุ้นกับการซื้อของแบบดั้งเดิม"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ E-commerce ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "โครงสร้างสินค้าและหมวดหมู่ รองรับหลายร้านค้า",
        "ขั้นตอนสั่งซื้อและชำระเงิน",
        "ระบบ AI ช่วยตอบคำถามลูกค้าและงานปฏิบัติการ",
        "เครื่องมือหลังบ้านสำหรับสินค้าและคอนเทนต์",
        "พื้นฐาน SEO สำหรับ E-commerce บนหน้าสินค้า",
        "อบรมทีมเรื่องการจัดการร้านและ AI"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจธุรกิจและลูกค้า",
          "desc": "เราศึกษาโครงสร้างสินค้า โปรไฟล์ลูกค้า และงานซ้ำๆ ที่ทำในแต่ละวัน เพื่อกำหนดขอบเขตของทั้งเว็บและ AI"
        },
        {
          "title": "ออกแบบประสบการณ์การซื้อ",
          "desc": "เราออกแบบการเลือกดู ค้นหา และสั่งซื้อให้เหมาะกับลูกค้าชุมชนและคนที่คุ้นกับค้าปลีกแบบดั้งเดิม ขั้นตอนไม่ซับซ้อน คำที่ใช้เป็นภาษาง่ายๆ"
        },
        {
          "title": "พัฒนาระบบ E-commerce",
          "desc": "เราสร้างหน้าสินค้า ตะกร้า และชำระเงิน พร้อมเครื่องมือจัดการสินค้า พนักงานเพิ่มและแก้สินค้าได้เองโดยไม่ต้องมีนักพัฒนา"
        },
        {
          "title": "พัฒนาระบบ AI",
          "desc": "เราเพิ่ม AI ที่ตอบคำถามลูกค้าและช่วยงานปฏิบัติการ โดยใช้ข้อมูลของห้างเอง ในขอบเขตที่ชัดเจน เรื่องที่ต้องใช้วิจารณญาณส่งให้พนักงาน"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "เราทดสอบประสบการณ์ใช้งานและส่งมอบพร้อมอบรมทีม ทีมดูแลร้านและปรับข้อมูลให้ AI ได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้เลือกดูบนมือถือได้เร็ว",
        "ระบบ E-commerce และจัดการสินค้า ครอบคลุมตะกร้า ชำระเงิน และแคตตาล็อก",
        "ระบบ AI และ LLM สำหรับตอบคำถามและงานปฏิบัติการ ใช้ข้อมูลของห้างเอง",
        "Cloud hosting และ CDN ส่งภาพสินค้าได้เร็ว",
        "พื้นฐาน SEO สำหรับ E-commerce บนหน้าสินค้าและหน้าหมวด"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บ E-commerce ที่นำเสนอสินค้าของห้างอย่างเป็นระเบียบ",
        "ลูกค้ามีช่องทางถามคำถามผ่าน AI ได้ตลอดเวลา",
        "ทีมปฏิบัติการมีเครื่องมือที่ลดงานซ้ำๆ",
        "โครงสร้างพร้อมรองรับร้านค้าและสินค้าเพิ่ม",
        "ทีมจัดการสินค้าและคอนเทนต์ได้เองโดยไม่ต้องพึ่งนักพัฒนา"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI ในระบบนี้ช่วยเรื่องอะไร",
          "answer": "ช่วยตอบคำถามที่ลูกค้าถามบ่อย และช่วยงานปฏิบัติการ โดยใช้ข้อมูลของห้างเอง ส่วนเรื่องที่ต้องใช้วิจารณญาณ พนักงานเป็นคนดูแล"
        },
        {
          "question": "เหมาะกับธุรกิจค้าปลีกแบบดั้งเดิมไหม",
          "answer": "เหมาะ ประสบการณ์ใช้งานออกแบบให้ลูกค้าหลายกลุ่มใช้ง่าย และทีมจัดการเองได้โดยไม่ต้องมีพื้นฐานด้านเทคนิค"
        },
        {
          "question": "สินค้าจากหลายร้านจัดยังไง",
          "answer": "สินค้าอยู่ในโครงสร้างหมวดและสินค้าที่วางแผนไว้สำหรับหลายร้าน ลูกค้าเลือกดูตามประเภทได้ และทีมเพิ่มร้านใหม่ได้โดยไม่ต้องรื้อเว็บ"
        },
        {
          "question": "ลูกค้าสั่งซื้อจากมือถือได้ไหม",
          "answer": "ได้ ขั้นตอนสั่งซื้อออกแบบให้ง่ายบนมือถือ ตั้งแต่เลือกดูจนถึงชำระเงิน"
        },
        {
          "question": "ใครจัดการสินค้าและข้อมูลของ AI",
          "answer": "ทีมงานจัดการเองผ่านเครื่องมือหลังบ้าน เราอบรมให้จัดการสินค้าและคอนเทนต์ และ AI ทำงานจากข้อมูลของห้างเอง"
        },
        {
          "question": "ใช้แนวทางนี้กับห้างหรือตลาดอื่นได้ไหม",
          "answer": "ได้ โครงสร้าง E-commerce และระบบ AI ปรับให้เข้ากับห้าง ตลาด และธุรกิจ SME อื่นได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/jampha-shopping-mall/cover.jpg"
    },
    "en": {
      "metaTitle": "E-Commerce Website and AI System for Retail | Jampha Mall",
      "metaDescription": "E-commerce site and AI assistant for Jampha Shopping Mall by Haliviq: multi-vendor product structure, mobile ordering and AI for customer questions.",
      "h1": "Jampha Shopping Mall: E-commerce Website and AI System for Retail",
      "client": "Jampha Shopping Mall",
      "badge": "Retail & SME",
      "servicesProvided": [
        "E-commerce Website Development",
        "AI System for Operations & Customer Assistance"
      ],
      "intro": "A shopping mall that gathers many shops and local products faces problems a single store never meets: showing goods from several vendors in a way that makes sense, and answering questions of every kind from customers. Haliviq built the e-commerce website for Jampha Shopping Mall with an AI system that supports both customers and the team. Shoppers find products without hunting, and staff spend less time on repetitive questions. If your business is considering an e-commerce site or an AI assistant for retail, this page sets out what we delivered and how.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Retail & Community"
        },
        {
          "label": "Platform",
          "value": "E-commerce Website + AI System"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present the mall's shops and products in an organized way that is easy to search and buy from.",
        "Create an order flow that is easy to complete on a phone.",
        "Use AI to answer customer questions and reduce repetitive operational work.",
        "Handle products from different vendors under a structure that stays clear.",
        "Let the team manage products and content independently over time.",
        "Make the site easy for shoppers of varied backgrounds, including those used to traditional retail."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive e-commerce website",
        "A product and category structure for varied vendors",
        "An order and checkout flow",
        "An AI system that assists with customer questions and operations",
        "Back-office tools for products and content",
        "E-commerce SEO foundations for product pages",
        "Training for the team on managing the store and the AI"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand the business and customers",
          "desc": "We studied the product structure, the customer profile and the daily repetitive tasks, to decide the scope of both the website and the AI."
        },
        {
          "title": "Shopping experience design",
          "desc": "We designed browsing, search and ordering to suit community and traditional-retail shoppers. Steps are simple and wording is plain."
        },
        {
          "title": "E-commerce development",
          "desc": "We built product pages, the cart and checkout together with tools for managing products. Staff can add and edit items without a developer."
        },
        {
          "title": "AI system development",
          "desc": "We added AI that answers customer questions and assists operations using the mall's own information, inside a clear scope. Matters needing judgement go to staff."
        },
        {
          "title": "Testing and handover",
          "desc": "We tested the experience and handed over with team training. The team can run the store and adjust the AI's information on its own."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast browsing on phones",
        "E-commerce and product management, covering the cart, checkout and catalog",
        "AI and LLM system for Q&A and operations, based on the mall's own information",
        "Cloud hosting and CDN for quick delivery of product images",
        "E-commerce SEO foundations for product and category pages"
      ],
      "resultsHeading": "Results",
      "results": [
        "An e-commerce site launched that presents the mall's products in an organized way.",
        "Customers get an always-available way to ask questions through AI.",
        "The operations team has tools that reduce repetitive work.",
        "The structure is ready for more shops and products.",
        "The team manages products and content without developer help."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "What does the AI in this system help with?",
          "answer": "It helps answer common customer questions and supports operations using the mall's own information, while staff handle matters that need judgement."
        },
        {
          "question": "Is it suitable for traditional retail businesses?",
          "answer": "Yes. The experience is designed to be easy for varied shoppers, and the team can manage it without a technical background."
        },
        {
          "question": "How are products from different vendors organized?",
          "answer": "Products sit in a category and product structure planned for several vendors, so shoppers can browse by type and the team can add new vendors without reworking the site."
        },
        {
          "question": "Can customers order from their phones?",
          "answer": "Yes. The order flow was designed to be easy on mobile, from browsing to checkout."
        },
        {
          "question": "Who manages the products and AI information?",
          "answer": "The team does, through back-office tools. We trained them to manage products and content, and the AI works from the mall's own information."
        },
        {
          "question": "Can this be adapted for other malls or markets?",
          "answer": "Yes. The e-commerce structure and AI system can be tailored to other malls, markets and SME businesses."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/jampha-shopping-mall/cover.jpg"
    }
  },
  {
    "slug": "prima-marine",
    "industryTag": "Logistics & Marine",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์องค์กรบริษัทจดทะเบียน โลจิสติกส์ | Prima Marine",
      "metaDescription": "ดูงานเว็บไซต์องค์กรของ Prima Marine ที่ Haliviq ทำ จัดบริการและการดำเนินงานให้ชัดสำหรับลูกค้า พันธมิตร และนักลงทุน ทีมแก้ไขเนื้อหาเองได้",
      "h1": "Prima Marine: เว็บไซต์องค์กรของบริษัทโลจิสติกส์ทางทะเลที่จดทะเบียนในตลาดหลักทรัพย์",
      "client": "Prima Marine",
      "badge": "โลจิสติกส์และการขนส่งทางทะเล",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "intro": "Prima Marine เป็นบริษัทโลจิสติกส์ทางทะเลที่จดทะเบียนในตลาดหลักทรัพย์ เว็บไซต์จึงมีคนอ่านสามกลุ่มพร้อมกัน คือลูกค้าที่อยากรู้ว่าขนส่งอะไรได้บ้าง พันธมิตรที่ดูว่าบริษัททำงานยังไง และนักลงทุนที่หาบริษัทที่ไว้ใจได้ เราออกแบบและพัฒนาเว็บไซต์องค์กรที่เรียงบริการและการดำเนินงานให้ชัด สื่อถึงขนาดและความปลอดภัยโดยไม่ต้องโอ้อวด และทีมภายในดูแลเองได้ หน้านี้สรุปงานที่ส่งมอบ แนวทางทำงาน และเทคโนโลยี สำหรับธุรกิจที่กำลังหาดิจิทัลโปรดักต์สตูดิโอในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "โลจิสติกส์และการขนส่งทางทะเล"
        },
        {
          "label": "ขอบเขต",
          "value": "พัฒนาเว็บไซต์, ออกแบบ UX/UI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ Prima Marine ผ่านประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "ทำให้ข้อมูลสำคัญเรื่องบริการและการดำเนินงานหาง่ายบนทุกอุปกรณ์",
        "ให้ลูกค้า พันธมิตร และนักลงทุนใช้เว็บเดียวกันได้ โดยแต่ละกลุ่มมีทางไปถึงสิ่งที่มาหาชัดเจน",
        "สร้างเส้นทางที่ชัดให้ลูกค้าสอบถามหรือติดต่อ",
        "ให้ทีมมีเครื่องมือดูแลและต่อยอดสิ่งที่เราสร้าง",
        "ทำเว็บให้เร็วและเป็นมิตรกับการค้นหา ให้ค้นเจอทั้งจากชื่อบริษัทและจากบริการ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์องค์กรของ Prima Marine ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "งานออกแบบ UX/UI ครอบคลุมโครงสร้าง wireframe และหน้าตาเว็บ",
        "หน้าบริการและการดำเนินงาน จัดสำหรับผู้อ่านแต่ละกลุ่ม",
        "หน้าข้อมูลบริษัทที่เหมาะกับบริษัทจดทะเบียน",
        "ระบบจัดการเนื้อหาให้ทีมอัปเดตข่าวและบริการเอง",
        "พื้นฐาน SEO และประสิทธิภาพ",
        "ส่งมอบงานและอบรมทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาและวางแผนงาน",
          "desc": "เราศึกษาธุรกิจ กลุ่มผู้อ่าน และเป้าหมาย เพื่อกำหนดขอบเขตและตัวชี้วัดความสำเร็จ ลูกค้า พันธมิตร และนักลงทุนต้องการไม่เหมือนกัน เว็บต้องดูแลทุกกลุ่มอย่างเท่าเทียม"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบโครงสร้าง wireframe และหน้าตาเว็บ ให้ทุกหน้าชัดและใช้ง่าย ลำดับความสำคัญของเนื้อหาเรียงตามสิ่งที่ผู้อ่านแต่ละกลุ่มมองหาก่อน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ ให้ทีมอัปเดตได้เอง เนื้อหาอยู่ใน CMS แยกจากเลย์เอาต์"
        },
        {
          "title": "ทดสอบและเปิดตัว",
          "desc": "เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ แล้วเปิดตัวและส่งมอบให้ทีม พร้อมอบรมงานแก้ไขที่ทำเป็นประจำ"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บเร็วและเป็นระเบียบ",
        "Headless CMS สำหรับอัปเดตเนื้อหา โดยไม่ต้องแตะโค้ด",
        "Cloud hosting และ CDN ส่งเนื้อหาได้เสถียร",
        "พื้นฐาน SEO และประสิทธิภาพ",
        "ระบบดีไซน์ที่ responsive ให้ทุกหน้าทำงานสม่ำเสมอบนมือถือและจอคอม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บที่ดูดีและสะท้อนแบรนด์ Prima Marine",
        "ข้อมูลถูกจัดเป็นระเบียบ หาง่ายทั้งบนมือถือและจอคอม",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมอัปเดตเนื้อหาได้เองโดยไม่ต้องรอใคร",
        "ข้อมูลบริษัทและบริการจัดโครงสร้างให้ลูกค้า พันธมิตร และนักลงทุนใช้ได้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "เว็บไซต์รองรับความต้องการของบริษัทจดทะเบียนได้ไหม",
          "answer": "ได้ เราจัดโครงสร้างข้อมูลบริษัทและเนื้อหาบริการให้ชัด ลูกค้า พันธมิตร และนักลงทุนจะหาสิ่งที่ต้องการเจอ"
        },
        {
          "question": "ทีมอัปเดตเนื้อหาเองได้ไหม",
          "answer": "ได้ เนื้อหาจัดการผ่าน CMS พนักงานอัปเดตข่าวและบริการได้เองโดยไม่ต้องมีนักพัฒนา"
        },
        {
          "question": "ผู้อ่านหลายกลุ่มบนเว็บเดียวจัดยังไง",
          "answer": "เราจัดเมนูและลำดับหน้าตามสิ่งที่ผู้อ่านแต่ละกลุ่มมองหาก่อน ลูกค้าไปถึงบริการ นักลงทุนไปถึงข้อมูลบริษัท โดยไม่ต้องคุ้ยหาในหน้าของอีกกลุ่ม"
        },
        {
          "question": "เว็บใช้ได้บนมือถือไหม",
          "answer": "ได้ ระบบดีไซน์เป็นแบบ responsive และเราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ก่อนเปิดตัว"
        },
        {
          "question": "ตอนส่งมอบทีมจะได้อะไรบ้าง",
          "answer": "ได้ CMS ที่ใช้งานได้ และการอบรมวิธีอัปเดตเนื้อหา ทีมดูแลเว็บให้เป็นปัจจุบันได้เอง ไม่ต้องโทรหาเราทุกครั้งที่อยากแก้"
        },
        {
          "question": "เว็บทำมาให้ค้นเจอใน Google ไหม",
          "answer": "ทำ เราวางพื้นฐาน SEO และประสิทธิภาพ ทั้งโครงสร้างหน้า ชื่อหน้า และความเร็ว ให้ค้นเจอบริษัททั้งจากชื่อและจากบริการ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/prima-marine/cover.jpg"
    },
    "en": {
      "metaTitle": "Listed Logistics Company Website | Prima Marine",
      "metaDescription": "Prima Marine's corporate website by Haliviq: a clear structure for services and operations, built for customers, partners and investors, editable in-house.",
      "h1": "Prima Marine: Corporate Website for a Listed Marine Logistics Company",
      "client": "Prima Marine",
      "badge": "Logistics & Marine",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "intro": "Prima Marine is a publicly listed marine logistics company, so its website is read by three audiences at once: customers who want to know what it can carry, partners checking how it operates and investors looking for a company they can trust. We designed and built a corporate website that sets out services and operations in a clear order, conveys scale and safety without shouting, and can be maintained by the in-house team. The page below describes the deliverables, our approach and the technology, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Logistics & Marine"
        },
        {
          "label": "Scope",
          "value": "Website Development, UX/UI Design"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the Prima Marine brand through a clear, professional experience.",
        "Make key information about services and operations easy to find on any device.",
        "Serve customers, partners and investors from one site, each with a clear route to what they came for.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built.",
        "Keep the site fast and search-friendly so that the company can be found by name and by service."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive corporate website for Prima Marine",
        "UX/UI design covering structure, wireframes and the visual interface",
        "Service and operations pages organized for different audiences",
        "Company information pages suited to a listed company",
        "Content management for the team, to update news and services",
        "SEO and performance foundations",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery and research",
          "desc": "We studied the business, its audiences and its goals to define the scope and what success looks like. Customers, partners and investors want different things, and the site had to treat each fairly."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the structure, wireframes and visual interface so every page is clear and easy to use. Hierarchy follows what each audience looks for first."
        },
        {
          "title": "Website development",
          "desc": "We built a fast, responsive website the team can update. Content sits in a CMS, separate from the layout."
        },
        {
          "title": "Testing and launch",
          "desc": "We tested across devices and browsers, launched the site and handed it over to the team. Training covered the everyday editing tasks."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for fast and structured pages",
        "Headless CMS for content updates, edited without touching code",
        "Cloud hosting and CDN for dependable delivery",
        "SEO and performance foundations",
        "Responsive design system, so every page behaves consistently on phones and desktops"
      ],
      "resultsHeading": "Results",
      "results": [
        "A polished site launched that reflects the Prima Marine brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently.",
        "Company and service information is structured for customers, partners and investors."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "Can the website support a listed company's needs?",
          "answer": "Yes. We structure company information and service content clearly so customers, partners and investors can find what they need."
        },
        {
          "question": "Can the team update content themselves?",
          "answer": "Yes. Content is managed through a CMS, so staff can update news and services without a developer."
        },
        {
          "question": "How do you handle different audiences on one site?",
          "answer": "We organize navigation and page hierarchy around what each audience looks for first. A customer reaches services, an investor reaches company information, and neither has to dig through the other's pages."
        },
        {
          "question": "Does the site work on phones?",
          "answer": "Yes. The design system is responsive, and we tested across devices and browsers before launch."
        },
        {
          "question": "What does the team get at handover?",
          "answer": "A working CMS and training on updating content. The team can keep the site current without calling us for every change."
        },
        {
          "question": "Is the site built to be found in search?",
          "answer": "Yes. We put SEO and performance foundations in place: clear page structure, titles and fast loading, so the company can be found by name and by service."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/prima-marine/cover.jpg"
    }
  },
  {
    "slug": "baan-khanitha",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ร้านอาหารไทย ดูเมนูและจองโต๊ะ | Baan Khanitha",
      "metaDescription": "ดูงานเว็บไซต์ Baan Khanitha Thai Cuisine ที่ Haliviq ทำ เว็บเรียบหรูเน้นมือถือสำหรับเมนู สาขา และการจอง ทีมงานแก้เมนูเองได้",
      "h1": "Baan Khanitha Thai Cuisine: เว็บไซต์ของร้านอาหารไทยชื่อดัง",
      "client": "Baan Khanitha Thai Cuisine",
      "badge": "ร้านอาหารและเครื่องดื่ม",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "intro": "คนรู้จัก Baan Khanitha จากบรรยากาศและฝีมืออาหารไทย เว็บไซต์ของร้านแบบนี้จึงต้องมีความรู้สึกแบบนั้น และยังต้องตอบคำถามที่ใช้จริงได้ด้วย ว่ามีเมนูอะไร สาขาอยู่ตรงไหน และจองยังไง เราออกแบบประสบการณ์ตามบุคลิกของร้าน และสร้างเว็บที่เรียบหรูและเลือกดูง่าย ครอบคลุมเมนู สาขา และการจอง เพราะคนส่วนใหญ่ดูร้านอาหารบนมือถือ เว็บจึงออกแบบจากมือถือก่อน หน้านี้สรุปงานที่ส่งมอบและแนวทางทำงาน สำหรับธุรกิจที่กำลังหาดิจิทัลโปรดักต์สตูดิโอในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ร้านอาหารและเครื่องดื่ม"
        },
        {
          "label": "ขอบเขต",
          "value": "พัฒนาเว็บไซต์, ออกแบบ UX/UI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ Baan Khanitha Thai Cuisine ผ่านประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "ให้เมนูและข้อมูลสำคัญหาง่ายบนทุกอุปกรณ์ โดยเฉพาะบนมือถือ",
        "แสดงสาขาและช่องทางจองให้ชัด ลูกค้าจะวางแผนไปร้านได้ในหนึ่งนาที",
        "สร้างเส้นทางที่ชัดให้ลูกค้าสอบถามหรือติดต่อ",
        "ให้ทีมมีเครื่องมือดูแลและต่อยอดสิ่งที่เราสร้าง",
        "รองรับการค้นหาในพื้นที่ ให้คนที่อยู่ใกล้ๆ ค้นเจอร้าน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ร้านอาหารที่ออกแบบจากมือถือก่อน และแสดงผลได้ดีทุกขนาดหน้าจอ",
        "งานออกแบบ UX/UI ทั้งโครงสร้าง wireframe และหน้าตาเว็บ",
        "หน้าเมนูที่ทีมแก้ไขเองได้ รวมถึงจานและโปรโมชัน",
        "ช่องทางดูสาขา และจองหรือติดต่อ",
        "ระบบจัดการเนื้อหาสำหรับทีม",
        "พื้นฐาน SEO สำหรับการค้นหาในพื้นที่",
        "ส่งมอบงานและอบรมทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาและวางแผนงาน",
          "desc": "เราศึกษาร้าน ลูกค้าของร้าน และเป้าหมาย เพื่อกำหนดขอบเขตและตัวชี้วัดความสำเร็จ บุคลิกของร้านทั้งอาหารและบรรยากาศเป็นตัวนำการตัดสินใจหลังจากนั้น"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบโครงสร้าง wireframe และหน้าตาเว็บ ให้ทุกหน้าชัดและใช้ง่าย เมนู สาขา และการจอง อยู่ลำดับบนสุด"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ ทีมอัปเดตได้ง่าย เนื้อหาเมนูอยู่ใน CMS เปลี่ยนจานก็ไม่กระทบเลย์เอาต์"
        },
        {
          "title": "ทดสอบและเปิดตัว",
          "desc": "เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ เปิดตัวและส่งมอบให้ทีม พนักงานได้เรียนวิธีเปลี่ยนจานและโปรโมชัน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้หน้าเว็บโหลดเร็วบนมือถือ",
        "Headless CMS สำหรับเมนูและเนื้อหา มีหน้าแก้ไขสำหรับพนักงาน",
        "เชื่อมการจองและการติดต่อ พาลูกค้าไปถึงร้านได้",
        "Cloud hosting และ CDN ส่งภาพอาหารได้เร็ว",
        "พื้นฐาน SEO ท้องถิ่น ให้คนที่ค้นหาในบริเวณใกล้เคียงเจอร้านได้"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บที่ดูดีและสะท้อนแบรนด์ Baan Khanitha Thai Cuisine",
        "ข้อมูลถูกจัดเป็นระเบียบ หาง่ายทั้งบนมือถือและจอคอม",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมอัปเดตเมนูและเนื้อหาได้เองโดยไม่ต้องรอใคร",
        "เว็บจัดโครงสร้างสำหรับการค้นหาร้านอาหารในพื้นที่"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "อัปเดตเมนูง่ายไหม",
          "answer": "ง่าย เมนูและเนื้อหาจัดการผ่าน CMS ทีมอัปเดตจานและโปรโมชันได้เอง"
        },
        {
          "question": "เว็บใช้ดีบนมือถือไหม",
          "answer": "ดี เราออกแบบจากมือถือก่อน เพราะคนส่วนใหญ่ดูร้านอาหารผ่านมือถือ"
        },
        {
          "question": "ลูกค้าจองหรือติดต่อร้านจากเว็บได้ไหม",
          "answer": "ได้ เว็บมีช่องทางจองหรือติดต่อ ลูกค้าที่เลือกสาขาแล้วทำขั้นต่อไปได้ทันที"
        },
        {
          "question": "เว็บแสดงหลายสาขาไหม",
          "answer": "เว็บแสดงสาขาของร้านให้ชัด ผู้เข้าชมเห็นว่าไปที่ไหน ข้อมูลสาขาเป็นเนื้อหาที่ทีมดูแลได้"
        },
        {
          "question": "เว็บช่วยเรื่องการค้นหาในพื้นที่ยังไง",
          "answer": "เราวางพื้นฐาน SEO ท้องถิ่น ทั้งชื่อหน้าที่ชัด เนื้อหามีโครงสร้าง และหน้าเว็บเร็ว ช่วยให้คนในบริเวณใกล้เคียงค้นเจอร้าน"
        },
        {
          "question": "ใครดูแลเว็บหลังเปิดตัว",
          "answer": "ทีมของร้านดูแลเองได้หลังส่งมอบและอบรม แก้เมนูและเนื้อหาได้โดยไม่ต้องเรียกนักพัฒนา"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/baan-khanitha/cover.jpg"
    },
    "en": {
      "metaTitle": "Thai Restaurant Website with Menu and Booking | Baan Khanitha",
      "metaDescription": "Baan Khanitha Thai Cuisine's website by Haliviq: an elegant, mobile-first site for menus, locations and reservations, with menu editing by the team.",
      "h1": "Baan Khanitha Thai Cuisine: Website for a Renowned Thai Restaurant",
      "client": "Baan Khanitha Thai Cuisine",
      "badge": "F&B",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "intro": "People know Baan Khanitha for its dining atmosphere and its Thai cooking, and a website for such a place has to carry that feeling and still answer practical questions: what is on the menu, where are the branches, how do I book? We designed the experience around the restaurant's character and built an elegant, easy-to-browse site covering menus, locations and reservations. Since most restaurant visitors look on a phone, it is mobile-first. This page summarizes the deliverables and our approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Scope",
          "value": "Website Development, UX/UI Design"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the Baan Khanitha Thai Cuisine brand through a clear, professional experience.",
        "Make menus and key information easy to find on any device, especially on phones.",
        "Show locations and ways to reserve clearly, so a guest can plan a visit in a minute.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built.",
        "Support local search so the restaurant can be found by people nearby."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "A responsive restaurant website, designed mobile-first",
        "UX/UI design with structure, wireframes and visual interface",
        "Menu pages the team can edit, including dishes and promotions",
        "Location and reservation or contact paths",
        "Content management for the team",
        "Local SEO foundations",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery and research",
          "desc": "We studied the restaurant, its guests and its goals to define scope and success criteria. The restaurant's character, in both its food and its setting, guided the choices that followed."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the structure, wireframes and visual interface so every page is clear and easy to use. Menus, locations and booking sit at the top of the hierarchy."
        },
        {
          "title": "Website development",
          "desc": "We built a fast, responsive website that is easy for the team to update. Menu content lives in a CMS, so a change of dish does not touch the layout."
        },
        {
          "title": "Testing and launch",
          "desc": "We tested across devices and browsers, launched and handed over to the team. Staff were shown how to change dishes and promotions."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for quick page loads on phones",
        "Headless CMS for menus and content, with an editing screen for staff",
        "Reservation and contact integration, linking guests to the restaurant",
        "Cloud hosting and CDN for quick delivery of food photography",
        "Local SEO foundations, so nearby searches can find the restaurant"
      ],
      "resultsHeading": "Results",
      "results": [
        "A polished site launched that reflects the Baan Khanitha Thai Cuisine brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep menus and content up to date independently.",
        "The site is structured for local restaurant searches."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "Can the menu be updated easily?",
          "answer": "Yes. Menu and content are managed through a CMS, so the team can update dishes and promotions themselves."
        },
        {
          "question": "Does the site work well on mobile?",
          "answer": "Yes. The design is built mobile-first because most restaurant visitors browse on their phones."
        },
        {
          "question": "Can guests reserve or contact the restaurant from the site?",
          "answer": "Yes. The site includes reservation or contact paths, so a guest who has chosen a branch can take the next step straight away."
        },
        {
          "question": "Does the site show multiple locations?",
          "answer": "The site presents the restaurant's locations clearly, so visitors can see where to go. Location information is part of the content the team can maintain."
        },
        {
          "question": "How does the site help local search?",
          "answer": "We put local SEO foundations in place, including clear titles, structured content and fast pages, which help people nearby find the restaurant."
        },
        {
          "question": "Who maintains the website after launch?",
          "answer": "The restaurant's own team can, after handover and training. They edit menus and content without calling a developer."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/baan-khanitha/cover.jpg"
    }
  },
  {
    "slug": "dsk",
    "industryTag": "Beauty & Aesthetics",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์คลินิกเสริมความงาม พร้อม AI CRM | DSK",
      "metaDescription": "ดูงานเว็บไซต์ศัลยกรรมความงามและ AI CRM ของ DSK ที่ Haliviq ทำ มีที่ปรึกษาธุรกิจ ออกแบบ UX/UI รับคำสอบถาม และดูแลข้อมูลลูกค้าตาม PDPA",
      "h1": "DSK: เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกเสริมความงาม",
      "client": "DSK",
      "badge": "ความงามและศัลยกรรม",
      "servicesProvided": [
        "ให้คำปรึกษาธุรกิจ",
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "CRM ที่มี AI ช่วย"
      ],
      "intro": "ธุรกิจศัลยกรรมความงามสร้างความไว้ใจกันตั้งแต่ก่อนมาปรึกษาครั้งแรก และส่วนใหญ่เกิดขึ้นบนเว็บไซต์ DSK ยังอยากได้วิธีจัดการและติดตามคำสอบถามที่น่าไว้ใจกว่าเดิมด้วย เราเริ่มจากให้คำปรึกษาด้านธุรกิจ แล้วออกแบบเว็บไซต์และ UX/UI ที่เรียบหรู และเพิ่ม AI CRM ที่ช่วยจัดระเบียบคำสอบถามและเตือนให้ติดตาม พนักงานยังเป็นคนดูแลการปรึกษาและการคุยกับลูกค้าเอง หน้านี้สรุปงานที่ส่งมอบและแนวทางทำงาน สำหรับธุรกิจที่กำลังหาดิจิทัลโปรดักต์สตูดิโอในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ความงามและศัลยกรรม"
        },
        {
          "label": "ขอบเขต",
          "value": "ให้คำปรึกษาธุรกิจ, ออกแบบเว็บไซต์, ออกแบบ UX/UI, CRM ที่มี AI ช่วย"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ DSK ผ่านประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "สร้างความไว้ใจด้วยเว็บที่ประณีต ดูใส่ใจเท่ากับงานที่เว็บเล่าถึง",
        "ทำให้ข้อมูลสำคัญหาง่ายบนทุกอุปกรณ์",
        "เก็บคำสอบถามและคำขอนัดหมายไว้ที่เดียว แทนข้อความที่กระจัดกระจาย",
        "ติดตามทุกคำสอบถามอย่างสม่ำเสมอด้วย AI ช่วย ส่วนการคุยกันเป็นหน้าที่ของพนักงาน",
        "ดูแลข้อมูลลูกค้าอย่างระมัดระวังตาม PDPA และให้ทีมมีเครื่องมือดูแลสิ่งที่เราสร้าง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ให้คำปรึกษาด้านธุรกิจเรื่องกลยุทธ์ดิจิทัล",
        "ออกแบบเว็บไซต์",
        "งานออกแบบ UX/UI ทั้งโครงสร้าง wireframe และหน้าตาเว็บ",
        "AI CRM สำหรับคำสอบถามและการติดตาม",
        "การเก็บคำสอบถามและนัดหมายที่ต่อเข้า CRM",
        "ระบบจัดการเนื้อหาสำหรับทีม",
        "ส่งมอบงานและอบรมทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ให้คำปรึกษาด้านธุรกิจ",
          "desc": "เราให้คำแนะนำเรื่องกลยุทธ์ดิจิทัล และเรื่องที่เว็บควรช่วยเป้าหมายของธุรกิจยังไง ทำให้ชัดว่าเว็บทำเพื่อใคร และควรพาคนเหล่านั้นไปทำอะไร"
        },
        {
          "title": "ศึกษาและวางแผนงาน",
          "desc": "เราศึกษาธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบโครงสร้าง wireframe และหน้าตาเว็บ ให้ทุกหน้าชัดและใช้ง่าย น้ำเสียงสงบและพิถีพิถัน ตามที่เรื่องนี้ควรเป็น"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ ให้ทีมอัปเดตได้ง่าย"
        },
        {
          "title": "เชื่อม AI และ CRM",
          "desc": "เราเพิ่ม AI CRM ให้คำสอบถามถูกเก็บ จัดระเบียบ และติดตามอย่างสม่ำเสมอ AI เสนอการติดตาม ส่วนพนักงานเป็นคนตัดสินใจว่าจะทำอะไร"
        },
        {
          "title": "ทดสอบและเปิดตัว",
          "desc": "เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ เปิดตัวและส่งมอบให้ทีม"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้เว็บเร็วและดูประณีต",
        "แพลตฟอร์ม CRM ที่มี AI ช่วย จัดระเบียบคำสอบถามและเสนอการติดตาม",
        "การเก็บคำสอบถามและนัดหมาย ส่งเข้า CRM โดยตรง",
        "Cloud hosting และ CDN ส่งเนื้อหาได้เสถียร",
        "SEO และ analytics ที่คำนึงถึงความเป็นส่วนตัว"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บที่ดูดีและสะท้อนแบรนด์ DSK",
        "ข้อมูลถูกจัดเป็นระเบียบ หาง่ายทั้งบนมือถือและจอคอม",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมอัปเดตเนื้อหาได้เองโดยไม่ต้องรอใคร",
        "คำสอบถามไหลเข้า CRM ที่ช่วยให้พนักงานติดตามได้สม่ำเสมอ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI ใน CRM ทำอะไร",
          "answer": "ช่วยจัดระเบียบคำสอบถามและเสนอการติดตาม ส่วนพนักงานยังเป็นผู้ดูแลการปรึกษาและการสื่อสารกับลูกค้า"
        },
        {
          "question": "ข้อมูลลูกค้าถูกดูแลยังไง",
          "answer": "ข้อมูลลูกค้าจัดการตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และจำกัดการเข้าถึงเฉพาะพนักงานที่ได้รับอนุญาต"
        },
        {
          "question": "ทำไมเริ่มจากการให้คำปรึกษาด้านธุรกิจ",
          "answer": "เว็บไซต์ทำงานได้ดีกว่าเมื่อผูกกับเป้าหมายที่ชัด การปรึกษาก่อนช่วยตัดสินว่าเว็บทำเพื่อใคร และ CRM ต้องติดตามอะไร"
        },
        {
          "question": "คำสอบถามถูกเก็บยังไง",
          "answer": "ฟอร์มสอบถามและนัดหมายบนเว็บส่งคำขอเข้า CRM จึงถูกบันทึกไว้ที่เดียว และติดตามต่อได้"
        },
        {
          "question": "ทีมอัปเดตเนื้อหาเว็บเองได้ไหม",
          "answer": "ได้ เนื้อหาจัดการให้ทีมอัปเดตข้อมูลได้เอง และเรามีอบรมตอนส่งมอบ"
        },
        {
          "question": "ใช้แนวทางนี้กับคลินิกหรือธุรกิจบริการอื่นได้ไหม",
          "answer": "ได้ การจับคู่เว็บที่ประณีตกับ AI CRM เหมาะกับคลินิกและธุรกิจที่ใช้การนัดหมาย เราปรับหน้าเว็บและ CRM ให้เข้ากับแต่ละธุรกิจและกฎเรื่องข้อมูล"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/dsk/cover.jpg"
    },
    "en": {
      "metaTitle": "Aesthetic Clinic Website and AI-Assisted CRM | DSK",
      "metaDescription": "DSK's aesthetic surgery website and AI-assisted CRM by Haliviq: business consulting, UX/UI design, enquiry capture and PDPA-conscious customer data handling.",
      "h1": "DSK: Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic",
      "client": "DSK",
      "badge": "Beauty & Aesthetics",
      "servicesProvided": [
        "Business Consulting",
        "Website Design",
        "UX/UI Design",
        "AI-Assisted CRM"
      ],
      "intro": "For an aesthetic surgery business, trust is built before the first consultation, and much of it happens on the website. DSK also wanted a more dependable way to handle and follow up on enquiries. We began with business consulting, then designed an elegant website and its UX/UI, and added an AI-assisted CRM that organizes enquiries and prompts follow-ups. Staff stay in charge of consultations and conversations with customers. This page summarizes the deliverables and our approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Beauty & Aesthetics"
        },
        {
          "label": "Scope",
          "value": "Business Consulting, Website Design, UX/UI Design, AI-Assisted CRM"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the DSK brand through a clear, professional experience.",
        "Build trust through a refined website that looks as careful as the work it describes.",
        "Make key information easy to find on any device.",
        "Capture enquiries and appointment requests in one place instead of scattered messages.",
        "Follow up on every enquiry consistently with the help of AI assistance, leaving the conversation itself to staff.",
        "Handle customer data with care, in line with PDPA, and give the team tools to maintain what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Business consulting on digital strategy",
        "Website design",
        "UX/UI design with structure, wireframes and visual interface",
        "An AI-assisted CRM for enquiries and follow-ups",
        "Enquiry and appointment capture connected to the CRM",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business consulting",
          "desc": "We advised on digital strategy and on how the website should support the business's goals. This clarified who the site is for and what it should lead them to do."
        },
        {
          "title": "Discovery and research",
          "desc": "We studied the business, audience and goals to define scope and success criteria."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the structure, wireframes and visual interface so every page is clear and easy to use. The tone is calm and considered, as the subject calls for."
        },
        {
          "title": "Website development",
          "desc": "We built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "AI and CRM integration",
          "desc": "We added an AI-assisted CRM so enquiries are captured, organized and followed up consistently. The AI proposes follow-ups, and staff decide what to do."
        },
        {
          "title": "Testing and launch",
          "desc": "We tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for a fast and refined site",
        "CRM platform with AI assistance, for organizing enquiries and suggesting follow-ups",
        "Enquiry and appointment capture feeding straight into the CRM",
        "Cloud hosting and CDN for dependable delivery",
        "SEO and privacy-conscious analytics"
      ],
      "resultsHeading": "Results",
      "results": [
        "A polished site launched that reflects the DSK brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently.",
        "Enquiries now flow into a CRM that helps staff follow up consistently."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "What does the AI in the CRM do?",
          "answer": "It helps organize enquiries and suggest follow-ups. Staff remain in charge of consultations and customer communication."
        },
        {
          "question": "How is customer data handled?",
          "answer": "Customer information is handled in line with applicable data protection law (PDPA), with access limited to authorized staff."
        },
        {
          "question": "Why start with business consulting?",
          "answer": "A website works better when it is tied to a clear aim. Consulting first helps decide who the site is for and what the CRM needs to track."
        },
        {
          "question": "How are enquiries captured?",
          "answer": "The website's enquiry and appointment forms send requests into the CRM, so they are recorded in one place and can be followed up."
        },
        {
          "question": "Can the team update the website content?",
          "answer": "Yes. Content is managed so the team can keep information current, and we provided training at handover."
        },
        {
          "question": "Can this be adapted for other clinics or service businesses?",
          "answer": "Yes. The pairing of a refined website with an AI-assisted CRM suits other clinics and appointment-based businesses. We adapt the pages and the CRM to each business and its data rules."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/dsk/cover.jpg"
    }
  },
  {
    "slug": "admire",
    "industryTag": "Real Estate & Construction",
    "year": "2025",
    "th": {
      "metaTitle": "ทำเว็บไซต์ผู้รับสร้างบ้าน พร้อม AI CRM | Admire",
      "metaDescription": "ดูงานเว็บไซต์แบบบ้านและ AI CRM ของ Admire ที่ Haliviq ทำ มีแกลเลอรีแบบบ้านให้ลูกค้าดู และ CRM ที่ช่วยให้ติดตามทุกคำสอบถามไม่ตกหล่น",
      "h1": "Admire: เว็บไซต์ UX/UI และ AI CRM สำหรับผู้รับสร้างบ้านตามสั่ง",
      "client": "Admire",
      "badge": "อสังหาริมทรัพย์และก่อสร้าง",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "CRM ที่มี AI ช่วย"
      ],
      "intro": "คนที่วางแผนสร้างบ้านตามสั่งไม่รีบตัดสินใจ เขาจะดูแบบ เทียบผู้รับสร้างหลายเจ้า และกลับมาดูมากกว่าหนึ่งครั้ง Admire ต้องการเว็บที่โชว์ผลงานได้ดี และวิธีที่ทำให้คำสอบถามที่น่าสนใจไม่ถูกปล่อยให้ค้าง เราออกแบบ UX/UI ที่มีแบบบ้านเป็นศูนย์กลาง สร้างเว็บไซต์ และเพิ่ม AI CRM ที่เก็บและติดตามทุกคำสอบถาม CRM ทำให้เห็นงานชัด ส่วนพนักงานขายยังเป็นคนคุยกับลูกค้า หน้านี้สรุปงานที่ส่งมอบและแนวทางทำงาน สำหรับธุรกิจที่กำลังหาดิจิทัลโปรดักต์สตูดิโอในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "อสังหาริมทรัพย์และก่อสร้าง"
        },
        {
          "label": "ขอบเขต",
          "value": "ออกแบบ UX/UI, พัฒนาเว็บไซต์, CRM ที่มี AI ช่วย"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "3"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ Admire ผ่านประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "โชว์แบบบ้านและโปรเจกต์ในแกลเลอรีที่ลูกค้าเลือกดูตามจังหวะของตัวเอง",
        "ทำให้ข้อมูลสำคัญหาง่ายบนทุกอุปกรณ์",
        "สร้างเส้นทางที่ชัดให้ลูกค้าสอบถามหรือติดต่อ",
        "เก็บทุกคำสอบถามไว้ที่เดียวและติดตามให้ทันเวลา ไม่ให้ลูกค้าที่สนใจหลุดไป",
        "ให้ทีมมีเครื่องมือดูแลและต่อยอดสิ่งที่เราสร้าง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "งานออกแบบ UX/UI ที่มีแบบบ้านเป็นศูนย์กลาง",
        "พัฒนาเว็บไซต์",
        "แกลเลอรีโปรเจกต์และแบบบ้านที่จัดการผ่าน CMS",
        "AI CRM สำหรับเก็บและติดตามคำสอบถาม",
        "ระบบจัดการเนื้อหาสำหรับทีม",
        "พื้นฐาน SEO สำหรับหน้าแบบบ้านและหน้าโปรเจกต์",
        "ส่งมอบงานและอบรมทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาและวางแผนงาน",
          "desc": "เราศึกษาธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตและตัวชี้วัดความสำเร็จ คนที่สร้างบ้านตามสั่งใช้เวลาตัดสินใจนาน ซึ่งกำหนดว่าเว็บกับ CRM ต้องทำงานร่วมกันยังไง"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบโครงสร้าง wireframe และหน้าตาเว็บ โดยมีแบบบ้านเป็นแกน ผู้เข้าชมเดินดูแบบต่างๆ ได้ง่าย และทุกหน้ามีขั้นต่อไปที่เห็นชัด"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ ให้ทีมอัปเดตได้ง่าย แบบบ้านและโปรเจกต์จัดการผ่าน CMS"
        },
        {
          "title": "เชื่อม AI และ CRM",
          "desc": "เราเพิ่ม AI CRM ให้คำสอบถามถูกเก็บ จัดระเบียบ และติดตามอย่างสม่ำเสมอ การเตือนและการจัดลำดับความสำคัญช่วยไม่ให้ลูกค้าที่สนใจนอนค้างโดยไม่มีคนเห็น"
        },
        {
          "title": "ทดสอบและเปิดตัว",
          "desc": "เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ เปิดตัวและส่งมอบให้ทีม"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้เว็บที่เต็มไปด้วยภาพโหลดเร็ว",
        "CRM ที่มี AI ช่วย จัดลำดับลูกค้าและเตือนการติดตาม",
        "แกลเลอรีโปรเจกต์และแบบบ้านพร้อม CMS ที่ทีมแก้ไขเองได้",
        "Cloud hosting และ CDN ส่งภาพได้เร็ว",
        "พื้นฐาน SEO"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บที่ดูดีและสะท้อนแบรนด์ Admire",
        "ข้อมูลถูกจัดเป็นระเบียบ หาง่ายทั้งบนมือถือและจอคอม",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมเพิ่มและอัปเดตแบบบ้านและโปรเจกต์ได้เอง",
        "คำสอบถามถูกเก็บไว้ใน CRM เดียว พร้อมการเตือนให้ติดตาม"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI CRM ช่วยผู้รับสร้างบ้านยังไง",
          "answer": "เก็บทุกคำสอบถามไว้ที่เดียว ช่วยจัดลำดับและเตือนการติดตาม ให้พนักงานขายมีเวลาคุยกับลูกค้า"
        },
        {
          "question": "ทีมเพิ่มโปรเจกต์ใหม่เองได้ไหม",
          "answer": "ได้ แบบบ้านและโปรเจกต์จัดการผ่าน CMS โดยไม่ต้องพึ่งนักพัฒนา"
        },
        {
          "question": "ทำไมเว็บถึงสร้างโดยมีแบบบ้านเป็นแกน",
          "answer": "คนที่จะสร้างบ้านตามสั่งตัดสินผู้รับสร้างจากแบบที่เห็น การวางแบบบ้านไว้ตรงกลางทำให้ลูกค้าเดินดูตามจังหวะของตัวเอง แล้วค่อยสอบถาม"
        },
        {
          "question": "พอส่งคำสอบถามแล้ว เกิดอะไรขึ้น",
          "answer": "คำสอบถามถูกเก็บใน CRM จัดรวมกับรายการอื่น และติดธงให้ติดตาม จากนั้นพนักงานเป็นผู้ตัดสินใจว่าจะตอบยังไง"
        },
        {
          "question": "เว็บใช้ได้บนมือถือไหม",
          "answer": "ได้ เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ และเลย์เอาต์รองรับทุกหน้าจอ"
        },
        {
          "question": "ใช้แนวทางนี้กับผู้รับสร้างบ้านรายอื่นได้ไหม",
          "answer": "ได้ เว็บที่มีแบบบ้านเป็นแกนคู่กับ AI CRM เหมาะกับผู้รับสร้างบ้านและผู้พัฒนาอื่น เราปรับแกลเลอรีและ CRM ให้เข้ากับแต่ละธุรกิจ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/admire/cover.jpg"
    },
    "en": {
      "metaTitle": "Custom Home Builder Website and AI CRM, Thailand | Admire",
      "metaDescription": "Admire's home-design website and AI-assisted CRM by Haliviq: a design gallery for buyers and a CRM that keeps every enquiry followed up.",
      "h1": "Admire: Website, UX/UI and AI-Assisted CRM for a Custom Home Builder",
      "client": "Admire",
      "badge": "Real Estate & Construction",
      "servicesProvided": [
        "UX/UI Design",
        "Website Development",
        "AI-Assisted CRM"
      ],
      "intro": "Someone planning a custom home takes their time: they browse designs, compare builders and come back more than once. Admire needed a website that shows its work well, and a way to make sure promising enquiries are never left unanswered. We designed a UX/UI built around the home designs, built the website and added an AI-assisted CRM that captures and follows up on every enquiry. The CRM keeps the work visible while salespeople keep the conversations. This page summarizes the deliverables and our approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate & Construction"
        },
        {
          "label": "Scope",
          "value": "UX/UI Design, Website Development, AI-Assisted CRM"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "3"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the Admire brand through a clear, professional experience.",
        "Showcase home designs and projects in a gallery that buyers can browse at their own pace.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Keep every enquiry in one place and follow it up on time, so no promising lead slips away.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "UX/UI design centered on the home designs",
        "Website development",
        "A project and design gallery managed through a CMS",
        "An AI-assisted CRM for capturing and following up enquiries",
        "Content management for the team",
        "SEO foundations for design and project pages",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery and research",
          "desc": "We studied the business, audience and goals to define scope and success criteria. Buyers of custom homes take longer to decide, which shaped how the site and the CRM work together."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the structure, wireframes and visual interface around the home designs, so a visitor can move through them easily. Every page has an obvious next step."
        },
        {
          "title": "Website development",
          "desc": "We built a fast, responsive website that is easy for the team to update. Designs and projects are managed through a CMS."
        },
        {
          "title": "AI and CRM integration",
          "desc": "We added an AI-assisted CRM so enquiries are captured, organized and followed up consistently. Reminders and prioritization stop leads from sitting unseen."
        },
        {
          "title": "Testing and launch",
          "desc": "We tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for a quick, image-rich site",
        "CRM with AI assistance, for prioritizing leads and reminding follow-ups",
        "Project and design gallery with a CMS, edited by the team",
        "Cloud hosting and CDN for fast image delivery",
        "SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "A polished site launched that reflects the Admire brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can add and update designs and projects independently.",
        "Enquiries are kept in one CRM with reminders for follow-up."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "How does the AI-assisted CRM help a home builder?",
          "answer": "It keeps every enquiry in one place and helps prioritize and remind follow-ups, so sales staff can focus on conversations."
        },
        {
          "question": "Can new projects be added by the team?",
          "answer": "Yes. Designs and projects are managed through a CMS without developer help."
        },
        {
          "question": "Why is the website built around the home designs?",
          "answer": "Buyers of custom homes judge a builder by the designs they see. Putting the designs at the center lets them explore at their own pace and then make an enquiry."
        },
        {
          "question": "What happens to an enquiry once it is submitted?",
          "answer": "It is captured in the CRM, organized with the others and flagged for follow-up. Staff then decide how to respond."
        },
        {
          "question": "Does the site work on phones?",
          "answer": "Yes. We tested across devices and browsers, and the layout is responsive."
        },
        {
          "question": "Can this be adapted for other home builders?",
          "answer": "Yes. A design-led site paired with an AI-assisted CRM suits other builders and developers. We adjust the gallery and CRM to each business."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/admire/cover.jpg"
    }
  },
  {
    "slug": "meko-international-hospital",
    "industryTag": "Beauty & Aesthetics",
    "year": "2025",
    "th": {
      "metaTitle": "ออกแบบแบรนด์และเว็บไซต์โรงพยาบาลความงาม | MEKO",
      "metaDescription": "ดูงานแบรนด์ กราฟิก และเว็บไซต์ของ MEKO International Hospital ที่ Haliviq ทำ มีไกด์ไลน์ที่สม่ำเสมอ ออกแบบ UX/UI และเทมเพลตให้ทีมใช้ซ้ำได้",
      "h1": "MEKO International Hospital: แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลเสริมความงาม",
      "client": "MEKO International Hospital",
      "badge": "ความงามและศัลยกรรม",
      "servicesProvided": [
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "ออกแบบกราฟิก",
        "Brand & CI"
      ],
      "intro": "MEKO International Hospital เป็นชื่อที่รู้จักในวงการศัลยกรรมความงาม และคนไข้ก่อความรู้สึกต่อโรงพยาบาลจากเว็บ โบรชัวร์ และโพสต์โซเชียล ตั้งแต่ก่อนมาที่โรงพยาบาลจริง เพื่อให้ทุกจุดสัมผัสเหล่านี้ให้ความรู้สึกเป็นโรงพยาบาลเดียวกัน เราทำอัตลักษณ์แบรนด์และกราฟิก ควบคู่กับเว็บไซต์และ UX/UI ผลที่ได้คือไกด์ไลน์ ระบบดีไซน์ และเว็บไซต์ที่หน้าตาและน้ำเสียงเหมือนกัน พร้อมเทมเพลตที่ทีมโรงพยาบาลใช้ซ้ำได้ หน้านี้สรุปงานที่ส่งมอบและแนวทางทำงาน สำหรับธุรกิจที่กำลังหาดิจิทัลโปรดักต์สตูดิโอในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ความงามและศัลยกรรม"
        },
        {
          "label": "ขอบเขต",
          "value": "ออกแบบเว็บไซต์, ออกแบบ UX/UI, ออกแบบกราฟิก, Brand & CI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ MEKO International Hospital ผ่านประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "ทำให้ช่องทางดิจิทัลและสื่อสิ่งพิมพ์ของโรงพยาบาล ดูประณีตและน่าไว้ใจเท่ากับการดูแลคนไข้",
        "พัฒนาไกด์ไลน์อัตลักษณ์แบรนด์ ให้ทุกจุดสัมผัสสม่ำเสมอ",
        "ทำให้ข้อมูลสำคัญหาง่ายบนทุกอุปกรณ์",
        "สร้างเส้นทางที่ชัดให้คนไข้สอบถามหรือติดต่อ",
        "ให้ทีมมีไกด์ไลน์และเครื่องมือดูแลและต่อยอดสิ่งที่เราสร้าง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แบรนด์และ CI ทั้งอัตลักษณ์และไกด์ไลน์",
        "ออกแบบเว็บไซต์",
        "งานออกแบบ UX/UI ทั้งโครงสร้าง wireframe และหน้าตาเว็บ",
        "งานกราฟิกสำหรับสื่อดิจิทัลและสิ่งพิมพ์",
        "เทมเพลตและไกด์ไลน์ที่ใช้ซ้ำได้สำหรับสื่อในอนาคต",
        "ระบบจัดการเนื้อหาสำหรับทีม",
        "ส่งมอบงานและอบรมทีม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาและวางแผนงาน",
          "desc": "เราศึกษาธุรกิจ กลุ่มผู้ใช้ และเป้าหมาย เพื่อกำหนดขอบเขตและตัวชี้วัดความสำเร็จ สำหรับโรงพยาบาล น้ำเสียงสำคัญพอๆ กับเลย์เอาต์ เราจึงศึกษาทั้งเรื่องที่ควรฟังดูเป็นยังไงและควรดูเป็นยังไง"
        },
        {
          "title": "ทำแบรนด์และ CI",
          "desc": "เราพัฒนาอัตลักษณ์แบรนด์และไกด์ไลน์ ให้ทุกจุดสัมผัสให้ความรู้สึกสม่ำเสมอ ไกด์ไลน์นี้กลายเป็นตัวอ้างอิงของเว็บและกราฟิกทั้งหมดที่ตามมา"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เราออกแบบโครงสร้าง wireframe และหน้าตาเว็บ ให้ทุกหน้าชัดและใช้ง่าย ระบบดีไซน์เดินตามกติกาของแบรนด์"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "เราพัฒนาเว็บที่เร็วและรองรับทุกหน้าจอ ให้ทีมอัปเดตได้ง่าย"
        },
        {
          "title": "ออกแบบกราฟิก",
          "desc": "เราทำงานกราฟิกสำหรับสื่อดิจิทัลและสิ่งพิมพ์ทั่วทั้งแบรนด์ ตามไกด์ไลน์ที่วางไว้"
        },
        {
          "title": "ทดสอบและเปิดตัว",
          "desc": "เราทดสอบข้ามอุปกรณ์และเบราว์เซอร์ เปิดตัวและส่งมอบให้ทีม"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end ให้เว็บเร็วและดูประณีต",
        "Headless CMS สำหรับบริการและเนื้อหา ทีมอัปเดตเองได้",
        "ระบบดีไซน์และไกด์ไลน์ของแบรนด์ ครอบคลุมสี ตัวอักษร และวิธีใช้",
        "Cloud hosting และ CDN ส่งเนื้อหาได้เสถียร",
        "พื้นฐาน SEO และการเข้าถึง"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวประสบการณ์ที่ดูดีและสะท้อนแบรนด์ MEKO International Hospital",
        "ข้อมูลถูกจัดเป็นระเบียบ หาง่ายทั้งบนมือถือและจอคอม",
        "คนไข้มีช่องทางติดต่อที่ชัดเจน",
        "ทีมอัปเดตเนื้อหาได้เองโดยไม่ต้องรอใคร",
        "ไกด์ไลน์และเทมเพลตให้ทีมทำสื่อที่ตรงตามแบรนด์ได้เอง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ทำทั้งแบรนด์และเว็บไซต์ให้ได้ไหม",
          "answer": "ได้ การทำอัตลักษณ์แบรนด์ กราฟิก และเว็บไซต์ไปด้วยกัน ทำให้ประสบการณ์ทั้งหมดสม่ำเสมอ"
        },
        {
          "question": "ทีมทำสื่อใหม่เองภายหลังได้ไหม",
          "answer": "ได้ เรามีไกด์ไลน์และเทมเพลตที่ใช้ซ้ำได้ ให้ทีมผลิตสื่อที่ตรงตามแบรนด์ได้เอง"
        },
        {
          "question": "ไกด์ไลน์แบรนด์มีอะไรบ้าง",
          "answer": "บอกวิธีใช้อัตลักษณ์ รวมถึงกติกาด้านภาพที่เว็บและกราฟิกยึดตาม เป็นตัวอ้างอิงสำหรับทุกคนที่ผลิตสื่อต่อไป"
        },
        {
          "question": "โปรเจกต์รวมงานสิ่งพิมพ์ด้วยไหม",
          "answer": "รวม งานกราฟิกทำสำหรับทั้งสื่อดิจิทัลและสิ่งพิมพ์ ตามไกด์ไลน์เดียวกัน"
        },
        {
          "question": "พนักงานแก้เนื้อหาเว็บเองได้ไหม",
          "answer": "ได้ บริการและเนื้อหาจัดการผ่าน CMS พนักงานอัปเดตได้โดยไม่ต้องมีนักพัฒนา"
        },
        {
          "question": "คำนึงถึงการเข้าถึงและการค้นหาไหม",
          "answer": "คำนึง เราวางพื้นฐาน SEO และการเข้าถึง ให้เว็บถูกค้นเจอและผู้เข้าชมหลายกลุ่มใช้ได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/meko-international-hospital/cover.jpg"
    },
    "en": {
      "metaTitle": "Aesthetic Hospital Brand and Website Design | MEKO Hospital",
      "metaDescription": "MEKO International Hospital's brand identity, graphics and website by Haliviq: consistent guidelines, UX/UI and templates the in-house team can reuse.",
      "h1": "MEKO International Hospital: Brand, Website and Graphics for an Aesthetic Hospital",
      "client": "MEKO International Hospital",
      "badge": "Beauty & Aesthetics",
      "servicesProvided": [
        "Website Design",
        "UX/UI Design",
        "Graphic Design",
        "Brand & CI"
      ],
      "intro": "MEKO International Hospital is well known in aesthetic surgery, and patients form an opinion of it from the website, the brochure and the social post long before they visit. To make those touchpoints feel like one hospital, we worked on the brand identity and graphics together with the website and UX/UI. The result is a set of guidelines, a design system and a website that look and read the same, with templates the hospital's team can reuse. This page summarizes the deliverables and our approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Beauty & Aesthetics"
        },
        {
          "label": "Scope",
          "value": "Website Design, UX/UI Design, Graphic Design, Brand & CI"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the MEKO International Hospital brand through a clear, professional experience.",
        "Make the hospital's digital presence and printed materials feel as refined and trustworthy as its care.",
        "Develop brand identity guidelines so every touchpoint is consistent.",
        "Make key information easy to find on any device.",
        "Create clear paths for patients to enquire or take action.",
        "Give the team the guidelines and tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Brand and CI: identity and guidelines",
        "Website design",
        "UX/UI design with structure, wireframes and visual interface",
        "Graphic design assets for digital and print",
        "Reusable templates and guidelines for future materials",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery and research",
          "desc": "We studied the business, audience and goals to define scope and success criteria. For a hospital, tone matters as much as layout, so research covered how it should sound as well as how it should look."
        },
        {
          "title": "Brand and CI",
          "desc": "We developed the brand identity and guidelines so every touchpoint feels consistent. These guidelines became the reference for the website and for all later graphics."
        },
        {
          "title": "UX/UI design",
          "desc": "We designed the structure, wireframes and visual interface so every page is clear and easy to use. The design system follows the brand rules."
        },
        {
          "title": "Website development",
          "desc": "We built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "Graphic design",
          "desc": "We produced graphic assets for digital and print use across the brand, in line with the guidelines."
        },
        {
          "title": "Testing and launch",
          "desc": "We tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end, for a fast and refined site",
        "Headless CMS for services and content, edited by the team",
        "Brand design system and guidelines, covering colors, type and usage",
        "Cloud hosting and CDN for dependable delivery",
        "SEO and accessibility foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "A polished experience launched that reflects the MEKO International Hospital brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Patients have clear ways to get in touch.",
        "The team can keep content up to date independently.",
        "Brand guidelines and templates let the team produce on-brand materials itself."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "Can you handle both brand and website?",
          "answer": "Yes. Working on brand identity, graphics and the website together keeps the whole experience consistent."
        },
        {
          "question": "Can the team create new materials later?",
          "answer": "Yes. We provide guidelines and reusable templates so the team can produce on-brand materials themselves."
        },
        {
          "question": "What do the brand guidelines contain?",
          "answer": "They set out how the identity is used, including visual rules the website and graphics follow. They are the reference for anyone producing materials afterward."
        },
        {
          "question": "Does the project include print as well as digital?",
          "answer": "Yes. Graphic assets were produced for both digital and print use, following the same guidelines."
        },
        {
          "question": "Can staff edit website content?",
          "answer": "Yes. Services and content are managed through a CMS so staff can update them without a developer."
        },
        {
          "question": "Are accessibility and search considered?",
          "answer": "Yes. We put SEO and accessibility foundations in place so the site can be found and used by a wide range of visitors."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/meko-international-hospital/cover.jpg"
    }
  },
  {
    "slug": "dede",
    "industryTag": "Energy & Government",
    "year": "2025",
    "th": {
      "metaTitle": "DEDE แอป DEDE สำหรับเช็กอินตรวจสอบ และเว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ DEDE โดย Haliviq: พัฒนาแอปมือถือ, พัฒนาเว็บไซต์, ออกแบบ UX/UI",
      "h1": "DEDE — แอป DEDE สำหรับเช็กอินตรวจสอบ และเว็บไซต์",
      "client": "DEDE",
      "badge": "พลังงานและภาครัฐ",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "intro": "ผู้ตรวจสอบและรับรองการจัดการพลังงานต้องเข้าตรวจรายงานการจัดการพลังงานที่โรงงานควบคุมและอาคารควบคุม จึงต้องมีวิธีที่เชื่อถือได้ว่าไปตรวจจริง และเห็นอะไรบ้าง โดยไม่ต้องเพิ่มงานเอกสารหน้างาน ในฐานะพันธมิตรด้านการออกแบบและพัฒนาของ riddec เราออกแบบและพัฒนาแอป “ดีดี” (DD App) สำหรับโครงการของ DEDE ให้ผู้ตรวจสอบถ่ายภาพและเช็กอินระบุเวลาขณะเข้าตรวจได้ในไม่กี่ขั้นตอน และทำเว็บไซต์ที่อธิบายโครงการและเป็นที่ให้ผู้ใช้ทำความเข้าใจได้ชัดเจน หน้านี้สรุปงานที่ส่งมอบและแนวทางการทำงาน สำหรับธุรกิจที่มองหาสตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "พลังงานและภาครัฐ"
        },
        {
          "label": "ขอบเขต",
          "value": "พัฒนาแอปมือถือ, พัฒนาเว็บไซต์, ออกแบบ UX/UI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "3"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สะท้อนแบรนด์ DEDE ด้วยประสบการณ์ที่ชัดเจนและเป็นมืออาชีพ",
        "ทำให้ข้อมูลสำคัญค้นหาได้ง่ายบนทุกอุปกรณ์",
        "สร้างช่องทางที่ชัดเจนให้ลูกค้าสอบถามหรือดำเนินการต่อ",
        "มอบเครื่องมือให้ทีมงานดูแลและต่อยอดสิ่งที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "พัฒนาแอปมือถือ",
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาหน้างานจริง",
          "desc": "ทำความเข้าใจขั้นตอนการเข้าตรวจของผู้ตรวจสอบ เพื่อกำหนดขอบเขตและสิ่งที่ต้องบันทึก"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบหน้าจอที่ใช้ง่ายหน้างาน ขั้นตอนน้อย ปุ่มใหญ่และชัดเจน"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปมือถือสำหรับผู้ตรวจสอบภาคสนาม ถ่ายภาพและเช็กอินระบุเวลาได้ในแอปเดียว"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่ชัดเจน รองรับทุกอุปกรณ์ และทีมงานอัปเดตเนื้อหาได้ง่าย"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนอุปกรณ์จริง เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "แอปพลิเคชันมือถือ",
        "ถ่ายภาพและเช็กอินระบุเวลา",
        "เว็บไซต์ Responsive",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวประสบการณ์ที่ประณีตและสะท้อนแบรนด์ DEDE",
        "ข้อมูลเป็นระเบียบ ค้นหาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาได้เองอย่างต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "แอป DEDE ใช้กับใคร",
          "answer": "ใช้กับผู้ตรวจสอบและรับรองการจัดการพลังงานที่เข้าตรวจรายงานการจัดการพลังงานที่โรงงานควบคุมและอาคารควบคุม"
        },
        {
          "question": "แอปบันทึกอะไรบ้าง",
          "answer": "บันทึกภาพที่ถ่ายขณะเข้าตรวจ และการเช็กอินพร้อมเวลาที่เข้าตรวจ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/dede/cover.jpg"
    },
    "en": {
      "metaTitle": "DEDE DEDE Inspection Check-in App and Website — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind DEDE's project by Haliviq: Mobile App Development, Website Development, UX/UI Design.",
      "h1": "DEDE — DEDE Inspection Check-in App and Website",
      "client": "DEDE",
      "badge": "Energy & Government",
      "servicesProvided": [
        "Mobile App Development",
        "Website Development",
        "UX/UI Design"
      ],
      "intro": "Auditors and certifiers of energy management visit controlled factories and controlled buildings to inspect energy management reports. They need a dependable way to show that a visit happened and what was seen, without extra paperwork on site. As design and development partner to riddec, we designed and built the DEDE (DD) app for a DEDE project so an inspector can take photos and check in with a recorded time while inspecting, in a few simple steps. We also built a website that explains the program and gives users a clear place to learn about it. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Energy & Government"
        },
        {
          "label": "Scope",
          "value": "Mobile App Development, Website Development, UX/UI Design"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "3"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the DEDE brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Mobile App Development",
        "Website Development",
        "UX/UI Design",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & Research",
          "desc": "Studied how inspectors work on site to define the scope and what must be recorded."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed simple screens for use on site, with few steps and large, clear controls."
        },
        {
          "title": "Mobile App Development",
          "desc": "Built a mobile app for field inspectors with camera capture and time-stamped check-in."
        },
        {
          "title": "Website Development",
          "desc": "Built a clear, responsive website that explains the program and is easy for the team to update."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested on real devices, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Mobile application",
        "Camera capture and time-stamped check-in",
        "Responsive website",
        "Content management for the team"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the DEDE brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "Who is the DEDE app for?",
          "answer": "It is for auditors and certifiers of energy management who visit controlled factories and controlled buildings to inspect energy management reports."
        },
        {
          "question": "What does the app record?",
          "answer": "Photos taken during the inspection and a check-in with the time of the visit."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/dede/cover.jpg"
    }
  },
  {
    "slug": "suda",
    "industryTag": "F&B",
    "year": "2026",
    "th": {
      "metaTitle": "ออกแบบแบรนด์และเว็บไซต์ร้านอาหารไทยในอเมริกา | SUDA",
      "metaDescription": "ดูงานอัตลักษณ์แบรนด์และเว็บไซต์เปิดตัวที่ Haliviq ทำให้ SUDA ร้านอาหารไทยร่วมสมัยและค็อกเทลบาร์ที่ Bellevue รัฐวอชิงตัน",
      "h1": "SUDA: แบรนด์และเว็บไซต์ร้านอาหารไทยที่ Bellevue รัฐวอชิงตัน",
      "client": "SUDA",
      "badge": "F&B",
      "servicesProvided": [
        "อัตลักษณ์แบรนด์",
        "ออกแบบโลโก้",
        "ออกแบบเว็บไซต์",
        "พัฒนาเว็บไซต์"
      ],
      "intro": "SUDA เป็นร้านอาหารไทยร่วมสมัยและค็อกเทลบาร์ที่กำลังจะเปิดที่เมือง Bellevue รัฐวอชิงตัน ภายใต้ประโยค \"Thai-rooted. Reimagined.\" เราออกแบบแบรนด์และทำเว็บไซต์แนะนำร้านก่อนวันเปิด ใช้โลโก้ตัวอักษรสีทองบนพื้นเขียวเข้ม ลายเส้นพฤกษศาสตร์ และตัวอักษรเซอริฟแบบ small caps มีหน้าเปิดตัวที่บอกที่อยู่ ช่องทางติดต่อ ลิงก์ Instagram และพาไปรู้จักร้านอาหารไทยในเครือเดียวกัน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "สถานที่",
          "value": "Bellevue รัฐวอชิงตัน สหรัฐอเมริกา"
        },
        {
          "label": "ขอบเขต",
          "value": "อัตลักษณ์แบรนด์ โลโก้ ออกแบบและพัฒนาเว็บไซต์"
        },
        {
          "label": "ปี",
          "value": "2026"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สื่อประโยค \"Thai-rooted. Reimagined.\" ผ่านหน้าตาที่จำได้ในพริบตา",
        "แตกต่างจากภาพลักษณ์ร้านอาหารไทยที่คุ้นตา แต่ยังอบอุ่นและประณีต",
        "ให้ลูกค้าเจอที่อยู่ ช่องทางติดต่อ และ Instagram ก่อนวันเปิดร้าน",
        "เผื่อให้เว็บไซต์ต่อยอดเป็นเมนูและระบบจองได้ในภายหลัง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "อัตลักษณ์แบรนด์และโลโก้ตัวอักษรที่ออกแบบเฉพาะ",
        "ชุดสีทองและเขียวเข้ม",
        "ลายเส้นพฤกษศาสตร์",
        "ตัวอักษรเซอริฟแบบ small caps",
        "เว็บไซต์เปิดตัวที่รองรับทุกหน้าจอ พร้อมที่อยู่ ช่องทางติดต่อ และโซเชียล"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจคอนเซปต์",
          "desc": "เราเริ่มจากวิธีที่ SUDA เล่าถึงตัวเอง คือสูตรและรสชาติดั้งเดิม ไอเดียใหม่ และไม่เปลี่ยนอะไรเพียงเพื่อให้ต่าง แล้วใช้เป็นเกณฑ์ตัดสินทุกการออกแบบ"
        },
        {
          "title": "ออกแบบอัตลักษณ์",
          "desc": "เราวาดโลโก้ เลือกชุดสีทองกับเขียวเข้ม ลายพฤกษศาสตร์ และกำหนดตัวอักษร ให้แบรนด์ดูอบอุ่นและประณีต ไม่ซ้ำกับหน้าตาร้านอาหารไทยทั่วไป"
        },
        {
          "title": "พัฒนาเว็บไซต์เปิดตัว",
          "desc": "เราแปลงอัตลักษณ์เป็นหน้าเว็บที่รองรับทุกหน้าจอ มีภาพถ่ายที่แข็งแรงหนึ่งภาพ ข้อความที่ชัดเจน และข้อมูลที่ลูกค้ามองหาเป็นอย่างแรก"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เว็บไซต์ที่รองรับทุกหน้าจอ",
        "โลโก้และระบบแบรนด์ที่ออกแบบเฉพาะ",
        "งานอาร์ตลายพฤกษศาสตร์",
        "ตัวอักษรสำหรับเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "หน้าตาแบรนด์ที่จดจำได้ให้ร้านใหม่ก่อนวันเปิด",
        "หน้าเปิดตัวที่แสดงที่อยู่ ช่องทางติดต่อ และ Instagram",
        "โครงเว็บไซต์ที่พร้อมรับเมนูและการจอง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "SUDA คือร้านอะไร",
          "answer": "ร้านอาหารไทยร่วมสมัยและค็อกเทลบาร์ที่กำลังจะเปิดที่ Bellevue รัฐวอชิงตัน ใช้สูตรไทยดั้งเดิมผสมไอเดียใหม่และกลิ่นอายแบบ Pacific Northwest"
        },
        {
          "question": "Haliviq ทำอะไรให้ SUDA",
          "answer": "อัตลักษณ์แบรนด์ โลโก้ และเว็บไซต์เปิดตัวที่แนะนำร้านก่อนวันเปิด"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/suda/cover.jpg"
    },
    "en": {
      "metaTitle": "Thai Restaurant Branding and Website, Bellevue WA | SUDA",
      "metaDescription": "See the brand identity and launch website Haliviq made for SUDA, a contemporary Thai restaurant and cocktail bar in Bellevue, Washington: gold wordmark, botanical pattern and a clear coming-soon page.",
      "h1": "SUDA: Brand Identity and Website for a Thai Restaurant in Bellevue, WA",
      "client": "SUDA",
      "badge": "F&B",
      "servicesProvided": [
        "Brand identity",
        "Logo design",
        "Website design",
        "Website development"
      ],
      "intro": "SUDA is a contemporary Thai restaurant and cocktail bar opening in Bellevue, Washington, under the line \"Thai-rooted. Reimagined.\" We designed the brand and built the website that introduces it before the doors open: a gold wordmark on deep green, a botanical line-art pattern, serif small-caps type, and a launch page that gives guests the address, contact details and Instagram link, and points to the group's sister Thai restaurants.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Location",
          "value": "Bellevue, Washington, USA"
        },
        {
          "label": "Scope",
          "value": "Brand identity, logo, website design and development"
        },
        {
          "label": "Year",
          "value": "2026"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Express \"Thai-rooted. Reimagined.\" in a look people can recognise at a glance",
        "Stand out from familiar Thai restaurant visuals while staying warm and refined",
        "Give guests the address, contact and Instagram before opening day",
        "Let the website grow into a menu and booking experience later"
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Brand identity and custom wordmark",
        "Colour palette in gold and deep green",
        "Botanical line-art pattern",
        "Serif small-caps typography",
        "Responsive launch website with address, contact and social links"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand the concept",
          "desc": "We started from how SUDA describes itself: traditional recipes and flavours, new ideas, nothing changed just to be different. That became the test every design choice had to pass."
        },
        {
          "title": "Design the identity",
          "desc": "We drew the wordmark, chose a gold and deep-green palette and a botanical pattern, and set the type, so the brand feels warm and refined rather than like a generic Thai restaurant look."
        },
        {
          "title": "Build the launch website",
          "desc": "We turned the identity into a responsive page with one strong photograph, a clear message and the practical details guests look for first."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Responsive website",
        "Custom wordmark and brand system",
        "Botanical pattern artwork",
        "Web typography"
      ],
      "resultsHeading": "Results",
      "results": [
        "A recognisable look for a new restaurant before it opens",
        "A launch page that shows the address, contact and Instagram",
        "A site structure ready to take a menu and bookings"
      ],
      "faqHeading": "FAQ",
      "faq": [
        {
          "question": "What is SUDA?",
          "answer": "A contemporary Thai restaurant and cocktail bar opening in Bellevue, Washington, built on traditional Thai recipes with new ideas and Pacific Northwest influence."
        },
        {
          "question": "What did Haliviq make for SUDA?",
          "answer": "The brand identity and logo, and the launch website that introduces the restaurant before it opens."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/suda/cover.jpg"
    }
  }
]

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((w) => w.slug === slug)
}
