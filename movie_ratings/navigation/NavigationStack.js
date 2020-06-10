import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import AddMovieScreen from '../screens/AddMovieScreen';
import AddMovieValidate from "../screens/AddMovieValidate";
import AddMovieRating from "../screens/AddMovieRating";


const MoviesStackNavigator = createStackNavigator();
const AddMovieStackNavigator = createStackNavigator();
const SearchStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();


export function MoviesStack() {
  return (
    <MoviesStackNavigator.Navigator>
      <MoviesStackNavigator.Screen name="Your movies" component={MoviesScreen} />
      <MoviesStackNavigator.Screen name="Movie details" component={MovieDetailsScreen} />
    </MoviesStackNavigator.Navigator>

    // Your collection of movies >
    // Movie details
  );
}

export function AddMovieStack() {
  return (
    <AddMovieStackNavigator.Navigator>
      <AddMovieStackNavigator.Screen name="Add movie" component={AddMovieScreen} />
      <AddMovieStackNavigator.Screen name="Choose your movie in the list" component={AddMovieValidate} />
      <AddMovieStackNavigator.Screen name="Rate the movie" component={AddMovieRating} />
    </AddMovieStackNavigator.Navigator>

    // Enter the name of the movie inside the form then, Submit then >
    // List of possible movies base on the API, choose one >
    // Rate the movie and then >
    // Movie added to the list
  );
}

export function SearchStack() {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name="Search" component={SearchScreen} />
      <SearchStackNavigator.Screen name="Movie details" component={MovieDetailsScreen} />
      <AddMovieStackNavigator.Screen name="Rate the movie" component={AddMovieRating} />
    </SearchStackNavigator.Navigator>

    // Research in the database of all the movie
    // Button to add the movie to the collection in the screen 'Movie details'
  );
}

export function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </SettingsStackNavigator.Navigator>

    // TODO
  );
}