import Header from '@/src/components/Header';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import PostList from '../../components/PostList';
import { useLazyGetPostsQuery } from '../../redux/api/postsApi';
import { Post } from '../../types';

const LIMIT = 10;

export default function PostsList() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [getPosts, { isLoading, isError }] = useLazyGetPostsQuery();

  useEffect(() => {
    loadMore();
  }, [page]);

  const loadMore = async () => {
    const result = await getPosts({ page, limit: LIMIT }).unwrap();
    const newPostSet = new Set([...posts, ...result]);
    setPosts(Array.from(newPostSet));
  };

  const handleRetry = () => {
    setPosts([]);
    setPage(0);
    loadMore();
  };

  if (isLoading) return <Loader />;

  if (isError) return <Error onPressRetry={handleRetry} text='Retry' />;

  return (
    <View className='flex-1'>
      <Header text='Posts List' />

      <PostList posts={posts} changePage={() => setPage((prev) => prev + 1)} />
    </View>
  );
}
