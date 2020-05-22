import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';
import { Container, Content, Card, Text, CardItem, Body, Button, Icon, Toast } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
import store from '../store/configStore';

let list = [];
for (var i=0; i<=10; i++) {
    list.push(i);
}

export default class AddMovieRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: -1
        }
    }

    handleSubmit = () => {
        if (this.state.rating == -1) {
            Toast.show({
                text: "Please rate the movie.",
                buttonText: 'Okay'
            })
        } else {
            const { navigation, route } = this.props;
            const params = route.params;
            const movie = params.item;
            // Add the movie
            const action = { type: "ADD_MOVIE", value: {id: movie.id, rating: this.state.rating} }
            store.dispatch(action);

            // Reset the stack
            this.props.navigation.goBack();
            this.props.navigation.goBack();

            // Go to movie screen
            this.props.navigation.navigate('Movies');
        }
    }

    onRatingChange = (val) => {
        this.setState({
            rating: val
        })
    }

    render() {
        const { navigation, route } = this.props;
        const params = route.params;
        const movie = params.item;
        return (
            <Container>
                <Content style={styles.card}>
                    <Card>
                        <CardItem header>
                            <Text style={styles.title}> { movie.title } </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.overview} numberOfLines={5}>
                                    { movie.overview }
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text style={styles.release_date}> Release : { movie.release_date } </Text>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem header>
                            <Text style={styles.rating_title}> Your rating : </Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <ModalDropdown
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                    style={styles.dropdownButtonStyle}
                                    textStyle={styles.textStyle}
                                    options={list}
                                    onSelect={this.onRatingChange}
                                    defaultValue="Choose"/>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text style={styles.release_date}>from 1 to 10</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Button block rounded primary style={styles.submitButton} iconRight onPress={this.handleSubmit}>
                    <Text> Add the movie </Text>
                    <Icon name='done-all' />
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4630eb"
    },
    overview: {
        textAlign: 'justify'
    },
    release_date: {
        fontStyle: "italic"
    },

    rating_title: {
        fontWeight: "bold",
        paddingTop: 30,
        fontSize: 25
    },

    dropdownTextStyle: {
        fontSize: 30,
        color: "black",
        paddingHorizontal: 50
    },
    textStyle: {
        paddingVertical: 5,
        fontSize: 25,
    },

    dropdownButtonStyle: {
        width: 120,
        backgroundColor: "#dddddd",
        borderRadius: 5,
        alignItems: 'center'
    },

    submitButton: {
        marginHorizontal: 45,
        marginBottom: 30
    },
  })