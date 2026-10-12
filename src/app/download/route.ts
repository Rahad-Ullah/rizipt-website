import { NextResponse, type NextRequest } from "next/server";
import { getAppLinks } from "@/lib/app-links";

export const dynamic = "force-dynamic";

/**
 * Universal Smart Download Redirect Handler.
 * When a user scans the QR code or clicks the universal download link,
 * this route checks their device user-agent and redirects directly to
 * either the Apple App Store or Google Play Store.
 */
export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  const links = await getAppLinks();

  const isIOS =
    /iphone|ipad|ipod/.test(userAgent) ||
    (userAgent.includes("macintosh") && "maxTouchPoints" in request);
  const isAndroid = /android/.test(userAgent);

  if (isIOS) {
    return NextResponse.redirect(links.appStore, { status: 307 });
  }

  if (isAndroid) {
    return NextResponse.redirect(links.playStore, { status: 307 });
  }

  // Desktop or unrecognized device: redirect back to website download section
  const origin = request.nextUrl.origin || links.siteUrl;
  return NextResponse.redirect(`${origin}/#download`, { status: 307 });
}
