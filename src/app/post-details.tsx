import {
  CommentListItem,
  Error,
  Header,
  Loader,
  PostListItem,
} from '@/src/components';
import { router, useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';
import usePostDetailsHook from '../hook/usePostDetailsHook';

export default function PostDetails() {
  const { id } = useLocalSearchParams();

  const { post, comments, isLoading, isError } = usePostDetailsHook(
    id as string
  );

  const handleRetry = () => router.back();

  if (isLoading || !post || !comments) return <Loader />;

  if (isError) return <Error onPressRetry={handleRetry} text='Go Back' />;

  return (
    <View className='flex-1 pb-4'>
      <Header text='Post Details' hasBackButton />
      <FlatList
        ListHeaderComponent={() => (
          <PostListItem post={post} isComplete index={0} />
        )}
        // contentContainerClassName='mt-4'
        data={comments}
        renderItem={({ item, index }) => (
          <CommentListItem comment={item} index={index} />
        )}
      />
    </View>
  );
}
