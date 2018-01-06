import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Title, NavigationBar, Row, Divider, Caption, Video, Icon, Tile } from '@shoutem/ui';

import { NavigationActions } from "react-navigation";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const ItemWidth = (window.width - 16) / 5;

export default class ChiTietBai extends Component {

  constructor(props) {
    super(props);
    let aaaa = [
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

    let dataPlace = {
      KeyWord: "", UserID: "", LocationX: "", IDTypePlace: "", LocationY: ""
    };

    let seeMore = false;
    console.log(JSON.stringify(this.props.navigation));
    this.state = { aaaa, seeMore };
  };

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  });

  toViTriMapChiTiet = () => {
    const toViTriMapChiTiet = NavigationActions.navigate({
      routeName: "ViTriMapChiTiet"
    })
    this.props.navigation.dispatch(toViTriMapChiTiet);
  }

  toCommentChiTiet = () => {
    const toCommentChiTiet = NavigationActions.navigate({
      routeName: "CommentChiTiet"
    })
    this.props.navigation.dispatch(toCommentChiTiet);
  }

  componentWillMount() {
    let datas =
      fetch('http://103.252.1.5:8089/SocialPlaceServer/Action/DoSearchPlace.Action', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.dataPlace)
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("responseJson ChiTietBai : ", responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
        console.log("ChiTietBai JSON : ", JSON.stringify(datas));
  }

  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;

    function isBaiPost(mang) {
      return mang.text === `${params.name}`;
    }
    let thongTinBai = this.state.aaaa.find(isBaiPost);

    let noiDungMoTa;
    if (this.state.seeMore === true)
      noiDungMoTa =
        <View style={{ borderBottomWidth: 0.5, height: 180, width: "100%", padding: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>MÔ TẢ</Text>
          <Text
            style={{ textAlignVertical: "center", textAlign: "justify", }}>
            {thongTinBai.comment[0].userComment}
          </Text>
        </View>

    else
      noiDungMoTa =
        <View style={{ borderBottomWidth: 0.5, height: 120, width: "100%", padding: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>MÔ TẢ</Text>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={5}
            style={{ textAlignVertical: "center", textAlign: "justify", }}>
            {thongTinBai.comment[0].userComment}
          </Text>
        </View>


    clickToSeeMore = () => {
      this.setState(previousState => {
        return { seeMore: !previousState.seeMore };
      });
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: thongTinBai.img }}
            style={styles.imagePost}
          />

          <View style={styles.bodyHeader}>
            <Text style={styles.text}>{thongTinBai.text}</Text>
            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.textAddress}>{thongTinBai.diaChi}</Text>
          </View>

          <View style={{ borderBottomWidth: 0.5, width: "100%", flexDirection: "row", alignItems: 'center', }}>
            <View style={styles.item}>
              <Text style={{ fontSize: 18, color: "black" }}>11</Text>
              <Text style={{ fontSize: 12 }}>Comment</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ fontSize: 18, color: "black" }}>12</Text>
              <Text style={{ fontSize: 12 }}>Image</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ fontSize: 18, color: "black" }}>13</Text>
              <Text style={{ fontSize: 12 }}>Check In</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ fontSize: 18, color: "black" }}>14</Text>
              <Text style={{ fontSize: 12 }}>Save</Text>
            </View>
            <View style={styles.item}>
              <View style={{ height: 40, width: 40, backgroundColor: "#551A8B", borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 8 }}>
                <Text style={{ fontSize: 18, color: "white" }}>{thongTinBai.danhGia}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={{ borderBottomWidth: 0.5, height: 160, width: "100%", justifyContent: 'center', alignItems: 'center', }}>
            <View >
              <Text>Link to Map</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickToSeeMore}>
            {noiDungMoTa}
          </TouchableOpacity>

          {/* <Text>ChiTietBai (1) {params.name}</Text>
          <Button
            onPress={this.toCommentChiTiet}
            title="Go to CommentChiTiet"
          />
          <Button
            onPress={this.toViTriMapChiTiet}
            title="Go to ViTriMapChiTiet"
          />
          <Button
            onPress={() => goBack()}
            title="Go back"
          /> */}

          {/* <TouchableOpacity onPress={this.toCommentChiTiet}>
          <View style={styles.button}>
            <Text>Go toCommentChiTiet!</Text>
          </View>
        </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={styles.button}>
            <Text>Go back!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goBack()}>
          <View style={styles.button}>
            <Text>Go back 2!</Text>
          </View>
        </TouchableOpacity> */}
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  imagePost: {
    marginTop: 0,
    height: 275,
    width: "100%"
  },
  bodyHeader: {
    height: 48,
    width: "100%",
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 16,
    fontFamily: "Helvetica Neue",
    color: "black",
    marginLeft: 8,
  },
  textAddress: {
    fontSize: 12,
    fontFamily: "Helvetica Neue",
    color: "black",
    marginLeft: 8,
  },
  container: {
    marginTop: 0,
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
  item: {
    width: ItemWidth,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
