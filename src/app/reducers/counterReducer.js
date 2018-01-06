import Increse from '../actions/increaseAction';
import Decrese from '../actions/decreaseAction';

const initialState = {number: 0, actionType: ''};

const CounterReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {number: state.number + action.value, actionType: 'Incement'};
        case 'DECREMENT':
            return {number: state.number - action.value, actionType: 'DECREMENT'};
    }
    return state;
}

export default CounterReducer;