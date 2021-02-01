import * as API from '../util/api_util'

export const RECEIVE_USER_LOGOUT = ' RECEIVE_USER_LOGOUT';

export const TEST = "TEST"


export const testReact = (res) => {
    return {
        type: TEST,
        res
    }
}

export const test = () => dispatch=>{
    return API.test().then( (res) => dispatch(testReact(res)));
}