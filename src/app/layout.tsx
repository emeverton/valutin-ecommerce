import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AccountDrawer } from "@/components/account/AccountDrawer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieBanner } from "@/components/gdpr/CookieBanner";
import { Header } from "@/components/layout/Header";
import { Topbar } from "@/components/layout/Topbar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valutin — Moda Infantil Premium",
  description: "Moda infantil premium inspirada no melhor da moda francesa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <Topbar />
        <Header />
        <CartDrawer />
        <AccountDrawer />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
