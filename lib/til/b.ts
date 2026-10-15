import type { TilNote } from '@/lib/til-types'

export const tilB: TilNote[] = [
  // 10
  {
    slug: 'docker-multi-stage-image-size',
    topic: 'Docker',
    date: '2025-09-18',
    en: {
      title: 'Multi-stage builds cut our image size by 71%',
      excerpt: 'Copying node_modules straight from the build stage dragged in compilers and dev tools that nobody needs at runtime. A clean multi-stage build with COPY --from, copying only the built output and production dependencies, cut the image from 1.2GB to 340MB. Smaller images pull faster and have fewer packages to patch.',
      problem: [
        'On one of our projects the production image had grown to 1.2GB for a fairly ordinary Node service. Deploys were slow because every node had to pull that image, and security scans kept listing packages that the running app never touches.',
        'When we looked inside, the image still carried the compilers, build tools and dev dependencies that we only needed while building. The final image had effectively been built on top of the same fat environment we used to compile the app.',
      ],
      why: [
        'Every instruction in a Dockerfile adds to the image, and the final image contains everything in the stage it was built from. If you install toolchains and dev dependencies in that stage, they stay in the image even if a later step builds the app and you never use them again.',
        'Multi-stage builds solve this by letting you use one stage to build and a separate, smaller stage to run. Only the files you explicitly copy across with COPY --from end up in the final image. The build stage and everything in it is discarded.',
      ],
      fix: [
        'We now build in one stage, prune dev dependencies there, and start the runtime stage from a slim base image. The runtime stage copies only the built output, the package manifest and the production node_modules. That took the image from 1.2GB to 340MB, which is a 71% reduction.',
        'A nice side effect is the smaller attack surface. Fewer packages in the image means fewer things to patch and fewer scanner findings that have nothing to do with our code.',
      ],
      steps: [
        'Name the build stage with AS build and do the install and compile there.',
        'Run npm prune --omit=dev (or install production dependencies separately) at the end of the build stage.',
        'Start a new FROM with a slim runtime image.',
        'Use COPY --from=build for only the output, manifest and production node_modules.',
        'Compare sizes with docker image ls before and after.',
      ],
      code: {
        label: 'Dockerfile',
        lang: 'dockerfile',
        text: `FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
CMD ["node", "dist/server.js"]`,
      },
      takeaway: 'Build in one stage, run in another, and copy across only what the running app needs.',
    },
    th: {
      title: 'Multi-stage build ลดขนาด Docker image ลง 71%',
      excerpt: 'การ copy node_modules จาก build stage ตรง ๆ ทำให้ compiler และเครื่องมือสำหรับพัฒนาติดมาด้วย ทั้งที่ตอนรันจริงไม่มีใครใช้ พอเปลี่ยนเป็น multi-stage build ที่ใช้ COPY --from เอาเฉพาะไฟล์ที่ build แล้วกับ dependency สำหรับ production image ก็ลดจาก 1.2GB เหลือ 340MB image เล็กลงจึง pull เร็วขึ้นและมีแพ็กเกจให้ต้องอัปเดตแพตช์น้อยลง',
      problem: [
        'ในโปรเจกต์หนึ่งของเรา production image โตไปถึง 1.2GB ทั้งที่เป็น Node service ธรรมดา ๆ ตอน deploy เลยช้า เพราะทุกเครื่องต้อง pull image ก้อนใหญ่ และผลสแกนความปลอดภัยก็ขึ้นแพ็กเกจที่แอปตอนรันไม่เคยแตะเลย',
        'พอเปิดดูข้างใน image ยังมี compiler, build tools และ dev dependencies ที่ใช้แค่ตอน build อยู่ครบ เพราะ image สุดท้ายสร้างต่อจาก environment ตัวเดียวกับที่ใช้ compile แอป',
      ],
      why: [
        'ทุกคำสั่งใน Dockerfile จะเพิ่มของเข้าไปใน image และ image สุดท้ายก็มีทุกอย่างที่อยู่ใน stage ที่มันสร้างจากมา ถ้าติดตั้ง toolchain กับ dev dependencies ไว้ใน stage นั้น ของพวกนี้จะค้างอยู่ใน image แม้ขั้นตอนหลังจะ build แอปเสร็จแล้วและไม่ได้ใช้มันอีก',
        'Multi-stage build แก้เรื่องนี้ด้วยการแยก stage หนึ่งไว้ build และอีก stage ที่เล็กกว่าไว้รัน มีแค่ไฟล์ที่เราสั่ง COPY --from ข้ามมาเท่านั้นที่จะเข้า image สุดท้าย ส่วน build stage ทั้งหมดจะถูกทิ้งไป',
      ],
      fix: [
        'ตอนนี้เรา build ใน stage แรก ตัด dev dependencies ออกที่ stage นั้น แล้วเริ่ม runtime stage จาก base image แบบ slim จากนั้น copy มาแค่ไฟล์ที่ build แล้ว, package manifest และ node_modules ที่เป็น production เท่านั้น image เลยลดจาก 1.2GB เหลือ 340MB หรือเล็กลง 71%',
        'ผลพลอยได้คือพื้นที่ให้โจมตีน้อยลง แพ็กเกจใน image น้อยลง ก็มีของที่ต้องอัปเดตแพตช์น้อยลง และผลสแกนก็ไม่ขึ้นเรื่องที่ไม่เกี่ยวกับโค้ดเรา',
      ],
      steps: [
        'ตั้งชื่อ build stage ด้วย AS build แล้วติดตั้งกับ compile ที่นั่น',
        'รัน npm prune --omit=dev (หรือติดตั้งเฉพาะ production dependencies แยกต่างหาก) ตอนท้าย build stage',
        'เริ่ม FROM ใหม่ด้วย runtime image แบบ slim',
        'ใช้ COPY --from=build เฉพาะ output, manifest และ node_modules ที่เป็น production',
        'เทียบขนาดก่อนและหลังด้วย docker image ls',
      ],
      code: {
        label: 'Dockerfile',
        lang: 'dockerfile',
        text: `FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
CMD ["node", "dist/server.js"]`,
      },
      takeaway: 'build ใน stage หนึ่ง รันใน stage ที่สอง แล้ว copy ข้ามไปเฉพาะสิ่งที่แอปต้องใช้ตอนรัน',
    },
  },

  // 11
  {
    slug: 'docker-dockerignore-copy-from',
    topic: 'Docker',
    date: '2025-04-02',
    en: {
      title: ".dockerignore doesn't apply to COPY --from another stage",
      excerpt: 'We kept finding .env in the final image because .dockerignore only filters the build context sent to Docker, not files copied between stages. Be explicit about what you copy in later stages, never copy the whole directory, and inspect the final image to confirm no secrets are inside.',
      problem: [
        'We kept finding a .env file inside a final image, even though we believed .dockerignore was keeping it out. It was a worrying result, because that image was about to be pushed to a registry.',
        'The file turned up through a later stage that copied a whole directory from an earlier stage, so our ignore rules never got a chance to apply.',
      ],
      why: [
        'The .dockerignore file filters the build context, which is the set of files the client sends to the builder for instructions like COPY . . and ADD. It does not describe the filesystem of a stage. COPY --from=<stage> reads from that stage or image directly, so the ignore file plays no part.',
        'That means anything that did get into the earlier stage can travel on. A file might get there because a pattern did not match (a bare .env only matches at the context root, so nested ones need **/.env), because a RUN step generated it, or because it was already in a base image. Copying a whole directory then carries all of it along.',
      ],
      fix: [
        'In later stages we now copy specific paths, such as the build output directory and the package manifest, and never a whole app directory. We also tightened .dockerignore, using **/.env* so nested files are covered, but we treat that as the first line of defence rather than the only one.',
        'Finally, we inspect the result. Listing files in the final image takes seconds and tells us whether something slipped through. Also, secrets needed at build time should be passed with BuildKit secret mounts instead of being copied into any stage.',
      ],
      steps: [
        'List the exact paths the runtime needs and copy only those.',
        'Avoid COPY --from=build /app . in the final stage.',
        'Use **/.env* in .dockerignore so nested env files are excluded too.',
        'Run the finished image and list /app to confirm no secrets are present.',
      ],
      code: {
        label: 'Dockerfile (final stage)',
        lang: 'dockerfile',
        text: `FROM node:20-slim
WORKDIR /app
# Explicit paths only. Not: COPY --from=build /app .
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Verify afterwards:
# docker run --rm --entrypoint ls my-image -la /app`,
      },
      takeaway: 'Treat .dockerignore as a context filter only, and be explicit about every path you copy between stages.',
    },
    th: {
      title: '.dockerignore ไม่มีผลกับ COPY --from จาก stage อื่น',
      excerpt: 'เราพบไฟล์ .env หลุดเข้า image สุดท้ายซ้ำ ๆ เพราะ .dockerignore กรองแค่ build context ที่ส่งให้ Docker ไม่ได้กรองไฟล์ที่ copy ข้าม stage ให้ระบุชัดว่าจะ copy อะไรใน stage หลัง ๆ อย่า copy ทั้งโฟลเดอร์ และเปิดดู image สุดท้ายเพื่อเช็กว่าไม่มี secret ติดอยู่',
      problem: [
        'เราพบไฟล์ .env อยู่ใน image สุดท้ายซ้ำ ๆ ทั้งที่เชื่อว่า .dockerignore กันไว้แล้ว น่ากังวลมาก เพราะ image นั้นกำลังจะถูก push ขึ้น registry',
        'ไฟล์นี้หลุดมาจาก stage หลังที่ copy ทั้งโฟลเดอร์ออกมาจาก stage ก่อนหน้า กฎ ignore ของเราเลยไม่เคยถูกใช้ตรงจุดนั้น',
      ],
      why: [
        '.dockerignore กรองแค่ build context คือไฟล์ที่ client ส่งให้ builder สำหรับคำสั่งอย่าง COPY . . และ ADD มันไม่ได้อธิบาย filesystem ของแต่ละ stage COPY --from=<stage> อ่านจาก stage หรือ image นั้นโดยตรง ไฟล์ ignore เลยไม่เกี่ยวเลย',
        'แปลว่าอะไรก็ตามที่เข้าไปอยู่ใน stage ก่อนหน้าได้ ก็ถูกส่งต่อได้ ไฟล์อาจเข้าไปเพราะ pattern ไม่ตรง (.env เฉย ๆ ตรงเฉพาะที่ root ของ context ถ้าอยู่ในโฟลเดอร์ย่อยต้องใช้ **/.env) เพราะ step RUN สร้างมันขึ้นมา หรือเพราะมีอยู่ใน base image อยู่แล้ว พอ copy ทั้งโฟลเดอร์ก็พาไปหมดเลย',
      ],
      fix: [
        'ตอนนี้ใน stage หลัง ๆ เรา copy เป็น path เจาะจง เช่น โฟลเดอร์ build output กับ package manifest และไม่ copy ทั้งโฟลเดอร์แอปอีก เรายังปรับ .dockerignore ให้ใช้ **/.env* เพื่อครอบคลุมไฟล์ในโฟลเดอร์ย่อย แต่ถือว่าเป็นแค่แนวป้องกันด่านแรก ไม่ใช่ด่านเดียว',
        'สุดท้ายเราเปิดดู image ที่ได้ การ list ไฟล์ใน image สุดท้ายใช้เวลาไม่กี่วินาที และบอกได้เลยว่ามีอะไรหลุดมาไหม ส่วน secret ที่ต้องใช้ตอน build ให้ส่งผ่าน BuildKit secret mount แทนการ copy เข้า stage ใด ๆ',
      ],
      steps: [
        'เขียนรายการ path ที่ runtime ต้องใช้จริง แล้ว copy เฉพาะตัวนั้น',
        'อย่าใช้ COPY --from=build /app . ใน stage สุดท้าย',
        'ใช้ **/.env* ใน .dockerignore เพื่อกันไฟล์ env ในโฟลเดอร์ย่อยด้วย',
        'รัน image ที่ build เสร็จแล้ว list /app เพื่อเช็กว่าไม่มี secret',
      ],
      code: {
        label: 'Dockerfile (stage สุดท้าย)',
        lang: 'dockerfile',
        text: `FROM node:20-slim
WORKDIR /app
# Explicit paths only. Not: COPY --from=build /app .
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Verify afterwards:
# docker run --rm --entrypoint ls my-image -la /app`,
      },
      takeaway: 'ให้ถือว่า .dockerignore กรองได้แค่ context และต้องระบุทุก path ที่ copy ข้าม stage ให้ชัดเจน',
    },
  },

  // 12
  {
    slug: 'figma-gradient-text-contrast',
    topic: 'Figma',
    date: '2025-09-15',
    en: {
      title: 'Color contrast checkers lie about gradient text',
      excerpt: 'Most WCAG tools sample a single color, so a gradient heading can pass the check while the lighter end is hard to read for real people. Test the lightest and darkest points of the gradient against the background, or avoid gradients on small and important text altogether.',
      problem: [
        'We had a hero heading filled with a purple to light-lavender gradient on a dark background. The contrast plugin we ran gave it a pass, so we moved on.',
        'Later, in review on a real laptop screen in a bright room, the right-hand end of the heading was noticeably hard to read. The checker had said it was fine, but people could not read it comfortably.',
      ],
      why: [
        'WCAG contrast ratios are defined between two colors, a foreground and a background. Most tools therefore take one foreground color for the text. With a gradient fill there is no single color, so the tool samples one point or an average, and that result says little about the weakest part of the text.',
        'A gradient is only as readable as its worst stop. If the lightest end sits on a dark background with plenty of contrast, it will be fine, but a stop that drifts toward the background colour can fail badly while the sampled colour passes. Small text is stricter still, since normal text needs a higher ratio than large text.',
      ],
      fix: [
        'We now check each end of the gradient as its own solid color against the background, and test any midpoint where the hue changes a lot. If any point falls below the required ratio for that text size, we adjust that stop rather than trusting the single pass.',
        'For small or important text such as body copy, labels and buttons, we simply use a solid color. Gradients are kept for large display headings, where there is more room for error and the ratio requirement is lower.',
      ],
      steps: [
        'Pick the lightest and darkest stops of the gradient.',
        'Check each one as a solid color against the actual background.',
        'Check midpoints if the gradient shifts hue strongly.',
        'Use a solid color for small or critical text.',
      ],
      takeaway: 'A gradient passes contrast only if its weakest point does, so test the ends, not the average.',
    },
    th: {
      title: 'เครื่องมือเช็ก color contrast ให้ผลไม่ตรงกับข้อความที่ใช้ gradient',
      excerpt: 'เครื่องมือ WCAG ส่วนใหญ่เช็กแค่สีเดียว หัวข้อที่ใช้ gradient จึงผ่านการตรวจ แต่ปลายฝั่งสีอ่อนอ่านยากสำหรับคนจริง ๆ ให้ทดสอบทั้งจุดที่อ่อนที่สุดและเข้มที่สุดของ gradient กับสีพื้นหลัง หรือเลี่ยง gradient กับข้อความเล็กและข้อความสำคัญไปเลย',
      problem: [
        'เรามี heading ใน hero ที่เติมสีแบบ gradient จากม่วงไปลาเวนเดอร์อ่อน บนพื้นหลังสีเข้ม plugin เช็ก contrast ที่ใช้ให้ผ่าน เราเลยไปต่อ',
        'ต่อมาตอนรีวิวบนจอแล็ปท็อปจริงในห้องที่สว่าง ปลายฝั่งขวาของ heading อ่านยากชัดเจน เครื่องมือบอกว่าโอเค แต่คนอ่านแล้วไม่สบายตา',
      ],
      why: [
        'อัตราส่วน contrast ของ WCAG นิยามระหว่างสองสี คือสีตัวอักษรกับสีพื้นหลัง เครื่องมือส่วนใหญ่จึงรับสีตัวอักษรแค่สีเดียว พอเป็น gradient ก็ไม่มีสีเดียวให้ใช้ เครื่องมือเลยสุ่มจุดเดียวหรือเอาค่าเฉลี่ย ซึ่งบอกอะไรเกี่ยวกับส่วนที่อ่านยากที่สุดแทบไม่ได้',
        'gradient อ่านง่ายได้แค่ระดับจุดที่แย่ที่สุด ถ้าปลายสีอ่อนอยู่บนพื้นหลังเข้มที่ contrast พอ ก็ไม่มีปัญหา แต่ถ้ามี stop ที่เข้าใกล้สีพื้นหลัง ก็อาจตกอย่างหนักทั้งที่สีที่เครื่องมือสุ่มได้ผ่าน และข้อความเล็กยิ่งเข้มงวดกว่า เพราะข้อความปกติต้องการอัตราส่วนสูงกว่าข้อความขนาดใหญ่',
      ],
      fix: [
        'ตอนนี้เราเช็กแต่ละปลายของ gradient เป็นสีเดียวเทียบกับพื้นหลังทีละจุด และเช็กจุดกลางด้วยถ้า hue เปลี่ยนมาก ถ้าจุดไหนต่ำกว่าอัตราส่วนที่ต้องใช้สำหรับขนาดตัวอักษรนั้น เราปรับ stop นั้น ไม่เชื่อผลผ่านครั้งเดียว',
        'ส่วนข้อความเล็กหรือข้อความสำคัญ เช่น body, label และปุ่ม เราใช้สีเดียวไปเลย gradient เก็บไว้ใช้กับ display heading ขนาดใหญ่ ซึ่งมีพื้นที่ให้พลาดมากกว่าและเกณฑ์อัตราส่วนต่ำกว่า',
      ],
      steps: [
        'เลือก stop ที่อ่อนที่สุดและเข้มที่สุดของ gradient',
        'เช็กแต่ละจุดเป็นสีเดียวเทียบกับพื้นหลังจริง',
        'เช็กจุดกลางด้วย ถ้า gradient เปลี่ยน hue มาก',
        'ใช้สีเดียวกับข้อความเล็กหรือข้อความที่สำคัญ',
      ],
      takeaway: 'gradient จะผ่าน contrast ก็ต่อเมื่อจุดที่แย่ที่สุดผ่าน ดังนั้นให้เช็กที่ปลายทั้งสองข้าง ไม่ใช่ค่าเฉลี่ย',
    },
  },

  // 13
  {
    slug: 'figma-hug-contents-empty-text',
    topic: 'Figma',
    date: '2025-03-11',
    en: {
      title: "Auto layout 'hug contents' breaks silently on empty strings",
      excerpt: 'A frame set to hug its contents collapses to zero width when the bound text is empty, and the layers panel gives no warning. Give components a minimum width, or design an explicit empty state, so a missing value in real data does not make an element disappear.',
      problem: [
        'We had a tag-style component that showed a short label, and in the design file it looked great. When the real data arrived, some items had no label, and those tags simply vanished from the layout.',
        'Nothing flagged it. The component was still there in the layers panel, but the frame had shrunk to almost nothing, which made the problem hard to spot.',
      ],
      why: [
        'A frame set to hug contents sizes itself to its children. A text layer with no characters has no width, so the frame collapses to whatever its padding and any fixed-size siblings add up to. With no padding, that is zero width.',
        'Figma does not treat this as an error, because the layout is behaving exactly as defined. The trouble is that designs are usually made with sample text in every field, so the empty case never gets looked at until real data exposes it.',
      ],
      fix: [
        'Where a component can receive a missing value, we set a minimum width on the frame, or decide deliberately that it should disappear and say so in the spec. Hiding an empty element on purpose is fine. The problem is when it happens by accident.',
        'We also design an empty state next to the filled one, and test variants with blank text, long text and the largest realistic value. Developers can then match the component to a documented behavior instead of guessing.',
      ],
      steps: [
        'Clear the text in a component instance and watch how the frame reacts.',
        'Set a minimum width or a fixed fallback if the element must stay visible.',
        'Add an explicit empty-state variant or note that it should hide.',
        'Test blank, very long and typical values before handoff.',
      ],
      takeaway: 'If a component can receive an empty value, design what it looks like empty before real data does it for you.',
    },
    th: {
      title: "Auto layout แบบ 'Hug contents' พังเงียบ ๆ เมื่อข้อความว่าง",
      excerpt: 'frame ที่ตั้งเป็น hug จะหดเหลือความกว้าง 0 ทันทีที่ข้อความที่ผูกไว้ว่างเปล่า และ layers panel ไม่เตือนอะไรเลย ให้ตั้งความกว้างขั้นต่ำให้ component หรือออกแบบ empty state ไว้ชัด ๆ เวลาข้อมูลจริงขาดค่าไป element จะได้ไม่หายไปเฉย ๆ',
      problem: [
        'เรามี component แบบ tag ที่แสดง label สั้น ๆ ในไฟล์ดีไซน์ดูดีมาก พอข้อมูลจริงเข้ามา บางรายการไม่มี label และ tag พวกนั้นก็หายไปจาก layout เฉย ๆ',
        'ไม่มีอะไรเตือนเลย component ยังอยู่ใน layers panel แต่ frame หดเหลือแทบไม่มีขนาด ทำให้สังเกตปัญหาได้ยาก',
      ],
      why: [
        'frame ที่ตั้งเป็น hug contents จะปรับขนาดตาม children ของมัน text layer ที่ไม่มีตัวอักษรเลยจะไม่มีความกว้าง frame จึงหดเหลือเท่าที่ padding และ element ขนาดคงที่ตัวอื่นรวมกัน ถ้าไม่มี padding ก็คือความกว้าง 0',
        'Figma ไม่นับว่าเป็น error เพราะ layout ทำงานตรงตามที่นิยามไว้ ปัญหาคือเรามักออกแบบโดยใส่ข้อความตัวอย่างในทุกช่อง เคสที่ว่างเลยไม่เคยถูกมองจนกว่าข้อมูลจริงจะมาเปิดโปง',
      ],
      fix: [
        'ถ้า component ไหนอาจได้ค่าว่าง เราตั้งความกว้างขั้นต่ำให้ frame หรือตัดสินใจอย่างตั้งใจว่าให้หายไป แล้วเขียนไว้ใน spec การซ่อน element ว่างโดยตั้งใจไม่เป็นไร ปัญหาคือตอนที่มันเกิดขึ้นโดยไม่ได้ตั้งใจ',
        'เรายังออกแบบ empty state คู่กับแบบที่มีข้อมูล และทดสอบ variant ที่ข้อความว่าง ข้อความยาว และค่าที่ใหญ่ที่สุดเท่าที่เป็นไปได้ นักพัฒนาจะได้ทำตามพฤติกรรมที่เขียนไว้ ไม่ต้องเดา',
      ],
      steps: [
        'ลบข้อความใน instance ของ component แล้วดูว่า frame ตอบสนองอย่างไร',
        'ตั้งความกว้างขั้นต่ำหรือค่า fallback ถ้า element ต้องยังมองเห็นอยู่',
        'เพิ่ม variant แบบ empty state หรือระบุว่าให้ซ่อน',
        'ทดสอบค่าว่าง ค่ายาวมาก และค่าปกติก่อนส่งมอบ',
      ],
      takeaway: 'ถ้า component อาจได้ค่าว่าง ให้ออกแบบหน้าตาตอนว่างไว้ก่อนที่ข้อมูลจริงจะมาทำให้เห็นเอง',
    },
  },

  // 14
  {
    slug: 'search-debounce-request-cancellation',
    topic: 'CLI',
    date: '2025-08-29',
    en: {
      title: "Debouncing search input isn't enough — you need request cancellation too",
      excerpt: 'Even with debounce, a slow response can arrive after a newer one and overwrite it with stale results. Creating an AbortController per request and aborting the previous one fixed the old results flashing in for fast typists. Cancelling also saves the server from finishing work nobody will see.',
      problem: [
        'Our search box was already debounced, but fast typists still saw the results flicker. Sometimes the list showed results for an earlier query a moment after the right ones had appeared.',
        'The debounce was working as intended. The issue was somewhere else: two requests were in flight at once and they did not finish in the order we sent them.',
      ],
      why: [
        'Debounce only reduces how many requests you send. It says nothing about the order they come back in. If a user pauses after typing "re", then continues to "react", both requests can be in flight together, and the network or server may answer the older one last.',
        'Whichever response arrives last wins when the code sets state. If that is the stale one, it overwrites the newer results. This is a classic race condition, and it also means the server may keep working on a query that nobody is waiting for any more.',
      ],
      fix: [
        'We create an AbortController for each request and abort the previous one before starting the next. The aborted fetch rejects with an AbortError, which we ignore, so only the latest request can ever update the UI.',
        'Cancellation also helps the backend when it notices a closed connection, although how much it saves depends on the server stopping work when the client disconnects. Even when it does not, the UI is protected from stale data.',
      ],
      steps: [
        'Keep a ref to the current AbortController.',
        'Abort it before starting a new request.',
        'Pass its signal to fetch.',
        'Ignore errors where error.name is AbortError.',
        'Abort on unmount too, so late responses do not set state.',
      ],
      code: {
        label: 'TypeScript',
        lang: 'ts',
        text: `let controller: AbortController | undefined

async function search(query: string) {
  controller?.abort()
  controller = new AbortController()
  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, {
      signal: controller.signal,
    })
    return await res.json()
  } catch (err) {
    if ((err as Error).name === 'AbortError') return undefined
    throw err
  }
}`,
      },
      takeaway: 'Debounce limits how many requests you send, and cancellation makes sure only the latest one can win.',
    },
    th: {
      title: 'debounce ช่องค้นหาอย่างเดียวไม่พอ ต้องยกเลิก request ด้วย',
      excerpt: 'ต่อให้ debounce แล้ว response ที่ช้าอาจมาถึงหลัง response ใหม่กว่า แล้วเขียนทับด้วยผลเก่า การสร้าง AbortController ต่อ request และยกเลิกอันก่อนหน้า ช่วยแก้บั๊กผลค้นหาเก่ากะพริบขึ้นมาของคนที่พิมพ์เร็ว และยังช่วยให้ server ไม่ต้องทำงานที่ไม่มีใครเห็นผลจนจบ',
      problem: [
        'ช่องค้นหาของเรา debounce อยู่แล้ว แต่คนที่พิมพ์เร็วก็ยังเห็นผลลัพธ์กะพริบ บางครั้ง list แสดงผลของ query ก่อนหน้า หลังจากผลที่ถูกต้องขึ้นมาแล้วไม่นาน',
        'debounce ทำงานถูกต้องตามที่ตั้งใจ ปัญหาอยู่ที่อื่น คือมีสอง request วิ่งอยู่พร้อมกัน และเสร็จไม่ตรงลำดับที่ส่ง',
      ],
      why: [
        'debounce ลดแค่จำนวน request ที่ส่ง ไม่ได้บอกอะไรเรื่องลำดับที่มันกลับมา ถ้าผู้ใช้หยุดพิมพ์หลัง "re" แล้วพิมพ์ต่อเป็น "react" ทั้งสอง request จะอยู่ในอากาศพร้อมกัน และ network หรือ server อาจตอบอันเก่าเป็นอันสุดท้ายก็ได้',
        'response ไหนมาถึงทีหลังสุดจะชนะตอน set state ถ้าเป็นอันเก่า มันก็เขียนทับผลที่ใหม่กว่า นี่คือ race condition แบบคลาสสิก และ server ก็อาจยังทำงานกับ query ที่ไม่มีใครรอแล้ว',
      ],
      fix: [
        'เราสร้าง AbortController ต่อหนึ่ง request และยกเลิกอันก่อนหน้าก่อนเริ่มอันใหม่ fetch ที่ถูกยกเลิกจะ reject ด้วย AbortError ซึ่งเราเมินไป ทำให้มีแค่ request ล่าสุดที่อัปเดต UI ได้',
        'การยกเลิกยังช่วย backend ได้ถ้ามันสังเกตเห็นว่า connection ปิดแล้ว แต่จะประหยัดได้แค่ไหนขึ้นกับว่า server หยุดทำงานเมื่อ client ตัดการเชื่อมต่อหรือไม่ ต่อให้ไม่หยุด UI ก็ยังปลอดภัยจากข้อมูลเก่า',
      ],
      steps: [
        'เก็บ ref ของ AbortController ตัวปัจจุบันไว้',
        'abort มันก่อนเริ่ม request ใหม่',
        'ส่ง signal ของมันให้ fetch',
        'เมิน error ที่ error.name เป็น AbortError',
        'abort ตอน unmount ด้วย response ที่มาช้าจะได้ไม่ set state',
      ],
      code: {
        label: 'TypeScript',
        lang: 'ts',
        text: `let controller: AbortController | undefined

async function search(query: string) {
  controller?.abort()
  controller = new AbortController()
  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, {
      signal: controller.signal,
    })
    return await res.json()
  } catch (err) {
    if ((err as Error).name === 'AbortError') return undefined
    throw err
  }
}`,
      },
      takeaway: 'debounce จำกัดจำนวน request ที่ส่ง ส่วนการยกเลิกทำให้มีแค่อันล่าสุดที่ชนะได้',
    },
  },

  // 15
  {
    slug: 'cli-fzf-ripgrep-monorepo',
    topic: 'CLI',
    date: '2025-02-02',
    en: {
      title: 'fzf + ripgrep beats grep -r for anything in a monorepo',
      excerpt: 'rg --files | fzf gives fuzzy file jumping, and wrapping rg in fzf with a preview window gives live content search. In a big monorepo this brought our search time down to almost nothing, mostly because ripgrep respects .gitignore and skips build folders by default.',
      problem: [
        'In our monorepo, grep -r was painfully slow. It walked through node_modules, build output and caches, then returned a wall of matches from files we never wanted to search.',
        'Finding a file by name was just as clumsy. We would type long paths from memory or click through the editor tree instead of jumping straight to what we wanted.',
      ],
      why: [
        'Plain grep -r searches everything under the directory unless you list exclusions by hand. In a monorepo with many packages, that includes huge dependency and build folders, and most of the time spent is on files that are irrelevant.',
        'ripgrep behaves differently by default. It respects .gitignore, skips hidden files and binary files, and searches in parallel. Because it skips ignored build folders automatically, it does far less work. That is the main reason it feels almost instant here, though its fast regex engine helps too.',
      ],
      fix: [
        'We pair ripgrep with fzf. Piping rg --files into fzf gives fuzzy file jumping that lists only tracked-style files, and we can add a preview window to see the top of each file before opening it.',
        'For content search, fzf can re-run rg on every keystroke, so results update live as you type. We keep these as shell aliases, so a lookup is a few keystrokes rather than a long grep with exclusions.',
      ],
      steps: [
        'Install ripgrep and fzf with your package manager.',
        'Use rg --files | fzf for fuzzy file jumping.',
        'Add a preview command to see file contents as you move.',
        'Use fzf with reload to run rg live on each keystroke.',
        'Wrap your favorites in shell aliases.',
      ],
      code: {
        label: 'shell',
        lang: 'bash',
        text: `# Fuzzy file jump with a preview
rg --files | fzf --preview 'head -n 50 {}'

# Live content search
fzf --disabled --bind 'change:reload:rg --line-number --no-heading {q} || true'`,
      },
      takeaway: 'Use ripgrep for speed and sane defaults, and put fzf in front of it for interactive search.',
    },
    th: {
      title: 'fzf + ripgrep เร็วกว่า grep -r เมื่อทำงานใน monorepo',
      excerpt: 'rg --files | fzf ใช้กระโดดไปไฟล์แบบ fuzzy และเอา rg ไปครอบด้วย fzf ที่มี preview จะได้การค้นเนื้อหาแบบเห็นผลทันที ใน monorepo ใหญ่ ๆ การค้นหาของเราเร็วจนแทบไม่ต้องรอ เหตุผลหลักคือ ripgrep เคารพ .gitignore และข้ามโฟลเดอร์ build ให้เองตั้งแต่ต้น',
      problem: [
        'ใน monorepo ของเรา grep -r ช้ามาก มันไล่เข้าไปใน node_modules, build output และ cache แล้วคืนผลลัพธ์กองโตจากไฟล์ที่เราไม่เคยอยากค้น',
        'การหาไฟล์ตามชื่อก็ไม่สะดวกเหมือนกัน เรามักพิมพ์ path ยาว ๆ จากความจำ หรือไล่คลิกใน tree ของ editor แทนที่จะกระโดดไปหาไฟล์ที่ต้องการทันที',
      ],
      why: [
        'grep -r ธรรมดาจะค้นทุกอย่างใต้โฟลเดอร์ ยกเว้นเราจะระบุสิ่งที่ต้องข้ามเองทีละอย่าง ใน monorepo ที่มีหลาย package นั่นรวมโฟลเดอร์ dependency และ build ขนาดมหึมา และเวลาส่วนใหญ่หมดไปกับไฟล์ที่ไม่เกี่ยวข้อง',
        'ripgrep ทำงานต่างออกไปโดยค่าเริ่มต้น มันเคารพ .gitignore ข้ามไฟล์ hidden กับไฟล์ binary และค้นแบบขนาน เพราะข้ามโฟลเดอร์ build ที่ถูก ignore ให้เอง มันจึงทำงานน้อยลงมาก นี่คือเหตุผลหลักที่รู้สึกว่าเร็วแทบทันที แม้ regex engine ที่เร็วก็ช่วยอีกแรง',
      ],
      fix: [
        'เราจับคู่ ripgrep กับ fzf ส่ง rg --files เข้า fzf จะได้การกระโดดไปไฟล์แบบ fuzzy ที่แสดงเฉพาะไฟล์ที่ไม่ถูก ignore และเพิ่ม preview เพื่อดูต้นไฟล์ก่อนเปิดได้',
        'ส่วนการค้นเนื้อหา fzf สั่งรัน rg ใหม่ทุกครั้งที่พิมพ์ได้ ผลลัพธ์เลยอัปเดตสดตามที่พิมพ์ เราเก็บทั้งหมดเป็น shell alias การค้นจึงใช้แค่ไม่กี่ปุ่ม ไม่ต้องพิมพ์ grep ยาว ๆ พร้อมรายการที่ต้องข้าม',
      ],
      steps: [
        'ติดตั้ง ripgrep และ fzf ด้วย package manager',
        'ใช้ rg --files | fzf กระโดดไปไฟล์แบบ fuzzy',
        'เพิ่มคำสั่ง preview เพื่อดูเนื้อไฟล์ระหว่างเลื่อน',
        'ใช้ fzf กับ reload เพื่อรัน rg สดทุกครั้งที่พิมพ์',
        'ครอบคำสั่งที่ใช้บ่อยด้วย shell alias',
      ],
      code: {
        label: 'shell',
        lang: 'bash',
        text: `# Fuzzy file jump with a preview
rg --files | fzf --preview 'head -n 50 {}'

# Live content search
fzf --disabled --bind 'change:reload:rg --line-number --no-heading {q} || true'`,
      },
      takeaway: 'ใช้ ripgrep เพื่อความเร็วและค่าเริ่มต้นที่สมเหตุสมผล แล้วเอา fzf มาครอบเพื่อค้นแบบโต้ตอบ',
    },
  },

  // 16
  {
    slug: 'macos-quicklook-stale-thumbnail',
    topic: 'macOS',
    date: '2025-08-25',
    en: {
      title: 'Quick Look caches a stale thumbnail after a file gets overwritten',
      excerpt: "Run qlmanage -r to reset the cache. Without it, a re-exported PNG can keep showing yesterday's preview in Finder for hours, which is confusing when you are checking design exports or handing off assets.",
      problem: [
        'We re-exported a PNG from Figma over an existing file with the same name. The file on disk was correct, since opening it in an editor showed the new design, but Finder kept showing yesterday\'s preview.',
        'That is confusing during handoff. You think an export failed, or that you are about to send the wrong asset, when the file is actually fine.',
      ],
      why: [
        'macOS caches thumbnails and Quick Look previews so Finder does not have to regenerate them every time. Overwriting a file normally invalidates its entry, but this does not always happen, especially for files replaced by an export tool or on some network and synced folders.',
        'When it fails, the cached image keeps being served until the cache is rebuilt, which can take hours. Opening the file itself bypasses the cache, which is why the real contents look right.',
      ],
      fix: [
        'We run qlmanage -r to reset the Quick Look server, and qlmanage -r cache to clear its thumbnail cache. If Finder still shows the old image, relaunching it with killall Finder usually forces a redraw.',
        'When we are checking assets that matter, we also trust the file over the preview. Opening the actual image, or checking the modification time, tells us what is really on disk.',
      ],
      steps: [
        'Open the file directly to confirm the contents are actually new.',
        'Run qlmanage -r and qlmanage -r cache in Terminal.',
        'Run killall Finder if the old thumbnail still shows.',
        'Check the modified time if you are still unsure.',
      ],
      code: {
        label: 'Terminal',
        lang: 'bash',
        text: `qlmanage -r
qlmanage -r cache
killall Finder`,
      },
      takeaway: 'When a preview looks outdated, open the file itself and reset the Quick Look cache before assuming the export failed.',
    },
    th: {
      title: 'Quick Look ยังโชว์ thumbnail เก่าหลังไฟล์ถูกเขียนทับ',
      excerpt: 'ใช้ qlmanage -r เพื่อล้าง cache ถ้าไม่ล้าง PNG ที่ export ใหม่อาจยังโชว์ preview ของเมื่อวานใน Finder อยู่หลายชั่วโมง ซึ่งทำให้งงตอนตรวจไฟล์ดีไซน์หรือส่งมอบ asset',
      problem: [
        'เรา export PNG จาก Figma ทับไฟล์เดิมที่ชื่อเดียวกัน ไฟล์บน disk ถูกต้อง เพราะเปิดใน editor ก็เห็นดีไซน์ใหม่ แต่ Finder ยังโชว์ preview ของเมื่อวานอยู่',
        'ตอนส่งมอบงานนี่ทำให้งงมาก เราอาจคิดว่า export พลาด หรือกำลังจะส่ง asset ผิด ทั้งที่จริงไฟล์ไม่มีปัญหาเลย',
      ],
      why: [
        'macOS เก็บ cache ของ thumbnail และ Quick Look preview ไว้ เพื่อให้ Finder ไม่ต้องสร้างใหม่ทุกครั้ง ปกติการเขียนทับไฟล์จะทำให้ cache ของไฟล์นั้นใช้ไม่ได้ แต่บางครั้งก็ไม่เป็นอย่างนั้น โดยเฉพาะไฟล์ที่ถูกแทนที่โดยเครื่องมือ export หรืออยู่ในโฟลเดอร์ network หรือโฟลเดอร์ที่ sync',
        'พอเป็นอย่างนั้น ภาพใน cache จะถูกใช้ต่อไปจนกว่า cache จะถูกสร้างใหม่ ซึ่งอาจใช้เวลาหลายชั่วโมง การเปิดไฟล์จริงไม่ผ่าน cache เนื้อหาจริงจึงดูถูกต้อง',
      ],
      fix: [
        'เรารัน qlmanage -r เพื่อรีเซ็ต Quick Look server และ qlmanage -r cache เพื่อล้าง thumbnail cache ถ้า Finder ยังโชว์ภาพเก่า การเปิด Finder ใหม่ด้วย killall Finder มักบังคับให้วาดใหม่ได้',
        'เวลาตรวจ asset ที่สำคัญ เราเชื่อไฟล์จริงมากกว่า preview ด้วย การเปิดภาพจริงหรือดูเวลาแก้ไขล่าสุดจะบอกได้ว่าอะไรอยู่บน disk กันแน่',
      ],
      steps: [
        'เปิดไฟล์ตรง ๆ เพื่อยืนยันว่าเนื้อหาเป็นของใหม่จริง',
        'รัน qlmanage -r และ qlmanage -r cache ใน Terminal',
        'รัน killall Finder ถ้ายังเห็น thumbnail เก่า',
        'ดู modified time ถ้ายังไม่แน่ใจ',
      ],
      code: {
        label: 'Terminal',
        lang: 'bash',
        text: `qlmanage -r
qlmanage -r cache
killall Finder`,
      },
      takeaway: 'เมื่อ preview ดูเก่า ให้เปิดไฟล์จริงและรีเซ็ต Quick Look cache ก่อนสรุปว่า export พลาด',
    },
  },

  // 17
  {
    slug: 'thai-line-height',
    topic: 'Design',
    date: '2025-06-20',
    en: {
      title: 'Thai line-height needs ~1.7, not the 1.5 that works for Latin text',
      excerpt: 'Thai script stacks vowels and tone marks above and below the baseline, so a Latin-friendly line-height of 1.5 clips them or makes them touch the next line. Bumping body text to about 1.7 fixed clipped vowels across the whole site. Test with words that carry stacked marks, and check headings separately since they usually need less.',
      problem: [
        'Our English pages looked good with a line-height of 1.5, so we reused it on the Thai versions. In Thai, the marks above and below the letters started to look cramped, and in some places they were visibly cut off.',
        'The problem showed up most on lines with stacked marks, where a vowel and a tone mark sit together above one consonant. They would touch the line above, or get clipped inside containers.',
      ],
      why: [
        'Latin text mostly lives between the baseline and the cap height, with a few descenders. Thai has vowels and tone marks that stack above the consonants and others that sit below them, so a line needs more vertical room in both directions.',
        'Line-height on its own does not clip anything. Clipping happens when the box is too tight and something else cuts the overflow, such as overflow hidden, a fixed height, or a gradient text effect using background-clip. A tighter line-height just makes those cases much more likely.',
      ],
      fix: [
        'We raised the line-height of Thai body text to about 1.7, and the clipped vowels disappeared across the whole site. We use a unitless value so it scales with each element\'s font size.',
        'Headings are checked separately. Large text has proportionally less extra space to add, so it usually looks right with a smaller value. We also test with words that contain stacked marks, not just plain consonants, because that is where problems show first.',
      ],
      steps: [
        'Set Thai body text to a unitless line-height of about 1.7.',
        'Test with words that have stacked vowels and tone marks.',
        'Check headings on their own and tune them separately.',
        'Look for overflow hidden or fixed heights on containers that hold Thai text.',
      ],
      code: {
        label: 'CSS',
        lang: 'css',
        text: `:lang(th) body {
  line-height: 1.7;
}

/* Headings usually need less, so tune them separately */
:lang(th) h1,
:lang(th) h2 {
  line-height: 1.4;
}`,
      },
      takeaway: 'Do not reuse a Latin line-height for Thai, and always test with stacked vowels and tone marks.',
    },
    th: {
      title: 'line-height ภาษาไทยควรอยู่ที่ราว 1.7 ไม่ใช่ 1.5 แบบภาษาอังกฤษ',
      excerpt: 'ตัวอักษรไทยมีสระและวรรณยุกต์ซ้อนทั้งบนและล่างบรรทัด line-height 1.5 ที่ใช้ได้กับภาษาอังกฤษจึงทำให้สระโดนตัดหรือไปชนบรรทัดถัดไป พอปรับ body text เป็นราว 1.7 ปัญหาสระโดนตัดก็หายไปทั้งเว็บไซต์ ให้ทดสอบกับคำที่มีสระและวรรณยุกต์ซ้อนกัน และเช็กหัวข้อแยกต่างหาก เพราะหัวข้อมักใช้ค่าน้อยกว่าได้',
      problem: [
        'หน้าภาษาอังกฤษของเราดูดีด้วย line-height 1.5 เราเลยใช้ค่าเดียวกันกับหน้าภาษาไทย แต่พอเป็นภาษาไทย สระและวรรณยุกต์ที่อยู่บนและล่างตัวอักษรเริ่มดูอึดอัด และบางจุดก็โดนตัดให้เห็นชัด',
        'ปัญหาเห็นชัดที่สุดในบรรทัดที่มีสระกับวรรณยุกต์ซ้อนกัน คือสระและวรรณยุกต์อยู่เหนือพยัญชนะตัวเดียวกัน มักไปชนบรรทัดบน หรือถูกตัดเมื่ออยู่ใน container',
      ],
      why: [
        'ตัวอักษรละตินส่วนใหญ่อยู่ระหว่าง baseline ถึง cap height มีหางยื่นลงมาไม่กี่ตัว ส่วนภาษาไทยมีสระและวรรณยุกต์ที่ซ้อนอยู่เหนือพยัญชนะ และบางตัวอยู่ใต้พยัญชนะ แต่ละบรรทัดจึงต้องการพื้นที่แนวตั้งทั้งสองด้านมากกว่า',
        'ตัว line-height เองไม่ได้ตัดอะไร การตัดเกิดเมื่อกล่องแคบเกินไปและมีอย่างอื่นตัดส่วนที่ล้น เช่น overflow hidden, ความสูงคงที่ หรือเอฟเฟกต์ข้อความ gradient ที่ใช้ background-clip line-height ที่แคบแค่ทำให้กรณีเหล่านี้เกิดง่ายขึ้นมาก',
      ],
      fix: [
        'เราปรับ line-height ของ body text ภาษาไทยเป็นราว 1.7 และปัญหาสระโดนตัดก็หายไปทั้งเว็บไซต์ เราใช้ค่าแบบไม่มีหน่วยเพื่อให้ปรับตามขนาดฟอนต์ของแต่ละ element',
        'หัวข้อเช็กแยกต่างหาก ตัวอักษรขนาดใหญ่มีพื้นที่เพิ่มที่ต้องเติมน้อยกว่าตามสัดส่วน จึงมักดูพอดีด้วยค่าที่น้อยกว่า เรายังทดสอบกับคำที่มีสระและวรรณยุกต์ซ้อนกัน ไม่ใช่แค่พยัญชนะเฉย ๆ เพราะปัญหามักโผล่ตรงนั้นก่อน',
      ],
      steps: [
        'ตั้ง line-height ของ body ภาษาไทยเป็นค่าไม่มีหน่วยราว 1.7',
        'ทดสอบกับคำที่มีสระและวรรณยุกต์ซ้อนกัน',
        'เช็กหัวข้อแยกต่างหากและปรับค่าให้เหมาะ',
        'ดู overflow hidden หรือความสูงคงที่ใน container ที่ใส่ข้อความไทย',
      ],
      code: {
        label: 'CSS',
        lang: 'css',
        text: `:lang(th) body {
  line-height: 1.7;
}

/* Headings usually need less, so tune them separately */
:lang(th) h1,
:lang(th) h2 {
  line-height: 1.4;
}`,
      },
      takeaway: 'อย่าเอา line-height ของภาษาละตินมาใช้กับภาษาไทยตรง ๆ และทดสอบกับสระและวรรณยุกต์ที่ซ้อนกันเสมอ',
    },
  },

  // 18
  {
    slug: 'security-key-rotation-vs-sessions',
    topic: 'Security',
    date: '2025-08-19',
    en: {
      title: 'Rotating a leaked API key is not the same as revoking its sessions',
      excerpt: 'Signed sessions that were issued with the old key stayed valid for 24 hours after we rotated it, so an attacker could still use them. Our incident checklist now always revokes active sessions and tokens as well as replacing the key, and then checks the logs for use of the old one.',
      problem: [
        'After a key leaked, we rotated it and assumed the exposure was over. A while later we realised that sessions issued while the old key was in use were still being accepted, for up to 24 hours after the rotation.',
        'That meant that anyone who had already obtained a valid session could keep using it even though the leaked key itself was dead.',
      ],
      why: [
        'A key and a session are separate things with separate lifetimes. A signed, stateless session carries its own expiry and is accepted until it expires, unless the server also checks a revocation list or a session version. Replacing a key does not automatically invalidate everything that key helped create.',
        'The exact behaviour depends on the setup. If sessions are signed with the leaked secret and the old signing key is removed straight away, they usually stop verifying. If the verifier keeps accepting the old key during a grace period, which is common during rotations, they keep working until that period or their own expiry ends.',
      ],
      fix: [
        'Our incident checklist now treats rotation as only the first step. We replace the key, then revoke active sessions and tokens that could have been issued under the old one, using a session version bump, a deny list or deleting them from the store.',
        'We then search the logs for any use of the old key or of sessions from the exposure window. That tells us whether someone actually used them, and it feeds the decision on what else to notify or reset.',
      ],
      steps: [
        'Replace the leaked key and remove the old one from verification.',
        'Revoke active sessions and tokens that may have been issued under the old key.',
        'Shorten or skip any grace period for old keys during an incident.',
        'Search the logs for use of the old key and of suspicious sessions.',
        'Record what was found in the incident notes.',
      ],
      takeaway: 'After a leak, replace the key and also revoke what it signed, then check the logs for use of the old one.',
    },
    th: {
      title: 'การเปลี่ยน API key ที่รั่วไม่เท่ากับการยกเลิก session',
      excerpt: 'session ที่เซ็นด้วย key เก่ายังใช้ได้อีก 24 ชั่วโมงหลังเราเปลี่ยน key ผู้ไม่หวังดีจึงยังใช้ได้อยู่ เช็กลิสต์รับมือเหตุการณ์ของเรามีขั้นตอนยกเลิก session และ token ที่ยังเปิดอยู่เสมอ นอกจากเปลี่ยน key แล้ว ยังไล่ดู log ด้วยว่ามีใครใช้ key เก่าอยู่หรือไม่',
      problem: [
        'หลังจาก key รั่ว เราเปลี่ยน key แล้วคิดว่าความเสี่ยงจบแล้ว ผ่านไปสักพักก็รู้ว่า session ที่ออกในช่วงที่ key เก่ายังใช้อยู่ ยังถูกยอมรับต่ออีกนานถึง 24 ชั่วโมงหลังการเปลี่ยน',
        'แปลว่าใครที่ได้ session ที่ใช้ได้ไปแล้ว ก็ยังใช้ต่อได้ แม้ key ที่รั่วจะใช้ไม่ได้แล้ว',
      ],
      why: [
        'key กับ session เป็นคนละอย่างและมีอายุคนละแบบ session แบบ stateless ที่เซ็นไว้มีวันหมดอายุในตัว และจะถูกยอมรับจนกว่าจะหมดอายุ เว้นแต่ server จะเช็ก revocation list หรือ session version ด้วย การเปลี่ยน key ไม่ได้ทำให้ทุกอย่างที่ key นั้นเคยช่วยสร้างใช้ไม่ได้โดยอัตโนมัติ',
        'พฤติกรรมจริงขึ้นกับการตั้งค่า ถ้า session เซ็นด้วย secret ที่รั่ว และเราลบ signing key เก่าออกทันที ปกติมันจะ verify ไม่ผ่านอีก แต่ถ้าตัว verify ยังรับ key เก่าในช่วง grace period ซึ่งพบบ่อยตอนหมุน key มันก็ยังใช้ได้จนหมดช่วงนั้นหรือหมดอายุของมันเอง',
      ],
      fix: [
        'เช็กลิสต์รับมือเหตุการณ์ของเราถือว่าการเปลี่ยน key เป็นแค่ขั้นแรก เราเปลี่ยน key แล้วยกเลิก session และ token ที่อาจถูกออกด้วย key เก่า ด้วยการเพิ่ม session version, deny list หรือลบออกจาก store',
        'จากนั้นไล่ดู log ว่ามีการใช้ key เก่า หรือ session ในช่วงที่เสี่ยงหรือไม่ เพื่อรู้ว่ามีใครใช้จริงไหม และเอาไปประกอบการตัดสินใจว่าต้องแจ้งหรือรีเซ็ตอะไรเพิ่ม',
      ],
      steps: [
        'เปลี่ยน key ที่รั่ว และเอา key เก่าออกจากการ verify',
        'ยกเลิก session และ token ที่อาจออกด้วย key เก่า',
        'ลดหรือข้าม grace period ของ key เก่าระหว่างเกิดเหตุ',
        'ไล่ดู log ว่ามีการใช้ key เก่าหรือ session ที่น่าสงสัยไหม',
        'บันทึกสิ่งที่พบไว้ใน incident notes',
      ],
      takeaway: 'หลัง key รั่ว ให้เปลี่ยน key และยกเลิกสิ่งที่ key นั้นเคยเซ็นไว้ด้วย แล้วเช็ก log ว่ามีใครใช้ key เก่าไหม',
    },
  },
]
