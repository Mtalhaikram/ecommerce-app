import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martify - Premium E-commerce Store",
  description: "Discover amazing products with Martify. Your one-stop destination for premium products with fast shipping, secure payments, and exceptional customer service.",
  keywords: "ecommerce, shopping, premium products, electronics, fashion, home, beauty, sports",
  authors: [{ name: "Martify Team" }],
  creator: "Martify",
  publisher: "Martify",
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martify.com",
    title: "Martify - Premium E-commerce Store",
    description: "Discover amazing products with Martify. Your one-stop destination for premium products with fast shipping, secure payments, and exceptional customer service.",
    siteName: "Martify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martify - Premium E-commerce Store",
    description: "Discover amazing products with Martify. Your one-stop destination for premium products with fast shipping, secure payments, and exceptional customer service.",
    creator: "@martify",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
