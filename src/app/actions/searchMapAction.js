import ActionType from './actionType';
import RNGooglePlaces from 'react-native-google-places';


const {
		SEARCH_INPUT_CHANGE,
	GET_SELECTED_ADDRESS,
	GET_CURRENT_LOCATION,
	SHOW_PLACE_INFO } = ActionType;

//actin search input
const searchInputChange = (dispatch, searchInput) => {
	RNGooglePlaces.getAutocompletePredictions(searchInput,
		{
			country: "VN"
		}
	)
		.then((results) => {
			console.log("rs:  ", results);
			console.log("rs:  ", SEARCH_INPUT_CHANGE);
			return dispatch({
				type: SEARCH_INPUT_CHANGE,
				searchInput: results
			})
		}
		)
		.catch(error => console.log(error.message));
}

export const getSelectedAddress = (dispatch, placeID) => {
	RNGooglePlaces.lookUpPlaceByID(placeID)
		.then((results) => {
			dispatch({
				type: GET_SELECTED_ADDRESS,
				selectedAdress: results
			})
		})
		.catch((error) => console.log(error.message));
}

export const getCurrentLocation = (dispatch) => {
	RNGooglePlaces.getCurrentPlace()
		.then((results) => {
			window.alert(results)
			dispatch({
				type: GET_CURRENT_LOCATION,
				position: results
			})
		})
		.catch((error) => console.log(error.message));
}

export const toggleShowPlaceInfo = (dispatch, placeInfo) => {
	return dispatch({
		type: SHOW_PLACE_INFO,
		placeInfo: placeInfo
	})
}


export default searchInputChange;
