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