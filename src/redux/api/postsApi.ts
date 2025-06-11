import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        console.log(page, limit);

        return {
          url: `/posts?_start=${page * limit}&_limit=${limit}`,
        };
      },
    }),
  }),
});

export const { useLazyGetPostsQuery } = postsApi;
