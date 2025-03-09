'use client';
import { MasonryImages } from '@/features/shell/components/masonry-images';
import { setSearchTerm } from '@/features/shell/store/app/slice';
import type { SearchRouteParams } from '@/features/shell/types/routes';
import { useSearchPhotosInfiniteQuery } from '@repo/api-unsplash';
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
