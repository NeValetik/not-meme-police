import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { LocaleProvider } from "@/i18n/client";
import { getLocale } from "@/i18n/server";
import { getDictionary } from "@/i18n/dictionaries";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Not meme police",
  description: "This is not related any how in any way to the meme police",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} className={cn("font-mono", jetbrainsMono.variable)}>
      <body className="min-h-screen flex flex-col">
        <LocaleProvider locale={locale} dictionary={dictionary}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
