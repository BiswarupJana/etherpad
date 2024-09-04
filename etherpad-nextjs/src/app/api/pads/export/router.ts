import { NextResponse } from 'next/server';
import { getPadContent } from '@/utils/etherpad';
import { createPDF } from '@/utils/pdf';

export async function GET(request: Request, { searchParams }: { searchParams: URLSearchParams }) {
  const padID = searchParams.get('padID');

  try {
    if (!padID) {
      return NextResponse.json({ error: 'padID is required' }, { status: 400 });
    }
    const response = await getPadContent(padID);
    const pdfBytes = await createPDF(response.data.text);

    return new Response(pdfBytes, {
      headers: { 'Content-Type': 'application/pdf' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to export PDF' }, { status: 500 });
  }
}
