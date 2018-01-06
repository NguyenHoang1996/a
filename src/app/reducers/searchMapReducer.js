//import action type
import ActionType from '../actions/actionType';
import RNGooglePlaces from 'react-native-google-places';
import MapComp from '../components/mapComp';

const {
        SEARCH_INPUT_CHANGE, 
        GET_SELECTED_ADDRESS,
        GET_CURRENT_LOCATION,
        SHOW_PLACE_INFO } = ActionType;

//inital state
const initialState = {
    userInput: "",
    SearchResult: [],
    selectedAdress: [],
    position: {},
    placesInfo: {}
}

//handle Search Input change
const handleSearchInputChange = (state , action)=>{
    return {
        userInput: "",
        SearchResult: action.searchInput
    }      
}

// function moveMaptoLocation(latlng, key) {
//     this.refs.map.animateToRegion({
//       latitudeDelta: 0.002,
//       longitudeDelta: 0.002,
//       ...latlng
//     }, 1000);
//     setTimeout(() => {
//       console.log(this.refs, key);
//       this.refs[key].showCallout();
//     }, 1500);
// }

const handleGetSelectedAddress = (state , action) => {
    //window.alert(JSON.stringify(action.selectedAdress));
	return {
        selectedAdress: action.selectedAdress,
        SearchResult: []
    }
}

const handleGetCurrentLocation = (state,action) => {
    state.position = action.position;
    return state;
}
 
const handleTogglePlaceInfo = (state, action) => {
    action.placesInfo.toggle = !action.placesInfo.toggle;
    state.placesInfo = action.placesInfo;
    return state;
}

const ACTION_HANDLERS = {
    SEARCH_INPUT_CHANGE:handleSearchInputChange,
    GET_SELECTED_ADDRESS: handleGetSelectedAddress,
    GET_CURRENT_LOCATION: handleGetCurrentLocation,
    SHOW_PLACE_INFO: handleTogglePlaceInfo
}

const SearchMapReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}

export default SearchMapReducer;
