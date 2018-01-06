import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

import { NavigationActions } from "react-navigation";

export default class DuyetBai extends Component {
  static navigationOptions = {
    header : null,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  toChiTietBai = () => {
    const toChiTietBai = NavigationActions.navigate({
      routeName: "ChiTietBai"
    })
    this.props.navigation.dispatch(toChiTietBai);
  }

  toCommentChiTiet = () => {
    const toCommentChiTiet = NavigationActions.navigate({
      routeName: "CommentChiTiet"
    })
    this.props.navigation.dispatch(toCommentChiTiet);
  }

  render() {

    const { naviga } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('ChiTietBai', { name: 'Lucy' })}
          title="Go to ChiTietBai"
        />

        <Button
          onPress={this.toCommentChiTiet}
          title="Go to CommentChiTiet"
        />

        {/* <TouchableOpacity onPress={this.toCommentChiTiet}>
          <View style={styles.button}>
            <Text>Press me!</Text>
          </View>
        </TouchableOpacity> */}
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
