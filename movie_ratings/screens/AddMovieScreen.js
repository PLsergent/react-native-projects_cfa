import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text, Icon, Toast } from 'native-base';

export default class AddMovieScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleSubmit = () => {
    if (this.state.name.length > 0 ) {
      this.props.navigation.navigate('Choose your movie in the list', {item: this.state.name});
    } else {
      Toast.show({
        text: "Please enter a movie title.",
        buttonText: 'Okay'
      })
    }
  }

  handleNameChange = (name) => {
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <Form>
          <Item stackedLabel style={styles.field}>
            <Label>Enter a movie title :</Label>
            <Input onChangeText={this.handleNameChange}/>
          </Item>
        </Form>
        <Button block rounded primary style={styles.submitButton} iconRight onPress={this.handleSubmit}>
          <Text> Next </Text>
          <Icon name='arrow-forward' />
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  submitButton: {
    marginHorizontal: 45,
    marginTop: 50
  },
  field: {
    backgroundColor: "#fafafa",
    borderBottomColor: "#4630eb",
    marginRight: 10
  }
})