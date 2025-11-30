import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Cormorant_Garamond, Inter } from 'next/font/google'

// Initialize fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const siteUrl = "https://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A² Peanut Butter | Handcrafted Luxury Spread Since 2024",
    template: "%s | A² Peanut Butter"
  },
  description:
    "A² Peanut Butter - Where craft meets indulgence. Slow-roasted Valencia peanuts transformed into liquid gold. Each jar is a testament to quality over quantity. Proudly crafted by Prince.",
  keywords: [
    "luxury peanut butter",
    "artisanal peanut butter",
    "A Square",
    "A²",
    "Valencia peanuts",
    "gourmet spread",
    "organic peanut butter",
    "premium food",
    "handcrafted",
    "small batch",
    "Prince",
  ],
  authors: [{ name: "Prince", url: siteUrl }],
  creator: "Prince",
  publisher: "A² Peanut Butter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "A² Peanut Butter | Handcrafted Luxury Since 2024",
    description: "Slow-roasted Valencia peanuts transformed into liquid gold. Premium peanut butter that tastes like it should.",
    siteName: "A² Peanut Butter",
    images: [{
      url: `${siteUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "A² Peanut Butter - Liquid Gold",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A² Peanut Butter | Handcrafted Luxury",
    description: "Slow-roasted Valencia peanuts. No shortcuts, no compromises. Just damn good peanut butter.",
    creator: "@asquare_foods",
    images: [`${siteUrl}/og-image.jpg`],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "A² Peanut Butter",
              "image": `${siteUrl}/og-image.jpg`,
              "description": "Handcrafted luxury peanut butter made from slow-roasted Valencia peanuts",
              "author": {
                "@type": "Person",
                "name": "Prince"
              },
              "founder": {
                "@type": "Person",
                "name": "Prince"
              },
              "foundingDate": "2024-2025",
              "url": siteUrl,
              "servesCuisine": "Gourmet Foods",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-[#080808] cursor-none md:cursor-none`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
