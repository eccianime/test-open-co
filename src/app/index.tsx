import { router } from 'expo-router';

import SplashImage from '@/src/assets/images/splash.png';
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
      const timer = setTimeout(() => {
        router.replace('/post');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  return <Image source={SplashImage} className='w-full h-full' />;
}
