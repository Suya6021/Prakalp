import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Orbitron } from "next/font/google";

import { ThemeProvider } from "@/components/themeProvider";
import Footer from "@/components/Footer";
const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prakalp2024",
  description:
    "Prakalp - JSPM's Rajashri Shahu College of Engineering IT Department's Project Showcasing Competition. Explore cutting-edge projects, diverse competition categories, networking opportunities, and insightful guest lectures. Join us for a celebration of innovation and creativity in Information Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app ">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
