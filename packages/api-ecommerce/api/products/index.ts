import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@repo/api-ecommerce/api/baseQuery';
import type { GetProductsProps } from '@repo/db-ecommerce/features/products';
import type { Product } from '@repo/db-ecommerce/schema/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery, // Calls Next.js API routes
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], GetProductsProps>({
      query: (props) => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
