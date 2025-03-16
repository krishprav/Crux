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