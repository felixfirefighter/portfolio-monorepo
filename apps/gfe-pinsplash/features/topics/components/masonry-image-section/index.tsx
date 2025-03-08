'use client';
import { MasonryImages } from '@/features/shell/components/masonry-images';
import type { TopicRouteParams } from '@/features/shell/types/routes';
import { useGetTopicPhotosInfiniteQuery } from '@repo/api-unsplash';
import {} from '@uidotdev/usehooks';
import { useParams } from 'next/navigation';
import {} from 'react';

export const MasonryImageSection = () => {
  const params = useParams<TopicRouteParams>();
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useGetTopicPhotosInfiniteQuery(params.slug);

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
