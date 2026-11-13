/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Send the bare domain to the English home page with a real redirect.
  // (A redirect() inside app/page.tsx was prerendered as Next's error shell:
  // a 307 with no Location header and <html id="__next_error__">.)
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: true }]
  },
}

module.exports = nextConfig
