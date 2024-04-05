// variant 1
import { type NextRequest } from 'next/server';

// variant 2
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  // variant 1
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get('Authorization'));

  // variant 2
  const headerList = headers();
  console.log(headerList.get('Authorization'));

  // after sending Thunder Client request console.log "Bearer 12345" will be displayed in Terminal

  // headers returned from the GET function are "read only"

  return new Response('<h1>Profile API data</h1>', { headers: { 'Content-Type': 'text/html' } });
}

// return new Response('<h1>Profile API data</h1>') without headers information displays plain text
