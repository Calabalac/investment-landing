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
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Апарт-отели в Украине — Инвестиции 10–14% годовых",
  description: "Готовый бизнес с гарантированной доходностью. Инвестиции в недвижимость напрямую от застройщика. Без комиссии и посредников.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased text-slate-900",
          outfit.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
