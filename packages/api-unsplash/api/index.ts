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
  tagTypes: ['Photos', 'Topics', 'Collections'],
  endpoints: (builder) => ({
    // Photos endpoints
    getPhotos: builder.query<UnsplashPhoto[], number>({
      query: (page = 1) => `photos?page=${page}&per_page=20`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'Photos', id: 'LIST' },
            ]
          : [{ type: 'Photos', id: 'LIST' }],
      // Merge new photos with existing ones for infinite scroll
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        // If it's the first page, replace the cache
        if (arg === 1 || arg === undefined) {
          return newItems;
        }
        // Otherwise merge with existing cache
        return [...currentCache, ...newItems];
      },
      // Only have one cache entry because if arg changes, we want to keep the old data
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getPhotoById: builder.query<UnsplashPhoto, string>({
      query: (id) => `photos/${id}`,
      providesTags: (result, error, id) => [{ type: 'Photos', id }],
    }),

    searchPhotos: builder.query<
      UnsplashSearchResponse,
      { query: string; page?: number }
    >({
      query: ({ query, page = 1 }) =>
        `search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=20`,
      providesTags: [{ type: 'Photos', id: 'SEARCH' }],
    }),

    getRelatedPhotos: builder.query<UnsplashPhoto[], string>({
      query: (photoId) => `photos/${photoId}/related`,
      providesTags: (result, error, photoId) => [
        { type: 'Photos', id: `related-${photoId}` },
      ],
    }),

    trackDownload: builder.mutation<DownloadResponse, string>({
      query: (photoId) => ({
        url: `photos/${photoId}/download`,
        method: 'GET',
      }),
    }),

    // Topics/Categories endpoints
    getTopics: builder.query<UnsplashTopic[], void>({
      query: () => 'topics?per_page=30',
      providesTags: [{ type: 'Topics', id: 'LIST' }],
    }),

    getTopicPhotos: builder.query<
      UnsplashPhoto[],
      { topicId: string; page?: number }
    >({
      query: ({ topicId, page = 1 }) =>
        `topics/${topicId}/photos?page=${page}&per_page=20`,
      providesTags: (result, error, { topicId }) => [
        { type: 'Topics', id: topicId },
      ],
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

    // Collections endpoints
    getRandomPhotos: builder.query<
      UnsplashPhoto[],
      { count?: number; topics?: string }
    >({
      query: ({ count = 10, topics = '' }) =>
        `photos/random?count=${count}${topics ? `&topics=${topics}` : ''}`,
      // Don't provide tags as this endpoint should always fetch fresh data
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useSearchPhotosQuery,
  useGetRelatedPhotosQuery,
  useTrackDownloadMutation,
  useGetTopicsQuery,
  useGetTopicPhotosQuery,
  useGetRandomPhotosQuery,
} = unsplashApi;
