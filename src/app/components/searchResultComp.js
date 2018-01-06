import React, {Component} from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { View, List, ListItem, Left, Body } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

var width = Dimensions.get("window").width;

export default class SearchResults extends Component{
    render(){
        var t = this;
        function handleSelectedAddress(placeID){   
            t.props.getSelectedAddress(placeID);
       }
       return(
        <View style={styles.searchResultsWrapper} >
            <List 
                dataArray={this.props.predictions}
                renderRow={(item)=>
                    <View>
                        <ListItem  onPress={()=>handleSelectedAddress(item.placeID)}
                            button avatar style = {styles.bodyContainer}>
                            <Left style={styles.leftContainer}>
                                <Icon style={styles.leftIcon} name="location-on" />
                            </Left>
                            <Body >
                                <Text style={styles.primaryText}>{item.primaryText}</Text>
                                <Text style={styles.secondaryText}>{item.secondaryText}</Text>
                            </Body>
                        </ListItem>
                    </View>
                }
            />
        </View>   
    );
    }	
};
const styles = StyleSheet.create({
    searchResultsWrapper:{
        top:65,
        position:"absolute",
        width:width ,
        height:1000,
        backgroundColor:"#fff",
        opacity:0.9
    },
    primaryText:{
        fontWeight: "bold",
        color:"#373737"
    },
    secondaryText:{
        fontStyle: "italic",
        color:"#7D7D7D",
    },
    leftContainer:{
        flexWrap: "wrap",
        alignItems: "flex-start",
        borderLeftColor:"#7D7D7D",
    },
    leftIcon:{
        fontSize:20,
        color:"#7D7D7D",
    },
    distance:{
        fontSize:12,
    },
    bodyContainer:{
        marginLeft:15,
        marginRight:10,
        //marginTop:10,
        marginBottom:2,
    }
});

//export default SearchResults;