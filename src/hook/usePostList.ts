import { useLazyGetPostsQuery } from '@/src/redux/api/postsApi';
import { Post } from '@/src/types';
import { useEffect, useState } from 'react';

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

  return {
    setPage,
    posts,
    isLoading,
    isError,
    handleRetry,
  };
}
