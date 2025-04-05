'use client';

import { formatCentsToDollars } from '@/features/store/utils/format';
import { useGetProductsQuery } from '@repo/api-ecommerce';
import { Button } from '@repo/design-system/components/ui/button';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsSection = () => {
  const { data, isFetching } = useGetProductsQuery({});

  console.log('products', data);

  if (isFetching || !data) {
    return (
      <div className="container grid grid-cols-1 gap-8 py-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="p-0">
              <Skeleton className="aspect-square w-full rounded-md" />
              <Skeleton className="my-4" />
              <Skeleton className="my-2 h-6 rounded-md" />

              <Skeleton className="my-2 h-6 w-16 rounded-md" />
              <Skeleton className="my-2 h-6 w-32 rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
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

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {data.products.map((product) => {
          return (
            <Card key={product.productId} className="border-none shadow-none">
              <CardContent className="p-0">
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="aspect-square h-auto w-full rounded-md object-cover"
                  />
                )}
                <div className="py-4">
                  <h3 className="mb-2 font-medium text-lg text-neutral-900 md:text-2xl">
                    {product.name}
                  </h3>
                  <div className="mb-4 flex items-center gap-2 ">
                    <span className="text-neutral-500 md:text-xl">
                      {formatCentsToDollars(
                        product.salePrice || product.listPrice || 0
                      )}
                    </span>
                    {product.salePrice !== product.listPrice && (
                      <span className="text-neutral-500 text-xs line-through md:text-lg">
                        {formatCentsToDollars(product.listPrice || 0)}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-neutral-300 md:h-5 md:w-5"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
