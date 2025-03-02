import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const unsplashBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.unsplash.com/',
  prepareHeaders: (headers) => {
    headers.set(
      'Authorization',
      `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''}`
    );
    return headers;
  },
});
