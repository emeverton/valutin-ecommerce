import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AccountDrawer } from "@/components/account/AccountDrawer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieBanner } from "@/components/gdpr/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SplashOverlay } from "@/components/splash/SplashOverlay";
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
  title: {
    default: "Valutin — Moda Infantil Premium",
    template: "%s | Valutin",
  },
  description:
    "Moda infantil premium para bebês e crianças de 0 a 12 anos. Coleções exclusivas com algodão orgânico certificado e design inspirado na moda francesa.",
  keywords: [
    "moda infantil",
    "roupa de bebê",
    "roupa de criança",
    "moda premium",
    "algodão orgânico",
    "Valutin",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Valutin",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7D8CA3",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Valutin",
  url: "https://www.valutin.com.br",
  logo: "https://www.valutin.com.br/logo.png",
  description: "Moda infantil premium inspirada no melhor da tradição francesa",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/valutin", "https://facebook.com/valutin"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div
          id="splash-backdrop"
          style={{ position: "fixed", inset: 0, background: "#111", zIndex: 499 }}
        />
        <SplashOverlay />
        <Topbar />
        <Header />
        <CartDrawer />
        <AccountDrawer />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
