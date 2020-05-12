import React from 'react';
import { Picker } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from '../assets/stylesheet';

let list = [];
for (let i = 0; i < 60; i++) {
  list.push(i.toString());
} 

export default class Menu extends React.Component {
  render() {
    return (
      <ModalDropdown style={styles.menu} dropdownTextStyle={styles.dropdownTextStyle} style={styles.dropdownButtonStyle} textStyle={styles.textStyle}options={list} onSelect={this.props.onValueChange} defaultValue={this.props.selected}/>
      //<Picker style={styles.menu} mode="dropdown" onValueChange={this.props.onValueChange} selectedValue={this.props.selected}>
        //{list.map( (num) => {
          //return (<Picker.Item label={num} value={num} key={num}/>);
        //})}
        //</Picker>
    )
  }
}