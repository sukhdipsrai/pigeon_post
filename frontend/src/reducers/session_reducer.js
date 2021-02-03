import { RECEIVE_CURRENT_USER, 
  RECEIVE_USER_LOGOUT, 
  RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

      const initialState = {
            isAuthenticated: false,
            userId: null
      };

const SessionReducer = (state = initialState, action) => {
          switch (action.type) {
        case RECEIVE_CURRENT_USER:
          return {
             
             isAuthenticated: !!action.currentUser,
             userId: action.currentUser.id
      };
        case RECEIVE_USER_LOGOUT:
           return {
               isAuthenticated: false,
                user: null
      };
        case RECEIVE_USER_SIGN_IN:
            return {
             ...state,
             isSignedIn: true
      }
          default:
          return state;
        }
      }
    // case TEST:
    //   return action.res.data;

    export default SessionReducer;