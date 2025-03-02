'use client';
import { UnsplashImage } from '@/features/shell/components/unsplash-image';
import { RiLoader4Line } from '@remixicon/react';
import { useGetPhotosInfiniteQuery } from '@repo/api-unsplash';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect } from 'react';
import { SkeletonGrid } from '../skeleton-grid';

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
    if (entry?.isIntersecting && !isFetching) {
      console.log('call me!');
      fetchNextPage();
    }
  }, [entry, isFetching, fetchNextPage]);

  if (isLoading) {
    return <SkeletonGrid />;
  }

  if (error) {
    return <p>Error fetching images</p>;
  }

  const photos = data?.pages.flat() ?? [];

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
