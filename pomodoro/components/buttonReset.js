import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export default class Buttons extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>
                    <FontAwesomeIcon style={{color: "#ffd800"}} icon={ faRedoAlt } />
                    {" "}
                    {this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}