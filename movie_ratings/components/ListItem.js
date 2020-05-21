import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Icon,
    ListItem,
    Text,
    Left,
    Right,
  } from "native-base";

export default class ListItemMovie extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props;
        return (
            <ListItem>
                <Left>
                    <Text>
                        { item.title }
                    </Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        );
    }
}