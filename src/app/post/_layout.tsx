import colors from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIconStyle: {
          display: 'none',
        },
        sceneStyle: {
          backgroundColor: 'white',
        },
        tabBarLabel: ({ focused }) => {
          return (
            <View
              className={`items-center justify-center pt-2 ${
                focused ? 'opacity-100' : 'opacity-80'
              }`}
            >
              <Ionicons
                name={route.name === 'index' ? 'list' : 'search'}
                size={24}
                color={focused ? colors.primary : colors.limeish}
              />
              <Text
                className={`${
                  focused ? 'text-primary' : 'text-limeish'
                } font-poppins_semibold`}
              >
                {route.name === 'index' ? 'Posts' : 'Search'}
              </Text>
            </View>
          );
        },
      })}
    />
  );
}
