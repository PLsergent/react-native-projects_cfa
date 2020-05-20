import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Movies: 'movies',
        Search: 'search',
        AddMovie: 'add_movie',
        Settings: 'settings'
      },
    },
  },
};
