'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import FloatingCta from '@/components/FloatingCta'
import { getCaseStudy } from '@/lib/case-studies-data'

const featureCardsEN = [
  { icon: 'ti-code', title: 'Scalability', desc: 'Structured so new features can be added later without reworking what is already in place.' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'Search and filter doctors by specialty and by clinic location.' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'Several ways for patients to reach the hospital: through the app, online forms or the call center.' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'Works alongside the existing website, so the brand looks the same in both.' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'Book appointments using the criteria patients actually care about, such as doctor, time and place.' },
  { icon: 'ti-language', title: 'Language Support', desc: 'Support for the languages that international patients use.' },
]
const featureCardsTH = [
  { icon: 'ti-code', title: 'Scalability', desc: 'วางโครงสร้างไว้ให้เพิ่มฟีเจอร์ใหม่ภายหลังได้ โดยไม่ต้องรื้อของเดิม' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'ค้นหาและกรองแพทย์ได้ตามสาขา ความเชี่ยวชาญ และสถานที่ตั้งของคลินิก' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'ผู้ป่วยติดต่อโรงพยาบาลได้หลายทาง ทั้งผ่านแอป ฟอร์มออนไลน์ และ Call Center' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'ใช้ร่วมกับเว็บไซต์เดิมได้ลื่น และหน้าตาแบรนด์เป็นแบบเดียวกันทั้งสองที่' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'จองนัดตามเงื่อนไขที่ผู้ป่วยใช้เลือกจริง ๆ เช่น แพทย์ เวลา และสถานที่' },
  { icon: 'ti-language', title: 'Language Support', desc: 'รองรับหลายภาษา สำหรับผู้ป่วยต่างชาติ' },
]

const featuredEN = {
  badge: 'Healthcare & Life Sciences', client: 'Sukhumvit Health Network',
  title: 'Patient Digital Ecosystem Mobile App',
  desc: 'A healthcare mobile app that lets patients search for a doctor, book an appointment and reach hospital services in the language they are most comfortable with. It sits alongside the hospital network\'s existing website, so the brand stays the same wherever a patient starts.',
}
const featuredTH = {
  badge: 'Healthcare & Life Sciences', client: 'เครือโรงพยาบาลสุขุมวิท',
  title: 'แอปมือถือระบบสุขภาพดิจิทัล',
  desc: 'แอปมือถือด้านสุขภาพ ให้ผู้ป่วยค้นหาแพทย์ จองนัด และใช้บริการของโรงพยาบาลได้หลายภาษา ใช้ร่วมกับเว็บไซต์เดิมของเครือโรงพยาบาลได้ลื่น แบรนด์จึงเป็นแบบเดียวกันไม่ว่าผู้ป่วยจะเริ่มจากช่องทางไหน',
}

const groupsEN = [
  { label: 'FinTech', ids: [1, 5, 11] },
  { label: 'E-Commerce', ids: [2, 6, 12, 18, 34] },
  { label: 'Healthcare', ids: [3, 10] },
  { label: 'AI', ids: [4, 8] },
  { label: 'Enterprise', ids: [7, 9] },
  { label: 'F&B', ids: [13, 14, 22, 32, 39, 44] },
  { label: 'Fitness & Wellness', ids: [15] },
  { label: 'Apparel & Uniforms', ids: [16] },
  { label: 'Manufacturing', ids: [17] },
  { label: 'Government & Public Sector', ids: [19, 21, 27, 28, 29, 30, 31, 43] },
  { label: 'Retail & Shopping Mall', ids: [20, 36] },
  { label: 'Travel & Tourism', ids: [23] },
  { label: 'Construction & Real Estate', ids: [24, 41] },
  { label: 'Real Estate', ids: [25, 33] },
  { label: 'Telecommunications', ids: [26] },
  { label: 'Hospitality & Travel', ids: [35] },
  { label: 'Logistics & Marine', ids: [38] },
  { label: 'Beauty & Aesthetics', ids: [40, 42] },
]

const casesEN = [
  { id:1, tags:['FinTech'], client:'Leading Bank', title:'Digital Banking Super App', desc:'Redesigned mobile banking for 4 million users.', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'Retail Group', title:'Omnichannel Retail Platform', desc:'Unified commerce connecting 2,000+ branches.', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'Hospital Group', title:'Patient Digital Ecosystem', desc:'End-to-end digital health system.', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'Insurance Company', title:'AI Document Intelligence', desc:'AI document processing, reduced manual work by 80%.', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'Handles 500K transactions per day.', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'30-minute delivery with real-time inventory.', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'Factory (500 staff)', title:'ERP & Workforce Management', desc:'Full ERP covering Finance, HR, Inventory.', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'Personalised AI tutor for 50K learners.', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'Last-mile system for 3,000 drivers.', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video consultation + mood tracking.', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI claims processing, 73% time reduction.', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI product recommendation increased AOV by 45%.', result:'+45% AOV' },
  { id:13, tags:['F&B'], client:'Savelberg Restaurant', title:'Michelin-Starred Restaurant Website', desc:"A new bilingual website for a Michelin-starred French restaurant in Yan Nawa, with content direction and an AI chatbot to answer menu and booking questions.", result:'New Website', slug:'savelberg' },
  { id:14, tags:['F&B'], client:'OVO', title:'Ice Cream Brand Website', desc:"A warm, photo-first website for an ice cream and dessert brand, where customers browse the menu, order online and see the brand's friendly side.", result:'New Website', slug:'ovo' },
  { id:15, tags:['Fitness & Wellness'], client:'BASE', title:'Fitness Studio Website', desc:"A modern website for a fitness studio, with trainer profiles and a class schedule that lets newcomers book a trial class in a few taps.", result:'New Website', slug:'base' },
  { id:16, tags:['Apparel & Uniforms'], client:'Blue Bear', title:'Medical Uniform Manufacturer Website', desc:"A catalogue website for a medical uniform manufacturer, built for hospital and clinic buyers who compare fabrics and sizes and then ask for a quote.", result:'New Website', slug:'blue-bear' },
  { id:17, tags:['Manufacturing'], client:'Thai Metal Aluminium', title:'Precision Manufacturing Website', desc:"A corporate website for a precision metal and aluminium parts maker, showing machinery, process and quality standards to industrial buyers.", result:'New Website', slug:'thai-metal-aluminium' },
  { id:18, tags:['E-Commerce'], client:'VERA', title:'Bag Brand E-Commerce Website', desc:"An own-brand online store for a bag maker, with multi-angle product photography, a one-page checkout and order tracking, so sales do not depend on marketplaces.", result:'New Website', slug:'vera' },
  { id:19, tags:['Government & Public Sector'], client:'NFI – National Food Institute', title:'National Food Institute Website', desc:"A new website that sorts a public food-research institute's lab services and research into clear categories, with search that businesses can use on their own.", result:'New Website', slug:'nfi' },
  { id:20, tags:['Retail & Shopping Mall'], client:'MBK Center', title:'MBK Center Mobile App', desc:"A mobile app for MBK Center that gathers stores, promotions, the mall directory and member points so shoppers can plan a visit before arriving.", result:'New App', slug:'mbk' },
  { id:21, tags:['Government & Public Sector'], client:'DITP', title:'DITP Export Promotion Mobile App', desc:"A new version of the export-promotion app, built on the earlier one we developed, so Thai exporters can read market data and spot trade events more easily.", result:'New App', slug:'ditp' },
  { id:22, tags:['F&B'], client:'Sra Bua by Kiin Kiin', title:'Fine-Dining Restaurant Website', desc:"A bilingual website with online reservations for a modern Thai fine-dining restaurant, designed to let the food and the room speak first.", result:'New Website', slug:'sra-bua' },
  { id:23, tags:['Travel & Tourism'], client:'World Surprise Travel', title:'Website, Branding & AI CRM', desc:"A new brand identity, website and AI CRM for a tour company, so travellers can compare packages and the sales team can follow every lead.", result:'New Website', slug:'world-surprise-travel' },
  { id:24, tags:['Construction & Real Estate'], client:'Awii House', title:'Home Builder Website with CRM', desc:"A website and CRM for a home builder: house designs on show for visitors, and a pipeline that follows each customer from first consultation to signed contract.", result:'New Website', slug:'awii-house' },
  { id:25, tags:['Real Estate'], client:'Canapaya Residences', title:'Website, Brand CI & Real Estate CRM', desc:"Brand identity, website and a property-sales CRM for a riverside residential project, from first viewing appointment to ownership transfer.", result:'New Website', slug:'canapaya-residences' },
  { id:26, tags:['Telecommunications'], client:'RFS', title:'Website with AI CRM', desc:"A new website and AI CRM for a Singapore-based telecom infrastructure and smart-city provider, built for long B2B buying cycles.", result:'New Website', slug:'rfs' },
  { id:27, tags:['Government & Public Sector'], client:'Excise Department', title:'Tax Inspection App', desc:"A mobile app that lets Excise Department officers verify tax payments on-site, with data from related agencies shown together in one place.", result:'New App', slug:'excise-department' },
  { id:28, tags:['Government & Public Sector'], client:'ITAGC', title:'Government Contractor Integrity & Transparency Website', desc:"UX/UI first, then a website that explains how ITAGC assesses the integrity and transparency of government contractors in clear, credible steps.", result:'New Website', slug:'itagc' },
  { id:29, tags:['Government & Public Sector'], client:'Department of Water Resources', title:'Mobile App, Rebuilt with AI', desc:"An AI module added to the app we built for the Department of Water Resources four years ago, to forecast water conditions and flag anything unusual.", result:'New App', slug:'department-of-water-resources' },
  { id:30, tags:['Government & Public Sector'], client:'Royal Thai Police Immigration Bureau', title:'AI-Powered Immigration Inspection App', desc:"A mobile app with an AI module for document and face verification, helping officers confirm travellers' identity at entry and exit points.", result:'New App', slug:'immigration-bureau' },
  { id:31, tags:['Government & Public Sector'], client:'Ministry of Culture', title:"Culture & Heritage Mobile App", desc:"A mobile app that takes the ministry's existing website content to a wider audience, kept in step with the site automatically.", result:'New App', slug:'ministry-of-culture' },
  { id:32, tags:['F&B'], client:'BBK Menu', title:'Restaurant Discovery Website', desc:"UX/UI design followed by a website for discovering Bangkok's restaurants and must-try dishes, searchable by cuisine and occasion.", result:'New Website', slug:'bbk-menu' },
  { id:33, tags:['Real Estate'], client:"Sena Development", title:"CRM & AI System for a Real-Estate Developer", desc:"A CRM and AI system that gives a real-estate developer's sales team and management one shared view of customers and sales data.", result:"New System", slug:"sena-development" },
  { id:34, tags:['E-Commerce'], client:"PAÑPURI", title:"Wellness & Skincare E-Commerce on Shopify", desc:"UX/UI design followed by a Shopify store for a Thai wellness and skincare brand, with a premium look and simple checkout.", result:"New Website", slug:"panpuri" },
  { id:35, tags:['Hospitality & Travel'], client:"Shanghai Mansion Bangkok", title:"Boutique Hotel Website with Online Booking", desc:"A website and online room-booking system for a boutique hotel in Bangkok, so guests can browse rooms and send a booking request themselves.", result:"New Website", slug:"shanghai-mansion-bangkok" },
  { id:36, tags:['Retail & Shopping Mall'], client:"Jampha Shopping Mall", title:"E-Commerce Website with AI for Operations", desc:"An e-commerce website and AI assistant for a community shopping mall, opening an online channel while easing the back-office load.", result:"New Website", slug:"jampha-shopping-mall" },
  { id:38, tags:['Logistics & Marine'], client:"Prima Marine", title:"Corporate Website for a Marine Logistics Company", desc:"A corporate website for a listed marine logistics company, laying out the fleet, services and company information for customers, partners and investors.", result:"New Website", slug:"prima-marine" },
  { id:39, tags:['F&B'], client:"Baan Khanitha Thai Cuisine", title:"Website for a Renowned Thai Restaurant", desc:"A warm, easy-to-browse website for a well-known Thai restaurant, with menu, branches and booking close at hand and basic local SEO.", result:"New Website", slug:"baan-khanitha" },
  { id:40, tags:['Beauty & Aesthetics'], client:"DSK", title:"Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic", desc:"Business consulting, a website and an AI-assisted CRM for an aesthetic surgery business, built to earn trust and keep enquiries from going cold.", result:"Website + CRM", slug:"dsk" },
  { id:41, tags:['Construction & Real Estate'], client:"Admire", title:"Website, UX/UI and AI-Assisted CRM for a Home Builder", desc:"UX/UI design and a new website for a custom home builder, with an AI-assisted CRM that makes sure every enquiry gets followed up.", result:"Website + CRM", slug:"admire" },
  { id:42, tags:['Beauty & Aesthetics'], client:"MEKO International Hospital", title:"Brand, Website and Graphics for an Aesthetic Hospital", desc:"Brand identity, website and graphics for an aesthetic surgery hospital, giving patients one polished look across web, social and print.", result:"Brand + Website", slug:"meko-international-hospital" },
  { id:43, tags:['Government & Public Sector'], client:"DEDE", title:"DEDE Inspection Check-in App and Website", desc:"A mobile app that lets energy management auditors and certifiers photograph and check in with a time stamp during on-site inspections, plus a website for the program.", result:"Mobile App + Website", slug:"dede" },
  { id:44, tags:['F&B'], client:"SUDA", title:"Brand and Website for a Thai Restaurant in the US", desc:"Brand identity and a launch website for SUDA, a contemporary Thai restaurant and cocktail bar in Bellevue, Washington, built around the idea of Thai food, reimagined.", result:"Brand + Website", slug:"suda" },
]

const groupsTH = groupsEN
const casesTH = [
  { id:1, tags:['FinTech'], client:'ธนาคารชั้นนำ', title:'Digital Banking Super App', desc:'ออกแบบแอปธนาคารใหม่สำหรับผู้ใช้ 4 ล้านคน', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'เครือค้าปลีก', title:'Omnichannel Retail Platform', desc:'ระบบขายหลายช่องทาง เชื่อม 2,000+ สาขา', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'กลุ่มโรงพยาบาล', title:'Patient Digital Ecosystem', desc:'ระบบสุขภาพดิจิทัลตั้งแต่ค้นหาแพทย์ถึงติดตามผล', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'บริษัทประกันภัย', title:'AI Document Intelligence', desc:'AI อ่านเอกสารอัตโนมัติ ลดงานคนทำเองลง 80%', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'รองรับ 500,000 รายการต่อวัน', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'ส่งของใน 30 นาที สต๊อกอัปเดตเรียลไทม์', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'โรงงาน 500 คน', title:'ERP & Workforce Management', desc:'ERP รวมการเงิน HR และสต๊อก', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'AI ติวเตอร์เฉพาะบุคคล สำหรับผู้เรียน 50,000 คน', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'ขนส่งช่วงสุดท้ายสำหรับคนขับ 3,000 คน', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video Consultation + Mood Tracking', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI ช่วยประมวลผลเคลม ลดเวลา 73%', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI แนะนำสินค้า เพิ่มยอดต่อออเดอร์ 45%', result:'+45% AOV' },
  { id:13, tags:['F&B'], client:'Savelberg Restaurant', title:'เว็บไซต์ร้านอาหารมิชลินสตาร์', desc:"เว็บไซต์สองภาษาใหม่ของร้านอาหารฝรั่งเศสระดับมิชลินสตาร์ย่านยานนาวา พร้อมแนวทางคอนเทนต์และแชทบอท AI ที่ช่วยตอบเรื่องเมนูและการจองโต๊ะ", result:'เว็บไซต์ใหม่', slug:'savelberg' },
  { id:14, tags:['F&B'], client:'OVO', title:'เว็บไซต์แบรนด์ไอศกรีม', desc:"เว็บไซต์โทนอบอุ่นของแบรนด์ไอศกรีมและของหวาน ให้ลูกค้าดูเมนู สั่งซื้อออนไลน์ และเห็นความเป็นกันเองของแบรนด์ตั้งแต่เข้าเว็บ", result:'เว็บไซต์ใหม่', slug:'ovo' },
  { id:15, tags:['Fitness & Wellness'], client:'BASE', title:'เว็บไซต์สตูดิโอฟิตเนส', desc:"เว็บไซต์ทันสมัยของสตูดิโอฟิตเนส มีโปรไฟล์เทรนเนอร์และตารางคลาส ให้คนที่สนใจจองคลาสทดลองได้ในไม่กี่แตะ", result:'เว็บไซต์ใหม่', slug:'base' },
  { id:16, tags:['Apparel & Uniforms'], client:'Blue Bear', title:'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์', desc:"เว็บไซต์แคตตาล็อกของผู้ผลิตชุดยูนิฟอร์มทางการแพทย์ สำหรับฝ่ายจัดซื้อของโรงพยาบาลและคลินิกที่ต้องเทียบผ้า เทียบขนาด แล้วขอใบเสนอราคา", result:'เว็บไซต์ใหม่', slug:'blue-bear' },
  { id:17, tags:['Manufacturing'], client:'Thai Metal Aluminium', title:'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม', desc:"เว็บไซต์องค์กรของโรงงานผลิตชิ้นส่วนโลหะและอะลูมิเนียมความแม่นยำสูง โชว์เครื่องจักร ขั้นตอนผลิต และมาตรฐานคุณภาพให้ลูกค้าอุตสาหกรรมเห็นภาพ", result:'เว็บไซต์ใหม่', slug:'thai-metal-aluminium' },
  { id:18, tags:['E-Commerce'], client:'VERA', title:'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า', desc:"ร้านออนไลน์ของแบรนด์กระเป๋า มีภาพสินค้าหลายมุม เช็คเอาต์ในหน้าเดียว และติดตามสถานะคำสั่งซื้อ เพื่อขายเองได้โดยไม่ต้องพึ่งมาร์เก็ตเพลสอย่างเดียว", result:'เว็บไซต์ใหม่', slug:'vera' },
  { id:19, tags:['Government & Public Sector'], client:'NFI สถาบันอาหาร', title:'เว็บไซต์สถาบันอาหาร', desc:"เว็บไซต์ใหม่ที่จัดบริการห้องปฏิบัติการและงานวิจัยของสถาบันวิจัยอาหารภาครัฐเป็นหมวดหมู่ พร้อมระบบค้นหาที่ผู้ประกอบการใช้เองได้", result:'เว็บไซต์ใหม่', slug:'nfi' },
  { id:20, tags:['Retail & Shopping Mall'], client:'MBK Center', title:'แอปมือถือศูนย์การค้า MBK', desc:"แอปมือถือของ MBK Center ที่รวมร้านค้า โปรโมชัน ผังศูนย์ และแต้มสมาชิกไว้ในที่เดียว ให้ลูกค้าวางแผนก่อนมาเดินได้", result:'แอปใหม่', slug:'mbk' },
  { id:21, tags:['Government & Public Sector'], client:'DITP', title:'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP', desc:"แอปส่งเสริมการส่งออกเวอร์ชันใหม่ ต่อยอดจากแอปที่เราเคยทำให้ ช่วยให้ผู้ส่งออกไทยดูข้อมูลตลาดและงานแสดงสินค้าได้ง่ายขึ้น", result:'แอปใหม่', slug:'ditp' },
  { id:22, tags:['F&B'], client:'Sra Bua by Kiin Kiin', title:'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง', desc:"เว็บไซต์สองภาษาพร้อมระบบจองโต๊ะออนไลน์ของร้านอาหารไทยโมเดิร์นระดับไฟน์ไดนิ่ง ที่ให้ภาพอาหารและบรรยากาศเป็นตัวเล่าเรื่อง", result:'เว็บไซต์ใหม่', slug:'sra-bua' },
  { id:23, tags:['Travel & Tourism'], client:'World Surprise Travel', title:'เว็บไซต์ แบรนด์ และ AI CRM', desc:"แบรนด์ใหม่ เว็บไซต์ และ AI CRM ของบริษัททัวร์ ให้ลูกค้าเทียบแพ็กเกจได้ง่าย และให้ทีมขายตามลูกค้าได้ทุกราย", result:'เว็บไซต์ใหม่', slug:'world-surprise-travel' },
  { id:24, tags:['Construction & Real Estate'], client:'Awii House', title:'เว็บไซต์และ CRM สำหรับบริษัทรับสร้างบ้าน', desc:"เว็บไซต์และ CRM ของบริษัทรับสร้างบ้าน โชว์แบบบ้านให้คนเข้าชม และติดตามลูกค้าแต่ละรายตั้งแต่ขอคำปรึกษาจนถึงเซ็นสัญญา", result:'เว็บไซต์ใหม่', slug:'awii-house' },
  { id:25, tags:['Real Estate'], client:'Canapaya Residences', title:'เว็บไซต์ แบรนด์ CI และ CRM อสังหาริมทรัพย์', desc:"แบรนด์ เว็บไซต์ และ CRM งานขายอสังหาริมทรัพย์ของโครงการที่พักอาศัยริมแม่น้ำ ตั้งแต่นัดดูห้องจนถึงโอนกรรมสิทธิ์", result:'เว็บไซต์ใหม่', slug:'canapaya-residences' },
  { id:26, tags:['Telecommunications'], client:'RFS', title:'เว็บไซต์และ AI CRM', desc:"เว็บไซต์และ AI CRM ใหม่ของผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคมและสมาร์ทซิตี้จากสิงคโปร์ ออกแบบมาให้เหมาะกับการขาย B2B ที่ใช้เวลาตัดสินใจนาน", result:'เว็บไซต์ใหม่', slug:'rfs' },
  { id:27, tags:['Government & Public Sector'], client:'กรมสรรพสามิต', title:'แอปตรวจสอบภาษี', desc:"แอปมือถือที่ให้เจ้าหน้าที่กรมสรรพสามิตตรวจสอบการชำระภาษีจากหน้างาน โดยรวมข้อมูลจากหน่วยงานที่เกี่ยวข้องมาแสดงในที่เดียว", result:'แอปใหม่', slug:'excise-department' },
  { id:28, tags:['Government & Public Sector'], client:'ITAGC', title:'เว็บไซต์ตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐ', desc:"ออกแบบ UX/UI ก่อน แล้วพัฒนาเว็บไซต์ที่อธิบายขั้นตอนที่ ITAGC ใช้ประเมินความซื่อตรงและความโปร่งใสของผู้รับเหมาภาครัฐ ให้ชัดและน่าเชื่อถือ", result:'เว็บไซต์ใหม่', slug:'itagc' },
  { id:29, tags:['Government & Public Sector'], client:'กรมทรัพยากรน้ำ', title:'แอปมือถือต่อยอดด้วย AI', desc:"โมดูล AI ที่เพิ่มเข้าไปในแอปที่เราเคยทำให้กรมทรัพยากรน้ำเมื่อ 4 ปีก่อน เพื่อคาดการณ์สถานการณ์น้ำและแจ้งเตือนเมื่อมีสิ่งผิดปกติ", result:'แอปใหม่', slug:'department-of-water-resources' },
  { id:30, tags:['Government & Public Sector'], client:'สำนักงานตรวจคนเข้าเมือง', title:'แอปตรวจคนเข้าเมืองที่ใช้ AI', desc:"แอปมือถือพร้อมโมดูล AI ตรวจเอกสารและใบหน้า ช่วยเจ้าหน้าที่ยืนยันตัวตนผู้เดินทางที่จุดตรวจเข้า-ออกประเทศ", result:'แอปใหม่', slug:'immigration-bureau' },
  { id:31, tags:['Government & Public Sector'], client:'กระทรวงวัฒนธรรม', title:'แอปงานด้านวัฒนธรรม', desc:"แอปมือถือที่นำเนื้อหาจากเว็บไซต์เดิมของกระทรวงไปถึงประชาชนได้มากขึ้น และอัปเดตให้ตรงกับเว็บไซต์โดยอัตโนมัติ", result:'แอปใหม่', slug:'ministry-of-culture' },
  { id:32, tags:['F&B'], client:'BBK Menu', title:'เว็บไซต์แนะนำร้านอาหาร', desc:"ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์สำหรับค้นหาร้านอาหารและเมนูเด็ดในกรุงเทพฯ ค้นหาได้ตามสไตล์อาหารและโอกาสพิเศษ", result:'เว็บไซต์ใหม่', slug:'bbk-menu' },
  { id:33, tags:['Real Estate'], client:"Sena Development", title:"ระบบ CRM และ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์", desc:"ระบบ CRM และ AI ที่ให้ทีมขายและผู้บริหารของผู้พัฒนาอสังหาริมทรัพย์เห็นข้อมูลลูกค้าและการขายชุดเดียวกัน", result:"ระบบใหม่", slug:"sena-development" },
  { id:34, tags:['E-Commerce'], client:"PAÑPURI", title:"เว็บไซต์อีคอมเมิร์ซบน Shopify แบรนด์เวลเนสและสกินแคร์", desc:"ออกแบบ UX/UI แล้วพัฒนาร้านบน Shopify ให้แบรนด์เวลเนสและสกินแคร์ไทย ภาพลักษณ์พรีเมียมและเช็คเอาต์ที่ใช้ง่าย", result:"เว็บไซต์ใหม่", slug:"panpuri" },
  { id:35, tags:['Hospitality & Travel'], client:"Shanghai Mansion Bangkok", title:"เว็บไซต์โรงแรมบูติก มีระบบจองห้องพัก", desc:"เว็บไซต์และระบบจองห้องพักออนไลน์ของโรงแรมบูติกในกรุงเทพฯ ให้ผู้เข้าพักดูห้องและส่งคำขอจองเองได้", result:"เว็บไซต์ใหม่", slug:"shanghai-mansion-bangkok" },
  { id:36, tags:['Retail & Shopping Mall'], client:"Jampha Shopping Mall", title:"เว็บไซต์อีคอมเมิร์ซพร้อม AI ช่วยงานหลังบ้าน", desc:"เว็บไซต์อีคอมเมิร์ซและระบบ AI ผู้ช่วยของศูนย์การค้าชุมชน เปิดช่องทางขายออนไลน์ พร้อมช่วยลดงานหลังบ้าน", result:"เว็บไซต์ใหม่", slug:"jampha-shopping-mall" },
  { id:38, tags:['Logistics & Marine'], client:"Prima Marine", title:"เว็บไซต์องค์กรสำหรับธุรกิจขนส่งทางทะเล", desc:"เว็บไซต์องค์กรของบริษัทมหาชนด้านขนส่งทางทะเล จัดกองเรือ บริการ และข้อมูลบริษัท ให้ลูกค้า พันธมิตร และนักลงทุนอ่านได้ง่าย", result:"เว็บไซต์ใหม่", slug:"prima-marine" },
  { id:39, tags:['F&B'], client:"Baan Khanitha Thai Cuisine", title:"เว็บไซต์ร้านอาหารไทยชื่อดัง", desc:"เว็บไซต์อบอุ่นอ่านง่ายของร้านอาหารไทยชื่อดัง มีเมนู สาขา และการจองอยู่ใกล้มือ พร้อม SEO พื้นฐานสำหรับการค้นหาในพื้นที่", result:"เว็บไซต์ใหม่", slug:"baan-khanitha" },
  { id:40, tags:['Beauty & Aesthetics'], client:"DSK", title:"เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม", desc:"คำปรึกษาธุรกิจ เว็บไซต์ และ CRM ที่มี AI ช่วย สำหรับธุรกิจศัลยกรรมความงาม สร้างความไว้ใจและไม่ปล่อยให้คำถามของลูกค้าเงียบหาย", result:"เว็บไซต์ + CRM", slug:"dsk" },
  { id:41, tags:['Construction & Real Estate'], client:"Admire", title:"เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน", desc:"ออกแบบ UX/UI และพัฒนาเว็บไซต์ใหม่ให้ธุรกิจรับสร้างบ้าน พร้อม CRM ที่มี AI ช่วย ให้ทุกคำถามของลูกค้าได้รับการติดตาม", result:"เว็บไซต์ + CRM", slug:"admire" },
  { id:42, tags:['Beauty & Aesthetics'], client:"MEKO International Hospital", title:"แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม", desc:"อัตลักษณ์แบรนด์ เว็บไซต์ และกราฟิกของโรงพยาบาลศัลยกรรมความงาม ให้คนไข้เห็นหน้าตาที่ประณีตเป็นแบบเดียวกันทั้งบนเว็บ โซเชียล และสื่อพิมพ์", result:"แบรนด์ + เว็บไซต์", slug:"meko-international-hospital" },
  { id:43, tags:['Government & Public Sector'], client:"DEDE", title:"แอป DEDE สำหรับเช็กอินตรวจสอบ และเว็บไซต์", desc:"แอปพลิเคชันที่ให้ผู้ตรวจสอบและรับรองการจัดการพลังงานถ่ายภาพและเช็กอินระบุเวลาขณะเข้าตรวจ พร้อมเว็บไซต์ของโครงการ", result:"แอปมือถือและเว็บไซต์", slug:"dede" },
  { id:44, tags:['F&B'], client:"SUDA", title:"แบรนด์และเว็บไซต์ร้านอาหารไทยในอเมริกา", desc:"อัตลักษณ์แบรนด์และเว็บไซต์เปิดตัวของ SUDA ร้านอาหารไทยร่วมสมัยและค็อกเทลบาร์ที่ Bellevue รัฐวอชิงตัน ที่ตีความอาหารไทยใหม่บนรากเดิม", result:"แบรนด์ + เว็บไซต์", slug:"suda" },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

function PhoneMock({ variant }: { variant: 'home' | 'doctor' }) {
  return (
    <div className="w-[190px] h-[390px] rounded-[32px] p-1.5 shrink-0" style={{ background: 'var(--ink)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}>
      <div className="w-full h-full rounded-[26px] overflow-hidden relative" style={{ background: '#fff' }}>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full" style={{ background: 'var(--ink)', zIndex: 2 }} />
        {variant === 'home' ? (
          <div className="pt-9 px-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full" style={{ background: 'var(--purple-bg)' }} />
              <div className="h-2 w-20 rounded" style={{ background: 'var(--line-soft)' }} />
            </div>
            <div className="h-7 rounded-lg mb-3" style={{ background: '#F5F5FA' }} />
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[0,1,2,3].map(i => (
                <div key={i} className="h-14 rounded-xl flex items-center justify-center" style={{ background: i % 2 === 0 ? 'var(--purple-bg)' : 'var(--lime-bg)' }}>
                  <div className="w-5 h-5 rounded" style={{ background: i % 2 === 0 ? 'var(--purple)' : 'var(--lime-dark)', opacity: 0.6 }} />
                </div>
              ))}
            </div>
            <div className="h-2 w-16 rounded mb-2" style={{ background: 'var(--line-soft)' }} />
            <div className="h-20 rounded-xl" style={{ background: 'linear-gradient(135deg, var(--purple-bg), var(--lime-bg))' }} />
          </div>
        ) : (
          <div className="pt-9 px-3">
            <div className="h-20 rounded-xl mb-3" style={{ background: 'linear-gradient(135deg, var(--purple), var(--purple-light))' }} />
            <div className="h-2.5 w-24 rounded mb-2" style={{ background: 'var(--ink)', opacity: 0.75 }} />
            <div className="h-2 w-32 rounded mb-4" style={{ background: 'var(--line-soft)' }} />
            <div className="h-2 w-14 rounded mb-2" style={{ background: '#CFCFE0' }} />
            <div className="h-2 w-28 rounded mb-1.5" style={{ background: 'var(--line-soft)' }} />
            <div className="h-2 w-20 rounded mb-5" style={{ background: 'var(--line-soft)' }} />
            <div className="h-9 rounded-full" style={{ background: 'var(--lime-dark)' }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function CaseStudiesPageClient({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const featureCards = isEN ? featureCardsEN : featureCardsTH
  const featured = isEN ? featuredEN : featuredTH
  const groups = isEN ? groupsEN : groupsTH
  const cases = isEN ? casesEN : casesTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (label: string, dir: 1 | -1) => {
    const el = rowRefs.current[label]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const left = featureCards.slice(0, 3)
  const right = featureCards.slice(3, 6)

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
            <div className="mb-16">
              <p className="t-label mb-5">{isEN ? 'Case Studies' : 'Case Studies'}</p>
              <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
                {isEN ? <>Real work,<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Real results</span></> : <>ผลงานจริง<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>ผลลัพธ์ที่วัดได้</span></>}
              </h1>
              <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400 }}>
                {isEN ? "A closer look at the websites, mobile apps and CRM systems we have built for restaurants, public agencies, property developers, retailers and clinics. Each case study explains what the client needed, how we went about it and what ended up in the finished product." : 'รวมงานที่เราทำให้ร้านอาหาร หน่วยงานรัฐ ผู้พัฒนาอสังหาริมทรัพย์ ธุรกิจค้าปลีก และคลินิก ทั้งเว็บไซต์ แอปมือถือ และระบบ CRM แต่ละเรื่องจะเล่าให้ฟังว่าลูกค้าต้องการอะไร เราวางแนวทางอย่างไร และได้อะไรออกมาในงานจริง'}
              </p>
            </div>

            {/* Featured case study — cover art + 2 rows of feature cards */}
            <div className="rounded-[32px] overflow-hidden" style={{ border: '1px solid rgb(var(--fg) / 0.1)' }}>
              <div className="relative py-10 lg:py-16 px-6 lg:px-16" style={{ background: 'var(--bg-1)' }}>
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <div className="hidden lg:grid grid-rows-3 gap-5 order-1">
                    {left.map((c) => (
                      <div key={c.title} className="rounded-2xl p-5" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(123,110,246,0.18)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--accent)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: 'rgb(var(--fg) / 0.6)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-center gap-4 order-1 lg:order-2 scale-[.8] sm:scale-100 origin-bottom -my-4 sm:my-0">
                    <div className="-rotate-6 -mr-6 mb-4"><PhoneMock variant="home" /></div>
                    <div className="rotate-3"><PhoneMock variant="doctor" /></div>
                  </div>

                  <div className="hidden lg:grid grid-rows-3 gap-5 order-3">
                    {right.map((c) => (
                      <div key={c.title} className="rounded-2xl p-5" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(196,232,106,0.18)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--accent-2)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: 'rgb(var(--fg) / 0.6)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="lg:hidden order-2 -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3" style={{ scrollbarWidth: 'none' }}>
                    {featureCards.map((c, i) => (
                      <div key={c.title} className="snap-center shrink-0 w-[80%] sm:w-[46%] rounded-2xl p-5" style={{ background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: i < 3 ? 'rgba(123,110,246,0.18)' : 'rgba(196,232,106,0.18)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: i < 3 ? 'var(--accent)' : 'var(--accent-2)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: 'rgb(var(--fg) / 0.6)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-14" style={{ background: 'var(--bg)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--accent)', fontWeight: 400 }}>{featured.badge}</span>
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400 }}>
                    <i className="ti ti-building-hospital" style={{ fontSize: 15 }} aria-hidden="true" /> {featured.client}
                  </span>
                </div>
                <h2 className="t-display text-[clamp(1.7rem,3vw,2.6rem)] leading-tight mb-5" style={{ color: 'var(--accent-2)' }}>{featured.title}</h2>
                <p className="max-w-2xl mb-8" style={{ color: 'rgb(var(--fg) / 0.65)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }}>{featured.desc}</p>
                <Link href={`/${lang}/work`} className="inline-flex items-center gap-2 text-base transition-all hover:gap-3" style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                  {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped by industry — same horizontal-scroll pattern as Blog */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {groups.map((g) => {
              const items = cases.filter(c => c.tags.includes(g.label) && (c as any).slug)
              if (!items.length) return null
              return (
                <div key={g.label}>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="t-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none mb-2" style={{ color: 'var(--ink)' }}>{g.label}</h2>
                      <p className="text-sm" style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                        {isEN ? 'Projects we have delivered for clients in this industry.' : 'งานที่เราทำให้ลูกค้าในอุตสาหกรรมนี้'}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(g.label, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgb(var(--fg)/0.1)]"
                        style={{ border: '1px solid rgb(var(--fg) / 0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize: 16, color: 'var(--ink)' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(g.label, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgb(var(--fg)/0.1)]"
                        style={{ border: '1px solid rgb(var(--fg) / 0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize: 16, color: 'var(--ink)' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[g.label] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((c, i) => {
                      const cover = (c as any).slug ? getCaseStudy((c as any).slug)?.[lang]?.heroImage : undefined
                      return (
                      <Link
                        key={c.id}
                        href={(c as any).slug ? `/${lang}/case-studies/${(c as any).slug}` : `/${lang}/work`}
                        className="group shrink-0 w-[280px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)' }}
                      >
                        <div className="h-32 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden" style={cover ? undefined : { background: gradients[i % gradients.length] }}>
                          {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={cover} alt={c.title} loading="lazy" width={280} height={128} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <i className="ti ti-photo" style={{ fontSize: 22, color: 'var(--ink)', opacity: 0.45 }} aria-hidden="true" />
                          )}
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs" style={{ background: 'rgb(var(--fg) / 0.9)', color: 'var(--purple)', fontWeight: 500 }}>{c.result}</span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color: 'rgb(var(--fg) / 0.45)', fontWeight: 400 }}>{c.client}</p>
                        <h3 className="text-[color:var(--ink)] leading-snug mb-2 group-hover:text-[color:var(--accent)] transition-colors" style={{ fontWeight: 500, fontSize: '0.98rem' }}>{c.title}</h3>
                        <p style={{ color: 'rgb(var(--fg) / 0.55)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }} className="mb-4 line-clamp-5">{c.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--accent)', fontWeight: 400 }}>
                          {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" />
                        </span>
                      </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="cta-final theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจไหม?'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Let's build your next case study</> : <>มาทำโปรเจกต์ถัดไปด้วยกัน</>}
            </h2>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Talk to Us' : 'คุยกับเรา'}
              <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <FloatingCta lang={lang} href={`/${lang}/contact`} />
      <Footer lang={lang} tr={tr} />
    </>
  )
}
