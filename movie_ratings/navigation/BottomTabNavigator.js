import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import{ MoviesStack, AddMovieStack, SearchStack, SettingsStack } from './NavigationStack';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Movies';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html


  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} >
      <BottomTab.Screen
        name="Movies"
        component={MoviesStack}
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home"/>
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search1" />,
        }}
      />
      <BottomTab.Screen
        name="AddMovie"
        component={AddMovieStack}
        options={{
          title: 'Add Movie',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="pluscircleo" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="setting" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Movies':
      return 'Movies';
    case 'Search':
      return 'Search';
    case 'Settings':
      return 'Settings'
    case 'AddMovie':
      return 'Add Movie'
  }
}
