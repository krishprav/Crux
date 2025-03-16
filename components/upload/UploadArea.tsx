'use client';

import { UploadCloud } from 'lucide-react';

export default function UploadArea({ onFileChange }: { onFileChange: (file: File) => void }) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileChange(file);
  };

  return (
    <label className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
      <div className="p-4 bg-gray-800 rounded-full">
        <UploadCloud className="w-8 h-8 text-blue-400" />
      </div>
      <p className="text-gray-300 text-center">
        <span className="text-blue-400">Click to upload</span> or drag and drop
      </p>
      <p className="text-sm text-gray-400">PDF files only (Max 100MB)</p>
      <input
        type="file"
        className="hidden"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </label>
  );
}