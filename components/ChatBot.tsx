'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

// A free, rule-based assistant. It answers from the FAQ already on the site, so it has no API cost.
// Optional dashboard: set NEXT_PUBLIC_CHAT_LOG_URL to a Google Apps Script web-app URL and each question is
// appended to a Google Sheet (no names, emails or other identifiers are sent).
type Msg = { from: 'bot' | 'me'; text: string; links?: { label: string; href: string }[]; agent?: boolean; meet?: boolean; pending?: boolean; choices?: { key: string; label: string }[]; fresh?: boolean; lead?: boolean; topic?: string; noChips?: boolean }
type QA = { q: string; a: string; h?: string; k?: string; x?: string; p?: number }

const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/message/TM3WC6DUJAFEK1', bg: '#25D366' },
  { id: 'messenger', label: 'Messenger', href: 'https://m.me/haliviq', bg: 'linear-gradient(135deg,#00B2FF,#7A5CFF 60%,#FF5CA8)' },
  { id: 'line', label: 'LINE', href: 'https://lin.ee/zyTrkx4', bg: '#06C755' },
] as const

// "What services do you offer?" Asked in many ways, so it gets a hand-written overview instead of a loose FAQ match.
const SERVICES_Q = /(ให้บริการ|รับทำ|รับงาน|บริการ(อะไร|ด้านไหน|อะไรบ้าง|ของ)|ทำอะไร(ได้)?บ้าง|ช่วย.{0,12}(ธุรกิจ|องค์กร|บริษัท).{0,8}(อะไร|ยังไง|อย่างไร)|what (services|do you (do|offer))|what does (haliviq|your company) do|services (do you|you) (offer|provide)|what are your services|tell me about (your )?(services|company))/i

// "I want my own website / app, where do I start?" is a buying question, so it gets a real answer, not a dead end.
const START_Q = /(อยากมี|ต้องการมี|อยากทำ|ต้องการทำ|อยากสร้าง|ต้องการสร้าง|รับทำ|จะทำ|จะสร้าง|จะมี).{0,20}(เว็บ|เว็บไซต์|website|แอป|แอพ|app|ระบบ|ร้านค้าออนไลน์|แพลตฟอร์ม)|(เริ่ม(ต้น)?|เริ่มยังไง|เริ่มจาก).{0,20}(เว็บ|เว็บไซต์|แอป|แอพ|โปรเจกต์|โปรเจค|ระบบ)|(เว็บ|เว็บไซต์|แอป|แอพ|ระบบ).{0,25}(เริ่ม(ต้น)?(ยังไง|อย่างไร|ที่)|ต้องเตรียมอะไร|ต้องทำอะไร)|(how (do|can|should) i|where (do|should) i) (start|begin|get started)|(i )?(want|need) (to (build|make|create|get)|a|my own).{0,25}(website|web site|app|platform|system)|build (a|my) (website|app)|(สนใจ|อยากได้|ต้องการ|ขอ).{0,8}(เว็บ|เว็บไซต์|แอป|แอพ)|(ทำ|สร้าง)(เว็บ|เว็บไซต์|แอป|แอพ)(ให้|ไหม|หน่อย|ได้ไหม)|interested in (a |building |getting )?(website|web site|app)/i

// Business types the visitor can tap when asking about packages. Each gets a short, honest reply and a hand-off to the team.

// What the visitor is asking about, so price / time / "can you do X" questions get an answer about THAT service,
// instead of being matched to the website FAQ just because they share words like "ราคา" or "ทำ".
type Prod = { k: string; re: RegExp; chip: string; chipEn: string; th: string; en: string; fTh: string; fEn: string; qTh: string; qEn: string; capTh: string; capEn: string }
const PRODUCTS: Prod[] = [
  { k: 'chatbot', re: /แชท\s?บอท|แชตบอท|chat\s?bot|บอทตอบ/i, chip: 'แชทบอท', chipEn: 'Chatbot', th: 'แชทบอท', en: 'a chatbot',
    fTh: 'จะให้ตอบเรื่องอะไร มีข้อมูลหรือเอกสารให้ตอบมากแค่ไหน และจะใช้บน LINE หรือเว็บไซต์', fEn: 'what it should answer, how much information it has to draw on, and whether it runs on LINE or your website',
    qTh: 'ตอนนี้ลูกค้าถามอะไรบ่อยที่สุดครับ', qEn: 'What do customers ask you most often?',
    capTh: 'ได้ครับ เราทำแชทบอท AI ที่ตอบจากเอกสารของธุรกิจคุณ และเชื่อมกับ LINE หรือเว็บไซต์ได้', capEn: 'Yes. We build AI chatbots that answer from your own documents and connect to LINE or your website.' },
  { k: 'line', re: /\bline\b|ไลน์/i, chip: 'LINE OA', chipEn: 'LINE OA', th: 'LINE OA / LINE Mini App', en: 'a LINE OA or LINE Mini App',
    fTh: 'ฟีเจอร์ที่ต้องมี เช่น ระบบจอง สะสมแต้ม สั่งซื้อ และต้องเชื่อมกับระบบเดิมไหม', fEn: 'the features you need, such as booking, loyalty points or ordering, and whether it must connect to existing systems',
    qTh: 'อยากให้ลูกค้าทำอะไรผ่าน LINE ครับ', qEn: 'What should customers be able to do through LINE?',
    capTh: 'ได้ครับ ตั้งแต่ระบบจอง สะสมแต้ม ไปจนถึงสั่งซื้อผ่าน LINE ลูกค้าไม่ต้องโหลดแอปเพิ่ม', capEn: 'Yes, from booking and loyalty points to ordering through LINE, with no extra app for customers to install.' },
  { k: 'app', re: /แอป|แอพ|\bapp\b|mobile|มือถือ|ios|android/i, chip: 'แอปมือถือ', chipEn: 'Mobile app', th: 'แอปมือถือ', en: 'a mobile app',
    fTh: 'ฟีเจอร์ที่ต้องมี ทำทั้ง iOS และ Android ไหม และต้องมีระบบหลังบ้านหรือไม่', fEn: 'the features you need, whether it is iOS, Android or both, and whether it needs a back office',
    qTh: 'ผู้ใช้จะทำอะไรในแอปบ้างครับ', qEn: 'What will users do in the app?',
    capTh: 'ได้ครับ ทั้ง iOS และ Android ตั้งแต่ออกแบบ พัฒนา จนขึ้นร้านแอป', capEn: 'Yes, for both iOS and Android, from design and development to publishing on the app stores.' },
  { k: 'erp', re: /erp|crm|ระบบ(บัญชี|สต็อก|สต๊อก|จัดการ|หลังบ้าน|ขาย|จอง|ภายใน)/i, chip: 'ระบบ ERP/CRM', chipEn: 'ERP / CRM', th: 'ระบบ ERP/CRM หรือระบบหลังบ้าน', en: 'an ERP, CRM or back-office system',
    fTh: 'งานที่อยากให้ระบบจัดการ จำนวนผู้ใช้ และต้องเชื่อมกับระบบเดิมไหม', fEn: 'the work it should handle, the number of users, and whether it must connect to your current systems',
    qTh: 'ตอนนี้ทีมทำงานนี้ด้วยวิธีไหนอยู่ครับ', qEn: 'How does your team do this work today?',
    capTh: 'ได้ครับ ระบบจัดการลูกค้า ขาย สต็อก หรืองานภายในบริษัท ออกแบบให้ตรงกับวิธีทำงานของคุณ', capEn: 'Yes. Customer, sales, stock or internal systems, designed around how your team actually works.' },
  { k: 'ai', re: /\bai\b|เอไอ|ปัญญาประดิษฐ์|\bllm\b|agent|เอเจนต์/i, chip: 'ระบบ AI', chipEn: 'AI system', th: 'ระบบ AI', en: 'an AI system',
    fTh: 'งานที่อยากให้ AI ช่วย ข้อมูลที่มี และต้องเชื่อมกับระบบไหนบ้าง', fEn: 'the job you want AI to do, the data you have, and which systems it must connect to',
    qTh: 'งานไหนที่ทีมใช้เวลามากที่สุดตอนนี้ครับ', qEn: 'Which task takes your team the most time today?',
    capTh: 'ได้ครับ ทั้ง AI Agent ระบบที่ตอบจากเอกสารของคุณ และฟีเจอร์ AI ที่เข้ากับงานจริง', capEn: 'Yes. AI agents, systems that answer from your own documents, and AI features that fit real tasks.' },
  { k: 'seo', re: /seo|aeo|geo|ติดอันดับ|ทำโฆษณา/i, chip: 'SEO', chipEn: 'SEO', th: 'SEO', en: 'SEO',
    fTh: 'ขนาดเว็บ คู่แข่งในตลาด และเป้าหมายที่อยากได้', fEn: 'the size of your site, your competition and the goal you want',
    qTh: 'ตอนนี้อยากให้คนมาเว็บจากทางไหนเป็นหลักครับ', qEn: 'Where do you most want visitors to come from?',
    capTh: 'ได้ครับ ทั้ง SEO แบบเดิม และแบบที่ทำให้เว็บถูกแนะนำใน AI อย่าง ChatGPT และ Google AI', capEn: 'Yes, both classic SEO and the kind that gets your site recommended in AI such as ChatGPT and Google AI.' },
  { k: 'brand', re: /แบรนด์|โลโก้|logo|brand(ing)?|\bci\b|identity|อัตลักษณ์/i, chip: 'Branding สร้างแบรนด์', chipEn: 'Branding', th: 'งานสร้างแบรนด์', en: 'branding work',
    fTh: 'ธุรกิจของคุณทำอะไร ต้องการโลโก้อย่างเดียวหรือทั้งชุดแบรนด์ (สี ฟอนต์ คู่มือการใช้) และมีแบรนด์เดิมอยู่แล้วไหม', fEn: 'what your business does, whether you need just a logo or a full brand set (colours, fonts, guidelines), and whether you already have a brand',
    qTh: 'ตอนนี้มีโลโก้หรือแบรนด์เดิมอยู่แล้วไหมครับ', qEn: 'Do you already have a logo or brand today?',
    capTh: 'ได้ครับ ตั้งแต่กำหนดจุดยืนแบรนด์ ออกแบบโลโก้และอัตลักษณ์ ไปจนถึงคู่มือการใช้แบรนด์ และทำต่อเป็นเว็บไซต์ให้เข้ากับแบรนด์ได้', capEn: 'Yes, from brand positioning and logo and identity design to brand guidelines, and we can carry it on into a website that matches.' },
  { k: 'design', re: /ดีไซน์|ออกแบบ|\bux\b|\bui\b|โลโก้|แบรนด์|logo|branding|design/i, chip: 'ออกแบบ UX/UI', chipEn: 'UX / UI design', th: 'งานออกแบบ', en: 'design work',
    fTh: 'จำนวนหน้าจอ งานที่ต้องการ (โลโก้ แบรนด์ หรือ UX/UI) และต้องวิจัยผู้ใช้ไหม', fEn: 'the number of screens, what you need (logo, brand or UX/UI) and whether user research is needed',
    qTh: 'อยากออกแบบอะไรเป็นอย่างแรกครับ', qEn: 'What would you like designed first?',
    capTh: 'ได้ครับ ตั้งแต่แบรนด์ ประสบการณ์ผู้ใช้ จนถึงหน้าตาเว็บและแอป', capEn: 'Yes, from brand and user experience to how your website and app look.' },
  { k: 'web', re: /เว็บ|website|web\s?site|landing|หน้าเว็บ/i, chip: 'เว็บไซต์', chipEn: 'Website', th: 'เว็บไซต์', en: 'a website',
    fTh: 'จำนวนหน้า มีระบบสมาชิกหรือชำระเงินไหม และต้องการกี่ภาษา', fEn: 'the number of pages, whether it needs membership or payments, and how many languages',
    qTh: 'เว็บนี้ไว้ทำอะไรครับ', qEn: 'What will the website be used for?',
    capTh: 'ได้ครับ ทำเว็บไซต์ได้ทุกแบบ ตั้งแต่เว็บบริษัท ไปจนถึงร้านค้าออนไลน์และระบบสมาชิก', capEn: 'Yes. We build all kinds of websites, from company sites to online shops and membership systems.' },
]
const prodOf = (q: string) => PRODUCTS.find((x) => x.re.test(q))
const EXPENSIVE_W = /แพง|ราคาสูง|ถูกไหม|ถูกมั้ย|expensive|pricey|too much|affordable|cheap/i
const PRICE_W = /ราคา|เท่าไหร่|เท่าไร|กี่บาท|ค่าใช้จ่าย|ค่าบริการ|ค่าทำ|ค่าจ้าง|งบ|price|pricing|cost|how much|fee/i
// "ใช้เวลาประมาณเท่าไหร่" contains "เท่าไหร่" but is a question about time, not price.
const PRICE_EXPLICIT = /ราคา|ค่าใช้จ่าย|ค่าบริการ|ค่าทำ|ค่าจ้าง|งบ|price|pricing|cost|fee/i
const PRICE_SKIP = /forward|fde|retainer|vibe|lovable|bolt|cursor|audit|แพ็?[คก]เ?[กค]จ|package/i
const TIME_W = /ใช้เวลา|กี่วัน|กี่เดือน|กี่สัปดาห์|นานไหม|นานแค่ไหน|เสร็จเมื่อไหร่|how long|timeline|turnaround/i
const QUOTE_W = /ใบเสนอราคา|ขอราคา|ประเมินราคา|quotation|\bquote\b/i
const DISCOUNT_W = /ลดราคา|ส่วนลด|ต่อราคา|ถูกกว่า|discount|cheaper|negotiate/i
const CAN_W = /ได้ไหม|ได้หรือเปล่า|ได้มั้ย|ได้รึเปล่า|รับทำ|ทำให้ได้|can you|could you|do you (do|build|make|offer)|is it possible|possible to/i
// Fixing / improving something that already exists has its own FAQ answer, so the generic "yes we build it" must not catch it.
const FIX_W = /แก้|ปรับปรุง|ซ่อม|บั๊ก|เว็บเดิม|แอปเดิม|ระบบเดิม|ที่มีอยู่|fix|improve|existing|redesign|revamp|migrate|ย้าย/i
const TECH_W = /wordpress|wix|shopify|laravel|php|\bnode\b|django|flutter|react|next\.?js|vue|angular|\bsql\b|aws|azure|gcp|docker|kubernetes|api|blockchain|crypto|เกม|game|vr|ar\b/i
const CAPS: { re: RegExp; th: string; en: string }[] = [
  { re: /(หลายภาษา|2 ?ภาษา|สองภาษา|multi.?lingual|multiple languages|bilingual)|(เว็บ|แอป|website|app).{0,10}ภาษา|ภาษา.{0,6}(เว็บ|แอป)/i,
    th: 'ได้ครับ ทำเว็บสองภาษาไทยและอังกฤษได้ และจัดโครงสร้างให้ทั้งสองเวอร์ชันตรงกันเสมอ ถ้าอยากได้ภาษาอื่นด้วย บอกทีมได้เลยว่าภาษาอะไร เดี๋ยวประเมินให้ครับ',
    en: 'Yes. We build bilingual Thai and English sites and keep both versions in step. If you need other languages too, tell the team which ones and we will scope it.' },
  { re: /ขายของ|ร้านค้าออนไลน์|e-?commerce|ตะกร้า|online (shop|store)|sell (products|online)/i,
    th: 'ได้ครับ ทำร้านค้าออนไลน์ได้ ตั้งแต่หน้าสินค้า ตะกร้า ไปจนถึงชำระเงิน ถ้าสินค้ายังไม่เยอะ เริ่มจากเว็บเล็ก ๆ ก่อนแล้วค่อยต่อยอดก็ได้ครับ',
    en: 'Yes. We build online shops, from product pages and cart to payment. If you have few products, we can start small and grow it.' },
  { re: /ระบบสมาชิก|สมาชิก|ล็อกอิน|เข้าสู่ระบบ|\blogin\b|member(ship)?/i,
    th: 'ได้ครับ ทำระบบสมาชิก สมัคร เข้าสู่ระบบ และหน้าข้อมูลส่วนตัวของแต่ละคนได้',
    en: 'Yes. We build membership systems with sign-up, login and a personal page for each user.' },
  { re: /ตามแบบ|ตามดีไซน์|ตามภาพ|แบบที่(มี|เรา|ผม|ฉัน)|figma|ไฟล์ออกแบบ|mockup/i,
    th: 'ได้ครับ ถ้ามีแบบหรือไฟล์ Figma อยู่แล้ว ส่งให้ทีมดูได้เลย จะพัฒนาตามแบบให้ ถ้ายังไม่มีแบบ เรามีทีมออกแบบช่วยทำให้ครับ',
    en: 'Yes. If you already have a design or a Figma file, send it over and we will build to it. If you do not have one yet, our design team can create it.' },
]

const PACKAGE_Q = /แพ็?[คก]เ?[กค]จ|แพ็คเกจ|แพคเกจ|แพ็กเกจ|package|pricing plan|starter|โปรโมชั่น|โปรโมชัน|ธุรกิจ(เริ่มต้น|เล็ก|ใหม่)|(เริ่มต้น|เริ่มทำ|เริ่มขาย).{0,10}ธุรกิจ|small business|new business|start.?up/i
// A bare "I'm interested" / "tell me more" is a buying signal, so ask what they need instead of matching some random FAQ.
// Confusion, complaints and test messages ("ตอบมั่ว", "งง", "ไม่เข้าใจ") should get an apology and a way forward, never a random FAQ.
// Insults and swearing: stay calm, apologise, and pass the conversation to a person instead of arguing or guessing.
const ABUSE = /ควาย|เหี้ย|สัส|ชิบหาย|ฉิบหาย|ตอแหล|เชี่ย(?!ว)|แม่ง(?!าน)|ส้นตีน|ระยำ|ไอ้?โง่|โง่|ปัญญาอ่อน|ห่วยแตก|มึง|(^|\s)กู(\s|$)|fuck|\bshit|stupid|idiot|\bdumb|bitch|asshole|bastard|moron|useless bot|piece of/i
const CONFUSED = /^\s*(ตอบ(มั่ว|มั่วๆ|ไม่ตรง|ผิด|แปลก|ไม่รู้เรื่อง)|มั่ว|มั่วๆ|ไม่เข้าใจ|ไม่รู้เรื่อง|งง.{0,12}|ไม่ตรง|ผิดแล้ว|ผิด|ห๊ะ|หา+|อะไรวะ|อะไรเนี่ย|ทดสอบ|เทส|test|testing|wrong( answer)?|huh|what\??|nonsense|you are wrong|not what i asked)[\sa-z\u0e00-\u0e7f!?.]{0,6}$/i
const INTEREST = /^\s*(สนใจ|สนใจจ้า|สนใจนะ|อยากทราบ|อยากรู้|อยากรู้เพิ่ม|ขอรายละเอียด|ขอข้อมูล|ขอข้อมูลเพิ่ม|ได้|ได้เลย|โอเค|ok|okay|yes|ใช่|interested|i'?m interested|tell me more|sounds good)[\sa-z\u0e00-\u0e7f!.]{0,8}$/i
const BUSINESS: { key: string; th: string; en: string; tha: string; ena: string }[] = [
  { key: 'food', th: 'ร้านอาหาร/คาเฟ่', en: 'Restaurant / cafe', tha: 'ร้านอาหารและคาเฟ่มักเริ่มจากเว็บไซต์ที่มีเมนูและแผนที่ ต่อด้วยระบบจองโต๊ะหรือสั่งอาหาร และ LINE OA เก็บลูกค้าประจำครับ', ena: 'Restaurants and cafes usually start with a simple website with menu and map, then table booking or online ordering, and a LINE OA to keep regulars coming back.' },
  { key: 'shop', th: 'ร้านค้าออนไลน์', en: 'Online store', tha: 'ร้านค้าออนไลน์มักเริ่มจากหน้าร้านที่ใช้งานง่าย มีตะกร้าและชำระเงิน แล้วค่อยต่อระบบสต็อกและออเดอร์เมื่อขายได้มากขึ้นครับ', ena: 'Online stores usually start with an easy storefront with cart and payments, then add stock and order management as sales grow.' },
  { key: 'service', th: 'คลินิก/ความงาม/บริการ', en: 'Clinic / beauty / services', tha: 'ธุรกิจบริการมักต้องการเว็บที่น่าเชื่อถือ ระบบนัดหมายออนไลน์ และการแจ้งเตือนลูกค้าผ่าน LINE ครับ', ena: 'Service businesses usually need a trustworthy website, online appointment booking and customer reminders through LINE.' },
  { key: 'property', th: 'อสังหาริมทรัพย์', en: 'Real estate', tha: 'ธุรกิจอสังหาฯ มักต้องการเว็บแสดงโครงการ ระบบรับลูกค้าสนใจ และ CRM ติดตามลูกค้าครับ', ena: 'Real estate usually needs a project showcase website, lead capture and a CRM to follow up with buyers.' },
  { key: 'edu', th: 'การศึกษา/คอร์สออนไลน์', en: 'Education / courses', tha: 'งานด้านการศึกษามักต้องการระบบสมัครเรียน หน้าคอร์ส และระบบเรียนออนไลน์ครับ', ena: 'Education usually needs course pages, enrolment and an online learning system.' },
  { key: 'hotel', th: 'โรงแรม/ท่องเที่ยว', en: 'Hotel / travel', tha: 'โรงแรมและท่องเที่ยวมักต้องการเว็บที่สวยและรับจองตรง เชื่อมระบบห้องพักหรือทัวร์ครับ', ena: 'Hotels and travel businesses usually need a beautiful site with direct booking, connected to rooms or tours.' },
  { key: 'b2b', th: 'โรงงาน/ธุรกิจ B2B', en: 'Factory / B2B', tha: 'ธุรกิจ B2B มักต้องการเว็บบริษัทที่น่าเชื่อถือ ระบบขอใบเสนอราคา และระบบภายในอย่าง ERP หรือ CRM ครับ', ena: 'B2B companies usually need a credible company website, quote requests and internal systems like ERP or CRM.' },
  { key: 'startup', th: 'สตาร์ทอัพ/แอปใหม่', en: 'Startup / new app', tha: 'สตาร์ทอัพมักเริ่มจากต้นแบบที่ใช้งานได้จริงเพื่อทดสอบตลาด แล้วค่อยพัฒนาให้พร้อมรองรับผู้ใช้จำนวนมากครับ', ena: 'Startups usually begin with a working prototype to test the market, then grow it to handle many users.' },
  { key: 'other', th: 'อื่น ๆ', en: 'Something else', tha: 'ธุรกิจของคุณอาจมีความต้องการเฉพาะ เล่าให้ทีมฟังสั้น ๆ ก็พอครับ', ena: 'Your business may have its own needs. A short chat with the team is all it takes.' },
]

const MEET_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE'
const MEET_WANT = /(นัด|จอง)\s*(ประชุม|คุย|โทร|ปรึกษา|ออนไลน์|วิดีโอ|วีดีโอ)|ประชุมออนไลน์|วิดีโอคอล|วีดีโอคอล|google\s*meet|gmeet|video\s*(call|meeting)|(book|schedule|set up|arrange)\s*(a|an|the)?\s*(call|meeting|appointment|consultation|demo)|online\s*meeting/i

function MeetIcon() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="13" height="14" rx="3.5" fill="#FFD414" /><path d="M16 10.2l5.2-3.6c.5-.3 1.1 0 1.1.6v9.6c0 .6-.6.9-1.1.6L16 13.800z" fill="#F9AB00" /><circle cx="5.600" cy="16" r="1.500" fill="#fff" /></svg>)
}

function ChannelIcon({ id }: { id: string }) {
  if (id === 'whatsapp')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 8.5c.3 3.2 2.9 5.8 6 6.2l1.2-1.4-2-1-.9.7a4 4 0 01-1.9-1.9l.7-.9-1-2z" fill="#fff" /></svg>)
  if (id === 'messenger')
    return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.7.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z" fill="#fff" /><path d="M6.6 13.8l3.2-4.4 2.4 2 3.1-2-3.3 4.5-2.4-2z" fill="#7A5CFF" /></svg>)
  return (<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.8 3 3 6.3 3 10.4c0 3.6 3.2 6.6 7.5 7.2.3.1.7.2.8.5l-.1 1.3c0 .4-.3 1.3 1.1.7s7.4-4.400 7.4-8.700C19.700 6.300 17.500 3 12 3z" fill="#fff" /><text x="12" y="12.600" textAnchor="middle" fontSize="5.200" fontWeight="800" fill="#06C755" fontFamily="Arial,sans-serif">LINE</text></svg>)
}

// Phrases that mean "let me talk to a person". Single words like "agent" or "support" alone are NOT enough,
// because visitors also ask about "AI agents" or "support after launch".
const AGENT_STRONG = /เจ้าหน้าที่|แอดมิน|คนจริง|มนุษย์|ลูกค้าสัมพันธ์|พนักงานขาย|ขอคุยกับคน|live\s*(agent|chat)|human\s+(agent|being|support)|real\s*(person|human)|customer\s*(service|care)|representative|operator|livechat/i
const AGENT_SOFT = /(คุย|ติดต่อ|ขอสาย|โอนสาย|ต่อสาย|ขอพูด|พูดคุย|ปรึกษา|สอบถาม|ทัก|แชท|chat|talk|speak|connect|contact|reach|transfer|message)\s*((กับ|ถึง|หา|with|to|a|an|the|your|me|us)\s*)*(ทีมงาน|ทีม|พนักงาน|คน|ฝ่ายขาย|ฝ่ายซัพพอร์ต|ซัพพอร์ต|เซลส์|ผู้เชี่ยวชาญ|admin|sales|team|staff|someone|somebody|person|people|support|agent|human|rep|expert)/i
// Questions about the bot itself ("who are you", "are you a robot", "ชื่ออะไร", "น้องฮาวี่"...)
const ASKS_IDENTITY = /who\s+are\s+you|what(?:'s|\s+is)?\s+your\s+name|your\s+name|are\s+you\s+(?:a\s+|an\s+)?(?:bot|robot|ai|human|real|person|machine)|\bhavy\b|คุณคือใคร|เธอคือใคร|เป็นใคร|ชื่ออะไร|ชื่อว่าอะไร|น้องฮาวี่|ฮาวี่|เป็นคนหรือ|เป็นบอท|เป็นหุ่นยนต์|คนจริงหรือเปล่า|คนจริงไหม/i
const wantsAgent = (q: string) => q.length < 80 && (AGENT_STRONG.test(q) || AGENT_SOFT.test(q))

const EN_STOP = new Set('a an the and or of to in on for with at by from is are was were be been do does did can could will would should you your we our us i me my it its this that these those what which who how why when where about tell please any there have has had not no yes get got give need want like'.split(' '))
const TH_STOP = /ไหม|ได้|อะไร|คือ|หรือ|ยังไง|อย่างไร|บ้าง|ของ|ครับ|ค่ะ|คะ|นะ|ที่|มี|เป็น|ให้|และ|กับ|ใน|จะ|แล้ว|ด้วย|ช่วย|ขอ|อยาก|ต้องการ/g
// English: whole words. Thai (no spaces): character bigrams. Common filler words are dropped so they never decide a match.
// Pages the bot can point to. A question that mentions one of these topics gets a link to the page,
// even when no written answer matches well (a typo in Thai still finds the page through a bigram check).
type Route = { p: string; th: string; en: string; k: string }
const ROUTES: Route[] = [
  { p: 'industries', th: 'อุตสาหกรรมที่เราทำงานด้วย', en: 'Industries we serve', k: 'อุตสาหกรรม industry industries ภาคธุรกิจ' },
  { p: 'industries/fintech', th: 'ฟินเทค การเงิน', en: 'Fintech', k: 'ฟินเทค การเงิน ธนาคาร ประกัน fintech banking insurance payment' },
  { p: 'industries/healthcare', th: 'สุขภาพ การแพทย์', en: 'Healthcare', k: 'สุขภาพ โรงพยาบาล การแพทย์ คลินิก healthcare hospital medical clinic' },
  { p: 'industries/retail', th: 'ค้าปลีก', en: 'Retail', k: 'ค้าปลีก ร้านค้า retail shop store' },
  { p: 'industries/manufacturing', th: 'การผลิต โรงงาน', en: 'Manufacturing', k: 'โรงงาน การผลิต manufacturing factory' },
  { p: 'industries/logistics', th: 'โลจิสติกส์', en: 'Logistics', k: 'โลจิสติกส์ ขนส่ง คลังสินค้า logistics shipping warehouse' },
  { p: 'industries/education', th: 'การศึกษา', en: 'Education', k: 'การศึกษา โรงเรียน มหาวิทยาลัย education school university' },
  { p: 'industries/government', th: 'ภาครัฐ', en: 'Government', k: 'ภาครัฐ หน่วยงานรัฐ ราชการ government public sector' },
  { p: 'industries/real-estate', th: 'อสังหาริมทรัพย์', en: 'Real estate', k: 'อสังหาริมทรัพย์ อสังหา คอนโด real estate property' },
  { p: 'industries/automotive', th: 'ยานยนต์', en: 'Automotive', k: 'ยานยนต์ รถยนต์ automotive car vehicle' },
  { p: 'industries/energy-utilities', th: 'พลังงาน สาธารณูปโภค', en: 'Energy & utilities', k: 'พลังงาน สาธารณูปโภค energy utilities' },
  { p: 'industries/telecommunications', th: 'โทรคมนาคม', en: 'Telecommunications', k: 'โทรคมนาคม telecom telecommunications' },
  { p: 'industries/hospitality-travel', th: 'ท่องเที่ยว โรงแรม', en: 'Hospitality & travel', k: 'ท่องเที่ยว โรงแรม ที่พัก hospitality travel hotel tourism' },
  { p: 'industries/media-entertainment', th: 'สื่อและบันเทิง', en: 'Media & entertainment', k: 'สื่อ บันเทิง media entertainment' },
  { p: 'industries/agriculture', th: 'เกษตร', en: 'Agriculture', k: 'เกษตร ฟาร์ม agriculture farm' },
  { p: 'industries/consumer-goods', th: 'สินค้าอุปโภคบริโภค', en: 'Consumer goods', k: 'สินค้าอุปโภค บริโภค consumer goods fmcg' },
  { p: 'industries/professional-services', th: 'บริการวิชาชีพ', en: 'Professional services', k: 'บริการวิชาชีพ ที่ปรึกษา สำนักงานกฎหมาย professional services consulting law firm' },
  { p: 'industries/technology', th: 'เทคโนโลยี ซอฟต์แวร์', en: 'Technology', k: 'สตาร์ทอัป startup saas technology company' },
  { p: 'industries/aerospace-defense', th: 'การบินและกลาโหม', en: 'Aerospace & defense', k: 'การบิน กลาโหม aerospace defense' },
  { p: 'services', th: 'บริการทั้งหมด', en: 'All services', k: 'บริการ services' },
  { p: 'services/web-mobile', th: 'เว็บและแอปมือถือ', en: 'Web & mobile apps', k: 'ทำเว็บ เว็บไซต์ แอปมือถือ แอปพลิเคชัน website mobile app ios android' },
  { p: 'services/web-development', th: 'พัฒนาเว็บ', en: 'Web development', k: 'พัฒนาเว็บ เว็บแอป web development web app' },
  { p: 'services/ecommerce', th: 'อีคอมเมิร์ซ', en: 'E-commerce', k: 'อีคอมเมิร์ซ ร้านออนไลน์ ขายของออนไลน์ ecommerce e-commerce online store' },
  { p: 'services/ux-ui-design', th: 'ออกแบบ UX/UI', en: 'UX/UI design', k: 'ออกแบบ ux ui ดีไซน์ design' },
  { p: 'services/user-research', th: 'วิจัยผู้ใช้', en: 'User research', k: 'วิจัยผู้ใช้ user research สัมภาษณ์ผู้ใช้' },
  { p: 'services/design-systems', th: 'Design System', en: 'Design systems', k: 'design system ดีไซน์ซิสเต็ม component' },
  { p: 'services/branding', th: 'สร้างแบรนด์', en: 'Brand strategy & identity', k: 'แบรนด์ โลโก้ branding brand logo สร้างแบรนด์ อัตลักษณ์' },
  { p: 'services/brand-experience', th: 'ประสบการณ์แบรนด์', en: 'Brand experience', k: 'ประสบการณ์แบรนด์ brand experience' },
  { p: 'services/product-discovery', th: 'Product Discovery', en: 'Product discovery', k: 'product discovery ค้นหาโจทย์ ไอเดียผลิตภัณฑ์' },
  { p: 'services/rapid-prototyping', th: 'ต้นแบบ Prototype', en: 'Rapid prototyping', k: 'ต้นแบบ prototype prototyping mvp' },
  { p: 'services/ai', th: 'AI ปัญญาประดิษฐ์', en: 'AI', k: 'ปัญญาประดิษฐ์ เอไอ ai chatbot แชตบอท llm machine learning' },
  { p: 'services/ai-voice-agents', th: 'AI Voice Agent', en: 'AI voice agents', k: 'voice agent เสียง โทรอัตโนมัติ ตอบโทรศัพท์ voice ai call center' },
  { p: 'services/automation', th: 'ระบบอัตโนมัติ', en: 'Automation', k: 'อัตโนมัติ ออโตเมชัน automation workflow rpa' },
  { p: 'services/data-analytics', th: 'ข้อมูลและ Analytics', en: 'Data & analytics', k: 'ข้อมูล วิเคราะห์ dashboard แดชบอร์ด data analytics bi' },
  { p: 'services/cloud-devops', th: 'Cloud และ DevOps', en: 'Cloud & DevOps', k: 'คลาวด์ cloud devops aws azure gcp' },
  { p: 'services/cloud-services-migration', th: 'ย้ายขึ้นคลาวด์', en: 'Cloud migration', k: 'ย้ายขึ้นคลาวด์ cloud migration migrate' },
  { p: 'services/cybersecurity', th: 'ความปลอดภัยไซเบอร์', en: 'Cybersecurity', k: 'ความปลอดภัย ไซเบอร์ แฮก cybersecurity security pentest' },
  { p: 'services/pdpa-compliance', th: 'PDPA', en: 'PDPA compliance', k: 'pdpa ข้อมูลส่วนบุคคล compliance privacy' },
  { p: 'services/erp-crm', th: 'ERP / CRM', en: 'ERP / CRM', k: 'erp crm ระบบบริหาร odoo sap' },
  { p: 'services/enterprise-solutions', th: 'ระบบองค์กร', en: 'Enterprise solutions', k: 'ระบบองค์กร enterprise solutions' },
  { p: 'services/backend-api', th: 'Backend และ API', en: 'Backend & API', k: 'backend api เชื่อมระบบ integration หลังบ้าน' },
  { p: 'services/application-modernization', th: 'ปรับปรุงระบบเก่า', en: 'Application modernization', k: 'ระบบเก่า legacy modernization ปรับปรุงระบบ' },
  { p: 'services/digital-transformation', th: 'Digital Transformation', en: 'Digital transformation', k: 'ดิจิทัลทรานส์ฟอร์เมชัน digital transformation ปรับองค์กร' },
  { p: 'services/line-mini-apps', th: 'LINE Mini App', en: 'LINE Mini Apps', k: 'line mini app ไลน์ มินิแอป line oa' },
  { p: 'services/qa-testing', th: 'ทดสอบซอฟต์แวร์', en: 'QA & testing', k: 'ทดสอบ เทสต์ qa testing quality' },
  { p: 'services/support-maintenance', th: 'ดูแลระบบหลังส่งมอบ', en: 'Support & maintenance', k: 'ดูแลระบบ ซัพพอร์ต บำรุงรักษา support maintenance' },
  { p: 'services/seo-aeo-geo', th: 'SEO · AEO · GEO', en: 'SEO, AEO & GEO', k: 'seo aeo geo ติดอันดับ google เสิร์ชเอนจิน ค้นหา ติดหน้าแรก chatgpt perplexity gemini ai search search engine ranking' },
  { p: 'services/growth-strategy', th: 'กลยุทธ์การเติบโต', en: 'Growth strategy', k: 'กลยุทธ์ การตลาด เติบโต growth strategy marketing' },
  { p: 'services/forward-deployed-engineering', th: 'วิศวกรประจำทีมลูกค้า', en: 'Forward-deployed engineering', k: 'วิศวกรประจำ forward deployed engineering embedded' },
  { p: 'services/finish-your-vibe-coded-app', th: 'ต่อยอดแอปที่ใช้ AI เขียน', en: 'Finish your vibe-coded app', k: 'vibe coding vibe-coded cursor lovable bolt แอปที่ใช้ ai เขียน' },
  { p: 'case-studies', th: 'ผลงานและเคสลูกค้า', en: 'Case studies', k: 'ผลงาน เคส ตัวอย่างงาน portfolio case study case studies' },
  { p: 'blog', th: 'บทความ', en: 'Blog', k: 'บทความ บล็อก blog article' },
  { p: 'careers', th: 'ร่วมงานกับเรา', en: 'Careers', k: 'สมัครงาน ร่วมงาน ตำแหน่งงาน รับสมัคร career careers job hiring' },
  { p: 'about', th: 'เกี่ยวกับเรา', en: 'About us', k: 'เกี่ยวกับ ทีมงาน ประวัติบริษัท founder who-are-you' },
  { p: 'partners', th: 'พาร์ทเนอร์', en: 'Partners', k: 'พาร์ทเนอร์ พันธมิตร partner partners' },
  { p: 'contact', th: 'ติดต่อเรา', en: 'Contact', k: 'ติดต่อ ขอใบเสนอราคา ราคา quote contact pricing' },
  { p: 'privacy', th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy policy', k: 'นโยบายความเป็นส่วนตัว privacy policy' },
]
const SHORT_OK = new Set(['ai','ux','ui','erp','crm','api','qa','seo','mvp','rpa','aws','gcp','bi','pdpa'])
const bigrams = (s: string) => { const o = new Set<string>(); const c = Array.from(s.replace(/\s+/g, '')); for (let i = 0; i < c.length - 1; i++) o.add(c[i] + c[i + 1]); return o }
const routeLinks = (q: string, lang: string, skip: string[] = [], max = 3): { label: string; href: string }[] => {
  const ql = q.toLowerCase()
  const qb = bigrams(ql)
  const scored: { r: Route; s: number }[] = []
  ROUTES.forEach((r) => {
    let best = 0
    r.k.split(' ').forEach((w) => {
      if (!w) return
      const thai = /[฀-๿]/.test(w)
      if (!thai && w.length < 4 && !SHORT_OK.has(w)) return // tiny English words like "do" or "you" must not match anything
      if (!thai && w.length <= 3 ? new RegExp('(^|[^a-z])' + w.replace(/[^a-z0-9]/g, '') + '([^a-z]|$)').test(ql) : ql.includes(w)) { best = Math.max(best, 1 + w.length / 100); return }
      if (thai && w.length >= 5) { // tolerate a typo: most of the word's letter pairs appear in the question
        const wb = bigrams(w); let hit = 0; wb.forEach((b) => { if (qb.has(b)) hit++ })
        const cov = hit / wb.size
        if (cov >= 0.5 && hit >= 4) best = Math.max(best, cov * 0.9)
      }
    })
    if (best > 0) scored.push({ r, s: best })
  })
  scored.sort((a, b) => b.s - a.s)
  const out: { label: string; href: string }[] = []
  for (const { r } of scored) {
    const href = `/${lang}/${r.p}`
    if (skip.includes(href) || out.some((o) => o.href === href)) continue
    out.push({ label: lang === 'en' ? r.en : r.th, href })
    if (out.length >= max) break
  }
  return out
}

const tokens = (s: string) => {
  const out = new Set<string>()
  const c = s.toLowerCase().replace(TH_STOP, ' ').replace(/[^a-z0-9฀-๿]+/g, ' ').trim()
  for (const w of c.split(' ')) {
    if (!w) continue
    if (/[฀-๿]/.test(w)) {
      if (w.length === 1) out.add(w)
      for (let i = 0; i < w.length - 1; i++) out.add(w.slice(i, i + 2))
    } else if (!EN_STOP.has(w) && w.length > 1) out.add(w.length > 4 ? w.replace(/(ing|es|s)$/, '') : w)
  }
  return out
}

// The robot mascot, in the site colours. Pure SVG + CSS, no image files.
function Mascot() {
  return (
    <span className="chat-mascot" aria-hidden="true">
      <svg viewBox="0 0 160 176" className="chat-robot-svg">
        <defs>
          <linearGradient id="hv-head" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EEEBFF" />
            <stop offset="0.55" stopColor="#C9C2FB" />
            <stop offset="1" stopColor="#A89DF5" />
          </linearGradient>
        </defs>
        <ellipse className="hv-shadow" cx="80" cy="166" rx="34" ry="6" fill="#7B6EF6" fillOpacity="0.28" style={{ transformOrigin: '80px 166px' }} />
        <g className="hv-float">
          <g className="hv-ant" style={{ transformOrigin: '80px 44px' }}>
            <rect x="77" y="20" width="6" height="26" rx="3" fill="#8F86DA" />
            <circle className="hv-ball" cx="80" cy="17" r="10" fill="#7B6EF6" />
          </g>
          <path d="M40 66Q80 28 120 66Z" fill="#8F86DA" />
          <circle cx="80" cy="92" r="47" fill="url(#hv-head)" />
          <rect x="37" y="66" width="86" height="46" rx="23" fill="#141329" stroke="#8F86DA" strokeWidth="5" />
          <g className="hv-blink" style={{ transformOrigin: '80px 88px' }}>
            <path d="M52 90a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M88 90a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="5.5" strokeLinecap="round" />
          </g>
          <g className="hv-phone" style={{ transformOrigin: '76px 112px' }}>
            <rect x="62" y="94" width="28" height="42" rx="7" fill="#231F52" transform="rotate(-3 76 115)" />
            <circle cx="82" cy="102" r="3.2" fill="#53C3D7" />
          </g>
          <g className="hv-hand-l">
            <circle cx="57" cy="119" r="11" fill="#9187E0" transform="translate(3 4)" />
            <circle cx="57" cy="119" r="11" fill="#DCD7FD" />
          </g>
          <g className="hv-hand-r">
            <circle cx="98" cy="130" r="11" fill="#9187E0" transform="translate(3 4)" />
            <circle cx="98" cy="130" r="11" fill="#DCD7FD" />
          </g>
        </g>
      </svg>
    </span>
  )
}

// Bot replies "type" themselves in, then the links / buttons fade in underneath.
function BotBubble({ text, fresh, onTick, children }: { text: string; fresh?: boolean; onTick: () => void; children?: React.ReactNode }) {
  const chars = useMemo(() => Array.from(text), [text])
  const [n, setN] = useState(fresh ? 0 : chars.length)
  useEffect(() => {
    if (!fresh) { setN(chars.length); return }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(chars.length); return }
    setN(0)
    const step = Math.max(1, Math.ceil(chars.length / 110))
    const id = setInterval(() => {
      setN((v) => {
        const next = Math.min(chars.length, v + step)
        if (next >= chars.length) clearInterval(id)
        return next
      })
      onTick()
    }, 22)
    return () => clearInterval(id)
  }, [chars, fresh]) // eslint-disable-line react-hooks/exhaustive-deps
  const done = n >= chars.length
  return (
    <>
      <div className="px-3.5 py-2 text-[13px] rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', borderTopLeftRadius: 6, lineHeight: 1.6 }}>
        {chars.slice(0, n).join('')}{!done && <span className="chat-caret" aria-hidden="true" />}
      </div>
      {done && <div className="chat-fade" ref={(el) => { if (el) onTick() }}>{children}</div>}
    </>
  )
}

// Plain greetings / thanks / goodbyes. These have no topic words, so they used to fall through to "I am not sure".
const GREETING = /^\s*(hi+|hello+|hey+|yo|good\s*(morning|afternoon|evening)|greetings|สวัสดี[\u0e00-\u0e7f]*|หวัดดี[\u0e00-\u0e7f]*|ดีครับ|ดีค่ะ|ดีจ้า|ดี|เฮ้|ฮัลโหล|hola)[\s!.,?ฯ~]*$/i
const THANKS = /^\s*(thanks?|thank you|thx|ty|ขอบคุณ[\u0e00-\u0e7f]*|ขอบใจ|แต๊งค์|ขอบพระคุณ)[\s!.,?ฯ~]*$/i
const BYE = /^\s*(bye+|goodbye|see you|ลาก่อน|บาย|แล้วเจอกัน)[\s!.,?ฯ~]*$/i

// Light small talk, so the bot feels conversational before the question gets to business.
const SMALLTALK: { re: RegExp; en: string; th: string }[] = [
  { re: /^\s*(แนะนำ(หน่อย|ที|หน่อยได้ไหม|ได้ไหม)?|ช่วยแนะนำ(หน่อย)?|recommend( something)?|any (recommendations|suggestions)|suggest( something)?|what do you recommend)[\s!.,?ฯ~]*$/i,
    en: 'Sure! What would you like a recommendation for? For example a service for your business, the right package for your budget, or where to start with an app built with AI.',
    th: 'ได้เลยครับ อยากให้แนะนำเรื่องอะไรดีครับ เช่น บริการที่เหมาะกับธุรกิจ แพ็กเกจตามงบประมาณ หรือเริ่มต้นแก้แอปที่ทำด้วย AI ยังไงดี บอกได้เลยครับ' },
  { re: /(how are you|how'?s it going|what'?s up|sup\b|สบายดี(ไหม|มั้ย|หรือเปล่า)?|เป็นไงบ้าง|เป็นยังไงบ้าง|ทำอะไรอยู่)/i,
    en: 'I am doing great, thanks for asking! What would you like to know about Haliviq?',
    th: 'สบายดีครับ ขอบคุณที่ถามนะครับ แล้วคุณล่ะครับ วันนี้อยากรู้เรื่องอะไรของ Haliviq ไหมครับ' },
  { re: /(what can you do|how can you help|can you help|help me|ทำอะไรได้บ้าง|ช่วยอะไรได้บ้าง|ช่วยอะไรได้|ช่วยหน่อย|ช่วยได้ไหม)/i,
    en: 'I can tell you about our services, pricing, timelines and technology, point you to the right page, or connect you with the team. Try something like "how much does it cost" or "can you fix my Lovable app".',
    th: 'ผมช่วยตอบเรื่องบริการ ราคา ระยะเวลา เทคโนโลยี พาไปหน้าที่เกี่ยวข้อง หรือต่อสายให้ทีมงานได้ครับ ลองถามว่า "ราคาเท่าไหร่" หรือ "รับแก้แอปที่ทำด้วย AI ไหม" ก็ได้ครับ' },
  { re: /(nice to meet|pleased to meet|ยินดีที่ได้รู้จัก|ยินดีที่รู้จัก)/i,
    en: 'Nice to meet you too! I am Havy. What brings you to Haliviq today?',
    th: 'ยินดีที่ได้รู้จักเช่นกันครับ ผมน้องฮาวี่ วันนี้สนใจบริการด้านไหนของ Haliviq ครับ' },
  { re: /(who (made|built|created) you|ใครสร้าง|ใครทำคุณ|ใครเป็นคนทำ)/i,
    en: 'The Haliviq team built me to answer questions about the company. For anything beyond that, a real person on the team will reply within 24 hours.',
    th: 'ทีมงาน Haliviq สร้างผมขึ้นมาเพื่อตอบคำถามเกี่ยวกับบริษัทครับ ถ้าเรื่องไหนเกินกว่านั้น ทีมงานตัวจริงตอบกลับภายใน 24 ชั่วโมงครับ' },
  { re: /(are you (a )?(real|human|bot|robot|ai)|คุณ(เป็น)?คนจริง|เป็นคนหรือบอท|เป็นบอทหรือ)/i,
    en: 'I am Havy, an automated assistant, not a person. If you would like a real person, just say "chat with an agent".',
    th: 'ผมน้องฮาวี่ เป็นผู้ช่วยอัตโนมัติ ไม่ใช่คนจริงครับ ถ้าอยากคุยกับคน พิมพ์ว่า "คุยกับเจ้าหน้าที่" ได้เลยครับ' },
  { re: /(i am|i'?m|my name is|ผมชื่อ|ฉันชื่อ|หนูชื่อ|เราชื่อ)\s*\S{1,20}\s*$/i,
    en: 'Nice to meet you! What can I help you with today?',
    th: 'ยินดีที่ได้รู้จักครับ วันนี้ให้ผมช่วยอะไรดีครับ' },
]

export default function ChatBot({ lang }: { lang: Lang }) {
  const isEN = lang === 'en'
  const faqItems = useMemo(() => (((t[lang] as any)?.faq?.items || []) as QA[]), [lang])
  // The large knowledge base (public/chat-kb-<lang>.json) is fetched the first time the chat opens, so it never weighs on page load.
  const [kb, setKb] = useState<QA[]>([])
  const items = useMemo(() => (kb.length ? kb : faqItems), [kb, faqItems])
  const index = useMemo(() => items.map((it) => ({ it, g: tokens(it.q + ' ' + (it.x || '')), qg: tokens(it.q), kl: (it.k || '').toLowerCase() })), [items])
  // Rarer words count for more, so "ERP" matters more than "services".
  const { idf, maxIdf } = useMemo(() => {
    const df = new Map<string, number>()
    index.forEach((e) => e.g.forEach((x) => df.set(x, (df.get(x) || 0) + 1)))
    const m = new Map<string, number>()
    df.forEach((n, x) => m.set(x, Math.log(1 + index.length / n)))
    return { idf: m, maxIdf: Math.log(1 + index.length) }
  }, [index])
  const [open, setOpen] = useState(false)
  // keep the panel mounted for a moment after closing so it can fade out
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (open) { setMounted(true); return }
    const id = setTimeout(() => setMounted(false), 220)
    return () => clearTimeout(id)
  }, [open])
  const [text, setText] = useState('')
  const [leadContact, setLeadContact] = useState('')
  const [leadOk, setLeadOk] = useState(false)
  const [leadBusy, setLeadBusy] = useState(false)
  const [leadErr, setLeadErr] = useState('')
  const [leadDone, setLeadDone] = useState(false)
  const hello = isEN
    ? 'Hello! I am Havy, the assistant of Haliviq. I can help with our services, technology, timelines, pricing or how to start a project. Ask me anything, or pick a question below.'
    : 'สวัสดีครับ ผมชื่อน้องฮาวี่ เป็นผู้ช่วยของบริษัท Haliviq ครับ ช่วยตอบเรื่องบริการ เทคโนโลยี ระยะเวลา ราคา หรือวิธีเริ่มโปรเจกต์ได้เลย พิมพ์ถามได้เลย หรือเลือกคำถามด้านล่างครับ'
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: hello }])
  const end = useRef<HTMLDivElement>(null)
  const box = useRef<HTMLDivElement>(null)
  const toEnd = () => { const el = box.current; if (el) el.scrollTop = el.scrollHeight }

  useEffect(() => { toEnd() }, [msgs, open]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { setKb([]) }, [lang]) // drop the other language's knowledge base when the page language changes
  useEffect(() => {
    if (!open) return
    let dead = false
    const get = (u: string) => fetch(u).then((r) => (r.ok ? r.json() : [])).catch(() => [])
    Promise.all([get(`/chat-kb-extra-${lang}.json`), get(`/chat-kb-${lang}.json`)]).then(([x, d]: QA[][]) => { if (!dead && Array.isArray(d)) setKb([...(Array.isArray(x) ? x : []), ...d]) })
    return () => { dead = true }
  }, [open, lang])
  useEffect(() => { setMsgs([{ from: 'bot', text: hello }]) }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  const log = (question: string, matched: number) => {
    const url = process.env.NEXT_PUBLIC_CHAT_LOG_URL
    if (!url) return
    try {
      fetch(url, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ ts: new Date().toISOString(), lang, page: location.pathname, question: question.slice(0, 300), matched: matched >= 0 ? items[matched].q : '' }) })
    } catch {}
  }

  const fbCount = useRef(0)

  const [copied, setCopied] = useState(false)
  // Plain-text recap of what the visitor asked, so they never have to retype it for the team.
  const chatSummary = () => {
    const mine = msgs.filter((x) => x.from === 'me').map((x) => x.text)
    if (!mine.length) return ''
    const topics = Array.from(new Set(mine.map((t) => prodOf(t)).filter(Boolean).map((x) => (isEN ? x!.chipEn : x!.chip))))
    return (isEN ? 'Hi Haliviq team, I was chatting with Havy on your website. Here is what I asked:\n' : 'สวัสดีครับ ผมคุยกับน้องฮาวี่ในเว็บไซต์ Haliviq มาแล้ว สรุปที่ผมถามไว้:\n')
      + (topics.length ? (isEN ? 'Interested in: ' : 'สนใจ: ') + topics.join(', ') + '\n' : '')
      + mine.slice(-8).map((t) => '- ' + t.slice(0, 200)).join('\n')
  }
  useEffect(() => {
    try { const sm = chatSummary(); if (sm) sessionStorage.setItem('hv_chat', JSON.stringify({ text: sm, ts: Date.now() })) } catch {}
  }, [msgs]) // eslint-disable-line react-hooks/exhaustive-deps
  const notified = useRef<Record<string, boolean>>({})
  const copySummary = (channel = '') => {
    const sm = chatSummary()
    if (!sm) return
    try { navigator.clipboard.writeText(sm).then(() => setCopied(true)).catch(() => {}) } catch {}
    // Tell the team (LINE) once per channel that the visitor is about to message them, with the recap. No contact details are sent.
    if (channel && !notified.current[channel]) {
      notified.current[channel] = true
      try {
        const mine = msgs.filter((x) => x.from === 'me').map((x) => x.text)
        const topics = Array.from(new Set(mine.map((t) => prodOf(t)).filter(Boolean).map((x) => (isEN ? x!.chipEn : x!.chip))))
        fetch('/api/lead', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ kind: 'tap', channel, topics, lines: mine.slice(-8), lang, page: location.pathname }) }).catch(() => {})
      } catch {}
    }
  }

  const submitLead = async () => {
    const contact = leadContact.trim()
    if (contact.length < 5) { setLeadErr(isEN ? 'Please add a phone, LINE ID or email.' : 'กรุณาใส่เบอร์โทร LINE ID หรืออีเมลครับ'); return }
    if (!leadOk) { setLeadErr(isEN ? 'Please tick the consent box first.' : 'กรุณาติ๊กยินยอมก่อนนะครับ'); return }
    setLeadErr(''); setLeadBusy(true)
    const mine = msgs.filter((x) => x.from === 'me').map((x) => x.text)
    const topics = Array.from(new Set(mine.map((t) => prodOf(t)).filter(Boolean).map((x) => (isEN ? x!.chipEn : x!.chip))))
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, consent: true, topics, lines: mine.slice(-8), lang, page: typeof window !== 'undefined' ? window.location.pathname : '' }),
      })
      const d = await r.json().catch(() => ({}))
      if (r.ok && d.ok) {
        setLeadDone(true)
        setMsgs((m) => [...m, { from: 'bot', fresh: true, noChips: true, text: isEN ? 'Thank you. I have passed your details and what we talked about to the team, so you will not need to repeat yourself. They will contact you soon. You can keep asking me anything in the meantime.' : 'ขอบคุณครับ ผมส่งข้อมูลและเรื่องที่คุยกันให้ทีมงานแล้ว คุณไม่ต้องเล่าซ้ำ ทีมจะติดต่อกลับเร็ว ๆ นี้ครับ ระหว่างนี้ถามผมต่อได้เลย' }])
      } else {
        setLeadErr(isEN ? 'Sorry, I could not send it just now. Please use one of the channels above.' : 'ขออภัยครับ ส่งไม่สำเร็จในตอนนี้ ลองใช้ช่องทางด้านบนได้เลยครับ')
      }
    } catch {
      setLeadErr(isEN ? 'Sorry, I could not send it just now. Please use one of the channels above.' : 'ขออภัยครับ ส่งไม่สำเร็จในตอนนี้ ลองใช้ช่องทางด้านบนได้เลยครับ')
    }
    setLeadBusy(false)
  }
  const answer = (q: string): { text: string; links?: Msg['links']; idx: number; agent?: boolean; meet?: boolean; fallback?: boolean; noChips?: boolean; choices?: { key: string; label: string }[] } => {
    if (q.length < 60 && ASKS_IDENTITY.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'I am Havy, the assistant robot of Haliviq. I am an automated bot, not a person. I answer from the information on this website, and if you would like a real person, just say "chat with an agent" and I will connect you with the team.'
          : 'ผมน้องฮาวี่ (Havy) หุ่นยนต์ผู้ช่วยของ Haliviq ครับ ผมเป็นบอทอัตโนมัติ ไม่ใช่คนจริง ผมตอบจากข้อมูลในเว็บไซต์นี้ ถ้าอยากคุยกับคน พิมพ์ว่า "คุยกับเจ้าหน้าที่" แล้วผมจะต่อให้ทีมงานครับ',
      }
    }
    if (q.length < 40 && GREETING.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Hello! I am Havy, the assistant of Haliviq. How can I help? You can ask about our services, pricing, timelines or how to start a project.'
          : 'สวัสดีครับ ผมชื่อน้องฮาวี่ เป็นผู้ช่วยของบริษัท Haliviq ครับ มีอะไรให้ช่วยไหมครับ ถามเรื่องบริการ ราคา ระยะเวลา หรือวิธีเริ่มโปรเจกต์ได้เลยครับ',
      }
    }
    if (q.length < 40 && THANKS.test(q)) {
      return { idx: -1, noChips: true, text: isEN ? 'You are welcome! Anything else I can help with?' : 'ยินดีครับ มีอะไรให้ช่วยอีกไหมครับ' }
    }
    if (q.length < 40 && BYE.test(q)) {
      return { idx: -1, noChips: true, text: isEN ? 'Goodbye! Come back any time, or reach the team on the contact page.' : 'แล้วพบกันครับ ถ้ามีคำถามเพิ่มเติม กลับมาถามได้ตลอด หรือติดต่อทีมงานผ่านหน้าติดต่อเราได้ครับ' }
    }
    if (q.length < 120 && PACKAGE_Q.test(q) && !/vibe|lovable|bolt|cursor/i.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'What kind of business are you in? Tap the one that fits and I will tell you what usually works, or ask the team for more details.'
          : 'ทำธุรกิจด้านใดนะครับ สามารถคลิกเลือกธุรกิจที่ต้องการ และสอบถามเพิ่มเติมกับแอดมินได้เลยครับ',
        choices: [
          ...BUSINESS.map((b) => ({ key: b.key, label: isEN ? b.en : b.th })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 160 && ABUSE.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'I am sorry. This may be beyond what Havy can handle, so with your permission I will pass this on to the team. You can reach them directly below.'
          : 'ขออภัยครับ อาจเกินข้อจำกัดของน้องฮาวี่ ขออนุญาตส่งข้อมูลต่อให้เจ้าหน้าที่นะครับ ติดต่อทีมงานโดยตรงได้ที่ช่องทางด้านล่างเลยครับ',
        agent: true,
        noChips: true,
      }
    }
    if (q.length < 30 && CONFUSED.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Sorry, I may have misunderstood. Could you tell me again what you would like to know? For example our services, pricing or how long a project takes, or tap one below. You can also talk to the team directly.'
          : 'ขอโทษครับ ผมอาจเข้าใจคำถามคลาดเคลื่อนไป ช่วยบอกอีกครั้งได้ไหมครับว่าอยากรู้เรื่องอะไร เช่น บริการของเรา ราคา หรือระยะเวลาทำงาน หรือกดเลือกด้านล่างก็ได้ครับ จะคุยกับแอดมินโดยตรงก็ได้เลยครับ',
        choices: [
          { key: 'q:' + (isEN ? 'What services do you offer' : 'ให้บริการอะไรบ้าง'), label: isEN ? 'Our services' : 'บริการของเรา' },
          { key: 'q:' + (isEN ? 'How much does it cost' : 'ราคาเท่าไหร่'), label: isEN ? 'Pricing' : 'ราคา' },
          { key: 'q:' + (isEN ? 'How long does it take' : 'ใช้เวลาเท่าไหร่'), label: isEN ? 'How long it takes' : 'ระยะเวลาทำงาน' },
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 80 && EXPENSIVE_W.test(q) && !DISCOUNT_W.test(q) && !PRICE_SKIP.test(q)) {
      const pe = prodOf(q)
      const web = !pe || pe.k === 'web'
      return {
        idx: -1,
        text: isEN
          ? 'It depends on the level of work. A simple company site is very different from an online shop with payments. What are you looking to build? Tap one below and I will help you work out what you would need. 😊'
          : web
            ? 'มีหลายระดับเลยครับ ขึ้นอยู่กับว่าอยากทำเว็บแบบไหน ถ้าเป็นเว็บแนะนำบริษัททั่วไปก็จะต่างจากเว็บขายของที่มีระบบชำระเงินครับ คุณอยากทำเว็บประมาณไหน เดี๋ยวผมช่วยแนะนำว่าต้องเตรียมอะไรบ้างครับ 😊'
            : `มีหลายระดับเลยครับ ราคา${pe!.th}ขึ้นอยู่กับขนาดและความต้องการของงาน งานเล็กกับระบบใหญ่ต่างกันมาก คุณอยากได้ประมาณไหน เดี๋ยวผมช่วยแนะนำว่าต้องเตรียมอะไรบ้างครับ 😊`,
        choices: [
          ...PRODUCTS.map((x) => ({ key: 'svc:' + x.k, label: isEN ? x.chipEn : x.chip })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 140 && QUOTE_W.test(q) && !PRICE_SKIP.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Of course, a quote is free. Tell us briefly what you want built and the team will send a clear price and timeline. The contact page has a short form, or you can book a free 30-minute call.'
          : 'ได้เลยครับ ใบเสนอราคาไม่มีค่าใช้จ่าย เล่าให้ทีมฟังคร่าว ๆ ว่าอยากได้อะไร แล้วทีมจะส่งราคาและระยะเวลาที่ชัดเจนกลับไปครับ กรอกฟอร์มสั้น ๆ ที่หน้าติดต่อ หรือนัดคุยฟรี 30 นาทีก็ได้ครับ',
        links: [{ label: isEN ? 'Request a quote' : 'ขอใบเสนอราคา', href: `/${lang}/contact` }],
        meet: true,
      }
    }
    if (q.length < 100 && DISCOUNT_W.test(q) && !PRICE_SKIP.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'The team looks at pricing against the real scope of the work. Tell them what you need and a rough budget, and they can shape the plan to fit. Message the team or book a free call.'
          : 'เรื่องราคาทีมงานจะดูตามขอบเขตงานจริงครับ เล่าสิ่งที่อยากได้และงบคร่าว ๆ ให้ทีมฟัง ทีมจะช่วยปรับแนวทางให้พอดีกับงบได้ครับ ทักทีมงานหรือนัดคุยฟรีได้เลย',
        agent: true,
      }
    }
    if (q.length < 100 && TIME_W.test(q) && !PRICE_EXPLICIT.test(q)) {
      const pr = prodOf(q)
      if (pr) {
        return {
          idx: -1,
          text: isEN
            ? `How long ${pr.en} takes depends on the size of the work. A small one and a large system are very different. Once we know what you want, the team gives a clear timeline together with the quote. ${pr.qEn}`
            : `ระยะเวลาทำ${pr.th}ขึ้นอยู่กับขนาดงานครับ งานเล็กกับระบบใหญ่ใช้เวลาต่างกันมาก พอรู้ว่าอยากได้อะไร ทีมจะบอกระยะเวลาที่ชัดเจนพร้อมใบเสนอราคาครับ ${pr.qTh}`,
          agent: true,
        }
      }
      return {
        idx: -1,
        text: isEN
          ? 'It depends on the size of the work, since a small site and a full system are very different. What are you planning to build? Tap one below and I will tell you more, or ask the team.'
          : 'ขึ้นอยู่กับขนาดงานครับ งานเล็กใช้เวลาไม่นาน ระบบใหญ่ใช้เวลามากขึ้น สนใจทำอะไรอยู่ครับ กดเลือกด้านล่าง เดี๋ยวผมบอกเพิ่มให้ หรือสอบถามแอดมินได้เลยครับ',
        choices: [
          ...PRODUCTS.map((x) => ({ key: 'svt:' + x.k, label: isEN ? x.chipEn : x.chip })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 120 && PRICE_W.test(q) && !PRICE_SKIP.test(q) && !(TIME_W.test(q) && !PRICE_EXPLICIT.test(q))) {
      const pr = prodOf(q)
      if (pr) {
        return {
          idx: -1,
          text: isEN
            ? `The price of ${pr.en} depends on ${pr.fEn}. I would rather not guess a number and get it wrong. ${pr.qEn} Tell the team roughly what you need and they will give you a clear estimate for free, with no cost for the first chat.`
            : `ราคา${pr.th}ขึ้นอยู่กับ${pr.fTh}ครับ ผมไม่อยากเดาตัวเลขให้คลาดเคลื่อน ${pr.qTh} เล่าให้ทีมฟังคร่าว ๆ แล้วเราจะประเมินราคาที่ชัดเจนให้ฟรี ไม่มีค่าใช้จ่ายในการคุยครั้งแรกครับ`,
          agent: true,
        }
      }
      return {
        idx: -1,
        text: isEN
          ? 'Pricing depends on what you need, and I would rather not guess. What are you interested in? Tap one below, or ask the team.'
          : 'ราคาขึ้นอยู่กับงานที่ต้องการครับ ผมไม่อยากเดาให้ผิด สนใจทำอะไรอยู่ครับ กดเลือกได้เลย หรือสอบถามแอดมินได้ครับ',
        choices: [
          ...PRODUCTS.map((x) => ({ key: 'svc:' + x.k, label: isEN ? x.chipEn : x.chip })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 100 && CAN_W.test(q) && !FIX_W.test(q) && !TECH_W.test(q)) {
      const sp = CAPS.find((c) => c.re.test(q))
      const pr = prodOf(q)
      const body = sp ? (isEN ? sp.en : sp.th) : pr ? (isEN ? pr.capEn : pr.capTh) : ''
      if (body) {
        return {
          idx: -1,
          text: body + (isEN ? ' Tell me a little more about what you have in mind, or talk to the team.' : ' เล่าเพิ่มได้เลยครับว่าอยากได้แบบไหน หรือคุยกับทีมงานได้เลยครับ'),
          agent: true,
        }
      }
    }
    if (q.length < 140 && START_Q.test(q) && !/ราคา|เท่าไหร่|price|cost|how much|vibe|lovable|bolt|cursor/i.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Happy to help. It works in four simple steps: 1) we listen and understand what you need, 2) we propose an approach with a clear timeline and price, 3) we design and build it and show you progress along the way, 4) we launch and keep looking after it. To start, what kind of business are you in? Tap one below.'
          : 'ยินดีครับ ขั้นตอนง่าย ๆ มี 4 ขั้น 1) คุยให้เข้าใจว่าคุณอยากได้อะไร 2) เสนอแนวทาง ระยะเวลา และราคาที่ชัดเจน 3) ออกแบบและพัฒนา พร้อมให้ดูความคืบหน้าเป็นระยะ 4) เปิดใช้งานและดูแลต่อให้ ก่อนอื่นขอรู้จักคุณหน่อยครับ ทำธุรกิจด้านใดอยู่ครับ กดเลือกได้เลย',
        choices: [
          ...BUSINESS.map((b) => ({ key: b.key, label: isEN ? b.en : b.th })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
        links: [
          { label: isEN ? 'Web development' : 'บริการพัฒนาเว็บไซต์', href: `/${lang}/services/web-development` },
          { label: isEN ? 'Contact the team' : 'ติดต่อทีมงาน', href: `/${lang}/contact` },
        ],
        meet: true,
      }
    }
    if (q.length < 24 && INTEREST.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'Great! What are you looking for? A website, a mobile app, an AI assistant or a business system? Tell me a bit about it, or tap your type of business below.'
          : 'ยินดีครับ สนใจด้านไหนเป็นพิเศษครับ เว็บไซต์ แอปมือถือ ระบบ AI หรือระบบจัดการธุรกิจ เล่าให้ผมฟังได้เลยครับ หรือกดเลือกประเภทธุรกิจของคุณด้านล่างก็ได้ครับ',
        choices: [
          ...BUSINESS.map((b) => ({ key: b.key, label: isEN ? b.en : b.th })),
          { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
        ],
      }
    }
    if (q.length < 70 && SERVICES_Q.test(q) && !/ราคา|เท่าไหร่|price|cost|how much/i.test(q)) {
      return {
        idx: -1,
        text: isEN
          ? 'We build software for businesses, from websites and mobile apps to AI assistants, ERP/CRM systems and LINE Mini Apps. We also do design, SEO and security, and we fix apps made with Lovable, Bolt or Cursor. Tell me what you are trying to do and I will point you to the right service.'
          : 'เราทำซอฟต์แวร์ให้ธุรกิจครับ ตั้งแต่เว็บไซต์ แอปมือถือ ระบบ AI ผู้ช่วยตอบลูกค้า ไปจนถึงระบบ ERP/CRM และ LINE Mini App นอกจากนี้ยังออกแบบ ทำ SEO ดูแลความปลอดภัย และรับแก้แอปที่ทำด้วย Lovable, Bolt, Cursor ครับ ลองบอกผมว่าอยากทำอะไร เดี๋ยวผมแนะนำบริการที่ตรงกับความต้องการของคุณครับ',
        links: [
          { label: isEN ? 'All services' : 'ดูบริการทั้งหมด', href: `/${lang}/services` },
          { label: isEN ? 'See our work' : 'ดูผลงานของเรา', href: `/${lang}/work` },
          { label: isEN ? 'Contact the team' : 'ติดต่อทีมงาน', href: `/${lang}/contact` },
        ],
      }
    }
    if (q.length < 50) {
      const st = SMALLTALK.find((x) => x.re.test(q))
      // "I am ..." must not swallow real questions like "I am looking for an ERP", so the name pattern only fires on very short text
      if (st && !(st === SMALLTALK[6] && q.length > 30)) return { idx: -1, text: isEN ? st.en : st.th }
    }
    const g = tokens(q)
    const ql = q.toLowerCase()
    let qtotal = 0
    g.forEach((x) => { qtotal += idf.get(x) || maxIdf })
    let best = -1, bestScore = 0
    index.forEach((e, i) => {
      let hit = 0, qhit = 0
      g.forEach((x) => { const w = idf.get(x) || 0; if (e.g.has(x)) hit += w; if (e.qg.has(x)) qhit += w })
      if (!hit) return
      // A timing or price answer is only right when the visitor actually asked about time or price.
      if (/ใช้เวลา|นานแค่ไหน|how long|take long/i.test(e.it.q) && !TIME_W.test(q)) return
      if (/ราคา|เท่าไหร่|คิดราคา|\bcost|price|pricing|how much/i.test(e.it.q) && (!PRICE_W.test(q) || (TIME_W.test(q) && !PRICE_EXPLICIT.test(q)))) return
      if ((g.size <= 1 || q.length < 12) && !e.it.p) return // a single bare word is too vague to match a niche answer
      const cov = qtotal ? hit / qtotal : 0
      const qcov = qtotal ? qhit / qtotal : 0
      const kw = e.kl.length > 2 && ql.includes(e.kl) ? 0.12 : 0
      const score = cov * 0.7 + qcov * 0.3 + kw + (e.it.p ? 0.1 : 0)
      if (score > bestScore) { bestScore = score; best = i }
    })
    if (best >= 0 && bestScore >= 0.5) {
      const h = items[best].h
      // Contact-type answers (how to reach us, office, NDA, how to start...) also offer the three chat buttons.
      if (h && h.endsWith('/contact') && items[best].k !== 'faq') {
        return { text: items[best].a, idx: best, agent: true, links: [{ label: isEN ? 'Contact page' : 'ไปหน้าติดต่อเรา', href: h }] }
      }
      const main = h && !h.endsWith('/contact') ? [{ label: isEN ? 'Read more' : 'ดูรายละเอียด', href: h }] : [{ label: isEN ? 'See our work' : 'ดูผลงานของเรา', href: `/${lang}/work` }]
      return { text: items[best].a, idx: best, links: [...main, ...routeLinks(q, lang, [main[0].href, `/${lang}/contact`], 2)].slice(0, 3) }
    }
    const rl = routeLinks(q, lang, [`/${lang}/contact`], 2)
    const FB_TH = [
      'อันนี้ผมอยากให้ทีมงานช่วยตอบให้ตรงกับงานของคุณครับ เล่าเพิ่มอีกนิดได้ไหมครับว่าอยากได้อะไร เดี๋ยวผมช่วยดูให้ หรือทักทีมงานได้เลย',
      'ขอโทษครับ ผมยังไม่แน่ใจว่าเข้าใจตรงไหมครับ ลองพิมพ์ใหม่อีกแบบได้ไหมครับ เช่น บอกประเภทธุรกิจหรืองานที่อยากทำ หรือจะคุยกับแอดมินเลยก็ได้ครับ',
      'เรื่องนี้ให้แอดมินดูแลจะดีที่สุดครับ กดเลือกหัวข้อด้านล่างให้ผมช่วยก่อน หรือกดคุยกับแอดมินได้เลยครับ',
    ]
    const FB_EN = [
      'I would like the team to answer this one properly for your situation. Could you tell me a little more about what you need? I can take another look, or you can message the team.',
      'Sorry, I am not sure I understood. Could you try saying it another way, for example the type of business or what you want to build? Or talk to the team directly.',
      'This one is best handled by the team. Tap a topic below and I will help first, or talk to the team directly.',
    ]
    const fbN = fbCount.current++ % 3
    return {
      idx: -1,
      text: isEN ? FB_EN[fbN] : FB_TH[fbN],
      links: rl.length ? rl : undefined,
      choices: [
        ...PRODUCTS.map((x) => ({ key: 'svc:' + x.k, label: isEN ? x.chipEn : x.chip })),
        { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
      ],
      fallback: true,
    }
  }

  const pick = (key: string, label: string) => {
    if (key === 'agent') { ask(isEN ? 'Chat with an agent' : 'คุยกับเจ้าหน้าที่'); return }
    if (key.startsWith('q:')) { ask(key.slice(2)); return }
    if (key.startsWith('svt:')) { const pd = PRODUCTS.find((x) => x.k === key.slice(4)); if (pd) ask(isEN ? `how long does ${pd.chipEn} take` : `ใช้เวลาทำ${pd.chip}กี่วัน`); return }
    if (key.startsWith('svc:')) { const pd = PRODUCTS.find((x) => x.k === key.slice(4)); if (pd) ask(isEN ? `price of ${pd.chipEn}` : `ราคา${pd.chip}`); return }
    const b = BUSINESS.find((x) => x.key === key)
    if (!b) return
    const tail = isEN
      ? ' Tell me a bit more, such as whether you want a website, an app or a system, and a rough budget, and the team can suggest a package that fits. You can also message the team or book a free call.'
      : ' เล่าเพิ่มได้เลยครับว่าอยากได้เว็บไซต์ แอป หรือระบบแบบไหน และงบประมาณคร่าว ๆ ทีมจะเสนอแพ็กเกจที่พอดีให้ หรือทักแอดมิน หรือนัดคุยฟรีได้เลยครับ'
    setMsgs((m) => [...m, { from: 'me', text: label }, { from: 'bot', fresh: true, agent: true, text: (isEN ? b.ena : b.tha) + tail }])
    log(label, -1)
  }

  const ask = (q: string) => {
    const clean = q.trim()
    if (!clean) return
    if (clean.length < 80 && MEET_WANT.test(clean)) {
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, meet: true, text: isEN ? 'Sure, a free online call works. Pick a time that suits you and the Google Meet link will come to your email.' : 'ได้เลยครับ นัดคุยออนไลน์ฟรี เลือกวันเวลาที่สะดวกได้เลย เดี๋ยวลิงก์ Google Meet จะส่งไปทางอีเมลครับ' }])
      setText('')
      log(clean, -1)
      return
    }
    if (wantsAgent(clean) && !(clean.length < 60 && ASKS_IDENTITY.test(clean))) {
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, agent: true, lead: true, text: isEN ? 'Happy to. There is nothing to decide right now. Just tell the team briefly what you need. Pick the channel you like below. I will copy a summary of our chat so you can paste it there, or leave your contact and I will send the summary to the team.' : 'ได้เลยครับ ไม่ต้องตัดสินใจทำอะไรตอนนี้ เล่าเรื่องที่อยากได้ให้ทีมฟังคร่าว ๆ ก็พอ เลือกช่องทางที่สะดวกด้านล่าง ผมจะคัดลอกสรุปที่คุยกันไว้ให้วางในแชตได้เลย หรือฝากช่องทางติดต่อไว้ ผมจะส่งสรุปให้ทีมครับ' }])
      setText('')
      log(clean, -1)
      return
    }
    const r = answer(clean)
    if (r.fallback) {
      // The FAQ has no good match, so ask the smart endpoint. If it is unavailable, show the normal fallback.
      const history = [...msgs, { from: 'me' as const, text: clean }]
        .filter((x) => x.text)
        .slice(-7)
        .map((x) => ({ role: x.from === 'me' ? 'user' : 'assistant', content: x.text }))
      const showFallback = () => setMsgs((m) => [...m.filter((x) => !x.pending), { from: 'bot', fresh: true, text: r.text, links: r.links, agent: r.agent, meet: r.meet, choices: r.choices, topic: prodOf(clean)?.k }])
      setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', text: '…', pending: true }])
      setText('')
      log(clean, -1)
      fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history, lang }) })
        .then((res) => (res.ok ? res.json() : null))
        .then((d) => {
          if (d && d.ok && d.reply) setMsgs((m) => [...m.filter((x) => !x.pending), { from: 'bot', fresh: true, text: d.reply, agent: !!d.handoff, topic: prodOf(clean)?.k }])
          else showFallback()
        })
        .catch(showFallback)
      return
    }
    setMsgs((m) => [...m, { from: 'me', text: clean }, { from: 'bot', fresh: true, text: r.text, links: r.links, agent: r.agent, meet: r.meet, choices: r.choices, noChips: r.noChips, topic: prodOf(clean)?.k }])
    setText('')
    log(clean, r.idx)
  }

  // Quick-reply chips under the latest bot message, so the visitor always has an easy next tap.
  const followUps = (topic?: string): { key: string; label: string }[] => {
    const pd = PRODUCTS.find((x) => x.k === topic)
    const list = pd
      ? [
          { key: 'q:' + (isEN ? `price of ${pd.chipEn}` : `ราคา${pd.chip}`), label: isEN ? 'Pricing' : 'ราคา' },
          { key: 'q:' + (isEN ? `how long does ${pd.chipEn} take` : `ใช้เวลาทำ${pd.chip}กี่วัน`), label: isEN ? 'How long it takes' : 'ระยะเวลาทำงาน' },
        ]
      : [
          { key: 'q:' + (isEN ? 'What services do you offer' : 'ให้บริการอะไรบ้าง'), label: isEN ? 'Our services' : 'บริการของเรา' },
          { key: 'q:' + (isEN ? 'How much does it cost' : 'ราคาเท่าไหร่'), label: isEN ? 'Pricing' : 'ราคา' },
          { key: 'q:' + (isEN ? 'How long does it take' : 'ใช้เวลาเท่าไหร่'), label: isEN ? 'How long it takes' : 'ระยะเวลาทำงาน' },
        ]
    return [
      ...list,
      { key: 'q:' + (isEN ? 'Where can I see your work' : 'ดูผลงานได้ที่ไหน'), label: isEN ? 'See our work' : 'ดูผลงาน' },
      { key: 'agent', label: isEN ? '💬 Talk to the team' : '💬 คุยกับแอดมิน' },
    ]
  }
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined
    const onScroll = () => {
      setScrolling(true)
      if (t) clearTimeout(t)
      t = setTimeout(() => setScrolling(false), 900)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (t) clearTimeout(t) }
  }, [])
  const lastIdx = msgs.length - 1
  const lastMsg = lastIdx >= 0 ? msgs[lastIdx] : undefined
  const lastChips = lastMsg && lastMsg.from === 'bot' && !lastMsg.pending
    ? (lastMsg.choices || (lastMsg.noChips || lastIdx === 0 ? null : followUps(lastMsg.topic)))
    : null

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[90] flex flex-col items-end" style={{ fontFamily: 'inherit' }}>
      {mounted && (
        <div
          role="dialog"
          aria-label={isEN ? 'Havy, Haliviq assistant' : 'น้องฮาวี่ ผู้ช่วย Haliviq'}
          className={`chat-panel ${open ? 'chat-in' : 'chat-out'} mb-3 flex flex-col overflow-hidden rounded-3xl`}
          style={{ border: '1px solid rgb(var(--fg) / 0.12)', boxShadow: '0 30px 70px -20px rgba(60,50,160,0.45)' }}
        >
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff' }}>
            <span className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'rgba(255,255,255,0.22)' }} aria-hidden="true">
              <svg viewBox="30 48 100 100" width="34" height="34">
                <circle cx="80" cy="96" r="47" fill="#EEEBFF" />
                <rect x="37" y="70" width="86" height="46" rx="23" fill="#141329" stroke="#8F86DA" strokeWidth="5" />
                <path d="M52 94a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="6" strokeLinecap="round" />
                <path d="M88 94a10 10 0 0 1 20 0" fill="none" stroke="#53C3D7" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex-1 leading-tight">
              <p style={{ fontWeight: 600 }}>{isEN ? 'Havy' : 'น้องฮาวี่'}</p>
              <p className="text-xs" style={{ opacity: 0.9 }}>{isEN ? 'Haliviq Assistant · replies instantly' : 'ผู้ช่วย Haliviq · ตอบทันที'}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={isEN ? 'Close' : 'ปิด'} className="text-xl leading-none px-2" style={{ color: '#fff' }}>×</button>
          </div>

          <div ref={box} className="flex-1 overflow-y-auto px-3.5 py-3.5 flex flex-col gap-2.5" style={{ background: 'var(--bg)', overscrollBehavior: 'contain' }}>
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'me' ? 'self-end max-w-[85%]' : 'self-start max-w-[90%]'}>
                {m.from === 'me' ? (
                  <div className="px-3.5 py-2 text-[13px] rounded-2xl" style={{ background: 'linear-gradient(135deg, #7B6EF6, #5A4ED4)', color: '#fff', borderTopRightRadius: 6, lineHeight: 1.6 }}>{m.text}</div>
                ) : (
                  <BotBubble text={m.text} fresh={m.fresh} onTick={toEnd}>
                {(m.agent || m.meet) && (
                  <div className="flex flex-col gap-2 mt-2">
                    {m.agent && CHANNELS.map((c) => (
                      <a key={c.id} href={c.href} onClick={() => copySummary(c.label)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-[13px]" style={{ background: c.bg, color: '#fff', fontWeight: 600 }}>
                        <ChannelIcon id={c.id} />{isEN ? `Chat on ${c.label}` : `คุยทาง ${c.label}`}
                      </a>
                    ))}
                    <a href={MEET_URL} onClick={() => copySummary('Google Meet')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-[13px]" style={{ background: '#fff', color: '#1B1A2E', fontWeight: 600 }}>
                      <MeetIcon />{isEN ? 'Book a Google Meet call' : 'นัดประชุมออนไลน์ Google Meet'}
                    </a>
                    {m.agent && chatSummary() && (
                      <div className="text-[11.5px]" style={{ lineHeight: 1.5, opacity: 0.85 }}>
                        {copied
                          ? (isEN ? 'Copied a summary of this chat. Paste it into the conversation so you do not have to retype.' : 'คัดลอกสรุปที่คุยกับน้องฮาวี่ไว้ให้แล้ว วางในแชตได้เลย ไม่ต้องพิมพ์ใหม่ครับ')
                          : (isEN ? 'Tapping a channel copies a summary of this chat so you can paste it there, and lets the team see that summary too.' : 'กดช่องทางแล้วระบบจะคัดลอกสรุปที่คุยกันไว้ให้ วางในแชตได้เลย และทีมงานจะเห็นสรุปนี้ด้วย (ไม่มีข้อมูลติดต่อของคุณ)')}
                      </div>
                    )}
                  </div>
                )}
                {m.lead && !leadDone && (
                  <div className="mt-2 rounded-2xl p-3 flex flex-col gap-2" style={{ background: 'rgba(123,110,246,0.08)', border: '1px solid rgba(123,110,246,0.25)' }}>
                    <div className="text-[12px]" style={{ lineHeight: 1.5 }}>{isEN ? 'Or let the team contact you. Leave a phone, LINE ID or email:' : 'หรือให้ทีมติดต่อกลับ ฝากเบอร์โทร LINE ID หรืออีเมลไว้ได้ครับ'}</div>
                    <input value={leadContact} onChange={(e) => setLeadContact(e.target.value)} maxLength={120} aria-label={isEN ? 'Phone, LINE ID or email' : 'เบอร์โทร LINE ID หรืออีเมล'} placeholder={isEN ? 'Phone / LINE ID / email' : 'เบอร์โทร / LINE ID / อีเมล'} className="text-[13px] px-3 py-2 rounded-xl outline-none" style={{ border: '1px solid rgb(var(--fg) / 0.2)', background: 'var(--bg)', color: 'inherit' }} />
                    <label className="flex items-start gap-2 text-[11.5px]" style={{ lineHeight: 1.5 }}>
                      <input type="checkbox" checked={leadOk} onChange={(e) => setLeadOk(e.target.checked)} className="mt-0.5" />
                      <span>{isEN ? 'I agree to share this chat summary and my contact with the Haliviq team so they can get back to me.' : 'ยินยอมให้ส่งสรุปบทสนทนาและข้อมูลติดต่อนี้ให้ทีม Haliviq เพื่อติดต่อกลับ'}</span>
                    </label>
                    {leadErr && <div className="text-[11.5px]" style={{ color: '#D14343' }}>{leadErr}</div>}
                    <button type="button" disabled={leadBusy} onClick={submitLead} className="text-[13px] px-3 py-2 rounded-xl" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff', fontWeight: 600, opacity: leadBusy ? 0.6 : 1 }}>{leadBusy ? (isEN ? 'Sending…' : 'กำลังส่ง…') : (isEN ? 'Ask the team to contact me' : 'ให้ทีมติดต่อกลับ')}</button>
                  </div>
                )}
                {i === lastIdx && lastChips && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {lastChips.map((c) => (
                      <button key={c.key} type="button" onClick={() => pick(c.key, c.label)} className="text-xs px-3 py-1.5 rounded-full text-left" style={c.key === 'agent' ? { border: '1px solid #ECD37D', color: '#ECD37D', background: 'transparent' } : { border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent' }}>{c.label}</button>
                    ))}
                  </div>
                )}
                {m.links && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {m.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-xs px-3 py-1.5 rounded-full" style={l.href.endsWith('/work') ? { border: '1px solid #53C3D7', color: '#53C3D7' } : { border: '1px solid var(--accent)', color: 'var(--accent)' }}>{l.label} →</Link>
                    ))}
                  </div>
                )}
                {i === lastIdx && m.from === 'bot' && !m.pending && lastIdx > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href={`/${lang}`} className="text-xs px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff', fontWeight: 600 }}>{isEN ? 'Go to home' : 'ไปหน้าหลัก'}</Link>
                  </div>
                )}
                  </BotBubble>
                )}
              </div>
            ))}
            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 mt-1">
                <button type="button" onClick={() => ask(isEN ? 'Chat with an agent' : 'คุยกับเจ้าหน้าที่')} className="text-xs px-3 py-2 rounded-full" style={{ background: 'linear-gradient(135deg,#7B6EF6,#53C3D7)', color: '#fff', fontWeight: 600 }}>{isEN ? '💬 Chat with an agent' : '💬 คุยกับเจ้าหน้าที่'}</button>
                {faqItems.slice(0, 5).map((it) => (
                  <button key={it.q} type="button" onClick={() => ask(it.q)} className="text-xs px-3 py-2 rounded-full text-left" style={{ background: 'rgba(123,110,246,0.10)', border: '1px solid rgba(123,110,246,0.35)', color: 'var(--ink)' }}>{it.q}</button>
                ))}
              </div>
            )}
            <div ref={end} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); ask(text) }} className="flex items-center gap-2 px-3 py-3" style={{ background: 'var(--bg)', borderTop: '1px solid rgb(var(--fg) / 0.1)' }}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder={isEN ? 'Type your question…' : 'พิมพ์คำถามของคุณ…'} aria-label={isEN ? 'Your question' : 'คำถามของคุณ'}
              className="chat-input flex-1 min-w-0 px-3.5 py-2 rounded-full outline-none" style={{ background: 'rgb(var(--fg) / 0.06)', color: 'var(--ink)', border: '1px solid rgb(var(--fg) / 0.1)' }} />
            <button type="submit" aria-label={isEN ? 'Send' : 'ส่ง'} className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg, #7B6EF6, #53C3D7)', color: '#fff' }}>➤</button>
          </form>
          <p className="text-[10px] px-4 pb-2.5 text-center" style={{ background: 'var(--bg)', color: 'rgb(var(--fg) / 0.5)' }}>
            {isEN ? 'Questions may be saved to improve this site. Do not share personal details here.' : 'คำถามอาจถูกบันทึกเพื่อปรับปรุงเว็บไซต์ โปรดอย่าใส่ข้อมูลส่วนตัวในแชทนี้'}
          </p>
        </div>
      )}
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? (isEN ? 'Close chat' : 'ปิดแชท') : (isEN ? 'Ask Havy about our services' : 'ให้น้องฮาวี่ช่วยสอบถามบริการ')}
          aria-expanded={open}
          title={isEN ? 'Ask Havy about our services' : 'ให้น้องฮาวี่ช่วยสอบถามบริการ'}
          className={`chat-mascot-btn${scrolling && !open ? ' is-scrolling' : ''}`}
        >
          {open ? (
            <span className="flex items-center justify-center w-14 h-14 rounded-full text-2xl" style={{ background: 'linear-gradient(135deg, #7B6EF6 0%, #53C3D7 100%)', color: '#fff', boxShadow: '0 14px 34px -10px rgba(90,78,212,0.7)' }} aria-hidden="true">×</span>
          ) : (
            <span className="flex items-center">
              <span className="flex flex-col items-center">
                <Mascot />
                <span className="chat-name">{isEN ? 'Havy' : 'น้องฮาวี่'}</span>
              </span>
              <span className="chat-pill">
                <span>{isEN ? 'Ask about our services' : 'สอบถามบริการ'}</span>
                <span className="chat-pill-dot" aria-hidden="true" />
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
