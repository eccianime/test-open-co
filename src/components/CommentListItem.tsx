import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CommentListItemProps } from '../types';

export default function CommentListItem({
  comment,
  index,
}: CommentListItemProps) {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 70)
        .springify()
        .damping(14)}
      className='mx-6 mb-2 bg-green-200 p-4 rounded-[20] flex-row gap-3'
    >
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
        <Text className='text-default-primary font-semibold text-right pt-3'>
          {comment.email}
        </Text>
      </View>
    </Animated.View>
  );
}
