// Pass-through root layout. The <html> element (and its lang) is rendered by
// app/[lang]/layout.tsx, app/staff/layout.tsx and app/not-found.tsx through
// components/SiteDocument.tsx, so lang can follow the route language. This
// file exists so app/not-found.tsx has a root layout.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
