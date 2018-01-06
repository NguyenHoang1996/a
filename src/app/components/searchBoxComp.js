import React, {Component} from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { View, InputGroup, Input } from "native-base";
//import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
var width = Dimensions.get("window").width;
// import {
// 	getInputData,
// 	getAddressPredictions,	
// } from "../actions/mapAction";


export default class SearchBox extends Component{
    render(){
        // const {getInputData, getAddressPredictions} = this.props;
        // const handleInput =(key, val) => {
        //     getInputData({
        //         key,
        //         value:val
        //     });
        //     getAddressPredictions();
        // }
        return(
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>					
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input 
							style={styles.inputSearch}
							placeholder="Tìm địa điểm..."
                            onChangeText={this.props.handleInput}
													
						/>
					</InputGroup>
				</View>				
			</View>

		);
    }    		
}

const styles = StyleSheet.create({
	searchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
});

// export default connect(state => {
//     return {
//       val: state
//     }
//   },
//   dispatch => {
//     return {
//         getInputData: (payload) => dispatch(getInputData(payload)),
//         getAddressPredictions: () => dispatch(getAddressPredictions())
//     }
//   })(SearchBox);