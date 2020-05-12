import React from 'react';
import { Text, View, Alert } from 'react-native';
import { styles } from './assets/stylesheet';
import Menu from './components/menu';
import Button from './components/buttonPlayPause';
import ButtonR from './components/buttonReset';
import Timer from './components/timer';
import CurrentState from './components/currentState';
import NavBar from './components/navbar';
import { Root, Container } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import moment from 'moment';


function leftPadding(n) {
  if (parseInt(n) < 10) {
    return "0" + n.toString();
  } else {
    return n.toString();
  }
}

function getTime(val) {
  return leftPadding(val) + ":00";
}


class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      currentTime: "25:00",
      workTime: "25:00",
      breakTime: "05:00",
      working: true,
      timer: null,
      playing: false,
      playPauseText: "Play",
      loading: true
    }
    this.setWorkTimer = this.setWorkTimer.bind(this);
    this.setBreakTimer = this.setBreakTimer.bind(this);
    this.playPauseButton = this.playPauseButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.countdown = this.countdown.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  setWorkTimer(val) {
    let newTime = getTime(val);
    this.setState({
      workTime: newTime,
    });
    if (!this.state.timer) {
      this.setState({
        currentTime: newTime,
      });
    }      
  }

  setBreakTimer(val) {
    let newTime = getTime(val);
    this.setState({
      breakTime: newTime,
    });
  }

  playPauseButton() {
    if (this.state.playing === false) { 
      this.setState({
        timer: setInterval(this.countdown, 1000),
        playing: true,
        playPauseText: "Pause"
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({
        paused: true,
        timer: null,
        playing: false,
        playPauseText: "Play"
      });
    }
  }

  resetButton () {
    if (this.state.playing === true) {
      this.playPauseButton();
      this.setState({
        currentTime: this.state.workTime,
        playing: false,
        paused: false,
        working: true,
        timer: null
      })
    } else {
      this.setState({
        currentTime: this.state.workTime,
        playing: false,
        paused: false,
        working: true,
        timer: null
      })
    }
  }

  countdown() {
    if (this.state.currentTime === "00:00" && this.state.playing === true) {
      if (this.state.working) {
        Alert.alert(
          "Done",
          "Working time done",
          [
            {
              text: "Take a break", onPress: () => {}
            }
          ],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          "Done",
          "Break time done",
          [
            {
              text: "Get back to work", onPress: () => {}
            }
          ],
          { cancelable: false }
        )
      }
      this.toggleStatus();
    } else {
      var time = moment(this.state.currentTime, "mm:ss");
      time.subtract(1, 'seconds');
      this.setState({
        currentTime: time.format("mm:ss")
      })
    }
  }

  toggleStatus() {
    if (this.state.working) {
      this.setState({
        working: false,
        currentTime: this.state.breakTime,
      })
    } else {
      this.setState({
        working: true,
        currentTime: this.state.workTime,
      })
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <Container>
          <NavBar/>
          <View style={styles.container}>
            <CurrentState working={this.state.working} timer={this.state.timer}/>
            <Timer currentTime={this.state.currentTime}/>
            <View style={{flexDirection: 'row'}}>
              <Button
                title={this.state.playPauseText}
                onPress={this.playPauseButton} 
              />
              <ButtonR
                title="Reset" 
                onPress={this.resetButton} 
              />
            </View>
            <View style={styles.menuContainer}>
              <Text style={styles.menuLabel}>Définir le temps de travail (min): </Text>
              <Menu 
                selected={Number(this.state.workTime.slice(0, 2)).toString()}
                onValueChange={this.setWorkTimer}
              />
            </View>
            <View style={styles.menuContainer}>
              <Text style={styles.menuLabel}>Définir le temps de pause (min): </Text>
              <Menu 
                selected={Number(this.state.breakTime.slice(0, 2)).toString()}
                onValueChange={this.setBreakTimer}
              />
            </View> 
          </View>
        </Container>
      </Root>
    );
  }
}

export default App;
