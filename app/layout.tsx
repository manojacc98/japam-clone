import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Announcement from "./components/Announcement";
import Header from "./components/Header";
// import { MessageCircleMore } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japam Clone",
  description: "Japam.in clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Announcement />
        <Header />
        <main>{children}</main>

        {/* ✅ Chat With Us Button is now inside body
        <div className="fixed bottom-4 right-4 z-50">
          <button className="flex items-center gap-2 bg-[#2e2b35] text-white text-sm px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
            <MessageCircleMore className="w-4 h-4" />
            Chat with us
          </button>
        </div> */}
      </body>
    </html>
  );
}

