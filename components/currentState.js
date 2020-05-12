import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/stylesheet';

export default class currentState extends React.Component {
	render() {
		return (
			<View>
				{
				  this.props.working ?
				  <Text style={styles.labelGreen}>Working</Text> :
				  <Text style={styles.labelRed}>Pause</Text>
				}
			</View>
		)
	}
}