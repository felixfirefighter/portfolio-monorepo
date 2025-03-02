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
    getPhotos: builder.infiniteQuery<UnsplashPhoto[], void, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ pageParam }) {
        // Unsplash returns duplicate images, this acts as a buffer to
        // avoid rendering the same images
        const perPage = 10 + 3 * pageParam;
        return `/photos?page=${pageParam}&per_page=${perPage}`;
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
export const useGetPhotosInfiniteQuery: typeof unsplashApi.useGetPhotosInfiniteQuery =
  unsplashApi.useGetPhotosInfiniteQuery;
export const {
  useGetPhotoByIdQuery,
  useSearchPhotosQuery,
  useGetRelatedPhotosQuery,
  useTrackDownloadMutation,
  useGetTopicsQuery,
  useGetTopicPhotosQuery,
  useGetRandomPhotosQuery,
} = unsplashApi;
