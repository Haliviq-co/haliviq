// Icon for each technology chip. `dev` uses the devicon font (coloured brand logo);
// `ti` falls back to a Tabler icon for items that have no brand logo.
export type TechIcon = { dev?: string; ti?: string }

const map: Record<string, TechIcon> = {
  html: { dev: 'devicon-html5-plain colored' },
  css: { dev: 'devicon-css3-plain colored' },
  javascript: { dev: 'devicon-javascript-plain colored' },
  typescript: { dev: 'devicon-typescript-plain colored' },
  react: { dev: 'devicon-react-original colored' },
  'next.js': { dev: 'devicon-nextjs-plain' },
  php: { dev: 'devicon-php-plain colored' },
  python: { dev: 'devicon-python-plain colored' },
  sql: { ti: 'database' },
  mysql: { dev: 'devicon-mysql-plain colored' },
  postgresql: { dev: 'devicon-postgresql-plain colored' },
  bootstrap: { dev: 'devicon-bootstrap-plain colored' },
  angularjs: { dev: 'devicon-angularjs-plain colored' },
  jquery: { dev: 'devicon-jquery-plain colored' },
  laravel: { dev: 'devicon-laravel-plain colored' },
  'node.js': { dev: 'devicon-nodejs-plain colored' },
  flutter: { dev: 'devicon-flutter-plain colored' },
  swift: { dev: 'devicon-swift-plain colored' },
  kotlin: { dev: 'devicon-kotlin-plain colored' },
  shopify: { ti: 'shopping-cart' },
  liquid: { ti: 'droplet' },
  'headless cms': { ti: 'layout-dashboard' },
  cms: { ti: 'layout-list' },
  apis: { ti: 'api' },
  crm: { ti: 'users' },
  'ai / llm': { ti: 'sparkles' },
  'cloud hosting': { ti: 'cloud' },
  cdn: { ti: 'world' },
  'relational database': { ti: 'database' },
  'role-based access control': { ti: 'lock' },
}

export function techIcon(name: string): TechIcon {
  const k = name.trim().toLowerCase()
  if (map[k]) return map[k]
  if (k.includes('mobile')) return { ti: 'device-mobile' }
  return { ti: 'code' }
}
