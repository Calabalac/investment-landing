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
  title: "Апарт-готелі в Україні — Інвестиції 10–14% річних | SADOA",
  description: "Готовий бізнес з гарантованою прибутковістю. Інвестиції в нерухомість безпосередньо від забудовника. Без комісії та посередників.",
  keywords: ["інвестиції", "нерухомість", "апарт-готель", "пасивний дохід", "нерухомість україна"],
  openGraph: {
    title: "Апарт-готелі в Україні — Інвестиції 10–14% річних",
    description: "Готовий бізнес з гарантованою прибутковістю. Станьте власником готельного номера.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent selection:text-white",
          outfit.variable,
          inter.variable
        )}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black opacity-80" />
        {children}
      </body>
    </html>
  );
}
