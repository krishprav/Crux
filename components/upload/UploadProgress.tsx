'use client';

import { Progress } from '@/components/ui/progress';

interface UploadProgressProps {
  progress: number;
}

export default function UploadProgress({ progress }: UploadProgressProps) {
  return (
    <div className="space-y-4">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-gray-400 text-center">
        Uploading... {progress}%
      </p>
    </div>
  );
}