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