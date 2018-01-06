import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import PhotoUpload from 'react-native-photo-upload'

import { NavigationActions } from "react-navigation";

export default class Login extends Component {
    constructor(props) {
        super(props);
        let baseString;
    };

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

    _onPressPhoto = (avatar) => {
        if (avatar) {
            console.log('Image base64 string: ', avatar)
            let formData = new FormData();
            let photo = {
                uri: avatar.path,
                type: avatar.type,
                name: avatar.fileName
            };
            formData.append('file', photo);
            console.log("Form data : ", formData);
            fetch(
                "http://103.252.1.5:8089/SocialPlaceServer/Image/Post",
                ({
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                })
                    .then((response) => response.json())
                    .then((responseJson) => { console.log(responseJson) })
            )
        }
    }

    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <PhotoUpload
                    onPhotoSelect={avatar => { this._onPressPhoto(avatar) }}
                >
                    <Image
                        style={{
                            paddingVertical: 30,
                            width: 150,
                            height: 150,
                            borderRadius: 75
                        }}
                        resizeMode='cover'
                        source={{
                            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                        }}
                    />
                </PhotoUpload>
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
