import { NextResponse } from 'next/server';
import content from '@/data/content.json';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(content);
}
