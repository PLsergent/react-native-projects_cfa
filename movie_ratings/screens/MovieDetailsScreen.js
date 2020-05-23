import React from 'react'
import { StyleSheet,
         View,
         ActivityIndicator,
         ScrollView,
         Image
       } from 'react-native'
import { getMovieDetails, getImage } from '../API/TMDBApi'
import numeral from 'numeral'
import moment from 'moment'
import { Container, Header, Content, Button, Text, Icon } from 'native-base';

export default class MovieDetailsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: undefined,
            isLoading : true
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const { navigation, route } = this.props;
        const params = route.params;
        const idMovie = params.item.id
        getMovieDetails(idMovie).then(data => {
            this.setState({
                movie: data,
                isLoading: false
            })
        })
    }

    handleSubmit = () => {
        this.props.navigation.goBack();
        if (this.state.movie == undefined) {
            Toast.show({
                text: "Cannot add the movie",
                buttonText: 'Okay'
              })
        }
        this.props.navigation.navigate('Rate the movie', {item: this.state.movie});
    }

    _displayMovie(){
        const movie = this.state.movie
        const { navigation, route } = this.props;
        const params = route.params;
        const item = params.item;
        const screen = params.prevScreen;

        if (movie != undefined && screen != undefined) {
            // When NOT in the collection
            return (
                <ScrollView style={styles.scroll_view}>
                    <Image
                        style={styles.image}
                        source={{uri: getImage(movie.backdrop_path)}}
                    />
                    <Text style={styles.title_movie} numberOfLines={2}>{ movie.title }</Text>
                    <Text style={styles.description_movie}>{ movie.overview }</Text>
                    <Text style={styles.informations_movie}>Release: { moment( movie.release_date ).format('L') }</Text>
                    <Text style={styles.informations_movie}>Rating average: { movie.vote_average } / 10</Text>
                    <Text style={styles.informations_movie}>My rating: { item.rating } / 10</Text>
                    <Text style={styles.informations_movie}>Number of vote: { movie.vote_count }</Text>
                    <Text style={styles.informations_movie}>Budget: {numeral(movie.budget).format('0,0')}$</Text>
                    <Text style={styles.informations_movie}>
                        { movie.genres.length > 1 ? 'Genres' : 'Genre' }
                        : { movie.genres.map((genre) => genre.name).join(" / ")}
                    </Text>
                    <Text style={styles.informations_movie_last}>
                        { movie.production_companies.length > 1 ? 'Companies' : 'Company' }
                        : { movie.production_companies.map((company) => company.name).join(" / ")}
                    </Text>
                    <Content style={styles.button}>
                        <Button block rounded primary iconRight onPress={this.handleSubmit}>
                            <Text> Add to collection </Text>
                            <Icon name='add' />
                        </Button>
                    </Content>
                </ScrollView>
            )
        } else if (movie != undefined) {
            // When already in the collection
            return (
                <ScrollView style={styles.scroll_view}>
                    <Image
                        style={styles.image}
                        source={{uri: getImage(movie.backdrop_path)}}
                    />
                    <Text style={styles.title_movie} numberOfLines={2}>{ movie.title }</Text>
                    <Text style={styles.description_movie}>{ movie.overview }</Text>
                    <Text style={styles.informations_movie}>Release: { moment( movie.release_date ).format('L') }</Text>
                    <Text style={styles.informations_movie}>Rating average: { movie.vote_average } / 10</Text>
                    <Text style={styles.informations_movie}>My rating: { item.rating } / 10</Text>
                    <Text style={styles.informations_movie}>Number of vote: { movie.vote_count }</Text>
                    <Text style={styles.informations_movie}>Budget: {numeral(movie.budget).format('0,0')}$</Text>
                    <Text style={styles.informations_movie}>
                        { movie.genres.length > 1 ? 'Genres' : 'Genre' }
                        : { movie.genres.map((genre) => genre.name).join(" / ")}
                    </Text>
                    <Text style={styles.informations_movie}>
                        { movie.production_companies.length > 1 ? 'Companies' : 'Company' }
                        : { movie.production_companies.map((company) => company.name).join(" / ")}
                    </Text>
                </ScrollView>
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
        return (
            <View style={styles.main_container}>
                {this._displayMovie()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fcf9f2'
    },

    button: {
        marginLeft: 45,
        marginRight: 45,
        marginTop: 12,
        marginBottom: 15
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll_view: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_movie: {
        backgroundColor: '#f2f7ff',
        borderRadius: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        flex: 1,
        flexWrap: 'wrap',
        color: "#4630eb"
    },
    description_movie: {
        color: '#667396',
        fontSize: 18,
        fontStyle: 'italic',
        margin: 5,
        marginBottom: 10,
        textAlign: 'justify',
        borderBottomWidth: 1,
        padding: 10
    },
    informations_movie: {
        fontSize: 18,
        marginLeft: 10,
        padding: 2,
        color: "#140152",
    },
    informations_movie_last: {
        fontSize: 18,
        marginLeft: 10,
        padding: 2,
        color: "#140152",
        marginBottom: 10
    },
})