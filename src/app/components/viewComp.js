import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
 import {connect} from 'react-redux';

class ViewComp extends Component<{}>{
     render() {
         console.log("View component: ",this.props);
        return(
            <View>
                <Text style = {styles.text}>{this.props.val.number}</Text>
            </View>
        )
     }
 }

 const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});

export default connect(state => {
    return {
      val: state.CounterReducer
    }
  },
  dispatch => {
    return {
        
    }
  })(ViewComp);