import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { ErrorProps } from '../types';

export default function Error({ onPressRetry, text }: ErrorProps) {
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
        <Text className='text-white text-3xl font-Poppins_600SemiBold'>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
