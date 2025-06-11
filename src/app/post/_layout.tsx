import colors from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          height: 0,
        },
        sceneStyle: {
          backgroundColor: 'white',
        },
        tabBarLabel: ({ focused, children }) => {
          return (
            <View className='items-center justify-center pt-2'>
              <Ionicons
                name={children === 'index' ? 'list' : 'search'}
                size={24}
                color={focused ? colors.primary : colors.limeish}
              />
              <Text
                className={`${
                  focused ? 'text-default-primary' : 'text-default-limeish'
                } font-poppins_semibold`}
              >
                {children === 'index' ? 'Posts' : 'Search'}
              </Text>
            </View>
          );
        },
      }}
    />
  );
}
