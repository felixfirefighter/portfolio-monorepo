'use client';
import { MasonryImages } from '@/features/shell/components/masonry-images';
import type { PhotoRouteParams } from '@/features/shell/types/routes';
import { useGetRelatedPhotosInfiniteQuery } from '@repo/api-unsplash';
import { useParams } from 'next/navigation';

export const RelatedPhotosSection = () => {
  const params = useParams<PhotoRouteParams>();
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useGetRelatedPhotosInfiniteQuery(params.id);

  return (
    <>
      <div className="container">
        <h2 className="font-semibold text-2xl">Related images</h2>
      </div>
      <MasonryImages
        data={data}
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};
