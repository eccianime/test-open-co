import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import '../../global.css';

import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { store } from '../redux/store';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className='flex-1 bg-background'>
      <Provider store={store}>
        <Slot screenOptions={{ headerShown: false }} />
      </Provider>
    </SafeAreaView>
  );
}
