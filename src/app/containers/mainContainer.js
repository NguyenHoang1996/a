/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from "react-navigation";
import ButtonHandle from '../components/buttonHandle';
import ViewComp from '../components/viewComp';
import {connect} from 'react-redux';
import MapComp from '../components/mapComp';
import SearchBox from '../components/searchBoxComp';
import SearchResults from '../components/searchResultComp';
import PlaceInfo from '../components/placeInfo';
import searchInputChange, 
  {
    getSelectedAddress,
    getCurrentLocation,
    toggleShowPlaceInfo} from '../actions/searchMapAction';


class MainContainer extends Component<{}> {     
  constructor(props){
    super(props);
    this.jumpMap = this.jumpMap.bind(this);
    this.state = {check: false};
  }
  componentDidMount() {
    console.log("main container refs: ", this.refs);
  }

  componentDidUpdate(prevProps, prevState) {

    if(this.props.searchData.selectedAdress){
      //window.alert(JSON.stringify(this.props.searchData.selectedAdress));
      this.jumpMap();
    }
  } 

  componentWillMount() {
    console.log("Will moun", this.props.searchData);
  }

  componentdiUp

  jumpMap(){
    
    //window.alert(region);
    this.refs.MapComp.jumpMaptoLocation(this.props.searchData.selectedAdress)
  }

  render() {
    console.log("main container props: ", this.props);
    const predictions = this.props.searchData.SearchResult;
    const selectedAdress = this.props.searchData.selectedAdress;
    const position = this.props.searchData.position;
    
    
    //window.alert(this.props.handleInputChange);
    return (
      <View style = {styles.container}>
        <MapComp navigation={this.props.navigation} ref = "MapComp" getCurrentLocation = {this.props.getCurrentLocation} position = {this.props.position}/>
        <SearchBox handleInput={this.props.handleInputChange}/>
        {
          predictions.length > 0 && 
          <SearchResults predictions={predictions} getSelectedAddress = {this.props.getAddress} jumpMap = {this.jumpMap}/>
        }           
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const mapAction = (dispatch) => { 
  return{
    handleInputChange:(searchInput)=>searchInputChange(dispatch, searchInput),
    getAddress:(placeID)=>getSelectedAddress(dispatch,placeID),
    getCurrentLocation: ()=>getCurrentLocation(dispatch)
  }    
}
export default connect(state => {
    return {
      searchData: state.SearchMapReducer
    }
  },mapAction)
  (MainContainer);
