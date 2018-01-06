
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Title, NavigationBar, Row, Divider, Caption, Video, Icon, Tile, Image } from '@shoutem/ui';
import { NavigationActions } from "react-navigation";

const HEIGHT_COL = 42;
const HEIGHT_SWIPE_TOP = 150;
const LIMIT_CHARACTER = 95;

const Space = () => {
    return (
        <View style={{ height: 5, width: "100%", backgroundColor: '#D3D3D3' }}></View>
    )
}

class DuyetBaiBaiPost extends Component {

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

        console.log(JSON.stringify(this.props.navigation.state.params.name));
        this.state = { aaaa };
    };

    toChiTietBai(text) {
        const toChiTietBai = NavigationActions.navigate({
            routeName: "ChiTietBai",
            params: { name: text }
        })
        this.props.navigation.dispatch(toChiTietBai);
    }

    toCommentChiTiet( userId, postId ) {
        const toCommentChiTiet = NavigationActions.navigate({
            routeName: "CommentChiTiet",
            params: { userID: userId, postID: postId}
        })
        this.props.navigation.dispatch(toCommentChiTiet);
    }

    render() {
        let test = this.state.aaaa.map(item => {
            return (
                <View key={item.id}>
                    <Space />
                    {/* Header */}
                    <TouchableOpacity onPress={() => this.toChiTietBai(item.text)}>
                        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>
                            <View style={{ height: HEIGHT_COL, width: HEIGHT_COL, justifyContent: "center" }}>
                                <View style={{ marginLeft: 8, backgroundColor: "#42B713", borderRadius: HEIGHT_COL / 4, height: HEIGHT_COL / 2, width: HEIGHT_COL / 2, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, color: "white" }}>{item.danhGia}</Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", marginRight: 8 }}>
                                <View style={{ height: HEIGHT_COL / 2, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold' }}>{item.text}</Text>
                                </View>
                                <View style={{ height: HEIGHT_COL / 2, width: "85%", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 12 }}>{item.diaChi}</Text>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 12 }}> 4.4Km</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Divider styleName="line" />
                    <Image
                        styleName="large-wide"
                        source={{ uri: item.img }}
                    />
                    <Divider styleName="line" />
                    <TouchableOpacity onPress={() => this.toCommentChiTiet(item.comment[0].userId, item.id)}>
                        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>

                            <View style={{ height: HEIGHT_COL, width: HEIGHT_COL, justifyContent: "center" }}>
                                <Image
                                    style={{ height: HEIGHT_COL / 2, width: HEIGHT_COL / 2, marginLeft: 8 }}
                                    source={{ uri: item.img }}
                                />
                            </View>

                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ height: HEIGHT_COL, justifyContent: "center" }}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                                            {item.comment[0].userName} :
                                        </Text>
                                        {" " + item.comment[0].userComment}
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <Divider styleName="line" />
                    <TouchableOpacity onPress={() => this.toCommentChiTiet(item.comment[1].userId, item.id)}>
                        <View style={{ height: HEIGHT_COL, width: "100%", flexDirection: "row" }}>
                            <View style={{ height: HEIGHT_COL, width: HEIGHT_COL, justifyContent: "center" }}>
                                <Image
                                    style={{ height: HEIGHT_COL / 2, width: HEIGHT_COL / 2, marginLeft: 8 }}
                                    source={{ uri: item.img }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ height: HEIGHT_COL, justifyContent: "center" }}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={2} style={{ fontSize: 12 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                                            {item.comment[1].userName} :
                                        </Text>
                                        {" " + item.comment[1].userComment}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })

        return (
            <View>
                {test}
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

export default DuyetBaiBaiPost;