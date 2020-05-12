import React from 'react';
import { Header, Button, Left, Body, Right, Title, Text } from 'native-base';

export default class HeaderTitleExample extends React.Component {
  render() {
    return (
        <Header>
        <Left/>
        <Body>
            <Title>Pomodoro</Title>
        </Body>
        <Right>
            <Button transparent>
              <Text>Crédits</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}