import Header from '@/src/components/Header';
import Loader from '@/src/components/Loader';
import PostList from '@/src/components/PostList';
import colors from '@/src/constants/colors';
import { useLazyGetPostsQuery } from '@/src/redux/api/postsApi';
import { Post } from '@/src/types';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const [getPosts, { isLoading }] = useLazyGetPostsQuery();

  useEffect(() => {
    let posts: Post[] = [];

    const fetchPosts = async () => {
      const postsString = await AsyncStorage.getItem('POSTS');
      if (postsString) {
        posts = JSON.parse(postsString);
      } else {
        posts = await getPosts({
          page: 0,
          limit: 100,
        }).unwrap();
        await AsyncStorage.setItem('POSTS', JSON.stringify(posts));
      }
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [posts, searchText]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View className='flex-1 '>
      <Header text='Post Search' />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder='Search for a post'
        className='border border-default-primary rounded-lg p-4 mx-6 font-poppins_medium mb-2'
      />
      <PostList
        posts={searchText.length > 2 ? filteredPosts : []}
        contentContainerClassName='flex-1'
        ListEmptyComponent={
          <View className='flex-1 items-center justify-center mx-6'>
            {searchText.length > 2 ? (
              <View className='flex-1 items-center justify-center gap-4'>
                <SimpleLineIcons
                  name='question'
                  size={100}
                  color={colors.primary}
                />
                <Text className='text-2xl text-center font-poppins_medium text-default-primary'>
                  No posts found
                </Text>
              </View>
            ) : (
              <View className='flex-1 items-center justify-center gap-4'>
                <SimpleLineIcons
                  name='magnifier'
                  size={100}
                  color={colors.primary}
                />
                <Text className='text-2xl text-center font-poppins_medium text-default-primary'>
                  Write at least 3 characters to start the search
                </Text>
              </View>
            )}
          </View>
        }
      />
    </View>
  );
}
