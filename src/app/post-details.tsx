import {
  CommentListItem,
  Error,
  Header,
  Loader,
  PostListItem,
} from '@/src/components';
import {
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
} from '@/src/redux/api/postsApi';
import { router, useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';

export default function PostDetails() {
  const { id } = useLocalSearchParams();

  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetSinglePostQuery({ postId: Number(id) });
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useGetPostCommentsQuery({ postId: Number(id) });

  const handleRetry = () => {
    router.back();
  };

  if (isPostLoading || isCommentsLoading) return <Loader />;

  if (isPostError || isCommentsError)
    return <Error onPressRetry={handleRetry} text='Go Back' />;

  if (!post || !comments) return <Loader />;

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
