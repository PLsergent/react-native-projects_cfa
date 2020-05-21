import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';

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
            <Label>Name of the movie :</Label>
            <Input onChangeText={this.handleNameChange}/>
          </Item>
        </Form>
        <Button block rounded primary style={styles.submitButton} iconRight onPress={this.handleSubmit}>
          <Text> Submit </Text>
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
    backgroundColor: "#f3f2ff",
    borderBottomColor: "#4630eb"
  }
})