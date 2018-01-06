import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Left, Icon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from "react-navigation";

export default class TrangCaNhanSetting extends Component {
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
        let dataUser =
            {
                UserName: "thanhsu",
                Password: "123456",
                FirstName: "",
                LastName: "",
                Email: "",
                PhoneNumber: "",
                BirthYear: "",
                Token: "123123123123"
            };
        UserName = "UserName1"; Password = "Password1"; FirstName = "FirstName1"; LastName = "LastName1";
        Email = "Email1"; PhoneNumber = "PhoneNumber1"; BirthYear = "BirthYear1";
        this.state = {
            dataUser
            // , UserName, Password, FirstName, LastName, Email, PhoneNumber, BirthYear 
        };
    };

    toMainAppScreen = (userName) => {
        const toMainAppScreen = NavigationActions.navigate({
            routeName: "MainAppScreen",
            params: { name: userName }
        })
        this.props.navigation.dispatch(toMainAppScreen);
    }

    _checkExistUser() {
        return fetch('http://103.252.1.5:8089/SocialPlaceServer/Action/DoCheckUserName.Action', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                this.state.dataUser.UserName
            ),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.mvCode == 1)
                    this._createNewUser();
                else
                    Alert.alert("Lỗi", "Tên tài khoản đã tồn tại.")
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _createNewUser() {
        return fetch('http://103.252.1.5:8089/SocialPlaceServer/DoRegister.Action', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                this.state.dataUser
            ),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.mvCode == 1)
                    this.toMainAppScreen(this.state.dataUser.UserName)
                else
                    Alert.alert("Lỗi", "Không tạo được tài khoản.")
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "white" }}>
                <View style={{ height: 50, width: "100%", backgroundColor: "skyblue", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Icon onPress={() => goBack()} s style={{ marginLeft: 16 }} name="ios-arrow-back" size={25} color="#fff" />
                    <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "white" }}>CẬP NHẬT TÀI KHOẢN</Text>
                    <Text style={{ marginRight: 16, fontFamily: "Roboto", fontSize: 18, color: "white" }}></Text>
                </View>


                <Image
                    style={{ height: 120, width: "100%" }}
                    source={{ uri: "https://i.pinimg.com/564x/09/02/83/0902833901f47df132448cb06cd9a3db--map-marker-mobile-marketing.jpg" }}
                />

                <ScrollView style={{ marginTop: 5, width: 320, height: 320 }}>

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

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Họ Người Dùng</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                        onChangeText={(text) => this.setState({
                            dataUser: {
                                ...this.state.dataUser,
                                FirstName: text
                            }
                        })}
                        value={this.state.dataUser.FirstName}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Tên Người Dùng</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                        onChangeText={(text) => this.setState({
                            dataUser: {
                                ...this.state.dataUser,
                                LastName: text
                            }
                        })}
                        value={this.state.dataUser.LastName}
                    />

                    <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "#49B68C" }}>Email</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 8 }}
                        onChangeText={(text) => this.setState({
                            dataUser: {
                                ...this.state.dataUser,
                                Email: text
                            }
                        })}
                        value={this.state.dataUser.Email}
                    />
                </ScrollView>

                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        // onPress={() => this._checkExistUser()}
                        onPress={() => this.toMainAppScreen(this.state.dataUser.UserName)}
                        style={{ height: 38, width: 200, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#49B68C", height: 30, width: 200, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white" }}>Cập Nhật</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            // <Container>
            //     <Header>
            //         <Body>
            //             <Title>Đăng ký Tài khoản</Title>
            //         </Body>
            //     </Header>
            //     <Content>
            //         <Form>
            //             <Item floatingLabel>
            //                 <Label>FirstName</Label>
            //                 <Input onChangeText={(text => this.setState({ FirstName: text }))} />
            //             </Item>
            //             <Item floatingLabel>
            //                 <Label>LastName</Label>
            //                 <Input onChangeText={(text => this.setState({ LastName: text }))} />
            //             </Item>
            //             <Item floatingLabel>
            //                 <Label>UserName</Label>
            //                 <Input onChangeText={(text => this.setState({ UserName: text }))} />
            //             </Item>
            //             <Item floatingLabel>
            //                 <Label>Password</Label>
            //                 <Input onChangeText={(text => this.setState({ Password: text }))} />
            //             </Item>
            //             <Item floatingLabel last>
            //                 <Label>Email</Label>
            //                 <Input onChangeText={(text => this.setState({ Email: text }))} />
            //             </Item>
            //         </Form>
            //         <Button
            //             onPress={() => {
            //                 Alert.alert(this.state.FirstName),
            //                     obj = {
            //                         UserName: this.state.UserName,
            //                         Password: this.state.Password,
            //                         FirstName: this.state.FirstName,
            //                         LastName: this.state.LastName,
            //                         Email: this.state.Email,
            //                         PhoneNumber: this.state.PhoneNumber
            //                     };
            //                 console.log("Object : ", obj);
            //             }}
            //             title="Alert State"

            //         />
            //         <Button
            //             onPress={() => {
            //                 obj = {
            //                     UserName: this.state.UserName,
            //                     Password: this.state.Password,
            //                     FirstName: this.state.FirstName,
            //                     LastName: this.state.LastName,
            //                     Email: this.state.Email,
            //                     PhoneNumber: this.state.PhoneNumber
            //                 };
            //                 this.setState({ dataUser: obj });
            //                 this.setState({
            //                     dataUser: {
            //                         UserName: this.state.UserName,
            //                         Password: this.state.Password,
            //                         FirstName: this.state.FirstName,
            //                         LastName: this.state.LastName,
            //                         Email: this.state.Email,
            //                         PhoneNumber: this.state.PhoneNumber
            //                     }
            //                 });

            //                 console.log("Check username co trung khong : ", this.state.dataUser.UserName)
            //                 // Alert.alert(this.state.dataUser.UserName, this.state.UserName),
            //                 //     console.log("Register dataUser: ", this.state.dataUser)
            //                 fetch('http://103.252.1.5:8089/SocialPlaceServer/Action/DoCheckUserName.Action', {
            //                     method: 'POST',
            //                     headers: {
            //                         Accept: 'application/json',
            //                         'Content-Type': 'application/json'
            //                     },
            //                     body: JSON.stringify(this.state.dataUser.UserName)
            //                 })
            //                     .then((response) => response.json())
            //                     .then((responseJson) => {
            //                         console.log("Register responseJson : ", responseJson)
            //                     })
            //                     .catch((error) => {
            //                         console.error(error);
            //                     });

            //             }}
            //             title="Create"
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
