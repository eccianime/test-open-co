import EmptyList from '@/src/components/EmptyList';
import Header from '@/src/components/Header';
import Loader from '@/src/components/Loader';
import PostList from '@/src/components/PostList';
import useDebounce from '@/src/hook/useDebounce';
import { useLazyGetPostsQuery } from '@/src/redux/api/postsApi';
import { Post } from '@/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const [getPosts, { isLoading }] = useLazyGetPostsQuery();

  const debouncedSearchText = useDebounce(searchText, 500);

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
        post.title.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        post.body.toLowerCase().includes(debouncedSearchText.toLowerCase())
    );
  }, [posts, debouncedSearchText]);

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
        posts={debouncedSearchText.length > 2 ? filteredPosts : []}
        contentContainerClassName='flex-1'
        ListEmptyComponent={
          <View className='flex-1 items-center justify-center mx-6'>
            {debouncedSearchText.length > 2 ? (
              <EmptyList text='No posts found' icon='question' />
            ) : (
              <EmptyList
                text='Write at least 3 characters to start the search'
                icon='magnifier'
              />
            )}
          </View>
        }
      />
    </View>
  );
}
