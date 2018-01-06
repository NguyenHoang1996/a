import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import { NavigationActions } from "react-navigation";
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity';
// import { TextInput } from '@shoutem/ui/components/TextInput';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/personal.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    constructor(props) {
        super(props);
        let dataUser =
            {
                UserName: "thanhsu",
                Password: "123456"
            };
        UserName = "UserName1"; Password = "Password1";
        responseJson = ""
        this.state = {
            dataUser,
            //  UserName, Password, 
            responseJson, text: 'Useless Placeholder'
        };
    };

    toMainAppScreen = (userName, img, userID) => {
        const toMainAppScreen = NavigationActions.navigate({
            routeName: "DuyetBai",
            params: { name: userName, img: img , userID: userID}
        })
        this.props.navigation.dispatch(toMainAppScreen);
    }

    toRegisterAppScreen = () => {
        const toRegisterAppScreen = NavigationActions.navigate({
            routeName: "RegisterAppScreen"
        })
        this.props.navigation.dispatch(toRegisterAppScreen);
    }

    _checkLogin() {
        return fetch('http://103.252.1.5:8089/SocialPlaceServer/Action/DoLogin.Action', {
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
                // console.log("The 2nd .then in func _checkLogin : ", responseJsons);
                if (responseJsons.mvCode == 1)
                {
                    // console.log("Inside the _checkLogin : ", responseJsons.mvData[0]);
                    this.toMainAppScreen(this.state.dataUser.UserName, null, responseJsons.mvData[0].mvUserID);
                }
                else Alert.alert("Login Failed ! ");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        function checkLogin(JSONdata) {
            // console.log("Callback funtion data:", JSONdata)
            if (JSONdata.mvResult == 1) {
                this.toMainAppScreen(this.state.UserName);
                console.log("Login thanh cong", JSONdata);
            }
        }

        return (
            <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                <View style={{ marginTop: 0, height: 50, width: "100%", backgroundColor: "skyblue", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "white" }}>ĐĂNG NHẬP</Text>
                </View>

                <Image
                    style={{ height: 300, width: "100%" }}
                    source={{ uri: "https://i.pinimg.com/564x/09/02/83/0902833901f47df132448cb06cd9a3db--map-marker-mobile-marketing.jpg" }}
                />

                <View style={{ width: 310 }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Tên Đăng Nhập</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                        onChangeText={(text) => this.setState({
                            dataUser: {
                                ...this.state.dataUser,
                                UserName: text
                            }
                        })}
                        value={this.state.dataUser.UserName}
                    />
                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Mật khẩu</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                        onChangeText={(text) => this.setState({
                            dataUser: {
                                ...this.state.dataUser,
                                Password: text
                            }
                        })}
                        value={this.state.dataUser.Password}
                    />
                </View>

                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => this._checkLogin()}
                        // onPress={() => this.toMainAppScreen(this.state.dataUser.UserName, null)}
                        style={{
                            height: 38, width: 200, justifyContent: "center", alignItems: "center"
                        }}>
                        <View style={{ backgroundColor: "#49B68C", height: 30, width: 200, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white" }}>ĐĂNG NHẬP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => Alert.alert(this.state.dataUser.UserName, this.state.dataUser.Password)}
                        onPress={() => this.toRegisterAppScreen()}
                        style={{ height: 35, width: 200, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Roboto", color: "#49B68C" }}>ĐĂNG KÝ TÀI KHOẢN MỚI</Text>
                    </TouchableOpacity>
                </View>

            </View>

            // <Container>
            //     <Header />
            //     <Content>
            //         <Form>
            //             <Item floatingLabel>
            //                 <Label>Username</Label>
            //                 <Input onChangeText={(text => this.setState({ UserName: text }))} />
            //             </Item>
            //             <Item floatingLabel last>
            //                 <Label>Password</Label>
            //                 <Input onChangeText={(text => this.setState({ Password: text }))} />
            //             </Item>
            //         </Form>
            //         <Button
            //             onPress={() => {
            //                 let obj = {
            //                     UserName: this.state.UserName,
            //                     Password: this.state.Password
            //                 }
            //                 console.log("Press Login");
            //                 this.setState({ dataUser: obj });
            // fetch('http://103.252.1.5:8089/SocialPlaceServer/Action/DoLogin.Action', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(this.state.dataUser),
            // })
            //     .then((response) => response.json())
            //     .then((responseJsons) => {
            //         this.setState({ responseJson: responseJsons })
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
            //             }}
            //             title="Login"
            //         />
            //         <Button
            //             onPress={() => this.toMainAppScreen("abc")}

            //             // onPress={() => { console.log(this.state.responseJson), checkLogin(this.state.responseJson) }}
            //             title="Register"
            //             style={{ marginBottom: 20 }}
            //         />
            //     </Content>
            // </Container>
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
