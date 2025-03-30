import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@repo/api-ecommerce/api/baseQuery';
import type { Collection } from '@repo/db-ecommerce/schema/collections';

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  baseQuery, // Calls Next.js API routes
  endpoints: (builder) => ({
    getCollections: builder.query<Collection[], void>({
      query: () => 'collections',
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionsApi;
