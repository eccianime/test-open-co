import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { PostListItemProps } from '../types';

export default function PostListItem({ post, isComplete }: PostListItemProps) {
  const handlePress = () => {
    if (isComplete) return;
    router.push(`/post/${post.id}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={isComplete ? 1 : 0.8}
      className='bg-default-primary p-4 rounded-lg mx-6 mb-3'
      onPress={handlePress}
    >
      <Text className='text-white font-poppins_semibold mb-3'>
        {post.id} - {post.title}
      </Text>
      <Text className='text-white font-poppins_light'>
        {isComplete ? post.body : post.body.slice(0, 100)}...
      </Text>
    </TouchableOpacity>
  );
}
