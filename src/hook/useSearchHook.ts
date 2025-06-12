import useDebounce from '@/src/hook/useDebounce';
import { useLazyGetPostsQuery } from '@/src/redux/api/postsApi';
import { Post } from '@/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';

export default function useSearchHook() {
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

  return {
    filteredPosts,
    isLoading,
    searchText,
    setSearchText,
    debouncedSearchText,
  };
}
