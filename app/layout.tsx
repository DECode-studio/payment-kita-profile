import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslatorProvider } from "@/lib/translations/TranslatorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payment Kita - Cross-Border Payment Gateway",
  description: "Gateway pembayaran lintas batas secepat kilat menggunakan teknologi EVM & SVM. Terima bayaran global, cairkan ke Rupiah dalam hitungan detik.",
  keywords: "payment, crypto, blockchain, EVM, SVM, cross-border, Indonesia, IDR",
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    apple: { url: '/icon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    title: "Payment Kita - Cross-Border Payment Gateway",
    description: "Gateway pembayaran lintas batas secepat kilat menggunakan teknologi EVM & SVM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <TranslatorProvider initialLocale="id">
          {/* Animated mesh gradient background */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Mesh gradient blobs */}
            <div className="absolute top-0 left-0 w-200 h-200 bg-linear-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/30 rounded-full blur-3xl animate-mesh-1" />
            <div className="absolute top-0 right-0 w-200 h-200 bg-linear-to-bl from-purple-600/30 via-pink-600/20 to-blue-600/30 rounded-full blur-3xl animate-mesh-2" />
            <div className="absolute bottom-0 left-1/2 w-200 h-200 bg-linear-to-t from-cyan-600/30 via-blue-600/20 to-purple-600/30 rounded-full blur-3xl animate-mesh-3" />
            
            {/* Additional accent orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-float-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-float-slow delay-1000" />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-float-medium delay-500" />
          </div>
          
          {/* Animated grid pattern */}
          <div 
            className="fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'grid-move 60s linear infinite',
            }}
          />
          
          {/* Noise texture overlay for depth */}
          <div 
            className="fixed inset-0 -z-10 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Spotlight glow effect */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-300 h-300 bg-gradient-radial from-blue-500/5 via-transparent to-transparent animate-pulse-slow" />
          </div>
          
          {/* Animated border glow on scroll */}
          <div className="fixed top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent animate-shimmer-line" />
          
          {children}
        </TranslatorProvider>
      </body>
    </html>
  );
}
