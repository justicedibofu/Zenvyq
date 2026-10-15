import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A8CFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zenvyq.tech"),
  title: "ZENVYQ Tech Ltd — Technology to Power Business Growth",
  description:
    "ZENVYQ Tech Ltd is a Nigeria-based technology agency engineering intelligent workflow automations, WhatsApp chatbots, bespoke web & mobile applications, and enterprise digital systems for African businesses.",
  keywords: [
    "ZENVYQ",
    "ZENVYQ Tech Ltd",
    "Nigeria Tech Agency",
    "Remote Software Engineering Nigeria",
    "AI Automation Nigeria",
    "WhatsApp Chatbot Nigeria",
    "CAC Business Registration",
    "Web and Mobile App Development Africa",
  ],
  authors: [{ name: "ZENVYQ Tech Ltd" }],
  creator: "ZENVYQ Tech Ltd",
  icons: {
    icon: "/brand/logo-icon.png",
    shortcut: "/brand/logo-icon.png",
    apple: "/brand/logo-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://zenvyq.tech",
    title: "ZENVYQ Tech Ltd — Technology to Power Business Growth",
    description:
      "Remote Nigeria-based technology agency building AI automations, WhatsApp chatbots, websites, and mobile applications.",
    siteName: "ZENVYQ Tech Ltd",
    images: [
      {
        url: "/brand/logo-full.png",
        width: 1200,
        height: 630,
        alt: "ZENVYQ Tech Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENVYQ Tech Ltd — Technology to Power Business Growth",
    description:
      "Remote Nigeria-based technology agency building AI automations, WhatsApp chatbots, websites, and mobile applications.",
    images: ["/brand/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZENVYQ Tech Ltd",
    url: "https://zenvyq.tech",
    logo: "https://zenvyq.tech/brand/logo-full.png",
    description:
      "Remote Nigerian tech agency building AI automations, WhatsApp chatbots, and digital systems for businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans selection:bg-blue-500 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
