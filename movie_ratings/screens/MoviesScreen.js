import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MovieComponent from '../components/MovieComponent';
import store from '../store/configStore';

export default class MoviesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: store.getState().movies
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      this.setState({ movies: store.getState().movies });
    });
  }

  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
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