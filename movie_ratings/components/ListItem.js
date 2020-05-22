import React, { Component } from 'react';
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
        const { item, nextStepRating } = this.props;
        return (
            <ListItem style={{borderBottomColor: "#4630eb"}} onPress={() => nextStepRating(item)}>
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