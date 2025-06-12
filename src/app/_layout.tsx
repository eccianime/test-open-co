import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import '../../global.css';

import { store } from '@/src/redux/store';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  const { top } = useSafeAreaInsets();

  return (
    <View className='flex-1' style={{ paddingTop: top }}>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
          }}
        />
      </Provider>
    </View>
  );
}
