/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,Image
} from 'react-native';
import { NavigationActions } from "react-navigation";
import {Provider} from 'react-redux';
import {Store} from './store/store';
import MainContainer from './containers/mainContainer';
//import AddLocation from './components/addLocation';




export default class SearchMap extends Component<{}> {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../img/personal.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    ),
  };

  render() {
    return (
        <Provider store = {Store}>
            
            <MainContainer navigation={this.props.navigation}/>
           
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
