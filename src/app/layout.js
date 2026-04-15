import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Navbar";
import TitleUpdater from "@/TitleUpdater";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Salman Shah || Portfolio",
  description: "Portfolio of Salman Shah, a MERN Stack Developer specializing in React, Node.js, and modern web technologies.",
  verification: {
    google: '5ZPofhLKNM6TvMmVN0gBZm0unhsYaqDgLwkYinCJpck',
  },
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <TitleUpdater></TitleUpdater>
        {children}
        </body>
    </html>
  );
}
