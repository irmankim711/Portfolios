import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irman Hakim | Software Engineer",
  description:
    "Portfolio of Irman Hakim Bin Nazri — Software Engineer specializing in high-performance web systems, full-stack architecture, and interactive 3D digital experiences.",
  keywords: [
    "Irman Hakim",
    "Irman Hakim Bin Nazri",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "irmankim711",
  ],
  authors: [{ name: "Irman Hakim Bin Nazri" }],
  openGraph: {
    title: "Irman Hakim | Software Engineer Portfolio",
    description:
      "Interactive 3D Software Engineer Portfolio — Scalable full-stack systems & modern interactive web design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#07090e] text-[#e2e8f0] antialiased selection:bg-cyan-500/25 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}