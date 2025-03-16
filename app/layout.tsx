
import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import {  ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/common/header";
import {Footer} from "@/components/common/footer";
import { Web3Provider } from '@/context/Web3Context';


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
    <ClerkProvider>
          <Web3Provider>
<html lang="en">
      <body className={`${fontHand.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </Web3Provider>
    </ClerkProvider>
  );
}
