'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'; // Import a spinner icon

interface UploadButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean; // Add loading state
}

export default function UploadButton({ onClick, disabled, loading }: UploadButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading} // Disable button when loading
      className="w-full py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" /> {/* Spinner */}
          Processing...
        </div>
      ) : (
        'Process PDF'
      )}
    </Button>
  );
}