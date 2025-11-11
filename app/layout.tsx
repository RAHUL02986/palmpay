import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/comman/Header";
import Footer from "./components/comman/Footer";
import HydrationSafeWrapper from "./components/HydrationSafeWrapper";

const hellix = localFont({
  src: [
    { path: "./fonts/Hellix-Light.woff", weight: "100", style: "normal" },
    { path: "./fonts/Hellix-Light.woff", weight: "200", style: "normal" },
    { path: "./fonts/Hellix-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Hellix-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Hellix-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Hellix-SemiBold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-hellix",
});

export const metadata: Metadata = {
  title: "PalmPay - Secure Digital Payments",
  description: "Simple, secure payments for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hellix.variable} antialiased`} suppressHydrationWarning={true}>
        <SpeedInsights />
        <HydrationSafeWrapper>
          <Header />
          {children}
          <Footer />
        </HydrationSafeWrapper>
      </body>
    </html>
  );
}
