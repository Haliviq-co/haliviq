// Generates line-art blog covers for the 20 articles added in Nov 2026.
// Usage: node scripts/gen-blog-covers.js <outDir>  -> <outDir>/<slug>/{cover,figure}.html
// Then screenshot each with headless Chrome (1600x900 cover, 1600x760 figure) and save as JPG
// to public/images/blog/<slug>/.
// Generates cover (1600x900) and figure (1600x760) HTML pages with inline SVG
// in the existing Haliviq blog style: dark navy, purple/teal glow, line art.
const fs = require('fs')
const path = require('path')
const out = process.argv[2]
const P = '#7B6EF6', PL = '#A99CF8', T = '#53C3D7', W = '#FFFFFF', D = '#3B3488'
const st = (c, w = 6, o = 1) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" opacity="${o}"`

const motifs = {
  'line-mini-app-guide': () => `
    <rect x="-150" y="-260" width="300" height="520" rx="44" ${st(P)}/>
    <rect x="-40" y="-238" width="80" height="10" rx="5" fill="${P}" opacity=".6"/>
    ${[0,1].map(r=>[0,1].map(c=>`<rect x="${-110+c*120}" y="${-180+r*120}" width="100" height="100" rx="22" ${st(c===r?T:PL,5)}/>`).join('')).join('')}
    <rect x="-110" y="70" width="220" height="40" rx="20" ${st(T,5)}/>
    <rect x="-110" y="130" width="160" height="40" rx="20" ${st(P,5,.6)}/>
    <path d="M190 -140 h170 a30 30 0 0 1 30 30 v70 a30 30 0 0 1 -30 30 h-120 l-40 34 v-34 h-10 a30 30 0 0 1 -30 -30 v-70 a30 30 0 0 1 30 -30z" ${st(T,5)}/>
    <circle cx="240" cy="-75" r="7" fill="${W}"/><circle cx="275" cy="-75" r="7" fill="${W}"/><circle cx="310" cy="-75" r="7" fill="${W}"/>`,
  'vibe-coded-app-to-production': () => `
    <path d="M-520 0 C-470 -120 -420 120 -370 0 S-270 -140 -220 0 S-140 100 -90 0" ${st(PL,6)}/>
    <rect x="-70" y="-120" width="34" height="240" rx="12" fill="${D}" stroke="${P}" stroke-width="4"/>
    <path d="M-36 0 H520" ${st(T,6)}/>
    <circle cx="-520" cy="0" r="10" fill="${W}"/><circle cx="520" cy="0" r="10" fill="${T}"/>
    ${[0,1,2].map(i=>`<path d="M${80+i*140} -26 l18 18 l34 -40" ${st(W,5,.9)}/>`).join('')}`,
  'inp-core-web-vitals': () => `
    ${[60,110,160,210].map((r,i)=>`<circle cx="-220" cy="0" r="${r}" ${st(i%2?T:P,5,1-i*.18)}/>`).join('')}
    <circle cx="-220" cy="0" r="18" fill="${T}"/>
    <path d="M40 -120 H520" ${st(W,3,.25)}/><path d="M40 120 H520" ${st(W,3,.25)}/>
    <rect x="60" y="-70" width="120" height="40" rx="10" fill="${P}" opacity=".9"/>
    <rect x="190" y="-70" width="60" height="40" rx="10" fill="${T}" opacity=".9"/>
    <rect x="260" y="-70" width="40" height="40" rx="10" fill="${PL}" opacity=".9"/>
    <path d="M60 30 H300" ${st(T,6)}/><path d="M300 10 v40" ${st(W,5)}/>
    <path d="M60 80 H480" ${st(P,6,.4)}/><path d="M480 60 v40" ${st(W,5,.5)}/>`,
  'npm-supply-chain-security': () => {
    const n=[[-460,-120],[-330,60],[-200,-80],[-60,100],[80,-60],[220,90],[360,-100],[480,40]]
    return n.slice(1).map((p,i)=>`<path d="M${n[i][0]} ${n[i][1]} L${p[0]} ${p[1]}" ${st(i===3?T:P,5,.8)}/>`).join('')+
      `<path d="M-200 -80 L80 -60" ${st(P,3,.4)}/><path d="M-60 100 L220 90" ${st(P,3,.4)}/>`+
      n.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="${i===3?18:12}" fill="${i===3?T:'#14122b'}" stroke="${i===3?T:PL}" stroke-width="4"/>`).join('')+
      `<path d="M-60 -200 l90 30 v60 c0 60 -40 95 -90 115 c-50 -20 -90 -55 -90 -115 v-60z" transform="translate(0,-40) scale(.8)" ${st(W,5)}/>`
  },
  'pwa-vs-native-2026': () => `
    <rect x="-470" y="-220" width="560" height="380" rx="24" ${st(P)}/>
    <path d="M-470 -160 H90" ${st(P,4)}/>
    <circle cx="-430" cy="-190" r="7" fill="${P}"/><circle cx="-405" cy="-190" r="7" fill="${P}" opacity=".6"/>
    ${[0,1,2,3].map(i=>`<path d="M-420 ${-100+i*50} H${-120-i*40}" ${st(T,4,.5)}/>`).join('')}
    <rect x="160" y="-250" width="250" height="460" rx="40" fill="#120f2a" stroke="${T}" stroke-width="6"/>
    ${[0,1,2].map(r=>[0,1].map(c=>`<rect x="${195+c*95}" y="${-190+r*100}" width="80" height="80" rx="20" ${st(r===1&&c===0?W:PL,4)}/>`).join('')).join('')}
    <path d="M100 -30 H150" ${st(W,4,.7)}/><path d="M138 -42 l12 12 l-12 12" ${st(W,4,.7)}/>`,
  'mcp-explained': () => {
    const pts=[[-420,-170],[-460,40],[-360,200],[380,-190],[460,10],[360,190]]
    return pts.map((p,i)=>`<path d="M0 0 C ${p[0]/2} 0, ${p[0]/2} ${p[1]}, ${p[0]} ${p[1]}" ${st(i%2?T:P,5,.85)}/>`+`<rect x="${p[0]-34}" y="${p[1]-34}" width="68" height="68" rx="18" fill="#14122b" stroke="${i%2?T:PL}" stroke-width="4"/>`).join('')+
      `<rect x="-90" y="-46" width="180" height="92" rx="46" fill="#1a1640" stroke="${W}" stroke-width="6"/>`+
      `<rect x="-46" y="-12" width="92" height="24" rx="12" fill="${T}"/>`
  },
  'llm-cost-control': () => `
    ${[320,270,210,170,130,105,90].map((h,i)=>`<rect x="${-480+i*80}" y="${200-h}" width="50" height="${h}" rx="10" fill="${i<3?P:T}" opacity="${.45+i*.07}"/>`).join('')}
    <path d="M-500 210 H60" ${st(W,3,.3)}/>
    <path d="M150 120 A200 200 0 0 1 510 120" ${st(PL,8)}/>
    <path d="M190 120 A160 160 0 0 1 470 120" ${st(T,5,.6)}/>
    <path d="M330 120 L250 10" ${st(W,6)}/><circle cx="330" cy="120" r="16" fill="${T}"/>`,
  'ai-agents-first-workflow': () => `
    ${[-420,-170,80,330].map((x,i)=>`<rect x="${x}" y="-60" width="170" height="120" rx="24" ${st(i===2?T:P,5)}/>`).join('')}
    ${[-250,0,250].map(x=>`<path d="M${x} 0 H${x+80}" ${st(W,4,.7)}/><path d="M${x+66} -12 l14 12 l-14 12" ${st(W,4,.7)}/>`).join('')}
    <path d="M165 -120 l12 -34 l12 34 l34 12 l-34 12 l-12 34 l-12 -34 l-34 -12z" fill="${T}"/>
    <circle cx="415" cy="150" r="34" ${st(PL,4)}/><path d="M415 116 v-56" ${st(PL,4,.6)}/>
    <path d="M-335 -20 H-275 M-335 10 H-295" ${st(PL,4,.6)}/>`,
  'ai-evals-before-launch': () => `
    ${[0,1,2,3,4].map(i=>`<rect x="-480" y="${-210+i*86}" width="50" height="50" rx="12" ${st(i===3?PL:T,4)}/>`+(i===3?`<path d="M-468 ${-198+i*86} l26 26 M-442 ${-198+i*86} l-26 26" ${st(PL,4)}/>`:`<path d="M-468 ${-186+i*86} l10 10 l20 -22" ${st(W,4)}/>`)+`<path d="M-400 ${-185+i*86} H${-120-((i*53)%110)}" ${st(P,5,.6)}/>`).join('')}
    <path d="M100 160 A220 220 0 0 1 540 160" ${st(P,8,.5)}/>
    <path d="M100 160 A220 220 0 0 1 470 40" ${st(T,8)}/>
    <path d="M320 160 L440 70" ${st(W,6)}/><circle cx="320" cy="160" r="16" fill="${T}"/>`,
  'ai-voice-agents-thai': () => Array.from({length:41},(_,i)=>{const x=-500+i*25;const h=Math.round(30+170*Math.abs(Math.sin(i*.45))*Math.exp(-Math.pow((i-20)/14,2)));return `<path d="M${x} ${-h} V${h}" ${st(i%3?P:T,8,.9)}/>`}).join('')+
    `<circle cx="0" cy="0" r="250" ${st(PL,3,.25)}/>`,
  'ux-for-ai-features': () => `
    <rect x="-470" y="-220" width="420" height="120" rx="30" ${st(P)}/>
    <path d="M-430 -175 H-150 M-430 -140 H-220" ${st(PL,5,.7)}/>
    <rect x="-120" y="-60" width="560" height="190" rx="30" ${st(T)}/>
    <path d="M-80 -15 H380 M-80 25 H320 M-80 65 H220" ${st(W,5,.75)}/>
    <circle cx="260" cy="65" r="14" fill="${T}"/><circle cx="300" cy="65" r="14" fill="${PL}"/>
    <rect x="-120" y="170" width="140" height="44" rx="22" ${st(PL,4,.8)}/><rect x="40" y="170" width="140" height="44" rx="22" ${st(PL,4,.5)}/>`,
  'checkout-ux-promptpay': () => {
    let q=''; const g=[[1,1,1,0,1,0,1],[1,0,1,1,0,1,0],[1,1,1,0,1,1,1],[0,1,0,1,0,0,1],[1,0,1,1,1,0,1],[0,1,1,0,1,1,0],[1,1,0,1,0,1,1]]
    g.forEach((r,y)=>r.forEach((v,x)=>{ if(v) q+=`<rect x="${-440+x*44}" y="${-160+y*44}" width="34" height="34" rx="8" fill="${(x+y)%3?P:T}" opacity=".85"/>`}))
    return `<rect x="-480" y="-200" width="380" height="380" rx="34" ${st(PL,5)}/>`+q+
      [0,1,2,3].map(i=>`<circle cx="${80+i*130}" cy="0" r="${i===3?30:22}" ${i<3?`fill="${T}"`:st(W,5)}/>`).join('')+
      [0,1,2].map(i=>`<path d="M${108+i*130} 0 H${180+i*130}" ${st(T,5,.7)}/>`).join('')+
      `<path d="M${80+390-14} 0 l10 10 l20 -22" ${st(W,5)}/>`
  },
  'thai-ux-writing': () => `
    <path d="M-470 -170 q0 -50 50 -60 M-400 -170 q0 -50 50 -60" ${st(T,10)}/>
    ${[0,1,2,3,4].map(i=>`<path d="M-470 ${-80+i*60} H${380-((i*97)%260)}" ${st(i===2?T:P,8,i===2?1:.6)}/>`).join('')}
    <path d="M${380-((2*97)%260)+30} 20 v80" ${st(W,6)}/>
    <rect x="180" y="190" width="240" height="64" rx="32" ${st(PL,5)}/><path d="M230 222 H370" ${st(W,5,.8)}/>`,
  'dark-patterns-consent': () => [0,1,2].map(i=>{const y=-170+i*150;const on=i!==1;return `<rect x="-480" y="${y-50}" width="980" height="100" rx="28" ${st(P,3,.35)}/><path d="M-430 ${y-10} H-120 M-430 ${y+20} H-220" ${st(PL,5,.6)}/><rect x="300" y="${y-34}" width="140" height="68" rx="34" fill="${on?T:'#14122b'}" stroke="${on?T:PL}" stroke-width="4"/><circle cx="${on?406:334}" cy="${y}" r="24" fill="${W}"/>`}).join(''),
  'ai-prototyping-design': () => `
    <rect x="-490" y="-200" width="240" height="380" rx="26" ${st(P,5)}/>
    <rect x="-130" y="-200" width="240" height="380" rx="26" ${st(T,5)}/>
    <rect x="230" y="-200" width="240" height="380" rx="26" ${st(PL,5)}/>
    ${[-490,-130,230].map((x,i)=>`<rect x="${x+30}" y="-160" width="180" height="90" rx="14" fill="${[P,T,PL][i]}" opacity=".35"/><path d="M${x+30} -30 H${x+200} M${x+30} 5 H${x+150}" ${st(W,5,.6)}/><rect x="${x+30}" y="110" width="120" height="40" rx="20" ${st(W,4,.8)}/>`).join('')}
    <path d="M-250 130 C-200 130 -190 -20 -130 -20" ${st(W,4,.7)}/><path d="M110 130 C160 130 170 -20 230 -20" ${st(W,4,.7)}/>`,
  'seo-aeo-geo-ai-search': () => `
    ${[120,200,280].map((r,i)=>`<circle cx="260" cy="20" r="${r}" ${st(i===0?T:P,4,1-i*.25)}/>`).join('')}
    <circle cx="260" cy="20" r="26" fill="${T}"/>
    ${[[110,-150],[460,-40],[200,250]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="12" fill="${PL}"/>`).join('')}
    <rect x="-500" y="-60" width="520" height="100" rx="50" ${st(W,6)}/>
    <circle cx="-430" cy="-10" r="20" ${st(T,5)}/><path d="M-415 5 l18 18" ${st(T,5)}/>
    <path d="M-370 -10 H-130" ${st(PL,5,.7)}/>
    <path d="M-500 110 H-160 M-500 160 H-240" ${st(P,6,.55)}/>`,
  'pdpa-enforcement-fines': () => `
    <path d="M0 -270 l200 70 v130 c0 140 -90 220 -200 260 c-110 -40 -200 -120 -200 -260 v-130z" ${st(P,7)}/>
    <path d="M0 -215 l150 52 v100 c0 105 -68 165 -150 196 c-82 -31 -150 -91 -150 -196 v-100z" ${st(T,4,.5)}/>
    <rect x="-70" y="-40" width="140" height="110" rx="20" fill="#1a1640" stroke="${W}" stroke-width="6"/>
    <path d="M-40 -40 v-30 a40 40 0 0 1 80 0 v30" ${st(W,6)}/><circle cx="0" cy="12" r="12" fill="${T}"/>
    ${[-470,-400,-330].map((x,i)=>`<path d="M${x} ${120-i*70} H${x+170}" ${st(PL,5,.5)}/>`).join('')}
    ${[300,370,440].map((x,i)=>`<path d="M${x} ${-120+i*70} H${x+90}" ${st(PL,5,.5)}/>`).join('')}`,
  'thailand-draft-ai-act': () => `
    <path d="M0 -250 L120 -100 H-120 Z" fill="${PL}" opacity=".85"/>
    <path d="M-135 -80 H135 L230 40 H-230 Z" ${st(T,6)}/>
    <path d="M-245 60 H245 L340 180 H-340 Z" ${st(P,6)}/>
    <path d="M-355 200 H355 L420 260 H-420 Z" ${st(P,4,.4)}/>
    <circle cx="-430" cy="-150" r="40" ${st(W,4,.6)}/><path d="M-430 -190 V-110 M-470 -150 H-390" ${st(W,3,.4)}/>`,
  'software-project-brief': () => `
    <path d="M-260 -270 H120 L220 -170 V270 H-260 Z" ${st(P,6)}/>
    <path d="M120 -270 V-170 H220" ${st(P,6)}/>
    ${[0,1,2,3,4].map(i=>`<rect x="-200" y="${-150+i*80}" width="40" height="40" rx="10" ${st(i<3?T:PL,4)}/>${i<3?`<path d="M-191 ${-130+i*80} l8 9 l16 -18" ${st(W,4)}/>`:''}<path d="M-130 ${-130+i*80} H${140-((i*47)%120)}" ${st(i<3?W:PL,5,.6)}/>`).join('')}
    <path d="M300 160 L440 20 l40 40 L340 200 l-56 16z" ${st(T,5)}/>`,
  'ai-roi-measure': () => `
    <path d="M-500 230 H500" ${st(W,3,.3)}/><path d="M-500 230 V-240" ${st(W,3,.3)}/>
    <path d="M-500 120 H500" ${st(PL,4,.5)} stroke-dasharray="14 14"/>
    <path d="M-500 150 C-350 150 -300 140 -200 110 S-20 40 80 -20 S300 -150 480 -200" ${st(T,7)}/>
    ${[[-200,110],[80,-20],[480,-200]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="14" fill="${W}"/>`).join('')}
    ${[-420,-300,-180,-60,60,180,300,420].map((x,i)=>`<rect x="${x-22}" y="${230-(40+i*14)}" width="44" height="${40+i*14}" rx="8" fill="${P}" opacity=".35"/>`).join('')}`,
}

const bg = (w, h, i, fig) => {
  const teal = i % 2 === 1
  return `
  <defs>
    <radialGradient id="g1" cx="${teal ? 0.75 : 0.15}" cy="${fig ? 0.9 : 0.1}" r="0.75"><stop offset="0" stop-color="#3a2f86" stop-opacity="${teal ? .55 : .9}"/><stop offset="1" stop-color="#3a2f86" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="${teal ? 0.25 : 0.7}" cy="${fig ? 0.1 : 0.9}" r="0.7"><stop offset="0" stop-color="${teal ? '#1d5a66' : '#2c2560'}" stop-opacity=".9"/><stop offset="1" stop-color="#0c0c1c" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#0a0a17"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>`
}

const slugs = Object.keys(motifs)
slugs.forEach((slug, i) => {
  for (const fig of [false, true]) {
    const w = 1600, h = fig ? 760 : 900
    const extra = fig ? [140, 220, 300].map(r => `<circle cx="${i % 2 ? 1380 : 220}" cy="${h - 120}" r="${r}" ${st(W, 2, .08)}/>`).join('') : ''
    const tx = fig ? (i % 2 ? 760 : 840) : 800, ty = h / 2, sc = fig ? 1.15 : 1.3
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${bg(w, h, i, fig)}${extra}<g transform="translate(${tx},${ty}) scale(${sc})">${motifs[slug]()}</g></svg>`
    fs.mkdirSync(path.join(out, slug), { recursive: true })
    fs.writeFileSync(path.join(out, slug, fig ? 'figure.html' : 'cover.html'), `<!doctype html><html><body style="margin:0;background:#0a0a17">${svg}</body></html>`)
  }
})
console.log(slugs.length)
