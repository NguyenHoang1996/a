import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class SavedPlace extends Component {
  static navigationOptions = {
    header: null,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/personal.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  _toTrangCaNhanSetting = () => {
    const _toTrangCaNhanSetting = NavigationActions.navigate({
      routeName: "TrangCaNhanSetting"
    })
    this.props.navigation.dispatch(_toTrangCaNhanSetting);
  }

  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;

    // let avatar;
    // if (params.img === null)
    avatar = "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg";
    // else avatar = params.img;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "skyblue", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ marginRight: 16, fontFamily: "Roboto", fontSize: 18, color: "white" }}></Text>
          <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "white" }}>DANH SÁCH ĐÃ LƯU</Text>
          <Icon onPress={() => this._toTrangCaNhanSetting()} style={{ marginRight: 16 }} name="ios-cog" size={25} color="#fff" />
        </View>

        <View>
          <Image
            style={{ height: 180 }}
            source={{ uri: "http://eskipaper.com/images/sky-wallpaper-28.jpg" }}
          />
          <View style={{ position: "absolute", justifyContent: "flex-end", alignItems: "center", height: 180, width: "100%", backgroundColor: "#D3D3D3", opacity: 0.6 }}></View>
          <View style={{ position: "absolute", justifyContent: "flex-end", alignItems: "center", height: 170, width: "100%" }}>
            <Image
              style={{ height: 120, width: 120, borderWidth: 1, borderColor: "white", borderRadius: 60 }}
              source={{ uri: avatar }}
            />
            <Text style={{ fontSize: 16, color: "black" }}> asfd
              {/* {params.name} */}
            </Text>
          </View>
        </View>
        {/* <Text style={styles.welcome}>
          Trang Cá Nhân {params.name}
        </Text> */}
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
