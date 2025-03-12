
import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const fontHand = Patrick_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400"],});

export const metadata: Metadata = {
  title: "Crux🧠",
  description:
    "The AI-powered summarizer app that condenses long articles, PDFs, and meetings into concise, easy-to-read summaries. Get key insights instantly with advanced AI, saving you time and effort. Perfect for students, professionals, and researchers. Try Crux today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={fontHand.variable}>
  <body className="font-hand antialiased">
        {children}
      </body>
    </html>
  );
}
