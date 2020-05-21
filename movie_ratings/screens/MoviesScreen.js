import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MovieComponent from '../components/MovieComponent';
import store from '../store/configStore';

const data = [{
  id: 567097,
  poster_path: "",
  title: "Movie Test",
  vote_average: 5,
  overview: "blablabla",
  release_date: "20/09/2019"
}]

export class MoviesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: store.getState()
    };
  }

  _displayDetailForMovie = (item) => {
    this.props.navigation.navigate('Movie details', {item: item});
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieComponent
            item={item}
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