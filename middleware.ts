import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// URLs without a language prefix (e.g. /about, /work/foo) used to render the
// Thai home page, which Google saw as duplicate content. Send them to /en/...
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const url = req.nextUrl.clone()
  url.pathname = `/en${pathname}`
  url.search = search
  return NextResponse.redirect(url, 308)
}

export const config = {
  // Everything except: root, /th, /en, /api, Next internals and files with an extension.
  matcher: ['/((?!$|th(?:/|$)|en(?:/|$)|api(?:/|$)|_next/|.*\\..*).+)'],
}
