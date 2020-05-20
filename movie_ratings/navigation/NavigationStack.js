import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import AddMovieScreen from '../screens/AddMovieScreen';


const MoviesStackNavigator = createStackNavigator();
const AddMovieStackNavigator = createStackNavigator();


export function MoviesStack() {
  return (
    <MoviesStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MoviesStackNavigator.Screen name="Movies" component={MoviesScreen} />
      <MoviesStackNavigator.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MoviesStackNavigator.Navigator>
  );
}

export function AddMovieStack() {
  return (
    <AddMovieStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AddMovieStackNavigator.Screen name="AddMovieScreen" component={AddMovieScreen} />
      {/* <AddMovieStackNavigator.Screen name="AddMovieValidate" component={} /> */}
    </AddMovieStackNavigator.Navigator>

    // Enter the name of the movie inside the form then, Submit then >
    // List of possible movies base on the API, choose one >
    // Movie added to the list
  );
}