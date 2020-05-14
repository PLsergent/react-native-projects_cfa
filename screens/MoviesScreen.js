import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MovieComponent from '../components/MovieComponent';

const data = [{
  id: 1,
  poster_path: "",
  title: "Movie Test",
  vote_average: 5,
  overview: "blablabla",
  release_date: "20/09/2019"
}]

export default class MoviesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  _displayDetailForMovie = (idMovie) => {
    this.props.navigation.navigate('MovieDetailsScreen', { idMovie: idMovie });
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieComponent movie={item}
            displayDetailForMovie={this._displayDetailForMovie}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
