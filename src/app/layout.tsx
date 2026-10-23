import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import SideFloatingContact from "@/components/shared/SideFloatingContact";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "Safety Nets & Invisible Grills in Bangalore | Koteshwari Safety Nets",
    template: "%s",
  },
  description:
    "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Koteshwari Safety Nets and contact us for an enquiry.",
  keywords: [
    "Safety Nets in Bangalore",
    "Invisible Grills in Bangalore",
    "Balcony Safety Nets Bangalore",
    "Pigeon Safety Nets Bangalore",
    "Window Invisible Grills Bangalore",
    "Ceiling Cloth Hangers Bangalore",
    "Anti Bird Spikes Bangalore",
    "Koteshwari Safety Nets",
    "Safety Nets Whitefield",
    "Safety Nets Koramangala",
    "Safety Nets Indiranagar",
    "Safety Nets HSR Layout",
    "Safety Nets Electronic City",
    "Invisible Grills Whitefield",
    "Invisible Grills Koramangala",
  ],
  metadataBase: new URL("https://koteshwarisafetynets.in"),
  verification: {
    google: "CrosZxYJjc8sHLwAisJFh62qwpH6jLTX-MGXrlIhY3M",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills in Bangalore | Koteshwari Safety Nets",
    description:
      "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Koteshwari Safety Nets and contact us for an enquiry.",
    url: "https://koteshwarisafetynets.in",
    siteName: "Koteshwari Safety Nets",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Safety Nets & Invisible Grills in Bangalore - Koteshwari Safety Nets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills in Bangalore | Koteshwari Safety Nets",
    description:
      "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Koteshwari Safety Nets and contact us for an enquiry.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon SVG tag */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="CrosZxYJjc8sHLwAisJFh62qwpH6jLTX-MGXrlIhY3M" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#F28C28] selection:text-white`}
      >
        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Google Tag Manager / GA4 / Google Ads: Activated dynamically via env variables */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}

        {(process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
            />
            <Script
              id="google-tag"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  ${process.env.NEXT_PUBLIC_GA_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');` : ""}
                  ${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');` : ""}
                `,
              }}
            />
          </>
        )}

        <Navbar />
        <main className="flex-grow pt-[96px] sm:pt-[102px] lg:pt-[108px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <SideFloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
