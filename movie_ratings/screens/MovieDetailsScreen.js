import React from 'react'
import { StyleSheet,
         View,
         Text,
         ActivityIndicator,
         ScrollView,
         Image
       } from 'react-native'
import { getMovieDetails, getImage } from '../API/TMDBApi'
import numeral from 'numeral'
import moment from 'moment'

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
        const idMovie = params.idMovie
        getMovieDetails(idMovie).then(data => {
            this.setState({
                movie: data,
                isLoading: false
            })
        })
    }

    _displayMovie(){
        const movie = this.state.movie
        if (movie != undefined) {
            return (
            <ScrollView style={styles.scroll_view}>
                <Image
                    style={styles.image}
                    source={{uri: getImage(movie.backdrop_path)}}
                />
                <Text style={styles.title_movie}>{ movie.title }</Text>
                <Text style={styles.description_movie}>{ movie.overview }</Text>
                <Text style={styles.informations_movie}>Release: { moment( movie.release_date ).format('L') }</Text>
                <Text style={styles.informations_movie}>Rating: { movie.vote_average } / 10</Text>
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
        const { navigation, route } = this.props;
        const params = route.params;
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
        backgroundColor: '#fff'
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
        color: "#140152"
    }
})