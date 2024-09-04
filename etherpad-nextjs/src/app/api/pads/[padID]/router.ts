import { NextResponse } from 'next/server';
import { getPadContent, setPadContent } from '../../../../utils/etherpad';

export async function GET(request: Request, { params }: { params: { padID: string } }) {
  try {
    const content = await getPadContent(params.padID);
    return NextResponse.json(content.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pad content' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { padID: string } }) {
  try {
    const { text } = await request.json();
    await setPadContent(params.padID, text);
    return NextResponse.json({ message: 'Pad updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update pad' }, { status: 500 });
  }
}
