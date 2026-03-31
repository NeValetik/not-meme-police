import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales, defaultLocale, LOCALE_COOKIE } from "./i18n/config";

function getLocaleFromHeaders(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const languages = new Negotiator({ headers }).languages();
  return match(languages, [...locales], defaultLocale);
}

export function proxy(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return;
  }

  const locale = getLocaleFromHeaders(request);
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|locale|.*\\..*).*)"],
};
