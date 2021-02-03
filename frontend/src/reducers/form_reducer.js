import {RECEIVE_ORIGIN, RECEIVE_DESTINATION} from '../actions/gapi_actions'


const defaultState = ({
    origin: '',
    destination: ''
})

const FormReducer = (state = defaultState, action)=>{
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch (action.type) {
        case RECEIVE_ORIGIN:
            
        case RECEIVE_DESTINATION:

        default:
            return state;
    }
}