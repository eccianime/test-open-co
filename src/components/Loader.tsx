import { ActivityIndicator, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function Loader() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-poppins_semibold'>Loading...</Text>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
}
