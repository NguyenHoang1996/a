import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Left, Icon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";
import PhotoUpload from 'react-native-photo-upload'

export default class ThemDiaDiem extends Component {
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

    constructor(props) {
        super(props);

    };

    toMainAppScreen = () => {
        const toMainAppScreen = NavigationActions.navigate({
            routeName: "MainAppScreen",
            //params: { name: userName }
        })
        this.props.navigation.dispatch(toMainAppScreen);
    }

    _onPressPhoto = (avatar) => {
        if (avatar) {
            console.log('Image base64 string: ', avatar)
            // let formData = new FormData();
            // formData.append('photo', {
            //     uri: avatar.path,
            //     type: avatar.type,
            //     name: avatar.fileName
            // })
            let a = avatar.data;
            var dataS = new FormData();
            dataS.append('my_photo', {
                uri: avatar.path, // your file path string
                name: avatar.fileName,
                type: avatar.type
            })
            // let photo = {
            //     uri: avatar.uri,
            //     type: avatar.type,
            //     name: avatar.fileName
            // };
            // formData.append('file', photo);
            console.log("Form data : ", dataS);
            return fetch(
                "http://103.252.1.5:8089/SocialPlaceServer/Image/Post",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST',
                    body: dataS
                }
                    // .then((responseData) => {
                    //     // Log the response form the server
                    //     // Here we get what we sent to Postman back
                    //     console.log(responseData);
                    // })
                    // .catch(err => {
                    //     console.log(err);
                    // })
                // .then(console.log("======================Up load photo: "))
                // .then((response) => { return response.json() })
                // .then((responseJson) => { console.log(" up load photo: ", responseJson) })
                // .catch((error) => console.error(error))
            )
        }
    }

    AddLocation() {
        //
    }

    addPhoto() {
        var photo = {
            uri: uriFromCameraRoll,
            type: 'image/jpeg',
            name: 'photo.jpg',
        };

        var body = new FormData();
        body.append('photo', photo);
        body.append('title', 'A beautiful photo!')

        return fetch('http://103.252.1.5:8089/SocialPlaceServer/Image/Post', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.dataUser),
        })
            .then((response) => response.json())
            .then((responseJsons) => {
                // this.setState({ responseJson: responseJsons }),
                console.log("The 2nd .then in func _checkLogin : ", responseJsons);
                if (responseJsons.mvCode == 1) {
                    this.toMainAppScreen(this.state.dataUser.UserName, null);
                }
                else Alert.alert("Login Failed ! ");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginTop: 0, height: 50, width: "100%", backgroundColor: "skyblue", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Icon
                        onPress={() => goBack()}
                        style={{ marginLeft: 16 }} name="ios-arrow-back" size={25} color="#fff" />
                    <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "white" }}>Chia sẽ địa điểm</Text>
                    <Text style={{ marginRight: 16, fontFamily: "Roboto", fontSize: 18, color: "white" }}></Text>
                </View>
                <View style={{ marginTop: 0, height: 50, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>
                        {params.title}
                    </Text>
                </View>

                {/* <Image source={{uri: `data:image/gif;base64,${encodedData}`}} /> */}

                <View style={{ marginTop: 0, height: 120, width: "100%", }}>
                    <PhotoUpload
                        onPhotoSelect={avatar => { this._onPressPhoto(avatar) }}
                    >
                        <Image
                            style={{ width: 120, height: 120 }}
                            resizeMode='cover'
                            source={{
                                uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                            }}
                        />
                    </PhotoUpload>
                </View>

                <ScrollView style={{ marginTop: 5, width: 320, height: 320 }}>

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Loại địa điểm</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Mô tả</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Loại địa điểm</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Mô tả</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Nhận xét</Text>
                    <TextInput
                        style={{ height: 120, marginBottom: 8 }}
                        multiline={true}
                    />
                </ScrollView>

                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ height: 38, width: 200, justifyContent: "center", alignItems: "center" }}
                        onpress={this.AddLocation}>
                        <View style={{ backgroundColor: "#49B68C", height: 30, width: 200, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white" }}>CHIA SẺ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
