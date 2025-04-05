'use client';

import Image from 'next/image';

import { useGetCollectionsQuery } from '@repo/api-ecommerce/api/collections';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { cn } from '@repo/design-system/lib/utils';

export const CollectionsSection = () => {
  const { data: collections, isLoading } = useGetCollectionsQuery();

  if (isLoading || !collections) {
    return (
      <section className="container grid grid-cols-1 gap-6 py-20 md:grid-cols-2">
        <Skeleton className="height-full col-span-1 row-span-2 w-full rounded-lg" />
        <Skeleton className="h-[360px] w-full rounded-lg" />
        <Skeleton className="h-[360px] w-full rounded-lg" />
      </section>
    );
  }

  return (
    <section className="container py-20">
      <h2 className="mb-8 font-semibold text-2xl">Our Collections</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {collections.map((collection, index) => (
          <div
            key={index}
            className={cn('relative rounded-lg shadow-md md:h-full', {
              'col-span-1 row-span-2 h-[580px]': index === 0,
              'col-span-1 row-span-1 h-[360px]': index > 0,
            })}
          >
            <Image
              src={collection.imageUrl}
              alt={collection.name}
              width={320}
              height={580}
              className={cn('h-full w-full rounded-lg object-cover', {
                'col-span-1 row-span-2': index === 0,
                'col-span-1 row-span-1 h-[360px]': index > 0,
              })}
            />
            <div className="absolute top-0 bottom-0 left-0 flex w-full items-end rounded-lg bg-black/20 p-4 text-white">
              <div>
                <p className="text-sm">{collection.name}</p>
                <p className="font-medium text-lg">{collection.description}</p>
              </div>
            </div>
          </div>
        ))}{' '}
      </div>
    </section>
  );
};
