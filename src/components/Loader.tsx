import { ActivityIndicator, Text, View } from 'react-native';

export default function Loader() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-Poppins_600SemiBold'>Loading...</Text>
      <ActivityIndicator size='large' color='#036c39' />
    </View>
  );
}
