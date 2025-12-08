import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/lib/Providers/Providers";
import AuthInit from "@/components/AuthSession/AuthInit";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TIS-News | Stay Updated with the Latest News",
  description: "TIS-News provides the latest updates...",
  keywords: "news, breaking news, international news",
  authors: [{ name: "Tawhidul Islam" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased mx-auto`}
        >
          <main className="flex flex-col min-h-screen">
            <Toaster position="top-right" />
            <AuthInit />
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}
