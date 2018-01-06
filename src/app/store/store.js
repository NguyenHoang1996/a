import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import CounterReducer from '../reducers/counterReducer';
import SearchMapReducer from '../reducers/searchMapReducer';

const middleware = [thunk];

const enhancers = [];

export  const Store = createStore(combineReducers({ CounterReducer, SearchMapReducer}, {}, 
    compose(
        applyMiddleware(...middleware),
        ...enhancers)
    ));
