import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { seoMetadata } from "@/common/seo-metadata";
import "@/common/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth no-scrollbar"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
