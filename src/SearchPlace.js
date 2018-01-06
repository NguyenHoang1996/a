import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

import { NavigationActions } from "react-navigation";

export default class SavedPlace extends Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/search.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Google Map placed here !
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
