import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hackerNewsBaseQuery = fetchBaseQuery({
  baseUrl: 'https://hacker-news.firebaseio.com/v0',
});
