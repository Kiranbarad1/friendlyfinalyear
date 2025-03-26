import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Final Year Projects",
  description: "BTECH MTECH MCA and BCA Projects. A collection of Node.js, PHP, Python, and Java projects. All projects are tested and work 100%.",
  keywords: ["Node.js", "PHP", "Python", "Java", "Final Year Projects"],
  openGraph: {
    title: "Final Year Projects",
    description: "Explore various final year major and mini projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Navbar should not be inside Suspense */}
        <Navbar />

        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>

        {/* ✅ Suspense should wrap only `children` */}
      </body>
    </html>
  );
}
