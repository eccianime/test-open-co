import { Image, Text, View } from 'react-native';
import { HeaderProps } from '../types';

export default function Header({ text }: HeaderProps) {
  return (
    <View className='items-center mb-6'>
      <Image
        source={require('../assets/images/icon.png')}
        className='w-10 h-10 absolute top-0 left-6 rounded-lg'
      />
      <Text className='text-2xl text-default-primary font-poppins_bold  text-center'>
        {text}
      </Text>
    </View>
  );
}
