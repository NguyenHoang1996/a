
import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Platform, StyleSheet, View, Button, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Title, NavigationBar, Row, Divider, Caption, Video, Icon, Tile, Image } from '@shoutem/ui';
import { NavigationActions } from "react-navigation";

// import Swiper from 'react-native-swiper';
import CarouselPager from 'react-native-carousel-pager';
const HEIGHT_COL = 42;
const HEIGHT_SWIPE_TOP = 150;

// export default class DuyetBaiCarous extends Component {
class DuyetBaiNearMe extends Component {

    constructor(props) {
        super(props);
        let aaaa = [
            {
                "id": 0,
                "img": "https://kenh14cdn.com/thumb_w/600/d4b5d372a0/2015/08/05/9-05b6b.jpg",
                "text": "HỒ CON RÙA",
                "diaChi": "Turtle Lake, phường 6, District 3, Ho Chi Minh City"
            },
            {
                "id": 1,
                "img": "https://cuuhocsinhphuyencom.files.wordpress.com/2016/05/5214486810_49ccd5c42f_z.jpg?w=638&h=400",
                "text": "NHÀ THỜ ĐỨC BÀ",
                "diaChi": "01 Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh"
            },
            {
                "id": 2,
                "img": "http://landtoday.net/upload/1970/01/01/chua-xay-lai-cho-ben-thanh.jpg",
                "text": "CHỢ BẾN THÀNH",
                "diaChi": "Ben Thanh Market, Lê Lợi, Bến Thành, Quận 1, Hồ Chí Minh"
            },
            {
                "id": 3,
                "img": "http://www.vietnamtourism.com/imguploads/news/2015/T5/30phodiboNH1.jpg",
                "text": "PHỐ ĐI BỘ NGUYỄN HUỆ",
                "diaChi": "Nguyễn Huệ, Bến Nghé, Quận 1, Hồ Chí Minh"
            },
            {
                "id": 4,
                "img": "http://www.dinhdoclap.gov.vn/App_Themes/images/bg.jpg",
                "text": "DINH ĐỘC LẬP",
                "diaChi": "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Hồ Chí Minh"
            },
            {
                "id": 5,
                "img": "http://www.bitexcofinancialtower.com/wp-content/themes/responsive/core/images/3.jpg",
                "text": "BITEXCO TOWER",
                "diaChi": "Bitexco Financial Tower, 2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh"
            },
        ];

        console.log(JSON.stringify(this.props.navigation));
        this.state = { aaaa };
    };

    toChiTietBai(text) {
        const toChiTietBai = NavigationActions.navigate({
            routeName: "ChiTietBai",
            params: { name: text }
        })
        this.props.navigation.dispatch(toChiTietBai);
    }

    render() {
        let test = this.state.aaaa.map(item => {
  
            return (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => this.toChiTietBai(item.text)}
                    // onPress={() => this.toChiTietBai(item)}
                    style={{ height: 120, width: 120, marginRight: 8 }}>
                    <View style={{ paddingRight: 4 }}>
                        <Image
                            style={{ height: 80, width: 120 }}
                            source={{ uri: item.img }}
                        />
                        <View></View>
                        <View style={{ height: 30, width: "100%" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                            </View>
                            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 12 }}>{item.diaChi}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })

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

                <ScrollView style={{ height: 150, width: "100%", marginRight: 8 }} horizontal={true} >
                    {test}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
    },
    carous: {
        height: 120,
        width: 320,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 0
    },
    carousImage: {
        height: 120,
        width: 320,
        backgroundColor: "transparent",
    },
    carousImageInside: {
        height: 120,
        width: 320,
        position: "absolute",
        justifyContent: "center",
        alignItems: 'center',
    },
    textOnImg: {
        fontSize: 24,
        color: "white",
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

export default DuyetBaiNearMe;