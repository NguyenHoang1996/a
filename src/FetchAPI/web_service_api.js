
import {FetchAPI, POST,GET, IMAGE} from './fetchAPI';

export function	get(id, param, callback){
		return (FetchAPI(id,param, GET)).then(response => response).then( parseData => {
			callback(parseData)
			return parseData
		}).catch(error => {
			return error
		})
	};

export function post(id,param,callback){
	console.log("method Post:"+id,param);
		return (FetchAPI(id, param, POST)).then(response => response).then( parseData => {
			console.log(parseData)
			callback(parseData)
			return parseData
		}).catch(error => {
			return error
		})
		
	};

export function postImage(param,callback){
		return(FetchAPI('Image/Post',param,IMAGE )).then(response => response).then( parseData => {
			callback(parseData);
		}).catch(error => {
			return error
		})

	};

