import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from '../assets/stylesheet';

let list = {"15":"15", "20":"20", "25":"25", "30":"30", "40":"40", "45":"45", "50":"50", "60":"60"};

export default class PickerWork extends React.Component {
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