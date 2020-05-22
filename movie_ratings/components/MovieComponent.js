import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getImage, getMovieDetails } from '../API/TMDBApi';
import FadeIn from '../Animations/FadeIn';

export default class MovieComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        movie: undefined,
        isLoading : true
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const { item, displayDetailForMovie } = this.props;

    getMovieDetails(item.id).then(data => {
        this.setState({
            movie: data,
            isLoading: false
        })
    })
  }

  _displayMovie() {
    const movie = this.state.movie;
    const { item, displayDetailForMovie } = this.props;

    if (movie != undefined) {
      return (
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForMovie(item)}
        >
          <Image
            style={styles.image}
            source={{uri: getImage(movie.poster_path)}}
          />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title_text} numberOfLines={2}>{ movie.title }</Text>
              <Text style={styles.rating}>{ item.rating }</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.description_text} numberOfLines={5}>{ movie.overview }</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.date_text}>Release : { movie.release_date }</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
        return (
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
        )
    }
  }


  render() {

    const movie = this.state.movie;

    return (
      <FadeIn>
        {this._displayMovie()}
        {this._displayLoading()}
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    height: 190,
    backgroundColor: '#FDF8ED',
    marginBottom: 5,
    borderRadius: 10
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: '#a098e0'
  },
  content: {
    flex: 1,
    margin: 5
  },
    header: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center'
    },
      title_text: {
        flex: 4,
        fontSize: 20,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: "#4630eb"
      },
      rating: {
        textAlign: 'right',
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#140152'
      },
    description: {
      flex: 6,
      marginTop: 5,
      marginRight: 7,
      marginLeft: 2
    },
      description_text: {
        fontSize: 16,
        fontStyle: 'italic',
        color: "#7785ac",
        textAlign: 'justify'
      },
    date:{
      flex: 1,
      marginBottom: 3
    },
      date_text: {
        textAlign: 'right'
      },
  favorite_image: {
  width: 25,
  height: 25,
  marginRight: 5
  }
})
