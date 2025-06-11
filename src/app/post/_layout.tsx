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
                color={focused ? colors.primary : colors.lime[500]}
              />
              <Text
                className={`${
                  focused ? 'text-primary' : 'text-lime-500'
                } font-poppins_semibold`}
              >
                {children === 'index' ? 'Posts' : 'Search'}
              </Text>
            </View>
          );
        },
      }}
    >
      <Tabs.Screen
        name='index'
        // options={{
        //   tabBarButton: ({ focused }) => (
        //     <View className='items-center justify-center py-2'>
        //       <Ionicons
        //         name='list'
        //         size={24}
        //         color={focused ? colors.secondary : colors.primary}
        //       />
        //       <Text
        //         className={`${
        //           focused ? 'text-secondary' : 'text-primary'
        //         } font-poppins_semibold`}
        //       >
        //         Posts
        //       </Text>
        //     </View>
        //   ),
        // }}
      />
      <Tabs.Screen name='search' options={{ title: 'Search' }} />
      <Tabs.Screen name='[id]' options={{ href: null }} />
    </Tabs>
  );
}
