import { NextResponse } from 'next/server';
import pdf from 'pdf-parse';
import { generateSummary } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const url = formData.get('url') as string | null;

    // Validate input
    if (!file && !url) {
      return NextResponse.json(
        { error: 'No file or URL provided' },
        { status: 400 }
      );
    }

    // File validation
    if (file) {
      if (file.type !== 'application/pdf') {
        return NextResponse.json(
          { error: 'Invalid file type - only PDFs are allowed' },
          { status: 400 }
        );
      }
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size exceeds 10MB limit' },
          { status: 400 }
        );
      }
    }

    // URL validation
    if (url) {
      try {
        new URL(url);
      } catch {
        return NextResponse.json(
          { error: 'Invalid URL format' },
          { status: 400 }
        );
      }
    }

    // Process PDF
    let pdfText: string;
    
    if (file) {
      const buffer = await file.arrayBuffer();
      const data = await pdf(Buffer.from(buffer));
      pdfText = data.text;
    } else if (url) {
      const response = await fetch(url);
      if (!response.ok || !response.headers.get('content-type')?.includes('pdf')) {
        return NextResponse.json(
          { error: 'Failed to download PDF from URL' },
          { status: 400 }
        );
      }
      const buffer = await response.arrayBuffer();
      const data = await pdf(Buffer.from(buffer));
      pdfText = data.text;
    }

    // Validate text content
    if (!pdfText?.trim()) {
      return NextResponse.json(
        { error: 'PDF contains no extractable text' },
        { status: 400 }
      );
    }

    // Generate summary
    const { success, summary, error } = await generateSummary(pdfText);
    if (!success) {
      return NextResponse.json(
        { error: error || 'Summary generation failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ summary });

  } catch (error: any) {
    console.error('PDF processing error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}