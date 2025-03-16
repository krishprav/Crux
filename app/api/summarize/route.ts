import { NextResponse } from 'next/server';
import { generateSummary } from '@/lib/ai';

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text) {
    return NextResponse.json(
      { error: 'Please provide text to summarize' },
      { status: 400 }
    );
  }

  try {
    const { success, summary, error } = await generateSummary(text);

    if (!success || !summary) {
      return NextResponse.json(
        { error: error || 'Failed to generate summary' },
        { status: 500 }
      );
    }

    return NextResponse.json({ summary });
  } catch (error: any) {
    console.error('Error summarizing text:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
}