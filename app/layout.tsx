import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import PlausibleProvider from "next-plausible";

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

export const metadata: Metadata = {
  title: "My Portfolio - Vehbi",
  description: "My personal portfolio website.",
  authors: [{ name: "Vehbi", url: "https://vehbi.me/" }],
  keywords: ["portfolio", "personal", "website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlausibleProvider
      domain="vehbi.me"
      customDomain="https://plausible.vehbi.me"
      trackOutboundLinks
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-gray-900`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </PlausibleProvider>
  );
}
