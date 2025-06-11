import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import '../../global.css';

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { store } from '../redux/store';

export default function RootLayout() {
  const { top } = useSafeAreaInsets();

  return (
    <View className='flex-1' style={{ paddingTop: top }}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' />
          <Stack.Screen name='post' />
        </Stack>
      </Provider>
    </View>
  );
}
