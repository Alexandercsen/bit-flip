import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import { CookieConsent } from "@/components/bitflip/CookieConsent";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [
    "Python tutoring Ireland",
    "Java tutoring Ireland",
    "C++ tutoring Ireland",
    "programming tutor Ireland",
    "Leaving Certificate programming tutor",
    "computer science tutoring Ireland",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
