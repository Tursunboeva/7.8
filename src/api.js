import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakeapi.platzi.com' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    getProducts: builder.query({
      query: () => 'products',
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetProductsQuery, useUpdateProductMutation } = productsApi;
