
import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import {  ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/common/header";
import {Footer} from "@/components/common/footer";

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
    
<html lang="en">
  <body className="font-hand antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}

app/page.tsx
import HeroSection from "@/components/home/hero-section";
// import { DemoSection } from "@/components/home/demo-section";
import { DocumentJourneySection } from '@/components/home/document-journey-section';
import { PricingSection } from '@/components/home/pricing-section';

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <HeroSection />
      {/* <DemoSection /> */}
      <DocumentJourneySection/>
      <PricingSection />
      {/* <CTASection/> */}
    </div>
  );
}
app/globals.css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme{
--font-sans: ui-sans-serif, system-ui, sans-serif, 
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

:root {
  --font-hand: "Patrick Hand", cursive;
  --background: oklch(0.145 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

body {
  font-family: var(--font-hand), sans-serif;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  h1{
    @apply text-4xl md:text-6xl xl:text-7xl font-bold;
  }
  h2{
    @apply text-xl lg:text-3xl font-medium;
  }
  h3{
    @apply text-2xl lg:text-4xl font-medium;
  }
  a{
    @apply hover:cursor-pointer;
  }
  /* button{
    @apply hover:cursor-pointer bg-amber-300 hover:bg-blue-950
  } */
  @keyframes shine {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
  }
  
  @keyframes underline {
    0% { width: 0; opacity: 0; }
    100% { width: 100%; opacity: 1; }
  }
  
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* For Sparkle Animation */
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.95; }
    50% { opacity: 0.6; }
  }
  
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  
  .animate-pulse {
    animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-shine {
    background-size: 200% auto;
    background-image: linear-gradient(
      -45deg,
      transparent 25%,
      rgba(255,255,255,0.1) 50%,
      transparent 75%
    );
    animation: shine 3s linear infinite;
  }
  
  /* ShowReel */
  @keyframes document-scan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
  }
  
  @keyframes text-shine {
    from { background-position: 0% 50%; }
    to { background-position: 100% 50%; }
  }
  
  .document-scanner {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to bottom, 
        rgba(96, 165, 250, 0) 0%,
        rgba(96, 165, 250, 1) 50%,
        rgba(96, 165, 250, 0) 100%
      );
      animation: document-scan 2s ease-in-out infinite;
    }
  }
  
  .animate-text-shine {
    background-image: linear-gradient(
      90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.3) 50%,
      rgba(255,255,255,0) 100%
    );
    background-size: 200% auto;
    animation: text-shine 3s linear infinite;
  }

  @layer components {
    .pricing-grid {
      grid-auto-columns: minmax(0, 1fr);
    }
  }
}
app/(logged-in)/upload/page.tsx
'use client';

import { useState } from 'react';
import UploadArea from '@/components/upload/UploadArea';
import FilePreview from '@/components/upload/FilePreview';
import UploadProgress from '@/components/upload/UploadProgress';
import UploadButton from '@/components/upload/UploadButton';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (file: File) => {
    setFile(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      if (!response.ok) throw new Error('Upload failed');
      // Handle successful upload
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Upload Your PDF and let AI do the magic!
        </h1>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border-2 border-dashed border-white/10 p-8">
          {file ? (
            <div className="space-y-6">
              <FilePreview file={file} onRemove={handleRemoveFile} />
              {isUploading ? (
                <UploadProgress progress={uploadProgress} />
              ) : (
                <UploadButton onClick={handleUpload} />
              )}
            </div>
          ) : (
            <UploadArea onFileChange={handleFileChange} />
          )}
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">Recent Uploads</h2>
          {/* Add recent uploads list here */}
        </div>
      </div>
    </div>
  );
}
app/sign-in/[[...sign-in]]/page.tsx
'use client';

import { useState } from 'react';
import UploadArea from '@/components/upload/UploadArea';
import FilePreview from '@/components/upload/FilePreview';
import UploadProgress from '@/components/upload/UploadProgress';
import UploadButton from '@/components/upload/UploadButton';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (file: File) => {
    setFile(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      if (!response.ok) throw new Error('Upload failed');
      // Handle successful upload
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Upload Your PDF and let AI do the magic!
        </h1>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border-2 border-dashed border-white/10 p-8">
          {file ? (
            <div className="space-y-6">
              <FilePreview file={file} onRemove={handleRemoveFile} />
              {isUploading ? (
                <UploadProgress progress={uploadProgress} />
              ) : (
                <UploadButton onClick={handleUpload} />
              )}
            </div>
          ) : (
            <UploadArea onFileChange={handleFileChange} />
          )}
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">Recent Uploads</h2>
          {/* Add recent uploads list here */}
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { useState } from 'react';
// import { UploadCloud, FileText, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';

// export default function UploadPage() {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     setIsUploading(true);
//     setUploadProgress(0);

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadProgress(percentCompleted);
//         },
//       });

//       if (!response.ok) throw new Error('Upload failed');
//       // Handle successful upload
//     } catch (error) {
//       console.error('Upload error:', error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleRemoveFile = () => {
//     setFile(null);
//     setUploadProgress(0);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//           Upload Your PDF and let AI do the magic!
//         </h1>

//         <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border-2 border-dashed border-white/10 p-8">
//           {file ? (
//             <div className="space-y-6">
//               <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
//                 <div className="flex items-center gap-3">
//                   <FileText className="w-6 h-6 text-blue-400" />
//                   <span className="text-gray-300">{file.name}</span>
//                   <span className="text-sm text-gray-400">
//                     {(file.size / 1024 / 1024).toFixed(2)} MB
//                   </span>
//                 </div>
//                 <button
//                   onClick={handleRemoveFile}
//                   className="p-1 text-gray-400 hover:text-red-400 transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {isUploading ? (
//                 <div className="space-y-4">
//                   <Progress value={uploadProgress} className="h-2" />
//                   <p className="text-sm text-gray-400 text-center">
//                     Uploading... {uploadProgress}%
//                   </p>
//                 </div>
//               ) : (
//                 <Button
//                   onClick={handleUpload}
//                   className="w-full py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
//                 >
//                   Process PDF
//                 </Button>
//               )}
//             </div>
//           ) : (
//             <label className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
//               <div className="p-4 bg-gray-800 rounded-full">
//                 <UploadCloud className="w-8 h-8 text-blue-400" />
//               </div>
//               <p className="text-gray-300 text-center">
//                 <span className="text-blue-400">Click to upload</span> or drag and drop
//               </p>
//               <p className="text-sm text-gray-400">PDF files only (Max 100MB)</p>
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="application/pdf"
//                 onChange={handleFileChange}
//               />
//             </label>
//           )}
//         </div>

//         <div className="mt-8 space-y-4">
//           <h2 className="text-xl font-semibold text-gray-200">Recent Uploads</h2>
//           {/* Add recent uploads list here */}
//         </div>
//       </div>
//     </div>
//   );
// }
app/sign-up/[[...sign-up]]/page.tsx
// app/sign-up/[[...sign-up]]/page.tsx
'use client';

import { 
  SignUp,
  ClerkLoaded,
  ClerkLoading 
} from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen px-4">
        <ClerkLoading>
          <div className="flex items-center justify-center h-[400px]">
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          </div>
        </ClerkLoading>
        
        <ClerkLoaded>
          <div className="w-full bg-gray-900/50 backdrop-blur-lg rounded-xl border border-white/10 p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Create Your Account
            </h1>
            <SignUp 
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none w-full',
                  headerTitle: 'text-gray-300',
                  headerSubtitle: 'text-gray-400',
                  socialButtons: 'gap-4',
                  socialButtonsBlockButton: 'bg-gray-800 hover:bg-gray-700 border border-white/10',
                  socialButtonsBlockButtonText: 'text-gray-300',
                  dividerLine: 'bg-white/10',
                  dividerText: 'text-gray-400',
                  formFieldLabel: 'text-gray-300',
                  formFieldInput: 'bg-gray-800 border border-white/10 text-gray-300 focus:ring-2 focus:ring-blue-400',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
                  footerActionText: 'text-gray-400',
                  footerActionLink: 'text-blue-400 hover:text-blue-300'
                }
              }}
            />
          </div>
        </ClerkLoaded>
      </div>
    </div>
  );
}
components/common/footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crux
            </h3>
            <p className="text-sm text-gray-400">
              Transforming documents into actionable insights through AI
            </p>
          </div>

          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gray-200">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "API", "Status"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gray-200">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Blog", "Guides", "Help Center"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-gray-200">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Partners", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Crux. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
components/common/header.tsx
'use client';

import { BrainCircuit, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { NavLink } from './nav-link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="sticky top-0 z-30 bg-gray-900/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <NavLink
            href="/"
            className="group flex items-center gap-2 shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative flex items-center">
              <FileText className="w-8 h-8 lg:w-9 lg:h-9 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:rotate-[20deg]" />
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mx-1">
                Crux
              </span>
              <BrainCircuit className="w-8 h-8 lg:w-9 lg:h-9 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500 group-hover:-rotate-[20deg]" />
            </div>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            href="/#Pricing"
            className="relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Pricing
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4 lg:gap-6">
          <SignedIn>
            <NavLink
              href="/dashboard"
              className="relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Your Summaries
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>

            {/* Fixed Upload Button */}
            <Link href="/upload" passHref legacyBehavior>
              <Button
                variant="ghost"
                asChild
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
              >
                <a>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Upload PDF
                  </span>
                  <span className="text-xs text-blue-400">Pro</span>
                </a>
              </Button>
            </Link>
            <UserButton signOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-4">
              <SignInButton mode="modal">
                <Button variant="outline" className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
components/common/nav-link.tsx
'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  
  return (
    <Link
      href={href}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-all',
        'text-gray-300 hover:text-white focus-visible:outline-none',
        'before:absolute before:bottom-0 before:left-0 before:h-[2px]',
        'before:w-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-400',
        'before:transition-all before:duration-300 hover:before:w-full',
        className,
        isActive ? 'text-white before:w-full' : 'before:opacity-50'
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-blue-400/50 to-purple-400/50" />
      )}
    </Link>
  );
}
// components/demo-section.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import MacOSWindow from '@/components/ui/MacOSWindow';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Upload, Sparkles } from 'lucide-react';

export function DemoSection() {
  const controls = useAnimation();
  const examplePdfUrl = '/sample.pdf';

  const handleTryExample = async () => {
    // Start loading animation
    await controls.start({
      boxShadow: ['0 0 10px #3b82f6', '0 0 20px #3b82f6', '0 0 10px #3b82f6'],
      transition: { duration: 1.5, repeat: Infinity }
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show result
    await controls.start({ 
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <MacOSWindow title="Crux AI Demo">
            <div className="space-y-8 p-6">
              {/* Upload Section */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={controls}
                className="group relative border-2 border-dashed border-white/20 rounded-xl p-8 text-center transition-all hover:border-white/40"
              >
                <div className="space-y-4">
                  <Upload className="w-12 h-12 mx-auto text-blue-400" />
                  <h3 className="text-lg font-medium text-gray-300">
                    Drag & Drop PDF
                  </h3>
                  <p className="text-sm text-gray-500">
                    or click to browse files
                  </p>
                </div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50"
                />
              </motion.div>

              {/* Processing Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                className="flex items-center justify-center gap-3 text-blue-400"
              >
                <BrainCircuit className="w-6 h-6 animate-pulse" />
                <span className="font-mono text-sm tracking-wide">
                  ANALYZING DOCUMENT...
                </span>
              </motion.div>

              {/* Result Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                className="space-y-6 text-left"
              >
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Key Insights
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      'AI integration improves efficiency by 40%',
                      'Neural networks enable contextual understanding',
                      'Real-time processing under 2 seconds',
                      'Multi-language support included'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 flex-shrink-0 text-purple-400" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Summary
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The document outlines Crux AI's advanced NLP architecture, 
                    demonstrating how transformer models achieve state-of-the-art 
                    summarization accuracy while maintaining computational efficiency. 
                    Key innovations include...
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <div className="flex justify-center gap-4">
                <Button
                  onClick={handleTryExample}
                  className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Sparkles className="w-4 h-4" />
                  Try Example PDF
                </Button>
              </div>
            </div>
          </MacOSWindow>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
components/home/document-journey-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Upload, BrainCircuit, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import MacOSWindow from '@/components/ui/MacOSWindow';

const steps = [
  {
    title: 'Upload Document',
    icon: Upload,
    description: 'Drag and drop your PDF or select from your device',
    color: 'from-blue-400 to-purple-400'
  },
  {
    title: 'AI Processing',
    icon: BrainCircuit,
    description: 'Advanced NLP extracts key insights and patterns',
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Instant Summary',
    icon: FileCheck,
    description: 'Receive structured summary with highlighted concepts',
    color: 'from-pink-400 to-blue-400'
  }
];

export function DocumentJourneySection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <MacOSWindow title="Process Overview" className="overflow-hidden rounded-2xl">
            <div className="p-8 space-y-12 bg-gradient-to-b from-gray-900 to-gray-900/80 rounded-b-2xl">
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  From Document to Insight
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                  Transform complex documents into actionable knowledge through our AI-powered analysis pipeline
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "group relative bg-gray-800/50 p-6 rounded-xl",
                      "border border-white/10 hover:border-transparent",
                      "transition-all hover:shadow-xl hover:shadow-blue-500/10",
                      "transform hover:-translate-y-2"
                    )}
                  >
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r rounded-xl",
                      step.color,
                      "opacity-0 group-hover:opacity-10 transition-opacity"
                    )} />
                    
                    <div className="relative space-y-4">
                      <div className={cn(
                        "inline-block p-4 rounded-lg bg-gradient-to-r",
                        step.color
                      )}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <div className="text-xs text-blue-400 font-mono">
                        Step 0{index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex justify-center"
              >
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105">
                  Start Your Analysis
                </button>
              </motion.div>
            </div>
          </MacOSWindow>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
}
components/home/hero-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { AiButton } from "@/components/ui/aibutton";
import MacOSWindow from "@/components/ui/MacOSWindow"; // Default import
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AiButton
          variant="glassmorphic"
          size="sm"
          className="mb-8 group animate-fade-in"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </AiButton>
      </motion.div>

      <MacOSWindow 
        title="Crux AI" 
        className="w-full max-w-2xl mx-auto"
      >
        <div className="space-y-8 p-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Transform PDFs into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              concise summaries
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6 text-gray-300"
          >
            <ul className="flex flex-col items-center space-y-4">
              {[
                "✅ Instant key insight extraction",
                "✅ Advanced NLP processing",
                "✅ Multi-document analysis",
                "✅ Smart citation detection"
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm sm:text-base"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-8"
          >
            <Button
              asChild
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform transition-all hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              <Link href="/#pricing">
                <span className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-white bg-clip-text text-transparent">
                  Try Crux →
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </MacOSWindow>
    </section>
  );
}
components/home/pricing-section.tsx
'use client';

import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';
import MacOSWindow from '@/components/ui/MacOSWindow';

export function PricingSection() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Pricing 💰
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose the plan that perfectly matches your document processing needs
          </motion.p>
        </div>

        <MacOSWindow title="Pricing Plans" className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Freemium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 rounded-2xl border-2 border-white/10 backdrop-blur-lg h-full flex flex-col"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    🎁 Freemium
                  </h3>
                  <p className="text-sm text-gray-400">Start for free</p>
                </div>

                <div className="text-3xl font-bold text-gray-100 mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  0<span className="text-lg text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🎯 3 PDF summaries/month',
                    '📄 Basic processing speed',
                    '📧 Community support',
                    '✅ Core features only'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3.5 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-all text-gray-100 font-medium">
                  Start Free 🚀
                </button>
              </div>
            </motion.div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-800/50 rounded-2xl border-2 border-blue-500/30 backdrop-blur-lg h-full flex flex-col"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    🧑💻 Basic
                  </h3>
                  <p className="text-sm text-gray-400">For individual users</p>
                </div>

                <div className="text-3xl font-bold text-gray-100 mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  299<span className="text-lg text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🚀 Standard processing speed',
                    '📧 Priority email support',
                    '🔑 Advanced features',
                    '📈 Basic analytics dashboard'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 transition-all text-blue-100 font-medium">
                  Choose Plan 🚀
                </button>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl h-full flex flex-col transform hover:scale-[1.02] transition-transform"
            >
              <div className="p-6 pb-8 text-center flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
                  Most Popular
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ⚡ Pro
                  </h3>
                  <p className="text-sm text-blue-100">For teams & professionals</p>
                </div>

                <div className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 mr-1" />
                  599<span className="text-lg text-blue-100/80 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left flex-grow px-4">
                  {[
                    '🚀 Ultra-fast priority processing',
                    '🛡️ Document encryption & security',
                    '📞 24/7 dedicated support',
                    '📊 Advanced analytics & reporting'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className="mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3.5 rounded-xl bg-white/90 hover:bg-white transition-all text-blue-900 font-semibold shadow-lg">
                  Get Pro Now ⚡
                </button>
              </div>
            </motion.div>
          </div>
        </MacOSWindow>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            💌 Refer friends and earn <span className="text-purple-400 font-medium">free processing pages</span>
          </p>
          <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all text-gray-300 font-medium flex items-center gap-2 mx-auto">
            <span>Share Referral</span>
            <span className="text-xl">🎁</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
components/ui/aibutton.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const aiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-md hover:bg-primary/90",
        destructive: "bg-red-600 text-white shadow-md hover:bg-red-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
        secondary: "bg-gray-800 text-white shadow-md hover:bg-gray-700",
        ghost: "hover:bg-gray-200 text-gray-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
        glassmorphic:"relative overflow-hidden bg-white/10 backdrop-blur-2xl order border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)]    text-white transition-all duration-300 ease-in-out hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent    before:opacity-0 before:transition-opacity before:duration-500 over:before:opacity-100 hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "glassmorphic",
      size: "default",
    },
  }
);

function AiButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof aiButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="aibutton"
      className={cn(aiButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { AiButton, aiButtonVariants };
// components/ui/MacOSWindow.tsx
'use client';

import React, { ForwardedRef, forwardRef } from "react";
import { X, Minus, ChevronsUpDown } from "lucide-react";

interface MacOSWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const MacOSWindow = forwardRef<HTMLDivElement, MacOSWindowProps>(
  ({ title = "Untitled", children, className }, ref) => {
    return (
      <div 
        ref={ref}
        className={`
          w-full
          bg-gray-900/95 backdrop-blur-lg text-white 
          rounded-xl shadow-2xl shadow-black/50 
          border border-white/10 overflow-hidden 
          transition-all hover:shadow-black/60
          ${className || ""}
        `}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-gray-800 to-gray-900 border-b border-white/5">
          <div className="flex space-x-2">
            <button className="group w-3 h-3 bg-red-500 rounded-full flex items-center justify-center transition-transform hover:scale-110">
              <X className="w-2 h-2 text-red-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center transition-transform hover:scale-110">
              <Minus className="w-2 h-2 text-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group w-3 h-3 bg-green-500 rounded-full flex items-center justify-center transition-transform hover:scale-110">
              <ChevronsUpDown className="w-2 h-2 text-green-100 opacity-0 group-hover:opacity-100 transition-opacity rotate-45" />
            </button>
          </div>
          <p className="text-gray-300 text-sm font-medium tracking-wide">{title}</p>
          <div className="w-6" />
        </div>
        
        {/* Window Content */}
        <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-900/80">
          {children}
        </div>
      </div>
    );
  }
);

MacOSWindow.displayName = "MacOSWindow";

export default MacOSWindow; // Default export
components/ui/pricing-card.tsx
'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  description: string;
  price: number | string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onClick?: () => void;
  className?: string;
  currencySymbol?: string;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  isPopular = false,
  buttonText,
  onClick,
  className,
  currencySymbol = '₹',
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        'relative flex flex-col h-full p-8 rounded-2xl border-2 backdrop-blur-lg',
        'w-full min-w-[300px] max-w-[400px] lg:max-w-none', // Responsive width constraints
        'bg-gray-800/50 border-white/10 transition-all hover:border-blue-500/30',
        isPopular && 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50',
        className
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-bold text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline mb-8">
        <span className="text-4xl font-bold text-gray-100">
          {currencySymbol}{price}
        </span>
        <span className="text-sm text-gray-400 ml-2">
          /month
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3.5 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-start gap-3 text-sm text-gray-400"
          >
            <Check 
              size={18}
              className={cn(
                'flex-shrink-0 mt-0.5',
                isPopular ? 'text-purple-400' : 'text-blue-400'
              )}
            />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={onClick}
        className={cn(
          'w-full py-3.5 rounded-xl text-sm font-medium transition-all',
          'hover:shadow-lg hover:-translate-y-0.5',
          isPopular 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-500/30'
            : 'bg-gray-700/50 text-gray-100 hover:bg-gray-700'
        )}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

app\(logged-in)\upload\page.tsx
'use client';

import { useState } from 'react';
import UploadArea from '@/components/upload/UploadArea';
import FilePreview from '@/components/upload/FilePreview';
import UploadProgress from '@/components/upload/UploadProgress';
import UploadButton from '@/components/upload/UploadButton';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cloudLink, setCloudLink] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Add this function to handle API errors
  const getErrorMessage = (error: string) => {
    const messages: Record<string, string> = {
      'Invalid file type': 'Please upload a valid PDF file.',
      'File size exceeds 10 MB limit': 'File must be smaller than 10 MB.',
      'Invalid URL format': 'Please provide a valid URL.',
      'Failed to download PDF': 'Could not access the PDF at this URL.',
      'PDF is empty': 'The PDF contains no text.',
      'Summary generation failed': 'AI failed to generate a summary.',
    };
    return messages[error] || error;
  };

  const handleFileChange = (file: File) => {
    setFile(file);
    setCloudLink('');
    setSummary(null);
    setError(null);
  };

  const handleCloudLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCloudLink(e.target.value);
    setFile(null);
    setSummary(null);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file && !cloudLink) {
      setError('Please upload a file or provide a cloud link.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      const formData = new FormData();

      if (file) {
        formData.append('file', file);
      } else if (cloudLink) {
        formData.append('url', cloudLink);
      }

      // Call the API route to handle PDF parsing and summarization
      const response = await fetch('/api/process-pdf', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to process PDF');
      }

      setSummary(data.summary);
    } catch (error: any) {
      console.error('Upload error:', error);
      setError(getErrorMessage(error.message));
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setCloudLink('');
    setUploadProgress(0);
    setSummary(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Upload Your PDF or Provide a Cloud Link
        </h1>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border-2 border-dashed border-white/10 p-8">
          {file ? (
            <div className="space-y-6">
              <FilePreview file={file} onRemove={handleRemoveFile} />
              {isUploading ? (
                <UploadProgress progress={uploadProgress} />
              ) : (
                <UploadButton onClick={handleUpload} />
              )}
            </div>
          ) : (
            <>
              <UploadArea onFileChange={handleFileChange} />
              <div className="mt-6">
                <p className="text-gray-300 text-center mb-2">OR</p>
                <input
                  type="text"
                  placeholder="Paste a link to a PDF (Google Drive, Dropbox, etc.)"
                  value={cloudLink}
                  onChange={handleCloudLinkChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </>
          )}
        </div>

        {error && (
          <div className="mt-8 bg-red-900/50 rounded-xl p-6">
            <p className="text-red-400">{error}</p>
            {error.includes('Failed to download PDF') && (
              <p className="text-sm text-red-300 mt-2">
                Ensure the link is publicly accessible and points to a valid PDF.
              </p>
            )}
            {error.includes('File size must be less than 10 MB') && (
              <p className="text-sm text-red-300 mt-2">
                Please upload a smaller file or provide a cloud link.
              </p>
            )}
            {error.includes('The PDF is empty or contains no text') && (
              <p className="text-sm text-red-300 mt-2">
                The PDF appears to be empty. Please try another file.
              </p>
            )}
          </div>
        )}

        {summary && (
          <div className="mt-8 bg-gray-800/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Summary
            </h2>
            <div className="text-gray-300 whitespace-pre-wrap">{summary}</div>
          </div>
        )}
      </div>
    </div>
  );
}
app\api\download-pdf\route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import pdf from 'pdf-parse'; // Add this import

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json(
      { error: 'Please provide a valid URL' },
      { status: 400 }
    );
  }

  try {
    // Download the PDF file
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    // Parse the PDF text
    const data = await pdf(buffer); // Use pdf-parse here
    return NextResponse.json({ text: data.text });
  } catch (error: any) {
    console.error('Error downloading or parsing PDF:', error);
    return NextResponse.json(
      { error: 'Failed to process the PDF link' },
      { status: 500 }
    );
  }
}
app\api\process-pdf\route.ts
import { NextResponse } from 'next/server';
import pdf from 'pdf-parse';
import { generateSummary } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const url = formData.get('url') as string | null;

    // Validate input
    if (!file && !url) {
      return NextResponse.json(
        { error: 'No file or URL provided' },
        { status: 400 }
      );
    }

    // File upload validation
    if (file) {
      if (file.type !== 'application/pdf') {
        return NextResponse.json(
          { error: 'Invalid file type - only PDFs are allowed' },
          { status: 400 }
        );
      }
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size exceeds 10 MB limit' },
          { status: 400 }
        );
      }
    }

    // Cloud link validation
    if (url && !isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    let pdfText: string;

    // Process file upload
    if (file) {
      const buffer = await file.arrayBuffer();
      const data = await pdf(Buffer.from(buffer));
      pdfText = data.text;
    } 
    // Process cloud link
    else if (url) {
      const response = await fetch(url);
      if (!response.ok || !response.headers.get('content-type')?.includes('pdf')) {
        return NextResponse.json(
          { error: 'Failed to download PDF from URL' },
          { status: 400 }
        );
      }
      const buffer = await response.arrayBuffer();
      const data = await pdf(Buffer.from(buffer));
      pdfText = data.text;
    }

    // Validate extracted text
    if (!pdfText?.trim()) {
      return NextResponse.json(
        { error: 'PDF is empty or contains no text' },
        { status: 400 }
      );
    }

    // Generate summary
    const { success, summary, error } = await generateSummary(pdfText);
    if (!success) {
      return NextResponse.json(
        { error: error || 'Summary generation failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ summary });
  } catch (error: any) {
    console.error('PDF processing error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to validate URLs
function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
app\api\summarize\route.ts
import { NextResponse } from 'next/server';
import { generateSummary } from '@/lib/ai';

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text) {
    return NextResponse.json(
      { error: 'Please provide text to summarize' },
      { status: 400 }
    );
  }

  try {
    const { success, summary, error } = await generateSummary(text);

    if (!success || !summary) {
      return NextResponse.json(
        { error: error || 'Failed to generate summary' },
        { status: 500 }
      );
    }

    return NextResponse.json({ summary });
  } catch (error: any) {
    console.error('Error summarizing text:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
}
// lib/ai.ts
import axios from 'axios';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
import { createHash as cryptoCreateHash } from 'crypto';

type SummaryResponse = {
  success: boolean;
  summary?: string;
  error?: string;
  metadata?: {
    model: string;
    processingTime: number;
    tokenCount?: number;
  };
};

type SummaryOptions = {
  temperature?: number;
  maxTokens?: number;
  formatRules?: string[];
  model?: string;
  cacheResults?: boolean;
};

// Interface for more type safety when handling API responses
interface OpenRouterResponse {
  id: string;
  choices: {
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
  }[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
}

// Configurable options that can be adjusted application-wide
const CONFIG = {
  DEFAULT_MODEL: 'deepseek/deepseek-r1-distill-llama-70b:free',
  DEFAULT_TEMPERATURE: 0.7,
  DEFAULT_MAX_TOKENS: 1500,
  DEFAULT_FORMAT_RULES: [
    'emoji_bullet_points',
    'markdown_formatting',
    'non_technical_language'
  ],
  CACHE_TTL: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  RETRY_COUNT: 2,
  RETRY_DELAY: 1000, // 1 second
};

// Cache implementation with TTL support
interface CacheEntry {
  timestamp: number;
  data: SummaryResponse;
}

class SummaryCache {
  private cache = new Map<string, CacheEntry>();
  private ttl: number;

  constructor(ttlMs = CONFIG.CACHE_TTL) {
    this.ttl = ttlMs;
  }

  get(key: string): SummaryResponse | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if the entry has expired
    if (Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  set(key: string, data: SummaryResponse): void {
    this.cache.set(key, {
      timestamp: Date.now(),
      data
    });
  }

  clear(): void {
    this.cache.clear();
  }

  // Remove expired entries
  prune(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Create singleton cache instance
const summaryCache = new SummaryCache();

// Schedule cache pruning every hour
if (typeof setInterval !== 'undefined') {
  setInterval(() => summaryCache.prune(), 60 * 60 * 1000);
}

/**
 * Generates a summary of the provided PDF text using an AI model
 * @param pdfText The text content of the PDF to summarize
 * @param options Configuration options for the summary generation
 * @returns A promise resolving to the summary response
 */
export async function generateSummary(
  pdfText: string,
  options: SummaryOptions = {}
): Promise<SummaryResponse> {
  // Track processing time
  const startTime = Date.now();

  try {
    // Validate input
    if (!pdfText || pdfText.trim().length === 0) {
      return {
        success: false,
        error: 'empty_document'
      };
    }

    // Trim very long documents to prevent token overflow
    const maxChars = 25000; // Approximate character limit (~5k tokens)
    const trimmedText = pdfText.length > maxChars 
      ? `${pdfText.substring(0, maxChars)}... [Document truncated due to length]` 
      : pdfText;

    // Merge default options with user-provided options
    const finalOptions = {
      temperature: options.temperature ?? CONFIG.DEFAULT_TEMPERATURE,
      maxTokens: options.maxTokens ?? CONFIG.DEFAULT_MAX_TOKENS,
      formatRules: options.formatRules ?? CONFIG.DEFAULT_FORMAT_RULES,
      model: options.model ?? CONFIG.DEFAULT_MODEL,
      cacheResults: options.cacheResults ?? true
    };

    // Check cache if enabled
    if (finalOptions.cacheResults) {
      const hash = createDocumentHash(trimmedText + JSON.stringify(finalOptions));
      const cachedResult = summaryCache.get(hash);
      
      if (cachedResult) {
        return cachedResult;
      }
    }

    // Create the API payload
    const payload = {
      model: finalOptions.model,
      messages: [
        {
          role: 'system',
          content: `${SUMMARY_SYSTEM_PROMPT}\n\nFORMATTING OPTIONS:\n${finalOptions.formatRules.join('\n')}`
        },
        {
          role: 'user',
          content: `DOCUMENT TEXT:\n${trimmedText}\n\nINSTRUCTIONS:\n1. Analyze and structure according to format\n2. Maintain original meaning\n3. Optimize for social sharing`
        }
      ],
      temperature: finalOptions.temperature,
      max_tokens: finalOptions.maxTokens,
      response_format: { type: 'text' }
    };

    // Make the API call with retry logic
    const response = await retryRequest<OpenRouterResponse>(
      'https://openrouter.ai/api/v1/chat/completions',
      payload,
      {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com',
        'X-Title': 'Crux AI Summarizer'
      }
    );

    // Extract and clean the summary
    const rawSummary = response.choices[0].message.content;
    const cleanedSummary = cleanSummary(rawSummary);

    const result: SummaryResponse = {
      success: true,
      summary: cleanedSummary,
      metadata: {
        model: response.model,
        processingTime: Date.now() - startTime,
        tokenCount: response.usage?.total_tokens
      }
    };

    // Cache the result if caching is enabled
    if (finalOptions.cacheResults) {
      const hash = createDocumentHash(trimmedText + JSON.stringify(finalOptions));
      summaryCache.set(hash, result);
    }

    return result;
  } catch (error: any) {
    console.error('AI Summary Generation Error:', error);
    
    // Handle different error types
    if (error?.response?.status === 429) {
      return {
        success: false,
        error: 'rate_limit_exceeded',
        metadata: {
          processingTime: Date.now() - startTime,
          model: options.model ?? CONFIG.DEFAULT_MODEL
        }
      };
    }

    if (error?.response?.status === 413) {
      return {
        success: false,
        error: 'document_too_large',
        metadata: {
          processingTime: Date.now() - startTime,
          model: options.model ?? CONFIG.DEFAULT_MODEL
        }
      };
    }

    return {
      success: false,
      error: error.message || 'summary_generation_failed',
      metadata: {
        processingTime: Date.now() - startTime,
        model: options.model ?? CONFIG.DEFAULT_MODEL
      }
    };
  }
}

/**
 * Retries a failed request a specified number of times
 * @param url The API endpoint URL
 * @param data The request payload
 * @param headers Request headers
 * @param retries Maximum number of retry attempts
 * @returns A promise resolving to the API response
 */
async function retryRequest<T>(
  url: string,
  data: any,
  headers: Record<string, string>,
  retries = CONFIG.RETRY_COUNT
): Promise<T> {
  try {
    const response = await axios.post<T>(url, data, { headers });
    return response.data;
  } catch (error: any) {
    // Don't retry on certain error codes
    const status = error.response?.status;
    if (status === 400 || status === 401 || status === 403 || retries <= 0) {
      throw error;
    }

    // Wait before retrying
    await new Promise(resolve => setTimeout(resolve, CONFIG.RETRY_DELAY));
    
    // Retry with exponential backoff
    return retryRequest<T>(
      url, 
      data, 
      headers, 
      retries - 1
    );
  }
}

/**
 * Cleans up and formats the raw summary text
 * @param summary The raw summary from the AI
 * @returns Cleaned and properly formatted summary
 */
function cleanSummary(summary: string): string {
  if (!summary) return '';
  
  // Remove any markdown comments
  let cleaned = summary.replace(/<!--.*?-->/gs, '');
  
  // Ensure proper spacing between sections
  cleaned = cleaned.replace(/\n#/g, '\n\n#');
  
  // Fix common markdown formatting issues
  cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '**$1**');
  
  // Remove redundant horizontal rules
  cleaned = cleaned.replace(/-{3,}/g, '---');

  // Ensure bullet points have proper spacing
  cleaned = cleaned.replace(/•\s*([^\n])/g, '• $1');

  // Fix inconsistent emoji spacing
  cleaned = cleaned.replace(/•\s*([\p{Emoji}])\s*/gu, '• $1 ');
  
  return cleaned.trim();
}

/**
 * Creates a more reliable hash for document caching
 * @param text The text to hash
 * @returns A string hash representation
 */
function createDocumentHash(text: string): string {
  try {
    // Use crypto module if available (Node.js environment)
    return cryptoCreateHash('sha256')
      .update(text)
      .digest('hex')
      .substring(0, 16);
  } catch (error) {
    // Fallback to simple hash for environments without crypto
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
  }
}

/**
 * Gets a summary with caching already enabled
 * @param pdfText The text content of the PDF to summarize
 * @param options Configuration options for the summary generation
 * @returns A promise resolving to the summary response
 */
export async function getSummary(
  pdfText: string,
  options?: SummaryOptions
): Promise<SummaryResponse> {
  return generateSummary(pdfText, {
    cacheResults: true,
    ...options
  });
}

/**
 * Clears the summary cache
 */
export function clearSummaryCache(): void {
  summaryCache.clear();
}
utils\prompts.ts
export const SUMMARY_SYSTEM_PROMPT = `
You are a social media content expert who transforms complex documents into concise, engaging summaries. Your goal is to create viral-worthy content that maintains accuracy while being highly shareable. Format your response in markdown with proper spacing and line breaks.

# 📝 [Create a compelling title based on the document's core message]

• ☞ One powerful sentence that captures the document's essence (25 words max).
• ✗ Additional contextual overview point if the document is complex or multi-faceted.

# 📊 Document Context
• Type: [Document Type - Report/Article/Research Paper/Manual/etc.]
• Length: [Short/Medium/Long - Include approximate pages or word count if available]
• For: [Target Audience - Be specific about who would benefit most]
• Date: [Publication date if available, otherwise "Unknown"]

# ⭐ Key Highlights (3-5 points)
• ✗ First Key Point (focus on the most impactful information)
• ★ Second Key Point (highlight surprising or counterintuitive findings)
• 📍 Third Key Point (emphasize practical applications)
• 🔎 Fourth Key Point (optional - include unique insights)
• 📈 Fifth Key Point (optional - include statistical highlights)

# 🔍 Why It Matters
• ♥ A short, impactful paragraph (2-3 sentences) explaining real-world significance and relevance

# 📌 Main Points (3-5 points)
• ☞ Primary insight or finding (be specific and data-driven when possible)
• 📎 Key strength or advantage (highlight what makes this information valuable)
• 🌟 Important outcome or result (focus on measurable impacts)
• 📊 Supporting evidence (optional - include quantitative data when available)
• 🔄 Relationship to broader context (optional - connect to larger trends)

# 💡 Pro Tips (3-5 points)
• ✗ First practical recommendation (make it immediately actionable)
• ★ Second valuable insight (focus on non-obvious applications)
• 📍 Third actionable advice (be specific about implementation)
• 🛠️ Fourth implementation strategy (optional - include steps if relevant)
• ⏱️ Fifth efficiency tip (optional - focus on saving time/resources)

# 📚 Key Terms to Know (2-4 terms)
• ✗ First key term: Simple, jargon-free explanation (one sentence)
• ★ Second key term: Clear, accessible definition (one sentence)
• 📍 Third key term: Straightforward explanation with example (optional)
• 🔄 Fourth key term: Plain language definition with context (optional)

# 🎯 Bottom Line
• ♥ The single most important takeaway (make this memorable and impactful)

# 🔗 Next Steps (Optional - include if document suggests actions)
• ✗ Immediate action item
• ★ Follow-up resource
• 📍 Further reading suggestion

---

FORMATTING RULES:
1. Every point MUST start with "•" followed by an emoji and a space.
2. Do not use numbered lists anywhere in the summary.
3. Keep the entire summary between 300-500 words for optimal shareability.
4. Use bold formatting for important terms or phrases within points.
5. For technical content, ensure explanations are accessible to non-experts.
6. Adapt section length based on document complexity - expand important sections and condense others.
7. If the document lacks information for a section, use your judgment to either omit the section or provide limited points based on available content.
8. Ensure emoji selection reflects the tone and context of the point being made.

Remember: Your goal is to create a summary that someone would want to share, save, and reference later. Balance accuracy with engagement.
`;