import colors from '@/src/constants/colors';
import { EmptyListProps } from '@/src/types';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export default function EmptyList({ text, icon }: EmptyListProps) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(1, { duration: 1000 })
    );
  }, [text]);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      className='flex-1 items-center justify-center gap-4'
      style={style}
    >
      <SimpleLineIcons name={icon} size={100} color={colors.primary} />
      <Text className='text-2xl text-center font-poppins_medium text-primary'>
        {text}
      </Text>
    </Animated.View>
  );
}
