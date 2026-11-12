import { notFound } from 'next/navigation'

// Unknown URLs under /th or /en. There is no app/layout.tsx (each top-level
// route has its own root layout so <html lang> follows the language), so
// without this catch-all Next would show its bare 404 outside the site layout.
export default function Missing() {
  notFound()
}
