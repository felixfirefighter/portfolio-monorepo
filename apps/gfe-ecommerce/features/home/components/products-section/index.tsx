'use client';

import { useGetProductsQuery } from '@repo/api-ecommerce';
import { Button } from '@repo/design-system/components/ui/button';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsSection = () => {
  const { data, isFetching } = useGetProductsQuery({});

  console.log('products', data);

  if (isFetching || !data) {
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
        {data.products.map((product) => {
          return (
            <Card
              key={product.productId}
              className="overflow-hidden border-none shadow-none"
            >
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
                  <h3 className="mb-2 font-medium text-lg text-neutral-900">
                    {product.name}
                  </h3>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-neutral-500">
                      ${product.salePrice || product.listPrice}
                    </span>
                    {product.salePrice !== product.listPrice && (
                      <span className="text-neutral-500 text-xs line-through">
                        ${product.listPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-neutral-300"
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
