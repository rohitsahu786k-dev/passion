import { NextRequest, NextResponse } from 'next/server';

const BAD_BOTS = [
  'mj12bot', 'dotbot', 'blexbot', 'dataforseobot', 'megaindex',
  'exabot', 'nikto', 'zmeu', 'masscan', 'dirbuster', 'sqlmap',
  'nessus', 'acunetix', 'netsparker', 'burpsuite', 'openvas',
  'gsa-crawler', 'screaming frog', 'serpstat', 'spyonweb',
];

export function middleware(req: NextRequest) {
  const ua = (req.headers.get('user-agent') || '').toLowerCase();

  // Block known bad bots and security scanners
  if (BAD_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse(null, { status: 403 });
  }

  // Block requests with no user-agent (automated scanners)
  if (!ua || ua.length < 5) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|assets|logo\\.svg|manifest\\.json).*)'],
};
