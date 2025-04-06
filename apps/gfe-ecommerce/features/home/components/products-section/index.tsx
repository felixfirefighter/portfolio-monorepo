'use client';

import { ProductsSectionList } from '@/features/home/components/products-section-list';
import { Button } from '@repo/design-system/components/ui/button';
import {} from '@repo/design-system/components/ui/card';
import Link from 'next/link';

export const ProductsSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <div className="mb-6 flex items-center justify-between lg:mb-8">
        <h2 className="font-semibold text-2xl xl:text-3xl">Latest Arrivals</h2>
        <Link
          href="/all-products"
          className="text-gray-600 text-sm hover:underline"
        >
          <Button variant={'outline'}>View All</Button>
        </Link>
      </div>

      <ProductsSectionList />
    </section>
  );
};
