'use client';
import { EmptySearchSection } from '@/features/search/empty-search-section';
import { MasonryImages } from '@/features/shell/components/masonry-images';
import { setSearchTerm } from '@/features/shell/store/app/slice';
import type { SearchRouteParams } from '@/features/shell/types/routes';
import { useSearchPhotosInfiniteQuery } from '@repo/api-unsplash';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const SearchResultSection = () => {
  const params = useParams<SearchRouteParams>();
  const dispatch = useDispatch();
  const { data, isFetching, fetchNextPage, error, isLoading } =
    useSearchPhotosInfiniteQuery(params.slug);
  useEffect(() => {
    dispatch(setSearchTerm(decodeURIComponent(params.slug)));
  }, [params.slug, dispatch]);

  const decodedSlug = decodeURIComponent(params.slug);

  if (data?.pages.length === 0 || data?.pages[0].length === 0) {
    return <EmptySearchSection title={decodedSlug} />;
  }

  return (
    <>
      <div className="container py-8">
        {decodedSlug !== '' ? (
          <h1 className="break-words font-bold text-3xl text-neutral-900 md:text-4xl">
            {decodedSlug}
          </h1>
        ) : (
          <Skeleton className="h-9 w-80" />
        )}
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
