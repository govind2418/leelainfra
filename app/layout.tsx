import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({ title: `${SITE.name} — ${SITE.tagline}`, path: "/" }),
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="min-h-full bg-ink font-sans text-cream antialiased">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <AmbientBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
