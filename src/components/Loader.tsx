import colors from '@/src/constants/colors';
import { LoaderProps } from '@/src/types';
import { ActivityIndicator, Text, View } from 'react-native';

export default function Loader({
  message = 'Loading...',
  size = 'large',
  color = colors.primary,
}: LoaderProps) {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-poppins_semibold'>{message}</Text>
      <ActivityIndicator
        size={size}
        color={color}
        accessibilityLabel='Loading indicator'
      />
    </View>
  );
}
