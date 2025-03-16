'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UploadFormInputProps {
  onChange: (file: File) => void;
}

export default function UploadFormInput({ onChange }: UploadFormInputProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="flex justify-end items-center">
      <Input
        type="file"
        name="file"
        accept="application/pdf"
        required
        onChange={handleFileChange}
        className="mr-2"
      />
      <Button type="submit">Upload your PDF</Button>
    </div>
  );
}