import {RECEIVE_ORIGIN, RECEIVE_DESTINATION} from '../actions/gapi_actions'


const defaultState = ({
    pickup_loc: null,
    dropoff_loc: null
})

const FormReducer = (state = defaultState, action)=>{
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch (action.type) {
        case RECEIVE_ORIGIN:
            newState.pickup_loc = action.cord
            return newState;
        case RECEIVE_DESTINATION:
            newState.dropoff_loc = action.cord
            return newState;
        default:
            return state;
    }
}

export default FormReducer;