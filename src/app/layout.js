import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CannonicalLink from "../components/CannonicalLink"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <head>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Product",
              "name": "Lifting Straight Leg Joggers",
              "description": "Well comfortable straight fit joggers for gym",
              "category": "Women",
              "brand": {
                "@type": "Brand",
                "name": "Gym war"
              },
              "url": "https://next-geeksynergy.vercel.app/",
              "image": [
                "https://next-geeksynergy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLiftingStraightLegJogger.2ae495ab.jpg&w=640&q=75",
                "https://next-geeksynergy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLiftingStraightLegJogger2.aa772ee5.jpg&w=640&q=75"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Lifting Straight Leg Joggers",
                "availability": "https://schema.org/InStock",
                "price": 65,
                "priceCurrency": "USD",
                "priceValidUntil": "2025-03-31",
                "url": "https://next-geeksynergy.vercel.app/product/01"
              }
            })}
          </script>
          <meta name="google-site-verification" content="68QqDtrfi3at6FPsShdh8LdW7gr73HV7A9QW6XGDGmk" />
          <meta name="robots" content="index, follow"/>
          <CannonicalLink />

        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
