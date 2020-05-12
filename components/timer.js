import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/stylesheet';

export default class Timer extends React.Component {
	render() {
		return (
            <View style={styles.timerContainer}>
                <Text style={this.props.currentTime <= '00:20' ? styles.timerEnd : styles.timer}>{this.props.currentTime}</Text>
            </View>
		)
	}
}