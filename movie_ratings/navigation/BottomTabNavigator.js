import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddMovieButton from '../components/AddMovieButton';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Movies';

const MoviesStackNavigator = createStackNavigator();
const AddMovieStackNavigator = createStackNavigator();


function MoviesStack() {
  return (
    <MoviesStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MoviesStackNavigator.Screen name="Movies" component={MoviesScreen} />
      <MoviesStackNavigator.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MoviesStackNavigator.Navigator>
  );
}

/* function AddMovieStack() {
  return (
    <AddMovieStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AddMovieStackNavigator.Screen name="AddMovieForm" component={} />
      <AddMovieStackNavigator.Screen name="AddMovieValidate" component={} />
    </AddMovieStackNavigator.Navigator>

    // Enter the name of the movie inside the form then, Submit then >
    // List of possible movies base on the API, choose one >
    // Movie added to the list
  );
} */

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerRight: () => (
            <AddMovieButton />
          )
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Movies"
        component={MoviesStack}
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search1" />,
        }}
      />
      <BottomTab.Screen
        name="AddMovie"
        component={SettingsScreen}
        options={{
          title: 'Add Movie',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="pluscircleo" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
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
