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