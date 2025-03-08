'use client';
import { PinsplashImage } from '@/features/shell/components/pinsplash-image';
import { SkeletonGrid } from '@/features/shell/components/skeleton-grid';
import { mapPhotosToColumns } from '@/features/shell/utils/map-photos-to-columns';
import type { SerializedError } from '@reduxjs/toolkit';
import type { InfiniteData } from '@reduxjs/toolkit/query';
import { RiLoader4Line } from '@remixicon/react';
import type { UnsplashPhoto } from '@repo/api-unsplash';
import { useIntersectionObserver, useWindowSize } from '@uidotdev/usehooks';
import type React from 'react';
import { useEffect, useMemo } from 'react';

type Props = {
  data: InfiniteData<UnsplashPhoto[], number> | undefined;
  isFetching: boolean;
  isLoading: boolean;
  error: SerializedError | undefined;
  fetchNextPage: () => void;
};

export const MasonryImages: React.FC<Props> = (props) => {
  const { data, isFetching, fetchNextPage, error, isLoading } = props;
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

    return mapPhotosToColumns(data.pages, windowSize.width);
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
    <section className="container py-4">
      <div className="flex gap-2">
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-1 flex-col gap-2">
            {column.map((photo) => (
              <PinsplashImage photo={photo} key={photo.id} />
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
