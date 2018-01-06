import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Title, Image, NavigationBar, Row, Text, Divider, Caption, Video, Button, Icon, TouchableOpacity, Tile } from '@shoutem/ui';
// import Carousel from './Carousel';
import { NavigationActions } from "react-navigation";

import CarouselPager from 'react-native-carousel-pager';
const HEIGHT_COL = 42;

Post = [
  {
    name: "Phúc Long Coffee",
    address: "21 - 23, Nguyễn Thị Minh Khai",
    picture: [
      { url: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png" },
      { url: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png" }
    ],
    comment: [
      {
        userName: "Hoàng",
        userImage: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png",
        userComment: "Ahihi...",
      }
    ]
  },
]

const ItemPostImage = ({ name, address, comment }) => {
  return (
    <TouchableOpacity onPress={this.toCommentChiTiet} >
      <View>
        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>
          <View style={{ height: HEIGHT_COL, width: HEIGHT_COL, justifyContent: "center" }}>
            <View style={{ marginLeft: 8, backgroundColor: "#42B713", borderRadius: HEIGHT_COL / 4, height: HEIGHT_COL / 2, width: HEIGHT_COL / 2, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "white" }}>7.7</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", marginRight: 8 }}>
            <View style={{ height: HEIGHT_COL / 2, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold' }}> {name}</Text>
              <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: "#42B713" }}></View>
            </View>
            <View style={{ height: HEIGHT_COL / 2, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 12 }}> {address}</Text>
              <Text style={{ fontSize: 12 }}> 4.4Km</Text>
            </View>
          </View>
        </View>
        <Divider styleName="line" />
        <Image
          styleName="large-wide"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
        <Divider styleName="line" />
        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>

          <View>

          </View>

          <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
            <View style={{ height: HEIGHT_COL, justifyContent: "center" }}>
              <Text> {comment} </Text>
            </View>
          </View>

        </View>
        <Divider styleName="line" />
        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>
          <View style={{ backgroundColor: "powderblue", borderRadius: HEIGHT_COL / 2, width: HEIGHT_COL, justifyContent: "center", alignItems: "center" }}>
            <Text>7.7</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
            <View style={{ height: HEIGHT_COL, justifyContent: "center" }}>
              <Text> {comment} </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Carous = () => {
  return (
    <View style={{ marginTop: 0, height: 120, width: "100%", flexDirection: 'row', backgroundColor: '#D3D3D3', paddingTop: 5, paddingBottom: 5 }}>
      <CarouselPager
        pageStyle={{
          backgroundColor: 'red',
          padding: 0,
        }}
      >
        <View
          key={'page-' + 1}
          style={{
            height: 120,
            width: 320,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            backgroundColor: '#fff',
            borderRadius: 0
          }}>
          {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
          {/* <Image
            style={{ height: '100%', width: "100%" }}
            source={{ uri: "https://static.mytour.vn/upload_images/Image/Location/8_1_2015/Du-lich-ho-con-rua-mytour-1.jpg" }}
          />
          <View style={{ height: '100%', width: "100%", position: "absolute", justifyContent: "flex-end", alignItems: "center" }}>
            <View style={{ height: 24, width: '95%', alignItems: "center", backgroundColor: "red" }}>
              <Text style={{ color: "white" }}>HỒ CON RÙA</Text>
            </View>
          </View> */}
          <Image
            styleName="large-wide"
            source={{ uri: 'https://static.mytour.vn/upload_images/Image/Location/8_1_2015/Du-lich-ho-con-rua-mytour-1.jpg' }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">HỒ CON RÙA</Title>
            </Tile>
          </Image>
        </View>

        <View
          key={'page-' + 2}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            backgroundColor: '#fff',
            borderRadius: 0
          }}>
          {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
          {/* <Image
            style={{ height: '100%', width: "100%" }}
            source={{ uri: "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400" }}
          /> */}
          <Image
            styleName="large-wide"
            source={{ uri: 'https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400' }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">NHÀ THỜ ĐỨC BÀ</Title>
            </Tile>
          </Image>
        </View>

        <View
          key={'page-' + 3}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            backgroundColor: '#fff',
            borderRadius: 0
          }}>
          {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
          {/* <Image
            style={{ height: '100%', width: "100%" }}
            source={{ uri: "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400" }}
          /> */}
          <Image
            styleName="large-wide"
            source={{ uri: 'http://landtoday.net/upload/1970/01/01/chua-xay-lai-cho-ben-thanh.jpg' }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">CHỢ BẾN THÀNH</Title>
            </Tile>
          </Image>
        </View>
      </CarouselPager>
    </View>
  )
}

const ItemNearMe = ({ uriString, colorDot, sizeDot }) => {
  return (
    <TouchableOpacity style={{ height: 120, width: 120, marginRight: 8 }}>
      <View style={{ paddingRight: 4 }}>
        <Image
          borderRadius={5}
          style={{ height: 80, width: 120, borderRadius: 50, marginRight: 4 }}
          source={{ uri: uriString }}
        />
        <View></View>
        <View style={{ height: 30, width: "100%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ height: sizeDot, width: sizeDot, borderRadius: sizeDot / 2, backgroundColor: colorDot, marginRight: 4 }}></View>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>Ten Quan</Text>
          </View>
          <Text style={{ fontSize: 12 }}>Dia chi</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

const NearMe = () => {
  return (
    <View style={{ height: 150, width: "100%", marginLeft: 8, marginRight: 8 }}>
      <View style={{ paddingRight: 8, height: 30, width: "100%", flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        <Text>Gần tôi</Text>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ fontSize: 12 }}>Xem thêm</Text>
          <Image
            style={{ marginLeft: 5, height: 12, width: 12 }}
            source={require('./img/locate.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ height: 120, width: "100%", marginRight: 8 }} horizontal={true} >
        <ItemNearMe sizeDot={10} colorDot="#42B713" uriString="https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg" />
        <ItemNearMe sizeDot={10} colorDot="#42B713" uriString="https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg" />
        <ItemNearMe sizeDot={10} colorDot="#42B713" uriString="https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg" />
        <ItemNearMe sizeDot={10} colorDot="#42B713" uriString="https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg" />
        <ItemNearMe sizeDot={10} colorDot="#42B713" uriString="https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg" />
      </ScrollView>
    </View>
  )
}

const Space = () => {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
  )
}

export default class MyDuyetBai extends Component {
  static navigationOptions = {
    header: null,
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
    const { params } = this.props.navigation;
    return (
      <View navigation={this.props.navigation}>
        <View style={{ width: "100%", height: 58, paddingTop: 5, backgroundColor: "#551A8B" }}>
          <NavigationBar
            styleName="clear"
            hasHistory
            centerComponent={<Title>ĐỊA ĐIỂM {params[0].userID}</Title>}
            share={{
              link: 'http://shoutem.github.io',
              text: 'This is the best',
              title: 'Super cool UI Toolkit',
            }}
          />
        </View>

        <ScrollView style={{ height: 508 }}>
          <Carous />

          <NearMe />

          <Space />
          <ItemPostImage
            name="Phuc Long" address="21 - 23, Nguyễn Thị Minh Khai"
            comment=" Chỗ để comment"
          />
          <Space />
          <ItemPostImage name="Hoang Long" address="Many place" comment=" Chỗ để comment" />

        </ScrollView>
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