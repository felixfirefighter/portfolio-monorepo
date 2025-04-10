import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@repo/api-ecommerce/api/baseQuery';
import type {
  GetProductOverviewRequest,
  GetProductOverviewResponse,
  GetProductsRequest,
  GetProductsResponse,
  ProductOverview,
} from '@repo/db-ecommerce/features/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery, // Calls Next.js API routes
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsRequest>({
      query: (props) => 'products',
    }),
    getProductOverview: builder.query<
      ProductOverview,
      GetProductOverviewRequest
    >({
      query: (props) => `product-overview?id=${props.productId}`,
      transformResponse: (response: GetProductOverviewResponse) => {
        return response.result;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductOverviewQuery } = productsApi;
