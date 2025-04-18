import { getProducts } from '@repo/db-ecommerce';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productIdToExclude =
      searchParams.get('productIdToExclude') ?? undefined;
    const limit = searchParams.get('limit') ?? undefined;
    const offset = searchParams.get('offset') ?? undefined;
    const collectionId = searchParams.get('collectionId') ?? undefined;

    const products = await getProducts({
      productIdToExclude,
      limit: Number(limit),
      offset: Number(offset),
      collectionId,
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
