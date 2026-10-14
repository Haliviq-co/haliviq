const BASE = 'https://www.haliviq.com'

/** Canonical + hreflang alternates for a URL like https://www.haliviq.com/th/some/page */
export function alt(url: string) {
  const path = url.replace(/^https?:\/\/[^/]+\/(th|en)(?=\/|$)/, '')
  return {
    canonical: url,
    languages: {
      en: `${BASE}/en${path}`,
      th: `${BASE}/th${path}`,
      'x-default': `${BASE}/en${path}`,
    },
  }
}
