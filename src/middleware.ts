import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');

  return response;
}

// middleware allows also simple manipulation of cookies and headers

// ========== version 2
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/profile') {
//     // return NextResponse.redirect(new URL('/hello', request.url));
//     return NextResponse.rewrite(new URL('/hello', request.url));
//     // NextResponse.redirect >>> URL changes to /hello
//     // NextResponse.rewrite >>> URL stays /profile, displayed content is /hello
//   }
// }

// ========== version 1
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url));
// }

// export const config = { matcher: '/profile' };
