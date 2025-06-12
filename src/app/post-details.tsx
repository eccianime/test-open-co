import {
  CommentListItem,
  ErrorView,
  Header,
  Loader,
  PostListItem,
} from '@/src/components';
import usePostDetailsHook from '@/src/hook/usePostDetailsHook';
import { router, useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';

export default function PostDetails() {
  const { id } = useLocalSearchParams();

  const { post, comments, isLoading, isError } = usePostDetailsHook(
    id as string
  );

  const handleRetry = () => router.back();

  if (isLoading || !post || !comments) return <Loader />;

  if (isError) return <ErrorView onPressRetry={handleRetry} text='Go Back' />;

  return (
    <View className='flex-1 pb-4'>
      <Header text='Post Details' hasBackButton />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
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
