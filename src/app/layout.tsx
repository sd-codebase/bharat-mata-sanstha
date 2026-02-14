import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bharat Mata Bahuuddeshiy Sanstha",
    template: "%s | Bharat Mata Bahuuddeshiy Sanstha",
  },
  description:
    "Empowering communities through quality education since 1993. A multipurpose educational organization in Barshi, Solapur District, Maharashtra running 10 educational centers serving 1825+ students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
