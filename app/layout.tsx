import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Yousef Walid Omar | Full Stack Developer",
  description:
    "Full Stack Developer (.NET & React) based in Cairo, Egypt. Building modern, scalable web applications with clean architecture.",
  openGraph: {
    title: "Yousef Walid Omar | Full Stack Developer",
    description:
      "Full Stack Developer (.NET & React) building modern, scalable web applications.",
    url: "https://YOUR-VERCEL-URL.vercel.app",
    siteName: "Yousef Walid Portfolio",
    images: [
      {
        url: "/og.png", // نحط صورة بعدين
        width: 1200,
        height: 630,
        alt: "Yousef Walid Omar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousef Walid Omar | Full Stack Developer",
    description:
      "Full Stack Developer (.NET & React) building modern, scalable web applications.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          ${spaceMono.variable}
          font-sans antialiased
          animated-bg relative
        `}
      >
        {/* Noise overlay */}
        <div className="noise-overlay" />

        {children}
      </body>
    </html>
  );
}
