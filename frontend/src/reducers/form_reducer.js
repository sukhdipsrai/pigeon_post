import {RECEIVE_ORIGIN, RECEIVE_DESTINATION, REST_ORI_DEST} from '../actions/gapi_actions'


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
        case REST_ORI_DEST:
            return defaultState;
        default:
            return state;
    }
}

export default FormReducer;