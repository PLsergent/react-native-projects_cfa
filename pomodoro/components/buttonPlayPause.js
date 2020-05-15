import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default class Buttons extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>
                    {this.props.title === "Play" ?
                        <FontAwesomeIcon style={{color: "#c2f8cb"}} icon={ faPlay } /> :
                        <FontAwesomeIcon style={{color: "#ef476f"}} icon={ faPause } />
                    }
                    {" "}
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}