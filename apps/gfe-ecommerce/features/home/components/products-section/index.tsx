'use client';

import { useGetProductsQuery } from '@repo/api-ecommerce';
import { Button } from '@repo/design-system/components/ui/button';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsSection = () => {
  const { data: products, isFetching } = useGetProductsQuery({});

  if (isFetching || !products) {
    return null;
  }

  return (
    <section className="container py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Latest Arrivals</h2>
        <Link
          href="/all-products"
          className="text-gray-600 text-sm hover:underline"
        >
          <Button variant={'outline'}>View All</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {products.map((product) => {
          const productImage = product.images[0];
          return (
            <Card
              key={product.id}
              className="overflow-hidden border-none shadow-none"
            >
              <CardContent className="p-0">
                <Image
                  src={productImage.imageUrl}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="aspect-square h-auto w-full rounded-md object-cover"
                />
                <div className="pt-4">
                  <p className="text-neutral-600 text-xs capitalize">
                    {productImage.color}
                  </p>
                  <h3 className="font-medium text-lg text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="text-lg text-neutral-500">{}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
