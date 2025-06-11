import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
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
    <View className='flex-1 '>
      <View className='items-center mb-6'>
        <Image
          source={require('../../assets/images/icon.png')}
          className='w-10 h-10 absolute top-0 left-6 rounded-lg'
        />
        <Text className='text-2xl text-primary font-poppins_bold  text-center'>
          Posts List
        </Text>
      </View>
      <PostList posts={posts} changePage={() => setPage((prev) => prev + 1)} />
    </View>
  );
}
