'use client';
import { SkeletonGrid } from '@/features/home/components/skeleton-grid';
import { UnsplashImage } from '@/features/shell/components/unsplash-image';
import { RiLoader4Line } from '@remixicon/react';
import { useGetPhotosInfiniteQuery } from '@repo/api-unsplash';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect } from 'react';

export const ImageListContainer = () => {
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useGetPhotosInfiniteQuery();

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

  // Unsplash API may return duplicates
  const photos =
    data?.pages.flat().filter(
      (() => {
        const seen = new Set();
        return (photo) => !seen.has(photo.id) && seen.add(photo.id);
      })()
    ) ?? [];

  return (
    <section className="container">
      <div className=" grid grid-cols-2 gap-2">
        {photos.map((photo) => (
          <UnsplashImage photo={photo} key={photo.id} />
        ))}
        <div ref={ref} className="h-1" />
      </div>
      {isFetching && (
        <div className="flex justify-center gap-2 text-neutral-600">
          <RiLoader4Line className="animate-spin" /> <p>Loading more...</p>
        </div>
      )}
    </section>
  );
};
