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
      query: (id) => `photos/${id}`,
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

    getTopicPhotos: builder.query<
      UnsplashPhoto[],
      { topicId: string; page?: number }
    >({
      query: ({ topicId, page = 1 }) =>
        `topics/${topicId}/photos?page=${page}&per_page=20`,
      // Similar merge logic as getPhotos for infinite scroll
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.topicId}`;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1 || arg.page === undefined) {
          return newItems;
        }
        return [...currentCache, ...newItems];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

// Export hooks for usage in components
export const useGetPhotosInfiniteQuery: typeof unsplashApi.useGetPhotosInfiniteQuery =
  unsplashApi.useGetPhotosInfiniteQuery;
export const {
  useGetPhotoByIdQuery,
  useSearchPhotosQuery,
  useGetRelatedPhotosQuery,
  useTrackDownloadMutation,
  useGetTopicsQuery,
  useGetTopicPhotosQuery,
  useGetTopicBySlugQuery,
} = unsplashApi;
