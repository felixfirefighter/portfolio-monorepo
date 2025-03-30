'use client';

import Image from 'next/image';

import { useGetCollectionsQuery } from '@repo/api-ecommerce/api/collections';

export const CollectionsSection = () => {
  const { data: collections, error, isLoading } = useGetCollectionsQuery();

  if (isLoading || !collections) {
    return null;
  }

  return (
    <div className="flex-col items-center p-4">
      <h2 className="mb-4 font-semibold text-xl">Our Collections</h2>
      <div className="flex w-full max-w-sm flex-col gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              width={300}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p className="font-semibold text-sm">{collection.title}</p>
              <p className="text-xs">{collection.description}</p>
            </div>
          </div>
        ))}{' '}
      </div>
    </div>
  );
};
