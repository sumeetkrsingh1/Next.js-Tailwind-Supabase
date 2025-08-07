// pages/api/hello.js

export const runtime = 'edge'; // Required for Cloudflare Pages

export default async function handler(req) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
