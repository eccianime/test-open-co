import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';
import { HeaderProps } from '../types';

export default function Header({ text, hasBackButton }: HeaderProps) {
  return (
    <View className='items-center mb-6 pt-4'>
      {hasBackButton ? (
        <TouchableOpacity
          onPress={() => router.back()}
          className='absolute left-6 top-4'
        >
          <Ionicons name='arrow-back' size={30} color={colors.primary} />
        </TouchableOpacity>
      ) : (
        <Image
          source={require('../assets/images/icon.png')}
          className='w-10 h-10 absolute top-3 left-6 rounded-lg'
        />
      )}
      <Text className='text-2xl text-default-primary font-poppins_bold  text-center'>
        {text}
      </Text>
    </View>
  );
}
