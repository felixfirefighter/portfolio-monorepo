'use client';
import { SkeletonGrid } from '@/features/home/components/skeleton-grid';
import { UnsplashImage } from '@/features/shell/components/unsplash-image';
import { RiLoader4Line } from '@remixicon/react';
import { useGetPhotosInfiniteQuery } from '@repo/api-unsplash';
import { useIntersectionObserver, useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useMemo } from 'react';
import { mapPhotosToColumns } from '../../utils/map-photos-to-columns';

export const ImageListContainer = () => {
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useGetPhotosInfiniteQuery();
  const windowSize = useWindowSize();
  // Observer hook
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (entry?.isIntersecting && !isFetching && !error) {
      fetchNextPage();
    }
  }, [entry, error, isFetching, fetchNextPage]);

  const photoColumns = useMemo(() => {
    if (!windowSize?.width || !data?.pages?.length) {
      return [];
    }

    return mapPhotosToColumns(data.pages.flat(), windowSize.width);
  }, [data, windowSize]);

  if (isLoading) {
    return <SkeletonGrid />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center gap-2 text-neutral-600">
        <p>An error has occured! 😭</p>
      </div>
    );
  }

  return (
    <section className="container">
      <div className="flex gap-2">
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-1 flex-col gap-2">
            {column.map((photo) => (
              <UnsplashImage photo={photo} key={photo.id} />
            ))}
          </div>
        ))}
      </div>
      <div ref={ref} className="h-1" />
      {isFetching && (
        <div className="flex justify-center gap-2 text-neutral-600">
          <RiLoader4Line className="animate-spin" /> <p>Loading more...</p>
        </div>
      )}
    </section>
  );
};
