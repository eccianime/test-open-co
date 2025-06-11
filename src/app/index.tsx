import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import PostList from '../components/PostList';
import { useLazyGetPostsQuery } from '../redux/api/postsApi';
import { Post } from '../types';

const LIMIT = 10;

export default function Index() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [getPosts, { isLoading, isError }] = useLazyGetPostsQuery();

  useEffect(() => {
    loadMore();
  }, [page]);

  const loadMore = async () => {
    const result = await getPosts({ page, limit: LIMIT }).unwrap();
    setPosts((prev) => [...prev, ...result]);
  };

  if (isLoading)
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-2xl font-Poppins_600SemiBold'>Loading...</Text>
        <ActivityIndicator />
      </View>
    );

  if (isError)
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-2xl font-Poppins_600SemiBold'>
          There was an error
        </Text>
      </View>
    );

  return (
    <View className='flex-1 '>
      <View className='items-center mb-6'>
        <Image
          source={require('../assets/images/icon.png')}
          className='w-10 h-10 absolute top-0 left-6 rounded-lg'
        />
        <Text className='text-2xl text-white font-poppins_bold  text-center'>
          Posts List
        </Text>
      </View>
      <PostList posts={posts} changePage={() => setPage((prev) => prev + 1)} />
    </View>
  );
}
