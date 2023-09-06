import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "zh"];

// a prefix (v2) is needed for i18n to work in both app and page routers
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/api/trpc") ||
    request.nextUrl.pathname.startsWith("/_next") ||
    !request.nextUrl.pathname.startsWith("/v2")
  ) {
    return;
  }
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/v2/${locale}/`) && pathname !== `/v2/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      // remove the `/v2`
      new URL(`/v2/zh${pathname.substring(3)}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
