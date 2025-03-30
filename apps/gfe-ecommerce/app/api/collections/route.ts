import { getAllCollections } from '@repo/db-ecommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const collections = await getAllCollections();
    return NextResponse.json(collections);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json(
      { error: 'Failed to fetch collections' },
      { status: 500 }
    );
  }
}
