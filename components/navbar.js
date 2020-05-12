import React from 'react';
import { Header, Button, Left, Body, Right, Title, Text, Toast } from 'native-base';

export default class HeaderTitleExample extends React.Component {
  displayCredit() {
    Toast.show({
      text: 'Pierre-Louis Sergent / github: @plsergent',
      buttonText: 'Done',
      duration: 10000
    })
  }

  render() {
    return (
        <Header>
        <Left/>
        <Body>
            <Title>Pomodoro</Title>
        </Body>
        <Right>
            <Button>
              <Text onPress={this.displayCredit}>Crédits</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}