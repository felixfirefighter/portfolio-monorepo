// src/api.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  HackerNewsCategory,
  HackerNewsItem,
  HackerNewsItemId,
  HackerNewsUser,
} from '@repo/api-hacker-news/types';
import { hackerNewsBaseQuery } from './baseQuery';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: hackerNewsBaseQuery,
  tagTypes: ['Item', 'User'],
  endpoints: (builder) => ({
    // Item endpoints
    getItem: builder.query<HackerNewsItem, number>({
      query: (id) => `/item/${id}.json`,
      providesTags: (result, _error, id) =>
        result ? [{ type: 'Item', id }] : [],
    }),
    getMultipleItems: builder.query<HackerNewsItem[], number[]>({
      queryFn: async (ids: number[], _api, _extraOptions, fetchWithBQ) => {
        const results = await Promise.all(
          ids.map((id) => fetchWithBQ(`/item/${id}.json`))
        );
        return { data: results.map((r) => r.data as HackerNewsItem) };
      },
    }),

    getCategoryStories: builder.query<HackerNewsItemId[], HackerNewsCategory>({
      query: (category) => {
        switch (category) {
          case 'top':
            return '/topstories.json';
          case 'new':
            return '/newstories.json';
          case 'best':
            return '/beststories.json';
          case 'ask':
            return '/askstories.json';
          case 'show':
            return '/showstories.json';
          case 'job':
            return '/jobstories.json';
          default:
            return '/topstories.json';
        }
      },
    }),

    // User endpoints
    getUser: builder.query<HackerNewsUser, string>({
      query: (id) => `/user/${id}.json`,
      providesTags: (result, _error, id) =>
        result ? [{ type: 'User', id }] : [],
    }),

    // Updates endpoints
    getUpdates: builder.query<{ items: number[]; profiles: string[] }, void>({
      query: () => '/updates.json',
    }),

    // Max Item ID
    getMaxItemId: builder.query<number, void>({
      query: () => '/maxitem.json',
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetItemQuery,
  useGetMultipleItemsQuery,
  useGetCategoryStoriesQuery,
  useGetUserQuery,
  useGetUpdatesQuery,
  useGetMaxItemIdQuery,
} = hackerNewsApi;
