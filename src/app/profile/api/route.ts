import { type NextRequest } from 'next/server'; // header option 1
import { headers, cookies } from 'next/headers'; // header and cookies option 2

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers); // header option 1
  const headerList = headers(); // header option 2

  const theme = request.cookies.get('theme'); // cookies option 1
  cookies().set('resultsPerPage', '20'); // cookies option 2

  console.log(requestHeaders.get('Authorization')); // header option 1
  console.log(headerList.get('Authorization')); // header option 2

  console.log(theme); // cookies option 1
  console.log(cookies().get('resultsPerPage')); // cookies option 2

  // after sending Thunder Client request console.log "Bearer 12345" will be displayed in Terminal
  // headers returned from the GET function are "read only"

  return new Response('<h1>Profile API data</h1>', {
    headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
  });
}

// return new Response('<h1>Profile API data</h1>') without headers information displays plain text
