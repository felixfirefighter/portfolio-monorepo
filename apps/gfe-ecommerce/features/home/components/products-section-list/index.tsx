import { routes } from '@/features/shell/config/routes';
import { formatCentsToDollars } from '@/features/store/utils/format';
import { useGetProductsQuery } from '@repo/api-ecommerce';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsSectionList = () => {
  const { data, isFetching } = useGetProductsQuery({});

  if (isFetching || !data) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="border-none shadow-none">
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="my-4" />
            <Skeleton className="my-2 h-6 rounded-md" />

            <Skeleton className="my-2 h-6 w-16 rounded-md" />
            <Skeleton className="my-2 h-6 w-32 rounded-md" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      {data.products.map((product) => {
        return (
          <Link
            key={product.productId}
            href={routes.products(product.productId)}
          >
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={540}
                height={540}
                className="aspect-square h-auto w-full rounded-md object-cover"
              />
            )}
            <div className="py-4">
              <h3 className="mb-2 font-medium text-lg text-neutral-900 md:text-2xl">
                {product.name}
              </h3>
              <div className="mb-4 flex items-center gap-2">
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
          </Link>
        );
      })}
    </div>
  );
};
