'use client';

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  return (
    <div className={`w-full bg-gray-700 rounded-full h-2 ${className || ''}`}>
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}