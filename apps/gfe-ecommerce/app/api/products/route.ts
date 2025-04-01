import { getProducts } from '@repo/db-ecommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await getProducts({});
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
