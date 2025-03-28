import type { Metadata } from "next";
import { SeoMetadata } from "@/common/seo-metadata";
import { interMedium } from "@/common/font";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import "@/common/globals.css";

export const metadata: Metadata = SeoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth no-scrollbar"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={`${interMedium.className} antialiased select-none`}>
        <header>
          <NextTopLoader color="#fff" showSpinner={false} />
        </header>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
