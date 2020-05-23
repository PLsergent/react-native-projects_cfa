import * as React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MovieComponent from '../components/MovieComponent';
import { getMovies } from '../API/TMDBApi';
import { SearchBar } from 'react-native-elements';
import { Toast } from 'native-base';

export default class SearchScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      movies: [],
      isLoading: false
    }
  }

  handleNameChange = (name) => {
    this.setState({ 
      isLoading: true,
      search: name
    })

    getMovies(encodeURI(name), 1).then(data => {
      if (data.results !== undefined) {
        if (data.results.length == 0) {
          Toast.show({
              text: "No movie found, please go back and try another one.",
              buttonText: 'Okay'
          })
        }
        this.setState({
            movies: data.results,
            isLoading: false
        })
      }
    })
  }

  _displayDetailForMovie = (item) => {
    this.props.navigation.navigate('Movie details', {item: item, prevScreen: "search"});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar placeholder='Research in the database...' onChangeText={this.handleNameChange} value={this.state.search}/>
        <FlatList
            style={{ flex: 1 }}
            data={this.state.movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieComponent
                item={item}
                displayDetailForMovie={this._displayDetailForMovie}
              />
            )}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: '#fafafa',
  }
}); 