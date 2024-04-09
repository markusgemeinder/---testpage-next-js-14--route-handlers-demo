export const dynamic = 'force-dynamic'; // instead of auto, which caches as much as possible

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
