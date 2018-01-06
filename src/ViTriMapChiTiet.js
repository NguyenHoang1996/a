import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

import { NavigationActions } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ViTriMapChiTiet extends Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => goBack()}>
          <View style={styles.button}>
            <Text>goBack!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 32,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
