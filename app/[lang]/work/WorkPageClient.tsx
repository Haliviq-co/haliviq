"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { getCaseStudy } from '@/lib/case-studies-data'

const serviceGroupsEN = [
  { key: 'fnb', label: 'F&B', desc: 'Restaurants, dessert shops and a restaurant guide, each with a website built around its photography, with table booking or online ordering where the business needs it.' },
  { key: 'sme', label: 'SME & Retail Business', desc: 'Growing retail brands, a shopping mall and a uniform maker, with online stores, catalogues and a mobile app designed to bring in orders rather than just look good.' },
  { key: 'government', label: 'Government & Public Sector', desc: 'Public agencies and institutes moving services onto the web and mobile, from export information and tax checks to immigration screening and water-resource monitoring, some of it with AI.' },
  { key: 'realestate', label: 'Real Estate & Construction', desc: 'Developers and home builders who needed a brand, a website and a CRM that follows each buyer from first enquiry to signed contract or ownership transfer.' },
  { key: 'industry', label: 'Industry & Manufacturing', desc: 'Manufacturers, a marine logistics group and a telecom infrastructure provider that needed websites explaining what they do to enterprise and B2B buyers.' },
  { key: 'wellness', label: 'Wellness', desc: 'A fitness studio and a skincare brand: one with class booking and trainer profiles, the other with a Shopify store that carries a premium look.' },
  { key: 'beauty', label: 'Beauty & Aesthetics', desc: 'Aesthetic surgery businesses that need to look trustworthy and answer enquiries promptly, with brand identity, websites and AI-assisted CRM.' },
  { key: 'travel', label: 'Travel & Tourism', desc: 'A tour company and a boutique hotel, with brand identity, package or room presentation, online booking and AI-driven customer follow-up.' },
]
const serviceGroupsTH = [
  { key: 'fnb', label: 'ร้านอาหารและเครื่องดื่ม', desc: 'ร้านอาหาร ร้านของหวาน และเว็บไซต์แนะนำร้านอาหาร ที่เราทำเว็บให้ใช้ภาพถ่ายเป็นตัวเล่าเรื่อง และมีระบบจองโต๊ะหรือสั่งออนไลน์ตามที่แต่ละธุรกิจต้องใช้' },
  { key: 'sme', label: 'ธุรกิจ SME และค้าปลีก', desc: 'แบรนด์ค้าปลีกที่กำลังโต ศูนย์การค้า และผู้ผลิตยูนิฟอร์ม ที่เราทำร้านออนไลน์ แคตตาล็อก และแอปมือถือ เพื่อให้ได้ออเดอร์จริง ไม่ใช่แค่สวยอย่างเดียว' },
  { key: 'government', label: 'หน่วยงานภาครัฐ', desc: 'หน่วยงานรัฐและสถาบันที่ย้ายบริการมาอยู่บนเว็บและมือถือ ตั้งแต่ข้อมูลส่งออก การตรวจภาษี การตรวจคนเข้าเมือง ไปจนถึงการติดตามทรัพยากรน้ำ และบางงานมี AI ช่วย' },
  { key: 'realestate', label: 'อสังหาริมทรัพย์และก่อสร้าง', desc: 'ผู้พัฒนาโครงการและบริษัทรับสร้างบ้านที่ต้องการแบรนด์ เว็บไซต์ และ CRM ติดตามผู้ซื้อแต่ละคนตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญาหรือโอนกรรมสิทธิ์' },
  { key: 'industry', label: 'อุตสาหกรรมและการผลิต', desc: 'โรงงานผลิต กลุ่มธุรกิจขนส่งทางทะเล และผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคม ที่ต้องการเว็บไซต์อธิบายสิ่งที่บริษัททำให้ลูกค้าองค์กรและ B2B เข้าใจ' },
  { key: 'wellness', label: 'เวลเนส', desc: 'สตูดิโอฟิตเนสและแบรนด์สกินแคร์ ที่หนึ่งมีระบบจองคลาสและโปรไฟล์เทรนเนอร์ อีกที่มีร้านบน Shopify ที่ให้ความรู้สึกพรีเมียม' },
  { key: 'beauty', label: 'ความงามและศัลยกรรม', desc: 'ธุรกิจศัลยกรรมความงามที่ต้องดูน่าไว้ใจและตอบลูกค้าให้ทัน เราทำทั้งแบรนด์ เว็บไซต์ และ CRM ที่มี AI ช่วย' },
  { key: 'travel', label: 'การท่องเที่ยวและทัวร์', desc: 'บริษัททัวร์และโรงแรมบูติก ที่เราทำแบรนด์ หน้าแสดงแพ็กเกจหรือห้องพัก ระบบจองออนไลน์ และการติดตามลูกค้าด้วย AI' },
]

const projectsEN = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'Leading Bank', desc:'Redesigned mobile banking for 4 million users, from onboarding to daily transfers.', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'Retail Group', desc:'Unified commerce platform connecting 2,000+ branches into one order and inventory system.', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'Hospital Group', desc:'End-to-end digital health system — from finding a doctor to booking and follow-up.', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'Insurance Company', desc:'AI document processing that reads and classifies claims automatically.', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'High-throughput payment infrastructure handling 500K transactions per day.', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'30-minute delivery app with real-time inventory sync across dark stores.', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'Factory (500 staff)', desc:'Full ERP covering finance, HR, and inventory for a mid-size manufacturer.', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'Personalized AI tutor adapting to each of 50K learners in real time.', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'Last-mile routing and fleet system coordinating 3,000 drivers.', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'Video consultation app with mood tracking and care-plan reminders.', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'Data pipeline and analytics dashboard powering automated claims decisions.', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'Behavioral data pipeline feeding a product-recommendation model.', result:'+45% AOV' },
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Michelin-Starred Restaurant Website', client:'Savelberg Restaurant', desc:"Dark, photo-led website for a Michelin-starred restaurant, with table booking, Thai and English pages, and an AI concierge chatbot that answers guests around the clock.", result:'New Website', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Ice Cream Brand Website', client:'OVO', desc:"Brand website and online ordering for a dessert shop, plus photography and social content direction that keeps its tone consistent from post to checkout.", result:'New Website', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'Fitness Studio Website', client:'BASE', desc:"Class booking, trainer profiles and studio photography on a dark, energetic site designed to turn visitors into trial members.", result:'New Website', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'Medical Uniform Manufacturer Website', client:'Blue Bear', desc:"Product catalogue by use case, fabric and size details, and a B2B order-inquiry form with bulk-order quote requests for institutional customers.", result:'New Website', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'Precision Manufacturing Website', client:'Thai Metal Aluminium', desc:"Technical content, factory photography and SEO structured around what industrial buyers search for when shortlisting a parts supplier.", result:'New Website', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'Bag Brand E-Commerce Website', client:'VERA', desc:"Minimal e-commerce storefront with cart, several payment methods and order management, built to sell direct to customers across the country.", result:'New Website', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'National Food Institute Website', client:'NFI – National Food Institute', desc:"Searchable lab-service directory, research archive and downloadable documents for businesses working with the National Food Institute.", result:'New Website', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'MBK Center Mobile App', client:'MBK Center', desc:"Store and promotion search, an interactive mall directory and a rewards system, built to handle many concurrent shoppers.", result:'New App', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'DITP Export Promotion Mobile App', client:'DITP', desc:"Redesigned export-promotion app with market data by product and country, trade-fair alerts and a connected business database.", result:'New App', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Fine-Dining Restaurant Website', client:'Sra Bua by Kiin Kiin', desc:"Luxury-toned restaurant site with a page on the chef's concept, high-resolution photography and a booking flow for international guests.", result:'New Website', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'Website, Branding & AI CRM', client:'World Surprise Travel', desc:"Logo and brand guidelines, a package-comparison website and an AI CRM that recommends tours and tracks each customer's status.", result:'New Website', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Home Builder Website with CRM', client:'Awii House', desc:"House-design gallery by style and size, a consultation request form and a CRM with contact history and a sales dashboard for management.", result:'New Website', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Website, Brand CI & Real Estate CRM', client:'Canapaya Residences', desc:"Brand CI, interactive unit plans and a dedicated real-estate CRM handling unit bookings, viewing appointments and a live sales dashboard.", result:'New Website', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'Website with AI CRM', client:'RFS', desc:"Solutions organised by use case with case studies, plus an AI CRM that tracks and prioritises enterprise sales opportunities.", result:'New Website', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Tax Inspection App', client:'Excise Department', desc:"Product-code scanning, real-time payment status, photo evidence for each inspection and cross-agency data, usable even when signal is weak.", result:'New App', slug:'excise-department' },
  { id:28, service:'government', tags:['Government','Web Platform'], year:'2025', title:'Government Contractor Integrity & Transparency Website', client:'ITAGC', desc:"A design-first public-sector website that sets out the contractor assessment process step by step, built to extend as new procedures are added.", result:'New Website', slug:'itagc' },
  { id:29, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Mobile App, Rebuilt with AI', client:'Department of Water Resources', desc:"Forecasting from historical data, automatic alerts for abnormal conditions and summary reports for officers and management.", result:'New App', slug:'department-of-water-resources' },
  { id:30, service:'government', tags:['Government','Mobile App'], year:'2025', title:'AI-Powered Immigration Inspection App', client:'Royal Thai Police Immigration Bureau', desc:"AI document checks, facial recognition, instant alerts and a live link to the traveller database for officers at immigration checkpoints.", result:'New App', slug:'immigration-bureau' },
  { id:31, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Culture & Heritage Mobile App', client:'Ministry of Culture', desc:"Cultural content curated by category, search by interest and notifications for new activities, synced with the existing website.", result:'New App', slug:'ministry-of-culture' },
  { id:32, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Restaurant Discovery Website', client:'BBK Menu', desc:"A photo-rich restaurant discovery site with search by cuisine and occasion, built on a UX/UI design prepared before development.", result:'New Website', slug:'bbk-menu' },
  { id:33, service:'realestate', tags:['Real Estate','CRM'], year:'2025', title:"CRM & AI for a Real Estate Developer", client:"Sena Development", desc:"A custom CRM built around the team's workflow, with AI to analyse customer and sales data and cut repetitive work.", result:"CRM + AI", slug:'sena-development' },
  { id:34, service:'wellness', tags:['Wellness','Web Platform'], year:'2025', title:"Shopify E-commerce for a Wellness Brand", client:"PAÑPURI", desc:"Design-first Shopify storefront with product categories, a clear checkout and a store the team can run without a developer.", result:"New Website", slug:'panpuri' },
  { id:35, service:'travel', tags:['Hospitality','Web Platform'], year:'2025', title:"Hotel Website with Online Booking", client:"Shanghai Mansion Bangkok", desc:"Room galleries, a short booking flow and an interface in keeping with a boutique hotel's identity, working on mobile and desktop.", result:"New Website", slug:'shanghai-mansion-bangkok' },
  { id:36, service:'sme', tags:['Retail','Web Platform'], year:'2025', title:"E-commerce & AI for a Shopping Mall", client:"Jampha Shopping Mall", desc:"Online storefront for the mall's shops, plus an AI system that answers repeat customer questions and supports daily operations.", result:"Website + AI", slug:'jampha-shopping-mall' },
  { id:38, service:'industry', tags:["Logistics", "Web Platform"], year:'2025', title:"Corporate Website for a Marine Logistics Company", client:"Prima Marine", desc:"Website and UX/UI design for a publicly listed shipping business, tested across devices and handed over with content the team can update.", result:"New Website", slug:'prima-marine' },
  { id:39, service:'fnb', tags:["F&B", "Web Platform"], year:'2025', title:"Website for a Renowned Thai Restaurant", client:"Baan Khanitha Thai Cuisine", desc:"Refined typography, a warm palette and fast mobile pages that tell the story of Thai cuisine and help guests find a branch.", result:"New Website", slug:'baan-khanitha' },
  { id:40, service:'beauty', tags:["Beauty", "CRM"], year:'2025', title:"Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic", client:"DSK", desc:"Digital strategy advice, an elegant UX/UI and a CRM where AI helps prioritise which enquiries to follow up first.", result:"Website + CRM", slug:'dsk' },
  { id:41, service:'realestate', tags:["Home Builder", "CRM"], year:'2025', title:"Website, UX/UI and AI-Assisted CRM for a Home Builder", client:"Admire", desc:"Large-format house and project galleries, a visible consultation route and an AI-assisted CRM that reminds the team when to follow up.", result:"Website + CRM", slug:'admire' },
  { id:42, service:'beauty', tags:["Beauty", "Brand"], year:'2025', title:"Brand, Website and Graphics for an Aesthetic Hospital", client:"MEKO International Hospital", desc:"Brand guidelines, treatment-focused website pages and reusable campaign and social templates for the hospital's in-house team.", result:"Brand + Website", slug:'meko-international-hospital' },
  { id:43, service:'government', tags:["Energy", "Mobile App", "Website"], year:'2025', title:"DEDE Inspection Check-in App and Website", client:"DEDE", desc:"A mobile app that lets energy management auditors and certifiers photograph and check in with a time stamp during on-site inspections, plus a website for the program.", result:"Mobile App + Website", slug:'dede' },
  { id:44, service:'fnb', tags:["F&B","Brand"], year:'2026', title:"Brand and Website for a Thai Restaurant in the US", client:"SUDA", desc:"Gold-on-green brand identity and a launch website for a contemporary Thai restaurant and cocktail bar in Bellevue, Washington.", result:"Brand + Website", slug:'suda' },
]

const projectsTH = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'ธนาคารชั้นนำ', desc:'ออกแบบแอปธนาคารใหม่สำหรับผู้ใช้ 4 ล้านคน ตั้งแต่สมัครใช้งานครั้งแรกจนถึงโอนเงินทุกวัน', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'เครือค้าปลีก', desc:'แพลตฟอร์มขายหลายช่องทาง เชื่อม 2,000+ สาขาเข้าด้วยกันในระบบสั่งซื้อและสต๊อกเดียว', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'กลุ่มโรงพยาบาล', desc:'ระบบสุขภาพดิจิทัลตั้งแต่ค้นหาแพทย์ จองนัด ไปจนถึงติดตามผล', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'บริษัทประกันภัย', desc:'AI อ่านและแยกประเภทเอกสารเคลมประกันให้อัตโนมัติ', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'ระบบชำระเงินที่รองรับ 500,000 รายการต่อวัน', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'แอปส่งของภายใน 30 นาที ซิงก์สต๊อกข้ามสาขาแบบเรียลไทม์', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'โรงงาน 500 คน', desc:'ระบบ ERP ที่รวมการเงิน HR และสต๊อกไว้ด้วยกัน สำหรับโรงงานขนาดกลาง', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'AI ติวเตอร์ที่ปรับเนื้อหาให้เหมาะกับผู้เรียนแต่ละคนแบบเรียลไทม์ จากผู้เรียน 50,000 คน', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'ระบบวางเส้นทางและดูแลยานพาหนะสำหรับคนขับ 3,000 คน', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'แอปปรึกษาแพทย์ผ่านวิดีโอ มีบันทึกอารมณ์ และแจ้งเตือนตามแผนการดูแล', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'ระบบจัดการข้อมูลและแดชบอร์ดวิเคราะห์ เพื่อช่วยตัดสินใจเคลมอัตโนมัติ', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'ระบบจัดการข้อมูลพฤติกรรมผู้ใช้ ส่งเข้าโมเดลแนะนำสินค้า', result:'+45% AOV' },
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารมิชลินสตาร์', client:'Savelberg Restaurant', desc:"เว็บไซต์โทนมืดที่ให้ภาพอาหารเป็นพระเอก มีทั้งหน้าไทยและอังกฤษ จองโต๊ะออนไลน์ได้ และมีแชทบอท AI คอยตอบลูกค้าตลอด 24 ชั่วโมง", result:'เว็บไซต์ใหม่', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์แบรนด์ไอศกรีม', client:'OVO', desc:"เว็บไซต์พร้อมระบบสั่งซื้อออนไลน์ให้ร้านไอศกรีม และแนวทางภาพกับคอนเทนต์โซเชียลที่ให้โทนเดียวกันตั้งแต่โพสต์จนถึงหน้าสั่งซื้อ", result:'เว็บไซต์ใหม่', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'เว็บไซต์สตูดิโอฟิตเนส', client:'BASE', desc:"ระบบจองคลาส โปรไฟล์เทรนเนอร์ และภาพบรรยากาศสตูดิโอ บนเว็บไซต์โทนมืดที่ช่วยให้คนที่เข้ามาตัดสินใจลองคลาสได้ง่ายขึ้น", result:'เว็บไซต์ใหม่', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์', client:'Blue Bear', desc:"แคตตาล็อกสินค้าแยกตามการใช้งาน พร้อมรายละเอียดผ้าและขนาด และฟอร์มสั่งซื้อแบบ B2B ที่ขอใบเสนอราคาเมื่อสั่งจำนวนมากได้", result:'เว็บไซต์ใหม่', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม', client:'Thai Metal Aluminium', desc:"คอนเทนต์เชิงเทคนิค ภาพโรงงาน และโครงสร้าง SEO ที่ตรงกับคำที่ผู้ซื้อในภาคอุตสาหกรรมใช้ค้นหาตอนหาผู้ผลิตชิ้นส่วน", result:'เว็บไซต์ใหม่', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า', client:'VERA', desc:"หน้าร้านอีคอมเมิร์ซสไตล์มินิมอล มีตะกร้า ชำระเงินได้หลายช่องทาง และระบบจัดการออเดอร์ เพื่อขายตรงถึงลูกค้าทั่วประเทศ", result:'เว็บไซต์ใหม่', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'เว็บไซต์สถาบันอาหาร', client:'NFI สถาบันอาหาร', desc:"ระบบค้นหาบริการห้องปฏิบัติการ คลังงานวิจัย และเอกสารให้ดาวน์โหลด สำหรับผู้ประกอบการที่ติดต่อสถาบันอาหาร", result:'เว็บไซต์ใหม่', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'แอปมือถือศูนย์การค้า MBK', client:'MBK Center', desc:"ระบบค้นหาร้านและโปรโมชัน ผังศูนย์การค้าที่กดดูได้ และระบบสะสมแต้ม ที่รองรับผู้ใช้จำนวนมากพร้อมกัน", result:'แอปใหม่', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP', client:'DITP', desc:"แอปส่งเสริมการส่งออกที่ออกแบบใหม่ มีข้อมูลตลาดแยกตามสินค้าและประเทศ แจ้งเตือนงานแสดงสินค้า และเชื่อมฐานข้อมูลผู้ประกอบการ", result:'แอปใหม่', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง', client:'Sra Bua by Kiin Kiin', desc:"เว็บไซต์ร้านอาหารโทนหรู มีหน้าเล่าแนวคิดของเชฟ ภาพความละเอียดสูง และขั้นตอนจองโต๊ะที่ลูกค้าต่างชาติใช้ได้", result:'เว็บไซต์ใหม่', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'เว็บไซต์ แบรนด์ และ AI CRM', client:'World Surprise Travel', desc:"โลโก้และแนวทางแบรนด์ เว็บไซต์เทียบแพ็กเกจทัวร์ และ AI CRM ที่แนะนำทริปและติดตามสถานะลูกค้าแต่ละคน", result:'เว็บไซต์ใหม่', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์และ CRM สำหรับบริษัทรับสร้างบ้าน', client:'Awii House', desc:"แกลเลอรีแบบบ้านแยกตามสไตล์และขนาด ฟอร์มขอคำปรึกษา และ CRM ที่เก็บประวัติการติดต่อพร้อมแดชบอร์ดยอดขายสำหรับผู้บริหาร", result:'เว็บไซต์ใหม่', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์ แบรนด์ CI และ CRM อสังหาริมทรัพย์', client:'Canapaya Residences', desc:"Brand CI ผังยูนิตที่กดดูได้ และ CRM เฉพาะอสังหาริมทรัพย์ที่จัดการการจองยูนิต นัดเข้าชม และแดชบอร์ดยอดขายแบบเรียลไทม์", result:'เว็บไซต์ใหม่', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'เว็บไซต์และ AI CRM', client:'RFS', desc:"โซลูชันแยกตามการใช้งานพร้อมกรณีศึกษา และ AI CRM ที่ติดตามและจัดลำดับโอกาสการขายกับลูกค้าองค์กร", result:'เว็บไซต์ใหม่', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปตรวจสอบภาษี', client:'กรมสรรพสามิต', desc:"สแกนรหัสสินค้า ดูสถานะการชำระภาษีแบบเรียลไทม์ บันทึกภาพเป็นหลักฐาน และเชื่อมข้อมูลข้ามหน่วยงาน ใช้ได้แม้สัญญาณไม่ดี", result:'แอปใหม่', slug:'excise-department' },
  { id:28, service:'government', tags:['Government','Web Platform'], year:'2025', title:'เว็บไซต์ตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐ', client:'ITAGC', desc:"เว็บไซต์หน่วยงานรัฐที่เริ่มจากงานออกแบบ อธิบายขั้นตอนประเมินผู้รับเหมาทีละข้อ และเพิ่มขั้นตอนใหม่ในอนาคตได้", result:'เว็บไซต์ใหม่', slug:'itagc' },
  { id:29, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปมือถือต่อยอดด้วย AI', client:'กรมทรัพยากรน้ำ', desc:"คาดการณ์จากข้อมูลย้อนหลัง แจ้งเตือนอัตโนมัติเมื่อผิดปกติ และมีรายงานสรุปสำหรับเจ้าหน้าที่และผู้บริหาร", result:'แอปใหม่', slug:'department-of-water-resources' },
  { id:30, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปตรวจคนเข้าเมืองที่ใช้ AI', client:'สำนักงานตรวจคนเข้าเมือง', desc:"AI ตรวจเอกสาร จดจำใบหน้า แจ้งเตือนทันที และเชื่อมฐานข้อมูลผู้เดินทางแบบเรียลไทม์ สำหรับเจ้าหน้าที่ที่ด่านตรวจคนเข้าเมือง", result:'แอปใหม่', slug:'immigration-bureau' },
  { id:31, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปงานด้านวัฒนธรรม', client:'กระทรวงวัฒนธรรม', desc:"เนื้อหาวัฒนธรรมจัดตามหมวดหมู่ ค้นหาตามความสนใจ แจ้งเตือนกิจกรรมใหม่ และซิงก์กับเว็บไซต์เดิม", result:'แอปใหม่', slug:'ministry-of-culture' },
  { id:32, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์แนะนำร้านอาหาร', client:'BBK Menu', desc:"เว็บไซต์ค้นหาร้านอาหารที่เต็มไปด้วยภาพ ค้นหาตามสไตล์อาหารและโอกาสพิเศษ สร้างจากงานออกแบบ UX/UI ที่ทำเสร็จก่อนเริ่มพัฒนา", result:'เว็บไซต์ใหม่', slug:'bbk-menu' },
  { id:33, service:'realestate', tags:['Real Estate','CRM'], year:'2025', title:"ระบบ CRM และ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์", client:"Sena Development", desc:"CRM ที่สร้างตามขั้นตอนงานของทีม พร้อม AI วิเคราะห์ข้อมูลลูกค้าและการขาย เพื่อลดงานซ้ำซ้อน", result:"CRM + AI", slug:'sena-development' },
  { id:34, service:'wellness', tags:['Wellness','Web Platform'], year:'2025', title:"เว็บไซต์อีคอมเมิร์ซ Shopify สำหรับแบรนด์เวลเนส", client:"PAÑPURI", desc:"ร้านบน Shopify ที่เริ่มจากงานออกแบบ มีหมวดสินค้า เช็คเอาต์ที่ชัดเจน และทีมงานดูแลร้านเองได้โดยไม่ต้องพึ่งนักพัฒนา", result:"เว็บไซต์ใหม่", slug:'panpuri' },
  { id:35, service:'travel', tags:['Hospitality','Web Platform'], year:'2025', title:"เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์", client:"Shanghai Mansion Bangkok", desc:"แกลเลอรีห้องพัก ขั้นตอนจองที่สั้น และหน้าตาที่เข้ากับโรงแรมบูติก ใช้ได้ทั้งบนมือถือและคอมพิวเตอร์", result:"เว็บไซต์ใหม่", slug:'shanghai-mansion-bangkok' },
  { id:36, service:'sme', tags:['Retail','Web Platform'], year:'2025', title:"เว็บไซต์อีคอมเมิร์ซและระบบ AI สำหรับศูนย์การค้า", client:"Jampha Shopping Mall", desc:"หน้าร้านออนไลน์สำหรับร้านค้าในศูนย์ พร้อมระบบ AI ที่ช่วยตอบคำถามลูกค้าที่ถามซ้ำและช่วยงานประจำวันของทีม", result:"เว็บไซต์ + AI", slug:'jampha-shopping-mall' },
  { id:38, service:'industry', tags:["Logistics", "Web Platform"], year:'2025', title:"เว็บไซต์องค์กรสำหรับธุรกิจขนส่งทางทะเล", client:"Prima Marine", desc:"เว็บไซต์และงาน UX/UI ของธุรกิจขนส่งทางทะเลที่เป็นบริษัทมหาชน ทดสอบหลายอุปกรณ์ และส่งมอบพร้อมคอนเทนต์ที่ทีมอัปเดตเองได้", result:"เว็บไซต์ใหม่", slug:'prima-marine' },
  { id:39, service:'fnb', tags:["F&B", "Web Platform"], year:'2025', title:"เว็บไซต์ร้านอาหารไทยชื่อดัง", client:"Baan Khanitha Thai Cuisine", desc:"ตัวอักษรประณีต โทนสีอบอุ่น และแสดงผลหน้าเว็บบนโทรศัพท์มือถือได้อย่างรวดเร็ว เล่าเรื่องอาหารไทยและช่วยให้ลูกค้าหาสาขาเจอ", result:"เว็บไซต์ใหม่", slug:'baan-khanitha' },
  { id:40, service:'beauty', tags:["Beauty", "CRM"], year:'2025', title:"เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม", client:"DSK", desc:"คำปรึกษาแผนดิจิทัล UX/UI ที่สง่างาม และ CRM ที่ AI ช่วยจัดลำดับว่าควรติดตามคำถามไหนก่อน", result:"เว็บไซต์ + CRM", slug:'dsk' },
  { id:41, service:'realestate', tags:["Home Builder", "CRM"], year:'2025', title:"เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน", client:"Admire", desc:"แกลเลอรีแบบบ้านและโครงการภาพใหญ่ ช่องทางขอคำปรึกษาที่เห็นชัด และ CRM ที่มี AI ช่วยเตือนทีมเมื่อถึงเวลาตามลูกค้า", result:"เว็บไซต์ + CRM", slug:'admire' },
  { id:42, service:'beauty', tags:["Beauty", "Brand"], year:'2025', title:"แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม", client:"MEKO International Hospital", desc:"แนวทางแบรนด์ หน้าเว็บที่เน้นบริการรักษา และเทมเพลตแคมเปญกับโซเชียลที่ทีมโรงพยาบาลนำไปใช้ซ้ำได้", result:"แบรนด์ + เว็บไซต์", slug:'meko-international-hospital' },
  { id:43, service:'government', tags:["Energy", "Mobile App", "Website"], year:'2025', title:"แอป DEDE สำหรับเช็กอินตรวจสอบ และเว็บไซต์", client:"DEDE", desc:"แอปพลิเคชันที่ให้ผู้ตรวจสอบและรับรองการจัดการพลังงานถ่ายภาพและเช็กอินระบุเวลาขณะเข้าตรวจ พร้อมเว็บไซต์ของโครงการ", result:"แอปมือถือและเว็บไซต์", slug:'dede' },
  { id:44, service:'fnb', tags:["F&B","Brand"], year:'2026', title:"แบรนด์และเว็บไซต์ร้านอาหารไทยในอเมริกา", client:"SUDA", desc:"อัตลักษณ์แบรนด์โทนทองบนเขียวเข้ม และเว็บไซต์เปิดตัวของร้านอาหารไทยร่วมสมัยและค็อกเทลบาร์ที่ Bellevue รัฐวอชิงตัน", result:"แบรนด์ + เว็บไซต์", slug:'suda' },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

export default function WorkPageClient({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const projects = isEN ? projectsEN : projectsTH
  const serviceGroups = isEN ? serviceGroupsEN : serviceGroupsTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (key: string, dir: 1 | -1) => {
    const el = rowRefs.current[key]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

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
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="t-label mb-5">{isEN ? 'Our Work' : 'ผลงานของเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed" style={{ color: 'var(--ink)' }}>
                  {isEN ? 'Products We Are' : 'ผลงานที่เรา'}<br />
                  <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {isEN ? 'Proud Of' : 'ภูมิใจนำเสนอ'}
                  </span>
                </h1>
              </div>
              <p className="text-sm max-w-md leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.75)', fontWeight: 400 }}>
                {isEN ? '120+ projects over 8 years. Below is a selection of recent websites, mobile apps and CRM systems, grouped by the kind of business we built them for. Open any card to see the scope, the approach and the services behind it.' : 'เราทำมาแล้ว 120+ โปรเจกต์ใน 8 ปี ด้านล่างคือเว็บไซต์ แอปมือถือ และระบบ CRM ที่ทำล่าสุด แยกตามประเภทธุรกิจของลูกค้า กดเข้าไปดูแต่ละงานได้ว่าทำอะไรบ้าง เริ่มต้นอย่างไร และใช้บริการอะไรของเรา'}
              </p>
            </div>
          </div>
        </section>

        {/* Dark section — projects grouped by service category, horizontal scroll rows */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {serviceGroups.map((sg) => {
              const items = projects.filter(p => p.service === sg.key && (p as any).slug)
              if (!items.length) return null
              return (
                <div key={sg.key}>
                  <div className="flex items-end justify-between mb-8">
                    <div className="max-w-xl">
                      <h2 className="t-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight mb-2" style={{ color:'var(--ink)' }}>{sg.label}</h2>
                      <p className="text-sm mb-1.5" style={{ color:'rgb(var(--fg) / 0.6)', fontWeight:400, lineHeight:1.5 }}>
                        {(sg as any).desc}
                      </p>
                      <p className="text-sm" style={{ color:'var(--accent-2)', fontWeight:400 }}>
                        {isEN ? `${items.length} project${items.length > 1 ? 's' : ''} in this category` : `${items.length} โปรเจกต์ในหมวดนี้`}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(sg.key, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgb(var(--fg)/0.1)]"
                        style={{ border:'1px solid rgb(var(--fg) / 0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize:16, color:'var(--ink)' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(sg.key, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgb(var(--fg)/0.1)]"
                        style={{ border:'1px solid rgb(var(--fg) / 0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize:16, color:'var(--ink)' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[sg.key] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((p, i) => {
                      const CardTag: any = (p as any).slug ? Link : 'div'
                      const cardProps = (p as any).slug ? { href: `/${lang}/work/${(p as any).slug}` } : {}
                      const cover = (p as any).slug ? getCaseStudy((p as any).slug)?.[lang]?.heroImage : undefined
                      return (
                      <CardTag
                        key={p.id}
                        {...cardProps}
                        className="group shrink-0 w-[300px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                        style={{ background:'rgb(var(--fg) / 0.03)', border:'1px solid rgb(var(--fg) / 0.08)' }}
                      >
                        <div className="relative h-36 rounded-xl flex items-center justify-center mb-4 overflow-hidden" style={cover ? undefined : { background: gradients[i % gradients.length] }}>
                          {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={cover} alt={p.title} loading="lazy" width={300} height={144} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <i className="ti ti-photo" style={{ fontSize:22, color:'var(--ink)', opacity:0.4 }} aria-hidden="true" />
                          )}
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-[rgb(var(--fg)/0.2)] backdrop-blur-sm text-[color:var(--ink)]" style={{ fontWeight:400 }}>{p.year}</span>
                          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs flex items-center gap-1" style={{ background:'rgba(8,7,15,0.6)', color:'var(--accent-2)', fontWeight:500 }}>
                            <i className="ti ti-trending-up" style={{ fontSize:12 }} aria-hidden="true" />{p.result}
                          </span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color:'var(--accent)', fontWeight:400 }}>{p.client}</p>
                        <h3 className="text-[color:var(--ink)] leading-snug mb-2 group-hover:text-[color:var(--accent)] transition-colors" style={{ fontWeight:500, fontSize:'0.98rem' }}>{p.title}</h3>
                        <p style={{ color:'rgb(var(--fg) / 0.55)', fontWeight:400, fontSize:'0.8rem', lineHeight:1.5 }} className="mb-4 line-clamp-5">{p.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color:'var(--accent)', fontWeight:400 }}>
                          {isEN ? 'View project' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize:13 }} aria-hidden="true" />
                        </span>
                      </CardTag>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: 'var(--ink)', fontWeight: 500 }}>{isEN ? 'Ready to start?' : 'พร้อมเริ่มหรือยัง?'}</p>
            <h2 className="t-display text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Let your project<br />be on this list</> : <>ให้โปรเจกต์ของคุณ<br />อยู่ในรายการนี้</>}
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
              {isEN ? 'Tell us what you are trying to launch, fix or grow, and we will say how we would approach it. The first conversation is free, and there is no obligation to continue.' : 'เล่าให้เราฟังว่าคุณอยากทำอะไร แก้อะไร หรืออยากต่อยอดอะไร แล้วเราจะบอกว่าเราจะเริ่มอย่างไร คุยกันครั้งแรกไม่เสียค่าใช้จ่าย และไม่มีข้อผูกมัดว่าต้องทำงานต่อด้วยกัน'}
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Start a Project' : 'เริ่มโปรเจกต์เลย'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
