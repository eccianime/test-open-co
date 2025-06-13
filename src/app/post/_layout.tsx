import colors from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 5,
        },
        tabBarIconStyle: {
          display: 'none',
        },
        sceneStyle: {
          backgroundColor: 'white',
        },
        tabBarLabel: ({ focused }) => {
          return (
            <View
              className={`items-center flex-row gap-2 justify-center pt-2 ${
                focused ? 'bg-primary rounded-full px-4 py-2' : 'opacity-50'
              }`}
            >
              <Ionicons
                name={route.name === 'index' ? 'list' : 'search'}
                size={24}
                color={focused ? 'white' : colors.primary}
              />
              <Text
                className={`${
                  focused ? 'text-white' : 'text-primary'
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
