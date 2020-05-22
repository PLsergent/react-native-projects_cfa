import * as React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ListItemMovie from '../components/ListItem';
import { getMovies } from '../API/TMDBApi';
import { Toast } from 'native-base';

export default class AddMovieValidate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const { navigation, route } = this.props;
        const params = route.params;
        const name = params.item;

        getMovies(encodeURI(name), 1).then(data => {
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
        })
    }

    nextStepRating = (movie) => {
        this.props.navigation.navigate('Rate the movie', {item: movie});
    }

    _displayMovies() {
        if (this.state.movies.length > 0) {
            return (
                <FlatList
                    style={styles.list}
                    data={this.state.movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ListItemMovie 
                                item={item}
                                nextStepRating={this.nextStepRating}
                            />
                        )
                    }}
                />
            );
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
        return (
            <View style={styles.main_container}>
                {this._displayMovies()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    list: {
      flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
