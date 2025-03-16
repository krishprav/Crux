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