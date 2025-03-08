import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  DownloadResponse,
  UnsplashPhoto,
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
    getPhotoStatistics: builder.query<UnsplashPhoto, string>({
      query: (id) => `/photos/${id}/statistics`,
    }),

    searchPhotos: builder.query<
      UnsplashSearchResponse,
      { query: string; page?: number }
    >({
      query: ({ query, page = 1 }) =>
        `search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=20`,
    }),

    getRelatedPhotos: builder.query<UnsplashPhoto[], string>({
      query: (photoId) => `photos/${photoId}/related`,
    }),

    trackDownload: builder.mutation<DownloadResponse, string>({
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
export const {
  useGetPhotoByIdQuery,
  useGetPhotoStatisticsQuery,
  useSearchPhotosQuery,
  useGetRelatedPhotosQuery,
  useTrackDownloadMutation,
  useGetTopicsQuery,
  useGetTopicBySlugQuery,
} = unsplashApi;
