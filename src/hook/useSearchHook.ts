import useDebounce from '@/src/hook/useDebounce';
import { useLazyGetPostsQuery } from '@/src/redux/api/postsApi';
import { Post } from '@/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';

export default function useSearchHook() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [isError, setIsError] = useState(false);

  const [getPosts, { isLoading }] = useLazyGetPostsQuery();

  const debouncedSearchText = useDebounce(searchText, 500);

  const fetchPosts = async () => {
    let cached: Post[] = [];
    try {
      const postsString = await AsyncStorage.getItem('POSTS');
      if (postsString) {
        cached = JSON.parse(postsString);
      } else {
        cached = await getPosts({ page: 0, limit: 100 }).unwrap();
        await AsyncStorage.setItem('POSTS', JSON.stringify(cached));
      }
      setPosts(cached);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [getPosts]);

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
    isError,
    setIsError,
    searchText,
    setSearchText,
    debouncedSearchText,
  };
}
