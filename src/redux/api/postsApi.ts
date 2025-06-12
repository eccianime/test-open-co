import { Comment, Post } from '@/src/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL =
  process.env.EXPO_PUBLIC_API ?? 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: `/posts?_start=${page * limit}&_limit=${limit}`,
      }),
    }),
    getSinglePost: builder.query<Post, { postId: number }>({
      query: ({ postId }) => ({
        url: `/posts/${postId}`,
      }),
    }),
    getPostComments: builder.query<Comment[], { postId: number }>({
      query: ({ postId }) => ({
        url: `/posts/${postId}/comments`,
      }),
    }),
  }),
});

export const {
  useLazyGetPostsQuery,
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
} = postsApi;
