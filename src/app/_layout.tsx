import { Tabs } from 'expo-router';
import { Provider } from 'react-redux';
import '../../global.css';

import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { store } from '../redux/store';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const { top } = useSafeAreaInsets();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex-1' style={{ paddingTop: top }}>
      <Provider store={store}>
        <Tabs
          screenOptions={{
            headerShown: false,
            sceneStyle: {
              backgroundColor: 'white',
            },
          }}
        >
          <Tabs.Screen name='index' />
          <Tabs.Screen name='search' />
          <Tabs.Screen name='post/[id]' options={{ href: null }} />
        </Tabs>
      </Provider>
    </View>
  );
}
