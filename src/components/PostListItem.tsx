import { PostListItemProps } from '@/src/types';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

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
        id: String(post.id),
      },
    });
  };

  return (
    <AnimatedTouchableOpacity
      entering={FadeInDown.delay(index * 70)
        .springify()
        .damping(14)}
      activeOpacity={isComplete ? 1 : 0.8}
      className='bg-primary  rounded-[20] mx-6 mb-3 overflow-hidden'
      onPress={handlePress}
      disabled={isComplete}
    >
      <Image
        source={{ uri: `https://picsum.photos/seed/${post.id}/500/500` }}
        className='w-full h-40'
      />
      <View className='py-4 px-6'>
        <Text className='text-white font-poppins_semibold mb-3'>
          {post.id} - {post.title}
        </Text>
        <Text className='text-white font-poppins_light'>
          {isComplete ? post.body : `${post.body.slice(0, 100)}...`}
        </Text>
      </View>
    </AnimatedTouchableOpacity>
  );
}
