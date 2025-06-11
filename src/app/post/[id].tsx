import CommentListItem from '@/src/components/CommentListItem';
import Error from '@/src/components/Error';
import Loader from '@/src/components/Loader';
import PostListItem from '@/src/components/PostListItem';
import {
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
} from '@/src/redux/api/postsApi';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

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
    <View className='flex-1 '>
      <View className='items-center mb-3'>
        <TouchableOpacity
          onPress={() => router.back()}
          className='absolute left-6 top-0'
        >
          <Ionicons name='arrow-back' size={30} color='#036c39' />
        </TouchableOpacity>
        <Text className='text-2xl text-default-primary font-poppins_bold  text-center'>
          Post Details
        </Text>
      </View>

      <FlatList
        ListHeaderComponent={() => <PostListItem post={post} isComplete />}
        contentContainerClassName='mt-4'
        data={comments}
        renderItem={({ item }) => <CommentListItem comment={item} />}
      />
    </View>
  );
}
