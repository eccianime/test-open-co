import { ErrorProps } from '@/src/types';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ErrorView({ onPressRetry, text }: ErrorProps) {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-Poppins_600SemiBold'>
        There was an error loading this data
      </Text>
      <TouchableOpacity
        onPress={onPressRetry}
        className='mt-4 bg-primary  rounded-lg items-center justify-center flex-row gap-3 p-4'
      >
        <Ionicons
          name={text === 'Retry' ? 'refresh' : 'arrow-back'}
          size={30}
          color='white'
        />
        <Text className='text-white text-3xl font-poppins_semibold'>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
