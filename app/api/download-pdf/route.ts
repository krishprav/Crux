import { NextResponse } from 'next/server';
import axios from 'axios';
import pdf from 'pdf-parse'; 
export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json(
      { error: 'Please provide a valid URL' },
      { status: 400 }
    );
  }

  try {
    // Download the PDF file
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    // Parse the PDF text
    const data = await pdf(buffer); 
    return NextResponse.json({ text: data.text });
  } catch (error: any) {
    console.error('Error downloading or parsing PDF:', error);
    return NextResponse.json(
      { error: 'Failed to process the PDF link' },
      { status: 500 }
    );
  }
}