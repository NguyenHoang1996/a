import React, { Component } from "react";
import { Text, StyleSheet, Dimensions, Image } from "react-native";
import { View, List, ListItem, Left, Body, Button } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default class PlaceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('../images/attention.png')
        }
    }
    render() {
        var t = this;
        function handleSelectedAddress(placeID) {
            t.props.getSelectedAddress(placeID);
        }
        return (
            <View style={styles.searchResultsWrapper} >
                {/* <View>
                    <Left style={styles.leftContainer}>
                        <Image style={styles.photo} source={
                            require('../images/attention.png')
                        } />
                    </Left>
                    <Body >
                        <Text style={styles.primaryText}>Tên địa điểm</Text>
                        <Text style={styles.secondaryText}>0 bài viết</Text>
                        <Button><Text>Chia sẽ địa điểm này</Text></Button>
                    </Body>
                </View> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image
                            style={{ width: 85, height: 85}}
                            source={require('../images/attention.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.primaryText}>Tên địa điểm</Text>
                        <Text style={styles.secondaryText}>0 bài viết</Text>
                        <Button><Text>Chia sẽ địa điểm này</Text></Button>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    searchResultsWrapper: {
        top: height - 150,
        position: "absolute",
        width: width,
        height: 90,
        backgroundColor: "#fff",
        opacity: 0.9
    },
    primaryText: {
        fontWeight: "bold",
        color: "#373737"
    },
    secondaryText: {
        fontStyle: "italic",
        color: "#7D7D7D",
    },
    leftContainer: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        borderLeftColor: "#7D7D7D",
    },
    leftIcon: {
        fontSize: 20,
        color: "#7D7D7D",
    },
    distance: {
        fontSize: 12,
    },
    bodyContainer: {
        marginLeft: 15,
        marginRight: 10,
        //marginTop:10,
        marginBottom: 2,
    },
    photo: {
        flex: 1,
        width: 166,
        height: 83
    }
});

//export default SearchResults;