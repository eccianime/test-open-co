import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { PostListItemProps } from '../types';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function PostListItem({
  post,
  isComplete,
  index,
}: PostListItemProps) {
  const handlePress = () => {
    if (isComplete) return;
    router.push({
      pathname: '/post-details',
      params: {
        id: post.id,
      },
    });
  };

  return (
    <AnimatedTouchableOpacity
      entering={FadeInDown.delay(index * 70)
        .springify()
        .damping(14)}
      activeOpacity={isComplete ? 1 : 0.8}
      className='bg-default-primary py-4 px-6 rounded-[20] mx-6 mb-3'
      onPress={handlePress}
    >
      <Text className='text-white font-poppins_semibold mb-3'>
        {post.id} - {post.title}
      </Text>
      <Text className='text-white font-poppins_light'>
        {isComplete ? post.body : post.body.slice(0, 100)}...
      </Text>
    </AnimatedTouchableOpacity>
  );
}
