import { ErrorView, Header, Loader, PostList } from '@/src/components';
import usePostList from '@/src/hook/usePostList';
import { View } from 'react-native';

export default function PostsList() {
  const { setPage, posts, isLoading, isError, handleRetry } = usePostList();

  if (isLoading) return <Loader />;

  if (isError) return <ErrorView onPressRetry={handleRetry} text='Retry' />;

  return (
    <View className='flex-1'>
      <Header text='Posts List' />

      <PostList posts={posts} changePage={() => setPage((prev) => prev + 1)} />
    </View>
  );
}
