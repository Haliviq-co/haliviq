import type { Metadata } from 'next'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'SEO, AEO and GEO Services in Thailand | Haliviq'
    : 'บริการ SEO AEO GEO ให้เว็บถูกพบทั้งใน Google และ AI | Haliviq'
  const description = isEN
    ? 'Be found in Google and quoted by AI assistants. Haliviq builds SEO, AEO and GEO into your website: technical fixes, structured content, schema and measurement, by the team that builds the site.'
    : 'ทำให้เว็บถูกพบใน Google และถูกอ้างถึงโดยผู้ช่วย AI Haliviq วางงาน SEO, AEO และ GEO ลงในตัวเว็บ ทั้งแก้เทคนิค จัดโครงสร้างเนื้อหา Schema และวัดผล โดยทีมที่สร้างเว็บเอง'
  const url = `https://haliviq.com/${params.lang}/services/seo-aeo-geo`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Strategy / SEO · AEO · GEO' : 'กลยุทธ์ / SEO · AEO · GEO'
  const title    = isEN ? 'Be Found in Google' : 'ให้คนพบคุณใน Google'
  const subtitle = isEN ? 'And Quoted by AI' : 'และถูกอ้างถึงโดย AI'
  const heroDesc = isEN
    ? 'People now ask Google, ChatGPT, Gemini and Perplexity before they ever visit a website. SEO helps your pages rank, AEO helps them become the direct answer, and GEO helps AI assistants understand and mention your brand. We build all three into the website itself, so the technical work, the content and the measurement come from one team.'
    : 'ตอนนี้คนถาม Google, ChatGPT, Gemini และ Perplexity ก่อนจะเข้าเว็บไซต์ใดๆ SEO ช่วยให้หน้าเว็บติดอันดับ AEO ช่วยให้เนื้อหากลายเป็นคำตอบโดยตรง และ GEO ช่วยให้ผู้ช่วย AI เข้าใจและพูดถึงแบรนด์ของคุณ เราวางทั้งสามอย่างลงในตัวเว็บ งานเทคนิค เนื้อหา และการวัดผลจึงมาจากทีมเดียว'
  const whyTitle = isEN ? 'Why ranking alone is no longer enough' : 'ทำไมแค่ติดอันดับถึงไม่พออีกแล้ว'
  const whyDesc  = isEN
    ? 'Search results now often show an AI summary or a direct answer above the usual list of links, and many people get what they need without clicking. A site that is only tuned for classic rankings can be invisible in those answers. A site with clear structure, plain answers and consistent facts about the business is far easier for both search engines and AI systems to read and quote. Nobody can promise a position in an AI answer, but you can make your site the easiest one to understand.'
    : 'ผลการค้นหาตอนนี้มักมีสรุปจาก AI หรือคำตอบตรงๆ อยู่เหนือรายการลิงก์ และหลายคนได้คำตอบโดยไม่ต้องคลิกเข้าเว็บ เว็บที่ปรับไว้เพื่ออันดับแบบเดิมอย่างเดียวอาจไม่ถูกพูดถึงในคำตอบเหล่านั้นเลย เว็บที่โครงสร้างชัด คำตอบตรงประเด็น และข้อมูลธุรกิจตรงกันทุกที่ จะอ่านง่ายทั้งสำหรับเสิร์ชเอนจินและระบบ AI ไม่มีใครรับประกันตำแหน่งในคำตอบของ AI ได้ แต่คุณทำให้เว็บของคุณเป็นเว็บที่เข้าใจง่ายที่สุดได้'
  const ctaTitle = isEN ? 'Want to know how visible your site is?' : 'อยากรู้ว่าเว็บคุณถูกพบมากแค่ไหน?'
  const ctaDesc  = isEN
    ? 'Tell us your website and the questions your customers ask. We will check how it shows up in search and in AI answers, and tell you what to fix first.'
    : 'บอกเว็บไซต์ของคุณและคำถามที่ลูกค้าถามบ่อย เราจะตรวจว่าเว็บแสดงผลในการค้นหาและในคำตอบของ AI อย่างไร แล้วบอกว่าควรแก้อะไรก่อน'
  const heroBullets = isEN ? [
      'SEO: technical health, page speed, site structure, keywords and internal links',
      'AEO: pages written to answer real questions directly, with FAQ and how-to structure',
      'GEO: clear brand and service facts that AI assistants can read, trust and cite',
      'Structured data (schema.org) for organisation, services, FAQ, articles and products',
      'Thai and English content, with correct language tags for each version',
      'Reporting on search traffic and on how your brand appears in AI answers',
    ] : [
      'SEO: สุขภาพเว็บด้านเทคนิค ความเร็วหน้าเว็บ โครงสร้างเว็บ คีย์เวิร์ด และลิงก์ภายใน',
      'AEO: เขียนหน้าเว็บให้ตอบคำถามจริงตรงๆ พร้อมโครงสร้างแบบ FAQ และ How-to',
      'GEO: ข้อมูลแบรนด์และบริการที่ชัดเจน ให้ผู้ช่วย AI อ่าน เชื่อถือ และอ้างอิงได้',
      'Structured Data (schema.org) สำหรับองค์กร บริการ FAQ บทความ และสินค้า',
      'เนื้อหาไทยและอังกฤษ พร้อมแท็กภาษาที่ถูกต้องของแต่ละเวอร์ชัน',
      'รายงานทั้งทราฟฟิกจากการค้นหา และการที่แบรนด์ปรากฏในคำตอบของ AI',
    ]
  const whyPoints = isEN ? [
      'SEO is still the base. AI answers and search rankings both draw on pages that are fast, crawlable and clearly organised',
      'AEO rewards pages that state the answer in the first lines, then explain, which also helps readers who skim',
      'GEO depends on consistent facts: the same company name, services and contact details everywhere they appear',
      'Structured data tells machines what a page is about instead of leaving them to guess',
      'No one can guarantee a ranking or a citation, so we focus on what is in your control and measure the rest',
    ] : [
      'SEO ยังเป็นฐานสำคัญ ทั้งคำตอบของ AI และอันดับการค้นหาดึงจากหน้าเว็บที่เร็ว เข้าถึงได้ และจัดระเบียบชัด',
      'AEO ให้ผลกับหน้าที่ตอบในบรรทัดแรกแล้วค่อยอธิบาย ซึ่งช่วยคนที่อ่านผ่านๆ ด้วย',
      'GEO ขึ้นกับข้อมูลที่ตรงกัน คือชื่อบริษัท บริการ และช่องทางติดต่อเหมือนกันทุกที่ที่ปรากฏ',
      'Structured Data บอกเครื่องว่าหน้านั้นเกี่ยวกับอะไร แทนที่จะปล่อยให้เดา',
      'ไม่มีใครรับประกันอันดับหรือการถูกอ้างอิงได้ เราจึงโฟกัสที่สิ่งที่คุณควบคุมได้ และวัดผลส่วนที่เหลือ',
    ]
  const features = isEN ? [
      {icon: 'ti-search', title: 'Technical SEO', desc: 'We check that search engines can crawl and understand the site: sitemap, robots rules, canonical and language tags, redirects, broken links, mobile layout and page speed. We fix what we find in the code, because we build the site.'},
      {icon: 'ti-message-question', title: 'Answer Engine Optimization (AEO)', desc: 'We list the questions your customers really ask and write or rework pages so each one gets a clear answer near the top, followed by detail. FAQ and how-to sections are structured so search engines and assistants can lift an answer cleanly.'},
      {icon: 'ti-sparkles', title: 'Generative Engine Optimization (GEO)', desc: 'We make sure the facts about your business are clear, consistent and easy to quote: who you are, what you offer, where you work and how to reach you. We also check which AI crawlers your site allows, and review how assistants describe you today.'},
      {icon: 'ti-code', title: 'Structured Data & Schema', desc: 'We add schema.org markup for your organisation, services, FAQs, articles and products, and test it with the standard validators, so machines read your pages the way you intend.'},
      {icon: 'ti-pencil', title: 'Content Structure & Topics', desc: 'We plan topic clusters around what customers search for, set up headings and internal links, and write briefs your team or ours can follow. Thai and English versions are kept separate and correctly tagged.'},
      {icon: 'ti-chart-line', title: 'Measurement & Reporting', desc: 'We set up Search Console and analytics, track the pages and questions that matter, and run a fixed set of test questions in major AI assistants each month, so you can see how your visibility changes over time.'},
    ] : [
      {icon: 'ti-search', title: 'Technical SEO', desc: 'เราตรวจว่าเสิร์ชเอนจินเข้ามาอ่านและเข้าใจเว็บได้ ทั้ง Sitemap กฎ Robots แท็ก Canonical และแท็กภาษา Redirect ลิงก์เสีย หน้าจอมือถือ และความเร็ว แล้วแก้ในโค้ดให้เลย เพราะเราสร้างเว็บเอง'},
      {icon: 'ti-message-question', title: 'Answer Engine Optimization (AEO)', desc: 'เราไล่คำถามที่ลูกค้าถามจริง แล้วเขียนหรือปรับหน้าให้แต่ละคำถามมีคำตอบชัดๆ ไว้ช่วงต้นหน้า ตามด้วยรายละเอียด ส่วน FAQ และ How-to จัดโครงสร้างให้เสิร์ชเอนจินและผู้ช่วย AI ดึงคำตอบไปใช้ได้สะอาด'},
      {icon: 'ti-sparkles', title: 'Generative Engine Optimization (GEO)', desc: 'เราทำให้ข้อมูลธุรกิจของคุณชัด ตรงกัน และอ้างอิงง่าย คือคุณเป็นใคร ทำอะไร ทำงานที่ไหน ติดต่อได้อย่างไร พร้อมตรวจว่าเว็บอนุญาตให้ AI Crawler ตัวไหนเข้าถึงบ้าง และดูว่าผู้ช่วย AI อธิบายแบรนด์คุณอย่างไรในตอนนี้'},
      {icon: 'ti-code', title: 'Structured Data & Schema', desc: 'เราเพิ่ม schema.org สำหรับองค์กร บริการ FAQ บทความ และสินค้า แล้วทดสอบด้วยเครื่องมือตรวจมาตรฐาน เครื่องจึงอ่านหน้าเว็บได้ตรงกับที่คุณตั้งใจ'},
      {icon: 'ti-pencil', title: 'Content Structure & Topics', desc: 'เราวางกลุ่มหัวข้อจากสิ่งที่ลูกค้าค้นหา จัดหัวข้อและลิงก์ภายใน และเขียน Brief ให้ทีมคุณหรือทีมเราทำต่อได้ เวอร์ชันไทยและอังกฤษแยกกันและแท็กภาษาให้ถูกต้อง'},
      {icon: 'ti-chart-line', title: 'Measurement & Reporting', desc: 'เราตั้ง Search Console และ Analytics ติดตามหน้าและคำถามที่สำคัญ และทดสอบคำถามชุดเดิมกับผู้ช่วย AI หลักๆ ทุกเดือน เพื่อให้เห็นว่าการมองเห็นของคุณเปลี่ยนไปอย่างไรตามเวลา'},
    ]
  const steps = isEN ? [
      {no: '01', title: 'Visibility Audit', desc: 'We check the site for technical issues, review how it ranks for the terms that matter, and ask major AI assistants the questions your customers ask. You get a short report of what is working and what is missing.'},
      {no: '02', title: 'Question & Topic Map', desc: 'We list customer questions by topic and decide which page answers each one, whether that is a page you already have, one to rework or one to write.'},
      {no: '03', title: 'Fix & Structure', desc: 'We fix technical issues, add structured data, tidy headings and internal links, and make the business facts consistent across the site.'},
      {no: '04', title: 'Write & Publish', desc: 'We rework or write the answer pages in Thai and English, review them with you for accuracy, and publish them.'},
      {no: '05', title: 'Measure & Improve', desc: 'We track search traffic and repeat the same AI test questions every month, then adjust the plan based on what changed.'},
    ] : [
      {no: '01', title: 'Visibility Audit', desc: 'เราตรวจเว็บด้านเทคนิค ดูอันดับของคำที่สำคัญ และถามผู้ช่วย AI หลักๆ ด้วยคำถามที่ลูกค้าถาม คุณจะได้รายงานสั้นๆ ว่าอะไรทำงานได้ดี และอะไรยังขาด'},
      {no: '02', title: 'Question & Topic Map', desc: 'เราจัดคำถามของลูกค้าตามหัวข้อ และกำหนดว่าหน้าไหนตอบข้อไหน จะเป็นหน้าที่มีอยู่แล้ว หน้าที่ต้องปรับ หรือหน้าที่ต้องเขียนใหม่'},
      {no: '03', title: 'Fix & Structure', desc: 'เราแก้ปัญหาเทคนิค เพิ่ม Structured Data จัดหัวข้อและลิงก์ภายใน และทำให้ข้อมูลธุรกิจตรงกันทั้งเว็บ'},
      {no: '04', title: 'Write & Publish', desc: 'เราปรับหรือเขียนหน้าคำตอบเป็นภาษาไทยและอังกฤษ ให้คุณตรวจความถูกต้อง แล้วเผยแพร่'},
      {no: '05', title: 'Measure & Improve', desc: 'เราติดตามทราฟฟิกจากการค้นหา และทดสอบคำถามชุดเดิมกับ AI ทุกเดือน แล้วปรับแผนตามสิ่งที่เปลี่ยนไป'},
    ]
  const faqs = isEN ? [
      {q: 'What is the difference between SEO, AEO and GEO?', a: 'SEO is about ranking your pages in search results. AEO (Answer Engine Optimization) is about writing pages so a search engine or assistant can lift a direct answer from them. GEO (Generative Engine Optimization) is about making your brand and facts clear enough that AI assistants such as ChatGPT, Gemini or Perplexity describe and cite you correctly. They overlap, and good structure and clear writing help all three.'},
      {q: 'Can you guarantee we will appear in ChatGPT or Google AI answers?', a: 'No, and be careful with anyone who does. AI systems choose their sources in ways no agency controls. What we can do is make your site easy to crawl, clear to read and consistent, then measure how often and how accurately you appear.'},
      {q: 'Is SEO still worth it now that AI answers exist?', a: 'Yes. Search is still where many customers start, and AI assistants often draw on the same well-organised pages. SEO remains the foundation, with AEO and GEO built on top.'},
      {q: 'Do you work on Thai and English versions?', a: 'Yes. We keep each language on its own address with the correct language tags, and write each version for its readers rather than translating word for word.'},
      {q: 'Do we need a new website for this?', a: 'Not necessarily. Many fixes can be made on an existing site. If the site is slow, hard to change or built in a way that blocks the fixes, we will say so and show you the options.'},
      {q: 'How long until we see results?', a: 'Technical fixes can show effects within weeks. Rankings and AI visibility usually take months to move, and they depend on competition and on how often the content is updated. We report progress monthly rather than promise a date.'},
      {q: 'What do you need from us to start?', a: 'Your website address, access to Search Console and analytics if you have them, a list of the services you want to be found for, and the questions customers ask you most often.'},
    ] : [
      {q: 'SEO, AEO และ GEO ต่างกันยังไง?', a: 'SEO คือการทำให้หน้าเว็บติดอันดับในผลการค้นหา AEO (Answer Engine Optimization) คือการเขียนหน้าเว็บให้เสิร์ชเอนจินหรือผู้ช่วยดึงคำตอบตรงๆ ไปใช้ได้ ส่วน GEO (Generative Engine Optimization) คือการทำให้แบรนด์และข้อมูลของคุณชัดพอที่ผู้ช่วย AI อย่าง ChatGPT, Gemini หรือ Perplexity จะอธิบายและอ้างอิงได้ถูกต้อง สามอย่างนี้ซ้อนกัน โครงสร้างที่ดีและการเขียนที่ชัดช่วยได้ทั้งหมด'},
      {q: 'รับประกันได้ไหมว่าจะขึ้นใน ChatGPT หรือคำตอบ AI ของ Google?', a: 'รับประกันไม่ได้ และควรระวังเจ้าที่บอกว่ารับประกันได้ ระบบ AI เลือกแหล่งข้อมูลด้วยวิธีที่เอเจนซี่ไม่มีใครควบคุมได้ สิ่งที่เราทำได้คือทำให้เว็บเข้าถึงง่าย อ่านชัด และข้อมูลตรงกัน แล้ววัดว่าคุณปรากฏบ่อยและถูกต้องแค่ไหน'},
      {q: 'มี AI ตอบคำถามแล้ว SEO ยังคุ้มไหม?', a: 'คุ้มครับ การค้นหายังเป็นจุดเริ่มต้นของลูกค้าหลายคน และผู้ช่วย AI มักดึงจากหน้าเว็บที่จัดระเบียบดีชุดเดียวกัน SEO ยังเป็นฐาน แล้วค่อยต่อ AEO และ GEO ขึ้นไป'},
      {q: 'ทำทั้งเวอร์ชันไทยและอังกฤษไหม?', a: 'ทำครับ เราแยกแต่ละภาษาไว้คนละที่อยู่พร้อมแท็กภาษาที่ถูกต้อง และเขียนแต่ละเวอร์ชันให้เหมาะกับผู้อ่านของภาษานั้น ไม่ได้แปลตรงตัว'},
      {q: 'ต้องทำเว็บใหม่ไหม?', a: 'ไม่จำเป็นเสมอไป การแก้หลายอย่างทำบนเว็บเดิมได้ ถ้าเว็บช้า แก้ยาก หรือสร้างมาแบบที่ขวางการแก้ เราจะบอกตรงๆ พร้อมทางเลือก'},
      {q: 'นานแค่ไหนถึงจะเห็นผล?', a: 'งานแก้ด้านเทคนิคอาจเห็นผลภายในไม่กี่สัปดาห์ ส่วนอันดับและการปรากฏใน AI มักใช้เวลาเป็นเดือน ขึ้นกับคู่แข่งและความถี่ที่อัปเดตเนื้อหา เรารายงานความคืบหน้ารายเดือน แทนการสัญญาวันที่'},
      {q: 'ต้องเตรียมอะไรให้เราก่อนเริ่ม?', a: 'ที่อยู่เว็บไซต์ สิทธิ์เข้า Search Console และ Analytics ถ้ามี รายการบริการที่อยากให้คนค้นเจอ และคำถามที่ลูกค้าถามบ่อยที่สุด'},
    ]
  const related = isEN ? [
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'AI Solutions', href: '/services/ai'}
    ] : [
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'AI Solutions', href: '/services/ai'}
    ]
  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/growth-strategy/hero.jpg"
      whyImg="/images/services/growth-strategy/why1.jpg"
      whyImg2="/images/services/growth-strategy/why2.jpg"
      featureImg="/images/services/growth-strategy/feature.jpg"
      processImg="/images/services/growth-strategy/process.jpg"
    />
  )
}
