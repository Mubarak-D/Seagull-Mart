import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seagull Mart Chocolate Shop Galle — Imported Sweets & Chocolates",
  description: "Galle's premier spot for quality imported chocolates, sweets, coffee, snacks, and bulk packets. Located at 233 Colombo Main Rd, Galle. Order via WhatsApp.",
  keywords: "imported chocolates Galle, imported sweets Galle, bulk chocolate Galle, Seagull Mart, Seagull Mart Galle",
  openGraph: {
    title: "Seagull Mart Chocolate Shop Galle",
    description: "Imported chocolates, sweets & snacks — Galle's go-to stop.",
    url: "https://seagullmart.lk",
    siteName: "Seagull Mart Chocolate Shop",
    locale: "en_LK",
    type: "website",
  },
  alternates: {
    canonical: "https://seagullmart.lk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seagull Mart Chocolate Shop",
    "telephone": "+94764095180",
    "url": "https://seagullmart.lk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "233 Colombo Main Rd",
      "addressLocality": "Galle",
      "postalCode": "80000",
      "addressCountry": "LK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary font-inter">
        {children}
      </body>
    </html>
  );
}

