import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@repo/api-ecommerce/api/baseQuery';

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  baseQuery, // Calls Next.js API routes
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => 'collections',
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionsApi;
