import { getProductOverview } from '@repo/db-ecommerce';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Pass the productId to your database function
    const productOverview = await getProductOverview({ productId });
    return NextResponse.json(productOverview);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product overview' },
      { status: 500 }
    );
  }
}
