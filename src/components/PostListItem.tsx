import { Text, TouchableOpacity } from 'react-native';
import { PostListItemProps } from '../types';

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <TouchableOpacity className='bg-primary p-4 rounded-lg mx-6 mb-3'>
      <Text className='text-white font-poppins_semibold mb-3'>
        {post.id} - {post.title}
      </Text>
      <Text className='text-white font-poppins_medium'>
        {post.body.slice(0, 100)}...
      </Text>
    </TouchableOpacity>
  );
}
