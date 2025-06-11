import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment, Post } from '../../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
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
