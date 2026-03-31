import "server-only";
import { cookies } from "next/headers";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value && (locales as readonly string[]).includes(value)) {
    return value as Locale;
  }
  return defaultLocale;
}

export async function getServerDictionary() {
  const locale = await getLocale();
  return getDictionary(locale);
}
