import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Not meme police",
  description: "This is not related any how in any way to the meme police",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
