import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For local testing, we'll allow all requests
  // In production, you would add proper authentication here
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
