'use client';
import { MasonryImages } from '@/features/shell/components/masonry-images';
import { useGetPhotosInfiniteQuery } from '@repo/api-unsplash';
import {} from '@uidotdev/usehooks';
import {} from 'react';

export const MasonryImageSection = () => {
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useGetPhotosInfiniteQuery();

  return (
    <MasonryImages
      data={data}
      isFetching={isFetching}
      fetchNextPage={fetchNextPage}
      error={error}
      isLoading={isLoading}
    />
  );
};
