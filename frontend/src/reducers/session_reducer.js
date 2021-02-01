import { RECEIVE_USER_LOGOUT, TEST } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case TEST:
      return action.res.data;
    default:
      return state;
  }
}