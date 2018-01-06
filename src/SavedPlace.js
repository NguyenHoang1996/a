import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

const Space = () => {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
  )
}

export default class SavedPlace extends Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/saved.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  constructor(props) {
    super(props);
    let diaDiem = [
      {
        "id": 0,
        "img": "https://kenh14cdn.com/thumb_w/600/d4b5d372a0/2015/08/05/9-05b6b.jpg",
        "text": "HỒ CON RÙA",
        "diaChi": "Turtle Lake, phường 6, District 3, Ho Chi Minh City",
        "danhGia": 7.8,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://kenh14cdn.com/thumb_w/600/d4b5d372a0/2015/08/05/9-05b6b.jpg",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://kenh14cdn.com/thumb_w/600/d4b5d372a0/2015/08/05/9-05b6b.jpg",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
      {
        "id": 1,
        "img": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
        "text": "NHÀ THỜ ĐỨC BÀ",
        "diaChi": "01 Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh",
        "danhGia": 10,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
      {
        "id": 2,
        "img": "http://landtoday.net/upload/1970/01/01/chua-xay-lai-cho-ben-thanh.jpg",
        "text": "CHỢ BẾN THÀNH",
        "diaChi": "Ben Thanh Market, Lê Lợi, Bến Thành, Quận 1, Hồ Chí Minh",
        "danhGia": 5.9,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
      {
        "id": 3,
        "img": "http://www.vietnamtourism.com/imguploads/news/2015/T5/30phodiboNH1.jpg",
        "text": "PHỐ ĐI BỘ NGUYỄN HUỆ",
        "diaChi": "Nguyễn Huệ, Bến Nghé, Quận 1, Hồ Chí Minh",
        "danhGia": 7.4,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
      {
        "id": 4,
        "img": "http://www.dinhdoclap.gov.vn/App_Themes/images/bg.jpg",
        "text": "DINH ĐỘC LẬP",
        "diaChi": "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Hồ Chí Minh",
        "danhGia": 8.5,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
      {
        "id": 5,
        "img": "http://www.bitexcofinancialtower.com/wp-content/themes/responsive/core/images/3.jpg",
        "text": "BITEXCO TOWER",
        "diaChi": "Bitexco Financial Tower, 2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh",
        "danhGia": 9.5,
        "comment": [
          {
            "userId": 0,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          },
          {
            "userId": 1,
            "userName": "Hoàng",
            "userImage": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
            "userComment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          }
        ]
      },
    ];

    console.log(JSON.stringify(this.props.navigation));
    this.state = { diaDiem };
  };

  _toSearch = () => {
    const _toSearch = NavigationActions.navigate({
      routeName: "Search"
    })
    this.props.navigation.dispatch(_toSearch);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "skyblue", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ marginRight: 16, fontFamily: "Roboto", fontSize: 18, color: "white" }}></Text>
          <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "white" }}>DANH SÁCH ĐÃ LƯU</Text>
          <Icon onPress={() => this._toSearch()} style={{ marginRight: 16 }} name="ios-search" size={25} color="#fff" />
        </View>
        <FlatList
          keyExtractor={(item, index) => index}
          data={this.state.diaDiem}
          renderItem={({ item }) => (
            <View>
              <Space />
              <View style={{ marginLeft: 16, marginRight: 16, height: 80, width: "100%", flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
                <Image
                  style={{ height: 60, width: 60 }}
                  source={{ uri: item.img }}
                />
                <View style={{ marginLeft: 8, width: 240, flexDirection: "column", justifyContent: "center" }}>
                  <Text numberOfLines={1} style={{ fontSize: 16, color: "black" }}>{item.text}</Text>
                  <Text numberOfLines={1} style={{ fontSize: 13, color: "#D3D3D3" }}>{item.diaChi}</Text>
                </View>
              </View>
            </View>
          )}
        />
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
