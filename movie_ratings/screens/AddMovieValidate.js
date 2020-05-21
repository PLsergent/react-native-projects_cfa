import * as React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ListItemMovie from '../components/ListItem';
import { getMovies } from '../API/TMDBApi';

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
            this.setState({
                movies: data.results,
                isLoading: false
            })
        })
    }

    _displayMovies() {
        console.log(this.state.movies);
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
