'use client';

import { useGetProductsQuery } from '@repo/api-ecommerce';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import Link from 'next/link';

export const ProductsSection = () => {
  const { data: products, isFetching } = useGetProductsQuery({});

  if (isFetching || !products) {
    return null;
  }

  return (
    <section className="container py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-xl">Latest Arrivals</h2>
        <Link
          href="/all-products"
          className="text-gray-600 text-sm hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden border-none shadow-none"
          >
            <CardContent className="p-0">
              <div className="relative">
                {/* <Image
                  src={product}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="h-auto w-full rounded-md"
                /> */}
              </div>
              {/* <div className="mt-2">
                <p className="text-gray-500 text-sm">{product.color}</p>
                <h3 className="font-medium">{product.name}</h3>
                <p className="mt-1 text-sm">${product.price}</p>
                <div className="mt-2 flex space-x-2">
                  {product.colorOptions.map((option) => (
                    <div
                      key={option.color}
                      className={`h-5 w-5 cursor-pointer rounded-full ${
                        option.color === product.selectedColor
                          ? 'ring-2 ring-gray-400 ring-offset-1'
                          : ''
                      }`}
                      style={{ backgroundColor: option.hex }}
                    />
                  ))}
                </div>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
