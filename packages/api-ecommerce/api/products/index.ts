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
      query: (props) => {
        const params = new URLSearchParams();
        for (const key of Object.keys(props)) {
          const value = props[key as keyof typeof props];
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        }
        return `products?${params.toString()}`;
      },
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
