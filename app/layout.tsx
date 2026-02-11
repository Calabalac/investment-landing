import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://investment-landing-ten.vercel.app"),
  title: "SADOA — Інвестиції в апарт-готель 10-14% річних | Будівельна компанія",
  description: "Інвестуйте напряму через Будівельну компанію в SADOA. Гарантована прибутковість 10-14% річних, вхід від $45k. Пасивний дохід та управління під ключ.",
  keywords: "інвестиції в нерухомість, апарт-готель, пасивний дохід, SADOA, нерухомість карпати, інвестиції україна, забудовник",
  openGraph: {
    title: "SADOA — Інвестиції в апарт-готель | 10-14% річних",
    description: "Інвестуйте напряму через Будівельну компанію. Гарантований пасивний дохід, керуюча компанія, вхід від $45k. Дізнайтесь деталі!",
    url: "https://investment-landing-ten.vercel.app",
    siteName: "SADOA Invest",
    images: [
      {
        url: "/img/1-.jpg", // Using the hero image as the preview
        width: 1200,
        height: 630,
        alt: "SADOA Апарт-готель",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SADOA — Інвестиції в нерухомість 10-14% річних",
    description: "Інвестуйте напряму через забудовника. Пасивний дохід від $45k. Отримайте розрахунок прибутковості.",
    images: ["/img/1-.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "SADOA Invest",
  "image": "https://investment-landing-ten.vercel.app/img/1-.jpg",
  "description": "Інвестиції в апарт-готель SADOA. Прибутковість 10-14% річних. Прямий продаж від забудовника.",
  "url": "https://investment-landing-ten.vercel.app",
  "telephone": "+380000000000", // Placeholder, ideally user provides this
  "priceRange": "$45000+",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UA"
  },
  "offeredBy": {
    "@type": "Organization",
    "name": "Будівельна компанія SADOA"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="dark">
      <body className={`${outfit.variable} ${inter.variable} min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
