import { router } from 'expo-router';

import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Image } from 'react-native';

export default function Splash() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        router.replace('/post');
      }, 2000);
    }
  }, [fontsLoaded]);

  return (
    <Image
      source={require('../assets/images/splash.png')}
      className='w-full h-full'
    />
  );
}
