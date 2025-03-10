import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  UnsplashPhoto,
  UnsplashPhotoStatistics,
  UnsplashRelatedPhotosResponse,
  UnsplashSearchResponse,
  UnsplashTopic,
} from '@repo/api-unsplash/types';
import { unsplashBaseQuery } from './baseQuery';

// Create the API with all Unsplash endpoints
export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: unsplashBaseQuery,
  endpoints: (builder) => ({
    // Photos
    getPhotos: builder.infiniteQuery<UnsplashPhoto[], void, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ pageParam }) {
        return `/photos?page=${pageParam}&per_page=20`;
      },
    }),
    getPhotoById: builder.query<UnsplashPhoto, string>({
      query: (id) => `/photos/${id}`,
    }),
    getPhotoStatistics: builder.query<UnsplashPhotoStatistics, string>({
      query: (id) => `/photos/${id}/statistics`,
    }),
    getRelatedPhotos: builder.infiniteQuery<UnsplashPhoto[], string, number>({
      transformResponse: (response: UnsplashRelatedPhotosResponse) => {
        return response.results;
      },
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ queryArg, pageParam }) {
        return `/photos/${queryArg}/related?page=${pageParam}&per_page=20`;
      },
    }),
    searchPhotos: builder.infiniteQuery<UnsplashPhoto[], string, number>({
      transformResponse: (response: UnsplashSearchResponse) => {
        return response.results;
      },
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ queryArg, pageParam }) {
        return `search/photos?query=${queryArg}&page=${pageParam}&per_page=20`;
      },
    }),

    trackDownload: builder.mutation<void, void>({
      query: (photoId) => ({
        url: `photos/${photoId}/download`,
        method: 'GET',
      }),
    }),

    // Topics
    getTopics: builder.query<UnsplashTopic[], void>({
      query: () => '/topics?per_page=20',
    }),

    getTopicBySlug: builder.query<UnsplashTopic, string>({
      query: (slug: string) => `/topics/${slug}`,
    }),

    getTopicPhotos: builder.infiniteQuery<UnsplashPhoto[], string, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ queryArg, pageParam }) {
        return `/topics/${queryArg}/photos?page=${pageParam}&per_page=20`;
      },
    }),
  }),
});

// Export hooks for usage in components
export const useGetPhotosInfiniteQuery: typeof unsplashApi.useGetPhotosInfiniteQuery =
  unsplashApi.useGetPhotosInfiniteQuery;
export const useGetTopicPhotosInfiniteQuery: typeof unsplashApi.useGetTopicPhotosInfiniteQuery =
  unsplashApi.useGetTopicPhotosInfiniteQuery;
export const useGetRelatedPhotosInfiniteQuery: typeof unsplashApi.useGetRelatedPhotosInfiniteQuery =
  unsplashApi.useGetRelatedPhotosInfiniteQuery;
export const useSearchPhotosInfiniteQuery: typeof unsplashApi.useSearchPhotosInfiniteQuery =
  unsplashApi.useSearchPhotosInfiniteQuery;
export const {
  useGetPhotoByIdQuery,
  useGetPhotoStatisticsQuery,
  useTrackDownloadMutation,
  useGetTopicsQuery,
  useGetTopicBySlugQuery,
} = unsplashApi;
