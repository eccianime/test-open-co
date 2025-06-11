import { Text, View } from 'react-native';
import { CommentListItemProps } from '../types';

export default function CommentListItem({ comment }: CommentListItemProps) {
  return (
    <View className='mx-6 mb-2 bg-green-200 rounded-lg p-4 flex-row gap-3'>
      <View className='h-10 w-10 rounded-full items-center justify-center bg-default-secondary'>
        <Text className='text-2xl font-light text-white'>
          {comment.email.substring(0, 1)}
        </Text>
      </View>
      <View className='flex-1'>
        <Text className='text-default-primary font-poppins_semibold'>
          {comment.name}
        </Text>
        <Text className='text-default-primary font-poppins_light'>
          {comment.body}
        </Text>
        <Text className='text-default-primary font-semibold text-right'>
          {comment.email}
        </Text>
      </View>
    </View>
  );
}
