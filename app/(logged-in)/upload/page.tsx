'use client';
import { useState } from 'react';
import UploadArea from '@/components/upload/UploadArea';
import FilePreview from '@/components/upload/FilePreview';
import UploadProgress from '@/components/upload/UploadProgress';
import UploadButton from '@/components/upload/UploadButton';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cloudLink, setCloudLink] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const errorMessages: Record<string, string> = {
    'Invalid file type': 'Please upload a valid PDF file (max 10MB)',
    'File size exceeds 10MB limit': 'File must be smaller than 10MB',
    'Invalid URL format': 'Please provide a valid HTTPS URL',
    'Failed to download PDF': 'Could not access PDF at this URL',
    'PDF contains no extractable text': 'The PDF appears to be empty',
    'default': 'An error occurred during processing'
  };

  const handleUpload = async () => {
    setError(null);
    setSummary(null);
    
    if (!file && !cloudLink) {
      setError('Please upload a file or provide a PDF link');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      if (cloudLink) formData.append('url', cloudLink);

      const response = await fetch('/api/process-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Processing failed');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error: any) {
      const message = errorMessages[error.message] || errorMessages.default;
      setError(message);
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setCloudLink('');
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          PDF Analysis Platform
        </h1>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border-2 border-dashed border-white/10 p-8">
          {file ? (
            <div className="space-y-6">
              <FilePreview file={file} onRemove={handleRemoveFile} />
              {isUploading ? (
                <UploadProgress progress={uploadProgress} />
              ) : (
<UploadButton
  onClick={handleUpload}
  disabled={!file && !cloudLink} // Disable if no file or link
  loading={isUploading} // Show loading state
  success={!!summary} // Show success state if summary exists
  error={!!error} // Show error state if error exists
  disabledMessage="Please upload a file or provide a cloud link"
/>
)}
            </div>
          ) : (
            <>
              <UploadArea onFileChange={setFile} />
              <div className="mt-6">
                <p className="text-gray-300 text-center mb-2">OR</p>
                <input
                  type="text"
                  placeholder="Enter PDF URL (Google Drive, Dropbox, etc.)"
                  value={cloudLink}
                  onChange={(e) => setCloudLink(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          )}
        </div>

        {error && (
          <div className="mt-8 bg-red-900/20 rounded-xl p-6 border border-red-800/50">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {summary && (
          <div className="mt-8 bg-gray-800/20 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Analysis Result
            </h2>
            <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {summary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}