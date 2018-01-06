import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import {connect} from 'react-redux';
import SearchBox from './searchBoxComp';
import SearchResults from './searchResultComp';
import searchInputChange, {getSelectedAddress} from '../actions/searchMapAction';

class AddLocation extends Component{
    render(){
        const predictions = this.props.searchData.SearchResult;
        const selectedAdress = this.props.searchData.selectedAdress;
        return(
            <View style = {styles.container}>
                <SearchBox handleInput={this.props.handleInputChange}/>
                {
                predictions.length > 0 && 
                <SearchResults predictions={predictions} getSelectedAddress = {this.props.getAddress}/>
                }
                <TextInput/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapAction = (dispatch) => { 
    return{
      handleInputChange:(searchInput)=>searchInputChange(dispatch, searchInput),
      getAddress:(placeID)=>getSelectedAddress(dispatch,placeID)
    }    
  }

export default connect(state => {
    return {
      searchData: state.SearchMapReducer
    }
  },mapAction)
  (AddLocation);