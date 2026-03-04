import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgenpestcontrol.com.au"),
  title: "NextGen Pest Solution | Modern Pest Control Across Sydney",
  description:
    "Premium, family-safe pest control services across Sydney. Residential, commercial, termite and rodent solutions with fast response.",
  keywords: [
    "pest control Sydney",
    "termite control",
    "residential pest control",
    "commercial pest management",
    "Northern Beaches pest control"
  ],
  openGraph: {
    title: "NextGen Pest Solution | Modern Pest Control Across Sydney",
    description:
      "Safe for families and pets, fast response, and certified technicians for homes and businesses.",
    url: "https://nextgenpestcontrol.com.au",
    siteName: "NextGen Pest Solution",
    locale: "en_AU",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
