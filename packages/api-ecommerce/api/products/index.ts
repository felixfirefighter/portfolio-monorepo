import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@repo/api-ecommerce/api/baseQuery';
import type {
  GetProductOverviewRequest,
  GetProductOverviewResponse,
  GetProductsRequest,
  GetProductsResponse,
} from '@repo/db-ecommerce/features/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery, // Calls Next.js API routes
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsRequest>({
      query: (props) => 'products',
    }),
    getProductOverview: builder.query<
      GetProductOverviewResponse,
      GetProductOverviewRequest
    >({
      query: (props) => `product-overview?id=${props.productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductOverviewQuery } = productsApi;
