import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { extractSubdomain } from '@/lib/tenant'

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Update Supabase session
  const { supabaseResponse } = await updateSession(request)
  
  // Extract subdomain from hostname
  const subdomain = extractSubdomain(hostname)
  
  // Create response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
  
  // Copy cookies from supabase response
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    response.cookies.set(cookie.name, cookie.value, cookie)
  })
  
  // If we have a subdomain, add it to headers for downstream use
  if (subdomain) {
    response.headers.set('x-tenant-slug', subdomain)
  }
  
  // For localhost without subdomain or main domain, redirect to a landing page
  // (You can customize this behavior)
  const isMainDomain = !subdomain && (
    hostname.includes('localhost') || 
    hostname.includes('yourapp.com')
  )
  
  if (isMainDomain && request.nextUrl.pathname === '/products') {
    // Redirect to main site or tenant selection page
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
