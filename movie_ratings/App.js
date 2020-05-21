import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import store from './store/configStore';
import { Root, Container } from "native-base";
import * as Font from 'expo-font';
import { AppLoading } from "expo";

import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
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
    } else {
      return (
        <Root>
          <Container>
            <Provider store={store}>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                <NavigationContainer linking={LinkingConfiguration}>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Movie Ratings" component={BottomTabNavigator} />
                  </Stack.Navigator>
                </NavigationContainer>
              </View>
            </Provider>
          </Container>
        </Root>
        
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
