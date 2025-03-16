'use client';

import { FileText, X } from 'lucide-react';
import { Button } from '../ui/button';

export default function FilePreview({ file, onRemove }: { file: File; onRemove: () => void }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center gap-3">
        <FileText className="w-6 h-6 text-blue-400" />
        <span className="text-gray-300">{file.name}</span>
        <span className="text-sm text-gray-400">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </span>
      </div>
      <Button
        onClick={onRemove}
        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
}