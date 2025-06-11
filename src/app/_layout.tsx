import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import '../../global.css';

import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { store } from '../redux/store';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
