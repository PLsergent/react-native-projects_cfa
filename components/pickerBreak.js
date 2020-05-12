import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from '../assets/stylesheet';

let list = {"1":"1", "2":"2", "5":"5", "10":"10", "15":"15", "20":"20", "30":"30"};

export default class PickerBreak extends React.Component {
  render() {
    return (
      <ModalDropdown style={styles.picker}
        dropdownTextStyle={styles.dropdownTextStyle}
        style={styles.dropdownButtonStyle}
        textStyle={styles.textStyle}
        options={list}
        onSelect={this.props.onValueChange}
        defaultValue={this.props.selected}/>
    )
  }
}